/**
 * @module sOn
 * @category utils/xml
 * @label xml
 * @position 1248 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (sOn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var sOn = T((F2c, oOn) => {
  var tNs = f1(),
    rNs = Pd(),
    nNs = Ig(),
    Zk = wF(),
    iNs = MRn(),
    oNs = Kr(),
    bue = vF(),
    sNs = IKt(),
    aNs = OKt(),
    uNs = qRn(),
    cNs = BKt(),
    lNs = WRn(),
    mNs = $Kt(),
    dNs = qKt(),
    fNs = VKt(),
    pNs = zKt(),
    hNs = KKt(),
    gNs = XKt(),
    bNs = eJt(),
    ANs = skn(),
    yNs = nJt(),
    _Ns = oJt(),
    ENs = lkn(),
    vNs = dkn(),
    CNs = lJt(),
    SNs = dJt(),
    wNs = xJt(),
    xNs = iOn(),
    TNs = (t, e) => {
      Object.keys(e).forEach((r) => {
        let n = t[r],
          o = e[r];
        n === void 0 && o !== void 0 && (t[r] = o);
      });
    },
    DNs = (t, e) => {
      if (!e || !e.length) return t;
      if (!t || !t.length) return e;
      let r = {},
        n = {};
      return (
        t.forEach((o) => {
          ((r[o.ref] = o),
            o.rules.forEach((s) => {
              let { x14Id: a } = s;
              a && (n[a] = s);
            }));
        }),
        e.forEach((o) => {
          o.rules.forEach((s) => {
            let a = n[s.x14Id];
            a ? TNs(a, s) : r[o.ref] ? r[o.ref].rules.push(s) : t.push({ ref: o.ref, rules: [s] });
          });
        }),
        t
      );
    },
    ket = class t extends oNs {
      constructor(e) {
        super();
        let { maxRows: r, maxCols: n, ignoreNodes: o } = e || {};
        ((this.ignoreNodes = o || []),
          (this.map = {
            sheetPr: new dNs(),
            dimension: new uNs(),
            sheetViews: new bue({ tag: "sheetViews", count: !1, childXform: new pNs() }),
            sheetFormatPr: new fNs(),
            cols: new bue({ tag: "cols", count: !1, childXform: new aNs() }),
            sheetData: new bue({
              tag: "sheetData",
              count: !1,
              empty: !0,
              childXform: new sNs({ maxItems: n }),
              maxItems: r,
            }),
            autoFilter: new yNs(),
            mergeCells: new bue({ tag: "mergeCells", count: !0, childXform: new lNs() }),
            rowBreaks: new CNs(),
            hyperlinks: new bue({ tag: "hyperlinks", count: !1, childXform: new cNs() }),
            pageMargins: new gNs(),
            dataValidations: new mNs(),
            pageSetup: new bNs(),
            headerFooter: new SNs(),
            printOptions: new ANs(),
            picture: new _Ns(),
            drawing: new ENs(),
            sheetProtection: new hNs(),
            tableParts: new bue({ tag: "tableParts", count: !0, childXform: new vNs() }),
            conditionalFormatting: new wNs(),
            extLst: new xNs(),
          }));
      }
      prepare(e, r) {
        ((r.merges = new iNs()),
          (e.hyperlinks = r.hyperlinks = []),
          (e.comments = r.comments = []),
          (r.formulae = {}),
          (r.siFormulae = 0),
          this.map.cols.prepare(e.cols, r),
          this.map.sheetData.prepare(e.rows, r),
          this.map.conditionalFormatting.prepare(e.conditionalFormattings, r),
          (e.mergeCells = r.merges.mergeCells));
        let n = (e.rels = []);
        function o(u) {
          return `rId${u.length + 1}`;
        }
        if (
          (e.hyperlinks.forEach((u) => {
            let c = o(n);
            ((u.rId = c), n.push({ Id: c, Type: Zk.Hyperlink, Target: u.target, TargetMode: "External" }));
          }),
          e.comments.length > 0)
        ) {
          let u = { Id: o(n), Type: Zk.Comments, Target: `../comments${e.id}.xml` };
          n.push(u);
          let c = { Id: o(n), Type: Zk.VmlDrawing, Target: `../drawings/vmlDrawing${e.id}.vml` };
          (n.push(c),
            e.comments.forEach((m) => {
              m.refAddress = rNs.decodeAddress(m.ref);
            }),
            r.commentRefs.push({ commentName: `comments${e.id}`, vmlDrawing: `vmlDrawing${e.id}` }));
        }
        let s = [],
          a;
        (e.media.forEach((u) => {
          if (u.type === "background") {
            let c = o(n);
            ((a = r.media[u.imageId]),
              n.push({ Id: c, Type: Zk.Image, Target: `../media/${a.name}.${a.extension}` }),
              (e.background = { rId: c }),
              (e.image = r.media[u.imageId]));
          } else if (u.type === "image") {
            let { drawing: c } = e;
            ((a = r.media[u.imageId]),
              c ||
                ((c = e.drawing = { rId: o(n), name: `drawing${++r.drawingsCount}`, anchors: [], rels: [] }),
                r.drawings.push(c),
                n.push({
                  Id: c.rId,
                  Type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
                  Target: `../drawings/${c.name}.xml`,
                })));
            let m = this.preImageId === u.imageId ? s[u.imageId] : s[c.rels.length];
            m ||
              ((m = o(c.rels)),
              (s[c.rels.length] = m),
              c.rels.push({
                Id: m,
                Type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
                Target: `../media/${a.name}.${a.extension}`,
              }));
            let d = { picture: { rId: m }, range: u.range };
            if (u.hyperlinks && u.hyperlinks.hyperlink) {
              let f = o(c.rels);
              ((s[c.rels.length] = f),
                (d.picture.hyperlinks = { tooltip: u.hyperlinks.tooltip, rId: f }),
                c.rels.push({ Id: f, Type: Zk.Hyperlink, Target: u.hyperlinks.hyperlink, TargetMode: "External" }));
            }
            ((this.preImageId = u.imageId), c.anchors.push(d));
          }
        }),
          e.tables.forEach((u) => {
            let c = o(n);
            ((u.rId = c),
              n.push({ Id: c, Type: Zk.Table, Target: `../tables/${u.target}` }),
              u.columns.forEach((m) => {
                let { style: d } = m;
                d && (m.dxfId = r.styles.addDxfStyle(d));
              }));
          }),
          this.map.extLst.prepare(e, r));
      }
      render(e, r) {
        (e.openXml(nNs.StdDocAttributes), e.openNode("worksheet", t.WORKSHEET_ATTRIBUTES));
        let n = r.properties
          ? {
              defaultRowHeight: r.properties.defaultRowHeight,
              dyDescent: r.properties.dyDescent,
              outlineLevelCol: r.properties.outlineLevelCol,
              outlineLevelRow: r.properties.outlineLevelRow,
            }
          : void 0;
        r.properties && r.properties.defaultColWidth && (n.defaultColWidth = r.properties.defaultColWidth);
        let o = {
            outlineProperties: r.properties && r.properties.outlineProperties,
            tabColor: r.properties && r.properties.tabColor,
            pageSetup: r.pageSetup && r.pageSetup.fitToPage ? { fitToPage: r.pageSetup.fitToPage } : void 0,
          },
          s = r.pageSetup && r.pageSetup.margins,
          a = {
            showRowColHeaders: r.pageSetup && r.pageSetup.showRowColHeaders,
            showGridLines: r.pageSetup && r.pageSetup.showGridLines,
            horizontalCentered: r.pageSetup && r.pageSetup.horizontalCentered,
            verticalCentered: r.pageSetup && r.pageSetup.verticalCentered,
          },
          u = r.sheetProtection;
        (this.map.sheetPr.render(e, o),
          this.map.dimension.render(e, r.dimensions),
          this.map.sheetViews.render(e, r.views),
          this.map.sheetFormatPr.render(e, n),
          this.map.cols.render(e, r.cols),
          this.map.sheetData.render(e, r.rows),
          this.map.sheetProtection.render(e, u),
          this.map.autoFilter.render(e, r.autoFilter),
          this.map.mergeCells.render(e, r.mergeCells),
          this.map.conditionalFormatting.render(e, r.conditionalFormattings),
          this.map.dataValidations.render(e, r.dataValidations),
          this.map.hyperlinks.render(e, r.hyperlinks),
          this.map.printOptions.render(e, a),
          this.map.pageMargins.render(e, s),
          this.map.pageSetup.render(e, r.pageSetup),
          this.map.headerFooter.render(e, r.headerFooter),
          this.map.rowBreaks.render(e, r.rowBreaks),
          this.map.drawing.render(e, r.drawing),
          this.map.picture.render(e, r.background),
          this.map.tableParts.render(e, r.tables),
          this.map.extLst.render(e, r),
          r.rels &&
            r.rels.forEach((c) => {
              c.Type === Zk.VmlDrawing && e.leafNode("legacyDrawing", { "r:id": c.Id });
            }),
          e.closeNode());
      }
      parseOpen(e) {
        return this.parser
          ? (this.parser.parseOpen(e), !0)
          : e.name === "worksheet"
            ? (tNs.each(this.map, (r) => {
                r.reset();
              }),
              !0)
            : (this.map[e.name] &&
                !this.ignoreNodes.includes(e.name) &&
                ((this.parser = this.map[e.name]), this.parser.parseOpen(e)),
              !0);
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        if (this.parser) return (this.parser.parseClose(e) || (this.parser = void 0), !0);
        switch (e) {
          case "worksheet": {
            let r = this.map.sheetFormatPr.model || {};
            (this.map.sheetPr.model &&
              this.map.sheetPr.model.tabColor &&
              (r.tabColor = this.map.sheetPr.model.tabColor),
              this.map.sheetPr.model &&
                this.map.sheetPr.model.outlineProperties &&
                (r.outlineProperties = this.map.sheetPr.model.outlineProperties));
            let n = {
                fitToPage:
                  (this.map.sheetPr.model &&
                    this.map.sheetPr.model.pageSetup &&
                    this.map.sheetPr.model.pageSetup.fitToPage) ||
                  !1,
                margins: this.map.pageMargins.model,
              },
              o = Object.assign(n, this.map.pageSetup.model, this.map.printOptions.model),
              s = DNs(
                this.map.conditionalFormatting.model,
                this.map.extLst.model && this.map.extLst.model["x14:conditionalFormattings"],
              );
            return (
              (this.model = {
                dimensions: this.map.dimension.model,
                cols: this.map.cols.model,
                rows: this.map.sheetData.model,
                mergeCells: this.map.mergeCells.model,
                hyperlinks: this.map.hyperlinks.model,
                dataValidations: this.map.dataValidations.model,
                properties: r,
                views: this.map.sheetViews.model,
                pageSetup: o,
                headerFooter: this.map.headerFooter.model,
                background: this.map.picture.model,
                drawing: this.map.drawing.model,
                tables: this.map.tableParts.model,
                conditionalFormattings: s,
              }),
              this.map.autoFilter.model && (this.model.autoFilter = this.map.autoFilter.model),
              this.map.sheetProtection.model && (this.model.sheetProtection = this.map.sheetProtection.model),
              !1
            );
          }
          default:
            return !0;
        }
      }
      reconcile(e, r) {
        let n = (e.relationships || []).reduce((s, a) => {
          if (
            ((s[a.Id] = a),
            a.Type === Zk.Comments && (e.comments = r.comments[a.Target].comments),
            a.Type === Zk.VmlDrawing && e.comments && e.comments.length)
          ) {
            let u = r.vmlDrawings[a.Target].comments;
            e.comments.forEach((c, m) => {
              c.note = Object.assign({}, c.note, u[m]);
            });
          }
          return s;
        }, {});
        if (
          ((r.commentsMap = (e.comments || []).reduce((s, a) => (a.ref && (s[a.ref] = a), s), {})),
          (r.hyperlinkMap = (e.hyperlinks || []).reduce((s, a) => (a.rId && (s[a.address] = n[a.rId].Target), s), {})),
          (r.formulae = {}),
          (e.rows = (e.rows && e.rows.filter(Boolean)) || []),
          e.rows.forEach((s) => {
            s.cells = (s.cells && s.cells.filter(Boolean)) || [];
          }),
          this.map.cols.reconcile(e.cols, r),
          this.map.sheetData.reconcile(e.rows, r),
          this.map.conditionalFormatting.reconcile(e.conditionalFormattings, r),
          (e.media = []),
          e.drawing)
        ) {
          let a = n[e.drawing.rId].Target.match(/\/drawings\/([a-zA-Z0-9]+)[.][a-zA-Z]{3,4}$/);
          if (a) {
            let u = a[1];
            r.drawings[u].anchors.forEach((m) => {
              if (m.medium) {
                let d = { type: "image", imageId: m.medium.index, range: m.range, hyperlinks: m.picture.hyperlinks };
                e.media.push(d);
              }
            });
          }
        }
        let o = e.background && n[e.background.rId];
        if (o) {
          let s = o.Target.split("/media/")[1],
            a = r.mediaIndex && r.mediaIndex[s];
          a !== void 0 && e.media.push({ type: "background", imageId: a });
        }
        ((e.tables = (e.tables || []).map((s) => {
          let a = n[s.rId];
          return r.tables[a.Target];
        })),
          delete e.relationships,
          delete e.hyperlinks,
          delete e.comments);
      }
    };
  ket.WORKSHEET_ATTRIBUTES = {
    xmlns: "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    "xmlns:r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "xmlns:mc": "http://schemas.openxmlformats.org/markup-compatibility/2006",
    "mc:Ignorable": "x14ac",
    "xmlns:x14ac": "http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac",
  };
  oOn.exports = ket;
});