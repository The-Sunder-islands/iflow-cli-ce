/**
 * @module Krn
 * @category unknown
 * @label unknown
 * @position 555 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Krn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Krn = T((H$e) => {
  "use strict";
  Object.defineProperty(H$e, "__esModule", { value: !0 });
  H$e.ZipkinExporter = void 0;
  var Wrn = (Zt(), bt(cr)),
    zrn = Ii(),
    Yrn = t7t(),
    n7t = Hrn(),
    i7t = ($1(), bt(Ih)),
    sVo = Vrn(),
    o7t = class {
      DEFAULT_SERVICE_NAME = "OpenTelemetry Service";
      _statusCodeTagName;
      _statusDescriptionTagName;
      _urlStr;
      _send;
      _getHeaders;
      _serviceName;
      _isShutdown;
      _sendingPromises = [];
      constructor(e = {}) {
        ((this._urlStr =
          e.url ||
          ((0, zrn.getStringFromEnv)("OTEL_EXPORTER_ZIPKIN_ENDPOINT") ?? "http://localhost:9411/api/v2/spans")),
          (this._send = (0, Yrn.prepareSend)(this._urlStr, e.headers)),
          (this._serviceName = e.serviceName),
          (this._statusCodeTagName = e.statusCodeTagName || n7t.defaultStatusCodeTagName),
          (this._statusDescriptionTagName = e.statusDescriptionTagName || n7t.defaultStatusErrorTagName),
          (this._isShutdown = !1),
          typeof e.getExportRequestHeaders == "function"
            ? (this._getHeaders = (0, sVo.prepareGetHeaders)(e.getExportRequestHeaders))
            : (this._beforeSend = function () {}));
      }
      export(e, r) {
        let n = String(
          this._serviceName || e[0].resource.attributes[i7t.ATTR_SERVICE_NAME] || this.DEFAULT_SERVICE_NAME,
        );
        if ((Wrn.diag.debug("Zipkin exporter export"), this._isShutdown)) {
          setTimeout(() => r({ code: zrn.ExportResultCode.FAILED, error: new Error("Exporter has been shutdown") }));
          return;
        }
        let o = new Promise((a) => {
          this._sendSpans(e, n, (u) => {
            (a(), r(u));
          });
        });
        this._sendingPromises.push(o);
        let s = () => {
          let a = this._sendingPromises.indexOf(o);
          this._sendingPromises.splice(a, 1);
        };
        o.then(s, s);
      }
      shutdown() {
        return (Wrn.diag.debug("Zipkin exporter shutdown"), (this._isShutdown = !0), this.forceFlush());
      }
      forceFlush() {
        return new Promise((e, r) => {
          Promise.all(this._sendingPromises).then(() => {
            e();
          }, r);
        });
      }
      _beforeSend() {
        this._getHeaders && (this._send = (0, Yrn.prepareSend)(this._urlStr, this._getHeaders()));
      }
      _sendSpans(e, r, n) {
        let o = e.map((s) =>
          (0, n7t.toZipkinSpan)(
            s,
            String(s.attributes[i7t.ATTR_SERVICE_NAME] || s.resource.attributes[i7t.ATTR_SERVICE_NAME] || r),
            this._statusCodeTagName,
            this._statusDescriptionTagName,
          ),
        );
        return (
          this._beforeSend(),
          this._send(o, (s) => {
            if (n) return n(s);
          })
        );
      }
    };
  H$e.ZipkinExporter = o7t;
});