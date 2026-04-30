/**
 * @module den
 * @category network/grpc
 * @label grpc
 * @position 482 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (den) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var den = T((WB) => {
  "use strict";
  Object.defineProperty(WB, "__esModule", { value: !0 });
  WB.addCommonProtos = WB.loadProtosWithOptionsSync = WB.loadProtosWithOptions = void 0;
  var cen = Ae("fs"),
    len = Ae("path"),
    jre = oUe();
  function men(t, e) {
    let r = t.resolvePath;
    t.resolvePath = (n, o) => {
      if (len.isAbsolute(o)) return o;
      for (let s of e) {
        let a = len.join(s, o);
        try {
          return (cen.accessSync(a, cen.constants.R_OK), a);
        } catch {
          continue;
        }
      }
      return (process.emitWarning(`${o} not found in any of the include paths ${e}`), r(n, o));
    };
  }
  async function QUo(t, e) {
    let r = new jre.Root();
    if (((e = e || {}), e.includeDirs)) {
      if (!Array.isArray(e.includeDirs)) return Promise.reject(new Error("The includeDirs option must be an array"));
      men(r, e.includeDirs);
    }
    let n = await r.load(t, e);
    return (n.resolveAll(), n);
  }
  WB.loadProtosWithOptions = QUo;
  function GUo(t, e) {
    let r = new jre.Root();
    if (((e = e || {}), e.includeDirs)) {
      if (!Array.isArray(e.includeDirs)) throw new Error("The includeDirs option must be an array");
      men(r, e.includeDirs);
    }
    let n = r.loadSync(t, e);
    return (n.resolveAll(), n);
  }
  WB.loadProtosWithOptionsSync = GUo;
  function qUo() {
    let t = sen(),
      e = wTt(),
      r = aen(),
      n = uen();
    (jre.common("api", t.nested.google.nested.protobuf.nested),
      jre.common("descriptor", e.nested.google.nested.protobuf.nested),
      jre.common("source_context", r.nested.google.nested.protobuf.nested),
      jre.common("type", n.nested.google.nested.protobuf.nested));
  }
  WB.addCommonProtos = qUo;
});