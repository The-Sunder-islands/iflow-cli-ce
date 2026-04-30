/**
 * @module Jnn
 * @category telemetry/otel
 * @label opentelemetry
 * @position 590 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Jnn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Jnn = T((o4) => {
  "use strict";
  Object.defineProperty(o4, "__esModule", { value: !0 });
  o4.getRPCMetadata = o4.deleteRPCMetadata = o4.setRPCMetadata = o4.RPCType = void 0;
  var uzo = (Zt(), bt(cr)),
    N7t = (0, uzo.createContextKey)("OpenTelemetry SDK Context Key RPC_METADATA"),
    czo;
  (function (t) {
    t.HTTP = "http";
  })((czo = o4.RPCType || (o4.RPCType = {})));
  function lzo(t, e) {
    return t.setValue(N7t, e);
  }
  o4.setRPCMetadata = lzo;
  function mzo(t) {
    return t.deleteValue(N7t);
  }
  o4.deleteRPCMetadata = mzo;
  function dzo(t) {
    return t.getValue(N7t);
  }
  o4.getRPCMetadata = dzo;
});