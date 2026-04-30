/**
 * @module DVr
 * @category telemetry/resource
 * @label resource
 * @position 210 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (DVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var DVr = T((IPe) => {
  "use strict";
  Object.defineProperty(IPe, "__esModule", { value: !0 });
  IPe.getMachineId = void 0;
  var zTo = Ae("fs"),
    YTo = xPe(),
    TVr = (Zt(), bt(cr));
  async function KTo() {
    try {
      return (await zTo.promises.readFile("/etc/hostid", { encoding: "utf8" })).trim();
    } catch (t) {
      TVr.diag.debug(`error reading machine id: ${t}`);
    }
    try {
      return (await (0, YTo.execAsync)("kenv -q smbios.system.uuid")).stdout.trim();
    } catch (t) {
      TVr.diag.debug(`error reading machine id: ${t}`);
    }
  }
  IPe.getMachineId = KTo;
});