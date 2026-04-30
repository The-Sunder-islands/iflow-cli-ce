/**
 * @module lJr
 * @category utils/oop
 * @label oop
 * @position 405 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lJr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lJr = T((_re) => {
  "use strict";
  Object.defineProperty(_re, "__esModule", { value: !0 });
  _re.disableInstrumentations = _re.enableInstrumentations = void 0;
  function sPo(t, e, r, n) {
    for (let o = 0, s = t.length; o < s; o++) {
      let a = t[o];
      (e && a.setTracerProvider(e),
        r && a.setMeterProvider(r),
        n && a.setLoggerProvider && a.setLoggerProvider(n),
        a.getConfig().enabled || a.enable());
    }
  }
  _re.enableInstrumentations = sPo;
  function aPo(t) {
    t.forEach((e) => e.disable());
  }
  _re.disableInstrumentations = aPo;
});