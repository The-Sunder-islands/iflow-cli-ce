/**
 * @module Bh
 * @category utils/oop
 * @label oop
 * @position 464 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Bh) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Bh = T((eMu, SZr) => {
  "use strict";
  var G1 = (SZr.exports = _x()),
    CZr = $vt(),
    gTt,
    bTt;
  G1.codegen = XXr();
  G1.fetch = eZr();
  G1.path = nZr();
  G1.fs = G1.inquire("fs");
  G1.toArray = function (e) {
    if (e) {
      for (var r = Object.keys(e), n = new Array(r.length), o = 0; o < r.length; ) n[o] = e[r[o++]];
      return n;
    }
    return [];
  };
  G1.toObject = function (e) {
    for (var r = {}, n = 0; n < e.length; ) {
      var o = e[n++],
        s = e[n++];
      s !== void 0 && (r[o] = s);
    }
    return r;
  };
  var QFo = /\\/g,
    GFo = /"/g;
  G1.isReserved = function (e) {
    return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(
      e,
    );
  };
  G1.safeProp = function (e) {
    return !/^[$\w_]+$/.test(e) || G1.isReserved(e)
      ? '["' + e.replace(QFo, "\\\\").replace(GFo, '\\"') + '"]'
      : "." + e;
  };
  G1.ucFirst = function (e) {
    return e.charAt(0).toUpperCase() + e.substring(1);
  };
  var qFo = /_([a-z])/g;
  G1.camelCase = function (e) {
    return (
      e.substring(0, 1) +
      e.substring(1).replace(qFo, function (r, n) {
        return n.toUpperCase();
      })
    );
  };
  G1.compareFieldsById = function (e, r) {
    return e.id - r.id;
  };
  G1.decorateType = function (e, r) {
    if (e.$type)
      return (
        r && e.$type.name !== r && (G1.decorateRoot.remove(e.$type), (e.$type.name = r), G1.decorateRoot.add(e.$type)),
        e.$type
      );
    gTt || (gTt = KFe());
    var n = new gTt(r || e.name);
    return (
      G1.decorateRoot.add(n),
      (n.ctor = e),
      Object.defineProperty(e, "$type", { value: n, enumerable: !1 }),
      Object.defineProperty(e.prototype, "$type", { value: n, enumerable: !1 }),
      n
    );
  };
  var HFo = 0;
  G1.decorateEnum = function (e) {
    if (e.$type) return e.$type;
    bTt || (bTt = XC());
    var r = new bTt("Enum" + HFo++, e);
    return (G1.decorateRoot.add(r), Object.defineProperty(e, "$type", { value: r, enumerable: !1 }), r);
  };
  G1.setProperty = function (e, r, n, o) {
    function s(a, u, c) {
      var m = u.shift();
      if (m === "__proto__" || m === "prototype") return a;
      if (u.length > 0) a[m] = s(a[m] || {}, u, c);
      else {
        var d = a[m];
        if (d && o) return a;
        (d && (c = [].concat(d).concat(c)), (a[m] = c));
      }
      return a;
    }
    if (typeof e != "object") throw TypeError("dst must be an object");
    if (!r) throw TypeError("path must be specified");
    return ((r = r.split(".")), s(e, r, n));
  };
  Object.defineProperty(G1, "decorateRoot", {
    get: function () {
      return CZr.decorated || (CZr.decorated = new (eUe())());
    },
  });
});