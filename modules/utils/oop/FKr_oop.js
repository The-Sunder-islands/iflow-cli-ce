/**
 * @module FKr
 * @category utils/oop
 * @label oop
 * @position 383 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (FKr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var FKr = T((TMe) => {
  "use strict";
  Object.defineProperty(TMe, "__esModule", { value: !0 });
  TMe.NodeTracerProvider = void 0;
  var ENo = FYr(),
    vNo = HSt(),
    Fge = (Zt(), bt(cr)),
    VSt = Ii();
  function CNo(t) {
    if (t !== null) {
      if (t === void 0) {
        let e = new ENo.AsyncLocalStorageContextManager();
        (e.enable(), Fge.context.setGlobalContextManager(e));
        return;
      }
      (t.enable(), Fge.context.setGlobalContextManager(t));
    }
  }
  function SNo(t) {
    if (t !== null) {
      if (t === void 0) {
        Fge.propagation.setGlobalPropagator(
          new VSt.CompositePropagator({
            propagators: [new VSt.W3CTraceContextPropagator(), new VSt.W3CBaggagePropagator()],
          }),
        );
        return;
      }
      Fge.propagation.setGlobalPropagator(t);
    }
  }
  var WSt = class extends vNo.BasicTracerProvider {
    constructor(e = {}) {
      super(e);
    }
    register(e = {}) {
      (Fge.trace.setGlobalTracerProvider(this), CNo(e.contextManager), SNo(e.propagator));
    }
  };
  TMe.NodeTracerProvider = WSt;
});