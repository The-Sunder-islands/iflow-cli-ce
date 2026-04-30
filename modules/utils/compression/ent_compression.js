/**
 * @module ent
 * @category utils/compression
 * @label compression
 * @position 1427 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ent) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ent = T((C6c, eGn) => {
  var JJs = Ae("util"),
    XJs = Ae("zlib"),
    EEe = Ae("stream"),
    vEe = lEe(),
    Krr = zF(),
    JQn = Yrt(),
    ZJs = WQn(),
    eXs = Jrt(),
    tXs = Xrt(),
    XQn = fce(),
    rXs = Zrt();
  (!EEe.Writable || !EEe.Writable.prototype.destroy) && (EEe = bO());
  var ZQn = XQn.alloc(4);
  ZQn.writeUInt32LE(101010256, 0);
  function aS(t) {
    if (!(this instanceof aS)) return new aS(t);
    var e = this;
    ((e._opts = t || { verbose: !1 }),
      JQn.call(e, e._opts),
      e.on("finish", function () {
        (e.emit("end"), e.emit("close"));
      }),
      e._readRecord().catch(function (r) {
        (!e.__emittedError || e.__emittedError !== r) && e.emit("error", r);
      }));
  }
  JJs.inherits(aS, JQn);
  aS.prototype._readRecord = function () {
    var t = this;
    return t.pull(4).then(function (e) {
      if (e.length !== 0) {
        var r = e.readUInt32LE(0);
        if (r === 875721283) return t._readCrxHeader();
        if (r === 67324752) return t._readFile();
        if (r === 33639248) return ((t.reachedCD = !0), t._readCentralDirectoryFileHeader());
        if (r === 101010256) return t._readEndOfCentralDirectoryRecord();
        if (t.reachedCD) {
          var n = !0;
          return t.pull(ZQn, n).then(function () {
            return t._readEndOfCentralDirectoryRecord();
          });
        } else t.emit("error", new Error("invalid signature: 0x" + r.toString(16)));
      }
    });
  };
  aS.prototype._readCrxHeader = function () {
    var t = this;
    return t
      .pull(12)
      .then(function (e) {
        return (
          (t.crxHeader = vEe.parse(e).word32lu("version").word32lu("pubKeyLength").word32lu("signatureLength").vars),
          t.pull(t.crxHeader.pubKeyLength + t.crxHeader.signatureLength)
        );
      })
      .then(function (e) {
        return (
          (t.crxHeader.publicKey = e.slice(0, t.crxHeader.pubKeyLength)),
          (t.crxHeader.signature = e.slice(t.crxHeader.pubKeyLength)),
          t.emit("crx-header", t.crxHeader),
          t._readRecord()
        );
      });
  };
  aS.prototype._readFile = function () {
    var t = this;
    return t.pull(26).then(function (e) {
      var r = vEe
        .parse(e)
        .word16lu("versionsNeededToExtract")
        .word16lu("flags")
        .word16lu("compressionMethod")
        .word16lu("lastModifiedTime")
        .word16lu("lastModifiedDate")
        .word32lu("crc32")
        .word32lu("compressedSize")
        .word32lu("uncompressedSize")
        .word16lu("fileNameLength")
        .word16lu("extraFieldLength").vars;
      return (
        (r.lastModifiedDateTime = rXs(r.lastModifiedDate, r.lastModifiedTime)),
        t.crxHeader && (r.crxHeader = t.crxHeader),
        t.pull(r.fileNameLength).then(function (n) {
          var o = n.toString("utf8"),
            s = EEe.PassThrough(),
            a = !1;
          return (
            (s.autodrain = function () {
              a = !0;
              var u = s.pipe(ZJs());
              return (
                (u.promise = function () {
                  return new Krr(function (c, m) {
                    (u.on("finish", c), u.on("error", m));
                  });
                }),
                u
              );
            }),
            (s.buffer = function () {
              return eXs(s);
            }),
            (s.path = o),
            (s.props = {}),
            (s.props.path = o),
            (s.props.pathBuffer = n),
            (s.props.flags = { isUnicode: (r.flags & 2048) != 0 }),
            (s.type = r.uncompressedSize === 0 && /[\/\\]$/.test(o) ? "Directory" : "File"),
            t._opts.verbose &&
              (s.type === "Directory"
                ? console.log("   creating:", o)
                : s.type === "File" &&
                  (r.compressionMethod === 0 ? console.log(" extracting:", o) : console.log("  inflating:", o))),
            t.pull(r.extraFieldLength).then(function (u) {
              var c = tXs(u, r);
              ((s.vars = r),
                (s.extra = c),
                t._opts.forceStream
                  ? t.push(s)
                  : (t.emit("entry", s),
                    (t._readableState.pipesCount || (t._readableState.pipes && t._readableState.pipes.length)) &&
                      t.push(s)),
                t._opts.verbose && console.log({ filename: o, vars: r, extra: c }));
              var m = !(r.flags & 8) || r.compressedSize > 0,
                d;
              s.__autodraining = a;
              var f = r.compressionMethod && !a ? XJs.createInflateRaw() : EEe.PassThrough();
              return (
                m
                  ? ((s.size = r.uncompressedSize), (d = r.compressedSize))
                  : ((d = XQn.alloc(4)), d.writeUInt32LE(134695760, 0)),
                new Krr(function (p, h) {
                  t.stream(d)
                    .pipe(f)
                    .on("error", function (g) {
                      t.emit("error", g);
                    })
                    .pipe(s)
                    .on("finish", function () {
                      return m ? t._readRecord().then(p).catch(h) : t._processDataDescriptor(s).then(p).catch(h);
                    });
                })
              );
            })
          );
        })
      );
    });
  };
  aS.prototype._processDataDescriptor = function (t) {
    var e = this;
    return e.pull(16).then(function (r) {
      var n = vEe
        .parse(r)
        .word32lu("dataDescriptorSignature")
        .word32lu("crc32")
        .word32lu("compressedSize")
        .word32lu("uncompressedSize").vars;
      return ((t.size = n.uncompressedSize), e._readRecord());
    });
  };
  aS.prototype._readCentralDirectoryFileHeader = function () {
    var t = this;
    return t.pull(42).then(function (e) {
      var r = vEe
        .parse(e)
        .word16lu("versionMadeBy")
        .word16lu("versionsNeededToExtract")
        .word16lu("flags")
        .word16lu("compressionMethod")
        .word16lu("lastModifiedTime")
        .word16lu("lastModifiedDate")
        .word32lu("crc32")
        .word32lu("compressedSize")
        .word32lu("uncompressedSize")
        .word16lu("fileNameLength")
        .word16lu("extraFieldLength")
        .word16lu("fileCommentLength")
        .word16lu("diskNumber")
        .word16lu("internalFileAttributes")
        .word32lu("externalFileAttributes")
        .word32lu("offsetToLocalFileHeader").vars;
      return t
        .pull(r.fileNameLength)
        .then(function (n) {
          return ((r.fileName = n.toString("utf8")), t.pull(r.extraFieldLength));
        })
        .then(function (n) {
          return t.pull(r.fileCommentLength);
        })
        .then(function (n) {
          return t._readRecord();
        });
    });
  };
  aS.prototype._readEndOfCentralDirectoryRecord = function () {
    var t = this;
    return t.pull(18).then(function (e) {
      var r = vEe
        .parse(e)
        .word16lu("diskNumber")
        .word16lu("diskStart")
        .word16lu("numberOfRecordsOnDisk")
        .word16lu("numberOfRecords")
        .word32lu("sizeOfCentralDirectory")
        .word32lu("offsetToStartOfCentralDirectory")
        .word16lu("commentLength").vars;
      return t.pull(r.commentLength).then(function (n) {
        ((n = n.toString("utf8")), t.end(), t.push(null));
      });
    });
  };
  aS.prototype.promise = function () {
    var t = this;
    return new Krr(function (e, r) {
      (t.on("finish", e), t.on("error", r));
    });
  };
  eGn.exports = aS;
});