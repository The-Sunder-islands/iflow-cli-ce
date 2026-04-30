/**
 * @module Tin
 * @category telemetry/resource
 * @label resource
 * @position 607 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Tin) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Tin = T((Nje) => {
  "use strict";
  Object.defineProperty(Nje, "__esModule", { value: !0 });
  Nje.getMachineId = void 0;
  var oYo = Oje(),
    sYo = (Zt(), bt(cr));
  async function aYo() {
    try {
      let e = (await (0, oYo.execAsync)('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout
        .split(
          `
`,
        )
        .find((n) => n.includes("IOPlatformUUID"));
      if (!e) return;
      let r = e.split('" = "');
      if (r.length === 2) return r[1].slice(0, -1);
    } catch (t) {
      sYo.diag.debug(`error reading machine id: ${t}`);
    }
  }
  Nje.getMachineId = aYo;
});