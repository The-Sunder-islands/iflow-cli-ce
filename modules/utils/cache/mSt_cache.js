/**
 * @module mSt
 * @category utils/cache
 * @label cache
 * @position 340 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mSt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mSt = T((Mx) => {
  "use strict";
  Object.defineProperty(Mx, "__esModule", { value: !0 });
  Mx.defaultResource = Mx.emptyResource = Mx.resourceFromDetectedResource = Mx.resourceFromAttributes = void 0;
  var Nge = (Zt(), bt(cr)),
    cSt = Ii(),
    rq = ($1(), bt(Ih)),
    Jko = uSt(),
    Oge = jYr(),
    ULe = class t {
      _rawAttributes;
      _asyncAttributesPending = !1;
      _schemaUrl;
      _memoizedAttributes;
      static FromAttributeList(e, r) {
        let n = new t({}, r);
        return (
          (n._rawAttributes = QYr(e)),
          (n._asyncAttributesPending = e.filter(([o, s]) => (0, Oge.isPromiseLike)(s)).length > 0),
          n
        );
      }
      constructor(e, r) {
        let n = e.attributes ?? {};
        ((this._rawAttributes = Object.entries(n).map(
          ([o, s]) => ((0, Oge.isPromiseLike)(s) && (this._asyncAttributesPending = !0), [o, s]),
        )),
          (this._rawAttributes = QYr(this._rawAttributes)),
          (this._schemaUrl = tOo(r?.schemaUrl)));
      }
      get asyncAttributesPending() {
        return this._asyncAttributesPending;
      }
      async waitForAsyncAttributes() {
        if (this.asyncAttributesPending) {
          for (let e = 0; e < this._rawAttributes.length; e++) {
            let [r, n] = this._rawAttributes[e];
            this._rawAttributes[e] = [r, (0, Oge.isPromiseLike)(n) ? await n : n];
          }
          this._asyncAttributesPending = !1;
        }
      }
      get attributes() {
        if (
          (this.asyncAttributesPending &&
            Nge.diag.error("Accessing resource attributes before async attributes settled"),
          this._memoizedAttributes)
        )
          return this._memoizedAttributes;
        let e = {};
        for (let [r, n] of this._rawAttributes) {
          if ((0, Oge.isPromiseLike)(n)) {
            Nge.diag.debug(`Unsettled resource attribute ${r} skipped`);
            continue;
          }
          n != null && (e[r] ??= n);
        }
        return (this._asyncAttributesPending || (this._memoizedAttributes = e), e);
      }
      getRawAttributes() {
        return this._rawAttributes;
      }
      get schemaUrl() {
        return this._schemaUrl;
      }
      merge(e) {
        if (e == null) return this;
        let r = rOo(this, e),
          n = r ? { schemaUrl: r } : void 0;
        return t.FromAttributeList([...e.getRawAttributes(), ...this.getRawAttributes()], n);
      }
    };
  function lSt(t, e) {
    return ULe.FromAttributeList(Object.entries(t), e);
  }
  Mx.resourceFromAttributes = lSt;
  function Xko(t, e) {
    return new ULe(t, e);
  }
  Mx.resourceFromDetectedResource = Xko;
  function Zko() {
    return lSt({});
  }
  Mx.emptyResource = Zko;
  function eOo() {
    return lSt({
      [rq.ATTR_SERVICE_NAME]: (0, Jko.defaultServiceName)(),
      [rq.ATTR_TELEMETRY_SDK_LANGUAGE]: cSt.SDK_INFO[rq.ATTR_TELEMETRY_SDK_LANGUAGE],
      [rq.ATTR_TELEMETRY_SDK_NAME]: cSt.SDK_INFO[rq.ATTR_TELEMETRY_SDK_NAME],
      [rq.ATTR_TELEMETRY_SDK_VERSION]: cSt.SDK_INFO[rq.ATTR_TELEMETRY_SDK_VERSION],
    });
  }
  Mx.defaultResource = eOo;
  function QYr(t) {
    return t.map(([e, r]) =>
      (0, Oge.isPromiseLike)(r)
        ? [
            e,
            r.catch((n) => {
              Nge.diag.debug("promise rejection for resource attribute: %s - %s", e, n);
            }),
          ]
        : [e, r],
    );
  }
  function tOo(t) {
    if (typeof t == "string" || t === void 0) return t;
    Nge.diag.warn("Schema URL must be string or undefined, got %s. Schema URL will be ignored.", t);
  }
  function rOo(t, e) {
    let r = t?.schemaUrl,
      n = e?.schemaUrl,
      o = r === void 0 || r === "",
      s = n === void 0 || n === "";
    if (o) return n;
    if (s || r === n) return r;
    Nge.diag.warn(
      'Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.',
      r,
      n,
    );
  }
});