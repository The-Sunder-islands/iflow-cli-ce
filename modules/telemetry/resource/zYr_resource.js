/**
 * @module zYr
 * @category telemetry/resource
 * @label resource
 * @position 346 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (zYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var zYr = T((HLe) => {
  "use strict";
  Object.defineProperty(HLe, "__esModule", { value: !0 });
  HLe.getMachineId = void 0;
  var mOo = Ae("fs"),
    dOo = (Zt(), bt(cr));
  async function fOo() {
    let t = ["/etc/machine-id", "/var/lib/dbus/machine-id"];
    for (let e of t)
      try {
        return (await mOo.promises.readFile(e, { encoding: "utf8" })).trim();
      } catch (r) {
        dOo.diag.debug(`error reading machine id: ${r}`);
      }
  }
  HLe.getMachineId = fOo;
});