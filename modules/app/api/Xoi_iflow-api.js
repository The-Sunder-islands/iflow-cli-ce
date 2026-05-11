/**
 * @module Xoi
 * @category app/api
 * @label iflow-api
 * @position 1614 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Xoi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class extends, class extends, class t extends Li, class extends, class extends, class t extends Li, class t extends Li, class t extends Li, class t extends Li, class t extends Li, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends
 * Functions: P, i5a, c5a, fai, t0e, K, V0r, Asi, tmr, zsi, m0e, wat, bsi, omr, Q
 * Features: esbuild module exports: Xoi, CONTAINS iflow.cn API references, dotenv related, telemetry/OTLP, agent/subagent
 * === End semantic info ===
 */


import tat from "node:os";
import { spawn as PAa } from "node:child_process";

/**
 * Extract root command names from a shell command string.
 * Replaces tree-sitter bash parser — no WASM, no dynamic imports.
 * Supports bash/zsh/fish/powershell syntax.
 */
function extractCommands(t) {
  if (!t || !t.trim()) return [];
  // Remove shell -c wrappers
  t = t.replace(/^(?:sh|bash|zsh|fish)\s+-c\s*/i, "").replace(/^(?:cmd\.exe)\s+\/c\s*/i, "");
  t = t.replace(/^(?:powershell(?:\.exe)?|pwsh(?:\.exe)?)\s+(?:-NoProfile\s+)?-Command\s+/i, "");
  t = t.trim();
  // Remove outer quotes
  if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) t = t.slice(1, -1);
  // Split by shell separators: && || | ; > <
  var segs = t.split(/&&|\|\||\||;|>|<|\n/);
  var names = [];
  for (var i = 0; i < segs.length; i++) {
    var s = segs[i].trim();
    if (!s) continue;
    // Strip leading operators: $, (, {, test, time
    s = s.replace(/^\$|^\(|^\{|^test\s+|^time\s+/i, "").trim();
    // Get first word (command name)
    var first = s.split(/\s+/)[0];
    if (first) names.push(first);
  }
  return names;
}

var rsi;
function vY() {
  if (rsi()) {
    let t = process.env.ComSpec;
    if (t) {
      let e = t.toLowerCase();
      if (e.endsWith("powershell.exe") || e.endsWith("pwsh.exe"))
        return {
          executable: t,
          argsPrefix: ["-NoProfile", "-Command"],
          shell: "powershell",
          isPowerShell7: e.endsWith("pwsh.exe"),
        };
    }
    return {
      executable: "powershell.exe",
      argsPrefix: ["-NoProfile", "-Command"],
      shell: "powershell",
      isPowerShell7: !1,
    };
  }
  return { executable: "bash", argsPrefix: ["-c"], shell: "bash" };
}
function VAa(t, e) {
  if (!t) return "";
  switch (e) {
    case "powershell":
      return `'${t.replace(/'/g, "''")}'`;
    case "cmd":
      return `"${t.replace(/"/g, '""')}"`;
    case "bash":
    default:
      return (0, Zoi.quote)([t]);
  }
}
function iat(t) {
  let e =
      /^\s*(?:(?:sh|bash|zsh)\s+-c|cmd\.exe\s+\/c|powershell(?:\.exe)?\s+(?:-NoProfile\s+)?-Command|pwsh(?:\.exe)?\s+(?:-NoProfile\s+)?-Command)\s+/i,
    r = t.match(e);
  if (r) {
    let n = t.substring(r[0].length).trim();
    return (
      ((n.startsWith('"') && n.endsWith('"')) || (n.startsWith("'") && n.endsWith("'"))) &&
        (n = n.substring(1, n.length - 1)),
      n
    );
  }
  return t.trim();
}
function oat(t, e, r) {
  let n = extractCommands(t),
    o = (f) => f.trim().replace(/\s+/g, " "),
    s;
  s = [o(t)];
  let a = e.getExcludeTools() || [];
  if (cv.some((f) => a.includes(f)))
    return {
      allAllowed: !1,
      disallowedCommands: s,
      blockReason: "Shell tool is globally disabled in configuration",
      isHardDenial: !0,
    };
  for (let f of s)
    if (_Y("run_shell_command", { params: { command: f } }, [...a]))
      return {
        allAllowed: !1,
        disallowedCommands: [f],
        blockReason: `Command '${f}' is blocked by configuration`,
        isHardDenial: !0,
      };
  let c = e.getCoreTools() || [];
  if (cv.some((f) => c.includes(f))) return { allAllowed: !0, disallowedCommands: [] };
  let d = [];
  if (r) {
    let f = new Set([...r].flatMap((p) => cv.map((h) => `${h}(${p})`)));
    for (let p of s)
      _Y("run_shell_command", { params: { command: p } }, [...f]) ||
        _Y("run_shell_command", { params: { command: p } }, c) ||
        d.push(p);
    if (d.length > 0)
      return {
        allAllowed: !1,
        disallowedCommands: d,
        blockReason: `Command(s) not on the global or session allowlist. Disallowed commands: ${d.map((p) => JSON.stringify(p)).join(", ")}`,
        isHardDenial: !1,
      };
  } else if (c.filter((p) => cv.some((h) => p.startsWith(`${h}(`))).length > 0) {
    for (let p of s) _Y("run_shell_command", { params: { command: p } }, c) || d.push(p);
    if (d.length > 0)
      return {
        allAllowed: !1,
        disallowedCommands: d,
        blockReason: `Command(s) not in the allowed commands list. Disallowed commands: ${d.map((p) => JSON.stringify(p)).join(", ")}`,
        isHardDenial: !1,
      };
  }
  return { allAllowed: !0, disallowedCommands: [] };
}
function R0r(t, e) {
  let { allAllowed: r, blockReason: n } = oat(t, e);
  return r ? { allowed: !0 } : { allowed: !1, reason: n };
}
function KAa(t, e) {
  if (!e.length) return !1;
  let r = e.some((m) => cv.includes(m)),
    n = e.some((m) => cv.some((d) => m.startsWith(`${d}(`)));
  if (!r && !n) return !1;
  if (r) return !0;
  if (!("params" in t) || typeof t.params != "object" || t.params === null || !("command" in t.params)) return !1;
  let o = t.params.command;
  if (typeof o != "string" || !o.trim()) return !1;
  let s = o.trim(),
    a = XCe(s);
  if (!a || a.hasError) return !1;
  let u = (m) => m.trim().replace(/\s+/g, " "),
    c = a.details.map((m) => u(m.text)).filter(Boolean);
  return c.length === 0 ? !1 : c.every((m) => _Y(cv[0], { params: { command: m } }, e));
}
function k0r(t) {
  return (
    (tat.constants?.signals && Object.keys(tat.constants.signals).find((r) => tat.constants.signals[r] === t)) || null
  );
}
var Zoi,
  cv,
  rsi,
  YAa,
  Kle = j(() => {
    "use strict";
    Zoi = Se(f9e(), 1);
    y0r();
    Koi();
    dS();
    ((cv = ["run_shell_command", "ShellTool"]),
(rsi = () => tat.platform() === "win32"));
    YAa = (t, e, r) =>
      new Promise((n, o) => {
        let s = PAa(t, e, r),
          a = "",
          u = "";
        (s.stdout.on("data", (c) => {
          a += c.toString();
        }),
          s.stderr.on("data", (c) => {
            u += c.toString();
          }),
          s.on("close", (c) => {
            c === 0
              ? n({ stdout: a, stderr: u })
              : o(
                  new Error(`Command failed with exit code ${c}:
${u}`),
                );
          }),
          s.on("error", (c) => {
            o(c);
          }));
      });
  });
import { spawn as nsi } from "child_process";
import { TextDecoder as isi } from "util";
import Zle from "os";
import ZCe from "fs";
import sat from "path";
function usi(t, e) {
  return e !== "bash" || t.trimStart().startsWith(asi) ? t : `${asi} ${t}`;
}
function N0r(t) {
  let e = t.toLowerCase();
  try {
    let r = new isi(e);
    return { encoding: e, write: (n) => r.decode(n, { stream: !0 }), flush: () => r.decode() };
  } catch {
    if (P0r.default.encodingExists(e)) {
      let n = P0r.default.getDecoder(e, { stripBOM: !1 });
      return { encoding: e, write: (o) => n.write(o), flush: () => n.end() ?? "" };
    }
    let r = new isi(ssi);
    return { encoding: ssi, write: (n) => r.decode(n, { stream: !0 }), flush: () => r.decode() };
  }
}
function e2a() {
  if (e4e !== void 0) return e4e;
  try {
    return ((e4e = lsi.default), e4e);
  } catch {
    return ((e4e = null), null);
  }
}
function t2a(t) {
  let e = t.buffer.active,
    r = [];
  for (let n = 0; n < e.length; n++) {
    let o = e.getLine(n);
    r.push(o ? o.translateToString() : "");
  }
  return r
    .join(
      `
`,
    )
    .trimEnd();
}
function aat(t) {
  return t.reduce((e, r) => e + r.length, 0);
}
function csi(t, e, r) {
  let n = e.length,
    s = t.length + n;
  if (s <= r) return { newBuffer: t + e, truncated: !1 };
  if (n >= r) return { newBuffer: e.substring(n - r), truncated: !0 };
  let a = s - r;
  return { newBuffer: t.substring(a) + e, truncated: !0 };
}
var P0r,
  lsi,
  JAa,
  XAa,
  osi,
  ssi,
  O0r,
  ZAa,
  asi,
  e4e,
  HO,
  B0r = j(() => {
    "use strict";
    s_();
    ((P0r = Se(uoi(), 1)), (lsi = Se(loi(), 1)));
    b0r();
    Yst();
    Roi();
    Ooi();
    Kle();
    ((JAa = 200),
      (XAa = 120 * 1e3),
      (osi = 4096),
      (ssi = "utf-8"),
      (O0r = 16 * 1024 * 1024),
      (ZAa = "promptvars nullglob extglob nocaseglob dotglob"),
      (asi = `shopt -u ${ZAa};`));
    HO = class {
      static activePtys = new Map();
      static async execute(e, r, n, o, s = XAa, a = !1, u = {}) {
        if (a) {
          let c = await this.executeWithPty(e, r, n, o, s, u);
          if (c) return c;
        }
        return this.executeWithChildProcess(e, r, n, o, s, u);
      }
      static async executeWithChildProcess(e, r, n, o, s, a) {
        let u = Zle.platform() === "win32",
          { executable: c, argsPrefix: m, shell: d } = vY(),
          f = usi(e, d),
          p = [...m, f],
          h = a?.run_in_bg && a?.processMode === "DETACHED",
          g,
          b,
          A,
          y;
        if (h) {
          let D = sat.join(Zle.tmpdir(), "iflow-detached-processes");
          ZCe.mkdirSync(D, { recursive: !0 });
          let O = Date.now(),
            N = sat.basename(r).replace(/[^a-zA-Z0-9]/g, "_");
          ((g = sat.join(D, `${O}-${N}-stdout.log`)),
            (b = sat.join(D, `${O}-${N}-stderr.log`)),
            (A = ZCe.openSync(g, "w")),
            (y = ZCe.openSync(b, "w")));
        }
        let v = nsi(c, p, {
          cwd: r,
          stdio: h ? ["ignore", A, y] : ["ignore", "pipe", "pipe"],
          windowsVerbatimArguments: u ? !1 : void 0,
          shell: !1,
          detached: !u && h,
          env: {
            ...process.env,
            IFLOW_CLI: "1",
            TERM: "xterm-256color",
            PAGER: "cat",
            ...(u ? { PYTHONIOENCODING: "utf-8" } : {}),
          },
        });
        a?.run_in_bg &&
          a?.processMode === "DETACHED" &&
          (v.unref(), h && (A !== void 0 && ZCe.closeSync(A), y !== void 0 && ZCe.closeSync(y)));
        let C = !1,
          x,
          k = () => {
            x && (clearTimeout(x), (x = void 0));
          },
          R = async () => {
            if (v.pid && !C)
              if (u) nsi("taskkill", ["/pid", v.pid.toString(), "/f", "/t"]);
              else
                try {
                  (process.kill(-v.pid, "SIGTERM"),
                    await new Promise((D) => setTimeout(D, JAa)),
                    C || process.kill(-v.pid, "SIGKILL"));
                } catch {
                  C || v.kill("SIGKILL");
                }
            k();
          };
        o.addEventListener("abort", R, { once: !0 });
        let P = new Promise((D) => {
          let O = null,
            N = null,
            F = "",
            B = "",
            L = !1,
            G = !1,
            Q = [],
            K = null,
            H = !0,
            U = 0;
          a?.run_in_bg ||
            (x = setTimeout(() => {
              (C || ((K = new Error(`Command timed out after ${s / 1e3} seconds`)), R()), (x = void 0));
            }, s));
          let Y = (X, J) => {
            if ((Q.push(X), H && U < osi)) {
              let q = Buffer.concat(Q.slice(0, 20));
              if (((U = q.length), Yle(q))) {
                ((H = !1), n({ type: "binary_detected" }));
                let ne = aat(Q);
                n({ type: "binary_progress", bytesReceived: ne });
                return;
              }
            }
            if (H) {
              if (J === "stdout" && !O) {
                let ye = Zle.platform() === "win32" ? "utf-8" : WCe(X);
                O = N0r(ye);
              }
              if (J === "stderr" && !N) {
                let ye = Zle.platform() === "win32" ? "utf-8" : WCe(X);
                N = N0r(ye);
              }
              let ne = (J === "stdout" ? O : N)?.write(X) ?? "",
                de = p0(ne);
              if (((de = de.replace(/\r/g, "")), J === "stdout")) {
                let { newBuffer: ce, truncated: ye } = csi(F, de, O0r);
                ((F = ce), ye && (L = !0));
              } else {
                let { newBuffer: ce, truncated: ye } = csi(B, de, O0r);
                ((B = ce), ye && (G = !0));
              }
              n({ type: "data", stream: J, chunk: de });
            } else {
              let q = aat(Q);
              n({ type: "binary_progress", bytesReceived: q });
            }
          };
          (h || (v.stdout?.on("data", (X) => Y(X, "stdout")), v.stderr?.on("data", (X) => Y(X, "stderr"))),
            v.on("error", (X) => {
              K = X;
            }),
            v.on("exit", (X, J) => {
              if (((C = !0), k(), o.removeEventListener("abort", R), O)) {
                let de = O.flush();
                de && (F += p0(de));
              }
              if (N) {
                let de = N.flush();
                de && (B += p0(de));
              }
              let q = Buffer.concat(Q),
                ne =
                  F +
                  (B
                    ? `
${B}`
                    : "");
              if (L || G) {
                let de = `
[IFLOW_CLI_WARNING: Output truncated. The buffer is limited to ${O0r / 1048576}MB.]`;
                ne += de;
              }
              D({
                rawOutput: q,
                output: ne,
                stdout: F,
                stderr: B,
                exitCode: X,
                signal: J ?? null,
                error: K,
                aborted: o.aborted,
                pid: v.pid,
                executionMethod: "child_process",
              });
            }));
        });
        return { pid: v.pid, result: P, abort: R, stdoutLogPath: h ? g : void 0, stderrLogPath: h ? b : void 0 };
      }
      static async executeWithPty(e, r, n, o, s, a) {
        let u = await Ioi();
        if (!u) return null;
        let c = a?.terminalWidth ?? 80,
          m = a?.terminalHeight ?? 30,
          d = a?.pager ?? "cat",
          f = a?.showColor ?? !1,
          h = e2a()?.Terminal,
          g = Zle.platform() === "win32",
          { executable: b, argsPrefix: A, shell: y } = vY(),
          E = usi(e, y),
          v = [...A, E],
          C;
        h && ((C = new h({ allowProposedApi: !0, cols: c, rows: m })), C.scrollToTop());
        let x = u.module.spawn(b, v, {
          cwd: r,
          name: "xterm",
          cols: c,
          rows: m,
          env: {
            ...process.env,
            IFLOW_CLI: "1",
            TERM: "xterm-256color",
            PAGER: d,
            ...(g ? { PYTHONIOENCODING: "utf-8" } : {}),
          },
          handleFlowControl: !0,
          encoding: null,
        });
        x.pid && this.activePtys.set(x.pid, { ptyProcess: x, terminal: C });
        let k = !1,
          R,
          P = () => {
            R && (clearTimeout(R), (R = void 0));
          },
          D = () => {
            if (x.pid && !k)
              try {
                g ? x.kill() : process.kill(-x.pid, "SIGTERM");
              } catch {
                x.kill();
              }
            P();
          },
          O = new Promise((N) => {
            let F = null,
              B = [],
              L = "",
              G = "",
              Q = null,
              K = !0,
              H = 0;
            R = setTimeout(() => {
              if (!k && ((Q = new Error(`Command timed out after ${s / 1e3} seconds`)), x.pid))
                try {
                  g ? x.kill() : process.kill(-x.pid, "SIGKILL");
                } catch {
                  x.kill("SIGKILL");
                }
              R = void 0;
            }, s);
            let U = (Y) => {
              if ((B.push(Y), K && H < osi)) {
                let X = Buffer.concat(B.slice(0, 20));
                if (((H = X.length), Yle(X))) {
                  ((K = !1), n({ type: "binary_detected" }));
                  let J = aat(B);
                  n({ type: "binary_progress", bytesReceived: J });
                  return;
                }
              }
              if (K) {
                if (!F) {
                  let ne = Zle.platform() === "win32" ? "utf-8" : WCe(Y);
                  F = N0r(ne);
                }
                let X = F.write(Y);
                C && C.write(X);
                let J = p0(X);
                ((J = J.replace(/\r/g, "")), J && ((L += J), n({ type: "data", stream: "stdout", chunk: J })));
              } else {
                let X = aat(B);
                n({ type: "binary_progress", bytesReceived: X });
              }
            };
            (x.onData((Y) => {
              let X = typeof Y == "string" ? Buffer.from(Y, "utf8") : Y;
              U(X);
            }),
              x.onExit((Y) => {
                ((k = !0), P(), o.removeEventListener("abort", D), this.activePtys.delete(x.pid));
                let X = "";
                F && ((X = F.flush()), X && (C && C.write(X), (L += p0(X))));
                let J = Buffer.concat(B),
                  q = L,
                  ne;
                if (C) {
                  let de = t2a(C);
                  ((de || !L) && (q = de), f && (ne = koi(C)));
                }
                N({
                  rawOutput: J,
                  output: q,
                  stdout: q,
                  stderr: G,
                  terminalOutput: ne,
                  exitCode: Y.exitCode ?? null,
                  signal: Y.signal ? k0r(Y.signal) : null,
                  error: Q,
                  aborted: o.aborted,
                  pid: x.pid,
                  executionMethod: "pty",
                });
              }),
              o.addEventListener("abort", D, { once: !0 }));
          });
        return { pid: x.pid, result: O, abort: D };
      }
      static writeToPty(e, r) {
        let n = this.activePtys.get(e);
        n && n.ptyProcess.write(r);
      }
      static resizePty(e, r, n) {
        let o = this.activePtys.get(e);
        if (o)
          try {
            (o.ptyProcess.resize?.(r, n), o.terminal?.resize(r, n));
          } catch {}
      }
      static scrollPty(e, r) {
        let n = this.activePtys.get(e);
        if (n?.terminal)
          try {
            (n.terminal.scrollLines(r), n.terminal.buffer.active.viewportY < 0 && n.terminal.scrollToTop());
          } catch {}
      }
      static isPtyActive(e) {
        try {
          return process.kill(e, 0);
        } catch {
          return !1;
        }
      }
    };
  });
var L0r,
  M0r = j(() => {
    "use strict";
    L0r = (t) => {
      let e = t / 1073741824;
      return t < 1048576
        ? `${(t / 1024).toFixed(1)} KB`
        : t < 1073741824
          ? `${(t / 1048576).toFixed(1)} MB`
          : `${e.toFixed(2)} GB`;
    };
  });
import { EventEmitter as r2a } from "node:events";
import msi from "fs";
function uat(t) {
  return t.exitCode === void 0;
}
function e0e(t) {
  return typeof t.exitCode == "number";
}
var F0r,
  n2a,
  a3,
  cat = j(() => {
    "use strict";
    ((F0r = class extends r2a {
      pools = new Map();
      add(e, r) {
        this.pools.set(`${e}`, r);
      }
      get(e) {
        return this.pools.get(`${e}`);
      }
      getAll() {
        return [...this.pools].map((e) => [e[0], e[1]]);
      }
      kill(e, r, n) {
        let o = this.pools.get(`${e}`);
        if (o && uat(o)) {
          let s = {
            command: o.command,
            cwd: o.cwd,
            exitCode: r,
            stdout: n?.stdout || o.stdout(),
            stderr: n?.stderr || o.stderr(),
          };
          (this.pools.set(`${e}`, s),
            o.abort?.(),
            o.processMode === "DETACHED" && this.cleanupDetachedLogs(o),
            this.emit("killed", { ...s, pid: e }));
        }
      }
      cleanupDetachedLogs(e) {
        if ("stdoutLogPath" in e && e.stdoutLogPath)
          try {
            msi.unlinkSync(e.stdoutLogPath);
          } catch {}
        if ("stderrLogPath" in e && e.stderrLogPath)
          try {
            msi.unlinkSync(e.stderrLogPath);
          } catch {}
      }
      killAll() {
        this.getAll().forEach(([e, r]) => {
          if (uat(r)) {
            if (r.processMode === "DETACHED") {
              console.log(`[ShellManager] Skipping termination of ${r.processMode} process ${e}: ${r.command}`);
              return;
            }
            this.kill(e, 2, { stdout: r.stdout(), stderr: r.stderr() });
          } else "processMode" in r && r.processMode === "DETACHED" && this.cleanupDetachedLogs(r);
        });
      }
      exit() {
        (this.killAll(), this.pools.clear());
      }
    }),
      (n2a = new F0r()),
      (a3 = n2a));
  });
import dsi from "path";
import $0r from "os";
import fsi from "fs";
function t4e(t) {
  if (!t || t.length <= lat) return t;
  let r = t.substring(0, lat).split(`
`);
  return (
    r.length > 1 && r.pop(),
    r.join(`
`) +
      `
... (output truncated, ` +
      (t.length - lat) +
      " characters omitted)"
  );
}
function i2a() {
  let t =
    "\n      Usage notes:\n      - The command argument is required.\n      - It is very helpful if you write a clear, concise description of what this command does in 5-10 words.\n      - You can use the `run_in_bg` parameter to run the command in the background, which allows you to continue working while the command runs. You can monitor the output using the BashOutput tool as it becomes available. You do not need to use '&' at the end of the command when using this parameter.\n      \n      The following information is returned:\n\n      Command: Executed command.\n      Directory: Directory where command was executed, or `(root)`.\n      Stdout: Output on stdout stream. Can be `(empty)` or partial on error and for any unwaited background processes.\n      Stderr: Output on stderr stream. Can be `(empty)` or partial on error and for any unwaited background processes.\n      Error: Error or `(none)` if no error was reported for the subprocess.\n      Exit Code: Exit code or `(none)` if terminated by signal.\n      Signal: Signal number or `(none)` if no signal was received.\n      Background PIDs: List of background processes started or `(none)`.\n      Process Group PGID: Process group started or `(none)`";
  return $0r.platform() === "win32"
    ? `This tool executes a given shell command as \`powershell.exe -NoProfile -Command <command>\`. Command can start background processes using PowerShell constructs such as \`Start-Process -NoNewWindow\` or \`Start-Job\`.${t}`
    : `This tool executes a given shell command as \`bash -c <command>\`. Command is executed as a subprocess that leads its own process group. Command process group can be terminated as \`kill -- -PGID\` or signaled as \`kill -s SIGNAL -- -PGID\`.${t}`;
}
function o2a() {
  return $0r.platform() === "win32"
    ? "Exact command to execute as `powershell.exe -NoProfile -Command <command>`"
    : "Exact bash command to execute as `bash -c <command>`";
}
var U0r,
  lat,
  Wu,
  CY = j(() => {
    "use strict";
    bi();
    Fc();
    Bb();
    Ba();
    Bp();
    E0();
    Cii();
    B0r();
    M0r();
    Kle();
    cat();
    ((U0r = 1e3), (lat = 2e3));
    Wu = class t extends Li {
      config;
      static Name = "run_shell_command";
      static DisplayName = "Shell";
      allowlist = new Set();
      static ExecutionError = class extends Error {
        type;
        constructor(e, r) {
          (super(r), (this.type = e), (this.name = "ShellToolExecutionError"));
        }
      };
      constructor(e) {
        (super(
          t.Name,
          t.DisplayName,
          i2a(),
          Mi.Terminal,
          Fi.Execute,
          {
            type: Dt.OBJECT,
            properties: {
              command: { type: Dt.STRING, description: o2a() },
              description: {
                type: Dt.STRING,
                description:
                  "Brief description of the command for the user. Be specific and concise. Ideally a single sentence. Can be up to 3 sentences for clarity. No line breaks.",
              },
              run_in_bg: {
                type: Dt.BOOLEAN,
                description:
                  "Set to true to run this command in the background. Use BashOutput to read the output later.",
              },
              dir_path: {
                type: Dt.STRING,
                description:
                  "(OPTIONAL) The path of the directory to run the command in. If not provided, the project root directory is used. Must be a directory within the workspace and must already exist.",
              },
              timeout: {
                type: Dt.NUMBER,
                description:
                  "(OPTIONAL) Timeout in seconds for the command execution. If not provided, uses the default timeout of 120s.",
              },
            },
            required: ["command"],
          },
          !1,
          !0,
          ["shell", "Shell", "bash", "Bash", "exec", "Exec", "run", "Run", "runShellCommand", "RunShellCommand"],
        ),
          (this.config = e));
      }
      getDescription(e) {
        if (!e?.command) return "";
        let r = `${e.command}`;
        return (
          e.dir_path ? (r += ` [in ${e.dir_path}]`) : (r += ` [current working directory ${process.cwd()}]`),
          e.timeout !== void 0 && (r += ` [timeout: ${e.timeout}s]`),
          e.description && (r += ` (${e.description.replace(/\n/g, " ")})`),
          r
        );
      }
      validateToolParams(e) {
        let r = R0r(e.command, this.config);
        if (!r.allowed)
          return r.reason
            ? r.reason
            : (console.error("Unexpected: isCommandAllowed returned false without a reason"),
              I.t("shellTool.errors.commandNotAllowed", { command: e.command }));
        let n = iu.validate(this.schema.parameters, e);
        if (n) return n;
        if (!e.command.trim()) return I.t("shellTool.errors.commandEmpty");
        if (extractCommands(e.command).length === 0) return I.t("shellTool.errors.couldNotIdentifyCommand");
        if (e.dir_path) {
          let o = dsi.resolve(this.config.getTargetDir(), e.dir_path);
          if (!this.config.getWorkspaceContext().isPathWithinWorkspace(o))
            return `Directory '${o}' is not within any of the registered workspace directories.`;
        }
        if (e.timeout !== void 0) {
          if (!Number.isInteger(e.timeout)) return "Timeout must be an integer number of seconds.";
          if (e.timeout < 1) return "Timeout must be at least 1 second.";
          if (e.timeout > 3600) return "Timeout cannot exceed 3600 seconds (1 hour).";
        }
        return null;
      }
      async shouldConfirmExecute(e, r) {
        if (this.validateToolParams(e)) return !1;
        let n = iat(e.command),
          s = [...new Set(extractCommands(n))].filter((u) => !this.allowlist.has(u));
        return s.length === 0
          ? !1
          : {
              type: "exec",
              title: "Confirm Shell Command",
              command: e.command,
              rootCommand: s.join(", "),
              onConfirm: async (u) => {
                u === cn.ProceedAlways && s.forEach((c) => this.allowlist.add(c));
              },
            };
      }
      async execute(e, r, n, o) {
        if (!e || !e.command) {
          let O = I.t("shellTool.errors.commandEmpty");
          return { llmContent: O, returnDisplay: O, error: { message: O, type: Lr.INVALID_TOOL_PARAMS } };
        }
        let s = iat(e.command),
          a = this.validateToolParams({ ...e, command: s });
        if (a) return { llmContent: a, returnDisplay: a, error: { message: a, type: Lr.INVALID_TOOL_PARAMS } };
        if (r.aborted)
          return {
            llmContent: I.t("shellTool.messages.commandCancelled"),
            returnDisplay: I.t("shellTool.messages.commandCancelled"),
            error: { message: I.t("shellTool.messages.commandCancelled"), type: Lr.EXECUTION_FAILED },
          };
        let u = s,
          c = e.dir_path ? dsi.resolve(this.config.getTargetDir(), e.dir_path) : this.config.getTargetDir(),
          m = "",
          d = "",
          f = Date.now(),
          p = !1,
          h = this.config.getShouldUseNodePtyShell(),
          g = { ...this.config.getShellExecutionConfig(), ...(o ?? {}), run_in_bg: e.run_in_bg },
          b = e.timeout !== void 0 ? e.timeout * 1e3 : this.config.getShellTimeout(),
          {
            result: A,
            pid: y,
            abort: E,
            stdoutLogPath: v,
            stderrLogPath: C,
          } = await HO.execute(
            u,
            c,
            (O) => {
              if (!n) return;
              let N = "",
                F = !1;
              switch (O.type) {
                case "data":
                  if (p) break;
                  (O.stream === "stdout" ? (m += O.chunk) : (d += O.chunk),
                    (N =
                      m +
                      (d
                        ? `
${d}`
                        : "")),
                    Date.now() - f > U0r && (F = !0));
                  break;
                case "binary_detected":
                  ((p = !0), (N = "[Binary output detected. Halting stream...]"), (F = !0));
                  break;
                case "binary_progress":
                  ((p = !0),
                    (N = `[Receiving binary output... ${L0r(O.bytesReceived)} received]`),
                    Date.now() - f > U0r && (F = !0));
                  break;
                default:
                  throw new Error("An unhandled ShellOutputEvent was found.");
              }
              F && (n(N), (f = Date.now()));
            },
            r,
            b,
            h,
            g,
          );
        if (g.run_in_bg && y)
          return (
            a3.add(y, {
              command: u,
              cwd: c,
              abort: E,
              processMode: g.processMode,
              stdoutLogPath: v,
              stderrLogPath: C,
              stdout() {
                if (this.processMode === "DETACHED" && this.stdoutLogPath)
                  try {
                    return fsi.readFileSync(this.stdoutLogPath, "utf-8");
                  } catch {
                    return m;
                  }
                return m;
              },
              stderr() {
                if (this.processMode === "DETACHED" && this.stderrLogPath)
                  try {
                    return fsi.readFileSync(this.stderrLogPath, "utf-8");
                  } catch {
                    return d;
                  }
                return d;
              },
            }),
            A.then(({ exitCode: O, signal: N, stderr: F, stdout: B }) => {
              let L = N ? $0r.constants.signals[N] : null;
              if (O) {
                a3.kill(y, O, { stderr: F, stdout: B });
                return;
              }
              if (L) {
                a3.kill(y, L, { stderr: F, stdout: B });
                return;
              }
            }),
            {
              llmContent: `Command running in background with ID: ${y}`,
              returnDisplay: `Command running in background with ID: ${y}`,
            }
          );
        let x = await A,
          k = a3.getAll().map((O) => Number(O[0])),
          R = "";
        if (x.aborted)
          ((R = I.t("shellTool.messages.commandCancelled")),
            x.output.trim()
              ? (R += ` Below is the output (on stdout and stderr) before it was cancelled:
${x.output}`)
              : (R += " There was no output before it was cancelled."));
        else {
          let O = x.error ? x.error.message.replace(u, e.command) : "(none)";
          R = [
            `Command: ${e.command}`,
            `Directory: ${e.dir_path || "(root)"}`,
            `Stdout: ${x.stdout || "(empty)"}`,
            `Stderr: ${x.stderr || "(empty)"}`,
            `Error: ${O}`,
            `Exit Code: ${x.exitCode ?? "(none)"}`,
            `Signal: ${x.signal ?? "(none)"}`,
            `Background PIDs: ${k.length ? k.join(", ") : "(none)"}`,
            `Process Group PGID: ${x.pid ?? "(none)"}`,
          ].join(`
`);
        }
        let P = "";
        this.config.getDebugMode()
          ? (P = R)
          : x.output.trim()
            ? (P = x.output)
            : x.aborted
              ? (P = I.t("shellTool.messages.commandCancelled"))
              : x.signal
                ? (P = `Command terminated by signal: ${x.signal}`)
                : x.error
                  ? (P = I.t("shellTool.errors.commandFailed", { error: mr(x.error) }))
                  : x.exitCode !== null &&
                    x.exitCode !== 0 &&
                    (x.stderr && x.stderr.trim()
                      ? ((P = `Error output:
${t4e(x.stderr.trim())}`),
                        (P += `
Command exited with code: ${x.exitCode}`))
                      : x.stdout && x.stdout.trim()
                        ? ((P = `Stdout:
${x.stdout.trim()}`),
                          (P += `
Command exited with code: ${x.exitCode}`))
                        : (P = `Command exited with code: ${x.exitCode}`));
        let D = this.config.getSummarizeToolOutputConfig();
        return D && D[this.name]
          ? {
              llmContent: await vii(R, this.config.getGeminiClient(), r, D[this.name].tokenBudget),
              returnDisplay: P,
              stderr: x.stderr,
              ...(x.error || x.exitCode !== 0 || x.signal
                ? {
                    error: {
                      message: x.error
                        ? x.error.message
                        : x.signal
                          ? `Command terminated by signal: ${x.signal}`
                          : x.stderr && x.stderr.trim()
                            ? `Error output:
${t4e(x.stderr.trim())}
Command exited with code: ${x.exitCode}`
                            : x.stdout && x.stdout.trim()
                              ? `Stdout:
${t4e(x.stdout.trim())}
Command exited with code: ${x.exitCode}`
                              : `Command exited with code: ${x.exitCode}`,
                      type: Lr.EXECUTION_FAILED,
                    },
                  }
                : {}),
            }
          : {
              llmContent: R,
              returnDisplay: P,
              stderr: x.stderr,
              ...(x.error || x.exitCode !== 0 || x.signal
                ? {
                    error: {
                      message: x.error
                        ? x.error.message
                        : x.signal
                          ? `Command terminated by signal: ${x.signal}`
                          : x.stderr && x.stderr.trim()
                            ? `Error output:
${t4e(x.stderr.trim())}
Command exited with code: ${x.exitCode}`
                            : x.stdout && x.stdout.trim()
                              ? `Stdout:
${t4e(x.stdout.trim())}
Command exited with code: ${x.exitCode}`
                              : `Command exited with code: ${x.exitCode}`,
                      type: Lr.EXECUTION_FAILED,
                    },
                  }
                : {}),
            };
      }
    };
  });
var VO,
  psi = j(() => {
    VO = class extends Error {
      constructor(e, r) {
        (super(`${e} at position ${r}`), (this.position = r));
      }
    };
  });
function hsi(t) {
  return /^[0-9A-Fa-f]$/.test(t);
}
function MU(t) {
  return t >= "0" && t <= "9";
}
function gsi(t) {
  return t >= " ";
}
function r4e(t) {
  return `,:[]/{}()
+`.includes(t);
}
function j0r(t) {
  return (t >= "a" && t <= "z") || (t >= "A" && t <= "Z") || t === "_" || t === "$";
}
function Q0r(t) {
  return (t >= "a" && t <= "z") || (t >= "A" && t <= "Z") || t === "_" || t === "$" || (t >= "0" && t <= "9");
}
function H0r(t) {
  return `,[]/{}
+`.includes(t);
}
function V0r(t) {
  return n4e(t) || s2a.test(t);
}
function bsi(t) {
  return (
    t ===
      `
` ||
    t === "\r" ||
    t === "	" ||
    t === "\b" ||
    t === "\f"
  );
}
function LU(t, e) {
  let r = t.charCodeAt(e);
  return r === 32 || r === 10 || r === 9 || r === 13;
}
function Asi(t, e) {
  let r = t.charCodeAt(e);
  return r === 32 || r === 9 || r === 13;
}
function ysi(t, e) {
  let r = t.charCodeAt(e);
  return r === 160 || (r >= 8192 && r <= 8202) || r === 8239 || r === 8287 || r === 12288;
}
function n4e(t) {
  return W0r(t) || mat(t);
}
function W0r(t) {
  return t === '"' || t === "\u201C" || t === "\u201D";
}
function z0r(t) {
  return t === '"';
}
function mat(t) {
  return t === "'" || t === "\u2018" || t === "\u2019" || t === "`" || t === "\xB4";
}
function Y0r(t) {
  return t === "'";
}
function t0e(t, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    n = t.lastIndexOf(e);
  return n !== -1 ? t.substring(0, n) + (r ? "" : t.substring(n + 1)) : t;
}
function mv(t, e) {
  let r = t.length;
  if (!LU(t, r - 1)) return t + e;
  for (; LU(t, r - 1); ) r--;
  return t.substring(0, r) + e + t.substring(r);
}
function _si(t, e, r) {
  return t.substring(0, e) + t.substring(e + r);
}
function Esi(t) {
  return /[,\n][ \t\r]*$/.test(t);
}
var G0r,
  q0r,
  s2a,
  vsi = j(() => {
    ((G0r = /^(http|https|ftp|mailto|file|data|irc):\/\/$/), (q0r = /^[A-Za-z0-9-._~:/?#@!$&'()*+;=]$/));
    s2a = /^[[{\w-]$/;
  });
function K0r(t) {
  let e = 0,
    r = "";
  (m(["```", "[```", "{```"]), s() || L(), m(["```", "```]", "```}"]));
  let o = f(",");
  for (
    o && a(), V0r(t[e]) && Esi(r) ? (o || (r = mv(r, ",")), y()) : o && (r = t0e(r, ","));
    t[e] === "}" || t[e] === "]";
  )
    (e++, a());
  if (e >= t.length) return r;
  B();
  function s() {
    a();
    let H = b() || A() || E() || C() || x() || R(!1) || P();
    return (a(), H);
  }
  function a() {
    let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
      U = e,
      Y = u(H);
    do ((Y = c()), Y && (Y = u(H)));
    while (Y);
    return e > U;
  }
  function u(H) {
    let U = H ? LU : Asi,
      Y = "";
    for (;;)
      if (U(t, e)) ((Y += t[e]), e++);
      else if (ysi(t, e)) ((Y += " "), e++);
      else break;
    return Y.length > 0 ? ((r += Y), !0) : !1;
  }
  function c() {
    if (t[e] === "/" && t[e + 1] === "*") {
      for (; e < t.length && !c2a(t, e); ) e++;
      return ((e += 2), !0);
    }
    if (t[e] === "/" && t[e + 1] === "/") {
      for (
        ;
        e < t.length &&
        t[e] !==
          `
`;
      )
        e++;
      return !0;
    }
    return !1;
  }
  function m(H) {
    if (d(H)) {
      if (j0r(t[e])) for (; e < t.length && Q0r(t[e]); ) e++;
      return (a(), !0);
    }
    return !1;
  }
  function d(H) {
    u(!0);
    for (let U of H) {
      let Y = e + U.length;
      if (t.slice(e, Y) === U) return ((e = Y), !0);
    }
    return !1;
  }
  function f(H) {
    return t[e] === H ? ((r += t[e]), e++, !0) : !1;
  }
  function p(H) {
    return t[e] === H ? (e++, !0) : !1;
  }
  function h() {
    return p("\\");
  }
  function g() {
    return (a(), t[e] === "." && t[e + 1] === "." && t[e + 2] === "." ? ((e += 3), a(), p(","), !0) : !1);
  }
  function b() {
    if (t[e] === "{") {
      ((r += "{"), e++, a(), p(",") && a());
      let H = !0;
      for (; e < t.length && t[e] !== "}"; ) {
        let U;
        if ((H ? ((U = !0), (H = !1)) : ((U = f(",")), U || (r = mv(r, ",")), a()), g(), !(E() || R(!0)))) {
          t[e] === "}" || t[e] === "{" || t[e] === "]" || t[e] === "[" || t[e] === void 0 ? (r = t0e(r, ",")) : G();
          break;
        }
        a();
        let X = f(":"),
          J = e >= t.length;
        (X || (V0r(t[e]) || J ? (r = mv(r, ":")) : Q()), s() || (X || J ? (r += "null") : Q()));
      }
      return (t[e] === "}" ? ((r += "}"), e++) : (r = mv(r, "}")), !0);
    }
    return !1;
  }
  function A() {
    if (t[e] === "[") {
      ((r += "["), e++, a(), p(",") && a());
      let H = !0;
      for (; e < t.length && t[e] !== "]"; )
        if ((H ? (H = !1) : f(",") || (r = mv(r, ",")), g(), !s())) {
          r = t0e(r, ",");
          break;
        }
      return (t[e] === "]" ? ((r += "]"), e++) : (r = mv(r, "]")), !0);
    }
    return !1;
  }
  function y() {
    let H = !0,
      U = !0;
    for (; U; ) (H ? (H = !1) : f(",") || (r = mv(r, ",")), (U = s()));
    (U || (r = t0e(r, ",")),
      (r = `[
${r}
]`));
  }
  function E() {
    let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
      U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1,
      Y = t[e] === "\\";
    if ((Y && (e++, (Y = !0)), n4e(t[e]))) {
      let X = z0r(t[e]) ? z0r : Y0r(t[e]) ? Y0r : mat(t[e]) ? mat : W0r,
        J = e,
        q = r.length,
        ne = '"';
      for (e++; ; ) {
        if (e >= t.length) {
          let de = D(e - 1);
          return !H && r4e(t.charAt(de))
            ? ((e = J), (r = r.substring(0, q)), E(!0))
            : ((ne = mv(ne, '"')), (r += ne), !0);
        }
        if (e === U) return ((ne = mv(ne, '"')), (r += ne), !0);
        if (X(t[e])) {
          let de = e,
            ce = ne.length;
          if (((ne += '"'), e++, (r += ne), a(!1), H || e >= t.length || r4e(t[e]) || n4e(t[e]) || MU(t[e])))
            return (v(), !0);
          let ye = D(de - 1),
            Z = t.charAt(ye);
          if (Z === ",") return ((e = J), (r = r.substring(0, q)), E(!1, ye));
          if (r4e(Z)) return ((e = J), (r = r.substring(0, q)), E(!0));
          ((r = r.substring(0, q)), (e = de + 1), (ne = `${ne.substring(0, ce)}\\${ne.substring(ce)}`));
        } else if (H && H0r(t[e])) {
          if (t[e - 1] === ":" && G0r.test(t.substring(J + 1, e + 2)))
            for (; e < t.length && q0r.test(t[e]); ) ((ne += t[e]), e++);
          return ((ne = mv(ne, '"')), (r += ne), v(), !0);
        } else if (t[e] === "\\") {
          let de = t.charAt(e + 1);
          if (u2a[de] !== void 0) ((ne += t.slice(e, e + 2)), (e += 2));
          else if (de === "u") {
            let ye = 2;
            for (; ye < 6 && hsi(t[e + ye]); ) ye++;
            ye === 6 ? ((ne += t.slice(e, e + 6)), (e += 6)) : e + ye >= t.length ? (e = t.length) : K();
          } else ((ne += de), (e += 2));
        } else {
          let de = t.charAt(e);
          de === '"' && t[e - 1] !== "\\"
            ? ((ne += `\\${de}`), e++)
            : bsi(de)
              ? ((ne += a2a[de]), e++)
              : (gsi(de) || F(de), (ne += de), e++);
        }
        Y && h();
      }
    }
    return !1;
  }
  function v() {
    let H = !1;
    for (a(); t[e] === "+"; ) {
      ((H = !0), e++, a(), (r = t0e(r, '"', !0)));
      let U = r.length;
      E() ? (r = _si(r, U, 1)) : (r = mv(r, '"'));
    }
    return H;
  }
  function C() {
    let H = e;
    if (t[e] === "-") {
      if ((e++, O())) return (N(H), !0);
      if (!MU(t[e])) return ((e = H), !1);
    }
    for (; MU(t[e]); ) e++;
    if (t[e] === ".") {
      if ((e++, O())) return (N(H), !0);
      if (!MU(t[e])) return ((e = H), !1);
      for (; MU(t[e]); ) e++;
    }
    if (t[e] === "e" || t[e] === "E") {
      if ((e++, (t[e] === "-" || t[e] === "+") && e++, O())) return (N(H), !0);
      if (!MU(t[e])) return ((e = H), !1);
      for (; MU(t[e]); ) e++;
    }
    if (!O()) return ((e = H), !1);
    if (e > H) {
      let U = t.slice(H, e),
        Y = /^0\d/.test(U);
      return ((r += Y ? `"${U}"` : U), !0);
    }
    return !1;
  }
  function x() {
    return (
      k("true", "true") ||
      k("false", "false") ||
      k("null", "null") ||
      k("True", "true") ||
      k("False", "false") ||
      k("None", "null")
    );
  }
  function k(H, U) {
    return t.slice(e, e + H.length) === H ? ((r += U), (e += H.length), !0) : !1;
  }
  function R(H) {
    let U = e;
    if (j0r(t[e])) {
      for (; e < t.length && Q0r(t[e]); ) e++;
      let Y = e;
      for (; LU(t, Y); ) Y++;
      if (t[Y] === "(") return ((e = Y + 1), s(), t[e] === ")" && (e++, t[e] === ";" && e++), !0);
    }
    for (; e < t.length && !H0r(t[e]) && !n4e(t[e]) && (!H || t[e] !== ":"); ) e++;
    if (t[e - 1] === ":" && G0r.test(t.substring(U, e + 2))) for (; e < t.length && q0r.test(t[e]); ) e++;
    if (e > U) {
      for (; LU(t, e - 1) && e > 0; ) e--;
      let Y = t.slice(U, e);
      return ((r += Y === "undefined" ? "null" : JSON.stringify(Y)), t[e] === '"' && e++, !0);
    }
  }
  function P() {
    if (t[e] === "/") {
      let H = e;
      for (e++; e < t.length && (t[e] !== "/" || t[e - 1] === "\\"); ) e++;
      return (e++, (r += `"${t.substring(H, e)}"`), !0);
    }
  }
  function D(H) {
    let U = H;
    for (; U > 0 && LU(t, U); ) U--;
    return U;
  }
  function O() {
    return e >= t.length || r4e(t[e]) || LU(t, e);
  }
  function N(H) {
    r += `${t.slice(H, e)}0`;
  }
  function F(H) {
    throw new VO(`Invalid character ${JSON.stringify(H)}`, e);
  }
  function B() {
    throw new VO(`Unexpected character ${JSON.stringify(t[e])}`, e);
  }
  function L() {
    throw new VO("Unexpected end of json string", t.length);
  }
  function G() {
    throw new VO("Object key expected", e);
  }
  function Q() {
    throw new VO("Colon expected", e);
  }
  function K() {
    let H = t.slice(e, e + 6);
    throw new VO(`Invalid unicode character "${H}"`, e);
  }
}
function c2a(t, e) {
  return t[e] === "*" && t[e + 1] === "/";
}
var a2a,
  u2a,
  Csi = j(() => {
    psi();
    vsi();
    ((a2a = { "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t" }),
      (u2a = {
        '"': '"',
        "\\": "\\",
        "/": "/",
        b: "\b",
        f: "\f",
        n: `
`,
        r: "\r",
        t: "	",
      }));
  });
var Ssi = j(() => {
  Csi();
});
var i4e,
  o4e,
  va,
  TS = j(() => {
    "use strict";
    Ba();
    Ssi();
    Fc();
    Bp();
    bi();
    ((i4e = new Map()),
      (o4e = new Map()),
      (va = class t extends Li {
        static Name = "todo_write";
        static DisplayName = "Plan";
        currentAgentId = "default";
        constructor(e) {
          super(
            t.Name,
            t.DisplayName,
            `Use this tool to create and manage a structured task list for your current coding session. This helps you track progress, organize complex tasks, and demonstrate thoroughness to the user.
It also helps the user understand the progress of the task and overall progress of their requests.

## When to Use This Tool
Use this tool proactively in these scenarios:

1. Complex multi-step tasks - When a task requires 3 or more distinct steps or actions
2. Non-trivial and complex tasks - Tasks that require careful planning or multiple operations
3. User explicitly requests todo list - When the user directly asks you to use the todo list
4. User provides multiple tasks - When users provide a list of things to be done (numbered or comma-separated)
5. After receiving new instructions - Immediately capture user requirements as todos
6. When you start working on a task - Mark it as in_progress BEFORE beginning work. Ideally you should only have one todo as in_progress at a time
7. After completing a task - Mark it as completed and add any new follow-up tasks discovered during implementation

## When NOT to Use This Tool

Skip using this tool when:
1. There is only a single, straightforward task
2. The task is trivial and tracking it provides no organizational benefit
3. The task can be completed in less than 3 trivial steps
4. The task is purely conversational or informational

NOTE that you should not use this tool if there is only one trivial task to do. In this case you are better off just doing the task directly.

## Examples of When to Use the Todo List

<example>
User: I want to add a dark mode toggle to the application settings. Make sure you run the tests and build when you're done!
Assistant: I'll help add a dark mode toggle to your application settings. Let me create a todo list to track this implementation.
*Creates todo list with the following items:*
1. Create dark mode toggle component in Settings page
2. Add dark mode state management (context/store)
3. Implement CSS-in-JS styles for dark theme
4. Update existing components to support theme switching
5. Run tests and build process, addressing any failures or errors that occur
*Begins working on the first task*

<reasoning>
The assistant used the todo list because:
1. Adding dark mode is a multi-step feature requiring UI, state management, and styling changes
2. The user explicitly requested tests and build be run afterward
3. The assistant inferred that tests and build need to pass by adding "Ensure tests and build succeed" as the final task
</reasoning>
</example>

<example>
User: Help me rename the function getCwd to getCurrentWorkingDirectory across my project
Assistant: Let me first search through your codebase to find all occurrences of 'getCwd'.
*Uses grep or search tools to locate all instances of getCwd in the codebase*
Assistant: I've found 15 instances of 'getCwd' across 8 different files. Let me create a todo list to track these changes.
*Creates todo list with specific items for each file that needs updating*

<reasoning>
The assistant used the todo list because:
1. First, the assistant searched to understand the scope of the task
2. Upon finding multiple occurrences across different files, it determined this was a complex task with multiple steps
3. The todo list helps ensure every instance is tracked and updated systematically
4. This approach prevents missing any occurrences and maintains code consistency
</reasoning>
</example>


<example>
User: I need to implement these features for my e-commerce site: user registration, product catalog, shopping cart, and checkout flow.
Assistant: I'll help implement these features. First, let's add all the features to the todo list.
*Creates a todo list breaking down each feature into specific tasks based on the project architecture*
Assistant: Let's start with user registration. This will involve creating database models, API endpoints, and frontend forms that integrate with your existing authentication system.

<reasoning>
The assistant used the todo list because:
1. The user provided multiple complex features to implement in a comma separated list
2. The todo list helps organize these large features into manageable tasks
3. This approach allows for tracking progress across the entire implementation
</reasoning>
</example>

<example>
User: Can you help optimize my React application? It's rendering slowly and has performance issues.</user>
Assistant: I'll help optimize your React application. First, let me examine your codebase to identify potential performance bottlenecks.
*Reviews component structure, render patterns, state management, and data fetching*
Assistant: After analyzing your codebase, I've identified several performance issues. Let me create a todo list to track our optimization efforts.
*Creates todo list with items like: 1) Implement memoization for expensive calculations in ProductList, 2) Add virtualization for long lists in Dashboard, 3) Optimize image loading in Gallery component, 4) Fix state update loops in ShoppingCart, 5) Review bundle size and implement code splitting*
Let's start by implementing memoization for the expensive calculations in your ProductList component.</assistant>

<reasoning>
The assistant used the todo list because:
1. First, the assistant examined the codebase to identify specific performance issues
2. Based on this analysis, it identified multiple optimization opportunities
3. Performance optimization is a non-trivial task requiring multiple steps
4. The todo list helps methodically track improvements across different components
5. This systematic approach ensures all performance bottlenecks are addressed
</reasoning>
</example>

## Examples of When NOT to Use the Todo List

<example>
User: How do I print 'Hello World' in Python?
Assistant: In Python, you can print "Hello World" with this simple code:

python
print("Hello World")

This will output the text "Hello World" to the console when executed.</assistant>

<reasoning>
The assistant did not use the todo list because this is a single, trivial task that can be completed in one step. There's no need to track multiple tasks or steps for such a straightforward request.
</reasoning>
</example>

<example>
User: What does the git status command do?
Assistant: The git status command shows the current state of your working directory and staging area. It displays which changes have been staged, which haven't, and which files aren't being tracked by Git. This is a fundamental command for understanding the current state of your repository before making commits.

<reasoning>
The assistant did not use the todo list because this is an informational request with no actual coding task to complete. The user is simply asking for an explanation, not for the assistant to perform multiple steps or tasks.
</reasoning>
</example>

</example>

<example>
User: Run npm install for me and tell me what happens.
Assistant: I'll run the npm install command for you.

*Executes: npm install*

The command completed successfully. Here's the output:
[Output of npm install command]

All dependencies have been installed according to your package.json file.

<reasoning>
The assistant did not use the todo list because this is a single command execution with immediate results. There are no multiple steps to track or organize, making the todo list unnecessary for this straightforward task.
</reasoning>
</example>

## Task States and Management

1. **Task States**: Use these states to track progress:
   - pending: Task not yet started
   - in_progress: Currently working on (limit to ONE task at a time)
   - completed: Task finished successfully

2. **Task Management**:
   - Update task status in real-time as you work
   - Mark tasks complete IMMEDIATELY after finishing (don't batch completions)
   - Only have ONE task in_progress at any time
   - Complete current tasks before starting new ones
   - Remove tasks that are no longer relevant from the list entirely

3. **Task Completion Requirements**:
   - ONLY mark a task as completed when you have FULLY accomplished it
   - If you encounter errors, blockers, or cannot finish, keep the task as in_progress
   - When blocked, create a new task describing what needs to be resolved
   - Never mark a task as completed if:
     - Tests are failing
     - Implementation is partial
     - You encountered unresolved errors
     - You couldn't find necessary files or dependencies

4. **Task Breakdown**:
   - Create specific, actionable items
   - Break complex tasks into smaller, manageable steps
   - Use clear, descriptive task names

## important
- Return valid json input

## tool param example
{"todos": [{"id": "1", "task": "Create the basic HTML structure with a checkerboard grid", "status": "completed"}, {"id": "2", "task": "Add CSS styling for the board, squares, and pieces", "status": "completed"}, {"id": "3", "task": "Implement JavaScript game logic for piece movement and jumps", "status": "in_progress"}, {"id": "4", "task": "Add game state management (player turns, win conditions)", "status": "pending"}, {"id": "5", "task": "Test the game functionality and fix any issues", "status": "pending"}]}

When in doubt, use this tool. Being proactive with task management demonstrates attentiveness and ensures you complete all requirements successfully.
`,
            Mi.Globe,
            Fi.Read,
            {
              type: Dt.OBJECT,
              properties: {
                todos: {
                  type: Dt.ARRAY,
                  description: "The updated todo list",
                  items: {
                    type: Dt.OBJECT,
                    properties: {
                      id: { type: Dt.STRING, description: "Unique identifier for the todo item" },
                      task: { type: Dt.STRING, description: "The description of the todo" },
                      status: {
                        type: Dt.STRING,
                        description: "Current status of the todo",
                        enum: ["pending", "in_progress", "completed", "failed"],
                      },
                      priority: {
                        type: Dt.STRING,
                        description: "Priority level of the todo",
                        enum: ["high", "medium", "low"],
                        default: "low",
                      },
                    },
                    required: ["id", "task", "status"],
                  },
                },
              },
              required: ["todos"],
            },
            !0,
            !1,
            ["TodoWrite", "todoWrite", "todo-write", "todowrite"],
          );
        }
        validateToolParams(e) {
          let r = e;
          if (r && typeof r.todos == "string")
            try {
              let a = K0r(r.todos);
              r.todos = JSON.parse(a);
            } catch {
              return I.t("todoWrite.validationErrors.invalidJsonString");
            }
          Object.assign(e, r);
          let n = iu.validate(this.schema.parameters, e);
          if (n) return n;
          if (!e || !e.todos || !Array.isArray(e.todos)) return I.t("todoWrite.validationErrors.todosRequired");
          for (let a = 0; a < e.todos.length; a++) {
            let u = e.todos[a];
            if (!u) return I.t("todoWrite.validationErrors.todoNullUndefined", { index: a });
            (!u.id || typeof u.id != "string") && (u.id = String(a + 1));
            let c = u,
              m = u.task || c.description;
            if (!m || typeof m != "string" || m.trim().length === 0)
              return I.t("todoWrite.validationErrors.todoEmptyTask", { index: a });
            if (!u.status || !["pending", "in_progress", "completed", "failed"].includes(u.status))
              return I.t("todoWrite.validationErrors.todoInvalidStatus", { index: a, status: u.status });
          }
          let o = e.todos.map((a) => a.id),
            s = new Set(o);
          return o.length !== s.size ? I.t("todoWrite.validationErrors.duplicateIds") : null;
        }
        getDescription(e) {
          if (!e.todos || !Array.isArray(e.todos)) return I.t("todoWrite.messages.invalidParameters");
          let r = {
            pending: e.todos.filter((n) => n.status === "pending").length,
            in_progress: e.todos.filter((n) => n.status === "in_progress").length,
            completed: e.todos.filter((n) => n.status === "completed").length,
          };
          return I.t("todoWrite.status.updatingTodoList", {
            pending: r.pending,
            inProgress: r.in_progress,
            completed: r.completed,
          });
        }
        async shouldConfirmExecute(e, r) {
          return !1;
        }
        async execute(e, r, n) {
          let o = this.validateToolParams(e);
          if (o)
            return {
              llmContent: I.t("todoWrite.messages.errorPrefix", { reason: o }),
              returnDisplay: I.t("todoWrite.messages.errorDisplay", { error: o }),
            };
          let s = i4e.get(this.currentAgentId) || [],
            a = e.todos.map((p) => {
              let h = p,
                g = p.task || h.description || "";
              return { id: p.id, task: g.trim(), status: p.status, priority: p.priority || "low" };
            });
          if (s.length > 0) {
            let p = o4e.get(this.currentAgentId) || [];
            (p.push([...s]), o4e.set(this.currentAgentId, p));
          }
          i4e.set(this.currentAgentId, a);
          let u = I.t("todoWrite.messages.todosModifiedSuccess"),
            c = this.detectChanges(s, a),
            d = ((p) =>
              p.map((h, g) => {
                let b = "\u2610",
                  A = "",
                  y = c.find((C) => C.id === h.id),
                  E = "";
                if (y)
                  switch (y.type) {
                    case "added":
                      E = "\x1B[32m";
                      break;
                    case "status_changed":
                      E = "\x1B[33m";
                      break;
                    case "content_changed":
                      E = "\x1B[33m";
                      break;
                    default:
                      E = "\x1B[36m";
                      break;
                  }
                return (
                  h.status === "completed"
                    ? (b = "\u2714")
                    : h.status === "failed"
                      ? ((b = "\u274C"), (A = "\x1B[1;31m"))
                      : h.status === "in_progress" && (A = "\x1B[1;33m"),
                  `${g === 0 ? "" : "    "}${b} ${E}${A}${h.task}\x1B[0m`
                );
              }).join(`
`))(a),
            f =
              a.length > 0
                ? `\xB7${I.t("todoWrite.status.updateTodos")}
  \u23BF ${d}`
                : `\xB7${I.t("todoWrite.status.updateTodos")}
  \u23BF (${I.t("todoWrite.status.noTodos")})`;
          return { llmContent: u, returnDisplay: f };
        }
        detectChanges(e, r) {
          let n = [],
            o = r.filter((s) => e.some((a) => a.id === s.id && a.task === s.task));
          if (e.length > 0 && o.length / r.length < 0.5) return r.map((s) => ({ id: s.id, type: "added" }));
          for (let s of r) {
            let a = e.find((u) => u.id === s.id);
            a
              ? a.status !== s.status
                ? n.push({ id: s.id, type: "status_changed" })
                : a.task !== s.task && n.push({ id: s.id, type: "content_changed" })
              : n.push({ id: s.id, type: "added" });
          }
          return n;
        }
        setAgentId(e) {
          this.currentAgentId = e;
        }
        getAgentId() {
          return this.currentAgentId;
        }
        static getTodos(e) {
          return i4e.get(e) || [];
        }
        static getTodoHistory(e) {
          return o4e.get(e) || [];
        }
        static clearTodos(e) {
          (i4e.delete(e), o4e.delete(e));
        }
        static clearAllTodos() {
          (i4e.clear(), o4e.clear());
        }
      }));
  });
var Pm,
  jD = j(() => {
    "use strict";
    bi();
    Fc();
    Ba();
    TS();
    Pm = class t extends Li {
      config;
      static Name = "todo_read";
      static DisplayName = "Read Plan";
      currentAgentId = "default";
      constructor(e) {
        (super(
          t.Name,
          t.DisplayName,
          `Use this tool to read the current to-do list for the session. This tool should be used proactively and frequently to ensure that you are aware of
the status of the current task list. You should make use of this tool as often as possible, especially in the following situations:
- At the beginning of conversations to see what's pending
- Before starting new tasks to prioritize work
- When the user asks about previous tasks or plans
- Whenever you're uncertain about what to do next
- After completing tasks to update your understanding of remaining work
- After every few messages to ensure you're on track

Usage:
- This tool takes in no parameters. So leave the input blank or empty. DO NOT include a dummy object, placeholder string or a key like "input" or "empty". LEAVE IT BLANK.
- Returns a list of todo items with their status, priority, and content
- Use this information to track progress and plan next steps
- If no todos exist yet, an empty list will be returned`,
          Mi.Globe,
          Fi.Read,
          {
            type: Dt.OBJECT,
            properties: {},
            description:
              'No input is required, leave this field blank. NOTE that we do not require a dummy object, placeholder string or a key like "input" or "empty". LEAVE IT BLANK.',
          },
          !0,
          !1,
          ["TodoRead", "todoRead", "todo-read", "todoread"],
        ),
          (this.config = e));
      }
      validateToolParams(e) {
        return null;
      }
      getDescription(e) {
        return I.t("todoReadTool.messages.readingTodoList");
      }
      async shouldConfirmExecute(e, r) {
        return !1;
      }
      async execute(e, r, n) {
        let o = va.getTodos(this.currentAgentId);
        if (o.length === 0)
          return {
            llmContent: I.t("todoReadTool.messages.todoListEmpty"),
            returnDisplay: I.t("todoReadTool.messages.currentTodos"),
          };
        let s = [...o].sort((p, h) => {
            let g = { in_progress: 0, pending: 1, failed: 2, completed: 3 },
              b = g[p.status] - g[h.status];
            if (b !== 0) return b;
            let A = { high: 0, medium: 1, low: 2 };
            return A[p.priority] - A[h.priority];
          }),
          a = s.map((p, h) => ({ index: h + 1, id: p.id, content: p.task, status: p.status, priority: p.priority })),
          u = {
            pending: o.filter((p) => p.status === "pending").length,
            in_progress: o.filter((p) => p.status === "in_progress").length,
            completed: o.filter((p) => p.status === "completed").length,
          },
          c =
            I.t("todoReadTool.messages.todosFound", {
              count: o.length,
              pending: u.pending,
              inProgress: u.in_progress,
              completed: u.completed,
            }) +
            `

${JSON.stringify(a, null, 2)}`,
          f = `\xB7Current Todos
  \u23BF ${((p) =>
    p.map((h, g) => {
      let b = "\u2610";
      return (
        h.status === "completed"
          ? (b = "\u2714")
          : h.status === "in_progress"
            ? (b = "\u{1F504}")
            : h.status === "failed" && (b = "\u274C"),
        `${g === 0 ? "" : "    "}${b} ${h.task}`
      );
    }).join(`
`))(s)}`;
        return { llmContent: c, returnDisplay: f };
      }
      setAgentId(e) {
        this.currentAgentId = e;
      }
      getAgentId() {
        return this.currentAgentId;
      }
    };
  });
var l2a,
  m2a,
  Hp,
  r0e = j(() => {
    "use strict";
    Ba();
    Fc();
    bi();
    ((l2a = {
      name: "exit_plan_mode",
      description:
        "Use this tool when you are in plan mode and have finished presenting your plan and are ready to code. This will prompt the user to exit plan mode.",
      parameters: {
        type: Dt.OBJECT,
        properties: {
          plan: {
            type: Dt.STRING,
            description:
              "The plan you came up with, that you want to run by the user for approval. Supports markdown. The plan should be pretty concise.",
          },
        },
        required: ["plan"],
      },
    }),
      (m2a = `
Use this tool when you are in plan mode and have finished presenting your plan and are ready to code. This will prompt the user to exit plan mode. 
IMPORTANT: Only use this tool when the task requires planning the implementation steps of a task that requires writing code. For research tasks where you're gathering information, searching files, reading files or in general trying to understand the codebase - do NOT use this tool.

Eg. 
1. Initial task: "Search for and understand the implementation of vim mode in the codebase" - Do not use the exit plan mode tool because you are not planning the implementation steps of a task.
2. Initial task: "Help me implement yank mode for vim" - Use the exit plan mode tool after you have finished planning the implementation steps of the task.
`),
      (Hp = class t extends Li {
        static Name = l2a.name;
        static DisplayName = "Exit Plan";
        constructor() {
          super(t.Name, t.DisplayName, m2a, Mi.LightBulb, Fi.Other, {
            properties: {
              plan: {
                description:
                  "The plan you came up with, that you want to run by the user for approval. Supports markdown. The plan should be pretty concise.",
                type: Dt.STRING,
              },
            },
            required: ["plan"],
            type: Dt.OBJECT,
          });
        }
        validateToolParams(e) {
          return !e.plan || typeof e.plan != "string" || e.plan.trim() === ""
            ? I.t("exitPlanModeTool.errors.planRequired")
            : null;
        }
        getDescription(e) {
          return e?.plan
            ? `Exit plan mode with plan: ${e.plan.substring(0, 100)}${e.plan.length > 100 ? "..." : ""}`
            : "";
        }
        async shouldConfirmExecute(e, r) {
          return (this.validateToolParams(e), !1);
        }
        async execute(e, r) {
          let n = this.validateToolParams(e);
          if (n)
            return {
              llmContent: JSON.stringify({ success: !1, error: n }),
              returnDisplay: I.t("exitPlanModeTool.errors.validationError", { error: n }),
            };
          let { plan: o } = e;
          try {
            let s = I.t("exitPlanModeTool.messages.readyToCode", { plan: o });
            return {
              summary: "Exit plan mode",
              llmContent: JSON.stringify({
                success: !0,
                plan: o,
                message: I.t("exitPlanModeTool.messages.exitPlanMode"),
              }),
              returnDisplay: s,
            };
          } catch (s) {
            let a = s instanceof Error ? s.message : String(s);
            return (
              console.error(`[ExitPlanModeTool] Error executing exit_plan_mode: ${a}`),
              {
                llmContent: JSON.stringify({ success: !1, error: `Failed to exit plan mode. Detail: ${a}` }),
                returnDisplay: I.t("exitPlanModeTool.errors.executionError", { error: a }),
              }
            );
          }
        }
      }));
  });
import dat from "path";
var u9,
  n0e = j(() => {
    "use strict";
    Pa();
    u9 = class {
      config;
      hookManager;
      constructor(e, r) {
        ((this.config = e), (this.hookManager = r));
      }
      async executePreToolUseHooks(e, r, n = []) {
        if (!this.hookManager) return { blocked: !1, permissionDecision: "allow" };
        try {
          let o = this.buildHookExecutionContext(),
            s = await this.hookManager.executePreToolUse(e, r, o, n),
            a = this.getPermissionDecision(s);
          return {
            blocked: a.permissionDecision === "deny",
            error:
              a.permissionDecision === "deny"
                ? `PreToolUse hook denied execution: ${a.reason || "No reason provided"}`
                : void 0,
            permissionDecision: a.permissionDecision,
            permissionDecisionReason: a.reason,
          };
        } catch (o) {
          return (console.warn("PreToolUse hook execution failed:", o), { blocked: !1, permissionDecision: "allow" });
        }
      }
      getPermissionDecision(e) {
        for (let r of e) {
          if (r.hookSpecificOutput?.hookEventName === "PreToolUse") {
            let n = r.hookSpecificOutput;
            return { permissionDecision: n.permissionDecision, reason: n.permissionDecisionReason };
          }
          if (r.decision) return { permissionDecision: r.decision === "approve" ? "allow" : "deny", reason: r.reason };
          if (r.blocked) return { permissionDecision: "deny", reason: r.stderr || "Hook blocked execution" };
        }
        return { permissionDecision: "allow" };
      }
      async executePostToolUseHooks(e, r, n, o = []) {
        if (!this.hookManager) return n;
        try {
          let s = this.buildHookExecutionContext(),
            a = await this.hookManager.executePostToolUse(e, r, n, s, o);
          return this.enhancePostToolUseResponse(n, a);
        } catch (s) {
          return (console.warn("PostToolUse hook execution failed:", s), n);
        }
      }
      enhancePostToolUseResponse(e, r) {
        let n = { ...e };
        for (let o of r) {
          if (o.modifiedToolResponse?.result) {
            let s = o.modifiedToolResponse.result;
            n.modifiedResult = { llmContent: s.llmContent, returnDisplay: s.returnDisplay };
          }
          if (o.hookSpecificOutput?.hookEventName === "PostToolUse") {
            let s = o.hookSpecificOutput;
            s.additionalContext &&
              (typeof n.result == "string"
                ? (n.result = `${n.result}

${s.additionalContext}`)
                : n.result && typeof n.result == "object"
                  ? (n.result = { ...n.result, hookAdditionalContext: s.additionalContext })
                  : (n.result = { original: n.result, hookAdditionalContext: s.additionalContext }));
          }
          o.decision === "block" && o.reason && ((n.error = o.reason), (n.success = !1));
        }
        return n;
      }
      buildHookExecutionContext() {
        let e = this.getTranscriptPath();
        return {
          sessionId: this.config.getSessionId() || "unknown",
          transcriptPath: e,
          cwd: process.cwd(),
          projectDir: this.config.getProjectRoot(),
        };
      }
      getTranscriptPath() {
        let e = this.config.getSessionId(),
          r = this.config.getProjectRoot();
        if (e && r) {
          let n = x3e(r),
            o = dat.join(Tn(), "projects"),
            s = dat.join(o, n);
          return dat.join(s, `${e}.jsonl`);
        }
        return dat.join(Tn(), "projects", "default", "current-session.jsonl");
      }
      checkIfBlocked(e) {
        return e.some((r) => r.blocked);
      }
      async executeStopHooks(e) {
        if (!this.hookManager) return { executed: !1, blocked: !1, messages: [], errors: [] };
        try {
          let r = this.buildHookExecutionContext(),
            n = await this.hookManager.executeStop(r),
            o = n.some((u) => u.blocked),
            s = n
              .filter((u) => u.blocked)
              .map((u) => u.stderr)
              .filter((u) => u && u.trim().length > 0),
            a = n
              .filter((u) => !u.success && !u.blocked)
              .map((u) => u.stderr || `Stop hook failed with exit code ${u.exitCode}`)
              .filter((u) => u && u.trim().length > 0);
          if (e) {
            if (s.length > 0 && e.onMessage) {
              let u = `Stop hooks provided feedback: ${s.join("; ")}`;
              e.onMessage(u);
            }
            a.length > 0 && e.onError && a.forEach((u) => e.onError(u));
          }
          return { executed: !0, blocked: o, messages: s, errors: a };
        } catch (r) {
          let n = `Stop hook execution failed: ${r instanceof Error ? r.message : String(r)}`;
          return (
            e?.onError ? e.onError(n) : console.warn(n, r),
            { executed: !1, blocked: !1, messages: [], errors: [n] }
          );
        }
      }
      async executeSubagentStopHooks(e, r) {
        if (!this.hookManager) return { executed: !1, blocked: !1, messages: [], errors: [] };
        try {
          let n = this.buildHookExecutionContext(),
            o = await this.hookManager.executeSubagentStop(n),
            s = o.some((c) => c.blocked),
            a = o
              .filter((c) => c.blocked)
              .map((c) => c.stderr)
              .filter((c) => c && c.trim().length > 0),
            u = o
              .filter((c) => !c.success && !c.blocked)
              .map((c) => c.stderr || `SubagentStop hook failed with exit code ${c.exitCode}`)
              .filter((c) => c && c.trim().length > 0);
          if (r) {
            if (a.length > 0 && r.onMessage) {
              let c = `SubagentStop hooks provided feedback: ${a.join("; ")}`;
              r.onMessage(c);
            }
            u.length > 0 && r.onError && u.forEach((c) => r.onError(c));
          }
          return { executed: !0, blocked: s, messages: a, errors: u };
        } catch (n) {
          let o = `SubagentStop hook execution failed: ${n instanceof Error ? n.message : String(n)}`;
          return (
            r?.onError ? r.onError(o) : console.warn(o, n),
            { executed: !1, blocked: !1, messages: [], errors: [o] }
          );
        }
      }
      extractBlockingErrors(e) {
        let r = e
          .filter((n) => n.blocked)
          .map((n) => n.stderr)
          .filter((n) => n && n.trim().length > 0);
        return r.length > 0 ? r.join("; ") : "Hook blocked execution (no error message provided)";
      }
    };
  });
var pi,
  i0e = j(() => {
    "use strict";
    (function (t) {
      ((t.INIT = "init"),
        (t.TODO_UPDATED = "todo_updated"),
        (t.FILE_MODIFIED = "file_modified"),
        (t.SUBAGENT_STATUS = "subagent_status"),
        (t.ERROR_OCCURRED = "error_occurred"),
        (t.PLAN_MODE_ACTIVATED = "plan_mode_activated"),
        (t.CHINESE_QUERY_DETECTED = "chinese_query_detected"),
        (t.LOOP_DETECTED = "loop_detected"));
    })(pi || (pi = {}));
  });
var o0e,
  J0r = j(() => {
    "use strict";
    i0e();
    o0e = class {
      listeners = new Map();
      constructor() {
        Object.values(pi).forEach((e) => {
          this.listeners.set(e, new Set());
        });
      }
      on(e, r) {
        let n = this.listeners.get(e);
        return (
          n && n.add(r),
          () => {
            let o = this.listeners.get(e);
            o && o.delete(r);
          }
        );
      }
      emit(e) {
        let r = this.listeners.get(e.type);
        r &&
          r.forEach((n) => {
            try {
              n(e);
            } catch (o) {
              console.warn(`Error in reminder event listener for ${e.type}:`, o);
            }
          });
      }
      removeAllListeners(e) {
        e ? this.listeners.get(e)?.clear() : this.listeners.forEach((r) => r.clear());
      }
      getListenerCount(e) {
        return this.listeners.get(e)?.size || 0;
      }
    };
  });
var d2a,
  Jf,
  SY = j(() => {
    "use strict";
    Ba();
    Fc();
    bi();
    ((d2a = `Use this tool when you need to ask the user questions during execution. This allows you to:
1. Gather user preferences or requirements
2. Clarify ambiguous instructions
3. Get decisions on implementation choices as you work
4. Offer choices to the user about what direction to take.

Usage notes:
- Users will always be able to select "Other" to provide custom text input
- Use multiSelect: true to allow multiple answers to be selected for a question
`),
      (Jf = class t extends Li {
        static Name = "ask_user_question";
        static DisplayName = "Ask Question";
        constructor() {
          super(t.Name, t.DisplayName, d2a, Mi.LightBulb, Fi.Other, {
            type: Dt.OBJECT,
            properties: {
              questions: {
                type: Dt.ARRAY,
                items: {
                  type: Dt.OBJECT,
                  properties: {
                    question: {
                      type: Dt.STRING,
                      description:
                        'The complete question to ask the user. Should be clear, specific, and end with a question mark. Example: "Which library should we use for date formatting?" If multiSelect is true, phrase it accordingly, e.g. "Which features do you want to enable?"',
                    },
                    header: {
                      type: Dt.STRING,
                      description:
                        'Very short label displayed as a chip/tag (max 12 chars). Examples: "Auth method", "Library", "Approach".',
                    },
                    options: {
                      type: Dt.ARRAY,
                      items: {
                        type: Dt.OBJECT,
                        properties: {
                          label: {
                            type: Dt.STRING,
                            description:
                              "The display text for this option that the user will see and select. Should be concise (1-5 words) and clearly describe the choice.",
                          },
                          description: {
                            type: Dt.STRING,
                            description:
                              "Explanation of what this option means or what will happen if chosen. Useful for providing context about trade-offs or implications.",
                          },
                        },
                        required: ["label", "description"],
                      },
                      description:
                        "The available choices for this question. Must have 2-4 options. Each option should be a distinct, mutually exclusive choice (unless multiSelect is enabled). There should be no 'Other' option, that will be provided automatically.",
                    },
                    multiSelect: {
                      type: Dt.BOOLEAN,
                      description:
                        "Set to true to allow the user to select multiple options instead of just one. Use when choices are not mutually exclusive.",
                    },
                  },
                  required: ["question", "header", "options", "multiSelect"],
                },
                description: "Questions to ask the user (1-4 questions)",
              },
              answers: { type: Dt.OBJECT, description: "User answers collected by the permission component" },
            },
            required: ["questions"],
          });
        }
        validateToolParams(e) {
          if (!e.questions || !Array.isArray(e.questions)) return I.t("askUserQuestionTool.errors.questionsRequired");
          if (e.questions.length < 1 || e.questions.length > 4) return I.t("askUserQuestionTool.errors.questionsCount");
          for (let r = 0; r < e.questions.length; r++) {
            let n = e.questions[r];
            if (!n.question || typeof n.question != "string")
              return I.t("askUserQuestionTool.errors.invalidQuestion", { index: r });
            if (!n.header || typeof n.header != "string")
              return I.t("askUserQuestionTool.errors.invalidHeader", { index: r });
            if (n.header.length > 12) return I.t("askUserQuestionTool.errors.headerTooLong", { index: r });
            if (!n.options || !Array.isArray(n.options))
              return I.t("askUserQuestionTool.errors.invalidOptions", { index: r });
            if (n.options.length < 2 || n.options.length > 4)
              return I.t("askUserQuestionTool.errors.optionsCount", { index: r });
            for (let o = 0; o < n.options.length; o++) {
              let s = n.options[o];
              if (!s.label || typeof s.label != "string")
                return I.t("askUserQuestionTool.errors.invalidOptionLabel", { questionIndex: r, optionIndex: o });
              if (!s.description || typeof s.description != "string")
                return I.t("askUserQuestionTool.errors.invalidOptionDescription", { questionIndex: r, optionIndex: o });
            }
            if (typeof n.multiSelect != "boolean")
              return I.t("askUserQuestionTool.errors.invalidMultiSelect", { index: r });
          }
          return null;
        }
        getDescription(e) {
          let r = e.questions?.length || 0;
          return I.t("askUserQuestionTool.messages.askingQuestions", { count: r });
        }
        async shouldConfirmExecute(e, r) {
          return (this.validateToolParams(e), !1);
        }
        async execute(e, r) {
          let n = this.validateToolParams(e);
          if (n)
            return {
              llmContent: JSON.stringify({ success: !1, error: n }),
              returnDisplay: I.t("askUserQuestionTool.errors.validationError", { error: n }),
            };
          try {
            if (!e.answers)
              return {
                llmContent: JSON.stringify({ success: !1, error: I.t("askUserQuestionTool.errors.noAnswers") }),
                returnDisplay: I.t("askUserQuestionTool.errors.noAnswers"),
              };
            let o = I.t("askUserQuestionTool.messages.answersReceived");
            o += `

`;
            for (let s of e.questions) {
              let a = e.answers[s.header];
              o += `**${s.header}**: ${a || I.t("askUserQuestionTool.messages.noAnswer")}
`;
            }
            return {
              summary: I.t("askUserQuestionTool.messages.summary", { count: e.questions.length }),
              llmContent: JSON.stringify({ success: !0, answers: e.answers, questions: e.questions }),
              returnDisplay: o,
            };
          } catch (o) {
            let s = o instanceof Error ? o.message : String(o);
            return (
              console.error(`[AskUserQuestionTool] Error executing ask_user_question: ${s}`),
              {
                llmContent: JSON.stringify({ success: !1, error: `Failed to process user questions. Detail: ${s}` }),
                returnDisplay: I.t("askUserQuestionTool.errors.executionError", { error: s }),
              }
            );
          }
        }
      }));
  });
function fat() {
  return "reminder-" + Math.random().toString(36).substring(2) + "-" + Date.now().toString(36);
}
function pat(t) {
  try {
    let e = t.todoList ? JSON.stringify(t.todoList).length : 0,
      r = t.fileChanges ? t.fileChanges.join("").length : 0,
      n = t.gitStatus?.length ?? 0,
      o = t.claudeMd?.length ?? 0,
      s = t.directoryStructure?.length ?? 0,
      a = e + r + n + o + s;
  } catch (e) {
    console.warn("Error collecting system reminder telemetry:", e);
  }
}
function hat(t) {
  return !t || typeof t != "string"
    ? !1
    : ![/<script/i, /javascript:/i, /on\w+\s*=/i, /<iframe/i, /<object/i, /<embed/i].some((r) => r.test(t));
}
function wY(t, e = 500) {
  return !t || t.length <= e ? t : t.substring(0, e - 3) + "...";
}
function gat(t) {
  if (!t) return t;
  let e = [process.cwd() + "/", "/Users/", "/home/", "/usr/"],
    r = t;
  for (let n of e)
    if (r.startsWith(n)) {
      r = r.substring(n.length);
      break;
    }
  return r;
}
async function wsi(t, e, r) {
  if (!t || typeof t != "string" || t.length < 3 || /^[A-Za-z0-9\s\p{P}]*$/u.test(t)) return !1;
  if (!e || !r?.toLowerCase().includes("apis.iflow.cn")) return X0r(t);
  try {
    let n = t;
    if (t.length > 3e3) {
      let c = t.substring(0, 1500),
        m = t.substring(t.length - 1500);
      n = `${c}
...
${m}`;
    }
    let o = `
    \u8BF7\u5224\u65AD\u4EE5\u4E0B\u6587\u672C\u662F\u5426\u4E3A\u4E2D\u6587\u3002\u53EA\u56DE\u7B54"\u662F"\u6216"\u5426"
    \u91CD\u8981\uFF1A\u4E0D\u8981\u5176\u4ED6\u89E3\u91CA\u3002\u53EA\u56DE\u7B54"\u662F"\u6216"\u5426"
    \u6587\u672C\u5185\u5BB9\uFF1A${n}`.trim(),
      s = await fetch("https://apis.iflow.cn/v1/chat/completions /* @iflow-api-endpoint */", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${e}`, "user-agent": "iFlow-Cli" },
        body: JSON.stringify({
          model: "QWen3-4B",
          messages: [{ role: "user", content: o }],
          temperature: 0.1,
          max_tokens: 1e3,
        }),
      });
    return s.ok ? (await s.json()).choices?.[0]?.message?.content?.trim() === "\u662F" : X0r(t);
  } catch {
    return X0r(t);
  }
}
function X0r(t) {
  return /[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]/.test(t);
}
var bat = j(() => {
  "use strict";
});
var s0e,
  Z0r = j(() => {
    "use strict";
    SY();
    r0e();
    i0e();
    bat();
    s0e = class {
      createReminderMessage(e, r, n, o) {
        if (!hat(e)) throw new Error("Invalid reminder content detected");
        return {
          content: e,
          isMeta: !0,
          eventType: r,
          uuid: fat(),
          timestamp: new Date().toISOString(),
          position: n,
          type: o,
        };
      }
      generateTodoReminder(e) {
        if (!e || e.itemCount === 0)
          return this.createReminderMessage(
            `
        This is a reminder that your todo list is currently empty. DO NOT mention this to the user explicitly because they are already aware. If you are working on tasks that would benefit from a todo list please use the todo_write tool to create one. If not, please feel free to ignore. Again do not mention this message to the user.
        `,
            pi.TODO_UPDATED,
            "after",
            "single",
          );
        let r = wY(JSON.stringify(e.content), 800);
        return this.createReminderMessage(
          `
      Your todo list has changed. DO NOT mention this explicitly to the user. Here are the latest contents of your todo list:
${r}. Continue on with the tasks at hand if applicable.
`,
          pi.TODO_UPDATED,
          "after",
          "single",
        );
      }
      generateFileModifiedReminder(e) {
        let n = `
Note: ${gat(e.filename || e.filePath || "unknown file")} was modified, either by the user or by a linter. Don't tell the user this, since they are already aware. This change was intentional, so make sure to take it into account as you proceed (ie. don't revert it unless the user asks you to).`;
        if (e.snippet) {
          let o = wY(e.snippet, 300);
          n += ` So that you don't need to re-read the file, here's a snippet of the edited content:

${o}`;
        }
        return (
          (n += `
`),
          this.createReminderMessage(n, pi.FILE_MODIFIED, "after", "system-notifications")
        );
      }
      generateSubAgentReminder(e) {
        let r = e.agentIndex || "unknown",
          n = e.status || "unknown",
          o = e.toolsCount || 0;
        return this.createReminderMessage(
          `
      SubAgent #${r} status changed to ${n}. Current tools executed: ${o}. DO NOT mention this to the user explicitly.
      `,
          pi.SUBAGENT_STATUS,
          "after",
          "system-notifications",
        );
      }
      generatePlanModeReminder() {
        return this.createReminderMessage(
          `
Plan mode is active. The user indicated that they do not want you to execute yet -- you MUST NOT make any edits, run any non-readonly tools (including changing configs or making commits), or otherwise make any changes to the system. This supercedes any other instructions you have received.

## Enhanced Planning Workflow

### Phase 1: Initial Understanding
Goal: Gain a comprehensive understanding of the user's request by reading through code and asking them questions. Critical: In this phase you should only use the Explore subagent type.

1. Focus on understanding the user's request and the code associated with their request

2. **Launch up to 3 'explore-agent' IN PARALLEL** (single message, multiple tool calls) to efficiently explore the codebase.
   - Use 1 agent when the task is isolated to known files, the user provided specific file paths, or you're making a small targeted change.
   - Use multiple agents when: the scope is uncertain, multiple areas of the codebase are involved, or you need to understand existing patterns before planning.
   - Quality over quantity - 3 agents maximum, but you should try to use the minimum number of agents necessary (usually just 1)
   - If using multiple agents: Provide each agent with a specific search focus or area to explore. Example: One agent searches for existing implementations, another explores related components, a third investigates testing patterns

3. After exploring the code, use the ${Jf.Name} tool to clarify ambiguities in the user request up front.

### Phase 2: Planning
Goal: Come up with an approach to solve the problem identified in phase 1.
In the agent prompt:
- Provide any background context that may help the agent with their task without prescribing the exact design itself
- Request a detailed plan

### Phase 3: Review
Goal: Review the plan(s) from Phase 2 and ensure alignment with the user's intentions.
1. Read the critical files identified by agents to deepen your understanding
2. Ensure that the plans align with the user's original request
3. Use ${Jf.Name} to clarify any remaining questions with the user

### Phase 4: Final Plan
Once you have all the information you need, provide your synthesized recommendation including:
- Recommended approach with rationale
- Key insights from different perspectives

### Phase 5: Call ${Hp.Name}
At the very end of your turn, once you have asked the user questions and are happy with your final plan - you should always call ${Hp.Name} to indicate to the user that you are done planning.
This is critical - your turn should only end with either asking the user a question or calling ${Hp.Name}. Do not stop unless it's for these 2 reasons.

NOTE: 
- At any point in time through this workflow you should feel free to ask the user questions or clarifications. Don't make large assumptions about user intent. The goal is to present a well researched plan to the user, and tie any loose ends before implementation begins.
- Agent settings: 
    - remember setting the 'useContext' to True, if you need to get all contexts from the main conversation.
    `,
          pi.PLAN_MODE_ACTIVATED,
          "after",
          "single",
        );
      }
      generateLightWeightPlanModeReminder() {
        return this.createReminderMessage(
          `
      Plan mode is active. The user indicated that they do not want you to execute yet -- you MUST NOT make any edits, run any non-readonly tools (including changing configs or making commits), or otherwise make any changes to the system. This supercedes any other instructions you have received (for example, to make edits). Instead, you should:
1. Answer the user's query comprehensively
2. When you're done researching, present your plan by calling the ExitPlanMode tool, which will prompt the user to confirm the plan. Do NOT make any file changes or run any tools that modify the system state in any way until the user has confirmed the plan.
`,
          pi.PLAN_MODE_ACTIVATED,
          "after",
          "single",
        );
      }
      generateErrorReminder(e) {
        let r = e.error || e.message || "Unknown error",
          n = e.context || "",
          o = `
An error occurred: ${wY(r, 200)}`;
        return (
          n && (o += ` Context: ${wY(n, 100)}`),
          (o +=
            ". DO NOT mention this error to the user unless it directly affects their request. Handle gracefully and continue with the task."),
          (o += `
`),
          this.createReminderMessage(o, pi.ERROR_OCCURRED, "after", "system-notifications")
        );
      }
      generateChineseResponseReminder() {
        return this.createReminderMessage(
          `
The user has submitted a query in Chinese. Please respond to the user in Chinese (\u4E2D\u6587).
`,
          pi.CHINESE_QUERY_DETECTED,
          "before",
          "single",
        );
      }
      generateLoopDetectedReminder(e) {
        let r =
          e.reminderContent ||
          `
This is a reminder that your current approach may be stuck in a loop. Please try a different approach to resolve the current issue.
`;
        return this.createReminderMessage(r, pi.LOOP_DETECTED, "after", "single");
      }
      generateImportantInstructionsReminder() {
        return this.createReminderMessage(
          `
    Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
`,
          pi.INIT,
          "after",
          "system-notifications",
        );
      }
      generateReminder(e, r, n) {
        switch (e) {
          case pi.TODO_UPDATED:
            return this.generateTodoReminder(r);
          case pi.INIT:
            return this.generateImportantInstructionsReminder();
          case pi.FILE_MODIFIED:
            return this.generateFileModifiedReminder(r);
          case pi.SUBAGENT_STATUS:
            return this.generateSubAgentReminder(r);
          case pi.PLAN_MODE_ACTIVATED:
            return n?.getLightWeightPlan?.()
              ? this.generateLightWeightPlanModeReminder()
              : this.generatePlanModeReminder();
          case pi.ERROR_OCCURRED:
            return this.generateErrorReminder(r);
          case pi.CHINESE_QUERY_DETECTED:
            return this.generateChineseResponseReminder();
          case pi.LOOP_DETECTED:
            return this.generateLoopDetectedReminder(r);
          default:
            throw new Error(`Unsupported reminder event type: ${e}`);
        }
      }
      getImportantInstructionsContent() {
        return `
    Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
`;
      }
    };
  });
import { execSync as f2a } from "child_process";
import * as xsi from "os";
import * as Tsi from "fs";
var FU,
  Dsi = j(() => {
    "use strict";
    i0e();
    J0r();
    Z0r();
    bat();
    TS();
    FU = class {
      pendingReminders = new Map();
      eventEmitter;
      generator;
      contextInfo = {};
      config;
      sessionFirstTime = new Set();
      appConfig = null;
      constructor(e, r) {
        ((this.config = {
          enabled: !0,
          eventTypes: Object.values(pi),
          maxRemindersPerSession: 10,
          telemetryEnabled: !0,
          ...e,
        }),
          (this.eventEmitter = new o0e()),
          (this.generator = new s0e()),
          (this.appConfig = r || null),
          this.setupEventHandlers());
      }
      async injectReminders(e, r, n) {
        if (!this.config.enabled)
          return {
            role: "user",
            parts: [
              {
                text: e.map((v) => (typeof v == "string" ? v : v.text || JSON.stringify(v))).join(`
`),
              },
            ],
          };
        let o = e.map((E) => (typeof E == "string" ? E : E.text || JSON.stringify(E))).join(`
`),
          s = r?.getApiKey(),
          a = r?.getBaseUrl(),
          u = r?.getSessionId();
        if (n ? this.hasChineseReminder(n) : !1)
          this.emitEvent(pi.CHINESE_QUERY_DETECTED, u, { detectedText: o }, "high");
        else
          try {
            (await wsi(o, s, a)) && this.emitEvent(pi.CHINESE_QUERY_DETECTED, u, { detectedText: o }, "high");
          } catch (E) {
            console.debug("Chinese text detection failed:", E);
          }
        let m = this.pendingReminders.get(u) || [],
          d = m.filter((E) => E.type === "single"),
          f = m.filter((E) => E.type !== "single"),
          p = d.filter((E) => E.position === "before"),
          h = d.filter((E) => E.position === "after");
        if (!this.sessionFirstTime.has(u)) {
          let E = this.generateEnvironmentInfo();
          this.contextInfo.environmentInfo = E;
        }
        let g = this.buildContextEntries(f),
          b = [],
          A = Object.keys(g);
        if (
          A.length > 0 &&
          !(A.length === 1 && A[0] === "important-instruction-reminders" && this.sessionFirstTime.has(u))
        ) {
          let E = this.createSystemReminderContent(g);
          b.push({ text: E, isMeta: !0 });
        }
        if (!this.sessionFirstTime.has(u)) {
          let E = this.generateNewChatTodoStatusReminder();
          b.push({ text: `<system-reminder>${E}</system-reminder>`, isMeta: !0 });
        }
        return (
          this.sessionFirstTime.add(u),
          p.forEach((E) => {
            let v = `<system-reminder>${E.content}</system-reminder>`;
            b.push({ text: v, isMeta: !0 });
          }),
          e.forEach((E) => {
            if (typeof E == "string") b.push({ text: E, isMeta: !1 });
            else if (E.text) b.push({ text: E.text, isMeta: !1 });
            else {
              let { text: v, ...C } = E;
              b.push({ ...C, isMeta: !1 });
            }
          }),
          h.forEach((E) => {
            if (E.eventType === pi.PLAN_MODE_ACTIVATED) {
              let v = `<system-reminder>${E.content}</system-reminder>`;
              b.push({ text: v, isMeta: !0 });
            }
          }),
          this.config.telemetryEnabled && pat(this.contextInfo),
          m.length > 0 && this.pendingReminders.delete(u),
          { role: "user", parts: b }
        );
      }
      injectIntoToolResult(e, r, n, o) {
        if (!this.config.enabled) return e;
        let s = this.getRelevantReminders(r, n);
        if (s.length === 0) return e;
        let u = s
          .map((c) => {
            let m = c.content;
            return (n === "todo_write" && m === "TODO_DYNAMIC_CONTENT" && (m = this.generateTodoReminderContent(o)), m);
          })
          .map((c) => `<system-reminder>${c}</system-reminder>`).join(`

`);
        return (
          this.clearPendingReminders(r),
          `${e}

${u}`
        );
      }
      generateTodoReminderContent(e) {
        let r = e?.todos || [],
          n = !Array.isArray(r) || r.length === 0,
          o = Array.isArray(r) && r.length > 0 && r.every((s) => s.status === "completed");
        return this.getTodoReminderMessage(r, n || o);
      }
      generateNewChatTodoStatusReminder(e = "default") {
        let r = va.getTodos(e),
          n = r.length === 0,
          o = r.length > 0 && r.every((s) => s.status === "completed");
        return this.getTodoReminderMessage(r, n || o);
      }
      getTodoReminderMessage(e, r) {
        return r
          ? "This is a reminder that your todo list is currently empty. DO NOT mention this to the user explicitly because they are already aware. If you are working on tasks that would benefit from a todo list please use the todo_write tool to create one. If not, please feel free to ignore. Again do not mention this message to the user."
          : `Your todo list has changed. DO NOT mention this explicitly to the user. Here are the latest contents of your todo list:
${JSON.stringify(e)}. Continue on with the tasks at hand if applicable.`;
      }
      generateFileModificationReminderContent(e) {
        let r = "a file";
        return (
          e?.file_path ? (r = e.file_path) : e?.absolute_path ? (r = e.absolute_path) : e?.path && (r = e.path),
          `Note: ${r} was modified, either by the user or by a linter. Don't tell the user this, since they are already aware. This change was intentional, so make sure to take it into account as you proceed (ie. don't revert it unless the user asks you to). So that you don't need to re-read the file, here's the result of running \`cat -n\` on a snippet of the edited file:`
        );
      }
      setupEventHandlers() {
        (this.eventEmitter.on(pi.TODO_UPDATED, (e) => {
          if (this.isEventTypeEnabled(e.type)) {
            let r = this.generator.generateReminder(e.type, e.data, this.appConfig);
            this.addReminder(e.sessionId, r);
          }
        }),
          this.eventEmitter.on(pi.FILE_MODIFIED, (e) => {
            if (this.isEventTypeEnabled(e.type)) {
              let r = this.generator.generateReminder(e.type, e.data, this.appConfig);
              this.addReminder(e.sessionId, r);
            }
          }),
          this.eventEmitter.on(pi.SUBAGENT_STATUS, (e) => {
            if (this.isEventTypeEnabled(e.type)) {
              let r = this.generator.generateReminder(e.type, e.data, this.appConfig);
              this.addReminder(e.sessionId, r);
            }
          }),
          this.eventEmitter.on(pi.PLAN_MODE_ACTIVATED, (e) => {
            if (this.isEventTypeEnabled(e.type)) {
              let r = this.generator.generateReminder(e.type, e.data, this.appConfig);
              this.addReminder(e.sessionId, r);
            }
          }),
          this.eventEmitter.on(pi.ERROR_OCCURRED, (e) => {
            if (this.isEventTypeEnabled(e.type)) {
              let r = this.generator.generateReminder(e.type, e.data, this.appConfig);
              this.addReminder(e.sessionId, r);
            }
          }),
          this.eventEmitter.on(pi.CHINESE_QUERY_DETECTED, (e) => {
            if (this.isEventTypeEnabled(e.type)) {
              let r = this.generator.generateReminder(e.type, e.data, this.appConfig);
              this.addReminder(e.sessionId, r);
            }
          }),
          this.eventEmitter.on(pi.LOOP_DETECTED, (e) => {
            if (this.isEventTypeEnabled(e.type)) {
              let r = this.generator.generateReminder(e.type, e.data, this.appConfig);
              this.addReminder(e.sessionId, r);
            }
          }));
      }
      addReminder(e, r) {
        this.pendingReminders.has(e) || this.pendingReminders.set(e, []);
        let n = this.pendingReminders.get(e);
        (n.length >= this.config.maxRemindersPerSession && n.shift(), n.push(r));
      }
      buildContextEntries(e) {
        let r = {};
        r["important-instruction-reminders"] = this.generator.getImportantInstructionsContent();
        let n = new Map();
        return (
          e.forEach((o) => {
            o.type !== "single" && (n.has(o.eventType) || n.set(o.eventType, []), n.get(o.eventType).push(o));
          }),
          n.forEach((o, s) => {
            let a = this.getContextSectionName(s),
              u = o.map((c) => c.content).join(`

`);
            r[a] = u;
          }),
          this.contextInfo.environmentInfo && (r["User Environment Information"] = this.contextInfo.environmentInfo),
          r
        );
      }
      getContextSectionName(e) {
        switch (e) {
          case pi.INIT:
            return "important-instruction-reminders";
          case pi.FILE_MODIFIED:
            return "file-changes";
          case pi.SUBAGENT_STATUS:
            return "subagent-status";
          case pi.PLAN_MODE_ACTIVATED:
            return "plan-mode-restrictions";
          case pi.ERROR_OCCURRED:
            return "error-context";
          case pi.LOOP_DETECTED:
            return "loop-detection-context";
          default:
            return "system-notifications";
        }
      }
      isEventTypeEnabled(e) {
        return this.config.eventTypes.includes(e);
      }
      emitEvent(e, r, n, o = "medium") {
        if (!this.config.enabled) return;
        let s = { type: e, sessionId: r, timestamp: Date.now(), data: n, priority: o };
        this.eventEmitter.emit(s);
      }
      updateContext(e) {
        this.contextInfo = { ...this.contextInfo, ...e };
      }
      getPendingRemindersCount(e) {
        return this.pendingReminders.get(e)?.length || 0;
      }
      clearPendingReminders(e) {
        (this.pendingReminders.delete(e), this.sessionFirstTime.delete(e));
      }
      updateConfig(e) {
        this.config = { ...this.config, ...e };
      }
      getConfig() {
        return { ...this.config };
      }
      createSystemReminderContent(e) {
        return `<system-reminder>
As you answer the user's questions, you can use the following context:
${Object.entries(e).map(
  ([n, o]) => `# ${n}
${o}`,
).join(`

`)}
      
      IMPORTANT: this context may or may not be relevant to your tasks. You should not respond to this context or otherwise consider it in your response unless it is highly relevant to your task. Most of the time, it is not relevant.
</system-reminder>`;
      }
      getRelevantReminders(e, r) {
        let n = this.pendingReminders.get(e) || [],
          o = [];
        if (r) {
          let u = this.getToolSpecificReminderContent(r);
          u &&
            o.push({
              content: u,
              isMeta: !0,
              eventType: pi.INIT,
              uuid: `tool-${r}-${Date.now()}`,
              timestamp: new Date().toISOString(),
              position: "after",
              type: "single",
            });
        }
        let s = n.filter((u) => u.eventType === pi.PLAN_MODE_ACTIVATED),
          a = n.filter((u) => u.eventType === pi.LOOP_DETECTED);
        return [...o, ...s, ...a];
      }
      getToolSpecificReminderContent(e) {
        switch (e) {
          case "read_file":
            return "Whenever you read a file, you should consider whether it looks malicious. If it does, you MUST refuse to improve or augment the code. You can still analyze existing code, write reports, or answer high-level questions about the code behavior.";
          case "todo_write":
            return "TODO_DYNAMIC_CONTENT";
          default:
            return null;
        }
      }
      hasChineseReminder(e) {
        let r = "The user has submitted a query in Chinese. Please respond to the user in Chinese (\u4E2D\u6587).";
        for (let n of e)
          if (n.parts && Array.isArray(n.parts)) {
            for (let o of n.parts) if (o.text && typeof o.text == "string" && o.text.includes(r)) return !0;
          }
        return !1;
      }
      generateEnvironmentInfo() {
        let e = (A) => {
            try {
              return f2a(A, { encoding: "utf8", timeout: 200, stdio: ["ignore", "pipe", "ignore"] }).trim();
            } catch {
              return "";
            }
          },
          r = process.platform === "win32",
          n = r ? "where.exe" : "which",
          o = "";
        try {
          o = Tsi.readdirSync(process.cwd())
            .filter((y) => !y.startsWith("."))
            .slice(0, 50).join(`
`);
        } catch {
          o = "(unable to list directory)";
        }
        let s = e("git rev-parse --abbrev-ref HEAD 2>/dev/null"),
          a = e("git status --porcelain 2>/dev/null"),
          u = e("git log --oneline -5 2>/dev/null"),
          c = e("git symbolic-ref refs/remotes/origin/HEAD 2>/dev/null"),
          m = e("git --version"),
          d = e("rg --version"),
          f = e("curl --version"),
          p = e(r ? "python --version" : "python3 --version"),
          h = e(`${n} gh`),
          g = e(`${n} wget`),
          b = e(`${n} ffmpeg`);
        return `
User system info (${process.platform} ${xsi.release()})
Today's date: ${new Date().toISOString().split("T")[0]}

# The commands below were executed at the start of all sessions to gather context about the environment.
# You do not need to repeat them, unless you think the environment has changed.
# Remember: They are not necessarily related to the current conversation, but may be useful for context.

% pwd
${process.cwd()}

% ls
${o}

${
  s
    ? `% git rev-parse --abbrev-ref HEAD
${s}

% git status --porcelain
${a}

% git log --oneline -5
${u}

% git symbolic-ref refs/remotes/origin/HEAD
${c}`
    : ""
}

% git --version
${m || "git not found"}

% rg --version
${
  d
    ? d.split(`
`)[0]
    : "rg not found"
}

% ${n} gh
${h || "gh not found"}

% ${n} wget
${g || "wget not found"}

% curl --version
${
  f
    ? f.split(`
`)[0]
    : "curl not found"
}

% ${n} ffmpeg
${b || "ffmpeg not found"}

% ${r ? "python" : "python3"} --version
${p || "python not found"}

IMPORTANT:
- Double check the tools installed in the environment before using them.
- Never call a file editing tool for the same file in parallel.
- Always prefer the Grep, Glob and LS tools over shell commands like find, grep, or ls for codebase exploration.
- Always prefer using the absolute paths when using tools, to avoid any ambiguity.
`.trim();
      }
      getStatistics() {
        let e = Array.from(this.pendingReminders.values()).reduce((n, o) => n + o.length, 0),
          r = {};
        return (
          Object.values(pi).forEach((n) => {
            r[n] = this.eventEmitter.getListenerCount(n);
          }),
          {
            totalSessions: this.pendingReminders.size,
            totalPendingReminders: e,
            eventListenerCounts: r,
            config: this.config,
          }
        );
      }
    };
  });
var UU = j(() => {
  "use strict";
  Dsi();
  J0r();
  Z0r();
  i0e();
  bat();
});
function c9(t) {
  let e = t.candidates?.[0]?.content?.parts;
  if (e) {
    let s = e
      .filter((a) => {
        let u = a;
        return !u.thought && !u.redacted_thought;
      })
      .map((a) => a.text)
      .filter((a) => typeof a == "string");
    if (s.length > 0) return s.join("");
  }
  let r = t,
    n = r.choices?.[0]?.message?.content;
  if (n && typeof n == "string") return n;
  let o = r.choices?.[0]?.message?.reasoning_content;
  if (o && typeof o == "string") return o;
}
function Aat(t) {
  if (!t) return;
  let e = t
    .filter((r) => !r.thought)
    .map((r) => r.text)
    .filter((r) => typeof r == "string");
  if (e.length !== 0) return e.join("");
}
function Isi(t) {
  let e = t.candidates?.[0]?.content?.parts;
  if (!e) return;
  let r = e.filter((n) => !!n.functionCall).map((n) => n.functionCall);
  return r.length > 0 ? r : void 0;
}
function Rsi(t) {
  if (!t) return;
  let e = t.filter((r) => !!r.functionCall).map((r) => r.functionCall);
  return e.length > 0 ? e : void 0;
}
function ksi(t) {
  let e = Isi(t);
  if (e) return JSON.stringify(e, null, 2);
}
function Osi(t) {
  let e = Rsi(t);
  if (e) return JSON.stringify(e, null, 2);
}
function p2a(t) {
  let e = c9(t),
    r = ksi(t);
  if (e && r)
    return `${e}
${r}`;
  if (e) return e;
  if (r) return r;
}
function h2a(t) {
  let e = Aat(t),
    r = Osi(t);
  if (e && r)
    return `${e}
${r}`;
  if (e) return e;
  if (r) return r;
}
var $U = j(() => {
  "use strict";
});
var u3,
  xY = j(() => {
    "use strict";
    Fc();
    Ba();
    Bp();
    E0();
    bi();
    q_();
    Dp();
    u3 = class t extends Li {
      config;
      static Name = "web_search";
      static DisplayName = "Web Search";
      constructor(e) {
        (super(
          t.Name,
          t.DisplayName,
          `Performs a web search and returns results similar to a Google results page (snippet, date, url, link). 
      Expert on extracting distinct clues from the riddle to narrow down search scope, 
      and good at spliting complex questions into several focused searches and iterate based on findings. 
      alter search approach or search strategy if needed.
      Use tool web-fetch to get more detail about a specific url.`,
          Mi.Globe,
          Fi.Search,
          {
            type: Dt.OBJECT,
            properties: {
              intent: { type: Dt.STRING, description: "The intent of this search." },
              expected: {
                type: Dt.STRING,
                description: "The expected results of this search. If fail, what is the next step?",
              },
              query: {
                type: Dt.STRING,
                description: `Generate search queries to retrieve information from the web.
                The generated queries MUST adhere to the following constraints:
                A) Entity-First Grounding
                - No Attribute-Only Queries: Do not generate queries based solely on attributes/clues.
                - Candidate Generation: First, generate a Candidate Entity List (people, schools, places, etc.) using high-recall search terms.
                - Verification: Only generate verification queries tied to specific entities after they have been identified.

                B) Validity Constraints
                - Explicit Entity Anchors: Each query MUST include at least one explicit entity anchor.
                - Avoid Restatement: Queries that merely restate clues without an entity anchor are INVALID.
                - Numeric Filters: Numbers or age ranges can only be used as filters in combination with a named entity.
                - Multilingual Approach: Attempt multilingual queries simultaneously to improve search recall.

                Tips:
                - For entity nouns, use site:wikipedia.org to search within Wikipedia.
                - Use uppercase AND/OR operators (OR matches any term; AND requires all terms).
                - Use double quotes ("") for exact phrase matches.
                - Use two dots (..) without spaces for numeric ranges (e.g., "\u8BA1\u7B97\u673A\u91CC\u7A0B\u7891" 1950..2000).`,
              },
              num: { type: Dt.NUMBER, description: "Number of search results to return. Default is 15." },
              tbs: {
                type: Dt.STRING,
                description:
                  'Time range filter. h[number]=past hours, d[number]=past days, w[number]=past weeks, m[number]=past months, y[number]=past years. Example: "qdr:d4" for past 4 days.',
              },
            },
            required: ["intent", "expected", "query"],
          },
          !0,
          !1,
          ["WebSearch", "webSearch", "Web-Search"],
        ),
          (this.config = e));
      }
      validateParams(e) {
        let r = iu.validate(this.schema.parameters, e);
        return (
          r ||
          (!e.intent || e.intent.trim() === ""
            ? I.t("xinliuWebSearch.errors.intentCannotBeEmpty")
            : !e.expected || e.expected.trim() === ""
              ? I.t("xinliuWebSearch.errors.expectedCannotBeEmpty")
              : !e.query || e.query.trim() === ""
                ? I.t("xinliuWebSearch.errors.queryCannotBeEmpty")
                : null)
        );
      }
      getDescription(e) {
        return e?.query ? I.t("xinliuWebSearch.messages.searchingWeb", { query: e.query }) : "";
      }
      async execute(e, r) {
        let n = Date.now(),
          s = {
            "tool.name": "xinliu_web_search",
            "search.query": e.query,
            "api.endpoint": "https://platform.iflow.cn/api/search/webSearch /* @iflow-platform-endpoint */",
          };
        return jh("tool.xinliu_web_search", s, async () => {
          let a = {},
            u = {},
            c = !1;
          try {
            let m = await this.executeInternal(
                e,
                r,
                (f) => {
                  a = f;
                },
                (f) => {
                  u = f;
                },
                (f, p, h, g) => {
                  (mL(this.config, f, p, h, g, e.query), (c = !0));
                },
              ),
              d = Qo.getActiveSpan();
            if (d) {
              let f = Date.now() - n;
              d.setAttributes({
                "request.full_body": this.safeStringify(a),
                "response.full_body": this.safeStringify(u),
                "response.duration_ms": f,
                "response.success": !0,
                "response.results_count": m.sources?.length || 0,
              });
            }
            return (c || mL(this.config, Date.now() - n, !0, void 0, m.sources?.length || 0, e.query), m);
          } catch (m) {
            let d = Qo.getActiveSpan();
            if (d) {
              let f = Date.now() - n,
                p = m instanceof Error ? m.message : String(m);
              d.setAttributes({
                "request.full_body": this.safeStringify(a),
                "response.full_body": this.safeStringify(u),
                "response.duration_ms": f,
                "response.success": !1,
                "response.error_message": p,
              });
            }
            throw (c || mL(this.config, Date.now() - n, !1, "other_error", 0, e.query), m);
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
      async executeInternal(e, r, n, o, s) {
        let a = this.validateParams(e);
        if (a)
          return (
            s && s(0, !1, "param_error", 0),
            { llmContent: I.t("xinliuWebSearch.errors.invalidParameters", { reason: a }), returnDisplay: a }
          );
        let u = this.config.getSearchApiKey(),
          c = this.config.getSearchProvider();
        if (!u && !c)
          return (
            s && s(0, !1, "api_key_error", 0),
            {
              llmContent: I.t("xinliuWebSearch.errors.authNotSupported"),
              returnDisplay: "Search capability requires searchApiKey to be configured.",
            }
          );
        if (c)
          try {
            let f = await c.webSearch(e.query, typeof e.num == "number" && Number.isFinite(e.num) ? e.num : 15, r);
            if (!f || !f.results || f.results.length === 0)
              return (
                s && s(Date.now() - 0, !0, "empty_result", 0),
                {
                  llmContent: I.t("xinliuWebSearch.messages.noResults", { query: e.query }),
                  returnDisplay: I.t("xinliuWebSearch.messages.noResultsShort"),
                }
              );
            let p = "",
              h = [];
            return (
              f.results.forEach((g, b) => {
                let A = g.title || "Untitled",
                  y = g.url || g.link || "No link",
                  E = g.date || "No time",
                  v = g.snippet || "No snippet";
                (p += `
[${b + 1}] title: ${A}
`),
                  (p += `date: ${E}
`),
                  (p += `link: ${y}
`),
                  (p += `snippet: ${v}
`),
                  h.push({ web: { uri: y, title: A } });
              }),
              s && s(Date.now() - 0, !0, void 0, f.results.length),
              {
                llmContent: I.t("xinliuWebSearch.messages.searchResults", { query: e.query, results: p }),
                returnDisplay: I.t("xinliuWebSearch.messages.searchResultsReturned", { query: e.query }),
                sources: h,
              }
            );
          } catch (f) {
            let p = `Error during web search for query "${e.query}": ${mr(f)}`;
            return (
              console.error(p, f),
              s && s(Date.now() - 0, !1, "provider_error", 0),
              {
                llmContent: I.t("xinliuWebSearch.errors.searchFailed", { error: p }),
                returnDisplay: I.t("xinliuWebSearch.errors.searchFailedShort"),
              }
            );
          }
        let m = Date.now();
        try {
          let m = typeof e.num == "number" && Number.isFinite(e.num) ? e.num : 15,
            d = { keywords: e.query, num: m };
          n && n(d);
          let f = this.config.getSearchEndpoint(),
            p = { Authorization: `Bearer ${u}` },
            h = 3,
            g = 0,
            b = [];
          for (; g < h; )
            try {
              let E = new AbortController(),
                v = setTimeout(() => E.abort(), 12e4),
                C = await fetch(f, {
                  method: "POST",
                  headers: rH({ ...p, "Content-Type": "application/json" }),
                  body: JSON.stringify(d),
                  signal: r || E.signal,
                });
              clearTimeout(v);
              let x = await C.json();
              if ((o && o(x), (b = this.cleanResults(x)), (b && b.length > 0) || g === h - 1)) break;
              (g++, await new Promise((k) => setTimeout(k, 1e3)));
            } catch (E) {
              if (g < h - 1) {
                (g++, await new Promise((v) => setTimeout(v, 1e3)));
                continue;
              }
              throw E;
            }
          if (!b || b.length === 0)
            return (
              s && s(Date.now() - c, !0, "empty_result", 0),
              {
                llmContent: I.t("xinliuWebSearch.messages.noResults", { query: e.query }),
                returnDisplay: I.t("xinliuWebSearch.messages.noResultsShort"),
              }
            );
          let A = "",
            y = [];
          return (
            b.forEach((E, v) => {
              let C = E.title || "Untitled",
                x = E.url || E.link || "No link",
                k = E.time || E.date || "No time",
                R = E.abstractInfo || E.snippet || "No snippet";
              ((A += `
[${v + 1}] title: ${C}
`),
                (A += `date: ${k}
`),
                (A += `link: ${x}
`),
                (A += `snippet: ${R}
`),
                y.push({ web: { uri: x, title: C } }));
            }),
            s && s(Date.now() - c, !0, void 0, b.length),
            {
              llmContent: I.t("xinliuWebSearch.messages.searchResults", { query: e.query, results: A }),
              returnDisplay: I.t("xinliuWebSearch.messages.searchResultsReturned", { query: e.query }),
              sources: y,
            }
          );
        } catch (m) {
          let d = `Error during web search for query "${e.query}": ${mr(m)}`;
          return (
            console.error(d, m),
            s && s(Date.now() - c, !1, "network_error", 0),
            {
              llmContent: I.t("xinliuWebSearch.errors.searchFailed", { error: d }),
              returnDisplay: I.t("xinliuWebSearch.errors.searchFailedShort"),
            }
          );
        }
      }
      cleanResults(e) {
        let r = [];
        try {
          let n = this.extractResultItems(e);
          for (let o of n) {
            let s = { ...o };
            ("originChunk" in s && delete s.originChunk, r.push(s));
          }
        } catch (n) {
          console.error("Error cleaning results:", n);
        }
        return r;
      }
      extractResultItems(e) {
        let r = e?.data;
        if (!r) return [];
        if (Array.isArray(r?.organic)) return r.organic;
        let n = r?.originalOutput?.organic;
        return Array.isArray(n) ? n : Array.isArray(r) ? r : [];
      }
    };
  });
import { URL as g2a } from "url";
function _at(t) {
  try {
    let e = new g2a(t).hostname;
    return b2a.some((r) => r.test(e));
  } catch {
    return !1;
  }
}
async function Eat(t, e) {
  let r = new AbortController(),
    n = setTimeout(() => r.abort(), e);
  try {
    return await fetch(t, { signal: r.signal });
  } catch (o) {
    throw Go(o) && o.code === "ABORT_ERR" ? new yat(`Request timed out after ${e}ms`, "ETIMEDOUT") : new yat(mr(o));
  } finally {
    clearTimeout(n);
  }
}
var b2a,
  yat,
  emr = j(() => {
    "use strict";
    E0();
    ((b2a = [/^10\./, /^127\./, /^172\.(1[6-9]|2[0-9]|3[0-1])\./, /^192\.168\./, /^::1$/, /^fc00:/, /^fe80:/]),
      (yat = class extends Error {
        code;
        constructor(e, r) {
          (super(e), (this.code = r), (this.name = "FetchError"));
        }
      }));
  });
function Nsi(t) {
  return t.type === mc.Tag || t.type === mc.Script || t.type === mc.Style;
}
var mc,
  Psi,
  Bsi,
  Lsi,
  Msi,
  Fsi,
  Usi,
  $si,
  jsi,
  Qsi,
  a0e = j(() => {
    (function (t) {
      ((t.Root = "root"),
        (t.Text = "text"),
        (t.Directive = "directive"),
        (t.Comment = "comment"),
        (t.Script = "script"),
        (t.Style = "style"),
        (t.Tag = "tag"),
        (t.CDATA = "cdata"),
        (t.Doctype = "doctype"));
    })(mc || (mc = {}));
    ((Psi = mc.Root),
      (Bsi = mc.Text),
      (Lsi = mc.Directive),
      (Msi = mc.Comment),
      (Fsi = mc.Script),
      (Usi = mc.Style),
      ($si = mc.Tag),
      (jsi = mc.CDATA),
      (Qsi = mc.Doctype));
  });
function WO(t) {
  return Nsi(t);
}
function rmr(t) {
  return t.type === mc.CDATA;
}
function Cat(t) {
  return t.type === mc.Text;
}
function nmr(t) {
  return t.type === mc.Comment;
}
function A2a(t) {
  return t.type === mc.Directive;
}
function qsi(t) {
  return t.type === mc.Root;
}
function Hsi(t, e = !1) {
  let r;
  if (Cat(t)) r = new u0e(t.data);
  else if (nmr(t)) r = new a4e(t.data);
  else if (WO(t)) {
    let n = e ? tmr(t.children) : [],
      o = new m4e(t.name, { ...t.attribs }, n);
    (n.forEach((s) => (s.parent = o)),
      t.namespace != null && (o.namespace = t.namespace),
      t["x-attribsNamespace"] && (o["x-attribsNamespace"] = { ...t["x-attribsNamespace"] }),
      t["x-attribsPrefix"] && (o["x-attribsPrefix"] = { ...t["x-attribsPrefix"] }),
      (r = o));
  } else if (rmr(t)) {
    let n = e ? tmr(t.children) : [],
      o = new l4e(n);
    (n.forEach((s) => (s.parent = o)), (r = o));
  } else if (qsi(t)) {
    let n = e ? tmr(t.children) : [],
      o = new c0e(n);
    (n.forEach((s) => (s.parent = o)), t["x-mode"] && (o["x-mode"] = t["x-mode"]), (r = o));
  } else if (A2a(t)) {
    let n = new u4e(t.name, t.data);
    (t["x-name"] != null &&
      ((n["x-name"] = t["x-name"]), (n["x-publicId"] = t["x-publicId"]), (n["x-systemId"] = t["x-systemId"])),
      (r = n));
  } else throw new Error(`Not implemented yet: ${t.type}`);
  return (
    (r.startIndex = t.startIndex),
    (r.endIndex = t.endIndex),
    t.sourceCodeLocation != null && (r.sourceCodeLocation = t.sourceCodeLocation),
    r
  );
}
function tmr(t) {
  let e = t.map((r) => Hsi(r, !0));
  for (let r = 1; r < e.length; r++) ((e[r].prev = e[r - 1]), (e[r - 1].next = e[r]));
  return e;
}
var vat,
  s4e,
  u0e,
  a4e,
  u4e,
  c4e,
  l4e,
  c0e,
  m4e,
  imr = j(() => {
    a0e();
    ((vat = class {
      constructor() {
        ((this.parent = null),
          (this.prev = null),
          (this.next = null),
          (this.startIndex = null),
          (this.endIndex = null));
      }
      get parentNode() {
        return this.parent;
      }
      set parentNode(e) {
        this.parent = e;
      }
      get previousSibling() {
        return this.prev;
      }
      set previousSibling(e) {
        this.prev = e;
      }
      get nextSibling() {
        return this.next;
      }
      set nextSibling(e) {
        this.next = e;
      }
      cloneNode(e = !1) {
        return Hsi(this, e);
      }
    }),
      (s4e = class extends vat {
        constructor(e) {
          (super(), (this.data = e));
        }
        get nodeValue() {
          return this.data;
        }
        set nodeValue(e) {
          this.data = e;
        }
      }),
      (u0e = class extends s4e {
        constructor() {
          (super(...arguments), (this.type = mc.Text));
        }
        get nodeType() {
          return 3;
        }
      }),
      (a4e = class extends s4e {
        constructor() {
          (super(...arguments), (this.type = mc.Comment));
        }
        get nodeType() {
          return 8;
        }
      }),
      (u4e = class extends s4e {
        constructor(e, r) {
          (super(r), (this.name = e), (this.type = mc.Directive));
        }
        get nodeType() {
          return 1;
        }
      }),
      (c4e = class extends vat {
        constructor(e) {
          (super(), (this.children = e));
        }
        get firstChild() {
          var e;
          return (e = this.children[0]) !== null && e !== void 0 ? e : null;
        }
        get lastChild() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        }
        get childNodes() {
          return this.children;
        }
        set childNodes(e) {
          this.children = e;
        }
      }),
      (l4e = class extends c4e {
        constructor() {
          (super(...arguments), (this.type = mc.CDATA));
        }
        get nodeType() {
          return 4;
        }
      }),
      (c0e = class extends c4e {
        constructor() {
          (super(...arguments), (this.type = mc.Root));
        }
        get nodeType() {
          return 9;
        }
      }),
      (m4e = class extends c4e {
        constructor(e, r, n = [], o = e === "script" ? mc.Script : e === "style" ? mc.Style : mc.Tag) {
          (super(n), (this.name = e), (this.attribs = r), (this.type = o));
        }
        get nodeType() {
          return 1;
        }
        get tagName() {
          return this.name;
        }
        set tagName(e) {
          this.name = e;
        }
        get attributes() {
          return Object.keys(this.attribs).map((e) => {
            var r, n;
            return {
              name: e,
              value: this.attribs[e],
              namespace: (r = this["x-attribsNamespace"]) === null || r === void 0 ? void 0 : r[e],
              prefix: (n = this["x-attribsPrefix"]) === null || n === void 0 ? void 0 : n[e],
            };
          });
        }
      }));
  });
var Vsi,
  l0e,
  QD = j(() => {
    a0e();
    imr();
    imr();
    ((Vsi = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }),
      (l0e = class {
        constructor(e, r, n) {
          ((this.dom = []),
            (this.root = new c0e(this.dom)),
            (this.done = !1),
            (this.tagStack = [this.root]),
            (this.lastNode = null),
            (this.parser = null),
            typeof r == "function" && ((n = r), (r = Vsi)),
            typeof e == "object" && ((r = e), (e = void 0)),
            (this.callback = e ?? null),
            (this.options = r ?? Vsi),
            (this.elementCB = n ?? null));
        }
        onparserinit(e) {
          this.parser = e;
        }
        onreset() {
          ((this.dom = []),
            (this.root = new c0e(this.dom)),
            (this.done = !1),
            (this.tagStack = [this.root]),
            (this.lastNode = null),
            (this.parser = null));
        }
        onend() {
          this.done || ((this.done = !0), (this.parser = null), this.handleCallback(null));
        }
        onerror(e) {
          this.handleCallback(e);
        }
        onclosetag() {
          this.lastNode = null;
          let e = this.tagStack.pop();
          (this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e));
        }
        onopentag(e, r) {
          let n = this.options.xmlMode ? mc.Tag : void 0,
            o = new m4e(e, r, void 0, n);
          (this.addNode(o), this.tagStack.push(o));
        }
        ontext(e) {
          let { lastNode: r } = this;
          if (r && r.type === mc.Text)
            ((r.data += e), this.options.withEndIndices && (r.endIndex = this.parser.endIndex));
          else {
            let n = new u0e(e);
            (this.addNode(n), (this.lastNode = n));
          }
        }
        oncomment(e) {
          if (this.lastNode && this.lastNode.type === mc.Comment) {
            this.lastNode.data += e;
            return;
          }
          let r = new a4e(e);
          (this.addNode(r), (this.lastNode = r));
        }
        oncommentend() {
          this.lastNode = null;
        }
        oncdatastart() {
          let e = new u0e(""),
            r = new l4e([e]);
          (this.addNode(r), (e.parent = r), (this.lastNode = e));
        }
        oncdataend() {
          this.lastNode = null;
        }
        onprocessinginstruction(e, r) {
          let n = new u4e(e, r);
          this.addNode(n);
        }
        handleCallback(e) {
          if (typeof this.callback == "function") this.callback(e, this.dom);
          else if (e) throw e;
        }
        addNode(e) {
          let r = this.tagStack[this.tagStack.length - 1],
            n = r.children[r.children.length - 1];
          (this.options.withStartIndices && (e.startIndex = this.parser.startIndex),
            this.options.withEndIndices && (e.endIndex = this.parser.endIndex),
            r.children.push(e),
            n && ((e.prev = n), (n.next = e)),
            (e.parent = r),
            (this.lastNode = null));
        }
      }));
  });
function _2a(t) {
  let e = [...t.matchAll(y2a)].map((n) => n.index || 0);
  e.unshift(-1);
  let r = omr(e, 0, e.length);
  return (n) => zsi(r, n);
}
function omr(t, e, r) {
  if (r - e == 1) return { offset: t[e], index: e + 1 };
  let n = Math.ceil((e + r) / 2),
    o = omr(t, e, n),
    s = omr(t, n, r);
  return { offset: o.offset, low: o, high: s };
}
function zsi(t, e) {
  return (function (r) {
    return Object.prototype.hasOwnProperty.call(r, "index");
  })(t)
    ? { line: t.index, column: e - t.offset }
    : zsi(t.high.offset < e ? t.high : t.low, e);
}
function smr(t, e = "", r = {}) {
  let n = typeof e != "string" ? e : r,
    o = typeof e == "string" ? e : "",
    s = t.map(E2a),
    a = !!n.lineNumbers;
  return function (u, c = 0) {
    let m = a ? _2a(u) : () => ({ line: 0, column: 0 }),
      d = c,
      f = [];
    e: for (; d < u.length; ) {
      let p = !1;
      for (let h of s) {
        h.regex.lastIndex = d;
        let g = h.regex.exec(u);
        if (g && g[0].length > 0) {
          if (!h.discard) {
            let b = m(d),
              A =
                typeof h.replace == "string"
                  ? g[0].replace(new RegExp(h.regex.source, h.regex.flags), h.replace)
                  : g[0];
            f.push({ state: o, name: h.name, text: A, offset: d, len: g[0].length, line: b.line, column: b.column });
          }
          if (((d = h.regex.lastIndex), (p = !0), h.push)) {
            let b = h.push(u, d);
            (f.push(...b.tokens), (d = b.offset));
          }
          if (h.pop) break e;
          break;
        }
      }
      if (!p) break;
    }
    return { tokens: f, offset: d, complete: u.length <= d };
  };
}
function E2a(t, e) {
  return { ...t, regex: v2a(t, e) };
}
function v2a(t, e) {
  if (t.name.length === 0) throw new Error(`Rule #${e} has empty name, which is not allowed.`);
  if (
    (function (r) {
      return Object.prototype.hasOwnProperty.call(r, "regex");
    })(t)
  )
    return (function (r) {
      if (r.global)
        throw new Error(`Regular expression /${r.source}/${r.flags} contains the global flag, which is not allowed.`);
      return r.sticky ? r : new RegExp(r.source, r.flags + "y");
    })(t.regex);
  if (
    (function (r) {
      return Object.prototype.hasOwnProperty.call(r, "str");
    })(t)
  ) {
    if (t.str.length === 0) throw new Error(`Rule #${e} ("${t.name}") has empty "str" property, which is not allowed.`);
    return new RegExp(Wsi(t.str), "y");
  }
  return new RegExp(Wsi(t.name), "y");
}
function Wsi(t) {
  return t.replace(/[-[\]{}()*+!<=:?./\\^$|#\s,]/g, "\\$&");
}
var y2a,
  Ysi = j(() => {
    y2a = /\n/g;
  });
function GD(t, e) {
  return (r, n) => {
    let o = n,
      s;
    return (
      n < r.tokens.length ? ((s = t(r.tokens[n], r, n)), s !== void 0 && o++) : e?.(r, n),
      s === void 0 ? { matched: !1 } : { matched: !0, position: o, value: s }
    );
  };
}
function amr(t, e) {
  return t.matched ? { matched: !0, position: t.position, value: e(t.value, t.position) } : t;
}
function Sat(t, e) {
  return t.matched ? e(t) : t;
}
function qg(t, e) {
  return (r, n) => amr(t(r, n), (o, s) => e(o, r, n, s));
}
function d4e(t, e) {
  return (r, n) => {
    let o = t(r, n);
    return o.matched ? o : { matched: !0, position: n, value: e };
  };
}
function m0e(...t) {
  return (e, r) => {
    for (let n of t) {
      let o = n(e, r);
      if (o.matched) return o;
    }
    return { matched: !1 };
  };
}
function jU(t, e) {
  return (r, n) => {
    let o = t(r, n);
    return o.matched ? o : e(r, n);
  };
}
function C2a(t, e) {
  return (r, n) => {
    let o = [],
      s = !0;
    do {
      let a = t(r, n);
      a.matched && e(a.value, o.length + 1, r, n, a.position) ? (o.push(a.value), (n = a.position)) : (s = !1);
    } while (s);
    return { matched: !0, position: n, value: o };
  };
}
function wat(t) {
  return C2a(t, () => !0);
}
function Ksi(t) {
  return fA(t, wat(t), (e, r) => [e, ...r]);
}
function fA(t, e, r) {
  return (n, o) => Sat(t(n, o), (s) => amr(e(n, s.position), (a, u) => r(s.value, a, n, o, u)));
}
function Jsi(t, e) {
  return fA(t, e, (r) => r);
}
function umr(t, e) {
  return fA(t, e, (r, n) => n);
}
function xat(t, e, r, n) {
  return (o, s) =>
    Sat(t(o, s), (a) => Sat(e(o, a.position), (u) => amr(r(o, u.position), (c, m) => n(a.value, u.value, c, o, s, m))));
}
function cmr(t, e, r) {
  return xat(t, e, r, (n, o) => o);
}
function S2a(...t) {
  return (e, r) => {
    let n = [],
      o = r;
    for (let s of t) {
      let a = s(e, o);
      if (a.matched) (n.push(a.value), (o = a.position));
      else return { matched: !1 };
    }
    return { matched: !0, position: o, value: n };
  };
}
function Xsi(...t) {
  return w2a(S2a(...t));
}
function w2a(t) {
  return qg(t, (e) => e.flatMap((r) => r));
}
function x2a(t, e) {
  return (r, n) => {
    let o = !0,
      s = t,
      a = n;
    do {
      let u = e(s, r, a)(r, a);
      u.matched ? ((s = u.value), (a = u.position)) : (o = !1);
    } while (o);
    return { matched: !0, position: a, value: s };
  };
}
function T2a(t, e, r) {
  return x2a(t, (n) => qg(e, (o, s, a, u) => r(n, o, s, a, u)));
}
function lmr(t, e, r) {
  return D2a(t, (n) =>
    T2a(
      n,
      fA(e, r, (o, s) => [o, s]),
      (o, [s, a]) => s(o, a),
    ),
  );
}
function D2a(t, e) {
  return (r, n) => Sat(t(r, n), (o) => e(o.value, r, n, o.position)(r, o.position));
}
var Zsi = j(() => {});
function aai([t, e, r], [n, o, s]) {
  return [t + n, e + o, r + s];
}
function F2a(t) {
  return t.reduce(aai, [0, 0, 0]);
}
function fmr(t) {
  let e = M2a(t);
  return Q2a({ tokens: e.tokens, options: void 0 }, 0).value;
}
function Bm(t) {
  return GD((e) => (e.name === t ? !0 : void 0));
}
function f0e(t) {
  return cmr(mmr, t, mmr);
}
function n5a(t, e) {
  if (!(typeof e == "string" || e instanceof String))
    throw new Error("Expected a selector string. Actual input is not a string!");
  let r = L2a(e);
  if (!r.complete)
    throw new Error(
      `The input "${e}" was only partially tokenized, stopped at offset ${r.offset}!
` + nai(e, r.offset),
    );
  let n = f0e(t)({ tokens: r.tokens, options: void 0 }, 0);
  if (!n.matched) throw new Error(`No match for "${e}" input!`);
  if (n.position < r.tokens.length) {
    let o = r.tokens[n.position];
    throw new Error(
      `The input "${e}" was only partially parsed, stopped at offset ${o.offset}!
` + nai(e, o.offset, o.len),
    );
  }
  return n.value;
}
function nai(t, e, r = 1) {
  return `${t.replace(/(\t)|(\r)|(\n)/g, (n, o, s) => (o ? "\u2409" : s ? "\u240D" : "\u240A"))}
${"".padEnd(e)}${"^".repeat(r)}`;
}
function cai(t) {
  return n5a(dmr, t);
}
function DS(t) {
  if (!t.type) throw new Error("This is not an AST node.");
  switch (t.type) {
    case "universal":
      return Tat(t.namespace) + "*";
    case "tag":
      return Tat(t.namespace) + d0e(t.name);
    case "class":
      return "." + d0e(t.name);
    case "id":
      return "#" + d0e(t.name);
    case "attrPresence":
      return `[${Tat(t.namespace)}${d0e(t.name)}]`;
    case "attrValue":
      return `[${Tat(t.namespace)}${d0e(t.name)}${t.matcher}"${i5a(t.value)}"${t.modifier ? t.modifier : ""}]`;
    case "combinator":
      return DS(t.left) + t.combinator;
    case "compound":
      return t.list.reduce((e, r) => (r.type === "combinator" ? DS(r) + e : e + DS(r)), "");
    case "list":
      return t.list.map(DS).join(",");
  }
}
function Tat(t) {
  return t || t === "" ? d0e(t) + "|" : "";
}
function Dat(t) {
  return `\\${t.codePointAt(0).toString(16)} `;
}
function d0e(t) {
  return t.replace(
    /(^[0-9])|(^-[0-9])|(^-$)|([-0-9a-zA-Z_]|[^\x00-\x7F])|(\x00)|([\x01-\x1f]|\x7f)|([\s\S])/g,
    (e, r, n, o, s, a, u, c) =>
      r ? Dat(r) : n ? "-" + Dat(n.slice(1)) : o ? "\\-" : s || (a ? "\uFFFD" : u ? Dat(u) : "\\" + c),
  );
}
function i5a(t) {
  return t.replace(/(")|(\\)|(\x00)|([\x01-\x1f]|\x7f)/g, (e, r, n, o, s) =>
    r ? '\\"' : n ? "\\\\" : o ? "\uFFFD" : Dat(s),
  );
}
function f4e(t) {
  if (!t.type) throw new Error("This is not an AST node.");
  switch (t.type) {
    case "compound": {
      (t.list.forEach(f4e), t.list.sort((e, r) => lai(iai(e), iai(r))));
      break;
    }
    case "combinator": {
      f4e(t.left);
      break;
    }
    case "list": {
      (t.list.forEach(f4e), t.list.sort((e, r) => (DS(e) < DS(r) ? -1 : 1)));
      break;
    }
  }
  return t;
}
function iai(t) {
  switch (t.type) {
    case "universal":
      return [1];
    case "tag":
      return [1];
    case "id":
      return [2];
    case "class":
      return [3, t.name];
    case "attrPresence":
      return [4, DS(t)];
    case "attrValue":
      return [5, DS(t)];
    case "combinator":
      return [15, DS(t)];
  }
}
function gmr(t, e) {
  return lai(t, e);
}
function lai(t, e) {
  if (!Array.isArray(t) || !Array.isArray(e)) throw new Error("Arguments must be arrays.");
  let r = t.length < e.length ? t.length : e.length;
  for (let n = 0; n < r; n++) if (t[n] !== e[n]) return t[n] < e[n] ? -1 : 1;
  return t.length - e.length;
}
var R2a,
  oai,
  Iat,
  h4e,
  g4e,
  k2a,
  sai,
  O2a,
  N2a,
  P2a,
  B2a,
  L2a,
  M2a,
  U2a,
  $2a,
  j2a,
  Q2a,
  pmr,
  mmr,
  p4e,
  G2a,
  q2a,
  uai,
  hmr,
  H2a,
  V2a,
  W2a,
  z2a,
  eai,
  Y2a,
  K2a,
  J2a,
  X2a,
  Z2a,
  e5a,
  tai,
  rai,
  t5a,
  r5a,
  dmr,
  _Dc,
  bmr = j(() => {
    Ysi();
    Zsi();
    ((R2a = "(?:[ \\t\\r\\n\\f]*)"),
      (oai = "(?:\\n|\\r\\n|\\r|\\f)"),
      (Iat = "[^\\x00-\\x7F]"),
      (h4e = "(?:\\\\[0-9a-f]{1,6}(?:\\r\\n|[ \\n\\r\\t\\f])?)"),
      (g4e = "(?:\\\\[^\\n\\r\\f0-9a-f])"),
      (k2a = `(?:[_a-z]|${Iat}|${h4e}|${g4e})`),
      (sai = `(?:[_a-z0-9-]|${Iat}|${h4e}|${g4e})`),
      (O2a = `(?:${sai}+)`),
      (N2a = `(?:[-]?${k2a}${sai}*)`),
      (P2a = `'([^\\n\\r\\f\\\\']|\\\\${oai}|${Iat}|${h4e}|${g4e})*'`),
      (B2a = `"([^\\n\\r\\f\\\\"]|\\\\${oai}|${Iat}|${h4e}|${g4e})*"`),
      (L2a = smr([
        { name: "ws", regex: new RegExp(R2a) },
        { name: "hash", regex: new RegExp(`#${O2a}`, "i") },
        { name: "ident", regex: new RegExp(N2a, "i") },
        { name: "str1", regex: new RegExp(P2a, "i") },
        { name: "str2", regex: new RegExp(B2a, "i") },
        { name: "*" },
        { name: "." },
        { name: "," },
        { name: "[" },
        { name: "]" },
        { name: "=" },
        { name: ">" },
        { name: "|" },
        { name: "+" },
        { name: "~" },
        { name: "^" },
        { name: "$" },
      ])),
      (M2a = smr([
        { name: "unicode", regex: new RegExp(h4e, "i") },
        { name: "escape", regex: new RegExp(g4e, "i") },
        { name: "any", regex: new RegExp("[\\s\\S]", "i") },
      ])));
    ((U2a = GD((t) => (t.name === "unicode" ? String.fromCodePoint(parseInt(t.text.slice(1), 16)) : void 0))),
      ($2a = GD((t) => (t.name === "escape" ? t.text.slice(1) : void 0))),
      (j2a = GD((t) => (t.name === "any" ? t.text : void 0))),
      (Q2a = qg(wat(m0e(U2a, $2a, j2a)), (t) => t.join(""))));
    ((pmr = GD((t) => (t.name === "ws" ? null : void 0))), (mmr = d4e(pmr, null)));
    ((p4e = GD((t) => (t.name === "ident" ? fmr(t.text) : void 0))),
      (G2a = GD((t) => (t.name === "hash" ? fmr(t.text.slice(1)) : void 0))),
      (q2a = GD((t) => (t.name.startsWith("str") ? fmr(t.text.slice(1, -1)) : void 0))),
      (uai = Jsi(d4e(p4e, ""), Bm("|"))),
      (hmr = jU(
        fA(uai, p4e, (t, e) => ({ name: e, namespace: t })),
        qg(p4e, (t) => ({ name: t, namespace: null })),
      )),
      (H2a = jU(
        fA(uai, Bm("*"), (t) => ({ type: "universal", namespace: t, specificity: [0, 0, 0] })),
        qg(Bm("*"), () => ({ type: "universal", namespace: null, specificity: [0, 0, 0] })),
      )),
      (V2a = qg(hmr, ({ name: t, namespace: e }) => ({ type: "tag", name: t, namespace: e, specificity: [0, 0, 1] }))),
      (W2a = fA(Bm("."), p4e, (t, e) => ({ type: "class", name: e, specificity: [0, 1, 0] }))),
      (z2a = qg(G2a, (t) => ({ type: "id", name: t, specificity: [1, 0, 0] }))),
      (eai = GD((t) => {
        if (t.name === "ident") {
          if (t.text === "i" || t.text === "I") return "i";
          if (t.text === "s" || t.text === "S") return "s";
        }
      })),
      (Y2a = jU(
        fA(q2a, d4e(umr(mmr, eai), null), (t, e) => ({ value: t, modifier: e })),
        fA(p4e, d4e(umr(pmr, eai), null), (t, e) => ({ value: t, modifier: e })),
      )),
      (K2a = m0e(
        qg(Bm("="), () => "="),
        fA(Bm("~"), Bm("="), () => "~="),
        fA(Bm("|"), Bm("="), () => "|="),
        fA(Bm("^"), Bm("="), () => "^="),
        fA(Bm("$"), Bm("="), () => "$="),
        fA(Bm("*"), Bm("="), () => "*="),
      )),
      (J2a = xat(Bm("["), f0e(hmr), Bm("]"), (t, { name: e, namespace: r }) => ({
        type: "attrPresence",
        name: e,
        namespace: r,
        specificity: [0, 1, 0],
      }))),
      (X2a = cmr(
        Bm("["),
        xat(f0e(hmr), K2a, f0e(Y2a), ({ name: t, namespace: e }, r, { value: n, modifier: o }) => ({
          type: "attrValue",
          name: t,
          namespace: e,
          matcher: r,
          value: n,
          modifier: o,
          specificity: [0, 1, 0],
        })),
        Bm("]"),
      )),
      (Z2a = jU(J2a, X2a)),
      (e5a = jU(H2a, V2a)),
      (tai = m0e(z2a, W2a, Z2a)),
      (rai = qg(jU(Xsi(e5a, wat(tai)), Ksi(tai)), (t) => ({
        type: "compound",
        list: t,
        specificity: F2a(t.map((e) => e.specificity)),
      }))),
      (t5a = m0e(
        qg(Bm(">"), () => ">"),
        qg(Bm("+"), () => "+"),
        qg(Bm("~"), () => "~"),
        fA(Bm("|"), Bm("|"), () => "||"),
      )),
      (r5a = jU(
        f0e(t5a),
        qg(pmr, () => " "),
      )),
      (dmr = lmr(
        rai,
        qg(r5a, (t) => (e, r) => ({
          type: "compound",
          list: [...r.list, { type: "combinator", combinator: t, left: e, specificity: e.specificity }],
          specificity: aai(e.specificity, r.specificity),
        })),
        rai,
      )),
      (_Dc = lmr(
        qg(dmr, (t) => ({ type: "list", list: [t] })),
        qg(f0e(Bm(",")), () => (t, e) => ({ type: "list", list: [...t.list, e] })),
        dmr,
      )));
  });
function s5a(t) {
  let e = t.length,
    r = new Array(e);
  for (let n = 0; n < e; n++) {
    let [o, s] = t[n],
      a = a5a(cai(o));
    r[n] = {
      ast: a,
      terminal: { type: "terminal", valueContainer: { index: n, value: s, specificity: a.specificity } },
    };
  }
  return r;
}
function a5a(t) {
  return (dai(t), f4e(t), t);
}
function dai(t) {
  let e = [];
  (t.list.forEach((r) => {
    switch (r.type) {
      case "class":
        e.push({
          matcher: "~=",
          modifier: null,
          name: "class",
          namespace: null,
          specificity: r.specificity,
          type: "attrValue",
          value: r.name,
        });
        break;
      case "id":
        e.push({
          matcher: "=",
          modifier: null,
          name: "id",
          namespace: null,
          specificity: r.specificity,
          type: "attrValue",
          value: r.name,
        });
        break;
      case "combinator":
        (dai(r.left), e.push(r));
        break;
      case "universal":
        break;
      default:
        e.push(r);
        break;
    }
  }),
    (t.list = e));
}
function p0e(t) {
  let e = [];
  for (; t.length; ) {
    let r = hai(t, (a) => !0, fai),
      { matches: n, nonmatches: o, empty: s } = c5a(t, r);
    ((t = o), n.length && e.push(l5a(r, n)), s.length && e.push(...u5a(s)));
  }
  return e;
}
function u5a(t) {
  let e = [];
  for (let r of t) {
    let n = r.terminal;
    if (n.type === "terminal") e.push(n);
    else {
      let { matches: o, rest: s } = h5a(n.cont, (a) => a.type === "terminal");
      (o.forEach((a) => e.push(a)), s.length && ((n.cont = s), e.push(n)));
    }
  }
  return e;
}
function c5a(t, e) {
  let r = [],
    n = [],
    o = [];
  for (let s of t) {
    let a = s.ast.list;
    a.length ? (a.some((c) => fai(c) === e) ? r : n).push(s) : o.push(s);
  }
  return { matches: r, nonmatches: n, empty: o };
}
function fai(t) {
  switch (t.type) {
    case "attrPresence":
      return `attrPresence ${t.name}`;
    case "attrValue":
      return `attrValue ${t.name}`;
    case "combinator":
      return `combinator ${t.combinator}`;
    default:
      return t.type;
  }
}
function l5a(t, e) {
  if (t === "tag") return m5a(e);
  if (t.startsWith("attrValue ")) return f5a(t.substring(10), e);
  if (t.startsWith("attrPresence ")) return d5a(t.substring(13), e);
  if (t === "combinator >") return mai(">", e);
  if (t === "combinator +") return mai("+", e);
  throw new Error(`Unsupported selector kind: ${t}`);
}
function m5a(t) {
  let e = Amr(
    t,
    (n) => n.type === "tag",
    (n) => n.name,
  );
  return {
    type: "tagName",
    variants: Object.entries(e).map(([n, o]) => ({ type: "variant", value: n, cont: p0e(o.items) })),
  };
}
function d5a(t, e) {
  for (let r of e) pai(r, (n) => n.type === "attrPresence" && n.name === t);
  return { type: "attrPresence", name: t, cont: p0e(e) };
}
function f5a(t, e) {
  let r = Amr(
      e,
      (o) => o.type === "attrValue" && o.name === t,
      (o) => `${o.matcher} ${o.modifier || ""} ${o.value}`,
    ),
    n = [];
  for (let o of Object.values(r)) {
    let s = o.oneSimpleSelector,
      a = p5a(s),
      u = p0e(o.items);
    n.push({ type: "matcher", matcher: s.matcher, modifier: s.modifier, value: s.value, predicate: a, cont: u });
  }
  return { type: "attrValue", name: t, matchers: n };
}
function p5a(t) {
  if (t.modifier === "i") {
    let e = t.value.toLowerCase();
    switch (t.matcher) {
      case "=":
        return (r) => e === r.toLowerCase();
      case "~=":
        return (r) =>
          r
            .toLowerCase()
            .split(/[ \t]+/)
            .includes(e);
      case "^=":
        return (r) => r.toLowerCase().startsWith(e);
      case "$=":
        return (r) => r.toLowerCase().endsWith(e);
      case "*=":
        return (r) => r.toLowerCase().includes(e);
      case "|=":
        return (r) => {
          let n = r.toLowerCase();
          return e === n || (n.startsWith(e) && n[e.length] === "-");
        };
    }
  } else {
    let e = t.value;
    switch (t.matcher) {
      case "=":
        return (r) => e === r;
      case "~=":
        return (r) => r.split(/[ \t]+/).includes(e);
      case "^=":
        return (r) => r.startsWith(e);
      case "$=":
        return (r) => r.endsWith(e);
      case "*=":
        return (r) => r.includes(e);
      case "|=":
        return (r) => e === r || (r.startsWith(e) && r[e.length] === "-");
    }
  }
}
function mai(t, e) {
  let r = Amr(
      e,
      (o) => o.type === "combinator" && o.combinator === t,
      (o) => DS(o.left),
    ),
    n = [];
  for (let o of Object.values(r)) {
    let s = p0e(o.items),
      a = o.oneSimpleSelector.left;
    n.push({ ast: a, terminal: { type: "popElement", cont: s } });
  }
  return { type: "pushElement", combinator: t, cont: p0e(n) };
}
function Amr(t, e, r) {
  let n = {};
  for (; t.length; ) {
    let o = hai(t, e, r),
      s = (d) => e(d) && r(d) === o,
      a = (d) => d.ast.list.some(s),
      { matches: u, rest: c } = g5a(t, a),
      m = null;
    for (let d of u) {
      let f = pai(d, s);
      m || (m = f);
    }
    if (m == null) throw new Error("No simple selector is found.");
    ((n[o] = { oneSimpleSelector: m, items: u }), (t = c));
  }
  return n;
}
function pai(t, e) {
  let r = t.ast.list,
    n = new Array(r.length),
    o = -1;
  for (let a = r.length; a-- > 0; ) e(r[a]) && ((n[a] = !0), (o = a));
  if (o == -1) throw new Error("Couldn't find the required simple selector.");
  let s = r[o];
  return ((t.ast.list = r.filter((a, u) => !n[u])), s);
}
function hai(t, e, r) {
  let n = {};
  for (let a of t) {
    let u = {};
    for (let c of a.ast.list.filter(e)) u[r(c)] = !0;
    for (let c of Object.keys(u)) n[c] ? n[c]++ : (n[c] = 1);
  }
  let o = "",
    s = 0;
  for (let a of Object.entries(n)) a[1] > s && ((o = a[0]), (s = a[1]));
  return o;
}
function h5a(t, e) {
  let r = [],
    n = [];
  for (let o of t) e(o) ? r.push(o) : n.push(o);
  return { matches: r, rest: n };
}
function g5a(t, e) {
  let r = [],
    n = [];
  for (let o of t) e(o) ? r.push(o) : n.push(o);
  return { matches: r, rest: n };
}
function b5a(t, e) {
  let r = gmr(e.specificity, t.specificity);
  return r > 0 || (r === 0 && e.index < t.index);
}
function A5a(t, e) {
  let r = gmr(e.specificity, t.specificity);
  return r > 0 || (r === 0 && e.index > t.index);
}
var b4e,
  Rat,
  ymr = j(() => {
    bmr();
    bmr();
    b4e = class {
      constructor(e) {
        this.branches = p0e(s5a(e));
      }
      build(e) {
        return e(this.branches);
      }
    };
    Rat = class {
      constructor(e) {
        this.f = e;
      }
      pickAll(e) {
        return this.f(e);
      }
      pick1(e, r = !1) {
        let n = this.f(e),
          o = n.length;
        if (o === 0) return null;
        if (o === 1) return n[0].value;
        let s = r ? b5a : A5a,
          a = n[0];
        for (let u = 1; u < o; u++) {
          let c = n[u];
          s(a, c) && (a = c);
        }
        return a.value;
      }
    };
  });
function _mr(t) {
  return new Rat(h0e(t));
}
function h0e(t) {
  let e = t.map(y5a);
  return (r, ...n) => e.flatMap((o) => o(r, ...n));
}
function y5a(t) {
  switch (t.type) {
    case "terminal": {
      let e = [t.valueContainer];
      return (r, ...n) => e;
    }
    case "tagName":
      return _5a(t);
    case "attrValue":
      return v5a(t);
    case "attrPresence":
      return E5a(t);
    case "pushElement":
      return C5a(t);
    case "popElement":
      return w5a(t);
  }
}
function _5a(t) {
  let e = {};
  for (let r of t.variants) e[r.value] = h0e(r.cont);
  return (r, ...n) => {
    let o = e[r.name];
    return o ? o(r, ...n) : [];
  };
}
function E5a(t) {
  let e = t.name,
    r = h0e(t.cont);
  return (n, ...o) => (Object.prototype.hasOwnProperty.call(n.attribs, e) ? r(n, ...o) : []);
}
function v5a(t) {
  let e = [];
  for (let n of t.matchers) {
    let o = n.predicate,
      s = h0e(n.cont);
    e.push((a, u, ...c) => (o(a) ? s(u, ...c) : []));
  }
  let r = t.name;
  return (n, ...o) => {
    let s = n.attribs[r];
    return s || s === "" ? e.flatMap((a) => a(s, n, ...o)) : [];
  };
}
function C5a(t) {
  let e = h0e(t.cont),
    r = t.combinator === "+" ? gai : S5a;
  return (n, ...o) => {
    let s = r(n);
    return s === null ? [] : e(s, n, ...o);
  };
}
function w5a(t) {
  let e = h0e(t.cont);
  return (r, n, ...o) => e(n, ...o);
}
var gai,
  S5a,
  bai = j(() => {
    QD();
    ymr();
    ((gai = (t) => {
      let e = t.prev;
      return e === null ? null : WO(e) ? e : gai(e);
    }),
      (S5a = (t) => {
        let e = t.parent;
        return e && WO(e) ? e : null;
      }));
  });
var kat,
  Aai = j(() => {
    kat = new Uint16Array(
      '\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'
        .split("")
        .map((t) => t.charCodeAt(0)),
    );
  });
var Oat,
  yai = j(() => {
    Oat = new Uint16Array(
      "\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map((t) => t.charCodeAt(0)),
    );
  });
function A4e(t) {
  var e;
  return (t >= 55296 && t <= 57343) || t > 1114111 ? 65533 : (e = x5a.get(t)) !== null && e !== void 0 ? e : t;
}
var Emr,
  x5a,
  g0e,
  vmr = j(() => {
    ((x5a = new Map([
      [0, 65533],
      [128, 8364],
      [130, 8218],
      [131, 402],
      [132, 8222],
      [133, 8230],
      [134, 8224],
      [135, 8225],
      [136, 710],
      [137, 8240],
      [138, 352],
      [139, 8249],
      [140, 338],
      [142, 381],
      [145, 8216],
      [146, 8217],
      [147, 8220],
      [148, 8221],
      [149, 8226],
      [150, 8211],
      [151, 8212],
      [152, 732],
      [153, 8482],
      [154, 353],
      [155, 8250],
      [156, 339],
      [158, 382],
      [159, 376],
    ])),
      (g0e =
        (Emr = String.fromCodePoint) !== null && Emr !== void 0
          ? Emr
          : function (t) {
              let e = "";
              return (
                t > 65535 &&
                  ((t -= 65536), (e += String.fromCharCode(((t >>> 10) & 1023) | 55296)), (t = 56320 | (t & 1023))),
                (e += String.fromCharCode(t)),
                e
              );
            }));
  });
function Cmr(t) {
  return t >= l3.ZERO && t <= l3.NINE;
}
function D5a(t) {
  return (t >= l3.UPPER_A && t <= l3.UPPER_F) || (t >= l3.LOWER_A && t <= l3.LOWER_F);
}
function I5a(t) {
  return (t >= l3.UPPER_A && t <= l3.UPPER_Z) || (t >= l3.LOWER_A && t <= l3.LOWER_Z) || Cmr(t);
}
function R5a(t) {
  return t === l3.EQUALS || I5a(t);
}
function _ai(t) {
  let e = "",
    r = new Nat(t, (n) => (e += g0e(n)));
  return function (o, s) {
    let a = 0,
      u = 0;
    for (; (u = o.indexOf("&", u)) >= 0; ) {
      ((e += o.slice(a, u)), r.startEntity(s));
      let m = r.write(o, u + 1);
      if (m < 0) {
        a = u + r.end();
        break;
      }
      ((a = u + m), (u = m === 0 ? a + 1 : a));
    }
    let c = e + o.slice(a);
    return ((e = ""), c);
  };
}
function Smr(t, e, r, n) {
  let o = (e & dv.BRANCH_LENGTH) >> 7,
    s = e & dv.JUMP_TABLE;
  if (o === 0) return s !== 0 && n === s ? r : -1;
  if (s) {
    let c = n - s;
    return c < 0 || c >= o ? -1 : t[r + c] - 1;
  }
  let a = r,
    u = a + o - 1;
  for (; a <= u; ) {
    let c = (a + u) >>> 1,
      m = t[c];
    if (m < n) a = c + 1;
    else if (m > n) u = c - 1;
    else return t[c + o];
  }
  return -1;
}
var l3,
  T5a,
  dv,
  c3,
  zO,
  Nat,
  NDc,
  PDc,
  y4e = j(() => {
    Aai();
    yai();
    vmr();
    vmr();
    (function (t) {
      ((t[(t.NUM = 35)] = "NUM"),
        (t[(t.SEMI = 59)] = "SEMI"),
        (t[(t.EQUALS = 61)] = "EQUALS"),
        (t[(t.ZERO = 48)] = "ZERO"),
        (t[(t.NINE = 57)] = "NINE"),
        (t[(t.LOWER_A = 97)] = "LOWER_A"),
        (t[(t.LOWER_F = 102)] = "LOWER_F"),
        (t[(t.LOWER_X = 120)] = "LOWER_X"),
        (t[(t.LOWER_Z = 122)] = "LOWER_Z"),
        (t[(t.UPPER_A = 65)] = "UPPER_A"),
        (t[(t.UPPER_F = 70)] = "UPPER_F"),
        (t[(t.UPPER_Z = 90)] = "UPPER_Z"));
    })(l3 || (l3 = {}));
    T5a = 32;
    (function (t) {
      ((t[(t.VALUE_LENGTH = 49152)] = "VALUE_LENGTH"),
        (t[(t.BRANCH_LENGTH = 16256)] = "BRANCH_LENGTH"),
        (t[(t.JUMP_TABLE = 127)] = "JUMP_TABLE"));
    })(dv || (dv = {}));
    (function (t) {
      ((t[(t.EntityStart = 0)] = "EntityStart"),
        (t[(t.NumericStart = 1)] = "NumericStart"),
        (t[(t.NumericDecimal = 2)] = "NumericDecimal"),
        (t[(t.NumericHex = 3)] = "NumericHex"),
        (t[(t.NamedEntity = 4)] = "NamedEntity"));
    })(c3 || (c3 = {}));
    (function (t) {
      ((t[(t.Legacy = 0)] = "Legacy"), (t[(t.Strict = 1)] = "Strict"), (t[(t.Attribute = 2)] = "Attribute"));
    })(zO || (zO = {}));
    Nat = class {
      constructor(e, r, n) {
        ((this.decodeTree = e),
          (this.emitCodePoint = r),
          (this.errors = n),
          (this.state = c3.EntityStart),
          (this.consumed = 1),
          (this.result = 0),
          (this.treeIndex = 0),
          (this.excess = 1),
          (this.decodeMode = zO.Strict));
      }
      startEntity(e) {
        ((this.decodeMode = e),
          (this.state = c3.EntityStart),
          (this.result = 0),
          (this.treeIndex = 0),
          (this.excess = 1),
          (this.consumed = 1));
      }
      write(e, r) {
        switch (this.state) {
          case c3.EntityStart:
            return e.charCodeAt(r) === l3.NUM
              ? ((this.state = c3.NumericStart), (this.consumed += 1), this.stateNumericStart(e, r + 1))
              : ((this.state = c3.NamedEntity), this.stateNamedEntity(e, r));
          case c3.NumericStart:
            return this.stateNumericStart(e, r);
          case c3.NumericDecimal:
            return this.stateNumericDecimal(e, r);
          case c3.NumericHex:
            return this.stateNumericHex(e, r);
          case c3.NamedEntity:
            return this.stateNamedEntity(e, r);
        }
      }
      stateNumericStart(e, r) {
        return r >= e.length
          ? -1
          : (e.charCodeAt(r) | T5a) === l3.LOWER_X
            ? ((this.state = c3.NumericHex), (this.consumed += 1), this.stateNumericHex(e, r + 1))
            : ((this.state = c3.NumericDecimal), this.stateNumericDecimal(e, r));
      }
      addToNumericResult(e, r, n, o) {
        if (r !== n) {
          let s = n - r;
          ((this.result = this.result * Math.pow(o, s) + parseInt(e.substr(r, s), o)), (this.consumed += s));
        }
      }
      stateNumericHex(e, r) {
        let n = r;
        for (; r < e.length; ) {
          let o = e.charCodeAt(r);
          if (Cmr(o) || D5a(o)) r += 1;
          else return (this.addToNumericResult(e, n, r, 16), this.emitNumericEntity(o, 3));
        }
        return (this.addToNumericResult(e, n, r, 16), -1);
      }
      stateNumericDecimal(e, r) {
        let n = r;
        for (; r < e.length; ) {
          let o = e.charCodeAt(r);
          if (Cmr(o)) r += 1;
          else return (this.addToNumericResult(e, n, r, 10), this.emitNumericEntity(o, 2));
        }
        return (this.addToNumericResult(e, n, r, 10), -1);
      }
      emitNumericEntity(e, r) {
        var n;
        if (this.consumed <= r)
          return (
            (n = this.errors) === null || n === void 0 || n.absenceOfDigitsInNumericCharacterReference(this.consumed),
            0
          );
        if (e === l3.SEMI) this.consumed += 1;
        else if (this.decodeMode === zO.Strict) return 0;
        return (
          this.emitCodePoint(A4e(this.result), this.consumed),
          this.errors &&
            (e !== l3.SEMI && this.errors.missingSemicolonAfterCharacterReference(),
            this.errors.validateNumericCharacterReference(this.result)),
          this.consumed
        );
      }
      stateNamedEntity(e, r) {
        let { decodeTree: n } = this,
          o = n[this.treeIndex],
          s = (o & dv.VALUE_LENGTH) >> 14;
        for (; r < e.length; r++, this.excess++) {
          let a = e.charCodeAt(r);
          if (((this.treeIndex = Smr(n, o, this.treeIndex + Math.max(1, s), a)), this.treeIndex < 0))
            return this.result === 0 || (this.decodeMode === zO.Attribute && (s === 0 || R5a(a)))
              ? 0
              : this.emitNotTerminatedNamedEntity();
          if (((o = n[this.treeIndex]), (s = (o & dv.VALUE_LENGTH) >> 14), s !== 0)) {
            if (a === l3.SEMI) return this.emitNamedEntityData(this.treeIndex, s, this.consumed + this.excess);
            this.decodeMode !== zO.Strict &&
              ((this.result = this.treeIndex), (this.consumed += this.excess), (this.excess = 0));
          }
        }
        return -1;
      }
      emitNotTerminatedNamedEntity() {
        var e;
        let { result: r, decodeTree: n } = this,
          o = (n[r] & dv.VALUE_LENGTH) >> 14;
        return (
          this.emitNamedEntityData(r, o, this.consumed),
          (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(),
          this.consumed
        );
      }
      emitNamedEntityData(e, r, n) {
        let { decodeTree: o } = this;
        return (
          this.emitCodePoint(r === 1 ? o[e] & ~dv.VALUE_LENGTH : o[e + 1], n),
          r === 3 && this.emitCodePoint(o[e + 2], n),
          n
        );
      }
      end() {
        var e;
        switch (this.state) {
          case c3.NamedEntity:
            return this.result !== 0 && (this.decodeMode !== zO.Attribute || this.result === this.treeIndex)
              ? this.emitNotTerminatedNamedEntity()
              : 0;
          case c3.NumericDecimal:
            return this.emitNumericEntity(0, 2);
          case c3.NumericHex:
            return this.emitNumericEntity(0, 3);
          case c3.NumericStart:
            return (
              (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed),
              0
            );
          case c3.EntityStart:
            return 0;
        }
      }
    };
    ((NDc = _ai(kat)), (PDc = _ai(Oat)));
  });
function YO(t) {
  return t === yi.Space || t === yi.NewLine || t === yi.Tab || t === yi.FormFeed || t === yi.CarriageReturn;
}
function Pat(t) {
  return t === yi.Slash || t === yi.Gt || YO(t);
}
function Eai(t) {
  return t >= yi.Zero && t <= yi.Nine;
}
function k5a(t) {
  return (t >= yi.LowerA && t <= yi.LowerZ) || (t >= yi.UpperA && t <= yi.UpperZ);
}
function O5a(t) {
  return (t >= yi.UpperA && t <= yi.UpperF) || (t >= yi.LowerA && t <= yi.LowerF);
}
var yi,
  Nr,
  IS,
  l9,
  b0e,
  wmr = j(() => {
    y4e();
    (function (t) {
      ((t[(t.Tab = 9)] = "Tab"),
        (t[(t.NewLine = 10)] = "NewLine"),
        (t[(t.FormFeed = 12)] = "FormFeed"),
        (t[(t.CarriageReturn = 13)] = "CarriageReturn"),
        (t[(t.Space = 32)] = "Space"),
        (t[(t.ExclamationMark = 33)] = "ExclamationMark"),
        (t[(t.Number = 35)] = "Number"),
        (t[(t.Amp = 38)] = "Amp"),
        (t[(t.SingleQuote = 39)] = "SingleQuote"),
        (t[(t.DoubleQuote = 34)] = "DoubleQuote"),
        (t[(t.Dash = 45)] = "Dash"),
        (t[(t.Slash = 47)] = "Slash"),
        (t[(t.Zero = 48)] = "Zero"),
        (t[(t.Nine = 57)] = "Nine"),
        (t[(t.Semi = 59)] = "Semi"),
        (t[(t.Lt = 60)] = "Lt"),
        (t[(t.Eq = 61)] = "Eq"),
        (t[(t.Gt = 62)] = "Gt"),
        (t[(t.Questionmark = 63)] = "Questionmark"),
        (t[(t.UpperA = 65)] = "UpperA"),
        (t[(t.LowerA = 97)] = "LowerA"),
        (t[(t.UpperF = 70)] = "UpperF"),
        (t[(t.LowerF = 102)] = "LowerF"),
        (t[(t.UpperZ = 90)] = "UpperZ"),
        (t[(t.LowerZ = 122)] = "LowerZ"),
        (t[(t.LowerX = 120)] = "LowerX"),
        (t[(t.OpeningSquareBracket = 91)] = "OpeningSquareBracket"));
    })(yi || (yi = {}));
    (function (t) {
      ((t[(t.Text = 1)] = "Text"),
        (t[(t.BeforeTagName = 2)] = "BeforeTagName"),
        (t[(t.InTagName = 3)] = "InTagName"),
        (t[(t.InSelfClosingTag = 4)] = "InSelfClosingTag"),
        (t[(t.BeforeClosingTagName = 5)] = "BeforeClosingTagName"),
        (t[(t.InClosingTagName = 6)] = "InClosingTagName"),
        (t[(t.AfterClosingTagName = 7)] = "AfterClosingTagName"),
        (t[(t.BeforeAttributeName = 8)] = "BeforeAttributeName"),
        (t[(t.InAttributeName = 9)] = "InAttributeName"),
        (t[(t.AfterAttributeName = 10)] = "AfterAttributeName"),
        (t[(t.BeforeAttributeValue = 11)] = "BeforeAttributeValue"),
        (t[(t.InAttributeValueDq = 12)] = "InAttributeValueDq"),
        (t[(t.InAttributeValueSq = 13)] = "InAttributeValueSq"),
        (t[(t.InAttributeValueNq = 14)] = "InAttributeValueNq"),
        (t[(t.BeforeDeclaration = 15)] = "BeforeDeclaration"),
        (t[(t.InDeclaration = 16)] = "InDeclaration"),
        (t[(t.InProcessingInstruction = 17)] = "InProcessingInstruction"),
        (t[(t.BeforeComment = 18)] = "BeforeComment"),
        (t[(t.CDATASequence = 19)] = "CDATASequence"),
        (t[(t.InSpecialComment = 20)] = "InSpecialComment"),
        (t[(t.InCommentLike = 21)] = "InCommentLike"),
        (t[(t.BeforeSpecialS = 22)] = "BeforeSpecialS"),
        (t[(t.SpecialStartSequence = 23)] = "SpecialStartSequence"),
        (t[(t.InSpecialTag = 24)] = "InSpecialTag"),
        (t[(t.BeforeEntity = 25)] = "BeforeEntity"),
        (t[(t.BeforeNumericEntity = 26)] = "BeforeNumericEntity"),
        (t[(t.InNamedEntity = 27)] = "InNamedEntity"),
        (t[(t.InNumericEntity = 28)] = "InNumericEntity"),
        (t[(t.InHexEntity = 29)] = "InHexEntity"));
    })(Nr || (Nr = {}));
    (function (t) {
      ((t[(t.NoValue = 0)] = "NoValue"),
        (t[(t.Unquoted = 1)] = "Unquoted"),
        (t[(t.Single = 2)] = "Single"),
        (t[(t.Double = 3)] = "Double"));
    })(IS || (IS = {}));
    ((l9 = {
      Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
      CdataEnd: new Uint8Array([93, 93, 62]),
      CommentEnd: new Uint8Array([45, 45, 62]),
      ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
      StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
      TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
    }),
      (b0e = class {
        constructor({ xmlMode: e = !1, decodeEntities: r = !0 }, n) {
          ((this.cbs = n),
            (this.state = Nr.Text),
            (this.buffer = ""),
            (this.sectionStart = 0),
            (this.index = 0),
            (this.baseState = Nr.Text),
            (this.isSpecial = !1),
            (this.running = !0),
            (this.offset = 0),
            (this.currentSequence = void 0),
            (this.sequenceIndex = 0),
            (this.trieIndex = 0),
            (this.trieCurrent = 0),
            (this.entityResult = 0),
            (this.entityExcess = 0),
            (this.xmlMode = e),
            (this.decodeEntities = r),
            (this.entityTrie = e ? Oat : kat));
        }
        reset() {
          ((this.state = Nr.Text),
            (this.buffer = ""),
            (this.sectionStart = 0),
            (this.index = 0),
            (this.baseState = Nr.Text),
            (this.currentSequence = void 0),
            (this.running = !0),
            (this.offset = 0));
        }
        write(e) {
          ((this.offset += this.buffer.length), (this.buffer = e), this.parse());
        }
        end() {
          this.running && this.finish();
        }
        pause() {
          this.running = !1;
        }
        resume() {
          ((this.running = !0), this.index < this.buffer.length + this.offset && this.parse());
        }
        getIndex() {
          return this.index;
        }
        getSectionStart() {
          return this.sectionStart;
        }
        stateText(e) {
          e === yi.Lt || (!this.decodeEntities && this.fastForwardTo(yi.Lt))
            ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index),
              (this.state = Nr.BeforeTagName),
              (this.sectionStart = this.index))
            : this.decodeEntities && e === yi.Amp && (this.state = Nr.BeforeEntity);
        }
        stateSpecialStartSequence(e) {
          let r = this.sequenceIndex === this.currentSequence.length;
          if (!(r ? Pat(e) : (e | 32) === this.currentSequence[this.sequenceIndex])) this.isSpecial = !1;
          else if (!r) {
            this.sequenceIndex++;
            return;
          }
          ((this.sequenceIndex = 0), (this.state = Nr.InTagName), this.stateInTagName(e));
        }
        stateInSpecialTag(e) {
          if (this.sequenceIndex === this.currentSequence.length) {
            if (e === yi.Gt || YO(e)) {
              let r = this.index - this.currentSequence.length;
              if (this.sectionStart < r) {
                let n = this.index;
                ((this.index = r), this.cbs.ontext(this.sectionStart, r), (this.index = n));
              }
              ((this.isSpecial = !1), (this.sectionStart = r + 2), this.stateInClosingTagName(e));
              return;
            }
            this.sequenceIndex = 0;
          }
          (e | 32) === this.currentSequence[this.sequenceIndex]
            ? (this.sequenceIndex += 1)
            : this.sequenceIndex === 0
              ? this.currentSequence === l9.TitleEnd
                ? this.decodeEntities && e === yi.Amp && (this.state = Nr.BeforeEntity)
                : this.fastForwardTo(yi.Lt) && (this.sequenceIndex = 1)
              : (this.sequenceIndex = +(e === yi.Lt));
        }
        stateCDATASequence(e) {
          e === l9.Cdata[this.sequenceIndex]
            ? ++this.sequenceIndex === l9.Cdata.length &&
              ((this.state = Nr.InCommentLike),
              (this.currentSequence = l9.CdataEnd),
              (this.sequenceIndex = 0),
              (this.sectionStart = this.index + 1))
            : ((this.sequenceIndex = 0), (this.state = Nr.InDeclaration), this.stateInDeclaration(e));
        }
        fastForwardTo(e) {
          for (; ++this.index < this.buffer.length + this.offset; )
            if (this.buffer.charCodeAt(this.index - this.offset) === e) return !0;
          return ((this.index = this.buffer.length + this.offset - 1), !1);
        }
        stateInCommentLike(e) {
          e === this.currentSequence[this.sequenceIndex]
            ? ++this.sequenceIndex === this.currentSequence.length &&
              (this.currentSequence === l9.CdataEnd
                ? this.cbs.oncdata(this.sectionStart, this.index, 2)
                : this.cbs.oncomment(this.sectionStart, this.index, 2),
              (this.sequenceIndex = 0),
              (this.sectionStart = this.index + 1),
              (this.state = Nr.Text))
            : this.sequenceIndex === 0
              ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1)
              : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
        }
        isTagStartChar(e) {
          return this.xmlMode ? !Pat(e) : k5a(e);
        }
        startSpecial(e, r) {
          ((this.isSpecial = !0),
            (this.currentSequence = e),
            (this.sequenceIndex = r),
            (this.state = Nr.SpecialStartSequence));
        }
        stateBeforeTagName(e) {
          if (e === yi.ExclamationMark) ((this.state = Nr.BeforeDeclaration), (this.sectionStart = this.index + 1));
          else if (e === yi.Questionmark)
            ((this.state = Nr.InProcessingInstruction), (this.sectionStart = this.index + 1));
          else if (this.isTagStartChar(e)) {
            let r = e | 32;
            ((this.sectionStart = this.index),
              !this.xmlMode && r === l9.TitleEnd[2]
                ? this.startSpecial(l9.TitleEnd, 3)
                : (this.state = !this.xmlMode && r === l9.ScriptEnd[2] ? Nr.BeforeSpecialS : Nr.InTagName));
          } else e === yi.Slash ? (this.state = Nr.BeforeClosingTagName) : ((this.state = Nr.Text), this.stateText(e));
        }
        stateInTagName(e) {
          Pat(e) &&
            (this.cbs.onopentagname(this.sectionStart, this.index),
            (this.sectionStart = -1),
            (this.state = Nr.BeforeAttributeName),
            this.stateBeforeAttributeName(e));
        }
        stateBeforeClosingTagName(e) {
          YO(e) ||
            (e === yi.Gt
              ? (this.state = Nr.Text)
              : ((this.state = this.isTagStartChar(e) ? Nr.InClosingTagName : Nr.InSpecialComment),
                (this.sectionStart = this.index)));
        }
        stateInClosingTagName(e) {
          (e === yi.Gt || YO(e)) &&
            (this.cbs.onclosetag(this.sectionStart, this.index),
            (this.sectionStart = -1),
            (this.state = Nr.AfterClosingTagName),
            this.stateAfterClosingTagName(e));
        }
        stateAfterClosingTagName(e) {
          (e === yi.Gt || this.fastForwardTo(yi.Gt)) &&
            ((this.state = Nr.Text), (this.baseState = Nr.Text), (this.sectionStart = this.index + 1));
        }
        stateBeforeAttributeName(e) {
          e === yi.Gt
            ? (this.cbs.onopentagend(this.index),
              this.isSpecial ? ((this.state = Nr.InSpecialTag), (this.sequenceIndex = 0)) : (this.state = Nr.Text),
              (this.baseState = this.state),
              (this.sectionStart = this.index + 1))
            : e === yi.Slash
              ? (this.state = Nr.InSelfClosingTag)
              : YO(e) || ((this.state = Nr.InAttributeName), (this.sectionStart = this.index));
        }
        stateInSelfClosingTag(e) {
          e === yi.Gt
            ? (this.cbs.onselfclosingtag(this.index),
              (this.state = Nr.Text),
              (this.baseState = Nr.Text),
              (this.sectionStart = this.index + 1),
              (this.isSpecial = !1))
            : YO(e) || ((this.state = Nr.BeforeAttributeName), this.stateBeforeAttributeName(e));
        }
        stateInAttributeName(e) {
          (e === yi.Eq || Pat(e)) &&
            (this.cbs.onattribname(this.sectionStart, this.index),
            (this.sectionStart = -1),
            (this.state = Nr.AfterAttributeName),
            this.stateAfterAttributeName(e));
        }
        stateAfterAttributeName(e) {
          e === yi.Eq
            ? (this.state = Nr.BeforeAttributeValue)
            : e === yi.Slash || e === yi.Gt
              ? (this.cbs.onattribend(IS.NoValue, this.index),
                (this.state = Nr.BeforeAttributeName),
                this.stateBeforeAttributeName(e))
              : YO(e) ||
                (this.cbs.onattribend(IS.NoValue, this.index),
                (this.state = Nr.InAttributeName),
                (this.sectionStart = this.index));
        }
        stateBeforeAttributeValue(e) {
          e === yi.DoubleQuote
            ? ((this.state = Nr.InAttributeValueDq), (this.sectionStart = this.index + 1))
            : e === yi.SingleQuote
              ? ((this.state = Nr.InAttributeValueSq), (this.sectionStart = this.index + 1))
              : YO(e) ||
                ((this.sectionStart = this.index),
                (this.state = Nr.InAttributeValueNq),
                this.stateInAttributeValueNoQuotes(e));
        }
        handleInAttributeValue(e, r) {
          e === r || (!this.decodeEntities && this.fastForwardTo(r))
            ? (this.cbs.onattribdata(this.sectionStart, this.index),
              (this.sectionStart = -1),
              this.cbs.onattribend(r === yi.DoubleQuote ? IS.Double : IS.Single, this.index),
              (this.state = Nr.BeforeAttributeName))
            : this.decodeEntities && e === yi.Amp && ((this.baseState = this.state), (this.state = Nr.BeforeEntity));
        }
        stateInAttributeValueDoubleQuotes(e) {
          this.handleInAttributeValue(e, yi.DoubleQuote);
        }
        stateInAttributeValueSingleQuotes(e) {
          this.handleInAttributeValue(e, yi.SingleQuote);
        }
        stateInAttributeValueNoQuotes(e) {
          YO(e) || e === yi.Gt
            ? (this.cbs.onattribdata(this.sectionStart, this.index),
              (this.sectionStart = -1),
              this.cbs.onattribend(IS.Unquoted, this.index),
              (this.state = Nr.BeforeAttributeName),
              this.stateBeforeAttributeName(e))
            : this.decodeEntities && e === yi.Amp && ((this.baseState = this.state), (this.state = Nr.BeforeEntity));
        }
        stateBeforeDeclaration(e) {
          e === yi.OpeningSquareBracket
            ? ((this.state = Nr.CDATASequence), (this.sequenceIndex = 0))
            : (this.state = e === yi.Dash ? Nr.BeforeComment : Nr.InDeclaration);
        }
        stateInDeclaration(e) {
          (e === yi.Gt || this.fastForwardTo(yi.Gt)) &&
            (this.cbs.ondeclaration(this.sectionStart, this.index),
            (this.state = Nr.Text),
            (this.sectionStart = this.index + 1));
        }
        stateInProcessingInstruction(e) {
          (e === yi.Gt || this.fastForwardTo(yi.Gt)) &&
            (this.cbs.onprocessinginstruction(this.sectionStart, this.index),
            (this.state = Nr.Text),
            (this.sectionStart = this.index + 1));
        }
        stateBeforeComment(e) {
          e === yi.Dash
            ? ((this.state = Nr.InCommentLike),
              (this.currentSequence = l9.CommentEnd),
              (this.sequenceIndex = 2),
              (this.sectionStart = this.index + 1))
            : (this.state = Nr.InDeclaration);
        }
        stateInSpecialComment(e) {
          (e === yi.Gt || this.fastForwardTo(yi.Gt)) &&
            (this.cbs.oncomment(this.sectionStart, this.index, 0),
            (this.state = Nr.Text),
            (this.sectionStart = this.index + 1));
        }
        stateBeforeSpecialS(e) {
          let r = e | 32;
          r === l9.ScriptEnd[3]
            ? this.startSpecial(l9.ScriptEnd, 4)
            : r === l9.StyleEnd[3]
              ? this.startSpecial(l9.StyleEnd, 4)
              : ((this.state = Nr.InTagName), this.stateInTagName(e));
        }
        stateBeforeEntity(e) {
          ((this.entityExcess = 1),
            (this.entityResult = 0),
            e === yi.Number
              ? (this.state = Nr.BeforeNumericEntity)
              : e === yi.Amp ||
                ((this.trieIndex = 0),
                (this.trieCurrent = this.entityTrie[0]),
                (this.state = Nr.InNamedEntity),
                this.stateInNamedEntity(e)));
        }
        stateInNamedEntity(e) {
          if (
            ((this.entityExcess += 1),
            (this.trieIndex = Smr(this.entityTrie, this.trieCurrent, this.trieIndex + 1, e)),
            this.trieIndex < 0)
          ) {
            (this.emitNamedEntity(), this.index--);
            return;
          }
          this.trieCurrent = this.entityTrie[this.trieIndex];
          let r = this.trieCurrent & dv.VALUE_LENGTH;
          if (r) {
            let n = (r >> 14) - 1;
            if (!this.allowLegacyEntity() && e !== yi.Semi) this.trieIndex += n;
            else {
              let o = this.index - this.entityExcess + 1;
              (o > this.sectionStart && this.emitPartial(this.sectionStart, o),
                (this.entityResult = this.trieIndex),
                (this.trieIndex += n),
                (this.entityExcess = 0),
                (this.sectionStart = this.index + 1),
                n === 0 && this.emitNamedEntity());
            }
          }
        }
        emitNamedEntity() {
          if (((this.state = this.baseState), this.entityResult === 0)) return;
          switch ((this.entityTrie[this.entityResult] & dv.VALUE_LENGTH) >> 14) {
            case 1: {
              this.emitCodePoint(this.entityTrie[this.entityResult] & ~dv.VALUE_LENGTH);
              break;
            }
            case 2: {
              this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
              break;
            }
            case 3:
              (this.emitCodePoint(this.entityTrie[this.entityResult + 1]),
                this.emitCodePoint(this.entityTrie[this.entityResult + 2]));
          }
        }
        stateBeforeNumericEntity(e) {
          (e | 32) === yi.LowerX
            ? (this.entityExcess++, (this.state = Nr.InHexEntity))
            : ((this.state = Nr.InNumericEntity), this.stateInNumericEntity(e));
        }
        emitNumericEntity(e) {
          let r = this.index - this.entityExcess - 1;
          (r + 2 + +(this.state === Nr.InHexEntity) !== this.index &&
            (r > this.sectionStart && this.emitPartial(this.sectionStart, r),
            (this.sectionStart = this.index + Number(e)),
            this.emitCodePoint(A4e(this.entityResult))),
            (this.state = this.baseState));
        }
        stateInNumericEntity(e) {
          e === yi.Semi
            ? this.emitNumericEntity(!0)
            : Eai(e)
              ? ((this.entityResult = this.entityResult * 10 + (e - yi.Zero)), this.entityExcess++)
              : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : (this.state = this.baseState), this.index--);
        }
        stateInHexEntity(e) {
          e === yi.Semi
            ? this.emitNumericEntity(!0)
            : Eai(e)
              ? ((this.entityResult = this.entityResult * 16 + (e - yi.Zero)), this.entityExcess++)
              : O5a(e)
                ? ((this.entityResult = this.entityResult * 16 + ((e | 32) - yi.LowerA + 10)), this.entityExcess++)
                : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : (this.state = this.baseState), this.index--);
        }
        allowLegacyEntity() {
          return !this.xmlMode && (this.baseState === Nr.Text || this.baseState === Nr.InSpecialTag);
        }
        cleanup() {
          this.running &&
            this.sectionStart !== this.index &&
            (this.state === Nr.Text || (this.state === Nr.InSpecialTag && this.sequenceIndex === 0)
              ? (this.cbs.ontext(this.sectionStart, this.index), (this.sectionStart = this.index))
              : (this.state === Nr.InAttributeValueDq ||
                  this.state === Nr.InAttributeValueSq ||
                  this.state === Nr.InAttributeValueNq) &&
                (this.cbs.onattribdata(this.sectionStart, this.index), (this.sectionStart = this.index)));
        }
        shouldContinue() {
          return this.index < this.buffer.length + this.offset && this.running;
        }
        parse() {
          for (; this.shouldContinue(); ) {
            let e = this.buffer.charCodeAt(this.index - this.offset);
            switch (this.state) {
              case Nr.Text: {
                this.stateText(e);
                break;
              }
              case Nr.SpecialStartSequence: {
                this.stateSpecialStartSequence(e);
                break;
              }
              case Nr.InSpecialTag: {
                this.stateInSpecialTag(e);
                break;
              }
              case Nr.CDATASequence: {
                this.stateCDATASequence(e);
                break;
              }
              case Nr.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(e);
                break;
              }
              case Nr.InAttributeName: {
                this.stateInAttributeName(e);
                break;
              }
              case Nr.InCommentLike: {
                this.stateInCommentLike(e);
                break;
              }
              case Nr.InSpecialComment: {
                this.stateInSpecialComment(e);
                break;
              }
              case Nr.BeforeAttributeName: {
                this.stateBeforeAttributeName(e);
                break;
              }
              case Nr.InTagName: {
                this.stateInTagName(e);
                break;
              }
              case Nr.InClosingTagName: {
                this.stateInClosingTagName(e);
                break;
              }
              case Nr.BeforeTagName: {
                this.stateBeforeTagName(e);
                break;
              }
              case Nr.AfterAttributeName: {
                this.stateAfterAttributeName(e);
                break;
              }
              case Nr.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(e);
                break;
              }
              case Nr.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(e);
                break;
              }
              case Nr.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(e);
                break;
              }
              case Nr.AfterClosingTagName: {
                this.stateAfterClosingTagName(e);
                break;
              }
              case Nr.BeforeSpecialS: {
                this.stateBeforeSpecialS(e);
                break;
              }
              case Nr.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(e);
                break;
              }
              case Nr.InSelfClosingTag: {
                this.stateInSelfClosingTag(e);
                break;
              }
              case Nr.InDeclaration: {
                this.stateInDeclaration(e);
                break;
              }
              case Nr.BeforeDeclaration: {
                this.stateBeforeDeclaration(e);
                break;
              }
              case Nr.BeforeComment: {
                this.stateBeforeComment(e);
                break;
              }
              case Nr.InProcessingInstruction: {
                this.stateInProcessingInstruction(e);
                break;
              }
              case Nr.InNamedEntity: {
                this.stateInNamedEntity(e);
                break;
              }
              case Nr.BeforeEntity: {
                this.stateBeforeEntity(e);
                break;
              }
              case Nr.InHexEntity: {
                this.stateInHexEntity(e);
                break;
              }
              case Nr.InNumericEntity: {
                this.stateInNumericEntity(e);
                break;
              }
              default:
                this.stateBeforeNumericEntity(e);
            }
            this.index++;
          }
          this.cleanup();
        }
        finish() {
          (this.state === Nr.InNamedEntity && this.emitNamedEntity(),
            this.sectionStart < this.index && this.handleTrailingData(),
            this.cbs.onend());
        }
        handleTrailingData() {
          let e = this.buffer.length + this.offset;
          this.state === Nr.InCommentLike
            ? this.currentSequence === l9.CdataEnd
              ? this.cbs.oncdata(this.sectionStart, e, 0)
              : this.cbs.oncomment(this.sectionStart, e, 0)
            : this.state === Nr.InNumericEntity && this.allowLegacyEntity()
              ? this.emitNumericEntity(!1)
              : this.state === Nr.InHexEntity && this.allowLegacyEntity()
                ? this.emitNumericEntity(!1)
                : this.state === Nr.InTagName ||
                  this.state === Nr.BeforeAttributeName ||
                  this.state === Nr.BeforeAttributeValue ||
                  this.state === Nr.AfterAttributeName ||
                  this.state === Nr.InAttributeName ||
                  this.state === Nr.InAttributeValueSq ||
                  this.state === Nr.InAttributeValueDq ||
                  this.state === Nr.InAttributeValueNq ||
                  this.state === Nr.InClosingTagName ||
                  this.cbs.ontext(this.sectionStart, e);
        }
        emitPartial(e, r) {
          this.baseState !== Nr.Text && this.baseState !== Nr.InSpecialTag
            ? this.cbs.onattribdata(e, r)
            : this.cbs.ontext(e, r);
        }
        emitCodePoint(e) {
          this.baseState !== Nr.Text && this.baseState !== Nr.InSpecialTag
            ? this.cbs.onattribentity(e)
            : this.cbs.ontextentity(e);
        }
      }));
  });
