/**
 * @module ISn
 * @category utils/xml
 * @label xml
 * @position 1050 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ISn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ISn = T((zXe) => {
  var L4s = pye(),
    M4s = HXe(),
    CSn = pSn(),
    xSn = vSn(),
    F4s = M4s.DOMImplementation,
    SSn = L4s.NAMESPACE,
    U4s = xSn.ParseError,
    $4s = xSn.XMLReader;
  function TSn(t) {
    return t
      .replace(
        /\r[\n\u0085]/g,
        `
`,
      )
      .replace(
        /[\r\u0085\u2028]/g,
        `
`,
      );
  }
  function DSn(t) {
    this.options = t || { locator: {} };
  }
  DSn.prototype.parseFromString = function (t, e) {
    var r = this.options,
      n = new $4s(),
      o = r.domBuilder || new xye(),
      s = r.errorHandler,
      a = r.locator,
      u = r.xmlns || {},
      c = /\/x?html?$/.test(e),
      m = c ? CSn.HTML_ENTITIES : CSn.XML_ENTITIES;
    (a && o.setDocumentLocator(a),
      (n.errorHandler = j4s(s, o, a)),
      (n.domBuilder = r.domBuilder || o),
      c && (u[""] = SSn.HTML),
      (u.xml = u.xml || SSn.XML));
    var d = r.normalizeLineEndings || TSn;
    return (t && typeof t == "string" ? n.parse(d(t), u, m) : n.errorHandler.error("invalid doc source"), o.doc);
  };
  function j4s(t, e, r) {
    if (!t) {
      if (e instanceof xye) return e;
      t = e;
    }
    var n = {},
      o = t instanceof Function;
    r = r || {};
    function s(a) {
      var u = t[a];
      (!u &&
        o &&
        (u =
          t.length == 2
            ? function (c) {
                t(a, c);
              }
            : t),
        (n[a] =
          (u &&
            function (c) {
              u("[xmldom " + a + "]	" + c + yWt(r));
            }) ||
          function () {}));
    }
    return (s("warning"), s("error"), s("fatalError"), n);
  }
  function xye() {
    this.cdata = !1;
  }
  function Hae(t, e) {
    ((e.lineNumber = t.lineNumber), (e.columnNumber = t.columnNumber));
  }
  xye.prototype = {
    startDocument: function () {
      ((this.doc = new F4s().createDocument(null, null, null)),
        this.locator && (this.doc.documentURI = this.locator.systemId));
    },
    startElement: function (t, e, r, n) {
      var o = this.doc,
        s = o.createElementNS(t, r || e),
        a = n.length;
      (WXe(this, s), (this.currentElement = s), this.locator && Hae(this.locator, s));
      for (var u = 0; u < a; u++) {
        var t = n.getURI(u),
          c = n.getValue(u),
          r = n.getQName(u),
          m = o.createAttributeNS(t, r);
        (this.locator && Hae(n.getLocator(u), m), (m.value = m.nodeValue = c), s.setAttributeNode(m));
      }
    },
    endElement: function (t, e, r) {
      var n = this.currentElement,
        o = n.tagName;
      this.currentElement = n.parentNode;
    },
    startPrefixMapping: function (t, e) {},
    endPrefixMapping: function (t) {},
    processingInstruction: function (t, e) {
      var r = this.doc.createProcessingInstruction(t, e);
      (this.locator && Hae(this.locator, r), WXe(this, r));
    },
    ignorableWhitespace: function (t, e, r) {},
    characters: function (t, e, r) {
      if (((t = wSn.apply(this, arguments)), t)) {
        if (this.cdata) var n = this.doc.createCDATASection(t);
        else var n = this.doc.createTextNode(t);
        (this.currentElement ? this.currentElement.appendChild(n) : /^\s*$/.test(t) && this.doc.appendChild(n),
          this.locator && Hae(this.locator, n));
      }
    },
    skippedEntity: function (t) {},
    endDocument: function () {
      this.doc.normalize();
    },
    setDocumentLocator: function (t) {
      (this.locator = t) && (t.lineNumber = 0);
    },
    comment: function (t, e, r) {
      t = wSn.apply(this, arguments);
      var n = this.doc.createComment(t);
      (this.locator && Hae(this.locator, n), WXe(this, n));
    },
    startCDATA: function () {
      this.cdata = !0;
    },
    endCDATA: function () {
      this.cdata = !1;
    },
    startDTD: function (t, e, r) {
      var n = this.doc.implementation;
      if (n && n.createDocumentType) {
        var o = n.createDocumentType(t, e, r);
        (this.locator && Hae(this.locator, o), WXe(this, o), (this.doc.doctype = o));
      }
    },
    warning: function (t) {
      console.warn("[xmldom warning]	" + t, yWt(this.locator));
    },
    error: function (t) {
      console.error("[xmldom error]	" + t, yWt(this.locator));
    },
    fatalError: function (t) {
      throw new U4s(t, this.locator);
    },
  };
  function yWt(t) {
    if (t)
      return (
        `
@` +
        (t.systemId || "") +
        "#[line:" +
        t.lineNumber +
        ",col:" +
        t.columnNumber +
        "]"
      );
  }
  function wSn(t, e, r) {
    return typeof t == "string" ? t.substr(e, r) : t.length >= e + r || e ? new java.lang.String(t, e, r) + "" : t;
  }
  "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(
    /\w+/g,
    function (t) {
      xye.prototype[t] = function () {
        return null;
      };
    },
  );
  function WXe(t, e) {
    t.currentElement ? t.currentElement.appendChild(e) : t.doc.appendChild(e);
  }
  zXe.__DOMHandler = xye;
  zXe.normalizeLineEndings = TSn;
  zXe.DOMParser = DSn;
});