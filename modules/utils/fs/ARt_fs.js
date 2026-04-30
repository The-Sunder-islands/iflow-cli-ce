/**
 * @module ARt
 * @category utils/fs
 * @label fs
 * @position 654 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ARt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ARt = T((hQe) => {
  "use strict";
  Object.defineProperty(hQe, "__esModule", { value: !0 });
  hQe.TraceState = void 0;
  var Oon = kon(),
    Non = 32,
    GKo = 512,
    Pon = ",",
    Bon = "=",
    bRt = class t {
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
          .reduce((e, r) => (e.push(r + Bon + this.get(r)), e), [])
          .join(Pon);
      }
      _parse(e) {
        e.length > GKo ||
          ((this._internalState = e
            .split(Pon)
            .reverse()
            .reduce((r, n) => {
              let o = n.trim(),
                s = o.indexOf(Bon);
              if (s !== -1) {
                let a = o.slice(0, s),
                  u = o.slice(s + 1, n.length);
                (0, Oon.validateKey)(a) && (0, Oon.validateValue)(u) && r.set(a, u);
              }
              return r;
            }, new Map())),
          this._internalState.size > Non &&
            (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, Non))));
      }
      _keys() {
        return Array.from(this._internalState.keys()).reverse();
      }
      _clone() {
        let e = new t();
        return ((e._internalState = new Map(this._internalState)), e);
      }
    };
  hQe.TraceState = bRt;
});