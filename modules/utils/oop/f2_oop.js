/**
 * @module f2
 * @category utils/oop
 * @label oop
 * @position 436 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (f2) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var f2 = T((CFe) => {
  "use strict";
  Object.defineProperty(CFe, "__esModule", { value: !0 });
  CFe.ConnectivityState = void 0;
  var mXr;
  (function (t) {
    ((t[(t.IDLE = 0)] = "IDLE"),
      (t[(t.CONNECTING = 1)] = "CONNECTING"),
      (t[(t.READY = 2)] = "READY"),
      (t[(t.TRANSIENT_FAILURE = 3)] = "TRANSIENT_FAILURE"),
      (t[(t.SHUTDOWN = 4)] = "SHUTDOWN"));
  })(mXr || (CFe.ConnectivityState = mXr = {}));
});