/**
 * @module E7n
 * @category browser/jsdom
 * @label jsdom
 * @position 1167 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (E7n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var E7n = T((set) => {
  "use strict";
  Object.defineProperty(set, "__esModule", { value: !0 });
  var cue = WIn(),
    t7s = ZIn(),
    BYt = t7n(),
    H8 = cue.isS,
    r7s = cue.isChar,
    c_e = cue.isNameStartChar,
    r7n = cue.isNameChar,
    g7n = cue.S_LIST,
    n7s = cue.NAME_RE,
    i7s = t7s.isChar,
    o7s = BYt.isNCNameStartChar,
    s7s = BYt.isNCNameChar,
    a7s = BYt.NC_NAME_RE,
    oet = "http://www.w3.org/XML/1998/namespace",
    uue = "http://www.w3.org/2000/xmlns/",
    u7s = { __proto__: null, xml: oet, xmlns: uue },
    c7s = { __proto__: null, amp: "&", gt: ">", lt: "<", quot: '"', apos: "'" },
    ud = -1,
    rD = -2,
    n7n = 0,
    l7s = 1,
    vYt = 2,
    m7s = 3,
    oue = 4,
    d7s = 5,
    f7s = 6,
    p7s = 7,
    CYt = 8,
    h7s = 9,
    g7s = 10,
    b7s = 11,
    A7s = 12,
    L2 = 13,
    ZZe = 14,
    SYt = 15,
    y7s = 16,
    wYt = 17,
    _7s = 18,
    E7s = 19,
    xYt = 20,
    v7s = 21,
    C7s = 22,
    S7s = 23,
    i7n = 24,
    TYt = 25,
    eet = 26,
    o7n = 27,
    w7s = 28,
    x7s = 29,
    s7n = 30,
    T7s = 31,
    D7s = 32,
    hW = 33,
    I7s = 34,
    DYt = 35,
    l_e = 36,
    IYt = 37,
    R7s = 38,
    a7n = 39,
    u7n = 40,
    k7s = 41,
    c7n = 42,
    O7s = 43,
    N7s = 44,
    RYt = 9,
    nS = 10,
    kYt = 13,
    l7n = 32,
    m7n = 33,
    b7n = 34,
    m_e = 38,
    A7n = 39,
    tet = 45,
    net = 47,
    P7s = 59,
    EF = 60,
    sue = 61,
    Mp = 62,
    Rg = 63,
    y7n = 91,
    aue = 93,
    d7n = 133,
    f7n = 8232,
    iet = (t) => t === b7n || t === A7n,
    _7n = [b7n, A7n],
    B7s = [..._7n, y7n, Mp],
    L7s = [..._7n, EF, aue],
    M7s = [sue, Rg, ...g7n],
    F7s = [...g7n, Mp, m_e, EF];
  function NYt(t, e, r) {
    switch (e) {
      case "xml":
        r !== oet && t.fail(`xml prefix must be bound to ${oet}.`);
        break;
      case "xmlns":
        r !== uue && t.fail(`xmlns prefix must be bound to ${uue}.`);
        break;
      default:
    }
    switch (r) {
      case uue:
        t.fail(
          e === ""
            ? `the default namespace may not be set to ${r}.`
            : `may not assign a prefix (even "xmlns") to the URI ${uue}.`,
        );
        break;
      case oet:
        switch (e) {
          case "xml":
            break;
          case "":
            t.fail(`the default namespace may not be set to ${r}.`);
            break;
          default:
            t.fail("may not assign the xml namespace to another prefix.");
        }
        break;
      default:
    }
  }
  function U7s(t, e) {
    for (let r of Object.keys(e)) NYt(t, r, e[r]);
  }
  var $7s = (t) => a7s.test(t),
    j7s = (t) => n7s.test(t),
    gW = 0,
    p7n = 1,
    OYt = 2;
  set.EVENTS = [
    "xmldecl",
    "text",
    "processinginstruction",
    "doctype",
    "comment",
    "opentagstart",
    "attribute",
    "opentag",
    "closetag",
    "cdata",
    "error",
    "end",
    "ready",
  ];
  var h7n = {
      xmldecl: "xmldeclHandler",
      text: "textHandler",
      processinginstruction: "piHandler",
      doctype: "doctypeHandler",
      comment: "commentHandler",
      opentagstart: "openTagStartHandler",
      attribute: "attributeHandler",
      opentag: "openTagHandler",
      closetag: "closeTagHandler",
      cdata: "cdataHandler",
      error: "errorHandler",
      end: "endHandler",
      ready: "readyHandler",
    },
    PYt = class {
      constructor(e) {
        ((this.opt = e ?? {}), (this.fragmentOpt = !!this.opt.fragment));
        let r = (this.xmlnsOpt = !!this.opt.xmlns);
        if (((this.trackPosition = this.opt.position !== !1), (this.fileName = this.opt.fileName), r)) {
          ((this.nameStartCheck = o7s),
            (this.nameCheck = s7s),
            (this.isName = $7s),
            (this.processAttribs = this.processAttribsNS),
            (this.pushAttrib = this.pushAttribNS),
            (this.ns = Object.assign({ __proto__: null }, u7s)));
          let n = this.opt.additionalNamespaces;
          n != null && (U7s(this, n), Object.assign(this.ns, n));
        } else
          ((this.nameStartCheck = c_e),
            (this.nameCheck = r7n),
            (this.isName = j7s),
            (this.processAttribs = this.processAttribsPlain),
            (this.pushAttrib = this.pushAttribPlain));
        ((this.stateTable = [
          this.sBegin,
          this.sBeginWhitespace,
          this.sDoctype,
          this.sDoctypeQuote,
          this.sDTD,
          this.sDTDQuoted,
          this.sDTDOpenWaka,
          this.sDTDOpenWakaBang,
          this.sDTDComment,
          this.sDTDCommentEnding,
          this.sDTDCommentEnded,
          this.sDTDPI,
          this.sDTDPIEnding,
          this.sText,
          this.sEntity,
          this.sOpenWaka,
          this.sOpenWakaBang,
          this.sComment,
          this.sCommentEnding,
          this.sCommentEnded,
          this.sCData,
          this.sCDataEnding,
          this.sCDataEnding2,
          this.sPIFirstChar,
          this.sPIRest,
          this.sPIBody,
          this.sPIEnding,
          this.sXMLDeclNameStart,
          this.sXMLDeclName,
          this.sXMLDeclEq,
          this.sXMLDeclValueStart,
          this.sXMLDeclValue,
          this.sXMLDeclSeparator,
          this.sXMLDeclEnding,
          this.sOpenTag,
          this.sOpenTagSlash,
          this.sAttrib,
          this.sAttribName,
          this.sAttribNameSawWhite,
          this.sAttribValue,
          this.sAttribValueQuoted,
          this.sAttribValueClosed,
          this.sAttribValueUnquoted,
          this.sCloseTag,
          this.sCloseTagSawWhite,
        ]),
          this._init());
      }
      get closed() {
        return this._closed;
      }
      _init() {
        var e;
        ((this.openWakaBang = ""),
          (this.text = ""),
          (this.name = ""),
          (this.piTarget = ""),
          (this.entity = ""),
          (this.q = null),
          (this.tags = []),
          (this.tag = null),
          (this.topNS = null),
          (this.chunk = ""),
          (this.chunkPosition = 0),
          (this.i = 0),
          (this.prevI = 0),
          (this.carriedFromPrevious = void 0),
          (this.forbiddenState = gW),
          (this.attribList = []));
        let { fragmentOpt: r } = this;
        ((this.state = r ? L2 : n7n),
          (this.reportedTextBeforeRoot = this.reportedTextAfterRoot = this.closedRoot = this.sawRoot = r),
          (this.xmlDeclPossible = !r),
          (this.xmlDeclExpects = ["version"]),
          (this.entityReturnState = void 0));
        let { defaultXMLVersion: n } = this.opt;
        if (n === void 0) {
          if (this.opt.forceXMLVersion === !0) throw new Error("forceXMLVersion set but defaultXMLVersion is not set");
          n = "1.0";
        }
        (this.setXMLVersion(n),
          (this.positionAtNewLine = 0),
          (this.doctype = !1),
          (this._closed = !1),
          (this.xmlDecl = { version: void 0, encoding: void 0, standalone: void 0 }),
          (this.line = 1),
          (this.column = 0),
          (this.ENTITIES = Object.create(c7s)),
          (e = this.readyHandler) === null || e === void 0 || e.call(this));
      }
      get position() {
        return this.chunkPosition + this.i;
      }
      get columnIndex() {
        return this.position - this.positionAtNewLine;
      }
      on(e, r) {
        this[h7n[e]] = r;
      }
      off(e) {
        this[h7n[e]] = void 0;
      }
      makeError(e) {
        var r;
        let n = (r = this.fileName) !== null && r !== void 0 ? r : "";
        return (
          this.trackPosition && (n.length > 0 && (n += ":"), (n += `${this.line}:${this.column}`)),
          n.length > 0 && (n += ": "),
          new Error(n + e)
        );
      }
      fail(e) {
        let r = this.makeError(e),
          n = this.errorHandler;
        if (n === void 0) throw r;
        return (n(r), this);
      }
      write(e) {
        if (this.closed) return this.fail("cannot write after close; assign an onready handler.");
        let r = !1;
        (e === null ? ((r = !0), (e = "")) : typeof e == "object" && (e = e.toString()),
          this.carriedFromPrevious !== void 0 &&
            ((e = `${this.carriedFromPrevious}${e}`), (this.carriedFromPrevious = void 0)));
        let n = e.length,
          o = e.charCodeAt(n - 1);
        !r &&
          (o === kYt || (o >= 55296 && o <= 56319)) &&
          ((this.carriedFromPrevious = e[n - 1]), n--, (e = e.slice(0, n)));
        let { stateTable: s } = this;
        for (this.chunk = e, this.i = 0; this.i < n; ) s[this.state].call(this);
        return ((this.chunkPosition += n), r ? this.end() : this);
      }
      close() {
        return this.write(null);
      }
      getCode10() {
        let { chunk: e, i: r } = this;
        if (((this.prevI = r), (this.i = r + 1), r >= e.length)) return ud;
        let n = e.charCodeAt(r);
        if ((this.column++, n < 55296)) {
          if (n >= l7n || n === RYt) return n;
          switch (n) {
            case nS:
              return (this.line++, (this.column = 0), (this.positionAtNewLine = this.position), nS);
            case kYt:
              return (
                e.charCodeAt(r + 1) === nS && (this.i = r + 2),
                this.line++,
                (this.column = 0),
                (this.positionAtNewLine = this.position),
                rD
              );
            default:
              return (this.fail("disallowed character."), n);
          }
        }
        if (n > 56319) return ((n >= 57344 && n <= 65533) || this.fail("disallowed character."), n);
        let o = 65536 + (n - 55296) * 1024 + (e.charCodeAt(r + 1) - 56320);
        return ((this.i = r + 2), o > 1114111 && this.fail("disallowed character."), o);
      }
      getCode11() {
        let { chunk: e, i: r } = this;
        if (((this.prevI = r), (this.i = r + 1), r >= e.length)) return ud;
        let n = e.charCodeAt(r);
        if ((this.column++, n < 55296)) {
          if ((n > 31 && n < 127) || (n > 159 && n !== f7n) || n === RYt) return n;
          switch (n) {
            case nS:
              return (this.line++, (this.column = 0), (this.positionAtNewLine = this.position), nS);
            case kYt: {
              let s = e.charCodeAt(r + 1);
              (s === nS || s === d7n) && (this.i = r + 2);
            }
            case d7n:
            case f7n:
              return (this.line++, (this.column = 0), (this.positionAtNewLine = this.position), rD);
            default:
              return (this.fail("disallowed character."), n);
          }
        }
        if (n > 56319) return ((n >= 57344 && n <= 65533) || this.fail("disallowed character."), n);
        let o = 65536 + (n - 55296) * 1024 + (e.charCodeAt(r + 1) - 56320);
        return ((this.i = r + 2), o > 1114111 && this.fail("disallowed character."), o);
      }
      getCodeNorm() {
        let e = this.getCode();
        return e === rD ? nS : e;
      }
      unget() {
        ((this.i = this.prevI), this.column--);
      }
      captureTo(e) {
        let { i: r } = this,
          { chunk: n } = this;
        for (;;) {
          let o = this.getCode(),
            s = o === rD,
            a = s ? nS : o;
          if (a === ud || e.includes(a)) return ((this.text += n.slice(r, this.prevI)), a);
          s &&
            ((this.text += `${n.slice(r, this.prevI)}
`),
            (r = this.i));
        }
      }
      captureToChar(e) {
        let { i: r } = this,
          { chunk: n } = this;
        for (;;) {
          let o = this.getCode();
          switch (o) {
            case rD:
              ((this.text += `${n.slice(r, this.prevI)}
`),
                (r = this.i),
                (o = nS));
              break;
            case ud:
              return ((this.text += n.slice(r)), !1);
            default:
          }
          if (o === e) return ((this.text += n.slice(r, this.prevI)), !0);
        }
      }
      captureNameChars() {
        let { chunk: e, i: r } = this;
        for (;;) {
          let n = this.getCode();
          if (n === ud) return ((this.name += e.slice(r)), ud);
          if (!r7n(n)) return ((this.name += e.slice(r, this.prevI)), n === rD ? nS : n);
        }
      }
      skipSpaces() {
        for (;;) {
          let e = this.getCodeNorm();
          if (e === ud || !H8(e)) return e;
        }
      }
      setXMLVersion(e) {
        ((this.currentXMLVersion = e),
          e === "1.0"
            ? ((this.isChar = r7s), (this.getCode = this.getCode10))
            : ((this.isChar = i7s), (this.getCode = this.getCode11)));
      }
      sBegin() {
        (this.chunk.charCodeAt(0) === 65279 && (this.i++, this.column++), (this.state = l7s));
      }
      sBeginWhitespace() {
        let e = this.i,
          r = this.skipSpaces();
        switch ((this.prevI !== e && (this.xmlDeclPossible = !1), r)) {
          case EF:
            if (((this.state = SYt), this.text.length !== 0)) throw new Error("no-empty text at start");
            break;
          case ud:
            break;
          default:
            (this.unget(), (this.state = L2), (this.xmlDeclPossible = !1));
        }
      }
      sDoctype() {
        var e;
        let r = this.captureTo(B7s);
        switch (r) {
          case Mp: {
            ((e = this.doctypeHandler) === null || e === void 0 || e.call(this, this.text),
              (this.text = ""),
              (this.state = L2),
              (this.doctype = !0));
            break;
          }
          case ud:
            break;
          default:
            ((this.text += String.fromCodePoint(r)),
              r === y7n ? (this.state = oue) : iet(r) && ((this.state = m7s), (this.q = r)));
        }
      }
      sDoctypeQuote() {
        let e = this.q;
        this.captureToChar(e) && ((this.text += String.fromCodePoint(e)), (this.q = null), (this.state = vYt));
      }
      sDTD() {
        let e = this.captureTo(L7s);
        e !== ud &&
          ((this.text += String.fromCodePoint(e)),
          e === aue
            ? (this.state = vYt)
            : e === EF
              ? (this.state = f7s)
              : iet(e) && ((this.state = d7s), (this.q = e)));
      }
      sDTDQuoted() {
        let e = this.q;
        this.captureToChar(e) && ((this.text += String.fromCodePoint(e)), (this.state = oue), (this.q = null));
      }
      sDTDOpenWaka() {
        let e = this.getCodeNorm();
        switch (((this.text += String.fromCodePoint(e)), e)) {
          case m7n:
            ((this.state = p7s), (this.openWakaBang = ""));
            break;
          case Rg:
            this.state = b7s;
            break;
          default:
            this.state = oue;
        }
      }
      sDTDOpenWakaBang() {
        let e = String.fromCodePoint(this.getCodeNorm()),
          r = (this.openWakaBang += e);
        ((this.text += e), r !== "-" && ((this.state = r === "--" ? CYt : oue), (this.openWakaBang = "")));
      }
      sDTDComment() {
        this.captureToChar(tet) && ((this.text += "-"), (this.state = h7s));
      }
      sDTDCommentEnding() {
        let e = this.getCodeNorm();
        ((this.text += String.fromCodePoint(e)), (this.state = e === tet ? g7s : CYt));
      }
      sDTDCommentEnded() {
        let e = this.getCodeNorm();
        ((this.text += String.fromCodePoint(e)),
          e === Mp ? (this.state = oue) : (this.fail("malformed comment."), (this.state = CYt)));
      }
      sDTDPI() {
        this.captureToChar(Rg) && ((this.text += "?"), (this.state = A7s));
      }
      sDTDPIEnding() {
        let e = this.getCodeNorm();
        ((this.text += String.fromCodePoint(e)), e === Mp && (this.state = oue));
      }
      sText() {
        this.tags.length !== 0 ? this.handleTextInRoot() : this.handleTextOutsideRoot();
      }
      sEntity() {
        let { i: e } = this,
          { chunk: r } = this;
        e: for (;;)
          switch (this.getCode()) {
            case rD:
              ((this.entity += `${r.slice(e, this.prevI)}
`),
                (e = this.i));
              break;
            case P7s: {
              let { entityReturnState: n } = this,
                o = this.entity + r.slice(e, this.prevI);
              this.state = n;
              let s;
              (o === ""
                ? (this.fail("empty entity name."), (s = "&;"))
                : ((s = this.parseEntity(o)), (this.entity = "")),
                (n !== L2 || this.textHandler !== void 0) && (this.text += s));
              break e;
            }
            case ud:
              this.entity += r.slice(e);
              break e;
            default:
          }
      }
      sOpenWaka() {
        let e = this.getCode();
        if (c_e(e)) ((this.state = I7s), this.unget(), (this.xmlDeclPossible = !1));
        else
          switch (e) {
            case net:
              ((this.state = O7s), (this.xmlDeclPossible = !1));
              break;
            case m7n:
              ((this.state = y7s), (this.openWakaBang = ""), (this.xmlDeclPossible = !1));
              break;
            case Rg:
              this.state = S7s;
              break;
            default:
              (this.fail("disallowed character in tag name"), (this.state = L2), (this.xmlDeclPossible = !1));
          }
      }
      sOpenWakaBang() {
        switch (((this.openWakaBang += String.fromCodePoint(this.getCodeNorm())), this.openWakaBang)) {
          case "[CDATA[":
            (!this.sawRoot &&
              !this.reportedTextBeforeRoot &&
              (this.fail("text data outside of root node."), (this.reportedTextBeforeRoot = !0)),
              this.closedRoot &&
                !this.reportedTextAfterRoot &&
                (this.fail("text data outside of root node."), (this.reportedTextAfterRoot = !0)),
              (this.state = xYt),
              (this.openWakaBang = ""));
            break;
          case "--":
            ((this.state = wYt), (this.openWakaBang = ""));
            break;
          case "DOCTYPE":
            ((this.state = vYt),
              (this.doctype || this.sawRoot) && this.fail("inappropriately located doctype declaration."),
              (this.openWakaBang = ""));
            break;
          default:
            this.openWakaBang.length >= 7 && this.fail("incorrect syntax.");
        }
      }
      sComment() {
        this.captureToChar(tet) && (this.state = _7s);
      }
      sCommentEnding() {
        var e;
        let r = this.getCodeNorm();
        r === tet
          ? ((this.state = E7s),
            (e = this.commentHandler) === null || e === void 0 || e.call(this, this.text),
            (this.text = ""))
          : ((this.text += `-${String.fromCodePoint(r)}`), (this.state = wYt));
      }
      sCommentEnded() {
        let e = this.getCodeNorm();
        e !== Mp
          ? (this.fail("malformed comment."), (this.text += `--${String.fromCodePoint(e)}`), (this.state = wYt))
          : (this.state = L2);
      }
      sCData() {
        this.captureToChar(aue) && (this.state = v7s);
      }
      sCDataEnding() {
        let e = this.getCodeNorm();
        e === aue ? (this.state = C7s) : ((this.text += `]${String.fromCodePoint(e)}`), (this.state = xYt));
      }
      sCDataEnding2() {
        var e;
        let r = this.getCodeNorm();
        switch (r) {
          case Mp: {
            ((e = this.cdataHandler) === null || e === void 0 || e.call(this, this.text),
              (this.text = ""),
              (this.state = L2));
            break;
          }
          case aue:
            this.text += "]";
            break;
          default:
            ((this.text += `]]${String.fromCodePoint(r)}`), (this.state = xYt));
        }
      }
      sPIFirstChar() {
        let e = this.getCodeNorm();
        this.nameStartCheck(e)
          ? ((this.piTarget += String.fromCodePoint(e)), (this.state = i7n))
          : e === Rg || H8(e)
            ? (this.fail("processing instruction without a target."), (this.state = e === Rg ? eet : TYt))
            : (this.fail("disallowed character in processing instruction name."),
              (this.piTarget += String.fromCodePoint(e)),
              (this.state = i7n));
      }
      sPIRest() {
        let { chunk: e, i: r } = this;
        for (;;) {
          let n = this.getCodeNorm();
          if (n === ud) {
            this.piTarget += e.slice(r);
            return;
          }
          if (!this.nameCheck(n)) {
            this.piTarget += e.slice(r, this.prevI);
            let o = n === Rg;
            o || H8(n)
              ? this.piTarget === "xml"
                ? (this.xmlDeclPossible || this.fail("an XML declaration must be at the start of the document."),
                  (this.state = o ? hW : o7n))
                : (this.state = o ? eet : TYt)
              : (this.fail("disallowed character in processing instruction name."),
                (this.piTarget += String.fromCodePoint(n)));
            break;
          }
        }
      }
      sPIBody() {
        if (this.text.length === 0) {
          let e = this.getCodeNorm();
          e === Rg ? (this.state = eet) : H8(e) || (this.text = String.fromCodePoint(e));
        } else this.captureToChar(Rg) && (this.state = eet);
      }
      sPIEnding() {
        var e;
        let r = this.getCodeNorm();
        if (r === Mp) {
          let { piTarget: n } = this;
          (n.toLowerCase() === "xml" && this.fail("the XML declaration must appear at the start of the document."),
            (e = this.piHandler) === null || e === void 0 || e.call(this, { target: n, body: this.text }),
            (this.piTarget = this.text = ""),
            (this.state = L2));
        } else r === Rg ? (this.text += "?") : ((this.text += `?${String.fromCodePoint(r)}`), (this.state = TYt));
        this.xmlDeclPossible = !1;
      }
      sXMLDeclNameStart() {
        let e = this.skipSpaces();
        if (e === Rg) {
          this.state = hW;
          return;
        }
        e !== ud && ((this.state = w7s), (this.name = String.fromCodePoint(e)));
      }
      sXMLDeclName() {
        let e = this.captureTo(M7s);
        if (e === Rg) {
          ((this.state = hW), (this.name += this.text), (this.text = ""), this.fail("XML declaration is incomplete."));
          return;
        }
        if (H8(e) || e === sue) {
          if (((this.name += this.text), (this.text = ""), !this.xmlDeclExpects.includes(this.name)))
            switch (this.name.length) {
              case 0:
                this.fail("did not expect any more name/value pairs.");
                break;
              case 1:
                this.fail(`expected the name ${this.xmlDeclExpects[0]}.`);
                break;
              default:
                this.fail(`expected one of ${this.xmlDeclExpects.join(", ")}`);
            }
          this.state = e === sue ? s7n : x7s;
        }
      }
      sXMLDeclEq() {
        let e = this.getCodeNorm();
        if (e === Rg) {
          ((this.state = hW), this.fail("XML declaration is incomplete."));
          return;
        }
        H8(e) || (e !== sue && this.fail("value required."), (this.state = s7n));
      }
      sXMLDeclValueStart() {
        let e = this.getCodeNorm();
        if (e === Rg) {
          ((this.state = hW), this.fail("XML declaration is incomplete."));
          return;
        }
        H8(e) || (iet(e) ? (this.q = e) : (this.fail("value must be quoted."), (this.q = l7n)), (this.state = T7s));
      }
      sXMLDeclValue() {
        let e = this.captureTo([this.q, Rg]);
        if (e === Rg) {
          ((this.state = hW), (this.text = ""), this.fail("XML declaration is incomplete."));
          return;
        }
        if (e === ud) return;
        let r = this.text;
        switch (((this.text = ""), this.name)) {
          case "version": {
            this.xmlDeclExpects = ["encoding", "standalone"];
            let n = r;
            ((this.xmlDecl.version = n),
              /^1\.[0-9]+$/.test(n)
                ? this.opt.forceXMLVersion || this.setXMLVersion(n)
                : this.fail("version number must match /^1\\.[0-9]+$/."));
            break;
          }
          case "encoding":
            (/^[A-Za-z][A-Za-z0-9._-]*$/.test(r) ||
              this.fail("encoding value must match /^[A-Za-z0-9][A-Za-z0-9._-]*$/."),
              (this.xmlDeclExpects = ["standalone"]),
              (this.xmlDecl.encoding = r));
            break;
          case "standalone":
            (r !== "yes" && r !== "no" && this.fail('standalone value must match "yes" or "no".'),
              (this.xmlDeclExpects = []),
              (this.xmlDecl.standalone = r));
            break;
          default:
        }
        ((this.name = ""), (this.state = D7s));
      }
      sXMLDeclSeparator() {
        let e = this.getCodeNorm();
        if (e === Rg) {
          this.state = hW;
          return;
        }
        (H8(e) || (this.fail("whitespace required."), this.unget()), (this.state = o7n));
      }
      sXMLDeclEnding() {
        var e;
        (this.getCodeNorm() === Mp
          ? (this.piTarget !== "xml"
              ? this.fail("processing instructions are not allowed before root.")
              : this.name !== "version" &&
                this.xmlDeclExpects.includes("version") &&
                this.fail("XML declaration must contain a version."),
            (e = this.xmldeclHandler) === null || e === void 0 || e.call(this, this.xmlDecl),
            (this.name = ""),
            (this.piTarget = this.text = ""),
            (this.state = L2))
          : this.fail("The character ? is disallowed anywhere in XML declarations."),
          (this.xmlDeclPossible = !1));
      }
      sOpenTag() {
        var e;
        let r = this.captureNameChars();
        if (r === ud) return;
        let n = (this.tag = { name: this.name, attributes: Object.create(null) });
        switch (
          ((this.name = ""),
          this.xmlnsOpt && (this.topNS = n.ns = Object.create(null)),
          (e = this.openTagStartHandler) === null || e === void 0 || e.call(this, n),
          (this.sawRoot = !0),
          !this.fragmentOpt && this.closedRoot && this.fail("documents may contain only one root."),
          r)
        ) {
          case Mp:
            this.openTag();
            break;
          case net:
            this.state = DYt;
            break;
          default:
            (H8(r) || this.fail("disallowed character in tag name."), (this.state = l_e));
        }
      }
      sOpenTagSlash() {
        this.getCode() === Mp
          ? this.openSelfClosingTag()
          : (this.fail("forward-slash in opening tag not followed by >."), (this.state = l_e));
      }
      sAttrib() {
        let e = this.skipSpaces();
        e !== ud &&
          (c_e(e)
            ? (this.unget(), (this.state = IYt))
            : e === Mp
              ? this.openTag()
              : e === net
                ? (this.state = DYt)
                : this.fail("disallowed character in attribute name."));
      }
      sAttribName() {
        let e = this.captureNameChars();
        e === sue
          ? (this.state = a7n)
          : H8(e)
            ? (this.state = R7s)
            : e === Mp
              ? (this.fail("attribute without value."),
                this.pushAttrib(this.name, this.name),
                (this.name = this.text = ""),
                this.openTag())
              : e !== ud && this.fail("disallowed character in attribute name.");
      }
      sAttribNameSawWhite() {
        let e = this.skipSpaces();
        switch (e) {
          case ud:
            return;
          case sue:
            this.state = a7n;
            break;
          default:
            (this.fail("attribute without value."),
              (this.text = ""),
              (this.name = ""),
              e === Mp
                ? this.openTag()
                : c_e(e)
                  ? (this.unget(), (this.state = IYt))
                  : (this.fail("disallowed character in attribute name."), (this.state = l_e)));
        }
      }
      sAttribValue() {
        let e = this.getCodeNorm();
        iet(e)
          ? ((this.q = e), (this.state = u7n))
          : H8(e) || (this.fail("unquoted attribute value."), (this.state = c7n), this.unget());
      }
      sAttribValueQuoted() {
        let { q: e, chunk: r } = this,
          { i: n } = this;
        for (;;)
          switch (this.getCode()) {
            case e:
              (this.pushAttrib(this.name, this.text + r.slice(n, this.prevI)),
                (this.name = this.text = ""),
                (this.q = null),
                (this.state = k7s));
              return;
            case m_e:
              ((this.text += r.slice(n, this.prevI)), (this.state = ZZe), (this.entityReturnState = u7n));
              return;
            case nS:
            case rD:
            case RYt:
              ((this.text += `${r.slice(n, this.prevI)} `), (n = this.i));
              break;
            case EF:
              ((this.text += r.slice(n, this.prevI)), this.fail("disallowed character."));
              return;
            case ud:
              this.text += r.slice(n);
              return;
            default:
          }
      }
      sAttribValueClosed() {
        let e = this.getCodeNorm();
        H8(e)
          ? (this.state = l_e)
          : e === Mp
            ? this.openTag()
            : e === net
              ? (this.state = DYt)
              : c_e(e)
                ? (this.fail("no whitespace between attributes."), this.unget(), (this.state = IYt))
                : this.fail("disallowed character in attribute name.");
      }
      sAttribValueUnquoted() {
        let e = this.captureTo(F7s);
        switch (e) {
          case m_e:
            ((this.state = ZZe), (this.entityReturnState = c7n));
            break;
          case EF:
            this.fail("disallowed character.");
            break;
          case ud:
            break;
          default:
            (this.text.includes("]]>") && this.fail('the string "]]>" is disallowed in char data.'),
              this.pushAttrib(this.name, this.text),
              (this.name = this.text = ""),
              e === Mp ? this.openTag() : (this.state = l_e));
        }
      }
      sCloseTag() {
        let e = this.captureNameChars();
        e === Mp
          ? this.closeTag()
          : H8(e)
            ? (this.state = N7s)
            : e !== ud && this.fail("disallowed character in closing tag.");
      }
      sCloseTagSawWhite() {
        switch (this.skipSpaces()) {
          case Mp:
            this.closeTag();
            break;
          case ud:
            break;
          default:
            this.fail("disallowed character in closing tag.");
        }
      }
      handleTextInRoot() {
        let { i: e, forbiddenState: r } = this,
          { chunk: n, textHandler: o } = this;
        e: for (;;)
          switch (this.getCode()) {
            case EF: {
              if (((this.state = SYt), o !== void 0)) {
                let { text: s } = this,
                  a = n.slice(e, this.prevI);
                s.length !== 0 ? (o(s + a), (this.text = "")) : a.length !== 0 && o(a);
              }
              r = gW;
              break e;
            }
            case m_e:
              ((this.state = ZZe),
                (this.entityReturnState = L2),
                o !== void 0 && (this.text += n.slice(e, this.prevI)),
                (r = gW));
              break e;
            case aue:
              switch (r) {
                case gW:
                  r = p7n;
                  break;
                case p7n:
                  r = OYt;
                  break;
                case OYt:
                  break;
                default:
                  throw new Error("impossible state");
              }
              break;
            case Mp:
              (r === OYt && this.fail('the string "]]>" is disallowed in char data.'), (r = gW));
              break;
            case rD:
              (o !== void 0 &&
                (this.text += `${n.slice(e, this.prevI)}
`),
                (e = this.i),
                (r = gW));
              break;
            case ud:
              o !== void 0 && (this.text += n.slice(e));
              break e;
            default:
              r = gW;
          }
        this.forbiddenState = r;
      }
      handleTextOutsideRoot() {
        let { i: e } = this,
          { chunk: r, textHandler: n } = this,
          o = !1;
        e: for (;;) {
          let s = this.getCode();
          switch (s) {
            case EF: {
              if (((this.state = SYt), n !== void 0)) {
                let { text: a } = this,
                  u = r.slice(e, this.prevI);
                a.length !== 0 ? (n(a + u), (this.text = "")) : u.length !== 0 && n(u);
              }
              break e;
            }
            case m_e:
              ((this.state = ZZe),
                (this.entityReturnState = L2),
                n !== void 0 && (this.text += r.slice(e, this.prevI)),
                (o = !0));
              break e;
            case rD:
              (n !== void 0 &&
                (this.text += `${r.slice(e, this.prevI)}
`),
                (e = this.i));
              break;
            case ud:
              n !== void 0 && (this.text += r.slice(e));
              break e;
            default:
              H8(s) || (o = !0);
          }
        }
        o &&
          (!this.sawRoot &&
            !this.reportedTextBeforeRoot &&
            (this.fail("text data outside of root node."), (this.reportedTextBeforeRoot = !0)),
          this.closedRoot &&
            !this.reportedTextAfterRoot &&
            (this.fail("text data outside of root node."), (this.reportedTextAfterRoot = !0)));
      }
      pushAttribNS(e, r) {
        var n;
        let { prefix: o, local: s } = this.qname(e),
          a = { name: e, prefix: o, local: s, value: r };
        if (
          (this.attribList.push(a),
          (n = this.attributeHandler) === null || n === void 0 || n.call(this, a),
          o === "xmlns")
        ) {
          let u = r.trim();
          (this.currentXMLVersion === "1.0" && u === "" && this.fail("invalid attempt to undefine prefix in XML 1.0"),
            (this.topNS[s] = u),
            NYt(this, s, u));
        } else if (e === "xmlns") {
          let u = r.trim();
          ((this.topNS[""] = u), NYt(this, "", u));
        }
      }
      pushAttribPlain(e, r) {
        var n;
        let o = { name: e, value: r };
        (this.attribList.push(o), (n = this.attributeHandler) === null || n === void 0 || n.call(this, o));
      }
      end() {
        var e, r;
        this.sawRoot || this.fail("document must contain a root element.");
        let { tags: n } = this;
        for (; n.length > 0; ) {
          let s = n.pop();
          this.fail(`unclosed tag: ${s.name}`);
        }
        this.state !== n7n && this.state !== L2 && this.fail("unexpected end.");
        let { text: o } = this;
        return (
          o.length !== 0 && ((e = this.textHandler) === null || e === void 0 || e.call(this, o), (this.text = "")),
          (this._closed = !0),
          (r = this.endHandler) === null || r === void 0 || r.call(this),
          this._init(),
          this
        );
      }
      resolve(e) {
        var r, n;
        let o = this.topNS[e];
        if (o !== void 0) return o;
        let { tags: s } = this;
        for (let a = s.length - 1; a >= 0; a--) if (((o = s[a].ns[e]), o !== void 0)) return o;
        return (
          (o = this.ns[e]),
          o !== void 0 ? o : (n = (r = this.opt).resolvePrefix) === null || n === void 0 ? void 0 : n.call(r, e)
        );
      }
      qname(e) {
        let r = e.indexOf(":");
        if (r === -1) return { prefix: "", local: e };
        let n = e.slice(r + 1),
          o = e.slice(0, r);
        return (
          (o === "" || n === "" || n.includes(":")) && this.fail(`malformed name: ${e}.`),
          { prefix: o, local: n }
        );
      }
      processAttribsNS() {
        var e;
        let { attribList: r } = this,
          n = this.tag;
        {
          let { prefix: a, local: u } = this.qname(n.name);
          ((n.prefix = a), (n.local = u));
          let c = (n.uri = (e = this.resolve(a)) !== null && e !== void 0 ? e : "");
          a !== "" &&
            (a === "xmlns" && this.fail('tags may not have "xmlns" as prefix.'),
            c === "" && (this.fail(`unbound namespace prefix: ${JSON.stringify(a)}.`), (n.uri = a)));
        }
        if (r.length === 0) return;
        let { attributes: o } = n,
          s = new Set();
        for (let a of r) {
          let { name: u, prefix: c, local: m } = a,
            d,
            f;
          (c === ""
            ? ((d = u === "xmlns" ? uue : ""), (f = u))
            : ((d = this.resolve(c)),
              d === void 0 && (this.fail(`unbound namespace prefix: ${JSON.stringify(c)}.`), (d = c)),
              (f = `{${d}}${m}`)),
            s.has(f) && this.fail(`duplicate attribute: ${f}.`),
            s.add(f),
            (a.uri = d),
            (o[u] = a));
        }
        this.attribList = [];
      }
      processAttribsPlain() {
        let { attribList: e } = this,
          r = this.tag.attributes;
        for (let { name: n, value: o } of e) (r[n] !== void 0 && this.fail(`duplicate attribute: ${n}.`), (r[n] = o));
        this.attribList = [];
      }
      openTag() {
        var e;
        this.processAttribs();
        let { tags: r } = this,
          n = this.tag;
        ((n.isSelfClosing = !1),
          (e = this.openTagHandler) === null || e === void 0 || e.call(this, n),
          r.push(n),
          (this.state = L2),
          (this.name = ""));
      }
      openSelfClosingTag() {
        var e, r, n;
        this.processAttribs();
        let { tags: o } = this,
          s = this.tag;
        ((s.isSelfClosing = !0),
          (e = this.openTagHandler) === null || e === void 0 || e.call(this, s),
          (r = this.closeTagHandler) === null || r === void 0 || r.call(this, s),
          (this.tag = (n = o[o.length - 1]) !== null && n !== void 0 ? n : null) === null && (this.closedRoot = !0),
          (this.state = L2),
          (this.name = ""));
      }
      closeTag() {
        let { tags: e, name: r } = this;
        if (((this.state = L2), (this.name = ""), r === "")) {
          (this.fail("weird empty close tag."), (this.text += "</>"));
          return;
        }
        let n = this.closeTagHandler,
          o = e.length;
        for (; o-- > 0; ) {
          let s = (this.tag = e.pop());
          if (((this.topNS = s.ns), n?.(s), s.name === r)) break;
          this.fail("unexpected close tag.");
        }
        o === 0
          ? (this.closedRoot = !0)
          : o < 0 && (this.fail(`unmatched closing tag: ${r}.`), (this.text += `</${r}>`));
      }
      parseEntity(e) {
        if (e[0] !== "#") {
          let n = this.ENTITIES[e];
          return n !== void 0
            ? n
            : (this.fail(this.isName(e) ? "undefined entity." : "disallowed character in entity name."), `&${e};`);
        }
        let r = NaN;
        return (
          e[1] === "x" && /^#x[0-9a-f]+$/i.test(e)
            ? (r = parseInt(e.slice(2), 16))
            : /^#[0-9]+$/.test(e) && (r = parseInt(e.slice(1), 10)),
          this.isChar(r) ? String.fromCodePoint(r) : (this.fail("malformed character entity."), `&${e};`)
        );
      }
    };
  set.SaxesParser = PYt;
});