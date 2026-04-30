/**
 * @module Njn
 * @category utils/net
 * @label mime
 * @position 1399 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Njn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Njn = T((K9c, Ojn) => {
  var yKs = Ae("fs"),
    _Ks = hjn(),
    Ijn = u_e(),
    YW = wF(),
    Rjn = yet(),
    EKs = bjn(),
    vKs = Lzt(),
    CKs = aKt(),
    kjn = Cet(),
    SKs = pKt(),
    wKs = bKt(),
    xKs = xet(),
    TKs = dKt(),
    DKs = Djn(),
    IKs = bXt(),
    Drr = class {
      constructor(e) {
        ((e = e || {}),
          (this.created = e.created || new Date()),
          (this.modified = e.modified || this.created),
          (this.creator = e.creator || "ExcelJS"),
          (this.lastModifiedBy = e.lastModifiedBy || "ExcelJS"),
          (this.lastPrinted = e.lastPrinted),
          (this.useSharedStrings = e.useSharedStrings || !1),
          (this.sharedStrings = new EKs()),
          (this.styles = e.useStyles ? new Rjn(!0) : new Rjn.Mock(!0)),
          (this._definedNames = new vKs()),
          (this._worksheets = []),
          (this.views = []),
          (this.zipOptions = e.zip),
          (this.media = []),
          (this.commentRefs = []),
          (this.zip = _Ks("zip", this.zipOptions)),
          e.stream
            ? (this.stream = e.stream)
            : e.filename
              ? (this.stream = yKs.createWriteStream(e.filename))
              : (this.stream = new Ijn()),
          this.zip.pipe(this.stream),
          (this.promise = Promise.all([this.addThemes(), this.addOfficeRels()])));
      }
      get definedNames() {
        return this._definedNames;
      }
      _openStream(e) {
        let r = new Ijn({ bufSize: 65536, batch: !0 });
        return (
          this.zip.append(r, { name: e }),
          r.on("finish", () => {
            r.emit("zipped");
          }),
          r
        );
      }
      _commitWorksheets() {
        let e = function (n) {
            return n.committed
              ? Promise.resolve()
              : new Promise((o) => {
                  (n.stream.on("zipped", () => {
                    o();
                  }),
                    n.commit());
                });
          },
          r = this._worksheets.map(e);
        return r.length ? Promise.all(r) : Promise.resolve();
      }
      async commit() {
        return (
          await this.promise,
          await this.addMedia(),
          await this._commitWorksheets(),
          await Promise.all([
            this.addContentTypes(),
            this.addApp(),
            this.addCore(),
            this.addSharedStrings(),
            this.addStyles(),
            this.addWorkbookRels(),
          ]),
          await this.addWorkbook(),
          this._finalize()
        );
      }
      get nextId() {
        let e;
        for (e = 1; e < this._worksheets.length; e++) if (!this._worksheets[e]) return e;
        return this._worksheets.length || 1;
      }
      addImage(e) {
        let r = this.media.length,
          n = Object.assign({}, e, { type: "image", name: `image${r}.${e.extension}` });
        return (this.media.push(n), r);
      }
      getImage(e) {
        return this.media[e];
      }
      addWorksheet(e, r) {
        r = r || {};
        let n = r.useSharedStrings !== void 0 ? r.useSharedStrings : this.useSharedStrings;
        r.tabColor &&
          (console.trace("tabColor option has moved to { properties: tabColor: {...} }"),
          (r.properties = Object.assign({ tabColor: r.tabColor }, r.properties)));
        let o = this.nextId;
        e = e || `sheet${o}`;
        let s = new DKs({
          id: o,
          name: e,
          workbook: this,
          useSharedStrings: n,
          properties: r.properties,
          state: r.state,
          pageSetup: r.pageSetup,
          views: r.views,
          autoFilter: r.autoFilter,
          headerFooter: r.headerFooter,
        });
        return ((this._worksheets[o] = s), s);
      }
      getWorksheet(e) {
        if (e === void 0) return this._worksheets.find(() => !0);
        if (typeof e == "number") return this._worksheets[e];
        if (typeof e == "string") return this._worksheets.find((r) => r && r.name === e);
      }
      addStyles() {
        return new Promise((e) => {
          (this.zip.append(this.styles.xml, { name: "xl/styles.xml" }), e());
        });
      }
      addThemes() {
        return new Promise((e) => {
          (this.zip.append(IKs, { name: "xl/theme/theme1.xml" }), e());
        });
      }
      addOfficeRels() {
        return new Promise((e) => {
          let n = new kjn().toXml([
            { Id: "rId1", Type: YW.OfficeDocument, Target: "xl/workbook.xml" },
            { Id: "rId2", Type: YW.CoreProperties, Target: "docProps/core.xml" },
            { Id: "rId3", Type: YW.ExtenderProperties, Target: "docProps/app.xml" },
          ]);
          (this.zip.append(n, { name: "/_rels/.rels" }), e());
        });
      }
      addContentTypes() {
        return new Promise((e) => {
          let r = {
              worksheets: this._worksheets.filter(Boolean),
              sharedStrings: this.sharedStrings,
              commentRefs: this.commentRefs,
              media: this.media,
            },
            o = new SKs().toXml(r);
          (this.zip.append(o, { name: "[Content_Types].xml" }), e());
        });
      }
      addMedia() {
        return Promise.all(
          this.media.map((e) => {
            if (e.type === "image") {
              let r = `xl/media/${e.name}`;
              if (e.filename) return this.zip.file(e.filename, { name: r });
              if (e.buffer) return this.zip.append(e.buffer, { name: r });
              if (e.base64) {
                let n = e.base64,
                  o = n.substring(n.indexOf(",") + 1);
                return this.zip.append(o, { name: r, base64: !0 });
              }
            }
            throw new Error("Unsupported media");
          }),
        );
      }
      addApp() {
        return new Promise((e) => {
          let r = { worksheets: this._worksheets.filter(Boolean) },
            o = new wKs().toXml(r);
          (this.zip.append(o, { name: "docProps/app.xml" }), e());
        });
      }
      addCore() {
        return new Promise((e) => {
          let n = new CKs().toXml(this);
          (this.zip.append(n, { name: "docProps/core.xml" }), e());
        });
      }
      addSharedStrings() {
        return this.sharedStrings.count
          ? new Promise((e) => {
              let n = new TKs().toXml(this.sharedStrings);
              (this.zip.append(n, { name: "/xl/sharedStrings.xml" }), e());
            })
          : Promise.resolve();
      }
      addWorkbookRels() {
        let e = 1,
          r = [
            { Id: `rId${e++}`, Type: YW.Styles, Target: "styles.xml" },
            { Id: `rId${e++}`, Type: YW.Theme, Target: "theme/theme1.xml" },
          ];
        return (
          this.sharedStrings.count && r.push({ Id: `rId${e++}`, Type: YW.SharedStrings, Target: "sharedStrings.xml" }),
          this._worksheets.forEach((n) => {
            n &&
              ((n.rId = `rId${e++}`), r.push({ Id: n.rId, Type: YW.Worksheet, Target: `worksheets/sheet${n.id}.xml` }));
          }),
          new Promise((n) => {
            let s = new kjn().toXml(r);
            (this.zip.append(s, { name: "/xl/_rels/workbook.xml.rels" }), n());
          })
        );
      }
      addWorkbook() {
        let { zip: e } = this,
          r = {
            worksheets: this._worksheets.filter(Boolean),
            definedNames: this._definedNames.model,
            views: this.views,
            properties: {},
            calcProperties: {},
          };
        return new Promise((n) => {
          let o = new xKs();
          (o.prepare(r), e.append(o.toXml(r), { name: "/xl/workbook.xml" }), n());
        });
      }
      _finalize() {
        return new Promise((e, r) => {
          (this.stream.on("error", r),
            this.stream.on("finish", () => {
              e(this);
            }),
            this.zip.on("error", r),
            this.zip.finalize());
        });
      }
    };
  Ojn.exports = Drr;
});