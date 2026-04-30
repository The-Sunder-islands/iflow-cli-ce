/**
 * @module wVr
 * @category telemetry/resource
 * @label resource
 * @position 208 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wVr = T((TPe) => {
  "use strict";
  Object.defineProperty(TPe, "__esModule", { value: !0 });
  TPe.getMachineId = void 0;
  var QTo = xPe(),
    GTo = (Zt(), bt(cr));
  async function qTo() {
    try {
      let e = (await (0, QTo.execAsync)('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout
        .split(
          `
`,
        )
        .find((n) => n.includes("IOPlatformUUID"));
      if (!e) return;
      let r = e.split('" = "');
      if (r.length === 2) return r[1].slice(0, -1);
    } catch (t) {
      GTo.diag.debug(`error reading machine id: ${t}`);
    }
  }
  TPe.getMachineId = qTo;
});