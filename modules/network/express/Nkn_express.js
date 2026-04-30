/**
 * @module Nkn
 * @category network/express
 * @label express
 * @position 1235 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Nkn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Nkn = T((w2c, Okn) => {
  var iS = Kr(),
    COs = W8(),
    kkn = Jk(),
    SOs = Ekn(),
    wOs = Skn(),
    xOs = xkn(),
    TOs = Dkn(),
    DOs = Rkn(),
    IOs = { "3Triangles": !0, "3Stars": !0, "5Boxes": !0 },
    ROs = (t) => {
      if (t.formulae && t.formulae[0]) return t.formulae[0];
      let e = new kkn(t.ref),
        { tl: r } = e;
      switch (t.operator) {
        case "containsText":
          return `NOT(ISERROR(SEARCH("${t.text}",${r})))`;
        case "containsBlanks":
          return `LEN(TRIM(${r}))=0`;
        case "notContainsBlanks":
          return `LEN(TRIM(${r}))>0`;
        case "containsErrors":
          return `ISERROR(${r})`;
        case "notContainsErrors":
          return `NOT(ISERROR(${r}))`;
        default:
          return;
      }
    },
    kOs = (t) => {
      if (t.formulae && t.formulae[0]) return t.formulae[0];
      let e = new kkn(t.ref),
        { tl: r } = e;
      switch (t.timePeriod) {
        case "thisWeek":
          return `AND(TODAY()-ROUNDDOWN(${r},0)<=WEEKDAY(TODAY())-1,ROUNDDOWN(${r},0)-TODAY()<=7-WEEKDAY(TODAY()))`;
        case "lastWeek":
          return `AND(TODAY()-ROUNDDOWN(${r},0)>=(WEEKDAY(TODAY())),TODAY()-ROUNDDOWN(${r},0)<(WEEKDAY(TODAY())+7))`;
        case "nextWeek":
          return `AND(ROUNDDOWN(${r},0)-TODAY()>(7-WEEKDAY(TODAY())),ROUNDDOWN(${r},0)-TODAY()<(15-WEEKDAY(TODAY())))`;
        case "yesterday":
          return `FLOOR(${r},1)=TODAY()-1`;
        case "today":
          return `FLOOR(${r},1)=TODAY()`;
        case "tomorrow":
          return `FLOOR(${r},1)=TODAY()+1`;
        case "last7Days":
          return `AND(TODAY()-FLOOR(${r},1)<=6,FLOOR(${r},1)<=TODAY())`;
        case "lastMonth":
          return `AND(MONTH(${r})=MONTH(EDATE(TODAY(),0-1)),YEAR(${r})=YEAR(EDATE(TODAY(),0-1)))`;
        case "thisMonth":
          return `AND(MONTH(${r})=MONTH(TODAY()),YEAR(${r})=YEAR(TODAY()))`;
        case "nextMonth":
          return `AND(MONTH(${r})=MONTH(EDATE(TODAY(),0+1)),YEAR(${r})=YEAR(EDATE(TODAY(),0+1)))`;
        default:
          return;
      }
    },
    OOs = (t) => {
      let { type: e, operator: r } = t;
      switch (e) {
        case "containsText":
        case "containsBlanks":
        case "notContainsBlanks":
        case "containsErrors":
        case "notContainsErrors":
          return { type: "containsText", operator: e };
        default:
          return { type: e, operator: r };
      }
    },
    vJt = class t extends COs {
      constructor() {
        (super(),
          (this.map = {
            dataBar: (this.databarXform = new SOs()),
            extLst: (this.extLstRefXform = new wOs()),
            formula: (this.formulaXform = new xOs()),
            colorScale: (this.colorScaleXform = new TOs()),
            iconSet: (this.iconSetXform = new DOs()),
          }));
      }
      get tag() {
        return "cfRule";
      }
      static isPrimitive(e) {
        return !(e.type === "iconSet" && (e.custom || IOs[e.iconSet]));
      }
      render(e, r) {
        switch (r.type) {
          case "expression":
            this.renderExpression(e, r);
            break;
          case "cellIs":
            this.renderCellIs(e, r);
            break;
          case "top10":
            this.renderTop10(e, r);
            break;
          case "aboveAverage":
            this.renderAboveAverage(e, r);
            break;
          case "dataBar":
            this.renderDataBar(e, r);
            break;
          case "colorScale":
            this.renderColorScale(e, r);
            break;
          case "iconSet":
            this.renderIconSet(e, r);
            break;
          case "containsText":
            this.renderText(e, r);
            break;
          case "timePeriod":
            this.renderTimePeriod(e, r);
            break;
        }
      }
      renderExpression(e, r) {
        (e.openNode(this.tag, { type: "expression", dxfId: r.dxfId, priority: r.priority }),
          this.formulaXform.render(e, r.formulae[0]),
          e.closeNode());
      }
      renderCellIs(e, r) {
        (e.openNode(this.tag, { type: "cellIs", dxfId: r.dxfId, priority: r.priority, operator: r.operator }),
          r.formulae.forEach((n) => {
            this.formulaXform.render(e, n);
          }),
          e.closeNode());
      }
      renderTop10(e, r) {
        e.leafNode(this.tag, {
          type: "top10",
          dxfId: r.dxfId,
          priority: r.priority,
          percent: iS.toBoolAttribute(r.percent, !1),
          bottom: iS.toBoolAttribute(r.bottom, !1),
          rank: iS.toIntValue(r.rank, 10, !0),
        });
      }
      renderAboveAverage(e, r) {
        e.leafNode(this.tag, {
          type: "aboveAverage",
          dxfId: r.dxfId,
          priority: r.priority,
          aboveAverage: iS.toBoolAttribute(r.aboveAverage, !0),
        });
      }
      renderDataBar(e, r) {
        (e.openNode(this.tag, { type: "dataBar", priority: r.priority }),
          this.databarXform.render(e, r),
          this.extLstRefXform.render(e, r),
          e.closeNode());
      }
      renderColorScale(e, r) {
        (e.openNode(this.tag, { type: "colorScale", priority: r.priority }),
          this.colorScaleXform.render(e, r),
          e.closeNode());
      }
      renderIconSet(e, r) {
        t.isPrimitive(r) &&
          (e.openNode(this.tag, { type: "iconSet", priority: r.priority }),
          this.iconSetXform.render(e, r),
          e.closeNode());
      }
      renderText(e, r) {
        e.openNode(this.tag, {
          type: r.operator,
          dxfId: r.dxfId,
          priority: r.priority,
          operator: iS.toStringAttribute(r.operator, "containsText"),
        });
        let n = ROs(r);
        (n && this.formulaXform.render(e, n), e.closeNode());
      }
      renderTimePeriod(e, r) {
        e.openNode(this.tag, { type: "timePeriod", dxfId: r.dxfId, priority: r.priority, timePeriod: r.timePeriod });
        let n = kOs(r);
        (n && this.formulaXform.render(e, n), e.closeNode());
      }
      createNewModel({ attributes: e }) {
        return {
          ...OOs(e),
          dxfId: iS.toIntValue(e.dxfId),
          priority: iS.toIntValue(e.priority),
          timePeriod: e.timePeriod,
          percent: iS.toBoolValue(e.percent),
          bottom: iS.toBoolValue(e.bottom),
          rank: iS.toIntValue(e.rank),
          aboveAverage: iS.toBoolValue(e.aboveAverage),
        };
      }
      onParserClose(e, r) {
        switch (e) {
          case "dataBar":
          case "extLst":
          case "colorScale":
          case "iconSet":
            Object.assign(this.model, r.model);
            break;
          case "formula":
            ((this.model.formulae = this.model.formulae || []), this.model.formulae.push(r.model));
            break;
        }
      }
    };
  Okn.exports = vJt;
});