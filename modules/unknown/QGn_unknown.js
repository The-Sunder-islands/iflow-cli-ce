/**
 * @module QGn
 * @category unknown
 * @label unknown
 * @position 1439 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (QGn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var QGn = T((Mg, lnt) => {
  var dD = Ae("stream");
  process.env.READABLE_STREAM === "disable" && dD
    ? ((lnt.exports = dD),
      (Mg = lnt.exports = dD.Readable),
      (Mg.Readable = dD.Readable),
      (Mg.Writable = dD.Writable),
      (Mg.Duplex = dD.Duplex),
      (Mg.Transform = dD.Transform),
      (Mg.PassThrough = dD.PassThrough),
      (Mg.Stream = dD))
    : ((Mg = lnt.exports = onr()),
      (Mg.Stream = dD || Mg),
      (Mg.Readable = Mg),
      (Mg.Writable = rnr()),
      (Mg.Duplex = tz()),
      (Mg.Transform = hnr()),
      (Mg.PassThrough = jGn()));
});