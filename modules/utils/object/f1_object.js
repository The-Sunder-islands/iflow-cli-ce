/**
 * @module f1
 * @category utils/object
 * @label object
 * @position 1125 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (f1) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var f1 = T((Abc, WTn) => {
  var { toString: VTn } = Object.prototype,
    sTs = /["&<>]/,
    Kk = {
      each: function (e, r) {
        e &&
          (Array.isArray(e)
            ? e.forEach(r)
            : Object.keys(e).forEach((n) => {
                r(e[n], n);
              }));
      },
      some: function (e, r) {
        return e ? (Array.isArray(e) ? e.some(r) : Object.keys(e).some((n) => r(e[n], n))) : !1;
      },
      every: function (e, r) {
        return e ? (Array.isArray(e) ? e.every(r) : Object.keys(e).every((n) => r(e[n], n))) : !0;
      },
      map: function (e, r) {
        return e ? (Array.isArray(e) ? e.map(r) : Object.keys(e).map((n) => r(e[n], n))) : [];
      },
      keyBy(t, e) {
        return t.reduce((r, n) => ((r[n[e]] = n), r), {});
      },
      isEqual: function (e, r) {
        let n = typeof e,
          o = typeof r,
          s = Array.isArray(e),
          a = Array.isArray(r),
          u;
        if (n !== o) return !1;
        switch (typeof e) {
          case "object":
            if (s || a)
              return s && a
                ? e.length === r.length &&
                    e.every((c, m) => {
                      let d = r[m];
                      return Kk.isEqual(c, d);
                    })
                : !1;
            if (e === null || r === null) return e === r;
            if (((u = Object.keys(e)), Object.keys(r).length !== u.length)) return !1;
            for (let c of u) if (!r.hasOwnProperty(c)) return !1;
            return Kk.every(e, (c, m) => {
              let d = r[m];
              return Kk.isEqual(c, d);
            });
          default:
            return e === r;
        }
      },
      escapeHtml(t) {
        let e = sTs.exec(t);
        if (!e) return t;
        let r = "",
          n = "",
          o = 0,
          s = e.index;
        for (; s < t.length; s++) {
          switch (t.charAt(s)) {
            case '"':
              n = "&quot;";
              break;
            case "&":
              n = "&amp;";
              break;
            case "'":
              n = "&apos;";
              break;
            case "<":
              n = "&lt;";
              break;
            case ">":
              n = "&gt;";
              break;
            default:
              continue;
          }
          (o !== s && (r += t.substring(o, s)), (o = s + 1), (r += n));
        }
        return o !== s ? r + t.substring(o, s) : r;
      },
      strcmp(t, e) {
        return t < e ? -1 : t > e ? 1 : 0;
      },
      isUndefined(t) {
        return VTn.call(t) === "[object Undefined]";
      },
      isObject(t) {
        return VTn.call(t) === "[object Object]";
      },
      deepMerge() {
        let t = arguments[0] || {},
          { length: e } = arguments,
          r,
          n,
          o;
        function s(a, u) {
          ((r = t[u]),
            (o = Array.isArray(a)),
            Kk.isObject(a) || o
              ? (o ? ((o = !1), (n = r && Array.isArray(r) ? r : [])) : (n = r && Kk.isObject(r) ? r : {}),
                (t[u] = Kk.deepMerge(n, a)))
              : Kk.isUndefined(a) || (t[u] = a));
        }
        for (let a = 0; a < e; a++) Kk.each(arguments[a], s);
        return t;
      },
    };
  WTn.exports = Kk;
});