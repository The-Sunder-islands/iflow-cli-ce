/**
 * @module uAn
 * @category unknown
 * @label unknown
 * @position 858 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (uAn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var uAn = T((Erc, aAn) => {
  aAn.exports = oAn;
  oAn.sync = ebs;
  var iAn = Ae("fs");
  function oAn(t, e, r) {
    iAn.stat(t, function (n, o) {
      r(n, n ? !1 : sAn(o, e));
    });
  }
  function ebs(t, e) {
    return sAn(iAn.statSync(t), e);
  }
  function sAn(t, e) {
    return t.isFile() && tbs(t, e);
  }
  function tbs(t, e) {
    var r = t.mode,
      n = t.uid,
      o = t.gid,
      s = e.uid !== void 0 ? e.uid : process.getuid && process.getuid(),
      a = e.gid !== void 0 ? e.gid : process.getgid && process.getgid(),
      u = parseInt("100", 8),
      c = parseInt("010", 8),
      m = parseInt("001", 8),
      d = u | c,
      f = r & m || (r & c && o === a) || (r & u && n === s) || (r & d && s === 0);
    return f;
  }
});