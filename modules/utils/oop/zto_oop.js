/**
 * @module zto
 * @category utils/oop
 * @label oop
 * @position 1967 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (zto) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var zto = T((aTl, Wto) => {
  var { hasOwnProperty: evr } = Object.prototype,
    tvr = (t, e = {}) => {
      (typeof e == "string" && (e = { section: e }),
        (e.align = e.align === !0),
        (e.newline = e.newline === !0),
        (e.sort = e.sort === !0),
        (e.whitespace = e.whitespace === !0 || e.align === !0),
        (e.platform = e.platform || (typeof process < "u" && process.platform)),
        (e.bracketedArray = e.bracketedArray !== !1));
      let r =
          e.platform === "win32"
            ? `\r
`
            : `
`,
        n = e.whitespace ? " = " : "=",
        o = [],
        s = e.sort ? Object.keys(t).sort() : Object.keys(t),
        a = 0;
      e.align &&
        (a = aP(
          s
            .filter((m) => t[m] === null || Array.isArray(t[m]) || typeof t[m] != "object")
            .map((m) => (Array.isArray(t[m]) ? `${m}[]` : m))
            .concat([""])
            .reduce((m, d) => (aP(m).length >= aP(d).length ? m : d)),
        ).length);
      let u = "",
        c = e.bracketedArray ? "[]" : "";
      for (let m of s) {
        let d = t[m];
        if (d && Array.isArray(d)) for (let f of d) u += aP(`${m}${c}`).padEnd(a, " ") + n + aP(f) + r;
        else d && typeof d == "object" ? o.push(m) : (u += aP(m).padEnd(a, " ") + n + aP(d) + r);
      }
      e.section && u.length && (u = "[" + aP(e.section) + "]" + (e.newline ? r + r : r) + u);
      for (let m of o) {
        let d = Hto(m, ".").join("\\."),
          f = (e.section ? e.section + "." : "") + d,
          p = tvr(t[m], { ...e, section: f });
        (u.length && p.length && (u += r), (u += p));
      }
      return u;
    };
  function Hto(t, e) {
    var r = 0,
      n = 0,
      o = 0,
      s = [];
    do
      if (((o = t.indexOf(e, r)), o !== -1)) {
        if (((r = o + e.length), o > 0 && t[o - 1] === "\\")) continue;
        (s.push(t.slice(n, o)), (n = o + e.length));
      }
    while (o !== -1);
    return (s.push(t.slice(n)), s);
  }
  var qto = (t, e = {}) => {
      e.bracketedArray = e.bracketedArray !== !1;
      let r = Object.create(null),
        n = r,
        o = null,
        s = /^\[([^\]]*)\]\s*$|^([^=]+)(=(.*))?$/i,
        a = t.split(/[\r\n]+/g),
        u = {};
      for (let m of a) {
        if (!m || m.match(/^\s*[;#]/) || m.match(/^\s*$/)) continue;
        let d = m.match(s);
        if (!d) continue;
        if (d[1] !== void 0) {
          if (((o = fAt(d[1])), o === "__proto__")) {
            n = Object.create(null);
            continue;
          }
          n = r[o] = r[o] || Object.create(null);
          continue;
        }
        let f = fAt(d[2]),
          p;
        e.bracketedArray ? (p = f.length > 2 && f.slice(-2) === "[]") : ((u[f] = (u?.[f] || 0) + 1), (p = u[f] > 1));
        let h = p ? f.slice(0, -2) : f;
        if (h === "__proto__") continue;
        let g = d[3] ? fAt(d[4]) : !0,
          b = g === "true" || g === "false" || g === "null" ? JSON.parse(g) : g;
        (p && (evr.call(n, h) ? Array.isArray(n[h]) || (n[h] = [n[h]]) : (n[h] = [])),
          Array.isArray(n[h]) ? n[h].push(b) : (n[h] = b));
      }
      let c = [];
      for (let m of Object.keys(r)) {
        if (!evr.call(r, m) || typeof r[m] != "object" || Array.isArray(r[m])) continue;
        let d = Hto(m, ".");
        n = r;
        let f = d.pop(),
          p = f.replace(/\\\./g, ".");
        for (let h of d)
          h !== "__proto__" &&
            ((!evr.call(n, h) || typeof n[h] != "object") && (n[h] = Object.create(null)), (n = n[h]));
        (n === r && p === f) || ((n[p] = r[m]), c.push(m));
      }
      for (let m of c) delete r[m];
      return r;
    },
    Vto = (t) => (t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'")),
    aP = (t) =>
      typeof t != "string" || t.match(/[=\r\n]/) || t.match(/^\[/) || (t.length > 1 && Vto(t)) || t !== t.trim()
        ? JSON.stringify(t)
        : t.split(";").join("\\;").split("#").join("\\#"),
    fAt = (t, e) => {
      if (((t = (t || "").trim()), Vto(t))) {
        t.charAt(0) === "'" && (t = t.slice(1, -1));
        try {
          t = JSON.parse(t);
        } catch {}
      } else {
        let r = !1,
          n = "";
        for (let o = 0, s = t.length; o < s; o++) {
          let a = t.charAt(o);
          if (r) ("\\;#".indexOf(a) !== -1 ? (n += a) : (n += "\\" + a), (r = !1));
          else {
            if (";#".indexOf(a) !== -1) break;
            a === "\\" ? (r = !0) : (n += a);
          }
        }
        return (r && (n += "\\"), n.trim());
      }
      return t;
    };
  Wto.exports = { parse: qto, decode: qto, stringify: tvr, encode: tvr, safe: aP, unsafe: fAt };
});
import uh from "node:process";
import ch from "node:path";
import rvr from "node:os";
import pAt from "node:fs";
var Kto,
  FDe,
  Yto,
  fgu,
  pgu,
  hgu,
  ggu,
  MDe,
  Jto,
  bgu,
  r7,
  Xto,
  nvr,
  Zto = j(() => {
    ((Kto = Se(zto(), 1)),
      (FDe = uh.platform === "win32"),
      (Yto = (t) => {
        try {
          return Kto.default.parse(pAt.readFileSync(t, "utf8")).prefix;
        } catch {}
      }),
      (fgu = () => Object.keys(uh.env).reduce((t, e) => (/^npm_config_prefix$/i.test(e) ? uh.env[e] : t), void 0)),
      (pgu = () => {
        if (FDe && uh.env.APPDATA) return ch.join(uh.env.APPDATA, "/npm/etc/npmrc");
        if (uh.execPath.includes("/Cellar/node")) {
          let t = uh.execPath.slice(0, uh.execPath.indexOf("/Cellar/node"));
          return ch.join(t, "/lib/node_modules/npm/npmrc");
        }
        if (uh.execPath.endsWith("/bin/node")) {
          let t = ch.dirname(ch.dirname(uh.execPath));
          return ch.join(t, "/etc/npmrc");
        }
      }),
      (hgu = () => {
        if (FDe) {
          let { APPDATA: t } = uh.env;
          return t ? ch.join(t, "npm") : ch.dirname(uh.execPath);
        }
        return ch.dirname(ch.dirname(uh.execPath));
      }),
      (ggu = () => {
        let t = fgu();
        if (t) return t;
        let e = Yto(ch.join(rvr.homedir(), ".npmrc"));
        if (e) return e;
        if (uh.env.PREFIX) return uh.env.PREFIX;
        let r = Yto(pgu());
        return r || hgu();
      }),
      (MDe = ch.resolve(ggu())),
      (Jto = () => {
        if (FDe && uh.env.LOCALAPPDATA) {
          let t = ch.join(uh.env.LOCALAPPDATA, "Yarn");
          if (pAt.existsSync(t)) return t;
        }
        return !1;
      }),
      (bgu = () => {
        if (uh.env.PREFIX) return uh.env.PREFIX;
        let t = Jto();
        if (t) return t;
        let e = ch.join(rvr.homedir(), ".config/yarn");
        if (pAt.existsSync(e)) return e;
        let r = ch.join(rvr.homedir(), ".yarn-config");
        return pAt.existsSync(r) ? r : MDe;
      }),
      (r7 = {}));
    r7.npm = {};
    r7.npm.prefix = MDe;
    r7.npm.packages = ch.join(MDe, FDe ? "node_modules" : "lib/node_modules");
    r7.npm.binaries = FDe ? MDe : ch.join(MDe, "bin");
    Xto = ch.resolve(bgu());
    r7.yarn = {};
    r7.yarn.prefix = Xto;
    r7.yarn.packages = ch.join(Xto, Jto() ? "Data/global/node_modules" : "global/node_modules");
    r7.yarn.binaries = ch.join(r7.yarn.packages, ".bin");
    nvr = r7;
  });
import ivr from "node:path";
function hAt(t, e) {
  let r = ivr.relative(e, t);
  return !!(r && r !== ".." && !r.startsWith(`..${ivr.sep}`) && r !== ivr.resolve(t));
}
var ero = j(() => {});
import Agu from "node:fs";
import ygu from "node:path";
import { fileURLToPath as _gu } from "node:url";
var tro,
  Egu,
  rro,
  nro = j(() => {
    Zto();
    ero();
    ((tro = ygu.dirname(_gu(import.meta.url))),
      (Egu = (() => {
        try {
          return hAt(tro, nvr.yarn.packages) || hAt(tro, Agu.realpathSync(nvr.npm.packages));
        } catch {
          return !1;
        }
      })()),
      (rro = Egu));
  });