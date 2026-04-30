/**
 * @module wpn
 * @category unknown
 * @label unknown
 * @position 742 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wpn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wpn = T((eec, Spn) => {
  "use strict";
  var gM = (Spn.exports = function (t, e, r) {
    (typeof e == "function" && ((r = e), (e = {})), (r = e.cb || r));
    var n = typeof r == "function" ? r : r.pre || function () {},
      o = r.post || function () {};
    Oze(e, n, o, t, "", t);
  });
  gM.keywords = {
    additionalItems: !0,
    items: !0,
    contains: !0,
    additionalProperties: !0,
    propertyNames: !0,
    not: !0,
    if: !0,
    then: !0,
    else: !0,
  };
  gM.arrayKeywords = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 };
  gM.propsKeywords = { $defs: !0, definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 };
  gM.skipKeywords = {
    default: !0,
    enum: !0,
    const: !0,
    required: !0,
    maximum: !0,
    minimum: !0,
    exclusiveMaximum: !0,
    exclusiveMinimum: !0,
    multipleOf: !0,
    maxLength: !0,
    minLength: !0,
    pattern: !0,
    format: !0,
    maxItems: !0,
    minItems: !0,
    uniqueItems: !0,
    maxProperties: !0,
    minProperties: !0,
  };
  function Oze(t, e, r, n, o, s, a, u, c, m) {
    if (n && typeof n == "object" && !Array.isArray(n)) {
      e(n, o, s, a, u, c, m);
      for (var d in n) {
        var f = n[d];
        if (Array.isArray(f)) {
          if (d in gM.arrayKeywords)
            for (var p = 0; p < f.length; p++) Oze(t, e, r, f[p], o + "/" + d + "/" + p, s, o, d, n, p);
        } else if (d in gM.propsKeywords) {
          if (f && typeof f == "object") for (var h in f) Oze(t, e, r, f[h], o + "/" + d + "/" + Mls(h), s, o, d, n, h);
        } else (d in gM.keywords || (t.allKeys && !(d in gM.skipKeywords))) && Oze(t, e, r, f, o + "/" + d, s, o, d, n);
      }
      r(n, o, s, a, u, c, m);
    }
  }
  function Mls(t) {
    return t.replace(/~/g, "~0").replace(/\//g, "~1");
  }
});