/**
 * @module Zsn
 * @category app/api
 * @label iflow-api
 * @position 704 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Zsn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class t, class extends, class extends, class extends
 * Functions: qne, nun, ng, hGe, AGe, fGe, dGe, Rkt, ZXo, EGe, uun, Jan, vAe, iZo, XXo
 * Features: esbuild module exports: Zsn, CONTAINS iflow.cn API references, dotenv related, MCP server handling, telemetry/OTLP
 * === End semantic info ===
 */


var Zsn = T((f8) => {
  "use strict";
  Object.defineProperty(f8, "__esModule", { value: !0 });
  f8.BatchLogRecordProcessor =
    f8.InMemoryLogRecordExporter =
    f8.SimpleLogRecordProcessor =
    f8.ConsoleLogRecordExporter =
    f8.NoopLogRecordProcessor =
    f8.LoggerProvider =
      void 0;
  var HXo = Gsn();
  Object.defineProperty(f8, "LoggerProvider", {
    enumerable: !0,
    get: function () {
      return HXo.LoggerProvider;
    },
  });
  var VXo = jRt();
  Object.defineProperty(f8, "NoopLogRecordProcessor", {
    enumerable: !0,
    get: function () {
      return VXo.NoopLogRecordProcessor;
    },
  });
  var WXo = Hsn();
  Object.defineProperty(f8, "ConsoleLogRecordExporter", {
    enumerable: !0,
    get: function () {
      return WXo.ConsoleLogRecordExporter;
    },
  });
  var zXo = Vsn();
  Object.defineProperty(f8, "SimpleLogRecordProcessor", {
    enumerable: !0,
    get: function () {
      return zXo.SimpleLogRecordProcessor;
    },
  });
  var YXo = zsn();
  Object.defineProperty(f8, "InMemoryLogRecordExporter", {
    enumerable: !0,
    get: function () {
      return YXo.InMemoryLogRecordExporter;
    },
  });
  var KXo = Xsn();
  Object.defineProperty(f8, "BatchLogRecordProcessor", {
    enumerable: !0,
    get: function () {
      return KXo.BatchLogRecordProcessor;
    },
  });
});
var Mf,
  ean,
  yAe,
  tan,
  _Ae,
  EAe,
  ran,
  nan,
  ian,
  oan,
  san,
  aan,
  uan,
  can,
  lan,
  man,
  dan,
  fan,
  pan,
  han,
  gan,
  ban,
  Aan,
  yan,
  _an,
  Ean,
  van,
  Can,
  San,
  wan,
  xan,
  Tan,
  Dan,
  Ian,
  Ran,
  kan,
  Oan,
  Nan,
  Pan,
  Ban,
  Lan,
  Man,
  Fan,
  Uan,
  $an,
  Rne = j(() => {
    "use strict";
    ((Mf = "iflow-cli"),
      (ean = "iflow_cli.user_prompt"),
      (yAe = "iflow_cli.tool_call"),
      (tan = "iflow_cli.api_request"),
      (_Ae = "iflow_cli.api_error"),
      (EAe = "iflow_cli.api_response"),
      (ran = "iflow_cli.config"),
      (nan = "iflow_cli.flash_fallback"),
      (ian = "iflow_cli.next_speaker_check"),
      (oan = "iflow_cli.slash_command"),
      (san = "iflow_cli.cli_response"),
      (aan = "iflow_cli.tool.call.count"),
      (uan = "iflow_cli.tool.call.latency"),
      (can = "iflow_cli.mcp.tool.call.count"),
      (lan = "iflow_cli.mcp.tool.call.latency"),
      (man = "iflow_cli.builtin.tool.call.count"),
      (dan = "iflow_cli.builtin.tool.call.latency"),
      (fan = "gen_ai.client.operation"),
      (pan = "gen_ai.client.operation.duration"),
      (han = "gen_ai.client.token.usage"),
      (gan = "iflow_cli.session.count"),
      (ban = "iflow_cli.file.operation.count"),
      (Aan = "iflow_cli.user_request.count"),
      (yan = "iflow_cli.user_request.latency"),
      (_an = "iflow_cli.user_experience.success"),
      (Ean = "iflow_cli.user.identity"),
      (van = "iflow_cli.scheduler.lock.error"),
      (Can = "iflow_cli.mcp.connect.count"),
      (San = "iflow_cli.loop.detection.count"),
      (wan = "iflow_cli.paste.operation.count"),
      (xan = "iflow_cli.paste.operation.latency"),
      (Tan = "iflow_cli.xinliu.web.search.count"),
      (Dan = "iflow_cli.xinliu.web.search.latency"),
      (Ian = "iflow_cli.web.fetch.count"),
      (Ran = "iflow_cli.web.fetch.latency"),
      (kan = "iflow_cli.approval.mode.count"),
      (Oan = "iflow_cli.compression.lightweight.count"),
      (Nan = "iflow_cli.compression.lightweight.ratio"),
      (Pan = "iflow_cli.compression.full.count"),
      (Ban = "iflow_cli.compression.full.ratio"),
      (Lan = "iflow_cli.low_token_no_compression.count"),
      (Man = "iflow_cli.smart_approval.blacklist.block.count"),
      (Fan = "iflow_cli.smart_approval.blacklist.user_action.count"),
      (Uan = "iflow_cli.smart_approval.ai_review.count"),
      ($an = "iflow_cli.smart_approval.ai_risky.user_action.count"));
  });
var kne,
  One,
  Nne,
  Pne,
  Bne,
  Lne,
  Mne,
  Fne,
  Une,
  $ne,
  u4,
  c4,
  jan = j(() => {
    "use strict";
    ((kne = "iflow_cli.cpu.usage_percentage"),
      (One = "iflow_cli.cpu.user_percentage"),
      (Nne = "iflow_cli.cpu.system_percentage"),
      (Pne = "iflow_cli.cpu.cores"),
      (Bne = "iflow_cli.memory.heap_used"),
      (Lne = "iflow_cli.memory.heap_total"),
      (Mne = "iflow_cli.memory.rss"),
      (Fne = "iflow_cli.memory.external"),
      (Une = "iflow_cli.memory.system_usage_percentage"),
      ($ne = "iflow_cli.memory.process_usage_percentage"),
      (u4 = {
        [kne]: "CPU usage percentage",
        [One]: "CPU user time percentage",
        [Nne]: "CPU system time percentage",
        [Pne]: "Number of CPU cores",
        [Bne]: "Heap memory used in bytes",
        [Lne]: "Heap memory total in bytes",
        [Mne]: "Resident Set Size in bytes",
        [Fne]: "External memory in bytes",
        [Une]: "System memory usage percentage",
        [$ne]: "Process memory usage percentage relative to Node.js limits",
      }),
      (c4 = {
        [kne]: "percent",
        [One]: "percent",
        [Nne]: "percent",
        [Pne]: "cores",
        [Bne]: "bytes",
        [Lne]: "bytes",
        [Mne]: "bytes",
        [Fne]: "bytes",
        [Une]: "percent",
        [$ne]: "percent",
      }));
  });
