/**
 * @module tS
 * @category unknown
 * @label unknown
 * @position 1128 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tS) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tS = T((Ebc, KTn) => {
  "use strict";
  KTn.exports = {
    ValueType: {
      Null: 0,
      Merge: 1,
      Number: 2,
      String: 3,
      Date: 4,
      Hyperlink: 5,
      Formula: 6,
      SharedString: 7,
      RichText: 8,
      Boolean: 9,
      Error: 10,
    },
    FormulaType: { None: 0, Master: 1, Shared: 2 },
    RelationshipType: {
      None: 0,
      OfficeDocument: 1,
      Worksheet: 2,
      CalcChain: 3,
      SharedStrings: 4,
      Styles: 5,
      Theme: 6,
      Hyperlink: 7,
    },
    DocumentType: { Xlsx: 1 },
    ReadingOrder: { LeftToRight: 1, RightToLeft: 2 },
    ErrorValue: {
      NotApplicable: "#N/A",
      Ref: "#REF!",
      Name: "#NAME?",
      DivZero: "#DIV/0!",
      Null: "#NULL!",
      Value: "#VALUE!",
      Num: "#NUM!",
    },
  };
});