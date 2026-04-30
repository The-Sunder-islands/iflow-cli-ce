/**
 * @module Lii
 * @category utils/encoding
 * @label encoding
 * @position 1586 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Lii) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Lii = T((Bst) => {
  "use strict";
  var MD = GO().Buffer;
  Bst.utf7 = Nst;
  Bst.unicode11utf7 = "utf7";
  function Nst(t, e) {
    this.iconv = e;
  }
  Nst.prototype.encoder = Tlr;
  Nst.prototype.decoder = Dlr;
  Nst.prototype.bomAware = !0;
  var Lba = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;
  function Tlr(t, e) {
    this.iconv = e.iconv;
  }
  Tlr.prototype.write = function (t) {
    return MD.from(
      t.replace(
        Lba,
        function (e) {
          return "+" + (e === "+" ? "" : this.iconv.encode(e, "utf16-be").toString("base64").replace(/=+$/, "")) + "-";
        }.bind(this),
      ),
    );
  };
  Tlr.prototype.end = function () {};
  function Dlr(t, e) {
    ((this.iconv = e.iconv), (this.inBase64 = !1), (this.base64Accum = ""));
  }
  var Mba = /[A-Za-z0-9\/+]/,
    Ilr = [];
  for ($Ce = 0; $Ce < 256; $Ce++) Ilr[$Ce] = Mba.test(String.fromCharCode($Ce));
  var $Ce,
    Fba = 43,
    bY = 45,
    xlr = 38;
  Dlr.prototype.write = function (t) {
    for (var e = "", r = 0, n = this.inBase64, o = this.base64Accum, s = 0; s < t.length; s++)
      if (!n) t[s] == Fba && ((e += this.iconv.decode(t.slice(r, s), "ascii")), (r = s + 1), (n = !0));
      else if (!Ilr[t[s]]) {
        if (s == r && t[s] == bY) e += "+";
        else {
          var a = o + this.iconv.decode(t.slice(r, s), "ascii");
          e += this.iconv.decode(MD.from(a, "base64"), "utf16-be");
        }
        (t[s] != bY && s--, (r = s + 1), (n = !1), (o = ""));
      }
    if (!n) e += this.iconv.decode(t.slice(r), "ascii");
    else {
      var a = o + this.iconv.decode(t.slice(r), "ascii"),
        u = a.length - (a.length % 8);
      ((o = a.slice(u)), (a = a.slice(0, u)), (e += this.iconv.decode(MD.from(a, "base64"), "utf16-be")));
    }
    return ((this.inBase64 = n), (this.base64Accum = o), e);
  };
  Dlr.prototype.end = function () {
    var t = "";
    return (
      this.inBase64 &&
        this.base64Accum.length > 0 &&
        (t = this.iconv.decode(MD.from(this.base64Accum, "base64"), "utf16-be")),
      (this.inBase64 = !1),
      (this.base64Accum = ""),
      t
    );
  };
  Bst.utf7imap = Pst;
  function Pst(t, e) {
    this.iconv = e;
  }
  Pst.prototype.encoder = Rlr;
  Pst.prototype.decoder = klr;
  Pst.prototype.bomAware = !0;
  function Rlr(t, e) {
    ((this.iconv = e.iconv), (this.inBase64 = !1), (this.base64Accum = MD.alloc(6)), (this.base64AccumIdx = 0));
  }
  Rlr.prototype.write = function (t) {
    for (
      var e = this.inBase64,
        r = this.base64Accum,
        n = this.base64AccumIdx,
        o = MD.alloc(t.length * 5 + 10),
        s = 0,
        a = 0;
      a < t.length;
      a++
    ) {
      var u = t.charCodeAt(a);
      32 <= u && u <= 126
        ? (e &&
            (n > 0 &&
              ((s += o.write(r.slice(0, n).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), s)), (n = 0)),
            (o[s++] = bY),
            (e = !1)),
          e || ((o[s++] = u), u === xlr && (o[s++] = bY)))
        : (e || ((o[s++] = xlr), (e = !0)),
          e &&
            ((r[n++] = u >> 8),
            (r[n++] = u & 255),
            n == r.length && ((s += o.write(r.toString("base64").replace(/\//g, ","), s)), (n = 0))));
    }
    return ((this.inBase64 = e), (this.base64AccumIdx = n), o.slice(0, s));
  };
  Rlr.prototype.end = function () {
    var t = MD.alloc(10),
      e = 0;
    return (
      this.inBase64 &&
        (this.base64AccumIdx > 0 &&
          ((e += t.write(
            this.base64Accum.slice(0, this.base64AccumIdx).toString("base64").replace(/\//g, ",").replace(/=+$/, ""),
            e,
          )),
          (this.base64AccumIdx = 0)),
        (t[e++] = bY),
        (this.inBase64 = !1)),
      t.slice(0, e)
    );
  };
  function klr(t, e) {
    ((this.iconv = e.iconv), (this.inBase64 = !1), (this.base64Accum = ""));
  }
  var Bii = Ilr.slice();
  Bii[44] = !0;
  klr.prototype.write = function (t) {
    for (var e = "", r = 0, n = this.inBase64, o = this.base64Accum, s = 0; s < t.length; s++)
      if (!n) t[s] == xlr && ((e += this.iconv.decode(t.slice(r, s), "ascii")), (r = s + 1), (n = !0));
      else if (!Bii[t[s]]) {
        if (s == r && t[s] == bY) e += "&";
        else {
          var a = o + this.iconv.decode(t.slice(r, s), "ascii").replace(/,/g, "/");
          e += this.iconv.decode(MD.from(a, "base64"), "utf16-be");
        }
        (t[s] != bY && s--, (r = s + 1), (n = !1), (o = ""));
      }
    if (!n) e += this.iconv.decode(t.slice(r), "ascii");
    else {
      var a = o + this.iconv.decode(t.slice(r), "ascii").replace(/,/g, "/"),
        u = a.length - (a.length % 8);
      ((o = a.slice(u)), (a = a.slice(0, u)), (e += this.iconv.decode(MD.from(a, "base64"), "utf16-be")));
    }
    return ((this.inBase64 = n), (this.base64Accum = o), e);
  };
  klr.prototype.end = function () {
    var t = "";
    return (
      this.inBase64 &&
        this.base64Accum.length > 0 &&
        (t = this.iconv.decode(MD.from(this.base64Accum, "base64"), "utf16-be")),
      (this.inBase64 = !1),
      (this.base64Accum = ""),
      t
    );
  };
});