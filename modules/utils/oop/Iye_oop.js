/**
 * @module Iye
 * @category utils/oop
 * @label oop
 * @position 1058 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Iye) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Iye = T((VSn, WSn) => {
  (function () {
    var t,
      e,
      r = function (o, s) {
        for (var a in s) n.call(s, a) && (o[a] = s[a]);
        function u() {
          this.constructor = o;
        }
        return ((u.prototype = s.prototype), (o.prototype = new u()), (o.__super__ = s.prototype), o);
      },
      n = {}.hasOwnProperty;
    ((e = B2()),
      (WSn.exports = t =
        (function (o) {
          r(s, o);
          function s(a, u) {
            if ((s.__super__.constructor.call(this, a), u == null))
              throw new Error("Missing comment text. " + this.debugInfo());
            this.text = this.stringify.comment(u);
          }
          return (
            (s.prototype.clone = function () {
              return Object.create(this);
            }),
            (s.prototype.toString = function (a) {
              return this.options.writer.set(a).comment(this);
            }),
            s
          );
        })(e)));
  }).call(VSn);
});