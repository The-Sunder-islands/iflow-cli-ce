/**
 * @module WZi
 * @category utils/json
 * @label json
 * @position 1928 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (WZi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var WZi = T((ODe) => {
  "use strict";
  var ypu = Ae("fs"),
    KJ = Ae("path"),
    { envReplace: kEr } = VZi(),
    _pu = (t) => (typeof t != "string" ? t : kEr(t, process.env)),
    Epu = (t, e, r) => {
      if (typeof e != "string") return e;
      let n = [].concat(t[r]),
        o = n.indexOf(KJ) !== -1,
        s = n.indexOf(Boolean) !== -1,
        a = n.indexOf(String) !== -1,
        u = n.indexOf(Number) !== -1;
      if (((e = `${e}`.trim()), /^".*"$/.test(e)))
        try {
          e = JSON.parse(e);
        } catch {
          throw new Error(`Failed parsing JSON config key ${r}: ${e}`);
        }
      if (s && !a && e === "") return !0;
      switch (e) {
        case "true":
          return !0;
        case "false":
          return !1;
        case "null":
          return null;
        case "undefined":
          return;
      }
      return (
        (e = kEr(e, process.env)),
        o &&
          ((process.platform === "win32" ? /^~(\/|\\)/ : /^~\//).test(e) &&
            process.env.HOME &&
            (e = KJ.resolve(process.env.HOME, e.substr(2))),
          (e = KJ.resolve(e))),
        u && !isNaN(e) && (e = Number(e)),
        e
      );
    },
    vpu = (t) => {
      t = KJ.resolve(t);
      let e = !1;
      for (; KJ.basename(t) === "node_modules"; ) ((t = KJ.dirname(t)), (e = !0));
      if (e) return t;
      let r = (n, o) => {
        let s = /^[a-zA-Z]:(\\|\/)?$/;
        if (n === "/" || (process.platform === "win32" && s.test(n))) return o;
        try {
          let a = ypu.readdirSync(n);
          if (
            a.includes("node_modules") ||
            a.includes("package.json") ||
            a.includes("package.json5") ||
            a.includes("package.yaml") ||
            a.includes("pnpm-workspace.yaml")
          )
            return n;
          let u = KJ.dirname(n);
          return u === n ? o : r(u, o);
        } catch (a) {
          if (n === o) {
            if (a.code === "ENOENT") return o;
            throw a;
          }
          return o;
        }
      };
      return r(t, t);
    };
  ODe.envReplace = kEr;
  ODe.findPrefix = vpu;
  ODe.parseField = Epu;
  ODe.parseKey = _pu;
});