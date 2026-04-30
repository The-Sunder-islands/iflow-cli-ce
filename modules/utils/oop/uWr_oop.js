/**
 * @module uWr
 * @category utils/oop
 * @label oop
 * @position 236 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (uWr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var uWr = T((JPe) => {
  "use strict";
  Object.defineProperty(JPe, "__esModule", { value: !0 });
  JPe.ObservableRegistry = void 0;
  var QDo = (Zt(), bt(cr)),
    sWr = jPe(),
    aWr = oWr(),
    Ege = qC(),
    YCt = class {
      _callbacks = [];
      _batchCallbacks = [];
      addCallback(e, r) {
        this._findCallback(e, r) >= 0 || this._callbacks.push({ callback: e, instrument: r });
      }
      removeCallback(e, r) {
        let n = this._findCallback(e, r);
        n < 0 || this._callbacks.splice(n, 1);
      }
      addBatchCallback(e, r) {
        let n = new Set(r.filter(sWr.isObservableInstrument));
        if (n.size === 0) {
          QDo.diag.error("BatchObservableCallback is not associated with valid instruments", r);
          return;
        }
        this._findBatchCallback(e, n) >= 0 || this._batchCallbacks.push({ callback: e, instruments: n });
      }
      removeBatchCallback(e, r) {
        let n = new Set(r.filter(sWr.isObservableInstrument)),
          o = this._findBatchCallback(e, n);
        o < 0 || this._batchCallbacks.splice(o, 1);
      }
      async observe(e, r) {
        let n = this._observeCallbacks(e, r),
          o = this._observeBatchCallbacks(e, r);
        return (await (0, Ege.PromiseAllSettled)([...n, ...o]))
          .filter(Ege.isPromiseAllSettledRejectionResult)
          .map((u) => u.reason);
      }
      _observeCallbacks(e, r) {
        return this._callbacks.map(async ({ callback: n, instrument: o }) => {
          let s = new aWr.ObservableResultImpl(o._descriptor.name, o._descriptor.valueType),
            a = Promise.resolve(n(s));
          (r != null && (a = (0, Ege.callWithTimeout)(a, r)),
            await a,
            o._metricStorages.forEach((u) => {
              u.record(s._buffer, e);
            }));
        });
      }
      _observeBatchCallbacks(e, r) {
        return this._batchCallbacks.map(async ({ callback: n, instruments: o }) => {
          let s = new aWr.BatchObservableResultImpl(),
            a = Promise.resolve(n(s));
          (r != null && (a = (0, Ege.callWithTimeout)(a, r)),
            await a,
            o.forEach((u) => {
              let c = s._buffer.get(u);
              c != null &&
                u._metricStorages.forEach((m) => {
                  m.record(c, e);
                });
            }));
        });
      }
      _findCallback(e, r) {
        return this._callbacks.findIndex((n) => n.callback === e && n.instrument === r);
      }
      _findBatchCallback(e, r) {
        return this._batchCallbacks.findIndex((n) => n.callback === e && (0, Ege.setEquals)(n.instruments, r));
      }
    };
  JPe.ObservableRegistry = YCt;
});