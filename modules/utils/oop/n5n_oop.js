/**
 * @module n5n
 * @category utils/oop
 * @label oop
 * @position 878 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (n5n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var n5n = T((Sse) => {
  "use strict";
  Object.defineProperty(Sse, "__esModule", { value: !0 });
  Sse.boolOrEmptySchema = Sse.topBoolOrEmptySchema = void 0;
  var u2s = N9e(),
    c2s = za(),
    l2s = wk(),
    m2s = { message: "boolean schema is false" };
  function d2s(t) {
    let { gen: e, schema: r, validateName: n } = t;
    r === !1
      ? r5n(t, !1)
      : typeof r == "object" && r.$async === !0
        ? e.return(l2s.default.data)
        : (e.assign((0, c2s._)`${n}.errors`, null), e.return(!0));
  }
  Sse.topBoolOrEmptySchema = d2s;
  function f2s(t, e) {
    let { gen: r, schema: n } = t;
    n === !1 ? (r.var(e, !1), r5n(t)) : r.var(e, !0);
  }
  Sse.boolOrEmptySchema = f2s;
  function r5n(t, e) {
    let { gen: r, data: n } = t,
      o = { gen: r, keyword: "false schema", data: n, schema: !1, schemaCode: !1, schemaValue: !1, params: {}, it: t };
    (0, u2s.reportError)(o, m2s, void 0, e);
  }
});