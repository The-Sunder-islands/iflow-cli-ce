/**
 * @module bAn
 * @category utils/object
 * @label object
 * @position 860 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (bAn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var bAn = T((Src, gAn) => {
  var use = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys",
    mAn = Ae("path"),
    nbs = use ? ";" : ":",
    dAn = lAn(),
    fAn = (t) => Object.assign(new Error(`not found: ${t}`), { code: "ENOENT" }),
    pAn = (t, e) => {
      let r = e.colon || nbs,
        n =
          t.match(/\//) || (use && t.match(/\\/))
            ? [""]
            : [...(use ? [process.cwd()] : []), ...(e.path || process.env.PATH || "").split(r)],
        o = use ? e.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "",
        s = use ? o.split(r) : [""];
      return (use && t.indexOf(".") !== -1 && s[0] !== "" && s.unshift(""), { pathEnv: n, pathExt: s, pathExtExe: o });
    },
    hAn = (t, e, r) => {
      (typeof e == "function" && ((r = e), (e = {})), e || (e = {}));
      let { pathEnv: n, pathExt: o, pathExtExe: s } = pAn(t, e),
        a = [],
        u = (m) =>
          new Promise((d, f) => {
            if (m === n.length) return e.all && a.length ? d(a) : f(fAn(t));
            let p = n[m],
              h = /^".*"$/.test(p) ? p.slice(1, -1) : p,
              g = mAn.join(h, t),
              b = !h && /^\.[\\\/]/.test(t) ? t.slice(0, 2) + g : g;
            d(c(b, m, 0));
          }),
        c = (m, d, f) =>
          new Promise((p, h) => {
            if (f === o.length) return p(u(d + 1));
            let g = o[f];
            dAn(m + g, { pathExt: s }, (b, A) => {
              if (!b && A)
                if (e.all) a.push(m + g);
                else return p(m + g);
              return p(c(m, d, f + 1));
            });
          });
      return r ? u(0).then((m) => r(null, m), r) : u(0);
    },
    ibs = (t, e) => {
      e = e || {};
      let { pathEnv: r, pathExt: n, pathExtExe: o } = pAn(t, e),
        s = [];
      for (let a = 0; a < r.length; a++) {
        let u = r[a],
          c = /^".*"$/.test(u) ? u.slice(1, -1) : u,
          m = mAn.join(c, t),
          d = !c && /^\.[\\\/]/.test(t) ? t.slice(0, 2) + m : m;
        for (let f = 0; f < n.length; f++) {
          let p = d + n[f];
          try {
            if (dAn.sync(p, { pathExt: o }))
              if (e.all) s.push(p);
              else return p;
          } catch {}
        }
      }
      if (e.all && s.length) return s;
      if (e.nothrow) return null;
      throw fAn(t);
    };
  gAn.exports = hAn;
  hAn.sync = ibs;
});