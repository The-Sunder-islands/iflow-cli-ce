/**
 * @module o5i
 * @category unknown
 * @label unknown
 * @position 1738 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (o5i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var o5i = T((i5i) => {
  "use strict";
  var AK = (t, e) => {
      let r = [];
      if ((t && r.push(t), e)) for (let n of e) r.push(n);
      return r;
    },
    D$ = (t, e) => `${t || "anonymous"}${e && e.length > 0 ? ` (a.k.a. ${e.join(",")})` : ""}`,
    Z3r = () => {
      let t = [],
        e = [],
        r = !1,
        n = new Set(),
        o = (f) =>
          f.sort((p, h) => r5i[h.step] - r5i[p.step] || n5i[h.priority || "normal"] - n5i[p.priority || "normal"]),
        s = (f) => {
          let p = !1,
            h = (g) => {
              let b = AK(g.name, g.aliases);
              if (b.includes(f)) {
                p = !0;
                for (let A of b) n.delete(A);
                return !1;
              }
              return !0;
            };
          return ((t = t.filter(h)), (e = e.filter(h)), p);
        },
        a = (f) => {
          let p = !1,
            h = (g) => {
              if (g.middleware === f) {
                p = !0;
                for (let b of AK(g.name, g.aliases)) n.delete(b);
                return !1;
              }
              return !0;
            };
          return ((t = t.filter(h)), (e = e.filter(h)), p);
        },
        u = (f) => (
          t.forEach((p) => {
            f.add(p.middleware, { ...p });
          }),
          e.forEach((p) => {
            f.addRelativeTo(p.middleware, { ...p });
          }),
          f.identifyOnResolve?.(d.identifyOnResolve()),
          f
        ),
        c = (f) => {
          let p = [];
          return (
            f.before.forEach((h) => {
              h.before.length === 0 && h.after.length === 0 ? p.push(h) : p.push(...c(h));
            }),
            p.push(f),
            f.after.reverse().forEach((h) => {
              h.before.length === 0 && h.after.length === 0 ? p.push(h) : p.push(...c(h));
            }),
            p
          );
        },
        m = (f = !1) => {
          let p = [],
            h = [],
            g = {};
          return (
            t.forEach((A) => {
              let y = { ...A, before: [], after: [] };
              for (let E of AK(y.name, y.aliases)) g[E] = y;
              p.push(y);
            }),
            e.forEach((A) => {
              let y = { ...A, before: [], after: [] };
              for (let E of AK(y.name, y.aliases)) g[E] = y;
              h.push(y);
            }),
            h.forEach((A) => {
              if (A.toMiddleware) {
                let y = g[A.toMiddleware];
                if (y === void 0) {
                  if (f) return;
                  throw new Error(
                    `${A.toMiddleware} is not found when adding ${D$(A.name, A.aliases)} middleware ${A.relation} ${A.toMiddleware}`,
                  );
                }
                (A.relation === "after" && y.after.push(A), A.relation === "before" && y.before.push(A));
              }
            }),
            o(p)
              .map(c)
              .reduce((A, y) => (A.push(...y), A), [])
          );
        },
        d = {
          add: (f, p = {}) => {
            let { name: h, override: g, aliases: b } = p,
              A = { step: "initialize", priority: "normal", middleware: f, ...p },
              y = AK(h, b);
            if (y.length > 0) {
              if (y.some((E) => n.has(E))) {
                if (!g) throw new Error(`Duplicate middleware name '${D$(h, b)}'`);
                for (let E of y) {
                  let v = t.findIndex((x) => x.name === E || x.aliases?.some((k) => k === E));
                  if (v === -1) continue;
                  let C = t[v];
                  if (C.step !== A.step || A.priority !== C.priority)
                    throw new Error(
                      `"${D$(C.name, C.aliases)}" middleware with ${C.priority} priority in ${C.step} step cannot be overridden by "${D$(h, b)}" middleware with ${A.priority} priority in ${A.step} step.`,
                    );
                  t.splice(v, 1);
                }
              }
              for (let E of y) n.add(E);
            }
            t.push(A);
          },
          addRelativeTo: (f, p) => {
            let { name: h, override: g, aliases: b } = p,
              A = { middleware: f, ...p },
              y = AK(h, b);
            if (y.length > 0) {
              if (y.some((E) => n.has(E))) {
                if (!g) throw new Error(`Duplicate middleware name '${D$(h, b)}'`);
                for (let E of y) {
                  let v = e.findIndex((x) => x.name === E || x.aliases?.some((k) => k === E));
                  if (v === -1) continue;
                  let C = e[v];
                  if (C.toMiddleware !== A.toMiddleware || C.relation !== A.relation)
                    throw new Error(
                      `"${D$(C.name, C.aliases)}" middleware ${C.relation} "${C.toMiddleware}" middleware cannot be overridden by "${D$(h, b)}" middleware ${A.relation} "${A.toMiddleware}" middleware.`,
                    );
                  e.splice(v, 1);
                }
              }
              for (let E of y) n.add(E);
            }
            e.push(A);
          },
          clone: () => u(Z3r()),
          use: (f) => {
            f.applyToStack(d);
          },
          remove: (f) => (typeof f == "string" ? s(f) : a(f)),
          removeByTag: (f) => {
            let p = !1,
              h = (g) => {
                let { tags: b, name: A, aliases: y } = g;
                if (b && b.includes(f)) {
                  let E = AK(A, y);
                  for (let v of E) n.delete(v);
                  return ((p = !0), !1);
                }
                return !0;
              };
            return ((t = t.filter(h)), (e = e.filter(h)), p);
          },
          concat: (f) => {
            let p = u(Z3r());
            return (p.use(f), p.identifyOnResolve(r || p.identifyOnResolve() || (f.identifyOnResolve?.() ?? !1)), p);
          },
          applyToStack: u,
          identify: () =>
            m(!0).map((f) => {
              let p = f.step ?? f.relation + " " + f.toMiddleware;
              return D$(f.name, f.aliases) + " - " + p;
            }),
          identifyOnResolve(f) {
            return (typeof f == "boolean" && (r = f), r);
          },
          resolve: (f, p) => {
            for (let h of m()
              .map((g) => g.middleware)
              .reverse())
              f = h(f, p);
            return (r && console.log(d.identify()), f);
          },
        };
      return d;
    },
    r5i = { initialize: 5, serialize: 4, build: 3, finalizeRequest: 2, deserialize: 1 },
    n5i = { high: 3, normal: 2, low: 1 };
  i5i.constructStack = Z3r;
});