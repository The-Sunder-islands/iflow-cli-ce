/**
 * @module RRr
 * @category utils/crypto
 * @label crypto
 * @position 72 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (RRr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var RRr = T((Dke) => {
  "use strict";
  Object.defineProperty(Dke, "__esModule", { value: !0 });
  Dke.BrowserCrypto = void 0;
  var Nee = Z6t(),
    Lpo = Pee(),
    eyt = class t {
      constructor() {
        if (typeof window > "u" || window.crypto === void 0 || window.crypto.subtle === void 0)
          throw new Error("SubtleCrypto not found. Make sure it's an https:// website.");
      }
      async sha256DigestBase64(e) {
        let r = new TextEncoder().encode(e),
          n = await window.crypto.subtle.digest("SHA-256", r);
        return Nee.fromByteArray(new Uint8Array(n));
      }
      randomBytesBase64(e) {
        let r = new Uint8Array(e);
        return (window.crypto.getRandomValues(r), Nee.fromByteArray(r));
      }
      static padBase64(e) {
        for (; e.length % 4 !== 0; ) e += "=";
        return e;
      }
      async verify(e, r, n) {
        let o = { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } },
          s = new TextEncoder().encode(r),
          a = Nee.toByteArray(t.padBase64(n)),
          u = await window.crypto.subtle.importKey("jwk", e, o, !0, ["verify"]);
        return await window.crypto.subtle.verify(o, u, a, s);
      }
      async sign(e, r) {
        let n = { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } },
          o = new TextEncoder().encode(r),
          s = await window.crypto.subtle.importKey("jwk", e, n, !0, ["sign"]),
          a = await window.crypto.subtle.sign(n, s, o);
        return Nee.fromByteArray(new Uint8Array(a));
      }
      decodeBase64StringUtf8(e) {
        let r = Nee.toByteArray(t.padBase64(e));
        return new TextDecoder().decode(r);
      }
      encodeBase64StringUtf8(e) {
        let r = new TextEncoder().encode(e);
        return Nee.fromByteArray(r);
      }
      async sha256DigestHex(e) {
        let r = new TextEncoder().encode(e),
          n = await window.crypto.subtle.digest("SHA-256", r);
        return (0, Lpo.fromArrayBufferToHex)(n);
      }
      async signWithHmacSha256(e, r) {
        let n = typeof e == "string" ? e : String.fromCharCode(...new Uint16Array(e)),
          o = new TextEncoder(),
          s = await window.crypto.subtle.importKey(
            "raw",
            o.encode(n),
            { name: "HMAC", hash: { name: "SHA-256" } },
            !1,
            ["sign"],
          );
        return window.crypto.subtle.sign("HMAC", s, o.encode(r));
      }
    };
  Dke.BrowserCrypto = eyt;
});