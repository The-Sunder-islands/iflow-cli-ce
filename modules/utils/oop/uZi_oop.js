/**
 * @module uZi
 * @category utils/oop
 * @label oop
 * @position 1913 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (uZi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var uZi = T((Ywl, aZi) => {
  "use strict";
  function iZi(t) {
    return t instanceof Buffer || t instanceof Date || t instanceof RegExp;
  }
  function oZi(t) {
    if (t instanceof Buffer) {
      var e = Buffer.alloc ? Buffer.alloc(t.length) : new Buffer(t.length);
      return (t.copy(e), e);
    } else {
      if (t instanceof Date) return new Date(t.getTime());
      if (t instanceof RegExp) return new RegExp(t);
      throw new Error("Unexpected situation");
    }
  }
  function sZi(t) {
    var e = [];
    return (
      t.forEach(function (r, n) {
        typeof r == "object" && r !== null
          ? Array.isArray(r)
            ? (e[n] = sZi(r))
            : iZi(r)
              ? (e[n] = oZi(r))
              : (e[n] = EEr({}, r))
          : (e[n] = r);
      }),
      e
    );
  }
  function nZi(t, e) {
    return e === "__proto__" ? void 0 : t[e];
  }
  var EEr = (aZi.exports = function () {
    if (arguments.length < 1 || typeof arguments[0] != "object") return !1;
    if (arguments.length < 2) return arguments[0];
    var t = arguments[0],
      e = Array.prototype.slice.call(arguments, 1),
      r,
      n,
      o;
    return (
      e.forEach(function (s) {
        typeof s != "object" ||
          s === null ||
          Array.isArray(s) ||
          Object.keys(s).forEach(function (a) {
            if (((n = nZi(t, a)), (r = nZi(s, a)), r !== t))
              if (typeof r != "object" || r === null) {
                t[a] = r;
                return;
              } else if (Array.isArray(r)) {
                t[a] = sZi(r);
                return;
              } else if (iZi(r)) {
                t[a] = oZi(r);
                return;
              } else if (typeof n != "object" || n === null || Array.isArray(n)) {
                t[a] = EEr({}, r);
                return;
              } else {
                t[a] = EEr(n, r);
                return;
              }
          });
      }),
      t
    );
  });
});