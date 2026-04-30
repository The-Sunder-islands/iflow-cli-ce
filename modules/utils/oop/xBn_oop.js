/**
 * @module xBn
 * @category utils/oop
 * @label oop
 * @position 1316 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xBn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xBn = T((jZt, QZt) => {
  (function (t, e) {
    typeof jZt == "object" && typeof QZt < "u"
      ? (QZt.exports = e())
      : typeof define == "function" && define.amd
        ? define(e)
        : ((t = typeof globalThis < "u" ? globalThis : t || self).dayjs = e());
  })(jZt, function () {
    "use strict";
    var t = 1e3,
      e = 6e4,
      r = 36e5,
      n = "millisecond",
      o = "second",
      s = "minute",
      a = "hour",
      u = "day",
      c = "week",
      m = "month",
      d = "quarter",
      f = "year",
      p = "date",
      h = "Invalid Date",
      g = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      b = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      A = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function (F) {
          var B = ["th", "st", "nd", "rd"],
            L = F % 100;
          return "[" + F + (B[(L - 20) % 10] || B[L] || B[0]) + "]";
        },
      },
      y = function (F, B, L) {
        var G = String(F);
        return !G || G.length >= B ? F : "" + Array(B + 1 - G.length).join(L) + F;
      },
      E = {
        s: y,
        z: function (F) {
          var B = -F.utcOffset(),
            L = Math.abs(B),
            G = Math.floor(L / 60),
            Q = L % 60;
          return (B <= 0 ? "+" : "-") + y(G, 2, "0") + ":" + y(Q, 2, "0");
        },
        m: function F(B, L) {
          if (B.date() < L.date()) return -F(L, B);
          var G = 12 * (L.year() - B.year()) + (L.month() - B.month()),
            Q = B.clone().add(G, m),
            K = L - Q < 0,
            H = B.clone().add(G + (K ? -1 : 1), m);
          return +(-(G + (L - Q) / (K ? Q - H : H - Q)) || 0);
        },
        a: function (F) {
          return F < 0 ? Math.ceil(F) || 0 : Math.floor(F);
        },
        p: function (F) {
          return (
            { M: m, y: f, w: c, d: u, D: p, h: a, m: s, s: o, ms: n, Q: d }[F] ||
            String(F || "")
              .toLowerCase()
              .replace(/s$/, "")
          );
        },
        u: function (F) {
          return F === void 0;
        },
      },
      v = "en",
      C = {};
    C[v] = A;
    var x = "$isDayjsObject",
      k = function (F) {
        return F instanceof O || !(!F || !F[x]);
      },
      R = function F(B, L, G) {
        var Q;
        if (!B) return v;
        if (typeof B == "string") {
          var K = B.toLowerCase();
          (C[K] && (Q = K), L && ((C[K] = L), (Q = K)));
          var H = B.split("-");
          if (!Q && H.length > 1) return F(H[0]);
        } else {
          var U = B.name;
          ((C[U] = B), (Q = U));
        }
        return (!G && Q && (v = Q), Q || (!G && v));
      },
      P = function (F, B) {
        if (k(F)) return F.clone();
        var L = typeof B == "object" ? B : {};
        return ((L.date = F), (L.args = arguments), new O(L));
      },
      D = E;
    ((D.l = R),
      (D.i = k),
      (D.w = function (F, B) {
        return P(F, { locale: B.$L, utc: B.$u, x: B.$x, $offset: B.$offset });
      }));
    var O = (function () {
        function F(L) {
          ((this.$L = R(L.locale, null, !0)), this.parse(L), (this.$x = this.$x || L.x || {}), (this[x] = !0));
        }
        var B = F.prototype;
        return (
          (B.parse = function (L) {
            ((this.$d = (function (G) {
              var Q = G.date,
                K = G.utc;
              if (Q === null) return new Date(NaN);
              if (D.u(Q)) return new Date();
              if (Q instanceof Date) return new Date(Q);
              if (typeof Q == "string" && !/Z$/i.test(Q)) {
                var H = Q.match(g);
                if (H) {
                  var U = H[2] - 1 || 0,
                    Y = (H[7] || "0").substring(0, 3);
                  return K
                    ? new Date(Date.UTC(H[1], U, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, Y))
                    : new Date(H[1], U, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, Y);
                }
              }
              return new Date(Q);
            })(L)),
              this.init());
          }),
          (B.init = function () {
            var L = this.$d;
            ((this.$y = L.getFullYear()),
              (this.$M = L.getMonth()),
              (this.$D = L.getDate()),
              (this.$W = L.getDay()),
              (this.$H = L.getHours()),
              (this.$m = L.getMinutes()),
              (this.$s = L.getSeconds()),
              (this.$ms = L.getMilliseconds()));
          }),
          (B.$utils = function () {
            return D;
          }),
          (B.isValid = function () {
            return this.$d.toString() !== h;
          }),
          (B.isSame = function (L, G) {
            var Q = P(L);
            return this.startOf(G) <= Q && Q <= this.endOf(G);
          }),
          (B.isAfter = function (L, G) {
            return P(L) < this.startOf(G);
          }),
          (B.isBefore = function (L, G) {
            return this.endOf(G) < P(L);
          }),
          (B.$g = function (L, G, Q) {
            return D.u(L) ? this[G] : this.set(Q, L);
          }),
          (B.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (B.valueOf = function () {
            return this.$d.getTime();
          }),
          (B.startOf = function (L, G) {
            var Q = this,
              K = !!D.u(G) || G,
              H = D.p(L),
              U = function (ye, Z) {
                var oe = D.w(Q.$u ? Date.UTC(Q.$y, Z, ye) : new Date(Q.$y, Z, ye), Q);
                return K ? oe : oe.endOf(u);
              },
              Y = function (ye, Z) {
                return D.w(Q.toDate()[ye].apply(Q.toDate("s"), (K ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Z)), Q);
              },
              X = this.$W,
              J = this.$M,
              q = this.$D,
              ne = "set" + (this.$u ? "UTC" : "");
            switch (H) {
              case f:
                return K ? U(1, 0) : U(31, 11);
              case m:
                return K ? U(1, J) : U(0, J + 1);
              case c:
                var de = this.$locale().weekStart || 0,
                  ce = (X < de ? X + 7 : X) - de;
                return U(K ? q - ce : q + (6 - ce), J);
              case u:
              case p:
                return Y(ne + "Hours", 0);
              case a:
                return Y(ne + "Minutes", 1);
              case s:
                return Y(ne + "Seconds", 2);
              case o:
                return Y(ne + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          (B.endOf = function (L) {
            return this.startOf(L, !1);
          }),
          (B.$set = function (L, G) {
            var Q,
              K = D.p(L),
              H = "set" + (this.$u ? "UTC" : ""),
              U = ((Q = {}),
              (Q[u] = H + "Date"),
              (Q[p] = H + "Date"),
              (Q[m] = H + "Month"),
              (Q[f] = H + "FullYear"),
              (Q[a] = H + "Hours"),
              (Q[s] = H + "Minutes"),
              (Q[o] = H + "Seconds"),
              (Q[n] = H + "Milliseconds"),
              Q)[K],
              Y = K === u ? this.$D + (G - this.$W) : G;
            if (K === m || K === f) {
              var X = this.clone().set(p, 1);
              (X.$d[U](Y), X.init(), (this.$d = X.set(p, Math.min(this.$D, X.daysInMonth())).$d));
            } else U && this.$d[U](Y);
            return (this.init(), this);
          }),
          (B.set = function (L, G) {
            return this.clone().$set(L, G);
          }),
          (B.get = function (L) {
            return this[D.p(L)]();
          }),
          (B.add = function (L, G) {
            var Q,
              K = this;
            L = Number(L);
            var H = D.p(G),
              U = function (J) {
                var q = P(K);
                return D.w(q.date(q.date() + Math.round(J * L)), K);
              };
            if (H === m) return this.set(m, this.$M + L);
            if (H === f) return this.set(f, this.$y + L);
            if (H === u) return U(1);
            if (H === c) return U(7);
            var Y = ((Q = {}), (Q[s] = e), (Q[a] = r), (Q[o] = t), Q)[H] || 1,
              X = this.$d.getTime() + L * Y;
            return D.w(X, this);
          }),
          (B.subtract = function (L, G) {
            return this.add(-1 * L, G);
          }),
          (B.format = function (L) {
            var G = this,
              Q = this.$locale();
            if (!this.isValid()) return Q.invalidDate || h;
            var K = L || "YYYY-MM-DDTHH:mm:ssZ",
              H = D.z(this),
              U = this.$H,
              Y = this.$m,
              X = this.$M,
              J = Q.weekdays,
              q = Q.months,
              ne = Q.meridiem,
              de = function (Z, oe, ue, he) {
                return (Z && (Z[oe] || Z(G, K))) || ue[oe].slice(0, he);
              },
              ce = function (Z) {
                return D.s(U % 12 || 12, Z, "0");
              },
              ye =
                ne ||
                function (Z, oe, ue) {
                  var he = Z < 12 ? "AM" : "PM";
                  return ue ? he.toLowerCase() : he;
                };
            return K.replace(b, function (Z, oe) {
              return (
                oe ||
                (function (ue) {
                  switch (ue) {
                    case "YY":
                      return String(G.$y).slice(-2);
                    case "YYYY":
                      return D.s(G.$y, 4, "0");
                    case "M":
                      return X + 1;
                    case "MM":
                      return D.s(X + 1, 2, "0");
                    case "MMM":
                      return de(Q.monthsShort, X, q, 3);
                    case "MMMM":
                      return de(q, X);
                    case "D":
                      return G.$D;
                    case "DD":
                      return D.s(G.$D, 2, "0");
                    case "d":
                      return String(G.$W);
                    case "dd":
                      return de(Q.weekdaysMin, G.$W, J, 2);
                    case "ddd":
                      return de(Q.weekdaysShort, G.$W, J, 3);
                    case "dddd":
                      return J[G.$W];
                    case "H":
                      return String(U);
                    case "HH":
                      return D.s(U, 2, "0");
                    case "h":
                      return ce(1);
                    case "hh":
                      return ce(2);
                    case "a":
                      return ye(U, Y, !0);
                    case "A":
                      return ye(U, Y, !1);
                    case "m":
                      return String(Y);
                    case "mm":
                      return D.s(Y, 2, "0");
                    case "s":
                      return String(G.$s);
                    case "ss":
                      return D.s(G.$s, 2, "0");
                    case "SSS":
                      return D.s(G.$ms, 3, "0");
                    case "Z":
                      return H;
                  }
                  return null;
                })(Z) ||
                H.replace(":", "")
              );
            });
          }),
          (B.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (B.diff = function (L, G, Q) {
            var K,
              H = this,
              U = D.p(G),
              Y = P(L),
              X = (Y.utcOffset() - this.utcOffset()) * e,
              J = this - Y,
              q = function () {
                return D.m(H, Y);
              };
            switch (U) {
              case f:
                K = q() / 12;
                break;
              case m:
                K = q();
                break;
              case d:
                K = q() / 3;
                break;
              case c:
                K = (J - X) / 6048e5;
                break;
              case u:
                K = (J - X) / 864e5;
                break;
              case a:
                K = J / r;
                break;
              case s:
                K = J / e;
                break;
              case o:
                K = J / t;
                break;
              default:
                K = J;
            }
            return Q ? K : D.a(K);
          }),
          (B.daysInMonth = function () {
            return this.endOf(m).$D;
          }),
          (B.$locale = function () {
            return C[this.$L];
          }),
          (B.locale = function (L, G) {
            if (!L) return this.$L;
            var Q = this.clone(),
              K = R(L, G, !0);
            return (K && (Q.$L = K), Q);
          }),
          (B.clone = function () {
            return D.w(this.$d, this);
          }),
          (B.toDate = function () {
            return new Date(this.valueOf());
          }),
          (B.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (B.toISOString = function () {
            return this.$d.toISOString();
          }),
          (B.toString = function () {
            return this.$d.toUTCString();
          }),
          F
        );
      })(),
      N = O.prototype;
    return (
      (P.prototype = N),
      [
        ["$ms", n],
        ["$s", o],
        ["$m", s],
        ["$H", a],
        ["$W", u],
        ["$M", m],
        ["$y", f],
        ["$D", p],
      ].forEach(function (F) {
        N[F[1]] = function (B) {
          return this.$g(B, F[0], F[1]);
        };
      }),
      (P.extend = function (F, B) {
        return (F.$i || (F(B, O, P), (F.$i = !0)), P);
      }),
      (P.locale = R),
      (P.isDayjs = k),
      (P.unix = function (F) {
        return P(1e3 * F);
      }),
      (P.en = C[v]),
      (P.Ls = C),
      (P.p = {}),
      P
    );
  });
});