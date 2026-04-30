/**
 * @module cyn
 * @category network/tls
 * @label tls
 * @position 941 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (cyn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var cyn = T((nhc, uyn) => {
  "use strict";
  var tHt = C0(),
    jV,
    H6s = function () {
      throw new Error(`No async scheduler available

    See http://goo.gl/MqrFmX
`);
    },
    eHt = tHt.getNativePromise();
  tHt.isNode && typeof MutationObserver > "u"
    ? ((oyn = global.setImmediate),
      (syn = process.nextTick),
      (jV = tHt.isRecentNode
        ? function (t) {
            oyn.call(global, t);
          }
        : function (t) {
            syn.call(process, t);
          }))
    : typeof eHt == "function" && typeof eHt.resolve == "function"
      ? ((ayn = eHt.resolve()),
        (jV = function (t) {
          ayn.then(t);
        }))
      : typeof MutationObserver < "u" &&
          !(typeof window < "u" && window.navigator && (window.navigator.standalone || window.cordova))
        ? (jV = (function () {
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
          ? (jV = function (t) {
              setImmediate(t);
            })
          : typeof setTimeout < "u"
            ? (jV = function (t) {
                setTimeout(t, 0);
              })
            : (jV = H6s);
  var oyn, syn, ayn;
  uyn.exports = jV;
});