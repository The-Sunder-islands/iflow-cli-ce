/**
 * @module LKr
 * @category utils/oop
 * @label oop
 * @position 381 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (LKr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var LKr = T((xMe) => {
  "use strict";
  Object.defineProperty(xMe, "__esModule", { value: !0 });
  xMe.NoopSpanProcessor = void 0;
  var qSt = class {
    onStart(e, r) {}
    onEnd(e) {}
    shutdown() {
      return Promise.resolve();
    }
    forceFlush() {
      return Promise.resolve();
    }
  };
  xMe.NoopSpanProcessor = qSt;
});