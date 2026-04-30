/**
 * @module onr
 * @category utils/events
 * @label events
 * @position 1436 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (onr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var onr = T((O6c, PGn) => {
  "use strict";
  var Ece = Z1();
  PGn.exports = Om;
  var QXs = rGn(),
    DEe;
  Om.ReadableState = IGn;
  var k6c = Ae("events").EventEmitter,
    xGn = function (t, e) {
      return t.listeners(e).length;
    },
    fnr = Jrr(),
    IEe = CEe().Buffer,
    GXs =
      (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array ||
      function () {};
  function qXs(t) {
    return IEe.from(t);
  }
  function HXs(t) {
    return IEe.isBuffer(t) || t instanceof GXs;
  }
  var TGn = Object.create(z0());
  TGn.inherits = qo();
  var cnr = Ae("util"),
    qc = void 0;
  cnr && cnr.debuglog ? (qc = cnr.debuglog("stream")) : (qc = function () {});
  var VXs = aGn(),
    DGn = enr(),
    _ce;
  TGn.inherits(Om, fnr);
  var lnr = ["error", "close", "destroy", "pause", "resume"];
  function WXs(t, e, r) {
    if (typeof t.prependListener == "function") return t.prependListener(e, r);
    !t._events || !t._events[e]
      ? t.on(e, r)
      : QXs(t._events[e])
        ? t._events[e].unshift(r)
        : (t._events[e] = [r, t._events[e]]);
  }
  function IGn(t, e) {
    ((DEe = DEe || tz()), (t = t || {}));
    var r = e instanceof DEe;
    ((this.objectMode = !!t.objectMode), r && (this.objectMode = this.objectMode || !!t.readableObjectMode));
    var n = t.highWaterMark,
      o = t.readableHighWaterMark,
      s = this.objectMode ? 16 : 16 * 1024;
    (n || n === 0
      ? (this.highWaterMark = n)
      : r && (o || o === 0)
        ? (this.highWaterMark = o)
        : (this.highWaterMark = s),
      (this.highWaterMark = Math.floor(this.highWaterMark)),
      (this.buffer = new VXs()),
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
      (this.destroyed = !1),
      (this.defaultEncoding = t.defaultEncoding || "utf8"),
      (this.awaitDrain = 0),
      (this.readingMore = !1),
      (this.decoder = null),
      (this.encoding = null),
      t.encoding &&
        (_ce || (_ce = unr().StringDecoder), (this.decoder = new _ce(t.encoding)), (this.encoding = t.encoding)));
  }
  function Om(t) {
    if (((DEe = DEe || tz()), !(this instanceof Om))) return new Om(t);
    ((this._readableState = new IGn(t, this)),
      (this.readable = !0),
      t &&
        (typeof t.read == "function" && (this._read = t.read),
        typeof t.destroy == "function" && (this._destroy = t.destroy)),
      fnr.call(this));
  }
  Object.defineProperty(Om.prototype, "destroyed", {
    get: function () {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    },
    set: function (t) {
      this._readableState && (this._readableState.destroyed = t);
    },
  });
  Om.prototype.destroy = DGn.destroy;
  Om.prototype._undestroy = DGn.undestroy;
  Om.prototype._destroy = function (t, e) {
    (this.push(null), e(t));
  };
  Om.prototype.push = function (t, e) {
    var r = this._readableState,
      n;
    return (
      r.objectMode
        ? (n = !0)
        : typeof t == "string" &&
          ((e = e || r.defaultEncoding), e !== r.encoding && ((t = IEe.from(t, e)), (e = "")), (n = !0)),
      RGn(this, t, e, !1, n)
    );
  };
  Om.prototype.unshift = function (t) {
    return RGn(this, t, null, !0, !1);
  };
  function RGn(t, e, r, n, o) {
    var s = t._readableState;
    if (e === null) ((s.reading = !1), JXs(t, s));
    else {
      var a;
      (o || (a = zXs(s, e)),
        a
          ? t.emit("error", a)
          : s.objectMode || (e && e.length > 0)
            ? (typeof e != "string" && !s.objectMode && Object.getPrototypeOf(e) !== IEe.prototype && (e = qXs(e)),
              n
                ? s.endEmitted
                  ? t.emit("error", new Error("stream.unshift() after end event"))
                  : mnr(t, s, e, !0)
                : s.ended
                  ? t.emit("error", new Error("stream.push() after EOF"))
                  : ((s.reading = !1),
                    s.decoder && !r
                      ? ((e = s.decoder.write(e)), s.objectMode || e.length !== 0 ? mnr(t, s, e, !1) : kGn(t, s))
                      : mnr(t, s, e, !1)))
            : n || (s.reading = !1));
    }
    return YXs(s);
  }
  function mnr(t, e, r, n) {
    (e.flowing && e.length === 0 && !e.sync
      ? (t.emit("data", r), t.read(0))
      : ((e.length += e.objectMode ? 1 : r.length),
        n ? e.buffer.unshift(r) : e.buffer.push(r),
        e.needReadable && unt(t)),
      kGn(t, e));
  }
  function zXs(t, e) {
    var r;
    return (
      !HXs(e) &&
        typeof e != "string" &&
        e !== void 0 &&
        !t.objectMode &&
        (r = new TypeError("Invalid non-string/buffer chunk")),
      r
    );
  }
  function YXs(t) {
    return !t.ended && (t.needReadable || t.length < t.highWaterMark || t.length === 0);
  }
  Om.prototype.isPaused = function () {
    return this._readableState.flowing === !1;
  };
  Om.prototype.setEncoding = function (t) {
    return (
      _ce || (_ce = unr().StringDecoder),
      (this._readableState.decoder = new _ce(t)),
      (this._readableState.encoding = t),
      this
    );
  };
  var CGn = 8388608;
  function KXs(t) {
    return (
      t >= CGn
        ? (t = CGn)
        : (t--, (t |= t >>> 1), (t |= t >>> 2), (t |= t >>> 4), (t |= t >>> 8), (t |= t >>> 16), t++),
      t
    );
  }
  function SGn(t, e) {
    return t <= 0 || (e.length === 0 && e.ended)
      ? 0
      : e.objectMode
        ? 1
        : t !== t
          ? e.flowing && e.length
            ? e.buffer.head.data.length
            : e.length
          : (t > e.highWaterMark && (e.highWaterMark = KXs(t)),
            t <= e.length ? t : e.ended ? e.length : ((e.needReadable = !0), 0));
  }
  Om.prototype.read = function (t) {
    (qc("read", t), (t = parseInt(t, 10)));
    var e = this._readableState,
      r = t;
    if ((t !== 0 && (e.emittedReadable = !1), t === 0 && e.needReadable && (e.length >= e.highWaterMark || e.ended)))
      return (qc("read: emitReadable", e.length, e.ended), e.length === 0 && e.ended ? dnr(this) : unt(this), null);
    if (((t = SGn(t, e)), t === 0 && e.ended)) return (e.length === 0 && dnr(this), null);
    var n = e.needReadable;
    (qc("need readable", n),
      (e.length === 0 || e.length - t < e.highWaterMark) && ((n = !0), qc("length less than watermark", n)),
      e.ended || e.reading
        ? ((n = !1), qc("reading or ended", n))
        : n &&
          (qc("do read"),
          (e.reading = !0),
          (e.sync = !0),
          e.length === 0 && (e.needReadable = !0),
          this._read(e.highWaterMark),
          (e.sync = !1),
          e.reading || (t = SGn(r, e))));
    var o;
    return (
      t > 0 ? (o = OGn(t, e)) : (o = null),
      o === null ? ((e.needReadable = !0), (t = 0)) : (e.length -= t),
      e.length === 0 && (e.ended || (e.needReadable = !0), r !== t && e.ended && dnr(this)),
      o !== null && this.emit("data", o),
      o
    );
  };
  function JXs(t, e) {
    if (!e.ended) {
      if (e.decoder) {
        var r = e.decoder.end();
        r && r.length && (e.buffer.push(r), (e.length += e.objectMode ? 1 : r.length));
      }
      ((e.ended = !0), unt(t));
    }
  }
  function unt(t) {
    var e = t._readableState;
    ((e.needReadable = !1),
      e.emittedReadable ||
        (qc("emitReadable", e.flowing), (e.emittedReadable = !0), e.sync ? Ece.nextTick(wGn, t) : wGn(t)));
  }
  function wGn(t) {
    (qc("emit readable"), t.emit("readable"), pnr(t));
  }
  function kGn(t, e) {
    e.readingMore || ((e.readingMore = !0), Ece.nextTick(XXs, t, e));
  }
  function XXs(t, e) {
    for (
      var r = e.length;
      !e.reading &&
      !e.flowing &&
      !e.ended &&
      e.length < e.highWaterMark &&
      (qc("maybeReadMore read 0"), t.read(0), r !== e.length);
    )
      r = e.length;
    e.readingMore = !1;
  }
  Om.prototype._read = function (t) {
    this.emit("error", new Error("_read() is not implemented"));
  };
  Om.prototype.pipe = function (t, e) {
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
    ((n.pipesCount += 1), qc("pipe count=%d opts=%j", n.pipesCount, e));
    var o = (!e || e.end !== !1) && t !== process.stdout && t !== process.stderr,
      s = o ? u : A;
    (n.endEmitted ? Ece.nextTick(s) : r.once("end", s), t.on("unpipe", a));
    function a(y, E) {
      (qc("onunpipe"), y === r && E && E.hasUnpiped === !1 && ((E.hasUnpiped = !0), d()));
    }
    function u() {
      (qc("onend"), t.end());
    }
    var c = ZXs(r);
    t.on("drain", c);
    var m = !1;
    function d() {
      (qc("cleanup"),
        t.removeListener("close", g),
        t.removeListener("finish", b),
        t.removeListener("drain", c),
        t.removeListener("error", h),
        t.removeListener("unpipe", a),
        r.removeListener("end", u),
        r.removeListener("end", A),
        r.removeListener("data", p),
        (m = !0),
        n.awaitDrain && (!t._writableState || t._writableState.needDrain) && c());
    }
    var f = !1;
    r.on("data", p);
    function p(y) {
      (qc("ondata"), (f = !1));
      var E = t.write(y);
      E === !1 &&
        !f &&
        (((n.pipesCount === 1 && n.pipes === t) || (n.pipesCount > 1 && NGn(n.pipes, t) !== -1)) &&
          !m &&
          (qc("false write response, pause", n.awaitDrain), n.awaitDrain++, (f = !0)),
        r.pause());
    }
    function h(y) {
      (qc("onerror", y), A(), t.removeListener("error", h), xGn(t, "error") === 0 && t.emit("error", y));
    }
    WXs(t, "error", h);
    function g() {
      (t.removeListener("finish", b), A());
    }
    t.once("close", g);
    function b() {
      (qc("onfinish"), t.removeListener("close", g), A());
    }
    t.once("finish", b);
    function A() {
      (qc("unpipe"), r.unpipe(t));
    }
    return (t.emit("pipe", r), n.flowing || (qc("pipe resume"), r.resume()), t);
  };
  function ZXs(t) {
    return function () {
      var e = t._readableState;
      (qc("pipeOnDrain", e.awaitDrain),
        e.awaitDrain && e.awaitDrain--,
        e.awaitDrain === 0 && xGn(t, "data") && ((e.flowing = !0), pnr(t)));
    };
  }
  Om.prototype.unpipe = function (t) {
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
    var a = NGn(e.pipes, t);
    return a === -1
      ? this
      : (e.pipes.splice(a, 1),
        (e.pipesCount -= 1),
        e.pipesCount === 1 && (e.pipes = e.pipes[0]),
        t.emit("unpipe", this, r),
        this);
  };
  Om.prototype.on = function (t, e) {
    var r = fnr.prototype.on.call(this, t, e);
    if (t === "data") this._readableState.flowing !== !1 && this.resume();
    else if (t === "readable") {
      var n = this._readableState;
      !n.endEmitted &&
        !n.readableListening &&
        ((n.readableListening = n.needReadable = !0),
        (n.emittedReadable = !1),
        n.reading ? n.length && unt(this) : Ece.nextTick(eZs, this));
    }
    return r;
  };
  Om.prototype.addListener = Om.prototype.on;
  function eZs(t) {
    (qc("readable nexttick read 0"), t.read(0));
  }
  Om.prototype.resume = function () {
    var t = this._readableState;
    return (t.flowing || (qc("resume"), (t.flowing = !0), tZs(this, t)), this);
  };
  function tZs(t, e) {
    e.resumeScheduled || ((e.resumeScheduled = !0), Ece.nextTick(rZs, t, e));
  }
  function rZs(t, e) {
    (e.reading || (qc("resume read 0"), t.read(0)),
      (e.resumeScheduled = !1),
      (e.awaitDrain = 0),
      t.emit("resume"),
      pnr(t),
      e.flowing && !e.reading && t.read(0));
  }
  Om.prototype.pause = function () {
    return (
      qc("call pause flowing=%j", this._readableState.flowing),
      this._readableState.flowing !== !1 && (qc("pause"), (this._readableState.flowing = !1), this.emit("pause")),
      this
    );
  };
  function pnr(t) {
    var e = t._readableState;
    for (qc("flow", e.flowing); e.flowing && t.read() !== null; );
  }
  Om.prototype.wrap = function (t) {
    var e = this,
      r = this._readableState,
      n = !1;
    (t.on("end", function () {
      if ((qc("wrapped end"), r.decoder && !r.ended)) {
        var a = r.decoder.end();
        a && a.length && e.push(a);
      }
      e.push(null);
    }),
      t.on("data", function (a) {
        if (
          (qc("wrapped data"),
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
        (this[o] = (function (a) {
          return function () {
            return t[a].apply(t, arguments);
          };
        })(o));
    for (var s = 0; s < lnr.length; s++) t.on(lnr[s], this.emit.bind(this, lnr[s]));
    return (
      (this._read = function (a) {
        (qc("wrapped _read", a), n && ((n = !1), t.resume()));
      }),
      this
    );
  };
  Object.defineProperty(Om.prototype, "readableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._readableState.highWaterMark;
    },
  });
  Om._fromList = OGn;
  function OGn(t, e) {
    if (e.length === 0) return null;
    var r;
    return (
      e.objectMode
        ? (r = e.buffer.shift())
        : !t || t >= e.length
          ? (e.decoder
              ? (r = e.buffer.join(""))
              : e.buffer.length === 1
                ? (r = e.buffer.head.data)
                : (r = e.buffer.concat(e.length)),
            e.buffer.clear())
          : (r = nZs(t, e.buffer, e.decoder)),
      r
    );
  }
  function nZs(t, e, r) {
    var n;
    return (
      t < e.head.data.length
        ? ((n = e.head.data.slice(0, t)), (e.head.data = e.head.data.slice(t)))
        : t === e.head.data.length
          ? (n = e.shift())
          : (n = r ? iZs(t, e) : oZs(t, e)),
      n
    );
  }
  function iZs(t, e) {
    var r = e.head,
      n = 1,
      o = r.data;
    for (t -= o.length; (r = r.next); ) {
      var s = r.data,
        a = t > s.length ? s.length : t;
      if ((a === s.length ? (o += s) : (o += s.slice(0, t)), (t -= a), t === 0)) {
        a === s.length
          ? (++n, r.next ? (e.head = r.next) : (e.head = e.tail = null))
          : ((e.head = r), (r.data = s.slice(a)));
        break;
      }
      ++n;
    }
    return ((e.length -= n), o);
  }
  function oZs(t, e) {
    var r = IEe.allocUnsafe(t),
      n = e.head,
      o = 1;
    for (n.data.copy(r), t -= n.data.length; (n = n.next); ) {
      var s = n.data,
        a = t > s.length ? s.length : t;
      if ((s.copy(r, r.length - t, 0, a), (t -= a), t === 0)) {
        a === s.length
          ? (++o, n.next ? (e.head = n.next) : (e.head = e.tail = null))
          : ((e.head = n), (n.data = s.slice(a)));
        break;
      }
      ++o;
    }
    return ((e.length -= o), r);
  }
  function dnr(t) {
    var e = t._readableState;
    if (e.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    e.endEmitted || ((e.ended = !0), Ece.nextTick(sZs, e, t));
  }
  function sZs(t, e) {
    !t.endEmitted && t.length === 0 && ((t.endEmitted = !0), (e.readable = !1), e.emit("end"));
  }
  function NGn(t, e) {
    for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
    return -1;
  }
});