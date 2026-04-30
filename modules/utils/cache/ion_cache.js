/**
 * @module ion
 * @category utils/cache
 * @label cache
 * @position 636 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ion) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ion = T((rQe) => {
  "use strict";
  Object.defineProperty(rQe, "__esModule", { value: !0 });
  rQe.W3CBaggagePropagator = void 0;
  var sRt = (Zt(), bt(cr)),
    sKo = mAe(),
    Gq = iRt(),
    aRt = oRt(),
    uRt = class {
      inject(e, r, n) {
        let o = sRt.propagation.getBaggage(e);
        if (!o || (0, sKo.isTracingSuppressed)(e)) return;
        let s = (0, aRt.getKeyPairs)(o)
            .filter((u) => u.length <= Gq.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS)
            .slice(0, Gq.BAGGAGE_MAX_NAME_VALUE_PAIRS),
          a = (0, aRt.serializeKeyPairs)(s);
        a.length > 0 && n.set(r, Gq.BAGGAGE_HEADER, a);
      }
      extract(e, r, n) {
        let o = n.get(r, Gq.BAGGAGE_HEADER),
          s = Array.isArray(o) ? o.join(Gq.BAGGAGE_ITEMS_SEPARATOR) : o;
        if (!s) return e;
        let a = {};
        return s.length === 0 ||
          (s.split(Gq.BAGGAGE_ITEMS_SEPARATOR).forEach((c) => {
            let m = (0, aRt.parsePairKeyValue)(c);
            if (m) {
              let d = { value: m.value };
              (m.metadata && (d.metadata = m.metadata), (a[m.key] = d));
            }
          }),
          Object.entries(a).length === 0)
          ? e
          : sRt.propagation.setBaggage(e, sRt.propagation.createBaggage(a));
      }
      fields() {
        return [Gq.BAGGAGE_HEADER];
      }
    };
  rQe.W3CBaggagePropagator = uRt;
});