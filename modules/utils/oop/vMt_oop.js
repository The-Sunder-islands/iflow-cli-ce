/**
 * @module vMt
 * @category utils/oop
 * @label oop
 * @position 729 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vMt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vMt = T((v8) => {
  "use strict";
  Object.defineProperty(v8, "__esModule", { value: !0 });
  v8.ValueScope = v8.ValueScopeName = v8.Scope = v8.varKinds = v8.UsedValueState = void 0;
  var E8 = Y5e(),
    _Mt = class extends Error {
      constructor(e) {
        (super(`CodeGen: "code" for ${e} not defined`), (this.value = e.value));
      }
    },
    Cze;
  (function (t) {
    ((t[(t.Started = 0)] = "Started"), (t[(t.Completed = 1)] = "Completed"));
  })(Cze || (v8.UsedValueState = Cze = {}));
  v8.varKinds = { const: new E8.Name("const"), let: new E8.Name("let"), var: new E8.Name("var") };
  var Sze = class {
    constructor({ prefixes: e, parent: r } = {}) {
      ((this._names = {}), (this._prefixes = e), (this._parent = r));
    }
    toName(e) {
      return e instanceof E8.Name ? e : this.name(e);
    }
    name(e) {
      return new E8.Name(this._newName(e));
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
  v8.Scope = Sze;
  var wze = class extends E8.Name {
    constructor(e, r) {
      (super(r), (this.prefix = e));
    }
    setValue(e, { property: r, itemIndex: n }) {
      ((this.value = e), (this.scopePath = (0, E8._)`.${new E8.Name(r)}[${n}]`));
    }
  };
  v8.ValueScopeName = wze;
  var Ecs = (0, E8._)`\n`,
    EMt = class extends Sze {
      constructor(e) {
        (super(e), (this._values = {}), (this._scope = e.scope), (this.opts = { ...e, _n: e.lines ? Ecs : E8.nil }));
      }
      get() {
        return this._scope;
      }
      name(e) {
        return new wze(e, this._newName(e));
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
          return (0, E8._)`${e}${n.scopePath}`;
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
        let s = E8.nil;
        for (let a in e) {
          let u = e[a];
          if (!u) continue;
          let c = (n[a] = n[a] || new Map());
          u.forEach((m) => {
            if (c.has(m)) return;
            c.set(m, Cze.Started);
            let d = r(m);
            if (d) {
              let f = this.opts.es5 ? v8.varKinds.var : v8.varKinds.const;
              s = (0, E8._)`${s}${f} ${m} = ${d};${this.opts._n}`;
            } else if ((d = o?.(m))) s = (0, E8._)`${s}${d}${this.opts._n}`;
            else throw new _Mt(m);
            c.set(m, Cze.Completed);
          });
        }
        return s;
      }
    };
  v8.ValueScope = EMt;
});