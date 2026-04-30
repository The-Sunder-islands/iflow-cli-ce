/**
 * @module Qwr
 * @category unknown
 * @label unknown
 * @position 14 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Qwr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Qwr = T((ayu, jwr) => {
  "use strict";
  var $wr = Symbol("kDone"),
    o9t = Symbol("kRun"),
    s9t = class {
      constructor(e) {
        ((this[$wr] = () => {
          (this.pending--, this[o9t]());
        }),
          (this.concurrency = e || 1 / 0),
          (this.jobs = []),
          (this.pending = 0));
      }
      add(e) {
        (this.jobs.push(e), this[o9t]());
      }
      [o9t]() {
        if (this.pending !== this.concurrency && this.jobs.length) {
          let e = this.jobs.shift();
          (this.pending++, e(this[$wr]));
        }
      }
    };
  jwr.exports = s9t;
});