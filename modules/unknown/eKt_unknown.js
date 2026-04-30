/**
 * @module eKt
 * @category unknown
 * @label unknown
 * @position 1182 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (eKt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var eKt = T((SAc, V7n) => {
  var mRs = Kr(),
    H7n = {
      boolean(t, e) {
        return t === void 0 ? e : t;
      },
    },
    ZYt = class extends mRs {
      get tag() {
        return "protection";
      }
      render(e, r) {
        (e.addRollback(), e.openNode("protection"));
        let n = !1;
        function o(s, a) {
          a !== void 0 && (e.addAttribute(s, a), (n = !0));
        }
        (o("locked", H7n.boolean(r.locked, !0) ? void 0 : "0"),
          o("hidden", H7n.boolean(r.hidden, !1) ? "1" : void 0),
          e.closeNode(),
          n ? e.commit() : e.rollback());
      }
      parseOpen(e) {
        let r = { locked: e.attributes.locked !== "0", hidden: e.attributes.hidden === "1" },
          n = !r.locked || r.hidden;
        this.model = n ? r : null;
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  V7n.exports = ZYt;
});