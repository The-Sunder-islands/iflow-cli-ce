/**
 * @module syt
 * @category utils/crypto
 * @label crypto
 * @position 80 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (syt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var syt = T((Q4u, qRr) => {
  "use strict";
  var Nke = EG().Buffer,
    $Rr = FRr(),
    Pke = 128,
    jRr = 0,
    Kpo = 32,
    Jpo = 16,
    Xpo = 2,
    QRr = Jpo | Kpo | (jRr << 6),
    Bke = Xpo | (jRr << 6);
  function Zpo(t) {
    return t.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function GRr(t) {
    if (Nke.isBuffer(t)) return t;
    if (typeof t == "string") return Nke.from(t, "base64");
    throw new TypeError("ECDSA signature must be a Base64 string or a Buffer");
  }
  function eho(t, e) {
    t = GRr(t);
    var r = $Rr(e),
      n = r + 1,
      o = t.length,
      s = 0;
    if (t[s++] !== QRr) throw new Error('Could not find expected "seq"');
    var a = t[s++];
    if ((a === (Pke | 1) && (a = t[s++]), o - s < a))
      throw new Error('"seq" specified length of "' + a + '", only "' + (o - s) + '" remaining');
    if (t[s++] !== Bke) throw new Error('Could not find expected "int" for "r"');
    var u = t[s++];
    if (o - s - 2 < u) throw new Error('"r" specified length of "' + u + '", only "' + (o - s - 2) + '" available');
    if (n < u) throw new Error('"r" specified length of "' + u + '", max of "' + n + '" is acceptable');
    var c = s;
    if (((s += u), t[s++] !== Bke)) throw new Error('Could not find expected "int" for "s"');
    var m = t[s++];
    if (o - s !== m) throw new Error('"s" specified length of "' + m + '", expected "' + (o - s) + '"');
    if (n < m) throw new Error('"s" specified length of "' + m + '", max of "' + n + '" is acceptable');
    var d = s;
    if (((s += m), s !== o)) throw new Error('Expected to consume entire buffer, but "' + (o - s) + '" bytes remain');
    var f = r - u,
      p = r - m,
      h = Nke.allocUnsafe(f + u + p + m);
    for (s = 0; s < f; ++s) h[s] = 0;
    (t.copy(h, s, c + Math.max(-f, 0), c + u), (s = r));
    for (var g = s; s < g + p; ++s) h[s] = 0;
    return (t.copy(h, s, d + Math.max(-p, 0), d + m), (h = h.toString("base64")), (h = Zpo(h)), h);
  }
  function URr(t, e, r) {
    for (var n = 0; e + n < r && t[e + n] === 0; ) ++n;
    var o = t[e + n] >= Pke;
    return (o && --n, n);
  }
  function tho(t, e) {
    t = GRr(t);
    var r = $Rr(e),
      n = t.length;
    if (n !== r * 2) throw new TypeError('"' + e + '" signatures must be "' + r * 2 + '" bytes, saw "' + n + '"');
    var o = URr(t, 0, r),
      s = URr(t, r, t.length),
      a = r - o,
      u = r - s,
      c = 2 + a + 1 + 1 + u,
      m = c < Pke,
      d = Nke.allocUnsafe((m ? 2 : 3) + c),
      f = 0;
    return (
      (d[f++] = QRr),
      m ? (d[f++] = c) : ((d[f++] = Pke | 1), (d[f++] = c & 255)),
      (d[f++] = Bke),
      (d[f++] = a),
      o < 0 ? ((d[f++] = 0), (f += t.copy(d, f, 0, r))) : (f += t.copy(d, f, o, r)),
      (d[f++] = Bke),
      (d[f++] = u),
      s < 0 ? ((d[f++] = 0), t.copy(d, f, r)) : t.copy(d, f, r + s),
      d
    );
  }
  qRr.exports = { derToJose: eho, joseToDer: tho };
});