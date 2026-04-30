/**
 * @module kSt
 * @category telemetry/otel
 * @label opentelemetry
 * @position 368 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kSt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kSt = T((lre) => {
  "use strict";
  Object.defineProperty(lre, "__esModule", { value: !0 });
  lre.buildSamplerFromEnv = lre.loadDefaultConfig = void 0;
  var RSt = (Zt(), bt(cr)),
    $x = Ii(),
    bKr = sMe(),
    ISt = uMe(),
    dMe = xSt(),
    AKr = DSt(),
    jx;
  (function (t) {
    ((t.AlwaysOff = "always_off"),
      (t.AlwaysOn = "always_on"),
      (t.ParentBasedAlwaysOff = "parentbased_always_off"),
      (t.ParentBasedAlwaysOn = "parentbased_always_on"),
      (t.ParentBasedTraceIdRatio = "parentbased_traceidratio"),
      (t.TraceIdRatio = "traceidratio"));
  })(jx || (jx = {}));
  var fMe = 1;
  function WOo() {
    return {
      sampler: _Kr(),
      forceFlushTimeoutMillis: 3e4,
      generalLimits: {
        attributeValueLengthLimit: (0, $x.getNumberFromEnv)("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0,
        attributeCountLimit: (0, $x.getNumberFromEnv)("OTEL_ATTRIBUTE_COUNT_LIMIT") ?? 128,
      },
      spanLimits: {
        attributeValueLengthLimit: (0, $x.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0,
        attributeCountLimit: (0, $x.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT") ?? 128,
        linkCountLimit: (0, $x.getNumberFromEnv)("OTEL_SPAN_LINK_COUNT_LIMIT") ?? 128,
        eventCountLimit: (0, $x.getNumberFromEnv)("OTEL_SPAN_EVENT_COUNT_LIMIT") ?? 128,
        attributePerEventCountLimit: (0, $x.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT") ?? 128,
        attributePerLinkCountLimit: (0, $x.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT") ?? 128,
      },
    };
  }
  lre.loadDefaultConfig = WOo;
  function _Kr() {
    let t = (0, $x.getStringFromEnv)("OTEL_TRACES_SAMPLER") ?? jx.ParentBasedAlwaysOn;
    switch (t) {
      case jx.AlwaysOn:
        return new ISt.AlwaysOnSampler();
      case jx.AlwaysOff:
        return new bKr.AlwaysOffSampler();
      case jx.ParentBasedAlwaysOn:
        return new dMe.ParentBasedSampler({ root: new ISt.AlwaysOnSampler() });
      case jx.ParentBasedAlwaysOff:
        return new dMe.ParentBasedSampler({ root: new bKr.AlwaysOffSampler() });
      case jx.TraceIdRatio:
        return new AKr.TraceIdRatioBasedSampler(yKr());
      case jx.ParentBasedTraceIdRatio:
        return new dMe.ParentBasedSampler({ root: new AKr.TraceIdRatioBasedSampler(yKr()) });
      default:
        return (
          RSt.diag.error(`OTEL_TRACES_SAMPLER value "${t}" invalid, defaulting to "${jx.ParentBasedAlwaysOn}".`),
          new dMe.ParentBasedSampler({ root: new ISt.AlwaysOnSampler() })
        );
    }
  }
  lre.buildSamplerFromEnv = _Kr;
  function yKr() {
    let t = (0, $x.getNumberFromEnv)("OTEL_TRACES_SAMPLER_ARG");
    return t == null
      ? (RSt.diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${fMe}.`), fMe)
      : t < 0 || t > 1
        ? (RSt.diag.error(
            `OTEL_TRACES_SAMPLER_ARG=${t} was given, but it is out of range ([0..1]), defaulting to ${fMe}.`,
          ),
          fMe)
        : t;
  }
});