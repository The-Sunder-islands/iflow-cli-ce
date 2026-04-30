/**
 * @module _hi
 * @category network/tls
 * @label tls
 * @position 1670 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_hi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _hi = T((UQc, yhi) => {
  "use strict";
  var Dpr = Z0(),
    nK,
    kxa = function () {
      throw new Error(`No async scheduler available

    See http://goo.gl/MqrFmX
`);
    },
    Tpr = Dpr.getNativePromise();
  Dpr.isNode && typeof MutationObserver > "u"
    ? ((ghi = global.setImmediate),
      (bhi = process.nextTick),
      (nK = Dpr.isRecentNode
        ? function (t) {
            ghi.call(global, t);
          }
        : function (t) {
            bhi.call(process, t);
          }))
    : typeof Tpr == "function" && typeof Tpr.resolve == "function"
      ? ((Ahi = Tpr.resolve()),
        (nK = function (t) {
          Ahi.then(t);
        }))
      : typeof MutationObserver < "u" &&
          !(typeof window < "u" && window.navigator && (window.navigator.standalone || window.cordova)) &&
          "classList" in document.documentElement
        ? (nK = (function () {
            var t = document.createElement("div"),
              e = { attributes: !0 },
              r = !1,
              n = document.createElement("div"),
              o = new MutationObserver(function () {
                (t.classList.toggle("foo"), (r = !1));
              });
            o.observe(n, e);
            var s = function () {
              r || ((r = !0), n.classList.toggle("foo"));
            };
            return function (u) {
              var c = new MutationObserver(function () {
                (c.disconnect(), u());
              });
              (c.observe(t, e), s());
            };
          })())
        : typeof setImmediate < "u"
          ? (nK = function (t) {
              setImmediate(t);
            })
          : typeof setTimeout < "u"
            ? (nK = function (t) {
                setTimeout(t, 0);
              })
            : (nK = kxa);
  var ghi, bhi, Ahi;
  yhi.exports = nK;
});