/**
 * @module Nrr
 * @category unknown
 * @label unknown
 * @position 1414 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Nrr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Nrr = T((l6c, mQn) => {
  "use strict";
  var Urt = Z1();
  function QKs(t, e) {
    var r = this,
      n = this._readableState && this._readableState.destroyed,
      o = this._writableState && this._writableState.destroyed;
    return n || o
      ? (e
          ? e(t)
          : t &&
            (this._writableState
              ? this._writableState.errorEmitted ||
                ((this._writableState.errorEmitted = !0), Urt.nextTick($rt, this, t))
              : Urt.nextTick($rt, this, t)),
        this)
      : (this._readableState && (this._readableState.destroyed = !0),
        this._writableState && (this._writableState.destroyed = !0),
        this._destroy(t || null, function (s) {
          !e && s
            ? r._writableState
              ? r._writableState.errorEmitted || ((r._writableState.errorEmitted = !0), Urt.nextTick($rt, r, s))
              : Urt.nextTick($rt, r, s)
            : e && e(s);
        }),
        this);
  }
  function GKs() {
    (this._readableState &&
      ((this._readableState.destroyed = !1),
      (this._readableState.reading = !1),
      (this._readableState.ended = !1),
      (this._readableState.endEmitted = !1)),
      this._writableState &&
        ((this._writableState.destroyed = !1),
        (this._writableState.ended = !1),
        (this._writableState.ending = !1),
        (this._writableState.finalCalled = !1),
        (this._writableState.prefinished = !1),
        (this._writableState.finished = !1),
        (this._writableState.errorEmitted = !1)));
  }
  function $rt(t, e) {
    t.emit("error", e);
  }
  mQn.exports = { destroy: QKs, undestroy: GKs };
});