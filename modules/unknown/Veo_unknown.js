/**
 * @module Veo
 * @category unknown
 * @label unknown
 * @position 1951 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Veo) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Veo = T((Lxl, Heo) => {
  "use strict";
  var UEr = class {
    constructor() {
      ((this.max = 1e3), (this.map = new Map()));
    }
    get(e) {
      let r = this.map.get(e);
      if (r !== void 0) return (this.map.delete(e), this.map.set(e, r), r);
    }
    delete(e) {
      return this.map.delete(e);
    }
    set(e, r) {
      if (!this.delete(e) && r !== void 0) {
        if (this.map.size >= this.max) {
          let o = this.map.keys().next().value;
          this.delete(o);
        }
        this.map.set(e, r);
      }
      return this;
    }
  };
  Heo.exports = UEr;
});