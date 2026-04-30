/**
 * @module dBn
 * @category utils/oop
 * @label oop
 * @position 1299 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dBn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dBn = T((Pue) => {
  "use strict";
  var Ett =
    (Pue && Pue.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  Object.defineProperty(Pue, "__esModule", { value: !0 });
  Pue.HeaderTransformer = void 0;
  var mBn = Ett(SPn()),
    y$s = Ett(Get()),
    _$s = Ett(kPn()),
    E$s = Ett(lBn()),
    yZt = class {
      constructor(e) {
        ((this.headers = null),
          (this.receivedHeaders = !1),
          (this.shouldUseFirstRow = !1),
          (this.processedFirstRow = !1),
          (this.headersLength = 0),
          (this.parserOptions = e),
          e.headers === !0
            ? (this.shouldUseFirstRow = !0)
            : Array.isArray(e.headers)
              ? this.setHeaders(e.headers)
              : y$s.default(e.headers) && (this.headersTransform = e.headers));
      }
      transform(e, r) {
        return this.shouldMapRow(e) ? r(null, this.processRow(e)) : r(null, { row: null, isValid: !0 });
      }
      shouldMapRow(e) {
        let { parserOptions: r } = this;
        if (!this.headersTransform && r.renameHeaders && !this.processedFirstRow) {
          if (!this.receivedHeaders)
            throw new Error("Error renaming headers: new headers must be provided in an array");
          return ((this.processedFirstRow = !0), !1);
        }
        if (!this.receivedHeaders && Array.isArray(e)) {
          if (this.headersTransform) this.setHeaders(this.headersTransform(e));
          else if (this.shouldUseFirstRow) this.setHeaders(e);
          else return !0;
          return !1;
        }
        return !0;
      }
      processRow(e) {
        if (!this.headers) return { row: e, isValid: !0 };
        let { parserOptions: r } = this;
        if (!r.discardUnmappedColumns && e.length > this.headersLength) {
          if (!r.strictColumnHandling)
            throw new Error(
              `Unexpected Error: column header mismatch expected: ${this.headersLength} columns got: ${e.length}`,
            );
          return {
            row: e,
            isValid: !1,
            reason: `Column header mismatch expected: ${this.headersLength} columns got: ${e.length}`,
          };
        }
        return r.strictColumnHandling && e.length < this.headersLength
          ? {
              row: e,
              isValid: !1,
              reason: `Column header mismatch expected: ${this.headersLength} columns got: ${e.length}`,
            }
          : { row: this.mapHeaders(e), isValid: !0 };
      }
      mapHeaders(e) {
        let r = {},
          { headers: n, headersLength: o } = this;
        for (let s = 0; s < o; s += 1) {
          let a = n[s];
          if (!mBn.default(a)) {
            let u = e[s];
            mBn.default(u) ? (r[a] = "") : (r[a] = u);
          }
        }
        return r;
      }
      setHeaders(e) {
        var r;
        let n = e.filter((o) => !!o);
        if (_$s.default(n).length !== n.length) {
          let o = E$s.default(n),
            s = Object.keys(o).filter((a) => o[a].length > 1);
          throw new Error(`Duplicate headers found ${JSON.stringify(s)}`);
        }
        ((this.headers = e),
          (this.receivedHeaders = !0),
          (this.headersLength = ((r = this.headers) === null || r === void 0 ? void 0 : r.length) || 0));
      }
    };
  Pue.HeaderTransformer = yZt;
});