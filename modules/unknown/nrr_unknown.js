/**
 * @module nrr
 * @category unknown
 * @label unknown
 * @position 1387 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (nrr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var nrr = T((R9c, v$n) => {
  v$n.exports = VW;
  var zzs = $W(),
    E$n = uD(),
    D9c = E$n.Minimatch,
    Yzs = qo(),
    Kzs = Ae("events").EventEmitter,
    irr = Ae("path"),
    orr = Ae("assert"),
    nEe = J4(),
    arr = _$n(),
    WW = Ztr(),
    Jzs = WW.setopts,
    srr = WW.ownProp,
    urr = wrt(),
    I9c = Ae("util"),
    Xzs = WW.childrenIgnored,
    Zzs = WW.isIgnored,
    eYs = rce();
  function VW(t, e, r) {
    if ((typeof e == "function" && ((r = e), (e = {})), e || (e = {}), e.sync)) {
      if (r) throw new TypeError("callback provided to sync glob");
      return arr(t, e);
    }
    return new al(t, e, r);
  }
  VW.sync = arr;
  var tYs = (VW.GlobSync = arr.GlobSync);
  VW.glob = VW;
  function rYs(t, e) {
    if (e === null || typeof e != "object") return t;
    for (var r = Object.keys(e), n = r.length; n--; ) t[r[n]] = e[r[n]];
    return t;
  }
  VW.hasMagic = function (t, e) {
    var r = rYs({}, e);
    r.noprocess = !0;
    var n = new al(t, r),
      o = n.minimatch.set;
    if (!t) return !1;
    if (o.length > 1) return !0;
    for (var s = 0; s < o[0].length; s++) if (typeof o[0][s] != "string") return !0;
    return !1;
  };
  VW.Glob = al;
  Yzs(al, Kzs);
  function al(t, e, r) {
    if ((typeof e == "function" && ((r = e), (e = null)), e && e.sync)) {
      if (r) throw new TypeError("callback provided to sync glob");
      return new tYs(t, e);
    }
    if (!(this instanceof al)) return new al(t, e, r);
    (Jzs(this, t, e), (this._didRealPath = !1));
    var n = this.minimatch.set.length;
    ((this.matches = new Array(n)),
      typeof r == "function" &&
        ((r = eYs(r)),
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
  al.prototype._finish = function () {
    if ((orr(this instanceof al), !this.aborted)) {
      if (this.realpath && !this._didRealpath) return this._realpath();
      (WW.finish(this), this.emit("end", this.found));
    }
  };
  al.prototype._realpath = function () {
    if (this._didRealpath) return;
    this._didRealpath = !0;
    var t = this.matches.length;
    if (t === 0) return this._finish();
    for (var e = this, r = 0; r < this.matches.length; r++) this._realpathSet(r, n);
    function n() {
      --t === 0 && e._finish();
    }
  };
  al.prototype._realpathSet = function (t, e) {
    var r = this.matches[t];
    if (!r) return e();
    var n = Object.keys(r),
      o = this,
      s = n.length;
    if (s === 0) return e();
    var a = (this.matches[t] = Object.create(null));
    n.forEach(function (u, c) {
      ((u = o._makeAbs(u)),
        zzs.realpath(u, o.realpathCache, function (m, d) {
          (m ? (m.syscall === "stat" ? (a[u] = !0) : o.emit("error", m)) : (a[d] = !0),
            --s === 0 && ((o.matches[t] = a), e()));
        }));
    });
  };
  al.prototype._mark = function (t) {
    return WW.mark(this, t);
  };
  al.prototype._makeAbs = function (t) {
    return WW.makeAbs(this, t);
  };
  al.prototype.abort = function () {
    ((this.aborted = !0), this.emit("abort"));
  };
  al.prototype.pause = function () {
    this.paused || ((this.paused = !0), this.emit("pause"));
  };
  al.prototype.resume = function () {
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
  al.prototype._process = function (t, e, r, n) {
    if ((orr(this instanceof al), orr(typeof n == "function"), !this.aborted)) {
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
        : ((nEe(s) ||
            nEe(
              t
                .map(function (d) {
                  return typeof d == "string" ? d : "[*]";
                })
                .join("/"),
            )) &&
            (!s || !nEe(s)) &&
            (s = "/" + s),
          (u = s));
      var c = this._makeAbs(u);
      if (Xzs(this, u)) return n();
      var m = a[0] === E$n.GLOBSTAR;
      m ? this._processGlobStar(s, u, c, a, e, r, n) : this._processReaddir(s, u, c, a, e, r, n);
    }
  };
  al.prototype._processReaddir = function (t, e, r, n, o, s, a) {
    var u = this;
    this._readdir(r, s, function (c, m) {
      return u._processReaddir2(t, e, r, n, o, s, m, a);
    });
  };
  al.prototype._processReaddir2 = function (t, e, r, n, o, s, a, u) {
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
          g.charAt(0) === "/" && !this.nomount && (g = irr.join(this.root, g)),
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
  al.prototype._emitMatch = function (t, e) {
    if (!this.aborted && !Zzs(this, e)) {
      if (this.paused) {
        this._emitQueue.push([t, e]);
        return;
      }
      var r = nEe(e) ? e : this._makeAbs(e);
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
  al.prototype._readdirInGlobStar = function (t, e) {
    if (this.aborted) return;
    if (this.follow) return this._readdir(t, !1, e);
    var r = "lstat\0" + t,
      n = this,
      o = urr(r, s);
    o && n.fs.lstat(t, o);
    function s(a, u) {
      if (a && a.code === "ENOENT") return e();
      var c = u && u.isSymbolicLink();
      ((n.symlinks[t] = c), !c && u && !u.isDirectory() ? ((n.cache[t] = "FILE"), e()) : n._readdir(t, !1, e));
    }
  };
  al.prototype._readdir = function (t, e, r) {
    if (!this.aborted && ((r = urr("readdir\0" + t + "\0" + e, r)), !!r)) {
      if (e && !srr(this.symlinks, t)) return this._readdirInGlobStar(t, r);
      if (srr(this.cache, t)) {
        var n = this.cache[t];
        if (!n || n === "FILE") return r();
        if (Array.isArray(n)) return r(null, n);
      }
      var o = this;
      o.fs.readdir(t, nYs(this, t, r));
    }
  };
  function nYs(t, e, r) {
    return function (n, o) {
      n ? t._readdirError(e, n, r) : t._readdirEntries(e, o, r);
    };
  }
  al.prototype._readdirEntries = function (t, e, r) {
    if (!this.aborted) {
      if (!this.mark && !this.stat)
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (t === "/" ? (o = t + o) : (o = t + "/" + o), (this.cache[o] = !0));
        }
      return ((this.cache[t] = e), r(null, e));
    }
  };
  al.prototype._readdirError = function (t, e, r) {
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
  al.prototype._processGlobStar = function (t, e, r, n, o, s, a) {
    var u = this;
    this._readdir(r, s, function (c, m) {
      u._processGlobStar2(t, e, r, n, o, s, m, a);
    });
  };
  al.prototype._processGlobStar2 = function (t, e, r, n, o, s, a, u) {
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
  al.prototype._processSimple = function (t, e, r) {
    var n = this;
    this._stat(t, function (o, s) {
      n._processSimple2(t, e, o, s, r);
    });
  };
  al.prototype._processSimple2 = function (t, e, r, n, o) {
    if ((this.matches[e] || (this.matches[e] = Object.create(null)), !n)) return o();
    if (t && nEe(t) && !this.nomount) {
      var s = /[\/\\]$/.test(t);
      t.charAt(0) === "/" ? (t = irr.join(this.root, t)) : ((t = irr.resolve(this.root, t)), s && (t += "/"));
    }
    (process.platform === "win32" && (t = t.replace(/\\/g, "/")), this._emitMatch(e, t), o());
  };
  al.prototype._stat = function (t, e) {
    var r = this._makeAbs(t),
      n = t.slice(-1) === "/";
    if (t.length > this.maxLength) return e();
    if (!this.stat && srr(this.cache, r)) {
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
      m = urr("stat\0" + r, d);
    m && c.fs.lstat(r, m);
    function d(f, p) {
      if (p && p.isSymbolicLink())
        return c.fs.stat(r, function (h, g) {
          h ? c._stat2(t, r, null, p, e) : c._stat2(t, r, h, g, e);
        });
      c._stat2(t, r, f, p, e);
    }
  };
  al.prototype._stat2 = function (t, e, r, n, o) {
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
var x$n = T((k9c, w$n) => {
  var S$n = rf(),
    oce = Ae("path"),
    crr = Yer(),
    iYs = ttr(),
    oYs = atr(),
    sYs = utr(),
    aYs = nrr(),
    zW = (w$n.exports = {}),
    C$n = /[\/\\]/g,
    uYs = function (t, e) {
      var r = [];
      return (
        crr(t).forEach(function (n) {
          var o = n.indexOf("!") === 0;
          o && (n = n.slice(1));
          var s = e(n);
          o ? (r = iYs(r, s)) : (r = oYs(r, s));
        }),
        r
      );
    };
  zW.exists = function () {
    var t = oce.join.apply(oce, arguments);
    return S$n.existsSync(t);
  };
  zW.expand = function (...t) {
    var e = sYs(t[0]) ? t.shift() : {},
      r = Array.isArray(t[0]) ? t[0] : t;
    if (r.length === 0) return [];
    var n = uYs(r, function (o) {
      return aYs.sync(o, e);
    });
    return (
      e.filter &&
        (n = n.filter(function (o) {
          o = oce.join(e.cwd || "", o);
          try {
            return typeof e.filter == "function" ? e.filter(o) : S$n.statSync(o)[e.filter]();
          } catch {
            return !1;
          }
        })),
      n
    );
  };
  zW.expandMapping = function (t, e, r) {
    r = Object.assign(
      {
        rename: function (s, a) {
          return oce.join(s || "", a);
        },
      },
      r,
    );
    var n = [],
      o = {};
    return (
      zW.expand(r, t).forEach(function (s) {
        var a = s;
        (r.flatten && (a = oce.basename(a)), r.ext && (a = a.replace(/(\.[^\/]*)?$/, r.ext)));
        var u = r.rename(e, a, r);
        (r.cwd && (s = oce.join(r.cwd, s)),
          (u = u.replace(C$n, "/")),
          (s = s.replace(C$n, "/")),
          o[u] ? o[u].src.push(s) : (n.push({ src: [s], dest: u }), (o[u] = n[n.length - 1])));
      }),
      n
    );
  };
  zW.normalizeFilesArray = function (t) {
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
              !("src" in r) || !r.src || (Array.isArray(r.src) ? (r.src = crr(r.src)) : (r.src = [r.src]));
            })
            .map(function (r) {
              var n = Object.assign({}, r);
              if ((delete n.src, delete n.dest, r.expand))
                return zW.expandMapping(r.src, r.dest, n).map(function (s) {
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
                          ((a = r.src), (a = Array.isArray(a) ? crr(a) : [a]), (s.result = zW.expand(n, a))),
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
var R$n = T((O9c, I$n) => {
  var lrr = rf(),
    T$n = Ae("path"),
    cYs = Ser(),
    D$n = trt(),
    lYs = Der(),
    mYs = Ae("stream").Stream,
    dYs = Dg().PassThrough,
    M6 = (I$n.exports = {});
  M6.file = x$n();
  M6.collectStream = function (t, e) {
    var r = [],
      n = 0;
    (t.on("error", e),
      t.on("data", function (o) {
        (r.push(o), (n += o.length));
      }),
      t.on("end", function () {
        var o = Buffer.alloc(n),
          s = 0;
        (r.forEach(function (a) {
          (a.copy(o, s), (s += a.length));
        }),
          e(null, o));
      }));
  };
  M6.dateify = function (t) {
    return (
      (t = t || new Date()),
      t instanceof Date ? (t = t) : typeof t == "string" ? (t = new Date(t)) : (t = new Date()),
      t
    );
  };
  M6.defaults = function (t, e, r) {
    var n = arguments;
    return ((n[0] = n[0] || {}), lYs(...n));
  };
  M6.isStream = function (t) {
    return t instanceof mYs;
  };
  M6.lazyReadStream = function (t) {
    return new cYs.Readable(function () {
      return lrr.createReadStream(t);
    });
  };
  M6.normalizeInputSource = function (t) {
    return t === null
      ? Buffer.alloc(0)
      : typeof t == "string"
        ? Buffer.from(t)
        : M6.isStream(t)
          ? t.pipe(new dYs())
          : t;
  };
  M6.sanitizePath = function (t) {
    return D$n(t, !1)
      .replace(/^\w+:/, "")
      .replace(/^(\.\.\/|\/)+/, "");
  };
  M6.trailingSlashIt = function (t) {
    return t.slice(-1) !== "/" ? t + "/" : t;
  };
  M6.unixifyPath = function (t) {
    return D$n(t, !1).replace(/^\w+:/, "");
  };
  M6.walkdir = function (t, e, r) {
    var n = [];
    (typeof e == "function" && ((r = e), (e = t)),
      lrr.readdir(t, function (o, s) {
        var a = 0,
          u,
          c;
        if (o) return r(o);
        (function m() {
          if (((u = s[a++]), !u)) return r(null, n);
          ((c = T$n.join(t, u)),
            lrr.stat(c, function (d, f) {
              (n.push({ path: c, relative: T$n.relative(e, c).replace(/\\/g, "/"), stats: f }),
                f && f.isDirectory()
                  ? M6.walkdir(c, e, function (p, h) {
                      (h.forEach(function (g) {
                        n.push(g);
                      }),
                        m());
                    })
                  : m());
            }));
        })();
      }));
  };
});
var O$n = T((N9c, k$n) => {
  var fYs = Ae("util").inherits,
    drr = Jtr().ZipArchiveOutputStream,
    pYs = Jtr().ZipArchiveEntry,
    mrr = R$n(),
    sce = (k$n.exports = function (t) {
      if (!(this instanceof sce)) return new sce(t);
      ((t = this.options = t || {}),
        (t.zlib = t.zlib || {}),
        drr.call(this, t),
        typeof t.level == "number" && t.level >= 0 && ((t.zlib.level = t.level), delete t.level),
        !t.forceZip64 && typeof t.zlib.level == "number" && t.zlib.level === 0 && (t.store = !0),
        (t.namePrependSlash = t.namePrependSlash || !1),
        t.comment && t.comment.length > 0 && this.setComment(t.comment));
    });
  fYs(sce, drr);
  sce.prototype._normalizeFileData = function (t) {
    t = mrr.defaults(t, {
      type: "file",
      name: null,
      namePrependSlash: this.options.namePrependSlash,
      linkname: null,
      date: null,
      mode: null,
      store: this.options.store,
      comment: "",
    });
    var e = t.type === "directory",
      r = t.type === "symlink";
    return (
      t.name &&
        ((t.name = mrr.sanitizePath(t.name)),
        !r && t.name.slice(-1) === "/" ? ((e = !0), (t.type = "directory")) : e && (t.name += "/")),
      (e || r) && (t.store = !0),
      (t.date = mrr.dateify(t.date)),
      t
    );
  };
  sce.prototype.entry = function (t, e, r) {
    if (
      (typeof r != "function" && (r = this._emitErrorCallback.bind(this)),
      (e = this._normalizeFileData(e)),
      e.type !== "file" && e.type !== "directory" && e.type !== "symlink")
    ) {
      r(new Error(e.type + " entries not currently supported"));
      return;
    }
    if (typeof e.name != "string" || e.name.length === 0) {
      r(new Error("entry name must be a non-empty string value"));
      return;
    }
    if (e.type === "symlink" && typeof e.linkname != "string") {
      r(new Error("entry linkname must be a non-empty string value when type equals symlink"));
      return;
    }
    var n = new pYs(e.name);
    return (
      n.setTime(e.date, this.options.forceLocalTime),
      e.namePrependSlash && n.setName(e.name, !0),
      e.store && n.setMethod(0),
      e.comment.length > 0 && n.setComment(e.comment),
      e.type === "symlink" && typeof e.mode != "number" && (e.mode = 40960),
      typeof e.mode == "number" && (e.type === "symlink" && (e.mode |= 40960), n.setUnixMode(e.mode)),
      e.type === "symlink" && typeof e.linkname == "string" && (t = Buffer.from(e.linkname)),
      drr.prototype.entry.call(this, n, t, r)
    );
  };
  sce.prototype.finalize = function () {
    this.finish();
  };
});
var P$n = T((P9c, N$n) => {
  var hYs = O$n(),
    gYs = tEe(),
    GF = function (t) {
      if (!(this instanceof GF)) return new GF(t);
      ((t = this.options = gYs.defaults(t, { comment: "", forceUTC: !1, namePrependSlash: !1, store: !1 })),
        (this.supports = { directory: !0, symlink: !0 }),
        (this.engine = new hYs(t)));
    };
  GF.prototype.append = function (t, e, r) {
    this.engine.entry(t, e, r);
  };
  GF.prototype.finalize = function () {
    this.engine.finalize();
  };
  GF.prototype.on = function () {
    return this.engine.on.apply(this.engine, arguments);
  };
  GF.prototype.pipe = function () {
    return this.engine.pipe.apply(this.engine, arguments);
  };
  GF.prototype.unpipe = function () {
    return this.engine.unpipe.apply(this.engine, arguments);
  };
  N$n.exports = GF;
});
var M$n = T((B9c, L$n) => {
  "use strict";
  var { Buffer: sS } = Ae("buffer"),
    B$n = Symbol.for("BufferList");
  function K0(t) {
    if (!(this instanceof K0)) return new K0(t);
    K0._init.call(this, t);
  }
  K0._init = function (e) {
    (Object.defineProperty(this, B$n, { value: !0 }), (this._bufs = []), (this.length = 0), e && this.append(e));
  };
  K0.prototype._new = function (e) {
    return new K0(e);
  };
  K0.prototype._offset = function (e) {
    if (e === 0) return [0, 0];
    let r = 0;
    for (let n = 0; n < this._bufs.length; n++) {
      let o = r + this._bufs[n].length;
      if (e < o || n === this._bufs.length - 1) return [n, e - r];
      r = o;
    }
  };
  K0.prototype._reverseOffset = function (t) {
    let e = t[0],
      r = t[1];
    for (let n = 0; n < e; n++) r += this._bufs[n].length;
    return r;
  };
  K0.prototype.get = function (e) {
    if (e > this.length || e < 0) return;
    let r = this._offset(e);
    return this._bufs[r[0]][r[1]];
  };
  K0.prototype.slice = function (e, r) {
    return (
      typeof e == "number" && e < 0 && (e += this.length),
      typeof r == "number" && r < 0 && (r += this.length),
      this.copy(null, 0, e, r)
    );
  };
  K0.prototype.copy = function (e, r, n, o) {
    if (
      ((typeof n != "number" || n < 0) && (n = 0),
      (typeof o != "number" || o > this.length) && (o = this.length),
      n >= this.length || o <= 0)
    )
      return e || sS.alloc(0);
    let s = !!e,
      a = this._offset(n),
      u = o - n,
      c = u,
      m = (s && r) || 0,
      d = a[1];
    if (n === 0 && o === this.length) {
      if (!s) return this._bufs.length === 1 ? this._bufs[0] : sS.concat(this._bufs, this.length);
      for (let f = 0; f < this._bufs.length; f++) (this._bufs[f].copy(e, m), (m += this._bufs[f].length));
      return e;
    }
    if (c <= this._bufs[a[0]].length - d)
      return s ? this._bufs[a[0]].copy(e, r, d, d + c) : this._bufs[a[0]].slice(d, d + c);
    s || (e = sS.allocUnsafe(u));
    for (let f = a[0]; f < this._bufs.length; f++) {
      let p = this._bufs[f].length - d;
      if (c > p) (this._bufs[f].copy(e, m, d), (m += p));
      else {
        (this._bufs[f].copy(e, m, d, d + c), (m += p));
        break;
      }
      ((c -= p), d && (d = 0));
    }
    return e.length > m ? e.slice(0, m) : e;
  };
  K0.prototype.shallowSlice = function (e, r) {
    if (
      ((e = e || 0),
      (r = typeof r != "number" ? this.length : r),
      e < 0 && (e += this.length),
      r < 0 && (r += this.length),
      e === r)
    )
      return this._new();
    let n = this._offset(e),
      o = this._offset(r),
      s = this._bufs.slice(n[0], o[0] + 1);
    return (
      o[1] === 0 ? s.pop() : (s[s.length - 1] = s[s.length - 1].slice(0, o[1])),
      n[1] !== 0 && (s[0] = s[0].slice(n[1])),
      this._new(s)
    );
  };
  K0.prototype.toString = function (e, r, n) {
    return this.slice(r, n).toString(e);
  };
  K0.prototype.consume = function (e) {
    if (((e = Math.trunc(e)), Number.isNaN(e) || e <= 0)) return this;
    for (; this._bufs.length; )
      if (e >= this._bufs[0].length)
        ((e -= this._bufs[0].length), (this.length -= this._bufs[0].length), this._bufs.shift());
      else {
        ((this._bufs[0] = this._bufs[0].slice(e)), (this.length -= e));
        break;
      }
    return this;
  };
  K0.prototype.duplicate = function () {
    let e = this._new();
    for (let r = 0; r < this._bufs.length; r++) e.append(this._bufs[r]);
    return e;
  };
  K0.prototype.append = function (e) {
    if (e == null) return this;
    if (e.buffer) this._appendBuffer(sS.from(e.buffer, e.byteOffset, e.byteLength));
    else if (Array.isArray(e)) for (let r = 0; r < e.length; r++) this.append(e[r]);
    else if (this._isBufferList(e)) for (let r = 0; r < e._bufs.length; r++) this.append(e._bufs[r]);
    else (typeof e == "number" && (e = e.toString()), this._appendBuffer(sS.from(e)));
    return this;
  };
  K0.prototype._appendBuffer = function (e) {
    (this._bufs.push(e), (this.length += e.length));
  };
  K0.prototype.indexOf = function (t, e, r) {
    if ((r === void 0 && typeof e == "string" && ((r = e), (e = void 0)), typeof t == "function" || Array.isArray(t)))
      throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
    if (
      (typeof t == "number"
        ? (t = sS.from([t]))
        : typeof t == "string"
          ? (t = sS.from(t, r))
          : this._isBufferList(t)
            ? (t = t.slice())
            : Array.isArray(t.buffer)
              ? (t = sS.from(t.buffer, t.byteOffset, t.byteLength))
              : sS.isBuffer(t) || (t = sS.from(t)),
      (e = Number(e || 0)),
      isNaN(e) && (e = 0),
      e < 0 && (e = this.length + e),
      e < 0 && (e = 0),
      t.length === 0)
    )
      return e > this.length ? this.length : e;
    let n = this._offset(e),
      o = n[0],
      s = n[1];
    for (; o < this._bufs.length; o++) {
      let a = this._bufs[o];
      for (; s < a.length; )
        if (a.length - s >= t.length) {
          let c = a.indexOf(t, s);
          if (c !== -1) return this._reverseOffset([o, c]);
          s = a.length - t.length + 1;
        } else {
          let c = this._reverseOffset([o, s]);
          if (this._match(c, t)) return c;
          s++;
        }
      s = 0;
    }
    return -1;
  };
  K0.prototype._match = function (t, e) {
    if (this.length - t < e.length) return !1;
    for (let r = 0; r < e.length; r++) if (this.get(t + r) !== e[r]) return !1;
    return !0;
  };
  (function () {
    let t = {
      readDoubleBE: 8,
      readDoubleLE: 8,
      readFloatBE: 4,
      readFloatLE: 4,
      readInt32BE: 4,
      readInt32LE: 4,
      readUInt32BE: 4,
      readUInt32LE: 4,
      readInt16BE: 2,
      readInt16LE: 2,
      readUInt16BE: 2,
      readUInt16LE: 2,
      readInt8: 1,
      readUInt8: 1,
      readIntBE: null,
      readIntLE: null,
      readUIntBE: null,
      readUIntLE: null,
    };
    for (let e in t)
      (function (r) {
        t[r] === null
          ? (K0.prototype[r] = function (n, o) {
              return this.slice(n, n + o)[r](0, o);
            })
          : (K0.prototype[r] = function (n = 0) {
              return this.slice(n, n + t[r])[r](0);
            });
      })(e);
  })();
  K0.prototype._isBufferList = function (e) {
    return e instanceof K0 || K0.isBufferList(e);
  };
  K0.isBufferList = function (e) {
    return e != null && e[B$n];
  };
  L$n.exports = K0;
});
var F$n = T((L9c, Rrt) => {
  "use strict";
  var frr = Dg().Duplex,
    bYs = qo(),
    iEe = M$n();
  function nA(t) {
    if (!(this instanceof nA)) return new nA(t);
    if (typeof t == "function") {
      this._callback = t;
      let e = function (n) {
        this._callback && (this._callback(n), (this._callback = null));
      }.bind(this);
      (this.on("pipe", function (n) {
        n.on("error", e);
      }),
        this.on("unpipe", function (n) {
          n.removeListener("error", e);
        }),
        (t = null));
    }
    (iEe._init.call(this, t), frr.call(this));
  }
  bYs(nA, frr);
  Object.assign(nA.prototype, iEe.prototype);
  nA.prototype._new = function (e) {
    return new nA(e);
  };
  nA.prototype._write = function (e, r, n) {
    (this._appendBuffer(e), typeof n == "function" && n());
  };
  nA.prototype._read = function (e) {
    if (!this.length) return this.push(null);
    ((e = Math.min(e, this.length)), this.push(this.slice(0, e)), this.consume(e));
  };
  nA.prototype.end = function (e) {
    (frr.prototype.end.call(this, e), this._callback && (this._callback(null, this.slice()), (this._callback = null)));
  };
  nA.prototype._destroy = function (e, r) {
    ((this._bufs.length = 0), (this.length = 0), r(e));
  };
  nA.prototype._isBufferList = function (e) {
    return e instanceof nA || e instanceof iEe || nA.isBufferList(e);
  };
  nA.isBufferList = iEe.isBufferList;
  Rrt.exports = nA;
  Rrt.exports.BufferListStream = nA;
  Rrt.exports.BufferList = iEe;
});