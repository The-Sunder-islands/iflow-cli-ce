/**
 * @module Pee
 * @category utils/oop
 * @label oop
 * @position 74 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Pee) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Pee = T((d3e) => {
  "use strict";
  Object.defineProperty(d3e, "__esModule", { value: !0 });
  d3e.createCrypto = jpo;
  d3e.hasBrowserCrypto = ORr;
  d3e.fromArrayBufferToHex = Qpo;
  var Upo = RRr(),
    $po = kRr();
  function jpo() {
    return ORr() ? new Upo.BrowserCrypto() : new $po.NodeCrypto();
  }
  function ORr() {
    return typeof window < "u" && typeof window.crypto < "u" && typeof window.crypto.subtle < "u";
  }
  function Qpo(t) {
    return Array.from(new Uint8Array(t))
      .map((r) => r.toString(16).padStart(2, "0"))
      .join("");
  }
});