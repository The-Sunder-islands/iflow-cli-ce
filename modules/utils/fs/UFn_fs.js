/**
 * @module UFn
 * @category utils/fs
 * @label fs
 * @position 1360 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (UFn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var UFn = T((ctr) => {
  var UW = Ae("path"),
    MF = process.platform === "win32",
    LF = Ae("fs"),
    oWs = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);
  function sWs() {
    var t;
    if (oWs) {
      var e = new Error();
      t = r;
    } else t = n;
    return t;
    function r(o) {
      o && ((e.message = o.message), (o = e), n(o));
    }
    function n(o) {
      if (o) {
        if (process.throwDeprecation) throw o;
        if (!process.noDeprecation) {
          var s = "fs: missing callback " + (o.stack || o.message);
          process.traceDeprecation ? console.trace(s) : console.error(s);
        }
      }
    }
  }
  function aWs(t) {
    return typeof t == "function" ? t : sWs();
  }
  var F8c = UW.normalize;
  MF ? (mO = /(.*?)(?:[\/\\]+|$)/g) : (mO = /(.*?)(?:[\/]+|$)/g);
  var mO;
  MF ? (K_e = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/) : (K_e = /^[\/]*/);
  var K_e;
  ctr.realpathSync = function (e, r) {
    if (((e = UW.resolve(e)), r && Object.prototype.hasOwnProperty.call(r, e))) return r[e];
    var n = e,
      o = {},
      s = {},
      a,
      u,
      c,
      m;
    d();
    function d() {
      var A = K_e.exec(e);
      ((a = A[0].length), (u = A[0]), (c = A[0]), (m = ""), MF && !s[c] && (LF.lstatSync(c), (s[c] = !0)));
    }
    for (; a < e.length; ) {
      mO.lastIndex = a;
      var f = mO.exec(e);
      if (((m = u), (u += f[0]), (c = m + f[1]), (a = mO.lastIndex), !(s[c] || (r && r[c] === c)))) {
        var p;
        if (r && Object.prototype.hasOwnProperty.call(r, c)) p = r[c];
        else {
          var h = LF.lstatSync(c);
          if (!h.isSymbolicLink()) {
            ((s[c] = !0), r && (r[c] = c));
            continue;
          }
          var g = null;
          if (!MF) {
            var b = h.dev.toString(32) + ":" + h.ino.toString(32);
            o.hasOwnProperty(b) && (g = o[b]);
          }
          (g === null && (LF.statSync(c), (g = LF.readlinkSync(c))),
            (p = UW.resolve(m, g)),
            r && (r[c] = p),
            MF || (o[b] = g));
        }
        ((e = UW.resolve(p, e.slice(a))), d());
      }
    }
    return (r && (r[n] = e), e);
  };
  ctr.realpath = function (e, r, n) {
    if (
      (typeof n != "function" && ((n = aWs(r)), (r = null)),
      (e = UW.resolve(e)),
      r && Object.prototype.hasOwnProperty.call(r, e))
    )
      return process.nextTick(n.bind(null, null, r[e]));
    var o = e,
      s = {},
      a = {},
      u,
      c,
      m,
      d;
    f();
    function f() {
      var A = K_e.exec(e);
      ((u = A[0].length),
        (c = A[0]),
        (m = A[0]),
        (d = ""),
        MF && !a[m]
          ? LF.lstat(m, function (y) {
              if (y) return n(y);
              ((a[m] = !0), p());
            })
          : process.nextTick(p));
    }
    function p() {
      if (u >= e.length) return (r && (r[o] = e), n(null, e));
      mO.lastIndex = u;
      var A = mO.exec(e);
      return (
        (d = c),
        (c += A[0]),
        (m = d + A[1]),
        (u = mO.lastIndex),
        a[m] || (r && r[m] === m)
          ? process.nextTick(p)
          : r && Object.prototype.hasOwnProperty.call(r, m)
            ? b(r[m])
            : LF.lstat(m, h)
      );
    }
    function h(A, y) {
      if (A) return n(A);
      if (!y.isSymbolicLink()) return ((a[m] = !0), r && (r[m] = m), process.nextTick(p));
      if (!MF) {
        var E = y.dev.toString(32) + ":" + y.ino.toString(32);
        if (s.hasOwnProperty(E)) return g(null, s[E], m);
      }
      LF.stat(m, function (v) {
        if (v) return n(v);
        LF.readlink(m, function (C, x) {
          (MF || (s[E] = x), g(C, x));
        });
      });
    }
    function g(A, y, E) {
      if (A) return n(A);
      var v = UW.resolve(d, y);
      (r && (r[E] = v), b(v));
    }
    function b(A) {
      ((e = UW.resolve(A, e.slice(u))), f());
    }
  };
});
var $W = T(($8c, GFn) => {
  GFn.exports = FF;
  FF.realpath = FF;
  FF.sync = dtr;
  FF.realpathSync = dtr;
  FF.monkeypatch = cWs;
  FF.unmonkeypatch = lWs;
  var Zue = Ae("fs"),
    ltr = Zue.realpath,
    mtr = Zue.realpathSync,
    uWs = process.version,
    $Fn = /^v[0-5]\./.test(uWs),
    jFn = UFn();
  function QFn(t) {
    return t && t.syscall === "realpath" && (t.code === "ELOOP" || t.code === "ENOMEM" || t.code === "ENAMETOOLONG");
  }
  function FF(t, e, r) {
    if ($Fn) return ltr(t, e, r);
    (typeof e == "function" && ((r = e), (e = null)),
      ltr(t, e, function (n, o) {
        QFn(n) ? jFn.realpath(t, e, r) : r(n, o);
      }));
  }
  function dtr(t, e) {
    if ($Fn) return mtr(t, e);
    try {
      return mtr(t, e);
    } catch (r) {
      if (QFn(r)) return jFn.realpathSync(t, e);
      throw r;
    }
  }
  function cWs() {
    ((Zue.realpath = FF), (Zue.realpathSync = dtr));
  }
  function lWs() {
    ((Zue.realpath = ltr), (Zue.realpathSync = mtr));
  }
});