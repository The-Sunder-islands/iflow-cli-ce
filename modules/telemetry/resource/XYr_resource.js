/**
 * @module XYr
 * @category telemetry/resource
 * @label resource
 * @position 348 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (XYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var XYr = T((WLe) => {
  "use strict";
  Object.defineProperty(WLe, "__esModule", { value: !0 });
  WLe.getMachineId = void 0;
  var JYr = Ae("process"),
    bOo = GLe(),
    AOo = (Zt(), bt(cr));
  async function yOo() {
    let t = "QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid",
      e = "%windir%\\System32\\REG.exe";
    JYr.arch === "ia32" && "PROCESSOR_ARCHITEW6432" in JYr.env && (e = "%windir%\\sysnative\\cmd.exe /c " + e);
    try {
      let n = (await (0, bOo.execAsync)(`${e} ${t}`)).stdout.split("REG_SZ");
      if (n.length === 2) return n[1].trim();
    } catch (r) {
      AOo.diag.debug(`error reading machine id: ${r}`);
    }
  }
  WLe.getMachineId = yOo;
});