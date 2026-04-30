/**
 * @module vYr
 * @category utils/oop
 * @label oop
 * @position 322 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vYr = T((CLe) => {
  "use strict";
  Object.defineProperty(CLe, "__esModule", { value: !0 });
  CLe.MultiLogRecordProcessor = void 0;
  var yko = Ii(),
    Y4t = class {
      processors;
      forceFlushTimeoutMillis;
      constructor(e, r) {
        ((this.processors = e), (this.forceFlushTimeoutMillis = r));
      }
      async forceFlush() {
        let e = this.forceFlushTimeoutMillis;
        await Promise.all(this.processors.map((r) => (0, yko.callWithTimeout)(r.forceFlush(), e)));
      }
      onEmit(e, r) {
        this.processors.forEach((n) => n.onEmit(e, r));
      }
      async shutdown() {
        await Promise.all(this.processors.map((e) => e.shutdown()));
      }
    };
  CLe.MultiLogRecordProcessor = Y4t;
});