/**
 * @module mB
 * @category utils/cache
 * @label cache
 * @position 81 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mB) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mB = T((lB) => {
  "use strict";
  var IC =
      (lB && lB.__classPrivateFieldGet) ||
      function (t, e, r, n) {
        if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
        if (typeof e == "function" ? t !== e || !n : !e.has(t))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
      },
    Lee,
    mR,
    ayt,
    uyt;
  Object.defineProperty(lB, "__esModule", { value: !0 });
  lB.LRUCache = void 0;
  lB.snakeToCamel = HRr;
  lB.originalOrCamelOptions = rho;
  function HRr(t) {
    return t.replace(/([_][^_])/g, (e) => e.slice(1).toUpperCase());
  }
  function rho(t) {
    function e(r) {
      var n;
      let o = t || {};
      return (n = o[r]) !== null && n !== void 0 ? n : o[HRr(r)];
    }
    return { get: e };
  }
  var cyt = class {
    constructor(e) {
      (Lee.add(this), mR.set(this, new Map()), (this.capacity = e.capacity), (this.maxAge = e.maxAge));
    }
    set(e, r) {
      (IC(this, Lee, "m", ayt).call(this, e, r), IC(this, Lee, "m", uyt).call(this));
    }
    get(e) {
      let r = IC(this, mR, "f").get(e);
      if (r) return (IC(this, Lee, "m", ayt).call(this, e, r.value), IC(this, Lee, "m", uyt).call(this), r.value);
    }
  };
  lB.LRUCache = cyt;
  ((mR = new WeakMap()),
    (Lee = new WeakSet()),
    (ayt = function (e, r) {
      (IC(this, mR, "f").delete(e), IC(this, mR, "f").set(e, { value: r, lastAccessed: Date.now() }));
    }),
    (uyt = function () {
      let e = this.maxAge ? Date.now() - this.maxAge : 0,
        r = IC(this, mR, "f").entries().next();
      for (; !r.done && (IC(this, mR, "f").size > this.capacity || r.value[1].lastAccessed < e); )
        (IC(this, mR, "f").delete(r.value[0]), (r = IC(this, mR, "f").entries().next()));
    }));
});