/**
 * @module vUi
 * @category app/auth
 * @label iflow-auth
 * @position 1857 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vUi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vUi = T((sol, EUi) => {
  "use strict";
  var qFi = Ae("assert"),
    x3 = class t extends Error {
      constructor(e) {
        (super(e || "yargs error"),
          (this.name = "YError"),
          Error.captureStackTrace && Error.captureStackTrace(this, t));
      }
    },
    uTe,
    Z8r = [];
  function u3t(t, e, r, n) {
    uTe = n;
    let o = {};
    if (Object.prototype.hasOwnProperty.call(t, "extends")) {
      if (typeof t.extends != "string") return o;
      let s = /\.json|\..*rc$/.test(t.extends),
        a = null;
      if (s)
        a = (function (u, c) {
          return uTe.path.resolve(u, c);
        })(e, t.extends);
      else
        try {
          a = Ae.resolve(t.extends);
        } catch {
          return t;
        }
      ((function (u) {
        if (Z8r.indexOf(u) > -1) throw new x3(`Circular extended configurations: '${u}'.`);
      })(a),
        Z8r.push(a),
        (o = s ? JSON.parse(uTe.readFileSync(a, "utf8")) : Ae(t.extends)),
        delete t.extends,
        (o = u3t(o, uTe.path.dirname(a), r, uTe)));
    }
    return ((Z8r = []), r ? AUi(o, t) : Object.assign({}, o, t));
  }
  function AUi(t, e) {
    let r = {};
    function n(o) {
      return o && typeof o == "object" && !Array.isArray(o);
    }
    Object.assign(r, t);
    for (let o of Object.keys(e)) n(e[o]) && n(r[o]) ? (r[o] = AUi(t[o], e[o])) : (r[o] = e[o]);
    return r;
  }
  function y1e(t) {
    let e = t.replace(/\s{2,}/g, " ").split(/\s+(?![^[]*]|[^<]*>)/),
      r = /\.*[\][<>]/g,
      n = e.shift();
    if (!n) throw new Error(`No command found in: ${t}`);
    let o = { cmd: n.replace(r, ""), demanded: [], optional: [] };
    return (
      e.forEach((s, a) => {
        let u = !1;
        ((s = s.replace(/\s/g, "")),
          /\.+[\]>]/.test(s) && a === e.length - 1 && (u = !0),
          /^\[/.test(s)
            ? o.optional.push({ cmd: s.replace(r, "").split("|"), variadic: u })
            : o.demanded.push({ cmd: s.replace(r, "").split("|"), variadic: u }));
      }),
      o
    );
  }
  var niu = ["first", "second", "third", "fourth", "fifth", "sixth"];
  function ki(t, e, r) {
    try {
      let n = 0,
        [o, s, a] = typeof t == "object" ? [{ demanded: [], optional: [] }, t, e] : [y1e(`cmd ${t}`), e, r],
        u = [].slice.call(s);
      for (; u.length && u[u.length - 1] === void 0; ) u.pop();
      let c = a || u.length;
      if (c < o.demanded.length)
        throw new x3(`Not enough arguments provided. Expected ${o.demanded.length} but received ${u.length}.`);
      let m = o.demanded.length + o.optional.length;
      if (c > m) throw new x3(`Too many arguments provided. Expected max ${m} but received ${c}.`);
      (o.demanded.forEach((d) => {
        let f = HFi(u.shift());
        (d.cmd.filter((p) => p === f || p === "*").length === 0 && VFi(f, d.cmd, n), (n += 1));
      }),
        o.optional.forEach((d) => {
          if (u.length === 0) return;
          let f = HFi(u.shift());
          (d.cmd.filter((p) => p === f || p === "*").length === 0 && VFi(f, d.cmd, n), (n += 1));
        }));
    } catch (n) {
      console.warn(n.stack);
    }
  }
  function HFi(t) {
    return Array.isArray(t) ? "array" : t === null ? "null" : typeof t;
  }
  function VFi(t, e, r) {
    throw new x3(`Invalid ${niu[r] || "manyith"} argument. Expected ${e.join(" or ")} but received ${t}.`);
  }
  function pf(t) {
    return !!t && !!t.then && typeof t.then == "function";
  }
  function sw(t, e, r, n) {
    r.assert.notStrictEqual(t, e, n);
  }
  function WFi(t, e) {
    e.assert.strictEqual(typeof t, "string");
  }
  function a3t(t) {
    return Object.keys(t);
  }
  function A1e(t = {}, e = () => !0) {
    let r = {};
    return (
      a3t(t).forEach((n) => {
        e(n, t[n]) && (r[n] = t[n]);
      }),
      r
    );
  }
  function yUi() {
    return process.versions.electron && !process.defaultApp ? 0 : 1;
  }
  function _Ui() {
    return process.argv[yUi()];
  }
  var iiu = Object.freeze({
    __proto__: null,
    hideBin: function (t) {
      return t.slice(yUi() + 1);
    },
    getProcessArgvBin: _Ui,
  });
  function at(t, e, r, n) {
    if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
    if (typeof e == "function" ? t !== e || !n : !e.has(t))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
  }
  function xi(t, e, r, n, o) {
    if (n === "m") throw new TypeError("Private method is not writable");
    if (n === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
    if (typeof e == "function" ? t !== e || !o : !e.has(t))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (n === "a" ? o.call(t, r) : o ? (o.value = r) : e.set(t, r), r);
  }
  var p9r = class {
    constructor(e) {
      ((this.globalMiddleware = []), (this.frozens = []), (this.yargs = e));
    }
    addMiddleware(e, r, n = !0, o = !1) {
      if ((ki("<array|function> [boolean] [boolean] [boolean]", [e, r, n], arguments.length), Array.isArray(e))) {
        for (let s = 0; s < e.length; s++) {
          if (typeof e[s] != "function") throw Error("middleware must be a function");
          let a = e[s];
          ((a.applyBeforeValidation = r), (a.global = n));
        }
        Array.prototype.push.apply(this.globalMiddleware, e);
      } else if (typeof e == "function") {
        let s = e;
        ((s.applyBeforeValidation = r), (s.global = n), (s.mutates = o), this.globalMiddleware.push(e));
      }
      return this.yargs;
    }
    addCoerceMiddleware(e, r) {
      let n = this.yargs.getAliases();
      return (
        (this.globalMiddleware = this.globalMiddleware.filter((o) => {
          let s = [...(n[r] || []), r];
          return !o.option || !s.includes(o.option);
        })),
        (e.option = r),
        this.addMiddleware(e, !0, !0, !0)
      );
    }
    getMiddleware() {
      return this.globalMiddleware;
    }
    freeze() {
      this.frozens.push([...this.globalMiddleware]);
    }
    unfreeze() {
      let e = this.frozens.pop();
      e !== void 0 && (this.globalMiddleware = e);
    }
    reset() {
      this.globalMiddleware = this.globalMiddleware.filter((e) => e.global);
    }
  };
  function dTe(t, e, r, n) {
    return r.reduce((o, s) => {
      if (s.applyBeforeValidation !== n) return o;
      if (s.mutates) {
        if (s.applied) return o;
        s.applied = !0;
      }
      if (pf(o)) return o.then((a) => Promise.all([a, s(a, e)])).then(([a, u]) => Object.assign(a, u));
      {
        let a = s(o, e);
        return pf(a) ? a.then((u) => Object.assign(o, u)) : Object.assign(o, a);
      }
    }, t);
  }
  function fTe(
    t,
    e,
    r = (n) => {
      throw n;
    },
  ) {
    try {
      let n = typeof t == "function" ? t() : t;
      return pf(n) ? n.then((o) => e(o)) : e(n);
    } catch (n) {
      return r(n);
    }
  }
  var p1e = /(^\*)|(^\$0)/,
    h9r = class {
      constructor(e, r, n, o) {
        ((this.requireCache = new Set()),
          (this.handlers = {}),
          (this.aliasMap = {}),
          (this.frozens = []),
          (this.shim = o),
          (this.usage = e),
          (this.globalMiddleware = n),
          (this.validation = r));
      }
      addDirectory(e, r, n, o) {
        (typeof (o = o || {}).recurse != "boolean" && (o.recurse = !1),
          Array.isArray(o.extensions) || (o.extensions = ["js"]));
        let s = typeof o.visit == "function" ? o.visit : (a) => a;
        ((o.visit = (a, u, c) => {
          let m = s(a, u, c);
          if (m) {
            if (this.requireCache.has(u)) return m;
            (this.requireCache.add(u), this.addHandler(m));
          }
          return m;
        }),
          this.shim.requireDirectory({ require: r, filename: n }, e, o));
      }
      addHandler(e, r, n, o, s, a) {
        let u = [],
          c = (function (m) {
            return m ? m.map((d) => ((d.applyBeforeValidation = !1), d)) : [];
          })(s);
        if (((o = o || (() => {})), Array.isArray(e)))
          if (
            (function (m) {
              return m.every((d) => typeof d == "string");
            })(e)
          )
            [e, ...u] = e;
          else for (let m of e) this.addHandler(m);
        else {
          if (
            (function (m) {
              return typeof m == "object" && !Array.isArray(m);
            })(e)
          ) {
            let m = Array.isArray(e.command) || typeof e.command == "string" ? e.command : this.moduleName(e);
            return (
              e.aliases && (m = [].concat(m).concat(e.aliases)),
              void this.addHandler(m, this.extractDesc(e), e.builder, e.handler, e.middlewares, e.deprecated)
            );
          }
          if (zFi(n)) return void this.addHandler([e].concat(u), r, n.builder, n.handler, n.middlewares, n.deprecated);
        }
        if (typeof e == "string") {
          let m = y1e(e);
          u = u.map((p) => y1e(p).cmd);
          let d = !1,
            f = [m.cmd].concat(u).filter((p) => !p1e.test(p) || ((d = !0), !1));
          (f.length === 0 && d && f.push("$0"),
            d && ((m.cmd = f[0]), (u = f.slice(1)), (e = e.replace(p1e, m.cmd))),
            u.forEach((p) => {
              this.aliasMap[p] = m.cmd;
            }),
            r !== !1 && this.usage.command(e, r, d, u, a),
            (this.handlers[m.cmd] = {
              original: e,
              description: r,
              handler: o,
              builder: n || {},
              middlewares: c,
              deprecated: a,
              demanded: m.demanded,
              optional: m.optional,
            }),
            d && (this.defaultCommand = this.handlers[m.cmd]));
        }
      }
      getCommandHandlers() {
        return this.handlers;
      }
      getCommands() {
        return Object.keys(this.handlers).concat(Object.keys(this.aliasMap));
      }
      hasDefaultCommand() {
        return !!this.defaultCommand;
      }
      runCommand(e, r, n, o, s, a) {
        let u = this.handlers[e] || this.handlers[this.aliasMap[e]] || this.defaultCommand,
          c = r.getInternalMethods().getContext(),
          m = c.commands.slice(),
          d = !e;
        e && (c.commands.push(e), c.fullCommands.push(u.original));
        let f = this.applyBuilderUpdateUsageAndParse(d, u, r, n.aliases, m, o, s, a);
        return pf(f)
          ? f.then((p) => this.applyMiddlewareAndGetResult(d, u, p.innerArgv, c, s, p.aliases, r))
          : this.applyMiddlewareAndGetResult(d, u, f.innerArgv, c, s, f.aliases, r);
      }
      applyBuilderUpdateUsageAndParse(e, r, n, o, s, a, u, c) {
        let m = r.builder,
          d = n;
        if (g9r(m)) {
          n.getInternalMethods().getUsageInstance().freeze();
          let f = m(n.getInternalMethods().reset(o), c);
          if (pf(f))
            return f.then((p) => {
              var h;
              return (
                (d = (h = p) && typeof h.getInternalMethods == "function" ? p : n),
                this.parseAndUpdateUsage(e, r, d, s, a, u)
              );
            });
        } else
          (function (f) {
            return typeof f == "object";
          })(m) &&
            (n.getInternalMethods().getUsageInstance().freeze(),
            (d = n.getInternalMethods().reset(o)),
            Object.keys(r.builder).forEach((f) => {
              d.option(f, m[f]);
            }));
        return this.parseAndUpdateUsage(e, r, d, s, a, u);
      }
      parseAndUpdateUsage(e, r, n, o, s, a) {
        (e && n.getInternalMethods().getUsageInstance().unfreeze(!0),
          this.shouldUpdateUsage(n) &&
            n
              .getInternalMethods()
              .getUsageInstance()
              .usage(this.usageFromParentCommandsCommandHandler(o, r), r.description));
        let u = n.getInternalMethods().runYargsParserAndExecuteCommands(null, void 0, !0, s, a);
        return pf(u)
          ? u.then((c) => ({ aliases: n.parsed.aliases, innerArgv: c }))
          : { aliases: n.parsed.aliases, innerArgv: u };
      }
      shouldUpdateUsage(e) {
        return (
          !e.getInternalMethods().getUsageInstance().getUsageDisabled() &&
          e.getInternalMethods().getUsageInstance().getUsage().length === 0
        );
      }
      usageFromParentCommandsCommandHandler(e, r) {
        let n = p1e.test(r.original) ? r.original.replace(p1e, "").trim() : r.original,
          o = e.filter((s) => !p1e.test(s));
        return (o.push(n), `$0 ${o.join(" ")}`);
      }
      handleValidationAndGetResult(e, r, n, o, s, a, u, c) {
        if (!a.getInternalMethods().getHasOutput()) {
          let m = a.getInternalMethods().runValidation(s, c, a.parsed.error, e);
          n = fTe(n, (d) => (m(d), d));
        }
        if (r.handler && !a.getInternalMethods().getHasOutput()) {
          a.getInternalMethods().setHasOutput();
          let m = !!a.getOptions().configuration["populate--"];
          (a.getInternalMethods().postProcess(n, m, !1, !1),
            (n = fTe((n = dTe(n, a, u, !1)), (d) => {
              let f = r.handler(d);
              return pf(f) ? f.then(() => d) : d;
            })),
            e || a.getInternalMethods().getUsageInstance().cacheHelpMessage(),
            pf(n) &&
              !a.getInternalMethods().hasParseCallback() &&
              n.catch((d) => {
                try {
                  a.getInternalMethods().getUsageInstance().fail(null, d);
                } catch {}
              }));
        }
        return (e || (o.commands.pop(), o.fullCommands.pop()), n);
      }
      applyMiddlewareAndGetResult(e, r, n, o, s, a, u) {
        let c = {};
        if (s) return n;
        u.getInternalMethods().getHasOutput() || (c = this.populatePositionals(r, n, o, u));
        let m = this.globalMiddleware.getMiddleware().slice(0).concat(r.middlewares),
          d = dTe(n, u, m, !0);
        return pf(d)
          ? d.then((f) => this.handleValidationAndGetResult(e, r, f, o, a, u, m, c))
          : this.handleValidationAndGetResult(e, r, d, o, a, u, m, c);
      }
      populatePositionals(e, r, n, o) {
        r._ = r._.slice(n.commands.length);
        let s = e.demanded.slice(0),
          a = e.optional.slice(0),
          u = {};
        for (this.validation.positionalCount(s.length, r._.length); s.length; ) {
          let c = s.shift();
          this.populatePositional(c, r, u);
        }
        for (; a.length; ) {
          let c = a.shift();
          this.populatePositional(c, r, u);
        }
        return (
          (r._ = n.commands.concat(r._.map((c) => "" + c))),
          this.postProcessPositionals(r, u, this.cmdToParseOptions(e.original), o),
          u
        );
      }
      populatePositional(e, r, n) {
        let o = e.cmd[0];
        e.variadic ? (n[o] = r._.splice(0).map(String)) : r._.length && (n[o] = [String(r._.shift())]);
      }
      cmdToParseOptions(e) {
        let r = { array: [], default: {}, alias: {}, demand: {} },
          n = y1e(e);
        return (
          n.demanded.forEach((o) => {
            let [s, ...a] = o.cmd;
            (o.variadic && (r.array.push(s), (r.default[s] = [])), (r.alias[s] = a), (r.demand[s] = !0));
          }),
          n.optional.forEach((o) => {
            let [s, ...a] = o.cmd;
            (o.variadic && (r.array.push(s), (r.default[s] = [])), (r.alias[s] = a));
          }),
          r
        );
      }
      postProcessPositionals(e, r, n, o) {
        let s = Object.assign({}, o.getOptions());
        s.default = Object.assign(n.default, s.default);
        for (let m of Object.keys(n.alias)) s.alias[m] = (s.alias[m] || []).concat(n.alias[m]);
        ((s.array = s.array.concat(n.array)), (s.config = {}));
        let a = [];
        if (
          (Object.keys(r).forEach((m) => {
            r[m].map((d) => {
              (s.configuration["unknown-options-as-args"] && (s.key[m] = !0), a.push(`--${m}`), a.push(d));
            });
          }),
          !a.length)
        )
          return;
        let u = Object.assign({}, s.configuration, { "populate--": !1 }),
          c = this.shim.Parser.detailed(a, Object.assign({}, s, { configuration: u }));
        if (c.error) o.getInternalMethods().getUsageInstance().fail(c.error.message, c.error);
        else {
          let m = Object.keys(r);
          (Object.keys(r).forEach((d) => {
            m.push(...c.aliases[d]);
          }),
            Object.keys(c.argv).forEach((d) => {
              m.includes(d) &&
                (r[d] || (r[d] = c.argv[d]),
                !this.isInConfigs(o, d) &&
                !this.isDefaulted(o, d) &&
                Object.prototype.hasOwnProperty.call(e, d) &&
                Object.prototype.hasOwnProperty.call(c.argv, d) &&
                (Array.isArray(e[d]) || Array.isArray(c.argv[d]))
                  ? (e[d] = [].concat(e[d], c.argv[d]))
                  : (e[d] = c.argv[d]));
            }));
        }
      }
      isDefaulted(e, r) {
        let { default: n } = e.getOptions();
        return (
          Object.prototype.hasOwnProperty.call(n, r) ||
          Object.prototype.hasOwnProperty.call(n, this.shim.Parser.camelCase(r))
        );
      }
      isInConfigs(e, r) {
        let { configObjects: n } = e.getOptions();
        return (
          n.some((o) => Object.prototype.hasOwnProperty.call(o, r)) ||
          n.some((o) => Object.prototype.hasOwnProperty.call(o, this.shim.Parser.camelCase(r)))
        );
      }
      runDefaultBuilderOn(e) {
        if (!this.defaultCommand) return;
        if (this.shouldUpdateUsage(e)) {
          let n = p1e.test(this.defaultCommand.original)
            ? this.defaultCommand.original
            : this.defaultCommand.original.replace(/^[^[\]<>]*/, "$0 ");
          e.getInternalMethods().getUsageInstance().usage(n, this.defaultCommand.description);
        }
        let r = this.defaultCommand.builder;
        if (g9r(r)) return r(e, !0);
        zFi(r) ||
          Object.keys(r).forEach((n) => {
            e.option(n, r[n]);
          });
      }
      moduleName(e) {
        let r = (function (n) {
          if (typeof Ae > "u") return null;
          for (let o, s = 0, a = Object.keys(Ae.cache); s < a.length; s++)
            if (((o = Ae.cache[a[s]]), o.exports === n)) return o;
          return null;
        })(e);
        if (!r) throw new Error(`No command name given for module: ${this.shim.inspect(e)}`);
        return this.commandFromFilename(r.filename);
      }
      commandFromFilename(e) {
        return this.shim.path.basename(e, this.shim.path.extname(e));
      }
      extractDesc({ describe: e, description: r, desc: n }) {
        for (let o of [e, r, n]) {
          if (typeof o == "string" || o === !1) return o;
          sw(o, !0, this.shim);
        }
        return !1;
      }
      freeze() {
        this.frozens.push({ handlers: this.handlers, aliasMap: this.aliasMap, defaultCommand: this.defaultCommand });
      }
      unfreeze() {
        let e = this.frozens.pop();
        (sw(e, void 0, this.shim),
          ({ handlers: this.handlers, aliasMap: this.aliasMap, defaultCommand: this.defaultCommand } = e));
      }
      reset() {
        return (
          (this.handlers = {}),
          (this.aliasMap = {}),
          (this.defaultCommand = void 0),
          (this.requireCache = new Set()),
          this
        );
      }
    };
  function zFi(t) {
    return typeof t == "object" && !!t.builder && typeof t.handler == "function";
  }
  function g9r(t) {
    return typeof t == "function";
  }
  function mTe(t) {
    typeof process < "u" &&
      [process.stdout, process.stderr].forEach((e) => {
        let r = e;
        r._handle && r.isTTY && typeof r._handle.setBlocking == "function" && r._handle.setBlocking(t);
      });
  }
  function oiu(t) {
    return typeof t == "boolean";
  }
  function siu(t, e) {
    let r = e.y18n.__,
      n = {},
      o = [];
    n.failFn = function (P) {
      o.push(P);
    };
    let s = null,
      a = null,
      u = !0;
    n.showHelpOnFail = function (P = !0, D) {
      let [O, N] = typeof P == "string" ? [!0, P] : [P, D];
      return (t.getInternalMethods().isGlobalContext() && (a = N), (s = N), (u = O), n);
    };
    let c = !1;
    n.fail = function (P, D) {
      let O = t.getInternalMethods().getLoggerInstance();
      if (!o.length) {
        if ((t.getExitProcess() && mTe(!0), !c)) {
          ((c = !0), u && (t.showHelp("error"), O.error()), (P || D) && O.error(P || D));
          let N = s || a;
          N && ((P || D) && O.error(""), O.error(N));
        }
        if (((D = D || new x3(P)), t.getExitProcess())) return t.exit(1);
        if (t.getInternalMethods().hasParseCallback()) return t.exit(1, D);
        throw D;
      }
      for (let N = o.length - 1; N >= 0; --N) {
        let F = o[N];
        if (oiu(F)) {
          if (D) throw D;
          if (P) throw Error(P);
        } else F(P, D, n);
      }
    };
    let m = [],
      d = !1;
    ((n.usage = (P, D) => (P === null ? ((d = !0), (m = []), n) : ((d = !1), m.push([P, D || ""]), n))),
      (n.getUsage = () => m),
      (n.getUsageDisabled = () => d),
      (n.getPositionalGroupName = () => r("Positionals:")));
    let f = [];
    n.example = (P, D) => {
      f.push([P, D || ""]);
    };
    let p = [];
    ((n.command = function (P, D, O, N, F = !1) {
      (O && (p = p.map((B) => ((B[2] = !1), B))), p.push([P, D || "", O, N, F]));
    }),
      (n.getCommands = () => p));
    let h = {};
    ((n.describe = function (P, D) {
      Array.isArray(P)
        ? P.forEach((O) => {
            n.describe(O, D);
          })
        : typeof P == "object"
          ? Object.keys(P).forEach((O) => {
              n.describe(O, P[O]);
            })
          : (h[P] = D);
    }),
      (n.getDescriptions = () => h));
    let g = [];
    n.epilog = (P) => {
      g.push(P);
    };
    let b,
      A = !1;
    ((n.wrap = (P) => {
      ((A = !0), (b = P));
    }),
      (n.getWrap = () =>
        e.getEnv("YARGS_DISABLE_WRAP")
          ? null
          : (A ||
              ((b = (function () {
                return e.process.stdColumns ? Math.min(80, e.process.stdColumns) : 80;
              })()),
              (A = !0)),
            b)));
    let y = "__yargsString__:";
    function E(P, D, O) {
      let N = 0;
      return (
        Array.isArray(P) || (P = Object.values(P).map((F) => [F])),
        P.forEach((F) => {
          N = Math.max(e.stringWidth(O ? `${O} ${Jht(F[0])}` : Jht(F[0])) + YFi(F[0]), N);
        }),
        D && (N = Math.min(N, parseInt((0.5 * D).toString(), 10))),
        N
      );
    }
    let v;
    function C(P) {
      return t.getOptions().hiddenOptions.indexOf(P) < 0 || t.parsed.argv[t.getOptions().showHiddenOpt];
    }
    function x(P, D) {
      let O = `[${r("default:")} `;
      if (P === void 0 && !D) return null;
      if (D) O += D;
      else
        switch (typeof P) {
          case "string":
            O += `"${P}"`;
            break;
          case "object":
            O += JSON.stringify(P);
            break;
          default:
            O += P;
        }
      return `${O}]`;
    }
    ((n.deferY18nLookup = (P) => y + P),
      (n.help = function () {
        if (v) return v;
        (function () {
          let X = t.getDemandedOptions(),
            J = t.getOptions();
          (Object.keys(J.alias) || []).forEach((q) => {
            J.alias[q].forEach((ne) => {
              (h[ne] && n.describe(q, h[ne]),
                ne in X && t.demandOption(q, X[ne]),
                J.boolean.includes(ne) && t.boolean(q),
                J.count.includes(ne) && t.count(q),
                J.string.includes(ne) && t.string(q),
                J.normalize.includes(ne) && t.normalize(q),
                J.array.includes(ne) && t.array(q),
                J.number.includes(ne) && t.number(q));
            });
          });
        })();
        let P = t.customScriptName ? t.$0 : e.path.basename(t.$0),
          D = t.getDemandedOptions(),
          O = t.getDemandedCommands(),
          N = t.getDeprecatedOptions(),
          F = t.getGroups(),
          B = t.getOptions(),
          L = [];
        ((L = L.concat(Object.keys(h))),
          (L = L.concat(Object.keys(D))),
          (L = L.concat(Object.keys(O))),
          (L = L.concat(Object.keys(B.default))),
          (L = L.filter(C)),
          (L = Object.keys(L.reduce((X, J) => (J !== "_" && (X[J] = !0), X), {}))));
        let G = n.getWrap(),
          Q = e.cliui({ width: G, wrap: !!G });
        if (!d) {
          if (m.length)
            (m.forEach((X) => {
              (Q.div({ text: `${X[0].replace(/\$0/g, P)}` }),
                X[1] && Q.div({ text: `${X[1]}`, padding: [1, 0, 0, 0] }));
            }),
              Q.div());
          else if (p.length) {
            let X = null;
            ((X = O._
              ? `${P} <${r("command")}>
`
              : `${P} [${r("command")}]
`),
              Q.div(`${X}`));
          }
        }
        if (p.length > 1 || (p.length === 1 && !p[0][2])) {
          Q.div(r("Commands:"));
          let X = t.getInternalMethods().getContext(),
            J = X.commands.length ? `${X.commands.join(" ")} ` : "";
          t.getInternalMethods().getParserConfiguration()["sort-commands"] === !0 &&
            (p = p.sort((ne, de) => ne[0].localeCompare(de[0])));
          let q = P ? `${P} ` : "";
          (p.forEach((ne) => {
            let de = `${q}${J}${ne[0].replace(/^\$0 ?/, "")}`;
            Q.span({ text: de, padding: [0, 2, 0, 2], width: E(p, G, `${P}${J}`) + 4 }, { text: ne[1] });
            let ce = [];
            (ne[2] && ce.push(`[${r("default")}]`),
              ne[3] && ne[3].length && ce.push(`[${r("aliases:")} ${ne[3].join(", ")}]`),
              ne[4] &&
                (typeof ne[4] == "string"
                  ? ce.push(`[${r("deprecated: %s", ne[4])}]`)
                  : ce.push(`[${r("deprecated")}]`)),
              ce.length ? Q.div({ text: ce.join(" "), padding: [0, 0, 0, 2], align: "right" }) : Q.div());
          }),
            Q.div());
        }
        let K = (Object.keys(B.alias) || []).concat(Object.keys(t.parsed.newAliases) || []);
        L = L.filter((X) => !t.parsed.newAliases[X] && K.every((J) => (B.alias[J] || []).indexOf(X) === -1));
        let H = r("Options:");
        (F[H] || (F[H] = []),
          (function (X, J, q, ne) {
            let de = [],
              ce = null;
            (Object.keys(q).forEach((ye) => {
              de = de.concat(q[ye]);
            }),
              X.forEach((ye) => {
                ((ce = [ye].concat(J[ye])), ce.some((Z) => de.indexOf(Z) !== -1) || q[ne].push(ye));
              }));
          })(L, B.alias, F, H));
        let U = (X) => /^--/.test(Jht(X)),
          Y = Object.keys(F)
            .filter((X) => F[X].length > 0)
            .map((X) => ({
              groupName: X,
              normalizedKeys: F[X].filter(C).map((J) => {
                if (K.includes(J)) return J;
                for (let q, ne = 0; (q = K[ne]) !== void 0; ne++) if ((B.alias[q] || []).includes(J)) return q;
                return J;
              }),
            }))
            .filter(({ normalizedKeys: X }) => X.length > 0)
            .map(({ groupName: X, normalizedKeys: J }) => {
              let q = J.reduce(
                (ne, de) => (
                  (ne[de] = [de]
                    .concat(B.alias[de] || [])
                    .map((ce) =>
                      X === n.getPositionalGroupName()
                        ? ce
                        : (/^[0-9]$/.test(ce) ? (B.boolean.includes(de) ? "-" : "--") : ce.length > 1 ? "--" : "-") +
                          ce,
                    )
                    .sort((ce, ye) => (U(ce) === U(ye) ? 0 : U(ce) ? 1 : -1))
                    .join(", ")),
                  ne
                ),
                {},
              );
              return { groupName: X, normalizedKeys: J, switches: q };
            });
        if (
          (Y.filter(({ groupName: X }) => X !== n.getPositionalGroupName()).some(
            ({ normalizedKeys: X, switches: J }) => !X.every((q) => U(J[q])),
          ) &&
            Y.filter(({ groupName: X }) => X !== n.getPositionalGroupName()).forEach(
              ({ normalizedKeys: X, switches: J }) => {
                X.forEach((q) => {
                  var ne, de;
                  U(J[q]) &&
                    (J[q] =
                      ((ne = J[q]),
                      (de = 4),
                      y9r(ne) ? { text: ne.text, indentation: ne.indentation + de } : { text: ne, indentation: de }));
                });
              },
            ),
          Y.forEach(({ groupName: X, normalizedKeys: J, switches: q }) => {
            (Q.div(X),
              J.forEach((ne) => {
                let de = q[ne],
                  ce = h[ne] || "",
                  ye = null;
                (ce.includes(y) && (ce = r(ce.substring(16))),
                  B.boolean.includes(ne) && (ye = `[${r("boolean")}]`),
                  B.count.includes(ne) && (ye = `[${r("count")}]`),
                  B.string.includes(ne) && (ye = `[${r("string")}]`),
                  B.normalize.includes(ne) && (ye = `[${r("string")}]`),
                  B.array.includes(ne) && (ye = `[${r("array")}]`),
                  B.number.includes(ne) && (ye = `[${r("number")}]`));
                let Z = [
                  ne in N
                    ? ((oe = N[ne]), typeof oe == "string" ? `[${r("deprecated: %s", oe)}]` : `[${r("deprecated")}]`)
                    : null,
                  ye,
                  ne in D ? `[${r("required")}]` : null,
                  B.choices && B.choices[ne] ? `[${r("choices:")} ${n.stringifiedValues(B.choices[ne])}]` : null,
                  x(B.default[ne], B.defaultDescription[ne]),
                ]
                  .filter(Boolean)
                  .join(" ");
                var oe;
                Q.span({ text: Jht(de), padding: [0, 2, 0, 2 + YFi(de)], width: E(q, G) + 4 }, ce);
                let ue = t.getInternalMethods().getUsageConfiguration()["hide-types"] === !0;
                Z && !ue ? Q.div({ text: Z, padding: [0, 0, 0, 2], align: "right" }) : Q.div();
              }),
              Q.div());
          }),
          f.length &&
            (Q.div(r("Examples:")),
            f.forEach((X) => {
              X[0] = X[0].replace(/\$0/g, P);
            }),
            f.forEach((X) => {
              X[1] === ""
                ? Q.div({ text: X[0], padding: [0, 2, 0, 2] })
                : Q.div({ text: X[0], padding: [0, 2, 0, 2], width: E(f, G) + 4 }, { text: X[1] });
            }),
            Q.div()),
          g.length > 0)
        ) {
          let X = g.map((J) => J.replace(/\$0/g, P)).join(`
`);
          Q.div(`${X}
`);
        }
        return Q.toString().replace(/\s*$/, "");
      }),
      (n.cacheHelpMessage = function () {
        v = this.help();
      }),
      (n.clearCachedHelpMessage = function () {
        v = void 0;
      }),
      (n.hasCachedHelpMessage = function () {
        return !!v;
      }),
      (n.showHelp = (P) => {
        let D = t.getInternalMethods().getLoggerInstance();
        (P || (P = "error"), (typeof P == "function" ? P : D[P])(n.help()));
      }),
      (n.functionDescription = (P) =>
        ["(", P.name ? e.Parser.decamelize(P.name, "-") : r("generated-value"), ")"].join("")),
      (n.stringifiedValues = function (P, D) {
        let O = "",
          N = D || ", ",
          F = [].concat(P);
        return (
          P &&
            F.length &&
            F.forEach((B) => {
              (O.length && (O += N), (O += JSON.stringify(B)));
            }),
          O
        );
      }));
    let k = null;
    ((n.version = (P) => {
      k = P;
    }),
      (n.showVersion = (P) => {
        let D = t.getInternalMethods().getLoggerInstance();
        (P || (P = "error"), (typeof P == "function" ? P : D[P])(k));
      }),
      (n.reset = function (P) {
        return ((s = null), (c = !1), (m = []), (d = !1), (g = []), (f = []), (p = []), (h = A1e(h, (D) => !P[D])), n);
      }));
    let R = [];
    return (
      (n.freeze = function () {
        R.push({
          failMessage: s,
          failureOutput: c,
          usages: m,
          usageDisabled: d,
          epilogs: g,
          examples: f,
          commands: p,
          descriptions: h,
        });
      }),
      (n.unfreeze = function (P = !1) {
        let D = R.pop();
        D &&
          (P
            ? ((h = { ...D.descriptions, ...h }),
              (p = [...D.commands, ...p]),
              (m = [...D.usages, ...m]),
              (f = [...D.examples, ...f]),
              (g = [...D.epilogs, ...g]))
            : ({
                failMessage: s,
                failureOutput: c,
                usages: m,
                usageDisabled: d,
                epilogs: g,
                examples: f,
                commands: p,
                descriptions: h,
              } = D));
      }),
      n
    );
  }
  function y9r(t) {
    return typeof t == "object";
  }
  function YFi(t) {
    return y9r(t) ? t.indentation : 0;
  }
  function Jht(t) {
    return y9r(t) ? t.text : t;
  }
  var b9r = class {
    constructor(e, r, n, o) {
      var s, a, u;
      ((this.yargs = e),
        (this.usage = r),
        (this.command = n),
        (this.shim = o),
        (this.completionKey = "get-yargs-completions"),
        (this.aliases = null),
        (this.customCompletionFunction = null),
        (this.indexAfterLastReset = 0),
        (this.zshShell =
          (u =
            ((s = this.shim.getEnv("SHELL")) === null || s === void 0 ? void 0 : s.includes("zsh")) ||
            ((a = this.shim.getEnv("ZSH_NAME")) === null || a === void 0 ? void 0 : a.includes("zsh"))) !== null &&
          u !== void 0 &&
          u));
    }
    defaultCompletion(e, r, n, o) {
      let s = this.command.getCommandHandlers();
      for (let u = 0, c = e.length; u < c; ++u)
        if (s[e[u]] && s[e[u]].builder) {
          let m = s[e[u]].builder;
          if (g9r(m)) {
            this.indexAfterLastReset = u + 1;
            let d = this.yargs.getInternalMethods().reset();
            return (m(d, !0), d.argv);
          }
        }
      let a = [];
      (this.commandCompletions(a, e, n),
        this.optionCompletions(a, e, r, n),
        this.choicesFromOptionsCompletions(a, e, r, n),
        this.choicesFromPositionalsCompletions(a, e, r, n),
        o(null, a));
    }
    commandCompletions(e, r, n) {
      let o = this.yargs.getInternalMethods().getContext().commands;
      n.match(/^-/) ||
        o[o.length - 1] === n ||
        this.previousArgHasChoices(r) ||
        this.usage.getCommands().forEach((s) => {
          let a = y1e(s[0]).cmd;
          if (r.indexOf(a) === -1)
            if (this.zshShell) {
              let u = s[1] || "";
              e.push(a.replace(/:/g, "\\:") + ":" + u);
            } else e.push(a);
        });
    }
    optionCompletions(e, r, n, o) {
      if ((o.match(/^-/) || (o === "" && e.length === 0)) && !this.previousArgHasChoices(r)) {
        let s = this.yargs.getOptions(),
          a = this.yargs.getGroups()[this.usage.getPositionalGroupName()] || [];
        Object.keys(s.key).forEach((u) => {
          let c = !!s.configuration["boolean-negation"] && s.boolean.includes(u);
          a.includes(u) ||
            s.hiddenOptions.includes(u) ||
            this.argsContainKey(r, u, c) ||
            this.completeOptionKey(u, e, o, c && !!s.default[u]);
        });
      }
    }
    choicesFromOptionsCompletions(e, r, n, o) {
      if (this.previousArgHasChoices(r)) {
        let s = this.getPreviousArgChoices(r);
        s && s.length > 0 && e.push(...s.map((a) => a.replace(/:/g, "\\:")));
      }
    }
    choicesFromPositionalsCompletions(e, r, n, o) {
      if (o === "" && e.length > 0 && this.previousArgHasChoices(r)) return;
      let s = this.yargs.getGroups()[this.usage.getPositionalGroupName()] || [],
        a = Math.max(this.indexAfterLastReset, this.yargs.getInternalMethods().getContext().commands.length + 1),
        u = s[n._.length - a - 1];
      if (!u) return;
      let c = this.yargs.getOptions().choices[u] || [];
      for (let m of c) m.startsWith(o) && e.push(m.replace(/:/g, "\\:"));
    }
    getPreviousArgChoices(e) {
      if (e.length < 1) return;
      let r = e[e.length - 1],
        n = "";
      if ((!r.startsWith("-") && e.length > 1 && ((n = r), (r = e[e.length - 2])), !r.startsWith("-"))) return;
      let o = r.replace(/^-+/, ""),
        s = this.yargs.getOptions(),
        a = [o, ...(this.yargs.getAliases()[o] || [])],
        u;
      for (let c of a)
        if (Object.prototype.hasOwnProperty.call(s.key, c) && Array.isArray(s.choices[c])) {
          u = s.choices[c];
          break;
        }
      return u ? u.filter((c) => !n || c.startsWith(n)) : void 0;
    }
    previousArgHasChoices(e) {
      let r = this.getPreviousArgChoices(e);
      return r !== void 0 && r.length > 0;
    }
    argsContainKey(e, r, n) {
      let o = (s) => e.indexOf((/^[^0-9]$/.test(s) ? "-" : "--") + s) !== -1;
      if (o(r) || (n && o(`no-${r}`))) return !0;
      if (this.aliases) {
        for (let s of this.aliases[r]) if (o(s)) return !0;
      }
      return !1;
    }
    completeOptionKey(e, r, n, o) {
      var s, a, u, c;
      let m = e;
      if (this.zshShell) {
        let f = this.usage.getDescriptions(),
          p =
            (a = (s = this == null ? void 0 : this.aliases) === null || s === void 0 ? void 0 : s[e]) === null ||
            a === void 0
              ? void 0
              : a.find((b) => {
                  let A = f[b];
                  return typeof A == "string" && A.length > 0;
                }),
          h = p ? f[p] : void 0,
          g = (c = (u = f[e]) !== null && u !== void 0 ? u : h) !== null && c !== void 0 ? c : "";
        m = `${e.replace(/:/g, "\\:")}:${g.replace("__yargsString__:", "").replace(/(\r\n|\n|\r)/gm, " ")}`;
      }
      let d = !/^--/.test(n) && ((f) => /^[^0-9]$/.test(f))(e) ? "-" : "--";
      (r.push(d + m), o && r.push(d + "no-" + m));
    }
    customCompletion(e, r, n, o) {
      if ((sw(this.customCompletionFunction, null, this.shim), this.customCompletionFunction.length < 3)) {
        let s = this.customCompletionFunction(n, r);
        return pf(s)
          ? s
              .then((a) => {
                this.shim.process.nextTick(() => {
                  o(null, a);
                });
              })
              .catch((a) => {
                this.shim.process.nextTick(() => {
                  o(a, void 0);
                });
              })
          : o(null, s);
      }
      return (function (s) {
        return s.length > 3;
      })(this.customCompletionFunction)
        ? this.customCompletionFunction(
            n,
            r,
            (s = o) => this.defaultCompletion(e, r, n, s),
            (s) => {
              o(null, s);
            },
          )
        : this.customCompletionFunction(n, r, (s) => {
            o(null, s);
          });
    }
    getCompletion(e, r) {
      let n = e.length ? e[e.length - 1] : "",
        o = this.yargs.parse(e, !0),
        s = this.customCompletionFunction
          ? (a) => this.customCompletion(e, a, n, r)
          : (a) => this.defaultCompletion(e, a, n, r);
      return pf(o) ? o.then(s) : s(o);
    }
    generateCompletionScript(e, r) {
      let n = this.zshShell
          ? `#compdef {{app_name}}
###-begin-{{app_name}}-completions-###
#
# yargs command completion script
#
# Installation: {{app_path}} {{completion_command}} >> ~/.zshrc
#    or {{app_path}} {{completion_command}} >> ~/.zprofile on OSX.
#
_{{app_name}}_yargs_completions()
{
  local reply
  local si=$IFS
  IFS=$'
' reply=($(COMP_CWORD="$((CURRENT-1))" COMP_LINE="$BUFFER" COMP_POINT="$CURSOR" {{app_path}} --get-yargs-completions "\${words[@]}"))
  IFS=$si
  _describe 'values' reply
}
compdef _{{app_name}}_yargs_completions {{app_name}}
###-end-{{app_name}}-completions-###
`
          : `###-begin-{{app_name}}-completions-###
#
# yargs command completion script
#
# Installation: {{app_path}} {{completion_command}} >> ~/.bashrc
#    or {{app_path}} {{completion_command}} >> ~/.bash_profile on OSX.
#
_{{app_name}}_yargs_completions()
{
    local cur_word args type_list

    cur_word="\${COMP_WORDS[COMP_CWORD]}"
    args=("\${COMP_WORDS[@]}")

    # ask yargs to generate completions.
    type_list=$({{app_path}} --get-yargs-completions "\${args[@]}")

    COMPREPLY=( $(compgen -W "\${type_list}" -- \${cur_word}) )

    # if no match was found, fall back to filename completion
    if [ \${#COMPREPLY[@]} -eq 0 ]; then
      COMPREPLY=()
    fi

    return 0
}
complete -o bashdefault -o default -F _{{app_name}}_yargs_completions {{app_name}}
###-end-{{app_name}}-completions-###
`,
        o = this.shim.path.basename(e);
      return (
        e.match(/\.js$/) && (e = `./${e}`),
        (n = n.replace(/{{app_name}}/g, o)),
        (n = n.replace(/{{completion_command}}/g, r)),
        n.replace(/{{app_path}}/g, e)
      );
    }
    registerFunction(e) {
      this.customCompletionFunction = e;
    }
    setParsed(e) {
      this.aliases = e.aliases;
    }
  };
  function aiu(t, e) {
    if (t.length === 0) return e.length;
    if (e.length === 0) return t.length;
    let r = [],
      n,
      o;
    for (n = 0; n <= e.length; n++) r[n] = [n];
    for (o = 0; o <= t.length; o++) r[0][o] = o;
    for (n = 1; n <= e.length; n++)
      for (o = 1; o <= t.length; o++)
        e.charAt(n - 1) === t.charAt(o - 1)
          ? (r[n][o] = r[n - 1][o - 1])
          : n > 1 && o > 1 && e.charAt(n - 2) === t.charAt(o - 1) && e.charAt(n - 1) === t.charAt(o - 2)
            ? (r[n][o] = r[n - 2][o - 2] + 1)
            : (r[n][o] = Math.min(r[n - 1][o - 1] + 1, Math.min(r[n][o - 1] + 1, r[n - 1][o] + 1)));
    return r[e.length][t.length];
  }
  var KFi = ["$0", "--", "_"],
    ff,
    tJ,
    cTe,
    Bv,
    _y,
    Xht,
    hj,
    rJ,
    Zht,
    Lv,
    e3t,
    Mv,
    wI,
    Ey,
    Fv,
    t3t,
    h1e,
    w3,
    ro,
    r3t,
    n3t,
    vy,
    nJ,
    g1e,
    iJ,
    gj,
    i3t,
    Yo,
    oJ,
    sJ,
    aJ,
    ws,
    o3t,
    xI,
    T1,
    JFi = Symbol("copyDoubleDash"),
    XFi = Symbol("copyDoubleDash"),
    e9r = Symbol("deleteFromParserHintObject"),
    ZFi = Symbol("emitWarning"),
    eUi = Symbol("freeze"),
    tUi = Symbol("getDollarZero"),
    uJ = Symbol("getParserConfiguration"),
    rUi = Symbol("getUsageConfiguration"),
    t9r = Symbol("guessLocale"),
    nUi = Symbol("guessVersion"),
    iUi = Symbol("parsePositionalNumbers"),
    r9r = Symbol("pkgUp"),
    bj = Symbol("populateParserHintArray"),
    b1e = Symbol("populateParserHintSingleValueDictionary"),
    n9r = Symbol("populateParserHintArrayDictionary"),
    i9r = Symbol("populateParserHintDictionary"),
    o9r = Symbol("sanitizeKey"),
    s9r = Symbol("setKey"),
    a9r = Symbol("unfreeze"),
    oUi = Symbol("validateAsync"),
    sUi = Symbol("getCommandInstance"),
    aUi = Symbol("getContext"),
    uUi = Symbol("getHasOutput"),
    cUi = Symbol("getLoggerInstance"),
    lUi = Symbol("getParseContext"),
    mUi = Symbol("getUsageInstance"),
    dUi = Symbol("getValidationInstance"),
    s3t = Symbol("hasParseCallback"),
    fUi = Symbol("isGlobalContext"),
    cJ = Symbol("postProcess"),
    pUi = Symbol("rebase"),
    u9r = Symbol("reset"),
    lTe = Symbol("runYargsParserAndExecuteCommands"),
    c9r = Symbol("runValidation"),
    hUi = Symbol("setHasOutput"),
    lJ = Symbol("kTrackManuallySetKeys"),
    A9r = class {
      constructor(e = [], r, n, o) {
        ((this.customScriptName = !1),
          (this.parsed = !1),
          ff.set(this, void 0),
          tJ.set(this, void 0),
          cTe.set(this, { commands: [], fullCommands: [] }),
          Bv.set(this, null),
          _y.set(this, null),
          Xht.set(this, "show-hidden"),
          hj.set(this, null),
          rJ.set(this, !0),
          Zht.set(this, {}),
          Lv.set(this, !0),
          e3t.set(this, []),
          Mv.set(this, void 0),
          wI.set(this, {}),
          Ey.set(this, !1),
          Fv.set(this, null),
          t3t.set(this, !0),
          h1e.set(this, void 0),
          w3.set(this, ""),
          ro.set(this, void 0),
          r3t.set(this, void 0),
          n3t.set(this, {}),
          vy.set(this, null),
          nJ.set(this, null),
          g1e.set(this, {}),
          iJ.set(this, {}),
          gj.set(this, void 0),
          i3t.set(this, !1),
          Yo.set(this, void 0),
          oJ.set(this, !1),
          sJ.set(this, !1),
          aJ.set(this, !1),
          ws.set(this, void 0),
          o3t.set(this, {}),
          xI.set(this, null),
          T1.set(this, void 0),
          xi(this, Yo, o, "f"),
          xi(this, gj, e, "f"),
          xi(this, tJ, r, "f"),
          xi(this, r3t, n, "f"),
          xi(this, Mv, new p9r(this), "f"),
          (this.$0 = this[tUi]()),
          this[u9r](),
          xi(this, ff, at(this, ff, "f"), "f"),
          xi(this, ws, at(this, ws, "f"), "f"),
          xi(this, T1, at(this, T1, "f"), "f"),
          xi(this, ro, at(this, ro, "f"), "f"),
          (at(this, ro, "f").showHiddenOpt = at(this, Xht, "f")),
          xi(this, h1e, this[XFi](), "f"));
      }
      addHelpOpt(e, r) {
        return (
          ki("[string|boolean] [string]", [e, r], arguments.length),
          at(this, Fv, "f") && (this[e9r](at(this, Fv, "f")), xi(this, Fv, null, "f")),
          (e === !1 && r === void 0) ||
            (xi(this, Fv, typeof e == "string" ? e : "help", "f"),
            this.boolean(at(this, Fv, "f")),
            this.describe(at(this, Fv, "f"), r || at(this, ws, "f").deferY18nLookup("Show help"))),
          this
        );
      }
      help(e, r) {
        return this.addHelpOpt(e, r);
      }
      addShowHiddenOpt(e, r) {
        if ((ki("[string|boolean] [string]", [e, r], arguments.length), e === !1 && r === void 0)) return this;
        let n = typeof e == "string" ? e : at(this, Xht, "f");
        return (
          this.boolean(n),
          this.describe(n, r || at(this, ws, "f").deferY18nLookup("Show hidden options")),
          (at(this, ro, "f").showHiddenOpt = n),
          this
        );
      }
      showHidden(e, r) {
        return this.addShowHiddenOpt(e, r);
      }
      alias(e, r) {
        return (
          ki("<object|string|array> [string|array]", [e, r], arguments.length),
          this[n9r](this.alias.bind(this), "alias", e, r),
          this
        );
      }
      array(e) {
        return (ki("<array|string>", [e], arguments.length), this[bj]("array", e), this[lJ](e), this);
      }
      boolean(e) {
        return (ki("<array|string>", [e], arguments.length), this[bj]("boolean", e), this[lJ](e), this);
      }
      check(e, r) {
        return (
          ki("<function> [boolean]", [e, r], arguments.length),
          this.middleware(
            (n, o) =>
              fTe(
                () => e(n, o.getOptions()),
                (s) => (
                  s
                    ? (typeof s == "string" || s instanceof Error) && at(this, ws, "f").fail(s.toString(), s)
                    : at(this, ws, "f").fail(at(this, Yo, "f").y18n.__("Argument check failed: %s", e.toString())),
                  n
                ),
                (s) => (at(this, ws, "f").fail(s.message ? s.message : s.toString(), s), n),
              ),
            !1,
            r,
          ),
          this
        );
      }
      choices(e, r) {
        return (
          ki("<object|string|array> [string|array]", [e, r], arguments.length),
          this[n9r](this.choices.bind(this), "choices", e, r),
          this
        );
      }
      coerce(e, r) {
        if ((ki("<object|string|array> [function]", [e, r], arguments.length), Array.isArray(e))) {
          if (!r) throw new x3("coerce callback must be provided");
          for (let n of e) this.coerce(n, r);
          return this;
        }
        if (typeof e == "object") {
          for (let n of Object.keys(e)) this.coerce(n, e[n]);
          return this;
        }
        if (!r) throw new x3("coerce callback must be provided");
        return (
          (at(this, ro, "f").key[e] = !0),
          at(this, Mv, "f").addCoerceMiddleware((n, o) => {
            let s;
            return Object.prototype.hasOwnProperty.call(n, e)
              ? fTe(
                  () => ((s = o.getAliases()), r(n[e])),
                  (a) => {
                    n[e] = a;
                    let u = o.getInternalMethods().getParserConfiguration()["strip-aliased"];
                    if (s[e] && u !== !0) for (let c of s[e]) n[c] = a;
                    return n;
                  },
                  (a) => {
                    throw new x3(a.message);
                  },
                )
              : n;
          }, e),
          this
        );
      }
      conflicts(e, r) {
        return (
          ki("<string|object> [string|array]", [e, r], arguments.length),
          at(this, T1, "f").conflicts(e, r),
          this
        );
      }
      config(e = "config", r, n) {
        return (
          ki("[object|string] [string|function] [function]", [e, r, n], arguments.length),
          typeof e != "object" || Array.isArray(e)
            ? (typeof r == "function" && ((n = r), (r = void 0)),
              this.describe(e, r || at(this, ws, "f").deferY18nLookup("Path to JSON config file")),
              (Array.isArray(e) ? e : [e]).forEach((o) => {
                at(this, ro, "f").config[o] = n || !0;
              }),
              this)
            : ((e = u3t(e, at(this, tJ, "f"), this[uJ]()["deep-merge-config"] || !1, at(this, Yo, "f"))),
              (at(this, ro, "f").configObjects = (at(this, ro, "f").configObjects || []).concat(e)),
              this)
        );
      }
      completion(e, r, n) {
        return (
          ki("[string] [string|boolean|function] [function]", [e, r, n], arguments.length),
          typeof r == "function" && ((n = r), (r = void 0)),
          xi(this, _y, e || at(this, _y, "f") || "completion", "f"),
          r || r === !1 || (r = "generate completion script"),
          this.command(at(this, _y, "f"), r),
          n && at(this, Bv, "f").registerFunction(n),
          this
        );
      }
      command(e, r, n, o, s, a) {
        return (
          ki(
            "<string|array|object> [string|boolean] [function|object] [function] [array] [boolean|string]",
            [e, r, n, o, s, a],
            arguments.length,
          ),
          at(this, ff, "f").addHandler(e, r, n, o, s, a),
          this
        );
      }
      commands(e, r, n, o, s, a) {
        return this.command(e, r, n, o, s, a);
      }
      commandDir(e, r) {
        ki("<string> [object]", [e, r], arguments.length);
        let n = at(this, r3t, "f") || at(this, Yo, "f").require;
        return (at(this, ff, "f").addDirectory(e, n, at(this, Yo, "f").getCallerFile(), r), this);
      }
      count(e) {
        return (ki("<array|string>", [e], arguments.length), this[bj]("count", e), this[lJ](e), this);
      }
      default(e, r, n) {
        return (
          ki("<object|string|array> [*] [string]", [e, r, n], arguments.length),
          n && (WFi(e, at(this, Yo, "f")), (at(this, ro, "f").defaultDescription[e] = n)),
          typeof r == "function" &&
            (WFi(e, at(this, Yo, "f")),
            at(this, ro, "f").defaultDescription[e] ||
              (at(this, ro, "f").defaultDescription[e] = at(this, ws, "f").functionDescription(r)),
            (r = r.call())),
          this[b1e](this.default.bind(this), "default", e, r),
          this
        );
      }
      defaults(e, r, n) {
        return this.default(e, r, n);
      }
      demandCommand(e = 1, r, n, o) {
        return (
          ki(
            "[number] [number|string] [string|null|undefined] [string|null|undefined]",
            [e, r, n, o],
            arguments.length,
          ),
          typeof r != "number" && ((n = r), (r = 1 / 0)),
          this.global("_", !1),
          (at(this, ro, "f").demandedCommands._ = { min: e, max: r, minMsg: n, maxMsg: o }),
          this
        );
      }
      demand(e, r, n) {
        return (
          Array.isArray(r)
            ? (r.forEach((o) => {
                (sw(n, !0, at(this, Yo, "f")), this.demandOption(o, n));
              }),
              (r = 1 / 0))
            : typeof r != "number" && ((n = r), (r = 1 / 0)),
          typeof e == "number"
            ? (sw(n, !0, at(this, Yo, "f")), this.demandCommand(e, r, n, n))
            : Array.isArray(e)
              ? e.forEach((o) => {
                  (sw(n, !0, at(this, Yo, "f")), this.demandOption(o, n));
                })
              : typeof n == "string"
                ? this.demandOption(e, n)
                : (n !== !0 && n !== void 0) || this.demandOption(e),
          this
        );
      }
      demandOption(e, r) {
        return (
          ki("<object|string|array> [string]", [e, r], arguments.length),
          this[b1e](this.demandOption.bind(this), "demandedOptions", e, r),
          this
        );
      }
      deprecateOption(e, r) {
        return (
          ki("<string> [string|boolean]", [e, r], arguments.length),
          (at(this, ro, "f").deprecatedOptions[e] = r),
          this
        );
      }
      describe(e, r) {
        return (
          ki("<object|string|array> [string]", [e, r], arguments.length),
          this[s9r](e, !0),
          at(this, ws, "f").describe(e, r),
          this
        );
      }
      detectLocale(e) {
        return (ki("<boolean>", [e], arguments.length), xi(this, rJ, e, "f"), this);
      }
      env(e) {
        return (
          ki("[string|boolean]", [e], arguments.length),
          e === !1 ? delete at(this, ro, "f").envPrefix : (at(this, ro, "f").envPrefix = e || ""),
          this
        );
      }
      epilogue(e) {
        return (ki("<string>", [e], arguments.length), at(this, ws, "f").epilog(e), this);
      }
      epilog(e) {
        return this.epilogue(e);
      }
      example(e, r) {
        return (
          ki("<string|array> [string]", [e, r], arguments.length),
          Array.isArray(e) ? e.forEach((n) => this.example(...n)) : at(this, ws, "f").example(e, r),
          this
        );
      }
      exit(e, r) {
        (xi(this, Ey, !0, "f"), xi(this, hj, r, "f"), at(this, Lv, "f") && at(this, Yo, "f").process.exit(e));
      }
      exitProcess(e = !0) {
        return (ki("[boolean]", [e], arguments.length), xi(this, Lv, e, "f"), this);
      }
      fail(e) {
        if ((ki("<function|boolean>", [e], arguments.length), typeof e == "boolean" && e !== !1))
          throw new x3("Invalid first argument. Expected function or boolean 'false'");
        return (at(this, ws, "f").failFn(e), this);
      }
      getAliases() {
        return this.parsed ? this.parsed.aliases : {};
      }
      async getCompletion(e, r) {
        return (
          ki("<array> [function]", [e, r], arguments.length),
          r
            ? at(this, Bv, "f").getCompletion(e, r)
            : new Promise((n, o) => {
                at(this, Bv, "f").getCompletion(e, (s, a) => {
                  s ? o(s) : n(a);
                });
              })
        );
      }
      getDemandedOptions() {
        return (ki([], 0), at(this, ro, "f").demandedOptions);
      }
      getDemandedCommands() {
        return (ki([], 0), at(this, ro, "f").demandedCommands);
      }
      getDeprecatedOptions() {
        return (ki([], 0), at(this, ro, "f").deprecatedOptions);
      }
      getDetectLocale() {
        return at(this, rJ, "f");
      }
      getExitProcess() {
        return at(this, Lv, "f");
      }
      getGroups() {
        return Object.assign({}, at(this, wI, "f"), at(this, iJ, "f"));
      }
      getHelp() {
        if ((xi(this, Ey, !0, "f"), !at(this, ws, "f").hasCachedHelpMessage())) {
          if (!this.parsed) {
            let r = this[lTe](at(this, gj, "f"), void 0, void 0, 0, !0);
            if (pf(r)) return r.then(() => at(this, ws, "f").help());
          }
          let e = at(this, ff, "f").runDefaultBuilderOn(this);
          if (pf(e)) return e.then(() => at(this, ws, "f").help());
        }
        return Promise.resolve(at(this, ws, "f").help());
      }
      getOptions() {
        return at(this, ro, "f");
      }
      getStrict() {
        return at(this, oJ, "f");
      }
      getStrictCommands() {
        return at(this, sJ, "f");
      }
      getStrictOptions() {
        return at(this, aJ, "f");
      }
      global(e, r) {
        return (
          ki("<string|array> [boolean]", [e, r], arguments.length),
          (e = [].concat(e)),
          r !== !1
            ? (at(this, ro, "f").local = at(this, ro, "f").local.filter((n) => e.indexOf(n) === -1))
            : e.forEach((n) => {
                at(this, ro, "f").local.includes(n) || at(this, ro, "f").local.push(n);
              }),
          this
        );
      }
      group(e, r) {
        ki("<string|array> <string>", [e, r], arguments.length);
        let n = at(this, iJ, "f")[r] || at(this, wI, "f")[r];
        at(this, iJ, "f")[r] && delete at(this, iJ, "f")[r];
        let o = {};
        return ((at(this, wI, "f")[r] = (n || []).concat(e).filter((s) => !o[s] && (o[s] = !0))), this);
      }
      hide(e) {
        return (ki("<string>", [e], arguments.length), at(this, ro, "f").hiddenOptions.push(e), this);
      }
      implies(e, r) {
        return (
          ki("<string|object> [number|string|array]", [e, r], arguments.length),
          at(this, T1, "f").implies(e, r),
          this
        );
      }
      locale(e) {
        return (
          ki("[string]", [e], arguments.length),
          e === void 0
            ? (this[t9r](), at(this, Yo, "f").y18n.getLocale())
            : (xi(this, rJ, !1, "f"), at(this, Yo, "f").y18n.setLocale(e), this)
        );
      }
      middleware(e, r, n) {
        return at(this, Mv, "f").addMiddleware(e, !!r, n);
      }
      nargs(e, r) {
        return (
          ki("<string|object|array> [number]", [e, r], arguments.length),
          this[b1e](this.nargs.bind(this), "narg", e, r),
          this
        );
      }
      normalize(e) {
        return (ki("<array|string>", [e], arguments.length), this[bj]("normalize", e), this);
      }
      number(e) {
        return (ki("<array|string>", [e], arguments.length), this[bj]("number", e), this[lJ](e), this);
      }
      option(e, r) {
        if ((ki("<string|object> [object]", [e, r], arguments.length), typeof e == "object"))
          Object.keys(e).forEach((n) => {
            this.options(n, e[n]);
          });
        else {
          (typeof r != "object" && (r = {}),
            this[lJ](e),
            !at(this, xI, "f") ||
              (e !== "version" && r?.alias !== "version") ||
              this[ZFi](
                [
                  '"version" is a reserved word.',
                  "Please do one of the following:",
                  '- Disable version with `yargs.version(false)` if using "version" as an option',
                  "- Use the built-in `yargs.version` method instead (if applicable)",
                  "- Use a different option key",
                  "https://yargs.js.org/docs/#api-reference-version",
                ].join(`
`),
                void 0,
                "versionWarning",
              ),
            (at(this, ro, "f").key[e] = !0),
            r.alias && this.alias(e, r.alias));
          let n = r.deprecate || r.deprecated;
          n && this.deprecateOption(e, n);
          let o = r.demand || r.required || r.require;
          (o && this.demand(e, o),
            r.demandOption && this.demandOption(e, typeof r.demandOption == "string" ? r.demandOption : void 0),
            r.conflicts && this.conflicts(e, r.conflicts),
            "default" in r && this.default(e, r.default),
            r.implies !== void 0 && this.implies(e, r.implies),
            r.nargs !== void 0 && this.nargs(e, r.nargs),
            r.config && this.config(e, r.configParser),
            r.normalize && this.normalize(e),
            r.choices && this.choices(e, r.choices),
            r.coerce && this.coerce(e, r.coerce),
            r.group && this.group(e, r.group),
            (r.boolean || r.type === "boolean") && (this.boolean(e), r.alias && this.boolean(r.alias)),
            (r.array || r.type === "array") && (this.array(e), r.alias && this.array(r.alias)),
            (r.number || r.type === "number") && (this.number(e), r.alias && this.number(r.alias)),
            (r.string || r.type === "string") && (this.string(e), r.alias && this.string(r.alias)),
            (r.count || r.type === "count") && this.count(e),
            typeof r.global == "boolean" && this.global(e, r.global),
            r.defaultDescription && (at(this, ro, "f").defaultDescription[e] = r.defaultDescription),
            r.skipValidation && this.skipValidation(e));
          let s = r.describe || r.description || r.desc,
            a = at(this, ws, "f").getDescriptions();
          ((Object.prototype.hasOwnProperty.call(a, e) && typeof s != "string") || this.describe(e, s),
            r.hidden && this.hide(e),
            r.requiresArg && this.requiresArg(e));
        }
        return this;
      }
      options(e, r) {
        return this.option(e, r);
      }
      parse(e, r, n) {
        (ki("[string|array] [function|boolean|object] [function]", [e, r, n], arguments.length),
          this[eUi](),
          e === void 0 && (e = at(this, gj, "f")),
          typeof r == "object" && (xi(this, nJ, r, "f"), (r = n)),
          typeof r == "function" && (xi(this, vy, r, "f"), (r = !1)),
          r || xi(this, gj, e, "f"),
          at(this, vy, "f") && xi(this, Lv, !1, "f"));
        let o = this[lTe](e, !!r),
          s = this.parsed;
        return (
          at(this, Bv, "f").setParsed(this.parsed),
          pf(o)
            ? o
                .then(
                  (a) => (
                    at(this, vy, "f") && at(this, vy, "f").call(this, at(this, hj, "f"), a, at(this, w3, "f")),
                    a
                  ),
                )
                .catch((a) => {
                  throw (at(this, vy, "f") && at(this, vy, "f")(a, this.parsed.argv, at(this, w3, "f")), a);
                })
                .finally(() => {
                  (this[a9r](), (this.parsed = s));
                })
            : (at(this, vy, "f") && at(this, vy, "f").call(this, at(this, hj, "f"), o, at(this, w3, "f")),
              this[a9r](),
              (this.parsed = s),
              o)
        );
      }
      parseAsync(e, r, n) {
        let o = this.parse(e, r, n);
        return pf(o) ? o : Promise.resolve(o);
      }
      parseSync(e, r, n) {
        let o = this.parse(e, r, n);
        if (pf(o)) throw new x3(".parseSync() must not be used with asynchronous builders, handlers, or middleware");
        return o;
      }
      parserConfiguration(e) {
        return (ki("<object>", [e], arguments.length), xi(this, n3t, e, "f"), this);
      }
      pkgConf(e, r) {
        ki("<string> [string]", [e, r], arguments.length);
        let n = null,
          o = this[r9r](r || at(this, tJ, "f"));
        return (
          o[e] &&
            typeof o[e] == "object" &&
            ((n = u3t(o[e], r || at(this, tJ, "f"), this[uJ]()["deep-merge-config"] || !1, at(this, Yo, "f"))),
            (at(this, ro, "f").configObjects = (at(this, ro, "f").configObjects || []).concat(n))),
          this
        );
      }
      positional(e, r) {
        ki("<string> <object>", [e, r], arguments.length);
        let n = [
          "default",
          "defaultDescription",
          "implies",
          "normalize",
          "choices",
          "conflicts",
          "coerce",
          "type",
          "describe",
          "desc",
          "description",
          "alias",
        ];
        r = A1e(r, (a, u) => !(a === "type" && !["string", "number", "boolean"].includes(u)) && n.includes(a));
        let o = at(this, cTe, "f").fullCommands[at(this, cTe, "f").fullCommands.length - 1],
          s = o ? at(this, ff, "f").cmdToParseOptions(o) : { array: [], alias: {}, default: {}, demand: {} };
        return (
          a3t(s).forEach((a) => {
            let u = s[a];
            Array.isArray(u) ? u.indexOf(e) !== -1 && (r[a] = !0) : u[e] && !(a in r) && (r[a] = u[e]);
          }),
          this.group(e, at(this, ws, "f").getPositionalGroupName()),
          this.option(e, r)
        );
      }
      recommendCommands(e = !0) {
        return (ki("[boolean]", [e], arguments.length), xi(this, i3t, e, "f"), this);
      }
      required(e, r, n) {
        return this.demand(e, r, n);
      }
      require(e, r, n) {
        return this.demand(e, r, n);
      }
      requiresArg(e) {
        return (
          ki("<array|string|object> [number]", [e], arguments.length),
          (typeof e == "string" && at(this, ro, "f").narg[e]) || this[b1e](this.requiresArg.bind(this), "narg", e, NaN),
          this
        );
      }
      showCompletionScript(e, r) {
        return (
          ki("[string] [string]", [e, r], arguments.length),
          (e = e || this.$0),
          at(this, h1e, "f").log(at(this, Bv, "f").generateCompletionScript(e, r || at(this, _y, "f") || "completion")),
          this
        );
      }
      showHelp(e) {
        if (
          (ki("[string|function]", [e], arguments.length),
          xi(this, Ey, !0, "f"),
          !at(this, ws, "f").hasCachedHelpMessage())
        ) {
          if (!this.parsed) {
            let n = this[lTe](at(this, gj, "f"), void 0, void 0, 0, !0);
            if (pf(n))
              return (
                n.then(() => {
                  at(this, ws, "f").showHelp(e);
                }),
                this
              );
          }
          let r = at(this, ff, "f").runDefaultBuilderOn(this);
          if (pf(r))
            return (
              r.then(() => {
                at(this, ws, "f").showHelp(e);
              }),
              this
            );
        }
        return (at(this, ws, "f").showHelp(e), this);
      }
      scriptName(e) {
        return ((this.customScriptName = !0), (this.$0 = e), this);
      }
      showHelpOnFail(e, r) {
        return (
          ki("[boolean|string] [string]", [e, r], arguments.length),
          at(this, ws, "f").showHelpOnFail(e, r),
          this
        );
      }
      showVersion(e) {
        return (ki("[string|function]", [e], arguments.length), at(this, ws, "f").showVersion(e), this);
      }
      skipValidation(e) {
        return (ki("<array|string>", [e], arguments.length), this[bj]("skipValidation", e), this);
      }
      strict(e) {
        return (ki("[boolean]", [e], arguments.length), xi(this, oJ, e !== !1, "f"), this);
      }
      strictCommands(e) {
        return (ki("[boolean]", [e], arguments.length), xi(this, sJ, e !== !1, "f"), this);
      }
      strictOptions(e) {
        return (ki("[boolean]", [e], arguments.length), xi(this, aJ, e !== !1, "f"), this);
      }
      string(e) {
        return (ki("<array|string>", [e], arguments.length), this[bj]("string", e), this[lJ](e), this);
      }
      terminalWidth() {
        return (ki([], 0), at(this, Yo, "f").process.stdColumns);
      }
      updateLocale(e) {
        return this.updateStrings(e);
      }
      updateStrings(e) {
        return (
          ki("<object>", [e], arguments.length),
          xi(this, rJ, !1, "f"),
          at(this, Yo, "f").y18n.updateLocale(e),
          this
        );
      }
      usage(e, r, n, o) {
        if (
          (ki("<string|null|undefined> [string|boolean] [function|object] [function]", [e, r, n, o], arguments.length),
          r !== void 0)
        ) {
          if ((sw(e, null, at(this, Yo, "f")), (e || "").match(/^\$0( |$)/))) return this.command(e, r, n, o);
          throw new x3(".usage() description must start with $0 if being used as alias for .command()");
        }
        return (at(this, ws, "f").usage(e), this);
      }
      usageConfiguration(e) {
        return (ki("<object>", [e], arguments.length), xi(this, o3t, e, "f"), this);
      }
      version(e, r, n) {
        let o = "version";
        if (
          (ki("[boolean|string] [string] [string]", [e, r, n], arguments.length),
          at(this, xI, "f") &&
            (this[e9r](at(this, xI, "f")), at(this, ws, "f").version(void 0), xi(this, xI, null, "f")),
          arguments.length === 0)
        )
          ((n = this[nUi]()), (e = o));
        else if (arguments.length === 1) {
          if (e === !1) return this;
          ((n = e), (e = o));
        } else arguments.length === 2 && ((n = r), (r = void 0));
        return (
          xi(this, xI, typeof e == "string" ? e : o, "f"),
          (r = r || at(this, ws, "f").deferY18nLookup("Show version number")),
          at(this, ws, "f").version(n || void 0),
          this.boolean(at(this, xI, "f")),
          this.describe(at(this, xI, "f"), r),
          this
        );
      }
      wrap(e) {
        return (ki("<number|null|undefined>", [e], arguments.length), at(this, ws, "f").wrap(e), this);
      }
      [((ff = new WeakMap()),
      (tJ = new WeakMap()),
      (cTe = new WeakMap()),
      (Bv = new WeakMap()),
      (_y = new WeakMap()),
      (Xht = new WeakMap()),
      (hj = new WeakMap()),
      (rJ = new WeakMap()),
      (Zht = new WeakMap()),
      (Lv = new WeakMap()),
      (e3t = new WeakMap()),
      (Mv = new WeakMap()),
      (wI = new WeakMap()),
      (Ey = new WeakMap()),
      (Fv = new WeakMap()),
      (t3t = new WeakMap()),
      (h1e = new WeakMap()),
      (w3 = new WeakMap()),
      (ro = new WeakMap()),
      (r3t = new WeakMap()),
      (n3t = new WeakMap()),
      (vy = new WeakMap()),
      (nJ = new WeakMap()),
      (g1e = new WeakMap()),
      (iJ = new WeakMap()),
      (gj = new WeakMap()),
      (i3t = new WeakMap()),
      (Yo = new WeakMap()),
      (oJ = new WeakMap()),
      (sJ = new WeakMap()),
      (aJ = new WeakMap()),
      (ws = new WeakMap()),
      (o3t = new WeakMap()),
      (xI = new WeakMap()),
      (T1 = new WeakMap()),
      JFi)](e) {
        if (!e._ || !e["--"]) return e;
        e._.push.apply(e._, e["--"]);
        try {
          delete e["--"];
        } catch {}
        return e;
      }
      [XFi]() {
        return {
          log: (...e) => {
            (this[s3t]() || console.log(...e),
              xi(this, Ey, !0, "f"),
              at(this, w3, "f").length &&
                xi(
                  this,
                  w3,
                  at(this, w3, "f") +
                    `
`,
                  "f",
                ),
              xi(this, w3, at(this, w3, "f") + e.join(" "), "f"));
          },
          error: (...e) => {
            (this[s3t]() || console.error(...e),
              xi(this, Ey, !0, "f"),
              at(this, w3, "f").length &&
                xi(
                  this,
                  w3,
                  at(this, w3, "f") +
                    `
`,
                  "f",
                ),
              xi(this, w3, at(this, w3, "f") + e.join(" "), "f"));
          },
        };
      }
      [e9r](e) {
        (a3t(at(this, ro, "f")).forEach((r) => {
          if (r === "configObjects") return;
          let n = at(this, ro, "f")[r];
          Array.isArray(n) ? n.includes(e) && n.splice(n.indexOf(e), 1) : typeof n == "object" && delete n[e];
        }),
          delete at(this, ws, "f").getDescriptions()[e]);
      }
      [ZFi](e, r, n) {
        at(this, Zht, "f")[n] || (at(this, Yo, "f").process.emitWarning(e, r), (at(this, Zht, "f")[n] = !0));
      }
      [eUi]() {
        (at(this, e3t, "f").push({
          options: at(this, ro, "f"),
          configObjects: at(this, ro, "f").configObjects.slice(0),
          exitProcess: at(this, Lv, "f"),
          groups: at(this, wI, "f"),
          strict: at(this, oJ, "f"),
          strictCommands: at(this, sJ, "f"),
          strictOptions: at(this, aJ, "f"),
          completionCommand: at(this, _y, "f"),
          output: at(this, w3, "f"),
          exitError: at(this, hj, "f"),
          hasOutput: at(this, Ey, "f"),
          parsed: this.parsed,
          parseFn: at(this, vy, "f"),
          parseContext: at(this, nJ, "f"),
        }),
          at(this, ws, "f").freeze(),
          at(this, T1, "f").freeze(),
          at(this, ff, "f").freeze(),
          at(this, Mv, "f").freeze());
      }
      [tUi]() {
        let e,
          r = "";
        return (
          (e = /\b(node|iojs|electron)(\.exe)?$/.test(at(this, Yo, "f").process.argv()[0])
            ? at(this, Yo, "f").process.argv().slice(1, 2)
            : at(this, Yo, "f").process.argv().slice(0, 1)),
          (r = e
            .map((n) => {
              let o = this[pUi](at(this, tJ, "f"), n);
              return n.match(/^(\/|([a-zA-Z]:)?\\)/) && o.length < n.length ? o : n;
            })
            .join(" ")
            .trim()),
          at(this, Yo, "f").getEnv("_") &&
            at(this, Yo, "f").getProcessArgvBin() === at(this, Yo, "f").getEnv("_") &&
            (r = at(this, Yo, "f")
              .getEnv("_")
              .replace(`${at(this, Yo, "f").path.dirname(at(this, Yo, "f").process.execPath())}/`, "")),
          r
        );
      }
      [uJ]() {
        return at(this, n3t, "f");
      }
      [rUi]() {
        return at(this, o3t, "f");
      }
      [t9r]() {
        if (!at(this, rJ, "f")) return;
        let e =
          at(this, Yo, "f").getEnv("LC_ALL") ||
          at(this, Yo, "f").getEnv("LC_MESSAGES") ||
          at(this, Yo, "f").getEnv("LANG") ||
          at(this, Yo, "f").getEnv("LANGUAGE") ||
          "en_US";
        this.locale(e.replace(/[.:].*/, ""));
      }
      [nUi]() {
        return this[r9r]().version || "unknown";
      }
      [iUi](e) {
        let r = e["--"] ? e["--"] : e._;
        for (let n, o = 0; (n = r[o]) !== void 0; o++)
          at(this, Yo, "f").Parser.looksLikeNumber(n) &&
            Number.isSafeInteger(Math.floor(parseFloat(`${n}`))) &&
            (r[o] = Number(n));
        return e;
      }
      [r9r](e) {
        let r = e || "*";
        if (at(this, g1e, "f")[r]) return at(this, g1e, "f")[r];
        let n = {};
        try {
          let o = e || at(this, Yo, "f").mainFilename;
          !e && at(this, Yo, "f").path.extname(o) && (o = at(this, Yo, "f").path.dirname(o));
          let s = at(this, Yo, "f").findUp(o, (a, u) => (u.includes("package.json") ? "package.json" : void 0));
          (sw(s, void 0, at(this, Yo, "f")), (n = JSON.parse(at(this, Yo, "f").readFileSync(s, "utf8"))));
        } catch {}
        return ((at(this, g1e, "f")[r] = n || {}), at(this, g1e, "f")[r]);
      }
      [bj](e, r) {
        (r = [].concat(r)).forEach((n) => {
          ((n = this[o9r](n)), at(this, ro, "f")[e].push(n));
        });
      }
      [b1e](e, r, n, o) {
        this[i9r](e, r, n, o, (s, a, u) => {
          at(this, ro, "f")[s][a] = u;
        });
      }
      [n9r](e, r, n, o) {
        this[i9r](e, r, n, o, (s, a, u) => {
          at(this, ro, "f")[s][a] = (at(this, ro, "f")[s][a] || []).concat(u);
        });
      }
      [i9r](e, r, n, o, s) {
        if (Array.isArray(n))
          n.forEach((a) => {
            e(a, o);
          });
        else if (((a) => typeof a == "object")(n)) for (let a of a3t(n)) e(a, n[a]);
        else s(r, this[o9r](n), o);
      }
      [o9r](e) {
        return e === "__proto__" ? "___proto___" : e;
      }
      [s9r](e, r) {
        return (this[b1e](this[s9r].bind(this), "key", e, r), this);
      }
      [a9r]() {
        var e, r, n, o, s, a, u, c, m, d, f, p;
        let h = at(this, e3t, "f").pop(),
          g;
        (sw(h, void 0, at(this, Yo, "f")),
          (e = this),
          (r = this),
          (n = this),
          (o = this),
          (s = this),
          (a = this),
          (u = this),
          (c = this),
          (m = this),
          (d = this),
          (f = this),
          (p = this),
          ({
            options: {
              set value(b) {
                xi(e, ro, b, "f");
              },
            }.value,
            configObjects: g,
            exitProcess: {
              set value(b) {
                xi(r, Lv, b, "f");
              },
            }.value,
            groups: {
              set value(b) {
                xi(n, wI, b, "f");
              },
            }.value,
            output: {
              set value(b) {
                xi(o, w3, b, "f");
              },
            }.value,
            exitError: {
              set value(b) {
                xi(s, hj, b, "f");
              },
            }.value,
            hasOutput: {
              set value(b) {
                xi(a, Ey, b, "f");
              },
            }.value,
            parsed: this.parsed,
            strict: {
              set value(b) {
                xi(u, oJ, b, "f");
              },
            }.value,
            strictCommands: {
              set value(b) {
                xi(c, sJ, b, "f");
              },
            }.value,
            strictOptions: {
              set value(b) {
                xi(m, aJ, b, "f");
              },
            }.value,
            completionCommand: {
              set value(b) {
                xi(d, _y, b, "f");
              },
            }.value,
            parseFn: {
              set value(b) {
                xi(f, vy, b, "f");
              },
            }.value,
            parseContext: {
              set value(b) {
                xi(p, nJ, b, "f");
              },
            }.value,
          } = h),
          (at(this, ro, "f").configObjects = g),
          at(this, ws, "f").unfreeze(),
          at(this, T1, "f").unfreeze(),
          at(this, ff, "f").unfreeze(),
          at(this, Mv, "f").unfreeze());
      }
      [oUi](e, r) {
        return fTe(r, (n) => (e(n), n));
      }
      getInternalMethods() {
        return {
          getCommandInstance: this[sUi].bind(this),
          getContext: this[aUi].bind(this),
          getHasOutput: this[uUi].bind(this),
          getLoggerInstance: this[cUi].bind(this),
          getParseContext: this[lUi].bind(this),
          getParserConfiguration: this[uJ].bind(this),
          getUsageConfiguration: this[rUi].bind(this),
          getUsageInstance: this[mUi].bind(this),
          getValidationInstance: this[dUi].bind(this),
          hasParseCallback: this[s3t].bind(this),
          isGlobalContext: this[fUi].bind(this),
          postProcess: this[cJ].bind(this),
          reset: this[u9r].bind(this),
          runValidation: this[c9r].bind(this),
          runYargsParserAndExecuteCommands: this[lTe].bind(this),
          setHasOutput: this[hUi].bind(this),
        };
      }
      [sUi]() {
        return at(this, ff, "f");
      }
      [aUi]() {
        return at(this, cTe, "f");
      }
      [uUi]() {
        return at(this, Ey, "f");
      }
      [cUi]() {
        return at(this, h1e, "f");
      }
      [lUi]() {
        return at(this, nJ, "f") || {};
      }
      [mUi]() {
        return at(this, ws, "f");
      }
      [dUi]() {
        return at(this, T1, "f");
      }
      [s3t]() {
        return !!at(this, vy, "f");
      }
      [fUi]() {
        return at(this, t3t, "f");
      }
      [cJ](e, r, n, o) {
        return n || pf(e)
          ? e
          : (r || (e = this[JFi](e)),
            (this[uJ]()["parse-positional-numbers"] || this[uJ]()["parse-positional-numbers"] === void 0) &&
              (e = this[iUi](e)),
            o && (e = dTe(e, this, at(this, Mv, "f").getMiddleware(), !1)),
            e);
      }
      [u9r](e = {}) {
        xi(this, ro, at(this, ro, "f") || {}, "f");
        let r = {};
        ((r.local = at(this, ro, "f").local || []), (r.configObjects = at(this, ro, "f").configObjects || []));
        let n = {};
        return (
          r.local.forEach((o) => {
            ((n[o] = !0),
              (e[o] || []).forEach((s) => {
                n[s] = !0;
              }));
          }),
          Object.assign(
            at(this, iJ, "f"),
            Object.keys(at(this, wI, "f")).reduce((o, s) => {
              let a = at(this, wI, "f")[s].filter((u) => !(u in n));
              return (a.length > 0 && (o[s] = a), o);
            }, {}),
          ),
          xi(this, wI, {}, "f"),
          ["array", "boolean", "string", "skipValidation", "count", "normalize", "number", "hiddenOptions"].forEach(
            (o) => {
              r[o] = (at(this, ro, "f")[o] || []).filter((s) => !n[s]);
            },
          ),
          [
            "narg",
            "key",
            "alias",
            "default",
            "defaultDescription",
            "config",
            "choices",
            "demandedOptions",
            "demandedCommands",
            "deprecatedOptions",
          ].forEach((o) => {
            r[o] = A1e(at(this, ro, "f")[o], (s) => !n[s]);
          }),
          (r.envPrefix = at(this, ro, "f").envPrefix),
          xi(this, ro, r, "f"),
          xi(this, ws, at(this, ws, "f") ? at(this, ws, "f").reset(n) : siu(this, at(this, Yo, "f")), "f"),
          xi(
            this,
            T1,
            at(this, T1, "f")
              ? at(this, T1, "f").reset(n)
              : (function (o, s, a) {
                  let u = a.y18n.__,
                    c = a.y18n.__n,
                    m = {
                      nonOptionCount: function (g) {
                        let b = o.getDemandedCommands(),
                          A =
                            g._.length +
                            (g["--"] ? g["--"].length : 0) -
                            o.getInternalMethods().getContext().commands.length;
                        b._ &&
                          (A < b._.min || A > b._.max) &&
                          (A < b._.min
                            ? b._.minMsg !== void 0
                              ? s.fail(
                                  b._.minMsg
                                    ? b._.minMsg.replace(/\$0/g, A.toString()).replace(/\$1/, b._.min.toString())
                                    : null,
                                )
                              : s.fail(
                                  c(
                                    "Not enough non-option arguments: got %s, need at least %s",
                                    "Not enough non-option arguments: got %s, need at least %s",
                                    A,
                                    A.toString(),
                                    b._.min.toString(),
                                  ),
                                )
                            : A > b._.max &&
                              (b._.maxMsg !== void 0
                                ? s.fail(
                                    b._.maxMsg
                                      ? b._.maxMsg.replace(/\$0/g, A.toString()).replace(/\$1/, b._.max.toString())
                                      : null,
                                  )
                                : s.fail(
                                    c(
                                      "Too many non-option arguments: got %s, maximum of %s",
                                      "Too many non-option arguments: got %s, maximum of %s",
                                      A,
                                      A.toString(),
                                      b._.max.toString(),
                                    ),
                                  )));
                      },
                      positionalCount: function (g, b) {
                        b < g &&
                          s.fail(
                            c(
                              "Not enough non-option arguments: got %s, need at least %s",
                              "Not enough non-option arguments: got %s, need at least %s",
                              b,
                              b + "",
                              g + "",
                            ),
                          );
                      },
                      requiredArguments: function (g, b) {
                        let A = null;
                        for (let y of Object.keys(b))
                          (Object.prototype.hasOwnProperty.call(g, y) && g[y] !== void 0) ||
                            ((A = A || {}), (A[y] = b[y]));
                        if (A) {
                          let y = [];
                          for (let v of Object.keys(A)) {
                            let C = A[v];
                            C && y.indexOf(C) < 0 && y.push(C);
                          }
                          let E = y.length
                            ? `
${y.join(`
`)}`
                            : "";
                          s.fail(
                            c(
                              "Missing required argument: %s",
                              "Missing required arguments: %s",
                              Object.keys(A).length,
                              Object.keys(A).join(", ") + E,
                            ),
                          );
                        }
                      },
                      unknownArguments: function (g, b, A, y, E = !0) {
                        var v;
                        let C = o.getInternalMethods().getCommandInstance().getCommands(),
                          x = [],
                          k = o.getInternalMethods().getContext();
                        if (
                          (Object.keys(g).forEach((R) => {
                            KFi.includes(R) ||
                              Object.prototype.hasOwnProperty.call(A, R) ||
                              Object.prototype.hasOwnProperty.call(o.getInternalMethods().getParseContext(), R) ||
                              m.isValidAndSomeAliasIsNotNew(R, b) ||
                              x.push(R);
                          }),
                          E &&
                            (k.commands.length > 0 || C.length > 0 || y) &&
                            g._.slice(k.commands.length).forEach((R) => {
                              C.includes("" + R) || x.push("" + R);
                            }),
                          E)
                        ) {
                          let R = ((v = o.getDemandedCommands()._) === null || v === void 0 ? void 0 : v.max) || 0,
                            P = k.commands.length + R;
                          P < g._.length &&
                            g._.slice(P).forEach((D) => {
                              ((D = String(D)), k.commands.includes(D) || x.includes(D) || x.push(D));
                            });
                        }
                        x.length &&
                          s.fail(
                            c(
                              "Unknown argument: %s",
                              "Unknown arguments: %s",
                              x.length,
                              x.map((R) => (R.trim() ? R : `"${R}"`)).join(", "),
                            ),
                          );
                      },
                      unknownCommands: function (g) {
                        let b = o.getInternalMethods().getCommandInstance().getCommands(),
                          A = [],
                          y = o.getInternalMethods().getContext();
                        return (
                          (y.commands.length > 0 || b.length > 0) &&
                            g._.slice(y.commands.length).forEach((E) => {
                              b.includes("" + E) || A.push("" + E);
                            }),
                          A.length > 0 &&
                            (s.fail(c("Unknown command: %s", "Unknown commands: %s", A.length, A.join(", "))), !0)
                        );
                      },
                      isValidAndSomeAliasIsNotNew: function (g, b) {
                        if (!Object.prototype.hasOwnProperty.call(b, g)) return !1;
                        let A = o.parsed.newAliases;
                        return [g, ...b[g]].some((y) => !Object.prototype.hasOwnProperty.call(A, y) || !A[g]);
                      },
                      limitedChoices: function (g) {
                        let b = o.getOptions(),
                          A = {};
                        if (!Object.keys(b.choices).length) return;
                        Object.keys(g).forEach((v) => {
                          KFi.indexOf(v) === -1 &&
                            Object.prototype.hasOwnProperty.call(b.choices, v) &&
                            [].concat(g[v]).forEach((C) => {
                              b.choices[v].indexOf(C) === -1 && C !== void 0 && (A[v] = (A[v] || []).concat(C));
                            });
                        });
                        let y = Object.keys(A);
                        if (!y.length) return;
                        let E = u("Invalid values:");
                        (y.forEach((v) => {
                          E += `
  ${u("Argument: %s, Given: %s, Choices: %s", v, s.stringifiedValues(A[v]), s.stringifiedValues(b.choices[v]))}`;
                        }),
                          s.fail(E));
                      },
                    },
                    d = {};
                  function f(g, b) {
                    let A = Number(b);
                    return (
                      typeof (b = isNaN(A) ? b : A) == "number"
                        ? (b = g._.length >= b)
                        : b.match(/^--no-.+/)
                          ? ((b = b.match(/^--no-(.+)/)[1]), (b = !Object.prototype.hasOwnProperty.call(g, b)))
                          : (b = Object.prototype.hasOwnProperty.call(g, b)),
                      b
                    );
                  }
                  ((m.implies = function (g, b) {
                    (ki("<string|object> [array|number|string]", [g, b], arguments.length),
                      typeof g == "object"
                        ? Object.keys(g).forEach((A) => {
                            m.implies(A, g[A]);
                          })
                        : (o.global(g),
                          d[g] || (d[g] = []),
                          Array.isArray(b) ? b.forEach((A) => m.implies(g, A)) : (sw(b, void 0, a), d[g].push(b))));
                  }),
                    (m.getImplied = function () {
                      return d;
                    }),
                    (m.implications = function (g) {
                      let b = [];
                      if (
                        (Object.keys(d).forEach((A) => {
                          let y = A;
                          (d[A] || []).forEach((E) => {
                            let v = y,
                              C = E;
                            ((v = f(g, v)), (E = f(g, E)), v && !E && b.push(` ${y} -> ${C}`));
                          });
                        }),
                        b.length)
                      ) {
                        let A = `${u("Implications failed:")}
`;
                        (b.forEach((y) => {
                          A += y;
                        }),
                          s.fail(A));
                      }
                    }));
                  let p = {};
                  ((m.conflicts = function (g, b) {
                    (ki("<string|object> [array|string]", [g, b], arguments.length),
                      typeof g == "object"
                        ? Object.keys(g).forEach((A) => {
                            m.conflicts(A, g[A]);
                          })
                        : (o.global(g),
                          p[g] || (p[g] = []),
                          Array.isArray(b) ? b.forEach((A) => m.conflicts(g, A)) : p[g].push(b)));
                  }),
                    (m.getConflicting = () => p),
                    (m.conflicting = function (g) {
                      (Object.keys(g).forEach((b) => {
                        p[b] &&
                          p[b].forEach((A) => {
                            A &&
                              g[b] !== void 0 &&
                              g[A] !== void 0 &&
                              s.fail(u("Arguments %s and %s are mutually exclusive", b, A));
                          });
                      }),
                        o.getInternalMethods().getParserConfiguration()["strip-dashed"] &&
                          Object.keys(p).forEach((b) => {
                            p[b].forEach((A) => {
                              A &&
                                g[a.Parser.camelCase(b)] !== void 0 &&
                                g[a.Parser.camelCase(A)] !== void 0 &&
                                s.fail(u("Arguments %s and %s are mutually exclusive", b, A));
                            });
                          }));
                    }),
                    (m.recommendCommands = function (g, b) {
                      b = b.sort((E, v) => v.length - E.length);
                      let A = null,
                        y = 1 / 0;
                      for (let E, v = 0; (E = b[v]) !== void 0; v++) {
                        let C = aiu(g, E);
                        C <= 3 && C < y && ((y = C), (A = E));
                      }
                      A && s.fail(u("Did you mean %s?", A));
                    }),
                    (m.reset = function (g) {
                      return ((d = A1e(d, (b) => !g[b])), (p = A1e(p, (b) => !g[b])), m);
                    }));
                  let h = [];
                  return (
                    (m.freeze = function () {
                      h.push({ implied: d, conflicting: p });
                    }),
                    (m.unfreeze = function () {
                      let g = h.pop();
                      (sw(g, void 0, a), ({ implied: d, conflicting: p } = g));
                    }),
                    m
                  );
                })(this, at(this, ws, "f"), at(this, Yo, "f")),
            "f",
          ),
          xi(
            this,
            ff,
            at(this, ff, "f")
              ? at(this, ff, "f").reset()
              : (function (o, s, a, u) {
                  return new h9r(o, s, a, u);
                })(at(this, ws, "f"), at(this, T1, "f"), at(this, Mv, "f"), at(this, Yo, "f")),
            "f",
          ),
          at(this, Bv, "f") ||
            xi(
              this,
              Bv,
              (function (o, s, a, u) {
                return new b9r(o, s, a, u);
              })(this, at(this, ws, "f"), at(this, ff, "f"), at(this, Yo, "f")),
              "f",
            ),
          at(this, Mv, "f").reset(),
          xi(this, _y, null, "f"),
          xi(this, w3, "", "f"),
          xi(this, hj, null, "f"),
          xi(this, Ey, !1, "f"),
          (this.parsed = !1),
          this
        );
      }
      [pUi](e, r) {
        return at(this, Yo, "f").path.relative(e, r);
      }
      [lTe](e, r, n, o = 0, s = !1) {
        let a = !!n || s;
        ((e = e || at(this, gj, "f")),
          (at(this, ro, "f").__ = at(this, Yo, "f").y18n.__),
          (at(this, ro, "f").configuration = this[uJ]()));
        let u = !!at(this, ro, "f").configuration["populate--"],
          c = Object.assign({}, at(this, ro, "f").configuration, { "populate--": !0 }),
          m = at(this, Yo, "f").Parser.detailed(
            e,
            Object.assign({}, at(this, ro, "f"), { configuration: { "parse-positional-numbers": !1, ...c } }),
          ),
          d = Object.assign(m.argv, at(this, nJ, "f")),
          f,
          p = m.aliases,
          h = !1,
          g = !1;
        (Object.keys(d).forEach((b) => {
          b === at(this, Fv, "f") && d[b] ? (h = !0) : b === at(this, xI, "f") && d[b] && (g = !0);
        }),
          (d.$0 = this.$0),
          (this.parsed = m),
          o === 0 && at(this, ws, "f").clearCachedHelpMessage());
        try {
          if ((this[t9r](), r)) return this[cJ](d, u, !!n, !1);
          (at(this, Fv, "f") &&
            [at(this, Fv, "f")]
              .concat(p[at(this, Fv, "f")] || [])
              .filter((E) => E.length > 1)
              .includes("" + d._[d._.length - 1]) &&
            (d._.pop(), (h = !0)),
            xi(this, t3t, !1, "f"));
          let b = at(this, ff, "f").getCommands(),
            A = at(this, Bv, "f").completionKey in d,
            y = h || A || s;
          if (d._.length) {
            if (b.length) {
              let E;
              for (let v, C = o || 0; d._[C] !== void 0; C++) {
                if (((v = String(d._[C])), b.includes(v) && v !== at(this, _y, "f"))) {
                  let x = at(this, ff, "f").runCommand(v, this, m, C + 1, s, h || g || s);
                  return this[cJ](x, u, !!n, !1);
                }
                if (!E && v !== at(this, _y, "f")) {
                  E = v;
                  break;
                }
              }
              !at(this, ff, "f").hasDefaultCommand() &&
                at(this, i3t, "f") &&
                E &&
                !y &&
                at(this, T1, "f").recommendCommands(E, b);
            }
            at(this, _y, "f") &&
              d._.includes(at(this, _y, "f")) &&
              !A &&
              (at(this, Lv, "f") && mTe(!0), this.showCompletionScript(), this.exit(0));
          }
          if (at(this, ff, "f").hasDefaultCommand() && !y) {
            let E = at(this, ff, "f").runCommand(null, this, m, 0, s, h || g || s);
            return this[cJ](E, u, !!n, !1);
          }
          if (A) {
            at(this, Lv, "f") && mTe(!0);
            let E = (e = [].concat(e)).slice(e.indexOf(`--${at(this, Bv, "f").completionKey}`) + 1);
            return (
              at(this, Bv, "f").getCompletion(E, (v, C) => {
                if (v) throw new x3(v.message);
                ((C || []).forEach((x) => {
                  at(this, h1e, "f").log(x);
                }),
                  this.exit(0));
              }),
              this[cJ](d, !u, !!n, !1)
            );
          }
          if (
            (at(this, Ey, "f") ||
              (h
                ? (at(this, Lv, "f") && mTe(!0), (a = !0), this.showHelp("log"), this.exit(0))
                : g && (at(this, Lv, "f") && mTe(!0), (a = !0), at(this, ws, "f").showVersion("log"), this.exit(0))),
            !a &&
              at(this, ro, "f").skipValidation.length > 0 &&
              (a = Object.keys(d).some((E) => at(this, ro, "f").skipValidation.indexOf(E) >= 0 && d[E] === !0)),
            !a)
          ) {
            if (m.error) throw new x3(m.error.message);
            if (!A) {
              let E = this[c9r](p, {}, m.error);
              (n || (f = dTe(d, this, at(this, Mv, "f").getMiddleware(), !0)),
                (f = this[oUi](E, f ?? d)),
                pf(f) && !n && (f = f.then(() => dTe(d, this, at(this, Mv, "f").getMiddleware(), !1))));
            }
          }
        } catch (b) {
          if (!(b instanceof x3)) throw b;
          at(this, ws, "f").fail(b.message, b);
        }
        return this[cJ](f ?? d, u, !!n, !0);
      }
      [c9r](e, r, n, o) {
        let s = { ...this.getDemandedOptions() };
        return (a) => {
          if (n) throw new x3(n.message);
          (at(this, T1, "f").nonOptionCount(a), at(this, T1, "f").requiredArguments(a, s));
          let u = !1;
          (at(this, sJ, "f") && (u = at(this, T1, "f").unknownCommands(a)),
            at(this, oJ, "f") && !u
              ? at(this, T1, "f").unknownArguments(a, e, r, !!o)
              : at(this, aJ, "f") && at(this, T1, "f").unknownArguments(a, e, {}, !1, !1),
            at(this, T1, "f").limitedChoices(a),
            at(this, T1, "f").implications(a),
            at(this, T1, "f").conflicting(a));
        };
      }
      [hUi]() {
        xi(this, Ey, !0, "f");
      }
      [lJ](e) {
        if (typeof e == "string") at(this, ro, "f").key[e] = !0;
        else for (let r of e) at(this, ro, "f").key[r] = !0;
      }
    },
    l9r,
    m9r,
    { readFileSync: uiu } = Ae("fs"),
    { inspect: ciu } = Ae("util"),
    { resolve: liu } = Ae("path"),
    miu = FMi(),
    diu = F8r(),
    d9r,
    gUi = {
      assert: { notStrictEqual: qFi.notStrictEqual, strictEqual: qFi.strictEqual },
      cliui: CFi(),
      findUp: TFi(),
      getEnv: (t) => process.env[t],
      getCallerFile: IFi(),
      getProcessArgvBin: _Ui,
      inspect: ciu,
      mainFilename:
        (m9r = (l9r = Ae?.main) === null || l9r === void 0 ? void 0 : l9r.filename) !== null && m9r !== void 0
          ? m9r
          : process.cwd(),
      Parser: diu,
      path: Ae("path"),
      process: {
        argv: () => process.argv,
        cwd: process.cwd,
        emitWarning: (t, e) => process.emitWarning(t, e),
        execPath: () => process.execPath,
        exit: (t) => {
          process.exit(t);
        },
        nextTick: process.nextTick,
        stdColumns: process.stdout.columns !== void 0 ? process.stdout.columns : null,
      },
      readFileSync: uiu,
      require: Ae,
      requireDirectory: NFi(),
      stringWidth: GFi(),
      y18n: miu({ directory: liu(__dirname, "../locales"), updateFiles: !1 }),
    },
    bUi =
      !((d9r = process == null ? void 0 : process.env) === null || d9r === void 0) && d9r.YARGS_MIN_NODE_VERSION
        ? Number(process.env.YARGS_MIN_NODE_VERSION)
        : 12;
  if (process && process.version && Number(process.version.match(/v([^.]+)/)[1]) < bUi)
    throw Error(
      `yargs supports a minimum Node.js version of ${bUi}. Read our version support policy: https://github.com/yargs/yargs#supported-nodejs-versions`,
    );
  var fiu = F8r(),
    f9r,
    piu = {
      applyExtends: u3t,
      cjsPlatformShim: gUi,
      Yargs:
        ((f9r = gUi),
        (t = [], e = f9r.process.cwd(), r) => {
          let n = new A9r(t, e, r, f9r);
          return (Object.defineProperty(n, "argv", { get: () => n.parse(), enumerable: !0 }), n.help(), n.version(), n);
        }),
      argsert: ki,
      isPromise: pf,
      objFilter: A1e,
      parseCommand: y1e,
      Parser: fiu,
      processArgv: iiu,
      YError: x3,
    };
  EUi.exports = piu;
});
var Mm,
  _1e = j(() => {
    Mm = class t extends Error {
      constructor(e) {
        (super(e || "yargs error"),
          (this.name = "YError"),
          Error.captureStackTrace && Error.captureStackTrace(this, t));
      }
    };
  });
