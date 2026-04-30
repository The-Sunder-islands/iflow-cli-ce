/**
 * @module FTn
 * @category unknown
 * @label unknown
 * @position 1121 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (FTn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var FTn = T((wZe) => {
  wZe.readOptions = Uxs;
  var MTn = (d1(), bt(m1)),
    Mxs = (wZe._defaultStyleMap = [
      "p.Heading1 => h1:fresh",
      "p.Heading2 => h2:fresh",
      "p.Heading3 => h3:fresh",
      "p.Heading4 => h4:fresh",
      "p.Heading5 => h5:fresh",
      "p.Heading6 => h6:fresh",
      "p[style-name='Heading 1'] => h1:fresh",
      "p[style-name='Heading 2'] => h2:fresh",
      "p[style-name='Heading 3'] => h3:fresh",
      "p[style-name='Heading 4'] => h4:fresh",
      "p[style-name='Heading 5'] => h5:fresh",
      "p[style-name='Heading 6'] => h6:fresh",
      "p[style-name='heading 1'] => h1:fresh",
      "p[style-name='heading 2'] => h2:fresh",
      "p[style-name='heading 3'] => h3:fresh",
      "p[style-name='heading 4'] => h4:fresh",
      "p[style-name='heading 5'] => h5:fresh",
      "p[style-name='heading 6'] => h6:fresh",
      "p.Heading => h1:fresh",
      "p[style-name='Heading'] => h1:fresh",
      "r[style-name='Strong'] => strong",
      "p[style-name='footnote text'] => p:fresh",
      "r[style-name='footnote reference'] =>",
      "p[style-name='endnote text'] => p:fresh",
      "r[style-name='endnote reference'] =>",
      "p[style-name='annotation text'] => p:fresh",
      "r[style-name='annotation reference'] =>",
      "p[style-name='Footnote'] => p:fresh",
      "r[style-name='Footnote anchor'] =>",
      "p[style-name='Endnote'] => p:fresh",
      "r[style-name='Endnote anchor'] =>",
      "p:unordered-list(1) => ul > li:fresh",
      "p:unordered-list(2) => ul|ol > li > ul > li:fresh",
      "p:unordered-list(3) => ul|ol > li > ul|ol > li > ul > li:fresh",
      "p:unordered-list(4) => ul|ol > li > ul|ol > li > ul|ol > li > ul > li:fresh",
      "p:unordered-list(5) => ul|ol > li > ul|ol > li > ul|ol > li > ul|ol > li > ul > li:fresh",
      "p:ordered-list(1) => ol > li:fresh",
      "p:ordered-list(2) => ul|ol > li > ol > li:fresh",
      "p:ordered-list(3) => ul|ol > li > ul|ol > li > ol > li:fresh",
      "p:ordered-list(4) => ul|ol > li > ul|ol > li > ul|ol > li > ol > li:fresh",
      "p:ordered-list(5) => ul|ol > li > ul|ol > li > ul|ol > li > ul|ol > li > ol > li:fresh",
      "r[style-name='Hyperlink'] =>",
      "p[style-name='Normal'] => p:fresh",
      "p.Body => p:fresh",
      "p[style-name='Body'] => p:fresh",
    ]),
    Fxs = (wZe._standardOptions = {
      externalFileAccess: !1,
      transformDocument: $xs,
      includeDefaultStyleMap: !0,
      includeEmbeddedStyleMap: !0,
    });
  function Uxs(t) {
    return (
      (t = t || {}),
      MTn.extend({}, Fxs, t, {
        customStyleMap: LTn(t.styleMap),
        readStyleMap: function () {
          var e = this.customStyleMap;
          return (
            this.includeEmbeddedStyleMap && (e = e.concat(LTn(this.embeddedStyleMap))),
            this.includeDefaultStyleMap && (e = e.concat(Mxs)),
            e
          );
        },
      })
    );
  }
  function LTn(t) {
    return t
      ? MTn.isString(t)
        ? t
            .split(
              `
`,
            )
            .map(function (e) {
              return e.trim();
            })
            .filter(function (e) {
              return e !== "" && e.charAt(0) !== "#";
            })
        : t
      : [];
  }
  function $xs(t) {
    return t;
  }
});