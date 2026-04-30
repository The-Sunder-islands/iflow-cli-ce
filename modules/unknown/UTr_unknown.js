/**
 * @module UTr
 * @category unknown
 * @label unknown
 * @position 29 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (UTr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var UTr = T((K_u, BRe) => {
  "use strict";
  var jmo = MTr(),
    PRe = new WeakMap(),
    FTr = (t, e = {}) => {
      if (typeof t != "function") throw new TypeError("Expected a function");
      let r,
        n = 0,
        o = t.displayName || t.name || "<anonymous>",
        s = function (...a) {
          if ((PRe.set(s, ++n), n === 1)) ((r = t.apply(this, a)), (t = null));
          else if (e.throw === !0) throw new Error(`Function \`${o}\` can only be called once`);
          return r;
        };
      return (jmo(s, t), PRe.set(s, n), s);
    };
  BRe.exports = FTr;
  BRe.exports.default = FTr;
  BRe.exports.callCount = (t) => {
    if (!PRe.has(t)) throw new Error(`The given function \`${t.name}\` is not wrapped by the \`onetime\` package`);
    return PRe.get(t);
  };
});
var $Tr = T((J_u, LRe) => {
  LRe.exports = ["SIGABRT", "SIGALRM", "SIGHUP", "SIGINT", "SIGTERM"];
  process.platform !== "win32" &&
    LRe.exports.push("SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");
  process.platform === "linux" && LRe.exports.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT", "SIGUNUSED");
});