/**
 * @module LZt
 * @category utils/oop
 * @label oop
 * @position 1311 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (LZt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var LZt = T((ktt) => {
  "use strict";
  Object.defineProperty(ktt, "__esModule", { value: !0 });
  ktt.CsvParserStream = void 0;
  var j$s = Ae("string_decoder"),
    Q$s = Ae("stream"),
    _Bn = fBn(),
    G$s = yBn(),
    BZt = class t extends Q$s.Transform {
      constructor(e) {
        (super({ objectMode: e.objectMode }),
          (this.lines = ""),
          (this.rowCount = 0),
          (this.parsedRowCount = 0),
          (this.parsedLineCount = 0),
          (this.endEmitted = !1),
          (this.headersEmitted = !1),
          (this.parserOptions = e),
          (this.parser = new G$s.Parser(e)),
          (this.headerTransformer = new _Bn.HeaderTransformer(e)),
          (this.decoder = new j$s.StringDecoder(e.encoding)),
          (this.rowTransformerValidator = new _Bn.RowTransformerValidator()));
      }
      get hasHitRowLimit() {
        return this.parserOptions.limitRows && this.rowCount >= this.parserOptions.maxRows;
      }
      get shouldEmitRows() {
        return this.parsedRowCount > this.parserOptions.skipRows;
      }
      get shouldSkipLine() {
        return this.parsedLineCount <= this.parserOptions.skipLines;
      }
      transform(e) {
        return ((this.rowTransformerValidator.rowTransform = e), this);
      }
      validate(e) {
        return ((this.rowTransformerValidator.rowValidator = e), this);
      }
      emit(e, ...r) {
        return e === "end"
          ? (this.endEmitted || ((this.endEmitted = !0), super.emit("end", this.rowCount)), !1)
          : super.emit(e, ...r);
      }
      _transform(e, r, n) {
        if (this.hasHitRowLimit) return n();
        let o = t.wrapDoneCallback(n);
        try {
          let { lines: s } = this,
            a = s + this.decoder.write(e),
            u = this.parse(a, !0);
          return this.processRows(u, o);
        } catch (s) {
          return o(s);
        }
      }
      _flush(e) {
        let r = t.wrapDoneCallback(e);
        if (this.hasHitRowLimit) return r();
        try {
          let n = this.lines + this.decoder.end(),
            o = this.parse(n, !1);
          return this.processRows(o, r);
        } catch (n) {
          return r(n);
        }
      }
      parse(e, r) {
        if (!e) return [];
        let { line: n, rows: o } = this.parser.parse(e, r);
        return ((this.lines = n), o);
      }
      processRows(e, r) {
        let n = e.length,
          o = (s) => {
            let a = (m) => {
              if (m) return r(m);
              if (s % 100 === 0) {
                setImmediate(() => o(s + 1));
                return;
              }
              return o(s + 1);
            };
            if ((this.checkAndEmitHeaders(), s >= n || this.hasHitRowLimit)) return r();
            if (((this.parsedLineCount += 1), this.shouldSkipLine)) return a();
            let u = e[s];
            ((this.rowCount += 1), (this.parsedRowCount += 1));
            let c = this.rowCount;
            return this.transformRow(u, (m, d) => {
              if (m) return ((this.rowCount -= 1), a(m));
              if (!d) return a(new Error("expected transform result"));
              if (!d.isValid) this.emit("data-invalid", d.row, c, d.reason);
              else if (d.row) return this.pushRow(d.row, a);
              return a();
            });
          };
        o(0);
      }
      transformRow(e, r) {
        try {
          this.headerTransformer.transform(e, (n, o) =>
            n
              ? r(n)
              : o
                ? o.isValid
                  ? o.row
                    ? this.shouldEmitRows
                      ? this.rowTransformerValidator.transformAndValidate(o.row, r)
                      : this.skipRow(r)
                    : ((this.rowCount -= 1), (this.parsedRowCount -= 1), r(null, { row: null, isValid: !0 }))
                  : this.shouldEmitRows
                    ? r(null, { isValid: !1, row: e })
                    : this.skipRow(r)
                : r(new Error("Expected result from header transform")),
          );
        } catch (n) {
          r(n);
        }
      }
      checkAndEmitHeaders() {
        !this.headersEmitted &&
          this.headerTransformer.headers &&
          ((this.headersEmitted = !0), this.emit("headers", this.headerTransformer.headers));
      }
      skipRow(e) {
        return ((this.rowCount -= 1), e(null, { row: null, isValid: !0 }));
      }
      pushRow(e, r) {
        try {
          (this.parserOptions.objectMode ? this.push(e) : this.push(JSON.stringify(e)), r());
        } catch (n) {
          r(n);
        }
      }
      static wrapDoneCallback(e) {
        let r = !1;
        return (n, ...o) => {
          if (n) {
            if (r) throw n;
            ((r = !0), e(n));
            return;
          }
          e(...o);
        };
      }
    };
  ktt.CsvParserStream = BZt;
});