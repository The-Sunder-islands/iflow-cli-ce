/**
 * @module IZi
 * @category utils/fs
 * @label fs
 * @position 1919 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (IZi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var IZi = T((rxl, xEr) => {
  var Hd = Ae("fs"),
    Zfu = _Zi(),
    epu = CZi(),
    tpu = wZi(),
    zbt = Ae("util"),
    nb,
    Kbt;
  typeof Symbol == "function" && typeof Symbol.for == "function"
    ? ((nb = Symbol.for("graceful-fs.queue")), (Kbt = Symbol.for("graceful-fs.previous")))
    : ((nb = "___graceful-fs.queue"), (Kbt = "___graceful-fs.previous"));
  function rpu() {}
  function DZi(t, e) {
    Object.defineProperty(t, nb, {
      get: function () {
        return e;
      },
    });
  }
  var VJ = rpu;
  zbt.debuglog
    ? (VJ = zbt.debuglog("gfs4"))
    : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") &&
      (VJ = function () {
        var t = zbt.format.apply(zbt, arguments);
        ((t =
          "GFS4: " +
          t.split(/\n/).join(`
GFS4: `)),
          console.error(t));
      });
  Hd[nb] ||
    ((xZi = global[nb] || []),
    DZi(Hd, xZi),
    (Hd.close = (function (t) {
      function e(r, n) {
        return t.call(Hd, r, function (o) {
          (o || TZi(), typeof n == "function" && n.apply(this, arguments));
        });
      }
      return (Object.defineProperty(e, Kbt, { value: t }), e);
    })(Hd.close)),
    (Hd.closeSync = (function (t) {
      function e(r) {
        (t.apply(Hd, arguments), TZi());
      }
      return (Object.defineProperty(e, Kbt, { value: t }), e);
    })(Hd.closeSync)),
    /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") &&
      process.on("exit", function () {
        (VJ(Hd[nb]), Ae("assert").equal(Hd[nb].length, 0));
      }));
  var xZi;
  global[nb] || DZi(global, Hd[nb]);
  xEr.exports = SEr(tpu(Hd));
  process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !Hd.__patched && ((xEr.exports = SEr(Hd)), (Hd.__patched = !0));
  function SEr(t) {
    (Zfu(t), (t.gracefulify = SEr), (t.createReadStream = x), (t.createWriteStream = k));
    var e = t.readFile;
    t.readFile = r;
    function r(D, O, N) {
      return (typeof O == "function" && ((N = O), (O = null)), F(D, O, N));
      function F(B, L, G, Q) {
        return e(B, L, function (K) {
          K && (K.code === "EMFILE" || K.code === "ENFILE")
            ? Nfe([F, [B, L, G], K, Q || Date.now(), Date.now()])
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
            ? Nfe([B, [L, G, Q, K], U, H || Date.now(), Date.now()])
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
            ? Nfe([B, [L, G, Q, K], U, H || Date.now(), Date.now()])
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
            ? Nfe([B, [L, G, Q, K], U, H || Date.now(), Date.now()])
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
            ? Nfe([F, [L, G, Q], H, K || Date.now(), Date.now()])
            : (U && U.sort && U.sort(), typeof Q == "function" && Q.call(this, H, U));
        };
      }
    }
    if (process.version.substr(0, 4) === "v0.8") {
      var p = epu(t);
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
            ? Nfe([B, [L, G, Q, K], U, H || Date.now(), Date.now()])
            : typeof K == "function" && K.apply(this, arguments);
        });
      }
    }
    return t;
  }
  function Nfe(t) {
    (VJ("ENQUEUE", t[0].name, t[1]), Hd[nb].push(t), wEr());
  }
  var Ybt;
  function TZi() {
    for (var t = Date.now(), e = 0; e < Hd[nb].length; ++e)
      Hd[nb][e].length > 2 && ((Hd[nb][e][3] = t), (Hd[nb][e][4] = t));
    wEr();
  }
  function wEr() {
    if ((clearTimeout(Ybt), (Ybt = void 0), Hd[nb].length !== 0)) {
      var t = Hd[nb].shift(),
        e = t[0],
        r = t[1],
        n = t[2],
        o = t[3],
        s = t[4];
      if (o === void 0) (VJ("RETRY", e.name, r), e.apply(null, r));
      else if (Date.now() - o >= 6e4) {
        VJ("TIMEOUT", e.name, r);
        var a = r.pop();
        typeof a == "function" && a.call(null, n);
      } else {
        var u = Date.now() - s,
          c = Math.max(s - o, 1),
          m = Math.min(c * 1.2, 100);
        u >= m ? (VJ("RETRY", e.name, r), e.apply(null, r.concat([o]))) : Hd[nb].push(t);
      }
      Ybt === void 0 && (Ybt = setTimeout(wEr, 0));
    }
  }
});