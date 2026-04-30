/**
 * @module EUe
 * @category utils/oop
 * @label oop
 * @position 492 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (EUe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var EUe = T((Vre) => {
  "use strict";
  Object.defineProperty(Vre, "__esModule", { value: !0 });
  Vre.FilterStackFactory = Vre.FilterStack = void 0;
  var _Ue = class {
    constructor(e) {
      this.filters = e;
    }
    sendMetadata(e) {
      let r = e;
      for (let n = 0; n < this.filters.length; n++) r = this.filters[n].sendMetadata(r);
      return r;
    }
    receiveMetadata(e) {
      let r = e;
      for (let n = this.filters.length - 1; n >= 0; n--) r = this.filters[n].receiveMetadata(r);
      return r;
    }
    sendMessage(e) {
      let r = e;
      for (let n = 0; n < this.filters.length; n++) r = this.filters[n].sendMessage(r);
      return r;
    }
    receiveMessage(e) {
      let r = e;
      for (let n = this.filters.length - 1; n >= 0; n--) r = this.filters[n].receiveMessage(r);
      return r;
    }
    receiveTrailers(e) {
      let r = e;
      for (let n = this.filters.length - 1; n >= 0; n--) r = this.filters[n].receiveTrailers(r);
      return r;
    }
    push(e) {
      this.filters.unshift(...e);
    }
    getFilters() {
      return this.filters;
    }
  };
  Vre.FilterStack = _Ue;
  var JTt = class t {
    constructor(e) {
      this.factories = e;
    }
    push(e) {
      this.factories.unshift(...e);
    }
    clone() {
      return new t([...this.factories]);
    }
    createFilter() {
      return new _Ue(this.factories.map((e) => e.createFilter()));
    }
  };
  Vre.FilterStackFactory = JTt;
});