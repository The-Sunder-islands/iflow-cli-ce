/**
 * @module gsn
 * @category telemetry/resource
 * @label resource
 * @position 675 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (gsn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var gsn = T((LQe) => {
  "use strict";
  Object.defineProperty(LQe, "__esModule", { value: !0 });
  LQe.getMachineId = void 0;
  var JJo = BQe(),
    XJo = (Zt(), bt(cr));
  async function ZJo() {
    try {
      let e = (await (0, JJo.execAsync)('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout
        .split(
          `
`,
        )
        .find((n) => n.includes("IOPlatformUUID"));
      if (!e) return;
      let r = e.split('" = "');
      if (r.length === 2) return r[1].slice(0, -1);
    } catch (t) {
      XJo.diag.debug(`error reading machine id: ${t}`);
    }
  }
  LQe.getMachineId = ZJo;
});