/**
 * @module Y5e
 * @category utils/oop
 * @label oop
 * @position 728 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Y5e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Y5e = T((ec) => {
  "use strict";
  Object.defineProperty(ec, "__esModule", { value: !0 });
  ec.regexpCode =
    ec.getEsmExportName =
    ec.getProperty =
    ec.safeStringify =
    ec.stringify =
    ec.strConcat =
    ec.addCodeArg =
    ec.str =
    ec._ =
    ec.nil =
    ec._Code =
    ec.Name =
    ec.IDENTIFIER =
    ec._CodeOrName =
      void 0;
  var W5e = class {};
  ec._CodeOrName = W5e;
  ec.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  var FH = class extends W5e {
    constructor(e) {
      if ((super(), !ec.IDENTIFIER.test(e))) throw new Error("CodeGen: name must be a valid identifier");
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
  ec.Name = FH;
  var cE = class extends W5e {
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
        : (this._names = this._items.reduce((r, n) => (n instanceof FH && (r[n.str] = (r[n.str] || 0) + 1), r), {}));
    }
  };
  ec._Code = cE;
  ec.nil = new cE("");
  function Wfn(t, ...e) {
    let r = [t[0]],
      n = 0;
    for (; n < e.length; ) (yMt(r, e[n]), r.push(t[++n]));
    return new cE(r);
  }
  ec._ = Wfn;
  var AMt = new cE("+");
  function zfn(t, ...e) {
    let r = [z5e(t[0])],
      n = 0;
    for (; n < e.length; ) (r.push(AMt), yMt(r, e[n]), r.push(AMt, z5e(t[++n])));
    return (fcs(r), new cE(r));
  }
  ec.str = zfn;
  function yMt(t, e) {
    e instanceof cE ? t.push(...e._items) : e instanceof FH ? t.push(e) : t.push(gcs(e));
  }
  ec.addCodeArg = yMt;
  function fcs(t) {
    let e = 1;
    for (; e < t.length - 1; ) {
      if (t[e] === AMt) {
        let r = pcs(t[e - 1], t[e + 1]);
        if (r !== void 0) {
          t.splice(e - 1, 3, r);
          continue;
        }
        t[e++] = "+";
      }
      e++;
    }
  }
  function pcs(t, e) {
    if (e === '""') return t;
    if (t === '""') return e;
    if (typeof t == "string")
      return e instanceof FH || t[t.length - 1] !== '"'
        ? void 0
        : typeof e != "string"
          ? `${t.slice(0, -1)}${e}"`
          : e[0] === '"'
            ? t.slice(0, -1) + e.slice(1)
            : void 0;
    if (typeof e == "string" && e[0] === '"' && !(t instanceof FH)) return `"${t}${e.slice(1)}`;
  }
  function hcs(t, e) {
    return e.emptyStr() ? t : t.emptyStr() ? e : zfn`${t}${e}`;
  }
  ec.strConcat = hcs;
  function gcs(t) {
    return typeof t == "number" || typeof t == "boolean" || t === null ? t : z5e(Array.isArray(t) ? t.join(",") : t);
  }
  function bcs(t) {
    return new cE(z5e(t));
  }
  ec.stringify = bcs;
  function z5e(t) {
    return JSON.stringify(t)
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029");
  }
  ec.safeStringify = z5e;
  function Acs(t) {
    return typeof t == "string" && ec.IDENTIFIER.test(t) ? new cE(`.${t}`) : Wfn`[${t}]`;
  }
  ec.getProperty = Acs;
  function ycs(t) {
    if (typeof t == "string" && ec.IDENTIFIER.test(t)) return new cE(`${t}`);
    throw new Error(`CodeGen: invalid export name: ${t}, use explicit $id name mapping`);
  }
  ec.getEsmExportName = ycs;
  function _cs(t) {
    return new cE(t.toString());
  }
  ec.regexpCode = _cs;
});