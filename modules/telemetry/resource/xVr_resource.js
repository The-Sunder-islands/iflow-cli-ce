/**
 * @module xVr
 * @category telemetry/resource
 * @label resource
 * @position 209 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xVr = T((DPe) => {
  "use strict";
  Object.defineProperty(DPe, "__esModule", { value: !0 });
  DPe.getMachineId = void 0;
  var HTo = Ae("fs"),
    VTo = (Zt(), bt(cr));
  async function WTo() {
    let t = ["/etc/machine-id", "/var/lib/dbus/machine-id"];
    for (let e of t)
      try {
        return (await HTo.promises.readFile(e, { encoding: "utf8" })).trim();
      } catch (r) {
        VTo.diag.debug(`error reading machine id: ${r}`);
      }
  }
  DPe.getMachineId = WTo;
});