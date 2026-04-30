/**
 * @module kzt
 * @category utils/crypto
 * @label crypto
 * @position 1138 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kzt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kzt = T((kbc, pDn) => {
  "use strict";
  var Rzt = Ae("crypto"),
    ETs = {
      hash(t, ...e) {
        let r = Rzt.createHash(t);
        return (r.update(Buffer.concat(e)), r.digest());
      },
      convertPasswordToHash(t, e, r, n) {
        if (((e = e.toLowerCase()), Rzt.getHashes().indexOf(e) < 0))
          throw new Error(`Hash algorithm '${e}' not supported!`);
        let s = Buffer.from(t, "utf16le"),
          a = this.hash(e, Buffer.from(r, "base64"), s);
        for (let u = 0; u < n; u++) {
          let c = Buffer.alloc(4);
          (c.writeUInt32LE(u, 0), (a = this.hash(e, a, c)));
        }
        return a.toString("base64");
      },
      randomBytes(t) {
        return Rzt.randomBytes(t);
      },
    };
  pDn.exports = ETs;
});