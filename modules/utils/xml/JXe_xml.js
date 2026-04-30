/**
 * @module JXe
 * @category utils/xml
 * @label xml
 * @position 1072 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (JXe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var JXe = T((_wn, Ewn) => {
  (function () {
    var t,
      e,
      r,
      n,
      o,
      s,
      a,
      u,
      c,
      m,
      d,
      f,
      p,
      h,
      g,
      b = function (y, E) {
        for (var v in E) A.call(E, v) && (y[v] = E[v]);
        function C() {
          this.constructor = y;
        }
        return ((C.prototype = E.prototype), (y.prototype = new C()), (y.__super__ = E.prototype), y);
      },
      A = {}.hasOwnProperty;
    ((a = Rye()),
      (u = Bye()),
      (t = Dye()),
      (e = Iye()),
      (m = Tye()),
      (f = Lye()),
      (h = Mye()),
      (d = Fye()),
      (c = KXe()),
      (r = kye()),
      (n = Nye()),
      (o = Oye()),
      (s = Pye()),
      (g = SWt()),
      (Ewn.exports = p =
        (function (y) {
          b(E, y);
          function E(v) {
            E.__super__.constructor.call(this, v);
          }
          return (
            (E.prototype.document = function (v) {
              var C, x, k, R, P;
              for (this.textispresent = !1, R = "", P = v.children, x = 0, k = P.length; x < k; x++)
                ((C = P[x]),
                  !(C instanceof c) &&
                    (R += function () {
                      switch (!1) {
                        case !(C instanceof a):
                          return this.declaration(C);
                        case !(C instanceof u):
                          return this.docType(C);
                        case !(C instanceof e):
                          return this.comment(C);
                        case !(C instanceof d):
                          return this.processingInstruction(C);
                        default:
                          return this.element(C, 0);
                      }
                    }.call(this)));
              return (
                this.pretty && R.slice(-this.newline.length) === this.newline && (R = R.slice(0, -this.newline.length)),
                R
              );
            }),
            (E.prototype.attribute = function (v) {
              return " " + v.name + '="' + v.value + '"';
            }),
            (E.prototype.cdata = function (v, C) {
              return this.space(C) + "<![CDATA[" + v.text + "]]>" + this.newline;
            }),
            (E.prototype.comment = function (v, C) {
              return this.space(C) + "<!-- " + v.text + " -->" + this.newline;
            }),
            (E.prototype.declaration = function (v, C) {
              var x;
              return (
                (x = this.space(C)),
                (x += '<?xml version="' + v.version + '"'),
                v.encoding != null && (x += ' encoding="' + v.encoding + '"'),
                v.standalone != null && (x += ' standalone="' + v.standalone + '"'),
                (x += this.spacebeforeslash + "?>"),
                (x += this.newline),
                x
              );
            }),
            (E.prototype.docType = function (v, C) {
              var x, k, R, P, D;
              if (
                (C || (C = 0),
                (P = this.space(C)),
                (P += "<!DOCTYPE " + v.root().name),
                v.pubID && v.sysID
                  ? (P += ' PUBLIC "' + v.pubID + '" "' + v.sysID + '"')
                  : v.sysID && (P += ' SYSTEM "' + v.sysID + '"'),
                v.children.length > 0)
              ) {
                for (P += " [", P += this.newline, D = v.children, k = 0, R = D.length; k < R; k++)
                  ((x = D[k]),
                    (P += function () {
                      switch (!1) {
                        case !(x instanceof r):
                          return this.dtdAttList(x, C + 1);
                        case !(x instanceof n):
                          return this.dtdElement(x, C + 1);
                        case !(x instanceof o):
                          return this.dtdEntity(x, C + 1);
                        case !(x instanceof s):
                          return this.dtdNotation(x, C + 1);
                        case !(x instanceof t):
                          return this.cdata(x, C + 1);
                        case !(x instanceof e):
                          return this.comment(x, C + 1);
                        case !(x instanceof d):
                          return this.processingInstruction(x, C + 1);
                        default:
                          throw new Error("Unknown DTD node type: " + x.constructor.name);
                      }
                    }.call(this)));
                P += "]";
              }
              return ((P += this.spacebeforeslash + ">"), (P += this.newline), P);
            }),
            (E.prototype.element = function (v, C) {
              var x, k, R, P, D, O, N, F, B, L, G, Q, K;
              (C || (C = 0),
                (K = !1),
                this.textispresent
                  ? ((this.newline = ""), (this.pretty = !1))
                  : ((this.newline = this.newlinedefault), (this.pretty = this.prettydefault)),
                (Q = this.space(C)),
                (F = ""),
                (F += Q + "<" + v.name),
                (B = v.attributes));
              for (N in B) A.call(B, N) && ((x = B[N]), (F += this.attribute(x)));
              if (
                v.children.length === 0 ||
                v.children.every(function (H) {
                  return H.value === "";
                })
              )
                this.allowEmpty
                  ? (F += "></" + v.name + ">" + this.newline)
                  : (F += this.spacebeforeslash + "/>" + this.newline);
              else if (this.pretty && v.children.length === 1 && v.children[0].value != null)
                ((F += ">"), (F += v.children[0].value), (F += "</" + v.name + ">" + this.newline));
              else {
                if (this.dontprettytextnodes) {
                  for (L = v.children, R = 0, D = L.length; R < D; R++)
                    if (((k = L[R]), k.value != null)) {
                      (this.textispresent++, (K = !0));
                      break;
                    }
                }
                for (
                  this.textispresent && ((this.newline = ""), (this.pretty = !1), (Q = this.space(C))),
                    F += ">" + this.newline,
                    G = v.children,
                    P = 0,
                    O = G.length;
                  P < O;
                  P++
                )
                  ((k = G[P]),
                    (F += function () {
                      switch (!1) {
                        case !(k instanceof t):
                          return this.cdata(k, C + 1);
                        case !(k instanceof e):
                          return this.comment(k, C + 1);
                        case !(k instanceof m):
                          return this.element(k, C + 1);
                        case !(k instanceof f):
                          return this.raw(k, C + 1);
                        case !(k instanceof h):
                          return this.text(k, C + 1);
                        case !(k instanceof d):
                          return this.processingInstruction(k, C + 1);
                        case !(k instanceof c):
                          return "";
                        default:
                          throw new Error("Unknown XML node type: " + k.constructor.name);
                      }
                    }.call(this)));
                (K && this.textispresent--,
                  this.textispresent || ((this.newline = this.newlinedefault), (this.pretty = this.prettydefault)),
                  (F += Q + "</" + v.name + ">" + this.newline));
              }
              return F;
            }),
            (E.prototype.processingInstruction = function (v, C) {
              var x;
              return (
                (x = this.space(C) + "<?" + v.target),
                v.value && (x += " " + v.value),
                (x += this.spacebeforeslash + "?>" + this.newline),
                x
              );
            }),
            (E.prototype.raw = function (v, C) {
              return this.space(C) + v.value + this.newline;
            }),
            (E.prototype.text = function (v, C) {
              return this.space(C) + v.value + this.newline;
            }),
            (E.prototype.dtdAttList = function (v, C) {
              var x;
              return (
                (x = this.space(C) + "<!ATTLIST " + v.elementName + " " + v.attributeName + " " + v.attributeType),
                v.defaultValueType !== "#DEFAULT" && (x += " " + v.defaultValueType),
                v.defaultValue && (x += ' "' + v.defaultValue + '"'),
                (x += this.spacebeforeslash + ">" + this.newline),
                x
              );
            }),
            (E.prototype.dtdElement = function (v, C) {
              return this.space(C) + "<!ELEMENT " + v.name + " " + v.value + this.spacebeforeslash + ">" + this.newline;
            }),
            (E.prototype.dtdEntity = function (v, C) {
              var x;
              return (
                (x = this.space(C) + "<!ENTITY"),
                v.pe && (x += " %"),
                (x += " " + v.name),
                v.value
                  ? (x += ' "' + v.value + '"')
                  : (v.pubID && v.sysID
                      ? (x += ' PUBLIC "' + v.pubID + '" "' + v.sysID + '"')
                      : v.sysID && (x += ' SYSTEM "' + v.sysID + '"'),
                    v.nData && (x += " NDATA " + v.nData)),
                (x += this.spacebeforeslash + ">" + this.newline),
                x
              );
            }),
            (E.prototype.dtdNotation = function (v, C) {
              var x;
              return (
                (x = this.space(C) + "<!NOTATION " + v.name),
                v.pubID && v.sysID
                  ? (x += ' PUBLIC "' + v.pubID + '" "' + v.sysID + '"')
                  : v.pubID
                    ? (x += ' PUBLIC "' + v.pubID + '"')
                    : v.sysID && (x += ' SYSTEM "' + v.sysID + '"'),
                (x += this.spacebeforeslash + ">" + this.newline),
                x
              );
            }),
            (E.prototype.openNode = function (v, C) {
              var x, k, R, P;
              if ((C || (C = 0), v instanceof m)) {
                ((R = this.space(C) + "<" + v.name), (P = v.attributes));
                for (k in P) A.call(P, k) && ((x = P[k]), (R += this.attribute(x)));
                return ((R += (v.children ? ">" : "/>") + this.newline), R);
              } else
                return (
                  (R = this.space(C) + "<!DOCTYPE " + v.rootNodeName),
                  v.pubID && v.sysID
                    ? (R += ' PUBLIC "' + v.pubID + '" "' + v.sysID + '"')
                    : v.sysID && (R += ' SYSTEM "' + v.sysID + '"'),
                  (R += (v.children ? " [" : ">") + this.newline),
                  R
                );
            }),
            (E.prototype.closeNode = function (v, C) {
              switch ((C || (C = 0), !1)) {
                case !(v instanceof m):
                  return this.space(C) + "</" + v.name + ">" + this.newline;
                case !(v instanceof u):
                  return this.space(C) + "]>" + this.newline;
              }
            }),
            E
          );
        })(g)));
  }).call(_wn);
});