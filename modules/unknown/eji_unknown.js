/**
 * @module eji
 * @category unknown
 * @label unknown
 * @position 1868 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (eji) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var eji = T((jal, Z$i) => {
  "use strict";
  Z$i.exports = function (t) {
    var e = 0;
    function r() {
      return e < t.length;
    }
    function n() {
      return r() ? t[e] : null;
    }
    function o() {
      if (!r()) throw new Error();
      e++;
    }
    function s(b) {
      var A = n();
      if (A && A.type === "OPERATOR" && b === A.string) return (o(), A.string);
    }
    function a() {
      if (s("WITH")) {
        var b = n();
        if (b && b.type === "EXCEPTION") return (o(), b.string);
        throw new Error("Expected exception after `WITH`");
      }
    }
    function u() {
      var b = e,
        A = "",
        y = n();
      if (y.type === "DOCUMENTREF" && (o(), (A += "DocumentRef-" + y.string + ":"), !s(":")))
        throw new Error("Expected `:` after `DocumentRef-...`");
      if (((y = n()), y.type === "LICENSEREF")) return (o(), (A += "LicenseRef-" + y.string), { license: A });
      e = b;
    }
    function c() {
      var b = n();
      if (b && b.type === "LICENSE") {
        o();
        var A = { license: b.string };
        s("+") && (A.plus = !0);
        var y = a();
        return (y && (A.exception = y), A);
      }
    }
    function m() {
      var b = s("(");
      if (b) {
        var A = h();
        if (!s(")")) throw new Error("Expected `)`");
        return A;
      }
    }
    function d() {
      return m() || u() || c();
    }
    function f(b, A) {
      return function y() {
        var E = A();
        if (E) {
          if (!s(b)) return E;
          var v = y();
          if (!v) throw new Error("Expected expression");
          return { left: E, conjunction: b.toLowerCase(), right: v };
        }
      };
    }
    var p = f("AND", d),
      h = f("OR", p),
      g = h();
    if (!g || r()) throw new Error("Syntax error");
    return g;
  };
});