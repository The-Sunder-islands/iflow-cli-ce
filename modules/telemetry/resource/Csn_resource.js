/**
 * @module Csn
 * @category telemetry/resource
 * @label resource
 * @position 680 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Csn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Csn = T((jQe) => {
  "use strict";
  Object.defineProperty(jQe, "__esModule", { value: !0 });
  jQe.getMachineId = void 0;
  var mXo = Ae("process"),
    zq;
  async function dXo() {
    if (!zq)
      switch (mXo.platform) {
        case "darwin":
          zq = (await Promise.resolve().then(() => Se(gsn()))).getMachineId;
          break;
        case "linux":
          zq = (await Promise.resolve().then(() => Se(bsn()))).getMachineId;
          break;
        case "freebsd":
          zq = (await Promise.resolve().then(() => Se(ysn()))).getMachineId;
          break;
        case "win32":
          zq = (await Promise.resolve().then(() => Se(Esn()))).getMachineId;
          break;
        default:
          zq = (await Promise.resolve().then(() => Se(vsn()))).getMachineId;
          break;
      }
    return zq();
  }
  jQe.getMachineId = dXo;
});