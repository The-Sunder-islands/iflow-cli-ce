/**
 * @module DRt
 * @category utils/cache
 * @label cache
 * @position 670 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (DRt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var DRt = T((pT) => {
  "use strict";
  Object.defineProperty(pT, "__esModule", { value: !0 });
  pT.defaultResource = pT.emptyResource = pT.resourceFromDetectedResource = pT.resourceFromAttributes = void 0;
  var gAe = (Zt(), bt(cr)),
    xRt = a4(),
    Wq = ($1(), bt(Ih)),
    $Jo = wRt(),
    hAe = lsn(),
    kQe = class t {
      _rawAttributes;
      _asyncAttributesPending = !1;
      _schemaUrl;
      _memoizedAttributes;
      static FromAttributeList(e, r) {
        let n = new t({}, r);
        return (
          (n._rawAttributes = msn(e)),
          (n._asyncAttributesPending = e.filter(([o, s]) => (0, hAe.isPromiseLike)(s)).length > 0),
          n
        );
      }
      constructor(e, r) {
        let n = e.attributes ?? {};
        ((this._rawAttributes = Object.entries(n).map(
          ([o, s]) => ((0, hAe.isPromiseLike)(s) && (this._asyncAttributesPending = !0), [o, s]),
        )),
          (this._rawAttributes = msn(this._rawAttributes)),
          (this._schemaUrl = qJo(r?.schemaUrl)));
      }
      get asyncAttributesPending() {
        return this._asyncAttributesPending;
      }
      async waitForAsyncAttributes() {
        if (this.asyncAttributesPending) {
          for (let e = 0; e < this._rawAttributes.length; e++) {
            let [r, n] = this._rawAttributes[e];
            this._rawAttributes[e] = [r, (0, hAe.isPromiseLike)(n) ? await n : n];
          }
          this._asyncAttributesPending = !1;
        }
      }
      get attributes() {
        if (
          (this.asyncAttributesPending &&
            gAe.diag.error("Accessing resource attributes before async attributes settled"),
          this._memoizedAttributes)
        )
          return this._memoizedAttributes;
        let e = {};
        for (let [r, n] of this._rawAttributes) {
          if ((0, hAe.isPromiseLike)(n)) {
            gAe.diag.debug(`Unsettled resource attribute ${r} skipped`);
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
        let r = HJo(this, e),
          n = r ? { schemaUrl: r } : void 0;
        return t.FromAttributeList([...e.getRawAttributes(), ...this.getRawAttributes()], n);
      }
    };
  function TRt(t, e) {
    return kQe.FromAttributeList(Object.entries(t), e);
  }
  pT.resourceFromAttributes = TRt;
  function jJo(t, e) {
    return new kQe(t, e);
  }
  pT.resourceFromDetectedResource = jJo;
  function QJo() {
    return TRt({});
  }
  pT.emptyResource = QJo;
  function GJo() {
    return TRt({
      [Wq.ATTR_SERVICE_NAME]: (0, $Jo.defaultServiceName)(),
      [Wq.ATTR_TELEMETRY_SDK_LANGUAGE]: xRt.SDK_INFO[Wq.ATTR_TELEMETRY_SDK_LANGUAGE],
      [Wq.ATTR_TELEMETRY_SDK_NAME]: xRt.SDK_INFO[Wq.ATTR_TELEMETRY_SDK_NAME],
      [Wq.ATTR_TELEMETRY_SDK_VERSION]: xRt.SDK_INFO[Wq.ATTR_TELEMETRY_SDK_VERSION],
    });
  }
  pT.defaultResource = GJo;
  function msn(t) {
    return t.map(([e, r]) =>
      (0, hAe.isPromiseLike)(r)
        ? [
            e,
            r.catch((n) => {
              gAe.diag.debug("promise rejection for resource attribute: %s - %s", e, n);
            }),
          ]
        : [e, r],
    );
  }
  function qJo(t) {
    if (typeof t == "string" || t === void 0) return t;
    gAe.diag.warn("Schema URL must be string or undefined, got %s. Schema URL will be ignored.", t);
  }
  function HJo(t, e) {
    let r = t?.schemaUrl,
      n = e?.schemaUrl,
      o = r === void 0 || r === "",
      s = n === void 0 || n === "";
    if (o) return n;
    if (s || r === n) return r;
    gAe.diag.warn(
      'Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.',
      r,
      n,
    );
  }
});