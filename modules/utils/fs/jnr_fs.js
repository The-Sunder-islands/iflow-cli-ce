/**
 * @module jnr
 * @category utils/fs
 * @label fs
 * @position 1453 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jnr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jnr = T((Z6c, xqn) => {
  xqn.exports = $nr;
  $nr.sync = wqn;
  var Hc = Ae("assert"),
    vqn = Ae("path"),
    yqn = Ae("fs"),
    wce = void 0;
  try {
    wce = Onr();
  } catch {}
  var Cqn = parseInt("666", 8),
    JZs = { nosort: !0, silent: !0 },
    Fnr = 0,
    MEe = process.platform === "win32";
  function Sqn(t) {
    var e = ["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"];
    if (
      (e.forEach(function (r) {
        ((t[r] = t[r] || yqn[r]), (r = r + "Sync"), (t[r] = t[r] || yqn[r]));
      }),
      (t.maxBusyTries = t.maxBusyTries || 3),
      (t.emfileWait = t.emfileWait || 1e3),
      t.glob === !1 && (t.disableGlob = !0),
      t.disableGlob !== !0 && wce === void 0)
    )
      throw Error("glob dependency not found, set `options.disableGlob = true` if intentional");
    ((t.disableGlob = t.disableGlob || !1), (t.glob = t.glob || JZs));
  }
  function $nr(t, e, r) {
    (typeof e == "function" && ((r = e), (e = {})),
      Hc(t, "rimraf: missing path"),
      Hc.equal(typeof t, "string", "rimraf: path should be a string"),
      Hc.equal(typeof r, "function", "rimraf: callback function required"),
      Hc(e, "rimraf: invalid options argument provided"),
      Hc.equal(typeof e, "object", "rimraf: options should be object"),
      Sqn(e));
    var n = 0,
      o = null,
      s = 0;
    if (e.disableGlob || !wce.hasMagic(t)) return u(null, [t]);
    e.lstat(t, function (c, m) {
      if (!c) return u(null, [t]);
      wce(t, e.glob, u);
    });
    function a(c) {
      ((o = o || c), --s === 0 && r(o));
    }
    function u(c, m) {
      if (c) return r(c);
      if (((s = m.length), s === 0)) return r();
      m.forEach(function (d) {
        Unr(d, e, function f(p) {
          if (p) {
            if ((p.code === "EBUSY" || p.code === "ENOTEMPTY" || p.code === "EPERM") && n < e.maxBusyTries) {
              n++;
              var h = n * 100;
              return setTimeout(function () {
                Unr(d, e, f);
              }, h);
            }
            if (p.code === "EMFILE" && Fnr < e.emfileWait)
              return setTimeout(function () {
                Unr(d, e, f);
              }, Fnr++);
            p.code === "ENOENT" && (p = null);
          }
          ((Fnr = 0), a(p));
        });
      });
    }
  }
  function Unr(t, e, r) {
    (Hc(t),
      Hc(e),
      Hc(typeof r == "function"),
      e.lstat(t, function (n, o) {
        if (n && n.code === "ENOENT") return r(null);
        if ((n && n.code === "EPERM" && MEe && _qn(t, e, n, r), o && o.isDirectory())) return hnt(t, e, n, r);
        e.unlink(t, function (s) {
          if (s) {
            if (s.code === "ENOENT") return r(null);
            if (s.code === "EPERM") return MEe ? _qn(t, e, s, r) : hnt(t, e, s, r);
            if (s.code === "EISDIR") return hnt(t, e, s, r);
          }
          return r(s);
        });
      }));
  }
  function _qn(t, e, r, n) {
    (Hc(t),
      Hc(e),
      Hc(typeof n == "function"),
      r && Hc(r instanceof Error),
      e.chmod(t, Cqn, function (o) {
        o
          ? n(o.code === "ENOENT" ? null : r)
          : e.stat(t, function (s, a) {
              s ? n(s.code === "ENOENT" ? null : r) : a.isDirectory() ? hnt(t, e, r, n) : e.unlink(t, n);
            });
      }));
  }
  function Eqn(t, e, r) {
    (Hc(t), Hc(e), r && Hc(r instanceof Error));
    try {
      e.chmodSync(t, Cqn);
    } catch (o) {
      if (o.code === "ENOENT") return;
      throw r;
    }
    try {
      var n = e.statSync(t);
    } catch (o) {
      if (o.code === "ENOENT") return;
      throw r;
    }
    n.isDirectory() ? gnt(t, e, r) : e.unlinkSync(t);
  }
  function hnt(t, e, r, n) {
    (Hc(t),
      Hc(e),
      r && Hc(r instanceof Error),
      Hc(typeof n == "function"),
      e.rmdir(t, function (o) {
        o && (o.code === "ENOTEMPTY" || o.code === "EEXIST" || o.code === "EPERM")
          ? XZs(t, e, n)
          : o && o.code === "ENOTDIR"
            ? n(r)
            : n(o);
      }));
  }
  function XZs(t, e, r) {
    (Hc(t),
      Hc(e),
      Hc(typeof r == "function"),
      e.readdir(t, function (n, o) {
        if (n) return r(n);
        var s = o.length;
        if (s === 0) return e.rmdir(t, r);
        var a;
        o.forEach(function (u) {
          $nr(vqn.join(t, u), e, function (c) {
            if (!a) {
              if (c) return r((a = c));
              --s === 0 && e.rmdir(t, r);
            }
          });
        });
      }));
  }
  function wqn(t, e) {
    ((e = e || {}),
      Sqn(e),
      Hc(t, "rimraf: missing path"),
      Hc.equal(typeof t, "string", "rimraf: path should be a string"),
      Hc(e, "rimraf: missing options"),
      Hc.equal(typeof e, "object", "rimraf: options should be object"));
    var r;
    if (e.disableGlob || !wce.hasMagic(t)) r = [t];
    else
      try {
        (e.lstatSync(t), (r = [t]));
      } catch {
        r = wce.sync(t, e.glob);
      }
    if (r.length)
      for (var n = 0; n < r.length; n++) {
        var t = r[n];
        try {
          var o = e.lstatSync(t);
        } catch (a) {
          if (a.code === "ENOENT") return;
          a.code === "EPERM" && MEe && Eqn(t, e, a);
        }
        try {
          o && o.isDirectory() ? gnt(t, e, null) : e.unlinkSync(t);
        } catch (a) {
          if (a.code === "ENOENT") return;
          if (a.code === "EPERM") return MEe ? Eqn(t, e, a) : gnt(t, e, a);
          if (a.code !== "EISDIR") throw a;
          gnt(t, e, a);
        }
      }
  }
  function gnt(t, e, r) {
    (Hc(t), Hc(e), r && Hc(r instanceof Error));
    try {
      e.rmdirSync(t);
    } catch (n) {
      if (n.code === "ENOENT") return;
      if (n.code === "ENOTDIR") throw r;
      (n.code === "ENOTEMPTY" || n.code === "EEXIST" || n.code === "EPERM") && ZZs(t, e);
    }
  }
  function ZZs(t, e) {
    (Hc(t),
      Hc(e),
      e.readdirSync(t).forEach(function (a) {
        wqn(vqn.join(t, a), e);
      }));
    var r = MEe ? 100 : 1,
      n = 0;
    do {
      var o = !0;
      try {
        var s = e.rmdirSync(t, e);
        return ((o = !1), s);
      } finally {
        if (++n < r && o) continue;
      }
    } while (!0);
  }
});