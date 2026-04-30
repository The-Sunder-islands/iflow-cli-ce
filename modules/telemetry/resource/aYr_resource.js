/**
 * @module aYr
 * @category telemetry/resource
 * @label resource
 * @position 307 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aYr = T((mLe) => {
  "use strict";
  Object.defineProperty(mLe, "__esModule", { value: !0 });
  mLe.getMachineId = void 0;
  var KRo = Ae("process"),
    ZG;
  async function JRo() {
    if (!ZG)
      switch (KRo.platform) {
        case "darwin":
          ZG = (await Promise.resolve().then(() => Se(eYr()))).getMachineId;
          break;
        case "linux":
          ZG = (await Promise.resolve().then(() => Se(tYr()))).getMachineId;
          break;
        case "freebsd":
          ZG = (await Promise.resolve().then(() => Se(nYr()))).getMachineId;
          break;
        case "win32":
          ZG = (await Promise.resolve().then(() => Se(oYr()))).getMachineId;
          break;
        default:
          ZG = (await Promise.resolve().then(() => Se(sYr()))).getMachineId;
          break;
      }
    return ZG();
  }
  mLe.getMachineId = JRo;
});