/**
 * @module Qqr
 * @category utils/oop
 * @label oop
 * @position 155 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Qqr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Qqr = T((_Ru, jqr) => {
  "use strict";
  jqr.exports = FNe;
  function FNe() {
    this._listeners = {};
  }
  FNe.prototype.on = function (e, r, n) {
    return ((this._listeners[e] || (this._listeners[e] = [])).push({ fn: r, ctx: n || this }), this);
  };
  FNe.prototype.off = function (e, r) {
    if (e === void 0) this._listeners = {};
    else if (r === void 0) this._listeners[e] = [];
    else for (var n = this._listeners[e], o = 0; o < n.length; ) n[o].fn === r ? n.splice(o, 1) : ++o;
    return this;
  };
  FNe.prototype.emit = function (e) {
    var r = this._listeners[e];
    if (r) {
      for (var n = [], o = 1; o < arguments.length; ) n.push(arguments[o++]);
      for (o = 0; o < r.length; ) r[o].fn.apply(r[o++].ctx, n);
    }
    return this;
  };
});