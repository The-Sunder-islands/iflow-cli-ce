/**
 * @module mY
 * @category app/model
 * @label iflow-model
 * @position 1580 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mY) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class t, class t extends Li, class extends, class t extends Li, class t extends Li
 * Exports: RedirectHandler, WebSocketStream, getGlobalOrigin, Dispatcher, errors, EventSource, upgrade, Agent, pipeline, parseCookie, getCookies, RetryHandler, MessageEvent, WebSocketError, request
 * Functions: Cba, uii, qle, nv, nii, kba, Cst, tlr, Ist, Nba, Eii, Aii, a, o3, o
 * Features: esbuild module exports: mY, dotenv related
 * === End semantic info ===
 */


var mY = T((y4c, li) => {
  "use strict";
  var Lga = EU(),
    Zni = Ove(),
    Mga = ple(),
    Fga = AXn(),
    Uga = vXn(),
    $ga = zz(),
    jga = jar(),
    Qga = VXn(),
    Gga = XXn(),
    qga = tZn(),
    eii = da(),
    _st = ks(),
    { InvalidArgumentError: yst } = eii,
    jle = LZn(),
    Hga = ile(),
    Vga = wur(),
    { MockCallHistory: Wga, MockCallHistoryLog: zga } = Dur(),
    Yga = Mur(),
    Kga = Our(),
    Jga = Pei(),
    Xga = cur(),
    Zga = pot(),
    { getGlobalDispatcher: tii, setGlobalDispatcher: eba } = Rot(),
    tba = wle(),
    rba = Hur();
  Object.assign(Zni.prototype, jle);
  li.exports.Dispatcher = Zni;
  li.exports.Client = Lga;
  li.exports.Pool = Mga;
  li.exports.BalancedPool = Fga;
  li.exports.RoundRobinPool = Uga;
  li.exports.Agent = $ga;
  li.exports.ProxyAgent = jga;
  li.exports.EnvHttpProxyAgent = Qga;
  li.exports.RetryAgent = Gga;
  li.exports.H2CClient = qga;
  li.exports.RetryHandler = Zga;
  li.exports.DecoratorHandler = tba;
  li.exports.RedirectHandler = rba;
  li.exports.interceptors = {
    redirect: Hei(),
    responseError: Wei(),
    retry: Yei(),
    dump: Jei(),
    dns: Zei(),
    cache: gti(),
    decompress: Eti(),
    deduplicate: xti(),
  };
  li.exports.cacheStores = { MemoryCacheStore: ecr() };
  var nba = Iti();
  li.exports.cacheStores.SqliteCacheStore = nba;
  li.exports.buildConnector = Hga;
  li.exports.errors = eii;
  li.exports.util = { parseHeaders: _st.parseHeaders, headerNameToString: _st.headerNameToString };
  function NCe(t) {
    return (e, r, n) => {
      if (
        (typeof r == "function" && ((n = r), (r = null)),
        !e || (typeof e != "string" && typeof e != "object" && !(e instanceof URL)))
      )
        throw new yst("invalid url");
      if (r != null && typeof r != "object") throw new yst("invalid opts");
      if (r && r.path != null) {
        if (typeof r.path != "string") throw new yst("invalid opts.path");
        let a = r.path;
        (r.path.startsWith("/") || (a = `/${a}`), (e = new URL(_st.parseOrigin(e).origin + a)));
      } else (r || (r = typeof e == "object" ? e : {}), (e = _st.parseURL(e)));
      let { agent: o, dispatcher: s = tii() } = r;
      if (o) throw new yst("unsupported opts.agent. Did you mean opts.client?");
      return t.call(
        s,
        {
          ...r,
          origin: e.origin,
          path: e.search ? `${e.pathname}${e.search}` : e.pathname,
          method: r.method || (r.body ? "PUT" : "GET"),
        },
        n,
      );
    };
  }
  li.exports.setGlobalDispatcher = eba;
  li.exports.getGlobalDispatcher = tii;
  var iba = wCe().fetch;
  li.exports.fetch = function (e, r = void 0) {
    return iba(e, r).catch((n) => {
      throw (n && typeof n == "object" && Error.captureStackTrace(n), n);
    });
  };
  li.exports.Headers = tY().Headers;
  li.exports.Response = CCe().Response;
  li.exports.Request = Rle().Request;
  li.exports.FormData = jit().FormData;
  var { setGlobalOrigin: oba, getGlobalOrigin: sba } = ksr();
  li.exports.setGlobalOrigin = oba;
  li.exports.getGlobalOrigin = sba;
  var { CacheStorage: aba } = Fri(),
    { kConstruct: uba } = n0();
  li.exports.caches = new aba(uba);
  var { deleteCookie: cba, getCookies: lba, getSetCookies: mba, setCookie: dba, parseCookie: fba } = Jri();
  li.exports.deleteCookie = cba;
  li.exports.getCookies = lba;
  li.exports.getSetCookies = mba;
  li.exports.setCookie = dba;
  li.exports.parseCookie = fba;
  var { parseMIMEType: pba, serializeAMimeType: hba } = HE();
  li.exports.parseMIMEType = pba;
  li.exports.serializeAMimeType = hba;
  var { CloseEvent: gba, ErrorEvent: bba, MessageEvent: Aba } = sst(),
    { WebSocket: yba, ping: _ba } = Rni();
  li.exports.WebSocket = yba;
  li.exports.CloseEvent = gba;
  li.exports.ErrorEvent = bba;
  li.exports.MessageEvent = Aba;
  li.exports.ping = _ba;
  li.exports.WebSocketStream = Fni().WebSocketStream;
  li.exports.WebSocketError = jcr().WebSocketError;
  li.exports.request = NCe(jle.request);
  li.exports.stream = NCe(jle.stream);
  li.exports.pipeline = NCe(jle.pipeline);
  li.exports.connect = NCe(jle.connect);
  li.exports.upgrade = NCe(jle.upgrade);
  li.exports.MockClient = Vga;
  li.exports.MockCallHistory = Wga;
  li.exports.MockCallHistoryLog = zga;
  li.exports.MockPool = Kga;
  li.exports.MockAgent = Yga;
  li.exports.SnapshotAgent = Jga;
  li.exports.mockErrors = Xga;
  var { EventSource: Eba } = Xni();
  li.exports.EventSource = Eba;
  function vba() {
    ((globalThis.fetch = li.exports.fetch),
      (globalThis.Headers = li.exports.Headers),
      (globalThis.Response = li.exports.Response),
      (globalThis.Request = li.exports.Request),
      (globalThis.FormData = li.exports.FormData),
      (globalThis.WebSocket = li.exports.WebSocket),
      (globalThis.CloseEvent = li.exports.CloseEvent),
      (globalThis.ErrorEvent = li.exports.ErrorEvent),
      (globalThis.MessageEvent = li.exports.MessageEvent),
      (globalThis.EventSource = li.exports.EventSource));
  }
  li.exports.install = vba;
});
function Cba() {
  let t = process.env.NO_PROXY || "",
    e = new rii.EnvHttpProxyAgent({ noProxy: [t, "localhost"].filter(Boolean).join(",") }),
    r = Promise.resolve().then(() => Se(mY(), 1));
  return async (n, o) => {
    let { fetch: s } = await r,
      u = { ...o, dispatcher: e },
      c = await s(n, u);
    return new Response(c.body, { status: c.status, statusText: c.statusText, headers: Object.fromEntries(c.headers) });
  };
}
async function nii(t, e) {
  let r;
  try {
    e.debug("Attempting to connect to IDE via HTTP SSE");
    let n = new S6({ name: "streamable-http-client", version: "1.0.0" });
    return (
      (r = new RM(new URL(`http://127.0.0.1:${t}/mcp`), { fetch: Cba() })),
      await n.connect(r),
      { success: !0, client: n }
    );
  } catch (n) {
    if ((e.error("HTTP connection failed:", n), r))
      try {
        await r.close();
      } catch (o) {
        e.debug("Failed to close transport:", o);
      }
    return { success: !1 };
  }
}
var rii,
  iii = j(() => {
    "use strict";
    ase();
    _jt();
    rii = Se(mY(), 1);
  });
async function oii(t, e) {
  let { command: r, args: n } = t,
    o;
  try {
    e.debug("Attempting to connect to IDE via stdio");
    let s = new S6({ name: "stdio-client", version: "1.0.0" });
    return ((o = new TM({ command: r, args: n })), await s.connect(o), { success: !0, client: s });
  } catch (s) {
    if ((e.error("Stdio connection failed:", s), o))
      try {
        await o.close();
      } catch (a) {
        e.debug("Failed to close transport:", a);
      }
    return { success: !1 };
  }
}
var sii = j(() => {
  "use strict";
  ase();
  Y$t();
});
var PCe,
  Wcr = j(() => {
    "use strict";
    IU();
    PCe = class {
      logger;
      constructor(e) {
        this.logger = e;
      }
      inferIdeFromMetadata(e) {
        if (e.ideType)
          switch (e.ideType) {
            case "devin":
              return fi.Devin;
            case "replit":
              return fi.Replit;
            case "vscode":
              return fi.VSCode;
            case "cursor":
              return fi.Cursor;
            case "cloudshell":
              return fi.CloudShell;
            case "codespaces":
              return fi.Codespaces;
            case "firebasestudio":
              return fi.FirebaseStudio;
            case "trae":
              return fi.Trae;
            case "jetbrains":
              return fi.JetBrains;
            default:
              break;
          }
        if (e.vscodeVersion)
          return e.cursorVersion || e.termProgram === "cursor"
            ? fi.Cursor
            : e.codespaces || process.env.CODESPACES
              ? fi.Codespaces
              : fi.VSCode;
        if (
          e.jetbrainsVersion ||
          e.ideaVersion ||
          e.webstormVersion ||
          e.pycharmVersion ||
          e.golandVersion ||
          e.phpstormVersion ||
          e.rubymineVersion ||
          e.clionVersion ||
          e.datagripVersion ||
          e.riderVersion ||
          e.androidStudioVersion
        )
          return fi.JetBrains;
        if (e.devinVersion || e.cogBashrcSourced) return fi.Devin;
        if (e.replitUser || e.replitEnvironment) return fi.Replit;
        if (e.cloudShell || e.editorInCloudShell) return fi.CloudShell;
        if (e.firebaseDeployAgent || e.monospaceEnv) return fi.FirebaseStudio;
        if (e.traeVersion || e.termProduct === "Trae") return fi.Trae;
        if (e.cursorVersion || e.cursorTraceId) return fi.Cursor;
      }
      getCurrentIdeEnvironment() {
        let e = o3();
        if (e) return { ide: e, processId: process.pid, createdAt: new Date(), workspaceFolders: [] };
      }
      isCurrentEnvironmentMatch(e) {
        let r = o3();
        return r ? this.inferIdeFromMetadata(e.metadata) === r : !1;
      }
      isTargetIdeMatch(e, r) {
        return this.inferIdeFromMetadata(e.metadata) === r;
      }
    };
  });
