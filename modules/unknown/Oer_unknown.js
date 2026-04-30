/**
 * @module Oer
 * @category unknown
 * @label unknown
 * @position 1349 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Oer) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Oer = T((x8c, TMn) => {
  "use strict";
  var nrt = Z1();
  function bGs(t, e) {
    var r = this,
      n = this._readableState && this._readableState.destroyed,
      o = this._writableState && this._writableState.destroyed;
    return n || o
      ? (e
          ? e(t)
          : t &&
            (this._writableState
              ? this._writableState.errorEmitted ||
                ((this._writableState.errorEmitted = !0), nrt.nextTick(irt, this, t))
              : nrt.nextTick(irt, this, t)),
        this)
      : (this._readableState && (this._readableState.destroyed = !0),
        this._writableState && (this._writableState.destroyed = !0),
        this._destroy(t || null, function (s) {
          !e && s
            ? r._writableState
              ? r._writableState.errorEmitted || ((r._writableState.errorEmitted = !0), nrt.nextTick(irt, r, s))
              : nrt.nextTick(irt, r, s)
            : e && e(s);
        }),
        this);
  }
  function AGs() {
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
  function irt(t, e) {
    t.emit("error", e);
  }
  TMn.exports = { destroy: bGs, undestroy: AGs };
});