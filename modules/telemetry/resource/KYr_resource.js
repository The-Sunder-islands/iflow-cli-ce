/**
 * @module KYr
 * @category telemetry/resource
 * @label resource
 * @position 347 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (KYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var KYr = T((VLe) => {
  "use strict";
  Object.defineProperty(VLe, "__esModule", { value: !0 });
  VLe.getMachineId = void 0;
  var pOo = Ae("fs"),
    hOo = GLe(),
    YYr = (Zt(), bt(cr));
  async function gOo() {
    try {
      return (await pOo.promises.readFile("/etc/hostid", { encoding: "utf8" })).trim();
    } catch (t) {
      YYr.diag.debug(`error reading machine id: ${t}`);
    }
    try {
      return (await (0, hOo.execAsync)("kenv -q smbios.system.uuid")).stdout.trim();
    } catch (t) {
      YYr.diag.debug(`error reading machine id: ${t}`);
    }
  }
  VLe.getMachineId = gOo;
});