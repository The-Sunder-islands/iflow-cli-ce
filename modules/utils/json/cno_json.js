/**
 * @module cno
 * @category utils/json
 * @label json
 * @position 1975 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (cno) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var cno = T((FIl, uno) => {
  "use strict";
  var iX = class t extends Error {
      constructor(e, r, n) {
        (super("[ParserError] " + e, r, n),
          (this.name = "ParserError"),
          (this.code = "ParserError"),
          Error.captureStackTrace && Error.captureStackTrace(this, t));
      }
    },
    wAt = class {
      constructor(e) {
        ((this.parser = e),
          (this.buf = ""),
          (this.returned = null),
          (this.result = null),
          (this.resultTable = null),
          (this.resultArr = null));
      }
    },
    qDe = class {
      constructor() {
        ((this.pos = 0),
          (this.col = 0),
          (this.line = 0),
          (this.obj = {}),
          (this.ctx = this.obj),
          (this.stack = []),
          (this._buf = ""),
          (this.char = null),
          (this.ii = 0),
          (this.state = new wAt(this.parseStart)));
      }
      parse(e) {
        if (e.length === 0 || e.length == null) return;
        ((this._buf = String(e)), (this.ii = -1), (this.char = -1));
        let r;
        for (; r === !1 || this.nextChar(); ) r = this.runOne();
        this._buf = null;
      }
      nextChar() {
        return (
          this.char === 10 && (++this.line, (this.col = -1)),
          ++this.ii,
          (this.char = this._buf.codePointAt(this.ii)),
          ++this.pos,
          ++this.col,
          this.haveBuffer()
        );
      }
      haveBuffer() {
        return this.ii < this._buf.length;
      }
      runOne() {
        return this.state.parser.call(this, this.state.returned);
      }
      finish() {
        this.char = 1114112;
        let e;
        do ((e = this.state.parser), this.runOne());
        while (this.state.parser !== e);
        return ((this.ctx = null), (this.state = null), (this._buf = null), this.obj);
      }
      next(e) {
        if (typeof e != "function") throw new iX("Tried to set state to non-existent state: " + JSON.stringify(e));
        this.state.parser = e;
      }
      goto(e) {
        return (this.next(e), this.runOne());
      }
      call(e, r) {
        (r && this.next(r), this.stack.push(this.state), (this.state = new wAt(e)));
      }
      callNow(e, r) {
        return (this.call(e, r), this.runOne());
      }
      return(e) {
        if (this.stack.length === 0) throw this.error(new iX("Stack underflow"));
        (e === void 0 && (e = this.state.buf), (this.state = this.stack.pop()), (this.state.returned = e));
      }
      returnNow(e) {
        return (this.return(e), this.runOne());
      }
      consume() {
        if (this.char === 1114112) throw this.error(new iX("Unexpected end-of-buffer"));
        this.state.buf += this._buf[this.ii];
      }
      error(e) {
        return ((e.line = this.line), (e.col = this.col), (e.pos = this.pos), e);
      }
      parseStart() {
        throw new iX("Must declare a parseStart method");
      }
    };
  qDe.END = 1114112;
  qDe.Error = iX;
  uno.exports = qDe;
});