/**
 * @module mbi
 * @category network/http
 * @label undici
 * @position 1729 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mbi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mbi = T((Vlt) => {
  "use strict";
  Object.defineProperty(Vlt, "__esModule", { value: !0 });
  Vlt.sdkStreamMixin = void 0;
  var kDa = sbi(),
    ODa = p3(),
    NDa = Hlt(),
    PDa = ep(),
    ubi = _$(),
    cbi = "The stream has already been transformed.",
    BDa = (t) => {
      if (!lbi(t) && !(0, ubi.isReadableStream)(t)) {
        let o = t?.__proto__?.constructor?.name || t;
        throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${o}`);
      }
      let e = !1,
        r = async () => {
          if (e) throw new Error(cbi);
          return ((e = !0), await (0, kDa.streamCollector)(t));
        },
        n = (o) => {
          if (typeof o.stream != "function")
            throw new Error(`Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.
If you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body`);
          return o.stream();
        };
      return Object.assign(t, {
        transformToByteArray: r,
        transformToString: async (o) => {
          let s = await r();
          if (o === "base64") return (0, ODa.toBase64)(s);
          if (o === "hex") return (0, NDa.toHex)(s);
          if (o === void 0 || o === "utf8" || o === "utf-8") return (0, PDa.toUtf8)(s);
          if (typeof TextDecoder == "function") return new TextDecoder(o).decode(s);
          throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
        },
        transformToWebStream: () => {
          if (e) throw new Error(cbi);
          if (((e = !0), lbi(t))) return n(t);
          if ((0, ubi.isReadableStream)(t)) return t;
          throw new Error(`Cannot transform payload to web stream, got ${t}`);
        },
      });
    };
  Vlt.sdkStreamMixin = BDa;
  var lbi = (t) => typeof Blob == "function" && t instanceof Blob;
});