/**
 * @module MHt
 * @category unknown
 * @label unknown
 * @position 992 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (MHt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var MHt = T((Sg, tXe) => {
  var QT = Ae("stream");
  process.env.READABLE_STREAM === "disable" && QT
    ? ((tXe.exports = QT),
      (Sg = tXe.exports = QT.Readable),
      (Sg.Readable = QT.Readable),
      (Sg.Writable = QT.Writable),
      (Sg.Duplex = QT.Duplex),
      (Sg.Transform = QT.Transform),
      (Sg.PassThrough = QT.PassThrough),
      (Sg.Stream = QT))
    : ((Sg = tXe.exports = xHt()),
      (Sg.Stream = QT || Sg),
      (Sg.Readable = Sg),
      (Sg.Writable = CHt()),
      (Sg.Duplex = HV()),
      (Sg.Transform = LHt()),
      (Sg.PassThrough = hEn()));
});