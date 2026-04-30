/**
 * @module fsr
 * @category utils/fs
 * @label fs
 * @position 1481 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (fsr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var fsr = T((_vc, sKn) => {
  "use strict";
  var { kConnected: rKn, kPending: nKn, kRunning: iKn, kSize: oKn, kFree: Uoa, kQueued: $oa } = n0(),
    msr = class {
      constructor(e) {
        ((this.connected = e[rKn]), (this.pending = e[nKn]), (this.running = e[iKn]), (this.size = e[oKn]));
      }
    },
    dsr = class {
      constructor(e) {
        ((this.connected = e[rKn]),
          (this.free = e[Uoa]),
          (this.pending = e[nKn]),
          (this.queued = e[$oa]),
          (this.running = e[iKn]),
          (this.size = e[oKn]));
      }
    };
  sKn.exports = { ClientStats: msr, PoolStats: dsr };
});