import * as l4 from "os";
var cGe,
  Qan = j(() => {
    "use strict";
    jan();
    cGe = class {
      meter;
      options;
      lastCpuMeasurement;
      lastMeasureTime;
      cpuCores;
      totalSystemMemory;
      nodeJSMemoryLimit;
      cpuUsageGauge;
      cpuUserGauge;
      cpuSystemGauge;
      cpuCoresGauge;
      memoryHeapUsedGauge;
      memoryHeapTotalGauge;
      memoryRssGauge;
      memoryExternalGauge;
      memorySystemUsageGauge;
      memoryProcessUsageGauge;
      constructor(e, r = {}) {
        ((this.meter = e),
          (this.options = { enableCpuMetrics: !0, enableMemoryMetrics: !0, enableSystemInfo: !0, ...r }),
          (this.lastCpuMeasurement = process.cpuUsage()),
          (this.lastMeasureTime = Date.now()),
          (this.cpuCores = l4.cpus().length),
          (this.totalSystemMemory = l4.totalmem()),
          (this.nodeJSMemoryLimit = this.getNodeJSMemoryLimit()),
          this.initializeMetrics());
      }
      getCurrentCpuMetrics() {
        try {
          let e = process.cpuUsage(this.lastCpuMeasurement),
            r = Date.now(),
            n = r - this.lastMeasureTime;
          if (((this.lastCpuMeasurement = process.cpuUsage()), (this.lastMeasureTime = r), n <= 0))
            return { usage: 0, user: 0, system: 0, cores: this.cpuCores };
          let o = Math.max(0, e.user + e.system),
            s = Math.max(0, e.user),
            a = Math.max(0, e.system),
            u = (o / (n * 1e3)) * 100,
            c = (s / (n * 1e3)) * 100,
            m = (a / (n * 1e3)) * 100,
            d = Number.isFinite(u) ? Math.min(100, Math.max(0, u)) : 0,
            f = Number.isFinite(c) ? Math.min(100, Math.max(0, c)) : 0,
            p = Number.isFinite(m) ? Math.min(100, Math.max(0, m)) : 0;
          return { usage: d, user: f, system: p, cores: this.cpuCores };
        } catch {
          return { usage: 0, user: 0, system: 0, cores: this.cpuCores };
        }
      }
      getCurrentMemoryMetrics() {
        try {
          let e = process.memoryUsage(),
            r = l4.freemem(),
            o = ((this.totalSystemMemory - r) / this.totalSystemMemory) * 100,
            s = (e.rss / this.nodeJSMemoryLimit) * 100;
          return {
            heapUsed: e.heapUsed,
            heapTotal: e.heapTotal,
            rss: e.rss,
            external: e.external,
            systemUsage: Math.min(100, Math.max(0, o)),
            processUsage: Math.min(100, Math.max(0, s)),
          };
        } catch {
          return { heapUsed: 0, heapTotal: 0, rss: 0, external: 0, systemUsage: 0, processUsage: 0 };
        }
      }
      initializeMetrics() {
        let e = l4.platform(),
          r = l4.arch(),
          n = process.version;
        (this.options.enableCpuMetrics &&
          ((this.cpuUsageGauge = this.meter.createObservableGauge(kne, { description: u4[kne], unit: c4[kne] })),
          (this.cpuUserGauge = this.meter.createObservableGauge(One, { description: u4[One], unit: c4[One] })),
          (this.cpuSystemGauge = this.meter.createObservableGauge(Nne, { description: u4[Nne], unit: c4[Nne] })),
          (this.cpuCoresGauge = this.meter.createObservableGauge(Pne, { description: u4[Pne], unit: c4[Pne] })),
          this.cpuUsageGauge.addCallback((o) => {
            let s = this.getCurrentCpuMetrics();
            o.observe(s.usage, { platform: e, arch: r, node_version: n });
          }),
          this.cpuUserGauge.addCallback((o) => {
            let s = this.getCurrentCpuMetrics();
            o.observe(s.user, { platform: e, arch: r, node_version: n });
          }),
          this.cpuSystemGauge.addCallback((o) => {
            let s = this.getCurrentCpuMetrics();
            o.observe(s.system, { platform: e, arch: r, node_version: n });
          }),
          this.cpuCoresGauge?.addCallback((o) => {
            o.observe(this.cpuCores, { platform: e, arch: r });
          })),
          this.options.enableMemoryMetrics &&
            ((this.memoryHeapUsedGauge = this.meter.createObservableGauge(Bne, {
              description: u4[Bne],
              unit: c4[Bne],
            })),
            (this.memoryHeapTotalGauge = this.meter.createObservableGauge(Lne, {
              description: u4[Lne],
              unit: c4[Lne],
            })),
            (this.memoryRssGauge = this.meter.createObservableGauge(Mne, { description: u4[Mne], unit: c4[Mne] })),
            (this.memoryExternalGauge = this.meter.createObservableGauge(Fne, { description: u4[Fne], unit: c4[Fne] })),
            (this.memorySystemUsageGauge = this.meter.createObservableGauge(Une, {
              description: u4[Une],
              unit: c4[Une],
            })),
            (this.memoryProcessUsageGauge = this.meter.createObservableGauge($ne, {
              description: u4[$ne],
              unit: c4[$ne],
            })),
            this.memoryHeapUsedGauge.addCallback((o) => {
              let s = this.getCurrentMemoryMetrics();
              o.observe(s.heapUsed, { platform: e, arch: r, node_version: n });
            }),
            this.memoryHeapTotalGauge.addCallback((o) => {
              let s = this.getCurrentMemoryMetrics();
              o.observe(s.heapTotal, { platform: e, arch: r, node_version: n });
            }),
            this.memoryRssGauge.addCallback((o) => {
              let s = this.getCurrentMemoryMetrics();
              o.observe(s.rss, { platform: e, arch: r, node_version: n });
            }),
            this.memoryExternalGauge.addCallback((o) => {
              let s = this.getCurrentMemoryMetrics();
              o.observe(s.external, { platform: e, arch: r, node_version: n });
            }),
            this.memorySystemUsageGauge.addCallback((o) => {
              let s = this.getCurrentMemoryMetrics();
              o.observe(s.systemUsage, { platform: e, arch: r, node_version: n });
            }),
            this.memoryProcessUsageGauge.addCallback((o) => {
              let s = this.getCurrentMemoryMetrics();
              o.observe(s.processUsage, {
                platform: e,
                arch: r,
                node_version: n,
                memory_limit_mb: Math.round(this.nodeJSMemoryLimit / (1024 * 1024)).toString(),
              });
            })));
      }
      getNodeJSMemoryLimit() {
        let e = process.execArgv.find((o) => o.startsWith("--max-old-space-size="))?.split("=")[1];
        if (e) {
          let o = parseInt(e, 10);
          if (!isNaN(o) && o > 0) return o * 1024 * 1024;
        }
        let r = process.execArgv.find((o) => o.startsWith("--max_old_space_size="))?.split("=")[1];
        if (r) {
          let o = parseInt(r, 10);
          if (!isNaN(o) && o > 0) return o * 1024 * 1024;
        }
        let n = l4.arch();
        return n === "x64" || n === "arm64" ? 1400 * 1024 * 1024 : 700 * 1024 * 1024;
      }
    };
  });
function Ec(t = new Date()) {
  let e = -t.getTimezoneOffset(),
    r = e >= 0 ? "+" : "-",
    n = (h) => String(h).padStart(2, "0"),
    o = t.getFullYear(),
    s = n(t.getMonth() + 1),
    a = n(t.getDate()),
    u = n(t.getHours()),
    c = n(t.getMinutes()),
    m = n(t.getSeconds()),
    d = String(t.getMilliseconds()).padStart(3, "0"),
    f = n(Math.floor(Math.abs(e) / 60)),
    p = n(Math.abs(e) % 60);
  return `${o}-${s}-${a}T${u}:${c}:${m}.${d}${r}${f}:${p}`;
}
function vAe(t = new Date()) {
  return Ec(t).replace(/[:.]/g, "-");
}
var jne = j(() => {
  "use strict";
});
function Gan(t, e = {}) {
  if (lGe) return lGe;
  let r = { enableCpuMetrics: !0, enableMemoryMetrics: !0, enableSystemInfo: !0, ...e };
  return ((lGe = new cGe(t, r)), lGe);
}
var lGe,
  qan = j(() => {
    "use strict";
    Qan();
    jne();
    lGe = null;
  });
