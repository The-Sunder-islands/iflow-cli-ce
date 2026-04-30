/**
 * @module Twn
 * @category utils/xml
 * @label xml
 * @position 1074 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Twn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Twn = T((wwn, xwn) => {
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
      b,
      A,
      y,
      E,
      v,
      C,
      x = {}.hasOwnProperty;
    ((C = zk()),
      (E = C.isObject),
      (y = C.isFunction),
      (v = C.isPlainObject),
      (A = C.getValue),
      (d = Tye()),
      (e = Dye()),
      (r = Iye()),
      (p = Lye()),
      (b = Mye()),
      (f = Fye()),
      (u = Rye()),
      (c = Bye()),
      (n = kye()),
      (s = Oye()),
      (o = Nye()),
      (a = Pye()),
      (t = vWt()),
      (g = CWt()),
      (h = JXe()),
      (xwn.exports = m =
        (function () {
          function k(R, P, D) {
            var O;
            ((this.name = "?xml"),
              R || (R = {}),
              R.writer ? v(R.writer) && ((O = R.writer), (R.writer = new h(O))) : (R.writer = new h(R)),
              (this.options = R),
              (this.writer = R.writer),
              (this.stringify = new g(R)),
              (this.onDataCallback = P || function () {}),
              (this.onEndCallback = D || function () {}),
              (this.currentNode = null),
              (this.currentLevel = -1),
              (this.openTags = {}),
              (this.documentStarted = !1),
              (this.documentCompleted = !1),
              (this.root = null));
          }
          return (
            (k.prototype.node = function (R, P, D) {
              var O, N;
              if (R == null) throw new Error("Missing node name.");
              if (this.root && this.currentLevel === -1)
                throw new Error("Document can only have one root node. " + this.debugInfo(R));
              return (
                this.openCurrent(),
                (R = A(R)),
                P === null && D == null && ((O = [{}, null]), (P = O[0]), (D = O[1])),
                P == null && (P = {}),
                (P = A(P)),
                E(P) || ((N = [P, D]), (D = N[0]), (P = N[1])),
                (this.currentNode = new d(this, R, P)),
                (this.currentNode.children = !1),
                this.currentLevel++,
                (this.openTags[this.currentLevel] = this.currentNode),
                D != null && this.text(D),
                this
              );
            }),
            (k.prototype.element = function (R, P, D) {
              return this.currentNode && this.currentNode instanceof c
                ? this.dtdElement.apply(this, arguments)
                : this.node(R, P, D);
            }),
            (k.prototype.attribute = function (R, P) {
              var D, O;
              if (!this.currentNode || this.currentNode.children)
                throw new Error(
                  "att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(R),
                );
              if ((R != null && (R = A(R)), E(R))) for (D in R) x.call(R, D) && ((O = R[D]), this.attribute(D, O));
              else
                (y(P) && (P = P.apply()),
                  (!this.options.skipNullAttributes || P != null) &&
                    (this.currentNode.attributes[R] = new t(this, R, P)));
              return this;
            }),
            (k.prototype.text = function (R) {
              var P;
              return (
                this.openCurrent(),
                (P = new b(this, R)),
                this.onData(this.writer.text(P, this.currentLevel + 1), this.currentLevel + 1),
                this
              );
            }),
            (k.prototype.cdata = function (R) {
              var P;
              return (
                this.openCurrent(),
                (P = new e(this, R)),
                this.onData(this.writer.cdata(P, this.currentLevel + 1), this.currentLevel + 1),
                this
              );
            }),
            (k.prototype.comment = function (R) {
              var P;
              return (
                this.openCurrent(),
                (P = new r(this, R)),
                this.onData(this.writer.comment(P, this.currentLevel + 1), this.currentLevel + 1),
                this
              );
            }),
            (k.prototype.raw = function (R) {
              var P;
              return (
                this.openCurrent(),
                (P = new p(this, R)),
                this.onData(this.writer.raw(P, this.currentLevel + 1), this.currentLevel + 1),
                this
              );
            }),
            (k.prototype.instruction = function (R, P) {
              var D, O, N, F, B;
              if ((this.openCurrent(), R != null && (R = A(R)), P != null && (P = A(P)), Array.isArray(R)))
                for (D = 0, F = R.length; D < F; D++) ((O = R[D]), this.instruction(O));
              else if (E(R)) for (O in R) x.call(R, O) && ((N = R[O]), this.instruction(O, N));
              else
                (y(P) && (P = P.apply()),
                  (B = new f(this, R, P)),
                  this.onData(this.writer.processingInstruction(B, this.currentLevel + 1), this.currentLevel + 1));
              return this;
            }),
            (k.prototype.declaration = function (R, P, D) {
              var O;
              if ((this.openCurrent(), this.documentStarted)) throw new Error("declaration() must be the first node.");
              return (
                (O = new u(this, R, P, D)),
                this.onData(this.writer.declaration(O, this.currentLevel + 1), this.currentLevel + 1),
                this
              );
            }),
            (k.prototype.doctype = function (R, P, D) {
              if ((this.openCurrent(), R == null)) throw new Error("Missing root node name.");
              if (this.root) throw new Error("dtd() must come before the root node.");
              return (
                (this.currentNode = new c(this, P, D)),
                (this.currentNode.rootNodeName = R),
                (this.currentNode.children = !1),
                this.currentLevel++,
                (this.openTags[this.currentLevel] = this.currentNode),
                this
              );
            }),
            (k.prototype.dtdElement = function (R, P) {
              var D;
              return (
                this.openCurrent(),
                (D = new o(this, R, P)),
                this.onData(this.writer.dtdElement(D, this.currentLevel + 1), this.currentLevel + 1),
                this
              );
            }),
            (k.prototype.attList = function (R, P, D, O, N) {
              var F;
              return (
                this.openCurrent(),
                (F = new n(this, R, P, D, O, N)),
                this.onData(this.writer.dtdAttList(F, this.currentLevel + 1), this.currentLevel + 1),
                this
              );
            }),
            (k.prototype.entity = function (R, P) {
              var D;
              return (
                this.openCurrent(),
                (D = new s(this, !1, R, P)),
                this.onData(this.writer.dtdEntity(D, this.currentLevel + 1), this.currentLevel + 1),
                this
              );
            }),
            (k.prototype.pEntity = function (R, P) {
              var D;
              return (
                this.openCurrent(),
                (D = new s(this, !0, R, P)),
                this.onData(this.writer.dtdEntity(D, this.currentLevel + 1), this.currentLevel + 1),
                this
              );
            }),
            (k.prototype.notation = function (R, P) {
              var D;
              return (
                this.openCurrent(),
                (D = new a(this, R, P)),
                this.onData(this.writer.dtdNotation(D, this.currentLevel + 1), this.currentLevel + 1),
                this
              );
            }),
            (k.prototype.up = function () {
              if (this.currentLevel < 0) throw new Error("The document node has no parent.");
              return (
                this.currentNode
                  ? (this.currentNode.children ? this.closeNode(this.currentNode) : this.openNode(this.currentNode),
                    (this.currentNode = null))
                  : this.closeNode(this.openTags[this.currentLevel]),
                delete this.openTags[this.currentLevel],
                this.currentLevel--,
                this
              );
            }),
            (k.prototype.end = function () {
              for (; this.currentLevel >= 0; ) this.up();
              return this.onEnd();
            }),
            (k.prototype.openCurrent = function () {
              if (this.currentNode) return ((this.currentNode.children = !0), this.openNode(this.currentNode));
            }),
            (k.prototype.openNode = function (R) {
              if (!R.isOpen)
                return (
                  !this.root && this.currentLevel === 0 && R instanceof d && (this.root = R),
                  this.onData(this.writer.openNode(R, this.currentLevel), this.currentLevel),
                  (R.isOpen = !0)
                );
            }),
            (k.prototype.closeNode = function (R) {
              if (!R.isClosed)
                return (this.onData(this.writer.closeNode(R, this.currentLevel), this.currentLevel), (R.isClosed = !0));
            }),
            (k.prototype.onData = function (R, P) {
              return ((this.documentStarted = !0), this.onDataCallback(R, P + 1));
            }),
            (k.prototype.onEnd = function () {
              return ((this.documentCompleted = !0), this.onEndCallback());
            }),
            (k.prototype.debugInfo = function (R) {
              return R == null ? "" : "node: <" + R + ">";
            }),
            (k.prototype.ele = function () {
              return this.element.apply(this, arguments);
            }),
            (k.prototype.nod = function (R, P, D) {
              return this.node(R, P, D);
            }),
            (k.prototype.txt = function (R) {
              return this.text(R);
            }),
            (k.prototype.dat = function (R) {
              return this.cdata(R);
            }),
            (k.prototype.com = function (R) {
              return this.comment(R);
            }),
            (k.prototype.ins = function (R, P) {
              return this.instruction(R, P);
            }),
            (k.prototype.dec = function (R, P, D) {
              return this.declaration(R, P, D);
            }),
            (k.prototype.dtd = function (R, P, D) {
              return this.doctype(R, P, D);
            }),
            (k.prototype.e = function (R, P, D) {
              return this.element(R, P, D);
            }),
            (k.prototype.n = function (R, P, D) {
              return this.node(R, P, D);
            }),
            (k.prototype.t = function (R) {
              return this.text(R);
            }),
            (k.prototype.d = function (R) {
              return this.cdata(R);
            }),
            (k.prototype.c = function (R) {
              return this.comment(R);
            }),
            (k.prototype.r = function (R) {
              return this.raw(R);
            }),
            (k.prototype.i = function (R, P) {
              return this.instruction(R, P);
            }),
            (k.prototype.att = function () {
              return this.currentNode && this.currentNode instanceof c
                ? this.attList.apply(this, arguments)
                : this.attribute.apply(this, arguments);
            }),
            (k.prototype.a = function () {
              return this.currentNode && this.currentNode instanceof c
                ? this.attList.apply(this, arguments)
                : this.attribute.apply(this, arguments);
            }),
            (k.prototype.ent = function (R, P) {
              return this.entity(R, P);
            }),
            (k.prototype.pent = function (R, P) {
              return this.pEntity(R, P);
            }),
            (k.prototype.not = function (R, P) {
              return this.notation(R, P);
            }),
            k
          );
        })()));
  }).call(wwn);
});