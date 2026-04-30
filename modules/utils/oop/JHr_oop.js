/**
 * @module JHr
 * @category utils/oop
 * @label oop
 * @position 187 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (JHr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var JHr = T((oPe) => {
  "use strict";
  Object.defineProperty(oPe, "__esModule", { value: !0 });
  oPe.getMapping = void 0;
  var nTo = HHr(),
    iTo = zHr(),
    oTo = rPe(),
    YHr = -10,
    KHr = 20,
    sTo = Array.from({ length: 31 }, (t, e) =>
      e > 10 ? new iTo.LogarithmMapping(e - 10) : new nTo.ExponentMapping(e - 10),
    );
  function aTo(t) {
    if (t > KHr || t < YHr) throw new oTo.MappingError(`expected scale >= ${YHr} && <= ${KHr}, got: ${t}`);
    return sTo[t + 10];
  }
  oPe.getMapping = aTo;
});