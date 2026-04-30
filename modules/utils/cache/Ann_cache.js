/**
 * @module Ann
 * @category utils/cache
 * @label cache
 * @position 572 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ann) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ann = T((eje) => {
  "use strict";
  Object.defineProperty(eje, "__esModule", { value: !0 });
  eje.W3CBaggagePropagator = void 0;
  var E7t = (Zt(), bt(cr)),
    bWo = rAe(),
    Lq = y7t(),
    v7t = _7t(),
    C7t = class {
      inject(e, r, n) {
        let o = E7t.propagation.getBaggage(e);
        if (!o || (0, bWo.isTracingSuppressed)(e)) return;
        let s = (0, v7t.getKeyPairs)(o)
            .filter((u) => u.length <= Lq.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS)
            .slice(0, Lq.BAGGAGE_MAX_NAME_VALUE_PAIRS),
          a = (0, v7t.serializeKeyPairs)(s);
        a.length > 0 && n.set(r, Lq.BAGGAGE_HEADER, a);
      }
      extract(e, r, n) {
        let o = n.get(r, Lq.BAGGAGE_HEADER),
          s = Array.isArray(o) ? o.join(Lq.BAGGAGE_ITEMS_SEPARATOR) : o;
        if (!s) return e;
        let a = {};
        return s.length === 0 ||
          (s.split(Lq.BAGGAGE_ITEMS_SEPARATOR).forEach((c) => {
            let m = (0, v7t.parsePairKeyValue)(c);
            if (m) {
              let d = { value: m.value };
              (m.metadata && (d.metadata = m.metadata), (a[m.key] = d));
            }
          }),
          Object.entries(a).length === 0)
          ? e
          : E7t.propagation.setBaggage(e, E7t.propagation.createBaggage(a));
      }
      fields() {
        return [Lq.BAGGAGE_HEADER];
      }
    };
  eje.W3CBaggagePropagator = C7t;
});