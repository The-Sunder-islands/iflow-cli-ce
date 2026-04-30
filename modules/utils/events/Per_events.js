/**
 * @module Per
 * @category utils/events
 * @label events
 * @position 1350 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Per) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Per = T((T8c, BMn) => {
  "use strict";
  var BW = Z1();
  BMn.exports = Hf;
  function IMn(t) {
    var e = this;
    ((this.next = null),
      (this.entry = null),
      (this.finish = function () {
        LGs(e, t);
      }));
  }
  var yGs =
      !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : BW.nextTick,
    Vue;
  Hf.WritableState = G_e;
  var RMn = Object.create(z0());
  RMn.inherits = qo();
  var _Gs = { deprecate: GV() },
    kMn = Ier(),
    srt = $_e().Buffer,
    EGs =
      (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array ||
      function () {};
  function vGs(t) {
    return srt.from(t);
  }
  function CGs(t) {
    return srt.isBuffer(t) || t instanceof EGs;
  }
  var OMn = Oer();
  RMn.inherits(Hf, kMn);
  function SGs() {}
  function G_e(t, e) {
    ((Vue = Vue || LW()), (t = t || {}));
    var r = e instanceof Vue;
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
        kGs(e, u);
      }),
      (this.writecb = null),
      (this.writelen = 0),
      (this.bufferedRequest = null),
      (this.lastBufferedRequest = null),
      (this.pendingcb = 0),
      (this.prefinished = !1),
      (this.errorEmitted = !1),
      (this.bufferedRequestCount = 0),
      (this.corkedRequestsFree = new IMn(this)));
  }
  G_e.prototype.getBuffer = function () {
    for (var e = this.bufferedRequest, r = []; e; ) (r.push(e), (e = e.next));
    return r;
  };
  (function () {
    try {
      Object.defineProperty(G_e.prototype, "buffer", {
        get: _Gs.deprecate(
          function () {
            return this.getBuffer();
          },
          "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
          "DEP0003",
        ),
      });
    } catch {}
  })();
  var ort;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function"
    ? ((ort = Function.prototype[Symbol.hasInstance]),
      Object.defineProperty(Hf, Symbol.hasInstance, {
        value: function (t) {
          return ort.call(this, t) ? !0 : this !== Hf ? !1 : t && t._writableState instanceof G_e;
        },
      }))
    : (ort = function (t) {
        return t instanceof this;
      });
  function Hf(t) {
    if (((Vue = Vue || LW()), !ort.call(Hf, this) && !(this instanceof Vue))) return new Hf(t);
    ((this._writableState = new G_e(t, this)),
      (this.writable = !0),
      t &&
        (typeof t.write == "function" && (this._write = t.write),
        typeof t.writev == "function" && (this._writev = t.writev),
        typeof t.destroy == "function" && (this._destroy = t.destroy),
        typeof t.final == "function" && (this._final = t.final)),
      kMn.call(this));
  }
  Hf.prototype.pipe = function () {
    this.emit("error", new Error("Cannot pipe, not readable"));
  };
  function wGs(t, e) {
    var r = new Error("write after end");
    (t.emit("error", r), BW.nextTick(e, r));
  }
  function xGs(t, e, r, n) {
    var o = !0,
      s = !1;
    return (
      r === null
        ? (s = new TypeError("May not write null values to stream"))
        : typeof r != "string" &&
          r !== void 0 &&
          !e.objectMode &&
          (s = new TypeError("Invalid non-string/buffer chunk")),
      s && (t.emit("error", s), BW.nextTick(n, s), (o = !1)),
      o
    );
  }
  Hf.prototype.write = function (t, e, r) {
    var n = this._writableState,
      o = !1,
      s = !n.objectMode && CGs(t);
    return (
      s && !srt.isBuffer(t) && (t = vGs(t)),
      typeof e == "function" && ((r = e), (e = null)),
      s ? (e = "buffer") : e || (e = n.defaultEncoding),
      typeof r != "function" && (r = SGs),
      n.ended ? wGs(this, r) : (s || xGs(this, n, t, r)) && (n.pendingcb++, (o = DGs(this, n, s, t, e, r))),
      o
    );
  };
  Hf.prototype.cork = function () {
    var t = this._writableState;
    t.corked++;
  };
  Hf.prototype.uncork = function () {
    var t = this._writableState;
    t.corked && (t.corked--, !t.writing && !t.corked && !t.bufferProcessing && t.bufferedRequest && NMn(this, t));
  };
  Hf.prototype.setDefaultEncoding = function (e) {
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
  function TGs(t, e, r) {
    return (!t.objectMode && t.decodeStrings !== !1 && typeof e == "string" && (e = srt.from(e, r)), e);
  }
  Object.defineProperty(Hf.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    },
  });
  function DGs(t, e, r, n, o, s) {
    if (!r) {
      var a = TGs(e, n, o);
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
    } else Ner(t, e, !1, u, n, o, s);
    return c;
  }
  function Ner(t, e, r, n, o, s, a) {
    ((e.writelen = n),
      (e.writecb = a),
      (e.writing = !0),
      (e.sync = !0),
      r ? t._writev(o, e.onwrite) : t._write(o, s, e.onwrite),
      (e.sync = !1));
  }
  function IGs(t, e, r, n, o) {
    (--e.pendingcb,
      r
        ? (BW.nextTick(o, n), BW.nextTick(Q_e, t, e), (t._writableState.errorEmitted = !0), t.emit("error", n))
        : (o(n), (t._writableState.errorEmitted = !0), t.emit("error", n), Q_e(t, e)));
  }
  function RGs(t) {
    ((t.writing = !1), (t.writecb = null), (t.length -= t.writelen), (t.writelen = 0));
  }
  function kGs(t, e) {
    var r = t._writableState,
      n = r.sync,
      o = r.writecb;
    if ((RGs(r), e)) IGs(t, r, n, e, o);
    else {
      var s = PMn(r);
      (!s && !r.corked && !r.bufferProcessing && r.bufferedRequest && NMn(t, r),
        n ? yGs(DMn, t, r, s, o) : DMn(t, r, s, o));
    }
  }
  function DMn(t, e, r, n) {
    (r || OGs(t, e), e.pendingcb--, n(), Q_e(t, e));
  }
  function OGs(t, e) {
    e.length === 0 && e.needDrain && ((e.needDrain = !1), t.emit("drain"));
  }
  function NMn(t, e) {
    e.bufferProcessing = !0;
    var r = e.bufferedRequest;
    if (t._writev && r && r.next) {
      var n = e.bufferedRequestCount,
        o = new Array(n),
        s = e.corkedRequestsFree;
      s.entry = r;
      for (var a = 0, u = !0; r; ) ((o[a] = r), r.isBuf || (u = !1), (r = r.next), (a += 1));
      ((o.allBuffers = u),
        Ner(t, e, !0, e.length, o, "", s.finish),
        e.pendingcb++,
        (e.lastBufferedRequest = null),
        s.next ? ((e.corkedRequestsFree = s.next), (s.next = null)) : (e.corkedRequestsFree = new IMn(e)),
        (e.bufferedRequestCount = 0));
    } else {
      for (; r; ) {
        var c = r.chunk,
          m = r.encoding,
          d = r.callback,
          f = e.objectMode ? 1 : c.length;
        if ((Ner(t, e, !1, f, c, m, d), (r = r.next), e.bufferedRequestCount--, e.writing)) break;
      }
      r === null && (e.lastBufferedRequest = null);
    }
    ((e.bufferedRequest = r), (e.bufferProcessing = !1));
  }
  Hf.prototype._write = function (t, e, r) {
    r(new Error("_write() is not implemented"));
  };
  Hf.prototype._writev = null;
  Hf.prototype.end = function (t, e, r) {
    var n = this._writableState;
    (typeof t == "function" ? ((r = t), (t = null), (e = null)) : typeof e == "function" && ((r = e), (e = null)),
      t != null && this.write(t, e),
      n.corked && ((n.corked = 1), this.uncork()),
      n.ending || BGs(this, n, r));
  };
  function PMn(t) {
    return t.ending && t.length === 0 && t.bufferedRequest === null && !t.finished && !t.writing;
  }
  function NGs(t, e) {
    t._final(function (r) {
      (e.pendingcb--, r && t.emit("error", r), (e.prefinished = !0), t.emit("prefinish"), Q_e(t, e));
    });
  }
  function PGs(t, e) {
    !e.prefinished &&
      !e.finalCalled &&
      (typeof t._final == "function"
        ? (e.pendingcb++, (e.finalCalled = !0), BW.nextTick(NGs, t, e))
        : ((e.prefinished = !0), t.emit("prefinish")));
  }
  function Q_e(t, e) {
    var r = PMn(e);
    return (r && (PGs(t, e), e.pendingcb === 0 && ((e.finished = !0), t.emit("finish"))), r);
  }
  function BGs(t, e, r) {
    ((e.ending = !0),
      Q_e(t, e),
      r && (e.finished ? BW.nextTick(r) : t.once("finish", r)),
      (e.ended = !0),
      (t.writable = !1));
  }
  function LGs(t, e, r) {
    var n = t.entry;
    for (t.entry = null; n; ) {
      var o = n.callback;
      (e.pendingcb--, o(r), (n = n.next));
    }
    e.corkedRequestsFree.next = t;
  }
  Object.defineProperty(Hf.prototype, "destroyed", {
    get: function () {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    },
    set: function (t) {
      this._writableState && (this._writableState.destroyed = t);
    },
  });
  Hf.prototype.destroy = OMn.destroy;
  Hf.prototype._undestroy = OMn.undestroy;
  Hf.prototype._destroy = function (t, e) {
    (this.end(), e(t));
  };
});