function hTe(t, e, r, n) {
  pTe = n;
  let o = {};
  if (Object.prototype.hasOwnProperty.call(t, "extends")) {
    if (typeof t.extends != "string") return o;
    let s = /\.json|\..*rc$/.test(t.extends),
      a = null;
    if (s) a = _iu(e, t.extends);
    else
      try {
        a = Ae.resolve(t.extends);
      } catch {
        return t;
      }
    (yiu(a),
      _9r.push(a),
      (o = s ? JSON.parse(pTe.readFileSync(a, "utf8")) : Ae(t.extends)),
      delete t.extends,
      (o = hTe(o, pTe.path.dirname(a), r, pTe)));
  }
  return ((_9r = []), r ? wUi(o, t) : Object.assign({}, o, t));
}
function yiu(t) {
  if (_9r.indexOf(t) > -1) throw new Mm(`Circular extended configurations: '${t}'.`);
}
function _iu(t, e) {
  return pTe.path.resolve(t, e);
}
function wUi(t, e) {
  let r = {};
  function n(o) {
    return o && typeof o == "object" && !Array.isArray(o);
  }
  Object.assign(r, t);
  for (let o of Object.keys(e)) n(e[o]) && n(r[o]) ? (r[o] = wUi(t[o], e[o])) : (r[o] = e[o]);
  return r;
}
var _9r,
  pTe,
  E9r = j(() => {
    _1e();
    _9r = [];
  });
