/**
 * @module T9e
 * @category utils/oop
 * @label oop
 * @position 872 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (T9e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var T9e = T((oc) => {
  "use strict";
  Object.defineProperty(oc, "__esModule", { value: !0 });
  oc.regexpCode =
    oc.getEsmExportName =
    oc.getProperty =
    oc.safeStringify =
    oc.stringify =
    oc.strConcat =
    oc.addCodeArg =
    oc.str =
    oc._ =
    oc.nil =
    oc._Code =
    oc.Name =
    oc.IDENTIFIER =
    oc._CodeOrName =
      void 0;
  var w9e = class {};
  oc._CodeOrName = w9e;
  oc.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  var pV = class extends w9e {
    constructor(e) {
      if ((super(), !oc.IDENTIFIER.test(e))) throw new Error("CodeGen: name must be a valid identifier");
      this.str = e;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      return !1;
    }
    get names() {
      return { [this.str]: 1 };
    }
  };
  oc.Name = pV;
  var AE = class extends w9e {
    constructor(e) {
      (super(), (this._items = typeof e == "string" ? [e] : e));
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1) return !1;
      let e = this._items[0];
      return e === "" || e === '""';
    }
    get str() {
      var e;
      return (e = this._str) !== null && e !== void 0 ? e : (this._str = this._items.reduce((r, n) => `${r}${n}`, ""));
    }
    get names() {
      var e;
      return (e = this._names) !== null && e !== void 0
        ? e
        : (this._names = this._items.reduce((r, n) => (n instanceof pV && (r[n.str] = (r[n.str] || 0) + 1), r), {}));
    }
  };
  oc._Code = AE;
  oc.nil = new AE("");
  function Q2n(t, ...e) {
    let r = [t[0]],
      n = 0;
    for (; n < e.length; ) (Bjt(r, e[n]), r.push(t[++n]));
    return new AE(r);
  }
  oc._ = Q2n;
  var Pjt = new AE("+");
  function G2n(t, ...e) {
    let r = [x9e(t[0])],
      n = 0;
    for (; n < e.length; ) (r.push(Pjt), Bjt(r, e[n]), r.push(Pjt, x9e(t[++n])));
    return (IAs(r), new AE(r));
  }
  oc.str = G2n;
  function Bjt(t, e) {
    e instanceof AE ? t.push(...e._items) : e instanceof pV ? t.push(e) : t.push(OAs(e));
  }
  oc.addCodeArg = Bjt;
  function IAs(t) {
    let e = 1;
    for (; e < t.length - 1; ) {
      if (t[e] === Pjt) {
        let r = RAs(t[e - 1], t[e + 1]);
        if (r !== void 0) {
          t.splice(e - 1, 3, r);
          continue;
        }
        t[e++] = "+";
      }
      e++;
    }
  }
  function RAs(t, e) {
    if (e === '""') return t;
    if (t === '""') return e;
    if (typeof t == "string")
      return e instanceof pV || t[t.length - 1] !== '"'
        ? void 0
        : typeof e != "string"
          ? `${t.slice(0, -1)}${e}"`
          : e[0] === '"'
            ? t.slice(0, -1) + e.slice(1)
            : void 0;
    if (typeof e == "string" && e[0] === '"' && !(t instanceof pV)) return `"${t}${e.slice(1)}`;
  }
  function kAs(t, e) {
    return e.emptyStr() ? t : t.emptyStr() ? e : G2n`${t}${e}`;
  }
  oc.strConcat = kAs;
  function OAs(t) {
    return typeof t == "number" || typeof t == "boolean" || t === null ? t : x9e(Array.isArray(t) ? t.join(",") : t);
  }
  function NAs(t) {
    return new AE(x9e(t));
  }
  oc.stringify = NAs;
  function x9e(t) {
    return JSON.stringify(t)
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029");
  }
  oc.safeStringify = x9e;
  function PAs(t) {
    return typeof t == "string" && oc.IDENTIFIER.test(t) ? new AE(`.${t}`) : Q2n`[${t}]`;
  }
  oc.getProperty = PAs;
  function BAs(t) {
    if (typeof t == "string" && oc.IDENTIFIER.test(t)) return new AE(`${t}`);
    throw new Error(`CodeGen: invalid export name: ${t}, use explicit $id name mapping`);
  }
  oc.getEsmExportName = BAs;
  function LAs(t) {
    return new AE(t.toString());
  }
  oc.regexpCode = LAs;
});