import * as Est from "node:fs";
import * as aii from "node:net";
function Qle(t) {
  try {
    return Est.realpathSync(t);
  } catch {
    return t;
  }
}
async function Sba(t, e = "localhost") {
  return new Promise((r) => {
    let n = new aii.Socket(),
      s = setTimeout(() => {
        (n.destroy(), r(!1));
      }, 2e3);
    (n.connect(t, e, () => {
      (clearTimeout(s), n.destroy(), r(!0));
    }),
      n.on("error", () => {
        (clearTimeout(s), n.destroy(), r(!1));
      }));
  });
}
async function uii(t, e) {
  try {
    let r = await Est.promises.readFile(t, "utf8"),
      n = JSON.parse(r),
      o;
    if (
      (n.transport?.port ? (o = parseInt(n.transport.port, 10)) : n.port && (o = parseInt(n.port, 10)), !o || isNaN(o))
    )
      return !1;
    let s = n.transport?.host || "localhost";
    return await Sba(o, s);
  } catch (r) {
    return (e.debug(`Failed to validate IDE file ${t}:`, r), !1);
  }
}
var zcr = j(() => {
  "use strict";
  Pa();
  Wcr();
  IU();
});
var lii = {};
Wi(lii, {
  DetectedIde: () => fi,
  detectAllAvailableIdeConnections: () => Cst,
  detectIde: () => o3,
  getIdeInfo: () => tv,
  inferIdeTypeFromConnectionInfo: () => cii,
});
import * as vst from "node:fs";
import * as Ycr from "node:path";
function tv(t) {
  switch (t) {
    case fi.Devin:
      return { displayName: "Devin", file: "devin" };
    case fi.Replit:
      return { displayName: "Replit", file: "replit" };
    case fi.VSCode:
      return { displayName: "VS Code", file: "vscode" };
    case fi.Cursor:
      return { displayName: "Cursor", file: "cursor" };
    case fi.CloudShell:
      return { displayName: "Cloud Shell", file: "cloudshell" };
    case fi.Codespaces:
      return { displayName: "GitHub Codespaces", file: "codespaces" };
    case fi.FirebaseStudio:
      return { displayName: "Firebase Studio", file: "firebasestudio" };
    case fi.Trae:
      return { displayName: "Trae", file: "trae" };
    case fi.JetBrains:
      return { displayName: "JetBrains", file: "jetbrains" };
    default:
      return t;
  }
}
function o3() {
  if (
    process.env.TERMINAL_EMULATOR?.includes("JetBrains") ||
    process.env.IDEA_INITIAL_DIRECTORY ||
    process.env.WEBSTORM_JDK ||
    process.env.INTELLIJ_ENVIRONMENT_READER ||
    process.env.PYCHARM_HOSTED ||
    process.env.GOLAND_VM_OPTIONS ||
    process.env.PHPSTORM_VM_OPTIONS ||
    process.env.RUBYMINE_VM_OPTIONS ||
    process.env.CLION_VM_OPTIONS ||
    process.env.DATAGRIP_VM_OPTIONS ||
    process.env.RIDER_VM_OPTIONS ||
    process.env.ANDROID_STUDIO_VM_OPTIONS ||
    (process.env.PATH &&
      (process.env.PATH.includes("JetBrains") ||
        process.env.PATH.includes("WebStorm") ||
        process.env.PATH.includes("IntelliJ") ||
        process.env.PATH.includes("PyCharm") ||
        process.env.PATH.includes("GoLand") ||
        process.env.PATH.includes("PhpStorm") ||
        process.env.PATH.includes("RubyMine") ||
        process.env.PATH.includes("CLion") ||
        process.env.PATH.includes("DataGrip") ||
        process.env.PATH.includes("Rider"))) ||
    (process.env.TERM_PROGRAM_VERSION && process.env.TERM_PROGRAM_VERSION.includes("JetBrains"))
  )
    return fi.JetBrains;
  if (process.env.TERM_PROGRAM === "vscode")
    return process.env.__COG_BASHRC_SOURCED
      ? fi.Devin
      : process.env.REPLIT_USER
        ? fi.Replit
        : process.env.CURSOR_TRACE_ID
          ? fi.Cursor
          : process.env.CODESPACES
            ? fi.Codespaces
            : process.env.EDITOR_IN_CLOUD_SHELL || process.env.CLOUD_SHELL
              ? fi.CloudShell
              : process.env.TERM_PRODUCT === "Trae"
                ? fi.Trae
                : process.env.FIREBASE_DEPLOY_AGENT || process.env.MONOSPACE_ENV
                  ? fi.FirebaseStudio
                  : fi.VSCode;
}
async function Cst() {
  try {
    let t = { debug: process.env.DEBUG ? console.debug : () => {}, error: console.error },
      e = Ycr.join(Tn(), "ide");
    try {
      await vst.promises.access(e);
    } catch {
      t.debug(
        "[detectAllAvailableIdeConnections] iFlow directory does not exist, falling back to environment detection",
      );
      let m = o3();
      return m ? [{ ide: m, displayName: tv(m).displayName, file: "current-environment", connectionInfo: {} }] : [];
    }
    let n = (await vst.promises.readdir(e)).filter(
      (c) => c.startsWith("ide-") && (c.endsWith(".json") || c.endsWith(".lock")),
    );
    if (
      (t.debug(`[detectAllAvailableIdeConnections] Found candidate IDE files: ${JSON.stringify(n)}`), n.length === 0)
    ) {
      t.debug(
        "[detectAllAvailableIdeConnections] No IDE connection files found, falling back to environment detection",
      );
      let c = o3();
      return c ? [{ ide: c, displayName: tv(c).displayName, file: "current-environment", connectionInfo: {} }] : [];
    }
    let o = new PCe(t),
      s = process.cwd(),
      a = Qle(s),
      u = [];
    for (let c of n) {
      let m = Ycr.join(e, c);
      if (!(await uii(m, t))) {
        t.debug(`[detectAllAvailableIdeConnections] Invalid IDE file ${c}, skipping`);
        continue;
      }
      try {
        let f = await vst.promises.readFile(m, "utf8"),
          p = JSON.parse(f),
          h = !1;
        if (
          (p.workspaceFolders &&
            Array.isArray(p.workspaceFolders) &&
            (h = p.workspaceFolders.some((b) => {
              let A = Qle(b);
              return ite(A, a);
            })),
          !h)
        ) {
          t.debug(`[detectAllAvailableIdeConnections] Connection ${c} does not match current workspace, skipping`);
          continue;
        }
        let g = o.isCurrentEnvironmentMatch(p) ? o3() : cii(p);
        if (!g) {
          t.debug(`[detectAllAvailableIdeConnections] Could not determine IDE type for ${c}`);
          continue;
        }
        (u.push({ ide: g, displayName: tv(g).displayName, file: c, connectionInfo: p }),
          t.debug(
            `[detectAllAvailableIdeConnections] Found workspace-matching connection: ${c} (IDE: ${tv(g).displayName})`,
          ));
      } catch (f) {
        t.debug(`[detectAllAvailableIdeConnections] Failed to parse connection file ${c}:`, f);
      }
    }
    if (
      (t.debug(`[detectAllAvailableIdeConnections] Total workspace-matching connections: ${u.length}`), u.length === 0)
    ) {
      t.debug(
        "[detectAllAvailableIdeConnections] No workspace-matching connections found, falling back to environment detection",
      );
      let c = o3();
      return c ? [{ ide: c, displayName: tv(c).displayName, file: "current-environment", connectionInfo: {} }] : [];
    }
    return u;
  } catch (t) {
    console.error("[detectAllAvailableIdeConnections] Error detecting IDE connections from files:", t);
    let e = o3();
    return e ? [{ ide: e, displayName: tv(e).displayName, file: "current-environment", connectionInfo: {} }] : [];
  }
}
function cii(t) {
  let e = t.metadata || {};
  if (e.ideType)
    switch (e.ideType) {
      case "devin":
        return fi.Devin;
      case "replit":
        return fi.Replit;
      case "vscode":
        return fi.VSCode;
      case "cursor":
        return fi.Cursor;
      case "cloudshell":
        return fi.CloudShell;
      case "codespaces":
        return fi.Codespaces;
      case "firebasestudio":
        return fi.FirebaseStudio;
      case "trae":
        return fi.Trae;
      case "jetbrains":
        return fi.JetBrains;
      default:
        break;
    }
  if (e.vscodeVersion)
    return e.cursorVersion || e.termProgram === "cursor" ? fi.Cursor : e.codespaces ? fi.Codespaces : fi.VSCode;
  if (
    e.jetbrainsVersion ||
    e.ideaVersion ||
    e.webstormVersion ||
    e.pycharmVersion ||
    e.golandVersion ||
    e.phpstormVersion ||
    e.rubymineVersion ||
    e.clionVersion ||
    e.datagripVersion ||
    e.riderVersion ||
    e.androidStudioVersion
  )
    return fi.JetBrains;
  if (e.devinVersion || e.cogBashrcSourced) return fi.Devin;
  if (e.replitUser || e.replitEnvironment) return fi.Replit;
  if (e.cloudShell || e.editorInCloudShell) return fi.CloudShell;
  if (e.firebaseDeployAgent || e.monospaceEnv) return fi.FirebaseStudio;
  if (e.traeVersion || e.termProduct === "Trae") return fi.Trae;
  if (e.cursorTraceId) return fi.Cursor;
}
var fi,
  IU = j(() => {
    "use strict";
    Wcr();
    zcr();
    Pa();
    (function (t) {
      ((t.Devin = "devin"),
        (t.Replit = "replit"),
        (t.VSCode = "vscode"),
        (t.Cursor = "cursor"),
        (t.CloudShell = "cloudshell"),
        (t.Codespaces = "codespaces"),
        (t.FirebaseStudio = "firebasestudio"),
        (t.Trae = "trae"),
        (t.JetBrains = "JetBrains"));
    })(fi || (fi = {}));
  });
