/**
 * @module IKt
 * @category app/core
 * @label iflow-core
 * @position 1207 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (IKt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class extends
 * Features: esbuild module exports: IKt
 * === End semantic info ===
 */


var IKt = T((KAc, jRn) => {
  var wks = Kr(),
    TKt = eA(),
    xks = $Rn(),
    DKt = class extends wks {
      constructor(e) {
        (super(), (this.maxItems = e && e.maxItems), (this.map = { c: new xks() }));
      }
      get tag() {
        return "row";
      }
      prepare(e, r) {
        let n = r.styles.addStyleModel(e.style);
        n && (e.styleId = n);
        let o = this.map.c;
        e.cells.forEach((s) => {
          o.prepare(s, r);
        });
      }
      render(e, r, n) {
        (e.openNode("row"),
          e.addAttribute("r", r.number),
          r.height && (e.addAttribute("ht", r.height), e.addAttribute("customHeight", "1")),
          r.hidden && e.addAttribute("hidden", "1"),
          r.min > 0 && r.max > 0 && r.min <= r.max && e.addAttribute("spans", `${r.min}:${r.max}`),
          r.styleId && (e.addAttribute("s", r.styleId), e.addAttribute("customFormat", "1")),
          e.addAttribute("x14ac:dyDescent", "0.25"),
          r.outlineLevel && e.addAttribute("outlineLevel", r.outlineLevel),
          r.collapsed && e.addAttribute("collapsed", "1"));
        let o = this.map.c;
        (r.cells.forEach((s) => {
          o.render(e, s, n);
        }),
          e.closeNode());
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        if (e.name === "row") {
          this.numRowsSeen += 1;
          let r = e.attributes.spans ? e.attributes.spans.split(":").map((o) => parseInt(o, 10)) : [void 0, void 0],
            n = (this.model = { number: parseInt(e.attributes.r, 10), min: r[0], max: r[1], cells: [] });
          return (
            e.attributes.s && (n.styleId = parseInt(e.attributes.s, 10)),
            TKt.parseBoolean(e.attributes.hidden) && (n.hidden = !0),
            TKt.parseBoolean(e.attributes.bestFit) && (n.bestFit = !0),
            e.attributes.ht && (n.height = parseFloat(e.attributes.ht)),
            e.attributes.outlineLevel && (n.outlineLevel = parseInt(e.attributes.outlineLevel, 10)),
            TKt.parseBoolean(e.attributes.collapsed) && (n.collapsed = !0),
            !0
          );
        }
        return ((this.parser = this.map[e.name]), this.parser ? (this.parser.parseOpen(e), !0) : !1);
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        if (this.parser) {
          if (!this.parser.parseClose(e)) {
            if ((this.model.cells.push(this.parser.model), this.maxItems && this.model.cells.length > this.maxItems))
              throw new Error(`Max column count (${this.maxItems}) exceeded`);
            this.parser = void 0;
          }
          return !0;
        }
        return !1;
      }
      reconcile(e, r) {
        ((e.style = e.styleId ? r.styles.getStyleModel(e.styleId) : {}), e.styleId !== void 0 && (e.styleId = void 0));
        let n = this.map.c;
        e.cells.forEach((o) => {
          n.reconcile(o, r);
        });
      }
    };
  jRn.exports = DKt;
});