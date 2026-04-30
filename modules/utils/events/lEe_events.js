/**
 * @module lEe
 * @category utils/events
 * @label events
 * @position 1407 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lEe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lEe = T((KW, eQn) => {
  var NKs = Hjn(),
    Kjn = Ae("events").EventEmitter,
    PKs = Wjn(),
    Lrt = Yjn(),
    BKs = Ae("stream").Stream;
  KW = eQn.exports = function (t, e) {
    if (Buffer.isBuffer(t)) return KW.parse(t);
    var r = KW.stream();
    return (
      t && t.pipe
        ? t.pipe(r)
        : t &&
          (t.on(e || "data", function (n) {
            r.write(n);
          }),
          t.on("end", function () {
            r.end();
          })),
      r
    );
  };
  KW.stream = function (t) {
    if (t) return KW.apply(null, arguments);
    var e = null;
    function r(f, p, h) {
      ((e = {
        bytes: f,
        skip: h,
        cb: function (g) {
          ((e = null), p(g));
        },
      }),
        o());
    }
    var n = null;
    function o() {
      if (!e) {
        d && (m = !0);
        return;
      }
      if (typeof e == "function") e();
      else {
        var f = n + e.bytes;
        if (u.length >= f) {
          var p;
          (n == null ? ((p = u.splice(0, f)), e.skip || (p = p.slice())) : (e.skip || (p = u.slice(n, f)), (n = f)),
            e.skip ? e.cb() : e.cb(p));
        }
      }
    }
    function s(f) {
      function p() {
        m || f.next();
      }
      var h = Zjn(function (g, b) {
        return function (A) {
          r(g, function (y) {
            (c.set(A, b(y)), p());
          });
        };
      });
      return (
        (h.tap = function (g) {
          f.nest(g, c.store);
        }),
        (h.into = function (g, b) {
          c.get(g) || c.set(g, {});
          var A = c;
          ((c = Lrt(A.get(g))),
            f.nest(function () {
              (b.apply(this, arguments),
                this.tap(function () {
                  c = A;
                }));
            }, c.store));
        }),
        (h.flush = function () {
          ((c.store = {}), p());
        }),
        (h.loop = function (g) {
          var b = !1;
          f.nest(
            !1,
            function A() {
              ((this.vars = c.store),
                g.call(
                  this,
                  function () {
                    ((b = !0), p());
                  },
                  c.store,
                ),
                this.tap(
                  function () {
                    b ? f.next() : A.call(this);
                  }.bind(this),
                ));
            },
            c.store,
          );
        }),
        (h.buffer = function (g, b) {
          (typeof b == "string" && (b = c.get(b)),
            r(b, function (A) {
              (c.set(g, A), p());
            }));
        }),
        (h.skip = function (g) {
          (typeof g == "string" && (g = c.get(g)),
            r(g, function () {
              p();
            }));
        }),
        (h.scan = function (b, A) {
          if (typeof A == "string") A = new Buffer(A);
          else if (!Buffer.isBuffer(A)) throw new Error("search must be a Buffer or a string");
          var y = 0;
          ((e = function () {
            var E = u.indexOf(A, n + y),
              v = E - n - y;
            (E !== -1
              ? ((e = null),
                n != null
                  ? (c.set(b, u.slice(n, n + y + v)), (n += y + v + A.length))
                  : (c.set(b, u.slice(0, y + v)), u.splice(0, y + v + A.length)),
                p(),
                o())
              : (v = Math.max(u.length - A.length - n - y, 0)),
              (y += v));
          }),
            o());
        }),
        (h.peek = function (g) {
          ((n = 0),
            f.nest(function () {
              (g.call(this, c.store),
                this.tap(function () {
                  n = null;
                }));
            }));
        }),
        h
      );
    }
    var a = NKs.light(s);
    a.writable = !0;
    var u = PKs();
    a.write = function (f) {
      (u.push(f), o());
    };
    var c = Lrt(),
      m = !1,
      d = !1;
    return (
      (a.end = function () {
        d = !0;
      }),
      (a.pipe = BKs.prototype.pipe),
      Object.getOwnPropertyNames(Kjn.prototype).forEach(function (f) {
        a[f] = Kjn.prototype[f];
      }),
      a
    );
  };
  KW.parse = function (e) {
    var r = Zjn(function (s, a) {
        return function (u) {
          if (n + s <= e.length) {
            var c = e.slice(n, n + s);
            ((n += s), o.set(u, a(c)));
          } else o.set(u, null);
          return r;
        };
      }),
      n = 0,
      o = Lrt();
    return (
      (r.vars = o.store),
      (r.tap = function (s) {
        return (s.call(r, o.store), r);
      }),
      (r.into = function (s, a) {
        o.get(s) || o.set(s, {});
        var u = o;
        return ((o = Lrt(u.get(s))), a.call(r, o.store), (o = u), r);
      }),
      (r.loop = function (s) {
        for (
          var a = !1,
            u = function () {
              a = !0;
            };
          a === !1;
        )
          s.call(r, u, o.store);
        return r;
      }),
      (r.buffer = function (s, a) {
        typeof a == "string" && (a = o.get(a));
        var u = e.slice(n, Math.min(e.length, n + a));
        return ((n += a), o.set(s, u), r);
      }),
      (r.skip = function (s) {
        return (typeof s == "string" && (s = o.get(s)), (n += s), r);
      }),
      (r.scan = function (s, a) {
        if (typeof a == "string") a = new Buffer(a);
        else if (!Buffer.isBuffer(a)) throw new Error("search must be a Buffer or a string");
        o.set(s, null);
        for (var u = 0; u + n <= e.length - a.length + 1; u++) {
          for (var c = 0; c < a.length && e[n + u + c] === a[c]; c++);
          if (c === a.length) break;
        }
        return (o.set(s, e.slice(n, n + u)), (n += u + a.length), r);
      }),
      (r.peek = function (s) {
        var a = n;
        return (s.call(r, o.store), (n = a), r);
      }),
      (r.flush = function () {
        return ((o.store = {}), r);
      }),
      (r.eof = function () {
        return n >= e.length;
      }),
      r
    );
  };
  function Jjn(t) {
    for (var e = 0, r = 0; r < t.length; r++) e += Math.pow(256, r) * t[r];
    return e;
  }
  function Xjn(t) {
    for (var e = 0, r = 0; r < t.length; r++) e += Math.pow(256, t.length - r - 1) * t[r];
    return e;
  }
  function LKs(t) {
    var e = Xjn(t);
    return ((t[0] & 128) == 128 && (e -= Math.pow(256, t.length)), e);
  }
  function MKs(t) {
    var e = Jjn(t);
    return ((t[t.length - 1] & 128) == 128 && (e -= Math.pow(256, t.length)), e);
  }
  function Zjn(t) {
    var e = {};
    return (
      [1, 2, 4, 8].forEach(function (r) {
        var n = r * 8;
        ((e["word" + n + "le"] = e["word" + n + "lu"] = t(r, Jjn)),
          (e["word" + n + "ls"] = t(r, MKs)),
          (e["word" + n + "be"] = e["word" + n + "bu"] = t(r, Xjn)),
          (e["word" + n + "bs"] = t(r, LKs)));
      }),
      (e.word8 = e.word8u = e.word8be),
      (e.word8s = e.word8bs),
      e
    );
  }
});