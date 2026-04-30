/**
 * @module kRr
 * @category utils/crypto
 * @label crypto
 * @position 73 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kRr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kRr = T((Ike) => {
  "use strict";
  Object.defineProperty(Ike, "__esModule", { value: !0 });
  Ike.NodeCrypto = void 0;
  var Bee = Ae("crypto"),
    tyt = class {
      async sha256DigestBase64(e) {
        return Bee.createHash("sha256").update(e).digest("base64");
      }
      randomBytesBase64(e) {
        return Bee.randomBytes(e).toString("base64");
      }
      async verify(e, r, n) {
        let o = Bee.createVerify("RSA-SHA256");
        return (o.update(r), o.end(), o.verify(e, n, "base64"));
      }
      async sign(e, r) {
        let n = Bee.createSign("RSA-SHA256");
        return (n.update(r), n.end(), n.sign(e, "base64"));
      }
      decodeBase64StringUtf8(e) {
        return Buffer.from(e, "base64").toString("utf-8");
      }
      encodeBase64StringUtf8(e) {
        return Buffer.from(e, "utf-8").toString("base64");
      }
      async sha256DigestHex(e) {
        return Bee.createHash("sha256").update(e).digest("hex");
      }
      async signWithHmacSha256(e, r) {
        let n = typeof e == "string" ? e : Fpo(e);
        return Mpo(Bee.createHmac("sha256", n).update(r).digest());
      }
    };
  Ike.NodeCrypto = tyt;
  function Mpo(t) {
    return t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
  }
  function Fpo(t) {
    return Buffer.from(t);
  }
});