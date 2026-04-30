/**
 * @module Fon
 * @category telemetry/otel
 * @label opentelemetry
 * @position 656 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Fon) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Fon = T((s4) => {
  "use strict";
  Object.defineProperty(s4, "__esModule", { value: !0 });
  s4.getRPCMetadata = s4.deleteRPCMetadata = s4.setRPCMetadata = s4.RPCType = void 0;
  var XKo = (Zt(), bt(cr)),
    _Rt = (0, XKo.createContextKey)("OpenTelemetry SDK Context Key RPC_METADATA"),
    ZKo;
  (function (t) {
    t.HTTP = "http";
  })((ZKo = s4.RPCType || (s4.RPCType = {})));
  function eJo(t, e) {
    return t.setValue(_Rt, e);
  }
  s4.setRPCMetadata = eJo;
  function tJo(t) {
    return t.deleteValue(_Rt);
  }
  s4.deleteRPCMetadata = tJo;
  function rJo(t) {
    return t.getValue(_Rt);
  }
  s4.getRPCMetadata = rJo;
});