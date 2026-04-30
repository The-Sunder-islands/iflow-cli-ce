/**
 * @module Irn
 * @category unknown
 * @label unknown
 * @position 541 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Irn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Irn = T((k$e) => {
  "use strict";
  Object.defineProperty(k$e, "__esModule", { value: !0 });
  k$e.PrometheusExporter = void 0;
  var Kbe = (Zt(), bt(cr)),
    LHo = Ii(),
    KIt = Dx(),
    MHo = Ae("http"),
    FHo = YIt(),
    UHo = Ae("url"),
    JIt = class t extends KIt.MetricReader {
      static DEFAULT_OPTIONS = {
        host: void 0,
        port: 9464,
        endpoint: "/metrics",
        prefix: "",
        appendTimestamp: !1,
        withResourceConstantLabels: void 0,
      };
      _host;
      _port;
      _baseUrl;
      _endpoint;
      _server;
      _prefix;
      _appendTimestamp;
      _serializer;
      _startServerPromise;
      constructor(e = {}, r = () => {}) {
        (super({
          aggregationSelector: (o) => ({ type: KIt.AggregationType.DEFAULT }),
          aggregationTemporalitySelector: (o) => KIt.AggregationTemporality.CUMULATIVE,
          metricProducers: e.metricProducers,
        }),
          (this._host = e.host || process.env.OTEL_EXPORTER_PROMETHEUS_HOST || t.DEFAULT_OPTIONS.host),
          (this._port = e.port || Number(process.env.OTEL_EXPORTER_PROMETHEUS_PORT) || t.DEFAULT_OPTIONS.port),
          (this._prefix = e.prefix || t.DEFAULT_OPTIONS.prefix),
          (this._appendTimestamp =
            typeof e.appendTimestamp == "boolean" ? e.appendTimestamp : t.DEFAULT_OPTIONS.appendTimestamp));
        let n = e.withResourceConstantLabels || t.DEFAULT_OPTIONS.withResourceConstantLabels;
        ((this._server = (0, MHo.createServer)(this._requestHandler).unref()),
          (this._serializer = new FHo.PrometheusSerializer(this._prefix, this._appendTimestamp, n)),
          (this._baseUrl = `http://${this._host}:${this._port}/`),
          (this._endpoint = (e.endpoint || t.DEFAULT_OPTIONS.endpoint).replace(/^([^/])/, "/$1")),
          e.preventServerStart !== !0
            ? this.startServer().then(r, (o) => {
                (Kbe.diag.error(o), r(o));
              })
            : r && queueMicrotask(r));
      }
      async onForceFlush() {}
      onShutdown() {
        return this.stopServer();
      }
      stopServer() {
        return this._server
          ? new Promise((e) => {
              this._server.close((r) => {
                (r
                  ? r.code !== "ERR_SERVER_NOT_RUNNING" && (0, LHo.globalErrorHandler)(r)
                  : Kbe.diag.debug("Prometheus exporter was stopped"),
                  e());
              });
            })
          : (Kbe.diag.debug("Prometheus stopServer() was called but server was never started."), Promise.resolve());
      }
      startServer() {
        return (
          (this._startServerPromise ??= new Promise((e, r) => {
            (this._server.once("error", r),
              this._server.listen({ port: this._port, host: this._host }, () => {
                (Kbe.diag.debug(`Prometheus exporter server started: ${this._host}:${this._port}/${this._endpoint}`),
                  e());
              }));
          })),
          this._startServerPromise
        );
      }
      getMetricsRequestHandler(e, r) {
        this._exportMetrics(r);
      }
      _requestHandler = (e, r) => {
        e.url != null && new UHo.URL(e.url, this._baseUrl).pathname === this._endpoint
          ? this._exportMetrics(r)
          : this._notFound(r);
      };
      _exportMetrics = (e) => {
        ((e.statusCode = 200),
          e.setHeader("content-type", "text/plain"),
          this.collect().then(
            (r) => {
              let { resourceMetrics: n, errors: o } = r;
              (o.length && Kbe.diag.error("PrometheusExporter: metrics collection errors", ...o),
                e.end(this._serializer.serialize(n)));
            },
            (r) => {
              e.end(`# failed to export metrics: ${r}`);
            },
          ));
      };
      _notFound = (e) => {
        ((e.statusCode = 404), e.end());
      };
    };
  k$e.PrometheusExporter = JIt;
});