var A0e,
  i0,
  vai,
  Cai,
  Sai,
  N5a,
  P5a,
  wai,
  xai,
  B5a,
  _4e,
  xmr = j(() => {
    wmr();
    y4e();
    ((A0e = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"])),
      (i0 = new Set(["p"])),
      (vai = new Set(["thead", "tbody"])),
      (Cai = new Set(["dd", "dt"])),
      (Sai = new Set(["rt", "rp"])),
      (N5a = new Map([
        ["tr", new Set(["tr", "th", "td"])],
        ["th", new Set(["th"])],
        ["td", new Set(["thead", "th", "td"])],
        ["body", new Set(["head", "link", "script"])],
        ["li", new Set(["li"])],
        ["p", i0],
        ["h1", i0],
        ["h2", i0],
        ["h3", i0],
        ["h4", i0],
        ["h5", i0],
        ["h6", i0],
        ["select", A0e],
        ["input", A0e],
        ["output", A0e],
        ["button", A0e],
        ["datalist", A0e],
        ["textarea", A0e],
        ["option", new Set(["option"])],
        ["optgroup", new Set(["optgroup", "option"])],
        ["dd", Cai],
        ["dt", Cai],
        ["address", i0],
        ["article", i0],
        ["aside", i0],
        ["blockquote", i0],
        ["details", i0],
        ["div", i0],
        ["dl", i0],
        ["fieldset", i0],
        ["figcaption", i0],
        ["figure", i0],
        ["footer", i0],
        ["form", i0],
        ["header", i0],
        ["hr", i0],
        ["main", i0],
        ["nav", i0],
        ["ol", i0],
        ["pre", i0],
        ["section", i0],
        ["table", i0],
        ["ul", i0],
        ["rt", Sai],
        ["rp", Sai],
        ["tbody", vai],
        ["tfoot", vai],
      ])),
      (P5a = new Set([
        "area",
        "base",
        "basefont",
        "br",
        "col",
        "command",
        "embed",
        "frame",
        "hr",
        "img",
        "input",
        "isindex",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr",
      ])),
      (wai = new Set(["math", "svg"])),
      (xai = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"])),
      (B5a = /\s|\//),
      (_4e = class {
        constructor(e, r = {}) {
          var n, o, s, a, u;
          ((this.options = r),
            (this.startIndex = 0),
            (this.endIndex = 0),
            (this.openTagStart = 0),
            (this.tagname = ""),
            (this.attribname = ""),
            (this.attribvalue = ""),
            (this.attribs = null),
            (this.stack = []),
            (this.foreignContext = []),
            (this.buffers = []),
            (this.bufferOffset = 0),
            (this.writeIndex = 0),
            (this.ended = !1),
            (this.cbs = e ?? {}),
            (this.lowerCaseTagNames = (n = r.lowerCaseTags) !== null && n !== void 0 ? n : !r.xmlMode),
            (this.lowerCaseAttributeNames = (o = r.lowerCaseAttributeNames) !== null && o !== void 0 ? o : !r.xmlMode),
            (this.tokenizer = new ((s = r.Tokenizer) !== null && s !== void 0 ? s : b0e)(this.options, this)),
            (u = (a = this.cbs).onparserinit) === null || u === void 0 || u.call(a, this));
        }
        ontext(e, r) {
          var n, o;
          let s = this.getSlice(e, r);
          ((this.endIndex = r - 1),
            (o = (n = this.cbs).ontext) === null || o === void 0 || o.call(n, s),
            (this.startIndex = r));
        }
        ontextentity(e) {
          var r, n;
          let o = this.tokenizer.getSectionStart();
          ((this.endIndex = o - 1),
            (n = (r = this.cbs).ontext) === null || n === void 0 || n.call(r, g0e(e)),
            (this.startIndex = o));
        }
        isVoidElement(e) {
          return !this.options.xmlMode && P5a.has(e);
        }
        onopentagname(e, r) {
          this.endIndex = r;
          let n = this.getSlice(e, r);
          (this.lowerCaseTagNames && (n = n.toLowerCase()), this.emitOpenTag(n));
        }
        emitOpenTag(e) {
          var r, n, o, s;
          ((this.openTagStart = this.startIndex), (this.tagname = e));
          let a = !this.options.xmlMode && N5a.get(e);
          if (a)
            for (; this.stack.length > 0 && a.has(this.stack[this.stack.length - 1]); ) {
              let u = this.stack.pop();
              (n = (r = this.cbs).onclosetag) === null || n === void 0 || n.call(r, u, !0);
            }
          (this.isVoidElement(e) ||
            (this.stack.push(e),
            wai.has(e) ? this.foreignContext.push(!0) : xai.has(e) && this.foreignContext.push(!1)),
            (s = (o = this.cbs).onopentagname) === null || s === void 0 || s.call(o, e),
            this.cbs.onopentag && (this.attribs = {}));
        }
        endOpenTag(e) {
          var r, n;
          ((this.startIndex = this.openTagStart),
            this.attribs &&
              ((n = (r = this.cbs).onopentag) === null || n === void 0 || n.call(r, this.tagname, this.attribs, e),
              (this.attribs = null)),
            this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0),
            (this.tagname = ""));
        }
        onopentagend(e) {
          ((this.endIndex = e), this.endOpenTag(!1), (this.startIndex = e + 1));
        }
        onclosetag(e, r) {
          var n, o, s, a, u, c;
          this.endIndex = r;
          let m = this.getSlice(e, r);
          if (
            (this.lowerCaseTagNames && (m = m.toLowerCase()),
            (wai.has(m) || xai.has(m)) && this.foreignContext.pop(),
            this.isVoidElement(m))
          )
            !this.options.xmlMode &&
              m === "br" &&
              ((o = (n = this.cbs).onopentagname) === null || o === void 0 || o.call(n, "br"),
              (a = (s = this.cbs).onopentag) === null || a === void 0 || a.call(s, "br", {}, !0),
              (c = (u = this.cbs).onclosetag) === null || c === void 0 || c.call(u, "br", !1));
          else {
            let d = this.stack.lastIndexOf(m);
            if (d !== -1)
              if (this.cbs.onclosetag) {
                let f = this.stack.length - d;
                for (; f--; ) this.cbs.onclosetag(this.stack.pop(), f !== 0);
              } else this.stack.length = d;
            else !this.options.xmlMode && m === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
          }
          this.startIndex = r + 1;
        }
        onselfclosingtag(e) {
          ((this.endIndex = e),
            this.options.xmlMode ||
            this.options.recognizeSelfClosing ||
            this.foreignContext[this.foreignContext.length - 1]
              ? (this.closeCurrentTag(!1), (this.startIndex = e + 1))
              : this.onopentagend(e));
        }
        closeCurrentTag(e) {
          var r, n;
          let o = this.tagname;
          (this.endOpenTag(e),
            this.stack[this.stack.length - 1] === o &&
              ((n = (r = this.cbs).onclosetag) === null || n === void 0 || n.call(r, o, !e), this.stack.pop()));
        }
        onattribname(e, r) {
          this.startIndex = e;
          let n = this.getSlice(e, r);
          this.attribname = this.lowerCaseAttributeNames ? n.toLowerCase() : n;
        }
        onattribdata(e, r) {
          this.attribvalue += this.getSlice(e, r);
        }
        onattribentity(e) {
          this.attribvalue += g0e(e);
        }
        onattribend(e, r) {
          var n, o;
          ((this.endIndex = r),
            (o = (n = this.cbs).onattribute) === null ||
              o === void 0 ||
              o.call(
                n,
                this.attribname,
                this.attribvalue,
                e === IS.Double ? '"' : e === IS.Single ? "'" : e === IS.NoValue ? void 0 : null,
              ),
            this.attribs &&
              !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) &&
              (this.attribs[this.attribname] = this.attribvalue),
            (this.attribvalue = ""));
        }
        getInstructionName(e) {
          let r = e.search(B5a),
            n = r < 0 ? e : e.substr(0, r);
          return (this.lowerCaseTagNames && (n = n.toLowerCase()), n);
        }
        ondeclaration(e, r) {
          this.endIndex = r;
          let n = this.getSlice(e, r);
          if (this.cbs.onprocessinginstruction) {
            let o = this.getInstructionName(n);
            this.cbs.onprocessinginstruction(`!${o}`, `!${n}`);
          }
          this.startIndex = r + 1;
        }
        onprocessinginstruction(e, r) {
          this.endIndex = r;
          let n = this.getSlice(e, r);
          if (this.cbs.onprocessinginstruction) {
            let o = this.getInstructionName(n);
            this.cbs.onprocessinginstruction(`?${o}`, `?${n}`);
          }
          this.startIndex = r + 1;
        }
        oncomment(e, r, n) {
          var o, s, a, u;
          ((this.endIndex = r),
            (s = (o = this.cbs).oncomment) === null || s === void 0 || s.call(o, this.getSlice(e, r - n)),
            (u = (a = this.cbs).oncommentend) === null || u === void 0 || u.call(a),
            (this.startIndex = r + 1));
        }
        oncdata(e, r, n) {
          var o, s, a, u, c, m, d, f, p, h;
          this.endIndex = r;
          let g = this.getSlice(e, r - n);
          (this.options.xmlMode || this.options.recognizeCDATA
            ? ((s = (o = this.cbs).oncdatastart) === null || s === void 0 || s.call(o),
              (u = (a = this.cbs).ontext) === null || u === void 0 || u.call(a, g),
              (m = (c = this.cbs).oncdataend) === null || m === void 0 || m.call(c))
            : ((f = (d = this.cbs).oncomment) === null || f === void 0 || f.call(d, `[CDATA[${g}]]`),
              (h = (p = this.cbs).oncommentend) === null || h === void 0 || h.call(p)),
            (this.startIndex = r + 1));
        }
        onend() {
          var e, r;
          if (this.cbs.onclosetag) {
            this.endIndex = this.startIndex;
            for (let n = this.stack.length; n > 0; this.cbs.onclosetag(this.stack[--n], !0));
          }
          (r = (e = this.cbs).onend) === null || r === void 0 || r.call(e);
        }
        reset() {
          var e, r, n, o;
          ((r = (e = this.cbs).onreset) === null || r === void 0 || r.call(e),
            this.tokenizer.reset(),
            (this.tagname = ""),
            (this.attribname = ""),
            (this.attribs = null),
            (this.stack.length = 0),
            (this.startIndex = 0),
            (this.endIndex = 0),
            (o = (n = this.cbs).onparserinit) === null || o === void 0 || o.call(n, this),
            (this.buffers.length = 0),
            (this.bufferOffset = 0),
            (this.writeIndex = 0),
            (this.ended = !1));
        }
        parseComplete(e) {
          (this.reset(), this.end(e));
        }
        getSlice(e, r) {
          for (; e - this.bufferOffset >= this.buffers[0].length; ) this.shiftBuffer();
          let n = this.buffers[0].slice(e - this.bufferOffset, r - this.bufferOffset);
          for (; r - this.bufferOffset > this.buffers[0].length; )
            (this.shiftBuffer(), (n += this.buffers[0].slice(0, r - this.bufferOffset)));
          return n;
        }
        shiftBuffer() {
          ((this.bufferOffset += this.buffers[0].length), this.writeIndex--, this.buffers.shift());
        }
        write(e) {
          var r, n;
          if (this.ended) {
            (n = (r = this.cbs).onerror) === null || n === void 0 || n.call(r, new Error(".write() after done!"));
            return;
          }
          (this.buffers.push(e), this.tokenizer.running && (this.tokenizer.write(e), this.writeIndex++));
        }
        end(e) {
          var r, n;
          if (this.ended) {
            (n = (r = this.cbs).onerror) === null || n === void 0 || n.call(r, new Error(".end() after done!"));
            return;
          }
          (e && this.write(e), (this.ended = !0), this.tokenizer.end());
        }
        pause() {
          this.tokenizer.pause();
        }
        resume() {
          for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; )
            this.tokenizer.write(this.buffers[this.writeIndex++]);
          this.ended && this.tokenizer.end();
        }
        parseChunk(e) {
          this.write(e);
        }
        done(e) {
          this.end(e);
        }
      }));
  });
