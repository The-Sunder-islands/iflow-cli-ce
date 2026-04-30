/**
 * @module Dg
 * @category utils/object
 * @label object
 * @position 1157 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Dg) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Dg = T((OE, a_e) => {
  var s_e = Ae("stream");
  process.env.READABLE_STREAM === "disable" && s_e
    ? ((a_e.exports = s_e.Readable), Object.assign(a_e.exports, s_e), (a_e.exports.Stream = s_e))
    : ((OE = a_e.exports = Wzt()),
      (OE.Stream = s_e || OE),
      (OE.Readable = OE),
      (OE.Writable = qzt()),
      (OE.Duplex = mW()),
      (OE.Transform = aYt()),
      (OE.PassThrough = vIn()),
      (OE.finished = GZe()),
      (OE.pipeline = TIn()));
});