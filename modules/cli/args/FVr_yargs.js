/**
 * @module FVr
 * @category cli/args
 * @label yargs
 * @position 217 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (FVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var FVr = T((BPe) => {
  "use strict";
  Object.defineProperty(BPe, "__esModule", { value: !0 });
  BPe.processDetector = void 0;
  var cDo = (Zt(), bt(cr)),
    SR = bge(),
    lDo = Ae("os"),
    SCt = class {
      detect(e) {
        let r = {
          [SR.ATTR_PROCESS_PID]: process.pid,
          [SR.ATTR_PROCESS_EXECUTABLE_NAME]: process.title,
          [SR.ATTR_PROCESS_EXECUTABLE_PATH]: process.execPath,
          [SR.ATTR_PROCESS_COMMAND_ARGS]: [process.argv[0], ...process.execArgv, ...process.argv.slice(1)],
          [SR.ATTR_PROCESS_RUNTIME_VERSION]: process.versions.node,
          [SR.ATTR_PROCESS_RUNTIME_NAME]: "nodejs",
          [SR.ATTR_PROCESS_RUNTIME_DESCRIPTION]: "Node.js",
        };
        process.argv.length > 1 && (r[SR.ATTR_PROCESS_COMMAND] = process.argv[1]);
        try {
          let n = lDo.userInfo();
          r[SR.ATTR_PROCESS_OWNER] = n.username;
        } catch (n) {
          cDo.diag.debug(`error obtaining process owner: ${n}`);
        }
        return { attributes: r };
      }
    };
  BPe.processDetector = new SCt();
});