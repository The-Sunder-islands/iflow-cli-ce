/**
 * @module qgi
 * @category utils/oop
 * @label oop
 * @position 1721 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qgi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qgi = T((dhr) => {
  "use strict";
  Object.defineProperty(dhr, "__esModule", { value: !0 });
  dhr.createBufferedReadable = eDa;
  var XTa = Ae("node:stream"),
    Ggi = mhr(),
    vN = Qgi(),
    ZTa = _$();
  function eDa(t, e, r) {
    if ((0, ZTa.isReadableStream)(t)) return (0, vN.createBufferedReadableStream)(t, e, r);
    let n = new XTa.Readable({ read() {} }),
      o = !1,
      s = 0,
      a = [
        "",
        new Ggi.ByteArrayCollector((c) => new Uint8Array(c)),
        new Ggi.ByteArrayCollector((c) => Buffer.from(new Uint8Array(c))),
      ],
      u = -1;
    return (
      t.on("data", (c) => {
        let m = (0, vN.modeOf)(c, !0);
        if ((u !== m && (u >= 0 && n.push((0, vN.flush)(a, u)), (u = m)), u === -1)) {
          n.push(c);
          return;
        }
        let d = (0, vN.sizeOf)(c);
        s += d;
        let f = (0, vN.sizeOf)(a[u]);
        if (d >= e && f === 0) n.push(c);
        else {
          let p = (0, vN.merge)(a, u, c);
          (!o &&
            s > e * 2 &&
            ((o = !0),
            r?.warn(
              `@smithy/util-stream - stream chunk size ${d} is below threshold of ${e}, automatically buffering.`,
            )),
            p >= e && n.push((0, vN.flush)(a, u)));
        }
      }),
      t.on("end", () => {
        if (u !== -1) {
          let c = (0, vN.flush)(a, u);
          (0, vN.sizeOf)(c) > 0 && n.push(c);
        }
        n.push(null);
      }),
      n
    );
  }
});