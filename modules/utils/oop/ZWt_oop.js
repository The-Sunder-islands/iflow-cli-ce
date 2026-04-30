/**
 * @module ZWt
 * @category utils/oop
 * @label oop
 * @position 1113 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ZWt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ZWt = T((sbc, ETn) => {
  var obc = (ETn.exports = function (t, e) {
      var r = {
        asString: function () {
          return t;
        },
        range: function (n, o) {
          return new cW(t, e, n, o);
        },
      };
      return r;
    }),
    cW = function (t, e, r, n) {
      ((this._string = t), (this._description = e), (this._startIndex = r), (this._endIndex = n));
    };
  cW.prototype.to = function (t) {
    return new cW(this._string, this._description, this._startIndex, t._endIndex);
  };
  cW.prototype.describe = function () {
    var t = this._position(),
      e = this._description
        ? this._description +
          `
`
        : "";
    return (
      e +
      "Line number: " +
      t.lineNumber +
      `
Character number: ` +
      t.characterNumber
    );
  };
  cW.prototype.lineNumber = function () {
    return this._position().lineNumber;
  };
  cW.prototype.characterNumber = function () {
    return this._position().characterNumber;
  };
  cW.prototype._position = function () {
    for (
      var t = this,
        e = 0,
        r = function () {
          return t._string.indexOf(
            `
`,
            e,
          );
        },
        n = 1;
      r() !== -1 && r() < this._startIndex;
    )
      ((e = r() + 1), (n += 1));
    var o = this._startIndex - e + 1;
    return { lineNumber: n, characterNumber: o };
  };
});