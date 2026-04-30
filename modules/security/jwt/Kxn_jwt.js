/**
 * @module Kxn
 * @category security/jwt
 * @label jwt
 * @position 1102 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Kxn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Kxn = T((Yxn) => {
  var $ws = (d1(), bt(m1));
  function Hxn(t) {
    return hZe(t, t);
  }
  function hZe(t, e) {
    return function () {
      return { start: t, end: e };
    };
  }
  function jws(t) {
    var e = t.href || "";
    return e ? { start: "[", end: "](" + e + ")", anchorPosition: "before" } : {};
  }
  function Qws(t) {
    var e = t.src || "",
      r = t.alt || "";
    return e || r ? { start: "![" + r + "](" + e + ")" } : {};
  }
  function Vxn(t) {
    return function (e, r) {
      return {
        start: r
          ? `
`
          : "",
        end: r
          ? ""
          : `
`,
        list: { isOrdered: t.isOrdered, indent: r ? r.indent + 1 : 0, count: 0 },
      };
    };
  }
  function Gws(t, e, r) {
    ((e = e || { indent: 0, isOrdered: !1, count: 0 }), e.count++, (r.hasClosed = !1));
    var n = e.isOrdered ? e.count + "." : "-",
      o = zxn("	", e.indent) + n + " ";
    return {
      start: o,
      end: function () {
        if (!r.hasClosed)
          return (
            (r.hasClosed = !0),
            `
`
          );
      },
    };
  }
  var Wxn = {
    p: hZe(
      "",
      `

`,
    ),
    br: hZe(
      "",
      `  
`,
    ),
    ul: Vxn({ isOrdered: !1 }),
    ol: Vxn({ isOrdered: !0 }),
    li: Gws,
    strong: Hxn("__"),
    em: Hxn("*"),
    a: jws,
    img: Qws,
  };
  (function () {
    for (var t = 1; t <= 6; t++)
      Wxn["h" + t] = hZe(
        zxn("#", t) + " ",
        `

`,
      );
  })();
  function zxn(t, e) {
    return new Array(e + 1).join(t);
  }
  function qws() {
    var t = [],
      e = [],
      r = null,
      n = {};
    function o(d, f) {
      f = f || {};
      var p =
          Wxn[d] ||
          function () {
            return {};
          },
        h = p(f, r, n);
      (e.push({ end: h.end, list: r }), h.list && (r = h.list));
      var g = h.anchorPosition === "before";
      (g && s(f), t.push(h.start || ""), g || s(f));
    }
    function s(d) {
      d.id && t.push('<a id="' + d.id + '"></a>');
    }
    function a(d) {
      var f = e.pop();
      r = f.list;
      var p = $ws.isFunction(f.end) ? f.end() : f.end;
      t.push(p || "");
    }
    function u(d, f) {
      (o(d, f), a(d));
    }
    function c(d) {
      t.push(Hws(d));
    }
    function m() {
      return t.join("");
    }
    return { asString: m, open: o, close: a, text: c, selfClosing: u };
  }
  Yxn.writer = qws;
  function Hws(t) {
    return t.replace(/\\/g, "\\\\").replace(/([\`\*_\{\}\[\]\(\)\#\+\-\.\!])/g, "\\$1");
  }
});