/**
 * @module Bwn
 * @category utils/xml
 * @label xml
 * @position 1077 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Bwn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Bwn = T((Pwn) => {
  var Nwn = (d1(), bt(m1)),
    W4s = Own();
  Pwn.writeString = z4s;
  function z4s(t, e) {
    var r = Nwn.invert(e),
      n = { element: s, text: Y4s };
    function o(c, m) {
      return n[m.type](c, m);
    }
    function s(c, m) {
      var d = c.element(a(m.name), m.attributes);
      m.children.forEach(function (f) {
        o(d, f);
      });
    }
    function a(c) {
      var m = /^\{(.*)\}(.*)$/.exec(c);
      if (m) {
        var d = r[m[1]];
        return d + (d === "" ? "" : ":") + m[2];
      } else return c;
    }
    function u(c) {
      var m = W4s.create(a(c.name), { version: "1.0", encoding: "UTF-8", standalone: !0 });
      return (
        Nwn.forEach(e, function (d, f) {
          var p = "xmlns" + (f === "" ? "" : ":" + f);
          m.attribute(p, d);
        }),
        c.children.forEach(function (d) {
          o(m, d);
        }),
        m.end()
      );
    }
    return u(t);
  }
  function Y4s(t, e) {
    t.text(e.value);
  }
});