import JXo from "os";
function Han() {
  try {
    let t = JXo.networkInterfaces();
    for (let e of Object.keys(t)) {
      let r = t[e];
      if (r) {
        for (let n of r) if (n.family === "IPv4" && !n.internal) return n.address;
      }
    }
    return "127.0.0.1";
  } catch {
    return "127.0.0.1";
  }
}
var Van = j(() => {
  "use strict";
});
import * as Qne from "os";
import * as mGe from "fs";
function Ma(t) {
  let e = "0.5.19",
    r = process.env.IFLOW_ENV || "normal",
    n = {
      darwin: "macOS",
      win32: "Windows",
      linux: "Linux",
      freebsd: "FreeBSD",
      openbsd: "OpenBSD",
      sunos: "SunOS",
      aix: "AIX",
    },
    o = Qne.platform(),
    s = n[o] || o,
    a = "unknown";
  try {
    if (o === "darwin") a = Qne.release();
    else if (o === "linux")
      try {
        if (mGe.existsSync("/etc/os-release")) {
          let h = mGe.readFileSync("/etc/os-release", "utf8").match(/^PRETTY_NAME="(.+)"/m);
          h && (a = h[1]);
        }
      } catch {
        a = Qne.release();
      }
    else o === "win32" && (a = Qne.release());
  } catch {
    a = "unknown";
  }
  let u = { name: "Node.js", version: process.version, architecture: process.arch },
    c = t.getModel() || "unknown",
    m = t.getUsageMode(),
    d = !1,
    f = t.getContentGeneratorConfig?.();
  if (f) {
    let p = f.authType,
      h = f.baseUrl || "";
    (p === Kt.LOGIN_WITH_IFLOW || p === Kt.IFLOW || (p === Kt.OPENAI_COMPATIBLE && h.includes("apis.iflow.cn"))) &&
      (d = !0);
  }
  return {
    app_name: Mf,
    tenant__: "gen_ai",
    version: e,
    platform: s,
    os_model: a,
    runtime_name: u.name,
    runtime_version: u.version,
    runtime_architecture: u.architecture,
    model_name: c,
    is_iflow_open_user: String(d),
    ip: Han(),
    iflow_env: r,
    usage_mode: m,
  };
}
var KRt = j(() => {
  "use strict";
  UC();
  Van();
  Rne();
});
function Wan() {
  return (JRt || (JRt = Z3e.getMeter(Mf)), JRt);
}
function zan() {
  if (wl) return;
  let t = Wan();
  if (t) {
    try {
      Gan(t, { enableCpuMetrics: !0, enableMemoryMetrics: !0, enableSystemInfo: !0 });
    } catch {}
    ((XRt = t.createHistogram(aan, {
      description: "Counts tool calls, tagged by function name and success.",
      unit: "count",
      valueType: ia.INT,
    })),
      (ZRt = t.createHistogram(uan, {
        description: "Latency of tool calls in milliseconds.",
        unit: "ms",
        valueType: ia.INT,
      })),
      (ekt = t.createHistogram(can, {
        description: "Counts MCP tool calls, tagged by function name and success.",
        unit: "count",
        valueType: ia.INT,
      })),
      (tkt = t.createHistogram(lan, {
        description: "Latency of MCP tool calls in milliseconds.",
        unit: "ms",
        valueType: ia.INT,
      })),
      (rkt = t.createHistogram(man, {
        description: "Counts built-in tool calls, tagged by function name and success.",
        unit: "count",
        valueType: ia.INT,
      })),
      (nkt = t.createHistogram(dan, {
        description: "Latency of built-in tool calls in milliseconds.",
        unit: "ms",
        valueType: ia.INT,
      })),
      (CAe = t.createHistogram(fan, {
        description: "Counts API requests, tagged by model and status.",
        unit: "count",
        valueType: ia.INT,
      })),
      (SAe = t.createHistogram(pan, {
        description: "Latency of API requests in milliseconds.",
        unit: "ms",
        valueType: ia.INT,
      })),
      (ikt = t.createHistogram(han, {
        description: "Counts the total number of tokens used.",
        unit: "tokens",
        valueType: ia.INT,
      })),
      (okt = t.createHistogram(ban, {
        description: "Counts file operations (create, read, update).",
        unit: "count",
        valueType: ia.INT,
      })),
      (skt = t.createHistogram(Aan, {
        description: "Counts user requests from prompt to completion.",
        unit: "count",
        valueType: ia.INT,
      })),
      (akt = t.createHistogram(yan, {
        description: "End-to-end latency of user requests in milliseconds.",
        unit: "ms",
        valueType: ia.INT,
      })),
      (ukt = t.createHistogram(_an, {
        description: "User experience success rate - counts successful user experiences including retries and fixes.",
        unit: "count",
        valueType: ia.INT,
      })),
      (ckt = t.createHistogram(Ean, {
        description: "User identity for tracking unique installations.",
        unit: "count",
        valueType: ia.INT,
      })),
      (lkt = t.createHistogram(van, {
        description: "Counts tool scheduler lock errors when new calls are blocked by running calls.",
        unit: "count",
        valueType: ia.INT,
      })),
      (mkt = t.createHistogram(Can, {
        description: "Counts MCP connection attempts and their success/failure status.",
        unit: "count",
        valueType: ia.INT,
      })),
      (dkt = t.createHistogram(San, {
        description: "Counts loop detection events by loop type.",
        unit: "count",
        valueType: ia.INT,
      })),
      (fkt = t.createHistogram(wan, {
        description: "Counts paste operations, tagged by type and success.",
        unit: "count",
        valueType: ia.INT,
      })),
      (pkt = t.createHistogram(xan, {
        description: "Latency of paste operations in milliseconds.",
        unit: "ms",
        valueType: ia.INT,
      })),
      (hkt = t.createHistogram(Tan, {
        description: "Counts xinliu web search operations, tagged by success and error type.",
        unit: "count",
        valueType: ia.INT,
      })),
      (gkt = t.createHistogram(Dan, {
        description: "Latency of xinliu web search operations in milliseconds.",
        unit: "ms",
        valueType: ia.INT,
      })),
      (bkt = t.createHistogram(Ian, {
        description: "Counts web fetch operations, tagged by success and error type.",
        unit: "count",
        valueType: ia.INT,
      })),
      (Akt = t.createHistogram(Ran, {
        description: "Latency of web fetch operations in milliseconds.",
        unit: "ms",
        valueType: ia.INT,
      })),
      (ykt = t.createHistogram(kan, {
        description: "Counts usage of different approval modes.",
        unit: "count",
        valueType: ia.INT,
      })),
      (_kt = t.createHistogram(Oan, {
        description: "Counts lightweight compression triggers, tagged by executed status and skip reason.",
        unit: "count",
        valueType: ia.INT,
      })),
      (Ekt = t.createHistogram(Nan, {
        description: "Histogram of lightweight compression token reduction ratios (reduced_tokens / original_tokens).",
        unit: "ratio",
        valueType: ia.DOUBLE,
      })),
      (vkt = t.createHistogram(Pan, {
        description: "Counts full compression triggers, tagged by triggered_by and had_lightweight_before.",
        unit: "count",
        valueType: ia.INT,
      })),
      (Ckt = t.createHistogram(Ban, {
        description: "Histogram of full compression token reduction ratios (reduced_tokens / original_tokens).",
        unit: "ratio",
        valueType: ia.DOUBLE,
      })),
      (Skt = t.createHistogram(Lan, {
        description: "Counts API calls when token remaining < 20% without compression triggered.",
        unit: "count",
        valueType: ia.INT,
      })),
      (wkt = t.createHistogram(Man, {
        description: "Counts blacklist blocks in smart approval, tagged by function name and risk level.",
        unit: "count",
        valueType: ia.INT,
      })),
      (xkt = t.createHistogram(Fan, {
        description: "Counts user actions after blacklist block, tagged by function name and action (execute/cancel).",
        unit: "count",
        valueType: ia.INT,
      })),
      (Tkt = t.createHistogram(Uan, {
        description:
          "Counts AI review operations in smart approval, tagged by function name and decision (safe/risky).",
        unit: "count",
        valueType: ia.INT,
      })),
      (Dkt = t.createHistogram($an, {
        description: "Counts user actions after AI judges risky, tagged by function name and action (execute/cancel).",
        unit: "count",
        valueType: ia.INT,
      })),
      (wl = !0));
  }
}
function dGe(t) {
  let e = Wan();
  if (!e || !wl) return;
  e.createHistogram(gan, { description: "Count of CLI sessions started.", unit: "count", valueType: ia.INT }).record(
    1,
    Ma(t),
  );
}
function Yan(t, e, r, n, o, s) {
  if (!XRt || !ZRt || !wl) return;
  let a = { ...Ma(t), function_name: e ?? "unknown", success: String(n), decision: o ?? "unknown" };
  (XRt.record(1, a), ZRt.record(r, { ...Ma(t), function_name: e ?? "unknown", tool_type: s ?? "unknown" }));
}
function Kan(t, e, r, n, o, s) {
  if (!ekt || !tkt || !wl) return;
  let a = { ...Ma(t), function_name: e ?? "unknown", success: String(n), decision: o ?? "unknown" };
  (s && (a.execution_context = s),
    ekt.record(1, a),
    tkt.record(r, { ...Ma(t), function_name: e ?? "unknown", execution_context: s ?? "unknown" }));
}
function Jan(t, e, r, n, o, s) {
  if (!rkt || !nkt || !wl) return;
  let a = { ...Ma(t), function_name: e ?? "unknown", success: String(n), decision: o ?? "unknown" };
  (s && (a.execution_context = s),
    rkt.record(1, a),
    nkt.record(r, { ...Ma(t), function_name: e ?? "unknown", execution_context: s ?? "unknown" }));
}
function Gne(t, e, r, n) {
  !ikt || !wl || ikt.record(r, { ...Ma(t), model: e ?? "unknown", type: n ?? "unknown" });
}
function Xan(t, e, r, n, o, s, a, u) {
  if (!CAe || !SAe || !wl) return;
  let c = { ...Ma(t), model: e ?? "unknown", status_code: String(n ?? (o ? "error" : "ok")) };
  (a !== void 0 && (c.http_status_code = String(a)),
    u !== void 0 && (c.business_code = String(u)),
    s && (c.finish_reason = s),
    CAe.record(1, c));
  let m = { ...Ma(t), model: e ?? "unknown", http_status_code: String(a ?? 200), finish_reason: s ?? "unknown" };
  (u != null && (m.business_code = String(u)), SAe.record(r, m));
}
function Zan(t, e, r, n, o, s, a) {
  if (!CAe || !SAe || !wl) return;
  let u = { ...Ma(t), model: e ?? "unknown", status_code: String(n ?? "error"), error: o ?? "unknown" };
  (s !== void 0 && (u.http_status_code = String(s)), a !== void 0 && (u.business_code = String(a)), CAe.record(1, u));
  let c = { ...Ma(t), model: e ?? "unknown", http_status_code: String(s ?? 0), error: o ?? "unknown" };
  (a != null && (c.business_code = String(a)), SAe.record(r, c));
}
function qR(t, e, r, n, o) {
  if (!okt || !wl) return;
  let s = { ...Ma(t), operation: e };
  (r !== void 0 && (s.lines = String(r)),
    n !== void 0 && (s.mimetype = n),
    o !== void 0 && (s.extension = o),
    okt.record(1, s));
}
function eun(t, e, r, n, o) {
  if (!skt || !akt || !wl) return;
  let s = { ...Ma(t), prompt_id: e, success: String(n) };
  (o && (s.error = o), skt.record(1, s), akt.record(r, s));
}
function Ikt(t, e, r = !1, n = !1, o) {
  if (!ukt || !wl) return;
  let s = { ...Ma(t), success: String(e), had_retries: String(r), had_fixes: String(n) };
  (o && (s.final_error = o), ukt.record(1, s));
}
function tun(t, e) {
  if (!ckt || !wl) return;
  let r = { ...Ma(t), user_id: e };
  ckt.record(1, r);
}
function nun(t, e, r) {
  if (!lkt || !wl) return;
  let n = { ...Ma(t), running_calls_count: String(e) };
  (r.forEach((o, s) => {
    ((n[`call_${s}_name`] = o.name), (n[`call_${s}_status`] = o.status));
  }),
    lkt.record(1, n));
}
function Rkt(t, e, r, n, o) {
  if (!mkt || !wl) return;
  let s = { ...Ma(t), server_name: e, success: String(r) };
  (n && (s.error_type = n), o && (s.transport_type = o), mkt.record(1, s));
}
function iun(t, e, r) {
  if (!dkt || !wl) return;
  let n = { ...Ma(t), loop_type: e, prompt_id: r };
  dkt.record(1, n);
}
function fGe(t, e, r, n, o = "text", s, a) {
  if (!fkt || !pkt || !wl) return;
  let u = {};
  try {
    u = Ma(t);
  } catch {
    u = {
      app_name: Mf,
      tenant__: "gen_ai",
      version: "unknown",
      platform: a || "unknown",
      os_model: "unknown",
      runtime_name: "Node.js",
      runtime_version: process.version,
      runtime_architecture: process.arch,
      model_name: "unknown",
      is_iflow_open_user: "false",
      ip: "unknown",
      iflow_env: "test",
      usage_mode: "unknown",
    };
  }
  let c = { ...u, success: String(n), paste_type: o };
  (s && (c.error_type = s), a && (c.platform_specific = a), fkt.record(1, c));
  let m = { ...u, paste_type: o, text_length_range: String(r), performance_ratio: XXo(e, r) };
  pkt.record(e, m);
}
function XXo(t, e) {
  if (e === 0) return "no-text";
  let r = t / e;
  return r <= 0.1 ? "excellent" : r <= 0.5 ? "good" : r <= 1 ? "normal" : r <= 2 ? "slow" : "very-slow";
}
function mL(t, e, r, n, o, s) {
  if (!hkt || !gkt || !wl) return;
  let a = { ...Ma(t), success: String(r) };
  (n && (a.error_type = n),
    o !== void 0 && (a.results_count = String(o)),
    s && (a.query_length = String(s.length)),
    hkt.record(1, a),
    gkt.record(e, { ...Ma(t), error_type: n ?? "none" }));
}
function Jq(t, e, r, n, o, s) {
  if (!bkt || !Akt || !wl) return;
  let a = { ...Ma(t), success: String(r) };
  (n && (a.error_type = n),
    o !== void 0 && (a.url_count = String(o)),
    s !== void 0 && (a.prompt_length = String(s)),
    bkt.record(1, a),
    Akt.record(e, { ...Ma(t), error_type: n ?? "none" }));
}
function pGe(t, e) {
  if (!ykt || !wl) return;
  let r = { ...Ma(t), approval_mode: e };
  ykt.record(1, r);
}
function qne(t, e, r, n) {
  if (!_kt || !wl) return;
  let o = { ...Ma(t), executed: String(e), triggered_by: r };
  (n && (o.skipped_reason = n), _kt.record(1, o));
}
function hGe(t, e, r, n) {
  if (!Ekt || !wl) return;
  let o = e - r,
    s = e > 0 ? o / e : 0,
    a = {
      ...Ma(t),
      original_tokens: String(e),
      compressed_tokens: String(r),
      reduced_tokens: String(o),
      removed_tool_calls: String(n),
    };
  Ekt.record(s, a);
}
function Hne(t, e, r, n) {
  if (!vkt || !wl) return;
  let o = { ...Ma(t), executed: String(e), triggered_by: r, had_lightweight_before: String(n) };
  vkt.record(1, o);
}
function gGe(t, e, r, n, o) {
  if (!Ckt || !wl) return;
  let s = e - r,
    a = e > 0 ? s / e : 0,
    u = {
      ...Ma(t),
      original_tokens: String(e),
      compressed_tokens: String(r),
      reduced_tokens: String(s),
      had_lightweight_before: String(n),
      recovered_files_count: String(o),
    };
  Ckt.record(a, u);
}
function bGe(t, e, r, n) {
  if (!Skt || !wl) return;
  let o = (1 - n) * 100,
    s = {
      ...Ma(t),
      token_count: String(e),
      token_limit: String(r),
      token_ratio: n.toFixed(2),
      token_remaining_percent: o.toFixed(1),
    };
  Skt.record(1, s);
}
function AGe(t, e, r, n, o) {
  if (!wkt || !wl) return;
  let s = { ...Ma(t), function_name: e, risk_level: r };
  if ((n && (s.rule_name = n), o && typeof o == "object")) {
    let a = o;
    if (
      ((a.command || a.cmd) && (s.command = String(a.command || a.cmd).substring(0, 200)),
      (a.file_path || a.absolute_path || a.path) &&
        (s.file_path = String(a.file_path || a.absolute_path || a.path).substring(0, 200)),
      a.url || a.prompt)
    ) {
      let u = String(a.url || a.prompt).substring(0, 200);
      s.url_or_prompt = u;
    }
  }
  wkt.record(1, s);
}
function yGe(t, e, r, n, o) {
  if (!xkt || !wl) return;
  let s = { ...Ma(t), function_name: e, action: r, risk_level: n };
  if (o && typeof o == "object") {
    let a = o;
    if (
      ((a.command || a.cmd) && (s.command = String(a.command || a.cmd).substring(0, 200)),
      (a.file_path || a.absolute_path || a.path) &&
        (s.file_path = String(a.file_path || a.absolute_path || a.path).substring(0, 200)),
      a.url || a.prompt)
    ) {
      let u = String(a.url || a.prompt).substring(0, 200);
      s.url_or_prompt = u;
    }
  }
  xkt.record(1, s);
}
function _Ge(t, e, r, n, o, s) {
  if (!Tkt || !wl) return;
  let a = { ...Ma(t), function_name: e, decision: r, review_layer: o, latency_ms: String(n) };
  if (s && typeof s == "object") {
    let u = s;
    if (
      ((u.command || u.cmd) && (a.command = String(u.command || u.cmd).substring(0, 200)),
      (u.file_path || u.absolute_path || u.path) &&
        (a.file_path = String(u.file_path || u.absolute_path || u.path).substring(0, 200)),
      u.url || u.prompt)
    ) {
      let c = String(u.url || u.prompt).substring(0, 200);
      a.url_or_prompt = c;
    }
  }
  Tkt.record(1, a);
}
function EGe(t, e, r, n, o) {
  if (!Dkt || !wl) return;
  let s = { ...Ma(t), function_name: e, action: r, review_layer: n };
  if (o && typeof o == "object") {
    let a = o;
    if (
      ((a.command || a.cmd) && (s.command = String(a.command || a.cmd).substring(0, 200)),
      (a.file_path || a.absolute_path || a.path) &&
        (s.file_path = String(a.file_path || a.absolute_path || a.path).substring(0, 200)),
      a.url || a.prompt)
    ) {
      let u = String(a.url || a.prompt).substring(0, 200);
      s.url_or_prompt = u;
    }
  }
  Dkt.record(1, s);
}
var m4,
  JRt,
  XRt,
  ZRt,
  ekt,
  tkt,
  rkt,
  nkt,
  CAe,
  SAe,
  ikt,
  okt,
  skt,
  akt,
  ukt,
  ckt,
  lkt,
  mkt,
  dkt,
  fkt,
  pkt,
  hkt,
  gkt,
  bkt,
  Akt,
  ykt,
  _kt,
  Ekt,
  vkt,
  Ckt,
  Skt,
  wkt,
  xkt,
  Tkt,
  Dkt,
  wl,
  Dp = j(() => {
    "use strict";
    Zt();
    Rne();
    qan();
    KRt();
    (function (t) {
      ((t.CREATE = "create"), (t.READ = "read"), (t.UPDATE = "update"));
    })(m4 || (m4 = {}));
    wl = !1;
  });