function xUi() {
  return Eiu() ? 0 : 1;
}
function Eiu() {
  return viu() && !process.defaultApp;
}
function viu() {
  return !!process.versions.electron;
}
function v9r(t) {
  return t.slice(xUi() + 1);
}
function TUi() {
  return process.argv[xUi()];
}
var C9r = j(() => {});
function mJ(t) {
  if (
    ((t !== t.toLowerCase() && t !== t.toUpperCase()) || (t = t.toLowerCase()),
    t.indexOf("-") === -1 && t.indexOf("_") === -1)
  )
    return t;
  {
    let r = "",
      n = !1,
      o = t.match(/^-+/);
    for (let s = o ? o[0].length : 0; s < t.length; s++) {
      let a = t.charAt(s);
      (n && ((n = !1), (a = a.toUpperCase())),
        s !== 0 && (a === "-" || a === "_") ? (n = !0) : a !== "-" && a !== "_" && (r += a));
    }
    return r;
  }
}
function l3t(t, e) {
  let r = t.toLowerCase();
  e = e || "-";
  let n = "";
  for (let o = 0; o < t.length; o++) {
    let s = r.charAt(o),
      a = t.charAt(o);
    s !== a && o > 0 ? (n += `${e}${r.charAt(o)}`) : (n += a);
  }
  return n;
}
function m3t(t) {
  return t == null
    ? !1
    : typeof t == "number" || /^0x[0-9a-f]+$/i.test(t)
      ? !0
      : /^0[^.]/.test(t)
        ? !1
        : /^[-]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(t);
}
var S9r = j(() => {});
function DUi(t) {
  if (Array.isArray(t)) return t.map((a) => (typeof a != "string" ? a + "" : a));
  t = t.trim();
  let e = 0,
    r = null,
    n = null,
    o = null,
    s = [];
  for (let a = 0; a < t.length; a++) {
    if (((r = n), (n = t.charAt(a)), n === " " && !o)) {
      r !== " " && e++;
      continue;
    }
    (n === o ? (o = null) : (n === "'" || n === '"') && !o && (o = n), s[e] || (s[e] = ""), (s[e] += n));
  }
  return s;
}
var IUi = j(() => {});
var Uv,
  RUi = j(() => {
    (function (t) {
      ((t.BOOLEAN = "boolean"), (t.STRING = "string"), (t.NUMBER = "number"), (t.ARRAY = "array"));
    })(Uv || (Uv = {}));
  });
