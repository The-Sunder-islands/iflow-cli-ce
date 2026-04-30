/**
 * @module Frr
 * @category utils/events
 * @label events
 * @position 1418 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Frr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Frr = T((h6c, MQn) => {
  "use strict";
  var bce = Z1();
  MQn.exports = km;
  var SJs = oQn(),
    gEe;
  km.ReadableState = OQn;
  var p6c = Ae("events").EventEmitter,
    IQn = function (t, e) {
      return t.listeners(e).length;
    },
    Vrr = Rrr(),
    bEe = mEe().Buffer,
    wJs =
      (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array ||
      function () {};
  function xJs(t) {
    return bEe.from(t);
  }
  function TJs(t) {
    return bEe.isBuffer(t) || t instanceof wJs;
  }
  var RQn = Object.create(z0());
  RQn.inherits = qo();
  var Qrr = Ae("util"),
    Gc = void 0;
  Qrr && Qrr.debuglog ? (Gc = Qrr.debuglog("stream")) : (Gc = function () {});
  var DJs = lQn(),
    kQn = Nrr(),
    gce;
  RQn.inherits(km, Vrr);
  var Grr = ["error", "close", "destroy", "pause", "resume"];
  function IJs(t, e, r) {
    if (typeof t.prependListener == "function") return t.prependListener(e, r);
    !t._events || !t._events[e]
      ? t.on(e, r)
      : SJs(t._events[e])
        ? t._events[e].unshift(r)
        : (t._events[e] = [r, t._events[e]]);
  }
  function OQn(t, e) {
    ((gEe = gEe || XW()), (t = t || {}));
    var r = e instanceof gEe;
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
      (this.buffer = new DJs()),
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
        (gce || (gce = jrr().StringDecoder), (this.decoder = new gce(t.encoding)), (this.encoding = t.encoding)));
  }
  function km(t) {
    if (((gEe = gEe || XW()), !(this instanceof km))) return new km(t);
    ((this._readableState = new OQn(t, this)),
      (this.readable = !0),
      t &&
        (typeof t.read == "function" && (this._read = t.read),
        typeof t.destroy == "function" && (this._destroy = t.destroy)),
      Vrr.call(this));
  }
  Object.defineProperty(km.prototype, "destroyed", {
    get: function () {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    },
    set: function (t) {
      this._readableState && (this._readableState.destroyed = t);
    },
  });
  km.prototype.destroy = kQn.destroy;
  km.prototype._undestroy = kQn.undestroy;
  km.prototype._destroy = function (t, e) {
    (this.push(null), e(t));
  };
  km.prototype.push = function (t, e) {
    var r = this._readableState,
      n;
    return (
      r.objectMode
        ? (n = !0)
        : typeof t == "string" &&
          ((e = e || r.defaultEncoding), e !== r.encoding && ((t = bEe.from(t, e)), (e = "")), (n = !0)),
      NQn(this, t, e, !1, n)
    );
  };
  km.prototype.unshift = function (t) {
    return NQn(this, t, null, !0, !1);
  };
  function NQn(t, e, r, n, o) {
    var s = t._readableState;
    if (e === null) ((s.reading = !1), NJs(t, s));
    else {
      var a;
      (o || (a = RJs(s, e)),
        a
          ? t.emit("error", a)
          : s.objectMode || (e && e.length > 0)
            ? (typeof e != "string" && !s.objectMode && Object.getPrototypeOf(e) !== bEe.prototype && (e = xJs(e)),
              n
                ? s.endEmitted
                  ? t.emit("error", new Error("stream.unshift() after end event"))
                  : qrr(t, s, e, !0)
                : s.ended
                  ? t.emit("error", new Error("stream.push() after EOF"))
                  : ((s.reading = !1),
                    s.decoder && !r
                      ? ((e = s.decoder.write(e)), s.objectMode || e.length !== 0 ? qrr(t, s, e, !1) : PQn(t, s))
                      : qrr(t, s, e, !1)))
            : n || (s.reading = !1));
    }
    return kJs(s);
  }
  function qrr(t, e, r, n) {
    (e.flowing && e.length === 0 && !e.sync
      ? (t.emit("data", r), t.read(0))
      : ((e.length += e.objectMode ? 1 : r.length),
        n ? e.buffer.unshift(r) : e.buffer.push(r),
        e.needReadable && Hrt(t)),
      PQn(t, e));
  }
  function RJs(t, e) {
    var r;
    return (
      !TJs(e) &&
        typeof e != "string" &&
        e !== void 0 &&
        !t.objectMode &&
        (r = new TypeError("Invalid non-string/buffer chunk")),
      r
    );
  }
  function kJs(t) {
    return !t.ended && (t.needReadable || t.length < t.highWaterMark || t.length === 0);
  }
  km.prototype.isPaused = function () {
    return this._readableState.flowing === !1;
  };
  km.prototype.setEncoding = function (t) {
    return (
      gce || (gce = jrr().StringDecoder),
      (this._readableState.decoder = new gce(t)),
      (this._readableState.encoding = t),
      this
    );
  };
  var xQn = 8388608;
  function OJs(t) {
    return (
      t >= xQn
        ? (t = xQn)
        : (t--, (t |= t >>> 1), (t |= t >>> 2), (t |= t >>> 4), (t |= t >>> 8), (t |= t >>> 16), t++),
      t
    );
  }
  function TQn(t, e) {
    return t <= 0 || (e.length === 0 && e.ended)
      ? 0
      : e.objectMode
        ? 1
        : t !== t
          ? e.flowing && e.length
            ? e.buffer.head.data.length
            : e.length
          : (t > e.highWaterMark && (e.highWaterMark = OJs(t)),
            t <= e.length ? t : e.ended ? e.length : ((e.needReadable = !0), 0));
  }
  km.prototype.read = function (t) {
    (Gc("read", t), (t = parseInt(t, 10)));
    var e = this._readableState,
      r = t;
    if ((t !== 0 && (e.emittedReadable = !1), t === 0 && e.needReadable && (e.length >= e.highWaterMark || e.ended)))
      return (Gc("read: emitReadable", e.length, e.ended), e.length === 0 && e.ended ? Hrr(this) : Hrt(this), null);
    if (((t = TQn(t, e)), t === 0 && e.ended)) return (e.length === 0 && Hrr(this), null);
    var n = e.needReadable;
    (Gc("need readable", n),
      (e.length === 0 || e.length - t < e.highWaterMark) && ((n = !0), Gc("length less than watermark", n)),
      e.ended || e.reading
        ? ((n = !1), Gc("reading or ended", n))
        : n &&
          (Gc("do read"),
          (e.reading = !0),
          (e.sync = !0),
          e.length === 0 && (e.needReadable = !0),
          this._read(e.highWaterMark),
          (e.sync = !1),
          e.reading || (t = TQn(r, e))));
    var o;
    return (
      t > 0 ? (o = BQn(t, e)) : (o = null),
      o === null ? ((e.needReadable = !0), (t = 0)) : (e.length -= t),
      e.length === 0 && (e.ended || (e.needReadable = !0), r !== t && e.ended && Hrr(this)),
      o !== null && this.emit("data", o),
      o
    );
  };
  function NJs(t, e) {
    if (!e.ended) {
      if (e.decoder) {
        var r = e.decoder.end();
        r && r.length && (e.buffer.push(r), (e.length += e.objectMode ? 1 : r.length));
      }
      ((e.ended = !0), Hrt(t));
    }
  }
  function Hrt(t) {
    var e = t._readableState;
    ((e.needReadable = !1),
      e.emittedReadable ||
        (Gc("emitReadable", e.flowing), (e.emittedReadable = !0), e.sync ? bce.nextTick(DQn, t) : DQn(t)));
  }
  function DQn(t) {
    (Gc("emit readable"), t.emit("readable"), Wrr(t));
  }
  function PQn(t, e) {
    e.readingMore || ((e.readingMore = !0), bce.nextTick(PJs, t, e));
  }
  function PJs(t, e) {
    for (
      var r = e.length;
      !e.reading &&
      !e.flowing &&
      !e.ended &&
      e.length < e.highWaterMark &&
      (Gc("maybeReadMore read 0"), t.read(0), r !== e.length);
    )
      r = e.length;
    e.readingMore = !1;
  }
  km.prototype._read = function (t) {
    this.emit("error", new Error("_read() is not implemented"));
  };
  km.prototype.pipe = function (t, e) {
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
    ((n.pipesCount += 1), Gc("pipe count=%d opts=%j", n.pipesCount, e));
    var o = (!e || e.end !== !1) && t !== process.stdout && t !== process.stderr,
      s = o ? u : A;
    (n.endEmitted ? bce.nextTick(s) : r.once("end", s), t.on("unpipe", a));
    function a(y, E) {
      (Gc("onunpipe"), y === r && E && E.hasUnpiped === !1 && ((E.hasUnpiped = !0), d()));
    }
    function u() {
      (Gc("onend"), t.end());
    }
    var c = BJs(r);
    t.on("drain", c);
    var m = !1;
    function d() {
      (Gc("cleanup"),
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
      (Gc("ondata"), (f = !1));
      var E = t.write(y);
      E === !1 &&
        !f &&
        (((n.pipesCount === 1 && n.pipes === t) || (n.pipesCount > 1 && LQn(n.pipes, t) !== -1)) &&
          !m &&
          (Gc("false write response, pause", n.awaitDrain), n.awaitDrain++, (f = !0)),
        r.pause());
    }
    function h(y) {
      (Gc("onerror", y), A(), t.removeListener("error", h), IQn(t, "error") === 0 && t.emit("error", y));
    }
    IJs(t, "error", h);
    function g() {
      (t.removeListener("finish", b), A());
    }
    t.once("close", g);
    function b() {
      (Gc("onfinish"), t.removeListener("close", g), A());
    }
    t.once("finish", b);
    function A() {
      (Gc("unpipe"), r.unpipe(t));
    }
    return (t.emit("pipe", r), n.flowing || (Gc("pipe resume"), r.resume()), t);
  };
  function BJs(t) {
    return function () {
      var e = t._readableState;
      (Gc("pipeOnDrain", e.awaitDrain),
        e.awaitDrain && e.awaitDrain--,
        e.awaitDrain === 0 && IQn(t, "data") && ((e.flowing = !0), Wrr(t)));
    };
  }
  km.prototype.unpipe = function (t) {
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
    var a = LQn(e.pipes, t);
    return a === -1
      ? this
      : (e.pipes.splice(a, 1),
        (e.pipesCount -= 1),
        e.pipesCount === 1 && (e.pipes = e.pipes[0]),
        t.emit("unpipe", this, r),
        this);
  };
  km.prototype.on = function (t, e) {
    var r = Vrr.prototype.on.call(this, t, e);
    if (t === "data") this._readableState.flowing !== !1 && this.resume();
    else if (t === "readable") {
      var n = this._readableState;
      !n.endEmitted &&
        !n.readableListening &&
        ((n.readableListening = n.needReadable = !0),
        (n.emittedReadable = !1),
        n.reading ? n.length && Hrt(this) : bce.nextTick(LJs, this));
    }
    return r;
  };
  km.prototype.addListener = km.prototype.on;
  function LJs(t) {
    (Gc("readable nexttick read 0"), t.read(0));
  }
  km.prototype.resume = function () {
    var t = this._readableState;
    return (t.flowing || (Gc("resume"), (t.flowing = !0), MJs(this, t)), this);
  };
  function MJs(t, e) {
    e.resumeScheduled || ((e.resumeScheduled = !0), bce.nextTick(FJs, t, e));
  }
  function FJs(t, e) {
    (e.reading || (Gc("resume read 0"), t.read(0)),
      (e.resumeScheduled = !1),
      (e.awaitDrain = 0),
      t.emit("resume"),
      Wrr(t),
      e.flowing && !e.reading && t.read(0));
  }
  km.prototype.pause = function () {
    return (
      Gc("call pause flowing=%j", this._readableState.flowing),
      this._readableState.flowing !== !1 && (Gc("pause"), (this._readableState.flowing = !1), this.emit("pause")),
      this
    );
  };
  function Wrr(t) {
    var e = t._readableState;
    for (Gc("flow", e.flowing); e.flowing && t.read() !== null; );
  }
  km.prototype.wrap = function (t) {
    var e = this,
      r = this._readableState,
      n = !1;
    (t.on("end", function () {
      if ((Gc("wrapped end"), r.decoder && !r.ended)) {
        var a = r.decoder.end();
        a && a.length && e.push(a);
      }
      e.push(null);
    }),
      t.on("data", function (a) {
        if (
          (Gc("wrapped data"),
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
    for (var s = 0; s < Grr.length; s++) t.on(Grr[s], this.emit.bind(this, Grr[s]));
    return (
      (this._read = function (a) {
        (Gc("wrapped _read", a), n && ((n = !1), t.resume()));
      }),
      this
    );
  };
  Object.defineProperty(km.prototype, "readableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._readableState.highWaterMark;
    },
  });
  km._fromList = BQn;
  function BQn(t, e) {
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
          : (r = UJs(t, e.buffer, e.decoder)),
      r
    );
  }
  function UJs(t, e, r) {
    var n;
    return (
      t < e.head.data.length
        ? ((n = e.head.data.slice(0, t)), (e.head.data = e.head.data.slice(t)))
        : t === e.head.data.length
          ? (n = e.shift())
          : (n = r ? $Js(t, e) : jJs(t, e)),
      n
    );
  }
  function $Js(t, e) {
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
  function jJs(t, e) {
    var r = bEe.allocUnsafe(t),
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
  function Hrr(t) {
    var e = t._readableState;
    if (e.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    e.endEmitted || ((e.ended = !0), bce.nextTick(QJs, e, t));
  }
  function QJs(t, e) {
    !t.endEmitted && t.length === 0 && ((t.endEmitted = !0), (e.readable = !1), e.emit("end"));
  }
  function LQn(t, e) {
    for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
    return -1;
  }
});