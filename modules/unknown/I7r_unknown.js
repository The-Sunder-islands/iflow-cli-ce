/**
 * @module I7r
 * @category unknown
 * @label unknown
 * @position 53 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (I7r) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var I7r = T((A4u, D7r) => {
  "use strict";
  var wC = T7r(),
    afo = function (t) {
      return t === 0 ? !1 : { level: t, hasBasic: !0, has256: t >= 2, has16m: t >= 3 };
    },
    U6t = (function () {
      return wC("no-color") || wC("no-colors") || wC("color=false")
        ? 0
        : wC("color=16m") || wC("color=full") || wC("color=truecolor")
          ? 3
          : wC("color=256")
            ? 2
            : wC("color") || wC("colors") || wC("color=true") || wC("color=always")
              ? 1
              : process.stdout && !process.stdout.isTTY
                ? 0
                : process.platform === "win32"
                  ? 1
                  : "CI" in process.env
                    ? "TRAVIS" in process.env || process.env.CI === "Travis"
                      ? 1
                      : 0
                    : "TEAMCITY_VERSION" in process.env
                      ? process.env.TEAMCITY_VERSION.match(/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/) === null
                        ? 0
                        : 1
                      : /^(screen|xterm)-256(?:color)?/.test(process.env.TERM)
                        ? 2
                        : /^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM) ||
                            "COLORTERM" in process.env
                          ? 1
                          : (process.env.TERM === "dumb", 0);
    })();
  U6t === 0 && "FORCE_COLOR" in process.env && (U6t = 1);
  D7r.exports = process && afo(U6t);
});