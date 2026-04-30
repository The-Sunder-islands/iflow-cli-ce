/**
 * @module kii
 * @category utils/encoding
 * @label encoding
 * @position 1584 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kii) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kii = T((NU) => {
  "use strict";
  var kst = GO().Buffer;
  NU._utf32 = plr;
  function plr(t, e) {
    ((this.iconv = e), (this.bomAware = !0), (this.isLE = t.isLE));
  }
  NU.utf32le = { type: "_utf32", isLE: !0 };
  NU.utf32be = { type: "_utf32", isLE: !1 };
  NU.ucs4le = "utf32le";
  NU.ucs4be = "utf32be";
  plr.prototype.encoder = hlr;
  plr.prototype.decoder = glr;
  function hlr(t, e) {
    ((this.isLE = e.isLE), (this.highSurrogate = 0));
  }
  hlr.prototype.write = function (t) {
    for (
      var e = kst.from(t, "ucs2"),
        r = kst.alloc(e.length * 2),
        n = this.isLE ? r.writeUInt32LE : r.writeUInt32BE,
        o = 0,
        s = 0;
      s < e.length;
      s += 2
    ) {
      var a = e.readUInt16LE(s),
        u = 55296 <= a && a < 56320,
        c = 56320 <= a && a < 57344;
      if (this.highSurrogate)
        if (u || !c) (n.call(r, this.highSurrogate, o), (o += 4));
        else {
          var m = (((this.highSurrogate - 55296) << 10) | (a - 56320)) + 65536;
          (n.call(r, m, o), (o += 4), (this.highSurrogate = 0));
          continue;
        }
      u ? (this.highSurrogate = a) : (n.call(r, a, o), (o += 4), (this.highSurrogate = 0));
    }
    return (o < r.length && (r = r.slice(0, o)), r);
  };
  hlr.prototype.end = function () {
    if (this.highSurrogate) {
      var t = kst.alloc(4);
      return (
        this.isLE ? t.writeUInt32LE(this.highSurrogate, 0) : t.writeUInt32BE(this.highSurrogate, 0),
        (this.highSurrogate = 0),
        t
      );
    }
  };
  function glr(t, e) {
    ((this.isLE = e.isLE), (this.badChar = e.iconv.defaultCharUnicode.charCodeAt(0)), (this.overflow = []));
  }
  glr.prototype.write = function (t) {
    if (t.length === 0) return "";
    var e = 0,
      r = 0,
      n = kst.alloc(t.length + 4),
      o = 0,
      s = this.isLE,
      a = this.overflow,
      u = this.badChar;
    if (a.length > 0) {
      for (; e < t.length && a.length < 4; e++) a.push(t[e]);
      a.length === 4 &&
        (s
          ? (r = a[e] | (a[e + 1] << 8) | (a[e + 2] << 16) | (a[e + 3] << 24))
          : (r = a[e + 3] | (a[e + 2] << 8) | (a[e + 1] << 16) | (a[e] << 24)),
        (a.length = 0),
        (o = Iii(n, o, r, u)));
    }
    for (; e < t.length - 3; e += 4)
      (s
        ? (r = t[e] | (t[e + 1] << 8) | (t[e + 2] << 16) | (t[e + 3] << 24))
        : (r = t[e + 3] | (t[e + 2] << 8) | (t[e + 1] << 16) | (t[e] << 24)),
        (o = Iii(n, o, r, u)));
    for (; e < t.length; e++) a.push(t[e]);
    return n.slice(0, o).toString("ucs2");
  };
  function Iii(t, e, r, n) {
    if (((r < 0 || r > 1114111) && (r = n), r >= 65536)) {
      r -= 65536;
      var o = 55296 | (r >> 10);
      ((t[e++] = o & 255), (t[e++] = o >> 8));
      var r = 56320 | (r & 1023);
    }
    return ((t[e++] = r & 255), (t[e++] = r >> 8), e);
  }
  glr.prototype.end = function () {
    this.overflow.length = 0;
  };
  NU.utf32 = blr;
  NU.ucs4 = "utf32";
  function blr(t, e) {
    this.iconv = e;
  }
  blr.prototype.encoder = Alr;
  blr.prototype.decoder = ylr;
  function Alr(t, e) {
    ((t = t || {}),
      t.addBOM === void 0 && (t.addBOM = !0),
      (this.encoder = e.iconv.getEncoder(t.defaultEncoding || "utf-32le", t)));
  }
  Alr.prototype.write = function (t) {
    return this.encoder.write(t);
  };
  Alr.prototype.end = function () {
    return this.encoder.end();
  };
  function ylr(t, e) {
    ((this.decoder = null),
      (this.initialBufs = []),
      (this.initialBufsLen = 0),
      (this.options = t || {}),
      (this.iconv = e.iconv));
  }
  ylr.prototype.write = function (t) {
    if (!this.decoder) {
      if ((this.initialBufs.push(t), (this.initialBufsLen += t.length), this.initialBufsLen < 32)) return "";
      var e = Rii(this.initialBufs, this.options.defaultEncoding);
      this.decoder = this.iconv.getDecoder(e, this.options);
      for (var r = "", n = 0; n < this.initialBufs.length; n++) r += this.decoder.write(this.initialBufs[n]);
      return ((this.initialBufs.length = this.initialBufsLen = 0), r);
    }
    return this.decoder.write(t);
  };
  ylr.prototype.end = function () {
    if (!this.decoder) {
      var t = Rii(this.initialBufs, this.options.defaultEncoding);
      this.decoder = this.iconv.getDecoder(t, this.options);
      for (var e = "", r = 0; r < this.initialBufs.length; r++) e += this.decoder.write(this.initialBufs[r]);
      var n = this.decoder.end();
      return (n && (e += n), (this.initialBufs.length = this.initialBufsLen = 0), e);
    }
    return this.decoder.end();
  };
  function Rii(t, e) {
    var r = [],
      n = 0,
      o = 0,
      s = 0,
      a = 0,
      u = 0;
    e: for (var c = 0; c < t.length; c++)
      for (var m = t[c], d = 0; d < m.length; d++)
        if ((r.push(m[d]), r.length === 4)) {
          if (n === 0) {
            if (r[0] === 255 && r[1] === 254 && r[2] === 0 && r[3] === 0) return "utf-32le";
            if (r[0] === 0 && r[1] === 0 && r[2] === 254 && r[3] === 255) return "utf-32be";
          }
          if (
            ((r[0] !== 0 || r[1] > 16) && s++,
            (r[3] !== 0 || r[2] > 16) && o++,
            r[0] === 0 && r[1] === 0 && (r[2] !== 0 || r[3] !== 0) && u++,
            (r[0] !== 0 || r[1] !== 0) && r[2] === 0 && r[3] === 0 && a++,
            (r.length = 0),
            n++,
            n >= 100)
          )
            break e;
        }
    return u - s > a - o ? "utf-32be" : u - s < a - o ? "utf-32le" : e || "utf-32le";
  }
});