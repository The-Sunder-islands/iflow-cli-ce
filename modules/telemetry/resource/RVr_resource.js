/**
 * @module RVr
 * @category telemetry/resource
 * @label resource
 * @position 211 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (RVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var RVr = T((RPe) => {
  "use strict";
  Object.defineProperty(RPe, "__esModule", { value: !0 });
  RPe.getMachineId = void 0;
  var IVr = Ae("process"),
    JTo = xPe(),
    XTo = (Zt(), bt(cr));
  async function ZTo() {
    let t = "QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid",
      e = "%windir%\\System32\\REG.exe";
    IVr.arch === "ia32" && "PROCESSOR_ARCHITEW6432" in IVr.env && (e = "%windir%\\sysnative\\cmd.exe /c " + e);
    try {
      let n = (await (0, JTo.execAsync)(`${e} ${t}`)).stdout.split("REG_SZ");
      if (n.length === 2) return n[1].trim();
    } catch (r) {
      XTo.diag.debug(`error reading machine id: ${r}`);
    }
  }
  RPe.getMachineId = ZTo;
});