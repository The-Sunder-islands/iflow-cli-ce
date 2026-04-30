/**
 * @module Wzt
 * @category utils/events
 * @label events
 * @position 1153 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Wzt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Wzt = T((zbc, bIn) => {
  "use strict";
  bIn.exports = uc;
  var nue;
  uc.ReadableState = mIn;
  var Wbc = Ae("events").EventEmitter,
    lIn = function (e, r) {
      return e.listeners(r).length;
    },
    i_e = Mzt(),
    VZe = Ae("buffer").Buffer,
    XDs =
      (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array ||
      function () {};
  function ZDs(t) {
    return VZe.from(t);
  }
  function eIs(t) {
    return VZe.isBuffer(t) || t instanceof XDs;
  }
  var Xzt = Ae("util"),
    Ka;
  Xzt && Xzt.debuglog ? (Ka = Xzt.debuglog("stream")) : (Ka = function () {});
  var tIs = LDn(),
    oYt = $zt(),
    rIs = jzt(),
    nIs = rIs.getHighWaterMark,
    WZe = gF().codes,
    iIs = WZe.ERR_INVALID_ARG_TYPE,
    oIs = WZe.ERR_STREAM_PUSH_AFTER_EOF,
    sIs = WZe.ERR_METHOD_NOT_IMPLEMENTED,
    aIs = WZe.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,
    iue,
    Zzt,
    eYt;
  qo()(uc, i_e);
  var n_e = oYt.errorOrDestroy,
    tYt = ["error", "close", "destroy", "pause", "resume"];
  function uIs(t, e, r) {
    if (typeof t.prependListener == "function") return t.prependListener(e, r);
    !t._events || !t._events[e]
      ? t.on(e, r)
      : Array.isArray(t._events[e])
        ? t._events[e].unshift(r)
        : (t._events[e] = [r, t._events[e]]);
  }
  function mIn(t, e, r) {
    ((nue = nue || mW()),
      (t = t || {}),
      typeof r != "boolean" && (r = e instanceof nue),
      (this.objectMode = !!t.objectMode),
      r && (this.objectMode = this.objectMode || !!t.readableObjectMode),
      (this.highWaterMark = nIs(this, t, "readableHighWaterMark", r)),
      (this.buffer = new tIs()),
      (this.length = 0),
      (this.pipes = null),
      (this.pipesCount = 0),
      (this.flowing = null),
      (this.ended = !1),
      (this.endEmitted = !1),
      (this.reading = !1),
      (this.sync = !0),
      (this.needReadable = !1),
      (this.emittedReadable = !1),
      (this.readableListening = !1),
      (this.resumeScheduled = !1),
      (this.paused = !0),
      (this.emitClose = t.emitClose !== !1),
      (this.autoDestroy = !!t.autoDestroy),
      (this.destroyed = !1),
      (this.defaultEncoding = t.defaultEncoding || "utf8"),
      (this.awaitDrain = 0),
      (this.readingMore = !1),
      (this.decoder = null),
      (this.encoding = null),
      t.encoding &&
        (iue || (iue = Kzt().StringDecoder), (this.decoder = new iue(t.encoding)), (this.encoding = t.encoding)));
  }
  function uc(t) {
    if (((nue = nue || mW()), !(this instanceof uc))) return new uc(t);
    var e = this instanceof nue;
    ((this._readableState = new mIn(t, this, e)),
      (this.readable = !0),
      t &&
        (typeof t.read == "function" && (this._read = t.read),
        typeof t.destroy == "function" && (this._destroy = t.destroy)),
      i_e.call(this));
  }
  Object.defineProperty(uc.prototype, "destroyed", {
    enumerable: !1,
    get: function () {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    },
    set: function (e) {
      this._readableState && (this._readableState.destroyed = e);
    },
  });
  uc.prototype.destroy = oYt.destroy;
  uc.prototype._undestroy = oYt.undestroy;
  uc.prototype._destroy = function (t, e) {
    e(t);
  };
  uc.prototype.push = function (t, e) {
    var r = this._readableState,
      n;
    return (
      r.objectMode
        ? (n = !0)
        : typeof t == "string" &&
          ((e = e || r.defaultEncoding), e !== r.encoding && ((t = VZe.from(t, e)), (e = "")), (n = !0)),
      dIn(this, t, e, !1, n)
    );
  };
  uc.prototype.unshift = function (t) {
    return dIn(this, t, null, !0, !1);
  };
  function dIn(t, e, r, n, o) {
    Ka("readableAddChunk", e);
    var s = t._readableState;
    if (e === null) ((s.reading = !1), mIs(t, s));
    else {
      var a;
      if ((o || (a = cIs(s, e)), a)) n_e(t, a);
      else if (s.objectMode || (e && e.length > 0))
        if ((typeof e != "string" && !s.objectMode && Object.getPrototypeOf(e) !== VZe.prototype && (e = ZDs(e)), n))
          s.endEmitted ? n_e(t, new aIs()) : rYt(t, s, e, !0);
        else if (s.ended) n_e(t, new oIs());
        else {
          if (s.destroyed) return !1;
          ((s.reading = !1),
            s.decoder && !r
              ? ((e = s.decoder.write(e)), s.objectMode || e.length !== 0 ? rYt(t, s, e, !1) : iYt(t, s))
              : rYt(t, s, e, !1));
        }
      else n || ((s.reading = !1), iYt(t, s));
    }
    return !s.ended && (s.length < s.highWaterMark || s.length === 0);
  }
  function rYt(t, e, r, n) {
    (e.flowing && e.length === 0 && !e.sync
      ? ((e.awaitDrain = 0), t.emit("data", r))
      : ((e.length += e.objectMode ? 1 : r.length),
        n ? e.buffer.unshift(r) : e.buffer.push(r),
        e.needReadable && zZe(t)),
      iYt(t, e));
  }
  function cIs(t, e) {
    var r;
    return (
      !eIs(e) &&
        typeof e != "string" &&
        e !== void 0 &&
        !t.objectMode &&
        (r = new iIs("chunk", ["string", "Buffer", "Uint8Array"], e)),
      r
    );
  }
  uc.prototype.isPaused = function () {
    return this._readableState.flowing === !1;
  };
  uc.prototype.setEncoding = function (t) {
    iue || (iue = Kzt().StringDecoder);
    var e = new iue(t);
    ((this._readableState.decoder = e), (this._readableState.encoding = this._readableState.decoder.encoding));
    for (var r = this._readableState.buffer.head, n = ""; r !== null; ) ((n += e.write(r.data)), (r = r.next));
    return (
      this._readableState.buffer.clear(),
      n !== "" && this._readableState.buffer.push(n),
      (this._readableState.length = n.length),
      this
    );
  };
  var uIn = 1073741824;
  function lIs(t) {
    return (
      t >= uIn
        ? (t = uIn)
        : (t--, (t |= t >>> 1), (t |= t >>> 2), (t |= t >>> 4), (t |= t >>> 8), (t |= t >>> 16), t++),
      t
    );
  }
  function cIn(t, e) {
    return t <= 0 || (e.length === 0 && e.ended)
      ? 0
      : e.objectMode
        ? 1
        : t !== t
          ? e.flowing && e.length
            ? e.buffer.head.data.length
            : e.length
          : (t > e.highWaterMark && (e.highWaterMark = lIs(t)),
            t <= e.length ? t : e.ended ? e.length : ((e.needReadable = !0), 0));
  }
  uc.prototype.read = function (t) {
    (Ka("read", t), (t = parseInt(t, 10)));
    var e = this._readableState,
      r = t;
    if (
      (t !== 0 && (e.emittedReadable = !1),
      t === 0 && e.needReadable && ((e.highWaterMark !== 0 ? e.length >= e.highWaterMark : e.length > 0) || e.ended))
    )
      return (Ka("read: emitReadable", e.length, e.ended), e.length === 0 && e.ended ? nYt(this) : zZe(this), null);
    if (((t = cIn(t, e)), t === 0 && e.ended)) return (e.length === 0 && nYt(this), null);
    var n = e.needReadable;
    (Ka("need readable", n),
      (e.length === 0 || e.length - t < e.highWaterMark) && ((n = !0), Ka("length less than watermark", n)),
      e.ended || e.reading
        ? ((n = !1), Ka("reading or ended", n))
        : n &&
          (Ka("do read"),
          (e.reading = !0),
          (e.sync = !0),
          e.length === 0 && (e.needReadable = !0),
          this._read(e.highWaterMark),
          (e.sync = !1),
          e.reading || (t = cIn(r, e))));
    var o;
    return (
      t > 0 ? (o = hIn(t, e)) : (o = null),
      o === null ? ((e.needReadable = e.length <= e.highWaterMark), (t = 0)) : ((e.length -= t), (e.awaitDrain = 0)),
      e.length === 0 && (e.ended || (e.needReadable = !0), r !== t && e.ended && nYt(this)),
      o !== null && this.emit("data", o),
      o
    );
  };
  function mIs(t, e) {
    if ((Ka("onEofChunk"), !e.ended)) {
      if (e.decoder) {
        var r = e.decoder.end();
        r && r.length && (e.buffer.push(r), (e.length += e.objectMode ? 1 : r.length));
      }
      ((e.ended = !0),
        e.sync ? zZe(t) : ((e.needReadable = !1), e.emittedReadable || ((e.emittedReadable = !0), fIn(t))));
    }
  }
  function zZe(t) {
    var e = t._readableState;
    (Ka("emitReadable", e.needReadable, e.emittedReadable),
      (e.needReadable = !1),
      e.emittedReadable || (Ka("emitReadable", e.flowing), (e.emittedReadable = !0), process.nextTick(fIn, t)));
  }
  function fIn(t) {
    var e = t._readableState;
    (Ka("emitReadable_", e.destroyed, e.length, e.ended),
      !e.destroyed && (e.length || e.ended) && (t.emit("readable"), (e.emittedReadable = !1)),
      (e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark),
      sYt(t));
  }
  function iYt(t, e) {
    e.readingMore || ((e.readingMore = !0), process.nextTick(dIs, t, e));
  }
  function dIs(t, e) {
    for (; !e.reading && !e.ended && (e.length < e.highWaterMark || (e.flowing && e.length === 0)); ) {
      var r = e.length;
      if ((Ka("maybeReadMore read 0"), t.read(0), r === e.length)) break;
    }
    e.readingMore = !1;
  }
  uc.prototype._read = function (t) {
    n_e(this, new sIs("_read()"));
  };
  uc.prototype.pipe = function (t, e) {
    var r = this,
      n = this._readableState;
    switch (n.pipesCount) {
      case 0:
        n.pipes = t;
        break;
      case 1:
        n.pipes = [n.pipes, t];
        break;
      default:
        n.pipes.push(t);
        break;
    }
    ((n.pipesCount += 1), Ka("pipe count=%d opts=%j", n.pipesCount, e));
    var o = (!e || e.end !== !1) && t !== process.stdout && t !== process.stderr,
      s = o ? u : b;
    (n.endEmitted ? process.nextTick(s) : r.once("end", s), t.on("unpipe", a));
    function a(A, y) {
      (Ka("onunpipe"), A === r && y && y.hasUnpiped === !1 && ((y.hasUnpiped = !0), d()));
    }
    function u() {
      (Ka("onend"), t.end());
    }
    var c = fIs(r);
    t.on("drain", c);
    var m = !1;
    function d() {
      (Ka("cleanup"),
        t.removeListener("close", h),
        t.removeListener("finish", g),
        t.removeListener("drain", c),
        t.removeListener("error", p),
        t.removeListener("unpipe", a),
        r.removeListener("end", u),
        r.removeListener("end", b),
        r.removeListener("data", f),
        (m = !0),
        n.awaitDrain && (!t._writableState || t._writableState.needDrain) && c());
    }
    r.on("data", f);
    function f(A) {
      Ka("ondata");
      var y = t.write(A);
      (Ka("dest.write", y),
        y === !1 &&
          (((n.pipesCount === 1 && n.pipes === t) || (n.pipesCount > 1 && gIn(n.pipes, t) !== -1)) &&
            !m &&
            (Ka("false write response, pause", n.awaitDrain), n.awaitDrain++),
          r.pause()));
    }
    function p(A) {
      (Ka("onerror", A), b(), t.removeListener("error", p), lIn(t, "error") === 0 && n_e(t, A));
    }
    uIs(t, "error", p);
    function h() {
      (t.removeListener("finish", g), b());
    }
    t.once("close", h);
    function g() {
      (Ka("onfinish"), t.removeListener("close", h), b());
    }
    t.once("finish", g);
    function b() {
      (Ka("unpipe"), r.unpipe(t));
    }
    return (t.emit("pipe", r), n.flowing || (Ka("pipe resume"), r.resume()), t);
  };
  function fIs(t) {
    return function () {
      var r = t._readableState;
      (Ka("pipeOnDrain", r.awaitDrain),
        r.awaitDrain && r.awaitDrain--,
        r.awaitDrain === 0 && lIn(t, "data") && ((r.flowing = !0), sYt(t)));
    };
  }
  uc.prototype.unpipe = function (t) {
    var e = this._readableState,
      r = { hasUnpiped: !1 };
    if (e.pipesCount === 0) return this;
    if (e.pipesCount === 1)
      return t && t !== e.pipes
        ? this
        : (t || (t = e.pipes),
          (e.pipes = null),
          (e.pipesCount = 0),
          (e.flowing = !1),
          t && t.emit("unpipe", this, r),
          this);
    if (!t) {
      var n = e.pipes,
        o = e.pipesCount;
      ((e.pipes = null), (e.pipesCount = 0), (e.flowing = !1));
      for (var s = 0; s < o; s++) n[s].emit("unpipe", this, { hasUnpiped: !1 });
      return this;
    }
    var a = gIn(e.pipes, t);
    return a === -1
      ? this
      : (e.pipes.splice(a, 1),
        (e.pipesCount -= 1),
        e.pipesCount === 1 && (e.pipes = e.pipes[0]),
        t.emit("unpipe", this, r),
        this);
  };
  uc.prototype.on = function (t, e) {
    var r = i_e.prototype.on.call(this, t, e),
      n = this._readableState;
    return (
      t === "data"
        ? ((n.readableListening = this.listenerCount("readable") > 0), n.flowing !== !1 && this.resume())
        : t === "readable" &&
          !n.endEmitted &&
          !n.readableListening &&
          ((n.readableListening = n.needReadable = !0),
          (n.flowing = !1),
          (n.emittedReadable = !1),
          Ka("on readable", n.length, n.reading),
          n.length ? zZe(this) : n.reading || process.nextTick(pIs, this)),
      r
    );
  };
  uc.prototype.addListener = uc.prototype.on;
  uc.prototype.removeListener = function (t, e) {
    var r = i_e.prototype.removeListener.call(this, t, e);
    return (t === "readable" && process.nextTick(pIn, this), r);
  };
  uc.prototype.removeAllListeners = function (t) {
    var e = i_e.prototype.removeAllListeners.apply(this, arguments);
    return ((t === "readable" || t === void 0) && process.nextTick(pIn, this), e);
  };
  function pIn(t) {
    var e = t._readableState;
    ((e.readableListening = t.listenerCount("readable") > 0),
      e.resumeScheduled && !e.paused ? (e.flowing = !0) : t.listenerCount("data") > 0 && t.resume());
  }
  function pIs(t) {
    (Ka("readable nexttick read 0"), t.read(0));
  }
  uc.prototype.resume = function () {
    var t = this._readableState;
    return (t.flowing || (Ka("resume"), (t.flowing = !t.readableListening), hIs(this, t)), (t.paused = !1), this);
  };
  function hIs(t, e) {
    e.resumeScheduled || ((e.resumeScheduled = !0), process.nextTick(gIs, t, e));
  }
  function gIs(t, e) {
    (Ka("resume", e.reading),
      e.reading || t.read(0),
      (e.resumeScheduled = !1),
      t.emit("resume"),
      sYt(t),
      e.flowing && !e.reading && t.read(0));
  }
  uc.prototype.pause = function () {
    return (
      Ka("call pause flowing=%j", this._readableState.flowing),
      this._readableState.flowing !== !1 && (Ka("pause"), (this._readableState.flowing = !1), this.emit("pause")),
      (this._readableState.paused = !0),
      this
    );
  };
  function sYt(t) {
    var e = t._readableState;
    for (Ka("flow", e.flowing); e.flowing && t.read() !== null; );
  }
  uc.prototype.wrap = function (t) {
    var e = this,
      r = this._readableState,
      n = !1;
    (t.on("end", function () {
      if ((Ka("wrapped end"), r.decoder && !r.ended)) {
        var a = r.decoder.end();
        a && a.length && e.push(a);
      }
      e.push(null);
    }),
      t.on("data", function (a) {
        if (
          (Ka("wrapped data"),
          r.decoder && (a = r.decoder.write(a)),
          !(r.objectMode && a == null) && !(!r.objectMode && (!a || !a.length)))
        ) {
          var u = e.push(a);
          u || ((n = !0), t.pause());
        }
      }));
    for (var o in t)
      this[o] === void 0 &&
        typeof t[o] == "function" &&
        (this[o] = (function (u) {
          return function () {
            return t[u].apply(t, arguments);
          };
        })(o));
    for (var s = 0; s < tYt.length; s++) t.on(tYt[s], this.emit.bind(this, tYt[s]));
    return (
      (this._read = function (a) {
        (Ka("wrapped _read", a), n && ((n = !1), t.resume()));
      }),
      this
    );
  };
  typeof Symbol == "function" &&
    (uc.prototype[Symbol.asyncIterator] = function () {
      return (Zzt === void 0 && (Zzt = nIn()), Zzt(this));
    });
  Object.defineProperty(uc.prototype, "readableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._readableState.highWaterMark;
    },
  });
  Object.defineProperty(uc.prototype, "readableBuffer", {
    enumerable: !1,
    get: function () {
      return this._readableState && this._readableState.buffer;
    },
  });
  Object.defineProperty(uc.prototype, "readableFlowing", {
    enumerable: !1,
    get: function () {
      return this._readableState.flowing;
    },
    set: function (e) {
      this._readableState && (this._readableState.flowing = e);
    },
  });
  uc._fromList = hIn;
  Object.defineProperty(uc.prototype, "readableLength", {
    enumerable: !1,
    get: function () {
      return this._readableState.length;
    },
  });
  function hIn(t, e) {
    if (e.length === 0) return null;
    var r;
    return (
      e.objectMode
        ? (r = e.buffer.shift())
        : !t || t >= e.length
          ? (e.decoder
              ? (r = e.buffer.join(""))
              : e.buffer.length === 1
                ? (r = e.buffer.first())
                : (r = e.buffer.concat(e.length)),
            e.buffer.clear())
          : (r = e.buffer.consume(t, e.decoder)),
      r
    );
  }
  function nYt(t) {
    var e = t._readableState;
    (Ka("endReadable", e.endEmitted), e.endEmitted || ((e.ended = !0), process.nextTick(bIs, e, t)));
  }
  function bIs(t, e) {
    if (
      (Ka("endReadableNT", t.endEmitted, t.length),
      !t.endEmitted && t.length === 0 && ((t.endEmitted = !0), (e.readable = !1), e.emit("end"), t.autoDestroy))
    ) {
      var r = e._writableState;
      (!r || (r.autoDestroy && r.finished)) && e.destroy();
    }
  }
  typeof Symbol == "function" &&
    (uc.from = function (t, e) {
      return (eYt === void 0 && (eYt = aIn()), eYt(uc, t, e));
    });
  function gIn(t, e) {
    for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
    return -1;
  }
});