/**
 * @module qH
 * @category utils/oop
 * @label oop
 * @position 741 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qH) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qH = T((ZZu, Cpn) => {
  "use strict";
  Cpn.exports = function t(e, r) {
    if (e === r) return !0;
    if (e && r && typeof e == "object" && typeof r == "object") {
      if (e.constructor !== r.constructor) return !1;
      var n, o, s;
      if (Array.isArray(e)) {
        if (((n = e.length), n != r.length)) return !1;
        for (o = n; o-- !== 0; ) if (!t(e[o], r[o])) return !1;
        return !0;
      }
      if (e.constructor === RegExp) return e.source === r.source && e.flags === r.flags;
      if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === r.valueOf();
      if (e.toString !== Object.prototype.toString) return e.toString() === r.toString();
      if (((s = Object.keys(e)), (n = s.length), n !== Object.keys(r).length)) return !1;
      for (o = n; o-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(r, s[o])) return !1;
      for (o = n; o-- !== 0; ) {
        var a = s[o];
        if (!t(e[a], r[a])) return !1;
      }
      return !0;
    }
    return e !== e && r !== r;
  };
});