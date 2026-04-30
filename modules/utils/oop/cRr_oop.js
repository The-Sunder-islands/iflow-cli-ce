/**
 * @module cRr
 * @category utils/oop
 * @label oop
 * @position 64 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (cRr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var cRr = T((T4u, uRr) => {
  var vke = null,
    rpo =
      /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,
    npo =
      /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/,
    ipo = function (t) {
      "use strict";
      var e = {
        strict: !1,
        storeAsString: !1,
        alwaysParseAsBig: !1,
        useNativeBigInt: !1,
        protoAction: "error",
        constructorAction: "error",
      };
      if (t != null) {
        if (
          (t.strict === !0 && (e.strict = !0),
          t.storeAsString === !0 && (e.storeAsString = !0),
          (e.alwaysParseAsBig = t.alwaysParseAsBig === !0 ? t.alwaysParseAsBig : !1),
          (e.useNativeBigInt = t.useNativeBigInt === !0 ? t.useNativeBigInt : !1),
          typeof t.constructorAction < "u")
        )
          if (t.constructorAction === "error" || t.constructorAction === "ignore" || t.constructorAction === "preserve")
            e.constructorAction = t.constructorAction;
          else
            throw new Error(
              `Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${t.constructorAction}`,
            );
        if (typeof t.protoAction < "u")
          if (t.protoAction === "error" || t.protoAction === "ignore" || t.protoAction === "preserve")
            e.protoAction = t.protoAction;
          else
            throw new Error(
              `Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${t.protoAction}`,
            );
      }
      var r,
        n,
        o = {
          '"': '"',
          "\\": "\\",
          "/": "/",
          b: "\b",
          f: "\f",
          n: `
`,
          r: "\r",
          t: "	",
        },
        s,
        a = function (b) {
          throw { name: "SyntaxError", message: b, at: r, text: s };
        },
        u = function (b) {
          return (b && b !== n && a("Expected '" + b + "' instead of '" + n + "'"), (n = s.charAt(r)), (r += 1), n);
        },
        c = function () {
          var b,
            A = "";
          for (n === "-" && ((A = "-"), u("-")); n >= "0" && n <= "9"; ) ((A += n), u());
          if (n === ".") for (A += "."; u() && n >= "0" && n <= "9"; ) A += n;
          if (n === "e" || n === "E")
            for (A += n, u(), (n === "-" || n === "+") && ((A += n), u()); n >= "0" && n <= "9"; ) ((A += n), u());
          if (((b = +A), !isFinite(b))) a("Bad number");
          else
            return (
              vke == null && (vke = G6t()),
              A.length > 15
                ? e.storeAsString
                  ? A
                  : e.useNativeBigInt
                    ? BigInt(A)
                    : new vke(A)
                : e.alwaysParseAsBig
                  ? e.useNativeBigInt
                    ? BigInt(b)
                    : new vke(b)
                  : b
            );
        },
        m = function () {
          var b,
            A,
            y = "",
            E;
          if (n === '"')
            for (var v = r; u(); ) {
              if (n === '"') return (r - 1 > v && (y += s.substring(v, r - 1)), u(), y);
              if (n === "\\") {
                if ((r - 1 > v && (y += s.substring(v, r - 1)), u(), n === "u")) {
                  for (E = 0, A = 0; A < 4 && ((b = parseInt(u(), 16)), !!isFinite(b)); A += 1) E = E * 16 + b;
                  y += String.fromCharCode(E);
                } else if (typeof o[n] == "string") y += o[n];
                else break;
                v = r;
              }
            }
          a("Bad string");
        },
        d = function () {
          for (; n && n <= " "; ) u();
        },
        f = function () {
          switch (n) {
            case "t":
              return (u("t"), u("r"), u("u"), u("e"), !0);
            case "f":
              return (u("f"), u("a"), u("l"), u("s"), u("e"), !1);
            case "n":
              return (u("n"), u("u"), u("l"), u("l"), null);
          }
          a("Unexpected '" + n + "'");
        },
        p,
        h = function () {
          var b = [];
          if (n === "[") {
            if ((u("["), d(), n === "]")) return (u("]"), b);
            for (; n; ) {
              if ((b.push(p()), d(), n === "]")) return (u("]"), b);
              (u(","), d());
            }
          }
          a("Bad array");
        },
        g = function () {
          var b,
            A = Object.create(null);
          if (n === "{") {
            if ((u("{"), d(), n === "}")) return (u("}"), A);
            for (; n; ) {
              if (
                ((b = m()),
                d(),
                u(":"),
                e.strict === !0 && Object.hasOwnProperty.call(A, b) && a('Duplicate key "' + b + '"'),
                rpo.test(b) === !0
                  ? e.protoAction === "error"
                    ? a("Object contains forbidden prototype property")
                    : e.protoAction === "ignore"
                      ? p()
                      : (A[b] = p())
                  : npo.test(b) === !0
                    ? e.constructorAction === "error"
                      ? a("Object contains forbidden constructor property")
                      : e.constructorAction === "ignore"
                        ? p()
                        : (A[b] = p())
                    : (A[b] = p()),
                d(),
                n === "}")
              )
                return (u("}"), A);
              (u(","), d());
            }
          }
          a("Bad object");
        };
      return (
        (p = function () {
          switch ((d(), n)) {
            case "{":
              return g();
            case "[":
              return h();
            case '"':
              return m();
            case "-":
              return c();
            default:
              return n >= "0" && n <= "9" ? c() : f();
          }
        }),
        function (b, A) {
          var y;
          return (
            (s = b + ""),
            (r = 0),
            (n = " "),
            (y = p()),
            d(),
            n && a("Syntax error"),
            typeof A == "function"
              ? (function E(v, C) {
                  var x,
                    k,
                    R = v[C];
                  return (
                    R &&
                      typeof R == "object" &&
                      Object.keys(R).forEach(function (P) {
                        ((k = E(R, P)), k !== void 0 ? (R[P] = k) : delete R[P]);
                      }),
                    A.call(v, C, R)
                  );
                })({ "": y }, "")
              : y
          );
        }
      );
    };
  uRr.exports = ipo;
});