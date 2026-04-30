/**
 * @module uJr
 * @category utils/oop
 * @label oop
 * @position 403 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (uJr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var uJr = T((XMe) => {
  "use strict";
  Object.defineProperty(XMe, "__esModule", { value: !0 });
  XMe.NoopSpanProcessor = void 0;
  var bwt = class {
    onStart(e, r) {}
    onEnd(e) {}
    shutdown() {
      return Promise.resolve();
    }
    forceFlush() {
      return Promise.resolve();
    }
  };
  XMe.NoopSpanProcessor = bwt;
});