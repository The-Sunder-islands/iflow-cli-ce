/**
 * @module Uin
 * @category unknown
 * @label unknown
 * @position 615 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Uin) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Uin = T(($je) => {
  "use strict";
  Object.defineProperty($je, "__esModule", { value: !0 });
  $je.osDetector = void 0;
  var Min = uAe(),
    Fin = Ae("os"),
    wYo = H7t(),
    z7t = class {
      detect(e) {
        return {
          attributes: {
            [Min.ATTR_OS_TYPE]: (0, wYo.normalizeType)((0, Fin.platform)()),
            [Min.ATTR_OS_VERSION]: (0, Fin.release)(),
          },
        };
      }
    };
  $je.osDetector = new z7t();
});
var $in = T((jje) => {
  "use strict";
  Object.defineProperty(jje, "__esModule", { value: !0 });
  jje.processDetector = void 0;
  var xYo = (Zt(), bt(cr)),
    jR = uAe(),
    TYo = Ae("os"),
    Y7t = class {
      detect(e) {
        let r = {
          [jR.ATTR_PROCESS_PID]: process.pid,
          [jR.ATTR_PROCESS_EXECUTABLE_NAME]: process.title,
          [jR.ATTR_PROCESS_EXECUTABLE_PATH]: process.execPath,
          [jR.ATTR_PROCESS_COMMAND_ARGS]: [process.argv[0], ...process.execArgv, ...process.argv.slice(1)],
          [jR.ATTR_PROCESS_RUNTIME_VERSION]: process.versions.node,
          [jR.ATTR_PROCESS_RUNTIME_NAME]: "nodejs",
          [jR.ATTR_PROCESS_RUNTIME_DESCRIPTION]: "Node.js",
        };
        process.argv.length > 1 && (r[jR.ATTR_PROCESS_COMMAND] = process.argv[1]);
        try {
          let n = TYo.userInfo();
          r[jR.ATTR_PROCESS_OWNER] = n.username;
        } catch (n) {
          xYo.diag.debug(`error obtaining process owner: ${n}`);
        }
        return { attributes: r };
      }
    };
  jje.processDetector = new Y7t();
});