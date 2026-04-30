/**
 * @module oYr
 * @category telemetry/resource
 * @label resource
 * @position 305 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (oYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var oYr = T((cLe) => {
  "use strict";
  Object.defineProperty(cLe, "__esModule", { value: !0 });
  cLe.getMachineId = void 0;
  var iYr = Ae("process"),
    HRo = oLe(),
    VRo = (Zt(), bt(cr));
  async function WRo() {
    let t = "QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid",
      e = "%windir%\\System32\\REG.exe";
    iYr.arch === "ia32" && "PROCESSOR_ARCHITEW6432" in iYr.env && (e = "%windir%\\sysnative\\cmd.exe /c " + e);
    try {
      let n = (await (0, HRo.execAsync)(`${e} ${t}`)).stdout.split("REG_SZ");
      if (n.length === 2) return n[1].trim();
    } catch (r) {
      VRo.diag.debug(`error reading machine id: ${r}`);
    }
  }
  cLe.getMachineId = WRo;
});