/**
 * @module _a
 * @category unknown
 * @label unknown
 * @position 798 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_a) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _a = T(($a) => {
  "use strict";
  Object.defineProperty($a, "__esModule", { value: !0 });
  $a.or =
    $a.and =
    $a.not =
    $a.CodeGen =
    $a.operators =
    $a.varKinds =
    $a.ValueScopeName =
    $a.ValueScope =
    $a.Scope =
    $a.Name =
    $a.regexpCode =
    $a.stringify =
    $a.getProperty =
    $a.nil =
    $a.strConcat =
    $a.str =
    $a._ =
      void 0;
  var wu = C8e(),
    O4 = lUt(),
    yM = C8e();
  Object.defineProperty($a, "_", {
    enumerable: !0,
    get: function () {
      return yM._;
    },
  });
  Object.defineProperty($a, "str", {
    enumerable: !0,
    get: function () {
      return yM.str;
    },
  });
  Object.defineProperty($a, "strConcat", {
    enumerable: !0,
    get: function () {
      return yM.strConcat;
    },
  });
  Object.defineProperty($a, "nil", {
    enumerable: !0,
    get: function () {
      return yM.nil;
    },
  });
  Object.defineProperty($a, "getProperty", {
    enumerable: !0,
    get: function () {
      return yM.getProperty;
    },
  });
  Object.defineProperty($a, "stringify", {
    enumerable: !0,
    get: function () {
      return yM.stringify;
    },
  });
  Object.defineProperty($a, "regexpCode", {
    enumerable: !0,
    get: function () {
      return yM.regexpCode;
    },
  });
  Object.defineProperty($a, "Name", {
    enumerable: !0,
    get: function () {
      return yM.Name;
    },
  });
  var mYe = lUt();
  Object.defineProperty($a, "Scope", {
    enumerable: !0,
    get: function () {
      return mYe.Scope;
    },
  });
  Object.defineProperty($a, "ValueScope", {
    enumerable: !0,
    get: function () {
      return mYe.ValueScope;
    },
  });
  Object.defineProperty($a, "ValueScopeName", {
    enumerable: !0,
    get: function () {
      return mYe.ValueScopeName;
    },
  });
  Object.defineProperty($a, "varKinds", {
    enumerable: !0,
    get: function () {
      return mYe.varKinds;
    },
  });
  $a.operators = {
    GT: new wu._Code(">"),
    GTE: new wu._Code(">="),
    LT: new wu._Code("<"),
    LTE: new wu._Code("<="),
    EQ: new wu._Code("==="),
    NEQ: new wu._Code("!=="),
    NOT: new wu._Code("!"),
    OR: new wu._Code("||"),
    AND: new wu._Code("&&"),
    ADD: new wu._Code("+"),
  };
  var hk = class {
      optimizeNodes() {
        return this;
      }
      optimizeNames(e, r) {
        return this;
      }
    },
    mUt = class extends hk {
      constructor(e, r, n) {
        (super(), (this.varKind = e), (this.name = r), (this.rhs = n));
      }
      render({ es5: e, _n: r }) {
        let n = e ? O4.varKinds.var : this.varKind,
          o = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${n} ${this.name}${o};` + r;
      }
      optimizeNames(e, r) {
        if (e[this.name.str]) return (this.rhs && (this.rhs = Voe(this.rhs, e, r)), this);
      }
      get names() {
        return this.rhs instanceof wu._CodeOrName ? this.rhs.names : {};
      }
    },
    uYe = class extends hk {
      constructor(e, r, n) {
        (super(), (this.lhs = e), (this.rhs = r), (this.sideEffects = n));
      }
      render({ _n: e }) {
        return `${this.lhs} = ${this.rhs};` + e;
      }
      optimizeNames(e, r) {
        if (!(this.lhs instanceof wu.Name && !e[this.lhs.str] && !this.sideEffects))
          return ((this.rhs = Voe(this.rhs, e, r)), this);
      }
      get names() {
        let e = this.lhs instanceof wu.Name ? {} : { ...this.lhs.names };
        return lYe(e, this.rhs);
      }
    },
    dUt = class extends uYe {
      constructor(e, r, n, o) {
        (super(e, n, o), (this.op = r));
      }
      render({ _n: e }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + e;
      }
    },
    fUt = class extends hk {
      constructor(e) {
        (super(), (this.label = e), (this.names = {}));
      }
      render({ _n: e }) {
        return `${this.label}:` + e;
      }
    },
    pUt = class extends hk {
      constructor(e) {
        (super(), (this.label = e), (this.names = {}));
      }
      render({ _n: e }) {
        return `break${this.label ? ` ${this.label}` : ""};` + e;
      }
    },
    hUt = class extends hk {
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
    gUt = class extends hk {
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
        return ((this.code = Voe(this.code, e, r)), this);
      }
      get names() {
        return this.code instanceof wu._CodeOrName ? this.code.names : {};
      }
    },
    S8e = class extends hk {
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
          s.optimizeNames(e, r) || (sfs(e, s.names), n.splice(o, 1));
        }
        return n.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((e, r) => XH(e, r.names), {});
      }
    },
    gk = class extends S8e {
      render(e) {
        return "{" + e._n + super.render(e) + "}" + e._n;
      }
    },
    bUt = class extends S8e {},
    Hoe = class extends gk {};
  Hoe.kind = "else";
  var KH = class t extends gk {
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
        r = this.else = Array.isArray(n) ? new Hoe(n) : n;
      }
      if (r)
        return e === !1
          ? r instanceof t
            ? r
            : r.nodes
          : this.nodes.length
            ? this
            : new t(I3n(e), r instanceof t ? [r] : r.nodes);
      if (!(e === !1 || !this.nodes.length)) return this;
    }
    optimizeNames(e, r) {
      var n;
      if (
        ((this.else = (n = this.else) === null || n === void 0 ? void 0 : n.optimizeNames(e, r)),
        !!(super.optimizeNames(e, r) || this.else))
      )
        return ((this.condition = Voe(this.condition, e, r)), this);
    }
    get names() {
      let e = super.names;
      return (lYe(e, this.condition), this.else && XH(e, this.else.names), e);
    }
  };
  KH.kind = "if";
  var JH = class extends gk {};
  JH.kind = "for";
  var AUt = class extends JH {
      constructor(e) {
        (super(), (this.iteration = e));
      }
      render(e) {
        return `for(${this.iteration})` + super.render(e);
      }
      optimizeNames(e, r) {
        if (super.optimizeNames(e, r)) return ((this.iteration = Voe(this.iteration, e, r)), this);
      }
      get names() {
        return XH(super.names, this.iteration.names);
      }
    },
    yUt = class extends JH {
      constructor(e, r, n, o) {
        (super(), (this.varKind = e), (this.name = r), (this.from = n), (this.to = o));
      }
      render(e) {
        let r = e.es5 ? O4.varKinds.var : this.varKind,
          { name: n, from: o, to: s } = this;
        return `for(${r} ${n}=${o}; ${n}<${s}; ${n}++)` + super.render(e);
      }
      get names() {
        let e = lYe(super.names, this.from);
        return lYe(e, this.to);
      }
    },
    cYe = class extends JH {
      constructor(e, r, n, o) {
        (super(), (this.loop = e), (this.varKind = r), (this.name = n), (this.iterable = o));
      }
      render(e) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(e);
      }
      optimizeNames(e, r) {
        if (super.optimizeNames(e, r)) return ((this.iterable = Voe(this.iterable, e, r)), this);
      }
      get names() {
        return XH(super.names, this.iterable.names);
      }
    },
    w8e = class extends gk {
      constructor(e, r, n) {
        (super(), (this.name = e), (this.args = r), (this.async = n));
      }
      render(e) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(e);
      }
    };
  w8e.kind = "func";
  var x8e = class extends S8e {
    render(e) {
      return "return " + super.render(e);
    }
  };
  x8e.kind = "return";
  var _Ut = class extends gk {
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
        return (this.catch && XH(e, this.catch.names), this.finally && XH(e, this.finally.names), e);
      }
    },
    T8e = class extends gk {
      constructor(e) {
        (super(), (this.error = e));
      }
      render(e) {
        return `catch(${this.error})` + super.render(e);
      }
    };
  T8e.kind = "catch";
  var D8e = class extends gk {
    render(e) {
      return "finally" + super.render(e);
    }
  };
  D8e.kind = "finally";
  var EUt = class {
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
        (this._scope = new O4.Scope({ parent: e })),
        (this._nodes = [new bUt()]));
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
      return (n !== void 0 && o && (this._constants[s.str] = n), this._leafNode(new mUt(e, s, n)), s);
    }
    const(e, r, n) {
      return this._def(O4.varKinds.const, e, r, n);
    }
    let(e, r, n) {
      return this._def(O4.varKinds.let, e, r, n);
    }
    var(e, r, n) {
      return this._def(O4.varKinds.var, e, r, n);
    }
    assign(e, r, n) {
      return this._leafNode(new uYe(e, r, n));
    }
    add(e, r) {
      return this._leafNode(new dUt(e, $a.operators.ADD, r));
    }
    code(e) {
      return (typeof e == "function" ? e() : e !== wu.nil && this._leafNode(new gUt(e)), this);
    }
    object(...e) {
      let r = ["{"];
      for (let [n, o] of e)
        (r.length > 1 && r.push(","), r.push(n), (n !== o || this.opts.es5) && (r.push(":"), (0, wu.addCodeArg)(r, o)));
      return (r.push("}"), new wu._Code(r));
    }
    if(e, r, n) {
      if ((this._blockNode(new KH(e)), r && n)) this.code(r).else().code(n).endIf();
      else if (r) this.code(r).endIf();
      else if (n) throw new Error('CodeGen: "else" body without "then" body');
      return this;
    }
    elseIf(e) {
      return this._elseNode(new KH(e));
    }
    else() {
      return this._elseNode(new Hoe());
    }
    endIf() {
      return this._endBlockNode(KH, Hoe);
    }
    _for(e, r) {
      return (this._blockNode(e), r && this.code(r).endFor(), this);
    }
    for(e, r) {
      return this._for(new AUt(e), r);
    }
    forRange(e, r, n, o, s = this.opts.es5 ? O4.varKinds.var : O4.varKinds.let) {
      let a = this._scope.toName(e);
      return this._for(new yUt(s, a, r, n), () => o(a));
    }
    forOf(e, r, n, o = O4.varKinds.const) {
      let s = this._scope.toName(e);
      if (this.opts.es5) {
        let a = r instanceof wu.Name ? r : this.var("_arr", r);
        return this.forRange("_i", 0, (0, wu._)`${a}.length`, (u) => {
          (this.var(s, (0, wu._)`${a}[${u}]`), n(s));
        });
      }
      return this._for(new cYe("of", o, s, r), () => n(s));
    }
    forIn(e, r, n, o = this.opts.es5 ? O4.varKinds.var : O4.varKinds.const) {
      if (this.opts.ownProperties) return this.forOf(e, (0, wu._)`Object.keys(${r})`, n);
      let s = this._scope.toName(e);
      return this._for(new cYe("in", o, s, r), () => n(s));
    }
    endFor() {
      return this._endBlockNode(JH);
    }
    label(e) {
      return this._leafNode(new fUt(e));
    }
    break(e) {
      return this._leafNode(new pUt(e));
    }
    return(e) {
      let r = new x8e();
      if ((this._blockNode(r), this.code(e), r.nodes.length !== 1))
        throw new Error('CodeGen: "return" should have one node');
      return this._endBlockNode(x8e);
    }
    try(e, r, n) {
      if (!r && !n) throw new Error('CodeGen: "try" without "catch" and "finally"');
      let o = new _Ut();
      if ((this._blockNode(o), this.code(e), r)) {
        let s = this.name("e");
        ((this._currNode = o.catch = new T8e(s)), r(s));
      }
      return (n && ((this._currNode = o.finally = new D8e()), this.code(n)), this._endBlockNode(T8e, D8e));
    }
    throw(e) {
      return this._leafNode(new hUt(e));
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
    func(e, r = wu.nil, n, o) {
      return (this._blockNode(new w8e(e, r, n)), o && this.code(o).endFunc(), this);
    }
    endFunc() {
      return this._endBlockNode(w8e);
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
      if (!(r instanceof KH)) throw new Error('CodeGen: "else" without "if"');
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
  $a.CodeGen = EUt;
  function XH(t, e) {
    for (let r in e) t[r] = (t[r] || 0) + (e[r] || 0);
    return t;
  }
  function lYe(t, e) {
    return e instanceof wu._CodeOrName ? XH(t, e.names) : t;
  }
  function Voe(t, e, r) {
    if (t instanceof wu.Name) return n(t);
    if (!o(t)) return t;
    return new wu._Code(
      t._items.reduce(
        (s, a) => (a instanceof wu.Name && (a = n(a)), a instanceof wu._Code ? s.push(...a._items) : s.push(a), s),
        [],
      ),
    );
    function n(s) {
      let a = r[s.str];
      return a === void 0 || e[s.str] !== 1 ? s : (delete e[s.str], a);
    }
    function o(s) {
      return (
        s instanceof wu._Code && s._items.some((a) => a instanceof wu.Name && e[a.str] === 1 && r[a.str] !== void 0)
      );
    }
  }
  function sfs(t, e) {
    for (let r in e) t[r] = (t[r] || 0) - (e[r] || 0);
  }
  function I3n(t) {
    return typeof t == "boolean" || typeof t == "number" || t === null ? !t : (0, wu._)`!${vUt(t)}`;
  }
  $a.not = I3n;
  var afs = R3n($a.operators.AND);
  function ufs(...t) {
    return t.reduce(afs);
  }
  $a.and = ufs;
  var cfs = R3n($a.operators.OR);
  function lfs(...t) {
    return t.reduce(cfs);
  }
  $a.or = lfs;
  function R3n(t) {
    return (e, r) => (e === wu.nil ? r : r === wu.nil ? e : (0, wu._)`${vUt(e)} ${t} ${vUt(r)}`);
  }
  function vUt(t) {
    return t instanceof wu.Name ? t : (0, wu._)`(${t})`;
  }
});