/**
 * @module bsn
 * @category telemetry/resource
 * @label resource
 * @position 676 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (bsn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var bsn = T((MQe) => {
  "use strict";
  Object.defineProperty(MQe, "__esModule", { value: !0 });
  MQe.getMachineId = void 0;
  var eXo = Ae("fs"),
    tXo = (Zt(), bt(cr));
  async function rXo() {
    let t = ["/etc/machine-id", "/var/lib/dbus/machine-id"];
    for (let e of t)
      try {
        return (await eXo.promises.readFile(e, { encoding: "utf8" })).trim();
      } catch (r) {
        tXo.diag.debug(`error reading machine id: ${r}`);
      }
  }
  MQe.getMachineId = rXo;
});