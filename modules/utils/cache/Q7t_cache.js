/**
 * @module Q7t
 * @category utils/cache
 * @label cache
 * @position 602 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Q7t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Q7t = T((uT) => {
  "use strict";
  Object.defineProperty(uT, "__esModule", { value: !0 });
  uT.defaultResource = uT.emptyResource = uT.resourceFromDetectedResource = uT.resourceFromAttributes = void 0;
  var aAe = (Zt(), bt(cr)),
    $7t = F7t(),
    $q = ($1(), bt(Ih)),
    zzo = U7t(),
    sAe = Ein(),
    Dje = class t {
      _rawAttributes;
      _asyncAttributesPending = !1;
      _schemaUrl;
      _memoizedAttributes;
      static FromAttributeList(e, r) {
        let n = new t({}, r);
        return (
          (n._rawAttributes = vin(e)),
          (n._asyncAttributesPending = e.filter(([o, s]) => (0, sAe.isPromiseLike)(s)).length > 0),
          n
        );
      }
      constructor(e, r) {
        let n = e.attributes ?? {};
        ((this._rawAttributes = Object.entries(n).map(
          ([o, s]) => ((0, sAe.isPromiseLike)(s) && (this._asyncAttributesPending = !0), [o, s]),
        )),
          (this._rawAttributes = vin(this._rawAttributes)),
          (this._schemaUrl = Xzo(r?.schemaUrl)));
      }
      get asyncAttributesPending() {
        return this._asyncAttributesPending;
      }
      async waitForAsyncAttributes() {
        if (this.asyncAttributesPending) {
          for (let e = 0; e < this._rawAttributes.length; e++) {
            let [r, n] = this._rawAttributes[e];
            this._rawAttributes[e] = [r, (0, sAe.isPromiseLike)(n) ? await n : n];
          }
          this._asyncAttributesPending = !1;
        }
      }
      get attributes() {
        if (
          (this.asyncAttributesPending &&
            aAe.diag.error("Accessing resource attributes before async attributes settled"),
          this._memoizedAttributes)
        )
          return this._memoizedAttributes;
        let e = {};
        for (let [r, n] of this._rawAttributes) {
          if ((0, sAe.isPromiseLike)(n)) {
            aAe.diag.debug(`Unsettled resource attribute ${r} skipped`);
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
        let r = Zzo(this, e),
          n = r ? { schemaUrl: r } : void 0;
        return t.FromAttributeList([...e.getRawAttributes(), ...this.getRawAttributes()], n);
      }
    };
  function j7t(t, e) {
    return Dje.FromAttributeList(Object.entries(t), e);
  }
  uT.resourceFromAttributes = j7t;
  function Yzo(t, e) {
    return new Dje(t, e);
  }
  uT.resourceFromDetectedResource = Yzo;
  function Kzo() {
    return j7t({});
  }
  uT.emptyResource = Kzo;
  function Jzo() {
    return j7t({
      [$q.ATTR_SERVICE_NAME]: (0, zzo.defaultServiceName)(),
      [$q.ATTR_TELEMETRY_SDK_LANGUAGE]: $7t.SDK_INFO[$q.ATTR_TELEMETRY_SDK_LANGUAGE],
      [$q.ATTR_TELEMETRY_SDK_NAME]: $7t.SDK_INFO[$q.ATTR_TELEMETRY_SDK_NAME],
      [$q.ATTR_TELEMETRY_SDK_VERSION]: $7t.SDK_INFO[$q.ATTR_TELEMETRY_SDK_VERSION],
    });
  }
  uT.defaultResource = Jzo;
  function vin(t) {
    return t.map(([e, r]) =>
      (0, sAe.isPromiseLike)(r)
        ? [
            e,
            r.catch((n) => {
              aAe.diag.debug("promise rejection for resource attribute: %s - %s", e, n);
            }),
          ]
        : [e, r],
    );
  }
  function Xzo(t) {
    if (typeof t == "string" || t === void 0) return t;
    aAe.diag.warn("Schema URL must be string or undefined, got %s. Schema URL will be ignored.", t);
  }
  function Zzo(t, e) {
    let r = t?.schemaUrl,
      n = e?.schemaUrl,
      o = r === void 0 || r === "",
      s = n === void 0 || n === "";
    if (o) return n;
    if (s || r === n) return r;
    aAe.diag.warn(
      'Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.',
      r,
      n,
    );
  }
});