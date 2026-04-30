/**
 * @module HXe
 * @category utils/xml
 * @label xml
 * @position 1047 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (HXe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var HXe = T((lF) => {
  var W4n = pye(),
    YT = W4n.find,
    hye = W4n.NAMESPACE;
  function g4s(t) {
    return t !== "";
  }
  function b4s(t) {
    return t ? t.split(/[\t\n\f\r ]+/).filter(g4s) : [];
  }
  function A4s(t, e) {
    return (t.hasOwnProperty(e) || (t[e] = !0), t);
  }
  function $4n(t) {
    if (!t) return [];
    var e = b4s(t);
    return Object.keys(e.reduce(A4s, {}));
  }
  function y4s(t) {
    return function (e) {
      return t && t.indexOf(e) !== -1;
    };
  }
  function Aye(t, e) {
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  }
  function Q8(t, e) {
    var r = t.prototype;
    if (!(r instanceof e)) {
      let o = function () {};
      var n = o;
      ((o.prototype = e.prototype), (o = new o()), Aye(r, o), (t.prototype = r = o));
    }
    r.constructor != t && (typeof t != "function" && console.error("unknown Class:" + t), (r.constructor = t));
  }
  var G8 = {},
    TE = (G8.ELEMENT_NODE = 1),
    Uae = (G8.ATTRIBUTE_NODE = 2),
    UXe = (G8.TEXT_NODE = 3),
    z4n = (G8.CDATA_SECTION_NODE = 4),
    Y4n = (G8.ENTITY_REFERENCE_NODE = 5),
    _4s = (G8.ENTITY_NODE = 6),
    K4n = (G8.PROCESSING_INSTRUCTION_NODE = 7),
    J4n = (G8.COMMENT_NODE = 8),
    X4n = (G8.DOCUMENT_NODE = 9),
    Z4n = (G8.DOCUMENT_TYPE_NODE = 10),
    Vk = (G8.DOCUMENT_FRAGMENT_NODE = 11),
    E4s = (G8.NOTATION_NODE = 12),
    Jb = {},
    Yh = {},
    ngc = (Jb.INDEX_SIZE_ERR = ((Yh[1] = "Index size error"), 1)),
    igc = (Jb.DOMSTRING_SIZE_ERR = ((Yh[2] = "DOMString size error"), 2)),
    j8 = (Jb.HIERARCHY_REQUEST_ERR = ((Yh[3] = "Hierarchy request error"), 3)),
    ogc = (Jb.WRONG_DOCUMENT_ERR = ((Yh[4] = "Wrong document"), 4)),
    sgc = (Jb.INVALID_CHARACTER_ERR = ((Yh[5] = "Invalid character"), 5)),
    agc = (Jb.NO_DATA_ALLOWED_ERR = ((Yh[6] = "No data allowed"), 6)),
    ugc = (Jb.NO_MODIFICATION_ALLOWED_ERR = ((Yh[7] = "No modification allowed"), 7)),
    eSn = (Jb.NOT_FOUND_ERR = ((Yh[8] = "Not found"), 8)),
    cgc = (Jb.NOT_SUPPORTED_ERR = ((Yh[9] = "Not supported"), 9)),
    j4n = (Jb.INUSE_ATTRIBUTE_ERR = ((Yh[10] = "Attribute in use"), 10)),
    lgc = (Jb.INVALID_STATE_ERR = ((Yh[11] = "Invalid state"), 11)),
    mgc = (Jb.SYNTAX_ERR = ((Yh[12] = "Syntax error"), 12)),
    dgc = (Jb.INVALID_MODIFICATION_ERR = ((Yh[13] = "Invalid modification"), 13)),
    fgc = (Jb.NAMESPACE_ERR = ((Yh[14] = "Invalid namespace"), 14)),
    pgc = (Jb.INVALID_ACCESS_ERR = ((Yh[15] = "Invalid access"), 15));
  function tf(t, e) {
    if (e instanceof Error) var r = e;
    else
      ((r = this),
        Error.call(this, Yh[t]),
        (this.message = Yh[t]),
        Error.captureStackTrace && Error.captureStackTrace(this, tf));
    return ((r.code = t), e && (this.message = this.message + ": " + e), r);
  }
  tf.prototype = Error.prototype;
  Aye(Jb, tf);
  function Hk() {}
  Hk.prototype = {
    length: 0,
    item: function (t) {
      return t >= 0 && t < this.length ? this[t] : null;
    },
    toString: function (t, e) {
      for (var r = [], n = 0; n < this.length; n++) Fae(this[n], r, t, e);
      return r.join("");
    },
    filter: function (t) {
      return Array.prototype.filter.call(this, t);
    },
    indexOf: function (t) {
      return Array.prototype.indexOf.call(this, t);
    },
  };
  function $ae(t, e) {
    ((this._node = t), (this._refresh = e), cWt(this));
  }
  function cWt(t) {
    var e = t._node._inc || t._node.ownerDocument._inc;
    if (t._inc !== e) {
      var r = t._refresh(t._node);
      if ((dSn(t, "length", r.length), !t.$$length || r.length < t.$$length))
        for (var n = r.length; n in t; n++) Object.prototype.hasOwnProperty.call(t, n) && delete t[n];
      (Aye(r, t), (t._inc = e));
    }
  }
  $ae.prototype.item = function (t) {
    return (cWt(this), this[t] || null);
  };
  Q8($ae, Hk);
  function $Xe() {}
  function tSn(t, e) {
    for (var r = t.length; r--; ) if (t[r] === e) return r;
  }
  function Q4n(t, e, r, n) {
    if ((n ? (e[tSn(e, n)] = r) : (e[e.length++] = r), t)) {
      r.ownerElement = t;
      var o = t.ownerDocument;
      o && (n && iSn(o, t, n), v4s(o, t, r));
    }
  }
  function G4n(t, e, r) {
    var n = tSn(e, r);
    if (n >= 0) {
      for (var o = e.length - 1; n < o; ) e[n] = e[++n];
      if (((e.length = o), t)) {
        var s = t.ownerDocument;
        s && (iSn(s, t, r), (r.ownerElement = null));
      }
    } else throw new tf(eSn, new Error(t.tagName + "@" + r));
  }
  $Xe.prototype = {
    length: 0,
    item: Hk.prototype.item,
    getNamedItem: function (t) {
      for (var e = this.length; e--; ) {
        var r = this[e];
        if (r.nodeName == t) return r;
      }
    },
    setNamedItem: function (t) {
      var e = t.ownerElement;
      if (e && e != this._ownerElement) throw new tf(j4n);
      var r = this.getNamedItem(t.nodeName);
      return (Q4n(this._ownerElement, this, t, r), r);
    },
    setNamedItemNS: function (t) {
      var e = t.ownerElement,
        r;
      if (e && e != this._ownerElement) throw new tf(j4n);
      return ((r = this.getNamedItemNS(t.namespaceURI, t.localName)), Q4n(this._ownerElement, this, t, r), r);
    },
    removeNamedItem: function (t) {
      var e = this.getNamedItem(t);
      return (G4n(this._ownerElement, this, e), e);
    },
    removeNamedItemNS: function (t, e) {
      var r = this.getNamedItemNS(t, e);
      return (G4n(this._ownerElement, this, r), r);
    },
    getNamedItemNS: function (t, e) {
      for (var r = this.length; r--; ) {
        var n = this[r];
        if (n.localName == e && n.namespaceURI == t) return n;
      }
      return null;
    },
  };
  function rSn() {}
  rSn.prototype = {
    hasFeature: function (t, e) {
      return !0;
    },
    createDocument: function (t, e, r) {
      var n = new yye();
      if (((n.implementation = this), (n.childNodes = new Hk()), (n.doctype = r || null), r && n.appendChild(r), e)) {
        var o = n.createElementNS(t, e);
        n.appendChild(o);
      }
      return n;
    },
    createDocumentType: function (t, e, r) {
      var n = new GXe();
      return ((n.name = t), (n.nodeName = t), (n.publicId = e || ""), (n.systemId = r || ""), n);
    },
  };
  function Rl() {}
  Rl.prototype = {
    firstChild: null,
    lastChild: null,
    previousSibling: null,
    nextSibling: null,
    attributes: null,
    parentNode: null,
    childNodes: null,
    ownerDocument: null,
    nodeValue: null,
    namespaceURI: null,
    prefix: null,
    localName: null,
    insertBefore: function (t, e) {
      return jXe(this, t, e);
    },
    replaceChild: function (t, e) {
      (jXe(this, t, e, sSn), e && this.removeChild(e));
    },
    removeChild: function (t) {
      return oSn(this, t);
    },
    appendChild: function (t) {
      return this.insertBefore(t, null);
    },
    hasChildNodes: function () {
      return this.firstChild != null;
    },
    cloneNode: function (t) {
      return uWt(this.ownerDocument || this, this, t);
    },
    normalize: function () {
      for (var t = this.firstChild; t; ) {
        var e = t.nextSibling;
        e && e.nodeType == UXe && t.nodeType == UXe
          ? (this.removeChild(e), t.appendData(e.data))
          : (t.normalize(), (t = e));
      }
    },
    isSupported: function (t, e) {
      return this.ownerDocument.implementation.hasFeature(t, e);
    },
    hasAttributes: function () {
      return this.attributes.length > 0;
    },
    lookupPrefix: function (t) {
      for (var e = this; e; ) {
        var r = e._nsMap;
        if (r) {
          for (var n in r) if (Object.prototype.hasOwnProperty.call(r, n) && r[n] === t) return n;
        }
        e = e.nodeType == Uae ? e.ownerDocument : e.parentNode;
      }
      return null;
    },
    lookupNamespaceURI: function (t) {
      for (var e = this; e; ) {
        var r = e._nsMap;
        if (r && Object.prototype.hasOwnProperty.call(r, t)) return r[t];
        e = e.nodeType == Uae ? e.ownerDocument : e.parentNode;
      }
      return null;
    },
    isDefaultNamespace: function (t) {
      var e = this.lookupPrefix(t);
      return e == null;
    },
  };
  function nSn(t) {
    return (
      (t == "<" && "&lt;") ||
      (t == ">" && "&gt;") ||
      (t == "&" && "&amp;") ||
      (t == '"' && "&quot;") ||
      "&#" + t.charCodeAt() + ";"
    );
  }
  Aye(G8, Rl);
  Aye(G8, Rl.prototype);
  function gye(t, e) {
    if (e(t)) return !0;
    if ((t = t.firstChild))
      do if (gye(t, e)) return !0;
      while ((t = t.nextSibling));
  }
  function yye() {
    this.ownerDocument = this;
  }
  function v4s(t, e, r) {
    t && t._inc++;
    var n = r.namespaceURI;
    n === hye.XMLNS && (e._nsMap[r.prefix ? r.localName : ""] = r.value);
  }
  function iSn(t, e, r, n) {
    t && t._inc++;
    var o = r.namespaceURI;
    o === hye.XMLNS && delete e._nsMap[r.prefix ? r.localName : ""];
  }
  function lWt(t, e, r) {
    if (t && t._inc) {
      t._inc++;
      var n = e.childNodes;
      if (r) n[n.length++] = r;
      else {
        for (var o = e.firstChild, s = 0; o; ) ((n[s++] = o), (o = o.nextSibling));
        ((n.length = s), delete n[n.length]);
      }
    }
  }
  function oSn(t, e) {
    var r = e.previousSibling,
      n = e.nextSibling;
    return (
      r ? (r.nextSibling = n) : (t.firstChild = n),
      n ? (n.previousSibling = r) : (t.lastChild = r),
      (e.parentNode = null),
      (e.previousSibling = null),
      (e.nextSibling = null),
      lWt(t.ownerDocument, t),
      e
    );
  }
  function C4s(t) {
    return (
      t &&
      (t.nodeType === Rl.DOCUMENT_NODE || t.nodeType === Rl.DOCUMENT_FRAGMENT_NODE || t.nodeType === Rl.ELEMENT_NODE)
    );
  }
  function S4s(t) {
    return (
      t &&
      (KT(t) ||
        mWt(t) ||
        Wk(t) ||
        t.nodeType === Rl.DOCUMENT_FRAGMENT_NODE ||
        t.nodeType === Rl.COMMENT_NODE ||
        t.nodeType === Rl.PROCESSING_INSTRUCTION_NODE)
    );
  }
  function Wk(t) {
    return t && t.nodeType === Rl.DOCUMENT_TYPE_NODE;
  }
  function KT(t) {
    return t && t.nodeType === Rl.ELEMENT_NODE;
  }
  function mWt(t) {
    return t && t.nodeType === Rl.TEXT_NODE;
  }
  function q4n(t, e) {
    var r = t.childNodes || [];
    if (YT(r, KT) || Wk(e)) return !1;
    var n = YT(r, Wk);
    return !(e && n && r.indexOf(n) > r.indexOf(e));
  }
  function H4n(t, e) {
    var r = t.childNodes || [];
    function n(s) {
      return KT(s) && s !== e;
    }
    if (YT(r, n)) return !1;
    var o = YT(r, Wk);
    return !(e && o && r.indexOf(o) > r.indexOf(e));
  }
  function w4s(t, e, r) {
    if (!C4s(t)) throw new tf(j8, "Unexpected parent node type " + t.nodeType);
    if (r && r.parentNode !== t) throw new tf(eSn, "child not in parent");
    if (!S4s(e) || (Wk(e) && t.nodeType !== Rl.DOCUMENT_NODE))
      throw new tf(j8, "Unexpected node type " + e.nodeType + " for parent node type " + t.nodeType);
  }
  function x4s(t, e, r) {
    var n = t.childNodes || [],
      o = e.childNodes || [];
    if (e.nodeType === Rl.DOCUMENT_FRAGMENT_NODE) {
      var s = o.filter(KT);
      if (s.length > 1 || YT(o, mWt)) throw new tf(j8, "More than one element or text in fragment");
      if (s.length === 1 && !q4n(t, r)) throw new tf(j8, "Element in fragment can not be inserted before doctype");
    }
    if (KT(e) && !q4n(t, r)) throw new tf(j8, "Only one element can be added and only after doctype");
    if (Wk(e)) {
      if (YT(n, Wk)) throw new tf(j8, "Only one doctype is allowed");
      var a = YT(n, KT);
      if (r && n.indexOf(a) < n.indexOf(r)) throw new tf(j8, "Doctype can only be inserted before an element");
      if (!r && a) throw new tf(j8, "Doctype can not be appended since element is present");
    }
  }
  function sSn(t, e, r) {
    var n = t.childNodes || [],
      o = e.childNodes || [];
    if (e.nodeType === Rl.DOCUMENT_FRAGMENT_NODE) {
      var s = o.filter(KT);
      if (s.length > 1 || YT(o, mWt)) throw new tf(j8, "More than one element or text in fragment");
      if (s.length === 1 && !H4n(t, r)) throw new tf(j8, "Element in fragment can not be inserted before doctype");
    }
    if (KT(e) && !H4n(t, r)) throw new tf(j8, "Only one element can be added and only after doctype");
    if (Wk(e)) {
      let c = function (m) {
        return Wk(m) && m !== r;
      };
      var u = c;
      if (YT(n, c)) throw new tf(j8, "Only one doctype is allowed");
      var a = YT(n, KT);
      if (r && n.indexOf(a) < n.indexOf(r)) throw new tf(j8, "Doctype can only be inserted before an element");
    }
  }
  function jXe(t, e, r, n) {
    (w4s(t, e, r), t.nodeType === Rl.DOCUMENT_NODE && (n || x4s)(t, e, r));
    var o = e.parentNode;
    if ((o && o.removeChild(e), e.nodeType === Vk)) {
      var s = e.firstChild;
      if (s == null) return e;
      var a = e.lastChild;
    } else s = a = e;
    var u = r ? r.previousSibling : t.lastChild;
    ((s.previousSibling = u),
      (a.nextSibling = r),
      u ? (u.nextSibling = s) : (t.firstChild = s),
      r == null ? (t.lastChild = a) : (r.previousSibling = a));
    do {
      s.parentNode = t;
      var c = t.ownerDocument || t;
      bye(s, c);
    } while (s !== a && (s = s.nextSibling));
    return (lWt(t.ownerDocument || t, t), e.nodeType == Vk && (e.firstChild = e.lastChild = null), e);
  }
  function bye(t, e) {
    if (t.ownerDocument !== e) {
      if (((t.ownerDocument = e), t.nodeType === TE && t.attributes))
        for (var r = 0; r < t.attributes.length; r++) {
          var n = t.attributes.item(r);
          n && (n.ownerDocument = e);
        }
      for (var o = t.firstChild; o; ) (bye(o, e), (o = o.nextSibling));
    }
  }
  function T4s(t, e) {
    (e.parentNode && e.parentNode.removeChild(e),
      (e.parentNode = t),
      (e.previousSibling = t.lastChild),
      (e.nextSibling = null),
      e.previousSibling ? (e.previousSibling.nextSibling = e) : (t.firstChild = e),
      (t.lastChild = e),
      lWt(t.ownerDocument, t, e));
    var r = t.ownerDocument || t;
    return (bye(e, r), e);
  }
  yye.prototype = {
    nodeName: "#document",
    nodeType: X4n,
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function (t, e) {
      if (t.nodeType == Vk) {
        for (var r = t.firstChild; r; ) {
          var n = r.nextSibling;
          (this.insertBefore(r, e), (r = n));
        }
        return t;
      }
      return (
        jXe(this, t, e),
        bye(t, this),
        this.documentElement === null && t.nodeType === TE && (this.documentElement = t),
        t
      );
    },
    removeChild: function (t) {
      return (this.documentElement == t && (this.documentElement = null), oSn(this, t));
    },
    replaceChild: function (t, e) {
      (jXe(this, t, e, sSn), bye(t, this), e && this.removeChild(e), KT(t) && (this.documentElement = t));
    },
    importNode: function (t, e) {
      return mSn(this, t, e);
    },
    getElementById: function (t) {
      var e = null;
      return (
        gye(this.documentElement, function (r) {
          if (r.nodeType == TE && r.getAttribute("id") == t) return ((e = r), !0);
        }),
        e
      );
    },
    getElementsByClassName: function (t) {
      var e = $4n(t);
      return new $ae(this, function (r) {
        var n = [];
        return (
          e.length > 0 &&
            gye(r.documentElement, function (o) {
              if (o !== r && o.nodeType === TE) {
                var s = o.getAttribute("class");
                if (s) {
                  var a = t === s;
                  if (!a) {
                    var u = $4n(s);
                    a = e.every(y4s(u));
                  }
                  a && n.push(o);
                }
              }
            }),
          n
        );
      });
    },
    createElement: function (t) {
      var e = new iW();
      ((e.ownerDocument = this), (e.nodeName = t), (e.tagName = t), (e.localName = t), (e.childNodes = new Hk()));
      var r = (e.attributes = new $Xe());
      return ((r._ownerElement = e), e);
    },
    createDocumentFragment: function () {
      var t = new qXe();
      return ((t.ownerDocument = this), (t.childNodes = new Hk()), t);
    },
    createTextNode: function (t) {
      var e = new dWt();
      return ((e.ownerDocument = this), e.appendData(t), e);
    },
    createComment: function (t) {
      var e = new fWt();
      return ((e.ownerDocument = this), e.appendData(t), e);
    },
    createCDATASection: function (t) {
      var e = new pWt();
      return ((e.ownerDocument = this), e.appendData(t), e);
    },
    createProcessingInstruction: function (t, e) {
      var r = new gWt();
      return ((r.ownerDocument = this), (r.tagName = r.nodeName = r.target = t), (r.nodeValue = r.data = e), r);
    },
    createAttribute: function (t) {
      var e = new QXe();
      return ((e.ownerDocument = this), (e.name = t), (e.nodeName = t), (e.localName = t), (e.specified = !0), e);
    },
    createEntityReference: function (t) {
      var e = new hWt();
      return ((e.ownerDocument = this), (e.nodeName = t), e);
    },
    createElementNS: function (t, e) {
      var r = new iW(),
        n = e.split(":"),
        o = (r.attributes = new $Xe());
      return (
        (r.childNodes = new Hk()),
        (r.ownerDocument = this),
        (r.nodeName = e),
        (r.tagName = e),
        (r.namespaceURI = t),
        n.length == 2 ? ((r.prefix = n[0]), (r.localName = n[1])) : (r.localName = e),
        (o._ownerElement = r),
        r
      );
    },
    createAttributeNS: function (t, e) {
      var r = new QXe(),
        n = e.split(":");
      return (
        (r.ownerDocument = this),
        (r.nodeName = e),
        (r.name = e),
        (r.namespaceURI = t),
        (r.specified = !0),
        n.length == 2 ? ((r.prefix = n[0]), (r.localName = n[1])) : (r.localName = e),
        r
      );
    },
  };
  Q8(yye, Rl);
  function iW() {
    this._nsMap = {};
  }
  iW.prototype = {
    nodeType: TE,
    hasAttribute: function (t) {
      return this.getAttributeNode(t) != null;
    },
    getAttribute: function (t) {
      var e = this.getAttributeNode(t);
      return (e && e.value) || "";
    },
    getAttributeNode: function (t) {
      return this.attributes.getNamedItem(t);
    },
    setAttribute: function (t, e) {
      var r = this.ownerDocument.createAttribute(t);
      ((r.value = r.nodeValue = "" + e), this.setAttributeNode(r));
    },
    removeAttribute: function (t) {
      var e = this.getAttributeNode(t);
      e && this.removeAttributeNode(e);
    },
    appendChild: function (t) {
      return t.nodeType === Vk ? this.insertBefore(t, null) : T4s(this, t);
    },
    setAttributeNode: function (t) {
      return this.attributes.setNamedItem(t);
    },
    setAttributeNodeNS: function (t) {
      return this.attributes.setNamedItemNS(t);
    },
    removeAttributeNode: function (t) {
      return this.attributes.removeNamedItem(t.nodeName);
    },
    removeAttributeNS: function (t, e) {
      var r = this.getAttributeNodeNS(t, e);
      r && this.removeAttributeNode(r);
    },
    hasAttributeNS: function (t, e) {
      return this.getAttributeNodeNS(t, e) != null;
    },
    getAttributeNS: function (t, e) {
      var r = this.getAttributeNodeNS(t, e);
      return (r && r.value) || "";
    },
    setAttributeNS: function (t, e, r) {
      var n = this.ownerDocument.createAttributeNS(t, e);
      ((n.value = n.nodeValue = "" + r), this.setAttributeNode(n));
    },
    getAttributeNodeNS: function (t, e) {
      return this.attributes.getNamedItemNS(t, e);
    },
    getElementsByTagName: function (t) {
      return new $ae(this, function (e) {
        var r = [];
        return (
          gye(e, function (n) {
            n !== e && n.nodeType == TE && (t === "*" || n.tagName == t) && r.push(n);
          }),
          r
        );
      });
    },
    getElementsByTagNameNS: function (t, e) {
      return new $ae(this, function (r) {
        var n = [];
        return (
          gye(r, function (o) {
            o !== r &&
              o.nodeType === TE &&
              (t === "*" || o.namespaceURI === t) &&
              (e === "*" || o.localName == e) &&
              n.push(o);
          }),
          n
        );
      });
    },
  };
  yye.prototype.getElementsByTagName = iW.prototype.getElementsByTagName;
  yye.prototype.getElementsByTagNameNS = iW.prototype.getElementsByTagNameNS;
  Q8(iW, Rl);
  function QXe() {}
  QXe.prototype.nodeType = Uae;
  Q8(QXe, Rl);
  function _ye() {}
  _ye.prototype = {
    data: "",
    substringData: function (t, e) {
      return this.data.substring(t, t + e);
    },
    appendData: function (t) {
      ((t = this.data + t), (this.nodeValue = this.data = t), (this.length = t.length));
    },
    insertData: function (t, e) {
      this.replaceData(t, 0, e);
    },
    appendChild: function (t) {
      throw new Error(Yh[j8]);
    },
    deleteData: function (t, e) {
      this.replaceData(t, e, "");
    },
    replaceData: function (t, e, r) {
      var n = this.data.substring(0, t),
        o = this.data.substring(t + e);
      ((r = n + r + o), (this.nodeValue = this.data = r), (this.length = r.length));
    },
  };
  Q8(_ye, Rl);
  function dWt() {}
  dWt.prototype = {
    nodeName: "#text",
    nodeType: UXe,
    splitText: function (t) {
      var e = this.data,
        r = e.substring(t);
      ((e = e.substring(0, t)), (this.data = this.nodeValue = e), (this.length = e.length));
      var n = this.ownerDocument.createTextNode(r);
      return (this.parentNode && this.parentNode.insertBefore(n, this.nextSibling), n);
    },
  };
  Q8(dWt, _ye);
  function fWt() {}
  fWt.prototype = { nodeName: "#comment", nodeType: J4n };
  Q8(fWt, _ye);
  function pWt() {}
  pWt.prototype = { nodeName: "#cdata-section", nodeType: z4n };
  Q8(pWt, _ye);
  function GXe() {}
  GXe.prototype.nodeType = Z4n;
  Q8(GXe, Rl);
  function aSn() {}
  aSn.prototype.nodeType = E4s;
  Q8(aSn, Rl);
  function uSn() {}
  uSn.prototype.nodeType = _4s;
  Q8(uSn, Rl);
  function hWt() {}
  hWt.prototype.nodeType = Y4n;
  Q8(hWt, Rl);
  function qXe() {}
  qXe.prototype.nodeName = "#document-fragment";
  qXe.prototype.nodeType = Vk;
  Q8(qXe, Rl);
  function gWt() {}
  gWt.prototype.nodeType = K4n;
  Q8(gWt, Rl);
  function cSn() {}
  cSn.prototype.serializeToString = function (t, e, r) {
    return lSn.call(t, e, r);
  };
  Rl.prototype.toString = lSn;
  function lSn(t, e) {
    var r = [],
      n = (this.nodeType == 9 && this.documentElement) || this,
      o = n.prefix,
      s = n.namespaceURI;
    if (s && o == null) {
      var o = n.lookupPrefix(s);
      if (o == null) var a = [{ namespace: s, prefix: null }];
    }
    return (Fae(this, r, t, e, a), r.join(""));
  }
  function V4n(t, e, r) {
    var n = t.prefix || "",
      o = t.namespaceURI;
    if (!o || (n === "xml" && o === hye.XML) || o === hye.XMLNS) return !1;
    for (var s = r.length; s--; ) {
      var a = r[s];
      if (a.prefix === n) return a.namespace !== o;
    }
    return !0;
  }
  function aWt(t, e, r) {
    t.push(" ", e, '="', r.replace(/[<>&"\t\n\r]/g, nSn), '"');
  }
  function Fae(t, e, r, n, o) {
    if ((o || (o = []), n))
      if (((t = n(t)), t)) {
        if (typeof t == "string") {
          e.push(t);
          return;
        }
      } else return;
    switch (t.nodeType) {
      case TE:
        var s = t.attributes,
          a = s.length,
          y = t.firstChild,
          u = t.tagName;
        r = hye.isHTML(t.namespaceURI) || r;
        var c = u;
        if (!r && !t.prefix && t.namespaceURI) {
          for (var m, d = 0; d < s.length; d++)
            if (s.item(d).name === "xmlns") {
              m = s.item(d).value;
              break;
            }
          if (!m)
            for (var f = o.length - 1; f >= 0; f--) {
              var p = o[f];
              if (p.prefix === "" && p.namespace === t.namespaceURI) {
                m = p.namespace;
                break;
              }
            }
          if (m !== t.namespaceURI)
            for (var f = o.length - 1; f >= 0; f--) {
              var p = o[f];
              if (p.namespace === t.namespaceURI) {
                p.prefix && (c = p.prefix + ":" + u);
                break;
              }
            }
        }
        e.push("<", c);
        for (var h = 0; h < a; h++) {
          var g = s.item(h);
          g.prefix == "xmlns"
            ? o.push({ prefix: g.localName, namespace: g.value })
            : g.nodeName == "xmlns" && o.push({ prefix: "", namespace: g.value });
        }
        for (var h = 0; h < a; h++) {
          var g = s.item(h);
          if (V4n(g, r, o)) {
            var b = g.prefix || "",
              A = g.namespaceURI;
            (aWt(e, b ? "xmlns:" + b : "xmlns", A), o.push({ prefix: b, namespace: A }));
          }
          Fae(g, e, r, n, o);
        }
        if (u === c && V4n(t, r, o)) {
          var b = t.prefix || "",
            A = t.namespaceURI;
          (aWt(e, b ? "xmlns:" + b : "xmlns", A), o.push({ prefix: b, namespace: A }));
        }
        if (y || (r && !/^(?:meta|link|img|br|hr|input)$/i.test(u))) {
          if ((e.push(">"), r && /^script$/i.test(u)))
            for (; y; ) (y.data ? e.push(y.data) : Fae(y, e, r, n, o.slice()), (y = y.nextSibling));
          else for (; y; ) (Fae(y, e, r, n, o.slice()), (y = y.nextSibling));
          e.push("</", c, ">");
        } else e.push("/>");
        return;
      case X4n:
      case Vk:
        for (var y = t.firstChild; y; ) (Fae(y, e, r, n, o.slice()), (y = y.nextSibling));
        return;
      case Uae:
        return aWt(e, t.name, t.value);
      case UXe:
        return e.push(t.data.replace(/[<&>]/g, nSn));
      case z4n:
        return e.push("<![CDATA[", t.data, "]]>");
      case J4n:
        return e.push("<!--", t.data, "-->");
      case Z4n:
        var E = t.publicId,
          v = t.systemId;
        if ((e.push("<!DOCTYPE ", t.name), E)) (e.push(" PUBLIC ", E), v && v != "." && e.push(" ", v), e.push(">"));
        else if (v && v != ".") e.push(" SYSTEM ", v, ">");
        else {
          var C = t.internalSubset;
          (C && e.push(" [", C, "]"), e.push(">"));
        }
        return;
      case K4n:
        return e.push("<?", t.target, " ", t.data, "?>");
      case Y4n:
        return e.push("&", t.nodeName, ";");
      default:
        e.push("??", t.nodeName);
    }
  }
  function mSn(t, e, r) {
    var n;
    switch (e.nodeType) {
      case TE:
        ((n = e.cloneNode(!1)), (n.ownerDocument = t));
      case Vk:
        break;
      case Uae:
        r = !0;
        break;
    }
    if ((n || (n = e.cloneNode(!1)), (n.ownerDocument = t), (n.parentNode = null), r))
      for (var o = e.firstChild; o; ) (n.appendChild(mSn(t, o, r)), (o = o.nextSibling));
    return n;
  }
  function uWt(t, e, r) {
    var n = new e.constructor();
    for (var o in e)
      if (Object.prototype.hasOwnProperty.call(e, o)) {
        var s = e[o];
        typeof s != "object" && s != n[o] && (n[o] = s);
      }
    switch ((e.childNodes && (n.childNodes = new Hk()), (n.ownerDocument = t), n.nodeType)) {
      case TE:
        var a = e.attributes,
          u = (n.attributes = new $Xe()),
          c = a.length;
        u._ownerElement = n;
        for (var m = 0; m < c; m++) n.setAttributeNode(uWt(t, a.item(m), !0));
        break;
      case Uae:
        r = !0;
    }
    if (r) for (var d = e.firstChild; d; ) (n.appendChild(uWt(t, d, r)), (d = d.nextSibling));
    return n;
  }
  function dSn(t, e, r) {
    t[e] = r;
  }
  try {
    if (Object.defineProperty) {
      let t = function (e) {
        switch (e.nodeType) {
          case TE:
          case Vk:
            var r = [];
            for (e = e.firstChild; e; ) (e.nodeType !== 7 && e.nodeType !== 8 && r.push(t(e)), (e = e.nextSibling));
            return r.join("");
          default:
            return e.nodeValue;
        }
      };
      ((D4s = t),
        Object.defineProperty($ae.prototype, "length", {
          get: function () {
            return (cWt(this), this.$$length);
          },
        }),
        Object.defineProperty(Rl.prototype, "textContent", {
          get: function () {
            return t(this);
          },
          set: function (e) {
            switch (this.nodeType) {
              case TE:
              case Vk:
                for (; this.firstChild; ) this.removeChild(this.firstChild);
                (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
                break;
              default:
                ((this.data = e), (this.value = e), (this.nodeValue = e));
            }
          },
        }),
        (dSn = function (e, r, n) {
          e["$$" + r] = n;
        }));
    }
  } catch {}
  var D4s;
  lF.DocumentType = GXe;
  lF.DOMException = tf;
  lF.DOMImplementation = rSn;
  lF.Element = iW;
  lF.Node = Rl;
  lF.NodeList = Hk;
  lF.XMLSerializer = cSn;
});