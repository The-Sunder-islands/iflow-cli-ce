/**
 * @module DEn
 * @category utils/oop
 * @label oop
 * @position 997 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (DEn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var DEn = T((o3c, TEn) => {
  "use strict";
  var vEn = EEn();
  function gae() {}
  var Kb = {},
    CEn = ["REJECTED"],
    VHt = ["FULFILLED"],
    SEn = ["PENDING"];
  process.browser || (q6e = ["UNHANDLED"]);
  var q6e;
  TEn.exports = ZM;
  function ZM(t) {
    if (typeof t != "function") throw new TypeError("resolver must be a function");
    ((this.state = SEn),
      (this.queue = []),
      (this.outcome = void 0),
      process.browser || (this.handled = q6e),
      t !== gae && wEn(this, t));
  }
  ZM.prototype.finally = function (t) {
    if (typeof t != "function") return this;
    var e = this.constructor;
    return this.then(r, n);
    function r(o) {
      function s() {
        return o;
      }
      return e.resolve(t()).then(s);
    }
    function n(o) {
      function s() {
        throw o;
      }
      return e.resolve(t()).then(s);
    }
  };
  ZM.prototype.catch = function (t) {
    return this.then(null, t);
  };
  ZM.prototype.then = function (t, e) {
    if ((typeof t != "function" && this.state === VHt) || (typeof e != "function" && this.state === CEn)) return this;
    var r = new this.constructor(gae);
    if ((process.browser || (this.handled === q6e && (this.handled = null)), this.state !== SEn)) {
      var n = this.state === VHt ? t : e;
      WHt(r, n, this.outcome);
    } else this.queue.push(new H6e(r, t, e));
    return r;
  };
  function H6e(t, e, r) {
    ((this.promise = t),
      typeof e == "function" && ((this.onFulfilled = e), (this.callFulfilled = this.otherCallFulfilled)),
      typeof r == "function" && ((this.onRejected = r), (this.callRejected = this.otherCallRejected)));
  }
  H6e.prototype.callFulfilled = function (t) {
    Kb.resolve(this.promise, t);
  };
  H6e.prototype.otherCallFulfilled = function (t) {
    WHt(this.promise, this.onFulfilled, t);
  };
  H6e.prototype.callRejected = function (t) {
    Kb.reject(this.promise, t);
  };
  H6e.prototype.otherCallRejected = function (t) {
    WHt(this.promise, this.onRejected, t);
  };
  function WHt(t, e, r) {
    vEn(function () {
      var n;
      try {
        n = e(r);
      } catch (o) {
        return Kb.reject(t, o);
      }
      n === t ? Kb.reject(t, new TypeError("Cannot resolve promise with itself")) : Kb.resolve(t, n);
    });
  }
  Kb.resolve = function (t, e) {
    var r = xEn(Z_s, e);
    if (r.status === "error") return Kb.reject(t, r.value);
    var n = r.value;
    if (n) wEn(t, n);
    else {
      ((t.state = VHt), (t.outcome = e));
      for (var o = -1, s = t.queue.length; ++o < s; ) t.queue[o].callFulfilled(e);
    }
    return t;
  };
  Kb.reject = function (t, e) {
    ((t.state = CEn),
      (t.outcome = e),
      process.browser ||
        (t.handled === q6e &&
          vEn(function () {
            t.handled === q6e && process.emit("unhandledRejection", e, t);
          })));
    for (var r = -1, n = t.queue.length; ++r < n; ) t.queue[r].callRejected(e);
    return t;
  };
  function Z_s(t) {
    var e = t && t.then;
    if (t && (typeof t == "object" || typeof t == "function") && typeof e == "function")
      return function () {
        e.apply(t, arguments);
      };
  }
  function wEn(t, e) {
    var r = !1;
    function n(u) {
      r || ((r = !0), Kb.reject(t, u));
    }
    function o(u) {
      r || ((r = !0), Kb.resolve(t, u));
    }
    function s() {
      e(o, n);
    }
    var a = xEn(s);
    a.status === "error" && n(a.value);
  }
  function xEn(t, e) {
    var r = {};
    try {
      ((r.value = t(e)), (r.status = "success"));
    } catch (n) {
      ((r.status = "error"), (r.value = n));
    }
    return r;
  }
  ZM.resolve = eEs;
  function eEs(t) {
    return t instanceof this ? t : Kb.resolve(new this(gae), t);
  }
  ZM.reject = tEs;
  function tEs(t) {
    var e = new this(gae);
    return Kb.reject(e, t);
  }
  ZM.all = rEs;
  function rEs(t) {
    var e = this;
    if (Object.prototype.toString.call(t) !== "[object Array]") return this.reject(new TypeError("must be an array"));
    var r = t.length,
      n = !1;
    if (!r) return this.resolve([]);
    for (var o = new Array(r), s = 0, a = -1, u = new this(gae); ++a < r; ) c(t[a], a);
    return u;
    function c(m, d) {
      e.resolve(m).then(f, function (p) {
        n || ((n = !0), Kb.reject(u, p));
      });
      function f(p) {
        ((o[d] = p), ++s === r && !n && ((n = !0), Kb.resolve(u, o)));
      }
    }
  }
  ZM.race = nEs;
  function nEs(t) {
    var e = this;
    if (Object.prototype.toString.call(t) !== "[object Array]") return this.reject(new TypeError("must be an array"));
    var r = t.length,
      n = !1;
    if (!r) return this.resolve([]);
    for (var o = -1, s = new this(gae); ++o < r; ) a(t[o]);
    return s;
    function a(u) {
      e.resolve(u).then(
        function (c) {
          n || ((n = !0), Kb.resolve(s, c));
        },
        function (c) {
          n || ((n = !0), Kb.reject(s, c));
        },
      );
    }
  }
});