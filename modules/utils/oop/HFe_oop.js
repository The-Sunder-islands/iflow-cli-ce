/**
 * @module HFe
 * @category utils/oop
 * @label oop
 * @position 455 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (HFe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var HFe = T((HLu, uZr) => {
  "use strict";
  uZr.exports = yq;
  var Zxt = GB();
  ((yq.prototype = Object.create(Zxt.prototype)).constructor = yq).className = "Method";
  var Fre = Bh();
  function yq(t, e, r, n, o, s, a, u, c) {
    if (
      (Fre.isObject(o) ? ((a = o), (o = s = void 0)) : Fre.isObject(s) && ((a = s), (s = void 0)),
      !(e === void 0 || Fre.isString(e)))
    )
      throw TypeError("type must be a string");
    if (!Fre.isString(r)) throw TypeError("requestType must be a string");
    if (!Fre.isString(n)) throw TypeError("responseType must be a string");
    (Zxt.call(this, t, a),
      (this.type = e || "rpc"),
      (this.requestType = r),
      (this.requestStream = o ? !0 : void 0),
      (this.responseType = n),
      (this.responseStream = s ? !0 : void 0),
      (this.resolvedRequestType = null),
      (this.resolvedResponseType = null),
      (this.comment = u),
      (this.parsedOptions = c));
  }
  yq.fromJSON = function (e, r) {
    return new yq(
      e,
      r.type,
      r.requestType,
      r.responseType,
      r.requestStream,
      r.responseStream,
      r.options,
      r.comment,
      r.parsedOptions,
    );
  };
  yq.prototype.toJSON = function (e) {
    var r = e ? !!e.keepComments : !1;
    return Fre.toObject([
      "type",
      (this.type !== "rpc" && this.type) || void 0,
      "requestType",
      this.requestType,
      "requestStream",
      this.requestStream,
      "responseType",
      this.responseType,
      "responseStream",
      this.responseStream,
      "options",
      this.options,
      "comment",
      r ? this.comment : void 0,
      "parsedOptions",
      this.parsedOptions,
    ]);
  };
  yq.prototype.resolve = function () {
    return this.resolved
      ? this
      : ((this.resolvedRequestType = this.parent.lookupType(this.requestType)),
        (this.resolvedResponseType = this.parent.lookupType(this.responseType)),
        Zxt.prototype.resolve.call(this));
  };
});