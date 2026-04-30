/**
 * @module Ove
 * @category app/core
 * @label iflow-core
 * @position 1485 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ove) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ove = T((Svc, gKn) => {
  "use strict";
  var nsa = Ae("node:events"),
    isa = kve(),
    osa = (t) => (e, r) => t(e, isa.wrap(r)),
    ysr = class extends nsa {
      dispatch() {
        throw new Error("not implemented");
      }
      close() {
        throw new Error("not implemented");
      }
      destroy() {
        throw new Error("not implemented");
      }
      compose(...e) {
        let r = Array.isArray(e[0]) ? e[0] : e,
          n = this.dispatch.bind(this);
        for (let o of r)
          if (o != null) {
            if (typeof o != "function")
              throw new TypeError(`invalid interceptor, expected function received ${typeof o}`);
            if (((n = o(n)), (n = osa(n)), n == null || typeof n != "function" || n.length !== 2))
              throw new TypeError("invalid interceptor");
          }
        return new Proxy(this, { get: (o, s) => (s === "dispatch" ? n : o[s]) });
      }
    };
  gKn.exports = ysr;
});