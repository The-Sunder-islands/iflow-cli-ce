/**
 * @module Fur
 * @category network/http
 * @label undici
 * @position 1535 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Fur) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Fur = T((SCc, vei) => {
  "use strict";
  var { InvalidArgumentError: gda } = da(),
    { runtimeFeatures: bda } = PO();
  function Ada(t = {}) {
    let { ignoreHeaders: e = [], excludeHeaders: r = [], matchHeaders: n = [], caseSensitive: o = !1 } = t;
    return {
      ignore: new Set(e.map((s) => (o ? s : s.toLowerCase()))),
      exclude: new Set(r.map((s) => (o ? s : s.toLowerCase()))),
      match: new Set(n.map((s) => (o ? s : s.toLowerCase()))),
    };
  }
  var yei = bda.has("crypto") ? Ae("node:crypto") : null,
    yda = yei?.hash ? (t) => yei.hash("sha256", t, "base64url") : (t) => Buffer.from(t).toString("base64url");
  function Eei(t) {
    return Array.isArray(t) && (t.length & 1) === 0;
  }
  function _da(t = []) {
    return t.length === 0
      ? () => !1
      : function (r) {
          let n;
          for (let o of t)
            if (typeof o == "string") {
              if ((n || (n = r.toLowerCase()), n.includes(o.toLowerCase()))) return !0;
            } else if (o instanceof RegExp && o.test(r)) return !0;
          return !1;
        };
  }
  function Eda(t) {
    let e = {};
    if (!t) return e;
    if (Eei(t)) {
      for (let r = 0; r < t.length; r += 2) {
        let n = t[r],
          o = t[r + 1];
        if (n && o !== void 0) {
          let s = Buffer.isBuffer(n) ? n.toString() : n,
            a = Buffer.isBuffer(o) ? o.toString() : o;
          e[s.toLowerCase()] = a;
        }
      }
      return e;
    }
    if (t && typeof t == "object")
      for (let [r, n] of Object.entries(t))
        r && typeof r == "string" && (e[r.toLowerCase()] = Array.isArray(n) ? n.join(", ") : String(n));
    return e;
  }
  var _ei = ["record", "playback", "update"];
  function vda(t) {
    if (!_ei.includes(t)) throw new gda(`Invalid snapshot mode: ${t}. Must be one of: ${_ei.join(", ")}`);
  }
  vei.exports = {
    createHeaderFilters: Ada,
    hashId: yda,
    isUndiciHeaders: Eei,
    normalizeHeaders: Eda,
    isUrlExcludedFactory: _da,
    validateSnapshotMode: vda,
  };
});