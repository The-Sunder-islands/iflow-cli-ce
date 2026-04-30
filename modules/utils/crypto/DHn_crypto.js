/**
 * @module DHn
 * @category utils/crypto
 * @label crypto
 * @position 1469 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (DHn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var DHn = T((hyc, EO) => {
  var t0 = Ae("fs"),
    xnt = Ae("os"),
    Fg = Ae("path"),
    mHn = Ae("crypto"),
    pD = { fs: t0.constants, os: xnt.constants },
    dHn = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    gHn = /XXXXXX/,
    Vea = 3,
    bHn = (pD.O_CREAT || pD.fs.O_CREAT) | (pD.O_EXCL || pD.fs.O_EXCL) | (pD.O_RDWR || pD.fs.O_RDWR),
    Wea = xnt.platform() === "win32",
    zea = pD.EBADF || pD.os.errno.EBADF,
    Yea = pD.ENOENT || pD.os.errno.ENOENT,
    AHn = 448,
    yHn = 384,
    Kea = "exit",
    Ice = [],
    _Hn = t0.rmdirSync.bind(t0),
    EHn = !1;
  function Jea(t, e) {
    return t0.rm(t, { recursive: !0 }, e);
  }
  function vHn(t) {
    return t0.rmSync(t, { recursive: !0 });
  }
  function tir(t, e) {
    let r = Rce(t, e),
      n = r[0],
      o = r[1];
    ata(n, function (s, a) {
      if (s) return o(s);
      let u = a.tries;
      (function c() {
        try {
          let m = SHn(a);
          t0.stat(m, function (d) {
            if (!d) return u-- > 0 ? c() : o(new Error("Could not get a unique tmp filename, max tries reached " + m));
            o(null, m);
          });
        } catch (m) {
          o(m);
        }
      })();
    });
  }
  function rir(t) {
    let e = Rce(t),
      r = e[0],
      n = uta(r),
      o = n.tries;
    do {
      let s = SHn(n);
      try {
        t0.statSync(s);
      } catch {
        return s;
      }
    } while (o-- > 0);
    throw new Error("Could not get a unique tmp filename, max tries reached");
  }
  function Xea(t, e) {
    let r = Rce(t, e),
      n = r[0],
      o = r[1];
    tir(n, function (a, u) {
      if (a) return o(a);
      t0.open(u, bHn, n.mode || yHn, function (m, d) {
        if (m) return o(m);
        if (n.discardDescriptor)
          return t0.close(d, function (p) {
            return o(p, u, void 0, Znr(u, -1, n, !1));
          });
        {
          let f = n.discardDescriptor || n.detachDescriptor;
          o(null, u, d, Znr(u, f ? -1 : d, n, !1));
        }
      });
    });
  }
  function Zea(t) {
    let e = Rce(t),
      r = e[0],
      n = r.discardDescriptor || r.detachDescriptor,
      o = rir(r),
      s = t0.openSync(o, bHn, r.mode || yHn);
    return (
      r.discardDescriptor && (t0.closeSync(s), (s = void 0)),
      { name: o, fd: s, removeCallback: Znr(o, n ? -1 : s, r, !0) }
    );
  }
  function eta(t, e) {
    let r = Rce(t, e),
      n = r[0],
      o = r[1];
    tir(n, function (a, u) {
      if (a) return o(a);
      t0.mkdir(u, n.mode || AHn, function (m) {
        if (m) return o(m);
        o(null, u, CHn(u, n, !1));
      });
    });
  }
  function tta(t) {
    let e = Rce(t),
      r = e[0],
      n = rir(r);
    return (t0.mkdirSync(n, r.mode || AHn), { name: n, removeCallback: CHn(n, r, !0) });
  }
  function rta(t, e) {
    let r = function (n) {
      if (n && !eir(n)) return e(n);
      e();
    };
    0 <= t[0]
      ? t0.close(t[0], function () {
          t0.unlink(t[1], r);
        })
      : t0.unlink(t[1], r);
  }
  function nta(t) {
    let e = null;
    try {
      0 <= t[0] && t0.closeSync(t[0]);
    } catch (r) {
      if (!cta(r) && !eir(r)) throw r;
    } finally {
      try {
        t0.unlinkSync(t[1]);
      } catch (r) {
        eir(r) || (e = r);
      }
    }
    if (e !== null) throw e;
  }
  function Znr(t, e, r, n) {
    let o = wnt(nta, [e, t], n),
      s = wnt(rta, [e, t], n, o);
    return (r.keep || Ice.unshift(o), n ? o : s);
  }
  function CHn(t, e, r) {
    let n = e.unsafeCleanup ? Jea : t0.rmdir.bind(t0),
      o = e.unsafeCleanup ? vHn : _Hn,
      s = wnt(o, t, r),
      a = wnt(n, t, r, s);
    return (e.keep || Ice.unshift(s), r ? s : a);
  }
  function wnt(t, e, r, n) {
    let o = !1;
    return function s(a) {
      if (!o) {
        let u = n || s,
          c = Ice.indexOf(u);
        return (c >= 0 && Ice.splice(c, 1), (o = !0), r || t === _Hn || t === vHn ? t(e) : t(e, a || function () {}));
      }
    };
  }
  function ita() {
    if (EHn)
      for (; Ice.length; )
        try {
          Ice[0]();
        } catch {}
  }
  function fHn(t) {
    let e = [],
      r = null;
    try {
      r = mHn.randomBytes(t);
    } catch {
      r = mHn.pseudoRandomBytes(t);
    }
    for (let n = 0; n < t; n++) e.push(dHn[r[n] % dHn.length]);
    return e.join("");
  }
  function F6(t) {
    return typeof t > "u";
  }
  function Rce(t, e) {
    if (typeof t == "function") return [{}, t];
    if (F6(t)) return [{}, e];
    let r = {};
    for (let n of Object.getOwnPropertyNames(t)) r[n] = t[n];
    return [r, e];
  }
  function ota(t, e, r) {
    let n = Fg.isAbsolute(t) ? t : Fg.join(e, t);
    t0.stat(n, function (o) {
      o
        ? t0.realpath(Fg.dirname(n), function (s, a) {
            if (s) return r(s);
            r(null, Fg.join(a, Fg.basename(n)));
          })
        : t0.realpath(n, r);
    });
  }
  function sta(t, e) {
    let r = Fg.isAbsolute(t) ? t : Fg.join(e, t);
    try {
      return (t0.statSync(r), t0.realpathSync(r));
    } catch {
      let o = t0.realpathSync(Fg.dirname(r));
      return Fg.join(o, Fg.basename(r));
    }
  }
  function SHn(t) {
    let e = t.tmpdir;
    if (!F6(t.name)) return Fg.join(e, t.dir, t.name);
    if (!F6(t.template)) return Fg.join(e, t.dir, t.template).replace(gHn, fHn(6));
    let r = [t.prefix ? t.prefix : "tmp", "-", process.pid, "-", fHn(12), t.postfix ? "-" + t.postfix : ""].join("");
    return Fg.join(e, t.dir, r);
  }
  function wHn(t) {
    if (!F6(t.name)) {
      let e = t.name;
      if (Fg.isAbsolute(e)) throw new Error(`name option must not contain an absolute path, found "${e}".`);
      let r = Fg.basename(e);
      if (r === ".." || r === "." || r !== e) throw new Error(`name option must not contain a path, found "${e}".`);
    }
    if (!F6(t.template) && !t.template.match(gHn)) throw new Error(`Invalid template, found "${t.template}".`);
    if ((!F6(t.tries) && isNaN(t.tries)) || t.tries < 0) throw new Error(`Invalid tries, found "${t.tries}".`);
    ((t.tries = F6(t.name) ? t.tries || Vea : 1),
      (t.keep = !!t.keep),
      (t.detachDescriptor = !!t.detachDescriptor),
      (t.discardDescriptor = !!t.discardDescriptor),
      (t.unsafeCleanup = !!t.unsafeCleanup),
      (t.prefix = F6(t.prefix) ? "" : t.prefix),
      (t.postfix = F6(t.postfix) ? "" : t.postfix));
  }
  function pHn(t, e, r, n) {
    if (F6(e)) return n(null);
    ota(e, r, function (o, s) {
      if (o) return n(o);
      let a = Fg.relative(r, s);
      if (!s.startsWith(r)) return n(new Error(`${t} option must be relative to "${r}", found "${a}".`));
      n(null, a);
    });
  }
  function hHn(t, e, r) {
    if (F6(e)) return;
    let n = sta(e, r),
      o = Fg.relative(r, n);
    if (!n.startsWith(r)) throw new Error(`${t} option must be relative to "${r}", found "${o}".`);
    return o;
  }
  function ata(t, e) {
    mta(t, function (r, n) {
      if (r) return e(r);
      t.tmpdir = n;
      try {
        wHn(t, n);
      } catch (o) {
        return e(o);
      }
      pHn("dir", t.dir, n, function (o, s) {
        if (o) return e(o);
        ((t.dir = F6(s) ? "" : s),
          pHn("template", t.template, n, function (a, u) {
            if (a) return e(a);
            ((t.template = u), e(null, t));
          }));
      });
    });
  }
  function uta(t) {
    let e = (t.tmpdir = THn(t));
    wHn(t, e);
    let r = hHn("dir", t.dir, e);
    return ((t.dir = F6(r) ? "" : r), (t.template = hHn("template", t.template, e)), t);
  }
  function cta(t) {
    return xHn(t, -zea, "EBADF");
  }
  function eir(t) {
    return xHn(t, -Yea, "ENOENT");
  }
  function xHn(t, e, r) {
    return Wea ? t.code === r : t.code === r && t.errno === e;
  }
  function lta() {
    EHn = !0;
  }
  function mta(t, e) {
    return t0.realpath((t && t.tmpdir) || xnt.tmpdir(), e);
  }
  function THn(t) {
    return t0.realpathSync((t && t.tmpdir) || xnt.tmpdir());
  }
  process.addListener(Kea, ita);
  Object.defineProperty(EO.exports, "tmpdir", {
    enumerable: !0,
    configurable: !1,
    get: function () {
      return THn();
    },
  });
  EO.exports.dir = eta;
  EO.exports.dirSync = tta;
  EO.exports.file = Xea;
  EO.exports.fileSync = Zea;
  EO.exports.tmpName = tir;
  EO.exports.tmpNameSync = rir;
  EO.exports.setGracefulCleanup = lta;
});