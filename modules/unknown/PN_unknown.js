/**
 * @module PN
 * @category unknown
 * @label unknown
 * @position 1766 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (PN) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var PN = T((E9i) => {
  "use strict";
  var _Oa = y9i(),
    _9i = (t) => {
      if (typeof t == "string") return _9i(new URL(t));
      let { hostname: e, pathname: r, port: n, protocol: o, search: s } = t,
        a;
      return (
        s && (a = _Oa.parseQueryString(s)),
        { hostname: e, port: n ? parseInt(n) : void 0, protocol: o, path: r, query: a }
      );
    };
  E9i.parseUrl = _9i;
});