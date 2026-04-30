/**
 * @module Rre
 * @category utils/events
 * @label events
 * @position 438 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Rre) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Rre = T((xFe) => {
  "use strict";
  Object.defineProperty(xFe, "__esModule", { value: !0 });
  xFe.BackoffTimeout = void 0;
  var OLo = La(),
    NLo = g0(),
    PLo = "backoff",
    BLo = 1e3,
    LLo = 1.6,
    MLo = 12e4,
    FLo = 0.2;
  function ULo(t, e) {
    return Math.random() * (e - t) + t;
  }
  var wFe = class t {
    constructor(e, r) {
      ((this.callback = e),
        (this.initialDelay = BLo),
        (this.multiplier = LLo),
        (this.maxDelay = MLo),
        (this.jitter = FLo),
        (this.running = !1),
        (this.hasRef = !0),
        (this.startTime = new Date()),
        (this.endTime = new Date()),
        (this.id = t.getNextId()),
        r &&
          (r.initialDelay && (this.initialDelay = r.initialDelay),
          r.multiplier && (this.multiplier = r.multiplier),
          r.jitter && (this.jitter = r.jitter),
          r.maxDelay && (this.maxDelay = r.maxDelay)),
        this.trace(
          "constructed initialDelay=" +
            this.initialDelay +
            " multiplier=" +
            this.multiplier +
            " jitter=" +
            this.jitter +
            " maxDelay=" +
            this.maxDelay,
        ),
        (this.nextDelay = this.initialDelay),
        (this.timerId = setTimeout(() => {}, 0)),
        clearTimeout(this.timerId));
    }
    static getNextId() {
      return this.nextId++;
    }
    trace(e) {
      NLo.trace(OLo.LogVerbosity.DEBUG, PLo, "{" + this.id + "} " + e);
    }
    runTimer(e) {
      var r, n;
      (this.trace("runTimer(delay=" + e + ")"),
        (this.endTime = this.startTime),
        this.endTime.setMilliseconds(this.endTime.getMilliseconds() + e),
        clearTimeout(this.timerId),
        (this.timerId = setTimeout(() => {
          (this.trace("timer fired"), (this.running = !1), this.callback());
        }, e)),
        this.hasRef || (n = (r = this.timerId).unref) === null || n === void 0 || n.call(r));
    }
    runOnce() {
      (this.trace("runOnce()"), (this.running = !0), (this.startTime = new Date()), this.runTimer(this.nextDelay));
      let e = Math.min(this.nextDelay * this.multiplier, this.maxDelay),
        r = e * this.jitter;
      this.nextDelay = e + ULo(-r, r);
    }
    stop() {
      (this.trace("stop()"), clearTimeout(this.timerId), (this.running = !1));
    }
    reset() {
      if ((this.trace("reset() running=" + this.running), (this.nextDelay = this.initialDelay), this.running)) {
        let e = new Date(),
          r = this.startTime;
        (r.setMilliseconds(r.getMilliseconds() + this.nextDelay),
          clearTimeout(this.timerId),
          e < r ? this.runTimer(r.getTime() - e.getTime()) : (this.running = !1));
      }
    }
    isRunning() {
      return this.running;
    }
    ref() {
      var e, r;
      ((this.hasRef = !0), (r = (e = this.timerId).ref) === null || r === void 0 || r.call(e));
    }
    unref() {
      var e, r;
      ((this.hasRef = !1), (r = (e = this.timerId).unref) === null || r === void 0 || r.call(e));
    }
    getEndTime() {
      return this.endTime;
    }
  };
  xFe.BackoffTimeout = wFe;
  wFe.nextId = 0;
});