/**
 * @module OEe
 * @category unknown
 * @label unknown
 * @position 1443 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (OEe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var OEe = T((F6c, WGn) => {
  WGn.exports = pZs;
  function pZs(t) {
    var e = ["Directory", "File", "SymbolicLink", "Link", "BlockDevice", "CharacterDevice", "FIFO", "Socket"],
      r;
    if (t.type && e.indexOf(t.type) !== -1) return ((t[t.type] = !0), t.type);
    for (var n = 0, o = e.length; n < o; n++) {
      r = e[n];
      var s = t[r] || t["is" + r];
      if ((typeof s == "function" && (s = s.call(t)), s)) return ((t[r] = !0), (t.type = r), r);
    }
    return null;
  }
});