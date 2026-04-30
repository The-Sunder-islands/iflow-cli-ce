/**
 * @module LDn
 * @category utils/oop
 * @label oop
 * @position 1144 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (LDn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var LDn = T((Mbc, BDn) => {
  "use strict";
  function kDn(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      (e &&
        (n = n.filter(function (o) {
          return Object.getOwnPropertyDescriptor(t, o).enumerable;
        })),
        r.push.apply(r, n));
    }
    return r;
  }
  function ODn(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? kDn(Object(r), !0).forEach(function (n) {
            TTs(t, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : kDn(Object(r)).forEach(function (n) {
              Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
            });
    }
    return t;
  }
  function TTs(t, e, r) {
    return (
      (e = PDn(e)),
      e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r),
      t
    );
  }
  function DTs(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function NDn(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      ((n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, PDn(n.key), n));
    }
  }
  function ITs(t, e, r) {
    return (e && NDn(t.prototype, e), r && NDn(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t);
  }
  function PDn(t) {
    var e = RTs(t, "string");
    return typeof e == "symbol" ? e : String(e);
  }
  function RTs(t, e) {
    if (typeof t != "object" || t === null) return t;
    var r = t[Symbol.toPrimitive];
    if (r !== void 0) {
      var n = r.call(t, e || "default");
      if (typeof n != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(t);
  }
  var kTs = Ae("buffer"),
    MZe = kTs.Buffer,
    OTs = Ae("util"),
    Fzt = OTs.inspect,
    NTs = (Fzt && Fzt.custom) || "inspect";
  function PTs(t, e, r) {
    MZe.prototype.copy.call(t, e, r);
  }
  BDn.exports = (function () {
    function t() {
      (DTs(this, t), (this.head = null), (this.tail = null), (this.length = 0));
    }
    return (
      ITs(t, [
        {
          key: "push",
          value: function (r) {
            var n = { data: r, next: null };
            (this.length > 0 ? (this.tail.next = n) : (this.head = n), (this.tail = n), ++this.length);
          },
        },
        {
          key: "unshift",
          value: function (r) {
            var n = { data: r, next: this.head };
            (this.length === 0 && (this.tail = n), (this.head = n), ++this.length);
          },
        },
        {
          key: "shift",
          value: function () {
            if (this.length !== 0) {
              var r = this.head.data;
              return (
                this.length === 1 ? (this.head = this.tail = null) : (this.head = this.head.next),
                --this.length,
                r
              );
            }
          },
        },
        {
          key: "clear",
          value: function () {
            ((this.head = this.tail = null), (this.length = 0));
          },
        },
        {
          key: "join",
          value: function (r) {
            if (this.length === 0) return "";
            for (var n = this.head, o = "" + n.data; (n = n.next); ) o += r + n.data;
            return o;
          },
        },
        {
          key: "concat",
          value: function (r) {
            if (this.length === 0) return MZe.alloc(0);
            for (var n = MZe.allocUnsafe(r >>> 0), o = this.head, s = 0; o; )
              (PTs(o.data, n, s), (s += o.data.length), (o = o.next));
            return n;
          },
        },
        {
          key: "consume",
          value: function (r, n) {
            var o;
            return (
              r < this.head.data.length
                ? ((o = this.head.data.slice(0, r)), (this.head.data = this.head.data.slice(r)))
                : r === this.head.data.length
                  ? (o = this.shift())
                  : (o = n ? this._getString(r) : this._getBuffer(r)),
              o
            );
          },
        },
        {
          key: "first",
          value: function () {
            return this.head.data;
          },
        },
        {
          key: "_getString",
          value: function (r) {
            var n = this.head,
              o = 1,
              s = n.data;
            for (r -= s.length; (n = n.next); ) {
              var a = n.data,
                u = r > a.length ? a.length : r;
              if ((u === a.length ? (s += a) : (s += a.slice(0, r)), (r -= u), r === 0)) {
                u === a.length
                  ? (++o, n.next ? (this.head = n.next) : (this.head = this.tail = null))
                  : ((this.head = n), (n.data = a.slice(u)));
                break;
              }
              ++o;
            }
            return ((this.length -= o), s);
          },
        },
        {
          key: "_getBuffer",
          value: function (r) {
            var n = MZe.allocUnsafe(r),
              o = this.head,
              s = 1;
            for (o.data.copy(n), r -= o.data.length; (o = o.next); ) {
              var a = o.data,
                u = r > a.length ? a.length : r;
              if ((a.copy(n, n.length - r, 0, u), (r -= u), r === 0)) {
                u === a.length
                  ? (++s, o.next ? (this.head = o.next) : (this.head = this.tail = null))
                  : ((this.head = o), (o.data = a.slice(u)));
                break;
              }
              ++s;
            }
            return ((this.length -= s), n);
          },
        },
        {
          key: NTs,
          value: function (r, n) {
            return Fzt(this, ODn(ODn({}, n), {}, { depth: 0, customInspect: !1 }));
          },
        },
      ]),
      t
    );
  })();
});
var $zt = T((Fbc, FDn) => {
  "use strict";
  function BTs(t, e) {
    var r = this,
      n = this._readableState && this._readableState.destroyed,
      o = this._writableState && this._writableState.destroyed;
    return n || o
      ? (e
          ? e(t)
          : t &&
            (this._writableState
              ? this._writableState.errorEmitted ||
                ((this._writableState.errorEmitted = !0), process.nextTick(Uzt, this, t))
              : process.nextTick(Uzt, this, t)),
        this)
      : (this._readableState && (this._readableState.destroyed = !0),
        this._writableState && (this._writableState.destroyed = !0),
        this._destroy(t || null, function (s) {
          !e && s
            ? r._writableState
              ? r._writableState.errorEmitted
                ? process.nextTick(FZe, r)
                : ((r._writableState.errorEmitted = !0), process.nextTick(MDn, r, s))
              : process.nextTick(MDn, r, s)
            : e
              ? (process.nextTick(FZe, r), e(s))
              : process.nextTick(FZe, r);
        }),
        this);
  }
  function MDn(t, e) {
    (Uzt(t, e), FZe(t));
  }
  function FZe(t) {
    (t._writableState && !t._writableState.emitClose) ||
      (t._readableState && !t._readableState.emitClose) ||
      t.emit("close");
  }
  function LTs() {
    (this._readableState &&
      ((this._readableState.destroyed = !1),
      (this._readableState.reading = !1),
      (this._readableState.ended = !1),
      (this._readableState.endEmitted = !1)),
      this._writableState &&
        ((this._writableState.destroyed = !1),
        (this._writableState.ended = !1),
        (this._writableState.ending = !1),
        (this._writableState.finalCalled = !1),
        (this._writableState.prefinished = !1),
        (this._writableState.finished = !1),
        (this._writableState.errorEmitted = !1)));
  }
  function Uzt(t, e) {
    t.emit("error", e);
  }
  function MTs(t, e) {
    var r = t._readableState,
      n = t._writableState;
    (r && r.autoDestroy) || (n && n.autoDestroy) ? t.destroy(e) : t.emit("error", e);
  }
  FDn.exports = { destroy: BTs, undestroy: LTs, errorOrDestroy: MTs };
});