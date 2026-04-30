/**
 * @module lnn
 * @category network/grpc
 * @label grpc
 * @position 566 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lnn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lnn = T((F_) => {
  "use strict";
  Object.defineProperty(F_, "__esModule", { value: !0 });
  F_.getPropagatorFromEnv =
    F_.getSpanProcessorsFromEnv =
    F_.getOtlpProtocolFromEnv =
    F_.filterBlanksAndNulls =
    F_.getResourceDetectorsFromEnv =
      void 0;
  var iL = (Zt(), bt(cr)),
    oL = Ii(),
    ann = A4t(),
    LVo = Lrn(),
    MVo = Urn(),
    FVo = Jrn(),
    eAe = rre(),
    J$e = ZMe(),
    p7t = inn(),
    UVo = snn(),
    $Vo = "env",
    jVo = "host",
    QVo = "os",
    GVo = "process",
    qVo = "serviceinstance";
  function HVo() {
    let t = new Map([
        [$Vo, eAe.envDetector],
        [jVo, eAe.hostDetector],
        [QVo, eAe.osDetector],
        [qVo, eAe.serviceInstanceIdDetector],
        [GVo, eAe.processDetector],
      ]),
      e = (0, oL.getStringListFromEnv)("OTEL_NODE_RESOURCE_DETECTORS") ?? ["all"];
    return e.includes("all")
      ? [...t.values()].flat()
      : e.includes("none")
        ? []
        : e.flatMap((r) => {
            let n = t.get(r);
            return (
              n ||
                iL.diag.warn(
                  `Invalid resource detector "${r}" specified in the environment variable OTEL_NODE_RESOURCE_DETECTORS`,
                ),
              n || []
            );
          });
  }
  F_.getResourceDetectorsFromEnv = HVo;
  function unn(t) {
    return t.map((e) => e.trim()).filter((e) => e !== "null" && e !== "");
  }
  F_.filterBlanksAndNulls = unn;
  function cnn() {
    return (
      (0, oL.getStringFromEnv)("OTEL_EXPORTER_OTLP_TRACES_PROTOCOL") ??
      (0, oL.getStringFromEnv)("OTEL_EXPORTER_OTLP_PROTOCOL") ??
      "http/protobuf"
    );
  }
  F_.getOtlpProtocolFromEnv = cnn;
  function VVo() {
    let t = cnn();
    switch (t) {
      case "grpc":
        return new MVo.OTLPTraceExporter();
      case "http/json":
        return new LVo.OTLPTraceExporter();
      case "http/protobuf":
        return new ann.OTLPTraceExporter();
      default:
        return (
          iL.diag.warn(`Unsupported OTLP traces protocol: ${t}. Using http/protobuf.`),
          new ann.OTLPTraceExporter()
        );
    }
  }
  function WVo() {
    try {
      let { JaegerExporter: t } = Ae("@opentelemetry/exporter-jaeger");
      return new t();
    } catch (t) {
      throw new Error(
        `Could not instantiate JaegerExporter. This could be due to the JaegerExporter's lack of support for bundling. If possible, use @opentelemetry/exporter-trace-otlp-proto instead. Original Error: ${t}`,
      );
    }
  }
  function zVo() {
    let t = new Map([
        ["otlp", () => VVo()],
        ["zipkin", () => new FVo.ZipkinExporter()],
        ["console", () => new J$e.ConsoleSpanExporter()],
        ["jaeger", () => WVo()],
      ]),
      e = [],
      r = [],
      n = unn(Array.from(new Set((0, oL.getStringListFromEnv)("OTEL_TRACES_EXPORTER"))));
    if (n[0] === "none")
      return (iL.diag.warn('OTEL_TRACES_EXPORTER contains "none". SDK will not be initialized.'), []);
    n.length === 0
      ? (iL.diag.debug("OTEL_TRACES_EXPORTER is empty. Using default otlp exporter."), (n = ["otlp"]))
      : n.length > 1 &&
        n.includes("none") &&
        (iL.diag.warn('OTEL_TRACES_EXPORTER contains "none" along with other exporters. Using default otlp exporter.'),
        (n = ["otlp"]));
    for (let o of n) {
      let s = t.get(o)?.();
      s ? e.push(s) : iL.diag.warn(`Unrecognized OTEL_TRACES_EXPORTER value: ${o}.`);
    }
    for (let o of e)
      o instanceof J$e.ConsoleSpanExporter
        ? r.push(new J$e.SimpleSpanProcessor(o))
        : r.push(new J$e.BatchSpanProcessor(o));
    return (
      e.length === 0 &&
        iL.diag.warn("Unable to set up trace exporter(s) due to invalid exporter and/or protocol values."),
      r
    );
  }
  F_.getSpanProcessorsFromEnv = zVo;
  function YVo() {
    let t = (0, oL.getStringListFromEnv)("OTEL_PROPAGATORS");
    if (t == null) return;
    let e = new Map([
        ["tracecontext", () => new oL.W3CTraceContextPropagator()],
        ["baggage", () => new oL.W3CBaggagePropagator()],
        ["b3", () => new p7t.B3Propagator()],
        ["b3multi", () => new p7t.B3Propagator({ injectEncoding: p7t.B3InjectEncoding.MULTI_HEADER })],
        ["jaeger", () => new UVo.JaegerPropagator()],
      ]),
      r = Array.from(new Set(t)),
      o = r
        .map((s) => {
          let a = e.get(s)?.();
          if (!a) {
            iL.diag.warn(`Propagator "${s}" requested through environment variable is unavailable.`);
            return;
          }
          return a;
        })
        .reduce((s, a) => (a && s.push(a), s), []);
    return o.length === 0 ? null : r.length === 1 ? o[0] : new oL.CompositePropagator({ propagators: o });
  }
  F_.getPropagatorFromEnv = YVo;
});