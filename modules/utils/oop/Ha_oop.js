/**
 * @module Ha
 * @category utils/oop
 * @label oop
 * @position 730 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ha) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ha = T((Ua) => {
  "use strict";
  Object.defineProperty(Ua, "__esModule", { value: !0 });
  Ua.or =
    Ua.and =
    Ua.not =
    Ua.CodeGen =
    Ua.operators =
    Ua.varKinds =
    Ua.ValueScopeName =
    Ua.ValueScope =
    Ua.Scope =
    Ua.Name =
    Ua.regexpCode =
    Ua.stringify =
    Ua.getProperty =
    Ua.nil =
    Ua.strConcat =
    Ua.str =
    Ua._ =
      void 0;
  var Su = Y5e(),
    D4 = vMt(),
    dM = Y5e();
  Object.defineProperty(Ua, "_", {
    enumerable: !0,
    get: function () {
      return dM._;
    },
  });
  Object.defineProperty(Ua, "str", {
    enumerable: !0,
    get: function () {
      return dM.str;
    },
  });
  Object.defineProperty(Ua, "strConcat", {
    enumerable: !0,
    get: function () {
      return dM.strConcat;
    },
  });
  Object.defineProperty(Ua, "nil", {
    enumerable: !0,
    get: function () {
      return dM.nil;
    },
  });
  Object.defineProperty(Ua, "getProperty", {
    enumerable: !0,
    get: function () {
      return dM.getProperty;
    },
  });
  Object.defineProperty(Ua, "stringify", {
    enumerable: !0,
    get: function () {
      return dM.stringify;
    },
  });
  Object.defineProperty(Ua, "regexpCode", {
    enumerable: !0,
    get: function () {
      return dM.regexpCode;
    },
  });
  Object.defineProperty(Ua, "Name", {
    enumerable: !0,
    get: function () {
      return dM.Name;
    },
  });
  var Ize = vMt();
  Object.defineProperty(Ua, "Scope", {
    enumerable: !0,
    get: function () {
      return Ize.Scope;
    },
  });
  Object.defineProperty(Ua, "ValueScope", {
    enumerable: !0,
    get: function () {
      return Ize.ValueScope;
    },
  });
  Object.defineProperty(Ua, "ValueScopeName", {
    enumerable: !0,
    get: function () {
      return Ize.ValueScopeName;
    },
  });
  Object.defineProperty(Ua, "varKinds", {
    enumerable: !0,
    get: function () {
      return Ize.varKinds;
    },
  });
  Ua.operators = {
    GT: new Su._Code(">"),
    GTE: new Su._Code(">="),
    LT: new Su._Code("<"),
    LTE: new Su._Code("<="),
    EQ: new Su._Code("==="),
    NEQ: new Su._Code("!=="),
    NOT: new Su._Code("!"),
    OR: new Su._Code("||"),
    AND: new Su._Code("&&"),
    ADD: new Su._Code("+"),
  };
  var lk = class {
      optimizeNodes() {
        return this;
      }
      optimizeNames(e, r) {
        return this;
      }
    },
    CMt = class extends lk {
      constructor(e, r, n) {
        (super(), (this.varKind = e), (this.name = r), (this.rhs = n));
      }
      render({ es5: e, _n: r }) {
        let n = e ? D4.varKinds.var : this.varKind,
          o = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${n} ${this.name}${o};` + r;
      }
      optimizeNames(e, r) {
        if (e[this.name.str]) return (this.rhs && (this.rhs = Ooe(this.rhs, e, r)), this);
      }
      get names() {
        return this.rhs instanceof Su._CodeOrName ? this.rhs.names : {};
      }
    },
    xze = class extends lk {
      constructor(e, r, n) {
        (super(), (this.lhs = e), (this.rhs = r), (this.sideEffects = n));
      }
      render({ _n: e }) {
        return `${this.lhs} = ${this.rhs};` + e;
      }
      optimizeNames(e, r) {
        if (!(this.lhs instanceof Su.Name && !e[this.lhs.str] && !this.sideEffects))
          return ((this.rhs = Ooe(this.rhs, e, r)), this);
      }
      get names() {
        let e = this.lhs instanceof Su.Name ? {} : { ...this.lhs.names };
        return Dze(e, this.rhs);
      }
    },
    SMt = class extends xze {
      constructor(e, r, n, o) {
        (super(e, n, o), (this.op = r));
      }
      render({ _n: e }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + e;
      }
    },
    wMt = class extends lk {
      constructor(e) {
        (super(), (this.label = e), (this.names = {}));
      }
      render({ _n: e }) {
        return `${this.label}:` + e;
      }
    },
    xMt = class extends lk {
      constructor(e) {
        (super(), (this.label = e), (this.names = {}));
      }
      render({ _n: e }) {
        return `break${this.label ? ` ${this.label}` : ""};` + e;
      }
    },
    TMt = class extends lk {
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
    DMt = class extends lk {
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
        return ((this.code = Ooe(this.code, e, r)), this);
      }
      get names() {
        return this.code instanceof Su._CodeOrName ? this.code.names : {};
      }
    },
    K5e = class extends lk {
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
          s.optimizeNames(e, r) || (vcs(e, s.names), n.splice(o, 1));
        }
        return n.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((e, r) => jH(e, r.names), {});
      }
    },
    mk = class extends K5e {
      render(e) {
        return "{" + e._n + super.render(e) + "}" + e._n;
      }
    },
    IMt = class extends K5e {},
    koe = class extends mk {};
  koe.kind = "else";
  var UH = class t extends mk {
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
        r = this.else = Array.isArray(n) ? new koe(n) : n;
      }
      if (r)
        return e === !1
          ? r instanceof t
            ? r
            : r.nodes
          : this.nodes.length
            ? this
            : new t(Yfn(e), r instanceof t ? [r] : r.nodes);
      if (!(e === !1 || !this.nodes.length)) return this;
    }
    optimizeNames(e, r) {
      var n;
      if (
        ((this.else = (n = this.else) === null || n === void 0 ? void 0 : n.optimizeNames(e, r)),
        !!(super.optimizeNames(e, r) || this.else))
      )
        return ((this.condition = Ooe(this.condition, e, r)), this);
    }
    get names() {
      let e = super.names;
      return (Dze(e, this.condition), this.else && jH(e, this.else.names), e);
    }
  };
  UH.kind = "if";
  var $H = class extends mk {};
  $H.kind = "for";
  var RMt = class extends $H {
      constructor(e) {
        (super(), (this.iteration = e));
      }
      render(e) {
        return `for(${this.iteration})` + super.render(e);
      }
      optimizeNames(e, r) {
        if (super.optimizeNames(e, r)) return ((this.iteration = Ooe(this.iteration, e, r)), this);
      }
      get names() {
        return jH(super.names, this.iteration.names);
      }
    },
    kMt = class extends $H {
      constructor(e, r, n, o) {
        (super(), (this.varKind = e), (this.name = r), (this.from = n), (this.to = o));
      }
      render(e) {
        let r = e.es5 ? D4.varKinds.var : this.varKind,
          { name: n, from: o, to: s } = this;
        return `for(${r} ${n}=${o}; ${n}<${s}; ${n}++)` + super.render(e);
      }
      get names() {
        let e = Dze(super.names, this.from);
        return Dze(e, this.to);
      }
    },
    Tze = class extends $H {
      constructor(e, r, n, o) {
        (super(), (this.loop = e), (this.varKind = r), (this.name = n), (this.iterable = o));
      }
      render(e) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(e);
      }
      optimizeNames(e, r) {
        if (super.optimizeNames(e, r)) return ((this.iterable = Ooe(this.iterable, e, r)), this);
      }
      get names() {
        return jH(super.names, this.iterable.names);
      }
    },
    J5e = class extends mk {
      constructor(e, r, n) {
        (super(), (this.name = e), (this.args = r), (this.async = n));
      }
      render(e) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(e);
      }
    };
  J5e.kind = "func";
  var X5e = class extends K5e {
    render(e) {
      return "return " + super.render(e);
    }
  };
  X5e.kind = "return";
  var OMt = class extends mk {
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
        return (this.catch && jH(e, this.catch.names), this.finally && jH(e, this.finally.names), e);
      }
    },
    Z5e = class extends mk {
      constructor(e) {
        (super(), (this.error = e));
      }
      render(e) {
        return `catch(${this.error})` + super.render(e);
      }
    };
  Z5e.kind = "catch";
  var e8e = class extends mk {
    render(e) {
      return "finally" + super.render(e);
    }
  };
  e8e.kind = "finally";
  var NMt = class {
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
        (this._scope = new D4.Scope({ parent: e })),
        (this._nodes = [new IMt()]));
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
      return (n !== void 0 && o && (this._constants[s.str] = n), this._leafNode(new CMt(e, s, n)), s);
    }
    const(e, r, n) {
      return this._def(D4.varKinds.const, e, r, n);
    }
    let(e, r, n) {
      return this._def(D4.varKinds.let, e, r, n);
    }
    var(e, r, n) {
      return this._def(D4.varKinds.var, e, r, n);
    }
    assign(e, r, n) {
      return this._leafNode(new xze(e, r, n));
    }
    add(e, r) {
      return this._leafNode(new SMt(e, Ua.operators.ADD, r));
    }
    code(e) {
      return (typeof e == "function" ? e() : e !== Su.nil && this._leafNode(new DMt(e)), this);
    }
    object(...e) {
      let r = ["{"];
      for (let [n, o] of e)
        (r.length > 1 && r.push(","), r.push(n), (n !== o || this.opts.es5) && (r.push(":"), (0, Su.addCodeArg)(r, o)));
      return (r.push("}"), new Su._Code(r));
    }
    if(e, r, n) {
      if ((this._blockNode(new UH(e)), r && n)) this.code(r).else().code(n).endIf();
      else if (r) this.code(r).endIf();
      else if (n) throw new Error('CodeGen: "else" body without "then" body');
      return this;
    }
    elseIf(e) {
      return this._elseNode(new UH(e));
    }
    else() {
      return this._elseNode(new koe());
    }
    endIf() {
      return this._endBlockNode(UH, koe);
    }
    _for(e, r) {
      return (this._blockNode(e), r && this.code(r).endFor(), this);
    }
    for(e, r) {
      return this._for(new RMt(e), r);
    }
    forRange(e, r, n, o, s = this.opts.es5 ? D4.varKinds.var : D4.varKinds.let) {
      let a = this._scope.toName(e);
      return this._for(new kMt(s, a, r, n), () => o(a));
    }
    forOf(e, r, n, o = D4.varKinds.const) {
      let s = this._scope.toName(e);
      if (this.opts.es5) {
        let a = r instanceof Su.Name ? r : this.var("_arr", r);
        return this.forRange("_i", 0, (0, Su._)`${a}.length`, (u) => {
          (this.var(s, (0, Su._)`${a}[${u}]`), n(s));
        });
      }
      return this._for(new Tze("of", o, s, r), () => n(s));
    }
    forIn(e, r, n, o = this.opts.es5 ? D4.varKinds.var : D4.varKinds.const) {
      if (this.opts.ownProperties) return this.forOf(e, (0, Su._)`Object.keys(${r})`, n);
      let s = this._scope.toName(e);
      return this._for(new Tze("in", o, s, r), () => n(s));
    }
    endFor() {
      return this._endBlockNode($H);
    }
    label(e) {
      return this._leafNode(new wMt(e));
    }
    break(e) {
      return this._leafNode(new xMt(e));
    }
    return(e) {
      let r = new X5e();
      if ((this._blockNode(r), this.code(e), r.nodes.length !== 1))
        throw new Error('CodeGen: "return" should have one node');
      return this._endBlockNode(X5e);
    }
    try(e, r, n) {
      if (!r && !n) throw new Error('CodeGen: "try" without "catch" and "finally"');
      let o = new OMt();
      if ((this._blockNode(o), this.code(e), r)) {
        let s = this.name("e");
        ((this._currNode = o.catch = new Z5e(s)), r(s));
      }
      return (n && ((this._currNode = o.finally = new e8e()), this.code(n)), this._endBlockNode(Z5e, e8e));
    }
    throw(e) {
      return this._leafNode(new TMt(e));
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
    func(e, r = Su.nil, n, o) {
      return (this._blockNode(new J5e(e, r, n)), o && this.code(o).endFunc(), this);
    }
    endFunc() {
      return this._endBlockNode(J5e);
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
      if (!(r instanceof UH)) throw new Error('CodeGen: "else" without "if"');
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
  Ua.CodeGen = NMt;
  function jH(t, e) {
    for (let r in e) t[r] = (t[r] || 0) + (e[r] || 0);
    return t;
  }
  function Dze(t, e) {
    return e instanceof Su._CodeOrName ? jH(t, e.names) : t;
  }
  function Ooe(t, e, r) {
    if (t instanceof Su.Name) return n(t);
    if (!o(t)) return t;
    return new Su._Code(
      t._items.reduce(
        (s, a) => (a instanceof Su.Name && (a = n(a)), a instanceof Su._Code ? s.push(...a._items) : s.push(a), s),
        [],
      ),
    );
    function n(s) {
      let a = r[s.str];
      return a === void 0 || e[s.str] !== 1 ? s : (delete e[s.str], a);
    }
    function o(s) {
      return (
        s instanceof Su._Code && s._items.some((a) => a instanceof Su.Name && e[a.str] === 1 && r[a.str] !== void 0)
      );
    }
  }
  function vcs(t, e) {
    for (let r in e) t[r] = (t[r] || 0) - (e[r] || 0);
  }
  function Yfn(t) {
    return typeof t == "boolean" || typeof t == "number" || t === null ? !t : (0, Su._)`!${PMt(t)}`;
  }
  Ua.not = Yfn;
  var Ccs = Kfn(Ua.operators.AND);
  function Scs(...t) {
    return t.reduce(Ccs);
  }
  Ua.and = Scs;
  var wcs = Kfn(Ua.operators.OR);
  function xcs(...t) {
    return t.reduce(wcs);
  }
  Ua.or = xcs;
  function Kfn(t) {
    return (e, r) => (e === Su.nil ? r : r === Su.nil ? e : (0, Su._)`${PMt(e)} ${t} ${PMt(r)}`);
  }
  function PMt(t) {
    return t instanceof Su.Name ? t : (0, Su._)`(${t})`;
  }
});