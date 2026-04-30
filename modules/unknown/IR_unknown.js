/**
 * @module IR
 * @category unknown
 * @label unknown
 * @position 437 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (IR) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var IR = T(($B) => {
  "use strict";
  Object.defineProperty($B, "__esModule", { value: !0 });
  $B.QueuePicker = $B.UnavailablePicker = $B.PickResultType = void 0;
  var RLo = Ph(),
    kLo = La(),
    SFe;
  (function (t) {
    ((t[(t.COMPLETE = 0)] = "COMPLETE"),
      (t[(t.QUEUE = 1)] = "QUEUE"),
      (t[(t.TRANSIENT_FAILURE = 2)] = "TRANSIENT_FAILURE"),
      (t[(t.DROP = 3)] = "DROP"));
  })(SFe || ($B.PickResultType = SFe = {}));
  var mxt = class {
    constructor(e) {
      this.status = Object.assign(
        { code: kLo.Status.UNAVAILABLE, details: "No connection established", metadata: new RLo.Metadata() },
        e,
      );
    }
    pick(e) {
      return {
        pickResultType: SFe.TRANSIENT_FAILURE,
        subchannel: null,
        status: this.status,
        onCallStarted: null,
        onCallEnded: null,
      };
    }
  };
  $B.UnavailablePicker = mxt;
  var dxt = class {
    constructor(e, r) {
      ((this.loadBalancer = e), (this.childPicker = r), (this.calledExitIdle = !1));
    }
    pick(e) {
      return (
        this.calledExitIdle ||
          (process.nextTick(() => {
            this.loadBalancer.exitIdle();
          }),
          (this.calledExitIdle = !0)),
        this.childPicker
          ? this.childPicker.pick(e)
          : { pickResultType: SFe.QUEUE, subchannel: null, status: null, onCallStarted: null, onCallEnded: null }
      );
    }
  };
  $B.QueuePicker = dxt;
});