function Ciu(t) {
  let e = [],
    r = Object.create(null),
    n = !0;
  for (
    Object.keys(t).forEach(function (o) {
      e.push([].concat(t[o], o));
    });
    n;
  ) {
    n = !1;
    for (let o = 0; o < e.length; o++)
      for (let s = o + 1; s < e.length; s++)
        if (
          e[o].filter(function (u) {
            return e[s].indexOf(u) !== -1;
          }).length
        ) {
          ((e[o] = e[o].concat(e[s])), e.splice(s, 1), (n = !0));
          break;
        }
  }
  return (
    e.forEach(function (o) {
      o = o.filter(function (a, u, c) {
        return c.indexOf(a) === u;
      });
      let s = o.pop();
      s !== void 0 && typeof s == "string" && (r[s] = o);
    }),
    r
  );
}
function w9r(t) {
  return t !== void 0 ? t + 1 : 1;
}
function kUi(t) {
  return t === "__proto__" ? "___proto___" : t;
}
function Siu(t) {
  return typeof t == "string" && (t[0] === "'" || t[0] === '"') && t[t.length - 1] === t[0]
    ? t.substring(1, t.length - 1)
    : t;
}
var HN,
  d3t,
  OUi = j(() => {
    IUi();
    RUi();
    S9r();
    d3t = class {
      constructor(e) {
        HN = e;
      }
      parse(e, r) {
        let n = Object.assign(
            {
              alias: void 0,
              array: void 0,
              boolean: void 0,
              config: void 0,
              configObjects: void 0,
              configuration: void 0,
              coerce: void 0,
              count: void 0,
              default: void 0,
              envPrefix: void 0,
              narg: void 0,
              normalize: void 0,
              string: void 0,
              number: void 0,
              __: void 0,
              key: void 0,
            },
            r,
          ),
          o = DUi(e),
          s = typeof e == "string",
          a = Ciu(Object.assign(Object.create(null), n.alias)),
          u = Object.assign(
            {
              "boolean-negation": !0,
              "camel-case-expansion": !0,
              "combine-arrays": !1,
              "dot-notation": !0,
              "duplicate-arguments-array": !0,
              "flatten-duplicate-arrays": !0,
              "greedy-arrays": !0,
              "halt-at-non-option": !1,
              "nargs-eats-options": !1,
              "negation-prefix": "no-",
              "parse-numbers": !0,
              "parse-positional-numbers": !0,
              "populate--": !1,
              "set-placeholder-key": !1,
              "short-option-groups": !0,
              "strip-aliased": !1,
              "strip-dashed": !1,
              "unknown-options-as-args": !1,
            },
            n.configuration,
          ),
          c = Object.assign(Object.create(null), n.default),
          m = n.configObjects || [],
          d = n.envPrefix,
          f = u["populate--"],
          p = f ? "--" : "_",
          h = Object.create(null),
          g = Object.create(null),
          b = n.__ || HN.format,
          A = {
            aliases: Object.create(null),
            arrays: Object.create(null),
            bools: Object.create(null),
            strings: Object.create(null),
            numbers: Object.create(null),
            counts: Object.create(null),
            normalize: Object.create(null),
            configs: Object.create(null),
            nargs: Object.create(null),
            coercions: Object.create(null),
            keys: [],
          },
          y = /^-([0-9]+(\.[0-9]+)?|\.[0-9]+)$/,
          E = new RegExp("^--" + u["negation-prefix"] + "(.+)");
        ([]
          .concat(n.array || [])
          .filter(Boolean)
          .forEach(function (V) {
            let ee = typeof V == "object" ? V.key : V,
              Ce = Object.keys(V)
                .map(function (pe) {
                  return { boolean: "bools", string: "strings", number: "numbers" }[pe];
                })
                .filter(Boolean)
                .pop();
            (Ce && (A[Ce][ee] = !0), (A.arrays[ee] = !0), A.keys.push(ee));
          }),
          []
            .concat(n.boolean || [])
            .filter(Boolean)
            .forEach(function (V) {
              ((A.bools[V] = !0), A.keys.push(V));
            }),
          []
            .concat(n.string || [])
            .filter(Boolean)
            .forEach(function (V) {
              ((A.strings[V] = !0), A.keys.push(V));
            }),
          []
            .concat(n.number || [])
            .filter(Boolean)
            .forEach(function (V) {
              ((A.numbers[V] = !0), A.keys.push(V));
            }),
          []
            .concat(n.count || [])
            .filter(Boolean)
            .forEach(function (V) {
              ((A.counts[V] = !0), A.keys.push(V));
            }),
          []
            .concat(n.normalize || [])
            .filter(Boolean)
            .forEach(function (V) {
              ((A.normalize[V] = !0), A.keys.push(V));
            }),
          typeof n.narg == "object" &&
            Object.entries(n.narg).forEach(([V, ee]) => {
              typeof ee == "number" && ((A.nargs[V] = ee), A.keys.push(V));
            }),
          typeof n.coerce == "object" &&
            Object.entries(n.coerce).forEach(([V, ee]) => {
              typeof ee == "function" && ((A.coercions[V] = ee), A.keys.push(V));
            }),
          typeof n.config < "u" &&
            (Array.isArray(n.config) || typeof n.config == "string"
              ? []
                  .concat(n.config)
                  .filter(Boolean)
                  .forEach(function (V) {
                    A.configs[V] = !0;
                  })
              : typeof n.config == "object" &&
                Object.entries(n.config).forEach(([V, ee]) => {
                  (typeof ee == "boolean" || typeof ee == "function") && (A.configs[V] = ee);
                })),
          q(n.key, a, n.default, A.arrays),
          Object.keys(c).forEach(function (V) {
            (A.aliases[V] || []).forEach(function (ee) {
              c[ee] = c[V];
            });
          }));
        let v = null;
        ge();
        let C = [],
          x = Object.assign(Object.create(null), { _: [] }),
          k = {};
        for (let V = 0; V < o.length; V++) {
          let ee = o[V],
            Ce = ee.replace(/^-{3,}/, "---"),
            pe,
            be,
            Ne,
            Ge,
            Ze,
            Ye;
          if (ee !== "--" && /^-/.test(ee) && Z(ee)) R(ee);
          else if (Ce.match(/^---+(=|$)/)) {
            R(ee);
            continue;
          } else if (ee.match(/^--.+=/) || (!u["short-option-groups"] && ee.match(/^-.+=/)))
            ((Ge = ee.match(/^--?([^=]+)=([\s\S]*)$/)),
              Ge !== null &&
                Array.isArray(Ge) &&
                Ge.length >= 3 &&
                (ne(Ge[1], A.arrays)
                  ? (V = D(V, Ge[1], o, Ge[2]))
                  : ne(Ge[1], A.nargs) !== !1
                    ? (V = P(V, Ge[1], o, Ge[2]))
                    : O(Ge[1], Ge[2], !0)));
          else if (ee.match(E) && u["boolean-negation"])
            ((Ge = ee.match(E)),
              Ge !== null &&
                Array.isArray(Ge) &&
                Ge.length >= 2 &&
                ((be = Ge[1]), O(be, ne(be, A.arrays) ? [!1] : !1)));
          else if (ee.match(/^--.+/) || (!u["short-option-groups"] && ee.match(/^-[^-]+/)))
            ((Ge = ee.match(/^--?(.+)/)),
              Ge !== null &&
                Array.isArray(Ge) &&
                Ge.length >= 2 &&
                ((be = Ge[1]),
                ne(be, A.arrays)
                  ? (V = D(V, be, o))
                  : ne(be, A.nargs) !== !1
                    ? (V = P(V, be, o))
                    : ((Ze = o[V + 1]),
                      (Ze !== void 0 && (!Ze.match(/^-/) || Ze.match(y)) && !ne(be, A.bools) && !ne(be, A.counts)) ||
                      /^(true|false)$/.test(Ze)
                        ? (O(be, Ze), V++)
                        : O(be, ue(be)))));
          else if (ee.match(/^-.\..+=/))
            ((Ge = ee.match(/^-([^=]+)=([\s\S]*)$/)),
              Ge !== null && Array.isArray(Ge) && Ge.length >= 3 && O(Ge[1], Ge[2]));
          else if (ee.match(/^-.\..+/) && !ee.match(y))
            ((Ze = o[V + 1]),
              (Ge = ee.match(/^-(.\..+)/)),
              Ge !== null &&
                Array.isArray(Ge) &&
                Ge.length >= 2 &&
                ((be = Ge[1]),
                Ze !== void 0 && !Ze.match(/^-/) && !ne(be, A.bools) && !ne(be, A.counts)
                  ? (O(be, Ze), V++)
                  : O(be, ue(be))));
          else if (ee.match(/^-[^-]+/) && !ee.match(y)) {
            ((Ne = ee.slice(1, -1).split("")), (pe = !1));
            for (let _e = 0; _e < Ne.length; _e++) {
              if (((Ze = ee.slice(_e + 2)), Ne[_e + 1] && Ne[_e + 1] === "=")) {
                ((Ye = ee.slice(_e + 3)),
                  (be = Ne[_e]),
                  ne(be, A.arrays) ? (V = D(V, be, o, Ye)) : ne(be, A.nargs) !== !1 ? (V = P(V, be, o, Ye)) : O(be, Ye),
                  (pe = !0));
                break;
              }
              if (Ze === "-") {
                O(Ne[_e], Ze);
                continue;
              }
              if (/[A-Za-z]/.test(Ne[_e]) && /^-?\d+(\.\d*)?(e-?\d+)?$/.test(Ze) && ne(Ze, A.bools) === !1) {
                (O(Ne[_e], Ze), (pe = !0));
                break;
              }
              if (Ne[_e + 1] && Ne[_e + 1].match(/\W/)) {
                (O(Ne[_e], Ze), (pe = !0));
                break;
              } else O(Ne[_e], ue(Ne[_e]));
            }
            ((be = ee.slice(-1)[0]),
              !pe &&
                be !== "-" &&
                (ne(be, A.arrays)
                  ? (V = D(V, be, o))
                  : ne(be, A.nargs) !== !1
                    ? (V = P(V, be, o))
                    : ((Ze = o[V + 1]),
                      (Ze !== void 0 &&
                        (!/^(-|--)[^-]/.test(Ze) || Ze.match(y)) &&
                        !ne(be, A.bools) &&
                        !ne(be, A.counts)) ||
                      /^(true|false)$/.test(Ze)
                        ? (O(be, Ze), V++)
                        : O(be, ue(be)))));
          } else if (ee.match(/^-[0-9]$/) && ee.match(y) && ne(ee.slice(1), A.bools))
            ((be = ee.slice(1)), O(be, ue(be)));
          else if (ee === "--") {
            C = o.slice(V + 1);
            break;
          } else if (u["halt-at-non-option"]) {
            C = o.slice(V);
            break;
          } else R(ee);
        }
        (K(x, !0),
          K(x, !1),
          L(x),
          Q(),
          Y(x, A.aliases, c, !0),
          H(x),
          u["set-placeholder-key"] && U(x),
          Object.keys(A.counts).forEach(function (V) {
            X(x, V.split(".")) || O(V, 0);
          }),
          f && C.length && (x[p] = []),
          C.forEach(function (V) {
            x[p].push(V);
          }),
          u["camel-case-expansion"] &&
            u["strip-dashed"] &&
            Object.keys(x)
              .filter((V) => V !== "--" && V.includes("-"))
              .forEach((V) => {
                delete x[V];
              }),
          u["strip-aliased"] &&
            [].concat(...Object.keys(a).map((V) => a[V])).forEach((V) => {
              (u["camel-case-expansion"] &&
                V.includes("-") &&
                delete x[
                  V.split(".")
                    .map((ee) => mJ(ee))
                    .join(".")
                ],
                delete x[V]);
            }));
        function R(V) {
          let ee = B("_", V);
          (typeof ee == "string" || typeof ee == "number") && x._.push(ee);
        }
        function P(V, ee, Ce, pe) {
          let be,
            Ne = ne(ee, A.nargs);
          if (((Ne = typeof Ne != "number" || isNaN(Ne) ? 1 : Ne), Ne === 0))
            return (fe(pe) || (v = Error(b("Argument unexpected for: %s", ee))), O(ee, ue(ee)), V);
          let Ge = fe(pe) ? 0 : 1;
          if (u["nargs-eats-options"])
            (Ce.length - (V + 1) + Ge < Ne && (v = Error(b("Not enough arguments following: %s", ee))), (Ge = Ne));
          else {
            for (be = V + 1; be < Ce.length && (!Ce[be].match(/^-[^0-9]/) || Ce[be].match(y) || Z(Ce[be])); be++) Ge++;
            Ge < Ne && (v = Error(b("Not enough arguments following: %s", ee)));
          }
          let Ze = Math.min(Ge, Ne);
          for (!fe(pe) && Ze > 0 && (O(ee, pe), Ze--), be = V + 1; be < Ze + V + 1; be++) O(ee, Ce[be]);
          return V + Ze;
        }
        function D(V, ee, Ce, pe) {
          let be = [],
            Ne = pe || Ce[V + 1],
            Ge = ne(ee, A.nargs);
          if (ne(ee, A.bools) && !/^(true|false)$/.test(Ne)) be.push(!0);
          else if (fe(Ne) || (fe(pe) && /^-/.test(Ne) && !y.test(Ne) && !Z(Ne))) {
            if (c[ee] !== void 0) {
              let Ze = c[ee];
              be = Array.isArray(Ze) ? Ze : [Ze];
            }
          } else {
            fe(pe) || be.push(F(ee, pe, !0));
            for (
              let Ze = V + 1;
              Ze < Ce.length &&
              !(
                (!u["greedy-arrays"] && be.length > 0) ||
                (Ge && typeof Ge == "number" && be.length >= Ge) ||
                ((Ne = Ce[Ze]), /^-/.test(Ne) && !y.test(Ne) && !Z(Ne))
              );
              Ze++
            )
              ((V = Ze), be.push(F(ee, Ne, s)));
          }
          return (
            typeof Ge == "number" &&
              ((Ge && be.length < Ge) || (isNaN(Ge) && be.length === 0)) &&
              (v = Error(b("Not enough arguments following: %s", ee))),
            O(ee, be),
            V
          );
        }
        function O(V, ee, Ce = s) {
          if (/-/.test(V) && u["camel-case-expansion"]) {
            let Ne = V.split(".")
              .map(function (Ge) {
                return mJ(Ge);
              })
              .join(".");
            N(V, Ne);
          }
          let pe = F(V, ee, Ce),
            be = V.split(".");
          (J(x, be, pe),
            A.aliases[V] &&
              A.aliases[V].forEach(function (Ne) {
                let Ge = Ne.split(".");
                J(x, Ge, pe);
              }),
            be.length > 1 &&
              u["dot-notation"] &&
              (A.aliases[be[0]] || []).forEach(function (Ne) {
                let Ge = Ne.split("."),
                  Ze = [].concat(be);
                (Ze.shift(), (Ge = Ge.concat(Ze)), (A.aliases[V] || []).includes(Ge.join(".")) || J(x, Ge, pe));
              }),
            ne(V, A.normalize) &&
              !ne(V, A.arrays) &&
              [V].concat(A.aliases[V] || []).forEach(function (Ge) {
                Object.defineProperty(k, Ge, {
                  enumerable: !0,
                  get() {
                    return ee;
                  },
                  set(Ze) {
                    ee = typeof Ze == "string" ? HN.normalize(Ze) : Ze;
                  },
                });
              }));
        }
        function N(V, ee) {
          ((A.aliases[V] && A.aliases[V].length) || ((A.aliases[V] = [ee]), (h[ee] = !0)),
            (A.aliases[ee] && A.aliases[ee].length) || N(ee, V));
        }
        function F(V, ee, Ce) {
          (Ce && (ee = Siu(ee)), (ne(V, A.bools) || ne(V, A.counts)) && typeof ee == "string" && (ee = ee === "true"));
          let pe = Array.isArray(ee)
            ? ee.map(function (be) {
                return B(V, be);
              })
            : B(V, ee);
          return (
            ne(V, A.counts) && (fe(pe) || typeof pe == "boolean") && (pe = w9r()),
            ne(V, A.normalize) &&
              ne(V, A.arrays) &&
              (Array.isArray(ee) ? (pe = ee.map((be) => HN.normalize(be))) : (pe = HN.normalize(ee))),
            pe
          );
        }
        function B(V, ee) {
          return (
            (!u["parse-positional-numbers"] && V === "_") ||
              (!ne(V, A.strings) &&
                !ne(V, A.bools) &&
                !Array.isArray(ee) &&
                ((m3t(ee) && u["parse-numbers"] && Number.isSafeInteger(Math.floor(parseFloat(`${ee}`)))) ||
                  (!fe(ee) && ne(V, A.numbers))) &&
                (ee = Number(ee))),
            ee
          );
        }
        function L(V) {
          let ee = Object.create(null);
          (Y(ee, A.aliases, c),
            Object.keys(A.configs).forEach(function (Ce) {
              let pe = V[Ce] || ee[Ce];
              if (pe)
                try {
                  let be = null,
                    Ne = HN.resolve(HN.cwd(), pe),
                    Ge = A.configs[Ce];
                  if (typeof Ge == "function") {
                    try {
                      be = Ge(Ne);
                    } catch (Ze) {
                      be = Ze;
                    }
                    if (be instanceof Error) {
                      v = be;
                      return;
                    }
                  } else be = HN.require(Ne);
                  G(be);
                } catch (be) {
                  be.name === "PermissionDenied"
                    ? (v = be)
                    : V[Ce] && (v = Error(b("Invalid JSON config file: %s", pe)));
                }
            }));
        }
        function G(V, ee) {
          Object.keys(V).forEach(function (Ce) {
            let pe = V[Ce],
              be = ee ? ee + "." + Ce : Ce;
            typeof pe == "object" && pe !== null && !Array.isArray(pe) && u["dot-notation"]
              ? G(pe, be)
              : (!X(x, be.split(".")) || (ne(be, A.arrays) && u["combine-arrays"])) && O(be, pe);
          });
        }
        function Q() {
          typeof m < "u" &&
            m.forEach(function (V) {
              G(V);
            });
        }
        function K(V, ee) {
          if (typeof d > "u") return;
          let Ce = typeof d == "string" ? d : "",
            pe = HN.env();
          Object.keys(pe).forEach(function (be) {
            if (Ce === "" || be.lastIndexOf(Ce, 0) === 0) {
              let Ne = be.split("__").map(function (Ge, Ze) {
                return (Ze === 0 && (Ge = Ge.substring(Ce.length)), mJ(Ge));
              });
              ((ee && A.configs[Ne.join(".")]) || !ee) && !X(V, Ne) && O(Ne.join("."), pe[be]);
            }
          });
        }
        function H(V) {
          let ee,
            Ce = new Set();
          Object.keys(V).forEach(function (pe) {
            if (!Ce.has(pe) && ((ee = ne(pe, A.coercions)), typeof ee == "function"))
              try {
                let be = B(pe, ee(V[pe]));
                [].concat(A.aliases[pe] || [], pe).forEach((Ne) => {
                  (Ce.add(Ne), (V[Ne] = be));
                });
              } catch (be) {
                v = be;
              }
          });
        }
        function U(V) {
          return (
            A.keys.forEach((ee) => {
              ~ee.indexOf(".") || (typeof V[ee] > "u" && (V[ee] = void 0));
            }),
            V
          );
        }
        function Y(V, ee, Ce, pe = !1) {
          Object.keys(Ce).forEach(function (be) {
            X(V, be.split(".")) ||
              (J(V, be.split("."), Ce[be]),
              pe && (g[be] = !0),
              (ee[be] || []).forEach(function (Ne) {
                X(V, Ne.split(".")) || J(V, Ne.split("."), Ce[be]);
              }));
          });
        }
        function X(V, ee) {
          let Ce = V;
          (u["dot-notation"] || (ee = [ee.join(".")]),
            ee.slice(0, -1).forEach(function (be) {
              Ce = Ce[be] || {};
            }));
          let pe = ee[ee.length - 1];
          return typeof Ce != "object" ? !1 : pe in Ce;
        }
        function J(V, ee, Ce) {
          let pe = V;
          (u["dot-notation"] || (ee = [ee.join(".")]),
            ee.slice(0, -1).forEach(function (Ye) {
              ((Ye = kUi(Ye)),
                typeof pe == "object" && pe[Ye] === void 0 && (pe[Ye] = {}),
                typeof pe[Ye] != "object" || Array.isArray(pe[Ye])
                  ? (Array.isArray(pe[Ye]) ? pe[Ye].push({}) : (pe[Ye] = [pe[Ye], {}]),
                    (pe = pe[Ye][pe[Ye].length - 1]))
                  : (pe = pe[Ye]));
            }));
          let be = kUi(ee[ee.length - 1]),
            Ne = ne(ee.join("."), A.arrays),
            Ge = Array.isArray(Ce),
            Ze = u["duplicate-arguments-array"];
          (!Ze &&
            ne(be, A.nargs) &&
            ((Ze = !0),
            ((!fe(pe[be]) && A.nargs[be] === 1) || (Array.isArray(pe[be]) && pe[be].length === A.nargs[be])) &&
              (pe[be] = void 0)),
            Ce === w9r()
              ? (pe[be] = w9r(pe[be]))
              : Array.isArray(pe[be])
                ? Ze && Ne && Ge
                  ? (pe[be] = u["flatten-duplicate-arrays"]
                      ? pe[be].concat(Ce)
                      : (Array.isArray(pe[be][0]) ? pe[be] : [pe[be]]).concat([Ce]))
                  : !Ze && !!Ne == !!Ge
                    ? (pe[be] = Ce)
                    : (pe[be] = pe[be].concat([Ce]))
                : pe[be] === void 0 && Ne
                  ? (pe[be] = Ge ? Ce : [Ce])
                  : Ze && !(pe[be] === void 0 || ne(be, A.counts) || ne(be, A.bools))
                    ? (pe[be] = [pe[be], Ce])
                    : (pe[be] = Ce));
        }
        function q(...V) {
          V.forEach(function (ee) {
            Object.keys(ee || {}).forEach(function (Ce) {
              A.aliases[Ce] ||
                ((A.aliases[Ce] = [].concat(a[Ce] || [])),
                A.aliases[Ce].concat(Ce).forEach(function (pe) {
                  if (/-/.test(pe) && u["camel-case-expansion"]) {
                    let be = mJ(pe);
                    be !== Ce && A.aliases[Ce].indexOf(be) === -1 && (A.aliases[Ce].push(be), (h[be] = !0));
                  }
                }),
                A.aliases[Ce].concat(Ce).forEach(function (pe) {
                  if (pe.length > 1 && /[A-Z]/.test(pe) && u["camel-case-expansion"]) {
                    let be = l3t(pe, "-");
                    be !== Ce && A.aliases[Ce].indexOf(be) === -1 && (A.aliases[Ce].push(be), (h[be] = !0));
                  }
                }),
                A.aliases[Ce].forEach(function (pe) {
                  A.aliases[pe] = [Ce].concat(
                    A.aliases[Ce].filter(function (be) {
                      return pe !== be;
                    }),
                  );
                }));
            });
          });
        }
        function ne(V, ee) {
          let Ce = [].concat(A.aliases[V] || [], V),
            pe = Object.keys(ee),
            be = Ce.find((Ne) => pe.includes(Ne));
          return be ? ee[be] : !1;
        }
        function de(V) {
          let ee = Object.keys(A);
          return [].concat(ee.map((pe) => A[pe])).some(function (pe) {
            return Array.isArray(pe) ? pe.includes(V) : pe[V];
          });
        }
        function ce(V, ...ee) {
          return [].concat(...ee).some(function (pe) {
            let be = V.match(pe);
            return be && de(be[1]);
          });
        }
        function ye(V) {
          if (V.match(y) || !V.match(/^-[^-]+/)) return !1;
          let ee = !0,
            Ce,
            pe = V.slice(1).split("");
          for (let be = 0; be < pe.length; be++) {
            if (((Ce = V.slice(be + 2)), !de(pe[be]))) {
              ee = !1;
              break;
            }
            if (
              (pe[be + 1] && pe[be + 1] === "=") ||
              Ce === "-" ||
              (/[A-Za-z]/.test(pe[be]) && /^-?\d+(\.\d*)?(e-?\d+)?$/.test(Ce)) ||
              (pe[be + 1] && pe[be + 1].match(/\W/))
            )
              break;
          }
          return ee;
        }
        function Z(V) {
          return u["unknown-options-as-args"] && oe(V);
        }
        function oe(V) {
          return (
            (V = V.replace(/^-{3,}/, "--")),
            V.match(y) || ye(V)
              ? !1
              : !ce(
                  V,
                  /^-+([^=]+?)=[\s\S]*$/,
                  E,
                  /^-+([^=]+?)$/,
                  /^-+([^=]+?)-$/,
                  /^-+([^=]+?\d+)$/,
                  /^-+([^=]+?)\W+.*$/,
                )
          );
        }
        function ue(V) {
          return !ne(V, A.bools) && !ne(V, A.counts) && `${V}` in c ? c[V] : he(se(V));
        }
        function he(V) {
          return { [Uv.BOOLEAN]: !0, [Uv.STRING]: "", [Uv.NUMBER]: void 0, [Uv.ARRAY]: [] }[V];
        }
        function se(V) {
          let ee = Uv.BOOLEAN;
          return (
            ne(V, A.strings)
              ? (ee = Uv.STRING)
              : ne(V, A.numbers)
                ? (ee = Uv.NUMBER)
                : ne(V, A.bools)
                  ? (ee = Uv.BOOLEAN)
                  : ne(V, A.arrays) && (ee = Uv.ARRAY),
            ee
          );
        }
        function fe(V) {
          return V === void 0;
        }
        function ge() {
          Object.keys(A.counts).find((V) =>
            ne(V, A.arrays)
              ? ((v = Error(b("Invalid configuration: %s, opts.count excludes opts.array.", V))), !0)
              : ne(V, A.nargs)
                ? ((v = Error(b("Invalid configuration: %s, opts.count excludes opts.narg.", V))), !0)
                : !1,
          );
        }
        return {
          aliases: Object.assign({}, A.aliases),
          argv: Object.assign(k, x),
          configuration: u,
          defaulted: Object.assign({}, g),
          error: v,
          newAliases: Object.assign({}, h),
        };
      }
    };
  });
