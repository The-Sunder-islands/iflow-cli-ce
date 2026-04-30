/**
 * @module hTn
 * @category security/jwt
 * @label jwt
 * @position 1111 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (hTn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var hTn = T((pTn) => {
  var rbc = (pTn.fromArray = function (t) {
      var e = 0,
        r = function () {
          return e < t.length;
        };
      return new uW({
        hasNext: r,
        next: function () {
          if (r()) return t[e++];
          throw new Error("No more elements");
        },
      });
    }),
    uW = function (t) {
      this._iterator = t;
    };
  uW.prototype.map = function (t) {
    var e = this._iterator;
    return new uW({
      hasNext: function () {
        return e.hasNext();
      },
      next: function () {
        return t(e.next());
      },
    });
  };
  uW.prototype.filter = function (t) {
    var e = this._iterator,
      r = !1,
      n = !1,
      o,
      s = function () {
        if (!r) for (r = !0, n = !1; e.hasNext() && !n; ) ((o = e.next()), (n = t(o)));
      };
    return new uW({
      hasNext: function () {
        return (s(), n);
      },
      next: function () {
        s();
        var a = o;
        return ((r = !1), a);
      },
    });
  };
  uW.prototype.first = function () {
    var t = this._iterator;
    return this._iterator.hasNext() ? t.next() : null;
  };
  uW.prototype.toArray = function () {
    for (var t = []; this._iterator.hasNext(); ) t.push(this._iterator.next());
    return t;
  };
});