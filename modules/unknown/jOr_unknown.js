/**
 * @module jOr
 * @category unknown
 * @label unknown
 * @position 119 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jOr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jOr = T((JSu, $Or) => {
  var k3e,
    nbo = (k3e = MOr()) && typeof k3e == "object" && "default" in k3e ? k3e.default : k3e,
    ibo = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
  function FOr(t) {
    var e = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] },
      r = t.match(/<\/?([^\s]+?)[/\s>]/);
    if (
      r &&
      ((e.name = r[1]), (nbo[r[1]] || t.charAt(t.length - 2) === "/") && (e.voidElement = !0), e.name.startsWith("!--"))
    ) {
      var n = t.indexOf("-->");
      return { type: "comment", comment: n !== -1 ? t.slice(4, n) : "" };
    }
    for (var o = new RegExp(ibo), s = null; (s = o.exec(t)) !== null; )
      if (s[0].trim())
        if (s[1]) {
          var a = s[1].trim(),
            u = [a, ""];
          (a.indexOf("=") > -1 && (u = a.split("=")), (e.attrs[u[0]] = u[1]), o.lastIndex--);
        } else s[2] && (e.attrs[s[2]] = s[3].trim().substring(1, s[3].length - 1));
    return e;
  }
  var obo = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
    sbo = /^\s*$/,
    abo = Object.create(null);
  function UOr(t, e) {
    switch (e.type) {
      case "text":
        return t + e.content;
      case "tag":
        return (
          (t +=
            "<" +
            e.name +
            (e.attrs
              ? (function (r) {
                  var n = [];
                  for (var o in r) n.push(o + '="' + r[o] + '"');
                  return n.length ? " " + n.join(" ") : "";
                })(e.attrs)
              : "") +
            (e.voidElement ? "/>" : ">")),
          e.voidElement ? t : t + e.children.reduce(UOr, "") + "</" + e.name + ">"
        );
      case "comment":
        return t + "<!--" + e.comment + "-->";
    }
  }
  $Or.exports = {
    parse: function (t, e) {
      (e || (e = {}), e.components || (e.components = abo));
      var r,
        n = [],
        o = [],
        s = -1,
        a = !1;
      if (t.indexOf("<") !== 0) {
        var u = t.indexOf("<");
        n.push({ type: "text", content: u === -1 ? t : t.substring(0, u) });
      }
      return (
        t.replace(obo, function (c, m) {
          if (a) {
            if (c !== "</" + r.name + ">") return;
            a = !1;
          }
          var d,
            f = c.charAt(1) !== "/",
            p = c.startsWith("<!--"),
            h = m + c.length,
            g = t.charAt(h);
          if (p) {
            var b = FOr(c);
            return s < 0 ? (n.push(b), n) : ((d = o[s]).children.push(b), n);
          }
          if (
            (f &&
              (s++,
              (r = FOr(c)).type === "tag" && e.components[r.name] && ((r.type = "component"), (a = !0)),
              r.voidElement ||
                a ||
                !g ||
                g === "<" ||
                r.children.push({ type: "text", content: t.slice(h, t.indexOf("<", h)) }),
              s === 0 && n.push(r),
              (d = o[s - 1]) && d.children.push(r),
              (o[s] = r)),
            (!f || r.voidElement) &&
              (s > -1 && (r.voidElement || r.name === c.slice(2, -1)) && (s--, (r = s === -1 ? n : o[s])),
              !a && g !== "<" && g))
          ) {
            d = s === -1 ? n : o[s].children;
            var A = t.indexOf("<", h),
              y = t.slice(h, A === -1 ? void 0 : A);
            (sbo.test(y) && (y = " "),
              ((A > -1 && s + d.length >= 0) || y !== " ") && d.push({ type: "text", content: y }));
          }
        }),
        n
      );
    },
    stringify: function (t) {
      return t.reduce(function (e, r) {
        return e + UOr("", r);
      }, "");
    },
  };
});
var O3e,
  QOr,
  xG,
  GOr,
  SOe,
  j_t,
  qOr,
  K5,
  dx,
  N3e = j(() => {
    ((O3e = (t, e, r, n) => {
      let o = [r, { code: e, ...(n || {}) }];
      if (t?.services?.logger?.forward) return t.services.logger.forward(o, "warn", "react-i18next::", !0);
      (K5(o[0]) && (o[0] = `react-i18next:: ${o[0]}`),
        t?.services?.logger?.warn ? t.services.logger.warn(...o) : console?.warn && console.warn(...o));
    }),
      (QOr = {}),
      (xG = (t, e, r, n) => {
        (K5(r) && QOr[r]) || (K5(r) && (QOr[r] = new Date()), O3e(t, e, r, n));
      }),
      (GOr = (t, e) => () => {
        if (t.isInitialized) e();
        else {
          let r = () => {
            (setTimeout(() => {
              t.off("initialized", r);
            }, 0),
              e());
          };
          t.on("initialized", r);
        }
      }),
      (SOe = (t, e, r) => {
        t.loadNamespaces(e, GOr(t, r));
      }),
      (j_t = (t, e, r, n) => {
        if ((K5(r) && (r = [r]), t.options.preload && t.options.preload.indexOf(e) > -1)) return SOe(t, r, n);
        (r.forEach((o) => {
          t.options.ns.indexOf(o) < 0 && t.options.ns.push(o);
        }),
          t.loadLanguages(e, GOr(t, n)));
      }),
      (qOr = (t, e, r = {}) =>
        !e.languages || !e.languages.length
          ? (xG(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", { languages: e.languages }), !0)
          : e.hasLoadedNamespace(t, {
              lng: r.lng,
              precheck: (n, o) => {
                if (
                  r.bindI18n &&
                  r.bindI18n.indexOf("languageChanging") > -1 &&
                  n.services.backendConnector.backend &&
                  n.isLanguageChangingTo &&
                  !o(n.isLanguageChangingTo, t)
                )
                  return !1;
              },
            })),
      (K5 = (t) => typeof t == "string"),
      (dx = (t) => typeof t == "object" && t !== null));
  });
var ubo,
  cbo,
  lbo,
  HOr,
  VOr = j(() => {
    ((ubo = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g),
      (cbo = {
        "&amp;": "&",
        "&#38;": "&",
        "&lt;": "<",
        "&#60;": "<",
        "&gt;": ">",
        "&#62;": ">",
        "&apos;": "'",
        "&#39;": "'",
        "&quot;": '"',
        "&#34;": '"',
        "&nbsp;": " ",
        "&#160;": " ",
        "&copy;": "\xA9",
        "&#169;": "\xA9",
        "&reg;": "\xAE",
        "&#174;": "\xAE",
        "&hellip;": "\u2026",
        "&#8230;": "\u2026",
        "&#x2F;": "/",
        "&#47;": "/",
      }),
      (lbo = (t) => cbo[t]),
      (HOr = (t) => t.replace(ubo, lbo)));
  });
var Q_t,
  wOe,
  ate,
  P3e = j(() => {
    VOr();
    ((Q_t = {
      bindI18n: "languageChanged",
      bindI18nStore: "",
      transEmptyNodeValue: "",
      transSupportBasicHtmlNodes: !0,
      transWrapTextNodes: "",
      transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
      useSuspense: !0,
      unescape: HOr,
    }),
      (wOe = (t = {}) => {
        Q_t = { ...Q_t, ...t };
      }),
      (ate = () => Q_t));
  });
var WOr,
  xOe,
  gR,
  B3e = j(() => {
    ((xOe = (t) => {
      WOr = t;
    }),
      (gR = () => WOr));
  });
function V_t({
  children: t,
  count: e,
  parent: r,
  i18nKey: n,
  context: o,
  tOptions: s = {},
  values: a,
  defaults: u,
  components: c,
  ns: m,
  i18n: d,
  t: f,
  shouldUnescape: p,
  ...h
}) {
  let g = d || gR();
  if (!g)
    return (
      xG(g, "NO_I18NEXT_INSTANCE", "Trans: You need to pass in an i18next instance using i18nextReactModule", {
        i18nKey: n,
      }),
      t
    );
  let b = f || g.t.bind(g) || ((L) => L),
    A = { ...ate(), ...g.options?.react },
    y = m || b.ns || g.options?.defaultNS;
  y = K5(y) ? [y] : y || ["translation"];
  let E = H_t(t, A, g, n),
    v = u || E || A.transEmptyNodeValue || n,
    { hashTransKey: C } = A,
    x = n || (C ? C(E || v) : E || v);
  g.options?.interpolation?.defaultVariables &&
    (a =
      a && Object.keys(a).length > 0
        ? { ...a, ...g.options.interpolation.defaultVariables }
        : { ...g.options.interpolation.defaultVariables });
  let k =
      a || (e !== void 0 && !g.options?.interpolation?.alwaysFormat) || !t
        ? s.interpolation
        : { interpolation: { ...s.interpolation, prefix: "#$?", suffix: "?$#" } },
    R = { ...s, context: o || s.context, count: e, ...a, ...k, defaultValue: v, ns: y },
    P = x ? b(x, R) : v,
    D = gbo(c, P, g, n),
    O = D || t,
    N = null;
  bbo(D) && ((N = D), (O = t));
  let F = fbo(O, N, P, g, A, R, p),
    B = r ?? A.defaultTransParent;
  return B ? (0, Rf.createElement)(B, h, F) : F;
}
var Rf,
  zOr,
  G_t,
  q_t,
  mbo,
  ute,
  dbo,
  H_t,
  fbo,
  YOr,
  pbo,
  hbo,
  gbo,
  bbo,
  W_t = j(() => {
    ((Rf = Se(Yt(), 1)), (zOr = Se(jOr(), 1)));
    N3e();
    P3e();
    B3e();
    ((G_t = (t, e) => {
      if (!t) return !1;
      let r = t.props?.children ?? t.children;
      return e ? r.length > 0 : !!r;
    }),
      (q_t = (t) => {
        if (!t) return [];
        let e = t.props?.children ?? t.children;
        return t.props?.i18nIsDynamicList ? ute(e) : e;
      }),
      (mbo = (t) => Array.isArray(t) && t.every(Rf.isValidElement)),
      (ute = (t) => (Array.isArray(t) ? t : [t])),
      (dbo = (t, e) => {
        let r = { ...e };
        return ((r.props = Object.assign(t.props, e.props)), r);
      }),
      (H_t = (t, e, r, n) => {
        if (!t) return "";
        let o = "",
          s = ute(t),
          a = e?.transSupportBasicHtmlNodes ? (e.transKeepBasicHtmlNodesFor ?? []) : [];
        return (
          s.forEach((u, c) => {
            if (K5(u)) {
              o += `${u}`;
              return;
            }
            if ((0, Rf.isValidElement)(u)) {
              let { props: m, type: d } = u,
                f = Object.keys(m).length,
                p = a.indexOf(d) > -1,
                h = m.children;
              if (!h && p && !f) {
                o += `<${d}/>`;
                return;
              }
              if ((!h && (!p || f)) || m.i18nIsDynamicList) {
                o += `<${c}></${c}>`;
                return;
              }
              if (p && f === 1 && K5(h)) {
                o += `<${d}>${h}</${d}>`;
                return;
              }
              let g = H_t(h, e, r, n);
              o += `<${c}>${g}</${c}>`;
              return;
            }
            if (u === null) {
              O3e(r, "TRANS_NULL_VALUE", "Passed in a null value as child", { i18nKey: n });
              return;
            }
            if (dx(u)) {
              let { format: m, ...d } = u,
                f = Object.keys(d);
              if (f.length === 1) {
                let p = m ? `${f[0]}, ${m}` : f[0];
                o += `{{${p}}}`;
                return;
              }
              O3e(
                r,
                "TRANS_INVALID_OBJ",
                "Invalid child - Object should only have keys {{ value, format }} (format is optional).",
                { i18nKey: n, child: u },
              );
              return;
            }
            O3e(
              r,
              "TRANS_INVALID_VAR",
              "Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.",
              { i18nKey: n, child: u },
            );
          }),
          o
        );
      }),
      (fbo = (t, e, r, n, o, s, a) => {
        if (r === "") return [];
        let u = o.transKeepBasicHtmlNodesFor || [],
          c = r && new RegExp(u.map((y) => `<${y}`).join("|")).test(r);
        if (!t && !e && !c && !a) return [r];
        let m = e ?? {},
          d = (y) => {
            ute(y).forEach((v) => {
              K5(v) || (G_t(v) ? d(q_t(v)) : dx(v) && !(0, Rf.isValidElement)(v) && Object.assign(m, v));
            });
          };
        d(t);
        let f = zOr.default.parse(`<0>${r}</0>`),
          p = { ...m, ...s },
          h = (y, E, v) => {
            let C = q_t(y),
              x = b(C, E.children, v);
            return (mbo(C) && x.length === 0) || y.props?.i18nIsDynamicList ? C : x;
          },
          g = (y, E, v, C, x) => {
            y.dummy
              ? ((y.children = E), v.push((0, Rf.cloneElement)(y, { key: C }, x ? void 0 : E)))
              : v.push(
                  ...Rf.Children.map([y], (k) => {
                    let R = { ...k.props };
                    return (
                      delete R.i18nIsDynamicList,
                      (0, Rf.createElement)(k.type, { ...R, key: C, ref: k.props.ref ?? k.ref }, x ? null : E)
                    );
                  }),
                );
          },
          b = (y, E, v) => {
            let C = ute(y);
            return ute(E).reduce((k, R, P) => {
              let D =
                R.children?.[0]?.content && n.services.interpolator.interpolate(R.children[0].content, p, n.language);
              if (R.type === "tag") {
                let O = C[parseInt(R.name, 10)];
                (!O && e && (O = e[R.name]), v.length === 1 && !O && (O = v[0][R.name]), O || (O = {}));
                let N = Object.keys(R.attrs).length !== 0 ? dbo({ props: R.attrs }, O) : O,
                  F = (0, Rf.isValidElement)(N),
                  B = F && G_t(R, !0) && !R.voidElement,
                  L = c && dx(N) && N.dummy && !F,
                  G = dx(e) && Object.hasOwnProperty.call(e, R.name);
                if (K5(N)) {
                  let Q = n.services.interpolator.interpolate(N, p, n.language);
                  k.push(Q);
                } else if (G_t(N) || B) {
                  let Q = h(N, R, v);
                  g(N, Q, k, P);
                } else if (L) {
                  let Q = b(C, R.children, v);
                  g(N, Q, k, P);
                } else if (Number.isNaN(parseFloat(R.name)))
                  if (G) {
                    let Q = h(N, R, v);
                    g(N, Q, k, P, R.voidElement);
                  } else if (o.transSupportBasicHtmlNodes && u.indexOf(R.name) > -1)
                    if (R.voidElement) k.push((0, Rf.createElement)(R.name, { key: `${R.name}-${P}` }));
                    else {
                      let Q = b(C, R.children, v);
                      k.push((0, Rf.createElement)(R.name, { key: `${R.name}-${P}` }, Q));
                    }
                  else if (R.voidElement) k.push(`<${R.name} />`);
                  else {
                    let Q = b(C, R.children, v);
                    k.push(`<${R.name}>${Q}</${R.name}>`);
                  }
                else if (dx(N) && !F) {
                  let Q = R.children[0] ? D : null;
                  Q && k.push(Q);
                } else g(N, D, k, P, R.children.length !== 1 || !D);
              } else if (R.type === "text") {
                let O = o.transWrapTextNodes,
                  N = a
                    ? o.unescape(n.services.interpolator.interpolate(R.content, p, n.language))
                    : n.services.interpolator.interpolate(R.content, p, n.language);
                O ? k.push((0, Rf.createElement)(O, { key: `${R.name}-${P}` }, N)) : k.push(N);
              }
              return k;
            }, []);
          },
          A = b([{ dummy: !0, children: t || [] }], f, ute(t || []));
        return q_t(A[0]);
      }),
      (YOr = (t, e, r) => {
        let n = t.key || e,
          o = (0, Rf.cloneElement)(t, { key: n });
        if (!o.props || !o.props.children || (r.indexOf(`${e}/>`) < 0 && r.indexOf(`${e} />`) < 0)) return o;
        function s() {
          return (0, Rf.createElement)(Rf.Fragment, null, o);
        }
        return (0, Rf.createElement)(s, { key: n });
      }),
      (pbo = (t, e) => t.map((r, n) => YOr(r, n, e))),
      (hbo = (t, e) => {
        let r = {};
        return (
          Object.keys(t).forEach((n) => {
            Object.assign(r, { [n]: YOr(t[n], n, e) });
          }),
          r
        );
      }),
      (gbo = (t, e, r, n) =>
        t
          ? Array.isArray(t)
            ? pbo(t, e)
            : dx(t)
              ? hbo(t, e)
              : (xG(r, "TRANS_INVALID_COMPONENTS", '<Trans /> "components" prop expects an object or array', {
                  i18nKey: n,
                }),
                null)
          : null),
      (bbo = (t) =>
        !dx(t) || Array.isArray(t)
          ? !1
          : Object.keys(t).reduce((e, r) => e && Number.isNaN(Number.parseFloat(r)), !0)));
  });
var TOe,
  z_t = j(() => {
    P3e();
    B3e();
    TOe = {
      type: "3rdParty",
      init(t) {
        (wOe(t.options.react), xOe(t));
      },
    };
  });
var KOr,
  TG,
  DOe,
  DG = j(() => {
    KOr = Se(Yt(), 1);
    P3e();
    B3e();
    z_t();
    ((TG = (0, KOr.createContext)()),
      (DOe = class {
        constructor() {
          this.usedNamespaces = {};
        }
        addUsedNamespaces(e) {
          e.forEach((r) => {
            this.usedNamespaces[r] || (this.usedNamespaces[r] = !0);
          });
        }
        getUsedNamespaces() {
          return Object.keys(this.usedNamespaces);
        }
      }));
  });
function bb({
  children: t,
  count: e,
  parent: r,
  i18nKey: n,
  context: o,
  tOptions: s = {},
  values: a,
  defaults: u,
  components: c,
  ns: m,
  i18n: d,
  t: f,
  shouldUnescape: p,
  ...h
}) {
  let { i18n: g, defaultNS: b } = (0, JOr.useContext)(TG) || {},
    A = d || g || gR(),
    y = f || A?.t.bind(A);
  return V_t({
    children: t,
    count: e,
    parent: r,
    i18nKey: n,
    context: o,
    tOptions: s,
    values: a,
    defaults: u,
    components: c,
    ns: m || y?.ns || b || A?.options?.defaultNS,
    i18n: A,
    t: f,
    shouldUnescape: p,
    ...h,
  });
}
var JOr,
  XOr = j(() => {
    JOr = Se(Yt(), 1);
    W_t();
    DG();
  });
var i6,
  Abo,
  ZOr,
  ybo,
  rr,
  IOe = j(() => {
    i6 = Se(Yt(), 1);
    DG();
    N3e();
    ((Abo = (t, e) => {
      let r = (0, i6.useRef)();
      return (
        (0, i6.useEffect)(() => {
          r.current = e ? r.current : t;
        }, [t, e]),
        r.current
      );
    }),
      (ZOr = (t, e, r, n) => t.getFixedT(e, r, n)),
      (ybo = (t, e, r, n) => (0, i6.useCallback)(ZOr(t, e, r, n), [t, e, r, n])),
      (rr = (t, e = {}) => {
        let { i18n: r } = e,
          { i18n: n, defaultNS: o } = (0, i6.useContext)(TG) || {},
          s = r || n || gR();
        if ((s && !s.reportNamespaces && (s.reportNamespaces = new DOe()), !s)) {
          xG(
            s,
            "NO_I18NEXT_INSTANCE",
            "useTranslation: You will need to pass in an i18next instance by using initReactI18next",
          );
          let C = (k, R) =>
              K5(R) ? R : dx(R) && K5(R.defaultValue) ? R.defaultValue : Array.isArray(k) ? k[k.length - 1] : k,
            x = [C, {}, !1];
          return ((x.t = C), (x.i18n = {}), (x.ready = !1), x);
        }
        s.options.react?.wait &&
          xG(
            s,
            "DEPRECATED_OPTION",
            "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.",
          );
        let a = { ...ate(), ...s.options.react, ...e },
          { useSuspense: u, keyPrefix: c } = a,
          m = t || o || s.options?.defaultNS;
        ((m = K5(m) ? [m] : m || ["translation"]), s.reportNamespaces.addUsedNamespaces?.(m));
        let d = (s.isInitialized || s.initializedStoreOnce) && m.every((C) => qOr(C, s, a)),
          f = ybo(s, e.lng || null, a.nsMode === "fallback" ? m : m[0], c),
          p = () => f,
          h = () => ZOr(s, e.lng || null, a.nsMode === "fallback" ? m : m[0], c),
          [g, b] = (0, i6.useState)(p),
          A = m.join();
        e.lng && (A = `${e.lng}${A}`);
        let y = Abo(A),
          E = (0, i6.useRef)(!0);
        ((0, i6.useEffect)(() => {
          let { bindI18n: C, bindI18nStore: x } = a;
          ((E.current = !0),
            !d &&
              !u &&
              (e.lng
                ? j_t(s, e.lng, m, () => {
                    E.current && b(h);
                  })
                : SOe(s, m, () => {
                    E.current && b(h);
                  })),
            d && y && y !== A && E.current && b(h));
          let k = () => {
            E.current && b(h);
          };
          return (
            C && s?.on(C, k),
            x && s?.store.on(x, k),
            () => {
              ((E.current = !1),
                s && C && C?.split(" ").forEach((R) => s.off(R, k)),
                x && s && x.split(" ").forEach((R) => s.store.off(R, k)));
            }
          );
        }, [s, A]),
          (0, i6.useEffect)(() => {
            E.current && d && b(p);
          }, [s, c, d]));
        let v = [g, s, d];
        if (((v.t = g), (v.i18n = s), (v.ready = d), d || (!d && !u))) return v;
        throw new Promise((C) => {
          e.lng ? j_t(s, e.lng, m, () => C()) : SOe(s, m, () => C());
        });
      }));
  });
var eNr,
  tNr = j(() => {
    eNr = Se(Yt(), 1);
    IOe();
    N3e();
  });
var rNr = j(() => {
  IOe();
});
var nNr,
  iNr = j(() => {
    nNr = Se(Yt(), 1);
    DG();
  });
var Ebo,
  Y_t = j(() => {
    Ebo = Se(Yt(), 1);
    DG();
  });
var Sbo,
  oNr = j(() => {
    Sbo = Se(Yt(), 1);
    Y_t();
    DG();
    N3e();
  });
var Hn = j(() => {
  XOr();
  W_t();
  IOe();
  tNr();
  rNr();
  iNr();
  oNr();
  Y_t();
  z_t();
  P3e();
  B3e();
  DG();
});