var mii = j(() => {
  B5e();
  B5e();
});
function pii() {
  let t,
    e = new Set();
  function r() {
    for (let u of e) u(t);
  }
  function n(u) {
    ((t = u), r());
  }
  function o() {
    ((t = void 0), r());
  }
  function s() {
    return t;
  }
  function a(u) {
    return (
      e.add(u),
      () => {
        e.delete(u);
      }
    );
  }
  return { setIdeContext: n, getIdeContext: s, subscribeToIdeContext: a, clearIdeContext: o };
}
var dii,
  fii,
  Kcr,
  Jcr,
  Xcr,
  Zcr,
  QO,
  Sst = j(() => {
    "use strict";
    mii();
    bi();
    ((dii = ya.object({
      path: ya.string(),
      timestamp: ya.number(),
      isActive: ya.boolean().optional(),
      selectedText: ya.string().optional(),
      cursor: ya.object({ line: ya.number(), character: ya.number() }).optional(),
    })),
      (fii = ya.object({ workspaceState: ya.object({ openFiles: ya.array(dii).optional() }).optional() })),
      (Kcr = ya.object({ jsonrpc: ya.literal("2.0"), method: ya.literal("ide/contextUpdate"), params: fii })),
      (Jcr = ya.object({
        jsonrpc: ya.literal("2.0"),
        method: ya.literal("ide/diffAccepted"),
        params: ya.object({ filePath: ya.string(), content: ya.string() }),
      })),
      (Xcr = ya.object({
        jsonrpc: ya.literal("2.0"),
        method: ya.literal("ide/diffClosed"),
        params: ya.object({ filePath: ya.string(), content: ya.string() }),
      })),
      (Zcr = ya
        .object({ content: ya.array(ya.object({ text: ya.string(), type: ya.literal("text") })).min(1) })
        .transform((t, e) => {
          try {
            let r = JSON.parse(t.content[0].text),
              o = ya.object({ content: ya.string().optional() }).safeParse(r);
            return o.success ? o.data : (o.error.issues.forEach((s) => e.addIssue({ ...s })), ya.NEVER);
          } catch {
            return (
              e.addIssue({ code: ya.ZodIssueCode.custom, message: I.t("ide.errors.invalidJsonContent") }),
              ya.NEVER
            );
          }
        })));
    QO = pii();
  });
import * as BCe from "node:path";
var fa,
  SS,
  dY,
  fY = j(() => {
    "use strict";
    eYn();
    iii();
    sii();
    IU();
    Pa();
    Sst();
    zcr();
    bi();
    (function (t) {
      ((t.Connected = "connected"), (t.Disconnected = "disconnected"), (t.Connecting = "connecting"));
    })(fa || (fa = {}));
    ((SS = {
      debug: (...t) => (process.env.DEBUG ? console.debug("[DEBUG] [IDEClient]", ...t) : void 0),
      error: (...t) => (process.env.DEBUG ? console.error("[ERROR] [IDEClient]", ...t) : void 0),
    }),
      (dY = class t {
        static instance;
        client = void 0;
        state = { status: fa.Disconnected, details: I.t("ide.connection.disabled") };
        currentIde;
        currentIdeDisplayName;
        targetIde = void 0;
        diffResponses = new Map();
        statusListeners = new Set();
        lastSelectedIde = void 0;
        constructor() {
          ((this.currentIde = o3()), this.currentIde && (this.currentIdeDisplayName = tv(this.currentIde).displayName));
        }
        static getInstance() {
          return (t.instance || (t.instance = new t()), t.instance);
        }
        static validateWorkspacePath(e, r, n) {
          if (e === void 0) return { isValid: !1, error: I.t("ide.connection.failedToConnectInstall", { ide: r }) };
          if (e === "") return { isValid: !1, error: I.t("ide.connection.workspaceRequired", { ide: r }) };
          let o = e.split(BCe.delimiter),
            s = Qle(n);
          return o.some((u) => {
            let c = Qle(u);
            return ite(c, s);
          })
            ? { isValid: !0 }
            : { isValid: !1, error: I.t("ide.connection.directoryMismatch", { ide: r, directories: o.join(", ") }) };
        }
        async connect(e) {
          if (
            process.env.IFLOW_NON_INTERACTIVE === "true" ||
            process.argv.includes("-p") ||
            process.argv.includes("--prompt")
          ) {
            (this.setState(fa.Disconnected, "IDE connection disabled in non-interactive mode"),
              this.saveLastSelectedIde());
            return;
          }
          this.setState(fa.Connecting);
          let r = await Cst();
          if (e) {
            if (!r.some((d) => d.ide === e?.ide)) {
              (this.setState(fa.Disconnected, I.t("ide.connection.ideNotAvailable", { ide: e?.displayName }), !0),
                this.saveLastSelectedIde());
              return;
            }
            ((this.targetIde = e), SS.debug("Connecting to target IDE:", e.displayName));
          } else this.targetIde = void 0;
          let n;
          (this.targetIde ? (n = r.find((d) => d.file === this.targetIde?.file)) : (n = r[0]),
            (this.currentIde = n?.ide));
          let o = n?.connectionInfo;
          if (!o) {
            this.setState(fa.Disconnected, "No valid connections found", !0);
            return;
          }
          let s =
            o?.transport?.protocol === "ws"
              ? {
                  protocol: "ws",
                  host: o.transport.host,
                  port: o.transport.port.toString(),
                  path: o.transport.path || "/",
                  authToken: o.authToken,
                  workspacePath: o.workspaceFolders?.join(BCe.delimiter) || "",
                }
              : o.stdio
                ? { stdio: o.stdio, workspacePath: o.workspaceFolders?.join(BCe.delimiter) || "" }
                : { port: o.port?.toString(), workspacePath: o.workspaceFolders?.join(BCe.delimiter) || "" };
          SS.debug("configFromFile", s);
          let a = s.workspacePath,
            u = this.targetIde ? this.targetIde.displayName : this.currentIdeDisplayName,
            { isValid: c, error: m } = t.validateWorkspacePath(a, u, process.cwd());
          if (!c) {
            this.setState(fa.Disconnected, m, !0);
            return;
          }
          if (s) {
            if (s.protocol === "ws") {
              let d = await Zzn({ host: s.host, port: s.port, path: s.path, authToken: s.authToken }, SS);
              if (d.success && d.client) {
                ((this.client = d.client),
                  this.registerClientHandlers(),
                  this.setState(
                    fa.Connected,
                    this.targetIde ? I.t("ide.connection.connectedTo", { ide: this.targetIde.displayName }) : void 0,
                  ),
                  this.targetIde
                    ? this.saveLastSelectedIde(this.targetIde.ide, this.targetIde.displayName, this.targetIde.file)
                    : this.saveLastSelectedIde());
                return;
              }
            }
            if (s.port) {
              let d = await nii(s.port, SS);
              if (d.success && d.client) {
                ((this.client = d.client),
                  this.registerClientHandlers(),
                  this.setState(
                    fa.Connected,
                    this.targetIde ? I.t("ide.connection.connectedTo", { ide: this.targetIde.displayName }) : void 0,
                  ),
                  this.targetIde
                    ? this.saveLastSelectedIde(this.targetIde.ide, this.targetIde.displayName, this.targetIde.file)
                    : this.saveLastSelectedIde());
                return;
              }
            }
            if (s.stdio) {
              let d = await oii(s.stdio, SS);
              if (d.success && d.client) {
                ((this.client = d.client),
                  this.registerClientHandlers(),
                  this.setState(
                    fa.Connected,
                    this.targetIde ? I.t("ide.connection.connectedTo", { ide: this.targetIde.displayName }) : void 0,
                  ),
                  this.targetIde
                    ? this.saveLastSelectedIde(this.targetIde.ide, this.targetIde.displayName, this.targetIde.file)
                    : this.saveLastSelectedIde());
                return;
              }
            }
          }
          this.setState(fa.Disconnected, I.t("ide.connection.failedToConnect", { ide: u }), !0);
        }
        async openDiff(e, r) {
          return new Promise((n, o) => {
            (this.diffResponses.set(e, n),
              this.client?.callTool({ name: "openDiff", arguments: { filePath: e, newContent: r } }).catch((s) => {
                (SS.debug(`callTool for ${e} failed:`, s), o(s));
              }));
          });
        }
        async closeDiff(e) {
          try {
            let r = await this.client?.callTool({ name: "closeDiff", arguments: { filePath: e } });
            if (r) return Zcr.parse(r).content;
          } catch (r) {
            SS.debug(`callTool for ${e} failed:`, r);
          }
        }
        async resolveDiffFromCli(e, r) {
          let n = await this.closeDiff(e),
            o = this.diffResponses.get(e);
          o &&
            (o(r === "accepted" ? { status: "accepted", content: n } : { status: "rejected", content: void 0 }),
            this.diffResponses.delete(e));
        }
        async disconnect() {
          this.state.status !== fa.Disconnected &&
            (this.setState(fa.Disconnected, I.t("ide.connection.disconnectedEnable")),
            this.client?.close(),
            this.saveLastSelectedIde());
        }
        getConnectionStatus() {
          return this.state;
        }
        getCurrentIde() {
          return this.currentIde;
        }
        getDetectedIdeDisplayName() {
          return this.currentIdeDisplayName;
        }
        async getAllAvailableIdes() {
          let e = await Cst(),
            r = new Map();
          for (let o of e) {
            let s = o?.connectionInfo?.processId;
            (r.has(s) || r.set(s, []), r.get(s).push(o));
          }
          let n = [];
          for (let [o, s] of r) {
            if (s.length <= 1) {
              n.push(...s);
              continue;
            }
            if (s.some((u) => u?.connectionInfo?.metadata?.ideType !== void 0)) {
              let u = s.filter((c) => c?.connectionInfo?.metadata?.ideType !== void 0);
              n.push(...u);
            } else n.push(...s);
          }
          return n.map((o) => ({ ide: o.ide, displayName: o.displayName, file: o.file }));
        }
        saveLastSelectedIde(e, r, n) {
          if (!e || !r || !n) {
            this.lastSelectedIde = void 0;
            return;
          }
          this.lastSelectedIde = { ide: e, displayName: r, file: n };
        }
        getLastSelectedIde() {
          return this.lastSelectedIde;
        }
        addStatusListener(e) {
          this.statusListeners.add(e);
        }
        removeStatusListener(e) {
          this.statusListeners.delete(e);
        }
        setState(e, r, n = !1) {
          if (!(this.state.status === fa.Disconnected && e === fa.Disconnected)) {
            this.state = { status: e, details: r };
            for (let s of this.statusListeners) s(this.state);
            r && (n ? SS.error(r) : SS.debug(r));
          }
          e === fa.Disconnected && QO.clearIdeContext();
        }
        registerClientHandlers() {
          this.client &&
            ((this.client.onerror = (e) => {
              this.setState(fa.Disconnected, I.t("ide.connection.connectionError"), !0);
            }),
            (this.client.onclose = () => {
              this.setState(fa.Disconnected, I.t("ide.connection.connectionError"), !0);
            }),
            this.client.setNotificationHandler(Kcr, (e) => {
              QO.setIdeContext(e.params);
            }),
            this.client.setNotificationHandler(Jcr, (e) => {
              let { filePath: r, content: n } = e.params,
                o = this.diffResponses.get(r);
              o
                ? (o({ status: "accepted", content: n }), this.diffResponses.delete(r))
                : SS.debug(`No resolver found for ${r}`);
            }),
            this.client.setNotificationHandler(Xcr, (e) => {
              let { filePath: r } = e.params,
                n = this.diffResponses.get(r);
              n
                ? (n({ status: "rejected", content: void 0 }), this.diffResponses.delete(r))
                : SS.debug(`No resolver found for ${r}`);
            }));
        }
      }));
  });
