/**
 * @module Hvn
 * @category utils/oop
 * @label oop
 * @position 1020 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Hvn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Hvn = T((aye) => {
  "use strict";
  var oye = Mvn(),
    sye = $k(),
    kVt = DVt(),
    OVt = pXe(),
    Uvs = IVt(),
    qvn = Object.prototype.toString,
    $vs = 0,
    RVt = 4,
    Iae = 0,
    Qvn = 1,
    Gvn = 2,
    jvs = -1,
    Qvs = 0,
    Gvs = 8;
  function ZV(t) {
    if (!(this instanceof ZV)) return new ZV(t);
    this.options = sye.assign(
      { level: jvs, method: Gvs, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: Qvs, to: "" },
      t || {},
    );
    var e = this.options;
    (e.raw && e.windowBits > 0
      ? (e.windowBits = -e.windowBits)
      : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new Uvs()),
      (this.strm.avail_out = 0));
    var r = oye.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
    if (r !== Iae) throw new Error(OVt[r]);
    if ((e.header && oye.deflateSetHeader(this.strm, e.header), e.dictionary)) {
      var n;
      if (
        (typeof e.dictionary == "string"
          ? (n = kVt.string2buf(e.dictionary))
          : qvn.call(e.dictionary) === "[object ArrayBuffer]"
            ? (n = new Uint8Array(e.dictionary))
            : (n = e.dictionary),
        (r = oye.deflateSetDictionary(this.strm, n)),
        r !== Iae)
      )
        throw new Error(OVt[r]);
      this._dict_set = !0;
    }
  }
  ZV.prototype.push = function (t, e) {
    var r = this.strm,
      n = this.options.chunkSize,
      o,
      s;
    if (this.ended) return !1;
    ((s = e === ~~e ? e : e === !0 ? RVt : $vs),
      typeof t == "string"
        ? (r.input = kVt.string2buf(t))
        : qvn.call(t) === "[object ArrayBuffer]"
          ? (r.input = new Uint8Array(t))
          : (r.input = t),
      (r.next_in = 0),
      (r.avail_in = r.input.length));
    do {
      if (
        (r.avail_out === 0 && ((r.output = new sye.Buf8(n)), (r.next_out = 0), (r.avail_out = n)),
        (o = oye.deflate(r, s)),
        o !== Qvn && o !== Iae)
      )
        return (this.onEnd(o), (this.ended = !0), !1);
      (r.avail_out === 0 || (r.avail_in === 0 && (s === RVt || s === Gvn))) &&
        (this.options.to === "string"
          ? this.onData(kVt.buf2binstring(sye.shrinkBuf(r.output, r.next_out)))
          : this.onData(sye.shrinkBuf(r.output, r.next_out)));
    } while ((r.avail_in > 0 || r.avail_out === 0) && o !== Qvn);
    return s === RVt
      ? ((o = oye.deflateEnd(this.strm)), this.onEnd(o), (this.ended = !0), o === Iae)
      : (s === Gvn && (this.onEnd(Iae), (r.avail_out = 0)), !0);
  };
  ZV.prototype.onData = function (t) {
    this.chunks.push(t);
  };
  ZV.prototype.onEnd = function (t) {
    (t === Iae &&
      (this.options.to === "string"
        ? (this.result = this.chunks.join(""))
        : (this.result = sye.flattenChunks(this.chunks))),
      (this.chunks = []),
      (this.err = t),
      (this.msg = this.strm.msg));
  };
  function NVt(t, e) {
    var r = new ZV(e);
    if ((r.push(t, !0), r.err)) throw r.msg || OVt[r.err];
    return r.result;
  }
  function qvs(t, e) {
    return ((e = e || {}), (e.raw = !0), NVt(t, e));
  }
  function Hvs(t, e) {
    return ((e = e || {}), (e.gzip = !0), NVt(t, e));
  }
  aye.Deflate = ZV;
  aye.deflate = NVt;
  aye.deflateRaw = qvs;
  aye.gzip = Hvs;
});