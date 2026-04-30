/**
 * @module rvn
 * @category utils/oop
 * @label oop
 * @position 1012 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (rvn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var rvn = T((_3c, tvn) => {
  "use strict";
  var DEs = eVt(),
    IEs = rVt(),
    cVt = _ae(),
    lVt = lXe(),
    ZEn = I6(),
    mVt = function (t, e, r) {
      ((this.name = t),
        (this.dir = r.dir),
        (this.date = r.date),
        (this.comment = r.comment),
        (this.unixPermissions = r.unixPermissions),
        (this.dosPermissions = r.dosPermissions),
        (this._data = e),
        (this._dataBinary = r.binary),
        (this.options = { compression: r.compression, compressionOptions: r.compressionOptions }));
    };
  mVt.prototype = {
    internalStream: function (t) {
      var e = null,
        r = "string";
      try {
        if (!t) throw new Error("No output type specified.");
        r = t.toLowerCase();
        var n = r === "string" || r === "text";
        ((r === "binarystring" || r === "text") && (r = "string"), (e = this._decompressWorker()));
        var o = !this._dataBinary;
        (o && !n && (e = e.pipe(new cVt.Utf8EncodeWorker())), !o && n && (e = e.pipe(new cVt.Utf8DecodeWorker())));
      } catch (s) {
        ((e = new ZEn("error")), e.error(s));
      }
      return new DEs(e, r, "");
    },
    async: function (t, e) {
      return this.internalStream(t).accumulate(e);
    },
    nodeStream: function (t, e) {
      return this.internalStream(t || "nodebuffer").toNodejsStream(e);
    },
    _compressWorker: function (t, e) {
      if (this._data instanceof lVt && this._data.compression.magic === t.magic)
        return this._data.getCompressedWorker();
      var r = this._decompressWorker();
      return (this._dataBinary || (r = r.pipe(new cVt.Utf8EncodeWorker())), lVt.createWorkerFrom(r, t, e));
    },
    _decompressWorker: function () {
      return this._data instanceof lVt
        ? this._data.getContentWorker()
        : this._data instanceof ZEn
          ? this._data
          : new IEs(this._data);
    },
  };
  var evn = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"],
    REs = function () {
      throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    };
  for (mXe = 0; mXe < evn.length; mXe++) mVt.prototype[evn[mXe]] = REs;
  var mXe;
  tvn.exports = mVt;
});
var $k = T((N2) => {
  "use strict";
  var kEs = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
  function OEs(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  N2.assign = function (t) {
    for (var e = Array.prototype.slice.call(arguments, 1); e.length; ) {
      var r = e.shift();
      if (r) {
        if (typeof r != "object") throw new TypeError(r + "must be non-object");
        for (var n in r) OEs(r, n) && (t[n] = r[n]);
      }
    }
    return t;
  };
  N2.shrinkBuf = function (t, e) {
    return t.length === e ? t : t.subarray ? t.subarray(0, e) : ((t.length = e), t);
  };
  var NEs = {
      arraySet: function (t, e, r, n, o) {
        if (e.subarray && t.subarray) {
          t.set(e.subarray(r, r + n), o);
          return;
        }
        for (var s = 0; s < n; s++) t[o + s] = e[r + s];
      },
      flattenChunks: function (t) {
        var e, r, n, o, s, a;
        for (n = 0, e = 0, r = t.length; e < r; e++) n += t[e].length;
        for (a = new Uint8Array(n), o = 0, e = 0, r = t.length; e < r; e++) ((s = t[e]), a.set(s, o), (o += s.length));
        return a;
      },
    },
    PEs = {
      arraySet: function (t, e, r, n, o) {
        for (var s = 0; s < n; s++) t[o + s] = e[r + s];
      },
      flattenChunks: function (t) {
        return [].concat.apply([], t);
      },
    };
  N2.setTyped = function (t) {
    t
      ? ((N2.Buf8 = Uint8Array), (N2.Buf16 = Uint16Array), (N2.Buf32 = Int32Array), N2.assign(N2, NEs))
      : ((N2.Buf8 = Array), (N2.Buf16 = Array), (N2.Buf32 = Array), N2.assign(N2, PEs));
  };
  N2.setTyped(kEs);
});