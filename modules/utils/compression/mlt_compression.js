/**
 * @module mlt
 * @category utils/compression
 * @label compression
 * @position 1633 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mlt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mlt = T((tQc, ufi) => {
  var gSa = Ae("util"),
    bSa = Ae("zlib"),
    cpr = Ae("stream"),
    sfi = alt(),
    ASa = efi(),
    ySa = ult(),
    _Sa = clt(),
    ESa = llt(),
    vSa = cpr.pipeline,
    SSe = CSe(),
    afi = Buffer.alloc(4);
  afi.writeUInt32LE(101010256, 0);
  function MS(t) {
    if (!(this instanceof MS)) return new MS(t);
    let e = this;
    ((e._opts = t || { verbose: !1 }),
      sfi.call(e, e._opts),
      e.on("finish", function () {
        (e.emit("end"), e.emit("close"));
      }),
      e._readRecord().catch(function (r) {
        (!e.__emittedError || e.__emittedError !== r) && e.emit("error", r);
      }));
  }
  gSa.inherits(MS, sfi);
  MS.prototype._readRecord = function () {
    let t = this;
    return t
      .pull(4)
      .then(function (e) {
        if (e.length === 0) return;
        let r = e.readUInt32LE(0);
        if (r === 875721283) return t._readCrxHeader();
        if (r === 67324752) return t._readFile();
        if (r === 33639248) return ((t.reachedCD = !0), t._readCentralDirectoryFileHeader());
        if (r === 101010256) return t._readEndOfCentralDirectoryRecord();
        if (t.reachedCD)
          return t.pull(afi, !0).then(function () {
            return t._readEndOfCentralDirectoryRecord();
          });
        t.emit("error", new Error("invalid signature: 0x" + r.toString(16)));
      })
      .then(function (e) {
        if (e) return t._readRecord();
      });
  };
  MS.prototype._readCrxHeader = function () {
    let t = this;
    return t
      .pull(12)
      .then(function (e) {
        return (
          (t.crxHeader = SSe.parse(e, [
            ["version", 4],
            ["pubKeyLength", 4],
            ["signatureLength", 4],
          ])),
          t.pull(t.crxHeader.pubKeyLength + t.crxHeader.signatureLength)
        );
      })
      .then(function (e) {
        return (
          (t.crxHeader.publicKey = e.slice(0, t.crxHeader.pubKeyLength)),
          (t.crxHeader.signature = e.slice(t.crxHeader.pubKeyLength)),
          t.emit("crx-header", t.crxHeader),
          !0
        );
      });
  };
  MS.prototype._readFile = function () {
    let t = this;
    return t.pull(26).then(function (e) {
      let r = SSe.parse(e, [
        ["versionsNeededToExtract", 2],
        ["flags", 2],
        ["compressionMethod", 2],
        ["lastModifiedTime", 2],
        ["lastModifiedDate", 2],
        ["crc32", 4],
        ["compressedSize", 4],
        ["uncompressedSize", 4],
        ["fileNameLength", 2],
        ["extraFieldLength", 2],
      ]);
      return (
        (r.lastModifiedDateTime = ESa(r.lastModifiedDate, r.lastModifiedTime)),
        t.crxHeader && (r.crxHeader = t.crxHeader),
        t.pull(r.fileNameLength).then(function (n) {
          let o = n.toString("utf8"),
            s = cpr.PassThrough(),
            a = !1;
          return (
            (s.autodrain = function () {
              a = !0;
              let u = s.pipe(ASa());
              return (
                (u.promise = function () {
                  return new Promise(function (c, m) {
                    (u.on("finish", c), u.on("error", m));
                  });
                }),
                u
              );
            }),
            (s.buffer = function () {
              return ySa(s);
            }),
            (s.path = o),
            (s.props = {}),
            (s.props.path = o),
            (s.props.pathBuffer = n),
            (s.props.flags = { isUnicode: (r.flags & 2048) != 0 }),
            (s.type = r.uncompressedSize === 0 && /[/\\]$/.test(o) ? "Directory" : "File"),
            t._opts.verbose &&
              (s.type === "Directory"
                ? console.log("   creating:", o)
                : s.type === "File" &&
                  (r.compressionMethod === 0 ? console.log(" extracting:", o) : console.log("  inflating:", o))),
            t.pull(r.extraFieldLength).then(function (u) {
              let c = _Sa(u, r);
              ((s.vars = r),
                (s.extra = c),
                t._opts.forceStream
                  ? t.push(s)
                  : (t.emit("entry", s),
                    (t._readableState.pipesCount || (t._readableState.pipes && t._readableState.pipes.length)) &&
                      t.push(s)),
                t._opts.verbose && console.log({ filename: o, vars: r, extra: c }));
              let m = !(r.flags & 8) || r.compressedSize > 0,
                d;
              s.__autodraining = a;
              let f = r.compressionMethod && !a ? bSa.createInflateRaw() : cpr.PassThrough();
              return (
                m
                  ? ((s.size = r.uncompressedSize), (d = r.compressedSize))
                  : ((d = Buffer.alloc(4)), d.writeUInt32LE(134695760, 0)),
                new Promise(function (p, h) {
                  vSa(t.stream(d), f, s, function (g) {
                    return g ? h(g) : m ? p(m) : t._processDataDescriptor(s).then(p).catch(h);
                  });
                })
              );
            })
          );
        })
      );
    });
  };
  MS.prototype._processDataDescriptor = function (t) {
    return this.pull(16).then(function (r) {
      let n = SSe.parse(r, [
        ["dataDescriptorSignature", 4],
        ["crc32", 4],
        ["compressedSize", 4],
        ["uncompressedSize", 4],
      ]);
      return ((t.size = n.uncompressedSize), !0);
    });
  };
  MS.prototype._readCentralDirectoryFileHeader = function () {
    let t = this;
    return t.pull(42).then(function (e) {
      let r = SSe.parse(e, [
        ["versionMadeBy", 2],
        ["versionsNeededToExtract", 2],
        ["flags", 2],
        ["compressionMethod", 2],
        ["lastModifiedTime", 2],
        ["lastModifiedDate", 2],
        ["crc32", 4],
        ["compressedSize", 4],
        ["uncompressedSize", 4],
        ["fileNameLength", 2],
        ["extraFieldLength", 2],
        ["fileCommentLength", 2],
        ["diskNumber", 2],
        ["internalFileAttributes", 2],
        ["externalFileAttributes", 4],
        ["offsetToLocalFileHeader", 4],
      ]);
      return t
        .pull(r.fileNameLength)
        .then(function (n) {
          return ((r.fileName = n.toString("utf8")), t.pull(r.extraFieldLength));
        })
        .then(function () {
          return t.pull(r.fileCommentLength);
        })
        .then(function () {
          return !0;
        });
    });
  };
  MS.prototype._readEndOfCentralDirectoryRecord = function () {
    let t = this;
    return t.pull(18).then(function (e) {
      let r = SSe.parse(e, [
        ["diskNumber", 2],
        ["diskStart", 2],
        ["numberOfRecordsOnDisk", 2],
        ["numberOfRecords", 2],
        ["sizeOfCentralDirectory", 4],
        ["offsetToStartOfCentralDirectory", 4],
        ["commentLength", 2],
      ]);
      return t.pull(r.commentLength).then(function () {
        (t.end(), t.push(null));
      });
    });
  };
  MS.prototype.promise = function () {
    let t = this;
    return new Promise(function (e, r) {
      (t.on("finish", e), t.on("error", r));
    });
  };
  ufi.exports = MS;
});