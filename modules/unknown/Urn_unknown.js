/**
 * @module Urn
 * @category unknown
 * @label unknown
 * @position 549 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Urn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Urn = T((F$e) => {
  "use strict";
  Object.defineProperty(F$e, "__esModule", { value: !0 });
  F$e.OTLPTraceExporter = void 0;
  var KHo = Frn();
  Object.defineProperty(F$e, "OTLPTraceExporter", {
    enumerable: !0,
    get: function () {
      return KHo.OTLPTraceExporter;
    },
  });
});
var $rn = T(($$e) => {
  "use strict";
  Object.defineProperty($$e, "__esModule", { value: !0 });
  $$e.prepareSend = void 0;
  var e7t = (Zt(), bt(cr)),
    U$e = Ii(),
    JHo = Ae("http"),
    XHo = Ae("https");
  function ZHo(t, e) {
    let r = new URL(t),
      n = Object.assign({ method: "POST", headers: { "Content-Type": "application/json", ...e } });
    return function (s, a) {
      if (s.length === 0)
        return (e7t.diag.debug("Zipkin send with empty spans"), a({ code: U$e.ExportResultCode.SUCCESS }));
      let { request: u } = r.protocol === "http:" ? JHo : XHo,
        c = u(r, n, (d) => {
          let f = "";
          (d.on("data", (p) => {
            f += p;
          }),
            d.on("end", () => {
              let p = d.statusCode || 0;
              return (
                e7t.diag.debug(`Zipkin response status code: ${p}, body: ${f}`),
                p < 400
                  ? a({ code: U$e.ExportResultCode.SUCCESS })
                  : a({
                      code: U$e.ExportResultCode.FAILED,
                      error: new Error(`Got unexpected status code from zipkin: ${p}`),
                    })
              );
            }));
        });
      c.on("error", (d) => a({ code: U$e.ExportResultCode.FAILED, error: d }));
      let m = JSON.stringify(s);
      (e7t.diag.debug(`Zipkin request payload: ${m}`), c.write(m, "utf8"), c.end());
    };
  }
  $$e.prepareSend = ZHo;
});