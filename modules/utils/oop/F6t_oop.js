/**
 * @module F6t
 * @category utils/oop
 * @label oop
 * @position 50 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (F6t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var F6t = T((g4u, S7r) => {
  function efo(t) {
    ((r.debug = r),
      (r.default = r),
      (r.coerce = c),
      (r.disable = a),
      (r.enable = o),
      (r.enabled = u),
      (r.humanize = C7r()),
      (r.destroy = m),
      Object.keys(t).forEach((d) => {
        r[d] = t[d];
      }),
      (r.names = []),
      (r.skips = []),
      (r.formatters = {}));
    function e(d) {
      let f = 0;
      for (let p = 0; p < d.length; p++) ((f = (f << 5) - f + d.charCodeAt(p)), (f |= 0));
      return r.colors[Math.abs(f) % r.colors.length];
    }
    r.selectColor = e;
    function r(d) {
      let f,
        p = null,
        h,
        g;
      function b(...A) {
        if (!b.enabled) return;
        let y = b,
          E = Number(new Date()),
          v = E - (f || E);
        ((y.diff = v),
          (y.prev = f),
          (y.curr = E),
          (f = E),
          (A[0] = r.coerce(A[0])),
          typeof A[0] != "string" && A.unshift("%O"));
        let C = 0;
        ((A[0] = A[0].replace(/%([a-zA-Z%])/g, (k, R) => {
          if (k === "%%") return "%";
          C++;
          let P = r.formatters[R];
          if (typeof P == "function") {
            let D = A[C];
            ((k = P.call(y, D)), A.splice(C, 1), C--);
          }
          return k;
        })),
          r.formatArgs.call(y, A),
          (y.log || r.log).apply(y, A));
      }
      return (
        (b.namespace = d),
        (b.useColors = r.useColors()),
        (b.color = r.selectColor(d)),
        (b.extend = n),
        (b.destroy = r.destroy),
        Object.defineProperty(b, "enabled", {
          enumerable: !0,
          configurable: !1,
          get: () => (p !== null ? p : (h !== r.namespaces && ((h = r.namespaces), (g = r.enabled(d))), g)),
          set: (A) => {
            p = A;
          },
        }),
        typeof r.init == "function" && r.init(b),
        b
      );
    }
    function n(d, f) {
      let p = r(this.namespace + (typeof f > "u" ? ":" : f) + d);
      return ((p.log = this.log), p);
    }
    function o(d) {
      (r.save(d), (r.namespaces = d), (r.names = []), (r.skips = []));
      let f = (typeof d == "string" ? d : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (let p of f) p[0] === "-" ? r.skips.push(p.slice(1)) : r.names.push(p);
    }
    function s(d, f) {
      let p = 0,
        h = 0,
        g = -1,
        b = 0;
      for (; p < d.length; )
        if (h < f.length && (f[h] === d[p] || f[h] === "*")) f[h] === "*" ? ((g = h), (b = p), h++) : (p++, h++);
        else if (g !== -1) ((h = g + 1), b++, (p = b));
        else return !1;
      for (; h < f.length && f[h] === "*"; ) h++;
      return h === f.length;
    }
    function a() {
      let d = [...r.names, ...r.skips.map((f) => "-" + f)].join(",");
      return (r.enable(""), d);
    }
    function u(d) {
      for (let f of r.skips) if (s(d, f)) return !1;
      for (let f of r.names) if (s(d, f)) return !0;
      return !1;
    }
    function c(d) {
      return d instanceof Error ? d.stack || d.message : d;
    }
    function m() {
      console.warn(
        "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
      );
    }
    return (r.enable(r.load()), r);
  }
  S7r.exports = efo;
});