/**
 * @module DTn
 * @category utils/oop
 * @label oop
 * @position 1118 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (DTn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var DTn = T((Tg) => {
  Tg.paragraph = mxs;
  Tg.run = dxs;
  Tg.table = fxs;
  Tg.bold = new Z4("bold");
  Tg.italic = new Z4("italic");
  Tg.underline = new Z4("underline");
  Tg.strikethrough = new Z4("strikethrough");
  Tg.allCaps = new Z4("allCaps");
  Tg.smallCaps = new Z4("smallCaps");
  Tg.highlight = pxs;
  Tg.commentReference = new Z4("commentReference");
  Tg.lineBreak = new EZe({ breakType: "line" });
  Tg.pageBreak = new EZe({ breakType: "page" });
  Tg.columnBreak = new EZe({ breakType: "column" });
  Tg.equalTo = gxs;
  Tg.startsWith = bxs;
  function mxs(t) {
    return new Z4("paragraph", t);
  }
  function dxs(t) {
    return new Z4("run", t);
  }
  function fxs(t) {
    return new Z4("table", t);
  }
  function pxs(t) {
    return new TTn(t);
  }
  function Z4(t, e) {
    ((e = e || {}),
      (this._elementType = t),
      (this._styleId = e.styleId),
      (this._styleName = e.styleName),
      e.list && ((this._listIndex = e.list.levelIndex), (this._listIsOrdered = e.list.isOrdered)));
  }
  Z4.prototype.matches = function (t) {
    return (
      t.type === this._elementType &&
      (this._styleId === void 0 || t.styleId === this._styleId) &&
      (this._styleName === void 0 || (t.styleName && this._styleName.operator(this._styleName.operand, t.styleName))) &&
      (this._listIndex === void 0 || hxs(t, this._listIndex, this._listIsOrdered)) &&
      (this._breakType === void 0 || this._breakType === t.breakType)
    );
  };
  function TTn(t) {
    ((t = t || {}), (this._color = t.color));
  }
  TTn.prototype.matches = function (t) {
    return t.type === "highlight" && (this._color === void 0 || t.color === this._color);
  };
  function EZe(t) {
    ((t = t || {}), (this._breakType = t.breakType));
  }
  EZe.prototype.matches = function (t) {
    return t.type === "break" && (this._breakType === void 0 || t.breakType === this._breakType);
  };
  function hxs(t, e, r) {
    return t.numbering && t.numbering.level == e && t.numbering.isOrdered == r;
  }
  function gxs(t) {
    return { operator: Axs, operand: t };
  }
  function bxs(t) {
    return { operator: yxs, operand: t };
  }
  function Axs(t, e) {
    return t.toUpperCase() === e.toUpperCase();
  }
  function yxs(t, e) {
    return e.toUpperCase().indexOf(t.toUpperCase()) === 0;
  }
});