import Gle from "fs";
import LCe from "path";
var x0,
  pY = j(() => {
    "use strict";
    aU();
    Ag();
    Fc();
    Bb();
    Ba();
    Bp();
    Pa();
    E0();
    wst();
    Oz();
    dS();
    Dp();
    fY();
    bi();
    x0 = class t extends Li {
      config;
      static Name = "write_file";
      static DisplayName = "Write File";
      static ExecutionError = class extends Error {
        type;
        constructor(e, r) {
          (super(r), (this.type = e), (this.name = "WriteFileToolExecutionError"));
        }
      };
      constructor(e) {
        (super(
          t.Name,
          t.DisplayName,
          "Writes content to a specified file in the local filesystem.\n\n      The user has the ability to modify `content`. If modified, this will be stated in the response.",
          Mi.Pencil,
          Fi.Edit,
          {
            properties: {
              file_path: {
                description:
                  "The absolute path to the file to write to (e.g., '/home/user/project/file.txt'). Relative paths are not supported.",
                type: Dt.STRING,
              },
              content: { description: "The content to write to the file.", type: Dt.STRING },
            },
            required: ["file_path", "content"],
            type: Dt.OBJECT,
          },
          !0,
          !1,
          ["Write", "write", "create", "save"],
        ),
          (this.config = e));
      }
      validateToolParams(e) {
        let r = iu.validate(this.schema.parameters, e);
        if (r) return r;
        let n = e.file_path;
        if (!LCe.isAbsolute(n)) return I.t("writeFileTool.errors.pathNotAbsolute", { filePath: n });
        let o = this.config.getWorkspaceContext();
        if (!o.isPathWithinWorkspace(n)) {
          let s = o.getDirectories();
          return I.t("writeFileTool.errors.pathNotInWorkspace", { directories: s.join(", ") });
        }
        try {
          if (Gle.existsSync(n) && Gle.lstatSync(n).isDirectory())
            return I.t("writeFileTool.errors.pathIsDirectory", { filePath: n });
        } catch (s) {
          return I.t("writeFileTool.errors.accessError", {
            filePath: n,
            error: s instanceof Error ? s.message : String(s),
          });
        }
        return null;
      }
      getDescription(e) {
        if (!e.file_path || !e.content) return I.t("writeFileTool.messages.invalidParams");
        let r = Mc(e.file_path, this.config.getTargetDir());
        return I.t("writeFileTool.messages.writingTo", { path: ba(r) });
      }
      async shouldConfirmExecute(e, r) {
        if (this.config.getApprovalMode() === dn.SMART || this.validateToolParams(e)) return !1;
        let o = await this._getCorrectedFileContent(e.file_path, e.content, r);
        if (o.error) return !1;
        let { originalContent: s, correctedContent: a } = o,
          u = Mc(e.file_path, this.config.getTargetDir()),
          c = LCe.basename(e.file_path),
          m = zf(c, s, a, "Current", "Proposed", n3),
          d = this.config.getIdeClient(),
          f,
          p = !1;
        if (d.getConnectionStatus().status === fa.Connected) {
          f = d.openDiff(e.file_path, a);
          try {
            let g = await f;
            g.status === "accepted" && ((e.content = g.content || a), (p = !0));
          } catch {
            f = void 0;
          }
        }
        return p
          ? !1
          : {
              type: "edit",
              title: I.t("writeFileTool.messages.confirmWrite", { path: ba(u) }),
              fileName: c,
              fileDiff: m,
              originalContent: s,
              newContent: a,
              onConfirm: async (g) => {
                if ((g === cn.ProceedAlways && this.config.setApprovalMode(dn.SMART), g === cn.ModifyWithEditor && f)) {
                  let b = await f;
                  b.status === "accepted" && b.content && (e.content = b.content);
                } else {
                  let b = this.config.getIdeClient();
                  b && b.resolveDiffFromCli(e.file_path, g === cn.Cancel ? "rejected" : "accepted");
                }
              },
              ideConfirmation: f,
            };
      }
      async execute(e, r) {
        let n = this.validateToolParams(e);
        if (n)
          return {
            llmContent: `Error: ${I.t("writeFileTool.errors.invalidParameters", { reason: n })}`,
            returnDisplay: `Error: ${n}`,
            error: { message: n, type: Lr.INVALID_TOOL_PARAMS },
          };
        let o = await this._getCorrectedFileContent(e.file_path, e.content, r);
        if (o.error) {
          let m = o.error,
            d = I.t("writeFileTool.errors.checkingFileError", { message: m.message });
          return {
            llmContent: I.t("writeFileTool.errors.checkingFileErrorLong", {
              filePath: e.file_path,
              message: m.message,
            }),
            returnDisplay: d,
            error: { message: m.message, type: Lr.READ_CONTENT_FAILURE },
          };
        }
        let { originalContent: s, correctedContent: a, fileExists: u } = o,
          c = !u || (o.error !== void 0 && !o.fileExists);
        try {
          let m = LCe.dirname(e.file_path);
          (Gle.existsSync(m) || Gle.mkdirSync(m, { recursive: !0 }), Gle.writeFileSync(e.file_path, a, "utf8"));
          let d = LCe.basename(e.file_path),
            f = o.error ? "" : s,
            p = zf(d, f, a, "Original", "Written", n3),
            h = [
              c
                ? I.t("writeFileTool.messages.newFileCreated", { filePath: e.file_path })
                : I.t("writeFileTool.messages.fileOverwritten", { filePath: e.file_path }),
            ];
          e.modified_by_user && h.push(I.t("writeFileTool.messages.userModified", { content: e.content }));
          let g = { fileDiff: p, fileName: d, originalContent: o.originalContent, newContent: o.correctedContent },
            b = a.split(`
`).length,
            A = gD(e.file_path),
            y = LCe.extname(e.file_path);
          return (
            c ? qR(this.config, m4.CREATE, b, A, y) : qR(this.config, m4.UPDATE, b, A, y),
            { llmContent: h.join(" "), returnDisplay: g }
          );
        } catch (m) {
          let d = I.t("writeFileTool.errors.writingFileError", { error: m instanceof Error ? m.message : String(m) });
          return {
            llmContent: I.t("writeFileTool.errors.writingFileErrorLong", { filePath: e.file_path, error: d }),
            returnDisplay: `Error: ${d}`,
            error: { message: m instanceof Error ? m.message : String(m), type: Lr.FILE_WRITE_FAILURE },
          };
        }
      }
      async _getCorrectedFileContent(e, r, n) {
        let o = "",
          s = !1;
        typeof r != "string" && (r = typeof r == "object" && r !== null ? JSON.stringify(r, null, 2) : String(r));
        let a = r;
        try {
          ((o = Gle.readFileSync(e, "utf8")), (s = !0));
        } catch (u) {
          if (Go(u) && u.code === "ENOENT") ((s = !1), (o = ""));
          else {
            ((s = !0), (o = ""));
            let c = { message: mr(u), code: Go(u) ? u.code : void 0 };
            return { originalContent: o, correctedContent: a, fileExists: s, error: c };
          }
        }
        if (s) {
          let { params: u } = await qle(
            e,
            o,
            { old_string: o, new_string: r, file_path: e },
            this.config.getGeminiClient(),
            n,
          );
          a = u.new_string;
        } else
          try {
            a = await hii(r, this.config.getGeminiClient(), n);
          } catch (u) {
            let c = u instanceof Error ? u : new Error(String(u));
            return {
              originalContent: o,
              correctedContent: r,
              fileExists: s,
              error: { message: c.message, code: "CONTENT_CORRECTION_FAILED" },
            };
          }
        return { originalContent: o, correctedContent: a, fileExists: s };
      }
      getModifyContext(e) {
        return {
          getFilePath: (r) => r.file_path,
          getCurrentContent: async (r) =>
            (await this._getCorrectedFileContent(r.file_path, r.content, e)).originalContent,
          getProposedContent: async (r) =>
            (await this._getCorrectedFileContent(r.file_path, r.content, e)).correctedContent,
          createUpdatedParams: (r, n, o) => ({ ...o, content: n, modified_by_user: !0 }),
        };
      }
    };
  });
