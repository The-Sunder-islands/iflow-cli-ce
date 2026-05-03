/**
 * @module SDn
 * @category app/usage
 * @label iflow-usage
 * @position 1140 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (SDn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Features: esbuild module exports: SDn
 * === End semantic info ===
 */


var SDn = T((Nbc, CDn) => {
  var Yye = f1(),
    Kye = Pd(),
    Jye = Jk(),
    ADn = kZe(),
    BZe = OZe(),
    STs = tS(),
    Ozt = lDn(),
    yDn = dDn(),
    _Dn = Izt(),
    EDn = kzt(),
    { copyStyle: vDn } = bDn(),
    Nzt = class {
      constructor(e) {
        ((e = e || {}),
          (this._workbook = e.workbook),
          (this.id = e.id),
          (this.orderNo = e.orderNo),
          (this.name = e.name),
          (this.state = e.state || "visible"),
          (this._rows = []),
          (this._columns = null),
          (this._keys = {}),
          (this._merges = {}),
          (this.rowBreaks = []),
          (this.properties = Object.assign(
            {},
            { defaultRowHeight: 15, dyDescent: 55, outlineLevelCol: 0, outlineLevelRow: 0 },
            e.properties,
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
              firstPageNumber: void 0,
              horizontalCentered: !1,
              verticalCentered: !1,
              rowBreaks: null,
              colBreaks: null,
            },
            e.pageSetup,
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
          (this.dataValidations = new _Dn()),
          (this.views = e.views || []),
          (this.autoFilter = e.autoFilter || null),
          (this._media = []),
          (this.sheetProtection = null),
          (this.tables = {}),
          (this.conditionalFormattings = []));
      }
      get name() {
        return this._name;
      }
      set name(e) {
        if ((e === void 0 && (e = `sheet${this.id}`), this._name !== e)) {
          if (typeof e != "string") throw new Error("The name has to be a string.");
          if (e === "") throw new Error("The name can't be empty.");
          if (e === "History") throw new Error('The name "History" is protected. Please use a different name.');
          if (/[*?:/\\[\]]/.test(e))
            throw new Error(`Worksheet name ${e} cannot include any of the following characters: * ? : \\ / [ ]`);
          if (/(^')|('$)/.test(e))
            throw new Error(`The first or last character of worksheet name cannot be a single quotation mark: ${e}`);
          if (
            (e &&
              e.length > 31 &&
              (console.warn(`Worksheet name ${e} exceeds 31 chars. This will be truncated`), (e = e.substring(0, 31))),
            this._workbook._worksheets.find((r) => r && r.name.toLowerCase() === e.toLowerCase()))
          )
            throw new Error(`Worksheet name already exists: ${e}`);
          this._name = e;
        }
      }
      get workbook() {
        return this._workbook;
      }
      destroy() {
        this._workbook.removeWorksheetEx(this);
      }
      get dimensions() {
        let e = new Jye();
        return (
          this._rows.forEach((r) => {
            if (r) {
              let n = r.dimensions;
              n && e.expand(r.number, n.min, r.number, n.max);
            }
          }),
          e
        );
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
          let s = new BZe(this, r++, !1);
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
        Yye.each(this._keys, e);
      }
      getColumn(e) {
        if (typeof e == "string") {
          let r = this._keys[e];
          if (r) return r;
          e = Kye.l2n(e);
        }
        if ((this._columns || (this._columns = []), e > this._columns.length)) {
          let r = this._columns.length + 1;
          for (; r <= e; ) this._columns.push(new BZe(this, r++));
        }
        return this._columns[e - 1];
      }
      spliceColumns(e, r, ...n) {
        let s = this._rows.length;
        if (n.length > 0)
          for (let m = 0; m < s; m++) {
            let d = [e, r];
            n.forEach((p) => {
              d.push(p[m] || null);
            });
            let f = this.getRow(m + 1);
            f.splice.apply(f, d);
          }
        else
          this._rows.forEach((m) => {
            m && m.splice(e, r);
          });
        let a = n.length - r,
          u = e + r,
          c = this._columns.length;
        if (a < 0) for (let m = e + n.length; m <= c; m++) this.getColumn(m).defn = this.getColumn(m - a).defn;
        else if (a > 0) for (let m = c; m >= u; m--) this.getColumn(m + a).defn = this.getColumn(m).defn;
        for (let m = e; m < e + n.length; m++) this.getColumn(m).defn = null;
        this.workbook.definedNames.spliceColumns(this.name, e, r, n.length);
      }
      get lastColumn() {
        return this.getColumn(this.columnCount);
      }
      get columnCount() {
        let e = 0;
        return (
          this.eachRow((r) => {
            e = Math.max(e, r.cellCount);
          }),
          e
        );
      }
      get actualColumnCount() {
        let e = [],
          r = 0;
        return (
          this.eachRow((n) => {
            n.eachCell(({ col: o }) => {
              e[o] || ((e[o] = !0), r++);
            });
          }),
          r
        );
      }
      _commitRow() {}
      get _lastRowNumber() {
        let e = this._rows,
          r = e.length;
        for (; r > 0 && e[r - 1] === void 0; ) r--;
        return r;
      }
      get _nextRow() {
        return this._lastRowNumber + 1;
      }
      get lastRow() {
        if (this._rows.length) return this._rows[this._rows.length - 1];
      }
      findRow(e) {
        return this._rows[e - 1];
      }
      findRows(e, r) {
        return this._rows.slice(e - 1, e - 1 + r);
      }
      get rowCount() {
        return this._lastRowNumber;
      }
      get actualRowCount() {
        let e = 0;
        return (
          this.eachRow(() => {
            e++;
          }),
          e
        );
      }
      getRow(e) {
        let r = this._rows[e - 1];
        return (r || (r = this._rows[e - 1] = new ADn(this, e)), r);
      }
      getRows(e, r) {
        if (r < 1) return;
        let n = [];
        for (let o = e; o < e + r; o++) n.push(this.getRow(o));
        return n;
      }
      addRow(e, r = "n") {
        let n = this._nextRow,
          o = this.getRow(n);
        return ((o.values = e), this._setStyleOption(n, r[0] === "i" ? r : "n"), o);
      }
      addRows(e, r = "n") {
        let n = [];
        return (
          e.forEach((o) => {
            n.push(this.addRow(o, r));
          }),
          n
        );
      }
      insertRow(e, r, n = "n") {
        return (this.spliceRows(e, 0, r), this._setStyleOption(e, n), this.getRow(e));
      }
      insertRows(e, r, n = "n") {
        if ((this.spliceRows(e, 0, ...r), n !== "n"))
          for (let o = 0; o < r.length; o++)
            n[0] === "o" && this.findRow(r.length + e + o) !== void 0
              ? this._copyStyle(r.length + e + o, e + o, n[1] === "+")
              : n[0] === "i" && this.findRow(e - 1) !== void 0 && this._copyStyle(e - 1, e + o, n[1] === "+");
        return this.getRows(e, r.length);
      }
      _setStyleOption(e, r = "n") {
        r[0] === "o" && this.findRow(e + 1) !== void 0
          ? this._copyStyle(e + 1, e, r[1] === "+")
          : r[0] === "i" && this.findRow(e - 1) !== void 0 && this._copyStyle(e - 1, e, r[1] === "+");
      }
      _copyStyle(e, r, n = !1) {
        let o = this.getRow(e),
          s = this.getRow(r);
        ((s.style = vDn(o.style)),
          o.eachCell({ includeEmpty: n }, (a, u) => {
            s.getCell(u).style = vDn(a.style);
          }),
          (s.height = o.height));
      }
      duplicateRow(e, r, n = !1) {
        let o = this._rows[e - 1],
          s = new Array(r).fill(o.values);
        this.spliceRows(e + 1, n ? 0 : r, ...s);
        for (let a = 0; a < r; a++) {
          let u = this._rows[e + a];
          ((u.style = o.style),
            (u.height = o.height),
            o.eachCell({ includeEmpty: !0 }, (c, m) => {
              u.getCell(m).style = c.style;
            }));
        }
      }
      spliceRows(e, r, ...n) {
        let o = e + r,
          s = n.length,
          a = s - r,
          u = this._rows.length,
          c,
          m;
        if (a < 0)
          for (e === u && (this._rows[u - 1] = void 0), c = o; c <= u; c++)
            if (((m = this._rows[c - 1]), m)) {
              let d = this.getRow(c + a);
              ((d.values = m.values),
                (d.style = m.style),
                (d.height = m.height),
                m.eachCell({ includeEmpty: !0 }, (f, p) => {
                  d.getCell(p).style = f.style;
                }),
                (this._rows[c - 1] = void 0));
            } else this._rows[c + a - 1] = void 0;
        else if (a > 0)
          for (c = u; c >= o; c--)
            if (((m = this._rows[c - 1]), m)) {
              let d = this.getRow(c + a);
              ((d.values = m.values),
                (d.style = m.style),
                (d.height = m.height),
                m.eachCell({ includeEmpty: !0 }, (f, p) => {
                  if (((d.getCell(p).style = f.style), f._value.constructor.name === "MergeValue")) {
                    let h = this.getRow(f._row._number + s).getCell(p),
                      g = f._value._master,
                      b = this.getRow(g._row._number + s).getCell(g._column._number);
                    h.merge(b);
                  }
                }));
            } else this._rows[c + a - 1] = void 0;
        for (c = 0; c < s; c++) {
          let d = this.getRow(e + c);
          ((d.style = {}), (d.values = n[c]));
        }
        this.workbook.definedNames.spliceRows(this.name, e, r, s);
      }
      eachRow(e, r) {
        if ((r || ((r = e), (e = void 0)), e && e.includeEmpty)) {
          let n = this._rows.length;
          for (let o = 1; o <= n; o++) r(this.getRow(o), o);
        } else
          this._rows.forEach((n) => {
            n && n.hasValues && r(n, n.number);
          });
      }
      getSheetValues() {
        let e = [];
        return (
          this._rows.forEach((r) => {
            r && (e[r.number] = r.values);
          }),
          e
        );
      }
      findCell(e, r) {
        let n = Kye.getAddress(e, r),
          o = this._rows[n.row - 1];
        return o ? o.findCell(n.col) : void 0;
      }
      getCell(e, r) {
        let n = Kye.getAddress(e, r);
        return this.getRow(n.row).getCellEx(n);
      }
      mergeCells(...e) {
        let r = new Jye(e);
        this._mergeCellsInternal(r);
      }
      mergeCellsWithoutStyle(...e) {
        let r = new Jye(e);
        this._mergeCellsInternal(r, !0);
      }
      _mergeCellsInternal(e, r) {
        Yye.each(this._merges, (o) => {
          if (o.intersects(e)) throw new Error("Cannot merge already merged cells");
        });
        let n = this.getCell(e.top, e.left);
        for (let o = e.top; o <= e.bottom; o++)
          for (let s = e.left; s <= e.right; s++) (o > e.top || s > e.left) && this.getCell(o, s).merge(n, r);
        this._merges[n.address] = e;
      }
      _unMergeMaster(e) {
        let r = this._merges[e.address];
        if (r) {
          for (let n = r.top; n <= r.bottom; n++) for (let o = r.left; o <= r.right; o++) this.getCell(n, o).unmerge();
          delete this._merges[e.address];
        }
      }
      get hasMerges() {
        return Yye.some(this._merges, Boolean);
      }
      unMergeCells(...e) {
        let r = new Jye(e);
        for (let n = r.top; n <= r.bottom; n++)
          for (let o = r.left; o <= r.right; o++) {
            let s = this.findCell(n, o);
            s &&
              (s.type === STs.ValueType.Merge
                ? this._unMergeMaster(s.master)
                : this._merges[s.address] && this._unMergeMaster(s));
          }
      }
      fillFormula(e, r, n, o = "shared") {
        let s = Kye.decode(e),
          { top: a, left: u, bottom: c, right: m } = s,
          d = m - u + 1,
          f = Kye.encodeAddress(a, u),
          p = o === "shared",
          h;
        typeof n == "function"
          ? (h = n)
          : Array.isArray(n)
            ? Array.isArray(n[0])
              ? (h = (b, A) => n[b - a][A - u])
              : (h = (b, A) => n[(b - a) * d + (A - u)])
            : (h = () => {});
        let g = !0;
        for (let b = a; b <= c; b++)
          for (let A = u; A <= m; A++)
            g
              ? ((this.getCell(b, A).value = { shareType: o, formula: r, ref: e, result: h(b, A) }), (g = !1))
              : (this.getCell(b, A).value = p ? { sharedFormula: f, result: h(b, A) } : h(b, A));
      }
      addImage(e, r) {
        let n = { type: "image", imageId: e, range: r };
        this._media.push(new Ozt(this, n));
      }
      getImages() {
        return this._media.filter((e) => e.type === "image");
      }
      addBackgroundImage(e) {
        let r = { type: "background", imageId: e };
        this._media.push(new Ozt(this, r));
      }
      getBackgroundImageId() {
        let e = this._media.find((r) => r.type === "background");
        return e && e.imageId;
      }
      protect(e, r) {
        return new Promise((n) => {
          ((this.sheetProtection = { sheet: !0 }),
            r &&
              "spinCount" in r &&
              (r.spinCount = Number.isFinite(r.spinCount) ? Math.round(Math.max(0, r.spinCount)) : 1e5),
            e &&
              ((this.sheetProtection.algorithmName = "SHA-512"),
              (this.sheetProtection.saltValue = EDn.randomBytes(16).toString("base64")),
              (this.sheetProtection.spinCount = r && "spinCount" in r ? r.spinCount : 1e5),
              (this.sheetProtection.hashValue = EDn.convertPasswordToHash(
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
      addTable(e) {
        let r = new yDn(this, e);
        return ((this.tables[e.name] = r), r);
      }
      getTable(e) {
        return this.tables[e];
      }
      removeTable(e) {
        delete this.tables[e];
      }
      getTables() {
        return Object.values(this.tables);
      }
      addConditionalFormatting(e) {
        this.conditionalFormattings.push(e);
      }
      removeConditionalFormatting(e) {
        typeof e == "number"
          ? this.conditionalFormattings.splice(e, 1)
          : e instanceof Function
            ? (this.conditionalFormattings = this.conditionalFormattings.filter(e))
            : (this.conditionalFormattings = []);
      }
      get tabColor() {
        return (
          console.trace("worksheet.tabColor property is now deprecated. Please use worksheet.properties.tabColor"),
          this.properties.tabColor
        );
      }
      set tabColor(e) {
        (console.trace("worksheet.tabColor property is now deprecated. Please use worksheet.properties.tabColor"),
          (this.properties.tabColor = e));
      }
      get model() {
        let e = {
          id: this.id,
          name: this.name,
          dataValidations: this.dataValidations.model,
          properties: this.properties,
          state: this.state,
          pageSetup: this.pageSetup,
          headerFooter: this.headerFooter,
          rowBreaks: this.rowBreaks,
          views: this.views,
          autoFilter: this.autoFilter,
          media: this._media.map((o) => o.model),
          sheetProtection: this.sheetProtection,
          tables: Object.values(this.tables).map((o) => o.model),
          conditionalFormattings: this.conditionalFormattings,
        };
        e.cols = BZe.toModel(this.columns);
        let r = (e.rows = []),
          n = (e.dimensions = new Jye());
        return (
          this._rows.forEach((o) => {
            let s = o && o.model;
            s && (n.expand(s.number, s.min, s.number, s.max), r.push(s));
          }),
          (e.merges = []),
          Yye.each(this._merges, (o) => {
            e.merges.push(o.range);
          }),
          e
        );
      }
      _parseRows(e) {
        ((this._rows = []),
          e.rows.forEach((r) => {
            let n = new ADn(this, r.number);
            ((this._rows[n.number - 1] = n), (n.model = r));
          }));
      }
      _parseMergeCells(e) {
        Yye.each(e.mergeCells, (r) => {
          this.mergeCellsWithoutStyle(r);
        });
      }
      set model(e) {
        ((this.name = e.name),
          (this._columns = BZe.fromModel(this, e.cols)),
          this._parseRows(e),
          this._parseMergeCells(e),
          (this.dataValidations = new _Dn(e.dataValidations)),
          (this.properties = e.properties),
          (this.pageSetup = e.pageSetup),
          (this.headerFooter = e.headerFooter),
          (this.views = e.views),
          (this.autoFilter = e.autoFilter),
          (this._media = e.media.map((r) => new Ozt(this, r))),
          (this.sheetProtection = e.sheetProtection),
          (this.tables = e.tables.reduce((r, n) => {
            let o = new yDn();
            return ((o.model = n), (r[n.name] = o), r);
          }, {})),
          (this.conditionalFormattings = e.conditionalFormattings));
      }
    };
  CDn.exports = Nzt;
});