/**
 * @module wJr
 * @category utils/oop
 * @label oop
 * @position 412 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wJr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wJr = T((BB) => {
  "use strict";
  Object.defineProperty(BB, "__esModule", { value: !0 });
  BB.ModuleNameTrie = BB.ModuleNameSeparator = void 0;
  BB.ModuleNameSeparator = "/";
  var oFe = class {
      hooks = [];
      children = new Map();
    },
    kwt = class {
      _trie = new oFe();
      _counter = 0;
      insert(e) {
        let r = this._trie;
        for (let n of e.moduleName.split(BB.ModuleNameSeparator)) {
          let o = r.children.get(n);
          (o || ((o = new oFe()), r.children.set(n, o)), (r = o));
        }
        r.hooks.push({ hook: e, insertedId: this._counter++ });
      }
      search(e, { maintainInsertionOrder: r, fullOnly: n } = {}) {
        let o = this._trie,
          s = [],
          a = !0;
        for (let u of e.split(BB.ModuleNameSeparator)) {
          let c = o.children.get(u);
          if (!c) {
            a = !1;
            break;
          }
          (n || s.push(...c.hooks), (o = c));
        }
        return (
          n && a && s.push(...o.hooks),
          s.length === 0
            ? []
            : s.length === 1
              ? [s[0].hook]
              : (r && s.sort((u, c) => u.insertedId - c.insertedId), s.map(({ hook: u }) => u))
        );
      }
    };
  BB.ModuleNameTrie = kwt;
});