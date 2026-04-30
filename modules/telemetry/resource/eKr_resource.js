/**
 * @module eKr
 * @category telemetry/resource
 * @label resource
 * @position 350 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (eKr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var eKr = T((YLe) => {
  "use strict";
  Object.defineProperty(YLe, "__esModule", { value: !0 });
  YLe.getMachineId = void 0;
  var vOo = Ae("process"),
    nq;
  async function COo() {
    if (!nq)
      switch (vOo.platform) {
        case "darwin":
          nq = (await Promise.resolve().then(() => Se(WYr()))).getMachineId;
          break;
        case "linux":
          nq = (await Promise.resolve().then(() => Se(zYr()))).getMachineId;
          break;
        case "freebsd":
          nq = (await Promise.resolve().then(() => Se(KYr()))).getMachineId;
          break;
        case "win32":
          nq = (await Promise.resolve().then(() => Se(XYr()))).getMachineId;
          break;
        default:
          nq = (await Promise.resolve().then(() => Se(ZYr()))).getMachineId;
          break;
      }
    return nq();
  }
  YLe.getMachineId = COo;
});