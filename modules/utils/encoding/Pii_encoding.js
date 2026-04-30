/**
 * @module Pii
 * @category utils/encoding
 * @label encoding
 * @position 1585 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Pii) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Pii = T((wlr) => {
  "use strict";
  var Oii = GO().Buffer;
  wlr.utf16be = Ost;
  function Ost() {}
  Ost.prototype.encoder = _lr;
  Ost.prototype.decoder = Elr;
  Ost.prototype.bomAware = !0;
  function _lr() {}
  _lr.prototype.write = function (t) {
    for (var e = Oii.from(t, "ucs2"), r = 0; r < e.length; r += 2) {
      var n = e[r];
      ((e[r] = e[r + 1]), (e[r + 1] = n));
    }
    return e;
  };
  _lr.prototype.end = function () {};
  function Elr() {
    this.overflowByte = -1;
  }
  Elr.prototype.write = function (t) {
    if (t.length == 0) return "";
    var e = Oii.alloc(t.length + 1),
      r = 0,
      n = 0;
    for (
      this.overflowByte !== -1 && ((e[0] = t[0]), (e[1] = this.overflowByte), (r = 1), (n = 2));
      r < t.length - 1;
      r += 2, n += 2
    )
      ((e[n] = t[r + 1]), (e[n + 1] = t[r]));
    return ((this.overflowByte = r == t.length - 1 ? t[t.length - 1] : -1), e.slice(0, n).toString("ucs2"));
  };
  Elr.prototype.end = function () {
    this.overflowByte = -1;
  };
  wlr.utf16 = vlr;
  function vlr(t, e) {
    this.iconv = e;
  }
  vlr.prototype.encoder = Clr;
  vlr.prototype.decoder = Slr;
  function Clr(t, e) {
    ((t = t || {}), t.addBOM === void 0 && (t.addBOM = !0), (this.encoder = e.iconv.getEncoder("utf-16le", t)));
  }
  Clr.prototype.write = function (t) {
    return this.encoder.write(t);
  };
  Clr.prototype.end = function () {
    return this.encoder.end();
  };
  function Slr(t, e) {
    ((this.decoder = null),
      (this.initialBufs = []),
      (this.initialBufsLen = 0),
      (this.options = t || {}),
      (this.iconv = e.iconv));
  }
  Slr.prototype.write = function (t) {
    if (!this.decoder) {
      if ((this.initialBufs.push(t), (this.initialBufsLen += t.length), this.initialBufsLen < 16)) return "";
      var e = Nii(this.initialBufs, this.options.defaultEncoding);
      this.decoder = this.iconv.getDecoder(e, this.options);
      for (var r = "", n = 0; n < this.initialBufs.length; n++) r += this.decoder.write(this.initialBufs[n]);
      return ((this.initialBufs.length = this.initialBufsLen = 0), r);
    }
    return this.decoder.write(t);
  };
  Slr.prototype.end = function () {
    if (!this.decoder) {
      var t = Nii(this.initialBufs, this.options.defaultEncoding);
      this.decoder = this.iconv.getDecoder(t, this.options);
      for (var e = "", r = 0; r < this.initialBufs.length; r++) e += this.decoder.write(this.initialBufs[r]);
      var n = this.decoder.end();
      return (n && (e += n), (this.initialBufs.length = this.initialBufsLen = 0), e);
    }
    return this.decoder.end();
  };
  function Nii(t, e) {
    var r = [],
      n = 0,
      o = 0,
      s = 0;
    e: for (var a = 0; a < t.length; a++)
      for (var u = t[a], c = 0; c < u.length; c++)
        if ((r.push(u[c]), r.length === 2)) {
          if (n === 0) {
            if (r[0] === 255 && r[1] === 254) return "utf-16le";
            if (r[0] === 254 && r[1] === 255) return "utf-16be";
          }
          if ((r[0] === 0 && r[1] !== 0 && s++, r[0] !== 0 && r[1] === 0 && o++, (r.length = 0), n++, n >= 100))
            break e;
        }
    return s > o ? "utf-16be" : s < o ? "utf-16le" : e || "utf-16le";
  }
});