import * as rv from "path";
var gii,
  bii,
  wS,
  MCe = j(() => {
    "use strict";
    Fc();
    Bp();
    E0();
    xO();
    RO();
    dS();
    Ba();
    Ag();
    bi();
    Dp();
    ((gii = [
      "**/node_modules/**",
      "**/.git/**",
      "**/.vscode/**",
      "**/.idea/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/__pycache__/**",
      "**/*.pyc",
      "**/*.pyo",
      "**/*.bin",
      "**/*.exe",
      "**/*.dll",
      "**/*.so",
      "**/*.dylib",
      "**/*.class",
      "**/*.jar",
      "**/*.war",
      "**/*.zip",
      "**/*.tar",
      "**/*.gz",
      "**/*.bz2",
      "**/*.rar",
      "**/*.7z",
      "**/*.doc",
      "**/*.docx",
      "**/*.xls",
      "**/*.xlsx",
      "**/*.ppt",
      "**/*.pptx",
      "**/*.odt",
      "**/*.ods",
      "**/*.odp",
      "**/*.DS_Store",
      "**/.env",
      `**/${Xce()}`,
    ]),
      (bii = "--- {filePath} ---"),
      (wS = class t extends Li {
        config;
        static Name = "read_many_files";
        static DisplayName = "Read Files";
        constructor(e) {
          let r = {
            type: Dt.OBJECT,
            properties: {
              paths: {
                type: Dt.ARRAY,
                items: { type: Dt.STRING, minLength: "1" },
                minItems: "1",
                description:
                  "Required. An array of glob patterns or paths relative to the tool's target directory. Examples: ['src/**/*.ts'], ['README.md', 'docs/']",
              },
              include: {
                type: Dt.ARRAY,
                items: { type: Dt.STRING, minLength: "1" },
                description:
                  'Optional. Additional glob patterns to include. These are merged with `paths`. Example: ["*.test.ts"] to specifically add test files if they were broadly excluded.',
                default: [],
              },
              exclude: {
                type: Dt.ARRAY,
                items: { type: Dt.STRING, minLength: "1" },
                description:
                  'Optional. Glob patterns for files/directories to exclude. Added to default excludes if useDefaultExcludes is true. Example: ["**/*.log", "temp/"]',
                default: [],
              },
              recursive: {
                type: Dt.BOOLEAN,
                description:
                  "Optional. Whether to search recursively (primarily controlled by `**` in glob patterns). Defaults to true.",
                default: !0,
              },
              useDefaultExcludes: {
                type: Dt.BOOLEAN,
                description:
                  "Optional. Whether to apply a list of default exclusion patterns (e.g., node_modules, .git, binary files). Defaults to true.",
                default: !0,
              },
              file_filtering_options: {
                description: "Whether to respect ignore patterns from .gitignore or .iflowignore",
                type: Dt.OBJECT,
                properties: {
                  respect_git_ignore: {
                    description:
                      "Optional: Whether to respect .gitignore patterns when listing files. Only available in git repositories. Defaults to true.",
                    type: Dt.BOOLEAN,
                  },
                  respect_gemini_ignore: {
                    description:
                      "Optional: Whether to respect .iflowignore patterns when listing files. Defaults to true.",
                    type: Dt.BOOLEAN,
                  },
                },
              },
            },
            required: ["paths"],
          };
          (super(
            t.Name,
            t.DisplayName,
            `Reads content from multiple files specified by paths or glob patterns within a configured target directory. For text files, it concatenates their content into a single string. It is primarily designed for text-based files. However, it can also process image (e.g., .png, .jpg) and PDF (.pdf) files if their file names or extensions are explicitly included in the 'paths' argument. For these explicitly requested non-text files, their data is read and included in a format suitable for model consumption (e.g., base64 encoded).

This tool is useful when you need to understand or analyze a collection of files, such as:
- Getting an overview of a codebase or parts of it (e.g., all TypeScript files in the 'src' directory).
- Finding where specific functionality is implemented if the user asks broad questions about code.
- Reviewing documentation files (e.g., all Markdown files in the 'docs' directory).
- Gathering context from multiple configuration files.
- When the user asks to "read all files in X directory" or "show me the content of all Y files".

Use this tool when the user's query implies needing the content of several files simultaneously for context, analysis, or summarization. For text files, it uses default UTF-8 encoding and a '--- {filePath} ---' separator between file contents. Ensure paths are relative to the target directory. Glob patterns like 'src/**/*.js' are supported. Avoid using for single files if a more specific single-file reading tool is available, unless the user specifically requests to process a list containing just one file via this tool. Other binary files (not explicitly requested as image/PDF) are generally skipped. Default excludes apply to common non-text files (except for explicitly requested images/PDFs) and large dependency directories unless 'useDefaultExcludes' is false.`,
            Mi.FileSearch,
            Fi.Read,
            r,
          ),
            (this.config = e));
        }
        validateParams(e) {
          let r = iu.validate(this.schema.parameters, e);
          return r || null;
        }
        getDescription(e) {
          if (!e?.paths) return "";
          let r = [...e.paths, ...(e.include || [])],
            n = I.t("readManyFilesTool.messages.usingPatterns", {
              patterns: `\`${r.join("`, `")}\``,
              targetDir: `\`${this.config.getTargetDir()}\``,
            }),
            o = e.exclude || [],
            s = e.useDefaultExcludes !== !1,
            a = this.config.getFileService().getGeminiIgnorePatterns(),
            u = s ? [...gii, ...o, ...a] : [...o, ...a],
            c = I.t("readManyFilesTool.messages.excluding", {
              patterns:
                u.length > 0
                  ? I.t("readManyFilesTool.messages.patternsLike", {
                      patterns: `\`${u.slice(0, 2).join("`, `")}${u.length > 2 ? "...`" : "`"}`,
                    })
                  : I.t("readManyFilesTool.messages.noneSpecified"),
            });
          if (a.length > 0) {
            let m = a.filter((d) => u.includes(d)).length;
            m > 0 && (c += ` (${I.t("readManyFilesTool.messages.includesFromGeminiIgnore", { count: m })})`);
          }
          return I.t("readManyFilesTool.messages.willAttemptToRead", {
            pathDesc: n,
            excludeDesc: c,
            encoding: Vir,
            separator: bii.replace("{filePath}", "path/to/file.ext"),
          });
        }
        async execute(e, r) {
          let n = this.validateParams(e);
          if (n)
            return {
              llmContent: I.t("readManyFilesTool.errors.invalidParameters", { toolName: this.displayName, reason: n }),
              returnDisplay: I.t("readManyFilesTool.errors.parameterError", { error: n }),
            };
          let { paths: o, include: s = [], exclude: a = [], useDefaultExcludes: u = !0 } = e,
            c = this.config.getFileFilteringOptions() ?? Tk,
            m = {
              respectGitIgnore: e.file_filtering_options?.respect_git_ignore ?? c.respectGitIgnore,
              respectGeminiIgnore: e.file_filtering_options?.respect_gemini_ignore ?? c.respectGeminiIgnore,
            },
            d = this.config.getFileService(),
            f = new Set(),
            p = [],
            h = [],
            g = [],
            b = u ? [...gii, ...a] : [...a],
            A = [...o, ...s];
          if (A.length === 0)
            return {
              llmContent: I.t("readManyFilesTool.errors.noSearchPaths"),
              returnDisplay: I.t("readManyFilesTool.errors.noSearchPathsInfo"),
            };
          try {
            let v = new Set(),
              C = this.config.getWorkspaceContext().getDirectories();
            for (let O of C) {
              let N = await q6(
                A.map((F) => F.replace(/\\/g, "/")),
                { cwd: O, ignore: b, nodir: !0, dot: !0, absolute: !0, nocase: !0, signal: r },
              );
              for (let F of N) v.add(F);
            }
            let x = Array.from(v),
              k = m.respectGitIgnore
                ? d
                    .filterFiles(
                      x.map((O) => rv.relative(this.config.getTargetDir(), O)),
                      { respectGitIgnore: !0, respectGeminiIgnore: !1 },
                    )
                    .map((O) => rv.resolve(this.config.getTargetDir(), O))
                : x,
              R = m.respectGeminiIgnore
                ? d
                    .filterFiles(
                      k.map((O) => rv.relative(this.config.getTargetDir(), O)),
                      { respectGitIgnore: !1, respectGeminiIgnore: !0 },
                    )
                    .map((O) => rv.resolve(this.config.getTargetDir(), O))
                : k,
              P = 0,
              D = 0;
            for (let O of x) {
              if (!this.config.getWorkspaceContext().isPathWithinWorkspace(O)) {
                p.push({ path: O, reason: `Security: Glob library returned path outside workspace. Path: ${O}` });
                continue;
              }
              if (m.respectGitIgnore && !k.includes(O)) {
                P++;
                continue;
              }
              if (m.respectGeminiIgnore && !R.includes(O)) {
                D++;
                continue;
              }
              f.add(O);
            }
            (P > 0 && p.push({ path: `${P} file(s)`, reason: "git ignored" }),
              D > 0 && p.push({ path: `${D} file(s)`, reason: "iflow ignored" }));
          } catch (v) {
            return {
              llmContent: I.t("readManyFilesTool.errors.searchError", { error: mr(v) }),
              returnDisplay: I.t("readManyFilesTool.errors.searchErrorInfo", { error: mr(v) }),
            };
          }
          let y = Array.from(f).sort();
          for (let v of y) {
            let C = rv.relative(this.config.getTargetDir(), v).replace(/\\/g, "/"),
              x = await znt(v);
            if (x === "image" || x === "pdf") {
              let R = rv.extname(v).toLowerCase(),
                P = rv.basename(v, R);
              if (!o.some((O) => O.toLowerCase().includes(R) || O.includes(P))) {
                p.push({ path: C, reason: "asset file (image/pdf) was not explicitly requested by name or extension" });
                continue;
              }
            }
            let k = await ive(v, this.config.getTargetDir());
            if (k.error) p.push({ path: C, reason: `Read error: ${k.error}` });
            else {
              if (typeof k.llmContent == "string") {
                let D = bii.replace("{filePath}", v);
                g.push(`${D}

${k.llmContent}

`);
              } else g.push(k.llmContent);
              h.push(C);
              let R =
                  typeof k.llmContent == "string"
                    ? k.llmContent.split(`
`).length
                    : void 0,
                P = gD(v);
              qR(this.config, m4.READ, R, P, rv.extname(v));
            }
          }
          let E = `### ${I.t("readManyFilesTool.messages.resultHeader", { targetDir: this.config.getTargetDir() })}

`;
          return (
            h.length > 0 &&
              ((E +=
                I.t("readManyFilesTool.messages.filesReadSuccess", { count: h.length }) +
                `
`),
              h.length <= 10
                ? ((E +=
                    `
**` +
                    I.t("readManyFilesTool.messages.processedFiles") +
                    `**
`),
                  h.forEach(
                    (v) =>
                      (E += `- \`${v}\`
`),
                  ))
                : ((E +=
                    `
**` +
                    I.t("readManyFilesTool.messages.processedFilesLimited") +
                    `**
`),
                  h.slice(0, 10).forEach(
                    (v) =>
                      (E += `- \`${v}\`
`),
                  ),
                  (E +=
                    "- " +
                    I.t("readManyFilesTool.messages.andMore", { count: h.length - 10 }) +
                    `
`))),
            p.length > 0
              ? (h.length === 0 &&
                  (E +=
                    I.t("readManyFilesTool.messages.noFilesRead") +
                    `
`),
                p.length <= 5
                  ? (E +=
                      `
**` +
                      I.t("readManyFilesTool.messages.skippedItems", { count: p.length }) +
                      `**
`)
                  : (E +=
                      `
**` +
                      I.t("readManyFilesTool.messages.skippedItemsLimited", { count: p.length }) +
                      `**
`),
                p.slice(0, 5).forEach(
                  (v) =>
                    (E += `- \`${v.path}\` (Reason: ${v.reason})
`),
                ),
                p.length > 5 &&
                  (E +=
                    "- " +
                    I.t("readManyFilesTool.messages.andMore", { count: p.length - 5 }) +
                    `
`))
              : h.length === 0 &&
                p.length === 0 &&
                (E +=
                  I.t("readManyFilesTool.messages.noFilesRead") +
                  `
`),
            g.length === 0 && g.push(I.t("readManyFilesTool.messages.noMatchingFiles")),
            { llmContent: g, returnDisplay: E.trim() }
          );
        }
      }));
  });
var hY,
  elr = j(() => {
    "use strict";
    hY = class {
      cache;
      maxSize;
      constructor(e) {
        ((this.cache = new Map()), (this.maxSize = e));
      }
      get(e) {
        let r = this.cache.get(e);
        return (r && (this.cache.delete(e), this.cache.set(e, r)), r);
      }
      set(e, r) {
        if (this.cache.has(e)) this.cache.delete(e);
        else if (this.cache.size >= this.maxSize) {
          let n = this.cache.keys().next().value;
          n !== void 0 && this.cache.delete(n);
        }
        this.cache.set(e, r);
      }
      clear() {
        this.cache.clear();
      }
    };
  });
