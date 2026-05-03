/**
 * @module _ln
 * @category app/api
 * @label iflow-api
 * @position 727 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_ln) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class extends, class t, class t extends Error, class t, class t extends Fa, class t extends Fa, class t extends Fa, class extends, class t extends Fa, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class t extends Fa, class t extends Fa, class extends, class t extends Fa, class extends, class t extends Fa, class t extends Fa, class extends, class t extends Fa, class t extends Fa, class extends, class extends, class t extends Fa, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class t extends Fa, class extends, class s extends o, class extends, class extends, class t extends Error, class extends
 * Functions: b2, e5e, Aln, Sdn, eWe, TVe, LVe, H0, Jdn, Rdn, b1n, idn, XBt, K1n, hH
 * Features: esbuild module exports: _ln, CONTAINS iflow.cn API references, dotenv related, MCP server handling, telemetry/OTLP, agent/subagent
 * === End semantic info ===
 */


var _ln = T((Ei) => {
  "use strict";
  var $ns = wun().version,
    GL = Ff(),
    QL = Gun(),
    YR = zkt(),
    eE = Yun(),
    hqe = icn(),
    cln = acn(),
    lln = mcn(),
    ET = gcn(),
    KR = Scn(),
    gqe = Icn(),
    ZAe = Ocn(),
    mln = Lcn(),
    TOt = Qcn(),
    mH = Vcn(),
    jns = zcn(),
    dln = Xcn(),
    fln = tln(),
    pln = iln(),
    hln = uln(),
    e2e = process.platform,
    pqe = e2e === "win32",
    KAe = e2e === "freebsd",
    JAe = e2e === "openbsd",
    XAe = e2e === "netbsd",
    _T = e2e === "sunos";
  pqe && (GL.getCodepage(), GL.getPowershell());
  function gln() {
    return $ns;
  }
  function bln(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = {};
        ((r.version = gln()),
          Promise.all([
            QL.system(),
            QL.bios(),
            QL.baseboard(),
            QL.chassis(),
            YR.osInfo(),
            YR.uuid(),
            YR.versions(),
            eE.cpu(),
            eE.cpuFlags(),
            lln.graphics(),
            KR.networkInterfaces(),
            hqe.memLayout(),
            ET.diskLayout(),
            pln.audio(),
            hln.bluetoothDevices(),
            fln.usb(),
            dln.printer(),
          ]).then((n) => {
            ((r.system = n[0]),
              (r.bios = n[1]),
              (r.baseboard = n[2]),
              (r.chassis = n[3]),
              (r.os = n[4]),
              (r.uuid = n[5]),
              (r.versions = n[6]),
              (r.cpu = n[7]),
              (r.cpu.flags = n[8]),
              (r.graphics = n[9]),
              (r.net = n[10]),
              (r.memLayout = n[11]),
              (r.diskLayout = n[12]),
              (r.audio = n[13]),
              (r.bluetooth = n[14]),
              (r.usb = n[15]),
              (r.printer = n[16]),
              t && t(r),
              e(r));
          }));
      });
    });
  }
  function Aln(t, e, r) {
    return (
      GL.isFunction(e) && ((r = e), (e = "")),
      GL.isFunction(t) && ((r = t), (t = "")),
      new Promise((n) => {
        process.nextTick(() => {
          ((e = e || KR.getDefaultNetworkInterface()), (t = t || ""));
          let o = (() => {
              let a = 15;
              return (
                pqe && (a = 13),
                (KAe || JAe || XAe) && (a = 11),
                _T && (a = 6),
                function () {
                  --a === 0 && (r && r(s), n(s));
                }
              );
            })(),
            s = {};
          ((s.time = YR.time()),
            (s.node = process.versions.node),
            (s.v8 = process.versions.v8),
            eE.cpuCurrentSpeed().then((a) => {
              ((s.cpuCurrentSpeed = a), o());
            }),
            mln.users().then((a) => {
              ((s.users = a), o());
            }),
            ZAe.processes().then((a) => {
              ((s.processes = a), o());
            }),
            eE.currentLoad().then((a) => {
              ((s.currentLoad = a), o());
            }),
            _T ||
              eE.cpuTemperature().then((a) => {
                ((s.temp = a), o());
              }),
            !JAe &&
              !KAe &&
              !XAe &&
              !_T &&
              KR.networkStats(e).then((a) => {
                ((s.networkStats = a), o());
              }),
            _T ||
              KR.networkConnections().then((a) => {
                ((s.networkConnections = a), o());
              }),
            hqe.mem().then((a) => {
              ((s.mem = a), o());
            }),
            _T ||
              cln().then((a) => {
                ((s.battery = a), o());
              }),
            _T ||
              ZAe.services(t).then((a) => {
                ((s.services = a), o());
              }),
            _T ||
              ET.fsSize().then((a) => {
                ((s.fsSize = a), o());
              }),
            !pqe &&
              !JAe &&
              !KAe &&
              !XAe &&
              !_T &&
              ET.fsStats().then((a) => {
                ((s.fsStats = a), o());
              }),
            !pqe &&
              !JAe &&
              !KAe &&
              !XAe &&
              !_T &&
              ET.disksIO().then((a) => {
                ((s.disksIO = a), o());
              }),
            !JAe &&
              !KAe &&
              !XAe &&
              !_T &&
              gqe.wifiNetworks().then((a) => {
                ((s.wifiNetworks = a), o());
              }),
            TOt.inetLatency().then((a) => {
              ((s.inetLatency = a), o());
            }));
        });
      })
    );
  }
  function Qns(t, e, r) {
    return new Promise((n) => {
      process.nextTick(() => {
        let o = {};
        (e && GL.isFunction(e) && !r && ((r = e), (e = "")),
          t && GL.isFunction(t) && !e && !r && ((r = t), (t = ""), (e = "")),
          bln().then((s) => {
            ((o = s),
              Aln(t, e).then((a) => {
                for (let u in a) ({}).hasOwnProperty.call(a, u) && (o[u] = a[u]);
                (r && r(o), n(o));
              }));
          }));
      });
    });
  }
  function yln(t, e) {
    return new Promise((r) => {
      process.nextTick(() => {
        let n = Object.keys(t)
          .filter((o) => ({}).hasOwnProperty.call(Ei, o))
          .map((o) => {
            let s = t[o].substring(t[o].lastIndexOf("(") + 1, t[o].lastIndexOf(")")),
              a = o.indexOf(")") >= 0 ? o.split(")")[1].trim() : o;
            return ((a = o.indexOf("|") >= 0 ? o.split("|")[0].trim() : a), s ? Ei[a](s) : Ei[a](""));
          });
        Promise.all(n).then((o) => {
          let s = {},
            a = 0;
          for (let u in t)
            if ({}.hasOwnProperty.call(t, u) && {}.hasOwnProperty.call(Ei, u) && o.length > a) {
              if (t[u] === "*" || t[u] === "all") s[u] = o[a];
              else {
                let c = t[u],
                  m = "",
                  d = [];
                if (
                  (c.indexOf(")") >= 0 && (c = c.split(")")[1].trim()),
                  c.indexOf("|") >= 0 &&
                    ((m = c.split("|")[1].trim()), (d = m.split(":")), (c = c.split("|")[0].trim())),
                  (c = c.replace(/,/g, " ").replace(/ +/g, " ").split(" ")),
                  o[a])
                )
                  if (Array.isArray(o[a])) {
                    let f = [];
                    (o[a].forEach((p) => {
                      let h = {};
                      if (
                        (c.length === 1 && (c[0] === "*" || c[0] === "all")
                          ? (h = p)
                          : c.forEach((g) => {
                              ({}).hasOwnProperty.call(p, g) && (h[g] = p[g]);
                            }),
                        m && d.length === 2)
                      ) {
                        if ({}.hasOwnProperty.call(h, d[0].trim())) {
                          let g = h[d[0].trim()];
                          typeof g == "number"
                            ? g === parseFloat(d[1].trim()) && f.push(h)
                            : typeof g == "string" && g.toLowerCase() === d[1].trim().toLowerCase() && f.push(h);
                        }
                      } else f.push(h);
                    }),
                      (s[u] = f));
                  } else {
                    let f = {};
                    (c.forEach((p) => {
                      ({}).hasOwnProperty.call(o[a], p) && (f[p] = o[a][p]);
                    }),
                      (s[u] = f));
                  }
                else s[u] = {};
              }
              a++;
            }
          (e && e(s), r(s));
        });
      });
    });
  }
  function Gns(t, e, r) {
    let n = null;
    return setInterval(() => {
      yln(t).then((s) => {
        JSON.stringify(n) !== JSON.stringify(s) && ((n = Object.assign({}, s)), r(s));
      });
    }, e);
  }
  Ei.version = gln;
  Ei.system = QL.system;
  Ei.bios = QL.bios;
  Ei.baseboard = QL.baseboard;
  Ei.chassis = QL.chassis;
  Ei.time = YR.time;
  Ei.osInfo = YR.osInfo;
  Ei.versions = YR.versions;
  Ei.shell = YR.shell;
  Ei.uuid = YR.uuid;
  Ei.cpu = eE.cpu;
  Ei.cpuFlags = eE.cpuFlags;
  Ei.cpuCache = eE.cpuCache;
  Ei.cpuCurrentSpeed = eE.cpuCurrentSpeed;
  Ei.cpuTemperature = eE.cpuTemperature;
  Ei.currentLoad = eE.currentLoad;
  Ei.fullLoad = eE.fullLoad;
  Ei.mem = hqe.mem;
  Ei.memLayout = hqe.memLayout;
  Ei.battery = cln;
  Ei.graphics = lln.graphics;
  Ei.fsSize = ET.fsSize;
  Ei.fsOpenFiles = ET.fsOpenFiles;
  Ei.blockDevices = ET.blockDevices;
  Ei.fsStats = ET.fsStats;
  Ei.disksIO = ET.disksIO;
  Ei.diskLayout = ET.diskLayout;
  Ei.networkInterfaceDefault = KR.networkInterfaceDefault;
  Ei.networkGatewayDefault = KR.networkGatewayDefault;
  Ei.networkInterfaces = KR.networkInterfaces;
  Ei.networkStats = KR.networkStats;
  Ei.networkConnections = KR.networkConnections;
  Ei.wifiNetworks = gqe.wifiNetworks;
  Ei.wifiInterfaces = gqe.wifiInterfaces;
  Ei.wifiConnections = gqe.wifiConnections;
  Ei.services = ZAe.services;
  Ei.processes = ZAe.processes;
  Ei.processLoad = ZAe.processLoad;
  Ei.users = mln.users;
  Ei.inetChecksite = TOt.inetChecksite;
  Ei.inetLatency = TOt.inetLatency;
  Ei.dockerInfo = mH.dockerInfo;
  Ei.dockerImages = mH.dockerImages;
  Ei.dockerContainers = mH.dockerContainers;
  Ei.dockerContainerStats = mH.dockerContainerStats;
  Ei.dockerContainerProcesses = mH.dockerContainerProcesses;
  Ei.dockerVolumes = mH.dockerVolumes;
  Ei.dockerAll = mH.dockerAll;
  Ei.vboxInfo = jns.vboxInfo;
  Ei.printer = dln.printer;
  Ei.usb = fln.usb;
  Ei.audio = pln.audio;
  Ei.bluetoothDevices = hln.bluetoothDevices;
  Ei.getStaticData = bln;
  Ei.getDynamicData = Aln;
  Ei.getAllData = Qns;
  Ei.get = yln;
  Ei.observe = Gns;
  Ei.powerShellStart = GL.powerShellStart;
  Ei.powerShellRelease = GL.powerShellRelease;
});
async function DOt() {
  try {
    let { displays: t } = await Eln.default.graphics();
    if (!t?.length) return "-";
    let e = t.find((o) => o.main) || t[0],
      r = e.currentResX || e.resolutionX,
      n = e.currentResY || e.resolutionY;
    return r && n ? `${r}x${n}` : "-";
  } catch {
    return "-";
  }
}
var Eln,
  IOt = j(() => {
    "use strict";
    Eln = Se(_ln(), 1);
  });
async function bqe() {
  let t = new AbortController(),
    e = setTimeout(() => t.abort(), 3e3);
  try {
    let o = (await (await fetch("https://log.mmstat.com/v.gif", { signal: t.signal })).headers.getSetCookie()).find(
      (s) => s.startsWith("cna="),
    );
    return o ? o.split(";")?.[0]?.split("=")?.[1] : void 0;
  } catch {
    return;
  } finally {
    clearTimeout(e);
  }
}
async function vln({ cna: t, userId: e, iFlowEnv: r }) {
  if (!(!t || process.env.DISABLE_SEND_PV))
    try {
      let n = process.env.IFLOW_NON_INTERACTIVE === "true",
        s = "global" === "aone",
        a = await DOt(),
        u;
      s
        ? (u = n ? "a21111a.39011320.0.0.0" : "a21111a.39011391.0.0.0")
        : (u = n ? "a2110qe.33796382.46182003.0.0" : "a2110qe.32214347.46097794.0.0");
      let c = [
        "logtype=1",
        "title=iFlow-CLI",
        "pre=-",
        `scr=${a}`,
        `cna=${t}`,
        `spm-cnt=${u}`,
        "aplus",
        "pid=iflow",
        `_user_id=${e}`,
        `cache=${Math.floor(268435456 * Math.random()).toString(16)}`,
        "sidx=aplusSidex",
        "ckx=aplusCkx",
        `platformType=${process.env.IFLOW_RUN_IN || "pc"}`,
        `device_model=${Vns[process.platform] || process.platform}`,
        `os=${qns[process.platform] || process.platform}`,
        `o=${Hns[process.platform] || process.platform}`,
        `node_version=${process.version}`,
        `language=${process.env.LANG}`,
        `interactive=${n ? 0 : 1}`,
        `iFlowEnv=${r}`,
        "_g_encode=utf-8",
      ].join("&");
      await fetch("https://log.mmstat.com/v.gif", {
        method: "POST",
        headers: { "content-type": "text/plain;charset=UTF-8", "cache-control": "no-cache" },
        body: c,
      });
    } catch {}
}
var qns,
  Hns,
  Vns,
  ROt = j(() => {
    "use strict";
    IOt();
    ((qns = { darwin: encodeURIComponent("Mac OS X"), win32: "Windows", linux: "Linux" }),
      (Hns = { darwin: "mac", win32: "win" }),
      (Vns = { darwin: "Macintosh", win32: "Windows", linux: "Linux" }));
  });
async function kOt(t, e, r) {
  let n = wGe();
  try {
    let o = process.env.IFLOW_ENV || "",
      s = t.getCna();
    vln({ cna: s, userId: n, iFlowEnv: o });
  } catch (o) {
    t.getDebugMode() && console.error("Failed to send pv", o);
  }
  try {
    if (t.getDisableTelemetry()) return;
    let o = t.getSessionId();
    (tun(t, n), await fL.startSession(o, n, e, r));
  } catch (o) {
    t.getDebugMode() && console.error("Failed to initialize CLI telemetry:", o);
  }
}
async function t2e(t) {
  try {
    if (t.getDisableTelemetry()) return;
    await fL.endSession();
  } catch (e) {
    t.getDebugMode() && console.error("Failed to cleanup CLI telemetry:", e);
  }
}
async function Aqe(t, e) {
  if (!t.getDisableTelemetry())
    try {
      await fL.recordError(e);
    } catch (r) {
      t.getDebugMode() && console.error("Failed to record CLI error in telemetry:", r.message);
    }
}
async function yie(t, e, r, n) {
  try {
    await fL.recordError(r, { toolName: t, toolArgs: e, stderr: n });
  } catch {}
}
var OOt = j(() => {
  "use strict";
  NGe();
  Nkt();
  ROt();
  Dp();
});
import { EventEmitter as Wns } from "events";
var zns,
  Yns,
  yqe,
  Pb,
  NOt = j(() => {
    "use strict";
    Rne();
    ((zns = () => ({
      api: { totalRequests: 0, totalErrors: 0, totalLatencyMs: 0 },
      tokens: { prompt: 0, candidates: 0, total: 0, cached: 0, thoughts: 0, tool: 0 },
    })),
      (Yns = () => ({
        models: {},
        tools: {
          totalCalls: 0,
          totalSuccess: 0,
          totalFail: 0,
          totalDurationMs: 0,
          totalDecisions: { accept: 0, reject: 0, modify: 0 },
          byName: {},
        },
      })),
      (yqe = class extends Wns {
        #e = Yns();
        #t = 0;
        #r = !1;
        addEvent(e) {
          switch (e["event.name"]) {
            case EAe:
              this.processApiResponse(e);
              break;
            case _Ae:
              this.processApiError(e);
              break;
            case yAe:
              this.processToolCall(e);
              break;
            default:
              return;
          }
          this.emit("update", { metrics: this.#e, lastPromptTokenCount: this.#t });
        }
        getMetrics() {
          return this.#e;
        }
        getLastPromptTokenCount() {
          return this.#t;
        }
        resetLastPromptTokenCount() {
          ((this.#t = 0), this.emit("update", { metrics: this.#e, lastPromptTokenCount: this.#t }));
        }
        pauseTokenCountUpdates(e) {
          this.#r = e;
        }
        getOrCreateModelMetrics(e) {
          return (this.#e.models[e] || (this.#e.models[e] = zns()), this.#e.models[e]);
        }
        processApiResponse(e) {
          let r = this.getOrCreateModelMetrics(e.model);
          (r.api.totalRequests++,
            (r.api.totalLatencyMs += e.duration_ms),
            (r.tokens.prompt += e.input_token_count),
            (r.tokens.candidates += e.output_token_count),
            (r.tokens.total += e.total_token_count),
            (r.tokens.cached += e.cached_content_token_count),
            (r.tokens.thoughts += e.thoughts_token_count),
            (r.tokens.tool += e.tool_token_count),
            this.#r || (this.#t = e.input_token_count));
        }
        processApiError(e) {
          let r = this.getOrCreateModelMetrics(e.model);
          (r.api.totalRequests++, r.api.totalErrors++, (r.api.totalLatencyMs += e.duration_ms));
        }
        processToolCall(e) {
          let { tools: r } = this.#e;
          (r.totalCalls++,
            (r.totalDurationMs += e.duration_ms),
            e.success ? r.totalSuccess++ : r.totalFail++,
            r.byName[e.function_name] ||
              (r.byName[e.function_name] = {
                count: 0,
                success: 0,
                fail: 0,
                durationMs: 0,
                decisions: { accept: 0, reject: 0, modify: 0 },
              }));
          let n = r.byName[e.function_name];
          (n.count++,
            (n.durationMs += e.duration_ms),
            e.success ? n.success++ : n.fail++,
            e.decision && (r.totalDecisions[e.decision]++, n.decisions[e.decision]++));
        }
      }),
      (Pb = new yqe()));
  });
import { existsSync as POt, mkdirSync as Kns, writeFileSync as Cln, readFileSync as Jns } from "fs";
import { dirname as Xns, join as Zns } from "path";
import { randomUUID as eis } from "crypto";
function Sln() {
  let t = Y5(process.cwd());
  return Zns(t, "errors", wln(new Date()) + ".txt");
}
function wln(t) {
  return vAe(t);
}
var r2e,
  tis,
  _qe,
  _ie,
  BOt = j(() => {
    "use strict";
    Pa();
    jne();
    ((r2e = []), (tis = 100), (_qe = eis()));
    _ie = class {
      config;
      constructor(e) {
        this.config = { enabled: !0, maxInMemoryErrors: tis, enableFileLogging: !1, ...e };
      }
      logError(e, r) {
        try {
          let n = e instanceof Error ? e.stack || e.message : String(e),
            o = e instanceof Error ? e.constructor.name : "Unknown",
            s = { error: n, timestamp: Ec() };
          (r2e.length >= this.config.maxInMemoryErrors && r2e.shift(),
            r2e.push(s),
            this.config.enableFileLogging && this.appendToLog(Sln(), { error: n, errorType: o, context: r }));
        } catch {}
      }
      getInMemoryErrors() {
        return [...r2e];
      }
      getFileErrors() {
        return this.readLog(Sln());
      }
      clearLogs() {
        r2e.length = 0;
      }
      getConfig() {
        return { ...this.config };
      }
      generateGitHubIssueUrl(e, r) {
        let o = e
          .replace("{title}", encodeURIComponent(r.title))
          .replace("{problem}", encodeURIComponent(r.problem))
          .replace("{expected}", encodeURIComponent(r.expected))
          .replace("{info}", encodeURIComponent(r.info))
          .replace("{loginInfo}", encodeURIComponent(r.loginInfo || ""))
          .replace("{additionalContext}", encodeURIComponent(r.additionalContext || ""));
        if (o.length > 2e3) {
          let s = { ...r };
          (o.length > 2e3 &&
            s.problem.length > 500 &&
            ((s.problem = s.problem.substring(0, 500) + "... (truncated)"),
            (o = e
              .replace("{title}", encodeURIComponent(s.title))
              .replace("{problem}", encodeURIComponent(s.problem))
              .replace("{expected}", encodeURIComponent(s.expected))
              .replace("{info}", encodeURIComponent(s.info))
              .replace("{loginInfo}", encodeURIComponent(s.loginInfo || ""))
              .replace("{additionalContext}", encodeURIComponent(s.additionalContext || "")))),
            o.length > 2e3 &&
              s.additionalContext &&
              s.additionalContext.length > 300 &&
              ((s.additionalContext = s.additionalContext.substring(0, 300) + "... (truncated)"),
              (o = e
                .replace("{title}", encodeURIComponent(s.title))
                .replace("{problem}", encodeURIComponent(s.problem))
                .replace("{expected}", encodeURIComponent(s.expected))
                .replace("{info}", encodeURIComponent(s.info))
                .replace("{loginInfo}", encodeURIComponent(s.loginInfo || ""))
                .replace("{additionalContext}", encodeURIComponent(s.additionalContext)))),
            o.length > 2e3 &&
              s.problem.length > 200 &&
              ((s.problem = s.problem.substring(0, 200) + "... (truncated)"),
              (o = e
                .replace("{title}", encodeURIComponent(s.title))
                .replace("{problem}", encodeURIComponent(s.problem))
                .replace("{expected}", encodeURIComponent(s.expected))
                .replace("{info}", encodeURIComponent(s.info))
                .replace("{loginInfo}", encodeURIComponent(s.loginInfo || ""))
                .replace("{additionalContext}", encodeURIComponent(s.additionalContext || "")))));
        }
        return o;
      }
      readLog(e) {
        if (!POt(e)) return [];
        try {
          return JSON.parse(Jns(e, "utf8"));
        } catch {
          return [];
        }
      }
      appendToLog(e, r) {
        if (process.env.USER_TYPE === "external") return;
        let n = Xns(e);
        (POt(n) || Kns(n, { recursive: !0 }), POt(e) || Cln(e, "[]", "utf8"));
        let o = this.readLog(e),
          s = {
            ...r,
            cwd: process.cwd(),
            userType: process.env.USER_TYPE,
            sessionId: _qe,
            timestamp: Ec(),
            version: process.env.npm_package_version || "unknown",
          };
        (o.push(s), Cln(e, JSON.stringify(o, null, 2), "utf8"));
      }
    };
  });
function dH() {
  return (Eie || (Eie = new _ie()), Eie);
}
function LOt(t) {
  Eie || (Eie = new _ie(t));
}
function b2(t, e) {
  try {
    dH().logError(t, e);
  } catch {
    console.error("Failed to log error:", t);
  }
}
function ris() {
  try {
    return dH().getInMemoryErrors();
  } catch {
    return [];
  }
}
function nis() {
  try {
    return dH().getFileErrors();
  } catch {
    return [];
  }
}
function iis() {
  try {
    dH().clearLogs();
  } catch {}
}
function ois(t) {
  Eie = t;
}
var Eie,
  Eqe = j(() => {
    "use strict";
    BOt();
    Eie = null;
  });
function A4(t) {
  return { "session.id": t.getSessionId(), pwd: process.cwd() };
}
function ais(t, e) {
  let r = e instanceof Error && e.message ? e.message : String(e);
  b2(new Error(`Telemetry ${t} failed: ${r}`));
}
function y4(t, e) {
  try {
    e();
  } catch (r) {
    ais(t, r);
  }
}
function xln(t, e) {
  y4("logCliConfiguration", () => {
    if ((Ip.getInstance(t)?.logStartSessionEvent(e), !ng())) return;
    let r = {
        ...A4(t),
        "event.name": ran,
        "event.timestamp": Ec(),
        model: e.model,
        embedding_model: e.embedding_model,
        sandbox_enabled: e.sandbox_enabled,
        core_tools_enabled: e.core_tools_enabled,
        approval_mode: e.approval_mode,
        api_key_enabled: e.api_key_enabled,
        vertex_ai_enabled: e.vertex_ai_enabled,
        log_user_prompts_enabled: e.telemetry_log_user_prompts_enabled,
        file_filtering_respect_git_ignore: e.file_filtering_respect_git_ignore,
        debug_mode: e.debug_enabled,
        mcp_servers: e.mcp_servers,
      },
      n = tE.logs.getLogger(Mf),
      o = { body: "CLI configuration loaded.", attributes: r };
    n.emit(o);
  });
}
function vie(t, e) {
  y4("logUserPrompt", () => {
    if ((Ip.getInstance(t)?.logNewPromptEvent(e), !ng())) return;
    let r = { ...A4(t), "event.name": ean, "event.timestamp": Ec(), prompt_length: e.prompt_length };
    sis(t) && (r.prompt = e.prompt);
    let n = tE.logs.getLogger(Mf),
      o = { body: `User prompt. Length: ${e.prompt_length}.`, attributes: r };
    n.emit(o);
  });
}
function rE(t, e) {
  y4("logToolCall", () => {
    let r = { ...e, function_args: typeof e.function_args == "string" ? e.function_args : Zq(e.function_args) },
      n = { ...r, "event.name": yAe, "event.timestamp": Ec() };
    if ((Pb.addEvent(n), Ip.getInstance(t)?.logToolCallEvent(r), !ng())) return;
    let o = { ...A4(t), ...r, "event.name": yAe, "event.timestamp": Ec() };
    e.error && ((o["error.message"] = e.error), (o["error.type"] = e.error_type));
    let s = tE.logs.getLogger(Mf),
      a = {
        body: `Tool call: ${e.function_name}${e.decision ? `. Decision: ${e.decision}` : ""}. Success: ${e.success}. Duration: ${e.duration_ms}ms.`,
        attributes: o,
      };
    s.emit(a);
    let u,
      c = "main_agent";
    (e.function_name.startsWith("mcp_") || (e.server_name && e.server_name !== "")
      ? (u = "mcp")
      : e.function_name === "task" ||
          ["Task", "agent", "Agent", "subagent", "subAgent", "SubAgent"].includes(e.function_name)
        ? (u = "task")
        : (u = "builtin"),
      e.prompt_id &&
        (e.prompt_id.startsWith("subagent-") || e.prompt_id.startsWith("subagent-call_")) &&
        (c = "subagent"),
      u === "mcp"
        ? Kan(t, e.function_name, e.duration_ms, e.success, e.decision, c)
        : u === "builtin" && Jan(t, e.function_name, e.duration_ms, e.success, e.decision, c),
      Yan(t, e.function_name, e.duration_ms, e.success, e.decision, u));
  });
}
function vqe(t, e) {
  y4("logApiRequest", () => {
    if ((Ip.getInstance(t)?.logApiRequestEvent(e), !ng())) return;
    let r = {
        ...(t ? A4(t) : {}),
        "event.name": tan,
        "event.timestamp": Ec(),
        model: e.model,
        prompt_id: e.prompt_id,
        request_text: e.request_text,
        base_url: e.base_url,
        openai_request: e.openai_request,
      },
      n = tE.logs.getLogger(Mf),
      o = { body: `API request to ${e.model}.`, attributes: r };
    n.emit(o);
  });
}
function Cqe(t, e) {
  y4("logFlashFallback", () => {
    if ((Ip.getInstance(t)?.logFlashFallbackEvent(e), !ng())) return;
    let r = { ...A4(t), ...e, "event.name": nan, "event.timestamp": Ec() },
      n = tE.logs.getLogger(Mf),
      o = { body: "Switching to flash as Fallback.", attributes: r };
    n.emit(o);
  });
}
function h8(t, e) {
  y4("logApiError", () => {
    let r = { ...e, "event.name": _Ae, "event.timestamp": Ec() };
    if ((Pb.addEvent(r), Ip.getInstance(t)?.logApiErrorEvent(e), !ng())) return;
    let n = {
      ...A4(t),
      ...e,
      "event.name": _Ae,
      "event.timestamp": Ec(),
      "error.message": e.error,
      model_name: e.model,
      duration: e.duration_ms,
    };
    (e.error_type && (n["error.type"] = e.error_type),
      typeof e.status_code == "number" && (n[Cte.HTTP_STATUS_CODE] = e.status_code));
    let o = tE.logs.getLogger(Mf),
      s = { body: `API error for ${e.model}. Error: ${e.error}. Duration: ${e.duration_ms}ms.`, attributes: n };
    (o.emit(s), Zan(t, e.model, e.duration_ms, e.status_code, e.error_type, e.http_status_code, e.business_code));
  });
}
function Sqe(t, e) {
  y4("logApiResponse", () => {
    let r = { ...e, "event.name": EAe, "event.timestamp": Ec() };
    if ((Pb.addEvent(r), Ip.getInstance(t)?.logApiResponseEvent(e), !ng())) return;
    let n = { ...A4(t), ...e, "event.name": EAe, "event.timestamp": Ec() };
    (e.response_text && (n.response_text = e.response_text),
      e.error
        ? (n["error.message"] = e.error)
        : e.status_code && typeof e.status_code == "number" && (n[Cte.HTTP_STATUS_CODE] = e.status_code));
    let o = tE.logs.getLogger(Mf),
      s = {
        body: `API response from ${e.model}. Status: ${e.status_code || "N/A"}. Duration: ${e.duration_ms}ms.`,
        attributes: n,
      };
    (o.emit(s),
      Xan(
        t,
        e.model,
        e.duration_ms,
        e.business_code || e.status_code,
        e.error,
        e.finish_reason,
        e.http_status_code,
        e.business_code,
      ),
      Gne(t, e.model, e.input_token_count, "input"),
      Gne(t, e.model, e.output_token_count, "output"),
      Gne(t, e.model, e.cached_content_token_count, "cache"),
      Gne(t, e.model, e.thoughts_token_count, "thought"),
      Gne(t, e.model, e.tool_token_count, "tool"));
  });
}
function wqe(t, e) {
  y4("logLoopDetected", () => {
    if ((Ip.getInstance(t)?.logLoopDetectedEvent(e), !ng())) return;
    let r = { ...A4(t), ...e },
      n = tE.logs.getLogger(Mf),
      o = { body: `Loop detected. Type: ${e.loop_type}.`, attributes: r };
    (n.emit(o), iun(t, e.loop_type, e.prompt_id));
  });
}
function Tln(t, e) {
  y4("logNextSpeakerCheck", () => {
    if ((Ip.getInstance(t)?.logNextSpeakerCheck(e), !ng())) return;
    let r = { ...A4(t), ...e, "event.name": ian },
      n = tE.logs.getLogger(Mf),
      o = { body: "Next speaker check.", attributes: r };
    n.emit(o);
  });
}
function Cie(t, e) {
  y4("logSlashCommand", () => {
    if ((Ip.getInstance(t)?.logSlashCommandEvent(e), !ng())) return;
    let r = { ...A4(t), ...e, "event.name": oan },
      n = tE.logs.getLogger(Mf),
      o = { body: `Slash command: ${e.command}.`, attributes: r };
    n.emit(o);
  });
}
function xqe(t) {
  y4("logCliResponse", () => {
    if (!ng()) return;
    let e = { ...A4(t), "event.name": san, "event.timestamp": Ec() },
      r = tE.logs.getLogger(Mf),
      n = { body: "CLI response.", attributes: e };
    r.emit(n);
  });
}
var tE,
  sis,
  n2e = j(() => {
    "use strict";
    tE = Se(Xte(), 1);
    $1();
    jne();
    Rne();
    Dp();
    IAe();
    NOt();
    xAe();
    SGe();
    Eqe();
    sis = (t) => t.getTelemetryLogPromptsEnabled();
  });
function Dln(t) {
  if (!t.length) return "";
  let e = t[t.length - 1],
    r = t[t.length - 2];
  if (e?.role === "tool" && e?.tool_call_id && r?.tool_calls && Array.isArray(r.tool_calls)) {
    let n = r.tool_calls.find((o) => o.id === e.tool_call_id);
    if (n?.function?.name) return n.function.name;
  }
  return "";
}
var Iln = j(() => {
  "use strict";
});
function hH(t) {
  return fH.test(t || "");
}
function Sie(t) {
  return Rln.test(t || "");
}
function wie(t) {
  return pH.test(t || "");
}
var fH,
  Rln,
  pH,
  i2e = j(() => {
    "use strict";
    ((fH = /claude|haiku|sonnet|opus/i), (Rln = /gpt-5/i), (pH = /deepseek/i));
  });
function JR(t, e) {
  if (e && e > 0) return e;
  if (!t || typeof t != "string") return Tqe;
  let r = t.toLowerCase();
  if (kln[t]) return kln[t];
  for (let n of uis)
    if (n.pattern.test(r)) {
      for (let [o, s] of Object.entries(n.limits)) if (o !== "default" && r.includes(o)) return s;
      return n.limits.default ?? n.defaultLimit ?? Tqe;
    }
  return Tqe;
}
function MOt(t, e = 0, r) {
  if (r && r > 0) return r;
  if (!t || typeof t != "string") return 8e3;
  let n = t.toLowerCase(),
    o = 8e3;
  if (Oln[t]) o = Oln[t];
  else
    for (let s of cis)
      if (s.pattern.test(n)) {
        for (let [a, u] of Object.entries(s.limits))
          if (a !== "default" && n.includes(a)) {
            o = u;
            break;
          }
        o === 8e3 && (o = s.limits.default ?? s.defaultLimit ?? 8e3);
        break;
      }
  return o;
}
var Tqe,
  uis,
  kln,
  cis,
  Oln,
  o2e = j(() => {
    "use strict";
    i2e();
    ((Tqe = 128e3),
      (uis = [
        { pattern: /kimi/i, limits: { "k2.5": 262144, "k2-0905": 256e3, "k2-thinking": 256e3, k2: 128e3 } },
        { pattern: /iFlow-ROME-30BA3B/i, limits: { default: 256e3 } },
        { pattern: /minimax/i, limits: { default: 128e3 } },
        { pattern: /glm/i, limits: { "-5": 17e4, "-4.7": 2e5, "-4.6": 2e5, "-4.5": 128e3 }, defaultLimit: 128e3 },
        { pattern: fH, limits: {}, defaultLimit: 2e5 },
        { pattern: pH, limits: { v3: 128e3, default: 65e3 } },
        {
          pattern: /qwen3/i,
          limits: { coder: 256e3, thinking: 2e5, instruct: 2e5, "max-preview": 256e3, default: 128e3 },
        },
        { pattern: /qwen/i, limits: { max: 1228e3, plus: 1228e3 } },
        { pattern: /gpt/i, limits: { "32k": 32e3, default: 128e3 } },
        { pattern: /mimo/i, limits: { default: 256e3 } },
      ]),
      (kln = {
        "gemini-1.5-pro": 2097152,
        "gemini-1.5-flash": 1048576,
        "gemini-2.5-pro-preview-05-06": 1048576,
        "gemini-2.5-pro-preview-06-05": 1048576,
        "gemini-2.5-pro": 1048576,
        "gemini-2.5-flash-preview-05-20": 1048576,
        "gemini-2.5-flash": 1048576,
        "gemini-2.0-flash": 1048576,
        "gemini-2.0-flash-preview-image-generation": 32e3,
      }),
      (cis = [
        {
          pattern: /kimi/i,
          limits: { "k2.5": 32768, "k2-0905": 32e3, "k2-thinking": 32e3, "ide-modelscope": 8192, default: 32e3 },
        },
        { pattern: /iFlow-ROME-30BA3B/i, limits: { default: 64e3 } },
        { pattern: /minimax/i, limits: { default: 64e3 } },
        { pattern: /glm/i, limits: { "-5": 32e3, 4.7: 32e3, "ide-modelscope": 16384 }, defaultLimit: 32e3 },
        { pattern: fH, limits: {}, defaultLimit: 64e3 },
        { pattern: pH, limits: { "v3.2-reasoner": 64e3, v3: 8192, r1: 32e3, default: 8e3 } },
        { pattern: /qwen3/i, limits: { coder: 64e3, "max-preview": 32e3, default: 8192 } },
        { pattern: /qwen/i, limits: { max: 8192, plus: 8192, default: 8e3 } },
        { pattern: /gpt/i, limits: { "32k": 4096, default: 16384 } },
        { pattern: /mimo/i, limits: { default: 64e3 } },
      ]),
      (Oln = {
        "gemini-1.5-pro": 8192,
        "gemini-1.5-flash": 65536,
        "gemini-2.5-pro-preview-05-06": 65536,
        "gemini-2.5-pro-preview-06-05": 65536,
        "gemini-2.5-pro": 65536,
        "gemini-2.5-flash-preview-05-20": 65536,
        "gemini-2.5-flash": 65536,
        "gemini-2.0-flash": 65536,
        "gemini-2.0-flash-preview-image-generation": 8192,
      }));
  });
var Nln = {};
Wi(Nln, { MultimodalHelper: () => _4 });
import lis from "crypto";
var _4,
  s2e = j(() => {
    "use strict";
    _4 = class t {
      apiKey;
      baseUrl;
      modelName;
      isIFlowMode;
      isAoneMode;
      static descriptionCache = new Map();
      constructor(e, r, n, o = !1, s = !1) {
        ((this.apiKey = e),
          (this.baseUrl = r),
          (this.modelName = n || ""),
          (this.isIFlowMode = o),
          (this.isAoneMode = s));
      }
      generateCacheKey(e, r, n = "") {
        let o = `${e}|${r}|${n}`;
        return lis.createHash("sha256").update(o).digest("hex");
      }
      async generateImageDescription(e, r) {
        if (!this.isIFlowMode && !this.modelName)
          throw new Error("No multimodal model specified for image description");
        let n = this.generateCacheKey(e, r),
          o = t.descriptionCache.get(n);
        if (o) return o;
        let s = this.createImageAnalysisPrompt();
        try {
          let a =
            this.isIFlowMode && (this.baseUrl === "https://apis.iflow.cn/v1 /* @iflow-api-endpoint */" || this.baseUrl.includes("iflow"))
              ? "qwen3-vl-plus"
              : this.modelName;
          a =
            this.isAoneMode && this.baseUrl === "https://ducky.code.alibaba-inc.com/v1/openai"
              ? "Qwen2.5-VL-72B_aone"
              : a;
          let u = {
              model: a,
              messages: [
                {
                  role: "user",
                  content: [
                    { type: "text", text: s },
                    { type: "image_url", image_url: { url: `data:${r};base64,${e}` } },
                  ],
                },
              ],
              temperature: 0.1,
              max_tokens: 2e3,
            },
            c = this.baseUrl.endsWith("/") ? this.baseUrl.slice(0, -1) : this.baseUrl,
            m = await fetch(`${c}/chat/completions`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.apiKey}`,
                "user-agent": "iFlow-Cli-MultimodalHelper",
              },
              body: JSON.stringify(u),
            });
          if (!m.ok) {
            let h = await m.text();
            throw new Error(`API error! status: ${m.status}, body: ${h} TraceID: ${m.headers.get("eagleeye-traceid")}`);
          }
          let d;
          try {
            d = await m.json();
          } catch {
            throw new Error(`Response format error. TraceID: ${m.headers.get("eagleeye-traceid")}`);
          }
          if (d.msg && d.msg.includes("invalid apiKey")) throw new Error("Invalid API key provided for model");
          let f = d.choices?.[0]?.message?.content;
          if (!f) throw new Error("No description generated by model");
          let p = f.trim();
          return (t.descriptionCache.set(n, p), p);
        } catch (a) {
          throw new Error(`Image description error: ${a instanceof Error ? a.message : String(a)}`);
        }
      }
      async generateImageDescriptionFromPrompt(e, r, n) {
        if (!this.isIFlowMode && !this.modelName)
          throw new Error("No multimodal model specified for image description");
        let o = this.generateCacheKey(e, r, n),
          s = t.descriptionCache.get(o);
        if (s) return s;
        try {
          let a =
            this.isIFlowMode && (this.baseUrl === "https://apis.iflow.cn/v1 /* @iflow-api-endpoint */" || this.baseUrl.includes("iflow"))
              ? "qwen3-vl-plus"
              : this.modelName;
          a =
            this.isAoneMode && this.baseUrl === "https://ducky.code.alibaba-inc.com/v1/openai"
              ? "Qwen2.5-VL-72B_aone"
              : a;
          let u = {
              model: a,
              messages: [
                {
                  role: "user",
                  content: [
                    { type: "text", text: n },
                    { type: "image_url", image_url: { url: `data:${r};base64,${e}` } },
                  ],
                },
              ],
              temperature: 0.1,
              max_tokens: 2e3,
            },
            c = this.baseUrl.endsWith("/") ? this.baseUrl.slice(0, -1) : this.baseUrl,
            m = await fetch(`${c}/chat/completions`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.apiKey}`,
                "user-agent": "iFlow-Cli-MultimodalHelper",
              },
              body: JSON.stringify(u),
            });
          if (!m.ok) {
            let h = await m.text();
            throw new Error(`API error! status: ${m.status}, body: ${h} TraceID: ${m.headers.get("eagleeye-traceid")}`);
          }
          let d;
          try {
            d = await m.json();
          } catch {
            throw new Error(`Response format error. TraceID: ${m.headers.get("eagleeye-traceid")}`);
          }
          if (d.msg && d.msg.includes("invalid apiKey")) throw new Error("Invalid API key provided for model");
          let f = d.choices?.[0]?.message?.content;
          if (!f) throw new Error("No description generated by model");
          let p = f.trim();
          return (t.descriptionCache.set(o, p), p);
        } catch (a) {
          throw new Error(`Image description error: ${a instanceof Error ? a.message : String(a)}`);
        }
      }
      async generateContextAwareImageDescription(e, r, n) {
        let o = this.createContextAwarePrompt(n);
        return await this.generateImageDescriptionFromPrompt(e, r, o);
      }
      createContextAwarePrompt(e) {
        let r = this.createImageAnalysisPrompt();
        return !e || e.trim() === ""
          ? r
          : `${r}

**\u7528\u6237\u7279\u522B\u5173\u6CE8\u7684\u4E0A\u4E0B\u6587\u4FE1\u606F\uFF1A**
${e}

**\u989D\u5916\u7684\u5206\u6790\u8981\u6C42\uFF1A**
\u8BF7\u6839\u636E\u4EE5\u4E0A\u4E0A\u4E0B\u6587\u4FE1\u606F\uFF0C\u5728\u5206\u6790\u56FE\u7247\u65F6\u7279\u522B\u5173\u6CE8\uFF1A
1. \u4E0E\u7528\u6237\u4E0A\u4E0B\u6587\u76F4\u63A5\u76F8\u5173\u7684\u5185\u5BB9\u548C\u7EC6\u8282
2. \u80FD\u591F\u5E2E\u52A9\u56DE\u7B54\u7528\u6237\u95EE\u9898\u6216\u6EE1\u8DB3\u7528\u6237\u9700\u6C42\u7684\u4FE1\u606F
3. \u4EFB\u4F55\u4E0E\u4E0A\u4E0B\u6587\u76F8\u5173\u7684\u7279\u5B9A\u7279\u5F81\u3001\u6570\u636E\u6216\u5173\u7CFB

\u8BF7\u5728\u539F\u6709\u5206\u6790\u7ED3\u6784\u7684\u57FA\u7840\u4E0A\uFF0C\u9488\u5BF9\u7528\u6237\u4E0A\u4E0B\u6587\u63D0\u4F9B\u66F4\u6709\u9488\u5BF9\u6027\u7684\u5206\u6790\u3002`;
      }
      createImageAnalysisPrompt() {
        return `\u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A\u7684\u591A\u6A21\u6001AI\u5206\u6790\u4E13\u5BB6\uFF0C\u80FD\u591F\u6DF1\u5EA6\u7406\u89E3\u56FE\u7247\u5185\u5BB9\u5E76\u63D0\u4F9B\u53EF\u7528\u4E8E\u56DE\u7B54\u95EE\u9898\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002\u8BF7\u6309\u4EE5\u4E0B\u7B56\u7565\u5206\u6790\u56FE\u7247\uFF1A

**\u6838\u5FC3\u5206\u6790\u539F\u5219\uFF1A**
1. **\u4FE1\u606F\u63D0\u53D6\u4F18\u5148**\uFF1A\u91CD\u70B9\u63D0\u53D6\u56FE\u50CF\u4E2D\u7684\u5173\u952E\u4FE1\u606F\uFF0C\u5BF9\u6570\u5B66\u3001\u903B\u8F91\u95EE\u9898\u8FDB\u884C\u5B8C\u6574\u8F6C\u5F55
2. **\u7ED3\u6784\u5316\u89E3\u6790**\uFF1A\u7CFB\u7EDF\u6027\u5730\u89E3\u6790\u8868\u683C\u3001\u56FE\u8868\u3001\u6D41\u7A0B\u56FE\u7B49\u7ED3\u6784\u5316\u5185\u5BB9
3. **\u5B8C\u6574\u6027\u4FDD\u8BC1**\uFF1A\u786E\u4FDD\u91CD\u8981\u4FE1\u606F\u4E0D\u9057\u6F0F\uFF0C\u7279\u522B\u662F\u6570\u5B57\u3001\u6587\u5B57\u3001\u5173\u7CFB

**\u5177\u4F53\u5206\u6790\u8981\u6C42\uFF1A**

**1. \u6570\u5B66\u5185\u5BB9\u5904\u7406\uFF1A**
- \u5B8C\u6574\u8F6C\u5F55\u6240\u6709\u6570\u5B66\u8868\u8FBE\u5F0F\u3001\u65B9\u7A0B\u3001\u7B97\u5F0F
- \u660E\u786E\u6807\u8BC6\u53D8\u91CF\u3001\u7CFB\u6570\u3001\u8FD0\u7B97\u7B26\u7684\u503C\u548C\u4F4D\u7F6E\u5173\u7CFB
- \u5BF9\u590D\u6742\u8868\u8FBE\u5F0F\u8FDB\u884C\u9010\u6B65\u5206\u89E3\u8BF4\u660E

**2. \u6587\u5B57\u4FE1\u606F\u63D0\u53D6\uFF1A**
- \u5B8C\u6574\u3001\u51C6\u786E\u5730\u8F6C\u5F55\u6240\u6709\u53EF\u89C1\u6587\u5B57\u5185\u5BB9
- \u6CE8\u660E\u6587\u5B57\u7684\u4F4D\u7F6E\u3001\u5927\u5C0F\u3001\u989C\u8272\u3001\u5B57\u4F53\u98CE\u683C
- \u5BF9\u91CD\u8981\u7684\u6570\u5B57\u3001\u4EF7\u683C\u3001\u6570\u91CF\u4FE1\u606F\u7279\u522B\u6807\u6CE8
- \u8BC6\u522B\u5E76\u8F6C\u5F55\u8868\u683C\u4E2D\u7684\u6240\u6709\u6570\u636E

**3. \u7ED3\u6784\u5316\u5185\u5BB9\u89E3\u6790\uFF1A**
- \u8868\u683C\uFF1A\u9010\u884C\u9010\u5217\u8BE6\u7EC6\u63CF\u8FF0\uFF0C\u5305\u62EC\u8868\u5934\u3001\u6570\u636E\u3001\u8BA1\u7B97\u7ED3\u679C
- \u56FE\u8868\uFF1A\u63CF\u8FF0\u8F74\u6807\u7B7E\u3001\u6570\u636E\u70B9\u3001\u8D8B\u52BF\u3001\u6BD4\u8F83\u5173\u7CFB
- \u6D41\u7A0B\u56FE\uFF1A\u8BF4\u660E\u6BCF\u4E2A\u6B65\u9AA4\u3001\u51B3\u7B56\u70B9\u3001\u8FDE\u63A5\u5173\u7CFB
- \u83DC\u5355/\u4EF7\u76EE\u8868\uFF1A\u5217\u51FA\u6240\u6709\u9879\u76EE\u540D\u79F0\u548C\u5BF9\u5E94\u4EF7\u683C

**4. \u7A7A\u95F4\u5173\u7CFB\u5B9A\u4F4D\uFF1A**
- \u4F7F\u7528\u660E\u786E\u7684\u65B9\u4F4D\u8BCD\uFF08\u5DE6\u4E0A\u3001\u53F3\u4E0B\u3001\u4E2D\u592E\u7B49\uFF09
- \u5BF9\u591A\u4E2A\u76F8\u4F3C\u5BF9\u8C61\u8FDB\u884C\u7F16\u53F7\u6216\u6392\u5E8F\u8BF4\u660E
- \u63CF\u8FF0\u5BF9\u8C61\u95F4\u7684\u76F8\u5BF9\u4F4D\u7F6E\u548C\u5927\u5C0F\u5173\u7CFB

**5. UI/\u754C\u9762\u5F00\u53D1\u63CF\u8FF0\uFF1A**
- **\u5E03\u5C40\u7ED3\u6784**\uFF1A\u8BE6\u7EC6\u63CF\u8FF0\u9875\u9762\u5E03\u5C40\u3001\u7F51\u683C\u7CFB\u7EDF\u3001\u7EC4\u4EF6\u5C42\u6B21\u5173\u7CFB
- **\u8BBE\u8BA1\u7CFB\u7EDF**\uFF1A\u8BC6\u522B\u5E76\u63CF\u8FF0\u8272\u5F69\u65B9\u6848\u3001\u5B57\u4F53\u3001\u95F4\u8DDD\u3001\u5706\u89D2\u3001\u9634\u5F71\u7B49\u8BBE\u8BA1\u89C4\u8303
- **\u4EA4\u4E92\u5143\u7D20**\uFF1A\u8BE6\u7EC6\u63CF\u8FF0\u6309\u94AE\u3001\u8F93\u5165\u6846\u3001\u5BFC\u822A\u3001\u5361\u7247\u7B49UI\u7EC4\u4EF6\u7684\u6837\u5F0F\u548C\u72B6\u6001
- **\u54CD\u5E94\u5F0F\u7279\u5F81**\uFF1A\u6CE8\u610F\u4E0D\u540C\u5C3A\u5BF8\u4E0B\u7684\u5E03\u5C40\u9002\u914D\u548C\u5143\u7D20\u6392\u5217
- **\u89C6\u89C9\u5C42\u6B21**\uFF1A\u5206\u6790\u4FE1\u606F\u67B6\u6784\u3001\u89C6\u89C9\u6743\u91CD\u3001\u7126\u70B9\u5F15\u5BFC
- **\u54C1\u724C\u5143\u7D20**\uFF1A\u8BC6\u522BLogo\u3001\u54C1\u724C\u8272\u3001\u56FE\u6807\u98CE\u683C\u7B49\u54C1\u724C\u8BC6\u522B\u5143\u7D20
- **CSS\u5C5E\u6027\u5EFA\u8BAE**\uFF1A\u9488\u5BF9\u5173\u952E\u5143\u7D20\u63D0\u4F9B\u5177\u4F53\u7684CSS\u5B9E\u73B0\u5EFA\u8BAE\uFF08\u989C\u8272\u503C\u3001\u5C3A\u5BF8\u3001\u5B57\u4F53\u7B49\uFF09

**\u8F93\u51FA\u683C\u5F0F\uFF1A**
\u8BF7\u6309\u7167\u4EE5\u4E0B\u7ED3\u6784\u7EC4\u7EC7\u63CF\u8FF0\uFF1A

**\u6574\u4F53\u6982\u8FF0\uFF1A** [\u56FE\u7247\u7C7B\u578B\u3001\u4E3B\u8981\u5185\u5BB9\u3001\u5E03\u5C40\u7ED3\u6784]

**\u5173\u952E\u4FE1\u606F\u63D0\u53D6\uFF1A**
- \u4FE1\u606F\u5185\u5BB9\uFF1A[\u4EC5\u5F53\u56FE\u7247\u5305\u542B\u6587\u5B57\u6216\u8BA1\u7B97\u4FE1\u606F\u65F6\uFF0C\u5B8C\u6574\u8F6C\u5F55\uFF0C\u7279\u522B\u662F\u6570\u5B57\u3001\u4EF7\u683C\u3001\u540D\u79F0]
- \u7ED3\u6784\u5316\u6570\u636E\uFF1A[\u4EC5\u5F53\u56FE\u7247\u5305\u542B\u7ED3\u6784\u5316\u6570\u636E\u65F6\uFF0C\u5B8C\u6574\u8F6C\u5F55\u8868\u683C\u3001\u56FE\u8868\u7684\u8BE6\u7EC6\u5185\u5BB9]
- \u91CD\u8981\u5BF9\u8C61\uFF1A[\u4EBA\u7269\u3001\u7269\u54C1\u3001\u4F4D\u7F6E\u7B49\u5173\u952E\u8981\u7D20]

**\u7A7A\u95F4\u5E03\u5C40\uFF1A** [\u8BE6\u7EC6\u7684\u4F4D\u7F6E\u5173\u7CFB\u63CF\u8FF0]

**UI\u8BBE\u8BA1\u5206\u6790\uFF1A** [\u4EC5\u5F53\u56FE\u7247\u5305\u542B\u754C\u9762/\u8BBE\u8BA1\u5143\u7D20\u65F6]
- \u8272\u5F69\u65B9\u6848\uFF1A[\u4E3B\u8272\u8C03\u3001\u8F85\u52A9\u8272\u3001\u5177\u4F53\u8272\u503C\u5EFA\u8BAE]
- \u5B57\u4F53\u7CFB\u7EDF\uFF1A[\u5B57\u4F53\u65CF\u3001\u5927\u5C0F\u3001\u6743\u91CD\u3001\u884C\u9AD8]
- \u5E03\u5C40\u7F51\u683C\uFF1A[\u6805\u683C\u7CFB\u7EDF\u3001\u95F4\u8DDD\u89C4\u5F8B\u3001\u5BF9\u9F50\u65B9\u5F0F]
- \u7EC4\u4EF6\u6837\u5F0F\uFF1A[\u6309\u94AE\u3001\u5361\u7247\u3001\u8868\u5355\u7B49UI\u7EC4\u4EF6\u7684\u8BBE\u8BA1\u89C4\u8303]
- \u4EA4\u4E92\u72B6\u6001\uFF1A[hover\u3001active\u3001disabled\u7B49\u72B6\u6001\u8BBE\u8BA1]

\u8F93\u51FA\u8981\u6C42\uFF1A\u7528**\u7528\u6237\u6240\u4F7F\u7528\u7684\u8BED\u8A00**\u8F93\u51FA\uFF0C\u7B80\u6D01\uFF0C\u4F46\u4FE1\u606F\u5B8C\u6574\u3001\u51C6\u786E\u3002`;
      }
      static isMultimodalModel(e) {
        let r = [
            "gemini-2.5-flash-06-17",
            "gemini-2.5-flash-lite-preview-06-17",
            "gemini-2.5-flash-preview-05-20",
            "gemini-2.5-flash-preview-04-17",
            "gemini-2.5-pro-06-17",
            "gemini-2.5-pro-preview-05-06",
            "gemini-2.5-pro-03-25",
            "gemini-2.5-pro-preview-06-05",
            "o3-pro-0610-global",
            "claude_opus4",
            "claude3_opus",
            "claude_sonnet4",
            "claude37_sonnet",
            "claude35_sonnet2",
            "claude35_sonnet",
            "o3-0416-global",
            "o4-mini-0416-global",
            "o3-mini-2025-01-31",
            "o3-mini-0131-global",
            "o1-preview-0912-global",
            "o1-preview-0912",
            "o1-mini-0912-global",
            "o1-mini-0912",
            "o1-2024-12-17",
            "o1-1217-global",
            "o1-1217",
            "qwen-plus-latest-inc",
            "kimi-k2.5",
            "qwen-plus-latest",
            "qwen-plus",
            "qwen-plus-safe",
            "gemini-2.0-flash",
            "gemini-2.0-flash-thinking",
            "gemini-2.0-flash-exp",
            "qwen2.5-vl-72b-instruct",
            "qwen-vl-max",
            "qwen3-vl-plus",
            "Qwen-VL",
            "qwen-vl-max-latest",
            "nova-lite-v1",
            "nova-pro-v1",
            "gpt-5",
            "gpt-5-0807-global",
            "gpt-5-mini",
            "gpt-5-chat-0807-global",
            "gpt-5-mini-0807-global",
            "gpt-5-nano-0807-global",
            "gpt-4o-1120-global",
            "gpt-4o-0806-global",
            "gpt-4o-0806",
            "gpt-4o-0513-global",
            "gpt-4o-0513-Batch",
            "gpt-4o-0513",
            "gpt-4o-0806-Batch",
            "gpt-4o-mini-0718-global",
            "gpt-4o-mini-0718",
            "gpt-4o-mini-0718-Batch",
          ],
          n = e.toLowerCase();
        return (
          r.some((o) => n.includes(o.toLowerCase())) || n.includes("vision") || n.includes("visual") || n.includes("vl")
        );
      }
    };
  });
var Dqe,
  A2,
  xie = j(() => {
    "use strict";
    i2e();
    ((Dqe = class {
      modelCapabilities = new Map();
      constructor() {
        this.initializeModelCapabilities();
      }
      initializeModelCapabilities() {
        (this.registerModel(/^o1-(preview|mini)/, {
          supportsThinking: !0,
          supportedReasoningLevels: ["low", "medium", "high"],
          maxThinkingTokens: 32e3,
          configureRequest: (e, r) => {
            r.reasoningLevel !== "low" && (e.reasoning = !0);
          },
        }),
          this.registerModel(pH, {
            supportsThinking: !0,
            supportedReasoningLevels: ["low", "medium", "high"],
            maxThinkingTokens: 32e3,
            configureRequest: (e, r) => {
              (r.reasoningLevel !== "low" && (e.reasoning = !0), (e.thinking_mode = !0));
            },
          }),
          this.registerModel(/glm-4.7/, {
            supportsThinking: !0,
            supportedReasoningLevels: ["low", "medium", "high"],
            maxThinkingTokens: 2e4,
            configureRequest: (e) => {
              e.chat_template_kwargs = { enable_thinking: !0 };
            },
            configureNonThinkingRequest: (e) => {
              e.chat_template_kwargs = { enable_thinking: !1 };
            },
          }),
          this.registerModel(/glm-5/, {
            supportsThinking: !0,
            supportedReasoningLevels: ["low", "medium", "high"],
            maxThinkingTokens: 2e4,
            configureRequest: (e) => {
              ((e.chat_template_kwargs = { enable_thinking: !0 }),
                (e.enable_thinking = !0),
                (e.thinking = { type: "enabled" }));
            },
            configureNonThinkingRequest: (e) => {
              ((e.chat_template_kwargs = { enable_thinking: !1 }),
                (e.enable_thinking = !1),
                (e.thinking = { type: "disabled" }));
            },
          }),
          this.registerModel(/glm-/, {
            supportsThinking: !0,
            supportedReasoningLevels: ["low", "medium", "high"],
            maxThinkingTokens: 2e4,
            configureRequest: (e) => {
              e.chat_template_kwargs = { enable_thinking: !0 };
            },
          }),
          this.registerModel(/^claude-3\.5-sonnet/i, {
            supportsThinking: !0,
            supportedReasoningLevels: ["low", "medium", "high"],
            maxThinkingTokens: 25e3,
            configureRequest: (e, r) => {
              e.thinking = { enabled: !0, max_tokens: r.maxTokens, reasoning_level: r.reasoningLevel };
            },
          }),
          this.registerModel(fH, {
            supportsThinking: !0,
            supportedReasoningLevels: ["low", "medium", "high"],
            maxThinkingTokens: 2e4,
            configureRequest: (e) => {
              e.chat_template_kwargs = { enable_thinking: !0 };
            },
          }),
          this.registerModel(/.*reasoning.*/, {
            supportsThinking: !0,
            supportedReasoningLevels: ["low", "medium"],
            maxThinkingTokens: 1e4,
            configureRequest: (e) => {
              e.reasoning = !0;
            },
          }),
          this.registerModel(/^kimi-k2\.5/, {
            supportsThinking: !0,
            supportedReasoningLevels: ["low", "medium", "high"],
            maxThinkingTokens: 32768,
            configureRequest: (e, r) => {
              e.thinking = { type: "enabled" };
            },
            configureNonThinkingRequest: (e) => {
              e.thinking = { type: "disabled" };
            },
          }),
          this.registerModel(/.*thinking.*/, {
            supportsThinking: !0,
            supportedReasoningLevels: ["low", "medium", "high"],
            maxThinkingTokens: 15e3,
            configureRequest: (e) => {
              e.thinking_mode = !0;
            },
          }),
          this.registerModel(/qwen.*4b/i, {
            supportsThinking: !1,
            supportedReasoningLevels: [],
            configureRequest: (e) => {
              (delete e.thinking_mode,
                delete e.reasoning,
                delete e.chat_template_kwargs,
                e.extend_fields || (e.extend_fields = {}),
                (e.extend_fields.chat_template_kwargs = { enable_thinking: !1 }));
            },
          }),
          this.registerModel(/mimo-/, {
            supportsThinking: !0,
            supportedReasoningLevels: ["low", "medium", "high"],
            maxThinkingTokens: 2e4,
            configureRequest: (e) => {
              e.thinking = { type: "enabled" };
            },
          }));
      }
      registerModel(e, r) {
        let n = e instanceof RegExp ? e.source : e;
        this.modelCapabilities.set(n, r);
      }
      supportsThinking(e) {
        return this.getModelCapability(e)?.supportsThinking ?? !1;
      }
      getModelCapability(e) {
        for (let [r, n] of this.modelCapabilities) if (new RegExp(r, "i").test(e)) return n;
        return null;
      }
      configureThinkingRequest(e, r, n) {
        let o = this.getModelCapability(e);
        if (!o || !o.supportsThinking) return !1;
        if (!o.supportedReasoningLevels.includes(n.reasoningLevel)) {
          let s = o.supportedReasoningLevels;
          s.includes("high")
            ? (n.reasoningLevel = "high")
            : s.includes("medium")
              ? (n.reasoningLevel = "medium")
              : (n.reasoningLevel = "low");
        }
        return (
          o.maxThinkingTokens && n.maxTokens > o.maxThinkingTokens && (n.maxTokens = o.maxThinkingTokens),
          o.configureRequest && o.configureRequest(r, n),
          e === "deepseek-v3.2-chat" && (r.model = "deepseek-v3.2-reasoner"),
          !0
        );
      }
      configureNonThinkingRequest(e, r) {
        let n = this.getModelCapability(e);
        return !n || !n.supportsThinking
          ? !1
          : n.configureNonThinkingRequest
            ? (n.configureNonThinkingRequest(r), !0)
            : !1;
      }
      getMaxThinkingTokens(e) {
        return this.getModelCapability(e)?.maxThinkingTokens ?? null;
      }
      getSupportedReasoningLevels(e) {
        return this.getModelCapability(e)?.supportedReasoningLevels ?? [];
      }
      getSupportedModels() {
        let e = [];
        for (let [r, n] of this.modelCapabilities) n.supportsThinking && e.push(r);
        return e;
      }
      validateThinkingConfig(e, r) {
        let n = this.getModelCapability(e),
          o = [];
        if (!n) return { isValid: !1, warnings: [`Model ${e} does not support thinking`] };
        if (!n.supportsThinking) return { isValid: !1, warnings: [`Model ${e} does not support thinking`] };
        let s = { ...r };
        if (!n.supportedReasoningLevels.includes(r.reasoningLevel)) {
          let a = n.supportedReasoningLevels,
            u = a.includes("high") ? "high" : a.includes("medium") ? "medium" : "low";
          ((s.reasoningLevel = u), o.push(`Reasoning level ${r.reasoningLevel} not supported, adjusted to ${u}`));
        }
        return (
          n.maxThinkingTokens &&
            r.maxTokens > n.maxThinkingTokens &&
            ((s.maxTokens = n.maxThinkingTokens),
            o.push(`Token limit ${r.maxTokens} exceeds model maximum, adjusted to ${n.maxThinkingTokens}`)),
          { isValid: !0, warnings: o, adjustedConfig: o.length > 0 ? s : void 0 }
        );
      }
    }),
      (A2 = new Dqe()));
  });
function Pln() {
  (console.log("\u{1F9F9} Cleaning up all global performance trackers"),
    Object.values(XR).forEach((t) => {
      t.cleanup();
    }),
    console.log("\u{1F9F9} All performance trackers cleaned up"));
}
var Tie,
  XR,
  a2e = j(() => {
    "use strict";
    ((Tie = class {
      timers = new Map();
      durations = new Map();
      stackDepth = 0;
      enabled;
      context;
      cleanupInterval;
      maxDurationsPerOperation = 1e3;
      maxAge = 300 * 1e3;
      constructor(e = "default", r = !1) {
        ((this.context = e),
          (this.enabled = r || process.env.IFLOW_PERFORMANCE_DEBUG === "true"),
          this.startPeriodicCleanup());
      }
      start(e) {
        if (!this.enabled) return;
        let r = `${this.context}:${e}`;
        this.timers.set(r, performance.now());
        let n = "  ".repeat(this.stackDepth);
        (console.log(`\u{1F535} ${n}[${this.context}] Started: ${e}`), this.stackDepth++);
      }
      end(e) {
        if (!this.enabled) return;
        this.stackDepth = Math.max(0, this.stackDepth - 1);
        let r = "  ".repeat(this.stackDepth),
          n = `${this.context}:${e}`,
          o = this.timers.get(n);
        if (o === void 0) {
          console.warn(`\u26A0\uFE0F  ${r}[${this.context}] No start time found for: ${e}`);
          return;
        }
        let s = performance.now() - o;
        (this.timers.delete(n), this.durations.has(e) || this.durations.set(e, []));
        let a = this.durations.get(e);
        (a.push(s), a.length > this.maxDurationsPerOperation && a.splice(0, a.length - this.maxDurationsPerOperation));
        let u = this.getDurationColor(s);
        return (console.log(`${u} ${r}[${this.context}] Completed: ${e} (${s.toFixed(2)}ms)`), s);
      }
      async time(e, r) {
        if (!this.enabled) return await r();
        this.start(e);
        try {
          let n = await r();
          return (this.end(e), n);
        } catch (n) {
          this.stackDepth = Math.max(0, this.stackDepth - 1);
          let o = "  ".repeat(this.stackDepth);
          throw (console.log(`\u{1F534} ${o}[${this.context}] Error in: ${e}`), n);
        }
      }
      timeSync(e, r) {
        if (!this.enabled) return r();
        this.start(e);
        try {
          let n = r();
          return (this.end(e), n);
        } catch (n) {
          this.stackDepth = Math.max(0, this.stackDepth - 1);
          let o = "  ".repeat(this.stackDepth);
          throw (console.log(`\u{1F534} ${o}[${this.context}] Error in: ${e}`), n);
        }
      }
      checkpoint(e, r) {
        if (!this.enabled) return;
        let n = "  ".repeat(this.stackDepth),
          o = r ? ` | ${JSON.stringify(r)}` : "";
        console.log(`\u{1F4CD} ${n}[${this.context}] Checkpoint: ${e}${o}`);
      }
      getStats() {
        let e = {
            context: this.context,
            operations: {},
            summary: { totalOperations: 0, totalTime: 0, averageTime: 0 },
          },
          r = 0,
          n = 0;
        for (let [o, s] of this.durations) {
          let a = s.reduce((d, f) => d + f, 0),
            u = a / s.length,
            c = Math.min(...s),
            m = Math.max(...s);
          ((e.operations[o] = {
            count: s.length,
            totalTime: a,
            averageTime: u,
            minTime: c,
            maxTime: m,
            lastTime: s[s.length - 1],
          }),
            (r += a),
            (n += s.length));
        }
        return (
          (e.summary.totalTime = r),
          (e.summary.totalOperations = n),
          (e.summary.averageTime = n > 0 ? r / n : 0),
          e
        );
      }
      printReport() {
        if (!this.enabled) return;
        let e = this.getStats();
        (console.log(`
\u{1F4CA} Performance Report [${this.context}]`),
          console.log("=".repeat(50)),
          console.log(`Total Operations: ${e.summary.totalOperations}`),
          console.log(`Total Time: ${e.summary.totalTime.toFixed(2)}ms`),
          console.log(`Average Time: ${e.summary.averageTime.toFixed(2)}ms`),
          console.log(""));
        let r = Object.entries(e.operations).sort(([, n], [, o]) => o.totalTime - n.totalTime);
        for (let [n, o] of r) {
          let s = ((o.totalTime / e.summary.totalTime) * 100).toFixed(1);
          (console.log(`${n}:`),
            console.log(`  Count: ${o.count}, Total: ${o.totalTime.toFixed(2)}ms (${s}%)`),
            console.log(
              `  Avg: ${o.averageTime.toFixed(2)}ms, Min: ${o.minTime.toFixed(2)}ms, Max: ${o.maxTime.toFixed(2)}ms`,
            ));
        }
        console.log("=".repeat(50));
      }
      reset() {
        (this.timers.clear(), this.durations.clear(), (this.stackDepth = 0));
      }
      getDurationColor(e) {
        return e < 10 ? "\u{1F7E2}" : e < 100 ? "\u{1F7E1}" : e < 1e3 ? "\u{1F7E0}" : "\u{1F534}";
      }
      setEnabled(e) {
        this.enabled = e;
      }
      isEnabled() {
        return this.enabled;
      }
      startPeriodicCleanup() {
        ((this.cleanupInterval = setInterval(() => {
          this.performPeriodicCleanup();
        }, 120 * 1e3)),
          typeof process < "u" &&
            process.on("beforeExit", () => {
              this.cleanup();
            }));
      }
      performPeriodicCleanup() {
        if (!this.enabled) return;
        let e = Date.now(),
          r = 0;
        for (let [n, o] of this.durations) {
          let s = o.length;
          (o.length > this.maxDurationsPerOperation && o.splice(0, o.length - this.maxDurationsPerOperation),
            o.length === 0 && this.durations.delete(n),
            (r += s - o.length));
        }
        r > 0 && console.log(`\u{1F9F9} [${this.context}] Cleaned up ${r} old performance entries`);
      }
      cleanup() {
        (this.timers.clear(),
          this.durations.clear(),
          (this.stackDepth = 0),
          this.cleanupInterval && (clearInterval(this.cleanupInterval), (this.cleanupInterval = void 0)),
          console.log(`\u{1F9F9} [${this.context}] Performance tracker cleaned up`));
      }
      getMemoryUsage() {
        let e = Array.from(this.durations.values()).reduce((r, n) => r + n.length, 0);
        return { timersCount: this.timers.size, durationsCount: this.durations.size, totalEntries: e };
      }
    }),
      (XR = {
        subagent: new Tie("SubAgent"),
        api: new Tie("API"),
        tools: new Tie("Tools"),
        client: new Tie("GeminiClient"),
      }));
  });
var g8,
  Iqe = j(() => {
    "use strict";
    g8 = "dollar-task-";
  });
import mis from "crypto";
function Bln(t, e, r, n) {
  if (!n) return null;
  let o = `${t}:${e}:${r}`;
  try {
    return mis.createHmac("sha256", n).update(o, "utf8").digest("hex");
  } catch (s) {
    return (console.error("Failed to generate HMAC signature:", s), null);
  }
}
var Lln = j(() => {
  "use strict";
});
import { promises as Mln } from "fs";
import Fln from "path";
var gH,
  FOt = j(() => {
    "use strict";
    Ba();
    OOt();
    n2e();
    Xq();
    q_();
    Iln();
    Dp();
    UC();
    o2e();
    s2e();
    Eqe();
    Pa();
    OG();
    bi();
    xie();
    a2e();
    Iqe();
    Lln();
    i2e();
    gH = class {
      apiKey;
      baseUrl;
      multimodalModelName;
      multimodalHelper;
      progressCallback;
      debugMode;
      authType;
      logFilePath;
      config;
      lastUsageMetadata;
      isSessionInitialized = !1;
      constructor(e) {
        ((this.config = e.config),
          (this.apiKey = e.apiKey || this.config.getApiKey() || ""),
          (this.baseUrl = e.baseUrl || this.config.getBaseUrl() || ""),
          (this.multimodalModelName = e.multimodalModelName || ""));
        let r =
            e.authType === Kt.IFLOW ||
            e.authType === Kt.LOGIN_WITH_IFLOW ||
            !!(this.baseUrl && this.baseUrl.toLowerCase().includes("apis.iflow.cn")),
          n = e.authType === Kt.AONE || e.authType === Kt.LOGIN_WITH_AONE,
          o = r ? "qwen3-vl-plus" : n ? "ide-qwen3-coder-modelscope" : e.multimodalModelName || void 0;
        if (
          ((this.multimodalHelper = new _4(this.apiKey, this.baseUrl, o, r, n)),
          (this.debugMode = e.debugMode || !1),
          (this.authType = e.authType),
          this.debugMode)
        ) {
          let s = Y5(process.cwd());
          this.logFilePath = Fln.join(s, "prompt.txt");
        }
      }
      async logToPromptFile(e, r) {
        if (!this.debugMode || !this.logFilePath) return;
        let n = `${r}
${JSON.stringify(e, null, 2)}`;
        try {
          let o = Fln.dirname(this.logFilePath);
          await Mln.mkdir(o, { recursive: !0 });
          let a = `
[${new Date().toISOString()}]
${n}
${"=".repeat(80)}
`;
          await Mln.appendFile(this.logFilePath, a, "utf-8");
        } catch (o) {
          console.debug(I.t("openaiContentGenerator.errors.failedWriteDebugLog"), o);
        }
      }
      logTelemetryFailure(e, r) {
        let n = r instanceof Error && r.message ? r.message : String(r);
        b2(new Error(`${e}: ${n}`));
      }
      async generateContent(e, r) {
        let n = this.config?.getModel() || "unknown",
          o = {
            "model.name": n,
            "model.provider": "openai",
            "api.endpoint": `${this.baseUrl}/chat/completions`,
            "session.id": this.config?.getSessionId() || "",
            "conversation.id": this.config?.getConversationId() || "",
          };
        return jh("model_call", o, async () => {
          let s = Date.now(),
            a = {},
            u;
          try {
            let c = await this.generateContentInternal(
                e,
                r,
                (d) => {
                  a = d;
                },
                (d, f, p, h) => {
                  u = h;
                  let g = Qo.getActiveSpan();
                  if (g) {
                    let b = Date.now() - s,
                      A = {
                        "request.model": h?.model || a.model || n,
                        "request.temperature": a.temperature,
                        "request.max_tokens": a.max_tokens || a.max_new_tokens,
                        "request.tools_count": a.tools?.length || 0,
                        "request.messages_count": a.messages?.length || 0,
                        "response.http_status": d || 200,
                        "response.business_error_code": f,
                        "response.finish_reason": p || "unknown",
                        "response.duration_ms": b,
                        "response.success": !0,
                      };
                    try {
                      ((A["request.full_body"] = this.safeStringify(a)),
                        u && (A["response.full_body"] = this.safeStringify(u)));
                    } catch (y) {
                      (console.error("Failed to serialize request/response data for telemetry:", y),
                        (A["request.body_serialization_error"] = !0),
                        (A.serialization_error_message = y instanceof Error ? y.message : String(y)));
                    }
                    try {
                      g.setAttributes(A);
                    } catch (y) {
                      console.error("Failed to set span attributes:", y);
                    }
                  }
                },
                !1,
              ),
              m = Qo.getActiveSpan();
            if (m && c.usageMetadata) {
              let d = {
                "response.prompt_tokens": c.usageMetadata.promptTokenCount,
                "response.completion_tokens": c.usageMetadata.candidatesTokenCount,
                "response.total_tokens": c.usageMetadata.totalTokenCount,
              };
              try {
                ((d["request.full_body"] = this.safeStringify(a)),
                  u && (d["response.full_body"] = this.safeStringify(u)));
              } catch (f) {
                (console.error("Failed to serialize request/response data for telemetry:", f),
                  (d["request.body_serialization_error"] = !0),
                  (d.serialization_error_message = f instanceof Error ? f.message : String(f)));
              }
              try {
                m.setAttributes(d);
              } catch (f) {
                console.error("Failed to set span attributes:", f);
              }
            }
            return c;
          } catch (c) {
            let m = Date.now() - s,
              d = c instanceof Error ? c.message : String(c),
              f = Qo.getActiveSpan();
            if (f) {
              let p = {
                "request.model": u?.model || a.model || n,
                "request.temperature": a.temperature,
                "request.max_tokens": a.max_tokens || a.max_new_tokens,
                "request.tools_count": a.tools?.length || 0,
                "request.messages_count": a.messages?.length || 0,
                "response.duration_ms": m,
                "response.success": !1,
                "response.error_message": d,
              };
              try {
                ((p["request.full_body"] = this.safeStringify(a)),
                  u && (p["response.full_body"] = this.safeStringify(u)));
              } catch (h) {
                (console.error("Failed to serialize request/response data for telemetry:", h),
                  (p["request.body_serialization_error"] = !0),
                  (p.serialization_error_message = h instanceof Error ? h.message : String(h)));
              }
              try {
                f.setAttributes(p);
              } catch (h) {
                console.error("Failed to set span attributes:", h);
              }
            }
            throw c;
          }
        });
      }
      async generateContentLatency(e, r) {
        let n = await this.generateContent(e, r);
        async function* o() {
          yield n;
        }
        return o();
      }
      async generateContentStream(e, r) {
        let n = this.config?.getModel() || "unknown",
          o = {
            "model.name": n,
            "model.provider": "openai",
            "api.endpoint": `${this.baseUrl}/chat/completions`,
            "session.id": this.config?.getSessionId() || "",
            "conversation.id": this.config?.getConversationId() || "",
            "request.stream": !0,
          };
        return jh("model_call_stream", o, async () => {
          let s = Date.now(),
            a = {},
            u,
            c;
          try {
            let m = await this.generateContentInternal(
              e,
              r,
              (f) => {
                a = f;
              },
              (f, p, h, g) => {
                u = g;
                let b = Qo.getActiveSpan();
                if (b) {
                  let A = Date.now() - s,
                    y = {
                      "request.model": g?.model || a.model || n,
                      "request.temperature": a.temperature,
                      "request.max_tokens": a.max_tokens || a.max_new_tokens,
                      "request.tools_count": a.tools?.length || 0,
                      "request.messages_count": a.messages?.length || 0,
                      "response.http_status": f || 200,
                      "response.business_error_code": p,
                      "response.finish_reason": h || "unknown",
                      "response.duration_ms": A,
                      "response.success": !0,
                    };
                  try {
                    ((y["request.full_body"] = this.safeStringify(a)),
                      u && (y["response.full_body"] = this.safeStringify(u)));
                  } catch (E) {
                    (console.error("Failed to serialize request/response data for telemetry:", E),
                      (y["request.body_serialization_error"] = !0),
                      (y.serialization_error_message = E instanceof Error ? E.message : String(E)));
                  }
                  try {
                    b.setAttributes(y);
                  } catch (E) {
                    console.error("Failed to set span attributes:", E);
                  }
                }
              },
              !0,
            );
            return async function* () {
              try {
                for await (let p of this.parseStreamResponse(m)) (p.usageMetadata && (c = p.usageMetadata), yield p);
                c &&
                  !this.lastUsageMetadata &&
                  (this.lastUsageMetadata = {
                    total_tokens: c.totalTokenCount,
                    prompt_tokens: c.promptTokenCount,
                    completion_tokens: c.candidatesTokenCount,
                  });
                let f = Qo.getActiveSpan();
                if (f && c) {
                  let p = {
                    "response.prompt_tokens": c.promptTokenCount || 0,
                    "response.completion_tokens": c.candidatesTokenCount || 0,
                    "response.total_tokens": c.totalTokenCount || 0,
                  };
                  try {
                    ((p["request.full_body"] = this.safeStringify(a)),
                      u && (p["response.full_body"] = this.safeStringify(u)));
                  } catch (h) {
                    (console.error("Failed to serialize request/response data for telemetry:", h),
                      (p["request.body_serialization_error"] = !0),
                      (p.serialization_error_message = h instanceof Error ? h.message : String(h)));
                  }
                  try {
                    f.setAttributes(p);
                  } catch (h) {
                    console.error("Failed to set span attributes:", h);
                  }
                }
              } catch (f) {
                let p = Date.now() - s,
                  h = f instanceof Error ? f.message : String(f),
                  g = Qo.getActiveSpan();
                if (g) {
                  let b = {
                    "request.model": u?.model || a.model || n,
                    "request.temperature": a.temperature,
                    "request.max_tokens": a.max_tokens || a.max_new_tokens,
                    "request.tools_count": a.tools?.length || 0,
                    "request.messages_count": a.messages?.length || 0,
                    "response.duration_ms": p,
                    "response.success": !1,
                    "response.error_message": h,
                    "response.error_stage": "stream_processing",
                  };
                  try {
                    ((b["request.full_body"] = this.safeStringify(a)),
                      u && (b["response.full_body"] = this.safeStringify(u)));
                  } catch (A) {
                    (console.error("Failed to serialize request/response data for telemetry:", A),
                      (b["request.body_serialization_error"] = !0),
                      (b.serialization_error_message = A instanceof Error ? A.message : String(A)));
                  }
                  try {
                    g.setAttributes(b);
                  } catch (A) {
                    console.error("Failed to set span attributes:", A);
                  }
                }
                throw f;
              }
            }.bind(this)();
          } catch (m) {
            let d = Date.now() - s,
              f = m instanceof Error ? m.message : String(m),
              p = Qo.getActiveSpan();
            if (p) {
              let h = {
                "request.model": u?.model || a.model || n,
                "request.temperature": a.temperature,
                "request.max_tokens": a.max_tokens || a.max_new_tokens,
                "request.tools_count": a.tools?.length || 0,
                "request.messages_count": a.messages?.length || 0,
                "response.duration_ms": d,
                "response.success": !1,
                "response.error_message": f,
                "response.error_stage": "request_initialization",
              };
              try {
                ((h["request.full_body"] = this.safeStringify(a)),
                  u && (h["response.full_body"] = this.safeStringify(u)));
              } catch (g) {
                (console.error("Failed to serialize request/response data for telemetry:", g),
                  (h["request.body_serialization_error"] = !0),
                  (h.serialization_error_message = g instanceof Error ? g.message : String(g)));
              }
              try {
                p.setAttributes(h);
              } catch (g) {
                console.error("Failed to set span attributes:", g);
              }
            }
            throw (b2(m), new Error(I.t("openaiContentGenerator.errors.generateContentStreamFailed", { error: f })));
          }
        });
      }
      safeStringify(e) {
        let r = new WeakSet();
        return JSON.stringify(e, (n, o) => {
          if (typeof o == "object" && o !== null) {
            if (r.has(o)) return "[Circular Reference]";
            r.add(o);
          }
          return o;
        });
      }
      async generateContentInternal(e, r, n, o, s = !1) {
        let a = this.config?.getModel() || "unknown",
          u = XR.api;
        u.start("OpenAI-GenerateContent-Total");
        let c = !1;
        try {
          if ((this.authType === Kt.LOGIN_WITH_IFLOW || this.authType === Kt.IFLOW) && (await pte())) {
            this.authType === Kt.LOGIN_WITH_IFLOW && (await LOe());
            let { getCachedApiKey: K } = await Promise.resolve().then(() => (OG(), gEt)),
              H = await K();
            H && (this.apiKey = H);
          }
          let m = await this.convertToOpenAIMessages(e),
            d = Dln(m);
          if (this.config) {
            let Q = this.config.getConversationId();
            if (Q)
              try {
                await kOt(this.config, Q, { model: a, tool: d });
              } catch (K) {
                this.logTelemetryFailure("Telemetry initialization failed", K);
              }
          }
          let f = this.convertToOpenAITools(e.config?.tools),
            p = { model: a, messages: m };
          (s && ((p.stream = !0), (p.stream_options = { include_usage: !0 })),
            (this.authType === Kt.LOGIN_WITH_IFLOW || this.authType === Kt.IFLOW) &&
              a === "glm-4.6" &&
              (p.model = "glm-4.6-exp"));
          let h = !1;
          (this.config?.getTemperature() !== void 0 && this.config.getTemperature() !== -1
            ? ((p.temperature = this.config.getTemperature()), (h = !0))
            : e.config?.temperature !== void 0 &&
              (this.config?.getTemperature() === void 0 || this.config.getTemperature() !== -1) &&
              ((p.temperature = e.config.temperature), (h = !0)),
            h ||
              (this.config?.getTopP() !== void 0 && this.config.getTopP() !== -1
                ? (p.top_p = this.config.getTopP())
                : e.config?.topP !== void 0 &&
                  (this.config?.getTopP() === void 0 || this.config.getTopP() !== -1) &&
                  (p.top_p = e.config.topP)));
          let g = this.config?.getContentGeneratorConfig?.();
          (g?.thinking && g.thinking.maxTokens > 0
            ? A2.configureThinkingRequest(p.model, p, g.thinking) ||
              console.debug(`Model ${a} does not support thinking mode`)
            : A2.configureNonThinkingRequest(p.model, p),
            (a.includes("glm-4.7") || a.includes("glm-5")) && ((p.temperature = 1), (p.top_p = 0.95)));
          let b = await this.calculateInputTokens(e),
            A = MOt(p.model, b, this.config?.getOutputTokensLimit());
          a.startsWith("kimi-k2.5") &&
            ((p.top_p = 0.95),
            (p.n = 1),
            (p.presence_penalty = 0),
            (p.frequency_penalty = 0),
            (p.max_tokens = A),
            (p.temperature = void 0));
          let y = "global";
          (y === "aone" && (p.max_tokens = A),
            wie(a) && p.model !== "deepseek-v3.2-reasoner" && (p.max_tokens = A),
            (p.max_new_tokens = A),
            e.config?.stopSequences && e.config.stopSequences.length > 0 && (p.stop = e.config.stopSequences),
            f &&
              f.length > 0 &&
              ((p.tools = f),
              a.startsWith("kimi-k2.5") &&
                p.thinking?.type === "enabled" &&
                (p.tool_choice
                  ? p.tool_choice !== "auto" &&
                    p.tool_choice !== "none" &&
                    console.warn(
                      `[Kimi K2.5] Thinking mode only supports tool_choice: "auto" or "none". Provided: "${p.tool_choice}". The API will reject this request.`,
                    )
                  : (p.tool_choice = "auto"))),
            await this.logToPromptFile(p, "INPUT REQUEST"),
            n && n(p));
          let E = this.baseUrl.endsWith("/") ? this.baseUrl.slice(0, -1) : this.baseUrl;
          ([
            "offline-whale-wave.alibaba-inc.com",
            "whale.wave.vipserver.offline",
            "whale-wave.alibaba-inc.com",
            "pre-whale-wave.alibaba-inc.com",
            "internal-offline-whale-wave.alibaba-inc.com",
            "internal-whale-wave.alibaba-inc.com",
          ].some((Q) => E.includes(Q)) && (p.extend_fields = { sessionId: this.config?.getSessionId() || "" }),
            p.model === "iFlow-ROME-30BA3B" && ((p.temperature = 0.7), (p.top_p = 0.8), (p.top_k = 20)));
          let C = Date.now(),
            x = Bkt(),
            k = "iFlow-Cli",
            R = this.config?.getSessionId() || "",
            P = Date.now(),
            D = {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.apiKey}`,
              "user-agent": k,
              "session-id": R,
              "conversation-id": this.config?.getConversationId() || "",
            },
            O = Bln(k, R, P, this.apiKey);
          (O && ((D["x-iflow-signature"] = O), (D["x-iflow-timestamp"] = P.toString())),
            x && (D = { ...D, traceparent: x }),
            y === "aone" && (D = { ...D, "X-Client-Type": "iflow-cli", "X-Client-Version": "0.5.19" }),
            vqe(this.config, new Kne(this.baseUrl, a, JSON.stringify(p), r, JSON.stringify(e.contents))));
          let N = await fetch(`${E}/chat/completions`, {
              signal: e.config?.abortSignal,
              method: "POST",
              headers: D,
              body: JSON.stringify(p),
            }),
            F = Date.now() - C;
          if (s && N.ok) return N;
          if (!N.ok) {
            o && o(N.status);
            let Q = await N.text();
            if (this.config)
              try {
                (await Aqe(this.config, new Error(Q)),
                  h8(
                    this.config,
                    new Ob(
                      a,
                      Q,
                      F,
                      this.config.getSessionId() || "unknown",
                      this.config.getContentGeneratorConfig()?.authType,
                      "http_error",
                      N.status,
                      N.status,
                      void 0,
                    ),
                  ));
              } catch (K) {
                this.logTelemetryFailure("Telemetry error recording failed", K);
              }
            throw N.status === 511
              ? (this.config &&
                  h8(
                    this.config,
                    new Ob(
                      a,
                      "Content length exceeded",
                      F,
                      this.config.getSessionId() || "unknown",
                      this.config.getContentGeneratorConfig()?.authType,
                      "content_length_exceed",
                      511,
                      200,
                      511,
                    ),
                  ),
                new Error(
                  I.t("openaiContentGenerator.errors.contentLengthExceed", {
                    traceId: x || N.headers.get("eagleeye-traceid"),
                  }),
                ))
              : N.status === 514
                ? (this.config &&
                    h8(
                      this.config,
                      new Ob(
                        a,
                        "model_error",
                        F,
                        this.config.getSessionId() || "unknown",
                        this.config.getContentGeneratorConfig()?.authType,
                        "model_error",
                        514,
                        200,
                        514,
                      ),
                    ),
                  new Error(
                    I.t("openaiContentGenerator.errors.modelError", {
                      traceId: x || N.headers.get("eagleeye-traceid"),
                    }),
                  ))
                : N.status === 429
                  ? (this.config &&
                      h8(
                        this.config,
                        new Ob(
                          a,
                          "Rate limit reached",
                          F,
                          this.config.getSessionId() || "unknown",
                          this.config.getContentGeneratorConfig()?.authType,
                          "rate_limit",
                          429,
                          200,
                          429,
                        ),
                      ),
                    new Error(I.t("openaiContentGenerator.errors.modelRateLimitReached")))
                  : new Error(
                      I.t("openaiContentGenerator.errors.httpError", {
                        status: N.status,
                        body: Q,
                        traceId: x || N.headers.get("eagleeye-traceid"),
                      }),
                    );
          }
          let B;
          try {
            B = await N.json();
          } catch (Q) {
            throw (
              b2(Q),
              new Error(
                I.t("openaiContentGenerator.errors.responseFormatError", {
                  traceId: x || N.headers.get("eagleeye-traceid"),
                }),
              )
            );
          }
          if (B.error_code && (B.error_code === 511 || B.error_code === 413))
            throw (
              this.config &&
                h8(
                  this.config,
                  new Ob(
                    a,
                    "Content length exceeded",
                    F,
                    this.config.getSessionId() || "unknown",
                    this.config.getContentGeneratorConfig()?.authType,
                    "content_length_exceed",
                    B.error_code,
                    200,
                    B.error_code,
                  ),
                ),
              new Error(
                I.t("openaiContentGenerator.errors.contentLengthExceed", {
                  traceId: x || N.headers.get("eagleeye-traceid"),
                }),
              )
            );
          if (B.error_code && B.error_code === 514)
            throw (
              this.config &&
                h8(
                  this.config,
                  new Ob(
                    a,
                    "model_error",
                    F,
                    this.config.getSessionId() || "unknown",
                    this.config.getContentGeneratorConfig()?.authType,
                    "model_error",
                    514,
                    200,
                    514,
                  ),
                ),
              new Error(
                I.t("openaiContentGenerator.errors.modelError", { traceId: x || N.headers.get("eagleeye-traceid") }),
              )
            );
          if ((B.status && B.status === "439") || (B.error_code && B.error_code === 439))
            throw (
              this.config &&
                h8(
                  this.config,
                  new Ob(
                    a,
                    "API token expired",
                    F,
                    this.config.getSessionId() || "unknown",
                    this.config.getContentGeneratorConfig()?.authType,
                    "token_expired",
                    439,
                    200,
                    439,
                  ),
                ),
              new Error(I.t("openaiContentGenerator.errors.apiTokenExpired"))
            );
          if (B.msg && (B.msg.includes("invalid apiKey") || B.msg.includes("Invalid apiKey")))
            throw new Error(I.t("openaiContentGenerator.errors.invalidApiKey"));
          if (B.status && (B.status === "434" || B.status === 434))
            throw (
              this.config &&
                h8(
                  this.config,
                  new Ob(
                    a,
                    "Invalid API key",
                    F,
                    this.config.getSessionId() || "unknown",
                    this.config.getContentGeneratorConfig()?.authType,
                    "invalid_api_key",
                    434,
                    200,
                    434,
                  ),
                ),
              new Error(I.t("openaiContentGenerator.errors.invalidApiKey"))
            );
          if (B.status && (B.status === "435" || B.status === 435))
            throw (
              this.config &&
                h8(
                  this.config,
                  new Ob(
                    a,
                    "Model Not Support",
                    F,
                    this.config.getSessionId() || "unknown",
                    this.config.getContentGeneratorConfig()?.authType,
                    "Model Not Support",
                    435,
                    200,
                    435,
                  ),
                ),
              new Error(I.t("openaiContentGenerator.errors.modelNotSupport"))
            );
          if ((B.status && B.status === "429") || (B.error_code && (B.error_code === 429 || B.error_code === 8211)))
            throw (
              this.config &&
                h8(
                  this.config,
                  new Ob(
                    a,
                    "Rate limit reached",
                    F,
                    this.config.getSessionId() || "unknown",
                    this.config.getContentGeneratorConfig()?.authType,
                    "rate_limit",
                    B.error_code || B.status || 429,
                    200,
                    B.error_code || B.status || 429,
                  ),
                ),
              new Error(I.t("openaiContentGenerator.errors.modelRateLimitReached"))
            );
          if ((B.status && B.status === "449") || (B.error_code && B.error_code === 449))
            throw (
              this.config &&
                h8(
                  this.config,
                  new Ob(
                    a,
                    "Rate limit reached",
                    F,
                    this.config.getSessionId() || "unknown",
                    this.config.getContentGeneratorConfig()?.authType,
                    "rate_limit",
                    449,
                    200,
                    449,
                  ),
                ),
              new Error(I.t("openaiContentGenerator.errors.rateLimitReached"))
            );
          if (!B || !B.choices || !Array.isArray(B.choices) || B.choices.length === 0) {
            let Q = x || N.headers.get("eagleeye-traceid");
            throw new Error(I.t("openaiContentGenerator.errors.invalidResponseFormat", { traceId: Q }));
          }
          (await this.logToPromptFile(B, "API RESPONSE"), B.usage && this.saveUsageMetadata(B.usage));
          let { response: L, hadJsonFixes: G } = await this.convertFromOpenAIResponse(B);
          if (((c = G), o)) {
            let Q = B.choices[0]?.finish_reason,
              K = B.error_code;
            o(200, K, Q, B);
          }
          if (this.config)
            try {
              let Q = B.choices[0]?.finish_reason;
              (Sqe(
                this.config,
                new Jne(
                  a,
                  F,
                  this.config.getSessionId() || "unknown",
                  this.config.getContentGeneratorConfig()?.authType,
                  B.usage
                    ? {
                        promptTokenCount: B.usage.prompt_tokens || 0,
                        candidatesTokenCount: B.usage.completion_tokens || 0,
                        totalTokenCount: B.usage.total_tokens || 0,
                        cachedContentTokenCount: 0,
                        thoughtsTokenCount: 0,
                        toolUsePromptTokenCount: 0,
                      }
                    : void 0,
                  JSON.stringify(B, null, 2),
                  void 0,
                  Q,
                  200,
                  void 0,
                ),
              ),
                await t2e(this.config),
                Ikt(this.config, !0, !1, c));
            } catch (Q) {
              this.logTelemetryFailure("Telemetry cleanup failed", Q);
            }
          return L;
        } catch (m) {
          if ((b2(m), m?.name === "AbortError")) throw new Error(I.t("openaiContentGenerator.errors.userCancel"));
          if (
            (this.config &&
              !(m instanceof Error && m.message === "user cancel") &&
              (await Aqe(this.config, m instanceof Error ? m : new Error(String(m))),
              Ikt(this.config, !1, !1, c, m instanceof Error ? m.message : String(m))),
            m instanceof Error && m.cause?.name?.includes("InvalidArgumentError"))
          )
            throw new Error(I.t("openaiContentGenerator.errors.apiKeyError"));
          if (
            m instanceof Error &&
            m.message &&
            [
              "iFlow Login expired",
              "Your iFlow Login expired",
              "Your API Token has expired",
              "platform rate limit",
              "platform concurrency limit",
              "Your input has exceeded",
              "the network is unavailable",
              "\u60A8\u7684 iFlow \u767B\u5F55\u5DF2\u8FC7\u671F",
              "\u767B\u5F55\u5DF2\u8FC7\u671F",
              "API Token \u5DF2\u8FC7\u671F",
              "API Token\u5DF2\u8FC7\u671F",
              "\u5E73\u53F0\u901F\u7387\u9650\u5236",
              "\u5E73\u53F0\u5E76\u53D1\u9650\u5236",
              "\u60A8\u7684\u8F93\u5165\u8D85\u8FC7\u4E86\u6A21\u578B\u7684\u4E0A\u4E0B\u6587\u957F\u5EA6",
              "\u60A8\u7684\u8F93\u5165\u5DF2\u8D85\u51FA",
              "\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",
            ].some((p) => m.message.includes(p))
          )
            throw new Error(m.message);
          let d = "";
          throw (
            m instanceof Error ? (d = m.cause ? `${m.message}:${m.cause.message}` : m.message) : (d = String(m)),
            new Error(I.t("openaiContentGenerator.errors.generateDataError", { error: d }), { cause: m })
          );
        } finally {
          u.end("OpenAI-GenerateContent-Total");
        }
      }
      saveUsageMetadata(e) {
        let r = (e.cache_creation_input_tokens || 0) + (e.cache_read_input_tokens || 0);
        this.lastUsageMetadata = {
          total_tokens: (e.total_tokens || 0) + r,
          prompt_tokens: (e.prompt_tokens || 0) + r,
          completion_tokens: e.completion_tokens || 0,
        };
      }
      async countTokens(e, r = !1) {
        let n = e.useCache ?? !0;
        if (!r && this.lastUsageMetadata?.total_tokens) return { totalTokens: this.lastUsageMetadata.total_tokens };
        let o = this.extractTextFromRequest(e);
        return { totalTokens: Math.ceil(o.length / 4) };
      }
      async calculateInputTokens(e) {
        let r = this.config?.getModel() || "unknown";
        try {
          let n = { model: r, contents: e.contents, config: { systemInstruction: e.config?.systemInstruction } };
          return (await this.countTokens(n)).totalTokens || 0;
        } catch {
          let o = this.extractTextFromRequest({ model: r, contents: e.contents });
          return Math.ceil(o.length / 4);
        }
      }
      async embedContent(e) {
        try {
          let r = this.extractTextFromEmbedRequest(e),
            n = this.config?.getModel(),
            o = this.baseUrl.endsWith("/") ? this.baseUrl.slice(0, -1) : this.baseUrl,
            s = await fetch(`${o}/v1/embeddings`, {
              method: "POST",
              headers: { "Content-Type": "application/json", Authorization: `Bearer ${this.apiKey}` },
              body: JSON.stringify({ model: n, input: r }),
            });
          if (!s.ok) {
            let u = await s.text();
            throw new Error(`HTTP error! status: ${s.status}, body: ${u}`);
          }
          return { embeddings: [{ values: (await s.json()).data[0].embedding }] };
        } catch (r) {
          throw (
            b2(r),
            new Error(
              I.t("openaiContentGenerator.errors.embedContentFailed", {
                error: r instanceof Error ? r.message : String(r),
              }),
            )
          );
        }
      }
      async convertToOpenAIMessages(e) {
        let r = [],
          n = this.config?.getModel() || "unknown",
          o = new Set(),
          s = new Map();
        if (e.contents) {
          let u = Array.isArray(e.contents) ? e.contents : [e.contents];
          for (let c of u)
            if (typeof c == "object" && c !== null && "parts" in c && c.parts) {
              let m = Array.isArray(c.parts) ? c.parts : [c.parts];
              for (let d of m) {
                if (d.functionCall) {
                  let f = d.functionCall.id || `call_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
                  o.add(f);
                }
                if (d.functionResponse) {
                  let f = d.functionResponse.id || d.functionResponse.name || "";
                  f.startsWith(g8) && o.add(f);
                  let p =
                    d.functionResponse.response?.output ??
                    (d.functionResponse.response ? JSON.stringify(d.functionResponse.response) : "");
                  s.set(f, { role: "tool", tool_call_id: f, content: p });
                }
              }
            }
          for (let [c] of s) o.has(c) || s.delete(c);
        }
        if (e.config?.systemInstruction) {
          let u = this.extractSystemInstruction(e.config.systemInstruction);
          u && r.push({ role: "system", content: u });
        }
        if (e.contents) {
          let u = Array.isArray(e.contents) ? e.contents : [e.contents];
          for (let c of u) {
            if (typeof c == "string") {
              r.push({ role: "user", content: c });
              continue;
            }
            if (typeof c == "object" && c !== null && "text" in c && c.text) {
              r.push({ role: "user", content: c.text });
              continue;
            }
            if (typeof c == "object" && c !== null && "parts" in c && c.parts) {
              let m = Array.isArray(c.parts) ? c.parts : [c.parts];
              if (c.role === "model") {
                let d = { role: "assistant", content: "", tool_calls: [] },
                  f = [],
                  p = "";
                for (let g of m)
                  g.thought &&
                    "text" in g &&
                    g.text &&
                    (f.push(g.text), g.thoughtSignature && g.thoughtSignature !== "" && (p = g.thoughtSignature));
                f.length > 0 && ((d.reasoning_content = f.join("")), p && (d.signature = p));
                let h = [];
                for (let g of m)
                  if (!g.thought && ("text" in g && g.text && h.push(g.text), g.functionCall)) {
                    let b = g.functionCall.id || `call_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
                    d.tool_calls.push({
                      id: b,
                      function: {
                        name: g.functionCall.name || "",
                        arguments: JSON.stringify(g.functionCall.args || {}),
                      },
                      type: "function",
                    });
                  }
                if (
                  (h.length > 0 && (d.content = h.join("")),
                  (d.content || d.reasoning_content || d.tool_calls.length > 0) &&
                    (d.tool_calls.length === 0 && delete d.tool_calls,
                    r.push(d),
                    d.tool_calls && d.tool_calls.length > 0))
                )
                  for (let g of d.tool_calls) {
                    let b = s.get(g.id);
                    b
                      ? r.push(b)
                      : r.push({
                          role: "tool",
                          tool_call_id: g.id,
                          content: I.t("openaiContentGenerator.messages.toolNotExecuted"),
                        });
                  }
              } else {
                let d = [];
                for (let f of m)
                  if ("text" in f && f.text) d.push({ type: "text", text: f.text });
                  else if (f.inlineData) {
                    let p = f.inlineData;
                    if (p.mimeType && p.mimeType.startsWith("image/")) {
                      let h =
                          this.authType === Kt.IFLOW ||
                          this.authType === Kt.LOGIN_WITH_IFLOW ||
                          (this.baseUrl && this.baseUrl.toLowerCase().includes("apis.iflow.cn")),
                        g = this.authType === Kt.AONE || this.authType === Kt.LOGIN_WITH_AONE;
                      if (!h && !g)
                        d.push({ type: "image_url", image_url: { url: "data:" + p.mimeType + ";base64," + p.data } });
                      else if (_4.isMultimodalModel(n))
                        d.push({ type: "image_url", image_url: { url: "data:" + p.mimeType + ";base64," + p.data } });
                      else
                        try {
                          if (!p.data) throw new Error(I.t("openaiContentGenerator.errors.imageDataMissing"));
                          let A = await this.multimodalHelper.generateImageDescription(p.data, p.mimeType);
                          d.push({ type: "text", text: `[Image Description]: ${A}` });
                        } catch (A) {
                          (b2(A),
                            d.push({
                              type: "text",
                              text: I.t("openaiContentGenerator.errors.imageContentCannotParse", {
                                error: A instanceof Error ? A.message : String(A),
                              }),
                            }));
                        }
                    }
                  }
                d.length > 0 && r.push({ role: "user", content: d });
              }
            }
          }
        }
        if ("global" === "aone" && hH(this.config?.getModel()) && r.length > 0) {
          let u = r[r.length - 1];
          if (u.role === "user" || u.role === "assistant") {
            if (typeof u.content == "string")
              u.content = [{ type: "text", text: u.content, cache_control: { type: "ephemeral" } }];
            else if (Array.isArray(u.content)) {
              let c = u.content[u.content.length - 1];
              c && typeof c == "object" && (c.cache_control = { type: "ephemeral" });
            }
          } else u.role === "tool" && (u.cache_control = { type: "ephemeral" });
        }
        return r;
      }
      createGeminiResponse() {
        let e = new gte();
        return ((e.candidates = [{ content: { parts: [], role: "model" } }]), e);
      }
      async convertFromOpenAIResponse(e) {
        let r = e.choices[0],
          n = this.createGeminiResponse(),
          o = n.candidates?.[0],
          s = !1;
        if (!r || !r.message) return { response: n, hadJsonFixes: s };
        if (
          (r.message.reasoning_content !== null &&
            r.message.reasoning_content !== void 0 &&
            o?.content?.parts &&
            o.content.parts.push({
              thought: !0,
              text: r.message.reasoning_content,
              thoughtSignature: r.message.signature || void 0,
            }),
          r.message.reasoning && o?.content?.parts && o.content.parts.push({ thought: !0, text: r.message.reasoning }),
          r.message.content &&
            r.message.content.trim() &&
            o?.content?.parts &&
            o.content.parts.push({ text: r.message.content }),
          r.message.tool_calls && Array.isArray(r.message.tool_calls))
        )
          for (let a of r.message.tool_calls) {
            let u;
            try {
              u = JSON.parse(a.function.arguments);
            } catch (c) {
              if (
                (b2(c),
                this.baseUrl === "https://apis.iflow.cn/v1 /* @iflow-api-endpoint */" ||
                  this.baseUrl === "https://ducky.code.alibaba-inc.com/v1/openai")
              )
                try {
                  ((u = await this.fixInvalidJsonWithQwen(a.function.arguments)), (s = !0));
                } catch (m) {
                  (b2(m), console.error("Failed to fix JSON", m), (u = {}));
                }
              else u = {};
            }
            o?.content?.parts?.push({ functionCall: { id: a.id, name: a.function.name, args: u } });
          }
        return (
          o &&
            r.finish_reason !== "tool_calls" &&
            r.finish_reason &&
            (o.finishReason = this.mapFinishReason(r.finish_reason)),
          (n.usageMetadata = {
            promptTokenCount: e.usage?.prompt_tokens || 0,
            candidatesTokenCount: e.usage?.completion_tokens || 0,
            totalTokenCount: e.usage?.total_tokens || 0,
          }),
          { response: n, hadJsonFixes: s }
        );
      }
      async fixInvalidJsonWithQwen(e) {
        let r = `
    \u4F60\u662F\u4E00\u4E2Ajson\u683C\u5F0F\u4F18\u5316\u4E13\u5BB6\uFF0C\u4F60\u7684\u5DE5\u4F5C\u662F\u5C06\u4E00\u4E32\u6587\u672C\uFF0C\u6839\u636Ejson schema\u7684\u5B9A\u4E49\u8F93\u51FA\u6210\u4E00\u4E2Avalid\u7684json
    \u8FD9\u4E2A\u662F\u9519\u8BEF\u7684json\u683C\u5F0F\uFF1A
    ${e}

    \u8BF7\u76F4\u63A5\u8F93\u51FA\u4E00\u4E2A\u6B63\u786E\u7684json\u683C\u5F0F\uFF1A`;
        try {
          let n = "global",
            s = await fetch(
              n === "aone"
                ? "https://ducky.code.alibaba-inc.com/v1/openai/chat/completions"
                : "https://apis.iflow.cn/v1/chat/completions /* @iflow-api-endpoint */",
              {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${this.apiKey}` },
                body: JSON.stringify({
                  model: n === "aone" ? "ide-modelscope/qwen3-coder" : "QWen3-4B",
                  messages: [{ role: "user", content: r }],
                  temperature: 0.1,
                  max_tokens: 1e3,
                }),
              },
            );
          if (!s.ok) throw new Error(`API error: ${s.status}`);
          let a = await s.json();
          if (!a || !a.choices || !Array.isArray(a.choices) || a.choices.length === 0)
            throw new Error("Invalid response format - missing or empty choices array");
          let u = a.choices[0]?.message?.content;
          if (!u || typeof u != "string") throw new Error("Invalid response - missing or invalid message content");
          let c = u.trim();
          if (
            (c.startsWith("```json")
              ? (c = c.replace(/^```json\s*/, "").replace(/\s*```$/, ""))
              : c.startsWith("```") && (c = c.replace(/^```\s*/, "").replace(/\s*```$/, "")),
            !c)
          )
            throw new Error("Fixed JSON is empty after processing");
          return JSON.parse(c);
        } catch (n) {
          throw (b2(n), console.error("QWen JSON fix failed:", n), n);
        }
      }
      extractTextFromRequest(e) {
        let r = "";
        if (e.contents) {
          let n = Array.isArray(e.contents) ? e.contents : [e.contents];
          for (let o of n)
            if (o && typeof o == "object" && "parts" in o && o.parts) {
              let s = Array.isArray(o.parts) ? o.parts : [o.parts];
              for (let a of s)
                if (a && typeof a == "object" && "text" in a && a.text) r += a.text + " ";
                else if (a.functionResponse && a.functionResponse.response)
                  for (let [u, c] of Object.entries(a.functionResponse.response)) c != null && (r += String(c) + " ");
            }
        }
        return (e.config?.systemInstruction && (r += e.config.systemInstruction), r.trim());
      }
      extractTextFromEmbedRequest(e) {
        if (e.contents) {
          let r = Array.isArray(e.contents) ? e.contents : [e.contents];
          for (let n of r)
            if (typeof n == "object" && n !== null && "parts" in n && n.parts) {
              let o = Array.isArray(n.parts) ? n.parts : [n.parts];
              for (let s of o) if (typeof s == "object" && s !== null && "text" in s && s.text) return s.text;
            } else {
              if (typeof n == "string") return n;
              if (typeof n == "object" && n !== null && "text" in n && n.text) return n.text;
            }
        }
        return "";
      }
      extractSystemInstruction(e) {
        let r = "";
        if (typeof e == "string") r = e;
        else if (Array.isArray(e)) {
          for (let n of e) typeof n == "object" && n !== null && "text" in n && n.text && (r += n.text + " ");
          r = r.trim();
        } else if (typeof e == "object" && e !== null)
          if ("parts" in e && e.parts) {
            let n = Array.isArray(e.parts) ? e.parts : [e.parts];
            for (let o of n) typeof o == "object" && o !== null && "text" in o && o.text && (r += o.text + " ");
            r = r.trim();
          } else "text" in e && e.text && (r = e.text);
        return r;
      }
      convertToOpenAITools(e) {
        if (!e || e.length === 0) return [];
        let r = [],
          n = hH(this.config?.getModel());
        for (let s of e)
          if (s.functionDeclarations && Array.isArray(s.functionDeclarations))
            for (let a of s.functionDeclarations)
              r.push({
                type: "function",
                function: {
                  name: a.name || "",
                  description: a.description,
                  parameters: this.convertParameters(a.parameters || a.parametersJsonSchema),
                },
              });
        if ("global" === "aone" && n && r.length > 0) {
          let s = r[r.length - 1];
          s.function && (s.function.cache_control = { type: "ephemeral" });
        }
        return r;
      }
      convertParameters(e) {
        if (!e) return;
        let r = {
          STRING: "string",
          INTEGER: "integer",
          NUMBER: "number",
          BOOLEAN: "boolean",
          OBJECT: "object",
          ARRAY: "array",
          string: "string",
          integer: "integer",
          number: "number",
          boolean: "boolean",
          object: "object",
          array: "array",
        };
        if (typeof e == "object" && e.type) {
          let o;
          typeof e.type == "string" ? (r[e.type] ? (o = r[e.type]) : (o = e.type.toLowerCase())) : (o = e.type);
          let s = {};
          if (e.properties)
            for (let m in e.properties) {
              let d = e.properties[m];
              s[m] = this.convertParameters(d);
            }
          let a = e.items ? this.convertParameters(e.items) : void 0,
            u = {};
          ((u.type = o), e.description && (u.description = e.description), e.enum && (u.enum = e.enum));
          let c = Sie(this.config?.getModel());
          return (
            ((o === "object" && c) || Object.keys(s).length > 0) && (u.properties = s),
            a && (u.items = a),
            e.required && Array.isArray(e.required) && (u.required = e.required),
            e.minItems !== void 0 && (u.minItems = typeof e.minItems == "string" ? Number(e.minItems) : e.minItems),
            e.minLength !== void 0 &&
              (u.minLength = typeof e.minLength == "string" ? Number(e.minLength) : e.minLength),
            o === "object" && !("additionalProperties" in e)
              ? (u.additionalProperties = !1)
              : "additionalProperties" in e && (u.additionalProperties = e.additionalProperties),
            u
          );
        }
        let n = (o) => {
          if (!o) return;
          let s;
          if (o.type)
            switch (o.type) {
              case "STRING":
                s = "string";
                break;
              case "INTEGER":
                s = "integer";
                break;
              case "NUMBER":
                s = "number";
                break;
              case "BOOLEAN":
                s = "boolean";
                break;
              case "OBJECT":
                s = "object";
                break;
              case "ARRAY":
                s = "array";
                break;
              default:
                s = o.type.toLowerCase();
            }
          o.properties && !s && (s = "object");
          let a = {};
          if (
            (s && (a.type = s),
            o.description && (a.description = o.description),
            o.enum && (a.enum = o.enum),
            o.properties)
          ) {
            a.properties = {};
            for (let [u, c] of Object.entries(o.properties)) a.properties[u] = n(c);
          }
          return (
            o.items && (a.items = n(o.items)),
            o.required && (a.required = o.required),
            o.minItems !== void 0 && (a.minItems = typeof o.minItems == "string" ? Number(o.minItems) : o.minItems),
            o.minLength !== void 0 &&
              (a.minLength = typeof o.minLength == "string" ? Number(o.minLength) : o.minLength),
            a.type === "object" && !("additionalProperties" in o) && (a.additionalProperties = !1),
            a
          );
        };
        return n(e);
      }
      currentToolCallId = "";
      async *parseStreamResponse(e) {
        if (!e.body) throw new Error("Response body is null");
        let r = e.body.getReader(),
          n = new TextDecoder(),
          o = "",
          s = new Map(),
          a,
          u = null;
        try {
          for (;;) {
            let { done: c, value: m } = await r.read();
            if (c) break;
            o += n.decode(m, { stream: !0 });
            let d = o.split(`
`);
            o = d.pop() || "";
            for (let f of d) {
              let p = f.trim();
              if (!(!p || p === "data: [DONE]" || p === "data:[DONE]") && p.startsWith("data:"))
                try {
                  let h = p.startsWith("data: ") ? p.slice(6) : p.slice(5),
                    g = JSON.parse(h);
                  if (
                    (g.usage &&
                      (this.saveUsageMetadata(g.usage),
                      (a = {
                        promptTokenCount: this.lastUsageMetadata?.prompt_tokens || 0,
                        candidatesTokenCount: this.lastUsageMetadata?.completion_tokens || 0,
                        totalTokenCount: this.lastUsageMetadata?.total_tokens || 0,
                      })),
                    g.choices && g.choices.length > 0)
                  ) {
                    let b = g.choices[0],
                      A = b.delta;
                    if (A?.reasoning_content !== null && A?.reasoning_content !== void 0) {
                      let y = this.createGeminiResponse(),
                        E = y.candidates?.[0];
                      (E?.content?.parts &&
                        ((E.content.parts = [{ thought: !0, text: A.reasoning_content }]), (u = E.content)),
                        yield y);
                    }
                    if (A?.signature && typeof A.signature == "string" && u?.parts) {
                      for (let y of u.parts) y.thought === !0 && (y.thoughtSignature = A.signature);
                      u = null;
                    }
                    if (A?.content) {
                      let y = this.createGeminiResponse(),
                        E = y.candidates?.[0];
                      (E?.content?.parts && (E.content.parts = [{ text: A.content }]), yield y);
                    }
                    if (A?.tool_calls)
                      for (let y of A.tool_calls) {
                        if (
                          ((this.currentToolCallId = y.id ?? this.currentToolCallId), !s.has(this.currentToolCallId))
                        ) {
                          let E = { id: y.id || "", name: y.function?.name || "", args: "" };
                          if ((s.set(this.currentToolCallId, E), E.id && E.name)) {
                            let v = this.createGeminiResponse();
                            (v.candidates?.[0]?.content?.parts?.push({ functionCall: { ...E, args: void 0 } }),
                              yield v);
                          }
                        }
                        if (y.function?.arguments) {
                          let E = y.id ?? this.currentToolCallId,
                            v = s.get(E);
                          v && (v.args += y.function.arguments);
                        }
                      }
                    if (b.finish_reason && (s.size > 0 || a)) {
                      let y = this.createGeminiResponse(),
                        E = y.candidates?.[0];
                      if (
                        E &&
                        ((E.finishReason = this.mapFinishReason(b.finish_reason)), E.content?.parts && s.size > 0)
                      ) {
                        for (let [, v] of s.entries())
                          if (v && v.name)
                            try {
                              let C = JSON.parse(v.args);
                              E.content.parts.push({ functionCall: { id: v.id, name: v.name, args: C } });
                            } catch {
                              E.content.parts.push({ functionCall: { id: v.id, name: v.name, args: {} } });
                            }
                      }
                      (a && (y.usageMetadata = a), yield y);
                    }
                  }
                } catch (h) {
                  console.error("Failed to parse SSE chunk:", p, h);
                }
            }
          }
        } finally {
          r.releaseLock();
        }
      }
      mapFinishReason(e) {
        switch (e) {
          case "stop":
            return id.STOP;
          case "length":
            return id.MAX_TOKENS;
          case "content_filter":
            return id.SAFETY;
          case "tool_calls":
            return id.MALFORMED_FUNCTION_CALL;
          default:
            return id.OTHER;
        }
      }
      convertResponseSchema(e) {
        if (e)
          return e.type === "object" || e.type === "OBJECT"
            ? {
                type: "json_schema",
                json_schema: {
                  name: e.name || "",
                  description: e.description || "",
                  schema: this.convertSchemaToJsonSchema(e),
                  strict: !0,
                },
              }
            : {
                type: "json_schema",
                json_schema: {
                  name: "response_schema",
                  description: "Generated response schema",
                  schema: this.convertSchemaToJsonSchema(e),
                  strict: !0,
                },
              };
      }
      convertSchemaToJsonSchema(e) {
        if (!e) return {};
        let r = {};
        if (e.type)
          switch (e.type) {
            case "STRING":
              r.type = "string";
              break;
            case "INTEGER":
              r.type = "integer";
              break;
            case "NUMBER":
              r.type = "number";
              break;
            case "BOOLEAN":
              r.type = "boolean";
              break;
            case "OBJECT":
              r.type = "object";
              break;
            case "ARRAY":
              r.type = "array";
              break;
            default:
              r.type = typeof e.type == "string" ? e.type.toLowerCase() : e.type;
          }
        if ((e.description && (r.description = e.description), e.enum && (r.enum = e.enum), e.properties)) {
          r.properties = {};
          for (let [n, o] of Object.entries(e.properties)) r.properties[n] = this.convertSchemaToJsonSchema(o);
        }
        return (
          e.items && (r.items = this.convertSchemaToJsonSchema(e.items)),
          e.required && (r.required = e.required),
          r.type === "object" && !("additionalProperties" in r) && (r.additionalProperties = !1),
          r
        );
      }
    };
  });
var Np,
  l1,
  Die,
  ZR,
  Iie,
  Rqe,
  u2e,
  b6 = j(() => {
    "use strict";
    ((Np = "glm-4.7"),
      (l1 = "Qwen3-Coder-Plus"),
      (Die = "text-embedding-v1"),
      (ZR = "gemini-2.5-flash-lite"),
      (Iie = "https://apis.iflow.cn/v1 /* @iflow-api-endpoint */"),
      (Rqe = "https://ducky.code.alibaba-inc.com/v1/openai"),
      (u2e = [
        { label: "GLM-4.7", value: "glm-4.7" },
        { label: "iFlow-ROME-30BA3B", value: "iFlow-ROME-30BA3B" },
        { label: "DeepSeek-V3.2", value: "deepseek-v3.2-chat" },
        { label: "GLM-5", value: "glm-5" },
        { label: "Qwen3-Coder-Plus", value: "qwen3-coder-plus" },
        { label: "Kimi-K2-Thinking", value: "kimi-k2-thinking" },
        { label: "MiniMax-M2.5", value: "minimax-m2.5" },
        { label: "Kimi-K2.5", value: "kimi-k2.5" },
        { label: "Kimi-K2-0905", value: "kimi-k2-0905" },
      ]));
  });
import dis from "crypto";
function c2e() {
  return (kqe > Oqe.length - 16 && (dis.randomFillSync(Oqe), (kqe = 0)), Oqe.slice(kqe, (kqe += 16)));
}
var Oqe,
  kqe,
  UOt = j(() => {
    ((Oqe = new Uint8Array(256)), (kqe = Oqe.length));
  });
var Uln,
  $ln = j(() => {
    Uln =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  });
function fis(t) {
  return typeof t == "string" && Uln.test(t);
}
var qL,
  l2e = j(() => {
    $ln();
    qL = fis;
  });
function pis(t, e = 0) {
  let r = (
    ig[t[e + 0]] +
    ig[t[e + 1]] +
    ig[t[e + 2]] +
    ig[t[e + 3]] +
    "-" +
    ig[t[e + 4]] +
    ig[t[e + 5]] +
    "-" +
    ig[t[e + 6]] +
    ig[t[e + 7]] +
    "-" +
    ig[t[e + 8]] +
    ig[t[e + 9]] +
    "-" +
    ig[t[e + 10]] +
    ig[t[e + 11]] +
    ig[t[e + 12]] +
    ig[t[e + 13]] +
    ig[t[e + 14]] +
    ig[t[e + 15]]
  ).toLowerCase();
  if (!qL(r)) throw TypeError("Stringified UUID is invalid");
  return r;
}
var ig,
  HL,
  m2e = j(() => {
    l2e();
    ig = [];
    for (let t = 0; t < 256; ++t) ig.push((t + 256).toString(16).substr(1));
    HL = pis;
  });
function his(t, e, r) {
  let n = (e && r) || 0,
    o = e || new Array(16);
  t = t || {};
  let s = t.node || jln,
    a = t.clockseq !== void 0 ? t.clockseq : $Ot;
  if (s == null || a == null) {
    let p = t.random || (t.rng || c2e)();
    (s == null && (s = jln = [p[0] | 1, p[1], p[2], p[3], p[4], p[5]]),
      a == null && (a = $Ot = ((p[6] << 8) | p[7]) & 16383));
  }
  let u = t.msecs !== void 0 ? t.msecs : Date.now(),
    c = t.nsecs !== void 0 ? t.nsecs : QOt + 1,
    m = u - jOt + (c - QOt) / 1e4;
  if (
    (m < 0 && t.clockseq === void 0 && (a = (a + 1) & 16383),
    (m < 0 || u > jOt) && t.nsecs === void 0 && (c = 0),
    c >= 1e4)
  )
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  ((jOt = u), (QOt = c), ($Ot = a), (u += 122192928e5));
  let d = ((u & 268435455) * 1e4 + c) % 4294967296;
  ((o[n++] = (d >>> 24) & 255), (o[n++] = (d >>> 16) & 255), (o[n++] = (d >>> 8) & 255), (o[n++] = d & 255));
  let f = ((u / 4294967296) * 1e4) & 268435455;
  ((o[n++] = (f >>> 8) & 255),
    (o[n++] = f & 255),
    (o[n++] = ((f >>> 24) & 15) | 16),
    (o[n++] = (f >>> 16) & 255),
    (o[n++] = (a >>> 8) | 128),
    (o[n++] = a & 255));
  for (let p = 0; p < 6; ++p) o[n + p] = s[p];
  return e || HL(o);
}
var jln,
  $Ot,
  jOt,
  QOt,
  Nqe,
  Qln = j(() => {
    UOt();
    m2e();
    ((jOt = 0), (QOt = 0));
    Nqe = his;
  });
function gis(t) {
  if (!qL(t)) throw TypeError("Invalid UUID");
  let e,
    r = new Uint8Array(16);
  return (
    (r[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24),
    (r[1] = (e >>> 16) & 255),
    (r[2] = (e >>> 8) & 255),
    (r[3] = e & 255),
    (r[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8),
    (r[5] = e & 255),
    (r[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8),
    (r[7] = e & 255),
    (r[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8),
    (r[9] = e & 255),
    (r[10] = ((e = parseInt(t.slice(24, 36), 16)) / 1099511627776) & 255),
    (r[11] = (e / 4294967296) & 255),
    (r[12] = (e >>> 24) & 255),
    (r[13] = (e >>> 16) & 255),
    (r[14] = (e >>> 8) & 255),
    (r[15] = e & 255),
    r
  );
}
var Pqe,
  GOt = j(() => {
    l2e();
    Pqe = gis;
  });
function bis(t) {
  t = unescape(encodeURIComponent(t));
  let e = [];
  for (let r = 0; r < t.length; ++r) e.push(t.charCodeAt(r));
  return e;
}
function Bqe(t, e, r) {
  function n(o, s, a, u) {
    if ((typeof o == "string" && (o = bis(o)), typeof s == "string" && (s = Pqe(s)), s.length !== 16))
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    let c = new Uint8Array(16 + o.length);
    if ((c.set(s), c.set(o, s.length), (c = r(c)), (c[6] = (c[6] & 15) | e), (c[8] = (c[8] & 63) | 128), a)) {
      u = u || 0;
      for (let m = 0; m < 16; ++m) a[u + m] = c[m];
      return a;
    }
    return HL(c);
  }
  try {
    n.name = t;
  } catch {}
  return ((n.DNS = Ais), (n.URL = yis), n);
}
var Ais,
  yis,
  qOt = j(() => {
    m2e();
    GOt();
    ((Ais = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"), (yis = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"));
  });
import _is from "crypto";
function Eis(t) {
  return (
    Array.isArray(t) ? (t = Buffer.from(t)) : typeof t == "string" && (t = Buffer.from(t, "utf8")),
    _is.createHash("md5").update(t).digest()
  );
}
var Gln,
  qln = j(() => {
    Gln = Eis;
  });
var vis,
  Hln,
  Vln = j(() => {
    qOt();
    qln();
    ((vis = Bqe("v3", 48, Gln)), (Hln = vis));
  });
function Cis(t, e, r) {
  t = t || {};
  let n = t.random || (t.rng || c2e)();
  if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), e)) {
    r = r || 0;
    for (let o = 0; o < 16; ++o) e[r + o] = n[o];
    return e;
  }
  return HL(n);
}
var Wln,
  zln = j(() => {
    UOt();
    m2e();
    Wln = Cis;
  });
import Sis from "crypto";
function wis(t) {
  return (
    Array.isArray(t) ? (t = Buffer.from(t)) : typeof t == "string" && (t = Buffer.from(t, "utf8")),
    Sis.createHash("sha1").update(t).digest()
  );
}
var Yln,
  Kln = j(() => {
    Yln = wis;
  });
var xis,
  Jln,
  Xln = j(() => {
    qOt();
    Kln();
    ((xis = Bqe("v5", 80, Yln)), (Jln = xis));
  });
var Zln,
  e0n = j(() => {
    Zln = "00000000-0000-0000-0000-000000000000";
  });
function Tis(t) {
  if (!qL(t)) throw TypeError("Invalid UUID");
  return parseInt(t.substr(14, 1), 16);
}
var t0n,
  r0n = j(() => {
    l2e();
    t0n = Tis;
  });
var n0n = {};
Wi(n0n, {
  NIL: () => Zln,
  parse: () => Pqe,
  stringify: () => HL,
  v1: () => Nqe,
  v3: () => Hln,
  v4: () => Wln,
  v5: () => Jln,
  validate: () => qL,
  version: () => t0n,
});
var HOt = j(() => {
  Qln();
  Vln();
  zln();
  Xln();
  e0n();
  r0n();
  l2e();
  m2e();
  GOt();
});
var Rie,
  i0n = j(() => {
    "use strict";
    Rie = class {
      private_token;
      error;
      message;
      constructor(e = {}) {
        ((this.private_token = e.private_token), (this.error = e.error), (this.message = e.message));
      }
      isSuccess() {
        return !!this.private_token && !this.error;
      }
      getPrivateToken() {
        return this.private_token;
      }
      getError() {
        return this.error || this.message;
      }
    };
  });
var kie,
  o0n = j(() => {
    "use strict";
    kie = class {
      codeEndpoint;
      authEndpoint;
      tokenEndpoint;
      windowWidth;
      windowHeight;
      pollInterval;
      maxRetries;
      constructor(e = {}) {
        ((this.codeEndpoint = "https://api.code.alibaba-inc.com/api"),
          (this.authEndpoint = "https://code.alibaba-inc.com/auth"),
          (this.tokenEndpoint = `${this.codeEndpoint}/v3/user/auth`),
          (this.windowWidth = 800),
          (this.windowHeight = 600),
          (this.pollInterval = 3e3),
          (this.maxRetries = 60));
      }
      getAuthUrl(e) {
        return `${this.authEndpoint}?uuid=${e}`;
      }
      getTokenUrl(e) {
        return `${this.tokenEndpoint}?uuid=${e}`;
      }
      getWindowFeatures() {
        let n = (1920 - this.windowWidth) / 2,
          o = (1080 - this.windowHeight) / 2;
        return [
          ["width", this.windowWidth],
          ["height", this.windowHeight],
          ["left", n],
          ["top", o],
          ["resizable", "yes"],
          ["scrollbars", "yes"],
          ["toolbar", "no"],
          ["menubar", "no"],
          ["location", "no"],
          ["status", "no"],
        ]
          .map((a) => `${a[0]}=${a[1]}`)
          .join(",");
      }
    };
  });
import { promises as Lqe } from "node:fs";
import * as Mqe from "node:path";
var ek,
  s0n = j(() => {
    "use strict";
    T3e();
    ek = class {
      static AONE_TOKEN_FILE = "aone_token.json";
      static getTokenPath() {
        let e = wp.getGlobalIFlowDir();
        return Mqe.join(e, this.AONE_TOKEN_FILE);
      }
      static async savePrivateToken(e) {
        let r = this.getTokenPath(),
          n = { private_token: e, created_at: Date.now(), expires_at: Date.now() + 365 * 24 * 60 * 60 * 1e3 };
        (await Lqe.mkdir(Mqe.dirname(r), { recursive: !0 }),
          await Lqe.writeFile(r, JSON.stringify(n, null, 2), { mode: 384 }));
      }
      static async loadPrivateToken() {
        try {
          let e = this.getTokenPath(),
            r = JSON.parse(await Lqe.readFile(e, "utf-8"));
          if (r.expires_at && Date.now() > r.expires_at) {
            await this.clearPrivateToken();
            return;
          }
          return r.private_token;
        } catch {
          return;
        }
      }
      static async clearPrivateToken() {
        try {
          let e = this.getTokenPath();
          await Lqe.rm(e, { force: !0 });
        } catch {}
      }
      static async hasValidToken() {
        return !!(await this.loadPrivateToken());
      }
    };
  });
function a0n(t) {
  return new Promise((e) => setTimeout(e, t));
}
async function u0n(t, e) {
  let r = e.getTokenUrl(t);
  try {
    let n = await fetch(r, {
      method: "GET",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
    });
    if (!n.ok)
      return new Rie({ error: `HTTP ${n.status}: ${n.statusText}`, message: `Failed to get private token from: ${r}` });
    let o = await n.json();
    return new Rie(o);
  } catch (n) {
    return (
      console.error("Failed to get private token:", r, n),
      new Rie({ error: "Network error", message: n instanceof Error ? n.message : "Unknown error occurred" })
    );
  }
}
async function c0n(t = new kie()) {
  let e = Nqe(),
    r = t.getAuthUrl(e),
    n = t.getWindowFeatures();
  if (typeof window > "u" || typeof window.open != "function" || typeof process < "u") return await Dis(e, r, t);
  let o = window.open(r, "_blank", n);
  if (!o) throw new Error("Failed to open authentication window. Please check popup blocker settings.");
  let s = 0;
  for (; s < t.maxRetries; ) {
    await a0n(t.pollInterval);
    let a = await u0n(e, t);
    if (a.isSuccess()) {
      let u = a.getPrivateToken();
      return (o.close(), await ek.savePrivateToken(u), !0);
    }
    if (o.closed) throw new Error("Authentication window was closed by user");
    s++;
  }
  throw (o.close(), new Error("Authentication timeout. Please try again."));
}
async function Dis(t, e, r) {
  console.log(`

Aone authentication required.
Attempting to open authentication page in your browser.
Otherwise navigate to:

${e}

`);
  let n = !1;
  (fx() && (n = await BC(e)),
    n ||
      console.log(`Failed to open browser automatically.
Please navigate to:

${e}
`),
    console.log("Waiting for authentication..."));
  let o = 0;
  for (; o < r.maxRetries; ) {
    await a0n(r.pollInterval);
    let s = await u0n(t, r);
    if (s.isSuccess()) {
      let a = s.getPrivateToken();
      return (await ek.savePrivateToken(a), console.log("Aone authentication successful!"), !0);
    }
    (s.getError() && console.log(`Waiting for authentication... (${o + 1}/${r.maxRetries})`), o++);
  }
  throw new Error("Authentication timeout. Please try again.");
}
async function Fqe(t = new kie()) {
  return (await ek.hasValidToken()) ? (console.log("Using cached Aone authentication."), !0) : await c0n(t);
}
async function vT() {
  return await ek.loadPrivateToken();
}
async function Uqe() {
  (await ek.clearPrivateToken(), console.log("Aone authentication cleared."));
}
async function Iis() {
  return await ek.hasValidToken();
}
async function Ris(t = new kie()) {
  return (await Uqe(), await Fqe(t));
}
var $qe = j(() => {
  "use strict";
  HOt();
  M3e();
  i0n();
  o0n();
  s0n();
});
async function VOt(t, e, r, n, o) {
  if (e === Kt.LOGIN_WITH_IFLOW) {
    await kG(e, r, o);
    let s = await yR();
    if (!s) throw new Error("No API key found. Please re-authenticate.");
    let a = r.getContentGeneratorConfig();
    return new gH({
      model: r.getModel(),
      apiKey: s,
      baseUrl: a?.baseUrl || Iie,
      authType: e,
      debugMode: r.getDebugMode(),
      multimodalModelName: "qwen3-vl-plus",
      config: r,
    });
  }
  if (e === Kt.LOGIN_WITH_AONE) {
    if (!(await Fqe())) throw new Error("Aone authentication failed. Please try again.");
    let a = await vT();
    if (!a) throw new Error("No Aone private token found. Please re-authenticate.");
    let u = r.getContentGeneratorConfig(),
      c = Buffer.from(a, "utf8").toString("base64");
    return new gH({
      model: r.getModel(),
      apiKey: c,
      baseUrl: u?.baseUrl || "https://ducky.code.alibaba-inc.com/v1/openai",
      authType: e,
      debugMode: r.getDebugMode(),
      multimodalModelName: u?.multimodalModelName,
      config: r,
    });
  }
  if (e === Kt.CLOUD_SHELL) {
    let s = await kG(e, r),
      a = await YPr(s);
    return new _R(s, a.projectId, t, n, a.userTier);
  }
  throw new Error(`Unsupported authType: ${e}`);
}
var WOt = j(() => {
  "use strict";
  UC();
  OG();
  KPr();
  UOe();
  FOt();
  b6();
  $qe();
});
function kis(t) {
  return t.replace(/([a-z])([A-Z])/g, "$1_$2").toUpperCase();
}
function CT(t) {
  let e = kis(t),
    r = `IFLOW_${t}`;
  if (process.env[r]) return process.env[r];
  let n = `IFLOW_${e}`;
  if (process.env[n]) return process.env[n];
  let o = `iflow_${t}`;
  if (process.env[o]) return process.env[o];
  let s = `iflow_${e}`;
  if (process.env[s]) return process.env[s];
}
function d2e() {
  return CT("apiKey");
}
function f2e() {
  return CT("baseUrl") || CT("url");
}
function p2e() {
  return CT("modelName") || CT("model");
}
function l0n(t) {
  let e = CT(t);
  if (e === void 0) return;
  let r = e.toLowerCase();
  if (r === "true" || r === "1" || r === "yes") return !0;
  if (r === "false" || r === "0" || r === "no") return !1;
}
function m0n(t) {
  let e = CT(t);
  if (e === void 0) return;
  let r = Number(e);
  return isNaN(r) ? void 0 : r;
}
function d0n(t) {
  let e = CT(t);
  if (e !== void 0)
    return e
      .split(",")
      .map((r) => r.trim())
      .filter((r) => r.length > 0);
}
function jqe() {
  return !!(d2e() || f2e() || p2e());
}
function zOt() {
  let t = {},
    e = [
      "theme",
      "selectedAuthType",
      "sandbox",
      "toolDiscoveryCommand",
      "toolCallCommand",
      "mcpServerCommand",
      "contextFileName",
      "preferredEditor",
      "apiKey",
      "baseUrl",
      "modelName",
      "searchApiKey",
      "multimodalModelName",
      "memoryImportFormat",
    ],
    r = [
      "useExternalAuth",
      "showMemoryUsage",
      "usageStatisticsEnabled",
      "autoConfigureMaxOldSpaceSize",
      "hideWindowTitle",
      "hideTips",
      "hideBanner",
      "vimMode",
      "ideModeFeature",
      "ideMode",
      "disableAutoUpdate",
      "skipNextSpeakerCheck",
      "useRipgrep",
      "debugKeystrokeLogging",
      "pasteFromClipboard",
      "lightWeightPlan",
    ],
    n = [
      "maxSessionTurns",
      "memoryDiscoveryMaxDirs",
      "tokensLimit",
      "outputTokensLimit",
      "compressionTokenThreshold",
      "shellTimeout",
      "temperature",
      "topP",
    ],
    o = ["coreTools", "excludeTools", "allowMCPServers", "excludeMCPServers"];
  return (
    e.forEach((s) => {
      let a = CT(s);
      a !== void 0 && (t[s] = a);
    }),
    r.forEach((s) => {
      let a = l0n(s);
      a !== void 0 && (t[s] = a);
    }),
    n.forEach((s) => {
      let a = m0n(s);
      a !== void 0 && (t[s] = a);
    }),
    o.forEach((s) => {
      let a = d0n(s);
      a !== void 0 && (t[s] = a);
    }),
    t
  );
}
function Ois() {
  return { apiKey: d2e(), baseUrl: f2e(), model: p2e() };
}
var YOt = j(() => {
  "use strict";
});
async function KOt(t, e, r) {
  if ((e === Kt.LOGIN_WITH_IFLOW || e === Kt.LOGIN_WITH_AONE) && (await pte()))
    try {
      (await MOe()) || console.log("OAuth2 credentials cleared due to expiration. Please authenticate when prompted.");
    } catch (f) {
      throw (f instanceof Error && f.message.includes("SERVER_OAUTH2_REQUIRED"), f);
    }
  let n = d2e(),
    o = f2e(),
    s = p2e(),
    a = r?.apiKey || n,
    u = r?.baseUrl || o || Nis[e],
    c = r?.modelName || t.getModel() || s || Np,
    m = { model: c, authType: e, proxy: t?.getProxy(), debugMode: t?.getDebugMode(), config: t };
  if (e === Kt.CLOUD_SHELL) return m;
  if (e === Kt.LOGIN_WITH_IFLOW || e === Kt.IFLOW) {
    if (((m.baseUrl = u || Iie), (m.multimodalModelName = "qwen3-vl-plus"), a?.startsWith("sk-"))) m.apiKey = a;
    else if (a && !t.getApiKey()) {
      let d = await hte(a);
      if (!d.apiKey) throw new Error("Failed to obtain API key from token exchange");
      m.apiKey = d.apiKey;
    }
    return m;
  }
  return e === Kt.LOGIN_WITH_AONE
    ? ((m.baseUrl = u || Rqe), (m.multimodalModelName = "Qwen2.5-VL-72B_aone"), a && (m.apiKey = a), m)
    : ([...A6, Kt.OPENAI_COMPATIBLE].includes(e) && a && ((m.apiKey = a), (m.baseUrl = u), (m.model = c)), m);
}
async function JOt(t, e, r, n) {
  let s = { headers: { "User-Agent": `iFlowCLI/0.5.19 (${process.platform}; ${process.arch})` } };
  if ((t.authType && [...A6, Kt.IDEA_LAB].includes(t.authType)) || t.authType === Kt.OPENAI_COMPATIBLE)
    return new gH({ ...t, config: e });
  if (t.authType === Kt.LOGIN_WITH_IFLOW || t.authType === Kt.LOGIN_WITH_AONE || t.authType === Kt.CLOUD_SHELL)
    return VOt(s, t.authType, e, r, n);
  throw new Error(`Error creating contentGenerator: Unsupported authType: ${t.authType}`);
}
var Kt,
  A6,
  Nis,
  UC = j(() => {
    "use strict";
    WOt();
    b6();
    FOt();
    YOt();
    OG();
    (function (t) {
      ((t.LOGIN_WITH_IFLOW = "oauth-iflow"),
        (t.LOGIN_WITH_AONE = "oauth-aone"),
        (t.CLOUD_SHELL = "cloud-shell"),
        (t.IFLOW = "iflow"),
        (t.AONE = "aone"),
        (t.IDEA_LAB = "idealab"),
        (t.OPENAI_COMPATIBLE = "openai-compatible"));
    })(Kt || (Kt = {}));
    ((A6 = [Kt.IFLOW, Kt.AONE]),
      (Nis = { [Kt.IDEA_LAB]: "https://idealab.alibaba-inc.com/api/openai/v1", [Kt.IFLOW]: Iie, [Kt.AONE]: Rqe }));
  });
var Qqe,
  f0n = j(() => {
    "use strict";
    Qqe = class {
      prompts = new Map();
      registerPrompt(e) {
        if (this.prompts.has(e.name)) {
          let r = `${e.serverName}_${e.name}`;
          (console.warn(`Prompt with name "${e.name}" is already registered. Renaming to "${r}".`),
            this.prompts.set(r, { ...e, name: r }));
        } else this.prompts.set(e.name, e);
      }
      getAllPrompts() {
        return Array.from(this.prompts.values()).sort((e, r) => e.name.localeCompare(r.name));
      }
      getPrompt(e) {
        return this.prompts.get(e);
      }
      getPromptsByServer(e) {
        let r = [];
        for (let n of this.prompts.values()) n.serverName === e && r.push(n);
        return r.sort((n, o) => n.name.localeCompare(o.name));
      }
      clear() {
        this.prompts.clear();
      }
      removePromptsByServer(e) {
        for (let [r, n] of this.prompts.entries()) n.serverName === e && this.prompts.delete(r);
      }
    };
  });
var Lr,
  Bb = j(() => {
    "use strict";
    (function (t) {
      ((t.INVALID_TOOL_PARAMS = "invalid_tool_params"),
        (t.UNKNOWN = "unknown"),
        (t.UNHANDLED_EXCEPTION = "unhandled_exception"),
        (t.TOOL_NOT_REGISTERED = "tool_not_registered"),
        (t.EXECUTION_FAILED = "execution_failed"),
        (t.FILE_NOT_FOUND = "file_not_found"),
        (t.FILE_WRITE_FAILURE = "file_write_failure"),
        (t.READ_CONTENT_FAILURE = "read_content_failure"),
        (t.ATTEMPT_TO_CREATE_EXISTING_FILE = "attempt_to_create_existing_file"),
        (t.FILE_TOO_LARGE = "file_too_large"),
        (t.PERMISSION_DENIED = "permission_denied"),
        (t.NO_SPACE_LEFT = "no_space_left"),
        (t.TARGET_IS_DIRECTORY = "target_is_directory"),
        (t.PATH_NOT_IN_WORKSPACE = "path_not_in_workspace"),
        (t.SEARCH_PATH_NOT_FOUND = "search_path_not_found"),
        (t.SEARCH_PATH_NOT_A_DIRECTORY = "search_path_not_a_directory"),
        (t.EDIT_PREPARATION_FAILURE = "edit_preparation_failure"),
        (t.EDIT_NO_OCCURRENCE_FOUND = "edit_no_occurrence_found"),
        (t.EDIT_EXPECTED_OCCURRENCE_MISMATCH = "edit_expected_occurrence_mismatch"),
        (t.EDIT_NO_CHANGE = "edit_no_change"),
        (t.EDIT_NO_CHANGE_LLM_JUDGEMENT = "edit_no_change_llm_judgement"),
        (t.GLOB_EXECUTION_ERROR = "glob_execution_error"),
        (t.GREP_EXECUTION_ERROR = "grep_execution_error"),
        (t.LS_EXECUTION_ERROR = "ls_execution_error"),
        (t.PATH_IS_NOT_A_DIRECTORY = "path_is_not_a_directory"),
        (t.MCP_TOOL_ERROR = "mcp_tool_error"),
        (t.MEMORY_TOOL_EXECUTION_ERROR = "memory_tool_execution_error"),
        (t.READ_MANY_FILES_SEARCH_ERROR = "read_many_files_search_error"),
        (t.DISCOVERED_TOOL_EXECUTION_ERROR = "discovered_tool_execution_error"),
        (t.WEB_FETCH_NO_URL_IN_PROMPT = "web_fetch_no_url_in_prompt"),
        (t.WEB_FETCH_FALLBACK_FAILED = "web_fetch_fallback_failed"),
        (t.WEB_FETCH_PROCESSING_ERROR = "web_fetch_processing_error"),
        (t.WEB_SEARCH_FAILED = "web_search_failed"),
        (t.HOOK_BLOCKED = "hook_blocked"),
        (t.BASH_OUTPUT_EXECUTION_ERROR = "bash_output_execution_error"),
        (t.TASK_NOT_FOUND = "task_not_found"));
    })(Lr || (Lr = {}));
  });
var fu,
  p0n,
  oi,
  tk,
  h2e = j(() => {
    (function (t) {
      t.assertEqual = (o) => {};
      function e(o) {}
      t.assertIs = e;
      function r(o) {
        throw new Error();
      }
      ((t.assertNever = r),
        (t.arrayToEnum = (o) => {
          let s = {};
          for (let a of o) s[a] = a;
          return s;
        }),
        (t.getValidEnumValues = (o) => {
          let s = t.objectKeys(o).filter((u) => typeof o[o[u]] != "number"),
            a = {};
          for (let u of s) a[u] = o[u];
          return t.objectValues(a);
        }),
        (t.objectValues = (o) =>
          t.objectKeys(o).map(function (s) {
            return o[s];
          })),
        (t.objectKeys =
          typeof Object.keys == "function"
            ? (o) => Object.keys(o)
            : (o) => {
                let s = [];
                for (let a in o) Object.prototype.hasOwnProperty.call(o, a) && s.push(a);
                return s;
              }),
        (t.find = (o, s) => {
          for (let a of o) if (s(a)) return a;
        }),
        (t.isInteger =
          typeof Number.isInteger == "function"
            ? (o) => Number.isInteger(o)
            : (o) => typeof o == "number" && Number.isFinite(o) && Math.floor(o) === o));
      function n(o, s = " | ") {
        return o.map((a) => (typeof a == "string" ? `'${a}'` : a)).join(s);
      }
      ((t.joinValues = n), (t.jsonStringifyReplacer = (o, s) => (typeof s == "bigint" ? s.toString() : s)));
    })(fu || (fu = {}));
    (function (t) {
      t.mergeShapes = (e, r) => ({ ...e, ...r });
    })(p0n || (p0n = {}));
    ((oi = fu.arrayToEnum([
      "string",
      "nan",
      "number",
      "integer",
      "float",
      "boolean",
      "date",
      "bigint",
      "symbol",
      "function",
      "undefined",
      "null",
      "array",
      "object",
      "unknown",
      "promise",
      "void",
      "never",
      "map",
      "set",
    ])),
      (tk = (t) => {
        switch (typeof t) {
          case "undefined":
            return oi.undefined;
          case "string":
            return oi.string;
          case "number":
            return Number.isNaN(t) ? oi.nan : oi.number;
          case "boolean":
            return oi.boolean;
          case "function":
            return oi.function;
          case "bigint":
            return oi.bigint;
          case "symbol":
            return oi.symbol;
          case "object":
            return Array.isArray(t)
              ? oi.array
              : t === null
                ? oi.null
                : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function"
                  ? oi.promise
                  : typeof Map < "u" && t instanceof Map
                    ? oi.map
                    : typeof Set < "u" && t instanceof Set
                      ? oi.set
                      : typeof Date < "u" && t instanceof Date
                        ? oi.date
                        : oi.object;
          default:
            return oi.unknown;
        }
      }));
  });
var rn,
  y6,
  Gqe = j(() => {
    h2e();
    ((rn = fu.arrayToEnum([
      "invalid_type",
      "invalid_literal",
      "custom",
      "invalid_union",
      "invalid_union_discriminator",
      "invalid_enum_value",
      "unrecognized_keys",
      "invalid_arguments",
      "invalid_return_type",
      "invalid_date",
      "invalid_string",
      "too_small",
      "too_big",
      "invalid_intersection_types",
      "not_multiple_of",
      "not_finite",
    ])),
      (y6 = class t extends Error {
        get errors() {
          return this.issues;
        }
        constructor(e) {
          (super(),
            (this.issues = []),
            (this.addIssue = (n) => {
              this.issues = [...this.issues, n];
            }),
            (this.addIssues = (n = []) => {
              this.issues = [...this.issues, ...n];
            }));
          let r = new.target.prototype;
          (Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : (this.__proto__ = r),
            (this.name = "ZodError"),
            (this.issues = e));
        }
        format(e) {
          let r =
              e ||
              function (s) {
                return s.message;
              },
            n = { _errors: [] },
            o = (s) => {
              for (let a of s.issues)
                if (a.code === "invalid_union") a.unionErrors.map(o);
                else if (a.code === "invalid_return_type") o(a.returnTypeError);
                else if (a.code === "invalid_arguments") o(a.argumentsError);
                else if (a.path.length === 0) n._errors.push(r(a));
                else {
                  let u = n,
                    c = 0;
                  for (; c < a.path.length; ) {
                    let m = a.path[c];
                    (c === a.path.length - 1
                      ? ((u[m] = u[m] || { _errors: [] }), u[m]._errors.push(r(a)))
                      : (u[m] = u[m] || { _errors: [] }),
                      (u = u[m]),
                      c++);
                  }
                }
            };
          return (o(this), n);
        }
        static assert(e) {
          if (!(e instanceof t)) throw new Error(`Not a ZodError: ${e}`);
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, fu.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return this.issues.length === 0;
        }
        flatten(e = (r) => r.message) {
          let r = Object.create(null),
            n = [];
          for (let o of this.issues)
            if (o.path.length > 0) {
              let s = o.path[0];
              ((r[s] = r[s] || []), r[s].push(e(o)));
            } else n.push(e(o));
          return { formErrors: n, fieldErrors: r };
        }
        get formErrors() {
          return this.flatten();
        }
      }));
    y6.create = (t) => new y6(t);
  });
var Pis,
  VL,
  XOt = j(() => {
    Gqe();
    h2e();
    ((Pis = (t, e) => {
      let r;
      switch (t.code) {
        case rn.invalid_type:
          t.received === oi.undefined ? (r = "Required") : (r = `Expected ${t.expected}, received ${t.received}`);
          break;
        case rn.invalid_literal:
          r = `Invalid literal value, expected ${JSON.stringify(t.expected, fu.jsonStringifyReplacer)}`;
          break;
        case rn.unrecognized_keys:
          r = `Unrecognized key(s) in object: ${fu.joinValues(t.keys, ", ")}`;
          break;
        case rn.invalid_union:
          r = "Invalid input";
          break;
        case rn.invalid_union_discriminator:
          r = `Invalid discriminator value. Expected ${fu.joinValues(t.options)}`;
          break;
        case rn.invalid_enum_value:
          r = `Invalid enum value. Expected ${fu.joinValues(t.options)}, received '${t.received}'`;
          break;
        case rn.invalid_arguments:
          r = "Invalid function arguments";
          break;
        case rn.invalid_return_type:
          r = "Invalid function return type";
          break;
        case rn.invalid_date:
          r = "Invalid date";
          break;
        case rn.invalid_string:
          typeof t.validation == "object"
            ? "includes" in t.validation
              ? ((r = `Invalid input: must include "${t.validation.includes}"`),
                typeof t.validation.position == "number" &&
                  (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`))
              : "startsWith" in t.validation
                ? (r = `Invalid input: must start with "${t.validation.startsWith}"`)
                : "endsWith" in t.validation
                  ? (r = `Invalid input: must end with "${t.validation.endsWith}"`)
                  : fu.assertNever(t.validation)
            : t.validation !== "regex"
              ? (r = `Invalid ${t.validation}`)
              : (r = "Invalid");
          break;
        case rn.too_small:
          t.type === "array"
            ? (r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)`)
            : t.type === "string"
              ? (r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)`)
              : t.type === "number"
                ? (r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}`)
                : t.type === "bigint"
                  ? (r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}`)
                  : t.type === "date"
                    ? (r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}`)
                    : (r = "Invalid input");
          break;
        case rn.too_big:
          t.type === "array"
            ? (r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)`)
            : t.type === "string"
              ? (r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)`)
              : t.type === "number"
                ? (r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}`)
                : t.type === "bigint"
                  ? (r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}`)
                  : t.type === "date"
                    ? (r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}`)
                    : (r = "Invalid input");
          break;
        case rn.custom:
          r = "Invalid input";
          break;
        case rn.invalid_intersection_types:
          r = "Intersection results could not be merged";
          break;
        case rn.not_multiple_of:
          r = `Number must be a multiple of ${t.multipleOf}`;
          break;
        case rn.not_finite:
          r = "Number must be finite";
          break;
        default:
          ((r = e.defaultError), fu.assertNever(t));
      }
      return { message: r };
    }),
      (VL = Pis));
  });
function g2e() {
  return Bis;
}
var Bis,
  qqe = j(() => {
    XOt();
    Bis = VL;
  });
function Un(t, e) {
  let r = g2e(),
    n = Hqe({
      issueData: e,
      data: t.data,
      path: t.path,
      errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, r, r === VL ? void 0 : VL].filter((o) => !!o),
    });
  t.common.issues.push(n);
}
var Hqe,
  Lb,
  Bo,
  Oie,
  y2,
  ZOt,
  eNt,
  bH,
  b2e,
  tNt = j(() => {
    qqe();
    XOt();
    Hqe = (t) => {
      let { data: e, path: r, errorMaps: n, issueData: o } = t,
        s = [...r, ...(o.path || [])],
        a = { ...o, path: s };
      if (o.message !== void 0) return { ...o, path: s, message: o.message };
      let u = "",
        c = n
          .filter((m) => !!m)
          .slice()
          .reverse();
      for (let m of c) u = m(a, { data: e, defaultError: u }).message;
      return { ...o, path: s, message: u };
    };
    ((Lb = class t {
      constructor() {
        this.value = "valid";
      }
      dirty() {
        this.value === "valid" && (this.value = "dirty");
      }
      abort() {
        this.value !== "aborted" && (this.value = "aborted");
      }
      static mergeArray(e, r) {
        let n = [];
        for (let o of r) {
          if (o.status === "aborted") return Bo;
          (o.status === "dirty" && e.dirty(), n.push(o.value));
        }
        return { status: e.value, value: n };
      }
      static async mergeObjectAsync(e, r) {
        let n = [];
        for (let o of r) {
          let s = await o.key,
            a = await o.value;
          n.push({ key: s, value: a });
        }
        return t.mergeObjectSync(e, n);
      }
      static mergeObjectSync(e, r) {
        let n = {};
        for (let o of r) {
          let { key: s, value: a } = o;
          if (s.status === "aborted" || a.status === "aborted") return Bo;
          (s.status === "dirty" && e.dirty(),
            a.status === "dirty" && e.dirty(),
            s.value !== "__proto__" && (typeof a.value < "u" || o.alwaysSet) && (n[s.value] = a.value));
        }
        return { status: e.value, value: n };
      }
    }),
      (Bo = Object.freeze({ status: "aborted" })),
      (Oie = (t) => ({ status: "dirty", value: t })),
      (y2 = (t) => ({ status: "valid", value: t })),
      (ZOt = (t) => t.status === "aborted"),
      (eNt = (t) => t.status === "dirty"),
      (bH = (t) => t.status === "valid"),
      (b2e = (t) => typeof Promise < "u" && t instanceof Promise));
  });
var h0n = j(() => {});
var Ui,
  g0n = j(() => {
    (function (t) {
      ((t.errToObj = (e) => (typeof e == "string" ? { message: e } : e || {})),
        (t.toString = (e) => (typeof e == "string" ? e : e?.message)));
    })(Ui || (Ui = {}));
  });
function Xs(t) {
  if (!t) return {};
  let { errorMap: e, invalid_type_error: r, required_error: n, description: o } = t;
  if (e && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e
    ? { errorMap: e, description: o }
    : {
        errorMap: (a, u) => {
          let { message: c } = t;
          return a.code === "invalid_enum_value"
            ? { message: c ?? u.defaultError }
            : typeof u.data > "u"
              ? { message: c ?? n ?? u.defaultError }
              : a.code !== "invalid_type"
                ? { message: u.defaultError }
                : { message: c ?? r ?? u.defaultError };
        },
        description: o,
      };
}
function y0n(t) {
  let e = "[0-5]\\d";
  t.precision ? (e = `${e}\\.\\d{${t.precision}}`) : t.precision == null && (e = `${e}(\\.\\d+)?`);
  let r = t.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${r}`;
}
function Xis(t) {
  return new RegExp(`^${y0n(t)}$`);
}
function Zis(t) {
  let e = `${A0n}T${y0n(t)}`,
    r = [];
  return (
    r.push(t.local ? "Z?" : "Z"),
    t.offset && r.push("([+-]\\d{2}:?\\d{2})"),
    (e = `${e}(${r.join("|")})`),
    new RegExp(`^${e}$`)
  );
}
function eos(t, e) {
  return !!(((e === "v4" || !e) && His.test(t)) || ((e === "v6" || !e) && Wis.test(t)));
}
function tos(t, e) {
  if (!jis.test(t)) return !1;
  try {
    let [r] = t.split(".");
    if (!r) return !1;
    let n = r
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(r.length + ((4 - (r.length % 4)) % 4), "="),
      o = JSON.parse(atob(n));
    return !(typeof o != "object" || o === null || ("typ" in o && o?.typ !== "JWT") || !o.alg || (e && o.alg !== e));
  } catch {
    return !1;
  }
}
function ros(t, e) {
  return !!(((e === "v4" || !e) && Vis.test(t)) || ((e === "v6" || !e) && zis.test(t)));
}
function nos(t, e) {
  let r = (t.toString().split(".")[1] || "").length,
    n = (e.toString().split(".")[1] || "").length,
    o = r > n ? r : n,
    s = Number.parseInt(t.toFixed(o).replace(".", "")),
    a = Number.parseInt(e.toFixed(o).replace(".", ""));
  return (s % a) / 10 ** o;
}
function Nie(t) {
  if (t instanceof _6) {
    let e = {};
    for (let r in t.shape) {
      let n = t.shape[r];
      e[r] = E4.create(Nie(n));
    }
    return new _6({ ...t._def, shape: () => e });
  } else
    return t instanceof zL
      ? new zL({ ...t._def, type: Nie(t.element) })
      : t instanceof E4
        ? E4.create(Nie(t.unwrap()))
        : t instanceof ik
          ? ik.create(Nie(t.unwrap()))
          : t instanceof nk
            ? nk.create(t.items.map((e) => Nie(e)))
            : t;
}
function iNt(t, e) {
  let r = tk(t),
    n = tk(e);
  if (t === e) return { valid: !0, data: t };
  if (r === oi.object && n === oi.object) {
    let o = fu.objectKeys(e),
      s = fu.objectKeys(t).filter((u) => o.indexOf(u) !== -1),
      a = { ...t, ...e };
    for (let u of s) {
      let c = iNt(t[u], e[u]);
      if (!c.valid) return { valid: !1 };
      a[u] = c.data;
    }
    return { valid: !0, data: a };
  } else if (r === oi.array && n === oi.array) {
    if (t.length !== e.length) return { valid: !1 };
    let o = [];
    for (let s = 0; s < t.length; s++) {
      let a = t[s],
        u = e[s],
        c = iNt(a, u);
      if (!c.valid) return { valid: !1 };
      o.push(c.data);
    }
    return { valid: !0, data: o };
  } else return r === oi.date && n === oi.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
function _0n(t, e) {
  return new jie({ values: t, typeName: Ro.ZodEnum, ...Xs(e) });
}
var nE,
  b0n,
  Fa,
  Lis,
  Mis,
  Fis,
  Uis,
  $is,
  jis,
  Qis,
  Gis,
  qis,
  rNt,
  His,
  Vis,
  Wis,
  zis,
  Yis,
  Kis,
  A0n,
  Jis,
  Pie,
  A2e,
  y2e,
  _2e,
  E2e,
  v2e,
  Bie,
  Lie,
  C2e,
  WL,
  ST,
  S2e,
  zL,
  _6,
  Mie,
  rk,
  nNt,
  Fie,
  nk,
  oNt,
  w2e,
  x2e,
  sNt,
  Uie,
  $ie,
  jie,
  Qie,
  AH,
  v4,
  E4,
  ik,
  Gie,
  qie,
  T2e,
  HHu,
  Vqe,
  Wqe,
  Hie,
  VHu,
  Ro,
  WHu,
  zHu,
  YHu,
  KHu,
  JHu,
  XHu,
  ZHu,
  eVu,
  tVu,
  rVu,
  nVu,
  iVu,
  oVu,
  sVu,
  ios,
  aVu,
  uVu,
  cVu,
  lVu,
  mVu,
  dVu,
  fVu,
  pVu,
  hVu,
  gVu,
  bVu,
  AVu,
  yVu,
  _Vu,
  EVu,
  vVu,
  CVu,
  SVu,
  wVu,
  E0n = j(() => {
    Gqe();
    qqe();
    g0n();
    tNt();
    h2e();
    ((nE = class {
      constructor(e, r, n, o) {
        ((this._cachedPath = []), (this.parent = e), (this.data = r), (this._path = n), (this._key = o));
      }
      get path() {
        return (
          this._cachedPath.length ||
            (Array.isArray(this._key)
              ? this._cachedPath.push(...this._path, ...this._key)
              : this._cachedPath.push(...this._path, this._key)),
          this._cachedPath
        );
      }
    }),
      (b0n = (t, e) => {
        if (bH(e)) return { success: !0, data: e.value };
        if (!t.common.issues.length) throw new Error("Validation failed but no issues detected.");
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            let r = new y6(t.common.issues);
            return ((this._error = r), this._error);
          },
        };
      }));
    ((Fa = class {
      get description() {
        return this._def.description;
      }
      _getType(e) {
        return tk(e.data);
      }
      _getOrReturnCtx(e, r) {
        return (
          r || {
            common: e.parent.common,
            data: e.data,
            parsedType: tk(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent,
          }
        );
      }
      _processInputParams(e) {
        return {
          status: new Lb(),
          ctx: {
            common: e.parent.common,
            data: e.data,
            parsedType: tk(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent,
          },
        };
      }
      _parseSync(e) {
        let r = this._parse(e);
        if (b2e(r)) throw new Error("Synchronous parse encountered promise.");
        return r;
      }
      _parseAsync(e) {
        let r = this._parse(e);
        return Promise.resolve(r);
      }
      parse(e, r) {
        let n = this.safeParse(e, r);
        if (n.success) return n.data;
        throw n.error;
      }
      safeParse(e, r) {
        let n = {
            common: { issues: [], async: r?.async ?? !1, contextualErrorMap: r?.errorMap },
            path: r?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: tk(e),
          },
          o = this._parseSync({ data: e, path: n.path, parent: n });
        return b0n(n, o);
      }
      "~validate"(e) {
        let r = {
          common: { issues: [], async: !!this["~standard"].async },
          path: [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: tk(e),
        };
        if (!this["~standard"].async)
          try {
            let n = this._parseSync({ data: e, path: [], parent: r });
            return bH(n) ? { value: n.value } : { issues: r.common.issues };
          } catch (n) {
            (n?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0),
              (r.common = { issues: [], async: !0 }));
          }
        return this._parseAsync({ data: e, path: [], parent: r }).then((n) =>
          bH(n) ? { value: n.value } : { issues: r.common.issues },
        );
      }
      async parseAsync(e, r) {
        let n = await this.safeParseAsync(e, r);
        if (n.success) return n.data;
        throw n.error;
      }
      async safeParseAsync(e, r) {
        let n = {
            common: { issues: [], contextualErrorMap: r?.errorMap, async: !0 },
            path: r?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: tk(e),
          },
          o = this._parse({ data: e, path: n.path, parent: n }),
          s = await (b2e(o) ? o : Promise.resolve(o));
        return b0n(n, s);
      }
      refine(e, r) {
        let n = (o) => (typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(o) : r);
        return this._refinement((o, s) => {
          let a = e(o),
            u = () => s.addIssue({ code: rn.custom, ...n(o) });
          return typeof Promise < "u" && a instanceof Promise
            ? a.then((c) => (c ? !0 : (u(), !1)))
            : a
              ? !0
              : (u(), !1);
        });
      }
      refinement(e, r) {
        return this._refinement((n, o) => (e(n) ? !0 : (o.addIssue(typeof r == "function" ? r(n, o) : r), !1)));
      }
      _refinement(e) {
        return new v4({ schema: this, typeName: Ro.ZodEffects, effect: { type: "refinement", refinement: e } });
      }
      superRefine(e) {
        return this._refinement(e);
      }
      constructor(e) {
        ((this.spa = this.safeParseAsync),
          (this._def = e),
          (this.parse = this.parse.bind(this)),
          (this.safeParse = this.safeParse.bind(this)),
          (this.parseAsync = this.parseAsync.bind(this)),
          (this.safeParseAsync = this.safeParseAsync.bind(this)),
          (this.spa = this.spa.bind(this)),
          (this.refine = this.refine.bind(this)),
          (this.refinement = this.refinement.bind(this)),
          (this.superRefine = this.superRefine.bind(this)),
          (this.optional = this.optional.bind(this)),
          (this.nullable = this.nullable.bind(this)),
          (this.nullish = this.nullish.bind(this)),
          (this.array = this.array.bind(this)),
          (this.promise = this.promise.bind(this)),
          (this.or = this.or.bind(this)),
          (this.and = this.and.bind(this)),
          (this.transform = this.transform.bind(this)),
          (this.brand = this.brand.bind(this)),
          (this.default = this.default.bind(this)),
          (this.catch = this.catch.bind(this)),
          (this.describe = this.describe.bind(this)),
          (this.pipe = this.pipe.bind(this)),
          (this.readonly = this.readonly.bind(this)),
          (this.isNullable = this.isNullable.bind(this)),
          (this.isOptional = this.isOptional.bind(this)),
          (this["~standard"] = { version: 1, vendor: "zod", validate: (r) => this["~validate"](r) }));
      }
      optional() {
        return E4.create(this, this._def);
      }
      nullable() {
        return ik.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return zL.create(this);
      }
      promise() {
        return AH.create(this, this._def);
      }
      or(e) {
        return Mie.create([this, e], this._def);
      }
      and(e) {
        return Fie.create(this, e, this._def);
      }
      transform(e) {
        return new v4({
          ...Xs(this._def),
          schema: this,
          typeName: Ro.ZodEffects,
          effect: { type: "transform", transform: e },
        });
      }
      default(e) {
        let r = typeof e == "function" ? e : () => e;
        return new Gie({ ...Xs(this._def), innerType: this, defaultValue: r, typeName: Ro.ZodDefault });
      }
      brand() {
        return new Vqe({ typeName: Ro.ZodBranded, type: this, ...Xs(this._def) });
      }
      catch(e) {
        let r = typeof e == "function" ? e : () => e;
        return new qie({ ...Xs(this._def), innerType: this, catchValue: r, typeName: Ro.ZodCatch });
      }
      describe(e) {
        let r = this.constructor;
        return new r({ ...this._def, description: e });
      }
      pipe(e) {
        return Wqe.create(this, e);
      }
      readonly() {
        return Hie.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    }),
      (Lis = /^c[^\s-]{8,}$/i),
      (Mis = /^[0-9a-z]+$/),
      (Fis = /^[0-9A-HJKMNP-TV-Z]{26}$/i),
      (Uis = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i),
      ($is = /^[a-z0-9_-]{21}$/i),
      (jis = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/),
      (Qis =
        /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/),
      (Gis = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i),
      (qis = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$"),
      (His =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/),
      (Vis =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/),
      (Wis =
        /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/),
      (zis =
        /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/),
      (Yis = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/),
      (Kis = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/),
      (A0n =
        "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))"),
      (Jis = new RegExp(`^${A0n}$`)));
    Pie = class t extends Fa {
      _parse(e) {
        if ((this._def.coerce && (e.data = String(e.data)), this._getType(e) !== oi.string)) {
          let s = this._getOrReturnCtx(e);
          return (Un(s, { code: rn.invalid_type, expected: oi.string, received: s.parsedType }), Bo);
        }
        let n = new Lb(),
          o;
        for (let s of this._def.checks)
          if (s.kind === "min")
            e.data.length < s.value &&
              ((o = this._getOrReturnCtx(e, o)),
              Un(o, {
                code: rn.too_small,
                minimum: s.value,
                type: "string",
                inclusive: !0,
                exact: !1,
                message: s.message,
              }),
              n.dirty());
          else if (s.kind === "max")
            e.data.length > s.value &&
              ((o = this._getOrReturnCtx(e, o)),
              Un(o, {
                code: rn.too_big,
                maximum: s.value,
                type: "string",
                inclusive: !0,
                exact: !1,
                message: s.message,
              }),
              n.dirty());
          else if (s.kind === "length") {
            let a = e.data.length > s.value,
              u = e.data.length < s.value;
            (a || u) &&
              ((o = this._getOrReturnCtx(e, o)),
              a
                ? Un(o, {
                    code: rn.too_big,
                    maximum: s.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: s.message,
                  })
                : u &&
                  Un(o, {
                    code: rn.too_small,
                    minimum: s.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: s.message,
                  }),
              n.dirty());
          } else if (s.kind === "email")
            Gis.test(e.data) ||
              ((o = this._getOrReturnCtx(e, o)),
              Un(o, { validation: "email", code: rn.invalid_string, message: s.message }),
              n.dirty());
          else if (s.kind === "emoji")
            (rNt || (rNt = new RegExp(qis, "u")),
              rNt.test(e.data) ||
                ((o = this._getOrReturnCtx(e, o)),
                Un(o, { validation: "emoji", code: rn.invalid_string, message: s.message }),
                n.dirty()));
          else if (s.kind === "uuid")
            Uis.test(e.data) ||
              ((o = this._getOrReturnCtx(e, o)),
              Un(o, { validation: "uuid", code: rn.invalid_string, message: s.message }),
              n.dirty());
          else if (s.kind === "nanoid")
            $is.test(e.data) ||
              ((o = this._getOrReturnCtx(e, o)),
              Un(o, { validation: "nanoid", code: rn.invalid_string, message: s.message }),
              n.dirty());
          else if (s.kind === "cuid")
            Lis.test(e.data) ||
              ((o = this._getOrReturnCtx(e, o)),
              Un(o, { validation: "cuid", code: rn.invalid_string, message: s.message }),
              n.dirty());
          else if (s.kind === "cuid2")
            Mis.test(e.data) ||
              ((o = this._getOrReturnCtx(e, o)),
              Un(o, { validation: "cuid2", code: rn.invalid_string, message: s.message }),
              n.dirty());
          else if (s.kind === "ulid")
            Fis.test(e.data) ||
              ((o = this._getOrReturnCtx(e, o)),
              Un(o, { validation: "ulid", code: rn.invalid_string, message: s.message }),
              n.dirty());
          else if (s.kind === "url")
            try {
              new URL(e.data);
            } catch {
              ((o = this._getOrReturnCtx(e, o)),
                Un(o, { validation: "url", code: rn.invalid_string, message: s.message }),
                n.dirty());
            }
          else
            s.kind === "regex"
              ? ((s.regex.lastIndex = 0),
                s.regex.test(e.data) ||
                  ((o = this._getOrReturnCtx(e, o)),
                  Un(o, { validation: "regex", code: rn.invalid_string, message: s.message }),
                  n.dirty()))
              : s.kind === "trim"
                ? (e.data = e.data.trim())
                : s.kind === "includes"
                  ? e.data.includes(s.value, s.position) ||
                    ((o = this._getOrReturnCtx(e, o)),
                    Un(o, {
                      code: rn.invalid_string,
                      validation: { includes: s.value, position: s.position },
                      message: s.message,
                    }),
                    n.dirty())
                  : s.kind === "toLowerCase"
                    ? (e.data = e.data.toLowerCase())
                    : s.kind === "toUpperCase"
                      ? (e.data = e.data.toUpperCase())
                      : s.kind === "startsWith"
                        ? e.data.startsWith(s.value) ||
                          ((o = this._getOrReturnCtx(e, o)),
                          Un(o, { code: rn.invalid_string, validation: { startsWith: s.value }, message: s.message }),
                          n.dirty())
                        : s.kind === "endsWith"
                          ? e.data.endsWith(s.value) ||
                            ((o = this._getOrReturnCtx(e, o)),
                            Un(o, { code: rn.invalid_string, validation: { endsWith: s.value }, message: s.message }),
                            n.dirty())
                          : s.kind === "datetime"
                            ? Zis(s).test(e.data) ||
                              ((o = this._getOrReturnCtx(e, o)),
                              Un(o, { code: rn.invalid_string, validation: "datetime", message: s.message }),
                              n.dirty())
                            : s.kind === "date"
                              ? Jis.test(e.data) ||
                                ((o = this._getOrReturnCtx(e, o)),
                                Un(o, { code: rn.invalid_string, validation: "date", message: s.message }),
                                n.dirty())
                              : s.kind === "time"
                                ? Xis(s).test(e.data) ||
                                  ((o = this._getOrReturnCtx(e, o)),
                                  Un(o, { code: rn.invalid_string, validation: "time", message: s.message }),
                                  n.dirty())
                                : s.kind === "duration"
                                  ? Qis.test(e.data) ||
                                    ((o = this._getOrReturnCtx(e, o)),
                                    Un(o, { validation: "duration", code: rn.invalid_string, message: s.message }),
                                    n.dirty())
                                  : s.kind === "ip"
                                    ? eos(e.data, s.version) ||
                                      ((o = this._getOrReturnCtx(e, o)),
                                      Un(o, { validation: "ip", code: rn.invalid_string, message: s.message }),
                                      n.dirty())
                                    : s.kind === "jwt"
                                      ? tos(e.data, s.alg) ||
                                        ((o = this._getOrReturnCtx(e, o)),
                                        Un(o, { validation: "jwt", code: rn.invalid_string, message: s.message }),
                                        n.dirty())
                                      : s.kind === "cidr"
                                        ? ros(e.data, s.version) ||
                                          ((o = this._getOrReturnCtx(e, o)),
                                          Un(o, { validation: "cidr", code: rn.invalid_string, message: s.message }),
                                          n.dirty())
                                        : s.kind === "base64"
                                          ? Yis.test(e.data) ||
                                            ((o = this._getOrReturnCtx(e, o)),
                                            Un(o, {
                                              validation: "base64",
                                              code: rn.invalid_string,
                                              message: s.message,
                                            }),
                                            n.dirty())
                                          : s.kind === "base64url"
                                            ? Kis.test(e.data) ||
                                              ((o = this._getOrReturnCtx(e, o)),
                                              Un(o, {
                                                validation: "base64url",
                                                code: rn.invalid_string,
                                                message: s.message,
                                              }),
                                              n.dirty())
                                            : fu.assertNever(s);
        return { status: n.value, value: e.data };
      }
      _regex(e, r, n) {
        return this.refinement((o) => e.test(o), { validation: r, code: rn.invalid_string, ...Ui.errToObj(n) });
      }
      _addCheck(e) {
        return new t({ ...this._def, checks: [...this._def.checks, e] });
      }
      email(e) {
        return this._addCheck({ kind: "email", ...Ui.errToObj(e) });
      }
      url(e) {
        return this._addCheck({ kind: "url", ...Ui.errToObj(e) });
      }
      emoji(e) {
        return this._addCheck({ kind: "emoji", ...Ui.errToObj(e) });
      }
      uuid(e) {
        return this._addCheck({ kind: "uuid", ...Ui.errToObj(e) });
      }
      nanoid(e) {
        return this._addCheck({ kind: "nanoid", ...Ui.errToObj(e) });
      }
      cuid(e) {
        return this._addCheck({ kind: "cuid", ...Ui.errToObj(e) });
      }
      cuid2(e) {
        return this._addCheck({ kind: "cuid2", ...Ui.errToObj(e) });
      }
      ulid(e) {
        return this._addCheck({ kind: "ulid", ...Ui.errToObj(e) });
      }
      base64(e) {
        return this._addCheck({ kind: "base64", ...Ui.errToObj(e) });
      }
      base64url(e) {
        return this._addCheck({ kind: "base64url", ...Ui.errToObj(e) });
      }
      jwt(e) {
        return this._addCheck({ kind: "jwt", ...Ui.errToObj(e) });
      }
      ip(e) {
        return this._addCheck({ kind: "ip", ...Ui.errToObj(e) });
      }
      cidr(e) {
        return this._addCheck({ kind: "cidr", ...Ui.errToObj(e) });
      }
      datetime(e) {
        return typeof e == "string"
          ? this._addCheck({ kind: "datetime", precision: null, offset: !1, local: !1, message: e })
          : this._addCheck({
              kind: "datetime",
              precision: typeof e?.precision > "u" ? null : e?.precision,
              offset: e?.offset ?? !1,
              local: e?.local ?? !1,
              ...Ui.errToObj(e?.message),
            });
      }
      date(e) {
        return this._addCheck({ kind: "date", message: e });
      }
      time(e) {
        return typeof e == "string"
          ? this._addCheck({ kind: "time", precision: null, message: e })
          : this._addCheck({
              kind: "time",
              precision: typeof e?.precision > "u" ? null : e?.precision,
              ...Ui.errToObj(e?.message),
            });
      }
      duration(e) {
        return this._addCheck({ kind: "duration", ...Ui.errToObj(e) });
      }
      regex(e, r) {
        return this._addCheck({ kind: "regex", regex: e, ...Ui.errToObj(r) });
      }
      includes(e, r) {
        return this._addCheck({ kind: "includes", value: e, position: r?.position, ...Ui.errToObj(r?.message) });
      }
      startsWith(e, r) {
        return this._addCheck({ kind: "startsWith", value: e, ...Ui.errToObj(r) });
      }
      endsWith(e, r) {
        return this._addCheck({ kind: "endsWith", value: e, ...Ui.errToObj(r) });
      }
      min(e, r) {
        return this._addCheck({ kind: "min", value: e, ...Ui.errToObj(r) });
      }
      max(e, r) {
        return this._addCheck({ kind: "max", value: e, ...Ui.errToObj(r) });
      }
      length(e, r) {
        return this._addCheck({ kind: "length", value: e, ...Ui.errToObj(r) });
      }
      nonempty(e) {
        return this.min(1, Ui.errToObj(e));
      }
      trim() {
        return new t({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
      }
      toLowerCase() {
        return new t({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
      }
      toUpperCase() {
        return new t({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
      }
      get isDatetime() {
        return !!this._def.checks.find((e) => e.kind === "datetime");
      }
      get isDate() {
        return !!this._def.checks.find((e) => e.kind === "date");
      }
      get isTime() {
        return !!this._def.checks.find((e) => e.kind === "time");
      }
      get isDuration() {
        return !!this._def.checks.find((e) => e.kind === "duration");
      }
      get isEmail() {
        return !!this._def.checks.find((e) => e.kind === "email");
      }
      get isURL() {
        return !!this._def.checks.find((e) => e.kind === "url");
      }
      get isEmoji() {
        return !!this._def.checks.find((e) => e.kind === "emoji");
      }
      get isUUID() {
        return !!this._def.checks.find((e) => e.kind === "uuid");
      }
      get isNANOID() {
        return !!this._def.checks.find((e) => e.kind === "nanoid");
      }
      get isCUID() {
        return !!this._def.checks.find((e) => e.kind === "cuid");
      }
      get isCUID2() {
        return !!this._def.checks.find((e) => e.kind === "cuid2");
      }
      get isULID() {
        return !!this._def.checks.find((e) => e.kind === "ulid");
      }
      get isIP() {
        return !!this._def.checks.find((e) => e.kind === "ip");
      }
      get isCIDR() {
        return !!this._def.checks.find((e) => e.kind === "cidr");
      }
      get isBase64() {
        return !!this._def.checks.find((e) => e.kind === "base64");
      }
      get isBase64url() {
        return !!this._def.checks.find((e) => e.kind === "base64url");
      }
      get minLength() {
        let e = null;
        for (let r of this._def.checks) r.kind === "min" && (e === null || r.value > e) && (e = r.value);
        return e;
      }
      get maxLength() {
        let e = null;
        for (let r of this._def.checks) r.kind === "max" && (e === null || r.value < e) && (e = r.value);
        return e;
      }
    };
    Pie.create = (t) => new Pie({ checks: [], typeName: Ro.ZodString, coerce: t?.coerce ?? !1, ...Xs(t) });
    A2e = class t extends Fa {
      constructor() {
        (super(...arguments), (this.min = this.gte), (this.max = this.lte), (this.step = this.multipleOf));
      }
      _parse(e) {
        if ((this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== oi.number)) {
          let s = this._getOrReturnCtx(e);
          return (Un(s, { code: rn.invalid_type, expected: oi.number, received: s.parsedType }), Bo);
        }
        let n,
          o = new Lb();
        for (let s of this._def.checks)
          s.kind === "int"
            ? fu.isInteger(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              Un(n, { code: rn.invalid_type, expected: "integer", received: "float", message: s.message }),
              o.dirty())
            : s.kind === "min"
              ? (s.inclusive ? e.data < s.value : e.data <= s.value) &&
                ((n = this._getOrReturnCtx(e, n)),
                Un(n, {
                  code: rn.too_small,
                  minimum: s.value,
                  type: "number",
                  inclusive: s.inclusive,
                  exact: !1,
                  message: s.message,
                }),
                o.dirty())
              : s.kind === "max"
                ? (s.inclusive ? e.data > s.value : e.data >= s.value) &&
                  ((n = this._getOrReturnCtx(e, n)),
                  Un(n, {
                    code: rn.too_big,
                    maximum: s.value,
                    type: "number",
                    inclusive: s.inclusive,
                    exact: !1,
                    message: s.message,
                  }),
                  o.dirty())
                : s.kind === "multipleOf"
                  ? nos(e.data, s.value) !== 0 &&
                    ((n = this._getOrReturnCtx(e, n)),
                    Un(n, { code: rn.not_multiple_of, multipleOf: s.value, message: s.message }),
                    o.dirty())
                  : s.kind === "finite"
                    ? Number.isFinite(e.data) ||
                      ((n = this._getOrReturnCtx(e, n)), Un(n, { code: rn.not_finite, message: s.message }), o.dirty())
                    : fu.assertNever(s);
        return { status: o.value, value: e.data };
      }
      gte(e, r) {
        return this.setLimit("min", e, !0, Ui.toString(r));
      }
      gt(e, r) {
        return this.setLimit("min", e, !1, Ui.toString(r));
      }
      lte(e, r) {
        return this.setLimit("max", e, !0, Ui.toString(r));
      }
      lt(e, r) {
        return this.setLimit("max", e, !1, Ui.toString(r));
      }
      setLimit(e, r, n, o) {
        return new t({
          ...this._def,
          checks: [...this._def.checks, { kind: e, value: r, inclusive: n, message: Ui.toString(o) }],
        });
      }
      _addCheck(e) {
        return new t({ ...this._def, checks: [...this._def.checks, e] });
      }
      int(e) {
        return this._addCheck({ kind: "int", message: Ui.toString(e) });
      }
      positive(e) {
        return this._addCheck({ kind: "min", value: 0, inclusive: !1, message: Ui.toString(e) });
      }
      negative(e) {
        return this._addCheck({ kind: "max", value: 0, inclusive: !1, message: Ui.toString(e) });
      }
      nonpositive(e) {
        return this._addCheck({ kind: "max", value: 0, inclusive: !0, message: Ui.toString(e) });
      }
      nonnegative(e) {
        return this._addCheck({ kind: "min", value: 0, inclusive: !0, message: Ui.toString(e) });
      }
      multipleOf(e, r) {
        return this._addCheck({ kind: "multipleOf", value: e, message: Ui.toString(r) });
      }
      finite(e) {
        return this._addCheck({ kind: "finite", message: Ui.toString(e) });
      }
      safe(e) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: Ui.toString(e),
        })._addCheck({ kind: "max", inclusive: !0, value: Number.MAX_SAFE_INTEGER, message: Ui.toString(e) });
      }
      get minValue() {
        let e = null;
        for (let r of this._def.checks) r.kind === "min" && (e === null || r.value > e) && (e = r.value);
        return e;
      }
      get maxValue() {
        let e = null;
        for (let r of this._def.checks) r.kind === "max" && (e === null || r.value < e) && (e = r.value);
        return e;
      }
      get isInt() {
        return !!this._def.checks.find((e) => e.kind === "int" || (e.kind === "multipleOf" && fu.isInteger(e.value)));
      }
      get isFinite() {
        let e = null,
          r = null;
        for (let n of this._def.checks) {
          if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf") return !0;
          n.kind === "min"
            ? (r === null || n.value > r) && (r = n.value)
            : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        }
        return Number.isFinite(r) && Number.isFinite(e);
      }
    };
    A2e.create = (t) => new A2e({ checks: [], typeName: Ro.ZodNumber, coerce: t?.coerce || !1, ...Xs(t) });
    y2e = class t extends Fa {
      constructor() {
        (super(...arguments), (this.min = this.gte), (this.max = this.lte));
      }
      _parse(e) {
        if (this._def.coerce)
          try {
            e.data = BigInt(e.data);
          } catch {
            return this._getInvalidInput(e);
          }
        if (this._getType(e) !== oi.bigint) return this._getInvalidInput(e);
        let n,
          o = new Lb();
        for (let s of this._def.checks)
          s.kind === "min"
            ? (s.inclusive ? e.data < s.value : e.data <= s.value) &&
              ((n = this._getOrReturnCtx(e, n)),
              Un(n, {
                code: rn.too_small,
                type: "bigint",
                minimum: s.value,
                inclusive: s.inclusive,
                message: s.message,
              }),
              o.dirty())
            : s.kind === "max"
              ? (s.inclusive ? e.data > s.value : e.data >= s.value) &&
                ((n = this._getOrReturnCtx(e, n)),
                Un(n, {
                  code: rn.too_big,
                  type: "bigint",
                  maximum: s.value,
                  inclusive: s.inclusive,
                  message: s.message,
                }),
                o.dirty())
              : s.kind === "multipleOf"
                ? e.data % s.value !== BigInt(0) &&
                  ((n = this._getOrReturnCtx(e, n)),
                  Un(n, { code: rn.not_multiple_of, multipleOf: s.value, message: s.message }),
                  o.dirty())
                : fu.assertNever(s);
        return { status: o.value, value: e.data };
      }
      _getInvalidInput(e) {
        let r = this._getOrReturnCtx(e);
        return (Un(r, { code: rn.invalid_type, expected: oi.bigint, received: r.parsedType }), Bo);
      }
      gte(e, r) {
        return this.setLimit("min", e, !0, Ui.toString(r));
      }
      gt(e, r) {
        return this.setLimit("min", e, !1, Ui.toString(r));
      }
      lte(e, r) {
        return this.setLimit("max", e, !0, Ui.toString(r));
      }
      lt(e, r) {
        return this.setLimit("max", e, !1, Ui.toString(r));
      }
      setLimit(e, r, n, o) {
        return new t({
          ...this._def,
          checks: [...this._def.checks, { kind: e, value: r, inclusive: n, message: Ui.toString(o) }],
        });
      }
      _addCheck(e) {
        return new t({ ...this._def, checks: [...this._def.checks, e] });
      }
      positive(e) {
        return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !1, message: Ui.toString(e) });
      }
      negative(e) {
        return this._addCheck({ kind: "max", value: BigInt(0), inclusive: !1, message: Ui.toString(e) });
      }
      nonpositive(e) {
        return this._addCheck({ kind: "max", value: BigInt(0), inclusive: !0, message: Ui.toString(e) });
      }
      nonnegative(e) {
        return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !0, message: Ui.toString(e) });
      }
      multipleOf(e, r) {
        return this._addCheck({ kind: "multipleOf", value: e, message: Ui.toString(r) });
      }
      get minValue() {
        let e = null;
        for (let r of this._def.checks) r.kind === "min" && (e === null || r.value > e) && (e = r.value);
        return e;
      }
      get maxValue() {
        let e = null;
        for (let r of this._def.checks) r.kind === "max" && (e === null || r.value < e) && (e = r.value);
        return e;
      }
    };
    y2e.create = (t) => new y2e({ checks: [], typeName: Ro.ZodBigInt, coerce: t?.coerce ?? !1, ...Xs(t) });
    _2e = class extends Fa {
      _parse(e) {
        if ((this._def.coerce && (e.data = !!e.data), this._getType(e) !== oi.boolean)) {
          let n = this._getOrReturnCtx(e);
          return (Un(n, { code: rn.invalid_type, expected: oi.boolean, received: n.parsedType }), Bo);
        }
        return y2(e.data);
      }
    };
    _2e.create = (t) => new _2e({ typeName: Ro.ZodBoolean, coerce: t?.coerce || !1, ...Xs(t) });
    E2e = class t extends Fa {
      _parse(e) {
        if ((this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== oi.date)) {
          let s = this._getOrReturnCtx(e);
          return (Un(s, { code: rn.invalid_type, expected: oi.date, received: s.parsedType }), Bo);
        }
        if (Number.isNaN(e.data.getTime())) {
          let s = this._getOrReturnCtx(e);
          return (Un(s, { code: rn.invalid_date }), Bo);
        }
        let n = new Lb(),
          o;
        for (let s of this._def.checks)
          s.kind === "min"
            ? e.data.getTime() < s.value &&
              ((o = this._getOrReturnCtx(e, o)),
              Un(o, {
                code: rn.too_small,
                message: s.message,
                inclusive: !0,
                exact: !1,
                minimum: s.value,
                type: "date",
              }),
              n.dirty())
            : s.kind === "max"
              ? e.data.getTime() > s.value &&
                ((o = this._getOrReturnCtx(e, o)),
                Un(o, {
                  code: rn.too_big,
                  message: s.message,
                  inclusive: !0,
                  exact: !1,
                  maximum: s.value,
                  type: "date",
                }),
                n.dirty())
              : fu.assertNever(s);
        return { status: n.value, value: new Date(e.data.getTime()) };
      }
      _addCheck(e) {
        return new t({ ...this._def, checks: [...this._def.checks, e] });
      }
      min(e, r) {
        return this._addCheck({ kind: "min", value: e.getTime(), message: Ui.toString(r) });
      }
      max(e, r) {
        return this._addCheck({ kind: "max", value: e.getTime(), message: Ui.toString(r) });
      }
      get minDate() {
        let e = null;
        for (let r of this._def.checks) r.kind === "min" && (e === null || r.value > e) && (e = r.value);
        return e != null ? new Date(e) : null;
      }
      get maxDate() {
        let e = null;
        for (let r of this._def.checks) r.kind === "max" && (e === null || r.value < e) && (e = r.value);
        return e != null ? new Date(e) : null;
      }
    };
    E2e.create = (t) => new E2e({ checks: [], coerce: t?.coerce || !1, typeName: Ro.ZodDate, ...Xs(t) });
    v2e = class extends Fa {
      _parse(e) {
        if (this._getType(e) !== oi.symbol) {
          let n = this._getOrReturnCtx(e);
          return (Un(n, { code: rn.invalid_type, expected: oi.symbol, received: n.parsedType }), Bo);
        }
        return y2(e.data);
      }
    };
    v2e.create = (t) => new v2e({ typeName: Ro.ZodSymbol, ...Xs(t) });
    Bie = class extends Fa {
      _parse(e) {
        if (this._getType(e) !== oi.undefined) {
          let n = this._getOrReturnCtx(e);
          return (Un(n, { code: rn.invalid_type, expected: oi.undefined, received: n.parsedType }), Bo);
        }
        return y2(e.data);
      }
    };
    Bie.create = (t) => new Bie({ typeName: Ro.ZodUndefined, ...Xs(t) });
    Lie = class extends Fa {
      _parse(e) {
        if (this._getType(e) !== oi.null) {
          let n = this._getOrReturnCtx(e);
          return (Un(n, { code: rn.invalid_type, expected: oi.null, received: n.parsedType }), Bo);
        }
        return y2(e.data);
      }
    };
    Lie.create = (t) => new Lie({ typeName: Ro.ZodNull, ...Xs(t) });
    C2e = class extends Fa {
      constructor() {
        (super(...arguments), (this._any = !0));
      }
      _parse(e) {
        return y2(e.data);
      }
    };
    C2e.create = (t) => new C2e({ typeName: Ro.ZodAny, ...Xs(t) });
    WL = class extends Fa {
      constructor() {
        (super(...arguments), (this._unknown = !0));
      }
      _parse(e) {
        return y2(e.data);
      }
    };
    WL.create = (t) => new WL({ typeName: Ro.ZodUnknown, ...Xs(t) });
    ST = class extends Fa {
      _parse(e) {
        let r = this._getOrReturnCtx(e);
        return (Un(r, { code: rn.invalid_type, expected: oi.never, received: r.parsedType }), Bo);
      }
    };
    ST.create = (t) => new ST({ typeName: Ro.ZodNever, ...Xs(t) });
    S2e = class extends Fa {
      _parse(e) {
        if (this._getType(e) !== oi.undefined) {
          let n = this._getOrReturnCtx(e);
          return (Un(n, { code: rn.invalid_type, expected: oi.void, received: n.parsedType }), Bo);
        }
        return y2(e.data);
      }
    };
    S2e.create = (t) => new S2e({ typeName: Ro.ZodVoid, ...Xs(t) });
    zL = class t extends Fa {
      _parse(e) {
        let { ctx: r, status: n } = this._processInputParams(e),
          o = this._def;
        if (r.parsedType !== oi.array)
          return (Un(r, { code: rn.invalid_type, expected: oi.array, received: r.parsedType }), Bo);
        if (o.exactLength !== null) {
          let a = r.data.length > o.exactLength.value,
            u = r.data.length < o.exactLength.value;
          (a || u) &&
            (Un(r, {
              code: a ? rn.too_big : rn.too_small,
              minimum: u ? o.exactLength.value : void 0,
              maximum: a ? o.exactLength.value : void 0,
              type: "array",
              inclusive: !0,
              exact: !0,
              message: o.exactLength.message,
            }),
            n.dirty());
        }
        if (
          (o.minLength !== null &&
            r.data.length < o.minLength.value &&
            (Un(r, {
              code: rn.too_small,
              minimum: o.minLength.value,
              type: "array",
              inclusive: !0,
              exact: !1,
              message: o.minLength.message,
            }),
            n.dirty()),
          o.maxLength !== null &&
            r.data.length > o.maxLength.value &&
            (Un(r, {
              code: rn.too_big,
              maximum: o.maxLength.value,
              type: "array",
              inclusive: !0,
              exact: !1,
              message: o.maxLength.message,
            }),
            n.dirty()),
          r.common.async)
        )
          return Promise.all([...r.data].map((a, u) => o.type._parseAsync(new nE(r, a, r.path, u)))).then((a) =>
            Lb.mergeArray(n, a),
          );
        let s = [...r.data].map((a, u) => o.type._parseSync(new nE(r, a, r.path, u)));
        return Lb.mergeArray(n, s);
      }
      get element() {
        return this._def.type;
      }
      min(e, r) {
        return new t({ ...this._def, minLength: { value: e, message: Ui.toString(r) } });
      }
      max(e, r) {
        return new t({ ...this._def, maxLength: { value: e, message: Ui.toString(r) } });
      }
      length(e, r) {
        return new t({ ...this._def, exactLength: { value: e, message: Ui.toString(r) } });
      }
      nonempty(e) {
        return this.min(1, e);
      }
    };
    zL.create = (t, e) =>
      new zL({ type: t, minLength: null, maxLength: null, exactLength: null, typeName: Ro.ZodArray, ...Xs(e) });
    _6 = class t extends Fa {
      constructor() {
        (super(...arguments), (this._cached = null), (this.nonstrict = this.passthrough), (this.augment = this.extend));
      }
      _getCached() {
        if (this._cached !== null) return this._cached;
        let e = this._def.shape(),
          r = fu.objectKeys(e);
        return ((this._cached = { shape: e, keys: r }), this._cached);
      }
      _parse(e) {
        if (this._getType(e) !== oi.object) {
          let m = this._getOrReturnCtx(e);
          return (Un(m, { code: rn.invalid_type, expected: oi.object, received: m.parsedType }), Bo);
        }
        let { status: n, ctx: o } = this._processInputParams(e),
          { shape: s, keys: a } = this._getCached(),
          u = [];
        if (!(this._def.catchall instanceof ST && this._def.unknownKeys === "strip"))
          for (let m in o.data) a.includes(m) || u.push(m);
        let c = [];
        for (let m of a) {
          let d = s[m],
            f = o.data[m];
          c.push({
            key: { status: "valid", value: m },
            value: d._parse(new nE(o, f, o.path, m)),
            alwaysSet: m in o.data,
          });
        }
        if (this._def.catchall instanceof ST) {
          let m = this._def.unknownKeys;
          if (m === "passthrough")
            for (let d of u)
              c.push({ key: { status: "valid", value: d }, value: { status: "valid", value: o.data[d] } });
          else if (m === "strict") u.length > 0 && (Un(o, { code: rn.unrecognized_keys, keys: u }), n.dirty());
          else if (m !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
        } else {
          let m = this._def.catchall;
          for (let d of u) {
            let f = o.data[d];
            c.push({
              key: { status: "valid", value: d },
              value: m._parse(new nE(o, f, o.path, d)),
              alwaysSet: d in o.data,
            });
          }
        }
        return o.common.async
          ? Promise.resolve()
              .then(async () => {
                let m = [];
                for (let d of c) {
                  let f = await d.key,
                    p = await d.value;
                  m.push({ key: f, value: p, alwaysSet: d.alwaysSet });
                }
                return m;
              })
              .then((m) => Lb.mergeObjectSync(n, m))
          : Lb.mergeObjectSync(n, c);
      }
      get shape() {
        return this._def.shape();
      }
      strict(e) {
        return (
          Ui.errToObj,
          new t({
            ...this._def,
            unknownKeys: "strict",
            ...(e !== void 0
              ? {
                  errorMap: (r, n) => {
                    let o = this._def.errorMap?.(r, n).message ?? n.defaultError;
                    return r.code === "unrecognized_keys" ? { message: Ui.errToObj(e).message ?? o } : { message: o };
                  },
                }
              : {}),
          })
        );
      }
      strip() {
        return new t({ ...this._def, unknownKeys: "strip" });
      }
      passthrough() {
        return new t({ ...this._def, unknownKeys: "passthrough" });
      }
      extend(e) {
        return new t({ ...this._def, shape: () => ({ ...this._def.shape(), ...e }) });
      }
      merge(e) {
        return new t({
          unknownKeys: e._def.unknownKeys,
          catchall: e._def.catchall,
          shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
          typeName: Ro.ZodObject,
        });
      }
      setKey(e, r) {
        return this.augment({ [e]: r });
      }
      catchall(e) {
        return new t({ ...this._def, catchall: e });
      }
      pick(e) {
        let r = {};
        for (let n of fu.objectKeys(e)) e[n] && this.shape[n] && (r[n] = this.shape[n]);
        return new t({ ...this._def, shape: () => r });
      }
      omit(e) {
        let r = {};
        for (let n of fu.objectKeys(this.shape)) e[n] || (r[n] = this.shape[n]);
        return new t({ ...this._def, shape: () => r });
      }
      deepPartial() {
        return Nie(this);
      }
      partial(e) {
        let r = {};
        for (let n of fu.objectKeys(this.shape)) {
          let o = this.shape[n];
          e && !e[n] ? (r[n] = o) : (r[n] = o.optional());
        }
        return new t({ ...this._def, shape: () => r });
      }
      required(e) {
        let r = {};
        for (let n of fu.objectKeys(this.shape))
          if (e && !e[n]) r[n] = this.shape[n];
          else {
            let s = this.shape[n];
            for (; s instanceof E4; ) s = s._def.innerType;
            r[n] = s;
          }
        return new t({ ...this._def, shape: () => r });
      }
      keyof() {
        return _0n(fu.objectKeys(this.shape));
      }
    };
    _6.create = (t, e) =>
      new _6({ shape: () => t, unknownKeys: "strip", catchall: ST.create(), typeName: Ro.ZodObject, ...Xs(e) });
    _6.strictCreate = (t, e) =>
      new _6({ shape: () => t, unknownKeys: "strict", catchall: ST.create(), typeName: Ro.ZodObject, ...Xs(e) });
    _6.lazycreate = (t, e) =>
      new _6({ shape: t, unknownKeys: "strip", catchall: ST.create(), typeName: Ro.ZodObject, ...Xs(e) });
    Mie = class extends Fa {
      _parse(e) {
        let { ctx: r } = this._processInputParams(e),
          n = this._def.options;
        function o(s) {
          for (let u of s) if (u.result.status === "valid") return u.result;
          for (let u of s)
            if (u.result.status === "dirty") return (r.common.issues.push(...u.ctx.common.issues), u.result);
          let a = s.map((u) => new y6(u.ctx.common.issues));
          return (Un(r, { code: rn.invalid_union, unionErrors: a }), Bo);
        }
        if (r.common.async)
          return Promise.all(
            n.map(async (s) => {
              let a = { ...r, common: { ...r.common, issues: [] }, parent: null };
              return { result: await s._parseAsync({ data: r.data, path: r.path, parent: a }), ctx: a };
            }),
          ).then(o);
        {
          let s,
            a = [];
          for (let c of n) {
            let m = { ...r, common: { ...r.common, issues: [] }, parent: null },
              d = c._parseSync({ data: r.data, path: r.path, parent: m });
            if (d.status === "valid") return d;
            (d.status === "dirty" && !s && (s = { result: d, ctx: m }),
              m.common.issues.length && a.push(m.common.issues));
          }
          if (s) return (r.common.issues.push(...s.ctx.common.issues), s.result);
          let u = a.map((c) => new y6(c));
          return (Un(r, { code: rn.invalid_union, unionErrors: u }), Bo);
        }
      }
      get options() {
        return this._def.options;
      }
    };
    Mie.create = (t, e) => new Mie({ options: t, typeName: Ro.ZodUnion, ...Xs(e) });
    ((rk = (t) =>
      t instanceof Uie
        ? rk(t.schema)
        : t instanceof v4
          ? rk(t.innerType())
          : t instanceof $ie
            ? [t.value]
            : t instanceof jie
              ? t.options
              : t instanceof Qie
                ? fu.objectValues(t.enum)
                : t instanceof Gie
                  ? rk(t._def.innerType)
                  : t instanceof Bie
                    ? [void 0]
                    : t instanceof Lie
                      ? [null]
                      : t instanceof E4
                        ? [void 0, ...rk(t.unwrap())]
                        : t instanceof ik
                          ? [null, ...rk(t.unwrap())]
                          : t instanceof Vqe || t instanceof Hie
                            ? rk(t.unwrap())
                            : t instanceof qie
                              ? rk(t._def.innerType)
                              : []),
      (nNt = class t extends Fa {
        _parse(e) {
          let { ctx: r } = this._processInputParams(e);
          if (r.parsedType !== oi.object)
            return (Un(r, { code: rn.invalid_type, expected: oi.object, received: r.parsedType }), Bo);
          let n = this.discriminator,
            o = r.data[n],
            s = this.optionsMap.get(o);
          return s
            ? r.common.async
              ? s._parseAsync({ data: r.data, path: r.path, parent: r })
              : s._parseSync({ data: r.data, path: r.path, parent: r })
            : (Un(r, { code: rn.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [n] }),
              Bo);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(e, r, n) {
          let o = new Map();
          for (let s of r) {
            let a = rk(s.shape[e]);
            if (!a.length)
              throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
            for (let u of a) {
              if (o.has(u)) throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(u)}`);
              o.set(u, s);
            }
          }
          return new t({ typeName: Ro.ZodDiscriminatedUnion, discriminator: e, options: r, optionsMap: o, ...Xs(n) });
        }
      }));
    Fie = class extends Fa {
      _parse(e) {
        let { status: r, ctx: n } = this._processInputParams(e),
          o = (s, a) => {
            if (ZOt(s) || ZOt(a)) return Bo;
            let u = iNt(s.value, a.value);
            return u.valid
              ? ((eNt(s) || eNt(a)) && r.dirty(), { status: r.value, value: u.data })
              : (Un(n, { code: rn.invalid_intersection_types }), Bo);
          };
        return n.common.async
          ? Promise.all([
              this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
              this._def.right._parseAsync({ data: n.data, path: n.path, parent: n }),
            ]).then(([s, a]) => o(s, a))
          : o(
              this._def.left._parseSync({ data: n.data, path: n.path, parent: n }),
              this._def.right._parseSync({ data: n.data, path: n.path, parent: n }),
            );
      }
    };
    Fie.create = (t, e, r) => new Fie({ left: t, right: e, typeName: Ro.ZodIntersection, ...Xs(r) });
    nk = class t extends Fa {
      _parse(e) {
        let { status: r, ctx: n } = this._processInputParams(e);
        if (n.parsedType !== oi.array)
          return (Un(n, { code: rn.invalid_type, expected: oi.array, received: n.parsedType }), Bo);
        if (n.data.length < this._def.items.length)
          return (
            Un(n, { code: rn.too_small, minimum: this._def.items.length, inclusive: !0, exact: !1, type: "array" }),
            Bo
          );
        !this._def.rest &&
          n.data.length > this._def.items.length &&
          (Un(n, { code: rn.too_big, maximum: this._def.items.length, inclusive: !0, exact: !1, type: "array" }),
          r.dirty());
        let s = [...n.data]
          .map((a, u) => {
            let c = this._def.items[u] || this._def.rest;
            return c ? c._parse(new nE(n, a, n.path, u)) : null;
          })
          .filter((a) => !!a);
        return n.common.async ? Promise.all(s).then((a) => Lb.mergeArray(r, a)) : Lb.mergeArray(r, s);
      }
      get items() {
        return this._def.items;
      }
      rest(e) {
        return new t({ ...this._def, rest: e });
      }
    };
    nk.create = (t, e) => {
      if (!Array.isArray(t)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new nk({ items: t, typeName: Ro.ZodTuple, rest: null, ...Xs(e) });
    };
    ((oNt = class t extends Fa {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(e) {
        let { status: r, ctx: n } = this._processInputParams(e);
        if (n.parsedType !== oi.object)
          return (Un(n, { code: rn.invalid_type, expected: oi.object, received: n.parsedType }), Bo);
        let o = [],
          s = this._def.keyType,
          a = this._def.valueType;
        for (let u in n.data)
          o.push({
            key: s._parse(new nE(n, u, n.path, u)),
            value: a._parse(new nE(n, n.data[u], n.path, u)),
            alwaysSet: u in n.data,
          });
        return n.common.async ? Lb.mergeObjectAsync(r, o) : Lb.mergeObjectSync(r, o);
      }
      get element() {
        return this._def.valueType;
      }
      static create(e, r, n) {
        return r instanceof Fa
          ? new t({ keyType: e, valueType: r, typeName: Ro.ZodRecord, ...Xs(n) })
          : new t({ keyType: Pie.create(), valueType: e, typeName: Ro.ZodRecord, ...Xs(r) });
      }
    }),
      (w2e = class extends Fa {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: r, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== oi.map)
            return (Un(n, { code: rn.invalid_type, expected: oi.map, received: n.parsedType }), Bo);
          let o = this._def.keyType,
            s = this._def.valueType,
            a = [...n.data.entries()].map(([u, c], m) => ({
              key: o._parse(new nE(n, u, n.path, [m, "key"])),
              value: s._parse(new nE(n, c, n.path, [m, "value"])),
            }));
          if (n.common.async) {
            let u = new Map();
            return Promise.resolve().then(async () => {
              for (let c of a) {
                let m = await c.key,
                  d = await c.value;
                if (m.status === "aborted" || d.status === "aborted") return Bo;
                ((m.status === "dirty" || d.status === "dirty") && r.dirty(), u.set(m.value, d.value));
              }
              return { status: r.value, value: u };
            });
          } else {
            let u = new Map();
            for (let c of a) {
              let m = c.key,
                d = c.value;
              if (m.status === "aborted" || d.status === "aborted") return Bo;
              ((m.status === "dirty" || d.status === "dirty") && r.dirty(), u.set(m.value, d.value));
            }
            return { status: r.value, value: u };
          }
        }
      }));
    w2e.create = (t, e, r) => new w2e({ valueType: e, keyType: t, typeName: Ro.ZodMap, ...Xs(r) });
    x2e = class t extends Fa {
      _parse(e) {
        let { status: r, ctx: n } = this._processInputParams(e);
        if (n.parsedType !== oi.set)
          return (Un(n, { code: rn.invalid_type, expected: oi.set, received: n.parsedType }), Bo);
        let o = this._def;
        (o.minSize !== null &&
          n.data.size < o.minSize.value &&
          (Un(n, {
            code: rn.too_small,
            minimum: o.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: o.minSize.message,
          }),
          r.dirty()),
          o.maxSize !== null &&
            n.data.size > o.maxSize.value &&
            (Un(n, {
              code: rn.too_big,
              maximum: o.maxSize.value,
              type: "set",
              inclusive: !0,
              exact: !1,
              message: o.maxSize.message,
            }),
            r.dirty()));
        let s = this._def.valueType;
        function a(c) {
          let m = new Set();
          for (let d of c) {
            if (d.status === "aborted") return Bo;
            (d.status === "dirty" && r.dirty(), m.add(d.value));
          }
          return { status: r.value, value: m };
        }
        let u = [...n.data.values()].map((c, m) => s._parse(new nE(n, c, n.path, m)));
        return n.common.async ? Promise.all(u).then((c) => a(c)) : a(u);
      }
      min(e, r) {
        return new t({ ...this._def, minSize: { value: e, message: Ui.toString(r) } });
      }
      max(e, r) {
        return new t({ ...this._def, maxSize: { value: e, message: Ui.toString(r) } });
      }
      size(e, r) {
        return this.min(e, r).max(e, r);
      }
      nonempty(e) {
        return this.min(1, e);
      }
    };
    x2e.create = (t, e) => new x2e({ valueType: t, minSize: null, maxSize: null, typeName: Ro.ZodSet, ...Xs(e) });
    ((sNt = class t extends Fa {
      constructor() {
        (super(...arguments), (this.validate = this.implement));
      }
      _parse(e) {
        let { ctx: r } = this._processInputParams(e);
        if (r.parsedType !== oi.function)
          return (Un(r, { code: rn.invalid_type, expected: oi.function, received: r.parsedType }), Bo);
        function n(u, c) {
          return Hqe({
            data: u,
            path: r.path,
            errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, g2e(), VL].filter((m) => !!m),
            issueData: { code: rn.invalid_arguments, argumentsError: c },
          });
        }
        function o(u, c) {
          return Hqe({
            data: u,
            path: r.path,
            errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, g2e(), VL].filter((m) => !!m),
            issueData: { code: rn.invalid_return_type, returnTypeError: c },
          });
        }
        let s = { errorMap: r.common.contextualErrorMap },
          a = r.data;
        if (this._def.returns instanceof AH) {
          let u = this;
          return y2(async function (...c) {
            let m = new y6([]),
              d = await u._def.args.parseAsync(c, s).catch((h) => {
                throw (m.addIssue(n(c, h)), m);
              }),
              f = await Reflect.apply(a, this, d);
            return await u._def.returns._def.type.parseAsync(f, s).catch((h) => {
              throw (m.addIssue(o(f, h)), m);
            });
          });
        } else {
          let u = this;
          return y2(function (...c) {
            let m = u._def.args.safeParse(c, s);
            if (!m.success) throw new y6([n(c, m.error)]);
            let d = Reflect.apply(a, this, m.data),
              f = u._def.returns.safeParse(d, s);
            if (!f.success) throw new y6([o(d, f.error)]);
            return f.data;
          });
        }
      }
      parameters() {
        return this._def.args;
      }
      returnType() {
        return this._def.returns;
      }
      args(...e) {
        return new t({ ...this._def, args: nk.create(e).rest(WL.create()) });
      }
      returns(e) {
        return new t({ ...this._def, returns: e });
      }
      implement(e) {
        return this.parse(e);
      }
      strictImplement(e) {
        return this.parse(e);
      }
      static create(e, r, n) {
        return new t({
          args: e || nk.create([]).rest(WL.create()),
          returns: r || WL.create(),
          typeName: Ro.ZodFunction,
          ...Xs(n),
        });
      }
    }),
      (Uie = class extends Fa {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          let { ctx: r } = this._processInputParams(e);
          return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
        }
      }));
    Uie.create = (t, e) => new Uie({ getter: t, typeName: Ro.ZodLazy, ...Xs(e) });
    $ie = class extends Fa {
      _parse(e) {
        if (e.data !== this._def.value) {
          let r = this._getOrReturnCtx(e);
          return (Un(r, { received: r.data, code: rn.invalid_literal, expected: this._def.value }), Bo);
        }
        return { status: "valid", value: e.data };
      }
      get value() {
        return this._def.value;
      }
    };
    $ie.create = (t, e) => new $ie({ value: t, typeName: Ro.ZodLiteral, ...Xs(e) });
    jie = class t extends Fa {
      _parse(e) {
        if (typeof e.data != "string") {
          let r = this._getOrReturnCtx(e),
            n = this._def.values;
          return (Un(r, { expected: fu.joinValues(n), received: r.parsedType, code: rn.invalid_type }), Bo);
        }
        if ((this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data))) {
          let r = this._getOrReturnCtx(e),
            n = this._def.values;
          return (Un(r, { received: r.data, code: rn.invalid_enum_value, options: n }), Bo);
        }
        return y2(e.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        let e = {};
        for (let r of this._def.values) e[r] = r;
        return e;
      }
      get Values() {
        let e = {};
        for (let r of this._def.values) e[r] = r;
        return e;
      }
      get Enum() {
        let e = {};
        for (let r of this._def.values) e[r] = r;
        return e;
      }
      extract(e, r = this._def) {
        return t.create(e, { ...this._def, ...r });
      }
      exclude(e, r = this._def) {
        return t.create(
          this.options.filter((n) => !e.includes(n)),
          { ...this._def, ...r },
        );
      }
    };
    jie.create = _0n;
    Qie = class extends Fa {
      _parse(e) {
        let r = fu.getValidEnumValues(this._def.values),
          n = this._getOrReturnCtx(e);
        if (n.parsedType !== oi.string && n.parsedType !== oi.number) {
          let o = fu.objectValues(r);
          return (Un(n, { expected: fu.joinValues(o), received: n.parsedType, code: rn.invalid_type }), Bo);
        }
        if (
          (this._cache || (this._cache = new Set(fu.getValidEnumValues(this._def.values))), !this._cache.has(e.data))
        ) {
          let o = fu.objectValues(r);
          return (Un(n, { received: n.data, code: rn.invalid_enum_value, options: o }), Bo);
        }
        return y2(e.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    Qie.create = (t, e) => new Qie({ values: t, typeName: Ro.ZodNativeEnum, ...Xs(e) });
    AH = class extends Fa {
      unwrap() {
        return this._def.type;
      }
      _parse(e) {
        let { ctx: r } = this._processInputParams(e);
        if (r.parsedType !== oi.promise && r.common.async === !1)
          return (Un(r, { code: rn.invalid_type, expected: oi.promise, received: r.parsedType }), Bo);
        let n = r.parsedType === oi.promise ? r.data : Promise.resolve(r.data);
        return y2(n.then((o) => this._def.type.parseAsync(o, { path: r.path, errorMap: r.common.contextualErrorMap })));
      }
    };
    AH.create = (t, e) => new AH({ type: t, typeName: Ro.ZodPromise, ...Xs(e) });
    v4 = class extends Fa {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === Ro.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(e) {
        let { status: r, ctx: n } = this._processInputParams(e),
          o = this._def.effect || null,
          s = {
            addIssue: (a) => {
              (Un(n, a), a.fatal ? r.abort() : r.dirty());
            },
            get path() {
              return n.path;
            },
          };
        if (((s.addIssue = s.addIssue.bind(s)), o.type === "preprocess")) {
          let a = o.transform(n.data, s);
          if (n.common.async)
            return Promise.resolve(a).then(async (u) => {
              if (r.value === "aborted") return Bo;
              let c = await this._def.schema._parseAsync({ data: u, path: n.path, parent: n });
              return c.status === "aborted"
                ? Bo
                : c.status === "dirty"
                  ? Oie(c.value)
                  : r.value === "dirty"
                    ? Oie(c.value)
                    : c;
            });
          {
            if (r.value === "aborted") return Bo;
            let u = this._def.schema._parseSync({ data: a, path: n.path, parent: n });
            return u.status === "aborted"
              ? Bo
              : u.status === "dirty"
                ? Oie(u.value)
                : r.value === "dirty"
                  ? Oie(u.value)
                  : u;
          }
        }
        if (o.type === "refinement") {
          let a = (u) => {
            let c = o.refinement(u, s);
            if (n.common.async) return Promise.resolve(c);
            if (c instanceof Promise)
              throw new Error(
                "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
              );
            return u;
          };
          if (n.common.async === !1) {
            let u = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
            return u.status === "aborted"
              ? Bo
              : (u.status === "dirty" && r.dirty(), a(u.value), { status: r.value, value: u.value });
          } else
            return this._def.schema
              ._parseAsync({ data: n.data, path: n.path, parent: n })
              .then((u) =>
                u.status === "aborted"
                  ? Bo
                  : (u.status === "dirty" && r.dirty(), a(u.value).then(() => ({ status: r.value, value: u.value }))),
              );
        }
        if (o.type === "transform")
          if (n.common.async === !1) {
            let a = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
            if (!bH(a)) return Bo;
            let u = o.transform(a.value, s);
            if (u instanceof Promise)
              throw new Error(
                "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
              );
            return { status: r.value, value: u };
          } else
            return this._def.schema
              ._parseAsync({ data: n.data, path: n.path, parent: n })
              .then((a) =>
                bH(a) ? Promise.resolve(o.transform(a.value, s)).then((u) => ({ status: r.value, value: u })) : Bo,
              );
        fu.assertNever(o);
      }
    };
    v4.create = (t, e, r) => new v4({ schema: t, typeName: Ro.ZodEffects, effect: e, ...Xs(r) });
    v4.createWithPreprocess = (t, e, r) =>
      new v4({ schema: e, effect: { type: "preprocess", transform: t }, typeName: Ro.ZodEffects, ...Xs(r) });
    E4 = class extends Fa {
      _parse(e) {
        return this._getType(e) === oi.undefined ? y2(void 0) : this._def.innerType._parse(e);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    E4.create = (t, e) => new E4({ innerType: t, typeName: Ro.ZodOptional, ...Xs(e) });
    ik = class extends Fa {
      _parse(e) {
        return this._getType(e) === oi.null ? y2(null) : this._def.innerType._parse(e);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ik.create = (t, e) => new ik({ innerType: t, typeName: Ro.ZodNullable, ...Xs(e) });
    Gie = class extends Fa {
      _parse(e) {
        let { ctx: r } = this._processInputParams(e),
          n = r.data;
        return (
          r.parsedType === oi.undefined && (n = this._def.defaultValue()),
          this._def.innerType._parse({ data: n, path: r.path, parent: r })
        );
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    Gie.create = (t, e) =>
      new Gie({
        innerType: t,
        typeName: Ro.ZodDefault,
        defaultValue: typeof e.default == "function" ? e.default : () => e.default,
        ...Xs(e),
      });
    qie = class extends Fa {
      _parse(e) {
        let { ctx: r } = this._processInputParams(e),
          n = { ...r, common: { ...r.common, issues: [] } },
          o = this._def.innerType._parse({ data: n.data, path: n.path, parent: { ...n } });
        return b2e(o)
          ? o.then((s) => ({
              status: "valid",
              value:
                s.status === "valid"
                  ? s.value
                  : this._def.catchValue({
                      get error() {
                        return new y6(n.common.issues);
                      },
                      input: n.data,
                    }),
            }))
          : {
              status: "valid",
              value:
                o.status === "valid"
                  ? o.value
                  : this._def.catchValue({
                      get error() {
                        return new y6(n.common.issues);
                      },
                      input: n.data,
                    }),
            };
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    qie.create = (t, e) =>
      new qie({
        innerType: t,
        typeName: Ro.ZodCatch,
        catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
        ...Xs(e),
      });
    T2e = class extends Fa {
      _parse(e) {
        if (this._getType(e) !== oi.nan) {
          let n = this._getOrReturnCtx(e);
          return (Un(n, { code: rn.invalid_type, expected: oi.nan, received: n.parsedType }), Bo);
        }
        return { status: "valid", value: e.data };
      }
    };
    T2e.create = (t) => new T2e({ typeName: Ro.ZodNaN, ...Xs(t) });
    ((HHu = Symbol("zod_brand")),
      (Vqe = class extends Fa {
        _parse(e) {
          let { ctx: r } = this._processInputParams(e),
            n = r.data;
          return this._def.type._parse({ data: n, path: r.path, parent: r });
        }
        unwrap() {
          return this._def.type;
        }
      }),
      (Wqe = class t extends Fa {
        _parse(e) {
          let { status: r, ctx: n } = this._processInputParams(e);
          if (n.common.async)
            return (async () => {
              let s = await this._def.in._parseAsync({ data: n.data, path: n.path, parent: n });
              return s.status === "aborted"
                ? Bo
                : s.status === "dirty"
                  ? (r.dirty(), Oie(s.value))
                  : this._def.out._parseAsync({ data: s.value, path: n.path, parent: n });
            })();
          {
            let o = this._def.in._parseSync({ data: n.data, path: n.path, parent: n });
            return o.status === "aborted"
              ? Bo
              : o.status === "dirty"
                ? (r.dirty(), { status: "dirty", value: o.value })
                : this._def.out._parseSync({ data: o.value, path: n.path, parent: n });
          }
        }
        static create(e, r) {
          return new t({ in: e, out: r, typeName: Ro.ZodPipeline });
        }
      }),
      (Hie = class extends Fa {
        _parse(e) {
          let r = this._def.innerType._parse(e),
            n = (o) => (bH(o) && (o.value = Object.freeze(o.value)), o);
          return b2e(r) ? r.then((o) => n(o)) : n(r);
        }
        unwrap() {
          return this._def.innerType;
        }
      }));
    Hie.create = (t, e) => new Hie({ innerType: t, typeName: Ro.ZodReadonly, ...Xs(e) });
    VHu = { object: _6.lazycreate };
    (function (t) {
      ((t.ZodString = "ZodString"),
        (t.ZodNumber = "ZodNumber"),
        (t.ZodNaN = "ZodNaN"),
        (t.ZodBigInt = "ZodBigInt"),
        (t.ZodBoolean = "ZodBoolean"),
        (t.ZodDate = "ZodDate"),
        (t.ZodSymbol = "ZodSymbol"),
        (t.ZodUndefined = "ZodUndefined"),
        (t.ZodNull = "ZodNull"),
        (t.ZodAny = "ZodAny"),
        (t.ZodUnknown = "ZodUnknown"),
        (t.ZodNever = "ZodNever"),
        (t.ZodVoid = "ZodVoid"),
        (t.ZodArray = "ZodArray"),
        (t.ZodObject = "ZodObject"),
        (t.ZodUnion = "ZodUnion"),
        (t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
        (t.ZodIntersection = "ZodIntersection"),
        (t.ZodTuple = "ZodTuple"),
        (t.ZodRecord = "ZodRecord"),
        (t.ZodMap = "ZodMap"),
        (t.ZodSet = "ZodSet"),
        (t.ZodFunction = "ZodFunction"),
        (t.ZodLazy = "ZodLazy"),
        (t.ZodLiteral = "ZodLiteral"),
        (t.ZodEnum = "ZodEnum"),
        (t.ZodEffects = "ZodEffects"),
        (t.ZodNativeEnum = "ZodNativeEnum"),
        (t.ZodOptional = "ZodOptional"),
        (t.ZodNullable = "ZodNullable"),
        (t.ZodDefault = "ZodDefault"),
        (t.ZodCatch = "ZodCatch"),
        (t.ZodPromise = "ZodPromise"),
        (t.ZodBranded = "ZodBranded"),
        (t.ZodPipeline = "ZodPipeline"),
        (t.ZodReadonly = "ZodReadonly"));
    })(Ro || (Ro = {}));
    ((WHu = Pie.create),
      (zHu = A2e.create),
      (YHu = T2e.create),
      (KHu = y2e.create),
      (JHu = _2e.create),
      (XHu = E2e.create),
      (ZHu = v2e.create),
      (eVu = Bie.create),
      (tVu = Lie.create),
      (rVu = C2e.create),
      (nVu = WL.create),
      (iVu = ST.create),
      (oVu = S2e.create),
      (sVu = zL.create),
      (ios = _6.create),
      (aVu = _6.strictCreate),
      (uVu = Mie.create),
      (cVu = nNt.create),
      (lVu = Fie.create),
      (mVu = nk.create),
      (dVu = oNt.create),
      (fVu = w2e.create),
      (pVu = x2e.create),
      (hVu = sNt.create),
      (gVu = Uie.create),
      (bVu = $ie.create),
      (AVu = jie.create),
      (yVu = Qie.create),
      (_Vu = AH.create),
      (EVu = v4.create),
      (vVu = E4.create),
      (CVu = ik.create),
      (SVu = v4.createWithPreprocess),
      (wVu = Wqe.create));
  });
var aNt = j(() => {
  qqe();
  tNt();
  h0n();
  h2e();
  E0n();
  Gqe();
});
var D2e = j(() => {
  aNt();
  aNt();
});
function Mt(t, e, r) {
  function n(u, c) {
    if (
      (u._zod || Object.defineProperty(u, "_zod", { value: { def: c, constr: a, traits: new Set() }, enumerable: !1 }),
      u._zod.traits.has(t))
    )
      return;
    (u._zod.traits.add(t), e(u, c));
    let m = a.prototype,
      d = Object.keys(m);
    for (let f = 0; f < d.length; f++) {
      let p = d[f];
      p in u || (u[p] = m[p].bind(u));
    }
  }
  let o = r?.Parent ?? Object;
  class s extends o {}
  Object.defineProperty(s, "name", { value: t });
  function a(u) {
    var c;
    let m = r?.Parent ? new s() : this;
    (n(m, u), (c = m._zod).deferred ?? (c.deferred = []));
    for (let d of m._zod.deferred) d();
    return m;
  }
  return (
    Object.defineProperty(a, "init", { value: n }),
    Object.defineProperty(a, Symbol.hasInstance, {
      value: (u) => (r?.Parent && u instanceof r.Parent ? !0 : u?._zod?.traits?.has(t)),
    }),
    Object.defineProperty(a, "name", { value: t }),
    a
  );
}
function Od(t) {
  return (t && Object.assign(I2e, t), I2e);
}
var Vie,
  R2e,
  C4,
  YL,
  I2e,
  Wie = j(() => {
    Vie = Object.freeze({ status: "aborted" });
    ((R2e = Symbol("zod_brand")),
      (C4 = class extends Error {
        constructor() {
          super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
        }
      }),
      (YL = class extends Error {
        constructor(e) {
          (super(`Encountered unidirectional transform during encode: ${e}`), (this.name = "ZodEncodeError"));
        }
      }),
      (I2e = {}));
  });
var nn = {};
Wi(nn, {
  BIGINT_FORMAT_RANGES: () => gNt,
  Class: () => cNt,
  NUMBER_FORMAT_RANGES: () => hNt,
  aborted: () => ZL,
  allowsEval: () => dNt,
  assert: () => mos,
  assertEqual: () => aos,
  assertIs: () => cos,
  assertNever: () => los,
  assertNotEqual: () => uos,
  assignProp: () => JL,
  base64ToUint8Array: () => I0n,
  base64urlToUint8Array: () => vos,
  cached: () => Yie,
  captureStackTrace: () => Yqe,
  cleanEnum: () => Eos,
  cleanRegex: () => N2e,
  clone: () => og,
  cloneDef: () => fos,
  createTransparentProxy: () => yos,
  defineLazy: () => sa,
  esc: () => zqe,
  escapeRegex: () => iE,
  extend: () => w0n,
  finalizeIssue: () => b8,
  floatSafeRemainder: () => lNt,
  getElementAtPath: () => pos,
  getEnumValues: () => O2e,
  getLengthableOrigin: () => L2e,
  getParsedType: () => Aos,
  getSizableOrigin: () => B2e,
  hexToUint8Array: () => Sos,
  isObject: () => yH,
  isPlainObject: () => XL,
  issue: () => Kie,
  joinValues: () => sr,
  jsonStringifyReplacer: () => zie,
  merge: () => _os,
  mergeDefs: () => ok,
  normalizeParams: () => un,
  nullish: () => KL,
  numKeys: () => bos,
  objectClone: () => dos,
  omit: () => S0n,
  optionalKeys: () => pNt,
  parsedType: () => on,
  partial: () => T0n,
  pick: () => C0n,
  prefixIssues: () => E6,
  primitiveTypes: () => fNt,
  promiseAllObject: () => hos,
  propertyKeyTypes: () => P2e,
  randomString: () => gos,
  required: () => D0n,
  safeExtend: () => x0n,
  shallowClone: () => Kqe,
  slugify: () => mNt,
  stringifyPrimitive: () => Zr,
  uint8ArrayToBase64: () => R0n,
  uint8ArrayToBase64url: () => Cos,
  uint8ArrayToHex: () => wos,
  unwrapMessage: () => k2e,
});
function aos(t) {
  return t;
}
function uos(t) {
  return t;
}
function cos(t) {}
function los(t) {
  throw new Error("Unexpected value in exhaustive check");
}
function mos(t) {}
function O2e(t) {
  let e = Object.values(t).filter((n) => typeof n == "number");
  return Object.entries(t)
    .filter(([n, o]) => e.indexOf(+n) === -1)
    .map(([n, o]) => o);
}
function sr(t, e = "|") {
  return t.map((r) => Zr(r)).join(e);
}
function zie(t, e) {
  return typeof e == "bigint" ? e.toString() : e;
}
function Yie(t) {
  return {
    get value() {
      {
        let r = t();
        return (Object.defineProperty(this, "value", { value: r }), r);
      }
      throw new Error("cached value already set");
    },
  };
}
function KL(t) {
  return t == null;
}
function N2e(t) {
  let e = t.startsWith("^") ? 1 : 0,
    r = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(e, r);
}
function lNt(t, e) {
  let r = (t.toString().split(".")[1] || "").length,
    n = e.toString(),
    o = (n.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(n)) {
    let c = n.match(/\d?e-(\d?)/);
    c?.[1] && (o = Number.parseInt(c[1]));
  }
  let s = r > o ? r : o,
    a = Number.parseInt(t.toFixed(s).replace(".", "")),
    u = Number.parseInt(e.toFixed(s).replace(".", ""));
  return (a % u) / 10 ** s;
}
function sa(t, e, r) {
  let n;
  Object.defineProperty(t, e, {
    get() {
      if (n !== v0n) return (n === void 0 && ((n = v0n), (n = r())), n);
    },
    set(o) {
      Object.defineProperty(t, e, { value: o });
    },
    configurable: !0,
  });
}
function dos(t) {
  return Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t));
}
function JL(t, e, r) {
  Object.defineProperty(t, e, { value: r, writable: !0, enumerable: !0, configurable: !0 });
}
function ok(...t) {
  let e = {};
  for (let r of t) {
    let n = Object.getOwnPropertyDescriptors(r);
    Object.assign(e, n);
  }
  return Object.defineProperties({}, e);
}
function fos(t) {
  return ok(t._zod.def);
}
function pos(t, e) {
  return e ? e.reduce((r, n) => r?.[n], t) : t;
}
function hos(t) {
  let e = Object.keys(t),
    r = e.map((n) => t[n]);
  return Promise.all(r).then((n) => {
    let o = {};
    for (let s = 0; s < e.length; s++) o[e[s]] = n[s];
    return o;
  });
}
function gos(t = 10) {
  let e = "abcdefghijklmnopqrstuvwxyz",
    r = "";
  for (let n = 0; n < t; n++) r += e[Math.floor(Math.random() * e.length)];
  return r;
}
function zqe(t) {
  return JSON.stringify(t);
}
function mNt(t) {
  return t
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
function yH(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
function XL(t) {
  if (yH(t) === !1) return !1;
  let e = t.constructor;
  if (e === void 0 || typeof e != "function") return !0;
  let r = e.prototype;
  return !(yH(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function Kqe(t) {
  return XL(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
function bos(t) {
  let e = 0;
  for (let r in t) Object.prototype.hasOwnProperty.call(t, r) && e++;
  return e;
}
function iE(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function og(t, e, r) {
  let n = new t._zod.constr(e ?? t._zod.def);
  return ((!e || r?.parent) && (n._zod.parent = t), n);
}
function un(t) {
  let e = t;
  if (!e) return {};
  if (typeof e == "string") return { error: () => e };
  if (e?.message !== void 0) {
    if (e?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
    e.error = e.message;
  }
  return (delete e.message, typeof e.error == "string" ? { ...e, error: () => e.error } : e);
}
function yos(t) {
  let e;
  return new Proxy(
    {},
    {
      get(r, n, o) {
        return (e ?? (e = t()), Reflect.get(e, n, o));
      },
      set(r, n, o, s) {
        return (e ?? (e = t()), Reflect.set(e, n, o, s));
      },
      has(r, n) {
        return (e ?? (e = t()), Reflect.has(e, n));
      },
      deleteProperty(r, n) {
        return (e ?? (e = t()), Reflect.deleteProperty(e, n));
      },
      ownKeys(r) {
        return (e ?? (e = t()), Reflect.ownKeys(e));
      },
      getOwnPropertyDescriptor(r, n) {
        return (e ?? (e = t()), Reflect.getOwnPropertyDescriptor(e, n));
      },
      defineProperty(r, n, o) {
        return (e ?? (e = t()), Reflect.defineProperty(e, n, o));
      },
    },
  );
}
function Zr(t) {
  return typeof t == "bigint" ? t.toString() + "n" : typeof t == "string" ? `"${t}"` : `${t}`;
}
function pNt(t) {
  return Object.keys(t).filter((e) => t[e]._zod.optin === "optional" && t[e]._zod.optout === "optional");
}
function C0n(t, e) {
  let r = t._zod.def,
    n = r.checks;
  if (n && n.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
  let s = ok(t._zod.def, {
    get shape() {
      let a = {};
      for (let u in e) {
        if (!(u in r.shape)) throw new Error(`Unrecognized key: "${u}"`);
        e[u] && (a[u] = r.shape[u]);
      }
      return (JL(this, "shape", a), a);
    },
    checks: [],
  });
  return og(t, s);
}
function S0n(t, e) {
  let r = t._zod.def,
    n = r.checks;
  if (n && n.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
  let s = ok(t._zod.def, {
    get shape() {
      let a = { ...t._zod.def.shape };
      for (let u in e) {
        if (!(u in r.shape)) throw new Error(`Unrecognized key: "${u}"`);
        e[u] && delete a[u];
      }
      return (JL(this, "shape", a), a);
    },
    checks: [],
  });
  return og(t, s);
}
function w0n(t, e) {
  if (!XL(e)) throw new Error("Invalid input to extend: expected a plain object");
  let r = t._zod.def.checks;
  if (r && r.length > 0) {
    let s = t._zod.def.shape;
    for (let a in e)
      if (Object.getOwnPropertyDescriptor(s, a) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  let o = ok(t._zod.def, {
    get shape() {
      let s = { ...t._zod.def.shape, ...e };
      return (JL(this, "shape", s), s);
    },
  });
  return og(t, o);
}
function x0n(t, e) {
  if (!XL(e)) throw new Error("Invalid input to safeExtend: expected a plain object");
  let r = ok(t._zod.def, {
    get shape() {
      let n = { ...t._zod.def.shape, ...e };
      return (JL(this, "shape", n), n);
    },
  });
  return og(t, r);
}
function _os(t, e) {
  let r = ok(t._zod.def, {
    get shape() {
      let n = { ...t._zod.def.shape, ...e._zod.def.shape };
      return (JL(this, "shape", n), n);
    },
    get catchall() {
      return e._zod.def.catchall;
    },
    checks: [],
  });
  return og(t, r);
}
function T0n(t, e, r) {
  let o = e._zod.def.checks;
  if (o && o.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
  let a = ok(e._zod.def, {
    get shape() {
      let u = e._zod.def.shape,
        c = { ...u };
      if (r)
        for (let m in r) {
          if (!(m in u)) throw new Error(`Unrecognized key: "${m}"`);
          r[m] && (c[m] = t ? new t({ type: "optional", innerType: u[m] }) : u[m]);
        }
      else for (let m in u) c[m] = t ? new t({ type: "optional", innerType: u[m] }) : u[m];
      return (JL(this, "shape", c), c);
    },
    checks: [],
  });
  return og(e, a);
}
function D0n(t, e, r) {
  let n = ok(e._zod.def, {
    get shape() {
      let o = e._zod.def.shape,
        s = { ...o };
      if (r)
        for (let a in r) {
          if (!(a in s)) throw new Error(`Unrecognized key: "${a}"`);
          r[a] && (s[a] = new t({ type: "nonoptional", innerType: o[a] }));
        }
      else for (let a in o) s[a] = new t({ type: "nonoptional", innerType: o[a] });
      return (JL(this, "shape", s), s);
    },
  });
  return og(e, n);
}
function ZL(t, e = 0) {
  if (t.aborted === !0) return !0;
  for (let r = e; r < t.issues.length; r++) if (t.issues[r]?.continue !== !0) return !0;
  return !1;
}
function E6(t, e) {
  return e.map((r) => {
    var n;
    return ((n = r).path ?? (n.path = []), r.path.unshift(t), r);
  });
}
function k2e(t) {
  return typeof t == "string" ? t : t?.message;
}
function b8(t, e, r) {
  let n = { ...t, path: t.path ?? [] };
  if (!t.message) {
    let o =
      k2e(t.inst?._zod.def?.error?.(t)) ??
      k2e(e?.error?.(t)) ??
      k2e(r.customError?.(t)) ??
      k2e(r.localeError?.(t)) ??
      "Invalid input";
    n.message = o;
  }
  return (delete n.inst, delete n.continue, e?.reportInput || delete n.input, n);
}
function B2e(t) {
  return t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof File ? "file" : "unknown";
}
function L2e(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function on(t) {
  let e = typeof t;
  switch (e) {
    case "number":
      return Number.isNaN(t) ? "nan" : "number";
    case "object": {
      if (t === null) return "null";
      if (Array.isArray(t)) return "array";
      let r = t;
      if (r && Object.getPrototypeOf(r) !== Object.prototype && "constructor" in r && r.constructor)
        return r.constructor.name;
    }
  }
  return e;
}
function Kie(...t) {
  let [e, r, n] = t;
  return typeof e == "string" ? { message: e, code: "custom", input: r, inst: n } : { ...e };
}
function Eos(t) {
  return Object.entries(t)
    .filter(([e, r]) => Number.isNaN(Number.parseInt(e, 10)))
    .map((e) => e[1]);
}
function I0n(t) {
  let e = atob(t),
    r = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) r[n] = e.charCodeAt(n);
  return r;
}
function R0n(t) {
  let e = "";
  for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
  return btoa(e);
}
function vos(t) {
  let e = t.replace(/-/g, "+").replace(/_/g, "/"),
    r = "=".repeat((4 - (e.length % 4)) % 4);
  return I0n(e + r);
}
function Cos(t) {
  return R0n(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function Sos(t) {
  let e = t.replace(/^0x/, "");
  if (e.length % 2 !== 0) throw new Error("Invalid hex string length");
  let r = new Uint8Array(e.length / 2);
  for (let n = 0; n < e.length; n += 2) r[n / 2] = Number.parseInt(e.slice(n, n + 2), 16);
  return r;
}
function wos(t) {
  return Array.from(t)
    .map((e) => e.toString(16).padStart(2, "0"))
    .join("");
}
var v0n,
  Yqe,
  dNt,
  Aos,
  P2e,
  fNt,
  hNt,
  gNt,
  cNt,
  Yi = j(() => {
    v0n = Symbol("evaluating");
    Yqe = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {};
    dNt = Yie(() => {
      if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
      try {
        let t = Function;
        return (new t(""), !0);
      } catch {
        return !1;
      }
    });
    ((Aos = (t) => {
      let e = typeof t;
      switch (e) {
        case "undefined":
          return "undefined";
        case "string":
          return "string";
        case "number":
          return Number.isNaN(t) ? "nan" : "number";
        case "boolean":
          return "boolean";
        case "function":
          return "function";
        case "bigint":
          return "bigint";
        case "symbol":
          return "symbol";
        case "object":
          return Array.isArray(t)
            ? "array"
            : t === null
              ? "null"
              : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function"
                ? "promise"
                : typeof Map < "u" && t instanceof Map
                  ? "map"
                  : typeof Set < "u" && t instanceof Set
                    ? "set"
                    : typeof Date < "u" && t instanceof Date
                      ? "date"
                      : typeof File < "u" && t instanceof File
                        ? "file"
                        : "object";
        default:
          throw new Error(`Unknown data type: ${e}`);
      }
    }),
      (P2e = new Set(["string", "number", "symbol"])),
      (fNt = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"])));
    ((hNt = {
      safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
      int32: [-2147483648, 2147483647],
      uint32: [0, 4294967295],
      float32: [-34028234663852886e22, 34028234663852886e22],
      float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
    }),
      (gNt = {
        int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
        uint64: [BigInt(0), BigInt("18446744073709551615")],
      }));
    cNt = class {
      constructor(...e) {}
    };
  });
function Jie(t, e = (r) => r.message) {
  let r = {},
    n = [];
  for (let o of t.issues)
    o.path.length > 0 ? ((r[o.path[0]] = r[o.path[0]] || []), r[o.path[0]].push(e(o))) : n.push(e(o));
  return { formErrors: n, fieldErrors: r };
}
function Xie(t, e = (r) => r.message) {
  let r = { _errors: [] },
    n = (o) => {
      for (let s of o.issues)
        if (s.code === "invalid_union" && s.errors.length) s.errors.map((a) => n({ issues: a }));
        else if (s.code === "invalid_key") n({ issues: s.issues });
        else if (s.code === "invalid_element") n({ issues: s.issues });
        else if (s.path.length === 0) r._errors.push(e(s));
        else {
          let a = r,
            u = 0;
          for (; u < s.path.length; ) {
            let c = s.path[u];
            (u === s.path.length - 1
              ? ((a[c] = a[c] || { _errors: [] }), a[c]._errors.push(e(s)))
              : (a[c] = a[c] || { _errors: [] }),
              (a = a[c]),
              u++);
          }
        }
    };
  return (n(t), r);
}
function Jqe(t, e = (r) => r.message) {
  let r = { errors: [] },
    n = (o, s = []) => {
      var a, u;
      for (let c of o.issues)
        if (c.code === "invalid_union" && c.errors.length) c.errors.map((m) => n({ issues: m }, c.path));
        else if (c.code === "invalid_key") n({ issues: c.issues }, c.path);
        else if (c.code === "invalid_element") n({ issues: c.issues }, c.path);
        else {
          let m = [...s, ...c.path];
          if (m.length === 0) {
            r.errors.push(e(c));
            continue;
          }
          let d = r,
            f = 0;
          for (; f < m.length; ) {
            let p = m[f],
              h = f === m.length - 1;
            (typeof p == "string"
              ? (d.properties ?? (d.properties = {}),
                (a = d.properties)[p] ?? (a[p] = { errors: [] }),
                (d = d.properties[p]))
              : (d.items ?? (d.items = []), (u = d.items)[p] ?? (u[p] = { errors: [] }), (d = d.items[p])),
              h && d.errors.push(e(c)),
              f++);
          }
        }
    };
  return (n(t), r);
}
function O0n(t) {
  let e = [],
    r = t.map((n) => (typeof n == "object" ? n.key : n));
  for (let n of r)
    typeof n == "number"
      ? e.push(`[${n}]`)
      : typeof n == "symbol"
        ? e.push(`[${JSON.stringify(String(n))}]`)
        : /[^\w$]/.test(n)
          ? e.push(`[${JSON.stringify(n)}]`)
          : (e.length && e.push("."), e.push(n));
  return e.join("");
}
function Xqe(t) {
  let e = [],
    r = [...t.issues].sort((n, o) => (n.path ?? []).length - (o.path ?? []).length);
  for (let n of r) (e.push(`\u2716 ${n.message}`), n.path?.length && e.push(`  \u2192 at ${O0n(n.path)}`));
  return e.join(`
`);
}
var k0n,
  M2e,
  A8,
  bNt = j(() => {
    Wie();
    Yi();
    ((k0n = (t, e) => {
      ((t.name = "$ZodError"),
        Object.defineProperty(t, "_zod", { value: t._zod, enumerable: !1 }),
        Object.defineProperty(t, "issues", { value: e, enumerable: !1 }),
        (t.message = JSON.stringify(e, zie, 2)),
        Object.defineProperty(t, "toString", { value: () => t.message, enumerable: !1 }));
    }),
      (M2e = Mt("$ZodError", k0n)),
      (A8 = Mt("$ZodError", k0n, { Parent: Error })));
  });
var Zie,
  eoe,
  toe,
  roe,
  noe,
  _H,
  ioe,
  ooe,
  Zqe,
  N0n,
  eHe,
  P0n,
  tHe,
  B0n,
  rHe,
  L0n,
  nHe,
  M0n,
  iHe,
  F0n,
  oHe,
  U0n,
  sHe,
  $0n,
  ANt = j(() => {
    Wie();
    bNt();
    Yi();
    ((Zie = (t) => (e, r, n, o) => {
      let s = n ? Object.assign(n, { async: !1 }) : { async: !1 },
        a = e._zod.run({ value: r, issues: [] }, s);
      if (a instanceof Promise) throw new C4();
      if (a.issues.length) {
        let u = new (o?.Err ?? t)(a.issues.map((c) => b8(c, s, Od())));
        throw (Yqe(u, o?.callee), u);
      }
      return a.value;
    }),
      (eoe = Zie(A8)),
      (toe = (t) => async (e, r, n, o) => {
        let s = n ? Object.assign(n, { async: !0 }) : { async: !0 },
          a = e._zod.run({ value: r, issues: [] }, s);
        if ((a instanceof Promise && (a = await a), a.issues.length)) {
          let u = new (o?.Err ?? t)(a.issues.map((c) => b8(c, s, Od())));
          throw (Yqe(u, o?.callee), u);
        }
        return a.value;
      }),
      (roe = toe(A8)),
      (noe = (t) => (e, r, n) => {
        let o = n ? { ...n, async: !1 } : { async: !1 },
          s = e._zod.run({ value: r, issues: [] }, o);
        if (s instanceof Promise) throw new C4();
        return s.issues.length
          ? { success: !1, error: new (t ?? M2e)(s.issues.map((a) => b8(a, o, Od()))) }
          : { success: !0, data: s.value };
      }),
      (_H = noe(A8)),
      (ioe = (t) => async (e, r, n) => {
        let o = n ? Object.assign(n, { async: !0 }) : { async: !0 },
          s = e._zod.run({ value: r, issues: [] }, o);
        return (
          s instanceof Promise && (s = await s),
          s.issues.length
            ? { success: !1, error: new t(s.issues.map((a) => b8(a, o, Od()))) }
            : { success: !0, data: s.value }
        );
      }),
      (ooe = ioe(A8)),
      (Zqe = (t) => (e, r, n) => {
        let o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
        return Zie(t)(e, r, o);
      }),
      (N0n = Zqe(A8)),
      (eHe = (t) => (e, r, n) => Zie(t)(e, r, n)),
      (P0n = eHe(A8)),
      (tHe = (t) => async (e, r, n) => {
        let o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
        return toe(t)(e, r, o);
      }),
      (B0n = tHe(A8)),
      (rHe = (t) => async (e, r, n) => toe(t)(e, r, n)),
      (L0n = rHe(A8)),
      (nHe = (t) => (e, r, n) => {
        let o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
        return noe(t)(e, r, o);
      }),
      (M0n = nHe(A8)),
      (iHe = (t) => (e, r, n) => noe(t)(e, r, n)),
      (F0n = iHe(A8)),
      (oHe = (t) => async (e, r, n) => {
        let o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
        return ioe(t)(e, r, o);
      }),
      (U0n = oHe(A8)),
      (sHe = (t) => async (e, r, n) => ioe(t)(e, r, n)),
      ($0n = sHe(A8)));
  });
var y8 = {};
Wi(y8, {
  base64: () => PNt,
  base64url: () => aHe,
  bigint: () => $Nt,
  boolean: () => QNt,
  browserEmail: () => Pos,
  cidrv4: () => ONt,
  cidrv6: () => NNt,
  cuid: () => yNt,
  cuid2: () => _Nt,
  date: () => LNt,
  datetime: () => FNt,
  domain: () => Mos,
  duration: () => wNt,
  e164: () => BNt,
  email: () => TNt,
  emoji: () => DNt,
  extendedDuration: () => Tos,
  guid: () => xNt,
  hex: () => Fos,
  hostname: () => Los,
  html5Email: () => kos,
  idnEmail: () => Nos,
  integer: () => jNt,
  ipv4: () => INt,
  ipv6: () => RNt,
  ksuid: () => CNt,
  lowercase: () => HNt,
  mac: () => kNt,
  md5_base64: () => $os,
  md5_base64url: () => jos,
  md5_hex: () => Uos,
  nanoid: () => SNt,
  null: () => GNt,
  number: () => uHe,
  rfc5322Email: () => Oos,
  sha1_base64: () => Gos,
  sha1_base64url: () => qos,
  sha1_hex: () => Qos,
  sha256_base64: () => Vos,
  sha256_base64url: () => Wos,
  sha256_hex: () => Hos,
  sha384_base64: () => Yos,
  sha384_base64url: () => Kos,
  sha384_hex: () => zos,
  sha512_base64: () => Xos,
  sha512_base64url: () => Zos,
  sha512_hex: () => Jos,
  string: () => UNt,
  time: () => MNt,
  ulid: () => ENt,
  undefined: () => qNt,
  unicodeEmail: () => j0n,
  uppercase: () => VNt,
  uuid: () => EH,
  uuid4: () => Dos,
  uuid6: () => Ios,
  uuid7: () => Ros,
  xid: () => vNt,
});
function DNt() {
  return new RegExp(Bos, "u");
}
function G0n(t) {
  let e = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number"
    ? t.precision === -1
      ? `${e}`
      : t.precision === 0
        ? `${e}:[0-5]\\d`
        : `${e}:[0-5]\\d\\.\\d{${t.precision}}`
    : `${e}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function MNt(t) {
  return new RegExp(`^${G0n(t)}$`);
}
function FNt(t) {
  let e = G0n({ precision: t.precision }),
    r = ["Z"];
  (t.local && r.push(""), t.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)"));
  let n = `${e}(?:${r.join("|")})`;
  return new RegExp(`^${Q0n}T(?:${n})$`);
}
function F2e(t, e) {
  return new RegExp(`^[A-Za-z0-9+/]{${t}}${e}$`);
}
function U2e(t) {
  return new RegExp(`^[A-Za-z0-9_-]{${t}}$`);
}
var yNt,
  _Nt,
  ENt,
  vNt,
  CNt,
  SNt,
  wNt,
  Tos,
  xNt,
  EH,
  Dos,
  Ios,
  Ros,
  TNt,
  kos,
  Oos,
  j0n,
  Nos,
  Pos,
  Bos,
  INt,
  RNt,
  kNt,
  ONt,
  NNt,
  PNt,
  aHe,
  Los,
  Mos,
  BNt,
  Q0n,
  LNt,
  UNt,
  $Nt,
  jNt,
  uHe,
  QNt,
  GNt,
  qNt,
  HNt,
  VNt,
  Fos,
  Uos,
  $os,
  jos,
  Qos,
  Gos,
  qos,
  Hos,
  Vos,
  Wos,
  zos,
  Yos,
  Kos,
  Jos,
  Xos,
  Zos,
  cHe = j(() => {
    Yi();
    ((yNt = /^[cC][^\s-]{8,}$/),
      (_Nt = /^[0-9a-z]+$/),
      (ENt = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/),
      (vNt = /^[0-9a-vA-V]{20}$/),
      (CNt = /^[A-Za-z0-9]{27}$/),
      (SNt = /^[a-zA-Z0-9_-]{21}$/),
      (wNt = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/),
      (Tos =
        /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/),
      (xNt = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/),
      (EH = (t) =>
        t
          ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)
          : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/),
      (Dos = EH(4)),
      (Ios = EH(6)),
      (Ros = EH(7)),
      (TNt = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/),
      (kos =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/),
      (Oos =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
      (j0n = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u),
      (Nos = j0n),
      (Pos =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/),
      (Bos = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$"));
    ((INt =
      /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/),
      (RNt =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/),
      (kNt = (t) => {
        let e = iE(t ?? ":");
        return new RegExp(`^(?:[0-9A-F]{2}${e}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${e}){5}[0-9a-f]{2}$`);
      }),
      (ONt =
        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/),
      (NNt =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/),
      (PNt = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/),
      (aHe = /^[A-Za-z0-9_-]*$/),
      (Los =
        /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/),
      (Mos = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/),
      (BNt = /^\+[1-9]\d{6,14}$/),
      (Q0n =
        "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))"),
      (LNt = new RegExp(`^${Q0n}$`)));
    ((UNt = (t) => {
      let e = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
      return new RegExp(`^${e}$`);
    }),
      ($Nt = /^-?\d+n?$/),
      (jNt = /^-?\d+$/),
      (uHe = /^-?\d+(?:\.\d+)?$/),
      (QNt = /^(?:true|false)$/i),
      (GNt = /^null$/i),
      (qNt = /^undefined$/i),
      (HNt = /^[^A-Z]*$/),
      (VNt = /^[^a-z]*$/),
      (Fos = /^[0-9a-fA-F]*$/));
    ((Uos = /^[0-9a-fA-F]{32}$/),
      ($os = F2e(22, "==")),
      (jos = U2e(22)),
      (Qos = /^[0-9a-fA-F]{40}$/),
      (Gos = F2e(27, "=")),
      (qos = U2e(27)),
      (Hos = /^[0-9a-fA-F]{64}$/),
      (Vos = F2e(43, "=")),
      (Wos = U2e(43)),
      (zos = /^[0-9a-fA-F]{96}$/),
      (Yos = F2e(64, "")),
      (Kos = U2e(64)),
      (Jos = /^[0-9a-fA-F]{128}$/),
      (Xos = F2e(86, "==")),
      (Zos = U2e(86)));
  });
function q0n(t, e, r) {
  t.issues.length && e.issues.push(...E6(r, t.issues));
}
var zl,
  H0n,
  lHe,
  mHe,
  WNt,
  zNt,
  YNt,
  KNt,
  JNt,
  XNt,
  ZNt,
  ePt,
  tPt,
  soe,
  rPt,
  nPt,
  iPt,
  oPt,
  sPt,
  aPt,
  uPt,
  cPt,
  lPt,
  dHe = j(() => {
    Wie();
    cHe();
    Yi();
    ((zl = Mt("$ZodCheck", (t, e) => {
      var r;
      (t._zod ?? (t._zod = {}), (t._zod.def = e), (r = t._zod).onattach ?? (r.onattach = []));
    })),
      (H0n = { number: "number", bigint: "bigint", object: "date" }),
      (lHe = Mt("$ZodCheckLessThan", (t, e) => {
        zl.init(t, e);
        let r = H0n[typeof e.value];
        (t._zod.onattach.push((n) => {
          let o = n._zod.bag,
            s = (e.inclusive ? o.maximum : o.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
          e.value < s && (e.inclusive ? (o.maximum = e.value) : (o.exclusiveMaximum = e.value));
        }),
          (t._zod.check = (n) => {
            (e.inclusive ? n.value <= e.value : n.value < e.value) ||
              n.issues.push({
                origin: r,
                code: "too_big",
                maximum: typeof e.value == "object" ? e.value.getTime() : e.value,
                input: n.value,
                inclusive: e.inclusive,
                inst: t,
                continue: !e.abort,
              });
          }));
      })),
      (mHe = Mt("$ZodCheckGreaterThan", (t, e) => {
        zl.init(t, e);
        let r = H0n[typeof e.value];
        (t._zod.onattach.push((n) => {
          let o = n._zod.bag,
            s = (e.inclusive ? o.minimum : o.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
          e.value > s && (e.inclusive ? (o.minimum = e.value) : (o.exclusiveMinimum = e.value));
        }),
          (t._zod.check = (n) => {
            (e.inclusive ? n.value >= e.value : n.value > e.value) ||
              n.issues.push({
                origin: r,
                code: "too_small",
                minimum: typeof e.value == "object" ? e.value.getTime() : e.value,
                input: n.value,
                inclusive: e.inclusive,
                inst: t,
                continue: !e.abort,
              });
          }));
      })),
      (WNt = Mt("$ZodCheckMultipleOf", (t, e) => {
        (zl.init(t, e),
          t._zod.onattach.push((r) => {
            var n;
            (n = r._zod.bag).multipleOf ?? (n.multipleOf = e.value);
          }),
          (t._zod.check = (r) => {
            if (typeof r.value != typeof e.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
            (typeof r.value == "bigint" ? r.value % e.value === BigInt(0) : lNt(r.value, e.value) === 0) ||
              r.issues.push({
                origin: typeof r.value,
                code: "not_multiple_of",
                divisor: e.value,
                input: r.value,
                inst: t,
                continue: !e.abort,
              });
          }));
      })),
      (zNt = Mt("$ZodCheckNumberFormat", (t, e) => {
        (zl.init(t, e), (e.format = e.format || "float64"));
        let r = e.format?.includes("int"),
          n = r ? "int" : "number",
          [o, s] = hNt[e.format];
        (t._zod.onattach.push((a) => {
          let u = a._zod.bag;
          ((u.format = e.format), (u.minimum = o), (u.maximum = s), r && (u.pattern = jNt));
        }),
          (t._zod.check = (a) => {
            let u = a.value;
            if (r) {
              if (!Number.isInteger(u)) {
                a.issues.push({ expected: n, format: e.format, code: "invalid_type", continue: !1, input: u, inst: t });
                return;
              }
              if (!Number.isSafeInteger(u)) {
                u > 0
                  ? a.issues.push({
                      input: u,
                      code: "too_big",
                      maximum: Number.MAX_SAFE_INTEGER,
                      note: "Integers must be within the safe integer range.",
                      inst: t,
                      origin: n,
                      inclusive: !0,
                      continue: !e.abort,
                    })
                  : a.issues.push({
                      input: u,
                      code: "too_small",
                      minimum: Number.MIN_SAFE_INTEGER,
                      note: "Integers must be within the safe integer range.",
                      inst: t,
                      origin: n,
                      inclusive: !0,
                      continue: !e.abort,
                    });
                return;
              }
            }
            (u < o &&
              a.issues.push({
                origin: "number",
                input: u,
                code: "too_small",
                minimum: o,
                inclusive: !0,
                inst: t,
                continue: !e.abort,
              }),
              u > s &&
                a.issues.push({
                  origin: "number",
                  input: u,
                  code: "too_big",
                  maximum: s,
                  inclusive: !0,
                  inst: t,
                  continue: !e.abort,
                }));
          }));
      })),
      (YNt = Mt("$ZodCheckBigIntFormat", (t, e) => {
        zl.init(t, e);
        let [r, n] = gNt[e.format];
        (t._zod.onattach.push((o) => {
          let s = o._zod.bag;
          ((s.format = e.format), (s.minimum = r), (s.maximum = n));
        }),
          (t._zod.check = (o) => {
            let s = o.value;
            (s < r &&
              o.issues.push({
                origin: "bigint",
                input: s,
                code: "too_small",
                minimum: r,
                inclusive: !0,
                inst: t,
                continue: !e.abort,
              }),
              s > n &&
                o.issues.push({
                  origin: "bigint",
                  input: s,
                  code: "too_big",
                  maximum: n,
                  inclusive: !0,
                  inst: t,
                  continue: !e.abort,
                }));
          }));
      })),
      (KNt = Mt("$ZodCheckMaxSize", (t, e) => {
        var r;
        (zl.init(t, e),
          (r = t._zod.def).when ??
            (r.when = (n) => {
              let o = n.value;
              return !KL(o) && o.size !== void 0;
            }),
          t._zod.onattach.push((n) => {
            let o = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
            e.maximum < o && (n._zod.bag.maximum = e.maximum);
          }),
          (t._zod.check = (n) => {
            let o = n.value;
            o.size <= e.maximum ||
              n.issues.push({
                origin: B2e(o),
                code: "too_big",
                maximum: e.maximum,
                inclusive: !0,
                input: o,
                inst: t,
                continue: !e.abort,
              });
          }));
      })),
      (JNt = Mt("$ZodCheckMinSize", (t, e) => {
        var r;
        (zl.init(t, e),
          (r = t._zod.def).when ??
            (r.when = (n) => {
              let o = n.value;
              return !KL(o) && o.size !== void 0;
            }),
          t._zod.onattach.push((n) => {
            let o = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
            e.minimum > o && (n._zod.bag.minimum = e.minimum);
          }),
          (t._zod.check = (n) => {
            let o = n.value;
            o.size >= e.minimum ||
              n.issues.push({
                origin: B2e(o),
                code: "too_small",
                minimum: e.minimum,
                inclusive: !0,
                input: o,
                inst: t,
                continue: !e.abort,
              });
          }));
      })),
      (XNt = Mt("$ZodCheckSizeEquals", (t, e) => {
        var r;
        (zl.init(t, e),
          (r = t._zod.def).when ??
            (r.when = (n) => {
              let o = n.value;
              return !KL(o) && o.size !== void 0;
            }),
          t._zod.onattach.push((n) => {
            let o = n._zod.bag;
            ((o.minimum = e.size), (o.maximum = e.size), (o.size = e.size));
          }),
          (t._zod.check = (n) => {
            let o = n.value,
              s = o.size;
            if (s === e.size) return;
            let a = s > e.size;
            n.issues.push({
              origin: B2e(o),
              ...(a ? { code: "too_big", maximum: e.size } : { code: "too_small", minimum: e.size }),
              inclusive: !0,
              exact: !0,
              input: n.value,
              inst: t,
              continue: !e.abort,
            });
          }));
      })),
      (ZNt = Mt("$ZodCheckMaxLength", (t, e) => {
        var r;
        (zl.init(t, e),
          (r = t._zod.def).when ??
            (r.when = (n) => {
              let o = n.value;
              return !KL(o) && o.length !== void 0;
            }),
          t._zod.onattach.push((n) => {
            let o = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
            e.maximum < o && (n._zod.bag.maximum = e.maximum);
          }),
          (t._zod.check = (n) => {
            let o = n.value;
            if (o.length <= e.maximum) return;
            let a = L2e(o);
            n.issues.push({
              origin: a,
              code: "too_big",
              maximum: e.maximum,
              inclusive: !0,
              input: o,
              inst: t,
              continue: !e.abort,
            });
          }));
      })),
      (ePt = Mt("$ZodCheckMinLength", (t, e) => {
        var r;
        (zl.init(t, e),
          (r = t._zod.def).when ??
            (r.when = (n) => {
              let o = n.value;
              return !KL(o) && o.length !== void 0;
            }),
          t._zod.onattach.push((n) => {
            let o = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
            e.minimum > o && (n._zod.bag.minimum = e.minimum);
          }),
          (t._zod.check = (n) => {
            let o = n.value;
            if (o.length >= e.minimum) return;
            let a = L2e(o);
            n.issues.push({
              origin: a,
              code: "too_small",
              minimum: e.minimum,
              inclusive: !0,
              input: o,
              inst: t,
              continue: !e.abort,
            });
          }));
      })),
      (tPt = Mt("$ZodCheckLengthEquals", (t, e) => {
        var r;
        (zl.init(t, e),
          (r = t._zod.def).when ??
            (r.when = (n) => {
              let o = n.value;
              return !KL(o) && o.length !== void 0;
            }),
          t._zod.onattach.push((n) => {
            let o = n._zod.bag;
            ((o.minimum = e.length), (o.maximum = e.length), (o.length = e.length));
          }),
          (t._zod.check = (n) => {
            let o = n.value,
              s = o.length;
            if (s === e.length) return;
            let a = L2e(o),
              u = s > e.length;
            n.issues.push({
              origin: a,
              ...(u ? { code: "too_big", maximum: e.length } : { code: "too_small", minimum: e.length }),
              inclusive: !0,
              exact: !0,
              input: n.value,
              inst: t,
              continue: !e.abort,
            });
          }));
      })),
      (soe = Mt("$ZodCheckStringFormat", (t, e) => {
        var r, n;
        (zl.init(t, e),
          t._zod.onattach.push((o) => {
            let s = o._zod.bag;
            ((s.format = e.format), e.pattern && (s.patterns ?? (s.patterns = new Set()), s.patterns.add(e.pattern)));
          }),
          e.pattern
            ? ((r = t._zod).check ??
              (r.check = (o) => {
                ((e.pattern.lastIndex = 0),
                  !e.pattern.test(o.value) &&
                    o.issues.push({
                      origin: "string",
                      code: "invalid_format",
                      format: e.format,
                      input: o.value,
                      ...(e.pattern ? { pattern: e.pattern.toString() } : {}),
                      inst: t,
                      continue: !e.abort,
                    }));
              }))
            : ((n = t._zod).check ?? (n.check = () => {})));
      })),
      (rPt = Mt("$ZodCheckRegex", (t, e) => {
        (soe.init(t, e),
          (t._zod.check = (r) => {
            ((e.pattern.lastIndex = 0),
              !e.pattern.test(r.value) &&
                r.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "regex",
                  input: r.value,
                  pattern: e.pattern.toString(),
                  inst: t,
                  continue: !e.abort,
                }));
          }));
      })),
      (nPt = Mt("$ZodCheckLowerCase", (t, e) => {
        (e.pattern ?? (e.pattern = HNt), soe.init(t, e));
      })),
      (iPt = Mt("$ZodCheckUpperCase", (t, e) => {
        (e.pattern ?? (e.pattern = VNt), soe.init(t, e));
      })),
      (oPt = Mt("$ZodCheckIncludes", (t, e) => {
        zl.init(t, e);
        let r = iE(e.includes),
          n = new RegExp(typeof e.position == "number" ? `^.{${e.position}}${r}` : r);
        ((e.pattern = n),
          t._zod.onattach.push((o) => {
            let s = o._zod.bag;
            (s.patterns ?? (s.patterns = new Set()), s.patterns.add(n));
          }),
          (t._zod.check = (o) => {
            o.value.includes(e.includes, e.position) ||
              o.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "includes",
                includes: e.includes,
                input: o.value,
                inst: t,
                continue: !e.abort,
              });
          }));
      })),
      (sPt = Mt("$ZodCheckStartsWith", (t, e) => {
        zl.init(t, e);
        let r = new RegExp(`^${iE(e.prefix)}.*`);
        (e.pattern ?? (e.pattern = r),
          t._zod.onattach.push((n) => {
            let o = n._zod.bag;
            (o.patterns ?? (o.patterns = new Set()), o.patterns.add(r));
          }),
          (t._zod.check = (n) => {
            n.value.startsWith(e.prefix) ||
              n.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "starts_with",
                prefix: e.prefix,
                input: n.value,
                inst: t,
                continue: !e.abort,
              });
          }));
      })),
      (aPt = Mt("$ZodCheckEndsWith", (t, e) => {
        zl.init(t, e);
        let r = new RegExp(`.*${iE(e.suffix)}$`);
        (e.pattern ?? (e.pattern = r),
          t._zod.onattach.push((n) => {
            let o = n._zod.bag;
            (o.patterns ?? (o.patterns = new Set()), o.patterns.add(r));
          }),
          (t._zod.check = (n) => {
            n.value.endsWith(e.suffix) ||
              n.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "ends_with",
                suffix: e.suffix,
                input: n.value,
                inst: t,
                continue: !e.abort,
              });
          }));
      })));
    ((uPt = Mt("$ZodCheckProperty", (t, e) => {
      (zl.init(t, e),
        (t._zod.check = (r) => {
          let n = e.schema._zod.run({ value: r.value[e.property], issues: [] }, {});
          if (n instanceof Promise) return n.then((o) => q0n(o, r, e.property));
          q0n(n, r, e.property);
        }));
    })),
      (cPt = Mt("$ZodCheckMimeType", (t, e) => {
        zl.init(t, e);
        let r = new Set(e.mime);
        (t._zod.onattach.push((n) => {
          n._zod.bag.mime = e.mime;
        }),
          (t._zod.check = (n) => {
            r.has(n.value.type) ||
              n.issues.push({
                code: "invalid_value",
                values: e.mime,
                input: n.value.type,
                inst: t,
                continue: !e.abort,
              });
          }));
      })),
      (lPt = Mt("$ZodCheckOverwrite", (t, e) => {
        (zl.init(t, e),
          (t._zod.check = (r) => {
            r.value = e.tx(r.value);
          }));
      })));
  });
var $2e,
  mPt = j(() => {
    $2e = class {
      constructor(e = []) {
        ((this.content = []), (this.indent = 0), this && (this.args = e));
      }
      indented(e) {
        ((this.indent += 1), e(this), (this.indent -= 1));
      }
      write(e) {
        if (typeof e == "function") {
          (e(this, { execution: "sync" }), e(this, { execution: "async" }));
          return;
        }
        let n = e
            .split(
              `
`,
            )
            .filter((a) => a),
          o = Math.min(...n.map((a) => a.length - a.trimStart().length)),
          s = n.map((a) => a.slice(o)).map((a) => " ".repeat(this.indent * 2) + a);
        for (let a of s) this.content.push(a);
      }
      compile() {
        let e = Function,
          r = this?.args,
          o = [...(this?.content ?? [""]).map((s) => `  ${s}`)];
        return new e(
          ...r,
          o.join(`
`),
        );
      }
    };
  });
var dPt,
  fPt = j(() => {
    dPt = { major: 4, minor: 3, patch: 5 };
  });
function hPt(t) {
  if (t === "") return !0;
  if (t.length % 4 !== 0) return !1;
  try {
    return (atob(t), !0);
  } catch {
    return !1;
  }
}
function imn(t) {
  if (!aHe.test(t)) return !1;
  let e = t.replace(/[-_]/g, (n) => (n === "-" ? "+" : "/")),
    r = e.padEnd(Math.ceil(e.length / 4) * 4, "=");
  return hPt(r);
}
function omn(t, e = null) {
  try {
    let r = t.split(".");
    if (r.length !== 3) return !1;
    let [n] = r;
    if (!n) return !1;
    let o = JSON.parse(atob(n));
    return !(("typ" in o && o?.typ !== "JWT") || !o.alg || (e && (!("alg" in o) || o.alg !== e)));
  } catch {
    return !1;
  }
}
function W0n(t, e, r) {
  (t.issues.length && e.issues.push(...E6(r, t.issues)), (e.value[r] = t.value));
}
function bHe(t, e, r, n, o) {
  if (t.issues.length) {
    if (o && !(r in n)) return;
    e.issues.push(...E6(r, t.issues));
  }
  t.value === void 0 ? r in n && (e.value[r] = void 0) : (e.value[r] = t.value);
}
function smn(t) {
  let e = Object.keys(t.shape);
  for (let n of e)
    if (!t.shape?.[n]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${n}": expected a Zod schema`);
  let r = pNt(t.shape);
  return { ...t, keys: e, keySet: new Set(e), numKeys: e.length, optionalKeys: new Set(r) };
}
function amn(t, e, r, n, o, s) {
  let a = [],
    u = o.keySet,
    c = o.catchall._zod,
    m = c.def.type,
    d = c.optout === "optional";
  for (let f in e) {
    if (u.has(f)) continue;
    if (m === "never") {
      a.push(f);
      continue;
    }
    let p = c.run({ value: e[f], issues: [] }, n);
    p instanceof Promise ? t.push(p.then((h) => bHe(h, r, f, e, d))) : bHe(p, r, f, e, d);
  }
  return (
    a.length && r.issues.push({ code: "unrecognized_keys", keys: a, input: e, inst: s }),
    t.length ? Promise.all(t).then(() => r) : r
  );
}
function z0n(t, e, r, n) {
  for (let s of t) if (s.issues.length === 0) return ((e.value = s.value), e);
  let o = t.filter((s) => !ZL(s));
  return o.length === 1
    ? ((e.value = o[0].value), o[0])
    : (e.issues.push({
        code: "invalid_union",
        input: e.value,
        inst: r,
        errors: t.map((s) => s.issues.map((a) => b8(a, n, Od()))),
      }),
      e);
}
function Y0n(t, e, r, n) {
  let o = t.filter((s) => s.issues.length === 0);
  return o.length === 1
    ? ((e.value = o[0].value), e)
    : (o.length === 0
        ? e.issues.push({
            code: "invalid_union",
            input: e.value,
            inst: r,
            errors: t.map((s) => s.issues.map((a) => b8(a, n, Od()))),
          })
        : e.issues.push({ code: "invalid_union", input: e.value, inst: r, errors: [], inclusive: !1 }),
      e);
}
function pPt(t, e) {
  if (t === e) return { valid: !0, data: t };
  if (t instanceof Date && e instanceof Date && +t == +e) return { valid: !0, data: t };
  if (XL(t) && XL(e)) {
    let r = Object.keys(e),
      n = Object.keys(t).filter((s) => r.indexOf(s) !== -1),
      o = { ...t, ...e };
    for (let s of n) {
      let a = pPt(t[s], e[s]);
      if (!a.valid) return { valid: !1, mergeErrorPath: [s, ...a.mergeErrorPath] };
      o[s] = a.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(t) && Array.isArray(e)) {
    if (t.length !== e.length) return { valid: !1, mergeErrorPath: [] };
    let r = [];
    for (let n = 0; n < t.length; n++) {
      let o = t[n],
        s = e[n],
        a = pPt(o, s);
      if (!a.valid) return { valid: !1, mergeErrorPath: [n, ...a.mergeErrorPath] };
      r.push(a.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function K0n(t, e, r) {
  let n = new Map(),
    o;
  for (let u of e.issues)
    if (u.code === "unrecognized_keys") {
      o ?? (o = u);
      for (let c of u.keys) (n.has(c) || n.set(c, {}), (n.get(c).l = !0));
    } else t.issues.push(u);
  for (let u of r.issues)
    if (u.code === "unrecognized_keys") for (let c of u.keys) (n.has(c) || n.set(c, {}), (n.get(c).r = !0));
    else t.issues.push(u);
  let s = [...n].filter(([, u]) => u.l && u.r).map(([u]) => u);
  if ((s.length && o && t.issues.push({ ...o, keys: s }), ZL(t))) return t;
  let a = pPt(e.value, r.value);
  if (!a.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
  return ((t.value = a.data), t);
}
function fHe(t, e, r) {
  (t.issues.length && e.issues.push(...E6(r, t.issues)), (e.value[r] = t.value));
}
function J0n(t, e, r, n, o, s, a) {
  (t.issues.length &&
    (P2e.has(typeof n)
      ? r.issues.push(...E6(n, t.issues))
      : r.issues.push({
          code: "invalid_key",
          origin: "map",
          input: o,
          inst: s,
          issues: t.issues.map((u) => b8(u, a, Od())),
        })),
    e.issues.length &&
      (P2e.has(typeof n)
        ? r.issues.push(...E6(n, e.issues))
        : r.issues.push({
            origin: "map",
            code: "invalid_element",
            input: o,
            inst: s,
            key: n,
            issues: e.issues.map((u) => b8(u, a, Od())),
          })),
    r.value.set(t.value, e.value));
}
function X0n(t, e) {
  (t.issues.length && e.issues.push(...t.issues), e.value.add(t.value));
}
function Z0n(t, e) {
  return t.issues.length && e === void 0 ? { issues: [], value: void 0 } : t;
}
function emn(t, e) {
  return (t.value === void 0 && (t.value = e.defaultValue), t);
}
function tmn(t, e) {
  return (
    !t.issues.length &&
      t.value === void 0 &&
      t.issues.push({ code: "invalid_type", expected: "nonoptional", input: t.value, inst: e }),
    t
  );
}
function pHe(t, e, r) {
  return t.issues.length ? ((t.aborted = !0), t) : e._zod.run({ value: t.value, issues: t.issues }, r);
}
function hHe(t, e, r) {
  if (t.issues.length) return ((t.aborted = !0), t);
  if ((r.direction || "forward") === "forward") {
    let o = e.transform(t.value, t);
    return o instanceof Promise ? o.then((s) => gHe(t, s, e.out, r)) : gHe(t, o, e.out, r);
  } else {
    let o = e.reverseTransform(t.value, t);
    return o instanceof Promise ? o.then((s) => gHe(t, s, e.in, r)) : gHe(t, o, e.in, r);
  }
}
function gHe(t, e, r, n) {
  return t.issues.length ? ((t.aborted = !0), t) : r._zod.run({ value: e, issues: t.issues }, n);
}
function rmn(t) {
  return ((t.value = Object.freeze(t.value)), t);
}
function nmn(t, e, r, n) {
  if (!t) {
    let o = { code: "custom", input: r, inst: n, path: [...(n._zod.def.path ?? [])], continue: !n._zod.def.abort };
    (n._zod.def.params && (o.params = n._zod.def.params), e.issues.push(Kie(o)));
  }
}
var Xo,
  eM,
  xl,
  AHe,
  yHe,
  _He,
  EHe,
  vHe,
  CHe,
  SHe,
  wHe,
  xHe,
  THe,
  DHe,
  IHe,
  RHe,
  kHe,
  OHe,
  NHe,
  PHe,
  BHe,
  LHe,
  MHe,
  FHe,
  UHe,
  $He,
  jHe,
  QHe,
  j2e,
  GHe,
  aoe,
  Q2e,
  qHe,
  HHe,
  VHe,
  WHe,
  zHe,
  YHe,
  KHe,
  JHe,
  XHe,
  ZHe,
  gPt,
  bPt,
  uoe,
  eVe,
  tVe,
  rVe,
  G2e,
  nVe,
  iVe,
  oVe,
  sVe,
  aVe,
  uVe,
  cVe,
  q2e,
  lVe,
  mVe,
  dVe,
  fVe,
  pVe,
  hVe,
  gVe,
  bVe,
  AVe,
  coe,
  yVe,
  _Ve,
  EVe,
  vVe,
  CVe,
  SVe,
  APt = j(() => {
    dHe();
    Wie();
    mPt();
    ANt();
    cHe();
    Yi();
    fPt();
    Yi();
    ((Xo = Mt("$ZodType", (t, e) => {
      var r;
      (t ?? (t = {}), (t._zod.def = e), (t._zod.bag = t._zod.bag || {}), (t._zod.version = dPt));
      let n = [...(t._zod.def.checks ?? [])];
      t._zod.traits.has("$ZodCheck") && n.unshift(t);
      for (let o of n) for (let s of o._zod.onattach) s(t);
      if (n.length === 0)
        ((r = t._zod).deferred ?? (r.deferred = []),
          t._zod.deferred?.push(() => {
            t._zod.run = t._zod.parse;
          }));
      else {
        let o = (a, u, c) => {
            let m = ZL(a),
              d;
            for (let f of u) {
              if (f._zod.def.when) {
                if (!f._zod.def.when(a)) continue;
              } else if (m) continue;
              let p = a.issues.length,
                h = f._zod.check(a);
              if (h instanceof Promise && c?.async === !1) throw new C4();
              if (d || h instanceof Promise)
                d = (d ?? Promise.resolve()).then(async () => {
                  (await h, a.issues.length !== p && (m || (m = ZL(a, p))));
                });
              else {
                if (a.issues.length === p) continue;
                m || (m = ZL(a, p));
              }
            }
            return d ? d.then(() => a) : a;
          },
          s = (a, u, c) => {
            if (ZL(a)) return ((a.aborted = !0), a);
            let m = o(u, n, c);
            if (m instanceof Promise) {
              if (c.async === !1) throw new C4();
              return m.then((d) => t._zod.parse(d, c));
            }
            return t._zod.parse(m, c);
          };
        t._zod.run = (a, u) => {
          if (u.skipChecks) return t._zod.parse(a, u);
          if (u.direction === "backward") {
            let m = t._zod.parse({ value: a.value, issues: [] }, { ...u, skipChecks: !0 });
            return m instanceof Promise ? m.then((d) => s(d, a, u)) : s(m, a, u);
          }
          let c = t._zod.parse(a, u);
          if (c instanceof Promise) {
            if (u.async === !1) throw new C4();
            return c.then((m) => o(m, n, u));
          }
          return o(c, n, u);
        };
      }
      sa(t, "~standard", () => ({
        validate: (o) => {
          try {
            let s = _H(t, o);
            return s.success ? { value: s.data } : { issues: s.error?.issues };
          } catch {
            return ooe(t, o).then((a) => (a.success ? { value: a.data } : { issues: a.error?.issues }));
          }
        },
        vendor: "zod",
        version: 1,
      }));
    })),
      (eM = Mt("$ZodString", (t, e) => {
        (Xo.init(t, e),
          (t._zod.pattern = [...(t?._zod.bag?.patterns ?? [])].pop() ?? UNt(t._zod.bag)),
          (t._zod.parse = (r, n) => {
            if (e.coerce)
              try {
                r.value = String(r.value);
              } catch {}
            return (
              typeof r.value == "string" ||
                r.issues.push({ expected: "string", code: "invalid_type", input: r.value, inst: t }),
              r
            );
          }));
      })),
      (xl = Mt("$ZodStringFormat", (t, e) => {
        (soe.init(t, e), eM.init(t, e));
      })),
      (AHe = Mt("$ZodGUID", (t, e) => {
        (e.pattern ?? (e.pattern = xNt), xl.init(t, e));
      })),
      (yHe = Mt("$ZodUUID", (t, e) => {
        if (e.version) {
          let n = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[e.version];
          if (n === void 0) throw new Error(`Invalid UUID version: "${e.version}"`);
          e.pattern ?? (e.pattern = EH(n));
        } else e.pattern ?? (e.pattern = EH());
        xl.init(t, e);
      })),
      (_He = Mt("$ZodEmail", (t, e) => {
        (e.pattern ?? (e.pattern = TNt), xl.init(t, e));
      })),
      (EHe = Mt("$ZodURL", (t, e) => {
        (xl.init(t, e),
          (t._zod.check = (r) => {
            try {
              let n = r.value.trim(),
                o = new URL(n);
              (e.hostname &&
                ((e.hostname.lastIndex = 0),
                e.hostname.test(o.hostname) ||
                  r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid hostname",
                    pattern: e.hostname.source,
                    input: r.value,
                    inst: t,
                    continue: !e.abort,
                  })),
                e.protocol &&
                  ((e.protocol.lastIndex = 0),
                  e.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) ||
                    r.issues.push({
                      code: "invalid_format",
                      format: "url",
                      note: "Invalid protocol",
                      pattern: e.protocol.source,
                      input: r.value,
                      inst: t,
                      continue: !e.abort,
                    })),
                e.normalize ? (r.value = o.href) : (r.value = n));
              return;
            } catch {
              r.issues.push({ code: "invalid_format", format: "url", input: r.value, inst: t, continue: !e.abort });
            }
          }));
      })),
      (vHe = Mt("$ZodEmoji", (t, e) => {
        (e.pattern ?? (e.pattern = DNt()), xl.init(t, e));
      })),
      (CHe = Mt("$ZodNanoID", (t, e) => {
        (e.pattern ?? (e.pattern = SNt), xl.init(t, e));
      })),
      (SHe = Mt("$ZodCUID", (t, e) => {
        (e.pattern ?? (e.pattern = yNt), xl.init(t, e));
      })),
      (wHe = Mt("$ZodCUID2", (t, e) => {
        (e.pattern ?? (e.pattern = _Nt), xl.init(t, e));
      })),
      (xHe = Mt("$ZodULID", (t, e) => {
        (e.pattern ?? (e.pattern = ENt), xl.init(t, e));
      })),
      (THe = Mt("$ZodXID", (t, e) => {
        (e.pattern ?? (e.pattern = vNt), xl.init(t, e));
      })),
      (DHe = Mt("$ZodKSUID", (t, e) => {
        (e.pattern ?? (e.pattern = CNt), xl.init(t, e));
      })),
      (IHe = Mt("$ZodISODateTime", (t, e) => {
        (e.pattern ?? (e.pattern = FNt(e)), xl.init(t, e));
      })),
      (RHe = Mt("$ZodISODate", (t, e) => {
        (e.pattern ?? (e.pattern = LNt), xl.init(t, e));
      })),
      (kHe = Mt("$ZodISOTime", (t, e) => {
        (e.pattern ?? (e.pattern = MNt(e)), xl.init(t, e));
      })),
      (OHe = Mt("$ZodISODuration", (t, e) => {
        (e.pattern ?? (e.pattern = wNt), xl.init(t, e));
      })),
      (NHe = Mt("$ZodIPv4", (t, e) => {
        (e.pattern ?? (e.pattern = INt), xl.init(t, e), (t._zod.bag.format = "ipv4"));
      })),
      (PHe = Mt("$ZodIPv6", (t, e) => {
        (e.pattern ?? (e.pattern = RNt),
          xl.init(t, e),
          (t._zod.bag.format = "ipv6"),
          (t._zod.check = (r) => {
            try {
              new URL(`http://[${r.value}]`);
            } catch {
              r.issues.push({ code: "invalid_format", format: "ipv6", input: r.value, inst: t, continue: !e.abort });
            }
          }));
      })),
      (BHe = Mt("$ZodMAC", (t, e) => {
        (e.pattern ?? (e.pattern = kNt(e.delimiter)), xl.init(t, e), (t._zod.bag.format = "mac"));
      })),
      (LHe = Mt("$ZodCIDRv4", (t, e) => {
        (e.pattern ?? (e.pattern = ONt), xl.init(t, e));
      })),
      (MHe = Mt("$ZodCIDRv6", (t, e) => {
        (e.pattern ?? (e.pattern = NNt),
          xl.init(t, e),
          (t._zod.check = (r) => {
            let n = r.value.split("/");
            try {
              if (n.length !== 2) throw new Error();
              let [o, s] = n;
              if (!s) throw new Error();
              let a = Number(s);
              if (`${a}` !== s) throw new Error();
              if (a < 0 || a > 128) throw new Error();
              new URL(`http://[${o}]`);
            } catch {
              r.issues.push({ code: "invalid_format", format: "cidrv6", input: r.value, inst: t, continue: !e.abort });
            }
          }));
      })));
    FHe = Mt("$ZodBase64", (t, e) => {
      (e.pattern ?? (e.pattern = PNt),
        xl.init(t, e),
        (t._zod.bag.contentEncoding = "base64"),
        (t._zod.check = (r) => {
          hPt(r.value) ||
            r.issues.push({ code: "invalid_format", format: "base64", input: r.value, inst: t, continue: !e.abort });
        }));
    });
    ((UHe = Mt("$ZodBase64URL", (t, e) => {
      (e.pattern ?? (e.pattern = aHe),
        xl.init(t, e),
        (t._zod.bag.contentEncoding = "base64url"),
        (t._zod.check = (r) => {
          imn(r.value) ||
            r.issues.push({ code: "invalid_format", format: "base64url", input: r.value, inst: t, continue: !e.abort });
        }));
    })),
      ($He = Mt("$ZodE164", (t, e) => {
        (e.pattern ?? (e.pattern = BNt), xl.init(t, e));
      })));
    ((jHe = Mt("$ZodJWT", (t, e) => {
      (xl.init(t, e),
        (t._zod.check = (r) => {
          omn(r.value, e.alg) ||
            r.issues.push({ code: "invalid_format", format: "jwt", input: r.value, inst: t, continue: !e.abort });
        }));
    })),
      (QHe = Mt("$ZodCustomStringFormat", (t, e) => {
        (xl.init(t, e),
          (t._zod.check = (r) => {
            e.fn(r.value) ||
              r.issues.push({ code: "invalid_format", format: e.format, input: r.value, inst: t, continue: !e.abort });
          }));
      })),
      (j2e = Mt("$ZodNumber", (t, e) => {
        (Xo.init(t, e),
          (t._zod.pattern = t._zod.bag.pattern ?? uHe),
          (t._zod.parse = (r, n) => {
            if (e.coerce)
              try {
                r.value = Number(r.value);
              } catch {}
            let o = r.value;
            if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o)) return r;
            let s =
              typeof o == "number" ? (Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? void 0 : "Infinity") : void 0;
            return (
              r.issues.push({
                expected: "number",
                code: "invalid_type",
                input: o,
                inst: t,
                ...(s ? { received: s } : {}),
              }),
              r
            );
          }));
      })),
      (GHe = Mt("$ZodNumberFormat", (t, e) => {
        (zNt.init(t, e), j2e.init(t, e));
      })),
      (aoe = Mt("$ZodBoolean", (t, e) => {
        (Xo.init(t, e),
          (t._zod.pattern = QNt),
          (t._zod.parse = (r, n) => {
            if (e.coerce)
              try {
                r.value = !!r.value;
              } catch {}
            let o = r.value;
            return (
              typeof o == "boolean" || r.issues.push({ expected: "boolean", code: "invalid_type", input: o, inst: t }),
              r
            );
          }));
      })),
      (Q2e = Mt("$ZodBigInt", (t, e) => {
        (Xo.init(t, e),
          (t._zod.pattern = $Nt),
          (t._zod.parse = (r, n) => {
            if (e.coerce)
              try {
                r.value = BigInt(r.value);
              } catch {}
            return (
              typeof r.value == "bigint" ||
                r.issues.push({ expected: "bigint", code: "invalid_type", input: r.value, inst: t }),
              r
            );
          }));
      })),
      (qHe = Mt("$ZodBigIntFormat", (t, e) => {
        (YNt.init(t, e), Q2e.init(t, e));
      })),
      (HHe = Mt("$ZodSymbol", (t, e) => {
        (Xo.init(t, e),
          (t._zod.parse = (r, n) => {
            let o = r.value;
            return (
              typeof o == "symbol" || r.issues.push({ expected: "symbol", code: "invalid_type", input: o, inst: t }),
              r
            );
          }));
      })),
      (VHe = Mt("$ZodUndefined", (t, e) => {
        (Xo.init(t, e),
          (t._zod.pattern = qNt),
          (t._zod.values = new Set([void 0])),
          (t._zod.optin = "optional"),
          (t._zod.optout = "optional"),
          (t._zod.parse = (r, n) => {
            let o = r.value;
            return (
              typeof o > "u" || r.issues.push({ expected: "undefined", code: "invalid_type", input: o, inst: t }),
              r
            );
          }));
      })),
      (WHe = Mt("$ZodNull", (t, e) => {
        (Xo.init(t, e),
          (t._zod.pattern = GNt),
          (t._zod.values = new Set([null])),
          (t._zod.parse = (r, n) => {
            let o = r.value;
            return (o === null || r.issues.push({ expected: "null", code: "invalid_type", input: o, inst: t }), r);
          }));
      })),
      (zHe = Mt("$ZodAny", (t, e) => {
        (Xo.init(t, e), (t._zod.parse = (r) => r));
      })),
      (YHe = Mt("$ZodUnknown", (t, e) => {
        (Xo.init(t, e), (t._zod.parse = (r) => r));
      })),
      (KHe = Mt("$ZodNever", (t, e) => {
        (Xo.init(t, e),
          (t._zod.parse = (r, n) => (
            r.issues.push({ expected: "never", code: "invalid_type", input: r.value, inst: t }),
            r
          )));
      })),
      (JHe = Mt("$ZodVoid", (t, e) => {
        (Xo.init(t, e),
          (t._zod.parse = (r, n) => {
            let o = r.value;
            return (typeof o > "u" || r.issues.push({ expected: "void", code: "invalid_type", input: o, inst: t }), r);
          }));
      })),
      (XHe = Mt("$ZodDate", (t, e) => {
        (Xo.init(t, e),
          (t._zod.parse = (r, n) => {
            if (e.coerce)
              try {
                r.value = new Date(r.value);
              } catch {}
            let o = r.value,
              s = o instanceof Date;
            return (
              (s && !Number.isNaN(o.getTime())) ||
                r.issues.push({
                  expected: "date",
                  code: "invalid_type",
                  input: o,
                  ...(s ? { received: "Invalid Date" } : {}),
                  inst: t,
                }),
              r
            );
          }));
      })));
    ZHe = Mt("$ZodArray", (t, e) => {
      (Xo.init(t, e),
        (t._zod.parse = (r, n) => {
          let o = r.value;
          if (!Array.isArray(o))
            return (r.issues.push({ expected: "array", code: "invalid_type", input: o, inst: t }), r);
          r.value = Array(o.length);
          let s = [];
          for (let a = 0; a < o.length; a++) {
            let u = o[a],
              c = e.element._zod.run({ value: u, issues: [] }, n);
            c instanceof Promise ? s.push(c.then((m) => W0n(m, r, a))) : W0n(c, r, a);
          }
          return s.length ? Promise.all(s).then(() => r) : r;
        }));
    });
    ((gPt = Mt("$ZodObject", (t, e) => {
      if ((Xo.init(t, e), !Object.getOwnPropertyDescriptor(e, "shape")?.get)) {
        let u = e.shape;
        Object.defineProperty(e, "shape", {
          get: () => {
            let c = { ...u };
            return (Object.defineProperty(e, "shape", { value: c }), c);
          },
        });
      }
      let n = Yie(() => smn(e));
      sa(t._zod, "propValues", () => {
        let u = e.shape,
          c = {};
        for (let m in u) {
          let d = u[m]._zod;
          if (d.values) {
            c[m] ?? (c[m] = new Set());
            for (let f of d.values) c[m].add(f);
          }
        }
        return c;
      });
      let o = yH,
        s = e.catchall,
        a;
      t._zod.parse = (u, c) => {
        a ?? (a = n.value);
        let m = u.value;
        if (!o(m)) return (u.issues.push({ expected: "object", code: "invalid_type", input: m, inst: t }), u);
        u.value = {};
        let d = [],
          f = a.shape;
        for (let p of a.keys) {
          let h = f[p],
            g = h._zod.optout === "optional",
            b = h._zod.run({ value: m[p], issues: [] }, c);
          b instanceof Promise ? d.push(b.then((A) => bHe(A, u, p, m, g))) : bHe(b, u, p, m, g);
        }
        return s ? amn(d, m, u, c, n.value, t) : d.length ? Promise.all(d).then(() => u) : u;
      };
    })),
      (bPt = Mt("$ZodObjectJIT", (t, e) => {
        gPt.init(t, e);
        let r = t._zod.parse,
          n = Yie(() => smn(e)),
          o = (p) => {
            let h = new $2e(["shape", "payload", "ctx"]),
              g = n.value,
              b = (v) => {
                let C = zqe(v);
                return `shape[${C}]._zod.run({ value: input[${C}], issues: [] }, ctx)`;
              };
            h.write("const input = payload.value;");
            let A = Object.create(null),
              y = 0;
            for (let v of g.keys) A[v] = `key_${y++}`;
            h.write("const newResult = {};");
            for (let v of g.keys) {
              let C = A[v],
                x = zqe(v),
                R = p[v]?._zod?.optout === "optional";
              (h.write(`const ${C} = ${b(v)};`),
                R
                  ? h.write(`
        if (${C}.issues.length) {
          if (${x} in input) {
            payload.issues = payload.issues.concat(${C}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${x}, ...iss.path] : [${x}]
            })));
          }
        }
        
        if (${C}.value === undefined) {
          if (${x} in input) {
            newResult[${x}] = undefined;
          }
        } else {
          newResult[${x}] = ${C}.value;
        }
        
      `)
                  : h.write(`
        if (${C}.issues.length) {
          payload.issues = payload.issues.concat(${C}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${x}, ...iss.path] : [${x}]
          })));
        }
        
        if (${C}.value === undefined) {
          if (${x} in input) {
            newResult[${x}] = undefined;
          }
        } else {
          newResult[${x}] = ${C}.value;
        }
        
      `));
            }
            (h.write("payload.value = newResult;"), h.write("return payload;"));
            let E = h.compile();
            return (v, C) => E(p, v, C);
          },
          s,
          a = yH,
          u = !I2e.jitless,
          m = u && dNt.value,
          d = e.catchall,
          f;
        t._zod.parse = (p, h) => {
          f ?? (f = n.value);
          let g = p.value;
          return a(g)
            ? u && m && h?.async === !1 && h.jitless !== !0
              ? (s || (s = o(e.shape)), (p = s(p, h)), d ? amn([], g, p, h, f, t) : p)
              : r(p, h)
            : (p.issues.push({ expected: "object", code: "invalid_type", input: g, inst: t }), p);
        };
      })));
    uoe = Mt("$ZodUnion", (t, e) => {
      (Xo.init(t, e),
        sa(t._zod, "optin", () => (e.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0)),
        sa(t._zod, "optout", () => (e.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0)),
        sa(t._zod, "values", () => {
          if (e.options.every((o) => o._zod.values))
            return new Set(e.options.flatMap((o) => Array.from(o._zod.values)));
        }),
        sa(t._zod, "pattern", () => {
          if (e.options.every((o) => o._zod.pattern)) {
            let o = e.options.map((s) => s._zod.pattern);
            return new RegExp(`^(${o.map((s) => N2e(s.source)).join("|")})$`);
          }
        }));
      let r = e.options.length === 1,
        n = e.options[0]._zod.run;
      t._zod.parse = (o, s) => {
        if (r) return n(o, s);
        let a = !1,
          u = [];
        for (let c of e.options) {
          let m = c._zod.run({ value: o.value, issues: [] }, s);
          if (m instanceof Promise) (u.push(m), (a = !0));
          else {
            if (m.issues.length === 0) return m;
            u.push(m);
          }
        }
        return a ? Promise.all(u).then((c) => z0n(c, o, t, s)) : z0n(u, o, t, s);
      };
    });
    ((eVe = Mt("$ZodXor", (t, e) => {
      (uoe.init(t, e), (e.inclusive = !1));
      let r = e.options.length === 1,
        n = e.options[0]._zod.run;
      t._zod.parse = (o, s) => {
        if (r) return n(o, s);
        let a = !1,
          u = [];
        for (let c of e.options) {
          let m = c._zod.run({ value: o.value, issues: [] }, s);
          m instanceof Promise ? (u.push(m), (a = !0)) : u.push(m);
        }
        return a ? Promise.all(u).then((c) => Y0n(c, o, t, s)) : Y0n(u, o, t, s);
      };
    })),
      (tVe = Mt("$ZodDiscriminatedUnion", (t, e) => {
        ((e.inclusive = !1), uoe.init(t, e));
        let r = t._zod.parse;
        sa(t._zod, "propValues", () => {
          let o = {};
          for (let s of e.options) {
            let a = s._zod.propValues;
            if (!a || Object.keys(a).length === 0)
              throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(s)}"`);
            for (let [u, c] of Object.entries(a)) {
              o[u] || (o[u] = new Set());
              for (let m of c) o[u].add(m);
            }
          }
          return o;
        });
        let n = Yie(() => {
          let o = e.options,
            s = new Map();
          for (let a of o) {
            let u = a._zod.propValues?.[e.discriminator];
            if (!u || u.size === 0)
              throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(a)}"`);
            for (let c of u) {
              if (s.has(c)) throw new Error(`Duplicate discriminator value "${String(c)}"`);
              s.set(c, a);
            }
          }
          return s;
        });
        t._zod.parse = (o, s) => {
          let a = o.value;
          if (!yH(a)) return (o.issues.push({ code: "invalid_type", expected: "object", input: a, inst: t }), o);
          let u = n.value.get(a?.[e.discriminator]);
          return u
            ? u._zod.run(o, s)
            : e.unionFallback
              ? r(o, s)
              : (o.issues.push({
                  code: "invalid_union",
                  errors: [],
                  note: "No matching discriminator",
                  discriminator: e.discriminator,
                  input: a,
                  path: [e.discriminator],
                  inst: t,
                }),
                o);
        };
      })),
      (rVe = Mt("$ZodIntersection", (t, e) => {
        (Xo.init(t, e),
          (t._zod.parse = (r, n) => {
            let o = r.value,
              s = e.left._zod.run({ value: o, issues: [] }, n),
              a = e.right._zod.run({ value: o, issues: [] }, n);
            return s instanceof Promise || a instanceof Promise
              ? Promise.all([s, a]).then(([c, m]) => K0n(r, c, m))
              : K0n(r, s, a);
          }));
      })));
    G2e = Mt("$ZodTuple", (t, e) => {
      Xo.init(t, e);
      let r = e.items;
      t._zod.parse = (n, o) => {
        let s = n.value;
        if (!Array.isArray(s))
          return (n.issues.push({ input: s, inst: t, expected: "tuple", code: "invalid_type" }), n);
        n.value = [];
        let a = [],
          u = [...r].reverse().findIndex((d) => d._zod.optin !== "optional"),
          c = u === -1 ? 0 : r.length - u;
        if (!e.rest) {
          let d = s.length > r.length,
            f = s.length < c - 1;
          if (d || f)
            return (
              n.issues.push({
                ...(d
                  ? { code: "too_big", maximum: r.length, inclusive: !0 }
                  : { code: "too_small", minimum: r.length }),
                input: s,
                inst: t,
                origin: "array",
              }),
              n
            );
        }
        let m = -1;
        for (let d of r) {
          if ((m++, m >= s.length && m >= c)) continue;
          let f = d._zod.run({ value: s[m], issues: [] }, o);
          f instanceof Promise ? a.push(f.then((p) => fHe(p, n, m))) : fHe(f, n, m);
        }
        if (e.rest) {
          let d = s.slice(r.length);
          for (let f of d) {
            m++;
            let p = e.rest._zod.run({ value: f, issues: [] }, o);
            p instanceof Promise ? a.push(p.then((h) => fHe(h, n, m))) : fHe(p, n, m);
          }
        }
        return a.length ? Promise.all(a).then(() => n) : n;
      };
    });
    ((nVe = Mt("$ZodRecord", (t, e) => {
      (Xo.init(t, e),
        (t._zod.parse = (r, n) => {
          let o = r.value;
          if (!XL(o)) return (r.issues.push({ expected: "record", code: "invalid_type", input: o, inst: t }), r);
          let s = [],
            a = e.keyType._zod.values;
          if (a) {
            r.value = {};
            let u = new Set();
            for (let m of a)
              if (typeof m == "string" || typeof m == "number" || typeof m == "symbol") {
                u.add(typeof m == "number" ? m.toString() : m);
                let d = e.valueType._zod.run({ value: o[m], issues: [] }, n);
                d instanceof Promise
                  ? s.push(
                      d.then((f) => {
                        (f.issues.length && r.issues.push(...E6(m, f.issues)), (r.value[m] = f.value));
                      }),
                    )
                  : (d.issues.length && r.issues.push(...E6(m, d.issues)), (r.value[m] = d.value));
              }
            let c;
            for (let m in o) u.has(m) || ((c = c ?? []), c.push(m));
            c && c.length > 0 && r.issues.push({ code: "unrecognized_keys", input: o, inst: t, keys: c });
          } else {
            r.value = {};
            for (let u of Reflect.ownKeys(o)) {
              if (u === "__proto__") continue;
              let c = e.keyType._zod.run({ value: u, issues: [] }, n);
              if (c instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
              if (
                typeof u == "string" &&
                uHe.test(u) &&
                c.issues.length &&
                c.issues.some((f) => f.code === "invalid_type" && f.expected === "number")
              ) {
                let f = e.keyType._zod.run({ value: Number(u), issues: [] }, n);
                if (f instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
                f.issues.length === 0 && (c = f);
              }
              if (c.issues.length) {
                e.mode === "loose"
                  ? (r.value[u] = o[u])
                  : r.issues.push({
                      code: "invalid_key",
                      origin: "record",
                      issues: c.issues.map((f) => b8(f, n, Od())),
                      input: u,
                      path: [u],
                      inst: t,
                    });
                continue;
              }
              let d = e.valueType._zod.run({ value: o[u], issues: [] }, n);
              d instanceof Promise
                ? s.push(
                    d.then((f) => {
                      (f.issues.length && r.issues.push(...E6(u, f.issues)), (r.value[c.value] = f.value));
                    }),
                  )
                : (d.issues.length && r.issues.push(...E6(u, d.issues)), (r.value[c.value] = d.value));
            }
          }
          return s.length ? Promise.all(s).then(() => r) : r;
        }));
    })),
      (iVe = Mt("$ZodMap", (t, e) => {
        (Xo.init(t, e),
          (t._zod.parse = (r, n) => {
            let o = r.value;
            if (!(o instanceof Map))
              return (r.issues.push({ expected: "map", code: "invalid_type", input: o, inst: t }), r);
            let s = [];
            r.value = new Map();
            for (let [a, u] of o) {
              let c = e.keyType._zod.run({ value: a, issues: [] }, n),
                m = e.valueType._zod.run({ value: u, issues: [] }, n);
              c instanceof Promise || m instanceof Promise
                ? s.push(
                    Promise.all([c, m]).then(([d, f]) => {
                      J0n(d, f, r, a, o, t, n);
                    }),
                  )
                : J0n(c, m, r, a, o, t, n);
            }
            return s.length ? Promise.all(s).then(() => r) : r;
          }));
      })));
    oVe = Mt("$ZodSet", (t, e) => {
      (Xo.init(t, e),
        (t._zod.parse = (r, n) => {
          let o = r.value;
          if (!(o instanceof Set))
            return (r.issues.push({ input: o, inst: t, expected: "set", code: "invalid_type" }), r);
          let s = [];
          r.value = new Set();
          for (let a of o) {
            let u = e.valueType._zod.run({ value: a, issues: [] }, n);
            u instanceof Promise ? s.push(u.then((c) => X0n(c, r))) : X0n(u, r);
          }
          return s.length ? Promise.all(s).then(() => r) : r;
        }));
    });
    ((sVe = Mt("$ZodEnum", (t, e) => {
      Xo.init(t, e);
      let r = O2e(e.entries),
        n = new Set(r);
      ((t._zod.values = n),
        (t._zod.pattern = new RegExp(
          `^(${r
            .filter((o) => P2e.has(typeof o))
            .map((o) => (typeof o == "string" ? iE(o) : o.toString()))
            .join("|")})$`,
        )),
        (t._zod.parse = (o, s) => {
          let a = o.value;
          return (n.has(a) || o.issues.push({ code: "invalid_value", values: r, input: a, inst: t }), o);
        }));
    })),
      (aVe = Mt("$ZodLiteral", (t, e) => {
        if ((Xo.init(t, e), e.values.length === 0))
          throw new Error("Cannot create literal schema with no valid values");
        let r = new Set(e.values);
        ((t._zod.values = r),
          (t._zod.pattern = new RegExp(
            `^(${e.values.map((n) => (typeof n == "string" ? iE(n) : n ? iE(n.toString()) : String(n))).join("|")})$`,
          )),
          (t._zod.parse = (n, o) => {
            let s = n.value;
            return (r.has(s) || n.issues.push({ code: "invalid_value", values: e.values, input: s, inst: t }), n);
          }));
      })),
      (uVe = Mt("$ZodFile", (t, e) => {
        (Xo.init(t, e),
          (t._zod.parse = (r, n) => {
            let o = r.value;
            return (
              o instanceof File || r.issues.push({ expected: "file", code: "invalid_type", input: o, inst: t }),
              r
            );
          }));
      })),
      (cVe = Mt("$ZodTransform", (t, e) => {
        (Xo.init(t, e),
          (t._zod.parse = (r, n) => {
            if (n.direction === "backward") throw new YL(t.constructor.name);
            let o = e.transform(r.value, r);
            if (n.async) return (o instanceof Promise ? o : Promise.resolve(o)).then((a) => ((r.value = a), r));
            if (o instanceof Promise) throw new C4();
            return ((r.value = o), r);
          }));
      })));
    ((q2e = Mt("$ZodOptional", (t, e) => {
      (Xo.init(t, e),
        (t._zod.optin = "optional"),
        (t._zod.optout = "optional"),
        sa(t._zod, "values", () => (e.innerType._zod.values ? new Set([...e.innerType._zod.values, void 0]) : void 0)),
        sa(t._zod, "pattern", () => {
          let r = e.innerType._zod.pattern;
          return r ? new RegExp(`^(${N2e(r.source)})?$`) : void 0;
        }),
        (t._zod.parse = (r, n) => {
          if (e.innerType._zod.optin === "optional") {
            let o = e.innerType._zod.run(r, n);
            return o instanceof Promise ? o.then((s) => Z0n(s, r.value)) : Z0n(o, r.value);
          }
          return r.value === void 0 ? r : e.innerType._zod.run(r, n);
        }));
    })),
      (lVe = Mt("$ZodExactOptional", (t, e) => {
        (q2e.init(t, e),
          sa(t._zod, "values", () => e.innerType._zod.values),
          sa(t._zod, "pattern", () => e.innerType._zod.pattern),
          (t._zod.parse = (r, n) => e.innerType._zod.run(r, n)));
      })),
      (mVe = Mt("$ZodNullable", (t, e) => {
        (Xo.init(t, e),
          sa(t._zod, "optin", () => e.innerType._zod.optin),
          sa(t._zod, "optout", () => e.innerType._zod.optout),
          sa(t._zod, "pattern", () => {
            let r = e.innerType._zod.pattern;
            return r ? new RegExp(`^(${N2e(r.source)}|null)$`) : void 0;
          }),
          sa(t._zod, "values", () => (e.innerType._zod.values ? new Set([...e.innerType._zod.values, null]) : void 0)),
          (t._zod.parse = (r, n) => (r.value === null ? r : e.innerType._zod.run(r, n))));
      })),
      (dVe = Mt("$ZodDefault", (t, e) => {
        (Xo.init(t, e),
          (t._zod.optin = "optional"),
          sa(t._zod, "values", () => e.innerType._zod.values),
          (t._zod.parse = (r, n) => {
            if (n.direction === "backward") return e.innerType._zod.run(r, n);
            if (r.value === void 0) return ((r.value = e.defaultValue), r);
            let o = e.innerType._zod.run(r, n);
            return o instanceof Promise ? o.then((s) => emn(s, e)) : emn(o, e);
          }));
      })));
    ((fVe = Mt("$ZodPrefault", (t, e) => {
      (Xo.init(t, e),
        (t._zod.optin = "optional"),
        sa(t._zod, "values", () => e.innerType._zod.values),
        (t._zod.parse = (r, n) => (
          n.direction === "backward" || (r.value === void 0 && (r.value = e.defaultValue)),
          e.innerType._zod.run(r, n)
        )));
    })),
      (pVe = Mt("$ZodNonOptional", (t, e) => {
        (Xo.init(t, e),
          sa(t._zod, "values", () => {
            let r = e.innerType._zod.values;
            return r ? new Set([...r].filter((n) => n !== void 0)) : void 0;
          }),
          (t._zod.parse = (r, n) => {
            let o = e.innerType._zod.run(r, n);
            return o instanceof Promise ? o.then((s) => tmn(s, t)) : tmn(o, t);
          }));
      })));
    ((hVe = Mt("$ZodSuccess", (t, e) => {
      (Xo.init(t, e),
        (t._zod.parse = (r, n) => {
          if (n.direction === "backward") throw new YL("ZodSuccess");
          let o = e.innerType._zod.run(r, n);
          return o instanceof Promise
            ? o.then((s) => ((r.value = s.issues.length === 0), r))
            : ((r.value = o.issues.length === 0), r);
        }));
    })),
      (gVe = Mt("$ZodCatch", (t, e) => {
        (Xo.init(t, e),
          sa(t._zod, "optin", () => e.innerType._zod.optin),
          sa(t._zod, "optout", () => e.innerType._zod.optout),
          sa(t._zod, "values", () => e.innerType._zod.values),
          (t._zod.parse = (r, n) => {
            if (n.direction === "backward") return e.innerType._zod.run(r, n);
            let o = e.innerType._zod.run(r, n);
            return o instanceof Promise
              ? o.then(
                  (s) => (
                    (r.value = s.value),
                    s.issues.length &&
                      ((r.value = e.catchValue({
                        ...r,
                        error: { issues: s.issues.map((a) => b8(a, n, Od())) },
                        input: r.value,
                      })),
                      (r.issues = [])),
                    r
                  ),
                )
              : ((r.value = o.value),
                o.issues.length &&
                  ((r.value = e.catchValue({
                    ...r,
                    error: { issues: o.issues.map((s) => b8(s, n, Od())) },
                    input: r.value,
                  })),
                  (r.issues = [])),
                r);
          }));
      })),
      (bVe = Mt("$ZodNaN", (t, e) => {
        (Xo.init(t, e),
          (t._zod.parse = (r, n) => (
            (typeof r.value != "number" || !Number.isNaN(r.value)) &&
              r.issues.push({ input: r.value, inst: t, expected: "nan", code: "invalid_type" }),
            r
          )));
      })),
      (AVe = Mt("$ZodPipe", (t, e) => {
        (Xo.init(t, e),
          sa(t._zod, "values", () => e.in._zod.values),
          sa(t._zod, "optin", () => e.in._zod.optin),
          sa(t._zod, "optout", () => e.out._zod.optout),
          sa(t._zod, "propValues", () => e.in._zod.propValues),
          (t._zod.parse = (r, n) => {
            if (n.direction === "backward") {
              let s = e.out._zod.run(r, n);
              return s instanceof Promise ? s.then((a) => pHe(a, e.in, n)) : pHe(s, e.in, n);
            }
            let o = e.in._zod.run(r, n);
            return o instanceof Promise ? o.then((s) => pHe(s, e.out, n)) : pHe(o, e.out, n);
          }));
      })));
    coe = Mt("$ZodCodec", (t, e) => {
      (Xo.init(t, e),
        sa(t._zod, "values", () => e.in._zod.values),
        sa(t._zod, "optin", () => e.in._zod.optin),
        sa(t._zod, "optout", () => e.out._zod.optout),
        sa(t._zod, "propValues", () => e.in._zod.propValues),
        (t._zod.parse = (r, n) => {
          if ((n.direction || "forward") === "forward") {
            let s = e.in._zod.run(r, n);
            return s instanceof Promise ? s.then((a) => hHe(a, e, n)) : hHe(s, e, n);
          } else {
            let s = e.out._zod.run(r, n);
            return s instanceof Promise ? s.then((a) => hHe(a, e, n)) : hHe(s, e, n);
          }
        }));
    });
    yVe = Mt("$ZodReadonly", (t, e) => {
      (Xo.init(t, e),
        sa(t._zod, "propValues", () => e.innerType._zod.propValues),
        sa(t._zod, "values", () => e.innerType._zod.values),
        sa(t._zod, "optin", () => e.innerType?._zod?.optin),
        sa(t._zod, "optout", () => e.innerType?._zod?.optout),
        (t._zod.parse = (r, n) => {
          if (n.direction === "backward") return e.innerType._zod.run(r, n);
          let o = e.innerType._zod.run(r, n);
          return o instanceof Promise ? o.then(rmn) : rmn(o);
        }));
    });
    ((_Ve = Mt("$ZodTemplateLiteral", (t, e) => {
      Xo.init(t, e);
      let r = [];
      for (let n of e.parts)
        if (typeof n == "object" && n !== null) {
          if (!n._zod.pattern)
            throw new Error(`Invalid template literal part, no pattern found: ${[...n._zod.traits].shift()}`);
          let o = n._zod.pattern instanceof RegExp ? n._zod.pattern.source : n._zod.pattern;
          if (!o) throw new Error(`Invalid template literal part: ${n._zod.traits}`);
          let s = o.startsWith("^") ? 1 : 0,
            a = o.endsWith("$") ? o.length - 1 : o.length;
          r.push(o.slice(s, a));
        } else if (n === null || fNt.has(typeof n)) r.push(iE(`${n}`));
        else throw new Error(`Invalid template literal part: ${n}`);
      ((t._zod.pattern = new RegExp(`^${r.join("")}$`)),
        (t._zod.parse = (n, o) =>
          typeof n.value != "string"
            ? (n.issues.push({ input: n.value, inst: t, expected: "string", code: "invalid_type" }), n)
            : ((t._zod.pattern.lastIndex = 0),
              t._zod.pattern.test(n.value) ||
                n.issues.push({
                  input: n.value,
                  inst: t,
                  code: "invalid_format",
                  format: e.format ?? "template_literal",
                  pattern: t._zod.pattern.source,
                }),
              n)));
    })),
      (EVe = Mt(
        "$ZodFunction",
        (t, e) => (
          Xo.init(t, e),
          (t._def = e),
          (t._zod.def = e),
          (t.implement = (r) => {
            if (typeof r != "function") throw new Error("implement() must be called with a function");
            return function (...n) {
              let o = t._def.input ? eoe(t._def.input, n) : n,
                s = Reflect.apply(r, this, o);
              return t._def.output ? eoe(t._def.output, s) : s;
            };
          }),
          (t.implementAsync = (r) => {
            if (typeof r != "function") throw new Error("implementAsync() must be called with a function");
            return async function (...n) {
              let o = t._def.input ? await roe(t._def.input, n) : n,
                s = await Reflect.apply(r, this, o);
              return t._def.output ? await roe(t._def.output, s) : s;
            };
          }),
          (t._zod.parse = (r, n) =>
            typeof r.value != "function"
              ? (r.issues.push({ code: "invalid_type", expected: "function", input: r.value, inst: t }), r)
              : (t._def.output && t._def.output._zod.def.type === "promise"
                  ? (r.value = t.implementAsync(r.value))
                  : (r.value = t.implement(r.value)),
                r)),
          (t.input = (...r) => {
            let n = t.constructor;
            return Array.isArray(r[0])
              ? new n({
                  type: "function",
                  input: new G2e({ type: "tuple", items: r[0], rest: r[1] }),
                  output: t._def.output,
                })
              : new n({ type: "function", input: r[0], output: t._def.output });
          }),
          (t.output = (r) => {
            let n = t.constructor;
            return new n({ type: "function", input: t._def.input, output: r });
          }),
          t
        ),
      )),
      (vVe = Mt("$ZodPromise", (t, e) => {
        (Xo.init(t, e),
          (t._zod.parse = (r, n) =>
            Promise.resolve(r.value).then((o) => e.innerType._zod.run({ value: o, issues: [] }, n))));
      })),
      (CVe = Mt("$ZodLazy", (t, e) => {
        (Xo.init(t, e),
          sa(t._zod, "innerType", () => e.getter()),
          sa(t._zod, "pattern", () => t._zod.innerType?._zod?.pattern),
          sa(t._zod, "propValues", () => t._zod.innerType?._zod?.propValues),
          sa(t._zod, "optin", () => t._zod.innerType?._zod?.optin ?? void 0),
          sa(t._zod, "optout", () => t._zod.innerType?._zod?.optout ?? void 0),
          (t._zod.parse = (r, n) => t._zod.innerType._zod.run(r, n)));
      })),
      (SVe = Mt("$ZodCustom", (t, e) => {
        (zl.init(t, e),
          Xo.init(t, e),
          (t._zod.parse = (r, n) => r),
          (t._zod.check = (r) => {
            let n = r.value,
              o = e.fn(n);
            if (o instanceof Promise) return o.then((s) => nmn(s, r, n, t));
            nmn(o, r, n, t);
          }));
      })));
  });
function umn() {
  return { localeError: tss() };
}
var tss,
  cmn = j(() => {
    Yi();
    tss = () => {
      let t = {
        string: { unit: "\u062D\u0631\u0641", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
        file: { unit: "\u0628\u0627\u064A\u062A", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
        array: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
        set: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "\u0645\u062F\u062E\u0644",
          email: "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
          url: "\u0631\u0627\u0628\u0637",
          emoji: "\u0625\u064A\u0645\u0648\u062C\u064A",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
          date: "\u062A\u0627\u0631\u064A\u062E \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
          time: "\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
          duration: "\u0645\u062F\u0629 \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
          ipv4: "\u0639\u0646\u0648\u0627\u0646 IPv4",
          ipv6: "\u0639\u0646\u0648\u0627\u0646 IPv6",
          cidrv4: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv4",
          cidrv6: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv6",
          base64: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64-encoded",
          base64url: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64url-encoded",
          json_string: "\u0646\u064E\u0635 \u0639\u0644\u0649 \u0647\u064A\u0626\u0629 JSON",
          e164: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u0645\u0639\u064A\u0627\u0631 E.164",
          jwt: "JWT",
          template_literal: "\u0645\u062F\u062E\u0644",
        },
        n = { nan: "NaN" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 instanceof ${o.expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${u}`
              : `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${s}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${Zr(o.values[0])}`
              : `\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? ` \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${o.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${s} ${o.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0635\u0631"}`
              : `\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${o.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${s} ${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${o.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${s} ${o.minimum.toString()} ${a.unit}`
              : `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${o.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${s} ${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "${o.prefix}"`
              : s.format === "ends_with"
                ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "${s.suffix}"`
                : s.format === "includes"
                  ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "${s.includes}"`
                  : s.format === "regex"
                    ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 ${s.pattern}`
                    : `${r[s.format] ?? o.format} \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644`;
          }
          case "not_multiple_of":
            return `\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A ${o.divisor}`;
          case "unrecognized_keys":
            return `\u0645\u0639\u0631\u0641${o.keys.length > 1 ? "\u0627\u062A" : ""} \u063A\u0631\u064A\u0628${o.keys.length > 1 ? "\u0629" : ""}: ${sr(o.keys, "\u060C ")}`;
          case "invalid_key":
            return `\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${o.origin}`;
          case "invalid_union":
            return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
          case "invalid_element":
            return `\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${o.origin}`;
          default:
            return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
        }
      };
    };
  });
function lmn() {
  return { localeError: rss() };
}
var rss,
  mmn = j(() => {
    Yi();
    rss = () => {
      let t = {
        string: { unit: "simvol", verb: "olmal\u0131d\u0131r" },
        file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
        array: { unit: "element", verb: "olmal\u0131d\u0131r" },
        set: { unit: "element", verb: "olmal\u0131d\u0131r" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "input",
          email: "email address",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO datetime",
          date: "ISO date",
          time: "ISO time",
          duration: "ISO duration",
          ipv4: "IPv4 address",
          ipv6: "IPv6 address",
          cidrv4: "IPv4 range",
          cidrv6: "IPv6 range",
          base64: "base64-encoded string",
          base64url: "base64url-encoded string",
          json_string: "JSON string",
          e164: "E.164 number",
          jwt: "JWT",
          template_literal: "input",
        },
        n = { nan: "NaN" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n instanceof ${o.expected}, daxil olan ${u}`
              : `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${s}, daxil olan ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${Zr(o.values[0])}`
              : `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${o.origin ?? "d\u0259y\u0259r"} ${s}${o.maximum.toString()} ${a.unit ?? "element"}`
              : `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${o.origin ?? "d\u0259y\u0259r"} ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${o.origin} ${s}${o.minimum.toString()} ${a.unit}`
              : `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${o.origin} ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Yanl\u0131\u015F m\u0259tn: "${s.prefix}" il\u0259 ba\u015Flamal\u0131d\u0131r`
              : s.format === "ends_with"
                ? `Yanl\u0131\u015F m\u0259tn: "${s.suffix}" il\u0259 bitm\u0259lidir`
                : s.format === "includes"
                  ? `Yanl\u0131\u015F m\u0259tn: "${s.includes}" daxil olmal\u0131d\u0131r`
                  : s.format === "regex"
                    ? `Yanl\u0131\u015F m\u0259tn: ${s.pattern} \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r`
                    : `Yanl\u0131\u015F ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `Yanl\u0131\u015F \u0259d\u0259d: ${o.divisor} il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r`;
          case "unrecognized_keys":
            return `Tan\u0131nmayan a\xE7ar${o.keys.length > 1 ? "lar" : ""}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `${o.origin} daxilind\u0259 yanl\u0131\u015F a\xE7ar`;
          case "invalid_union":
            return "Yanl\u0131\u015F d\u0259y\u0259r";
          case "invalid_element":
            return `${o.origin} daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r`;
          default:
            return "Yanl\u0131\u015F d\u0259y\u0259r";
        }
      };
    };
  });
function dmn(t, e, r, n) {
  let o = Math.abs(t),
    s = o % 10,
    a = o % 100;
  return a >= 11 && a <= 19 ? n : s === 1 ? e : s >= 2 && s <= 4 ? r : n;
}
function fmn() {
  return { localeError: nss() };
}
var nss,
  pmn = j(() => {
    Yi();
    nss = () => {
      let t = {
        string: {
          unit: {
            one: "\u0441\u0456\u043C\u0432\u0430\u043B",
            few: "\u0441\u0456\u043C\u0432\u0430\u043B\u044B",
            many: "\u0441\u0456\u043C\u0432\u0430\u043B\u0430\u045E",
          },
          verb: "\u043C\u0435\u0446\u044C",
        },
        array: {
          unit: {
            one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
            few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
            many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E",
          },
          verb: "\u043C\u0435\u0446\u044C",
        },
        set: {
          unit: {
            one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
            few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
            many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E",
          },
          verb: "\u043C\u0435\u0446\u044C",
        },
        file: {
          unit: {
            one: "\u0431\u0430\u0439\u0442",
            few: "\u0431\u0430\u0439\u0442\u044B",
            many: "\u0431\u0430\u0439\u0442\u0430\u045E",
          },
          verb: "\u043C\u0435\u0446\u044C",
        },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "\u0443\u0432\u043E\u0434",
          email: "email \u0430\u0434\u0440\u0430\u0441",
          url: "URL",
          emoji: "\u044D\u043C\u043E\u0434\u0437\u0456",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO \u0434\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441",
          date: "ISO \u0434\u0430\u0442\u0430",
          time: "ISO \u0447\u0430\u0441",
          duration: "ISO \u043F\u0440\u0430\u0446\u044F\u0433\u043B\u0430\u0441\u0446\u044C",
          ipv4: "IPv4 \u0430\u0434\u0440\u0430\u0441",
          ipv6: "IPv6 \u0430\u0434\u0440\u0430\u0441",
          cidrv4: "IPv4 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
          cidrv6: "IPv6 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
          base64: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64",
          base64url: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64url",
          json_string: "JSON \u0440\u0430\u0434\u043E\u043A",
          e164: "\u043D\u0443\u043C\u0430\u0440 E.164",
          jwt: "JWT",
          template_literal: "\u0443\u0432\u043E\u0434",
        },
        n = { nan: "NaN", number: "\u043B\u0456\u043A", array: "\u043C\u0430\u0441\u0456\u045E" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F instanceof ${o.expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${u}`
              : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ${s}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${Zr(o.values[0])}`
              : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            if (a) {
              let u = Number(o.maximum),
                c = dmn(u, a.unit.one, a.unit.few, a.unit.many);
              return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${o.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${a.verb} ${s}${o.maximum.toString()} ${c}`;
            }
            return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${o.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            if (a) {
              let u = Number(o.minimum),
                c = dmn(u, a.unit.one, a.unit.few, a.unit.many);
              return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${o.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${a.verb} ${s}${o.minimum.toString()} ${c}`;
            }
            return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${o.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 "${s.prefix}"`
              : s.format === "ends_with"
                ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 "${s.suffix}"`
                : s.format === "includes"
                  ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C "${s.includes}"`
                  : s.format === "regex"
                    ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${s.pattern}`
                    : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${o.divisor}`;
          case "unrecognized_keys":
            return `\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${o.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447"}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 ${o.origin}`;
          case "invalid_union":
            return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
          case "invalid_element":
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E ${o.origin}`;
          default:
            return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
        }
      };
    };
  });
function hmn() {
  return { localeError: iss() };
}
var iss,
  gmn = j(() => {
    Yi();
    iss = () => {
      let t = {
        string: {
          unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
          verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
        },
        file: {
          unit: "\u0431\u0430\u0439\u0442\u0430",
          verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
        },
        array: {
          unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
          verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
        },
        set: {
          unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
          verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
        },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "\u0432\u0445\u043E\u0434",
          email: "\u0438\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441",
          url: "URL",
          emoji: "\u0435\u043C\u043E\u0434\u0436\u0438",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO \u0432\u0440\u0435\u043C\u0435",
          date: "ISO \u0434\u0430\u0442\u0430",
          time: "ISO \u0432\u0440\u0435\u043C\u0435",
          duration: "ISO \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442",
          ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
          ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
          cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
          cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
          base64: "base64-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
          base64url: "base64url-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
          json_string: "JSON \u043D\u0438\u0437",
          e164: "E.164 \u043D\u043E\u043C\u0435\u0440",
          jwt: "JWT",
          template_literal: "\u0432\u0445\u043E\u0434",
        },
        n = { nan: "NaN", number: "\u0447\u0438\u0441\u043B\u043E", array: "\u043C\u0430\u0441\u0438\u0432" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D instanceof ${o.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${u}`
              : `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${s}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${Zr(o.values[0])}`
              : `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u043E\u043F\u0446\u0438\u044F: \u043E\u0447\u0430\u043A\u0432\u0430\u043D\u043E \u0435\u0434\u043D\u043E \u043E\u0442 ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${o.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${s}${o.maximum.toString()} ${a.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430"}`
              : `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${o.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0431\u044A\u0434\u0435 ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${o.origin} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${s}${o.minimum.toString()} ${a.unit}`
              : `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${o.origin} \u0434\u0430 \u0431\u044A\u0434\u0435 ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            if (s.format === "starts_with")
              return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u0432\u0430 \u0441 "${s.prefix}"`;
            if (s.format === "ends_with")
              return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u0432\u044A\u0440\u0448\u0432\u0430 \u0441 "${s.suffix}"`;
            if (s.format === "includes")
              return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0432\u0430 "${s.includes}"`;
            if (s.format === "regex")
              return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0432\u043F\u0430\u0434\u0430 \u0441 ${s.pattern}`;
            let a = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D";
            return (
              s.format === "emoji" && (a = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"),
              s.format === "datetime" && (a = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"),
              s.format === "date" && (a = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430"),
              s.format === "time" && (a = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"),
              s.format === "duration" && (a = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430"),
              `${a} ${r[s.format] ?? o.format}`
            );
          }
          case "not_multiple_of":
            return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E \u0447\u0438\u0441\u043B\u043E: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043A\u0440\u0430\u0442\u043D\u043E \u043D\u0430 ${o.divisor}`;
          case "unrecognized_keys":
            return `\u041D\u0435\u0440\u0430\u0437\u043F\u043E\u0437\u043D\u0430\u0442${o.keys.length > 1 ? "\u0438" : ""} \u043A\u043B\u044E\u0447${o.keys.length > 1 ? "\u043E\u0432\u0435" : ""}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043A\u043B\u044E\u0447 \u0432 ${o.origin}`;
          case "invalid_union":
            return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
          case "invalid_element":
            return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 \u0432 ${o.origin}`;
          default:
            return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
        }
      };
    };
  });
function bmn() {
  return { localeError: oss() };
}
var oss,
  Amn = j(() => {
    Yi();
    oss = () => {
      let t = {
        string: { unit: "car\xE0cters", verb: "contenir" },
        file: { unit: "bytes", verb: "contenir" },
        array: { unit: "elements", verb: "contenir" },
        set: { unit: "elements", verb: "contenir" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "entrada",
          email: "adre\xE7a electr\xF2nica",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "data i hora ISO",
          date: "data ISO",
          time: "hora ISO",
          duration: "durada ISO",
          ipv4: "adre\xE7a IPv4",
          ipv6: "adre\xE7a IPv6",
          cidrv4: "rang IPv4",
          cidrv6: "rang IPv6",
          base64: "cadena codificada en base64",
          base64url: "cadena codificada en base64url",
          json_string: "cadena JSON",
          e164: "n\xFAmero E.164",
          jwt: "JWT",
          template_literal: "entrada",
        },
        n = { nan: "NaN" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Tipus inv\xE0lid: s'esperava instanceof ${o.expected}, s'ha rebut ${u}`
              : `Tipus inv\xE0lid: s'esperava ${s}, s'ha rebut ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Valor inv\xE0lid: s'esperava ${Zr(o.values[0])}`
              : `Opci\xF3 inv\xE0lida: s'esperava una de ${sr(o.values, " o ")}`;
          case "too_big": {
            let s = o.inclusive ? "com a m\xE0xim" : "menys de",
              a = e(o.origin);
            return a
              ? `Massa gran: s'esperava que ${o.origin ?? "el valor"} contingu\xE9s ${s} ${o.maximum.toString()} ${a.unit ?? "elements"}`
              : `Massa gran: s'esperava que ${o.origin ?? "el valor"} fos ${s} ${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? "com a m\xEDnim" : "m\xE9s de",
              a = e(o.origin);
            return a
              ? `Massa petit: s'esperava que ${o.origin} contingu\xE9s ${s} ${o.minimum.toString()} ${a.unit}`
              : `Massa petit: s'esperava que ${o.origin} fos ${s} ${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Format inv\xE0lid: ha de comen\xE7ar amb "${s.prefix}"`
              : s.format === "ends_with"
                ? `Format inv\xE0lid: ha d'acabar amb "${s.suffix}"`
                : s.format === "includes"
                  ? `Format inv\xE0lid: ha d'incloure "${s.includes}"`
                  : s.format === "regex"
                    ? `Format inv\xE0lid: ha de coincidir amb el patr\xF3 ${s.pattern}`
                    : `Format inv\xE0lid per a ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ${o.divisor}`;
          case "unrecognized_keys":
            return `Clau${o.keys.length > 1 ? "s" : ""} no reconeguda${o.keys.length > 1 ? "s" : ""}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `Clau inv\xE0lida a ${o.origin}`;
          case "invalid_union":
            return "Entrada inv\xE0lida";
          case "invalid_element":
            return `Element inv\xE0lid a ${o.origin}`;
          default:
            return "Entrada inv\xE0lida";
        }
      };
    };
  });
function ymn() {
  return { localeError: sss() };
}
var sss,
  _mn = j(() => {
    Yi();
    sss = () => {
      let t = {
        string: { unit: "znak\u016F", verb: "m\xEDt" },
        file: { unit: "bajt\u016F", verb: "m\xEDt" },
        array: { unit: "prvk\u016F", verb: "m\xEDt" },
        set: { unit: "prvk\u016F", verb: "m\xEDt" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "regul\xE1rn\xED v\xFDraz",
          email: "e-mailov\xE1 adresa",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "datum a \u010Das ve form\xE1tu ISO",
          date: "datum ve form\xE1tu ISO",
          time: "\u010Das ve form\xE1tu ISO",
          duration: "doba trv\xE1n\xED ISO",
          ipv4: "IPv4 adresa",
          ipv6: "IPv6 adresa",
          cidrv4: "rozsah IPv4",
          cidrv6: "rozsah IPv6",
          base64: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64",
          base64url: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64url",
          json_string: "\u0159et\u011Bzec ve form\xE1tu JSON",
          e164: "\u010D\xEDslo E.164",
          jwt: "JWT",
          template_literal: "vstup",
        },
        n = { nan: "NaN", number: "\u010D\xEDslo", string: "\u0159et\u011Bzec", function: "funkce", array: "pole" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no instanceof ${o.expected}, obdr\u017Eeno ${u}`
              : `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${s}, obdr\u017Eeno ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${Zr(o.values[0])}`
              : `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${o.origin ?? "hodnota"} mus\xED m\xEDt ${s}${o.maximum.toString()} ${a.unit ?? "prvk\u016F"}`
              : `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${o.origin ?? "hodnota"} mus\xED b\xFDt ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${o.origin ?? "hodnota"} mus\xED m\xEDt ${s}${o.minimum.toString()} ${a.unit ?? "prvk\u016F"}`
              : `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${o.origin ?? "hodnota"} mus\xED b\xFDt ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "${s.prefix}"`
              : s.format === "ends_with"
                ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "${s.suffix}"`
                : s.format === "includes"
                  ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "${s.includes}"`
                  : s.format === "regex"
                    ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ${s.pattern}`
                    : `Neplatn\xFD form\xE1t ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ${o.divisor}`;
          case "unrecognized_keys":
            return `Nezn\xE1m\xE9 kl\xED\u010De: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `Neplatn\xFD kl\xED\u010D v ${o.origin}`;
          case "invalid_union":
            return "Neplatn\xFD vstup";
          case "invalid_element":
            return `Neplatn\xE1 hodnota v ${o.origin}`;
          default:
            return "Neplatn\xFD vstup";
        }
      };
    };
  });
function Emn() {
  return { localeError: ass() };
}
var ass,
  vmn = j(() => {
    Yi();
    ass = () => {
      let t = {
        string: { unit: "tegn", verb: "havde" },
        file: { unit: "bytes", verb: "havde" },
        array: { unit: "elementer", verb: "indeholdt" },
        set: { unit: "elementer", verb: "indeholdt" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "input",
          email: "e-mailadresse",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO dato- og klokkesl\xE6t",
          date: "ISO-dato",
          time: "ISO-klokkesl\xE6t",
          duration: "ISO-varighed",
          ipv4: "IPv4-omr\xE5de",
          ipv6: "IPv6-omr\xE5de",
          cidrv4: "IPv4-spektrum",
          cidrv6: "IPv6-spektrum",
          base64: "base64-kodet streng",
          base64url: "base64url-kodet streng",
          json_string: "JSON-streng",
          e164: "E.164-nummer",
          jwt: "JWT",
          template_literal: "input",
        },
        n = {
          nan: "NaN",
          string: "streng",
          number: "tal",
          boolean: "boolean",
          array: "liste",
          object: "objekt",
          set: "s\xE6t",
          file: "fil",
        };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Ugyldigt input: forventede instanceof ${o.expected}, fik ${u}`
              : `Ugyldigt input: forventede ${s}, fik ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Ugyldig v\xE6rdi: forventede ${Zr(o.values[0])}`
              : `Ugyldigt valg: forventede en af f\xF8lgende ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin),
              u = n[o.origin] ?? o.origin;
            return a
              ? `For stor: forventede ${u ?? "value"} ${a.verb} ${s} ${o.maximum.toString()} ${a.unit ?? "elementer"}`
              : `For stor: forventede ${u ?? "value"} havde ${s} ${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin),
              u = n[o.origin] ?? o.origin;
            return a
              ? `For lille: forventede ${u} ${a.verb} ${s} ${o.minimum.toString()} ${a.unit}`
              : `For lille: forventede ${u} havde ${s} ${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Ugyldig streng: skal starte med "${s.prefix}"`
              : s.format === "ends_with"
                ? `Ugyldig streng: skal ende med "${s.suffix}"`
                : s.format === "includes"
                  ? `Ugyldig streng: skal indeholde "${s.includes}"`
                  : s.format === "regex"
                    ? `Ugyldig streng: skal matche m\xF8nsteret ${s.pattern}`
                    : `Ugyldig ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `Ugyldigt tal: skal v\xE6re deleligt med ${o.divisor}`;
          case "unrecognized_keys":
            return `${o.keys.length > 1 ? "Ukendte n\xF8gler" : "Ukendt n\xF8gle"}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `Ugyldig n\xF8gle i ${o.origin}`;
          case "invalid_union":
            return "Ugyldigt input: matcher ingen af de tilladte typer";
          case "invalid_element":
            return `Ugyldig v\xE6rdi i ${o.origin}`;
          default:
            return "Ugyldigt input";
        }
      };
    };
  });
function Cmn() {
  return { localeError: uss() };
}
var uss,
  Smn = j(() => {
    Yi();
    uss = () => {
      let t = {
        string: { unit: "Zeichen", verb: "zu haben" },
        file: { unit: "Bytes", verb: "zu haben" },
        array: { unit: "Elemente", verb: "zu haben" },
        set: { unit: "Elemente", verb: "zu haben" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "Eingabe",
          email: "E-Mail-Adresse",
          url: "URL",
          emoji: "Emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO-Datum und -Uhrzeit",
          date: "ISO-Datum",
          time: "ISO-Uhrzeit",
          duration: "ISO-Dauer",
          ipv4: "IPv4-Adresse",
          ipv6: "IPv6-Adresse",
          cidrv4: "IPv4-Bereich",
          cidrv6: "IPv6-Bereich",
          base64: "Base64-codierter String",
          base64url: "Base64-URL-codierter String",
          json_string: "JSON-String",
          e164: "E.164-Nummer",
          jwt: "JWT",
          template_literal: "Eingabe",
        },
        n = { nan: "NaN", number: "Zahl", array: "Array" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Ung\xFCltige Eingabe: erwartet instanceof ${o.expected}, erhalten ${u}`
              : `Ung\xFCltige Eingabe: erwartet ${s}, erhalten ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Ung\xFCltige Eingabe: erwartet ${Zr(o.values[0])}`
              : `Ung\xFCltige Option: erwartet eine von ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `Zu gro\xDF: erwartet, dass ${o.origin ?? "Wert"} ${s}${o.maximum.toString()} ${a.unit ?? "Elemente"} hat`
              : `Zu gro\xDF: erwartet, dass ${o.origin ?? "Wert"} ${s}${o.maximum.toString()} ist`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `Zu klein: erwartet, dass ${o.origin} ${s}${o.minimum.toString()} ${a.unit} hat`
              : `Zu klein: erwartet, dass ${o.origin} ${s}${o.minimum.toString()} ist`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Ung\xFCltiger String: muss mit "${s.prefix}" beginnen`
              : s.format === "ends_with"
                ? `Ung\xFCltiger String: muss mit "${s.suffix}" enden`
                : s.format === "includes"
                  ? `Ung\xFCltiger String: muss "${s.includes}" enthalten`
                  : s.format === "regex"
                    ? `Ung\xFCltiger String: muss dem Muster ${s.pattern} entsprechen`
                    : `Ung\xFCltig: ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `Ung\xFCltige Zahl: muss ein Vielfaches von ${o.divisor} sein`;
          case "unrecognized_keys":
            return `${o.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `Ung\xFCltiger Schl\xFCssel in ${o.origin}`;
          case "invalid_union":
            return "Ung\xFCltige Eingabe";
          case "invalid_element":
            return `Ung\xFCltiger Wert in ${o.origin}`;
          default:
            return "Ung\xFCltige Eingabe";
        }
      };
    };
  });
function wVe() {
  return { localeError: css() };
}
var css,
  yPt = j(() => {
    Yi();
    css = () => {
      let t = {
        string: { unit: "characters", verb: "to have" },
        file: { unit: "bytes", verb: "to have" },
        array: { unit: "items", verb: "to have" },
        set: { unit: "items", verb: "to have" },
        map: { unit: "entries", verb: "to have" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "input",
          email: "email address",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO datetime",
          date: "ISO date",
          time: "ISO time",
          duration: "ISO duration",
          ipv4: "IPv4 address",
          ipv6: "IPv6 address",
          mac: "MAC address",
          cidrv4: "IPv4 range",
          cidrv6: "IPv6 range",
          base64: "base64-encoded string",
          base64url: "base64url-encoded string",
          json_string: "JSON string",
          e164: "E.164 number",
          jwt: "JWT",
          template_literal: "input",
        },
        n = { nan: "NaN" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return `Invalid input: expected ${s}, received ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Invalid input: expected ${Zr(o.values[0])}`
              : `Invalid option: expected one of ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `Too big: expected ${o.origin ?? "value"} to have ${s}${o.maximum.toString()} ${a.unit ?? "elements"}`
              : `Too big: expected ${o.origin ?? "value"} to be ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `Too small: expected ${o.origin} to have ${s}${o.minimum.toString()} ${a.unit}`
              : `Too small: expected ${o.origin} to be ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Invalid string: must start with "${s.prefix}"`
              : s.format === "ends_with"
                ? `Invalid string: must end with "${s.suffix}"`
                : s.format === "includes"
                  ? `Invalid string: must include "${s.includes}"`
                  : s.format === "regex"
                    ? `Invalid string: must match pattern ${s.pattern}`
                    : `Invalid ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `Invalid number: must be a multiple of ${o.divisor}`;
          case "unrecognized_keys":
            return `Unrecognized key${o.keys.length > 1 ? "s" : ""}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `Invalid key in ${o.origin}`;
          case "invalid_union":
            return "Invalid input";
          case "invalid_element":
            return `Invalid value in ${o.origin}`;
          default:
            return "Invalid input";
        }
      };
    };
  });
function wmn() {
  return { localeError: lss() };
}
var lss,
  xmn = j(() => {
    Yi();
    lss = () => {
      let t = {
        string: { unit: "karaktrojn", verb: "havi" },
        file: { unit: "bajtojn", verb: "havi" },
        array: { unit: "elementojn", verb: "havi" },
        set: { unit: "elementojn", verb: "havi" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "enigo",
          email: "retadreso",
          url: "URL",
          emoji: "emo\u011Dio",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO-datotempo",
          date: "ISO-dato",
          time: "ISO-tempo",
          duration: "ISO-da\u016Dro",
          ipv4: "IPv4-adreso",
          ipv6: "IPv6-adreso",
          cidrv4: "IPv4-rango",
          cidrv6: "IPv6-rango",
          base64: "64-ume kodita karaktraro",
          base64url: "URL-64-ume kodita karaktraro",
          json_string: "JSON-karaktraro",
          e164: "E.164-nombro",
          jwt: "JWT",
          template_literal: "enigo",
        },
        n = { nan: "NaN", number: "nombro", array: "tabelo", null: "senvalora" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Nevalida enigo: atendi\u011Dis instanceof ${o.expected}, ricevi\u011Dis ${u}`
              : `Nevalida enigo: atendi\u011Dis ${s}, ricevi\u011Dis ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Nevalida enigo: atendi\u011Dis ${Zr(o.values[0])}`
              : `Nevalida opcio: atendi\u011Dis unu el ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `Tro granda: atendi\u011Dis ke ${o.origin ?? "valoro"} havu ${s}${o.maximum.toString()} ${a.unit ?? "elementojn"}`
              : `Tro granda: atendi\u011Dis ke ${o.origin ?? "valoro"} havu ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `Tro malgranda: atendi\u011Dis ke ${o.origin} havu ${s}${o.minimum.toString()} ${a.unit}`
              : `Tro malgranda: atendi\u011Dis ke ${o.origin} estu ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Nevalida karaktraro: devas komenci\u011Di per "${s.prefix}"`
              : s.format === "ends_with"
                ? `Nevalida karaktraro: devas fini\u011Di per "${s.suffix}"`
                : s.format === "includes"
                  ? `Nevalida karaktraro: devas inkluzivi "${s.includes}"`
                  : s.format === "regex"
                    ? `Nevalida karaktraro: devas kongrui kun la modelo ${s.pattern}`
                    : `Nevalida ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `Nevalida nombro: devas esti oblo de ${o.divisor}`;
          case "unrecognized_keys":
            return `Nekonata${o.keys.length > 1 ? "j" : ""} \u015Dlosilo${o.keys.length > 1 ? "j" : ""}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `Nevalida \u015Dlosilo en ${o.origin}`;
          case "invalid_union":
            return "Nevalida enigo";
          case "invalid_element":
            return `Nevalida valoro en ${o.origin}`;
          default:
            return "Nevalida enigo";
        }
      };
    };
  });
function Tmn() {
  return { localeError: mss() };
}
var mss,
  Dmn = j(() => {
    Yi();
    mss = () => {
      let t = {
        string: { unit: "caracteres", verb: "tener" },
        file: { unit: "bytes", verb: "tener" },
        array: { unit: "elementos", verb: "tener" },
        set: { unit: "elementos", verb: "tener" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "entrada",
          email: "direcci\xF3n de correo electr\xF3nico",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "fecha y hora ISO",
          date: "fecha ISO",
          time: "hora ISO",
          duration: "duraci\xF3n ISO",
          ipv4: "direcci\xF3n IPv4",
          ipv6: "direcci\xF3n IPv6",
          cidrv4: "rango IPv4",
          cidrv6: "rango IPv6",
          base64: "cadena codificada en base64",
          base64url: "URL codificada en base64",
          json_string: "cadena JSON",
          e164: "n\xFAmero E.164",
          jwt: "JWT",
          template_literal: "entrada",
        },
        n = {
          nan: "NaN",
          string: "texto",
          number: "n\xFAmero",
          boolean: "booleano",
          array: "arreglo",
          object: "objeto",
          set: "conjunto",
          file: "archivo",
          date: "fecha",
          bigint: "n\xFAmero grande",
          symbol: "s\xEDmbolo",
          undefined: "indefinido",
          null: "nulo",
          function: "funci\xF3n",
          map: "mapa",
          record: "registro",
          tuple: "tupla",
          enum: "enumeraci\xF3n",
          union: "uni\xF3n",
          literal: "literal",
          promise: "promesa",
          void: "vac\xEDo",
          never: "nunca",
          unknown: "desconocido",
          any: "cualquiera",
        };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Entrada inv\xE1lida: se esperaba instanceof ${o.expected}, recibido ${u}`
              : `Entrada inv\xE1lida: se esperaba ${s}, recibido ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Entrada inv\xE1lida: se esperaba ${Zr(o.values[0])}`
              : `Opci\xF3n inv\xE1lida: se esperaba una de ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin),
              u = n[o.origin] ?? o.origin;
            return a
              ? `Demasiado grande: se esperaba que ${u ?? "valor"} tuviera ${s}${o.maximum.toString()} ${a.unit ?? "elementos"}`
              : `Demasiado grande: se esperaba que ${u ?? "valor"} fuera ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin),
              u = n[o.origin] ?? o.origin;
            return a
              ? `Demasiado peque\xF1o: se esperaba que ${u} tuviera ${s}${o.minimum.toString()} ${a.unit}`
              : `Demasiado peque\xF1o: se esperaba que ${u} fuera ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Cadena inv\xE1lida: debe comenzar con "${s.prefix}"`
              : s.format === "ends_with"
                ? `Cadena inv\xE1lida: debe terminar en "${s.suffix}"`
                : s.format === "includes"
                  ? `Cadena inv\xE1lida: debe incluir "${s.includes}"`
                  : s.format === "regex"
                    ? `Cadena inv\xE1lida: debe coincidir con el patr\xF3n ${s.pattern}`
                    : `Inv\xE1lido ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `N\xFAmero inv\xE1lido: debe ser m\xFAltiplo de ${o.divisor}`;
          case "unrecognized_keys":
            return `Llave${o.keys.length > 1 ? "s" : ""} desconocida${o.keys.length > 1 ? "s" : ""}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `Llave inv\xE1lida en ${n[o.origin] ?? o.origin}`;
          case "invalid_union":
            return "Entrada inv\xE1lida";
          case "invalid_element":
            return `Valor inv\xE1lido en ${n[o.origin] ?? o.origin}`;
          default:
            return "Entrada inv\xE1lida";
        }
      };
    };
  });
function Imn() {
  return { localeError: dss() };
}
var dss,
  Rmn = j(() => {
    Yi();
    dss = () => {
      let t = {
        string: {
          unit: "\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631",
          verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
        },
        file: { unit: "\u0628\u0627\u06CC\u062A", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
        array: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
        set: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "\u0648\u0631\u0648\u062F\u06CC",
          email: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
          url: "URL",
          emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
          date: "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0632\u0648",
          time: "\u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
          duration: "\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
          ipv4: "IPv4 \u0622\u062F\u0631\u0633",
          ipv6: "IPv6 \u0622\u062F\u0631\u0633",
          cidrv4: "IPv4 \u062F\u0627\u0645\u0646\u0647",
          cidrv6: "IPv6 \u062F\u0627\u0645\u0646\u0647",
          base64: "base64-encoded \u0631\u0634\u062A\u0647",
          base64url: "base64url-encoded \u0631\u0634\u062A\u0647",
          json_string: "JSON \u0631\u0634\u062A\u0647",
          e164: "E.164 \u0639\u062F\u062F",
          jwt: "JWT",
          template_literal: "\u0648\u0631\u0648\u062F\u06CC",
        },
        n = { nan: "NaN", number: "\u0639\u062F\u062F", array: "\u0622\u0631\u0627\u06CC\u0647" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A instanceof ${o.expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${u} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`
              : `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${s} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${u} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${Zr(o.values[0])} \u0645\u06CC\u200C\u0628\u0648\u062F`
              : `\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ${sr(o.values, "|")} \u0645\u06CC\u200C\u0628\u0648\u062F`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${o.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${s}${o.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0635\u0631"} \u0628\u0627\u0634\u062F`
              : `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${o.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${s}${o.maximum.toString()} \u0628\u0627\u0634\u062F`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${o.origin} \u0628\u0627\u06CC\u062F ${s}${o.minimum.toString()} ${a.unit} \u0628\u0627\u0634\u062F`
              : `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${o.origin} \u0628\u0627\u06CC\u062F ${s}${o.minimum.toString()} \u0628\u0627\u0634\u062F`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${s.prefix}" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F`
              : s.format === "ends_with"
                ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${s.suffix}" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F`
                : s.format === "includes"
                  ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 "${s.includes}" \u0628\u0627\u0634\u062F`
                  : s.format === "regex"
                    ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC ${s.pattern} \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F`
                    : `${r[s.format] ?? o.format} \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
          }
          case "not_multiple_of":
            return `\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 ${o.divisor} \u0628\u0627\u0634\u062F`;
          case "unrecognized_keys":
            return `\u06A9\u0644\u06CC\u062F${o.keys.length > 1 ? "\u0647\u0627\u06CC" : ""} \u0646\u0627\u0634\u0646\u0627\u0633: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 ${o.origin}`;
          case "invalid_union":
            return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
          case "invalid_element":
            return `\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 ${o.origin}`;
          default:
            return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
        }
      };
    };
  });
function kmn() {
  return { localeError: fss() };
}
var fss,
  Omn = j(() => {
    Yi();
    fss = () => {
      let t = {
        string: { unit: "merkki\xE4", subject: "merkkijonon" },
        file: { unit: "tavua", subject: "tiedoston" },
        array: { unit: "alkiota", subject: "listan" },
        set: { unit: "alkiota", subject: "joukon" },
        number: { unit: "", subject: "luvun" },
        bigint: { unit: "", subject: "suuren kokonaisluvun" },
        int: { unit: "", subject: "kokonaisluvun" },
        date: { unit: "", subject: "p\xE4iv\xE4m\xE4\xE4r\xE4n" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "s\xE4\xE4nn\xF6llinen lauseke",
          email: "s\xE4hk\xF6postiosoite",
          url: "URL-osoite",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO-aikaleima",
          date: "ISO-p\xE4iv\xE4m\xE4\xE4r\xE4",
          time: "ISO-aika",
          duration: "ISO-kesto",
          ipv4: "IPv4-osoite",
          ipv6: "IPv6-osoite",
          cidrv4: "IPv4-alue",
          cidrv6: "IPv6-alue",
          base64: "base64-koodattu merkkijono",
          base64url: "base64url-koodattu merkkijono",
          json_string: "JSON-merkkijono",
          e164: "E.164-luku",
          jwt: "JWT",
          template_literal: "templaattimerkkijono",
        },
        n = { nan: "NaN" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Virheellinen tyyppi: odotettiin instanceof ${o.expected}, oli ${u}`
              : `Virheellinen tyyppi: odotettiin ${s}, oli ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Virheellinen sy\xF6te: t\xE4ytyy olla ${Zr(o.values[0])}`
              : `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `Liian suuri: ${a.subject} t\xE4ytyy olla ${s}${o.maximum.toString()} ${a.unit}`.trim()
              : `Liian suuri: arvon t\xE4ytyy olla ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `Liian pieni: ${a.subject} t\xE4ytyy olla ${s}${o.minimum.toString()} ${a.unit}`.trim()
              : `Liian pieni: arvon t\xE4ytyy olla ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Virheellinen sy\xF6te: t\xE4ytyy alkaa "${s.prefix}"`
              : s.format === "ends_with"
                ? `Virheellinen sy\xF6te: t\xE4ytyy loppua "${s.suffix}"`
                : s.format === "includes"
                  ? `Virheellinen sy\xF6te: t\xE4ytyy sis\xE4lt\xE4\xE4 "${s.includes}"`
                  : s.format === "regex"
                    ? `Virheellinen sy\xF6te: t\xE4ytyy vastata s\xE4\xE4nn\xF6llist\xE4 lauseketta ${s.pattern}`
                    : `Virheellinen ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `Virheellinen luku: t\xE4ytyy olla luvun ${o.divisor} monikerta`;
          case "unrecognized_keys":
            return `${o.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return "Virheellinen avain tietueessa";
          case "invalid_union":
            return "Virheellinen unioni";
          case "invalid_element":
            return "Virheellinen arvo joukossa";
          default:
            return "Virheellinen sy\xF6te";
        }
      };
    };
  });
function Nmn() {
  return { localeError: pss() };
}
var pss,
  Pmn = j(() => {
    Yi();
    pss = () => {
      let t = {
        string: { unit: "caract\xE8res", verb: "avoir" },
        file: { unit: "octets", verb: "avoir" },
        array: { unit: "\xE9l\xE9ments", verb: "avoir" },
        set: { unit: "\xE9l\xE9ments", verb: "avoir" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "entr\xE9e",
          email: "adresse e-mail",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "date et heure ISO",
          date: "date ISO",
          time: "heure ISO",
          duration: "dur\xE9e ISO",
          ipv4: "adresse IPv4",
          ipv6: "adresse IPv6",
          cidrv4: "plage IPv4",
          cidrv6: "plage IPv6",
          base64: "cha\xEEne encod\xE9e en base64",
          base64url: "cha\xEEne encod\xE9e en base64url",
          json_string: "cha\xEEne JSON",
          e164: "num\xE9ro E.164",
          jwt: "JWT",
          template_literal: "entr\xE9e",
        },
        n = { nan: "NaN", number: "nombre", array: "tableau" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Entr\xE9e invalide : instanceof ${o.expected} attendu, ${u} re\xE7u`
              : `Entr\xE9e invalide : ${s} attendu, ${u} re\xE7u`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Entr\xE9e invalide : ${Zr(o.values[0])} attendu`
              : `Option invalide : une valeur parmi ${sr(o.values, "|")} attendue`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `Trop grand : ${o.origin ?? "valeur"} doit ${a.verb} ${s}${o.maximum.toString()} ${a.unit ?? "\xE9l\xE9ment(s)"}`
              : `Trop grand : ${o.origin ?? "valeur"} doit \xEAtre ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `Trop petit : ${o.origin} doit ${a.verb} ${s}${o.minimum.toString()} ${a.unit}`
              : `Trop petit : ${o.origin} doit \xEAtre ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Cha\xEEne invalide : doit commencer par "${s.prefix}"`
              : s.format === "ends_with"
                ? `Cha\xEEne invalide : doit se terminer par "${s.suffix}"`
                : s.format === "includes"
                  ? `Cha\xEEne invalide : doit inclure "${s.includes}"`
                  : s.format === "regex"
                    ? `Cha\xEEne invalide : doit correspondre au mod\xE8le ${s.pattern}`
                    : `${r[s.format] ?? o.format} invalide`;
          }
          case "not_multiple_of":
            return `Nombre invalide : doit \xEAtre un multiple de ${o.divisor}`;
          case "unrecognized_keys":
            return `Cl\xE9${o.keys.length > 1 ? "s" : ""} non reconnue${o.keys.length > 1 ? "s" : ""} : ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `Cl\xE9 invalide dans ${o.origin}`;
          case "invalid_union":
            return "Entr\xE9e invalide";
          case "invalid_element":
            return `Valeur invalide dans ${o.origin}`;
          default:
            return "Entr\xE9e invalide";
        }
      };
    };
  });
function Bmn() {
  return { localeError: hss() };
}
var hss,
  Lmn = j(() => {
    Yi();
    hss = () => {
      let t = {
        string: { unit: "caract\xE8res", verb: "avoir" },
        file: { unit: "octets", verb: "avoir" },
        array: { unit: "\xE9l\xE9ments", verb: "avoir" },
        set: { unit: "\xE9l\xE9ments", verb: "avoir" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "entr\xE9e",
          email: "adresse courriel",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "date-heure ISO",
          date: "date ISO",
          time: "heure ISO",
          duration: "dur\xE9e ISO",
          ipv4: "adresse IPv4",
          ipv6: "adresse IPv6",
          cidrv4: "plage IPv4",
          cidrv6: "plage IPv6",
          base64: "cha\xEEne encod\xE9e en base64",
          base64url: "cha\xEEne encod\xE9e en base64url",
          json_string: "cha\xEEne JSON",
          e164: "num\xE9ro E.164",
          jwt: "JWT",
          template_literal: "entr\xE9e",
        },
        n = { nan: "NaN" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Entr\xE9e invalide : attendu instanceof ${o.expected}, re\xE7u ${u}`
              : `Entr\xE9e invalide : attendu ${s}, re\xE7u ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Entr\xE9e invalide : attendu ${Zr(o.values[0])}`
              : `Option invalide : attendu l'une des valeurs suivantes ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "\u2264" : "<",
              a = e(o.origin);
            return a
              ? `Trop grand : attendu que ${o.origin ?? "la valeur"} ait ${s}${o.maximum.toString()} ${a.unit}`
              : `Trop grand : attendu que ${o.origin ?? "la valeur"} soit ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? "\u2265" : ">",
              a = e(o.origin);
            return a
              ? `Trop petit : attendu que ${o.origin} ait ${s}${o.minimum.toString()} ${a.unit}`
              : `Trop petit : attendu que ${o.origin} soit ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Cha\xEEne invalide : doit commencer par "${s.prefix}"`
              : s.format === "ends_with"
                ? `Cha\xEEne invalide : doit se terminer par "${s.suffix}"`
                : s.format === "includes"
                  ? `Cha\xEEne invalide : doit inclure "${s.includes}"`
                  : s.format === "regex"
                    ? `Cha\xEEne invalide : doit correspondre au motif ${s.pattern}`
                    : `${r[s.format] ?? o.format} invalide`;
          }
          case "not_multiple_of":
            return `Nombre invalide : doit \xEAtre un multiple de ${o.divisor}`;
          case "unrecognized_keys":
            return `Cl\xE9${o.keys.length > 1 ? "s" : ""} non reconnue${o.keys.length > 1 ? "s" : ""} : ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `Cl\xE9 invalide dans ${o.origin}`;
          case "invalid_union":
            return "Entr\xE9e invalide";
          case "invalid_element":
            return `Valeur invalide dans ${o.origin}`;
          default:
            return "Entr\xE9e invalide";
        }
      };
    };
  });
function Mmn() {
  return { localeError: gss() };
}
var gss,
  Fmn = j(() => {
    Yi();
    gss = () => {
      let t = {
          string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA", gender: "f" },
          number: { label: "\u05DE\u05E1\u05E4\u05E8", gender: "m" },
          boolean: { label: "\u05E2\u05E8\u05DA \u05D1\u05D5\u05DC\u05D9\u05D0\u05E0\u05D9", gender: "m" },
          bigint: { label: "BigInt", gender: "m" },
          date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", gender: "m" },
          array: { label: "\u05DE\u05E2\u05E8\u05DA", gender: "m" },
          object: { label: "\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8", gender: "m" },
          null: { label: "\u05E2\u05E8\u05DA \u05E8\u05D9\u05E7 (null)", gender: "m" },
          undefined: {
            label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05DE\u05D5\u05D2\u05D3\u05E8 (undefined)",
            gender: "m",
          },
          symbol: { label: "\u05E1\u05D9\u05DE\u05D1\u05D5\u05DC (Symbol)", gender: "m" },
          function: { label: "\u05E4\u05D5\u05E0\u05E7\u05E6\u05D9\u05D4", gender: "f" },
          map: { label: "\u05DE\u05E4\u05D4 (Map)", gender: "f" },
          set: { label: "\u05E7\u05D1\u05D5\u05E6\u05D4 (Set)", gender: "f" },
          file: { label: "\u05E7\u05D5\u05D1\u05E5", gender: "m" },
          promise: { label: "Promise", gender: "m" },
          NaN: { label: "NaN", gender: "m" },
          unknown: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2", gender: "m" },
          value: { label: "\u05E2\u05E8\u05DA", gender: "m" },
        },
        e = {
          string: {
            unit: "\u05EA\u05D5\u05D5\u05D9\u05DD",
            shortLabel: "\u05E7\u05E6\u05E8",
            longLabel: "\u05D0\u05E8\u05D5\u05DA",
          },
          file: {
            unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD",
            shortLabel: "\u05E7\u05D8\u05DF",
            longLabel: "\u05D2\u05D3\u05D5\u05DC",
          },
          array: {
            unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
            shortLabel: "\u05E7\u05D8\u05DF",
            longLabel: "\u05D2\u05D3\u05D5\u05DC",
          },
          set: {
            unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
            shortLabel: "\u05E7\u05D8\u05DF",
            longLabel: "\u05D2\u05D3\u05D5\u05DC",
          },
          number: { unit: "", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" },
        },
        r = (m) => (m ? t[m] : void 0),
        n = (m) => {
          let d = r(m);
          return d ? d.label : (m ?? t.unknown.label);
        },
        o = (m) => `\u05D4${n(m)}`,
        s = (m) =>
          (r(m)?.gender ?? "m") === "f"
            ? "\u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA"
            : "\u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA",
        a = (m) => (m ? (e[m] ?? null) : null),
        u = {
          regex: { label: "\u05E7\u05DC\u05D8", gender: "m" },
          email: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC", gender: "f" },
          url: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA", gender: "f" },
          emoji: { label: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9", gender: "m" },
          uuid: { label: "UUID", gender: "m" },
          nanoid: { label: "nanoid", gender: "m" },
          guid: { label: "GUID", gender: "m" },
          cuid: { label: "cuid", gender: "m" },
          cuid2: { label: "cuid2", gender: "m" },
          ulid: { label: "ULID", gender: "m" },
          xid: { label: "XID", gender: "m" },
          ksuid: { label: "KSUID", gender: "m" },
          datetime: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO", gender: "m" },
          date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO", gender: "m" },
          time: { label: "\u05D6\u05DE\u05DF ISO", gender: "m" },
          duration: { label: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO", gender: "m" },
          ipv4: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4", gender: "f" },
          ipv6: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6", gender: "f" },
          cidrv4: { label: "\u05D8\u05D5\u05D5\u05D7 IPv4", gender: "m" },
          cidrv6: { label: "\u05D8\u05D5\u05D5\u05D7 IPv6", gender: "m" },
          base64: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64", gender: "f" },
          base64url: {
            label:
              "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA",
            gender: "f",
          },
          json_string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON", gender: "f" },
          e164: { label: "\u05DE\u05E1\u05E4\u05E8 E.164", gender: "m" },
          jwt: { label: "JWT", gender: "m" },
          ends_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
          includes: { label: "\u05E7\u05DC\u05D8", gender: "m" },
          lowercase: { label: "\u05E7\u05DC\u05D8", gender: "m" },
          starts_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
          uppercase: { label: "\u05E7\u05DC\u05D8", gender: "m" },
        },
        c = { nan: "NaN" };
      return (m) => {
        switch (m.code) {
          case "invalid_type": {
            let d = m.expected,
              f = c[d ?? ""] ?? n(d),
              p = on(m.input),
              h = c[p] ?? t[p]?.label ?? p;
            return /^[A-Z]/.test(m.expected)
              ? `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA instanceof ${m.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${h}`
              : `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${f}, \u05D4\u05EA\u05E7\u05D1\u05DC ${h}`;
          }
          case "invalid_value": {
            if (m.values.length === 1)
              return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05E2\u05E8\u05DA \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA ${Zr(m.values[0])}`;
            let d = m.values.map((h) => Zr(h));
            if (m.values.length === 2)
              return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${d[0]} \u05D0\u05D5 ${d[1]}`;
            let f = d[d.length - 1];
            return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${d.slice(0, -1).join(", ")} \u05D0\u05D5 ${f}`;
          }
          case "too_big": {
            let d = a(m.origin),
              f = o(m.origin ?? "value");
            if (m.origin === "string")
              return `${d?.longLabel ?? "\u05D0\u05E8\u05D5\u05DA"} \u05DE\u05D3\u05D9: ${f} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${m.maximum.toString()} ${d?.unit ?? ""} ${m.inclusive ? "\u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA" : "\u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8"}`.trim();
            if (m.origin === "number") {
              let g = m.inclusive
                ? `\u05E7\u05D8\u05DF \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${m.maximum}`
                : `\u05E7\u05D8\u05DF \u05DE-${m.maximum}`;
              return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${f} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${g}`;
            }
            if (m.origin === "array" || m.origin === "set") {
              let g = m.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA",
                b = m.inclusive
                  ? `${m.maximum} ${d?.unit ?? ""} \u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA`
                  : `\u05E4\u05D7\u05D5\u05EA \u05DE-${m.maximum} ${d?.unit ?? ""}`;
              return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${f} ${g} \u05DC\u05D4\u05DB\u05D9\u05DC ${b}`.trim();
            }
            let p = m.inclusive ? "<=" : "<",
              h = s(m.origin ?? "value");
            return d?.unit
              ? `${d.longLabel} \u05DE\u05D3\u05D9: ${f} ${h} ${p}${m.maximum.toString()} ${d.unit}`
              : `${d?.longLabel ?? "\u05D2\u05D3\u05D5\u05DC"} \u05DE\u05D3\u05D9: ${f} ${h} ${p}${m.maximum.toString()}`;
          }
          case "too_small": {
            let d = a(m.origin),
              f = o(m.origin ?? "value");
            if (m.origin === "string")
              return `${d?.shortLabel ?? "\u05E7\u05E6\u05E8"} \u05DE\u05D3\u05D9: ${f} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${m.minimum.toString()} ${d?.unit ?? ""} ${m.inclusive ? "\u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8" : "\u05DC\u05E4\u05D7\u05D5\u05EA"}`.trim();
            if (m.origin === "number") {
              let g = m.inclusive
                ? `\u05D2\u05D3\u05D5\u05DC \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${m.minimum}`
                : `\u05D2\u05D3\u05D5\u05DC \u05DE-${m.minimum}`;
              return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${f} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${g}`;
            }
            if (m.origin === "array" || m.origin === "set") {
              let g = m.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA";
              if (m.minimum === 1 && m.inclusive) {
                let A =
                  (m.origin === "set", "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3");
                return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${f} ${g} \u05DC\u05D4\u05DB\u05D9\u05DC ${A}`;
              }
              let b = m.inclusive
                ? `${m.minimum} ${d?.unit ?? ""} \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8`
                : `\u05D9\u05D5\u05EA\u05E8 \u05DE-${m.minimum} ${d?.unit ?? ""}`;
              return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${f} ${g} \u05DC\u05D4\u05DB\u05D9\u05DC ${b}`.trim();
            }
            let p = m.inclusive ? ">=" : ">",
              h = s(m.origin ?? "value");
            return d?.unit
              ? `${d.shortLabel} \u05DE\u05D3\u05D9: ${f} ${h} ${p}${m.minimum.toString()} ${d.unit}`
              : `${d?.shortLabel ?? "\u05E7\u05D8\u05DF"} \u05DE\u05D3\u05D9: ${f} ${h} ${p}${m.minimum.toString()}`;
          }
          case "invalid_format": {
            let d = m;
            if (d.format === "starts_with")
              return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1 "${d.prefix}"`;
            if (d.format === "ends_with")
              return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "${d.suffix}"`;
            if (d.format === "includes")
              return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "${d.includes}"`;
            if (d.format === "regex")
              return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ${d.pattern}`;
            let f = u[d.format],
              p = f?.label ?? d.format,
              g = (f?.gender ?? "m") === "f" ? "\u05EA\u05E7\u05D9\u05E0\u05D4" : "\u05EA\u05E7\u05D9\u05DF";
            return `${p} \u05DC\u05D0 ${g}`;
          }
          case "not_multiple_of":
            return `\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ${m.divisor}`;
          case "unrecognized_keys":
            return `\u05DE\u05E4\u05EA\u05D7${m.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${m.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${sr(m.keys, ", ")}`;
          case "invalid_key":
            return "\u05E9\u05D3\u05D4 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8";
          case "invalid_union":
            return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
          case "invalid_element":
            return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${o(m.origin ?? "array")}`;
          default:
            return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
        }
      };
    };
  });
function Umn() {
  return { localeError: bss() };
}
var bss,
  $mn = j(() => {
    Yi();
    bss = () => {
      let t = {
        string: { unit: "karakter", verb: "legyen" },
        file: { unit: "byte", verb: "legyen" },
        array: { unit: "elem", verb: "legyen" },
        set: { unit: "elem", verb: "legyen" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "bemenet",
          email: "email c\xEDm",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO id\u0151b\xE9lyeg",
          date: "ISO d\xE1tum",
          time: "ISO id\u0151",
          duration: "ISO id\u0151intervallum",
          ipv4: "IPv4 c\xEDm",
          ipv6: "IPv6 c\xEDm",
          cidrv4: "IPv4 tartom\xE1ny",
          cidrv6: "IPv6 tartom\xE1ny",
          base64: "base64-k\xF3dolt string",
          base64url: "base64url-k\xF3dolt string",
          json_string: "JSON string",
          e164: "E.164 sz\xE1m",
          jwt: "JWT",
          template_literal: "bemenet",
        },
        n = { nan: "NaN", number: "sz\xE1m", array: "t\xF6mb" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k instanceof ${o.expected}, a kapott \xE9rt\xE9k ${u}`
              : `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${s}, a kapott \xE9rt\xE9k ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${Zr(o.values[0])}`
              : `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `T\xFAl nagy: ${o.origin ?? "\xE9rt\xE9k"} m\xE9rete t\xFAl nagy ${s}${o.maximum.toString()} ${a.unit ?? "elem"}`
              : `T\xFAl nagy: a bemeneti \xE9rt\xE9k ${o.origin ?? "\xE9rt\xE9k"} t\xFAl nagy: ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${o.origin} m\xE9rete t\xFAl kicsi ${s}${o.minimum.toString()} ${a.unit}`
              : `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${o.origin} t\xFAl kicsi ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `\xC9rv\xE9nytelen string: "${s.prefix}" \xE9rt\xE9kkel kell kezd\u0151dnie`
              : s.format === "ends_with"
                ? `\xC9rv\xE9nytelen string: "${s.suffix}" \xE9rt\xE9kkel kell v\xE9gz\u0151dnie`
                : s.format === "includes"
                  ? `\xC9rv\xE9nytelen string: "${s.includes}" \xE9rt\xE9ket kell tartalmaznia`
                  : s.format === "regex"
                    ? `\xC9rv\xE9nytelen string: ${s.pattern} mint\xE1nak kell megfelelnie`
                    : `\xC9rv\xE9nytelen ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `\xC9rv\xE9nytelen sz\xE1m: ${o.divisor} t\xF6bbsz\xF6r\xF6s\xE9nek kell lennie`;
          case "unrecognized_keys":
            return `Ismeretlen kulcs${o.keys.length > 1 ? "s" : ""}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `\xC9rv\xE9nytelen kulcs ${o.origin}`;
          case "invalid_union":
            return "\xC9rv\xE9nytelen bemenet";
          case "invalid_element":
            return `\xC9rv\xE9nytelen \xE9rt\xE9k: ${o.origin}`;
          default:
            return "\xC9rv\xE9nytelen bemenet";
        }
      };
    };
  });
function jmn(t, e, r) {
  return Math.abs(t) === 1 ? e : r;
}
function loe(t) {
  if (!t) return "";
  let e = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"],
    r = t[t.length - 1];
  return t + (e.includes(r) ? "\u0576" : "\u0568");
}
function Qmn() {
  return { localeError: Ass() };
}
var Ass,
  Gmn = j(() => {
    Yi();
    Ass = () => {
      let t = {
        string: {
          unit: { one: "\u0576\u0577\u0561\u0576", many: "\u0576\u0577\u0561\u0576\u0576\u0565\u0580" },
          verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
        },
        file: {
          unit: { one: "\u0562\u0561\u0575\u0569", many: "\u0562\u0561\u0575\u0569\u0565\u0580" },
          verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
        },
        array: {
          unit: { one: "\u057F\u0561\u0580\u0580", many: "\u057F\u0561\u0580\u0580\u0565\u0580" },
          verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
        },
        set: {
          unit: { one: "\u057F\u0561\u0580\u0580", many: "\u057F\u0561\u0580\u0580\u0565\u0580" },
          verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
        },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "\u0574\u0578\u0582\u057F\u0584",
          email: "\u0567\u056C. \u0570\u0561\u057D\u0581\u0565",
          url: "URL",
          emoji: "\u0567\u0574\u0578\u057B\u056B",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E \u0587 \u056A\u0561\u0574",
          date: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E",
          time: "ISO \u056A\u0561\u0574",
          duration: "ISO \u057F\u0587\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576",
          ipv4: "IPv4 \u0570\u0561\u057D\u0581\u0565",
          ipv6: "IPv6 \u0570\u0561\u057D\u0581\u0565",
          cidrv4: "IPv4 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
          cidrv6: "IPv6 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
          base64: "base64 \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
          base64url: "base64url \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
          json_string: "JSON \u057F\u0578\u0572",
          e164: "E.164 \u0570\u0561\u0574\u0561\u0580",
          jwt: "JWT",
          template_literal: "\u0574\u0578\u0582\u057F\u0584",
        },
        n = { nan: "NaN", number: "\u0569\u056B\u057E", array: "\u0566\u0561\u0576\u0563\u057E\u0561\u056E" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 instanceof ${o.expected}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${u}`
              : `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${s}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${Zr(o.values[1])}`
              : `\u054D\u056D\u0561\u056C \u057F\u0561\u0580\u0562\u0565\u0580\u0561\u056F\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 \u0570\u0565\u057F\u0587\u0575\u0561\u056C\u0576\u0565\u0580\u056B\u0581 \u0574\u0565\u056F\u0568\u055D ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            if (a) {
              let u = Number(o.maximum),
                c = jmn(u, a.unit.one, a.unit.many);
              return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${loe(o.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${s}${o.maximum.toString()} ${c}`;
            }
            return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${loe(o.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056C\u056B\u0576\u056B ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            if (a) {
              let u = Number(o.minimum),
                c = jmn(u, a.unit.one, a.unit.many);
              return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${loe(o.origin)} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${s}${o.minimum.toString()} ${c}`;
            }
            return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${loe(o.origin)} \u056C\u056B\u0576\u056B ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057D\u056F\u057D\u057E\u056B "${s.prefix}"-\u0578\u057E`
              : s.format === "ends_with"
                ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0561\u057E\u0561\u0580\u057F\u057E\u056B "${s.suffix}"-\u0578\u057E`
                : s.format === "includes"
                  ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057A\u0561\u0580\u0578\u0582\u0576\u0561\u056F\u056B "${s.includes}"`
                  : s.format === "regex"
                    ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0570\u0561\u0574\u0561\u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576\u056B ${s.pattern} \u0571\u0587\u0561\u0579\u0561\u0583\u056B\u0576`
                    : `\u054D\u056D\u0561\u056C ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `\u054D\u056D\u0561\u056C \u0569\u056B\u057E\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0562\u0561\u0566\u0574\u0561\u057A\u0561\u057F\u056B\u056F \u056C\u056B\u0576\u056B ${o.divisor}-\u056B`;
          case "unrecognized_keys":
            return `\u0549\u0573\u0561\u0576\u0561\u0579\u057E\u0561\u056E \u0562\u0561\u0576\u0561\u056C\u056B${o.keys.length > 1 ? "\u0576\u0565\u0580" : ""}. ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `\u054D\u056D\u0561\u056C \u0562\u0561\u0576\u0561\u056C\u056B ${loe(o.origin)}-\u0578\u0582\u0574`;
          case "invalid_union":
            return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
          case "invalid_element":
            return `\u054D\u056D\u0561\u056C \u0561\u0580\u056A\u0565\u0584 ${loe(o.origin)}-\u0578\u0582\u0574`;
          default:
            return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
        }
      };
    };
  });
function qmn() {
  return { localeError: yss() };
}
var yss,
  Hmn = j(() => {
    Yi();
    yss = () => {
      let t = {
        string: { unit: "karakter", verb: "memiliki" },
        file: { unit: "byte", verb: "memiliki" },
        array: { unit: "item", verb: "memiliki" },
        set: { unit: "item", verb: "memiliki" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "input",
          email: "alamat email",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "tanggal dan waktu format ISO",
          date: "tanggal format ISO",
          time: "jam format ISO",
          duration: "durasi format ISO",
          ipv4: "alamat IPv4",
          ipv6: "alamat IPv6",
          cidrv4: "rentang alamat IPv4",
          cidrv6: "rentang alamat IPv6",
          base64: "string dengan enkode base64",
          base64url: "string dengan enkode base64url",
          json_string: "string JSON",
          e164: "angka E.164",
          jwt: "JWT",
          template_literal: "input",
        },
        n = { nan: "NaN" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Input tidak valid: diharapkan instanceof ${o.expected}, diterima ${u}`
              : `Input tidak valid: diharapkan ${s}, diterima ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Input tidak valid: diharapkan ${Zr(o.values[0])}`
              : `Pilihan tidak valid: diharapkan salah satu dari ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `Terlalu besar: diharapkan ${o.origin ?? "value"} memiliki ${s}${o.maximum.toString()} ${a.unit ?? "elemen"}`
              : `Terlalu besar: diharapkan ${o.origin ?? "value"} menjadi ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `Terlalu kecil: diharapkan ${o.origin} memiliki ${s}${o.minimum.toString()} ${a.unit}`
              : `Terlalu kecil: diharapkan ${o.origin} menjadi ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `String tidak valid: harus dimulai dengan "${s.prefix}"`
              : s.format === "ends_with"
                ? `String tidak valid: harus berakhir dengan "${s.suffix}"`
                : s.format === "includes"
                  ? `String tidak valid: harus menyertakan "${s.includes}"`
                  : s.format === "regex"
                    ? `String tidak valid: harus sesuai pola ${s.pattern}`
                    : `${r[s.format] ?? o.format} tidak valid`;
          }
          case "not_multiple_of":
            return `Angka tidak valid: harus kelipatan dari ${o.divisor}`;
          case "unrecognized_keys":
            return `Kunci tidak dikenali ${o.keys.length > 1 ? "s" : ""}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `Kunci tidak valid di ${o.origin}`;
          case "invalid_union":
            return "Input tidak valid";
          case "invalid_element":
            return `Nilai tidak valid di ${o.origin}`;
          default:
            return "Input tidak valid";
        }
      };
    };
  });
function Vmn() {
  return { localeError: _ss() };
}
var _ss,
  Wmn = j(() => {
    Yi();
    _ss = () => {
      let t = {
        string: { unit: "stafi", verb: "a\xF0 hafa" },
        file: { unit: "b\xE6ti", verb: "a\xF0 hafa" },
        array: { unit: "hluti", verb: "a\xF0 hafa" },
        set: { unit: "hluti", verb: "a\xF0 hafa" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "gildi",
          email: "netfang",
          url: "vefsl\xF3\xF0",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO dagsetning og t\xEDmi",
          date: "ISO dagsetning",
          time: "ISO t\xEDmi",
          duration: "ISO t\xEDmalengd",
          ipv4: "IPv4 address",
          ipv6: "IPv6 address",
          cidrv4: "IPv4 range",
          cidrv6: "IPv6 range",
          base64: "base64-encoded strengur",
          base64url: "base64url-encoded strengur",
          json_string: "JSON strengur",
          e164: "E.164 t\xF6lugildi",
          jwt: "JWT",
          template_literal: "gildi",
        },
        n = { nan: "NaN", number: "n\xFAmer", array: "fylki" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Rangt gildi: \xDE\xFA sl\xF3st inn ${u} \xFEar sem \xE1 a\xF0 vera instanceof ${o.expected}`
              : `Rangt gildi: \xDE\xFA sl\xF3st inn ${u} \xFEar sem \xE1 a\xF0 vera ${s}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Rangt gildi: gert r\xE1\xF0 fyrir ${Zr(o.values[0])}`
              : `\xD3gilt val: m\xE1 vera eitt af eftirfarandi ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${o.origin ?? "gildi"} hafi ${s}${o.maximum.toString()} ${a.unit ?? "hluti"}`
              : `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${o.origin ?? "gildi"} s\xE9 ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${o.origin} hafi ${s}${o.minimum.toString()} ${a.unit}`
              : `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${o.origin} s\xE9 ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `\xD3gildur strengur: ver\xF0ur a\xF0 byrja \xE1 "${s.prefix}"`
              : s.format === "ends_with"
                ? `\xD3gildur strengur: ver\xF0ur a\xF0 enda \xE1 "${s.suffix}"`
                : s.format === "includes"
                  ? `\xD3gildur strengur: ver\xF0ur a\xF0 innihalda "${s.includes}"`
                  : s.format === "regex"
                    ? `\xD3gildur strengur: ver\xF0ur a\xF0 fylgja mynstri ${s.pattern}`
                    : `Rangt ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `R\xF6ng tala: ver\xF0ur a\xF0 vera margfeldi af ${o.divisor}`;
          case "unrecognized_keys":
            return `\xD3\xFEekkt ${o.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `Rangur lykill \xED ${o.origin}`;
          case "invalid_union":
            return "Rangt gildi";
          case "invalid_element":
            return `Rangt gildi \xED ${o.origin}`;
          default:
            return "Rangt gildi";
        }
      };
    };
  });
function zmn() {
  return { localeError: Ess() };
}
var Ess,
  Ymn = j(() => {
    Yi();
    Ess = () => {
      let t = {
        string: { unit: "caratteri", verb: "avere" },
        file: { unit: "byte", verb: "avere" },
        array: { unit: "elementi", verb: "avere" },
        set: { unit: "elementi", verb: "avere" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "input",
          email: "indirizzo email",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "data e ora ISO",
          date: "data ISO",
          time: "ora ISO",
          duration: "durata ISO",
          ipv4: "indirizzo IPv4",
          ipv6: "indirizzo IPv6",
          cidrv4: "intervallo IPv4",
          cidrv6: "intervallo IPv6",
          base64: "stringa codificata in base64",
          base64url: "URL codificata in base64",
          json_string: "stringa JSON",
          e164: "numero E.164",
          jwt: "JWT",
          template_literal: "input",
        },
        n = { nan: "NaN", number: "numero", array: "vettore" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Input non valido: atteso instanceof ${o.expected}, ricevuto ${u}`
              : `Input non valido: atteso ${s}, ricevuto ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Input non valido: atteso ${Zr(o.values[0])}`
              : `Opzione non valida: atteso uno tra ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `Troppo grande: ${o.origin ?? "valore"} deve avere ${s}${o.maximum.toString()} ${a.unit ?? "elementi"}`
              : `Troppo grande: ${o.origin ?? "valore"} deve essere ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `Troppo piccolo: ${o.origin} deve avere ${s}${o.minimum.toString()} ${a.unit}`
              : `Troppo piccolo: ${o.origin} deve essere ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Stringa non valida: deve iniziare con "${s.prefix}"`
              : s.format === "ends_with"
                ? `Stringa non valida: deve terminare con "${s.suffix}"`
                : s.format === "includes"
                  ? `Stringa non valida: deve includere "${s.includes}"`
                  : s.format === "regex"
                    ? `Stringa non valida: deve corrispondere al pattern ${s.pattern}`
                    : `Invalid ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `Numero non valido: deve essere un multiplo di ${o.divisor}`;
          case "unrecognized_keys":
            return `Chiav${o.keys.length > 1 ? "i" : "e"} non riconosciut${o.keys.length > 1 ? "e" : "a"}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `Chiave non valida in ${o.origin}`;
          case "invalid_union":
            return "Input non valido";
          case "invalid_element":
            return `Valore non valido in ${o.origin}`;
          default:
            return "Input non valido";
        }
      };
    };
  });
function Kmn() {
  return { localeError: vss() };
}
var vss,
  Jmn = j(() => {
    Yi();
    vss = () => {
      let t = {
        string: { unit: "\u6587\u5B57", verb: "\u3067\u3042\u308B" },
        file: { unit: "\u30D0\u30A4\u30C8", verb: "\u3067\u3042\u308B" },
        array: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
        set: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "\u5165\u529B\u5024",
          email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
          url: "URL",
          emoji: "\u7D75\u6587\u5B57",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO\u65E5\u6642",
          date: "ISO\u65E5\u4ED8",
          time: "ISO\u6642\u523B",
          duration: "ISO\u671F\u9593",
          ipv4: "IPv4\u30A2\u30C9\u30EC\u30B9",
          ipv6: "IPv6\u30A2\u30C9\u30EC\u30B9",
          cidrv4: "IPv4\u7BC4\u56F2",
          cidrv6: "IPv6\u7BC4\u56F2",
          base64: "base64\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
          base64url: "base64url\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
          json_string: "JSON\u6587\u5B57\u5217",
          e164: "E.164\u756A\u53F7",
          jwt: "JWT",
          template_literal: "\u5165\u529B\u5024",
        },
        n = { nan: "NaN", number: "\u6570\u5024", array: "\u914D\u5217" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `\u7121\u52B9\u306A\u5165\u529B: instanceof ${o.expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${u}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`
              : `\u7121\u52B9\u306A\u5165\u529B: ${s}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${u}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `\u7121\u52B9\u306A\u5165\u529B: ${Zr(o.values[0])}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F`
              : `\u7121\u52B9\u306A\u9078\u629E: ${sr(o.values, "\u3001")}\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          case "too_big": {
            let s = o.inclusive ? "\u4EE5\u4E0B\u3067\u3042\u308B" : "\u3088\u308A\u5C0F\u3055\u3044",
              a = e(o.origin);
            return a
              ? `\u5927\u304D\u3059\u304E\u308B\u5024: ${o.origin ?? "\u5024"}\u306F${o.maximum.toString()}${a.unit ?? "\u8981\u7D20"}${s}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
              : `\u5927\u304D\u3059\u304E\u308B\u5024: ${o.origin ?? "\u5024"}\u306F${o.maximum.toString()}${s}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          }
          case "too_small": {
            let s = o.inclusive ? "\u4EE5\u4E0A\u3067\u3042\u308B" : "\u3088\u308A\u5927\u304D\u3044",
              a = e(o.origin);
            return a
              ? `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${o.origin}\u306F${o.minimum.toString()}${a.unit}${s}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
              : `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${o.origin}\u306F${o.minimum.toString()}${s}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${s.prefix}"\u3067\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
              : s.format === "ends_with"
                ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${s.suffix}"\u3067\u7D42\u308F\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                : s.format === "includes"
                  ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${s.includes}"\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                  : s.format === "regex"
                    ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: \u30D1\u30BF\u30FC\u30F3${s.pattern}\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                    : `\u7121\u52B9\u306A${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `\u7121\u52B9\u306A\u6570\u5024: ${o.divisor}\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          case "unrecognized_keys":
            return `\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC${o.keys.length > 1 ? "\u7FA4" : ""}: ${sr(o.keys, "\u3001")}`;
          case "invalid_key":
            return `${o.origin}\u5185\u306E\u7121\u52B9\u306A\u30AD\u30FC`;
          case "invalid_union":
            return "\u7121\u52B9\u306A\u5165\u529B";
          case "invalid_element":
            return `${o.origin}\u5185\u306E\u7121\u52B9\u306A\u5024`;
          default:
            return "\u7121\u52B9\u306A\u5165\u529B";
        }
      };
    };
  });
function Xmn() {
  return { localeError: Css() };
}
var Css,
  Zmn = j(() => {
    Yi();
    Css = () => {
      let t = {
        string: {
          unit: "\u10E1\u10D8\u10DB\u10D1\u10DD\u10DA\u10DD",
          verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
        },
        file: {
          unit: "\u10D1\u10D0\u10D8\u10E2\u10D8",
          verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
        },
        array: {
          unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8",
          verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
        },
        set: {
          unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8",
          verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
        },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0",
          email:
            "\u10D4\u10DA-\u10E4\u10DD\u10E1\u10E2\u10D8\u10E1 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
          url: "URL",
          emoji: "\u10D4\u10DB\u10DD\u10EF\u10D8",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8-\u10D3\u10E0\u10DD",
          date: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8",
          time: "\u10D3\u10E0\u10DD",
          duration: "\u10EE\u10D0\u10DC\u10D2\u10E0\u10EB\u10DA\u10D8\u10D5\u10DD\u10D1\u10D0",
          ipv4: "IPv4 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
          ipv6: "IPv6 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
          cidrv4: "IPv4 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
          cidrv6: "IPv6 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
          base64:
            "base64-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8",
          base64url:
            "base64url-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8",
          json_string: "JSON \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8",
          e164: "E.164 \u10DC\u10DD\u10DB\u10D4\u10E0\u10D8",
          jwt: "JWT",
          template_literal: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0",
        },
        n = {
          nan: "NaN",
          number: "\u10E0\u10D8\u10EA\u10EE\u10D5\u10D8",
          string: "\u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8",
          boolean: "\u10D1\u10E3\u10DA\u10D4\u10D0\u10DC\u10D8",
          function: "\u10E4\u10E3\u10DC\u10E5\u10EA\u10D8\u10D0",
          array: "\u10DB\u10D0\u10E1\u10D8\u10D5\u10D8",
        };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 instanceof ${o.expected}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${u}`
              : `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${s}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${Zr(o.values[0])}`
              : `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D0\u10E0\u10D8\u10D0\u10DC\u10E2\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8\u10D0 \u10D4\u10E0\u10D7-\u10D4\u10E0\u10D7\u10D8 ${sr(o.values, "|")}-\u10D3\u10D0\u10DC`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${o.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} ${a.verb} ${s}${o.maximum.toString()} ${a.unit}`
              : `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${o.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} \u10D8\u10E7\u10DD\u10E1 ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${o.origin} ${a.verb} ${s}${o.minimum.toString()} ${a.unit}`
              : `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${o.origin} \u10D8\u10E7\u10DD\u10E1 ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10EC\u10E7\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${s.prefix}"-\u10D8\u10D7`
              : s.format === "ends_with"
                ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10DB\u10D7\u10D0\u10D5\u10E0\u10D3\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${s.suffix}"-\u10D8\u10D7`
                : s.format === "includes"
                  ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1 "${s.includes}"-\u10E1`
                  : s.format === "regex"
                    ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D4\u10E1\u10D0\u10D1\u10D0\u10DB\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 \u10E8\u10D0\u10D1\u10DA\u10DD\u10DC\u10E1 ${s.pattern}`
                    : `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E0\u10D8\u10EA\u10EE\u10D5\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10E7\u10DD\u10E1 ${o.divisor}-\u10D8\u10E1 \u10EF\u10D4\u10E0\u10D0\u10D3\u10D8`;
          case "unrecognized_keys":
            return `\u10E3\u10EA\u10DC\u10DD\u10D1\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1${o.keys.length > 1 ? "\u10D4\u10D1\u10D8" : "\u10D8"}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1\u10D8 ${o.origin}-\u10E8\u10D8`;
          case "invalid_union":
            return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
          case "invalid_element":
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0 ${o.origin}-\u10E8\u10D8`;
          default:
            return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
        }
      };
    };
  });
function xVe() {
  return { localeError: Sss() };
}
var Sss,
  _Pt = j(() => {
    Yi();
    Sss = () => {
      let t = {
        string: { unit: "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
        file: { unit: "\u1794\u17C3", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
        array: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
        set: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
          email: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
          url: "URL",
          emoji: "\u179F\u1789\u17D2\u1789\u17B6\u17A2\u17B6\u179A\u1798\u17D2\u1798\u178E\u17CD",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime:
            "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 \u1793\u17B7\u1784\u1798\u17C9\u17C4\u1784 ISO",
          date: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 ISO",
          time: "\u1798\u17C9\u17C4\u1784 ISO",
          duration: "\u179A\u1799\u17C8\u1796\u17C1\u179B ISO",
          ipv4: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
          ipv6: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
          cidrv4: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
          cidrv6: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
          base64: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64",
          base64url:
            "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64url",
          json_string: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A JSON",
          e164: "\u179B\u17C1\u1781 E.164",
          jwt: "JWT",
          template_literal: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
        },
        n = {
          nan: "NaN",
          number: "\u179B\u17C1\u1781",
          array: "\u17A2\u17B6\u179A\u17C1 (Array)",
          null: "\u1782\u17D2\u1798\u17B6\u1793\u178F\u1798\u17D2\u179B\u17C3 (null)",
        };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A instanceof ${o.expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${u}`
              : `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${s} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${Zr(o.values[0])}`
              : `\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${o.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${s} ${o.maximum.toString()} ${a.unit ?? "\u1792\u17B6\u178F\u17BB"}`
              : `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${o.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${s} ${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${o.origin} ${s} ${o.minimum.toString()} ${a.unit}`
              : `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${o.origin} ${s} ${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u178A\u17C4\u1799 "${s.prefix}"`
              : s.format === "ends_with"
                ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1794\u1789\u17D2\u1785\u1794\u17CB\u178A\u17C4\u1799 "${s.suffix}"`
                : s.format === "includes"
                  ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793 "${s.includes}"`
                  : s.format === "regex"
                    ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1795\u17D2\u1782\u17BC\u1795\u17D2\u1782\u1784\u1793\u17B9\u1784\u1791\u1798\u17D2\u179A\u1784\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1780\u17C6\u178E\u178F\u17CB ${s.pattern}`
                    : `\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `\u179B\u17C1\u1781\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1787\u17B6\u1796\u17A0\u17BB\u1782\u17BB\u178E\u1793\u17C3 ${o.divisor}`;
          case "unrecognized_keys":
            return `\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `\u179F\u17C4\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${o.origin}`;
          case "invalid_union":
            return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
          case "invalid_element":
            return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${o.origin}`;
          default:
            return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
        }
      };
    };
  });
function edn() {
  return xVe();
}
var tdn = j(() => {
  _Pt();
});
function rdn() {
  return { localeError: wss() };
}
var wss,
  ndn = j(() => {
    Yi();
    wss = () => {
      let t = {
        string: { unit: "\uBB38\uC790", verb: "to have" },
        file: { unit: "\uBC14\uC774\uD2B8", verb: "to have" },
        array: { unit: "\uAC1C", verb: "to have" },
        set: { unit: "\uAC1C", verb: "to have" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "\uC785\uB825",
          email: "\uC774\uBA54\uC77C \uC8FC\uC18C",
          url: "URL",
          emoji: "\uC774\uBAA8\uC9C0",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04",
          date: "ISO \uB0A0\uC9DC",
          time: "ISO \uC2DC\uAC04",
          duration: "ISO \uAE30\uAC04",
          ipv4: "IPv4 \uC8FC\uC18C",
          ipv6: "IPv6 \uC8FC\uC18C",
          cidrv4: "IPv4 \uBC94\uC704",
          cidrv6: "IPv6 \uBC94\uC704",
          base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
          base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
          json_string: "JSON \uBB38\uC790\uC5F4",
          e164: "E.164 \uBC88\uD638",
          jwt: "JWT",
          template_literal: "\uC785\uB825",
        },
        n = { nan: "NaN" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 instanceof ${o.expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${u}\uC785\uB2C8\uB2E4`
              : `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ${s}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${u}\uC785\uB2C8\uB2E4`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${Zr(o.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4`
              : `\uC798\uBABB\uB41C \uC635\uC158: ${sr(o.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
          case "too_big": {
            let s = o.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC",
              a = s === "\uBBF8\uB9CC" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
              u = e(o.origin),
              c = u?.unit ?? "\uC694\uC18C";
            return u
              ? `${o.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${o.maximum.toString()}${c} ${s}${a}`
              : `${o.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${o.maximum.toString()} ${s}${a}`;
          }
          case "too_small": {
            let s = o.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC",
              a = s === "\uC774\uC0C1" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
              u = e(o.origin),
              c = u?.unit ?? "\uC694\uC18C";
            return u
              ? `${o.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${o.minimum.toString()}${c} ${s}${a}`
              : `${o.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${o.minimum.toString()} ${s}${a}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${s.prefix}"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4`
              : s.format === "ends_with"
                ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${s.suffix}"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4`
                : s.format === "includes"
                  ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${s.includes}"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4`
                  : s.format === "regex"
                    ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD ${s.pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4`
                    : `\uC798\uBABB\uB41C ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `\uC798\uBABB\uB41C \uC22B\uC790: ${o.divisor}\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
          case "unrecognized_keys":
            return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `\uC798\uBABB\uB41C \uD0A4: ${o.origin}`;
          case "invalid_union":
            return "\uC798\uBABB\uB41C \uC785\uB825";
          case "invalid_element":
            return `\uC798\uBABB\uB41C \uAC12: ${o.origin}`;
          default:
            return "\uC798\uBABB\uB41C \uC785\uB825";
        }
      };
    };
  });
function idn(t) {
  let e = Math.abs(t),
    r = e % 10,
    n = e % 100;
  return (n >= 11 && n <= 19) || r === 0 ? "many" : r === 1 ? "one" : "few";
}
function odn() {
  return { localeError: xss() };
}
var H2e,
  xss,
  sdn = j(() => {
    Yi();
    H2e = (t) => t.charAt(0).toUpperCase() + t.slice(1);
    xss = () => {
      let t = {
        string: {
          unit: { one: "simbolis", few: "simboliai", many: "simboli\u0173" },
          verb: {
            smaller: {
              inclusive: "turi b\u016Bti ne ilgesn\u0117 kaip",
              notInclusive: "turi b\u016Bti trumpesn\u0117 kaip",
            },
            bigger: {
              inclusive: "turi b\u016Bti ne trumpesn\u0117 kaip",
              notInclusive: "turi b\u016Bti ilgesn\u0117 kaip",
            },
          },
        },
        file: {
          unit: { one: "baitas", few: "baitai", many: "bait\u0173" },
          verb: {
            smaller: {
              inclusive: "turi b\u016Bti ne didesnis kaip",
              notInclusive: "turi b\u016Bti ma\u017Eesnis kaip",
            },
            bigger: { inclusive: "turi b\u016Bti ne ma\u017Eesnis kaip", notInclusive: "turi b\u016Bti didesnis kaip" },
          },
        },
        array: {
          unit: { one: "element\u0105", few: "elementus", many: "element\u0173" },
          verb: {
            smaller: {
              inclusive: "turi tur\u0117ti ne daugiau kaip",
              notInclusive: "turi tur\u0117ti ma\u017Eiau kaip",
            },
            bigger: {
              inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
              notInclusive: "turi tur\u0117ti daugiau kaip",
            },
          },
        },
        set: {
          unit: { one: "element\u0105", few: "elementus", many: "element\u0173" },
          verb: {
            smaller: {
              inclusive: "turi tur\u0117ti ne daugiau kaip",
              notInclusive: "turi tur\u0117ti ma\u017Eiau kaip",
            },
            bigger: {
              inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
              notInclusive: "turi tur\u0117ti daugiau kaip",
            },
          },
        },
      };
      function e(o, s, a, u) {
        let c = t[o] ?? null;
        return c === null ? c : { unit: c.unit[s], verb: c.verb[u][a ? "inclusive" : "notInclusive"] };
      }
      let r = {
          regex: "\u012Fvestis",
          email: "el. pa\u0161to adresas",
          url: "URL",
          emoji: "jaustukas",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO data ir laikas",
          date: "ISO data",
          time: "ISO laikas",
          duration: "ISO trukm\u0117",
          ipv4: "IPv4 adresas",
          ipv6: "IPv6 adresas",
          cidrv4: "IPv4 tinklo prefiksas (CIDR)",
          cidrv6: "IPv6 tinklo prefiksas (CIDR)",
          base64: "base64 u\u017Ekoduota eilut\u0117",
          base64url: "base64url u\u017Ekoduota eilut\u0117",
          json_string: "JSON eilut\u0117",
          e164: "E.164 numeris",
          jwt: "JWT",
          template_literal: "\u012Fvestis",
        },
        n = {
          nan: "NaN",
          number: "skai\u010Dius",
          bigint: "sveikasis skai\u010Dius",
          string: "eilut\u0117",
          boolean: "login\u0117 reik\u0161m\u0117",
          undefined: "neapibr\u0117\u017Eta reik\u0161m\u0117",
          function: "funkcija",
          symbol: "simbolis",
          array: "masyvas",
          object: "objektas",
          null: "nulin\u0117 reik\u0161m\u0117",
        };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Gautas tipas ${u}, o tik\u0117tasi - instanceof ${o.expected}`
              : `Gautas tipas ${u}, o tik\u0117tasi - ${s}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Privalo b\u016Bti ${Zr(o.values[0])}`
              : `Privalo b\u016Bti vienas i\u0161 ${sr(o.values, "|")} pasirinkim\u0173`;
          case "too_big": {
            let s = n[o.origin] ?? o.origin,
              a = e(o.origin, idn(Number(o.maximum)), o.inclusive ?? !1, "smaller");
            if (a?.verb)
              return `${H2e(s ?? o.origin ?? "reik\u0161m\u0117")} ${a.verb} ${o.maximum.toString()} ${a.unit ?? "element\u0173"}`;
            let u = o.inclusive ? "ne didesnis kaip" : "ma\u017Eesnis kaip";
            return `${H2e(s ?? o.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${u} ${o.maximum.toString()} ${a?.unit}`;
          }
          case "too_small": {
            let s = n[o.origin] ?? o.origin,
              a = e(o.origin, idn(Number(o.minimum)), o.inclusive ?? !1, "bigger");
            if (a?.verb)
              return `${H2e(s ?? o.origin ?? "reik\u0161m\u0117")} ${a.verb} ${o.minimum.toString()} ${a.unit ?? "element\u0173"}`;
            let u = o.inclusive ? "ne ma\u017Eesnis kaip" : "didesnis kaip";
            return `${H2e(s ?? o.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${u} ${o.minimum.toString()} ${a?.unit}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Eilut\u0117 privalo prasid\u0117ti "${s.prefix}"`
              : s.format === "ends_with"
                ? `Eilut\u0117 privalo pasibaigti "${s.suffix}"`
                : s.format === "includes"
                  ? `Eilut\u0117 privalo \u012Ftraukti "${s.includes}"`
                  : s.format === "regex"
                    ? `Eilut\u0117 privalo atitikti ${s.pattern}`
                    : `Neteisingas ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `Skai\u010Dius privalo b\u016Bti ${o.divisor} kartotinis.`;
          case "unrecognized_keys":
            return `Neatpa\u017Eint${o.keys.length > 1 ? "i" : "as"} rakt${o.keys.length > 1 ? "ai" : "as"}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return "Rastas klaidingas raktas";
          case "invalid_union":
            return "Klaidinga \u012Fvestis";
          case "invalid_element": {
            let s = n[o.origin] ?? o.origin;
            return `${H2e(s ?? o.origin ?? "reik\u0161m\u0117")} turi klaiding\u0105 \u012Fvest\u012F`;
          }
          default:
            return "Klaidinga \u012Fvestis";
        }
      };
    };
  });
function adn() {
  return { localeError: Tss() };
}
var Tss,
  udn = j(() => {
    Yi();
    Tss = () => {
      let t = {
        string: { unit: "\u0437\u043D\u0430\u0446\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
        file: { unit: "\u0431\u0430\u0458\u0442\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
        array: { unit: "\u0441\u0442\u0430\u0432\u043A\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
        set: { unit: "\u0441\u0442\u0430\u0432\u043A\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "\u0432\u043D\u0435\u0441",
          email: "\u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u0435-\u043F\u043E\u0448\u0442\u0430",
          url: "URL",
          emoji: "\u0435\u043C\u043E\u045F\u0438",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO \u0434\u0430\u0442\u0443\u043C \u0438 \u0432\u0440\u0435\u043C\u0435",
          date: "ISO \u0434\u0430\u0442\u0443\u043C",
          time: "ISO \u0432\u0440\u0435\u043C\u0435",
          duration: "ISO \u0432\u0440\u0435\u043C\u0435\u0442\u0440\u0430\u0435\u045A\u0435",
          ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441\u0430",
          ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441\u0430",
          cidrv4: "IPv4 \u043E\u043F\u0441\u0435\u0433",
          cidrv6: "IPv6 \u043E\u043F\u0441\u0435\u0433",
          base64: "base64-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
          base64url: "base64url-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
          json_string: "JSON \u043D\u0438\u0437\u0430",
          e164: "E.164 \u0431\u0440\u043E\u0458",
          jwt: "JWT",
          template_literal: "\u0432\u043D\u0435\u0441",
        },
        n = { nan: "NaN", number: "\u0431\u0440\u043E\u0458", array: "\u043D\u0438\u0437\u0430" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 instanceof ${o.expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${u}`
              : `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${s}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Invalid input: expected ${Zr(o.values[0])}`
              : `\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${o.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0438\u043C\u0430 ${s}${o.maximum.toString()} ${a.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438"}`
              : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${o.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0431\u0438\u0434\u0435 ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${o.origin} \u0434\u0430 \u0438\u043C\u0430 ${s}${o.minimum.toString()} ${a.unit}`
              : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${o.origin} \u0434\u0430 \u0431\u0438\u0434\u0435 ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0443\u0432\u0430 \u0441\u043E "${s.prefix}"`
              : s.format === "ends_with"
                ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u0432\u0440\u0448\u0443\u0432\u0430 \u0441\u043E "${s.suffix}"`
                : s.format === "includes"
                  ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0432\u043A\u043B\u0443\u0447\u0443\u0432\u0430 "${s.includes}"`
                  : s.format === "regex"
                    ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u043E\u0434\u0433\u043E\u0430\u0440\u0430 \u043D\u0430 \u043F\u0430\u0442\u0435\u0440\u043D\u043E\u0442 ${s.pattern}`
                    : `Invalid ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `\u0413\u0440\u0435\u0448\u0435\u043D \u0431\u0440\u043E\u0458: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0431\u0438\u0434\u0435 \u0434\u0435\u043B\u0438\u0432 \u0441\u043E ${o.divisor}`;
          case "unrecognized_keys":
            return `${o.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447"}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `\u0413\u0440\u0435\u0448\u0435\u043D \u043A\u043B\u0443\u0447 \u0432\u043E ${o.origin}`;
          case "invalid_union":
            return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
          case "invalid_element":
            return `\u0413\u0440\u0435\u0448\u043D\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u043E ${o.origin}`;
          default:
            return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
        }
      };
    };
  });
function cdn() {
  return { localeError: Dss() };
}
var Dss,
  ldn = j(() => {
    Yi();
    Dss = () => {
      let t = {
        string: { unit: "aksara", verb: "mempunyai" },
        file: { unit: "bait", verb: "mempunyai" },
        array: { unit: "elemen", verb: "mempunyai" },
        set: { unit: "elemen", verb: "mempunyai" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "input",
          email: "alamat e-mel",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "tarikh masa ISO",
          date: "tarikh ISO",
          time: "masa ISO",
          duration: "tempoh ISO",
          ipv4: "alamat IPv4",
          ipv6: "alamat IPv6",
          cidrv4: "julat IPv4",
          cidrv6: "julat IPv6",
          base64: "string dikodkan base64",
          base64url: "string dikodkan base64url",
          json_string: "string JSON",
          e164: "nombor E.164",
          jwt: "JWT",
          template_literal: "input",
        },
        n = { nan: "NaN", number: "nombor" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Input tidak sah: dijangka instanceof ${o.expected}, diterima ${u}`
              : `Input tidak sah: dijangka ${s}, diterima ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Input tidak sah: dijangka ${Zr(o.values[0])}`
              : `Pilihan tidak sah: dijangka salah satu daripada ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `Terlalu besar: dijangka ${o.origin ?? "nilai"} ${a.verb} ${s}${o.maximum.toString()} ${a.unit ?? "elemen"}`
              : `Terlalu besar: dijangka ${o.origin ?? "nilai"} adalah ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `Terlalu kecil: dijangka ${o.origin} ${a.verb} ${s}${o.minimum.toString()} ${a.unit}`
              : `Terlalu kecil: dijangka ${o.origin} adalah ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `String tidak sah: mesti bermula dengan "${s.prefix}"`
              : s.format === "ends_with"
                ? `String tidak sah: mesti berakhir dengan "${s.suffix}"`
                : s.format === "includes"
                  ? `String tidak sah: mesti mengandungi "${s.includes}"`
                  : s.format === "regex"
                    ? `String tidak sah: mesti sepadan dengan corak ${s.pattern}`
                    : `${r[s.format] ?? o.format} tidak sah`;
          }
          case "not_multiple_of":
            return `Nombor tidak sah: perlu gandaan ${o.divisor}`;
          case "unrecognized_keys":
            return `Kunci tidak dikenali: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `Kunci tidak sah dalam ${o.origin}`;
          case "invalid_union":
            return "Input tidak sah";
          case "invalid_element":
            return `Nilai tidak sah dalam ${o.origin}`;
          default:
            return "Input tidak sah";
        }
      };
    };
  });
function mdn() {
  return { localeError: Iss() };
}
var Iss,
  ddn = j(() => {
    Yi();
    Iss = () => {
      let t = {
        string: { unit: "tekens", verb: "heeft" },
        file: { unit: "bytes", verb: "heeft" },
        array: { unit: "elementen", verb: "heeft" },
        set: { unit: "elementen", verb: "heeft" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "invoer",
          email: "emailadres",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO datum en tijd",
          date: "ISO datum",
          time: "ISO tijd",
          duration: "ISO duur",
          ipv4: "IPv4-adres",
          ipv6: "IPv6-adres",
          cidrv4: "IPv4-bereik",
          cidrv6: "IPv6-bereik",
          base64: "base64-gecodeerde tekst",
          base64url: "base64 URL-gecodeerde tekst",
          json_string: "JSON string",
          e164: "E.164-nummer",
          jwt: "JWT",
          template_literal: "invoer",
        },
        n = { nan: "NaN", number: "getal" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Ongeldige invoer: verwacht instanceof ${o.expected}, ontving ${u}`
              : `Ongeldige invoer: verwacht ${s}, ontving ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Ongeldige invoer: verwacht ${Zr(o.values[0])}`
              : `Ongeldige optie: verwacht \xE9\xE9n van ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin),
              u = o.origin === "date" ? "laat" : o.origin === "string" ? "lang" : "groot";
            return a
              ? `Te ${u}: verwacht dat ${o.origin ?? "waarde"} ${s}${o.maximum.toString()} ${a.unit ?? "elementen"} ${a.verb}`
              : `Te ${u}: verwacht dat ${o.origin ?? "waarde"} ${s}${o.maximum.toString()} is`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin),
              u = o.origin === "date" ? "vroeg" : o.origin === "string" ? "kort" : "klein";
            return a
              ? `Te ${u}: verwacht dat ${o.origin} ${s}${o.minimum.toString()} ${a.unit} ${a.verb}`
              : `Te ${u}: verwacht dat ${o.origin} ${s}${o.minimum.toString()} is`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Ongeldige tekst: moet met "${s.prefix}" beginnen`
              : s.format === "ends_with"
                ? `Ongeldige tekst: moet op "${s.suffix}" eindigen`
                : s.format === "includes"
                  ? `Ongeldige tekst: moet "${s.includes}" bevatten`
                  : s.format === "regex"
                    ? `Ongeldige tekst: moet overeenkomen met patroon ${s.pattern}`
                    : `Ongeldig: ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `Ongeldig getal: moet een veelvoud van ${o.divisor} zijn`;
          case "unrecognized_keys":
            return `Onbekende key${o.keys.length > 1 ? "s" : ""}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `Ongeldige key in ${o.origin}`;
          case "invalid_union":
            return "Ongeldige invoer";
          case "invalid_element":
            return `Ongeldige waarde in ${o.origin}`;
          default:
            return "Ongeldige invoer";
        }
      };
    };
  });
function fdn() {
  return { localeError: Rss() };
}
var Rss,
  pdn = j(() => {
    Yi();
    Rss = () => {
      let t = {
        string: { unit: "tegn", verb: "\xE5 ha" },
        file: { unit: "bytes", verb: "\xE5 ha" },
        array: { unit: "elementer", verb: "\xE5 inneholde" },
        set: { unit: "elementer", verb: "\xE5 inneholde" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "input",
          email: "e-postadresse",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO dato- og klokkeslett",
          date: "ISO-dato",
          time: "ISO-klokkeslett",
          duration: "ISO-varighet",
          ipv4: "IPv4-omr\xE5de",
          ipv6: "IPv6-omr\xE5de",
          cidrv4: "IPv4-spekter",
          cidrv6: "IPv6-spekter",
          base64: "base64-enkodet streng",
          base64url: "base64url-enkodet streng",
          json_string: "JSON-streng",
          e164: "E.164-nummer",
          jwt: "JWT",
          template_literal: "input",
        },
        n = { nan: "NaN", number: "tall", array: "liste" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Ugyldig input: forventet instanceof ${o.expected}, fikk ${u}`
              : `Ugyldig input: forventet ${s}, fikk ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Ugyldig verdi: forventet ${Zr(o.values[0])}`
              : `Ugyldig valg: forventet en av ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `For stor(t): forventet ${o.origin ?? "value"} til \xE5 ha ${s}${o.maximum.toString()} ${a.unit ?? "elementer"}`
              : `For stor(t): forventet ${o.origin ?? "value"} til \xE5 ha ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `For lite(n): forventet ${o.origin} til \xE5 ha ${s}${o.minimum.toString()} ${a.unit}`
              : `For lite(n): forventet ${o.origin} til \xE5 ha ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Ugyldig streng: m\xE5 starte med "${s.prefix}"`
              : s.format === "ends_with"
                ? `Ugyldig streng: m\xE5 ende med "${s.suffix}"`
                : s.format === "includes"
                  ? `Ugyldig streng: m\xE5 inneholde "${s.includes}"`
                  : s.format === "regex"
                    ? `Ugyldig streng: m\xE5 matche m\xF8nsteret ${s.pattern}`
                    : `Ugyldig ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `Ugyldig tall: m\xE5 v\xE6re et multiplum av ${o.divisor}`;
          case "unrecognized_keys":
            return `${o.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `Ugyldig n\xF8kkel i ${o.origin}`;
          case "invalid_union":
            return "Ugyldig input";
          case "invalid_element":
            return `Ugyldig verdi i ${o.origin}`;
          default:
            return "Ugyldig input";
        }
      };
    };
  });
function hdn() {
  return { localeError: kss() };
}
var kss,
  gdn = j(() => {
    Yi();
    kss = () => {
      let t = {
        string: { unit: "harf", verb: "olmal\u0131d\u0131r" },
        file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
        array: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
        set: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "giren",
          email: "epostag\xE2h",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO heng\xE2m\u0131",
          date: "ISO tarihi",
          time: "ISO zaman\u0131",
          duration: "ISO m\xFCddeti",
          ipv4: "IPv4 ni\u015F\xE2n\u0131",
          ipv6: "IPv6 ni\u015F\xE2n\u0131",
          cidrv4: "IPv4 menzili",
          cidrv6: "IPv6 menzili",
          base64: "base64-\u015Fifreli metin",
          base64url: "base64url-\u015Fifreli metin",
          json_string: "JSON metin",
          e164: "E.164 say\u0131s\u0131",
          jwt: "JWT",
          template_literal: "giren",
        },
        n = { nan: "NaN", number: "numara", array: "saf", null: "gayb" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `F\xE2sit giren: umulan instanceof ${o.expected}, al\u0131nan ${u}`
              : `F\xE2sit giren: umulan ${s}, al\u0131nan ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `F\xE2sit giren: umulan ${Zr(o.values[0])}`
              : `F\xE2sit tercih: m\xFBteberler ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `Fazla b\xFCy\xFCk: ${o.origin ?? "value"}, ${s}${o.maximum.toString()} ${a.unit ?? "elements"} sahip olmal\u0131yd\u0131.`
              : `Fazla b\xFCy\xFCk: ${o.origin ?? "value"}, ${s}${o.maximum.toString()} olmal\u0131yd\u0131.`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `Fazla k\xFC\xE7\xFCk: ${o.origin}, ${s}${o.minimum.toString()} ${a.unit} sahip olmal\u0131yd\u0131.`
              : `Fazla k\xFC\xE7\xFCk: ${o.origin}, ${s}${o.minimum.toString()} olmal\u0131yd\u0131.`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `F\xE2sit metin: "${s.prefix}" ile ba\u015Flamal\u0131.`
              : s.format === "ends_with"
                ? `F\xE2sit metin: "${s.suffix}" ile bitmeli.`
                : s.format === "includes"
                  ? `F\xE2sit metin: "${s.includes}" ihtiv\xE2 etmeli.`
                  : s.format === "regex"
                    ? `F\xE2sit metin: ${s.pattern} nak\u015F\u0131na uymal\u0131.`
                    : `F\xE2sit ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `F\xE2sit say\u0131: ${o.divisor} kat\u0131 olmal\u0131yd\u0131.`;
          case "unrecognized_keys":
            return `Tan\u0131nmayan anahtar ${o.keys.length > 1 ? "s" : ""}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `${o.origin} i\xE7in tan\u0131nmayan anahtar var.`;
          case "invalid_union":
            return "Giren tan\u0131namad\u0131.";
          case "invalid_element":
            return `${o.origin} i\xE7in tan\u0131nmayan k\u0131ymet var.`;
          default:
            return "K\u0131ymet tan\u0131namad\u0131.";
        }
      };
    };
  });
function bdn() {
  return { localeError: Oss() };
}
var Oss,
  Adn = j(() => {
    Yi();
    Oss = () => {
      let t = {
        string: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" },
        file: { unit: "\u0628\u0627\u06CC\u067C\u0633", verb: "\u0648\u0644\u0631\u064A" },
        array: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" },
        set: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "\u0648\u0631\u0648\u062F\u064A",
          email: "\u0628\u0631\u06CC\u069A\u0646\u0627\u0644\u06CC\u06A9",
          url: "\u06CC\u0648 \u0622\u0631 \u0627\u0644",
          emoji: "\u0627\u06CC\u0645\u0648\u062C\u064A",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "\u0646\u06CC\u067C\u0647 \u0627\u0648 \u0648\u062E\u062A",
          date: "\u0646\u06D0\u067C\u0647",
          time: "\u0648\u062E\u062A",
          duration: "\u0645\u0648\u062F\u0647",
          ipv4: "\u062F IPv4 \u067E\u062A\u0647",
          ipv6: "\u062F IPv6 \u067E\u062A\u0647",
          cidrv4: "\u062F IPv4 \u0633\u0627\u062D\u0647",
          cidrv6: "\u062F IPv6 \u0633\u0627\u062D\u0647",
          base64: "base64-encoded \u0645\u062A\u0646",
          base64url: "base64url-encoded \u0645\u062A\u0646",
          json_string: "JSON \u0645\u062A\u0646",
          e164: "\u062F E.164 \u0634\u0645\u06D0\u0631\u0647",
          jwt: "JWT",
          template_literal: "\u0648\u0631\u0648\u062F\u064A",
        },
        n = { nan: "NaN", number: "\u0639\u062F\u062F", array: "\u0627\u0631\u06D0" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F instanceof ${o.expected} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${u} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`
              : `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${s} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${u} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${Zr(o.values[0])} \u0648\u0627\u06CC`
              : `\u0646\u0627\u0633\u0645 \u0627\u0646\u062A\u062E\u0627\u0628: \u0628\u0627\u06CC\u062F \u06CC\u0648 \u0644\u0647 ${sr(o.values, "|")} \u0685\u062E\u0647 \u0648\u0627\u06CC`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${o.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${s}${o.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0635\u0631\u0648\u0646\u0647"} \u0648\u0644\u0631\u064A`
              : `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${o.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${s}${o.maximum.toString()} \u0648\u064A`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${o.origin} \u0628\u0627\u06CC\u062F ${s}${o.minimum.toString()} ${a.unit} \u0648\u0644\u0631\u064A`
              : `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${o.origin} \u0628\u0627\u06CC\u062F ${s}${o.minimum.toString()} \u0648\u064A`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${s.prefix}" \u0633\u0631\u0647 \u067E\u06CC\u0644 \u0634\u064A`
              : s.format === "ends_with"
                ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${s.suffix}" \u0633\u0631\u0647 \u067E\u0627\u06CC \u062A\u0647 \u0648\u0631\u0633\u064A\u0696\u064A`
                : s.format === "includes"
                  ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F "${s.includes}" \u0648\u0644\u0631\u064A`
                  : s.format === "regex"
                    ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F ${s.pattern} \u0633\u0631\u0647 \u0645\u0637\u0627\u0628\u0642\u062A \u0648\u0644\u0631\u064A`
                    : `${r[s.format] ?? o.format} \u0646\u0627\u0633\u0645 \u062F\u06CC`;
          }
          case "not_multiple_of":
            return `\u0646\u0627\u0633\u0645 \u0639\u062F\u062F: \u0628\u0627\u06CC\u062F \u062F ${o.divisor} \u0645\u0636\u0631\u0628 \u0648\u064A`;
          case "unrecognized_keys":
            return `\u0646\u0627\u0633\u0645 ${o.keys.length > 1 ? "\u06A9\u0644\u06CC\u0689\u0648\u0646\u0647" : "\u06A9\u0644\u06CC\u0689"}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `\u0646\u0627\u0633\u0645 \u06A9\u0644\u06CC\u0689 \u067E\u0647 ${o.origin} \u06A9\u06D0`;
          case "invalid_union":
            return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
          case "invalid_element":
            return `\u0646\u0627\u0633\u0645 \u0639\u0646\u0635\u0631 \u067E\u0647 ${o.origin} \u06A9\u06D0`;
          default:
            return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
        }
      };
    };
  });
function ydn() {
  return { localeError: Nss() };
}
var Nss,
  _dn = j(() => {
    Yi();
    Nss = () => {
      let t = {
        string: { unit: "znak\xF3w", verb: "mie\u0107" },
        file: { unit: "bajt\xF3w", verb: "mie\u0107" },
        array: { unit: "element\xF3w", verb: "mie\u0107" },
        set: { unit: "element\xF3w", verb: "mie\u0107" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "wyra\u017Cenie",
          email: "adres email",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "data i godzina w formacie ISO",
          date: "data w formacie ISO",
          time: "godzina w formacie ISO",
          duration: "czas trwania ISO",
          ipv4: "adres IPv4",
          ipv6: "adres IPv6",
          cidrv4: "zakres IPv4",
          cidrv6: "zakres IPv6",
          base64: "ci\u0105g znak\xF3w zakodowany w formacie base64",
          base64url: "ci\u0105g znak\xF3w zakodowany w formacie base64url",
          json_string: "ci\u0105g znak\xF3w w formacie JSON",
          e164: "liczba E.164",
          jwt: "JWT",
          template_literal: "wej\u015Bcie",
        },
        n = { nan: "NaN", number: "liczba", array: "tablica" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano instanceof ${o.expected}, otrzymano ${u}`
              : `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${s}, otrzymano ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${Zr(o.values[0])}`
              : `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ${o.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${s}${o.maximum.toString()} ${a.unit ?? "element\xF3w"}`
              : `Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ${o.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce ${o.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${s}${o.minimum.toString()} ${a.unit ?? "element\xF3w"}`
              : `Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce ${o.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zaczyna\u0107 si\u0119 od "${s.prefix}"`
              : s.format === "ends_with"
                ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi ko\u0144czy\u0107 si\u0119 na "${s.suffix}"`
                : s.format === "includes"
                  ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zawiera\u0107 "${s.includes}"`
                  : s.format === "regex"
                    ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi odpowiada\u0107 wzorcowi ${s.pattern}`
                    : `Nieprawid\u0142ow(y/a/e) ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 ${o.divisor}`;
          case "unrecognized_keys":
            return `Nierozpoznane klucze${o.keys.length > 1 ? "s" : ""}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `Nieprawid\u0142owy klucz w ${o.origin}`;
          case "invalid_union":
            return "Nieprawid\u0142owe dane wej\u015Bciowe";
          case "invalid_element":
            return `Nieprawid\u0142owa warto\u015B\u0107 w ${o.origin}`;
          default:
            return "Nieprawid\u0142owe dane wej\u015Bciowe";
        }
      };
    };
  });
function Edn() {
  return { localeError: Pss() };
}
var Pss,
  vdn = j(() => {
    Yi();
    Pss = () => {
      let t = {
        string: { unit: "caracteres", verb: "ter" },
        file: { unit: "bytes", verb: "ter" },
        array: { unit: "itens", verb: "ter" },
        set: { unit: "itens", verb: "ter" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "padr\xE3o",
          email: "endere\xE7o de e-mail",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "data e hora ISO",
          date: "data ISO",
          time: "hora ISO",
          duration: "dura\xE7\xE3o ISO",
          ipv4: "endere\xE7o IPv4",
          ipv6: "endere\xE7o IPv6",
          cidrv4: "faixa de IPv4",
          cidrv6: "faixa de IPv6",
          base64: "texto codificado em base64",
          base64url: "URL codificada em base64",
          json_string: "texto JSON",
          e164: "n\xFAmero E.164",
          jwt: "JWT",
          template_literal: "entrada",
        },
        n = { nan: "NaN", number: "n\xFAmero", null: "nulo" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Tipo inv\xE1lido: esperado instanceof ${o.expected}, recebido ${u}`
              : `Tipo inv\xE1lido: esperado ${s}, recebido ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Entrada inv\xE1lida: esperado ${Zr(o.values[0])}`
              : `Op\xE7\xE3o inv\xE1lida: esperada uma das ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `Muito grande: esperado que ${o.origin ?? "valor"} tivesse ${s}${o.maximum.toString()} ${a.unit ?? "elementos"}`
              : `Muito grande: esperado que ${o.origin ?? "valor"} fosse ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `Muito pequeno: esperado que ${o.origin} tivesse ${s}${o.minimum.toString()} ${a.unit}`
              : `Muito pequeno: esperado que ${o.origin} fosse ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Texto inv\xE1lido: deve come\xE7ar com "${s.prefix}"`
              : s.format === "ends_with"
                ? `Texto inv\xE1lido: deve terminar com "${s.suffix}"`
                : s.format === "includes"
                  ? `Texto inv\xE1lido: deve incluir "${s.includes}"`
                  : s.format === "regex"
                    ? `Texto inv\xE1lido: deve corresponder ao padr\xE3o ${s.pattern}`
                    : `${r[s.format] ?? o.format} inv\xE1lido`;
          }
          case "not_multiple_of":
            return `N\xFAmero inv\xE1lido: deve ser m\xFAltiplo de ${o.divisor}`;
          case "unrecognized_keys":
            return `Chave${o.keys.length > 1 ? "s" : ""} desconhecida${o.keys.length > 1 ? "s" : ""}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `Chave inv\xE1lida em ${o.origin}`;
          case "invalid_union":
            return "Entrada inv\xE1lida";
          case "invalid_element":
            return `Valor inv\xE1lido em ${o.origin}`;
          default:
            return "Campo inv\xE1lido";
        }
      };
    };
  });
function Cdn(t, e, r, n) {
  let o = Math.abs(t),
    s = o % 10,
    a = o % 100;
  return a >= 11 && a <= 19 ? n : s === 1 ? e : s >= 2 && s <= 4 ? r : n;
}
function Sdn() {
  return { localeError: Bss() };
}
var Bss,
  wdn = j(() => {
    Yi();
    Bss = () => {
      let t = {
        string: {
          unit: {
            one: "\u0441\u0438\u043C\u0432\u043E\u043B",
            few: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
            many: "\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
          },
          verb: "\u0438\u043C\u0435\u0442\u044C",
        },
        file: {
          unit: {
            one: "\u0431\u0430\u0439\u0442",
            few: "\u0431\u0430\u0439\u0442\u0430",
            many: "\u0431\u0430\u0439\u0442",
          },
          verb: "\u0438\u043C\u0435\u0442\u044C",
        },
        array: {
          unit: {
            one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
            few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
            many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
          },
          verb: "\u0438\u043C\u0435\u0442\u044C",
        },
        set: {
          unit: {
            one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
            few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
            many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
          },
          verb: "\u0438\u043C\u0435\u0442\u044C",
        },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "\u0432\u0432\u043E\u0434",
          email: "email \u0430\u0434\u0440\u0435\u0441",
          url: "URL",
          emoji: "\u044D\u043C\u043E\u0434\u0437\u0438",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
          date: "ISO \u0434\u0430\u0442\u0430",
          time: "ISO \u0432\u0440\u0435\u043C\u044F",
          duration: "ISO \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
          ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
          ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
          cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
          cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
          base64: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64",
          base64url: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64url",
          json_string: "JSON \u0441\u0442\u0440\u043E\u043A\u0430",
          e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
          jwt: "JWT",
          template_literal: "\u0432\u0432\u043E\u0434",
        },
        n = { nan: "NaN", number: "\u0447\u0438\u0441\u043B\u043E", array: "\u043C\u0430\u0441\u0441\u0438\u0432" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C instanceof ${o.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${u}`
              : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${s}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${Zr(o.values[0])}`
              : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            if (a) {
              let u = Number(o.maximum),
                c = Cdn(u, a.unit.one, a.unit.few, a.unit.many);
              return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${o.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${s}${o.maximum.toString()} ${c}`;
            }
            return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${o.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            if (a) {
              let u = Number(o.minimum),
                c = Cdn(u, a.unit.one, a.unit.few, a.unit.many);
              return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${o.origin} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${s}${o.minimum.toString()} ${c}`;
            }
            return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${o.origin} \u0431\u0443\u0434\u0435\u0442 ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 "${s.prefix}"`
              : s.format === "ends_with"
                ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 "${s.suffix}"`
                : s.format === "includes"
                  ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C "${s.includes}"`
                  : s.format === "regex"
                    ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${s.pattern}`
                    : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${o.divisor}`;
          case "unrecognized_keys":
            return `\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D${o.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439"} \u043A\u043B\u044E\u0447${o.keys.length > 1 ? "\u0438" : ""}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0432 ${o.origin}`;
          case "invalid_union":
            return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
          case "invalid_element":
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 ${o.origin}`;
          default:
            return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
        }
      };
    };
  });
function xdn() {
  return { localeError: Lss() };
}
var Lss,
  Tdn = j(() => {
    Yi();
    Lss = () => {
      let t = {
        string: { unit: "znakov", verb: "imeti" },
        file: { unit: "bajtov", verb: "imeti" },
        array: { unit: "elementov", verb: "imeti" },
        set: { unit: "elementov", verb: "imeti" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "vnos",
          email: "e-po\u0161tni naslov",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO datum in \u010Das",
          date: "ISO datum",
          time: "ISO \u010Das",
          duration: "ISO trajanje",
          ipv4: "IPv4 naslov",
          ipv6: "IPv6 naslov",
          cidrv4: "obseg IPv4",
          cidrv6: "obseg IPv6",
          base64: "base64 kodiran niz",
          base64url: "base64url kodiran niz",
          json_string: "JSON niz",
          e164: "E.164 \u0161tevilka",
          jwt: "JWT",
          template_literal: "vnos",
        },
        n = { nan: "NaN", number: "\u0161tevilo", array: "tabela" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Neveljaven vnos: pri\u010Dakovano instanceof ${o.expected}, prejeto ${u}`
              : `Neveljaven vnos: pri\u010Dakovano ${s}, prejeto ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Neveljaven vnos: pri\u010Dakovano ${Zr(o.values[0])}`
              : `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `Preveliko: pri\u010Dakovano, da bo ${o.origin ?? "vrednost"} imelo ${s}${o.maximum.toString()} ${a.unit ?? "elementov"}`
              : `Preveliko: pri\u010Dakovano, da bo ${o.origin ?? "vrednost"} ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `Premajhno: pri\u010Dakovano, da bo ${o.origin} imelo ${s}${o.minimum.toString()} ${a.unit}`
              : `Premajhno: pri\u010Dakovano, da bo ${o.origin} ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Neveljaven niz: mora se za\u010Deti z "${s.prefix}"`
              : s.format === "ends_with"
                ? `Neveljaven niz: mora se kon\u010Dati z "${s.suffix}"`
                : s.format === "includes"
                  ? `Neveljaven niz: mora vsebovati "${s.includes}"`
                  : s.format === "regex"
                    ? `Neveljaven niz: mora ustrezati vzorcu ${s.pattern}`
                    : `Neveljaven ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik ${o.divisor}`;
          case "unrecognized_keys":
            return `Neprepoznan${o.keys.length > 1 ? "i klju\u010Di" : " klju\u010D"}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `Neveljaven klju\u010D v ${o.origin}`;
          case "invalid_union":
            return "Neveljaven vnos";
          case "invalid_element":
            return `Neveljavna vrednost v ${o.origin}`;
          default:
            return "Neveljaven vnos";
        }
      };
    };
  });
function Ddn() {
  return { localeError: Mss() };
}
var Mss,
  Idn = j(() => {
    Yi();
    Mss = () => {
      let t = {
        string: { unit: "tecken", verb: "att ha" },
        file: { unit: "bytes", verb: "att ha" },
        array: { unit: "objekt", verb: "att inneh\xE5lla" },
        set: { unit: "objekt", verb: "att inneh\xE5lla" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "regulj\xE4rt uttryck",
          email: "e-postadress",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO-datum och tid",
          date: "ISO-datum",
          time: "ISO-tid",
          duration: "ISO-varaktighet",
          ipv4: "IPv4-intervall",
          ipv6: "IPv6-intervall",
          cidrv4: "IPv4-spektrum",
          cidrv6: "IPv6-spektrum",
          base64: "base64-kodad str\xE4ng",
          base64url: "base64url-kodad str\xE4ng",
          json_string: "JSON-str\xE4ng",
          e164: "E.164-nummer",
          jwt: "JWT",
          template_literal: "mall-literal",
        },
        n = { nan: "NaN", number: "antal", array: "lista" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Ogiltig inmatning: f\xF6rv\xE4ntat instanceof ${o.expected}, fick ${u}`
              : `Ogiltig inmatning: f\xF6rv\xE4ntat ${s}, fick ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Ogiltig inmatning: f\xF6rv\xE4ntat ${Zr(o.values[0])}`
              : `Ogiltigt val: f\xF6rv\xE4ntade en av ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `F\xF6r stor(t): f\xF6rv\xE4ntade ${o.origin ?? "v\xE4rdet"} att ha ${s}${o.maximum.toString()} ${a.unit ?? "element"}`
              : `F\xF6r stor(t): f\xF6rv\xE4ntat ${o.origin ?? "v\xE4rdet"} att ha ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `F\xF6r lite(t): f\xF6rv\xE4ntade ${o.origin ?? "v\xE4rdet"} att ha ${s}${o.minimum.toString()} ${a.unit}`
              : `F\xF6r lite(t): f\xF6rv\xE4ntade ${o.origin ?? "v\xE4rdet"} att ha ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Ogiltig str\xE4ng: m\xE5ste b\xF6rja med "${s.prefix}"`
              : s.format === "ends_with"
                ? `Ogiltig str\xE4ng: m\xE5ste sluta med "${s.suffix}"`
                : s.format === "includes"
                  ? `Ogiltig str\xE4ng: m\xE5ste inneh\xE5lla "${s.includes}"`
                  : s.format === "regex"
                    ? `Ogiltig str\xE4ng: m\xE5ste matcha m\xF6nstret "${s.pattern}"`
                    : `Ogiltig(t) ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `Ogiltigt tal: m\xE5ste vara en multipel av ${o.divisor}`;
          case "unrecognized_keys":
            return `${o.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel"}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `Ogiltig nyckel i ${o.origin ?? "v\xE4rdet"}`;
          case "invalid_union":
            return "Ogiltig input";
          case "invalid_element":
            return `Ogiltigt v\xE4rde i ${o.origin ?? "v\xE4rdet"}`;
          default:
            return "Ogiltig input";
        }
      };
    };
  });
function Rdn() {
  return { localeError: Fss() };
}
var Fss,
  kdn = j(() => {
    Yi();
    Fss = () => {
      let t = {
        string: {
          unit: "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD",
          verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
        },
        file: {
          unit: "\u0BAA\u0BC8\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD",
          verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
        },
        array: {
          unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
          verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
        },
        set: {
          unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
          verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
        },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "\u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1",
          email: "\u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO \u0BA4\u0BC7\u0BA4\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
          date: "ISO \u0BA4\u0BC7\u0BA4\u0BBF",
          time: "ISO \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
          duration: "ISO \u0B95\u0BBE\u0BB2 \u0B85\u0BB3\u0BB5\u0BC1",
          ipv4: "IPv4 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
          ipv6: "IPv6 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
          cidrv4: "IPv4 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
          cidrv6: "IPv6 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
          base64: "base64-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
          base64url: "base64url-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
          json_string: "JSON \u0B9A\u0BB0\u0BAE\u0BCD",
          e164: "E.164 \u0B8E\u0BA3\u0BCD",
          jwt: "JWT",
          template_literal: "input",
        },
        n = {
          nan: "NaN",
          number: "\u0B8E\u0BA3\u0BCD",
          array: "\u0B85\u0BA3\u0BBF",
          null: "\u0BB5\u0BC6\u0BB1\u0BC1\u0BAE\u0BC8",
        };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 instanceof ${o.expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${u}`
              : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${s}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${Zr(o.values[0])}`
              : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${sr(o.values, "|")} \u0B87\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BC1`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${o.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${s}${o.maximum.toString()} ${a.unit ?? "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD"} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
              : `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${o.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${s}${o.maximum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${o.origin} ${s}${o.minimum.toString()} ${a.unit} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
              : `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${o.origin} ${s}${o.minimum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${s.prefix}" \u0B87\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
              : s.format === "ends_with"
                ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${s.suffix}" \u0B87\u0BB2\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0B9F\u0BC8\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                : s.format === "includes"
                  ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${s.includes}" \u0B90 \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                  : s.format === "regex"
                    ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: ${s.pattern} \u0BAE\u0BC1\u0BB1\u0BC8\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B9F\u0BA9\u0BCD \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                    : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B8E\u0BA3\u0BCD: ${o.divisor} \u0B87\u0BA9\u0BCD \u0BAA\u0BB2\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
          case "unrecognized_keys":
            return `\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4 \u0BB5\u0BBF\u0B9A\u0BC8${o.keys.length > 1 ? "\u0B95\u0BB3\u0BCD" : ""}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `${o.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0B9A\u0BC8`;
          case "invalid_union":
            return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
          case "invalid_element":
            return `${o.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1`;
          default:
            return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
        }
      };
    };
  });
function Odn() {
  return { localeError: Uss() };
}
var Uss,
  Ndn = j(() => {
    Yi();
    Uss = () => {
      let t = {
        string: { unit: "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
        file: { unit: "\u0E44\u0E1A\u0E15\u0E4C", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
        array: { unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
        set: { unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
          email: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25",
          url: "URL",
          emoji: "\u0E2D\u0E34\u0E42\u0E21\u0E08\u0E34",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
          date: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E1A\u0E1A ISO",
          time: "\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
          duration: "\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
          ipv4: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv4",
          ipv6: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv6",
          cidrv4: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv4",
          cidrv6: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv6",
          base64: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64",
          base64url:
            "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A URL",
          json_string: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A JSON",
          e164: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 (E.164)",
          jwt: "\u0E42\u0E17\u0E40\u0E04\u0E19 JWT",
          template_literal: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
        },
        n = {
          nan: "NaN",
          number: "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02",
          array: "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E23\u0E22\u0E4C (Array)",
          null: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32 (null)",
        };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 instanceof ${o.expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${u}`
              : `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${s} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `\u0E04\u0E48\u0E32\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${Zr(o.values[0])}`
              : `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19 ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive
                ? "\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19"
                : "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32",
              a = e(o.origin);
            return a
              ? `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${o.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${s} ${o.maximum.toString()} ${a.unit ?? "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"}`
              : `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${o.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${s} ${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive
                ? "\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22"
                : "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32",
              a = e(o.origin);
            return a
              ? `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${o.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${s} ${o.minimum.toString()} ${a.unit}`
              : `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${o.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${s} ${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E02\u0E36\u0E49\u0E19\u0E15\u0E49\u0E19\u0E14\u0E49\u0E27\u0E22 "${s.prefix}"`
              : s.format === "ends_with"
                ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E07\u0E17\u0E49\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22 "${s.suffix}"`
                : s.format === "includes"
                  ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 "${s.includes}" \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21`
                  : s.format === "regex"
                    ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 ${s.pattern}`
                    : `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22 ${o.divisor} \u0E44\u0E14\u0E49\u0E25\u0E07\u0E15\u0E31\u0E27`;
          case "unrecognized_keys":
            return `\u0E1E\u0E1A\u0E04\u0E35\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `\u0E04\u0E35\u0E22\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${o.origin}`;
          case "invalid_union":
            return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E22\u0E39\u0E40\u0E19\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49";
          case "invalid_element":
            return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${o.origin}`;
          default:
            return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07";
        }
      };
    };
  });
function Pdn() {
  return { localeError: $ss() };
}
var $ss,
  Bdn = j(() => {
    Yi();
    $ss = () => {
      let t = {
        string: { unit: "karakter", verb: "olmal\u0131" },
        file: { unit: "bayt", verb: "olmal\u0131" },
        array: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
        set: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "girdi",
          email: "e-posta adresi",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO tarih ve saat",
          date: "ISO tarih",
          time: "ISO saat",
          duration: "ISO s\xFCre",
          ipv4: "IPv4 adresi",
          ipv6: "IPv6 adresi",
          cidrv4: "IPv4 aral\u0131\u011F\u0131",
          cidrv6: "IPv6 aral\u0131\u011F\u0131",
          base64: "base64 ile \u015Fifrelenmi\u015F metin",
          base64url: "base64url ile \u015Fifrelenmi\u015F metin",
          json_string: "JSON dizesi",
          e164: "E.164 say\u0131s\u0131",
          jwt: "JWT",
          template_literal: "\u015Eablon dizesi",
        },
        n = { nan: "NaN" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Ge\xE7ersiz de\u011Fer: beklenen instanceof ${o.expected}, al\u0131nan ${u}`
              : `Ge\xE7ersiz de\u011Fer: beklenen ${s}, al\u0131nan ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Ge\xE7ersiz de\u011Fer: beklenen ${Zr(o.values[0])}`
              : `Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `\xC7ok b\xFCy\xFCk: beklenen ${o.origin ?? "de\u011Fer"} ${s}${o.maximum.toString()} ${a.unit ?? "\xF6\u011Fe"}`
              : `\xC7ok b\xFCy\xFCk: beklenen ${o.origin ?? "de\u011Fer"} ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `\xC7ok k\xFC\xE7\xFCk: beklenen ${o.origin} ${s}${o.minimum.toString()} ${a.unit}`
              : `\xC7ok k\xFC\xE7\xFCk: beklenen ${o.origin} ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Ge\xE7ersiz metin: "${s.prefix}" ile ba\u015Flamal\u0131`
              : s.format === "ends_with"
                ? `Ge\xE7ersiz metin: "${s.suffix}" ile bitmeli`
                : s.format === "includes"
                  ? `Ge\xE7ersiz metin: "${s.includes}" i\xE7ermeli`
                  : s.format === "regex"
                    ? `Ge\xE7ersiz metin: ${s.pattern} desenine uymal\u0131`
                    : `Ge\xE7ersiz ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `Ge\xE7ersiz say\u0131: ${o.divisor} ile tam b\xF6l\xFCnebilmeli`;
          case "unrecognized_keys":
            return `Tan\u0131nmayan anahtar${o.keys.length > 1 ? "lar" : ""}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `${o.origin} i\xE7inde ge\xE7ersiz anahtar`;
          case "invalid_union":
            return "Ge\xE7ersiz de\u011Fer";
          case "invalid_element":
            return `${o.origin} i\xE7inde ge\xE7ersiz de\u011Fer`;
          default:
            return "Ge\xE7ersiz de\u011Fer";
        }
      };
    };
  });
function TVe() {
  return { localeError: jss() };
}
var jss,
  EPt = j(() => {
    Yi();
    jss = () => {
      let t = {
        string: {
          unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432",
          verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
        },
        file: { unit: "\u0431\u0430\u0439\u0442\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" },
        array: {
          unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
          verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
        },
        set: {
          unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
          verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
        },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
          email:
            "\u0430\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438",
          url: "URL",
          emoji: "\u0435\u043C\u043E\u0434\u0437\u0456",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "\u0434\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441 ISO",
          date: "\u0434\u0430\u0442\u0430 ISO",
          time: "\u0447\u0430\u0441 ISO",
          duration: "\u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C ISO",
          ipv4: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv4",
          ipv6: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv6",
          cidrv4: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv4",
          cidrv6: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv6",
          base64: "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64",
          base64url:
            "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64url",
          json_string: "\u0440\u044F\u0434\u043E\u043A JSON",
          e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
          jwt: "JWT",
          template_literal: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
        },
        n = { nan: "NaN", number: "\u0447\u0438\u0441\u043B\u043E", array: "\u043C\u0430\u0441\u0438\u0432" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F instanceof ${o.expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${u}`
              : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${s}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${Zr(o.values[0])}`
              : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u043F\u0446\u0456\u044F: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0435 \u0437 ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${o.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} ${a.verb} ${s}${o.maximum.toString()} ${a.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432"}`
              : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${o.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} \u0431\u0443\u0434\u0435 ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${o.origin} ${a.verb} ${s}${o.minimum.toString()} ${a.unit}`
              : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${o.origin} \u0431\u0443\u0434\u0435 ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 "${s.prefix}"`
              : s.format === "ends_with"
                ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 "${s.suffix}"`
                : s.format === "includes"
                  ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u0438 "${s.includes}"`
                  : s.format === "regex"
                    ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${s.pattern}`
                    : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0431\u0443\u0442\u0438 \u043A\u0440\u0430\u0442\u043D\u0438\u043C ${o.divisor}`;
          case "unrecognized_keys":
            return `\u041D\u0435\u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0438\u0439 \u043A\u043B\u044E\u0447${o.keys.length > 1 ? "\u0456" : ""}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043A\u043B\u044E\u0447 \u0443 ${o.origin}`;
          case "invalid_union":
            return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
          case "invalid_element":
            return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0443 ${o.origin}`;
          default:
            return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
        }
      };
    };
  });
function Ldn() {
  return TVe();
}
var Mdn = j(() => {
  EPt();
});
function Fdn() {
  return { localeError: Qss() };
}
var Qss,
  Udn = j(() => {
    Yi();
    Qss = () => {
      let t = {
        string: { unit: "\u062D\u0631\u0648\u0641", verb: "\u06C1\u0648\u0646\u0627" },
        file: { unit: "\u0628\u0627\u0626\u0679\u0633", verb: "\u06C1\u0648\u0646\u0627" },
        array: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" },
        set: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "\u0627\u0646 \u067E\u0679",
          email: "\u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u0688\u0631\u06CC\u0633",
          url: "\u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644",
          emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
          uuid: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
          uuidv4: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 4",
          uuidv6: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 6",
          nanoid: "\u0646\u06CC\u0646\u0648 \u0622\u0626\u06CC \u0688\u06CC",
          guid: "\u062C\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
          cuid: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
          cuid2: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC 2",
          ulid: "\u06CC\u0648 \u0627\u06CC\u0644 \u0622\u0626\u06CC \u0688\u06CC",
          xid: "\u0627\u06CC\u06A9\u0633 \u0622\u0626\u06CC \u0688\u06CC",
          ksuid: "\u06A9\u06D2 \u0627\u06CC\u0633 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
          datetime: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0688\u06CC\u0679 \u0679\u0627\u0626\u0645",
          date: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u062A\u0627\u0631\u06CC\u062E",
          time: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0648\u0642\u062A",
          duration: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0645\u062F\u062A",
          ipv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0627\u06CC\u0688\u0631\u06CC\u0633",
          ipv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0627\u06CC\u0688\u0631\u06CC\u0633",
          cidrv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0631\u06CC\u0646\u062C",
          cidrv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0631\u06CC\u0646\u062C",
          base64: "\u0628\u06CC\u0633 64 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
          base64url:
            "\u0628\u06CC\u0633 64 \u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
          json_string: "\u062C\u06D2 \u0627\u06CC\u0633 \u0627\u0648 \u0627\u06CC\u0646 \u0633\u0679\u0631\u0646\u06AF",
          e164: "\u0627\u06CC 164 \u0646\u0645\u0628\u0631",
          jwt: "\u062C\u06D2 \u0688\u0628\u0644\u06CC\u0648 \u0679\u06CC",
          template_literal: "\u0627\u0646 \u067E\u0679",
        },
        n = { nan: "NaN", number: "\u0646\u0645\u0628\u0631", array: "\u0622\u0631\u06D2", null: "\u0646\u0644" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: instanceof ${o.expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${u} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`
              : `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${s} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${u} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${Zr(o.values[0])} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`
              : `\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: ${sr(o.values, "|")} \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `\u0628\u06C1\u062A \u0628\u0691\u0627: ${o.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u06D2 ${s}${o.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0627\u0635\u0631"} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`
              : `\u0628\u06C1\u062A \u0628\u0691\u0627: ${o.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u0627 ${s}${o.maximum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${o.origin} \u06A9\u06D2 ${s}${o.minimum.toString()} ${a.unit} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`
              : `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${o.origin} \u06A9\u0627 ${s}${o.minimum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${s.prefix}" \u0633\u06D2 \u0634\u0631\u0648\u0639 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
              : s.format === "ends_with"
                ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${s.suffix}" \u067E\u0631 \u062E\u062A\u0645 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
                : s.format === "includes"
                  ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${s.includes}" \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
                  : s.format === "regex"
                    ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \u067E\u06CC\u0679\u0631\u0646 ${s.pattern} \u0633\u06D2 \u0645\u06CC\u0686 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
                    : `\u063A\u0644\u0637 ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `\u063A\u0644\u0637 \u0646\u0645\u0628\u0631: ${o.divisor} \u06A9\u0627 \u0645\u0636\u0627\u0639\u0641 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
          case "unrecognized_keys":
            return `\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC${o.keys.length > 1 ? "\u0632" : ""}: ${sr(o.keys, "\u060C ")}`;
          case "invalid_key":
            return `${o.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u06A9\u06CC`;
          case "invalid_union":
            return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
          case "invalid_element":
            return `${o.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648`;
          default:
            return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
        }
      };
    };
  });
function $dn() {
  return { localeError: Gss() };
}
var Gss,
  jdn = j(() => {
    Yi();
    Gss = () => {
      let t = {
        string: { unit: "belgi", verb: "bo\u2018lishi kerak" },
        file: { unit: "bayt", verb: "bo\u2018lishi kerak" },
        array: { unit: "element", verb: "bo\u2018lishi kerak" },
        set: { unit: "element", verb: "bo\u2018lishi kerak" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "kirish",
          email: "elektron pochta manzili",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO sana va vaqti",
          date: "ISO sana",
          time: "ISO vaqt",
          duration: "ISO davomiylik",
          ipv4: "IPv4 manzil",
          ipv6: "IPv6 manzil",
          mac: "MAC manzil",
          cidrv4: "IPv4 diapazon",
          cidrv6: "IPv6 diapazon",
          base64: "base64 kodlangan satr",
          base64url: "base64url kodlangan satr",
          json_string: "JSON satr",
          e164: "E.164 raqam",
          jwt: "JWT",
          template_literal: "kirish",
        },
        n = { nan: "NaN", number: "raqam", array: "massiv" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `Noto\u2018g\u2018ri kirish: kutilgan instanceof ${o.expected}, qabul qilingan ${u}`
              : `Noto\u2018g\u2018ri kirish: kutilgan ${s}, qabul qilingan ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `Noto\u2018g\u2018ri kirish: kutilgan ${Zr(o.values[0])}`
              : `Noto\u2018g\u2018ri variant: quyidagilardan biri kutilgan ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `Juda katta: kutilgan ${o.origin ?? "qiymat"} ${s}${o.maximum.toString()} ${a.unit} ${a.verb}`
              : `Juda katta: kutilgan ${o.origin ?? "qiymat"} ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `Juda kichik: kutilgan ${o.origin} ${s}${o.minimum.toString()} ${a.unit} ${a.verb}`
              : `Juda kichik: kutilgan ${o.origin} ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Noto\u2018g\u2018ri satr: "${s.prefix}" bilan boshlanishi kerak`
              : s.format === "ends_with"
                ? `Noto\u2018g\u2018ri satr: "${s.suffix}" bilan tugashi kerak`
                : s.format === "includes"
                  ? `Noto\u2018g\u2018ri satr: "${s.includes}" ni o\u2018z ichiga olishi kerak`
                  : s.format === "regex"
                    ? `Noto\u2018g\u2018ri satr: ${s.pattern} shabloniga mos kelishi kerak`
                    : `Noto\u2018g\u2018ri ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `Noto\u2018g\u2018ri raqam: ${o.divisor} ning karralisi bo\u2018lishi kerak`;
          case "unrecognized_keys":
            return `Noma\u2019lum kalit${o.keys.length > 1 ? "lar" : ""}: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `${o.origin} dagi kalit noto\u2018g\u2018ri`;
          case "invalid_union":
            return "Noto\u2018g\u2018ri kirish";
          case "invalid_element":
            return `${o.origin} da noto\u2018g\u2018ri qiymat`;
          default:
            return "Noto\u2018g\u2018ri kirish";
        }
      };
    };
  });
function Qdn() {
  return { localeError: qss() };
}
var qss,
  Gdn = j(() => {
    Yi();
    qss = () => {
      let t = {
        string: { unit: "k\xFD t\u1EF1", verb: "c\xF3" },
        file: { unit: "byte", verb: "c\xF3" },
        array: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
        set: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "\u0111\u1EA7u v\xE0o",
          email: "\u0111\u1ECBa ch\u1EC9 email",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ng\xE0y gi\u1EDD ISO",
          date: "ng\xE0y ISO",
          time: "gi\u1EDD ISO",
          duration: "kho\u1EA3ng th\u1EDDi gian ISO",
          ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4",
          ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6",
          cidrv4: "d\u1EA3i IPv4",
          cidrv6: "d\u1EA3i IPv6",
          base64: "chu\u1ED7i m\xE3 h\xF3a base64",
          base64url: "chu\u1ED7i m\xE3 h\xF3a base64url",
          json_string: "chu\u1ED7i JSON",
          e164: "s\u1ED1 E.164",
          jwt: "JWT",
          template_literal: "\u0111\u1EA7u v\xE0o",
        },
        n = { nan: "NaN", number: "s\u1ED1", array: "m\u1EA3ng" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i instanceof ${o.expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${u}`
              : `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${s}, nh\u1EADn \u0111\u01B0\u1EE3c ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${Zr(o.values[0])}`
              : `T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${o.origin ?? "gi\xE1 tr\u1ECB"} ${a.verb} ${s}${o.maximum.toString()} ${a.unit ?? "ph\u1EA7n t\u1EED"}`
              : `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${o.origin ?? "gi\xE1 tr\u1ECB"} ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${o.origin} ${a.verb} ${s}${o.minimum.toString()} ${a.unit}`
              : `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${o.origin} ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "${s.prefix}"`
              : s.format === "ends_with"
                ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\xFAc b\u1EB1ng "${s.suffix}"`
                : s.format === "includes"
                  ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "${s.includes}"`
                  : s.format === "regex"
                    ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu ${s.pattern}`
                    : `${r[s.format] ?? o.format} kh\xF4ng h\u1EE3p l\u1EC7`;
          }
          case "not_multiple_of":
            return `S\u1ED1 kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\xE0 b\u1ED9i s\u1ED1 c\u1EE7a ${o.divisor}`;
          case "unrecognized_keys":
            return `Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `Kh\xF3a kh\xF4ng h\u1EE3p l\u1EC7 trong ${o.origin}`;
          case "invalid_union":
            return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
          case "invalid_element":
            return `Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7 trong ${o.origin}`;
          default:
            return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
        }
      };
    };
  });
function qdn() {
  return { localeError: Hss() };
}
var Hss,
  Hdn = j(() => {
    Yi();
    Hss = () => {
      let t = {
        string: { unit: "\u5B57\u7B26", verb: "\u5305\u542B" },
        file: { unit: "\u5B57\u8282", verb: "\u5305\u542B" },
        array: { unit: "\u9879", verb: "\u5305\u542B" },
        set: { unit: "\u9879", verb: "\u5305\u542B" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "\u8F93\u5165",
          email: "\u7535\u5B50\u90AE\u4EF6",
          url: "URL",
          emoji: "\u8868\u60C5\u7B26\u53F7",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO\u65E5\u671F\u65F6\u95F4",
          date: "ISO\u65E5\u671F",
          time: "ISO\u65F6\u95F4",
          duration: "ISO\u65F6\u957F",
          ipv4: "IPv4\u5730\u5740",
          ipv6: "IPv6\u5730\u5740",
          cidrv4: "IPv4\u7F51\u6BB5",
          cidrv6: "IPv6\u7F51\u6BB5",
          base64: "base64\u7F16\u7801\u5B57\u7B26\u4E32",
          base64url: "base64url\u7F16\u7801\u5B57\u7B26\u4E32",
          json_string: "JSON\u5B57\u7B26\u4E32",
          e164: "E.164\u53F7\u7801",
          jwt: "JWT",
          template_literal: "\u8F93\u5165",
        },
        n = { nan: "NaN", number: "\u6570\u5B57", array: "\u6570\u7EC4", null: "\u7A7A\u503C(null)" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B instanceof ${o.expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${u}`
              : `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${s}\uFF0C\u5B9E\u9645\u63A5\u6536 ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${Zr(o.values[0])}`
              : `\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${o.origin ?? "\u503C"} ${s}${o.maximum.toString()} ${a.unit ?? "\u4E2A\u5143\u7D20"}`
              : `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${o.origin ?? "\u503C"} ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${o.origin} ${s}${o.minimum.toString()} ${a.unit}`
              : `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${o.origin} ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${s.prefix}" \u5F00\u5934`
              : s.format === "ends_with"
                ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${s.suffix}" \u7ED3\u5C3E`
                : s.format === "includes"
                  ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u5305\u542B "${s.includes}"`
                  : s.format === "regex"
                    ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F ${s.pattern}`
                    : `\u65E0\u6548${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `\u65E0\u6548\u6570\u5B57\uFF1A\u5FC5\u987B\u662F ${o.divisor} \u7684\u500D\u6570`;
          case "unrecognized_keys":
            return `\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `${o.origin} \u4E2D\u7684\u952E(key)\u65E0\u6548`;
          case "invalid_union":
            return "\u65E0\u6548\u8F93\u5165";
          case "invalid_element":
            return `${o.origin} \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)`;
          default:
            return "\u65E0\u6548\u8F93\u5165";
        }
      };
    };
  });
function Vdn() {
  return { localeError: Vss() };
}
var Vss,
  Wdn = j(() => {
    Yi();
    Vss = () => {
      let t = {
        string: { unit: "\u5B57\u5143", verb: "\u64C1\u6709" },
        file: { unit: "\u4F4D\u5143\u7D44", verb: "\u64C1\u6709" },
        array: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
        set: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "\u8F38\u5165",
          email: "\u90F5\u4EF6\u5730\u5740",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO \u65E5\u671F\u6642\u9593",
          date: "ISO \u65E5\u671F",
          time: "ISO \u6642\u9593",
          duration: "ISO \u671F\u9593",
          ipv4: "IPv4 \u4F4D\u5740",
          ipv6: "IPv6 \u4F4D\u5740",
          cidrv4: "IPv4 \u7BC4\u570D",
          cidrv6: "IPv6 \u7BC4\u570D",
          base64: "base64 \u7DE8\u78BC\u5B57\u4E32",
          base64url: "base64url \u7DE8\u78BC\u5B57\u4E32",
          json_string: "JSON \u5B57\u4E32",
          e164: "E.164 \u6578\u503C",
          jwt: "JWT",
          template_literal: "\u8F38\u5165",
        },
        n = { nan: "NaN" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA instanceof ${o.expected}\uFF0C\u4F46\u6536\u5230 ${u}`
              : `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${s}\uFF0C\u4F46\u6536\u5230 ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${Zr(o.values[0])}`
              : `\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${o.origin ?? "\u503C"} \u61C9\u70BA ${s}${o.maximum.toString()} ${a.unit ?? "\u500B\u5143\u7D20"}`
              : `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${o.origin ?? "\u503C"} \u61C9\u70BA ${s}${o.maximum.toString()}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${o.origin} \u61C9\u70BA ${s}${o.minimum.toString()} ${a.unit}`
              : `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${o.origin} \u61C9\u70BA ${s}${o.minimum.toString()}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${s.prefix}" \u958B\u982D`
              : s.format === "ends_with"
                ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${s.suffix}" \u7D50\u5C3E`
                : s.format === "includes"
                  ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u5305\u542B "${s.includes}"`
                  : s.format === "regex"
                    ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u7B26\u5408\u683C\u5F0F ${s.pattern}`
                    : `\u7121\u6548\u7684 ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA ${o.divisor} \u7684\u500D\u6578`;
          case "unrecognized_keys":
            return `\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C${o.keys.length > 1 ? "\u5011" : ""}\uFF1A${sr(o.keys, "\u3001")}`;
          case "invalid_key":
            return `${o.origin} \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C`;
          case "invalid_union":
            return "\u7121\u6548\u7684\u8F38\u5165\u503C";
          case "invalid_element":
            return `${o.origin} \u4E2D\u6709\u7121\u6548\u7684\u503C`;
          default:
            return "\u7121\u6548\u7684\u8F38\u5165\u503C";
        }
      };
    };
  });
function zdn() {
  return { localeError: Wss() };
}
var Wss,
  Ydn = j(() => {
    Yi();
    Wss = () => {
      let t = {
        string: { unit: "\xE0mi", verb: "n\xED" },
        file: { unit: "bytes", verb: "n\xED" },
        array: { unit: "nkan", verb: "n\xED" },
        set: { unit: "nkan", verb: "n\xED" },
      };
      function e(o) {
        return t[o] ?? null;
      }
      let r = {
          regex: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9",
          email: "\xE0d\xEDr\u1EB9\u0301s\xEC \xECm\u1EB9\u0301l\xEC",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "\xE0k\xF3k\xF2 ISO",
          date: "\u1ECDj\u1ECD\u0301 ISO",
          time: "\xE0k\xF3k\xF2 ISO",
          duration: "\xE0k\xF3k\xF2 t\xF3 p\xE9 ISO",
          ipv4: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv4",
          ipv6: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv6",
          cidrv4: "\xE0gb\xE8gb\xE8 IPv4",
          cidrv6: "\xE0gb\xE8gb\xE8 IPv6",
          base64: "\u1ECD\u0300r\u1ECD\u0300 t\xED a k\u1ECD\u0301 n\xED base64",
          base64url: "\u1ECD\u0300r\u1ECD\u0300 base64url",
          json_string: "\u1ECD\u0300r\u1ECD\u0300 JSON",
          e164: "n\u1ECD\u0301mb\xE0 E.164",
          jwt: "JWT",
          template_literal: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9",
        },
        n = { nan: "NaN", number: "n\u1ECD\u0301mb\xE0", array: "akop\u1ECD" };
      return (o) => {
        switch (o.code) {
          case "invalid_type": {
            let s = n[o.expected] ?? o.expected,
              a = on(o.input),
              u = n[a] ?? a;
            return /^[A-Z]/.test(o.expected)
              ? `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi instanceof ${o.expected}, \xE0m\u1ECD\u0300 a r\xED ${u}`
              : `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${s}, \xE0m\u1ECD\u0300 a r\xED ${u}`;
          }
          case "invalid_value":
            return o.values.length === 1
              ? `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${Zr(o.values[0])}`
              : `\xC0\u1E63\xE0y\xE0n a\u1E63\xEC\u1E63e: yan \u1ECD\u0300kan l\xE1ra ${sr(o.values, "|")}`;
          case "too_big": {
            let s = o.inclusive ? "<=" : "<",
              a = e(o.origin);
            return a
              ? `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${o.origin ?? "iye"} ${a.verb} ${s}${o.maximum} ${a.unit}`
              : `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 ${s}${o.maximum}`;
          }
          case "too_small": {
            let s = o.inclusive ? ">=" : ">",
              a = e(o.origin);
            return a
              ? `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${o.origin} ${a.verb} ${s}${o.minimum} ${a.unit}`
              : `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 ${s}${o.minimum}`;
          }
          case "invalid_format": {
            let s = o;
            return s.format === "starts_with"
              ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\u1EB9\u0300r\u1EB9\u0300 p\u1EB9\u0300l\xFA "${s.prefix}"`
              : s.format === "ends_with"
                ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 par\xED p\u1EB9\u0300l\xFA "${s.suffix}"`
                : s.format === "includes"
                  ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 n\xED "${s.includes}"`
                  : s.format === "regex"
                    ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\xE1 \xE0p\u1EB9\u1EB9r\u1EB9 mu ${s.pattern}`
                    : `A\u1E63\xEC\u1E63e: ${r[s.format] ?? o.format}`;
          }
          case "not_multiple_of":
            return `N\u1ECD\u0301mb\xE0 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 j\u1EB9\u0301 \xE8y\xE0 p\xEDp\xEDn ti ${o.divisor}`;
          case "unrecognized_keys":
            return `B\u1ECDt\xECn\xEC \xE0\xECm\u1ECD\u0300: ${sr(o.keys, ", ")}`;
          case "invalid_key":
            return `B\u1ECDt\xECn\xEC a\u1E63\xEC\u1E63e n\xEDn\xFA ${o.origin}`;
          case "invalid_union":
            return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
          case "invalid_element":
            return `Iye a\u1E63\xEC\u1E63e n\xEDn\xFA ${o.origin}`;
          default:
            return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
        }
      };
    };
  });
var moe = {};
Wi(moe, {
  ar: () => umn,
  az: () => lmn,
  be: () => fmn,
  bg: () => hmn,
  ca: () => bmn,
  cs: () => ymn,
  da: () => Emn,
  de: () => Cmn,
  en: () => wVe,
  eo: () => wmn,
  es: () => Tmn,
  fa: () => Imn,
  fi: () => kmn,
  fr: () => Nmn,
  frCA: () => Bmn,
  he: () => Mmn,
  hu: () => Umn,
  hy: () => Qmn,
  id: () => qmn,
  is: () => Vmn,
  it: () => zmn,
  ja: () => Kmn,
  ka: () => Xmn,
  kh: () => edn,
  km: () => xVe,
  ko: () => rdn,
  lt: () => odn,
  mk: () => adn,
  ms: () => cdn,
  nl: () => mdn,
  no: () => fdn,
  ota: () => hdn,
  pl: () => ydn,
  ps: () => bdn,
  pt: () => Edn,
  ru: () => Sdn,
  sl: () => xdn,
  sv: () => Ddn,
  ta: () => Rdn,
  th: () => Odn,
  tr: () => Pdn,
  ua: () => Ldn,
  uk: () => TVe,
  ur: () => Fdn,
  uz: () => $dn,
  vi: () => Qdn,
  yo: () => zdn,
  zhCN: () => qdn,
  zhTW: () => Vdn,
});
var DVe = j(() => {
  cmn();
  mmn();
  pmn();
  gmn();
  Amn();
  _mn();
  vmn();
  Smn();
  yPt();
  xmn();
  Dmn();
  Rmn();
  Omn();
  Pmn();
  Lmn();
  Fmn();
  $mn();
  Gmn();
  Hmn();
  Wmn();
  Ymn();
  Jmn();
  Zmn();
  tdn();
  _Pt();
  ndn();
  sdn();
  udn();
  ldn();
  ddn();
  pdn();
  gdn();
  Adn();
  _dn();
  vdn();
  wdn();
  Tdn();
  Idn();
  kdn();
  Ndn();
  Bdn();
  Mdn();
  EPt();
  Udn();
  jdn();
  Gdn();
  Hdn();
  Wdn();
  Ydn();
});
function V2e() {
  return new IVe();
}
var Kdn,
  RVe,
  kVe,
  IVe,
  Gh,
  W2e = j(() => {
    ((RVe = Symbol("ZodOutput")),
      (kVe = Symbol("ZodInput")),
      (IVe = class {
        constructor() {
          ((this._map = new WeakMap()), (this._idmap = new Map()));
        }
        add(e, ...r) {
          let n = r[0];
          return (this._map.set(e, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, e), this);
        }
        clear() {
          return ((this._map = new WeakMap()), (this._idmap = new Map()), this);
        }
        remove(e) {
          let r = this._map.get(e);
          return (r && typeof r == "object" && "id" in r && this._idmap.delete(r.id), this._map.delete(e), this);
        }
        get(e) {
          let r = e._zod.parent;
          if (r) {
            let n = { ...(this.get(r) ?? {}) };
            delete n.id;
            let o = { ...n, ...this._map.get(e) };
            return Object.keys(o).length ? o : void 0;
          }
          return this._map.get(e);
        }
        has(e) {
          return this._map.has(e);
        }
      }));
    (Kdn = globalThis).__zod_globalRegistry ?? (Kdn.__zod_globalRegistry = V2e());
    Gh = globalThis.__zod_globalRegistry;
  });
function OVe(t, e) {
  return new t({ type: "string", ...un(e) });
}
function NVe(t, e) {
  return new t({ type: "string", coerce: !0, ...un(e) });
}
function z2e(t, e) {
  return new t({ type: "string", format: "email", check: "string_format", abort: !1, ...un(e) });
}
function doe(t, e) {
  return new t({ type: "string", format: "guid", check: "string_format", abort: !1, ...un(e) });
}
function Y2e(t, e) {
  return new t({ type: "string", format: "uuid", check: "string_format", abort: !1, ...un(e) });
}
function K2e(t, e) {
  return new t({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v4", ...un(e) });
}
function J2e(t, e) {
  return new t({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v6", ...un(e) });
}
function X2e(t, e) {
  return new t({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v7", ...un(e) });
}
function foe(t, e) {
  return new t({ type: "string", format: "url", check: "string_format", abort: !1, ...un(e) });
}
function Z2e(t, e) {
  return new t({ type: "string", format: "emoji", check: "string_format", abort: !1, ...un(e) });
}
function e5e(t, e) {
  return new t({ type: "string", format: "nanoid", check: "string_format", abort: !1, ...un(e) });
}
function t5e(t, e) {
  return new t({ type: "string", format: "cuid", check: "string_format", abort: !1, ...un(e) });
}
function r5e(t, e) {
  return new t({ type: "string", format: "cuid2", check: "string_format", abort: !1, ...un(e) });
}
function n5e(t, e) {
  return new t({ type: "string", format: "ulid", check: "string_format", abort: !1, ...un(e) });
}
function i5e(t, e) {
  return new t({ type: "string", format: "xid", check: "string_format", abort: !1, ...un(e) });
}
function o5e(t, e) {
  return new t({ type: "string", format: "ksuid", check: "string_format", abort: !1, ...un(e) });
}
function s5e(t, e) {
  return new t({ type: "string", format: "ipv4", check: "string_format", abort: !1, ...un(e) });
}
function a5e(t, e) {
  return new t({ type: "string", format: "ipv6", check: "string_format", abort: !1, ...un(e) });
}
function PVe(t, e) {
  return new t({ type: "string", format: "mac", check: "string_format", abort: !1, ...un(e) });
}
function u5e(t, e) {
  return new t({ type: "string", format: "cidrv4", check: "string_format", abort: !1, ...un(e) });
}
function c5e(t, e) {
  return new t({ type: "string", format: "cidrv6", check: "string_format", abort: !1, ...un(e) });
}
function l5e(t, e) {
  return new t({ type: "string", format: "base64", check: "string_format", abort: !1, ...un(e) });
}
function m5e(t, e) {
  return new t({ type: "string", format: "base64url", check: "string_format", abort: !1, ...un(e) });
}
function d5e(t, e) {
  return new t({ type: "string", format: "e164", check: "string_format", abort: !1, ...un(e) });
}
function f5e(t, e) {
  return new t({ type: "string", format: "jwt", check: "string_format", abort: !1, ...un(e) });
}
function LVe(t, e) {
  return new t({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...un(e),
  });
}
function MVe(t, e) {
  return new t({ type: "string", format: "date", check: "string_format", ...un(e) });
}
function FVe(t, e) {
  return new t({ type: "string", format: "time", check: "string_format", precision: null, ...un(e) });
}
function UVe(t, e) {
  return new t({ type: "string", format: "duration", check: "string_format", ...un(e) });
}
function $Ve(t, e) {
  return new t({ type: "number", checks: [], ...un(e) });
}
function jVe(t, e) {
  return new t({ type: "number", coerce: !0, checks: [], ...un(e) });
}
function QVe(t, e) {
  return new t({ type: "number", check: "number_format", abort: !1, format: "safeint", ...un(e) });
}
function GVe(t, e) {
  return new t({ type: "number", check: "number_format", abort: !1, format: "float32", ...un(e) });
}
function qVe(t, e) {
  return new t({ type: "number", check: "number_format", abort: !1, format: "float64", ...un(e) });
}
function HVe(t, e) {
  return new t({ type: "number", check: "number_format", abort: !1, format: "int32", ...un(e) });
}
function VVe(t, e) {
  return new t({ type: "number", check: "number_format", abort: !1, format: "uint32", ...un(e) });
}
function WVe(t, e) {
  return new t({ type: "boolean", ...un(e) });
}
function zVe(t, e) {
  return new t({ type: "boolean", coerce: !0, ...un(e) });
}
function YVe(t, e) {
  return new t({ type: "bigint", ...un(e) });
}
function KVe(t, e) {
  return new t({ type: "bigint", coerce: !0, ...un(e) });
}
function JVe(t, e) {
  return new t({ type: "bigint", check: "bigint_format", abort: !1, format: "int64", ...un(e) });
}
function XVe(t, e) {
  return new t({ type: "bigint", check: "bigint_format", abort: !1, format: "uint64", ...un(e) });
}
function ZVe(t, e) {
  return new t({ type: "symbol", ...un(e) });
}
function eWe(t, e) {
  return new t({ type: "undefined", ...un(e) });
}
function tWe(t, e) {
  return new t({ type: "null", ...un(e) });
}
function rWe(t) {
  return new t({ type: "any" });
}
function nWe(t) {
  return new t({ type: "unknown" });
}
function iWe(t, e) {
  return new t({ type: "never", ...un(e) });
}
function oWe(t, e) {
  return new t({ type: "void", ...un(e) });
}
function sWe(t, e) {
  return new t({ type: "date", ...un(e) });
}
function aWe(t, e) {
  return new t({ type: "date", coerce: !0, ...un(e) });
}
function uWe(t, e) {
  return new t({ type: "nan", ...un(e) });
}
function S4(t, e) {
  return new lHe({ check: "less_than", ...un(e), value: t, inclusive: !1 });
}
function _2(t, e) {
  return new lHe({ check: "less_than", ...un(e), value: t, inclusive: !0 });
}
function w4(t, e) {
  return new mHe({ check: "greater_than", ...un(e), value: t, inclusive: !1 });
}
function sg(t, e) {
  return new mHe({ check: "greater_than", ...un(e), value: t, inclusive: !0 });
}
function p5e(t) {
  return w4(0, t);
}
function h5e(t) {
  return S4(0, t);
}
function g5e(t) {
  return _2(0, t);
}
function b5e(t) {
  return sg(0, t);
}
function sk(t, e) {
  return new WNt({ check: "multiple_of", ...un(e), value: t });
}
function ak(t, e) {
  return new KNt({ check: "max_size", ...un(e), maximum: t });
}
function x4(t, e) {
  return new JNt({ check: "min_size", ...un(e), minimum: t });
}
function tM(t, e) {
  return new XNt({ check: "size_equals", ...un(e), size: t });
}
function rM(t, e) {
  return new ZNt({ check: "max_length", ...un(e), maximum: t });
}
function wT(t, e) {
  return new ePt({ check: "min_length", ...un(e), minimum: t });
}
function nM(t, e) {
  return new tPt({ check: "length_equals", ...un(e), length: t });
}
function vH(t, e) {
  return new rPt({ check: "string_format", format: "regex", ...un(e), pattern: t });
}
function CH(t) {
  return new nPt({ check: "string_format", format: "lowercase", ...un(t) });
}
function SH(t) {
  return new iPt({ check: "string_format", format: "uppercase", ...un(t) });
}
function wH(t, e) {
  return new oPt({ check: "string_format", format: "includes", ...un(e), includes: t });
}
function xH(t, e) {
  return new sPt({ check: "string_format", format: "starts_with", ...un(e), prefix: t });
}
function TH(t, e) {
  return new aPt({ check: "string_format", format: "ends_with", ...un(e), suffix: t });
}
function A5e(t, e, r) {
  return new uPt({ check: "property", property: t, schema: e, ...un(r) });
}
function DH(t, e) {
  return new cPt({ check: "mime_type", mime: t, ...un(e) });
}
function oE(t) {
  return new lPt({ check: "overwrite", tx: t });
}
function IH(t) {
  return oE((e) => e.normalize(t));
}
function RH() {
  return oE((t) => t.trim());
}
function kH() {
  return oE((t) => t.toLowerCase());
}
function OH() {
  return oE((t) => t.toUpperCase());
}
function poe() {
  return oE((t) => mNt(t));
}
function vPt(t, e, r) {
  return new t({ type: "array", element: e, ...un(r) });
}
function Yss(t, e, r) {
  return new t({ type: "union", options: e, ...un(r) });
}
function Kss(t, e, r) {
  return new t({ type: "union", options: e, inclusive: !1, ...un(r) });
}
function Jss(t, e, r, n) {
  return new t({ type: "union", options: r, discriminator: e, ...un(n) });
}
function Xss(t, e, r) {
  return new t({ type: "intersection", left: e, right: r });
}
function Zss(t, e, r, n) {
  let o = r instanceof Xo,
    s = o ? n : r,
    a = o ? r : null;
  return new t({ type: "tuple", items: e, rest: a, ...un(s) });
}
function eas(t, e, r, n) {
  return new t({ type: "record", keyType: e, valueType: r, ...un(n) });
}
function tas(t, e, r, n) {
  return new t({ type: "map", keyType: e, valueType: r, ...un(n) });
}
function ras(t, e, r) {
  return new t({ type: "set", valueType: e, ...un(r) });
}
function nas(t, e, r) {
  let n = Array.isArray(e) ? Object.fromEntries(e.map((o) => [o, o])) : e;
  return new t({ type: "enum", entries: n, ...un(r) });
}
function ias(t, e, r) {
  return new t({ type: "enum", entries: e, ...un(r) });
}
function oas(t, e, r) {
  return new t({ type: "literal", values: Array.isArray(e) ? e : [e], ...un(r) });
}
function cWe(t, e) {
  return new t({ type: "file", ...un(e) });
}
function sas(t, e) {
  return new t({ type: "transform", transform: e });
}
function aas(t, e) {
  return new t({ type: "optional", innerType: e });
}
function uas(t, e) {
  return new t({ type: "nullable", innerType: e });
}
function cas(t, e, r) {
  return new t({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof r == "function" ? r() : Kqe(r);
    },
  });
}
function las(t, e, r) {
  return new t({ type: "nonoptional", innerType: e, ...un(r) });
}
function mas(t, e) {
  return new t({ type: "success", innerType: e });
}
function das(t, e, r) {
  return new t({ type: "catch", innerType: e, catchValue: typeof r == "function" ? r : () => r });
}
function fas(t, e, r) {
  return new t({ type: "pipe", in: e, out: r });
}
function pas(t, e) {
  return new t({ type: "readonly", innerType: e });
}
function has(t, e, r) {
  return new t({ type: "template_literal", parts: e, ...un(r) });
}
function gas(t, e) {
  return new t({ type: "lazy", getter: e });
}
function bas(t, e) {
  return new t({ type: "promise", innerType: e });
}
function lWe(t, e, r) {
  let n = un(r);
  return (n.abort ?? (n.abort = !0), new t({ type: "custom", check: "custom", fn: e, ...n }));
}
function mWe(t, e, r) {
  return new t({ type: "custom", check: "custom", fn: e, ...un(r) });
}
function dWe(t) {
  let e = Jdn(
    (r) => (
      (r.addIssue = (n) => {
        if (typeof n == "string") r.issues.push(Kie(n, r.value, e._zod.def));
        else {
          let o = n;
          (o.fatal && (o.continue = !1),
            o.code ?? (o.code = "custom"),
            o.input ?? (o.input = r.value),
            o.inst ?? (o.inst = e),
            o.continue ?? (o.continue = !e._zod.def.abort),
            r.issues.push(Kie(o)));
        }
      }),
      t(r.value, r)
    ),
  );
  return e;
}
function Jdn(t, e) {
  let r = new zl({ check: "custom", ...un(e) });
  return ((r._zod.check = t), r);
}
function fWe(t) {
  let e = new zl({ check: "describe" });
  return (
    (e._zod.onattach = [
      (r) => {
        let n = Gh.get(r) ?? {};
        Gh.add(r, { ...n, description: t });
      },
    ]),
    (e._zod.check = () => {}),
    e
  );
}
function pWe(t) {
  let e = new zl({ check: "meta" });
  return (
    (e._zod.onattach = [
      (r) => {
        let n = Gh.get(r) ?? {};
        Gh.add(r, { ...n, ...t });
      },
    ]),
    (e._zod.check = () => {}),
    e
  );
}
function hWe(t, e) {
  let r = un(e),
    n = r.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
    o = r.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  r.case !== "sensitive" &&
    ((n = n.map((h) => (typeof h == "string" ? h.toLowerCase() : h))),
    (o = o.map((h) => (typeof h == "string" ? h.toLowerCase() : h))));
  let s = new Set(n),
    a = new Set(o),
    u = t.Codec ?? coe,
    c = t.Boolean ?? aoe,
    m = t.String ?? eM,
    d = new m({ type: "string", error: r.error }),
    f = new c({ type: "boolean", error: r.error }),
    p = new u({
      type: "pipe",
      in: d,
      out: f,
      transform: (h, g) => {
        let b = h;
        return (
          r.case !== "sensitive" && (b = b.toLowerCase()),
          s.has(b)
            ? !0
            : a.has(b)
              ? !1
              : (g.issues.push({
                  code: "invalid_value",
                  expected: "stringbool",
                  values: [...s, ...a],
                  input: g.value,
                  inst: p,
                  continue: !1,
                }),
                {})
        );
      },
      reverseTransform: (h, g) => (h === !0 ? n[0] || "true" : o[0] || "false"),
      error: r.error,
    });
  return p;
}
function NH(t, e, r, n = {}) {
  let o = un(n),
    s = {
      ...un(n),
      check: "string_format",
      type: "string",
      format: e,
      fn: typeof r == "function" ? r : (u) => r.test(u),
      ...o,
    };
  return (r instanceof RegExp && (s.pattern = r), new t(s));
}
var BVe,
  Xdn = j(() => {
    dHe();
    W2e();
    APt();
    Yi();
    BVe = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 };
  });
function iM(t) {
  let e = t?.target ?? "draft-2020-12";
  return (
    e === "draft-4" && (e = "draft-04"),
    e === "draft-7" && (e = "draft-07"),
    {
      processors: t.processors ?? {},
      metadataRegistry: t?.metadata ?? Gh,
      target: e,
      unrepresentable: t?.unrepresentable ?? "throw",
      override: t?.override ?? (() => {}),
      io: t?.io ?? "output",
      counter: 0,
      seen: new Map(),
      cycles: t?.cycles ?? "ref",
      reused: t?.reused ?? "inline",
      external: t?.external ?? void 0,
    }
  );
}
function tl(t, e, r = { path: [], schemaPath: [] }) {
  var n;
  let o = t._zod.def,
    s = e.seen.get(t);
  if (s) return (s.count++, r.schemaPath.includes(t) && (s.cycle = r.path), s.schema);
  let a = { schema: {}, count: 1, cycle: void 0, path: r.path };
  e.seen.set(t, a);
  let u = t._zod.toJSONSchema?.();
  if (u) a.schema = u;
  else {
    let d = { ...r, schemaPath: [...r.schemaPath, t], path: r.path };
    if (t._zod.processJSONSchema) t._zod.processJSONSchema(e, a.schema, d);
    else {
      let p = a.schema,
        h = e.processors[o.type];
      if (!h) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${o.type}`);
      h(t, e, p, d);
    }
    let f = t._zod.parent;
    f && (a.ref || (a.ref = f), tl(f, e, d), (e.seen.get(f).isParent = !0));
  }
  let c = e.metadataRegistry.get(t);
  return (
    c && Object.assign(a.schema, c),
    e.io === "input" && E2(t) && (delete a.schema.examples, delete a.schema.default),
    e.io === "input" && a.schema._prefault && ((n = a.schema).default ?? (n.default = a.schema._prefault)),
    delete a.schema._prefault,
    e.seen.get(t).schema
  );
}
function oM(t, e) {
  let r = t.seen.get(e);
  if (!r) throw new Error("Unprocessed schema. This is a bug in Zod.");
  let n = new Map();
  for (let a of t.seen.entries()) {
    let u = t.metadataRegistry.get(a[0])?.id;
    if (u) {
      let c = n.get(u);
      if (c && c !== a[0])
        throw new Error(
          `Duplicate schema id "${u}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
        );
      n.set(u, a[0]);
    }
  }
  let o = (a) => {
      let u = t.target === "draft-2020-12" ? "$defs" : "definitions";
      if (t.external) {
        let f = t.external.registry.get(a[0])?.id,
          p = t.external.uri ?? ((g) => g);
        if (f) return { ref: p(f) };
        let h = a[1].defId ?? a[1].schema.id ?? `schema${t.counter++}`;
        return ((a[1].defId = h), { defId: h, ref: `${p("__shared")}#/${u}/${h}` });
      }
      if (a[1] === r) return { ref: "#" };
      let m = `#/${u}/`,
        d = a[1].schema.id ?? `__schema${t.counter++}`;
      return { defId: d, ref: m + d };
    },
    s = (a) => {
      if (a[1].schema.$ref) return;
      let u = a[1],
        { ref: c, defId: m } = o(a);
      ((u.def = { ...u.schema }), m && (u.defId = m));
      let d = u.schema;
      for (let f in d) delete d[f];
      d.$ref = c;
    };
  if (t.cycles === "throw")
    for (let a of t.seen.entries()) {
      let u = a[1];
      if (u.cycle)
        throw new Error(`Cycle detected: #/${u.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (let a of t.seen.entries()) {
    let u = a[1];
    if (e === a[0]) {
      s(a);
      continue;
    }
    if (t.external) {
      let m = t.external.registry.get(a[0])?.id;
      if (e !== a[0] && m) {
        s(a);
        continue;
      }
    }
    if (t.metadataRegistry.get(a[0])?.id) {
      s(a);
      continue;
    }
    if (u.cycle) {
      s(a);
      continue;
    }
    if (u.count > 1 && t.reused === "ref") {
      s(a);
      continue;
    }
  }
}
function sM(t, e) {
  let r = t.seen.get(e);
  if (!r) throw new Error("Unprocessed schema. This is a bug in Zod.");
  let n = (a) => {
    let u = t.seen.get(a);
    if (u.ref === null) return;
    let c = u.def ?? u.schema,
      m = { ...c },
      d = u.ref;
    if (((u.ref = null), d)) {
      n(d);
      let p = t.seen.get(d),
        h = p.schema;
      if (
        (h.$ref && (t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0")
          ? ((c.allOf = c.allOf ?? []), c.allOf.push(h))
          : Object.assign(c, h),
        Object.assign(c, m),
        a._zod.parent === d)
      )
        for (let b in c) b === "$ref" || b === "allOf" || b in m || delete c[b];
      if (h.$ref)
        for (let b in c)
          b === "$ref" ||
            b === "allOf" ||
            (b in p.def && JSON.stringify(c[b]) === JSON.stringify(p.def[b]) && delete c[b]);
    }
    let f = a._zod.parent;
    if (f && f !== d) {
      n(f);
      let p = t.seen.get(f);
      if (p?.schema.$ref && ((c.$ref = p.schema.$ref), p.def))
        for (let h in c)
          h === "$ref" ||
            h === "allOf" ||
            (h in p.def && JSON.stringify(c[h]) === JSON.stringify(p.def[h]) && delete c[h]);
    }
    t.override({ zodSchema: a, jsonSchema: c, path: u.path ?? [] });
  };
  for (let a of [...t.seen.entries()].reverse()) n(a[0]);
  let o = {};
  if (
    (t.target === "draft-2020-12"
      ? (o.$schema = "https://json-schema.org/draft/2020-12/schema")
      : t.target === "draft-07"
        ? (o.$schema = "http://json-schema.org/draft-07/schema#")
        : t.target === "draft-04"
          ? (o.$schema = "http://json-schema.org/draft-04/schema#")
          : t.target,
    t.external?.uri)
  ) {
    let a = t.external.registry.get(e)?.id;
    if (!a) throw new Error("Schema is missing an `id` property");
    o.$id = t.external.uri(a);
  }
  Object.assign(o, r.def ?? r.schema);
  let s = t.external?.defs ?? {};
  for (let a of t.seen.entries()) {
    let u = a[1];
    u.def && u.defId && (s[u.defId] = u.def);
  }
  t.external || (Object.keys(s).length > 0 && (t.target === "draft-2020-12" ? (o.$defs = s) : (o.definitions = s)));
  try {
    let a = JSON.parse(JSON.stringify(o));
    return (
      Object.defineProperty(a, "~standard", {
        value: {
          ...e["~standard"],
          jsonSchema: { input: hoe(e, "input", t.processors), output: hoe(e, "output", t.processors) },
        },
        enumerable: !1,
        writable: !1,
      }),
      a
    );
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function E2(t, e) {
  let r = e ?? { seen: new Set() };
  if (r.seen.has(t)) return !1;
  r.seen.add(t);
  let n = t._zod.def;
  if (n.type === "transform") return !0;
  if (n.type === "array") return E2(n.element, r);
  if (n.type === "set") return E2(n.valueType, r);
  if (n.type === "lazy") return E2(n.getter(), r);
  if (
    n.type === "promise" ||
    n.type === "optional" ||
    n.type === "nonoptional" ||
    n.type === "nullable" ||
    n.type === "readonly" ||
    n.type === "default" ||
    n.type === "prefault"
  )
    return E2(n.innerType, r);
  if (n.type === "intersection") return E2(n.left, r) || E2(n.right, r);
  if (n.type === "record" || n.type === "map") return E2(n.keyType, r) || E2(n.valueType, r);
  if (n.type === "pipe") return E2(n.in, r) || E2(n.out, r);
  if (n.type === "object") {
    for (let o in n.shape) if (E2(n.shape[o], r)) return !0;
    return !1;
  }
  if (n.type === "union") {
    for (let o of n.options) if (E2(o, r)) return !0;
    return !1;
  }
  if (n.type === "tuple") {
    for (let o of n.items) if (E2(o, r)) return !0;
    return !!(n.rest && E2(n.rest, r));
  }
  return !1;
}
var CPt,
  hoe,
  y5e = j(() => {
    W2e();
    ((CPt =
      (t, e = {}) =>
      (r) => {
        let n = iM({ ...r, processors: e });
        return (tl(t, n), oM(n, t), sM(n, t));
      }),
      (hoe =
        (t, e, r = {}) =>
        (n) => {
          let { libraryOptions: o, target: s } = n ?? {},
            a = iM({ ...(o ?? {}), target: s, io: e, processors: r });
          return (tl(t, a), oM(a, t), sM(a, t));
        }));
  });
function goe(t, e) {
  if ("_idmap" in t) {
    let n = t,
      o = iM({ ...e, processors: gWe }),
      s = {};
    for (let c of n._idmap.entries()) {
      let [m, d] = c;
      tl(d, o);
    }
    let a = {},
      u = { registry: n, uri: e?.uri, defs: s };
    o.external = u;
    for (let c of n._idmap.entries()) {
      let [m, d] = c;
      (oM(o, d), (a[m] = sM(o, d)));
    }
    if (Object.keys(s).length > 0) {
      let c = o.target === "draft-2020-12" ? "$defs" : "definitions";
      a.__shared = { [c]: s };
    }
    return { schemas: a };
  }
  let r = iM({ ...e, processors: gWe });
  return (tl(t, r), oM(r, t), sM(r, t));
}
var Aas,
  SPt,
  wPt,
  xPt,
  TPt,
  DPt,
  IPt,
  RPt,
  kPt,
  OPt,
  NPt,
  PPt,
  BPt,
  LPt,
  MPt,
  FPt,
  UPt,
  $Pt,
  jPt,
  QPt,
  GPt,
  qPt,
  HPt,
  VPt,
  WPt,
  zPt,
  bWe,
  YPt,
  KPt,
  JPt,
  XPt,
  ZPt,
  eBt,
  tBt,
  rBt,
  nBt,
  iBt,
  oBt,
  AWe,
  sBt,
  gWe,
  boe = j(() => {
    y5e();
    Yi();
    ((Aas = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" }),
      (SPt = (t, e, r, n) => {
        let o = r;
        o.type = "string";
        let { minimum: s, maximum: a, format: u, patterns: c, contentEncoding: m } = t._zod.bag;
        if (
          (typeof s == "number" && (o.minLength = s),
          typeof a == "number" && (o.maxLength = a),
          u && ((o.format = Aas[u] ?? u), o.format === "" && delete o.format, u === "time" && delete o.format),
          m && (o.contentEncoding = m),
          c && c.size > 0)
        ) {
          let d = [...c];
          d.length === 1
            ? (o.pattern = d[0].source)
            : d.length > 1 &&
              (o.allOf = [
                ...d.map((f) => ({
                  ...(e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0"
                    ? { type: "string" }
                    : {}),
                  pattern: f.source,
                })),
              ]);
        }
      }),
      (wPt = (t, e, r, n) => {
        let o = r,
          { minimum: s, maximum: a, format: u, multipleOf: c, exclusiveMaximum: m, exclusiveMinimum: d } = t._zod.bag;
        (typeof u == "string" && u.includes("int") ? (o.type = "integer") : (o.type = "number"),
          typeof d == "number" &&
            (e.target === "draft-04" || e.target === "openapi-3.0"
              ? ((o.minimum = d), (o.exclusiveMinimum = !0))
              : (o.exclusiveMinimum = d)),
          typeof s == "number" &&
            ((o.minimum = s),
            typeof d == "number" && e.target !== "draft-04" && (d >= s ? delete o.minimum : delete o.exclusiveMinimum)),
          typeof m == "number" &&
            (e.target === "draft-04" || e.target === "openapi-3.0"
              ? ((o.maximum = m), (o.exclusiveMaximum = !0))
              : (o.exclusiveMaximum = m)),
          typeof a == "number" &&
            ((o.maximum = a),
            typeof m == "number" && e.target !== "draft-04" && (m <= a ? delete o.maximum : delete o.exclusiveMaximum)),
          typeof c == "number" && (o.multipleOf = c));
      }),
      (xPt = (t, e, r, n) => {
        r.type = "boolean";
      }),
      (TPt = (t, e, r, n) => {
        if (e.unrepresentable === "throw") throw new Error("BigInt cannot be represented in JSON Schema");
      }),
      (DPt = (t, e, r, n) => {
        if (e.unrepresentable === "throw") throw new Error("Symbols cannot be represented in JSON Schema");
      }),
      (IPt = (t, e, r, n) => {
        e.target === "openapi-3.0" ? ((r.type = "string"), (r.nullable = !0), (r.enum = [null])) : (r.type = "null");
      }),
      (RPt = (t, e, r, n) => {
        if (e.unrepresentable === "throw") throw new Error("Undefined cannot be represented in JSON Schema");
      }),
      (kPt = (t, e, r, n) => {
        if (e.unrepresentable === "throw") throw new Error("Void cannot be represented in JSON Schema");
      }),
      (OPt = (t, e, r, n) => {
        r.not = {};
      }),
      (NPt = (t, e, r, n) => {}),
      (PPt = (t, e, r, n) => {}),
      (BPt = (t, e, r, n) => {
        if (e.unrepresentable === "throw") throw new Error("Date cannot be represented in JSON Schema");
      }),
      (LPt = (t, e, r, n) => {
        let o = t._zod.def,
          s = O2e(o.entries);
        (s.every((a) => typeof a == "number") && (r.type = "number"),
          s.every((a) => typeof a == "string") && (r.type = "string"),
          (r.enum = s));
      }),
      (MPt = (t, e, r, n) => {
        let o = t._zod.def,
          s = [];
        for (let a of o.values)
          if (a === void 0) {
            if (e.unrepresentable === "throw")
              throw new Error("Literal `undefined` cannot be represented in JSON Schema");
          } else if (typeof a == "bigint") {
            if (e.unrepresentable === "throw") throw new Error("BigInt literals cannot be represented in JSON Schema");
            s.push(Number(a));
          } else s.push(a);
        if (s.length !== 0)
          if (s.length === 1) {
            let a = s[0];
            ((r.type = a === null ? "null" : typeof a),
              e.target === "draft-04" || e.target === "openapi-3.0" ? (r.enum = [a]) : (r.const = a));
          } else
            (s.every((a) => typeof a == "number") && (r.type = "number"),
              s.every((a) => typeof a == "string") && (r.type = "string"),
              s.every((a) => typeof a == "boolean") && (r.type = "boolean"),
              s.every((a) => a === null) && (r.type = "null"),
              (r.enum = s));
      }),
      (FPt = (t, e, r, n) => {
        if (e.unrepresentable === "throw") throw new Error("NaN cannot be represented in JSON Schema");
      }),
      (UPt = (t, e, r, n) => {
        let o = r,
          s = t._zod.pattern;
        if (!s) throw new Error("Pattern not found in template literal");
        ((o.type = "string"), (o.pattern = s.source));
      }),
      ($Pt = (t, e, r, n) => {
        let o = r,
          s = { type: "string", format: "binary", contentEncoding: "binary" },
          { minimum: a, maximum: u, mime: c } = t._zod.bag;
        (a !== void 0 && (s.minLength = a),
          u !== void 0 && (s.maxLength = u),
          c
            ? c.length === 1
              ? ((s.contentMediaType = c[0]), Object.assign(o, s))
              : (Object.assign(o, s), (o.anyOf = c.map((m) => ({ contentMediaType: m }))))
            : Object.assign(o, s));
      }),
      (jPt = (t, e, r, n) => {
        r.type = "boolean";
      }),
      (QPt = (t, e, r, n) => {
        if (e.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
      }),
      (GPt = (t, e, r, n) => {
        if (e.unrepresentable === "throw") throw new Error("Function types cannot be represented in JSON Schema");
      }),
      (qPt = (t, e, r, n) => {
        if (e.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
      }),
      (HPt = (t, e, r, n) => {
        if (e.unrepresentable === "throw") throw new Error("Map cannot be represented in JSON Schema");
      }),
      (VPt = (t, e, r, n) => {
        if (e.unrepresentable === "throw") throw new Error("Set cannot be represented in JSON Schema");
      }),
      (WPt = (t, e, r, n) => {
        let o = r,
          s = t._zod.def,
          { minimum: a, maximum: u } = t._zod.bag;
        (typeof a == "number" && (o.minItems = a),
          typeof u == "number" && (o.maxItems = u),
          (o.type = "array"),
          (o.items = tl(s.element, e, { ...n, path: [...n.path, "items"] })));
      }),
      (zPt = (t, e, r, n) => {
        let o = r,
          s = t._zod.def;
        ((o.type = "object"), (o.properties = {}));
        let a = s.shape;
        for (let m in a) o.properties[m] = tl(a[m], e, { ...n, path: [...n.path, "properties", m] });
        let u = new Set(Object.keys(a)),
          c = new Set(
            [...u].filter((m) => {
              let d = s.shape[m]._zod;
              return e.io === "input" ? d.optin === void 0 : d.optout === void 0;
            }),
          );
        (c.size > 0 && (o.required = Array.from(c)),
          s.catchall?._zod.def.type === "never"
            ? (o.additionalProperties = !1)
            : s.catchall
              ? s.catchall &&
                (o.additionalProperties = tl(s.catchall, e, { ...n, path: [...n.path, "additionalProperties"] }))
              : e.io === "output" && (o.additionalProperties = !1));
      }),
      (bWe = (t, e, r, n) => {
        let o = t._zod.def,
          s = o.inclusive === !1,
          a = o.options.map((u, c) => tl(u, e, { ...n, path: [...n.path, s ? "oneOf" : "anyOf", c] }));
        s ? (r.oneOf = a) : (r.anyOf = a);
      }),
      (YPt = (t, e, r, n) => {
        let o = t._zod.def,
          s = tl(o.left, e, { ...n, path: [...n.path, "allOf", 0] }),
          a = tl(o.right, e, { ...n, path: [...n.path, "allOf", 1] }),
          u = (m) => "allOf" in m && Object.keys(m).length === 1,
          c = [...(u(s) ? s.allOf : [s]), ...(u(a) ? a.allOf : [a])];
        r.allOf = c;
      }),
      (KPt = (t, e, r, n) => {
        let o = r,
          s = t._zod.def;
        o.type = "array";
        let a = e.target === "draft-2020-12" ? "prefixItems" : "items",
          u = e.target === "draft-2020-12" || e.target === "openapi-3.0" ? "items" : "additionalItems",
          c = s.items.map((p, h) => tl(p, e, { ...n, path: [...n.path, a, h] })),
          m = s.rest
            ? tl(s.rest, e, { ...n, path: [...n.path, u, ...(e.target === "openapi-3.0" ? [s.items.length] : [])] })
            : null;
        e.target === "draft-2020-12"
          ? ((o.prefixItems = c), m && (o.items = m))
          : e.target === "openapi-3.0"
            ? ((o.items = { anyOf: c }),
              m && o.items.anyOf.push(m),
              (o.minItems = c.length),
              m || (o.maxItems = c.length))
            : ((o.items = c), m && (o.additionalItems = m));
        let { minimum: d, maximum: f } = t._zod.bag;
        (typeof d == "number" && (o.minItems = d), typeof f == "number" && (o.maxItems = f));
      }),
      (JPt = (t, e, r, n) => {
        let o = r,
          s = t._zod.def;
        o.type = "object";
        let a = s.keyType,
          c = a._zod.bag?.patterns;
        if (s.mode === "loose" && c && c.size > 0) {
          let d = tl(s.valueType, e, { ...n, path: [...n.path, "patternProperties", "*"] });
          o.patternProperties = {};
          for (let f of c) o.patternProperties[f.source] = d;
        } else
          ((e.target === "draft-07" || e.target === "draft-2020-12") &&
            (o.propertyNames = tl(s.keyType, e, { ...n, path: [...n.path, "propertyNames"] })),
            (o.additionalProperties = tl(s.valueType, e, { ...n, path: [...n.path, "additionalProperties"] })));
        let m = a._zod.values;
        if (m) {
          let d = [...m].filter((f) => typeof f == "string" || typeof f == "number");
          d.length > 0 && (o.required = d);
        }
      }),
      (XPt = (t, e, r, n) => {
        let o = t._zod.def,
          s = tl(o.innerType, e, n),
          a = e.seen.get(t);
        e.target === "openapi-3.0" ? ((a.ref = o.innerType), (r.nullable = !0)) : (r.anyOf = [s, { type: "null" }]);
      }),
      (ZPt = (t, e, r, n) => {
        let o = t._zod.def;
        tl(o.innerType, e, n);
        let s = e.seen.get(t);
        s.ref = o.innerType;
      }),
      (eBt = (t, e, r, n) => {
        let o = t._zod.def;
        tl(o.innerType, e, n);
        let s = e.seen.get(t);
        ((s.ref = o.innerType), (r.default = JSON.parse(JSON.stringify(o.defaultValue))));
      }),
      (tBt = (t, e, r, n) => {
        let o = t._zod.def;
        tl(o.innerType, e, n);
        let s = e.seen.get(t);
        ((s.ref = o.innerType), e.io === "input" && (r._prefault = JSON.parse(JSON.stringify(o.defaultValue))));
      }),
      (rBt = (t, e, r, n) => {
        let o = t._zod.def;
        tl(o.innerType, e, n);
        let s = e.seen.get(t);
        s.ref = o.innerType;
        let a;
        try {
          a = o.catchValue(void 0);
        } catch {
          throw new Error("Dynamic catch values are not supported in JSON Schema");
        }
        r.default = a;
      }),
      (nBt = (t, e, r, n) => {
        let o = t._zod.def,
          s = e.io === "input" ? (o.in._zod.def.type === "transform" ? o.out : o.in) : o.out;
        tl(s, e, n);
        let a = e.seen.get(t);
        a.ref = s;
      }),
      (iBt = (t, e, r, n) => {
        let o = t._zod.def;
        tl(o.innerType, e, n);
        let s = e.seen.get(t);
        ((s.ref = o.innerType), (r.readOnly = !0));
      }),
      (oBt = (t, e, r, n) => {
        let o = t._zod.def;
        tl(o.innerType, e, n);
        let s = e.seen.get(t);
        s.ref = o.innerType;
      }),
      (AWe = (t, e, r, n) => {
        let o = t._zod.def;
        tl(o.innerType, e, n);
        let s = e.seen.get(t);
        s.ref = o.innerType;
      }),
      (sBt = (t, e, r, n) => {
        let o = t._zod.innerType;
        tl(o, e, n);
        let s = e.seen.get(t);
        s.ref = o;
      }),
      (gWe = {
        string: SPt,
        number: wPt,
        boolean: xPt,
        bigint: TPt,
        symbol: DPt,
        null: IPt,
        undefined: RPt,
        void: kPt,
        never: OPt,
        any: NPt,
        unknown: PPt,
        date: BPt,
        enum: LPt,
        literal: MPt,
        nan: FPt,
        template_literal: UPt,
        file: $Pt,
        success: jPt,
        custom: QPt,
        function: GPt,
        transform: qPt,
        map: HPt,
        set: VPt,
        array: WPt,
        object: zPt,
        union: bWe,
        intersection: YPt,
        tuple: KPt,
        record: JPt,
        nullable: XPt,
        nonoptional: ZPt,
        default: eBt,
        prefault: tBt,
        catch: rBt,
        pipe: nBt,
        readonly: iBt,
        promise: oBt,
        optional: AWe,
        lazy: sBt,
      }));
  });
var yWe,
  Zdn = j(() => {
    boe();
    y5e();
    yWe = class {
      get metadataRegistry() {
        return this.ctx.metadataRegistry;
      }
      get target() {
        return this.ctx.target;
      }
      get unrepresentable() {
        return this.ctx.unrepresentable;
      }
      get override() {
        return this.ctx.override;
      }
      get io() {
        return this.ctx.io;
      }
      get counter() {
        return this.ctx.counter;
      }
      set counter(e) {
        this.ctx.counter = e;
      }
      get seen() {
        return this.ctx.seen;
      }
      constructor(e) {
        let r = e?.target ?? "draft-2020-12";
        (r === "draft-4" && (r = "draft-04"),
          r === "draft-7" && (r = "draft-07"),
          (this.ctx = iM({
            processors: gWe,
            target: r,
            ...(e?.metadata && { metadata: e.metadata }),
            ...(e?.unrepresentable && { unrepresentable: e.unrepresentable }),
            ...(e?.override && { override: e.override }),
            ...(e?.io && { io: e.io }),
          })));
      }
      process(e, r = { path: [], schemaPath: [] }) {
        return tl(e, this.ctx, r);
      }
      emit(e, r) {
        (r &&
          (r.cycles && (this.ctx.cycles = r.cycles),
          r.reused && (this.ctx.reused = r.reused),
          r.external && (this.ctx.external = r.external)),
          oM(this.ctx, e));
        let n = sM(this.ctx, e),
          { "~standard": o, ...s } = n;
        return s;
      }
    };
  });
var e1n = {};
var t1n = j(() => {});
var v6 = {};
Wi(v6, {
  $ZodAny: () => zHe,
  $ZodArray: () => ZHe,
  $ZodAsyncError: () => C4,
  $ZodBase64: () => FHe,
  $ZodBase64URL: () => UHe,
  $ZodBigInt: () => Q2e,
  $ZodBigIntFormat: () => qHe,
  $ZodBoolean: () => aoe,
  $ZodCIDRv4: () => LHe,
  $ZodCIDRv6: () => MHe,
  $ZodCUID: () => SHe,
  $ZodCUID2: () => wHe,
  $ZodCatch: () => gVe,
  $ZodCheck: () => zl,
  $ZodCheckBigIntFormat: () => YNt,
  $ZodCheckEndsWith: () => aPt,
  $ZodCheckGreaterThan: () => mHe,
  $ZodCheckIncludes: () => oPt,
  $ZodCheckLengthEquals: () => tPt,
  $ZodCheckLessThan: () => lHe,
  $ZodCheckLowerCase: () => nPt,
  $ZodCheckMaxLength: () => ZNt,
  $ZodCheckMaxSize: () => KNt,
  $ZodCheckMimeType: () => cPt,
  $ZodCheckMinLength: () => ePt,
  $ZodCheckMinSize: () => JNt,
  $ZodCheckMultipleOf: () => WNt,
  $ZodCheckNumberFormat: () => zNt,
  $ZodCheckOverwrite: () => lPt,
  $ZodCheckProperty: () => uPt,
  $ZodCheckRegex: () => rPt,
  $ZodCheckSizeEquals: () => XNt,
  $ZodCheckStartsWith: () => sPt,
  $ZodCheckStringFormat: () => soe,
  $ZodCheckUpperCase: () => iPt,
  $ZodCodec: () => coe,
  $ZodCustom: () => SVe,
  $ZodCustomStringFormat: () => QHe,
  $ZodDate: () => XHe,
  $ZodDefault: () => dVe,
  $ZodDiscriminatedUnion: () => tVe,
  $ZodE164: () => $He,
  $ZodEmail: () => _He,
  $ZodEmoji: () => vHe,
  $ZodEncodeError: () => YL,
  $ZodEnum: () => sVe,
  $ZodError: () => M2e,
  $ZodExactOptional: () => lVe,
  $ZodFile: () => uVe,
  $ZodFunction: () => EVe,
  $ZodGUID: () => AHe,
  $ZodIPv4: () => NHe,
  $ZodIPv6: () => PHe,
  $ZodISODate: () => RHe,
  $ZodISODateTime: () => IHe,
  $ZodISODuration: () => OHe,
  $ZodISOTime: () => kHe,
  $ZodIntersection: () => rVe,
  $ZodJWT: () => jHe,
  $ZodKSUID: () => DHe,
  $ZodLazy: () => CVe,
  $ZodLiteral: () => aVe,
  $ZodMAC: () => BHe,
  $ZodMap: () => iVe,
  $ZodNaN: () => bVe,
  $ZodNanoID: () => CHe,
  $ZodNever: () => KHe,
  $ZodNonOptional: () => pVe,
  $ZodNull: () => WHe,
  $ZodNullable: () => mVe,
  $ZodNumber: () => j2e,
  $ZodNumberFormat: () => GHe,
  $ZodObject: () => gPt,
  $ZodObjectJIT: () => bPt,
  $ZodOptional: () => q2e,
  $ZodPipe: () => AVe,
  $ZodPrefault: () => fVe,
  $ZodPromise: () => vVe,
  $ZodReadonly: () => yVe,
  $ZodRealError: () => A8,
  $ZodRecord: () => nVe,
  $ZodRegistry: () => IVe,
  $ZodSet: () => oVe,
  $ZodString: () => eM,
  $ZodStringFormat: () => xl,
  $ZodSuccess: () => hVe,
  $ZodSymbol: () => HHe,
  $ZodTemplateLiteral: () => _Ve,
  $ZodTransform: () => cVe,
  $ZodTuple: () => G2e,
  $ZodType: () => Xo,
  $ZodULID: () => xHe,
  $ZodURL: () => EHe,
  $ZodUUID: () => yHe,
  $ZodUndefined: () => VHe,
  $ZodUnion: () => uoe,
  $ZodUnknown: () => YHe,
  $ZodVoid: () => JHe,
  $ZodXID: () => THe,
  $ZodXor: () => eVe,
  $brand: () => R2e,
  $constructor: () => Mt,
  $input: () => kVe,
  $output: () => RVe,
  Doc: () => $2e,
  JSONSchema: () => e1n,
  JSONSchemaGenerator: () => yWe,
  NEVER: () => Vie,
  TimePrecision: () => BVe,
  _any: () => rWe,
  _array: () => vPt,
  _base64: () => l5e,
  _base64url: () => m5e,
  _bigint: () => YVe,
  _boolean: () => WVe,
  _catch: () => das,
  _check: () => Jdn,
  _cidrv4: () => u5e,
  _cidrv6: () => c5e,
  _coercedBigint: () => KVe,
  _coercedBoolean: () => zVe,
  _coercedDate: () => aWe,
  _coercedNumber: () => jVe,
  _coercedString: () => NVe,
  _cuid: () => t5e,
  _cuid2: () => r5e,
  _custom: () => lWe,
  _date: () => sWe,
  _decode: () => eHe,
  _decodeAsync: () => rHe,
  _default: () => cas,
  _discriminatedUnion: () => Jss,
  _e164: () => d5e,
  _email: () => z2e,
  _emoji: () => Z2e,
  _encode: () => Zqe,
  _encodeAsync: () => tHe,
  _endsWith: () => TH,
  _enum: () => nas,
  _file: () => cWe,
  _float32: () => GVe,
  _float64: () => qVe,
  _gt: () => w4,
  _gte: () => sg,
  _guid: () => doe,
  _includes: () => wH,
  _int: () => QVe,
  _int32: () => HVe,
  _int64: () => JVe,
  _intersection: () => Xss,
  _ipv4: () => s5e,
  _ipv6: () => a5e,
  _isoDate: () => MVe,
  _isoDateTime: () => LVe,
  _isoDuration: () => UVe,
  _isoTime: () => FVe,
  _jwt: () => f5e,
  _ksuid: () => o5e,
  _lazy: () => gas,
  _length: () => nM,
  _literal: () => oas,
  _lowercase: () => CH,
  _lt: () => S4,
  _lte: () => _2,
  _mac: () => PVe,
  _map: () => tas,
  _max: () => _2,
  _maxLength: () => rM,
  _maxSize: () => ak,
  _mime: () => DH,
  _min: () => sg,
  _minLength: () => wT,
  _minSize: () => x4,
  _multipleOf: () => sk,
  _nan: () => uWe,
  _nanoid: () => e5e,
  _nativeEnum: () => ias,
  _negative: () => h5e,
  _never: () => iWe,
  _nonnegative: () => b5e,
  _nonoptional: () => las,
  _nonpositive: () => g5e,
  _normalize: () => IH,
  _null: () => tWe,
  _nullable: () => uas,
  _number: () => $Ve,
  _optional: () => aas,
  _overwrite: () => oE,
  _parse: () => Zie,
  _parseAsync: () => toe,
  _pipe: () => fas,
  _positive: () => p5e,
  _promise: () => bas,
  _property: () => A5e,
  _readonly: () => pas,
  _record: () => eas,
  _refine: () => mWe,
  _regex: () => vH,
  _safeDecode: () => iHe,
  _safeDecodeAsync: () => sHe,
  _safeEncode: () => nHe,
  _safeEncodeAsync: () => oHe,
  _safeParse: () => noe,
  _safeParseAsync: () => ioe,
  _set: () => ras,
  _size: () => tM,
  _slugify: () => poe,
  _startsWith: () => xH,
  _string: () => OVe,
  _stringFormat: () => NH,
  _stringbool: () => hWe,
  _success: () => mas,
  _superRefine: () => dWe,
  _symbol: () => ZVe,
  _templateLiteral: () => has,
  _toLowerCase: () => kH,
  _toUpperCase: () => OH,
  _transform: () => sas,
  _trim: () => RH,
  _tuple: () => Zss,
  _uint32: () => VVe,
  _uint64: () => XVe,
  _ulid: () => n5e,
  _undefined: () => eWe,
  _union: () => Yss,
  _unknown: () => nWe,
  _uppercase: () => SH,
  _url: () => foe,
  _uuid: () => Y2e,
  _uuidv4: () => K2e,
  _uuidv6: () => J2e,
  _uuidv7: () => X2e,
  _void: () => oWe,
  _xid: () => i5e,
  _xor: () => Kss,
  clone: () => og,
  config: () => Od,
  createStandardJSONSchemaMethod: () => hoe,
  createToJSONSchemaMethod: () => CPt,
  decode: () => P0n,
  decodeAsync: () => L0n,
  describe: () => fWe,
  encode: () => N0n,
  encodeAsync: () => B0n,
  extractDefs: () => oM,
  finalize: () => sM,
  flattenError: () => Jie,
  formatError: () => Xie,
  globalConfig: () => I2e,
  globalRegistry: () => Gh,
  initializeContext: () => iM,
  isValidBase64: () => hPt,
  isValidBase64URL: () => imn,
  isValidJWT: () => omn,
  locales: () => moe,
  meta: () => pWe,
  parse: () => eoe,
  parseAsync: () => roe,
  prettifyError: () => Xqe,
  process: () => tl,
  regexes: () => y8,
  registry: () => V2e,
  safeDecode: () => F0n,
  safeDecodeAsync: () => $0n,
  safeEncode: () => M0n,
  safeEncodeAsync: () => U0n,
  safeParse: () => _H,
  safeParseAsync: () => ooe,
  toDotPath: () => O0n,
  toJSONSchema: () => goe,
  treeifyError: () => Jqe,
  util: () => nn,
  version: () => dPt,
});
var V1 = j(() => {
  Wie();
  ANt();
  bNt();
  APt();
  dHe();
  fPt();
  Yi();
  cHe();
  DVe();
  W2e();
  mPt();
  Xdn();
  y5e();
  boe();
  Zdn();
  t1n();
});
var aBt = j(() => {
  V1();
});
var _We = j(() => {
  V1();
  Yi();
  aBt();
});
var n1n = j(() => {
  V1();
});
var uBt = j(() => {
  V1();
  _We();
});
var i1n = j(() => {
  V1();
  _We();
});
var cBt = j(() => {
  V1();
  aBt();
  _We();
  n1n();
  V1();
  boe();
  DVe();
  uBt();
  uBt();
  i1n();
});
var o1n = j(() => {
  cBt();
  cBt();
});
var lBt = j(() => {
  o1n();
});
function Aoe(t) {
  return !!t._zod;
}
function T4(t, e) {
  return Aoe(t) ? _H(t, e) : t.safeParse(e);
}
function EWe(t) {
  if (!t) return;
  let e;
  if ((Aoe(t) ? (e = t._zod?.def?.shape) : (e = t.shape), !!e)) {
    if (typeof e == "function")
      try {
        return e();
      } catch {
        return;
      }
    return e;
  }
}
function a1n(t) {
  if (Aoe(t)) {
    let s = t._zod?.def;
    if (s) {
      if (s.value !== void 0) return s.value;
      if (Array.isArray(s.values) && s.values.length > 0) return s.values[0];
    }
  }
  let r = t._def;
  if (r) {
    if (r.value !== void 0) return r.value;
    if (Array.isArray(r.values) && r.values.length > 0) return r.values[0];
  }
  let n = t.value;
  if (n !== void 0) return n;
}
var vWe = j(() => {
  D2e();
  lBt();
});
var CWe = {};
Wi(CWe, {
  endsWith: () => TH,
  gt: () => w4,
  gte: () => sg,
  includes: () => wH,
  length: () => nM,
  lowercase: () => CH,
  lt: () => S4,
  lte: () => _2,
  maxLength: () => rM,
  maxSize: () => ak,
  mime: () => DH,
  minLength: () => wT,
  minSize: () => x4,
  multipleOf: () => sk,
  negative: () => h5e,
  nonnegative: () => b5e,
  nonpositive: () => g5e,
  normalize: () => IH,
  overwrite: () => oE,
  positive: () => p5e,
  property: () => A5e,
  regex: () => vH,
  size: () => tM,
  slugify: () => poe,
  startsWith: () => xH,
  toLowerCase: () => kH,
  toUpperCase: () => OH,
  trim: () => RH,
  uppercase: () => SH,
});
var SWe = j(() => {
  V1();
});
var aM = {};
Wi(aM, {
  ZodISODate: () => xWe,
  ZodISODateTime: () => wWe,
  ZodISODuration: () => DWe,
  ZodISOTime: () => TWe,
  date: () => dBt,
  datetime: () => mBt,
  duration: () => pBt,
  time: () => fBt,
});
function mBt(t) {
  return LVe(wWe, t);
}
function dBt(t) {
  return MVe(xWe, t);
}
function fBt(t) {
  return FVe(TWe, t);
}
function pBt(t) {
  return UVe(DWe, t);
}
var wWe,
  xWe,
  TWe,
  DWe,
  _5e = j(() => {
    V1();
    v5e();
    wWe = Mt("ZodISODateTime", (t, e) => {
      (IHe.init(t, e), Yl.init(t, e));
    });
    xWe = Mt("ZodISODate", (t, e) => {
      (RHe.init(t, e), Yl.init(t, e));
    });
    TWe = Mt("ZodISOTime", (t, e) => {
      (kHe.init(t, e), Yl.init(t, e));
    });
    DWe = Mt("ZodISODuration", (t, e) => {
      (OHe.init(t, e), Yl.init(t, e));
    });
  });
var u1n,
  Sas,
  _8,
  hBt = j(() => {
    V1();
    V1();
    Yi();
    ((u1n = (t, e) => {
      (M2e.init(t, e),
        (t.name = "ZodError"),
        Object.defineProperties(t, {
          format: { value: (r) => Xie(t, r) },
          flatten: { value: (r) => Jie(t, r) },
          addIssue: {
            value: (r) => {
              (t.issues.push(r), (t.message = JSON.stringify(t.issues, zie, 2)));
            },
          },
          addIssues: {
            value: (r) => {
              (t.issues.push(...r), (t.message = JSON.stringify(t.issues, zie, 2)));
            },
          },
          isEmpty: {
            get() {
              return t.issues.length === 0;
            },
          },
        }));
    }),
      (Sas = Mt("ZodError", u1n)),
      (_8 = Mt("ZodError", u1n, { Parent: Error })));
  });
var gBt,
  bBt,
  ABt,
  yBt,
  _Bt,
  EBt,
  vBt,
  CBt,
  SBt,
  wBt,
  xBt,
  TBt,
  DBt = j(() => {
    V1();
    hBt();
    ((gBt = Zie(_8)),
      (bBt = toe(_8)),
      (ABt = noe(_8)),
      (yBt = ioe(_8)),
      (_Bt = Zqe(_8)),
      (EBt = eHe(_8)),
      (vBt = tHe(_8)),
      (CBt = rHe(_8)),
      (SBt = nHe(_8)),
      (wBt = iHe(_8)),
      (xBt = oHe(_8)),
      (TBt = sHe(_8)));
  });
var E5e = {};
Wi(E5e, {
  ZodAny: () => NBt,
  ZodArray: () => MBt,
  ZodBase64: () => qWe,
  ZodBase64URL: () => HWe,
  ZodBigInt: () => Soe,
  ZodBigIntFormat: () => zWe,
  ZodBoolean: () => Coe,
  ZodCIDRv4: () => QWe,
  ZodCIDRv6: () => GWe,
  ZodCUID: () => BWe,
  ZodCUID2: () => LWe,
  ZodCatch: () => nLt,
  ZodCodec: () => tze,
  ZodCustom: () => O5e,
  ZodCustomStringFormat: () => Eoe,
  ZodDate: () => T5e,
  ZodDefault: () => JBt,
  ZodDiscriminatedUnion: () => UBt,
  ZodE164: () => VWe,
  ZodEmail: () => kWe,
  ZodEmoji: () => NWe,
  ZodEnum: () => yoe,
  ZodExactOptional: () => zBt,
  ZodFile: () => VBt,
  ZodFunction: () => dLt,
  ZodGUID: () => C5e,
  ZodIPv4: () => $We,
  ZodIPv6: () => jWe,
  ZodIntersection: () => $Bt,
  ZodJWT: () => WWe,
  ZodKSUID: () => UWe,
  ZodLazy: () => cLt,
  ZodLiteral: () => HBt,
  ZodMAC: () => IBt,
  ZodMap: () => GBt,
  ZodNaN: () => oLt,
  ZodNanoID: () => PWe,
  ZodNever: () => BBt,
  ZodNonOptional: () => ZWe,
  ZodNull: () => OBt,
  ZodNullable: () => KBt,
  ZodNumber: () => voe,
  ZodNumberFormat: () => PH,
  ZodObject: () => D5e,
  ZodOptional: () => XWe,
  ZodPipe: () => eze,
  ZodPrefault: () => ZBt,
  ZodPromise: () => mLt,
  ZodReadonly: () => sLt,
  ZodRecord: () => k5e,
  ZodSet: () => qBt,
  ZodString: () => _oe,
  ZodStringFormat: () => Yl,
  ZodSuccess: () => rLt,
  ZodSymbol: () => RBt,
  ZodTemplateLiteral: () => uLt,
  ZodTransform: () => WBt,
  ZodTuple: () => jBt,
  ZodType: () => Zs,
  ZodULID: () => MWe,
  ZodURL: () => x5e,
  ZodUUID: () => xT,
  ZodUndefined: () => kBt,
  ZodUnion: () => I5e,
  ZodUnknown: () => PBt,
  ZodVoid: () => LBt,
  ZodXID: () => FWe,
  ZodXor: () => FBt,
  _ZodString: () => RWe,
  _default: () => XBt,
  _function: () => ufn,
  any: () => YWe,
  array: () => yn,
  base64: () => D1n,
  base64url: () => I1n,
  bigint: () => $1n,
  boolean: () => rl,
  catch: () => iLt,
  check: () => cfn,
  cidrv4: () => x1n,
  cidrv6: () => T1n,
  codec: () => ofn,
  cuid: () => A1n,
  cuid2: () => y1n,
  custom: () => rze,
  date: () => V1n,
  describe: () => lfn,
  discriminatedUnion: () => R5e,
  e164: () => R1n,
  email: () => c1n,
  emoji: () => g1n,
  enum: () => ag,
  exactOptional: () => YBt,
  file: () => tfn,
  float32: () => L1n,
  float64: () => M1n,
  function: () => ufn,
  guid: () => l1n,
  hash: () => B1n,
  hex: () => P1n,
  hostname: () => N1n,
  httpUrl: () => h1n,
  instanceof: () => dfn,
  int: () => IWe,
  int32: () => F1n,
  int64: () => j1n,
  intersection: () => xoe,
  ipv4: () => C1n,
  ipv6: () => w1n,
  json: () => pfn,
  jwt: () => k1n,
  keyof: () => W1n,
  ksuid: () => v1n,
  lazy: () => lLt,
  literal: () => Pi,
  looseObject: () => W1,
  looseRecord: () => J1n,
  mac: () => S1n,
  map: () => X1n,
  meta: () => mfn,
  nan: () => ifn,
  nanoid: () => b1n,
  nativeEnum: () => efn,
  never: () => KWe,
  nonoptional: () => tLt,
  null: () => woe,
  nullable: () => S5e,
  nullish: () => rfn,
  number: () => Cu,
  object: () => Dn,
  optional: () => H0,
  partialRecord: () => K1n,
  pipe: () => w5e,
  prefault: () => eLt,
  preprocess: () => N5e,
  promise: () => afn,
  readonly: () => aLt,
  record: () => A0,
  refine: () => fLt,
  set: () => Z1n,
  strictObject: () => z1n,
  string: () => xt,
  stringFormat: () => O1n,
  stringbool: () => ffn,
  success: () => nfn,
  superRefine: () => pLt,
  symbol: () => G1n,
  templateLiteral: () => sfn,
  transform: () => JWe,
  tuple: () => QBt,
  uint32: () => U1n,
  uint64: () => Q1n,
  ulid: () => _1n,
  undefined: () => q1n,
  union: () => Tl,
  unknown: () => Kl,
  url: () => OWe,
  uuid: () => m1n,
  uuidv4: () => d1n,
  uuidv6: () => f1n,
  uuidv7: () => p1n,
  void: () => H1n,
  xid: () => E1n,
  xor: () => Y1n,
});
function xt(t) {
  return OVe(_oe, t);
}
function c1n(t) {
  return z2e(kWe, t);
}
function l1n(t) {
  return doe(C5e, t);
}
function m1n(t) {
  return Y2e(xT, t);
}
function d1n(t) {
  return K2e(xT, t);
}
function f1n(t) {
  return J2e(xT, t);
}
function p1n(t) {
  return X2e(xT, t);
}
function OWe(t) {
  return foe(x5e, t);
}
function h1n(t) {
  return foe(x5e, { protocol: /^https?$/, hostname: y8.domain, ...nn.normalizeParams(t) });
}
function g1n(t) {
  return Z2e(NWe, t);
}
function b1n(t) {
  return e5e(PWe, t);
}
function A1n(t) {
  return t5e(BWe, t);
}
function y1n(t) {
  return r5e(LWe, t);
}
function _1n(t) {
  return n5e(MWe, t);
}
function E1n(t) {
  return i5e(FWe, t);
}
function v1n(t) {
  return o5e(UWe, t);
}
function C1n(t) {
  return s5e($We, t);
}
function S1n(t) {
  return PVe(IBt, t);
}
function w1n(t) {
  return a5e(jWe, t);
}
function x1n(t) {
  return u5e(QWe, t);
}
function T1n(t) {
  return c5e(GWe, t);
}
function D1n(t) {
  return l5e(qWe, t);
}
function I1n(t) {
  return m5e(HWe, t);
}
function R1n(t) {
  return d5e(VWe, t);
}
function k1n(t) {
  return f5e(WWe, t);
}
function O1n(t, e, r = {}) {
  return NH(Eoe, t, e, r);
}
function N1n(t) {
  return NH(Eoe, "hostname", y8.hostname, t);
}
function P1n(t) {
  return NH(Eoe, "hex", y8.hex, t);
}
function B1n(t, e) {
  let r = e?.enc ?? "hex",
    n = `${t}_${r}`,
    o = y8[n];
  if (!o) throw new Error(`Unrecognized hash format: ${n}`);
  return NH(Eoe, n, o, e);
}
function Cu(t) {
  return $Ve(voe, t);
}
function IWe(t) {
  return QVe(PH, t);
}
function L1n(t) {
  return GVe(PH, t);
}
function M1n(t) {
  return qVe(PH, t);
}
function F1n(t) {
  return HVe(PH, t);
}
function U1n(t) {
  return VVe(PH, t);
}
function rl(t) {
  return WVe(Coe, t);
}
function $1n(t) {
  return YVe(Soe, t);
}
function j1n(t) {
  return JVe(zWe, t);
}
function Q1n(t) {
  return XVe(zWe, t);
}
function G1n(t) {
  return ZVe(RBt, t);
}
function q1n(t) {
  return eWe(kBt, t);
}
function woe(t) {
  return tWe(OBt, t);
}
function YWe() {
  return rWe(NBt);
}
function Kl() {
  return nWe(PBt);
}
function KWe(t) {
  return iWe(BBt, t);
}
function H1n(t) {
  return oWe(LBt, t);
}
function V1n(t) {
  return sWe(T5e, t);
}
function yn(t, e) {
  return vPt(MBt, t, e);
}
function W1n(t) {
  let e = t._zod.def.shape;
  return ag(Object.keys(e));
}
function Dn(t, e) {
  let r = { type: "object", shape: t ?? {}, ...nn.normalizeParams(e) };
  return new D5e(r);
}
function z1n(t, e) {
  return new D5e({ type: "object", shape: t, catchall: KWe(), ...nn.normalizeParams(e) });
}
function W1(t, e) {
  return new D5e({ type: "object", shape: t, catchall: Kl(), ...nn.normalizeParams(e) });
}
function Tl(t, e) {
  return new I5e({ type: "union", options: t, ...nn.normalizeParams(e) });
}
function Y1n(t, e) {
  return new FBt({ type: "union", options: t, inclusive: !1, ...nn.normalizeParams(e) });
}
function R5e(t, e, r) {
  return new UBt({ type: "union", options: e, discriminator: t, ...nn.normalizeParams(r) });
}
function xoe(t, e) {
  return new $Bt({ type: "intersection", left: t, right: e });
}
function QBt(t, e, r) {
  let n = e instanceof Xo,
    o = n ? r : e,
    s = n ? e : null;
  return new jBt({ type: "tuple", items: t, rest: s, ...nn.normalizeParams(o) });
}
function A0(t, e, r) {
  return new k5e({ type: "record", keyType: t, valueType: e, ...nn.normalizeParams(r) });
}
function K1n(t, e, r) {
  let n = og(t);
  return ((n._zod.values = void 0), new k5e({ type: "record", keyType: n, valueType: e, ...nn.normalizeParams(r) }));
}
function J1n(t, e, r) {
  return new k5e({ type: "record", keyType: t, valueType: e, mode: "loose", ...nn.normalizeParams(r) });
}
function X1n(t, e, r) {
  return new GBt({ type: "map", keyType: t, valueType: e, ...nn.normalizeParams(r) });
}
function Z1n(t, e) {
  return new qBt({ type: "set", valueType: t, ...nn.normalizeParams(e) });
}
function ag(t, e) {
  let r = Array.isArray(t) ? Object.fromEntries(t.map((n) => [n, n])) : t;
  return new yoe({ type: "enum", entries: r, ...nn.normalizeParams(e) });
}
function efn(t, e) {
  return new yoe({ type: "enum", entries: t, ...nn.normalizeParams(e) });
}
function Pi(t, e) {
  return new HBt({ type: "literal", values: Array.isArray(t) ? t : [t], ...nn.normalizeParams(e) });
}
function tfn(t) {
  return cWe(VBt, t);
}
function JWe(t) {
  return new WBt({ type: "transform", transform: t });
}
function H0(t) {
  return new XWe({ type: "optional", innerType: t });
}
function YBt(t) {
  return new zBt({ type: "optional", innerType: t });
}
function S5e(t) {
  return new KBt({ type: "nullable", innerType: t });
}
function rfn(t) {
  return H0(S5e(t));
}
function XBt(t, e) {
  return new JBt({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof e == "function" ? e() : nn.shallowClone(e);
    },
  });
}
function eLt(t, e) {
  return new ZBt({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof e == "function" ? e() : nn.shallowClone(e);
    },
  });
}
function tLt(t, e) {
  return new ZWe({ type: "nonoptional", innerType: t, ...nn.normalizeParams(e) });
}
function nfn(t) {
  return new rLt({ type: "success", innerType: t });
}
function iLt(t, e) {
  return new nLt({ type: "catch", innerType: t, catchValue: typeof e == "function" ? e : () => e });
}
function ifn(t) {
  return uWe(oLt, t);
}
function w5e(t, e) {
  return new eze({ type: "pipe", in: t, out: e });
}
function ofn(t, e, r) {
  return new tze({ type: "pipe", in: t, out: e, transform: r.decode, reverseTransform: r.encode });
}
function aLt(t) {
  return new sLt({ type: "readonly", innerType: t });
}
function sfn(t, e) {
  return new uLt({ type: "template_literal", parts: t, ...nn.normalizeParams(e) });
}
function lLt(t) {
  return new cLt({ type: "lazy", getter: t });
}
function afn(t) {
  return new mLt({ type: "promise", innerType: t });
}
function ufn(t) {
  return new dLt({
    type: "function",
    input: Array.isArray(t?.input) ? QBt(t?.input) : (t?.input ?? yn(Kl())),
    output: t?.output ?? Kl(),
  });
}
function cfn(t) {
  let e = new zl({ check: "custom" });
  return ((e._zod.check = t), e);
}
function rze(t, e) {
  return lWe(O5e, t ?? (() => !0), e);
}
function fLt(t, e = {}) {
  return mWe(O5e, t, e);
}
function pLt(t) {
  return dWe(t);
}
function dfn(t, e = {}) {
  let r = new O5e({ type: "custom", check: "custom", fn: (n) => n instanceof t, abort: !0, ...nn.normalizeParams(e) });
  return (
    (r._zod.bag.Class = t),
    (r._zod.check = (n) => {
      n.value instanceof t ||
        n.issues.push({
          code: "invalid_type",
          expected: t.name,
          input: n.value,
          inst: r,
          path: [...(r._zod.def.path ?? [])],
        });
    }),
    r
  );
}
function pfn(t) {
  let e = lLt(() => Tl([xt(t), Cu(), rl(), woe(), yn(e), A0(xt(), e)]));
  return e;
}
function N5e(t, e) {
  return w5e(JWe(t), e);
}
var Zs,
  RWe,
  _oe,
  Yl,
  kWe,
  C5e,
  xT,
  x5e,
  NWe,
  PWe,
  BWe,
  LWe,
  MWe,
  FWe,
  UWe,
  $We,
  IBt,
  jWe,
  QWe,
  GWe,
  qWe,
  HWe,
  VWe,
  WWe,
  Eoe,
  voe,
  PH,
  Coe,
  Soe,
  zWe,
  RBt,
  kBt,
  OBt,
  NBt,
  PBt,
  BBt,
  LBt,
  T5e,
  MBt,
  D5e,
  I5e,
  FBt,
  UBt,
  $Bt,
  jBt,
  k5e,
  GBt,
  qBt,
  yoe,
  HBt,
  VBt,
  WBt,
  XWe,
  zBt,
  KBt,
  JBt,
  ZBt,
  ZWe,
  rLt,
  nLt,
  oLt,
  eze,
  tze,
  sLt,
  uLt,
  cLt,
  mLt,
  dLt,
  O5e,
  lfn,
  mfn,
  ffn,
  v5e = j(() => {
    V1();
    V1();
    boe();
    y5e();
    SWe();
    _5e();
    DBt();
    ((Zs = Mt(
      "ZodType",
      (t, e) => (
        Xo.init(t, e),
        Object.assign(t["~standard"], { jsonSchema: { input: hoe(t, "input"), output: hoe(t, "output") } }),
        (t.toJSONSchema = CPt(t, {})),
        (t.def = e),
        (t.type = e.type),
        Object.defineProperty(t, "_def", { value: e }),
        (t.check = (...r) =>
          t.clone(
            nn.mergeDefs(e, {
              checks: [
                ...(e.checks ?? []),
                ...r.map((n) =>
                  typeof n == "function" ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } } : n,
                ),
              ],
            }),
            { parent: !0 },
          )),
        (t.with = t.check),
        (t.clone = (r, n) => og(t, r, n)),
        (t.brand = () => t),
        (t.register = (r, n) => (r.add(t, n), t)),
        (t.parse = (r, n) => gBt(t, r, n, { callee: t.parse })),
        (t.safeParse = (r, n) => ABt(t, r, n)),
        (t.parseAsync = async (r, n) => bBt(t, r, n, { callee: t.parseAsync })),
        (t.safeParseAsync = async (r, n) => yBt(t, r, n)),
        (t.spa = t.safeParseAsync),
        (t.encode = (r, n) => _Bt(t, r, n)),
        (t.decode = (r, n) => EBt(t, r, n)),
        (t.encodeAsync = async (r, n) => vBt(t, r, n)),
        (t.decodeAsync = async (r, n) => CBt(t, r, n)),
        (t.safeEncode = (r, n) => SBt(t, r, n)),
        (t.safeDecode = (r, n) => wBt(t, r, n)),
        (t.safeEncodeAsync = async (r, n) => xBt(t, r, n)),
        (t.safeDecodeAsync = async (r, n) => TBt(t, r, n)),
        (t.refine = (r, n) => t.check(fLt(r, n))),
        (t.superRefine = (r) => t.check(pLt(r))),
        (t.overwrite = (r) => t.check(oE(r))),
        (t.optional = () => H0(t)),
        (t.exactOptional = () => YBt(t)),
        (t.nullable = () => S5e(t)),
        (t.nullish = () => H0(S5e(t))),
        (t.nonoptional = (r) => tLt(t, r)),
        (t.array = () => yn(t)),
        (t.or = (r) => Tl([t, r])),
        (t.and = (r) => xoe(t, r)),
        (t.transform = (r) => w5e(t, JWe(r))),
        (t.default = (r) => XBt(t, r)),
        (t.prefault = (r) => eLt(t, r)),
        (t.catch = (r) => iLt(t, r)),
        (t.pipe = (r) => w5e(t, r)),
        (t.readonly = () => aLt(t)),
        (t.describe = (r) => {
          let n = t.clone();
          return (Gh.add(n, { description: r }), n);
        }),
        Object.defineProperty(t, "description", {
          get() {
            return Gh.get(t)?.description;
          },
          configurable: !0,
        }),
        (t.meta = (...r) => {
          if (r.length === 0) return Gh.get(t);
          let n = t.clone();
          return (Gh.add(n, r[0]), n);
        }),
        (t.isOptional = () => t.safeParse(void 0).success),
        (t.isNullable = () => t.safeParse(null).success),
        (t.apply = (r) => r(t)),
        t
      ),
    )),
      (RWe = Mt("_ZodString", (t, e) => {
        (eM.init(t, e), Zs.init(t, e), (t._zod.processJSONSchema = (n, o, s) => SPt(t, n, o, s)));
        let r = t._zod.bag;
        ((t.format = r.format ?? null),
          (t.minLength = r.minimum ?? null),
          (t.maxLength = r.maximum ?? null),
          (t.regex = (...n) => t.check(vH(...n))),
          (t.includes = (...n) => t.check(wH(...n))),
          (t.startsWith = (...n) => t.check(xH(...n))),
          (t.endsWith = (...n) => t.check(TH(...n))),
          (t.min = (...n) => t.check(wT(...n))),
          (t.max = (...n) => t.check(rM(...n))),
          (t.length = (...n) => t.check(nM(...n))),
          (t.nonempty = (...n) => t.check(wT(1, ...n))),
          (t.lowercase = (n) => t.check(CH(n))),
          (t.uppercase = (n) => t.check(SH(n))),
          (t.trim = () => t.check(RH())),
          (t.normalize = (...n) => t.check(IH(...n))),
          (t.toLowerCase = () => t.check(kH())),
          (t.toUpperCase = () => t.check(OH())),
          (t.slugify = () => t.check(poe())));
      })),
      (_oe = Mt("ZodString", (t, e) => {
        (eM.init(t, e),
          RWe.init(t, e),
          (t.email = (r) => t.check(z2e(kWe, r))),
          (t.url = (r) => t.check(foe(x5e, r))),
          (t.jwt = (r) => t.check(f5e(WWe, r))),
          (t.emoji = (r) => t.check(Z2e(NWe, r))),
          (t.guid = (r) => t.check(doe(C5e, r))),
          (t.uuid = (r) => t.check(Y2e(xT, r))),
          (t.uuidv4 = (r) => t.check(K2e(xT, r))),
          (t.uuidv6 = (r) => t.check(J2e(xT, r))),
          (t.uuidv7 = (r) => t.check(X2e(xT, r))),
          (t.nanoid = (r) => t.check(e5e(PWe, r))),
          (t.guid = (r) => t.check(doe(C5e, r))),
          (t.cuid = (r) => t.check(t5e(BWe, r))),
          (t.cuid2 = (r) => t.check(r5e(LWe, r))),
          (t.ulid = (r) => t.check(n5e(MWe, r))),
          (t.base64 = (r) => t.check(l5e(qWe, r))),
          (t.base64url = (r) => t.check(m5e(HWe, r))),
          (t.xid = (r) => t.check(i5e(FWe, r))),
          (t.ksuid = (r) => t.check(o5e(UWe, r))),
          (t.ipv4 = (r) => t.check(s5e($We, r))),
          (t.ipv6 = (r) => t.check(a5e(jWe, r))),
          (t.cidrv4 = (r) => t.check(u5e(QWe, r))),
          (t.cidrv6 = (r) => t.check(c5e(GWe, r))),
          (t.e164 = (r) => t.check(d5e(VWe, r))),
          (t.datetime = (r) => t.check(mBt(r))),
          (t.date = (r) => t.check(dBt(r))),
          (t.time = (r) => t.check(fBt(r))),
          (t.duration = (r) => t.check(pBt(r))));
      })));
    ((Yl = Mt("ZodStringFormat", (t, e) => {
      (xl.init(t, e), RWe.init(t, e));
    })),
      (kWe = Mt("ZodEmail", (t, e) => {
        (_He.init(t, e), Yl.init(t, e));
      })));
    C5e = Mt("ZodGUID", (t, e) => {
      (AHe.init(t, e), Yl.init(t, e));
    });
    xT = Mt("ZodUUID", (t, e) => {
      (yHe.init(t, e), Yl.init(t, e));
    });
    x5e = Mt("ZodURL", (t, e) => {
      (EHe.init(t, e), Yl.init(t, e));
    });
    NWe = Mt("ZodEmoji", (t, e) => {
      (vHe.init(t, e), Yl.init(t, e));
    });
    PWe = Mt("ZodNanoID", (t, e) => {
      (CHe.init(t, e), Yl.init(t, e));
    });
    BWe = Mt("ZodCUID", (t, e) => {
      (SHe.init(t, e), Yl.init(t, e));
    });
    LWe = Mt("ZodCUID2", (t, e) => {
      (wHe.init(t, e), Yl.init(t, e));
    });
    MWe = Mt("ZodULID", (t, e) => {
      (xHe.init(t, e), Yl.init(t, e));
    });
    FWe = Mt("ZodXID", (t, e) => {
      (THe.init(t, e), Yl.init(t, e));
    });
    UWe = Mt("ZodKSUID", (t, e) => {
      (DHe.init(t, e), Yl.init(t, e));
    });
    $We = Mt("ZodIPv4", (t, e) => {
      (NHe.init(t, e), Yl.init(t, e));
    });
    IBt = Mt("ZodMAC", (t, e) => {
      (BHe.init(t, e), Yl.init(t, e));
    });
    jWe = Mt("ZodIPv6", (t, e) => {
      (PHe.init(t, e), Yl.init(t, e));
    });
    QWe = Mt("ZodCIDRv4", (t, e) => {
      (LHe.init(t, e), Yl.init(t, e));
    });
    GWe = Mt("ZodCIDRv6", (t, e) => {
      (MHe.init(t, e), Yl.init(t, e));
    });
    qWe = Mt("ZodBase64", (t, e) => {
      (FHe.init(t, e), Yl.init(t, e));
    });
    HWe = Mt("ZodBase64URL", (t, e) => {
      (UHe.init(t, e), Yl.init(t, e));
    });
    VWe = Mt("ZodE164", (t, e) => {
      ($He.init(t, e), Yl.init(t, e));
    });
    WWe = Mt("ZodJWT", (t, e) => {
      (jHe.init(t, e), Yl.init(t, e));
    });
    Eoe = Mt("ZodCustomStringFormat", (t, e) => {
      (QHe.init(t, e), Yl.init(t, e));
    });
    voe = Mt("ZodNumber", (t, e) => {
      (j2e.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (n, o, s) => wPt(t, n, o, s)),
        (t.gt = (n, o) => t.check(w4(n, o))),
        (t.gte = (n, o) => t.check(sg(n, o))),
        (t.min = (n, o) => t.check(sg(n, o))),
        (t.lt = (n, o) => t.check(S4(n, o))),
        (t.lte = (n, o) => t.check(_2(n, o))),
        (t.max = (n, o) => t.check(_2(n, o))),
        (t.int = (n) => t.check(IWe(n))),
        (t.safe = (n) => t.check(IWe(n))),
        (t.positive = (n) => t.check(w4(0, n))),
        (t.nonnegative = (n) => t.check(sg(0, n))),
        (t.negative = (n) => t.check(S4(0, n))),
        (t.nonpositive = (n) => t.check(_2(0, n))),
        (t.multipleOf = (n, o) => t.check(sk(n, o))),
        (t.step = (n, o) => t.check(sk(n, o))),
        (t.finite = () => t));
      let r = t._zod.bag;
      ((t.minValue =
        Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null),
        (t.maxValue =
          Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null),
        (t.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5)),
        (t.isFinite = !0),
        (t.format = r.format ?? null));
    });
    PH = Mt("ZodNumberFormat", (t, e) => {
      (GHe.init(t, e), voe.init(t, e));
    });
    Coe = Mt("ZodBoolean", (t, e) => {
      (aoe.init(t, e), Zs.init(t, e), (t._zod.processJSONSchema = (r, n, o) => xPt(t, r, n, o)));
    });
    Soe = Mt("ZodBigInt", (t, e) => {
      (Q2e.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (n, o, s) => TPt(t, n, o, s)),
        (t.gte = (n, o) => t.check(sg(n, o))),
        (t.min = (n, o) => t.check(sg(n, o))),
        (t.gt = (n, o) => t.check(w4(n, o))),
        (t.gte = (n, o) => t.check(sg(n, o))),
        (t.min = (n, o) => t.check(sg(n, o))),
        (t.lt = (n, o) => t.check(S4(n, o))),
        (t.lte = (n, o) => t.check(_2(n, o))),
        (t.max = (n, o) => t.check(_2(n, o))),
        (t.positive = (n) => t.check(w4(BigInt(0), n))),
        (t.negative = (n) => t.check(S4(BigInt(0), n))),
        (t.nonpositive = (n) => t.check(_2(BigInt(0), n))),
        (t.nonnegative = (n) => t.check(sg(BigInt(0), n))),
        (t.multipleOf = (n, o) => t.check(sk(n, o))));
      let r = t._zod.bag;
      ((t.minValue = r.minimum ?? null), (t.maxValue = r.maximum ?? null), (t.format = r.format ?? null));
    });
    zWe = Mt("ZodBigIntFormat", (t, e) => {
      (qHe.init(t, e), Soe.init(t, e));
    });
    RBt = Mt("ZodSymbol", (t, e) => {
      (HHe.init(t, e), Zs.init(t, e), (t._zod.processJSONSchema = (r, n, o) => DPt(t, r, n, o)));
    });
    kBt = Mt("ZodUndefined", (t, e) => {
      (VHe.init(t, e), Zs.init(t, e), (t._zod.processJSONSchema = (r, n, o) => RPt(t, r, n, o)));
    });
    OBt = Mt("ZodNull", (t, e) => {
      (WHe.init(t, e), Zs.init(t, e), (t._zod.processJSONSchema = (r, n, o) => IPt(t, r, n, o)));
    });
    NBt = Mt("ZodAny", (t, e) => {
      (zHe.init(t, e), Zs.init(t, e), (t._zod.processJSONSchema = (r, n, o) => NPt(t, r, n, o)));
    });
    PBt = Mt("ZodUnknown", (t, e) => {
      (YHe.init(t, e), Zs.init(t, e), (t._zod.processJSONSchema = (r, n, o) => PPt(t, r, n, o)));
    });
    BBt = Mt("ZodNever", (t, e) => {
      (KHe.init(t, e), Zs.init(t, e), (t._zod.processJSONSchema = (r, n, o) => OPt(t, r, n, o)));
    });
    LBt = Mt("ZodVoid", (t, e) => {
      (JHe.init(t, e), Zs.init(t, e), (t._zod.processJSONSchema = (r, n, o) => kPt(t, r, n, o)));
    });
    T5e = Mt("ZodDate", (t, e) => {
      (XHe.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (n, o, s) => BPt(t, n, o, s)),
        (t.min = (n, o) => t.check(sg(n, o))),
        (t.max = (n, o) => t.check(_2(n, o))));
      let r = t._zod.bag;
      ((t.minDate = r.minimum ? new Date(r.minimum) : null), (t.maxDate = r.maximum ? new Date(r.maximum) : null));
    });
    MBt = Mt("ZodArray", (t, e) => {
      (ZHe.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => WPt(t, r, n, o)),
        (t.element = e.element),
        (t.min = (r, n) => t.check(wT(r, n))),
        (t.nonempty = (r) => t.check(wT(1, r))),
        (t.max = (r, n) => t.check(rM(r, n))),
        (t.length = (r, n) => t.check(nM(r, n))),
        (t.unwrap = () => t.element));
    });
    D5e = Mt("ZodObject", (t, e) => {
      (bPt.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => zPt(t, r, n, o)),
        nn.defineLazy(t, "shape", () => e.shape),
        (t.keyof = () => ag(Object.keys(t._zod.def.shape))),
        (t.catchall = (r) => t.clone({ ...t._zod.def, catchall: r })),
        (t.passthrough = () => t.clone({ ...t._zod.def, catchall: Kl() })),
        (t.loose = () => t.clone({ ...t._zod.def, catchall: Kl() })),
        (t.strict = () => t.clone({ ...t._zod.def, catchall: KWe() })),
        (t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 })),
        (t.extend = (r) => nn.extend(t, r)),
        (t.safeExtend = (r) => nn.safeExtend(t, r)),
        (t.merge = (r) => nn.merge(t, r)),
        (t.pick = (r) => nn.pick(t, r)),
        (t.omit = (r) => nn.omit(t, r)),
        (t.partial = (...r) => nn.partial(XWe, t, r[0])),
        (t.required = (...r) => nn.required(ZWe, t, r[0])));
    });
    I5e = Mt("ZodUnion", (t, e) => {
      (uoe.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => bWe(t, r, n, o)),
        (t.options = e.options));
    });
    FBt = Mt("ZodXor", (t, e) => {
      (I5e.init(t, e),
        eVe.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => bWe(t, r, n, o)),
        (t.options = e.options));
    });
    UBt = Mt("ZodDiscriminatedUnion", (t, e) => {
      (I5e.init(t, e), tVe.init(t, e));
    });
    $Bt = Mt("ZodIntersection", (t, e) => {
      (rVe.init(t, e), Zs.init(t, e), (t._zod.processJSONSchema = (r, n, o) => YPt(t, r, n, o)));
    });
    jBt = Mt("ZodTuple", (t, e) => {
      (G2e.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => KPt(t, r, n, o)),
        (t.rest = (r) => t.clone({ ...t._zod.def, rest: r })));
    });
    k5e = Mt("ZodRecord", (t, e) => {
      (nVe.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => JPt(t, r, n, o)),
        (t.keyType = e.keyType),
        (t.valueType = e.valueType));
    });
    GBt = Mt("ZodMap", (t, e) => {
      (iVe.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => HPt(t, r, n, o)),
        (t.keyType = e.keyType),
        (t.valueType = e.valueType),
        (t.min = (...r) => t.check(x4(...r))),
        (t.nonempty = (r) => t.check(x4(1, r))),
        (t.max = (...r) => t.check(ak(...r))),
        (t.size = (...r) => t.check(tM(...r))));
    });
    qBt = Mt("ZodSet", (t, e) => {
      (oVe.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => VPt(t, r, n, o)),
        (t.min = (...r) => t.check(x4(...r))),
        (t.nonempty = (r) => t.check(x4(1, r))),
        (t.max = (...r) => t.check(ak(...r))),
        (t.size = (...r) => t.check(tM(...r))));
    });
    yoe = Mt("ZodEnum", (t, e) => {
      (sVe.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (n, o, s) => LPt(t, n, o, s)),
        (t.enum = e.entries),
        (t.options = Object.values(e.entries)));
      let r = new Set(Object.keys(e.entries));
      ((t.extract = (n, o) => {
        let s = {};
        for (let a of n)
          if (r.has(a)) s[a] = e.entries[a];
          else throw new Error(`Key ${a} not found in enum`);
        return new yoe({ ...e, checks: [], ...nn.normalizeParams(o), entries: s });
      }),
        (t.exclude = (n, o) => {
          let s = { ...e.entries };
          for (let a of n)
            if (r.has(a)) delete s[a];
            else throw new Error(`Key ${a} not found in enum`);
          return new yoe({ ...e, checks: [], ...nn.normalizeParams(o), entries: s });
        }));
    });
    HBt = Mt("ZodLiteral", (t, e) => {
      (aVe.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => MPt(t, r, n, o)),
        (t.values = new Set(e.values)),
        Object.defineProperty(t, "value", {
          get() {
            if (e.values.length > 1)
              throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
            return e.values[0];
          },
        }));
    });
    VBt = Mt("ZodFile", (t, e) => {
      (uVe.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => $Pt(t, r, n, o)),
        (t.min = (r, n) => t.check(x4(r, n))),
        (t.max = (r, n) => t.check(ak(r, n))),
        (t.mime = (r, n) => t.check(DH(Array.isArray(r) ? r : [r], n))));
    });
    WBt = Mt("ZodTransform", (t, e) => {
      (cVe.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => qPt(t, r, n, o)),
        (t._zod.parse = (r, n) => {
          if (n.direction === "backward") throw new YL(t.constructor.name);
          r.addIssue = (s) => {
            if (typeof s == "string") r.issues.push(nn.issue(s, r.value, e));
            else {
              let a = s;
              (a.fatal && (a.continue = !1),
                a.code ?? (a.code = "custom"),
                a.input ?? (a.input = r.value),
                a.inst ?? (a.inst = t),
                r.issues.push(nn.issue(a)));
            }
          };
          let o = e.transform(r.value, r);
          return o instanceof Promise ? o.then((s) => ((r.value = s), r)) : ((r.value = o), r);
        }));
    });
    XWe = Mt("ZodOptional", (t, e) => {
      (q2e.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => AWe(t, r, n, o)),
        (t.unwrap = () => t._zod.def.innerType));
    });
    zBt = Mt("ZodExactOptional", (t, e) => {
      (lVe.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => AWe(t, r, n, o)),
        (t.unwrap = () => t._zod.def.innerType));
    });
    KBt = Mt("ZodNullable", (t, e) => {
      (mVe.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => XPt(t, r, n, o)),
        (t.unwrap = () => t._zod.def.innerType));
    });
    JBt = Mt("ZodDefault", (t, e) => {
      (dVe.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => eBt(t, r, n, o)),
        (t.unwrap = () => t._zod.def.innerType),
        (t.removeDefault = t.unwrap));
    });
    ZBt = Mt("ZodPrefault", (t, e) => {
      (fVe.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => tBt(t, r, n, o)),
        (t.unwrap = () => t._zod.def.innerType));
    });
    ZWe = Mt("ZodNonOptional", (t, e) => {
      (pVe.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => ZPt(t, r, n, o)),
        (t.unwrap = () => t._zod.def.innerType));
    });
    rLt = Mt("ZodSuccess", (t, e) => {
      (hVe.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => jPt(t, r, n, o)),
        (t.unwrap = () => t._zod.def.innerType));
    });
    nLt = Mt("ZodCatch", (t, e) => {
      (gVe.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => rBt(t, r, n, o)),
        (t.unwrap = () => t._zod.def.innerType),
        (t.removeCatch = t.unwrap));
    });
    oLt = Mt("ZodNaN", (t, e) => {
      (bVe.init(t, e), Zs.init(t, e), (t._zod.processJSONSchema = (r, n, o) => FPt(t, r, n, o)));
    });
    eze = Mt("ZodPipe", (t, e) => {
      (AVe.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => nBt(t, r, n, o)),
        (t.in = e.in),
        (t.out = e.out));
    });
    tze = Mt("ZodCodec", (t, e) => {
      (eze.init(t, e), coe.init(t, e));
    });
    sLt = Mt("ZodReadonly", (t, e) => {
      (yVe.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => iBt(t, r, n, o)),
        (t.unwrap = () => t._zod.def.innerType));
    });
    uLt = Mt("ZodTemplateLiteral", (t, e) => {
      (_Ve.init(t, e), Zs.init(t, e), (t._zod.processJSONSchema = (r, n, o) => UPt(t, r, n, o)));
    });
    cLt = Mt("ZodLazy", (t, e) => {
      (CVe.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => sBt(t, r, n, o)),
        (t.unwrap = () => t._zod.def.getter()));
    });
    mLt = Mt("ZodPromise", (t, e) => {
      (vVe.init(t, e),
        Zs.init(t, e),
        (t._zod.processJSONSchema = (r, n, o) => oBt(t, r, n, o)),
        (t.unwrap = () => t._zod.def.innerType));
    });
    dLt = Mt("ZodFunction", (t, e) => {
      (EVe.init(t, e), Zs.init(t, e), (t._zod.processJSONSchema = (r, n, o) => GPt(t, r, n, o)));
    });
    O5e = Mt("ZodCustom", (t, e) => {
      (SVe.init(t, e), Zs.init(t, e), (t._zod.processJSONSchema = (r, n, o) => QPt(t, r, n, o)));
    });
    ((lfn = fWe), (mfn = pWe));
    ffn = (...t) => hWe({ Codec: tze, Boolean: Coe, String: _oe }, ...t);
  });
function xas(t) {
  Od({ customError: t });
}
function Tas() {
  return Od().customError;
}
var gLt,
  hLt,
  hfn = j(() => {
    V1();
    V1();
    gLt = {
      invalid_type: "invalid_type",
      too_big: "too_big",
      too_small: "too_small",
      invalid_format: "invalid_format",
      not_multiple_of: "not_multiple_of",
      unrecognized_keys: "unrecognized_keys",
      invalid_union: "invalid_union",
      invalid_key: "invalid_key",
      invalid_element: "invalid_element",
      invalid_value: "invalid_value",
      custom: "custom",
    };
    hLt || (hLt = {});
  });
function Ias(t, e) {
  let r = t.$schema;
  return r === "https://json-schema.org/draft/2020-12/schema"
    ? "draft-2020-12"
    : r === "http://json-schema.org/draft-07/schema#"
      ? "draft-7"
      : r === "http://json-schema.org/draft-04/schema#"
        ? "draft-4"
        : (e ?? "draft-2020-12");
}
function Ras(t, e) {
  if (!t.startsWith("#")) throw new Error("External $ref is not supported, only local refs (#/...) are allowed");
  let r = t.slice(1).split("/").filter(Boolean);
  if (r.length === 0) return e.rootSchema;
  let n = e.version === "draft-2020-12" ? "$defs" : "definitions";
  if (r[0] === n) {
    let o = r[1];
    if (!o || !e.defs[o]) throw new Error(`Reference not found: ${t}`);
    return e.defs[o];
  }
  throw new Error(`Reference not found: ${t}`);
}
function gfn(t, e) {
  if (t.not !== void 0) {
    if (typeof t.not == "object" && Object.keys(t.not).length === 0) return $n.never();
    throw new Error("not is not supported in Zod (except { not: {} } for never)");
  }
  if (t.unevaluatedItems !== void 0) throw new Error("unevaluatedItems is not supported");
  if (t.unevaluatedProperties !== void 0) throw new Error("unevaluatedProperties is not supported");
  if (t.if !== void 0 || t.then !== void 0 || t.else !== void 0)
    throw new Error("Conditional schemas (if/then/else) are not supported");
  if (t.dependentSchemas !== void 0 || t.dependentRequired !== void 0)
    throw new Error("dependentSchemas and dependentRequired are not supported");
  if (t.$ref) {
    let o = t.$ref;
    if (e.refs.has(o)) return e.refs.get(o);
    if (e.processing.has(o))
      return $n.lazy(() => {
        if (!e.refs.has(o)) throw new Error(`Circular reference not resolved: ${o}`);
        return e.refs.get(o);
      });
    e.processing.add(o);
    let s = Ras(o, e),
      a = Mb(s, e);
    return (e.refs.set(o, a), e.processing.delete(o), a);
  }
  if (t.enum !== void 0) {
    let o = t.enum;
    if (e.version === "openapi-3.0" && t.nullable === !0 && o.length === 1 && o[0] === null) return $n.null();
    if (o.length === 0) return $n.never();
    if (o.length === 1) return $n.literal(o[0]);
    if (o.every((a) => typeof a == "string")) return $n.enum(o);
    let s = o.map((a) => $n.literal(a));
    return s.length < 2 ? s[0] : $n.union([s[0], s[1], ...s.slice(2)]);
  }
  if (t.const !== void 0) return $n.literal(t.const);
  let r = t.type;
  if (Array.isArray(r)) {
    let o = r.map((s) => {
      let a = { ...t, type: s };
      return gfn(a, e);
    });
    return o.length === 0 ? $n.never() : o.length === 1 ? o[0] : $n.union(o);
  }
  if (!r) return $n.any();
  let n;
  switch (r) {
    case "string": {
      let o = $n.string();
      if (t.format) {
        let s = t.format;
        s === "email"
          ? (o = o.check($n.email()))
          : s === "uri" || s === "uri-reference"
            ? (o = o.check($n.url()))
            : s === "uuid" || s === "guid"
              ? (o = o.check($n.uuid()))
              : s === "date-time"
                ? (o = o.check($n.iso.datetime()))
                : s === "date"
                  ? (o = o.check($n.iso.date()))
                  : s === "time"
                    ? (o = o.check($n.iso.time()))
                    : s === "duration"
                      ? (o = o.check($n.iso.duration()))
                      : s === "ipv4"
                        ? (o = o.check($n.ipv4()))
                        : s === "ipv6"
                          ? (o = o.check($n.ipv6()))
                          : s === "mac"
                            ? (o = o.check($n.mac()))
                            : s === "cidr"
                              ? (o = o.check($n.cidrv4()))
                              : s === "cidr-v6"
                                ? (o = o.check($n.cidrv6()))
                                : s === "base64"
                                  ? (o = o.check($n.base64()))
                                  : s === "base64url"
                                    ? (o = o.check($n.base64url()))
                                    : s === "e164"
                                      ? (o = o.check($n.e164()))
                                      : s === "jwt"
                                        ? (o = o.check($n.jwt()))
                                        : s === "emoji"
                                          ? (o = o.check($n.emoji()))
                                          : s === "nanoid"
                                            ? (o = o.check($n.nanoid()))
                                            : s === "cuid"
                                              ? (o = o.check($n.cuid()))
                                              : s === "cuid2"
                                                ? (o = o.check($n.cuid2()))
                                                : s === "ulid"
                                                  ? (o = o.check($n.ulid()))
                                                  : s === "xid"
                                                    ? (o = o.check($n.xid()))
                                                    : s === "ksuid" && (o = o.check($n.ksuid()));
      }
      (typeof t.minLength == "number" && (o = o.min(t.minLength)),
        typeof t.maxLength == "number" && (o = o.max(t.maxLength)),
        t.pattern && (o = o.regex(new RegExp(t.pattern))),
        (n = o));
      break;
    }
    case "number":
    case "integer": {
      let o = r === "integer" ? $n.number().int() : $n.number();
      (typeof t.minimum == "number" && (o = o.min(t.minimum)),
        typeof t.maximum == "number" && (o = o.max(t.maximum)),
        typeof t.exclusiveMinimum == "number"
          ? (o = o.gt(t.exclusiveMinimum))
          : t.exclusiveMinimum === !0 && typeof t.minimum == "number" && (o = o.gt(t.minimum)),
        typeof t.exclusiveMaximum == "number"
          ? (o = o.lt(t.exclusiveMaximum))
          : t.exclusiveMaximum === !0 && typeof t.maximum == "number" && (o = o.lt(t.maximum)),
        typeof t.multipleOf == "number" && (o = o.multipleOf(t.multipleOf)),
        (n = o));
      break;
    }
    case "boolean": {
      n = $n.boolean();
      break;
    }
    case "null": {
      n = $n.null();
      break;
    }
    case "object": {
      let o = {},
        s = t.properties || {},
        a = new Set(t.required || []);
      for (let [c, m] of Object.entries(s)) {
        let d = Mb(m, e);
        o[c] = a.has(c) ? d : d.optional();
      }
      if (t.propertyNames) {
        let c = Mb(t.propertyNames, e),
          m =
            t.additionalProperties && typeof t.additionalProperties == "object"
              ? Mb(t.additionalProperties, e)
              : $n.any();
        if (Object.keys(o).length === 0) {
          n = $n.record(c, m);
          break;
        }
        let d = $n.object(o).passthrough(),
          f = $n.looseRecord(c, m);
        n = $n.intersection(d, f);
        break;
      }
      if (t.patternProperties) {
        let c = t.patternProperties,
          m = Object.keys(c),
          d = [];
        for (let p of m) {
          let h = Mb(c[p], e),
            g = $n.string().regex(new RegExp(p));
          d.push($n.looseRecord(g, h));
        }
        let f = [];
        if ((Object.keys(o).length > 0 && f.push($n.object(o).passthrough()), f.push(...d), f.length === 0))
          n = $n.object({}).passthrough();
        else if (f.length === 1) n = f[0];
        else {
          let p = $n.intersection(f[0], f[1]);
          for (let h = 2; h < f.length; h++) p = $n.intersection(p, f[h]);
          n = p;
        }
        break;
      }
      let u = $n.object(o);
      t.additionalProperties === !1
        ? (n = u.strict())
        : typeof t.additionalProperties == "object"
          ? (n = u.catchall(Mb(t.additionalProperties, e)))
          : (n = u.passthrough());
      break;
    }
    case "array": {
      let o = t.prefixItems,
        s = t.items;
      if (o && Array.isArray(o)) {
        let a = o.map((c) => Mb(c, e)),
          u = s && typeof s == "object" && !Array.isArray(s) ? Mb(s, e) : void 0;
        (u ? (n = $n.tuple(a).rest(u)) : (n = $n.tuple(a)),
          typeof t.minItems == "number" && (n = n.check($n.minLength(t.minItems))),
          typeof t.maxItems == "number" && (n = n.check($n.maxLength(t.maxItems))));
      } else if (Array.isArray(s)) {
        let a = s.map((c) => Mb(c, e)),
          u = t.additionalItems && typeof t.additionalItems == "object" ? Mb(t.additionalItems, e) : void 0;
        (u ? (n = $n.tuple(a).rest(u)) : (n = $n.tuple(a)),
          typeof t.minItems == "number" && (n = n.check($n.minLength(t.minItems))),
          typeof t.maxItems == "number" && (n = n.check($n.maxLength(t.maxItems))));
      } else if (s !== void 0) {
        let a = Mb(s, e),
          u = $n.array(a);
        (typeof t.minItems == "number" && (u = u.min(t.minItems)),
          typeof t.maxItems == "number" && (u = u.max(t.maxItems)),
          (n = u));
      } else n = $n.array($n.any());
      break;
    }
    default:
      throw new Error(`Unsupported type: ${r}`);
  }
  return (t.description && (n = n.describe(t.description)), t.default !== void 0 && (n = n.default(t.default)), n);
}
function Mb(t, e) {
  if (typeof t == "boolean") return t ? $n.any() : $n.never();
  let r = gfn(t, e),
    n = t.type || t.enum !== void 0 || t.const !== void 0;
  if (t.anyOf && Array.isArray(t.anyOf)) {
    let u = t.anyOf.map((m) => Mb(m, e)),
      c = $n.union(u);
    r = n ? $n.intersection(r, c) : c;
  }
  if (t.oneOf && Array.isArray(t.oneOf)) {
    let u = t.oneOf.map((m) => Mb(m, e)),
      c = $n.xor(u);
    r = n ? $n.intersection(r, c) : c;
  }
  if (t.allOf && Array.isArray(t.allOf))
    if (t.allOf.length === 0) r = n ? r : $n.any();
    else {
      let u = n ? r : Mb(t.allOf[0], e),
        c = n ? 0 : 1;
      for (let m = c; m < t.allOf.length; m++) u = $n.intersection(u, Mb(t.allOf[m], e));
      r = u;
    }
  (t.nullable === !0 && e.version === "openapi-3.0" && (r = $n.nullable(r)), t.readOnly === !0 && (r = $n.readonly(r)));
  let o = {},
    s = ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"];
  for (let u of s) u in t && (o[u] = t[u]);
  let a = ["contentEncoding", "contentMediaType", "contentSchema"];
  for (let u of a) u in t && (o[u] = t[u]);
  for (let u of Object.keys(t)) Das.has(u) || (o[u] = t[u]);
  return (Object.keys(o).length > 0 && e.registry.add(r, o), r);
}
function bfn(t, e) {
  if (typeof t == "boolean") return t ? $n.any() : $n.never();
  let r = Ias(t, e?.defaultTarget),
    n = t.$defs || t.definitions || {},
    o = { version: r, defs: n, refs: new Map(), processing: new Set(), rootSchema: t, registry: e?.registry ?? Gh };
  return Mb(t, o);
}
var $n,
  Das,
  Afn = j(() => {
    W2e();
    SWe();
    _5e();
    v5e();
    (($n = { ...E5e, ...CWe, iso: aM }),
      (Das = new Set([
        "$schema",
        "$ref",
        "$defs",
        "definitions",
        "$id",
        "id",
        "$comment",
        "$anchor",
        "$vocabulary",
        "$dynamicRef",
        "$dynamicAnchor",
        "type",
        "enum",
        "const",
        "anyOf",
        "oneOf",
        "allOf",
        "not",
        "properties",
        "required",
        "additionalProperties",
        "patternProperties",
        "propertyNames",
        "minProperties",
        "maxProperties",
        "items",
        "prefixItems",
        "additionalItems",
        "minItems",
        "maxItems",
        "uniqueItems",
        "contains",
        "minContains",
        "maxContains",
        "minLength",
        "maxLength",
        "pattern",
        "format",
        "minimum",
        "maximum",
        "exclusiveMinimum",
        "exclusiveMaximum",
        "multipleOf",
        "description",
        "default",
        "contentEncoding",
        "contentMediaType",
        "contentSchema",
        "unevaluatedItems",
        "unevaluatedProperties",
        "if",
        "then",
        "else",
        "dependentSchemas",
        "dependentRequired",
        "nullable",
        "readOnly",
      ])));
  });
var P5e = {};
Wi(P5e, { bigint: () => Pas, boolean: () => Nas, date: () => Bas, number: () => Oas, string: () => kas });
function kas(t) {
  return NVe(_oe, t);
}
function Oas(t) {
  return jVe(voe, t);
}
function Nas(t) {
  return zVe(Coe, t);
}
function Pas(t) {
  return KVe(Soe, t);
}
function Bas(t) {
  return aWe(T5e, t);
}
var yfn = j(() => {
  V1();
  v5e();
});
var ya = {};
Wi(ya, {
  $brand: () => R2e,
  $input: () => kVe,
  $output: () => RVe,
  NEVER: () => Vie,
  TimePrecision: () => BVe,
  ZodAny: () => NBt,
  ZodArray: () => MBt,
  ZodBase64: () => qWe,
  ZodBase64URL: () => HWe,
  ZodBigInt: () => Soe,
  ZodBigIntFormat: () => zWe,
  ZodBoolean: () => Coe,
  ZodCIDRv4: () => QWe,
  ZodCIDRv6: () => GWe,
  ZodCUID: () => BWe,
  ZodCUID2: () => LWe,
  ZodCatch: () => nLt,
  ZodCodec: () => tze,
  ZodCustom: () => O5e,
  ZodCustomStringFormat: () => Eoe,
  ZodDate: () => T5e,
  ZodDefault: () => JBt,
  ZodDiscriminatedUnion: () => UBt,
  ZodE164: () => VWe,
  ZodEmail: () => kWe,
  ZodEmoji: () => NWe,
  ZodEnum: () => yoe,
  ZodError: () => Sas,
  ZodExactOptional: () => zBt,
  ZodFile: () => VBt,
  ZodFirstPartyTypeKind: () => hLt,
  ZodFunction: () => dLt,
  ZodGUID: () => C5e,
  ZodIPv4: () => $We,
  ZodIPv6: () => jWe,
  ZodISODate: () => xWe,
  ZodISODateTime: () => wWe,
  ZodISODuration: () => DWe,
  ZodISOTime: () => TWe,
  ZodIntersection: () => $Bt,
  ZodIssueCode: () => gLt,
  ZodJWT: () => WWe,
  ZodKSUID: () => UWe,
  ZodLazy: () => cLt,
  ZodLiteral: () => HBt,
  ZodMAC: () => IBt,
  ZodMap: () => GBt,
  ZodNaN: () => oLt,
  ZodNanoID: () => PWe,
  ZodNever: () => BBt,
  ZodNonOptional: () => ZWe,
  ZodNull: () => OBt,
  ZodNullable: () => KBt,
  ZodNumber: () => voe,
  ZodNumberFormat: () => PH,
  ZodObject: () => D5e,
  ZodOptional: () => XWe,
  ZodPipe: () => eze,
  ZodPrefault: () => ZBt,
  ZodPromise: () => mLt,
  ZodReadonly: () => sLt,
  ZodRealError: () => _8,
  ZodRecord: () => k5e,
  ZodSet: () => qBt,
  ZodString: () => _oe,
  ZodStringFormat: () => Yl,
  ZodSuccess: () => rLt,
  ZodSymbol: () => RBt,
  ZodTemplateLiteral: () => uLt,
  ZodTransform: () => WBt,
  ZodTuple: () => jBt,
  ZodType: () => Zs,
  ZodULID: () => MWe,
  ZodURL: () => x5e,
  ZodUUID: () => xT,
  ZodUndefined: () => kBt,
  ZodUnion: () => I5e,
  ZodUnknown: () => PBt,
  ZodVoid: () => LBt,
  ZodXID: () => FWe,
  ZodXor: () => FBt,
  _ZodString: () => RWe,
  _default: () => XBt,
  _function: () => ufn,
  any: () => YWe,
  array: () => yn,
  base64: () => D1n,
  base64url: () => I1n,
  bigint: () => $1n,
  boolean: () => rl,
  catch: () => iLt,
  check: () => cfn,
  cidrv4: () => x1n,
  cidrv6: () => T1n,
  clone: () => og,
  codec: () => ofn,
  coerce: () => P5e,
  config: () => Od,
  core: () => v6,
  cuid: () => A1n,
  cuid2: () => y1n,
  custom: () => rze,
  date: () => V1n,
  decode: () => EBt,
  decodeAsync: () => CBt,
  describe: () => lfn,
  discriminatedUnion: () => R5e,
  e164: () => R1n,
  email: () => c1n,
  emoji: () => g1n,
  encode: () => _Bt,
  encodeAsync: () => vBt,
  endsWith: () => TH,
  enum: () => ag,
  exactOptional: () => YBt,
  file: () => tfn,
  flattenError: () => Jie,
  float32: () => L1n,
  float64: () => M1n,
  formatError: () => Xie,
  fromJSONSchema: () => bfn,
  function: () => ufn,
  getErrorMap: () => Tas,
  globalRegistry: () => Gh,
  gt: () => w4,
  gte: () => sg,
  guid: () => l1n,
  hash: () => B1n,
  hex: () => P1n,
  hostname: () => N1n,
  httpUrl: () => h1n,
  includes: () => wH,
  instanceof: () => dfn,
  int: () => IWe,
  int32: () => F1n,
  int64: () => j1n,
  intersection: () => xoe,
  ipv4: () => C1n,
  ipv6: () => w1n,
  iso: () => aM,
  json: () => pfn,
  jwt: () => k1n,
  keyof: () => W1n,
  ksuid: () => v1n,
  lazy: () => lLt,
  length: () => nM,
  literal: () => Pi,
  locales: () => moe,
  looseObject: () => W1,
  looseRecord: () => J1n,
  lowercase: () => CH,
  lt: () => S4,
  lte: () => _2,
  mac: () => S1n,
  map: () => X1n,
  maxLength: () => rM,
  maxSize: () => ak,
  meta: () => mfn,
  mime: () => DH,
  minLength: () => wT,
  minSize: () => x4,
  multipleOf: () => sk,
  nan: () => ifn,
  nanoid: () => b1n,
  nativeEnum: () => efn,
  negative: () => h5e,
  never: () => KWe,
  nonnegative: () => b5e,
  nonoptional: () => tLt,
  nonpositive: () => g5e,
  normalize: () => IH,
  null: () => woe,
  nullable: () => S5e,
  nullish: () => rfn,
  number: () => Cu,
  object: () => Dn,
  optional: () => H0,
  overwrite: () => oE,
  parse: () => gBt,
  parseAsync: () => bBt,
  partialRecord: () => K1n,
  pipe: () => w5e,
  positive: () => p5e,
  prefault: () => eLt,
  preprocess: () => N5e,
  prettifyError: () => Xqe,
  promise: () => afn,
  property: () => A5e,
  readonly: () => aLt,
  record: () => A0,
  refine: () => fLt,
  regex: () => vH,
  regexes: () => y8,
  registry: () => V2e,
  safeDecode: () => wBt,
  safeDecodeAsync: () => TBt,
  safeEncode: () => SBt,
  safeEncodeAsync: () => xBt,
  safeParse: () => ABt,
  safeParseAsync: () => yBt,
  set: () => Z1n,
  setErrorMap: () => xas,
  size: () => tM,
  slugify: () => poe,
  startsWith: () => xH,
  strictObject: () => z1n,
  string: () => xt,
  stringFormat: () => O1n,
  stringbool: () => ffn,
  success: () => nfn,
  superRefine: () => pLt,
  symbol: () => G1n,
  templateLiteral: () => sfn,
  toJSONSchema: () => goe,
  toLowerCase: () => kH,
  toUpperCase: () => OH,
  transform: () => JWe,
  treeifyError: () => Jqe,
  trim: () => RH,
  tuple: () => QBt,
  uint32: () => U1n,
  uint64: () => Q1n,
  ulid: () => _1n,
  undefined: () => q1n,
  union: () => Tl,
  unknown: () => Kl,
  uppercase: () => SH,
  url: () => OWe,
  util: () => nn,
  uuid: () => m1n,
  uuidv4: () => d1n,
  uuidv6: () => f1n,
  uuidv7: () => p1n,
  void: () => H1n,
  xid: () => E1n,
  xor: () => Y1n,
});
var B5e = j(() => {
  V1();
  v5e();
  SWe();
  hBt();
  DBt();
  hfn();
  V1();
  yPt();
  V1();
  boe();
  Afn();
  DVe();
  _5e();
  _5e();
  yfn();
  Od(wVe());
});
var bLt = j(() => {
  B5e();
  B5e();
});
var ALt = j(() => {
  bLt();
  bLt();
});
var Doe,
  Efn,
  uM,
  ize,
  ug,
  vfn,
  Cfn,
  KYu,
  Las,
  Mas,
  _Lt,
  C6,
  L5e,
  Sfn,
  cg,
  sE,
  aE,
  lg,
  oze,
  wfn,
  M5e,
  xfn,
  Tfn,
  ELt,
  BH,
  ms,
  vLt,
  Dfn,
  cM,
  JYu,
  LH,
  Fas,
  sze,
  Uas,
  F5e,
  Toe,
  Ifn,
  $as,
  jas,
  Qas,
  Gas,
  qas,
  Has,
  Vas,
  Was,
  CLt,
  Rfn,
  kfn,
  aze,
  zas,
  Yas,
  uze,
  Kas,
  U5e,
  $5e,
  Jas,
  j5e,
  MH,
  Xas,
  Q5e,
  cze,
  lze,
  mze,
  XYu,
  dze,
  fze,
  pze,
  Ofn,
  Nfn,
  Pfn,
  SLt,
  Bfn,
  G5e,
  Ioe,
  Lfn,
  Zas,
  eus,
  wLt,
  tus,
  xLt,
  TLt,
  rus,
  nus,
  DLt,
  ILt,
  ius,
  ous,
  sus,
  aus,
  uus,
  cus,
  lus,
  mus,
  dus,
  q5e,
  fus,
  pus,
  RLt,
  kLt,
  OLt,
  hus,
  gus,
  bus,
  NLt,
  Aus,
  H5e,
  PLt,
  yus,
  _us,
  Mfn,
  Eus,
  BLt,
  Roe,
  ZYu,
  vus,
  Cus,
  LLt,
  Ffn,
  Ufn,
  Sus,
  wus,
  xus,
  Tus,
  Dus,
  Ius,
  Rus,
  kus,
  Ous,
  nze,
  Nus,
  Pus,
  MLt,
  FLt,
  Bus,
  Lus,
  Mus,
  Fus,
  Uus,
  $us,
  jus,
  Qus,
  Gus,
  qus,
  Hus,
  Vus,
  Wus,
  zus,
  Yus,
  Kus,
  ULt,
  Jus,
  Xus,
  $Lt,
  Zus,
  ecs,
  tcs,
  rcs,
  jLt,
  ncs,
  hze,
  ics,
  ocs,
  eKu,
  tKu,
  rKu,
  nKu,
  iKu,
  oKu,
  So,
  yLt,
  uk = j(() => {
    ALt();
    ((Doe = "2025-11-25"),
      (Efn = [Doe, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"]),
      (uM = "io.modelcontextprotocol/related-task"),
      (ize = "2.0"),
      (ug = rze((t) => t !== null && (typeof t == "object" || typeof t == "function"))),
      (vfn = Tl([xt(), Cu().int()])),
      (Cfn = xt()),
      (KYu = W1({ ttl: Tl([Cu(), woe()]).optional(), pollInterval: Cu().optional() })),
      (Las = Dn({ ttl: Cu().optional() })),
      (Mas = Dn({ taskId: xt() })),
      (_Lt = W1({ progressToken: vfn.optional(), [uM]: Mas.optional() })),
      (C6 = Dn({ _meta: _Lt.optional() })),
      (L5e = C6.extend({ task: Las.optional() })),
      (Sfn = (t) => L5e.safeParse(t).success),
      (cg = Dn({ method: xt(), params: C6.loose().optional() })),
      (sE = Dn({ _meta: _Lt.optional() })),
      (aE = Dn({ method: xt(), params: sE.loose().optional() })),
      (lg = W1({ _meta: _Lt.optional() })),
      (oze = Tl([xt(), Cu().int()])),
      (wfn = Dn({ jsonrpc: Pi(ize), id: oze, ...cg.shape }).strict()),
      (M5e = (t) => wfn.safeParse(t).success),
      (xfn = Dn({ jsonrpc: Pi(ize), ...aE.shape }).strict()),
      (Tfn = (t) => xfn.safeParse(t).success),
      (ELt = Dn({ jsonrpc: Pi(ize), id: oze, result: lg }).strict()),
      (BH = (t) => ELt.safeParse(t).success));
    (function (t) {
      ((t[(t.ConnectionClosed = -32e3)] = "ConnectionClosed"),
        (t[(t.RequestTimeout = -32001)] = "RequestTimeout"),
        (t[(t.ParseError = -32700)] = "ParseError"),
        (t[(t.InvalidRequest = -32600)] = "InvalidRequest"),
        (t[(t.MethodNotFound = -32601)] = "MethodNotFound"),
        (t[(t.InvalidParams = -32602)] = "InvalidParams"),
        (t[(t.InternalError = -32603)] = "InternalError"),
        (t[(t.UrlElicitationRequired = -32042)] = "UrlElicitationRequired"));
    })(ms || (ms = {}));
    ((vLt = Dn({
      jsonrpc: Pi(ize),
      id: oze.optional(),
      error: Dn({ code: Cu().int(), message: xt(), data: Kl().optional() }),
    }).strict()),
      (Dfn = (t) => vLt.safeParse(t).success),
      (cM = Tl([wfn, xfn, ELt, vLt])),
      (JYu = Tl([ELt, vLt])),
      (LH = lg.strict()),
      (Fas = sE.extend({ requestId: oze.optional(), reason: xt().optional() })),
      (sze = aE.extend({ method: Pi("notifications/cancelled"), params: Fas })),
      (Uas = Dn({
        src: xt(),
        mimeType: xt().optional(),
        sizes: yn(xt()).optional(),
        theme: ag(["light", "dark"]).optional(),
      })),
      (F5e = Dn({ icons: yn(Uas).optional() })),
      (Toe = Dn({ name: xt(), title: xt().optional() })),
      (Ifn = Toe.extend({
        ...Toe.shape,
        ...F5e.shape,
        version: xt(),
        websiteUrl: xt().optional(),
        description: xt().optional(),
      })),
      ($as = xoe(Dn({ applyDefaults: rl().optional() }), A0(xt(), Kl()))),
      (jas = N5e(
        (t) => (t && typeof t == "object" && !Array.isArray(t) && Object.keys(t).length === 0 ? { form: {} } : t),
        xoe(Dn({ form: $as.optional(), url: ug.optional() }), A0(xt(), Kl()).optional()),
      )),
      (Qas = W1({
        list: ug.optional(),
        cancel: ug.optional(),
        requests: W1({
          sampling: W1({ createMessage: ug.optional() }).optional(),
          elicitation: W1({ create: ug.optional() }).optional(),
        }).optional(),
      })),
      (Gas = W1({
        list: ug.optional(),
        cancel: ug.optional(),
        requests: W1({ tools: W1({ call: ug.optional() }).optional() }).optional(),
      })),
      (qas = Dn({
        experimental: A0(xt(), ug).optional(),
        sampling: Dn({ context: ug.optional(), tools: ug.optional() }).optional(),
        elicitation: jas.optional(),
        roots: Dn({ listChanged: rl().optional() }).optional(),
        tasks: Qas.optional(),
      })),
      (Has = C6.extend({ protocolVersion: xt(), capabilities: qas, clientInfo: Ifn })),
      (Vas = cg.extend({ method: Pi("initialize"), params: Has })),
      (Was = Dn({
        experimental: A0(xt(), ug).optional(),
        logging: ug.optional(),
        completions: ug.optional(),
        prompts: Dn({ listChanged: rl().optional() }).optional(),
        resources: Dn({ subscribe: rl().optional(), listChanged: rl().optional() }).optional(),
        tools: Dn({ listChanged: rl().optional() }).optional(),
        tasks: Gas.optional(),
      })),
      (CLt = lg.extend({ protocolVersion: xt(), capabilities: Was, serverInfo: Ifn, instructions: xt().optional() })),
      (Rfn = aE.extend({ method: Pi("notifications/initialized"), params: sE.optional() })),
      (kfn = (t) => Rfn.safeParse(t).success),
      (aze = cg.extend({ method: Pi("ping"), params: C6.optional() })),
      (zas = Dn({ progress: Cu(), total: H0(Cu()), message: H0(xt()) })),
      (Yas = Dn({ ...sE.shape, ...zas.shape, progressToken: vfn })),
      (uze = aE.extend({ method: Pi("notifications/progress"), params: Yas })),
      (Kas = C6.extend({ cursor: Cfn.optional() })),
      (U5e = cg.extend({ params: Kas.optional() })),
      ($5e = lg.extend({ nextCursor: Cfn.optional() })),
      (Jas = ag(["working", "input_required", "completed", "failed", "cancelled"])),
      (j5e = Dn({
        taskId: xt(),
        status: Jas,
        ttl: Tl([Cu(), woe()]),
        createdAt: xt(),
        lastUpdatedAt: xt(),
        pollInterval: H0(Cu()),
        statusMessage: H0(xt()),
      })),
      (MH = lg.extend({ task: j5e })),
      (Xas = sE.merge(j5e)),
      (Q5e = aE.extend({ method: Pi("notifications/tasks/status"), params: Xas })),
      (cze = cg.extend({ method: Pi("tasks/get"), params: C6.extend({ taskId: xt() }) })),
      (lze = lg.merge(j5e)),
      (mze = cg.extend({ method: Pi("tasks/result"), params: C6.extend({ taskId: xt() }) })),
      (XYu = lg.loose()),
      (dze = U5e.extend({ method: Pi("tasks/list") })),
      (fze = $5e.extend({ tasks: yn(j5e) })),
      (pze = cg.extend({ method: Pi("tasks/cancel"), params: C6.extend({ taskId: xt() }) })),
      (Ofn = lg.merge(j5e)),
      (Nfn = Dn({ uri: xt(), mimeType: H0(xt()), _meta: A0(xt(), Kl()).optional() })),
      (Pfn = Nfn.extend({ text: xt() })),
      (SLt = xt().refine(
        (t) => {
          try {
            return (atob(t), !0);
          } catch {
            return !1;
          }
        },
        { message: "Invalid Base64 string" },
      )),
      (Bfn = Nfn.extend({ blob: SLt })),
      (G5e = ag(["user", "assistant"])),
      (Ioe = Dn({
        audience: yn(G5e).optional(),
        priority: Cu().min(0).max(1).optional(),
        lastModified: aM.datetime({ offset: !0 }).optional(),
      })),
      (Lfn = Dn({
        ...Toe.shape,
        ...F5e.shape,
        uri: xt(),
        description: H0(xt()),
        mimeType: H0(xt()),
        annotations: Ioe.optional(),
        _meta: H0(W1({})),
      })),
      (Zas = Dn({
        ...Toe.shape,
        ...F5e.shape,
        uriTemplate: xt(),
        description: H0(xt()),
        mimeType: H0(xt()),
        annotations: Ioe.optional(),
        _meta: H0(W1({})),
      })),
      (eus = U5e.extend({ method: Pi("resources/list") })),
      (wLt = $5e.extend({ resources: yn(Lfn) })),
      (tus = U5e.extend({ method: Pi("resources/templates/list") })),
      (xLt = $5e.extend({ resourceTemplates: yn(Zas) })),
      (TLt = C6.extend({ uri: xt() })),
      (rus = TLt),
      (nus = cg.extend({ method: Pi("resources/read"), params: rus })),
      (DLt = lg.extend({ contents: yn(Tl([Pfn, Bfn])) })),
      (ILt = aE.extend({ method: Pi("notifications/resources/list_changed"), params: sE.optional() })),
      (ius = TLt),
      (ous = cg.extend({ method: Pi("resources/subscribe"), params: ius })),
      (sus = TLt),
      (aus = cg.extend({ method: Pi("resources/unsubscribe"), params: sus })),
      (uus = sE.extend({ uri: xt() })),
      (cus = aE.extend({ method: Pi("notifications/resources/updated"), params: uus })),
      (lus = Dn({ name: xt(), description: H0(xt()), required: H0(rl()) })),
      (mus = Dn({ ...Toe.shape, ...F5e.shape, description: H0(xt()), arguments: H0(yn(lus)), _meta: H0(W1({})) })),
      (dus = U5e.extend({ method: Pi("prompts/list") })),
      (q5e = $5e.extend({ prompts: yn(mus) })),
      (fus = C6.extend({ name: xt(), arguments: A0(xt(), xt()).optional() })),
      (pus = cg.extend({ method: Pi("prompts/get"), params: fus })),
      (RLt = Dn({ type: Pi("text"), text: xt(), annotations: Ioe.optional(), _meta: A0(xt(), Kl()).optional() })),
      (kLt = Dn({
        type: Pi("image"),
        data: SLt,
        mimeType: xt(),
        annotations: Ioe.optional(),
        _meta: A0(xt(), Kl()).optional(),
      })),
      (OLt = Dn({
        type: Pi("audio"),
        data: SLt,
        mimeType: xt(),
        annotations: Ioe.optional(),
        _meta: A0(xt(), Kl()).optional(),
      })),
      (hus = Dn({
        type: Pi("tool_use"),
        name: xt(),
        id: xt(),
        input: A0(xt(), Kl()),
        _meta: A0(xt(), Kl()).optional(),
      })),
      (gus = Dn({
        type: Pi("resource"),
        resource: Tl([Pfn, Bfn]),
        annotations: Ioe.optional(),
        _meta: A0(xt(), Kl()).optional(),
      })),
      (bus = Lfn.extend({ type: Pi("resource_link") })),
      (NLt = Tl([RLt, kLt, OLt, bus, gus])),
      (Aus = Dn({ role: G5e, content: NLt })),
      (H5e = lg.extend({ description: xt().optional(), messages: yn(Aus) })),
      (PLt = aE.extend({ method: Pi("notifications/prompts/list_changed"), params: sE.optional() })),
      (yus = Dn({
        title: xt().optional(),
        readOnlyHint: rl().optional(),
        destructiveHint: rl().optional(),
        idempotentHint: rl().optional(),
        openWorldHint: rl().optional(),
      })),
      (_us = Dn({ taskSupport: ag(["required", "optional", "forbidden"]).optional() })),
      (Mfn = Dn({
        ...Toe.shape,
        ...F5e.shape,
        description: xt().optional(),
        inputSchema: Dn({
          type: Pi("object"),
          properties: A0(xt(), ug).optional(),
          required: yn(xt()).optional(),
        }).catchall(Kl()),
        outputSchema: Dn({ type: Pi("object"), properties: A0(xt(), ug).optional(), required: yn(xt()).optional() })
          .catchall(Kl())
          .optional(),
        annotations: yus.optional(),
        execution: _us.optional(),
        _meta: A0(xt(), Kl()).optional(),
      })),
      (Eus = U5e.extend({ method: Pi("tools/list") })),
      (BLt = $5e.extend({ tools: yn(Mfn) })),
      (Roe = lg.extend({
        content: yn(NLt).default([]),
        structuredContent: A0(xt(), Kl()).optional(),
        isError: rl().optional(),
      })),
      (ZYu = Roe.or(lg.extend({ toolResult: Kl() }))),
      (vus = L5e.extend({ name: xt(), arguments: A0(xt(), Kl()).optional() })),
      (Cus = cg.extend({ method: Pi("tools/call"), params: vus })),
      (LLt = aE.extend({ method: Pi("notifications/tools/list_changed"), params: sE.optional() })),
      (Ffn = Dn({ autoRefresh: rl().default(!0), debounceMs: Cu().int().nonnegative().default(300) })),
      (Ufn = ag(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"])),
      (Sus = C6.extend({ level: Ufn })),
      (wus = cg.extend({ method: Pi("logging/setLevel"), params: Sus })),
      (xus = sE.extend({ level: Ufn, logger: xt().optional(), data: Kl() })),
      (Tus = aE.extend({ method: Pi("notifications/message"), params: xus })),
      (Dus = Dn({ name: xt().optional() })),
      (Ius = Dn({
        hints: yn(Dus).optional(),
        costPriority: Cu().min(0).max(1).optional(),
        speedPriority: Cu().min(0).max(1).optional(),
        intelligencePriority: Cu().min(0).max(1).optional(),
      })),
      (Rus = Dn({ mode: ag(["auto", "required", "none"]).optional() })),
      (kus = Dn({
        type: Pi("tool_result"),
        toolUseId: xt().describe("The unique identifier for the corresponding tool call."),
        content: yn(NLt).default([]),
        structuredContent: Dn({}).loose().optional(),
        isError: rl().optional(),
        _meta: A0(xt(), Kl()).optional(),
      })),
      (Ous = R5e("type", [RLt, kLt, OLt])),
      (nze = R5e("type", [RLt, kLt, OLt, hus, kus])),
      (Nus = Dn({ role: G5e, content: Tl([nze, yn(nze)]), _meta: A0(xt(), Kl()).optional() })),
      (Pus = L5e.extend({
        messages: yn(Nus),
        modelPreferences: Ius.optional(),
        systemPrompt: xt().optional(),
        includeContext: ag(["none", "thisServer", "allServers"]).optional(),
        temperature: Cu().optional(),
        maxTokens: Cu().int(),
        stopSequences: yn(xt()).optional(),
        metadata: ug.optional(),
        tools: yn(Mfn).optional(),
        toolChoice: Rus.optional(),
      })),
      (MLt = cg.extend({ method: Pi("sampling/createMessage"), params: Pus })),
      (FLt = lg.extend({
        model: xt(),
        stopReason: H0(ag(["endTurn", "stopSequence", "maxTokens"]).or(xt())),
        role: G5e,
        content: Ous,
      })),
      (Bus = lg.extend({
        model: xt(),
        stopReason: H0(ag(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(xt())),
        role: G5e,
        content: Tl([nze, yn(nze)]),
      })),
      (Lus = Dn({
        type: Pi("boolean"),
        title: xt().optional(),
        description: xt().optional(),
        default: rl().optional(),
      })),
      (Mus = Dn({
        type: Pi("string"),
        title: xt().optional(),
        description: xt().optional(),
        minLength: Cu().optional(),
        maxLength: Cu().optional(),
        format: ag(["email", "uri", "date", "date-time"]).optional(),
        default: xt().optional(),
      })),
      (Fus = Dn({
        type: ag(["number", "integer"]),
        title: xt().optional(),
        description: xt().optional(),
        minimum: Cu().optional(),
        maximum: Cu().optional(),
        default: Cu().optional(),
      })),
      (Uus = Dn({
        type: Pi("string"),
        title: xt().optional(),
        description: xt().optional(),
        enum: yn(xt()),
        default: xt().optional(),
      })),
      ($us = Dn({
        type: Pi("string"),
        title: xt().optional(),
        description: xt().optional(),
        oneOf: yn(Dn({ const: xt(), title: xt() })),
        default: xt().optional(),
      })),
      (jus = Dn({
        type: Pi("string"),
        title: xt().optional(),
        description: xt().optional(),
        enum: yn(xt()),
        enumNames: yn(xt()).optional(),
        default: xt().optional(),
      })),
      (Qus = Tl([Uus, $us])),
      (Gus = Dn({
        type: Pi("array"),
        title: xt().optional(),
        description: xt().optional(),
        minItems: Cu().optional(),
        maxItems: Cu().optional(),
        items: Dn({ type: Pi("string"), enum: yn(xt()) }),
        default: yn(xt()).optional(),
      })),
      (qus = Dn({
        type: Pi("array"),
        title: xt().optional(),
        description: xt().optional(),
        minItems: Cu().optional(),
        maxItems: Cu().optional(),
        items: Dn({ anyOf: yn(Dn({ const: xt(), title: xt() })) }),
        default: yn(xt()).optional(),
      })),
      (Hus = Tl([Gus, qus])),
      (Vus = Tl([jus, Qus, Hus])),
      (Wus = Tl([Vus, Lus, Mus, Fus])),
      (zus = L5e.extend({
        mode: Pi("form").optional(),
        message: xt(),
        requestedSchema: Dn({ type: Pi("object"), properties: A0(xt(), Wus), required: yn(xt()).optional() }),
      })),
      (Yus = L5e.extend({ mode: Pi("url"), message: xt(), elicitationId: xt(), url: xt().url() })),
      (Kus = Tl([zus, Yus])),
      (ULt = cg.extend({ method: Pi("elicitation/create"), params: Kus })),
      (Jus = sE.extend({ elicitationId: xt() })),
      (Xus = aE.extend({ method: Pi("notifications/elicitation/complete"), params: Jus })),
      ($Lt = lg.extend({
        action: ag(["accept", "decline", "cancel"]),
        content: N5e((t) => (t === null ? void 0 : t), A0(xt(), Tl([xt(), Cu(), rl(), yn(xt())])).optional()),
      })),
      (Zus = Dn({ type: Pi("ref/resource"), uri: xt() })),
      (ecs = Dn({ type: Pi("ref/prompt"), name: xt() })),
      (tcs = C6.extend({
        ref: Tl([ecs, Zus]),
        argument: Dn({ name: xt(), value: xt() }),
        context: Dn({ arguments: A0(xt(), xt()).optional() }).optional(),
      })),
      (rcs = cg.extend({ method: Pi("completion/complete"), params: tcs })),
      (jLt = lg.extend({ completion: W1({ values: yn(xt()).max(100), total: H0(Cu().int()), hasMore: H0(rl()) }) })),
      (ncs = Dn({ uri: xt().startsWith("file://"), name: xt().optional(), _meta: A0(xt(), Kl()).optional() })),
      (hze = cg.extend({ method: Pi("roots/list"), params: C6.optional() })),
      (ics = lg.extend({ roots: yn(ncs) })),
      (ocs = aE.extend({ method: Pi("notifications/roots/list_changed"), params: sE.optional() })),
      (eKu = Tl([aze, Vas, rcs, wus, pus, dus, eus, tus, nus, ous, aus, Cus, Eus, cze, mze, dze, pze])),
      (tKu = Tl([sze, uze, Rfn, ocs, Q5e])),
      (rKu = Tl([LH, FLt, Bus, $Lt, ics, lze, fze, MH])),
      (nKu = Tl([aze, MLt, ULt, hze, cze, mze, dze, pze])),
      (iKu = Tl([sze, uze, Tus, cus, ILt, LLt, PLt, Q5e, Xus])),
      (oKu = Tl([LH, CLt, jLt, H5e, q5e, wLt, xLt, DLt, Roe, BLt, lze, fze, MH])),
      (So = class t extends Error {
        constructor(e, r, n) {
          (super(`MCP error ${e}: ${r}`), (this.code = e), (this.data = n), (this.name = "McpError"));
        }
        static fromError(e, r, n) {
          if (e === ms.UrlElicitationRequired && n) {
            let o = n;
            if (o.elicitations) return new yLt(o.elicitations, r);
          }
          return new t(e, r, n);
        }
      }),
      (yLt = class extends So {
        constructor(e, r = `URL elicitation${e.length > 1 ? "s" : ""} required`) {
          super(ms.UrlElicitationRequired, r, { elicitations: e });
        }
        get elicitations() {
          return this.data?.elicitations ?? [];
        }
      }));
  });
function lM(t) {
  return t === "completed" || t === "failed" || t === "cancelled";
}
var $fn = j(() => {});
var scs,
  gze = j(() => {
    scs = Symbol("Let zodToJsonSchema decide on which parser to use");
  });
var QLt = j(() => {
  gze();
});
var mM = j(() => {});
var bze = j(() => {});
var uE = j(() => {
  bze();
});
var GLt = j(() => {
  D2e();
  mM();
  $f();
});
var qLt = j(() => {
  mM();
});
var HLt = j(() => {});
var Aze = j(() => {
  $f();
});
var VLt = j(() => {
  $f();
});
var WLt = j(() => {
  mM();
});
var zLt = j(() => {
  $f();
});
var YLt = j(() => {
  $f();
  uE();
});
var KLt = j(() => {});
var JLt = j(() => {
  $f();
});
var XLt = j(() => {});
var UKu,
  yze = j(() => {
    mM();
    UKu = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
  });
var _ze = j(() => {
  D2e();
  $f();
  yze();
  Aze();
  uE();
});
var ZLt = j(() => {
  $f();
  _ze();
  uE();
});
var eMt = j(() => {});
var tMt = j(() => {
  uE();
});
var rMt = j(() => {});
var Eze = j(() => {
  $f();
});
var nMt = j(() => {
  $f();
  Eze();
});
var iMt = j(() => {
  mM();
});
var oMt = j(() => {
  $f();
});
var sMt = j(() => {
  $f();
  uE();
});
var aMt = j(() => {
  $f();
});
var uMt = j(() => {
  $f();
});
var cMt = j(() => {
  mM();
  $f();
});
var lMt = j(() => {
  $f();
});
var mMt = j(() => {
  uE();
});
var dMt = j(() => {
  uE();
});
var fMt = j(() => {
  $f();
});
var pMt = j(() => {
  D2e();
  uE();
  GLt();
  qLt();
  HLt();
  Aze();
  VLt();
  WLt();
  zLt();
  YLt();
  KLt();
  JLt();
  XLt();
  ZLt();
  eMt();
  tMt();
  rMt();
  nMt();
  iMt();
  oMt();
  sMt();
  aMt();
  uMt();
  _ze();
  cMt();
  yze();
  lMt();
  mMt();
  Eze();
  dMt();
  fMt();
});
var $f = j(() => {
  gze();
  pMt();
  bze();
  uE();
});
var jfn = j(() => {});
var hMt = j(() => {
  $f();
  QLt();
  uE();
});
var Qfn = j(() => {
  gze();
  QLt();
  mM();
  bze();
  $f();
  jfn();
  uE();
  GLt();
  qLt();
  HLt();
  Aze();
  VLt();
  WLt();
  zLt();
  YLt();
  KLt();
  JLt();
  XLt();
  ZLt();
  eMt();
  tMt();
  rMt();
  nMt();
  iMt();
  oMt();
  sMt();
  aMt();
  uMt();
  fMt();
  _ze();
  cMt();
  yze();
  lMt();
  mMt();
  Eze();
  dMt();
  pMt();
  hMt();
  hMt();
});
function gMt(t) {
  let r = EWe(t)?.method;
  if (!r) throw new Error("Schema is missing a method literal");
  let n = a1n(r);
  if (typeof n != "string") throw new Error("Schema method literal must be a string");
  return n;
}
function bMt(t, e) {
  let r = T4(t, e);
  if (!r.success) throw r.error;
  return r.data;
}
var Gfn = j(() => {
  lBt();
  vWe();
  Qfn();
});
function qfn(t) {
  return t !== null && typeof t == "object" && !Array.isArray(t);
}
function Hfn(t, e) {
  let r = { ...t };
  for (let n in e) {
    let o = n,
      s = e[o];
    if (s === void 0) continue;
    let a = r[o];
    qfn(a) && qfn(s) ? (r[o] = { ...a, ...s }) : (r[o] = s);
  }
  return r;
}
var dcs,
  vze,
  Vfn = j(() => {
    vWe();
    uk();
    $fn();
    Gfn();
    ((dcs = 6e4),
      (vze = class {
        constructor(e) {
          ((this._options = e),
            (this._requestMessageId = 0),
            (this._requestHandlers = new Map()),
            (this._requestHandlerAbortControllers = new Map()),
            (this._notificationHandlers = new Map()),
            (this._responseHandlers = new Map()),
            (this._progressHandlers = new Map()),
            (this._timeoutInfo = new Map()),
            (this._pendingDebouncedNotifications = new Set()),
            (this._taskProgressTokens = new Map()),
            (this._requestResolvers = new Map()),
            this.setNotificationHandler(sze, (r) => {
              this._oncancel(r);
            }),
            this.setNotificationHandler(uze, (r) => {
              this._onprogress(r);
            }),
            this.setRequestHandler(aze, (r) => ({})),
            (this._taskStore = e?.taskStore),
            (this._taskMessageQueue = e?.taskMessageQueue),
            this._taskStore &&
              (this.setRequestHandler(cze, async (r, n) => {
                let o = await this._taskStore.getTask(r.params.taskId, n.sessionId);
                if (!o) throw new So(ms.InvalidParams, "Failed to retrieve task: Task not found");
                return { ...o };
              }),
              this.setRequestHandler(mze, async (r, n) => {
                let o = async () => {
                  let s = r.params.taskId;
                  if (this._taskMessageQueue) {
                    let u;
                    for (; (u = await this._taskMessageQueue.dequeue(s, n.sessionId)); ) {
                      if (u.type === "response" || u.type === "error") {
                        let c = u.message,
                          m = c.id,
                          d = this._requestResolvers.get(m);
                        if (d)
                          if ((this._requestResolvers.delete(m), u.type === "response")) d(c);
                          else {
                            let f = c,
                              p = new So(f.error.code, f.error.message, f.error.data);
                            d(p);
                          }
                        else {
                          let f = u.type === "response" ? "Response" : "Error";
                          this._onerror(new Error(`${f} handler missing for request ${m}`));
                        }
                        continue;
                      }
                      await this._transport?.send(u.message, { relatedRequestId: n.requestId });
                    }
                  }
                  let a = await this._taskStore.getTask(s, n.sessionId);
                  if (!a) throw new So(ms.InvalidParams, `Task not found: ${s}`);
                  if (!lM(a.status)) return (await this._waitForTaskUpdate(s, n.signal), await o());
                  if (lM(a.status)) {
                    let u = await this._taskStore.getTaskResult(s, n.sessionId);
                    return (this._clearTaskQueue(s), { ...u, _meta: { ...u._meta, [uM]: { taskId: s } } });
                  }
                  return await o();
                };
                return await o();
              }),
              this.setRequestHandler(dze, async (r, n) => {
                try {
                  let { tasks: o, nextCursor: s } = await this._taskStore.listTasks(r.params?.cursor, n.sessionId);
                  return { tasks: o, nextCursor: s, _meta: {} };
                } catch (o) {
                  throw new So(ms.InvalidParams, `Failed to list tasks: ${o instanceof Error ? o.message : String(o)}`);
                }
              }),
              this.setRequestHandler(pze, async (r, n) => {
                try {
                  let o = await this._taskStore.getTask(r.params.taskId, n.sessionId);
                  if (!o) throw new So(ms.InvalidParams, `Task not found: ${r.params.taskId}`);
                  if (lM(o.status))
                    throw new So(ms.InvalidParams, `Cannot cancel task in terminal status: ${o.status}`);
                  (await this._taskStore.updateTaskStatus(
                    r.params.taskId,
                    "cancelled",
                    "Client cancelled task execution.",
                    n.sessionId,
                  ),
                    this._clearTaskQueue(r.params.taskId));
                  let s = await this._taskStore.getTask(r.params.taskId, n.sessionId);
                  if (!s) throw new So(ms.InvalidParams, `Task not found after cancellation: ${r.params.taskId}`);
                  return { _meta: {}, ...s };
                } catch (o) {
                  throw o instanceof So
                    ? o
                    : new So(ms.InvalidRequest, `Failed to cancel task: ${o instanceof Error ? o.message : String(o)}`);
                }
              })));
        }
        async _oncancel(e) {
          if (!e.params.requestId) return;
          this._requestHandlerAbortControllers.get(e.params.requestId)?.abort(e.params.reason);
        }
        _setupTimeout(e, r, n, o, s = !1) {
          this._timeoutInfo.set(e, {
            timeoutId: setTimeout(o, r),
            startTime: Date.now(),
            timeout: r,
            maxTotalTimeout: n,
            resetTimeoutOnProgress: s,
            onTimeout: o,
          });
        }
        _resetTimeout(e) {
          let r = this._timeoutInfo.get(e);
          if (!r) return !1;
          let n = Date.now() - r.startTime;
          if (r.maxTotalTimeout && n >= r.maxTotalTimeout)
            throw (
              this._timeoutInfo.delete(e),
              So.fromError(ms.RequestTimeout, "Maximum total timeout exceeded", {
                maxTotalTimeout: r.maxTotalTimeout,
                totalElapsed: n,
              })
            );
          return (clearTimeout(r.timeoutId), (r.timeoutId = setTimeout(r.onTimeout, r.timeout)), !0);
        }
        _cleanupTimeout(e) {
          let r = this._timeoutInfo.get(e);
          r && (clearTimeout(r.timeoutId), this._timeoutInfo.delete(e));
        }
        async connect(e) {
          this._transport = e;
          let r = this.transport?.onclose;
          this._transport.onclose = () => {
            (r?.(), this._onclose());
          };
          let n = this.transport?.onerror;
          this._transport.onerror = (s) => {
            (n?.(s), this._onerror(s));
          };
          let o = this._transport?.onmessage;
          ((this._transport.onmessage = (s, a) => {
            (o?.(s, a),
              BH(s) || Dfn(s)
                ? this._onresponse(s)
                : M5e(s)
                  ? this._onrequest(s, a)
                  : Tfn(s)
                    ? this._onnotification(s)
                    : this._onerror(new Error(`Unknown message type: ${JSON.stringify(s)}`)));
          }),
            await this._transport.start());
        }
        _onclose() {
          let e = this._responseHandlers;
          ((this._responseHandlers = new Map()),
            this._progressHandlers.clear(),
            this._taskProgressTokens.clear(),
            this._pendingDebouncedNotifications.clear());
          let r = So.fromError(ms.ConnectionClosed, "Connection closed");
          ((this._transport = void 0), this.onclose?.());
          for (let n of e.values()) n(r);
        }
        _onerror(e) {
          this.onerror?.(e);
        }
        _onnotification(e) {
          let r = this._notificationHandlers.get(e.method) ?? this.fallbackNotificationHandler;
          r !== void 0 &&
            Promise.resolve()
              .then(() => r(e))
              .catch((n) => this._onerror(new Error(`Uncaught error in notification handler: ${n}`)));
        }
        _onrequest(e, r) {
          let n = this._requestHandlers.get(e.method) ?? this.fallbackRequestHandler,
            o = this._transport,
            s = e.params?._meta?.[uM]?.taskId;
          if (n === void 0) {
            let d = { jsonrpc: "2.0", id: e.id, error: { code: ms.MethodNotFound, message: "Method not found" } };
            s && this._taskMessageQueue
              ? this._enqueueTaskMessage(s, { type: "error", message: d, timestamp: Date.now() }, o?.sessionId).catch(
                  (f) => this._onerror(new Error(`Failed to enqueue error response: ${f}`)),
                )
              : o?.send(d).catch((f) => this._onerror(new Error(`Failed to send an error response: ${f}`)));
            return;
          }
          let a = new AbortController();
          this._requestHandlerAbortControllers.set(e.id, a);
          let u = Sfn(e.params) ? e.params.task : void 0,
            c = this._taskStore ? this.requestTaskStore(e, o?.sessionId) : void 0,
            m = {
              signal: a.signal,
              sessionId: o?.sessionId,
              _meta: e.params?._meta,
              sendNotification: async (d) => {
                let f = { relatedRequestId: e.id };
                (s && (f.relatedTask = { taskId: s }), await this.notification(d, f));
              },
              sendRequest: async (d, f, p) => {
                let h = { ...p, relatedRequestId: e.id };
                s && !h.relatedTask && (h.relatedTask = { taskId: s });
                let g = h.relatedTask?.taskId ?? s;
                return (g && c && (await c.updateTaskStatus(g, "input_required")), await this.request(d, f, h));
              },
              authInfo: r?.authInfo,
              requestId: e.id,
              requestInfo: r?.requestInfo,
              taskId: s,
              taskStore: c,
              taskRequestedTtl: u?.ttl,
              closeSSEStream: r?.closeSSEStream,
              closeStandaloneSSEStream: r?.closeStandaloneSSEStream,
            };
          Promise.resolve()
            .then(() => {
              u && this.assertTaskHandlerCapability(e.method);
            })
            .then(() => n(e, m))
            .then(
              async (d) => {
                if (a.signal.aborted) return;
                let f = { result: d, jsonrpc: "2.0", id: e.id };
                s && this._taskMessageQueue
                  ? await this._enqueueTaskMessage(
                      s,
                      { type: "response", message: f, timestamp: Date.now() },
                      o?.sessionId,
                    )
                  : await o?.send(f);
              },
              async (d) => {
                if (a.signal.aborted) return;
                let f = {
                  jsonrpc: "2.0",
                  id: e.id,
                  error: {
                    code: Number.isSafeInteger(d.code) ? d.code : ms.InternalError,
                    message: d.message ?? "Internal error",
                    ...(d.data !== void 0 && { data: d.data }),
                  },
                };
                s && this._taskMessageQueue
                  ? await this._enqueueTaskMessage(
                      s,
                      { type: "error", message: f, timestamp: Date.now() },
                      o?.sessionId,
                    )
                  : await o?.send(f);
              },
            )
            .catch((d) => this._onerror(new Error(`Failed to send response: ${d}`)))
            .finally(() => {
              this._requestHandlerAbortControllers.delete(e.id);
            });
        }
        _onprogress(e) {
          let { progressToken: r, ...n } = e.params,
            o = Number(r),
            s = this._progressHandlers.get(o);
          if (!s) {
            this._onerror(new Error(`Received a progress notification for an unknown token: ${JSON.stringify(e)}`));
            return;
          }
          let a = this._responseHandlers.get(o),
            u = this._timeoutInfo.get(o);
          if (u && a && u.resetTimeoutOnProgress)
            try {
              this._resetTimeout(o);
            } catch (c) {
              (this._responseHandlers.delete(o), this._progressHandlers.delete(o), this._cleanupTimeout(o), a(c));
              return;
            }
          s(n);
        }
        _onresponse(e) {
          let r = Number(e.id),
            n = this._requestResolvers.get(r);
          if (n) {
            if ((this._requestResolvers.delete(r), BH(e))) n(e);
            else {
              let a = new So(e.error.code, e.error.message, e.error.data);
              n(a);
            }
            return;
          }
          let o = this._responseHandlers.get(r);
          if (o === void 0) {
            this._onerror(new Error(`Received a response for an unknown message ID: ${JSON.stringify(e)}`));
            return;
          }
          (this._responseHandlers.delete(r), this._cleanupTimeout(r));
          let s = !1;
          if (BH(e) && e.result && typeof e.result == "object") {
            let a = e.result;
            if (a.task && typeof a.task == "object") {
              let u = a.task;
              typeof u.taskId == "string" && ((s = !0), this._taskProgressTokens.set(u.taskId, r));
            }
          }
          if ((s || this._progressHandlers.delete(r), BH(e))) o(e);
          else {
            let a = So.fromError(e.error.code, e.error.message, e.error.data);
            o(a);
          }
        }
        get transport() {
          return this._transport;
        }
        async close() {
          await this._transport?.close();
        }
        async *requestStream(e, r, n) {
          let { task: o } = n ?? {};
          if (!o) {
            try {
              yield { type: "result", result: await this.request(e, r, n) };
            } catch (a) {
              yield { type: "error", error: a instanceof So ? a : new So(ms.InternalError, String(a)) };
            }
            return;
          }
          let s;
          try {
            let a = await this.request(e, MH, n);
            if (a.task) ((s = a.task.taskId), yield { type: "taskCreated", task: a.task });
            else throw new So(ms.InternalError, "Task creation did not return a task");
            for (;;) {
              let u = await this.getTask({ taskId: s }, n);
              if ((yield { type: "taskStatus", task: u }, lM(u.status))) {
                u.status === "completed"
                  ? yield { type: "result", result: await this.getTaskResult({ taskId: s }, r, n) }
                  : u.status === "failed"
                    ? yield { type: "error", error: new So(ms.InternalError, `Task ${s} failed`) }
                    : u.status === "cancelled" &&
                      (yield { type: "error", error: new So(ms.InternalError, `Task ${s} was cancelled`) });
                return;
              }
              if (u.status === "input_required") {
                yield { type: "result", result: await this.getTaskResult({ taskId: s }, r, n) };
                return;
              }
              let c = u.pollInterval ?? this._options?.defaultTaskPollInterval ?? 1e3;
              (await new Promise((m) => setTimeout(m, c)), n?.signal?.throwIfAborted());
            }
          } catch (a) {
            yield { type: "error", error: a instanceof So ? a : new So(ms.InternalError, String(a)) };
          }
        }
        request(e, r, n) {
          let { relatedRequestId: o, resumptionToken: s, onresumptiontoken: a, task: u, relatedTask: c } = n ?? {};
          return new Promise((m, d) => {
            let f = (E) => {
              d(E);
            };
            if (!this._transport) {
              f(new Error("Not connected"));
              return;
            }
            if (this._options?.enforceStrictCapabilities === !0)
              try {
                (this.assertCapabilityForMethod(e.method), u && this.assertTaskCapability(e.method));
              } catch (E) {
                f(E);
                return;
              }
            n?.signal?.throwIfAborted();
            let p = this._requestMessageId++,
              h = { ...e, jsonrpc: "2.0", id: p };
            (n?.onprogress &&
              (this._progressHandlers.set(p, n.onprogress),
              (h.params = { ...e.params, _meta: { ...(e.params?._meta || {}), progressToken: p } })),
              u && (h.params = { ...h.params, task: u }),
              c && (h.params = { ...h.params, _meta: { ...(h.params?._meta || {}), [uM]: c } }));
            let g = (E) => {
              (this._responseHandlers.delete(p),
                this._progressHandlers.delete(p),
                this._cleanupTimeout(p),
                this._transport
                  ?.send(
                    { jsonrpc: "2.0", method: "notifications/cancelled", params: { requestId: p, reason: String(E) } },
                    { relatedRequestId: o, resumptionToken: s, onresumptiontoken: a },
                  )
                  .catch((C) => this._onerror(new Error(`Failed to send cancellation: ${C}`))));
              let v = E instanceof So ? E : new So(ms.RequestTimeout, String(E));
              d(v);
            };
            (this._responseHandlers.set(p, (E) => {
              if (!n?.signal?.aborted) {
                if (E instanceof Error) return d(E);
                try {
                  let v = T4(r, E.result);
                  v.success ? m(v.data) : d(v.error);
                } catch (v) {
                  d(v);
                }
              }
            }),
              n?.signal?.addEventListener("abort", () => {
                g(n?.signal?.reason);
              }));
            let b = n?.timeout ?? dcs,
              A = () => g(So.fromError(ms.RequestTimeout, "Request timed out", { timeout: b }));
            this._setupTimeout(p, b, n?.maxTotalTimeout, A, n?.resetTimeoutOnProgress ?? !1);
            let y = c?.taskId;
            if (y) {
              let E = (v) => {
                let C = this._responseHandlers.get(p);
                C ? C(v) : this._onerror(new Error(`Response handler missing for side-channeled request ${p}`));
              };
              (this._requestResolvers.set(p, E),
                this._enqueueTaskMessage(y, { type: "request", message: h, timestamp: Date.now() }).catch((v) => {
                  (this._cleanupTimeout(p), d(v));
                }));
            } else
              this._transport.send(h, { relatedRequestId: o, resumptionToken: s, onresumptiontoken: a }).catch((E) => {
                (this._cleanupTimeout(p), d(E));
              });
          });
        }
        async getTask(e, r) {
          return this.request({ method: "tasks/get", params: e }, lze, r);
        }
        async getTaskResult(e, r, n) {
          return this.request({ method: "tasks/result", params: e }, r, n);
        }
        async listTasks(e, r) {
          return this.request({ method: "tasks/list", params: e }, fze, r);
        }
        async cancelTask(e, r) {
          return this.request({ method: "tasks/cancel", params: e }, Ofn, r);
        }
        async notification(e, r) {
          if (!this._transport) throw new Error("Not connected");
          this.assertNotificationCapability(e.method);
          let n = r?.relatedTask?.taskId;
          if (n) {
            let u = {
              ...e,
              jsonrpc: "2.0",
              params: { ...e.params, _meta: { ...(e.params?._meta || {}), [uM]: r.relatedTask } },
            };
            await this._enqueueTaskMessage(n, { type: "notification", message: u, timestamp: Date.now() });
            return;
          }
          if (
            (this._options?.debouncedNotificationMethods ?? []).includes(e.method) &&
            !e.params &&
            !r?.relatedRequestId &&
            !r?.relatedTask
          ) {
            if (this._pendingDebouncedNotifications.has(e.method)) return;
            (this._pendingDebouncedNotifications.add(e.method),
              Promise.resolve().then(() => {
                if ((this._pendingDebouncedNotifications.delete(e.method), !this._transport)) return;
                let u = { ...e, jsonrpc: "2.0" };
                (r?.relatedTask &&
                  (u = { ...u, params: { ...u.params, _meta: { ...(u.params?._meta || {}), [uM]: r.relatedTask } } }),
                  this._transport?.send(u, r).catch((c) => this._onerror(c)));
              }));
            return;
          }
          let a = { ...e, jsonrpc: "2.0" };
          (r?.relatedTask &&
            (a = { ...a, params: { ...a.params, _meta: { ...(a.params?._meta || {}), [uM]: r.relatedTask } } }),
            await this._transport.send(a, r));
        }
        setRequestHandler(e, r) {
          let n = gMt(e);
          (this.assertRequestHandlerCapability(n),
            this._requestHandlers.set(n, (o, s) => {
              let a = bMt(e, o);
              return Promise.resolve(r(a, s));
            }));
        }
        removeRequestHandler(e) {
          this._requestHandlers.delete(e);
        }
        assertCanSetRequestHandler(e) {
          if (this._requestHandlers.has(e))
            throw new Error(`A request handler for ${e} already exists, which would be overridden`);
        }
        setNotificationHandler(e, r) {
          let n = gMt(e);
          this._notificationHandlers.set(n, (o) => {
            let s = bMt(e, o);
            return Promise.resolve(r(s));
          });
        }
        removeNotificationHandler(e) {
          this._notificationHandlers.delete(e);
        }
        _cleanupTaskProgressHandler(e) {
          let r = this._taskProgressTokens.get(e);
          r !== void 0 && (this._progressHandlers.delete(r), this._taskProgressTokens.delete(e));
        }
        async _enqueueTaskMessage(e, r, n) {
          if (!this._taskStore || !this._taskMessageQueue)
            throw new Error("Cannot enqueue task message: taskStore and taskMessageQueue are not configured");
          let o = this._options?.maxTaskQueueSize;
          await this._taskMessageQueue.enqueue(e, r, n, o);
        }
        async _clearTaskQueue(e, r) {
          if (this._taskMessageQueue) {
            let n = await this._taskMessageQueue.dequeueAll(e, r);
            for (let o of n)
              if (o.type === "request" && M5e(o.message)) {
                let s = o.message.id,
                  a = this._requestResolvers.get(s);
                a
                  ? (a(new So(ms.InternalError, "Task cancelled or completed")), this._requestResolvers.delete(s))
                  : this._onerror(new Error(`Resolver missing for request ${s} during task ${e} cleanup`));
              }
          }
        }
        async _waitForTaskUpdate(e, r) {
          let n = this._options?.defaultTaskPollInterval ?? 1e3;
          try {
            let o = await this._taskStore?.getTask(e);
            o?.pollInterval && (n = o.pollInterval);
          } catch {}
          return new Promise((o, s) => {
            if (r.aborted) {
              s(new So(ms.InvalidRequest, "Request cancelled"));
              return;
            }
            let a = setTimeout(o, n);
            r.addEventListener(
              "abort",
              () => {
                (clearTimeout(a), s(new So(ms.InvalidRequest, "Request cancelled")));
              },
              { once: !0 },
            );
          });
        }
        requestTaskStore(e, r) {
          let n = this._taskStore;
          if (!n) throw new Error("No task store configured");
          return {
            createTask: async (o) => {
              if (!e) throw new Error("No request provided");
              return await n.createTask(o, e.id, { method: e.method, params: e.params }, r);
            },
            getTask: async (o) => {
              let s = await n.getTask(o, r);
              if (!s) throw new So(ms.InvalidParams, "Failed to retrieve task: Task not found");
              return s;
            },
            storeTaskResult: async (o, s, a) => {
              await n.storeTaskResult(o, s, a, r);
              let u = await n.getTask(o, r);
              if (u) {
                let c = Q5e.parse({ method: "notifications/tasks/status", params: u });
                (await this.notification(c), lM(u.status) && this._cleanupTaskProgressHandler(o));
              }
            },
            getTaskResult: (o) => n.getTaskResult(o, r),
            updateTaskStatus: async (o, s, a) => {
              let u = await n.getTask(o, r);
              if (!u) throw new So(ms.InvalidParams, `Task "${o}" not found - it may have been cleaned up`);
              if (lM(u.status))
                throw new So(
                  ms.InvalidParams,
                  `Cannot update task "${o}" from terminal status "${u.status}" to "${s}". Terminal states (completed, failed, cancelled) cannot transition to other states.`,
                );
              await n.updateTaskStatus(o, s, a, r);
              let c = await n.getTask(o, r);
              if (c) {
                let m = Q5e.parse({ method: "notifications/tasks/status", params: c });
                (await this.notification(m), lM(c.status) && this._cleanupTaskProgressHandler(o));
              }
            },
            listTasks: (o) => n.listTasks(o, r),
          };
        }
      }));
  });