/**
 * @module Jrt
 * @category utils/oop
 * @label oop
 * @position 1424 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Jrt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Jrt = T((_6c, zQn) => {
  var zJs = zF(),
    Krt = Ae("stream"),
    YJs = fce();
  (!Krt.Writable || !Krt.Writable.prototype.destroy) && (Krt = bO());
  zQn.exports = function (t) {
    return new zJs(function (e, r) {
      var n = [],
        o = Krt.Transform()
          .on("finish", function () {
            e(YJs.concat(n));
          })
          .on("error", r);
      ((o._transform = function (s, a, u) {
        (n.push(s), u());
      }),
        t.on("error", r).pipe(o));
    });
  };
});