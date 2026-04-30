/**
 * @module aFn
 * @category unknown
 * @label unknown
 * @position 1355 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aFn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aFn = T((Ng, mrt) => {
  var aD = Ae("stream");
  process.env.READABLE_STREAM === "disable" && aD
    ? ((mrt.exports = aD),
      (Ng = mrt.exports = aD.Readable),
      (Ng.Readable = aD.Readable),
      (Ng.Writable = aD.Writable),
      (Ng.Duplex = aD.Duplex),
      (Ng.Transform = aD.Transform),
      (Ng.PassThrough = aD.PassThrough),
      (Ng.Stream = aD))
    : ((Ng = mrt.exports = Mer()),
      (Ng.Stream = aD || Ng),
      (Ng.Readable = Ng),
      (Ng.Writable = Per()),
      (Ng.Duplex = LW()),
      (Ng.Transform = Wer()),
      (Ng.PassThrough = sFn()));
});