/**
 * @module DAt
 * @category utils/net
 * @label mime
 * @position 1981 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (DAt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var DAt = T((exports, module) => {
  "use strict";
  module.exports = makeParserClass(cno());
  module.exports.makeParserClass = makeParserClass;
  var TomlError = class t extends Error {
    constructor(e) {
      (super(e),
        (this.name = "TomlError"),
        Error.captureStackTrace && Error.captureStackTrace(this, t),
        (this.fromTOML = !0),
        (this.wrapped = null));
    }
  };
  TomlError.wrap = (t) => {
    let e = new TomlError(t.message);
    return ((e.code = t.code), (e.wrapped = t), e);
  };
  module.exports.TomlError = TomlError;
  var createDateTime = mno(),
    createDateTimeFloat = pno(),
    createDate = bno(),
    createTime = yno(),
    CTRL_I = 9,
    CTRL_J = 10,
    CTRL_M = 13,
    CTRL_CHAR_BOUNDARY = 31,
    CHAR_SP = 32,
    CHAR_QUOT = 34,
    CHAR_NUM = 35,
    CHAR_APOS = 39,
    CHAR_PLUS = 43,
    CHAR_COMMA = 44,
    CHAR_HYPHEN = 45,
    CHAR_PERIOD = 46,
    CHAR_0 = 48,
    CHAR_1 = 49,
    CHAR_7 = 55,
    CHAR_9 = 57,
    CHAR_COLON = 58,
    CHAR_EQUALS = 61,
    CHAR_A = 65,
    CHAR_E = 69,
    CHAR_F = 70,
    CHAR_T = 84,
    CHAR_U = 85,
    CHAR_Z = 90,
    CHAR_LOWBAR = 95,
    CHAR_a = 97,
    CHAR_b = 98,
    CHAR_e = 101,
    CHAR_f = 102,
    CHAR_i = 105,
    CHAR_l = 108,
    CHAR_n = 110,
    CHAR_o = 111,
    CHAR_r = 114,
    CHAR_s = 115,
    CHAR_t = 116,
    CHAR_u = 117,
    CHAR_x = 120,
    CHAR_z = 122,
    CHAR_LCUB = 123,
    CHAR_RCUB = 125,
    CHAR_LSQB = 91,
    CHAR_BSOL = 92,
    CHAR_RSQB = 93,
    CHAR_DEL = 127,
    SURROGATE_FIRST = 55296,
    SURROGATE_LAST = 57343,
    escapes = {
      [CHAR_b]: "\b",
      [CHAR_t]: "	",
      [CHAR_n]: `
`,
      [CHAR_f]: "\f",
      [CHAR_r]: "\r",
      [CHAR_QUOT]: '"',
      [CHAR_BSOL]: "\\",
    };
  function isDigit(t) {
    return t >= CHAR_0 && t <= CHAR_9;
  }
  function isHexit(t) {
    return (t >= CHAR_A && t <= CHAR_F) || (t >= CHAR_a && t <= CHAR_f) || (t >= CHAR_0 && t <= CHAR_9);
  }
  function isBit(t) {
    return t === CHAR_1 || t === CHAR_0;
  }
  function isOctit(t) {
    return t >= CHAR_0 && t <= CHAR_7;
  }
  function isAlphaNumQuoteHyphen(t) {
    return (
      (t >= CHAR_A && t <= CHAR_Z) ||
      (t >= CHAR_a && t <= CHAR_z) ||
      (t >= CHAR_0 && t <= CHAR_9) ||
      t === CHAR_APOS ||
      t === CHAR_QUOT ||
      t === CHAR_LOWBAR ||
      t === CHAR_HYPHEN
    );
  }
  function isAlphaNumHyphen(t) {
    return (
      (t >= CHAR_A && t <= CHAR_Z) ||
      (t >= CHAR_a && t <= CHAR_z) ||
      (t >= CHAR_0 && t <= CHAR_9) ||
      t === CHAR_LOWBAR ||
      t === CHAR_HYPHEN
    );
  }
  var _type = Symbol("type"),
    _declared = Symbol("declared"),
    hasOwnProperty = Object.prototype.hasOwnProperty,
    defineProperty = Object.defineProperty,
    descriptor = { configurable: !0, enumerable: !0, writable: !0, value: void 0 };
  function hasKey(t, e) {
    return hasOwnProperty.call(t, e) ? !0 : (e === "__proto__" && defineProperty(t, "__proto__", descriptor), !1);
  }
  var INLINE_TABLE = Symbol("inline-table");
  function InlineTable() {
    return Object.defineProperties({}, { [_type]: { value: INLINE_TABLE } });
  }
  function isInlineTable(t) {
    return t === null || typeof t != "object" ? !1 : t[_type] === INLINE_TABLE;
  }
  var TABLE = Symbol("table");
  function Table() {
    return Object.defineProperties({}, { [_type]: { value: TABLE }, [_declared]: { value: !1, writable: !0 } });
  }
  function isTable(t) {
    return t === null || typeof t != "object" ? !1 : t[_type] === TABLE;
  }
  var _contentType = Symbol("content-type"),
    INLINE_LIST = Symbol("inline-list");
  function InlineList(t) {
    return Object.defineProperties([], { [_type]: { value: INLINE_LIST }, [_contentType]: { value: t } });
  }
  function isInlineList(t) {
    return t === null || typeof t != "object" ? !1 : t[_type] === INLINE_LIST;
  }
  var LIST = Symbol("list");
  function List() {
    return Object.defineProperties([], { [_type]: { value: LIST } });
  }
  function isList(t) {
    return t === null || typeof t != "object" ? !1 : t[_type] === LIST;
  }
  var _custom;
  try {
    let utilInspect = eval("require('util').inspect");
    _custom = utilInspect.custom;
  } catch (t) {}
  var _inspect = _custom || "inspect",
    BoxedBigInt = class {
      constructor(e) {
        try {
          this.value = global.BigInt.asIntN(64, e);
        } catch {
          this.value = null;
        }
        Object.defineProperty(this, _type, { value: INTEGER });
      }
      isNaN() {
        return this.value === null;
      }
      toString() {
        return String(this.value);
      }
      [_inspect]() {
        return `[BigInt: ${this.toString()}]}`;
      }
      valueOf() {
        return this.value;
      }
    },
    INTEGER = Symbol("integer");
  function Integer(t) {
    let e = Number(t);
    return (
      Object.is(e, -0) && (e = 0),
      global.BigInt && !Number.isSafeInteger(e)
        ? new BoxedBigInt(t)
        : Object.defineProperties(new Number(e), {
            isNaN: {
              value: function () {
                return isNaN(this);
              },
            },
            [_type]: { value: INTEGER },
            [_inspect]: { value: () => `[Integer: ${t}]` },
          })
    );
  }
  function isInteger(t) {
    return t === null || typeof t != "object" ? !1 : t[_type] === INTEGER;
  }
  var FLOAT = Symbol("float");
  function Float(t) {
    return Object.defineProperties(new Number(t), {
      [_type]: { value: FLOAT },
      [_inspect]: { value: () => `[Float: ${t}]` },
    });
  }
  function isFloat(t) {
    return t === null || typeof t != "object" ? !1 : t[_type] === FLOAT;
  }
  function tomlType(t) {
    let e = typeof t;
    if (e === "object") {
      if (t === null) return "null";
      if (t instanceof Date) return "datetime";
      if (_type in t)
        switch (t[_type]) {
          case INLINE_TABLE:
            return "inline-table";
          case INLINE_LIST:
            return "inline-list";
          case TABLE:
            return "table";
          case LIST:
            return "list";
          case FLOAT:
            return "float";
          case INTEGER:
            return "integer";
        }
    }
    return e;
  }
  function makeParserClass(t) {
    class e extends t {
      constructor() {
        (super(), (this.ctx = this.obj = Table()));
      }
      atEndOfWord() {
        return this.char === CHAR_NUM || this.char === CTRL_I || this.char === CHAR_SP || this.atEndOfLine();
      }
      atEndOfLine() {
        return this.char === t.END || this.char === CTRL_J || this.char === CTRL_M;
      }
      parseStart() {
        if (this.char === t.END) return null;
        if (this.char === CHAR_LSQB) return this.call(this.parseTableOrList);
        if (this.char === CHAR_NUM) return this.call(this.parseComment);
        if (this.char === CTRL_J || this.char === CHAR_SP || this.char === CTRL_I || this.char === CTRL_M) return null;
        if (isAlphaNumQuoteHyphen(this.char)) return this.callNow(this.parseAssignStatement);
        throw this.error(new TomlError(`Unknown character "${this.char}"`));
      }
      parseWhitespaceToEOL() {
        if (this.char === CHAR_SP || this.char === CTRL_I || this.char === CTRL_M) return null;
        if (this.char === CHAR_NUM) return this.goto(this.parseComment);
        if (this.char === t.END || this.char === CTRL_J) return this.return();
        throw this.error(new TomlError("Unexpected character, expected only whitespace or comments till end of line"));
      }
      parseAssignStatement() {
        return this.callNow(this.parseAssign, this.recordAssignStatement);
      }
      recordAssignStatement(n) {
        let o = this.ctx,
          s = n.key.pop();
        for (let a of n.key) {
          if (hasKey(o, a) && (!isTable(o[a]) || o[a][_declared]))
            throw this.error(new TomlError("Can't redefine existing key"));
          o = o[a] = o[a] || Table();
        }
        if (hasKey(o, s)) throw this.error(new TomlError("Can't redefine existing key"));
        return (
          isInteger(n.value) || isFloat(n.value) ? (o[s] = n.value.valueOf()) : (o[s] = n.value),
          this.goto(this.parseWhitespaceToEOL)
        );
      }
      parseAssign() {
        return this.callNow(this.parseKeyword, this.recordAssignKeyword);
      }
      recordAssignKeyword(n) {
        return (
          this.state.resultTable ? this.state.resultTable.push(n) : (this.state.resultTable = [n]),
          this.goto(this.parseAssignKeywordPreDot)
        );
      }
      parseAssignKeywordPreDot() {
        if (this.char === CHAR_PERIOD) return this.next(this.parseAssignKeywordPostDot);
        if (this.char !== CHAR_SP && this.char !== CTRL_I) return this.goto(this.parseAssignEqual);
      }
      parseAssignKeywordPostDot() {
        if (this.char !== CHAR_SP && this.char !== CTRL_I)
          return this.callNow(this.parseKeyword, this.recordAssignKeyword);
      }
      parseAssignEqual() {
        if (this.char === CHAR_EQUALS) return this.next(this.parseAssignPreValue);
        throw this.error(new TomlError('Invalid character, expected "="'));
      }
      parseAssignPreValue() {
        return this.char === CHAR_SP || this.char === CTRL_I
          ? null
          : this.callNow(this.parseValue, this.recordAssignValue);
      }
      recordAssignValue(n) {
        return this.returnNow({ key: this.state.resultTable, value: n });
      }
      parseComment() {
        do if (this.char === t.END || this.char === CTRL_J) return this.return();
        while (this.nextChar());
      }
      parseTableOrList() {
        if (this.char === CHAR_LSQB) this.next(this.parseList);
        else return this.goto(this.parseTable);
      }
      parseTable() {
        return ((this.ctx = this.obj), this.goto(this.parseTableNext));
      }
      parseTableNext() {
        return this.char === CHAR_SP || this.char === CTRL_I
          ? null
          : this.callNow(this.parseKeyword, this.parseTableMore);
      }
      parseTableMore(n) {
        if (this.char === CHAR_SP || this.char === CTRL_I) return null;
        if (this.char === CHAR_RSQB) {
          if (hasKey(this.ctx, n) && (!isTable(this.ctx[n]) || this.ctx[n][_declared]))
            throw this.error(new TomlError("Can't redefine existing key"));
          return (
            (this.ctx = this.ctx[n] = this.ctx[n] || Table()),
            (this.ctx[_declared] = !0),
            this.next(this.parseWhitespaceToEOL)
          );
        } else if (this.char === CHAR_PERIOD) {
          if (!hasKey(this.ctx, n)) this.ctx = this.ctx[n] = Table();
          else if (isTable(this.ctx[n])) this.ctx = this.ctx[n];
          else if (isList(this.ctx[n])) this.ctx = this.ctx[n][this.ctx[n].length - 1];
          else throw this.error(new TomlError("Can't redefine existing key"));
          return this.next(this.parseTableNext);
        } else throw this.error(new TomlError("Unexpected character, expected whitespace, . or ]"));
      }
      parseList() {
        return ((this.ctx = this.obj), this.goto(this.parseListNext));
      }
      parseListNext() {
        return this.char === CHAR_SP || this.char === CTRL_I
          ? null
          : this.callNow(this.parseKeyword, this.parseListMore);
      }
      parseListMore(n) {
        if (this.char === CHAR_SP || this.char === CTRL_I) return null;
        if (this.char === CHAR_RSQB) {
          if ((hasKey(this.ctx, n) || (this.ctx[n] = List()), isInlineList(this.ctx[n])))
            throw this.error(new TomlError("Can't extend an inline array"));
          if (isList(this.ctx[n])) {
            let o = Table();
            (this.ctx[n].push(o), (this.ctx = o));
          } else throw this.error(new TomlError("Can't redefine an existing key"));
          return this.next(this.parseListEnd);
        } else if (this.char === CHAR_PERIOD) {
          if (!hasKey(this.ctx, n)) this.ctx = this.ctx[n] = Table();
          else {
            if (isInlineList(this.ctx[n])) throw this.error(new TomlError("Can't extend an inline array"));
            if (isInlineTable(this.ctx[n])) throw this.error(new TomlError("Can't extend an inline table"));
            if (isList(this.ctx[n])) this.ctx = this.ctx[n][this.ctx[n].length - 1];
            else if (isTable(this.ctx[n])) this.ctx = this.ctx[n];
            else throw this.error(new TomlError("Can't redefine an existing key"));
          }
          return this.next(this.parseListNext);
        } else throw this.error(new TomlError("Unexpected character, expected whitespace, . or ]"));
      }
      parseListEnd(n) {
        if (this.char === CHAR_RSQB) return this.next(this.parseWhitespaceToEOL);
        throw this.error(new TomlError("Unexpected character, expected whitespace, . or ]"));
      }
      parseValue() {
        if (this.char === t.END) throw this.error(new TomlError("Key without value"));
        if (this.char === CHAR_QUOT) return this.next(this.parseDoubleString);
        if (this.char === CHAR_APOS) return this.next(this.parseSingleString);
        if (this.char === CHAR_HYPHEN || this.char === CHAR_PLUS) return this.goto(this.parseNumberSign);
        if (this.char === CHAR_i) return this.next(this.parseInf);
        if (this.char === CHAR_n) return this.next(this.parseNan);
        if (isDigit(this.char)) return this.goto(this.parseNumberOrDateTime);
        if (this.char === CHAR_t || this.char === CHAR_f) return this.goto(this.parseBoolean);
        if (this.char === CHAR_LSQB) return this.call(this.parseInlineList, this.recordValue);
        if (this.char === CHAR_LCUB) return this.call(this.parseInlineTable, this.recordValue);
        throw this.error(
          new TomlError(
            "Unexpected character, expecting string, number, datetime, boolean, inline array or inline table",
          ),
        );
      }
      recordValue(n) {
        return this.returnNow(n);
      }
      parseInf() {
        if (this.char === CHAR_n) return this.next(this.parseInf2);
        throw this.error(new TomlError('Unexpected character, expected "inf", "+inf" or "-inf"'));
      }
      parseInf2() {
        if (this.char === CHAR_f) return this.state.buf === "-" ? this.return(-1 / 0) : this.return(1 / 0);
        throw this.error(new TomlError('Unexpected character, expected "inf", "+inf" or "-inf"'));
      }
      parseNan() {
        if (this.char === CHAR_a) return this.next(this.parseNan2);
        throw this.error(new TomlError('Unexpected character, expected "nan"'));
      }
      parseNan2() {
        if (this.char === CHAR_n) return this.return(NaN);
        throw this.error(new TomlError('Unexpected character, expected "nan"'));
      }
      parseKeyword() {
        return this.char === CHAR_QUOT
          ? this.next(this.parseBasicString)
          : this.char === CHAR_APOS
            ? this.next(this.parseLiteralString)
            : this.goto(this.parseBareKey);
      }
      parseBareKey() {
        do {
          if (this.char === t.END) throw this.error(new TomlError("Key ended without value"));
          if (isAlphaNumHyphen(this.char)) this.consume();
          else {
            if (this.state.buf.length === 0) throw this.error(new TomlError("Empty bare keys are not allowed"));
            return this.returnNow();
          }
        } while (this.nextChar());
      }
      parseSingleString() {
        return this.char === CHAR_APOS
          ? this.next(this.parseLiteralMultiStringMaybe)
          : this.goto(this.parseLiteralString);
      }
      parseLiteralString() {
        do {
          if (this.char === CHAR_APOS) return this.return();
          if (this.atEndOfLine()) throw this.error(new TomlError("Unterminated string"));
          if (this.char === CHAR_DEL || (this.char <= CTRL_CHAR_BOUNDARY && this.char !== CTRL_I))
            throw this.errorControlCharInString();
          this.consume();
        } while (this.nextChar());
      }
      parseLiteralMultiStringMaybe() {
        return this.char === CHAR_APOS ? this.next(this.parseLiteralMultiString) : this.returnNow();
      }
      parseLiteralMultiString() {
        return this.char === CTRL_M
          ? null
          : this.char === CTRL_J
            ? this.next(this.parseLiteralMultiStringContent)
            : this.goto(this.parseLiteralMultiStringContent);
      }
      parseLiteralMultiStringContent() {
        do {
          if (this.char === CHAR_APOS) return this.next(this.parseLiteralMultiEnd);
          if (this.char === t.END) throw this.error(new TomlError("Unterminated multi-line string"));
          if (
            this.char === CHAR_DEL ||
            (this.char <= CTRL_CHAR_BOUNDARY && this.char !== CTRL_I && this.char !== CTRL_J && this.char !== CTRL_M)
          )
            throw this.errorControlCharInString();
          this.consume();
        } while (this.nextChar());
      }
      parseLiteralMultiEnd() {
        return this.char === CHAR_APOS
          ? this.next(this.parseLiteralMultiEnd2)
          : ((this.state.buf += "'"), this.goto(this.parseLiteralMultiStringContent));
      }
      parseLiteralMultiEnd2() {
        return this.char === CHAR_APOS
          ? this.return()
          : ((this.state.buf += "''"), this.goto(this.parseLiteralMultiStringContent));
      }
      parseDoubleString() {
        return this.char === CHAR_QUOT ? this.next(this.parseMultiStringMaybe) : this.goto(this.parseBasicString);
      }
      parseBasicString() {
        do {
          if (this.char === CHAR_BSOL) return this.call(this.parseEscape, this.recordEscapeReplacement);
          if (this.char === CHAR_QUOT) return this.return();
          if (this.atEndOfLine()) throw this.error(new TomlError("Unterminated string"));
          if (this.char === CHAR_DEL || (this.char <= CTRL_CHAR_BOUNDARY && this.char !== CTRL_I))
            throw this.errorControlCharInString();
          this.consume();
        } while (this.nextChar());
      }
      recordEscapeReplacement(n) {
        return ((this.state.buf += n), this.goto(this.parseBasicString));
      }
      parseMultiStringMaybe() {
        return this.char === CHAR_QUOT ? this.next(this.parseMultiString) : this.returnNow();
      }
      parseMultiString() {
        return this.char === CTRL_M
          ? null
          : this.char === CTRL_J
            ? this.next(this.parseMultiStringContent)
            : this.goto(this.parseMultiStringContent);
      }
      parseMultiStringContent() {
        do {
          if (this.char === CHAR_BSOL) return this.call(this.parseMultiEscape, this.recordMultiEscapeReplacement);
          if (this.char === CHAR_QUOT) return this.next(this.parseMultiEnd);
          if (this.char === t.END) throw this.error(new TomlError("Unterminated multi-line string"));
          if (
            this.char === CHAR_DEL ||
            (this.char <= CTRL_CHAR_BOUNDARY && this.char !== CTRL_I && this.char !== CTRL_J && this.char !== CTRL_M)
          )
            throw this.errorControlCharInString();
          this.consume();
        } while (this.nextChar());
      }
      errorControlCharInString() {
        let n = "\\u00";
        return (
          this.char < 16 && (n += "0"),
          (n += this.char.toString(16)),
          this.error(
            new TomlError(`Control characters (codes < 0x1f and 0x7f) are not allowed in strings, use ${n} instead`),
          )
        );
      }
      recordMultiEscapeReplacement(n) {
        return ((this.state.buf += n), this.goto(this.parseMultiStringContent));
      }
      parseMultiEnd() {
        return this.char === CHAR_QUOT
          ? this.next(this.parseMultiEnd2)
          : ((this.state.buf += '"'), this.goto(this.parseMultiStringContent));
      }
      parseMultiEnd2() {
        return this.char === CHAR_QUOT
          ? this.return()
          : ((this.state.buf += '""'), this.goto(this.parseMultiStringContent));
      }
      parseMultiEscape() {
        return this.char === CTRL_M || this.char === CTRL_J
          ? this.next(this.parseMultiTrim)
          : this.char === CHAR_SP || this.char === CTRL_I
            ? this.next(this.parsePreMultiTrim)
            : this.goto(this.parseEscape);
      }
      parsePreMultiTrim() {
        if (this.char === CHAR_SP || this.char === CTRL_I) return null;
        if (this.char === CTRL_M || this.char === CTRL_J) return this.next(this.parseMultiTrim);
        throw this.error(new TomlError("Can't escape whitespace"));
      }
      parseMultiTrim() {
        return this.char === CTRL_J || this.char === CHAR_SP || this.char === CTRL_I || this.char === CTRL_M
          ? null
          : this.returnNow();
      }
      parseEscape() {
        if (this.char in escapes) return this.return(escapes[this.char]);
        if (this.char === CHAR_u) return this.call(this.parseSmallUnicode, this.parseUnicodeReturn);
        if (this.char === CHAR_U) return this.call(this.parseLargeUnicode, this.parseUnicodeReturn);
        throw this.error(new TomlError("Unknown escape character: " + this.char));
      }
      parseUnicodeReturn(n) {
        try {
          let o = parseInt(n, 16);
          if (o >= SURROGATE_FIRST && o <= SURROGATE_LAST)
            throw this.error(new TomlError("Invalid unicode, character in range 0xD800 - 0xDFFF is reserved"));
          return this.returnNow(String.fromCodePoint(o));
        } catch (o) {
          throw this.error(TomlError.wrap(o));
        }
      }
      parseSmallUnicode() {
        if (isHexit(this.char)) {
          if ((this.consume(), this.state.buf.length >= 4)) return this.return();
        } else throw this.error(new TomlError("Invalid character in unicode sequence, expected hex"));
      }
      parseLargeUnicode() {
        if (isHexit(this.char)) {
          if ((this.consume(), this.state.buf.length >= 8)) return this.return();
        } else throw this.error(new TomlError("Invalid character in unicode sequence, expected hex"));
      }
      parseNumberSign() {
        return (this.consume(), this.next(this.parseMaybeSignedInfOrNan));
      }
      parseMaybeSignedInfOrNan() {
        return this.char === CHAR_i
          ? this.next(this.parseInf)
          : this.char === CHAR_n
            ? this.next(this.parseNan)
            : this.callNow(this.parseNoUnder, this.parseNumberIntegerStart);
      }
      parseNumberIntegerStart() {
        return this.char === CHAR_0
          ? (this.consume(), this.next(this.parseNumberIntegerExponentOrDecimal))
          : this.goto(this.parseNumberInteger);
      }
      parseNumberIntegerExponentOrDecimal() {
        return this.char === CHAR_PERIOD
          ? (this.consume(), this.call(this.parseNoUnder, this.parseNumberFloat))
          : this.char === CHAR_E || this.char === CHAR_e
            ? (this.consume(), this.next(this.parseNumberExponentSign))
            : this.returnNow(Integer(this.state.buf));
      }
      parseNumberInteger() {
        if (isDigit(this.char)) this.consume();
        else {
          if (this.char === CHAR_LOWBAR) return this.call(this.parseNoUnder);
          if (this.char === CHAR_E || this.char === CHAR_e)
            return (this.consume(), this.next(this.parseNumberExponentSign));
          if (this.char === CHAR_PERIOD) return (this.consume(), this.call(this.parseNoUnder, this.parseNumberFloat));
          {
            let n = Integer(this.state.buf);
            if (n.isNaN()) throw this.error(new TomlError("Invalid number"));
            return this.returnNow(n);
          }
        }
      }
      parseNoUnder() {
        if (this.char === CHAR_LOWBAR || this.char === CHAR_PERIOD || this.char === CHAR_E || this.char === CHAR_e)
          throw this.error(new TomlError("Unexpected character, expected digit"));
        if (this.atEndOfWord()) throw this.error(new TomlError("Incomplete number"));
        return this.returnNow();
      }
      parseNoUnderHexOctBinLiteral() {
        if (this.char === CHAR_LOWBAR || this.char === CHAR_PERIOD)
          throw this.error(new TomlError("Unexpected character, expected digit"));
        if (this.atEndOfWord()) throw this.error(new TomlError("Incomplete number"));
        return this.returnNow();
      }
      parseNumberFloat() {
        if (this.char === CHAR_LOWBAR) return this.call(this.parseNoUnder, this.parseNumberFloat);
        if (isDigit(this.char)) this.consume();
        else
          return this.char === CHAR_E || this.char === CHAR_e
            ? (this.consume(), this.next(this.parseNumberExponentSign))
            : this.returnNow(Float(this.state.buf));
      }
      parseNumberExponentSign() {
        if (isDigit(this.char)) return this.goto(this.parseNumberExponent);
        if (this.char === CHAR_HYPHEN || this.char === CHAR_PLUS)
          (this.consume(), this.call(this.parseNoUnder, this.parseNumberExponent));
        else throw this.error(new TomlError("Unexpected character, expected -, + or digit"));
      }
      parseNumberExponent() {
        if (isDigit(this.char)) this.consume();
        else return this.char === CHAR_LOWBAR ? this.call(this.parseNoUnder) : this.returnNow(Float(this.state.buf));
      }
      parseNumberOrDateTime() {
        return this.char === CHAR_0
          ? (this.consume(), this.next(this.parseNumberBaseOrDateTime))
          : this.goto(this.parseNumberOrDateTimeOnly);
      }
      parseNumberOrDateTimeOnly() {
        if (this.char === CHAR_LOWBAR) return this.call(this.parseNoUnder, this.parseNumberInteger);
        if (isDigit(this.char)) (this.consume(), this.state.buf.length > 4 && this.next(this.parseNumberInteger));
        else
          return this.char === CHAR_E || this.char === CHAR_e
            ? (this.consume(), this.next(this.parseNumberExponentSign))
            : this.char === CHAR_PERIOD
              ? (this.consume(), this.call(this.parseNoUnder, this.parseNumberFloat))
              : this.char === CHAR_HYPHEN
                ? this.goto(this.parseDateTime)
                : this.char === CHAR_COLON
                  ? this.goto(this.parseOnlyTimeHour)
                  : this.returnNow(Integer(this.state.buf));
      }
      parseDateTimeOnly() {
        if (this.state.buf.length < 4) {
          if (isDigit(this.char)) return this.consume();
          if (this.char === CHAR_COLON) return this.goto(this.parseOnlyTimeHour);
          throw this.error(new TomlError("Expected digit while parsing year part of a date"));
        } else {
          if (this.char === CHAR_HYPHEN) return this.goto(this.parseDateTime);
          throw this.error(new TomlError("Expected hyphen (-) while parsing year part of date"));
        }
      }
      parseNumberBaseOrDateTime() {
        return this.char === CHAR_b
          ? (this.consume(), this.call(this.parseNoUnderHexOctBinLiteral, this.parseIntegerBin))
          : this.char === CHAR_o
            ? (this.consume(), this.call(this.parseNoUnderHexOctBinLiteral, this.parseIntegerOct))
            : this.char === CHAR_x
              ? (this.consume(), this.call(this.parseNoUnderHexOctBinLiteral, this.parseIntegerHex))
              : this.char === CHAR_PERIOD
                ? this.goto(this.parseNumberInteger)
                : isDigit(this.char)
                  ? this.goto(this.parseDateTimeOnly)
                  : this.returnNow(Integer(this.state.buf));
      }
      parseIntegerHex() {
        if (isHexit(this.char)) this.consume();
        else {
          if (this.char === CHAR_LOWBAR) return this.call(this.parseNoUnderHexOctBinLiteral);
          {
            let n = Integer(this.state.buf);
            if (n.isNaN()) throw this.error(new TomlError("Invalid number"));
            return this.returnNow(n);
          }
        }
      }
      parseIntegerOct() {
        if (isOctit(this.char)) this.consume();
        else {
          if (this.char === CHAR_LOWBAR) return this.call(this.parseNoUnderHexOctBinLiteral);
          {
            let n = Integer(this.state.buf);
            if (n.isNaN()) throw this.error(new TomlError("Invalid number"));
            return this.returnNow(n);
          }
        }
      }
      parseIntegerBin() {
        if (isBit(this.char)) this.consume();
        else {
          if (this.char === CHAR_LOWBAR) return this.call(this.parseNoUnderHexOctBinLiteral);
          {
            let n = Integer(this.state.buf);
            if (n.isNaN()) throw this.error(new TomlError("Invalid number"));
            return this.returnNow(n);
          }
        }
      }
      parseDateTime() {
        if (this.state.buf.length < 4)
          throw this.error(new TomlError("Years less than 1000 must be zero padded to four characters"));
        return ((this.state.result = this.state.buf), (this.state.buf = ""), this.next(this.parseDateMonth));
      }
      parseDateMonth() {
        if (this.char === CHAR_HYPHEN) {
          if (this.state.buf.length < 2)
            throw this.error(new TomlError("Months less than 10 must be zero padded to two characters"));
          return ((this.state.result += "-" + this.state.buf), (this.state.buf = ""), this.next(this.parseDateDay));
        } else if (isDigit(this.char)) this.consume();
        else throw this.error(new TomlError("Incomplete datetime"));
      }
      parseDateDay() {
        if (this.char === CHAR_T || this.char === CHAR_SP) {
          if (this.state.buf.length < 2)
            throw this.error(new TomlError("Days less than 10 must be zero padded to two characters"));
          return (
            (this.state.result += "-" + this.state.buf),
            (this.state.buf = ""),
            this.next(this.parseStartTimeHour)
          );
        } else {
          if (this.atEndOfWord()) return this.returnNow(createDate(this.state.result + "-" + this.state.buf));
          if (isDigit(this.char)) this.consume();
          else throw this.error(new TomlError("Incomplete datetime"));
        }
      }
      parseStartTimeHour() {
        return this.atEndOfWord() ? this.returnNow(createDate(this.state.result)) : this.goto(this.parseTimeHour);
      }
      parseTimeHour() {
        if (this.char === CHAR_COLON) {
          if (this.state.buf.length < 2)
            throw this.error(new TomlError("Hours less than 10 must be zero padded to two characters"));
          return ((this.state.result += "T" + this.state.buf), (this.state.buf = ""), this.next(this.parseTimeMin));
        } else if (isDigit(this.char)) this.consume();
        else throw this.error(new TomlError("Incomplete datetime"));
      }
      parseTimeMin() {
        if (this.state.buf.length < 2 && isDigit(this.char)) this.consume();
        else {
          if (this.state.buf.length === 2 && this.char === CHAR_COLON)
            return ((this.state.result += ":" + this.state.buf), (this.state.buf = ""), this.next(this.parseTimeSec));
          throw this.error(new TomlError("Incomplete datetime"));
        }
      }
      parseTimeSec() {
        if (isDigit(this.char)) {
          if ((this.consume(), this.state.buf.length === 2))
            return (
              (this.state.result += ":" + this.state.buf),
              (this.state.buf = ""),
              this.next(this.parseTimeZoneOrFraction)
            );
        } else throw this.error(new TomlError("Incomplete datetime"));
      }
      parseOnlyTimeHour() {
        if (this.char === CHAR_COLON) {
          if (this.state.buf.length < 2)
            throw this.error(new TomlError("Hours less than 10 must be zero padded to two characters"));
          return ((this.state.result = this.state.buf), (this.state.buf = ""), this.next(this.parseOnlyTimeMin));
        } else throw this.error(new TomlError("Incomplete time"));
      }
      parseOnlyTimeMin() {
        if (this.state.buf.length < 2 && isDigit(this.char)) this.consume();
        else {
          if (this.state.buf.length === 2 && this.char === CHAR_COLON)
            return (
              (this.state.result += ":" + this.state.buf),
              (this.state.buf = ""),
              this.next(this.parseOnlyTimeSec)
            );
          throw this.error(new TomlError("Incomplete time"));
        }
      }
      parseOnlyTimeSec() {
        if (isDigit(this.char)) {
          if ((this.consume(), this.state.buf.length === 2)) return this.next(this.parseOnlyTimeFractionMaybe);
        } else throw this.error(new TomlError("Incomplete time"));
      }
      parseOnlyTimeFractionMaybe() {
        if (((this.state.result += ":" + this.state.buf), this.char === CHAR_PERIOD))
          ((this.state.buf = ""), this.next(this.parseOnlyTimeFraction));
        else return this.return(createTime(this.state.result));
      }
      parseOnlyTimeFraction() {
        if (isDigit(this.char)) this.consume();
        else if (this.atEndOfWord()) {
          if (this.state.buf.length === 0) throw this.error(new TomlError("Expected digit in milliseconds"));
          return this.returnNow(createTime(this.state.result + "." + this.state.buf));
        } else
          throw this.error(
            new TomlError("Unexpected character in datetime, expected period (.), minus (-), plus (+) or Z"),
          );
      }
      parseTimeZoneOrFraction() {
        if (this.char === CHAR_PERIOD) (this.consume(), this.next(this.parseDateTimeFraction));
        else if (this.char === CHAR_HYPHEN || this.char === CHAR_PLUS)
          (this.consume(), this.next(this.parseTimeZoneHour));
        else {
          if (this.char === CHAR_Z)
            return (this.consume(), this.return(createDateTime(this.state.result + this.state.buf)));
          if (this.atEndOfWord()) return this.returnNow(createDateTimeFloat(this.state.result + this.state.buf));
          throw this.error(
            new TomlError("Unexpected character in datetime, expected period (.), minus (-), plus (+) or Z"),
          );
        }
      }
      parseDateTimeFraction() {
        if (isDigit(this.char)) this.consume();
        else {
          if (this.state.buf.length === 1) throw this.error(new TomlError("Expected digit in milliseconds"));
          if (this.char === CHAR_HYPHEN || this.char === CHAR_PLUS) (this.consume(), this.next(this.parseTimeZoneHour));
          else {
            if (this.char === CHAR_Z)
              return (this.consume(), this.return(createDateTime(this.state.result + this.state.buf)));
            if (this.atEndOfWord()) return this.returnNow(createDateTimeFloat(this.state.result + this.state.buf));
            throw this.error(
              new TomlError("Unexpected character in datetime, expected period (.), minus (-), plus (+) or Z"),
            );
          }
        }
      }
      parseTimeZoneHour() {
        if (isDigit(this.char)) {
          if ((this.consume(), /\d\d$/.test(this.state.buf))) return this.next(this.parseTimeZoneSep);
        } else throw this.error(new TomlError("Unexpected character in datetime, expected digit"));
      }
      parseTimeZoneSep() {
        if (this.char === CHAR_COLON) (this.consume(), this.next(this.parseTimeZoneMin));
        else throw this.error(new TomlError("Unexpected character in datetime, expected colon"));
      }
      parseTimeZoneMin() {
        if (isDigit(this.char)) {
          if ((this.consume(), /\d\d$/.test(this.state.buf)))
            return this.return(createDateTime(this.state.result + this.state.buf));
        } else throw this.error(new TomlError("Unexpected character in datetime, expected digit"));
      }
      parseBoolean() {
        if (this.char === CHAR_t) return (this.consume(), this.next(this.parseTrue_r));
        if (this.char === CHAR_f) return (this.consume(), this.next(this.parseFalse_a));
      }
      parseTrue_r() {
        if (this.char === CHAR_r) return (this.consume(), this.next(this.parseTrue_u));
        throw this.error(new TomlError("Invalid boolean, expected true or false"));
      }
      parseTrue_u() {
        if (this.char === CHAR_u) return (this.consume(), this.next(this.parseTrue_e));
        throw this.error(new TomlError("Invalid boolean, expected true or false"));
      }
      parseTrue_e() {
        if (this.char === CHAR_e) return this.return(!0);
        throw this.error(new TomlError("Invalid boolean, expected true or false"));
      }
      parseFalse_a() {
        if (this.char === CHAR_a) return (this.consume(), this.next(this.parseFalse_l));
        throw this.error(new TomlError("Invalid boolean, expected true or false"));
      }
      parseFalse_l() {
        if (this.char === CHAR_l) return (this.consume(), this.next(this.parseFalse_s));
        throw this.error(new TomlError("Invalid boolean, expected true or false"));
      }
      parseFalse_s() {
        if (this.char === CHAR_s) return (this.consume(), this.next(this.parseFalse_e));
        throw this.error(new TomlError("Invalid boolean, expected true or false"));
      }
      parseFalse_e() {
        if (this.char === CHAR_e) return this.return(!1);
        throw this.error(new TomlError("Invalid boolean, expected true or false"));
      }
      parseInlineList() {
        if (this.char === CHAR_SP || this.char === CTRL_I || this.char === CTRL_M || this.char === CTRL_J) return null;
        if (this.char === t.END) throw this.error(new TomlError("Unterminated inline array"));
        return this.char === CHAR_NUM
          ? this.call(this.parseComment)
          : this.char === CHAR_RSQB
            ? this.return(this.state.resultArr || InlineList())
            : this.callNow(this.parseValue, this.recordInlineListValue);
      }
      recordInlineListValue(n) {
        if (this.state.resultArr) {
          let o = this.state.resultArr[_contentType],
            s = tomlType(n);
          if (o !== s)
            throw this.error(new TomlError(`Inline lists must be a single type, not a mix of ${o} and ${s}`));
        } else this.state.resultArr = InlineList(tomlType(n));
        return (
          isFloat(n) || isInteger(n) ? this.state.resultArr.push(n.valueOf()) : this.state.resultArr.push(n),
          this.goto(this.parseInlineListNext)
        );
      }
      parseInlineListNext() {
        if (this.char === CHAR_SP || this.char === CTRL_I || this.char === CTRL_M || this.char === CTRL_J) return null;
        if (this.char === CHAR_NUM) return this.call(this.parseComment);
        if (this.char === CHAR_COMMA) return this.next(this.parseInlineList);
        if (this.char === CHAR_RSQB) return this.goto(this.parseInlineList);
        throw this.error(new TomlError("Invalid character, expected whitespace, comma (,) or close bracket (])"));
      }
      parseInlineTable() {
        if (this.char === CHAR_SP || this.char === CTRL_I) return null;
        if (this.char === t.END || this.char === CHAR_NUM || this.char === CTRL_J || this.char === CTRL_M)
          throw this.error(new TomlError("Unterminated inline array"));
        return this.char === CHAR_RCUB
          ? this.return(this.state.resultTable || InlineTable())
          : (this.state.resultTable || (this.state.resultTable = InlineTable()),
            this.callNow(this.parseAssign, this.recordInlineTableValue));
      }
      recordInlineTableValue(n) {
        let o = this.state.resultTable,
          s = n.key.pop();
        for (let a of n.key) {
          if (hasKey(o, a) && (!isTable(o[a]) || o[a][_declared]))
            throw this.error(new TomlError("Can't redefine existing key"));
          o = o[a] = o[a] || Table();
        }
        if (hasKey(o, s)) throw this.error(new TomlError("Can't redefine existing key"));
        return (
          isInteger(n.value) || isFloat(n.value) ? (o[s] = n.value.valueOf()) : (o[s] = n.value),
          this.goto(this.parseInlineTableNext)
        );
      }
      parseInlineTableNext() {
        if (this.char === CHAR_SP || this.char === CTRL_I) return null;
        if (this.char === t.END || this.char === CHAR_NUM || this.char === CTRL_J || this.char === CTRL_M)
          throw this.error(new TomlError("Unterminated inline array"));
        if (this.char === CHAR_COMMA) return this.next(this.parseInlineTable);
        if (this.char === CHAR_RCUB) return this.goto(this.parseInlineTable);
        throw this.error(new TomlError("Invalid character, expected whitespace, comma (,) or close bracket (])"));
      }
    }
    return e;
  }
});