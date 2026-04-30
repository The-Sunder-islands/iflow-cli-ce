/**
 * @module tYr
 * @category telemetry/resource
 * @label resource
 * @position 303 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tYr = T((aLe) => {
  "use strict";
  Object.defineProperty(aLe, "__esModule", { value: !0 });
  aLe.getMachineId = void 0;
  var URo = Ae("fs"),
    $Ro = (Zt(), bt(cr));
  async function jRo() {
    let t = ["/etc/machine-id", "/var/lib/dbus/machine-id"];
    for (let e of t)
      try {
        return (await URo.promises.readFile(e, { encoding: "utf8" })).trim();
      } catch (r) {
        $Ro.diag.debug(`error reading machine id: ${r}`);
      }
  }
  aLe.getMachineId = jRo;
});