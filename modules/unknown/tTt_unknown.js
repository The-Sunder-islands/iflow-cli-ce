/**
 * @module tTt
 * @category unknown
 * @label unknown
 * @position 458 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tTt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tTt = T((zLu, fZr) => {
  "use strict";
  fZr.exports = TFo;
  var wFo = XC(),
    NR = Aq(),
    dZr = Bh();
  function xFo(t) {
    return "missing required '" + t.name + "'";
  }
  function TFo(t) {
    for (
      var e = dZr.codegen(["r", "l", "e"], t.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")(
          "var c=l===undefined?r.len:r.pos+l,m=new this.ctor" +
            (t.fieldsArray.filter(function (u) {
              return u.map;
            }).length
              ? ",k,value"
              : ""),
        )("while(r.pos<c){")("var t=r.uint32()")("if(t===e)")("break")("switch(t>>>3){"),
        r = 0;
      r < t.fieldsArray.length;
      ++r
    ) {
      var n = t._fieldsArray[r].resolve(),
        o = n.resolvedType instanceof wFo ? "int32" : n.type,
        s = "m" + dZr.safeProp(n.name);
      (e("case %i: {", n.id),
        n.map
          ? (e("if(%s===util.emptyObject)", s)("%s={}", s)("var c2 = r.uint32()+r.pos"),
            NR.defaults[n.keyType] !== void 0 ? e("k=%j", NR.defaults[n.keyType]) : e("k=null"),
            NR.defaults[o] !== void 0 ? e("value=%j", NR.defaults[o]) : e("value=null"),
            e("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", n.keyType)(
              "case 2:",
            ),
            NR.basic[o] === void 0 ? e("value=types[%i].decode(r,r.uint32())", r) : e("value=r.%s()", o),
            e("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"),
            NR.long[n.keyType] !== void 0
              ? e('%s[typeof k==="object"?util.longToHash(k):k]=value', s)
              : e("%s[k]=value", s))
          : n.repeated
            ? (e("if(!(%s&&%s.length))", s, s)("%s=[]", s),
              NR.packed[o] !== void 0 &&
                e("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", s, o)("}else"),
              NR.basic[o] === void 0
                ? e(
                    n.delimited
                      ? "%s.push(types[%i].decode(r,undefined,((t&~7)|4)))"
                      : "%s.push(types[%i].decode(r,r.uint32()))",
                    s,
                    r,
                  )
                : e("%s.push(r.%s())", s, o))
            : NR.basic[o] === void 0
              ? e(
                  n.delimited ? "%s=types[%i].decode(r,undefined,((t&~7)|4))" : "%s=types[%i].decode(r,r.uint32())",
                  s,
                  r,
                )
              : e("%s=r.%s()", s, o),
        e("break")("}"));
    }
    for (e("default:")("r.skipType(t&7)")("break")("}")("}"), r = 0; r < t._fieldsArray.length; ++r) {
      var a = t._fieldsArray[r];
      a.required && e("if(!m.hasOwnProperty(%j))", a.name)("throw util.ProtocolError(%j,{instance:m})", xFo(a));
    }
    return e("return m");
  }
});