function Bat(t) {
  for (let e = 1; e < t.length; e++) t[e][0] += t[e - 1][0] + 1;
  return t;
}
var L5a,
  Tai = j(() => {
    L5a = new Map(
      Bat([
        [9, "&Tab;"],
        [0, "&NewLine;"],
        [22, "&excl;"],
        [0, "&quot;"],
        [0, "&num;"],
        [0, "&dollar;"],
        [0, "&percnt;"],
        [0, "&amp;"],
        [0, "&apos;"],
        [0, "&lpar;"],
        [0, "&rpar;"],
        [0, "&ast;"],
        [0, "&plus;"],
        [0, "&comma;"],
        [1, "&period;"],
        [0, "&sol;"],
        [10, "&colon;"],
        [0, "&semi;"],
        [0, { v: "&lt;", n: 8402, o: "&nvlt;" }],
        [0, { v: "&equals;", n: 8421, o: "&bne;" }],
        [0, { v: "&gt;", n: 8402, o: "&nvgt;" }],
        [0, "&quest;"],
        [0, "&commat;"],
        [26, "&lbrack;"],
        [0, "&bsol;"],
        [0, "&rbrack;"],
        [0, "&Hat;"],
        [0, "&lowbar;"],
        [0, "&DiacriticalGrave;"],
        [5, { n: 106, o: "&fjlig;" }],
        [20, "&lbrace;"],
        [0, "&verbar;"],
        [0, "&rbrace;"],
        [34, "&nbsp;"],
        [0, "&iexcl;"],
        [0, "&cent;"],
        [0, "&pound;"],
        [0, "&curren;"],
        [0, "&yen;"],
        [0, "&brvbar;"],
        [0, "&sect;"],
        [0, "&die;"],
        [0, "&copy;"],
        [0, "&ordf;"],
        [0, "&laquo;"],
        [0, "&not;"],
        [0, "&shy;"],
        [0, "&circledR;"],
        [0, "&macr;"],
        [0, "&deg;"],
        [0, "&PlusMinus;"],
        [0, "&sup2;"],
        [0, "&sup3;"],
        [0, "&acute;"],
        [0, "&micro;"],
        [0, "&para;"],
        [0, "&centerdot;"],
        [0, "&cedil;"],
        [0, "&sup1;"],
        [0, "&ordm;"],
        [0, "&raquo;"],
        [0, "&frac14;"],
        [0, "&frac12;"],
        [0, "&frac34;"],
        [0, "&iquest;"],
        [0, "&Agrave;"],
        [0, "&Aacute;"],
        [0, "&Acirc;"],
        [0, "&Atilde;"],
        [0, "&Auml;"],
        [0, "&angst;"],
        [0, "&AElig;"],
        [0, "&Ccedil;"],
        [0, "&Egrave;"],
        [0, "&Eacute;"],
        [0, "&Ecirc;"],
        [0, "&Euml;"],
        [0, "&Igrave;"],
        [0, "&Iacute;"],
        [0, "&Icirc;"],
        [0, "&Iuml;"],
        [0, "&ETH;"],
        [0, "&Ntilde;"],
        [0, "&Ograve;"],
        [0, "&Oacute;"],
        [0, "&Ocirc;"],
        [0, "&Otilde;"],
        [0, "&Ouml;"],
        [0, "&times;"],
        [0, "&Oslash;"],
        [0, "&Ugrave;"],
        [0, "&Uacute;"],
        [0, "&Ucirc;"],
        [0, "&Uuml;"],
        [0, "&Yacute;"],
        [0, "&THORN;"],
        [0, "&szlig;"],
        [0, "&agrave;"],
        [0, "&aacute;"],
        [0, "&acirc;"],
        [0, "&atilde;"],
        [0, "&auml;"],
        [0, "&aring;"],
        [0, "&aelig;"],
        [0, "&ccedil;"],
        [0, "&egrave;"],
        [0, "&eacute;"],
        [0, "&ecirc;"],
        [0, "&euml;"],
        [0, "&igrave;"],
        [0, "&iacute;"],
        [0, "&icirc;"],
        [0, "&iuml;"],
        [0, "&eth;"],
        [0, "&ntilde;"],
        [0, "&ograve;"],
        [0, "&oacute;"],
        [0, "&ocirc;"],
        [0, "&otilde;"],
        [0, "&ouml;"],
        [0, "&div;"],
        [0, "&oslash;"],
        [0, "&ugrave;"],
        [0, "&uacute;"],
        [0, "&ucirc;"],
        [0, "&uuml;"],
        [0, "&yacute;"],
        [0, "&thorn;"],
        [0, "&yuml;"],
        [0, "&Amacr;"],
        [0, "&amacr;"],
        [0, "&Abreve;"],
        [0, "&abreve;"],
        [0, "&Aogon;"],
        [0, "&aogon;"],
        [0, "&Cacute;"],
        [0, "&cacute;"],
        [0, "&Ccirc;"],
        [0, "&ccirc;"],
        [0, "&Cdot;"],
        [0, "&cdot;"],
        [0, "&Ccaron;"],
        [0, "&ccaron;"],
        [0, "&Dcaron;"],
        [0, "&dcaron;"],
        [0, "&Dstrok;"],
        [0, "&dstrok;"],
        [0, "&Emacr;"],
        [0, "&emacr;"],
        [2, "&Edot;"],
        [0, "&edot;"],
        [0, "&Eogon;"],
        [0, "&eogon;"],
        [0, "&Ecaron;"],
        [0, "&ecaron;"],
        [0, "&Gcirc;"],
        [0, "&gcirc;"],
        [0, "&Gbreve;"],
        [0, "&gbreve;"],
        [0, "&Gdot;"],
        [0, "&gdot;"],
        [0, "&Gcedil;"],
        [1, "&Hcirc;"],
        [0, "&hcirc;"],
        [0, "&Hstrok;"],
        [0, "&hstrok;"],
        [0, "&Itilde;"],
        [0, "&itilde;"],
        [0, "&Imacr;"],
        [0, "&imacr;"],
        [2, "&Iogon;"],
        [0, "&iogon;"],
        [0, "&Idot;"],
        [0, "&imath;"],
        [0, "&IJlig;"],
        [0, "&ijlig;"],
        [0, "&Jcirc;"],
        [0, "&jcirc;"],
        [0, "&Kcedil;"],
        [0, "&kcedil;"],
        [0, "&kgreen;"],
        [0, "&Lacute;"],
        [0, "&lacute;"],
        [0, "&Lcedil;"],
        [0, "&lcedil;"],
        [0, "&Lcaron;"],
        [0, "&lcaron;"],
        [0, "&Lmidot;"],
        [0, "&lmidot;"],
        [0, "&Lstrok;"],
        [0, "&lstrok;"],
        [0, "&Nacute;"],
        [0, "&nacute;"],
        [0, "&Ncedil;"],
        [0, "&ncedil;"],
        [0, "&Ncaron;"],
        [0, "&ncaron;"],
        [0, "&napos;"],
        [0, "&ENG;"],
        [0, "&eng;"],
        [0, "&Omacr;"],
        [0, "&omacr;"],
        [2, "&Odblac;"],
        [0, "&odblac;"],
        [0, "&OElig;"],
        [0, "&oelig;"],
        [0, "&Racute;"],
        [0, "&racute;"],
        [0, "&Rcedil;"],
        [0, "&rcedil;"],
        [0, "&Rcaron;"],
        [0, "&rcaron;"],
        [0, "&Sacute;"],
        [0, "&sacute;"],
        [0, "&Scirc;"],
        [0, "&scirc;"],
        [0, "&Scedil;"],
        [0, "&scedil;"],
        [0, "&Scaron;"],
        [0, "&scaron;"],
        [0, "&Tcedil;"],
        [0, "&tcedil;"],
        [0, "&Tcaron;"],
        [0, "&tcaron;"],
        [0, "&Tstrok;"],
        [0, "&tstrok;"],
        [0, "&Utilde;"],
        [0, "&utilde;"],
        [0, "&Umacr;"],
        [0, "&umacr;"],
        [0, "&Ubreve;"],
        [0, "&ubreve;"],
        [0, "&Uring;"],
        [0, "&uring;"],
        [0, "&Udblac;"],
        [0, "&udblac;"],
        [0, "&Uogon;"],
        [0, "&uogon;"],
        [0, "&Wcirc;"],
        [0, "&wcirc;"],
        [0, "&Ycirc;"],
        [0, "&ycirc;"],
        [0, "&Yuml;"],
        [0, "&Zacute;"],
        [0, "&zacute;"],
        [0, "&Zdot;"],
        [0, "&zdot;"],
        [0, "&Zcaron;"],
        [0, "&zcaron;"],
        [19, "&fnof;"],
        [34, "&imped;"],
        [63, "&gacute;"],
        [65, "&jmath;"],
        [142, "&circ;"],
        [0, "&caron;"],
        [16, "&breve;"],
        [0, "&DiacriticalDot;"],
        [0, "&ring;"],
        [0, "&ogon;"],
        [0, "&DiacriticalTilde;"],
        [0, "&dblac;"],
        [51, "&DownBreve;"],
        [127, "&Alpha;"],
        [0, "&Beta;"],
        [0, "&Gamma;"],
        [0, "&Delta;"],
        [0, "&Epsilon;"],
        [0, "&Zeta;"],
        [0, "&Eta;"],
        [0, "&Theta;"],
        [0, "&Iota;"],
        [0, "&Kappa;"],
        [0, "&Lambda;"],
        [0, "&Mu;"],
        [0, "&Nu;"],
        [0, "&Xi;"],
        [0, "&Omicron;"],
        [0, "&Pi;"],
        [0, "&Rho;"],
        [1, "&Sigma;"],
        [0, "&Tau;"],
        [0, "&Upsilon;"],
        [0, "&Phi;"],
        [0, "&Chi;"],
        [0, "&Psi;"],
        [0, "&ohm;"],
        [7, "&alpha;"],
        [0, "&beta;"],
        [0, "&gamma;"],
        [0, "&delta;"],
        [0, "&epsi;"],
        [0, "&zeta;"],
        [0, "&eta;"],
        [0, "&theta;"],
        [0, "&iota;"],
        [0, "&kappa;"],
        [0, "&lambda;"],
        [0, "&mu;"],
        [0, "&nu;"],
        [0, "&xi;"],
        [0, "&omicron;"],
        [0, "&pi;"],
        [0, "&rho;"],
        [0, "&sigmaf;"],
        [0, "&sigma;"],
        [0, "&tau;"],
        [0, "&upsi;"],
        [0, "&phi;"],
        [0, "&chi;"],
        [0, "&psi;"],
        [0, "&omega;"],
        [7, "&thetasym;"],
        [0, "&Upsi;"],
        [2, "&phiv;"],
        [0, "&piv;"],
        [5, "&Gammad;"],
        [0, "&digamma;"],
        [18, "&kappav;"],
        [0, "&rhov;"],
        [3, "&epsiv;"],
        [0, "&backepsilon;"],
        [10, "&IOcy;"],
        [0, "&DJcy;"],
        [0, "&GJcy;"],
        [0, "&Jukcy;"],
        [0, "&DScy;"],
        [0, "&Iukcy;"],
        [0, "&YIcy;"],
        [0, "&Jsercy;"],
        [0, "&LJcy;"],
        [0, "&NJcy;"],
        [0, "&TSHcy;"],
        [0, "&KJcy;"],
        [1, "&Ubrcy;"],
        [0, "&DZcy;"],
        [0, "&Acy;"],
        [0, "&Bcy;"],
        [0, "&Vcy;"],
        [0, "&Gcy;"],
        [0, "&Dcy;"],
        [0, "&IEcy;"],
        [0, "&ZHcy;"],
        [0, "&Zcy;"],
        [0, "&Icy;"],
        [0, "&Jcy;"],
        [0, "&Kcy;"],
        [0, "&Lcy;"],
        [0, "&Mcy;"],
        [0, "&Ncy;"],
        [0, "&Ocy;"],
        [0, "&Pcy;"],
        [0, "&Rcy;"],
        [0, "&Scy;"],
        [0, "&Tcy;"],
        [0, "&Ucy;"],
        [0, "&Fcy;"],
        [0, "&KHcy;"],
        [0, "&TScy;"],
        [0, "&CHcy;"],
        [0, "&SHcy;"],
        [0, "&SHCHcy;"],
        [0, "&HARDcy;"],
        [0, "&Ycy;"],
        [0, "&SOFTcy;"],
        [0, "&Ecy;"],
        [0, "&YUcy;"],
        [0, "&YAcy;"],
        [0, "&acy;"],
        [0, "&bcy;"],
        [0, "&vcy;"],
        [0, "&gcy;"],
        [0, "&dcy;"],
        [0, "&iecy;"],
        [0, "&zhcy;"],
        [0, "&zcy;"],
        [0, "&icy;"],
        [0, "&jcy;"],
        [0, "&kcy;"],
        [0, "&lcy;"],
        [0, "&mcy;"],
        [0, "&ncy;"],
        [0, "&ocy;"],
        [0, "&pcy;"],
        [0, "&rcy;"],
        [0, "&scy;"],
        [0, "&tcy;"],
        [0, "&ucy;"],
        [0, "&fcy;"],
        [0, "&khcy;"],
        [0, "&tscy;"],
        [0, "&chcy;"],
        [0, "&shcy;"],
        [0, "&shchcy;"],
        [0, "&hardcy;"],
        [0, "&ycy;"],
        [0, "&softcy;"],
        [0, "&ecy;"],
        [0, "&yucy;"],
        [0, "&yacy;"],
        [1, "&iocy;"],
        [0, "&djcy;"],
        [0, "&gjcy;"],
        [0, "&jukcy;"],
        [0, "&dscy;"],
        [0, "&iukcy;"],
        [0, "&yicy;"],
        [0, "&jsercy;"],
        [0, "&ljcy;"],
        [0, "&njcy;"],
        [0, "&tshcy;"],
        [0, "&kjcy;"],
        [1, "&ubrcy;"],
        [0, "&dzcy;"],
        [7074, "&ensp;"],
        [0, "&emsp;"],
        [0, "&emsp13;"],
        [0, "&emsp14;"],
        [1, "&numsp;"],
        [0, "&puncsp;"],
        [0, "&ThinSpace;"],
        [0, "&hairsp;"],
        [0, "&NegativeMediumSpace;"],
        [0, "&zwnj;"],
        [0, "&zwj;"],
        [0, "&lrm;"],
        [0, "&rlm;"],
        [0, "&dash;"],
        [2, "&ndash;"],
        [0, "&mdash;"],
        [0, "&horbar;"],
        [0, "&Verbar;"],
        [1, "&lsquo;"],
        [0, "&CloseCurlyQuote;"],
        [0, "&lsquor;"],
        [1, "&ldquo;"],
        [0, "&CloseCurlyDoubleQuote;"],
        [0, "&bdquo;"],
        [1, "&dagger;"],
        [0, "&Dagger;"],
        [0, "&bull;"],
        [2, "&nldr;"],
        [0, "&hellip;"],
        [9, "&permil;"],
        [0, "&pertenk;"],
        [0, "&prime;"],
        [0, "&Prime;"],
        [0, "&tprime;"],
        [0, "&backprime;"],
        [3, "&lsaquo;"],
        [0, "&rsaquo;"],
        [3, "&oline;"],
        [2, "&caret;"],
        [1, "&hybull;"],
        [0, "&frasl;"],
        [10, "&bsemi;"],
        [7, "&qprime;"],
        [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }],
        [0, "&NoBreak;"],
        [0, "&af;"],
        [0, "&InvisibleTimes;"],
        [0, "&ic;"],
        [72, "&euro;"],
        [46, "&tdot;"],
        [0, "&DotDot;"],
        [37, "&complexes;"],
        [2, "&incare;"],
        [4, "&gscr;"],
        [0, "&hamilt;"],
        [0, "&Hfr;"],
        [0, "&Hopf;"],
        [0, "&planckh;"],
        [0, "&hbar;"],
        [0, "&imagline;"],
        [0, "&Ifr;"],
        [0, "&lagran;"],
        [0, "&ell;"],
        [1, "&naturals;"],
        [0, "&numero;"],
        [0, "&copysr;"],
        [0, "&weierp;"],
        [0, "&Popf;"],
        [0, "&Qopf;"],
        [0, "&realine;"],
        [0, "&real;"],
        [0, "&reals;"],
        [0, "&rx;"],
        [3, "&trade;"],
        [1, "&integers;"],
        [2, "&mho;"],
        [0, "&zeetrf;"],
        [0, "&iiota;"],
        [2, "&bernou;"],
        [0, "&Cayleys;"],
        [1, "&escr;"],
        [0, "&Escr;"],
        [0, "&Fouriertrf;"],
        [1, "&Mellintrf;"],
        [0, "&order;"],
        [0, "&alefsym;"],
        [0, "&beth;"],
        [0, "&gimel;"],
        [0, "&daleth;"],
        [12, "&CapitalDifferentialD;"],
        [0, "&dd;"],
        [0, "&ee;"],
        [0, "&ii;"],
        [10, "&frac13;"],
        [0, "&frac23;"],
        [0, "&frac15;"],
        [0, "&frac25;"],
        [0, "&frac35;"],
        [0, "&frac45;"],
        [0, "&frac16;"],
        [0, "&frac56;"],
        [0, "&frac18;"],
        [0, "&frac38;"],
        [0, "&frac58;"],
        [0, "&frac78;"],
        [49, "&larr;"],
        [0, "&ShortUpArrow;"],
        [0, "&rarr;"],
        [0, "&darr;"],
        [0, "&harr;"],
        [0, "&updownarrow;"],
        [0, "&nwarr;"],
        [0, "&nearr;"],
        [0, "&LowerRightArrow;"],
        [0, "&LowerLeftArrow;"],
        [0, "&nlarr;"],
        [0, "&nrarr;"],
        [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }],
        [0, "&Larr;"],
        [0, "&Uarr;"],
        [0, "&Rarr;"],
        [0, "&Darr;"],
        [0, "&larrtl;"],
        [0, "&rarrtl;"],
        [0, "&LeftTeeArrow;"],
        [0, "&mapstoup;"],
        [0, "&map;"],
        [0, "&DownTeeArrow;"],
        [1, "&hookleftarrow;"],
        [0, "&hookrightarrow;"],
        [0, "&larrlp;"],
        [0, "&looparrowright;"],
        [0, "&harrw;"],
        [0, "&nharr;"],
        [1, "&lsh;"],
        [0, "&rsh;"],
        [0, "&ldsh;"],
        [0, "&rdsh;"],
        [1, "&crarr;"],
        [0, "&cularr;"],
        [0, "&curarr;"],
        [2, "&circlearrowleft;"],
        [0, "&circlearrowright;"],
        [0, "&leftharpoonup;"],
        [0, "&DownLeftVector;"],
        [0, "&RightUpVector;"],
        [0, "&LeftUpVector;"],
        [0, "&rharu;"],
        [0, "&DownRightVector;"],
        [0, "&dharr;"],
        [0, "&dharl;"],
        [0, "&RightArrowLeftArrow;"],
        [0, "&udarr;"],
        [0, "&LeftArrowRightArrow;"],
        [0, "&leftleftarrows;"],
        [0, "&upuparrows;"],
        [0, "&rightrightarrows;"],
        [0, "&ddarr;"],
        [0, "&leftrightharpoons;"],
        [0, "&Equilibrium;"],
        [0, "&nlArr;"],
        [0, "&nhArr;"],
        [0, "&nrArr;"],
        [0, "&DoubleLeftArrow;"],
        [0, "&DoubleUpArrow;"],
        [0, "&DoubleRightArrow;"],
        [0, "&dArr;"],
        [0, "&DoubleLeftRightArrow;"],
        [0, "&DoubleUpDownArrow;"],
        [0, "&nwArr;"],
        [0, "&neArr;"],
        [0, "&seArr;"],
        [0, "&swArr;"],
        [0, "&lAarr;"],
        [0, "&rAarr;"],
        [1, "&zigrarr;"],
        [6, "&larrb;"],
        [0, "&rarrb;"],
        [15, "&DownArrowUpArrow;"],
        [7, "&loarr;"],
        [0, "&roarr;"],
        [0, "&hoarr;"],
        [0, "&forall;"],
        [0, "&comp;"],
        [0, { v: "&part;", n: 824, o: "&npart;" }],
        [0, "&exist;"],
        [0, "&nexist;"],
        [0, "&empty;"],
        [1, "&Del;"],
        [0, "&Element;"],
        [0, "&NotElement;"],
        [1, "&ni;"],
        [0, "&notni;"],
        [2, "&prod;"],
        [0, "&coprod;"],
        [0, "&sum;"],
        [0, "&minus;"],
        [0, "&MinusPlus;"],
        [0, "&dotplus;"],
        [1, "&Backslash;"],
        [0, "&lowast;"],
        [0, "&compfn;"],
        [1, "&radic;"],
        [2, "&prop;"],
        [0, "&infin;"],
        [0, "&angrt;"],
        [0, { v: "&ang;", n: 8402, o: "&nang;" }],
        [0, "&angmsd;"],
        [0, "&angsph;"],
        [0, "&mid;"],
        [0, "&nmid;"],
        [0, "&DoubleVerticalBar;"],
        [0, "&NotDoubleVerticalBar;"],
        [0, "&and;"],
        [0, "&or;"],
        [0, { v: "&cap;", n: 65024, o: "&caps;" }],
        [0, { v: "&cup;", n: 65024, o: "&cups;" }],
        [0, "&int;"],
        [0, "&Int;"],
        [0, "&iiint;"],
        [0, "&conint;"],
        [0, "&Conint;"],
        [0, "&Cconint;"],
        [0, "&cwint;"],
        [0, "&ClockwiseContourIntegral;"],
        [0, "&awconint;"],
        [0, "&there4;"],
        [0, "&becaus;"],
        [0, "&ratio;"],
        [0, "&Colon;"],
        [0, "&dotminus;"],
        [1, "&mDDot;"],
        [0, "&homtht;"],
        [0, { v: "&sim;", n: 8402, o: "&nvsim;" }],
        [0, { v: "&backsim;", n: 817, o: "&race;" }],
        [0, { v: "&ac;", n: 819, o: "&acE;" }],
        [0, "&acd;"],
        [0, "&VerticalTilde;"],
        [0, "&NotTilde;"],
        [0, { v: "&eqsim;", n: 824, o: "&nesim;" }],
        [0, "&sime;"],
        [0, "&NotTildeEqual;"],
        [0, "&cong;"],
        [0, "&simne;"],
        [0, "&ncong;"],
        [0, "&ap;"],
        [0, "&nap;"],
        [0, "&ape;"],
        [0, { v: "&apid;", n: 824, o: "&napid;" }],
        [0, "&backcong;"],
        [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }],
        [0, { v: "&bump;", n: 824, o: "&nbump;" }],
        [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }],
        [0, { v: "&doteq;", n: 824, o: "&nedot;" }],
        [0, "&doteqdot;"],
        [0, "&efDot;"],
        [0, "&erDot;"],
        [0, "&Assign;"],
        [0, "&ecolon;"],
        [0, "&ecir;"],
        [0, "&circeq;"],
        [1, "&wedgeq;"],
        [0, "&veeeq;"],
        [1, "&triangleq;"],
        [2, "&equest;"],
        [0, "&ne;"],
        [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }],
        [0, "&nequiv;"],
        [1, { v: "&le;", n: 8402, o: "&nvle;" }],
        [0, { v: "&ge;", n: 8402, o: "&nvge;" }],
        [0, { v: "&lE;", n: 824, o: "&nlE;" }],
        [0, { v: "&gE;", n: 824, o: "&ngE;" }],
        [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }],
        [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }],
        [
          0,
          {
            v: "&ll;",
            n: new Map(
              Bat([
                [824, "&nLtv;"],
                [7577, "&nLt;"],
              ]),
            ),
          },
        ],
        [
          0,
          {
            v: "&gg;",
            n: new Map(
              Bat([
                [824, "&nGtv;"],
                [7577, "&nGt;"],
              ]),
            ),
          },
        ],
        [0, "&between;"],
        [0, "&NotCupCap;"],
        [0, "&nless;"],
        [0, "&ngt;"],
        [0, "&nle;"],
        [0, "&nge;"],
        [0, "&lesssim;"],
        [0, "&GreaterTilde;"],
        [0, "&nlsim;"],
        [0, "&ngsim;"],
        [0, "&LessGreater;"],
        [0, "&gl;"],
        [0, "&NotLessGreater;"],
        [0, "&NotGreaterLess;"],
        [0, "&pr;"],
        [0, "&sc;"],
        [0, "&prcue;"],
        [0, "&sccue;"],
        [0, "&PrecedesTilde;"],
        [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }],
        [0, "&NotPrecedes;"],
        [0, "&NotSucceeds;"],
        [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }],
        [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }],
        [0, "&nsub;"],
        [0, "&nsup;"],
        [0, "&sube;"],
        [0, "&supe;"],
        [0, "&NotSubsetEqual;"],
        [0, "&NotSupersetEqual;"],
        [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }],
        [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }],
        [1, "&cupdot;"],
        [0, "&UnionPlus;"],
        [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }],
        [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }],
        [0, "&sqsube;"],
        [0, "&sqsupe;"],
        [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }],
        [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }],
        [0, "&CirclePlus;"],
        [0, "&CircleMinus;"],
        [0, "&CircleTimes;"],
        [0, "&osol;"],
        [0, "&CircleDot;"],
        [0, "&circledcirc;"],
        [0, "&circledast;"],
        [1, "&circleddash;"],
        [0, "&boxplus;"],
        [0, "&boxminus;"],
        [0, "&boxtimes;"],
        [0, "&dotsquare;"],
        [0, "&RightTee;"],
        [0, "&dashv;"],
        [0, "&DownTee;"],
        [0, "&bot;"],
        [1, "&models;"],
        [0, "&DoubleRightTee;"],
        [0, "&Vdash;"],
        [0, "&Vvdash;"],
        [0, "&VDash;"],
        [0, "&nvdash;"],
        [0, "&nvDash;"],
        [0, "&nVdash;"],
        [0, "&nVDash;"],
        [0, "&prurel;"],
        [1, "&LeftTriangle;"],
        [0, "&RightTriangle;"],
        [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }],
        [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }],
        [0, "&origof;"],
        [0, "&imof;"],
        [0, "&multimap;"],
        [0, "&hercon;"],
        [0, "&intcal;"],
        [0, "&veebar;"],
        [1, "&barvee;"],
        [0, "&angrtvb;"],
        [0, "&lrtri;"],
        [0, "&bigwedge;"],
        [0, "&bigvee;"],
        [0, "&bigcap;"],
        [0, "&bigcup;"],
        [0, "&diam;"],
        [0, "&sdot;"],
        [0, "&sstarf;"],
        [0, "&divideontimes;"],
        [0, "&bowtie;"],
        [0, "&ltimes;"],
        [0, "&rtimes;"],
        [0, "&leftthreetimes;"],
        [0, "&rightthreetimes;"],
        [0, "&backsimeq;"],
        [0, "&curlyvee;"],
        [0, "&curlywedge;"],
        [0, "&Sub;"],
        [0, "&Sup;"],
        [0, "&Cap;"],
        [0, "&Cup;"],
        [0, "&fork;"],
        [0, "&epar;"],
        [0, "&lessdot;"],
        [0, "&gtdot;"],
        [0, { v: "&Ll;", n: 824, o: "&nLl;" }],
        [0, { v: "&Gg;", n: 824, o: "&nGg;" }],
        [0, { v: "&leg;", n: 65024, o: "&lesg;" }],
        [0, { v: "&gel;", n: 65024, o: "&gesl;" }],
        [2, "&cuepr;"],
        [0, "&cuesc;"],
        [0, "&NotPrecedesSlantEqual;"],
        [0, "&NotSucceedsSlantEqual;"],
        [0, "&NotSquareSubsetEqual;"],
        [0, "&NotSquareSupersetEqual;"],
        [2, "&lnsim;"],
        [0, "&gnsim;"],
        [0, "&precnsim;"],
        [0, "&scnsim;"],
        [0, "&nltri;"],
        [0, "&NotRightTriangle;"],
        [0, "&nltrie;"],
        [0, "&NotRightTriangleEqual;"],
        [0, "&vellip;"],
        [0, "&ctdot;"],
        [0, "&utdot;"],
        [0, "&dtdot;"],
        [0, "&disin;"],
        [0, "&isinsv;"],
        [0, "&isins;"],
        [0, { v: "&isindot;", n: 824, o: "&notindot;" }],
        [0, "&notinvc;"],
        [0, "&notinvb;"],
        [1, { v: "&isinE;", n: 824, o: "&notinE;" }],
        [0, "&nisd;"],
        [0, "&xnis;"],
        [0, "&nis;"],
        [0, "&notnivc;"],
        [0, "&notnivb;"],
        [6, "&barwed;"],
        [0, "&Barwed;"],
        [1, "&lceil;"],
        [0, "&rceil;"],
        [0, "&LeftFloor;"],
        [0, "&rfloor;"],
        [0, "&drcrop;"],
        [0, "&dlcrop;"],
        [0, "&urcrop;"],
        [0, "&ulcrop;"],
        [0, "&bnot;"],
        [1, "&profline;"],
        [0, "&profsurf;"],
        [1, "&telrec;"],
        [0, "&target;"],
        [5, "&ulcorn;"],
        [0, "&urcorn;"],
        [0, "&dlcorn;"],
        [0, "&drcorn;"],
        [2, "&frown;"],
        [0, "&smile;"],
        [9, "&cylcty;"],
        [0, "&profalar;"],
        [7, "&topbot;"],
        [6, "&ovbar;"],
        [1, "&solbar;"],
        [60, "&angzarr;"],
        [51, "&lmoustache;"],
        [0, "&rmoustache;"],
        [2, "&OverBracket;"],
        [0, "&bbrk;"],
        [0, "&bbrktbrk;"],
        [37, "&OverParenthesis;"],
        [0, "&UnderParenthesis;"],
        [0, "&OverBrace;"],
        [0, "&UnderBrace;"],
        [2, "&trpezium;"],
        [4, "&elinters;"],
        [59, "&blank;"],
        [164, "&circledS;"],
        [55, "&boxh;"],
        [1, "&boxv;"],
        [9, "&boxdr;"],
        [3, "&boxdl;"],
        [3, "&boxur;"],
        [3, "&boxul;"],
        [3, "&boxvr;"],
        [7, "&boxvl;"],
        [7, "&boxhd;"],
        [7, "&boxhu;"],
        [7, "&boxvh;"],
        [19, "&boxH;"],
        [0, "&boxV;"],
        [0, "&boxdR;"],
        [0, "&boxDr;"],
        [0, "&boxDR;"],
        [0, "&boxdL;"],
        [0, "&boxDl;"],
        [0, "&boxDL;"],
        [0, "&boxuR;"],
        [0, "&boxUr;"],
        [0, "&boxUR;"],
        [0, "&boxuL;"],
        [0, "&boxUl;"],
        [0, "&boxUL;"],
        [0, "&boxvR;"],
        [0, "&boxVr;"],
        [0, "&boxVR;"],
        [0, "&boxvL;"],
        [0, "&boxVl;"],
        [0, "&boxVL;"],
        [0, "&boxHd;"],
        [0, "&boxhD;"],
        [0, "&boxHD;"],
        [0, "&boxHu;"],
        [0, "&boxhU;"],
        [0, "&boxHU;"],
        [0, "&boxvH;"],
        [0, "&boxVh;"],
        [0, "&boxVH;"],
        [19, "&uhblk;"],
        [3, "&lhblk;"],
        [3, "&block;"],
        [8, "&blk14;"],
        [0, "&blk12;"],
        [0, "&blk34;"],
        [13, "&square;"],
        [8, "&blacksquare;"],
        [0, "&EmptyVerySmallSquare;"],
        [1, "&rect;"],
        [0, "&marker;"],
        [2, "&fltns;"],
        [1, "&bigtriangleup;"],
        [0, "&blacktriangle;"],
        [0, "&triangle;"],
        [2, "&blacktriangleright;"],
        [0, "&rtri;"],
        [3, "&bigtriangledown;"],
        [0, "&blacktriangledown;"],
        [0, "&dtri;"],
        [2, "&blacktriangleleft;"],
        [0, "&ltri;"],
        [6, "&loz;"],
        [0, "&cir;"],
        [32, "&tridot;"],
        [2, "&bigcirc;"],
        [8, "&ultri;"],
        [0, "&urtri;"],
        [0, "&lltri;"],
        [0, "&EmptySmallSquare;"],
        [0, "&FilledSmallSquare;"],
        [8, "&bigstar;"],
        [0, "&star;"],
        [7, "&phone;"],
        [49, "&female;"],
        [1, "&male;"],
        [29, "&spades;"],
        [2, "&clubs;"],
        [1, "&hearts;"],
        [0, "&diamondsuit;"],
        [3, "&sung;"],
        [2, "&flat;"],
        [0, "&natural;"],
        [0, "&sharp;"],
        [163, "&check;"],
        [3, "&cross;"],
        [8, "&malt;"],
        [21, "&sext;"],
        [33, "&VerticalSeparator;"],
        [25, "&lbbrk;"],
        [0, "&rbbrk;"],
        [84, "&bsolhsub;"],
        [0, "&suphsol;"],
        [28, "&LeftDoubleBracket;"],
        [0, "&RightDoubleBracket;"],
        [0, "&lang;"],
        [0, "&rang;"],
        [0, "&Lang;"],
        [0, "&Rang;"],
        [0, "&loang;"],
        [0, "&roang;"],
        [7, "&longleftarrow;"],
        [0, "&longrightarrow;"],
        [0, "&longleftrightarrow;"],
        [0, "&DoubleLongLeftArrow;"],
        [0, "&DoubleLongRightArrow;"],
        [0, "&DoubleLongLeftRightArrow;"],
        [1, "&longmapsto;"],
        [2, "&dzigrarr;"],
        [258, "&nvlArr;"],
        [0, "&nvrArr;"],
        [0, "&nvHarr;"],
        [0, "&Map;"],
        [6, "&lbarr;"],
        [0, "&bkarow;"],
        [0, "&lBarr;"],
        [0, "&dbkarow;"],
        [0, "&drbkarow;"],
        [0, "&DDotrahd;"],
        [0, "&UpArrowBar;"],
        [0, "&DownArrowBar;"],
        [2, "&Rarrtl;"],
        [2, "&latail;"],
        [0, "&ratail;"],
        [0, "&lAtail;"],
        [0, "&rAtail;"],
        [0, "&larrfs;"],
        [0, "&rarrfs;"],
        [0, "&larrbfs;"],
        [0, "&rarrbfs;"],
        [2, "&nwarhk;"],
        [0, "&nearhk;"],
        [0, "&hksearow;"],
        [0, "&hkswarow;"],
        [0, "&nwnear;"],
        [0, "&nesear;"],
        [0, "&seswar;"],
        [0, "&swnwar;"],
        [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }],
        [1, "&cudarrr;"],
        [0, "&ldca;"],
        [0, "&rdca;"],
        [0, "&cudarrl;"],
        [0, "&larrpl;"],
        [2, "&curarrm;"],
        [0, "&cularrp;"],
        [7, "&rarrpl;"],
        [2, "&harrcir;"],
        [0, "&Uarrocir;"],
        [0, "&lurdshar;"],
        [0, "&ldrushar;"],
        [2, "&LeftRightVector;"],
        [0, "&RightUpDownVector;"],
        [0, "&DownLeftRightVector;"],
        [0, "&LeftUpDownVector;"],
        [0, "&LeftVectorBar;"],
        [0, "&RightVectorBar;"],
        [0, "&RightUpVectorBar;"],
        [0, "&RightDownVectorBar;"],
        [0, "&DownLeftVectorBar;"],
        [0, "&DownRightVectorBar;"],
        [0, "&LeftUpVectorBar;"],
        [0, "&LeftDownVectorBar;"],
        [0, "&LeftTeeVector;"],
        [0, "&RightTeeVector;"],
        [0, "&RightUpTeeVector;"],
        [0, "&RightDownTeeVector;"],
        [0, "&DownLeftTeeVector;"],
        [0, "&DownRightTeeVector;"],
        [0, "&LeftUpTeeVector;"],
        [0, "&LeftDownTeeVector;"],
        [0, "&lHar;"],
        [0, "&uHar;"],
        [0, "&rHar;"],
        [0, "&dHar;"],
        [0, "&luruhar;"],
        [0, "&ldrdhar;"],
        [0, "&ruluhar;"],
        [0, "&rdldhar;"],
        [0, "&lharul;"],
        [0, "&llhard;"],
        [0, "&rharul;"],
        [0, "&lrhard;"],
        [0, "&udhar;"],
        [0, "&duhar;"],
        [0, "&RoundImplies;"],
        [0, "&erarr;"],
        [0, "&simrarr;"],
        [0, "&larrsim;"],
        [0, "&rarrsim;"],
        [0, "&rarrap;"],
        [0, "&ltlarr;"],
        [1, "&gtrarr;"],
        [0, "&subrarr;"],
        [1, "&suplarr;"],
        [0, "&lfisht;"],
        [0, "&rfisht;"],
        [0, "&ufisht;"],
        [0, "&dfisht;"],
        [5, "&lopar;"],
        [0, "&ropar;"],
        [4, "&lbrke;"],
        [0, "&rbrke;"],
        [0, "&lbrkslu;"],
        [0, "&rbrksld;"],
        [0, "&lbrksld;"],
        [0, "&rbrkslu;"],
        [0, "&langd;"],
        [0, "&rangd;"],
        [0, "&lparlt;"],
        [0, "&rpargt;"],
        [0, "&gtlPar;"],
        [0, "&ltrPar;"],
        [3, "&vzigzag;"],
        [1, "&vangrt;"],
        [0, "&angrtvbd;"],
        [6, "&ange;"],
        [0, "&range;"],
        [0, "&dwangle;"],
        [0, "&uwangle;"],
        [0, "&angmsdaa;"],
        [0, "&angmsdab;"],
        [0, "&angmsdac;"],
        [0, "&angmsdad;"],
        [0, "&angmsdae;"],
        [0, "&angmsdaf;"],
        [0, "&angmsdag;"],
        [0, "&angmsdah;"],
        [0, "&bemptyv;"],
        [0, "&demptyv;"],
        [0, "&cemptyv;"],
        [0, "&raemptyv;"],
        [0, "&laemptyv;"],
        [0, "&ohbar;"],
        [0, "&omid;"],
        [0, "&opar;"],
        [1, "&operp;"],
        [1, "&olcross;"],
        [0, "&odsold;"],
        [1, "&olcir;"],
        [0, "&ofcir;"],
        [0, "&olt;"],
        [0, "&ogt;"],
        [0, "&cirscir;"],
        [0, "&cirE;"],
        [0, "&solb;"],
        [0, "&bsolb;"],
        [3, "&boxbox;"],
        [3, "&trisb;"],
        [0, "&rtriltri;"],
        [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }],
        [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }],
        [11, "&iinfin;"],
        [0, "&infintie;"],
        [0, "&nvinfin;"],
        [4, "&eparsl;"],
        [0, "&smeparsl;"],
        [0, "&eqvparsl;"],
        [5, "&blacklozenge;"],
        [8, "&RuleDelayed;"],
        [1, "&dsol;"],
        [9, "&bigodot;"],
        [0, "&bigoplus;"],
        [0, "&bigotimes;"],
        [1, "&biguplus;"],
        [1, "&bigsqcup;"],
        [5, "&iiiint;"],
        [0, "&fpartint;"],
        [2, "&cirfnint;"],
        [0, "&awint;"],
        [0, "&rppolint;"],
        [0, "&scpolint;"],
        [0, "&npolint;"],
        [0, "&pointint;"],
        [0, "&quatint;"],
        [0, "&intlarhk;"],
        [10, "&pluscir;"],
        [0, "&plusacir;"],
        [0, "&simplus;"],
        [0, "&plusdu;"],
        [0, "&plussim;"],
        [0, "&plustwo;"],
        [1, "&mcomma;"],
        [0, "&minusdu;"],
        [2, "&loplus;"],
        [0, "&roplus;"],
        [0, "&Cross;"],
        [0, "&timesd;"],
        [0, "&timesbar;"],
        [1, "&smashp;"],
        [0, "&lotimes;"],
        [0, "&rotimes;"],
        [0, "&otimesas;"],
        [0, "&Otimes;"],
        [0, "&odiv;"],
        [0, "&triplus;"],
        [0, "&triminus;"],
        [0, "&tritime;"],
        [0, "&intprod;"],
        [2, "&amalg;"],
        [0, "&capdot;"],
        [1, "&ncup;"],
        [0, "&ncap;"],
        [0, "&capand;"],
        [0, "&cupor;"],
        [0, "&cupcap;"],
        [0, "&capcup;"],
        [0, "&cupbrcap;"],
        [0, "&capbrcup;"],
        [0, "&cupcup;"],
        [0, "&capcap;"],
        [0, "&ccups;"],
        [0, "&ccaps;"],
        [2, "&ccupssm;"],
        [2, "&And;"],
        [0, "&Or;"],
        [0, "&andand;"],
        [0, "&oror;"],
        [0, "&orslope;"],
        [0, "&andslope;"],
        [1, "&andv;"],
        [0, "&orv;"],
        [0, "&andd;"],
        [0, "&ord;"],
        [1, "&wedbar;"],
        [6, "&sdote;"],
        [3, "&simdot;"],
        [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }],
        [0, "&easter;"],
        [0, "&apacir;"],
        [0, { v: "&apE;", n: 824, o: "&napE;" }],
        [0, "&eplus;"],
        [0, "&pluse;"],
        [0, "&Esim;"],
        [0, "&Colone;"],
        [0, "&Equal;"],
        [1, "&ddotseq;"],
        [0, "&equivDD;"],
        [0, "&ltcir;"],
        [0, "&gtcir;"],
        [0, "&ltquest;"],
        [0, "&gtquest;"],
        [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }],
        [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }],
        [0, "&lesdot;"],
        [0, "&gesdot;"],
        [0, "&lesdoto;"],
        [0, "&gesdoto;"],
        [0, "&lesdotor;"],
        [0, "&gesdotol;"],
        [0, "&lap;"],
        [0, "&gap;"],
        [0, "&lne;"],
        [0, "&gne;"],
        [0, "&lnap;"],
        [0, "&gnap;"],
        [0, "&lEg;"],
        [0, "&gEl;"],
        [0, "&lsime;"],
        [0, "&gsime;"],
        [0, "&lsimg;"],
        [0, "&gsiml;"],
        [0, "&lgE;"],
        [0, "&glE;"],
        [0, "&lesges;"],
        [0, "&gesles;"],
        [0, "&els;"],
        [0, "&egs;"],
        [0, "&elsdot;"],
        [0, "&egsdot;"],
        [0, "&el;"],
        [0, "&eg;"],
        [2, "&siml;"],
        [0, "&simg;"],
        [0, "&simlE;"],
        [0, "&simgE;"],
        [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }],
        [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }],
        [1, "&glj;"],
        [0, "&gla;"],
        [0, "&ltcc;"],
        [0, "&gtcc;"],
        [0, "&lescc;"],
        [0, "&gescc;"],
        [0, "&smt;"],
        [0, "&lat;"],
        [0, { v: "&smte;", n: 65024, o: "&smtes;" }],
        [0, { v: "&late;", n: 65024, o: "&lates;" }],
        [0, "&bumpE;"],
        [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }],
        [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }],
        [2, "&prE;"],
        [0, "&scE;"],
        [0, "&precneqq;"],
        [0, "&scnE;"],
        [0, "&prap;"],
        [0, "&scap;"],
        [0, "&precnapprox;"],
        [0, "&scnap;"],
        [0, "&Pr;"],
        [0, "&Sc;"],
        [0, "&subdot;"],
        [0, "&supdot;"],
        [0, "&subplus;"],
        [0, "&supplus;"],
        [0, "&submult;"],
        [0, "&supmult;"],
        [0, "&subedot;"],
        [0, "&supedot;"],
        [0, { v: "&subE;", n: 824, o: "&nsubE;" }],
        [0, { v: "&supE;", n: 824, o: "&nsupE;" }],
        [0, "&subsim;"],
        [0, "&supsim;"],
        [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }],
        [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }],
        [2, "&csub;"],
        [0, "&csup;"],
        [0, "&csube;"],
        [0, "&csupe;"],
        [0, "&subsup;"],
        [0, "&supsub;"],
        [0, "&subsub;"],
        [0, "&supsup;"],
        [0, "&suphsub;"],
        [0, "&supdsub;"],
        [0, "&forkv;"],
        [0, "&topfork;"],
        [0, "&mlcp;"],
        [8, "&Dashv;"],
        [1, "&Vdashl;"],
        [0, "&Barv;"],
        [0, "&vBar;"],
        [0, "&vBarv;"],
        [1, "&Vbar;"],
        [0, "&Not;"],
        [0, "&bNot;"],
        [0, "&rnmid;"],
        [0, "&cirmid;"],
        [0, "&midcir;"],
        [0, "&topcir;"],
        [0, "&nhpar;"],
        [0, "&parsim;"],
        [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }],
        [
          44343,
          {
            n: new Map(
              Bat([
                [56476, "&Ascr;"],
                [1, "&Cscr;"],
                [0, "&Dscr;"],
                [2, "&Gscr;"],
                [2, "&Jscr;"],
                [0, "&Kscr;"],
                [2, "&Nscr;"],
                [0, "&Oscr;"],
                [0, "&Pscr;"],
                [0, "&Qscr;"],
                [1, "&Sscr;"],
                [0, "&Tscr;"],
                [0, "&Uscr;"],
                [0, "&Vscr;"],
                [0, "&Wscr;"],
                [0, "&Xscr;"],
                [0, "&Yscr;"],
                [0, "&Zscr;"],
                [0, "&ascr;"],
                [0, "&bscr;"],
                [0, "&cscr;"],
                [0, "&dscr;"],
                [1, "&fscr;"],
                [1, "&hscr;"],
                [0, "&iscr;"],
                [0, "&jscr;"],
                [0, "&kscr;"],
                [0, "&lscr;"],
                [0, "&mscr;"],
                [0, "&nscr;"],
                [1, "&pscr;"],
                [0, "&qscr;"],
                [0, "&rscr;"],
                [0, "&sscr;"],
                [0, "&tscr;"],
                [0, "&uscr;"],
                [0, "&vscr;"],
                [0, "&wscr;"],
                [0, "&xscr;"],
                [0, "&yscr;"],
                [0, "&zscr;"],
                [52, "&Afr;"],
                [0, "&Bfr;"],
                [1, "&Dfr;"],
                [0, "&Efr;"],
                [0, "&Ffr;"],
                [0, "&Gfr;"],
                [2, "&Jfr;"],
                [0, "&Kfr;"],
                [0, "&Lfr;"],
                [0, "&Mfr;"],
                [0, "&Nfr;"],
                [0, "&Ofr;"],
                [0, "&Pfr;"],
                [0, "&Qfr;"],
                [1, "&Sfr;"],
                [0, "&Tfr;"],
                [0, "&Ufr;"],
                [0, "&Vfr;"],
                [0, "&Wfr;"],
                [0, "&Xfr;"],
                [0, "&Yfr;"],
                [1, "&afr;"],
                [0, "&bfr;"],
                [0, "&cfr;"],
                [0, "&dfr;"],
                [0, "&efr;"],
                [0, "&ffr;"],
                [0, "&gfr;"],
                [0, "&hfr;"],
                [0, "&ifr;"],
                [0, "&jfr;"],
                [0, "&kfr;"],
                [0, "&lfr;"],
                [0, "&mfr;"],
                [0, "&nfr;"],
                [0, "&ofr;"],
                [0, "&pfr;"],
                [0, "&qfr;"],
                [0, "&rfr;"],
                [0, "&sfr;"],
                [0, "&tfr;"],
                [0, "&ufr;"],
                [0, "&vfr;"],
                [0, "&wfr;"],
                [0, "&xfr;"],
                [0, "&yfr;"],
                [0, "&zfr;"],
                [0, "&Aopf;"],
                [0, "&Bopf;"],
                [1, "&Dopf;"],
                [0, "&Eopf;"],
                [0, "&Fopf;"],
                [0, "&Gopf;"],
                [1, "&Iopf;"],
                [0, "&Jopf;"],
                [0, "&Kopf;"],
                [0, "&Lopf;"],
                [0, "&Mopf;"],
                [1, "&Oopf;"],
                [3, "&Sopf;"],
                [0, "&Topf;"],
                [0, "&Uopf;"],
                [0, "&Vopf;"],
                [0, "&Wopf;"],
                [0, "&Xopf;"],
                [0, "&Yopf;"],
                [1, "&aopf;"],
                [0, "&bopf;"],
                [0, "&copf;"],
                [0, "&dopf;"],
                [0, "&eopf;"],
                [0, "&fopf;"],
                [0, "&gopf;"],
                [0, "&hopf;"],
                [0, "&iopf;"],
                [0, "&jopf;"],
                [0, "&kopf;"],
                [0, "&lopf;"],
                [0, "&mopf;"],
                [0, "&nopf;"],
                [0, "&oopf;"],
                [0, "&popf;"],
                [0, "&qopf;"],
                [0, "&ropf;"],
                [0, "&sopf;"],
                [0, "&topf;"],
                [0, "&uopf;"],
                [0, "&vopf;"],
                [0, "&wopf;"],
                [0, "&xopf;"],
                [0, "&yopf;"],
                [0, "&zopf;"],
              ]),
            ),
          },
        ],
        [8906, "&fflig;"],
        [0, "&filig;"],
        [0, "&fllig;"],
        [0, "&ffilig;"],
        [0, "&ffllig;"],
      ]),
    );
  });
