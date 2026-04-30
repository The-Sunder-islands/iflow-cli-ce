/**
 * @module Onr
 * @category utils/fs
 * @label fs
 * @position 1452 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Onr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Onr = T((X6c, Aqn) => {
  Aqn.exports = sz;
  var jZs = $W(),
    bqn = uD(),
    K6c = bqn.Minimatch,
    QZs = qo(),
    GZs = Ae("events").EventEmitter,
    Nnr = Ae("path"),
    Pnr = Ae("assert"),
    LEe = J4(),
    Lnr = gqn(),
    az = Inr(),
    qZs = az.setopts,
    Bnr = az.ownProp,
    Mnr = wrt(),
    J6c = Ae("util"),
    HZs = az.childrenIgnored,
    VZs = az.isIgnored,
    WZs = rce();
  function sz(t, e, r) {
    if ((typeof e == "function" && ((r = e), (e = {})), e || (e = {}), e.sync)) {
      if (r) throw new TypeError("callback provided to sync glob");
      return Lnr(t, e);
    }
    return new ul(t, e, r);
  }
  sz.sync = Lnr;
  var zZs = (sz.GlobSync = Lnr.GlobSync);
  sz.glob = sz;
  function YZs(t, e) {
    if (e === null || typeof e != "object") return t;
    for (var r = Object.keys(e), n = r.length; n--; ) t[r[n]] = e[r[n]];
    return t;
  }
  sz.hasMagic = function (t, e) {
    var r = YZs({}, e);
    r.noprocess = !0;
    var n = new ul(t, r),
      o = n.minimatch.set;
    if (!t) return !1;
    if (o.length > 1) return !0;
    for (var s = 0; s < o[0].length; s++) if (typeof o[0][s] != "string") return !0;
    return !1;
  };
  sz.Glob = ul;
  QZs(ul, GZs);
  function ul(t, e, r) {
    if ((typeof e == "function" && ((r = e), (e = null)), e && e.sync)) {
      if (r) throw new TypeError("callback provided to sync glob");
      return new zZs(t, e);
    }
    if (!(this instanceof ul)) return new ul(t, e, r);
    (qZs(this, t, e), (this._didRealPath = !1));
    var n = this.minimatch.set.length;
    ((this.matches = new Array(n)),
      typeof r == "function" &&
        ((r = WZs(r)),
        this.on("error", r),
        this.on("end", function (c) {
          r(null, c);
        })));
    var o = this;
    if (((this._processing = 0), (this._emitQueue = []), (this._processQueue = []), (this.paused = !1), this.noprocess))
      return this;
    if (n === 0) return u();
    for (var s = !0, a = 0; a < n; a++) this._process(this.minimatch.set[a], a, !1, u);
    s = !1;
    function u() {
      (--o._processing,
        o._processing <= 0 &&
          (s
            ? process.nextTick(function () {
                o._finish();
              })
            : o._finish()));
    }
  }
  ul.prototype._finish = function () {
    if ((Pnr(this instanceof ul), !this.aborted)) {
      if (this.realpath && !this._didRealpath) return this._realpath();
      (az.finish(this), this.emit("end", this.found));
    }
  };
  ul.prototype._realpath = function () {
    if (this._didRealpath) return;
    this._didRealpath = !0;
    var t = this.matches.length;
    if (t === 0) return this._finish();
    for (var e = this, r = 0; r < this.matches.length; r++) this._realpathSet(r, n);
    function n() {
      --t === 0 && e._finish();
    }
  };
  ul.prototype._realpathSet = function (t, e) {
    var r = this.matches[t];
    if (!r) return e();
    var n = Object.keys(r),
      o = this,
      s = n.length;
    if (s === 0) return e();
    var a = (this.matches[t] = Object.create(null));
    n.forEach(function (u, c) {
      ((u = o._makeAbs(u)),
        jZs.realpath(u, o.realpathCache, function (m, d) {
          (m ? (m.syscall === "stat" ? (a[u] = !0) : o.emit("error", m)) : (a[d] = !0),
            --s === 0 && ((o.matches[t] = a), e()));
        }));
    });
  };
  ul.prototype._mark = function (t) {
    return az.mark(this, t);
  };
  ul.prototype._makeAbs = function (t) {
    return az.makeAbs(this, t);
  };
  ul.prototype.abort = function () {
    ((this.aborted = !0), this.emit("abort"));
  };
  ul.prototype.pause = function () {
    this.paused || ((this.paused = !0), this.emit("pause"));
  };
  ul.prototype.resume = function () {
    if (this.paused) {
      if ((this.emit("resume"), (this.paused = !1), this._emitQueue.length)) {
        var t = this._emitQueue.slice(0);
        this._emitQueue.length = 0;
        for (var e = 0; e < t.length; e++) {
          var r = t[e];
          this._emitMatch(r[0], r[1]);
        }
      }
      if (this._processQueue.length) {
        var n = this._processQueue.slice(0);
        this._processQueue.length = 0;
        for (var e = 0; e < n.length; e++) {
          var o = n[e];
          (this._processing--, this._process(o[0], o[1], o[2], o[3]));
        }
      }
    }
  };
  ul.prototype._process = function (t, e, r, n) {
    if ((Pnr(this instanceof ul), Pnr(typeof n == "function"), !this.aborted)) {
      if ((this._processing++, this.paused)) {
        this._processQueue.push([t, e, r, n]);
        return;
      }
      for (var o = 0; typeof t[o] == "string"; ) o++;
      var s;
      switch (o) {
        case t.length:
          this._processSimple(t.join("/"), e, n);
          return;
        case 0:
          s = null;
          break;
        default:
          s = t.slice(0, o).join("/");
          break;
      }
      var a = t.slice(o),
        u;
      s === null
        ? (u = ".")
        : ((LEe(s) ||
            LEe(
              t
                .map(function (d) {
                  return typeof d == "string" ? d : "[*]";
                })
                .join("/"),
            )) &&
            (!s || !LEe(s)) &&
            (s = "/" + s),
          (u = s));
      var c = this._makeAbs(u);
      if (HZs(this, u)) return n();
      var m = a[0] === bqn.GLOBSTAR;
      m ? this._processGlobStar(s, u, c, a, e, r, n) : this._processReaddir(s, u, c, a, e, r, n);
    }
  };
  ul.prototype._processReaddir = function (t, e, r, n, o, s, a) {
    var u = this;
    this._readdir(r, s, function (c, m) {
      return u._processReaddir2(t, e, r, n, o, s, m, a);
    });
  };
  ul.prototype._processReaddir2 = function (t, e, r, n, o, s, a, u) {
    if (!a) return u();
    for (
      var c = n[0], m = !!this.minimatch.negate, d = c._glob, f = this.dot || d.charAt(0) === ".", p = [], h = 0;
      h < a.length;
      h++
    ) {
      var g = a[h];
      if (g.charAt(0) !== "." || f) {
        var b;
        (m && !t ? (b = !g.match(c)) : (b = g.match(c)), b && p.push(g));
      }
    }
    var A = p.length;
    if (A === 0) return u();
    if (n.length === 1 && !this.mark && !this.stat) {
      this.matches[o] || (this.matches[o] = Object.create(null));
      for (var h = 0; h < A; h++) {
        var g = p[h];
        (t && (t !== "/" ? (g = t + "/" + g) : (g = t + g)),
          g.charAt(0) === "/" && !this.nomount && (g = Nnr.join(this.root, g)),
          this._emitMatch(o, g));
      }
      return u();
    }
    n.shift();
    for (var h = 0; h < A; h++) {
      var g = p[h],
        y;
      (t && (t !== "/" ? (g = t + "/" + g) : (g = t + g)), this._process([g].concat(n), o, s, u));
    }
    u();
  };
  ul.prototype._emitMatch = function (t, e) {
    if (!this.aborted && !VZs(this, e)) {
      if (this.paused) {
        this._emitQueue.push([t, e]);
        return;
      }
      var r = LEe(e) ? e : this._makeAbs(e);
      if ((this.mark && (e = this._mark(e)), this.absolute && (e = r), !this.matches[t][e])) {
        if (this.nodir) {
          var n = this.cache[r];
          if (n === "DIR" || Array.isArray(n)) return;
        }
        this.matches[t][e] = !0;
        var o = this.statCache[r];
        (o && this.emit("stat", e, o), this.emit("match", e));
      }
    }
  };
  ul.prototype._readdirInGlobStar = function (t, e) {
    if (this.aborted) return;
    if (this.follow) return this._readdir(t, !1, e);
    var r = "lstat\0" + t,
      n = this,
      o = Mnr(r, s);
    o && n.fs.lstat(t, o);
    function s(a, u) {
      if (a && a.code === "ENOENT") return e();
      var c = u && u.isSymbolicLink();
      ((n.symlinks[t] = c), !c && u && !u.isDirectory() ? ((n.cache[t] = "FILE"), e()) : n._readdir(t, !1, e));
    }
  };
  ul.prototype._readdir = function (t, e, r) {
    if (!this.aborted && ((r = Mnr("readdir\0" + t + "\0" + e, r)), !!r)) {
      if (e && !Bnr(this.symlinks, t)) return this._readdirInGlobStar(t, r);
      if (Bnr(this.cache, t)) {
        var n = this.cache[t];
        if (!n || n === "FILE") return r();
        if (Array.isArray(n)) return r(null, n);
      }
      var o = this;
      o.fs.readdir(t, KZs(this, t, r));
    }
  };
  function KZs(t, e, r) {
    return function (n, o) {
      n ? t._readdirError(e, n, r) : t._readdirEntries(e, o, r);
    };
  }
  ul.prototype._readdirEntries = function (t, e, r) {
    if (!this.aborted) {
      if (!this.mark && !this.stat)
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (t === "/" ? (o = t + o) : (o = t + "/" + o), (this.cache[o] = !0));
        }
      return ((this.cache[t] = e), r(null, e));
    }
  };
  ul.prototype._readdirError = function (t, e, r) {
    if (!this.aborted) {
      switch (e.code) {
        case "ENOTSUP":
        case "ENOTDIR":
          var n = this._makeAbs(t);
          if (((this.cache[n] = "FILE"), n === this.cwdAbs)) {
            var o = new Error(e.code + " invalid cwd " + this.cwd);
            ((o.path = this.cwd), (o.code = e.code), this.emit("error", o), this.abort());
          }
          break;
        case "ENOENT":
        case "ELOOP":
        case "ENAMETOOLONG":
        case "UNKNOWN":
          this.cache[this._makeAbs(t)] = !1;
          break;
        default:
          ((this.cache[this._makeAbs(t)] = !1),
            this.strict && (this.emit("error", e), this.abort()),
            this.silent || console.error("glob error", e));
          break;
      }
      return r();
    }
  };
  ul.prototype._processGlobStar = function (t, e, r, n, o, s, a) {
    var u = this;
    this._readdir(r, s, function (c, m) {
      u._processGlobStar2(t, e, r, n, o, s, m, a);
    });
  };
  ul.prototype._processGlobStar2 = function (t, e, r, n, o, s, a, u) {
    if (!a) return u();
    var c = n.slice(1),
      m = t ? [t] : [],
      d = m.concat(c);
    this._process(d, o, !1, u);
    var f = this.symlinks[r],
      p = a.length;
    if (f && s) return u();
    for (var h = 0; h < p; h++) {
      var g = a[h];
      if (!(g.charAt(0) === "." && !this.dot)) {
        var b = m.concat(a[h], c);
        this._process(b, o, !0, u);
        var A = m.concat(a[h], n);
        this._process(A, o, !0, u);
      }
    }
    u();
  };
  ul.prototype._processSimple = function (t, e, r) {
    var n = this;
    this._stat(t, function (o, s) {
      n._processSimple2(t, e, o, s, r);
    });
  };
  ul.prototype._processSimple2 = function (t, e, r, n, o) {
    if ((this.matches[e] || (this.matches[e] = Object.create(null)), !n)) return o();
    if (t && LEe(t) && !this.nomount) {
      var s = /[\/\\]$/.test(t);
      t.charAt(0) === "/" ? (t = Nnr.join(this.root, t)) : ((t = Nnr.resolve(this.root, t)), s && (t += "/"));
    }
    (process.platform === "win32" && (t = t.replace(/\\/g, "/")), this._emitMatch(e, t), o());
  };
  ul.prototype._stat = function (t, e) {
    var r = this._makeAbs(t),
      n = t.slice(-1) === "/";
    if (t.length > this.maxLength) return e();
    if (!this.stat && Bnr(this.cache, r)) {
      var o = this.cache[r];
      if ((Array.isArray(o) && (o = "DIR"), !n || o === "DIR")) return e(null, o);
      if (n && o === "FILE") return e();
    }
    var s,
      a = this.statCache[r];
    if (a !== void 0) {
      if (a === !1) return e(null, a);
      var u = a.isDirectory() ? "DIR" : "FILE";
      return n && u === "FILE" ? e() : e(null, u, a);
    }
    var c = this,
      m = Mnr("stat\0" + r, d);
    m && c.fs.lstat(r, m);
    function d(f, p) {
      if (p && p.isSymbolicLink())
        return c.fs.stat(r, function (h, g) {
          h ? c._stat2(t, r, null, p, e) : c._stat2(t, r, h, g, e);
        });
      c._stat2(t, r, f, p, e);
    }
  };
  ul.prototype._stat2 = function (t, e, r, n, o) {
    if (r && (r.code === "ENOENT" || r.code === "ENOTDIR")) return ((this.statCache[e] = !1), o());
    var s = t.slice(-1) === "/";
    if (((this.statCache[e] = n), e.slice(-1) === "/" && n && !n.isDirectory())) return o(null, !1, n);
    var a = !0;
    return (
      n && (a = n.isDirectory() ? "DIR" : "FILE"),
      (this.cache[e] = this.cache[e] || a),
      s && a === "FILE" ? o() : o(null, a, n)
    );
  };
});