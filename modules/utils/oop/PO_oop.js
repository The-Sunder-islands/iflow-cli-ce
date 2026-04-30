/**
 * @module PO
 * @category utils/oop
 * @label oop
 * @position 1498 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (PO) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var PO = T((Fvc, Bsr) => {
  "use strict";
  var YKn = {
    __proto__: null,
    "node:crypto": () => Ae("node:crypto"),
    "node:sqlite": () => Ae("node:sqlite"),
    "node:worker_threads": () => Ae("node:worker_threads"),
    "node:zlib": () => Ae("node:zlib"),
  };
  function maa(t) {
    try {
      return (YKn[t](), !0);
    } catch (e) {
      if (e.code !== "ERR_UNKNOWN_BUILTIN_MODULE" && e.code !== "ERR_NO_CRYPTO") throw e;
      return !1;
    }
  }
  function daa(t, e) {
    return typeof YKn[t]()[e] < "u";
  }
  var KKn = ["markAsUncloneable", "zstd"],
    faa = {
      markAsUncloneable: ["node:worker_threads", "markAsUncloneable"],
      zstd: ["node:zlib", "createZstdDecompress"],
    },
    JKn = ["crypto", "sqlite"],
    paa = [...JKn, ...KKn];
  function haa(t) {
    if (JKn.includes(t)) return maa(`node:${t}`);
    if (KKn.includes(t)) {
      let [e, r] = faa[t];
      return daa(e, r);
    }
    throw new TypeError(`unknown feature: ${t}`);
  }
  var Psr = class {
      #e = new Map();
      clear() {
        this.#e.clear();
      }
      has(e) {
        return this.#e.get(e) ?? this.#t(e);
      }
      set(e, r) {
        if (paa.includes(e) === !1) throw new TypeError(`unknown feature: ${e}`);
        this.#e.set(e, r);
      }
      #t(e) {
        let r = haa(e);
        return (this.#e.set(e, r), r);
      }
    },
    XKn = new Psr();
  Bsr.exports.runtimeFeatures = XKn;
  Bsr.exports.default = XKn;
});