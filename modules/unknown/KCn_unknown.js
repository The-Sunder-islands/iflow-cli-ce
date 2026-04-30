/**
 * @module KCn
 * @category unknown
 * @label unknown
 * @position 1030 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (KCn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var KCn = T(($3c, YCn) => {
  "use strict";
  var Oae = Nd(),
    Nae = I6(),
    YVt = _ae(),
    WCn = cXe(),
    RXe = zVt(),
    Y0 = function (t, e) {
      var r = "",
        n;
      for (n = 0; n < e; n++) ((r += String.fromCharCode(t & 255)), (t = t >>> 8));
      return r;
    },
    xCs = function (t, e) {
      var r = t;
      return (t || (r = e ? 16893 : 33204), (r & 65535) << 16);
    },
    TCs = function (t) {
      return (t || 0) & 63;
    },
    zCn = function (t, e, r, n, o, s) {
      var a = t.file,
        u = t.compression,
        c = s !== YVt.utf8encode,
        m = Oae.transformTo("string", s(a.name)),
        d = Oae.transformTo("string", YVt.utf8encode(a.name)),
        f = a.comment,
        p = Oae.transformTo("string", s(f)),
        h = Oae.transformTo("string", YVt.utf8encode(f)),
        g = d.length !== a.name.length,
        b = h.length !== f.length,
        A,
        y,
        E = "",
        v = "",
        C = "",
        x = a.dir,
        k = a.date,
        R = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
      (!e || r) &&
        ((R.crc32 = t.crc32), (R.compressedSize = t.compressedSize), (R.uncompressedSize = t.uncompressedSize));
      var P = 0;
      (e && (P |= 8), !c && (g || b) && (P |= 2048));
      var D = 0,
        O = 0;
      (x && (D |= 16),
        o === "UNIX" ? ((O = 798), (D |= xCs(a.unixPermissions, x))) : ((O = 20), (D |= TCs(a.dosPermissions, x))),
        (A = k.getUTCHours()),
        (A = A << 6),
        (A = A | k.getUTCMinutes()),
        (A = A << 5),
        (A = A | (k.getUTCSeconds() / 2)),
        (y = k.getUTCFullYear() - 1980),
        (y = y << 4),
        (y = y | (k.getUTCMonth() + 1)),
        (y = y << 5),
        (y = y | k.getUTCDate()),
        g && ((v = Y0(1, 1) + Y0(WCn(m), 4) + d), (E += "up" + Y0(v.length, 2) + v)),
        b && ((C = Y0(1, 1) + Y0(WCn(p), 4) + h), (E += "uc" + Y0(C.length, 2) + C)));
      var N = "";
      ((N += `
\0`),
        (N += Y0(P, 2)),
        (N += u.magic),
        (N += Y0(A, 2)),
        (N += Y0(y, 2)),
        (N += Y0(R.crc32, 4)),
        (N += Y0(R.compressedSize, 4)),
        (N += Y0(R.uncompressedSize, 4)),
        (N += Y0(m.length, 2)),
        (N += Y0(E.length, 2)));
      var F = RXe.LOCAL_FILE_HEADER + N + m + E,
        B = RXe.CENTRAL_FILE_HEADER + Y0(O, 2) + N + Y0(p.length, 2) + "\0\0\0\0" + Y0(D, 4) + Y0(n, 4) + m + E + p;
      return { fileRecord: F, dirRecord: B };
    },
    DCs = function (t, e, r, n, o) {
      var s = "",
        a = Oae.transformTo("string", o(n));
      return (
        (s = RXe.CENTRAL_DIRECTORY_END + "\0\0\0\0" + Y0(t, 2) + Y0(t, 2) + Y0(e, 4) + Y0(r, 4) + Y0(a.length, 2) + a),
        s
      );
    },
    ICs = function (t) {
      var e = "";
      return ((e = RXe.DATA_DESCRIPTOR + Y0(t.crc32, 4) + Y0(t.compressedSize, 4) + Y0(t.uncompressedSize, 4)), e);
    };
  function Y4(t, e, r, n) {
    (Nae.call(this, "ZipFileWorker"),
      (this.bytesWritten = 0),
      (this.zipComment = e),
      (this.zipPlatform = r),
      (this.encodeFileName = n),
      (this.streamFiles = t),
      (this.accumulate = !1),
      (this.contentBuffer = []),
      (this.dirRecords = []),
      (this.currentSourceOffset = 0),
      (this.entriesCount = 0),
      (this.currentFile = null),
      (this._sources = []));
  }
  Oae.inherits(Y4, Nae);
  Y4.prototype.push = function (t) {
    var e = t.meta.percent || 0,
      r = this.entriesCount,
      n = this._sources.length;
    this.accumulate
      ? this.contentBuffer.push(t)
      : ((this.bytesWritten += t.data.length),
        Nae.prototype.push.call(this, {
          data: t.data,
          meta: { currentFile: this.currentFile, percent: r ? (e + 100 * (r - n - 1)) / r : 100 },
        }));
  };
  Y4.prototype.openedSource = function (t) {
    ((this.currentSourceOffset = this.bytesWritten), (this.currentFile = t.file.name));
    var e = this.streamFiles && !t.file.dir;
    if (e) {
      var r = zCn(t, e, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
      this.push({ data: r.fileRecord, meta: { percent: 0 } });
    } else this.accumulate = !0;
  };
  Y4.prototype.closedSource = function (t) {
    this.accumulate = !1;
    var e = this.streamFiles && !t.file.dir,
      r = zCn(t, e, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
    if ((this.dirRecords.push(r.dirRecord), e)) this.push({ data: ICs(t), meta: { percent: 100 } });
    else
      for (this.push({ data: r.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
        this.push(this.contentBuffer.shift());
    this.currentFile = null;
  };
  Y4.prototype.flush = function () {
    for (var t = this.bytesWritten, e = 0; e < this.dirRecords.length; e++)
      this.push({ data: this.dirRecords[e], meta: { percent: 100 } });
    var r = this.bytesWritten - t,
      n = DCs(this.dirRecords.length, r, t, this.zipComment, this.encodeFileName);
    this.push({ data: n, meta: { percent: 100 } });
  };
  Y4.prototype.prepareNextSource = function () {
    ((this.previous = this._sources.shift()),
      this.openedSource(this.previous.streamInfo),
      this.isPaused ? this.previous.pause() : this.previous.resume());
  };
  Y4.prototype.registerPrevious = function (t) {
    this._sources.push(t);
    var e = this;
    return (
      t.on("data", function (r) {
        e.processChunk(r);
      }),
      t.on("end", function () {
        (e.closedSource(e.previous.streamInfo), e._sources.length ? e.prepareNextSource() : e.end());
      }),
      t.on("error", function (r) {
        e.error(r);
      }),
      this
    );
  };
  Y4.prototype.resume = function () {
    if (!Nae.prototype.resume.call(this)) return !1;
    if (!this.previous && this._sources.length) return (this.prepareNextSource(), !0);
    if (!this.previous && !this._sources.length && !this.generatedError) return (this.end(), !0);
  };
  Y4.prototype.error = function (t) {
    var e = this._sources;
    if (!Nae.prototype.error.call(this, t)) return !1;
    for (var r = 0; r < e.length; r++)
      try {
        e[r].error(t);
      } catch {}
    return !0;
  };
  Y4.prototype.lock = function () {
    Nae.prototype.lock.call(this);
    for (var t = this._sources, e = 0; e < t.length; e++) t[e].lock();
  };
  YCn.exports = Y4;
});