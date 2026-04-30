/**
 * @module j8i
 * @category utils/oop
 * @label oop
 * @position 1760 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (j8i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var j8i = T((mmt) => {
  "use strict";
  Object.defineProperty(mmt, "__esModule", { value: !0 });
  mmt.recursionDetectionMiddleware = void 0;
  var fka = ($8i(), bt(U8i)),
    pka = Tc(),
    Jgr = "X-Amzn-Trace-Id",
    hka = "AWS_LAMBDA_FUNCTION_NAME",
    gka = "_X_AMZN_TRACE_ID",
    bka = () => (t) => async (e) => {
      let { request: r } = e;
      if (!pka.HttpRequest.isInstance(r)) return t(e);
      let n = Object.keys(r.headers ?? {}).find((d) => d.toLowerCase() === Jgr.toLowerCase()) ?? Jgr;
      if (r.headers.hasOwnProperty(n)) return t(e);
      let o = process.env[hka],
        s = process.env[gka],
        c = (await fka.InvokeStore.getInstanceAsync())?.getXRayTraceId() ?? s,
        m = (d) => typeof d == "string" && d.length > 0;
      return (m(o) && m(c) && (r.headers[Jgr] = c), t({ ...e, request: r }));
    };
  mmt.recursionDetectionMiddleware = bka;
});