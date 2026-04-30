/**
 * @module vtr
 * @category security/jwt
 * @label jwt
 * @position 1369 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vtr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vtr = T((e9c, yUn) => {
  yUn.exports = QW;
  var KWs = $W(),
    AUn = uD(),
    X8c = AUn.Minimatch,
    JWs = qo(),
    XWs = Ae("events").EventEmitter,
    wtr = Ae("path"),
    xtr = Ae("assert"),
    eEe = J4(),
    Dtr = dUn(),
    GW = ytr(),
    ZWs = GW.setopts,
    Ttr = GW.ownProp,
    Itr = wrt(),
    Z8c = Ae("util"),
    ezs = GW.childrenIgnored,
    tzs = GW.isIgnored,
    rzs = rce();
  function QW(t, e, r) {
    if ((typeof e == "function" && ((r = e), (e = {})), e || (e = {}), e.sync)) {
      if (r) throw new TypeError("callback provided to sync glob");
      return Dtr(t, e);
    }
    return new sl(t, e, r);
  }
  QW.sync = Dtr;
  var nzs = (QW.GlobSync = Dtr.GlobSync);
  QW.glob = QW;
  function izs(t, e) {
    if (e === null || typeof e != "object") return t;
    for (var r = Object.keys(e), n = r.length; n--; ) t[r[n]] = e[r[n]];
    return t;
  }
  QW.hasMagic = function (t, e) {
    var r = izs({}, e);
    r.noprocess = !0;
    var n = new sl(t, r),
      o = n.minimatch.set;
    if (!t) return !1;
    if (o.length > 1) return !0;
    for (var s = 0; s < o[0].length; s++) if (typeof o[0][s] != "string") return !0;
    return !1;
  };
  QW.Glob = sl;
  JWs(sl, XWs);
  function sl(t, e, r) {
    if ((typeof e == "function" && ((r = e), (e = null)), e && e.sync)) {
      if (r) throw new TypeError("callback provided to sync glob");
      return new nzs(t, e);
    }
    if (!(this instanceof sl)) return new sl(t, e, r);
    (ZWs(this, t, e), (this._didRealPath = !1));
    var n = this.minimatch.set.length;
    ((this.matches = new Array(n)),
      typeof r == "function" &&
        ((r = rzs(r)),
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
  sl.prototype._finish = function () {
    if ((xtr(this instanceof sl), !this.aborted)) {
      if (this.realpath && !this._didRealpath) return this._realpath();
      (GW.finish(this), this.emit("end", this.found));
    }
  };
  sl.prototype._realpath = function () {
    if (this._didRealpath) return;
    this._didRealpath = !0;
    var t = this.matches.length;
    if (t === 0) return this._finish();
    for (var e = this, r = 0; r < this.matches.length; r++) this._realpathSet(r, n);
    function n() {
      --t === 0 && e._finish();
    }
  };
  sl.prototype._realpathSet = function (t, e) {
    var r = this.matches[t];
    if (!r) return e();
    var n = Object.keys(r),
      o = this,
      s = n.length;
    if (s === 0) return e();
    var a = (this.matches[t] = Object.create(null));
    n.forEach(function (u, c) {
      ((u = o._makeAbs(u)),
        KWs.realpath(u, o.realpathCache, function (m, d) {
          (m ? (m.syscall === "stat" ? (a[u] = !0) : o.emit("error", m)) : (a[d] = !0),
            --s === 0 && ((o.matches[t] = a), e()));
        }));
    });
  };
  sl.prototype._mark = function (t) {
    return GW.mark(this, t);
  };
  sl.prototype._makeAbs = function (t) {
    return GW.makeAbs(this, t);
  };
  sl.prototype.abort = function () {
    ((this.aborted = !0), this.emit("abort"));
  };
  sl.prototype.pause = function () {
    this.paused || ((this.paused = !0), this.emit("pause"));
  };
  sl.prototype.resume = function () {
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
  sl.prototype._process = function (t, e, r, n) {
    if ((xtr(this instanceof sl), xtr(typeof n == "function"), !this.aborted)) {
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
        : ((eEe(s) ||
            eEe(
              t
                .map(function (d) {
                  return typeof d == "string" ? d : "[*]";
                })
                .join("/"),
            )) &&
            (!s || !eEe(s)) &&
            (s = "/" + s),
          (u = s));
      var c = this._makeAbs(u);
      if (ezs(this, u)) return n();
      var m = a[0] === AUn.GLOBSTAR;
      m ? this._processGlobStar(s, u, c, a, e, r, n) : this._processReaddir(s, u, c, a, e, r, n);
    }
  };
  sl.prototype._processReaddir = function (t, e, r, n, o, s, a) {
    var u = this;
    this._readdir(r, s, function (c, m) {
      return u._processReaddir2(t, e, r, n, o, s, m, a);
    });
  };
  sl.prototype._processReaddir2 = function (t, e, r, n, o, s, a, u) {
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
          g.charAt(0) === "/" && !this.nomount && (g = wtr.join(this.root, g)),
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
  sl.prototype._emitMatch = function (t, e) {
    if (!this.aborted && !tzs(this, e)) {
      if (this.paused) {
        this._emitQueue.push([t, e]);
        return;
      }
      var r = eEe(e) ? e : this._makeAbs(e);
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
  sl.prototype._readdirInGlobStar = function (t, e) {
    if (this.aborted) return;
    if (this.follow) return this._readdir(t, !1, e);
    var r = "lstat\0" + t,
      n = this,
      o = Itr(r, s);
    o && n.fs.lstat(t, o);
    function s(a, u) {
      if (a && a.code === "ENOENT") return e();
      var c = u && u.isSymbolicLink();
      ((n.symlinks[t] = c), !c && u && !u.isDirectory() ? ((n.cache[t] = "FILE"), e()) : n._readdir(t, !1, e));
    }
  };
  sl.prototype._readdir = function (t, e, r) {
    if (!this.aborted && ((r = Itr("readdir\0" + t + "\0" + e, r)), !!r)) {
      if (e && !Ttr(this.symlinks, t)) return this._readdirInGlobStar(t, r);
      if (Ttr(this.cache, t)) {
        var n = this.cache[t];
        if (!n || n === "FILE") return r();
        if (Array.isArray(n)) return r(null, n);
      }
      var o = this;
      o.fs.readdir(t, ozs(this, t, r));
    }
  };
  function ozs(t, e, r) {
    return function (n, o) {
      n ? t._readdirError(e, n, r) : t._readdirEntries(e, o, r);
    };
  }
  sl.prototype._readdirEntries = function (t, e, r) {
    if (!this.aborted) {
      if (!this.mark && !this.stat)
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (t === "/" ? (o = t + o) : (o = t + "/" + o), (this.cache[o] = !0));
        }
      return ((this.cache[t] = e), r(null, e));
    }
  };
  sl.prototype._readdirError = function (t, e, r) {
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
  sl.prototype._processGlobStar = function (t, e, r, n, o, s, a) {
    var u = this;
    this._readdir(r, s, function (c, m) {
      u._processGlobStar2(t, e, r, n, o, s, m, a);
    });
  };
  sl.prototype._processGlobStar2 = function (t, e, r, n, o, s, a, u) {
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
  sl.prototype._processSimple = function (t, e, r) {
    var n = this;
    this._stat(t, function (o, s) {
      n._processSimple2(t, e, o, s, r);
    });
  };
  sl.prototype._processSimple2 = function (t, e, r, n, o) {
    if ((this.matches[e] || (this.matches[e] = Object.create(null)), !n)) return o();
    if (t && eEe(t) && !this.nomount) {
      var s = /[\/\\]$/.test(t);
      t.charAt(0) === "/" ? (t = wtr.join(this.root, t)) : ((t = wtr.resolve(this.root, t)), s && (t += "/"));
    }
    (process.platform === "win32" && (t = t.replace(/\\/g, "/")), this._emitMatch(e, t), o());
  };
  sl.prototype._stat = function (t, e) {
    var r = this._makeAbs(t),
      n = t.slice(-1) === "/";
    if (t.length > this.maxLength) return e();
    if (!this.stat && Ttr(this.cache, r)) {
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
      m = Itr("stat\0" + r, d);
    m && c.fs.lstat(r, m);
    function d(f, p) {
      if (p && p.isSymbolicLink())
        return c.fs.stat(r, function (h, g) {
          h ? c._stat2(t, r, null, p, e) : c._stat2(t, r, h, g, e);
        });
      c._stat2(t, r, f, p, e);
    }
  };
  sl.prototype._stat2 = function (t, e, r, n, o) {
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