/**
 * @module fbr
 * @category utils/crypto
 * @label crypto
 * @position 1773 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (fbr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var fbr = T((Smt) => {
  "use strict";
  Object.defineProperty(Smt, "__esModule", { value: !0 });
  Smt.getSSOTokenFilepath = void 0;
  var mNa = Ae("crypto"),
    dNa = Ae("path"),
    fNa = dbr(),
    pNa = (t) => {
      let r = (0, mNa.createHash)("sha1").update(t).digest("hex");
      return (0, dNa.join)((0, fNa.getHomeDir)(), ".aws", "sso", "cache", `${r}.json`);
    };
  Smt.getSSOTokenFilepath = pNa;
});