/**
 * @module Qwn
 * @category utils/oop
 * @label oop
 * @position 1081 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Qwn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Qwn = T((JT) => {
  "use strict";
  var nSs =
    (JT && JT.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  Object.defineProperty(JT, "__esModule", { value: !0 });
  JT.hex = JT.dec = JT.codePoint = void 0;
  var iSs = nSs(Uwn()),
    jwn = {},
    oSs = String.fromCodePoint ? String.fromCodePoint : uSs;
  for (eZe = 0, TWt = iSs.default; eZe < TWt.length; eZe++)
    ((tZe = TWt[eZe]),
      (DWt = parseInt(tZe["Unicode dec"], 10)),
      ($wn = { codePoint: DWt, string: oSs(DWt) }),
      (jwn[tZe["Typeface name"].toUpperCase() + "_" + tZe["Dingbat dec"]] = $wn));
  var tZe, DWt, $wn, eZe, TWt;
  function IWt(t, e) {
    return jwn[t.toUpperCase() + "_" + e];
  }
  JT.codePoint = IWt;
  function sSs(t, e) {
    return IWt(t, parseInt(e, 10));
  }
  JT.dec = sSs;
  function aSs(t, e) {
    return IWt(t, parseInt(e, 16));
  }
  JT.hex = aSs;
  function uSs(t) {
    if (t <= 65535) return String.fromCharCode(t);
    var e = Math.floor((t - 65536) / 1024) + 55296,
      r = ((t - 65536) % 1024) + 56320;
    return String.fromCharCode(e, r);
  }
});