var Li,
  cn,
  Mi,
  Fi,
  Fc = j(() => {
    "use strict";
    Li = class {
      name;
      displayName;
      description;
      icon;
      kind;
      parameterSchema;
      isOutputMarkdown;
      canUpdateOutput;
      aliases;
      constructor(e, r, n, o, s, a, u = !0, c = !1, m = []) {
        ((this.name = e),
          (this.displayName = r),
          (this.description = n),
          (this.icon = o),
          (this.kind = s),
          (this.parameterSchema = a),
          (this.isOutputMarkdown = u),
          (this.canUpdateOutput = c),
          (this.aliases = m));
      }
      get schema() {
        return { name: this.name, description: this.description, parameters: this.parameterSchema };
      }
      validateToolParams(e) {
        return null;
      }
      getDescription(e) {
        return JSON.stringify(e);
      }
      shouldConfirmExecute(e, r) {
        return Promise.resolve(!1);
      }
      toolLocations(e) {
        return [];
      }
    };
    (function (t) {
      ((t.ProceedOnce = "proceed_once"),
        (t.ProceedAlways = "proceed_always"),
        (t.ProceedAlwaysServer = "proceed_always_server"),
        (t.ProceedAlwaysTool = "proceed_always_tool"),
        (t.ModifyWithEditor = "modify_with_editor"),
        (t.Cancel = "cancel"));
    })(cn || (cn = {}));
    (function (t) {
      ((t.FileSearch = "fileSearch"),
        (t.Folder = "folder"),
        (t.Globe = "globe"),
        (t.Hammer = "hammer"),
        (t.LightBulb = "lightBulb"),
        (t.Pencil = "pencil"),
        (t.Regex = "regex"),
        (t.Terminal = "terminal"));
    })(Mi || (Mi = {}));
    (function (t) {
      ((t.Read = "read"),
        (t.Edit = "edit"),
        (t.Delete = "delete"),
        (t.Move = "move"),
        (t.Search = "search"),
        (t.Execute = "execute"),
        (t.Think = "think"),
        (t.Fetch = "fetch"),
        (t.Other = "other"));
    })(Fi || (Fi = {}));
  });
function ZXo(t) {
  switch (t) {
    case cn.ProceedOnce:
    case cn.ProceedAlways:
    case cn.ProceedAlwaysServer:
    case cn.ProceedAlwaysTool:
      return wAe.ACCEPT;
    case cn.ModifyWithEditor:
      return wAe.MODIFY;
    case cn.Cancel:
    default:
      return wAe.REJECT;
  }
}
var wAe,
  Vne,
  Wne,
  zne,
  Yne,
  Kne,
  Ob,
  Jne,
  Xne,
  G_,
  Zne,
  vGe,
  dL,
  CGe,
  Xq = j(() => {
    "use strict";
    Fc();
    UC();
    jne();
    (function (t) {
      ((t.ACCEPT = "accept"), (t.REJECT = "reject"), (t.MODIFY = "modify"));
    })(wAe || (wAe = {}));
    ((Vne = class {
      "event.name";
      "event.timestamp";
      model;
      embedding_model;
      sandbox_enabled;
      core_tools_enabled;
      approval_mode;
      api_key_enabled;
      vertex_ai_enabled;
      debug_enabled;
      mcp_servers;
      telemetry_enabled;
      telemetry_log_user_prompts_enabled;
      file_filtering_respect_git_ignore;
      constructor(e) {
        let r = e.getContentGeneratorConfig(),
          n = e.getMcpServers(),
          o = !1,
          s = !1;
        (r && r.authType && ((o = r.authType === Kt.IFLOW), (s = r.authType === Kt.AONE)),
          (this["event.name"] = "cli_config"),
          (this.model = e.getModel()),
          (this.embedding_model = e.getEmbeddingModel()),
          (this.sandbox_enabled = typeof e.getSandbox() == "string" || !!e.getSandbox()),
          (this.core_tools_enabled = (e.getCoreTools() ?? []).join(",")),
          (this.approval_mode = e.getApprovalMode()),
          (this.api_key_enabled = o || s),
          (this.vertex_ai_enabled = s),
          (this.debug_enabled = e.getDebugMode()),
          (this.mcp_servers = n ? Object.keys(n).join(",") : ""),
          (this.telemetry_enabled = e.getTelemetryEnabled()),
          (this.telemetry_log_user_prompts_enabled = e.getTelemetryLogPromptsEnabled()),
          (this.file_filtering_respect_git_ignore = e.getFileFilteringRespectGitIgnore()));
      }
    }),
      (Wne = class {
        "event.name";
        "event.timestamp";
        session_id;
        constructor(e) {
          ((this["event.name"] = "end_session"),
            (this["event.timestamp"] = Ec()),
            (this.session_id = e?.getSessionId()));
        }
      }),
      (zne = class {
        "event.name";
        "event.timestamp";
        prompt_length;
        prompt_id;
        auth_type;
        prompt;
        constructor(e, r, n, o) {
          ((this["event.name"] = "user_prompt"),
            (this["event.timestamp"] = Ec()),
            (this.prompt_length = e),
            (this.prompt_id = r),
            (this.auth_type = n),
            (this.prompt = o));
        }
      }),
      (Yne = class {
        "event.name";
        "event.timestamp";
        function_name;
        function_args;
        duration_ms;
        success;
        decision;
        error;
        error_type;
        prompt_id;
        server_name;
        response_text;
        constructor(e) {
          ((this["event.name"] = "tool_call"),
            (this["event.timestamp"] = Ec()),
            (this.function_name = e.request.name),
            (this.function_args = JSON.stringify(e.request.args)),
            (this.duration_ms = e.durationMs ?? 0),
            (this.success = e.status === "success"),
            (this.decision = e.outcome ? ZXo(e.outcome) : void 0),
            (this.error = e.response.error?.message),
            (this.error_type = e.response.errorType),
            (this.prompt_id = e.request.prompt_id),
            (this.response_text = JSON.stringify(e.response, null, 2)),
            "tool" in e && e.tool && "serverName" in e.tool && (this.server_name = e.tool.serverName));
        }
      }),
      (Kne = class {
        "event.name";
        "event.timestamp";
        model;
        prompt_id;
        request_text;
        base_url;
        openai_request;
        constructor(e, r, n, o, s) {
          ((this["event.name"] = "api_request"),
            (this["event.timestamp"] = Ec()),
            (this.model = r),
            (this.prompt_id = o),
            (this.request_text = s),
            (this.base_url = e),
            (this.openai_request = n));
        }
      }),
      (Ob = class {
        "event.name";
        "event.timestamp";
        model;
        error;
        error_type;
        status_code;
        http_status_code;
        business_code;
        duration_ms;
        prompt_id;
        auth_type;
        constructor(e, r, n, o, s, a, u, c, m) {
          ((this["event.name"] = "api_error"),
            (this["event.timestamp"] = Ec()),
            (this.model = e),
            (this.error = r),
            (this.error_type = a),
            (this.status_code = u),
            (this.http_status_code = c),
            (this.business_code = m),
            (this.duration_ms = n),
            (this.prompt_id = o),
            (this.auth_type = s));
        }
      }),
      (Jne = class {
        "event.name";
        "event.timestamp";
        model;
        status_code;
        http_status_code;
        business_code;
        duration_ms;
        error;
        input_token_count;
        output_token_count;
        cached_content_token_count;
        thoughts_token_count;
        tool_token_count;
        total_token_count;
        response_text;
        prompt_id;
        auth_type;
        finish_reason;
        constructor(e, r, n, o, s, a, u, c, m, d) {
          ((this["event.name"] = "api_response"),
            (this["event.timestamp"] = Ec()),
            (this.model = e),
            (this.duration_ms = r),
            (this.status_code = 200),
            (this.http_status_code = m || 200),
            (this.business_code = d),
            (this.input_token_count = s?.promptTokenCount ?? 0),
            (this.output_token_count = s?.candidatesTokenCount ?? 0),
            (this.cached_content_token_count = s?.cachedContentTokenCount ?? 0),
            (this.thoughts_token_count = s?.thoughtsTokenCount ?? 0),
            (this.tool_token_count = s?.toolUsePromptTokenCount ?? 0),
            (this.total_token_count = s?.totalTokenCount ?? 0),
            (this.response_text = a),
            (this.error = u),
            (this.prompt_id = n),
            (this.auth_type = o),
            (this.finish_reason = c));
        }
      }),
      (Xne = class {
        "event.name";
        "event.timestamp";
        auth_type;
        constructor(e) {
          ((this["event.name"] = "flash_fallback"), (this["event.timestamp"] = Ec()), (this.auth_type = e));
        }
      }));
    (function (t) {
      ((t.CONSECUTIVE_IDENTICAL_TOOL_CALLS = "consecutive_identical_tool_calls"),
        (t.CHANTING_IDENTICAL_SENTENCES = "chanting_identical_sentences"),
        (t.LLM_DETECTED_LOOP = "llm_detected_loop"));
    })(G_ || (G_ = {}));
    ((Zne = class {
      "event.name";
      "event.timestamp";
      loop_type;
      prompt_id;
      constructor(e, r) {
        ((this["event.name"] = "loop_detected"),
          (this["event.timestamp"] = Ec()),
          (this.loop_type = e),
          (this.prompt_id = r));
      }
    }),
      (vGe = class {
        "event.name";
        "event.timestamp";
        prompt_id;
        finish_reason;
        result;
        constructor(e, r, n) {
          ((this["event.name"] = "next_speaker_check"),
            (this["event.timestamp"] = Ec()),
            (this.prompt_id = e),
            (this.finish_reason = r),
            (this.result = n));
        }
      }),
      (dL = class {
        "event.name";
        "event.timestamp";
        command;
        subcommand;
        constructor(e, r) {
          ((this["event.name"] = "slash_command"),
            (this["event.timestamp"] = Ec()),
            (this.command = e),
            (this.subcommand = r));
        }
      }),
      (CGe = class {
        "event.name";
        "event.timestamp";
        model;
        constructor(e) {
          ((this["event.name"] = "malformed_json_response"), (this["event.timestamp"] = Ec()), (this.model = e));
        }
      }));
  });
