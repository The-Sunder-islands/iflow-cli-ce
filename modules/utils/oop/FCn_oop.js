/**
 * @module FCn
 * @category utils/oop
 * @label oop
 * @position 1025 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (FCn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var FCn = T((P3c, MCn) => {
  "use strict";
  function hCs() {
    ((this.text = 0),
      (this.time = 0),
      (this.xflags = 0),
      (this.os = 0),
      (this.extra = null),
      (this.extra_len = 0),
      (this.name = ""),
      (this.comment = ""),
      (this.hcrc = 0),
      (this.done = !1));
  }
  MCn.exports = hCs;
});
var $Cn = T((lye) => {
  "use strict";
  var kae = BCn(),
    cye = $k(),
    TXe = DVt(),
    ef = GVt(),
    qVt = pXe(),
    gCs = IVt(),
    bCs = FCn(),
    UCn = Object.prototype.toString;
  function tW(t) {
    if (!(this instanceof tW)) return new tW(t);
    this.options = cye.assign({ chunkSize: 16384, windowBits: 0, to: "" }, t || {});
    var e = this.options;
    (e.raw &&
      e.windowBits >= 0 &&
      e.windowBits < 16 &&
      ((e.windowBits = -e.windowBits), e.windowBits === 0 && (e.windowBits = -15)),
      e.windowBits >= 0 && e.windowBits < 16 && !(t && t.windowBits) && (e.windowBits += 32),
      e.windowBits > 15 && e.windowBits < 48 && (e.windowBits & 15) === 0 && (e.windowBits |= 15),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new gCs()),
      (this.strm.avail_out = 0));
    var r = kae.inflateInit2(this.strm, e.windowBits);
    if (r !== ef.Z_OK) throw new Error(qVt[r]);
    if (
      ((this.header = new bCs()),
      kae.inflateGetHeader(this.strm, this.header),
      e.dictionary &&
        (typeof e.dictionary == "string"
          ? (e.dictionary = TXe.string2buf(e.dictionary))
          : UCn.call(e.dictionary) === "[object ArrayBuffer]" && (e.dictionary = new Uint8Array(e.dictionary)),
        e.raw && ((r = kae.inflateSetDictionary(this.strm, e.dictionary)), r !== ef.Z_OK)))
    )
      throw new Error(qVt[r]);
  }
  tW.prototype.push = function (t, e) {
    var r = this.strm,
      n = this.options.chunkSize,
      o = this.options.dictionary,
      s,
      a,
      u,
      c,
      m,
      d = !1;
    if (this.ended) return !1;
    ((a = e === ~~e ? e : e === !0 ? ef.Z_FINISH : ef.Z_NO_FLUSH),
      typeof t == "string"
        ? (r.input = TXe.binstring2buf(t))
        : UCn.call(t) === "[object ArrayBuffer]"
          ? (r.input = new Uint8Array(t))
          : (r.input = t),
      (r.next_in = 0),
      (r.avail_in = r.input.length));
    do {
      if (
        (r.avail_out === 0 && ((r.output = new cye.Buf8(n)), (r.next_out = 0), (r.avail_out = n)),
        (s = kae.inflate(r, ef.Z_NO_FLUSH)),
        s === ef.Z_NEED_DICT && o && (s = kae.inflateSetDictionary(this.strm, o)),
        s === ef.Z_BUF_ERROR && d === !0 && ((s = ef.Z_OK), (d = !1)),
        s !== ef.Z_STREAM_END && s !== ef.Z_OK)
      )
        return (this.onEnd(s), (this.ended = !0), !1);
      (r.next_out &&
        (r.avail_out === 0 ||
          s === ef.Z_STREAM_END ||
          (r.avail_in === 0 && (a === ef.Z_FINISH || a === ef.Z_SYNC_FLUSH))) &&
        (this.options.to === "string"
          ? ((u = TXe.utf8border(r.output, r.next_out)),
            (c = r.next_out - u),
            (m = TXe.buf2string(r.output, u)),
            (r.next_out = c),
            (r.avail_out = n - c),
            c && cye.arraySet(r.output, r.output, u, c, 0),
            this.onData(m))
          : this.onData(cye.shrinkBuf(r.output, r.next_out))),
        r.avail_in === 0 && r.avail_out === 0 && (d = !0));
    } while ((r.avail_in > 0 || r.avail_out === 0) && s !== ef.Z_STREAM_END);
    return (
      s === ef.Z_STREAM_END && (a = ef.Z_FINISH),
      a === ef.Z_FINISH
        ? ((s = kae.inflateEnd(this.strm)), this.onEnd(s), (this.ended = !0), s === ef.Z_OK)
        : (a === ef.Z_SYNC_FLUSH && (this.onEnd(ef.Z_OK), (r.avail_out = 0)), !0)
    );
  };
  tW.prototype.onData = function (t) {
    this.chunks.push(t);
  };
  tW.prototype.onEnd = function (t) {
    (t === ef.Z_OK &&
      (this.options.to === "string"
        ? (this.result = this.chunks.join(""))
        : (this.result = cye.flattenChunks(this.chunks))),
      (this.chunks = []),
      (this.err = t),
      (this.msg = this.strm.msg));
  };
  function HVt(t, e) {
    var r = new tW(e);
    if ((r.push(t, !0), r.err)) throw r.msg || qVt[r.err];
    return r.result;
  }
  function ACs(t, e) {
    return ((e = e || {}), (e.raw = !0), HVt(t, e));
  }
  lye.Inflate = tW;
  lye.inflate = HVt;
  lye.inflateRaw = ACs;
  lye.ungzip = HVt;
});