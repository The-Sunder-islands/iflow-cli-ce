/**
 * @module wSr
 * @category unknown
 * @label unknown
 * @position 3 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wSr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wSr = T((q9u, Q7e) => {
  Q7e.exports = ["SIGABRT", "SIGALRM", "SIGHUP", "SIGINT", "SIGTERM"];
  process.platform !== "win32" &&
    Q7e.exports.push("SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");
  process.platform === "linux" && Q7e.exports.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT", "SIGUNUSED");
});