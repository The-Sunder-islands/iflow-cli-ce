/**
 * @module ysn
 * @category telemetry/resource
 * @label resource
 * @position 677 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ysn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ysn = T((FQe) => {
  "use strict";
  Object.defineProperty(FQe, "__esModule", { value: !0 });
  FQe.getMachineId = void 0;
  var nXo = Ae("fs"),
    iXo = BQe(),
    Asn = (Zt(), bt(cr));
  async function oXo() {
    try {
      return (await nXo.promises.readFile("/etc/hostid", { encoding: "utf8" })).trim();
    } catch (t) {
      Asn.diag.debug(`error reading machine id: ${t}`);
    }
    try {
      return (await (0, iXo.execAsync)("kenv -q smbios.system.uuid")).stdout.trim();
    } catch (t) {
      Asn.diag.debug(`error reading machine id: ${t}`);
    }
  }
  FQe.getMachineId = oXo;
});