/**
 * @module Rin
 * @category telemetry/resource
 * @label resource
 * @position 609 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Rin) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Rin = T((Bje) => {
  "use strict";
  Object.defineProperty(Bje, "__esModule", { value: !0 });
  Bje.getMachineId = void 0;
  var mYo = Ae("fs"),
    dYo = Oje(),
    Iin = (Zt(), bt(cr));
  async function fYo() {
    try {
      return (await mYo.promises.readFile("/etc/hostid", { encoding: "utf8" })).trim();
    } catch (t) {
      Iin.diag.debug(`error reading machine id: ${t}`);
    }
    try {
      return (await (0, dYo.execAsync)("kenv -q smbios.system.uuid")).stdout.trim();
    } catch (t) {
      Iin.diag.debug(`error reading machine id: ${t}`);
    }
  }
  Bje.getMachineId = fYo;
});