import { format as wiu } from "util";
import { normalize as xiu, resolve as Tiu } from "path";
import { readFileSync as Diu } from "fs";
var x9r,
  T9r,
  D9r,
  NUi,
  PUi,
  Iiu,
  BUi,
  gTe,
  I9r,
  R9r = j(() => {
    S9r();
    OUi();
    ((NUi =
      process && process.env && process.env.YARGS_MIN_NODE_VERSION ? Number(process.env.YARGS_MIN_NODE_VERSION) : 12),
      (PUi =
        (T9r = (x9r = process == null ? void 0 : process.versions) === null || x9r === void 0 ? void 0 : x9r.node) !==
          null && T9r !== void 0
          ? T9r
          : (D9r = process == null ? void 0 : process.version) === null || D9r === void 0
            ? void 0
            : D9r.slice(1)));
    if (PUi && Number(PUi.match(/^([^.]+)/)[1]) < NUi)
      throw Error(
        `yargs parser supports a minimum Node.js version of ${NUi}. Read our version support policy: https://github.com/yargs/yargs-parser#supported-nodejs-versions`,
      );
    ((Iiu = process ? process.env : {}),
      (BUi = new d3t({
        cwd: process.cwd,
        env: () => Iiu,
        format: wiu,
        normalize: xiu,
        resolve: Tiu,
        require: (t) => {
          if (typeof Ae < "u") return Ae(t);
          if (t.match(/\.json$/)) return JSON.parse(Diu(t, "utf8"));
          throw Error("only .json config files are supported in ESM");
        },
      })),
      (gTe = function (e, r) {
        return BUi.parse(e.slice(), r).argv;
      }));
    gTe.detailed = function (t, e) {
      return BUi.parse(t.slice(), e);
    };
    gTe.camelCase = mJ;
    gTe.decamelize = l3t;
    gTe.looksLikeNumber = m3t;
    I9r = gTe;
  });
