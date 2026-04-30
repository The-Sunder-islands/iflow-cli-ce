/**
 * @module wtt
 * @category utils/oop
 * @label oop
 * @position 1303 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wtt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wtt = T((Stt) => {
  "use strict";
  Object.defineProperty(Stt, "__esModule", { value: !0 });
  Stt.ColumnFormatter = void 0;
  var CZt = class {
    constructor(e) {
      e.trim
        ? (this.format = (r) => r.trim())
        : e.ltrim
          ? (this.format = (r) => r.trimLeft())
          : e.rtrim
            ? (this.format = (r) => r.trimRight())
            : (this.format = (r) => r);
    }
  };
  Stt.ColumnFormatter = CZt;
});