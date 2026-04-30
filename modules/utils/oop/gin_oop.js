/**
 * @module gin
 * @category utils/oop
 * @label oop
 * @position 598 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (gin) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var gin = T((Cje) => {
  "use strict";
  Object.defineProperty(Cje, "__esModule", { value: !0 });
  Cje._export = void 0;
  var hin = (Zt(), bt(cr)),
    kzo = rAe();
  function Ozo(t, e) {
    return new Promise((r) => {
      hin.context.with((0, kzo.suppressTracing)(hin.context.active()), () => {
        t.export(e, (n) => {
          r(n);
        });
      });
    });
  }
  Cje._export = Ozo;
});