/**
 * @module rce
 * @category utils/oop
 * @label oop
 * @position 1367 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (rce) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var rce = T((K8c, Str) => {
  var hUn = Ctr();
  Str.exports = hUn(Srt);
  Str.exports.strict = hUn(gUn);
  Srt.proto = Srt(function () {
    (Object.defineProperty(Function.prototype, "once", {
      value: function () {
        return Srt(this);
      },
      configurable: !0,
    }),
      Object.defineProperty(Function.prototype, "onceStrict", {
        value: function () {
          return gUn(this);
        },
        configurable: !0,
      }));
  });
  function Srt(t) {
    var e = function () {
      return e.called ? e.value : ((e.called = !0), (e.value = t.apply(this, arguments)));
    };
    return ((e.called = !1), e);
  }
  function gUn(t) {
    var e = function () {
        if (e.called) throw new Error(e.onceError);
        return ((e.called = !0), (e.value = t.apply(this, arguments)));
      },
      r = t.name || "Function wrapped with `once`";
    return ((e.onceError = r + " shouldn't be called more than once"), (e.called = !1), e);
  }
});