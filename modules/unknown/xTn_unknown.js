/**
 * @module xTn
 * @category unknown
 * @label unknown
 * @position 1116 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xTn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xTn = T((wTn) => {
  var rzt = ezt(),
    cxs = ZWt();
  wTn.RegexTokeniser = lxs;
  function lxs(t) {
    t = t.map(function (o) {
      return { name: o.name, regex: new RegExp(o.regex.source, "g") };
    });
    function e(o, s) {
      for (var a = new cxs(o, s), u = 0, c = []; u < o.length; ) {
        var m = r(o, u, a);
        ((u = m.endIndex), c.push(m.token));
      }
      return (c.push(n(o, a)), c);
    }
    function r(o, s, a) {
      for (var u = 0; u < t.length; u++) {
        var c = t[u].regex;
        c.lastIndex = s;
        var m = c.exec(o);
        if (m) {
          var f = s + m[0].length;
          if (m.index === s && f > s) {
            var d = m[1],
              p = new rzt(t[u].name, d, a.range(s, f));
            return { token: p, endIndex: f };
          }
        }
      }
      var f = s + 1,
        p = new rzt("unrecognisedCharacter", o.substring(s, f), a.range(s, f));
      return { token: p, endIndex: f };
    }
    function n(o, s) {
      return new rzt("end", null, s.range(o.length, o.length));
    }
    return { tokenise: e };
  }
});