var Ai,
  oun = j(() => {
    "use strict";
    (function (t) {
      ((t[(t.IFLOW_CLI_KEY_UNKNOWN = 0)] = "IFLOW_CLI_KEY_UNKNOWN"),
        (t[(t.IFLOW_CLI_START_SESSION_MODEL = 1)] = "IFLOW_CLI_START_SESSION_MODEL"),
        (t[(t.IFLOW_CLI_START_SESSION_EMBEDDING_MODEL = 2)] = "IFLOW_CLI_START_SESSION_EMBEDDING_MODEL"),
        (t[(t.IFLOW_CLI_START_SESSION_SANDBOX = 3)] = "IFLOW_CLI_START_SESSION_SANDBOX"),
        (t[(t.IFLOW_CLI_START_SESSION_CORE_TOOLS = 4)] = "IFLOW_CLI_START_SESSION_CORE_TOOLS"),
        (t[(t.IFLOW_CLI_START_SESSION_APPROVAL_MODE = 5)] = "IFLOW_CLI_START_SESSION_APPROVAL_MODE"),
        (t[(t.IFLOW_CLI_START_SESSION_API_KEY_ENABLED = 6)] = "IFLOW_CLI_START_SESSION_API_KEY_ENABLED"),
        (t[(t.IFLOW_CLI_START_SESSION_VERTEX_API_ENABLED = 7)] = "IFLOW_CLI_START_SESSION_VERTEX_API_ENABLED"),
        (t[(t.IFLOW_CLI_START_SESSION_DEBUG_MODE_ENABLED = 8)] = "IFLOW_CLI_START_SESSION_DEBUG_MODE_ENABLED"),
        (t[(t.IFLOW_CLI_START_SESSION_MCP_SERVERS = 9)] = "IFLOW_CLI_START_SESSION_MCP_SERVERS"),
        (t[(t.IFLOW_CLI_START_SESSION_TELEMETRY_ENABLED = 10)] = "IFLOW_CLI_START_SESSION_TELEMETRY_ENABLED"),
        (t[(t.IFLOW_CLI_START_SESSION_TELEMETRY_LOG_USER_PROMPTS_ENABLED = 11)] =
          "IFLOW_CLI_START_SESSION_TELEMETRY_LOG_USER_PROMPTS_ENABLED"),
        (t[(t.IFLOW_CLI_START_SESSION_RESPECT_GITIGNORE = 12)] = "IFLOW_CLI_START_SESSION_RESPECT_GITIGNORE"),
        (t[(t.IFLOW_CLI_USER_PROMPT_LENGTH = 13)] = "IFLOW_CLI_USER_PROMPT_LENGTH"),
        (t[(t.IFLOW_CLI_TOOL_CALL_NAME = 14)] = "IFLOW_CLI_TOOL_CALL_NAME"),
        (t[(t.IFLOW_CLI_TOOL_CALL_DECISION = 15)] = "IFLOW_CLI_TOOL_CALL_DECISION"),
        (t[(t.IFLOW_CLI_TOOL_CALL_SUCCESS = 16)] = "IFLOW_CLI_TOOL_CALL_SUCCESS"),
        (t[(t.IFLOW_CLI_TOOL_CALL_DURATION_MS = 17)] = "IFLOW_CLI_TOOL_CALL_DURATION_MS"),
        (t[(t.IFLOW_CLI_TOOL_ERROR_MESSAGE = 18)] = "IFLOW_CLI_TOOL_ERROR_MESSAGE"),
        (t[(t.IFLOW_CLI_TOOL_CALL_ERROR_TYPE = 19)] = "IFLOW_CLI_TOOL_CALL_ERROR_TYPE"),
        (t[(t.IFLOW_CLI_API_REQUEST_MODEL = 20)] = "IFLOW_CLI_API_REQUEST_MODEL"),
        (t[(t.IFLOW_CLI_API_RESPONSE_MODEL = 21)] = "IFLOW_CLI_API_RESPONSE_MODEL"),
        (t[(t.IFLOW_CLI_API_RESPONSE_STATUS_CODE = 22)] = "IFLOW_CLI_API_RESPONSE_STATUS_CODE"),
        (t[(t.IFLOW_CLI_API_RESPONSE_DURATION_MS = 23)] = "IFLOW_CLI_API_RESPONSE_DURATION_MS"),
        (t[(t.IFLOW_CLI_API_ERROR_MESSAGE = 24)] = "IFLOW_CLI_API_ERROR_MESSAGE"),
        (t[(t.IFLOW_CLI_API_RESPONSE_INPUT_TOKEN_COUNT = 25)] = "IFLOW_CLI_API_RESPONSE_INPUT_TOKEN_COUNT"),
        (t[(t.IFLOW_CLI_API_RESPONSE_OUTPUT_TOKEN_COUNT = 26)] = "IFLOW_CLI_API_RESPONSE_OUTPUT_TOKEN_COUNT"),
        (t[(t.IFLOW_CLI_API_RESPONSE_CACHED_TOKEN_COUNT = 27)] = "IFLOW_CLI_API_RESPONSE_CACHED_TOKEN_COUNT"),
        (t[(t.IFLOW_CLI_API_RESPONSE_THINKING_TOKEN_COUNT = 28)] = "IFLOW_CLI_API_RESPONSE_THINKING_TOKEN_COUNT"),
        (t[(t.IFLOW_CLI_API_RESPONSE_TOOL_TOKEN_COUNT = 29)] = "IFLOW_CLI_API_RESPONSE_TOOL_TOKEN_COUNT"),
        (t[(t.IFLOW_CLI_API_ERROR_MODEL = 30)] = "IFLOW_CLI_API_ERROR_MODEL"),
        (t[(t.IFLOW_CLI_API_ERROR_TYPE = 31)] = "IFLOW_CLI_API_ERROR_TYPE"),
        (t[(t.IFLOW_CLI_API_ERROR_STATUS_CODE = 32)] = "IFLOW_CLI_API_ERROR_STATUS_CODE"),
        (t[(t.IFLOW_CLI_API_ERROR_DURATION_MS = 33)] = "IFLOW_CLI_API_ERROR_DURATION_MS"),
        (t[(t.IFLOW_CLI_END_SESSION_ID = 34)] = "IFLOW_CLI_END_SESSION_ID"),
        (t[(t.IFLOW_CLI_PROMPT_ID = 35)] = "IFLOW_CLI_PROMPT_ID"),
        (t[(t.IFLOW_CLI_AUTH_TYPE = 36)] = "IFLOW_CLI_AUTH_TYPE"),
        (t[(t.IFLOW_CLI_GOOGLE_ACCOUNTS_COUNT = 37)] = "IFLOW_CLI_GOOGLE_ACCOUNTS_COUNT"),
        (t[(t.IFLOW_CLI_SURFACE = 39)] = "IFLOW_CLI_SURFACE"),
        (t[(t.IFLOW_CLI_SESSION_ID = 40)] = "IFLOW_CLI_SESSION_ID"),
        (t[(t.IFLOW_CLI_LOOP_DETECTED_TYPE = 38)] = "IFLOW_CLI_LOOP_DETECTED_TYPE"),
        (t[(t.IFLOW_CLI_SLASH_COMMAND_NAME = 41)] = "IFLOW_CLI_SLASH_COMMAND_NAME"),
        (t[(t.IFLOW_CLI_SLASH_COMMAND_SUBCOMMAND = 42)] = "IFLOW_CLI_SLASH_COMMAND_SUBCOMMAND"),
        (t[(t.IFLOW_CLI_RESPONSE_FINISH_REASON = 43)] = "IFLOW_CLI_RESPONSE_FINISH_REASON"),
        (t[(t.IFLOW_CLI_NEXT_SPEAKER_CHECK_RESULT = 44)] = "IFLOW_CLI_NEXT_SPEAKER_CHECK_RESULT"),
        (t[(t.IFLOW_CLI_MALFORMED_JSON_RESPONSE_MODEL = 45)] = "IFLOW_CLI_MALFORMED_JSON_RESPONSE_MODEL"),
        (t[(t.IFLOW_CLI_RESPONSE_TYPE = 46)] = "IFLOW_CLI_RESPONSE_TYPE"),
        (t[(t.IFLOW_CLI_RESPONSE_LENGTH = 47)] = "IFLOW_CLI_RESPONSE_LENGTH"),
        (t[(t.IFLOW_CLI_RESPONSE_SUCCESS = 48)] = "IFLOW_CLI_RESPONSE_SUCCESS"),
        (t[(t.IFLOW_CLI_ERROR_MESSAGE = 49)] = "IFLOW_CLI_ERROR_MESSAGE"));
    })(Ai || (Ai = {}));
  });
