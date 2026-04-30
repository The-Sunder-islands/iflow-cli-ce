/**
 * @module ahi
 * @category utils/compression
 * @label compression
 * @position 1668 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ahi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ahi = T((MQc, shi) => {
  var wxa = ihi(),
    xxa = alt(),
    ohi = Ae("stream"),
    Txa = Ae("zlib"),
    Dxa = clt(),
    Ixa = llt(),
    Rxa = CSe();
  shi.exports = function (e, r, n, o, s) {
    let a = xxa(),
      u = ohi.PassThrough(),
      c = e.stream(r, s);
    return (
      c.pipe(a).on("error", function (m) {
        u.emit("error", m);
      }),
      (u.vars = a.pull(30).then(function (m) {
        let d = Rxa.parse(m, [
          ["signature", 4],
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
          (d.lastModifiedDateTime = Ixa(d.lastModifiedDate, d.lastModifiedTime)),
          a
            .pull(d.fileNameLength)
            .then(function (f) {
              return ((d.fileName = f.toString("utf8")), a.pull(d.extraFieldLength));
            })
            .then(function (f) {
              let p;
              return (
                (d.extra = Dxa(f, d)),
                o && o.compressedSize && (d = o),
                d.flags & 1 &&
                  (p = a.pull(12).then(function (h) {
                    if (!n) throw new Error("MISSING_PASSWORD");
                    let g = wxa();
                    String(n)
                      .split("")
                      .forEach(function (A) {
                        g.update(A);
                      });
                    for (let A = 0; A < h.length; A++) h[A] = g.decryptByte(h[A]);
                    ((d.decrypt = g), (d.compressedSize -= 12));
                    let b = d.flags & 8 ? (d.lastModifiedTime >> 8) & 255 : (d.crc32 >> 24) & 255;
                    if (h[11] !== b) throw new Error("BAD_PASSWORD");
                    return d;
                  })),
                Promise.resolve(p).then(function () {
                  return (u.emit("vars", d), d);
                })
              );
            })
        );
      })),
      u.vars
        .then(function (m) {
          let d = !(m.flags & 8) || m.compressedSize > 0,
            f,
            p = m.compressionMethod ? Txa.createInflateRaw() : ohi.PassThrough();
          d
            ? ((u.size = m.uncompressedSize), (f = m.compressedSize))
            : ((f = Buffer.alloc(4)), f.writeUInt32LE(134695760, 0));
          let h = a.stream(f);
          (m.decrypt && (h = h.pipe(m.decrypt.stream())),
            h
              .pipe(p)
              .on("error", function (g) {
                u.emit("error", g);
              })
              .pipe(u)
              .on("finish", function () {
                c.destroy
                  ? c.destroy()
                  : c.abort
                    ? c.abort()
                    : c.close
                      ? c.close()
                      : c.push
                        ? c.push()
                        : console.log("warning - unable to close stream");
              }));
        })
        .catch(function (m) {
          u.emit("error", m);
        }),
      u
    );
  };
});
var f$ = T((FQc, xpr) => {
  var Spr = (function () {
    "use strict";
    return this === void 0;
  })();
  Spr
    ? (xpr.exports = {
        freeze: Object.freeze,
        defineProperty: Object.defineProperty,
        getDescriptor: Object.getOwnPropertyDescriptor,
        keys: Object.keys,
        names: Object.getOwnPropertyNames,
        getPrototypeOf: Object.getPrototypeOf,
        isArray: Array.isArray,
        isES5: Spr,
        propertyIsWritable: function (t, e) {
          var r = Object.getOwnPropertyDescriptor(t, e);
          return !!(!r || r.writable || r.set);
        },
      })
    : ((uhi = {}.hasOwnProperty),
      (chi = {}.toString),
      (lhi = {}.constructor.prototype),
      (wpr = function (t) {
        var e = [];
        for (var r in t) uhi.call(t, r) && e.push(r);
        return e;
      }),
      (mhi = function (t, e) {
        return { value: t[e] };
      }),
      (dhi = function (t, e, r) {
        return ((t[e] = r.value), t);
      }),
      (fhi = function (t) {
        return t;
      }),
      (phi = function (t) {
        try {
          return Object(t).constructor.prototype;
        } catch {
          return lhi;
        }
      }),
      (hhi = function (t) {
        try {
          return chi.call(t) === "[object Array]";
        } catch {
          return !1;
        }
      }),
      (xpr.exports = {
        isArray: hhi,
        keys: wpr,
        names: wpr,
        defineProperty: dhi,
        getDescriptor: mhi,
        freeze: fhi,
        getPrototypeOf: phi,
        isES5: Spr,
        propertyIsWritable: function () {
          return !0;
        },
      }));
  var uhi, chi, lhi, wpr, mhi, dhi, fhi, phi, hhi;
});