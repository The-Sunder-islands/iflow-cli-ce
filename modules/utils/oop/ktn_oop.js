/**
 * @module ktn
 * @category utils/oop
 * @label oop
 * @position 517 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ktn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ktn = T((AIt) => {
  "use strict";
  Object.defineProperty(AIt, "__esModule", { value: !0 });
  AIt.setup = PGo;
  var OGo = VC(),
    NGo = pq(),
    bIt = class {
      constructor(e, r, n) {
        ((this.listener = r), (this.hasReturnedResult = !1), (this.endpoints = []));
        let o;
        (e.authority === "" ? (o = "/" + e.path) : (o = e.path), (this.endpoints = [{ addresses: [{ path: o }] }]));
      }
      updateResolution() {
        this.hasReturnedResult ||
          ((this.hasReturnedResult = !0),
          process.nextTick(this.listener, (0, NGo.statusOrFromValue)(this.endpoints), {}, null, ""));
      }
      destroy() {
        this.hasReturnedResult = !1;
      }
      static getDefaultAuthority(e) {
        return "localhost";
      }
    };
  function PGo() {
    (0, OGo.registerResolver)("unix", bIt);
  }
});