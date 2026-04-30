/**
 * @module wXt
 * @category utils/net
 * @label mime
 * @position 1281 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wXt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wXt = T((b5c, _Nn) => {
  var SXt = Ae("fs"),
    qPs = LXe(),
    { PassThrough: AXt } = Dg(),
    HPs = $In(),
    yXt = u_e(),
    VPs = eA(),
    Fet = Ig(),
    { bufferToString: WPs } = bYt(),
    _Xt = yet(),
    gNn = aKt(),
    EXt = dKt(),
    CW = Cet(),
    zPs = pKt(),
    bNn = bKt(),
    Uet = xet(),
    $et = sOn(),
    vXt = POn(),
    CXt = YOn(),
    ANn = ZOn(),
    yNn = pNn(),
    YPs = bXt();
  function KPs(t, e) {
    return new Promise((r, n) => {
      SXt.readFile(t, e, (o, s) => {
        o ? n(o) : r(s);
      });
    });
  }
  var jet = class t {
    constructor(e) {
      this.workbook = e;
    }
    async readFile(e, r) {
      if (!(await VPs.fs.exists(e))) throw new Error(`File not found: ${e}`);
      let n = SXt.createReadStream(e);
      try {
        let o = await this.read(n, r);
        return (n.close(), o);
      } catch (o) {
        throw (n.close(), o);
      }
    }
    parseRels(e) {
      return new CW().parseStream(e);
    }
    parseWorkbook(e) {
      return new Uet().parseStream(e);
    }
    parseSharedStrings(e) {
      return new EXt().parseStream(e);
    }
    reconcile(e, r) {
      let n = new Uet(),
        o = new $et(r),
        s = new vXt(),
        a = new CXt();
      n.reconcile(e);
      let u = { media: e.media, mediaIndex: e.mediaIndex };
      Object.keys(e.drawings).forEach((d) => {
        let f = e.drawings[d],
          p = e.drawingRels[d];
        p &&
          ((u.rels = p.reduce((h, g) => ((h[g.Id] = g), h), {})),
          (f.anchors || []).forEach((h) => {
            let g = h.picture && h.picture.hyperlinks;
            g && u.rels[g.rId] && ((g.hyperlink = u.rels[g.rId].Target), delete g.rId);
          }),
          s.reconcile(f, u));
      });
      let c = { styles: e.styles };
      Object.values(e.tables).forEach((d) => {
        a.reconcile(d, c);
      });
      let m = {
        styles: e.styles,
        sharedStrings: e.sharedStrings,
        media: e.media,
        mediaIndex: e.mediaIndex,
        date1904: e.properties && e.properties.date1904,
        drawings: e.drawings,
        comments: e.comments,
        tables: e.tables,
        vmlDrawings: e.vmlDrawings,
      };
      (e.worksheets.forEach((d) => {
        ((d.relationships = e.worksheetRels[d.sheetNo]), o.reconcile(d, m));
      }),
        delete e.worksheetHash,
        delete e.worksheetRels,
        delete e.globalRels,
        delete e.sharedStrings,
        delete e.workbookRels,
        delete e.sheetDefs,
        delete e.styles,
        delete e.mediaIndex,
        delete e.drawings,
        delete e.drawingRels,
        delete e.vmlDrawings);
    }
    async _processWorksheetEntry(e, r, n, o, s) {
      let u = await new $et(o).parseStream(e);
      ((u.sheetNo = n), (r.worksheetHash[s] = u), r.worksheets.push(u));
    }
    async _processCommentEntry(e, r, n) {
      let s = await new ANn().parseStream(e);
      r.comments[`../${n}.xml`] = s;
    }
    async _processTableEntry(e, r, n) {
      let s = await new CXt().parseStream(e);
      r.tables[`../tables/${n}.xml`] = s;
    }
    async _processWorksheetRelsEntry(e, r, n) {
      let s = await new CW().parseStream(e);
      r.worksheetRels[n] = s;
    }
    async _processMediaEntry(e, r, n) {
      let o = n.lastIndexOf(".");
      if (o >= 1) {
        let s = n.substr(o + 1),
          a = n.substr(0, o);
        await new Promise((u, c) => {
          let m = new yXt();
          (m.on("finish", () => {
            ((r.mediaIndex[n] = r.media.length), (r.mediaIndex[a] = r.media.length));
            let d = { type: "image", name: a, extension: s, buffer: m.toBuffer() };
            (r.media.push(d), u());
          }),
            e.on("error", (d) => {
              c(d);
            }),
            e.pipe(m));
        });
      }
    }
    async _processDrawingEntry(e, r, n) {
      let s = await new vXt().parseStream(e);
      r.drawings[n] = s;
    }
    async _processDrawingRelsEntry(e, r, n) {
      let s = await new CW().parseStream(e);
      r.drawingRels[n] = s;
    }
    async _processVmlDrawingEntry(e, r, n) {
      let s = await new yNn().parseStream(e);
      r.vmlDrawings[`../drawings/${n}.vml`] = s;
    }
    async _processThemeEntry(e, r, n) {
      await new Promise((o, s) => {
        let a = new yXt();
        (e.on("error", s),
          a.on("error", s),
          a.on("finish", () => {
            ((r.themes[n] = a.read().toString()), o());
          }),
          e.pipe(a));
      });
    }
    createInputStream() {
      throw new Error(
        "`XLSX#createInputStream` is deprecated. You should use `XLSX#read` instead. This method will be removed in version 5.0. Please follow upgrade instruction: https://github.com/exceljs/exceljs/blob/master/UPGRADE-4.0.md",
      );
    }
    async read(e, r) {
      !e[Symbol.asyncIterator] && e.pipe && (e = e.pipe(new AXt()));
      let n = [];
      for await (let o of e) n.push(o);
      return this.load(Buffer.concat(n), r);
    }
    async load(e, r) {
      let n;
      r && r.base64 ? (n = Buffer.from(e.toString(), "base64")) : (n = e);
      let o = {
          worksheets: [],
          worksheetHash: {},
          worksheetRels: [],
          themes: {},
          media: [],
          mediaIndex: {},
          drawings: {},
          drawingRels: {},
          comments: {},
          tables: {},
          vmlDrawings: {},
        },
        s = await qPs.loadAsync(n);
      for (let a of Object.values(s.files))
        if (!a.dir) {
          let u = a.name;
          u[0] === "/" && (u = u.substr(1));
          let c;
          if (u.match(/xl\/media\//) || u.match(/xl\/theme\/([a-zA-Z0-9]+)[.]xml/))
            ((c = new AXt()), c.write(await a.async("nodebuffer")));
          else {
            c = new AXt({ writableObjectMode: !0, readableObjectMode: !0 });
            let m;
            process.browser ? (m = WPs(await a.async("nodebuffer"))) : (m = await a.async("string"));
            let d = 16 * 1024;
            for (let f = 0; f < m.length; f += d) c.write(m.substring(f, f + d));
          }
          switch ((c.end(), u)) {
            case "_rels/.rels":
              o.globalRels = await this.parseRels(c);
              break;
            case "xl/workbook.xml": {
              let m = await this.parseWorkbook(c);
              ((o.sheets = m.sheets),
                (o.definedNames = m.definedNames),
                (o.views = m.views),
                (o.properties = m.properties),
                (o.calcProperties = m.calcProperties));
              break;
            }
            case "xl/_rels/workbook.xml.rels":
              o.workbookRels = await this.parseRels(c);
              break;
            case "xl/sharedStrings.xml":
              ((o.sharedStrings = new EXt()), await o.sharedStrings.parseStream(c));
              break;
            case "xl/styles.xml":
              ((o.styles = new _Xt()), await o.styles.parseStream(c));
              break;
            case "docProps/app.xml": {
              let d = await new bNn().parseStream(c);
              ((o.company = d.company), (o.manager = d.manager));
              break;
            }
            case "docProps/core.xml": {
              let d = await new gNn().parseStream(c);
              Object.assign(o, d);
              break;
            }
            default: {
              let m = u.match(/xl\/worksheets\/sheet(\d+)[.]xml/);
              if (m) {
                await this._processWorksheetEntry(c, o, m[1], r, u);
                break;
              }
              if (((m = u.match(/xl\/worksheets\/_rels\/sheet(\d+)[.]xml.rels/)), m)) {
                await this._processWorksheetRelsEntry(c, o, m[1]);
                break;
              }
              if (((m = u.match(/xl\/theme\/([a-zA-Z0-9]+)[.]xml/)), m)) {
                await this._processThemeEntry(c, o, m[1]);
                break;
              }
              if (((m = u.match(/xl\/media\/([a-zA-Z0-9]+[.][a-zA-Z0-9]{3,4})$/)), m)) {
                await this._processMediaEntry(c, o, m[1]);
                break;
              }
              if (((m = u.match(/xl\/drawings\/([a-zA-Z0-9]+)[.]xml/)), m)) {
                await this._processDrawingEntry(c, o, m[1]);
                break;
              }
              if (((m = u.match(/xl\/(comments\d+)[.]xml/)), m)) {
                await this._processCommentEntry(c, o, m[1]);
                break;
              }
              if (((m = u.match(/xl\/tables\/(table\d+)[.]xml/)), m)) {
                await this._processTableEntry(c, o, m[1]);
                break;
              }
              if (((m = u.match(/xl\/drawings\/_rels\/([a-zA-Z0-9]+)[.]xml[.]rels/)), m)) {
                await this._processDrawingRelsEntry(c, o, m[1]);
                break;
              }
              if (((m = u.match(/xl\/drawings\/(vmlDrawing\d+)[.]vml/)), m)) {
                await this._processVmlDrawingEntry(c, o, m[1]);
                break;
              }
            }
          }
        }
      return (this.reconcile(o, r), (this.workbook.model = o), this.workbook);
    }
    async addMedia(e, r) {
      await Promise.all(
        r.media.map(async (n) => {
          if (n.type === "image") {
            let o = `xl/media/${n.name}.${n.extension}`;
            if (n.filename) {
              let s = await KPs(n.filename);
              return e.append(s, { name: o });
            }
            if (n.buffer) return e.append(n.buffer, { name: o });
            if (n.base64) {
              let s = n.base64,
                a = s.substring(s.indexOf(",") + 1);
              return e.append(a, { name: o, base64: !0 });
            }
          }
          throw new Error("Unsupported media");
        }),
      );
    }
    addDrawings(e, r) {
      let n = new vXt(),
        o = new CW();
      r.worksheets.forEach((s) => {
        let { drawing: a } = s;
        if (a) {
          n.prepare(a, {});
          let u = n.toXml(a);
          (e.append(u, { name: `xl/drawings/${a.name}.xml` }),
            (u = o.toXml(a.rels)),
            e.append(u, { name: `xl/drawings/_rels/${a.name}.xml.rels` }));
        }
      });
    }
    addTables(e, r) {
      let n = new CXt();
      r.worksheets.forEach((o) => {
        let { tables: s } = o;
        s.forEach((a) => {
          n.prepare(a, {});
          let u = n.toXml(a);
          e.append(u, { name: `xl/tables/${a.target}` });
        });
      });
    }
    async addContentTypes(e, r) {
      let o = new zPs().toXml(r);
      e.append(o, { name: "[Content_Types].xml" });
    }
    async addApp(e, r) {
      let o = new bNn().toXml(r);
      e.append(o, { name: "docProps/app.xml" });
    }
    async addCore(e, r) {
      let n = new gNn();
      e.append(n.toXml(r), { name: "docProps/core.xml" });
    }
    async addThemes(e, r) {
      let n = r.themes || { theme1: YPs };
      Object.keys(n).forEach((o) => {
        let s = n[o],
          a = `xl/theme/${o}.xml`;
        e.append(s, { name: a });
      });
    }
    async addOfficeRels(e) {
      let n = new CW().toXml([
        { Id: "rId1", Type: t.RelType.OfficeDocument, Target: "xl/workbook.xml" },
        { Id: "rId2", Type: t.RelType.CoreProperties, Target: "docProps/core.xml" },
        { Id: "rId3", Type: t.RelType.ExtenderProperties, Target: "docProps/app.xml" },
      ]);
      e.append(n, { name: "_rels/.rels" });
    }
    async addWorkbookRels(e, r) {
      let n = 1,
        o = [
          { Id: `rId${n++}`, Type: t.RelType.Styles, Target: "styles.xml" },
          { Id: `rId${n++}`, Type: t.RelType.Theme, Target: "theme/theme1.xml" },
        ];
      (r.sharedStrings.count && o.push({ Id: `rId${n++}`, Type: t.RelType.SharedStrings, Target: "sharedStrings.xml" }),
        r.worksheets.forEach((u) => {
          ((u.rId = `rId${n++}`),
            o.push({ Id: u.rId, Type: t.RelType.Worksheet, Target: `worksheets/sheet${u.id}.xml` }));
        }));
      let a = new CW().toXml(o);
      e.append(a, { name: "xl/_rels/workbook.xml.rels" });
    }
    async addSharedStrings(e, r) {
      r.sharedStrings && r.sharedStrings.count && e.append(r.sharedStrings.xml, { name: "xl/sharedStrings.xml" });
    }
    async addStyles(e, r) {
      let { xml: n } = r.styles;
      n && e.append(n, { name: "xl/styles.xml" });
    }
    async addWorkbook(e, r) {
      let n = new Uet();
      e.append(n.toXml(r), { name: "xl/workbook.xml" });
    }
    async addWorksheets(e, r) {
      let n = new $et(),
        o = new CW(),
        s = new ANn(),
        a = new yNn();
      r.worksheets.forEach((u) => {
        let c = new Fet();
        (n.render(c, u),
          e.append(c.xml, { name: `xl/worksheets/sheet${u.id}.xml` }),
          u.rels &&
            u.rels.length &&
            ((c = new Fet()),
            o.render(c, u.rels),
            e.append(c.xml, { name: `xl/worksheets/_rels/sheet${u.id}.xml.rels` })),
          u.comments.length > 0 &&
            ((c = new Fet()),
            s.render(c, u),
            e.append(c.xml, { name: `xl/comments${u.id}.xml` }),
            (c = new Fet()),
            a.render(c, u),
            e.append(c.xml, { name: `xl/drawings/vmlDrawing${u.id}.vml` })));
      });
    }
    _finalize(e) {
      return new Promise((r, n) => {
        (e.on("finish", () => {
          r(this);
        }),
          e.on("error", n),
          e.finalize());
      });
    }
    prepareModel(e, r) {
      ((e.creator = e.creator || "ExcelJS"),
        (e.lastModifiedBy = e.lastModifiedBy || "ExcelJS"),
        (e.created = e.created || new Date()),
        (e.modified = e.modified || new Date()),
        (e.useSharedStrings = r.useSharedStrings !== void 0 ? r.useSharedStrings : !0),
        (e.useStyles = r.useStyles !== void 0 ? r.useStyles : !0),
        (e.sharedStrings = new EXt()),
        (e.styles = e.useStyles ? new _Xt(!0) : new _Xt.Mock()));
      let n = new Uet(),
        o = new $et();
      n.prepare(e);
      let s = {
        sharedStrings: e.sharedStrings,
        styles: e.styles,
        date1904: e.properties.date1904,
        drawingsCount: 0,
        media: e.media,
      };
      ((s.drawings = e.drawings = []), (s.commentRefs = e.commentRefs = []));
      let a = 0;
      ((e.tables = []),
        e.worksheets.forEach((u) => {
          (u.tables.forEach((c) => {
            (a++, (c.target = `table${a}.xml`), (c.id = a), e.tables.push(c));
          }),
            o.prepare(u, s));
        }));
    }
    async write(e, r) {
      r = r || {};
      let { model: n } = this.workbook,
        o = new HPs.ZipWriter(r.zip);
      return (
        o.pipe(e),
        this.prepareModel(n, r),
        await this.addContentTypes(o, n),
        await this.addOfficeRels(o, n),
        await this.addWorkbookRels(o, n),
        await this.addWorksheets(o, n),
        await this.addSharedStrings(o, n),
        await this.addDrawings(o, n),
        await this.addTables(o, n),
        await Promise.all([this.addThemes(o, n), this.addStyles(o, n)]),
        await this.addMedia(o, n),
        await Promise.all([this.addApp(o, n), this.addCore(o, n)]),
        await this.addWorkbook(o, n),
        this._finalize(o)
      );
    }
    writeFile(e, r) {
      let n = SXt.createWriteStream(e);
      return new Promise((o, s) => {
        (n.on("finish", () => {
          o();
        }),
          n.on("error", (a) => {
            s(a);
          }),
          this.write(n, r)
            .then(() => {
              n.end();
            })
            .catch((a) => {
              s(a);
            }));
      });
    }
    async writeBuffer(e) {
      let r = new yXt();
      return (await this.write(r, e), r.read());
    }
  };
  jet.RelType = wF();
  _Nn.exports = jet;
});