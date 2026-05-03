/**
 * @module vF
 * @category app/core
 * @label iflow-core
 * @position 1171 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vF) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class extends
 * Features: esbuild module exports: vF
 * === End semantic info ===
 */


var vF = T((dAc, x7n) => {
  var Y7s = Kr(),
    FYt = class extends Y7s {
      constructor(e) {
        (super(),
          (this.tag = e.tag),
          (this.always = !!e.always),
          (this.count = e.count),
          (this.empty = e.empty),
          (this.$count = e.$count || "count"),
          (this.$ = e.$),
          (this.childXform = e.childXform),
          (this.maxItems = e.maxItems));
      }
      prepare(e, r) {
        let { childXform: n } = this;
        e &&
          e.forEach((o, s) => {
            ((r.index = s), n.prepare(o, r));
          });
      }
      render(e, r) {
        if (this.always || (r && r.length)) {
          (e.openNode(this.tag, this.$), this.count && e.addAttribute(this.$count, (r && r.length) || 0));
          let { childXform: n } = this;
          ((r || []).forEach((o, s) => {
            n.render(e, o, s);
          }),
            e.closeNode());
        } else this.empty && e.leafNode(this.tag);
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case this.tag:
            return ((this.model = []), !0);
          default:
            return this.childXform.parseOpen(e) ? ((this.parser = this.childXform), !0) : !1;
        }
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        if (this.parser) {
          if (
            !this.parser.parseClose(e) &&
            (this.model.push(this.parser.model),
            (this.parser = void 0),
            this.maxItems && this.model.length > this.maxItems)
          )
            throw new Error(`Max ${this.childXform.tag} count (${this.maxItems}) exceeded`);
          return !0;
        }
        return !1;
      }
      reconcile(e, r) {
        if (e) {
          let { childXform: n } = this;
          e.forEach((o) => {
            n.reconcile(o, r);
          });
        }
      }
    };
  x7n.exports = FYt;
});