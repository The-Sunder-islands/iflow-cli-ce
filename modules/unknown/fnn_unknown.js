/**
 * @module fnn
 * @category unknown
 * @label unknown
 * @position 567 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (fnn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var fnn = T((X$e) => {
  "use strict";
  Object.defineProperty(X$e, "__esModule", { value: !0 });
  X$e.NodeSDK = void 0;
  var p2 = (Zt(), bt(cr)),
    KVo = Xte(),
    JVo = KJr(),
    lne = rre(),
    tAe = nSt(),
    XVo = x4t(),
    ZVo = brn(),
    h7t = Crn(),
    eWo = xrn(),
    mnn = S4t(),
    tWo = kBe(),
    rWo = Rrn(),
    Bq = Dx(),
    nWo = ZMe(),
    iWo = DMe(),
    oWo = ($1(), bt(Ih)),
    sL = Ii(),
    g7t = lnn();
  function dnn(t, e) {
    return parseInt(process.env[t] || "") || e;
  }
  function sWo() {
    let t = [],
      e = (0, sL.getStringListFromEnv)("OTEL_METRICS_EXPORTER");
    return e
      ? (e.length === 0 && p2.diag.debug("OTEL_METRICS_EXPORTER is empty. Using default otlp exporter."),
        e.includes("none")
          ? (p2.diag.info('OTEL_METRICS_EXPORTER contains "none". Metric provider will not be initialized.'), t)
          : (e.forEach((r) => {
              if (r === "otlp") {
                let n =
                    process.env.OTEL_EXPORTER_OTLP_METRICS_PROTOCOL?.trim() ||
                    process.env.OTEL_EXPORTER_OTLP_PROTOCOL?.trim(),
                  o = dnn("OTEL_METRIC_EXPORT_INTERVAL", 6e4),
                  s = dnn("OTEL_METRIC_EXPORT_TIMEOUT", 3e4);
                switch (n) {
                  case "grpc":
                    t.push(
                      new Bq.PeriodicExportingMetricReader({
                        exporter: new eWo.OTLPMetricExporter(),
                        exportIntervalMillis: o,
                        exportTimeoutMillis: s,
                      }),
                    );
                    break;
                  case "http/json":
                    t.push(
                      new Bq.PeriodicExportingMetricReader({
                        exporter: new tWo.OTLPMetricExporter(),
                        exportIntervalMillis: o,
                        exportTimeoutMillis: s,
                      }),
                    );
                    break;
                  case "http/protobuf":
                    t.push(
                      new Bq.PeriodicExportingMetricReader({
                        exporter: new mnn.OTLPMetricExporter(),
                        exportIntervalMillis: o,
                        exportTimeoutMillis: s,
                      }),
                    );
                    break;
                  default:
                    (p2.diag.warn(`Unsupported OTLP metrics protocol: "${n}". Using http/protobuf.`),
                      t.push(
                        new Bq.PeriodicExportingMetricReader({
                          exporter: new mnn.OTLPMetricExporter(),
                          exportIntervalMillis: o,
                          exportTimeoutMillis: s,
                        }),
                      ));
                }
              } else
                r === "console"
                  ? t.push(new Bq.PeriodicExportingMetricReader({ exporter: new Bq.ConsoleMetricExporter() }))
                  : r === "prometheus"
                    ? t.push(new rWo.PrometheusExporter())
                    : p2.diag.warn(
                        `Unsupported OTEL_METRICS_EXPORTER value: "${r}". Supported values are: otlp, console, prometheus, none.`,
                      );
            }),
            t))
      : t;
  }
  var b7t = class {
    _tracerProviderConfig;
    _loggerProviderConfig;
    _meterProviderConfig;
    _instrumentations;
    _resource;
    _resourceDetectors;
    _autoDetectResources;
    _tracerProvider;
    _loggerProvider;
    _meterProvider;
    _serviceName;
    _configuration;
    _disabled;
    constructor(e = {}) {
      (0, sL.getBooleanFromEnv)("OTEL_SDK_DISABLED") && (this._disabled = !0);
      let r = (0, sL.getStringFromEnv)("OTEL_LOG_LEVEL");
      if (
        (r != null && p2.diag.setLogger(new p2.DiagConsoleLogger(), { logLevel: (0, sL.diagLogLevelFromString)(r) }),
        (this._configuration = e),
        (this._resource = e.resource ?? (0, lne.defaultResource)()),
        (this._autoDetectResources = e.autoDetectResources ?? !0),
        this._autoDetectResources
          ? e.resourceDetectors != null
            ? (this._resourceDetectors = e.resourceDetectors)
            : (0, sL.getStringFromEnv)("OTEL_NODE_RESOURCE_DETECTORS")
              ? (this._resourceDetectors = (0, g7t.getResourceDetectorsFromEnv)())
              : (this._resourceDetectors = [lne.envDetector, lne.processDetector, lne.hostDetector])
          : (this._resourceDetectors = []),
        (this._serviceName = e.serviceName),
        e.traceExporter || e.spanProcessor || e.spanProcessors)
      ) {
        let n = {};
        (e.sampler && (n.sampler = e.sampler),
          e.spanLimits && (n.spanLimits = e.spanLimits),
          e.idGenerator && (n.idGenerator = e.idGenerator),
          e.spanProcessor &&
            p2.diag.warn("The 'spanProcessor' option is deprecated. Please use 'spanProcessors' instead."));
        let o = e.spanProcessor ?? new nWo.BatchSpanProcessor(e.traceExporter),
          s = e.spanProcessors ?? [o];
        this._tracerProviderConfig = {
          tracerConfig: n,
          spanProcessors: s,
          contextManager: e.contextManager,
          textMapPropagator: e.textMapPropagator,
        };
      }
      if (
        (e.logRecordProcessors
          ? (this._loggerProviderConfig = { logRecordProcessors: e.logRecordProcessors })
          : e.logRecordProcessor
            ? ((this._loggerProviderConfig = { logRecordProcessors: [e.logRecordProcessor] }),
              p2.diag.warn("The 'logRecordProcessor' option is deprecated. Please use 'logRecordProcessors' instead."))
            : this.configureLoggerProviderFromEnv(),
        e.metricReaders || e.metricReader || e.views)
      ) {
        let n = {};
        (e.metricReaders
          ? (n.readers = e.metricReaders)
          : e.metricReader &&
            ((n.readers = [e.metricReader]),
            p2.diag.warn("The 'metricReader' option is deprecated. Please use 'metricReaders' instead.")),
          e.views && (n.views = e.views),
          (this._meterProviderConfig = n));
      }
      this._instrumentations = e.instrumentations?.flat() ?? [];
    }
    start() {
      if (this._disabled) return;
      if (
        ((0, JVo.registerInstrumentations)({ instrumentations: this._instrumentations }), this._autoDetectResources)
      ) {
        let n = { detectors: this._resourceDetectors };
        this._resource = this._resource.merge((0, lne.detectResources)(n));
      }
      this._resource =
        this._serviceName === void 0
          ? this._resource
          : this._resource.merge((0, lne.resourceFromAttributes)({ [oWo.ATTR_SERVICE_NAME]: this._serviceName }));
      let e = this._tracerProviderConfig
        ? this._tracerProviderConfig.spanProcessors
        : (0, g7t.getSpanProcessorsFromEnv)();
      if (
        ((this._tracerProvider = new iWo.NodeTracerProvider({
          ...this._configuration,
          resource: this._resource,
          spanProcessors: e,
        })),
        e.length > 0 &&
          this._tracerProvider.register({
            contextManager: this._tracerProviderConfig?.contextManager ?? this._configuration?.contextManager,
            propagator: this._tracerProviderConfig?.textMapPropagator ?? (0, g7t.getPropagatorFromEnv)(),
          }),
        this._loggerProviderConfig)
      ) {
        let n = new tAe.LoggerProvider({
          resource: this._resource,
          processors: this._loggerProviderConfig.logRecordProcessors,
        });
        ((this._loggerProvider = n), KVo.logs.setGlobalLoggerProvider(n));
      }
      let r = sWo();
      if (this._meterProviderConfig || r.length > 0) {
        let n = [];
        (this._meterProviderConfig?.readers && n.push(...this._meterProviderConfig.readers),
          n.length === 0 && r.forEach((s) => n.push(s)));
        let o = new Bq.MeterProvider({
          resource: this._resource,
          views: this._meterProviderConfig?.views ?? [],
          readers: n,
        });
        ((this._meterProvider = o), p2.metrics.setGlobalMeterProvider(o));
        for (let s of this._instrumentations) s.setMeterProvider(p2.metrics.getMeterProvider());
      }
    }
    shutdown() {
      let e = [];
      return (
        this._tracerProvider && e.push(this._tracerProvider.shutdown()),
        this._loggerProvider && e.push(this._loggerProvider.shutdown()),
        this._meterProvider && e.push(this._meterProvider.shutdown()),
        Promise.all(e).then(() => {})
      );
    }
    configureLoggerProviderFromEnv() {
      let e = (0, sL.getStringListFromEnv)("OTEL_LOGS_EXPORTER") ?? [];
      if (
        (e.length === 0 && (p2.diag.debug("OTEL_LOGS_EXPORTER is empty. Using default otlp exporter."), e.push("otlp")),
        e.includes("none"))
      ) {
        p2.diag.info('OTEL_LOGS_EXPORTER contains "none". Logger provider will not be initialized.');
        return;
      }
      let r = [];
      (e.forEach((n) => {
        if (n === "otlp") {
          let o = (
            (0, sL.getStringFromEnv)("OTEL_EXPORTER_OTLP_LOGS_PROTOCOL") ??
            (0, sL.getStringFromEnv)("OTEL_EXPORTER_OTLP_PROTOCOL")
          )?.trim();
          switch (o) {
            case "grpc":
              r.push(new ZVo.OTLPLogExporter());
              break;
            case "http/json":
              r.push(new XVo.OTLPLogExporter());
              break;
            case "http/protobuf":
              r.push(new h7t.OTLPLogExporter());
              break;
            case void 0:
            case "":
              r.push(new h7t.OTLPLogExporter());
              break;
            default:
              (p2.diag.warn(`Unsupported OTLP logs protocol: "${o}". Using http/protobuf.`),
                r.push(new h7t.OTLPLogExporter()));
          }
        } else
          n === "console"
            ? r.push(new tAe.ConsoleLogRecordExporter())
            : p2.diag.warn(`Unsupported OTEL_LOGS_EXPORTER value: "${n}". Supported values are: otlp, console, none.`);
      }),
        r.length > 0 &&
          (this._loggerProviderConfig = {
            logRecordProcessors: r.map((n) =>
              n instanceof tAe.ConsoleLogRecordExporter
                ? new tAe.SimpleLogRecordProcessor(n)
                : new tAe.BatchLogRecordProcessor(n),
            ),
          }));
    }
  };
  X$e.NodeSDK = b7t;
});