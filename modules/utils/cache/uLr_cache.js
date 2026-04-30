/**
 * @module uLr
 * @category utils/cache
 * @label cache
 * @position 124 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (uLr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var uLr = T((lNe) => {
  "use strict";
  Object.defineProperty(lNe, "__esModule", { value: !0 });
  lNe.W3CBaggagePropagator = void 0;
  var rvt = (Zt(), bt(cr)),
    $2o = tge(),
    MG = evt(),
    nvt = tvt(),
    ivt = class {
      inject(e, r, n) {
        let o = rvt.propagation.getBaggage(e);
        if (!o || (0, $2o.isTracingSuppressed)(e)) return;
        let s = (0, nvt.getKeyPairs)(o)
            .filter((u) => u.length <= MG.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS)
            .slice(0, MG.BAGGAGE_MAX_NAME_VALUE_PAIRS),
          a = (0, nvt.serializeKeyPairs)(s);
        a.length > 0 && n.set(r, MG.BAGGAGE_HEADER, a);
      }
      extract(e, r, n) {
        let o = n.get(r, MG.BAGGAGE_HEADER),
          s = Array.isArray(o) ? o.join(MG.BAGGAGE_ITEMS_SEPARATOR) : o;
        if (!s) return e;
        let a = {};
        return s.length === 0 ||
          (s.split(MG.BAGGAGE_ITEMS_SEPARATOR).forEach((c) => {
            let m = (0, nvt.parsePairKeyValue)(c);
            if (m) {
              let d = { value: m.value };
              (m.metadata && (d.metadata = m.metadata), (a[m.key] = d));
            }
          }),
          Object.entries(a).length === 0)
          ? e
          : rvt.propagation.setBaggage(e, rvt.propagation.createBaggage(a));
      }
      fields() {
        return [MG.BAGGAGE_HEADER];
      }
    };
  lNe.W3CBaggagePropagator = ivt;
});