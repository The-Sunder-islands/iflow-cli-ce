/**
 * @module ZFn
 * @category unknown
 * @label unknown
 * @position 1362 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ZFn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ZFn = T((Q8c, XFn) => {
  var dWs = HFn(),
    VFn = Ptt();
  XFn.exports = hWs;
  var WFn = "\0SLASH" + Math.random() + "\0",
    zFn = "\0OPEN" + Math.random() + "\0",
    ptr = "\0CLOSE" + Math.random() + "\0",
    YFn = "\0COMMA" + Math.random() + "\0",
    KFn = "\0PERIOD" + Math.random() + "\0";
  function ftr(t) {
    return parseInt(t, 10) == t ? parseInt(t, 10) : t.charCodeAt(0);
  }
  function fWs(t) {
    return t
      .split("\\\\")
      .join(WFn)
      .split("\\{")
      .join(zFn)
      .split("\\}")
      .join(ptr)
      .split("\\,")
      .join(YFn)
      .split("\\.")
      .join(KFn);
  }
  function pWs(t) {
    return t.split(WFn).join("\\").split(zFn).join("{").split(ptr).join("}").split(YFn).join(",").split(KFn).join(".");
  }
  function JFn(t) {
    if (!t) return [""];
    var e = [],
      r = VFn("{", "}", t);
    if (!r) return t.split(",");
    var n = r.pre,
      o = r.body,
      s = r.post,
      a = n.split(",");
    a[a.length - 1] += "{" + o + "}";
    var u = JFn(s);
    return (s.length && ((a[a.length - 1] += u.shift()), a.push.apply(a, u)), e.push.apply(e, a), e);
  }
  function hWs(t) {
    return t ? (t.substr(0, 2) === "{}" && (t = "\\{\\}" + t.substr(2)), ece(fWs(t), !0).map(pWs)) : [];
  }
  function gWs(t) {
    return "{" + t + "}";
  }
  function bWs(t) {
    return /^-?0\d/.test(t);
  }
  function AWs(t, e) {
    return t <= e;
  }
  function yWs(t, e) {
    return t >= e;
  }
  function ece(t, e) {
    var r = [],
      n = VFn("{", "}", t);
    if (!n || /\$$/.test(n.pre)) return [t];
    var o = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(n.body),
      s = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(n.body),
      a = o || s,
      u = n.body.indexOf(",") >= 0;
    if (!a && !u) return n.post.match(/,(?!,).*\}/) ? ((t = n.pre + "{" + n.body + ptr + n.post), ece(t)) : [t];
    var c;
    if (a) c = n.body.split(/\.\./);
    else if (((c = JFn(n.body)), c.length === 1 && ((c = ece(c[0], !1).map(gWs)), c.length === 1))) {
      var d = n.post.length ? ece(n.post, !1) : [""];
      return d.map(function (N) {
        return n.pre + c[0] + N;
      });
    }
    var m = n.pre,
      d = n.post.length ? ece(n.post, !1) : [""],
      f;
    if (a) {
      var p = ftr(c[0]),
        h = ftr(c[1]),
        g = Math.max(c[0].length, c[1].length),
        b = c.length == 3 ? Math.abs(ftr(c[2])) : 1,
        A = AWs,
        y = h < p;
      y && ((b *= -1), (A = yWs));
      var E = c.some(bWs);
      f = [];
      for (var v = p; A(v, h); v += b) {
        var C;
        if (s) ((C = String.fromCharCode(v)), C === "\\" && (C = ""));
        else if (((C = String(v)), E)) {
          var x = g - C.length;
          if (x > 0) {
            var k = new Array(x + 1).join("0");
            v < 0 ? (C = "-" + k + C.slice(1)) : (C = k + C);
          }
        }
        f.push(C);
      }
    } else
      f = dWs(c, function (O) {
        return ece(O, !1);
      });
    for (var R = 0; R < f.length; R++)
      for (var P = 0; P < d.length; P++) {
        var D = m + f[R] + d[P];
        (!e || a || D) && r.push(D);
      }
    return r;
  }
});