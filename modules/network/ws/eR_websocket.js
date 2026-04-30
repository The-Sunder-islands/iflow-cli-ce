/**
 * @module eR
 * @category network/ws
 * @label websocket
 * @position 12 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (eR) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var eR = T((oyu, Mwr) => {
  "use strict";
  var Bwr = ["nodebuffer", "arraybuffer", "fragments"],
    Lwr = typeof Blob < "u";
  Lwr && Bwr.push("blob");
  Mwr.exports = {
    BINARY_TYPES: Bwr,
    CLOSE_TIMEOUT: 3e4,
    EMPTY_BUFFER: Buffer.alloc(0),
    GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
    hasBlob: Lwr,
    kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
    kListener: Symbol("kListener"),
    kStatusCode: Symbol("status-code"),
    kWebSocket: Symbol("websocket"),
    NOOP: () => {},
  };
});