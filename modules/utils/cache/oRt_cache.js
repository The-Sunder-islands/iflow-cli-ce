/**
 * @module oRt
 * @category utils/cache
 * @label cache
 * @position 635 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (oRt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var oRt = T((dT) => {
  "use strict";
  Object.defineProperty(dT, "__esModule", { value: !0 });
  dT.parseKeyPairsIntoRecord = dT.parsePairKeyValue = dT.getKeyPairs = dT.serializeKeyPairs = void 0;
  var rKo = (Zt(), bt(cr)),
    Qq = iRt();
  function nKo(t) {
    return t.reduce((e, r) => {
      let n = `${e}${e !== "" ? Qq.BAGGAGE_ITEMS_SEPARATOR : ""}${r}`;
      return n.length > Qq.BAGGAGE_MAX_TOTAL_LENGTH ? e : n;
    }, "");
  }
  dT.serializeKeyPairs = nKo;
  function iKo(t) {
    return t.getAllEntries().map(([e, r]) => {
      let n = `${encodeURIComponent(e)}=${encodeURIComponent(r.value)}`;
      return (r.metadata !== void 0 && (n += Qq.BAGGAGE_PROPERTIES_SEPARATOR + r.metadata.toString()), n);
    });
  }
  dT.getKeyPairs = iKo;
  function non(t) {
    let e = t.split(Qq.BAGGAGE_PROPERTIES_SEPARATOR);
    if (e.length <= 0) return;
    let r = e.shift();
    if (!r) return;
    let n = r.indexOf(Qq.BAGGAGE_KEY_PAIR_SEPARATOR);
    if (n <= 0) return;
    let o = decodeURIComponent(r.substring(0, n).trim()),
      s = decodeURIComponent(r.substring(n + 1).trim()),
      a;
    return (
      e.length > 0 && (a = (0, rKo.baggageEntryMetadataFromString)(e.join(Qq.BAGGAGE_PROPERTIES_SEPARATOR))),
      { key: o, value: s, metadata: a }
    );
  }
  dT.parsePairKeyValue = non;
  function oKo(t) {
    let e = {};
    return (
      typeof t == "string" &&
        t.length > 0 &&
        t.split(Qq.BAGGAGE_ITEMS_SEPARATOR).forEach((r) => {
          let n = non(r);
          n !== void 0 && n.value.length > 0 && (e[n.key] = n.value);
        }),
      e
    );
  }
  dT.parseKeyPairsIntoRecord = oKo;
});