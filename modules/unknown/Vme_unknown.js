/**
 * @module Vme
 * @category unknown
 * @label unknown
 * @position 1758 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Vme) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Vme = T((swe) => {
  "use strict";
  var cka = Tc();
  function lka(t) {
    return t;
  }
  var B8i = (t) => (e) => async (r) => {
      if (!cka.HttpRequest.isInstance(r.request)) return e(r);
      let { request: n } = r,
        { handlerProtocol: o = "" } = t.requestHandler.metadata || {};
      if (o.indexOf("h2") >= 0 && !n.headers[":authority"])
        (delete n.headers.host, (n.headers[":authority"] = n.hostname + (n.port ? ":" + n.port : "")));
      else if (!n.headers.host) {
        let s = n.hostname;
        (n.port != null && (s += `:${n.port}`), (n.headers.host = s));
      }
      return e(r);
    },
    L8i = { name: "hostHeaderMiddleware", step: "build", priority: "low", tags: ["HOST"], override: !0 },
    mka = (t) => ({
      applyToStack: (e) => {
        e.add(B8i(t), L8i);
      },
    });
  swe.getHostHeaderPlugin = mka;
  swe.hostHeaderMiddleware = B8i;
  swe.hostHeaderMiddlewareOptions = L8i;
  swe.resolveHostHeaderConfig = lka;
});