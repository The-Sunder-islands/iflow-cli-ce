/**
 * @module bO
 * @category unknown
 * @label unknown
 * @position 1421 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (bO) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var bO = T((Lg, Wrt) => {
  var mD = Ae("stream");
  process.env.READABLE_STREAM === "disable" && mD
    ? ((Wrt.exports = mD),
      (Lg = Wrt.exports = mD.Readable),
      (Lg.Readable = mD.Readable),
      (Lg.Writable = mD.Writable),
      (Lg.Duplex = mD.Duplex),
      (Lg.Transform = mD.Transform),
      (Lg.PassThrough = mD.PassThrough),
      (Lg.Stream = mD))
    : ((Lg = Wrt.exports = Frr()),
      (Lg.Stream = mD || Lg),
      (Lg.Readable = Lg),
      (Lg.Writable = Brr()),
      (Lg.Duplex = XW()),
      (Lg.Transform = zrr()),
      (Lg.PassThrough = qQn()));
});