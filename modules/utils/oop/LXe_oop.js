/**
 * @module LXe
 * @category utils/oop
 * @label oop
 * @position 1043 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (LXe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var LXe = T((Z3c, B4n) => {
  "use strict";
  function xE() {
    if (!(this instanceof xE)) return new xE();
    if (arguments.length)
      throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
    ((this.files = Object.create(null)),
      (this.comment = null),
      (this.root = ""),
      (this.clone = function () {
        var t = new xE();
        for (var e in this) typeof this[e] != "function" && (t[e] = this[e]);
        return t;
      }));
  }
  xE.prototype = l4n();
  xE.prototype.loadAsync = P4n();
  xE.support = Fk();
  xE.defaults = tVt();
  xE.version = "3.10.1";
  xE.loadAsync = function (t, e) {
    return new xE().loadAsync(t, e);
  };
  xE.external = bae();
  B4n.exports = xE;
});