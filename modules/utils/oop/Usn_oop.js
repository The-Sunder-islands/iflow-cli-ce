/**
 * @module Usn
 * @category utils/oop
 * @label oop
 * @position 695 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Usn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Usn = T((ZQe) => {
  "use strict";
  Object.defineProperty(ZQe, "__esModule", { value: !0 });
  ZQe.MultiLogRecordProcessor = void 0;
  var PXo = a4(),
    QRt = class {
      processors;
      forceFlushTimeoutMillis;
      constructor(e, r) {
        ((this.processors = e), (this.forceFlushTimeoutMillis = r));
      }
      async forceFlush() {
        let e = this.forceFlushTimeoutMillis;
        await Promise.all(this.processors.map((r) => (0, PXo.callWithTimeout)(r.forceFlush(), e)));
      }
      onEmit(e, r) {
        this.processors.forEach((n) => n.onEmit(e, r));
      }
      async shutdown() {
        await Promise.all(this.processors.map((e) => e.shutdown()));
      }
    };
  ZQe.MultiLogRecordProcessor = QRt;
});
var $sn = T((eGe) => {
  "use strict";
  Object.defineProperty(eGe, "__esModule", { value: !0 });
  eGe.LoggerProviderSharedState = void 0;
  var BXo = jRt(),
    LXo = Usn(),
    GRt = class {
      resource;
      forceFlushTimeoutMillis;
      logRecordLimits;
      processors;
      loggers = new Map();
      activeProcessor;
      registeredLogRecordProcessors = [];
      constructor(e, r, n, o) {
        ((this.resource = e),
          (this.forceFlushTimeoutMillis = r),
          (this.logRecordLimits = n),
          (this.processors = o),
          o.length > 0
            ? ((this.registeredLogRecordProcessors = o),
              (this.activeProcessor = new LXo.MultiLogRecordProcessor(
                this.registeredLogRecordProcessors,
                this.forceFlushTimeoutMillis,
              )))
            : (this.activeProcessor = new BXo.NoopLogRecordProcessor()));
      }
    };
  eGe.LoggerProviderSharedState = GRt;
});