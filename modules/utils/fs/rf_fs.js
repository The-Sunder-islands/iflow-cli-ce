/**
 * @module rf
 * @category utils/fs
 * @label fs
 * @position 1329 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (rf) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var rf = T((a8c, ier) => {
  var Ld = Ae("fs"),
    Pjs = lLn(),
    Bjs = fLn(),
    Ljs = hLn(),
    Utt = Ae("util"),
    kg,
    jtt;
  typeof Symbol == "function" && typeof Symbol.for == "function"
    ? ((kg = Symbol.for("graceful-fs.queue")), (jtt = Symbol.for("graceful-fs.previous")))
    : ((kg = "___graceful-fs.queue"), (jtt = "___graceful-fs.previous"));
  function Mjs() {}
  function ALn(t, e) {
    Object.defineProperty(t, kg, {
      get: function () {
        return e;
      },
    });
  }
  var OW = Mjs;
  Utt.debuglog
    ? (OW = Utt.debuglog("gfs4"))
    : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") &&
      (OW = function () {
        var t = Utt.format.apply(Utt, arguments);
        ((t =
          "GFS4: " +
          t.split(/\n/).join(`
GFS4: `)),
          console.error(t));
      });
  Ld[kg] ||
    ((gLn = global[kg] || []),
    ALn(Ld, gLn),
    (Ld.close = (function (t) {
      function e(r, n) {
        return t.call(Ld, r, function (o) {
          (o || bLn(), typeof n == "function" && n.apply(this, arguments));
        });
      }
      return (Object.defineProperty(e, jtt, { value: t }), e);
    })(Ld.close)),
    (Ld.closeSync = (function (t) {
      function e(r) {
        (t.apply(Ld, arguments), bLn());
      }
      return (Object.defineProperty(e, jtt, { value: t }), e);
    })(Ld.closeSync)),
    /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") &&
      process.on("exit", function () {
        (OW(Ld[kg]), Ae("assert").equal(Ld[kg].length, 0));
      }));
  var gLn;
  global[kg] || ALn(global, Ld[kg]);
  ier.exports = rer(Ljs(Ld));
  process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !Ld.__patched && ((ier.exports = rer(Ld)), (Ld.__patched = !0));
  function rer(t) {
    (Pjs(t), (t.gracefulify = rer), (t.createReadStream = x), (t.createWriteStream = k));
    var e = t.readFile;
    t.readFile = r;
    function r(D, O, N) {
      return (typeof O == "function" && ((N = O), (O = null)), F(D, O, N));
      function F(B, L, G, Q) {
        return e(B, L, function (K) {
          K && (K.code === "EMFILE" || K.code === "ENFILE")
            ? $ue([F, [B, L, G], K, Q || Date.now(), Date.now()])
            : typeof G == "function" && G.apply(this, arguments);
        });
      }
    }
    var n = t.writeFile;
    t.writeFile = o;
    function o(D, O, N, F) {
      return (typeof N == "function" && ((F = N), (N = null)), B(D, O, N, F));
      function B(L, G, Q, K, H) {
        return n(L, G, Q, function (U) {
          U && (U.code === "EMFILE" || U.code === "ENFILE")
            ? $ue([B, [L, G, Q, K], U, H || Date.now(), Date.now()])
            : typeof K == "function" && K.apply(this, arguments);
        });
      }
    }
    var s = t.appendFile;
    s && (t.appendFile = a);
    function a(D, O, N, F) {
      return (typeof N == "function" && ((F = N), (N = null)), B(D, O, N, F));
      function B(L, G, Q, K, H) {
        return s(L, G, Q, function (U) {
          U && (U.code === "EMFILE" || U.code === "ENFILE")
            ? $ue([B, [L, G, Q, K], U, H || Date.now(), Date.now()])
            : typeof K == "function" && K.apply(this, arguments);
        });
      }
    }
    var u = t.copyFile;
    u && (t.copyFile = c);
    function c(D, O, N, F) {
      return (typeof N == "function" && ((F = N), (N = 0)), B(D, O, N, F));
      function B(L, G, Q, K, H) {
        return u(L, G, Q, function (U) {
          U && (U.code === "EMFILE" || U.code === "ENFILE")
            ? $ue([B, [L, G, Q, K], U, H || Date.now(), Date.now()])
            : typeof K == "function" && K.apply(this, arguments);
        });
      }
    }
    var m = t.readdir;
    t.readdir = f;
    var d = /^v[0-5]\./;
    function f(D, O, N) {
      typeof O == "function" && ((N = O), (O = null));
      var F = d.test(process.version)
        ? function (G, Q, K, H) {
            return m(G, B(G, Q, K, H));
          }
        : function (G, Q, K, H) {
            return m(G, Q, B(G, Q, K, H));
          };
      return F(D, O, N);
      function B(L, G, Q, K) {
        return function (H, U) {
          H && (H.code === "EMFILE" || H.code === "ENFILE")
            ? $ue([F, [L, G, Q], H, K || Date.now(), Date.now()])
            : (U && U.sort && U.sort(), typeof Q == "function" && Q.call(this, H, U));
        };
      }
    }
    if (process.version.substr(0, 4) === "v0.8") {
      var p = Bjs(t);
      ((y = p.ReadStream), (v = p.WriteStream));
    }
    var h = t.ReadStream;
    h && ((y.prototype = Object.create(h.prototype)), (y.prototype.open = E));
    var g = t.WriteStream;
    (g && ((v.prototype = Object.create(g.prototype)), (v.prototype.open = C)),
      Object.defineProperty(t, "ReadStream", {
        get: function () {
          return y;
        },
        set: function (D) {
          y = D;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t, "WriteStream", {
        get: function () {
          return v;
        },
        set: function (D) {
          v = D;
        },
        enumerable: !0,
        configurable: !0,
      }));
    var b = y;
    Object.defineProperty(t, "FileReadStream", {
      get: function () {
        return b;
      },
      set: function (D) {
        b = D;
      },
      enumerable: !0,
      configurable: !0,
    });
    var A = v;
    Object.defineProperty(t, "FileWriteStream", {
      get: function () {
        return A;
      },
      set: function (D) {
        A = D;
      },
      enumerable: !0,
      configurable: !0,
    });
    function y(D, O) {
      return this instanceof y ? (h.apply(this, arguments), this) : y.apply(Object.create(y.prototype), arguments);
    }
    function E() {
      var D = this;
      P(D.path, D.flags, D.mode, function (O, N) {
        O ? (D.autoClose && D.destroy(), D.emit("error", O)) : ((D.fd = N), D.emit("open", N), D.read());
      });
    }
    function v(D, O) {
      return this instanceof v ? (g.apply(this, arguments), this) : v.apply(Object.create(v.prototype), arguments);
    }
    function C() {
      var D = this;
      P(D.path, D.flags, D.mode, function (O, N) {
        O ? (D.destroy(), D.emit("error", O)) : ((D.fd = N), D.emit("open", N));
      });
    }
    function x(D, O) {
      return new t.ReadStream(D, O);
    }
    function k(D, O) {
      return new t.WriteStream(D, O);
    }
    var R = t.open;
    t.open = P;
    function P(D, O, N, F) {
      return (typeof N == "function" && ((F = N), (N = null)), B(D, O, N, F));
      function B(L, G, Q, K, H) {
        return R(L, G, Q, function (U, Y) {
          U && (U.code === "EMFILE" || U.code === "ENFILE")
            ? $ue([B, [L, G, Q, K], U, H || Date.now(), Date.now()])
            : typeof K == "function" && K.apply(this, arguments);
        });
      }
    }
    return t;
  }
  function $ue(t) {
    (OW("ENQUEUE", t[0].name, t[1]), Ld[kg].push(t), ner());
  }
  var $tt;
  function bLn() {
    for (var t = Date.now(), e = 0; e < Ld[kg].length; ++e)
      Ld[kg][e].length > 2 && ((Ld[kg][e][3] = t), (Ld[kg][e][4] = t));
    ner();
  }
  function ner() {
    if ((clearTimeout($tt), ($tt = void 0), Ld[kg].length !== 0)) {
      var t = Ld[kg].shift(),
        e = t[0],
        r = t[1],
        n = t[2],
        o = t[3],
        s = t[4];
      if (o === void 0) (OW("RETRY", e.name, r), e.apply(null, r));
      else if (Date.now() - o >= 6e4) {
        OW("TIMEOUT", e.name, r);
        var a = r.pop();
        typeof a == "function" && a.call(null, n);
      } else {
        var u = Date.now() - s,
          c = Math.max(s - o, 1),
          m = Math.min(c * 1.2, 100);
        u >= m ? (OW("RETRY", e.name, r), e.apply(null, r.concat([o]))) : Ld[kg].push(t);
      }
      $tt === void 0 && ($tt = setTimeout(ner, 0));
    }
  }
});