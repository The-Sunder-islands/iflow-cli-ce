/**
 * @module xHt
 * @category utils/events
 * @label events
 * @position 989 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xHt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xHt = T((Xhc, uEn) => {
  "use strict";
  var pae = Z1();
  uEn.exports = Sm;
  var I_s = D_n(),
    F6e;
  Sm.ReadableState = nEn;
  var Jhc = Ae("events").EventEmitter,
    eEn = function (t, e) {
      return t.listeners(e).length;
    },
    PHt = hHt(),
    U6e = N6e().Buffer,
    R_s =
      (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array ||
      function () {};
  function k_s(t) {
    return U6e.from(t);
  }
  function O_s(t) {
    return U6e.isBuffer(t) || t instanceof R_s;
  }
  var tEn = Object.create(z0());
  tEn.inherits = qo();
  var RHt = Ae("util"),
    Uc = void 0;
  RHt && RHt.debuglog ? (Uc = RHt.debuglog("stream")) : (Uc = function () {});
  var N_s = P_n(),
    rEn = EHt(),
    fae;
  tEn.inherits(Sm, PHt);
  var kHt = ["error", "close", "destroy", "pause", "resume"];
  function P_s(t, e, r) {
    if (typeof t.prependListener == "function") return t.prependListener(e, r);
    !t._events || !t._events[e]
      ? t.on(e, r)
      : I_s(t._events[e])
        ? t._events[e].unshift(r)
        : (t._events[e] = [r, t._events[e]]);
  }
  function nEn(t, e) {
    ((F6e = F6e || HV()), (t = t || {}));
    var r = e instanceof F6e;
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
      (this.buffer = new N_s()),
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
        (fae || (fae = IHt().StringDecoder), (this.decoder = new fae(t.encoding)), (this.encoding = t.encoding)));
  }
  function Sm(t) {
    if (((F6e = F6e || HV()), !(this instanceof Sm))) return new Sm(t);
    ((this._readableState = new nEn(t, this)),
      (this.readable = !0),
      t &&
        (typeof t.read == "function" && (this._read = t.read),
        typeof t.destroy == "function" && (this._destroy = t.destroy)),
      PHt.call(this));
  }
  Object.defineProperty(Sm.prototype, "destroyed", {
    get: function () {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    },
    set: function (t) {
      this._readableState && (this._readableState.destroyed = t);
    },
  });
  Sm.prototype.destroy = rEn.destroy;
  Sm.prototype._undestroy = rEn.undestroy;
  Sm.prototype._destroy = function (t, e) {
    (this.push(null), e(t));
  };
  Sm.prototype.push = function (t, e) {
    var r = this._readableState,
      n;
    return (
      r.objectMode
        ? (n = !0)
        : typeof t == "string" &&
          ((e = e || r.defaultEncoding), e !== r.encoding && ((t = U6e.from(t, e)), (e = "")), (n = !0)),
      iEn(this, t, e, !1, n)
    );
  };
  Sm.prototype.unshift = function (t) {
    return iEn(this, t, null, !0, !1);
  };
  function iEn(t, e, r, n, o) {
    var s = t._readableState;
    if (e === null) ((s.reading = !1), F_s(t, s));
    else {
      var a;
      (o || (a = B_s(s, e)),
        a
          ? t.emit("error", a)
          : s.objectMode || (e && e.length > 0)
            ? (typeof e != "string" && !s.objectMode && Object.getPrototypeOf(e) !== U6e.prototype && (e = k_s(e)),
              n
                ? s.endEmitted
                  ? t.emit("error", new Error("stream.unshift() after end event"))
                  : OHt(t, s, e, !0)
                : s.ended
                  ? t.emit("error", new Error("stream.push() after EOF"))
                  : ((s.reading = !1),
                    s.decoder && !r
                      ? ((e = s.decoder.write(e)), s.objectMode || e.length !== 0 ? OHt(t, s, e, !1) : oEn(t, s))
                      : OHt(t, s, e, !1)))
            : n || (s.reading = !1));
    }
    return L_s(s);
  }
  function OHt(t, e, r, n) {
    (e.flowing && e.length === 0 && !e.sync
      ? (t.emit("data", r), t.read(0))
      : ((e.length += e.objectMode ? 1 : r.length),
        n ? e.buffer.unshift(r) : e.buffer.push(r),
        e.needReadable && ZJe(t)),
      oEn(t, e));
  }
  function B_s(t, e) {
    var r;
    return (
      !O_s(e) &&
        typeof e != "string" &&
        e !== void 0 &&
        !t.objectMode &&
        (r = new TypeError("Invalid non-string/buffer chunk")),
      r
    );
  }
  function L_s(t) {
    return !t.ended && (t.needReadable || t.length < t.highWaterMark || t.length === 0);
  }
  Sm.prototype.isPaused = function () {
    return this._readableState.flowing === !1;
  };
  Sm.prototype.setEncoding = function (t) {
    return (
      fae || (fae = IHt().StringDecoder),
      (this._readableState.decoder = new fae(t)),
      (this._readableState.encoding = t),
      this
    );
  };
  var J_n = 8388608;
  function M_s(t) {
    return (
      t >= J_n
        ? (t = J_n)
        : (t--, (t |= t >>> 1), (t |= t >>> 2), (t |= t >>> 4), (t |= t >>> 8), (t |= t >>> 16), t++),
      t
    );
  }
  function X_n(t, e) {
    return t <= 0 || (e.length === 0 && e.ended)
      ? 0
      : e.objectMode
        ? 1
        : t !== t
          ? e.flowing && e.length
            ? e.buffer.head.data.length
            : e.length
          : (t > e.highWaterMark && (e.highWaterMark = M_s(t)),
            t <= e.length ? t : e.ended ? e.length : ((e.needReadable = !0), 0));
  }
  Sm.prototype.read = function (t) {
    (Uc("read", t), (t = parseInt(t, 10)));
    var e = this._readableState,
      r = t;
    if ((t !== 0 && (e.emittedReadable = !1), t === 0 && e.needReadable && (e.length >= e.highWaterMark || e.ended)))
      return (Uc("read: emitReadable", e.length, e.ended), e.length === 0 && e.ended ? NHt(this) : ZJe(this), null);
    if (((t = X_n(t, e)), t === 0 && e.ended)) return (e.length === 0 && NHt(this), null);
    var n = e.needReadable;
    (Uc("need readable", n),
      (e.length === 0 || e.length - t < e.highWaterMark) && ((n = !0), Uc("length less than watermark", n)),
      e.ended || e.reading
        ? ((n = !1), Uc("reading or ended", n))
        : n &&
          (Uc("do read"),
          (e.reading = !0),
          (e.sync = !0),
          e.length === 0 && (e.needReadable = !0),
          this._read(e.highWaterMark),
          (e.sync = !1),
          e.reading || (t = X_n(r, e))));
    var o;
    return (
      t > 0 ? (o = sEn(t, e)) : (o = null),
      o === null ? ((e.needReadable = !0), (t = 0)) : (e.length -= t),
      e.length === 0 && (e.ended || (e.needReadable = !0), r !== t && e.ended && NHt(this)),
      o !== null && this.emit("data", o),
      o
    );
  };
  function F_s(t, e) {
    if (!e.ended) {
      if (e.decoder) {
        var r = e.decoder.end();
        r && r.length && (e.buffer.push(r), (e.length += e.objectMode ? 1 : r.length));
      }
      ((e.ended = !0), ZJe(t));
    }
  }
  function ZJe(t) {
    var e = t._readableState;
    ((e.needReadable = !1),
      e.emittedReadable ||
        (Uc("emitReadable", e.flowing), (e.emittedReadable = !0), e.sync ? pae.nextTick(Z_n, t) : Z_n(t)));
  }
  function Z_n(t) {
    (Uc("emit readable"), t.emit("readable"), BHt(t));
  }
  function oEn(t, e) {
    e.readingMore || ((e.readingMore = !0), pae.nextTick(U_s, t, e));
  }
  function U_s(t, e) {
    for (
      var r = e.length;
      !e.reading &&
      !e.flowing &&
      !e.ended &&
      e.length < e.highWaterMark &&
      (Uc("maybeReadMore read 0"), t.read(0), r !== e.length);
    )
      r = e.length;
    e.readingMore = !1;
  }
  Sm.prototype._read = function (t) {
    this.emit("error", new Error("_read() is not implemented"));
  };
  Sm.prototype.pipe = function (t, e) {
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
    ((n.pipesCount += 1), Uc("pipe count=%d opts=%j", n.pipesCount, e));
    var o = (!e || e.end !== !1) && t !== process.stdout && t !== process.stderr,
      s = o ? u : A;
    (n.endEmitted ? pae.nextTick(s) : r.once("end", s), t.on("unpipe", a));
    function a(y, E) {
      (Uc("onunpipe"), y === r && E && E.hasUnpiped === !1 && ((E.hasUnpiped = !0), d()));
    }
    function u() {
      (Uc("onend"), t.end());
    }
    var c = $_s(r);
    t.on("drain", c);
    var m = !1;
    function d() {
      (Uc("cleanup"),
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
      (Uc("ondata"), (f = !1));
      var E = t.write(y);
      E === !1 &&
        !f &&
        (((n.pipesCount === 1 && n.pipes === t) || (n.pipesCount > 1 && aEn(n.pipes, t) !== -1)) &&
          !m &&
          (Uc("false write response, pause", n.awaitDrain), n.awaitDrain++, (f = !0)),
        r.pause());
    }
    function h(y) {
      (Uc("onerror", y), A(), t.removeListener("error", h), eEn(t, "error") === 0 && t.emit("error", y));
    }
    P_s(t, "error", h);
    function g() {
      (t.removeListener("finish", b), A());
    }
    t.once("close", g);
    function b() {
      (Uc("onfinish"), t.removeListener("close", g), A());
    }
    t.once("finish", b);
    function A() {
      (Uc("unpipe"), r.unpipe(t));
    }
    return (t.emit("pipe", r), n.flowing || (Uc("pipe resume"), r.resume()), t);
  };
  function $_s(t) {
    return function () {
      var e = t._readableState;
      (Uc("pipeOnDrain", e.awaitDrain),
        e.awaitDrain && e.awaitDrain--,
        e.awaitDrain === 0 && eEn(t, "data") && ((e.flowing = !0), BHt(t)));
    };
  }
  Sm.prototype.unpipe = function (t) {
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
    var a = aEn(e.pipes, t);
    return a === -1
      ? this
      : (e.pipes.splice(a, 1),
        (e.pipesCount -= 1),
        e.pipesCount === 1 && (e.pipes = e.pipes[0]),
        t.emit("unpipe", this, r),
        this);
  };
  Sm.prototype.on = function (t, e) {
    var r = PHt.prototype.on.call(this, t, e);
    if (t === "data") this._readableState.flowing !== !1 && this.resume();
    else if (t === "readable") {
      var n = this._readableState;
      !n.endEmitted &&
        !n.readableListening &&
        ((n.readableListening = n.needReadable = !0),
        (n.emittedReadable = !1),
        n.reading ? n.length && ZJe(this) : pae.nextTick(j_s, this));
    }
    return r;
  };
  Sm.prototype.addListener = Sm.prototype.on;
  function j_s(t) {
    (Uc("readable nexttick read 0"), t.read(0));
  }
  Sm.prototype.resume = function () {
    var t = this._readableState;
    return (t.flowing || (Uc("resume"), (t.flowing = !0), Q_s(this, t)), this);
  };
  function Q_s(t, e) {
    e.resumeScheduled || ((e.resumeScheduled = !0), pae.nextTick(G_s, t, e));
  }
  function G_s(t, e) {
    (e.reading || (Uc("resume read 0"), t.read(0)),
      (e.resumeScheduled = !1),
      (e.awaitDrain = 0),
      t.emit("resume"),
      BHt(t),
      e.flowing && !e.reading && t.read(0));
  }
  Sm.prototype.pause = function () {
    return (
      Uc("call pause flowing=%j", this._readableState.flowing),
      this._readableState.flowing !== !1 && (Uc("pause"), (this._readableState.flowing = !1), this.emit("pause")),
      this
    );
  };
  function BHt(t) {
    var e = t._readableState;
    for (Uc("flow", e.flowing); e.flowing && t.read() !== null; );
  }
  Sm.prototype.wrap = function (t) {
    var e = this,
      r = this._readableState,
      n = !1;
    (t.on("end", function () {
      if ((Uc("wrapped end"), r.decoder && !r.ended)) {
        var a = r.decoder.end();
        a && a.length && e.push(a);
      }
      e.push(null);
    }),
      t.on("data", function (a) {
        if (
          (Uc("wrapped data"),
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
    for (var s = 0; s < kHt.length; s++) t.on(kHt[s], this.emit.bind(this, kHt[s]));
    return (
      (this._read = function (a) {
        (Uc("wrapped _read", a), n && ((n = !1), t.resume()));
      }),
      this
    );
  };
  Object.defineProperty(Sm.prototype, "readableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._readableState.highWaterMark;
    },
  });
  Sm._fromList = sEn;
  function sEn(t, e) {
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
          : (r = q_s(t, e.buffer, e.decoder)),
      r
    );
  }
  function q_s(t, e, r) {
    var n;
    return (
      t < e.head.data.length
        ? ((n = e.head.data.slice(0, t)), (e.head.data = e.head.data.slice(t)))
        : t === e.head.data.length
          ? (n = e.shift())
          : (n = r ? H_s(t, e) : V_s(t, e)),
      n
    );
  }
  function H_s(t, e) {
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
  function V_s(t, e) {
    var r = U6e.allocUnsafe(t),
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
  function NHt(t) {
    var e = t._readableState;
    if (e.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    e.endEmitted || ((e.ended = !0), pae.nextTick(W_s, e, t));
  }
  function W_s(t, e) {
    !t.endEmitted && t.length === 0 && ((t.endEmitted = !0), (e.readable = !1), e.emit("end"));
  }
  function aEn(t, e) {
    for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
    return -1;
  }
});