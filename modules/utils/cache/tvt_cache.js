/**
 * @module tvt
 * @category utils/cache
 * @label cache
 * @position 123 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tvt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tvt = T((gx) => {
  "use strict";
  Object.defineProperty(gx, "__esModule", { value: !0 });
  gx.parseKeyPairsIntoRecord = gx.parsePairKeyValue = gx.getKeyPairs = gx.serializeKeyPairs = void 0;
  var L2o = (Zt(), bt(cr)),
    LG = evt();
  function M2o(t) {
    return t.reduce((e, r) => {
      let n = `${e}${e !== "" ? LG.BAGGAGE_ITEMS_SEPARATOR : ""}${r}`;
      return n.length > LG.BAGGAGE_MAX_TOTAL_LENGTH ? e : n;
    }, "");
  }
  gx.serializeKeyPairs = M2o;
  function F2o(t) {
    return t.getAllEntries().map(([e, r]) => {
      let n = `${encodeURIComponent(e)}=${encodeURIComponent(r.value)}`;
      return (r.metadata !== void 0 && (n += LG.BAGGAGE_PROPERTIES_SEPARATOR + r.metadata.toString()), n);
    });
  }
  gx.getKeyPairs = F2o;
  function aLr(t) {
    let e = t.split(LG.BAGGAGE_PROPERTIES_SEPARATOR);
    if (e.length <= 0) return;
    let r = e.shift();
    if (!r) return;
    let n = r.indexOf(LG.BAGGAGE_KEY_PAIR_SEPARATOR);
    if (n <= 0) return;
    let o = decodeURIComponent(r.substring(0, n).trim()),
      s = decodeURIComponent(r.substring(n + 1).trim()),
      a;
    return (
      e.length > 0 && (a = (0, L2o.baggageEntryMetadataFromString)(e.join(LG.BAGGAGE_PROPERTIES_SEPARATOR))),
      { key: o, value: s, metadata: a }
    );
  }
  gx.parsePairKeyValue = aLr;
  function U2o(t) {
    let e = {};
    return (
      typeof t == "string" &&
        t.length > 0 &&
        t.split(LG.BAGGAGE_ITEMS_SEPARATOR).forEach((r) => {
          let n = aLr(r);
          n !== void 0 && n.value.length > 0 && (e[n.key] = n.value);
        }),
      e
    );
  }
  gx.parseKeyPairsIntoRecord = U2o;
});