/**
 * @module Utr
 * @category utils/oop
 * @label oop
 * @position 1380 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Utr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Utr = T((m9c, XUn) => {
  var vzs = Ae("stream").Stream,
    Czs = Dg().PassThrough,
    Ftr = (XUn.exports = {});
  Ftr.isStream = function (t) {
    return t instanceof vzs;
  };
  Ftr.normalizeInputSource = function (t) {
    if (t === null) return Buffer.alloc(0);
    if (typeof t == "string") return Buffer.from(t);
    if (Ftr.isStream(t) && !t._readableState) {
      var e = new Czs();
      return (t.pipe(e), e);
    }
    return t;
  };
});