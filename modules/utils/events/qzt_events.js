/**
 * @module qzt
 * @category utils/events
 * @label events
 * @position 1147 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qzt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qzt = T((jbc, zDn) => {
  "use strict";
  zDn.exports = p1;
  function qDn(t) {
    var e = this;
    ((this.next = null),
      (this.entry = null),
      (this.finish = function () {
        gDs(e, t);
      }));
  }
  var tue;
  p1.WritableState = e_e;
  var qTs = { deprecate: GV() },
    HDn = Mzt(),
    $Ze = Ae("buffer").Buffer,
    HTs =
      (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array ||
      function () {};
  function VTs(t) {
    return $Ze.from(t);
  }
  function WTs(t) {
    return $Ze.isBuffer(t) || t instanceof HTs;
  }
  var Gzt = $zt(),
    zTs = jzt(),
    YTs = zTs.getHighWaterMark,
    bF = gF().codes,
    KTs = bF.ERR_INVALID_ARG_TYPE,
    JTs = bF.ERR_METHOD_NOT_IMPLEMENTED,
    XTs = bF.ERR_MULTIPLE_CALLBACK,
    ZTs = bF.ERR_STREAM_CANNOT_PIPE,
    eDs = bF.ERR_STREAM_DESTROYED,
    tDs = bF.ERR_STREAM_NULL_VALUES,
    rDs = bF.ERR_STREAM_WRITE_AFTER_END,
    nDs = bF.ERR_UNKNOWN_ENCODING,
    rue = Gzt.errorOrDestroy;
  qo()(p1, HDn);
  function iDs() {}
  function e_e(t, e, r) {
    ((tue = tue || mW()),
      (t = t || {}),
      typeof r != "boolean" && (r = e instanceof tue),
      (this.objectMode = !!t.objectMode),
      r && (this.objectMode = this.objectMode || !!t.writableObjectMode),
      (this.highWaterMark = YTs(this, t, "writableHighWaterMark", r)),
      (this.finalCalled = !1),
      (this.needDrain = !1),
      (this.ending = !1),
      (this.ended = !1),
      (this.finished = !1),
      (this.destroyed = !1));
    var n = t.decodeStrings === !1;
    ((this.decodeStrings = !n),
      (this.defaultEncoding = t.defaultEncoding || "utf8"),
      (this.length = 0),
      (this.writing = !1),
      (this.corked = 0),
      (this.sync = !0),
      (this.bufferProcessing = !1),
      (this.onwrite = function (o) {
        mDs(e, o);
      }),
      (this.writecb = null),
      (this.writelen = 0),
      (this.bufferedRequest = null),
      (this.lastBufferedRequest = null),
      (this.pendingcb = 0),
      (this.prefinished = !1),
      (this.errorEmitted = !1),
      (this.emitClose = t.emitClose !== !1),
      (this.autoDestroy = !!t.autoDestroy),
      (this.bufferedRequestCount = 0),
      (this.corkedRequestsFree = new qDn(this)));
  }
  e_e.prototype.getBuffer = function () {
    for (var e = this.bufferedRequest, r = []; e; ) (r.push(e), (e = e.next));
    return r;
  };
  (function () {
    try {
      Object.defineProperty(e_e.prototype, "buffer", {
        get: qTs.deprecate(
          function () {
            return this.getBuffer();
          },
          "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
          "DEP0003",
        ),
      });
    } catch {}
  })();
  var UZe;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function"
    ? ((UZe = Function.prototype[Symbol.hasInstance]),
      Object.defineProperty(p1, Symbol.hasInstance, {
        value: function (e) {
          return UZe.call(this, e) ? !0 : this !== p1 ? !1 : e && e._writableState instanceof e_e;
        },
      }))
    : (UZe = function (e) {
        return e instanceof this;
      });
  function p1(t) {
    tue = tue || mW();
    var e = this instanceof tue;
    if (!e && !UZe.call(p1, this)) return new p1(t);
    ((this._writableState = new e_e(t, this, e)),
      (this.writable = !0),
      t &&
        (typeof t.write == "function" && (this._write = t.write),
        typeof t.writev == "function" && (this._writev = t.writev),
        typeof t.destroy == "function" && (this._destroy = t.destroy),
        typeof t.final == "function" && (this._final = t.final)),
      HDn.call(this));
  }
  p1.prototype.pipe = function () {
    rue(this, new ZTs());
  };
  function oDs(t, e) {
    var r = new rDs();
    (rue(t, r), process.nextTick(e, r));
  }
  function sDs(t, e, r, n) {
    var o;
    return (
      r === null
        ? (o = new tDs())
        : typeof r != "string" && !e.objectMode && (o = new KTs("chunk", ["string", "Buffer"], r)),
      o ? (rue(t, o), process.nextTick(n, o), !1) : !0
    );
  }
  p1.prototype.write = function (t, e, r) {
    var n = this._writableState,
      o = !1,
      s = !n.objectMode && WTs(t);
    return (
      s && !$Ze.isBuffer(t) && (t = VTs(t)),
      typeof e == "function" && ((r = e), (e = null)),
      s ? (e = "buffer") : e || (e = n.defaultEncoding),
      typeof r != "function" && (r = iDs),
      n.ending ? oDs(this, r) : (s || sDs(this, n, t, r)) && (n.pendingcb++, (o = uDs(this, n, s, t, e, r))),
      o
    );
  };
  p1.prototype.cork = function () {
    this._writableState.corked++;
  };
  p1.prototype.uncork = function () {
    var t = this._writableState;
    t.corked && (t.corked--, !t.writing && !t.corked && !t.bufferProcessing && t.bufferedRequest && VDn(this, t));
  };
  p1.prototype.setDefaultEncoding = function (e) {
    if (
      (typeof e == "string" && (e = e.toLowerCase()),
      !(
        ["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf(
          (e + "").toLowerCase(),
        ) > -1
      ))
    )
      throw new nDs(e);
    return ((this._writableState.defaultEncoding = e), this);
  };
  Object.defineProperty(p1.prototype, "writableBuffer", {
    enumerable: !1,
    get: function () {
      return this._writableState && this._writableState.getBuffer();
    },
  });
  function aDs(t, e, r) {
    return (!t.objectMode && t.decodeStrings !== !1 && typeof e == "string" && (e = $Ze.from(e, r)), e);
  }
  Object.defineProperty(p1.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    },
  });
  function uDs(t, e, r, n, o, s) {
    if (!r) {
      var a = aDs(e, n, o);
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
    } else Qzt(t, e, !1, u, n, o, s);
    return c;
  }
  function Qzt(t, e, r, n, o, s, a) {
    ((e.writelen = n),
      (e.writecb = a),
      (e.writing = !0),
      (e.sync = !0),
      e.destroyed ? e.onwrite(new eDs("write")) : r ? t._writev(o, e.onwrite) : t._write(o, s, e.onwrite),
      (e.sync = !1));
  }
  function cDs(t, e, r, n, o) {
    (--e.pendingcb,
      r
        ? (process.nextTick(o, n), process.nextTick(Zye, t, e), (t._writableState.errorEmitted = !0), rue(t, n))
        : (o(n), (t._writableState.errorEmitted = !0), rue(t, n), Zye(t, e)));
  }
  function lDs(t) {
    ((t.writing = !1), (t.writecb = null), (t.length -= t.writelen), (t.writelen = 0));
  }
  function mDs(t, e) {
    var r = t._writableState,
      n = r.sync,
      o = r.writecb;
    if (typeof o != "function") throw new XTs();
    if ((lDs(r), e)) cDs(t, r, n, e, o);
    else {
      var s = WDn(r) || t.destroyed;
      (!s && !r.corked && !r.bufferProcessing && r.bufferedRequest && VDn(t, r),
        n ? process.nextTick(GDn, t, r, s, o) : GDn(t, r, s, o));
    }
  }
  function GDn(t, e, r, n) {
    (r || dDs(t, e), e.pendingcb--, n(), Zye(t, e));
  }
  function dDs(t, e) {
    e.length === 0 && e.needDrain && ((e.needDrain = !1), t.emit("drain"));
  }
  function VDn(t, e) {
    e.bufferProcessing = !0;
    var r = e.bufferedRequest;
    if (t._writev && r && r.next) {
      var n = e.bufferedRequestCount,
        o = new Array(n),
        s = e.corkedRequestsFree;
      s.entry = r;
      for (var a = 0, u = !0; r; ) ((o[a] = r), r.isBuf || (u = !1), (r = r.next), (a += 1));
      ((o.allBuffers = u),
        Qzt(t, e, !0, e.length, o, "", s.finish),
        e.pendingcb++,
        (e.lastBufferedRequest = null),
        s.next ? ((e.corkedRequestsFree = s.next), (s.next = null)) : (e.corkedRequestsFree = new qDn(e)),
        (e.bufferedRequestCount = 0));
    } else {
      for (; r; ) {
        var c = r.chunk,
          m = r.encoding,
          d = r.callback,
          f = e.objectMode ? 1 : c.length;
        if ((Qzt(t, e, !1, f, c, m, d), (r = r.next), e.bufferedRequestCount--, e.writing)) break;
      }
      r === null && (e.lastBufferedRequest = null);
    }
    ((e.bufferedRequest = r), (e.bufferProcessing = !1));
  }
  p1.prototype._write = function (t, e, r) {
    r(new JTs("_write()"));
  };
  p1.prototype._writev = null;
  p1.prototype.end = function (t, e, r) {
    var n = this._writableState;
    return (
      typeof t == "function" ? ((r = t), (t = null), (e = null)) : typeof e == "function" && ((r = e), (e = null)),
      t != null && this.write(t, e),
      n.corked && ((n.corked = 1), this.uncork()),
      n.ending || hDs(this, n, r),
      this
    );
  };
  Object.defineProperty(p1.prototype, "writableLength", {
    enumerable: !1,
    get: function () {
      return this._writableState.length;
    },
  });
  function WDn(t) {
    return t.ending && t.length === 0 && t.bufferedRequest === null && !t.finished && !t.writing;
  }
  function fDs(t, e) {
    t._final(function (r) {
      (e.pendingcb--, r && rue(t, r), (e.prefinished = !0), t.emit("prefinish"), Zye(t, e));
    });
  }
  function pDs(t, e) {
    !e.prefinished &&
      !e.finalCalled &&
      (typeof t._final == "function" && !e.destroyed
        ? (e.pendingcb++, (e.finalCalled = !0), process.nextTick(fDs, t, e))
        : ((e.prefinished = !0), t.emit("prefinish")));
  }
  function Zye(t, e) {
    var r = WDn(e);
    if (r && (pDs(t, e), e.pendingcb === 0 && ((e.finished = !0), t.emit("finish"), e.autoDestroy))) {
      var n = t._readableState;
      (!n || (n.autoDestroy && n.endEmitted)) && t.destroy();
    }
    return r;
  }
  function hDs(t, e, r) {
    ((e.ending = !0),
      Zye(t, e),
      r && (e.finished ? process.nextTick(r) : t.once("finish", r)),
      (e.ended = !0),
      (t.writable = !1));
  }
  function gDs(t, e, r) {
    var n = t.entry;
    for (t.entry = null; n; ) {
      var o = n.callback;
      (e.pendingcb--, o(r), (n = n.next));
    }
    e.corkedRequestsFree.next = t;
  }
  Object.defineProperty(p1.prototype, "destroyed", {
    enumerable: !1,
    get: function () {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    },
    set: function (e) {
      this._writableState && (this._writableState.destroyed = e);
    },
  });
  p1.prototype.destroy = Gzt.destroy;
  p1.prototype._undestroy = Gzt.undestroy;
  p1.prototype._destroy = function (t, e) {
    e(t);
  };
});