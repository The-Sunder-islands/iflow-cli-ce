/**
 * @module ern
 * @category unknown
 * @label unknown
 * @position 524 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ern) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ern = T((d$e) => {
  "use strict";
  Object.defineProperty(d$e, "__esModule", { value: !0 });
  d$e.createServiceClientConstructor = void 0;
  var Uqo = Vbe();
  function $qo(t, e) {
    let r = {
      export: {
        path: t,
        requestStream: !1,
        responseStream: !1,
        requestSerialize: (n) => n,
        requestDeserialize: (n) => n,
        responseSerialize: (n) => n,
        responseDeserialize: (n) => n,
      },
    };
    return Uqo.makeGenericClientConstructor(r, e);
  }
  d$e.createServiceClientConstructor = $qo;
});