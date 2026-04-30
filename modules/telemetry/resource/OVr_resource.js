/**
 * @module OVr
 * @category telemetry/resource
 * @label resource
 * @position 213 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (OVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var OVr = T((OPe) => {
  "use strict";
  Object.defineProperty(OPe, "__esModule", { value: !0 });
  OPe.getMachineId = void 0;
  var rDo = Ae("process"),
    VG;
  async function nDo() {
    if (!VG)
      switch (rDo.platform) {
        case "darwin":
          VG = (await Promise.resolve().then(() => Se(wVr()))).getMachineId;
          break;
        case "linux":
          VG = (await Promise.resolve().then(() => Se(xVr()))).getMachineId;
          break;
        case "freebsd":
          VG = (await Promise.resolve().then(() => Se(DVr()))).getMachineId;
          break;
        case "win32":
          VG = (await Promise.resolve().then(() => Se(RVr()))).getMachineId;
          break;
        default:
          VG = (await Promise.resolve().then(() => Se(kVr()))).getMachineId;
          break;
      }
    return VG();
  }
  OPe.getMachineId = nDo;
});