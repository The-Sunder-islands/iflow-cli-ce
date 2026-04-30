/**
 * @module upn
 * @category utils/oop
 * @label oop
 * @position 734 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (upn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var upn = T((Noe) => {
  "use strict";
  Object.defineProperty(Noe, "__esModule", { value: !0 });
  Noe.boolOrEmptySchema = Noe.topBoolOrEmptySchema = void 0;
  var Vcs = t8e(),
    Wcs = Ha(),
    zcs = dk(),
    Ycs = { message: "boolean schema is false" };
  function Kcs(t) {
    let { gen: e, schema: r, validateName: n } = t;
    r === !1
      ? apn(t, !1)
      : typeof r == "object" && r.$async === !0
        ? e.return(zcs.default.data)
        : (e.assign((0, Wcs._)`${n}.errors`, null), e.return(!0));
  }
  Noe.topBoolOrEmptySchema = Kcs;
  function Jcs(t, e) {
    let { gen: r, schema: n } = t;
    n === !1 ? (r.var(e, !1), apn(t)) : r.var(e, !0);
  }
  Noe.boolOrEmptySchema = Jcs;
  function apn(t, e) {
    let { gen: r, data: n } = t,
      o = { gen: r, keyword: "false schema", data: n, schema: !1, schemaCode: !1, schemaValue: !1, params: {}, it: t };
    (0, Vcs.reportError)(o, Ycs, void 0, e);
  }
});