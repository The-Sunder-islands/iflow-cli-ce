/**
 * @module m6t
 * @category utils/oop
 * @label oop
 * @position 33 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (m6t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var m6t = T((lCu, iIr) => {
  "use strict";
  var ZRe = Object.prototype.hasOwnProperty,
    nIr = Object.prototype.toString,
    JDr = Object.defineProperty,
    XDr = Object.getOwnPropertyDescriptor,
    ZDr = function (e) {
      return typeof Array.isArray == "function" ? Array.isArray(e) : nIr.call(e) === "[object Array]";
    },
    eIr = function (e) {
      if (!e || nIr.call(e) !== "[object Object]") return !1;
      var r = ZRe.call(e, "constructor"),
        n = e.constructor && e.constructor.prototype && ZRe.call(e.constructor.prototype, "isPrototypeOf");
      if (e.constructor && !r && !n) return !1;
      var o;
      for (o in e);
      return typeof o > "u" || ZRe.call(e, o);
    },
    tIr = function (e, r) {
      JDr && r.name === "__proto__"
        ? JDr(e, r.name, { enumerable: !0, configurable: !0, value: r.newValue, writable: !0 })
        : (e[r.name] = r.newValue);
    },
    rIr = function (e, r) {
      if (r === "__proto__")
        if (ZRe.call(e, r)) {
          if (XDr) return XDr(e, r).value;
        } else return;
      return e[r];
    };
  iIr.exports = function t() {
    var e,
      r,
      n,
      o,
      s,
      a,
      u = arguments[0],
      c = 1,
      m = arguments.length,
      d = !1;
    for (
      typeof u == "boolean" && ((d = u), (u = arguments[1] || {}), (c = 2)),
        (u == null || (typeof u != "object" && typeof u != "function")) && (u = {});
      c < m;
      ++c
    )
      if (((e = arguments[c]), e != null))
        for (r in e)
          ((n = rIr(u, r)),
            (o = rIr(e, r)),
            u !== o &&
              (d && o && (eIr(o) || (s = ZDr(o)))
                ? (s ? ((s = !1), (a = n && ZDr(n) ? n : [])) : (a = n && eIr(n) ? n : {}),
                  tIr(u, { name: r, newValue: t(d, a, o) }))
                : typeof o < "u" && tIr(u, { name: r, newValue: o })));
    return u;
  };
});