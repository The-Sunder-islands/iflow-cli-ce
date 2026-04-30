/**
 * @module sMn
 * @category unknown
 * @label unknown
 * @position 1341 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (sMn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var sMn = T((Og, Jtt) => {
  var sD = Ae("stream");
  process.env.READABLE_STREAM === "disable" && sD
    ? ((Jtt.exports = sD),
      (Og = Jtt.exports = sD.Readable),
      (Og.Readable = sD.Readable),
      (Og.Writable = sD.Writable),
      (Og.Duplex = sD.Duplex),
      (Og.Transform = sD.Transform),
      (Og.PassThrough = sD.PassThrough),
      (Og.Stream = sD))
    : ((Og = Jtt.exports = fer()),
      (Og.Stream = sD || Og),
      (Og.Readable = Og),
      (Og.Writable = ler()),
      (Og.Duplex = PW()),
      (Og.Transform = Cer()),
      (Og.PassThrough = oMn()));
});