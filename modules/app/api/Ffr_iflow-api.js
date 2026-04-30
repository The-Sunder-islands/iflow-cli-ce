/**
 * @module Ffr
 * @category app/api
 * @label iflow-api
 * @position 1626 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ffr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ffr = T((FFc, o1i) => {
  "use strict";
  var Mfr = Symbol("singleComment"),
    i1i = Symbol("multiComment"),
    j4a = () => "",
    Q4a = (t, e, r) => t.slice(e, r).replace(/\S/g, " "),
    G4a = (t, e) => {
      let r = e - 1,
        n = 0;
      for (; t[r] === "\\"; ) ((r -= 1), (n += 1));
      return !!(n % 2);
    };
  o1i.exports = (t, e = {}) => {
    if (typeof t != "string")
      throw new TypeError(`Expected argument \`jsonString\` to be a \`string\`, got \`${typeof t}\``);
    let r = e.whitespace === !1 ? j4a : Q4a,
      n = !1,
      o = !1,
      s = 0,
      a = "";
    for (let u = 0; u < t.length; u++) {
      let c = t[u],
        m = t[u + 1];
      if ((!o && c === '"' && (G4a(t, u) || (n = !n)), !n)) {
        if (!o && c + m === "//") ((a += t.slice(s, u)), (s = u), (o = Mfr), u++);
        else if (
          o === Mfr &&
          c + m ===
            `\r
`
        ) {
          (u++, (o = !1), (a += r(t, s, u)), (s = u));
          continue;
        } else if (
          o === Mfr &&
          c ===
            `
`
        )
          ((o = !1), (a += r(t, s, u)), (s = u));
        else if (!o && c + m === "/*") {
          ((a += t.slice(s, u)), (s = u), (o = i1i), u++);
          continue;
        } else if (o === i1i && c + m === "*/") {
          (u++, (o = !1), (a += r(t, s, u + 1)), (s = u + 1));
          continue;
        }
      }
    }
    return a + (o ? r(t.slice(s)) : t.slice(s));
  };
});
import * as kS from "fs";
import * as Ufr from "path";
var s1i,
  Uct,
  a1i = j(() => {
    "use strict";
    s1i = Se(Ffr(), 1);
    bi();
    Pa();
    Uct = class {
      userSettingsPath;
      projectSettingsPath;
      workspaceConfig = {};
      constructor(e) {
        ((this.userSettingsPath = e.userSettingsPath || this.getDefaultUserSettingsPath()),
          (this.projectSettingsPath = e.projectSettingsPath || this.getDefaultProjectSettingsPath()));
      }
      async loadConfig() {
        let e = await this.loadConfigFromFile(this.userSettingsPath),
          r = await this.loadConfigFromFile(this.projectSettingsPath);
        return ((this.workspaceConfig = r), this.mergeConfigs(e, r));
      }
      async loadConfigFromFile(e) {
        try {
          if (!kS.existsSync(e)) return {};
          let r = await kS.promises.readFile(e, "utf-8");
          return this.parseJsonWithComments(r).hooks || {};
        } catch (r) {
          return (console.warn(`${I.t("hooks.configLoadFailed")} ${e}:`, r), {});
        }
      }
      parseJsonWithComments(e) {
        try {
          let r = (0, s1i.default)(e);
          return JSON.parse(r);
        } catch (r) {
          throw new Error(`${I.t("hooks.invalidJsonConfig")} ${r}`);
        }
      }
      mergeConfigs(...e) {
        let r = {};
        for (let n of e)
          (n.PreToolUse && (r.PreToolUse = [...(r.PreToolUse || []), ...n.PreToolUse]),
            n.PostToolUse && (r.PostToolUse = [...(r.PostToolUse || []), ...n.PostToolUse]),
            n.Stop && (r.Stop = [...(r.Stop || []), ...n.Stop]),
            n.SubagentStop && (r.SubagentStop = [...(r.SubagentStop || []), ...n.SubagentStop]),
            n.SetUpEnvironment && (r.SetUpEnvironment = [...(r.SetUpEnvironment || []), ...n.SetUpEnvironment]),
            n.SessionStart && (r.SessionStart = [...(r.SessionStart || []), ...n.SessionStart]),
            n.SessionEnd && (r.SessionEnd = [...(r.SessionEnd || []), ...n.SessionEnd]),
            n.UserPromptSubmit && (r.UserPromptSubmit = [...(r.UserPromptSubmit || []), ...n.UserPromptSubmit]),
            n.Notification && (r.Notification = [...(r.Notification || []), ...n.Notification]));
        return r;
      }
      getDefaultUserSettingsPath() {
        let e = process.env.HOME || process.env.USERPROFILE || "";
        return Ufr.join(e, ui(), "settings.json");
      }
      getDefaultProjectSettingsPath() {
        let e = process.cwd();
        return Ufr.join(e, ui(), "settings.json");
      }
      validateConfig(e) {
        let r = [],
          n = [
            "PreToolUse",
            "PostToolUse",
            "Stop",
            "SubagentStop",
            "SetUpEnvironment",
            "SessionStart",
            "SessionEnd",
            "UserPromptSubmit",
            "Notification",
          ];
        for (let o of n) {
          let s = e[o];
          if (s)
            for (let a = 0; a < s.length; a++) {
              let u = s[a],
                c = `${o}[${a}]`;
              r.push(...this.validateEventConfig(u, c, o));
            }
        }
        return r;
      }
      validateEventConfig(e, r, n) {
        let o = [];
        if (!e.hooks || !Array.isArray(e.hooks)) return (o.push(`${r}: ${I.t("hooks.validation.hooksRequired")}`), o);
        (["PreToolUse", "PostToolUse", "SessionStart", "SessionEnd", "Notification"].includes(n) &&
          e.matcher !== void 0 &&
          typeof e.matcher != "string" &&
          o.push(`${r}: ${I.t("hooks.validation.matcherMustBeString")}`),
          ["SetUpEnvironment", "Stop", "SubagentStop"].includes(n) &&
            e.matcher !== void 0 &&
            o.push(`${r}: ${I.t("hooks.validation.matcherNotSupported", { eventType: n })}`));
        for (let s = 0; s < e.hooks.length; s++) {
          let a = e.hooks[s],
            u = `${r}.hooks[${s}]`;
          (a.type !== "command" && o.push(`${u}: ${I.t("hooks.validation.commandTypeOnly")}`),
            (!a.command || typeof a.command != "string") && o.push(`${u}: ${I.t("hooks.validation.commandRequired")}`),
            a.timeout !== void 0 &&
              (typeof a.timeout != "number" || a.timeout <= 0) &&
              o.push(`${u}: ${I.t("hooks.validation.timeoutInvalid")}`));
        }
        return o;
      }
      async checkConfigFiles() {
        return {
          userConfigExists: kS.existsSync(this.userSettingsPath),
          projectConfigExists: kS.existsSync(this.projectSettingsPath),
          userConfigPath: this.userSettingsPath,
          projectConfigPath: this.projectSettingsPath,
        };
      }
      watchConfig(e) {
        let r = [],
          n = async () => {
            try {
              let o = await this.loadConfig();
              e(o);
            } catch (o) {
              console.warn("Failed to reload hook config:", o);
            }
          };
        if (kS.existsSync(this.userSettingsPath)) {
          let o = kS.watch(this.userSettingsPath, n);
          r.push(o);
        }
        if (kS.existsSync(this.projectSettingsPath)) {
          let o = kS.watch(this.projectSettingsPath, n);
          r.push(o);
        }
        return () => {
          r.forEach((o) => o.close());
        };
      }
      getWorkspaceConfig() {
        return this.workspaceConfig;
      }
    };
  });
