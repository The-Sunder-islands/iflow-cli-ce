/**
 * @module Ixi
 * @category unknown
 * @label unknown
 * @position 1827 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ixi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ixi = T((hxe) => {
  "use strict";
  function xxi(t) {
    return (e) => async (r) => {
      let n = { ...r.input },
        o = [
          { target: "SSECustomerKey", hash: "SSECustomerKeyMD5" },
          { target: "CopySourceSSECustomerKey", hash: "CopySourceSSECustomerKeyMD5" },
        ];
      for (let s of o) {
        let a = n[s.target];
        if (a) {
          let u;
          typeof a == "string"
            ? Dxi(a, t)
              ? (u = t.base64Decoder(a))
              : ((u = t.utf8Decoder(a)), (n[s.target] = t.base64Encoder(u)))
            : ((u = ArrayBuffer.isView(a) ? new Uint8Array(a.buffer, a.byteOffset, a.byteLength) : new Uint8Array(a)),
              (n[s.target] = t.base64Encoder(u)));
          let c = new t.md5();
          (c.update(u), (n[s.hash] = t.base64Encoder(await c.digest())));
        }
      }
      return e({ ...r, input: n });
    };
  }
  var Txi = { name: "ssecMiddleware", step: "initialize", tags: ["SSE"], override: !0 },
    vQa = (t) => ({
      applyToStack: (e) => {
        e.add(xxi(t), Txi);
      },
    });
  function Dxi(t, e) {
    if (!/^(?:[A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)) return !1;
    try {
      return e.base64Decoder(t).length === 32;
    } catch {
      return !1;
    }
  }
  hxe.getSsecPlugin = vQa;
  hxe.isValidBase64EncodedSSECustomerKey = Dxi;
  hxe.ssecMiddleware = xxi;
  hxe.ssecMiddlewareOptions = Txi;
});