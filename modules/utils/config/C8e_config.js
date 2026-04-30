/**
 * @module C8e
 * @category utils/config
 * @label config
 * @position 796 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (C8e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var C8e = T((rc) => {
  "use strict";
  Object.defineProperty(rc, "__esModule", { value: !0 });
  rc.regexpCode =
    rc.getEsmExportName =
    rc.getProperty =
    rc.safeStringify =
    rc.stringify =
    rc.strConcat =
    rc.addCodeArg =
    rc.str =
    rc._ =
    rc.nil =
    rc._Code =
    rc.Name =
    rc.IDENTIFIER =
    rc._CodeOrName =
      void 0;
  var E8e = class {};
  rc._CodeOrName = E8e;
  rc.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  var YH = class extends E8e {
    constructor(e) {
      if ((super(), !rc.IDENTIFIER.test(e))) throw new Error("CodeGen: name must be a valid identifier");
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
  rc.Name = YH;
  var fE = class extends E8e {
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
        : (this._names = this._items.reduce((r, n) => (n instanceof YH && (r[n.str] = (r[n.str] || 0) + 1), r), {}));
    }
  };
  rc._Code = fE;
  rc.nil = new fE("");
  function T3n(t, ...e) {
    let r = [t[0]],
      n = 0;
    for (; n < e.length; ) (aUt(r, e[n]), r.push(t[++n]));
    return new fE(r);
  }
  rc._ = T3n;
  var sUt = new fE("+");
  function D3n(t, ...e) {
    let r = [v8e(t[0])],
      n = 0;
    for (; n < e.length; ) (r.push(sUt), aUt(r, e[n]), r.push(sUt, v8e(t[++n])));
    return (J1s(r), new fE(r));
  }
  rc.str = D3n;
  function aUt(t, e) {
    e instanceof fE ? t.push(...e._items) : e instanceof YH ? t.push(e) : t.push(efs(e));
  }
  rc.addCodeArg = aUt;
  function J1s(t) {
    let e = 1;
    for (; e < t.length - 1; ) {
      if (t[e] === sUt) {
        let r = X1s(t[e - 1], t[e + 1]);
        if (r !== void 0) {
          t.splice(e - 1, 3, r);
          continue;
        }
        t[e++] = "+";
      }
      e++;
    }
  }
  function X1s(t, e) {
    if (e === '""') return t;
    if (t === '""') return e;
    if (typeof t == "string")
      return e instanceof YH || t[t.length - 1] !== '"'
        ? void 0
        : typeof e != "string"
          ? `${t.slice(0, -1)}${e}"`
          : e[0] === '"'
            ? t.slice(0, -1) + e.slice(1)
            : void 0;
    if (typeof e == "string" && e[0] === '"' && !(t instanceof YH)) return `"${t}${e.slice(1)}`;
  }
  function Z1s(t, e) {
    return e.emptyStr() ? t : t.emptyStr() ? e : D3n`${t}${e}`;
  }
  rc.strConcat = Z1s;
  function efs(t) {
    return typeof t == "number" || typeof t == "boolean" || t === null ? t : v8e(Array.isArray(t) ? t.join(",") : t);
  }
  function tfs(t) {
    return new fE(v8e(t));
  }
  rc.stringify = tfs;
  function v8e(t) {
    return JSON.stringify(t)
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029");
  }
  rc.safeStringify = v8e;
  function rfs(t) {
    return typeof t == "string" && rc.IDENTIFIER.test(t) ? new fE(`.${t}`) : T3n`[${t}]`;
  }
  rc.getProperty = rfs;
  function nfs(t) {
    if (typeof t == "string" && rc.IDENTIFIER.test(t)) return new fE(`${t}`);
    throw new Error(`CodeGen: invalid export name: ${t}, use explicit $id name mapping`);
  }
  rc.getEsmExportName = nfs;
  function ifs(t) {
    return new fE(t.toString());
  }
  rc.regexpCode = ifs;
});