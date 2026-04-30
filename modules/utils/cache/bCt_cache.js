/**
 * @module bCt
 * @category utils/cache
 * @label cache
 * @position 203 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (bCt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var bCt = T((Cx) => {
  "use strict";
  Object.defineProperty(Cx, "__esModule", { value: !0 });
  Cx.defaultResource = Cx.emptyResource = Cx.resourceFromDetectedResource = Cx.resourceFromAttributes = void 0;
  var gge = (Zt(), bt(cr)),
    hCt = Ii(),
    HG = ($1(), bt(Ih)),
    kTo = pCt(),
    hge = yVr(),
    vPe = class t {
      _rawAttributes;
      _asyncAttributesPending = !1;
      _schemaUrl;
      _memoizedAttributes;
      static FromAttributeList(e, r) {
        let n = new t({}, r);
        return (
          (n._rawAttributes = _Vr(e)),
          (n._asyncAttributesPending = e.filter(([o, s]) => (0, hge.isPromiseLike)(s)).length > 0),
          n
        );
      }
      constructor(e, r) {
        let n = e.attributes ?? {};
        ((this._rawAttributes = Object.entries(n).map(
          ([o, s]) => ((0, hge.isPromiseLike)(s) && (this._asyncAttributesPending = !0), [o, s]),
        )),
          (this._rawAttributes = _Vr(this._rawAttributes)),
          (this._schemaUrl = BTo(r?.schemaUrl)));
      }
      get asyncAttributesPending() {
        return this._asyncAttributesPending;
      }
      async waitForAsyncAttributes() {
        if (this.asyncAttributesPending) {
          for (let e = 0; e < this._rawAttributes.length; e++) {
            let [r, n] = this._rawAttributes[e];
            this._rawAttributes[e] = [r, (0, hge.isPromiseLike)(n) ? await n : n];
          }
          this._asyncAttributesPending = !1;
        }
      }
      get attributes() {
        if (
          (this.asyncAttributesPending &&
            gge.diag.error("Accessing resource attributes before async attributes settled"),
          this._memoizedAttributes)
        )
          return this._memoizedAttributes;
        let e = {};
        for (let [r, n] of this._rawAttributes) {
          if ((0, hge.isPromiseLike)(n)) {
            gge.diag.debug(`Unsettled resource attribute ${r} skipped`);
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
        let r = LTo(this, e),
          n = r ? { schemaUrl: r } : void 0;
        return t.FromAttributeList([...e.getRawAttributes(), ...this.getRawAttributes()], n);
      }
    };
  function gCt(t, e) {
    return vPe.FromAttributeList(Object.entries(t), e);
  }
  Cx.resourceFromAttributes = gCt;
  function OTo(t, e) {
    return new vPe(t, e);
  }
  Cx.resourceFromDetectedResource = OTo;
  function NTo() {
    return gCt({});
  }
  Cx.emptyResource = NTo;
  function PTo() {
    return gCt({
      [HG.ATTR_SERVICE_NAME]: (0, kTo.defaultServiceName)(),
      [HG.ATTR_TELEMETRY_SDK_LANGUAGE]: hCt.SDK_INFO[HG.ATTR_TELEMETRY_SDK_LANGUAGE],
      [HG.ATTR_TELEMETRY_SDK_NAME]: hCt.SDK_INFO[HG.ATTR_TELEMETRY_SDK_NAME],
      [HG.ATTR_TELEMETRY_SDK_VERSION]: hCt.SDK_INFO[HG.ATTR_TELEMETRY_SDK_VERSION],
    });
  }
  Cx.defaultResource = PTo;
  function _Vr(t) {
    return t.map(([e, r]) =>
      (0, hge.isPromiseLike)(r)
        ? [
            e,
            r.catch((n) => {
              gge.diag.debug("promise rejection for resource attribute: %s - %s", e, n);
            }),
          ]
        : [e, r],
    );
  }
  function BTo(t) {
    if (typeof t == "string" || t === void 0) return t;
    gge.diag.warn("Schema URL must be string or undefined, got %s. Schema URL will be ignored.", t);
  }
  function LTo(t, e) {
    let r = t?.schemaUrl,
      n = e?.schemaUrl,
      o = r === void 0 || r === "",
      s = n === void 0 || n === "";
    if (o) return n;
    if (s || r === n) return r;
    gge.diag.warn(
      'Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.',
      r,
      n,
    );
  }
});