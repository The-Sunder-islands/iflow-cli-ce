/**
 * @module Dii
 * @category utils/oop
 * @label oop
 * @position 1583 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Dii) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Dii = T((ewc, Tii) => {
  "use strict";
  var gY = GO().Buffer;
  Tii.exports = {
    utf8: { type: "_internal", bomAware: !0 },
    cesu8: { type: "_internal", bomAware: !0 },
    unicode11utf8: "utf8",
    ucs2: { type: "_internal", bomAware: !0 },
    utf16le: "ucs2",
    binary: { type: "_internal" },
    base64: { type: "_internal" },
    hex: { type: "_internal" },
    _internal: ulr,
  };
  function ulr(t, e) {
    ((this.enc = t.encodingName),
      (this.bomAware = t.bomAware),
      this.enc === "base64"
        ? (this.encoder = mlr)
        : this.enc === "cesu8" &&
          ((this.enc = "utf8"),
          (this.encoder = dlr),
          gY.from("eda0bdedb2a9", "hex").toString() !== "\u{1F4A9}" &&
            ((this.decoder = flr), (this.defaultCharUnicode = e.defaultCharUnicode))));
  }
  ulr.prototype.encoder = llr;
  ulr.prototype.decoder = clr;
  var alr = Ae("string_decoder").StringDecoder;
  alr.prototype.end || (alr.prototype.end = function () {});
  function clr(t, e) {
    this.decoder = new alr(e.enc);
  }
  clr.prototype.write = function (t) {
    return (gY.isBuffer(t) || (t = gY.from(t)), this.decoder.write(t));
  };
  clr.prototype.end = function () {
    return this.decoder.end();
  };
  function llr(t, e) {
    this.enc = e.enc;
  }
  llr.prototype.write = function (t) {
    return gY.from(t, this.enc);
  };
  llr.prototype.end = function () {};
  function mlr(t, e) {
    this.prevStr = "";
  }
  mlr.prototype.write = function (t) {
    t = this.prevStr + t;
    var e = t.length - (t.length % 4);
    return ((this.prevStr = t.slice(e)), (t = t.slice(0, e)), gY.from(t, "base64"));
  };
  mlr.prototype.end = function () {
    return gY.from(this.prevStr, "base64");
  };
  function dlr(t, e) {}
  dlr.prototype.write = function (t) {
    for (var e = gY.alloc(t.length * 3), r = 0, n = 0; n < t.length; n++) {
      var o = t.charCodeAt(n);
      o < 128
        ? (e[r++] = o)
        : o < 2048
          ? ((e[r++] = 192 + (o >>> 6)), (e[r++] = 128 + (o & 63)))
          : ((e[r++] = 224 + (o >>> 12)), (e[r++] = 128 + ((o >>> 6) & 63)), (e[r++] = 128 + (o & 63)));
    }
    return e.slice(0, r);
  };
  dlr.prototype.end = function () {};
  function flr(t, e) {
    ((this.acc = 0), (this.contBytes = 0), (this.accBytes = 0), (this.defaultCharUnicode = e.defaultCharUnicode));
  }
  flr.prototype.write = function (t) {
    for (var e = this.acc, r = this.contBytes, n = this.accBytes, o = "", s = 0; s < t.length; s++) {
      var a = t[s];
      (a & 192) !== 128
        ? (r > 0 && ((o += this.defaultCharUnicode), (r = 0)),
          a < 128
            ? (o += String.fromCharCode(a))
            : a < 224
              ? ((e = a & 31), (r = 1), (n = 1))
              : a < 240
                ? ((e = a & 15), (r = 2), (n = 1))
                : (o += this.defaultCharUnicode))
        : r > 0
          ? ((e = (e << 6) | (a & 63)),
            r--,
            n++,
            r === 0 &&
              (n === 2 && e < 128 && e > 0
                ? (o += this.defaultCharUnicode)
                : n === 3 && e < 2048
                  ? (o += this.defaultCharUnicode)
                  : (o += String.fromCharCode(e))))
          : (o += this.defaultCharUnicode);
    }
    return ((this.acc = e), (this.contBytes = r), (this.accBytes = n), o);
  };
  flr.prototype.end = function () {
    var t = 0;
    return (this.contBytes > 0 && (t += this.defaultCharUnicode), t);
  };
});