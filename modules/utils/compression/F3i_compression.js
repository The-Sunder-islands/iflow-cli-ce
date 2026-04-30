/**
 * @module F3i
 * @category utils/compression
 * @label compression
 * @position 1703 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (F3i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var F3i = T((yGc, M3i) => {
  var BSe = alt(),
    Kxa = ahi(),
    Jxa = ult(),
    Xxa = clt(),
    Slt = Ae("path"),
    Upr = Epr(),
    Zxa = llt(),
    LSe = CSe(),
    wlt = B3i(),
    L3i = Buffer.alloc(4);
  L3i.writeUInt32LE(101010256, 0);
  function eTa(t) {
    let e = t.stream(0).pipe(BSe());
    return e.pull(4).then(function (r) {
      if (r.readUInt32LE(0) === 875721283) {
        let o;
        return e
          .pull(12)
          .then(function (s) {
            o = LSe.parse(s, [
              ["version", 4],
              ["pubKeyLength", 4],
              ["signatureLength", 4],
            ]);
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
  function tTa(t, e) {
    let r = LSe.parse(e, [
      ["signature", 4],
      ["diskNumber", 4],
      ["offsetToStartOfCentralDirectory", 8],
      ["numberOfDisks", 4],
    ]);
    if (r.signature != 117853008)
      throw new Error("invalid zip64 end of central dir locator signature (0x07064b50): 0x" + r.signature.toString(16));
    let n = BSe();
    return (t.stream(r.offsetToStartOfCentralDirectory).pipe(n), n.pull(56));
  }
  function rTa(t) {
    let e = LSe.parse(t, [
      ["signature", 4],
      ["sizeOfCentralDirectory", 8],
      ["version", 2],
      ["versionsNeededToExtract", 2],
      ["diskNumber", 4],
      ["diskStart", 4],
      ["numberOfRecordsOnDisk", 8],
      ["numberOfRecords", 8],
      ["sizeOfCentralDirectory", 8],
      ["offsetToStartOfCentralDirectory", 8],
    ]);
    if (e.signature != 101075792)
      throw new Error(
        "invalid zip64 end of central dir locator signature (0x06064b50): 0x0" + e.signature.toString(16),
      );
    return e;
  }
  M3i.exports = function (e, r) {
    let n = BSe(),
      o = BSe(),
      s = (r && r.tailSize) || 80,
      a,
      u,
      c,
      m;
    return (
      r && r.crx && (u = eTa(e)),
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
            n.pull(L3i)
          );
        })
        .then(function () {
          return wlt.props({ directory: n.pull(22), crxHeader: u });
        })
        .then(function (d) {
          let f = d.directory;
          if (
            ((c = (d.crxHeader && d.crxHeader.size) || 0),
            (m = LSe.parse(f, [
              ["signature", 4],
              ["diskNumber", 2],
              ["diskStart", 2],
              ["numberOfRecordsOnDisk", 2],
              ["numberOfRecords", 2],
              ["sizeOfCentralDirectory", 4],
              ["offsetToStartOfCentralDirectory", 4],
              ["commentLength", 2],
            ])),
            m.diskNumber == 65535 || m.numberOfRecords == 65535 || m.offsetToStartOfCentralDirectory == 4294967295)
          ) {
            let h = a - (s - n.match + 20),
              g = BSe();
            return (
              e.stream(h).pipe(g),
              g
                .pull(20)
                .then(function (b) {
                  return tTa(e, b);
                })
                .then(function (b) {
                  m = rTa(b);
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
                (d.path = Slt.resolve(Slt.normalize(d.path))),
                m.files.then(function (f) {
                  return wlt.map(
                    f,
                    async function (p) {
                      let h = Slt.join(d.path, p.path);
                      if (h.indexOf(d.path) != 0) return;
                      if (p.type == "Directory") {
                        await Upr.ensureDir(h);
                        return;
                      }
                      await Upr.ensureDir(Slt.dirname(h));
                      let g = d.getWriter ? d.getWriter({ path: h }) : Upr.createWriteStream(h);
                      return new Promise(function (b, A) {
                        p.stream(d.password).on("error", A).pipe(g).on("close", b).on("error", A);
                      });
                    },
                    { concurrency: d.concurrency > 1 ? d.concurrency : 1 },
                  );
                })
              );
            }),
            (m.files = wlt.mapSeries(Array(m.numberOfRecords), function () {
              return o.pull(46).then(function (d) {
                let f = LSe.parse(d, [
                  ["signature", 4],
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
                return (
                  (f.offsetToLocalFileHeader += c),
                  (f.lastModifiedDateTime = Zxa(f.lastModifiedDate, f.lastModifiedTime)),
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
                      return ((f.extra = Xxa(p, f)), o.pull(f.fileCommentLength));
                    })
                    .then(function (p) {
                      ((f.comment = p),
                        (f.type = f.uncompressedSize === 0 && /[/\\]$/.test(f.path) ? "Directory" : "File"));
                      let h = (r && r.padding) || 1e3;
                      return (
                        (f.stream = function (g) {
                          let b = 30 + h + (f.extraFieldLength || 0) + (f.fileNameLength || 0) + f.compressedSize;
                          return Kxa(e, f.offsetToLocalFileHeader, g, f, b);
                        }),
                        (f.buffer = function (g) {
                          return Jxa(f.stream(g));
                        }),
                        f
                      );
                    })
                );
              });
            })),
            wlt.props(m)
          );
        })
    );
  };
});