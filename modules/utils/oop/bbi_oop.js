/**
 * @module bbi
 * @category utils/oop
 * @label oop
 * @position 1732 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (bbi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var bbi = T((Rhr) => {
  "use strict";
  Object.defineProperty(Rhr, "__esModule", { value: !0 });
  Rhr.splitStream = QDa;
  var hbi = Ae("stream"),
    jDa = pbi(),
    gbi = _$();
  async function QDa(t) {
    if ((0, gbi.isReadableStream)(t) || (0, gbi.isBlob)(t)) return (0, jDa.splitStream)(t);
    let e = new hbi.PassThrough(),
      r = new hbi.PassThrough();
    return (t.pipe(e), t.pipe(r), [e, r]);
  }
});