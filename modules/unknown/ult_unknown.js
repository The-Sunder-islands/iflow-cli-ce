/**
 * @module ult
 * @category unknown
 * @label unknown
 * @position 1629 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ult) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ult = T((Jjc, tfi) => {
  var fSa = Ae("stream");
  tfi.exports = function (t) {
    return new Promise(function (e, r) {
      let n = [],
        o = fSa
          .Transform()
          .on("finish", function () {
            e(Buffer.concat(n));
          })
          .on("error", r);
      ((o._transform = function (s, a, u) {
        (n.push(s), u());
      }),
        t.on("error", r).pipe(o));
    });
  };
});