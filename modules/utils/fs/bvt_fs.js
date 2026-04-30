/**
 * @module bvt
 * @category utils/fs
 * @label fs
 * @position 142 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (bvt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var bvt = T((CNe) => {
  "use strict";
  Object.defineProperty(CNe, "__esModule", { value: !0 });
  CNe.TraceState = void 0;
  var rqr = tqr(),
    nqr = 32,
    hwo = 512,
    iqr = ",",
    oqr = "=",
    gvt = class t {
      _internalState = new Map();
      constructor(e) {
        e && this._parse(e);
      }
      set(e, r) {
        let n = this._clone();
        return (n._internalState.has(e) && n._internalState.delete(e), n._internalState.set(e, r), n);
      }
      unset(e) {
        let r = this._clone();
        return (r._internalState.delete(e), r);
      }
      get(e) {
        return this._internalState.get(e);
      }
      serialize() {
        return this._keys()
          .reduce((e, r) => (e.push(r + oqr + this.get(r)), e), [])
          .join(iqr);
      }
      _parse(e) {
        e.length > hwo ||
          ((this._internalState = e
            .split(iqr)
            .reverse()
            .reduce((r, n) => {
              let o = n.trim(),
                s = o.indexOf(oqr);
              if (s !== -1) {
                let a = o.slice(0, s),
                  u = o.slice(s + 1, n.length);
                (0, rqr.validateKey)(a) && (0, rqr.validateValue)(u) && r.set(a, u);
              }
              return r;
            }, new Map())),
          this._internalState.size > nqr &&
            (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, nqr))));
      }
      _keys() {
        return Array.from(this._internalState.keys()).reverse();
      }
      _clone() {
        let e = new t();
        return ((e._internalState = new Map(this._internalState)), e);
      }
    };
  CNe.TraceState = gvt;
});