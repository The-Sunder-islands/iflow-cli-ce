/**
 * @module jTn
 * @category unknown
 * @label unknown
 * @position 1122 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jTn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jTn = T(($Tn) => {
  var jxs = Ae("fs"),
    xZe = Pk(),
    UTn = iWt();
  $Tn.openZip = Gxs;
  var Qxs = xZe.promisify(jxs.readFile);
  function Gxs(t) {
    return t.path
      ? Qxs(t.path).then(UTn.openArrayBuffer)
      : t.buffer
        ? xZe.resolve(UTn.openArrayBuffer(t.buffer))
        : t.file
          ? xZe.resolve(t.file)
          : xZe.reject(new Error("Could not find file in options"));
  }
});