/**
 * @module rz
 * @category utils/fs
 * @label fs
 * @position 1449 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (rz) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var rz = T((q6c, uqn) => {
  uqn.exports = uS;
  var SZs = rf(),
    wZs = Ae("stream").Stream,
    xZs = qo(),
    xnr = Ae("path"),
    Tnr = OEe(),
    fnt = (uS.hardLinks = {}),
    sqn = mnt();
  xZs(uS, sqn);
  var aqn = _nr();
  function uS(t, e) {
    var r = this;
    if (!(r instanceof uS)) return new uS(t, e);
    typeof t == "string" && (t = { path: t });
    var n, o;
    switch (
      (t.type && typeof t.type == "function" ? ((n = t.type), (o = n)) : ((n = Tnr(t)), (o = uS)),
      e && !n && ((n = Tnr(e)), (t[n] = !0), (t.type = n)),
      n)
    ) {
      case "Directory":
        o = vnr();
        break;
      case "Link":
      case "File":
        o = Cnr();
        break;
      case "SymbolicLink":
        o = aqn;
        break;
      case "Socket":
        o = iqn();
        break;
      case null:
        o = wnr();
        break;
    }
    if (!(r instanceof o)) return new o(t);
    (sqn.call(r),
      t.path || r.error("Must provide a path", null, !0),
      (r.readable = !0),
      (r.writable = !1),
      (r.type = n),
      (r.props = t),
      (r.depth = t.depth = t.depth || 0),
      (r.parent = t.parent || null),
      (r.root = t.root || (t.parent && t.parent.root) || r),
      (r._path = r.path = xnr.resolve(t.path)),
      process.platform === "win32" &&
        ((r.path = r._path = r.path.replace(/\?/g, "_")),
        r._path.length >= 260 && ((r._swallowErrors = !0), (r._path = "\\\\?\\" + r.path.replace(/\//g, "\\")))),
      (r.basename = t.basename = xnr.basename(r.path)),
      (r.dirname = t.dirname = xnr.dirname(r.path)),
      (t.parent = t.root = null),
      (r.size = t.size),
      (r.filter = typeof t.filter == "function" ? t.filter : null),
      t.sort === "alpha" && (t.sort = TZs),
      r._stat(e));
  }
  function TZs(t, e) {
    return t === e
      ? 0
      : t.toLowerCase() > e.toLowerCase()
        ? 1
        : t.toLowerCase() < e.toLowerCase()
          ? -1
          : t > e
            ? 1
            : -1;
  }
  uS.prototype._stat = function (t) {
    var e = this,
      r = e.props,
      n = r.follow ? "stat" : "lstat";
    t ? process.nextTick(o.bind(null, null, t)) : SZs[n](e._path, o);
    function o(s, a) {
      if (s) return e.error(s);
      if (
        (Object.keys(a).forEach(function (h) {
          r[h] = a[h];
        }),
        e.size !== void 0 && r.size !== e.size)
      )
        return e.error("incorrect size");
      e.size = r.size;
      var u = Tnr(r),
        c = r.hardlinks !== !1;
      if (c && u !== "Directory" && r.nlink && r.nlink > 1) {
        var m = r.dev + ":" + r.ino;
        fnt[m] === e._path || !fnt[m]
          ? (fnt[m] = e._path)
          : ((u = e.type = e.props.type = "Link"),
            (e.Link = e.props.Link = !0),
            (e.linkpath = e.props.linkpath = fnt[m]),
            (e._stat = e._read = aqn.prototype._read));
      }
      if ((e.type && e.type !== u && e.error("Unexpected type: " + u), e.filter)) {
        var d = e._proxy || e;
        if (!e.filter.call(d, d, r)) {
          e._disowned || (e.abort(), e.emit("end"), e.emit("close"));
          return;
        }
      }
      var f = ["_stat", "stat", "ready"],
        p = 0;
      (function h() {
        if (e._aborted) {
          (e.emit("end"), e.emit("close"));
          return;
        }
        if (e._paused && e.type !== "Directory") {
          e.once("resume", h);
          return;
        }
        var g = f[p++];
        if (!g) return e._read();
        (e.emit(g, r), h());
      })();
    }
  };
  uS.prototype.pipe = function (t) {
    var e = this;
    return (
      typeof t.add == "function" &&
        e.on("entry", function (r) {
          var n = t.add(r);
          n === !1 && e.pause();
        }),
      wZs.prototype.pipe.apply(this, arguments)
    );
  };
  uS.prototype.pause = function (t) {
    ((this._paused = !0), (t = t || this), this.emit("pause", t), this._stream && this._stream.pause(t));
  };
  uS.prototype.resume = function (t) {
    ((this._paused = !1),
      (t = t || this),
      this.emit("resume", t),
      this._stream && this._stream.resume(t),
      this._read());
  };
  uS.prototype._read = function () {
    this.error("Cannot read unknown type: " + this.type);
  };
});