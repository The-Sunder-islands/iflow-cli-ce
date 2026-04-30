/**
 * @module fer
 * @category utils/events
 * @label events
 * @position 1338 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (fer) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var fer = T((g8c, XLn) => {
  "use strict";
  var que = Z1();
  XLn.exports = Im;
  var CQs = _Ln(),
    B_e;
  Im.ReadableState = WLn;
  var h8c = Ae("events").EventEmitter,
    qLn = function (t, e) {
      return t.listeners(e).length;
    },
    Eer = oer(),
    L_e = R_e().Buffer,
    SQs =
      (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array ||
      function () {};
  function wQs(t) {
    return L_e.from(t);
  }
  function xQs(t) {
    return L_e.isBuffer(t) || t instanceof SQs;
  }
  var HLn = Object.create(z0());
  HLn.inherits = qo();
  var ber = Ae("util"),
    jc = void 0;
  ber && ber.debuglog ? (jc = ber.debuglog("stream")) : (jc = function () {});
  var TQs = wLn(),
    VLn = uer(),
    Gue;
  HLn.inherits(Im, Eer);
  var Aer = ["error", "close", "destroy", "pause", "resume"];
  function DQs(t, e, r) {
    if (typeof t.prependListener == "function") return t.prependListener(e, r);
    !t._events || !t._events[e]
      ? t.on(e, r)
      : CQs(t._events[e])
        ? t._events[e].unshift(r)
        : (t._events[e] = [r, t._events[e]]);
  }
  function WLn(t, e) {
    ((B_e = B_e || PW()), (t = t || {}));
    var r = e instanceof B_e;
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
      (this.buffer = new TQs()),
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
        (Gue || (Gue = ger().StringDecoder), (this.decoder = new Gue(t.encoding)), (this.encoding = t.encoding)));
  }
  function Im(t) {
    if (((B_e = B_e || PW()), !(this instanceof Im))) return new Im(t);
    ((this._readableState = new WLn(t, this)),
      (this.readable = !0),
      t &&
        (typeof t.read == "function" && (this._read = t.read),
        typeof t.destroy == "function" && (this._destroy = t.destroy)),
      Eer.call(this));
  }
  Object.defineProperty(Im.prototype, "destroyed", {
    get: function () {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    },
    set: function (t) {
      this._readableState && (this._readableState.destroyed = t);
    },
  });
  Im.prototype.destroy = VLn.destroy;
  Im.prototype._undestroy = VLn.undestroy;
  Im.prototype._destroy = function (t, e) {
    (this.push(null), e(t));
  };
  Im.prototype.push = function (t, e) {
    var r = this._readableState,
      n;
    return (
      r.objectMode
        ? (n = !0)
        : typeof t == "string" &&
          ((e = e || r.defaultEncoding), e !== r.encoding && ((t = L_e.from(t, e)), (e = "")), (n = !0)),
      zLn(this, t, e, !1, n)
    );
  };
  Im.prototype.unshift = function (t) {
    return zLn(this, t, null, !0, !1);
  };
  function zLn(t, e, r, n, o) {
    var s = t._readableState;
    if (e === null) ((s.reading = !1), OQs(t, s));
    else {
      var a;
      (o || (a = IQs(s, e)),
        a
          ? t.emit("error", a)
          : s.objectMode || (e && e.length > 0)
            ? (typeof e != "string" && !s.objectMode && Object.getPrototypeOf(e) !== L_e.prototype && (e = wQs(e)),
              n
                ? s.endEmitted
                  ? t.emit("error", new Error("stream.unshift() after end event"))
                  : yer(t, s, e, !0)
                : s.ended
                  ? t.emit("error", new Error("stream.push() after EOF"))
                  : ((s.reading = !1),
                    s.decoder && !r
                      ? ((e = s.decoder.write(e)), s.objectMode || e.length !== 0 ? yer(t, s, e, !1) : YLn(t, s))
                      : yer(t, s, e, !1)))
            : n || (s.reading = !1));
    }
    return RQs(s);
  }
  function yer(t, e, r, n) {
    (e.flowing && e.length === 0 && !e.sync
      ? (t.emit("data", r), t.read(0))
      : ((e.length += e.objectMode ? 1 : r.length),
        n ? e.buffer.unshift(r) : e.buffer.push(r),
        e.needReadable && Ytt(t)),
      YLn(t, e));
  }
  function IQs(t, e) {
    var r;
    return (
      !xQs(e) &&
        typeof e != "string" &&
        e !== void 0 &&
        !t.objectMode &&
        (r = new TypeError("Invalid non-string/buffer chunk")),
      r
    );
  }
  function RQs(t) {
    return !t.ended && (t.needReadable || t.length < t.highWaterMark || t.length === 0);
  }
  Im.prototype.isPaused = function () {
    return this._readableState.flowing === !1;
  };
  Im.prototype.setEncoding = function (t) {
    return (
      Gue || (Gue = ger().StringDecoder),
      (this._readableState.decoder = new Gue(t)),
      (this._readableState.encoding = t),
      this
    );
  };
  var jLn = 8388608;
  function kQs(t) {
    return (
      t >= jLn
        ? (t = jLn)
        : (t--, (t |= t >>> 1), (t |= t >>> 2), (t |= t >>> 4), (t |= t >>> 8), (t |= t >>> 16), t++),
      t
    );
  }
  function QLn(t, e) {
    return t <= 0 || (e.length === 0 && e.ended)
      ? 0
      : e.objectMode
        ? 1
        : t !== t
          ? e.flowing && e.length
            ? e.buffer.head.data.length
            : e.length
          : (t > e.highWaterMark && (e.highWaterMark = kQs(t)),
            t <= e.length ? t : e.ended ? e.length : ((e.needReadable = !0), 0));
  }
  Im.prototype.read = function (t) {
    (jc("read", t), (t = parseInt(t, 10)));
    var e = this._readableState,
      r = t;
    if ((t !== 0 && (e.emittedReadable = !1), t === 0 && e.needReadable && (e.length >= e.highWaterMark || e.ended)))
      return (jc("read: emitReadable", e.length, e.ended), e.length === 0 && e.ended ? _er(this) : Ytt(this), null);
    if (((t = QLn(t, e)), t === 0 && e.ended)) return (e.length === 0 && _er(this), null);
    var n = e.needReadable;
    (jc("need readable", n),
      (e.length === 0 || e.length - t < e.highWaterMark) && ((n = !0), jc("length less than watermark", n)),
      e.ended || e.reading
        ? ((n = !1), jc("reading or ended", n))
        : n &&
          (jc("do read"),
          (e.reading = !0),
          (e.sync = !0),
          e.length === 0 && (e.needReadable = !0),
          this._read(e.highWaterMark),
          (e.sync = !1),
          e.reading || (t = QLn(r, e))));
    var o;
    return (
      t > 0 ? (o = KLn(t, e)) : (o = null),
      o === null ? ((e.needReadable = !0), (t = 0)) : (e.length -= t),
      e.length === 0 && (e.ended || (e.needReadable = !0), r !== t && e.ended && _er(this)),
      o !== null && this.emit("data", o),
      o
    );
  };
  function OQs(t, e) {
    if (!e.ended) {
      if (e.decoder) {
        var r = e.decoder.end();
        r && r.length && (e.buffer.push(r), (e.length += e.objectMode ? 1 : r.length));
      }
      ((e.ended = !0), Ytt(t));
    }
  }
  function Ytt(t) {
    var e = t._readableState;
    ((e.needReadable = !1),
      e.emittedReadable ||
        (jc("emitReadable", e.flowing), (e.emittedReadable = !0), e.sync ? que.nextTick(GLn, t) : GLn(t)));
  }
  function GLn(t) {
    (jc("emit readable"), t.emit("readable"), ver(t));
  }
  function YLn(t, e) {
    e.readingMore || ((e.readingMore = !0), que.nextTick(NQs, t, e));
  }
  function NQs(t, e) {
    for (
      var r = e.length;
      !e.reading &&
      !e.flowing &&
      !e.ended &&
      e.length < e.highWaterMark &&
      (jc("maybeReadMore read 0"), t.read(0), r !== e.length);
    )
      r = e.length;
    e.readingMore = !1;
  }
  Im.prototype._read = function (t) {
    this.emit("error", new Error("_read() is not implemented"));
  };
  Im.prototype.pipe = function (t, e) {
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
    ((n.pipesCount += 1), jc("pipe count=%d opts=%j", n.pipesCount, e));
    var o = (!e || e.end !== !1) && t !== process.stdout && t !== process.stderr,
      s = o ? u : A;
    (n.endEmitted ? que.nextTick(s) : r.once("end", s), t.on("unpipe", a));
    function a(y, E) {
      (jc("onunpipe"), y === r && E && E.hasUnpiped === !1 && ((E.hasUnpiped = !0), d()));
    }
    function u() {
      (jc("onend"), t.end());
    }
    var c = PQs(r);
    t.on("drain", c);
    var m = !1;
    function d() {
      (jc("cleanup"),
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
      (jc("ondata"), (f = !1));
      var E = t.write(y);
      E === !1 &&
        !f &&
        (((n.pipesCount === 1 && n.pipes === t) || (n.pipesCount > 1 && JLn(n.pipes, t) !== -1)) &&
          !m &&
          (jc("false write response, pause", n.awaitDrain), n.awaitDrain++, (f = !0)),
        r.pause());
    }
    function h(y) {
      (jc("onerror", y), A(), t.removeListener("error", h), qLn(t, "error") === 0 && t.emit("error", y));
    }
    DQs(t, "error", h);
    function g() {
      (t.removeListener("finish", b), A());
    }
    t.once("close", g);
    function b() {
      (jc("onfinish"), t.removeListener("close", g), A());
    }
    t.once("finish", b);
    function A() {
      (jc("unpipe"), r.unpipe(t));
    }
    return (t.emit("pipe", r), n.flowing || (jc("pipe resume"), r.resume()), t);
  };
  function PQs(t) {
    return function () {
      var e = t._readableState;
      (jc("pipeOnDrain", e.awaitDrain),
        e.awaitDrain && e.awaitDrain--,
        e.awaitDrain === 0 && qLn(t, "data") && ((e.flowing = !0), ver(t)));
    };
  }
  Im.prototype.unpipe = function (t) {
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
    var a = JLn(e.pipes, t);
    return a === -1
      ? this
      : (e.pipes.splice(a, 1),
        (e.pipesCount -= 1),
        e.pipesCount === 1 && (e.pipes = e.pipes[0]),
        t.emit("unpipe", this, r),
        this);
  };
  Im.prototype.on = function (t, e) {
    var r = Eer.prototype.on.call(this, t, e);
    if (t === "data") this._readableState.flowing !== !1 && this.resume();
    else if (t === "readable") {
      var n = this._readableState;
      !n.endEmitted &&
        !n.readableListening &&
        ((n.readableListening = n.needReadable = !0),
        (n.emittedReadable = !1),
        n.reading ? n.length && Ytt(this) : que.nextTick(BQs, this));
    }
    return r;
  };
  Im.prototype.addListener = Im.prototype.on;
  function BQs(t) {
    (jc("readable nexttick read 0"), t.read(0));
  }
  Im.prototype.resume = function () {
    var t = this._readableState;
    return (t.flowing || (jc("resume"), (t.flowing = !0), LQs(this, t)), this);
  };
  function LQs(t, e) {
    e.resumeScheduled || ((e.resumeScheduled = !0), que.nextTick(MQs, t, e));
  }
  function MQs(t, e) {
    (e.reading || (jc("resume read 0"), t.read(0)),
      (e.resumeScheduled = !1),
      (e.awaitDrain = 0),
      t.emit("resume"),
      ver(t),
      e.flowing && !e.reading && t.read(0));
  }
  Im.prototype.pause = function () {
    return (
      jc("call pause flowing=%j", this._readableState.flowing),
      this._readableState.flowing !== !1 && (jc("pause"), (this._readableState.flowing = !1), this.emit("pause")),
      this
    );
  };
  function ver(t) {
    var e = t._readableState;
    for (jc("flow", e.flowing); e.flowing && t.read() !== null; );
  }
  Im.prototype.wrap = function (t) {
    var e = this,
      r = this._readableState,
      n = !1;
    (t.on("end", function () {
      if ((jc("wrapped end"), r.decoder && !r.ended)) {
        var a = r.decoder.end();
        a && a.length && e.push(a);
      }
      e.push(null);
    }),
      t.on("data", function (a) {
        if (
          (jc("wrapped data"),
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
    for (var s = 0; s < Aer.length; s++) t.on(Aer[s], this.emit.bind(this, Aer[s]));
    return (
      (this._read = function (a) {
        (jc("wrapped _read", a), n && ((n = !1), t.resume()));
      }),
      this
    );
  };
  Object.defineProperty(Im.prototype, "readableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._readableState.highWaterMark;
    },
  });
  Im._fromList = KLn;
  function KLn(t, e) {
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
          : (r = FQs(t, e.buffer, e.decoder)),
      r
    );
  }
  function FQs(t, e, r) {
    var n;
    return (
      t < e.head.data.length
        ? ((n = e.head.data.slice(0, t)), (e.head.data = e.head.data.slice(t)))
        : t === e.head.data.length
          ? (n = e.shift())
          : (n = r ? UQs(t, e) : $Qs(t, e)),
      n
    );
  }
  function UQs(t, e) {
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
  function $Qs(t, e) {
    var r = L_e.allocUnsafe(t),
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
  function _er(t) {
    var e = t._readableState;
    if (e.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    e.endEmitted || ((e.ended = !0), que.nextTick(jQs, e, t));
  }
  function jQs(t, e) {
    !t.endEmitted && t.length === 0 && ((t.endEmitted = !0), (e.readable = !1), e.emit("end"));
  }
  function JLn(t, e) {
    for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
    return -1;
  }
});