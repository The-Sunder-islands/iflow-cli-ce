/**
 * @module OZe
 * @category utils/json
 * @label json
 * @position 1133 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (OZe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var OZe = T((xbc, sDn) => {
  "use strict";
  var gTs = f1(),
    bTs = tS(),
    ATs = Pd(),
    vzt = 9,
    Czt = class t {
      constructor(e, r, n) {
        ((this._worksheet = e), (this._number = r), n !== !1 && (this.defn = n));
      }
      get number() {
        return this._number;
      }
      get worksheet() {
        return this._worksheet;
      }
      get letter() {
        return ATs.n2l(this._number);
      }
      get isCustomWidth() {
        return this.width !== void 0 && this.width !== vzt;
      }
      get defn() {
        return {
          header: this._header,
          key: this.key,
          width: this.width,
          style: this.style,
          hidden: this.hidden,
          outlineLevel: this.outlineLevel,
        };
      }
      set defn(e) {
        e
          ? ((this.key = e.key),
            (this.width = e.width !== void 0 ? e.width : vzt),
            (this.outlineLevel = e.outlineLevel),
            e.style ? (this.style = e.style) : (this.style = {}),
            (this.header = e.header),
            (this._hidden = !!e.hidden))
          : (delete this._header, delete this._key, delete this.width, (this.style = {}), (this.outlineLevel = 0));
      }
      get headers() {
        return this._header && this._header instanceof Array ? this._header : [this._header];
      }
      get header() {
        return this._header;
      }
      set header(e) {
        e !== void 0
          ? ((this._header = e),
            this.headers.forEach((r, n) => {
              this._worksheet.getCell(n + 1, this.number).value = r;
            }))
          : (this._header = void 0);
      }
      get key() {
        return this._key;
      }
      set key(e) {
        ((this._key && this._worksheet.getColumnKey(this._key)) === this && this._worksheet.deleteColumnKey(this._key),
          (this._key = e),
          e && this._worksheet.setColumnKey(this._key, this));
      }
      get hidden() {
        return !!this._hidden;
      }
      set hidden(e) {
        this._hidden = e;
      }
      get outlineLevel() {
        return this._outlineLevel || 0;
      }
      set outlineLevel(e) {
        this._outlineLevel = e;
      }
      get collapsed() {
        return !!(this._outlineLevel && this._outlineLevel >= this._worksheet.properties.outlineLevelCol);
      }
      toString() {
        return JSON.stringify({
          key: this.key,
          width: this.width,
          headers: this.headers.length ? this.headers : void 0,
        });
      }
      equivalentTo(e) {
        return (
          this.width === e.width &&
          this.hidden === e.hidden &&
          this.outlineLevel === e.outlineLevel &&
          gTs.isEqual(this.style, e.style)
        );
      }
      get isDefault() {
        if (this.isCustomWidth || this.hidden || this.outlineLevel) return !1;
        let e = this.style;
        return !(e && (e.font || e.numFmt || e.alignment || e.border || e.fill || e.protection));
      }
      get headerCount() {
        return this.headers.length;
      }
      eachCell(e, r) {
        let n = this.number;
        (r || ((r = e), (e = null)),
          this._worksheet.eachRow(e, (o, s) => {
            r(o.getCell(n), s);
          }));
      }
      get values() {
        let e = [];
        return (
          this.eachCell((r, n) => {
            r && r.type !== bTs.ValueType.Null && (e[n] = r.value);
          }),
          e
        );
      }
      set values(e) {
        if (!e) return;
        let r = this.number,
          n = 0;
        (e.hasOwnProperty("0") && (n = 1),
          e.forEach((o, s) => {
            this._worksheet.getCell(s + n, r).value = o;
          }));
      }
      _applyStyle(e, r) {
        return (
          (this.style[e] = r),
          this.eachCell((n) => {
            n[e] = r;
          }),
          r
        );
      }
      get numFmt() {
        return this.style.numFmt;
      }
      set numFmt(e) {
        this._applyStyle("numFmt", e);
      }
      get font() {
        return this.style.font;
      }
      set font(e) {
        this._applyStyle("font", e);
      }
      get alignment() {
        return this.style.alignment;
      }
      set alignment(e) {
        this._applyStyle("alignment", e);
      }
      get protection() {
        return this.style.protection;
      }
      set protection(e) {
        this._applyStyle("protection", e);
      }
      get border() {
        return this.style.border;
      }
      set border(e) {
        this._applyStyle("border", e);
      }
      get fill() {
        return this.style.fill;
      }
      set fill(e) {
        this._applyStyle("fill", e);
      }
      static toModel(e) {
        let r = [],
          n = null;
        return (
          e &&
            e.forEach((o, s) => {
              o.isDefault
                ? n && (n = null)
                : !n || !o.equivalentTo(n)
                  ? ((n = {
                      min: s + 1,
                      max: s + 1,
                      width: o.width !== void 0 ? o.width : vzt,
                      style: o.style,
                      isCustomWidth: o.isCustomWidth,
                      hidden: o.hidden,
                      outlineLevel: o.outlineLevel,
                      collapsed: o.collapsed,
                    }),
                    r.push(n))
                  : (n.max = s + 1);
            }),
          r.length ? r : void 0
        );
      }
      static fromModel(e, r) {
        r = r || [];
        let n = [],
          o = 1,
          s = 0;
        for (
          r = r.sort(function (a, u) {
            return a.min - u.min;
          });
          s < r.length;
        ) {
          let a = r[s++];
          for (; o < a.min; ) n.push(new t(e, o++));
          for (; o <= a.max; ) n.push(new t(e, o++, a));
        }
        return n.length ? n : null;
      }
    };
  sDn.exports = Czt;
});