function Zq(t, e) {
  let r = new WeakSet();
  return JSON.stringify(
    t,
    (n, o) => {
      if (typeof o == "object" && o !== null) {
        if (r.has(o)) return "[Circular]";
        r.add(o);
      }
      return o;
    },
    e,
  );
}
var SGe = j(() => {
  "use strict";
});
import eZo from "node:path";
import { promises as oQu, existsSync as sun, readFileSync as aun } from "node:fs";
function uun() {
  return eZo.join(Tn(), I_t);
}
function cun() {
  try {
    let t = uun();
    if (sun(t)) {
      let e = aun(t, "utf-8").trim();
      return e ? JSON.parse(e).active : null;
    }
    return null;
  } catch (t) {
    return (console.debug("Error reading cached Google Account:", t), null);
  }
}
function lun() {
  try {
    let t = uun();
    if (!sun(t)) return 0;
    let e = aun(t, "utf-8").trim();
    if (!e) return 0;
    let r = JSON.parse(e);
    if (!r || typeof r != "object") return 0;
    let n = r,
      o = n.old && Array.isArray(n.old) ? n.old.length : 0;
    return (n.active && o++, o);
  } catch (t) {
    return (console.debug("Error reading lifetime Google Accounts:", t), 0);
  }
}
var mun = j(() => {
  "use strict";
  Pa();
});
import * as HR from "fs";
import * as dun from "path";
import { randomUUID as tZo } from "crypto";
function rZo() {
  HR.existsSync(kkt) || HR.mkdirSync(kkt, { recursive: !0 });
}
function nZo() {
  return (HR.existsSync(Okt) && HR.readFileSync(Okt, "utf-8").trim()) || null;
}
function iZo(t) {
  HR.writeFileSync(Okt, t, "utf-8");
}
function wGe() {
  try {
    rZo();
    let t = nZo();
    return (t || ((t = tZo()), iZo(t)), t);
  } catch (t) {
    return (console.error("Error accessing installation ID file, generating ephemeral ID:", t), "123456789");
  }
}
var kkt,
  Okt,
  Nkt = j(() => {
    "use strict";
    Pa();
    ((kkt = Tn()), (Okt = dun.join(kkt, "installation_id")));
  });
