/**
 * @module qyn
 * @category utils/oop
 * @label oop
 * @position 954 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qyn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qyn = T((bhc, Gyn) => {
  "use strict";
  Gyn.exports = function (t) {
    function e() {
      return this.value;
    }
    function r() {
      throw this.reason;
    }
    ((t.prototype.return = t.prototype.thenReturn =
      function (n) {
        return (n instanceof t && n.suppressUnhandledRejections(), this._then(e, void 0, void 0, { value: n }, void 0));
      }),
      (t.prototype.throw = t.prototype.thenThrow =
        function (n) {
          return this._then(r, void 0, void 0, { reason: n }, void 0);
        }),
      (t.prototype.catchThrow = function (n) {
        if (arguments.length <= 1) return this._then(void 0, r, void 0, { reason: n }, void 0);
        var o = arguments[1],
          s = function () {
            throw o;
          };
        return this.caught(n, s);
      }),
      (t.prototype.catchReturn = function (n) {
        if (arguments.length <= 1)
          return (
            n instanceof t && n.suppressUnhandledRejections(),
            this._then(void 0, e, void 0, { value: n }, void 0)
          );
        var o = arguments[1];
        o instanceof t && o.suppressUnhandledRejections();
        var s = function () {
          return o;
        };
        return this.caught(n, s);
      }));
  };
});