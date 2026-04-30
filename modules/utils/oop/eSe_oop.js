/**
 * @module eSe
 * @category utils/oop
 * @label oop
 * @position 1620 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (eSe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var eSe = T((iFc, edi) => {
  "use strict";
  var Kmi = "[^\\\\/]",
    qva = "(?=.)",
    Jmi = "[^/]",
    cfr = "(?:\\/|$)",
    Xmi = "(?:^|\\/)",
    lfr = `\\.{1,2}${cfr}`,
    Hva = "(?!\\.)",
    Vva = `(?!${Xmi}${lfr})`,
    Wva = `(?!\\.{0,1}${cfr})`,
    zva = `(?!${lfr})`,
    Yva = "[^.\\/]",
    Kva = `${Jmi}*?`,
    Jva = "/",
    Zmi = {
      DOT_LITERAL: "\\.",
      PLUS_LITERAL: "\\+",
      QMARK_LITERAL: "\\?",
      SLASH_LITERAL: "\\/",
      ONE_CHAR: qva,
      QMARK: Jmi,
      END_ANCHOR: cfr,
      DOTS_SLASH: lfr,
      NO_DOT: Hva,
      NO_DOTS: Vva,
      NO_DOT_SLASH: Wva,
      NO_DOTS_SLASH: zva,
      QMARK_NO_DOT: Yva,
      STAR: Kva,
      START_ANCHOR: Xmi,
      SEP: Jva,
    },
    Xva = {
      ...Zmi,
      SLASH_LITERAL: "[\\\\/]",
      QMARK: Kmi,
      STAR: `${Kmi}*?`,
      DOTS_SLASH: "\\.{1,2}(?:[\\\\/]|$)",
      NO_DOT: "(?!\\.)",
      NO_DOTS: "(?!(?:^|[\\\\/])\\.{1,2}(?:[\\\\/]|$))",
      NO_DOT_SLASH: "(?!\\.{0,1}(?:[\\\\/]|$))",
      NO_DOTS_SLASH: "(?!\\.{1,2}(?:[\\\\/]|$))",
      QMARK_NO_DOT: "[^.\\\\/]",
      START_ANCHOR: "(?:^|[\\\\/])",
      END_ANCHOR: "(?:[\\\\/]|$)",
      SEP: "\\",
    },
    Zva = {
      alnum: "a-zA-Z0-9",
      alpha: "a-zA-Z",
      ascii: "\\x00-\\x7F",
      blank: " \\t",
      cntrl: "\\x00-\\x1F\\x7F",
      digit: "0-9",
      graph: "\\x21-\\x7E",
      lower: "a-z",
      print: "\\x20-\\x7E ",
      punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
      space: " \\t\\r\\n\\v\\f",
      upper: "A-Z",
      word: "A-Za-z0-9_",
      xdigit: "A-Fa-f0-9",
    };
  edi.exports = {
    MAX_LENGTH: 1024 * 64,
    POSIX_REGEX_SOURCE: Zva,
    REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
    REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
    REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
    REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
    REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
    REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
    REPLACEMENTS: { __proto__: null, "***": "*", "**/**": "**", "**/**/**": "**" },
    CHAR_0: 48,
    CHAR_9: 57,
    CHAR_UPPERCASE_A: 65,
    CHAR_LOWERCASE_A: 97,
    CHAR_UPPERCASE_Z: 90,
    CHAR_LOWERCASE_Z: 122,
    CHAR_LEFT_PARENTHESES: 40,
    CHAR_RIGHT_PARENTHESES: 41,
    CHAR_ASTERISK: 42,
    CHAR_AMPERSAND: 38,
    CHAR_AT: 64,
    CHAR_BACKWARD_SLASH: 92,
    CHAR_CARRIAGE_RETURN: 13,
    CHAR_CIRCUMFLEX_ACCENT: 94,
    CHAR_COLON: 58,
    CHAR_COMMA: 44,
    CHAR_DOT: 46,
    CHAR_DOUBLE_QUOTE: 34,
    CHAR_EQUAL: 61,
    CHAR_EXCLAMATION_MARK: 33,
    CHAR_FORM_FEED: 12,
    CHAR_FORWARD_SLASH: 47,
    CHAR_GRAVE_ACCENT: 96,
    CHAR_HASH: 35,
    CHAR_HYPHEN_MINUS: 45,
    CHAR_LEFT_ANGLE_BRACKET: 60,
    CHAR_LEFT_CURLY_BRACE: 123,
    CHAR_LEFT_SQUARE_BRACKET: 91,
    CHAR_LINE_FEED: 10,
    CHAR_NO_BREAK_SPACE: 160,
    CHAR_PERCENT: 37,
    CHAR_PLUS: 43,
    CHAR_QUESTION_MARK: 63,
    CHAR_RIGHT_ANGLE_BRACKET: 62,
    CHAR_RIGHT_CURLY_BRACE: 125,
    CHAR_RIGHT_SQUARE_BRACKET: 93,
    CHAR_SEMICOLON: 59,
    CHAR_SINGLE_QUOTE: 39,
    CHAR_SPACE: 32,
    CHAR_TAB: 9,
    CHAR_UNDERSCORE: 95,
    CHAR_VERTICAL_LINE: 124,
    CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
    extglobChars(t) {
      return {
        "!": { type: "negate", open: "(?:(?!(?:", close: `))${t.STAR})` },
        "?": { type: "qmark", open: "(?:", close: ")?" },
        "+": { type: "plus", open: "(?:", close: ")+" },
        "*": { type: "star", open: "(?:", close: ")*" },
        "@": { type: "at", open: "(?:", close: ")" },
      };
    },
    globChars(t) {
      return t === !0 ? Xva : Zmi;
    },
  };
});