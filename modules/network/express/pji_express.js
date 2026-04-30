/**
 * @module pji
 * @category network/express
 * @label express
 * @position 1871 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pji) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pji = T((qal, fji) => {
  var vsu = o6r(),
    Csu = lji(),
    mji =
      'license should be a valid SPDX license expression (without "LicenseRef"), "UNLICENSED", or "SEE LICENSE IN <filename>"',
    Ssu = /^SEE LICEN[CS]E IN (.+)$/;
  function dji(t, e) {
    return e.slice(0, t.length) === t;
  }
  function a6r(t) {
    if (t.hasOwnProperty("license")) {
      var e = t.license;
      return dji("LicenseRef", e) || dji("DocumentRef", e);
    } else return a6r(t.left) || a6r(t.right);
  }
  fji.exports = function (t) {
    var e;
    try {
      e = vsu(t);
    } catch {
      var r;
      if (t === "UNLICENSED" || t === "UNLICENCED")
        return { validForOldPackages: !0, validForNewPackages: !0, unlicensed: !0 };
      if ((r = Ssu.exec(t))) return { validForOldPackages: !0, validForNewPackages: !0, inFile: r[1] };
      var n = { validForOldPackages: !1, validForNewPackages: !1, warnings: [mji] };
      if (t.trim().length !== 0) {
        var o = Csu(t);
        o && n.warnings.push('license is similar to the valid expression "' + o + '"');
      }
      return n;
    }
    return a6r(e)
      ? { validForNewPackages: !1, validForOldPackages: !1, spdx: !0, warnings: [mji] }
      : { validForNewPackages: !0, validForOldPackages: !0, spdx: !0 };
  };
});