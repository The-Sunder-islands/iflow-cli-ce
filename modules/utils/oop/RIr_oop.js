/**
 * @module RIr
 * @category utils/oop
 * @label oop
 * @position 40 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (RIr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var RIr = T((ACu, Xhe) => {
  "use strict";
  var d_ = aIr(),
    IIr = uIr(),
    DIr = TIr(),
    h0 = IIr.implSymbol;
  function wh(t) {
    if (!this || this[h0] || !(this instanceof wh))
      throw new TypeError(
        "Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function.",
      );
    if (arguments.length < 1)
      throw new TypeError("Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.");
    let e = [];
    for (let r = 0; r < arguments.length && r < 2; ++r) e[r] = arguments[r];
    ((e[0] = d_.USVString(e[0])), e[1] !== void 0 && (e[1] = d_.USVString(e[1])), Xhe.exports.setup(this, e));
  }
  wh.prototype.toJSON = function () {
    if (!this || !Xhe.exports.is(this)) throw new TypeError("Illegal invocation");
    let e = [];
    for (let r = 0; r < arguments.length && r < 0; ++r) e[r] = arguments[r];
    return this[h0].toJSON.apply(this[h0], e);
  };
  Object.defineProperty(wh.prototype, "href", {
    get() {
      return this[h0].href;
    },
    set(t) {
      ((t = d_.USVString(t)), (this[h0].href = t));
    },
    enumerable: !0,
    configurable: !0,
  });
  wh.prototype.toString = function () {
    if (!this || !Xhe.exports.is(this)) throw new TypeError("Illegal invocation");
    return this.href;
  };
  Object.defineProperty(wh.prototype, "origin", {
    get() {
      return this[h0].origin;
    },
    enumerable: !0,
    configurable: !0,
  });
  Object.defineProperty(wh.prototype, "protocol", {
    get() {
      return this[h0].protocol;
    },
    set(t) {
      ((t = d_.USVString(t)), (this[h0].protocol = t));
    },
    enumerable: !0,
    configurable: !0,
  });
  Object.defineProperty(wh.prototype, "username", {
    get() {
      return this[h0].username;
    },
    set(t) {
      ((t = d_.USVString(t)), (this[h0].username = t));
    },
    enumerable: !0,
    configurable: !0,
  });
  Object.defineProperty(wh.prototype, "password", {
    get() {
      return this[h0].password;
    },
    set(t) {
      ((t = d_.USVString(t)), (this[h0].password = t));
    },
    enumerable: !0,
    configurable: !0,
  });
  Object.defineProperty(wh.prototype, "host", {
    get() {
      return this[h0].host;
    },
    set(t) {
      ((t = d_.USVString(t)), (this[h0].host = t));
    },
    enumerable: !0,
    configurable: !0,
  });
  Object.defineProperty(wh.prototype, "hostname", {
    get() {
      return this[h0].hostname;
    },
    set(t) {
      ((t = d_.USVString(t)), (this[h0].hostname = t));
    },
    enumerable: !0,
    configurable: !0,
  });
  Object.defineProperty(wh.prototype, "port", {
    get() {
      return this[h0].port;
    },
    set(t) {
      ((t = d_.USVString(t)), (this[h0].port = t));
    },
    enumerable: !0,
    configurable: !0,
  });
  Object.defineProperty(wh.prototype, "pathname", {
    get() {
      return this[h0].pathname;
    },
    set(t) {
      ((t = d_.USVString(t)), (this[h0].pathname = t));
    },
    enumerable: !0,
    configurable: !0,
  });
  Object.defineProperty(wh.prototype, "search", {
    get() {
      return this[h0].search;
    },
    set(t) {
      ((t = d_.USVString(t)), (this[h0].search = t));
    },
    enumerable: !0,
    configurable: !0,
  });
  Object.defineProperty(wh.prototype, "hash", {
    get() {
      return this[h0].hash;
    },
    set(t) {
      ((t = d_.USVString(t)), (this[h0].hash = t));
    },
    enumerable: !0,
    configurable: !0,
  });
  Xhe.exports = {
    is(t) {
      return !!t && t[h0] instanceof DIr.implementation;
    },
    create(t, e) {
      let r = Object.create(wh.prototype);
      return (this.setup(r, t, e), r);
    },
    setup(t, e, r) {
      (r || (r = {}), (r.wrapper = t), (t[h0] = new DIr.implementation(e, r)), (t[h0][IIr.wrapperSymbol] = t));
    },
    interface: wh,
    expose: { Window: { URL: wh }, Worker: { URL: wh } },
  };
});