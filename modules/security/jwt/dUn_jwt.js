/**
 * @module dUn
 * @category security/jwt
 * @label jwt
 * @position 1365 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dUn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dUn = T((z8c, mUn) => {
  mUn.exports = lUn;
  lUn.GlobSync = Fp;
  var jWs = $W(),
    uUn = uD(),
    H8c = uUn.Minimatch,
    V8c = vtr().Glob,
    W8c = Ae("util"),
    _tr = Ae("path"),
    cUn = Ae("assert"),
    Crt = J4(),
    jW = ytr(),
    QWs = jW.setopts,
    Etr = jW.ownProp,
    GWs = jW.childrenIgnored,
    qWs = jW.isIgnored;
  function lUn(t, e) {
    if (typeof e == "function" || arguments.length === 3)
      throw new TypeError(`callback provided to sync glob
See: https://github.com/isaacs/node-glob/issues/167`);
    return new Fp(t, e).found;
  }
  function Fp(t, e) {
    if (!t) throw new Error("must provide pattern");
    if (typeof e == "function" || arguments.length === 3)
      throw new TypeError(`callback provided to sync glob
See: https://github.com/isaacs/node-glob/issues/167`);
    if (!(this instanceof Fp)) return new Fp(t, e);
    if ((QWs(this, t, e), this.noprocess)) return this;
    var r = this.minimatch.set.length;
    this.matches = new Array(r);
    for (var n = 0; n < r; n++) this._process(this.minimatch.set[n], n, !1);
    this._finish();
  }
  Fp.prototype._finish = function () {
    if ((cUn.ok(this instanceof Fp), this.realpath)) {
      var t = this;
      this.matches.forEach(function (e, r) {
        var n = (t.matches[r] = Object.create(null));
        for (var o in e)
          try {
            o = t._makeAbs(o);
            var s = jWs.realpathSync(o, t.realpathCache);
            n[s] = !0;
          } catch (a) {
            if (a.syscall === "stat") n[t._makeAbs(o)] = !0;
            else throw a;
          }
      });
    }
    jW.finish(this);
  };
  Fp.prototype._process = function (t, e, r) {
    cUn.ok(this instanceof Fp);
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
      : ((Crt(o) ||
          Crt(
            t
              .map(function (m) {
                return typeof m == "string" ? m : "[*]";
              })
              .join("/"),
          )) &&
          (!o || !Crt(o)) &&
          (o = "/" + o),
        (a = o));
    var u = this._makeAbs(a);
    if (!GWs(this, a)) {
      var c = s[0] === uUn.GLOBSTAR;
      c ? this._processGlobStar(o, a, u, s, e, r) : this._processReaddir(o, a, u, s, e, r);
    }
  };
  Fp.prototype._processReaddir = function (t, e, r, n, o, s) {
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
              h.charAt(0) === "/" && !this.nomount && (h = _tr.join(this.root, h)),
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
  Fp.prototype._emitMatch = function (t, e) {
    if (!qWs(this, e)) {
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
  Fp.prototype._readdirInGlobStar = function (t) {
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
  Fp.prototype._readdir = function (t, e) {
    var r;
    if (e && !Etr(this.symlinks, t)) return this._readdirInGlobStar(t);
    if (Etr(this.cache, t)) {
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
  Fp.prototype._readdirEntries = function (t, e) {
    if (!this.mark && !this.stat)
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (t === "/" ? (n = t + n) : (n = t + "/" + n), (this.cache[n] = !0));
      }
    return ((this.cache[t] = e), e);
  };
  Fp.prototype._readdirError = function (t, e) {
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
  Fp.prototype._processGlobStar = function (t, e, r, n, o, s) {
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
  Fp.prototype._processSimple = function (t, e) {
    var r = this._stat(t);
    if ((this.matches[e] || (this.matches[e] = Object.create(null)), !!r)) {
      if (t && Crt(t) && !this.nomount) {
        var n = /[\/\\]$/.test(t);
        t.charAt(0) === "/" ? (t = _tr.join(this.root, t)) : ((t = _tr.resolve(this.root, t)), n && (t += "/"));
      }
      (process.platform === "win32" && (t = t.replace(/\\/g, "/")), this._emitMatch(e, t));
    }
  };
  Fp.prototype._stat = function (t) {
    var e = this._makeAbs(t),
      r = t.slice(-1) === "/";
    if (t.length > this.maxLength) return !1;
    if (!this.stat && Etr(this.cache, e)) {
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
  Fp.prototype._mark = function (t) {
    return jW.mark(this, t);
  };
  Fp.prototype._makeAbs = function (t) {
    return jW.makeAbs(this, t);
  };
});