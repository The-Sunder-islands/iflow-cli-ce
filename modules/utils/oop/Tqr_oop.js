/**
 * @module Tqr
 * @category utils/oop
 * @label oop
 * @position 152 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Tqr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Tqr = T((NNe) => {
  "use strict";
  Object.defineProperty(NNe, "__esModule", { value: !0 });
  NNe._export = void 0;
  var xqr = (Zt(), bt(cr)),
    Wwo = tge();
  function zwo(t, e) {
    return new Promise((r) => {
      xqr.context.with((0, Wwo.suppressTracing)(xqr.context.active()), () => {
        t.export(e, (n) => {
          r(n);
        });
      });
    });
  }
  NNe._export = zwo;
});