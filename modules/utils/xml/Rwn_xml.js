/**
 * @module Rwn
 * @category utils/xml
 * @label xml
 * @position 1075 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Rwn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Rwn = T((Dwn, Iwn) => {
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
      (Iwn.exports = p =
        (function (y) {
          b(E, y);
          function E(v, C) {
            (E.__super__.constructor.call(this, C), (this.stream = v));
          }
          return (
            (E.prototype.document = function (v) {
              var C, x, k, R, P, D, O, N;
              for (D = v.children, x = 0, R = D.length; x < R; x++) ((C = D[x]), (C.isLastRootNode = !1));
              for (
                v.children[v.children.length - 1].isLastRootNode = !0, O = v.children, N = [], k = 0, P = O.length;
                k < P;
                k++
              )
                if (((C = O[k]), !(C instanceof c)))
                  switch (!1) {
                    case !(C instanceof a):
                      N.push(this.declaration(C));
                      break;
                    case !(C instanceof u):
                      N.push(this.docType(C));
                      break;
                    case !(C instanceof e):
                      N.push(this.comment(C));
                      break;
                    case !(C instanceof d):
                      N.push(this.processingInstruction(C));
                      break;
                    default:
                      N.push(this.element(C));
                  }
              return N;
            }),
            (E.prototype.attribute = function (v) {
              return this.stream.write(" " + v.name + '="' + v.value + '"');
            }),
            (E.prototype.cdata = function (v, C) {
              return this.stream.write(this.space(C) + "<![CDATA[" + v.text + "]]>" + this.endline(v));
            }),
            (E.prototype.comment = function (v, C) {
              return this.stream.write(this.space(C) + "<!-- " + v.text + " -->" + this.endline(v));
            }),
            (E.prototype.declaration = function (v, C) {
              return (
                this.stream.write(this.space(C)),
                this.stream.write('<?xml version="' + v.version + '"'),
                v.encoding != null && this.stream.write(' encoding="' + v.encoding + '"'),
                v.standalone != null && this.stream.write(' standalone="' + v.standalone + '"'),
                this.stream.write(this.spacebeforeslash + "?>"),
                this.stream.write(this.endline(v))
              );
            }),
            (E.prototype.docType = function (v, C) {
              var x, k, R, P;
              if (
                (C || (C = 0),
                this.stream.write(this.space(C)),
                this.stream.write("<!DOCTYPE " + v.root().name),
                v.pubID && v.sysID
                  ? this.stream.write(' PUBLIC "' + v.pubID + '" "' + v.sysID + '"')
                  : v.sysID && this.stream.write(' SYSTEM "' + v.sysID + '"'),
                v.children.length > 0)
              ) {
                for (
                  this.stream.write(" ["), this.stream.write(this.endline(v)), P = v.children, k = 0, R = P.length;
                  k < R;
                  k++
                )
                  switch (((x = P[k]), !1)) {
                    case !(x instanceof r):
                      this.dtdAttList(x, C + 1);
                      break;
                    case !(x instanceof n):
                      this.dtdElement(x, C + 1);
                      break;
                    case !(x instanceof o):
                      this.dtdEntity(x, C + 1);
                      break;
                    case !(x instanceof s):
                      this.dtdNotation(x, C + 1);
                      break;
                    case !(x instanceof t):
                      this.cdata(x, C + 1);
                      break;
                    case !(x instanceof e):
                      this.comment(x, C + 1);
                      break;
                    case !(x instanceof d):
                      this.processingInstruction(x, C + 1);
                      break;
                    default:
                      throw new Error("Unknown DTD node type: " + x.constructor.name);
                  }
                this.stream.write("]");
              }
              return (this.stream.write(this.spacebeforeslash + ">"), this.stream.write(this.endline(v)));
            }),
            (E.prototype.element = function (v, C) {
              var x, k, R, P, D, O, N, F;
              (C || (C = 0), (F = this.space(C)), this.stream.write(F + "<" + v.name), (O = v.attributes));
              for (D in O) A.call(O, D) && ((x = O[D]), this.attribute(x));
              if (
                v.children.length === 0 ||
                v.children.every(function (B) {
                  return B.value === "";
                })
              )
                this.allowEmpty
                  ? this.stream.write("></" + v.name + ">")
                  : this.stream.write(this.spacebeforeslash + "/>");
              else if (this.pretty && v.children.length === 1 && v.children[0].value != null)
                (this.stream.write(">"),
                  this.stream.write(v.children[0].value),
                  this.stream.write("</" + v.name + ">"));
              else {
                for (this.stream.write(">" + this.newline), N = v.children, R = 0, P = N.length; R < P; R++)
                  switch (((k = N[R]), !1)) {
                    case !(k instanceof t):
                      this.cdata(k, C + 1);
                      break;
                    case !(k instanceof e):
                      this.comment(k, C + 1);
                      break;
                    case !(k instanceof m):
                      this.element(k, C + 1);
                      break;
                    case !(k instanceof f):
                      this.raw(k, C + 1);
                      break;
                    case !(k instanceof h):
                      this.text(k, C + 1);
                      break;
                    case !(k instanceof d):
                      this.processingInstruction(k, C + 1);
                      break;
                    case !(k instanceof c):
                      break;
                    default:
                      throw new Error("Unknown XML node type: " + k.constructor.name);
                  }
                this.stream.write(F + "</" + v.name + ">");
              }
              return this.stream.write(this.endline(v));
            }),
            (E.prototype.processingInstruction = function (v, C) {
              return (
                this.stream.write(this.space(C) + "<?" + v.target),
                v.value && this.stream.write(" " + v.value),
                this.stream.write(this.spacebeforeslash + "?>" + this.endline(v))
              );
            }),
            (E.prototype.raw = function (v, C) {
              return this.stream.write(this.space(C) + v.value + this.endline(v));
            }),
            (E.prototype.text = function (v, C) {
              return this.stream.write(this.space(C) + v.value + this.endline(v));
            }),
            (E.prototype.dtdAttList = function (v, C) {
              return (
                this.stream.write(
                  this.space(C) + "<!ATTLIST " + v.elementName + " " + v.attributeName + " " + v.attributeType,
                ),
                v.defaultValueType !== "#DEFAULT" && this.stream.write(" " + v.defaultValueType),
                v.defaultValue && this.stream.write(' "' + v.defaultValue + '"'),
                this.stream.write(this.spacebeforeslash + ">" + this.endline(v))
              );
            }),
            (E.prototype.dtdElement = function (v, C) {
              return (
                this.stream.write(this.space(C) + "<!ELEMENT " + v.name + " " + v.value),
                this.stream.write(this.spacebeforeslash + ">" + this.endline(v))
              );
            }),
            (E.prototype.dtdEntity = function (v, C) {
              return (
                this.stream.write(this.space(C) + "<!ENTITY"),
                v.pe && this.stream.write(" %"),
                this.stream.write(" " + v.name),
                v.value
                  ? this.stream.write(' "' + v.value + '"')
                  : (v.pubID && v.sysID
                      ? this.stream.write(' PUBLIC "' + v.pubID + '" "' + v.sysID + '"')
                      : v.sysID && this.stream.write(' SYSTEM "' + v.sysID + '"'),
                    v.nData && this.stream.write(" NDATA " + v.nData)),
                this.stream.write(this.spacebeforeslash + ">" + this.endline(v))
              );
            }),
            (E.prototype.dtdNotation = function (v, C) {
              return (
                this.stream.write(this.space(C) + "<!NOTATION " + v.name),
                v.pubID && v.sysID
                  ? this.stream.write(' PUBLIC "' + v.pubID + '" "' + v.sysID + '"')
                  : v.pubID
                    ? this.stream.write(' PUBLIC "' + v.pubID + '"')
                    : v.sysID && this.stream.write(' SYSTEM "' + v.sysID + '"'),
                this.stream.write(this.spacebeforeslash + ">" + this.endline(v))
              );
            }),
            (E.prototype.endline = function (v) {
              return v.isLastRootNode ? "" : this.newline;
            }),
            E
          );
        })(g)));
  }).call(Dwn);
});