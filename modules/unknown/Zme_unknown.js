/**
 * @module Zme
 * @category unknown
 * @label unknown
 * @position 1771 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Zme) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Zme = T((vmt) => {
  "use strict";
  var oNa = Tc(),
    z9i = "content-length";
  function Y9i(t) {
    return (e) => async (r) => {
      let n = r.request;
      if (oNa.HttpRequest.isInstance(n)) {
        let { body: o, headers: s } = n;
        if (
          o &&
          Object.keys(s)
            .map((a) => a.toLowerCase())
            .indexOf(z9i) === -1
        )
          try {
            let a = t(o);
            n.headers = { ...n.headers, [z9i]: String(a) };
          } catch {}
      }
      return e({ ...r, request: n });
    };
  }
  var K9i = {
      step: "build",
      tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
      name: "contentLengthMiddleware",
      override: !0,
    },
    sNa = (t) => ({
      applyToStack: (e) => {
        e.add(Y9i(t.bodyLengthChecker), K9i);
      },
    });
  vmt.contentLengthMiddleware = Y9i;
  vmt.contentLengthMiddlewareOptions = K9i;
  vmt.getContentLengthPlugin = sNa;
});