/**
 * @module T6i
 * @category utils/oop
 * @label oop
 * @position 1783 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (T6i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var T6i = T((kmt) => {
  "use strict";
  Object.defineProperty(kmt, "__esModule", { value: !0 });
  kmt.isStreamingPayload = void 0;
  var pPa = Ae("stream"),
    hPa = (t) => t?.body instanceof pPa.Readable || (typeof ReadableStream < "u" && t?.body instanceof ReadableStream);
  kmt.isStreamingPayload = hPa;
});