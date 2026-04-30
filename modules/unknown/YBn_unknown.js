/**
 * @module YBn
 * @category unknown
 * @label unknown
 * @position 1322 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (YBn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var YBn = T((e8c, zBn) => {
  var QBn = Ptt();
  zBn.exports = cjs;
  var GBn = "\0SLASH" + Math.random() + "\0",
    qBn = "\0OPEN" + Math.random() + "\0",
    WZt = "\0CLOSE" + Math.random() + "\0",
    HBn = "\0COMMA" + Math.random() + "\0",
    VBn = "\0PERIOD" + Math.random() + "\0";
  function VZt(t) {
    return parseInt(t, 10) == t ? parseInt(t, 10) : t.charCodeAt(0);
  }
  function ajs(t) {
    return t
      .split("\\\\")
      .join(GBn)
      .split("\\{")
      .join(qBn)
      .split("\\}")
      .join(WZt)
      .split("\\,")
      .join(HBn)
      .split("\\.")
      .join(VBn);
  }
  function ujs(t) {
    return t.split(GBn).join("\\").split(qBn).join("{").split(WZt).join("}").split(HBn).join(",").split(VBn).join(".");
  }
  function WBn(t) {
    if (!t) return [""];
    var e = [],
      r = QBn("{", "}", t);
    if (!r) return t.split(",");
    var n = r.pre,
      o = r.body,
      s = r.post,
      a = n.split(",");
    a[a.length - 1] += "{" + o + "}";
    var u = WBn(s);
    return (s.length && ((a[a.length - 1] += u.shift()), a.push.apply(a, u)), e.push.apply(e, a), e);
  }
  function cjs(t) {
    return t ? (t.substr(0, 2) === "{}" && (t = "\\{\\}" + t.substr(2)), I_e(ajs(t), !0).map(ujs)) : [];
  }
  function ljs(t) {
    return "{" + t + "}";
  }
  function mjs(t) {
    return /^-?0\d/.test(t);
  }
  function djs(t, e) {
    return t <= e;
  }
  function fjs(t, e) {
    return t >= e;
  }
  function I_e(t, e) {
    var r = [],
      n = QBn("{", "}", t);
    if (!n) return [t];
    var o = n.pre,
      s = n.post.length ? I_e(n.post, !1) : [""];
    if (/\$$/.test(n.pre))
      for (var a = 0; a < s.length; a++) {
        var u = o + "{" + n.body + "}" + s[a];
        r.push(u);
      }
    else {
      var c = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(n.body),
        m = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(n.body),
        d = c || m,
        f = n.body.indexOf(",") >= 0;
      if (!d && !f) return n.post.match(/,(?!,).*\}/) ? ((t = n.pre + "{" + n.body + WZt + n.post), I_e(t)) : [t];
      var p;
      if (d) p = n.body.split(/\.\./);
      else if (((p = WBn(n.body)), p.length === 1 && ((p = I_e(p[0], !1).map(ljs)), p.length === 1)))
        return s.map(function (O) {
          return n.pre + p[0] + O;
        });
      var h;
      if (d) {
        var g = VZt(p[0]),
          b = VZt(p[1]),
          A = Math.max(p[0].length, p[1].length),
          y = p.length == 3 ? Math.abs(VZt(p[2])) : 1,
          E = djs,
          v = b < g;
        v && ((y *= -1), (E = fjs));
        var C = p.some(mjs);
        h = [];
        for (var x = g; E(x, b); x += y) {
          var k;
          if (m) ((k = String.fromCharCode(x)), k === "\\" && (k = ""));
          else if (((k = String(x)), C)) {
            var R = A - k.length;
            if (R > 0) {
              var P = new Array(R + 1).join("0");
              x < 0 ? (k = "-" + P + k.slice(1)) : (k = P + k);
            }
          }
          h.push(k);
        }
      } else {
        h = [];
        for (var D = 0; D < p.length; D++) h.push.apply(h, I_e(p[D], !1));
      }
      for (var D = 0; D < h.length; D++)
        for (var a = 0; a < s.length; a++) {
          var u = o + h[D] + s[a];
          (!e || d || u) && r.push(u);
        }
    }
    return r;
  }
});