/**
 * @module EHt
 * @category unknown
 * @label unknown
 * @position 984 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (EHt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var EHt = T((Vhc, B_n) => {
  "use strict";
  var WJe = Z1();
  function Wys(t, e) {
    var r = this,
      n = this._readableState && this._readableState.destroyed,
      o = this._writableState && this._writableState.destroyed;
    return n || o
      ? (e
          ? e(t)
          : t &&
            (this._writableState
              ? this._writableState.errorEmitted ||
                ((this._writableState.errorEmitted = !0), WJe.nextTick(zJe, this, t))
              : WJe.nextTick(zJe, this, t)),
        this)
      : (this._readableState && (this._readableState.destroyed = !0),
        this._writableState && (this._writableState.destroyed = !0),
        this._destroy(t || null, function (s) {
          !e && s
            ? r._writableState
              ? r._writableState.errorEmitted || ((r._writableState.errorEmitted = !0), WJe.nextTick(zJe, r, s))
              : WJe.nextTick(zJe, r, s)
            : e && e(s);
        }),
        this);
  }
  function zys() {
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
  function zJe(t, e) {
    t.emit("error", e);
  }
  B_n.exports = { destroy: Wys, undestroy: zys };
});