/**
 * @module sKr
 * @category cli/args
 * @label yargs
 * @position 354 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (sKr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var sKr = T((XLe) => {
  "use strict";
  Object.defineProperty(XLe, "__esModule", { value: !0 });
  XLe.processDetector = void 0;
  var IOo = (Zt(), bt(cr)),
    TR = Pge(),
    ROo = Ae("os"),
    ASt = class {
      detect(e) {
        let r = {
          [TR.ATTR_PROCESS_PID]: process.pid,
          [TR.ATTR_PROCESS_EXECUTABLE_NAME]: process.title,
          [TR.ATTR_PROCESS_EXECUTABLE_PATH]: process.execPath,
          [TR.ATTR_PROCESS_COMMAND_ARGS]: [process.argv[0], ...process.execArgv, ...process.argv.slice(1)],
          [TR.ATTR_PROCESS_RUNTIME_VERSION]: process.versions.node,
          [TR.ATTR_PROCESS_RUNTIME_NAME]: "nodejs",
          [TR.ATTR_PROCESS_RUNTIME_DESCRIPTION]: "Node.js",
        };
        process.argv.length > 1 && (r[TR.ATTR_PROCESS_COMMAND] = process.argv[1]);
        try {
          let n = ROo.userInfo();
          r[TR.ATTR_PROCESS_OWNER] = n.username;
        } catch (n) {
          IOo.diag.debug(`error obtaining process owner: ${n}`);
        }
        return { attributes: r };
      }
    };
  XLe.processDetector = new ASt();
});