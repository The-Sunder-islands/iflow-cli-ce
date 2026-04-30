/**
 * @module CHt
 * @category utils/events
 * @label events
 * @position 986 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (CHt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var CHt = T((zhc, q_n) => {
  "use strict";
  var qV = Z1();
  q_n.exports = Qf;
  function F_n(t) {
    var e = this;
    ((this.next = null),
      (this.entry = null),
      (this.finish = function () {
        d_s(e, t);
      }));
  }
  var Yys =
      !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : qV.nextTick,
    dae;
  Qf.WritableState = L6e;
  var U_n = Object.create(z0());
  U_n.inherits = qo();
  var Kys = { deprecate: GV() },
    $_n = hHt(),
    KJe = N6e().Buffer,
    Jys =
      (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array ||
      function () {};
  function Xys(t) {
    return KJe.from(t);
  }
  function Zys(t) {
    return KJe.isBuffer(t) || t instanceof Jys;
  }
  var j_n = EHt();
  U_n.inherits(Qf, $_n);
  function e_s() {}
  function L6e(t, e) {
    ((dae = dae || HV()), (t = t || {}));
    var r = e instanceof dae;
    ((this.objectMode = !!t.objectMode), r && (this.objectMode = this.objectMode || !!t.writableObjectMode));
    var n = t.highWaterMark,
      o = t.writableHighWaterMark,
      s = this.objectMode ? 16 : 16 * 1024;
    (n || n === 0
      ? (this.highWaterMark = n)
      : r && (o || o === 0)
        ? (this.highWaterMark = o)
        : (this.highWaterMark = s),
      (this.highWaterMark = Math.floor(this.highWaterMark)),
      (this.finalCalled = !1),
      (this.needDrain = !1),
      (this.ending = !1),
      (this.ended = !1),
      (this.finished = !1),
      (this.destroyed = !1));
    var a = t.decodeStrings === !1;
    ((this.decodeStrings = !a),
      (this.defaultEncoding = t.defaultEncoding || "utf8"),
      (this.length = 0),
      (this.writing = !1),
      (this.corked = 0),
      (this.sync = !0),
      (this.bufferProcessing = !1),
      (this.onwrite = function (u) {
        a_s(e, u);
      }),
      (this.writecb = null),
      (this.writelen = 0),
      (this.bufferedRequest = null),
      (this.lastBufferedRequest = null),
      (this.pendingcb = 0),
      (this.prefinished = !1),
      (this.errorEmitted = !1),
      (this.bufferedRequestCount = 0),
      (this.corkedRequestsFree = new F_n(this)));
  }
  L6e.prototype.getBuffer = function () {
    for (var e = this.bufferedRequest, r = []; e; ) (r.push(e), (e = e.next));
    return r;
  };
  (function () {
    try {
      Object.defineProperty(L6e.prototype, "buffer", {
        get: Kys.deprecate(
          function () {
            return this.getBuffer();
          },
          "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
          "DEP0003",
        ),
      });
    } catch {}
  })();
  var YJe;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function"
    ? ((YJe = Function.prototype[Symbol.hasInstance]),
      Object.defineProperty(Qf, Symbol.hasInstance, {
        value: function (t) {
          return YJe.call(this, t) ? !0 : this !== Qf ? !1 : t && t._writableState instanceof L6e;
        },
      }))
    : (YJe = function (t) {
        return t instanceof this;
      });
  function Qf(t) {
    if (((dae = dae || HV()), !YJe.call(Qf, this) && !(this instanceof dae))) return new Qf(t);
    ((this._writableState = new L6e(t, this)),
      (this.writable = !0),
      t &&
        (typeof t.write == "function" && (this._write = t.write),
        typeof t.writev == "function" && (this._writev = t.writev),
        typeof t.destroy == "function" && (this._destroy = t.destroy),
        typeof t.final == "function" && (this._final = t.final)),
      $_n.call(this));
  }
  Qf.prototype.pipe = function () {
    this.emit("error", new Error("Cannot pipe, not readable"));
  };
  function t_s(t, e) {
    var r = new Error("write after end");
    (t.emit("error", r), qV.nextTick(e, r));
  }
  function r_s(t, e, r, n) {
    var o = !0,
      s = !1;
    return (
      r === null
        ? (s = new TypeError("May not write null values to stream"))
        : typeof r != "string" &&
          r !== void 0 &&
          !e.objectMode &&
          (s = new TypeError("Invalid non-string/buffer chunk")),
      s && (t.emit("error", s), qV.nextTick(n, s), (o = !1)),
      o
    );
  }
  Qf.prototype.write = function (t, e, r) {
    var n = this._writableState,
      o = !1,
      s = !n.objectMode && Zys(t);
    return (
      s && !KJe.isBuffer(t) && (t = Xys(t)),
      typeof e == "function" && ((r = e), (e = null)),
      s ? (e = "buffer") : e || (e = n.defaultEncoding),
      typeof r != "function" && (r = e_s),
      n.ended ? t_s(this, r) : (s || r_s(this, n, t, r)) && (n.pendingcb++, (o = i_s(this, n, s, t, e, r))),
      o
    );
  };
  Qf.prototype.cork = function () {
    var t = this._writableState;
    t.corked++;
  };
  Qf.prototype.uncork = function () {
    var t = this._writableState;
    t.corked && (t.corked--, !t.writing && !t.corked && !t.bufferProcessing && t.bufferedRequest && Q_n(this, t));
  };
  Qf.prototype.setDefaultEncoding = function (e) {
    if (
      (typeof e == "string" && (e = e.toLowerCase()),
      !(
        ["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf(
          (e + "").toLowerCase(),
        ) > -1
      ))
    )
      throw new TypeError("Unknown encoding: " + e);
    return ((this._writableState.defaultEncoding = e), this);
  };
  function n_s(t, e, r) {
    return (!t.objectMode && t.decodeStrings !== !1 && typeof e == "string" && (e = KJe.from(e, r)), e);
  }
  Object.defineProperty(Qf.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    },
  });
  function i_s(t, e, r, n, o, s) {
    if (!r) {
      var a = n_s(e, n, o);
      n !== a && ((r = !0), (o = "buffer"), (n = a));
    }
    var u = e.objectMode ? 1 : n.length;
    e.length += u;
    var c = e.length < e.highWaterMark;
    if ((c || (e.needDrain = !0), e.writing || e.corked)) {
      var m = e.lastBufferedRequest;
      ((e.lastBufferedRequest = { chunk: n, encoding: o, isBuf: r, callback: s, next: null }),
        m ? (m.next = e.lastBufferedRequest) : (e.bufferedRequest = e.lastBufferedRequest),
        (e.bufferedRequestCount += 1));
    } else vHt(t, e, !1, u, n, o, s);
    return c;
  }
  function vHt(t, e, r, n, o, s, a) {
    ((e.writelen = n),
      (e.writecb = a),
      (e.writing = !0),
      (e.sync = !0),
      r ? t._writev(o, e.onwrite) : t._write(o, s, e.onwrite),
      (e.sync = !1));
  }
  function o_s(t, e, r, n, o) {
    (--e.pendingcb,
      r
        ? (qV.nextTick(o, n), qV.nextTick(B6e, t, e), (t._writableState.errorEmitted = !0), t.emit("error", n))
        : (o(n), (t._writableState.errorEmitted = !0), t.emit("error", n), B6e(t, e)));
  }
  function s_s(t) {
    ((t.writing = !1), (t.writecb = null), (t.length -= t.writelen), (t.writelen = 0));
  }
  function a_s(t, e) {
    var r = t._writableState,
      n = r.sync,
      o = r.writecb;
    if ((s_s(r), e)) o_s(t, r, n, e, o);
    else {
      var s = G_n(r);
      (!s && !r.corked && !r.bufferProcessing && r.bufferedRequest && Q_n(t, r),
        n ? Yys(M_n, t, r, s, o) : M_n(t, r, s, o));
    }
  }
  function M_n(t, e, r, n) {
    (r || u_s(t, e), e.pendingcb--, n(), B6e(t, e));
  }
  function u_s(t, e) {
    e.length === 0 && e.needDrain && ((e.needDrain = !1), t.emit("drain"));
  }
  function Q_n(t, e) {
    e.bufferProcessing = !0;
    var r = e.bufferedRequest;
    if (t._writev && r && r.next) {
      var n = e.bufferedRequestCount,
        o = new Array(n),
        s = e.corkedRequestsFree;
      s.entry = r;
      for (var a = 0, u = !0; r; ) ((o[a] = r), r.isBuf || (u = !1), (r = r.next), (a += 1));
      ((o.allBuffers = u),
        vHt(t, e, !0, e.length, o, "", s.finish),
        e.pendingcb++,
        (e.lastBufferedRequest = null),
        s.next ? ((e.corkedRequestsFree = s.next), (s.next = null)) : (e.corkedRequestsFree = new F_n(e)),
        (e.bufferedRequestCount = 0));
    } else {
      for (; r; ) {
        var c = r.chunk,
          m = r.encoding,
          d = r.callback,
          f = e.objectMode ? 1 : c.length;
        if ((vHt(t, e, !1, f, c, m, d), (r = r.next), e.bufferedRequestCount--, e.writing)) break;
      }
      r === null && (e.lastBufferedRequest = null);
    }
    ((e.bufferedRequest = r), (e.bufferProcessing = !1));
  }
  Qf.prototype._write = function (t, e, r) {
    r(new Error("_write() is not implemented"));
  };
  Qf.prototype._writev = null;
  Qf.prototype.end = function (t, e, r) {
    var n = this._writableState;
    (typeof t == "function" ? ((r = t), (t = null), (e = null)) : typeof e == "function" && ((r = e), (e = null)),
      t != null && this.write(t, e),
      n.corked && ((n.corked = 1), this.uncork()),
      n.ending || m_s(this, n, r));
  };
  function G_n(t) {
    return t.ending && t.length === 0 && t.bufferedRequest === null && !t.finished && !t.writing;
  }
  function c_s(t, e) {
    t._final(function (r) {
      (e.pendingcb--, r && t.emit("error", r), (e.prefinished = !0), t.emit("prefinish"), B6e(t, e));
    });
  }
  function l_s(t, e) {
    !e.prefinished &&
      !e.finalCalled &&
      (typeof t._final == "function"
        ? (e.pendingcb++, (e.finalCalled = !0), qV.nextTick(c_s, t, e))
        : ((e.prefinished = !0), t.emit("prefinish")));
  }
  function B6e(t, e) {
    var r = G_n(e);
    return (r && (l_s(t, e), e.pendingcb === 0 && ((e.finished = !0), t.emit("finish"))), r);
  }
  function m_s(t, e, r) {
    ((e.ending = !0),
      B6e(t, e),
      r && (e.finished ? qV.nextTick(r) : t.once("finish", r)),
      (e.ended = !0),
      (t.writable = !1));
  }
  function d_s(t, e, r) {
    var n = t.entry;
    for (t.entry = null; n; ) {
      var o = n.callback;
      (e.pendingcb--, o(r), (n = n.next));
    }
    e.corkedRequestsFree.next = t;
  }
  Object.defineProperty(Qf.prototype, "destroyed", {
    get: function () {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    },
    set: function (t) {
      this._writableState && (this._writableState.destroyed = t);
    },
  });
  Qf.prototype.destroy = j_n.destroy;
  Qf.prototype._undestroy = j_n.undestroy;
  Qf.prototype._destroy = function (t, e) {
    (this.end(), e(t));
  };
});