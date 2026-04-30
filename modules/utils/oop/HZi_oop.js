/**
 * @module HZi
 * @category utils/oop
 * @label oop
 * @position 1926 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (HZi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var HZi = T((Zbt) => {
  "use strict";
  Object.defineProperty(Zbt, "__esModule", { value: !0 });
  Zbt.envReplace = void 0;
  var fpu = /(?<!\\)(\\*)\$\{([^${}]+)\}/g;
  function ppu(t, e) {
    return t.replace(fpu, hpu.bind(null, e));
  }
  Zbt.envReplace = ppu;
  function hpu(t, e, r, n) {
    if (r.length % 2) return e.slice((r.length + 1) / 2);
    let o = bpu(t, n);
    if (o === void 0) throw new Error(`Failed to replace env in config: ${e}`);
    return `${r.slice(r.length / 2)}${o}`;
  }
  var gpu = /([^:-]+)(:?)-(.+)/;
  function bpu(t, e) {
    let r = e.match(gpu);
    if (!r) return t[e];
    let [, n, o, s] = r;
    return Object.prototype.hasOwnProperty.call(t, n) ? (!t[n] && o ? s : t[n]) : s;
  }
});