/**
 * @module fJr
 * @category utils/oop
 * @label oop
 * @position 406 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (fJr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var fJr = T((eFe) => {
  "use strict";
  Object.defineProperty(eFe, "__esModule", { value: !0 });
  eFe.registerInstrumentations = void 0;
  var mJr = (Zt(), bt(cr)),
    uPo = Xte(),
    dJr = lJr();
  function cPo(t) {
    let e = t.tracerProvider || mJr.trace.getTracerProvider(),
      r = t.meterProvider || mJr.metrics.getMeterProvider(),
      n = t.loggerProvider || uPo.logs.getLoggerProvider(),
      o = t.instrumentations?.flat() ?? [];
    return (
      (0, dJr.enableInstrumentations)(o, e, r, n),
      () => {
        (0, dJr.disableInstrumentations)(o);
      }
    );
  }
  eFe.registerInstrumentations = cPo;
});