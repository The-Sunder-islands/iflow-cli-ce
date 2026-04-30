/**
 * @module CYr
 * @category utils/oop
 * @label oop
 * @position 323 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (CYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var CYr = T((SLe) => {
  "use strict";
  Object.defineProperty(SLe, "__esModule", { value: !0 });
  SLe.LoggerProviderSharedState = void 0;
  var _ko = z4t(),
    Eko = vYr(),
    K4t = class {
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
              (this.activeProcessor = new Eko.MultiLogRecordProcessor(
                this.registeredLogRecordProcessors,
                this.forceFlushTimeoutMillis,
              )))
            : (this.activeProcessor = new _ko.NoopLogRecordProcessor()));
      }
    };
  SLe.LoggerProviderSharedState = K4t;
});