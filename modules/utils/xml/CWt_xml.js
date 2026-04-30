/**
 * @module CWt
 * @category utils/xml
 * @label xml
 * @position 1070 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (CWt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var CWt = T((gwn, bwn) => {
  (function () {
    var t,
      e = function (n, o) {
        return function () {
          return n.apply(o, arguments);
        };
      },
      r = {}.hasOwnProperty;
    bwn.exports = t = (function () {
      function n(o) {
        this.assertLegalChar = e(this.assertLegalChar, this);
        var s, a, u;
        (o || (o = {}), (this.noDoubleEncoding = o.noDoubleEncoding), (a = o.stringify || {}));
        for (s in a) r.call(a, s) && ((u = a[s]), (this[s] = u));
      }
      return (
        (n.prototype.eleName = function (o) {
          return ((o = "" + o || ""), this.assertLegalChar(o));
        }),
        (n.prototype.eleText = function (o) {
          return ((o = "" + o || ""), this.assertLegalChar(this.elEscape(o)));
        }),
        (n.prototype.cdata = function (o) {
          return ((o = "" + o || ""), (o = o.replace("]]>", "]]]]><![CDATA[>")), this.assertLegalChar(o));
        }),
        (n.prototype.comment = function (o) {
          if (((o = "" + o || ""), o.match(/--/))) throw new Error("Comment text cannot contain double-hypen: " + o);
          return this.assertLegalChar(o);
        }),
        (n.prototype.raw = function (o) {
          return "" + o || "";
        }),
        (n.prototype.attName = function (o) {
          return (o = "" + o || "");
        }),
        (n.prototype.attValue = function (o) {
          return ((o = "" + o || ""), this.attEscape(o));
        }),
        (n.prototype.insTarget = function (o) {
          return "" + o || "";
        }),
        (n.prototype.insValue = function (o) {
          if (((o = "" + o || ""), o.match(/\?>/))) throw new Error("Invalid processing instruction value: " + o);
          return o;
        }),
        (n.prototype.xmlVersion = function (o) {
          if (((o = "" + o || ""), !o.match(/1\.[0-9]+/))) throw new Error("Invalid version number: " + o);
          return o;
        }),
        (n.prototype.xmlEncoding = function (o) {
          if (((o = "" + o || ""), !o.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)))
            throw new Error("Invalid encoding: " + o);
          return o;
        }),
        (n.prototype.xmlStandalone = function (o) {
          return o ? "yes" : "no";
        }),
        (n.prototype.dtdPubID = function (o) {
          return "" + o || "";
        }),
        (n.prototype.dtdSysID = function (o) {
          return "" + o || "";
        }),
        (n.prototype.dtdElementValue = function (o) {
          return "" + o || "";
        }),
        (n.prototype.dtdAttType = function (o) {
          return "" + o || "";
        }),
        (n.prototype.dtdAttDefault = function (o) {
          return o != null ? "" + o || "" : o;
        }),
        (n.prototype.dtdEntityValue = function (o) {
          return "" + o || "";
        }),
        (n.prototype.dtdNData = function (o) {
          return "" + o || "";
        }),
        (n.prototype.convertAttKey = "@"),
        (n.prototype.convertPIKey = "?"),
        (n.prototype.convertTextKey = "#text"),
        (n.prototype.convertCDataKey = "#cdata"),
        (n.prototype.convertCommentKey = "#comment"),
        (n.prototype.convertRawKey = "#raw"),
        (n.prototype.assertLegalChar = function (o) {
          var s;
          if (
            ((s = o.match(/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/)),
            s)
          )
            throw new Error("Invalid character in string: " + o + " at index " + s.index);
          return o;
        }),
        (n.prototype.elEscape = function (o) {
          var s;
          return (
            (s = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g),
            o.replace(s, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;")
          );
        }),
        (n.prototype.attEscape = function (o) {
          var s;
          return (
            (s = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g),
            o
              .replace(s, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/"/g, "&quot;")
              .replace(/\t/g, "&#x9;")
              .replace(/\n/g, "&#xA;")
              .replace(/\r/g, "&#xD;")
          );
        }),
        n
      );
    })();
  }).call(gwn);
});