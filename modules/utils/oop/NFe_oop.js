/**
 * @module NFe
 * @category utils/oop
 * @label oop
 * @position 444 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (NFe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var NFe = T((OFe) => {
  "use strict";
  Object.defineProperty(OFe, "__esModule", { value: !0 });
  OFe.registerAdminService = aMo;
  OFe.addAdminServicesToServer = uMo;
  var _Xr = [];
  function aMo(t, e) {
    _Xr.push({ getServiceDefinition: t, getHandlers: e });
  }
  function uMo(t) {
    for (let { getServiceDefinition: e, getHandlers: r } of _Xr) t.addService(e(), r());
  }
});