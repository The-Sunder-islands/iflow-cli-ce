/**
 * @module SBn
 * @category utils/oop
 * @label oop
 * @position 1314 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (SBn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var SBn = T((MZt, FZt) => {
  (function (t, e) {
    typeof MZt == "object" && typeof FZt < "u"
      ? (FZt.exports = e())
      : typeof define == "function" && define.amd
        ? define(e)
        : ((t = typeof globalThis < "u" ? globalThis : t || self).dayjs_plugin_customParseFormat = e());
  })(MZt, function () {
    "use strict";
    var t = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A",
      },
      e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
      r = /\d/,
      n = /\d\d/,
      o = /\d\d?/,
      s = /\d*[^-_:/,()\s\d]+/,
      a = {},
      u = function (g) {
        return (g = +g) + (g > 68 ? 1900 : 2e3);
      },
      c = function (g) {
        return function (b) {
          this[g] = +b;
        };
      },
      m = [
        /[+-]\d\d:?(\d\d)?|Z/,
        function (g) {
          (this.zone || (this.zone = {})).offset = (function (b) {
            if (!b || b === "Z") return 0;
            var A = b.match(/([+-]|\d\d)/g),
              y = 60 * A[1] + (+A[2] || 0);
            return y === 0 ? 0 : A[0] === "+" ? -y : y;
          })(g);
        },
      ],
      d = function (g) {
        var b = a[g];
        return b && (b.indexOf ? b : b.s.concat(b.f));
      },
      f = function (g, b) {
        var A,
          y = a.meridiem;
        if (y) {
          for (var E = 1; E <= 24; E += 1)
            if (g.indexOf(y(E, 0, b)) > -1) {
              A = E > 12;
              break;
            }
        } else A = g === (b ? "pm" : "PM");
        return A;
      },
      p = {
        A: [
          s,
          function (g) {
            this.afternoon = f(g, !1);
          },
        ],
        a: [
          s,
          function (g) {
            this.afternoon = f(g, !0);
          },
        ],
        Q: [
          r,
          function (g) {
            this.month = 3 * (g - 1) + 1;
          },
        ],
        S: [
          r,
          function (g) {
            this.milliseconds = 100 * +g;
          },
        ],
        SS: [
          n,
          function (g) {
            this.milliseconds = 10 * +g;
          },
        ],
        SSS: [
          /\d{3}/,
          function (g) {
            this.milliseconds = +g;
          },
        ],
        s: [o, c("seconds")],
        ss: [o, c("seconds")],
        m: [o, c("minutes")],
        mm: [o, c("minutes")],
        H: [o, c("hours")],
        h: [o, c("hours")],
        HH: [o, c("hours")],
        hh: [o, c("hours")],
        D: [o, c("day")],
        DD: [n, c("day")],
        Do: [
          s,
          function (g) {
            var b = a.ordinal,
              A = g.match(/\d+/);
            if (((this.day = A[0]), b))
              for (var y = 1; y <= 31; y += 1) b(y).replace(/\[|\]/g, "") === g && (this.day = y);
          },
        ],
        w: [o, c("week")],
        ww: [n, c("week")],
        M: [o, c("month")],
        MM: [n, c("month")],
        MMM: [
          s,
          function (g) {
            var b = d("months"),
              A =
                (
                  d("monthsShort") ||
                  b.map(function (y) {
                    return y.slice(0, 3);
                  })
                ).indexOf(g) + 1;
            if (A < 1) throw new Error();
            this.month = A % 12 || A;
          },
        ],
        MMMM: [
          s,
          function (g) {
            var b = d("months").indexOf(g) + 1;
            if (b < 1) throw new Error();
            this.month = b % 12 || b;
          },
        ],
        Y: [/[+-]?\d+/, c("year")],
        YY: [
          n,
          function (g) {
            this.year = u(g);
          },
        ],
        YYYY: [/\d{4}/, c("year")],
        Z: m,
        ZZ: m,
      };
    function h(g) {
      var b, A;
      ((b = g), (A = a && a.formats));
      for (
        var y = (g = b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (P, D, O) {
            var N = O && O.toUpperCase();
            return (
              D ||
              A[O] ||
              t[O] ||
              A[N].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (F, B, L) {
                return B || L.slice(1);
              })
            );
          })).match(e),
          E = y.length,
          v = 0;
        v < E;
        v += 1
      ) {
        var C = y[v],
          x = p[C],
          k = x && x[0],
          R = x && x[1];
        y[v] = R ? { regex: k, parser: R } : C.replace(/^\[|\]$/g, "");
      }
      return function (P) {
        for (var D = {}, O = 0, N = 0; O < E; O += 1) {
          var F = y[O];
          if (typeof F == "string") N += F.length;
          else {
            var B = F.regex,
              L = F.parser,
              G = P.slice(N),
              Q = B.exec(G)[0];
            (L.call(D, Q), (P = P.replace(Q, "")));
          }
        }
        return (
          (function (K) {
            var H = K.afternoon;
            if (H !== void 0) {
              var U = K.hours;
              (H ? U < 12 && (K.hours += 12) : U === 12 && (K.hours = 0), delete K.afternoon);
            }
          })(D),
          D
        );
      };
    }
    return function (g, b, A) {
      ((A.p.customParseFormat = !0), g && g.parseTwoDigitYear && (u = g.parseTwoDigitYear));
      var y = b.prototype,
        E = y.parse;
      y.parse = function (v) {
        var C = v.date,
          x = v.utc,
          k = v.args;
        this.$u = x;
        var R = k[1];
        if (typeof R == "string") {
          var P = k[2] === !0,
            D = k[3] === !0,
            O = P || D,
            N = k[2];
          (D && (N = k[2]),
            (a = this.$locale()),
            !P && N && (a = A.Ls[N]),
            (this.$d = (function (G, Q, K, H) {
              try {
                if (["x", "X"].indexOf(Q) > -1) return new Date((Q === "X" ? 1e3 : 1) * G);
                var U = h(Q)(G),
                  Y = U.year,
                  X = U.month,
                  J = U.day,
                  q = U.hours,
                  ne = U.minutes,
                  de = U.seconds,
                  ce = U.milliseconds,
                  ye = U.zone,
                  Z = U.week,
                  oe = new Date(),
                  ue = J || (Y || X ? 1 : oe.getDate()),
                  he = Y || oe.getFullYear(),
                  se = 0;
                (Y && !X) || (se = X > 0 ? X - 1 : oe.getMonth());
                var fe,
                  ge = q || 0,
                  V = ne || 0,
                  ee = de || 0,
                  Ce = ce || 0;
                return ye
                  ? new Date(Date.UTC(he, se, ue, ge, V, ee, Ce + 60 * ye.offset * 1e3))
                  : K
                    ? new Date(Date.UTC(he, se, ue, ge, V, ee, Ce))
                    : ((fe = new Date(he, se, ue, ge, V, ee, Ce)), Z && (fe = H(fe).week(Z).toDate()), fe);
              } catch {
                return new Date("");
              }
            })(C, R, x, A)),
            this.init(),
            N && N !== !0 && (this.$L = this.locale(N).$L),
            O && C != this.format(R) && (this.$d = new Date("")),
            (a = {}));
        } else if (R instanceof Array)
          for (var F = R.length, B = 1; B <= F; B += 1) {
            k[1] = R[B - 1];
            var L = A.apply(this, k);
            if (L.isValid()) {
              ((this.$d = L.$d), (this.$L = L.$L), this.init());
              break;
            }
            B === F && (this.$d = new Date(""));
          }
        else E.call(this, v);
      };
    };
  });
});