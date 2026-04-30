/**
 * @module I6
 * @category utils/oop
 * @label oop
 * @position 1001 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (I6) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var I6 = T((c3c, OEn) => {
  "use strict";
  function kEn(t) {
    ((this.name = t || "default"),
      (this.streamInfo = {}),
      (this.generatedError = null),
      (this.extraStreamInfo = {}),
      (this.isPaused = !0),
      (this.isFinished = !1),
      (this.isLocked = !1),
      (this._listeners = { data: [], end: [], error: [] }),
      (this.previous = null));
  }
  kEn.prototype = {
    push: function (t) {
      this.emit("data", t);
    },
    end: function () {
      if (this.isFinished) return !1;
      this.flush();
      try {
        (this.emit("end"), this.cleanUp(), (this.isFinished = !0));
      } catch (t) {
        this.emit("error", t);
      }
      return !0;
    },
    error: function (t) {
      return this.isFinished
        ? !1
        : (this.isPaused
            ? (this.generatedError = t)
            : ((this.isFinished = !0), this.emit("error", t), this.previous && this.previous.error(t), this.cleanUp()),
          !0);
    },
    on: function (t, e) {
      return (this._listeners[t].push(e), this);
    },
    cleanUp: function () {
      ((this.streamInfo = this.generatedError = this.extraStreamInfo = null), (this._listeners = []));
    },
    emit: function (t, e) {
      if (this._listeners[t]) for (var r = 0; r < this._listeners[t].length; r++) this._listeners[t][r].call(this, e);
    },
    pipe: function (t) {
      return t.registerPrevious(this);
    },
    registerPrevious: function (t) {
      if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
      ((this.streamInfo = t.streamInfo), this.mergeStreamInfo(), (this.previous = t));
      var e = this;
      return (
        t.on("data", function (r) {
          e.processChunk(r);
        }),
        t.on("end", function () {
          e.end();
        }),
        t.on("error", function (r) {
          e.error(r);
        }),
        this
      );
    },
    pause: function () {
      return this.isPaused || this.isFinished ? !1 : ((this.isPaused = !0), this.previous && this.previous.pause(), !0);
    },
    resume: function () {
      if (!this.isPaused || this.isFinished) return !1;
      this.isPaused = !1;
      var t = !1;
      return (
        this.generatedError && (this.error(this.generatedError), (t = !0)),
        this.previous && this.previous.resume(),
        !t
      );
    },
    flush: function () {},
    processChunk: function (t) {
      this.push(t);
    },
    withStreamInfo: function (t, e) {
      return ((this.extraStreamInfo[t] = e), this.mergeStreamInfo(), this);
    },
    mergeStreamInfo: function () {
      for (var t in this.extraStreamInfo)
        Object.prototype.hasOwnProperty.call(this.extraStreamInfo, t) && (this.streamInfo[t] = this.extraStreamInfo[t]);
    },
    lock: function () {
      if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
      ((this.isLocked = !0), this.previous && this.previous.lock());
    },
    toString: function () {
      var t = "Worker " + this.name;
      return this.previous ? this.previous + " -> " + t : t;
    },
  };
  OEn.exports = kEn;
});