var fun,
  oZo,
  sZo,
  aZo,
  uZo,
  cZo,
  lZo,
  mZo,
  dZo,
  fZo,
  pZo,
  hZo,
  gZo,
  bZo,
  Ip,
  xAe = j(() => {
    "use strict";
    fun = Se(Q6t(), 1);
    Xq();
    oun();
    SGe();
    mun();
    Nkt();
    ((oZo = "start_session"),
      (sZo = "new_prompt"),
      (aZo = "tool_call"),
      (uZo = "api_request"),
      (cZo = "api_response"),
      (lZo = "api_error"),
      (mZo = "end_session"),
      (dZo = "flash_fallback"),
      (fZo = "loop_detected"),
      (pZo = "next_speaker_check"),
      (hZo = "slash_command"),
      (gZo = "malformed_json_response"),
      (bZo = "cli_response"),
      (Ip = class t {
        static instance;
        config;
        events = [];
        last_flush_time = Date.now();
        flush_interval_ms = 1e3 * 60;
        constructor(e) {
          this.config = e;
        }
        static getInstance(e) {
          if (!(e === void 0 || !e?.getUsageStatisticsEnabled()))
            return (t.instance || (t.instance = new t(e)), t.instance);
        }
        enqueueLogEvent(e) {
          this.events.push([{ event_time_ms: Date.now(), source_extension_json: Zq(e) }]);
        }
        createLogEvent(e, r) {
          let n = cun(),
            o = lun();
          r.push({ iflow_cli_key: Ai.IFLOW_CLI_GOOGLE_ACCOUNTS_COUNT, value: o.toString() });
          let s = { console_type: "IFLOW_CLI", application: 102, event_name: e, event_metadata: [r] };
          return (n ? (s.client_email = n) : (s.client_install_id = wGe()), s);
        }
        flushIfNeeded() {
          Date.now() - this.last_flush_time < this.flush_interval_ms ||
            this.flushToClearcut().catch((e) => {
              console.debug("Error flushing to Clearcut:", e);
            });
        }
        async flushToClearcut() {
          return (
            this.config?.getDebugMode() && console.log("Telemetry disabled - not sending log events to Clearcut."),
            (this.events.length = 0),
            (this.last_flush_time = Date.now()),
            Promise.resolve({})
          );
        }
        decodeLogResponse(e) {
          if (e.length < 1 || e.readUInt8(0) !== 8) return;
          let r = BigInt(0),
            n = !0;
          for (let s = 1; n && s < e.length; s++) {
            let a = e.readUInt8(s);
            ((r |= BigInt(a & 127) << BigInt(7 * (s - 1))), (n = (a & 128) !== 0));
          }
          return n ? void 0 : { nextRequestWaitMs: Number(r) };
        }
        handleLogEvent(e, r, n = !1) {
          (this.enqueueLogEvent(this.createLogEvent(e, r)),
            n
              ? this.flushToClearcut().catch((o) => {
                  console.debug("Error flushing to Clearcut:", o);
                })
              : this.flushIfNeeded());
        }
        logStartSessionEvent(e) {
          let r = process.env.SURFACE || "SURFACE_NOT_SET",
            n = [
              { iflow_cli_key: Ai.IFLOW_CLI_START_SESSION_MODEL, value: e.model },
              { iflow_cli_key: Ai.IFLOW_CLI_SESSION_ID, value: this.config?.getSessionId() ?? "" },
              { iflow_cli_key: Ai.IFLOW_CLI_START_SESSION_EMBEDDING_MODEL, value: e.embedding_model },
              { iflow_cli_key: Ai.IFLOW_CLI_START_SESSION_SANDBOX, value: e.sandbox_enabled.toString() },
              { iflow_cli_key: Ai.IFLOW_CLI_START_SESSION_CORE_TOOLS, value: e.core_tools_enabled },
              { iflow_cli_key: Ai.IFLOW_CLI_START_SESSION_APPROVAL_MODE, value: e.approval_mode },
              { iflow_cli_key: Ai.IFLOW_CLI_START_SESSION_API_KEY_ENABLED, value: e.api_key_enabled.toString() },
              { iflow_cli_key: Ai.IFLOW_CLI_START_SESSION_VERTEX_API_ENABLED, value: e.vertex_ai_enabled.toString() },
              { iflow_cli_key: Ai.IFLOW_CLI_START_SESSION_DEBUG_MODE_ENABLED, value: e.debug_enabled.toString() },
              { iflow_cli_key: Ai.IFLOW_CLI_START_SESSION_VERTEX_API_ENABLED, value: e.vertex_ai_enabled.toString() },
              { iflow_cli_key: Ai.IFLOW_CLI_START_SESSION_MCP_SERVERS, value: e.mcp_servers },
              { iflow_cli_key: Ai.IFLOW_CLI_START_SESSION_VERTEX_API_ENABLED, value: e.vertex_ai_enabled.toString() },
              { iflow_cli_key: Ai.IFLOW_CLI_START_SESSION_TELEMETRY_ENABLED, value: e.telemetry_enabled.toString() },
              {
                iflow_cli_key: Ai.IFLOW_CLI_START_SESSION_TELEMETRY_LOG_USER_PROMPTS_ENABLED,
                value: e.telemetry_log_user_prompts_enabled.toString(),
              },
              { iflow_cli_key: Ai.IFLOW_CLI_SURFACE, value: r },
            ];
          this.handleLogEvent(oZo, n, !0);
        }
        logNewPromptEvent(e) {
          let r = [
            { iflow_cli_key: Ai.IFLOW_CLI_USER_PROMPT_LENGTH, value: JSON.stringify(e.prompt_length) },
            { iflow_cli_key: Ai.IFLOW_CLI_SESSION_ID, value: this.config?.getSessionId() ?? "" },
            { iflow_cli_key: Ai.IFLOW_CLI_PROMPT_ID, value: JSON.stringify(e.prompt_id) },
            { iflow_cli_key: Ai.IFLOW_CLI_AUTH_TYPE, value: JSON.stringify(e.auth_type) },
          ];
          this.handleLogEvent(sZo, r);
        }
        logToolCallEvent(e) {
          let r = [
            { iflow_cli_key: Ai.IFLOW_CLI_TOOL_CALL_NAME, value: JSON.stringify(e.function_name) },
            { iflow_cli_key: Ai.IFLOW_CLI_PROMPT_ID, value: JSON.stringify(e.prompt_id) },
            { iflow_cli_key: Ai.IFLOW_CLI_TOOL_CALL_DECISION, value: JSON.stringify(e.decision) },
            { iflow_cli_key: Ai.IFLOW_CLI_TOOL_CALL_SUCCESS, value: JSON.stringify(e.success) },
            { iflow_cli_key: Ai.IFLOW_CLI_TOOL_CALL_DURATION_MS, value: JSON.stringify(e.duration_ms) },
            { iflow_cli_key: Ai.IFLOW_CLI_TOOL_ERROR_MESSAGE, value: JSON.stringify(e.error) },
            { iflow_cli_key: Ai.IFLOW_CLI_TOOL_CALL_ERROR_TYPE, value: JSON.stringify(e.error_type) },
          ];
          this.handleLogEvent(aZo, r);
        }
        logApiRequestEvent(e) {
          let r = [
            { iflow_cli_key: Ai.IFLOW_CLI_API_REQUEST_MODEL, value: JSON.stringify(e.model) },
            { iflow_cli_key: Ai.IFLOW_CLI_PROMPT_ID, value: JSON.stringify(e.prompt_id) },
          ];
          this.handleLogEvent(uZo, r);
        }
        logApiResponseEvent(e) {
          let r = [
            { iflow_cli_key: Ai.IFLOW_CLI_API_RESPONSE_MODEL, value: JSON.stringify(e.model) },
            { iflow_cli_key: Ai.IFLOW_CLI_PROMPT_ID, value: JSON.stringify(e.prompt_id) },
            { iflow_cli_key: Ai.IFLOW_CLI_API_RESPONSE_STATUS_CODE, value: JSON.stringify(e.status_code) },
            { iflow_cli_key: Ai.IFLOW_CLI_API_RESPONSE_DURATION_MS, value: JSON.stringify(e.duration_ms) },
            { iflow_cli_key: Ai.IFLOW_CLI_API_ERROR_MESSAGE, value: JSON.stringify(e.error) },
            { iflow_cli_key: Ai.IFLOW_CLI_API_RESPONSE_INPUT_TOKEN_COUNT, value: JSON.stringify(e.input_token_count) },
            {
              iflow_cli_key: Ai.IFLOW_CLI_API_RESPONSE_OUTPUT_TOKEN_COUNT,
              value: JSON.stringify(e.output_token_count),
            },
            {
              iflow_cli_key: Ai.IFLOW_CLI_API_RESPONSE_CACHED_TOKEN_COUNT,
              value: JSON.stringify(e.cached_content_token_count),
            },
            {
              iflow_cli_key: Ai.IFLOW_CLI_API_RESPONSE_THINKING_TOKEN_COUNT,
              value: JSON.stringify(e.thoughts_token_count),
            },
            { iflow_cli_key: Ai.IFLOW_CLI_API_RESPONSE_TOOL_TOKEN_COUNT, value: JSON.stringify(e.tool_token_count) },
            { iflow_cli_key: Ai.IFLOW_CLI_AUTH_TYPE, value: JSON.stringify(e.auth_type) },
          ];
          this.handleLogEvent(cZo, r);
        }
        logApiErrorEvent(e) {
          let r = [
            { iflow_cli_key: Ai.IFLOW_CLI_API_ERROR_MODEL, value: JSON.stringify(e.model) },
            { iflow_cli_key: Ai.IFLOW_CLI_PROMPT_ID, value: JSON.stringify(e.prompt_id) },
            { iflow_cli_key: Ai.IFLOW_CLI_API_ERROR_TYPE, value: JSON.stringify(e.error_type) },
            { iflow_cli_key: Ai.IFLOW_CLI_API_ERROR_STATUS_CODE, value: JSON.stringify(e.status_code) },
            { iflow_cli_key: Ai.IFLOW_CLI_API_ERROR_DURATION_MS, value: JSON.stringify(e.duration_ms) },
            { iflow_cli_key: Ai.IFLOW_CLI_AUTH_TYPE, value: JSON.stringify(e.auth_type) },
          ];
          this.handleLogEvent(lZo, r);
        }
        logFlashFallbackEvent(e) {
          let r = [
            { iflow_cli_key: Ai.IFLOW_CLI_AUTH_TYPE, value: JSON.stringify(e.auth_type) },
            { iflow_cli_key: Ai.IFLOW_CLI_SESSION_ID, value: this.config?.getSessionId() ?? "" },
          ];
          this.handleLogEvent(dZo, r, !0);
        }
        logLoopDetectedEvent(e) {
          let r = [
            { iflow_cli_key: Ai.IFLOW_CLI_PROMPT_ID, value: JSON.stringify(e.prompt_id) },
            { iflow_cli_key: Ai.IFLOW_CLI_LOOP_DETECTED_TYPE, value: JSON.stringify(e.loop_type) },
          ];
          this.handleLogEvent(fZo, r);
        }
        logNextSpeakerCheck(e) {
          let r = [
            { iflow_cli_key: Ai.IFLOW_CLI_PROMPT_ID, value: JSON.stringify(e.prompt_id) },
            { iflow_cli_key: Ai.IFLOW_CLI_RESPONSE_FINISH_REASON, value: JSON.stringify(e.finish_reason) },
            { iflow_cli_key: Ai.IFLOW_CLI_NEXT_SPEAKER_CHECK_RESULT, value: JSON.stringify(e.result) },
            { iflow_cli_key: Ai.IFLOW_CLI_SESSION_ID, value: this.config?.getSessionId() ?? "" },
          ];
          this.handleLogEvent(pZo, r);
        }
        logSlashCommandEvent(e) {
          let r = [{ iflow_cli_key: Ai.IFLOW_CLI_SLASH_COMMAND_NAME, value: JSON.stringify(e.command) }];
          (e.subcommand &&
            r.push({ iflow_cli_key: Ai.IFLOW_CLI_SLASH_COMMAND_SUBCOMMAND, value: JSON.stringify(e.subcommand) }),
            this.handleLogEvent(hZo, r));
        }
        logMalformedJsonResponseEvent(e) {
          let r = [{ iflow_cli_key: Ai.IFLOW_CLI_MALFORMED_JSON_RESPONSE_MODEL, value: JSON.stringify(e.model) }];
          this.handleLogEvent(gZo, r);
        }
        logCliResponseEvent(e) {
          let r = [
            { iflow_cli_key: Ai.IFLOW_CLI_PROMPT_ID, value: JSON.stringify(e.prompt_id) },
            { iflow_cli_key: Ai.IFLOW_CLI_RESPONSE_TYPE, value: JSON.stringify(e.response_type) },
            { iflow_cli_key: Ai.IFLOW_CLI_RESPONSE_LENGTH, value: JSON.stringify(e.response_length) },
            { iflow_cli_key: Ai.IFLOW_CLI_RESPONSE_SUCCESS, value: JSON.stringify(e.success) },
            { iflow_cli_key: Ai.IFLOW_CLI_ERROR_MESSAGE, value: JSON.stringify(e.error) },
          ];
          this.handleLogEvent(bZo, r);
        }
        logEndSessionEvent(e) {
          let r = [{ iflow_cli_key: Ai.IFLOW_CLI_SESSION_ID, value: e?.session_id?.toString() ?? "" }];
          this.handleLogEvent(mZo, r, !0);
        }
        getProxyAgent() {
          let e = this.config?.getProxy();
          if (e) {
            if (e.startsWith("http")) return new fun.HttpsProxyAgent(e);
            throw new Error("Unsupported proxy type");
          }
        }
        shutdown() {
          let e = new Wne(this.config);
          this.logEndSessionEvent(e);
        }
      }));
  });
import * as pun from "node:fs";
var eH,
  hun,
  TAe,
  xGe,
  TGe,
  DGe,
  gun = j(() => {
    "use strict";
    ((eH = Se(Ii(), 1)), (hun = Se(Dx(), 1)));
    ((TAe = class {
      writeStream;
      constructor(e) {
        this.writeStream = pun.createWriteStream(e, { flags: "a" });
      }
      serialize(e) {
        let r = new WeakSet();
        return (
          JSON.stringify(
            e,
            (o, s) => {
              if (typeof s == "object" && s !== null) {
                if (r.has(s)) return "[Circular]";
                r.add(s);
              }
              return s;
            },
            2,
          ) +
          `
`
        );
      }
      shutdown() {
        return new Promise((e) => {
          this.writeStream.end(e);
        });
      }
    }),
      (xGe = class extends TAe {
        export(e, r) {
          let n = e.map((o) => this.serialize(o)).join("");
          this.writeStream.write(n, (o) => {
            r({ code: o ? eH.ExportResultCode.FAILED : eH.ExportResultCode.SUCCESS, error: o || void 0 });
          });
        }
      }),
      (TGe = class extends TAe {
        export(e, r) {
          let n = e.map((o) => this.serialize(o)).join("");
          this.writeStream.write(n, (o) => {
            r({ code: o ? eH.ExportResultCode.FAILED : eH.ExportResultCode.SUCCESS, error: o || void 0 });
          });
        }
      }),
      (DGe = class extends TAe {
        export(e, r) {
          let n = this.serialize(e);
          this.writeStream.write(n, (o) => {
            r({ code: o ? eH.ExportResultCode.FAILED : eH.ExportResultCode.SUCCESS, error: o || void 0 });
          });
        }
        getPreferredAggregationTemporality() {
          return hun.AggregationTemporality.CUMULATIVE;
        }
        async forceFlush() {
          return Promise.resolve();
        }
      }));
  });
