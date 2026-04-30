/**
 * @module nle
 * @category app/core
 * @label iflow-core
 * @position 1487 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (nle) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var nle = T((xvc, _Kn) => {
  "use strict";
  var asa = Ove(),
    usa = yKn(),
    { ClientDestroyedError: Csr, ClientClosedError: csa, InvalidArgumentError: Bit } = da(),
    { kDestroy: lsa, kClose: msa, kClosed: Nve, kDestroyed: rle, kDispatch: dsa } = n0(),
    dU = Symbol("onDestroyed"),
    Fz = Symbol("onClosed"),
    Ssr = class extends asa {
      [rle] = !1;
      [dU] = null;
      [Nve] = !1;
      [Fz] = null;
      get destroyed() {
        return this[rle];
      }
      get closed() {
        return this[Nve];
      }
      close(e) {
        if (e === void 0)
          return new Promise((n, o) => {
            this.close((s, a) => (s ? o(s) : n(a)));
          });
        if (typeof e != "function") throw new Bit("invalid callback");
        if (this[rle]) {
          let n = new Csr();
          queueMicrotask(() => e(n, null));
          return;
        }
        if (this[Nve]) {
          this[Fz] ? this[Fz].push(e) : queueMicrotask(() => e(null, null));
          return;
        }
        ((this[Nve] = !0), (this[Fz] ??= []), this[Fz].push(e));
        let r = () => {
          let n = this[Fz];
          this[Fz] = null;
          for (let o = 0; o < n.length; o++) n[o](null, null);
        };
        this[msa]()
          .then(() => this.destroy())
          .then(() => queueMicrotask(r));
      }
      destroy(e, r) {
        if ((typeof e == "function" && ((r = e), (e = null)), r === void 0))
          return new Promise((o, s) => {
            this.destroy(e, (a, u) => (a ? s(a) : o(u)));
          });
        if (typeof r != "function") throw new Bit("invalid callback");
        if (this[rle]) {
          this[dU] ? this[dU].push(r) : queueMicrotask(() => r(null, null));
          return;
        }
        (e || (e = new Csr()), (this[rle] = !0), (this[dU] ??= []), this[dU].push(r));
        let n = () => {
          let o = this[dU];
          this[dU] = null;
          for (let s = 0; s < o.length; s++) o[s](null, null);
        };
        this[lsa](e).then(() => queueMicrotask(n));
      }
      dispatch(e, r) {
        if (!r || typeof r != "object") throw new Bit("handler must be an object");
        r = usa.unwrap(r);
        try {
          if (!e || typeof e != "object") throw new Bit("opts must be an object.");
          if (this[rle] || this[dU]) throw new Csr();
          if (this[Nve]) throw new csa();
          return this[dsa](e, r);
        } catch (n) {
          if (typeof r.onError != "function") throw n;
          return (r.onError(n), !1);
        }
      }
    };
  _Kn.exports = Ssr;
});