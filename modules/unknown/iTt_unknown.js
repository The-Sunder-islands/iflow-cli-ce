/**
 * @module iTt
 * @category unknown
 * @label unknown
 * @position 459 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (iTt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var iTt = T((YLu, pZr) => {
  "use strict";
  pZr.exports = RFo;
  var DFo = XC(),
    rTt = Bh();
  function O_(t, e) {
    return (
      t.name +
      ": " +
      e +
      (t.repeated && e !== "array" ? "[]" : t.map && e !== "object" ? "{k:" + t.keyType + "}" : "") +
      " expected"
    );
  }
  function nTt(t, e, r, n) {
    if (e.resolvedType)
      if (e.resolvedType instanceof DFo) {
        t("switch(%s){", n)("default:")("return%j", O_(e, "enum value"));
        for (var o = Object.keys(e.resolvedType.values), s = 0; s < o.length; ++s)
          t("case %i:", e.resolvedType.values[o[s]]);
        t("break")("}");
      } else t("{")("var e=types[%i].verify(%s);", r, n)("if(e)")("return%j+e", e.name + ".")("}");
    else
      switch (e.type) {
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32":
          t("if(!util.isInteger(%s))", n)("return%j", O_(e, "integer"));
          break;
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          t(
            "if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))",
            n,
            n,
            n,
            n,
          )("return%j", O_(e, "integer|Long"));
          break;
        case "float":
        case "double":
          t('if(typeof %s!=="number")', n)("return%j", O_(e, "number"));
          break;
        case "bool":
          t('if(typeof %s!=="boolean")', n)("return%j", O_(e, "boolean"));
          break;
        case "string":
          t("if(!util.isString(%s))", n)("return%j", O_(e, "string"));
          break;
        case "bytes":
          t('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', n, n, n)("return%j", O_(e, "buffer"));
          break;
      }
    return t;
  }
  function IFo(t, e, r) {
    switch (e.keyType) {
      case "int32":
      case "uint32":
      case "sint32":
      case "fixed32":
      case "sfixed32":
        t("if(!util.key32Re.test(%s))", r)("return%j", O_(e, "integer key"));
        break;
      case "int64":
      case "uint64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        t("if(!util.key64Re.test(%s))", r)("return%j", O_(e, "integer|Long key"));
        break;
      case "bool":
        t("if(!util.key2Re.test(%s))", r)("return%j", O_(e, "boolean key"));
        break;
    }
    return t;
  }
  function RFo(t) {
    var e = rTt.codegen(["m"], t.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected"),
      r = t.oneofsArray,
      n = {};
    r.length && e("var p={}");
    for (var o = 0; o < t.fieldsArray.length; ++o) {
      var s = t._fieldsArray[o].resolve(),
        a = "m" + rTt.safeProp(s.name);
      if ((s.optional && e("if(%s!=null&&m.hasOwnProperty(%j)){", a, s.name), s.map))
        (e("if(!util.isObject(%s))", a)("return%j", O_(s, "object"))("var k=Object.keys(%s)", a)(
          "for(var i=0;i<k.length;++i){",
        ),
          IFo(e, s, "k[i]"),
          nTt(e, s, o, a + "[k[i]]")("}"));
      else if (s.repeated)
        (e("if(!Array.isArray(%s))", a)("return%j", O_(s, "array"))("for(var i=0;i<%s.length;++i){", a),
          nTt(e, s, o, a + "[i]")("}"));
      else {
        if (s.partOf) {
          var u = rTt.safeProp(s.partOf.name);
          (n[s.partOf.name] === 1 && e("if(p%s===1)", u)("return%j", s.partOf.name + ": multiple values"),
            (n[s.partOf.name] = 1),
            e("p%s=1", u));
        }
        nTt(e, s, o, a);
      }
      s.optional && e("}");
    }
    return e("return null");
  }
});