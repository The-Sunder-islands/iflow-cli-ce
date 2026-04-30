/**
 * @module nYr
 * @category telemetry/resource
 * @label resource
 * @position 304 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (nYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var nYr = T((uLe) => {
  "use strict";
  Object.defineProperty(uLe, "__esModule", { value: !0 });
  uLe.getMachineId = void 0;
  var QRo = Ae("fs"),
    GRo = oLe(),
    rYr = (Zt(), bt(cr));
  async function qRo() {
    try {
      return (await QRo.promises.readFile("/etc/hostid", { encoding: "utf8" })).trim();
    } catch (t) {
      rYr.diag.debug(`error reading machine id: ${t}`);
    }
    try {
      return (await (0, GRo.execAsync)("kenv -q smbios.system.uuid")).stdout.trim();
    } catch (t) {
      rYr.diag.debug(`error reading machine id: ${t}`);
    }
  }
  uLe.getMachineId = qRo;
});