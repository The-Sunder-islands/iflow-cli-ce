/**
 * @module Ztr
 * @category app/i18n
 * @label iflow-i18n
 * @position 1386 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ztr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Functions: jzs, Mzs, Up, rEe, Uzs, Qzs, Fzs, Gzs
 * Features: esbuild module exports: Ztr
 * === End semantic info ===
 */


var Ztr = T((QF) => {
  QF.setopts = $zs;
  QF.ownProp = f$n;
  QF.makeAbs = rEe;
  QF.finish = jzs;
  QF.mark = Qzs;
  QF.isIgnored = h$n;
  QF.childrenIgnored = Gzs;
  function f$n(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  var Bzs = Ae("fs"),
    ice = Ae("path"),
    Lzs = uD(),
    p$n = J4(),
    Xtr = Lzs.Minimatch;
  function Mzs(t, e) {
    return t.localeCompare(e, "en");
  }
  function Fzs(t, e) {
    ((t.ignore = e.ignore || []),
      Array.isArray(t.ignore) || (t.ignore = [t.ignore]),
      t.ignore.length && (t.ignore = t.ignore.map(Uzs)));
  }
  function Uzs(t) {
    var e = null;
    if (t.slice(-3) === "/**") {
      var r = t.replace(/(\/\*\*)+$/, "");
      e = new Xtr(r, { dot: !0 });
    }
    return { matcher: new Xtr(t, { dot: !0 }), gmatcher: e };
  }
  function $zs(t, e, r) {
    if ((r || (r = {}), r.matchBase && e.indexOf("/") === -1)) {
      if (r.noglobstar) throw new Error("base matching requires globstar");
      e = "**/" + e;
    }
    ((t.silent = !!r.silent),
      (t.pattern = e),
      (t.strict = r.strict !== !1),
      (t.realpath = !!r.realpath),
      (t.realpathCache = r.realpathCache || Object.create(null)),
      (t.follow = !!r.follow),
      (t.dot = !!r.dot),
      (t.mark = !!r.mark),
      (t.nodir = !!r.nodir),
      t.nodir && (t.mark = !0),
      (t.sync = !!r.sync),
      (t.nounique = !!r.nounique),
      (t.nonull = !!r.nonull),
      (t.nosort = !!r.nosort),
      (t.nocase = !!r.nocase),
      (t.stat = !!r.stat),
      (t.noprocess = !!r.noprocess),
      (t.absolute = !!r.absolute),
      (t.fs = r.fs || Bzs),
      (t.maxLength = r.maxLength || 1 / 0),
      (t.cache = r.cache || Object.create(null)),
      (t.statCache = r.statCache || Object.create(null)),
      (t.symlinks = r.symlinks || Object.create(null)),
      Fzs(t, r),
      (t.changedCwd = !1));
    var n = process.cwd();
    (f$n(r, "cwd") ? ((t.cwd = ice.resolve(r.cwd)), (t.changedCwd = t.cwd !== n)) : (t.cwd = n),
      (t.root = r.root || ice.resolve(t.cwd, "/")),
      (t.root = ice.resolve(t.root)),
      process.platform === "win32" && (t.root = t.root.replace(/\\/g, "/")),
      (t.cwdAbs = p$n(t.cwd) ? t.cwd : rEe(t, t.cwd)),
      process.platform === "win32" && (t.cwdAbs = t.cwdAbs.replace(/\\/g, "/")),
      (t.nomount = !!r.nomount),
      (r.nonegate = !0),
      (r.nocomment = !0),
      (r.allowWindowsEscape = !1),
      (t.minimatch = new Xtr(e, r)),
      (t.options = t.minimatch.options));
  }
  function jzs(t) {
    for (var e = t.nounique, r = e ? [] : Object.create(null), n = 0, o = t.matches.length; n < o; n++) {
      var s = t.matches[n];
      if (!s || Object.keys(s).length === 0) {
        if (t.nonull) {
          var a = t.minimatch.globSet[n];
          e ? r.push(a) : (r[a] = !0);
        }
      } else {
        var u = Object.keys(s);
        e
          ? r.push.apply(r, u)
          : u.forEach(function (c) {
              r[c] = !0;
            });
      }
    }
    if ((e || (r = Object.keys(r)), t.nosort || (r = r.sort(Mzs)), t.mark)) {
      for (var n = 0; n < r.length; n++) r[n] = t._mark(r[n]);
      t.nodir &&
        (r = r.filter(function (c) {
          var m = !/\/$/.test(c),
            d = t.cache[c] || t.cache[rEe(t, c)];
          return (m && d && (m = d !== "DIR" && !Array.isArray(d)), m);
        }));
    }
    (t.ignore.length &&
      (r = r.filter(function (c) {
        return !h$n(t, c);
      })),
      (t.found = r));
  }
  function Qzs(t, e) {
    var r = rEe(t, e),
      n = t.cache[r],
      o = e;
    if (n) {
      var s = n === "DIR" || Array.isArray(n),
        a = e.slice(-1) === "/";
      if ((s && !a ? (o += "/") : !s && a && (o = o.slice(0, -1)), o !== e)) {
        var u = rEe(t, o);
        ((t.statCache[u] = t.statCache[r]), (t.cache[u] = t.cache[r]));
      }
    }
    return o;
  }
  function rEe(t, e) {
    var r = e;
    return (
      e.charAt(0) === "/"
        ? (r = ice.join(t.root, e))
        : p$n(e) || e === ""
          ? (r = e)
          : t.changedCwd
            ? (r = ice.resolve(t.cwd, e))
            : (r = ice.resolve(e)),
      process.platform === "win32" && (r = r.replace(/\\/g, "/")),
      r
    );
  }
  function h$n(t, e) {
    return t.ignore.length
      ? t.ignore.some(function (r) {
          return r.matcher.match(e) || !!(r.gmatcher && r.gmatcher.match(e));
        })
      : !1;
  }
  function Gzs(t, e) {
    return t.ignore.length
      ? t.ignore.some(function (r) {
          return !!(r.gmatcher && r.gmatcher.match(e));
        })
      : !1;
  }
});
var _$n = T((T9c, y$n) => {
  y$n.exports = A$n;
  A$n.GlobSync = Up;
  var qzs = $W(),
    g$n = uD(),
    S9c = g$n.Minimatch,
    w9c = nrr().Glob,
    x9c = Ae("util"),
    trr = Ae("path"),
    b$n = Ae("assert"),
    Irt = J4(),
    HW = Ztr(),
    Hzs = HW.setopts,
    rrr = HW.ownProp,
    Vzs = HW.childrenIgnored,
    Wzs = HW.isIgnored;
  function A$n(t, e) {
    if (typeof e == "function" || arguments.length === 3)
      throw new TypeError(`callback provided to sync glob
See: https://github.com/isaacs/node-glob/issues/167`);
    return new Up(t, e).found;
  }
  function Up(t, e) {
    if (!t) throw new Error("must provide pattern");
    if (typeof e == "function" || arguments.length === 3)
      throw new TypeError(`callback provided to sync glob
See: https://github.com/isaacs/node-glob/issues/167`);
    if (!(this instanceof Up)) return new Up(t, e);
    if ((Hzs(this, t, e), this.noprocess)) return this;
    var r = this.minimatch.set.length;
    this.matches = new Array(r);
    for (var n = 0; n < r; n++) this._process(this.minimatch.set[n], n, !1);
    this._finish();
  }
  Up.prototype._finish = function () {
    if ((b$n.ok(this instanceof Up), this.realpath)) {
      var t = this;
      this.matches.forEach(function (e, r) {
        var n = (t.matches[r] = Object.create(null));
        for (var o in e)
          try {
            o = t._makeAbs(o);
            var s = qzs.realpathSync(o, t.realpathCache);
            n[s] = !0;
          } catch (a) {
            if (a.syscall === "stat") n[t._makeAbs(o)] = !0;
            else throw a;
          }
      });
    }
    HW.finish(this);
  };
  Up.prototype._process = function (t, e, r) {
    b$n.ok(this instanceof Up);
    for (var n = 0; typeof t[n] == "string"; ) n++;
    var o;
    switch (n) {
      case t.length:
        this._processSimple(t.join("/"), e);
        return;
      case 0:
        o = null;
        break;
      default:
        o = t.slice(0, n).join("/");
        break;
    }
    var s = t.slice(n),
      a;
    o === null
      ? (a = ".")
      : ((Irt(o) ||
          Irt(
            t
              .map(function (m) {
                return typeof m == "string" ? m : "[*]";
              })
              .join("/"),
          )) &&
          (!o || !Irt(o)) &&
          (o = "/" + o),
        (a = o));
    var u = this._makeAbs(a);
    if (!Vzs(this, a)) {
      var c = s[0] === g$n.GLOBSTAR;
      c ? this._processGlobStar(o, a, u, s, e, r) : this._processReaddir(o, a, u, s, e, r);
    }
  };
  Up.prototype._processReaddir = function (t, e, r, n, o, s) {
    var a = this._readdir(r, s);
    if (a) {
      for (
        var u = n[0], c = !!this.minimatch.negate, m = u._glob, d = this.dot || m.charAt(0) === ".", f = [], p = 0;
        p < a.length;
        p++
      ) {
        var h = a[p];
        if (h.charAt(0) !== "." || d) {
          var g;
          (c && !t ? (g = !h.match(u)) : (g = h.match(u)), g && f.push(h));
        }
      }
      var b = f.length;
      if (b !== 0) {
        if (n.length === 1 && !this.mark && !this.stat) {
          this.matches[o] || (this.matches[o] = Object.create(null));
          for (var p = 0; p < b; p++) {
            var h = f[p];
            (t && (t.slice(-1) !== "/" ? (h = t + "/" + h) : (h = t + h)),
              h.charAt(0) === "/" && !this.nomount && (h = trr.join(this.root, h)),
              this._emitMatch(o, h));
          }
          return;
        }
        n.shift();
        for (var p = 0; p < b; p++) {
          var h = f[p],
            A;
          (t ? (A = [t, h]) : (A = [h]), this._process(A.concat(n), o, s));
        }
      }
    }
  };
  Up.prototype._emitMatch = function (t, e) {
    if (!Wzs(this, e)) {
      var r = this._makeAbs(e);
      if ((this.mark && (e = this._mark(e)), this.absolute && (e = r), !this.matches[t][e])) {
        if (this.nodir) {
          var n = this.cache[r];
          if (n === "DIR" || Array.isArray(n)) return;
        }
        ((this.matches[t][e] = !0), this.stat && this._stat(e));
      }
    }
  };
  Up.prototype._readdirInGlobStar = function (t) {
    if (this.follow) return this._readdir(t, !1);
    var e, r, n;
    try {
      r = this.fs.lstatSync(t);
    } catch (s) {
      if (s.code === "ENOENT") return null;
    }
    var o = r && r.isSymbolicLink();
    return (
      (this.symlinks[t] = o),
      !o && r && !r.isDirectory() ? (this.cache[t] = "FILE") : (e = this._readdir(t, !1)),
      e
    );
  };
  Up.prototype._readdir = function (t, e) {
    var r;
    if (e && !rrr(this.symlinks, t)) return this._readdirInGlobStar(t);
    if (rrr(this.cache, t)) {
      var n = this.cache[t];
      if (!n || n === "FILE") return null;
      if (Array.isArray(n)) return n;
    }
    try {
      return this._readdirEntries(t, this.fs.readdirSync(t));
    } catch (o) {
      return (this._readdirError(t, o), null);
    }
  };
  Up.prototype._readdirEntries = function (t, e) {
    if (!this.mark && !this.stat)
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (t === "/" ? (n = t + n) : (n = t + "/" + n), (this.cache[n] = !0));
      }
    return ((this.cache[t] = e), e);
  };
  Up.prototype._readdirError = function (t, e) {
    switch (e.code) {
      case "ENOTSUP":
      case "ENOTDIR":
        var r = this._makeAbs(t);
        if (((this.cache[r] = "FILE"), r === this.cwdAbs)) {
          var n = new Error(e.code + " invalid cwd " + this.cwd);
          throw ((n.path = this.cwd), (n.code = e.code), n);
        }
        break;
      case "ENOENT":
      case "ELOOP":
      case "ENAMETOOLONG":
      case "UNKNOWN":
        this.cache[this._makeAbs(t)] = !1;
        break;
      default:
        if (((this.cache[this._makeAbs(t)] = !1), this.strict)) throw e;
        this.silent || console.error("glob error", e);
        break;
    }
  };
  Up.prototype._processGlobStar = function (t, e, r, n, o, s) {
    var a = this._readdir(r, s);
    if (a) {
      var u = n.slice(1),
        c = t ? [t] : [],
        m = c.concat(u);
      this._process(m, o, !1);
      var d = a.length,
        f = this.symlinks[r];
      if (!(f && s))
        for (var p = 0; p < d; p++) {
          var h = a[p];
          if (!(h.charAt(0) === "." && !this.dot)) {
            var g = c.concat(a[p], u);
            this._process(g, o, !0);
            var b = c.concat(a[p], n);
            this._process(b, o, !0);
          }
        }
    }
  };
  Up.prototype._processSimple = function (t, e) {
    var r = this._stat(t);
    if ((this.matches[e] || (this.matches[e] = Object.create(null)), !!r)) {
      if (t && Irt(t) && !this.nomount) {
        var n = /[\/\\]$/.test(t);
        t.charAt(0) === "/" ? (t = trr.join(this.root, t)) : ((t = trr.resolve(this.root, t)), n && (t += "/"));
      }
      (process.platform === "win32" && (t = t.replace(/\\/g, "/")), this._emitMatch(e, t));
    }
  };
  Up.prototype._stat = function (t) {
    var e = this._makeAbs(t),
      r = t.slice(-1) === "/";
    if (t.length > this.maxLength) return !1;
    if (!this.stat && rrr(this.cache, e)) {
      var a = this.cache[e];
      if ((Array.isArray(a) && (a = "DIR"), !r || a === "DIR")) return a;
      if (r && a === "FILE") return !1;
    }
    var n,
      o = this.statCache[e];
    if (!o) {
      var s;
      try {
        s = this.fs.lstatSync(e);
      } catch (u) {
        if (u && (u.code === "ENOENT" || u.code === "ENOTDIR")) return ((this.statCache[e] = !1), !1);
      }
      if (s && s.isSymbolicLink())
        try {
          o = this.fs.statSync(e);
        } catch {
          o = s;
        }
      else o = s;
    }
    this.statCache[e] = o;
    var a = !0;
    return (
      o && (a = o.isDirectory() ? "DIR" : "FILE"),
      (this.cache[e] = this.cache[e] || a),
      r && a === "FILE" ? !1 : a
    );
  };
  Up.prototype._mark = function (t) {
    return HW.mark(this, t);
  };
  Up.prototype._makeAbs = function (t) {
    return HW.makeAbs(this, t);
  };
});