/**
 * @module lUt
 * @category utils/oop
 * @label oop
 * @position 797 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lUt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lUt = T((x8) => {
  "use strict";
  Object.defineProperty(x8, "__esModule", { value: !0 });
  x8.ValueScope = x8.ValueScopeName = x8.Scope = x8.varKinds = x8.UsedValueState = void 0;
  var w8 = C8e(),
    uUt = class extends Error {
      constructor(e) {
        (super(`CodeGen: "code" for ${e} not defined`), (this.value = e.value));
      }
    },
    oYe;
  (function (t) {
    ((t[(t.Started = 0)] = "Started"), (t[(t.Completed = 1)] = "Completed"));
  })(oYe || (x8.UsedValueState = oYe = {}));
  x8.varKinds = { const: new w8.Name("const"), let: new w8.Name("let"), var: new w8.Name("var") };
  var sYe = class {
    constructor({ prefixes: e, parent: r } = {}) {
      ((this._names = {}), (this._prefixes = e), (this._parent = r));
    }
    toName(e) {
      return e instanceof w8.Name ? e : this.name(e);
    }
    name(e) {
      return new w8.Name(this._newName(e));
    }
    _newName(e) {
      let r = this._names[e] || this._nameGroup(e);
      return `${e}${r.index++}`;
    }
    _nameGroup(e) {
      var r, n;
      if (
        (!((n = (r = this._parent) === null || r === void 0 ? void 0 : r._prefixes) === null || n === void 0) &&
          n.has(e)) ||
        (this._prefixes && !this._prefixes.has(e))
      )
        throw new Error(`CodeGen: prefix "${e}" is not allowed in this scope`);
      return (this._names[e] = { prefix: e, index: 0 });
    }
  };
  x8.Scope = sYe;
  var aYe = class extends w8.Name {
    constructor(e, r) {
      (super(r), (this.prefix = e));
    }
    setValue(e, { property: r, itemIndex: n }) {
      ((this.value = e), (this.scopePath = (0, w8._)`.${new w8.Name(r)}[${n}]`));
    }
  };
  x8.ValueScopeName = aYe;
  var ofs = (0, w8._)`\n`,
    cUt = class extends sYe {
      constructor(e) {
        (super(e), (this._values = {}), (this._scope = e.scope), (this.opts = { ...e, _n: e.lines ? ofs : w8.nil }));
      }
      get() {
        return this._scope;
      }
      name(e) {
        return new aYe(e, this._newName(e));
      }
      value(e, r) {
        var n;
        if (r.ref === void 0) throw new Error("CodeGen: ref must be passed in value");
        let o = this.toName(e),
          { prefix: s } = o,
          a = (n = r.key) !== null && n !== void 0 ? n : r.ref,
          u = this._values[s];
        if (u) {
          let d = u.get(a);
          if (d) return d;
        } else u = this._values[s] = new Map();
        u.set(a, o);
        let c = this._scope[s] || (this._scope[s] = []),
          m = c.length;
        return ((c[m] = r.ref), o.setValue(r, { property: s, itemIndex: m }), o);
      }
      getValue(e, r) {
        let n = this._values[e];
        if (n) return n.get(r);
      }
      scopeRefs(e, r = this._values) {
        return this._reduceValues(r, (n) => {
          if (n.scopePath === void 0) throw new Error(`CodeGen: name "${n}" has no value`);
          return (0, w8._)`${e}${n.scopePath}`;
        });
      }
      scopeCode(e = this._values, r, n) {
        return this._reduceValues(
          e,
          (o) => {
            if (o.value === void 0) throw new Error(`CodeGen: name "${o}" has no value`);
            return o.value.code;
          },
          r,
          n,
        );
      }
      _reduceValues(e, r, n = {}, o) {
        let s = w8.nil;
        for (let a in e) {
          let u = e[a];
          if (!u) continue;
          let c = (n[a] = n[a] || new Map());
          u.forEach((m) => {
            if (c.has(m)) return;
            c.set(m, oYe.Started);
            let d = r(m);
            if (d) {
              let f = this.opts.es5 ? x8.varKinds.var : x8.varKinds.const;
              s = (0, w8._)`${s}${f} ${m} = ${d};${this.opts._n}`;
            } else if ((d = o?.(m))) s = (0, w8._)`${s}${d}${this.opts._n}`;
            else throw new uUt(m);
            c.set(m, oYe.Completed);
          });
        }
        return s;
      }
    };
  x8.ValueScope = cUt;
});