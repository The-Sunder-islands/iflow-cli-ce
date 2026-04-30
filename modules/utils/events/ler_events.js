/**
 * @module ler
 * @category utils/events
 * @label events
 * @position 1335 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ler) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ler = T((d8c, PLn) => {
  "use strict";
  var NW = Z1();
  PLn.exports = qf;
  function DLn(t) {
    var e = this;
    ((this.next = null),
      (this.entry = null),
      (this.finish = function () {
        sQs(e, t);
      }));
  }
  var Gjs =
      !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : NW.nextTick,
    Que;
  qf.WritableState = N_e;
  var ILn = Object.create(z0());
  ILn.inherits = qo();
  var qjs = { deprecate: GV() },
    RLn = oer(),
    Vtt = R_e().Buffer,
    Hjs =
      (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array ||
      function () {};
  function Vjs(t) {
    return Vtt.from(t);
  }
  function Wjs(t) {
    return Vtt.isBuffer(t) || t instanceof Hjs;
  }
  var kLn = uer();
  ILn.inherits(qf, RLn);
  function zjs() {}
  function N_e(t, e) {
    ((Que = Que || PW()), (t = t || {}));
    var r = e instanceof Que;
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
        tQs(e, u);
      }),
      (this.writecb = null),
      (this.writelen = 0),
      (this.bufferedRequest = null),
      (this.lastBufferedRequest = null),
      (this.pendingcb = 0),
      (this.prefinished = !1),
      (this.errorEmitted = !1),
      (this.bufferedRequestCount = 0),
      (this.corkedRequestsFree = new DLn(this)));
  }
  N_e.prototype.getBuffer = function () {
    for (var e = this.bufferedRequest, r = []; e; ) (r.push(e), (e = e.next));
    return r;
  };
  (function () {
    try {
      Object.defineProperty(N_e.prototype, "buffer", {
        get: qjs.deprecate(
          function () {
            return this.getBuffer();
          },
          "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
          "DEP0003",
        ),
      });
    } catch {}
  })();
  var Htt;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function"
    ? ((Htt = Function.prototype[Symbol.hasInstance]),
      Object.defineProperty(qf, Symbol.hasInstance, {
        value: function (t) {
          return Htt.call(this, t) ? !0 : this !== qf ? !1 : t && t._writableState instanceof N_e;
        },
      }))
    : (Htt = function (t) {
        return t instanceof this;
      });
  function qf(t) {
    if (((Que = Que || PW()), !Htt.call(qf, this) && !(this instanceof Que))) return new qf(t);
    ((this._writableState = new N_e(t, this)),
      (this.writable = !0),
      t &&
        (typeof t.write == "function" && (this._write = t.write),
        typeof t.writev == "function" && (this._writev = t.writev),
        typeof t.destroy == "function" && (this._destroy = t.destroy),
        typeof t.final == "function" && (this._final = t.final)),
      RLn.call(this));
  }
  qf.prototype.pipe = function () {
    this.emit("error", new Error("Cannot pipe, not readable"));
  };
  function Yjs(t, e) {
    var r = new Error("write after end");
    (t.emit("error", r), NW.nextTick(e, r));
  }
  function Kjs(t, e, r, n) {
    var o = !0,
      s = !1;
    return (
      r === null
        ? (s = new TypeError("May not write null values to stream"))
        : typeof r != "string" &&
          r !== void 0 &&
          !e.objectMode &&
          (s = new TypeError("Invalid non-string/buffer chunk")),
      s && (t.emit("error", s), NW.nextTick(n, s), (o = !1)),
      o
    );
  }
  qf.prototype.write = function (t, e, r) {
    var n = this._writableState,
      o = !1,
      s = !n.objectMode && Wjs(t);
    return (
      s && !Vtt.isBuffer(t) && (t = Vjs(t)),
      typeof e == "function" && ((r = e), (e = null)),
      s ? (e = "buffer") : e || (e = n.defaultEncoding),
      typeof r != "function" && (r = zjs),
      n.ended ? Yjs(this, r) : (s || Kjs(this, n, t, r)) && (n.pendingcb++, (o = Xjs(this, n, s, t, e, r))),
      o
    );
  };
  qf.prototype.cork = function () {
    var t = this._writableState;
    t.corked++;
  };
  qf.prototype.uncork = function () {
    var t = this._writableState;
    t.corked && (t.corked--, !t.writing && !t.corked && !t.bufferProcessing && t.bufferedRequest && OLn(this, t));
  };
  qf.prototype.setDefaultEncoding = function (e) {
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
  function Jjs(t, e, r) {
    return (!t.objectMode && t.decodeStrings !== !1 && typeof e == "string" && (e = Vtt.from(e, r)), e);
  }
  Object.defineProperty(qf.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    },
  });
  function Xjs(t, e, r, n, o, s) {
    if (!r) {
      var a = Jjs(e, n, o);
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
    } else cer(t, e, !1, u, n, o, s);
    return c;
  }
  function cer(t, e, r, n, o, s, a) {
    ((e.writelen = n),
      (e.writecb = a),
      (e.writing = !0),
      (e.sync = !0),
      r ? t._writev(o, e.onwrite) : t._write(o, s, e.onwrite),
      (e.sync = !1));
  }
  function Zjs(t, e, r, n, o) {
    (--e.pendingcb,
      r
        ? (NW.nextTick(o, n), NW.nextTick(O_e, t, e), (t._writableState.errorEmitted = !0), t.emit("error", n))
        : (o(n), (t._writableState.errorEmitted = !0), t.emit("error", n), O_e(t, e)));
  }
  function eQs(t) {
    ((t.writing = !1), (t.writecb = null), (t.length -= t.writelen), (t.writelen = 0));
  }
  function tQs(t, e) {
    var r = t._writableState,
      n = r.sync,
      o = r.writecb;
    if ((eQs(r), e)) Zjs(t, r, n, e, o);
    else {
      var s = NLn(r);
      (!s && !r.corked && !r.bufferProcessing && r.bufferedRequest && OLn(t, r),
        n ? Gjs(TLn, t, r, s, o) : TLn(t, r, s, o));
    }
  }
  function TLn(t, e, r, n) {
    (r || rQs(t, e), e.pendingcb--, n(), O_e(t, e));
  }
  function rQs(t, e) {
    e.length === 0 && e.needDrain && ((e.needDrain = !1), t.emit("drain"));
  }
  function OLn(t, e) {
    e.bufferProcessing = !0;
    var r = e.bufferedRequest;
    if (t._writev && r && r.next) {
      var n = e.bufferedRequestCount,
        o = new Array(n),
        s = e.corkedRequestsFree;
      s.entry = r;
      for (var a = 0, u = !0; r; ) ((o[a] = r), r.isBuf || (u = !1), (r = r.next), (a += 1));
      ((o.allBuffers = u),
        cer(t, e, !0, e.length, o, "", s.finish),
        e.pendingcb++,
        (e.lastBufferedRequest = null),
        s.next ? ((e.corkedRequestsFree = s.next), (s.next = null)) : (e.corkedRequestsFree = new DLn(e)),
        (e.bufferedRequestCount = 0));
    } else {
      for (; r; ) {
        var c = r.chunk,
          m = r.encoding,
          d = r.callback,
          f = e.objectMode ? 1 : c.length;
        if ((cer(t, e, !1, f, c, m, d), (r = r.next), e.bufferedRequestCount--, e.writing)) break;
      }
      r === null && (e.lastBufferedRequest = null);
    }
    ((e.bufferedRequest = r), (e.bufferProcessing = !1));
  }
  qf.prototype._write = function (t, e, r) {
    r(new Error("_write() is not implemented"));
  };
  qf.prototype._writev = null;
  qf.prototype.end = function (t, e, r) {
    var n = this._writableState;
    (typeof t == "function" ? ((r = t), (t = null), (e = null)) : typeof e == "function" && ((r = e), (e = null)),
      t != null && this.write(t, e),
      n.corked && ((n.corked = 1), this.uncork()),
      n.ending || oQs(this, n, r));
  };
  function NLn(t) {
    return t.ending && t.length === 0 && t.bufferedRequest === null && !t.finished && !t.writing;
  }
  function nQs(t, e) {
    t._final(function (r) {
      (e.pendingcb--, r && t.emit("error", r), (e.prefinished = !0), t.emit("prefinish"), O_e(t, e));
    });
  }
  function iQs(t, e) {
    !e.prefinished &&
      !e.finalCalled &&
      (typeof t._final == "function"
        ? (e.pendingcb++, (e.finalCalled = !0), NW.nextTick(nQs, t, e))
        : ((e.prefinished = !0), t.emit("prefinish")));
  }
  function O_e(t, e) {
    var r = NLn(e);
    return (r && (iQs(t, e), e.pendingcb === 0 && ((e.finished = !0), t.emit("finish"))), r);
  }
  function oQs(t, e, r) {
    ((e.ending = !0),
      O_e(t, e),
      r && (e.finished ? NW.nextTick(r) : t.once("finish", r)),
      (e.ended = !0),
      (t.writable = !1));
  }
  function sQs(t, e, r) {
    var n = t.entry;
    for (t.entry = null; n; ) {
      var o = n.callback;
      (e.pendingcb--, o(r), (n = n.next));
    }
    e.corkedRequestsFree.next = t;
  }
  Object.defineProperty(qf.prototype, "destroyed", {
    get: function () {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    },
    set: function (t) {
      this._writableState && (this._writableState.destroyed = t);
    },
  });
  qf.prototype.destroy = kLn.destroy;
  qf.prototype._undestroy = kLn.undestroy;
  qf.prototype._destroy = function (t, e) {
    (this.end(), e(t));
  };
});