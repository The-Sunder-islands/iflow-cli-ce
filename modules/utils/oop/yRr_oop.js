/**
 * @module yRr
 * @category utils/oop
 * @label oop
 * @position 67 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yRr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var yRr = T((Ske) => {
  "use strict";
  Object.defineProperty(Ske, "__esModule", { value: !0 });
  Ske.Colours = void 0;
  var gb = class t {
    static isEnabled(e) {
      return e.isTTY && (typeof e.getColorDepth == "function" ? e.getColorDepth() > 2 : !0);
    }
    static refresh() {
      ((t.enabled = t.isEnabled(process.stderr)),
        this.enabled
          ? ((t.reset = "\x1B[0m"),
            (t.bright = "\x1B[1m"),
            (t.dim = "\x1B[2m"),
            (t.red = "\x1B[31m"),
            (t.green = "\x1B[32m"),
            (t.yellow = "\x1B[33m"),
            (t.blue = "\x1B[34m"),
            (t.magenta = "\x1B[35m"),
            (t.cyan = "\x1B[36m"),
            (t.white = "\x1B[37m"),
            (t.grey = "\x1B[90m"))
          : ((t.reset = ""),
            (t.bright = ""),
            (t.dim = ""),
            (t.red = ""),
            (t.green = ""),
            (t.yellow = ""),
            (t.blue = ""),
            (t.magenta = ""),
            (t.cyan = ""),
            (t.white = ""),
            (t.grey = "")));
    }
  };
  Ske.Colours = gb;
  gb.enabled = !1;
  gb.reset = "";
  gb.bright = "";
  gb.dim = "";
  gb.red = "";
  gb.green = "";
  gb.yellow = "";
  gb.blue = "";
  gb.magenta = "";
  gb.cyan = "";
  gb.white = "";
  gb.grey = "";
  gb.refresh();
});