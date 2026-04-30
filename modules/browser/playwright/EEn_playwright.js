/**
 * @module EEn
 * @category browser/playwright
 * @label playwright
 * @position 996 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (EEn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var EEn = T((i3c, _En) => {
  "use strict";
  var AEn = global.MutationObserver || global.WebKitMutationObserver,
    hae;
  process.browser
    ? AEn
      ? ((QHt = 0),
        (yEn = new AEn(Q6e)),
        (GHt = global.document.createTextNode("")),
        yEn.observe(GHt, { characterData: !0 }),
        (hae = function () {
          GHt.data = QHt = ++QHt % 2;
        }))
      : !global.setImmediate && typeof global.MessageChannel < "u"
        ? ((qHt = new global.MessageChannel()),
          (qHt.port1.onmessage = Q6e),
          (hae = function () {
            qHt.port2.postMessage(0);
          }))
        : "document" in global && "onreadystatechange" in global.document.createElement("script")
          ? (hae = function () {
              var t = global.document.createElement("script");
              ((t.onreadystatechange = function () {
                (Q6e(), (t.onreadystatechange = null), t.parentNode.removeChild(t), (t = null));
              }),
                global.document.documentElement.appendChild(t));
            })
          : (hae = function () {
              setTimeout(Q6e, 0);
            })
    : (hae = function () {
        process.nextTick(Q6e);
      });
  var QHt,
    yEn,
    GHt,
    qHt,
    HHt,
    G6e = [];
  function Q6e() {
    HHt = !0;
    for (var t, e, r = G6e.length; r; ) {
      for (e = G6e, G6e = [], t = -1; ++t < r; ) e[t]();
      r = G6e.length;
    }
    HHt = !1;
  }
  _En.exports = X_s;
  function X_s(t) {
    G6e.push(t) === 1 && !HHt && hae();
  }
});