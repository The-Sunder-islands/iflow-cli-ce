/**
 * @module Q3n
 * @category utils/oop
 * @label oop
 * @position 802 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Q3n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Q3n = T((Woe) => {
  "use strict";
  Object.defineProperty(Woe, "__esModule", { value: !0 });
  Woe.boolOrEmptySchema = Woe.topBoolOrEmptySchema = void 0;
  var Rfs = I8e(),
    kfs = _a(),
    Ofs = bk(),
    Nfs = { message: "boolean schema is false" };
  function Pfs(t) {
    let { gen: e, schema: r, validateName: n } = t;
    r === !1
      ? j3n(t, !1)
      : typeof r == "object" && r.$async === !0
        ? e.return(Ofs.default.data)
        : (e.assign((0, kfs._)`${n}.errors`, null), e.return(!0));
  }
  Woe.topBoolOrEmptySchema = Pfs;
  function Bfs(t, e) {
    let { gen: r, schema: n } = t;
    n === !1 ? (r.var(e, !1), j3n(t)) : r.var(e, !0);
  }
  Woe.boolOrEmptySchema = Bfs;
  function j3n(t, e) {
    let { gen: r, data: n } = t,
      o = { gen: r, keyword: "false schema", data: n, schema: !1, schemaCode: !1, schemaValue: !1, params: {}, it: t };
    (0, Rfs.reportError)(o, Nfs, void 0, e);
  }
});