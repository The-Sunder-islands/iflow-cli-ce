/**
 * @module fxi
 * @category unknown
 * @label unknown
 * @position 1823 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (fxi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var fxi = T((j2r) => {
  "use strict";
  var Wja = dxi(),
    zja = Ae("stream");
  async function* Yja(t) {
    let e = !1,
      r = !1,
      n = new Array();
    for (
      t.on("error", (o) => {
        if ((e || (e = !0), o)) throw o;
      }),
        t.on("data", (o) => {
          n.push(o);
        }),
        t.on("end", () => {
          e = !0;
        });
      !r;
    ) {
      let o = await new Promise((s) => setTimeout(() => s(n.shift()), 0));
      (o && (yield o), (r = e && n.length === 0));
    }
  }
  var I1t = class {
      universalMarshaller;
      constructor({ utf8Encoder: e, utf8Decoder: r }) {
        this.universalMarshaller = new Wja.EventStreamMarshaller({ utf8Decoder: r, utf8Encoder: e });
      }
      deserialize(e, r) {
        let n = typeof e[Symbol.asyncIterator] == "function" ? e : Yja(e);
        return this.universalMarshaller.deserialize(n, r);
      }
      serialize(e, r) {
        return zja.Readable.from(this.universalMarshaller.serialize(e, r));
      }
    },
    Kja = (t) => new I1t(t);
  j2r.EventStreamMarshaller = I1t;
  j2r.eventStreamSerdeProvider = Kja;
});