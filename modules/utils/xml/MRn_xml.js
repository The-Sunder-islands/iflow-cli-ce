/**
 * @module MRn
 * @category utils/xml
 * @label xml
 * @position 1206 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (MRn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var MRn = T((zAc, LRn) => {
  var NRn = f1(),
    _ks = Jk(),
    PRn = Pd(),
    BRn = tS(),
    wKt = class {
      constructor() {
        this.merges = {};
      }
      add(e) {
        if (this.merges[e.master]) this.merges[e.master].expandToAddress(e.address);
        else {
          let r = `${e.master}:${e.address}`;
          this.merges[e.master] = new _ks(r);
        }
      }
      get mergeCells() {
        return NRn.map(this.merges, (e) => e.range);
      }
      reconcile(e, r) {
        NRn.each(e, (n) => {
          let o = PRn.decode(n);
          for (let s = o.top; s <= o.bottom; s++) {
            let a = r[s - 1];
            for (let u = o.left; u <= o.right; u++) {
              let c = a.cells[u - 1];
              c
                ? c.type === BRn.ValueType.Merge && (c.master = o.tl)
                : (a.cells[u] = { type: BRn.ValueType.Null, address: PRn.encodeAddress(s, u) });
            }
          }
        });
      }
      getMasterAddress(e) {
        let r = this.hash[e];
        return r && r.tl;
      }
    };
  LRn.exports = wKt;
});
var $Rn = T((YAc, URn) => {
  var xF = eA(),
    Eks = Kr(),
    vks = Jk(),
    Ho = tS(),
    Cks = g_e();
  function FRn(t) {
    if (t == null) return Ho.ValueType.Null;
    if (t instanceof String || typeof t == "string") return Ho.ValueType.String;
    if (typeof t == "number") return Ho.ValueType.Number;
    if (typeof t == "boolean") return Ho.ValueType.Boolean;
    if (t instanceof Date) return Ho.ValueType.Date;
    if (t.text && t.hyperlink) return Ho.ValueType.Hyperlink;
    if (t.formula) return Ho.ValueType.Formula;
    if (t.error) return Ho.ValueType.Error;
    throw new Error("I could not understand type of value");
  }
  function Sks(t) {
    switch (t.type) {
      case Ho.ValueType.Formula:
        return FRn(t.result);
      default:
        return t.type;
    }
  }
  var xKt = class extends Eks {
    constructor() {
      (super(), (this.richTextXForm = new Cks()));
    }
    get tag() {
      return "c";
    }
    prepare(e, r) {
      let n = r.styles.addStyleModel(e.style || {}, Sks(e));
      switch ((n && (e.styleId = n), e.comment && r.comments.push({ ...e.comment, ref: e.address }), e.type)) {
        case Ho.ValueType.String:
        case Ho.ValueType.RichText:
          r.sharedStrings && (e.ssId = r.sharedStrings.add(e.value));
          break;
        case Ho.ValueType.Date:
          r.date1904 && (e.date1904 = !0);
          break;
        case Ho.ValueType.Hyperlink:
          (r.sharedStrings && e.text !== void 0 && e.text !== null && (e.ssId = r.sharedStrings.add(e.text)),
            r.hyperlinks.push({ address: e.address, target: e.hyperlink, tooltip: e.tooltip }));
          break;
        case Ho.ValueType.Merge:
          r.merges.add(e);
          break;
        case Ho.ValueType.Formula:
          if ((r.date1904 && (e.date1904 = !0), e.shareType === "shared" && (e.si = r.siFormulae++), e.formula))
            r.formulae[e.address] = e;
          else if (e.sharedFormula) {
            let o = r.formulae[e.sharedFormula];
            if (!o)
              throw new Error(`Shared Formula master must exist above and or left of clone for cell ${e.address}`);
            (o.si === void 0
              ? ((o.shareType = "shared"), (o.si = r.siFormulae++), (o.range = new vks(o.address, e.address)))
              : o.range && o.range.expandToAddress(e.address),
              (e.si = o.si));
          }
          break;
        default:
          break;
      }
    }
    renderFormula(e, r) {
      let n = null;
      switch (r.shareType) {
        case "shared":
          n = { t: "shared", ref: r.ref || r.range.range, si: r.si };
          break;
        case "array":
          n = { t: "array", ref: r.ref };
          break;
        default:
          r.si !== void 0 && (n = { t: "shared", si: r.si });
          break;
      }
      switch (FRn(r.result)) {
        case Ho.ValueType.Null:
          e.leafNode("f", n, r.formula);
          break;
        case Ho.ValueType.String:
          (e.addAttribute("t", "str"), e.leafNode("f", n, r.formula), e.leafNode("v", null, r.result));
          break;
        case Ho.ValueType.Number:
          (e.leafNode("f", n, r.formula), e.leafNode("v", null, r.result));
          break;
        case Ho.ValueType.Boolean:
          (e.addAttribute("t", "b"), e.leafNode("f", n, r.formula), e.leafNode("v", null, r.result ? 1 : 0));
          break;
        case Ho.ValueType.Error:
          (e.addAttribute("t", "e"), e.leafNode("f", n, r.formula), e.leafNode("v", null, r.result.error));
          break;
        case Ho.ValueType.Date:
          (e.leafNode("f", n, r.formula), e.leafNode("v", null, xF.dateToExcel(r.result, r.date1904)));
          break;
        default:
          throw new Error("I could not understand type of value");
      }
    }
    render(e, r) {
      if (!(r.type === Ho.ValueType.Null && !r.styleId)) {
        switch (
          (e.openNode("c"), e.addAttribute("r", r.address), r.styleId && e.addAttribute("s", r.styleId), r.type)
        ) {
          case Ho.ValueType.Null:
            break;
          case Ho.ValueType.Number:
            e.leafNode("v", null, r.value);
            break;
          case Ho.ValueType.Boolean:
            (e.addAttribute("t", "b"), e.leafNode("v", null, r.value ? "1" : "0"));
            break;
          case Ho.ValueType.Error:
            (e.addAttribute("t", "e"), e.leafNode("v", null, r.value.error));
            break;
          case Ho.ValueType.String:
          case Ho.ValueType.RichText:
            r.ssId !== void 0
              ? (e.addAttribute("t", "s"), e.leafNode("v", null, r.ssId))
              : r.value && r.value.richText
                ? (e.addAttribute("t", "inlineStr"),
                  e.openNode("is"),
                  r.value.richText.forEach((n) => {
                    this.richTextXForm.render(e, n);
                  }),
                  e.closeNode("is"))
                : (e.addAttribute("t", "str"), e.leafNode("v", null, r.value));
            break;
          case Ho.ValueType.Date:
            e.leafNode("v", null, xF.dateToExcel(r.value, r.date1904));
            break;
          case Ho.ValueType.Hyperlink:
            r.ssId !== void 0
              ? (e.addAttribute("t", "s"), e.leafNode("v", null, r.ssId))
              : (e.addAttribute("t", "str"), e.leafNode("v", null, r.text));
            break;
          case Ho.ValueType.Formula:
            this.renderFormula(e, r);
            break;
          case Ho.ValueType.Merge:
            break;
          default:
            break;
        }
        e.closeNode();
      }
    }
    parseOpen(e) {
      if (this.parser) return (this.parser.parseOpen(e), !0);
      switch (e.name) {
        case "c":
          return (
            (this.model = { address: e.attributes.r }),
            (this.t = e.attributes.t),
            e.attributes.s && (this.model.styleId = parseInt(e.attributes.s, 10)),
            !0
          );
        case "f":
          return (
            (this.currentNode = "f"),
            (this.model.si = e.attributes.si),
            (this.model.shareType = e.attributes.t),
            (this.model.ref = e.attributes.ref),
            !0
          );
        case "v":
          return ((this.currentNode = "v"), !0);
        case "t":
          return ((this.currentNode = "t"), !0);
        case "r":
          return ((this.parser = this.richTextXForm), this.parser.parseOpen(e), !0);
        default:
          return !1;
      }
    }
    parseText(e) {
      if (this.parser) {
        this.parser.parseText(e);
        return;
      }
      switch (this.currentNode) {
        case "f":
          this.model.formula = this.model.formula ? this.model.formula + e : e;
          break;
        case "v":
        case "t":
          this.model.value && this.model.value.richText
            ? (this.model.value.richText.text = this.model.value.richText.text ? this.model.value.richText.text + e : e)
            : (this.model.value = this.model.value ? this.model.value + e : e);
          break;
        default:
          break;
      }
    }
    parseClose(e) {
      switch (e) {
        case "c": {
          let { model: r } = this;
          if (r.formula || r.shareType)
            ((r.type = Ho.ValueType.Formula),
              r.value &&
                (this.t === "str"
                  ? (r.result = xF.xmlDecode(r.value))
                  : this.t === "b"
                    ? (r.result = parseInt(r.value, 10) !== 0)
                    : this.t === "e"
                      ? (r.result = { error: r.value })
                      : (r.result = parseFloat(r.value)),
                (r.value = void 0)));
          else if (r.value !== void 0)
            switch (this.t) {
              case "s":
                ((r.type = Ho.ValueType.String), (r.value = parseInt(r.value, 10)));
                break;
              case "str":
                ((r.type = Ho.ValueType.String), (r.value = xF.xmlDecode(r.value)));
                break;
              case "inlineStr":
                r.type = Ho.ValueType.String;
                break;
              case "b":
                ((r.type = Ho.ValueType.Boolean), (r.value = parseInt(r.value, 10) !== 0));
                break;
              case "e":
                ((r.type = Ho.ValueType.Error), (r.value = { error: r.value }));
                break;
              default:
                ((r.type = Ho.ValueType.Number), (r.value = parseFloat(r.value)));
                break;
            }
          else r.styleId ? (r.type = Ho.ValueType.Null) : (r.type = Ho.ValueType.Merge);
          return !1;
        }
        case "f":
        case "v":
        case "is":
          return ((this.currentNode = void 0), !0);
        case "t":
          return this.parser ? (this.parser.parseClose(e), !0) : ((this.currentNode = void 0), !0);
        case "r":
          return (
            (this.model.value = this.model.value || {}),
            (this.model.value.richText = this.model.value.richText || []),
            this.model.value.richText.push(this.parser.model),
            (this.parser = void 0),
            (this.currentNode = void 0),
            !0
          );
        default:
          return this.parser ? (this.parser.parseClose(e), !0) : !1;
      }
    }
    reconcile(e, r) {
      let n = e.styleId && r.styles && r.styles.getStyleModel(e.styleId);
      switch ((n && (e.style = n), e.styleId !== void 0 && (e.styleId = void 0), e.type)) {
        case Ho.ValueType.String:
          (typeof e.value == "number" && r.sharedStrings && (e.value = r.sharedStrings.getString(e.value)),
            e.value.richText && (e.type = Ho.ValueType.RichText));
          break;
        case Ho.ValueType.Number:
          n &&
            xF.isDateFmt(n.numFmt) &&
            ((e.type = Ho.ValueType.Date), (e.value = xF.excelToDate(e.value, r.date1904)));
          break;
        case Ho.ValueType.Formula:
          (e.result !== void 0 && n && xF.isDateFmt(n.numFmt) && (e.result = xF.excelToDate(e.result, r.date1904)),
            e.shareType === "shared" &&
              (e.ref ? (r.formulae[e.si] = e.address) : ((e.sharedFormula = r.formulae[e.si]), delete e.shareType),
              delete e.si));
          break;
        default:
          break;
      }
      let o = r.hyperlinkMap[e.address];
      o &&
        (e.type === Ho.ValueType.Formula
          ? ((e.text = e.result), (e.result = void 0))
          : ((e.text = e.value), (e.value = void 0)),
        (e.type = Ho.ValueType.Hyperlink),
        (e.hyperlink = o));
      let s = r.commentsMap && r.commentsMap[e.address];
      s && (e.comment = s);
    }
  };
  URn.exports = xKt;
});