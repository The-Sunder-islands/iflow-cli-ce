/**
 * @module Din
 * @category telemetry/resource
 * @label resource
 * @position 608 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Din) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Din = T((Pje) => {
  "use strict";
  Object.defineProperty(Pje, "__esModule", { value: !0 });
  Pje.getMachineId = void 0;
  var uYo = Ae("fs"),
    cYo = (Zt(), bt(cr));
  async function lYo() {
    let t = ["/etc/machine-id", "/var/lib/dbus/machine-id"];
    for (let e of t)
      try {
        return (await uYo.promises.readFile(e, { encoding: "utf8" })).trim();
      } catch (r) {
        cYo.diag.debug(`error reading machine id: ${r}`);
      }
  }
  Pje.getMachineId = lYo;
});