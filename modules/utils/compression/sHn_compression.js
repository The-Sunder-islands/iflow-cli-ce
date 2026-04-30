/**
 * @module sHn
 * @category utils/compression
 * @label compression
 * @position 1466 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (sHn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var sHn = T((dyc, oHn) => {
  var qEe = lEe(),
    GEe = Yrt(),
    Mea = nHn(),
    QEe = zF(),
    Fea = Jrt(),
    Uea = Xrt(),
    $ea = fce(),
    Xnr = Ae("path"),
    jea = Knr().Writer,
    Qea = Zrt(),
    iHn = $ea.alloc(4);
  iHn.writeUInt32LE(101010256, 0);
  function Gea(t) {
    var e = t.stream(0).pipe(GEe());
    return e.pull(4).then(function (r) {
      var n = r.readUInt32LE(0);
      if (n === 875721283) {
        var o;
        return e
          .pull(12)
          .then(function (s) {
            o = qEe.parse(s).word32lu("version").word32lu("pubKeyLength").word32lu("signatureLength").vars;
          })
          .then(function () {
            return e.pull(o.pubKeyLength + o.signatureLength);
          })
          .then(function (s) {
            return (
              (o.publicKey = s.slice(0, o.pubKeyLength)),
              (o.signature = s.slice(o.pubKeyLength)),
              (o.size = 16 + o.pubKeyLength + o.signatureLength),
              o
            );
          });
      }
    });
  }
  function qea(t, e) {
    var r = qEe
      .parse(e)
      .word32lu("signature")
      .word32lu("diskNumber")
      .word64lu("offsetToStartOfCentralDirectory")
      .word32lu("numberOfDisks").vars;
    if (r.signature != 117853008)
      throw new Error("invalid zip64 end of central dir locator signature (0x07064b50): 0x" + r.signature.toString(16));
    var n = GEe();
    return (t.stream(r.offsetToStartOfCentralDirectory).pipe(n), n.pull(56));
  }
  function Hea(t) {
    var e = qEe
      .parse(t)
      .word32lu("signature")
      .word64lu("sizeOfCentralDirectory")
      .word16lu("version")
      .word16lu("versionsNeededToExtract")
      .word32lu("diskNumber")
      .word32lu("diskStart")
      .word64lu("numberOfRecordsOnDisk")
      .word64lu("numberOfRecords")
      .word64lu("sizeOfCentralDirectory")
      .word64lu("offsetToStartOfCentralDirectory").vars;
    if (e.signature != 101075792)
      throw new Error(
        "invalid zip64 end of central dir locator signature (0x06064b50): 0x0" + e.signature.toString(16),
      );
    return e;
  }
  oHn.exports = function (e, r) {
    var n = GEe(),
      o = GEe(),
      s = (r && r.tailSize) || 80,
      a,
      u,
      c,
      m;
    return (
      r && r.crx && (u = Gea(e)),
      e
        .size()
        .then(function (d) {
          return (
            (a = d),
            e
              .stream(Math.max(0, d - s))
              .on("error", function (f) {
                n.emit("error", f);
              })
              .pipe(n),
            n.pull(iHn)
          );
        })
        .then(function () {
          return QEe.props({ directory: n.pull(22), crxHeader: u });
        })
        .then(function (d) {
          var f = d.directory;
          if (
            ((c = (d.crxHeader && d.crxHeader.size) || 0),
            (m = qEe
              .parse(f)
              .word32lu("signature")
              .word16lu("diskNumber")
              .word16lu("diskStart")
              .word16lu("numberOfRecordsOnDisk")
              .word16lu("numberOfRecords")
              .word32lu("sizeOfCentralDirectory")
              .word32lu("offsetToStartOfCentralDirectory")
              .word16lu("commentLength").vars),
            m.numberOfRecords == 65535 || m.numberOfRecords == 65535 || m.offsetToStartOfCentralDirectory == 4294967295)
          ) {
            let h = a - (s - n.match + 20),
              g = GEe();
            return (
              e.stream(h).pipe(g),
              g
                .pull(20)
                .then(function (b) {
                  return qea(e, b);
                })
                .then(function (b) {
                  m = Hea(b);
                })
            );
          } else m.offsetToStartOfCentralDirectory += c;
        })
        .then(function () {
          if (m.commentLength)
            return n.pull(m.commentLength).then(function (d) {
              m.comment = d.toString("utf8");
            });
        })
        .then(function () {
          return (
            e.stream(m.offsetToStartOfCentralDirectory).pipe(o),
            (m.extract = function (d) {
              if (!d || !d.path) throw new Error("PATH_MISSING");
              return (
                (d.path = Xnr.resolve(Xnr.normalize(d.path))),
                m.files.then(function (f) {
                  return QEe.map(
                    f,
                    function (p) {
                      if (p.type != "Directory") {
                        var h = Xnr.join(d.path, p.path);
                        if (h.indexOf(d.path) == 0) {
                          var g = d.getWriter ? d.getWriter({ path: h }) : jea({ path: h });
                          return new QEe(function (b, A) {
                            p.stream(d.password).on("error", A).pipe(g).on("close", b).on("error", A);
                          });
                        }
                      }
                    },
                    { concurrency: d.concurrency > 1 ? d.concurrency : 1 },
                  );
                })
              );
            }),
            (m.files = QEe.mapSeries(Array(m.numberOfRecords), function () {
              return o.pull(46).then(function (d) {
                var f = qEe
                  .parse(d)
                  .word32lu("signature")
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
                return (
                  (f.offsetToLocalFileHeader += c),
                  (f.lastModifiedDateTime = Qea(f.lastModifiedDate, f.lastModifiedTime)),
                  o
                    .pull(f.fileNameLength)
                    .then(function (p) {
                      return (
                        (f.pathBuffer = p),
                        (f.path = p.toString("utf8")),
                        (f.isUnicode = (f.flags & 2048) != 0),
                        o.pull(f.extraFieldLength)
                      );
                    })
                    .then(function (p) {
                      return ((f.extra = Uea(p, f)), o.pull(f.fileCommentLength));
                    })
                    .then(function (p) {
                      return (
                        (f.comment = p),
                        (f.type = f.uncompressedSize === 0 && /[\/\\]$/.test(f.path) ? "Directory" : "File"),
                        (f.stream = function (h) {
                          return Mea(e, f.offsetToLocalFileHeader, h, f);
                        }),
                        (f.buffer = function (h) {
                          return Fea(f.stream(h));
                        }),
                        f
                      );
                    })
                );
              });
            })),
            QEe.props(m)
          );
        })
    );
  };
});