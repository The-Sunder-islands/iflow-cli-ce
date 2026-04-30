/**
 * @module jRt
 * @category utils/oop
 * @label oop
 * @position 694 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jRt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jRt = T((XQe) => {
  "use strict";
  Object.defineProperty(XQe, "__esModule", { value: !0 });
  XQe.NoopLogRecordProcessor = void 0;
  var $Rt = class {
    forceFlush() {
      return Promise.resolve();
    }
    onEmit(e, r) {}
    shutdown() {
      return Promise.resolve();
    }
  };
  XQe.NoopLogRecordProcessor = $Rt;
});