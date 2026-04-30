/**
 * @module uqr
 * @category unknown
 * @label unknown
 * @position 144 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (uqr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var uqr = T(($C) => {
  "use strict";
  Object.defineProperty($C, "__esModule", { value: !0 });
  $C.getRPCMetadata = $C.deleteRPCMetadata = $C.setRPCMetadata = $C.RPCType = void 0;
  var Swo = (Zt(), bt(cr)),
    yvt = (0, Swo.createContextKey)("OpenTelemetry SDK Context Key RPC_METADATA"),
    wwo;
  (function (t) {
    t.HTTP = "http";
  })((wwo = $C.RPCType || ($C.RPCType = {})));
  function xwo(t, e) {
    return t.setValue(yvt, e);
  }
  $C.setRPCMetadata = xwo;
  function Two(t) {
    return t.deleteValue(yvt);
  }
  $C.deleteRPCMetadata = Two;
  function Dwo(t) {
    return t.getValue(yvt);
  }
  $C.getRPCMetadata = Dwo;
});