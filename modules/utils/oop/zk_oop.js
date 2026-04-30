/**
 * @module zk
 * @category utils/oop
 * @label oop
 * @position 1054 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (zk) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var zk = T((USn, dF) => {
  (function () {
    var t,
      e,
      r,
      n,
      o,
      s,
      a,
      u = [].slice,
      c = {}.hasOwnProperty;
    ((t = function () {
      var m, d, f, p, h, g;
      if (((g = arguments[0]), (h = 2 <= arguments.length ? u.call(arguments, 1) : []), o(Object.assign)))
        Object.assign.apply(null, arguments);
      else
        for (m = 0, f = h.length; m < f; m++) if (((p = h[m]), p != null)) for (d in p) c.call(p, d) && (g[d] = p[d]);
      return g;
    }),
      (o = function (m) {
        return !!m && Object.prototype.toString.call(m) === "[object Function]";
      }),
      (s = function (m) {
        var d;
        return !!m && ((d = typeof m) == "function" || d === "object");
      }),
      (r = function (m) {
        return o(Array.isArray) ? Array.isArray(m) : Object.prototype.toString.call(m) === "[object Array]";
      }),
      (n = function (m) {
        var d;
        if (r(m)) return !m.length;
        for (d in m) if (c.call(m, d)) return !1;
        return !0;
      }),
      (a = function (m) {
        var d, f;
        return (
          s(m) &&
          (f = Object.getPrototypeOf(m)) &&
          (d = f.constructor) &&
          typeof d == "function" &&
          d instanceof d &&
          Function.prototype.toString.call(d) === Function.prototype.toString.call(Object)
        );
      }),
      (e = function (m) {
        return o(m.valueOf) ? m.valueOf() : m;
      }),
      (dF.exports.assign = t),
      (dF.exports.isFunction = o),
      (dF.exports.isObject = s),
      (dF.exports.isArray = r),
      (dF.exports.isEmpty = n),
      (dF.exports.isPlainObject = a),
      (dF.exports.getValue = e));
  }).call(USn);
});