/**
 * @module bjn
 * @category unknown
 * @label unknown
 * @position 1395 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (bjn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var bjn = T((V9c, gjn) => {
  var _rr = class {
    constructor() {
      ((this._values = []), (this._totalRefs = 0), (this._hash = Object.create(null)));
    }
    get count() {
      return this._values.length;
    }
    get values() {
      return this._values;
    }
    get totalRefs() {
      return this._totalRefs;
    }
    getString(e) {
      return this._values[e];
    }
    add(e) {
      let r = this._hash[e];
      return (r === void 0 && ((r = this._hash[e] = this._values.length), this._values.push(e)), this._totalRefs++, r);
    }
  };
  gjn.exports = _rr;
});