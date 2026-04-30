/**
 * @module F8r
 * @category cli/args
 * @label yargs
 * @position 1836 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (F8r) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var F8r = T((Fil, VMi) => {
  "use strict";
  var cnu = Ae("util"),
    UMi = Ae("path"),
    lnu = Ae("fs");
  function iTe(t) {
    if (
      ((t !== t.toLowerCase() && t !== t.toUpperCase()) || (t = t.toLowerCase()),
      t.indexOf("-") === -1 && t.indexOf("_") === -1)
    )
      return t;
    {
      let r = "",
        n = !1,
        o = t.match(/^-+/);
      for (let s = o ? o[0].length : 0; s < t.length; s++) {
        let a = t.charAt(s);
        (n && ((n = !1), (a = a.toUpperCase())),
          s !== 0 && (a === "-" || a === "_") ? (n = !0) : a !== "-" && a !== "_" && (r += a));
      }
      return r;
    }
  }
  function GMi(t, e) {
    let r = t.toLowerCase();
    e = e || "-";
    let n = "";
    for (let o = 0; o < t.length; o++) {
      let s = r.charAt(o),
        a = t.charAt(o);
      s !== a && o > 0 ? (n += `${e}${r.charAt(o)}`) : (n += a);
    }
    return n;
  }
  function qMi(t) {
    return t == null
      ? !1
      : typeof t == "number" || /^0x[0-9a-f]+$/i.test(t)
        ? !0
        : /^0[^.]/.test(t)
          ? !1
          : /^[-]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(t);
  }
  function mnu(t) {
    if (Array.isArray(t)) return t.map((a) => (typeof a != "string" ? a + "" : a));
    t = t.trim();
    let e = 0,
      r = null,
      n = null,
      o = null,
      s = [];
    for (let a = 0; a < t.length; a++) {
      if (((r = n), (n = t.charAt(a)), n === " " && !o)) {
        r !== " " && e++;
        continue;
      }
      (n === o ? (o = null) : (n === "'" || n === '"') && !o && (o = n), s[e] || (s[e] = ""), (s[e] += n));
    }
    return s;
  }
  var ow;
  (function (t) {
    ((t.BOOLEAN = "boolean"), (t.STRING = "string"), (t.NUMBER = "number"), (t.ARRAY = "array"));
  })(ow || (ow = {}));
  var qN,
    M8r = class {
      constructor(e) {
        qN = e;
      }
      parse(e, r) {
        let n = Object.assign(
            {
              alias: void 0,
              array: void 0,
              boolean: void 0,
              config: void 0,
              configObjects: void 0,
              configuration: void 0,
              coerce: void 0,
              count: void 0,
              default: void 0,
              envPrefix: void 0,
              narg: void 0,
              normalize: void 0,
              string: void 0,
              number: void 0,
              __: void 0,
              key: void 0,
            },
            r,
          ),
          o = mnu(e),
          s = typeof e == "string",
          a = dnu(Object.assign(Object.create(null), n.alias)),
          u = Object.assign(
            {
              "boolean-negation": !0,
              "camel-case-expansion": !0,
              "combine-arrays": !1,
              "dot-notation": !0,
              "duplicate-arguments-array": !0,
              "flatten-duplicate-arrays": !0,
              "greedy-arrays": !0,
              "halt-at-non-option": !1,
              "nargs-eats-options": !1,
              "negation-prefix": "no-",
              "parse-numbers": !0,
              "parse-positional-numbers": !0,
              "populate--": !1,
              "set-placeholder-key": !1,
              "short-option-groups": !0,
              "strip-aliased": !1,
              "strip-dashed": !1,
              "unknown-options-as-args": !1,
            },
            n.configuration,
          ),
          c = Object.assign(Object.create(null), n.default),
          m = n.configObjects || [],
          d = n.envPrefix,
          f = u["populate--"],
          p = f ? "--" : "_",
          h = Object.create(null),
          g = Object.create(null),
          b = n.__ || qN.format,
          A = {
            aliases: Object.create(null),
            arrays: Object.create(null),
            bools: Object.create(null),
            strings: Object.create(null),
            numbers: Object.create(null),
            counts: Object.create(null),
            normalize: Object.create(null),
            configs: Object.create(null),
            nargs: Object.create(null),
            coercions: Object.create(null),
            keys: [],
          },
          y = /^-([0-9]+(\.[0-9]+)?|\.[0-9]+)$/,
          E = new RegExp("^--" + u["negation-prefix"] + "(.+)");
        ([]
          .concat(n.array || [])
          .filter(Boolean)
          .forEach(function (V) {
            let ee = typeof V == "object" ? V.key : V,
              Ce = Object.keys(V)
                .map(function (pe) {
                  return { boolean: "bools", string: "strings", number: "numbers" }[pe];
                })
                .filter(Boolean)
                .pop();
            (Ce && (A[Ce][ee] = !0), (A.arrays[ee] = !0), A.keys.push(ee));
          }),
          []
            .concat(n.boolean || [])
            .filter(Boolean)
            .forEach(function (V) {
              ((A.bools[V] = !0), A.keys.push(V));
            }),
          []
            .concat(n.string || [])
            .filter(Boolean)
            .forEach(function (V) {
              ((A.strings[V] = !0), A.keys.push(V));
            }),
          []
            .concat(n.number || [])
            .filter(Boolean)
            .forEach(function (V) {
              ((A.numbers[V] = !0), A.keys.push(V));
            }),
          []
            .concat(n.count || [])
            .filter(Boolean)
            .forEach(function (V) {
              ((A.counts[V] = !0), A.keys.push(V));
            }),
          []
            .concat(n.normalize || [])
            .filter(Boolean)
            .forEach(function (V) {
              ((A.normalize[V] = !0), A.keys.push(V));
            }),
          typeof n.narg == "object" &&
            Object.entries(n.narg).forEach(([V, ee]) => {
              typeof ee == "number" && ((A.nargs[V] = ee), A.keys.push(V));
            }),
          typeof n.coerce == "object" &&
            Object.entries(n.coerce).forEach(([V, ee]) => {
              typeof ee == "function" && ((A.coercions[V] = ee), A.keys.push(V));
            }),
          typeof n.config < "u" &&
            (Array.isArray(n.config) || typeof n.config == "string"
              ? []
                  .concat(n.config)
                  .filter(Boolean)
                  .forEach(function (V) {
                    A.configs[V] = !0;
                  })
              : typeof n.config == "object" &&
                Object.entries(n.config).forEach(([V, ee]) => {
                  (typeof ee == "boolean" || typeof ee == "function") && (A.configs[V] = ee);
                })),
          q(n.key, a, n.default, A.arrays),
          Object.keys(c).forEach(function (V) {
            (A.aliases[V] || []).forEach(function (ee) {
              c[ee] = c[V];
            });
          }));
        let v = null;
        ge();
        let C = [],
          x = Object.assign(Object.create(null), { _: [] }),
          k = {};
        for (let V = 0; V < o.length; V++) {
          let ee = o[V],
            Ce = ee.replace(/^-{3,}/, "---"),
            pe,
            be,
            Ne,
            Ge,
            Ze,
            Ye;
          if (ee !== "--" && /^-/.test(ee) && Z(ee)) R(ee);
          else if (Ce.match(/^---+(=|$)/)) {
            R(ee);
            continue;
          } else if (ee.match(/^--.+=/) || (!u["short-option-groups"] && ee.match(/^-.+=/)))
            ((Ge = ee.match(/^--?([^=]+)=([\s\S]*)$/)),
              Ge !== null &&
                Array.isArray(Ge) &&
                Ge.length >= 3 &&
                (ne(Ge[1], A.arrays)
                  ? (V = D(V, Ge[1], o, Ge[2]))
                  : ne(Ge[1], A.nargs) !== !1
                    ? (V = P(V, Ge[1], o, Ge[2]))
                    : O(Ge[1], Ge[2], !0)));
          else if (ee.match(E) && u["boolean-negation"])
            ((Ge = ee.match(E)),
              Ge !== null &&
                Array.isArray(Ge) &&
                Ge.length >= 2 &&
                ((be = Ge[1]), O(be, ne(be, A.arrays) ? [!1] : !1)));
          else if (ee.match(/^--.+/) || (!u["short-option-groups"] && ee.match(/^-[^-]+/)))
            ((Ge = ee.match(/^--?(.+)/)),
              Ge !== null &&
                Array.isArray(Ge) &&
                Ge.length >= 2 &&
                ((be = Ge[1]),
                ne(be, A.arrays)
                  ? (V = D(V, be, o))
                  : ne(be, A.nargs) !== !1
                    ? (V = P(V, be, o))
                    : ((Ze = o[V + 1]),
                      (Ze !== void 0 && (!Ze.match(/^-/) || Ze.match(y)) && !ne(be, A.bools) && !ne(be, A.counts)) ||
                      /^(true|false)$/.test(Ze)
                        ? (O(be, Ze), V++)
                        : O(be, ue(be)))));
          else if (ee.match(/^-.\..+=/))
            ((Ge = ee.match(/^-([^=]+)=([\s\S]*)$/)),
              Ge !== null && Array.isArray(Ge) && Ge.length >= 3 && O(Ge[1], Ge[2]));
          else if (ee.match(/^-.\..+/) && !ee.match(y))
            ((Ze = o[V + 1]),
              (Ge = ee.match(/^-(.\..+)/)),
              Ge !== null &&
                Array.isArray(Ge) &&
                Ge.length >= 2 &&
                ((be = Ge[1]),
                Ze !== void 0 && !Ze.match(/^-/) && !ne(be, A.bools) && !ne(be, A.counts)
                  ? (O(be, Ze), V++)
                  : O(be, ue(be))));
          else if (ee.match(/^-[^-]+/) && !ee.match(y)) {
            ((Ne = ee.slice(1, -1).split("")), (pe = !1));
            for (let _e = 0; _e < Ne.length; _e++) {
              if (((Ze = ee.slice(_e + 2)), Ne[_e + 1] && Ne[_e + 1] === "=")) {
                ((Ye = ee.slice(_e + 3)),
                  (be = Ne[_e]),
                  ne(be, A.arrays) ? (V = D(V, be, o, Ye)) : ne(be, A.nargs) !== !1 ? (V = P(V, be, o, Ye)) : O(be, Ye),
                  (pe = !0));
                break;
              }
              if (Ze === "-") {
                O(Ne[_e], Ze);
                continue;
              }
              if (/[A-Za-z]/.test(Ne[_e]) && /^-?\d+(\.\d*)?(e-?\d+)?$/.test(Ze) && ne(Ze, A.bools) === !1) {
                (O(Ne[_e], Ze), (pe = !0));
                break;
              }
              if (Ne[_e + 1] && Ne[_e + 1].match(/\W/)) {
                (O(Ne[_e], Ze), (pe = !0));
                break;
              } else O(Ne[_e], ue(Ne[_e]));
            }
            ((be = ee.slice(-1)[0]),
              !pe &&
                be !== "-" &&
                (ne(be, A.arrays)
                  ? (V = D(V, be, o))
                  : ne(be, A.nargs) !== !1
                    ? (V = P(V, be, o))
                    : ((Ze = o[V + 1]),
                      (Ze !== void 0 &&
                        (!/^(-|--)[^-]/.test(Ze) || Ze.match(y)) &&
                        !ne(be, A.bools) &&
                        !ne(be, A.counts)) ||
                      /^(true|false)$/.test(Ze)
                        ? (O(be, Ze), V++)
                        : O(be, ue(be)))));
          } else if (ee.match(/^-[0-9]$/) && ee.match(y) && ne(ee.slice(1), A.bools))
            ((be = ee.slice(1)), O(be, ue(be)));
          else if (ee === "--") {
            C = o.slice(V + 1);
            break;
          } else if (u["halt-at-non-option"]) {
            C = o.slice(V);
            break;
          } else R(ee);
        }
        (K(x, !0),
          K(x, !1),
          L(x),
          Q(),
          Y(x, A.aliases, c, !0),
          H(x),
          u["set-placeholder-key"] && U(x),
          Object.keys(A.counts).forEach(function (V) {
            X(x, V.split(".")) || O(V, 0);
          }),
          f && C.length && (x[p] = []),
          C.forEach(function (V) {
            x[p].push(V);
          }),
          u["camel-case-expansion"] &&
            u["strip-dashed"] &&
            Object.keys(x)
              .filter((V) => V !== "--" && V.includes("-"))
              .forEach((V) => {
                delete x[V];
              }),
          u["strip-aliased"] &&
            [].concat(...Object.keys(a).map((V) => a[V])).forEach((V) => {
              (u["camel-case-expansion"] &&
                V.includes("-") &&
                delete x[
                  V.split(".")
                    .map((ee) => iTe(ee))
                    .join(".")
                ],
                delete x[V]);
            }));
        function R(V) {
          let ee = B("_", V);
          (typeof ee == "string" || typeof ee == "number") && x._.push(ee);
        }
        function P(V, ee, Ce, pe) {
          let be,
            Ne = ne(ee, A.nargs);
          if (((Ne = typeof Ne != "number" || isNaN(Ne) ? 1 : Ne), Ne === 0))
            return (fe(pe) || (v = Error(b("Argument unexpected for: %s", ee))), O(ee, ue(ee)), V);
          let Ge = fe(pe) ? 0 : 1;
          if (u["nargs-eats-options"])
            (Ce.length - (V + 1) + Ge < Ne && (v = Error(b("Not enough arguments following: %s", ee))), (Ge = Ne));
          else {
            for (be = V + 1; be < Ce.length && (!Ce[be].match(/^-[^0-9]/) || Ce[be].match(y) || Z(Ce[be])); be++) Ge++;
            Ge < Ne && (v = Error(b("Not enough arguments following: %s", ee)));
          }
          let Ze = Math.min(Ge, Ne);
          for (!fe(pe) && Ze > 0 && (O(ee, pe), Ze--), be = V + 1; be < Ze + V + 1; be++) O(ee, Ce[be]);
          return V + Ze;
        }
        function D(V, ee, Ce, pe) {
          let be = [],
            Ne = pe || Ce[V + 1],
            Ge = ne(ee, A.nargs);
          if (ne(ee, A.bools) && !/^(true|false)$/.test(Ne)) be.push(!0);
          else if (fe(Ne) || (fe(pe) && /^-/.test(Ne) && !y.test(Ne) && !Z(Ne))) {
            if (c[ee] !== void 0) {
              let Ze = c[ee];
              be = Array.isArray(Ze) ? Ze : [Ze];
            }
          } else {
            fe(pe) || be.push(F(ee, pe, !0));
            for (
              let Ze = V + 1;
              Ze < Ce.length &&
              !(
                (!u["greedy-arrays"] && be.length > 0) ||
                (Ge && typeof Ge == "number" && be.length >= Ge) ||
                ((Ne = Ce[Ze]), /^-/.test(Ne) && !y.test(Ne) && !Z(Ne))
              );
              Ze++
            )
              ((V = Ze), be.push(F(ee, Ne, s)));
          }
          return (
            typeof Ge == "number" &&
              ((Ge && be.length < Ge) || (isNaN(Ge) && be.length === 0)) &&
              (v = Error(b("Not enough arguments following: %s", ee))),
            O(ee, be),
            V
          );
        }
        function O(V, ee, Ce = s) {
          if (/-/.test(V) && u["camel-case-expansion"]) {
            let Ne = V.split(".")
              .map(function (Ge) {
                return iTe(Ge);
              })
              .join(".");
            N(V, Ne);
          }
          let pe = F(V, ee, Ce),
            be = V.split(".");
          (J(x, be, pe),
            A.aliases[V] &&
              A.aliases[V].forEach(function (Ne) {
                let Ge = Ne.split(".");
                J(x, Ge, pe);
              }),
            be.length > 1 &&
              u["dot-notation"] &&
              (A.aliases[be[0]] || []).forEach(function (Ne) {
                let Ge = Ne.split("."),
                  Ze = [].concat(be);
                (Ze.shift(), (Ge = Ge.concat(Ze)), (A.aliases[V] || []).includes(Ge.join(".")) || J(x, Ge, pe));
              }),
            ne(V, A.normalize) &&
              !ne(V, A.arrays) &&
              [V].concat(A.aliases[V] || []).forEach(function (Ge) {
                Object.defineProperty(k, Ge, {
                  enumerable: !0,
                  get() {
                    return ee;
                  },
                  set(Ze) {
                    ee = typeof Ze == "string" ? qN.normalize(Ze) : Ze;
                  },
                });
              }));
        }
        function N(V, ee) {
          ((A.aliases[V] && A.aliases[V].length) || ((A.aliases[V] = [ee]), (h[ee] = !0)),
            (A.aliases[ee] && A.aliases[ee].length) || N(ee, V));
        }
        function F(V, ee, Ce) {
          (Ce && (ee = fnu(ee)), (ne(V, A.bools) || ne(V, A.counts)) && typeof ee == "string" && (ee = ee === "true"));
          let pe = Array.isArray(ee)
            ? ee.map(function (be) {
                return B(V, be);
              })
            : B(V, ee);
          return (
            ne(V, A.counts) && (fe(pe) || typeof pe == "boolean") && (pe = N8r()),
            ne(V, A.normalize) &&
              ne(V, A.arrays) &&
              (Array.isArray(ee) ? (pe = ee.map((be) => qN.normalize(be))) : (pe = qN.normalize(ee))),
            pe
          );
        }
        function B(V, ee) {
          return (
            (!u["parse-positional-numbers"] && V === "_") ||
              (!ne(V, A.strings) &&
                !ne(V, A.bools) &&
                !Array.isArray(ee) &&
                ((qMi(ee) && u["parse-numbers"] && Number.isSafeInteger(Math.floor(parseFloat(`${ee}`)))) ||
                  (!fe(ee) && ne(V, A.numbers))) &&
                (ee = Number(ee))),
            ee
          );
        }
        function L(V) {
          let ee = Object.create(null);
          (Y(ee, A.aliases, c),
            Object.keys(A.configs).forEach(function (Ce) {
              let pe = V[Ce] || ee[Ce];
              if (pe)
                try {
                  let be = null,
                    Ne = qN.resolve(qN.cwd(), pe),
                    Ge = A.configs[Ce];
                  if (typeof Ge == "function") {
                    try {
                      be = Ge(Ne);
                    } catch (Ze) {
                      be = Ze;
                    }
                    if (be instanceof Error) {
                      v = be;
                      return;
                    }
                  } else be = qN.require(Ne);
                  G(be);
                } catch (be) {
                  be.name === "PermissionDenied"
                    ? (v = be)
                    : V[Ce] && (v = Error(b("Invalid JSON config file: %s", pe)));
                }
            }));
        }
        function G(V, ee) {
          Object.keys(V).forEach(function (Ce) {
            let pe = V[Ce],
              be = ee ? ee + "." + Ce : Ce;
            typeof pe == "object" && pe !== null && !Array.isArray(pe) && u["dot-notation"]
              ? G(pe, be)
              : (!X(x, be.split(".")) || (ne(be, A.arrays) && u["combine-arrays"])) && O(be, pe);
          });
        }
        function Q() {
          typeof m < "u" &&
            m.forEach(function (V) {
              G(V);
            });
        }
        function K(V, ee) {
          if (typeof d > "u") return;
          let Ce = typeof d == "string" ? d : "",
            pe = qN.env();
          Object.keys(pe).forEach(function (be) {
            if (Ce === "" || be.lastIndexOf(Ce, 0) === 0) {
              let Ne = be.split("__").map(function (Ge, Ze) {
                return (Ze === 0 && (Ge = Ge.substring(Ce.length)), iTe(Ge));
              });
              ((ee && A.configs[Ne.join(".")]) || !ee) && !X(V, Ne) && O(Ne.join("."), pe[be]);
            }
          });
        }
        function H(V) {
          let ee,
            Ce = new Set();
          Object.keys(V).forEach(function (pe) {
            if (!Ce.has(pe) && ((ee = ne(pe, A.coercions)), typeof ee == "function"))
              try {
                let be = B(pe, ee(V[pe]));
                [].concat(A.aliases[pe] || [], pe).forEach((Ne) => {
                  (Ce.add(Ne), (V[Ne] = be));
                });
              } catch (be) {
                v = be;
              }
          });
        }
        function U(V) {
          return (
            A.keys.forEach((ee) => {
              ~ee.indexOf(".") || (typeof V[ee] > "u" && (V[ee] = void 0));
            }),
            V
          );
        }
        function Y(V, ee, Ce, pe = !1) {
          Object.keys(Ce).forEach(function (be) {
            X(V, be.split(".")) ||
              (J(V, be.split("."), Ce[be]),
              pe && (g[be] = !0),
              (ee[be] || []).forEach(function (Ne) {
                X(V, Ne.split(".")) || J(V, Ne.split("."), Ce[be]);
              }));
          });
        }
        function X(V, ee) {
          let Ce = V;
          (u["dot-notation"] || (ee = [ee.join(".")]),
            ee.slice(0, -1).forEach(function (be) {
              Ce = Ce[be] || {};
            }));
          let pe = ee[ee.length - 1];
          return typeof Ce != "object" ? !1 : pe in Ce;
        }
        function J(V, ee, Ce) {
          let pe = V;
          (u["dot-notation"] || (ee = [ee.join(".")]),
            ee.slice(0, -1).forEach(function (Ye) {
              ((Ye = $Mi(Ye)),
                typeof pe == "object" && pe[Ye] === void 0 && (pe[Ye] = {}),
                typeof pe[Ye] != "object" || Array.isArray(pe[Ye])
                  ? (Array.isArray(pe[Ye]) ? pe[Ye].push({}) : (pe[Ye] = [pe[Ye], {}]),
                    (pe = pe[Ye][pe[Ye].length - 1]))
                  : (pe = pe[Ye]));
            }));
          let be = $Mi(ee[ee.length - 1]),
            Ne = ne(ee.join("."), A.arrays),
            Ge = Array.isArray(Ce),
            Ze = u["duplicate-arguments-array"];
          (!Ze &&
            ne(be, A.nargs) &&
            ((Ze = !0),
            ((!fe(pe[be]) && A.nargs[be] === 1) || (Array.isArray(pe[be]) && pe[be].length === A.nargs[be])) &&
              (pe[be] = void 0)),
            Ce === N8r()
              ? (pe[be] = N8r(pe[be]))
              : Array.isArray(pe[be])
                ? Ze && Ne && Ge
                  ? (pe[be] = u["flatten-duplicate-arrays"]
                      ? pe[be].concat(Ce)
                      : (Array.isArray(pe[be][0]) ? pe[be] : [pe[be]]).concat([Ce]))
                  : !Ze && !!Ne == !!Ge
                    ? (pe[be] = Ce)
                    : (pe[be] = pe[be].concat([Ce]))
                : pe[be] === void 0 && Ne
                  ? (pe[be] = Ge ? Ce : [Ce])
                  : Ze && !(pe[be] === void 0 || ne(be, A.counts) || ne(be, A.bools))
                    ? (pe[be] = [pe[be], Ce])
                    : (pe[be] = Ce));
        }
        function q(...V) {
          V.forEach(function (ee) {
            Object.keys(ee || {}).forEach(function (Ce) {
              A.aliases[Ce] ||
                ((A.aliases[Ce] = [].concat(a[Ce] || [])),
                A.aliases[Ce].concat(Ce).forEach(function (pe) {
                  if (/-/.test(pe) && u["camel-case-expansion"]) {
                    let be = iTe(pe);
                    be !== Ce && A.aliases[Ce].indexOf(be) === -1 && (A.aliases[Ce].push(be), (h[be] = !0));
                  }
                }),
                A.aliases[Ce].concat(Ce).forEach(function (pe) {
                  if (pe.length > 1 && /[A-Z]/.test(pe) && u["camel-case-expansion"]) {
                    let be = GMi(pe, "-");
                    be !== Ce && A.aliases[Ce].indexOf(be) === -1 && (A.aliases[Ce].push(be), (h[be] = !0));
                  }
                }),
                A.aliases[Ce].forEach(function (pe) {
                  A.aliases[pe] = [Ce].concat(
                    A.aliases[Ce].filter(function (be) {
                      return pe !== be;
                    }),
                  );
                }));
            });
          });
        }
        function ne(V, ee) {
          let Ce = [].concat(A.aliases[V] || [], V),
            pe = Object.keys(ee),
            be = Ce.find((Ne) => pe.includes(Ne));
          return be ? ee[be] : !1;
        }
        function de(V) {
          let ee = Object.keys(A);
          return [].concat(ee.map((pe) => A[pe])).some(function (pe) {
            return Array.isArray(pe) ? pe.includes(V) : pe[V];
          });
        }
        function ce(V, ...ee) {
          return [].concat(...ee).some(function (pe) {
            let be = V.match(pe);
            return be && de(be[1]);
          });
        }
        function ye(V) {
          if (V.match(y) || !V.match(/^-[^-]+/)) return !1;
          let ee = !0,
            Ce,
            pe = V.slice(1).split("");
          for (let be = 0; be < pe.length; be++) {
            if (((Ce = V.slice(be + 2)), !de(pe[be]))) {
              ee = !1;
              break;
            }
            if (
              (pe[be + 1] && pe[be + 1] === "=") ||
              Ce === "-" ||
              (/[A-Za-z]/.test(pe[be]) && /^-?\d+(\.\d*)?(e-?\d+)?$/.test(Ce)) ||
              (pe[be + 1] && pe[be + 1].match(/\W/))
            )
              break;
          }
          return ee;
        }
        function Z(V) {
          return u["unknown-options-as-args"] && oe(V);
        }
        function oe(V) {
          return (
            (V = V.replace(/^-{3,}/, "--")),
            V.match(y) || ye(V)
              ? !1
              : !ce(
                  V,
                  /^-+([^=]+?)=[\s\S]*$/,
                  E,
                  /^-+([^=]+?)$/,
                  /^-+([^=]+?)-$/,
                  /^-+([^=]+?\d+)$/,
                  /^-+([^=]+?)\W+.*$/,
                )
          );
        }
        function ue(V) {
          return !ne(V, A.bools) && !ne(V, A.counts) && `${V}` in c ? c[V] : he(se(V));
        }
        function he(V) {
          return { [ow.BOOLEAN]: !0, [ow.STRING]: "", [ow.NUMBER]: void 0, [ow.ARRAY]: [] }[V];
        }
        function se(V) {
          let ee = ow.BOOLEAN;
          return (
            ne(V, A.strings)
              ? (ee = ow.STRING)
              : ne(V, A.numbers)
                ? (ee = ow.NUMBER)
                : ne(V, A.bools)
                  ? (ee = ow.BOOLEAN)
                  : ne(V, A.arrays) && (ee = ow.ARRAY),
            ee
          );
        }
        function fe(V) {
          return V === void 0;
        }
        function ge() {
          Object.keys(A.counts).find((V) =>
            ne(V, A.arrays)
              ? ((v = Error(b("Invalid configuration: %s, opts.count excludes opts.array.", V))), !0)
              : ne(V, A.nargs)
                ? ((v = Error(b("Invalid configuration: %s, opts.count excludes opts.narg.", V))), !0)
                : !1,
          );
        }
        return {
          aliases: Object.assign({}, A.aliases),
          argv: Object.assign(k, x),
          configuration: u,
          defaulted: Object.assign({}, g),
          error: v,
          newAliases: Object.assign({}, h),
        };
      }
    };
  function dnu(t) {
    let e = [],
      r = Object.create(null),
      n = !0;
    for (
      Object.keys(t).forEach(function (o) {
        e.push([].concat(t[o], o));
      });
      n;
    ) {
      n = !1;
      for (let o = 0; o < e.length; o++)
        for (let s = o + 1; s < e.length; s++)
          if (
            e[o].filter(function (u) {
              return e[s].indexOf(u) !== -1;
            }).length
          ) {
            ((e[o] = e[o].concat(e[s])), e.splice(s, 1), (n = !0));
            break;
          }
    }
    return (
      e.forEach(function (o) {
        o = o.filter(function (a, u, c) {
          return c.indexOf(a) === u;
        });
        let s = o.pop();
        s !== void 0 && typeof s == "string" && (r[s] = o);
      }),
      r
    );
  }
  function N8r(t) {
    return t !== void 0 ? t + 1 : 1;
  }
  function $Mi(t) {
    return t === "__proto__" ? "___proto___" : t;
  }
  function fnu(t) {
    return typeof t == "string" && (t[0] === "'" || t[0] === '"') && t[t.length - 1] === t[0]
      ? t.substring(1, t.length - 1)
      : t;
  }
  var P8r,
    B8r,
    L8r,
    jMi =
      process && process.env && process.env.YARGS_MIN_NODE_VERSION ? Number(process.env.YARGS_MIN_NODE_VERSION) : 12,
    QMi =
      (B8r = (P8r = process == null ? void 0 : process.versions) === null || P8r === void 0 ? void 0 : P8r.node) !==
        null && B8r !== void 0
        ? B8r
        : (L8r = process == null ? void 0 : process.version) === null || L8r === void 0
          ? void 0
          : L8r.slice(1);
  if (QMi && Number(QMi.match(/^([^.]+)/)[1]) < jMi)
    throw Error(
      `yargs parser supports a minimum Node.js version of ${jMi}. Read our version support policy: https://github.com/yargs/yargs-parser#supported-nodejs-versions`,
    );
  var pnu = process ? process.env : {},
    HMi = new M8r({
      cwd: process.cwd,
      env: () => pnu,
      format: cnu.format,
      normalize: UMi.normalize,
      resolve: UMi.resolve,
      require: (t) => {
        if (typeof Ae < "u") return Ae(t);
        if (t.match(/\.json$/)) return JSON.parse(lnu.readFileSync(t, "utf8"));
        throw Error("only .json config files are supported in ESM");
      },
    }),
    oTe = function (e, r) {
      return HMi.parse(e.slice(), r).argv;
    };
  oTe.detailed = function (t, e) {
    return HMi.parse(t.slice(), e);
  };
  oTe.camelCase = iTe;
  oTe.decamelize = GMi;
  oTe.looksLikeNumber = qMi;
  VMi.exports = oTe;
});