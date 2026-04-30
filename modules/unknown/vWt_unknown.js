/**
 * @module vWt
 * @category unknown
 * @label unknown
 * @position 1055 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vWt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vWt = T(($Sn, jSn) => {
  (function () {
    var t;
    jSn.exports = t = (function () {
      function e(r, n, o) {
        if (((this.options = r.options), (this.stringify = r.stringify), (this.parent = r), n == null))
          throw new Error("Missing attribute name. " + this.debugInfo(n));
        if (o == null) throw new Error("Missing attribute value. " + this.debugInfo(n));
        ((this.name = this.stringify.attName(n)), (this.value = this.stringify.attValue(o)));
      }
      return (
        (e.prototype.clone = function () {
          return Object.create(this);
        }),
        (e.prototype.toString = function (r) {
          return this.options.writer.set(r).attribute(this);
        }),
        (e.prototype.debugInfo = function (r) {
          return (
            (r = r || this.name),
            r == null
              ? "parent: <" + this.parent.name + ">"
              : "attribute: {" + r + "}, parent: <" + this.parent.name + ">"
          );
        }),
        e
      );
    })();
  }).call($Sn);
});