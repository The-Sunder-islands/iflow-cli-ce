/**
 * @module VNe
 * @category utils/cache
 * @label cache
 * @position 172 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (VNe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var VNe = T((S_) => {
  "use strict";
  Object.defineProperty(S_, "__esModule", { value: !0 });
  S_.toAnyValue = S_.toKeyValue = S_.toAttributes = S_.createInstrumentationScope = S_.createResource = void 0;
  function Exo(t) {
    let e = { attributes: LHr(t.attributes), droppedAttributesCount: 0 },
      r = t.schemaUrl;
    return (r && r !== "" && (e.schemaUrl = r), e);
  }
  S_.createResource = Exo;
  function vxo(t) {
    return { name: t.name, version: t.version };
  }
  S_.createInstrumentationScope = vxo;
  function LHr(t) {
    return Object.keys(t).map((e) => Hvt(e, t[e]));
  }
  S_.toAttributes = LHr;
  function Hvt(t, e) {
    return { key: t, value: Vvt(e) };
  }
  S_.toKeyValue = Hvt;
  function Vvt(t) {
    let e = typeof t;
    return e === "string"
      ? { stringValue: t }
      : e === "number"
        ? Number.isInteger(t)
          ? { intValue: t }
          : { doubleValue: t }
        : e === "boolean"
          ? { boolValue: t }
          : t instanceof Uint8Array
            ? { bytesValue: t }
            : Array.isArray(t)
              ? { arrayValue: { values: t.map(Vvt) } }
              : e === "object" && t != null
                ? { kvlistValue: { values: Object.entries(t).map(([r, n]) => Hvt(r, n)) } }
                : {};
  }
  S_.toAnyValue = Vvt;
});