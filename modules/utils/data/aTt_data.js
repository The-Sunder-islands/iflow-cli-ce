/**
 * @module aTt
 * @category utils/data
 * @label data
 * @position 460 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aTt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aTt = T((gZr) => {
  "use strict";
  var hZr = gZr,
    lbe = XC(),
    Yx = Bh();
  function oTt(t, e, r, n) {
    var o = !1;
    if (e.resolvedType)
      if (e.resolvedType instanceof lbe) {
        t("switch(d%s){", n);
        for (var s = e.resolvedType.values, a = Object.keys(s), u = 0; u < a.length; ++u)
          (s[a[u]] === e.typeDefault &&
            !o &&
            (t("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}', n, n, n), e.repeated || t("break"), (o = !0)),
            t("case%j:", a[u])("case %i:", s[a[u]])("m%s=%j", n, s[a[u]])("break"));
        t("}");
      } else
        t('if(typeof d%s!=="object")', n)("throw TypeError(%j)", e.fullName + ": object expected")(
          "m%s=types[%i].fromObject(d%s)",
          n,
          r,
          n,
        );
    else {
      var c = !1;
      switch (e.type) {
        case "double":
        case "float":
          t("m%s=Number(d%s)", n, n);
          break;
        case "uint32":
        case "fixed32":
          t("m%s=d%s>>>0", n, n);
          break;
        case "int32":
        case "sint32":
        case "sfixed32":
          t("m%s=d%s|0", n, n);
          break;
        case "uint64":
          c = !0;
        case "int64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          t("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", n, n, c)(
            'else if(typeof d%s==="string")',
            n,
          )(
            "m%s=parseInt(d%s,10)",
            n,
            n,
          )('else if(typeof d%s==="number")', n)(
            "m%s=d%s",
            n,
            n,
          )('else if(typeof d%s==="object")', n)(
            "m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)",
            n,
            n,
            n,
            c ? "true" : "",
          );
          break;
        case "bytes":
          t('if(typeof d%s==="string")', n)(
            "util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)",
            n,
            n,
            n,
          )("else if(d%s.length >= 0)", n)("m%s=d%s", n, n);
          break;
        case "string":
          t("m%s=String(d%s)", n, n);
          break;
        case "bool":
          t("m%s=Boolean(d%s)", n, n);
          break;
      }
    }
    return t;
  }
  hZr.fromObject = function (e) {
    var r = e.fieldsArray,
      n = Yx.codegen(["d"], e.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
    if (!r.length) return n("return new this.ctor");
    n("var m=new this.ctor");
    for (var o = 0; o < r.length; ++o) {
      var s = r[o].resolve(),
        a = Yx.safeProp(s.name);
      s.map
        ? (n("if(d%s){", a)('if(typeof d%s!=="object")', a)("throw TypeError(%j)", s.fullName + ": object expected")(
            "m%s={}",
            a,
          )("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", a),
          oTt(n, s, o, a + "[ks[i]]")("}")("}"))
        : s.repeated
          ? (n("if(d%s){", a)("if(!Array.isArray(d%s))", a)("throw TypeError(%j)", s.fullName + ": array expected")(
              "m%s=[]",
              a,
            )("for(var i=0;i<d%s.length;++i){", a),
            oTt(n, s, o, a + "[i]")("}")("}"))
          : (s.resolvedType instanceof lbe || n("if(d%s!=null){", a),
            oTt(n, s, o, a),
            s.resolvedType instanceof lbe || n("}"));
    }
    return n("return m");
  };
  function sTt(t, e, r, n) {
    if (e.resolvedType)
      e.resolvedType instanceof lbe
        ? t(
            "d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s",
            n,
            r,
            n,
            n,
            r,
            n,
            n,
          )
        : t("d%s=types[%i].toObject(m%s,o)", n, r, n);
    else {
      var o = !1;
      switch (e.type) {
        case "double":
        case "float":
          t("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", n, n, n, n);
          break;
        case "uint64":
          o = !0;
        case "int64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          t('if(typeof m%s==="number")', n)("d%s=o.longs===String?String(m%s):m%s", n, n, n)("else")(
            "d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s",
            n,
            n,
            n,
            n,
            o ? "true" : "",
            n,
          );
          break;
        case "bytes":
          t(
            "d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s",
            n,
            n,
            n,
            n,
            n,
          );
          break;
        default:
          t("d%s=m%s", n, n);
          break;
      }
    }
    return t;
  }
  hZr.toObject = function (e) {
    var r = e.fieldsArray.slice().sort(Yx.compareFieldsById);
    if (!r.length) return Yx.codegen()("return {}");
    for (
      var n = Yx.codegen(["m", "o"], e.name + "$toObject")("if(!o)")("o={}")("var d={}"), o = [], s = [], a = [], u = 0;
      u < r.length;
      ++u
    )
      r[u].partOf || (r[u].resolve().repeated ? o : r[u].map ? s : a).push(r[u]);
    if (o.length) {
      for (n("if(o.arrays||o.defaults){"), u = 0; u < o.length; ++u) n("d%s=[]", Yx.safeProp(o[u].name));
      n("}");
    }
    if (s.length) {
      for (n("if(o.objects||o.defaults){"), u = 0; u < s.length; ++u) n("d%s={}", Yx.safeProp(s[u].name));
      n("}");
    }
    if (a.length) {
      for (n("if(o.defaults){"), u = 0; u < a.length; ++u) {
        var c = a[u],
          m = Yx.safeProp(c.name);
        if (c.resolvedType instanceof lbe)
          n("d%s=o.enums===String?%j:%j", m, c.resolvedType.valuesById[c.typeDefault], c.typeDefault);
        else if (c.long)
          n("if(util.Long){")(
            "var n=new util.Long(%i,%i,%j)",
            c.typeDefault.low,
            c.typeDefault.high,
            c.typeDefault.unsigned,
          )(
            "d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n",
            m,
          )("}else")("d%s=o.longs===String?%j:%i", m, c.typeDefault.toString(), c.typeDefault.toNumber());
        else if (c.bytes) {
          var d = "[" + Array.prototype.slice.call(c.typeDefault).join(",") + "]";
          n("if(o.bytes===String)d%s=%j", m, String.fromCharCode.apply(String, c.typeDefault))("else{")("d%s=%s", m, d)(
            "if(o.bytes!==Array)d%s=util.newBuffer(d%s)",
            m,
            m,
          )("}");
        } else n("d%s=%j", m, c.typeDefault);
      }
      n("}");
    }
    var f = !1;
    for (u = 0; u < r.length; ++u) {
      var c = r[u],
        p = e._fieldsArray.indexOf(c),
        m = Yx.safeProp(c.name);
      (c.map
        ? (f || ((f = !0), n("var ks2")),
          n("if(m%s&&(ks2=Object.keys(m%s)).length){", m, m)("d%s={}", m)("for(var j=0;j<ks2.length;++j){"),
          sTt(n, c, p, m + "[ks2[j]]")("}"))
        : c.repeated
          ? (n("if(m%s&&m%s.length){", m, m)("d%s=[]", m)("for(var j=0;j<m%s.length;++j){", m),
            sTt(n, c, p, m + "[j]")("}"))
          : (n("if(m%s!=null&&m.hasOwnProperty(%j)){", m, c.name),
            sTt(n, c, p, m),
            c.partOf && n("if(o.oneofs)")("d%s=%j", Yx.safeProp(c.partOf.name), c.name)),
        n("}"));
    }
    return n("return d");
  };
});