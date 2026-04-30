/**
 * @module TJr
 * @category utils/oop
 * @label oop
 * @position 413 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (TJr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var TJr = T((sFe) => {
  "use strict";
  Object.defineProperty(sFe, "__esModule", { value: !0 });
  sFe.RequireInTheMiddleSingleton = void 0;
  var WPo = Rwt(),
    xJr = Ae("path"),
    Owt = wJr(),
    zPo = ["afterEach", "after", "beforeEach", "before", "describe", "it"].every((t) => typeof global[t] == "function"),
    Nwt = class t {
      _moduleNameTrie = new Owt.ModuleNameTrie();
      static _instance;
      constructor() {
        this._initialize();
      }
      _initialize() {
        new WPo.Hook(null, { internals: !0 }, (e, r, n) => {
          let o = YPo(r),
            s = this._moduleNameTrie.search(o, { maintainInsertionOrder: !0, fullOnly: n === void 0 });
          for (let { onRequire: a } of s) e = a(e, r, n);
          return e;
        });
      }
      register(e, r) {
        let n = { moduleName: e, onRequire: r };
        return (this._moduleNameTrie.insert(n), n);
      }
      static getInstance() {
        return zPo ? new t() : (this._instance = this._instance ?? new t());
      }
    };
  sFe.RequireInTheMiddleSingleton = Nwt;
  function YPo(t) {
    return xJr.sep !== Owt.ModuleNameSeparator ? t.split(xJr.sep).join(Owt.ModuleNameSeparator) : t;
  }
});