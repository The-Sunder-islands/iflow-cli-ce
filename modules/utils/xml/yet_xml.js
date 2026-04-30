/**
 * @module yet
 * @category utils/xml
 * @label xml
 * @position 1185 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yet) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var yet = T((TAc, eRn) => {
  var Aet = tS(),
    vRs = Ig(),
    CRs = Kr(),
    bet = lue(),
    _W = vF(),
    J7n = det(),
    X7n = VYt(),
    Z7n = zYt(),
    h_e = KYt(),
    nKt = z7n(),
    SRs = K7n(),
    wRs = 164,
    EW = class t extends CRs {
      constructor(e) {
        (super(),
          (this.map = {
            numFmts: new _W({ tag: "numFmts", count: !0, childXform: new h_e() }),
            fonts: new _W({ tag: "fonts", count: !0, childXform: new J7n(), $: { "x14ac:knownFonts": 1 } }),
            fills: new _W({ tag: "fills", count: !0, childXform: new X7n() }),
            borders: new _W({ tag: "borders", count: !0, childXform: new Z7n() }),
            cellStyleXfs: new _W({ tag: "cellStyleXfs", count: !0, childXform: new nKt() }),
            cellXfs: new _W({ tag: "cellXfs", count: !0, childXform: new nKt({ xfId: !0 }) }),
            dxfs: new _W({ tag: "dxfs", always: !0, count: !0, childXform: new SRs() }),
            numFmt: new h_e(),
            font: new J7n(),
            fill: new X7n(),
            border: new Z7n(),
            style: new nKt({ xfId: !0 }),
            cellStyles: t.STATIC_XFORMS.cellStyles,
            tableStyles: t.STATIC_XFORMS.tableStyles,
            extLst: t.STATIC_XFORMS.extLst,
          }),
          e && this.init());
      }
      initIndex() {
        this.index = { style: {}, numFmt: {}, numFmtNextId: 164, font: {}, border: {}, fill: {} };
      }
      init() {
        ((this.model = { styles: [], numFmts: [], fonts: [], borders: [], fills: [], dxfs: [] }),
          this.initIndex(),
          this._addBorder({}),
          this._addStyle({ numFmtId: 0, fontId: 0, fillId: 0, borderId: 0, xfId: 0 }),
          this._addFill({ type: "pattern", pattern: "none" }),
          this._addFill({ type: "pattern", pattern: "gray125" }),
          (this.weakMap = new WeakMap()));
      }
      render(e, r) {
        ((r = r || this.model),
          e.openXml(vRs.StdDocAttributes),
          e.openNode("styleSheet", t.STYLESHEET_ATTRIBUTES),
          this.index
            ? (r.numFmts &&
                r.numFmts.length &&
                (e.openNode("numFmts", { count: r.numFmts.length }),
                r.numFmts.forEach((n) => {
                  e.writeXml(n);
                }),
                e.closeNode()),
              r.fonts.length ||
                this._addFont({ size: 11, color: { theme: 1 }, name: "Calibri", family: 2, scheme: "minor" }),
              e.openNode("fonts", { count: r.fonts.length, "x14ac:knownFonts": 1 }),
              r.fonts.forEach((n) => {
                e.writeXml(n);
              }),
              e.closeNode(),
              e.openNode("fills", { count: r.fills.length }),
              r.fills.forEach((n) => {
                e.writeXml(n);
              }),
              e.closeNode(),
              e.openNode("borders", { count: r.borders.length }),
              r.borders.forEach((n) => {
                e.writeXml(n);
              }),
              e.closeNode(),
              this.map.cellStyleXfs.render(e, [{ numFmtId: 0, fontId: 0, fillId: 0, borderId: 0, xfId: 0 }]),
              e.openNode("cellXfs", { count: r.styles.length }),
              r.styles.forEach((n) => {
                e.writeXml(n);
              }),
              e.closeNode())
            : (this.map.numFmts.render(e, r.numFmts),
              this.map.fonts.render(e, r.fonts),
              this.map.fills.render(e, r.fills),
              this.map.borders.render(e, r.borders),
              this.map.cellStyleXfs.render(e, [{ numFmtId: 0, fontId: 0, fillId: 0, borderId: 0, xfId: 0 }]),
              this.map.cellXfs.render(e, r.styles)),
          t.STATIC_XFORMS.cellStyles.render(e),
          this.map.dxfs.render(e, r.dxfs),
          t.STATIC_XFORMS.tableStyles.render(e),
          t.STATIC_XFORMS.extLst.render(e),
          e.closeNode());
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case "styleSheet":
            return (this.initIndex(), !0);
          default:
            return ((this.parser = this.map[e.name]), this.parser && this.parser.parseOpen(e), !0);
        }
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        if (this.parser) return (this.parser.parseClose(e) || (this.parser = void 0), !0);
        switch (e) {
          case "styleSheet": {
            this.model = {};
            let r = (n, o) => {
              o.model && o.model.length && (this.model[n] = o.model);
            };
            if (
              (r("numFmts", this.map.numFmts),
              r("fonts", this.map.fonts),
              r("fills", this.map.fills),
              r("borders", this.map.borders),
              r("styles", this.map.cellXfs),
              r("dxfs", this.map.dxfs),
              (this.index = { model: [], numFmt: [] }),
              this.model.numFmts)
            ) {
              let n = this.index.numFmt;
              this.model.numFmts.forEach((o) => {
                n[o.id] = o.formatCode;
              });
            }
            return !1;
          }
          default:
            return !0;
        }
      }
      addStyleModel(e, r) {
        if (!e) return 0;
        if (
          (this.model.fonts.length ||
            this._addFont({ size: 11, color: { theme: 1 }, name: "Calibri", family: 2, scheme: "minor" }),
          this.weakMap && this.weakMap.has(e))
        )
          return this.weakMap.get(e);
        let n = {};
        if (((r = r || Aet.ValueType.Number), e.numFmt)) n.numFmtId = this._addNumFmtStr(e.numFmt);
        else
          switch (r) {
            case Aet.ValueType.Number:
              n.numFmtId = this._addNumFmtStr("General");
              break;
            case Aet.ValueType.Date:
              n.numFmtId = this._addNumFmtStr("mm-dd-yy");
              break;
            default:
              break;
          }
        (e.font && (n.fontId = this._addFont(e.font)),
          e.border && (n.borderId = this._addBorder(e.border)),
          e.fill && (n.fillId = this._addFill(e.fill)),
          e.alignment && (n.alignment = e.alignment),
          e.protection && (n.protection = e.protection));
        let o = this._addStyle(n);
        return (this.weakMap && this.weakMap.set(e, o), o);
      }
      getStyleModel(e) {
        let r = this.model.styles[e];
        if (!r) return null;
        let n = this.index.model[e];
        if (n) return n;
        if (((n = this.index.model[e] = {}), r.numFmtId)) {
          let s = this.index.numFmt[r.numFmtId] || h_e.getDefaultFmtCode(r.numFmtId);
          s && (n.numFmt = s);
        }
        function o(s, a, u) {
          if (u || u === 0) {
            let c = a[u];
            c && (n[s] = c);
          }
        }
        return (
          o("font", this.model.fonts, r.fontId),
          o("border", this.model.borders, r.borderId),
          o("fill", this.model.fills, r.fillId),
          r.alignment && (n.alignment = r.alignment),
          r.protection && (n.protection = r.protection),
          n
        );
      }
      addDxfStyle(e) {
        return (
          e.numFmt && (e.numFmtId = this._addNumFmtStr(e.numFmt)),
          this.model.dxfs.push(e),
          this.model.dxfs.length - 1
        );
      }
      getDxfStyle(e) {
        return this.model.dxfs[e];
      }
      _addStyle(e) {
        let r = this.map.style.toXml(e),
          n = this.index.style[r];
        return (n === void 0 && ((n = this.index.style[r] = this.model.styles.length), this.model.styles.push(r)), n);
      }
      _addNumFmtStr(e) {
        let r = h_e.getDefaultFmtId(e);
        if (r !== void 0 || ((r = this.index.numFmt[e]), r !== void 0)) return r;
        r = this.index.numFmt[e] = wRs + this.model.numFmts.length;
        let n = this.map.numFmt.toXml({ id: r, formatCode: e });
        return (this.model.numFmts.push(n), r);
      }
      _addFont(e) {
        let r = this.map.font.toXml(e),
          n = this.index.font[r];
        return (n === void 0 && ((n = this.index.font[r] = this.model.fonts.length), this.model.fonts.push(r)), n);
      }
      _addBorder(e) {
        let r = this.map.border.toXml(e),
          n = this.index.border[r];
        return (
          n === void 0 && ((n = this.index.border[r] = this.model.borders.length), this.model.borders.push(r)),
          n
        );
      }
      _addFill(e) {
        let r = this.map.fill.toXml(e),
          n = this.index.fill[r];
        return (n === void 0 && ((n = this.index.fill[r] = this.model.fills.length), this.model.fills.push(r)), n);
      }
    };
  EW.STYLESHEET_ATTRIBUTES = {
    xmlns: "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    "xmlns:mc": "http://schemas.openxmlformats.org/markup-compatibility/2006",
    "mc:Ignorable": "x14ac x16r2",
    "xmlns:x14ac": "http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac",
    "xmlns:x16r2": "http://schemas.microsoft.com/office/spreadsheetml/2015/02/main",
  };
  EW.STATIC_XFORMS = {
    cellStyles: new bet({
      tag: "cellStyles",
      $: { count: 1 },
      c: [{ tag: "cellStyle", $: { name: "Normal", xfId: 0, builtinId: 0 } }],
    }),
    dxfs: new bet({ tag: "dxfs", $: { count: 0 } }),
    tableStyles: new bet({
      tag: "tableStyles",
      $: { count: 0, defaultTableStyle: "TableStyleMedium2", defaultPivotStyle: "PivotStyleLight16" },
    }),
    extLst: new bet({
      tag: "extLst",
      c: [
        {
          tag: "ext",
          $: {
            uri: "{EB79DEF2-80B8-43e5-95BD-54CBDDF9020C}",
            "xmlns:x14": "http://schemas.microsoft.com/office/spreadsheetml/2009/9/main",
          },
          c: [{ tag: "x14:slicerStyles", $: { defaultSlicerStyle: "SlicerStyleLight1" } }],
        },
        {
          tag: "ext",
          $: {
            uri: "{9260A510-F301-46a8-8635-F512D64BE5F5}",
            "xmlns:x15": "http://schemas.microsoft.com/office/spreadsheetml/2010/11/main",
          },
          c: [{ tag: "x15:timelineStyles", $: { defaultTimelineStyle: "TimeSlicerStyleLight1" } }],
        },
      ],
    }),
  };
  var iKt = class extends EW {
    constructor() {
      (super(),
        (this.model = {
          styles: [{ numFmtId: 0, fontId: 0, fillId: 0, borderId: 0, xfId: 0 }],
          numFmts: [],
          fonts: [{ size: 11, color: { theme: 1 }, name: "Calibri", family: 2, scheme: "minor" }],
          borders: [{}],
          fills: [
            { type: "pattern", pattern: "none" },
            { type: "pattern", pattern: "gray125" },
          ],
        }));
    }
    parseStream(e) {
      return (e.autodrain(), Promise.resolve());
    }
    addStyleModel(e, r) {
      switch (r) {
        case Aet.ValueType.Date:
          return this.dateStyleId;
        default:
          return 0;
      }
    }
    get dateStyleId() {
      if (!this._dateStyleId) {
        let e = { numFmtId: h_e.getDefaultFmtId("mm-dd-yy") };
        ((this._dateStyleId = this.model.styles.length), this.model.styles.push(e));
      }
      return this._dateStyleId;
    }
    getStyleModel() {
      return {};
    }
  };
  EW.Mock = iKt;
  eRn.exports = EW;
});