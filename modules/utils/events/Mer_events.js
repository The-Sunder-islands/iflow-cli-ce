/**
 * @module Mer
 * @category utils/events
 * @label events
 * @position 1352 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Mer) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Mer = T((k8c, ZMn) => {
  "use strict";
  var zue = Z1();
  ZMn.exports = Rm;
  var ZGs = EMn(),
    H_e;
  Rm.ReadableState = zMn;
  var R8c = Ae("events").EventEmitter,
    HMn = function (t, e) {
      return t.listeners(e).length;
    },
    Her = Ier(),
    V_e = $_e().Buffer,
    eqs =
      (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array ||
      function () {};
  function tqs(t) {
    return V_e.from(t);
  }
  function rqs(t) {
    return V_e.isBuffer(t) || t instanceof eqs;
  }
  var VMn = Object.create(z0());
  VMn.inherits = qo();
  var jer = Ae("util"),
    Qc = void 0;
  jer && jer.debuglog ? (Qc = jer.debuglog("stream")) : (Qc = function () {});
  var nqs = xMn(),
    WMn = Oer(),
    Wue;
  VMn.inherits(Rm, Her);
  var Qer = ["error", "close", "destroy", "pause", "resume"];
  function iqs(t, e, r) {
    if (typeof t.prependListener == "function") return t.prependListener(e, r);
    !t._events || !t._events[e]
      ? t.on(e, r)
      : ZGs(t._events[e])
        ? t._events[e].unshift(r)
        : (t._events[e] = [r, t._events[e]]);
  }
  function zMn(t, e) {
    ((H_e = H_e || LW()), (t = t || {}));
    var r = e instanceof H_e;
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
      (this.buffer = new nqs()),
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
        (Wue || (Wue = $er().StringDecoder), (this.decoder = new Wue(t.encoding)), (this.encoding = t.encoding)));
  }
  function Rm(t) {
    if (((H_e = H_e || LW()), !(this instanceof Rm))) return new Rm(t);
    ((this._readableState = new zMn(t, this)),
      (this.readable = !0),
      t &&
        (typeof t.read == "function" && (this._read = t.read),
        typeof t.destroy == "function" && (this._destroy = t.destroy)),
      Her.call(this));
  }
  Object.defineProperty(Rm.prototype, "destroyed", {
    get: function () {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    },
    set: function (t) {
      this._readableState && (this._readableState.destroyed = t);
    },
  });
  Rm.prototype.destroy = WMn.destroy;
  Rm.prototype._undestroy = WMn.undestroy;
  Rm.prototype._destroy = function (t, e) {
    (this.push(null), e(t));
  };
  Rm.prototype.push = function (t, e) {
    var r = this._readableState,
      n;
    return (
      r.objectMode
        ? (n = !0)
        : typeof t == "string" &&
          ((e = e || r.defaultEncoding), e !== r.encoding && ((t = V_e.from(t, e)), (e = "")), (n = !0)),
      YMn(this, t, e, !1, n)
    );
  };
  Rm.prototype.unshift = function (t) {
    return YMn(this, t, null, !0, !1);
  };
  function YMn(t, e, r, n, o) {
    var s = t._readableState;
    if (e === null) ((s.reading = !1), uqs(t, s));
    else {
      var a;
      (o || (a = oqs(s, e)),
        a
          ? t.emit("error", a)
          : s.objectMode || (e && e.length > 0)
            ? (typeof e != "string" && !s.objectMode && Object.getPrototypeOf(e) !== V_e.prototype && (e = tqs(e)),
              n
                ? s.endEmitted
                  ? t.emit("error", new Error("stream.unshift() after end event"))
                  : Ger(t, s, e, !0)
                : s.ended
                  ? t.emit("error", new Error("stream.push() after EOF"))
                  : ((s.reading = !1),
                    s.decoder && !r
                      ? ((e = s.decoder.write(e)), s.objectMode || e.length !== 0 ? Ger(t, s, e, !1) : KMn(t, s))
                      : Ger(t, s, e, !1)))
            : n || (s.reading = !1));
    }
    return sqs(s);
  }
  function Ger(t, e, r, n) {
    (e.flowing && e.length === 0 && !e.sync
      ? (t.emit("data", r), t.read(0))
      : ((e.length += e.objectMode ? 1 : r.length),
        n ? e.buffer.unshift(r) : e.buffer.push(r),
        e.needReadable && crt(t)),
      KMn(t, e));
  }
  function oqs(t, e) {
    var r;
    return (
      !rqs(e) &&
        typeof e != "string" &&
        e !== void 0 &&
        !t.objectMode &&
        (r = new TypeError("Invalid non-string/buffer chunk")),
      r
    );
  }
  function sqs(t) {
    return !t.ended && (t.needReadable || t.length < t.highWaterMark || t.length === 0);
  }
  Rm.prototype.isPaused = function () {
    return this._readableState.flowing === !1;
  };
  Rm.prototype.setEncoding = function (t) {
    return (
      Wue || (Wue = $er().StringDecoder),
      (this._readableState.decoder = new Wue(t)),
      (this._readableState.encoding = t),
      this
    );
  };
  var QMn = 8388608;
  function aqs(t) {
    return (
      t >= QMn
        ? (t = QMn)
        : (t--, (t |= t >>> 1), (t |= t >>> 2), (t |= t >>> 4), (t |= t >>> 8), (t |= t >>> 16), t++),
      t
    );
  }
  function GMn(t, e) {
    return t <= 0 || (e.length === 0 && e.ended)
      ? 0
      : e.objectMode
        ? 1
        : t !== t
          ? e.flowing && e.length
            ? e.buffer.head.data.length
            : e.length
          : (t > e.highWaterMark && (e.highWaterMark = aqs(t)),
            t <= e.length ? t : e.ended ? e.length : ((e.needReadable = !0), 0));
  }
  Rm.prototype.read = function (t) {
    (Qc("read", t), (t = parseInt(t, 10)));
    var e = this._readableState,
      r = t;
    if ((t !== 0 && (e.emittedReadable = !1), t === 0 && e.needReadable && (e.length >= e.highWaterMark || e.ended)))
      return (Qc("read: emitReadable", e.length, e.ended), e.length === 0 && e.ended ? qer(this) : crt(this), null);
    if (((t = GMn(t, e)), t === 0 && e.ended)) return (e.length === 0 && qer(this), null);
    var n = e.needReadable;
    (Qc("need readable", n),
      (e.length === 0 || e.length - t < e.highWaterMark) && ((n = !0), Qc("length less than watermark", n)),
      e.ended || e.reading
        ? ((n = !1), Qc("reading or ended", n))
        : n &&
          (Qc("do read"),
          (e.reading = !0),
          (e.sync = !0),
          e.length === 0 && (e.needReadable = !0),
          this._read(e.highWaterMark),
          (e.sync = !1),
          e.reading || (t = GMn(r, e))));
    var o;
    return (
      t > 0 ? (o = JMn(t, e)) : (o = null),
      o === null ? ((e.needReadable = !0), (t = 0)) : (e.length -= t),
      e.length === 0 && (e.ended || (e.needReadable = !0), r !== t && e.ended && qer(this)),
      o !== null && this.emit("data", o),
      o
    );
  };
  function uqs(t, e) {
    if (!e.ended) {
      if (e.decoder) {
        var r = e.decoder.end();
        r && r.length && (e.buffer.push(r), (e.length += e.objectMode ? 1 : r.length));
      }
      ((e.ended = !0), crt(t));
    }
  }
  function crt(t) {
    var e = t._readableState;
    ((e.needReadable = !1),
      e.emittedReadable ||
        (Qc("emitReadable", e.flowing), (e.emittedReadable = !0), e.sync ? zue.nextTick(qMn, t) : qMn(t)));
  }
  function qMn(t) {
    (Qc("emit readable"), t.emit("readable"), Ver(t));
  }
  function KMn(t, e) {
    e.readingMore || ((e.readingMore = !0), zue.nextTick(cqs, t, e));
  }
  function cqs(t, e) {
    for (
      var r = e.length;
      !e.reading &&
      !e.flowing &&
      !e.ended &&
      e.length < e.highWaterMark &&
      (Qc("maybeReadMore read 0"), t.read(0), r !== e.length);
    )
      r = e.length;
    e.readingMore = !1;
  }
  Rm.prototype._read = function (t) {
    this.emit("error", new Error("_read() is not implemented"));
  };
  Rm.prototype.pipe = function (t, e) {
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
    ((n.pipesCount += 1), Qc("pipe count=%d opts=%j", n.pipesCount, e));
    var o = (!e || e.end !== !1) && t !== process.stdout && t !== process.stderr,
      s = o ? u : A;
    (n.endEmitted ? zue.nextTick(s) : r.once("end", s), t.on("unpipe", a));
    function a(y, E) {
      (Qc("onunpipe"), y === r && E && E.hasUnpiped === !1 && ((E.hasUnpiped = !0), d()));
    }
    function u() {
      (Qc("onend"), t.end());
    }
    var c = lqs(r);
    t.on("drain", c);
    var m = !1;
    function d() {
      (Qc("cleanup"),
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
      (Qc("ondata"), (f = !1));
      var E = t.write(y);
      E === !1 &&
        !f &&
        (((n.pipesCount === 1 && n.pipes === t) || (n.pipesCount > 1 && XMn(n.pipes, t) !== -1)) &&
          !m &&
          (Qc("false write response, pause", n.awaitDrain), n.awaitDrain++, (f = !0)),
        r.pause());
    }
    function h(y) {
      (Qc("onerror", y), A(), t.removeListener("error", h), HMn(t, "error") === 0 && t.emit("error", y));
    }
    iqs(t, "error", h);
    function g() {
      (t.removeListener("finish", b), A());
    }
    t.once("close", g);
    function b() {
      (Qc("onfinish"), t.removeListener("close", g), A());
    }
    t.once("finish", b);
    function A() {
      (Qc("unpipe"), r.unpipe(t));
    }
    return (t.emit("pipe", r), n.flowing || (Qc("pipe resume"), r.resume()), t);
  };
  function lqs(t) {
    return function () {
      var e = t._readableState;
      (Qc("pipeOnDrain", e.awaitDrain),
        e.awaitDrain && e.awaitDrain--,
        e.awaitDrain === 0 && HMn(t, "data") && ((e.flowing = !0), Ver(t)));
    };
  }
  Rm.prototype.unpipe = function (t) {
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
    var a = XMn(e.pipes, t);
    return a === -1
      ? this
      : (e.pipes.splice(a, 1),
        (e.pipesCount -= 1),
        e.pipesCount === 1 && (e.pipes = e.pipes[0]),
        t.emit("unpipe", this, r),
        this);
  };
  Rm.prototype.on = function (t, e) {
    var r = Her.prototype.on.call(this, t, e);
    if (t === "data") this._readableState.flowing !== !1 && this.resume();
    else if (t === "readable") {
      var n = this._readableState;
      !n.endEmitted &&
        !n.readableListening &&
        ((n.readableListening = n.needReadable = !0),
        (n.emittedReadable = !1),
        n.reading ? n.length && crt(this) : zue.nextTick(mqs, this));
    }
    return r;
  };
  Rm.prototype.addListener = Rm.prototype.on;
  function mqs(t) {
    (Qc("readable nexttick read 0"), t.read(0));
  }
  Rm.prototype.resume = function () {
    var t = this._readableState;
    return (t.flowing || (Qc("resume"), (t.flowing = !0), dqs(this, t)), this);
  };
  function dqs(t, e) {
    e.resumeScheduled || ((e.resumeScheduled = !0), zue.nextTick(fqs, t, e));
  }
  function fqs(t, e) {
    (e.reading || (Qc("resume read 0"), t.read(0)),
      (e.resumeScheduled = !1),
      (e.awaitDrain = 0),
      t.emit("resume"),
      Ver(t),
      e.flowing && !e.reading && t.read(0));
  }
  Rm.prototype.pause = function () {
    return (
      Qc("call pause flowing=%j", this._readableState.flowing),
      this._readableState.flowing !== !1 && (Qc("pause"), (this._readableState.flowing = !1), this.emit("pause")),
      this
    );
  };
  function Ver(t) {
    var e = t._readableState;
    for (Qc("flow", e.flowing); e.flowing && t.read() !== null; );
  }
  Rm.prototype.wrap = function (t) {
    var e = this,
      r = this._readableState,
      n = !1;
    (t.on("end", function () {
      if ((Qc("wrapped end"), r.decoder && !r.ended)) {
        var a = r.decoder.end();
        a && a.length && e.push(a);
      }
      e.push(null);
    }),
      t.on("data", function (a) {
        if (
          (Qc("wrapped data"),
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
    for (var s = 0; s < Qer.length; s++) t.on(Qer[s], this.emit.bind(this, Qer[s]));
    return (
      (this._read = function (a) {
        (Qc("wrapped _read", a), n && ((n = !1), t.resume()));
      }),
      this
    );
  };
  Object.defineProperty(Rm.prototype, "readableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._readableState.highWaterMark;
    },
  });
  Rm._fromList = JMn;
  function JMn(t, e) {
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
          : (r = pqs(t, e.buffer, e.decoder)),
      r
    );
  }
  function pqs(t, e, r) {
    var n;
    return (
      t < e.head.data.length
        ? ((n = e.head.data.slice(0, t)), (e.head.data = e.head.data.slice(t)))
        : t === e.head.data.length
          ? (n = e.shift())
          : (n = r ? hqs(t, e) : gqs(t, e)),
      n
    );
  }
  function hqs(t, e) {
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
  function gqs(t, e) {
    var r = V_e.allocUnsafe(t),
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
  function qer(t) {
    var e = t._readableState;
    if (e.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    e.endEmitted || ((e.ended = !0), zue.nextTick(bqs, e, t));
  }
  function bqs(t, e) {
    !t.endEmitted && t.length === 0 && ((t.endEmitted = !0), (e.readable = !1), e.emit("end"));
  }
  function XMn(t, e) {
    for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
    return -1;
  }
});