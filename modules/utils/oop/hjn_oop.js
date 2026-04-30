/**
 * @module hjn
 * @category utils/oop
 * @label oop
 * @position 1394 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (hjn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var hjn = T((H9c, pjn) => {
  var VYs = BUn(),
    uEe = {},
    WF = function (t, e) {
      return WF.create(t, e);
    };
  WF.create = function (t, e) {
    if (uEe[t]) {
      var r = new VYs(t, e);
      return (r.setFormat(t), r.setModule(new uEe[t](e)), r);
    } else throw new Error("create(" + t + "): format not registered");
  };
  WF.registerFormat = function (t, e) {
    if (uEe[t]) throw new Error("register(" + t + "): format already registered");
    if (typeof e != "function") throw new Error("register(" + t + "): format module invalid");
    if (typeof e.prototype.append != "function" || typeof e.prototype.finalize != "function")
      throw new Error("register(" + t + "): format module missing methods");
    uEe[t] = e;
  };
  WF.isRegisteredFormat = function (t) {
    return !!uEe[t];
  };
  WF.registerFormat("zip", P$n());
  WF.registerFormat("tar", cjn());
  WF.registerFormat("json", fjn());
  pjn.exports = WF;
});