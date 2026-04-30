/**
 * @module SWt
 * @category utils/oop
 * @label oop
 * @position 1071 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (SWt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var SWt = T((Awn, ywn) => {
  (function () {
    var t,
      e = {}.hasOwnProperty;
    ywn.exports = t = (function () {
      function r(n) {
        var o, s, a, u, c, m, d, f, p;
        (n || (n = {}),
          (this.pretty = n.pretty || !1),
          (this.allowEmpty = (s = n.allowEmpty) != null ? s : !1),
          this.pretty
            ? ((this.indent = (a = n.indent) != null ? a : "  "),
              (this.newline =
                (u = n.newline) != null
                  ? u
                  : `
`),
              (this.offset = (c = n.offset) != null ? c : 0),
              (this.dontprettytextnodes = (m = n.dontprettytextnodes) != null ? m : 0))
            : ((this.indent = ""), (this.newline = ""), (this.offset = 0), (this.dontprettytextnodes = 0)),
          (this.spacebeforeslash = (d = n.spacebeforeslash) != null ? d : ""),
          this.spacebeforeslash === !0 && (this.spacebeforeslash = " "),
          (this.newlinedefault = this.newline),
          (this.prettydefault = this.pretty),
          (f = n.writer || {}));
        for (o in f) e.call(f, o) && ((p = f[o]), (this[o] = p));
      }
      return (
        (r.prototype.set = function (n) {
          var o, s, a;
          (n || (n = {}),
            "pretty" in n && (this.pretty = n.pretty),
            "allowEmpty" in n && (this.allowEmpty = n.allowEmpty),
            this.pretty
              ? ((this.indent = "indent" in n ? n.indent : "  "),
                (this.newline =
                  "newline" in n
                    ? n.newline
                    : `
`),
                (this.offset = "offset" in n ? n.offset : 0),
                (this.dontprettytextnodes = "dontprettytextnodes" in n ? n.dontprettytextnodes : 0))
              : ((this.indent = ""), (this.newline = ""), (this.offset = 0), (this.dontprettytextnodes = 0)),
            (this.spacebeforeslash = "spacebeforeslash" in n ? n.spacebeforeslash : ""),
            this.spacebeforeslash === !0 && (this.spacebeforeslash = " "),
            (this.newlinedefault = this.newline),
            (this.prettydefault = this.pretty),
            (s = n.writer || {}));
          for (o in s) e.call(s, o) && ((a = s[o]), (this[o] = a));
          return this;
        }),
        (r.prototype.space = function (n) {
          var o;
          return this.pretty ? ((o = (n || 0) + this.offset + 1), o > 0 ? new Array(o).join(this.indent) : "") : "";
        }),
        r
      );
    })();
  }).call(Awn);
});