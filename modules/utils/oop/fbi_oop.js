/**
 * @module fbi
 * @category utils/oop
 * @label oop
 * @position 1730 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (fbi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var fbi = T((Wlt) => {
  "use strict";
  Object.defineProperty(Wlt, "__esModule", { value: !0 });
  Wlt.sdkStreamMixin = void 0;
  var LDa = E$(),
    MDa = Cme(),
    Dhr = Ae("stream"),
    FDa = mbi(),
    dbi = "The stream has already been transformed.",
    UDa = (t) => {
      if (!(t instanceof Dhr.Readable))
        try {
          return (0, FDa.sdkStreamMixin)(t);
        } catch {
          let o = t?.__proto__?.constructor?.name || t;
          throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${o}`);
        }
      let e = !1,
        r = async () => {
          if (e) throw new Error(dbi);
          return ((e = !0), await (0, LDa.streamCollector)(t));
        };
      return Object.assign(t, {
        transformToByteArray: r,
        transformToString: async (n) => {
          let o = await r();
          return n === void 0 || Buffer.isEncoding(n)
            ? (0, MDa.fromArrayBuffer)(o.buffer, o.byteOffset, o.byteLength).toString(n)
            : new TextDecoder(n).decode(o);
        },
        transformToWebStream: () => {
          if (e) throw new Error(dbi);
          if (t.readableFlowing !== null) throw new Error("The stream has been consumed by other callbacks.");
          if (typeof Dhr.Readable.toWeb != "function")
            throw new Error("Readable.toWeb() is not supported. Please ensure a polyfill is available.");
          return ((e = !0), Dhr.Readable.toWeb(t));
        },
      });
    };
  Wlt.sdkStreamMixin = UDa;
});