/**
 * @module nHn
 * @category utils/compression
 * @label compression
 * @position 1465 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (nHn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var nHn = T((myc, rHn) => {
  var Iea = zF(),
    Rea = tHn(),
    kea = Yrt(),
    jEe = Ae("stream"),
    Oea = lEe(),
    Nea = Ae("zlib"),
    Pea = Xrt(),
    Bea = fce(),
    Lea = Zrt();
  (!jEe.Writable || !jEe.Writable.prototype.destroy) && (jEe = bO());
  rHn.exports = function (e, r, n, o) {
    var s = kea(),
      a = jEe.PassThrough(),
      u = e.stream(r);
    return (
      u.pipe(s).on("error", function (c) {
        a.emit("error", c);
      }),
      (a.vars = s.pull(30).then(function (c) {
        var m = Oea.parse(c)
          .word32lu("signature")
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
          (m.lastModifiedDateTime = Lea(m.lastModifiedDate, m.lastModifiedTime)),
          s
            .pull(m.fileNameLength)
            .then(function (d) {
              return ((m.fileName = d.toString("utf8")), s.pull(m.extraFieldLength));
            })
            .then(function (d) {
              var f;
              return (
                (m.extra = Pea(d, m)),
                o && o.compressedSize && (m = o),
                m.flags & 1 &&
                  (f = s.pull(12).then(function (p) {
                    if (!n) throw new Error("MISSING_PASSWORD");
                    var h = Rea();
                    String(n)
                      .split("")
                      .forEach(function (A) {
                        h.update(A);
                      });
                    for (var g = 0; g < p.length; g++) p[g] = h.decryptByte(p[g]);
                    ((m.decrypt = h), (m.compressedSize -= 12));
                    var b = m.flags & 8 ? (m.lastModifiedTime >> 8) & 255 : (m.crc32 >> 24) & 255;
                    if (p[11] !== b) throw new Error("BAD_PASSWORD");
                    return m;
                  })),
                Iea.resolve(f).then(function () {
                  return (a.emit("vars", m), m);
                })
              );
            })
        );
      })),
      a.vars
        .then(function (c) {
          var m = !(c.flags & 8) || c.compressedSize > 0,
            d,
            f = c.compressionMethod ? Nea.createInflateRaw() : jEe.PassThrough();
          m
            ? ((a.size = c.uncompressedSize), (d = c.compressedSize))
            : ((d = Bea.alloc(4)), d.writeUInt32LE(134695760, 0));
          var p = s.stream(d);
          (c.decrypt && (p = p.pipe(c.decrypt.stream())),
            p
              .pipe(f)
              .on("error", function (h) {
                a.emit("error", h);
              })
              .pipe(a)
              .on("finish", function () {
                u.destroy
                  ? u.destroy()
                  : u.abort
                    ? u.abort()
                    : u.close
                      ? u.close()
                      : u.push
                        ? u.push()
                        : console.log("warning - unable to close stream");
              }));
        })
        .catch(function (c) {
          a.emit("error", c);
        }),
      a
    );
  };
});