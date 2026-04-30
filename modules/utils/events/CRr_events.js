/**
 * @module CRr
 * @category utils/events
 * @label events
 * @position 68 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (CRr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var CRr = T((ql) => {
  "use strict";
  var apo =
      (ql && ql.__createBinding) ||
      (Object.create
        ? function (t, e, r, n) {
            n === void 0 && (n = r);
            var o = Object.getOwnPropertyDescriptor(e, r);
            ((!o || ("get" in o ? !e.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return e[r];
                },
              }),
              Object.defineProperty(t, n, o));
          }
        : function (t, e, r, n) {
            (n === void 0 && (n = r), (t[n] = e[r]));
          }),
    upo =
      (ql && ql.__setModuleDefault) ||
      (Object.create
        ? function (t, e) {
            Object.defineProperty(t, "default", { enumerable: !0, value: e });
          }
        : function (t, e) {
            t.default = e;
          }),
    _Rr =
      (ql && ql.__importStar) ||
      function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (t != null) for (var r in t) r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && apo(e, t, r);
        return (upo(e, t), e);
      };
  Object.defineProperty(ql, "__esModule", { value: !0 });
  ql.env = ql.DebugLogBackendBase = ql.placeholder = ql.AdhocDebugLogger = ql.LogSeverity = void 0;
  ql.getNodeBackend = H6t;
  ql.getDebugBackend = lpo;
  ql.getStructuredBackend = mpo;
  ql.setBackend = dpo;
  ql.log = vRr;
  var cpo = Ae("node:events"),
    u3e = _Rr(Ae("node:process")),
    ERr = _Rr(Ae("node:util")),
    n6 = yRr(),
    DC;
  (function (t) {
    ((t.DEFAULT = "DEFAULT"), (t.DEBUG = "DEBUG"), (t.INFO = "INFO"), (t.WARNING = "WARNING"), (t.ERROR = "ERROR"));
  })(DC || (ql.LogSeverity = DC = {}));
  var c3e = class extends cpo.EventEmitter {
    constructor(e, r) {
      (super(),
        (this.namespace = e),
        (this.upstream = r),
        (this.func = Object.assign(this.invoke.bind(this), { instance: this, on: (n, o) => this.on(n, o) })),
        (this.func.debug = (...n) => this.invokeSeverity(DC.DEBUG, ...n)),
        (this.func.info = (...n) => this.invokeSeverity(DC.INFO, ...n)),
        (this.func.warn = (...n) => this.invokeSeverity(DC.WARNING, ...n)),
        (this.func.error = (...n) => this.invokeSeverity(DC.ERROR, ...n)),
        (this.func.sublog = (n) => vRr(n, this.func)));
    }
    invoke(e, ...r) {
      (this.upstream && this.upstream(e, ...r), this.emit("log", e, r));
    }
    invokeSeverity(e, ...r) {
      this.invoke({ severity: e }, ...r);
    }
  };
  ql.AdhocDebugLogger = c3e;
  ql.placeholder = new c3e("", () => {}).func;
  var Oee = class {
    constructor() {
      var e;
      ((this.cached = new Map()), (this.filters = []), (this.filtersSet = !1));
      let r = (e = u3e.env[ql.env.nodeEnables]) !== null && e !== void 0 ? e : "*";
      (r === "all" && (r = "*"), (this.filters = r.split(",")));
    }
    log(e, r, ...n) {
      try {
        this.filtersSet || (this.setFilters(), (this.filtersSet = !0));
        let o = this.cached.get(e);
        (o || ((o = this.makeLogger(e)), this.cached.set(e, o)), o(r, ...n));
      } catch (o) {
        console.error(o);
      }
    }
  };
  ql.DebugLogBackendBase = Oee;
  var wke = class extends Oee {
    constructor() {
      (super(...arguments), (this.enabledRegexp = /.*/g));
    }
    isEnabled(e) {
      return this.enabledRegexp.test(e);
    }
    makeLogger(e) {
      return this.enabledRegexp.test(e)
        ? (r, ...n) => {
            var o;
            let s = `${n6.Colours.green}${e}${n6.Colours.reset}`,
              a = `${n6.Colours.yellow}${u3e.pid}${n6.Colours.reset}`,
              u;
            switch (r.severity) {
              case DC.ERROR:
                u = `${n6.Colours.red}${r.severity}${n6.Colours.reset}`;
                break;
              case DC.INFO:
                u = `${n6.Colours.magenta}${r.severity}${n6.Colours.reset}`;
                break;
              case DC.WARNING:
                u = `${n6.Colours.yellow}${r.severity}${n6.Colours.reset}`;
                break;
              default:
                u = (o = r.severity) !== null && o !== void 0 ? o : DC.DEFAULT;
                break;
            }
            let c = ERr.formatWithOptions({ colors: n6.Colours.enabled }, ...n),
              m = Object.assign({}, r);
            delete m.severity;
            let d = Object.getOwnPropertyNames(m).length ? JSON.stringify(m) : "",
              f = d ? `${n6.Colours.grey}${d}${n6.Colours.reset}` : "";
            console.error("%s [%s|%s] %s%s", a, s, u, c, d ? ` ${f}` : "");
          }
        : () => {};
    }
    setFilters() {
      let r = this.filters
        .join(",")
        .replace(/[|\\{}()[\]^$+?.]/g, "\\$&")
        .replace(/\*/g, ".*")
        .replace(/,/g, "$|^");
      this.enabledRegexp = new RegExp(`^${r}$`, "i");
    }
  };
  function H6t() {
    return new wke();
  }
  var V6t = class extends Oee {
    constructor(e) {
      (super(), (this.debugPkg = e));
    }
    makeLogger(e) {
      let r = this.debugPkg(e);
      return (n, ...o) => {
        r(o[0], ...o.slice(1));
      };
    }
    setFilters() {
      var e;
      let r = (e = u3e.env.NODE_DEBUG) !== null && e !== void 0 ? e : "";
      u3e.env.NODE_DEBUG = `${r}${r ? "," : ""}${this.filters.join(",")}`;
    }
  };
  function lpo(t) {
    return new V6t(t);
  }
  var W6t = class extends Oee {
    constructor(e) {
      var r;
      (super(), (this.upstream = (r = e) !== null && r !== void 0 ? r : new wke()));
    }
    makeLogger(e) {
      let r = this.upstream.makeLogger(e);
      return (n, ...o) => {
        var s;
        let a = (s = n.severity) !== null && s !== void 0 ? s : DC.INFO,
          u = Object.assign({ severity: a, message: ERr.format(...o) }, n),
          c = JSON.stringify(u);
        r(n, c);
      };
    }
    setFilters() {
      this.upstream.setFilters();
    }
  };
  function mpo(t) {
    return new W6t(t);
  }
  ql.env = { nodeEnables: "GOOGLE_SDK_NODE_LOGGING" };
  var z6t = new Map(),
    b_;
  function dpo(t) {
    ((b_ = t), z6t.clear());
  }
  function vRr(t, e) {
    if (!u3e.env[ql.env.nodeEnables] || !t) return ql.placeholder;
    e && (t = `${e.instance.namespace}:${t}`);
    let n = z6t.get(t);
    if (n) return n.func;
    if (b_ === null) return ql.placeholder;
    b_ === void 0 && (b_ = H6t());
    let o = (() => {
      let s;
      return new c3e(t, (u, ...c) => {
        if (s !== b_) {
          if (b_ === null) return;
          (b_ === void 0 && (b_ = H6t()), (s = b_));
        }
        b_?.log(t, u, ...c);
      });
    })();
    return (z6t.set(t, o), o.func);
  }
});