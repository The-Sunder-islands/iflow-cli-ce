/**
 * @module qxn
 * @category unknown
 * @label unknown
 * @position 1101 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qxn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qxn = T((Gxn) => {
  var jxn = (d1(), bt(m1));
  Gxn.writer = Lws;
  function Lws(t) {
    return ((t = t || {}), t.prettyPrint ? Mws() : Qxn());
  }
  var pZe = { div: !0, p: !0, ul: !0, li: !0 };
  function Mws() {
    var t = 0,
      e = "  ",
      r = [],
      n = !0,
      o = !1,
      s = Qxn();
    function a(g, b) {
      (pZe[g] && p(), r.push(g), s.open(g, b), pZe[g] && t++, (n = !1));
    }
    function u(g) {
      (pZe[g] && (t--, p()), r.pop(), s.close(g));
    }
    function c(g) {
      f();
      var b = h()
        ? g
        : g.replace(
            `
`,
            `
` + e,
          );
      s.text(b);
    }
    function m(g, b) {
      (p(), s.selfClosing(g, b));
    }
    function d() {
      return r.length === 0 || pZe[r[r.length - 1]];
    }
    function f() {
      o || (p(), (o = !0));
    }
    function p() {
      if (((o = !1), !n && d() && !h())) {
        s._append(`
`);
        for (var g = 0; g < t; g++) s._append(e);
      }
    }
    function h() {
      return jxn.some(r, function (g) {
        return g === "pre";
      });
    }
    return { asString: s.asString, open: a, close: u, text: c, selfClosing: m };
  }
  function Qxn() {
    var t = [];
    function e(c, m) {
      var d = o(m);
      t.push("<" + c + d + ">");
    }
    function r(c) {
      t.push("</" + c + ">");
    }
    function n(c, m) {
      var d = o(m);
      t.push("<" + c + d + " />");
    }
    function o(c) {
      return jxn
        .map(c, function (m, d) {
          return " " + d + '="' + Uws(m) + '"';
        })
        .join("");
    }
    function s(c) {
      t.push(Fws(c));
    }
    function a(c) {
      t.push(c);
    }
    function u() {
      return t.join("");
    }
    return { asString: u, open: e, close: r, text: s, selfClosing: n, _append: a };
  }
  function Fws(t) {
    return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function Uws(t) {
    return t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
});