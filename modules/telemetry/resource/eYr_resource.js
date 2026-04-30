/**
 * @module eYr
 * @category telemetry/resource
 * @label resource
 * @position 302 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (eYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var eYr = T((sLe) => {
  "use strict";
  Object.defineProperty(sLe, "__esModule", { value: !0 });
  sLe.getMachineId = void 0;
  var LRo = oLe(),
    MRo = (Zt(), bt(cr));
  async function FRo() {
    try {
      let e = (await (0, LRo.execAsync)('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout
        .split(
          `
`,
        )
        .find((n) => n.includes("IOPlatformUUID"));
      if (!e) return;
      let r = e.split('" = "');
      if (r.length === 2) return r[1].slice(0, -1);
    } catch (t) {
      MRo.diag.debug(`error reading machine id: ${t}`);
    }
  }
  sLe.getMachineId = FRo;
});