import { spawn as u1i } from "child_process";
import * as $ct from "fs";
import * as zY from "path";
import * as c1i from "os";
var Vp,
  bv,
  $fr = j(() => {
    "use strict";
    E0();
    (function (t) {
      ((t.SHELL = "shell"),
        (t.PYTHON_INLINE = "python_inline"),
        (t.PYTHON_SCRIPT = "python_script"),
        (t.NODE_INLINE = "node_inline"),
        (t.NODE_SCRIPT = "node_script"),
        (t.SCRIPT_FILE = "script_file"),
        (t.DIRECT_EXECUTABLE = "direct_executable"));
    })(Vp || (Vp = {}));
    bv = class {
      static async execute(e, r, n = {}) {
        let o = Date.now(),
          s = (n.timeout || e.timeout || 60) * 1e3,
          a = this.analyzeCommand(e.command);
        return new Promise((u) => {
          let c = "",
            m = "",
            d = !1,
            f = this.createChildProcess(a, n),
            p = setTimeout(() => {
              ((d = !0),
                f.kill("SIGTERM"),
                setTimeout(() => {
                  f.killed || f.kill("SIGKILL");
                }, 5e3));
            }, s);
          if (
            (f.stdout?.on("data", (h) => {
              c += h.toString();
            }),
            f.stderr?.on("data", (h) => {
              m += h.toString();
            }),
            f.stdin &&
              (f.stdin.on("error", (h) => {
                if (!Go(h) || h.code !== "EPIPE") {
                  clearTimeout(p);
                  let g = Date.now() - o;
                  u({
                    success: !1,
                    exitCode: 127,
                    stdout: "",
                    stderr: `Stdin error: ${h.message}`,
                    blocked: !1,
                    duration: g,
                  });
                }
              }),
              !f.stdin.destroyed && f.stdin.writable))
          )
            try {
              (f.stdin.write(r), f.stdin.end());
            } catch (h) {
              if (!Go(h) || h.code !== "EPIPE") {
                clearTimeout(p);
                let g = Date.now() - o,
                  b = h instanceof Error ? h.message : String(h);
                u({
                  success: !1,
                  exitCode: 127,
                  stdout: "",
                  stderr: `Failed to write to stdin: ${b}`,
                  blocked: !1,
                  duration: g,
                });
              }
            }
          (f.on("close", (h, g) => {
            clearTimeout(p);
            let b = Date.now() - o,
              A = h ?? 1;
            (d &&
              ((A = 124),
              (m += `
Command timed out after ${s / 1e3} seconds`)),
              g &&
                !d &&
                ((A = 128 + this.getSignalNumber(g)),
                (m += `
Process killed by signal: ${g}`)));
            let y = A === 0,
              E = A === 2;
            u({ success: y, exitCode: A, stdout: c.trim(), stderr: m.trim(), blocked: E, duration: b });
          }),
            f.on("error", (h) => {
              clearTimeout(p);
              let g = Date.now() - o;
              u({
                success: !1,
                exitCode: 127,
                stdout: "",
                stderr: `Failed to execute command: ${h.message}`,
                blocked: !1,
                duration: g,
              });
            }));
        });
      }
      static analyzeCommand(e) {
        let r = e.trim();
        if (r.startsWith("python3 -c ") || r.startsWith("python -c ")) {
          let s = r.startsWith("python3") ? "python3" : "python",
            a = r.match(/python[3]?\s+-c\s+["'](.*)["']/),
            u = a ? a[1] : r.substring(r.indexOf("-c ") + 3);
          return { executionType: Vp.PYTHON_INLINE, executable: s, args: ["-c", u], interpreter: s, scriptContent: u };
        }
        if (r.startsWith("node -e ") || r.startsWith("node --eval ")) {
          let s = r.match(/node\s+(?:-e|--eval)\s+["'](.*)["']/),
            a = s ? s[1] : r.substring(r.indexOf("-e ") + 3);
          return {
            executionType: Vp.NODE_INLINE,
            executable: "node",
            args: ["-e", a],
            interpreter: "node",
            scriptContent: a,
          };
        }
        let n = this.detectScriptFile(r);
        if (n) return n;
        if (this.isComplexShellCommand(r))
          return { executionType: Vp.SHELL, executable: "bash", args: ["-c", r], needsShell: !0 };
        let o = this.parseSimpleCommand(r);
        return o.length > 0
          ? { executionType: Vp.DIRECT_EXECUTABLE, executable: o[0], args: o.slice(1), needsShell: !1 }
          : { executionType: Vp.SHELL, executable: "bash", args: ["-c", r], needsShell: !0 };
      }
      static detectScriptFile(e) {
        let r = e.split(/\s+/),
          n = r[0];
        if (this.isScriptFilePath(n)) {
          let o = zY.extname(n).toLowerCase(),
            s = this.getInterpreterForExtension(o);
          if (s) return { executionType: Vp.SCRIPT_FILE, executable: s, args: [n, ...r.slice(1)], interpreter: s };
        }
        if (r.length >= 2) {
          let o = r[0],
            s = r[1];
          if (this.isKnownInterpreter(o) && this.isScriptFilePath(s))
            return {
              executionType: this.getScriptTypeFromInterpreter(o),
              executable: o,
              args: r.slice(1),
              interpreter: o,
            };
        }
        return null;
      }
      static isScriptFilePath(e) {
        let r = [".py", ".js", ".ts", ".sh", ".bash", ".zsh", ".rb", ".pl", ".php", ".go"],
          n = zY.extname(e).toLowerCase();
        if (!r.includes(n)) return !1;
        let o = this.resolvePath(e);
        try {
          return $ct.existsSync(o) && $ct.statSync(o).isFile();
        } catch {
          return !0;
        }
      }
      static getInterpreterForExtension(e) {
        return (
          {
            ".py": "python3",
            ".js": "node",
            ".ts": "ts-node",
            ".sh": "bash",
            ".bash": "bash",
            ".zsh": "zsh",
            ".rb": "ruby",
            ".pl": "perl",
            ".php": "php",
            ".go": "go run",
          }[e] || null
        );
      }
      static isKnownInterpreter(e) {
        return [
          "python",
          "python3",
          "python2",
          "node",
          "nodejs",
          "bash",
          "sh",
          "zsh",
          "fish",
          "ruby",
          "perl",
          "php",
          "go",
          "ts-node",
        ].includes(e);
      }
      static getScriptTypeFromInterpreter(e) {
        return e.startsWith("python")
          ? Vp.PYTHON_SCRIPT
          : e === "node" || e === "nodejs" || e === "ts-node"
            ? Vp.NODE_SCRIPT
            : Vp.SCRIPT_FILE;
      }
      static isComplexShellCommand(e) {
        return ["|", "&&", "||", ";", ">", ">>", "<", "`", "$(", "{", "~", "*", "?", "["].some((n) => e.includes(n));
      }
      static parseSimpleCommand(e) {
        let r = e.trim(),
          n = [],
          o = "",
          s = !1,
          a = "";
        for (let u = 0; u < r.length; u++) {
          let c = r[u];
          !s && (c === '"' || c === "'")
            ? ((s = !0), (a = c))
            : s && c === a
              ? ((s = !1), (a = ""))
              : !s && /\s/.test(c)
                ? o.length > 0 && (n.push(o), (o = ""))
                : (o += c);
        }
        return (o.length > 0 && n.push(o), n.filter((u) => u.length > 0));
      }
      static createChildProcess(e, r) {
        let n = { cwd: r.cwd, env: { ...process.env, ...r.env }, stdio: ["pipe", "pipe", "pipe"] };
        if (e.needsShell || e.executionType === Vp.SHELL) return u1i("bash", e.args, n);
        let o = e.args.map((s) => this.resolvePath(s));
        return u1i(e.executable, o, n);
      }
      static async executeAll(e, r, n = {}) {
        let o = [];
        for (let s of e) {
          let a = await this.execute(s, r, n);
          if ((o.push(a), a.blocked)) break;
        }
        return o;
      }
      static getSignalNumber(e) {
        return { SIGTERM: 15, SIGKILL: 9, SIGINT: 2, SIGQUIT: 3, SIGUSR1: 10, SIGUSR2: 12 }[e] || 1;
      }
      static isCommandSafe(e) {
        return ![/rm\s+-rf\s+\//, /:\(\)\{[^}]*\}/, /eval\s+.*\$/, /chmod\s+\+s/, /sudo\s+/, /su\s+/].some((n) =>
          n.test(e),
        );
      }
      static getCommandTypeDescription(e) {
        switch (e.executionType) {
          case Vp.PYTHON_INLINE:
            return `Python inline script (${e.interpreter})`;
          case Vp.PYTHON_SCRIPT:
            return `Python script (${e.interpreter})`;
          case Vp.NODE_INLINE:
            return "Node.js inline script";
          case Vp.NODE_SCRIPT:
            return "Node.js script";
          case Vp.SCRIPT_FILE:
            return `Script file (${e.interpreter})`;
          case Vp.DIRECT_EXECUTABLE:
            return `Direct executable (${e.executable})`;
          case Vp.SHELL:
            return "Shell command (bash)";
          default:
            return "Unknown command type";
        }
      }
      static resolvePath(e) {
        return e.startsWith("-") ||
          !(e.startsWith("~/") || e.startsWith("./") || e.startsWith("../") || e.startsWith("/"))
          ? e
          : e.startsWith("~/")
            ? zY.join(c1i.homedir(), e.slice(2))
            : zY.resolve(e);
      }
      static sanitizeForLogging(e) {
        return e.replace(/(-p|--password|--token|--key)\s+\S+/gi, "$1 [REDACTED]");
      }
    };
  });
var jct,
  l1i = j(() => {
    "use strict";
    $fr();
    jct = class {
      static async execute(e, r, n = {}) {
        return bv.execute(e, r, n);
      }
      static async executeAll(e, r, n = {}) {
        return bv.executeAll(e, r, n);
      }
      static getSignalNumber(e) {
        return { SIGTERM: 15, SIGKILL: 9, SIGINT: 2, SIGQUIT: 3, SIGUSR1: 10, SIGUSR2: 12 }[e] || 1;
      }
      static isCommandSafe(e) {
        return bv.isCommandSafe(e);
      }
      static sanitizeForLogging(e) {
        return bv.sanitizeForLogging(e);
      }
    };
  });
var lSe,
  m1i = j(() => {
    "use strict";
    lSe = class {
      static formatInput(e) {
        try {
          return JSON.stringify(e, null, 2);
        } catch (r) {
          throw new Error(`Failed to serialize hook input: ${r}`);
        }
      }
      static processOutput(e) {
        let { success: r, exitCode: n, stdout: o, stderr: s } = e;
        return r && n === 0
          ? { shouldBlock: !1, userMessage: o || void 0, logMessage: `Hook executed successfully in ${e.duration}ms` }
          : n === 2
            ? {
                shouldBlock: !0,
                llmMessage: s || "Hook blocked execution",
                logMessage: `Hook blocked execution with exit code 2: ${s}`,
              }
            : {
                shouldBlock: !1,
                userMessage: s || `Hook failed with exit code ${n}`,
                logMessage: `Hook failed with exit code ${n}: ${s}`,
              };
      }
      static sanitizeOutput(e) {
        if (!e) return e;
        let r = e;
        return (
          (r = r.replace(/([A-Za-z0-9+/]{40,}={0,2})/g, "[REDACTED_TOKEN]")),
          (r = r.replace(/(password|passwd|pwd|token|key|secret)[=:\s]+([^\s]+)/gi, "$1=[REDACTED]")),
          (r = r.replace(new RegExp(process.env.HOME || "/home/\\w+", "g"), "~")),
          r
        );
      }
      static formatResults(e) {
        return e.length === 0
          ? "No hooks executed"
          : e.map((n, o) => {
              let s = n.success ? "SUCCESS" : "FAILED",
                a = `${n.duration}ms`,
                u = n.blocked ? " (BLOCKED)" : "";
              return `Hook ${o + 1}: ${s} (${a})${u}`;
            }).join(`
`);
      }
      static createErrorMessage(e, r, n) {
        let o = r ? ` for tool "${r}"` : "";
        return `${e} hook${o} failed: ${n}`;
      }
      static truncateForLogging(e, r = 1e3) {
        return e.length <= r ? e : e.substring(0, r - 3) + "...";
      }
      static containsSensitiveInfo(e) {
        return [/password/i, /secret/i, /token/i, /api[_-]?key/i, /private[_-]?key/i, /-----BEGIN/].some((n) =>
          n.test(e),
        );
      }
      static extractActionableInfo(e) {
        let { stderr: r, stdout: n } = e,
          o = `${n}
${r}`.toLowerCase();
        return {
          hasError: /error|failed|exception/i.test(o),
          hasWarning: /warning|warn/i.test(o),
          hasInfo: /info|note|tip/i.test(o),
          suggestions: this.extractSuggestions(o),
        };
      }
      static extractSuggestions(e) {
        let r = [],
          n = e.split(`
`);
        for (let o of n)
          (o.includes("suggestion:") || o.includes("try:") || o.includes("consider:") || o.includes("hint:")) &&
            r.push(o.trim());
        return r;
      }
    };
  });
import * as n$ from "path";
import { existsSync as q4a } from "fs";
var xc,
  OS = j(() => {
    "use strict";
    l1i();
    $fr();
    m1i();
    Pa();
    xc = class {
      static async execute(e, r, n) {
        if (e.length === 0) return [];
        let o = lSe.formatInput(r),
          s = { cwd: n.cwd, env: this.buildEnvironment(n) },
          u = (await jct.executeAll(e, o, s)).map((c) => this.parseHookOutput(c));
        return (this.logExecution(e, u, n), u);
      }
      static buildEnvironment(e) {
        let n = "global" === "aone" ? "true" : "false",
          o = {
            ...process.env,
            IFLOW_SESSION_ID: e.sessionId,
            IFLOW_TRANSCRIPT_PATH: e.transcriptPath,
            IFLOW_CWD: e.cwd,
            IFLOW_AONE: n,
          };
        return (e.projectDir && ((o.IFLOW_PROJECT_DIR = e.projectDir), (o.CLAUDE_PROJECT_DIR = e.projectDir)), o);
      }
      static logExecution(e, r, n) {
        if (process.env.IFLOW_DEBUG_HOOKS === "true") {
          console.log(`[HookExecutor] Executed ${r.length} hooks for session ${n.sessionId}`);
          for (let o = 0; o < r.length; o++) {
            let s = e[o],
              a = r[o],
              u = bv.sanitizeForLogging(s.command),
              c = bv.analyzeCommand(s.command),
              m = bv.getCommandTypeDescription(c);
            (console.log(`[HookExecutor] Hook ${o + 1} (${m}): ${u}`),
              console.log(`[HookExecutor] Result: ${a.success ? "SUCCESS" : "FAILED"} (${a.duration}ms)`),
              a.blocked && console.log("[HookExecutor] Hook blocked execution"),
              a.stderr && console.log(`[HookExecutor] stderr: ${lSe.truncateForLogging(a.stderr)}`));
          }
        }
      }
      static async executeSingle(e, r, n) {
        return (
          (await this.execute([e], r, n))[0] || {
            success: !1,
            exitCode: 1,
            stdout: "",
            stderr: "No result returned",
            blocked: !1,
            duration: 0,
          }
        );
      }
      static wouldBlock(e) {
        return e.some((r) =>
          r.hookSpecificOutput?.hookEventName === "PreToolUse"
            ? r.hookSpecificOutput.permissionDecision === "deny"
            : r.decision === "block"
              ? !0
              : r.blocked,
        );
      }
      static getBlockingErrors(e) {
        return e
          .filter((r) => r.blocked)
          .map((r) => r.stderr || "Hook blocked execution")
          .filter((r) => r.trim().length > 0);
      }
      static getAllErrors(e) {
        return e
          .filter((r) => !r.success)
          .map((r) => r.stderr || `Hook failed with exit code ${r.exitCode}`)
          .filter((r) => r.trim().length > 0);
      }
      static getSuccessMessages(e) {
        return e
          .filter((r) => r.success && r.stdout)
          .map((r) => r.stdout)
          .filter((r) => r.trim().length > 0);
      }
      static createContext(e, r, n, o) {
        return { sessionId: e, transcriptPath: r, cwd: n || process.cwd(), projectDir: o || this.findProjectDir(n) };
      }
      static findProjectDir(e) {
        let r = e || process.cwd(),
          n = ui(),
          o = [
            "package.json",
            ".git",
            n,
            ...(n === wG ? [] : [wG]),
            "pyproject.toml",
            "Cargo.toml",
            "go.mod",
            "composer.json",
          ],
          s = n$.resolve(r),
          a = n$.parse(s).root;
        for (; s !== a; ) {
          for (let u of o) {
            let c = n$.join(s, u);
            try {
              if (q4a(c)) return s;
            } catch {}
          }
          s = n$.dirname(s);
        }
      }
      static parseHookOutput(e) {
        let r = this.extractJsonFromStdout(e.stdout);
        if (r.modifiedToolResponse) {
          let n = { ...e, modifiedToolResponse: r.modifiedToolResponse };
          if (r.decision || r.reason) {
            let o = r.decision === "block" || r.decision === "approve" ? r.decision : void 0;
            ((n.decision = o), (n.reason = r.reason), (n.hookSpecificOutput = r.hookSpecificOutput));
          }
          return n;
        }
        if (r.decision || r.reason) {
          let n = r.decision === "block" || r.decision === "approve" ? r.decision : void 0;
          return { ...e, decision: n, reason: r.reason, hookSpecificOutput: r.hookSpecificOutput };
        }
        if (e.decision || e.reason) {
          let n = this.mapLegacyFields(e.decision, e.reason);
          if (n) return { ...e, hookSpecificOutput: n };
        }
        return e;
      }
      static extractModifiedToolResponse(e) {
        if (e.tool_response && typeof e.tool_response == "object") {
          let r = e.tool_response;
          if (r.result && typeof r.result == "object") {
            let n = r.result;
            if (typeof n.llmContent == "string" || typeof n.returnDisplay == "string")
              return {
                result: {
                  llmContent: typeof n.llmContent == "string" ? n.llmContent : void 0,
                  returnDisplay: typeof n.returnDisplay == "string" ? n.returnDisplay : void 0,
                },
              };
          }
        }
      }
      static extractJsonFromStdout(e) {
        let r = e.trim();
        if (r.startsWith("{") && r.endsWith("}"))
          try {
            let a = JSON.parse(r),
              u = this.extractModifiedToolResponse(a);
            if (u)
              return {
                hasJsonOutput: !0,
                hookSpecificOutput: a.hookSpecificOutput,
                cleanedStdout: "",
                decision: a.decision,
                reason: a.reason,
                modifiedToolResponse: u,
              };
            if (a.decision || a.reason)
              return {
                hasJsonOutput: !0,
                hookSpecificOutput: a.hookSpecificOutput,
                cleanedStdout: "",
                decision: a.decision,
                reason: a.reason,
              };
          } catch {}
        let n = e.split(`
`),
          o = [],
          s = [];
        for (let a of n) {
          let u = a.trim();
          if (u.startsWith("{") && u.endsWith("}"))
            try {
              let c = JSON.parse(u);
              if (c.decision || c.reason || c.tool_response) {
                o.push(u);
                continue;
              }
            } catch {}
          s.push(a);
        }
        if (o.length === 0) return { hasJsonOutput: !1, cleanedStdout: e };
        try {
          let a = JSON.parse(o[o.length - 1]),
            u = this.extractModifiedToolResponse(a);
          return {
            hasJsonOutput: !0,
            hookSpecificOutput: a.hookSpecificOutput,
            cleanedStdout: s.join(`
`),
            decision: a.decision,
            reason: a.reason,
            modifiedToolResponse: u,
          };
        } catch {
          return { hasJsonOutput: !1, cleanedStdout: e };
        }
      }
      static mapLegacyFields(e, r) {
        if (!e) return;
        let n;
        switch (e) {
          case "approve":
            n = "allow";
            break;
          case "block":
            n = "deny";
            break;
          default:
            return;
        }
        return { hookEventName: "PreToolUse", permissionDecision: n, permissionDecisionReason: r };
      }
      static validateCommands(e) {
        let r = [];
        for (let n = 0; n < e.length; n++) {
          let o = e[n];
          ((!o.command || o.command.trim().length === 0) && r.push(`Hook ${n + 1}: Command cannot be empty`),
            bv.isCommandSafe(o.command) || r.push(`Hook ${n + 1}: Command contains potentially dangerous patterns`),
            o.timeout !== void 0 &&
              (o.timeout <= 0 || o.timeout > 3600) &&
              r.push(`Hook ${n + 1}: Timeout must be between 1 and 3600 seconds`));
        }
        return r;
      }
    };
  });
var i$,
  jfr = j(() => {
    "use strict";
    i$ = class {
      static matches(e, r) {
        if (!r || r === "" || r === "*") return !0;
        if (!this.isRegexPattern(r)) return e === r;
        try {
          return new RegExp(r).test(e);
        } catch (n) {
          return (console.warn(`Invalid regex pattern "${r}":`, n), e === r);
        }
      }
      static matchesWithAliases(e, r, n) {
        return this.matches(e, n) ? !0 : r.some((o) => this.matches(o, n));
      }
      static isRegexPattern(e) {
        return /[|\\^$.*+?()[\]{}]/.test(e);
      }
      static matchesAny(e, r) {
        return r.length === 0 ? !0 : r.some((n) => this.matches(e, n));
      }
      static matchesAnyWithAliases(e, r, n) {
        return n.length === 0 ? !0 : n.some((o) => this.matchesWithAliases(e, r, o));
      }
      static isMcpTool(e) {
        return e.startsWith("mcp__");
      }
      static parseMcpToolName(e) {
        if (!this.isMcpTool(e)) return null;
        let r = e.split("__");
        if (r.length >= 3 && r[0] === "mcp") {
          let n = r[1],
            o = r.slice(2).join("__");
          return { server: n, tool: o };
        }
        return null;
      }
      static isMcpPattern(e) {
        return e.startsWith("mcp__");
      }
      static matchesMcp(e, r) {
        return this.parseMcpToolName(e) ? (this.isMcpPattern(r) ? this.matches(e, r) : this.matches(e, r)) : !1;
      }
    };
  });
var Qct,
  d1i = j(() => {
    "use strict";
    sy();
    OS();
    bi();
    jfr();
    Qct = class {
      manager;
      eventType = Mn.PreToolUse;
      configs = [];
      constructor(e) {
        this.manager = e;
      }
      async execute(e, r) {
        let n = this.getHookConfigs();
        if (!n || n.length === 0) return [];
        let o = [],
          { tool_name: s, tool_name_alias: a } = e;
        for (let u of n)
          if (this.shouldExecuteHook(s, u, a))
            try {
              let c = await xc.execute(u.hooks, e, r);
              if ((o.push(...c), this.shouldBlock(c))) break;
            } catch (c) {
              (console.warn(I.t("hooks.hookExecutionFailed"), c),
                o.push({
                  success: !1,
                  exitCode: 1,
                  stdout: "",
                  stderr: `Hook execution failed: ${c}`,
                  blocked: !1,
                  duration: 0,
                }));
            }
        return o;
      }
      shouldExecuteHook(e, r, n) {
        return n && n.length > 0 ? i$.matchesWithAliases(e, n, r.matcher) : i$.matches(e, r.matcher);
      }
      getHookConfigs() {
        return this.configs;
      }
      setConfigs(e) {
        this.configs = e;
      }
      async wouldBlock(e, r, n, o = []) {
        let s = {
            session_id: n.sessionId,
            transcript_path: n.transcriptPath,
            cwd: n.cwd,
            hook_event_name: Mn.PreToolUse,
            tool_name: e,
            tool_name_alias: o,
            tool_input: r,
            tool_desc: "",
            tool_schema: {},
          },
          a = await this.execute(s, n);
        return this.shouldBlock(a);
      }
      shouldBlock(e) {
        for (let r of e) {
          if (r.hookSpecificOutput?.hookEventName === "PreToolUse")
            return r.hookSpecificOutput.permissionDecision === "deny";
          if (r.blocked || r.decision === "block") return !0;
        }
        return !1;
      }
      getPermissionDecision(e) {
        for (let r of e) {
          if (r.hookSpecificOutput?.hookEventName === "PreToolUse") {
            let n = r.hookSpecificOutput;
            return { decision: n.permissionDecision, reason: n.permissionDecisionReason };
          }
          if (r.decision) return { decision: r.decision === "approve" ? "allow" : "deny", reason: r.reason };
          if (r.blocked) return { decision: "deny", reason: r.stderr || "Hook blocked execution" };
        }
        return { decision: "allow" };
      }
      getMatchingConfigs(e, r) {
        return this.getHookConfigs().filter((o) => this.shouldExecuteHook(e, o, r));
      }
      validateConfigs(e) {
        let r = [];
        for (let n = 0; n < e.length; n++) {
          let o = e[n];
          if (
            (o.matcher !== void 0 &&
              typeof o.matcher != "string" &&
              r.push(`PreToolUse[${n}]: matcher must be a string`),
            (!o.hooks || !Array.isArray(o.hooks) || o.hooks.length === 0) &&
              r.push(`PreToolUse[${n}]: hooks must be a non-empty array`),
            o.hooks)
          ) {
            let s = xc.validateCommands(o.hooks);
            r.push(...s.map((a) => `PreToolUse[${n}]: ${a}`));
          }
        }
        return r;
      }
    };
  });
var Gct,
  f1i = j(() => {
    "use strict";
    sy();
    OS();
    bi();
    jfr();
    Gct = class {
      manager;
      eventType = Mn.PostToolUse;
      configs = [];
      constructor(e) {
        this.manager = e;
      }
      async execute(e, r) {
        let n = this.getHookConfigs();
        if (!n || n.length === 0) return [];
        let o = [],
          { tool_name: s, tool_name_alias: a } = e;
        for (let u of n)
          if (this.shouldExecuteHook(s, u, a))
            try {
              let c = await xc.execute(u.hooks, e, r);
              o.push(...c);
            } catch (c) {
              (console.warn(I.t("hooks.hookExecutionFailed"), c),
                o.push({
                  success: !1,
                  exitCode: 1,
                  stdout: "",
                  stderr: `Hook execution failed: ${c}`,
                  blocked: !1,
                  duration: 0,
                }));
            }
        return o;
      }
      getAdditionalContext(e) {
        for (let r of e)
          if (r.hookSpecificOutput?.hookEventName === "PostToolUse") {
            let n = r.hookSpecificOutput;
            if (n.additionalContext) return n.additionalContext;
          }
      }
      shouldBlock(e) {
        for (let r of e) if (r.decision === "block" || r.blocked) return !0;
        return !1;
      }
      getBlockingReason(e) {
        for (let r of e) {
          if (r.decision === "block" && r.reason) return r.reason;
          if (r.blocked && r.stderr) return r.stderr;
        }
      }
      shouldExecuteHook(e, r, n) {
        return n && n.length > 0 ? i$.matchesWithAliases(e, n, r.matcher) : i$.matches(e, r.matcher);
      }
      getHookConfigs() {
        return this.configs;
      }
      setConfigs(e) {
        this.configs = e;
      }
      async executeForTool(e, r, n, o, s = []) {
        let a = {
          session_id: o.sessionId,
          transcript_path: o.transcriptPath,
          cwd: o.cwd,
          hook_event_name: Mn.PostToolUse,
          tool_name: e,
          tool_name_alias: s,
          tool_input: r,
          tool_response: n,
          tool_desc: "",
          tool_schema: {},
        };
        return await this.execute(a, o);
      }
      getMatchingConfigs(e, r) {
        return this.getHookConfigs().filter((o) => this.shouldExecuteHook(e, o, r));
      }
      hasHooksForTool(e, r) {
        return this.getMatchingConfigs(e, r).length > 0;
      }
      validateConfigs(e) {
        let r = [];
        for (let n = 0; n < e.length; n++) {
          let o = e[n];
          if (
            (o.matcher !== void 0 &&
              typeof o.matcher != "string" &&
              r.push(`PostToolUse[${n}]: matcher must be a string`),
            (!o.hooks || !Array.isArray(o.hooks) || o.hooks.length === 0) &&
              r.push(`PostToolUse[${n}]: hooks must be a non-empty array`),
            o.hooks)
          ) {
            let s = xc.validateCommands(o.hooks);
            r.push(...s.map((a) => `PostToolUse[${n}]: ${a}`));
          }
        }
        return r;
      }
      static extractToolResponseInfo(e) {
        if (typeof e == "string") return { output: e };
        if (e && typeof e == "object") {
          let r = {};
          return (
            e.success !== void 0 && (r.success = e.success),
            e.error !== void 0 && (r.error = e.error),
            e.filePath !== void 0 && (r.filePath = e.filePath),
            e.output !== void 0 && (r.output = e.output),
            e.returnDisplay !== void 0 && (r.returnDisplay = e.returnDisplay),
            Object.keys(r).length > 0 ? r : e
          );
        }
        return { raw: e };
      }
      enhanceToolResponse(e, r) {
        let n = this.getAdditionalContext(r);
        if (!n) return e;
        let o = { ...e };
        return (
          typeof o.output == "string"
            ? (o.output = `${o.output}

${n}`)
            : typeof o.returnDisplay == "string"
              ? (o.returnDisplay = `${o.returnDisplay}

${n}`)
              : (o.hookAdditionalContext = n),
          o
        );
      }
      static standardizeToolResponse(e, r, n, o) {
        let s = { toolName: e, success: n, timestamp: new Date().toISOString() };
        return (
          o && (s.error = { message: o.message, name: o.name }),
          r && (s.result = this.extractToolResponseInfo(r)),
          s
        );
      }
    };
  });
var qct,
  p1i = j(() => {
    "use strict";
    sy();
    OS();
    bi();
    qct = class {
      manager;
      eventType = Mn.Stop;
      configs = [];
      constructor(e) {
        this.manager = e;
      }
      async execute(e, r) {
        let n = this.getHookConfigs();
        if (!n || n.length === 0) return [];
        let o = [];
        for (let s of n)
          try {
            let a = await xc.execute(s.hooks, e, r);
            if ((o.push(...a), this.shouldBlock(a))) break;
          } catch (a) {
            (console.warn(I.t("hooks.hookExecutionFailed"), a),
              o.push({
                success: !1,
                exitCode: 1,
                stdout: "",
                stderr: `Hook execution failed: ${a}`,
                blocked: !1,
                duration: 0,
              }));
          }
        return o;
      }
      getHookConfigs() {
        return this.configs;
      }
      setConfigs(e) {
        this.configs = e;
      }
      async wouldBlock(e) {
        let r = {
            session_id: e.sessionId,
            transcript_path: e.transcriptPath,
            cwd: e.cwd,
            hook_event_name: Mn.Stop,
            stop_hook_active: !0,
          },
          n = await this.execute(r, e);
        return this.shouldBlock(n);
      }
      shouldBlock(e) {
        for (let r of e) if (r.decision === "block" || r.blocked) return !0;
        return !1;
      }
      getBlockingReason(e) {
        for (let r of e) {
          if (r.decision === "block" && r.reason) return r.reason;
          if (r.blocked && r.stderr) return r.stderr;
        }
      }
      hasHooks() {
        return this.getHookConfigs().length > 0;
      }
      validateConfigs(e) {
        let r = [];
        for (let n = 0; n < e.length; n++) {
          let o = e[n];
          if (
            (o.matcher !== void 0 && r.push(`Stop[${n}]: Stop hooks should not have matcher field`),
            (!o.hooks || !Array.isArray(o.hooks) || o.hooks.length === 0) &&
              r.push(`Stop[${n}]: hooks must be a non-empty array`),
            o.hooks)
          ) {
            let s = xc.validateCommands(o.hooks);
            r.push(...s.map((a) => `Stop[${n}]: ${a}`));
          }
        }
        return r;
      }
      async executeWithSessionInfo(e, r) {
        let n = {
          session_id: e.sessionId,
          transcript_path: e.transcriptPath,
          cwd: e.cwd,
          hook_event_name: Mn.Stop,
          stop_hook_active: !0,
        };
        return (r && (n.session_info = r), await this.execute(n, e));
      }
      static createStopInput(e, r, n, o) {
        let s = { session_id: e, transcript_path: r, cwd: n, hook_event_name: Mn.Stop, stop_hook_active: !0 };
        return (o && Object.assign(s, o), s);
      }
      handleBlockedStop(e) {
        let r = e.filter((s) => s.blocked);
        if (r.length === 0) return { shouldContinue: !1, message: "Session can stop normally", suggestions: [] };
        let n = r.map((s) => s.stderr).filter((s) => s && s.trim().length > 0),
          o = r.flatMap((s) =>
            (s.stderr || "")
              .split(
                `
`,
              )
              .filter(
                (u) =>
                  u.toLowerCase().includes("suggestion:") ||
                  u.toLowerCase().includes("try:") ||
                  u.toLowerCase().includes("consider:"),
              ),
          );
        return {
          shouldContinue: !0,
          message:
            n.join(`
`) || "Stop hooks prevented session from ending",
          suggestions: o,
        };
      }
    };
  });
var Hct,
  h1i = j(() => {
    "use strict";
    sy();
    OS();
    bi();
    Hct = class {
      manager;
      eventType = Mn.SubagentStop;
      configs = [];
      constructor(e) {
        this.manager = e;
      }
      async execute(e, r) {
        let n = this.getHookConfigs();
        if (!n || n.length === 0) return [];
        let o = [];
        for (let s of n)
          try {
            let a = await xc.execute(s.hooks, e, r);
            if ((o.push(...a), this.shouldBlock(a))) break;
          } catch (a) {
            (console.warn(I.t("hooks.hookExecutionFailed"), a),
              o.push({
                success: !1,
                exitCode: 1,
                stdout: "",
                stderr: `Hook execution failed: ${a}`,
                blocked: !1,
                duration: 0,
              }));
          }
        return o;
      }
      getHookConfigs() {
        return this.configs;
      }
      setConfigs(e) {
        this.configs = e;
      }
      async wouldBlock(e) {
        let r = {
            session_id: e.sessionId,
            transcript_path: e.transcriptPath,
            cwd: e.cwd,
            hook_event_name: Mn.SubagentStop,
            stop_hook_active: !0,
          },
          n = await this.execute(r, e);
        return this.shouldBlock(n);
      }
      shouldBlock(e) {
        for (let r of e) if (r.decision === "block" || r.blocked) return !0;
        return !1;
      }
      getBlockingReason(e) {
        for (let r of e) {
          if (r.decision === "block" && r.reason) return r.reason;
          if (r.blocked && r.stderr) return r.stderr;
        }
      }
      hasHooks() {
        return this.getHookConfigs().length > 0;
      }
      async executeWithSubagentInfo(e, r) {
        let n = {
          session_id: e.sessionId,
          transcript_path: e.transcriptPath,
          cwd: e.cwd,
          hook_event_name: Mn.SubagentStop,
          stop_hook_active: !0,
        };
        return (r && (n.subagent_info = r), await this.execute(n, e));
      }
      validateConfigs(e) {
        let r = [];
        for (let n = 0; n < e.length; n++) {
          let o = e[n];
          if (
            (o.matcher !== void 0 && r.push(`SubagentStop[${n}]: SubagentStop hooks should not have matcher field`),
            (!o.hooks || !Array.isArray(o.hooks) || o.hooks.length === 0) &&
              r.push(`SubagentStop[${n}]: hooks must be a non-empty array`),
            o.hooks)
          ) {
            let s = xc.validateCommands(o.hooks);
            r.push(...s.map((a) => `SubagentStop[${n}]: ${a}`));
          }
        }
        return r;
      }
      static createSubagentStopInput(e, r, n, o) {
        let s = { session_id: e, transcript_path: r, cwd: n, hook_event_name: Mn.SubagentStop, stop_hook_active: !0 };
        return (o && Object.assign(s, o), s);
      }
      handleBlockedSubagentStop(e) {
        let r = e.filter((s) => s.blocked);
        if (r.length === 0) return { shouldContinue: !1, message: "Subagent can stop normally", suggestions: [] };
        let n = r.map((s) => s.stderr).filter((s) => s && s.trim().length > 0),
          o = r.flatMap((s) =>
            (s.stderr || "")
              .split(
                `
`,
              )
              .filter(
                (u) =>
                  u.toLowerCase().includes("suggestion:") ||
                  u.toLowerCase().includes("try:") ||
                  u.toLowerCase().includes("consider:"),
              ),
          );
        return {
          shouldContinue: !0,
          message:
            n.join(`
`) || "SubagentStop hooks prevented subagent from ending",
          suggestions: o,
        };
      }
      static extractSubagentContext(e, r) {
        let n = { timestamp: new Date().toISOString() };
        return (
          e &&
            (e.subagent_type && (n.subagent_type = e.subagent_type),
            e.description && (n.description = e.description),
            e.prompt && (n.prompt = e.prompt)),
          r &&
            ((n.success = !r.error),
            r.error && (n.error = { message: r.error.message, type: r.error.type }),
            r.summary && (n.summary = r.summary),
            r.llmContent && (n.content_preview = this.extractContentPreview(r.llmContent))),
          n
        );
      }
      static extractContentPreview(e) {
        if (typeof e == "string") return e.substring(0, 500) + (e.length > 500 ? "..." : "");
        if (Array.isArray(e)) {
          let r = e
            .filter((n) => typeof n == "string" || (n && typeof n.text == "string"))
            .map((n) => (typeof n == "string" ? n : n.text))
            .join(" ");
          return r.substring(0, 500) + (r.length > 500 ? "..." : "");
        }
        if (e && typeof e == "object") {
          if (e.text) return e.text.substring(0, 500) + (e.text.length > 500 ? "..." : "");
          try {
            let r = JSON.stringify(e, null, 2);
            return r.substring(0, 500) + (r.length > 500 ? "..." : "");
          } catch {
            return "[Complex object]";
          }
        }
        return "[No content]";
      }
    };
  });
var mSe,
  g1i = j(() => {
    "use strict";
    sy();
    OS();
    bi();
    mSe = class {
      manager;
      eventType = Mn.SetUpEnvironment;
      configs = [];
      constructor(e) {
        this.manager = e;
      }
      async execute(e, r) {
        let n = this.getHookConfigs();
        if (!n || n.length === 0) return [];
        let o = [];
        for (let s of n)
          try {
            let a = await xc.execute(s.hooks, e, r);
            if ((o.push(...a), xc.wouldBlock(a))) break;
          } catch (a) {
            (console.warn(I.t("hooks.hookExecutionFailed"), a),
              o.push({
                success: !1,
                exitCode: 1,
                stdout: "",
                stderr: `Hook execution failed: ${a}`,
                blocked: !1,
                duration: 0,
              }));
          }
        return o;
      }
      getHookConfigs() {
        return this.configs;
      }
      setConfigs(e) {
        this.configs = e;
      }
      async executeForEnvironment(e, r, n) {
        let o = {
          session_id: n.sessionId,
          transcript_path: n.transcriptPath,
          cwd: n.cwd,
          hook_event_name: Mn.SetUpEnvironment,
          current_env_parts: JSON.stringify(e),
          env_context: r,
        };
        return await this.execute(o, n);
      }
      hasHooks() {
        return this.getHookConfigs().length > 0;
      }
      validateConfigs(e) {
        let r = [];
        for (let n = 0; n < e.length; n++) {
          let o = e[n];
          if (
            (o.matcher !== void 0 &&
              r.push(`SetUpEnvironment[${n}]: matcher is not supported for SetUpEnvironment hooks`),
            (!o.hooks || !Array.isArray(o.hooks) || o.hooks.length === 0) &&
              r.push(`SetUpEnvironment[${n}]: hooks must be a non-empty array`),
            o.hooks)
          ) {
            let s = xc.validateCommands(o.hooks);
            r.push(...s.map((a) => `SetUpEnvironment[${n}]: ${a}`));
          }
        }
        return r;
      }
      static parseHookOutputToParts(e) {
        let r = e.trim();
        return r ? [{ text: r }] : [];
      }
      static applyHookResults(e, r) {
        let n = r.filter((s) => s.success && s.stdout.trim());
        if (n.length === 0) return e;
        let o = n[n.length - 1];
        return this.parseHookOutputToParts(o.stdout);
      }
      static createEnvironmentContext(e, r, n, o) {
        return { platform: e, date: r, workspace_directories: n, folder_structure: o };
      }
    };
  });
var b1i = {};
Wi(b1i, { SessionStartHook: () => YY });
var YY,
  Vct = j(() => {
    "use strict";
    sy();
    OS();
    bi();
    YY = class {
      manager;
      eventType = Mn.SessionStart;
      configs = [];
      constructor(e) {
        this.manager = e;
      }
      async execute(e, r) {
        let n = this.getHookConfigs();
        if (!n || n.length === 0) return [];
        let o = [],
          { source: s } = e;
        for (let a of n)
          if (this.shouldExecuteHook(s, a))
            try {
              let u = await xc.execute(a.hooks, e, r);
              o.push(...u);
            } catch (u) {
              (console.warn(I.t("hooks.hookExecutionFailed"), u),
                o.push({
                  success: !1,
                  exitCode: 1,
                  stdout: "",
                  stderr: `Hook execution failed: ${u}`,
                  blocked: !1,
                  duration: 0,
                }));
            }
        return o;
      }
      shouldExecuteHook(e, r) {
        return !r.matcher || r.matcher === "*"
          ? !0
          : r.matcher
              .split("|")
              .map((o) => o.trim())
              .includes(e);
      }
      getHookConfigs() {
        return this.configs;
      }
      setConfigs(e) {
        this.configs = e;
      }
      hasHooks() {
        return this.configs.length > 0;
      }
      getMatchingConfigs(e) {
        return this.getHookConfigs().filter((n) => this.shouldExecuteHook(e, n));
      }
      validateConfigs(e) {
        let r = [];
        for (let n = 0; n < e.length; n++) {
          let o = e[n];
          if (
            (o.matcher !== void 0 &&
              typeof o.matcher != "string" &&
              r.push(`SessionStart[${n}]: matcher must be a string`),
            (!o.hooks || !Array.isArray(o.hooks) || o.hooks.length === 0) &&
              r.push(`SessionStart[${n}]: hooks must be a non-empty array`),
            o.hooks)
          ) {
            let s = xc.validateCommands(o.hooks);
            r.push(...s.map((a) => `SessionStart[${n}]: ${a}`));
          }
        }
        return r;
      }
      static collectAdditionalContext(e) {
        let r = [];
        for (let n of e)
          if (n.hookSpecificOutput?.hookEventName === "SessionStart") {
            let o = n.hookSpecificOutput;
            o.additionalContext && r.push(o.additionalContext);
          }
        return r.join(`
`);
      }
    };
  });
var Wct,
  A1i = j(() => {
    "use strict";
    sy();
    OS();
    bi();
    Wct = class {
      manager;
      eventType = Mn.SessionEnd;
      configs = [];
      constructor(e) {
        this.manager = e;
      }
      async execute(e, r) {
        let n = this.getHookConfigs();
        if (!n || n.length === 0) return [];
        let o = [],
          { reason: s } = e;
        for (let a of n)
          if (this.shouldExecuteHook(s, a))
            try {
              let u = await xc.execute(a.hooks, e, r);
              o.push(...u);
            } catch (u) {
              (console.warn(I.t("hooks.hookExecutionFailed"), u),
                o.push({
                  success: !1,
                  exitCode: 1,
                  stdout: "",
                  stderr: `Hook execution failed: ${u}`,
                  blocked: !1,
                  duration: 0,
                }));
            }
        return o;
      }
      shouldExecuteHook(e, r) {
        return !r.matcher || r.matcher === "*"
          ? !0
          : r.matcher
              .split("|")
              .map((o) => o.trim())
              .includes(e);
      }
      getHookConfigs() {
        return this.configs;
      }
      setConfigs(e) {
        this.configs = e;
      }
      hasHooks() {
        return this.configs.length > 0;
      }
      getMatchingConfigs(e) {
        return this.getHookConfigs().filter((n) => this.shouldExecuteHook(e, n));
      }
      validateConfigs(e) {
        let r = [];
        for (let n = 0; n < e.length; n++) {
          let o = e[n];
          if (
            (o.matcher !== void 0 &&
              typeof o.matcher != "string" &&
              r.push(`SessionEnd[${n}]: matcher must be a string`),
            (!o.hooks || !Array.isArray(o.hooks) || o.hooks.length === 0) &&
              r.push(`SessionEnd[${n}]: hooks must be a non-empty array`),
            o.hooks)
          ) {
            let s = xc.validateCommands(o.hooks);
            r.push(...s.map((a) => `SessionEnd[${n}]: ${a}`));
          }
        }
        return r;
      }
    };
  });
var o$,
  Qfr = j(() => {
    "use strict";
    sy();
    OS();
    bi();
    o$ = class {
      manager;
      eventType = Mn.UserPromptSubmit;
      configs = [];
      constructor(e) {
        this.manager = e;
      }
      async execute(e, r) {
        let n = this.getHookConfigs();
        if (!n || n.length === 0) return [];
        let o = [],
          { prompt: s } = e;
        for (let a of n)
          if (this.shouldExecuteHook(s, a))
            try {
              let u = await xc.execute(a.hooks, e, r);
              if ((o.push(...u), this.shouldBlock(u))) break;
            } catch (u) {
              (console.warn(I.t("hooks.hookExecutionFailed"), u),
                o.push({
                  success: !1,
                  exitCode: 1,
                  stdout: "",
                  stderr: `Hook execution failed: ${u}`,
                  blocked: !1,
                  duration: 0,
                }));
            }
        return o;
      }
      shouldExecuteHook(e, r) {
        return !r.matcher || r.matcher === "*" ? !0 : e.toLowerCase().includes(r.matcher.toLowerCase());
      }
      getHookConfigs() {
        return this.configs;
      }
      setConfigs(e) {
        this.configs = e;
      }
      hasHooks() {
        return this.configs.length > 0;
      }
      shouldBlock(e) {
        for (let r of e) {
          if (r.hookSpecificOutput?.hookEventName === "UserPromptSubmit") return r.exitCode === 2 || r.blocked;
          if (r.blocked || r.decision === "block" || r.exitCode === 2) return !0;
        }
        return !1;
      }
      getBlockingReason(e) {
        for (let r of e)
          if (r.exitCode === 2 || r.blocked || r.decision === "block")
            return r.stderr || r.reason || "Hook blocked prompt execution";
      }
      static collectAdditionalContext(e) {
        let r = [];
        for (let n of e)
          if (n.hookSpecificOutput?.hookEventName === "UserPromptSubmit") {
            let o = n.hookSpecificOutput;
            o.additionalContext && r.push(o.additionalContext);
          }
        return r.join(`
`);
      }
      getMatchingConfigs(e) {
        return this.getHookConfigs().filter((n) => this.shouldExecuteHook(e, n));
      }
      validateConfigs(e) {
        let r = [];
        for (let n = 0; n < e.length; n++) {
          let o = e[n];
          if (
            (o.matcher !== void 0 &&
              typeof o.matcher != "string" &&
              r.push(`UserPromptSubmit[${n}]: matcher must be a string`),
            (!o.hooks || !Array.isArray(o.hooks) || o.hooks.length === 0) &&
              r.push(`UserPromptSubmit[${n}]: hooks must be a non-empty array`),
            o.hooks)
          ) {
            let s = xc.validateCommands(o.hooks);
            r.push(...s.map((a) => `UserPromptSubmit[${n}]: ${a}`));
          }
        }
        return r;
      }
    };
  });
var y1i = {};
Wi(y1i, { NotificationHook: () => dSe });
var dSe,
  Gfr = j(() => {
    "use strict";
    sy();
    OS();
    bi();
    dSe = class {
      manager;
      eventType = Mn.Notification;
      configs = [];
      constructor(e) {
        this.manager = e;
      }
      async execute(e, r) {
        let n = this.getHookConfigs();
        if (!n || n.length === 0) return [];
        let o = [],
          { message: s } = e;
        for (let a of n)
          if (this.shouldExecuteHook(s, a))
            try {
              let u = await xc.execute(a.hooks, e, r);
              o.push(...u);
            } catch (u) {
              (console.warn(I.t("hooks.hookExecutionFailed"), u),
                o.push({
                  success: !1,
                  exitCode: 1,
                  stdout: "",
                  stderr: `Hook execution failed: ${u}`,
                  blocked: !1,
                  duration: 0,
                }));
            }
        return o;
      }
      shouldExecuteHook(e, r) {
        return !r.matcher || r.matcher === "*" ? !0 : e.toLowerCase().includes(r.matcher.toLowerCase());
      }
      getHookConfigs() {
        return this.configs;
      }
      setConfigs(e) {
        this.configs = e;
      }
      hasHooks() {
        return this.configs.length > 0;
      }
      shouldBlock(e) {
        return !1;
      }
      getDisplayMessages(e) {
        let r = [];
        for (let n of e) {
          if (n.hookSpecificOutput?.hookEventName === "Notification") {
            let o = n.hookSpecificOutput;
            if (o.displayMessage) {
              r.push(o.displayMessage);
              continue;
            }
          }
          ((n.exitCode === 2 && n.stderr) || (!n.success && n.stderr)) && r.push(n.stderr);
        }
        return r;
      }
      static collectDisplayMessages(e) {
        let r = [];
        for (let n of e) {
          if (n.hookSpecificOutput?.hookEventName === "Notification") {
            let o = n.hookSpecificOutput;
            if (o.displayMessage) {
              r.push(o.displayMessage);
              continue;
            }
          }
          ((n.exitCode === 2 && n.stderr) || (!n.success && n.stderr)) && r.push(n.stderr);
        }
        return r.join(`
`);
      }
      getMatchingConfigs(e) {
        return this.getHookConfigs().filter((n) => this.shouldExecuteHook(e, n));
      }
      validateConfigs(e) {
        let r = [];
        for (let n = 0; n < e.length; n++) {
          let o = e[n];
          if (
            (o.matcher !== void 0 &&
              typeof o.matcher != "string" &&
              r.push(`Notification[${n}]: matcher must be a string`),
            (!o.hooks || !Array.isArray(o.hooks) || o.hooks.length === 0) &&
              r.push(`Notification[${n}]: hooks must be a non-empty array`),
            o.hooks)
          ) {
            let s = xc.validateCommands(o.hooks);
            r.push(...s.map((a) => `Notification[${n}]: ${a}`));
          }
        }
        return r;
      }
    };
  });
var _1i = {};
Wi(_1i, { TrustedHooksManager: () => KY });
import * as mN from "fs";
import * as lN from "path";
import { homedir as H4a } from "os";
var KY,
  qfr = j(() => {
    "use strict";
    Pa();
    sy();
    KY = class {
      configPath;
      trustedHooks = {};
      constructor() {
        ((this.configPath = lN.join(H4a(), w3e, "trusted_hooks.json")), this.load());
      }
      load() {
        try {
          if (mN.existsSync(this.configPath)) {
            let e = mN.readFileSync(this.configPath, "utf-8");
            this.trustedHooks = JSON.parse(e);
          }
        } catch (e) {
          (console.warn("Failed to load trusted hooks config:", e), (this.trustedHooks = {}));
        }
      }
      save() {
        try {
          let e = lN.dirname(this.configPath);
          (mN.existsSync(e) || mN.mkdirSync(e, { recursive: !0 }),
            mN.writeFileSync(this.configPath, JSON.stringify(this.trustedHooks, null, 2), "utf-8"));
        } catch (e) {
          console.error("Failed to save trusted hooks config:", e);
        }
      }
      getUntrustedHooks(e, r) {
        let n = lN.resolve(e),
          o = this.trustedHooks[n] || [];
        return this.extractHookIdentifiers(r).filter((a) => !o.includes(a));
      }
      extractHookIdentifiers(e) {
        let r = [];
        for (let [n, o] of Object.entries(e))
          if (Array.isArray(o)) {
            for (let s of o)
              if (!(!s.hooks || !Array.isArray(s.hooks))) {
                for (let a of s.hooks)
                  if (a.type === "command" && a.command) {
                    let u = `${n}:${a.command}`;
                    r.push(u);
                  }
              }
          }
        return r;
      }
      trustHooks(e, r) {
        let n = lN.resolve(e),
          o = this.extractHookIdentifiers(r),
          s = this.trustedHooks[n] || [],
          a = [...new Set([...s, ...o])];
        ((this.trustedHooks[n] = a), this.save());
      }
      isHookTrusted(e, r, n) {
        let o = lN.resolve(e),
          s = this.trustedHooks[o] || [],
          a = `${r}:${n}`;
        return s.includes(a);
      }
      removeTrust(e) {
        let r = lN.resolve(e);
        (delete this.trustedHooks[r], this.save());
      }
      getTrustedProjects() {
        return Object.keys(this.trustedHooks);
      }
      hasDangerousHooks(e) {
        let r = [Mn.SetUpEnvironment, Mn.SessionStart];
        for (let n of r) if (e[n] && Array.isArray(e[n]) && e[n].length > 0) return !0;
        return !1;
      }
      getDangerousHooks(e) {
        let r = [Mn.SetUpEnvironment, Mn.SessionStart],
          n = [];
        for (let o of r) {
          let s = e[o];
          if (Array.isArray(s)) {
            for (let a of s)
              if (!(!a.hooks || !Array.isArray(a.hooks)))
                for (let u of a.hooks) u.type === "command" && u.command && n.push(`${o}:${u.command}`);
          }
        }
        return n;
      }
    };
  });
import * as s$ from "fs";
import * as NS from "path";
import * as Vfr from "os";
var Hfr,
  ime,
  E1i = j(() => {
    "use strict";
    sy();
    a1i();
    bi();
    d1i();
    f1i();
    p1i();
    h1i();
    g1i();
    Vct();
    A1i();
    Qfr();
    Gfr();
    ((Hfr = { TRUST_WORKSPACE: "TRUST_WORKSPACE", TRUST_PARENT: "TRUST_PARENT", DO_NOT_TRUST: "DO_NOT_TRUST" }),
      (ime = class {
        configLoader;
        config = {};
        handlers = new Map();
        enabled = !0;
        toolRegistry;
        pluginHookManager;
        initPromise = null;
        constructor(e = {}, r) {
          ((this.configLoader = new Uct(e)),
            (this.toolRegistry = r),
            this.initializeHandlers(),
            (this.initPromise = this.initialize()));
        }
        initializeHandlers() {
          (this.handlers.set(Mn.PreToolUse, new Qct(this)),
            this.handlers.set(Mn.PostToolUse, new Gct(this)),
            this.handlers.set(Mn.Stop, new qct(this)),
            this.handlers.set(Mn.SubagentStop, new Hct(this)),
            this.handlers.set(Mn.SetUpEnvironment, new mSe(this)),
            this.handlers.set(Mn.SessionStart, new YY(this)),
            this.handlers.set(Mn.SessionEnd, new Wct(this)),
            this.handlers.set(Mn.UserPromptSubmit, new o$(this)),
            this.handlers.set(Mn.Notification, new dSe(this)));
        }
        async initialize() {
          try {
            this.config = await this.configLoader.loadConfig();
            let e = this.configLoader.getWorkspaceConfig();
            Object.keys(e).length > 0 &&
              process.env.IFLOW_WORKSPACE_TRUST_ENABLED !== "false" &&
              (this.checkWorkspaceTrust()
                ? await this.checkWorkspaceHooksTrust(e)
                : (console.warn(I.t("workspaceTrust.hooksDisabled")),
                  console.warn(I.t("workspaceTrust.enableHooksInstruction")),
                  (this.config = this.filterUserHooksOnly(this.config, e))));
            let n = this.configLoader.validateConfig(this.config);
            (n.length > 0 && console.warn(I.t("hooks.configurationErrors"), n), this.updateHandlerConfigs());
          } catch (e) {
            (console.warn(I.t("hooks.configLoadFailed"), e), (this.config = {}));
          }
        }
        updateHandlerConfigs() {
          let e = this.handlers.get(Mn.PreToolUse);
          e && this.config.PreToolUse && e.setConfigs(this.config.PreToolUse);
          let r = this.handlers.get(Mn.PostToolUse);
          r && this.config.PostToolUse && r.setConfigs(this.config.PostToolUse);
          let n = this.handlers.get(Mn.Stop);
          n && this.config.Stop && n.setConfigs(this.config.Stop);
          let o = this.handlers.get(Mn.SubagentStop);
          o && this.config.SubagentStop && o.setConfigs(this.config.SubagentStop);
          let s = this.handlers.get(Mn.SetUpEnvironment);
          s && this.config.SetUpEnvironment && s.setConfigs(this.config.SetUpEnvironment);
          let a = this.handlers.get(Mn.SessionStart);
          a && this.config.SessionStart && a.setConfigs(this.config.SessionStart);
          let u = this.handlers.get(Mn.SessionEnd);
          u && this.config.SessionEnd && u.setConfigs(this.config.SessionEnd);
          let c = this.handlers.get(Mn.UserPromptSubmit);
          c && this.config.UserPromptSubmit && c.setConfigs(this.config.UserPromptSubmit);
          let m = this.handlers.get(Mn.Notification);
          m && this.config.Notification && m.setConfigs(this.config.Notification);
        }
        async executePreToolUse(e, r, n, o = []) {
          let s = [];
          if (this.enabled && this.config.PreToolUse) {
            let a = this.toolRegistry?.getTool(e),
              u = a?.description || "",
              c = a?.schema ? { ...a.schema } : {},
              m = {
                session_id: n.sessionId,
                transcript_path: n.transcriptPath,
                cwd: n.cwd,
                hook_event_name: Mn.PreToolUse,
                tool_name: e,
                tool_name_alias: o,
                tool_input: r,
                tool_desc: u,
                tool_schema: c,
              },
              d = this.handlers.get(Mn.PreToolUse);
            if (d) {
              let f = await d.execute(m, n);
              s.push(...f);
            }
          }
          if (this.pluginHookManager) {
            let a = await this.pluginHookManager.triggerHooks("PreToolUse", {
              toolName: e,
              toolInput: r,
              sessionId: n.sessionId,
              workspaceRoot: n.cwd,
            });
            s.push(
              ...a.map((u) => ({
                success: u.success,
                exitCode: u.success ? 0 : 1,
                stdout: typeof u.output == "string" ? u.output : JSON.stringify(u.output || ""),
                stderr: u.error ? u.error.message : "",
                blocked: !1,
                duration: u.executionTime,
              })),
            );
          }
          return s;
        }
        async executePostToolUse(e, r, n, o, s = []) {
          let a = [];
          if (this.enabled && this.config.PostToolUse) {
            let u = this.toolRegistry?.getTool(e),
              c = u?.description || "",
              m = u?.schema ? { ...u.schema.parameters } : {},
              d = {
                session_id: o.sessionId,
                transcript_path: o.transcriptPath,
                cwd: o.cwd,
                hook_event_name: Mn.PostToolUse,
                tool_name: e,
                tool_name_alias: s,
                tool_input: r,
                tool_response: n,
                tool_desc: c,
                tool_schema: m,
              },
              f = this.handlers.get(Mn.PostToolUse);
            if (f) {
              let p = await f.execute(d, o);
              a.push(...p);
            }
          }
          if (this.pluginHookManager) {
            let u = await this.pluginHookManager.triggerHooks("PostToolUse", {
              toolName: e,
              toolInput: r,
              toolOutput: n,
              sessionId: o.sessionId,
              workspaceRoot: o.cwd,
            });
            a.push(
              ...u.map((c) => ({
                success: c.success,
                exitCode: c.success ? 0 : 1,
                stdout: typeof c.output == "string" ? c.output : JSON.stringify(c.output || ""),
                stderr: c.error ? c.error.message : "",
                blocked: !1,
                duration: c.executionTime,
              })),
            );
          }
          return a;
        }
        async executeStop(e) {
          if (!this.enabled || !this.config.Stop) return [];
          let r = {
              session_id: e.sessionId,
              transcript_path: e.transcriptPath,
              cwd: e.cwd,
              hook_event_name: Mn.Stop,
              stop_hook_active: !0,
            },
            n = this.handlers.get(Mn.Stop);
          return n ? await n.execute(r, e) : [];
        }
        async executeSubagentStop(e) {
          let r = [];
          if (this.enabled && this.config.SubagentStop) {
            let n = {
                session_id: e.sessionId,
                transcript_path: e.transcriptPath,
                cwd: e.cwd,
                hook_event_name: Mn.SubagentStop,
                stop_hook_active: !0,
              },
              o = this.handlers.get(Mn.SubagentStop);
            if (o) {
              let s = await o.execute(n, e);
              r.push(...s);
            }
          }
          if (this.pluginHookManager) {
            let n = await this.pluginHookManager.triggerHooks("SubagentStop", {
              sessionId: e.sessionId,
              workspaceRoot: e.cwd,
            });
            r.push(
              ...n.map((o) => ({
                success: o.success,
                exitCode: o.success ? 0 : 1,
                stdout: typeof o.output == "string" ? o.output : JSON.stringify(o.output || ""),
                stderr: o.error ? o.error.message : "",
                blocked: !1,
                duration: o.executionTime,
              })),
            );
          }
          return r;
        }
        async wouldPreToolUseBlock(e, r, n, o = []) {
          return (await this.executePreToolUse(e, r, n, o)).some((a) => a.blocked);
        }
        async wouldStopBlock(e) {
          return (await this.executeStop(e)).some((n) => n.blocked);
        }
        async wouldSubagentStopBlock(e) {
          return (await this.executeSubagentStop(e)).some((n) => n.blocked);
        }
        async executeSetUpEnvironment(e, r, n) {
          if (!this.enabled || !this.config.SetUpEnvironment) return e;
          let o = this.handlers.get(Mn.SetUpEnvironment);
          if (!o) return e;
          try {
            let s = await o.executeForEnvironment(e, r, n);
            return mSe.applyHookResults(e, s);
          } catch (s) {
            return (console.warn(I.t("hooks.hookExecutionFailed"), s), e);
          }
        }
        hasSetUpEnvironmentHooks() {
          return this.handlers.get(Mn.SetUpEnvironment)?.hasHooks() || !1;
        }
        async executeSessionStart(e, r) {
          this.initPromise && (await this.initPromise);
          let n = [];
          if (this.enabled && this.config.SessionStart) {
            let o = {
                session_id: r.sessionId,
                transcript_path: r.transcriptPath,
                cwd: r.cwd,
                hook_event_name: Mn.SessionStart,
                source: e,
              },
              s = this.handlers.get(Mn.SessionStart);
            if (s) {
              let a = await s.execute(o, r);
              n.push(...a);
            }
          }
          if (this.pluginHookManager) {
            let o = await this.pluginHookManager.triggerHooks("SessionStart", {
              sessionId: r.sessionId,
              workspaceRoot: r.cwd,
            });
            n.push(
              ...o.map((s) => ({
                success: s.success,
                exitCode: s.success ? 0 : 1,
                stdout: typeof s.output == "string" ? s.output : JSON.stringify(s.output || ""),
                stderr: s.error ? s.error.message : "",
                blocked: !1,
                duration: s.executionTime,
              })),
            );
          }
          return n;
        }
        async executeSessionEnd(e, r) {
          this.initPromise && (await this.initPromise);
          let n = [];
          if (this.enabled && this.config.SessionEnd) {
            let o = {
                session_id: r.sessionId,
                transcript_path: r.transcriptPath,
                cwd: r.cwd,
                hook_event_name: Mn.SessionEnd,
                reason: e,
              },
              s = this.handlers.get(Mn.SessionEnd);
            if (s) {
              let a = await s.execute(o, r);
              n.push(...a);
            }
          }
          if (this.pluginHookManager) {
            let o = await this.pluginHookManager.triggerHooks("SessionEnd", {
              sessionId: r.sessionId,
              workspaceRoot: r.cwd,
            });
            n.push(
              ...o.map((s) => ({
                success: s.success,
                exitCode: s.success ? 0 : 1,
                stdout: typeof s.output == "string" ? s.output : JSON.stringify(s.output || ""),
                stderr: s.error ? s.error.message : "",
                blocked: !1,
                duration: s.executionTime,
              })),
            );
          }
          return n;
        }
        async executeUserPromptSubmit(e, r) {
          let n = [];
          if (this.enabled && this.config.UserPromptSubmit) {
            let o = {
                session_id: r.sessionId,
                transcript_path: r.transcriptPath,
                cwd: r.cwd,
                hook_event_name: Mn.UserPromptSubmit,
                prompt: e,
              },
              s = this.handlers.get(Mn.UserPromptSubmit);
            if (s) {
              let a = await s.execute(o, r);
              n.push(...a);
            }
          }
          if (this.pluginHookManager) {
            let o = await this.pluginHookManager.triggerHooks("UserPromptSubmit", {
              sessionId: r.sessionId,
              workspaceRoot: r.cwd,
            });
            n.push(
              ...o.map((s) => ({
                success: s.success,
                exitCode: s.success ? 0 : 1,
                stdout: typeof s.output == "string" ? s.output : JSON.stringify(s.output || ""),
                stderr: s.error ? s.error.message : "",
                blocked: !1,
                duration: s.executionTime,
              })),
            );
          }
          return n;
        }
        async executeNotification(e, r) {
          if (!this.enabled || !this.config.Notification) return [];
          let n = {
              session_id: r.sessionId,
              transcript_path: r.transcriptPath,
              cwd: r.cwd,
              hook_event_name: Mn.Notification,
              message: e,
            },
            o = this.handlers.get(Mn.Notification);
          return o ? await o.execute(n, r) : [];
        }
        hasSessionStartHooks() {
          return this.handlers.get(Mn.SessionStart)?.hasHooks() || !1;
        }
        hasSessionEndHooks() {
          return this.handlers.get(Mn.SessionEnd)?.hasHooks() || !1;
        }
        hasUserPromptSubmitHooks() {
          return this.handlers.get(Mn.UserPromptSubmit)?.hasHooks() || !1;
        }
        async wouldUserPromptSubmitBlock(e, r) {
          return (await this.executeUserPromptSubmit(e, r)).some((o) => o.blocked || o.exitCode === 2);
        }
        hasNotificationHooks() {
          return this.handlers.get(Mn.Notification)?.hasHooks() || !1;
        }
        getStatus() {
          return {
            enabled: this.enabled,
            configLoaded: Object.keys(this.config).length > 0,
            hasPreToolUse: !!this.config.PreToolUse?.length,
            hasPostToolUse: !!this.config.PostToolUse?.length,
            hasStop: !!this.config.Stop?.length,
            hasSubagentStop: !!this.config.SubagentStop?.length,
            hasSessionStart: !!this.config.SessionStart?.length,
            hasSessionEnd: !!this.config.SessionEnd?.length,
            hasUserPromptSubmit: !!this.config.UserPromptSubmit?.length,
            hasNotification: !!this.config.Notification?.length,
          };
        }
        setEnabled(e) {
          this.enabled = e;
        }
        setPluginHookManager(e) {
          this.pluginHookManager = e;
        }
        getPluginHookManager() {
          return this.pluginHookManager;
        }
        async reloadConfig() {
          await this.initialize();
        }
        getConfig() {
          return { ...this.config };
        }
        async getConfigPaths() {
          return await this.configLoader.checkConfigFiles();
        }
        watchConfig(e) {
          return this.configLoader.watchConfig(async (r) => {
            this.config = r;
            let n = this.configLoader.validateConfig(this.config);
            (n.length > 0 && console.warn(I.t("hooks.configurationErrors"), n), e && e());
          });
        }
        checkWorkspaceTrust() {
          try {
            let r = NS.join(process.cwd(), ".iflow", "settings.json");
            if (s$.existsSync(r)) {
              let o = s$.readFileSync(r, "utf-8"),
                s = JSON.parse(o);
              if (s.security?.workspaceTrust?.enabled === !1) return !0;
              s.security?.workspaceTrust?.enabled;
            }
            let n = NS.join(Vfr.homedir(), ".iflow", "settings.json");
            if (s$.existsSync(n)) {
              let o = s$.readFileSync(n, "utf-8");
              if (JSON.parse(o).security?.workspaceTrust?.enabled === !1) return !0;
            }
          } catch (r) {
            console.warn("Failed to read workspace trust setting:", r);
          }
          if (process.env.IFLOW_TRUST_WORKSPACE === "1") return !0;
          if (process.env.CI === "true" || process.argv.includes("--non-interactive")) return !1;
          try {
            let r = process.cwd(),
              n = NS.join(Vfr.homedir(), ".iflow", "trustedWorkspaces.json");
            if (!s$.existsSync(n)) return !1;
            let o = s$.readFileSync(n, "utf-8"),
              s = JSON.parse(o),
              a = NS.resolve(r);
            if (s[a] !== void 0) return s[a] !== "DO_NOT_TRUST";
            for (let [u, c] of Object.entries(s))
              if (c !== Hfr.DO_NOT_TRUST) {
                if (c === Hfr.TRUST_PARENT) {
                  let m = NS.dirname(u);
                  if (a.startsWith(m + NS.sep)) return !0;
                } else if (c === Hfr.TRUST_WORKSPACE && (a.startsWith(u + NS.sep) || a === u)) return !0;
              }
            return !1;
          } catch (r) {
            return (console.warn("Failed to check workspace trust:", r), !1);
          }
        }
        filterUserHooksOnly(e, r) {
          let n = {},
            o = [
              "PreToolUse",
              "PostToolUse",
              "Stop",
              "SubagentStop",
              "SetUpEnvironment",
              "SessionStart",
              "SessionEnd",
              "UserPromptSubmit",
              "Notification",
            ];
          for (let s of o) {
            let a = e[s],
              u = r[s];
            a &&
              (!u || u.length === 0
                ? (n[s] = a)
                : (n[s] = a.filter((c) => !u.some((d) => this.areHookConfigsEqual(c, d)))));
          }
          return n;
        }
        areHookConfigsEqual(e, r) {
          if (e.matcher !== r.matcher || !e.hooks || !r.hooks || e.hooks.length !== r.hooks.length) return !1;
          for (let n = 0; n < e.hooks.length; n++) {
            let o = e.hooks[n],
              s = r.hooks[n];
            if (o.type !== s.type || (o.type === "command" && o.command !== s.command)) return !1;
          }
          return !0;
        }
        async checkWorkspaceHooksTrust(e) {
          try {
            let { TrustedHooksManager: r } = await Promise.resolve().then(() => (qfr(), _1i)),
              n = new r();
            if (n.getUntrustedHooks(process.cwd(), e).length > 0) {
              let s = n.getDangerousHooks(e);
              (s.length > 0 &&
                (console.warn("\u26A0\uFE0F  WARNING: Detected dangerous workspace hooks:"),
                s.forEach((a) => console.warn(`   - ${a}`)),
                console.warn(""),
                console.warn("   These hooks will execute automatically at startup."),
                console.warn("   If you do not trust this project, exit immediately"),
                console.warn("   and review .iflow/settings.json"),
                console.warn("")),
                n.trustHooks(process.cwd(), e));
            }
          } catch (r) {
            console.warn("Failed to check workspace hooks trust:", r);
          }
        }
        static createExecutionContext(e, r, n, o) {
          return { sessionId: e, transcriptPath: r, cwd: n || process.cwd(), projectDir: o };
        }
      }));
  });
function C1i(t, e = []) {
  let r = t.split("/").pop() || t;
  if (W4a.has(r)) return { valid: !1, error: `Command '${r}' is not allowed for security reasons` };
  if (!V4a.has(r)) return { valid: !1, error: `Command '${r}' is not in the allowed command list` };
  if (v1i.test(t)) return { valid: !1, error: `Command contains dangerous characters: ${t}` };
  let n = [];
  for (let o of e) {
    if (v1i.test(o)) return { valid: !1, error: `Argument contains dangerous characters: ${o}` };
    let s = o.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/'/g, "\\'");
    n.push(s);
  }
  return { valid: !0, sanitizedCommand: t, sanitizedArgs: n };
}
var V4a,
  W4a,
  v1i,
  S1i = j(() => {
    "use strict";
    ((V4a = new Set([
      "echo",
      "cat",
      "ls",
      "pwd",
      "date",
      "whoami",
      "head",
      "tail",
      "wc",
      "grep",
      "find",
      "stat",
      "sed",
      "awk",
      "cut",
      "sort",
      "uniq",
      "git",
      "node",
      "npm",
      "npx",
      "python",
      "python3",
      "pip",
      "pip3",
      "make",
      "cmake",
      "cargo",
      "brew",
      "apt-get",
      "yum",
      "curl",
      "wget",
      "jq",
      "which",
      "env",
    ])),
      (W4a = new Set([
        "rm",
        "rmdir",
        "del",
        "format",
        "dd",
        "mkfs",
        "fdisk",
        "shutdown",
        "reboot",
        "halt",
        "poweroff",
        "kill",
        "killall",
        "pkill",
        "sudo",
        "su",
        "chmod",
        "chown",
        "chgrp",
      ])),
      (v1i = /[;&|`$()<>]/));
  });
var x1i = {};
Wi(x1i, { PluginHookManager: () => JY });
import * as w1i from "os";
var JY,
  zct = j(() => {
    "use strict";
    S1i();
    JY = class {
      hooks = new Map();
      constructor() {}
      registerHook(e, r, n, o) {
        (this.hooks.has(e) || this.hooks.set(e, []),
          this.hooks.get(e).push({ event: e, definition: r, pluginName: n, pluginDir: o }));
      }
      async executeHook(e, r) {
        let n = Date.now();
        try {
          if (e.type === "command") return await this.executeCommandHook(e, r, n);
          if (e.type === "prompt") return await this.executePromptHook(e, r, n);
          if (e.type === "agent") return await this.executeAgentHook(e, r, n);
          throw new Error(`Unknown hook type: ${e.type}`);
        } catch (o) {
          return { success: !1, error: o instanceof Error ? o : new Error(String(o)), executionTime: Date.now() - n };
        }
      }
      async executeCommandHook(e, r, n) {
        let { spawn: o } = await import("child_process"),
          s = e.args || [],
          a = C1i(e.command, s);
        return a.valid
          ? new Promise((u) => {
              let c = e.cwd || r.workspaceRoot,
                m = {
                  ...process.env,
                  ...e.env,
                  IFLOW_PLUGIN_ROOT: r.pluginRoot,
                  IFLOW_WORKSPACE_ROOT: r.workspaceRoot,
                  IFLOW_USER_HOME: r.userHome,
                  IFLOW_VERSION: r.iflowVersion,
                  IFLOW_SESSION_ID: r.sessionId || "",
                  IFLOW_TOOL_NAME: r.toolName || "",
                  CLAUDE_PLUGIN_ROOT: r.pluginRoot,
                },
                d = e.timeout || 3e4,
                f = a.sanitizedArgs || [],
                p = e.useShell === !0,
                h = o(a.sanitizedCommand, f, { cwd: c, env: m, shell: p }),
                g = "",
                b = "",
                A = !1,
                y = setTimeout(() => {
                  ((A = !0), h.kill("SIGTERM"));
                }, d);
              (h.stdout?.on("data", (E) => {
                g += E.toString();
              }),
                h.stderr?.on("data", (E) => {
                  b += E.toString();
                }),
                h.on("close", (E) => {
                  (clearTimeout(y),
                    u({
                      success: E === 0 && !A,
                      output: g,
                      error: A
                        ? new Error("Hook execution timed out")
                        : E !== 0
                          ? new Error(`Hook exited with code ${E}
Stderr: ${b}`)
                          : void 0,
                      executionTime: Date.now() - n,
                    }));
                }),
                h.on("error", (E) => {
                  (clearTimeout(y), u({ success: !1, error: E, executionTime: Date.now() - n }));
                }));
            })
          : { success: !1, error: new Error(`Command validation failed: ${a.error}`), executionTime: Date.now() - n };
      }
      async executePromptHook(e, r, n) {
        try {
          let o = this.buildPromptWithContext(e.prompt, r),
            s = globalThis.aiModel;
          return s
            ? {
                success: !0,
                output: await this.callAIModel(s, o, e.model, e.temperature),
                executionTime: Date.now() - n,
              }
            : {
                success: !1,
                error: new Error("AI model not available. Prompt hooks require AI model integration."),
                executionTime: Date.now() - n,
              };
        } catch (o) {
          return { success: !1, error: o instanceof Error ? o : new Error(String(o)), executionTime: Date.now() - n };
        }
      }
      buildPromptWithContext(e, r) {
        return e
          .replace(/\$\{IFLOW_PLUGIN_ROOT\}/g, r.pluginRoot)
          .replace(/\$\{IFLOW_WORKSPACE_ROOT\}/g, r.workspaceRoot)
          .replace(/\$\{IFLOW_USER_HOME\}/g, r.userHome)
          .replace(/\$\{IFLOW_VERSION\}/g, r.iflowVersion)
          .replace(/\$\{IFLOW_SESSION_ID\}/g, r.sessionId || "")
          .replace(/\$\{IFLOW_TOOL_NAME\}/g, r.toolName || "")
          .replace(/\$\{IFLOW_EVENT\}/g, r.event);
      }
      async callAIModel(e, r, n, o) {
        return `AI response to: ${r}`;
      }
      async executeAgentHook(e, r, n) {
        try {
          let o = this.buildPromptWithContext(e.prompt, r),
            s = globalThis.subAgentExecutor;
          return s
            ? { success: !0, output: await this.executeSubAgent(s, e.agent, o, e.tools), executionTime: Date.now() - n }
            : {
                success: !1,
                error: new Error("SubAgent executor not available. Agent hooks require SubAgent integration."),
                executionTime: Date.now() - n,
              };
        } catch (o) {
          return { success: !1, error: o instanceof Error ? o : new Error(String(o)), executionTime: Date.now() - n };
        }
      }
      async executeSubAgent(e, r, n, o) {
        return `SubAgent ${r} response to: ${n}`;
      }
      unregisterHooks(e) {
        for (let [r, n] of this.hooks.entries()) {
          let o = n.filter((s) => s.pluginName !== e);
          o.length === 0 ? this.hooks.delete(r) : this.hooks.set(r, o);
        }
      }
      async triggerHooks(e, r) {
        let n = this.hooks.get(e) || [];
        if (n.length === 0) return [];
        let o = [];
        for (let s of n) {
          if (s.definition.matcher && r.toolName && !this.matchesTool(s.definition.matcher, r.toolName)) continue;
          let a = {
            event: e,
            workspaceRoot: r.workspaceRoot || process.cwd(),
            pluginRoot: s.pluginDir,
            userHome: r.userHome || w1i.homedir(),
            iflowVersion: r.iflowVersion || "0.0.0",
            ...r,
          };
          for (let u of s.definition.hooks)
            try {
              let c = await this.executeHook(u, a);
              (o.push(c), c.success || console.error(`Hook execution failed for ${e} from ${s.pluginName}:`, c.error));
            } catch (c) {
              (console.error(`Hook execution error for ${e} from ${s.pluginName}:`, c),
                o.push({ success: !1, error: c, executionTime: 0 }));
            }
        }
        return o;
      }
      matchesTool(e, r) {
        return e === "*" || e === ""
          ? !0
          : e.split("|").some((o) => {
              let s = o.trim();
              if (s === "*" || s === "") return !0;
              try {
                return new RegExp(s, "i").test(r);
              } catch {
                return s.toLowerCase() === r.toLowerCase();
              }
            });
      }
      getAllHooks() {
        let e = [];
        for (let r of this.hooks.values()) e.push(...r);
        return e;
      }
      getHooksForEvent(e) {
        return this.hooks.get(e) || [];
      }
      getHooksFromPlugin(e) {
        return this.getAllHooks().filter((r) => r.pluginName === e);
      }
      getStatistics() {
        let e = this.getAllHooks(),
          r = { totalHooks: e.length, hooksByEvent: {}, hooksByPlugin: {} };
        for (let n of e)
          ((r.hooksByEvent[n.event] = (r.hooksByEvent[n.event] || 0) + 1),
            (r.hooksByPlugin[n.pluginName] = (r.hooksByPlugin[n.pluginName] || 0) + 1));
        return r;
      }
      clear() {
        this.hooks.clear();
      }
    };
  });
var Wfr = j(() => {
  "use strict";
  E1i();
  qfr();
  sy();
  Qfr();
  Vct();
  OS();
  zct();
});
import * as dN from "fs";
import * as fN from "path";
import * as zfr from "process";
var Yct,
  T1i = j(() => {
    "use strict";
    E0();
    Yct = class {
      directories = new Set();
      initialDirectories;
      onDirectoriesChangedListeners = new Set();
      constructor(e, r = []) {
        this.addDirectory(e);
        for (let n of r) this.addDirectory(n);
        this.initialDirectories = new Set(this.directories);
      }
      onDirectoriesChanged(e) {
        return (
          this.onDirectoriesChangedListeners.add(e),
          () => {
            this.onDirectoriesChangedListeners.delete(e);
          }
        );
      }
      notifyDirectoriesChanged() {
        for (let e of [...this.onDirectoriesChangedListeners])
          try {
            e();
          } catch (r) {
            console.error("Error in WorkspaceContext listener:", r);
          }
      }
      addDirectory(e, r = zfr.cwd()) {
        try {
          let n = this.resolveAndValidateDir(e, r);
          if (this.directories.has(n)) return;
          (this.directories.add(n), this.notifyDirectoriesChanged());
        } catch (n) {
          console.warn(`[WARN] Skipping unreadable directory: ${e} (${n instanceof Error ? n.message : String(n)})`);
        }
      }
      resolveAndValidateDir(e, r = zfr.cwd()) {
        let n = fN.isAbsolute(e) ? e : fN.resolve(r, e);
        if (!dN.existsSync(n)) throw new Error(`Directory does not exist: ${n}`);
        if (!dN.statSync(n).isDirectory()) throw new Error(`Path is not a directory: ${n}`);
        return dN.realpathSync(n);
      }
      getDirectories() {
        return Array.from(this.directories);
      }
      getInitialDirectories() {
        return Array.from(this.initialDirectories);
      }
      setDirectories(e) {
        let r = new Set();
        for (let n of e) r.add(this.resolveAndValidateDir(n));
        (r.size !== this.directories.size || ![...r].every((n) => this.directories.has(n))) &&
          ((this.directories = r), this.notifyDirectoriesChanged());
      }
      isPathWithinWorkspace(e) {
        try {
          let r = this.fullyResolvedPath(e);
          for (let n of this.directories) if (this.isPathWithinRoot(r, n)) return !0;
          return !1;
        } catch {
          return !1;
        }
      }
      fullyResolvedPath(e) {
        try {
          return dN.realpathSync(e);
        } catch (r) {
          if (Go(r) && r.code === "ENOENT" && r.path && !this.isFileSymlink(r.path)) return r.path;
          throw r;
        }
      }
      isPathWithinRoot(e, r) {
        let n = fN.relative(r, e);
        return !n.startsWith(`..${fN.sep}`) && n !== ".." && !fN.isAbsolute(n);
      }
      isFileSymlink(e) {
        try {
          return !dN.readlinkSync(e).endsWith("/");
        } catch {
          return !1;
        }
      }
    };
  });
import D1i from "node:fs/promises";
import * as I1i from "node:path";
var fSe,
  Yfr = j(() => {
    "use strict";
    xO();
    fSe = class {
      async readTextFile(e) {
        return D1i.readFile(e, "utf-8");
      }
      async writeTextFile(e, r) {
        await D1i.writeFile(e, r, "utf-8");
      }
      findFiles(e, r) {
        return r.flatMap((n) => {
          let o = I1i.posix.join(n, "**", e);
          return Sve(o, { nodir: !0, absolute: !0 });
        });
      }
    };
  });
import * as pSe from "fs";
import * as hSe from "path";
var ome,
  Kfr = j(() => {
    "use strict";
    ome = class {
      detectFormat(e) {
        let r = hSe.join(e, ".iflow-plugin", "plugin.json");
        if (pSe.existsSync(r)) return { format: "iflow", manifestPath: r, pluginRoot: e };
        let n = hSe.join(e, ".claude-plugin", "plugin.json");
        if (pSe.existsSync(n)) return { format: "claude", manifestPath: n, pluginRoot: e };
        throw new Error(
          `No valid plugin manifest found in ${e}. Expected .iflow-plugin/plugin.json or .claude-plugin/plugin.json`,
        );
      }
      isIflowPlugin(e) {
        let r = hSe.join(e, ".iflow-plugin", "plugin.json");
        return pSe.existsSync(r);
      }
      isClaudePlugin(e) {
        let r = hSe.join(e, ".claude-plugin", "plugin.json");
        return pSe.existsSync(r);
      }
      isValidPlugin(e) {
        return this.isIflowPlugin(e) || this.isClaudePlugin(e);
      }
      getFormat(e) {
        if (this.isIflowPlugin(e)) return "iflow";
        if (this.isClaudePlugin(e)) return "claude";
        throw new Error(`No valid plugin manifest found in ${e}`);
      }
    };
  });
import * as Jfr from "os";
function Xfr(t, e) {
  return t
    .replace(/\$\{IFLOW_PLUGIN_ROOT\}/g, e.pluginRoot)
    .replace(/\$\{CLAUDE_PLUGIN_ROOT\}/g, e.pluginRoot)
    .replace(/\$\{WORKSPACE_ROOT\}/g, e.workspaceRoot)
    .replace(/\$\{USER_HOME\}/g, e.userHome)
    .replace(/\$\{HOME\}/g, e.userHome)
    .replace(/\$\{IFLOW_VERSION\}/g, e.iflowVersion)
    .replace(/^~(?=\/|$)/, e.userHome);
}
function XY(t, e) {
  if (typeof t == "string") return Xfr(t, e);
  if (Array.isArray(t)) return t.map((r) => XY(r, e));
  if (t && typeof t == "object") {
    let r = {};
    for (let [n, o] of Object.entries(t)) r[n] = XY(o, e);
    return r;
  }
  return t;
}
function gSe(t, e) {
  ((process.env.IFLOW_PLUGIN_ROOT = t),
    (process.env.CLAUDE_PLUGIN_ROOT = t),
    (process.env.WORKSPACE_ROOT = e),
    (process.env.USER_HOME = Jfr.homedir()));
}
function bSe(t, e, r) {
  return { pluginRoot: t, workspaceRoot: e, userHome: Jfr.homedir(), iflowVersion: r };
}
function Zfr(t) {
  let e = /\$\{([^}]+)\}/g,
    r = [],
    n;
  for (; (n = e.exec(t)) !== null; ) r.push(n[1]);
  return [...new Set(r)];
}
function R1i(t, e) {
  let r = Zfr(t),
    n = new Set(["IFLOW_PLUGIN_ROOT", "CLAUDE_PLUGIN_ROOT", "WORKSPACE_ROOT", "USER_HOME", "HOME", "IFLOW_VERSION"]),
    o = r.filter((s) => !n.has(s));
  return { valid: o.length === 0, missingVariables: o };
}
var epr = j(() => {
  "use strict";
});
import * as bA from "fs/promises";
import * as ZY from "path";
import * as Kct from "crypto";
var Jct,
  k1i = j(() => {
    "use strict";
    Jct = class {
      cacheDir;
      maxAge;
      enabled;
      memoryCache;
      stats = { hits: 0, misses: 0 };
      constructor(e) {
        ((this.cacheDir = e.cacheDir),
          (this.maxAge = e.maxAge ?? 1440 * 60 * 1e3),
          (this.enabled = e.enabled ?? !0),
          (this.memoryCache = new Map()));
      }
      async initialize() {
        if (this.enabled)
          try {
            await bA.mkdir(this.cacheDir, { recursive: !0 });
          } catch (e) {
            (console.error("Failed to initialize plugin cache:", e), (this.enabled = !1));
          }
      }
      async get(e) {
        if (!this.enabled) return null;
        let r = this.getCacheKey(e),
          n = this.memoryCache.get(r);
        if (n && !this.isExpired(n) && (await this.calculatePluginHash(e)) === n.hash) return (this.stats.hits++, n);
        try {
          let o = this.getCachePath(r),
            s = await bA.readFile(o, "utf-8"),
            a = JSON.parse(s);
          return this.isExpired(a)
            ? (await this.delete(e), this.stats.misses++, null)
            : (await this.calculatePluginHash(e)) !== a.hash
              ? (await this.delete(e), this.stats.misses++, null)
              : (this.memoryCache.set(r, a), this.stats.hits++, a);
        } catch {
          return (this.stats.misses++, null);
        }
      }
      async set(e, r, n) {
        if (this.enabled)
          try {
            let o = await this.calculatePluginHash(e),
              s = { config: r, metadata: n, hash: o, timestamp: Date.now(), pluginDir: e },
              a = this.getCacheKey(e);
            this.memoryCache.set(a, s);
            let u = this.getCachePath(a);
            await bA.writeFile(u, JSON.stringify(s, null, 2), "utf-8");
          } catch (o) {
            console.error(`Failed to save cache for ${e}:`, o);
          }
      }
      async delete(e) {
        if (!this.enabled) return;
        let r = this.getCacheKey(e);
        this.memoryCache.delete(r);
        try {
          let n = this.getCachePath(r);
          await bA.unlink(n);
        } catch {}
      }
      async invalidate(e) {
        return this.delete(e);
      }
      getStatistics() {
        let e = this.stats.hits + this.stats.misses;
        return {
          hits: this.stats.hits,
          misses: this.stats.misses,
          totalEntries: this.memoryCache.size,
          hitRate: e > 0 ? this.stats.hits / e : 0,
        };
      }
      async clear() {
        if (this.enabled) {
          this.memoryCache.clear();
          try {
            let e = await bA.readdir(this.cacheDir);
            await Promise.all(e.filter((r) => r.endsWith(".json")).map((r) => bA.unlink(ZY.join(this.cacheDir, r))));
          } catch (e) {
            console.error("Failed to clear plugin cache:", e);
          }
        }
      }
      async getStats() {
        let e = this.memoryCache.size,
          r = 0,
          n = 0;
        if (this.enabled)
          try {
            r = (await bA.readdir(this.cacheDir)).filter((s) => s.endsWith(".json")).length;
            for (let [, s] of this.memoryCache) this.isExpired(s) && n++;
          } catch {}
        return { memorySize: e, diskSize: r, totalEntries: Math.max(e, r), expiredEntries: n };
      }
      async cleanExpired() {
        if (!this.enabled) return 0;
        let e = 0;
        for (let [r, n] of this.memoryCache) this.isExpired(n) && (this.memoryCache.delete(r), e++);
        try {
          let r = await bA.readdir(this.cacheDir);
          for (let n of r)
            if (n.endsWith(".json"))
              try {
                let o = ZY.join(this.cacheDir, n),
                  s = await bA.readFile(o, "utf-8"),
                  a = JSON.parse(s);
                this.isExpired(a) && (await bA.unlink(o), e++);
              } catch {}
        } catch {}
        return e;
      }
      async calculatePluginHash(e) {
        try {
          let r = [
              ZY.join(".iflow-plugin", "plugin.json"),
              ZY.join(".claude-plugin", "plugin.json"),
              "hooks.json",
              ".mcp.json",
            ],
            n = [];
          for (let o of r) {
            let s = ZY.join(e, o);
            try {
              let a = await bA.readFile(s, "utf-8"),
                u = Kct.createHash("sha256").update(a).digest("hex");
              n.push(u);
            } catch {}
          }
          return Kct.createHash("sha256").update(n.join("")).digest("hex").substring(0, 16);
        } catch (r) {
          return (console.error(`Failed to calculate hash for ${e}:`, r), Date.now().toString());
        }
      }
      getCacheKey(e) {
        return Kct.createHash("sha256").update(e).digest("hex").substring(0, 16);
      }
      getCachePath(e) {
        return ZY.join(this.cacheDir, `${e}.json`);
      }
      isExpired(e) {
        return Date.now() - e.timestamp > this.maxAge;
      }
    };
  });
import * as u$ from "fs/promises";
import * as h9 from "path";
var a$,
  Xct = j(() => {
    "use strict";
    Kfr();
    epr();
    k1i();
    a$ = class {
      formatDetector;
      cache;
      constructor(e) {
        ((this.formatDetector = new ome()), (this.cache = e ? new Jct(e) : null));
      }
      async initialize() {
        this.cache && (await this.cache.initialize());
      }
      async loadPlugin(e, r, n, o = "user") {
        if (this.cache) {
          let m = await this.cache.get(e);
          if (m) {
            gSe(e, r);
            let d = bSe(e, r, n);
            return { config: XY(m.config, d), metadata: m.metadata, pluginDir: e, enabled: !0, scope: o };
          }
        }
        let s = this.formatDetector.detectFormat(e),
          a = await this.readPluginConfig(s.manifestPath);
        (this.validateConfig(a), this.cache && (await this.cache.set(e, a, s)), gSe(e, r));
        let u = bSe(e, r, n);
        return { config: XY(a, u), metadata: s, pluginDir: e, enabled: !0, scope: o };
      }
      async readPluginConfig(e) {
        try {
          let r = await u$.readFile(e, "utf-8");
          return JSON.parse(r);
        } catch (r) {
          throw new Error(`Failed to read plugin configuration from ${e}: ${r}`);
        }
      }
      validateConfig(e) {
        if (!e.name) throw new Error("Plugin name is required");
        if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(e.name))
          throw new Error(`Plugin name must be in kebab-case format: ${e.name}`);
        e.version &&
          !/^\d+\.\d+\.\d+/.test(e.version) &&
          console.warn(`Plugin version should follow semantic versioning: ${e.version}`);
      }
      async scanPlugins(e) {
        try {
          let r = await u$.readdir(e, { withFileTypes: !0 }),
            n = [];
          for (let o of r) {
            let s = o.isDirectory();
            if (!s && o.isSymbolicLink())
              try {
                let a = h9.join(e, o.name);
                s = (await u$.stat(a)).isDirectory();
              } catch {
                continue;
              }
            if (s) {
              let a = h9.join(e, o.name);
              this.formatDetector.isValidPlugin(a) && n.push(a);
            }
          }
          return n;
        } catch {
          return [];
        }
      }
      async resolveComponentPaths(e, r) {
        let n = { commands: [], skills: [], agents: [], hooks: null, mcpServers: null, lspServers: null };
        if (e.commands) n.commands = await this.resolvePathArray(e.commands, r, "commands");
        else {
          let o = h9.join(r, "commands");
          (await this.pathExists(o)) && (n.commands = [o]);
        }
        if (e.skills) n.skills = await this.resolvePathArray(e.skills, r, "skills");
        else {
          let o = h9.join(r, "skills");
          (await this.pathExists(o)) && (n.skills = [o]);
        }
        if (e.agents) n.agents = await this.resolvePathArray(e.agents, r, "agents");
        else {
          let o = h9.join(r, "agents");
          (await this.pathExists(o)) && (n.agents = [o]);
        }
        if (typeof e.hooks == "string") n.hooks = h9.resolve(r, e.hooks);
        else {
          let o = h9.join(r, "hooks", "hooks.json");
          (await this.pathExists(o)) && (n.hooks = o);
        }
        if (typeof e.mcpServers == "string") n.mcpServers = h9.resolve(r, e.mcpServers);
        else {
          let o = h9.join(r, ".mcp.json");
          (await this.pathExists(o)) && (n.mcpServers = o);
        }
        if (typeof e.lspServers == "string") n.lspServers = h9.resolve(r, e.lspServers);
        else {
          let o = h9.join(r, ".lsp.json");
          (await this.pathExists(o)) && (n.lspServers = o);
        }
        return n;
      }
      async resolvePathArray(e, r, n) {
        let o = Array.isArray(e) ? e : [e],
          s = [];
        for (let a of o) {
          let u = h9.resolve(r, a);
          (await this.pathExists(u)) && s.push(u);
        }
        return s;
      }
      async pathExists(e) {
        try {
          return (await u$.access(e), !0);
        } catch {
          return !1;
        }
      }
    };
  });
import * as PS from "fs/promises";
import * as sme from "path";
var ame,
  tpr = j(() => {
    "use strict";
    zct();
    Xct();
    ame = class t {
      pluginLoader;
      toolRegistry;
      skillRegistry;
      agentRegistry;
      lspManager = null;
      hookManager = null;
      pluginMcpServers = new Map();
      pluginMcpConfigs = new Map();
      pluginLspServers = new Map();
      constructor(e, r, n, o, s) {
        ((this.pluginLoader = new a$()),
          (this.toolRegistry = e),
          (this.skillRegistry = r),
          (this.agentRegistry = n),
          (this.lspManager = o || null),
          (this.hookManager = s || null));
      }
      async registerPlugin(e) {
        if (!e.enabled) return;
        let r = await this.pluginLoader.resolveComponentPaths(e.config, e.pluginDir);
        (await this.registerMcpServers(e, r.mcpServers),
          await this.registerSkills(e, r.skills),
          await this.registerAgents(e, r.agents),
          await this.registerLspServers(e, r.lspServers),
          await this.registerHooks(e, r.hooks));
      }
      async unregisterPlugin(e) {
        (await this.unregisterMcpServers(e),
          await this.unregisterSkills(e),
          await this.unregisterAgents(e),
          await this.unregisterLspServers(e),
          await this.unregisterHooks(e));
      }
      async registerMcpServers(e, r) {
        if (!(!r && typeof e.config.mcpServers != "object"))
          try {
            let n;
            if (typeof e.config.mcpServers == "object") n = e.config.mcpServers;
            else if (r) {
              let o = await PS.readFile(r, "utf-8");
              n = JSON.parse(o);
            } else return;
            if (!n.mcpServers) return;
            for (let [o, s] of Object.entries(n.mcpServers))
              (this.pluginMcpServers.has(e.config.name) || this.pluginMcpServers.set(e.config.name, new Set()),
                this.pluginMcpServers.get(e.config.name).add(o),
                this.pluginMcpConfigs.set(o, {
                  command: s.command,
                  args: s.args,
                  env: s.env,
                  cwd: s.cwd || e.pluginDir,
                }));
          } catch (n) {
            console.error(`Failed to register MCP servers from plugin ${e.config.name}:`, n);
          }
      }
      async unregisterMcpServers(e) {
        let r = this.pluginMcpServers.get(e.config.name);
        if (!(!r || r.size === 0)) {
          for (let n of r) this.pluginMcpConfigs.delete(n);
          this.pluginMcpServers.delete(e.config.name);
        }
      }
      async registerSkills(e, r) {
        if (r.length !== 0)
          for (let n of r)
            try {
              let o = await PS.readdir(n, { withFileTypes: !0 });
              for (let s of o)
                if (s.isDirectory()) {
                  let a = sme.join(n, s.name),
                    u = sme.join(a, "SKILL.md");
                  try {
                    await PS.access(u);
                    let c = await PS.readFile(u, "utf-8"),
                      m = {
                        name: s.name,
                        description: `Skill from plugin ${e.config.name}`,
                        content: c,
                        location: "project",
                        filePath: u,
                        baseDirectory: a,
                        sourcePath: a,
                        pluginName: e.config.name,
                      };
                    this.skillRegistry.register(m);
                  } catch {}
                }
            } catch (o) {
              console.error(`Failed to register skills from ${n}:`, o);
            }
      }
      async unregisterSkills(e) {
        let r = this.skillRegistry.getAll();
        for (let n of r) n.pluginName === e.config.name && this.skillRegistry.unregister(n.name);
      }
      async registerAgents(e, r) {
        if (r.length !== 0)
          for (let n of r)
            try {
              let o = await PS.readdir(n, { withFileTypes: !0 });
              for (let s of o)
                if (s.isFile() && s.name.endsWith(".md")) {
                  let a = sme.join(n, s.name);
                  try {
                    let u = await PS.readFile(a, "utf-8"),
                      c = this.parseAgentMarkdown(u, sme.basename(s.name, ".md"), a, e.config.name);
                    this.agentRegistry.register(c);
                  } catch (u) {
                    console.error(`Failed to parse agent ${s.name}:`, u);
                  }
                }
            } catch (o) {
              console.error(`Failed to register agents from ${n}:`, o);
            }
      }
      async unregisterAgents(e) {
        let r = this.agentRegistry.getAllAgents();
        for (let n of r) n.sourcePath?.includes(e.pluginDir) && this.agentRegistry.unregister(n.agentType);
      }
      parseAgentMarkdown(e, r, n, o) {
        let s = { agentType: r, sourcePath: n, isBuiltIn: !1 },
          a = e.split(`
`),
          u = !1,
          c = "";
        for (let m of a) {
          if (m.trim() === "---") {
            u = !u;
            continue;
          }
          if (u) {
            let d = m.match(/^(\w+):\s*(.+)$/);
            if (d) {
              let [, f, p] = d;
              switch (f) {
                case "name":
                  s.name = p;
                  break;
                case "description":
                  s.description = p;
                  break;
                case "whenToUse":
                  s.whenToUse = p;
                  break;
                case "allowedTools":
                  s.allowedTools = p.split(",").map((h) => h.trim());
                  break;
                case "allowedMcps":
                  s.allowedMcps = p.split(",").map((h) => h.trim());
                  break;
                case "proactive":
                  s.proactive = p.toLowerCase() === "true";
                  break;
                default:
                  break;
              }
            }
          } else
            c +=
              m +
              `
`;
        }
        return {
          agentType: s.agentType,
          name: s.name || r,
          description: s.description || "",
          whenToUse: s.whenToUse || "",
          allowedTools: s.allowedTools || ["*"],
          allowedMcps: s.allowedMcps,
          systemPrompt: c.trim(),
          isBuiltIn: !1,
          proactive: s.proactive || !1,
          sourcePath: n,
        };
      }
      async registerLspServers(e, r) {
        if (this.lspManager && !(!r && typeof e.config.lspServers != "object"))
          try {
            let n;
            if (typeof e.config.lspServers == "object") n = e.config.lspServers;
            else if (r) {
              let o = await PS.readFile(r, "utf-8");
              n = JSON.parse(o);
            } else return;
            this.lspManager.registerServers(n, e.pluginDir);
            for (let o of Object.keys(n))
              (this.pluginLspServers.has(e.config.name) || this.pluginLspServers.set(e.config.name, new Set()),
                this.pluginLspServers.get(e.config.name).add(o));
          } catch (n) {
            console.error(`Failed to register LSP servers from plugin ${e.config.name}:`, n);
          }
      }
      async unregisterLspServers(e) {
        if (!this.lspManager) return;
        let r = this.pluginLspServers.get(e.config.name);
        if (!(!r || r.size === 0)) {
          for (let n of r)
            try {
              await this.lspManager.stopServer(n);
            } catch (o) {
              console.error(`    Failed to stop LSP server ${n}:`, o);
            }
          this.pluginLspServers.delete(e.config.name);
        }
      }
      static CLAUDE_EVENT_MAP = {
        Setup: "SessionStart",
        SessionStart: "SessionStart",
        UserPromptSubmit: "UserPromptSubmit",
        PreToolUse: "PreToolUse",
        PostToolUse: "PostToolUse",
        Stop: "SessionEnd",
        SessionEnd: "SessionEnd",
        SubagentStop: "SubagentStop",
        SubagentStart: "SubagentStart",
      };
      adaptClaudeHookDefinition(e) {
        let r = { ...e };
        return (
          r.matcher === "*" && (r.matcher = void 0),
          r.hooks &&
            (r.hooks = r.hooks.map((n) =>
              n.type === "command" && n.timeout !== void 0 && n.timeout < 1e3 ? { ...n, timeout: n.timeout * 1e3 } : n,
            )),
          r
        );
      }
      async registerHooks(e, r) {
        if (this.hookManager && !(!r && typeof e.config.hooks != "object"))
          try {
            let n;
            if (typeof e.config.hooks == "object") n = e.config.hooks;
            else if (r) {
              let a = await PS.readFile(r, "utf-8");
              n = JSON.parse(a);
            } else return;
            let o = e.metadata.format === "claude",
              s;
            n.hooks && typeof n.hooks == "object" ? (s = n.hooks) : (s = n);
            for (let [a, u] of Object.entries(s)) {
              let c = (o && t.CLAUDE_EVENT_MAP[a]) || a,
                m = Array.isArray(u) ? u : [u];
              for (let d of m) {
                let f = o ? this.adaptClaudeHookDefinition(d) : d;
                this.hookManager.registerHook(c, f, e.config.name, e.pluginDir);
              }
            }
          } catch (n) {
            console.error(`Failed to register hooks from plugin ${e.config.name}:`, n);
          }
      }
      async unregisterHooks(e) {
        this.hookManager && this.hookManager.unregisterHooks(e.config.name);
      }
      getPluginMcpConfigs() {
        return Object.fromEntries(this.pluginMcpConfigs);
      }
      getPluginHookManager() {
        return (this.hookManager || (this.hookManager = new JY()), this.hookManager);
      }
    };
  });
import * as O1i from "fs";
var Zct,
  N1i = j(() => {
    "use strict";
    Zct = class {
      watchers;
      debounceTimers;
      debounceDelay;
      recursive;
      filePatterns;
      callbacks;
      constructor(e = {}) {
        ((this.watchers = new Map()),
          (this.debounceTimers = new Map()),
          (this.debounceDelay = e.debounceDelay ?? 1e3),
          (this.recursive = e.recursive ?? !0),
          (this.filePatterns = e.filePatterns ?? ["*.json", "*.js", "*.ts"]),
          (this.callbacks = []));
      }
      onChange(e) {
        this.callbacks.push(e);
      }
      watch(e, r) {
        this.unwatch(e);
        try {
          let n = O1i.watch(e, { recursive: this.recursive }, (o, s) => {
            s && this.shouldWatch(s) && this.debounceChange(e, r, o);
          });
          this.watchers.set(e, n);
        } catch (n) {
          console.error(`Failed to watch plugin ${r}:`, n);
        }
      }
      unwatch(e) {
        let r = this.watchers.get(e);
        r && (r.close(), this.watchers.delete(e));
        let n = this.debounceTimers.get(e);
        n && (clearTimeout(n), this.debounceTimers.delete(e));
      }
      unwatchAll() {
        for (let [e] of this.watchers) this.unwatch(e);
      }
      getWatchedPlugins() {
        return Array.from(this.watchers.keys());
      }
      getWatchedDirectories() {
        return this.getWatchedPlugins();
      }
      shouldWatch(e) {
        return (
          e.endsWith(".json") || e.endsWith(".js") || e.endsWith(".ts") || e.includes("hooks") || e.includes("plugin")
        );
      }
      debounceChange(e, r, n) {
        let o = this.debounceTimers.get(e);
        o && clearTimeout(o);
        let s = setTimeout(() => {
          if ((this.debounceTimers.delete(e), this.callbacks.length > 0)) {
            console.log(`Plugin ${r} changed, triggering reload...`);
            for (let a of this.callbacks)
              try {
                a(e, n);
              } catch (u) {
                console.error("Error in watcher callback:", u);
              }
          }
        }, this.debounceDelay);
        this.debounceTimers.set(e, s);
      }
    };
  });
var elt,
  P1i = j(() => {
    "use strict";
    elt = class {
      dependencyGraph = {};
      loadOrder = [];
      buildDependencyGraph(e) {
        this.dependencyGraph = {};
        for (let [r, n] of e) {
          let o = this.extractDependencies(n.config);
          this.dependencyGraph[r] = o;
        }
      }
      extractDependencies(e) {
        let r = [];
        if ("dependencies" in e && Array.isArray(e.dependencies))
          for (let n of e.dependencies)
            typeof n == "string"
              ? r.push({ name: n })
              : typeof n == "object" &&
                n !== null &&
                r.push({ name: n.name, version: n.version, optional: n.optional || !1 });
        return r;
      }
      resolveLoadOrder(e) {
        this.buildDependencyGraph(e);
        let r = new Set(),
          n = new Set(),
          o = [],
          s = (a) => {
            if (r.has(a)) return;
            if (n.has(a)) throw new Error(`Circular dependency detected involving plugin: ${a}`);
            n.add(a);
            let u = this.dependencyGraph[a] || [];
            for (let c of u) {
              if (!e.has(c.name))
                if (c.optional) {
                  console.warn(`Optional dependency ${c.name} for plugin ${a} is not available`);
                  continue;
                } else throw new Error(`Plugin ${a} requires ${c.name} but it is not loaded`);
              if (c.version) {
                let m = e.get(c.name);
                if (m) {
                  let d = m.config.version || "0.0.0";
                  if (!this.isVersionCompatible(d, c.version))
                    throw new Error(`Plugin ${a} requires ${c.name} version ${c.version} but found ${d}`);
                }
              }
              s(c.name);
            }
            (n.delete(a), r.add(a), o.push(a));
          };
        for (let a of e.keys()) s(a);
        return ((this.loadOrder = o), o);
      }
      isVersionCompatible(e, r) {
        let n = e.replace(/^v/, ""),
          o = r.replace(/^v/, "");
        return n === o
          ? !0
          : o.startsWith(">=")
            ? this.compareVersions(n, o.slice(2)) >= 0
            : o.startsWith(">")
              ? this.compareVersions(n, o.slice(1)) > 0
              : o.startsWith("<=")
                ? this.compareVersions(n, o.slice(2)) <= 0
                : o.startsWith("<")
                  ? this.compareVersions(n, o.slice(1)) < 0
                  : o.startsWith("^")
                    ? this.isCaretCompatible(n, o.slice(1))
                    : o.startsWith("~")
                      ? this.isTildeCompatible(n, o.slice(1))
                      : n === o;
      }
      compareVersions(e, r) {
        let n = e.split(".").map((s) => parseInt(s, 10)),
          o = r.split(".").map((s) => parseInt(s, 10));
        for (let s = 0; s < Math.max(n.length, o.length); s++) {
          let a = n[s] || 0,
            u = o[s] || 0;
          if (a > u) return 1;
          if (a < u) return -1;
        }
        return 0;
      }
      isCaretCompatible(e, r) {
        let n = e.split(".").map((s) => parseInt(s, 10)),
          o = r.split(".").map((s) => parseInt(s, 10));
        return n[0] !== o[0] || (n[0] === 0 && n[1] !== o[1]) ? !1 : this.compareVersions(e, r) >= 0;
      }
      isTildeCompatible(e, r) {
        let n = e.split(".").map((s) => parseInt(s, 10)),
          o = r.split(".").map((s) => parseInt(s, 10));
        return n[0] !== o[0] || n[1] !== o[1] ? !1 : (n[2] || 0) >= (o[2] || 0);
      }
      getLoadOrder() {
        return [...this.loadOrder];
      }
      getDependencyGraph() {
        return { ...this.dependencyGraph };
      }
      getDependencies(e) {
        return this.dependencyGraph[e] || [];
      }
      hasDependencies(e) {
        let r = this.dependencyGraph[e];
        return r !== void 0 && r.length > 0;
      }
      getDependents(e) {
        let r = [];
        for (let [n, o] of Object.entries(this.dependencyGraph)) o.some((s) => s.name === e) && r.push(n);
        return r;
      }
      validateDependencies(e) {
        let r = [],
          n = [];
        this.buildDependencyGraph(e);
        for (let [o, s] of Object.entries(this.dependencyGraph))
          for (let a of s) {
            let u = e.get(a.name);
            if (!u) {
              a.optional
                ? n.push(`Optional dependency ${a.name} for plugin ${o} is not available`)
                : r.push(`Plugin ${o} requires ${a.name} but it is not loaded`);
              continue;
            }
            if (a.version) {
              let c = u.config.version || "0.0.0";
              this.isVersionCompatible(c, a.version) ||
                r.push(`Plugin ${o} requires ${a.name} version ${a.version} but found ${c}`);
            }
          }
        return { valid: r.length === 0, errors: r, warnings: n };
      }
    };
  });
var B1i = {};
Wi(B1i, { ExtensionManager: () => LS });
import * as Av from "fs/promises";
import * as BS from "path";
import * as ume from "os";
var LS,
  rpr = j(() => {
    "use strict";
    Xct();
    tpr();
    N1i();
    P1i();
    LS = class {
      pluginLoader;
      pluginRegistrar = null;
      pluginDependencyManager;
      loadedPlugins;
      workspaceRoot;
      iflowVersion;
      pluginWatcher = null;
      hotReloadEnabled = !1;
      constructor(e, r, n = !0) {
        let o = BS.join(ume.homedir(), ".iflow", "cache", "plugins");
        ((this.pluginLoader = new a$(n ? { cacheDir: o, maxAge: 1440 * 60 * 1e3, enabled: !0 } : void 0)),
          (this.pluginDependencyManager = new elt()),
          (this.loadedPlugins = new Map()),
          (this.workspaceRoot = e),
          (this.iflowVersion = r));
      }
      setRegistries(e, r, n, o, s) {
        this.pluginRegistrar = new ame(e, r, n, o, s);
      }
      enableHotReload(e = 1e3) {
        if (this.hotReloadEnabled) {
          console.warn("Hot reload is already enabled");
          return;
        }
        ((this.pluginWatcher = new Zct({ debounceDelay: e })),
          this.pluginWatcher.onChange(async (r, n) => {
            try {
              let o = Array.from(this.loadedPlugins.values()).find((s) => s.pluginDir === r);
              o && (await this.reloadPlugin(o.config.name));
            } catch (o) {
              console.error("Failed to hot reload plugin:", o);
            }
          }));
        for (let [r, n] of this.loadedPlugins) this.pluginWatcher.watch(n.pluginDir, r);
        this.hotReloadEnabled = !0;
      }
      disableHotReload() {
        (this.pluginWatcher && (this.pluginWatcher.unwatchAll(), (this.pluginWatcher = null)),
          (this.hotReloadEnabled = !1));
      }
      async initialize() {
        (await this.pluginLoader.initialize(),
          await Promise.all([this.loadPluginsFromScope("user", !1), this.loadPluginsFromScope("project", !1)]));
        let e = this.pluginDependencyManager.validateDependencies(this.loadedPlugins);
        for (let r of e.warnings) console.warn(r);
        if (!e.valid) {
          console.error("Plugin dependency validation failed:");
          for (let r of e.errors) console.error(`  - ${r}`);
          throw new Error(`Plugin dependency validation failed with ${e.errors.length} error(s)`);
        }
        try {
          let r = this.pluginDependencyManager.resolveLoadOrder(this.loadedPlugins);
          if (this.pluginRegistrar)
            for (let n of r) {
              let o = this.loadedPlugins.get(n);
              if (o)
                try {
                  await this.pluginRegistrar.registerPlugin(o);
                } catch (s) {
                  console.error(`Failed to register plugin ${n}:`, s);
                }
            }
        } catch (r) {
          throw (console.error("Failed to resolve plugin load order:", r), r);
        }
      }
      async loadPluginsFromScope(e, r = !0) {
        let n = this.getPluginsDirectory(e);
        try {
          let o = await this.pluginLoader.scanPlugins(n);
          if (o.length === 0) return;
          let s = await Promise.allSettled(
            o.map((a) => this.pluginLoader.loadPlugin(a, this.workspaceRoot, this.iflowVersion, e)),
          );
          for (let a = 0; a < s.length; a++) {
            let u = s[a],
              c = o[a];
            if (u.status === "rejected") {
              console.error(`Failed to load plugin from ${c}:`, u.reason);
              continue;
            }
            let m = u.value;
            try {
              let d = this.loadedPlugins.get(m.config.name);
              (d
                ? this.shouldOverride(e, d.scope) &&
                  (r && this.pluginRegistrar && (await this.pluginRegistrar.unregisterPlugin(d)),
                  this.loadedPlugins.set(m.config.name, m),
                  r && this.pluginRegistrar && (await this.pluginRegistrar.registerPlugin(m)))
                : (this.loadedPlugins.set(m.config.name, m),
                  r && this.pluginRegistrar && (await this.pluginRegistrar.registerPlugin(m))),
                this.pluginWatcher && this.hotReloadEnabled && this.pluginWatcher.watch(m.pluginDir, m.config.name));
            } catch (d) {
              console.error(`Failed to register plugin ${m.config.name}:`, d);
            }
          }
        } catch {}
      }
      shouldOverride(e, r) {
        let n = { project: 4, user: 3, local: 2, managed: 1 };
        return n[e] > n[r];
      }
      getPluginsDirectory(e) {
        switch (e) {
          case "user":
            return BS.join(ume.homedir(), ".iflow", "plugins");
          case "project":
            return BS.join(this.workspaceRoot, ".iflow", "plugins");
          case "local":
            return BS.join(process.cwd(), ".iflow", "plugins");
          case "managed":
            return BS.join(ume.homedir(), ".iflow", "managed-plugins");
          default:
            throw new Error(`Unknown scope: ${e}`);
        }
      }
      async installPlugin(e, r, n = {}) {
        let o = n.scope || "user",
          s = this.getPluginsDirectory(o),
          a = BS.join(s, e);
        await Av.mkdir(s, { recursive: !0 });
        try {
          if (r.startsWith("http://") || r.startsWith("https://")) await this.installFromGit(r, a);
          else if (r.startsWith("npm:")) {
            let u = r.slice(4);
            await this.installFromNpm(u, a);
          } else await this.installFromLocal(r, a);
          await this.loadPluginsFromScope(o);
        } catch (u) {
          console.error(`Failed to install plugin ${e}:`, u);
          try {
            await Av.rm(a, { recursive: !0, force: !0 });
          } catch {}
          throw u;
        }
      }
      async installFromGit(e, r) {
        let { spawn: n } = await import("child_process");
        return new Promise((o, s) => {
          let a = n("git", ["clone", e, r], { stdio: "inherit" });
          (a.on("close", (u) => {
            u === 0 ? o() : s(new Error(`Git clone failed with code ${u}`));
          }),
            a.on("error", (u) => {
              s(u);
            }));
        });
      }
      async installFromNpm(e, r) {
        let { spawn: n } = await import("child_process"),
          o = BS.join(ume.tmpdir(), `iflow-plugin-${Date.now()}`);
        await Av.mkdir(o, { recursive: !0 });
        try {
          return new Promise((s, a) => {
            let u = n("npm", ["install", "--prefix", o, e], { stdio: "inherit" });
            (u.on("close", async (c) => {
              if (c === 0) {
                let m = BS.join(o, "node_modules", e);
                (await Av.cp(m, r, { recursive: !0 }), s());
              } else a(new Error(`NPM install failed with code ${c}`));
            }),
              u.on("error", (c) => {
                a(c);
              }));
          });
        } finally {
          await Av.rm(o, { recursive: !0, force: !0 });
        }
      }
      async installFromLocal(e, r) {
        let n = BS.resolve(e);
        try {
          await Av.access(n);
        } catch {
          throw new Error(`Source path does not exist: ${n}`);
        }
        await Av.cp(n, r, { recursive: !0 });
      }
      async uninstallPlugin(e, r = "user") {
        let n = this.loadedPlugins.get(e);
        if (!n) throw new Error(`Plugin ${e} not found`);
        if (n.scope !== r) throw new Error(`Plugin ${e} is installed in ${n.scope} scope, not ${r}`);
        (this.pluginRegistrar && (await this.pluginRegistrar.unregisterPlugin(n)),
          await Av.rm(n.pluginDir, { recursive: !0, force: !0 }),
          this.loadedPlugins.delete(e));
      }
      async enablePlugin(e) {
        let r = this.loadedPlugins.get(e);
        if (!r) throw new Error(`Plugin ${e} not found`);
        r.enabled || ((r.enabled = !0), this.pluginRegistrar && (await this.pluginRegistrar.registerPlugin(r)));
      }
      async disablePlugin(e) {
        let r = this.loadedPlugins.get(e);
        if (!r) throw new Error(`Plugin ${e} not found`);
        r.enabled && (this.pluginRegistrar && (await this.pluginRegistrar.unregisterPlugin(r)), (r.enabled = !1));
      }
      listPlugins() {
        return Array.from(this.loadedPlugins.values());
      }
      getPlugin(e) {
        return this.loadedPlugins.get(e);
      }
      getAllPlugins() {
        return Array.from(this.loadedPlugins.values());
      }
      getEnabledPlugins() {
        return this.listPlugins().filter((e) => e.enabled);
      }
      hasPlugin(e) {
        return this.loadedPlugins.has(e);
      }
      getPluginConfig(e) {
        return this.loadedPlugins.get(e)?.config;
      }
      async reload() {
        (this.loadedPlugins.clear(), await this.initialize());
      }
      async reloadPlugin(e) {
        let r = this.loadedPlugins.get(e);
        if (!r) throw new Error(`Plugin ${e} not found`);
        try {
          this.pluginRegistrar && (await this.pluginRegistrar.unregisterPlugin(r));
          let n = await this.pluginLoader.loadPlugin(r.pluginDir, this.workspaceRoot, this.iflowVersion, r.scope);
          (this.loadedPlugins.set(e, n),
            this.pluginRegistrar && (await this.pluginRegistrar.registerPlugin(n)),
            this.pluginWatcher && this.hotReloadEnabled && this.pluginWatcher.watch(n.pluginDir, e));
        } catch (n) {
          throw (console.error(`Failed to reload plugin ${e}:`, n), n);
        }
      }
      getPluginMcpConfigs() {
        return this.pluginRegistrar ? this.pluginRegistrar.getPluginMcpConfigs() : {};
      }
      getPluginHookManager() {
        if (!this.pluginRegistrar) throw new Error("Plugin registrar not initialized. Call setRegistries() first.");
        return this.pluginRegistrar.getPluginHookManager();
      }
      getPluginDependencies(e) {
        return this.pluginDependencyManager.getDependencies(e);
      }
      getPluginDependents(e) {
        return this.pluginDependencyManager.getDependents(e);
      }
      getDependencyGraph() {
        return this.pluginDependencyManager.getDependencyGraph();
      }
      getPluginLoadOrder() {
        return this.pluginDependencyManager.getLoadOrder();
      }
      canUnloadPlugin(e) {
        let r = this.pluginDependencyManager.getDependents(e);
        return r.length > 0
          ? { canUnload: !1, reason: `Cannot unload ${e} because it is required by: ${r.join(", ")}` }
          : { canUnload: !0 };
      }
      getStatistics() {
        let e = this.listPlugins(),
          r = {
            total: e.length,
            enabled: e.filter((n) => n.enabled).length,
            disabled: e.filter((n) => !n.enabled).length,
            byFormat: {},
            byScope: {},
          };
        for (let n of e) {
          let o = n.metadata.format;
          r.byFormat[o] = (r.byFormat[o] || 0) + 1;
          let s = n.scope;
          r.byScope[s] = (r.byScope[s] || 0) + 1;
        }
        return r;
      }
    };
  });
import * as tlt from "node:path";
import npr from "node:process";
function z4a() {
  return [ma.Name, cd.Name, cA.Name, Pm.Name, va.Name, Hp.Name, jf.Name, lA.Name, Wu.Name, u3.Name, qD.Name, Jf.Name];
}
var dn,
  eme,
  Tk,
  rlt,
  ASe,
  OM,
  ySe,
  Ag = j(() => {
    "use strict";
    UC();
    f0n();
    Njt();
    $M();
    FE();
    kWn();
    Yce();
    Zce();
    cU();
    kU();
    CY();
    pY();
    MCe();
    TS();
    jD();
    r0e();
    D0e();
    fci();
    xci();
    SY();
    hdr();
    Gdr();
    RO();
    xY();
    Ldr();
    Yat();
    Dci();
    Vdr();
    O4e();
    t1r();
    W1r();
    TO();
    ufr();
    Pa();
    n1i();
    UU();
    Sut();
    b6();
    xAe();
    s2e();
    M3e();
    fY();
    Wfr();
    T1i();
    Yfr();
    Dp();
    (function (t) {
      ((t.DEFAULT = "default"), (t.SMART = "smart"), (t.YOLO = "yolo"), (t.PLAN = "plan"));
    })(dn || (dn = {}));
    ((eme = { respectGitIgnore: !1, respectGeminiIgnore: !0 }),
      (Tk = { respectGitIgnore: !0, respectGeminiIgnore: !0 }),
      (rlt = !0),
      (ASe = class {
        command;
        args;
        env;
        cwd;
        url;
        httpUrl;
        headers;
        tcp;
        type;
        timeout;
        trust;
        description;
        includeTools;
        excludeTools;
        extensionName;
        oauth;
        authProviderType;
        disabled;
        constructor(e, r, n, o, s, a, u, c, m, d, f, p, h, g, b, A, y, E) {
          ((this.command = e),
            (this.args = r),
            (this.env = n),
            (this.cwd = o),
            (this.url = s),
            (this.httpUrl = a),
            (this.headers = u),
            (this.tcp = c),
            (this.type = m),
            (this.timeout = d),
            (this.trust = f),
            (this.description = p),
            (this.includeTools = h),
            (this.excludeTools = g),
            (this.extensionName = b),
            (this.oauth = A),
            (this.authProviderType = y),
            (this.disabled = E));
        }
      }));
    (function (t) {
      ((t.DYNAMIC_DISCOVERY = "dynamic_discovery"), (t.GOOGLE_CREDENTIALS = "google_credentials"));
    })(OM || (OM = {}));
    ySe = class t {
      apiKey;
      baseUrl;
      authType;
      searchApiKey;
      toolRegistry;
      promptRegistry;
      sessionId;
      fileSystemService;
      conversationId;
      contentGeneratorConfig;
      embeddingModel;
      sandbox;
      targetDir;
      workspaceContext;
      debugMode;
      question;
      fullContext;
      coreTools;
      excludeTools;
      toolDiscoveryCommand;
      toolCallCommand;
      mcpServerCommand;
      mcpServers;
      userMemory;
      geminiMdFileCount;
      geminiMdFilePaths;
      approvalMode;
      thinkingModeEnabled;
      smartApprovalConfig;
      showMemoryUsage;
      accessibility;
      telemetrySettings;
      usageStatisticsEnabled;
      systemReminderSettings;
      geminiClient;
      pendingHistoryRestore;
      fileFiltering;
      fileDiscoveryService = null;
      fileSearchInstance = void 0;
      gitService = void 0;
      checkpointing;
      checkpointingDisabledDueToGit = !1;
      maxCheckpoints;
      proxy;
      cwd;
      usageMode;
      multimodalHelper = null;
      bugCommand;
      model;
      extensionContextFilePaths;
      noBrowser;
      inFallbackMode = !1;
      maxSessionTurns;
      listExtensions;
      _extensions;
      _blockedMcpServers;
      flashFallbackHandler;
      quotaErrorOccurred = !1;
      summarizeToolOutput;
      experimentalAcp = !1;
      stream = !1;
      acpPort;
      extensionManager;
      lspManager;
      parallelTasksCount;
      agentCoreSystemPrompt;
      agentColor;
      hookManager;
      hookManagerEnabled;
      compressionTokenThreshold;
      lightCompressionTokenThreshold;
      useRipgrep;
      tokensLimit;
      outputTokensLimit;
      skipNextSpeakerCheck;
      skipLoopDetector;
      shellTimeout;
      temperature;
      topP;
      budgetMaxTokens;
      budgetTimeout;
      ideClient;
      historyManager;
      isNonInteractive;
      disableTelemetry;
      enableBuildInTask;
      cna;
      language;
      shouldUseNodePtyShell;
      shellExecutionConfig;
      hasIdeOnboardingBeenShown;
      bootAnimationShown;
      imageDescriptionSettings;
      useSmartEdit;
      lightWeightPlan;
      outputLimit;
      keepRecentMessagesCount;
      constructor(e) {
        ((this.apiKey = e.apiKey),
          (this.baseUrl = e.baseUrl),
          (this.authType = e.authType),
          (this.searchApiKey = e.searchApiKey),
          (this.cna = e.cna),
          (this.language = e.language),
          (this.sessionId = e.sessionId),
          (this.embeddingModel = e.embeddingModel ?? Die),
          (this.sandbox = e.sandbox),
          (this.targetDir = tlt.resolve(e.targetDir)),
          (this.fileSystemService = new fSe()),
          (this.workspaceContext = new Yct(this.targetDir, e.includeDirectories ?? [])),
          (this.debugMode = e.debugMode),
          (this.ideClient = dY.getInstance()),
          (this.question = e.question),
          (this.fullContext = e.fullContext ?? !1),
          (this.coreTools = e.coreTools),
          (this.excludeTools = e.excludeTools),
          (this.toolDiscoveryCommand = e.toolDiscoveryCommand),
          (this.toolCallCommand = e.toolCallCommand),
          (this.mcpServerCommand = e.mcpServerCommand),
          (this.mcpServers = e.mcpServers),
          (this.userMemory = e.userMemory ?? ""),
          (this.geminiMdFileCount = e.geminiMdFileCount ?? 0),
          (this.geminiMdFilePaths = e.geminiMdFilePaths ?? []),
          (this.approvalMode = e.approvalMode ?? dn.DEFAULT),
          (this.thinkingModeEnabled = e.thinkingModeEnabled ?? rlt),
          (this.smartApprovalConfig = {
            whitelistEnabled: e.smartApprovalConfig?.whitelistEnabled ?? !0,
            blacklistEnabled: e.smartApprovalConfig?.blacklistEnabled ?? !0,
            aiReviewEnabled: e.smartApprovalConfig?.aiReviewEnabled ?? !0,
            aiReviewTimeout: e.smartApprovalConfig?.aiReviewTimeout ?? 1e4,
          }),
          (this.showMemoryUsage = e.showMemoryUsage ?? !1),
          (this.accessibility = e.accessibility ?? {}),
          (this.telemetrySettings = {
            enabled: e.telemetry?.enabled ?? !0,
            target: e.telemetry?.target ?? vut,
            otlpEndpoint: e.telemetry?.otlpEndpoint ?? Cut,
            logPrompts: e.telemetry?.logPrompts ?? !0,
            outfile: e.telemetry?.outfile,
          }),
          (this.usageStatisticsEnabled = e.usageStatisticsEnabled ?? !0),
          (this.systemReminderSettings = {
            enabled: e.systemReminder?.enabled ?? !0,
            eventTypes: e.systemReminder?.eventTypes ?? Object.values(pi),
            maxRemindersPerSession: e.systemReminder?.maxRemindersPerSession ?? 10,
            telemetryEnabled: e.systemReminder?.telemetryEnabled ?? !0,
          }),
          (this.fileFiltering = {
            respectGitIgnore: e.fileFiltering?.respectGitIgnore ?? !0,
            respectGeminiIgnore: e.fileFiltering?.respectGeminiIgnore ?? !0,
            enableRecursiveFileSearch: e.fileFiltering?.enableRecursiveFileSearch ?? !0,
          }),
          (this.checkpointing = e.checkpointing ?? !1),
          (this.maxCheckpoints = e.maxCheckpoints ?? 50),
          (this.proxy = e.proxy),
          (this.cwd = e.cwd ?? npr.cwd()),
          (this.usageMode = e.usageMode ?? "interactive"),
          (this.fileDiscoveryService = e.fileDiscoveryService ?? null),
          (this.bugCommand = e.bugCommand),
          (this.model = e.model),
          (this.extensionContextFilePaths = e.extensionContextFilePaths ?? []),
          (this.maxSessionTurns = e.maxSessionTurns ?? -1),
          (this.experimentalAcp = e.experimentalAcp ?? !1),
          (this.stream = e.stream ?? !1),
          (this.acpPort = e.acpPort),
          (this.listExtensions = e.listExtensions ?? !1),
          (this._extensions = e.extensions ?? []),
          (this._blockedMcpServers = e.blockedMcpServers ?? []),
          (this.noBrowser = e.noBrowser ?? !1),
          (this.summarizeToolOutput = e.summarizeToolOutput),
          (this.parallelTasksCount = e.parallelTasksCount ?? 1),
          (this.hookManagerEnabled = e.hookManager !== !1),
          (this.compressionTokenThreshold = e.compressionTokenThreshold ?? 0.8),
          (this.lightCompressionTokenThreshold = e.lightCompressionTokenThreshold ?? 0.6),
          (this.useRipgrep = e.useRipgrep ?? !0),
          (this.budgetMaxTokens = e.maxTokens),
          (this.budgetTimeout = e.timeout),
          (this.tokensLimit = e.tokensLimit),
          (this.outputTokensLimit = e.outputTokensLimit),
          (this.skipNextSpeakerCheck = e.skipNextSpeakerCheck ?? !0),
          (this.skipLoopDetector = e.skipLoopDetector ?? !1),
          (this.shellTimeout = e.shellTimeout ?? 120 * 1e3),
          (this.temperature = e.temperature ?? 0.6),
          (this.topP = e.topP ?? 1),
          (this.historyManager = e.historyManager),
          (this.isNonInteractive = e.isNonInteractive ?? !1),
          (this.disableTelemetry = e.disableTelemetry ?? !1),
          (this.enableBuildInTask = e.enableBuildInTask ?? "true"),
          (this.shouldUseNodePtyShell = e.shouldUseNodePtyShell ?? !0),
          (this.imageDescriptionSettings = {
            enabled: e.imageDescription?.enabled ?? !0,
            fallbackToBase64: e.imageDescription?.fallbackToBase64 ?? !0,
            cacheEnabled: e.imageDescription?.cacheEnabled ?? !0,
            maxImageSize: e.imageDescription?.maxImageSize ?? 10,
            supportedFormats: e.imageDescription?.supportedFormats ?? [
              "png",
              "jpg",
              "jpeg",
              "gif",
              "webp",
              "svg",
              "bmp",
            ],
          }),
          (this.shellExecutionConfig = e.shellExecutionConfig ?? {}),
          (this.hasIdeOnboardingBeenShown = e.hasIdeOnboardingBeenShown ?? {}),
          (this.bootAnimationShown = e.bootAnimationShown ?? !1),
          (this.useSmartEdit = e.useSmartEdit ?? !0),
          (this.lightWeightPlan = e.lightWeightPlan ?? !1),
          (this.outputLimit = e.outputLimit ?? !0),
          (this.keepRecentMessagesCount = e.keepRecentMessagesCount ?? 10),
          e.contextFileName && Jce(e.contextFileName),
          this.telemetrySettings.enabled && DAe(this),
          this.getUsageStatisticsEnabled()
            ? Ip.getInstance(this)?.logStartSessionEvent(new Vne(this))
            : console.log("Data collection is disabled."));
      }
      async initialize() {
        if ((this.getFileService(), this.getCheckpointingEnabled()))
          try {
            w0()
              ? await this.getGitService()
              : ((this.checkpointing = !1),
                (this.checkpointingDisabledDueToGit = !0),
                console.warn(
                  "\u26A0\uFE0F  Git \u672A\u5B89\u88C5\uFF0C\u68C0\u67E5\u70B9\u529F\u80FD\u5DF2\u81EA\u52A8\u7981\u7528\u3002",
                ));
          } catch (e) {
            ((this.checkpointing = !1),
              (this.checkpointingDisabledDueToGit = !0),
              console.warn(
                `\u26A0\uFE0F  \u68C0\u67E5\u70B9\u529F\u80FD\u521D\u59CB\u5316\u5931\u8D25: ${e}\u3002\u68C0\u67E5\u70B9\u529F\u80FD\u5DF2\u7981\u7528\u3002`,
              ));
          }
        ((this.promptRegistry = new Qqe()),
          (this.lspManager = new H0e(this.getProjectRoot())),
          (this.toolRegistry = await this.createToolRegistry()),
          this.hookManagerEnabled && (this.hookManager = new ime({}, this.toolRegistry)));
        try {
          let { ExtensionManager: e } = await Promise.resolve().then(() => (rpr(), B1i)),
            { SkillRegistry: r } = await Promise.resolve().then(() => (F4e(), Qdr)),
            { AgentRegistry: n } = await Promise.resolve().then(() => (P4e(), aci)),
            { PluginHookManager: o } = await Promise.resolve().then(() => (zct(), x1i)),
            s = new e(this.getProjectRoot(), "0.5.5"),
            a = new r(this.getProjectRoot()),
            u = new n(this.getProjectRoot(), this),
            c = new o();
          (s.setRegistries(this.toolRegistry, a, u, this.lspManager, c),
            await s.initialize(),
            (this.extensionManager = s));
        } catch (e) {
          console.debug("Plugin system initialization skipped:", e);
        }
      }
      async refreshAuth(e, r, n) {
        if (this.contentGeneratorConfig?.authType === Kt.LOGIN_WITH_IFLOW && e !== Kt.LOGIN_WITH_IFLOW) {
          let { clearCachedCredentialFile: s } = await Promise.resolve().then(() => (OG(), gEt));
          await s();
        }
        let o = r?.modelName || this.model;
        if (
          (this.setModel(o),
          (this.contentGeneratorConfig = await KOt(this, e, r)),
          r?.modelName && r.modelName !== this.model && (this.model = r.modelName),
          r?.searchApiKey && (this.searchApiKey = r.searchApiKey),
          this.geminiClient && this.geminiClient.isInitialized())
        ) {
          let s = this.geminiClient.getHistory();
          this.setPendingHistoryRestore(s);
        }
        ((this.geminiClient = new tN(this)),
          await this.geminiClient.initialize(this.contentGeneratorConfig, n),
          (this.inFallbackMode = !1),
          this.telemetrySettings.enabled && this.contentGeneratorConfig && dGe(this));
      }
      getSessionId() {
        return this.sessionId;
      }
      getCna() {
        return this.cna;
      }
      getLanguage() {
        return this.language;
      }
      setSessionId(e) {
        this.sessionId = e;
      }
      getConversationId() {
        return this.conversationId;
      }
      setConversationId(e) {
        this.conversationId = e;
      }
      getContentGeneratorConfig() {
        return this.contentGeneratorConfig;
      }
      getModel() {
        return this.contentGeneratorConfig?.model || this.model;
      }
      setModel(e) {
        this.contentGeneratorConfig && (this.contentGeneratorConfig.model = e);
      }
      getUsageMode() {
        return this.usageMode;
      }
      setUsageMode(e) {
        this.usageMode = e;
      }
      getLightWeightPlan() {
        return this.lightWeightPlan;
      }
      getFileSystemService() {
        return this.fileSystemService;
      }
      setFileSystemService(e) {
        this.fileSystemService = e;
      }
      async setIdeModeAndSyncConnection(e) {
        if (!this.isNonInteractive)
          if (e) {
            let { detectIde: r } = await Promise.resolve().then(() => (IU(), lii));
            r() && (await this.ideClient.connect());
          } else await this.ideClient.disconnect();
      }
      getIdeClient() {
        return this.ideClient;
      }
      isInFallbackMode() {
        return this.inFallbackMode;
      }
      setFallbackMode(e) {
        this.inFallbackMode = e;
      }
      setFlashFallbackHandler(e) {
        this.flashFallbackHandler = e;
      }
      getMaxSessionTurns() {
        return this.maxSessionTurns;
      }
      getBudgetMaxTokens() {
        return this.budgetMaxTokens;
      }
      getBudgetTimeout() {
        return this.budgetTimeout;
      }
      setQuotaErrorOccurred(e) {
        this.quotaErrorOccurred = e;
      }
      getQuotaErrorOccurred() {
        return this.quotaErrorOccurred;
      }
      isMultimodalEnabled() {
        return !0;
      }
      getMultimodalModelName() {
        if (this.isIFlowService()) return "qwen3-vl-plus";
      }
      getEmbeddingModel() {
        return this.embeddingModel;
      }
      getCompressionTokenThreshold() {
        return this.compressionTokenThreshold;
      }
      getLightCompressionTokenThreshold() {
        return this.lightCompressionTokenThreshold;
      }
      getHistoryManager() {
        return this.historyManager;
      }
      getTokensLimit() {
        return this.tokensLimit;
      }
      getOutputTokensLimit() {
        return this.outputTokensLimit;
      }
      getSandbox() {
        return this.sandbox;
      }
      isRestrictiveSandbox() {
        let e = this.getSandbox(),
          r = npr.env.SEATBELT_PROFILE;
        return !!e && e.command === "sandbox-exec" && !!r && r.startsWith("restrictive-");
      }
      getTargetDir() {
        return this.targetDir;
      }
      getProjectRoot() {
        return this.targetDir;
      }
      getWorkspaceContext() {
        return this.workspaceContext;
      }
      getToolRegistry() {
        return Promise.resolve(this.toolRegistry);
      }
      getPromptRegistry() {
        return this.promptRegistry;
      }
      async getSkillRegistry() {
        let { skillRegistry: e } = await Promise.resolve().then(() => (F4e(), Qdr));
        return (await e.scanAndRegister(), e);
      }
      getDebugMode() {
        return this.debugMode;
      }
      getQuestion() {
        return this.question;
      }
      getFullContext() {
        return this.fullContext;
      }
      getCoreTools() {
        return this.coreTools;
      }
      getExcludeTools() {
        return this.excludeTools;
      }
      getToolDiscoveryCommand() {
        return this.toolDiscoveryCommand;
      }
      getToolCallCommand() {
        return this.toolCallCommand;
      }
      getMcpServerCommand() {
        return this.mcpServerCommand;
      }
      getMcpServers() {
        return this.mcpServers;
      }
      addMcpServer(e, r) {
        (this.mcpServers || (this.mcpServers = {}), (this.mcpServers[e] = r));
      }
      removeMcpServer(e) {
        this.mcpServers && e in this.mcpServers && delete this.mcpServers[e];
      }
      getUserMemory() {
        return this.userMemory;
      }
      setUserMemory(e) {
        this.userMemory = e;
      }
      getGeminiMdFileCount() {
        return this.geminiMdFileCount;
      }
      setGeminiMdFileCount(e) {
        this.geminiMdFileCount = e;
      }
      getGeminiMdFilePaths() {
        return this.geminiMdFilePaths;
      }
      setGeminiMdFilePaths(e) {
        this.geminiMdFilePaths = e;
      }
      setGeminiClient(e) {
        this.geminiClient = e;
      }
      getApprovalMode() {
        return this.approvalMode;
      }
      setApprovalMode(e) {
        this.approvalMode = e;
        try {
          pGe(this, e);
        } catch {}
      }
      getThinkingModeEnabled() {
        return this.thinkingModeEnabled;
      }
      setThinkingModeEnabled(e) {
        this.thinkingModeEnabled = e;
      }
      getSmartApprovalConfig() {
        return this.smartApprovalConfig;
      }
      getShowMemoryUsage() {
        return this.showMemoryUsage;
      }
      getAccessibility() {
        return this.accessibility;
      }
      getTelemetryEnabled() {
        return this.telemetrySettings.enabled ?? !0;
      }
      getTelemetryLogPromptsEnabled() {
        return this.telemetrySettings.logPrompts ?? !0;
      }
      getTelemetryOtlpEndpoint() {
        return this.telemetrySettings.otlpEndpoint ?? Cut;
      }
      getTelemetryTarget() {
        return this.telemetrySettings.target ?? vut;
      }
      getTelemetryOutfile() {
        return this.telemetrySettings.outfile;
      }
      getSystemReminderEnabled() {
        return this.systemReminderSettings.enabled;
      }
      getSystemReminderEventTypes() {
        return this.systemReminderSettings.eventTypes;
      }
      getSystemReminderMaxRemindersPerSession() {
        return this.systemReminderSettings.maxRemindersPerSession;
      }
      getSystemReminderTelemetryEnabled() {
        return this.systemReminderSettings.telemetryEnabled;
      }
      getGeminiClient() {
        return this.geminiClient;
      }
      setPendingHistoryRestore(e) {
        this.pendingHistoryRestore = e;
      }
      getPendingHistoryRestore() {
        return this.pendingHistoryRestore;
      }
      clearPendingHistoryRestore() {
        this.pendingHistoryRestore = void 0;
      }
      setExtensionManager(e) {
        this.extensionManager = e;
      }
      getExtensionManager() {
        return this.extensionManager;
      }
      getLspManager() {
        return this.lspManager;
      }
      getIFlowDir() {
        return tlt.join(this.targetDir, ui());
      }
      getProjectTempDir() {
        return Y5(this.getProjectRoot());
      }
      getEnableRecursiveFileSearch() {
        return this.fileFiltering.enableRecursiveFileSearch;
      }
      getFileFilteringRespectGitIgnore() {
        return this.fileFiltering.respectGitIgnore;
      }
      getFileFilteringRespectGeminiIgnore() {
        return this.fileFiltering.respectGeminiIgnore;
      }
      getFileFilteringOptions() {
        return {
          respectGitIgnore: this.fileFiltering.respectGitIgnore,
          respectGeminiIgnore: this.fileFiltering.respectGeminiIgnore,
        };
      }
      getImageDescriptionSettings() {
        return this.imageDescriptionSettings;
      }
      getCheckpointingEnabled() {
        return this.checkpointing;
      }
      getMaxCheckpoints() {
        return this.maxCheckpoints;
      }
      isCheckpointingDisabledDueToGit() {
        return this.checkpointingDisabledDueToGit;
      }
      getProxy() {
        return this.proxy;
      }
      getAuthType() {
        return this.contentGeneratorConfig?.authType ?? this.authType;
      }
      getApiKey() {
        return this.contentGeneratorConfig?.apiKey ?? this.apiKey;
      }
      getSearchApiKey() {
        return this.searchApiKey ?? this.contentGeneratorConfig?.apiKey;
      }
      getBaseUrl() {
        return this.contentGeneratorConfig?.baseUrl ?? this.baseUrl;
      }
      getMultimodalHelper() {
        if (!this.multimodalHelper) {
          let e = this.getApiKey(),
            r = this.getBaseUrl();
          if (!e || !r) return null;
          let n = this.getMultimodalModelName(),
            o = this.isIFlowService(),
            s = this.isAoneService();
          this.multimodalHelper = new _4(e, r, n, o, s);
        }
        return this.multimodalHelper;
      }
      getWorkingDir() {
        return this.cwd;
      }
      getBugCommand() {
        return this.bugCommand;
      }
      getFileService() {
        return (
          this.fileDiscoveryService || (this.fileDiscoveryService = new UY(this.targetDir)),
          this.fileDiscoveryService
        );
      }
      async getFileSearch() {
        if (!this.fileSearchInstance) {
          let e = {
            projectRoot: this.targetDir,
            ignoreDirs: [],
            useGitignore: this.fileFiltering.respectGitIgnore,
            useGeminiignore: this.fileFiltering.respectGeminiIgnore,
            cache: !0,
            cacheTtl: 60,
            enableRecursiveFileSearch: this.fileFiltering.enableRecursiveFileSearch,
            disableFuzzySearch: !1,
            maxDepth: void 0,
          };
          ((this.fileSearchInstance = Fct.create(e)), await this.fileSearchInstance.initialize());
        }
        return this.fileSearchInstance;
      }
      clearFileSearchCache() {
        this.fileSearchInstance = void 0;
      }
      getUsageStatisticsEnabled() {
        return this.usageStatisticsEnabled;
      }
      isIFlowService() {
        let e = this.getAuthType(),
          r = this.getBaseUrl();
        return (
          e === Kt.IFLOW || e === Kt.LOGIN_WITH_IFLOW || (r !== void 0 && r.toLowerCase().includes("apis.iflow.cn"))
        );
      }
      isAoneService() {
        let e = this.getAuthType();
        return e === Kt.AONE || e === Kt.LOGIN_WITH_AONE;
      }
      getExtensionContextFilePaths() {
        return this.extensionContextFilePaths;
      }
      getExperimentalAcp() {
        return this.experimentalAcp;
      }
      getStream() {
        return this.stream;
      }
      getAcpPort() {
        return this.acpPort;
      }
      getListExtensions() {
        return this.listExtensions;
      }
      getExtensions() {
        return this._extensions;
      }
      getBlockedMcpServers() {
        return this._blockedMcpServers;
      }
      getNoBrowser() {
        return this.noBrowser;
      }
      isBrowserLaunchSuppressed() {
        return this.getNoBrowser() || !fx();
      }
      getSummarizeToolOutputConfig() {
        return this.summarizeToolOutput;
      }
      getAgentCoreSystemPrompt() {
        return this.agentCoreSystemPrompt;
      }
      setAgentCoreSystemPrompt(e) {
        this.agentCoreSystemPrompt = e;
      }
      getAgentColor() {
        return this.agentColor;
      }
      setAgentColor(e) {
        this.agentColor = e;
      }
      hasAgentCoreSystemPrompt() {
        return this.agentCoreSystemPrompt !== void 0 && this.agentCoreSystemPrompt !== "";
      }
      async getGitService() {
        return (
          this.gitService || ((this.gitService = new gv(this.targetDir)), await this.gitService.initialize()),
          this.gitService
        );
      }
      getHookManager() {
        return this.hookManager;
      }
      getUseRipgrep() {
        return this.useRipgrep;
      }
      getSkipNextSpeakerCheck() {
        return this.skipNextSpeakerCheck;
      }
      getSkipLoopDetector() {
        return this.skipLoopDetector;
      }
      getShellTimeout() {
        return this.shellTimeout;
      }
      getTemperature() {
        return this.temperature;
      }
      getTopP() {
        return this.topP;
      }
      getDisableTelemetry() {
        return this.disableTelemetry;
      }
      getShouldUseNodePtyShell() {
        return this.shouldUseNodePtyShell;
      }
      getProcessMode() {
        let e = npr.env.IFLOW_PROCESS_MODE?.toUpperCase();
        return e === "DETACHED" ? "DETACHED" : "ATTACHED";
      }
      getShellExecutionConfig() {
        return { ...this.shellExecutionConfig, processMode: this.getProcessMode() };
      }
      getHasIdeOnboardingBeenShown(e) {
        return e ? (this.hasIdeOnboardingBeenShown[e] ?? !1) : this.hasIdeOnboardingBeenShown;
      }
      setHasIdeOnboardingBeenShown(e, r) {
        return (this.hasIdeOnboardingBeenShown[e] = r);
      }
      getBootAnimationShown() {
        return this.bootAnimationShown;
      }
      setBootAnimationShown(e) {
        this.bootAnimationShown = e;
      }
      getUseSmartEdit() {
        return this.useSmartEdit;
      }
      getOutputLimit() {
        return this.outputLimit;
      }
      getKeepRecentMessagesCount() {
        return this.keepRecentMessagesCount;
      }
      async refreshMemory() {
        let {
          memoryContent: e,
          fileCount: r,
          filePaths: n,
        } = await t$(
          this.getWorkingDir(),
          this.getDebugMode(),
          this.getFileService(),
          this.getExtensionContextFilePaths(),
        );
        return (this.setUserMemory(e), this.setGeminiMdFileCount(r), { memoryContent: e, fileCount: r, filePaths: n });
      }
      getAll() {
        return {
          sessionId: this.sessionId,
          embeddingModel: this.embeddingModel,
          sandbox: this.sandbox,
          targetDir: this.targetDir,
          debugMode: this.debugMode,
          question: this.question,
          fullContext: this.fullContext,
          coreTools: this.coreTools,
          excludeTools: this.excludeTools,
          toolDiscoveryCommand: this.toolDiscoveryCommand,
          toolCallCommand: this.toolCallCommand,
          mcpServerCommand: this.mcpServerCommand,
          mcpServers: this.mcpServers,
          userMemory: this.userMemory,
          geminiMdFileCount: this.geminiMdFileCount,
          approvalMode: this.approvalMode,
          thinkingModeEnabled: this.thinkingModeEnabled,
          showMemoryUsage: this.showMemoryUsage,
          contextFileName: void 0,
          accessibility: this.accessibility,
          telemetry: this.telemetrySettings,
          usageStatisticsEnabled: this.usageStatisticsEnabled,
          fileFiltering: this.fileFiltering,
          checkpointing: this.checkpointing,
          proxy: this.proxy,
          cwd: this.cwd,
          fileDiscoveryService: this.fileDiscoveryService,
          bugCommand: this.bugCommand,
          model: this.model,
          extensionContextFilePaths: this.extensionContextFilePaths,
          maxSessionTurns: this.maxSessionTurns,
          listExtensions: this.listExtensions,
          noBrowser: this.noBrowser,
          searchApiKey: this.searchApiKey,
          apiKey: this.apiKey,
          parallelTasksCount: this.parallelTasksCount,
          compressionTokenThreshold: this.compressionTokenThreshold,
          lightCompressionTokenThreshold: this.lightCompressionTokenThreshold,
          useRipgrep: this.useRipgrep,
          useSmartEdit: this.useSmartEdit,
          skipNextSpeakerCheck: this.skipNextSpeakerCheck,
          skipLoopDetector: this.skipLoopDetector,
          shellTimeout: this.shellTimeout,
          temperature: this.temperature,
          topP: this.topP,
          disableTelemetry: this.disableTelemetry,
          enableBuildInTask: this.enableBuildInTask,
          lightWeightPlan: this.lightWeightPlan,
          stream: this.stream,
        };
      }
      async createToolRegistry() {
        let e = new S9e(this),
          r = (n, ...o) => {
            let s = n.name,
              a = n.Name || s,
              u = this.getCoreTools(),
              c = this.getExcludeTools(),
              m = !1;
            if (
              (u === void 0
                ? (m = !0)
                : (m = u.some((d) => d === s || d === a || d.startsWith(`${s}(`) || d.startsWith(`${a}(`))),
              (c?.includes(s) || c?.includes(a)) && (m = !1),
              m)
            ) {
              let d = new n(...o);
              e.registerTool(d);
            }
          };
        return (
          r(jf, this),
          r(ma, this),
          r(Ynt, this),
          this.getUseRipgrep() ? r(lA, this) : r(H6, this),
          r(cd, this),
          this.getUseSmartEdit() ? r(Gut, this) : r(Fd, this),
          r(x0, this),
          r($ut, this),
          r(qD, this),
          r(wS, this),
          r(Wu, this),
          r(ZO, this),
          r(cA),
          bB() === "aone" ? r(j0e, this) : r(u3, this),
          r(va, this),
          r(Pm, this),
          r(Pl, this),
          r(Hp),
          r(Jf, this),
          r(U4e, this),
          this.lspManager &&
            (r(Vut, this, this.lspManager), r(Wut, this, this.lspManager), r(zut, this, this.lspManager)),
          await e.discoverAllTools(this.isNonInteractive),
          e
        );
      }
      async clone() {
        let e = this.getAll(),
          r = {
            authType: e.authType,
            apiKey: e.apiKey,
            baseUrl: e.baseUrl,
            searchApiKey: e.searchApiKey,
            sessionId: e.sessionId,
            embeddingModel: e.embeddingModel,
            sandbox: e.sandbox ? { ...e.sandbox } : void 0,
            targetDir: e.targetDir,
            debugMode: e.debugMode,
            question: e.question,
            fullContext: e.fullContext,
            coreTools: e.coreTools ? [...e.coreTools] : void 0,
            excludeTools: e.excludeTools ? [...e.excludeTools] : void 0,
            toolDiscoveryCommand: e.toolDiscoveryCommand,
            toolCallCommand: e.toolCallCommand,
            mcpServerCommand: e.mcpServerCommand,
            mcpServers: e.mcpServers ? JSON.parse(JSON.stringify(e.mcpServers)) : void 0,
            userMemory: e.userMemory,
            geminiMdFileCount: e.geminiMdFileCount,
            approvalMode: e.approvalMode,
            showMemoryUsage: e.showMemoryUsage,
            contextFileName: e.contextFileName,
            accessibility: e.accessibility ? { ...e.accessibility } : void 0,
            telemetry: e.telemetry ? { ...e.telemetry } : void 0,
            usageStatisticsEnabled: e.usageStatisticsEnabled,
            fileFiltering: e.fileFiltering ? { ...e.fileFiltering } : void 0,
            checkpointing: e.checkpointing,
            proxy: e.proxy,
            cwd: e.cwd,
            fileDiscoveryService: e.fileDiscoveryService,
            bugCommand: e.bugCommand ? { ...e.bugCommand } : void 0,
            model: e.model,
            extensionContextFilePaths: e.extensionContextFilePaths ? [...e.extensionContextFilePaths] : [],
            maxSessionTurns: e.maxSessionTurns,
            experimentalAcp: e.experimentalAcp,
            listExtensions: e.listExtensions,
            extensions: this.getExtensions() ? this.getExtensions().map((o) => ({ ...o })) : [],
            blockedMcpServers: this.getBlockedMcpServers() ? this.getBlockedMcpServers().map((o) => ({ ...o })) : [],
            noBrowser: e.noBrowser,
            summarizeToolOutput: this.getSummarizeToolOutputConfig()
              ? JSON.parse(JSON.stringify(this.getSummarizeToolOutputConfig()))
              : void 0,
            parallelTasksCount: e.parallelTasksCount,
            ideClient: this.getIdeClient(),
            compressionTokenThreshold: e.compressionTokenThreshold,
            lightCompressionTokenThreshold: e.lightCompressionTokenThreshold,
            useRipgrep: e.useRipgrep,
            skipNextSpeakerCheck: e.skipNextSpeakerCheck,
            skipLoopDetector: e.skipLoopDetector,
            shellTimeout: e.shellTimeout,
            temperature: e.temperature,
            topP: e.topP,
            disableTelemetry: e.disableTelemetry,
            lightWeightPlan: e.lightWeightPlan,
            keepRecentMessagesCount: e.keepRecentMessagesCount,
            stream: e.stream,
          },
          n = new t(r);
        if ((await n.initialize(), this.getContentGeneratorConfig()))
          try {
            (n.setModel(this.model),
              (n.contentGeneratorConfig = this.contentGeneratorConfig),
              (n.searchApiKey = this.searchApiKey),
              (n.inFallbackMode = !1));
          } catch (o) {
            console.warn("Failed to clone auth configuration:", o);
          }
        return (n.setFallbackMode(this.isInFallbackMode()), n.setQuotaErrorOccurred(this.getQuotaErrorOccurred()), n);
      }
    };
  });
import L1i from "node:path";
import { promises as pN } from "node:fs";
var Y4a,
  cme,
  hN,
  M1i = j(() => {
    "use strict";
    Pa();
    Y4a = "logs.json";
    (function (t) {
      t.USER = "user";
    })(cme || (cme = {}));
    hN = class {
      iFlowDir;
      logFilePath;
      sessionId;
      messageId = 0;
      initialized = !1;
      logs = [];
      constructor(e) {
        this.sessionId = e;
      }
      async _readLogFile() {
        if (!this.logFilePath) throw new Error("Log file path not set during read attempt.");
        try {
          let e = await pN.readFile(this.logFilePath, "utf-8"),
            r = JSON.parse(e);
          return Array.isArray(r)
            ? r.filter(
                (n) =>
                  typeof n.sessionId == "string" &&
                  typeof n.messageId == "number" &&
                  typeof n.timestamp == "string" &&
                  typeof n.type == "string" &&
                  typeof n.message == "string",
              )
            : (console.debug(`Log file at ${this.logFilePath} is not a valid JSON array. Starting with empty logs.`),
              await this._backupCorruptedLogFile("malformed_array"),
              []);
        } catch (e) {
          if (e.code === "ENOENT") return [];
          if (e instanceof SyntaxError)
            return (
              console.debug(`Invalid JSON in log file ${this.logFilePath}. Backing up and starting fresh.`, e),
              await this._backupCorruptedLogFile("invalid_json"),
              []
            );
          throw (console.debug(`Failed to read or parse log file ${this.logFilePath}:`, e), e);
        }
      }
      async _backupCorruptedLogFile(e) {
        if (!this.logFilePath) return;
        let r = `${this.logFilePath}.${e}.${Date.now()}.bak`;
        try {
          (await pN.rename(this.logFilePath, r), console.debug(`Backed up corrupted log file to ${r}`));
        } catch {}
      }
      async initialize() {
        if (!this.initialized) {
          ((this.iFlowDir = Y5(process.cwd())), (this.logFilePath = L1i.join(this.iFlowDir, Y4a)));
          try {
            await pN.mkdir(this.iFlowDir, { recursive: !0 });
            let e = !0;
            try {
              await pN.access(this.logFilePath);
            } catch {
              e = !1;
            }
            ((this.logs = await this._readLogFile()),
              !e && this.logs.length === 0 && (await pN.writeFile(this.logFilePath, "[]", "utf-8")));
            let r = this.logs.filter((n) => n.sessionId === this.sessionId);
            ((this.messageId = r.length > 0 ? Math.max(...r.map((n) => n.messageId)) + 1 : 0), (this.initialized = !0));
          } catch (e) {
            (console.error("Failed to initialize logger:", e), (this.initialized = !1));
          }
        }
      }
      async _updateLogFile(e) {
        if (!this.logFilePath)
          throw (
            console.debug("Log file path not set. Cannot persist log entry."),
            new Error("Log file path not set during update attempt.")
          );
        let r;
        try {
          r = await this._readLogFile();
        } catch (a) {
          throw (console.debug("Critical error reading log file before append:", a), a);
        }
        let n = r.filter((a) => a.sessionId === e.sessionId),
          o = n.length > 0 ? Math.max(...n.map((a) => a.messageId)) + 1 : 0;
        if (
          ((e.messageId = o),
          r.some(
            (a) =>
              a.sessionId === e.sessionId &&
              a.messageId === e.messageId &&
              a.timestamp === e.timestamp &&
              a.message === e.message,
          ))
        )
          return (
            console.debug(`Duplicate log entry detected and skipped: session ${e.sessionId}, messageId ${e.messageId}`),
            (this.logs = r),
            null
          );
        r.push(e);
        try {
          return (await pN.writeFile(this.logFilePath, JSON.stringify(r, null, 2), "utf-8"), (this.logs = r), e);
        } catch (a) {
          throw (console.debug("Error writing to log file:", a), a);
        }
      }
      async getPreviousUserMessages() {
        return this.initialized
          ? this.logs
              .filter((e) => e.type === cme.USER)
              .sort((e, r) => {
                let n = new Date(e.timestamp).getTime();
                return new Date(r.timestamp).getTime() - n;
              })
              .map((e) => e.message)
          : [];
      }
      async logMessage(e, r) {
        if (!this.initialized || this.sessionId === void 0) {
          console.debug("Logger not initialized or session ID missing. Cannot log message.");
          return;
        }
        let n = {
          sessionId: this.sessionId,
          messageId: this.messageId,
          type: e,
          message: r,
          timestamp: new Date().toISOString(),
        };
        try {
          let o = await this._updateLogFile(n);
          o && (this.messageId = o.messageId + 1);
        } catch {}
      }
      _checkpointPath(e) {
        if (!e.length) throw new Error("No checkpoint tag specified.");
        if (!this.iFlowDir) throw new Error("Checkpoint file path not set.");
        let r = e.replace(/[^a-zA-Z0-9-_]/g, "");
        return (r || (r = "default"), L1i.join(this.iFlowDir, `checkpoint-${r}.json`));
      }
      async saveCheckpoint(e, r) {
        if (!this.initialized) {
          console.error("Logger not initialized or checkpoint file path not set. Cannot save a checkpoint.");
          return;
        }
        let n = this._checkpointPath(r);
        try {
          await pN.writeFile(n, JSON.stringify(e, null, 2), "utf-8");
        } catch (o) {
          console.error("Error writing to checkpoint file:", o);
        }
      }
      async loadCheckpoint(e) {
        if (!this.initialized)
          return (console.error("Logger not initialized or checkpoint file path not set. Cannot load checkpoint."), []);
        let r = this._checkpointPath(e);
        try {
          let n = await pN.readFile(r, "utf-8"),
            o = JSON.parse(n);
          return Array.isArray(o)
            ? o
            : (console.warn(`Checkpoint file at ${r} is not a valid JSON array. Returning empty checkpoint.`), []);
        } catch (n) {
          return (console.error(`Failed to read or parse checkpoint file ${r}:`, n), []);
        }
      }
      async deleteCheckpoint(e) {
        if (!this.initialized || !this.iFlowDir)
          return (
            console.error("Logger not initialized or checkpoint file path not set. Cannot delete checkpoint."),
            !1
          );
        let r = this._checkpointPath(e);
        try {
          return (await pN.unlink(r), !0);
        } catch (n) {
          if (n.code === "ENOENT") return !1;
          throw (console.error(`Failed to delete checkpoint file ${r}:`, n), n);
        }
      }
      close() {
        ((this.initialized = !1),
          (this.logFilePath = void 0),
          (this.logs = []),
          (this.sessionId = void 0),
          (this.messageId = 0));
      }
    };
  });
function K4a(t) {
  return Ist(t, { verbose: !0 });
}
var F1i = j(() => {
  "use strict";
  nlr();
});
function U1i(t, e, r, n) {
  let o = e === Lr.HOOK_BLOCKED,
    u = `${o ? "\u{1F6A8} CRITICAL" : "\u26A0\uFE0F IMPORTANT"}: The tool "${t}" has ${o ? "BEEN BLOCKED" : "FAILED"}. `;
  switch (e) {
    case Lr.FILE_NOT_FOUND:
      u += "The file or directory does not exist. ";
      break;
    case Lr.PERMISSION_DENIED:
      u += "You do not have permission to access this resource. ";
      break;
    case Lr.HOOK_BLOCKED:
      u += "The operation was blocked by a user-configured hook. ";
      break;
    case Lr.EXECUTION_FAILED:
      u += "The command execution failed. ";
      break;
    case Lr.INVALID_TOOL_PARAMS:
      u += "The parameters provided were invalid. ";
      break;
    case Lr.FILE_WRITE_FAILURE:
      u += "Failed to write to the file. ";
      break;
    case Lr.READ_CONTENT_FAILURE:
      u += "Failed to read the file content. ";
      break;
    default:
      u += "An error occurred during execution. ";
  }
  return (
    (u += `Error: "${r}". `),
    (u += `

\u26A0\uFE0F This operation DID NOT succeed. `),
    (u += "DO NOT proceed as if it was successful. "),
    n &&
      (u += `

\u{1F6A8} CRITICAL: ${n} `),
    (u += `

You should:
`),
    (u += `1. Acknowledge this failure to the user
`),
    (u += `2. Determine if you can retry with different parameters
`),
    (u += `3. If the task cannot be completed, mark it as failed (\u274C)
`),
    (u += "4. Ask the user for guidance if necessary"),
    {
      content: u,
      isMeta: !0,
      eventType: pi.ERROR_OCCURRED,
      uuid: J4a(),
      timestamp: new Date().toISOString(),
      position: "after",
      type: "single",
    }
  );
}
function J4a() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
    let e = (Math.random() * 16) | 0;
    return (t === "x" ? e : (e & 3) | 8).toString(16);
  });
}
function $1i(t, e, r = 0) {
  return !!(
    [Lr.FILE_NOT_FOUND, Lr.PERMISSION_DENIED, Lr.PATH_NOT_IN_WORKSPACE, Lr.HOOK_BLOCKED].includes(t) ||
    ["write_file", "multi_edit", "edit", "run_shell_command"].includes(e) ||
    r >= 2
  );
}
var j1i = j(() => {
  "use strict";
  i0e();
  Bb();
});
async function _Se(t, e, r, n) {
  let o = r.getTool(e.name),
    s = Date.now(),
    a = t.getHookManager(),
    u = a ? new u9(t, a) : null;
  if (!o) {
    let c = new Error(`Tool "${e.name}" not found in registry.`),
      m = Date.now() - s;
    return (
      rE(t, {
        "event.name": "tool_call",
        "event.timestamp": new Date().toISOString(),
        function_name: e.name,
        function_args: JSON.stringify(e.args),
        duration_ms: m,
        success: !1,
        error: c.message,
        prompt_id: e.prompt_id,
      }),
      {
        callId: e.callId,
        responseParts: [{ functionResponse: { id: e.callId, name: e.name, response: { error: c.message } } }],
        resultDisplay: c.message,
        error: c,
        errorType: Lr.TOOL_NOT_REGISTERED,
      }
    );
  }
  try {
    if (u)
      try {
        if ((await u.executePreToolUseHooks(e.name, e.args, o.aliases || [])).blocked) {
          let g = new Error("Tool execution blocked by PreToolUse hook"),
            b = Date.now() - s;
          return (
            rE(t, {
              "event.name": "tool_call",
              "event.timestamp": new Date().toISOString(),
              function_name: e.name,
              function_args: JSON.stringify(e.args),
              duration_ms: b,
              success: !1,
              error: g.message,
              prompt_id: e.prompt_id,
            }),
            {
              callId: e.callId,
              responseParts: [{ functionResponse: { id: e.callId, name: e.name, response: { error: g.message } } }],
              resultDisplay: g.message,
              error: g,
              errorType: Lr.HOOK_BLOCKED,
            }
          );
        }
      } catch (h) {
        console.warn("PreToolUse hook execution failed:", h);
      }
    let c = n ?? new AbortController().signal,
      m = await o.execute(e.args, c),
      d = m.llmContent,
      f = m.returnDisplay,
      p = Date.now() - s;
    if (
      (rE(t, {
        "event.name": "tool_call",
        "event.timestamp": new Date().toISOString(),
        function_name: e.name,
        function_args: JSON.stringify(e.args),
        duration_ms: p,
        success: m.error === void 0,
        error: m.error === void 0 ? void 0 : m.error.message,
        error_type: m.error === void 0 ? void 0 : m.error.type,
        prompt_id: e.prompt_id,
      }),
      m.error === void 0)
    ) {
      let h = d,
        g = f;
      if (t.getGeminiClient() && t.getSessionId()) {
        let y = t.getGeminiClient().getChat();
        y && y.reminderManager && (h = y.reminderManager.injectIntoToolResult(d, t.getSessionId(), e.name, e.args));
      }
      if (u)
        try {
          let y = await u.executePostToolUseHooks(
            e.name,
            e.args,
            { success: !0, result: { llmContent: h, returnDisplay: g } },
            o.aliases || [],
          );
          y.modifiedResult &&
            (y.modifiedResult.llmContent !== void 0 && (h = y.modifiedResult.llmContent),
            y.modifiedResult.returnDisplay !== void 0 && (g = y.modifiedResult.returnDisplay));
        } catch (y) {
          console.warn("PostToolUse hook execution failed:", y);
        }
      let b = qU(e.name, e.callId, h, m.agentId),
        A = { callId: e.callId, responseParts: b, resultDisplay: g, error: void 0, errorType: void 0 };
      return (ipr(t, o, e, m, s, !0), A);
    } else {
      let h = qU(e.name, e.callId, d, m.agentId),
        g = {
          callId: e.callId,
          responseParts: h,
          resultDisplay: f,
          error: new Error(m.error.message),
          errorType: m.error.type,
        };
      if (u)
        try {
          await u.executePostToolUseHooks(
            e.name,
            e.args,
            { success: !1, result: d, error: m.error.message },
            o.aliases || [],
          );
        } catch (b) {
          console.warn("PostToolUse hook execution failed for error case:", b);
        }
      if ((ipr(t, o, e, m, s, !1, new Error(m.error.message)), m.error.type && $1i(m.error.type, o.name))) {
        let b = U1i(o.name, m.error.type, m.error.message),
          A = t.getGeminiClient();
        A &&
          A.emitReminderEvent(pi.ERROR_OCCURRED, t.getSessionId(), {
            toolName: o.name,
            errorType: m.error.type,
            errorMessage: m.error.message,
            reminder: b,
          });
      }
      return g;
    }
  } catch (c) {
    let m = c instanceof Error ? c : new Error(String(c)),
      d = Date.now() - s;
    return (
      rE(t, {
        "event.name": "tool_call",
        "event.timestamp": new Date().toISOString(),
        function_name: e.name,
        function_args: JSON.stringify(e.args),
        duration_ms: d,
        success: !1,
        error: m.message,
        error_type: Lr.UNHANDLED_EXCEPTION,
        prompt_id: e.prompt_id,
      }),
      o && ipr(t, o, e, void 0, s, !1, m),
      {
        callId: e.callId,
        responseParts: [{ functionResponse: { id: e.callId, name: e.name, response: { error: m.message } } }],
        resultDisplay: m.message,
        error: m,
        errorType: Lr.UNHANDLED_EXCEPTION,
      }
    );
  }
}
function ipr(t, e, r, n, o, s = !0, a) {
  if (!(!t.getGeminiClient() || !t.getSessionId()))
    try {
      let u = {
        toolName: e.name,
        toolDisplayName: e.displayName,
        success: s,
        duration: o ? Date.now() - o : 0,
        callId: r.callId,
        args: r.args,
      };
      (n && (u.result = { summary: n.summary, returnDisplay: n.returnDisplay, llmContent: n.llmContent }),
        a && (u.error = { message: a.message, stack: a.stack }),
        (e.name === "TodoWrite" || e.name === "todo_write") && X4a(t, e, r, n, s),
        ["replace", "multi_edit", "write_file"].includes(e.name) && s && Z4a(t, e, r, n),
        e.name === "Task" && s && eSa(t, e, r, n));
    } catch (u) {
      console.warn("Failed to emit tool completion event:", u);
    }
}
function X4a(t, e, r, n, o = !0) {
  if (!(!t.getGeminiClient() || !t.getSessionId() || !o))
    try {
      let s = {
        content: r.args?.todos || [],
        itemCount: Array.isArray(r.args?.todos) ? r.args.todos.length : 0,
        operation: "update",
        timestamp: Date.now(),
      };
      t.getGeminiClient().emitReminderEvent(pi.TODO_UPDATED, t.getSessionId(), s, "high");
    } catch (s) {
      console.warn("Failed to emit todo update event:", s);
    }
}
function Z4a(t, e, r, n) {
  if (!(!t.getGeminiClient() || !t.getSessionId()))
    try {
      let o = "unknown file",
        s = r.args;
      typeof s?.file_path == "string"
        ? (o = s.file_path)
        : typeof s?.absolute_path == "string"
          ? (o = s.absolute_path)
          : typeof s?.path == "string" && (o = s.path);
      let a = { filePath: o, toolName: e.name, operation: "modify", timestamp: Date.now() };
      t.getGeminiClient().emitReminderEvent(pi.FILE_MODIFIED, t.getSessionId(), a, "medium");
    } catch (o) {
      console.warn("Failed to emit file modified event:", o);
    }
}
function eSa(t, e, r, n) {
  if (!(!t.getGeminiClient() || !t.getSessionId()))
    try {
      let o = r.args,
        s = {
          subagentType: typeof o?.subagent_type == "string" ? o.subagent_type : "unknown",
          description: typeof o?.description == "string" ? o.description : "",
          prompt: typeof o?.prompt == "string" ? o.prompt : "",
          status: "completed",
          timestamp: Date.now(),
        };
      t.getGeminiClient().emitReminderEvent(pi.SUBAGENT_STATUS, t.getSessionId(), s, "medium");
    } catch (o) {
      console.warn("Failed to emit subagent status event:", o);
    }
}
var Q1i = j(() => {
  "use strict";
  Ot();
  tut();
  UU();
  n0e();
  j1i();
});
var eK,
  tK,
  G1i = j(() => {
    "use strict";
    (function (t) {
      ((t.MAX_TOKENS = "max_tokens_exceeded"), (t.TIMEOUT = "timeout_exceeded"));
    })(eK || (eK = {}));
    tK = class {
      maxTokens;
      timeoutSeconds;
      startTime;
      totalInputTokens = 0;
      totalOutputTokens = 0;
      timeoutHandle;
      isTimedOut = !1;
      constructor(e, r) {
        ((this.maxTokens = e),
          (this.timeoutSeconds = r),
          (this.startTime = Date.now()),
          this.timeoutSeconds &&
            this.timeoutSeconds > 0 &&
            (this.timeoutHandle = setTimeout(() => {
              this.isTimedOut = !0;
            }, this.timeoutSeconds * 1e3)));
      }
      updateTokenUsage(e, r) {
        ((this.totalInputTokens += e), (this.totalOutputTokens += r));
      }
      checkBudget() {
        if (this.isTimedOut) {
          let r = Math.floor((Date.now() - this.startTime) / 1e3);
          return {
            isExceeded: !0,
            reason: eK.TIMEOUT,
            details: { current: r, limit: this.timeoutSeconds, unit: "seconds" },
          };
        }
        let e = this.totalInputTokens + this.totalOutputTokens;
        return this.maxTokens && e >= this.maxTokens
          ? { isExceeded: !0, reason: eK.MAX_TOKENS, details: { current: e, limit: this.maxTokens, unit: "tokens" } }
          : { isExceeded: !1 };
      }
      getUsageStats() {
        return {
          totalInputTokens: this.totalInputTokens,
          totalOutputTokens: this.totalOutputTokens,
          totalTokens: this.totalInputTokens + this.totalOutputTokens,
          elapsedTimeMs: Date.now() - this.startTime,
        };
      }
      cleanup() {
        this.timeoutHandle && (clearTimeout(this.timeoutHandle), (this.timeoutHandle = void 0));
      }
      static formatExceededMessage(e) {
        if (!e.isExceeded || !e.details) return "";
        let { current: r, limit: n, unit: o } = e.details;
        switch (e.reason) {
          case eK.MAX_TOKENS:
            return `Maximum token usage reached (${r}/${n} ${o})`;
          case eK.TIMEOUT:
            return `Maximum execution time reached (${r}/${n} ${o})`;
          default:
            return "Budget limit exceeded";
        }
      }
    };
  });
import * as nlt from "child_process";
import * as lme from "process";
import * as ESe from "path";
import * as q1i from "fs";
import * as H1i from "os";
async function tSa() {
  try {
    if (lme.platform === "win32") {
      let o = nlt.execSync(`where.exe ${opr}`).toString().trim().split(/\r?\n/)[0];
      if (o) return o;
    } else return (nlt.execSync(`command -v ${opr}`, { stdio: "ignore" }), opr);
  } catch {}
  let t = [],
    e = lme.platform,
    r = H1i.homedir();
  e === "darwin"
    ? t.push(
        "/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code",
        ESe.join(r, "Library/Application Support/Code/bin/code"),
      )
    : e === "linux"
      ? t.push("/usr/share/code/bin/code", "/snap/bin/code", ESe.join(r, ".local/share/code/bin/code"))
      : e === "win32" &&
        t.push(
          ESe.join(lme.env.ProgramFiles || "C:\\Program Files", "Microsoft VS Code", "bin", "code.cmd"),
          ESe.join(r, "AppData", "Local", "Programs", "Microsoft VS Code", "bin", "code.cmd"),
        );
  for (let n of t) if (q1i.existsSync(n)) return n;
  return null;
}
function rSa(t) {
  switch (t) {
    case fi.VSCode:
      return new spr();
    default:
      return null;
  }
}
var opr,
  spr,
  V1i = j(() => {
    "use strict";
    IU();
    bi();
    opr = lme.platform === "win32" ? "code.cmd" : "code";
    spr = class {
      vsCodeCommand;
      constructor() {
        this.vsCodeCommand = tSa();
      }
      async install() {
        let e = await this.vsCodeCommand;
        if (!e) return { success: !1, message: I.t("ide.installer.vsCodeCliNotFound") };
        let r = `"${e}" --install-extension google.gemini-cli-vscode-ide-companion --force`;
        try {
          return (
            nlt.execSync(r, { stdio: "pipe" }),
            { success: !0, message: I.t("ide.installer.extensionInstallSuccess") }
          );
        } catch {
          return { success: !1, message: I.t("ide.installer.extensionInstallFailed") };
        }
      }
    };
  });
import { execSync as apr } from "child_process";
import { existsSync as upr } from "fs";
import { join as ilt, dirname as nSa, resolve as iSa } from "path";
import { fileURLToPath as oSa } from "url";
import * as olt from "os";
import { readdir as sSa, stat as z1i } from "fs/promises";
function mme(t) {
  return !t || typeof t != "string" ? !1 : !iSa(t).includes("..");
}
async function W1i(t) {
  try {
    let e = await z1i(t);
    return e.isFile() && (e.mode & parseInt("111", 8)) !== 0;
  } catch {
    return !1;
  }
}
async function cSa() {
  let t = olt.platform(),
    e = t === "win32" ? "where.exe code" : "which code";
  try {
    let r = apr(e, { stdio: "pipe", encoding: "utf8", timeout: 5e3 }).trim();
    if (r && mme(r)) return t === "win32" ? `"${r?.split(olt.EOL)[0]}"` : r;
  } catch {}
  switch (t) {
    case "darwin": {
      let r = ["/usr/local/bin/code", "/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code"];
      for (let n of r) if (mme(n) && (await W1i(n))) return `"${n}"`;
      return "code";
    }
    case "win32": {
      let n = [
        `C:\\Users\\${process.env.USERNAME || process.env.USER || ""}\\AppData\\Local\\Programs\\Microsoft VS Code\\bin\\code.cmd`,
        "C:\\Program Files\\Microsoft VS Code\\bin\\code.cmd",
        "C:\\Program Files (x86)\\Microsoft VS Code\\bin\\code.cmd",
      ];
      for (let o of n) if (mme(o) && upr(o)) return `"${o}"`;
      return "code";
    }
    case "linux": {
      let r = ["/usr/bin/code", "/usr/local/bin/code", "/opt/visual-studio-code/bin/code", "/snap/bin/code"];
      for (let n of r) if (mme(n) && (await W1i(n))) return `"${n}"`;
      return "code";
    }
    default:
      return "code";
  }
}
async function Y1i() {
  try {
    let t = [ilt(uSa, "..", "bundle"), ilt(process.cwd(), "bundle")].filter((a) => mme(a)),
      e = null;
    for (let a of t)
      try {
        if (upr(a) && (await z1i(a)).isDirectory()) {
          e = a;
          break;
        }
      } catch {
        continue;
      }
    if (!e) return;
    let r = await cSa();
    try {
      apr(`${r} --version`, { stdio: "ignore", timeout: 1e4 });
    } catch {
      return;
    }
    let n;
    try {
      n = await sSa(e);
    } catch {
      return;
    }
    let o = n
      .filter((a) => (!a || typeof a != "string" ? !1 : a.toLowerCase().endsWith(".vsix") && !a.includes("..")))
      .filter((a) => {
        let u = ilt(e, a);
        return mme(u) && upr(u);
      });
    if (o.length === 0) return;
    let s = 0;
    for (let a of o) {
      let u = ilt(e, a);
      try {
        (apr(`${r} --install-extension "${u}"`, { stdio: "inherit", timeout: 3e4 }), s++);
      } catch {}
    }
    if (s > 0) return !0;
  } catch {}
}
var aSa,
  uSa,
  K1i = j(() => {
    "use strict";
    ((aSa = oSa(import.meta.url)), (uSa = nSa(aSa)));
  });