/**
 * @module sHi
 * @category ui/terminal
 * @label terminal
 * @position 1898 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (sHi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var sHi = T((Vfl, oHi) => {
  "use strict";
  var ilu = Ae("os"),
    iHi = Ae("tty"),
    jv = nHi(),
    { env: I3 } = process,
    Tj;
  jv("no-color") || jv("no-colors") || jv("color=false") || jv("color=never")
    ? (Tj = 0)
    : (jv("color") || jv("colors") || jv("color=true") || jv("color=always")) && (Tj = 1);
  "FORCE_COLOR" in I3 &&
    (I3.FORCE_COLOR === "true"
      ? (Tj = 1)
      : I3.FORCE_COLOR === "false"
        ? (Tj = 0)
        : (Tj = I3.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(I3.FORCE_COLOR, 10), 3)));
  function uyr(t) {
    return t === 0 ? !1 : { level: t, hasBasic: !0, has256: t >= 2, has16m: t >= 3 };
  }
  function cyr(t, e) {
    if (Tj === 0) return 0;
    if (jv("color=16m") || jv("color=full") || jv("color=truecolor")) return 3;
    if (jv("color=256")) return 2;
    if (t && !e && Tj === void 0) return 0;
    let r = Tj || 0;
    if (I3.TERM === "dumb") return r;
    if (process.platform === "win32") {
      let n = ilu.release().split(".");
      return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? (Number(n[2]) >= 14931 ? 3 : 2) : 1;
    }
    if ("CI" in I3)
      return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n) => n in I3) ||
        I3.CI_NAME === "codeship"
        ? 1
        : r;
    if ("TEAMCITY_VERSION" in I3) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(I3.TEAMCITY_VERSION) ? 1 : 0;
    if (I3.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in I3) {
      let n = parseInt((I3.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (I3.TERM_PROGRAM) {
        case "iTerm.app":
          return n >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    return /-256(color)?$/i.test(I3.TERM)
      ? 2
      : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(I3.TERM) || "COLORTERM" in I3
        ? 1
        : r;
  }
  function olu(t) {
    let e = cyr(t, t && t.isTTY);
    return uyr(e);
  }
  oHi.exports = { supportsColor: olu, stdout: uyr(cyr(!0, iHi.isatty(1))), stderr: uyr(cyr(!0, iHi.isatty(2))) };
});