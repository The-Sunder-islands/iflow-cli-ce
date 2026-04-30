/**
 * @module Nd
 * @category browser/playwright
 * @label playwright
 * @position 1000 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Nd) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Nd = T((Gf) => {
  "use strict";
  var eF = Fk(),
    iEs = jHt(),
    Aae = j6e(),
    KHt = bae();
  YHt();
  function oEs(t) {
    var e = null;
    return (eF.uint8array ? (e = new Uint8Array(t.length)) : (e = new Array(t.length)), nXe(t, e));
  }
  Gf.newBlob = function (t, e) {
    Gf.checkSupport("blob");
    try {
      return new Blob([t], { type: e });
    } catch {
      try {
        var r = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder,
          n = new r();
        return (n.append(t), n.getBlob(e));
      } catch {
        throw new Error("Bug : can't construct the Blob.");
      }
    }
  };
  function V6e(t) {
    return t;
  }
  function nXe(t, e) {
    for (var r = 0; r < t.length; ++r) e[r] = t.charCodeAt(r) & 255;
    return e;
  }
  var rXe = {
    stringifyByChunk: function (t, e, r) {
      var n = [],
        o = 0,
        s = t.length;
      if (s <= r) return String.fromCharCode.apply(null, t);
      for (; o < s; )
        (e === "array" || e === "nodebuffer"
          ? n.push(String.fromCharCode.apply(null, t.slice(o, Math.min(o + r, s))))
          : n.push(String.fromCharCode.apply(null, t.subarray(o, Math.min(o + r, s)))),
          (o += r));
      return n.join("");
    },
    stringifyByChar: function (t) {
      for (var e = "", r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
      return e;
    },
    applyCanBeUsed: {
      uint8array: (function () {
        try {
          return eF.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch {
          return !1;
        }
      })(),
      nodebuffer: (function () {
        try {
          return eF.nodebuffer && String.fromCharCode.apply(null, Aae.allocBuffer(1)).length === 1;
        } catch {
          return !1;
        }
      })(),
    },
  };
  function W6e(t) {
    var e = 65536,
      r = Gf.getTypeOf(t),
      n = !0;
    if (
      (r === "uint8array"
        ? (n = rXe.applyCanBeUsed.uint8array)
        : r === "nodebuffer" && (n = rXe.applyCanBeUsed.nodebuffer),
      n)
    )
      for (; e > 1; )
        try {
          return rXe.stringifyByChunk(t, r, e);
        } catch {
          e = Math.floor(e / 2);
        }
    return rXe.stringifyByChar(t);
  }
  Gf.applyFromCharCode = W6e;
  function iXe(t, e) {
    for (var r = 0; r < t.length; r++) e[r] = t[r];
    return e;
  }
  var tF = {};
  tF.string = {
    string: V6e,
    array: function (t) {
      return nXe(t, new Array(t.length));
    },
    arraybuffer: function (t) {
      return tF.string.uint8array(t).buffer;
    },
    uint8array: function (t) {
      return nXe(t, new Uint8Array(t.length));
    },
    nodebuffer: function (t) {
      return nXe(t, Aae.allocBuffer(t.length));
    },
  };
  tF.array = {
    string: W6e,
    array: V6e,
    arraybuffer: function (t) {
      return new Uint8Array(t).buffer;
    },
    uint8array: function (t) {
      return new Uint8Array(t);
    },
    nodebuffer: function (t) {
      return Aae.newBufferFrom(t);
    },
  };
  tF.arraybuffer = {
    string: function (t) {
      return W6e(new Uint8Array(t));
    },
    array: function (t) {
      return iXe(new Uint8Array(t), new Array(t.byteLength));
    },
    arraybuffer: V6e,
    uint8array: function (t) {
      return new Uint8Array(t);
    },
    nodebuffer: function (t) {
      return Aae.newBufferFrom(new Uint8Array(t));
    },
  };
  tF.uint8array = {
    string: W6e,
    array: function (t) {
      return iXe(t, new Array(t.length));
    },
    arraybuffer: function (t) {
      return t.buffer;
    },
    uint8array: V6e,
    nodebuffer: function (t) {
      return Aae.newBufferFrom(t);
    },
  };
  tF.nodebuffer = {
    string: W6e,
    array: function (t) {
      return iXe(t, new Array(t.length));
    },
    arraybuffer: function (t) {
      return tF.nodebuffer.uint8array(t).buffer;
    },
    uint8array: function (t) {
      return iXe(t, new Uint8Array(t.length));
    },
    nodebuffer: V6e,
  };
  Gf.transformTo = function (t, e) {
    if ((e || (e = ""), !t)) return e;
    Gf.checkSupport(t);
    var r = Gf.getTypeOf(e),
      n = tF[r][t](e);
    return n;
  };
  Gf.resolve = function (t) {
    for (var e = t.split("/"), r = [], n = 0; n < e.length; n++) {
      var o = e[n];
      o === "." || (o === "" && n !== 0 && n !== e.length - 1) || (o === ".." ? r.pop() : r.push(o));
    }
    return r.join("/");
  };
  Gf.getTypeOf = function (t) {
    if (typeof t == "string") return "string";
    if (Object.prototype.toString.call(t) === "[object Array]") return "array";
    if (eF.nodebuffer && Aae.isBuffer(t)) return "nodebuffer";
    if (eF.uint8array && t instanceof Uint8Array) return "uint8array";
    if (eF.arraybuffer && t instanceof ArrayBuffer) return "arraybuffer";
  };
  Gf.checkSupport = function (t) {
    var e = eF[t.toLowerCase()];
    if (!e) throw new Error(t + " is not supported by this platform");
  };
  Gf.MAX_VALUE_16BITS = 65535;
  Gf.MAX_VALUE_32BITS = -1;
  Gf.pretty = function (t) {
    var e = "",
      r,
      n;
    for (n = 0; n < (t || "").length; n++)
      ((r = t.charCodeAt(n)), (e += "\\x" + (r < 16 ? "0" : "") + r.toString(16).toUpperCase()));
    return e;
  };
  Gf.delay = function (t, e, r) {
    setImmediate(function () {
      t.apply(r || null, e || []);
    });
  };
  Gf.inherits = function (t, e) {
    var r = function () {};
    ((r.prototype = e.prototype), (t.prototype = new r()));
  };
  Gf.extend = function () {
    var t = {},
      e,
      r;
    for (e = 0; e < arguments.length; e++)
      for (r in arguments[e])
        Object.prototype.hasOwnProperty.call(arguments[e], r) && typeof t[r] > "u" && (t[r] = arguments[e][r]);
    return t;
  };
  Gf.prepareContent = function (t, e, r, n, o) {
    var s = KHt.Promise.resolve(e).then(function (a) {
      var u =
        eF.blob &&
        (a instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(a)) !== -1);
      return u && typeof FileReader < "u"
        ? new KHt.Promise(function (c, m) {
            var d = new FileReader();
            ((d.onload = function (f) {
              c(f.target.result);
            }),
              (d.onerror = function (f) {
                m(f.target.error);
              }),
              d.readAsArrayBuffer(a));
          })
        : a;
    });
    return s.then(function (a) {
      var u = Gf.getTypeOf(a);
      return u
        ? (u === "arraybuffer"
            ? (a = Gf.transformTo("uint8array", a))
            : u === "string" && (o ? (a = iEs.decode(a)) : r && n !== !0 && (a = oEs(a))),
          a)
        : KHt.Promise.reject(
            new Error(
              "Can't read the data of '" +
                t +
                "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?",
            ),
          );
    });
  };
});