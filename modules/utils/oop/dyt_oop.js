/**
 * @module dyt
 * @category utils/oop
 * @label oop
 * @position 83 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dyt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dyt = T((Lke) => {
  "use strict";
  Object.defineProperty(Lke, "__esModule", { value: !0 });
  Lke.LoginTicket = void 0;
  var myt = class {
    constructor(e, r) {
      ((this.envelope = e), (this.payload = r));
    }
    getEnvelope() {
      return this.envelope;
    }
    getPayload() {
      return this.payload;
    }
    getUserId() {
      let e = this.getPayload();
      return e && e.sub ? e.sub : null;
    }
    getAttributes() {
      return { envelope: this.getEnvelope(), payload: this.getPayload() };
    }
  };
  Lke.LoginTicket = myt;
});