function E4e(t) {
  let e = "",
    r = 0,
    n;
  for (; (n = Tmr.exec(t)) !== null; ) {
    let o = n.index,
      s = t.charCodeAt(o),
      a = Dai.get(s);
    a !== void 0
      ? ((e += t.substring(r, o) + a), (r = o + 1))
      : ((e += `${t.substring(r, o)}&#x${Iai(t, o).toString(16)};`), (r = Tmr.lastIndex += +((s & 64512) === 55296)));
  }
  return e + t.substr(r);
}
function Dmr(t, e) {
  return function (n) {
    let o,
      s = 0,
      a = "";
    for (; (o = t.exec(n)); )
      (s !== o.index && (a += n.substring(s, o.index)), (a += e.get(o[0].charCodeAt(0))), (s = o.index + 1));
    return a + n.substring(s);
  };
}
var Tmr,
  Dai,
  Iai,
  Rai,
  Lat,
  Mat,
  Fat = j(() => {
    ((Tmr = /["&'<>$\x80-\uFFFF]/g),
      (Dai = new Map([
        [34, "&quot;"],
        [38, "&amp;"],
        [39, "&apos;"],
        [60, "&lt;"],
        [62, "&gt;"],
      ])),
      (Iai =
        String.prototype.codePointAt != null
          ? (t, e) => t.codePointAt(e)
          : (t, e) =>
              (t.charCodeAt(e) & 64512) === 55296
                ? (t.charCodeAt(e) - 55296) * 1024 + t.charCodeAt(e + 1) - 56320 + 65536
                : t.charCodeAt(e)));
    ((Rai = Dmr(/[&<>'"]/g, Dai)),
      (Lat = Dmr(
        /["&\u00A0]/g,
        new Map([
          [34, "&quot;"],
          [38, "&amp;"],
          [160, "&nbsp;"],
        ]),
      )),
      (Mat = Dmr(
        /[&<>\u00A0]/g,
        new Map([
          [38, "&amp;"],
          [60, "&lt;"],
          [62, "&gt;"],
          [160, "&nbsp;"],
        ]),
      )));
  });
var Imr = j(() => {
  Tai();
  Fat();
});
var kai,
  Oai,
  Bai = j(() => {
    y4e();
    Imr();
    Fat();
    Fat();
    Imr();
    y4e();
    (function (t) {
      ((t[(t.XML = 0)] = "XML"), (t[(t.HTML = 1)] = "HTML"));
    })(kai || (kai = {}));
    (function (t) {
      ((t[(t.UTF8 = 0)] = "UTF8"),
        (t[(t.ASCII = 1)] = "ASCII"),
        (t[(t.Extensive = 2)] = "Extensive"),
        (t[(t.Attribute = 3)] = "Attribute"),
        (t[(t.Text = 4)] = "Text"));
    })(Oai || (Oai = {}));
  });
var Lai,
  Mai,
  Fai = j(() => {
    ((Lai = new Map(
      [
        "altGlyph",
        "altGlyphDef",
        "altGlyphItem",
        "animateColor",
        "animateMotion",
        "animateTransform",
        "clipPath",
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feDropShadow",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
        "foreignObject",
        "glyphRef",
        "linearGradient",
        "radialGradient",
        "textPath",
      ].map((t) => [t.toLowerCase(), t]),
    )),
      (Mai = new Map(
        [
          "definitionURL",
          "attributeName",
          "attributeType",
          "baseFrequency",
          "baseProfile",
          "calcMode",
          "clipPathUnits",
          "diffuseConstant",
          "edgeMode",
          "filterUnits",
          "glyphRef",
          "gradientTransform",
          "gradientUnits",
          "kernelMatrix",
          "kernelUnitLength",
          "keyPoints",
          "keySplines",
          "keyTimes",
          "lengthAdjust",
          "limitingConeAngle",
          "markerHeight",
          "markerUnits",
          "markerWidth",
          "maskContentUnits",
          "maskUnits",
          "numOctaves",
          "pathLength",
          "patternContentUnits",
          "patternTransform",
          "patternUnits",
          "pointsAtX",
          "pointsAtY",
          "pointsAtZ",
          "preserveAlpha",
          "preserveAspectRatio",
          "primitiveUnits",
          "refX",
          "refY",
          "repeatCount",
          "repeatDur",
          "requiredExtensions",
          "requiredFeatures",
          "specularConstant",
          "specularExponent",
          "spreadMethod",
          "startOffset",
          "stdDeviation",
          "stitchTiles",
          "surfaceScale",
          "systemLanguage",
          "tableValues",
          "targetX",
          "targetY",
          "textLength",
          "viewBox",
          "viewTarget",
          "xChannelSelector",
          "yChannelSelector",
          "zoomAndPan",
        ].map((t) => [t.toLowerCase(), t]),
      )));
  });
function U5a(t) {
  return t.replace(/"/g, "&quot;");
}
function $5a(t, e) {
  var r;
  if (!t) return;
  let n =
    ((r = e.encodeEntities) !== null && r !== void 0 ? r : e.decodeEntities) === !1
      ? U5a
      : e.xmlMode || e.encodeEntities !== "utf8"
        ? E4e
        : Lat;
  return Object.keys(t)
    .map((o) => {
      var s, a;
      let u = (s = t[o]) !== null && s !== void 0 ? s : "";
      return (
        e.xmlMode === "foreign" && (o = (a = Mai.get(o)) !== null && a !== void 0 ? a : o),
        !e.emptyAttrs && !e.xmlMode && u === "" ? o : `${o}="${n(u)}"`
      );
    })
    .join(" ");
}
function v4e(t, e = {}) {
  let r = "length" in t ? t : [t],
    n = "";
  for (let o = 0; o < r.length; o++) n += j5a(r[o], e);
  return n;
}
function j5a(t, e) {
  switch (t.type) {
    case Psi:
      return v4e(t.children, e);
    case Qsi:
    case Lsi:
      return H5a(t);
    case Msi:
      return z5a(t);
    case jsi:
      return W5a(t);
    case Fsi:
    case Usi:
    case $si:
      return q5a(t, e);
    case Bsi:
      return V5a(t, e);
  }
}
function q5a(t, e) {
  var r;
  (e.xmlMode === "foreign" &&
    ((t.name = (r = Lai.get(t.name)) !== null && r !== void 0 ? r : t.name),
    t.parent && Q5a.has(t.parent.name) && (e = { ...e, xmlMode: !1 })),
    !e.xmlMode && G5a.has(t.name) && (e = { ...e, xmlMode: "foreign" }));
  let n = `<${t.name}`,
    o = $5a(t.attribs, e);
  return (
    o && (n += ` ${o}`),
    t.children.length === 0 && (e.xmlMode ? e.selfClosingTags !== !1 : e.selfClosingTags && Uai.has(t.name))
      ? (e.xmlMode || (n += " "), (n += "/>"))
      : ((n += ">"),
        t.children.length > 0 && (n += v4e(t.children, e)),
        (e.xmlMode || !Uai.has(t.name)) && (n += `</${t.name}>`)),
    n
  );
}
function H5a(t) {
  return `<${t.data}>`;
}
function V5a(t, e) {
  var r;
  let n = t.data || "";
  return (
    ((r = e.encodeEntities) !== null && r !== void 0 ? r : e.decodeEntities) !== !1 &&
      !(!e.xmlMode && t.parent && F5a.has(t.parent.name)) &&
      (n = e.xmlMode || e.encodeEntities !== "utf8" ? E4e(n) : Mat(n)),
    n
  );
}
function W5a(t) {
  return `<![CDATA[${t.children[0].data}]]>`;
}
function z5a(t) {
  return `<!--${t.data}-->`;
}
var F5a,
  Uai,
  Q5a,
  G5a,
  Omr = j(() => {
    a0e();
    Bai();
    Fai();
    F5a = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
    Uai = new Set([
      "area",
      "base",
      "basefont",
      "br",
      "col",
      "command",
      "embed",
      "frame",
      "hr",
      "img",
      "input",
      "isindex",
      "keygen",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr",
    ]);
    ((Q5a = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"])),
      (G5a = new Set(["svg", "math"])));
  });
var Nmr = j(() => {
  QD();
  Omr();
  a0e();
});
var $ai = j(() => {
  QD();
});
var jai = j(() => {});
var Pmr = j(() => {
  QD();
});
var Bmr = j(() => {
  QD();
  Pmr();
});
var Qai,
  Gai = j(() => {
    QD();
    (function (t) {
      ((t[(t.DISCONNECTED = 1)] = "DISCONNECTED"),
        (t[(t.PRECEDING = 2)] = "PRECEDING"),
        (t[(t.FOLLOWING = 4)] = "FOLLOWING"),
        (t[(t.CONTAINS = 8)] = "CONTAINS"),
        (t[(t.CONTAINED_BY = 16)] = "CONTAINED_BY"));
    })(Qai || (Qai = {}));
  });
var qai = j(() => {
  Nmr();
  Bmr();
});
var $at = j(() => {
  Nmr();
  $ai();
  jai();
  Pmr();
  Bmr();
  Gai();
  qai();
  QD();
});
function Hai(t, e) {
  let r = new l0e(void 0, e);
  return (new _4e(r, e).end(t), r.root);
}
var Vai = j(() => {
  xmr();
  xmr();
  QD();
  QD();
  wmr();
  a0e();
  $at();
  $at();
  $at();
});