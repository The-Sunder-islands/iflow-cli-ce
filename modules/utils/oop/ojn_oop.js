/**
 * @module ojn
 * @category utils/oop
 * @label oop
 * @position 1390 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ojn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ojn = T((j9c, ijn) => {
  var cce = J$n(),
    tjn = ejn(),
    Nrt = qo(),
    MYs = Buffer.alloc,
    rjn = Dg().Readable,
    lce = Dg().Writable,
    FYs = Ae("string_decoder").StringDecoder,
    Ort = grr(),
    UYs = parseInt("755", 8),
    $Ys = parseInt("644", 8),
    njn = MYs(1024),
    Arr = function () {},
    brr = function (t, e) {
      ((e &= 511), e && t.push(njn.slice(0, 512 - e)));
    };
  function jYs(t) {
    switch (t & cce.S_IFMT) {
      case cce.S_IFBLK:
        return "block-device";
      case cce.S_IFCHR:
        return "character-device";
      case cce.S_IFDIR:
        return "directory";
      case cce.S_IFIFO:
        return "fifo";
      case cce.S_IFLNK:
        return "symlink";
    }
    return "file";
  }
  var Prt = function (t) {
    (lce.call(this), (this.written = 0), (this._to = t), (this._destroyed = !1));
  };
  Nrt(Prt, lce);
  Prt.prototype._write = function (t, e, r) {
    if (((this.written += t.length), this._to.push(t))) return r();
    this._to._drain = r;
  };
  Prt.prototype.destroy = function () {
    this._destroyed || ((this._destroyed = !0), this.emit("close"));
  };
  var Brt = function () {
    (lce.call(this), (this.linkname = ""), (this._decoder = new FYs("utf-8")), (this._destroyed = !1));
  };
  Nrt(Brt, lce);
  Brt.prototype._write = function (t, e, r) {
    ((this.linkname += this._decoder.write(t)), r());
  };
  Brt.prototype.destroy = function () {
    this._destroyed || ((this._destroyed = !0), this.emit("close"));
  };
  var aEe = function () {
    (lce.call(this), (this._destroyed = !1));
  };
  Nrt(aEe, lce);
  aEe.prototype._write = function (t, e, r) {
    r(new Error("No body allowed for this entry"));
  };
  aEe.prototype.destroy = function () {
    this._destroyed || ((this._destroyed = !0), this.emit("close"));
  };
  var lD = function (t) {
    if (!(this instanceof lD)) return new lD(t);
    (rjn.call(this, t),
      (this._drain = Arr),
      (this._finalized = !1),
      (this._finalizing = !1),
      (this._destroyed = !1),
      (this._stream = null));
  };
  Nrt(lD, rjn);
  lD.prototype.entry = function (t, e, r) {
    if (this._stream) throw new Error("already piping an entry");
    if (!(this._finalized || this._destroyed)) {
      (typeof e == "function" && ((r = e), (e = null)), r || (r = Arr));
      var n = this;
      if (
        ((!t.size || t.type === "symlink") && (t.size = 0),
        t.type || (t.type = jYs(t.mode)),
        t.mode || (t.mode = t.type === "directory" ? UYs : $Ys),
        t.uid || (t.uid = 0),
        t.gid || (t.gid = 0),
        t.mtime || (t.mtime = new Date()),
        typeof e == "string" && (e = Buffer.from(e)),
        Buffer.isBuffer(e))
      ) {
        ((t.size = e.length), this._encode(t));
        var o = this.push(e);
        return (brr(n, t.size), o ? process.nextTick(r) : (this._drain = r), new aEe());
      }
      if (t.type === "symlink" && !t.linkname) {
        var s = new Brt();
        return (
          tjn(s, function (u) {
            if (u) return (n.destroy(), r(u));
            ((t.linkname = s.linkname), n._encode(t), r());
          }),
          s
        );
      }
      if ((this._encode(t), t.type !== "file" && t.type !== "contiguous-file")) return (process.nextTick(r), new aEe());
      var a = new Prt(this);
      return (
        (this._stream = a),
        tjn(a, function (u) {
          if (((n._stream = null), u)) return (n.destroy(), r(u));
          if (a.written !== t.size) return (n.destroy(), r(new Error("size mismatch")));
          (brr(n, t.size), n._finalizing && n.finalize(), r());
        }),
        a
      );
    }
  };
  lD.prototype.finalize = function () {
    if (this._stream) {
      this._finalizing = !0;
      return;
    }
    this._finalized || ((this._finalized = !0), this.push(njn), this.push(null));
  };
  lD.prototype.destroy = function (t) {
    this._destroyed ||
      ((this._destroyed = !0),
      t && this.emit("error", t),
      this.emit("close"),
      this._stream && this._stream.destroy && this._stream.destroy());
  };
  lD.prototype._encode = function (t) {
    if (!t.pax) {
      var e = Ort.encode(t);
      if (e) {
        this.push(e);
        return;
      }
    }
    this._encodePax(t);
  };
  lD.prototype._encodePax = function (t) {
    var e = Ort.encodePax({ name: t.name, linkname: t.linkname, pax: t.pax }),
      r = {
        name: "PaxHeader",
        mode: t.mode,
        uid: t.uid,
        gid: t.gid,
        size: e.length,
        mtime: t.mtime,
        type: "pax-header",
        linkname: t.linkname && "PaxHeader",
        uname: t.uname,
        gname: t.gname,
        devmajor: t.devmajor,
        devminor: t.devminor,
      };
    (this.push(Ort.encode(r)),
      this.push(e),
      brr(this, e.length),
      (r.size = t.size),
      (r.type = t.type),
      this.push(Ort.encode(r)));
  };
  lD.prototype._read = function (t) {
    var e = this._drain;
    ((this._drain = Arr), e());
  };
  ijn.exports = lD;
});