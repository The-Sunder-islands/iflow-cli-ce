/**
 * @module rJr
 * @category utils/oop
 * @label oop
 * @position 398 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (rJr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var rJr = T((WMe) => {
  "use strict";
  Object.defineProperty(WMe, "__esModule", { value: !0 });
  WMe.MultiSpanProcessor = void 0;
  var QNo = Ii(),
    mwt = class {
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
              ((0, QNo.globalErrorHandler)(n || new Error("MultiSpanProcessor: forceFlush failed")), r());
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
  WMe.MultiSpanProcessor = mwt;
});