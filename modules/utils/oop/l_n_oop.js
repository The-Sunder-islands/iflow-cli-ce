/**
 * @module l_n
 * @category utils/oop
 * @label oop
 * @position 964 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (l_n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var l_n = T((Thc, c_n) => {
  "use strict";
  c_n.exports = function (t, e, r, n) {
    var o = C0(),
      s = o.isObject,
      a = $V(),
      u;
    typeof Map == "function" && (u = Map);
    var c = (function () {
        var p = 0,
          h = 0;
        function g(b, A) {
          ((this[p] = b), (this[p + h] = A), p++);
        }
        return function (A) {
          ((h = A.size), (p = 0));
          var y = new Array(A.size * 2);
          return (A.forEach(g, y), y);
        };
      })(),
      m = function (p) {
        for (var h = new u(), g = (p.length / 2) | 0, b = 0; b < g; ++b) {
          var A = p[g + b],
            y = p[b];
          h.set(A, y);
        }
        return h;
      };
    function d(p) {
      var h = !1,
        g;
      if (u !== void 0 && p instanceof u) ((g = c(p)), (h = !0));
      else {
        var b = a.keys(p),
          A = b.length;
        g = new Array(A * 2);
        for (var y = 0; y < A; ++y) {
          var E = b[y];
          ((g[y] = p[E]), (g[y + A] = E));
        }
      }
      (this.constructor$(g), (this._isMap = h), this._init$(void 0, -3));
    }
    (o.inherits(d, e),
      (d.prototype._init = function () {}),
      (d.prototype._promiseFulfilled = function (p, h) {
        this._values[h] = p;
        var g = ++this._totalResolved;
        if (g >= this._length) {
          var b;
          if (this._isMap) b = m(this._values);
          else {
            b = {};
            for (var A = this.length(), y = 0, E = this.length(); y < E; ++y) b[this._values[y + A]] = this._values[y];
          }
          return (this._resolve(b), !0);
        }
        return !1;
      }),
      (d.prototype.shouldCopyValues = function () {
        return !1;
      }),
      (d.prototype.getActualLength = function (p) {
        return p >> 1;
      }));
    function f(p) {
      var h,
        g = r(p);
      if (s(g)) g instanceof t ? (h = g._then(t.props, void 0, void 0, void 0, void 0)) : (h = new d(g).promise());
      else
        return n(`cannot await properties of a non-object

    See http://goo.gl/MqrFmX
`);
      return (g instanceof t && h._propagateFrom(g, 2), h);
    }
    ((t.prototype.props = function () {
      return f(this);
    }),
      (t.props = function (p) {
        return f(p);
      }));
  };
});