function nv(t) {
  return t.role === "user" && !!t.parts && t.parts.every((e) => !!e.functionResponse);
}
function tlr(t) {
  return t.role === "model" && !!t.parts && t.parts.every((e) => !!e.functionCall);
}
var FCe = j(() => {
  "use strict";
});
import * as yii from "fs";
function wba(t) {
  let e = t.split("-");
  if (e.length > 2) {
    let r = parseInt(e[1], 10);
    if (!isNaN(r)) return r;
  }
  return -1;
}
async function xba(t, e) {
  let r = (await e.getHistory()) ?? [],
    n = new Set([x0.Name, Fd.Name, wS.Name, H6.Name]),
    o = new Set([...n, ma.Name]);
  for (let s of r.slice().reverse())
    if (s.parts)
      for (let a of s.parts) {
        let u, c;
        if (tlr(s) && a.functionCall?.name && o.has(a.functionCall.name))
          ((u = a.functionCall.id), (c = a.functionCall.args));
        else if (nv(s) && a.functionResponse?.name && n.has(a.functionResponse.name)) {
          let { response: d } = a.functionResponse;
          d && !("error" in d) && "output" in d && ((u = a.functionResponse.id), (c = d.output));
        }
        if (!u || c === void 0) continue;
        let m = JSON.stringify(c);
        if (!m.includes("Error") && !m.includes("Failed") && m.includes(t)) return wba(u);
      }
  return -1;
}
async function qle(t, e, r, n, o) {
  let s = `${e}---${r.old_string}---${r.new_string}`,
    a = RU.get(s);
  if (a) return a;
  let u = r.new_string,
    c = xst(r.new_string) !== r.new_string,
    m = r.expected_replacements ?? 1,
    d = r.old_string,
    f = UCe(e, d);
  if (f === m) c && (u = await kba(n, d, r.new_string, o));
  else if (f > m) {
    let b = r.expected_replacements ?? 1;
    if (f === b) {
      let y = { params: { ...r }, occurrences: f };
      return (RU.set(s, y), y);
    }
    if (b === 1) {
      let y = { params: { ...r }, occurrences: f };
      return (RU.set(s, y), y);
    }
    let A = { params: { ...r }, occurrences: f };
    return (RU.set(s, A), A);
  } else {
    let b = xst(r.old_string);
    if (((f = UCe(e, b)), f === m)) ((d = b), c && (u = await Aii(n, r.old_string, b, r.new_string, o)));
    else if (f === 0) {
      if (t) {
        let E = await xba(t, n);
        if (E > 0 && yii.statSync(t).mtimeMs - E > 2e3) {
          let x = { params: { ...r }, occurrences: 0 };
          return (RU.set(s, x), x);
        }
      }
      let A = await Dba(n, e, b, o),
        y = UCe(e, A);
      if (y === m) {
        if (((d = A), (f = y), c)) {
          let E = xst(r.new_string);
          u = await Aii(n, r.old_string, A, E, o);
        }
      } else {
        let E = { params: { ...r }, occurrences: 0 };
        return (RU.set(s, E), E);
      }
    } else {
      let A = { params: { ...r }, occurrences: f };
      return (RU.set(s, A), A);
    }
  }
  let { targetString: p, pair: h } = Pba(d, u, e, m);
  ((d = p), (u = h));
  let g = { params: { file_path: r.file_path, old_string: d, new_string: u }, occurrences: UCe(e, d) };
  return (RU.set(s, g), g);
}
async function hii(t, e, r) {
  let n = rlr.get(t);
  if (n) return n;
  if (!(xst(t) !== t)) return (rlr.set(t, t), t);
  let s = await Nba(t, e, r);
  return (rlr.set(t, s), s);
}
async function Dba(t, e, r, n) {
  let s = [
    {
      role: "user",
      parts: [
        {
          text: `
Context: A process needs to find an exact literal, unique match for a specific text snippet within a file's content. The provided snippet failed to match exactly. This is most likely because it has been overly escaped.

Task: Analyze the provided file content and the problematic target snippet. Identify the segment in the file content that the snippet was *most likely* intended to match. Output the *exact*, literal text of that segment from the file content. Focus *only* on removing extra escape characters and correcting formatting, whitespace, or minor differences to achieve a PERFECT literal match. The output must be the exact literal text as it appears in the file.

Problematic target snippet:
\`\`\`
${r}
\`\`\`

File Content:
\`\`\`
${e}
\`\`\`

For example, if the problematic target snippet was "\\\\\\nconst greeting = \`Hello \\\\\`\${name}\\\\\`\`;" and the file content had content that looked like "
const greeting = \`Hello \\\`\${name}\\\`\`;", then corrected_target_snippet should likely be "
const greeting = \`Hello \\\`\${name}\\\`\`;" to fix the incorrect escaping to match the original file content.
If the differences are only in whitespace or formatting, apply similar whitespace/formatting changes to the corrected_target_snippet.

Return ONLY the corrected target snippet in the specified JSON format with the key 'corrected_target_snippet'. If no clear, unique match can be found, return an empty string for 'corrected_target_snippet'.
**Output Format:**
Respond *only* in JSON format according to the following schema. Do not include any text outside the JSON structure.
\`\`\`json
{
  "type": "object",
  "properties": {
    "corrected_target_snippet": {
      "type": "string",
      "description": "The corrected version of the target snippet that exactly and uniquely matches a segment within the provided file content."
    }
  },
  "required": ["corrected_target_snippet"]
}
\`\`\`
`.trim(),
        },
      ],
    },
  ];
  try {
    let a = await t.generateJson(s, Tba, n, Tst, Dst);
    return a && typeof a.corrected_target_snippet == "string" && a.corrected_target_snippet.length > 0
      ? a.corrected_target_snippet
      : r;
  } catch (a) {
    if (n.aborted) throw a;
    return (console.error("Error during LLM call for old string snippet correction:", a), r);
  }
}
async function Aii(t, e, r, n, o) {
  if (e === r) return n;
  let a = [
    {
      role: "user",
      parts: [
        {
          text: `
Context: A text replacement operation was planned. The original text to be replaced (original_old_string) was slightly different from the actual text in the file (corrected_old_string). The original_old_string has now been corrected to match the file content.
We now need to adjust the replacement text (original_new_string) so that it makes sense as a replacement for the corrected_old_string, while preserving the original intent of the change.

original_old_string (what was initially intended to be found):
\`\`\`
${e}
\`\`\`

corrected_old_string (what was actually found in the file and will be replaced):
\`\`\`
${r}
\`\`\`

original_new_string (what was intended to replace original_old_string):
\`\`\`
${n}
\`\`\`

Task: Based on the differences between original_old_string and corrected_old_string, and the content of original_new_string, generate a corrected_new_string. This corrected_new_string should be what original_new_string would have been if it was designed to replace corrected_old_string directly, while maintaining the spirit of the original transformation.

For example, if original_old_string was "\\\\\\nconst greeting = \`Hello \\\\\`\${name}\\\\\`\`;" and corrected_old_string is "
const greeting = \`Hello \\\`\${name}\\\`\`;", and original_new_string was "\\\\\\nconst greeting = \`Hello \\\\\`\${name} \${lastName}\\\\\`\`;", then corrected_new_string should likely be "
const greeting = \`Hello \\\`\${name} \${lastName}\\\`\`;" to fix the incorrect escaping.
If the differences are only in whitespace or formatting, apply similar whitespace/formatting changes to the corrected_new_string.

Return ONLY the corrected string in the specified JSON format with the key 'corrected_new_string'. If no adjustment is deemed necessary or possible, return the original_new_string.
**Output Format:**
Respond *only* in JSON format according to the following schema. Do not include any text outside the JSON structure.
\`\`\`json
{
  "type": "object",
  "properties": {
    "corrected_new_string": {
      "type": "string",
      "description": "The original_new_string adjusted to be a suitable replacement for the corrected_old_string, while maintaining the original intent of the change."
    }
  },
  "required": ["corrected_new_string"]
}
\`\`\`
  `.trim(),
        },
      ],
    },
  ];
  try {
    let u = await t.generateJson(a, Iba, o, Tst, Dst);
    return u && typeof u.corrected_new_string == "string" && u.corrected_new_string.length > 0
      ? u.corrected_new_string
      : n;
  } catch (u) {
    if (o.aborted) throw u;
    return (console.error("Error during LLM call for new_string correction:", u), n);
  }
}
async function kba(t, e, r, n) {
  let s = [
    {
      role: "user",
      parts: [
        {
          text: `
Context: A text replacement operation is planned. The text to be replaced (old_string) has been correctly identified in the file. However, the replacement text (new_string) might have been improperly escaped by a previous LLM generation (e.g. too many backslashes for newlines like \\n instead of 
, or unnecessarily quotes like \\"Hello\\" instead of "Hello").

old_string (this is the exact text that will be replaced):
\`\`\`
${e}
\`\`\`

potentially_problematic_new_string (this is the text that should replace old_string, but MIGHT have bad escaping, or might be entirely correct):
\`\`\`
${r}
\`\`\`

Task: Analyze the potentially_problematic_new_string. If it's syntactically invalid due to incorrect escaping (e.g., "
", "	", "\\", "\\'", "\\""), correct the invalid syntax. The goal is to ensure the new_string, when inserted into the code, will be a valid and correctly interpreted.

For example, if old_string is "foo" and potentially_problematic_new_string is "bar\\nbaz", the corrected_new_string_escaping should be "bar
baz".
If potentially_problematic_new_string is console.log(\\"Hello World\\"), it should be console.log("Hello World").

Return ONLY the corrected string in the specified JSON format with the key 'corrected_new_string_escaping'. If no escaping correction is needed, return the original potentially_problematic_new_string.
**Output Format:**
Respond *only* in JSON format according to the following schema. Do not include any text outside the JSON structure.
\`\`\`json
{
  "type": "object",
  "properties": {
    "corrected_new_string_escaping": {
      "type": "string",
      "description": "The new_string with corrected escaping, ensuring it is a proper replacement for the old_string, especially considering potential over-escaping issues from previous LLM generations."
    }
  },
  "required": ["corrected_new_string_escaping"]
}
\`\`\`
  `.trim(),
        },
      ],
    },
  ];
  try {
    let a = await t.generateJson(s, Rba, n, Tst, Dst);
    return a && typeof a.corrected_new_string_escaping == "string" && a.corrected_new_string_escaping.length > 0
      ? a.corrected_new_string_escaping
      : r;
  } catch (a) {
    if (n.aborted) throw a;
    return (console.error("Error during LLM call for new_string escaping correction:", a), r);
  }
}
async function Nba(t, e, r) {
  let o = [
    {
      role: "user",
      parts: [
        {
          text: `
Context: An LLM has just generated potentially_problematic_string and the text might have been improperly escaped (e.g. too many backslashes for newlines like \\n instead of 
, or unnecessarily quotes like \\"Hello\\" instead of "Hello").

potentially_problematic_string (this text MIGHT have bad escaping, or might be entirely correct):
\`\`\`
${t}
\`\`\`

Task: Analyze the potentially_problematic_string. If it's syntactically invalid due to incorrect escaping (e.g., "
", "	", "\\", "\\'", "\\""), correct the invalid syntax. The goal is to ensure the text will be a valid and correctly interpreted.

For example, if potentially_problematic_string is "bar\\nbaz", the corrected_new_string_escaping should be "bar
baz".
If potentially_problematic_string is console.log(\\"Hello World\\"), it should be console.log("Hello World").

Return ONLY the corrected string in the specified JSON format with the key 'corrected_string_escaping'. If no escaping correction is needed, return the original potentially_problematic_string.
**Output Format:**
Respond *only* in JSON format according to the following schema. Do not include any text outside the JSON structure.
\`\`\`json
{
  "type": "object",
  "properties": {
    "corrected_string_escaping": {
      "type": "string",
      "description": "The string with corrected escaping, ensuring it is valid, specially considering potential over-escaping issues from previous LLM generations."
    }
  },
  "required": ["corrected_string_escaping"]
}
\`\`\`
  `.trim(),
        },
      ],
    },
  ];
  try {
    let s = await e.generateJson(o, Oba, r, Tst, Dst);
    return s && typeof s.corrected_string_escaping == "string" && s.corrected_string_escaping.length > 0
      ? s.corrected_string_escaping
      : t;
  } catch (s) {
    if (r.aborted) throw s;
    return (console.error("Error during LLM call for string escaping correction:", s), t);
  }
}
function Pba(t, e, r, n) {
  let o = t.trim();
  if (t.length !== o.length && UCe(r, o) === n) {
    let a = e.trim();
    return { targetString: o, pair: a };
  }
  return { targetString: t, pair: e };
}
function xst(t) {
  return t.replace(/\\+(n|t|r|'|"|`|\\|\n)/g, (e, r) => {
    switch (r) {
      case "n":
        return `
`;
      case "t":
        return "	";
      case "r":
        return "\r";
      case "'":
        return "'";
      case '"':
        return '"';
      case "`":
        return "`";
      case "\\":
        return "\\";
      case `
`:
        return `
`;
      default:
        return e;
    }
  });
}
function UCe(t, e) {
  if (e === "") return 0;
  let r = 0,
    n = t.indexOf(e);
  for (; n !== -1; ) (r++, (n = t.indexOf(e, n + e.length)));
  return r;
}
var Tst,
  Dst,
  _ii,
  RU,
  rlr,
  Tba,
  Iba,
  Rba,
  Oba,
  wst = j(() => {
    "use strict";
    Ba();
    kU();
    pY();
    FE();
    MCe();
    Yce();
    elr();
    b6();
    FCe();
    ((Tst = ZR),
      (Dst = { thinkingConfig: { thinkingBudget: 0 } }),
      (_ii = 50),
      (RU = new hY(_ii)),
      (rlr = new hY(_ii)));
    Tba = {
      type: Dt.OBJECT,
      properties: {
        corrected_target_snippet: {
          type: Dt.STRING,
          description:
            "The corrected version of the target snippet that exactly and uniquely matches a segment within the provided file content.",
        },
      },
      required: ["corrected_target_snippet"],
    };
    Iba = {
      type: Dt.OBJECT,
      properties: {
        corrected_new_string: {
          type: Dt.STRING,
          description:
            "The original_new_string adjusted to be a suitable replacement for the corrected_old_string, while maintaining the original intent of the change.",
        },
      },
      required: ["corrected_new_string"],
    };
    Rba = {
      type: Dt.OBJECT,
      properties: {
        corrected_new_string_escaping: {
          type: Dt.STRING,
          description:
            "The new_string with corrected escaping, ensuring it is a proper replacement for the old_string, especially considering potential over-escaping issues from previous LLM generations.",
        },
      },
      required: ["corrected_new_string_escaping"],
    };
    Oba = {
      type: Dt.OBJECT,
      properties: {
        corrected_string_escaping: {
          type: Dt.STRING,
          description:
            "The string with corrected escaping, ensuring it is valid, specially considering potential over-escaping issues from previous LLM generations.",
        },
      },
      required: ["corrected_string_escaping"],
    };
  });
