/**
 * @module ejn
 * @category unknown
 * @label unknown
 * @position 1389 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ejn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ejn = T(($9c, Z$n) => {
  var OYs = rce(),
    NYs = function () {},
    PYs = global.Bare ? queueMicrotask : process.nextTick.bind(process),
    BYs = function (t) {
      return t.setHeader && typeof t.abort == "function";
    },
    LYs = function (t) {
      return t.stdio && Array.isArray(t.stdio) && t.stdio.length === 3;
    },
    X$n = function (t, e, r) {
      if (typeof e == "function") return X$n(t, null, e);
      (e || (e = {}), (r = OYs(r || NYs)));
      var n = t._writableState,
        o = t._readableState,
        s = e.readable || (e.readable !== !1 && t.readable),
        a = e.writable || (e.writable !== !1 && t.writable),
        u = !1,
        c = function () {
          t.writable || m();
        },
        m = function () {
          ((a = !1), s || r.call(t));
        },
        d = function () {
          ((s = !1), a || r.call(t));
        },
        f = function (A) {
          r.call(t, A ? new Error("exited with error code: " + A) : null);
        },
        p = function (A) {
          r.call(t, A);
        },
        h = function () {
          PYs(g);
        },
        g = function () {
          if (!u) {
            if (s && !(o && o.ended && !o.destroyed)) return r.call(t, new Error("premature close"));
            if (a && !(n && n.ended && !n.destroyed)) return r.call(t, new Error("premature close"));
          }
        },
        b = function () {
          t.req.on("finish", m);
        };
      return (
        BYs(t)
          ? (t.on("complete", m), t.on("abort", h), t.req ? b() : t.on("request", b))
          : a && !n && (t.on("end", c), t.on("close", c)),
        LYs(t) && t.on("exit", f),
        t.on("end", d),
        t.on("finish", m),
        e.error !== !1 && t.on("error", p),
        t.on("close", h),
        function () {
          ((u = !0),
            t.removeListener("complete", m),
            t.removeListener("abort", h),
            t.removeListener("request", b),
            t.req && t.req.removeListener("finish", m),
            t.removeListener("end", c),
            t.removeListener("close", c),
            t.removeListener("finish", m),
            t.removeListener("exit", f),
            t.removeListener("end", d),
            t.removeListener("error", p),
            t.removeListener("close", h));
        }
      );
    };
  Z$n.exports = X$n;
});