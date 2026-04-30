/**
 * @module FSn
 * @category utils/xml
 * @label xml
 * @position 1053 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (FSn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var FSn = T((MSn) => {
  var EWt = Pk(),
    NSn = (d1(), bt(m1)),
    BSn = OSn(),
    LSn = oWt(),
    H4s = LSn.Element;
  MSn.readString = V4s;
  var PSn = BSn.Node;
  function V4s(t, e) {
    e = e || {};
    try {
      var r = BSn.parseFromString(t, "text/xml");
    } catch (a) {
      return EWt.reject(a);
    }
    if (r.documentElement.tagName === "parsererror") return EWt.resolve(new Error(r.documentElement.textContent));
    function n(a) {
      switch (a.nodeType) {
        case PSn.ELEMENT_NODE:
          return o(a);
        case PSn.TEXT_NODE:
          return LSn.text(a.nodeValue);
      }
    }
    function o(a) {
      var u = s(a),
        c = [];
      NSn.forEach(a.childNodes, function (d) {
        var f = n(d);
        f && c.push(f);
      });
      var m = {};
      return (
        NSn.forEach(a.attributes, function (d) {
          m[s(d)] = d.value;
        }),
        new H4s(u, m, c)
      );
    }
    function s(a) {
      if (a.namespaceURI) {
        var u = e[a.namespaceURI],
          c;
        return (u ? (c = u + ":") : (c = "{" + a.namespaceURI + "}"), c + a.localName);
      } else return a.localName;
    }
    return EWt.resolve(n(r.documentElement));
  }
});