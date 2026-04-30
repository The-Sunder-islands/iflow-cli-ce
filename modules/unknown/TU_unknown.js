/**
 * @module TU
 * @category unknown
 * @label unknown
 * @position 1568 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (TU) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var TU = T((s4c, eni) => {
  "use strict";
  var jha = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
    Qha = { enumerable: !0, writable: !1, configurable: !1 },
    Gha = { CONNECTING: 0, OPEN: 1, CLOSING: 2, CLOSED: 3 },
    qha = { SENT: 1, RECEIVED: 2 },
    Hha = { CONTINUATION: 0, TEXT: 1, BINARY: 2, CLOSE: 8, PING: 9, PONG: 10 },
    Vha = 65535,
    Wha = { INFO: 0, PAYLOADLENGTH_16: 2, PAYLOADLENGTH_64: 3, READ_DATA: 4 },
    zha = Buffer.allocUnsafe(0),
    Yha = { text: 1, typedArray: 2, arrayBuffer: 3, blob: 4 };
  eni.exports = {
    uid: jha,
    sentCloseFrameState: qha,
    staticPropertyDescriptors: Qha,
    states: Gha,
    opcodes: Hha,
    maxUnsigned16Bit: Vha,
    parserStates: Wha,
    emptyBuffer: zha,
    sendHints: Yha,
  };
});