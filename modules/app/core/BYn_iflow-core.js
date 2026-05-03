/**
 * @module BYn
 * @category app/core
 * @label iflow-core
 * @position 1479 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (BYn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class t
 * Features: esbuild module exports: BYn
 * === End semantic info ===
 */


var BYn = T((Avc, PYn) => {
  "use strict";
  var { wellknownHeaderNames: OYn, headerNameLowerCasedRecord: Zia } = xit(),
    csr = class t {
      value = null;
      left = null;
      middle = null;
      right = null;
      code;
      constructor(e, r, n) {
        if (n === void 0 || n >= e.length) throw new TypeError("Unreachable");
        if ((this.code = e.charCodeAt(n)) > 127) throw new TypeError("key must be ascii string");
        e.length !== ++n ? (this.middle = new t(e, r, n)) : (this.value = r);
      }
      add(e, r) {
        let n = e.length;
        if (n === 0) throw new TypeError("Unreachable");
        let o = 0,
          s = this;
        for (;;) {
          let a = e.charCodeAt(o);
          if (a > 127) throw new TypeError("key must be ascii string");
          if (s.code === a)
            if (n === ++o) {
              s.value = r;
              break;
            } else if (s.middle !== null) s = s.middle;
            else {
              s.middle = new t(e, r, o);
              break;
            }
          else if (s.code < a)
            if (s.left !== null) s = s.left;
            else {
              s.left = new t(e, r, o);
              break;
            }
          else if (s.right !== null) s = s.right;
          else {
            s.right = new t(e, r, o);
            break;
          }
        }
      }
      search(e) {
        let r = e.length,
          n = 0,
          o = this;
        for (; o !== null && n < r; ) {
          let s = e[n];
          for (s <= 90 && s >= 65 && (s |= 32); o !== null; ) {
            if (s === o.code) {
              if (r === ++n) return o;
              o = o.middle;
              break;
            }
            o = o.code < s ? o.left : o.right;
          }
        }
        return null;
      }
    },
    Tit = class {
      node = null;
      insert(e, r) {
        this.node === null ? (this.node = new csr(e, r, 0)) : this.node.add(e, r);
      }
      lookup(e) {
        return this.node?.search(e)?.value ?? null;
      }
    },
    NYn = new Tit();
  for (let t = 0; t < OYn.length; ++t) {
    let e = Zia[OYn[t]];
    NYn.insert(e, e);
  }
  PYn.exports = { TernarySearchTree: Tit, tree: NYn };
});