function LUi(t, e, r) {
  return t.border ? (/[.']-+[.']/.test(e) ? "" : e.trim().length !== 0 ? r : "  ") : "";
}
function Niu(t) {
  let e = t.padding || [],
    r = 1 + (e[p3t] || 0) + (e[f3t] || 0);
  return t.border ? r + 4 : r;
}
function Piu() {
  return typeof process == "object" && process.stdout && process.stdout.columns ? process.stdout.columns : 80;
}
function Biu(t, e) {
  t = t.trim();
  let r = Cy.stringWidth(t);
  return r < e ? " ".repeat(e - r) + t : t;
}
function Liu(t, e) {
  t = t.trim();
  let r = Cy.stringWidth(t);
  return r >= e ? t : " ".repeat((e - r) >> 1) + t;
}
function MUi(t, e) {
  return ((Cy = e), new k9r({ width: t?.width || Piu(), wrap: t?.wrap }));
}
var Riu,
  kiu,
  f3t,
  Oiu,
  p3t,
  k9r,
  Cy,
  FUi = j(() => {
    "use strict";
    ((Riu = { right: Biu, center: Liu }),
      (kiu = 0),
      (f3t = 1),
      (Oiu = 2),
      (p3t = 3),
      (k9r = class {
        constructor(e) {
          var r;
          ((this.width = e.width), (this.wrap = (r = e.wrap) !== null && r !== void 0 ? r : !0), (this.rows = []));
        }
        span(...e) {
          let r = this.div(...e);
          r.span = !0;
        }
        resetOutput() {
          this.rows = [];
        }
        div(...e) {
          if ((e.length === 0 && this.div(""), this.wrap && this.shouldApplyLayoutDSL(...e) && typeof e[0] == "string"))
            return this.applyLayoutDSL(e[0]);
          let r = e.map((n) => (typeof n == "string" ? this.colFromString(n) : n));
          return (this.rows.push(r), r);
        }
        shouldApplyLayoutDSL(...e) {
          return e.length === 1 && typeof e[0] == "string" && /[\t\n]/.test(e[0]);
        }
        applyLayoutDSL(e) {
          let r = e
              .split(
                `
`,
              )
              .map((o) => o.split("	")),
            n = 0;
          return (
            r.forEach((o) => {
              o.length > 1 &&
                Cy.stringWidth(o[0]) > n &&
                (n = Math.min(Math.floor(this.width * 0.5), Cy.stringWidth(o[0])));
            }),
            r.forEach((o) => {
              this.div(
                ...o.map((s, a) => ({
                  text: s.trim(),
                  padding: this.measurePadding(s),
                  width: a === 0 && o.length > 1 ? n : void 0,
                })),
              );
            }),
            this.rows[this.rows.length - 1]
          );
        }
        colFromString(e) {
          return { text: e, padding: this.measurePadding(e) };
        }
        measurePadding(e) {
          let r = Cy.stripAnsi(e);
          return [0, r.match(/\s*$/)[0].length, 0, r.match(/^\s*/)[0].length];
        }
        toString() {
          let e = [];
          return (
            this.rows.forEach((r) => {
              this.rowToString(r, e);
            }),
            e.filter((r) => !r.hidden).map((r) => r.text).join(`
`)
          );
        }
        rowToString(e, r) {
          return (
            this.rasterize(e).forEach((n, o) => {
              let s = "";
              (n.forEach((a, u) => {
                let { width: c } = e[u],
                  m = this.negatePadding(e[u]),
                  d = a;
                if (
                  (m > Cy.stringWidth(a) && (d += " ".repeat(m - Cy.stringWidth(a))),
                  e[u].align && e[u].align !== "left" && this.wrap)
                ) {
                  let p = Riu[e[u].align];
                  ((d = p(d, m)), Cy.stringWidth(d) < m && (d += " ".repeat((c || 0) - Cy.stringWidth(d) - 1)));
                }
                let f = e[u].padding || [0, 0, 0, 0];
                (f[p3t] && (s += " ".repeat(f[p3t])),
                  (s += LUi(e[u], d, "| ")),
                  (s += d),
                  (s += LUi(e[u], d, " |")),
                  f[f3t] && (s += " ".repeat(f[f3t])),
                  o === 0 && r.length > 0 && (s = this.renderInline(s, r[r.length - 1])));
              }),
                r.push({ text: s.replace(/ +$/, ""), span: e.span }));
            }),
            r
          );
        }
        renderInline(e, r) {
          let n = e.match(/^ */),
            o = n ? n[0].length : 0,
            s = r.text,
            a = Cy.stringWidth(s.trimRight());
          return r.span
            ? this.wrap
              ? o < a
                ? e
                : ((r.hidden = !0), s.trimRight() + " ".repeat(o - a) + e.trimLeft())
              : ((r.hidden = !0), s + e)
            : e;
        }
        rasterize(e) {
          let r = [],
            n = this.columnWidths(e),
            o;
          return (
            e.forEach((s, a) => {
              ((s.width = n[a]),
                this.wrap
                  ? (o = Cy.wrap(s.text, this.negatePadding(s), { hard: !0 }).split(`
`))
                  : (o = s.text.split(`
`)),
                s.border &&
                  (o.unshift("." + "-".repeat(this.negatePadding(s) + 2) + "."),
                  o.push("'" + "-".repeat(this.negatePadding(s) + 2) + "'")),
                s.padding &&
                  (o.unshift(...new Array(s.padding[kiu] || 0).fill("")),
                  o.push(...new Array(s.padding[Oiu] || 0).fill(""))),
                o.forEach((u, c) => {
                  r[c] || r.push([]);
                  let m = r[c];
                  for (let d = 0; d < a; d++) m[d] === void 0 && m.push("");
                  m.push(u);
                }));
            }),
            r
          );
        }
        negatePadding(e) {
          let r = e.width || 0;
          return (e.padding && (r -= (e.padding[p3t] || 0) + (e.padding[f3t] || 0)), e.border && (r -= 4), r);
        }
        columnWidths(e) {
          if (!this.wrap) return e.map((a) => a.width || Cy.stringWidth(a.text));
          let r = e.length,
            n = this.width,
            o = e.map((a) => {
              if (a.width) return (r--, (n -= a.width), a.width);
            }),
            s = r ? Math.floor(n / r) : 0;
          return o.map((a, u) => (a === void 0 ? Math.max(s, Niu(e[u])) : a));
        }
      }));
  });
function O9r(t) {
  return t.replace(UUi, "");
}
function $Ui(t, e) {
  let [r, n] = t.match(UUi) || ["", ""];
  t = O9r(t);
  let o = "";
  for (let s = 0; s < t.length; s++)
    (s !== 0 &&
      s % e === 0 &&
      (o += `
`),
      (o += t.charAt(s)));
  return (r && n && (o = `${r}${o}${n}`), o);
}
var UUi,
  jUi = j(() => {
    UUi = new RegExp("\x1B(?:\\[(?:\\d+[ABCDEFGJKSTm]|\\d+;\\d+[Hfm]|\\d+;\\d+;\\d+m|6n|s|u|\\?25[lh])|\\w)", "g");
  });
function N9r(t) {
  return MUi(t, { stringWidth: (e) => [...e].length, stripAnsi: O9r, wrap: $Ui });
}
var QUi = j(() => {
  FUi();
  jUi();
});
import { dirname as GUi, resolve as qUi } from "path";
import { readdirSync as Miu, statSync as Fiu } from "fs";
function HUi(t, e) {
  let r = qUi(".", t),
    n;
  for (Fiu(r).isDirectory() || (r = GUi(r)); ; ) {
    if (((n = e(r, Miu(r))), n)) return qUi(r, n);
    if (((r = GUi((n = r))), n === r)) break;
  }
}
var VUi = j(() => {});
import { readFileSync as Uiu, statSync as $iu, writeFile as jiu } from "fs";
import { format as Qiu } from "util";
import { resolve as Giu } from "path";
var WUi,
  zUi = j(() => {
    WUi = {
      fs: { readFileSync: Uiu, writeFile: jiu },
      format: Qiu,
      resolve: Giu,
      exists: (t) => {
        try {
          return $iu(t).isFile();
        } catch {
          return !1;
        }
      },
    };
  });
function YUi(t, e) {
  aw = e;
  let r = new P9r(t);
  return {
    __: r.__.bind(r),
    __n: r.__n.bind(r),
    setLocale: r.setLocale.bind(r),
    getLocale: r.getLocale.bind(r),
    updateLocale: r.updateLocale.bind(r),
    locale: r.locale,
  };
}
var aw,
  P9r,
  KUi = j(() => {
    P9r = class {
      constructor(e) {
        ((e = e || {}),
          (this.directory = e.directory || "./locales"),
          (this.updateFiles = typeof e.updateFiles == "boolean" ? e.updateFiles : !0),
          (this.locale = e.locale || "en"),
          (this.fallbackToLanguage = typeof e.fallbackToLanguage == "boolean" ? e.fallbackToLanguage : !0),
          (this.cache = Object.create(null)),
          (this.writeQueue = []));
      }
      __(...e) {
        if (typeof arguments[0] != "string") return this._taggedLiteral(arguments[0], ...arguments);
        let r = e.shift(),
          n = function () {};
        return (
          typeof e[e.length - 1] == "function" && (n = e.pop()),
          (n = n || function () {}),
          this.cache[this.locale] || this._readLocaleFile(),
          !this.cache[this.locale][r] && this.updateFiles
            ? ((this.cache[this.locale][r] = r),
              this._enqueueWrite({ directory: this.directory, locale: this.locale, cb: n }))
            : n(),
          aw.format.apply(aw.format, [this.cache[this.locale][r] || r].concat(e))
        );
      }
      __n() {
        let e = Array.prototype.slice.call(arguments),
          r = e.shift(),
          n = e.shift(),
          o = e.shift(),
          s = function () {};
        (typeof e[e.length - 1] == "function" && (s = e.pop()), this.cache[this.locale] || this._readLocaleFile());
        let a = o === 1 ? r : n;
        (this.cache[this.locale][r] && (a = this.cache[this.locale][r][o === 1 ? "one" : "other"]),
          !this.cache[this.locale][r] && this.updateFiles
            ? ((this.cache[this.locale][r] = { one: r, other: n }),
              this._enqueueWrite({ directory: this.directory, locale: this.locale, cb: s }))
            : s());
        let u = [a];
        return (~a.indexOf("%d") && u.push(o), aw.format.apply(aw.format, u.concat(e)));
      }
      setLocale(e) {
        this.locale = e;
      }
      getLocale() {
        return this.locale;
      }
      updateLocale(e) {
        this.cache[this.locale] || this._readLocaleFile();
        for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && (this.cache[this.locale][r] = e[r]);
      }
      _taggedLiteral(e, ...r) {
        let n = "";
        return (
          e.forEach(function (o, s) {
            let a = r[s + 1];
            ((n += o), typeof a < "u" && (n += "%s"));
          }),
          this.__.apply(this, [n].concat([].slice.call(r, 1)))
        );
      }
      _enqueueWrite(e) {
        (this.writeQueue.push(e), this.writeQueue.length === 1 && this._processWriteQueue());
      }
      _processWriteQueue() {
        let e = this,
          r = this.writeQueue[0],
          n = r.directory,
          o = r.locale,
          s = r.cb,
          a = this._resolveLocaleFile(n, o),
          u = JSON.stringify(this.cache[o], null, 2);
        aw.fs.writeFile(a, u, "utf-8", function (c) {
          (e.writeQueue.shift(), e.writeQueue.length > 0 && e._processWriteQueue(), s(c));
        });
      }
      _readLocaleFile() {
        let e = {},
          r = this._resolveLocaleFile(this.directory, this.locale);
        try {
          aw.fs.readFileSync && (e = JSON.parse(aw.fs.readFileSync(r, "utf-8")));
        } catch (n) {
          if ((n instanceof SyntaxError && (n.message = "syntax error in " + r), n.code === "ENOENT")) e = {};
          else throw n;
        }
        this.cache[this.locale] = e;
      }
      _resolveLocaleFile(e, r) {
        let n = aw.resolve(e, "./", r + ".json");
        if (this.fallbackToLanguage && !this._fileExistsSync(n) && ~r.lastIndexOf("_")) {
          let o = aw.resolve(e, "./", r.split("_")[0] + ".json");
          this._fileExistsSync(o) && (n = o);
        }
        return n;
      }
      _fileExistsSync(e) {
        return aw.exists(e);
      }
    };
  });
var qiu,
  JUi,
  XUi = j(() => {
    zUi();
    KUi();
    ((qiu = (t) => YUi(t, WUi)), (JUi = qiu));
  });
