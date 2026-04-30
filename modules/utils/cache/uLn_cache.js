/**
 * @module uLn
 * @category utils/cache
 * @label cache
 * @position 1325 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (uLn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var uLn = T((Mtt, aLn) => {
  (function (t, e) {
    typeof Mtt == "object" && typeof aLn < "u"
      ? e(Mtt)
      : typeof define == "function" && define.amd
        ? define(["exports"], e)
        : ((t = typeof globalThis < "u" ? globalThis : t || self), e((t.async = {})));
  })(Mtt, function (t) {
    "use strict";
    function e(it, ...Ke) {
      return (...nt) => it(...Ke, ...nt);
    }
    function r(it) {
      return function (...Ke) {
        var nt = Ke.pop();
        return it.call(this, Ke, nt);
      };
    }
    var n = typeof queueMicrotask == "function" && queueMicrotask,
      o = typeof setImmediate == "function" && setImmediate,
      s = typeof process == "object" && typeof process.nextTick == "function";
    function a(it) {
      setTimeout(it, 0);
    }
    function u(it) {
      return (Ke, ...nt) => it(() => Ke(...nt));
    }
    var c;
    n ? (c = queueMicrotask) : o ? (c = setImmediate) : s ? (c = process.nextTick) : (c = a);
    var m = u(c);
    function d(it) {
      return h(it)
        ? function (...Ke) {
            let nt = Ke.pop(),
              St = it.apply(this, Ke);
            return f(St, nt);
          }
        : r(function (Ke, nt) {
            var St;
            try {
              St = it.apply(this, Ke);
            } catch (Ht) {
              return nt(Ht);
            }
            if (St && typeof St.then == "function") return f(St, nt);
            nt(null, St);
          });
    }
    function f(it, Ke) {
      return it.then(
        (nt) => {
          p(Ke, null, nt);
        },
        (nt) => {
          p(Ke, nt && (nt instanceof Error || nt.message) ? nt : new Error(nt));
        },
      );
    }
    function p(it, Ke, nt) {
      try {
        it(Ke, nt);
      } catch (St) {
        m((Ht) => {
          throw Ht;
        }, St);
      }
    }
    function h(it) {
      return it[Symbol.toStringTag] === "AsyncFunction";
    }
    function g(it) {
      return it[Symbol.toStringTag] === "AsyncGenerator";
    }
    function b(it) {
      return typeof it[Symbol.asyncIterator] == "function";
    }
    function A(it) {
      if (typeof it != "function") throw new Error("expected a function");
      return h(it) ? d(it) : it;
    }
    function y(it, Ke) {
      if ((Ke || (Ke = it.length), !Ke)) throw new Error("arity is undefined");
      function nt(...St) {
        return typeof St[Ke - 1] == "function"
          ? it.apply(this, St)
          : new Promise((Ht, Wt) => {
              ((St[Ke - 1] = (ir, ...pr) => {
                if (ir) return Wt(ir);
                Ht(pr.length > 1 ? pr : pr[0]);
              }),
                it.apply(this, St));
            });
      }
      return nt;
    }
    function E(it) {
      return function (nt, ...St) {
        return y(function (Wt) {
          var ir = this;
          return it(
            nt,
            (pr, wr) => {
              A(pr).apply(ir, St.concat(wr));
            },
            Wt,
          );
        });
      };
    }
    function v(it, Ke, nt, St) {
      Ke = Ke || [];
      var Ht = [],
        Wt = 0,
        ir = A(nt);
      return it(
        Ke,
        (pr, wr, ri) => {
          var vs = Wt++;
          ir(pr, (ga, Bs) => {
            ((Ht[vs] = Bs), ri(ga));
          });
        },
        (pr) => {
          St(pr, Ht);
        },
      );
    }
    function C(it) {
      return it && typeof it.length == "number" && it.length >= 0 && it.length % 1 === 0;
    }
    let x = {};
    function k(it) {
      function Ke(...nt) {
        if (it !== null) {
          var St = it;
          ((it = null), St.apply(this, nt));
        }
      }
      return (Object.assign(Ke, it), Ke);
    }
    function R(it) {
      return it[Symbol.iterator] && it[Symbol.iterator]();
    }
    function P(it) {
      var Ke = -1,
        nt = it.length;
      return function () {
        return ++Ke < nt ? { value: it[Ke], key: Ke } : null;
      };
    }
    function D(it) {
      var Ke = -1;
      return function () {
        var St = it.next();
        return St.done ? null : (Ke++, { value: St.value, key: Ke });
      };
    }
    function O(it) {
      var Ke = it ? Object.keys(it) : [],
        nt = -1,
        St = Ke.length;
      return function Ht() {
        var Wt = Ke[++nt];
        return Wt === "__proto__" ? Ht() : nt < St ? { value: it[Wt], key: Wt } : null;
      };
    }
    function N(it) {
      if (C(it)) return P(it);
      var Ke = R(it);
      return Ke ? D(Ke) : O(it);
    }
    function F(it) {
      return function (...Ke) {
        if (it === null) throw new Error("Callback was already called.");
        var nt = it;
        ((it = null), nt.apply(this, Ke));
      };
    }
    function B(it, Ke, nt, St) {
      let Ht = !1,
        Wt = !1,
        ir = !1,
        pr = 0,
        wr = 0;
      function ri() {
        pr >= Ke ||
          ir ||
          Ht ||
          ((ir = !0),
          it
            .next()
            .then(({ value: Bs, done: qm }) => {
              if (!(Wt || Ht)) {
                if (((ir = !1), qm)) {
                  ((Ht = !0), pr <= 0 && St(null));
                  return;
                }
                (pr++, nt(Bs, wr, vs), wr++, ri());
              }
            })
            .catch(ga));
      }
      function vs(Bs, qm) {
        if (((pr -= 1), !Wt)) {
          if (Bs) return ga(Bs);
          if (Bs === !1) {
            ((Ht = !0), (Wt = !0));
            return;
          }
          if (qm === x || (Ht && pr <= 0)) return ((Ht = !0), St(null));
          ri();
        }
      }
      function ga(Bs) {
        Wt || ((ir = !1), (Ht = !0), St(Bs));
      }
      ri();
    }
    var L = (it) => (Ke, nt, St) => {
      if (((St = k(St)), it <= 0)) throw new RangeError("concurrency limit cannot be less than 1");
      if (!Ke) return St(null);
      if (g(Ke)) return B(Ke, it, nt, St);
      if (b(Ke)) return B(Ke[Symbol.asyncIterator](), it, nt, St);
      var Ht = N(Ke),
        Wt = !1,
        ir = !1,
        pr = 0,
        wr = !1;
      function ri(ga, Bs) {
        if (!ir)
          if (((pr -= 1), ga)) ((Wt = !0), St(ga));
          else if (ga === !1) ((Wt = !0), (ir = !0));
          else {
            if (Bs === x || (Wt && pr <= 0)) return ((Wt = !0), St(null));
            wr || vs();
          }
      }
      function vs() {
        for (wr = !0; pr < it && !Wt; ) {
          var ga = Ht();
          if (ga === null) {
            ((Wt = !0), pr <= 0 && St(null));
            return;
          }
          ((pr += 1), nt(ga.value, ga.key, F(ri)));
        }
        wr = !1;
      }
      vs();
    };
    function G(it, Ke, nt, St) {
      return L(Ke)(it, A(nt), St);
    }
    var Q = y(G, 4);
    function K(it, Ke, nt) {
      nt = k(nt);
      var St = 0,
        Ht = 0,
        { length: Wt } = it,
        ir = !1;
      Wt === 0 && nt(null);
      function pr(wr, ri) {
        (wr === !1 && (ir = !0), ir !== !0 && (wr ? nt(wr) : (++Ht === Wt || ri === x) && nt(null)));
      }
      for (; St < Wt; St++) Ke(it[St], St, F(pr));
    }
    function H(it, Ke, nt) {
      return Q(it, 1 / 0, Ke, nt);
    }
    function U(it, Ke, nt) {
      var St = C(it) ? K : H;
      return St(it, A(Ke), nt);
    }
    var Y = y(U, 3);
    function X(it, Ke, nt) {
      return v(Y, it, Ke, nt);
    }
    var J = y(X, 3),
      q = E(J);
    function ne(it, Ke, nt) {
      return Q(it, 1, Ke, nt);
    }
    var de = y(ne, 3);
    function ce(it, Ke, nt) {
      return v(de, it, Ke, nt);
    }
    var ye = y(ce, 3),
      Z = E(ye);
    let oe = Symbol("promiseCallback");
    function ue() {
      let it, Ke;
      function nt(St, ...Ht) {
        if (St) return Ke(St);
        it(Ht.length > 1 ? Ht : Ht[0]);
      }
      return (
        (nt[oe] = new Promise((St, Ht) => {
          ((it = St), (Ke = Ht));
        })),
        nt
      );
    }
    function he(it, Ke, nt) {
      (typeof Ke != "number" && ((nt = Ke), (Ke = null)), (nt = k(nt || ue())));
      var St = Object.keys(it).length;
      if (!St) return nt(null);
      Ke || (Ke = St);
      var Ht = {},
        Wt = 0,
        ir = !1,
        pr = !1,
        wr = Object.create(null),
        ri = [],
        vs = [],
        ga = {};
      (Object.keys(it).forEach((Zn) => {
        var Pn = it[Zn];
        if (!Array.isArray(Pn)) {
          (Bs(Zn, [Pn]), vs.push(Zn));
          return;
        }
        var Ws = Pn.slice(0, Pn.length - 1),
          Bc = Ws.length;
        if (Bc === 0) {
          (Bs(Zn, Pn), vs.push(Zn));
          return;
        }
        ((ga[Zn] = Bc),
          Ws.forEach((B0) => {
            if (!it[B0])
              throw new Error(
                "async.auto task `" + Zn + "` has a non-existent dependency `" + B0 + "` in " + Ws.join(", "),
              );
            bh(B0, () => {
              (Bc--, Bc === 0 && Bs(Zn, Pn));
            });
          }));
      }),
        Vs(),
        qm());
      function Bs(Zn, Pn) {
        ri.push(() => F3(Zn, Pn));
      }
      function qm() {
        if (!ir) {
          if (ri.length === 0 && Wt === 0) return nt(null, Ht);
          for (; ri.length && Wt < Ke; ) {
            var Zn = ri.shift();
            Zn();
          }
        }
      }
      function bh(Zn, Pn) {
        var Ws = wr[Zn];
        (Ws || (Ws = wr[Zn] = []), Ws.push(Pn));
      }
      function e2(Zn) {
        var Pn = wr[Zn] || [];
        (Pn.forEach((Ws) => Ws()), qm());
      }
      function F3(Zn, Pn) {
        if (!pr) {
          var Ws = F((B0, ...gp) => {
            if ((Wt--, B0 === !1)) {
              ir = !0;
              return;
            }
            if ((gp.length < 2 && ([gp] = gp), B0)) {
              var t2 = {};
              if (
                (Object.keys(Ht).forEach((U3) => {
                  t2[U3] = Ht[U3];
                }),
                (t2[Zn] = gp),
                (pr = !0),
                (wr = Object.create(null)),
                ir)
              )
                return;
              nt(B0, t2);
            } else ((Ht[Zn] = gp), e2(Zn));
          });
          Wt++;
          var Bc = A(Pn[Pn.length - 1]);
          Pn.length > 1 ? Bc(Ht, Ws) : Bc(Ws);
        }
      }
      function Vs() {
        for (var Zn, Pn = 0; vs.length; )
          ((Zn = vs.pop()),
            Pn++,
            Si(Zn).forEach((Ws) => {
              --ga[Ws] === 0 && vs.push(Ws);
            }));
        if (Pn !== St) throw new Error("async.auto cannot execute tasks due to a recursive dependency");
      }
      function Si(Zn) {
        var Pn = [];
        return (
          Object.keys(it).forEach((Ws) => {
            let Bc = it[Ws];
            Array.isArray(Bc) && Bc.indexOf(Zn) >= 0 && Pn.push(Ws);
          }),
          Pn
        );
      }
      return nt[oe];
    }
    var se = /^(?:async\s)?(?:function)?\s*(?:\w+\s*)?\(([^)]+)\)(?:\s*{)/,
      fe = /^(?:async\s)?\s*(?:\(\s*)?((?:[^)=\s]\s*)*)(?:\)\s*)?=>/,
      ge = /,/,
      V = /(=.+)?(\s*)$/;
    function ee(it) {
      let Ke = "",
        nt = 0,
        St = it.indexOf("*/");
      for (; nt < it.length; )
        if (it[nt] === "/" && it[nt + 1] === "/") {
          let Ht = it.indexOf(
            `
`,
            nt,
          );
          nt = Ht === -1 ? it.length : Ht;
        } else if (St !== -1 && it[nt] === "/" && it[nt + 1] === "*") {
          let Ht = it.indexOf("*/", nt);
          Ht !== -1 ? ((nt = Ht + 2), (St = it.indexOf("*/", nt))) : ((Ke += it[nt]), nt++);
        } else ((Ke += it[nt]), nt++);
      return Ke;
    }
    function Ce(it) {
      let Ke = ee(it.toString()),
        nt = Ke.match(se);
      if ((nt || (nt = Ke.match(fe)), !nt))
        throw new Error(
          `could not parse args in autoInject
Source:
` + Ke,
        );
      let [, St] = nt;
      return St.replace(/\s/g, "")
        .split(ge)
        .map((Ht) => Ht.replace(V, "").trim());
    }
    function pe(it, Ke) {
      var nt = {};
      return (
        Object.keys(it).forEach((St) => {
          var Ht = it[St],
            Wt,
            ir = h(Ht),
            pr = (!ir && Ht.length === 1) || (ir && Ht.length === 0);
          if (Array.isArray(Ht)) ((Wt = [...Ht]), (Ht = Wt.pop()), (nt[St] = Wt.concat(Wt.length > 0 ? wr : Ht)));
          else if (pr) nt[St] = Ht;
          else {
            if (((Wt = Ce(Ht)), Ht.length === 0 && !ir && Wt.length === 0))
              throw new Error("autoInject task functions require explicit parameters.");
            (ir || Wt.pop(), (nt[St] = Wt.concat(wr)));
          }
          function wr(ri, vs) {
            var ga = Wt.map((Bs) => ri[Bs]);
            (ga.push(vs), A(Ht)(...ga));
          }
        }),
        he(nt, Ke)
      );
    }
    class be {
      constructor() {
        ((this.head = this.tail = null), (this.length = 0));
      }
      removeLink(Ke) {
        return (
          Ke.prev ? (Ke.prev.next = Ke.next) : (this.head = Ke.next),
          Ke.next ? (Ke.next.prev = Ke.prev) : (this.tail = Ke.prev),
          (Ke.prev = Ke.next = null),
          (this.length -= 1),
          Ke
        );
      }
      empty() {
        for (; this.head; ) this.shift();
        return this;
      }
      insertAfter(Ke, nt) {
        ((nt.prev = Ke),
          (nt.next = Ke.next),
          Ke.next ? (Ke.next.prev = nt) : (this.tail = nt),
          (Ke.next = nt),
          (this.length += 1));
      }
      insertBefore(Ke, nt) {
        ((nt.prev = Ke.prev),
          (nt.next = Ke),
          Ke.prev ? (Ke.prev.next = nt) : (this.head = nt),
          (Ke.prev = nt),
          (this.length += 1));
      }
      unshift(Ke) {
        this.head ? this.insertBefore(this.head, Ke) : Ne(this, Ke);
      }
      push(Ke) {
        this.tail ? this.insertAfter(this.tail, Ke) : Ne(this, Ke);
      }
      shift() {
        return this.head && this.removeLink(this.head);
      }
      pop() {
        return this.tail && this.removeLink(this.tail);
      }
      toArray() {
        return [...this];
      }
      *[Symbol.iterator]() {
        for (var Ke = this.head; Ke; ) (yield Ke.data, (Ke = Ke.next));
      }
      remove(Ke) {
        for (var nt = this.head; nt; ) {
          var { next: St } = nt;
          (Ke(nt) && this.removeLink(nt), (nt = St));
        }
        return this;
      }
    }
    function Ne(it, Ke) {
      ((it.length = 1), (it.head = it.tail = Ke));
    }
    function Ge(it, Ke, nt) {
      if (Ke == null) Ke = 1;
      else if (Ke === 0) throw new RangeError("Concurrency must not be zero");
      var St = A(it),
        Ht = 0,
        Wt = [];
      let ir = { error: [], drain: [], saturated: [], unsaturated: [], empty: [] };
      function pr(Si, Zn) {
        ir[Si].push(Zn);
      }
      function wr(Si, Zn) {
        let Pn = (...Ws) => {
          (ri(Si, Pn), Zn(...Ws));
        };
        ir[Si].push(Pn);
      }
      function ri(Si, Zn) {
        if (!Si) return Object.keys(ir).forEach((Pn) => (ir[Pn] = []));
        if (!Zn) return (ir[Si] = []);
        ir[Si] = ir[Si].filter((Pn) => Pn !== Zn);
      }
      function vs(Si, ...Zn) {
        ir[Si].forEach((Pn) => Pn(...Zn));
      }
      var ga = !1;
      function Bs(Si, Zn, Pn, Ws) {
        if (Ws != null && typeof Ws != "function") throw new Error("task callback must be a function");
        Vs.started = !0;
        var Bc, B0;
        function gp(U3, ...ub) {
          if (U3) return Pn ? B0(U3) : Bc();
          if (ub.length <= 1) return Bc(ub[0]);
          Bc(ub);
        }
        var t2 = Vs._createTaskItem(Si, Pn ? gp : Ws || gp);
        if (
          (Zn ? Vs._tasks.unshift(t2) : Vs._tasks.push(t2),
          ga ||
            ((ga = !0),
            m(() => {
              ((ga = !1), Vs.process());
            })),
          Pn || !Ws)
        )
          return new Promise((U3, ub) => {
            ((Bc = U3), (B0 = ub));
          });
      }
      function qm(Si) {
        return function (Zn, ...Pn) {
          Ht -= 1;
          for (var Ws = 0, Bc = Si.length; Ws < Bc; Ws++) {
            var B0 = Si[Ws],
              gp = Wt.indexOf(B0);
            (gp === 0 ? Wt.shift() : gp > 0 && Wt.splice(gp, 1),
              B0.callback(Zn, ...Pn),
              Zn != null && vs("error", Zn, B0.data));
          }
          (Ht <= Vs.concurrency - Vs.buffer && vs("unsaturated"), Vs.idle() && vs("drain"), Vs.process());
        };
      }
      function bh(Si) {
        return Si.length === 0 && Vs.idle() ? (m(() => vs("drain")), !0) : !1;
      }
      let e2 = (Si) => (Zn) => {
        if (!Zn)
          return new Promise((Pn, Ws) => {
            wr(Si, (Bc, B0) => {
              if (Bc) return Ws(Bc);
              Pn(B0);
            });
          });
        (ri(Si), pr(Si, Zn));
      };
      var F3 = !1,
        Vs = {
          _tasks: new be(),
          _createTaskItem(Si, Zn) {
            return { data: Si, callback: Zn };
          },
          *[Symbol.iterator]() {
            yield* Vs._tasks[Symbol.iterator]();
          },
          concurrency: Ke,
          payload: nt,
          buffer: Ke / 4,
          started: !1,
          paused: !1,
          push(Si, Zn) {
            return Array.isArray(Si) ? (bh(Si) ? void 0 : Si.map((Pn) => Bs(Pn, !1, !1, Zn))) : Bs(Si, !1, !1, Zn);
          },
          pushAsync(Si, Zn) {
            return Array.isArray(Si) ? (bh(Si) ? void 0 : Si.map((Pn) => Bs(Pn, !1, !0, Zn))) : Bs(Si, !1, !0, Zn);
          },
          kill() {
            (ri(), Vs._tasks.empty());
          },
          unshift(Si, Zn) {
            return Array.isArray(Si) ? (bh(Si) ? void 0 : Si.map((Pn) => Bs(Pn, !0, !1, Zn))) : Bs(Si, !0, !1, Zn);
          },
          unshiftAsync(Si, Zn) {
            return Array.isArray(Si) ? (bh(Si) ? void 0 : Si.map((Pn) => Bs(Pn, !0, !0, Zn))) : Bs(Si, !0, !0, Zn);
          },
          remove(Si) {
            Vs._tasks.remove(Si);
          },
          process() {
            if (!F3) {
              for (F3 = !0; !Vs.paused && Ht < Vs.concurrency && Vs._tasks.length; ) {
                var Si = [],
                  Zn = [],
                  Pn = Vs._tasks.length;
                Vs.payload && (Pn = Math.min(Pn, Vs.payload));
                for (var Ws = 0; Ws < Pn; Ws++) {
                  var Bc = Vs._tasks.shift();
                  (Si.push(Bc), Wt.push(Bc), Zn.push(Bc.data));
                }
                ((Ht += 1), Vs._tasks.length === 0 && vs("empty"), Ht === Vs.concurrency && vs("saturated"));
                var B0 = F(qm(Si));
                St(Zn, B0);
              }
              F3 = !1;
            }
          },
          length() {
            return Vs._tasks.length;
          },
          running() {
            return Ht;
          },
          workersList() {
            return Wt;
          },
          idle() {
            return Vs._tasks.length + Ht === 0;
          },
          pause() {
            Vs.paused = !0;
          },
          resume() {
            Vs.paused !== !1 && ((Vs.paused = !1), m(Vs.process));
          },
        };
      return (
        Object.defineProperties(Vs, {
          saturated: { writable: !1, value: e2("saturated") },
          unsaturated: { writable: !1, value: e2("unsaturated") },
          empty: { writable: !1, value: e2("empty") },
          drain: { writable: !1, value: e2("drain") },
          error: { writable: !1, value: e2("error") },
        }),
        Vs
      );
    }
    function Ze(it, Ke) {
      return Ge(it, 1, Ke);
    }
    function Ye(it, Ke, nt) {
      return Ge(it, Ke, nt);
    }
    function _e(it, Ke, nt, St) {
      St = k(St);
      var Ht = A(nt);
      return de(
        it,
        (Wt, ir, pr) => {
          Ht(Ke, Wt, (wr, ri) => {
            ((Ke = ri), pr(wr));
          });
        },
        (Wt) => St(Wt, Ke),
      );
    }
    var Ie = y(_e, 4);
    function ke(...it) {
      var Ke = it.map(A);
      return function (...nt) {
        var St = this,
          Ht = nt[nt.length - 1];
        return (
          typeof Ht == "function" ? nt.pop() : (Ht = ue()),
          Ie(
            Ke,
            nt,
            (Wt, ir, pr) => {
              ir.apply(
                St,
                Wt.concat((wr, ...ri) => {
                  pr(wr, ri);
                }),
              );
            },
            (Wt, ir) => Ht(Wt, ...ir),
          ),
          Ht[oe]
        );
      };
    }
    function $e(...it) {
      return ke(...it.reverse());
    }
    function Le(it, Ke, nt, St) {
      return v(L(Ke), it, nt, St);
    }
    var Fe = y(Le, 4);
    function je(it, Ke, nt, St) {
      var Ht = A(nt);
      return Fe(
        it,
        Ke,
        (Wt, ir) => {
          Ht(Wt, (pr, ...wr) => (pr ? ir(pr) : ir(pr, wr)));
        },
        (Wt, ir) => {
          for (var pr = [], wr = 0; wr < ir.length; wr++) ir[wr] && (pr = pr.concat(...ir[wr]));
          return St(Wt, pr);
        },
      );
    }
    var He = y(je, 4);
    function mt(it, Ke, nt) {
      return He(it, 1 / 0, Ke, nt);
    }
    var kt = y(mt, 3);
    function $t(it, Ke, nt) {
      return He(it, 1, Ke, nt);
    }
    var we = y($t, 3);
    function Te(...it) {
      return function (...Ke) {
        var nt = Ke.pop();
        return nt(null, ...it);
      };
    }
    function Pe(it, Ke) {
      return (nt, St, Ht, Wt) => {
        var ir = !1,
          pr;
        let wr = A(Ht);
        nt(
          St,
          (ri, vs, ga) => {
            wr(ri, (Bs, qm) => {
              if (Bs || Bs === !1) return ga(Bs);
              if (it(qm) && !pr) return ((ir = !0), (pr = Ke(!0, ri)), ga(null, x));
              ga();
            });
          },
          (ri) => {
            if (ri) return Wt(ri);
            Wt(null, ir ? pr : Ke(!1));
          },
        );
      };
    }
    function tt(it, Ke, nt) {
      return Pe(
        (St) => St,
        (St, Ht) => Ht,
      )(Y, it, Ke, nt);
    }
    var Je = y(tt, 3);
    function ze(it, Ke, nt, St) {
      return Pe(
        (Ht) => Ht,
        (Ht, Wt) => Wt,
      )(L(Ke), it, nt, St);
    }
    var ct = y(ze, 4);
    function pt(it, Ke, nt) {
      return Pe(
        (St) => St,
        (St, Ht) => Ht,
      )(L(1), it, Ke, nt);
    }
    var _t = y(pt, 3);
    function tr(it) {
      return (Ke, ...nt) =>
        A(Ke)(...nt, (St, ...Ht) => {
          typeof console == "object" &&
            (St ? console.error && console.error(St) : console[it] && Ht.forEach((Wt) => console[it](Wt)));
        });
    }
    var dr = tr("dir");
    function ar(it, Ke, nt) {
      nt = F(nt);
      var St = A(it),
        Ht = A(Ke),
        Wt;
      function ir(wr, ...ri) {
        if (wr) return nt(wr);
        wr !== !1 && ((Wt = ri), Ht(...ri, pr));
      }
      function pr(wr, ri) {
        if (wr) return nt(wr);
        if (wr !== !1) {
          if (!ri) return nt(null, ...Wt);
          St(ir);
        }
      }
      return pr(null, !0);
    }
    var Gr = y(ar, 3);
    function Cn(it, Ke, nt) {
      let St = A(Ke);
      return Gr(
        it,
        (...Ht) => {
          let Wt = Ht.pop();
          St(...Ht, (ir, pr) => Wt(ir, !pr));
        },
        nt,
      );
    }
    function wn(it) {
      return (Ke, nt, St) => it(Ke, St);
    }
    function jn(it, Ke, nt) {
      return Y(it, wn(A(Ke)), nt);
    }
    var To = y(jn, 3);
    function Oo(it, Ke, nt, St) {
      return L(Ke)(it, wn(A(nt)), St);
    }
    var Eo = y(Oo, 4);
    function _i(it, Ke, nt) {
      return Eo(it, 1, Ke, nt);
    }
    var Do = y(_i, 3);
    function Io(it) {
      return h(it)
        ? it
        : function (...Ke) {
            var nt = Ke.pop(),
              St = !0;
            (Ke.push((...Ht) => {
              St ? m(() => nt(...Ht)) : nt(...Ht);
            }),
              it.apply(this, Ke),
              (St = !1));
          };
    }
    function Ps(it, Ke, nt) {
      return Pe(
        (St) => !St,
        (St) => !St,
      )(Y, it, Ke, nt);
    }
    var Gs = y(Ps, 3);
    function is(it, Ke, nt, St) {
      return Pe(
        (Ht) => !Ht,
        (Ht) => !Ht,
      )(L(Ke), it, nt, St);
    }
    var qs = y(is, 4);
    function Ra(it, Ke, nt) {
      return Pe(
        (St) => !St,
        (St) => !St,
      )(de, it, Ke, nt);
    }
    var ka = y(Ra, 3);
    function Vd(it, Ke, nt, St) {
      var Ht = new Array(Ke.length);
      it(
        Ke,
        (Wt, ir, pr) => {
          nt(Wt, (wr, ri) => {
            ((Ht[ir] = !!ri), pr(wr));
          });
        },
        (Wt) => {
          if (Wt) return St(Wt);
          for (var ir = [], pr = 0; pr < Ke.length; pr++) Ht[pr] && ir.push(Ke[pr]);
          St(null, ir);
        },
      );
    }
    function Wd(it, Ke, nt, St) {
      var Ht = [];
      it(
        Ke,
        (Wt, ir, pr) => {
          nt(Wt, (wr, ri) => {
            if (wr) return pr(wr);
            (ri && Ht.push({ index: ir, value: Wt }), pr(wr));
          });
        },
        (Wt) => {
          if (Wt) return St(Wt);
          St(
            null,
            Ht.sort((ir, pr) => ir.index - pr.index).map((ir) => ir.value),
          );
        },
      );
    }
    function m0(it, Ke, nt, St) {
      var Ht = C(Ke) ? Vd : Wd;
      return Ht(it, Ke, A(nt), St);
    }
    function lh(it, Ke, nt) {
      return m0(Y, it, Ke, nt);
    }
    var d0 = y(lh, 3);
    function sb(it, Ke, nt, St) {
      return m0(L(Ke), it, nt, St);
    }
    var YA = y(sb, 4);
    function mh(it, Ke, nt) {
      return m0(de, it, Ke, nt);
    }
    var KA = y(mh, 3);
    function dh(it, Ke) {
      var nt = F(Ke),
        St = A(Io(it));
      function Ht(Wt) {
        if (Wt) return nt(Wt);
        Wt !== !1 && St(Ht);
      }
      return Ht();
    }
    var fp = y(dh, 2);
    function h7(it, Ke, nt, St) {
      var Ht = A(nt);
      return Fe(
        it,
        Ke,
        (Wt, ir) => {
          Ht(Wt, (pr, wr) => (pr ? ir(pr) : ir(pr, { key: wr, val: Wt })));
        },
        (Wt, ir) => {
          for (var pr = {}, { hasOwnProperty: wr } = Object.prototype, ri = 0; ri < ir.length; ri++)
            if (ir[ri]) {
              var { key: vs } = ir[ri],
                { val: ga } = ir[ri];
              wr.call(pr, vs) ? pr[vs].push(ga) : (pr[vs] = [ga]);
            }
          return St(Wt, pr);
        },
      );
    }
    var pp = y(h7, 4);
    function sm(it, Ke, nt) {
      return pp(it, 1 / 0, Ke, nt);
    }
    function Vy(it, Ke, nt) {
      return pp(it, 1, Ke, nt);
    }
    var Xc = tr("log");
    function aC(it, Ke, nt, St) {
      St = k(St);
      var Ht = {},
        Wt = A(nt);
      return L(Ke)(
        it,
        (ir, pr, wr) => {
          Wt(ir, pr, (ri, vs) => {
            if (ri) return wr(ri);
            ((Ht[pr] = vs), wr(ri));
          });
        },
        (ir) => St(ir, Ht),
      );
    }
    var ab = y(aC, 4);
    function fh(it, Ke, nt) {
      return ab(it, 1 / 0, Ke, nt);
    }
    function U9(it, Ke, nt) {
      return ab(it, 1, Ke, nt);
    }
    function xw(it, Ke = (nt) => nt) {
      var nt = Object.create(null),
        St = Object.create(null),
        Ht = A(it),
        Wt = r((ir, pr) => {
          var wr = Ke(...ir);
          wr in nt
            ? m(() => pr(null, ...nt[wr]))
            : wr in St
              ? St[wr].push(pr)
              : ((St[wr] = [pr]),
                Ht(...ir, (ri, ...vs) => {
                  ri || (nt[wr] = vs);
                  var ga = St[wr];
                  delete St[wr];
                  for (var Bs = 0, qm = ga.length; Bs < qm; Bs++) ga[Bs](ri, ...vs);
                }));
        });
      return ((Wt.memo = nt), (Wt.unmemoized = it), Wt);
    }
    var Ve;
    s ? (Ve = process.nextTick) : o ? (Ve = setImmediate) : (Ve = a);
    var Xe = u(Ve),
      yt = y((it, Ke, nt) => {
        var St = C(Ke) ? [] : {};
        it(
          Ke,
          (Ht, Wt, ir) => {
            A(Ht)((pr, ...wr) => {
              (wr.length < 2 && ([wr] = wr), (St[Wt] = wr), ir(pr));
            });
          },
          (Ht) => nt(Ht, St),
        );
      }, 3);
    function wt(it, Ke) {
      return yt(Y, it, Ke);
    }
    function Nt(it, Ke, nt) {
      return yt(L(Ke), it, nt);
    }
    function fr(it, Ke) {
      var nt = A(it);
      return Ge(
        (St, Ht) => {
          nt(St[0], Ht);
        },
        Ke,
        1,
      );
    }
    class kr {
      constructor() {
        ((this.heap = []), (this.pushCount = Number.MIN_SAFE_INTEGER));
      }
      get length() {
        return this.heap.length;
      }
      empty() {
        return ((this.heap = []), this);
      }
      percUp(Ke) {
        let nt;
        for (; Ke > 0 && $r(this.heap[Ke], this.heap[(nt = sn(Ke))]); ) {
          let St = this.heap[Ke];
          ((this.heap[Ke] = this.heap[nt]), (this.heap[nt] = St), (Ke = nt));
        }
      }
      percDown(Ke) {
        let nt;
        for (
          ;
          (nt = Pr(Ke)) < this.heap.length &&
          (nt + 1 < this.heap.length && $r(this.heap[nt + 1], this.heap[nt]) && (nt = nt + 1),
          !$r(this.heap[Ke], this.heap[nt]));
        ) {
          let St = this.heap[Ke];
          ((this.heap[Ke] = this.heap[nt]), (this.heap[nt] = St), (Ke = nt));
        }
      }
      push(Ke) {
        ((Ke.pushCount = ++this.pushCount), this.heap.push(Ke), this.percUp(this.heap.length - 1));
      }
      unshift(Ke) {
        return this.heap.push(Ke);
      }
      shift() {
        let [Ke] = this.heap;
        return ((this.heap[0] = this.heap[this.heap.length - 1]), this.heap.pop(), this.percDown(0), Ke);
      }
      toArray() {
        return [...this];
      }
      *[Symbol.iterator]() {
        for (let Ke = 0; Ke < this.heap.length; Ke++) yield this.heap[Ke].data;
      }
      remove(Ke) {
        let nt = 0;
        for (let St = 0; St < this.heap.length; St++) Ke(this.heap[St]) || ((this.heap[nt] = this.heap[St]), nt++);
        this.heap.splice(nt);
        for (let St = sn(this.heap.length - 1); St >= 0; St--) this.percDown(St);
        return this;
      }
    }
    function Pr(it) {
      return (it << 1) + 1;
    }
    function sn(it) {
      return ((it + 1) >> 1) - 1;
    }
    function $r(it, Ke) {
      return it.priority !== Ke.priority ? it.priority < Ke.priority : it.pushCount < Ke.pushCount;
    }
    function Sn(it, Ke) {
      var nt = fr(it, Ke),
        { push: St, pushAsync: Ht } = nt;
      ((nt._tasks = new kr()),
        (nt._createTaskItem = ({ data: ir, priority: pr }, wr) => ({ data: ir, priority: pr, callback: wr })));
      function Wt(ir, pr) {
        return Array.isArray(ir) ? ir.map((wr) => ({ data: wr, priority: pr })) : { data: ir, priority: pr };
      }
      return (
        (nt.push = function (ir, pr = 0, wr) {
          return St(Wt(ir, pr), wr);
        }),
        (nt.pushAsync = function (ir, pr = 0, wr) {
          return Ht(Wt(ir, pr), wr);
        }),
        delete nt.unshift,
        delete nt.unshiftAsync,
        nt
      );
    }
    function Bi(it, Ke) {
      if (((Ke = k(Ke)), !Array.isArray(it)))
        return Ke(new TypeError("First argument to race must be an array of functions"));
      if (!it.length) return Ke();
      for (var nt = 0, St = it.length; nt < St; nt++) A(it[nt])(Ke);
    }
    var os = y(Bi, 2);
    function Xu(it, Ke, nt, St) {
      var Ht = [...it].reverse();
      return Ie(Ht, Ke, nt, St);
    }
    function Hs(it) {
      var Ke = A(it);
      return r(function (St, Ht) {
        return (
          St.push((Wt, ...ir) => {
            let pr = {};
            if ((Wt && (pr.error = Wt), ir.length > 0)) {
              var wr = ir;
              (ir.length <= 1 && ([wr] = ir), (pr.value = wr));
            }
            Ht(null, pr);
          }),
          Ke.apply(this, St)
        );
      });
    }
    function P0(it) {
      var Ke;
      return (
        Array.isArray(it)
          ? (Ke = it.map(Hs))
          : ((Ke = {}),
            Object.keys(it).forEach((nt) => {
              Ke[nt] = Hs.call(this, it[nt]);
            })),
        Ke
      );
    }
    function Gm(it, Ke, nt, St) {
      let Ht = A(nt);
      return m0(
        it,
        Ke,
        (Wt, ir) => {
          Ht(Wt, (pr, wr) => {
            ir(pr, !wr);
          });
        },
        St,
      );
    }
    function $9(it, Ke, nt) {
      return Gm(Y, it, Ke, nt);
    }
    var ph = y($9, 3);
    function j9(it, Ke, nt, St) {
      return Gm(L(Ke), it, nt, St);
    }
    var k5 = y(j9, 4);
    function bP(it, Ke, nt) {
      return Gm(de, it, Ke, nt);
    }
    var Tw = y(bP, 3);
    function Wy(it) {
      return function () {
        return it;
      };
    }
    let JA = 5,
      Dw = 0;
    function Iw(it, Ke, nt) {
      var St = { times: JA, intervalFunc: Wy(Dw) };
      if (
        (arguments.length < 3 && typeof it == "function"
          ? ((nt = Ke || ue()), (Ke = it))
          : (EQ(St, it), (nt = nt || ue())),
        typeof Ke != "function")
      )
        throw new Error("Invalid arguments for async.retry");
      var Ht = A(Ke),
        Wt = 1;
      function ir() {
        Ht((pr, ...wr) => {
          pr !== !1 &&
            (pr && Wt++ < St.times && (typeof St.errorFilter != "function" || St.errorFilter(pr))
              ? setTimeout(ir, St.intervalFunc(Wt - 1))
              : nt(pr, ...wr));
        });
      }
      return (ir(), nt[oe]);
    }
    function EQ(it, Ke) {
      if (typeof Ke == "object")
        ((it.times = +Ke.times || JA),
          (it.intervalFunc = typeof Ke.interval == "function" ? Ke.interval : Wy(+Ke.interval || Dw)),
          (it.errorFilter = Ke.errorFilter));
      else if (typeof Ke == "number" || typeof Ke == "string") it.times = +Ke || JA;
      else throw new Error("Invalid arguments for async.retry");
    }
    function O5(it, Ke) {
      Ke || ((Ke = it), (it = null));
      let nt = (it && it.arity) || Ke.length;
      h(Ke) && (nt += 1);
      var St = A(Ke);
      return r((Ht, Wt) => {
        (Ht.length < nt - 1 || Wt == null) && (Ht.push(Wt), (Wt = ue()));
        function ir(pr) {
          St(...Ht, pr);
        }
        return (it ? Iw(it, ir, Wt) : Iw(ir, Wt), Wt[oe]);
      });
    }
    function uC(it, Ke) {
      return yt(de, it, Ke);
    }
    function hh(it, Ke, nt) {
      return Pe(Boolean, (St) => St)(Y, it, Ke, nt);
    }
    var cC = y(hh, 3);
    function Q9(it, Ke, nt, St) {
      return Pe(Boolean, (Ht) => Ht)(L(Ke), it, nt, St);
    }
    var xd = y(Q9, 4);
    function hp(it, Ke, nt) {
      return Pe(Boolean, (St) => St)(de, it, Ke, nt);
    }
    var XA = y(hp, 3);
    function gh(it, Ke, nt) {
      var St = A(Ke);
      return J(
        it,
        (Wt, ir) => {
          St(Wt, (pr, wr) => {
            if (pr) return ir(pr);
            ir(pr, { value: Wt, criteria: wr });
          });
        },
        (Wt, ir) => {
          if (Wt) return nt(Wt);
          nt(
            null,
            ir.sort(Ht).map((pr) => pr.value),
          );
        },
      );
      function Ht(Wt, ir) {
        var pr = Wt.criteria,
          wr = ir.criteria;
        return pr < wr ? -1 : pr > wr ? 1 : 0;
      }
    }
    var g7 = y(gh, 3);
    function Rw(it, Ke, nt) {
      var St = A(it);
      return r((Ht, Wt) => {
        var ir = !1,
          pr;
        function wr() {
          var ri = it.name || "anonymous",
            vs = new Error('Callback function "' + ri + '" timed out.');
          ((vs.code = "ETIMEDOUT"), nt && (vs.info = nt), (ir = !0), Wt(vs));
        }
        (Ht.push((...ri) => {
          ir || (Wt(...ri), clearTimeout(pr));
        }),
          (pr = setTimeout(wr, Ke)),
          St(...Ht));
      });
    }
    function vQ(it) {
      for (var Ke = Array(it); it--; ) Ke[it] = it;
      return Ke;
    }
    function ZA(it, Ke, nt, St) {
      var Ht = A(nt);
      return Fe(vQ(it), Ke, Ht, St);
    }
    function zy(it, Ke, nt) {
      return ZA(it, 1 / 0, Ke, nt);
    }
    function lC(it, Ke, nt) {
      return ZA(it, 1, Ke, nt);
    }
    function kw(it, Ke, nt, St) {
      (arguments.length <= 3 && typeof Ke == "function" && ((St = nt), (nt = Ke), (Ke = Array.isArray(it) ? [] : {})),
        (St = k(St || ue())));
      var Ht = A(nt);
      return (
        Y(
          it,
          (Wt, ir, pr) => {
            Ht(Ke, Wt, ir, pr);
          },
          (Wt) => St(Wt, Ke),
        ),
        St[oe]
      );
    }
    function AP(it, Ke) {
      var nt = null,
        St;
      return Do(
        it,
        (Ht, Wt) => {
          A(Ht)((ir, ...pr) => {
            if (ir === !1) return Wt(ir);
            (pr.length < 2 ? ([St] = pr) : (St = pr), (nt = ir), Wt(ir ? null : {}));
          });
        },
        () => Ke(nt, St),
      );
    }
    var mC = y(AP);
    function Ow(it) {
      return (...Ke) => (it.unmemoized || it)(...Ke);
    }
    function yP(it, Ke, nt) {
      nt = F(nt);
      var St = A(Ke),
        Ht = A(it),
        Wt = [];
      function ir(wr, ...ri) {
        if (wr) return nt(wr);
        ((Wt = ri), wr !== !1 && Ht(pr));
      }
      function pr(wr, ri) {
        if (wr) return nt(wr);
        if (wr !== !1) {
          if (!ri) return nt(null, ...Wt);
          St(ir);
        }
      }
      return Ht(pr);
    }
    var G9 = y(yP, 3);
    function b7(it, Ke, nt) {
      let St = A(it);
      return G9((Ht) => St((Wt, ir) => Ht(Wt, !ir)), Ke, nt);
    }
    function M3(it, Ke) {
      if (((Ke = k(Ke)), !Array.isArray(it)))
        return Ke(new Error("First argument to waterfall must be an array of functions"));
      if (!it.length) return Ke();
      var nt = 0;
      function St(Wt) {
        var ir = A(it[nt++]);
        ir(...Wt, F(Ht));
      }
      function Ht(Wt, ...ir) {
        if (Wt !== !1) {
          if (Wt || nt === it.length) return Ke(Wt, ...ir);
          St(ir);
        }
      }
      St([]);
    }
    var Nw = y(M3),
      Pw = {
        apply: e,
        applyEach: q,
        applyEachSeries: Z,
        asyncify: d,
        auto: he,
        autoInject: pe,
        cargo: Ze,
        cargoQueue: Ye,
        compose: $e,
        concat: kt,
        concatLimit: He,
        concatSeries: we,
        constant: Te,
        detect: Je,
        detectLimit: ct,
        detectSeries: _t,
        dir: dr,
        doUntil: Cn,
        doWhilst: Gr,
        each: To,
        eachLimit: Eo,
        eachOf: Y,
        eachOfLimit: Q,
        eachOfSeries: de,
        eachSeries: Do,
        ensureAsync: Io,
        every: Gs,
        everyLimit: qs,
        everySeries: ka,
        filter: d0,
        filterLimit: YA,
        filterSeries: KA,
        forever: fp,
        groupBy: sm,
        groupByLimit: pp,
        groupBySeries: Vy,
        log: Xc,
        map: J,
        mapLimit: Fe,
        mapSeries: ye,
        mapValues: fh,
        mapValuesLimit: ab,
        mapValuesSeries: U9,
        memoize: xw,
        nextTick: Xe,
        parallel: wt,
        parallelLimit: Nt,
        priorityQueue: Sn,
        queue: fr,
        race: os,
        reduce: Ie,
        reduceRight: Xu,
        reflect: Hs,
        reflectAll: P0,
        reject: ph,
        rejectLimit: k5,
        rejectSeries: Tw,
        retry: Iw,
        retryable: O5,
        seq: ke,
        series: uC,
        setImmediate: m,
        some: cC,
        someLimit: xd,
        someSeries: XA,
        sortBy: g7,
        timeout: Rw,
        times: zy,
        timesLimit: ZA,
        timesSeries: lC,
        transform: kw,
        tryEach: mC,
        unmemoize: Ow,
        until: b7,
        waterfall: Nw,
        whilst: G9,
        all: Gs,
        allLimit: qs,
        allSeries: ka,
        any: cC,
        anyLimit: xd,
        anySeries: XA,
        find: Je,
        findLimit: ct,
        findSeries: _t,
        flatMap: kt,
        flatMapLimit: He,
        flatMapSeries: we,
        forEach: To,
        forEachSeries: Do,
        forEachLimit: Eo,
        forEachOf: Y,
        forEachOfSeries: de,
        forEachOfLimit: Q,
        inject: Ie,
        foldl: Ie,
        foldr: Xu,
        select: d0,
        selectLimit: YA,
        selectSeries: KA,
        wrapSync: d,
        during: G9,
        doDuring: Gr,
      };
    ((t.all = Gs),
      (t.allLimit = qs),
      (t.allSeries = ka),
      (t.any = cC),
      (t.anyLimit = xd),
      (t.anySeries = XA),
      (t.apply = e),
      (t.applyEach = q),
      (t.applyEachSeries = Z),
      (t.asyncify = d),
      (t.auto = he),
      (t.autoInject = pe),
      (t.cargo = Ze),
      (t.cargoQueue = Ye),
      (t.compose = $e),
      (t.concat = kt),
      (t.concatLimit = He),
      (t.concatSeries = we),
      (t.constant = Te),
      (t.default = Pw),
      (t.detect = Je),
      (t.detectLimit = ct),
      (t.detectSeries = _t),
      (t.dir = dr),
      (t.doDuring = Gr),
      (t.doUntil = Cn),
      (t.doWhilst = Gr),
      (t.during = G9),
      (t.each = To),
      (t.eachLimit = Eo),
      (t.eachOf = Y),
      (t.eachOfLimit = Q),
      (t.eachOfSeries = de),
      (t.eachSeries = Do),
      (t.ensureAsync = Io),
      (t.every = Gs),
      (t.everyLimit = qs),
      (t.everySeries = ka),
      (t.filter = d0),
      (t.filterLimit = YA),
      (t.filterSeries = KA),
      (t.find = Je),
      (t.findLimit = ct),
      (t.findSeries = _t),
      (t.flatMap = kt),
      (t.flatMapLimit = He),
      (t.flatMapSeries = we),
      (t.foldl = Ie),
      (t.foldr = Xu),
      (t.forEach = To),
      (t.forEachLimit = Eo),
      (t.forEachOf = Y),
      (t.forEachOfLimit = Q),
      (t.forEachOfSeries = de),
      (t.forEachSeries = Do),
      (t.forever = fp),
      (t.groupBy = sm),
      (t.groupByLimit = pp),
      (t.groupBySeries = Vy),
      (t.inject = Ie),
      (t.log = Xc),
      (t.map = J),
      (t.mapLimit = Fe),
      (t.mapSeries = ye),
      (t.mapValues = fh),
      (t.mapValuesLimit = ab),
      (t.mapValuesSeries = U9),
      (t.memoize = xw),
      (t.nextTick = Xe),
      (t.parallel = wt),
      (t.parallelLimit = Nt),
      (t.priorityQueue = Sn),
      (t.queue = fr),
      (t.race = os),
      (t.reduce = Ie),
      (t.reduceRight = Xu),
      (t.reflect = Hs),
      (t.reflectAll = P0),
      (t.reject = ph),
      (t.rejectLimit = k5),
      (t.rejectSeries = Tw),
      (t.retry = Iw),
      (t.retryable = O5),
      (t.select = d0),
      (t.selectLimit = YA),
      (t.selectSeries = KA),
      (t.seq = ke),
      (t.series = uC),
      (t.setImmediate = m),
      (t.some = cC),
      (t.someLimit = xd),
      (t.someSeries = XA),
      (t.sortBy = g7),
      (t.timeout = Rw),
      (t.times = zy),
      (t.timesLimit = ZA),
      (t.timesSeries = lC),
      (t.transform = kw),
      (t.tryEach = mC),
      (t.unmemoize = Ow),
      (t.until = b7),
      (t.waterfall = Nw),
      (t.whilst = G9),
      (t.wrapSync = d),
      Object.defineProperty(t, "__esModule", { value: !0 }));
  });
});