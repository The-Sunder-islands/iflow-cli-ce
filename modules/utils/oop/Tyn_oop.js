/**
 * @module Tyn
 * @category utils/oop
 * @label oop
 * @position 947 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Tyn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Tyn = T((chc, xyn) => {
  "use strict";
  xyn.exports = function (t) {
    var e = !1,
      r = [];
    ((t.prototype._promiseCreated = function () {}),
      (t.prototype._pushContext = function () {}),
      (t.prototype._popContext = function () {
        return null;
      }),
      (t._peekContext = t.prototype._peekContext = function () {}));
    function n() {
      this._trace = new n.CapturedTrace(s());
    }
    ((n.prototype._pushContext = function () {
      this._trace !== void 0 && ((this._trace._promiseCreated = null), r.push(this._trace));
    }),
      (n.prototype._popContext = function () {
        if (this._trace !== void 0) {
          var a = r.pop(),
            u = a._promiseCreated;
          return ((a._promiseCreated = null), u);
        }
        return null;
      }));
    function o() {
      if (e) return new n();
    }
    function s() {
      var a = r.length - 1;
      if (a >= 0) return r[a];
    }
    return (
      (n.CapturedTrace = null),
      (n.create = o),
      (n.deactivateLongStackTraces = function () {}),
      (n.activateLongStackTraces = function () {
        var a = t.prototype._pushContext,
          u = t.prototype._popContext,
          c = t._peekContext,
          m = t.prototype._peekContext,
          d = t.prototype._promiseCreated;
        ((n.deactivateLongStackTraces = function () {
          ((t.prototype._pushContext = a),
            (t.prototype._popContext = u),
            (t._peekContext = c),
            (t.prototype._peekContext = m),
            (t.prototype._promiseCreated = d),
            (e = !1));
        }),
          (e = !0),
          (t.prototype._pushContext = n.prototype._pushContext),
          (t.prototype._popContext = n.prototype._popContext),
          (t._peekContext = t.prototype._peekContext = s),
          (t.prototype._promiseCreated = function () {
            var f = this._peekContext();
            f && f._promiseCreated == null && (f._promiseCreated = this);
          }));
      }),
      n
    );
  };
});