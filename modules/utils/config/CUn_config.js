/**
 * @module CUn
 * @category utils/config
 * @label config
 * @position 1370 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (CUn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var CUn = T((t9c, vUn) => {
  var EUn = rf(),
    nce = Ae("path"),
    Rtr = Yer(),
    szs = ttr(),
    azs = atr(),
    uzs = utr(),
    czs = vtr(),
    qW = (vUn.exports = {}),
    _Un = /[\/\\]/g,
    lzs = function (t, e) {
      var r = [];
      return (
        Rtr(t).forEach(function (n) {
          var o = n.indexOf("!") === 0;
          o && (n = n.slice(1));
          var s = e(n);
          o ? (r = szs(r, s)) : (r = azs(r, s));
        }),
        r
      );
    };
  qW.exists = function () {
    var t = nce.join.apply(nce, arguments);
    return EUn.existsSync(t);
  };
  qW.expand = function (...t) {
    var e = uzs(t[0]) ? t.shift() : {},
      r = Array.isArray(t[0]) ? t[0] : t;
    if (r.length === 0) return [];
    var n = lzs(r, function (o) {
      return czs.sync(o, e);
    });
    return (
      e.filter &&
        (n = n.filter(function (o) {
          o = nce.join(e.cwd || "", o);
          try {
            return typeof e.filter == "function" ? e.filter(o) : EUn.statSync(o)[e.filter]();
          } catch {
            return !1;
          }
        })),
      n
    );
  };
  qW.expandMapping = function (t, e, r) {
    r = Object.assign(
      {
        rename: function (s, a) {
          return nce.join(s || "", a);
        },
      },
      r,
    );
    var n = [],
      o = {};
    return (
      qW.expand(r, t).forEach(function (s) {
        var a = s;
        (r.flatten && (a = nce.basename(a)), r.ext && (a = a.replace(/(\.[^\/]*)?$/, r.ext)));
        var u = r.rename(e, a, r);
        (r.cwd && (s = nce.join(r.cwd, s)),
          (u = u.replace(_Un, "/")),
          (s = s.replace(_Un, "/")),
          o[u] ? o[u].src.push(s) : (n.push({ src: [s], dest: u }), (o[u] = n[n.length - 1])));
      }),
      n
    );
  };
  qW.normalizeFilesArray = function (t) {
    var e = [];
    return (
      t.forEach(function (r) {
        var n;
        ("src" in r || "dest" in r) && e.push(r);
      }),
      e.length === 0
        ? []
        : ((e = _(e)
            .chain()
            .forEach(function (r) {
              !("src" in r) || !r.src || (Array.isArray(r.src) ? (r.src = Rtr(r.src)) : (r.src = [r.src]));
            })
            .map(function (r) {
              var n = Object.assign({}, r);
              if ((delete n.src, delete n.dest, r.expand))
                return qW.expandMapping(r.src, r.dest, n).map(function (s) {
                  var a = Object.assign({}, r);
                  return (
                    (a.orig = Object.assign({}, r)),
                    (a.src = s.src),
                    (a.dest = s.dest),
                    ["expand", "cwd", "flatten", "rename", "ext"].forEach(function (u) {
                      delete a[u];
                    }),
                    a
                  );
                });
              var o = Object.assign({}, r);
              return (
                (o.orig = Object.assign({}, r)),
                "src" in o &&
                  Object.defineProperty(o, "src", {
                    enumerable: !0,
                    get: function s() {
                      var a;
                      return (
                        "result" in s ||
                          ((a = r.src), (a = Array.isArray(a) ? Rtr(a) : [a]), (s.result = qW.expand(n, a))),
                        s.result
                      );
                    },
                  }),
                "dest" in o && (o.dest = r.dest),
                o
              );
            })
            .flatten()
            .value()),
          e)
    );
  };
});