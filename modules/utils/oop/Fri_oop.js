/**
 * @module Fri
 * @category utils/oop
 * @label oop
 * @position 1563 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Fri) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Fri = T((e4c, Mri) => {
  "use strict";
  var { Cache: Zot } = Lri(),
    { webidl: dA } = jg(),
    { kEnumerableProperty: TCe } = ks(),
    { kConstruct: DCe } = n0(),
    est = class t {
      #e = new Map();
      constructor() {
        (arguments[0] !== DCe && dA.illegalConstructor(), dA.util.markAsUncloneable(this));
      }
      async match(e, r = {}) {
        if (
          (dA.brandCheck(this, t),
          dA.argumentLengthCheck(arguments, 1, "CacheStorage.match"),
          (e = dA.converters.RequestInfo(e)),
          (r = dA.converters.MultiCacheQueryOptions(r)),
          r.cacheName != null)
        ) {
          if (this.#e.has(r.cacheName)) {
            let n = this.#e.get(r.cacheName);
            return await new Zot(DCe, n).match(e, r);
          }
        } else
          for (let n of this.#e.values()) {
            let s = await new Zot(DCe, n).match(e, r);
            if (s !== void 0) return s;
          }
      }
      async has(e) {
        dA.brandCheck(this, t);
        let r = "CacheStorage.has";
        return (
          dA.argumentLengthCheck(arguments, 1, r),
          (e = dA.converters.DOMString(e, r, "cacheName")),
          this.#e.has(e)
        );
      }
      async open(e) {
        dA.brandCheck(this, t);
        let r = "CacheStorage.open";
        if (
          (dA.argumentLengthCheck(arguments, 1, r), (e = dA.converters.DOMString(e, r, "cacheName")), this.#e.has(e))
        ) {
          let o = this.#e.get(e);
          return new Zot(DCe, o);
        }
        let n = [];
        return (this.#e.set(e, n), new Zot(DCe, n));
      }
      async delete(e) {
        dA.brandCheck(this, t);
        let r = "CacheStorage.delete";
        return (
          dA.argumentLengthCheck(arguments, 1, r),
          (e = dA.converters.DOMString(e, r, "cacheName")),
          this.#e.delete(e)
        );
      }
      async keys() {
        return (dA.brandCheck(this, t), [...this.#e.keys()]);
      }
    };
  Object.defineProperties(est.prototype, {
    [Symbol.toStringTag]: { value: "CacheStorage", configurable: !0 },
    match: TCe,
    has: TCe,
    open: TCe,
    delete: TCe,
    keys: TCe,
  });
  Mri.exports = { CacheStorage: est };
});
var $ri = T((t4c, Uri) => {
  "use strict";
  Uri.exports = { maxAttributeValueSize: 1024, maxNameValuePairSize: 4096 };
});