/**
 * @module xji
 * @category unknown
 * @label unknown
 * @position 1875 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xji) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xji = T((Jal, wji) => {
  "use strict";
  var Rsu = d6r(),
    ksu = (t) => {
      let e = t.indexOf("#"),
        r = t.indexOf("/"),
        n = t.indexOf("/", r + 1),
        o = t.indexOf(":"),
        s = /\s/.exec(t),
        a = t.indexOf("@"),
        u = !s || (e > -1 && s.index > e),
        c = a === -1 || (e > -1 && a > e),
        m = o === -1 || (e > -1 && o > e),
        d = n === -1 || (e > -1 && n > e),
        f = r > 0,
        p = e > -1 ? t[e - 1] !== "/" : !t.endsWith("/"),
        h = !t.startsWith(".");
      return u && f && p && h && c && m && d;
    };
  wji.exports = (t, e, { gitHosts: r, protocols: n }) => {
    if (!t) return;
    let o = ksu(t) ? `github:${t}` : t,
      s = Rsu(o, n);
    if (!s) return;
    let a = r.byShortcut[s.protocol],
      u = r.byDomain[s.hostname.startsWith("www.") ? s.hostname.slice(4) : s.hostname],
      c = a || u;
    if (!c) return;
    let m = r[a || u],
      d = null;
    n[s.protocol]?.auth && (s.username || s.password) && (d = `${s.username}${s.password ? ":" + s.password : ""}`);
    let f = null,
      p = null,
      h = null,
      g = null;
    try {
      if (a) {
        let b = s.pathname.startsWith("/") ? s.pathname.slice(1) : s.pathname,
          A = b.indexOf("@");
        A > -1 && (b = b.slice(A + 1));
        let y = b.lastIndexOf("/");
        (y > -1
          ? ((p = decodeURIComponent(b.slice(0, y))), p || (p = null), (h = decodeURIComponent(b.slice(y + 1))))
          : (h = decodeURIComponent(b)),
          h.endsWith(".git") && (h = h.slice(0, -4)),
          s.hash && (f = decodeURIComponent(s.hash.slice(1))),
          (g = "shortcut"));
      } else {
        if (!m.protocols.includes(s.protocol)) return;
        let b = m.extract(s);
        if (!b) return;
        ((p = b.user && decodeURIComponent(b.user)),
          (h = decodeURIComponent(b.project)),
          (f = decodeURIComponent(b.committish)),
          (g = n[s.protocol]?.name || s.protocol.slice(0, -1)));
      }
    } catch (b) {
      if (b instanceof URIError) return;
      throw b;
    }
    return [c, p, d, h, f, g, e];
  };
});