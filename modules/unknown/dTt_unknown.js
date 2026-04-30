/**
 * @module dTt
 * @category unknown
 * @label unknown
 * @position 470 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dTt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dTt = T((sMu, BZr) => {
  "use strict";
  BZr.exports = eUo;
  var ZFo = XC(),
    _Tt = Aq(),
    ETt = Bh();
  function PZr(t, e, r, n) {
    return e.delimited
      ? t("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", r, n, ((e.id << 3) | 3) >>> 0, ((e.id << 3) | 4) >>> 0)
      : t("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", r, n, ((e.id << 3) | 2) >>> 0);
  }
  function eUo(t) {
    for (
      var e = ETt.codegen(["m", "w"], t.name + "$encode")("if(!w)")("w=Writer.create()"),
        r,
        n,
        o = t.fieldsArray.slice().sort(ETt.compareFieldsById),
        r = 0;
      r < o.length;
      ++r
    ) {
      var s = o[r].resolve(),
        a = t._fieldsArray.indexOf(s),
        u = s.resolvedType instanceof ZFo ? "int32" : s.type,
        c = _Tt.basic[u];
      ((n = "m" + ETt.safeProp(s.name)),
        s.map
          ? (e(
              "if(%s!=null&&Object.hasOwnProperty.call(m,%j)){",
              n,
              s.name,
            )("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", n)(
              "w.uint32(%i).fork().uint32(%i).%s(ks[i])",
              ((s.id << 3) | 2) >>> 0,
              8 | _Tt.mapKey[s.keyType],
              s.keyType,
            ),
            c === void 0
              ? e("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", a, n)
              : e(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | c, u, n),
            e("}")("}"))
          : s.repeated
            ? (e("if(%s!=null&&%s.length){", n, n),
              s.packed && _Tt.packed[u] !== void 0
                ? e("w.uint32(%i).fork()", ((s.id << 3) | 2) >>> 0)("for(var i=0;i<%s.length;++i)", n)(
                    "w.%s(%s[i])",
                    u,
                    n,
                  )("w.ldelim()")
                : (e("for(var i=0;i<%s.length;++i)", n),
                  c === void 0 ? PZr(e, s, a, n + "[i]") : e("w.uint32(%i).%s(%s[i])", ((s.id << 3) | c) >>> 0, u, n)),
              e("}"))
            : (s.optional && e("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", n, s.name),
              c === void 0 ? PZr(e, s, a, n) : e("w.uint32(%i).%s(%s)", ((s.id << 3) | c) >>> 0, u, n)));
    }
    return e("return w");
  }
});