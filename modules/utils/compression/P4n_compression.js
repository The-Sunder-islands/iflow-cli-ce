/**
 * @module P4n
 * @category utils/compression
 * @label compression
 * @position 1042 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (P4n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var P4n = T((X3c, N4n) => {
  "use strict";
  var nWt = Nd(),
    BXe = bae(),
    i4s = _ae(),
    o4s = k4n(),
    s4s = iVt(),
    O4n = j6e();
  function a4s(t) {
    return new BXe.Promise(function (e, r) {
      var n = t.decompressed.getContentWorker().pipe(new s4s());
      n.on("error", function (o) {
        r(o);
      })
        .on("end", function () {
          n.streamInfo.crc32 !== t.decompressed.crc32 ? r(new Error("Corrupted zip : CRC32 mismatch")) : e();
        })
        .resume();
    });
  }
  N4n.exports = function (t, e) {
    var r = this;
    return (
      (e = nWt.extend(e || {}, {
        base64: !1,
        checkCRC32: !1,
        optimizedBinaryString: !1,
        createFolders: !1,
        decodeFileName: i4s.utf8decode,
      })),
      O4n.isNode && O4n.isStream(t)
        ? BXe.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file."))
        : nWt
            .prepareContent("the loaded zip file", t, !0, e.optimizedBinaryString, e.base64)
            .then(function (n) {
              var o = new o4s(e);
              return (o.load(n), o);
            })
            .then(function (o) {
              var s = [BXe.Promise.resolve(o)],
                a = o.files;
              if (e.checkCRC32) for (var u = 0; u < a.length; u++) s.push(a4s(a[u]));
              return BXe.Promise.all(s);
            })
            .then(function (o) {
              for (var s = o.shift(), a = s.files, u = 0; u < a.length; u++) {
                var c = a[u],
                  m = c.fileNameStr,
                  d = nWt.resolve(c.fileNameStr);
                (r.file(d, c.decompressed, {
                  binary: !0,
                  optimizedBinaryString: !0,
                  date: c.date,
                  dir: c.dir,
                  comment: c.fileCommentStr.length ? c.fileCommentStr : null,
                  unixPermissions: c.unixPermissions,
                  dosPermissions: c.dosPermissions,
                  createFolders: e.createFolders,
                }),
                  c.dir || (r.file(d).unsafeOriginalName = m));
              }
              return (s.zipComment.length && (r.comment = s.zipComment), r);
            })
    );
  };
});