/**
 * @module Pk
 * @category utils/oop
 * @label oop
 * @position 973 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Pk) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Pk = T((H4) => {
  var oys = (d1(), bt(m1)),
    U8 = mHt()();
  H4.defer = sys;
  H4.when = U8.resolve;
  H4.resolve = U8.resolve;
  H4.all = U8.all;
  H4.props = U8.props;
  H4.reject = U8.reject;
  H4.promisify = U8.promisify;
  H4.mapSeries = U8.mapSeries;
  H4.attempt = U8.attempt;
  H4.nfcall = function (t) {
    var e = Array.prototype.slice.call(arguments, 1),
      r = U8.promisify(t);
    return r.apply(null, e);
  };
  U8.prototype.fail = U8.prototype.caught;
  U8.prototype.also = function (t) {
    return this.then(function (e) {
      var r = oys.extend({}, e, t(e));
      return U8.props(r);
    });
  };
  function sys() {
    var t,
      e,
      r = new U8.Promise(function (n, o) {
        ((t = n), (e = o));
      });
    return { resolve: t, reject: e, promise: r };
  }
});