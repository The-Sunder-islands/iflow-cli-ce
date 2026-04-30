/**
 * @module B4t
 * @category utils/cache
 * @label cache
 * @position 297 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (B4t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var B4t = T((Px) => {
  "use strict";
  Object.defineProperty(Px, "__esModule", { value: !0 });
  Px.defaultResource = Px.emptyResource = Px.resourceFromDetectedResource = Px.resourceFromAttributes = void 0;
  var Ige = (Zt(), bt(cr)),
    N4t = Ii(),
    XG = ($1(), bt(Ih)),
    wRo = O4t(),
    Dge = zzr(),
    tLe = class t {
      _rawAttributes;
      _asyncAttributesPending = !1;
      _schemaUrl;
      _memoizedAttributes;
      static FromAttributeList(e, r) {
        let n = new t({}, r);
        return (
          (n._rawAttributes = Yzr(e)),
          (n._asyncAttributesPending = e.filter(([o, s]) => (0, Dge.isPromiseLike)(s)).length > 0),
          n
        );
      }
      constructor(e, r) {
        let n = e.attributes ?? {};
        ((this._rawAttributes = Object.entries(n).map(
          ([o, s]) => ((0, Dge.isPromiseLike)(s) && (this._asyncAttributesPending = !0), [o, s]),
        )),
          (this._rawAttributes = Yzr(this._rawAttributes)),
          (this._schemaUrl = IRo(r?.schemaUrl)));
      }
      get asyncAttributesPending() {
        return this._asyncAttributesPending;
      }
      async waitForAsyncAttributes() {
        if (this.asyncAttributesPending) {
          for (let e = 0; e < this._rawAttributes.length; e++) {
            let [r, n] = this._rawAttributes[e];
            this._rawAttributes[e] = [r, (0, Dge.isPromiseLike)(n) ? await n : n];
          }
          this._asyncAttributesPending = !1;
        }
      }
      get attributes() {
        if (
          (this.asyncAttributesPending &&
            Ige.diag.error("Accessing resource attributes before async attributes settled"),
          this._memoizedAttributes)
        )
          return this._memoizedAttributes;
        let e = {};
        for (let [r, n] of this._rawAttributes) {
          if ((0, Dge.isPromiseLike)(n)) {
            Ige.diag.debug(`Unsettled resource attribute ${r} skipped`);
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
        let r = RRo(this, e),
          n = r ? { schemaUrl: r } : void 0;
        return t.FromAttributeList([...e.getRawAttributes(), ...this.getRawAttributes()], n);
      }
    };
  function P4t(t, e) {
    return tLe.FromAttributeList(Object.entries(t), e);
  }
  Px.resourceFromAttributes = P4t;
  function xRo(t, e) {
    return new tLe(t, e);
  }
  Px.resourceFromDetectedResource = xRo;
  function TRo() {
    return P4t({});
  }
  Px.emptyResource = TRo;
  function DRo() {
    return P4t({
      [XG.ATTR_SERVICE_NAME]: (0, wRo.defaultServiceName)(),
      [XG.ATTR_TELEMETRY_SDK_LANGUAGE]: N4t.SDK_INFO[XG.ATTR_TELEMETRY_SDK_LANGUAGE],
      [XG.ATTR_TELEMETRY_SDK_NAME]: N4t.SDK_INFO[XG.ATTR_TELEMETRY_SDK_NAME],
      [XG.ATTR_TELEMETRY_SDK_VERSION]: N4t.SDK_INFO[XG.ATTR_TELEMETRY_SDK_VERSION],
    });
  }
  Px.defaultResource = DRo;
  function Yzr(t) {
    return t.map(([e, r]) =>
      (0, Dge.isPromiseLike)(r)
        ? [
            e,
            r.catch((n) => {
              Ige.diag.debug("promise rejection for resource attribute: %s - %s", e, n);
            }),
          ]
        : [e, r],
    );
  }
  function IRo(t) {
    if (typeof t == "string" || t === void 0) return t;
    Ige.diag.warn("Schema URL must be string or undefined, got %s. Schema URL will be ignored.", t);
  }
  function RRo(t, e) {
    let r = t?.schemaUrl,
      n = e?.schemaUrl,
      o = r === void 0 || r === "",
      s = n === void 0 || n === "";
    if (o) return n;
    if (s || r === n) return r;
    Ige.diag.warn(
      'Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.',
      r,
      n,
    );
  }
});