import * as LD from "fs";
import * as OU from "path";
var Fd,
  kU = j(() => {
    "use strict";
    aU();
    Fc();
    Bb();
    Ba();
    Bp();
    Pa();
    E0();
    Ag();
    wst();
    Oz();
    FE();
    fY();
    bi();
    Fd = class t extends Li {
      config;
      static Name = "replace";
      static DisplayName = "Edit";
      constructor(e) {
        (super(
          t.Name,
          t.DisplayName,
          `Replaces text within a file. By default, replaces a single occurrence, but can replace multiple occurrences when \`expected_replacements\` is specified. This tool requires providing significant context around the change to ensure precise targeting. Always use the ${ma.Name} tool to examine the file's current content before attempting a text replacement.

      The user has the ability to modify the \`new_string\` content. If modified, this will be stated in the response.

**Operating System Awareness:** 
- Current OS: ${process.platform} 
- On Windows (win32): Line endings will be automatically converted to CRLF (\r
)
- On Unix/Linux/macOS: Line endings will use LF (
)
- Ensure code formatting follows the target platform's conventions

Expectation for required parameters:
1. \`file_path\` MUST be an absolute path; otherwise an error will be thrown.
2. \`old_string\` MUST be the exact literal text to replace (including all whitespace, indentation, newlines, and surrounding code etc.).
3. \`new_string\` MUST be the exact literal text to replace \`old_string\` with (also including all whitespace, indentation, newlines, and surrounding code etc.). Ensure the resulting code is correct and idiomatic.
4. \`old_string\` and \`new_string\` MUST be different; identical values will result in an error.
5. NEVER escape \`old_string\` or \`new_string\`, that would break the exact literal text requirement.
**Important:** If ANY of the above are not satisfied, the tool will fail. CRITICAL for \`old_string\`: Must uniquely identify the single instance to change. Include at least 3 lines of context BEFORE and AFTER the target text, matching whitespace and indentation precisely. If this string matches multiple locations, or does not match exactly, the tool will fail.
**Multiple replacements:** Set \`expected_replacements\` to the number of occurrences you want to replace. The tool will replace ALL occurrences that match \`old_string\` exactly. Ensure the number of replacements matches your expectation.`,
          Mi.Pencil,
          Fi.Edit,
          {
            properties: {
              file_path: {
                description: "The absolute path to the file to modify. Must start with '/'.",
                type: Dt.STRING,
              },
              old_string: {
                description:
                  "The exact literal text to replace, preferably unescaped. For single replacements (default), include at least 3 lines of context BEFORE and AFTER the target text, matching whitespace and indentation precisely. For multiple replacements, specify expected_replacements parameter. If this string is not the exact literal text (i.e. you escaped it) or does not match exactly, the tool will fail.",
                type: Dt.STRING,
              },
              new_string: {
                description:
                  "The exact literal text to replace `old_string` with, preferably unescaped. Provide the EXACT text. Ensure the resulting code is correct and idiomatic.",
                type: Dt.STRING,
              },
              expected_replacements: {
                type: Dt.NUMBER,
                description:
                  "Number of replacements expected. Defaults to 1 if not specified. Use when you want to replace multiple occurrences.",
                minimum: 1,
              },
            },
            required: ["file_path", "old_string", "new_string"],
            type: Dt.OBJECT,
          },
          !0,
          !1,
          ["edit", "Write", "write", "Edit", "modify", "Modify", "Replace", "change", "Change", "update", "Update"],
        ),
          (this.config = e));
      }
      validateToolParams(e) {
        let r = iu.validate(this.schema.parameters, e);
        if (r) return r;
        if (!OU.isAbsolute(e.file_path)) return I.t("editTool.errors.pathNotAbsolute", { filePath: e.file_path });
        let n = this.config.getWorkspaceContext();
        if (!n.isPathWithinWorkspace(e.file_path)) {
          let o = n.getDirectories();
          return I.t("editTool.errors.pathNotInWorkspace", { directories: o.join(", ") });
        }
        return null;
      }
      toolLocations(e) {
        return [{ path: e.file_path }];
      }
      _applyReplacement(e, r, n, o) {
        if (o)
          return process.platform === "win32"
            ? n
                .replace(
                  /\r\n/g,
                  `
`,
                )
                .replace(
                  /\n/g,
                  `\r
`,
                )
            : n;
        if (e === null) {
          let a = r === "" ? n : "";
          return process.platform === "win32"
            ? a
                .replace(
                  /\r\n/g,
                  `
`,
                )
                .replace(
                  /\n/g,
                  `\r
`,
                )
            : a;
        }
        if (r === "" && !o) return e;
        let s = e.replaceAll(r, n);
        return process.platform === "win32"
          ? s
              .replace(
                /\r\n/g,
                `
`,
              )
              .replace(
                /\n/g,
                `\r
`,
              )
          : s;
      }
      async calculateEdit(e, r) {
        let n = e.expected_replacements ?? 1,
          o = null,
          s = !1,
          a = !1,
          u = e.new_string,
          c = e.old_string,
          m = 0,
          d;
        try {
          ((o = LD.readFileSync(e.file_path, "utf8")),
            (o = o.replace(
              /\r\n/g,
              `
`,
            )),
            (s = !0));
        } catch (p) {
          if (!Go(p) || p.code !== "ENOENT") throw p;
          s = !1;
        }
        if (e.old_string === "" && !s) a = !0;
        else if (!s)
          d = {
            display: I.t("editTool.errors.fileNotFound", { filePath: e.file_path }),
            raw: I.t("editTool.errors.fileNotFound", { filePath: e.file_path }),
            type: Lr.FILE_NOT_FOUND,
          };
        else if (o !== null) {
          let p = await qle(e.file_path, o, e, this.config.getGeminiClient(), r);
          if (((c = p.params.old_string), (u = p.params.new_string), (m = p.occurrences), e.old_string === ""))
            d = {
              display: I.t("editTool.errors.fileAlreadyExists", { filePath: e.file_path }),
              raw: `File already exists, cannot create: ${e.file_path}`,
              type: Lr.ATTEMPT_TO_CREATE_EXISTING_FILE,
            };
          else if (m === 0)
            d = {
              display: I.t("editTool.errors.stringNotFound", { filePath: e.file_path }),
              raw: `Failed to edit, 0 occurrences found for old_string in ${e.file_path}. No edits made. The exact text in old_string was not found. Ensure you're not escaping content incorrectly and check whitespace, indentation, and context. Use ${ma.Name} tool to verify.`,
              type: Lr.EDIT_NO_OCCURRENCE_FOUND,
            };
          else if (m !== n) {
            let h = n === 1 ? "occurrence" : "occurrences";
            d = {
              display: `Failed to edit, expected ${n} ${h} but found ${m}.`,
              raw: `Failed to edit, Expected ${n} ${h} but found ${m} for old_string in file: ${e.file_path}`,
              type: Lr.EDIT_EXPECTED_OCCURRENCE_MISMATCH,
            };
          } else
            c === u &&
              (d = {
                display: "No changes to apply. The old_string and new_string are identical.",
                raw: `No changes to apply. The old_string and new_string are identical in file: ${e.file_path}`,
                type: Lr.EDIT_NO_CHANGE,
              });
        } else
          d = {
            display: "Failed to read content of file.",
            raw: `Failed to read content of existing file: ${e.file_path}`,
            type: Lr.READ_CONTENT_FAILURE,
          };
        let f = this._applyReplacement(o, c, u, a);
        return { currentContent: o, newContent: f, occurrences: m, error: d, isNewFile: a };
      }
      async shouldConfirmExecute(e, r) {
        if (this.config.getApprovalMode() === dn.SMART) return this.generateConfirmationDetailsForSmart(e, r);
        if (this.config.getApprovalMode() === dn.PLAN) return !1;
        let n = this.validateToolParams(e);
        if (n) return (console.error(`[EditTool Wrapper] Attempted confirmation with invalid parameters: ${n}`), !1);
        let o;
        try {
          o = await this.calculateEdit(e, r);
        } catch (f) {
          let p = f instanceof Error ? f.message : String(f);
          return (console.log(`Error preparing edit: ${p}`), !1);
        }
        if (o.error) return (console.log(`Error: ${o.error.display}`), !1);
        let s = OU.basename(e.file_path),
          a = zf(s, o.currentContent ?? "", o.newContent, "Current", "Proposed", n3),
          u = this.config.getIdeClient(),
          c,
          m = !1;
        if (u?.getConnectionStatus().status === fa.Connected) {
          c = u.openDiff(e.file_path, o.newContent);
          try {
            let f = await c;
            f.status === "accepted" &&
              f.content &&
              ((e.old_string = o.currentContent ?? ""), (e.new_string = f.content), (m = !0));
          } catch {
            c = void 0;
          }
        }
        return m
          ? !1
          : {
              type: "edit",
              title: `Confirm Edit: ${ba(Mc(e.file_path, this.config.getTargetDir()))}`,
              fileName: s,
              fileDiff: a,
              originalContent: o.currentContent,
              newContent: o.newContent,
              onConfirm: async (f) => {
                if ((f === cn.ProceedAlways && this.config.setApprovalMode(dn.SMART), f === cn.ModifyWithEditor && c)) {
                  let p = await c;
                  p.status === "accepted" &&
                    p.content &&
                    ((e.old_string = o.currentContent ?? ""), (e.new_string = p.content));
                } else {
                  let p = this.config.getIdeClient();
                  p && p.resolveDiffFromCli(e.file_path, f === cn.Cancel ? "rejected" : "accepted");
                }
              },
              ideConfirmation: c,
            };
      }
      getDescription(e) {
        if (!e.file_path || !e.old_string || !e.new_string)
          return "Model did not provide valid parameters for edit tool";
        if (typeof e.old_string != "string" || typeof e.new_string != "string")
          return "Model provided invalid string parameters for edit tool";
        let r = Mc(e.file_path, this.config.getTargetDir());
        if (e.old_string === "") return I.t("editTool.messages.createFile", { path: ba(r) });
        let n =
            e.old_string
              .split(
                `
`,
              )[0]
              .substring(0, 30) + (e.old_string.length > 30 ? "..." : ""),
          o =
            e.new_string
              .split(
                `
`,
              )[0]
              .substring(0, 30) + (e.new_string.length > 30 ? "..." : "");
        return e.old_string === e.new_string
          ? I.t("editTool.messages.noChanges", { path: ba(r) })
          : `${ba(r)}: ${n} => ${o}`;
      }
      async execute(e, r) {
        let n = this.validateToolParams(e);
        if (n)
          return {
            llmContent: `Error: Invalid parameters provided. Reason: ${n}`,
            returnDisplay: `Error: ${n}`,
            error: { message: n, type: Lr.INVALID_TOOL_PARAMS },
          };
        let o;
        try {
          o = await this.calculateEdit(e, r);
        } catch (s) {
          let a = s instanceof Error ? s.message : String(s);
          return {
            llmContent: `Error preparing edit: ${a}`,
            returnDisplay: `Error preparing edit: ${a}`,
            error: { message: a, type: Lr.EDIT_PREPARATION_FAILURE },
          };
        }
        if (o.error)
          return {
            llmContent: o.error.raw,
            returnDisplay: `Error: ${o.error.display}`,
            error: { message: o.error.raw, type: o.error.type },
          };
        try {
          (this.ensureParentDirectoriesExist(e.file_path), LD.writeFileSync(e.file_path, o.newContent, "utf8"));
          let s;
          if (o.isNewFile) s = `Created ${ba(Mc(e.file_path, this.config.getTargetDir()))}`;
          else {
            let u = OU.basename(e.file_path);
            s = {
              fileDiff: zf(u, o.currentContent ?? "", o.newContent, "Current", "Proposed", n3),
              fileName: u,
              originalContent: o.currentContent,
              newContent: o.newContent,
            };
          }
          let a = [
            o.isNewFile
              ? `Created new file: ${e.file_path} with provided content.`
              : `Successfully modified file: ${e.file_path} (${o.occurrences} replacements).`,
          ];
          return (
            e.modified_by_user && a.push(`User modified the \`new_string\` content to be: ${e.new_string}.`),
            { llmContent: a.join(" "), returnDisplay: s }
          );
        } catch (s) {
          let a,
            u = Lr.FILE_WRITE_FAILURE;
          return (
            Go(s)
              ? (a = s.message || `Node.js error: ${s.code || "UNKNOWN"}`)
              : s instanceof Error
                ? (a = s.message)
                : (a = String(s)),
            (!a || a.trim() === "") && (a = "Unknown file write error occurred"),
            {
              llmContent: `Error executing edit: ${a}`,
              returnDisplay: `Error writing file: ${a}`,
              error: { message: a, type: u },
            }
          );
        }
      }
      ensureParentDirectoriesExist(e) {
        let r = OU.dirname(e);
        LD.existsSync(r) || LD.mkdirSync(r, { recursive: !0 });
      }
      getModifyContext(e) {
        return {
          getFilePath: (r) => r.file_path,
          getCurrentContent: async (r) => {
            try {
              return LD.readFileSync(r.file_path, "utf8");
            } catch (n) {
              if (!Go(n) || n.code !== "ENOENT") throw n;
              return "";
            }
          },
          getProposedContent: async (r) => {
            try {
              let n = LD.readFileSync(r.file_path, "utf8");
              return this._applyReplacement(n, r.old_string, r.new_string, r.old_string === "" && n === "");
            } catch (n) {
              if (!Go(n) || n.code !== "ENOENT") throw n;
              return "";
            }
          },
          createUpdatedParams: (r, n, o) => ({ ...o, old_string: r, new_string: n, modified_by_user: !0 }),
        };
      }
      async generateConfirmationDetailsForSmart(e, r) {
        try {
          let n = await this.calculateEdit(e, r);
          if (n.error) return !1;
          let o = OU.basename(e.file_path),
            s = zf(o, n.currentContent ?? "", n.newContent, "Current", "Proposed", n3);
          return {
            type: "edit",
            title: I.t("toolConfirmationMessage.smartModeRiskDetected"),
            fileName: e.file_path,
            fileDiff: s,
            originalContent: n.currentContent || "",
            newContent: n.newContent || "",
            onConfirm: async (a) => {
              a === cn.ProceedAlways && this.config.setApprovalMode(dn.SMART);
            },
          };
        } catch (n) {
          return (console.error("Failed to generate confirmation details for SMART mode:", n), !1);
        }
      }
    };
  });
