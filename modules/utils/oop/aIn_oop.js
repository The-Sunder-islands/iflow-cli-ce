/**
 * @module aIn
 * @category utils/oop
 * @label oop
 * @position 1152 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aIn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aIn = T((Vbc, sIn) => {
  "use strict";
  function iIn(t, e, r, n, o, s, a) {
    try {
      var u = t[s](a),
        c = u.value;
    } catch (m) {
      r(m);
      return;
    }
    u.done ? e(c) : Promise.resolve(c).then(n, o);
  }
  function HDs(t) {
    return function () {
      var e = this,
        r = arguments;
      return new Promise(function (n, o) {
        var s = t.apply(e, r);
        function a(c) {
          iIn(s, n, o, a, u, "next", c);
        }
        function u(c) {
          iIn(s, n, o, a, u, "throw", c);
        }
        a(void 0);
      });
    };
  }
  function oIn(t, e) {
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
  function VDs(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? oIn(Object(r), !0).forEach(function (n) {
            WDs(t, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : oIn(Object(r)).forEach(function (n) {
              Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
            });
    }
    return t;
  }
  function WDs(t, e, r) {
    return (
      (e = zDs(e)),
      e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r),
      t
    );
  }
  function zDs(t) {
    var e = YDs(t, "string");
    return typeof e == "symbol" ? e : String(e);
  }
  function YDs(t, e) {
    if (typeof t != "object" || t === null) return t;
    var r = t[Symbol.toPrimitive];
    if (r !== void 0) {
      var n = r.call(t, e || "default");
      if (typeof n != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(t);
  }
  var KDs = gF().codes.ERR_INVALID_ARG_TYPE;
  function JDs(t, e, r) {
    var n;
    if (e && typeof e.next == "function") n = e;
    else if (e && e[Symbol.asyncIterator]) n = e[Symbol.asyncIterator]();
    else if (e && e[Symbol.iterator]) n = e[Symbol.iterator]();
    else throw new KDs("iterable", ["Iterable"], e);
    var o = new t(VDs({ objectMode: !0 }, r)),
      s = !1;
    o._read = function () {
      s || ((s = !0), a());
    };
    function a() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = HDs(function* () {
          try {
            var c = yield n.next(),
              m = c.value,
              d = c.done;
            d ? o.push(null) : o.push(yield m) ? a() : (s = !1);
          } catch (f) {
            o.destroy(f);
          }
        })),
        u.apply(this, arguments)
      );
    }
    return o;
  }
  sIn.exports = JDs;
});