/**
 * @module xii
 * @category utils/oop
 * @label oop
 * @position 1582 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xii) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xii = T((slr) => {
  "use strict";
  var wii = "\uFEFF";
  slr.PrependBOM = ilr;
  function ilr(t, e) {
    ((this.encoder = t), (this.addBOM = !0));
  }
  ilr.prototype.write = function (t) {
    return (this.addBOM && ((t = wii + t), (this.addBOM = !1)), this.encoder.write(t));
  };
  ilr.prototype.end = function () {
    return this.encoder.end();
  };
  slr.StripBOM = olr;
  function olr(t, e) {
    ((this.decoder = t), (this.pass = !1), (this.options = e || {}));
  }
  olr.prototype.write = function (t) {
    var e = this.decoder.write(t);
    return (
      this.pass ||
        !e ||
        (e[0] === wii && ((e = e.slice(1)), typeof this.options.stripBOM == "function" && this.options.stripBOM()),
        (this.pass = !0)),
      e
    );
  };
  olr.prototype.end = function () {
    return this.decoder.end();
  };
});