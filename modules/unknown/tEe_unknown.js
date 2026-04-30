/**
 * @module tEe
 * @category unknown
 * @label unknown
 * @position 1371 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tEe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tEe = T((n9c, xUn) => {
  var ktr = rf(),
    SUn = Ae("path"),
    r9c = Ae("util"),
    mzs = Ser(),
    wUn = trt(),
    dzs = Der(),
    fzs = Ae("stream").Stream,
    pzs = aFn().PassThrough,
    B6 = (xUn.exports = {});
  B6.file = CUn();
  B6.collectStream = function (t, e) {
    var r = [],
      n = 0;
    (t.on("error", e),
      t.on("data", function (o) {
        (r.push(o), (n += o.length));
      }),
      t.on("end", function () {
        var o = new Buffer(n),
          s = 0;
        (r.forEach(function (a) {
          (a.copy(o, s), (s += a.length));
        }),
          e(null, o));
      }));
  };
  B6.dateify = function (t) {
    return (
      (t = t || new Date()),
      t instanceof Date ? (t = t) : typeof t == "string" ? (t = new Date(t)) : (t = new Date()),
      t
    );
  };
  B6.defaults = function (t, e, r) {
    var n = arguments;
    return ((n[0] = n[0] || {}), dzs(...n));
  };
  B6.isStream = function (t) {
    return t instanceof fzs;
  };
  B6.lazyReadStream = function (t) {
    return new mzs.Readable(function () {
      return ktr.createReadStream(t);
    });
  };
  B6.normalizeInputSource = function (t) {
    if (t === null) return new Buffer(0);
    if (typeof t == "string") return new Buffer(t);
    if (B6.isStream(t) && !t._readableState) {
      var e = new pzs();
      return (t.pipe(e), e);
    }
    return t;
  };
  B6.sanitizePath = function (t) {
    return wUn(t, !1)
      .replace(/^\w+:/, "")
      .replace(/^(\.\.\/|\/)+/, "");
  };
  B6.trailingSlashIt = function (t) {
    return t.slice(-1) !== "/" ? t + "/" : t;
  };
  B6.unixifyPath = function (t) {
    return wUn(t, !1).replace(/^\w+:/, "");
  };
  B6.walkdir = function (t, e, r) {
    var n = [];
    (typeof e == "function" && ((r = e), (e = t)),
      ktr.readdir(t, function (o, s) {
        var a = 0,
          u,
          c;
        if (o) return r(o);
        (function m() {
          if (((u = s[a++]), !u)) return r(null, n);
          ((c = SUn.join(t, u)),
            ktr.stat(c, function (d, f) {
              (n.push({ path: c, relative: SUn.relative(e, c).replace(/\\/g, "/"), stats: f }),
                f && f.isDirectory()
                  ? B6.walkdir(c, e, function (p, h) {
                      (h.forEach(function (g) {
                        n.push(g);
                      }),
                        m());
                    })
                  : m());
            }));
        })();
      }));
  };
});