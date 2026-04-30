/**
 * @module EHr
 * @category utils/events
 * @label events
 * @position 165 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (EHr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var EHr = T((RRu, _Hr) => {
  "use strict";
  _Hr.exports = age;
  var Fvt = _x();
  (age.prototype = Object.create(Fvt.EventEmitter.prototype)).constructor = age;
  function age(t, e, r) {
    if (typeof t != "function") throw TypeError("rpcImpl must be a function");
    (Fvt.EventEmitter.call(this), (this.rpcImpl = t), (this.requestDelimited = !!e), (this.responseDelimited = !!r));
  }
  age.prototype.rpcCall = function t(e, r, n, o, s) {
    if (!o) throw TypeError("request must be specified");
    var a = this;
    if (!s) return Fvt.asPromise(t, a, e, r, n, o);
    if (!a.rpcImpl) {
      setTimeout(function () {
        s(Error("already ended"));
      }, 0);
      return;
    }
    try {
      return a.rpcImpl(e, r[a.requestDelimited ? "encodeDelimited" : "encode"](o).finish(), function (c, m) {
        if (c) return (a.emit("error", c, e), s(c));
        if (m === null) {
          a.end(!0);
          return;
        }
        if (!(m instanceof n))
          try {
            m = n[a.responseDelimited ? "decodeDelimited" : "decode"](m);
          } catch (d) {
            return (a.emit("error", d, e), s(d));
          }
        return (a.emit("data", m, e), s(null, m));
      });
    } catch (u) {
      (a.emit("error", u, e),
        setTimeout(function () {
          s(u);
        }, 0));
      return;
    }
  };
  age.prototype.end = function (e) {
    return (this.rpcImpl && (e || this.rpcImpl(null, null, null), (this.rpcImpl = null), this.emit("end").off()), this);
  };
});