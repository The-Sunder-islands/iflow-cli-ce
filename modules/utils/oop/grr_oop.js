/**
 * @module grr
 * @category utils/oop
 * @label oop
 * @position 1388 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (grr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var grr = T((uce) => {
  var AYs = Buffer.alloc,
    yYs = "0000000000000000000",
    _Ys = "7777777777777777777",
    U$n = 48,
    $$n = Buffer.from("ustar\0", "binary"),
    EYs = Buffer.from("00", "binary"),
    vYs = Buffer.from("ustar ", "binary"),
    CYs = Buffer.from(" \0", "binary"),
    SYs = parseInt("7777", 8),
    oEe = 257,
    hrr = 263,
    wYs = function (t, e, r) {
      return typeof t != "number" ? r : ((t = ~~t), t >= e ? e : t >= 0 || ((t += e), t >= 0) ? t : 0);
    },
    xYs = function (t) {
      switch (t) {
        case 0:
          return "file";
        case 1:
          return "link";
        case 2:
          return "symlink";
        case 3:
          return "character-device";
        case 4:
          return "block-device";
        case 5:
          return "directory";
        case 6:
          return "fifo";
        case 7:
          return "contiguous-file";
        case 72:
          return "pax-header";
        case 55:
          return "pax-global-header";
        case 27:
          return "gnu-long-link-path";
        case 28:
        case 30:
          return "gnu-long-path";
      }
      return null;
    },
    TYs = function (t) {
      switch (t) {
        case "file":
          return 0;
        case "link":
          return 1;
        case "symlink":
          return 2;
        case "character-device":
          return 3;
        case "block-device":
          return 4;
        case "directory":
          return 5;
        case "fifo":
          return 6;
        case "contiguous-file":
          return 7;
        case "pax-header":
          return 72;
      }
      return 0;
    },
    j$n = function (t, e, r, n) {
      for (; r < n; r++) if (t[r] === e) return r;
      return n;
    },
    Q$n = function (t) {
      for (var e = 256, r = 0; r < 148; r++) e += t[r];
      for (var n = 156; n < 512; n++) e += t[n];
      return e;
    },
    qF = function (t, e) {
      return ((t = t.toString(8)), t.length > e ? _Ys.slice(0, e) + " " : yYs.slice(0, e - t.length) + t + " ");
    };
  function DYs(t) {
    var e;
    if (t[0] === 128) e = !0;
    else if (t[0] === 255) e = !1;
    else return null;
    for (var r = [], n = t.length - 1; n > 0; n--) {
      var o = t[n];
      e ? r.push(o) : r.push(255 - o);
    }
    var s = 0,
      a = r.length;
    for (n = 0; n < a; n++) s += r[n] * Math.pow(256, n);
    return e ? s : -1 * s;
  }
  var HF = function (t, e, r) {
      if (((t = t.slice(e, e + r)), (e = 0), t[e] & 128)) return DYs(t);
      for (; e < t.length && t[e] === 32; ) e++;
      for (var n = wYs(j$n(t, 32, e, t.length), t.length, t.length); e < n && t[e] === 0; ) e++;
      return n === e ? 0 : parseInt(t.slice(e, n).toString(), 8);
    },
    ace = function (t, e, r, n) {
      return t.slice(e, j$n(t, 0, e, e + r)).toString(n);
    },
    prr = function (t) {
      var e = Buffer.byteLength(t),
        r = Math.floor(Math.log(e) / Math.log(10)) + 1;
      return (e + r >= Math.pow(10, r) && r++, e + r + t);
    };
  uce.decodeLongPath = function (t, e) {
    return ace(t, 0, t.length, e);
  };
  uce.encodePax = function (t) {
    var e = "";
    (t.name &&
      (e += prr(
        " path=" +
          t.name +
          `
`,
      )),
      t.linkname &&
        (e += prr(
          " linkpath=" +
            t.linkname +
            `
`,
        )));
    var r = t.pax;
    if (r)
      for (var n in r)
        e += prr(
          " " +
            n +
            "=" +
            r[n] +
            `
`,
        );
    return Buffer.from(e);
  };
  uce.decodePax = function (t) {
    for (var e = {}; t.length; ) {
      for (var r = 0; r < t.length && t[r] !== 32; ) r++;
      var n = parseInt(t.slice(0, r).toString(), 10);
      if (!n) return e;
      var o = t.slice(r + 1, n - 1).toString(),
        s = o.indexOf("=");
      if (s === -1) return e;
      ((e[o.slice(0, s)] = o.slice(s + 1)), (t = t.slice(n)));
    }
    return e;
  };
  uce.encode = function (t) {
    var e = AYs(512),
      r = t.name,
      n = "";
    if ((t.typeflag === 5 && r[r.length - 1] !== "/" && (r += "/"), Buffer.byteLength(r) !== r.length)) return null;
    for (; Buffer.byteLength(r) > 100; ) {
      var o = r.indexOf("/");
      if (o === -1) return null;
      ((n += n ? "/" + r.slice(0, o) : r.slice(0, o)), (r = r.slice(o + 1)));
    }
    return Buffer.byteLength(r) > 100 ||
      Buffer.byteLength(n) > 155 ||
      (t.linkname && Buffer.byteLength(t.linkname) > 100)
      ? null
      : (e.write(r),
        e.write(qF(t.mode & SYs, 6), 100),
        e.write(qF(t.uid, 6), 108),
        e.write(qF(t.gid, 6), 116),
        e.write(qF(t.size, 11), 124),
        e.write(qF((t.mtime.getTime() / 1e3) | 0, 11), 136),
        (e[156] = U$n + TYs(t.type)),
        t.linkname && e.write(t.linkname, 157),
        $$n.copy(e, oEe),
        EYs.copy(e, hrr),
        t.uname && e.write(t.uname, 265),
        t.gname && e.write(t.gname, 297),
        e.write(qF(t.devmajor || 0, 6), 329),
        e.write(qF(t.devminor || 0, 6), 337),
        n && e.write(n, 345),
        e.write(qF(Q$n(e), 6), 148),
        e);
  };
  uce.decode = function (t, e, r) {
    var n = t[156] === 0 ? 0 : t[156] - U$n,
      o = ace(t, 0, 100, e),
      s = HF(t, 100, 8),
      a = HF(t, 108, 8),
      u = HF(t, 116, 8),
      c = HF(t, 124, 12),
      m = HF(t, 136, 12),
      d = xYs(n),
      f = t[157] === 0 ? null : ace(t, 157, 100, e),
      p = ace(t, 265, 32),
      h = ace(t, 297, 32),
      g = HF(t, 329, 8),
      b = HF(t, 337, 8),
      A = Q$n(t);
    if (A === 256) return null;
    if (A !== HF(t, 148, 8))
      throw new Error("Invalid tar header. Maybe the tar is corrupted or it needs to be gunzipped?");
    if ($$n.compare(t, oEe, oEe + 6) === 0) t[345] && (o = ace(t, 345, 155, e) + "/" + o);
    else if (!(vYs.compare(t, oEe, oEe + 6) === 0 && CYs.compare(t, hrr, hrr + 2) === 0)) {
      if (!r) throw new Error("Invalid tar header: unknown format.");
    }
    return (
      n === 0 && o && o[o.length - 1] === "/" && (n = 5),
      {
        name: o,
        mode: s,
        uid: a,
        gid: u,
        size: c,
        mtime: new Date(1e3 * m),
        type: d,
        linkname: f,
        uname: p,
        gname: h,
        devmajor: g,
        devminor: b,
      }
    );
  };
});
var Y$n = T((F9c, z$n) => {
  var q$n = Ae("util"),
    IYs = F$n(),
    sEe = grr(),
    H$n = Dg().Writable,
    V$n = Dg().PassThrough,
    W$n = function () {},
    G$n = function (t) {
      return ((t &= 511), t && 512 - t);
    },
    RYs = function (t, e) {
      var r = new krt(t, e);
      return (r.end(), r);
    },
    kYs = function (t, e) {
      return (
        e.path && (t.name = e.path),
        e.linkpath && (t.linkname = e.linkpath),
        e.size && (t.size = parseInt(e.size, 10)),
        (t.pax = e),
        t
      );
    },
    krt = function (t, e) {
      ((this._parent = t), (this.offset = e), V$n.call(this, { autoDestroy: !1 }));
    };
  q$n.inherits(krt, V$n);
  krt.prototype.destroy = function (t) {
    this._parent.destroy(t);
  };
  var dO = function (t) {
    if (!(this instanceof dO)) return new dO(t);
    (H$n.call(this, t),
      (t = t || {}),
      (this._offset = 0),
      (this._buffer = IYs()),
      (this._missing = 0),
      (this._partial = !1),
      (this._onparse = W$n),
      (this._header = null),
      (this._stream = null),
      (this._overflow = null),
      (this._cb = null),
      (this._locked = !1),
      (this._destroyed = !1),
      (this._pax = null),
      (this._paxGlobal = null),
      (this._gnuLongPath = null),
      (this._gnuLongLinkPath = null));
    var e = this,
      r = e._buffer,
      n = function () {
        e._continue();
      },
      o = function (p) {
        if (((e._locked = !1), p)) return e.destroy(p);
        e._stream || n();
      },
      s = function () {
        e._stream = null;
        var p = G$n(e._header.size);
        (p ? e._parse(p, a) : e._parse(512, f), e._locked || n());
      },
      a = function () {
        (e._buffer.consume(G$n(e._header.size)), e._parse(512, f), n());
      },
      u = function () {
        var p = e._header.size;
        ((e._paxGlobal = sEe.decodePax(r.slice(0, p))), r.consume(p), s());
      },
      c = function () {
        var p = e._header.size;
        ((e._pax = sEe.decodePax(r.slice(0, p))),
          e._paxGlobal && (e._pax = Object.assign({}, e._paxGlobal, e._pax)),
          r.consume(p),
          s());
      },
      m = function () {
        var p = e._header.size;
        ((this._gnuLongPath = sEe.decodeLongPath(r.slice(0, p), t.filenameEncoding)), r.consume(p), s());
      },
      d = function () {
        var p = e._header.size;
        ((this._gnuLongLinkPath = sEe.decodeLongPath(r.slice(0, p), t.filenameEncoding)), r.consume(p), s());
      },
      f = function () {
        var p = e._offset,
          h;
        try {
          h = e._header = sEe.decode(r.slice(0, 512), t.filenameEncoding, t.allowUnknownFormat);
        } catch (g) {
          e.emit("error", g);
        }
        if ((r.consume(512), !h)) {
          (e._parse(512, f), n());
          return;
        }
        if (h.type === "gnu-long-path") {
          (e._parse(h.size, m), n());
          return;
        }
        if (h.type === "gnu-long-link-path") {
          (e._parse(h.size, d), n());
          return;
        }
        if (h.type === "pax-global-header") {
          (e._parse(h.size, u), n());
          return;
        }
        if (h.type === "pax-header") {
          (e._parse(h.size, c), n());
          return;
        }
        if (
          (e._gnuLongPath && ((h.name = e._gnuLongPath), (e._gnuLongPath = null)),
          e._gnuLongLinkPath && ((h.linkname = e._gnuLongLinkPath), (e._gnuLongLinkPath = null)),
          e._pax && ((e._header = h = kYs(h, e._pax)), (e._pax = null)),
          (e._locked = !0),
          !h.size || h.type === "directory")
        ) {
          (e._parse(512, f), e.emit("entry", h, RYs(e, p), o));
          return;
        }
        ((e._stream = new krt(e, p)), e.emit("entry", h, e._stream, o), e._parse(h.size, s), n());
      };
    ((this._onheader = f), this._parse(512, f));
  };
  q$n.inherits(dO, H$n);
  dO.prototype.destroy = function (t) {
    this._destroyed ||
      ((this._destroyed = !0),
      t && this.emit("error", t),
      this.emit("close"),
      this._stream && this._stream.emit("close"));
  };
  dO.prototype._parse = function (t, e) {
    this._destroyed ||
      ((this._offset += t), (this._missing = t), e === this._onheader && (this._partial = !1), (this._onparse = e));
  };
  dO.prototype._continue = function () {
    if (!this._destroyed) {
      var t = this._cb;
      ((this._cb = W$n), this._overflow ? this._write(this._overflow, void 0, t) : t());
    }
  };
  dO.prototype._write = function (t, e, r) {
    if (!this._destroyed) {
      var n = this._stream,
        o = this._buffer,
        s = this._missing;
      if ((t.length && (this._partial = !0), t.length < s))
        return ((this._missing -= t.length), (this._overflow = null), n ? n.write(t, r) : (o.append(t), r()));
      ((this._cb = r), (this._missing = 0));
      var a = null;
      (t.length > s && ((a = t.slice(s)), (t = t.slice(0, s))),
        n ? n.end(t) : o.append(t),
        (this._overflow = a),
        this._onparse());
    }
  };
  dO.prototype._final = function (t) {
    if (this._partial) return this.destroy(new Error("Unexpected end of data"));
    t();
  };
  z$n.exports = dO;
});
var J$n = T((U9c, K$n) => {
  K$n.exports = Ae("fs").constants || Ae("constants");
});