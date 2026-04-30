/**
 * @module w7r
 * @category browser/playwright
 * @label playwright
 * @position 51 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (w7r) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var w7r = T((V5, mke) => {
  V5.formatArgs = rfo;
  V5.save = nfo;
  V5.load = ifo;
  V5.useColors = tfo;
  V5.storage = ofo();
  V5.destroy = (() => {
    let t = !1;
    return () => {
      t ||
        ((t = !0),
        console.warn(
          "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
        ));
    };
  })();
  V5.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33",
  ];
  function tfo() {
    if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
      return !0;
    if (
      typeof navigator < "u" &&
      navigator.userAgent &&
      navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
    )
      return !1;
    let t;
    return (
      (typeof document < "u" &&
        document.documentElement &&
        document.documentElement.style &&
        document.documentElement.style.WebkitAppearance) ||
      (typeof window < "u" &&
        window.console &&
        (window.console.firebug || (window.console.exception && window.console.table))) ||
      (typeof navigator < "u" &&
        navigator.userAgent &&
        (t = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) &&
        parseInt(t[1], 10) >= 31) ||
      (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
    );
  }
  function rfo(t) {
    if (
      ((t[0] =
        (this.useColors ? "%c" : "") +
        this.namespace +
        (this.useColors ? " %c" : " ") +
        t[0] +
        (this.useColors ? "%c " : " ") +
        "+" +
        mke.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    let e = "color: " + this.color;
    t.splice(1, 0, e, "color: inherit");
    let r = 0,
      n = 0;
    (t[0].replace(/%[a-zA-Z%]/g, (o) => {
      o !== "%%" && (r++, o === "%c" && (n = r));
    }),
      t.splice(n, 0, e));
  }
  V5.log = console.debug || console.log || (() => {});
  function nfo(t) {
    try {
      t ? V5.storage.setItem("debug", t) : V5.storage.removeItem("debug");
    } catch {}
  }
  function ifo() {
    let t;
    try {
      t = V5.storage.getItem("debug") || V5.storage.getItem("DEBUG");
    } catch {}
    return (!t && typeof process < "u" && "env" in process && (t = process.env.DEBUG), t);
  }
  function ofo() {
    try {
      return localStorage;
    } catch {}
  }
  mke.exports = F6t()(V5);
  var { formatters: sfo } = mke.exports;
  sfo.j = function (t) {
    try {
      return JSON.stringify(t);
    } catch (e) {
      return "[UnexpectedJSONParseError]: " + e.message;
    }
  };
});