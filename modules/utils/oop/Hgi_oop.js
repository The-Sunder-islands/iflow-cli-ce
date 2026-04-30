/**
 * @module Hgi
 * @category utils/oop
 * @label oop
 * @position 1722 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Hgi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Hgi = T((Ult) => {
  "use strict";
  Object.defineProperty(Ult, "__esModule", { value: !0 });
  Ult.getAwsChunkedEncodingStream = void 0;
  var tDa = Ae("stream"),
    rDa = (t, e) => {
      let {
          base64Encoder: r,
          bodyLengthChecker: n,
          checksumAlgorithmFn: o,
          checksumLocationName: s,
          streamHasher: a,
        } = e,
        u = r !== void 0 && o !== void 0 && s !== void 0 && a !== void 0,
        c = u ? a(o, t) : void 0,
        m = new tDa.Readable({ read: () => {} });
      return (
        t.on("data", (d) => {
          let f = n(d) || 0;
          (m.push(`${f.toString(16)}\r
`),
            m.push(d),
            m.push(`\r
`));
        }),
        t.on("end", async () => {
          if (
            (m.push(`0\r
`),
            u)
          ) {
            let d = r(await c);
            (m.push(`${s}:${d}\r
`),
              m.push(`\r
`));
          }
          m.push(null);
        }),
        m
      );
    };
  Ult.getAwsChunkedEncodingStream = rDa;
});