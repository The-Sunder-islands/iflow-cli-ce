/**
 * @module y9i
 * @category unknown
 * @label unknown
 * @position 1765 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (y9i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var y9i = T((A9i) => {
  "use strict";
  function yOa(t) {
    let e = {};
    if (((t = t.replace(/^\?/, "")), t))
      for (let r of t.split("&")) {
        let [n, o = null] = r.split("=");
        ((n = decodeURIComponent(n)),
          o && (o = decodeURIComponent(o)),
          n in e ? (Array.isArray(e[n]) ? e[n].push(o) : (e[n] = [e[n], o])) : (e[n] = o));
      }
    return e;
  }
  A9i.parseQueryString = yOa;
});