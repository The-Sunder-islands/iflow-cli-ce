/**
 * @module Tce
 * @category utils/fs
 * @label fs
 * @position 1460 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Tce) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Tce = T((syc, Yqn) => {
  Yqn.exports = ME;
  var LE = rf(),
    fea = qo(),
    pea = jnr(),
    hea = Qnr(),
    $Ee = Ae("path"),
    Qqn = process.platform === "win32" ? 0 : process.umask(),
    Gqn = OEe(),
    qqn = mnt();
  fea(ME, qqn);
  ME.dirmode = parseInt("0777", 8) & ~Qqn;
  ME.filemode = parseInt("0666", 8) & ~Qqn;
  var gea = qnr(),
    bea = Hnr(),
    Aea = Vnr(),
    yea = znr();
  function ME(t, e) {
    var r = this;
    typeof t == "string" && (t = { path: t });
    var n = Gqn(t),
      o = ME;
    switch (n) {
      case "Directory":
        o = gea;
        break;
      case "File":
        o = Aea;
        break;
      case "Link":
      case "SymbolicLink":
        o = bea;
        break;
      case null:
      default:
        o = yea;
        break;
    }
    if (!(r instanceof o)) return new o(t);
    (qqn.call(r),
      t.path || r.error("Must provide a path", null, !0),
      (r.type = t.type),
      (r.props = t),
      (r.depth = t.depth || 0),
      (r.clobber = t.clobber === !1 ? t.clobber : !0),
      (r.parent = t.parent || null),
      (r.root = t.root || (t.parent && t.parent.root) || r),
      (r._path = r.path = $Ee.resolve(t.path)),
      process.platform === "win32" &&
        ((r.path = r._path = r.path.replace(/\?/g, "_")),
        r._path.length >= 260 && ((r._swallowErrors = !0), (r._path = "\\\\?\\" + r.path.replace(/\//g, "\\")))),
      (r.basename = $Ee.basename(t.path)),
      (r.dirname = $Ee.dirname(t.path)),
      (r.linkpath = t.linkpath || null),
      (t.parent = t.root = null),
      (r.size = t.size),
      typeof t.mode == "string" && (t.mode = parseInt(t.mode, 8)),
      (r.readable = !1),
      (r.writable = !0),
      (r._buffer = []),
      (r.ready = !1),
      (r.filter = typeof t.filter == "function" ? t.filter : null),
      r._stat(e));
  }
  ME.prototype._create = function () {
    var t = this;
    LE[t.props.follow ? "stat" : "lstat"](t._path, function (e) {
      if (e)
        return t.warn(
          "Cannot create " +
            t._path +
            `
Unsupported type: ` +
            t.type,
          "ENOTSUP",
        );
      t._finish();
    });
  };
  ME.prototype._stat = function (t) {
    var e = this,
      r = e.props,
      n = r.follow ? "stat" : "lstat",
      o = e._proxy || e;
    t ? s(null, t) : LE[n](e._path, s);
    function s(a, u) {
      if (e.filter && !e.filter.call(o, o, u)) {
        ((e._aborted = !0), e.emit("end"), e.emit("close"));
        return;
      }
      if (a || !u) return Ynr(e);
      e._old = u;
      var c = Gqn(u);
      if (c !== e.type || (e.type === "File" && u.nlink > 1))
        return pea(e._path, function (m) {
          if (m) return e.error(m);
          ((e._old = null), Ynr(e));
        });
      Ynr(e);
    }
  };
  function Ynr(t) {
    hea($Ee.dirname(t._path), ME.dirmode, function (e, r) {
      return e ? t.error(e) : ((t._madeDir = r), t._create());
    });
  }
  function Hqn(t, e, r, n, o) {
    var s = e.mode,
      a = e.follow || t.type !== "SymbolicLink" ? "chmod" : "lchmod";
    if (!LE[a] || typeof s != "number") return o();
    var u = r.mode & parseInt("0777", 8);
    if (((s = s & parseInt("0777", 8)), s === u)) return o();
    LE[a](n, s, o);
  }
  function Vqn(t, e, r, n, o) {
    if (
      process.platform === "win32" ||
      !process.getuid ||
      process.getuid() !== 0 ||
      (typeof e.uid != "number" && typeof e.gid != "number") ||
      (r.uid === e.uid && r.gid === e.gid)
    )
      return o();
    var s = t.props.follow || t.type !== "SymbolicLink" ? "chown" : "lchown";
    if (!LE[s]) return o();
    (typeof e.uid != "number" && (e.uid = r.uid),
      typeof e.gid != "number" && (e.gid = r.gid),
      LE[s](n, e.uid, e.gid, o));
  }
  function Wqn(t, e, r, n, o) {
    if (!LE.utimes || process.platform === "win32") return o();
    var s = e.follow || t.type !== "SymbolicLink" ? "utimes" : "lutimes";
    if ((s === "lutimes" && !LE[s] && (s = "utimes"), !LE[s])) return o();
    var a = r.atime,
      u = r.mtime,
      c = e.atime,
      m = e.mtime;
    if (
      (c === void 0 && (c = a),
      m === void 0 && (m = u),
      jqn(c) || (c = new Date(c)),
      jqn(m) || (c = new Date(m)),
      c.getTime() === a.getTime() && m.getTime() === u.getTime())
    )
      return o();
    LE[s](n, c, m, o);
  }
  ME.prototype._finish = function () {
    var t = this;
    if (t._finishing) return;
    t._finishing = !0;
    var e = 0,
      r = null,
      n = !1;
    if (t._old) ((t._old.atime = new Date(0)), (t._old.mtime = new Date(0)), s(t._old));
    else {
      var o = t.props.follow ? "stat" : "lstat";
      LE[o](t._path, function (u, c) {
        if (u)
          if (u.code === "ENOENT" && (t.type === "Link" || t.type === "SymbolicLink") && process.platform === "win32") {
            ((t.ready = !0), t.emit("ready"), t.emit("end"), t.emit("close"), (t.end = t._finish = function () {}));
            return;
          } else return t.error(u);
        s((t._old = c));
      });
    }
    return;
    function s(u) {
      ((e += 3),
        Hqn(t, t.props, u, t._path, a("chmod")),
        Vqn(t, t.props, u, t._path, a("chown")),
        Wqn(t, t.props, u, t._path, a("utimes")));
    }
    function a(u) {
      return function (c) {
        if (r) return;
        if (c) return ((c.fstream_finish_call = u), t.error((r = c)));
        if (--e > 0 || n) return;
        if (((n = !0), t._madeDir)) zqn(t, t._path, m);
        else return m();
        function m(d) {
          if (d) return ((d.fstream_finish_call = "setupMadeDir"), t.error(d));
          (t.emit("end"), t.emit("close"));
        }
      };
    }
  };
  function zqn(t, e, r) {
    var n = t._madeDir,
      o = $Ee.dirname(e);
    _ea(t, o, function (s) {
      if (s) return r(s);
      if (o === n) return r();
      zqn(t, o, r);
    });
  }
  function _ea(t, e, r) {
    var n = {};
    Object.keys(t.props).forEach(function (u) {
      ((n[u] = t.props[u]), u === "mode" && t.type !== "Directory" && (n[u] = n[u] | parseInt("0111", 8)));
    });
    var o = 3,
      s = null;
    LE.stat(e, function (u, c) {
      if (u) return r((s = u));
      (Hqn(t, n, c, e, a), Vqn(t, n, c, e, a), Wqn(t, n, c, e, a));
    });
    function a(u) {
      if (!s) {
        if (u) return r((s = u));
        if (--o === 0) return r();
      }
    }
  }
  ME.prototype.pipe = function () {
    this.error("Can't pipe from writable stream");
  };
  ME.prototype.add = function () {
    this.error("Can't add to non-Directory type");
  };
  ME.prototype.write = function () {
    return !0;
  };
  function Eea(t) {
    return Object.prototype.toString.call(t);
  }
  function jqn(t) {
    return typeof t == "object" && Eea(t) === "[object Date]";
  }
});