import { notStrictEqual as Hiu, strictEqual as Viu } from "assert";
import { inspect as Wiu } from "util";
import { readFileSync as ziu } from "fs";
import { fileURLToPath as Yiu } from "url";
import { basename as Kiu, dirname as Jiu, extname as Xiu, relative as Ziu, resolve as ZUi } from "path";
var eou,
  e$i,
  bTe,
  tou,
  B9r,
  L9r = j(() => {
    "use strict";
    QUi();
    VUi();
    R9r();
    C9r();
    _1e();
    XUi();
    ((eou = "require is not supported by ESM"), (e$i = "loading a directory of commands is not supported yet for ESM"));
    try {
      bTe = Yiu(import.meta.url);
    } catch {
      bTe = process.cwd();
    }
    ((tou = bTe.substring(0, bTe.lastIndexOf("node_modules"))),
      (B9r = {
        assert: { notStrictEqual: Hiu, strictEqual: Viu },
        cliui: N9r,
        findUp: HUi,
        getEnv: (t) => process.env[t],
        inspect: Wiu,
        getCallerFile: () => {
          throw new Mm(e$i);
        },
        getProcessArgvBin: TUi,
        mainFilename: tou || process.cwd(),
        Parser: I9r,
        path: { basename: Kiu, dirname: Jiu, extname: Xiu, relative: Ziu, resolve: ZUi },
        process: {
          argv: () => process.argv,
          cwd: process.cwd,
          emitWarning: (t, e) => process.emitWarning(t, e),
          execPath: () => process.execPath,
          exit: process.exit,
          nextTick: process.nextTick,
          stdColumns: typeof process.stdout.columns < "u" ? process.stdout.columns : null,
        },
        readFileSync: ziu,
        require: () => {
          throw new Mm(eou);
        },
        requireDirectory: () => {
          throw new Mm(e$i);
        },
        stringWidth: (t) => [...t].length,
        y18n: JUi({ directory: ZUi(bTe, "../../../locales"), updateFiles: !1 }),
      }));
  });
var hd,
  ATe = j(() => {
    "use strict";
    hd = class extends Error {
      constructor(r, n, o) {
        super(r);
        this.code = n;
        this.details = o;
        this.name = "HistoryError";
      }
    };
  });
