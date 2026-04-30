/**
 * @module vSn
 * @category utils/xml
 * @label xml
 * @position 1049 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vSn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vSn = T((AWt) => {
  var wye = pye().NAMESPACE,
    bWt =
      /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    hSn = new RegExp("[\\-\\.0-9" + bWt.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),
    gSn = new RegExp("^" + bWt.source + hSn.source + "*(?::" + bWt.source + hSn.source + "*)?$"),
    vye = 0,
    mF = 1,
    jae = 2,
    Cye = 3,
    Qae = 4,
    Gae = 5,
    Sye = 6,
    VXe = 7;
  function qae(t, e) {
    ((this.message = t), (this.locator = e), Error.captureStackTrace && Error.captureStackTrace(this, qae));
  }
  qae.prototype = new Error();
  qae.prototype.name = qae.name;
  function ySn() {}
  ySn.prototype = {
    parse: function (t, e, r) {
      var n = this.domBuilder;
      (n.startDocument(), _Sn(e, (e = {})), I4s(t, e, r, n, this.errorHandler), n.endDocument());
    },
  };
  function I4s(t, e, r, n, o) {
    function s(Q) {
      if (Q > 65535) {
        Q -= 65536;
        var K = 55296 + (Q >> 10),
          H = 56320 + (Q & 1023);
        return String.fromCharCode(K, H);
      } else return String.fromCharCode(Q);
    }
    function a(Q) {
      var K = Q.slice(1, -1);
      return Object.hasOwnProperty.call(r, K)
        ? r[K]
        : K.charAt(0) === "#"
          ? s(parseInt(K.substr(1).replace("x", "0x")))
          : (o.error("entity not found:" + Q), Q);
    }
    function u(Q) {
      if (Q > b) {
        var K = t.substring(b, Q).replace(/&#?\w+;/g, a);
        (p && c(b), n.characters(K, 0, Q - b), (b = Q));
      }
    }
    function c(Q, K) {
      for (; Q >= d && (K = f.exec(t)); ) ((m = K.index), (d = m + K[0].length), p.lineNumber++);
      p.columnNumber = Q - m + 1;
    }
    for (var m = 0, d = 0, f = /.*(?:\r\n?|\n)|.*$/g, p = n.locator, h = [{ currentNSMap: e }], g = {}, b = 0; ; ) {
      try {
        var A = t.indexOf("<", b);
        if (A < 0) {
          if (!t.substr(b).match(/^\s*$/)) {
            var y = n.doc,
              E = y.createTextNode(t.substr(b));
            (y.appendChild(E), (n.currentElement = E));
          }
          return;
        }
        switch ((A > b && u(A), t.charAt(A + 1))) {
          case "/":
            var N = t.indexOf(">", A + 3),
              v = t.substring(A + 2, N).replace(/[ \t\n\r]+$/g, ""),
              C = h.pop();
            N < 0
              ? ((v = t.substring(A + 2).replace(/[\s<].*/, "")),
                o.error("end tag name: " + v + " is not complete:" + C.tagName),
                (N = A + 1 + v.length))
              : v.match(/\s</) &&
                ((v = v.replace(/[\s<].*/, "")),
                o.error("end tag name: " + v + " maybe not complete"),
                (N = A + 1 + v.length));
            var x = C.localNSMap,
              k = C.tagName == v,
              R = k || (C.tagName && C.tagName.toLowerCase() == v.toLowerCase());
            if (R) {
              if ((n.endElement(C.uri, C.localName, v), x))
                for (var P in x) Object.prototype.hasOwnProperty.call(x, P) && n.endPrefixMapping(P);
              k || o.fatalError("end tag name: " + v + " is not match the current start tagName:" + C.tagName);
            } else h.push(C);
            N++;
            break;
          case "?":
            (p && c(A), (N = P4s(t, A, n)));
            break;
          case "!":
            (p && c(A), (N = N4s(t, A, n, o)));
            break;
          default:
            p && c(A);
            var D = new ESn(),
              O = h[h.length - 1].currentNSMap,
              N = R4s(t, A, D, O, a, o),
              F = D.length;
            if (
              (!D.closed && O4s(t, N, D.tagName, g) && ((D.closed = !0), r.nbsp || o.warning("unclosed xml attribute")),
              p && F)
            ) {
              for (var B = bSn(p, {}), L = 0; L < F; L++) {
                var G = D[L];
                (c(G.offset), (G.locator = bSn(p, {})));
              }
              ((n.locator = B), ASn(D, n, O) && h.push(D), (n.locator = p));
            } else ASn(D, n, O) && h.push(D);
            wye.isHTML(D.uri) && !D.closed ? (N = k4s(t, N, D.tagName, a, n)) : N++;
        }
      } catch (Q) {
        if (Q instanceof qae) throw Q;
        (o.error("element parse error: " + Q), (N = -1));
      }
      N > b ? (b = N) : u(Math.max(A, b) + 1);
    }
  }
  function bSn(t, e) {
    return ((e.lineNumber = t.lineNumber), (e.columnNumber = t.columnNumber), e);
  }
  function R4s(t, e, r, n, o, s) {
    function a(h, g, b) {
      (r.attributeNames.hasOwnProperty(h) && s.fatalError("Attribute " + h + " redefined"),
        r.addValue(h, g.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, o), b));
    }
    for (var u, c, m = ++e, d = vye; ; ) {
      var f = t.charAt(m);
      switch (f) {
        case "=":
          if (d === mF) ((u = t.slice(e, m)), (d = Cye));
          else if (d === jae) d = Cye;
          else throw new Error("attribute equal must after attrName");
          break;
        case "'":
        case '"':
          if (d === Cye || d === mF)
            if (
              (d === mF && (s.warning('attribute value must after "="'), (u = t.slice(e, m))),
              (e = m + 1),
              (m = t.indexOf(f, e)),
              m > 0)
            )
              ((c = t.slice(e, m)), a(u, c, e - 1), (d = Gae));
            else throw new Error("attribute value no end '" + f + "' match");
          else if (d == Qae)
            ((c = t.slice(e, m)),
              a(u, c, e),
              s.warning('attribute "' + u + '" missed start quot(' + f + ")!!"),
              (e = m + 1),
              (d = Gae));
          else throw new Error('attribute value must after "="');
          break;
        case "/":
          switch (d) {
            case vye:
              r.setTagName(t.slice(e, m));
            case Gae:
            case Sye:
            case VXe:
              ((d = VXe), (r.closed = !0));
            case Qae:
            case mF:
              break;
            case jae:
              r.closed = !0;
              break;
            default:
              throw new Error("attribute invalid close char('/')");
          }
          break;
        case "":
          return (s.error("unexpected end of input"), d == vye && r.setTagName(t.slice(e, m)), m);
        case ">":
          switch (d) {
            case vye:
              r.setTagName(t.slice(e, m));
            case Gae:
            case Sye:
            case VXe:
              break;
            case Qae:
            case mF:
              ((c = t.slice(e, m)), c.slice(-1) === "/" && ((r.closed = !0), (c = c.slice(0, -1))));
            case jae:
              (d === jae && (c = u),
                d == Qae
                  ? (s.warning('attribute "' + c + '" missed quot(")!'), a(u, c, e))
                  : ((!wye.isHTML(n[""]) || !c.match(/^(?:disabled|checked|selected)$/i)) &&
                      s.warning('attribute "' + c + '" missed value!! "' + c + '" instead!!'),
                    a(c, c, e)));
              break;
            case Cye:
              throw new Error("attribute value missed!!");
          }
          return m;
        case "\x80":
          f = " ";
        default:
          if (f <= " ")
            switch (d) {
              case vye:
                (r.setTagName(t.slice(e, m)), (d = Sye));
                break;
              case mF:
                ((u = t.slice(e, m)), (d = jae));
                break;
              case Qae:
                var c = t.slice(e, m);
                (s.warning('attribute "' + c + '" missed quot(")!!'), a(u, c, e));
              case Gae:
                d = Sye;
                break;
            }
          else
            switch (d) {
              case jae:
                var p = r.tagName;
                ((!wye.isHTML(n[""]) || !u.match(/^(?:disabled|checked|selected)$/i)) &&
                  s.warning('attribute "' + u + '" missed value!! "' + u + '" instead2!!'),
                  a(u, u, e),
                  (e = m),
                  (d = mF));
                break;
              case Gae:
                s.warning('attribute space is required"' + u + '"!!');
              case Sye:
                ((d = mF), (e = m));
                break;
              case Cye:
                ((d = Qae), (e = m));
                break;
              case VXe:
                throw new Error("elements closed character '/' and '>' must be connected to");
            }
      }
      m++;
    }
  }
  function ASn(t, e, r) {
    for (var n = t.tagName, o = null, f = t.length; f--; ) {
      var s = t[f],
        a = s.qName,
        u = s.value,
        p = a.indexOf(":");
      if (p > 0)
        var c = (s.prefix = a.slice(0, p)),
          m = a.slice(p + 1),
          d = c === "xmlns" && m;
      else ((m = a), (c = null), (d = a === "xmlns" && ""));
      ((s.localName = m),
        d !== !1 &&
          (o == null && ((o = {}), _Sn(r, (r = {}))),
          (r[d] = o[d] = u),
          (s.uri = wye.XMLNS),
          e.startPrefixMapping(d, u)));
    }
    for (var f = t.length; f--; ) {
      s = t[f];
      var c = s.prefix;
      c && (c === "xml" && (s.uri = wye.XML), c !== "xmlns" && (s.uri = r[c || ""]));
    }
    var p = n.indexOf(":");
    p > 0 ? ((c = t.prefix = n.slice(0, p)), (m = t.localName = n.slice(p + 1))) : ((c = null), (m = t.localName = n));
    var h = (t.uri = r[c || ""]);
    if ((e.startElement(h, m, n, t), t.closed)) {
      if ((e.endElement(h, m, n), o)) for (c in o) Object.prototype.hasOwnProperty.call(o, c) && e.endPrefixMapping(c);
    } else return ((t.currentNSMap = r), (t.localNSMap = o), !0);
  }
  function k4s(t, e, r, n, o) {
    if (/^(?:script|textarea)$/i.test(r)) {
      var s = t.indexOf("</" + r + ">", e),
        a = t.substring(e + 1, s);
      if (/[&<]/.test(a))
        return /^script$/i.test(r)
          ? (o.characters(a, 0, a.length), s)
          : ((a = a.replace(/&#?\w+;/g, n)), o.characters(a, 0, a.length), s);
    }
    return e + 1;
  }
  function O4s(t, e, r, n) {
    var o = n[r];
    return (
      o == null && ((o = t.lastIndexOf("</" + r + ">")), o < e && (o = t.lastIndexOf("</" + r)), (n[r] = o)),
      o < e
    );
  }
  function _Sn(t, e) {
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  }
  function N4s(t, e, r, n) {
    var o = t.charAt(e + 2);
    switch (o) {
      case "-":
        if (t.charAt(e + 3) === "-") {
          var s = t.indexOf("-->", e + 4);
          return s > e ? (r.comment(t, e + 4, s - e - 4), s + 3) : (n.error("Unclosed comment"), -1);
        } else return -1;
      default:
        if (t.substr(e + 3, 6) == "CDATA[") {
          var s = t.indexOf("]]>", e + 9);
          return (r.startCDATA(), r.characters(t, e + 9, s - e - 9), r.endCDATA(), s + 3);
        }
        var a = B4s(t, e),
          u = a.length;
        if (u > 1 && /!doctype/i.test(a[0][0])) {
          var c = a[1][0],
            m = !1,
            d = !1;
          u > 3 &&
            (/^public$/i.test(a[2][0])
              ? ((m = a[3][0]), (d = u > 4 && a[4][0]))
              : /^system$/i.test(a[2][0]) && (d = a[3][0]));
          var f = a[u - 1];
          return (r.startDTD(c, m, d), r.endDTD(), f.index + f[0].length);
        }
    }
    return -1;
  }
  function P4s(t, e, r) {
    var n = t.indexOf("?>", e);
    if (n) {
      var o = t.substring(e, n).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
      if (o) {
        var s = o[0].length;
        return (r.processingInstruction(o[1], o[2]), n + 2);
      } else return -1;
    }
    return -1;
  }
  function ESn() {
    this.attributeNames = {};
  }
  ESn.prototype = {
    setTagName: function (t) {
      if (!gSn.test(t)) throw new Error("invalid tagName:" + t);
      this.tagName = t;
    },
    addValue: function (t, e, r) {
      if (!gSn.test(t)) throw new Error("invalid attribute:" + t);
      ((this.attributeNames[t] = this.length), (this[this.length++] = { qName: t, value: e, offset: r }));
    },
    length: 0,
    getLocalName: function (t) {
      return this[t].localName;
    },
    getLocator: function (t) {
      return this[t].locator;
    },
    getQName: function (t) {
      return this[t].qName;
    },
    getURI: function (t) {
      return this[t].uri;
    },
    getValue: function (t) {
      return this[t].value;
    },
  };
  function B4s(t, e) {
    var r,
      n = [],
      o = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (o.lastIndex = e, o.exec(t); (r = o.exec(t)); ) if ((n.push(r), r[1])) return n;
  }
  AWt.XMLReader = ySn;
  AWt.ParseError = qae;
});