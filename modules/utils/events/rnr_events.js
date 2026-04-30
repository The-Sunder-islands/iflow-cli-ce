/**
 * @module rnr
 * @category utils/events
 * @label events
 * @position 1433 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (rnr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var rnr = T((D6c, gGn) => {
  "use strict";
  var ez = Z1();
  gGn.exports = Wf;
  function lGn(t) {
    var e = this;
    ((this.next = null),
      (this.entry = null),
      (this.finish = function () {
        wXs(e, t);
      }));
  }
  var uXs =
      !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : ez.nextTick,
    yce;
  Wf.WritableState = xEe;
  var mGn = Object.create(z0());
  mGn.inherits = qo();
  var cXs = { deprecate: GV() },
    dGn = Jrr(),
    ont = CEe().Buffer,
    lXs =
      (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array ||
      function () {};
  function mXs(t) {
    return ont.from(t);
  }
  function dXs(t) {
    return ont.isBuffer(t) || t instanceof lXs;
  }
  var fGn = enr();
  mGn.inherits(Wf, dGn);
  function fXs() {}
  function xEe(t, e) {
    ((yce = yce || tz()), (t = t || {}));
    var r = e instanceof yce;
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
        _Xs(e, u);
      }),
      (this.writecb = null),
      (this.writelen = 0),
      (this.bufferedRequest = null),
      (this.lastBufferedRequest = null),
      (this.pendingcb = 0),
      (this.prefinished = !1),
      (this.errorEmitted = !1),
      (this.bufferedRequestCount = 0),
      (this.corkedRequestsFree = new lGn(this)));
  }
  xEe.prototype.getBuffer = function () {
    for (var e = this.bufferedRequest, r = []; e; ) (r.push(e), (e = e.next));
    return r;
  };
  (function () {
    try {
      Object.defineProperty(xEe.prototype, "buffer", {
        get: cXs.deprecate(
          function () {
            return this.getBuffer();
          },
          "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
          "DEP0003",
        ),
      });
    } catch {}
  })();
  var int;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function"
    ? ((int = Function.prototype[Symbol.hasInstance]),
      Object.defineProperty(Wf, Symbol.hasInstance, {
        value: function (t) {
          return int.call(this, t) ? !0 : this !== Wf ? !1 : t && t._writableState instanceof xEe;
        },
      }))
    : (int = function (t) {
        return t instanceof this;
      });
  function Wf(t) {
    if (((yce = yce || tz()), !int.call(Wf, this) && !(this instanceof yce))) return new Wf(t);
    ((this._writableState = new xEe(t, this)),
      (this.writable = !0),
      t &&
        (typeof t.write == "function" && (this._write = t.write),
        typeof t.writev == "function" && (this._writev = t.writev),
        typeof t.destroy == "function" && (this._destroy = t.destroy),
        typeof t.final == "function" && (this._final = t.final)),
      dGn.call(this));
  }
  Wf.prototype.pipe = function () {
    this.emit("error", new Error("Cannot pipe, not readable"));
  };
  function pXs(t, e) {
    var r = new Error("write after end");
    (t.emit("error", r), ez.nextTick(e, r));
  }
  function hXs(t, e, r, n) {
    var o = !0,
      s = !1;
    return (
      r === null
        ? (s = new TypeError("May not write null values to stream"))
        : typeof r != "string" &&
          r !== void 0 &&
          !e.objectMode &&
          (s = new TypeError("Invalid non-string/buffer chunk")),
      s && (t.emit("error", s), ez.nextTick(n, s), (o = !1)),
      o
    );
  }
  Wf.prototype.write = function (t, e, r) {
    var n = this._writableState,
      o = !1,
      s = !n.objectMode && dXs(t);
    return (
      s && !ont.isBuffer(t) && (t = mXs(t)),
      typeof e == "function" && ((r = e), (e = null)),
      s ? (e = "buffer") : e || (e = n.defaultEncoding),
      typeof r != "function" && (r = fXs),
      n.ended ? pXs(this, r) : (s || hXs(this, n, t, r)) && (n.pendingcb++, (o = bXs(this, n, s, t, e, r))),
      o
    );
  };
  Wf.prototype.cork = function () {
    var t = this._writableState;
    t.corked++;
  };
  Wf.prototype.uncork = function () {
    var t = this._writableState;
    t.corked && (t.corked--, !t.writing && !t.corked && !t.bufferProcessing && t.bufferedRequest && pGn(this, t));
  };
  Wf.prototype.setDefaultEncoding = function (e) {
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
  function gXs(t, e, r) {
    return (!t.objectMode && t.decodeStrings !== !1 && typeof e == "string" && (e = ont.from(e, r)), e);
  }
  Object.defineProperty(Wf.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    },
  });
  function bXs(t, e, r, n, o, s) {
    if (!r) {
      var a = gXs(e, n, o);
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
    } else tnr(t, e, !1, u, n, o, s);
    return c;
  }
  function tnr(t, e, r, n, o, s, a) {
    ((e.writelen = n),
      (e.writecb = a),
      (e.writing = !0),
      (e.sync = !0),
      r ? t._writev(o, e.onwrite) : t._write(o, s, e.onwrite),
      (e.sync = !1));
  }
  function AXs(t, e, r, n, o) {
    (--e.pendingcb,
      r
        ? (ez.nextTick(o, n), ez.nextTick(wEe, t, e), (t._writableState.errorEmitted = !0), t.emit("error", n))
        : (o(n), (t._writableState.errorEmitted = !0), t.emit("error", n), wEe(t, e)));
  }
  function yXs(t) {
    ((t.writing = !1), (t.writecb = null), (t.length -= t.writelen), (t.writelen = 0));
  }
  function _Xs(t, e) {
    var r = t._writableState,
      n = r.sync,
      o = r.writecb;
    if ((yXs(r), e)) AXs(t, r, n, e, o);
    else {
      var s = hGn(r);
      (!s && !r.corked && !r.bufferProcessing && r.bufferedRequest && pGn(t, r),
        n ? uXs(cGn, t, r, s, o) : cGn(t, r, s, o));
    }
  }
  function cGn(t, e, r, n) {
    (r || EXs(t, e), e.pendingcb--, n(), wEe(t, e));
  }
  function EXs(t, e) {
    e.length === 0 && e.needDrain && ((e.needDrain = !1), t.emit("drain"));
  }
  function pGn(t, e) {
    e.bufferProcessing = !0;
    var r = e.bufferedRequest;
    if (t._writev && r && r.next) {
      var n = e.bufferedRequestCount,
        o = new Array(n),
        s = e.corkedRequestsFree;
      s.entry = r;
      for (var a = 0, u = !0; r; ) ((o[a] = r), r.isBuf || (u = !1), (r = r.next), (a += 1));
      ((o.allBuffers = u),
        tnr(t, e, !0, e.length, o, "", s.finish),
        e.pendingcb++,
        (e.lastBufferedRequest = null),
        s.next ? ((e.corkedRequestsFree = s.next), (s.next = null)) : (e.corkedRequestsFree = new lGn(e)),
        (e.bufferedRequestCount = 0));
    } else {
      for (; r; ) {
        var c = r.chunk,
          m = r.encoding,
          d = r.callback,
          f = e.objectMode ? 1 : c.length;
        if ((tnr(t, e, !1, f, c, m, d), (r = r.next), e.bufferedRequestCount--, e.writing)) break;
      }
      r === null && (e.lastBufferedRequest = null);
    }
    ((e.bufferedRequest = r), (e.bufferProcessing = !1));
  }
  Wf.prototype._write = function (t, e, r) {
    r(new Error("_write() is not implemented"));
  };
  Wf.prototype._writev = null;
  Wf.prototype.end = function (t, e, r) {
    var n = this._writableState;
    (typeof t == "function" ? ((r = t), (t = null), (e = null)) : typeof e == "function" && ((r = e), (e = null)),
      t != null && this.write(t, e),
      n.corked && ((n.corked = 1), this.uncork()),
      n.ending || SXs(this, n, r));
  };
  function hGn(t) {
    return t.ending && t.length === 0 && t.bufferedRequest === null && !t.finished && !t.writing;
  }
  function vXs(t, e) {
    t._final(function (r) {
      (e.pendingcb--, r && t.emit("error", r), (e.prefinished = !0), t.emit("prefinish"), wEe(t, e));
    });
  }
  function CXs(t, e) {
    !e.prefinished &&
      !e.finalCalled &&
      (typeof t._final == "function"
        ? (e.pendingcb++, (e.finalCalled = !0), ez.nextTick(vXs, t, e))
        : ((e.prefinished = !0), t.emit("prefinish")));
  }
  function wEe(t, e) {
    var r = hGn(e);
    return (r && (CXs(t, e), e.pendingcb === 0 && ((e.finished = !0), t.emit("finish"))), r);
  }
  function SXs(t, e, r) {
    ((e.ending = !0),
      wEe(t, e),
      r && (e.finished ? ez.nextTick(r) : t.once("finish", r)),
      (e.ended = !0),
      (t.writable = !1));
  }
  function wXs(t, e, r) {
    var n = t.entry;
    for (t.entry = null; n; ) {
      var o = n.callback;
      (e.pendingcb--, o(r), (n = n.next));
    }
    e.corkedRequestsFree.next = t;
  }
  Object.defineProperty(Wf.prototype, "destroyed", {
    get: function () {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    },
    set: function (t) {
      this._writableState && (this._writableState.destroyed = t);
    },
  });
  Wf.prototype.destroy = fGn.destroy;
  Wf.prototype._undestroy = fGn.undestroy;
  Wf.prototype._destroy = function (t, e) {
    (this.end(), e(t));
  };
});