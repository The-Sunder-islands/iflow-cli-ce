/**
 * @module Pin
 * @category telemetry/resource
 * @label resource
 * @position 612 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Pin) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Pin = T((Fje) => {
  "use strict";
  Object.defineProperty(Fje, "__esModule", { value: !0 });
  Fje.getMachineId = void 0;
  var yYo = Ae("process"),
    jq;
  async function _Yo() {
    if (!jq)
      switch (yYo.platform) {
        case "darwin":
          jq = (await Promise.resolve().then(() => Se(Tin()))).getMachineId;
          break;
        case "linux":
          jq = (await Promise.resolve().then(() => Se(Din()))).getMachineId;
          break;
        case "freebsd":
          jq = (await Promise.resolve().then(() => Se(Rin()))).getMachineId;
          break;
        case "win32":
          jq = (await Promise.resolve().then(() => Se(Oin()))).getMachineId;
          break;
        default:
          jq = (await Promise.resolve().then(() => Se(Nin()))).getMachineId;
          break;
      }
    return jq();
  }
  Fje.getMachineId = _Yo;
});