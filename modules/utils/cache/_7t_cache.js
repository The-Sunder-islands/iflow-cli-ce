/**
 * @module _7t
 * @category utils/cache
 * @label cache
 * @position 571 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_7t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _7t = T((sT) => {
  "use strict";
  Object.defineProperty(sT, "__esModule", { value: !0 });
  sT.parseKeyPairsIntoRecord = sT.parsePairKeyValue = sT.getKeyPairs = sT.serializeKeyPairs = void 0;
  var fWo = (Zt(), bt(cr)),
    mne = y7t();
  function pWo(t) {
    return t.reduce((e, r) => {
      let n = `${e}${e !== "" ? mne.BAGGAGE_ITEMS_SEPARATOR : ""}${r}`;
      return n.length > mne.BAGGAGE_MAX_TOTAL_LENGTH ? e : n;
    }, "");
  }
  sT.serializeKeyPairs = pWo;
  function hWo(t) {
    return t.getAllEntries().map(([e, r]) => {
      let n = `${encodeURIComponent(e)}=${encodeURIComponent(r.value)}`;
      return (r.metadata !== void 0 && (n += mne.BAGGAGE_PROPERTIES_SEPARATOR + r.metadata.toString()), n);
    });
  }
  sT.getKeyPairs = hWo;
  function bnn(t) {
    if (!t) return;
    let e = t.indexOf(mne.BAGGAGE_PROPERTIES_SEPARATOR),
      r = e === -1 ? t : t.substring(0, e),
      n = r.indexOf(mne.BAGGAGE_KEY_PAIR_SEPARATOR);
    if (n <= 0) return;
    let o = r.substring(0, n).trim(),
      s = r.substring(n + 1).trim();
    if (!o || !s) return;
    let a, u;
    try {
      ((a = decodeURIComponent(o)), (u = decodeURIComponent(s)));
    } catch {
      return;
    }
    let c;
    if (e !== -1 && e < t.length - 1) {
      let m = t.substring(e + 1);
      c = (0, fWo.baggageEntryMetadataFromString)(m);
    }
    return { key: a, value: u, metadata: c };
  }
  sT.parsePairKeyValue = bnn;
  function gWo(t) {
    let e = {};
    return (
      typeof t == "string" &&
        t.length > 0 &&
        t.split(mne.BAGGAGE_ITEMS_SEPARATOR).forEach((r) => {
          let n = bnn(r);
          n !== void 0 && n.value.length > 0 && (e[n.key] = n.value);
        }),
      e
    );
  }
  sT.parseKeyPairsIntoRecord = gWo;
});