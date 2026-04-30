/**
 * @module Rot
 * @category network/http
 * @label undici
 * @position 1538 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Rot) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Rot = T((TCc, Fei) => {
  "use strict";
  var Bei = Symbol.for("undici.globalDispatcher.1"),
    { InvalidArgumentError: Fda } = da(),
    Uda = zz();
  Mei() === void 0 && Lei(new Uda());
  function Lei(t) {
    if (!t || typeof t.dispatch != "function") throw new Fda("Argument agent must implement Agent");
    Object.defineProperty(globalThis, Bei, { value: t, writable: !0, enumerable: !1, configurable: !1 });
  }
  function Mei() {
    return globalThis[Bei];
  }
  var $da = [
    "fetch",
    "Headers",
    "Response",
    "Request",
    "FormData",
    "WebSocket",
    "CloseEvent",
    "ErrorEvent",
    "MessageEvent",
    "EventSource",
  ];
  Fei.exports = { setGlobalDispatcher: Lei, getGlobalDispatcher: Mei, installedExports: $da };
});