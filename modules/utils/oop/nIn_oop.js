/**
 * @module nIn
 * @category utils/oop
 * @label oop
 * @position 1151 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (nIn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var nIn = T((Hbc, rIn) => {
  "use strict";
  var qZe;
  function AF(t, e, r) {
    return (
      (e = LDs(e)),
      e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r),
      t
    );
  }
  function LDs(t) {
    var e = MDs(t, "string");
    return typeof e == "symbol" ? e : String(e);
  }
  function MDs(t, e) {
    if (typeof t != "object" || t === null) return t;
    var r = t[Symbol.toPrimitive];
    if (r !== void 0) {
      var n = r.call(t, e || "default");
      if (typeof n != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(t);
  }
  var FDs = GZe(),
    yF = Symbol("lastResolve"),
    dW = Symbol("lastReject"),
    r_e = Symbol("error"),
    HZe = Symbol("ended"),
    fW = Symbol("lastPromise"),
    Jzt = Symbol("handlePromise"),
    pW = Symbol("stream");
  function _F(t, e) {
    return { value: t, done: e };
  }
  function UDs(t) {
    var e = t[yF];
    if (e !== null) {
      var r = t[pW].read();
      r !== null && ((t[fW] = null), (t[yF] = null), (t[dW] = null), e(_F(r, !1)));
    }
  }
  function $Ds(t) {
    process.nextTick(UDs, t);
  }
  function jDs(t, e) {
    return function (r, n) {
      t.then(function () {
        if (e[HZe]) {
          r(_F(void 0, !0));
          return;
        }
        e[Jzt](r, n);
      }, n);
    };
  }
  var QDs = Object.getPrototypeOf(function () {}),
    GDs = Object.setPrototypeOf(
      ((qZe = {
        get stream() {
          return this[pW];
        },
        next: function () {
          var e = this,
            r = this[r_e];
          if (r !== null) return Promise.reject(r);
          if (this[HZe]) return Promise.resolve(_F(void 0, !0));
          if (this[pW].destroyed)
            return new Promise(function (a, u) {
              process.nextTick(function () {
                e[r_e] ? u(e[r_e]) : a(_F(void 0, !0));
              });
            });
          var n = this[fW],
            o;
          if (n) o = new Promise(jDs(n, this));
          else {
            var s = this[pW].read();
            if (s !== null) return Promise.resolve(_F(s, !1));
            o = new Promise(this[Jzt]);
          }
          return ((this[fW] = o), o);
        },
      }),
      AF(qZe, Symbol.asyncIterator, function () {
        return this;
      }),
      AF(qZe, "return", function () {
        var e = this;
        return new Promise(function (r, n) {
          e[pW].destroy(null, function (o) {
            if (o) {
              n(o);
              return;
            }
            r(_F(void 0, !0));
          });
        });
      }),
      qZe),
      QDs,
    ),
    qDs = function (e) {
      var r,
        n = Object.create(
          GDs,
          ((r = {}),
          AF(r, pW, { value: e, writable: !0 }),
          AF(r, yF, { value: null, writable: !0 }),
          AF(r, dW, { value: null, writable: !0 }),
          AF(r, r_e, { value: null, writable: !0 }),
          AF(r, HZe, { value: e._readableState.endEmitted, writable: !0 }),
          AF(r, Jzt, {
            value: function (s, a) {
              var u = n[pW].read();
              u ? ((n[fW] = null), (n[yF] = null), (n[dW] = null), s(_F(u, !1))) : ((n[yF] = s), (n[dW] = a));
            },
            writable: !0,
          }),
          r),
        );
      return (
        (n[fW] = null),
        FDs(e, function (o) {
          if (o && o.code !== "ERR_STREAM_PREMATURE_CLOSE") {
            var s = n[dW];
            (s !== null && ((n[fW] = null), (n[yF] = null), (n[dW] = null), s(o)), (n[r_e] = o));
            return;
          }
          var a = n[yF];
          (a !== null && ((n[fW] = null), (n[yF] = null), (n[dW] = null), a(_F(void 0, !0))), (n[HZe] = !0));
        }),
        e.on("readable", $Ds.bind(null, n)),
        n
      );
    };
  rIn.exports = qDs;
});