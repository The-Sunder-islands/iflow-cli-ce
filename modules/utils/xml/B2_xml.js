/**
 * @module B2
 * @category utils/xml
 * @label xml
 * @position 1069 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (B2) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var B2 = T((pwn, hwn) => {
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
      b = {}.hasOwnProperty;
    ((g = zk()),
      (h = g.isObject),
      (p = g.isFunction),
      (f = g.isEmpty),
      (d = g.getValue),
      (s = null),
      (t = null),
      (e = null),
      (r = null),
      (n = null),
      (c = null),
      (m = null),
      (u = null),
      (o = null),
      (hwn.exports = a =
        (function () {
          function A(y) {
            ((this.parent = y),
              this.parent && ((this.options = this.parent.options), (this.stringify = this.parent.stringify)),
              (this.children = []),
              s ||
                ((s = Tye()),
                (t = Dye()),
                (e = Iye()),
                (r = Rye()),
                (n = Bye()),
                (c = Lye()),
                (m = Mye()),
                (u = Fye()),
                (o = KXe())));
          }
          return (
            (A.prototype.element = function (y, E, v) {
              var C, x, k, R, P, D, O, N, F, B, L;
              if (
                ((D = null),
                E === null && v == null && ((F = [{}, null]), (E = F[0]), (v = F[1])),
                E == null && (E = {}),
                (E = d(E)),
                h(E) || ((B = [E, v]), (v = B[0]), (E = B[1])),
                y != null && (y = d(y)),
                Array.isArray(y))
              )
                for (k = 0, O = y.length; k < O; k++) ((x = y[k]), (D = this.element(x)));
              else if (p(y)) D = this.element(y.apply());
              else if (h(y)) {
                for (P in y)
                  if (b.call(y, P))
                    if (
                      ((L = y[P]),
                      p(L) && (L = L.apply()),
                      h(L) && f(L) && (L = null),
                      !this.options.ignoreDecorators &&
                        this.stringify.convertAttKey &&
                        P.indexOf(this.stringify.convertAttKey) === 0)
                    )
                      D = this.attribute(P.substr(this.stringify.convertAttKey.length), L);
                    else if (!this.options.separateArrayItems && Array.isArray(L))
                      for (R = 0, N = L.length; R < N; R++) ((x = L[R]), (C = {}), (C[P] = x), (D = this.element(C)));
                    else h(L) ? ((D = this.element(P)), D.element(L)) : (D = this.element(P, L));
              } else
                this.options.skipNullNodes && v === null
                  ? (D = this.dummy())
                  : !this.options.ignoreDecorators &&
                      this.stringify.convertTextKey &&
                      y.indexOf(this.stringify.convertTextKey) === 0
                    ? (D = this.text(v))
                    : !this.options.ignoreDecorators &&
                        this.stringify.convertCDataKey &&
                        y.indexOf(this.stringify.convertCDataKey) === 0
                      ? (D = this.cdata(v))
                      : !this.options.ignoreDecorators &&
                          this.stringify.convertCommentKey &&
                          y.indexOf(this.stringify.convertCommentKey) === 0
                        ? (D = this.comment(v))
                        : !this.options.ignoreDecorators &&
                            this.stringify.convertRawKey &&
                            y.indexOf(this.stringify.convertRawKey) === 0
                          ? (D = this.raw(v))
                          : !this.options.ignoreDecorators &&
                              this.stringify.convertPIKey &&
                              y.indexOf(this.stringify.convertPIKey) === 0
                            ? (D = this.instruction(y.substr(this.stringify.convertPIKey.length), v))
                            : (D = this.node(y, E, v));
              if (D == null) throw new Error("Could not create any elements with: " + y + ". " + this.debugInfo());
              return D;
            }),
            (A.prototype.insertBefore = function (y, E, v) {
              var C, x, k;
              if (this.isRoot) throw new Error("Cannot insert elements at root level. " + this.debugInfo(y));
              return (
                (x = this.parent.children.indexOf(this)),
                (k = this.parent.children.splice(x)),
                (C = this.parent.element(y, E, v)),
                Array.prototype.push.apply(this.parent.children, k),
                C
              );
            }),
            (A.prototype.insertAfter = function (y, E, v) {
              var C, x, k;
              if (this.isRoot) throw new Error("Cannot insert elements at root level. " + this.debugInfo(y));
              return (
                (x = this.parent.children.indexOf(this)),
                (k = this.parent.children.splice(x + 1)),
                (C = this.parent.element(y, E, v)),
                Array.prototype.push.apply(this.parent.children, k),
                C
              );
            }),
            (A.prototype.remove = function () {
              var y, E;
              if (this.isRoot) throw new Error("Cannot remove the root element. " + this.debugInfo());
              return (
                (y = this.parent.children.indexOf(this)),
                [].splice.apply(this.parent.children, [y, y - y + 1].concat((E = []))),
                this.parent
              );
            }),
            (A.prototype.node = function (y, E, v) {
              var C, x;
              return (
                y != null && (y = d(y)),
                E || (E = {}),
                (E = d(E)),
                h(E) || ((x = [E, v]), (v = x[0]), (E = x[1])),
                (C = new s(this, y, E)),
                v != null && C.text(v),
                this.children.push(C),
                C
              );
            }),
            (A.prototype.text = function (y) {
              var E;
              return ((E = new m(this, y)), this.children.push(E), this);
            }),
            (A.prototype.cdata = function (y) {
              var E;
              return ((E = new t(this, y)), this.children.push(E), this);
            }),
            (A.prototype.comment = function (y) {
              var E;
              return ((E = new e(this, y)), this.children.push(E), this);
            }),
            (A.prototype.commentBefore = function (y) {
              var E, v, C;
              return (
                (v = this.parent.children.indexOf(this)),
                (C = this.parent.children.splice(v)),
                (E = this.parent.comment(y)),
                Array.prototype.push.apply(this.parent.children, C),
                this
              );
            }),
            (A.prototype.commentAfter = function (y) {
              var E, v, C;
              return (
                (v = this.parent.children.indexOf(this)),
                (C = this.parent.children.splice(v + 1)),
                (E = this.parent.comment(y)),
                Array.prototype.push.apply(this.parent.children, C),
                this
              );
            }),
            (A.prototype.raw = function (y) {
              var E;
              return ((E = new c(this, y)), this.children.push(E), this);
            }),
            (A.prototype.dummy = function () {
              var y;
              return ((y = new o(this)), this.children.push(y), y);
            }),
            (A.prototype.instruction = function (y, E) {
              var v, C, x, k, R;
              if ((y != null && (y = d(y)), E != null && (E = d(E)), Array.isArray(y)))
                for (k = 0, R = y.length; k < R; k++) ((v = y[k]), this.instruction(v));
              else if (h(y)) for (v in y) b.call(y, v) && ((C = y[v]), this.instruction(v, C));
              else (p(E) && (E = E.apply()), (x = new u(this, y, E)), this.children.push(x));
              return this;
            }),
            (A.prototype.instructionBefore = function (y, E) {
              var v, C, x;
              return (
                (C = this.parent.children.indexOf(this)),
                (x = this.parent.children.splice(C)),
                (v = this.parent.instruction(y, E)),
                Array.prototype.push.apply(this.parent.children, x),
                this
              );
            }),
            (A.prototype.instructionAfter = function (y, E) {
              var v, C, x;
              return (
                (C = this.parent.children.indexOf(this)),
                (x = this.parent.children.splice(C + 1)),
                (v = this.parent.instruction(y, E)),
                Array.prototype.push.apply(this.parent.children, x),
                this
              );
            }),
            (A.prototype.declaration = function (y, E, v) {
              var C, x;
              return (
                (C = this.document()),
                (x = new r(C, y, E, v)),
                C.children[0] instanceof r ? (C.children[0] = x) : C.children.unshift(x),
                C.root() || C
              );
            }),
            (A.prototype.doctype = function (y, E) {
              var v, C, x, k, R, P, D, O, N, F;
              for (C = this.document(), x = new n(C, y, E), N = C.children, k = R = 0, D = N.length; R < D; k = ++R)
                if (((v = N[k]), v instanceof n)) return ((C.children[k] = x), x);
              for (F = C.children, k = P = 0, O = F.length; P < O; k = ++P)
                if (((v = F[k]), v.isRoot)) return (C.children.splice(k, 0, x), x);
              return (C.children.push(x), x);
            }),
            (A.prototype.up = function () {
              if (this.isRoot)
                throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
              return this.parent;
            }),
            (A.prototype.root = function () {
              var y;
              for (y = this; y; ) {
                if (y.isDocument) return y.rootObject;
                if (y.isRoot) return y;
                y = y.parent;
              }
            }),
            (A.prototype.document = function () {
              var y;
              for (y = this; y; ) {
                if (y.isDocument) return y;
                y = y.parent;
              }
            }),
            (A.prototype.end = function (y) {
              return this.document().end(y);
            }),
            (A.prototype.prev = function () {
              var y;
              for (y = this.parent.children.indexOf(this); y > 0 && this.parent.children[y - 1].isDummy; ) y = y - 1;
              if (y < 1) throw new Error("Already at the first node. " + this.debugInfo());
              return this.parent.children[y - 1];
            }),
            (A.prototype.next = function () {
              var y;
              for (
                y = this.parent.children.indexOf(this);
                y < this.parent.children.length - 1 && this.parent.children[y + 1].isDummy;
              )
                y = y + 1;
              if (y === -1 || y === this.parent.children.length - 1)
                throw new Error("Already at the last node. " + this.debugInfo());
              return this.parent.children[y + 1];
            }),
            (A.prototype.importDocument = function (y) {
              var E;
              return ((E = y.root().clone()), (E.parent = this), (E.isRoot = !1), this.children.push(E), this);
            }),
            (A.prototype.debugInfo = function (y) {
              var E, v;
              return (
                (y = y || this.name),
                y == null && !((E = this.parent) != null && E.name)
                  ? ""
                  : y == null
                    ? "parent: <" + this.parent.name + ">"
                    : (v = this.parent) != null && v.name
                      ? "node: <" + y + ">, parent: <" + this.parent.name + ">"
                      : "node: <" + y + ">"
              );
            }),
            (A.prototype.ele = function (y, E, v) {
              return this.element(y, E, v);
            }),
            (A.prototype.nod = function (y, E, v) {
              return this.node(y, E, v);
            }),
            (A.prototype.txt = function (y) {
              return this.text(y);
            }),
            (A.prototype.dat = function (y) {
              return this.cdata(y);
            }),
            (A.prototype.com = function (y) {
              return this.comment(y);
            }),
            (A.prototype.ins = function (y, E) {
              return this.instruction(y, E);
            }),
            (A.prototype.doc = function () {
              return this.document();
            }),
            (A.prototype.dec = function (y, E, v) {
              return this.declaration(y, E, v);
            }),
            (A.prototype.dtd = function (y, E) {
              return this.doctype(y, E);
            }),
            (A.prototype.e = function (y, E, v) {
              return this.element(y, E, v);
            }),
            (A.prototype.n = function (y, E, v) {
              return this.node(y, E, v);
            }),
            (A.prototype.t = function (y) {
              return this.text(y);
            }),
            (A.prototype.d = function (y) {
              return this.cdata(y);
            }),
            (A.prototype.c = function (y) {
              return this.comment(y);
            }),
            (A.prototype.r = function (y) {
              return this.raw(y);
            }),
            (A.prototype.i = function (y, E) {
              return this.instruction(y, E);
            }),
            (A.prototype.u = function () {
              return this.up();
            }),
            (A.prototype.importXMLBuilder = function (y) {
              return this.importDocument(y);
            }),
            A
          );
        })()));
  }).call(pwn);
});