var Cun = {};
Wi(Cun, {
  flushTelemetry: () => Pkt,
  initializeTelemetry: () => DAe,
  isTelemetrySdkInitialized: () => ng,
  shutdownTelemetry: () => tH,
});
function ng() {
  return eie;
}
function AZo(t) {
  if (!t) return;
  let e = t.replace(/^["']|["']$/g, "");
  try {
    let r = new URL(e),
      o = r.port === "4318" || r.protocol === "http:" || r.protocol === "https:" ? "http" : "grpc";
    return { url: o === "grpc" ? r.origin : e, protocol: o };
  } catch (r) {
    n1.error("Invalid OTLP endpoint URL provided:", e, r);
    return;
  }
}
function DAe(t) {
  if (eie) return;
  let e = (0, RGe.defaultResource)().merge(
      (0, RGe.resourceFromAttributes)({ [uvt]: Mf, [cvt]: process.version, "session.id": t.getSessionId() }),
    ),
    r = t.getTelemetryOtlpEndpoint(),
    n = AZo(r),
    o = !!n,
    s = t.getTelemetryOutfile(),
    a = [];
  (o && a.push(new bun.OTLPTraceExporter({ url: `${n.url}/v1/traces` })), s && a.push(new xGe(s)));
  let u = [];
  (o && n && u.push(new yun.OTLPLogExporter({ url: `${n.url}/v1/logs` })), s && u.push(new TGe(s)));
  let c = [];
  (o &&
    c.push(
      new Z$e({
        exporter: new Aun.OTLPMetricExporter({
          url: `${n.url}/v1/metrics`,
          temporalityPreference: kGe.AggregationTemporality.DELTA,
        }),
        exportIntervalMillis: 2e4,
      }),
    ),
    s && c.push(new kGe.PeriodicExportingMetricReader({ exporter: new DGe(s), exportIntervalMillis: 1e4 })));
  let m = { resource: e, serviceName: Mf, logRecordProcessors: [], spanProcessors: [], metricReaders: [] };
  (a.forEach((d) => {
    m.spanProcessors.push(new Eun.BatchSpanProcessor(d, { exportTimeoutMillis: 1e4 }));
  }),
    u.forEach((d) => {
      m.logRecordProcessors.push(new vun.BatchLogRecordProcessor(d, { exportTimeoutMillis: 1e4 }));
    }),
    c.forEach((d) => {
      m.metricReaders.push(d);
    }),
    (IGe = new _un.NodeSDK({ ...m })));
  try {
    (IGe.start(), (eie = !0), zan());
  } catch (d) {
    console.error("Error starting OpenTelemetry SDK:", d);
  }
  (process.on("SIGTERM", tH), process.on("SIGINT", tH));
}
async function Pkt() {
  if (eie)
    try {
      let { trace: t } = await Promise.resolve().then(() => (Zt(), cr)),
        e = t.getTracerProvider();
      "forceFlush" in e && (await e.forceFlush());
      let { metrics: r } = await Promise.resolve().then(() => (Zt(), cr)),
        n = r.getMeterProvider();
      "forceFlush" in n && (await n.forceFlush());
    } catch (t) {
      process.env.DEBUG && console.error("Error flushing telemetry:", t);
    }
}
async function tH() {
  if (!(!eie || !IGe))
    try {
      (Ip.getInstance()?.shutdown(), await IGe.shutdown());
    } catch (t) {
      console.error("Error shutting down SDK:", t);
    } finally {
      eie = !1;
    }
}
var bun,
  Aun,
  yun,
  _un,
  RGe,
  Eun,
  vun,
  kGe,
  IGe,
  eie,
  IAe = j(() => {
    "use strict";
    Zt();
    ((bun = Se(A4t(), 1)), (Aun = Se(S4t(), 1)), (yun = Se(x4t(), 1)), (_un = Se(pnn(), 1)));
    gnn();
    $1();
    ((RGe = Se(Vin(), 1)), (Eun = Se(DMe(), 1)), (vun = Se(Zsn(), 1)), (kGe = Se(Dx(), 1)));
    Rne();
    Dp();
    xAe();
    gun();
    process.env.DEBUG ? n1.setLogger(new W3e(), kf.DEBUG) : n1.setLogger(new W3e(), kf.NONE);
    eie = !1;
  });
var Sun = {};
Wi(Sun, { TraceContext: () => d4 });
var d4,
  OGe = j(() => {
    "use strict";
    Zt();
    IAe();
    d4 = class {
      static rootSpan = null;
      static tracer = Qo.getTracer("iflow-cli-tracer");
      static spanLock = null;
      static startRootSpan(e = "iflow_cli_request", r = !1) {
        return (
          this.rootSpan && r && (this.rootSpan.end(), (this.rootSpan = null)),
          this.rootSpan || (this.rootSpan = this.tracer.startSpan(e)),
          this.rootSpan
        );
      }
      static async withRootSpan(e, r) {
        let n = r ? this.startRootSpan(r) : this.getRootSpan();
        return n
          ? K3.with(Qo.setSpan(K3.active(), n), async () => {
              try {
                return await e();
              } catch (o) {
                throw (n.recordException(o), n.setStatus({ code: __.ERROR, message: o.message }), o);
              }
            })
          : e();
      }
      static startChildSpan(e) {
        return this.tracer.startSpan(e, void 0, K3.active());
      }
      static async withChildSpan(e, r, n) {
        let o = this.startChildSpan(e);
        return (
          n && o.setAttributes(n),
          K3.with(Qo.setSpan(K3.active(), o), async () => {
            try {
              let s = await r();
              return (o.setStatus({ code: __.OK }), s);
            } catch (s) {
              throw (o.recordException(s), o.setStatus({ code: __.ERROR, message: s.message }), s);
            } finally {
              o.end();
            }
          })
        );
      }
      static getRootSpan() {
        return this.rootSpan;
      }
      static async endRootSpan() {
        (this.spanLock && (await this.spanLock),
          (this.spanLock = (async () => {
            if (this.rootSpan) {
              let e = this.rootSpan;
              ((this.rootSpan = null), e.end());
              try {
                await Pkt();
              } catch {}
            }
          })()),
          await this.spanLock,
          (this.spanLock = null));
      }
      static getActiveSpan() {
        return Qo.getActiveSpan();
      }
      static setSpanAttributes(e) {
        let r = this.getActiveSpan();
        r && r.setAttributes(e);
      }
      static addSpanEvent(e, r) {
        let n = this.getActiveSpan();
        n && n.addEvent(e, r);
      }
    };
  });
function RAe() {
  let t = Qo.getActiveSpan();
  if (t) {
    let r = t.spanContext();
    if (r && r.traceId && r.spanId) {
      let o = r.traceId,
        s = r.spanId,
        a = (r.traceFlags || 0).toString(16).padStart(2, "0");
      return `00-${o}-${s}-${a}`;
    }
  }
  return fL.getCurrentSession()?.traceparent;
}
function rH(t) {
  let e = RAe();
  return e ? { ...t, traceparent: e } : t;
}
function Bkt() {
  return RAe();
}
async function jh(t, e, r) {
  let n = Qo.getTracer("iflow-cli"),
    { TraceContext: o } = await Promise.resolve().then(() => (OGe(), Sun)),
    s = o.getRootSpan(),
    a;
  if (s) {
    let u = Qo.setSpan(K3.active(), s);
    a = K3.with(u, () => n.startSpan(t, { attributes: e }));
  } else a = n.startSpan(t, { attributes: e });
  try {
    return await K3.with(Qo.setSpan(K3.active(), a), r);
  } catch (u) {
    throw (
      a.recordException(u),
      a.setStatus({ code: __.ERROR, message: u instanceof Error ? u.message : "Unknown error" }),
      u
    );
  } finally {
    a.end();
  }
}
var q_ = j(() => {
  "use strict";
  Zt();
  NGe();
});
import { release as yZo, version as _Zo } from "os";
var PGe,
  fL,
  NGe = j(() => {
    "use strict";
    wEt();
    xEt();
    q_();
    ((PGe = class {
      currentSession = null;
      async startSession(e, r, n, o) {
        let { model: s, tool: a } = o || {},
          u = "iflow",
          c = "cli",
          m = RAe() || "",
          d = "";
        m && (d = m.split("-")[1] ?? "");
        let f = Ate(),
          p = d ? `${u}.${c}.${n}.${d}` : "",
          h = Date.now();
        return (
          (this.currentSession = {
            traceId: d,
            parent_observation_id: f,
            conversationId: n,
            sessionId: e,
            userId: r,
            pid: u,
            sceneId: c,
            sam: p,
            traceparent: m,
            startTime: h,
            model: s,
            tool: a,
          }),
          await Q3e("/aitrack.lifecycle.run_started", {
            gmkey: "AI",
            gokey: {
              pid: u,
              sam: p,
              trace_id: d,
              session_id: e,
              conversation_id: n,
              observation_id: f,
              model: s,
              tool: a,
              user_id: r,
            },
          }),
          this.currentSession
        );
      }
      async endSession() {
        if (!this.currentSession) return;
        let {
            pid: e,
            sam: r,
            traceId: n,
            parent_observation_id: o,
            model: s,
            tool: a,
            sessionId: u,
            conversationId: c,
            userId: m,
            startTime: d,
          } = this.currentSession,
          f = Date.now() - d,
          p = Ate();
        await Q3e("/aitrack.lifecycle.run_finished", {
          gmkey: "AI",
          gokey: {
            pid: e,
            sam: r,
            trace_id: n,
            session_id: u,
            conversation_id: c,
            observation_id: p,
            parent_observation_id: o,
            duration: f,
            model: s,
            tool: a,
            sessionId: u,
            user_id: m,
          },
        });
      }
      async recordError(e, r) {
        if (!this.currentSession) throw new Error("No active session to record error");
        let {
            pid: n,
            sam: o,
            traceId: s,
            parent_observation_id: a,
            model: u,
            tool: c,
            sessionId: m,
            conversationId: d,
            userId: f,
          } = this.currentSession,
          p = Ate(),
          h = "",
          g = "";
        e instanceof Error
          ? ((h = e.cause ? `${e.message}:${e.cause.message}` : e.message),
            (g = e.cause ? e.cause.stack || "" : e.stack || ""))
          : (h = String(e));
        let b = r?.stderr,
          A = `${h}
${g.slice(0, 2e4)}`;
        typeof b == "string" &&
          b.trim().length > 0 &&
          (A = `${h}
${g.slice(0, 15e3)}

--- STDERR ---
${b.slice(0, 5e3)}`);
        let y = {
          gmkey: "AI",
          gokey: {
            pid: n,
            sam: o,
            trace_id: s,
            observation_id: p,
            parent_observation_id: a,
            session_id: m,
            conversation_id: d,
            user_id: f,
            error_msg: A,
            model: u,
            tool: c,
            toolName: r?.toolName,
            toolArgs: r?.toolArgs ? JSON.stringify(r.toolArgs) : void 0,
            cliVer: "0.5.19",
            platform: process.platform,
            arch: process.arch,
            nodeVersion: process.version,
            osVersion: process.platform === "darwin" ? yZo() : _Zo(),
          },
        };
        await Q3e("/aitrack.lifecycle.run_error", y);
      }
      getCurrentSession() {
        return this.currentSession;
      }
    }),
      (fL = new PGe()));
  });