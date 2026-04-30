/**
 * @module nBe
 * @category utils/oop
 * @label oop
 * @position 242 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (nBe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var nBe = T((zte) => {
  "use strict";
  Object.defineProperty(zte, "__esModule", { value: !0 });
  zte.ExactPredicate = zte.PatternPredicate = void 0;
  var mIo = /[\^$\\.+?()[\]{}|]/g,
    i4t = class t {
      _matchAll;
      _regexp;
      constructor(e) {
        e === "*"
          ? ((this._matchAll = !0), (this._regexp = /.*/))
          : ((this._matchAll = !1), (this._regexp = new RegExp(t.escapePattern(e))));
      }
      match(e) {
        return this._matchAll ? !0 : this._regexp.test(e);
      }
      static escapePattern(e) {
        return `^${e.replace(mIo, "\\$&").replace("*", ".*")}$`;
      }
      static hasWildcard(e) {
        return e.includes("*");
      }
    };
  zte.PatternPredicate = i4t;
  var o4t = class {
    _matchAll;
    _pattern;
    constructor(e) {
      ((this._matchAll = e === void 0), (this._pattern = e));
    }
    match(e) {
      return !!(this._matchAll || e === this._pattern);
    }
  };
  zte.ExactPredicate = o4t;
});