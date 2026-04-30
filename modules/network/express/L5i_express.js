/**
 * @module L5i
 * @category network/express
 * @label express
 * @position 1740 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (L5i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var L5i = T((_Yc, B5i) => {
  (() => {
    "use strict";
    var t = {
        d: (we, Te) => {
          for (var Pe in Te)
            t.o(Te, Pe) && !t.o(we, Pe) && Object.defineProperty(we, Pe, { enumerable: !0, get: Te[Pe] });
        },
        o: (we, Te) => Object.prototype.hasOwnProperty.call(we, Te),
        r: (we) => {
          (typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(we, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(we, "__esModule", { value: !0 }));
        },
      },
      e = {};
    (t.r(e), t.d(e, { XMLBuilder: () => je, XMLParser: () => Ze, XMLValidator: () => $t }));
    let r =
        ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
      n = new RegExp("^[" + r + "][" + r + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
    function o(we, Te) {
      let Pe = [],
        tt = Te.exec(we);
      for (; tt; ) {
        let Je = [];
        Je.startIndex = Te.lastIndex - tt[0].length;
        let ze = tt.length;
        for (let ct = 0; ct < ze; ct++) Je.push(tt[ct]);
        (Pe.push(Je), (tt = Te.exec(we)));
      }
      return Pe;
    }
    let s = function (we) {
        return n.exec(we) != null;
      },
      a = { allowBooleanAttributes: !1, unpairedTags: [] };
    function u(we, Te) {
      Te = Object.assign({}, a, Te);
      let Pe = [],
        tt = !1,
        Je = !1;
      we[0] === "\uFEFF" && (we = we.substr(1));
      for (let ze = 0; ze < we.length; ze++)
        if (we[ze] === "<" && we[ze + 1] === "?") {
          if (((ze += 2), (ze = m(we, ze)), ze.err)) return ze;
        } else {
          if (we[ze] !== "<") {
            if (c(we[ze])) continue;
            return y("InvalidChar", "char '" + we[ze] + "' is not expected.", v(we, ze));
          }
          {
            let ct = ze;
            if ((ze++, we[ze] === "!")) {
              ze = d(we, ze);
              continue;
            }
            {
              let pt = !1;
              we[ze] === "/" && ((pt = !0), ze++);
              let _t = "";
              for (
                ;
                ze < we.length &&
                we[ze] !== ">" &&
                we[ze] !== " " &&
                we[ze] !== "	" &&
                we[ze] !==
                  `
` &&
                we[ze] !== "\r";
                ze++
              )
                _t += we[ze];
              if (
                ((_t = _t.trim()), _t[_t.length - 1] === "/" && ((_t = _t.substring(0, _t.length - 1)), ze--), !s(_t))
              ) {
                let ar;
                return (
                  (ar = _t.trim().length === 0 ? "Invalid space after '<'." : "Tag '" + _t + "' is an invalid name."),
                  y("InvalidTag", ar, v(we, ze))
                );
              }
              let tr = h(we, ze);
              if (tr === !1) return y("InvalidAttr", "Attributes for '" + _t + "' have open quote.", v(we, ze));
              let dr = tr.value;
              if (((ze = tr.index), dr[dr.length - 1] === "/")) {
                let ar = ze - dr.length;
                dr = dr.substring(0, dr.length - 1);
                let Gr = b(dr, Te);
                if (Gr !== !0) return y(Gr.err.code, Gr.err.msg, v(we, ar + Gr.err.line));
                tt = !0;
              } else if (pt) {
                if (!tr.tagClosed)
                  return y("InvalidTag", "Closing tag '" + _t + "' doesn't have proper closing.", v(we, ze));
                if (dr.trim().length > 0)
                  return y(
                    "InvalidTag",
                    "Closing tag '" + _t + "' can't have attributes or invalid starting.",
                    v(we, ct),
                  );
                if (Pe.length === 0) return y("InvalidTag", "Closing tag '" + _t + "' has not been opened.", v(we, ct));
                {
                  let ar = Pe.pop();
                  if (_t !== ar.tagName) {
                    let Gr = v(we, ar.tagStartPos);
                    return y(
                      "InvalidTag",
                      "Expected closing tag '" +
                        ar.tagName +
                        "' (opened in line " +
                        Gr.line +
                        ", col " +
                        Gr.col +
                        ") instead of closing tag '" +
                        _t +
                        "'.",
                      v(we, ct),
                    );
                  }
                  Pe.length == 0 && (Je = !0);
                }
              } else {
                let ar = b(dr, Te);
                if (ar !== !0) return y(ar.err.code, ar.err.msg, v(we, ze - dr.length + ar.err.line));
                if (Je === !0) return y("InvalidXml", "Multiple possible root nodes found.", v(we, ze));
                (Te.unpairedTags.indexOf(_t) !== -1 || Pe.push({ tagName: _t, tagStartPos: ct }), (tt = !0));
              }
              for (ze++; ze < we.length; ze++)
                if (we[ze] === "<") {
                  if (we[ze + 1] === "!") {
                    (ze++, (ze = d(we, ze)));
                    continue;
                  }
                  if (we[ze + 1] !== "?") break;
                  if (((ze = m(we, ++ze)), ze.err)) return ze;
                } else if (we[ze] === "&") {
                  let ar = A(we, ze);
                  if (ar == -1) return y("InvalidChar", "char '&' is not expected.", v(we, ze));
                  ze = ar;
                } else if (Je === !0 && !c(we[ze])) return y("InvalidXml", "Extra text at the end", v(we, ze));
              we[ze] === "<" && ze--;
            }
          }
        }
      return tt
        ? Pe.length == 1
          ? y("InvalidTag", "Unclosed tag '" + Pe[0].tagName + "'.", v(we, Pe[0].tagStartPos))
          : !(Pe.length > 0) ||
            y(
              "InvalidXml",
              "Invalid '" +
                JSON.stringify(
                  Pe.map((ze) => ze.tagName),
                  null,
                  4,
                ).replace(/\r?\n/g, "") +
                "' found.",
              { line: 1, col: 1 },
            )
        : y("InvalidXml", "Start tag expected.", 1);
    }
    function c(we) {
      return (
        we === " " ||
        we === "	" ||
        we ===
          `
` ||
        we === "\r"
      );
    }
    function m(we, Te) {
      let Pe = Te;
      for (; Te < we.length; Te++)
        if (!(we[Te] != "?" && we[Te] != " ")) {
          let tt = we.substr(Pe, Te - Pe);
          if (Te > 5 && tt === "xml")
            return y("InvalidXml", "XML declaration allowed only at the start of the document.", v(we, Te));
          if (we[Te] == "?" && we[Te + 1] == ">") {
            Te++;
            break;
          }
        }
      return Te;
    }
    function d(we, Te) {
      if (we.length > Te + 5 && we[Te + 1] === "-" && we[Te + 2] === "-") {
        for (Te += 3; Te < we.length; Te++)
          if (we[Te] === "-" && we[Te + 1] === "-" && we[Te + 2] === ">") {
            Te += 2;
            break;
          }
      } else if (
        we.length > Te + 8 &&
        we[Te + 1] === "D" &&
        we[Te + 2] === "O" &&
        we[Te + 3] === "C" &&
        we[Te + 4] === "T" &&
        we[Te + 5] === "Y" &&
        we[Te + 6] === "P" &&
        we[Te + 7] === "E"
      ) {
        let Pe = 1;
        for (Te += 8; Te < we.length; Te++)
          if (we[Te] === "<") Pe++;
          else if (we[Te] === ">" && (Pe--, Pe === 0)) break;
      } else if (
        we.length > Te + 9 &&
        we[Te + 1] === "[" &&
        we[Te + 2] === "C" &&
        we[Te + 3] === "D" &&
        we[Te + 4] === "A" &&
        we[Te + 5] === "T" &&
        we[Te + 6] === "A" &&
        we[Te + 7] === "["
      ) {
        for (Te += 8; Te < we.length; Te++)
          if (we[Te] === "]" && we[Te + 1] === "]" && we[Te + 2] === ">") {
            Te += 2;
            break;
          }
      }
      return Te;
    }
    let f = '"',
      p = "'";
    function h(we, Te) {
      let Pe = "",
        tt = "",
        Je = !1;
      for (; Te < we.length; Te++) {
        if (we[Te] === f || we[Te] === p) tt === "" ? (tt = we[Te]) : tt !== we[Te] || (tt = "");
        else if (we[Te] === ">" && tt === "") {
          Je = !0;
          break;
        }
        Pe += we[Te];
      }
      return tt === "" && { value: Pe, index: Te, tagClosed: Je };
    }
    let g = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
    function b(we, Te) {
      let Pe = o(we, g),
        tt = {};
      for (let Je = 0; Je < Pe.length; Je++) {
        if (Pe[Je][1].length === 0)
          return y("InvalidAttr", "Attribute '" + Pe[Je][2] + "' has no space in starting.", C(Pe[Je]));
        if (Pe[Je][3] !== void 0 && Pe[Je][4] === void 0)
          return y("InvalidAttr", "Attribute '" + Pe[Je][2] + "' is without value.", C(Pe[Je]));
        if (Pe[Je][3] === void 0 && !Te.allowBooleanAttributes)
          return y("InvalidAttr", "boolean attribute '" + Pe[Je][2] + "' is not allowed.", C(Pe[Je]));
        let ze = Pe[Je][2];
        if (!E(ze)) return y("InvalidAttr", "Attribute '" + ze + "' is an invalid name.", C(Pe[Je]));
        if (tt.hasOwnProperty(ze)) return y("InvalidAttr", "Attribute '" + ze + "' is repeated.", C(Pe[Je]));
        tt[ze] = 1;
      }
      return !0;
    }
    function A(we, Te) {
      if (we[++Te] === ";") return -1;
      if (we[Te] === "#")
        return (function (tt, Je) {
          let ze = /\d/;
          for (tt[Je] === "x" && (Je++, (ze = /[\da-fA-F]/)); Je < tt.length; Je++) {
            if (tt[Je] === ";") return Je;
            if (!tt[Je].match(ze)) break;
          }
          return -1;
        })(we, ++Te);
      let Pe = 0;
      for (; Te < we.length; Te++, Pe++)
        if (!(we[Te].match(/\w/) && Pe < 20)) {
          if (we[Te] === ";") break;
          return -1;
        }
      return Te;
    }
    function y(we, Te, Pe) {
      return { err: { code: we, msg: Te, line: Pe.line || Pe, col: Pe.col } };
    }
    function E(we) {
      return s(we);
    }
    function v(we, Te) {
      let Pe = we.substring(0, Te).split(/\r?\n/);
      return { line: Pe.length, col: Pe[Pe.length - 1].length + 1 };
    }
    function C(we) {
      return we.startIndex + we[1].length;
    }
    let x = {
        preserveOrder: !1,
        attributeNamePrefix: "@_",
        attributesGroupName: !1,
        textNodeName: "#text",
        ignoreAttributes: !0,
        removeNSPrefix: !1,
        allowBooleanAttributes: !1,
        parseTagValue: !0,
        parseAttributeValue: !1,
        trimValues: !0,
        cdataPropName: !1,
        numberParseOptions: { hex: !0, leadingZeros: !0, eNotation: !0 },
        tagValueProcessor: function (we, Te) {
          return Te;
        },
        attributeValueProcessor: function (we, Te) {
          return Te;
        },
        stopNodes: [],
        alwaysCreateTextNode: !1,
        isArray: () => !1,
        commentPropName: !1,
        unpairedTags: [],
        processEntities: !0,
        htmlEntities: !1,
        ignoreDeclaration: !1,
        ignorePiTags: !1,
        transformTagName: !1,
        transformAttributeName: !1,
        updateTag: function (we, Te, Pe) {
          return we;
        },
        captureMetaData: !1,
      },
      k;
    k = typeof Symbol != "function" ? "@@xmlMetadata" : Symbol("XML Node Metadata");
    class R {
      constructor(Te) {
        ((this.tagname = Te), (this.child = []), (this[":@"] = {}));
      }
      add(Te, Pe) {
        (Te === "__proto__" && (Te = "#__proto__"), this.child.push({ [Te]: Pe }));
      }
      addChild(Te, Pe) {
        (Te.tagname === "__proto__" && (Te.tagname = "#__proto__"),
          Te[":@"] && Object.keys(Te[":@"]).length > 0
            ? this.child.push({ [Te.tagname]: Te.child, ":@": Te[":@"] })
            : this.child.push({ [Te.tagname]: Te.child }),
          Pe !== void 0 && (this.child[this.child.length - 1][k] = { startIndex: Pe }));
      }
      static getMetaDataSymbol() {
        return k;
      }
    }
    function P(we, Te) {
      let Pe = {};
      if (
        we[Te + 3] !== "O" ||
        we[Te + 4] !== "C" ||
        we[Te + 5] !== "T" ||
        we[Te + 6] !== "Y" ||
        we[Te + 7] !== "P" ||
        we[Te + 8] !== "E"
      )
        throw new Error("Invalid Tag instead of DOCTYPE");
      {
        Te += 9;
        let tt = 1,
          Je = !1,
          ze = !1,
          ct = "";
        for (; Te < we.length; Te++)
          if (we[Te] !== "<" || ze)
            if (we[Te] === ">") {
              if ((ze ? we[Te - 1] === "-" && we[Te - 2] === "-" && ((ze = !1), tt--) : tt--, tt === 0)) break;
            } else we[Te] === "[" ? (Je = !0) : (ct += we[Te]);
          else {
            if (Je && L(we, "!ENTITY", Te)) {
              let pt, _t;
              ((Te += 7),
                ([pt, _t, Te] = O(we, Te + 1)),
                _t.indexOf("&") === -1 && (Pe[pt] = { regx: RegExp(`&${pt};`, "g"), val: _t }));
            } else if (Je && L(we, "!ELEMENT", Te)) {
              Te += 8;
              let { index: pt } = B(we, Te + 1);
              Te = pt;
            } else if (Je && L(we, "!ATTLIST", Te)) Te += 8;
            else if (Je && L(we, "!NOTATION", Te)) {
              Te += 9;
              let { index: pt } = N(we, Te + 1);
              Te = pt;
            } else {
              if (!L(we, "!--", Te)) throw new Error("Invalid DOCTYPE");
              ze = !0;
            }
            (tt++, (ct = ""));
          }
        if (tt !== 0) throw new Error("Unclosed DOCTYPE");
      }
      return { entities: Pe, i: Te };
    }
    let D = (we, Te) => {
      for (; Te < we.length && /\s/.test(we[Te]); ) Te++;
      return Te;
    };
    function O(we, Te) {
      Te = D(we, Te);
      let Pe = "";
      for (; Te < we.length && !/\s/.test(we[Te]) && we[Te] !== '"' && we[Te] !== "'"; ) ((Pe += we[Te]), Te++);
      if ((G(Pe), (Te = D(we, Te)), we.substring(Te, Te + 6).toUpperCase() === "SYSTEM"))
        throw new Error("External entities are not supported");
      if (we[Te] === "%") throw new Error("Parameter entities are not supported");
      let tt = "";
      return (([Te, tt] = F(we, Te, "entity")), [Pe, tt, --Te]);
    }
    function N(we, Te) {
      Te = D(we, Te);
      let Pe = "";
      for (; Te < we.length && !/\s/.test(we[Te]); ) ((Pe += we[Te]), Te++);
      (G(Pe), (Te = D(we, Te)));
      let tt = we.substring(Te, Te + 6).toUpperCase();
      if (tt !== "SYSTEM" && tt !== "PUBLIC") throw new Error(`Expected SYSTEM or PUBLIC, found "${tt}"`);
      ((Te += tt.length), (Te = D(we, Te)));
      let Je = null,
        ze = null;
      if (tt === "PUBLIC")
        (([Te, Je] = F(we, Te, "publicIdentifier")),
          (we[(Te = D(we, Te))] !== '"' && we[Te] !== "'") || ([Te, ze] = F(we, Te, "systemIdentifier")));
      else if (tt === "SYSTEM" && (([Te, ze] = F(we, Te, "systemIdentifier")), !ze))
        throw new Error("Missing mandatory system identifier for SYSTEM notation");
      return { notationName: Pe, publicIdentifier: Je, systemIdentifier: ze, index: --Te };
    }
    function F(we, Te, Pe) {
      let tt = "",
        Je = we[Te];
      if (Je !== '"' && Je !== "'") throw new Error(`Expected quoted string, found "${Je}"`);
      for (Te++; Te < we.length && we[Te] !== Je; ) ((tt += we[Te]), Te++);
      if (we[Te] !== Je) throw new Error(`Unterminated ${Pe} value`);
      return [++Te, tt];
    }
    function B(we, Te) {
      Te = D(we, Te);
      let Pe = "";
      for (; Te < we.length && !/\s/.test(we[Te]); ) ((Pe += we[Te]), Te++);
      if (!G(Pe)) throw new Error(`Invalid element name: "${Pe}"`);
      let tt = "";
      if (we[(Te = D(we, Te))] === "E" && L(we, "MPTY", Te)) Te += 4;
      else if (we[Te] === "A" && L(we, "NY", Te)) Te += 2;
      else {
        if (we[Te] !== "(") throw new Error(`Invalid Element Expression, found "${we[Te]}"`);
        for (Te++; Te < we.length && we[Te] !== ")"; ) ((tt += we[Te]), Te++);
        if (we[Te] !== ")") throw new Error("Unterminated content model");
      }
      return { elementName: Pe, contentModel: tt.trim(), index: Te };
    }
    function L(we, Te, Pe) {
      for (let tt = 0; tt < Te.length; tt++) if (Te[tt] !== we[Pe + tt + 1]) return !1;
      return !0;
    }
    function G(we) {
      if (s(we)) return we;
      throw new Error(`Invalid entity name ${we}`);
    }
    let Q = /^[-+]?0x[a-fA-F0-9]+$/,
      K = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/,
      H = { hex: !0, leadingZeros: !0, decimalPoint: ".", eNotation: !0 },
      U = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
    function Y(we) {
      return typeof we == "function"
        ? we
        : Array.isArray(we)
          ? (Te) => {
              for (let Pe of we)
                if ((typeof Pe == "string" && Te === Pe) || (Pe instanceof RegExp && Pe.test(Te))) return !0;
            }
          : () => !1;
    }
    class X {
      constructor(Te) {
        ((this.options = Te),
          (this.currentNode = null),
          (this.tagsNodeStack = []),
          (this.docTypeEntities = {}),
          (this.lastEntities = {
            apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
            gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
            lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
            quot: { regex: /&(quot|#34|#x22);/g, val: '"' },
          }),
          (this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }),
          (this.htmlEntities = {
            space: { regex: /&(nbsp|#160);/g, val: " " },
            cent: { regex: /&(cent|#162);/g, val: "\xA2" },
            pound: { regex: /&(pound|#163);/g, val: "\xA3" },
            yen: { regex: /&(yen|#165);/g, val: "\xA5" },
            euro: { regex: /&(euro|#8364);/g, val: "\u20AC" },
            copyright: { regex: /&(copy|#169);/g, val: "\xA9" },
            reg: { regex: /&(reg|#174);/g, val: "\xAE" },
            inr: { regex: /&(inr|#8377);/g, val: "\u20B9" },
            num_dec: { regex: /&#([0-9]{1,7});/g, val: (Pe, tt) => String.fromCodePoint(Number.parseInt(tt, 10)) },
            num_hex: {
              regex: /&#x([0-9a-fA-F]{1,6});/g,
              val: (Pe, tt) => String.fromCodePoint(Number.parseInt(tt, 16)),
            },
          }),
          (this.addExternalEntities = J),
          (this.parseXml = ye),
          (this.parseTextData = q),
          (this.resolveNameSpace = ne),
          (this.buildAttributesMap = ce),
          (this.isItStopNode = he),
          (this.replaceEntitiesValue = oe),
          (this.readStopNodeData = ge),
          (this.saveTextToParentTag = ue),
          (this.addChild = Z),
          (this.ignoreAttributesFn = Y(this.options.ignoreAttributes)));
      }
    }
    function J(we) {
      let Te = Object.keys(we);
      for (let Pe = 0; Pe < Te.length; Pe++) {
        let tt = Te[Pe];
        this.lastEntities[tt] = { regex: new RegExp("&" + tt + ";", "g"), val: we[tt] };
      }
    }
    function q(we, Te, Pe, tt, Je, ze, ct) {
      if (we !== void 0 && (this.options.trimValues && !tt && (we = we.trim()), we.length > 0)) {
        ct || (we = this.replaceEntitiesValue(we));
        let pt = this.options.tagValueProcessor(Te, we, Pe, Je, ze);
        return pt == null
          ? we
          : typeof pt != typeof we || pt !== we
            ? pt
            : this.options.trimValues || we.trim() === we
              ? V(we, this.options.parseTagValue, this.options.numberParseOptions)
              : we;
      }
    }
    function ne(we) {
      if (this.options.removeNSPrefix) {
        let Te = we.split(":"),
          Pe = we.charAt(0) === "/" ? "/" : "";
        if (Te[0] === "xmlns") return "";
        Te.length === 2 && (we = Pe + Te[1]);
      }
      return we;
    }
    let de = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
    function ce(we, Te, Pe) {
      if (this.options.ignoreAttributes !== !0 && typeof we == "string") {
        let tt = o(we, de),
          Je = tt.length,
          ze = {};
        for (let ct = 0; ct < Je; ct++) {
          let pt = this.resolveNameSpace(tt[ct][1]);
          if (this.ignoreAttributesFn(pt, Te)) continue;
          let _t = tt[ct][4],
            tr = this.options.attributeNamePrefix + pt;
          if (pt.length)
            if (
              (this.options.transformAttributeName && (tr = this.options.transformAttributeName(tr)),
              tr === "__proto__" && (tr = "#__proto__"),
              _t !== void 0)
            ) {
              (this.options.trimValues && (_t = _t.trim()), (_t = this.replaceEntitiesValue(_t)));
              let dr = this.options.attributeValueProcessor(pt, _t, Te);
              ze[tr] =
                dr == null
                  ? _t
                  : typeof dr != typeof _t || dr !== _t
                    ? dr
                    : V(_t, this.options.parseAttributeValue, this.options.numberParseOptions);
            } else this.options.allowBooleanAttributes && (ze[tr] = !0);
        }
        if (!Object.keys(ze).length) return;
        if (this.options.attributesGroupName) {
          let ct = {};
          return ((ct[this.options.attributesGroupName] = ze), ct);
        }
        return ze;
      }
    }
    let ye = function (we) {
      we = we.replace(
        /\r\n?/g,
        `
`,
      );
      let Te = new R("!xml"),
        Pe = Te,
        tt = "",
        Je = "";
      for (let ze = 0; ze < we.length; ze++)
        if (we[ze] === "<")
          if (we[ze + 1] === "/") {
            let ct = se(we, ">", ze, "Closing Tag is not closed."),
              pt = we.substring(ze + 2, ct).trim();
            if (this.options.removeNSPrefix) {
              let dr = pt.indexOf(":");
              dr !== -1 && (pt = pt.substr(dr + 1));
            }
            (this.options.transformTagName && (pt = this.options.transformTagName(pt)),
              Pe && (tt = this.saveTextToParentTag(tt, Pe, Je)));
            let _t = Je.substring(Je.lastIndexOf(".") + 1);
            if (pt && this.options.unpairedTags.indexOf(pt) !== -1)
              throw new Error(`Unpaired tag can not be used as closing tag: </${pt}>`);
            let tr = 0;
            (_t && this.options.unpairedTags.indexOf(_t) !== -1
              ? ((tr = Je.lastIndexOf(".", Je.lastIndexOf(".") - 1)), this.tagsNodeStack.pop())
              : (tr = Je.lastIndexOf(".")),
              (Je = Je.substring(0, tr)),
              (Pe = this.tagsNodeStack.pop()),
              (tt = ""),
              (ze = ct));
          } else if (we[ze + 1] === "?") {
            let ct = fe(we, ze, !1, "?>");
            if (!ct) throw new Error("Pi Tag is not closed.");
            if (
              ((tt = this.saveTextToParentTag(tt, Pe, Je)),
              !((this.options.ignoreDeclaration && ct.tagName === "?xml") || this.options.ignorePiTags))
            ) {
              let pt = new R(ct.tagName);
              (pt.add(this.options.textNodeName, ""),
                ct.tagName !== ct.tagExp &&
                  ct.attrExpPresent &&
                  (pt[":@"] = this.buildAttributesMap(ct.tagExp, Je, ct.tagName)),
                this.addChild(Pe, pt, Je, ze));
            }
            ze = ct.closeIndex + 1;
          } else if (we.substr(ze + 1, 3) === "!--") {
            let ct = se(we, "-->", ze + 4, "Comment is not closed.");
            if (this.options.commentPropName) {
              let pt = we.substring(ze + 4, ct - 2);
              ((tt = this.saveTextToParentTag(tt, Pe, Je)),
                Pe.add(this.options.commentPropName, [{ [this.options.textNodeName]: pt }]));
            }
            ze = ct;
          } else if (we.substr(ze + 1, 2) === "!D") {
            let ct = P(we, ze);
            ((this.docTypeEntities = ct.entities), (ze = ct.i));
          } else if (we.substr(ze + 1, 2) === "![") {
            let ct = se(we, "]]>", ze, "CDATA is not closed.") - 2,
              pt = we.substring(ze + 9, ct);
            tt = this.saveTextToParentTag(tt, Pe, Je);
            let _t = this.parseTextData(pt, Pe.tagname, Je, !0, !1, !0, !0);
            (_t == null && (_t = ""),
              this.options.cdataPropName
                ? Pe.add(this.options.cdataPropName, [{ [this.options.textNodeName]: pt }])
                : Pe.add(this.options.textNodeName, _t),
              (ze = ct + 2));
          } else {
            let ct = fe(we, ze, this.options.removeNSPrefix),
              pt = ct.tagName,
              _t = ct.rawTagName,
              tr = ct.tagExp,
              dr = ct.attrExpPresent,
              ar = ct.closeIndex;
            (this.options.transformTagName && (pt = this.options.transformTagName(pt)),
              Pe && tt && Pe.tagname !== "!xml" && (tt = this.saveTextToParentTag(tt, Pe, Je, !1)));
            let Gr = Pe;
            (Gr &&
              this.options.unpairedTags.indexOf(Gr.tagname) !== -1 &&
              ((Pe = this.tagsNodeStack.pop()), (Je = Je.substring(0, Je.lastIndexOf(".")))),
              pt !== Te.tagname && (Je += Je ? "." + pt : pt));
            let Cn = ze;
            if (this.isItStopNode(this.options.stopNodes, Je, pt)) {
              let wn = "";
              if (tr.length > 0 && tr.lastIndexOf("/") === tr.length - 1)
                (pt[pt.length - 1] === "/"
                  ? ((pt = pt.substr(0, pt.length - 1)), (Je = Je.substr(0, Je.length - 1)), (tr = pt))
                  : (tr = tr.substr(0, tr.length - 1)),
                  (ze = ct.closeIndex));
              else if (this.options.unpairedTags.indexOf(pt) !== -1) ze = ct.closeIndex;
              else {
                let To = this.readStopNodeData(we, _t, ar + 1);
                if (!To) throw new Error(`Unexpected end of ${_t}`);
                ((ze = To.i), (wn = To.tagContent));
              }
              let jn = new R(pt);
              (pt !== tr && dr && (jn[":@"] = this.buildAttributesMap(tr, Je, pt)),
                wn && (wn = this.parseTextData(wn, pt, Je, !0, dr, !0, !0)),
                (Je = Je.substr(0, Je.lastIndexOf("."))),
                jn.add(this.options.textNodeName, wn),
                this.addChild(Pe, jn, Je, Cn));
            } else {
              if (tr.length > 0 && tr.lastIndexOf("/") === tr.length - 1) {
                (pt[pt.length - 1] === "/"
                  ? ((pt = pt.substr(0, pt.length - 1)), (Je = Je.substr(0, Je.length - 1)), (tr = pt))
                  : (tr = tr.substr(0, tr.length - 1)),
                  this.options.transformTagName && (pt = this.options.transformTagName(pt)));
                let wn = new R(pt);
                (pt !== tr && dr && (wn[":@"] = this.buildAttributesMap(tr, Je, pt)),
                  this.addChild(Pe, wn, Je, Cn),
                  (Je = Je.substr(0, Je.lastIndexOf("."))));
              } else {
                let wn = new R(pt);
                (this.tagsNodeStack.push(Pe),
                  pt !== tr && dr && (wn[":@"] = this.buildAttributesMap(tr, Je, pt)),
                  this.addChild(Pe, wn, Je, Cn),
                  (Pe = wn));
              }
              ((tt = ""), (ze = ar));
            }
          }
        else tt += we[ze];
      return Te.child;
    };
    function Z(we, Te, Pe, tt) {
      this.options.captureMetaData || (tt = void 0);
      let Je = this.options.updateTag(Te.tagname, Pe, Te[":@"]);
      Je === !1 || (typeof Je == "string" && (Te.tagname = Je), we.addChild(Te, tt));
    }
    let oe = function (we) {
      if (this.options.processEntities) {
        for (let Te in this.docTypeEntities) {
          let Pe = this.docTypeEntities[Te];
          we = we.replace(Pe.regx, Pe.val);
        }
        for (let Te in this.lastEntities) {
          let Pe = this.lastEntities[Te];
          we = we.replace(Pe.regex, Pe.val);
        }
        if (this.options.htmlEntities)
          for (let Te in this.htmlEntities) {
            let Pe = this.htmlEntities[Te];
            we = we.replace(Pe.regex, Pe.val);
          }
        we = we.replace(this.ampEntity.regex, this.ampEntity.val);
      }
      return we;
    };
    function ue(we, Te, Pe, tt) {
      return (
        we &&
          (tt === void 0 && (tt = Te.child.length === 0),
          (we = this.parseTextData(we, Te.tagname, Pe, !1, !!Te[":@"] && Object.keys(Te[":@"]).length !== 0, tt)) !==
            void 0 &&
            we !== "" &&
            Te.add(this.options.textNodeName, we),
          (we = "")),
        we
      );
    }
    function he(we, Te, Pe) {
      let tt = "*." + Pe;
      for (let Je in we) {
        let ze = we[Je];
        if (tt === ze || Te === ze) return !0;
      }
      return !1;
    }
    function se(we, Te, Pe, tt) {
      let Je = we.indexOf(Te, Pe);
      if (Je === -1) throw new Error(tt);
      return Je + Te.length - 1;
    }
    function fe(we, Te, Pe, tt = ">") {
      let Je = (function (ar, Gr, Cn = ">") {
        let wn,
          jn = "";
        for (let To = Gr; To < ar.length; To++) {
          let Oo = ar[To];
          if (wn) Oo === wn && (wn = "");
          else if (Oo === '"' || Oo === "'") wn = Oo;
          else if (Oo === Cn[0]) {
            if (!Cn[1]) return { data: jn, index: To };
            if (ar[To + 1] === Cn[1]) return { data: jn, index: To };
          } else Oo === "	" && (Oo = " ");
          jn += Oo;
        }
      })(we, Te + 1, tt);
      if (!Je) return;
      let ze = Je.data,
        ct = Je.index,
        pt = ze.search(/\s/),
        _t = ze,
        tr = !0;
      pt !== -1 && ((_t = ze.substring(0, pt)), (ze = ze.substring(pt + 1).trimStart()));
      let dr = _t;
      if (Pe) {
        let ar = _t.indexOf(":");
        ar !== -1 && ((_t = _t.substr(ar + 1)), (tr = _t !== Je.data.substr(ar + 1)));
      }
      return { tagName: _t, tagExp: ze, closeIndex: ct, attrExpPresent: tr, rawTagName: dr };
    }
    function ge(we, Te, Pe) {
      let tt = Pe,
        Je = 1;
      for (; Pe < we.length; Pe++)
        if (we[Pe] === "<")
          if (we[Pe + 1] === "/") {
            let ze = se(we, ">", Pe, `${Te} is not closed`);
            if (we.substring(Pe + 2, ze).trim() === Te && (Je--, Je === 0))
              return { tagContent: we.substring(tt, Pe), i: ze };
            Pe = ze;
          } else if (we[Pe + 1] === "?") Pe = se(we, "?>", Pe + 1, "StopNode is not closed.");
          else if (we.substr(Pe + 1, 3) === "!--") Pe = se(we, "-->", Pe + 3, "StopNode is not closed.");
          else if (we.substr(Pe + 1, 2) === "![") Pe = se(we, "]]>", Pe, "StopNode is not closed.") - 2;
          else {
            let ze = fe(we, Pe, ">");
            ze && ((ze && ze.tagName) === Te && ze.tagExp[ze.tagExp.length - 1] !== "/" && Je++, (Pe = ze.closeIndex));
          }
    }
    function V(we, Te, Pe) {
      if (Te && typeof we == "string") {
        let tt = we.trim();
        return (
          tt === "true" ||
          (tt !== "false" &&
            (function (Je, ze = {}) {
              if (((ze = Object.assign({}, H, ze)), !Je || typeof Je != "string")) return Je;
              let ct = Je.trim();
              if (ze.skipLike !== void 0 && ze.skipLike.test(ct)) return Je;
              if (Je === "0") return 0;
              if (ze.hex && Q.test(ct))
                return (function (_t) {
                  if (parseInt) return parseInt(_t, 16);
                  if (Number.parseInt) return Number.parseInt(_t, 16);
                  if (window && window.parseInt) return window.parseInt(_t, 16);
                  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
                })(ct);
              if (ct.search(/.+[eE].+/) !== -1)
                return (function (_t, tr, dr) {
                  if (!dr.eNotation) return _t;
                  let ar = tr.match(U);
                  if (ar) {
                    let Gr = ar[1] || "",
                      Cn = ar[3].indexOf("e") === -1 ? "E" : "e",
                      wn = ar[2],
                      jn = Gr ? _t[wn.length + 1] === Cn : _t[wn.length] === Cn;
                    return wn.length > 1 && jn
                      ? _t
                      : wn.length !== 1 || (!ar[3].startsWith(`.${Cn}`) && ar[3][0] !== Cn)
                        ? dr.leadingZeros && !jn
                          ? ((tr = (ar[1] || "") + ar[3]), Number(tr))
                          : _t
                        : Number(tr);
                  }
                  return _t;
                })(Je, ct, ze);
              {
                let _t = K.exec(ct);
                if (_t) {
                  let tr = _t[1] || "",
                    dr = _t[2],
                    ar =
                      ((pt = _t[3]) &&
                        pt.indexOf(".") !== -1 &&
                        ((pt = pt.replace(/0+$/, "")) === "."
                          ? (pt = "0")
                          : pt[0] === "."
                            ? (pt = "0" + pt)
                            : pt[pt.length - 1] === "." && (pt = pt.substring(0, pt.length - 1))),
                      pt),
                    Gr = tr ? Je[dr.length + 1] === "." : Je[dr.length] === ".";
                  if (!ze.leadingZeros && (dr.length > 1 || (dr.length === 1 && !Gr))) return Je;
                  {
                    let Cn = Number(ct),
                      wn = String(Cn);
                    if (Cn === 0 || Cn === -0) return Cn;
                    if (wn.search(/[eE]/) !== -1) return ze.eNotation ? Cn : Je;
                    if (ct.indexOf(".") !== -1) return wn === "0" || wn === ar || wn === `${tr}${ar}` ? Cn : Je;
                    let jn = dr ? ar : ct;
                    return dr ? (jn === wn || tr + jn === wn ? Cn : Je) : jn === wn || jn === tr + wn ? Cn : Je;
                  }
                }
                return Je;
              }
              var pt;
            })(we, Pe))
        );
      }
      return we !== void 0 ? we : "";
    }
    let ee = R.getMetaDataSymbol();
    function Ce(we, Te) {
      return pe(we, Te);
    }
    function pe(we, Te, Pe) {
      let tt,
        Je = {};
      for (let ze = 0; ze < we.length; ze++) {
        let ct = we[ze],
          pt = be(ct),
          _t = "";
        if (((_t = Pe === void 0 ? pt : Pe + "." + pt), pt === Te.textNodeName))
          tt === void 0 ? (tt = ct[pt]) : (tt += "" + ct[pt]);
        else {
          if (pt === void 0) continue;
          if (ct[pt]) {
            let tr = pe(ct[pt], Te, _t),
              dr = Ge(tr, Te);
            (ct[ee] !== void 0 && (tr[ee] = ct[ee]),
              ct[":@"]
                ? Ne(tr, ct[":@"], _t, Te)
                : Object.keys(tr).length !== 1 || tr[Te.textNodeName] === void 0 || Te.alwaysCreateTextNode
                  ? Object.keys(tr).length === 0 && (Te.alwaysCreateTextNode ? (tr[Te.textNodeName] = "") : (tr = ""))
                  : (tr = tr[Te.textNodeName]),
              Je[pt] !== void 0 && Je.hasOwnProperty(pt)
                ? (Array.isArray(Je[pt]) || (Je[pt] = [Je[pt]]), Je[pt].push(tr))
                : Te.isArray(pt, _t, dr)
                  ? (Je[pt] = [tr])
                  : (Je[pt] = tr));
          }
        }
      }
      return (
        typeof tt == "string"
          ? tt.length > 0 && (Je[Te.textNodeName] = tt)
          : tt !== void 0 && (Je[Te.textNodeName] = tt),
        Je
      );
    }
    function be(we) {
      let Te = Object.keys(we);
      for (let Pe = 0; Pe < Te.length; Pe++) {
        let tt = Te[Pe];
        if (tt !== ":@") return tt;
      }
    }
    function Ne(we, Te, Pe, tt) {
      if (Te) {
        let Je = Object.keys(Te),
          ze = Je.length;
        for (let ct = 0; ct < ze; ct++) {
          let pt = Je[ct];
          tt.isArray(pt, Pe + "." + pt, !0, !0) ? (we[pt] = [Te[pt]]) : (we[pt] = Te[pt]);
        }
      }
    }
    function Ge(we, Te) {
      let { textNodeName: Pe } = Te,
        tt = Object.keys(we).length;
      return tt === 0 || !(tt !== 1 || (!we[Pe] && typeof we[Pe] != "boolean" && we[Pe] !== 0));
    }
    class Ze {
      constructor(Te) {
        ((this.externalEntities = {}),
          (this.options = (function (Pe) {
            return Object.assign({}, x, Pe);
          })(Te)));
      }
      parse(Te, Pe) {
        if (typeof Te != "string") {
          if (!Te.toString) throw new Error("XML data is accepted in String or Bytes[] form.");
          Te = Te.toString();
        }
        if (Pe) {
          Pe === !0 && (Pe = {});
          let ze = u(Te, Pe);
          if (ze !== !0) throw Error(`${ze.err.msg}:${ze.err.line}:${ze.err.col}`);
        }
        let tt = new X(this.options);
        tt.addExternalEntities(this.externalEntities);
        let Je = tt.parseXml(Te);
        return this.options.preserveOrder || Je === void 0 ? Je : Ce(Je, this.options);
      }
      addEntity(Te, Pe) {
        if (Pe.indexOf("&") !== -1) throw new Error("Entity value can't have '&'");
        if (Te.indexOf("&") !== -1 || Te.indexOf(";") !== -1)
          throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        if (Pe === "&") throw new Error("An entity with value '&' is not permitted");
        this.externalEntities[Te] = Pe;
      }
      static getMetaDataSymbol() {
        return R.getMetaDataSymbol();
      }
    }
    function Ye(we, Te) {
      let Pe = "";
      return (
        Te.format &&
          Te.indentBy.length > 0 &&
          (Pe = `
`),
        _e(we, Te, "", Pe)
      );
    }
    function _e(we, Te, Pe, tt) {
      let Je = "",
        ze = !1;
      for (let ct = 0; ct < we.length; ct++) {
        let pt = we[ct],
          _t = Ie(pt);
        if (_t === void 0) continue;
        let tr = "";
        if (((tr = Pe.length === 0 ? _t : `${Pe}.${_t}`), _t === Te.textNodeName)) {
          let Cn = pt[_t];
          ($e(tr, Te) || ((Cn = Te.tagValueProcessor(_t, Cn)), (Cn = Le(Cn, Te))),
            ze && (Je += tt),
            (Je += Cn),
            (ze = !1));
          continue;
        }
        if (_t === Te.cdataPropName) {
          (ze && (Je += tt), (Je += `<![CDATA[${pt[_t][0][Te.textNodeName]}]]>`), (ze = !1));
          continue;
        }
        if (_t === Te.commentPropName) {
          ((Je += tt + `<!--${pt[_t][0][Te.textNodeName]}-->`), (ze = !0));
          continue;
        }
        if (_t[0] === "?") {
          let Cn = ke(pt[":@"], Te),
            wn = _t === "?xml" ? "" : tt,
            jn = pt[_t][0][Te.textNodeName];
          ((jn = jn.length !== 0 ? " " + jn : ""), (Je += wn + `<${_t}${jn}${Cn}?>`), (ze = !0));
          continue;
        }
        let dr = tt;
        dr !== "" && (dr += Te.indentBy);
        let ar = tt + `<${_t}${ke(pt[":@"], Te)}`,
          Gr = _e(pt[_t], Te, tr, dr);
        (Te.unpairedTags.indexOf(_t) !== -1
          ? Te.suppressUnpairedNode
            ? (Je += ar + ">")
            : (Je += ar + "/>")
          : (Gr && Gr.length !== 0) || !Te.suppressEmptyNode
            ? Gr && Gr.endsWith(">")
              ? (Je += ar + `>${Gr}${tt}</${_t}>`)
              : ((Je += ar + ">"),
                Gr && tt !== "" && (Gr.includes("/>") || Gr.includes("</"))
                  ? (Je += tt + Te.indentBy + Gr + tt)
                  : (Je += Gr),
                (Je += `</${_t}>`))
            : (Je += ar + "/>"),
          (ze = !0));
      }
      return Je;
    }
    function Ie(we) {
      let Te = Object.keys(we);
      for (let Pe = 0; Pe < Te.length; Pe++) {
        let tt = Te[Pe];
        if (we.hasOwnProperty(tt) && tt !== ":@") return tt;
      }
    }
    function ke(we, Te) {
      let Pe = "";
      if (we && !Te.ignoreAttributes)
        for (let tt in we) {
          if (!we.hasOwnProperty(tt)) continue;
          let Je = Te.attributeValueProcessor(tt, we[tt]);
          ((Je = Le(Je, Te)),
            Je === !0 && Te.suppressBooleanAttributes
              ? (Pe += ` ${tt.substr(Te.attributeNamePrefix.length)}`)
              : (Pe += ` ${tt.substr(Te.attributeNamePrefix.length)}="${Je}"`));
        }
      return Pe;
    }
    function $e(we, Te) {
      let Pe = (we = we.substr(0, we.length - Te.textNodeName.length - 1)).substr(we.lastIndexOf(".") + 1);
      for (let tt in Te.stopNodes) if (Te.stopNodes[tt] === we || Te.stopNodes[tt] === "*." + Pe) return !0;
      return !1;
    }
    function Le(we, Te) {
      if (we && we.length > 0 && Te.processEntities)
        for (let Pe = 0; Pe < Te.entities.length; Pe++) {
          let tt = Te.entities[Pe];
          we = we.replace(tt.regex, tt.val);
        }
      return we;
    }
    let Fe = {
      attributeNamePrefix: "@_",
      attributesGroupName: !1,
      textNodeName: "#text",
      ignoreAttributes: !0,
      cdataPropName: !1,
      format: !1,
      indentBy: "  ",
      suppressEmptyNode: !1,
      suppressUnpairedNode: !0,
      suppressBooleanAttributes: !0,
      tagValueProcessor: function (we, Te) {
        return Te;
      },
      attributeValueProcessor: function (we, Te) {
        return Te;
      },
      preserveOrder: !1,
      commentPropName: !1,
      unpairedTags: [],
      entities: [
        { regex: new RegExp("&", "g"), val: "&amp;" },
        { regex: new RegExp(">", "g"), val: "&gt;" },
        { regex: new RegExp("<", "g"), val: "&lt;" },
        { regex: new RegExp("'", "g"), val: "&apos;" },
        { regex: new RegExp('"', "g"), val: "&quot;" },
      ],
      processEntities: !0,
      stopNodes: [],
      oneListGroup: !1,
    };
    function je(we) {
      ((this.options = Object.assign({}, Fe, we)),
        this.options.ignoreAttributes === !0 || this.options.attributesGroupName
          ? (this.isAttribute = function () {
              return !1;
            })
          : ((this.ignoreAttributesFn = Y(this.options.ignoreAttributes)),
            (this.attrPrefixLen = this.options.attributeNamePrefix.length),
            (this.isAttribute = kt)),
        (this.processTextOrObjNode = He),
        this.options.format
          ? ((this.indentate = mt),
            (this.tagEndChar = `>
`),
            (this.newLine = `
`))
          : ((this.indentate = function () {
              return "";
            }),
            (this.tagEndChar = ">"),
            (this.newLine = "")));
    }
    function He(we, Te, Pe, tt) {
      let Je = this.j2x(we, Pe + 1, tt.concat(Te));
      return we[this.options.textNodeName] !== void 0 && Object.keys(we).length === 1
        ? this.buildTextValNode(we[this.options.textNodeName], Te, Je.attrStr, Pe)
        : this.buildObjectNode(Je.val, Te, Je.attrStr, Pe);
    }
    function mt(we) {
      return this.options.indentBy.repeat(we);
    }
    function kt(we) {
      return (
        !(!we.startsWith(this.options.attributeNamePrefix) || we === this.options.textNodeName) &&
        we.substr(this.attrPrefixLen)
      );
    }
    ((je.prototype.build = function (we) {
      return this.options.preserveOrder
        ? Ye(we, this.options)
        : (Array.isArray(we) &&
            this.options.arrayNodeName &&
            this.options.arrayNodeName.length > 1 &&
            (we = { [this.options.arrayNodeName]: we }),
          this.j2x(we, 0, []).val);
    }),
      (je.prototype.j2x = function (we, Te, Pe) {
        let tt = "",
          Je = "",
          ze = Pe.join(".");
        for (let ct in we)
          if (Object.prototype.hasOwnProperty.call(we, ct))
            if (we[ct] === void 0) this.isAttribute(ct) && (Je += "");
            else if (we[ct] === null)
              this.isAttribute(ct) || ct === this.options.cdataPropName
                ? (Je += "")
                : ct[0] === "?"
                  ? (Je += this.indentate(Te) + "<" + ct + "?" + this.tagEndChar)
                  : (Je += this.indentate(Te) + "<" + ct + "/" + this.tagEndChar);
            else if (we[ct] instanceof Date) Je += this.buildTextValNode(we[ct], ct, "", Te);
            else if (typeof we[ct] != "object") {
              let pt = this.isAttribute(ct);
              if (pt && !this.ignoreAttributesFn(pt, ze)) tt += this.buildAttrPairStr(pt, "" + we[ct]);
              else if (!pt)
                if (ct === this.options.textNodeName) {
                  let _t = this.options.tagValueProcessor(ct, "" + we[ct]);
                  Je += this.replaceEntitiesValue(_t);
                } else Je += this.buildTextValNode(we[ct], ct, "", Te);
            } else if (Array.isArray(we[ct])) {
              let pt = we[ct].length,
                _t = "",
                tr = "";
              for (let dr = 0; dr < pt; dr++) {
                let ar = we[ct][dr];
                if (ar !== void 0)
                  if (ar === null)
                    ct[0] === "?"
                      ? (Je += this.indentate(Te) + "<" + ct + "?" + this.tagEndChar)
                      : (Je += this.indentate(Te) + "<" + ct + "/" + this.tagEndChar);
                  else if (typeof ar == "object")
                    if (this.options.oneListGroup) {
                      let Gr = this.j2x(ar, Te + 1, Pe.concat(ct));
                      ((_t += Gr.val),
                        this.options.attributesGroupName &&
                          ar.hasOwnProperty(this.options.attributesGroupName) &&
                          (tr += Gr.attrStr));
                    } else _t += this.processTextOrObjNode(ar, ct, Te, Pe);
                  else if (this.options.oneListGroup) {
                    let Gr = this.options.tagValueProcessor(ct, ar);
                    ((Gr = this.replaceEntitiesValue(Gr)), (_t += Gr));
                  } else _t += this.buildTextValNode(ar, ct, "", Te);
              }
              (this.options.oneListGroup && (_t = this.buildObjectNode(_t, ct, tr, Te)), (Je += _t));
            } else if (this.options.attributesGroupName && ct === this.options.attributesGroupName) {
              let pt = Object.keys(we[ct]),
                _t = pt.length;
              for (let tr = 0; tr < _t; tr++) tt += this.buildAttrPairStr(pt[tr], "" + we[ct][pt[tr]]);
            } else Je += this.processTextOrObjNode(we[ct], ct, Te, Pe);
        return { attrStr: tt, val: Je };
      }),
      (je.prototype.buildAttrPairStr = function (we, Te) {
        return (
          (Te = this.options.attributeValueProcessor(we, "" + Te)),
          (Te = this.replaceEntitiesValue(Te)),
          this.options.suppressBooleanAttributes && Te === "true" ? " " + we : " " + we + '="' + Te + '"'
        );
      }),
      (je.prototype.buildObjectNode = function (we, Te, Pe, tt) {
        if (we === "")
          return Te[0] === "?"
            ? this.indentate(tt) + "<" + Te + Pe + "?" + this.tagEndChar
            : this.indentate(tt) + "<" + Te + Pe + this.closeTag(Te) + this.tagEndChar;
        {
          let Je = "</" + Te + this.tagEndChar,
            ze = "";
          return (
            Te[0] === "?" && ((ze = "?"), (Je = "")),
            (!Pe && Pe !== "") || we.indexOf("<") !== -1
              ? this.options.commentPropName !== !1 && Te === this.options.commentPropName && ze.length === 0
                ? this.indentate(tt) + `<!--${we}-->` + this.newLine
                : this.indentate(tt) + "<" + Te + Pe + ze + this.tagEndChar + we + this.indentate(tt) + Je
              : this.indentate(tt) + "<" + Te + Pe + ze + ">" + we + Je
          );
        }
      }),
      (je.prototype.closeTag = function (we) {
        let Te = "";
        return (
          this.options.unpairedTags.indexOf(we) !== -1
            ? this.options.suppressUnpairedNode || (Te = "/")
            : (Te = this.options.suppressEmptyNode ? "/" : `></${we}`),
          Te
        );
      }),
      (je.prototype.buildTextValNode = function (we, Te, Pe, tt) {
        if (this.options.cdataPropName !== !1 && Te === this.options.cdataPropName)
          return this.indentate(tt) + `<![CDATA[${we}]]>` + this.newLine;
        if (this.options.commentPropName !== !1 && Te === this.options.commentPropName)
          return this.indentate(tt) + `<!--${we}-->` + this.newLine;
        if (Te[0] === "?") return this.indentate(tt) + "<" + Te + Pe + "?" + this.tagEndChar;
        {
          let Je = this.options.tagValueProcessor(Te, we);
          return (
            (Je = this.replaceEntitiesValue(Je)),
            Je === ""
              ? this.indentate(tt) + "<" + Te + Pe + this.closeTag(Te) + this.tagEndChar
              : this.indentate(tt) + "<" + Te + Pe + ">" + Je + "</" + Te + this.tagEndChar
          );
        }
      }),
      (je.prototype.replaceEntitiesValue = function (we) {
        if (we && we.length > 0 && this.options.processEntities)
          for (let Te = 0; Te < this.options.entities.length; Te++) {
            let Pe = this.options.entities[Te];
            we = we.replace(Pe.regex, Pe.val);
          }
        return we;
      }));
    let $t = { validate: u };
    B5i.exports = e;
  })();
});