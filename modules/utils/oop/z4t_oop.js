/**
 * @module z4t
 * @category utils/oop
 * @label oop
 * @position 321 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (z4t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var z4t = T((vLe) => {
  "use strict";
  Object.defineProperty(vLe, "__esModule", { value: !0 });
  vLe.NoopLogRecordProcessor = void 0;
  var W4t = class {
    forceFlush() {
      return Promise.resolve();
    }
    onEmit(e, r) {}
    shutdown() {
      return Promise.resolve();
    }
  };
  vLe.NoopLogRecordProcessor = W4t;
});