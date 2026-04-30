/**
 * @module Djn
 * @category utils/crypto
 * @label crypto
 * @position 1398 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Djn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Djn = T((Y9c, Tjn) => {
  var XYs = f1(),
    ZYs = wF(),
    Srr = Pd(),
    Sjn = kzt(),
    wjn = Jk(),
    eKs = lYt(),
    xjn = kZe(),
    wrr = OZe(),
    tKs = yjn(),
    rKs = Cjn(),
    nKs = Izt(),
    Jh = new eKs(),
    xrr = vF(),
    iKs = $Kt(),
    oKs = qKt(),
    sKs = VKt(),
    aKs = OKt(),
    uKs = IKt(),
    cKs = BKt(),
    lKs = zKt(),
    mKs = KKt(),
    dKs = XKt(),
    fKs = eJt(),
    pKs = nJt(),
    hKs = oJt(),
    gKs = xJt(),
    bKs = dJt(),
    AKs = lJt(),
    Xh = {
      dataValidations: new iKs(),
      sheetProperties: new oKs(),
      sheetFormatProperties: new sKs(),
      columns: new xrr({ tag: "cols", length: !1, childXform: new aKs() }),
      row: new uKs(),
      hyperlinks: new xrr({ tag: "hyperlinks", length: !1, childXform: new cKs() }),
      sheetViews: new xrr({ tag: "sheetViews", length: !1, childXform: new lKs() }),
      sheetProtection: new mKs(),
      pageMargins: new dKs(),
      pageSeteup: new fKs(),
      autoFilter: new pKs(),
      picture: new hKs(),
      conditionalFormattings: new gKs(),
      headerFooter: new bKs(),
      rowBreaks: new AKs(),
    },
    Trr = class {
      constructor(e) {
        ((this.id = e.id),
          (this.name = e.name || `Sheet${this.id}`),
          (this.state = e.state || "visible"),
          (this._rows = []),
          (this._columns = null),
          (this._keys = {}),
          (this._merges = []),
          (this._merges.add = function () {}),
          (this._sheetRelsWriter = new tKs(e)),
          (this._sheetCommentsWriter = new rKs(this, this._sheetRelsWriter, e)),
          (this._dimensions = new wjn()),
          (this._rowZero = 1),
          (this.committed = !1),
          (this.dataValidations = new nKs()),
          (this._formulae = {}),
          (this._siFormulae = 0),
          (this.conditionalFormatting = []),
          (this.rowBreaks = []),
          (this.properties = Object.assign(
            {},
            { defaultRowHeight: 15, dyDescent: 55, outlineLevelCol: 0, outlineLevelRow: 0 },
            e.properties,
          )),
          (this.headerFooter = Object.assign(
            {},
            {
              differentFirst: !1,
              differentOddEven: !1,
              oddHeader: null,
              oddFooter: null,
              evenHeader: null,
              evenFooter: null,
              firstHeader: null,
              firstFooter: null,
            },
            e.headerFooter,
          )),
          (this.pageSetup = Object.assign(
            {},
            {
              margins: { left: 0.7, right: 0.7, top: 0.75, bottom: 0.75, header: 0.3, footer: 0.3 },
              orientation: "portrait",
              horizontalDpi: 4294967295,
              verticalDpi: 4294967295,
              fitToPage: !!(e.pageSetup && (e.pageSetup.fitToWidth || e.pageSetup.fitToHeight) && !e.pageSetup.scale),
              pageOrder: "downThenOver",
              blackAndWhite: !1,
              draft: !1,
              cellComments: "None",
              errors: "displayed",
              scale: 100,
              fitToWidth: 1,
              fitToHeight: 1,
              paperSize: void 0,
              showRowColHeaders: !1,
              showGridLines: !1,
              horizontalCentered: !1,
              verticalCentered: !1,
              rowBreaks: null,
              colBreaks: null,
            },
            e.pageSetup,
          )),
          (this.useSharedStrings = e.useSharedStrings || !1),
          (this._workbook = e.workbook),
          (this.hasComments = !1),
          (this._views = e.views || []),
          (this.autoFilter = e.autoFilter || null),
          (this._media = []),
          (this.sheetProtection = null),
          this._writeOpenWorksheet(),
          (this.startedData = !1));
      }
      get workbook() {
        return this._workbook;
      }
      get stream() {
        return (
          this._stream ||
            ((this._stream = this._workbook._openStream(`/xl/worksheets/sheet${this.id}.xml`)), this._stream.pause()),
          this._stream
        );
      }
      destroy() {
        throw new Error("Invalid Operation: destroy");
      }
      commit() {
        this.committed ||
          (this._rows.forEach((e) => {
            e && this._writeRow(e);
          }),
          (this._rows = null),
          this.startedData || this._writeOpenSheetData(),
          this._writeCloseSheetData(),
          this._writeAutoFilter(),
          this._writeMergeCells(),
          this._writeHyperlinks(),
          this._writeConditionalFormatting(),
          this._writeDataValidations(),
          this._writeSheetProtection(),
          this._writePageMargins(),
          this._writePageSetup(),
          this._writeBackground(),
          this._writeHeaderFooter(),
          this._writeRowBreaks(),
          this._writeLegacyData(),
          this._writeCloseWorksheet(),
          this.stream.end(),
          this._sheetCommentsWriter.commit(),
          this._sheetRelsWriter.commit(),
          (this.committed = !0));
      }
      get dimensions() {
        return this._dimensions;
      }
      get views() {
        return this._views;
      }
      get columns() {
        return this._columns;
      }
      set columns(e) {
        this._headerRowCount = e.reduce((o, s) => {
          let a = (s.header && 1) || (s.headers && s.headers.length) || 0;
          return Math.max(o, a);
        }, 0);
        let r = 1,
          n = (this._columns = []);
        e.forEach((o) => {
          let s = new wrr(this, r++, !1);
          (n.push(s), (s.defn = o));
        });
      }
      getColumnKey(e) {
        return this._keys[e];
      }
      setColumnKey(e, r) {
        this._keys[e] = r;
      }
      deleteColumnKey(e) {
        delete this._keys[e];
      }
      eachColumnKey(e) {
        XYs.each(this._keys, e);
      }
      getColumn(e) {
        if (typeof e == "string") {
          let r = this._keys[e];
          if (r) return r;
          e = Srr.l2n(e);
        }
        if ((this._columns || (this._columns = []), e > this._columns.length)) {
          let r = this._columns.length + 1;
          for (; r <= e; ) this._columns.push(new wrr(this, r++));
        }
        return this._columns[e - 1];
      }
      get _nextRow() {
        return this._rowZero + this._rows.length;
      }
      eachRow(e, r) {
        if ((r || ((r = e), (e = void 0)), e && e.includeEmpty)) {
          let n = this._nextRow;
          for (let o = this._rowZero; o < n; o++) r(this.getRow(o), o);
        } else
          this._rows.forEach((n) => {
            n.hasValues && r(n, n.number);
          });
      }
      _commitRow(e) {
        let r = !1;
        for (; this._rows.length && !r; ) {
          let n = this._rows.shift();
          (this._rowZero++, n && (this._writeRow(n), (r = n.number === e.number), (this._rowZero = n.number + 1)));
        }
      }
      get lastRow() {
        if (this._rows.length) return this._rows[this._rows.length - 1];
      }
      findRow(e) {
        let r = e - this._rowZero;
        return this._rows[r];
      }
      getRow(e) {
        let r = e - this._rowZero;
        if (r < 0) throw new Error("Out of bounds: this row has been committed");
        let n = this._rows[r];
        return (n || (this._rows[r] = n = new xjn(this, e)), n);
      }
      addRow(e) {
        let r = new xjn(this, this._nextRow);
        return ((this._rows[r.number - this._rowZero] = r), (r.values = e), r);
      }
      findCell(e, r) {
        let n = Srr.getAddress(e, r),
          o = this.findRow(n.row);
        return o ? o.findCell(n.column) : void 0;
      }
      getCell(e, r) {
        let n = Srr.getAddress(e, r);
        return this.getRow(n.row).getCellEx(n);
      }
      mergeCells(...e) {
        let r = new wjn(e);
        this._merges.forEach((o) => {
          if (o.intersects(r)) throw new Error("Cannot merge already merged cells");
        });
        let n = this.getCell(r.top, r.left);
        for (let o = r.top; o <= r.bottom; o++)
          for (let s = r.left; s <= r.right; s++) (o > r.top || s > r.left) && this.getCell(o, s).merge(n);
        this._merges.push(r);
      }
      addConditionalFormatting(e) {
        this.conditionalFormatting.push(e);
      }
      removeConditionalFormatting(e) {
        typeof e == "number"
          ? this.conditionalFormatting.splice(e, 1)
          : e instanceof Function
            ? (this.conditionalFormatting = this.conditionalFormatting.filter(e))
            : (this.conditionalFormatting = []);
      }
      addBackgroundImage(e) {
        this._background = { imageId: e };
      }
      getBackgroundImageId() {
        return this._background && this._background.imageId;
      }
      protect(e, r) {
        return new Promise((n) => {
          ((this.sheetProtection = { sheet: !0 }),
            r &&
              "spinCount" in r &&
              (r.spinCount = Number.isFinite(r.spinCount) ? Math.round(Math.max(0, r.spinCount)) : 1e5),
            e &&
              ((this.sheetProtection.algorithmName = "SHA-512"),
              (this.sheetProtection.saltValue = Sjn.randomBytes(16).toString("base64")),
              (this.sheetProtection.spinCount = r && "spinCount" in r ? r.spinCount : 1e5),
              (this.sheetProtection.hashValue = Sjn.convertPasswordToHash(
                e,
                "SHA512",
                this.sheetProtection.saltValue,
                this.sheetProtection.spinCount,
              ))),
            r &&
              ((this.sheetProtection = Object.assign(this.sheetProtection, r)),
              !e && "spinCount" in r && delete this.sheetProtection.spinCount),
            n());
        });
      }
      unprotect() {
        this.sheetProtection = null;
      }
      _write(e) {
        (Jh.reset(), Jh.addText(e), this.stream.write(Jh));
      }
      _writeSheetProperties(e, r, n) {
        let o = {
          outlineProperties: r && r.outlineProperties,
          tabColor: r && r.tabColor,
          pageSetup: n && n.fitToPage ? { fitToPage: n.fitToPage } : void 0,
        };
        e.addText(Xh.sheetProperties.toXml(o));
      }
      _writeSheetFormatProperties(e, r) {
        let n = r
          ? {
              defaultRowHeight: r.defaultRowHeight,
              dyDescent: r.dyDescent,
              outlineLevelCol: r.outlineLevelCol,
              outlineLevelRow: r.outlineLevelRow,
            }
          : void 0;
        (r.defaultColWidth && (n.defaultColWidth = r.defaultColWidth), e.addText(Xh.sheetFormatProperties.toXml(n)));
      }
      _writeOpenWorksheet() {
        (Jh.reset(),
          Jh.addText('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'),
          Jh.addText(
            '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">',
          ),
          this._writeSheetProperties(Jh, this.properties, this.pageSetup),
          Jh.addText(Xh.sheetViews.toXml(this.views)),
          this._writeSheetFormatProperties(Jh, this.properties),
          this.stream.write(Jh));
      }
      _writeColumns() {
        let e = wrr.toModel(this.columns);
        e && (Xh.columns.prepare(e, { styles: this._workbook.styles }), this.stream.write(Xh.columns.toXml(e)));
      }
      _writeOpenSheetData() {
        this._write("<sheetData>");
      }
      _writeRow(e) {
        if (
          (this.startedData || (this._writeColumns(), this._writeOpenSheetData(), (this.startedData = !0)),
          e.hasValues || e.height)
        ) {
          let { model: r } = e,
            n = {
              styles: this._workbook.styles,
              sharedStrings: this.useSharedStrings ? this._workbook.sharedStrings : void 0,
              hyperlinks: this._sheetRelsWriter.hyperlinksProxy,
              merges: this._merges,
              formulae: this._formulae,
              siFormulae: this._siFormulae,
              comments: [],
            };
          (Xh.row.prepare(r, n),
            this.stream.write(Xh.row.toXml(r)),
            n.comments.length && ((this.hasComments = !0), this._sheetCommentsWriter.addComments(n.comments)));
        }
      }
      _writeCloseSheetData() {
        this._write("</sheetData>");
      }
      _writeMergeCells() {
        this._merges.length &&
          (Jh.reset(),
          Jh.addText(`<mergeCells count="${this._merges.length}">`),
          this._merges.forEach((e) => {
            Jh.addText(`<mergeCell ref="${e}"/>`);
          }),
          Jh.addText("</mergeCells>"),
          this.stream.write(Jh));
      }
      _writeHyperlinks() {
        this.stream.write(Xh.hyperlinks.toXml(this._sheetRelsWriter._hyperlinks));
      }
      _writeConditionalFormatting() {
        let e = { styles: this._workbook.styles };
        (Xh.conditionalFormattings.prepare(this.conditionalFormatting, e),
          this.stream.write(Xh.conditionalFormattings.toXml(this.conditionalFormatting)));
      }
      _writeRowBreaks() {
        this.stream.write(Xh.rowBreaks.toXml(this.rowBreaks));
      }
      _writeDataValidations() {
        this.stream.write(Xh.dataValidations.toXml(this.dataValidations.model));
      }
      _writeSheetProtection() {
        this.stream.write(Xh.sheetProtection.toXml(this.sheetProtection));
      }
      _writePageMargins() {
        this.stream.write(Xh.pageMargins.toXml(this.pageSetup.margins));
      }
      _writePageSetup() {
        this.stream.write(Xh.pageSeteup.toXml(this.pageSetup));
      }
      _writeHeaderFooter() {
        this.stream.write(Xh.headerFooter.toXml(this.headerFooter));
      }
      _writeAutoFilter() {
        this.stream.write(Xh.autoFilter.toXml(this.autoFilter));
      }
      _writeBackground() {
        if (this._background) {
          if (this._background.imageId !== void 0) {
            let e = this._workbook.getImage(this._background.imageId),
              r = this._sheetRelsWriter.addMedia({ Target: `../media/${e.name}`, Type: ZYs.Image });
            this._background = { ...this._background, rId: r };
          }
          this.stream.write(Xh.picture.toXml({ rId: this._background.rId }));
        }
      }
      _writeLegacyData() {
        this.hasComments &&
          (Jh.reset(),
          Jh.addText(`<legacyDrawing r:id="${this._sheetCommentsWriter.vmlRelId}"/>`),
          this.stream.write(Jh));
      }
      _writeDimensions() {}
      _writeCloseWorksheet() {
        this._write("</worksheet>");
      }
    };
  Tjn.exports = Trr;
});