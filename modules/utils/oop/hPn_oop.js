/**
 * @module hPn
 * @category utils/oop
 * @label oop
 * @position 1289 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (hPn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var hPn = T((vue) => {
  "use strict";
  var pPn =
    (vue && vue.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  Object.defineProperty(vue, "__esModule", { value: !0 });
  vue.RowFormatter = void 0;
  var lMs = pPn(Get()),
    mMs = pPn(oPn()),
    dMs = GXt(),
    fMs = qXt(),
    HXt = class t {
      constructor(e) {
        ((this.rowCount = 0),
          (this.formatterOptions = e),
          (this.fieldFormatter = new dMs.FieldFormatter(e)),
          (this.headers = e.headers),
          (this.shouldWriteHeaders = e.shouldWriteHeaders),
          (this.hasWrittenHeaders = !1),
          this.headers !== null && (this.fieldFormatter.headers = this.headers),
          e.transform && (this.rowTransform = e.transform));
      }
      static isRowHashArray(e) {
        return Array.isArray(e) ? Array.isArray(e[0]) && e[0].length === 2 : !1;
      }
      static isRowArray(e) {
        return Array.isArray(e) && !this.isRowHashArray(e);
      }
      static gatherHeaders(e) {
        return t.isRowHashArray(e) ? e.map((r) => r[0]) : Array.isArray(e) ? e : Object.keys(e);
      }
      static createTransform(e) {
        return fMs.isSyncTransform(e)
          ? (r, n) => {
              let o = null;
              try {
                o = e(r);
              } catch (s) {
                return n(s);
              }
              return n(null, o);
            }
          : (r, n) => {
              e(r, n);
            };
      }
      set rowTransform(e) {
        if (!lMs.default(e)) throw new TypeError("The transform should be a function");
        this._rowTransform = t.createTransform(e);
      }
      format(e, r) {
        this.callTransformer(e, (n, o) => {
          if (n) return r(n);
          if (!e) return r(null);
          let s = [];
          if (o) {
            let { shouldFormatColumns: a, headers: u } = this.checkHeaders(o);
            if (
              (this.shouldWriteHeaders &&
                u &&
                !this.hasWrittenHeaders &&
                (s.push(this.formatColumns(u, !0)), (this.hasWrittenHeaders = !0)),
              a)
            ) {
              let c = this.gatherColumns(o);
              s.push(this.formatColumns(c, !1));
            }
          }
          return r(null, s);
        });
      }
      finish(e) {
        let r = [];
        if (this.formatterOptions.alwaysWriteHeaders && this.rowCount === 0) {
          if (!this.headers)
            return e(new Error("`alwaysWriteHeaders` option is set to true but `headers` option not provided."));
          r.push(this.formatColumns(this.headers, !0));
        }
        return (this.formatterOptions.includeEndRowDelimiter && r.push(this.formatterOptions.rowDelimiter), e(null, r));
      }
      checkHeaders(e) {
        if (this.headers) return { shouldFormatColumns: !0, headers: this.headers };
        let r = t.gatherHeaders(e);
        return (
          (this.headers = r),
          (this.fieldFormatter.headers = r),
          this.shouldWriteHeaders
            ? { shouldFormatColumns: !mMs.default(r, e), headers: r }
            : { shouldFormatColumns: !0, headers: null }
        );
      }
      gatherColumns(e) {
        if (this.headers === null) throw new Error("Headers is currently null");
        return Array.isArray(e)
          ? t.isRowHashArray(e)
            ? this.headers.map((r, n) => {
                let o = e[n];
                return o ? o[1] : "";
              })
            : t.isRowArray(e) && !this.shouldWriteHeaders
              ? e
              : this.headers.map((r, n) => e[n])
          : this.headers.map((r) => e[r]);
      }
      callTransformer(e, r) {
        return this._rowTransform ? this._rowTransform(e, r) : r(null, e);
      }
      formatColumns(e, r) {
        let n = e.map((s, a) => this.fieldFormatter.format(s, a, r)).join(this.formatterOptions.delimiter),
          { rowCount: o } = this;
        return ((this.rowCount += 1), o ? [this.formatterOptions.rowDelimiter, n].join("") : n);
      }
    };
  vue.RowFormatter = HXt;
});