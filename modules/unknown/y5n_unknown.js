/**
 * @module y5n
 * @category unknown
 * @label unknown
 * @position 886 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (y5n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var y5n = T((Hic, A5n) => {
  "use strict";
  var MM = (A5n.exports = function (t, e, r) {
    (typeof e == "function" && ((r = e), (e = {})), (r = e.cb || r));
    var n = typeof r == "function" ? r : r.pre || function () {},
      o = r.post || function () {};
    gKe(e, n, o, t, "", t);
  });
  MM.keywords = {
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
  MM.arrayKeywords = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 };
  MM.propsKeywords = { $defs: !0, definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 };
  MM.skipKeywords = {
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
  function gKe(t, e, r, n, o, s, a, u, c, m) {
    if (n && typeof n == "object" && !Array.isArray(n)) {
      e(n, o, s, a, u, c, m);
      for (var d in n) {
        var f = n[d];
        if (Array.isArray(f)) {
          if (d in MM.arrayKeywords)
            for (var p = 0; p < f.length; p++) gKe(t, e, r, f[p], o + "/" + d + "/" + p, s, o, d, n, p);
        } else if (d in MM.propsKeywords) {
          if (f && typeof f == "object") for (var h in f) gKe(t, e, r, f[h], o + "/" + d + "/" + Z2s(h), s, o, d, n, h);
        } else (d in MM.keywords || (t.allKeys && !(d in MM.skipKeywords))) && gKe(t, e, r, f, o + "/" + d, s, o, d, n);
      }
      r(n, o, s, a, u, c, m);
    }
  }
  function Z2s(t) {
    return t.replace(/~/g, "~0").replace(/\//g, "~1");
  }
});