/**
 * @module _x
 * @category utils/data
 * @label data
 * @position 161 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_x) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _x = T((Ivt) => {
  "use strict";
  var oo = Ivt;
  oo.asPromise = xvt();
  oo.base64 = $qr();
  oo.EventEmitter = Qqr();
  oo.float = Yqr();
  oo.inquire = Tvt();
  oo.utf8 = Jqr();
  oo.pool = Zqr();
  oo.LongBits = tHr();
  oo.isNode = !!(
    typeof global < "u" &&
    global &&
    global.process &&
    global.process.versions &&
    global.process.versions.node
  );
  oo.global = (oo.isNode && global) || (typeof window < "u" && window) || (typeof self < "u" && self) || Ivt;
  oo.emptyArray = Object.freeze ? Object.freeze([]) : [];
  oo.emptyObject = Object.freeze ? Object.freeze({}) : {};
  oo.isInteger =
    Number.isInteger ||
    function (e) {
      return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
    };
  oo.isString = function (e) {
    return typeof e == "string" || e instanceof String;
  };
  oo.isObject = function (e) {
    return e && typeof e == "object";
  };
  oo.isset = oo.isSet = function (e, r) {
    var n = e[r];
    return n != null && e.hasOwnProperty(r)
      ? typeof n != "object" || (Array.isArray(n) ? n.length : Object.keys(n).length) > 0
      : !1;
  };
  oo.Buffer = (function () {
    try {
      var t = oo.inquire("buffer").Buffer;
      return t.prototype.utf8Write ? t : null;
    } catch {
      return null;
    }
  })();
  oo._Buffer_from = null;
  oo._Buffer_allocUnsafe = null;
  oo.newBuffer = function (e) {
    return typeof e == "number"
      ? oo.Buffer
        ? oo._Buffer_allocUnsafe(e)
        : new oo.Array(e)
      : oo.Buffer
        ? oo._Buffer_from(e)
        : typeof Uint8Array > "u"
          ? e
          : new Uint8Array(e);
  };
  oo.Array = typeof Uint8Array < "u" ? Uint8Array : Array;
  oo.Long = (oo.global.dcodeIO && oo.global.dcodeIO.Long) || oo.global.Long || oo.inquire("long");
  oo.key2Re = /^true|false|0|1$/;
  oo.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
  oo.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
  oo.longToHash = function (e) {
    return e ? oo.LongBits.from(e).toHash() : oo.LongBits.zeroHash;
  };
  oo.longFromHash = function (e, r) {
    var n = oo.LongBits.fromHash(e);
    return oo.Long ? oo.Long.fromBits(n.lo, n.hi, r) : n.toNumber(!!r);
  };
  function rHr(t, e, r) {
    for (var n = Object.keys(e), o = 0; o < n.length; ++o) (t[n[o]] === void 0 || !r) && (t[n[o]] = e[n[o]]);
    return t;
  }
  oo.merge = rHr;
  oo.lcFirst = function (e) {
    return e.charAt(0).toLowerCase() + e.substring(1);
  };
  function nHr(t) {
    function e(r, n) {
      if (!(this instanceof e)) return new e(r, n);
      (Object.defineProperty(this, "message", {
        get: function () {
          return r;
        },
      }),
        Error.captureStackTrace
          ? Error.captureStackTrace(this, e)
          : Object.defineProperty(this, "stack", { value: new Error().stack || "" }),
        n && rHr(this, n));
    }
    return (
      (e.prototype = Object.create(Error.prototype, {
        constructor: { value: e, writable: !0, enumerable: !1, configurable: !0 },
        name: {
          get: function () {
            return t;
          },
          set: void 0,
          enumerable: !1,
          configurable: !0,
        },
        toString: {
          value: function () {
            return this.name + ": " + this.message;
          },
          writable: !0,
          enumerable: !1,
          configurable: !0,
        },
      })),
      e
    );
  }
  oo.newError = nHr;
  oo.ProtocolError = nHr("ProtocolError");
  oo.oneOfGetter = function (e) {
    for (var r = {}, n = 0; n < e.length; ++n) r[e[n]] = 1;
    return function () {
      for (var o = Object.keys(this), s = o.length - 1; s > -1; --s)
        if (r[o[s]] === 1 && this[o[s]] !== void 0 && this[o[s]] !== null) return o[s];
    };
  };
  oo.oneOfSetter = function (e) {
    return function (r) {
      for (var n = 0; n < e.length; ++n) e[n] !== r && delete this[e[n]];
    };
  };
  oo.toJSONOptions = { longs: String, enums: String, bytes: String, json: !0 };
  oo._configure = function () {
    var t = oo.Buffer;
    if (!t) {
      oo._Buffer_from = oo._Buffer_allocUnsafe = null;
      return;
    }
    ((oo._Buffer_from =
      (t.from !== Uint8Array.from && t.from) ||
      function (r, n) {
        return new t(r, n);
      }),
      (oo._Buffer_allocUnsafe =
        t.allocUnsafe ||
        function (r) {
          return new t(r);
        }));
  };
});
var $Ne = T((xRu, aHr) => {
  "use strict";
  aHr.exports = Zu;
  var v_ = _x(),
    Rvt,
    UNe = v_.LongBits,
    iHr = v_.base64,
    oHr = v_.utf8;
  function sge(t, e, r) {
    ((this.fn = t), (this.len = e), (this.next = void 0), (this.val = r));
  }
  function Ovt() {}
  function lxo(t) {
    ((this.head = t.head), (this.tail = t.tail), (this.len = t.len), (this.next = t.states));
  }
  function Zu() {
    ((this.len = 0), (this.head = new sge(Ovt, 0, 0)), (this.tail = this.head), (this.states = null));
  }
  var sHr = function () {
    return v_.Buffer
      ? function () {
          return (Zu.create = function () {
            return new Rvt();
          })();
        }
      : function () {
          return new Zu();
        };
  };
  Zu.create = sHr();
  Zu.alloc = function (e) {
    return new v_.Array(e);
  };
  v_.Array !== Array && (Zu.alloc = v_.pool(Zu.alloc, v_.Array.prototype.subarray));
  Zu.prototype._push = function (e, r, n) {
    return ((this.tail = this.tail.next = new sge(e, r, n)), (this.len += r), this);
  };
  function Nvt(t, e, r) {
    e[r] = t & 255;
  }
  function mxo(t, e, r) {
    for (; t > 127; ) ((e[r++] = (t & 127) | 128), (t >>>= 7));
    e[r] = t;
  }
  function Pvt(t, e) {
    ((this.len = t), (this.next = void 0), (this.val = e));
  }
  Pvt.prototype = Object.create(sge.prototype);
  Pvt.prototype.fn = mxo;
  Zu.prototype.uint32 = function (e) {
    return (
      (this.len += (this.tail = this.tail.next =
        new Pvt((e = e >>> 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len),
      this
    );
  };
  Zu.prototype.int32 = function (e) {
    return e < 0 ? this._push(Bvt, 10, UNe.fromNumber(e)) : this.uint32(e);
  };
  Zu.prototype.sint32 = function (e) {
    return this.uint32(((e << 1) ^ (e >> 31)) >>> 0);
  };
  function Bvt(t, e, r) {
    for (; t.hi; ) ((e[r++] = (t.lo & 127) | 128), (t.lo = ((t.lo >>> 7) | (t.hi << 25)) >>> 0), (t.hi >>>= 7));
    for (; t.lo > 127; ) ((e[r++] = (t.lo & 127) | 128), (t.lo = t.lo >>> 7));
    e[r++] = t.lo;
  }
  Zu.prototype.uint64 = function (e) {
    var r = UNe.from(e);
    return this._push(Bvt, r.length(), r);
  };
  Zu.prototype.int64 = Zu.prototype.uint64;
  Zu.prototype.sint64 = function (e) {
    var r = UNe.from(e).zzEncode();
    return this._push(Bvt, r.length(), r);
  };
  Zu.prototype.bool = function (e) {
    return this._push(Nvt, 1, e ? 1 : 0);
  };
  function kvt(t, e, r) {
    ((e[r] = t & 255), (e[r + 1] = (t >>> 8) & 255), (e[r + 2] = (t >>> 16) & 255), (e[r + 3] = t >>> 24));
  }
  Zu.prototype.fixed32 = function (e) {
    return this._push(kvt, 4, e >>> 0);
  };
  Zu.prototype.sfixed32 = Zu.prototype.fixed32;
  Zu.prototype.fixed64 = function (e) {
    var r = UNe.from(e);
    return this._push(kvt, 4, r.lo)._push(kvt, 4, r.hi);
  };
  Zu.prototype.sfixed64 = Zu.prototype.fixed64;
  Zu.prototype.float = function (e) {
    return this._push(v_.float.writeFloatLE, 4, e);
  };
  Zu.prototype.double = function (e) {
    return this._push(v_.float.writeDoubleLE, 8, e);
  };
  var dxo = v_.Array.prototype.set
    ? function (e, r, n) {
        r.set(e, n);
      }
    : function (e, r, n) {
        for (var o = 0; o < e.length; ++o) r[n + o] = e[o];
      };
  Zu.prototype.bytes = function (e) {
    var r = e.length >>> 0;
    if (!r) return this._push(Nvt, 1, 0);
    if (v_.isString(e)) {
      var n = Zu.alloc((r = iHr.length(e)));
      (iHr.decode(e, n, 0), (e = n));
    }
    return this.uint32(r)._push(dxo, r, e);
  };
  Zu.prototype.string = function (e) {
    var r = oHr.length(e);
    return r ? this.uint32(r)._push(oHr.write, r, e) : this._push(Nvt, 1, 0);
  };
  Zu.prototype.fork = function () {
    return ((this.states = new lxo(this)), (this.head = this.tail = new sge(Ovt, 0, 0)), (this.len = 0), this);
  };
  Zu.prototype.reset = function () {
    return (
      this.states
        ? ((this.head = this.states.head),
          (this.tail = this.states.tail),
          (this.len = this.states.len),
          (this.states = this.states.next))
        : ((this.head = this.tail = new sge(Ovt, 0, 0)), (this.len = 0)),
      this
    );
  };
  Zu.prototype.ldelim = function () {
    var e = this.head,
      r = this.tail,
      n = this.len;
    return (this.reset().uint32(n), n && ((this.tail.next = e.next), (this.tail = r), (this.len += n)), this);
  };
  Zu.prototype.finish = function () {
    for (var e = this.head.next, r = this.constructor.alloc(this.len), n = 0; e; )
      (e.fn(e.val, r, n), (n += e.len), (e = e.next));
    return r;
  };
  Zu._configure = function (t) {
    ((Rvt = t), (Zu.create = sHr()), Rvt._configure());
  };
});