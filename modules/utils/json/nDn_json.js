/**
 * @module nDn
 * @category utils/json
 * @label json
 * @position 1131 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (nDn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var nDn = T((Sbc, rDn) => {
  var dTs = Pd(),
    fTs = f1(),
    rS = tS(),
    { slideFormula: pTs } = XTn(),
    tDn = eDn(),
    ci = class t {
      constructor(e, r, n) {
        if (!e || !r) throw new Error("A Cell needs a Row");
        ((this._row = e),
          (this._column = r),
          dTs.validateAddress(n),
          (this._address = n),
          (this._value = hF.create(t.Types.Null, this)),
          (this.style = this._mergeStyle(e.style, r.style, {})),
          (this._mergeCount = 0));
      }
      get worksheet() {
        return this._row.worksheet;
      }
      get workbook() {
        return this._row.worksheet.workbook;
      }
      destroy() {
        (delete this.style, delete this._value, delete this._row, delete this._column, delete this._address);
      }
      get numFmt() {
        return this.style.numFmt;
      }
      set numFmt(e) {
        this.style.numFmt = e;
      }
      get font() {
        return this.style.font;
      }
      set font(e) {
        this.style.font = e;
      }
      get alignment() {
        return this.style.alignment;
      }
      set alignment(e) {
        this.style.alignment = e;
      }
      get border() {
        return this.style.border;
      }
      set border(e) {
        this.style.border = e;
      }
      get fill() {
        return this.style.fill;
      }
      set fill(e) {
        this.style.fill = e;
      }
      get protection() {
        return this.style.protection;
      }
      set protection(e) {
        this.style.protection = e;
      }
      _mergeStyle(e, r, n) {
        let o = (e && e.numFmt) || (r && r.numFmt);
        o && (n.numFmt = o);
        let s = (e && e.font) || (r && r.font);
        s && (n.font = s);
        let a = (e && e.alignment) || (r && r.alignment);
        a && (n.alignment = a);
        let u = (e && e.border) || (r && r.border);
        u && (n.border = u);
        let c = (e && e.fill) || (r && r.fill);
        c && (n.fill = c);
        let m = (e && e.protection) || (r && r.protection);
        return (m && (n.protection = m), n);
      }
      get address() {
        return this._address;
      }
      get row() {
        return this._row.number;
      }
      get col() {
        return this._column.number;
      }
      get $col$row() {
        return `$${this._column.letter}$${this.row}`;
      }
      get type() {
        return this._value.type;
      }
      get effectiveType() {
        return this._value.effectiveType;
      }
      toCsvString() {
        return this._value.toCsvString();
      }
      addMergeRef() {
        this._mergeCount++;
      }
      releaseMergeRef() {
        this._mergeCount--;
      }
      get isMerged() {
        return this._mergeCount > 0 || this.type === t.Types.Merge;
      }
      merge(e, r) {
        (this._value.release(), (this._value = hF.create(t.Types.Merge, this, e)), r || (this.style = e.style));
      }
      unmerge() {
        this.type === t.Types.Merge &&
          (this._value.release(),
          (this._value = hF.create(t.Types.Null, this)),
          (this.style = this._mergeStyle(this._row.style, this._column.style, {})));
      }
      isMergedTo(e) {
        return this._value.type !== t.Types.Merge ? !1 : this._value.isMergedTo(e);
      }
      get master() {
        return this.type === t.Types.Merge ? this._value.master : this;
      }
      get isHyperlink() {
        return this._value.type === t.Types.Hyperlink;
      }
      get hyperlink() {
        return this._value.hyperlink;
      }
      get value() {
        return this._value.value;
      }
      set value(e) {
        if (this.type === t.Types.Merge) {
          this._value.master.value = e;
          return;
        }
        (this._value.release(), (this._value = hF.create(hF.getType(e), this, e)));
      }
      get note() {
        return this._comment && this._comment.note;
      }
      set note(e) {
        this._comment = new tDn(e);
      }
      get text() {
        return this._value.toString();
      }
      get html() {
        return fTs.escapeHtml(this.text);
      }
      toString() {
        return this.text;
      }
      _upgradeToHyperlink(e) {
        this.type === t.Types.String &&
          (this._value = hF.create(t.Types.Hyperlink, this, { text: this._value.value, hyperlink: e }));
      }
      get formula() {
        return this._value.formula;
      }
      get result() {
        return this._value.result;
      }
      get formulaType() {
        return this._value.formulaType;
      }
      get fullAddress() {
        let { worksheet: e } = this._row;
        return { sheetName: e.name, address: this.address, row: this.row, col: this.col };
      }
      get name() {
        return this.names[0];
      }
      set name(e) {
        this.names = [e];
      }
      get names() {
        return this.workbook.definedNames.getNamesEx(this.fullAddress);
      }
      set names(e) {
        let { definedNames: r } = this.workbook;
        (r.removeAllNames(this.fullAddress),
          e.forEach((n) => {
            r.addEx(this.fullAddress, n);
          }));
      }
      addName(e) {
        this.workbook.definedNames.addEx(this.fullAddress, e);
      }
      removeName(e) {
        this.workbook.definedNames.removeEx(this.fullAddress, e);
      }
      removeAllNames() {
        this.workbook.definedNames.removeAllNames(this.fullAddress);
      }
      get _dataValidations() {
        return this.worksheet.dataValidations;
      }
      get dataValidation() {
        return this._dataValidations.find(this.address);
      }
      set dataValidation(e) {
        this._dataValidations.add(this.address, e);
      }
      get model() {
        let { model: e } = this._value;
        return ((e.style = this.style), this._comment && (e.comment = this._comment.model), e);
      }
      set model(e) {
        if ((this._value.release(), (this._value = hF.create(e.type, this)), (this._value.model = e), e.comment))
          switch (e.comment.type) {
            case "note":
              this._comment = tDn.fromModel(e.comment);
              break;
          }
        e.style ? (this.style = e.style) : (this.style = {});
      }
    };
  ci.Types = rS.ValueType;
  var czt = class {
      constructor(e) {
        this.model = { address: e.address, type: ci.Types.Null };
      }
      get value() {
        return null;
      }
      set value(e) {}
      get type() {
        return ci.Types.Null;
      }
      get effectiveType() {
        return ci.Types.Null;
      }
      get address() {
        return this.model.address;
      }
      set address(e) {
        this.model.address = e;
      }
      toCsvString() {
        return "";
      }
      release() {}
      toString() {
        return "";
      }
    },
    lzt = class {
      constructor(e, r) {
        this.model = { address: e.address, type: ci.Types.Number, value: r };
      }
      get value() {
        return this.model.value;
      }
      set value(e) {
        this.model.value = e;
      }
      get type() {
        return ci.Types.Number;
      }
      get effectiveType() {
        return ci.Types.Number;
      }
      get address() {
        return this.model.address;
      }
      set address(e) {
        this.model.address = e;
      }
      toCsvString() {
        return this.model.value.toString();
      }
      release() {}
      toString() {
        return this.model.value.toString();
      }
    },
    mzt = class {
      constructor(e, r) {
        this.model = { address: e.address, type: ci.Types.String, value: r };
      }
      get value() {
        return this.model.value;
      }
      set value(e) {
        this.model.value = e;
      }
      get type() {
        return ci.Types.String;
      }
      get effectiveType() {
        return ci.Types.String;
      }
      get address() {
        return this.model.address;
      }
      set address(e) {
        this.model.address = e;
      }
      toCsvString() {
        return `"${this.model.value.replace(/"/g, '""')}"`;
      }
      release() {}
      toString() {
        return this.model.value;
      }
    },
    dzt = class {
      constructor(e, r) {
        this.model = { address: e.address, type: ci.Types.String, value: r };
      }
      get value() {
        return this.model.value;
      }
      set value(e) {
        this.model.value = e;
      }
      toString() {
        return this.model.value.richText.map((e) => e.text).join("");
      }
      get type() {
        return ci.Types.RichText;
      }
      get effectiveType() {
        return ci.Types.RichText;
      }
      get address() {
        return this.model.address;
      }
      set address(e) {
        this.model.address = e;
      }
      toCsvString() {
        return `"${this.text.replace(/"/g, '""')}"`;
      }
      release() {}
    },
    fzt = class {
      constructor(e, r) {
        this.model = { address: e.address, type: ci.Types.Date, value: r };
      }
      get value() {
        return this.model.value;
      }
      set value(e) {
        this.model.value = e;
      }
      get type() {
        return ci.Types.Date;
      }
      get effectiveType() {
        return ci.Types.Date;
      }
      get address() {
        return this.model.address;
      }
      set address(e) {
        this.model.address = e;
      }
      toCsvString() {
        return this.model.value.toISOString();
      }
      release() {}
      toString() {
        return this.model.value.toString();
      }
    },
    pzt = class {
      constructor(e, r) {
        ((this.model = {
          address: e.address,
          type: ci.Types.Hyperlink,
          text: r ? r.text : void 0,
          hyperlink: r ? r.hyperlink : void 0,
        }),
          r && r.tooltip && (this.model.tooltip = r.tooltip));
      }
      get value() {
        let e = { text: this.model.text, hyperlink: this.model.hyperlink };
        return (this.model.tooltip && (e.tooltip = this.model.tooltip), e);
      }
      set value(e) {
        ((this.model = { text: e.text, hyperlink: e.hyperlink }), e.tooltip && (this.model.tooltip = e.tooltip));
      }
      get text() {
        return this.model.text;
      }
      set text(e) {
        this.model.text = e;
      }
      get hyperlink() {
        return this.model.hyperlink;
      }
      set hyperlink(e) {
        this.model.hyperlink = e;
      }
      get type() {
        return ci.Types.Hyperlink;
      }
      get effectiveType() {
        return ci.Types.Hyperlink;
      }
      get address() {
        return this.model.address;
      }
      set address(e) {
        this.model.address = e;
      }
      toCsvString() {
        return this.model.hyperlink;
      }
      release() {}
      toString() {
        return this.model.text;
      }
    },
    hzt = class {
      constructor(e, r) {
        ((this.model = { address: e.address, type: ci.Types.Merge, master: r ? r.address : void 0 }),
          (this._master = r),
          r && r.addMergeRef());
      }
      get value() {
        return this._master.value;
      }
      set value(e) {
        e instanceof ci
          ? (this._master && this._master.releaseMergeRef(), e.addMergeRef(), (this._master = e))
          : (this._master.value = e);
      }
      isMergedTo(e) {
        return e === this._master;
      }
      get master() {
        return this._master;
      }
      get type() {
        return ci.Types.Merge;
      }
      get effectiveType() {
        return this._master.effectiveType;
      }
      get address() {
        return this.model.address;
      }
      set address(e) {
        this.model.address = e;
      }
      toCsvString() {
        return "";
      }
      release() {
        this._master.releaseMergeRef();
      }
      toString() {
        return this.value.toString();
      }
    },
    gzt = class {
      constructor(e, r) {
        ((this.cell = e),
          (this.model = {
            address: e.address,
            type: ci.Types.Formula,
            shareType: r ? r.shareType : void 0,
            ref: r ? r.ref : void 0,
            formula: r ? r.formula : void 0,
            sharedFormula: r ? r.sharedFormula : void 0,
            result: r ? r.result : void 0,
          }));
      }
      _copyModel(e) {
        let r = {},
          n = (o) => {
            let s = e[o];
            s && (r[o] = s);
          };
        return (n("formula"), n("result"), n("ref"), n("shareType"), n("sharedFormula"), r);
      }
      get value() {
        return this._copyModel(this.model);
      }
      set value(e) {
        this.model = this._copyModel(e);
      }
      validate(e) {
        switch (hF.getType(e)) {
          case ci.Types.Null:
          case ci.Types.String:
          case ci.Types.Number:
          case ci.Types.Date:
            break;
          case ci.Types.Hyperlink:
          case ci.Types.Formula:
          default:
            throw new Error("Cannot process that type of result value");
        }
      }
      get dependencies() {
        let e = this.formula.match(/([a-zA-Z0-9]+!)?[A-Z]{1,3}\d{1,4}:[A-Z]{1,3}\d{1,4}/g),
          r = this.formula
            .replace(/([a-zA-Z0-9]+!)?[A-Z]{1,3}\d{1,4}:[A-Z]{1,3}\d{1,4}/g, "")
            .match(/([a-zA-Z0-9]+!)?[A-Z]{1,3}\d{1,4}/g);
        return { ranges: e, cells: r };
      }
      get formula() {
        return this.model.formula || this._getTranslatedFormula();
      }
      set formula(e) {
        this.model.formula = e;
      }
      get formulaType() {
        return this.model.formula
          ? rS.FormulaType.Master
          : this.model.sharedFormula
            ? rS.FormulaType.Shared
            : rS.FormulaType.None;
      }
      get result() {
        return this.model.result;
      }
      set result(e) {
        this.model.result = e;
      }
      get type() {
        return ci.Types.Formula;
      }
      get effectiveType() {
        let e = this.model.result;
        return e == null
          ? rS.ValueType.Null
          : e instanceof String || typeof e == "string"
            ? rS.ValueType.String
            : typeof e == "number"
              ? rS.ValueType.Number
              : e instanceof Date
                ? rS.ValueType.Date
                : e.text && e.hyperlink
                  ? rS.ValueType.Hyperlink
                  : e.formula
                    ? rS.ValueType.Formula
                    : rS.ValueType.Null;
      }
      get address() {
        return this.model.address;
      }
      set address(e) {
        this.model.address = e;
      }
      _getTranslatedFormula() {
        if (!this._translatedFormula && this.model.sharedFormula) {
          let { worksheet: e } = this.cell,
            r = e.findCell(this.model.sharedFormula);
          this._translatedFormula = r && pTs(r.formula, r.address, this.model.address);
        }
        return this._translatedFormula;
      }
      toCsvString() {
        return `${this.model.result || ""}`;
      }
      release() {}
      toString() {
        return this.model.result ? this.model.result.toString() : "";
      }
    },
    bzt = class {
      constructor(e, r) {
        this.model = { address: e.address, type: ci.Types.SharedString, value: r };
      }
      get value() {
        return this.model.value;
      }
      set value(e) {
        this.model.value = e;
      }
      get type() {
        return ci.Types.SharedString;
      }
      get effectiveType() {
        return ci.Types.SharedString;
      }
      get address() {
        return this.model.address;
      }
      set address(e) {
        this.model.address = e;
      }
      toCsvString() {
        return this.model.value.toString();
      }
      release() {}
      toString() {
        return this.model.value.toString();
      }
    },
    Azt = class {
      constructor(e, r) {
        this.model = { address: e.address, type: ci.Types.Boolean, value: r };
      }
      get value() {
        return this.model.value;
      }
      set value(e) {
        this.model.value = e;
      }
      get type() {
        return ci.Types.Boolean;
      }
      get effectiveType() {
        return ci.Types.Boolean;
      }
      get address() {
        return this.model.address;
      }
      set address(e) {
        this.model.address = e;
      }
      toCsvString() {
        return this.model.value ? 1 : 0;
      }
      release() {}
      toString() {
        return this.model.value.toString();
      }
    },
    yzt = class {
      constructor(e, r) {
        this.model = { address: e.address, type: ci.Types.Error, value: r };
      }
      get value() {
        return this.model.value;
      }
      set value(e) {
        this.model.value = e;
      }
      get type() {
        return ci.Types.Error;
      }
      get effectiveType() {
        return ci.Types.Error;
      }
      get address() {
        return this.model.address;
      }
      set address(e) {
        this.model.address = e;
      }
      toCsvString() {
        return this.toString();
      }
      release() {}
      toString() {
        return this.model.value.error.toString();
      }
    },
    _zt = class {
      constructor(e, r) {
        this.model = { address: e.address, type: ci.Types.String, value: JSON.stringify(r), rawValue: r };
      }
      get value() {
        return this.model.rawValue;
      }
      set value(e) {
        ((this.model.rawValue = e), (this.model.value = JSON.stringify(e)));
      }
      get type() {
        return ci.Types.String;
      }
      get effectiveType() {
        return ci.Types.String;
      }
      get address() {
        return this.model.address;
      }
      set address(e) {
        this.model.address = e;
      }
      toCsvString() {
        return this.model.value;
      }
      release() {}
      toString() {
        return this.model.value;
      }
    },
    hF = {
      getType(t) {
        return t == null
          ? ci.Types.Null
          : t instanceof String || typeof t == "string"
            ? ci.Types.String
            : typeof t == "number"
              ? ci.Types.Number
              : typeof t == "boolean"
                ? ci.Types.Boolean
                : t instanceof Date
                  ? ci.Types.Date
                  : t.text && t.hyperlink
                    ? ci.Types.Hyperlink
                    : t.formula || t.sharedFormula
                      ? ci.Types.Formula
                      : t.richText
                        ? ci.Types.RichText
                        : t.sharedString
                          ? ci.Types.SharedString
                          : t.error
                            ? ci.Types.Error
                            : ci.Types.JSON;
      },
      types: [
        { t: ci.Types.Null, f: czt },
        { t: ci.Types.Number, f: lzt },
        { t: ci.Types.String, f: mzt },
        { t: ci.Types.Date, f: fzt },
        { t: ci.Types.Hyperlink, f: pzt },
        { t: ci.Types.Formula, f: gzt },
        { t: ci.Types.Merge, f: hzt },
        { t: ci.Types.JSON, f: _zt },
        { t: ci.Types.SharedString, f: bzt },
        { t: ci.Types.RichText, f: dzt },
        { t: ci.Types.Boolean, f: Azt },
        { t: ci.Types.Error, f: yzt },
      ].reduce((t, e) => ((t[e.t] = e.f), t), []),
      create(t, e, r) {
        let n = this.types[t];
        if (!n) throw new Error(`Could not create Value of type ${t}`);
        return new n(e, r);
      },
    };
  rDn.exports = ci;
});