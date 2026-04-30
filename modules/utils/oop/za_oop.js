/**
 * @module za
 * @category utils/oop
 * @label oop
 * @position 874 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (za) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var za = T((ja) => {
  "use strict";
  Object.defineProperty(ja, "__esModule", { value: !0 });
  ja.or =
    ja.and =
    ja.not =
    ja.CodeGen =
    ja.operators =
    ja.varKinds =
    ja.ValueScopeName =
    ja.ValueScope =
    ja.Scope =
    ja.Name =
    ja.regexpCode =
    ja.stringify =
    ja.getProperty =
    ja.nil =
    ja.strConcat =
    ja.str =
    ja._ =
      void 0;
  var xu = T9e(),
    F4 = Fjt(),
    NM = T9e();
  Object.defineProperty(ja, "_", {
    enumerable: !0,
    get: function () {
      return NM._;
    },
  });
  Object.defineProperty(ja, "str", {
    enumerable: !0,
    get: function () {
      return NM.str;
    },
  });
  Object.defineProperty(ja, "strConcat", {
    enumerable: !0,
    get: function () {
      return NM.strConcat;
    },
  });
  Object.defineProperty(ja, "nil", {
    enumerable: !0,
    get: function () {
      return NM.nil;
    },
  });
  Object.defineProperty(ja, "getProperty", {
    enumerable: !0,
    get: function () {
      return NM.getProperty;
    },
  });
  Object.defineProperty(ja, "stringify", {
    enumerable: !0,
    get: function () {
      return NM.stringify;
    },
  });
  Object.defineProperty(ja, "regexpCode", {
    enumerable: !0,
    get: function () {
      return NM.regexpCode;
    },
  });
  Object.defineProperty(ja, "Name", {
    enumerable: !0,
    get: function () {
      return NM.Name;
    },
  });
  var fKe = Fjt();
  Object.defineProperty(ja, "Scope", {
    enumerable: !0,
    get: function () {
      return fKe.Scope;
    },
  });
  Object.defineProperty(ja, "ValueScope", {
    enumerable: !0,
    get: function () {
      return fKe.ValueScope;
    },
  });
  Object.defineProperty(ja, "ValueScopeName", {
    enumerable: !0,
    get: function () {
      return fKe.ValueScopeName;
    },
  });
  Object.defineProperty(ja, "varKinds", {
    enumerable: !0,
    get: function () {
      return fKe.varKinds;
    },
  });
  ja.operators = {
    GT: new xu._Code(">"),
    GTE: new xu._Code(">="),
    LT: new xu._Code("<"),
    LTE: new xu._Code("<="),
    EQ: new xu._Code("==="),
    NEQ: new xu._Code("!=="),
    NOT: new xu._Code("!"),
    OR: new xu._Code("||"),
    AND: new xu._Code("&&"),
    ADD: new xu._Code("+"),
  };
  var Ck = class {
      optimizeNodes() {
        return this;
      }
      optimizeNames(e, r) {
        return this;
      }
    },
    Ujt = class extends Ck {
      constructor(e, r, n) {
        (super(), (this.varKind = e), (this.name = r), (this.rhs = n));
      }
      render({ es5: e, _n: r }) {
        let n = e ? F4.varKinds.var : this.varKind,
          o = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${n} ${this.name}${o};` + r;
      }
      optimizeNames(e, r) {
        if (e[this.name.str]) return (this.rhs && (this.rhs = Cse(this.rhs, e, r)), this);
      }
      get names() {
        return this.rhs instanceof xu._CodeOrName ? this.rhs.names : {};
      }
    },
    lKe = class extends Ck {
      constructor(e, r, n) {
        (super(), (this.lhs = e), (this.rhs = r), (this.sideEffects = n));
      }
      render({ _n: e }) {
        return `${this.lhs} = ${this.rhs};` + e;
      }
      optimizeNames(e, r) {
        if (!(this.lhs instanceof xu.Name && !e[this.lhs.str] && !this.sideEffects))
          return ((this.rhs = Cse(this.rhs, e, r)), this);
      }
      get names() {
        let e = this.lhs instanceof xu.Name ? {} : { ...this.lhs.names };
        return dKe(e, this.rhs);
      }
    },
    $jt = class extends lKe {
      constructor(e, r, n, o) {
        (super(e, n, o), (this.op = r));
      }
      render({ _n: e }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + e;
      }
    },
    jjt = class extends Ck {
      constructor(e) {
        (super(), (this.label = e), (this.names = {}));
      }
      render({ _n: e }) {
        return `${this.label}:` + e;
      }
    },
    Qjt = class extends Ck {
      constructor(e) {
        (super(), (this.label = e), (this.names = {}));
      }
      render({ _n: e }) {
        return `break${this.label ? ` ${this.label}` : ""};` + e;
      }
    },
    Gjt = class extends Ck {
      constructor(e) {
        (super(), (this.error = e));
      }
      render({ _n: e }) {
        return `throw ${this.error};` + e;
      }
      get names() {
        return this.error.names;
      }
    },
    qjt = class extends Ck {
      constructor(e) {
        (super(), (this.code = e));
      }
      render({ _n: e }) {
        return `${this.code};` + e;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(e, r) {
        return ((this.code = Cse(this.code, e, r)), this);
      }
      get names() {
        return this.code instanceof xu._CodeOrName ? this.code.names : {};
      }
    },
    D9e = class extends Ck {
      constructor(e = []) {
        (super(), (this.nodes = e));
      }
      render(e) {
        return this.nodes.reduce((r, n) => r + n.render(e), "");
      }
      optimizeNodes() {
        let { nodes: e } = this,
          r = e.length;
        for (; r--; ) {
          let n = e[r].optimizeNodes();
          Array.isArray(n) ? e.splice(r, 1, ...n) : n ? (e[r] = n) : e.splice(r, 1);
        }
        return e.length > 0 ? this : void 0;
      }
      optimizeNames(e, r) {
        let { nodes: n } = this,
          o = n.length;
        for (; o--; ) {
          let s = n[o];
          s.optimizeNames(e, r) || (FAs(e, s.names), n.splice(o, 1));
        }
        return n.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((e, r) => bV(e, r.names), {});
      }
    },
    Sk = class extends D9e {
      render(e) {
        return "{" + e._n + super.render(e) + "}" + e._n;
      }
    },
    Hjt = class extends D9e {},
    vse = class extends Sk {};
  vse.kind = "else";
  var hV = class t extends Sk {
    constructor(e, r) {
      (super(r), (this.condition = e));
    }
    render(e) {
      let r = `if(${this.condition})` + super.render(e);
      return (this.else && (r += "else " + this.else.render(e)), r);
    }
    optimizeNodes() {
      super.optimizeNodes();
      let e = this.condition;
      if (e === !0) return this.nodes;
      let r = this.else;
      if (r) {
        let n = r.optimizeNodes();
        r = this.else = Array.isArray(n) ? new vse(n) : n;
      }
      if (r)
        return e === !1
          ? r instanceof t
            ? r
            : r.nodes
          : this.nodes.length
            ? this
            : new t(q2n(e), r instanceof t ? [r] : r.nodes);
      if (!(e === !1 || !this.nodes.length)) return this;
    }
    optimizeNames(e, r) {
      var n;
      if (
        ((this.else = (n = this.else) === null || n === void 0 ? void 0 : n.optimizeNames(e, r)),
        !!(super.optimizeNames(e, r) || this.else))
      )
        return ((this.condition = Cse(this.condition, e, r)), this);
    }
    get names() {
      let e = super.names;
      return (dKe(e, this.condition), this.else && bV(e, this.else.names), e);
    }
  };
  hV.kind = "if";
  var gV = class extends Sk {};
  gV.kind = "for";
  var Vjt = class extends gV {
      constructor(e) {
        (super(), (this.iteration = e));
      }
      render(e) {
        return `for(${this.iteration})` + super.render(e);
      }
      optimizeNames(e, r) {
        if (super.optimizeNames(e, r)) return ((this.iteration = Cse(this.iteration, e, r)), this);
      }
      get names() {
        return bV(super.names, this.iteration.names);
      }
    },
    Wjt = class extends gV {
      constructor(e, r, n, o) {
        (super(), (this.varKind = e), (this.name = r), (this.from = n), (this.to = o));
      }
      render(e) {
        let r = e.es5 ? F4.varKinds.var : this.varKind,
          { name: n, from: o, to: s } = this;
        return `for(${r} ${n}=${o}; ${n}<${s}; ${n}++)` + super.render(e);
      }
      get names() {
        let e = dKe(super.names, this.from);
        return dKe(e, this.to);
      }
    },
    mKe = class extends gV {
      constructor(e, r, n, o) {
        (super(), (this.loop = e), (this.varKind = r), (this.name = n), (this.iterable = o));
      }
      render(e) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(e);
      }
      optimizeNames(e, r) {
        if (super.optimizeNames(e, r)) return ((this.iterable = Cse(this.iterable, e, r)), this);
      }
      get names() {
        return bV(super.names, this.iterable.names);
      }
    },
    I9e = class extends Sk {
      constructor(e, r, n) {
        (super(), (this.name = e), (this.args = r), (this.async = n));
      }
      render(e) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(e);
      }
    };
  I9e.kind = "func";
  var R9e = class extends D9e {
    render(e) {
      return "return " + super.render(e);
    }
  };
  R9e.kind = "return";
  var zjt = class extends Sk {
      render(e) {
        let r = "try" + super.render(e);
        return (this.catch && (r += this.catch.render(e)), this.finally && (r += this.finally.render(e)), r);
      }
      optimizeNodes() {
        var e, r;
        return (
          super.optimizeNodes(),
          (e = this.catch) === null || e === void 0 || e.optimizeNodes(),
          (r = this.finally) === null || r === void 0 || r.optimizeNodes(),
          this
        );
      }
      optimizeNames(e, r) {
        var n, o;
        return (
          super.optimizeNames(e, r),
          (n = this.catch) === null || n === void 0 || n.optimizeNames(e, r),
          (o = this.finally) === null || o === void 0 || o.optimizeNames(e, r),
          this
        );
      }
      get names() {
        let e = super.names;
        return (this.catch && bV(e, this.catch.names), this.finally && bV(e, this.finally.names), e);
      }
    },
    k9e = class extends Sk {
      constructor(e) {
        (super(), (this.error = e));
      }
      render(e) {
        return `catch(${this.error})` + super.render(e);
      }
    };
  k9e.kind = "catch";
  var O9e = class extends Sk {
    render(e) {
      return "finally" + super.render(e);
    }
  };
  O9e.kind = "finally";
  var Yjt = class {
    constructor(e, r = {}) {
      ((this._values = {}),
        (this._blockStarts = []),
        (this._constants = {}),
        (this.opts = {
          ...r,
          _n: r.lines
            ? `
`
            : "",
        }),
        (this._extScope = e),
        (this._scope = new F4.Scope({ parent: e })),
        (this._nodes = [new Hjt()]));
    }
    toString() {
      return this._root.render(this.opts);
    }
    name(e) {
      return this._scope.name(e);
    }
    scopeName(e) {
      return this._extScope.name(e);
    }
    scopeValue(e, r) {
      let n = this._extScope.value(e, r);
      return ((this._values[n.prefix] || (this._values[n.prefix] = new Set())).add(n), n);
    }
    getScopeValue(e, r) {
      return this._extScope.getValue(e, r);
    }
    scopeRefs(e) {
      return this._extScope.scopeRefs(e, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(e, r, n, o) {
      let s = this._scope.toName(r);
      return (n !== void 0 && o && (this._constants[s.str] = n), this._leafNode(new Ujt(e, s, n)), s);
    }
    const(e, r, n) {
      return this._def(F4.varKinds.const, e, r, n);
    }
    let(e, r, n) {
      return this._def(F4.varKinds.let, e, r, n);
    }
    var(e, r, n) {
      return this._def(F4.varKinds.var, e, r, n);
    }
    assign(e, r, n) {
      return this._leafNode(new lKe(e, r, n));
    }
    add(e, r) {
      return this._leafNode(new $jt(e, ja.operators.ADD, r));
    }
    code(e) {
      return (typeof e == "function" ? e() : e !== xu.nil && this._leafNode(new qjt(e)), this);
    }
    object(...e) {
      let r = ["{"];
      for (let [n, o] of e)
        (r.length > 1 && r.push(","), r.push(n), (n !== o || this.opts.es5) && (r.push(":"), (0, xu.addCodeArg)(r, o)));
      return (r.push("}"), new xu._Code(r));
    }
    if(e, r, n) {
      if ((this._blockNode(new hV(e)), r && n)) this.code(r).else().code(n).endIf();
      else if (r) this.code(r).endIf();
      else if (n) throw new Error('CodeGen: "else" body without "then" body');
      return this;
    }
    elseIf(e) {
      return this._elseNode(new hV(e));
    }
    else() {
      return this._elseNode(new vse());
    }
    endIf() {
      return this._endBlockNode(hV, vse);
    }
    _for(e, r) {
      return (this._blockNode(e), r && this.code(r).endFor(), this);
    }
    for(e, r) {
      return this._for(new Vjt(e), r);
    }
    forRange(e, r, n, o, s = this.opts.es5 ? F4.varKinds.var : F4.varKinds.let) {
      let a = this._scope.toName(e);
      return this._for(new Wjt(s, a, r, n), () => o(a));
    }
    forOf(e, r, n, o = F4.varKinds.const) {
      let s = this._scope.toName(e);
      if (this.opts.es5) {
        let a = r instanceof xu.Name ? r : this.var("_arr", r);
        return this.forRange("_i", 0, (0, xu._)`${a}.length`, (u) => {
          (this.var(s, (0, xu._)`${a}[${u}]`), n(s));
        });
      }
      return this._for(new mKe("of", o, s, r), () => n(s));
    }
    forIn(e, r, n, o = this.opts.es5 ? F4.varKinds.var : F4.varKinds.const) {
      if (this.opts.ownProperties) return this.forOf(e, (0, xu._)`Object.keys(${r})`, n);
      let s = this._scope.toName(e);
      return this._for(new mKe("in", o, s, r), () => n(s));
    }
    endFor() {
      return this._endBlockNode(gV);
    }
    label(e) {
      return this._leafNode(new jjt(e));
    }
    break(e) {
      return this._leafNode(new Qjt(e));
    }
    return(e) {
      let r = new R9e();
      if ((this._blockNode(r), this.code(e), r.nodes.length !== 1))
        throw new Error('CodeGen: "return" should have one node');
      return this._endBlockNode(R9e);
    }
    try(e, r, n) {
      if (!r && !n) throw new Error('CodeGen: "try" without "catch" and "finally"');
      let o = new zjt();
      if ((this._blockNode(o), this.code(e), r)) {
        let s = this.name("e");
        ((this._currNode = o.catch = new k9e(s)), r(s));
      }
      return (n && ((this._currNode = o.finally = new O9e()), this.code(n)), this._endBlockNode(k9e, O9e));
    }
    throw(e) {
      return this._leafNode(new Gjt(e));
    }
    block(e, r) {
      return (this._blockStarts.push(this._nodes.length), e && this.code(e).endBlock(r), this);
    }
    endBlock(e) {
      let r = this._blockStarts.pop();
      if (r === void 0) throw new Error("CodeGen: not in self-balancing block");
      let n = this._nodes.length - r;
      if (n < 0 || (e !== void 0 && n !== e)) throw new Error(`CodeGen: wrong number of nodes: ${n} vs ${e} expected`);
      return ((this._nodes.length = r), this);
    }
    func(e, r = xu.nil, n, o) {
      return (this._blockNode(new I9e(e, r, n)), o && this.code(o).endFunc(), this);
    }
    endFunc() {
      return this._endBlockNode(I9e);
    }
    optimize(e = 1) {
      for (; e-- > 0; ) (this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants));
    }
    _leafNode(e) {
      return (this._currNode.nodes.push(e), this);
    }
    _blockNode(e) {
      (this._currNode.nodes.push(e), this._nodes.push(e));
    }
    _endBlockNode(e, r) {
      let n = this._currNode;
      if (n instanceof e || (r && n instanceof r)) return (this._nodes.pop(), this);
      throw new Error(`CodeGen: not in block "${r ? `${e.kind}/${r.kind}` : e.kind}"`);
    }
    _elseNode(e) {
      let r = this._currNode;
      if (!(r instanceof hV)) throw new Error('CodeGen: "else" without "if"');
      return ((this._currNode = r.else = e), this);
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      let e = this._nodes;
      return e[e.length - 1];
    }
    set _currNode(e) {
      let r = this._nodes;
      r[r.length - 1] = e;
    }
  };
  ja.CodeGen = Yjt;
  function bV(t, e) {
    for (let r in e) t[r] = (t[r] || 0) + (e[r] || 0);
    return t;
  }
  function dKe(t, e) {
    return e instanceof xu._CodeOrName ? bV(t, e.names) : t;
  }
  function Cse(t, e, r) {
    if (t instanceof xu.Name) return n(t);
    if (!o(t)) return t;
    return new xu._Code(
      t._items.reduce(
        (s, a) => (a instanceof xu.Name && (a = n(a)), a instanceof xu._Code ? s.push(...a._items) : s.push(a), s),
        [],
      ),
    );
    function n(s) {
      let a = r[s.str];
      return a === void 0 || e[s.str] !== 1 ? s : (delete e[s.str], a);
    }
    function o(s) {
      return (
        s instanceof xu._Code && s._items.some((a) => a instanceof xu.Name && e[a.str] === 1 && r[a.str] !== void 0)
      );
    }
  }
  function FAs(t, e) {
    for (let r in e) t[r] = (t[r] || 0) - (e[r] || 0);
  }
  function q2n(t) {
    return typeof t == "boolean" || typeof t == "number" || t === null ? !t : (0, xu._)`!${Kjt(t)}`;
  }
  ja.not = q2n;
  var UAs = H2n(ja.operators.AND);
  function $As(...t) {
    return t.reduce(UAs);
  }
  ja.and = $As;
  var jAs = H2n(ja.operators.OR);
  function QAs(...t) {
    return t.reduce(jAs);
  }
  ja.or = QAs;
  function H2n(t) {
    return (e, r) => (e === xu.nil ? r : r === xu.nil ? e : (0, xu._)`${Kjt(e)} ${t} ${Kjt(r)}`);
  }
  function Kjt(t) {
    return t instanceof xu.Name ? t : (0, xu._)`(${t})`;
  }
});