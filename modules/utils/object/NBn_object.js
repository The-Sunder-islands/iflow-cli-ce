/**
 * @module NBn
 * @category utils/object
 * @label object
 * @position 1318 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (NBn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var NBn = T((K5c, OBn) => {
  "use strict";
  var kBn = SDn(),
    rjs = Lzt(),
    njs = wXt(),
    ijs = RBn(),
    qZt = class {
      constructor() {
        ((this.category = ""),
          (this.company = ""),
          (this.created = new Date()),
          (this.description = ""),
          (this.keywords = ""),
          (this.manager = ""),
          (this.modified = this.created),
          (this.properties = {}),
          (this.calcProperties = {}),
          (this._worksheets = []),
          (this.subject = ""),
          (this.title = ""),
          (this.views = []),
          (this.media = []),
          (this._definedNames = new rjs()));
      }
      get xlsx() {
        return (this._xlsx || (this._xlsx = new njs(this)), this._xlsx);
      }
      get csv() {
        return (this._csv || (this._csv = new ijs(this)), this._csv);
      }
      get nextId() {
        for (let e = 1; e < this._worksheets.length; e++) if (!this._worksheets[e]) return e;
        return this._worksheets.length || 1;
      }
      addWorksheet(e, r) {
        let n = this.nextId;
        r &&
          (typeof r == "string"
            ? (console.trace(
                'tabColor argument is now deprecated. Please use workbook.addWorksheet(name, {properties: { tabColor: { argb: "rbg value" } }',
              ),
              (r = { properties: { tabColor: { argb: r } } }))
            : (r.argb || r.theme || r.indexed) &&
              (console.trace(
                "tabColor argument is now deprecated. Please use workbook.addWorksheet(name, {properties: { tabColor: { ... } }",
              ),
              (r = { properties: { tabColor: r } })));
        let o = this._worksheets.reduce((u, c) => ((c && c.orderNo) > u ? c.orderNo : u), 0),
          s = Object.assign({}, r, { id: n, name: e, orderNo: o + 1, workbook: this }),
          a = new kBn(s);
        return ((this._worksheets[n] = a), a);
      }
      removeWorksheetEx(e) {
        delete this._worksheets[e.id];
      }
      removeWorksheet(e) {
        let r = this.getWorksheet(e);
        r && r.destroy();
      }
      getWorksheet(e) {
        if (e === void 0) return this._worksheets.find(Boolean);
        if (typeof e == "number") return this._worksheets[e];
        if (typeof e == "string") return this._worksheets.find((r) => r && r.name === e);
      }
      get worksheets() {
        return this._worksheets
          .slice(1)
          .sort((e, r) => e.orderNo - r.orderNo)
          .filter(Boolean);
      }
      eachSheet(e) {
        this.worksheets.forEach((r) => {
          e(r, r.id);
        });
      }
      get definedNames() {
        return this._definedNames;
      }
      clearThemes() {
        this._themes = void 0;
      }
      addImage(e) {
        let r = this.media.length;
        return (this.media.push(Object.assign({}, e, { type: "image" })), r);
      }
      getImage(e) {
        return this.media[e];
      }
      get model() {
        return {
          creator: this.creator || "Unknown",
          lastModifiedBy: this.lastModifiedBy || "Unknown",
          lastPrinted: this.lastPrinted,
          created: this.created,
          modified: this.modified,
          properties: this.properties,
          worksheets: this.worksheets.map((e) => e.model),
          sheets: this.worksheets.map((e) => e.model).filter(Boolean),
          definedNames: this._definedNames.model,
          views: this.views,
          company: this.company,
          manager: this.manager,
          title: this.title,
          subject: this.subject,
          keywords: this.keywords,
          category: this.category,
          description: this.description,
          language: this.language,
          revision: this.revision,
          contentStatus: this.contentStatus,
          themes: this._themes,
          media: this.media,
          calcProperties: this.calcProperties,
        };
      }
      set model(e) {
        ((this.creator = e.creator),
          (this.lastModifiedBy = e.lastModifiedBy),
          (this.lastPrinted = e.lastPrinted),
          (this.created = e.created),
          (this.modified = e.modified),
          (this.company = e.company),
          (this.manager = e.manager),
          (this.title = e.title),
          (this.subject = e.subject),
          (this.keywords = e.keywords),
          (this.category = e.category),
          (this.description = e.description),
          (this.language = e.language),
          (this.revision = e.revision),
          (this.contentStatus = e.contentStatus),
          (this.properties = e.properties),
          (this.calcProperties = e.calcProperties),
          (this._worksheets = []),
          e.worksheets.forEach((r) => {
            let { id: n, name: o, state: s } = r,
              a = e.sheets && e.sheets.findIndex((c) => c.id === n),
              u = (this._worksheets[n] = new kBn({ id: n, name: o, orderNo: a, state: s, workbook: this }));
            u.model = r;
          }),
          (this._definedNames.model = e.definedNames),
          (this.views = e.views),
          (this._themes = e.themes),
          (this.media = e.media || []));
      }
    };
  OBn.exports = qZt;
});