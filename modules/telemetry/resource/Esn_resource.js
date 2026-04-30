/**
 * @module Esn
 * @category telemetry/resource
 * @label resource
 * @position 678 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Esn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Esn = T((UQe) => {
  "use strict";
  Object.defineProperty(UQe, "__esModule", { value: !0 });
  UQe.getMachineId = void 0;
  var _sn = Ae("process"),
    sXo = BQe(),
    aXo = (Zt(), bt(cr));
  async function uXo() {
    let t = "QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid",
      e = "%windir%\\System32\\REG.exe";
    _sn.arch === "ia32" && "PROCESSOR_ARCHITEW6432" in _sn.env && (e = "%windir%\\sysnative\\cmd.exe /c " + e);
    try {
      let n = (await (0, sXo.execAsync)(`${e} ${t}`)).stdout.split("REG_SZ");
      if (n.length === 2) return n[1].trim();
    } catch (r) {
      aXo.diag.debug(`error reading machine id: ${r}`);
    }
  }
  UQe.getMachineId = uXo;
});