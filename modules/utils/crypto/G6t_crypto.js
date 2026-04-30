/**
 * @module G6t
 * @category utils/crypto
 * @label crypto
 * @position 62 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (G6t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var G6t = T((nRr, Eke) => {
  (function (t) {
    "use strict";
    var e,
      r = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
      n = Math.ceil,
      o = Math.floor,
      s = "[BigNumber Error] ",
      a = s + "Number primitive has more than 15 significant digits: ",
      u = 1e14,
      c = 14,
      m = 9007199254740991,
      d = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
      f = 1e7,
      p = 1e9;
    function h(x) {
      var k,
        R,
        P,
        D = (q.prototype = { constructor: q, toString: null, valueOf: null }),
        O = new q(1),
        N = 20,
        F = 4,
        B = -7,
        L = 21,
        G = -1e7,
        Q = 1e7,
        K = !1,
        H = 1,
        U = 0,
        Y = {
          prefix: "",
          groupSize: 3,
          secondaryGroupSize: 0,
          groupSeparator: ",",
          decimalSeparator: ".",
          fractionGroupSize: 0,
          fractionGroupSeparator: "\xA0",
          suffix: "",
        },
        X = "0123456789abcdefghijklmnopqrstuvwxyz",
        J = !0;
      function q(oe, ue) {
        var he,
          se,
          fe,
          ge,
          V,
          ee,
          Ce,
          pe,
          be = this;
        if (!(be instanceof q)) return new q(oe, ue);
        if (ue == null) {
          if (oe && oe._isBigNumber === !0) {
            ((be.s = oe.s),
              !oe.c || oe.e > Q
                ? (be.c = be.e = null)
                : oe.e < G
                  ? (be.c = [(be.e = 0)])
                  : ((be.e = oe.e), (be.c = oe.c.slice())));
            return;
          }
          if ((ee = typeof oe == "number") && oe * 0 == 0) {
            if (((be.s = 1 / oe < 0 ? ((oe = -oe), -1) : 1), oe === ~~oe)) {
              for (ge = 0, V = oe; V >= 10; V /= 10, ge++);
              ge > Q ? (be.c = be.e = null) : ((be.e = ge), (be.c = [oe]));
              return;
            }
            pe = String(oe);
          } else {
            if (!r.test((pe = String(oe)))) return P(be, pe, ee);
            be.s = pe.charCodeAt(0) == 45 ? ((pe = pe.slice(1)), -1) : 1;
          }
          ((ge = pe.indexOf(".")) > -1 && (pe = pe.replace(".", "")),
            (V = pe.search(/e/i)) > 0
              ? (ge < 0 && (ge = V), (ge += +pe.slice(V + 1)), (pe = pe.substring(0, V)))
              : ge < 0 && (ge = pe.length));
        } else {
          if ((y(ue, 2, X.length, "Base"), ue == 10 && J)) return ((be = new q(oe)), ye(be, N + be.e + 1, F));
          if (((pe = String(oe)), (ee = typeof oe == "number"))) {
            if (oe * 0 != 0) return P(be, pe, ee, ue);
            if (
              ((be.s = 1 / oe < 0 ? ((pe = pe.slice(1)), -1) : 1), q.DEBUG && pe.replace(/^0\.0*|\./, "").length > 15)
            )
              throw Error(a + oe);
          } else be.s = pe.charCodeAt(0) === 45 ? ((pe = pe.slice(1)), -1) : 1;
          for (he = X.slice(0, ue), ge = V = 0, Ce = pe.length; V < Ce; V++)
            if (he.indexOf((se = pe.charAt(V))) < 0) {
              if (se == ".") {
                if (V > ge) {
                  ge = Ce;
                  continue;
                }
              } else if (
                !fe &&
                ((pe == pe.toUpperCase() && (pe = pe.toLowerCase())) ||
                  (pe == pe.toLowerCase() && (pe = pe.toUpperCase())))
              ) {
                ((fe = !0), (V = -1), (ge = 0));
                continue;
              }
              return P(be, String(oe), ee, ue);
            }
          ((ee = !1),
            (pe = R(pe, ue, 10, be.s)),
            (ge = pe.indexOf(".")) > -1 ? (pe = pe.replace(".", "")) : (ge = pe.length));
        }
        for (V = 0; pe.charCodeAt(V) === 48; V++);
        for (Ce = pe.length; pe.charCodeAt(--Ce) === 48; );
        if ((pe = pe.slice(V, ++Ce))) {
          if (((Ce -= V), ee && q.DEBUG && Ce > 15 && (oe > m || oe !== o(oe)))) throw Error(a + be.s * oe);
          if ((ge = ge - V - 1) > Q) be.c = be.e = null;
          else if (ge < G) be.c = [(be.e = 0)];
          else {
            if (((be.e = ge), (be.c = []), (V = (ge + 1) % c), ge < 0 && (V += c), V < Ce)) {
              for (V && be.c.push(+pe.slice(0, V)), Ce -= c; V < Ce; ) be.c.push(+pe.slice(V, (V += c)));
              V = c - (pe = pe.slice(V)).length;
            } else V -= Ce;
            for (; V--; pe += "0");
            be.c.push(+pe);
          }
        } else be.c = [(be.e = 0)];
      }
      ((q.clone = h),
        (q.ROUND_UP = 0),
        (q.ROUND_DOWN = 1),
        (q.ROUND_CEIL = 2),
        (q.ROUND_FLOOR = 3),
        (q.ROUND_HALF_UP = 4),
        (q.ROUND_HALF_DOWN = 5),
        (q.ROUND_HALF_EVEN = 6),
        (q.ROUND_HALF_CEIL = 7),
        (q.ROUND_HALF_FLOOR = 8),
        (q.EUCLID = 9),
        (q.config = q.set =
          function (oe) {
            var ue, he;
            if (oe != null)
              if (typeof oe == "object") {
                if (
                  (oe.hasOwnProperty((ue = "DECIMAL_PLACES")) && ((he = oe[ue]), y(he, 0, p, ue), (N = he)),
                  oe.hasOwnProperty((ue = "ROUNDING_MODE")) && ((he = oe[ue]), y(he, 0, 8, ue), (F = he)),
                  oe.hasOwnProperty((ue = "EXPONENTIAL_AT")) &&
                    ((he = oe[ue]),
                    he && he.pop
                      ? (y(he[0], -p, 0, ue), y(he[1], 0, p, ue), (B = he[0]), (L = he[1]))
                      : (y(he, -p, p, ue), (B = -(L = he < 0 ? -he : he)))),
                  oe.hasOwnProperty((ue = "RANGE")))
                )
                  if (((he = oe[ue]), he && he.pop))
                    (y(he[0], -p, -1, ue), y(he[1], 1, p, ue), (G = he[0]), (Q = he[1]));
                  else if ((y(he, -p, p, ue), he)) G = -(Q = he < 0 ? -he : he);
                  else throw Error(s + ue + " cannot be zero: " + he);
                if (oe.hasOwnProperty((ue = "CRYPTO")))
                  if (((he = oe[ue]), he === !!he))
                    if (he)
                      if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) K = he;
                      else throw ((K = !he), Error(s + "crypto unavailable"));
                    else K = he;
                  else throw Error(s + ue + " not true or false: " + he);
                if (
                  (oe.hasOwnProperty((ue = "MODULO_MODE")) && ((he = oe[ue]), y(he, 0, 9, ue), (H = he)),
                  oe.hasOwnProperty((ue = "POW_PRECISION")) && ((he = oe[ue]), y(he, 0, p, ue), (U = he)),
                  oe.hasOwnProperty((ue = "FORMAT")))
                )
                  if (((he = oe[ue]), typeof he == "object")) Y = he;
                  else throw Error(s + ue + " not an object: " + he);
                if (oe.hasOwnProperty((ue = "ALPHABET")))
                  if (((he = oe[ue]), typeof he == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(he)))
                    ((J = he.slice(0, 10) == "0123456789"), (X = he));
                  else throw Error(s + ue + " invalid: " + he);
              } else throw Error(s + "Object expected: " + oe);
            return {
              DECIMAL_PLACES: N,
              ROUNDING_MODE: F,
              EXPONENTIAL_AT: [B, L],
              RANGE: [G, Q],
              CRYPTO: K,
              MODULO_MODE: H,
              POW_PRECISION: U,
              FORMAT: Y,
              ALPHABET: X,
            };
          }),
        (q.isBigNumber = function (oe) {
          if (!oe || oe._isBigNumber !== !0) return !1;
          if (!q.DEBUG) return !0;
          var ue,
            he,
            se = oe.c,
            fe = oe.e,
            ge = oe.s;
          e: if ({}.toString.call(se) == "[object Array]") {
            if ((ge === 1 || ge === -1) && fe >= -p && fe <= p && fe === o(fe)) {
              if (se[0] === 0) {
                if (fe === 0 && se.length === 1) return !0;
                break e;
              }
              if (((ue = (fe + 1) % c), ue < 1 && (ue += c), String(se[0]).length == ue)) {
                for (ue = 0; ue < se.length; ue++) if (((he = se[ue]), he < 0 || he >= u || he !== o(he))) break e;
                if (he !== 0) return !0;
              }
            }
          } else if (se === null && fe === null && (ge === null || ge === 1 || ge === -1)) return !0;
          throw Error(s + "Invalid BigNumber: " + oe);
        }),
        (q.maximum = q.max =
          function () {
            return de(arguments, -1);
          }),
        (q.minimum = q.min =
          function () {
            return de(arguments, 1);
          }),
        (q.random = (function () {
          var oe = 9007199254740992,
            ue =
              (Math.random() * oe) & 2097151
                ? function () {
                    return o(Math.random() * oe);
                  }
                : function () {
                    return ((Math.random() * 1073741824) | 0) * 8388608 + ((Math.random() * 8388608) | 0);
                  };
          return function (he) {
            var se,
              fe,
              ge,
              V,
              ee,
              Ce = 0,
              pe = [],
              be = new q(O);
            if ((he == null ? (he = N) : y(he, 0, p), (V = n(he / c)), K))
              if (crypto.getRandomValues) {
                for (se = crypto.getRandomValues(new Uint32Array((V *= 2))); Ce < V; )
                  ((ee = se[Ce] * 131072 + (se[Ce + 1] >>> 11)),
                    ee >= 9e15
                      ? ((fe = crypto.getRandomValues(new Uint32Array(2))), (se[Ce] = fe[0]), (se[Ce + 1] = fe[1]))
                      : (pe.push(ee % 1e14), (Ce += 2)));
                Ce = V / 2;
              } else if (crypto.randomBytes) {
                for (se = crypto.randomBytes((V *= 7)); Ce < V; )
                  ((ee =
                    (se[Ce] & 31) * 281474976710656 +
                    se[Ce + 1] * 1099511627776 +
                    se[Ce + 2] * 4294967296 +
                    se[Ce + 3] * 16777216 +
                    (se[Ce + 4] << 16) +
                    (se[Ce + 5] << 8) +
                    se[Ce + 6]),
                    ee >= 9e15 ? crypto.randomBytes(7).copy(se, Ce) : (pe.push(ee % 1e14), (Ce += 7)));
                Ce = V / 7;
              } else throw ((K = !1), Error(s + "crypto unavailable"));
            if (!K) for (; Ce < V; ) ((ee = ue()), ee < 9e15 && (pe[Ce++] = ee % 1e14));
            for (
              V = pe[--Ce], he %= c, V && he && ((ee = d[c - he]), (pe[Ce] = o(V / ee) * ee));
              pe[Ce] === 0;
              pe.pop(), Ce--
            );
            if (Ce < 0) pe = [(ge = 0)];
            else {
              for (ge = -1; pe[0] === 0; pe.splice(0, 1), ge -= c);
              for (Ce = 1, ee = pe[0]; ee >= 10; ee /= 10, Ce++);
              Ce < c && (ge -= c - Ce);
            }
            return ((be.e = ge), (be.c = pe), be);
          };
        })()),
        (q.sum = function () {
          for (var oe = 1, ue = arguments, he = new q(ue[0]); oe < ue.length; ) he = he.plus(ue[oe++]);
          return he;
        }),
        (R = (function () {
          var oe = "0123456789";
          function ue(he, se, fe, ge) {
            for (var V, ee = [0], Ce, pe = 0, be = he.length; pe < be; ) {
              for (Ce = ee.length; Ce--; ee[Ce] *= se);
              for (ee[0] += ge.indexOf(he.charAt(pe++)), V = 0; V < ee.length; V++)
                ee[V] > fe - 1 &&
                  (ee[V + 1] == null && (ee[V + 1] = 0), (ee[V + 1] += (ee[V] / fe) | 0), (ee[V] %= fe));
            }
            return ee.reverse();
          }
          return function (he, se, fe, ge, V) {
            var ee,
              Ce,
              pe,
              be,
              Ne,
              Ge,
              Ze,
              Ye,
              _e = he.indexOf("."),
              Ie = N,
              ke = F;
            for (
              _e >= 0 &&
                ((be = U),
                (U = 0),
                (he = he.replace(".", "")),
                (Ye = new q(se)),
                (Ge = Ye.pow(he.length - _e)),
                (U = be),
                (Ye.c = ue(C(b(Ge.c), Ge.e, "0"), 10, fe, oe)),
                (Ye.e = Ye.c.length)),
                Ze = ue(he, se, fe, V ? ((ee = X), oe) : ((ee = oe), X)),
                pe = be = Ze.length;
              Ze[--be] == 0;
              Ze.pop()
            );
            if (!Ze[0]) return ee.charAt(0);
            if (
              (_e < 0
                ? --pe
                : ((Ge.c = Ze),
                  (Ge.e = pe),
                  (Ge.s = ge),
                  (Ge = k(Ge, Ye, Ie, ke, fe)),
                  (Ze = Ge.c),
                  (Ne = Ge.r),
                  (pe = Ge.e)),
              (Ce = pe + Ie + 1),
              (_e = Ze[Ce]),
              (be = fe / 2),
              (Ne = Ne || Ce < 0 || Ze[Ce + 1] != null),
              (Ne =
                ke < 4
                  ? (_e != null || Ne) && (ke == 0 || ke == (Ge.s < 0 ? 3 : 2))
                  : _e > be ||
                    (_e == be && (ke == 4 || Ne || (ke == 6 && Ze[Ce - 1] & 1) || ke == (Ge.s < 0 ? 8 : 7)))),
              Ce < 1 || !Ze[0])
            )
              he = Ne ? C(ee.charAt(1), -Ie, ee.charAt(0)) : ee.charAt(0);
            else {
              if (((Ze.length = Ce), Ne))
                for (--fe; ++Ze[--Ce] > fe; ) ((Ze[Ce] = 0), Ce || (++pe, (Ze = [1].concat(Ze))));
              for (be = Ze.length; !Ze[--be]; );
              for (_e = 0, he = ""; _e <= be; he += ee.charAt(Ze[_e++]));
              he = C(he, pe, ee.charAt(0));
            }
            return he;
          };
        })()),
        (k = (function () {
          function oe(se, fe, ge) {
            var V,
              ee,
              Ce,
              pe,
              be = 0,
              Ne = se.length,
              Ge = fe % f,
              Ze = (fe / f) | 0;
            for (se = se.slice(); Ne--; )
              ((Ce = se[Ne] % f),
                (pe = (se[Ne] / f) | 0),
                (V = Ze * Ce + pe * Ge),
                (ee = Ge * Ce + (V % f) * f + be),
                (be = ((ee / ge) | 0) + ((V / f) | 0) + Ze * pe),
                (se[Ne] = ee % ge));
            return (be && (se = [be].concat(se)), se);
          }
          function ue(se, fe, ge, V) {
            var ee, Ce;
            if (ge != V) Ce = ge > V ? 1 : -1;
            else
              for (ee = Ce = 0; ee < ge; ee++)
                if (se[ee] != fe[ee]) {
                  Ce = se[ee] > fe[ee] ? 1 : -1;
                  break;
                }
            return Ce;
          }
          function he(se, fe, ge, V) {
            for (var ee = 0; ge--; )
              ((se[ge] -= ee), (ee = se[ge] < fe[ge] ? 1 : 0), (se[ge] = ee * V + se[ge] - fe[ge]));
            for (; !se[0] && se.length > 1; se.splice(0, 1));
          }
          return function (se, fe, ge, V, ee) {
            var Ce,
              pe,
              be,
              Ne,
              Ge,
              Ze,
              Ye,
              _e,
              Ie,
              ke,
              $e,
              Le,
              Fe,
              je,
              He,
              mt,
              kt,
              $t = se.s == fe.s ? 1 : -1,
              we = se.c,
              Te = fe.c;
            if (!we || !we[0] || !Te || !Te[0])
              return new q(
                !se.s || !fe.s || (we ? Te && we[0] == Te[0] : !Te) ? NaN : (we && we[0] == 0) || !Te ? $t * 0 : $t / 0,
              );
            for (
              _e = new q($t),
                Ie = _e.c = [],
                pe = se.e - fe.e,
                $t = ge + pe + 1,
                ee || ((ee = u), (pe = g(se.e / c) - g(fe.e / c)), ($t = ($t / c) | 0)),
                be = 0;
              Te[be] == (we[be] || 0);
              be++
            );
            if ((Te[be] > (we[be] || 0) && pe--, $t < 0)) (Ie.push(1), (Ne = !0));
            else {
              for (
                je = we.length,
                  mt = Te.length,
                  be = 0,
                  $t += 2,
                  Ge = o(ee / (Te[0] + 1)),
                  Ge > 1 && ((Te = oe(Te, Ge, ee)), (we = oe(we, Ge, ee)), (mt = Te.length), (je = we.length)),
                  Fe = mt,
                  ke = we.slice(0, mt),
                  $e = ke.length;
                $e < mt;
                ke[$e++] = 0
              );
              ((kt = Te.slice()), (kt = [0].concat(kt)), (He = Te[0]), Te[1] >= ee / 2 && He++);
              do {
                if (((Ge = 0), (Ce = ue(Te, ke, mt, $e)), Ce < 0)) {
                  if (((Le = ke[0]), mt != $e && (Le = Le * ee + (ke[1] || 0)), (Ge = o(Le / He)), Ge > 1))
                    for (
                      Ge >= ee && (Ge = ee - 1), Ze = oe(Te, Ge, ee), Ye = Ze.length, $e = ke.length;
                      ue(Ze, ke, Ye, $e) == 1;
                    )
                      (Ge--, he(Ze, mt < Ye ? kt : Te, Ye, ee), (Ye = Ze.length), (Ce = 1));
                  else (Ge == 0 && (Ce = Ge = 1), (Ze = Te.slice()), (Ye = Ze.length));
                  if ((Ye < $e && (Ze = [0].concat(Ze)), he(ke, Ze, $e, ee), ($e = ke.length), Ce == -1))
                    for (; ue(Te, ke, mt, $e) < 1; ) (Ge++, he(ke, mt < $e ? kt : Te, $e, ee), ($e = ke.length));
                } else Ce === 0 && (Ge++, (ke = [0]));
                ((Ie[be++] = Ge), ke[0] ? (ke[$e++] = we[Fe] || 0) : ((ke = [we[Fe]]), ($e = 1)));
              } while ((Fe++ < je || ke[0] != null) && $t--);
              ((Ne = ke[0] != null), Ie[0] || Ie.splice(0, 1));
            }
            if (ee == u) {
              for (be = 1, $t = Ie[0]; $t >= 10; $t /= 10, be++);
              ye(_e, ge + (_e.e = be + pe * c - 1) + 1, V, Ne);
            } else ((_e.e = pe), (_e.r = +Ne));
            return _e;
          };
        })()));
      function ne(oe, ue, he, se) {
        var fe, ge, V, ee, Ce;
        if ((he == null ? (he = F) : y(he, 0, 8), !oe.c)) return oe.toString();
        if (((fe = oe.c[0]), (V = oe.e), ue == null))
          ((Ce = b(oe.c)), (Ce = se == 1 || (se == 2 && (V <= B || V >= L)) ? v(Ce, V) : C(Ce, V, "0")));
        else if (
          ((oe = ye(new q(oe), ue, he)),
          (ge = oe.e),
          (Ce = b(oe.c)),
          (ee = Ce.length),
          se == 1 || (se == 2 && (ue <= ge || ge <= B)))
        ) {
          for (; ee < ue; Ce += "0", ee++);
          Ce = v(Ce, ge);
        } else if (((ue -= V + (se === 2 && ge > V)), (Ce = C(Ce, ge, "0")), ge + 1 > ee)) {
          if (--ue > 0) for (Ce += "."; ue--; Ce += "0");
        } else if (((ue += ge - ee), ue > 0)) for (ge + 1 == ee && (Ce += "."); ue--; Ce += "0");
        return oe.s < 0 && fe ? "-" + Ce : Ce;
      }
      function de(oe, ue) {
        for (var he, se, fe = 1, ge = new q(oe[0]); fe < oe.length; fe++)
          ((se = new q(oe[fe])), (!se.s || (he = A(ge, se)) === ue || (he === 0 && ge.s === ue)) && (ge = se));
        return ge;
      }
      function ce(oe, ue, he) {
        for (var se = 1, fe = ue.length; !ue[--fe]; ue.pop());
        for (fe = ue[0]; fe >= 10; fe /= 10, se++);
        return (
          (he = se + he * c - 1) > Q
            ? (oe.c = oe.e = null)
            : he < G
              ? (oe.c = [(oe.e = 0)])
              : ((oe.e = he), (oe.c = ue)),
          oe
        );
      }
      P = (function () {
        var oe = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
          ue = /^([^.]+)\.$/,
          he = /^\.([^.]+)$/,
          se = /^-?(Infinity|NaN)$/,
          fe = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function (ge, V, ee, Ce) {
          var pe,
            be = ee ? V : V.replace(fe, "");
          if (se.test(be)) ge.s = isNaN(be) ? null : be < 0 ? -1 : 1;
          else {
            if (
              !ee &&
              ((be = be.replace(oe, function (Ne, Ge, Ze) {
                return ((pe = (Ze = Ze.toLowerCase()) == "x" ? 16 : Ze == "b" ? 2 : 8), !Ce || Ce == pe ? Ge : Ne);
              })),
              Ce && ((pe = Ce), (be = be.replace(ue, "$1").replace(he, "0.$1"))),
              V != be)
            )
              return new q(be, pe);
            if (q.DEBUG) throw Error(s + "Not a" + (Ce ? " base " + Ce : "") + " number: " + V);
            ge.s = null;
          }
          ge.c = ge.e = null;
        };
      })();
      function ye(oe, ue, he, se) {
        var fe,
          ge,
          V,
          ee,
          Ce,
          pe,
          be,
          Ne = oe.c,
          Ge = d;
        if (Ne) {
          e: {
            for (fe = 1, ee = Ne[0]; ee >= 10; ee /= 10, fe++);
            if (((ge = ue - fe), ge < 0))
              ((ge += c), (V = ue), (Ce = Ne[(pe = 0)]), (be = o((Ce / Ge[fe - V - 1]) % 10)));
            else if (((pe = n((ge + 1) / c)), pe >= Ne.length))
              if (se) {
                for (; Ne.length <= pe; Ne.push(0));
                ((Ce = be = 0), (fe = 1), (ge %= c), (V = ge - c + 1));
              } else break e;
            else {
              for (Ce = ee = Ne[pe], fe = 1; ee >= 10; ee /= 10, fe++);
              ((ge %= c), (V = ge - c + fe), (be = V < 0 ? 0 : o((Ce / Ge[fe - V - 1]) % 10)));
            }
            if (
              ((se = se || ue < 0 || Ne[pe + 1] != null || (V < 0 ? Ce : Ce % Ge[fe - V - 1])),
              (se =
                he < 4
                  ? (be || se) && (he == 0 || he == (oe.s < 0 ? 3 : 2))
                  : be > 5 ||
                    (be == 5 &&
                      (he == 4 ||
                        se ||
                        (he == 6 && ((ge > 0 ? (V > 0 ? Ce / Ge[fe - V] : 0) : Ne[pe - 1]) % 10) & 1) ||
                        he == (oe.s < 0 ? 8 : 7)))),
              ue < 1 || !Ne[0])
            )
              return (
                (Ne.length = 0),
                se ? ((ue -= oe.e + 1), (Ne[0] = Ge[(c - (ue % c)) % c]), (oe.e = -ue || 0)) : (Ne[0] = oe.e = 0),
                oe
              );
            if (
              (ge == 0
                ? ((Ne.length = pe), (ee = 1), pe--)
                : ((Ne.length = pe + 1), (ee = Ge[c - ge]), (Ne[pe] = V > 0 ? o((Ce / Ge[fe - V]) % Ge[V]) * ee : 0)),
              se)
            )
              for (;;)
                if (pe == 0) {
                  for (ge = 1, V = Ne[0]; V >= 10; V /= 10, ge++);
                  for (V = Ne[0] += ee, ee = 1; V >= 10; V /= 10, ee++);
                  ge != ee && (oe.e++, Ne[0] == u && (Ne[0] = 1));
                  break;
                } else {
                  if (((Ne[pe] += ee), Ne[pe] != u)) break;
                  ((Ne[pe--] = 0), (ee = 1));
                }
            for (ge = Ne.length; Ne[--ge] === 0; Ne.pop());
          }
          oe.e > Q ? (oe.c = oe.e = null) : oe.e < G && (oe.c = [(oe.e = 0)]);
        }
        return oe;
      }
      function Z(oe) {
        var ue,
          he = oe.e;
        return he === null
          ? oe.toString()
          : ((ue = b(oe.c)), (ue = he <= B || he >= L ? v(ue, he) : C(ue, he, "0")), oe.s < 0 ? "-" + ue : ue);
      }
      return (
        (D.absoluteValue = D.abs =
          function () {
            var oe = new q(this);
            return (oe.s < 0 && (oe.s = 1), oe);
          }),
        (D.comparedTo = function (oe, ue) {
          return A(this, new q(oe, ue));
        }),
        (D.decimalPlaces = D.dp =
          function (oe, ue) {
            var he,
              se,
              fe,
              ge = this;
            if (oe != null) return (y(oe, 0, p), ue == null ? (ue = F) : y(ue, 0, 8), ye(new q(ge), oe + ge.e + 1, ue));
            if (!(he = ge.c)) return null;
            if (((se = ((fe = he.length - 1) - g(this.e / c)) * c), (fe = he[fe])))
              for (; fe % 10 == 0; fe /= 10, se--);
            return (se < 0 && (se = 0), se);
          }),
        (D.dividedBy = D.div =
          function (oe, ue) {
            return k(this, new q(oe, ue), N, F);
          }),
        (D.dividedToIntegerBy = D.idiv =
          function (oe, ue) {
            return k(this, new q(oe, ue), 0, 1);
          }),
        (D.exponentiatedBy = D.pow =
          function (oe, ue) {
            var he,
              se,
              fe,
              ge,
              V,
              ee,
              Ce,
              pe,
              be,
              Ne = this;
            if (((oe = new q(oe)), oe.c && !oe.isInteger())) throw Error(s + "Exponent not an integer: " + Z(oe));
            if (
              (ue != null && (ue = new q(ue)),
              (ee = oe.e > 14),
              !Ne.c || !Ne.c[0] || (Ne.c[0] == 1 && !Ne.e && Ne.c.length == 1) || !oe.c || !oe.c[0])
            )
              return ((be = new q(Math.pow(+Z(Ne), ee ? oe.s * (2 - E(oe)) : +Z(oe)))), ue ? be.mod(ue) : be);
            if (((Ce = oe.s < 0), ue)) {
              if (ue.c ? !ue.c[0] : !ue.s) return new q(NaN);
              ((se = !Ce && Ne.isInteger() && ue.isInteger()), se && (Ne = Ne.mod(ue)));
            } else {
              if (
                oe.e > 9 &&
                (Ne.e > 0 ||
                  Ne.e < -1 ||
                  (Ne.e == 0 ? Ne.c[0] > 1 || (ee && Ne.c[1] >= 24e7) : Ne.c[0] < 8e13 || (ee && Ne.c[0] <= 9999975e7)))
              )
                return ((ge = Ne.s < 0 && E(oe) ? -0 : 0), Ne.e > -1 && (ge = 1 / ge), new q(Ce ? 1 / ge : ge));
              U && (ge = n(U / c + 2));
            }
            for (
              ee ? ((he = new q(0.5)), Ce && (oe.s = 1), (pe = E(oe))) : ((fe = Math.abs(+Z(oe))), (pe = fe % 2)),
                be = new q(O);
              ;
            ) {
              if (pe) {
                if (((be = be.times(Ne)), !be.c)) break;
                ge ? be.c.length > ge && (be.c.length = ge) : se && (be = be.mod(ue));
              }
              if (fe) {
                if (((fe = o(fe / 2)), fe === 0)) break;
                pe = fe % 2;
              } else if (((oe = oe.times(he)), ye(oe, oe.e + 1, 1), oe.e > 14)) pe = E(oe);
              else {
                if (((fe = +Z(oe)), fe === 0)) break;
                pe = fe % 2;
              }
              ((Ne = Ne.times(Ne)), ge ? Ne.c && Ne.c.length > ge && (Ne.c.length = ge) : se && (Ne = Ne.mod(ue)));
            }
            return se ? be : (Ce && (be = O.div(be)), ue ? be.mod(ue) : ge ? ye(be, U, F, V) : be);
          }),
        (D.integerValue = function (oe) {
          var ue = new q(this);
          return (oe == null ? (oe = F) : y(oe, 0, 8), ye(ue, ue.e + 1, oe));
        }),
        (D.isEqualTo = D.eq =
          function (oe, ue) {
            return A(this, new q(oe, ue)) === 0;
          }),
        (D.isFinite = function () {
          return !!this.c;
        }),
        (D.isGreaterThan = D.gt =
          function (oe, ue) {
            return A(this, new q(oe, ue)) > 0;
          }),
        (D.isGreaterThanOrEqualTo = D.gte =
          function (oe, ue) {
            return (ue = A(this, new q(oe, ue))) === 1 || ue === 0;
          }),
        (D.isInteger = function () {
          return !!this.c && g(this.e / c) > this.c.length - 2;
        }),
        (D.isLessThan = D.lt =
          function (oe, ue) {
            return A(this, new q(oe, ue)) < 0;
          }),
        (D.isLessThanOrEqualTo = D.lte =
          function (oe, ue) {
            return (ue = A(this, new q(oe, ue))) === -1 || ue === 0;
          }),
        (D.isNaN = function () {
          return !this.s;
        }),
        (D.isNegative = function () {
          return this.s < 0;
        }),
        (D.isPositive = function () {
          return this.s > 0;
        }),
        (D.isZero = function () {
          return !!this.c && this.c[0] == 0;
        }),
        (D.minus = function (oe, ue) {
          var he,
            se,
            fe,
            ge,
            V = this,
            ee = V.s;
          if (((oe = new q(oe, ue)), (ue = oe.s), !ee || !ue)) return new q(NaN);
          if (ee != ue) return ((oe.s = -ue), V.plus(oe));
          var Ce = V.e / c,
            pe = oe.e / c,
            be = V.c,
            Ne = oe.c;
          if (!Ce || !pe) {
            if (!be || !Ne) return be ? ((oe.s = -ue), oe) : new q(Ne ? V : NaN);
            if (!be[0] || !Ne[0]) return Ne[0] ? ((oe.s = -ue), oe) : new q(be[0] ? V : F == 3 ? -0 : 0);
          }
          if (((Ce = g(Ce)), (pe = g(pe)), (be = be.slice()), (ee = Ce - pe))) {
            for (
              (ge = ee < 0) ? ((ee = -ee), (fe = be)) : ((pe = Ce), (fe = Ne)), fe.reverse(), ue = ee;
              ue--;
              fe.push(0)
            );
            fe.reverse();
          } else
            for (se = (ge = (ee = be.length) < (ue = Ne.length)) ? ee : ue, ee = ue = 0; ue < se; ue++)
              if (be[ue] != Ne[ue]) {
                ge = be[ue] < Ne[ue];
                break;
              }
          if (
            (ge && ((fe = be), (be = Ne), (Ne = fe), (oe.s = -oe.s)),
            (ue = (se = Ne.length) - (he = be.length)),
            ue > 0)
          )
            for (; ue--; be[he++] = 0);
          for (ue = u - 1; se > ee; ) {
            if (be[--se] < Ne[se]) {
              for (he = se; he && !be[--he]; be[he] = ue);
              (--be[he], (be[se] += u));
            }
            be[se] -= Ne[se];
          }
          for (; be[0] == 0; be.splice(0, 1), --pe);
          return be[0] ? ce(oe, be, pe) : ((oe.s = F == 3 ? -1 : 1), (oe.c = [(oe.e = 0)]), oe);
        }),
        (D.modulo = D.mod =
          function (oe, ue) {
            var he,
              se,
              fe = this;
            return (
              (oe = new q(oe, ue)),
              !fe.c || !oe.s || (oe.c && !oe.c[0])
                ? new q(NaN)
                : !oe.c || (fe.c && !fe.c[0])
                  ? new q(fe)
                  : (H == 9
                      ? ((se = oe.s), (oe.s = 1), (he = k(fe, oe, 0, 3)), (oe.s = se), (he.s *= se))
                      : (he = k(fe, oe, 0, H)),
                    (oe = fe.minus(he.times(oe))),
                    !oe.c[0] && H == 1 && (oe.s = fe.s),
                    oe)
            );
          }),
        (D.multipliedBy = D.times =
          function (oe, ue) {
            var he,
              se,
              fe,
              ge,
              V,
              ee,
              Ce,
              pe,
              be,
              Ne,
              Ge,
              Ze,
              Ye,
              _e,
              Ie,
              ke = this,
              $e = ke.c,
              Le = (oe = new q(oe, ue)).c;
            if (!$e || !Le || !$e[0] || !Le[0])
              return (
                !ke.s || !oe.s || ($e && !$e[0] && !Le) || (Le && !Le[0] && !$e)
                  ? (oe.c = oe.e = oe.s = null)
                  : ((oe.s *= ke.s), !$e || !Le ? (oe.c = oe.e = null) : ((oe.c = [0]), (oe.e = 0))),
                oe
              );
            for (
              se = g(ke.e / c) + g(oe.e / c),
                oe.s *= ke.s,
                Ce = $e.length,
                Ne = Le.length,
                Ce < Ne && ((Ye = $e), ($e = Le), (Le = Ye), (fe = Ce), (Ce = Ne), (Ne = fe)),
                fe = Ce + Ne,
                Ye = [];
              fe--;
              Ye.push(0)
            );
            for (_e = u, Ie = f, fe = Ne; --fe >= 0; ) {
              for (he = 0, Ge = Le[fe] % Ie, Ze = (Le[fe] / Ie) | 0, V = Ce, ge = fe + V; ge > fe; )
                ((pe = $e[--V] % Ie),
                  (be = ($e[V] / Ie) | 0),
                  (ee = Ze * pe + be * Ge),
                  (pe = Ge * pe + (ee % Ie) * Ie + Ye[ge] + he),
                  (he = ((pe / _e) | 0) + ((ee / Ie) | 0) + Ze * be),
                  (Ye[ge--] = pe % _e));
              Ye[ge] = he;
            }
            return (he ? ++se : Ye.splice(0, 1), ce(oe, Ye, se));
          }),
        (D.negated = function () {
          var oe = new q(this);
          return ((oe.s = -oe.s || null), oe);
        }),
        (D.plus = function (oe, ue) {
          var he,
            se = this,
            fe = se.s;
          if (((oe = new q(oe, ue)), (ue = oe.s), !fe || !ue)) return new q(NaN);
          if (fe != ue) return ((oe.s = -ue), se.minus(oe));
          var ge = se.e / c,
            V = oe.e / c,
            ee = se.c,
            Ce = oe.c;
          if (!ge || !V) {
            if (!ee || !Ce) return new q(fe / 0);
            if (!ee[0] || !Ce[0]) return Ce[0] ? oe : new q(ee[0] ? se : fe * 0);
          }
          if (((ge = g(ge)), (V = g(V)), (ee = ee.slice()), (fe = ge - V))) {
            for (fe > 0 ? ((V = ge), (he = Ce)) : ((fe = -fe), (he = ee)), he.reverse(); fe--; he.push(0));
            he.reverse();
          }
          for (
            fe = ee.length, ue = Ce.length, fe - ue < 0 && ((he = Ce), (Ce = ee), (ee = he), (ue = fe)), fe = 0;
            ue;
          )
            ((fe = ((ee[--ue] = ee[ue] + Ce[ue] + fe) / u) | 0), (ee[ue] = u === ee[ue] ? 0 : ee[ue] % u));
          return (fe && ((ee = [fe].concat(ee)), ++V), ce(oe, ee, V));
        }),
        (D.precision = D.sd =
          function (oe, ue) {
            var he,
              se,
              fe,
              ge = this;
            if (oe != null && oe !== !!oe)
              return (y(oe, 1, p), ue == null ? (ue = F) : y(ue, 0, 8), ye(new q(ge), oe, ue));
            if (!(he = ge.c)) return null;
            if (((fe = he.length - 1), (se = fe * c + 1), (fe = he[fe]))) {
              for (; fe % 10 == 0; fe /= 10, se--);
              for (fe = he[0]; fe >= 10; fe /= 10, se++);
            }
            return (oe && ge.e + 1 > se && (se = ge.e + 1), se);
          }),
        (D.shiftedBy = function (oe) {
          return (y(oe, -m, m), this.times("1e" + oe));
        }),
        (D.squareRoot = D.sqrt =
          function () {
            var oe,
              ue,
              he,
              se,
              fe,
              ge = this,
              V = ge.c,
              ee = ge.s,
              Ce = ge.e,
              pe = N + 4,
              be = new q("0.5");
            if (ee !== 1 || !V || !V[0]) return new q(!ee || (ee < 0 && (!V || V[0])) ? NaN : V ? ge : 1 / 0);
            if (
              ((ee = Math.sqrt(+Z(ge))),
              ee == 0 || ee == 1 / 0
                ? ((ue = b(V)),
                  (ue.length + Ce) % 2 == 0 && (ue += "0"),
                  (ee = Math.sqrt(+ue)),
                  (Ce = g((Ce + 1) / 2) - (Ce < 0 || Ce % 2)),
                  ee == 1 / 0
                    ? (ue = "5e" + Ce)
                    : ((ue = ee.toExponential()), (ue = ue.slice(0, ue.indexOf("e") + 1) + Ce)),
                  (he = new q(ue)))
                : (he = new q(ee + "")),
              he.c[0])
            ) {
              for (Ce = he.e, ee = Ce + pe, ee < 3 && (ee = 0); ; )
                if (
                  ((fe = he),
                  (he = be.times(fe.plus(k(ge, fe, pe, 1)))),
                  b(fe.c).slice(0, ee) === (ue = b(he.c)).slice(0, ee))
                )
                  if ((he.e < Ce && --ee, (ue = ue.slice(ee - 3, ee + 1)), ue == "9999" || (!se && ue == "4999"))) {
                    if (!se && (ye(fe, fe.e + N + 2, 0), fe.times(fe).eq(ge))) {
                      he = fe;
                      break;
                    }
                    ((pe += 4), (ee += 4), (se = 1));
                  } else {
                    (!+ue || (!+ue.slice(1) && ue.charAt(0) == "5")) &&
                      (ye(he, he.e + N + 2, 1), (oe = !he.times(he).eq(ge)));
                    break;
                  }
            }
            return ye(he, he.e + N + 1, F, oe);
          }),
        (D.toExponential = function (oe, ue) {
          return (oe != null && (y(oe, 0, p), oe++), ne(this, oe, ue, 1));
        }),
        (D.toFixed = function (oe, ue) {
          return (oe != null && (y(oe, 0, p), (oe = oe + this.e + 1)), ne(this, oe, ue));
        }),
        (D.toFormat = function (oe, ue, he) {
          var se,
            fe = this;
          if (he == null)
            oe != null && ue && typeof ue == "object"
              ? ((he = ue), (ue = null))
              : oe && typeof oe == "object"
                ? ((he = oe), (oe = ue = null))
                : (he = Y);
          else if (typeof he != "object") throw Error(s + "Argument not an object: " + he);
          if (((se = fe.toFixed(oe, ue)), fe.c)) {
            var ge,
              V = se.split("."),
              ee = +he.groupSize,
              Ce = +he.secondaryGroupSize,
              pe = he.groupSeparator || "",
              be = V[0],
              Ne = V[1],
              Ge = fe.s < 0,
              Ze = Ge ? be.slice(1) : be,
              Ye = Ze.length;
            if ((Ce && ((ge = ee), (ee = Ce), (Ce = ge), (Ye -= ge)), ee > 0 && Ye > 0)) {
              for (ge = Ye % ee || ee, be = Ze.substr(0, ge); ge < Ye; ge += ee) be += pe + Ze.substr(ge, ee);
              (Ce > 0 && (be += pe + Ze.slice(ge)), Ge && (be = "-" + be));
            }
            se = Ne
              ? be +
                (he.decimalSeparator || "") +
                ((Ce = +he.fractionGroupSize)
                  ? Ne.replace(new RegExp("\\d{" + Ce + "}\\B", "g"), "$&" + (he.fractionGroupSeparator || ""))
                  : Ne)
              : be;
          }
          return (he.prefix || "") + se + (he.suffix || "");
        }),
        (D.toFraction = function (oe) {
          var ue,
            he,
            se,
            fe,
            ge,
            V,
            ee,
            Ce,
            pe,
            be,
            Ne,
            Ge,
            Ze = this,
            Ye = Ze.c;
          if (oe != null && ((ee = new q(oe)), (!ee.isInteger() && (ee.c || ee.s !== 1)) || ee.lt(O)))
            throw Error(s + "Argument " + (ee.isInteger() ? "out of range: " : "not an integer: ") + Z(ee));
          if (!Ye) return new q(Ze);
          for (
            ue = new q(O),
              pe = he = new q(O),
              se = Ce = new q(O),
              Ge = b(Ye),
              ge = ue.e = Ge.length - Ze.e - 1,
              ue.c[0] = d[(V = ge % c) < 0 ? c + V : V],
              oe = !oe || ee.comparedTo(ue) > 0 ? (ge > 0 ? ue : pe) : ee,
              V = Q,
              Q = 1 / 0,
              ee = new q(Ge),
              Ce.c[0] = 0;
            (be = k(ee, ue, 0, 1)), (fe = he.plus(be.times(se))), fe.comparedTo(oe) != 1;
          )
            ((he = se),
              (se = fe),
              (pe = Ce.plus(be.times((fe = pe)))),
              (Ce = fe),
              (ue = ee.minus(be.times((fe = ue)))),
              (ee = fe));
          return (
            (fe = k(oe.minus(he), se, 0, 1)),
            (Ce = Ce.plus(fe.times(pe))),
            (he = he.plus(fe.times(se))),
            (Ce.s = pe.s = Ze.s),
            (ge = ge * 2),
            (Ne =
              k(pe, se, ge, F)
                .minus(Ze)
                .abs()
                .comparedTo(k(Ce, he, ge, F).minus(Ze).abs()) < 1
                ? [pe, se]
                : [Ce, he]),
            (Q = V),
            Ne
          );
        }),
        (D.toNumber = function () {
          return +Z(this);
        }),
        (D.toPrecision = function (oe, ue) {
          return (oe != null && y(oe, 1, p), ne(this, oe, ue, 2));
        }),
        (D.toString = function (oe) {
          var ue,
            he = this,
            se = he.s,
            fe = he.e;
          return (
            fe === null
              ? se
                ? ((ue = "Infinity"), se < 0 && (ue = "-" + ue))
                : (ue = "NaN")
              : (oe == null
                  ? (ue = fe <= B || fe >= L ? v(b(he.c), fe) : C(b(he.c), fe, "0"))
                  : oe === 10 && J
                    ? ((he = ye(new q(he), N + fe + 1, F)), (ue = C(b(he.c), he.e, "0")))
                    : (y(oe, 2, X.length, "Base"), (ue = R(C(b(he.c), fe, "0"), 10, oe, se, !0))),
                se < 0 && he.c[0] && (ue = "-" + ue)),
            ue
          );
        }),
        (D.valueOf = D.toJSON =
          function () {
            return Z(this);
          }),
        (D._isBigNumber = !0),
        x != null && q.set(x),
        q
      );
    }
    function g(x) {
      var k = x | 0;
      return x > 0 || x === k ? k : k - 1;
    }
    function b(x) {
      for (var k, R, P = 1, D = x.length, O = x[0] + ""; P < D; ) {
        for (k = x[P++] + "", R = c - k.length; R--; k = "0" + k);
        O += k;
      }
      for (D = O.length; O.charCodeAt(--D) === 48; );
      return O.slice(0, D + 1 || 1);
    }
    function A(x, k) {
      var R,
        P,
        D = x.c,
        O = k.c,
        N = x.s,
        F = k.s,
        B = x.e,
        L = k.e;
      if (!N || !F) return null;
      if (((R = D && !D[0]), (P = O && !O[0]), R || P)) return R ? (P ? 0 : -F) : N;
      if (N != F) return N;
      if (((R = N < 0), (P = B == L), !D || !O)) return P ? 0 : !D ^ R ? 1 : -1;
      if (!P) return (B > L) ^ R ? 1 : -1;
      for (F = (B = D.length) < (L = O.length) ? B : L, N = 0; N < F; N++)
        if (D[N] != O[N]) return (D[N] > O[N]) ^ R ? 1 : -1;
      return B == L ? 0 : (B > L) ^ R ? 1 : -1;
    }
    function y(x, k, R, P) {
      if (x < k || x > R || x !== o(x))
        throw Error(
          s +
            (P || "Argument") +
            (typeof x == "number"
              ? x < k || x > R
                ? " out of range: "
                : " not an integer: "
              : " not a primitive number: ") +
            String(x),
        );
    }
    function E(x) {
      var k = x.c.length - 1;
      return g(x.e / c) == k && x.c[k] % 2 != 0;
    }
    function v(x, k) {
      return (x.length > 1 ? x.charAt(0) + "." + x.slice(1) : x) + (k < 0 ? "e" : "e+") + k;
    }
    function C(x, k, R) {
      var P, D;
      if (k < 0) {
        for (D = R + "."; ++k; D += R);
        x = D + x;
      } else if (((P = x.length), ++k > P)) {
        for (D = R, k -= P; --k; D += R);
        x += D;
      } else k < P && (x = x.slice(0, k) + "." + x.slice(k));
      return x;
    }
    ((e = h()),
      (e.default = e.BigNumber = e),
      typeof define == "function" && define.amd
        ? define(function () {
            return e;
          })
        : typeof Eke < "u" && Eke.exports
          ? (Eke.exports = e)
          : (t || (t = typeof self < "u" && self ? self : window), (t.BigNumber = e)));
  })(nRr);
});