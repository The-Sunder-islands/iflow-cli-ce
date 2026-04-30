/**
 * @module pDr
 * @category app/terminal
 * @label iflow-terminal
 * @position 32 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pDr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pDr = T((AEu, fDr) => {
  "use strict";
  var edo = lDr(),
    tdo = typeof process == "object" && process && typeof process.cwd == "function" ? process.cwd() : ".",
    dDr = []
      .concat(Ae("module").builtinModules, "bootstrap_node", "node")
      .map(
        (t) => new RegExp(`(?:\\((?:node:)?${t}(?:\\.js)?:\\d+:\\d+\\)$|^\\s*at (?:node:)?${t}(?:\\.js)?:\\d+:\\d+$)`),
      );
  dDr.push(
    /\((?:node:)?internal\/[^:]+:\d+:\d+\)$/,
    /\s*at (?:node:)?internal\/[^:]+:\d+:\d+$/,
    /\/\.node-spawn-wrap-\w+-\w+\/node:\d+:\d+\)?$/,
  );
  var t6t = class t {
    constructor(e) {
      ((e = { ignoredPackages: [], ...e }),
        "internals" in e || (e.internals = t.nodeInternals()),
        "cwd" in e || (e.cwd = tdo),
        (this._cwd = e.cwd.replace(/\\/g, "/")),
        (this._internals = [].concat(e.internals, rdo(e.ignoredPackages))),
        (this._wrapCallSite = e.wrapCallSite || !1));
    }
    static nodeInternals() {
      return [...dDr];
    }
    clean(e, r = 0) {
      ((r = " ".repeat(r)),
        Array.isArray(e) ||
          (e = e.split(`
`)),
        !/^\s*at /.test(e[0]) && /^\s*at /.test(e[1]) && (e = e.slice(1)));
      let n = !1,
        o = null,
        s = [];
      return (
        e.forEach((a) => {
          if (((a = a.replace(/\\/g, "/")), this._internals.some((c) => c.test(a)))) return;
          let u = /^\s*at /.test(a);
          (n ? (a = a.trimEnd().replace(/^(\s+)at /, "$1")) : ((a = a.trim()), u && (a = a.slice(3))),
            (a = a.replace(`${this._cwd}/`, "")),
            a && (u ? (o && (s.push(o), (o = null)), s.push(a)) : ((n = !0), (o = a))));
        }),
        s
          .map(
            (a) => `${r}${a}
`,
          )
          .join("")
      );
    }
    captureString(e, r = this.captureString) {
      typeof e == "function" && ((r = e), (e = 1 / 0));
      let { stackTraceLimit: n } = Error;
      e && (Error.stackTraceLimit = e);
      let o = {};
      Error.captureStackTrace(o, r);
      let { stack: s } = o;
      return ((Error.stackTraceLimit = n), this.clean(s));
    }
    capture(e, r = this.capture) {
      typeof e == "function" && ((r = e), (e = 1 / 0));
      let { prepareStackTrace: n, stackTraceLimit: o } = Error;
      ((Error.prepareStackTrace = (u, c) => (this._wrapCallSite ? c.map(this._wrapCallSite) : c)),
        e && (Error.stackTraceLimit = e));
      let s = {};
      Error.captureStackTrace(s, r);
      let { stack: a } = s;
      return (Object.assign(Error, { prepareStackTrace: n, stackTraceLimit: o }), a);
    }
    at(e = this.at) {
      let [r] = this.capture(1, e);
      if (!r) return {};
      let n = { line: r.getLineNumber(), column: r.getColumnNumber() };
      (mDr(n, r.getFileName(), this._cwd),
        r.isConstructor() && Object.defineProperty(n, "constructor", { value: !0, configurable: !0 }),
        r.isEval() && (n.evalOrigin = r.getEvalOrigin()),
        r.isNative() && (n.native = !0));
      let o;
      try {
        o = r.getTypeName();
      } catch {}
      o && o !== "Object" && o !== "[object Object]" && (n.type = o);
      let s = r.getFunctionName();
      s && (n.function = s);
      let a = r.getMethodName();
      return (a && s !== a && (n.method = a), n);
    }
    parseLine(e) {
      let r = e && e.match(ndo);
      if (!r) return null;
      let n = r[1] === "new",
        o = r[2],
        s = r[3],
        a = r[4],
        u = Number(r[5]),
        c = Number(r[6]),
        m = r[7],
        d = r[8],
        f = r[9],
        p = r[10] === "native",
        h = r[11] === ")",
        g,
        b = {};
      if ((d && (b.line = Number(d)), f && (b.column = Number(f)), h && m)) {
        let A = 0;
        for (let y = m.length - 1; y > 0; y--)
          if (m.charAt(y) === ")") A++;
          else if (m.charAt(y) === "(" && m.charAt(y - 1) === " " && (A--, A === -1 && m.charAt(y - 1) === " ")) {
            let E = m.slice(0, y - 1);
            ((m = m.slice(y + 1)), (o += ` (${E}`));
            break;
          }
      }
      if (o) {
        let A = o.match(ido);
        A && ((o = A[1]), (g = A[2]));
      }
      return (
        mDr(b, m, this._cwd),
        n && Object.defineProperty(b, "constructor", { value: !0, configurable: !0 }),
        s && ((b.evalOrigin = s), (b.evalLine = u), (b.evalColumn = c), (b.evalFile = a && a.replace(/\\/g, "/"))),
        p && (b.native = !0),
        o && (b.function = o),
        g && o !== g && (b.method = g),
        b
      );
    }
  };
  function mDr(t, e, r) {
    e && ((e = e.replace(/\\/g, "/")), e.startsWith(`${r}/`) && (e = e.slice(r.length + 1)), (t.file = e));
  }
  function rdo(t) {
    if (t.length === 0) return [];
    let e = t.map((r) => edo(r));
    return new RegExp(`[/\\\\]node_modules[/\\\\](?:${e.join("|")})[/\\\\][^:]+:\\d+:\\d+`);
  }
  var ndo = new RegExp(
      "^(?:\\s*at )?(?:(new) )?(?:(.*?) \\()?(?:eval at ([^ ]+) \\((.+?):(\\d+):(\\d+)\\), )?(?:(.+?):(\\d+):(\\d+)|(native))(\\)?)$",
    ),
    ido = /^(.*?) \[as (.*?)\]$/;
  fDr.exports = t6t;
});
var odo,
  hDr,
  gDr = j(() => {
    ((odo = (t, e = 2) => t.replace(/^\t+/gm, (r) => " ".repeat(r.length * e))), (hDr = odo));
  });
var sdo,
  ado,
  bDr,
  ADr = j(() => {
    gDr();
    ((sdo = (t, e) => {
      let r = [],
        n = t - e,
        o = t + e;
      for (let s = n; s <= o; s++) r.push(s);
      return r;
    }),
      (ado = (t, e, r = {}) => {
        var n;
        if (typeof t != "string") throw new TypeError("Source code is missing.");
        if (!e || e < 1) throw new TypeError("Line number must start from `1`.");
        let o = hDr(t).split(/\r?\n/);
        if (!(e > o.length))
          return sdo(e, (n = r.around) !== null && n !== void 0 ? n : 3)
            .filter((s) => o[s - 1] !== void 0)
            .map((s) => ({ line: s, value: o[s - 1] }));
      }),
      (bDr = ado));
  });
var yDr,
  oR,
  Aee = j(() => {
    ((yDr = Se(Yt(), 1)), (oR = (0, yDr.createContext)({ isScreenReaderEnabled: !1 })));
  });
var _Dr,
  HRe,
  r6t = j(() => {
    ((_Dr = Se(Yt(), 1)), (HRe = (0, _Dr.createContext)(void 0)));
  });
var nB,
  EDr,
  ie,
  VRe = j(() => {
    nB = Se(Yt(), 1);
    Aee();
    r6t();
    EDr = (0, nB.forwardRef)(
      (
        { children: t, backgroundColor: e, "aria-label": r, "aria-hidden": n, "aria-role": o, "aria-state": s, ...a },
        u,
      ) => {
        let { isScreenReaderEnabled: c } = (0, nB.useContext)(oR),
          m = r ? nB.default.createElement("ink-text", null, r) : void 0;
        if (c && n) return null;
        let d = nB.default.createElement(
          "ink-box",
          {
            ref: u,
            style: {
              flexWrap: "nowrap",
              flexDirection: "row",
              flexGrow: 0,
              flexShrink: 1,
              ...a,
              backgroundColor: e,
              overflowX: a.overflowX ?? a.overflow ?? "visible",
              overflowY: a.overflowY ?? a.overflow ?? "visible",
            },
            internal_accessibility: { role: o, state: s },
          },
          c && m ? m : t,
        );
        return e ? nB.default.createElement(HRe.Provider, { value: e }, d) : d;
      },
    );
    EDr.displayName = "Box";
    ie = EDr;
  });
function W({
  color: t,
  backgroundColor: e,
  dimColor: r = !1,
  bold: n = !1,
  italic: o = !1,
  underline: s = !1,
  strikethrough: a = !1,
  inverse: u = !1,
  wrap: c = "wrap",
  children: m,
  "aria-label": d,
  "aria-hidden": f = !1,
}) {
  let { isScreenReaderEnabled: p } = (0, Hhe.useContext)(oR),
    h = (0, Hhe.useContext)(HRe),
    g = p && d ? d : m;
  if (g == null) return null;
  let b = (A) => {
    (r && (A = Zd.dim(A)), t && (A = Xw(A, t, "foreground")));
    let y = e ?? h;
    return (
      y && (A = Xw(A, y, "background")),
      n && (A = Zd.bold(A)),
      o && (A = Zd.italic(A)),
      s && (A = Zd.underline(A)),
      a && (A = Zd.strikethrough(A)),
      u && (A = Zd.inverse(A)),
      A
    );
  };
  return p && f
    ? null
    : Hhe.default.createElement(
        "ink-text",
        { style: { flexGrow: 0, flexShrink: 1, flexDirection: "row", textWrap: c }, internal_transform: b },
        p && d ? d : m,
      );
}
var Hhe,
  n6t = j(() => {
    Hhe = Se(Yt(), 1);
    SRe();
    wRe();
    Aee();
    r6t();
  });
import * as WRe from "node:fs";
import { cwd as CDr } from "node:process";
function s6t({ error: t }) {
  let e = t.stack
      ? t.stack
          .split(
            `
`,
          )
          .slice(1)
      : void 0,
    r = e ? vDr.parseLine(e[0]) : void 0,
    n = i6t(r?.file),
    o,
    s = 0;
  if (n && r?.line && WRe.existsSync(n)) {
    let a = WRe.readFileSync(n, "utf8");
    if (((o = bDr(a, r.line)), o)) for (let { line: u } of o) s = Math.max(s, String(u).length);
  }
  return Df.default.createElement(
    ie,
    { flexDirection: "column", padding: 1 },
    Df.default.createElement(
      ie,
      null,
      Df.default.createElement(W, { backgroundColor: "red", color: "white" }, " ", "ERROR", " "),
      Df.default.createElement(W, null, " ", t.message),
    ),
    r &&
      n &&
      Df.default.createElement(
        ie,
        { marginTop: 1 },
        Df.default.createElement(W, { dimColor: !0 }, n, ":", r.line, ":", r.column),
      ),
    r &&
      o &&
      Df.default.createElement(
        ie,
        { marginTop: 1, flexDirection: "column" },
        o.map(({ line: a, value: u }) =>
          Df.default.createElement(
            ie,
            { key: a },
            Df.default.createElement(
              ie,
              { width: s + 1 },
              Df.default.createElement(
                W,
                {
                  dimColor: a !== r.line,
                  backgroundColor: a === r.line ? "red" : void 0,
                  color: a === r.line ? "white" : void 0,
                  "aria-label": a === r.line ? `Line ${a}, error` : `Line ${a}`,
                },
                String(a).padStart(s, " "),
                ":",
              ),
            ),
            Df.default.createElement(
              W,
              { key: a, backgroundColor: a === r.line ? "red" : void 0, color: a === r.line ? "white" : void 0 },
              " " + u,
            ),
          ),
        ),
      ),
    t.stack &&
      Df.default.createElement(
        ie,
        { marginTop: 1, flexDirection: "column" },
        t.stack
          .split(
            `
`,
          )
          .slice(1)
          .map((a) => {
            let u = vDr.parseLine(a);
            return u
              ? Df.default.createElement(
                  ie,
                  { key: a },
                  Df.default.createElement(W, { dimColor: !0 }, "- "),
                  Df.default.createElement(W, { dimColor: !0, bold: !0 }, u.function),
                  Df.default.createElement(
                    W,
                    {
                      dimColor: !0,
                      color: "gray",
                      "aria-label": `at ${i6t(u.file) ?? ""} line ${u.line} column ${u.column}`,
                    },
                    " ",
                    "(",
                    i6t(u.file) ?? "",
                    ":",
                    u.line,
                    ":",
                    u.column,
                    ")",
                  ),
                )
              : Df.default.createElement(
                  ie,
                  { key: a },
                  Df.default.createElement(W, { dimColor: !0 }, "- "),
                  Df.default.createElement(W, { dimColor: !0, bold: !0 }, a, "\\t", " "),
                );
          }),
      ),
  );
}
var Df,
  o6t,
  i6t,
  vDr,
  SDr = j(() => {
    ((Df = Se(Yt(), 1)), (o6t = Se(pDr(), 1)));
    ADr();
    VRe();
    n6t();
    ((i6t = (t) => t?.replace(`file://${CDr()}/`, "")),
      (vDr = new o6t.default({ cwd: CDr(), internals: o6t.default.nodeInternals() })));
  });
import { EventEmitter as udo } from "node:events";
import cdo from "node:process";
var sR,
  ldo,
  mdo,
  ddo,
  Vhe,
  wDr = j(() => {
    sR = Se(Yt(), 1);
    W9t();
    K9t();
    J9t();
    X9t();
    e6t();
    qRe();
    SDr();
    ((ldo = "	"),
      (mdo = "\x1B[Z"),
      (ddo = "\x1B"),
      (Vhe = class extends sR.PureComponent {
        static displayName = "InternalApp";
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        state = { isFocusEnabled: !0, activeFocusId: void 0, focusables: [], error: void 0 };
        rawModeEnabledCount = 0;
        internal_eventEmitter = new udo();
        isRawModeSupported() {
          return this.props.stdin.isTTY;
        }
        render() {
          return sR.default.createElement(
            Y9t.Provider,
            { value: { exit: this.handleExit } },
            sR.default.createElement(
              jRe.Provider,
              {
                value: {
                  stdin: this.props.stdin,
                  setRawMode: this.handleSetRawMode,
                  isRawModeSupported: this.isRawModeSupported(),
                  internal_exitOnCtrlC: this.props.exitOnCtrlC,
                  internal_eventEmitter: this.internal_eventEmitter,
                },
              },
              sR.default.createElement(
                QRe.Provider,
                { value: { stdout: this.props.stdout, write: this.props.writeToStdout } },
                sR.default.createElement(
                  Z9t.Provider,
                  { value: { stderr: this.props.stderr, write: this.props.writeToStderr } },
                  sR.default.createElement(
                    GRe.Provider,
                    {
                      value: {
                        activeId: this.state.activeFocusId,
                        add: this.addFocusable,
                        remove: this.removeFocusable,
                        activate: this.activateFocusable,
                        deactivate: this.deactivateFocusable,
                        enableFocus: this.enableFocus,
                        disableFocus: this.disableFocus,
                        focusNext: this.focusNext,
                        focusPrevious: this.focusPrevious,
                        focus: this.focus,
                      },
                    },
                    this.state.error ? sR.default.createElement(s6t, { error: this.state.error }) : this.props.children,
                  ),
                ),
              ),
            ),
          );
        }
        componentDidMount() {
          rB.hide(this.props.stdout);
        }
        componentWillUnmount() {
          (rB.show(this.props.stdout), this.isRawModeSupported() && this.handleSetRawMode(!1));
        }
        componentDidCatch(e) {
          this.handleExit(e);
        }
        handleSetRawMode = (e) => {
          let { stdin: r } = this.props;
          if (!this.isRawModeSupported())
            throw r === cdo.stdin
              ? new Error(`Raw mode is not supported on the current process.stdin, which Ink uses as input stream by default.
Read about how to prevent this error on https://github.com/vadimdemedes/ink/#israwmodesupported`)
              : new Error(`Raw mode is not supported on the stdin provided to Ink.
Read about how to prevent this error on https://github.com/vadimdemedes/ink/#israwmodesupported`);
          if ((r.setEncoding("utf8"), e)) {
            (this.rawModeEnabledCount === 0 &&
              (r.ref(), r.setRawMode(!0), r.addListener("readable", this.handleReadable)),
              this.rawModeEnabledCount++);
            return;
          }
          --this.rawModeEnabledCount === 0 &&
            (r.setRawMode(!1), r.removeListener("readable", this.handleReadable), r.unref());
        };
        handleReadable = () => {
          let e;
          for (; (e = this.props.stdin.read()) !== null; )
            (this.handleInput(e), this.internal_eventEmitter.emit("input", e));
        };
        handleInput = (e) => {
          (e === "" && this.props.exitOnCtrlC && this.handleExit(),
            e === ddo && this.state.activeFocusId && this.setState({ activeFocusId: void 0 }),
            this.state.isFocusEnabled &&
              this.state.focusables.length > 0 &&
              (e === ldo && this.focusNext(), e === mdo && this.focusPrevious()));
        };
        handleExit = (e) => {
          (this.isRawModeSupported() && this.handleSetRawMode(!1), this.props.onExit(e));
        };
        enableFocus = () => {
          this.setState({ isFocusEnabled: !0 });
        };
        disableFocus = () => {
          this.setState({ isFocusEnabled: !1 });
        };
        focus = (e) => {
          this.setState((r) => (r.focusables.some((o) => o?.id === e) ? { activeFocusId: e } : r));
        };
        focusNext = () => {
          this.setState((e) => {
            let r = e.focusables.find((o) => o.isActive)?.id;
            return { activeFocusId: this.findNextFocusable(e) ?? r };
          });
        };
        focusPrevious = () => {
          this.setState((e) => {
            let r = e.focusables.findLast((o) => o.isActive)?.id;
            return { activeFocusId: this.findPreviousFocusable(e) ?? r };
          });
        };
        addFocusable = (e, { autoFocus: r }) => {
          this.setState((n) => {
            let o = n.activeFocusId;
            return (!o && r && (o = e), { activeFocusId: o, focusables: [...n.focusables, { id: e, isActive: !0 }] });
          });
        };
        removeFocusable = (e) => {
          this.setState((r) => ({
            activeFocusId: r.activeFocusId === e ? void 0 : r.activeFocusId,
            focusables: r.focusables.filter((n) => n.id !== e),
          }));
        };
        activateFocusable = (e) => {
          this.setState((r) => ({ focusables: r.focusables.map((n) => (n.id !== e ? n : { id: e, isActive: !0 })) }));
        };
        deactivateFocusable = (e) => {
          this.setState((r) => ({
            activeFocusId: r.activeFocusId === e ? void 0 : r.activeFocusId,
            focusables: r.focusables.map((n) => (n.id !== e ? n : { id: e, isActive: !1 })),
          }));
        };
        findNextFocusable = (e) => {
          let r = e.focusables.findIndex((n) => n.id === e.activeFocusId);
          for (let n = r + 1; n < e.focusables.length; n++) {
            let o = e.focusables[n];
            if (o?.isActive) return o.id;
          }
        };
        findPreviousFocusable = (e) => {
          let r = e.focusables.findIndex((n) => n.id === e.activeFocusId);
          for (let n = r - 1; n >= 0; n--) {
            let o = e.focusables[n];
            if (o?.isActive) return o.id;
          }
        };
      }));
  });
import xDr from "node:process";
var a6t,
  DDr,
  IDr,
  TDr,
  Whe,
  RDr = j(async () => {
    a6t = Se(Yt(), 1);
    gSr();
    bhe();
    g8t();
    SSr();
    DDr = Se(RSr(), 1);
    PSr();
    IDr = Se(E8t(), 1);
    await tG();
    P8t();
    await D9t();
    await BTr();
    await t9t();
    XTr();
    z9t();
    wDr();
    Aee();
    ((TDr = () => {}),
      (Whe = class {
        options;
        log;
        throttledLog;
        isScreenReaderEnabled;
        isUnmounted;
        lastOutput;
        lastOutputHeight;
        lastTerminalWidth;
        container;
        rootNode;
        fullStaticOutput;
        exitPromise;
        restoreConsole;
        unsubscribeResize;
        constructor(e) {
          (b8t(this),
            (this.options = e),
            (this.rootNode = rRe("ink-root")),
            (this.rootNode.onComputeLayout = this.calculateLayout),
            (this.isScreenReaderEnabled = e.isScreenReaderEnabled ?? xDr.env.INK_SCREEN_READER === "true"));
          let r = e.debug || this.isScreenReaderEnabled,
            n = e.maxFps ?? 30,
            o = n > 0 ? Math.max(1, Math.ceil(1e3 / n)) : 0;
          ((this.rootNode.onRender = r ? this.onRender : $7e(this.onRender, o, { leading: !0, trailing: !0 })),
            (this.rootNode.onImmediateRender = this.onRender),
            (this.log = JTr.create(e.stdout, { incremental: e.incrementalRendering })),
            (this.throttledLog = r ? this.log : $7e(this.log, void 0, { leading: !0, trailing: !0 })),
            (this.isUnmounted = !1),
            (this.lastOutput = ""),
            (this.lastOutputHeight = 0),
            (this.lastTerminalWidth = this.getTerminalWidth()),
            (this.fullStaticOutput = ""),
            (this.container = iR.createContainer(
              this.rootNode,
              IDr.LegacyRoot,
              null,
              !1,
              null,
              "id",
              () => {},
              () => {},
              () => {},
              () => {},
              null,
            )),
            (this.unsubscribeExit = (0, DDr.default)(this.unmount, { alwaysLast: !1 })),
            xDr.env.DEV === "true" &&
              iR.injectIntoDevTools({ bundleType: 0, version: "16.13.1", rendererPackageName: "ink" }),
            e.patchConsole && this.patchConsole(),
            Y7 ||
              (e.stdout.on("resize", this.resized),
              (this.unsubscribeResize = () => {
                e.stdout.off("resize", this.resized);
              })));
        }
        getTerminalWidth = () => this.options.stdout.columns || 80;
        resized = () => {
          let e = this.getTerminalWidth();
          (e < this.lastTerminalWidth && (this.log.clear(), (this.lastOutput = "")),
            this.calculateLayout(),
            this.onRender(),
            (this.lastTerminalWidth = e));
        };
        resolveExitPromise = () => {};
        rejectExitPromise = () => {};
        unsubscribeExit = () => {};
        calculateLayout = () => {
          let e = this.getTerminalWidth();
          (this.rootNode.yogaNode.setWidth(e),
            this.rootNode.yogaNode.calculateLayout(void 0, void 0, gi.DIRECTION_LTR));
        };
        onRender = () => {
          if (this.isUnmounted) return;
          let e = performance.now(),
            { output: r, outputHeight: n, staticOutput: o } = PTr(this.rootNode, this.isScreenReaderEnabled);
          this.options.onRender?.({ renderTime: performance.now() - e });
          let s =
            o &&
            o !==
              `
`;
          if (this.options.debug) {
            (s && (this.fullStaticOutput += o), this.options.stdout.write(this.fullStaticOutput + r));
            return;
          }
          if (Y7) {
            (s && this.options.stdout.write(o), (this.lastOutput = r), (this.lastOutputHeight = n));
            return;
          }
          if (this.isScreenReaderEnabled) {
            if (s) {
              let c = this.lastOutputHeight > 0 ? M1.eraseLines(this.lastOutputHeight) : "";
              (this.options.stdout.write(c + o), (this.lastOutputHeight = 0));
            }
            if (r === this.lastOutput && !s) return;
            let a = this.options.stdout.columns || 80,
              u = vhe(r, a, { trim: !1, hard: !0 });
            if (s) this.options.stdout.write(u);
            else {
              let c = this.lastOutputHeight > 0 ? M1.eraseLines(this.lastOutputHeight) : "";
              this.options.stdout.write(c + u);
            }
            ((this.lastOutput = r),
              (this.lastOutputHeight =
                u === ""
                  ? 0
                  : u.split(`
`).length));
            return;
          }
          if ((s && (this.fullStaticOutput += o), this.lastOutputHeight >= this.options.stdout.rows)) {
            (this.options.stdout.write(M1.clearTerminal + this.fullStaticOutput + r),
              (this.lastOutput = r),
              (this.lastOutputHeight = n),
              this.log.sync(r));
            return;
          }
          (s && (this.log.clear(), this.options.stdout.write(o), this.log(r)),
            !s && r !== this.lastOutput && this.throttledLog(r),
            (this.lastOutput = r),
            (this.lastOutputHeight = n));
        };
        render(e) {
          let r = a6t.default.createElement(
            oR.Provider,
            { value: { isScreenReaderEnabled: this.isScreenReaderEnabled } },
            a6t.default.createElement(
              Vhe,
              {
                stdin: this.options.stdin,
                stdout: this.options.stdout,
                stderr: this.options.stderr,
                writeToStdout: this.writeToStdout,
                writeToStderr: this.writeToStderr,
                exitOnCtrlC: this.options.exitOnCtrlC,
                onExit: this.unmount,
              },
              e,
            ),
          );
          (iR.updateContainerSync(r, this.container, null, TDr), iR.flushSyncWork());
        }
        writeToStdout(e) {
          if (!this.isUnmounted) {
            if (this.options.debug) {
              this.options.stdout.write(e + this.fullStaticOutput + this.lastOutput);
              return;
            }
            if (Y7) {
              this.options.stdout.write(e);
              return;
            }
            (this.log.clear(), this.options.stdout.write(e), this.log(this.lastOutput));
          }
        }
        writeToStderr(e) {
          if (!this.isUnmounted) {
            if (this.options.debug) {
              (this.options.stderr.write(e), this.options.stdout.write(this.fullStaticOutput + this.lastOutput));
              return;
            }
            if (Y7) {
              this.options.stderr.write(e);
              return;
            }
            (this.log.clear(), this.options.stderr.write(e), this.log(this.lastOutput));
          }
        }
        unmount(e) {
          this.isUnmounted ||
            (this.calculateLayout(),
            this.onRender(),
            this.unsubscribeExit(),
            typeof this.restoreConsole == "function" && this.restoreConsole(),
            typeof this.unsubscribeResize == "function" && this.unsubscribeResize(),
            Y7
              ? this.options.stdout.write(
                  this.lastOutput +
                    `
`,
                )
              : this.options.debug || this.log.done(),
            (this.isUnmounted = !0),
            iR.updateContainerSync(null, this.container, null, TDr),
            iR.flushSyncWork(),
            bee.delete(this.options.stdout),
            e instanceof Error ? this.rejectExitPromise(e) : this.resolveExitPromise());
        }
        async waitUntilExit() {
          return (
            (this.exitPromise ||= new Promise((e, r) => {
              ((this.resolveExitPromise = e), (this.rejectExitPromise = r));
            })),
            this.exitPromise
          );
        }
        clear() {
          !Y7 && !this.options.debug && this.log.clear();
        }
        patchConsole() {
          this.options.debug ||
            (this.restoreConsole = NSr((e, r) => {
              (e === "stdout" && this.writeToStdout(r),
                e === "stderr" && (r.startsWith("The above error occurred") || this.writeToStderr(r)));
            }));
        }
      }));
  });
import { Stream as fdo } from "node:stream";
import zRe from "node:process";
var pdo,
  YRe,
  hdo,
  gdo,
  kDr = j(async () => {
    await RDr();
    z9t();
    ((pdo = (t, e) => {
      let r = {
          stdout: zRe.stdout,
          stdin: zRe.stdin,
          stderr: zRe.stderr,
          debug: !1,
          exitOnCtrlC: !0,
          patchConsole: !0,
          maxFps: 30,
          incrementalRendering: !1,
          ...hdo(e),
        },
        n = gdo(r.stdout, () => new Whe(r));
      return (
        n.render(t),
        {
          rerender: n.render,
          unmount() {
            n.unmount();
          },
          waitUntilExit: n.waitUntilExit,
          cleanup: () => bee.delete(r.stdout),
          clear: n.clear,
        }
      );
    }),
      (YRe = pdo),
      (hdo = (t = {}) => (t instanceof fdo ? { stdout: t, stdin: zRe.stdin } : t)),
      (gdo = (t, e) => {
        let r = bee.get(t);
        return (r || ((r = e()), bee.set(t, r)), r);
      }));
  });
function KRe(t) {
  let { items: e, children: r, style: n } = t,
    [o, s] = (0, aR.useState)(0),
    a = (0, aR.useMemo)(() => e.slice(o), [e, o]);
  (0, aR.useLayoutEffect)(() => {
    s(e.length);
  }, [e.length]);
  let u = a.map((m, d) => r(m, o + d)),
    c = (0, aR.useMemo)(() => ({ position: "absolute", flexDirection: "column", ...n }), [n]);
  return aR.default.createElement("ink-box", { internal_static: !0, style: c }, u);
}
var aR,
  ODr = j(() => {
    aR = Se(Yt(), 1);
  });
function yee({ children: t, transform: e, accessibilityLabel: r }) {
  let { isScreenReaderEnabled: n } = (0, JRe.useContext)(oR);
  return t == null
    ? null
    : JRe.default.createElement(
        "ink-text",
        { style: { flexGrow: 0, flexShrink: 1, flexDirection: "row" }, internal_transform: e },
        n && r ? r : t,
      );
}
var JRe,
  NDr = j(() => {
    JRe = Se(Yt(), 1);
    Aee();
  });
function e6({ count: t = 1 }) {
  return PDr.default.createElement(
    "ink-text",
    null,
    `
`.repeat(t),
  );
}
var PDr,
  BDr = j(() => {
    PDr = Se(Yt(), 1);
  });
var bdo,
  LDr = j(() => {
    bdo = Se(Yt(), 1);
    VRe();
  });
import { Buffer as Ado } from "node:buffer";
var ydo,
  _do,
  MDr,
  FDr,
  Edo,
  vdo,
  Cdo,
  UDr,
  $Dr = j(() => {
    ((ydo = /^(?:\x1b)([a-zA-Z0-9])$/),
      (_do = /^(?:\x1b+)(O|N|\[|\[\[)(?:(\d+)(?:;(\d+))?([~^$])|(?:1;)?(\d+)?([a-zA-Z]))/),
      (MDr = {
        OP: "f1",
        OQ: "f2",
        OR: "f3",
        OS: "f4",
        "[11~": "f1",
        "[12~": "f2",
        "[13~": "f3",
        "[14~": "f4",
        "[[A": "f1",
        "[[B": "f2",
        "[[C": "f3",
        "[[D": "f4",
        "[[E": "f5",
        "[15~": "f5",
        "[17~": "f6",
        "[18~": "f7",
        "[19~": "f8",
        "[20~": "f9",
        "[21~": "f10",
        "[23~": "f11",
        "[24~": "f12",
        "[A": "up",
        "[B": "down",
        "[C": "right",
        "[D": "left",
        "[E": "clear",
        "[F": "end",
        "[H": "home",
        OA: "up",
        OB: "down",
        OC: "right",
        OD: "left",
        OE: "clear",
        OF: "end",
        OH: "home",
        "[1~": "home",
        "[2~": "insert",
        "[3~": "delete",
        "[4~": "end",
        "[5~": "pageup",
        "[6~": "pagedown",
        "[[5~": "pageup",
        "[[6~": "pagedown",
        "[7~": "home",
        "[8~": "end",
        "[a": "up",
        "[b": "down",
        "[c": "right",
        "[d": "left",
        "[e": "clear",
        "[2$": "insert",
        "[3$": "delete",
        "[5$": "pageup",
        "[6$": "pagedown",
        "[7$": "home",
        "[8$": "end",
        Oa: "up",
        Ob: "down",
        Oc: "right",
        Od: "left",
        Oe: "clear",
        "[2^": "insert",
        "[3^": "delete",
        "[5^": "pageup",
        "[6^": "pagedown",
        "[7^": "home",
        "[8^": "end",
        "[Z": "tab",
      }),
      (FDr = [...Object.values(MDr), "backspace"]),
      (Edo = (t) => ["[a", "[b", "[c", "[d", "[e", "[2$", "[3$", "[5$", "[6$", "[7$", "[8$", "[Z"].includes(t)),
      (vdo = (t) => ["Oa", "Ob", "Oc", "Od", "Oe", "[2^", "[3^", "[5^", "[6^", "[7^", "[8^"].includes(t)),
      (Cdo = (t = "") => {
        let e;
        Ado.isBuffer(t)
          ? t[0] > 127 && t[1] === void 0
            ? ((t[0] -= 128), (t = "\x1B" + String(t)))
            : (t = String(t))
          : t !== void 0 && typeof t != "string"
            ? (t = String(t))
            : t || (t = "");
        let r = { name: "", ctrl: !1, meta: !1, shift: !1, option: !1, sequence: t, raw: t };
        if (((r.sequence = r.sequence || t || r.name), t === "\r")) ((r.raw = void 0), (r.name = "return"));
        else if (
          t ===
          `
`
        )
          r.name = "enter";
        else if (t === "	") r.name = "tab";
        else if (t === "\b" || t === "\x1B\b") ((r.name = "backspace"), (r.meta = t.charAt(0) === "\x1B"));
        else if (t === "\x7F" || t === "\x1B\x7F") ((r.name = "delete"), (r.meta = t.charAt(0) === "\x1B"));
        else if (t === "\x1B" || t === "\x1B\x1B") ((r.name = "escape"), (r.meta = t.length === 2));
        else if (t === " " || t === "\x1B ") ((r.name = "space"), (r.meta = t.length === 2));
        else if (t.length === 1 && t <= "") ((r.name = String.fromCharCode(t.charCodeAt(0) + 97 - 1)), (r.ctrl = !0));
        else if (t.length === 1 && t >= "0" && t <= "9") r.name = "number";
        else if (t.length === 1 && t >= "a" && t <= "z") r.name = t;
        else if (t.length === 1 && t >= "A" && t <= "Z") ((r.name = t.toLowerCase()), (r.shift = !0));
        else if ((e = ydo.exec(t))) ((r.meta = !0), (r.shift = /^[A-Z]$/.test(e[1])));
        else if ((e = _do.exec(t))) {
          let n = [...t];
          n[0] === "\x1B" && n[1] === "\x1B" && (r.option = !0);
          let o = [e[1], e[2], e[4], e[6]].filter(Boolean).join(""),
            s = (e[3] || e[5] || 1) - 1;
          ((r.ctrl = !!(s & 4)),
            (r.meta = !!(s & 10)),
            (r.shift = !!(s & 1)),
            (r.code = o),
            (r.name = MDr[o]),
            (r.shift = Edo(o) || r.shift),
            (r.ctrl = vdo(o) || r.ctrl));
        }
        return r;
      }),
      (UDr = Cdo));
  });
var jDr,
  Sdo,
  Zw,
  XRe = j(() => {
    jDr = Se(Yt(), 1);
    J9t();
    ((Sdo = () => (0, jDr.useContext)(jRe)), (Zw = Sdo));
  });
var u6t,
  wdo,
  zhe,
  QDr = j(async () => {
    u6t = Se(Yt(), 1);
    $Dr();
    await D9t();
    XRe();
    ((wdo = (t, e = {}) => {
      let { stdin: r, setRawMode: n, internal_exitOnCtrlC: o, internal_eventEmitter: s } = Zw();
      ((0, u6t.useEffect)(() => {
        if (e.isActive !== !1)
          return (
            n(!0),
            () => {
              n(!1);
            }
          );
      }, [e.isActive, n]),
        (0, u6t.useEffect)(() => {
          if (e.isActive === !1) return;
          let a = (u) => {
            let c = UDr(u),
              m = {
                upArrow: c.name === "up",
                downArrow: c.name === "down",
                leftArrow: c.name === "left",
                rightArrow: c.name === "right",
                pageDown: c.name === "pagedown",
                pageUp: c.name === "pageup",
                home: c.name === "home",
                end: c.name === "end",
                return: c.name === "return",
                escape: c.name === "escape",
                ctrl: c.ctrl,
                shift: c.shift,
                tab: c.name === "tab",
                backspace: c.name === "backspace",
                delete: c.name === "delete",
                meta: c.meta || c.name === "escape" || c.option,
              },
              d = c.ctrl ? c.name : c.sequence;
            (FDr.includes(c.name) && (d = ""),
              d.startsWith("\x1B") && (d = d.slice(1)),
              d.length === 1 && typeof d[0] == "string" && /[A-Z]/.test(d[0]) && (m.shift = !0),
              (!(d === "c" && m.ctrl) || !o) &&
                iR.batchedUpdates(() => {
                  t(d, m);
                }));
          };
          return (
            s?.on("input", a),
            () => {
              s?.removeListener("input", a);
            }
          );
        }, [e.isActive, r, o, t]));
    }),
      (zhe = wdo));
  });
var xdo,
  GDr = j(() => {
    xdo = Se(Yt(), 1);
    K9t();
  });
var qDr,
  Tdo,
  Yhe,
  HDr = j(() => {
    qDr = Se(Yt(), 1);
    X9t();
    ((Tdo = () => (0, qDr.useContext)(QRe)), (Yhe = Tdo));
  });
var Ddo,
  VDr = j(() => {
    Ddo = Se(Yt(), 1);
    e6t();
  });
var c6t,
  WDr = j(() => {
    c6t = Se(Yt(), 1);
    qRe();
    XRe();
  });
var Ido,
  zDr = j(() => {
    Ido = Se(Yt(), 1);
    qRe();
  });
var Rdo,
  YDr = j(() => {
    Rdo = Se(Yt(), 1);
    Aee();
  });
var kdo,
  l6t,
  KDr = j(() => {
    ((kdo = (t) => ({ width: t.yogaNode?.getComputedWidth() ?? 0, height: t.yogaNode?.getComputedHeight() ?? 0 })),
      (l6t = kdo));
  });
var Yr = j(async () => {
  await kDr();
  VRe();
  n6t();
  ODr();
  NDr();
  BDr();
  LDr();
  await QDr();
  GDr();
  XRe();
  HDr();
  VDr();
  WDr();
  zDr();
  YDr();
  KDr();
});