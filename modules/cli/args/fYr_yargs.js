/**
 * @module fYr
 * @category cli/args
 * @label yargs
 * @position 311 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (fYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var fYr = T((pLe) => {
  "use strict";
  Object.defineProperty(pLe, "__esModule", { value: !0 });
  pLe.processDetector = void 0;
  var nko = (Zt(), bt(cr)),
    xR = Rge(),
    iko = Ae("os"),
    Q4t = class {
      detect(e) {
        let r = {
          [xR.ATTR_PROCESS_PID]: process.pid,
          [xR.ATTR_PROCESS_EXECUTABLE_NAME]: process.title,
          [xR.ATTR_PROCESS_EXECUTABLE_PATH]: process.execPath,
          [xR.ATTR_PROCESS_COMMAND_ARGS]: [process.argv[0], ...process.execArgv, ...process.argv.slice(1)],
          [xR.ATTR_PROCESS_RUNTIME_VERSION]: process.versions.node,
          [xR.ATTR_PROCESS_RUNTIME_NAME]: "nodejs",
          [xR.ATTR_PROCESS_RUNTIME_DESCRIPTION]: "Node.js",
        };
        process.argv.length > 1 && (r[xR.ATTR_PROCESS_COMMAND] = process.argv[1]);
        try {
          let n = iko.userInfo();
          r[xR.ATTR_PROCESS_OWNER] = n.username;
        } catch (n) {
          nko.diag.debug(`error obtaining process owner: ${n}`);
        }
        return { attributes: r };
      }
    };
  pLe.processDetector = new Q4t();
});