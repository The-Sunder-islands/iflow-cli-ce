/**
 * @module Ser
 * @category utils/oop
 * @label oop
 * @position 1343 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ser) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ser = T((_8c, mMn) => {
  var cMn = Ae("util"),
    ert = uMn();
  mMn.exports = { Readable: Xtt, Writable: Ztt };
  cMn.inherits(Xtt, ert);
  cMn.inherits(Ztt, ert);
  function lMn(t, e, r) {
    t[e] = function () {
      return (delete t[e], r.apply(this, arguments), this[e].apply(this, arguments));
    };
  }
  function Xtt(t, e) {
    if (!(this instanceof Xtt)) return new Xtt(t, e);
    (ert.call(this, e),
      lMn(this, "_read", function () {
        var r = t.call(this, e),
          n = this.emit.bind(this, "error");
        (r.on("error", n), r.pipe(this));
      }),
      this.emit("readable"));
  }
  function Ztt(t, e) {
    if (!(this instanceof Ztt)) return new Ztt(t, e);
    (ert.call(this, e),
      lMn(this, "_write", function () {
        var r = t.call(this, e),
          n = this.emit.bind(this, "error");
        (r.on("error", n), this.pipe(r));
      }),
      this.emit("writable"));
  }
});