var t$i = {};
Wi(t$i, { ProjectNameGenerator: () => lu, TimestampUtil: () => E1e, UUIDGenerator: () => th });
import { randomUUID as M9r } from "crypto";
import rou from "path";
var th,
  E1e,
  lu,
  TI = j(() => {
    "use strict";
    ((th = class {
      static generate() {
        return M9r();
      }
      static generateSessionId() {
        return `session-${M9r()}`;
      }
      static generateMessageId() {
        return `msg-${M9r()}`;
      }
    }),
      (E1e = class {
        static now() {
          return new Date().toISOString();
        }
        static parse(e) {
          return new Date(e);
        }
        static isValid(e) {
          return !isNaN(Date.parse(e));
        }
      }),
      (lu = class {
        static fromPath(e) {
          let n = rou
            .resolve(e)
            .replace(/^\//, "")
            .replace(/\\/g, "-")
            .replace(/\//g, "-")
            .replace(/:/g, "-")
            .replace(/\s+/g, "-")
            .replace(/[^\w\-_.]/g, "-");
          return (n.startsWith("-") || (n = "-" + n), (n = n.replace(/-+/g, "-")), n || "-unnamed-project");
        }
        static sanitize(e) {
          return e.replace(/[^\w\-_.]/g, "-").toLowerCase();
        }
      }));
  });
import * as _5 from "fs/promises";
import r$i from "path";
import { execSync as yTe } from "child_process";
var Rc,
  h3t,
  DI,
  dJ = j(() => {
    "use strict";
    Ot();
    ((Rc = class {
      static overrideIflowDir;
      static getIflowDir() {
        return this.overrideIflowDir ? this.overrideIflowDir : Tn();
      }
      static getProjectsDir() {
        return r$i.join(this.getIflowDir(), "projects");
      }
      static getProjectDir(e) {
        return r$i.join(this.getProjectsDir(), e);
      }
      static async ensureDir(e) {
        try {
          await _5.mkdir(e, { recursive: !0 });
        } catch (r) {
          if (r.code !== "EEXIST") throw r;
        }
      }
      static async writeJSONL(e, r) {
        let n =
          JSON.stringify(r) +
          `
`;
        await _5.appendFile(e, n, "utf8");
      }
      static async readJSONL(e) {
        try {
          return (await _5.readFile(e, "utf8"))
            .split(
              `
`,
            )
            .filter((n) => n.trim())
            .map((n) => JSON.parse(n));
        } catch (r) {
          if (r.code === "ENOENT") return [];
          throw r;
        }
      }
      static async pathExists(e) {
        try {
          return (await _5.access(e), !0);
        } catch {
          return !1;
        }
      }
      static async readJSON(e) {
        let r = await _5.readFile(e, "utf8");
        return JSON.parse(r);
      }
      static async writeJSON(e, r, n) {
        let o = JSON.stringify(r, null, n?.spaces || 0);
        await _5.writeFile(e, o, "utf8");
      }
      static async readdir(e) {
        return await _5.readdir(e);
      }
      static async remove(e) {
        await _5.unlink(e);
      }
    }),
      (h3t = class {
        static getCurrentBranch(e) {
          try {
            if (!w0() || !ll(e)) return null;
            let r = yTe("git rev-parse --abbrev-ref HEAD", {
              cwd: e,
              encoding: "utf8",
              stdio: ["pipe", "pipe", "ignore"],
            }).trim();
            return r === "HEAD" ? null : r;
          } catch {
            return null;
          }
        }
        static getRepoRoot(e) {
          try {
            return !w0() || !ll(e)
              ? null
              : yTe("git rev-parse --show-toplevel", {
                  cwd: e,
                  encoding: "utf8",
                  stdio: ["pipe", "pipe", "ignore"],
                }).trim();
          } catch {
            return null;
          }
        }
        static isGitRepo(e) {
          try {
            return w0() ? (yTe("git rev-parse --git-dir", { cwd: e, stdio: ["pipe", "pipe", "ignore"] }), !0) : !1;
          } catch {
            return !1;
          }
        }
        static getCommitHash(e) {
          try {
            return !w0() || !ll(e)
              ? null
              : yTe("git rev-parse HEAD", { cwd: e, encoding: "utf8", stdio: ["pipe", "pipe", "ignore"] }).trim();
          } catch {
            return null;
          }
        }
        static getStatus(e) {
          try {
            return !w0() || !ll(e)
              ? null
              : yTe("git status --porcelain", { cwd: e, encoding: "utf8", stdio: ["pipe", "pipe", "ignore"] }).trim();
          } catch {
            return null;
          }
        }
      }),
      (DI = class {
        static collectContext(e) {
          let r = e || process.cwd();
          return {
            cwd: r,
            gitBranch: h3t.getCurrentBranch(r),
            version: this.getVersion(),
            timestamp: new Date().toISOString(),
          };
        }
        static getVersion() {
          return process.env.IFLOW_CLI_VERSION || "1.0.0";
        }
      }));
  });
var v1e,
  F9r = j(() => {
    "use strict";
    TI();
    dJ();
    v1e = class {
      constructor(e) {
        this.sessionId = e;
      }
      messages = new Map();
      messageChains = new Map();
      createUserMessage(e, r = null, n) {
        let o = th.generate(),
          s = DI.collectContext(n?.context?.cwd),
          a = {
            uuid: o,
            parentUuid: r,
            sessionId: this.sessionId,
            timestamp: s.timestamp,
            type: "user",
            isSidechain: n?.isSidechain ?? !1,
            userType: "external",
            message: { role: "user", content: e },
            cwd: s.cwd,
            gitBranch: s.gitBranch,
            version: s.version,
            ...n?.context,
          };
        return (this.addMessage(a), a);
      }
      createAssistantMessage(e, r, n) {
        let s = {
          uuid: th.generate(),
          parentUuid: r,
          sessionId: this.sessionId,
          timestamp: E1e.now(),
          type: "assistant",
          isSidechain: n?.isSidechain ?? !1,
          userType: "external",
          message: {
            id: e.id || th.generateMessageId(),
            type: "message",
            role: "assistant",
            content: e.content || [],
            model: e.model || "unknown",
            stop_reason: e.stop_reason || null,
            stop_sequence: e.stop_sequence || null,
            usage: e.usage || { input_tokens: 0, output_tokens: 0 },
          },
        };
        return (this.addMessage(s), s);
      }
      createToolResultMessage(e, r, n, o, s) {
        let a = th.generate(),
          u = DI.collectContext(),
          c = r;
        try {
          c = JSON.parse(r);
        } catch {}
        let m = {
          uuid: a,
          parentUuid: n,
          sessionId: this.sessionId,
          timestamp: u.timestamp,
          type: "user",
          isSidechain: s?.isSidechain ?? !1,
          userType: "external",
          message: { role: "user", content: [{ tool_use_id: e, type: "tool_result", content: c }] },
          cwd: u.cwd,
          gitBranch: u.gitBranch,
          version: u.version,
          toolUseResult: {
            toolName: o?.toolName || "unknown",
            status: o?.status || "success",
            timestamp: o?.timestamp || Date.now(),
          },
        };
        return (this.addMessage(m), m);
      }
      createCompressionMessage(e, r = null, n, o) {
        let s = th.generate(),
          a = DI.collectContext(),
          u = {
            uuid: s,
            parentUuid: r,
            sessionId: this.sessionId,
            timestamp: a.timestamp,
            type: "user",
            isSidechain: o?.isSidechain ?? !1,
            userType: "external",
            message: { role: "user", content: e },
            cwd: a.cwd,
            gitBranch: a.gitBranch,
            version: a.version,
            isCompactSummary: !0,
            compressionInfo: n,
          };
        return (this.addMessage(u), u);
      }
      createMetaMessage(e, r = null, n) {
        let o = th.generate(),
          s = DI.collectContext(),
          a = {
            uuid: o,
            parentUuid: r,
            sessionId: this.sessionId,
            timestamp: s.timestamp,
            type: "user",
            isSidechain: n?.isSidechain ?? !1,
            userType: "external",
            message: { role: "user", content: e },
            isMeta: !0,
          };
        return (this.addMessage(a), a);
      }
      addMessage(e) {
        if ((this.messages.set(e.uuid, e), e.parentUuid)) {
          let r = this.messageChains.get(e.parentUuid) || [];
          (r.push(e.uuid), this.messageChains.set(e.parentUuid, r));
        }
      }
      getMessageChain(e) {
        let r = [],
          n = new Set(),
          o = (s) => {
            if (n.has(s)) return;
            n.add(s);
            let a = this.messages.get(s);
            a && (r.push(a), (this.messageChains.get(s) || []).forEach(o));
          };
        return (o(e), r.sort((s, a) => new Date(s.timestamp).getTime() - new Date(a.timestamp).getTime()));
      }
      getLatestMessage() {
        return this.messages.size === 0
          ? null
          : Array.from(this.messages.values()).sort(
              (e, r) => new Date(r.timestamp).getTime() - new Date(e.timestamp).getTime(),
            )[0];
      }
      getAllMessages() {
        return Array.from(this.messages.values()).sort(
          (e, r) => new Date(e.timestamp).getTime() - new Date(r.timestamp).getTime(),
        );
      }
      getMessage(e) {
        return this.messages.get(e) || null;
      }
      clear() {
        (this.messages.clear(), this.messageChains.clear());
      }
      getMessageCount() {
        return this.messages.size;
      }
      loadFromMessages(e) {
        this.clear();
        for (let r of e) this.addMessage(r);
      }
    };
  });
import fJ from "path";
import { stat as nou } from "fs/promises";
var VN,
  _Te = j(() => {
    "use strict";
    ATe();
    dJ();
    VN = class {
      constructor(e) {
        this.config = e;
      }
      async saveMessage(e, r) {
        try {
          let n = Rc.getProjectDir(e);
          await Rc.ensureDir(n);
          let o = fJ.join(n, `${r.sessionId}.jsonl`);
          await Rc.writeJSONL(o, r);
        } catch (n) {
          throw new hd(`Failed to save message: ${n}`, "STORAGE_ERROR", {
            error: n,
            projectName: e,
            messageId: r.uuid,
          });
        }
      }
      async saveMessages(e, r) {
        for (let n of r) await this.saveMessage(e, n);
      }
      async loadSession(e, r) {
        try {
          let n = fJ.join(Rc.getProjectDir(e), `${r}.jsonl`),
            s = (await Rc.readJSONL(n)).sort(
              (a, u) => new Date(a.timestamp).getTime() - new Date(u.timestamp).getTime(),
            );
          return this.extractCompressedSessionIfNeeded(s);
        } catch (n) {
          throw n.code === "ENOENT"
            ? new hd(`Session not found: ${r}`, "SESSION_NOT_FOUND", { projectName: e, sessionId: r })
            : new hd(`Failed to load session: ${n}`, "STORAGE_ERROR", { error: n, projectName: e, sessionId: r });
        }
      }
      isCompressionMessage(e) {
        return !!e.isCompactSummary;
      }
      extractCompressedSessionIfNeeded(e) {
        let r = [];
        for (let o = 0; o < e.length; o++) {
          let s = e[o];
          this.isCompressionMessage(s) && r.push(o);
        }
        if (r.length === 0) return e;
        let n = r[r.length - 1];
        return e.slice(n);
      }
      async getProjectSessions(e) {
        try {
          let r = Rc.getProjectDir(e);
          return (await Rc.pathExists(r))
            ? (await Rc.readdir(r)).filter((o) => o.endsWith(".jsonl")).map((o) => fJ.basename(o, ".jsonl"))
            : [];
        } catch (r) {
          return (console.warn(`Failed to get project sessions for ${e}:`, r), []);
        }
      }
      async getRecentSessions(e, r = 10) {
        try {
          let n = await this.getProjectSessions(e);
          if (n.length === 0) return [];
          let o = n.map(async (a) => {
            try {
              let u = fJ.join(Rc.getProjectDir(e), `${a}.jsonl`),
                c = await nou(u),
                m = await Rc.readJSONL(u);
              if (m.length === 0) return null;
              let d = m[0],
                f = m[m.length - 1];
              return {
                sessionId: a,
                projectName: e,
                createdAt: d.timestamp,
                lastActivity: f.timestamp || c.mtime.toISOString(),
                messageCount: m.length,
                initialCwd: "",
                currentBranch: "",
                processId: "",
              };
            } catch (u) {
              return (console.warn(`Failed to get metadata for session ${a}:`, u), null);
            }
          });
          return (await Promise.all(o))
            .filter((a) => a !== null)
            .sort((a, u) => new Date(u.lastActivity).getTime() - new Date(a.lastActivity).getTime())
            .slice(0, r);
        } catch (n) {
          return (console.warn(`Failed to get recent sessions for ${e}:`, n), []);
        }
      }
      async findSessionByProcessId(e) {
        try {
          let r = process.cwd(),
            { ProjectNameGenerator: n } = await Promise.resolve().then(() => (TI(), t$i)),
            o = n.fromPath(r),
            s = 0;
          if (e.startsWith("%")) {
            let u = parseInt(e.substring(1), 10);
            !isNaN(u) && u > 0 && (s = u - 1);
          }
          let a = await this.getRecentSessions(o, s + 1);
          return a.length > s ? a[s] : null;
        } catch (r) {
          return (console.warn(`Failed to find session for ${e}:`, r), null);
        }
      }
      async deleteSession(e, r) {
        try {
          let n = fJ.join(Rc.getProjectDir(e), `${r}.jsonl`);
          (await Rc.pathExists(n)) && (await Rc.remove(n));
        } catch (n) {
          throw new hd(`Failed to delete session: ${n}`, "STORAGE_ERROR", { error: n, projectName: e, sessionId: r });
        }
      }
      async updateProjectMetadata(e, r) {
        try {
          let n = fJ.join(Rc.getIflowDir(), "config"),
            o = fJ.join(n, "projects.json");
          await Rc.ensureDir(n);
          let s = {};
          if (await Rc.pathExists(o))
            try {
              s = await Rc.readJSON(o);
            } catch (a) {
              console.warn("Failed to read projects file, creating new one:", a);
            }
          (s[e] || (s[e] = { name: e, path: e, sessions: [], createdAt: new Date().toISOString() }),
            s[e].sessions.includes(r) || s[e].sessions.push(r),
            (s[e].lastActivity = new Date().toISOString()),
            await Rc.writeJSON(o, s, { spaces: 2 }));
        } catch (n) {
          throw new hd(`Failed to update project metadata: ${n}`, "STORAGE_ERROR", {
            error: n,
            projectName: e,
            sessionId: r,
          });
        }
      }
    };
  });
var ETe,
  $9r = j(() => {
    "use strict";
    ATe();
    F9r();
    _Te();
    TI();
    dJ();
    ETe = class {
      constructor(e) {
        this.config = e;
        this.storage = new VN(e);
      }
      currentSession = null;
      messageManager = null;
      storage;
      async createSession(e, r) {
        let n = th.generateSessionId(),
          o = DI.collectContext(r);
        return (
          (this.currentSession = n),
          (this.messageManager = new v1e(n)),
          await this.storage.updateProjectMetadata(e, n),
          n
        );
      }
      async resumeSession(e, r) {
        try {
          let n = await this.storage.loadSession(e, r);
          ((this.currentSession = r), (this.messageManager = new v1e(r)), this.messageManager.loadFromMessages(n));
        } catch (n) {
          throw n instanceof hd && n.code === "SESSION_NOT_FOUND"
            ? n
            : new hd(`Failed to resume session: ${n}`, "STORAGE_ERROR", { error: n, projectName: e, sessionId: r });
        }
      }
      async resumeSessionByProcessId(e) {
        try {
          let r = await this.storage.findSessionByProcessId(e);
          return r ? (await this.resumeSession(r.projectName, r.sessionId), r.sessionId) : null;
        } catch (r) {
          throw new hd(`Failed to resume session by process ID: ${r}`, "STORAGE_ERROR", { error: r, processId: e });
        }
      }
      async addUserMessage(e, r, n, o) {
        if (!this.messageManager) throw new hd("No active session", "SESSION_NOT_FOUND");
        let s = this.messageManager.createUserMessage(r, n || null, o);
        return (await this.storage.saveMessage(e, s), s);
      }
      async addAssistantMessage(e, r, n, o) {
        if (!this.messageManager) throw new hd("No active session", "SESSION_NOT_FOUND");
        let s = this.messageManager.createAssistantMessage(r, n, o);
        return (await this.storage.saveMessage(e, s), s);
      }
      async addToolResultMessage(e, r, n, o, s, a) {
        if (!this.messageManager) throw new hd("No active session", "SESSION_NOT_FOUND");
        let u = this.messageManager.createToolResultMessage(r, n, o, s, a);
        return (await this.storage.saveMessage(e, u), u);
      }
      async addCompressionMessage(e, r, n, o) {
        if (!this.messageManager) throw new hd("No active session", "SESSION_NOT_FOUND");
        let s = this.formatCompressionSummary(r),
          a = this.messageManager.createCompressionMessage(s, n, r, o);
        return (await this.storage.saveMessage(e, a), a);
      }
      async addMetaMessage(e, r, n, o) {
        if (!this.messageManager) throw new hd("No active session", "SESSION_NOT_FOUND");
        let s = this.messageManager.createMetaMessage(r, n, o);
        return (await this.storage.saveMessage(e, s), s);
      }
      formatCompressionSummary(e) {
        let { summary: r } = e;
        return r;
      }
      getCurrentSessionId() {
        return this.currentSession;
      }
      async getHistory(e, r) {
        let n = r || this.currentSession;
        if (!n) throw new hd("No session specified", "SESSION_NOT_FOUND");
        return await this.storage.loadSession(e, n);
      }
      getCurrentSessionHistory() {
        return this.messageManager ? this.messageManager.getAllMessages() : [];
      }
      getLatestMessage() {
        return this.messageManager ? this.messageManager.getLatestMessage() : null;
      }
      getMessageCount() {
        return this.messageManager ? this.messageManager.getMessageCount() : 0;
      }
      async switchSession(e, r) {
        await this.resumeSession(e, r);
      }
      async deleteSession(e, r) {
        (await this.storage.deleteSession(e, r),
          this.currentSession === r && ((this.currentSession = null), (this.messageManager = null)));
      }
      hasActiveSession() {
        return this.currentSession !== null && this.messageManager !== null;
      }
      clearSession() {
        ((this.currentSession = null), (this.messageManager = null));
      }
      getSessionStats() {
        if (!this.messageManager || !this.currentSession) return null;
        let e = this.messageManager.getAllMessages(),
          r = e.filter((o) => o.type === "user"),
          n = e.filter((o) => o.type === "assistant");
        return {
          sessionId: this.currentSession,
          totalMessages: e.length,
          userMessages: r.length,
          assistantMessages: n.length,
          firstMessage: e[0]?.timestamp || null,
          lastMessage: e[e.length - 1]?.timestamp || null,
        };
      }
    };
  });
import g3t from "path";
var hf,
  j9r = j(() => {
    "use strict";
    ATe();
    $9r();
    _Te();
    dJ();
    TI();
    hf = class {
      sessionManager;
      storage;
      config;
      constructor(e) {
        ((this.config = {
          baseDir: Rc.getIflowDir(),
          maxSessionsPerProject: 100,
          maxMessagesPerSession: 1e4,
          compressionEnabled: !0,
          indexingEnabled: !0,
          ...e,
        }),
          (this.sessionManager = new ETe(this.config)),
          (this.storage = new VN(this.config)));
      }
      async initialize() {
        for (let r = 1; r <= 3; r++)
          try {
            (await Rc.ensureDir(this.config.baseDir),
              await Rc.ensureDir(g3t.join(this.config.baseDir, "projects")),
              await Rc.ensureDir(g3t.join(this.config.baseDir, "config")),
              await Rc.ensureDir(g3t.join(this.config.baseDir, "cache")));
            return;
          } catch (n) {
            if ((console.warn(`History manager initialization attempt ${r} failed:`, n), r === 3))
              throw new hd(`Failed to initialize history system after 3 attempts: ${n}`, "STORAGE_ERROR", {
                error: n,
                attempts: 3,
              });
            await new Promise((o) => setTimeout(o, 100 * r));
          }
      }
      async startConversation(e, r) {
        let n = r || process.cwd(),
          o = e ? lu.fromPath(e) : lu.fromPath(n);
        return await this.sessionManager.createSession(o, n);
      }
      async resumeConversation(e, r) {
        await this.sessionManager.resumeSession(e, r);
      }
      async resumeConversationByProcessId(e) {
        return await this.sessionManager.resumeSessionByProcessId(e);
      }
      async resumeLatestConversation(e) {
        let r = process.cwd(),
          n = e ? lu.fromPath(e) : lu.fromPath(r),
          o = await this.storage.getRecentSessions(n, 1);
        if (o.length === 0) return null;
        let s = o[0];
        return (await this.sessionManager.resumeSession(n, s.sessionId), s.sessionId);
      }
      async setActiveSession(e, r) {
        let n = process.cwd(),
          o = r ? lu.fromPath(r) : lu.fromPath(n);
        await this.sessionManager.resumeSession(o, e);
      }
      async recordUserInput(e, r, n, o) {
        let s = process.cwd(),
          a = n ? lu.fromPath(n) : lu.fromPath(s);
        return (
          this.sessionManager.hasActiveSession() || (await this.sessionManager.createSession(a, s)),
          (await this.sessionManager.addUserMessage(a, e, r, { isSidechain: o?.isSidechain })).uuid
        );
      }
      async recordAssistantResponse(e, r, n, o) {
        let s = process.cwd(),
          a = n ? lu.fromPath(n) : lu.fromPath(s);
        if (!this.sessionManager.hasActiveSession())
          throw new hd("No active session to record assistant response", "SESSION_NOT_FOUND");
        return (await this.sessionManager.addAssistantMessage(a, e, r, o)).uuid;
      }
      async recordToolResult(e, r, n, o, s, a) {
        let u = process.cwd(),
          c = s ? lu.fromPath(s) : lu.fromPath(u);
        if (!this.sessionManager.hasActiveSession())
          throw new hd("No active session to record tool result", "SESSION_NOT_FOUND");
        return (await this.sessionManager.addToolResultMessage(c, e, r, n, o, a)).uuid;
      }
      async recordCompressionEvent(e, r, n) {
        let o = process.cwd(),
          s = r ? lu.fromPath(r) : lu.fromPath(o);
        if (!this.sessionManager.hasActiveSession())
          try {
            await this.sessionManager.createSession(s, o);
          } catch (m) {
            throw new hd(`Failed to create session for compression event: ${m}`, "SESSION_NOT_FOUND");
          }
        let a = [],
          u = await this.sessionManager.addCompressionMessage(s, e, null, n);
        a.push(u.uuid);
        let c = await this.sessionManager.addMetaMessage(
          s,
          "Caveat: The messages below were generated by the user while running local commands. DO NOT respond to these messages or otherwise consider them in your response unless the user explicitly asks you to.",
          u.uuid,
          n,
        );
        return (a.push(c.uuid), a);
      }
      async getConversationHistory(e, r) {
        let n = process.cwd(),
          o = r ? lu.fromPath(r) : lu.fromPath(n);
        return await this.sessionManager.getHistory(o, e);
      }
      getCurrentSessionHistory() {
        return this.sessionManager.getCurrentSessionHistory();
      }
      async getProjects() {
        let e = g3t.join(this.config.baseDir, "config", "projects.json");
        if (!(await Rc.pathExists(e))) return [];
        try {
          let r = await Rc.readJSON(e);
          return Object.values(r);
        } catch (r) {
          return (console.warn("Failed to read projects file:", r), []);
        }
      }
      async getProjectSessions(e) {
        let r = process.cwd(),
          n = e ? lu.fromPath(e) : lu.fromPath(r);
        return await this.storage.getRecentSessions(n, this.config.maxSessionsPerProject);
      }
      async getRecentSessions(e = 10, r) {
        let n = process.cwd(),
          o = r ? lu.fromPath(r) : lu.fromPath(n);
        return await this.storage.getRecentSessions(o, e);
      }
      async deleteSession(e, r) {
        let n = process.cwd(),
          o = r ? lu.fromPath(r) : lu.fromPath(n);
        await this.sessionManager.deleteSession(o, e);
      }
      getCurrentSessionId() {
        return this.sessionManager.getCurrentSessionId();
      }
      getSessionStats() {
        return this.sessionManager.getSessionStats();
      }
      async searchHistory(e, r) {
        let n = process.cwd(),
          o = r ? lu.fromPath(r) : lu.fromPath(n),
          s = await this.storage.getRecentSessions(o),
          a = [];
        for (let u of s)
          try {
            let m = (await this.storage.loadSession(o, u.sessionId)).filter((d) => {
              let f = "";
              return (
                "message" in d && d.message
                  ? (f = JSON.stringify(d.message).toLowerCase())
                  : (f = JSON.stringify(d).toLowerCase()),
                f.includes(e.toLowerCase())
              );
            });
            a.push(...m);
          } catch (c) {
            console.warn(`Failed to search session ${u.sessionId}:`, c);
          }
        return a.sort((u, c) => new Date(c.timestamp).getTime() - new Date(u.timestamp).getTime());
      }
      async exportSession(e, r = "json", n) {
        let o = await this.getConversationHistory(e, n);
        return r === "json" ? JSON.stringify(o, null, 2) : this.convertToMarkdown(o);
      }
      async cleanupOldSessions(e, r) {
        let n = process.cwd(),
          o = r ? lu.fromPath(r) : lu.fromPath(n),
          s = await this.storage.getRecentSessions(o),
          a = new Date(Date.now() - e * 24 * 60 * 60 * 1e3),
          u = 0;
        for (let c of s)
          if (new Date(c.lastActivity) < a)
            try {
              (await this.sessionManager.deleteSession(o, c.sessionId), u++);
            } catch (m) {
              console.warn(`Failed to cleanup session ${c.sessionId}:`, m);
            }
        return u;
      }
      convertToMarkdown(e) {
        let r = `# iFlow\u5BF9\u8BDD\u5386\u53F2

`;
        for (let n of e) {
          let o = new Date(n.timestamp).toLocaleString();
          if (n.type === "user") {
            let s = n;
            ((r += `## \u7528\u6237 (${o})

`),
              "cwd" in s &&
                s.cwd &&
                (r += `**\u76EE\u5F55:** ${s.cwd}

`),
              "gitBranch" in s &&
                s.gitBranch &&
                (r += `**\u5206\u652F:** ${s.gitBranch}

`),
              "message" in s && s.message && "content" in s.message
                ? (r += `${s.message.content}

---

`)
                : (r += `${JSON.stringify(s)}

---

`));
          } else if (n.type === "assistant") {
            let s = n;
            if (
              ((r += `## \u52A9\u624B (${o})

`),
              "message" in s && s.message)
            )
              if (
                ("model" in s.message &&
                  (r += `**\u6A21\u578B:** ${s.message.model}

`),
                "content" in s.message && Array.isArray(s.message.content))
              )
                for (let a of s.message.content)
                  a.type === "text"
                    ? (r += `${a.text}

`)
                    : a.type === "tool_use" &&
                      ((r += `**\u5DE5\u5177\u8C03\u7528:** ${a.name}

`),
                      (r += "```json\n"),
                      (r += JSON.stringify(a.input, null, 2)),
                      (r += "\n```\n\n"));
              else
                r += `${JSON.stringify(s.message)}

`;
            else
              r += `${JSON.stringify(s)}

`;
            r += `---

`;
          } else
            ((r += `## \u5176\u4ED6\u6D88\u606F (${o})

`),
              (r += `${JSON.stringify(n)}

---

`));
        }
        return r;
      }
    };
  });
var WN = j(() => {
  "use strict";
  j9r();
  ATe();
  TI();
  dJ();
  $9r();
  F9r();
  _Te();
});
import uou from "node:process";
import cou from "node:fs/promises";
import { fileURLToPath as lou } from "node:url";
import S1e from "node:path";
async function a$i(t, { cwd: e = uou.cwd(), type: r = "file", stopAt: n } = {}) {
  let o = S1e.resolve(s$i(e) ?? ""),
    { root: s } = S1e.parse(o);
  n = S1e.resolve(o, s$i(n ?? s));
  let a = S1e.isAbsolute(t);
  for (; o; ) {
    let u = a ? t : S1e.join(o, t);
    try {
      let c = await cou.stat(u);
      if ((r === "file" && c.isFile()) || (r === "directory" && c.isDirectory())) return u;
    } catch {}
    if (o === n || o === s) break;
    o = S1e.dirname(o);
  }
}
var s$i,
  u$i = j(() => {
    s$i = (t) => (t instanceof URL ? lou(t) : t);
  });
var m$i = T((_al, Q9r) => {
  var A3t = process || {},
    c$i = A3t.argv || [],
    b3t = A3t.env || {},
    mou =
      !(b3t.NO_COLOR || c$i.includes("--no-color")) &&
      (!!b3t.FORCE_COLOR ||
        c$i.includes("--color") ||
        A3t.platform === "win32" ||
        ((A3t.stdout || {}).isTTY && b3t.TERM !== "dumb") ||
        !!b3t.CI),
    dou =
      (t, e, r = t) =>
      (n) => {
        let o = "" + n,
          s = o.indexOf(e, t.length);
        return ~s ? t + fou(o, e, r, s) + e : t + o + e;
      },
    fou = (t, e, r, n) => {
      let o = "",
        s = 0;
      do ((o += t.substring(s, n) + r), (s = n + e.length), (n = t.indexOf(e, s)));
      while (~n);
      return o + t.substring(s);
    },
    l$i = (t = mou) => {
      let e = t ? dou : () => String;
      return {
        isColorSupported: t,
        reset: e("\x1B[0m", "\x1B[0m"),
        bold: e("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
        dim: e("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
        italic: e("\x1B[3m", "\x1B[23m"),
        underline: e("\x1B[4m", "\x1B[24m"),
        inverse: e("\x1B[7m", "\x1B[27m"),
        hidden: e("\x1B[8m", "\x1B[28m"),
        strikethrough: e("\x1B[9m", "\x1B[29m"),
        black: e("\x1B[30m", "\x1B[39m"),
        red: e("\x1B[31m", "\x1B[39m"),
        green: e("\x1B[32m", "\x1B[39m"),
        yellow: e("\x1B[33m", "\x1B[39m"),
        blue: e("\x1B[34m", "\x1B[39m"),
        magenta: e("\x1B[35m", "\x1B[39m"),
        cyan: e("\x1B[36m", "\x1B[39m"),
        white: e("\x1B[37m", "\x1B[39m"),
        gray: e("\x1B[90m", "\x1B[39m"),
        bgBlack: e("\x1B[40m", "\x1B[49m"),
        bgRed: e("\x1B[41m", "\x1B[49m"),
        bgGreen: e("\x1B[42m", "\x1B[49m"),
        bgYellow: e("\x1B[43m", "\x1B[49m"),
        bgBlue: e("\x1B[44m", "\x1B[49m"),
        bgMagenta: e("\x1B[45m", "\x1B[49m"),
        bgCyan: e("\x1B[46m", "\x1B[49m"),
        bgWhite: e("\x1B[47m", "\x1B[49m"),
        blackBright: e("\x1B[90m", "\x1B[39m"),
        redBright: e("\x1B[91m", "\x1B[39m"),
        greenBright: e("\x1B[92m", "\x1B[39m"),
        yellowBright: e("\x1B[93m", "\x1B[39m"),
        blueBright: e("\x1B[94m", "\x1B[39m"),
        magentaBright: e("\x1B[95m", "\x1B[39m"),
        cyanBright: e("\x1B[96m", "\x1B[39m"),
        whiteBright: e("\x1B[97m", "\x1B[39m"),
        bgBlackBright: e("\x1B[100m", "\x1B[49m"),
        bgRedBright: e("\x1B[101m", "\x1B[49m"),
        bgGreenBright: e("\x1B[102m", "\x1B[49m"),
        bgYellowBright: e("\x1B[103m", "\x1B[49m"),
        bgBlueBright: e("\x1B[104m", "\x1B[49m"),
        bgMagentaBright: e("\x1B[105m", "\x1B[49m"),
        bgCyanBright: e("\x1B[106m", "\x1B[49m"),
        bgWhiteBright: e("\x1B[107m", "\x1B[49m"),
      };
    };
  Q9r.exports = l$i();
  Q9r.exports.createColors = l$i;
});
var d$i = T((y3t) => {
  Object.defineProperty(y3t, "__esModule", { value: !0 });
  y3t.default =
    /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g;
  y3t.matchToToken = function (t) {
    var e = { type: "invalid", value: t[0], closed: void 0 };
    return (
      t[1]
        ? ((e.type = "string"), (e.closed = !!(t[3] || t[4])))
        : t[5]
          ? (e.type = "comment")
          : t[6]
            ? ((e.type = "comment"), (e.closed = !!t[7]))
            : t[8]
              ? (e.type = "regex")
              : t[9]
                ? (e.type = "number")
                : t[10]
                  ? (e.type = "name")
                  : t[11]
                    ? (e.type = "punctuator")
                    : t[12] && (e.type = "whitespace"),
      e
    );
  };
});
var b$i = T((vTe) => {
  "use strict";
  Object.defineProperty(vTe, "__esModule", { value: !0 });
  vTe.isIdentifierChar = g$i;
  vTe.isIdentifierName = bou;
  vTe.isIdentifierStart = h$i;
  var q9r =
      "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC",
    f$i =
      "\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u30FB\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F\uFF65",
    pou = new RegExp("[" + q9r + "]"),
    hou = new RegExp("[" + q9r + f$i + "]");
  q9r = f$i = null;
  var p$i = [
      0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5,
      7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13,
      310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11,
      21, 11, 25, 7, 25, 39, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18,
      14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 5, 57, 28, 11, 0, 9, 21, 43, 17, 47,
      20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36,
      17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4,
      31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47,
      21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38,
      17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2,
      1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 24, 43, 261, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18,
      195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32,
      20, 6, 18, 433, 44, 212, 63, 33, 24, 3, 24, 45, 74, 6, 0, 67, 12, 65, 1, 2, 0, 15, 4, 10, 7381, 42, 31, 98, 114,
      8702, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2,
      1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2,
      24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0,
      322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 208, 30, 2, 2, 2, 1, 2, 6, 3, 4, 10, 1, 225, 6, 2, 3, 2, 1, 2, 14, 2,
      196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1,
      2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16,
      4421, 42719, 33, 4381, 3, 5773, 3, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 8489,
    ],
    gou = [
      509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 78,
      5, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13,
      2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4,
      4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16,
      16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4,
      0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 199, 7, 137, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2,
      1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 55, 9, 266, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14,
      11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519,
      45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6,
      2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 233, 0, 3, 0, 8, 1, 6, 0,
      475, 6, 110, 6, 6, 9, 4759, 9, 787719, 239,
    ];
  function G9r(t, e) {
    let r = 65536;
    for (let n = 0, o = e.length; n < o; n += 2) {
      if (((r += e[n]), r > t)) return !1;
      if (((r += e[n + 1]), r >= t)) return !0;
    }
    return !1;
  }
  function h$i(t) {
    return t < 65
      ? t === 36
      : t <= 90
        ? !0
        : t < 97
          ? t === 95
          : t <= 122
            ? !0
            : t <= 65535
              ? t >= 170 && pou.test(String.fromCharCode(t))
              : G9r(t, p$i);
  }
  function g$i(t) {
    return t < 48
      ? t === 36
      : t < 58
        ? !0
        : t < 65
          ? !1
          : t <= 90
            ? !0
            : t < 97
              ? t === 95
              : t <= 122
                ? !0
                : t <= 65535
                  ? t >= 170 && hou.test(String.fromCharCode(t))
                  : G9r(t, p$i) || G9r(t, gou);
  }
  function bou(t) {
    let e = !0;
    for (let r = 0; r < t.length; r++) {
      let n = t.charCodeAt(r);
      if ((n & 64512) === 55296 && r + 1 < t.length) {
        let o = t.charCodeAt(++r);
        (o & 64512) === 56320 && (n = 65536 + ((n & 1023) << 10) + (o & 1023));
      }
      if (e) {
        if (((e = !1), !h$i(n))) return !1;
      } else if (!g$i(n)) return !1;
    }
    return !e;
  }
});
var E$i = T((pJ) => {
  "use strict";
  Object.defineProperty(pJ, "__esModule", { value: !0 });
  pJ.isKeyword = vou;
  pJ.isReservedWord = A$i;
  pJ.isStrictBindOnlyReservedWord = _$i;
  pJ.isStrictBindReservedWord = Eou;
  pJ.isStrictReservedWord = y$i;
  var H9r = {
      keyword: [
        "break",
        "case",
        "catch",
        "continue",
        "debugger",
        "default",
        "do",
        "else",
        "finally",
        "for",
        "function",
        "if",
        "return",
        "switch",
        "throw",
        "try",
        "var",
        "const",
        "while",
        "with",
        "new",
        "this",
        "super",
        "class",
        "extends",
        "export",
        "import",
        "null",
        "true",
        "false",
        "in",
        "instanceof",
        "typeof",
        "void",
        "delete",
      ],
      strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
      strictBind: ["eval", "arguments"],
    },
    Aou = new Set(H9r.keyword),
    you = new Set(H9r.strict),
    _ou = new Set(H9r.strictBind);
  function A$i(t, e) {
    return (e && t === "await") || t === "enum";
  }
  function y$i(t, e) {
    return A$i(t, e) || you.has(t);
  }
  function _$i(t) {
    return _ou.has(t);
  }
  function Eou(t, e) {
    return y$i(t, e) || _$i(t);
  }
  function vou(t) {
    return Aou.has(t);
  }
});
var v$i = T((RI) => {
  "use strict";
  Object.defineProperty(RI, "__esModule", { value: !0 });
  Object.defineProperty(RI, "isIdentifierChar", {
    enumerable: !0,
    get: function () {
      return V9r.isIdentifierChar;
    },
  });
  Object.defineProperty(RI, "isIdentifierName", {
    enumerable: !0,
    get: function () {
      return V9r.isIdentifierName;
    },
  });
  Object.defineProperty(RI, "isIdentifierStart", {
    enumerable: !0,
    get: function () {
      return V9r.isIdentifierStart;
    },
  });
  Object.defineProperty(RI, "isKeyword", {
    enumerable: !0,
    get: function () {
      return CTe.isKeyword;
    },
  });
  Object.defineProperty(RI, "isReservedWord", {
    enumerable: !0,
    get: function () {
      return CTe.isReservedWord;
    },
  });
  Object.defineProperty(RI, "isStrictBindOnlyReservedWord", {
    enumerable: !0,
    get: function () {
      return CTe.isStrictBindOnlyReservedWord;
    },
  });
  Object.defineProperty(RI, "isStrictBindReservedWord", {
    enumerable: !0,
    get: function () {
      return CTe.isStrictBindReservedWord;
    },
  });
  Object.defineProperty(RI, "isStrictReservedWord", {
    enumerable: !0,
    get: function () {
      return CTe.isStrictReservedWord;
    },
  });
  var V9r = b$i(),
    CTe = E$i();
});
var O$i = T((STe) => {
  "use strict";
  Object.defineProperty(STe, "__esModule", { value: !0 });
  var W9r = m$i(),
    C$i = d$i(),
    S$i = v$i();
  function Cou() {
    return typeof process == "object" && (process.env.FORCE_COLOR === "0" || process.env.FORCE_COLOR === "false")
      ? !1
      : W9r.isColorSupported;
  }
  var _3t = (t, e) => (r) => t(e(r));
  function T$i(t) {
    return {
      keyword: t.cyan,
      capitalized: t.yellow,
      jsxIdentifier: t.yellow,
      punctuator: t.yellow,
      number: t.magenta,
      string: t.green,
      regex: t.magenta,
      comment: t.gray,
      invalid: _3t(_3t(t.white, t.bgRed), t.bold),
      gutter: t.gray,
      marker: _3t(t.red, t.bold),
      message: _3t(t.red, t.bold),
      reset: t.reset,
    };
  }
  var Sou = T$i(W9r.createColors(!0)),
    wou = T$i(W9r.createColors(!1));
  function D$i(t) {
    return t ? Sou : wou;
  }
  var xou = new Set(["as", "async", "from", "get", "of", "set"]),
    Tou = /\r\n|[\n\r\u2028\u2029]/,
    Dou = /^[()[\]{}]$/,
    I$i;
  {
    let t = /^[a-z][\w-]*$/i,
      e = function (r, n, o) {
        if (r.type === "name") {
          if (S$i.isKeyword(r.value) || S$i.isStrictReservedWord(r.value, !0) || xou.has(r.value)) return "keyword";
          if (t.test(r.value) && (o[n - 1] === "<" || o.slice(n - 2, n) === "</")) return "jsxIdentifier";
          if (r.value[0] !== r.value[0].toLowerCase()) return "capitalized";
        }
        return r.type === "punctuator" && Dou.test(r.value)
          ? "bracket"
          : r.type === "invalid" && (r.value === "@" || r.value === "#")
            ? "punctuator"
            : r.type;
      };
    I$i = function* (r) {
      let n;
      for (; (n = C$i.default.exec(r)); ) {
        let o = C$i.matchToToken(n);
        yield { type: e(o, n.index, r), value: o.value };
      }
    };
  }
  function R$i(t) {
    if (t === "") return "";
    let e = D$i(!0),
      r = "";
    for (let { type: n, value: o } of I$i(t))
      n in e
        ? (r += o.split(Tou).map((s) => e[n](s)).join(`
`))
        : (r += o);
    return r;
  }
  var w$i = !1,
    x$i = /\r\n|[\n\r\u2028\u2029]/;
  function Iou(t, e, r) {
    let n = Object.assign({ column: 0, line: -1 }, t.start),
      o = Object.assign({}, n, t.end),
      { linesAbove: s = 2, linesBelow: a = 3 } = r || {},
      u = n.line,
      c = n.column,
      m = o.line,
      d = o.column,
      f = Math.max(u - (s + 1), 0),
      p = Math.min(e.length, m + a);
    (u === -1 && (f = 0), m === -1 && (p = e.length));
    let h = m - u,
      g = {};
    if (h)
      for (let b = 0; b <= h; b++) {
        let A = b + u;
        if (!c) g[A] = !0;
        else if (b === 0) {
          let y = e[A - 1].length;
          g[A] = [c, y - c + 1];
        } else if (b === h) g[A] = [0, d];
        else {
          let y = e[A - b].length;
          g[A] = [0, y];
        }
      }
    else c === d ? (c ? (g[u] = [c, 0]) : (g[u] = !0)) : (g[u] = [c, d - c]);
    return { start: f, end: p, markerLines: g };
  }
  function k$i(t, e, r = {}) {
    let n = r.forceColor || (Cou() && r.highlightCode),
      o = D$i(n),
      s = t.split(x$i),
      { start: a, end: u, markerLines: c } = Iou(e, s, r),
      m = e.start && typeof e.start.column == "number",
      d = String(u).length,
      p = (n ? R$i(t) : t)
        .split(x$i, u)
        .slice(a, u)
        .map((h, g) => {
          let b = a + 1 + g,
            y = ` ${` ${b}`.slice(-d)} |`,
            E = c[b],
            v = !c[b + 1];
          if (E) {
            let C = "";
            if (Array.isArray(E)) {
              let x = h.slice(0, Math.max(E[0] - 1, 0)).replace(/[^\t]/g, " "),
                k = E[1] || 1;
              ((C = [
                `
 `,
                o.gutter(y.replace(/\d/g, " ")),
                " ",
                x,
                o.marker("^").repeat(k),
              ].join("")),
                v && r.message && (C += " " + o.message(r.message)));
            }
            return [o.marker(">"), o.gutter(y), h.length > 0 ? ` ${h}` : "", C].join("");
          } else return ` ${o.gutter(y)}${h.length > 0 ? ` ${h}` : ""}`;
        }).join(`
`);
    return (
      r.message &&
        !m &&
        (p = `${" ".repeat(d + 1)}${r.message}
${p}`),
      n ? o.reset(p) : p
    );
  }
  function Rou(t, e, r, n = {}) {
    if (!w$i) {
      w$i = !0;
      let s = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
      if (process.emitWarning) process.emitWarning(s, "DeprecationWarning");
      else {
        let a = new Error(s);
        ((a.name = "DeprecationWarning"), console.warn(new Error(s)));
      }
    }
    return ((r = Math.max(r, 0)), k$i(t, { start: { column: r, line: e } }, n));
  }
  STe.codeFrameColumns = k$i;
  STe.default = Rou;
  STe.highlight = R$i;
});
function Oou(t, e, r) {
  let n =
      e === 0
        ? -1
        : t.lastIndexOf(
            `
`,
            e - 1,
          ),
    [o, s] = kou(r);
  return { line: n === -1 ? o : t.slice(0, n + 1).match(/\n/g).length + o, column: e - n - 1 + s };
}
function z9r(t, e, r) {
  if (typeof t != "string") throw new TypeError("Text parameter should be a string");
  if (!Number.isInteger(e)) throw new TypeError("Index parameter should be an integer");
  if (e < 0 || e > t.length) throw new RangeError("Index out of bounds");
  return Oou(t, e, r);
}
var kou,
  N$i = j(() => {
    kou = ({ oneBased: t, oneBasedLine: e = t, oneBasedColumn: r = t } = {}) => [e ? 1 : 0, r ? 1 : 0];
  });
function K9r(t, e, r) {
  typeof e == "string" && ((r = e), (e = void 0));
  try {
    return JSON.parse(t, e);
  } catch (n) {
    throw new Y9r({ jsonParseError: n, fileName: r, input: t });
  }
}
var P$i,
  Nou,
  Y9r,
  Pou,
  Bou,
  B$i = j(() => {
    P$i = Se(O$i(), 1);
    N$i();
    ((Nou = (t) => `\\u{${t.codePointAt(0).toString(16)}}`),
      (Y9r = class t extends Error {
        name = "JSONError";
        fileName;
        #e;
        #t;
        #r;
        #n;
        #i;
        constructor(e) {
          if (typeof e == "string") (super(), (this.#r = e));
          else {
            let { jsonParseError: r, fileName: n, input: o } = e;
            (super(void 0, { cause: r }), (this.#e = o), (this.#t = r), (this.fileName = n));
          }
          Error.captureStackTrace?.(this, t);
        }
        get message() {
          this.#r ??= `${Bou(this.#t.message)}${this.#e === "" ? " while parsing empty string" : ""}`;
          let { codeFrame: e } = this;
          return `${this.#r}${this.fileName ? ` in ${this.fileName}` : ""}${
            e
              ? `

${e}
`
              : ""
          }`;
        }
        set message(e) {
          this.#r = e;
        }
        #o(e) {
          if (!this.#t) return;
          let r = this.#e,
            n = Pou(r, this.#t.message);
          if (n) return (0, P$i.codeFrameColumns)(r, { start: n }, { highlightCode: e });
        }
        get codeFrame() {
          return ((this.#n ??= this.#o(!0)), this.#n);
        }
        get rawCodeFrame() {
          return ((this.#i ??= this.#o(!1)), this.#i);
        }
      }),
      (Pou = (t, e) => {
        let r = e.match(/in JSON at position (?<index>\d+)(?: \(line (?<line>\d+) column (?<column>\d+)\))?$/);
        if (!r) return;
        let { index: n, line: o, column: s } = r.groups;
        return o && s ? { line: Number(o), column: Number(s) } : z9r(t, Number(n), { oneBased: !0 });
      }),
      (Bou = (t) => t.replace(/(?<=^Unexpected token )(?<quote>')?(.)\k<quote>/, (e, r, n) => `"${n}"(${Nou(n)})`)));
  });