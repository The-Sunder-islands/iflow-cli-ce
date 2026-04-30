/**
 * @module yXr
 * @category utils/oop
 * @label oop
 * @position 443 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yXr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var yXr = T((Sxt) => {
  "use strict";
  Object.defineProperty(Sxt, "t", { value: !0 });
  var kFe = class {
      constructor(e, r, n = 1) {
        ((this.i = void 0), (this.h = void 0), (this.o = void 0), (this.u = e), (this.l = r), (this.p = n));
      }
      I() {
        let e = this,
          r = e.o.o === e;
        if (r && e.p === 1) e = e.h;
        else if (e.i) for (e = e.i; e.h; ) e = e.h;
        else {
          if (r) return e.o;
          let n = e.o;
          for (; n.i === e; ) ((e = n), (n = e.o));
          e = n;
        }
        return e;
      }
      B() {
        let e = this;
        if (e.h) {
          for (e = e.h; e.i; ) e = e.i;
          return e;
        } else {
          let r = e.o;
          for (; r.h === e; ) ((e = r), (r = e.o));
          return e.h !== r ? r : e;
        }
      }
      _() {
        let e = this.o,
          r = this.h,
          n = r.i;
        return (
          e.o === this ? (e.o = r) : e.i === this ? (e.i = r) : (e.h = r),
          (r.o = e),
          (r.i = this),
          (this.o = r),
          (this.h = n),
          n && (n.o = this),
          r
        );
      }
      g() {
        let e = this.o,
          r = this.i,
          n = r.h;
        return (
          e.o === this ? (e.o = r) : e.i === this ? (e.i = r) : (e.h = r),
          (r.o = e),
          (r.h = this),
          (this.o = r),
          (this.i = n),
          n && (n.o = this),
          r
        );
      }
    },
    bxt = class extends kFe {
      constructor() {
        (super(...arguments), (this.M = 1));
      }
      _() {
        let e = super._();
        return (this.O(), e.O(), e);
      }
      g() {
        let e = super.g();
        return (this.O(), e.O(), e);
      }
      O() {
        ((this.M = 1), this.i && (this.M += this.i.M), this.h && (this.M += this.h.M));
      }
    },
    Axt = class {
      constructor(e = 0) {
        this.iteratorType = e;
      }
      equals(e) {
        return this.T === e.T;
      }
    },
    yxt = class {
      constructor() {
        this.m = 0;
      }
      get length() {
        return this.m;
      }
      size() {
        return this.m;
      }
      empty() {
        return this.m === 0;
      }
    },
    _xt = class extends yxt {};
  function dq() {
    throw new RangeError("Iterator access denied!");
  }
  var Ext = class extends _xt {
      constructor(
        e = function (n, o) {
          return n < o ? -1 : n > o ? 1 : 0;
        },
        r = !1,
      ) {
        (super(),
          (this.v = void 0),
          (this.A = e),
          (this.enableIndex = r),
          (this.N = r ? bxt : kFe),
          (this.C = new this.N()));
      }
      R(e, r) {
        let n = this.C;
        for (; e; ) {
          let o = this.A(e.u, r);
          if (o < 0) e = e.h;
          else if (o > 0) ((n = e), (e = e.i));
          else return e;
        }
        return n;
      }
      K(e, r) {
        let n = this.C;
        for (; e; ) this.A(e.u, r) <= 0 ? (e = e.h) : ((n = e), (e = e.i));
        return n;
      }
      L(e, r) {
        let n = this.C;
        for (; e; ) {
          let o = this.A(e.u, r);
          if (o < 0) ((n = e), (e = e.h));
          else if (o > 0) e = e.i;
          else return e;
        }
        return n;
      }
      k(e, r) {
        let n = this.C;
        for (; e; ) this.A(e.u, r) < 0 ? ((n = e), (e = e.h)) : (e = e.i);
        return n;
      }
      P(e) {
        for (;;) {
          let r = e.o;
          if (r === this.C) return;
          if (e.p === 1) {
            e.p = 0;
            return;
          }
          if (e === r.i) {
            let n = r.h;
            if (n.p === 1) ((n.p = 0), (r.p = 1), r === this.v ? (this.v = r._()) : r._());
            else if (n.h && n.h.p === 1) {
              ((n.p = r.p), (r.p = 0), (n.h.p = 0), r === this.v ? (this.v = r._()) : r._());
              return;
            } else n.i && n.i.p === 1 ? ((n.p = 1), (n.i.p = 0), n.g()) : ((n.p = 1), (e = r));
          } else {
            let n = r.i;
            if (n.p === 1) ((n.p = 0), (r.p = 1), r === this.v ? (this.v = r.g()) : r.g());
            else if (n.i && n.i.p === 1) {
              ((n.p = r.p), (r.p = 0), (n.i.p = 0), r === this.v ? (this.v = r.g()) : r.g());
              return;
            } else n.h && n.h.p === 1 ? ((n.p = 1), (n.h.p = 0), n._()) : ((n.p = 1), (e = r));
          }
        }
      }
      S(e) {
        if (this.m === 1) {
          this.clear();
          return;
        }
        let r = e;
        for (; r.i || r.h; ) {
          if (r.h) for (r = r.h; r.i; ) r = r.i;
          else r = r.i;
          let o = e.u;
          ((e.u = r.u), (r.u = o));
          let s = e.l;
          ((e.l = r.l), (r.l = s), (e = r));
        }
        (this.C.i === r ? (this.C.i = r.o) : this.C.h === r && (this.C.h = r.o), this.P(r));
        let n = r.o;
        if ((r === n.i ? (n.i = void 0) : (n.h = void 0), (this.m -= 1), (this.v.p = 0), this.enableIndex))
          for (; n !== this.C; ) ((n.M -= 1), (n = n.o));
      }
      U(e) {
        let r = typeof e == "number" ? e : void 0,
          n = typeof e == "function" ? e : void 0,
          o = typeof e > "u" ? [] : void 0,
          s = 0,
          a = this.v,
          u = [];
        for (; u.length || a; )
          if (a) (u.push(a), (a = a.i));
          else {
            if (((a = u.pop()), s === r)) return a;
            (o && o.push(a), n && n(a, s, this), (s += 1), (a = a.h));
          }
        return o;
      }
      j(e) {
        for (;;) {
          let r = e.o;
          if (r.p === 0) return;
          let n = r.o;
          if (r === n.i) {
            let o = n.h;
            if (o && o.p === 1) {
              if (((o.p = r.p = 0), n === this.v)) return;
              ((n.p = 1), (e = n));
              continue;
            } else if (e === r.h) {
              if (
                ((e.p = 0),
                e.i && (e.i.o = r),
                e.h && (e.h.o = n),
                (r.h = e.i),
                (n.i = e.h),
                (e.i = r),
                (e.h = n),
                n === this.v)
              )
                ((this.v = e), (this.C.o = e));
              else {
                let s = n.o;
                s.i === n ? (s.i = e) : (s.h = e);
              }
              ((e.o = n.o), (r.o = e), (n.o = e), (n.p = 1));
            } else {
              ((r.p = 0), n === this.v ? (this.v = n.g()) : n.g(), (n.p = 1));
              return;
            }
          } else {
            let o = n.i;
            if (o && o.p === 1) {
              if (((o.p = r.p = 0), n === this.v)) return;
              ((n.p = 1), (e = n));
              continue;
            } else if (e === r.i) {
              if (
                ((e.p = 0),
                e.i && (e.i.o = n),
                e.h && (e.h.o = r),
                (n.h = e.i),
                (r.i = e.h),
                (e.i = n),
                (e.h = r),
                n === this.v)
              )
                ((this.v = e), (this.C.o = e));
              else {
                let s = n.o;
                s.i === n ? (s.i = e) : (s.h = e);
              }
              ((e.o = n.o), (r.o = e), (n.o = e), (n.p = 1));
            } else {
              ((r.p = 0), n === this.v ? (this.v = n._()) : n._(), (n.p = 1));
              return;
            }
          }
          this.enableIndex && (r.O(), n.O(), e.O());
          return;
        }
      }
      q(e, r, n) {
        if (this.v === void 0)
          return (
            (this.m += 1),
            (this.v = new this.N(e, r, 0)),
            (this.v.o = this.C),
            (this.C.o = this.C.i = this.C.h = this.v),
            this.m
          );
        let o,
          s = this.C.i,
          a = this.A(s.u, e);
        if (a === 0) return ((s.l = r), this.m);
        if (a > 0) ((s.i = new this.N(e, r)), (s.i.o = s), (o = s.i), (this.C.i = o));
        else {
          let u = this.C.h,
            c = this.A(u.u, e);
          if (c === 0) return ((u.l = r), this.m);
          if (c < 0) ((u.h = new this.N(e, r)), (u.h.o = u), (o = u.h), (this.C.h = o));
          else {
            if (n !== void 0) {
              let m = n.T;
              if (m !== this.C) {
                let d = this.A(m.u, e);
                if (d === 0) return ((m.l = r), this.m);
                if (d > 0) {
                  let f = m.I(),
                    p = this.A(f.u, e);
                  if (p === 0) return ((f.l = r), this.m);
                  p < 0 && ((o = new this.N(e, r)), f.h === void 0 ? ((f.h = o), (o.o = f)) : ((m.i = o), (o.o = m)));
                }
              }
            }
            if (o === void 0)
              for (o = this.v; ; ) {
                let m = this.A(o.u, e);
                if (m > 0) {
                  if (o.i === void 0) {
                    ((o.i = new this.N(e, r)), (o.i.o = o), (o = o.i));
                    break;
                  }
                  o = o.i;
                } else if (m < 0) {
                  if (o.h === void 0) {
                    ((o.h = new this.N(e, r)), (o.h.o = o), (o = o.h));
                    break;
                  }
                  o = o.h;
                } else return ((o.l = r), this.m);
              }
          }
        }
        if (this.enableIndex) {
          let u = o.o;
          for (; u !== this.C; ) ((u.M += 1), (u = u.o));
        }
        return (this.j(o), (this.m += 1), this.m);
      }
      H(e, r) {
        for (; e; ) {
          let n = this.A(e.u, r);
          if (n < 0) e = e.h;
          else if (n > 0) e = e.i;
          else return e;
        }
        return e || this.C;
      }
      clear() {
        ((this.m = 0), (this.v = void 0), (this.C.o = void 0), (this.C.i = this.C.h = void 0));
      }
      updateKeyByIterator(e, r) {
        let n = e.T;
        if ((n === this.C && dq(), this.m === 1)) return ((n.u = r), !0);
        let o = n.B().u;
        if (n === this.C.i) return this.A(o, r) > 0 ? ((n.u = r), !0) : !1;
        let s = n.I().u;
        return n === this.C.h
          ? this.A(s, r) < 0
            ? ((n.u = r), !0)
            : !1
          : this.A(s, r) >= 0 || this.A(o, r) <= 0
            ? !1
            : ((n.u = r), !0);
      }
      eraseElementByPos(e) {
        if (e < 0 || e > this.m - 1) throw new RangeError();
        let r = this.U(e);
        return (this.S(r), this.m);
      }
      eraseElementByKey(e) {
        if (this.m === 0) return !1;
        let r = this.H(this.v, e);
        return r === this.C ? !1 : (this.S(r), !0);
      }
      eraseElementByIterator(e) {
        let r = e.T;
        r === this.C && dq();
        let n = r.h === void 0;
        return (e.iteratorType === 0 ? n && e.next() : (!n || r.i === void 0) && e.next(), this.S(r), e);
      }
      getHeight() {
        if (this.m === 0) return 0;
        function e(r) {
          return r ? Math.max(e(r.i), e(r.h)) + 1 : 0;
        }
        return e(this.v);
      }
    },
    vxt = class extends Axt {
      constructor(e, r, n) {
        (super(n),
          (this.T = e),
          (this.C = r),
          this.iteratorType === 0
            ? ((this.pre = function () {
                return (this.T === this.C.i && dq(), (this.T = this.T.I()), this);
              }),
              (this.next = function () {
                return (this.T === this.C && dq(), (this.T = this.T.B()), this);
              }))
            : ((this.pre = function () {
                return (this.T === this.C.h && dq(), (this.T = this.T.B()), this);
              }),
              (this.next = function () {
                return (this.T === this.C && dq(), (this.T = this.T.I()), this);
              })));
      }
      get index() {
        let e = this.T,
          r = this.C.o;
        if (e === this.C) return r ? r.M - 1 : 0;
        let n = 0;
        for (e.i && (n += e.i.M); e !== r; ) {
          let o = e.o;
          (e === o.h && ((n += 1), o.i && (n += o.i.M)), (e = o));
        }
        return n;
      }
      isAccessible() {
        return this.T !== this.C;
      }
    },
    zC = class t extends vxt {
      constructor(e, r, n, o) {
        (super(e, r, o), (this.container = n));
      }
      get pointer() {
        this.T === this.C && dq();
        let e = this;
        return new Proxy([], {
          get(r, n) {
            return n === "0" ? e.T.u : n === "1" ? e.T.l : ((r[0] = e.T.u), (r[1] = e.T.l), r[n]);
          },
          set(r, n, o) {
            if (n !== "1") throw new TypeError("prop must be 1");
            return ((e.T.l = o), !0);
          },
        });
      }
      copy() {
        return new t(this.T, this.C, this.container, this.iteratorType);
      }
    },
    Cxt = class extends Ext {
      constructor(e = [], r, n) {
        super(r, n);
        let o = this;
        e.forEach(function (s) {
          o.setElement(s[0], s[1]);
        });
      }
      begin() {
        return new zC(this.C.i || this.C, this.C, this);
      }
      end() {
        return new zC(this.C, this.C, this);
      }
      rBegin() {
        return new zC(this.C.h || this.C, this.C, this, 1);
      }
      rEnd() {
        return new zC(this.C, this.C, this, 1);
      }
      front() {
        if (this.m === 0) return;
        let e = this.C.i;
        return [e.u, e.l];
      }
      back() {
        if (this.m === 0) return;
        let e = this.C.h;
        return [e.u, e.l];
      }
      lowerBound(e) {
        let r = this.R(this.v, e);
        return new zC(r, this.C, this);
      }
      upperBound(e) {
        let r = this.K(this.v, e);
        return new zC(r, this.C, this);
      }
      reverseLowerBound(e) {
        let r = this.L(this.v, e);
        return new zC(r, this.C, this);
      }
      reverseUpperBound(e) {
        let r = this.k(this.v, e);
        return new zC(r, this.C, this);
      }
      forEach(e) {
        this.U(function (r, n, o) {
          e([r.u, r.l], n, o);
        });
      }
      setElement(e, r, n) {
        return this.q(e, r, n);
      }
      getElementByPos(e) {
        if (e < 0 || e > this.m - 1) throw new RangeError();
        let r = this.U(e);
        return [r.u, r.l];
      }
      find(e) {
        let r = this.H(this.v, e);
        return new zC(r, this.C, this);
      }
      getElementByKey(e) {
        return this.H(this.v, e).l;
      }
      union(e) {
        let r = this;
        return (
          e.forEach(function (n) {
            r.setElement(n[0], n[1]);
          }),
          this.m
        );
      }
      *[Symbol.iterator]() {
        let e = this.m,
          r = this.U();
        for (let n = 0; n < e; ++n) {
          let o = r[n];
          yield [o.u, o.l];
        }
      }
    };
  Sxt.OrderedMap = Cxt;
});