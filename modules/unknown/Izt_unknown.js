/**
 * @module Izt
 * @category unknown
 * @label unknown
 * @position 1137 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Izt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Izt = T((Rbc, fDn) => {
  var Dzt = class {
    constructor(e) {
      this.model = e || {};
    }
    add(e, r) {
      return (this.model[e] = r);
    }
    find(e) {
      return this.model[e];
    }
    remove(e) {
      this.model[e] = void 0;
    }
  };
  fDn.exports = Dzt;
});