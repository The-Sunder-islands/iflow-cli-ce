/**
 * @module dbr
 * @category utils/oop
 * @label oop
 * @position 1772 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dbr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dbr = T((Cmt) => {
  "use strict";
  Object.defineProperty(Cmt, "__esModule", { value: !0 });
  Cmt.getHomeDir = void 0;
  var aNa = Ae("os"),
    uNa = Ae("path"),
    mbr = {},
    cNa = () => (process && process.geteuid ? `${process.geteuid()}` : "DEFAULT"),
    lNa = () => {
      let { HOME: t, USERPROFILE: e, HOMEPATH: r, HOMEDRIVE: n = `C:${uNa.sep}` } = process.env;
      if (t) return t;
      if (e) return e;
      if (r) return `${n}${r}`;
      let o = cNa();
      return (mbr[o] || (mbr[o] = (0, aNa.homedir)()), mbr[o]);
    };
  Cmt.getHomeDir = lNa;
});