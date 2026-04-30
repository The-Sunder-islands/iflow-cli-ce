/**
 * @module Oin
 * @category telemetry/resource
 * @label resource
 * @position 610 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Oin) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Oin = T((Lje) => {
  "use strict";
  Object.defineProperty(Lje, "__esModule", { value: !0 });
  Lje.getMachineId = void 0;
  var kin = Ae("process"),
    pYo = Oje(),
    hYo = (Zt(), bt(cr));
  async function gYo() {
    let t = "QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid",
      e = "%windir%\\System32\\REG.exe";
    kin.arch === "ia32" && "PROCESSOR_ARCHITEW6432" in kin.env && (e = "%windir%\\sysnative\\cmd.exe /c " + e);
    try {
      let n = (await (0, pYo.execAsync)(`${e} ${t}`)).stdout.split("REG_SZ");
      if (n.length === 2) return n[1].trim();
    } catch (r) {
      hYo.diag.debug(`error reading machine id: ${r}`);
    }
  }
  Lje.getMachineId = gYo;
});