function Ist(t, e) {
  if (!t) return "";
  if (typeof t == "string") return t;
  if (Array.isArray(t)) return t.map((n) => Ist(n, e)).join("");
  let r = t;
  if (e?.verbose) {
    if (r.videoMetadata !== void 0) return "[Video Metadata]";
    if (r.thought !== void 0) return `[Thought: ${r.thought}]`;
    if (r.codeExecutionResult !== void 0) return "[Code Execution Result]";
    if (r.executableCode !== void 0) return "[Executable Code]";
    if (r.fileData !== void 0) return "[File Data]";
    if (r.functionCall !== void 0) return `[Function Call: ${r.functionCall.name}]`;
    if (r.functionResponse !== void 0) return `[Function Response: ${r.functionResponse.name}]`;
    if (r.inlineData !== void 0) return `<${r.inlineData.mimeType}>`;
  }
  return r.text ?? "";
}
function Eii(t) {
  if (t.candidates && t.candidates.length > 0) {
    let e = t.candidates[0];
    if (e.content && e.content.parts && e.content.parts.length > 0)
      return e.content.parts
        .filter((r) => r.text)
        .map((r) => r.text)
        .join("");
  }
  return null;
}
var nlr = j(() => {
  "use strict";
});
async function vii(t, e, r, n = 2e3) {
  if (!t || t.length < n) return t;
  let s = [
      { role: "user", parts: [{ text: Bba.replace("{maxOutputTokens}", String(n)).replace("{textToSummarize}", t) }] },
    ],
    a = { maxOutputTokens: n };
  try {
    let u = await e.generateContent(s, a, r, ZR);
    return Eii(u) || t;
  } catch (u) {
    return (console.error("Failed to summarize tool output.", u), t);
  }
}
var Bba,
  Cii = j(() => {
    "use strict";
    b6();
    nlr();
    Bba = `Summarize the following tool output to be a maximum of {maxOutputTokens} tokens. The summary should be concise and capture the main points of the tool output.

The summarization should be done based on the content that is provided. Here are the basic rules to follow:
1. If the text is a directory listing or any output that is structural, use the history of the conversation to understand the context. Using this context try to understand what information we need from the tool output and return that as a response.
2. If the text is text content and there is nothing structural that we need, summarize the text.
3. If the text is the output of a shell command, use the history of the conversation to understand the context. Using this context try to understand what information we need from the tool output and return a summarization along with the stack trace of any error within the <error></error> tags. The stack trace should be complete and not truncated. If there are warnings, you should include them in the summary within <warning></warning> tags.


Text to summarize:
"{textToSummarize}"

Return the summary string which should first contain an overall summarization of text followed by the full stack trace of errors and warnings in the tool output.
`;
  });