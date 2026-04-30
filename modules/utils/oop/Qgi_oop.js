/**
 * @module Qgi
 * @category utils/oop
 * @label oop
 * @position 1720 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Qgi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Qgi = T((EN) => {
  "use strict";
  Object.defineProperty(EN, "__esModule", { value: !0 });
  EN.createBufferedReadable = void 0;
  EN.createBufferedReadableStream = Ugi;
  EN.merge = $gi;
  EN.flush = Flt;
  EN.sizeOf = wme;
  EN.modeOf = jgi;
  var JTa = mhr();
  function Ugi(t, e, r) {
    let n = t.getReader(),
      o = !1,
      s = 0,
      a = ["", new JTa.ByteArrayCollector((m) => new Uint8Array(m))],
      u = -1,
      c = async (m) => {
        let { value: d, done: f } = await n.read(),
          p = d;
        if (f) {
          if (u !== -1) {
            let h = Flt(a, u);
            wme(h) > 0 && m.enqueue(h);
          }
          m.close();
        } else {
          let h = jgi(p, !1);
          if ((u !== h && (u >= 0 && m.enqueue(Flt(a, u)), (u = h)), u === -1)) {
            m.enqueue(p);
            return;
          }
          let g = wme(p);
          s += g;
          let b = wme(a[u]);
          if (g >= e && b === 0) m.enqueue(p);
          else {
            let A = $gi(a, u, p);
            (!o &&
              s > e * 2 &&
              ((o = !0),
              r?.warn(
                `@smithy/util-stream - stream chunk size ${g} is below threshold of ${e}, automatically buffering.`,
              )),
              A >= e ? m.enqueue(Flt(a, u)) : await c(m));
          }
        }
      };
    return new ReadableStream({ pull: c });
  }
  EN.createBufferedReadable = Ugi;
  function $gi(t, e, r) {
    switch (e) {
      case 0:
        return ((t[0] += r), wme(t[0]));
      case 1:
      case 2:
        return (t[e].push(r), wme(t[e]));
    }
  }
  function Flt(t, e) {
    switch (e) {
      case 0:
        let r = t[0];
        return ((t[0] = ""), r);
      case 1:
      case 2:
        return t[e].flush();
    }
    throw new Error(`@smithy/util-stream - invalid index ${e} given to flush()`);
  }
  function wme(t) {
    return t?.byteLength ?? t?.length ?? 0;
  }
  function jgi(t, e = !0) {
    return e && typeof Buffer < "u" && t instanceof Buffer
      ? 2
      : t instanceof Uint8Array
        ? 1
        : typeof t == "string"
          ? 0
          : -1;
  }
});