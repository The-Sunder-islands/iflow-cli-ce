/**
 * @module VZr
 * @category utils/oop
 * @label oop
 * @position 473 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (VZr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var VZr = T((cMu, HZr) => {
  "use strict";
  HZr.exports = PR;
  PR.filename = null;
  PR.defaults = { keepCase: !1 };
  var mUo = CTt(),
    jZr = eUe(),
    QZr = KFe(),
    GZr = QB(),
    dUo = qFe(),
    qZr = bq(),
    fUo = XC(),
    pUo = VFe(),
    hUo = HFe(),
    gUo = GB(),
    bUo = Aq(),
    STt = Bh(),
    AUo = /^[1-9][0-9]*$/,
    yUo = /^-?[1-9][0-9]*$/,
    _Uo = /^0[x][0-9a-fA-F]+$/,
    EUo = /^-?0[x][0-9a-fA-F]+$/,
    vUo = /^0[0-7]+$/,
    CUo = /^-?0[0-7]+$/,
    SUo = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
    Kx = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
    Jx = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
  function PR(t, e, r) {
    (e instanceof jZr || ((r = e), (e = new jZr())), r || (r = PR.defaults));
    var n = r.preferTrailingComment || !1,
      o = mUo(t, r.alternateCommentMode || !1),
      s = o.next,
      a = o.push,
      u = o.peek,
      c = o.skip,
      m = o.cmnt,
      d = !0,
      f,
      p,
      h,
      g = "proto2",
      b = e,
      A = [],
      y = {},
      E = r.keepCase
        ? function (se) {
            return se;
          }
        : STt.camelCase;
    function v() {
      A.forEach((se) => {
        ((se._edition = g),
          Object.keys(y).forEach((fe) => {
            se.getOption(fe) === void 0 && se.setOption(fe, y[fe], !0);
          }));
      });
    }
    function C(se, fe, ge) {
      var V = PR.filename;
      return (
        ge || (PR.filename = null),
        Error("illegal " + (fe || "token") + " '" + se + "' (" + (V ? V + ", " : "") + "line " + o.line + ")")
      );
    }
    function x() {
      var se = [],
        fe;
      do {
        if ((fe = s()) !== '"' && fe !== "'") throw C(fe);
        (se.push(s()), c(fe), (fe = u()));
      } while (fe === '"' || fe === "'");
      return se.join("");
    }
    function k(se) {
      var fe = s();
      switch (fe) {
        case "'":
        case '"':
          return (a(fe), x());
        case "true":
        case "TRUE":
          return !0;
        case "false":
        case "FALSE":
          return !1;
      }
      try {
        return P(fe, !0);
      } catch {
        if (se && Jx.test(fe)) return fe;
        throw C(fe, "value");
      }
    }
    function R(se, fe) {
      var ge, V;
      do
        if (fe && ((ge = u()) === '"' || ge === "'")) {
          var ee = x();
          if ((se.push(ee), g >= 2023)) throw C(ee, "id");
        } else
          try {
            se.push([(V = D(s())), c("to", !0) ? D(s()) : V]);
          } catch (pe) {
            if (fe && Jx.test(ge) && g >= 2023) se.push(ge);
            else throw pe;
          }
      while (c(",", !0));
      var Ce = { options: void 0 };
      ((Ce.setOption = function (pe, be) {
        (this.options === void 0 && (this.options = {}), (this.options[pe] = be));
      }),
        G(
          Ce,
          function (be) {
            if (be === "option") (q(Ce, be), c(";"));
            else throw C(be);
          },
          function () {
            ye(Ce);
          },
        ));
    }
    function P(se, fe) {
      var ge = 1;
      switch ((se.charAt(0) === "-" && ((ge = -1), (se = se.substring(1))), se)) {
        case "inf":
        case "INF":
        case "Inf":
          return ge * (1 / 0);
        case "nan":
        case "NAN":
        case "Nan":
        case "NaN":
          return NaN;
        case "0":
          return 0;
      }
      if (AUo.test(se)) return ge * parseInt(se, 10);
      if (_Uo.test(se)) return ge * parseInt(se, 16);
      if (vUo.test(se)) return ge * parseInt(se, 8);
      if (SUo.test(se)) return ge * parseFloat(se);
      throw C(se, "number", fe);
    }
    function D(se, fe) {
      switch (se) {
        case "max":
        case "MAX":
        case "Max":
          return 536870911;
        case "0":
          return 0;
      }
      if (!fe && se.charAt(0) === "-") throw C(se, "id");
      if (yUo.test(se)) return parseInt(se, 10);
      if (EUo.test(se)) return parseInt(se, 16);
      if (CUo.test(se)) return parseInt(se, 8);
      throw C(se, "id");
    }
    function O() {
      if (f !== void 0) throw C("package");
      if (((f = s()), !Jx.test(f))) throw C(f, "name");
      ((b = b.define(f)), c(";"));
    }
    function N() {
      var se = u(),
        fe;
      switch (se) {
        case "weak":
          ((fe = h || (h = [])), s());
          break;
        case "public":
          s();
        default:
          fe = p || (p = []);
          break;
      }
      ((se = x()), c(";"), fe.push(se));
    }
    function F() {
      if ((c("="), (g = x()), g < 2023)) throw C(g, "syntax");
      c(";");
    }
    function B() {
      if ((c("="), (g = x()), !["2023"].includes(g))) throw C(g, "edition");
      c(";");
    }
    function L(se, fe) {
      switch (fe) {
        case "option":
          return (q(se, fe), c(";"), !0);
        case "message":
          return (Q(se, fe), !0);
        case "enum":
          return (X(se, fe), !0);
        case "service":
          return (Z(se, fe), !0);
        case "extend":
          return (ue(se, fe), !0);
      }
      return !1;
    }
    function G(se, fe, ge) {
      var V = o.line;
      if ((se && (typeof se.comment != "string" && (se.comment = m()), (se.filename = PR.filename)), c("{", !0))) {
        for (var ee; (ee = s()) !== "}"; ) fe(ee);
        c(";", !0);
      } else (ge && ge(), c(";"), se && (typeof se.comment != "string" || n) && (se.comment = m(V) || se.comment));
    }
    function Q(se, fe) {
      if (!Kx.test((fe = s()))) throw C(fe, "type name");
      var ge = new QZr(fe);
      (G(ge, function (ee) {
        if (!L(ge, ee))
          switch (ee) {
            case "map":
              U(ge, ee);
              break;
            case "required":
              if (g !== "proto2") throw C(ee);
            case "repeated":
              K(ge, ee);
              break;
            case "optional":
              if (g === "proto3") K(ge, "proto3_optional");
              else {
                if (g !== "proto2") throw C(ee);
                K(ge, "optional");
              }
              break;
            case "oneof":
              Y(ge, ee);
              break;
            case "extensions":
              R(ge.extensions || (ge.extensions = []));
              break;
            case "reserved":
              R(ge.reserved || (ge.reserved = []), !0);
              break;
            default:
              if (g === "proto2" || !Jx.test(ee)) throw C(ee);
              (a(ee), K(ge, "optional"));
              break;
          }
      }),
        se.add(ge),
        se === b && A.push(ge));
    }
    function K(se, fe, ge) {
      var V = s();
      if (V === "group") {
        H(se, fe);
        return;
      }
      for (; V.endsWith(".") || u().startsWith("."); ) V += s();
      if (!Jx.test(V)) throw C(V, "type");
      var ee = s();
      if (!Kx.test(ee)) throw C(ee, "name");
      ((ee = E(ee)), c("="));
      var Ce = new GZr(ee, D(s()), V, fe, ge);
      if (
        (G(
          Ce,
          function (Ne) {
            if (Ne === "option") (q(Ce, Ne), c(";"));
            else throw C(Ne);
          },
          function () {
            ye(Ce);
          },
        ),
        fe === "proto3_optional")
      ) {
        var pe = new qZr("_" + ee);
        (Ce.setOption("proto3_optional", !0), pe.add(Ce), se.add(pe));
      } else se.add(Ce);
      se === b && A.push(Ce);
    }
    function H(se, fe) {
      if (g >= 2023) throw C("group");
      var ge = s();
      if (!Kx.test(ge)) throw C(ge, "name");
      var V = STt.lcFirst(ge);
      (ge === V && (ge = STt.ucFirst(ge)), c("="));
      var ee = D(s()),
        Ce = new QZr(ge);
      Ce.group = !0;
      var pe = new GZr(V, ee, ge, fe);
      ((pe.filename = PR.filename),
        G(Ce, function (Ne) {
          switch (Ne) {
            case "option":
              (q(Ce, Ne), c(";"));
              break;
            case "required":
            case "repeated":
              K(Ce, Ne);
              break;
            case "optional":
              g === "proto3" ? K(Ce, "proto3_optional") : K(Ce, "optional");
              break;
            case "message":
              Q(Ce, Ne);
              break;
            case "enum":
              X(Ce, Ne);
              break;
            case "reserved":
              R(Ce.reserved || (Ce.reserved = []), !0);
              break;
            default:
              throw C(Ne);
          }
        }),
        se.add(Ce).add(pe));
    }
    function U(se) {
      c("<");
      var fe = s();
      if (bUo.mapKey[fe] === void 0) throw C(fe, "type");
      c(",");
      var ge = s();
      if (!Jx.test(ge)) throw C(ge, "type");
      c(">");
      var V = s();
      if (!Kx.test(V)) throw C(V, "name");
      c("=");
      var ee = new dUo(E(V), D(s()), fe, ge);
      (G(
        ee,
        function (pe) {
          if (pe === "option") (q(ee, pe), c(";"));
          else throw C(pe);
        },
        function () {
          ye(ee);
        },
      ),
        se.add(ee));
    }
    function Y(se, fe) {
      if (!Kx.test((fe = s()))) throw C(fe, "name");
      var ge = new qZr(E(fe));
      (G(ge, function (ee) {
        ee === "option" ? (q(ge, ee), c(";")) : (a(ee), K(ge, "optional"));
      }),
        se.add(ge));
    }
    function X(se, fe) {
      if (!Kx.test((fe = s()))) throw C(fe, "name");
      var ge = new fUo(fe);
      (G(ge, function (ee) {
        switch (ee) {
          case "option":
            (q(ge, ee), c(";"));
            break;
          case "reserved":
            (R(ge.reserved || (ge.reserved = []), !0), ge.reserved === void 0 && (ge.reserved = []));
            break;
          default:
            J(ge, ee);
        }
      }),
        se.add(ge),
        se === b && A.push(ge));
    }
    function J(se, fe) {
      if (!Kx.test(fe)) throw C(fe, "name");
      c("=");
      var ge = D(s(), !0),
        V = { options: void 0 };
      ((V.getOption = function (ee) {
        return this.options[ee];
      }),
        (V.setOption = function (ee, Ce) {
          gUo.prototype.setOption.call(V, ee, Ce);
        }),
        (V.setParsedOption = function () {}),
        G(
          V,
          function (Ce) {
            if (Ce === "option") (q(V, Ce), c(";"));
            else throw C(Ce);
          },
          function () {
            ye(V);
          },
        ),
        se.add(fe, ge, V.comment, V.parsedOptions || V.options));
    }
    function q(se, fe) {
      var ge,
        V,
        ee = !0;
      for (fe === "option" && (fe = s()); fe !== "="; ) {
        if (fe === "(") {
          var Ce = s();
          (c(")"), (fe = "(" + Ce + ")"));
        }
        if (ee) {
          if (((ee = !1), fe.includes(".") && !fe.includes("("))) {
            var pe = fe.split(".");
            ((ge = pe[0] + "."), (fe = pe[1]));
            continue;
          }
          ge = fe;
        } else V = V ? (V += fe) : fe;
        fe = s();
      }
      var be = V ? ge.concat(V) : ge,
        Ne = ne(se, be);
      ((V = V && V[0] === "." ? V.slice(1) : V),
        (ge = ge && ge[ge.length - 1] === "." ? ge.slice(0, -1) : ge),
        ce(se, ge, Ne, V));
    }
    function ne(se, fe) {
      if (c("{", !0)) {
        for (var ge = {}; !c("}", !0); ) {
          if (!Kx.test((he = s()))) throw C(he, "name");
          if (he === null) throw C(he, "end of input");
          var V,
            ee = he;
          if ((c(":", !0), u() === "{")) V = ne(se, fe + "." + he);
          else if (u() === "[") {
            V = [];
            var Ce;
            if (c("[", !0)) {
              do ((Ce = k(!0)), V.push(Ce));
              while (c(",", !0));
              (c("]"), typeof Ce < "u" && de(se, fe + "." + he, Ce));
            }
          } else ((V = k(!0)), de(se, fe + "." + he, V));
          var pe = ge[ee];
          (pe && (V = [].concat(pe).concat(V)), (ge[ee] = V), c(",", !0), c(";", !0));
        }
        return ge;
      }
      var be = k(!0);
      return (de(se, fe, be), be);
    }
    function de(se, fe, ge) {
      if (b === se && /^features\./.test(fe)) {
        y[fe] = ge;
        return;
      }
      se.setOption && se.setOption(fe, ge);
    }
    function ce(se, fe, ge, V) {
      se.setParsedOption && se.setParsedOption(fe, ge, V);
    }
    function ye(se) {
      if (c("[", !0)) {
        do q(se, "option");
        while (c(",", !0));
        c("]");
      }
      return se;
    }
    function Z(se, fe) {
      if (!Kx.test((fe = s()))) throw C(fe, "service name");
      var ge = new pUo(fe);
      (G(ge, function (ee) {
        if (!L(ge, ee))
          if (ee === "rpc") oe(ge, ee);
          else throw C(ee);
      }),
        se.add(ge),
        se === b && A.push(ge));
    }
    function oe(se, fe) {
      var ge = m(),
        V = fe;
      if (!Kx.test((fe = s()))) throw C(fe, "name");
      var ee = fe,
        Ce,
        pe,
        be,
        Ne;
      if (
        (c("("),
        c("stream", !0) && (pe = !0),
        !Jx.test((fe = s())) ||
          ((Ce = fe), c(")"), c("returns"), c("("), c("stream", !0) && (Ne = !0), !Jx.test((fe = s()))))
      )
        throw C(fe);
      ((be = fe), c(")"));
      var Ge = new hUo(ee, V, Ce, be, pe, Ne);
      ((Ge.comment = ge),
        G(Ge, function (Ye) {
          if (Ye === "option") (q(Ge, Ye), c(";"));
          else throw C(Ye);
        }),
        se.add(Ge));
    }
    function ue(se, fe) {
      if (!Jx.test((fe = s()))) throw C(fe, "reference");
      var ge = fe;
      G(null, function (ee) {
        switch (ee) {
          case "required":
          case "repeated":
            K(se, ee, ge);
            break;
          case "optional":
            g === "proto3" ? K(se, "proto3_optional", ge) : K(se, "optional", ge);
            break;
          default:
            if (g === "proto2" || !Jx.test(ee)) throw C(ee);
            (a(ee), K(se, "optional", ge));
            break;
        }
      });
    }
    for (var he; (he = s()) !== null; )
      switch (he) {
        case "package":
          if (!d) throw C(he);
          O();
          break;
        case "import":
          if (!d) throw C(he);
          N();
          break;
        case "syntax":
          if (!d) throw C(he);
          F();
          break;
        case "edition":
          if (!d) throw C(he);
          B();
          break;
        case "option":
          (q(b, he), c(";", !0));
          break;
        default:
          if (L(b, he)) {
            d = !1;
            continue;
          }
          throw C(he);
      }
    return (v(), (PR.filename = null), { package: f, imports: p, weakImports: h, root: e });
  }
});