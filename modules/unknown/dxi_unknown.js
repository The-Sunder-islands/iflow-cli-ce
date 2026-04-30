/**
 * @module dxi
 * @category unknown
 * @label unknown
 * @position 1822 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dxi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dxi = T(($2r) => {
  "use strict";
  var pxe = mxi();
  function qja(t) {
    let e = 0,
      r = 0,
      n = null,
      o = null,
      s = (u) => {
        if (typeof u != "number")
          throw new Error("Attempted to allocate an event message where size was not a number: " + u);
        ((e = u), (r = 4), (n = new Uint8Array(u)), new DataView(n.buffer).setUint32(0, u, !1));
      },
      a = async function* () {
        let u = t[Symbol.asyncIterator]();
        for (;;) {
          let { value: c, done: m } = await u.next();
          if (m) {
            if (e)
              if (e === r) yield n;
              else throw new Error("Truncated event message received.");
            else return;
            return;
          }
          let d = c.length,
            f = 0;
          for (; f < d; ) {
            if (!n) {
              let h = d - f;
              o || (o = new Uint8Array(4));
              let g = Math.min(4 - r, h);
              if ((o.set(c.slice(f, f + g), r), (r += g), (f += g), r < 4)) break;
              (s(new DataView(o.buffer).getUint32(0, !1)), (o = null));
            }
            let p = Math.min(e - r, d - f);
            (n.set(c.slice(f, f + p), r), (r += p), (f += p), e && e === r && (yield n, (n = null), (e = 0), (r = 0)));
          }
        }
      };
    return { [Symbol.asyncIterator]: a };
  }
  function Hja(t, e) {
    return async function (r) {
      let { value: n } = r.headers[":message-type"];
      if (n === "error") {
        let o = new Error(r.headers[":error-message"].value || "UnknownError");
        throw ((o.name = r.headers[":error-code"].value), o);
      } else if (n === "exception") {
        let o = r.headers[":exception-type"].value,
          s = { [o]: r },
          a = await t(s);
        if (a.$unknown) {
          let u = new Error(e(r.body));
          throw ((u.name = o), u);
        }
        throw a[o];
      } else if (n === "event") {
        let o = { [r.headers[":event-type"].value]: r },
          s = await t(o);
        return s.$unknown ? void 0 : s;
      } else throw Error(`Unrecognizable event type: ${r.headers[":event-type"].value}`);
    };
  }
  var D1t = class {
      eventStreamCodec;
      utfEncoder;
      constructor({ utf8Encoder: e, utf8Decoder: r }) {
        ((this.eventStreamCodec = new pxe.EventStreamCodec(e, r)), (this.utfEncoder = e));
      }
      deserialize(e, r) {
        let n = qja(e);
        return new pxe.SmithyMessageDecoderStream({
          messageStream: new pxe.MessageDecoderStream({ inputStream: n, decoder: this.eventStreamCodec }),
          deserializer: Hja(r, this.utfEncoder),
        });
      }
      serialize(e, r) {
        return new pxe.MessageEncoderStream({
          messageStream: new pxe.SmithyMessageEncoderStream({ inputStream: e, serializer: r }),
          encoder: this.eventStreamCodec,
          includeEndFrame: !0,
        });
      }
    },
    Vja = (t) => new D1t(t);
  $2r.EventStreamMarshaller = D1t;
  $2r.eventStreamSerdeProvider = Vja;
});