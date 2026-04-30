/**
 * @module Isn
 * @category cli/args
 * @label yargs
 * @position 684 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Isn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Isn = T((qQe) => {
  "use strict";
  Object.defineProperty(qQe, "__esModule", { value: !0 });
  qQe.processDetector = void 0;
  var AXo = (Zt(), bt(cr)),
    GR = bAe(),
    yXo = Ae("os"),
    BRt = class {
      detect(e) {
        let r = {
          [GR.ATTR_PROCESS_PID]: process.pid,
          [GR.ATTR_PROCESS_EXECUTABLE_NAME]: process.title,
          [GR.ATTR_PROCESS_EXECUTABLE_PATH]: process.execPath,
          [GR.ATTR_PROCESS_COMMAND_ARGS]: [process.argv[0], ...process.execArgv, ...process.argv.slice(1)],
          [GR.ATTR_PROCESS_RUNTIME_VERSION]: process.versions.node,
          [GR.ATTR_PROCESS_RUNTIME_NAME]: "nodejs",
          [GR.ATTR_PROCESS_RUNTIME_DESCRIPTION]: "Node.js",
        };
        process.argv.length > 1 && (r[GR.ATTR_PROCESS_COMMAND] = process.argv[1]);
        try {
          let n = yXo.userInfo();
          r[GR.ATTR_PROCESS_OWNER] = n.username;
        } catch (n) {
          AXo.diag.debug(`error obtaining process owner: ${n}`);
        }
        return { attributes: r };
      }
    };
  qQe.processDetector = new BRt();
});