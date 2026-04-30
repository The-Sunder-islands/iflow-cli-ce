/**
 * @module WYr
 * @category telemetry/resource
 * @label resource
 * @position 345 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (WYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var WYr = T((qLe) => {
  "use strict";
  Object.defineProperty(qLe, "__esModule", { value: !0 });
  qLe.getMachineId = void 0;
  var uOo = GLe(),
    cOo = (Zt(), bt(cr));
  async function lOo() {
    try {
      let e = (await (0, uOo.execAsync)('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout
        .split(
          `
`,
        )
        .find((n) => n.includes("IOPlatformUUID"));
      if (!e) return;
      let r = e.split('" = "');
      if (r.length === 2) return r[1].slice(0, -1);
    } catch (t) {
      cOo.diag.debug(`error reading machine id: ${t}`);
    }
  }
  qLe.getMachineId = lOo;
});