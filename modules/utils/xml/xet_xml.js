/**
 * @module xet
 * @category utils/xml
 * @label xml
 * @position 1204 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xet) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xet = T((VAc, kRn) => {
  var lks = f1(),
    mks = Pd(),
    dks = Ig(),
    fks = Kr(),
    pks = lue(),
    SKt = vF(),
    hks = vRn(),
    gks = SRn(),
    bks = xRn(),
    Aks = DRn(),
    yks = RRn(),
    b_e = class t extends fks {
      constructor() {
        (super(),
          (this.map = {
            fileVersion: t.STATIC_XFORMS.fileVersion,
            workbookPr: new Aks(),
            bookViews: new SKt({ tag: "bookViews", count: !1, childXform: new bks() }),
            sheets: new SKt({ tag: "sheets", count: !1, childXform: new gks() }),
            definedNames: new SKt({ tag: "definedNames", count: !1, childXform: new hks() }),
            calcPr: new yks(),
          }));
      }
      prepare(e) {
        e.sheets = e.worksheets;
        let r = [],
          n = 0;
        (e.sheets.forEach((o) => {
          if (
            (o.pageSetup &&
              o.pageSetup.printArea &&
              o.pageSetup.printArea.split("&&").forEach((s) => {
                let a = s.split(":"),
                  u = { name: "_xlnm.Print_Area", ranges: [`'${o.name}'!$${a[0]}:$${a[1]}`], localSheetId: n };
                r.push(u);
              }),
            o.pageSetup && (o.pageSetup.printTitlesRow || o.pageSetup.printTitlesColumn))
          ) {
            let s = [];
            if (o.pageSetup.printTitlesColumn) {
              let u = o.pageSetup.printTitlesColumn.split(":");
              s.push(`'${o.name}'!$${u[0]}:$${u[1]}`);
            }
            if (o.pageSetup.printTitlesRow) {
              let u = o.pageSetup.printTitlesRow.split(":");
              s.push(`'${o.name}'!$${u[0]}:$${u[1]}`);
            }
            let a = { name: "_xlnm.Print_Titles", ranges: s, localSheetId: n };
            r.push(a);
          }
          n++;
        }),
          r.length && (e.definedNames = e.definedNames.concat(r)),
          (e.media || []).forEach((o, s) => {
            o.name = o.type + (s + 1);
          }));
      }
      render(e, r) {
        (e.openXml(dks.StdDocAttributes),
          e.openNode("workbook", t.WORKBOOK_ATTRIBUTES),
          this.map.fileVersion.render(e),
          this.map.workbookPr.render(e, r.properties),
          this.map.bookViews.render(e, r.views),
          this.map.sheets.render(e, r.sheets),
          this.map.definedNames.render(e, r.definedNames),
          this.map.calcPr.render(e, r.calcProperties),
          e.closeNode());
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case "workbook":
            return !0;
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
          case "workbook":
            return (
              (this.model = {
                sheets: this.map.sheets.model,
                properties: this.map.workbookPr.model || {},
                views: this.map.bookViews.model,
                calcProperties: {},
              }),
              this.map.definedNames.model && (this.model.definedNames = this.map.definedNames.model),
              !1
            );
          default:
            return !0;
        }
      }
      reconcile(e) {
        let r = (e.workbookRels || []).reduce((u, c) => ((u[c.Id] = c), u), {}),
          n = [],
          o,
          s = 0;
        (e.sheets || []).forEach((u) => {
          let c = r[u.rId];
          c &&
            ((o = e.worksheetHash[`xl/${c.Target.replace(/^(\s|\/xl\/)+/, "")}`]),
            o && ((o.name = u.name), (o.id = u.id), (o.state = u.state), (n[s++] = o)));
        });
        let a = [];
        (lks.each(e.definedNames, (u) => {
          if (u.name === "_xlnm.Print_Area") {
            if (((o = n[u.localSheetId]), o)) {
              o.pageSetup || (o.pageSetup = {});
              let c = mks.decodeEx(u.ranges[0]);
              o.pageSetup.printArea = o.pageSetup.printArea
                ? `${o.pageSetup.printArea}&&${c.dimensions}`
                : c.dimensions;
            }
          } else if (u.name === "_xlnm.Print_Titles") {
            if (((o = n[u.localSheetId]), o)) {
              o.pageSetup || (o.pageSetup = {});
              let c = u.ranges.join(","),
                m = /\$/g,
                d = /\$\d+:\$\d+/,
                f = c.match(d);
              if (f && f.length) {
                let g = f[0];
                o.pageSetup.printTitlesRow = g.replace(m, "");
              }
              let p = /\$[A-Z]+:\$[A-Z]+/,
                h = c.match(p);
              if (h && h.length) {
                let g = h[0];
                o.pageSetup.printTitlesColumn = g.replace(m, "");
              }
            }
          } else a.push(u);
        }),
          (e.definedNames = a),
          e.media.forEach((u, c) => {
            u.index = c;
          }));
      }
    };
  b_e.WORKBOOK_ATTRIBUTES = {
    xmlns: "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    "xmlns:r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "xmlns:mc": "http://schemas.openxmlformats.org/markup-compatibility/2006",
    "mc:Ignorable": "x15",
    "xmlns:x15": "http://schemas.microsoft.com/office/spreadsheetml/2010/11/main",
  };
  b_e.STATIC_XFORMS = {
    fileVersion: new pks({ tag: "fileVersion", $: { appName: "xl", lastEdited: 5, lowestEdited: 5, rupBuild: 9303 } }),
  };
  kRn.exports = b_e;
});