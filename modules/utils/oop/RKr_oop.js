/**
 * @module RKr
 * @category utils/oop
 * @label oop
 * @position 376 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (RKr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var RKr = T((EMe) => {
  "use strict";
  Object.defineProperty(EMe, "__esModule", { value: !0 });
  EMe.MultiSpanProcessor = void 0;
  var nNo = Ii(),
    FSt = class {
      _spanProcessors;
      constructor(e) {
        this._spanProcessors = e;
      }
      forceFlush() {
        let e = [];
        for (let r of this._spanProcessors) e.push(r.forceFlush());
        return new Promise((r) => {
          Promise.all(e)
            .then(() => {
              r();
            })
            .catch((n) => {
              ((0, nNo.globalErrorHandler)(n || new Error("MultiSpanProcessor: forceFlush failed")), r());
            });
        });
      }
      onStart(e, r) {
        for (let n of this._spanProcessors) n.onStart(e, r);
      }
      onEnd(e) {
        for (let r of this._spanProcessors) r.onEnd(e);
      }
      shutdown() {
        let e = [];
        for (let r of this._spanProcessors) e.push(r.shutdown());
        return new Promise((r, n) => {
          Promise.all(e).then(() => {
            r();
          }, n);
        });
      }
    };
  EMe.MultiSpanProcessor = FSt;
});