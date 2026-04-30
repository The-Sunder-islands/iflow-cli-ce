/**
 * @module iwt
 * @category telemetry/otel
 * @label opentelemetry
 * @position 390 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (iwt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var iwt = T((hre) => {
  "use strict";
  Object.defineProperty(hre, "__esModule", { value: !0 });
  hre.buildSamplerFromEnv = hre.loadDefaultConfig = void 0;
  var nwt = (Zt(), bt(cr)),
    Gx = Ii(),
    GKr = OMe(),
    rwt = PMe(),
    FMe = ZSt(),
    qKr = twt(),
    qx;
  (function (t) {
    ((t.AlwaysOff = "always_off"),
      (t.AlwaysOn = "always_on"),
      (t.ParentBasedAlwaysOff = "parentbased_always_off"),
      (t.ParentBasedAlwaysOn = "parentbased_always_on"),
      (t.ParentBasedTraceIdRatio = "parentbased_traceidratio"),
      (t.TraceIdRatio = "traceidratio"));
  })(qx || (qx = {}));
  var UMe = 1;
  function ONo() {
    return {
      sampler: VKr(),
      forceFlushTimeoutMillis: 3e4,
      generalLimits: {
        attributeValueLengthLimit: (0, Gx.getNumberFromEnv)("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0,
        attributeCountLimit: (0, Gx.getNumberFromEnv)("OTEL_ATTRIBUTE_COUNT_LIMIT") ?? 128,
      },
      spanLimits: {
        attributeValueLengthLimit: (0, Gx.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0,
        attributeCountLimit: (0, Gx.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT") ?? 128,
        linkCountLimit: (0, Gx.getNumberFromEnv)("OTEL_SPAN_LINK_COUNT_LIMIT") ?? 128,
        eventCountLimit: (0, Gx.getNumberFromEnv)("OTEL_SPAN_EVENT_COUNT_LIMIT") ?? 128,
        attributePerEventCountLimit: (0, Gx.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT") ?? 128,
        attributePerLinkCountLimit: (0, Gx.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT") ?? 128,
      },
    };
  }
  hre.loadDefaultConfig = ONo;
  function VKr() {
    let t = (0, Gx.getStringFromEnv)("OTEL_TRACES_SAMPLER") ?? qx.ParentBasedAlwaysOn;
    switch (t) {
      case qx.AlwaysOn:
        return new rwt.AlwaysOnSampler();
      case qx.AlwaysOff:
        return new GKr.AlwaysOffSampler();
      case qx.ParentBasedAlwaysOn:
        return new FMe.ParentBasedSampler({ root: new rwt.AlwaysOnSampler() });
      case qx.ParentBasedAlwaysOff:
        return new FMe.ParentBasedSampler({ root: new GKr.AlwaysOffSampler() });
      case qx.TraceIdRatio:
        return new qKr.TraceIdRatioBasedSampler(HKr());
      case qx.ParentBasedTraceIdRatio:
        return new FMe.ParentBasedSampler({ root: new qKr.TraceIdRatioBasedSampler(HKr()) });
      default:
        return (
          nwt.diag.error(`OTEL_TRACES_SAMPLER value "${t}" invalid, defaulting to "${qx.ParentBasedAlwaysOn}".`),
          new FMe.ParentBasedSampler({ root: new rwt.AlwaysOnSampler() })
        );
    }
  }
  hre.buildSamplerFromEnv = VKr;
  function HKr() {
    let t = (0, Gx.getNumberFromEnv)("OTEL_TRACES_SAMPLER_ARG");
    return t == null
      ? (nwt.diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${UMe}.`), UMe)
      : t < 0 || t > 1
        ? (nwt.diag.error(
            `OTEL_TRACES_SAMPLER_ARG=${t} was given, but it is out of range ([0..1]), defaulting to ${UMe}.`,
          ),
          UMe)
        : t;
  }
});