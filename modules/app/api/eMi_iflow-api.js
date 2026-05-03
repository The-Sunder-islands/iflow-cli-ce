/**
 * @module eMi
 * @category app/api
 * @label iflow-api
 * @position 1832 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (eMi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Functions: Oru, kru, _8r, Zxe, b8r, y8r, Iru, Cru, Lru, h8r, Nru, g8r, wru, Sru, Rru
 * Features: esbuild module exports: eMi, CONTAINS iflow.cn API references, dotenv related, MCP server handling, telemetry/OTLP, agent/subagent
 * === End semantic info ===
 */


var eMi = T((Kxe) => {
  "use strict";
  Kxe.Parse = mlt();
  Kxe.ParseOne = lfi();
  Kxe.Extract = Jpi();
  Kxe.Open = ZLi();
});
import {
  existsSync as Mht,
  mkdirSync as tMi,
  createWriteStream as sru,
  statSync as aru,
  readdirSync as uru,
  createReadStream as nMi,
  unlinkSync as cru,
  rmSync as lru,
} from "fs";
import { join as fj, dirname as mru } from "path";
import { fileURLToPath as dru } from "url";
import * as s1e from "os";
import fru from "https";
import pru from "http";
import { createHash as hru } from "crypto";
import { pipeline as gru } from "stream/promises";
function Eru() {
  let t = s1e.platform(),
    e = s1e.homedir();
  switch (t) {
    case "darwin":
      return fj(e, "Library", "Application Support", "JetBrains");
    case "win32":
      return fj(e, "AppData", "Roaming", "JetBrains");
    case "linux":
      return fj(e, ".local", "share", "JetBrains");
    default:
      throw new Error(`Unsupported platform: ${t}`);
  }
}
function vru() {
  let t = Eru();
  if (!Mht(t)) return [];
  try {
    let e = uru(t)
      .filter((n) => rMi.some((o) => n.startsWith(o)))
      .map((n) => {
        let o = fj(t, n);
        try {
          let s = aru(o);
          return { path: o, mtime: s.mtime, name: n };
        } catch {
          return null;
        }
      })
      .filter((n) => n !== null)
      .sort((n, o) => o.mtime.getTime() - n.mtime.getTime());
    if (e.length === 0) return [];
    let r = {};
    return (
      e.forEach((n) => {
        let o = rMi.find((s) => n.name.startsWith(s));
        o && !r[o] && (r[o] = n);
      }),
      Object.values(r)
    );
  } catch {
    return [];
  }
}
async function Cru(t, e) {
  return new Promise((r, n) => {
    let o = sru(e);
    (t.startsWith("https:") ? fru : pru)
      .get(t, (a) => {
        if (a.statusCode !== 200) {
          n(new Error(`Failed to download plugin: ${a.statusCode}`));
          return;
        }
        gru(a, o).then(r).catch(n);
      })
      .on("error", (a) => {
        n(a);
      });
  });
}
async function Sru(t) {
  return new Promise((e, r) => {
    try {
      let n = hru("sha256"),
        o = nMi(t);
      (o.on("data", (s) => n.update(s)), o.on("end", () => e(n.digest("hex"))), o.on("error", r));
    } catch (n) {
      r(n);
    }
  });
}
async function wru(t, e) {
  return new Promise((r, n) => {
    nMi(t)
      .pipe((0, iMi.Extract)({ path: e }))
      .on("close", r)
      .on("error", (o) => n(o));
  });
}
async function oMi() {
  try {
    let t = vru();
    if (t.length === 0) return;
    let e = fj(s1e.tmpdir(), yru);
    if (!Mht(e))
      try {
        tMi(e, { recursive: !0 });
      } catch {
        return;
      }
    let r = `tstar-idea-plugin-${Date.now()}.zip`,
      n = fj(e, r);
    try {
      await Cru(bru, n);
      let o = await Sru(n);
      for (let s of t) {
        let a = fj(s.path, "plugins");
        if (!Mht(a))
          try {
            tMi(a, { recursive: !0 });
          } catch {
            continue;
          }
        let u = fj(a, Aru);
        if (Mht(u))
          try {
            lru(u, { recursive: !0, force: !0 });
          } catch {}
        try {
          await wru(n, a);
        } catch {}
      }
      try {
        cru(n);
      } catch {}
      return !0;
    } catch {}
  } catch {}
}
var iMi,
  bru,
  Aru,
  yru,
  rMi,
  _ru,
  _tl,
  sMi = j(() => {
    "use strict";
    iMi = Se(eMi(), 1);
    ((bru = "https://cloud.iflow.cn/iflow-cli/idea-plugin/iflow-idea-0.0.5.zip"),
      (Aru = "iflow-idea"),
      (yru = "tstar-cli-idea-plugin"),
      (rMi = [
        "IntelliJIdea",
        "IdeaIC",
        "PyCharm",
        "PyCharmCE",
        "GoLand",
        "WebStorm",
        "PhpStorm",
        "CLion",
        "RubyMine",
        "Rider",
        "AndroidStudio",
      ]),
      (_ru = dru(import.meta.url)),
      (_tl = mru(_ru)));
  });
async function h8r() {
  let t = o3();
  if (!t) return null;
  switch (t) {
    case fi.JetBrains:
      return { message: I.t("ide.installer.jetbrains"), ideType: t, wasInstalled: (await oMi()) ?? !1 };
    case fi.VSCode:
      return { message: I.t("ide.installer.vscode"), ideType: t, wasInstalled: (await Y1i()) ?? !1 };
    default:
      return { message: I.t("ide.installer.unsupportedIde", { ide: t }), ideType: t, wasInstalled: !1 };
  }
}
function g8r(t) {
  let e = o3();
  return e ? t.getHasIdeOnboardingBeenShown(e) : !1;
}
function b8r(t) {
  let e = o3();
  if (e) return (t.setHasIdeOnboardingBeenShown(e, !0), [e, !0]);
}
var aMi = j(() => {
  "use strict";
  IU();
  bi();
  K1i();
  sMi();
});
import * as rw from "fs/promises";
import * as A8r from "path";
var Jxe,
  uMi = j(() => {
    "use strict";
    Jxe = class {
      gitService;
      checkpointDir;
      constructor(e, r) {
        ((this.gitService = e), (this.checkpointDir = r));
      }
      async cleanupOldCheckpoints(e = 50) {
        try {
          (await this.cleanupJsonFiles(e), await this.gitService.cleanupOldCommits(0));
        } catch (r) {
          console.warn("Checkpoint cleanup failed:", r);
        }
      }
      async cleanupJsonFiles(e) {
        try {
          await rw.mkdir(this.checkpointDir, { recursive: !0 });
          let n = (await rw.readdir(this.checkpointDir)).filter((s) => s.endsWith(".json")).sort();
          if (n.length <= e) return;
          let o = n.slice(0, n.length - e);
          for (let s of o) await rw.unlink(A8r.join(this.checkpointDir, s));
          console.log(`JSON cleanup: deleted ${o.length} old checkpoint files`);
        } catch (r) {
          console.warn("JSON cleanup failed:", r);
        }
      }
      async getCheckpointCount() {
        try {
          return (
            await rw.mkdir(this.checkpointDir, { recursive: !0 }),
            (await rw.readdir(this.checkpointDir)).filter((r) => r.endsWith(".json")).length
          );
        } catch {
          return 0;
        }
      }
      async cleanupAllCheckpoints() {
        try {
          await rw.mkdir(this.checkpointDir, { recursive: !0 });
          let r = (await rw.readdir(this.checkpointDir)).filter((n) => n.endsWith(".json"));
          for (let n of r) await rw.unlink(A8r.join(this.checkpointDir, n));
          return r.length;
        } catch {
          return 0;
        }
      }
    };
  });
var cMi = j(() => {
  "use strict";
});
var lMi = j(() => {
  "use strict";
  cMi();
  BOt();
  Eqe();
});
var Xxe,
  mMi = j(() => {
    "use strict";
    n0e();
    Xxe = class {
      config;
      hookManager;
      toolHookService;
      constructor(e, r) {
        ((this.config = e), (this.hookManager = r), this.hookManager && (this.toolHookService = new u9(e, r)));
      }
      async executeUserPromptSubmitHooks(e) {
        if (!this.hookManager) return { blocked: !1 };
        try {
          let r = this.buildHookExecutionContext(),
            n = await this.hookManager.executeUserPromptSubmit(e, r);
          return n.some((s) => s.blocked || s.exitCode === 2)
            ? {
                blocked: !0,
                reason:
                  n.find((a) => a.blocked || a.exitCode === 2)?.stderr ||
                  n.find((a) => a.blocked || a.exitCode === 2)?.reason ||
                  "Prompt blocked by UserPromptSubmit hook",
              }
            : { blocked: !1 };
        } catch (r) {
          return (console.warn("UserPromptSubmit hook execution failed:", r), { blocked: !1 });
        }
      }
      async executeSessionStartHooks(e = "startup") {
        if (!this.hookManager) return null;
        try {
          let r = this.buildHookExecutionContext(),
            n = await this.hookManager.executeSessionStart(e, r),
            { SessionStartHook: o } = await Promise.resolve().then(() => (Vct(), b1i));
          return o.collectAdditionalContext(n) || null;
        } catch (r) {
          return (console.warn("SessionStart hook execution failed:", r), null);
        }
      }
      async executeSessionEndHooks(e = "other") {
        if (this.hookManager)
          try {
            let r = this.buildHookExecutionContext();
            await this.hookManager.executeSessionEnd(e, r);
          } catch (r) {
            console.warn("SessionEnd hook execution failed:", r);
          }
      }
      async executeSetUpEnvironmentHooks(e, r) {
        if (!this.hookManager) return e;
        try {
          let n = this.buildHookExecutionContext();
          return await this.hookManager.executeSetUpEnvironment(e, r, n);
        } catch (n) {
          return (console.warn("SetUpEnvironment hook execution failed:", n), e);
        }
      }
      async executeNotificationHooks(e) {
        if (!this.hookManager) return [];
        try {
          let r = this.buildHookExecutionContext(),
            n = await this.hookManager.executeNotification(e, r),
            { NotificationHook: o } = await Promise.resolve().then(() => (Gfr(), y1i)),
            s = o.collectDisplayMessages(n);
          return s ? [s] : [];
        } catch (r) {
          return (console.warn("Notification hook execution failed:", r), []);
        }
      }
      async executeSubagentStopHooks() {
        if (!this.hookManager) return { blocked: !1, messages: [] };
        try {
          let e = this.buildHookExecutionContext(),
            r = await this.hookManager.executeSubagentStop(e),
            n = r.some((s) => s.blocked),
            o = r
              .filter((s) => s.blocked)
              .map((s) => s.stderr)
              .filter((s) => s && s.trim().length > 0);
          return { blocked: n, messages: o };
        } catch (e) {
          return (console.warn("SubagentStop hook execution failed:", e), { blocked: !1, messages: [] });
        }
      }
      hasAnyHooks() {
        if (!this.hookManager) return !1;
        let e = this.hookManager.getStatus();
        return e.hasUserPromptSubmit || e.hasSessionStart || e.hasSessionEnd || e.hasNotification;
      }
      buildHookExecutionContext() {
        if (this.toolHookService) {
          let e = this.toolHookService.getTranscriptPath();
          return {
            sessionId: this.config.getSessionId() || "non-interactive",
            transcriptPath: e,
            cwd: process.cwd(),
            projectDir: this.config.getProjectRoot(),
          };
        }
        return {
          sessionId: "non-interactive",
          transcriptPath: "",
          cwd: process.cwd(),
          projectDir: this.config.getProjectRoot(),
        };
      }
      getToolHookService() {
        return this.toolHookService;
      }
    };
  });
function y8r(t, e) {
  let r = t.getPromptRegistry();
  return r ? r.getPromptsByServer(e) : [];
}
var dMi = j(() => {
  "use strict";
});
var fMi = j(() => {
  "use strict";
});
function Iru(t) {
  return Dru * Math.pow(2, t);
}
function Rru(t) {
  return new Promise((e) => setTimeout(e, t));
}
function kru(t) {
  let e = t.message.toLowerCase();
  return [
    "network error",
    "timeout",
    "connection",
    "parse",
    "json",
    "failed to parse",
    "invalid json",
    "response format",
    "service unavailable",
    "502",
    "503",
    "504",
    "temporarily unavailable",
  ].some((n) => e.includes(n));
}
async function Oru(t, e, r, n, o) {
  let s = new Error("Unknown error");
  for (let a = 0; a <= n; a++)
    try {
      if (r.aborted) throw new Error(I.t("agentConfigCreator.errors.generationCancelled"));
      if (o) {
        let m =
          a === 0
            ? I.t("agentConfigCreator.progress.generatingConfiguration")
            : `\u6B63\u5728\u91CD\u8BD5\u751F\u6210\u4EE3\u7406\u914D\u7F6E... (\u7B2C${a}/${n}\u6B21\u91CD\u8BD5)`;
        o(m);
      }
      let u = t.sendMessageStream([{ text: e }], r, "agent-config-generator"),
        c = "";
      for await (let m of u) {
        if (r.aborted) throw new Error(I.t("agentConfigCreator.errors.generationCancelled"));
        switch (m.type) {
          case As.Content:
            ((c += m.value), o && a === 0 && o(I.t("agentConfigCreator.progress.processingResponse")));
            break;
          case As.Error:
            throw new Error(I.t("agentConfigCreator.errors.generationFailed", { message: m.value.error.message }));
          case As.Finished:
            break;
          default:
            break;
        }
      }
      if (!c.trim()) throw new Error(I.t("agentConfigCreator.errors.noResponseReceived"));
      o && o(I.t("agentConfigCreator.progress.parsingConfiguration"));
      try {
        let m = c.trim();
        m = m.replace(/```json\\s*/g, "").replace(/```\\s*$/g, "");
        let d = m.indexOf("{"),
          f = m.lastIndexOf("}");
        (d !== -1 && f !== -1 && f > d && (m = m.substring(d, f + 1)), (m = m.trim()));
        let p = JSON.parse(m);
        if (!p.identifier || !p.whenToUse || !p.systemPrompt)
          throw new Error(I.t("agentConfigCreator.errors.missingRequiredFields"));
        if (!/^[a-z0-9-]+$/.test(p.identifier))
          throw new Error(I.t("agentConfigCreator.errors.invalidIdentifierFormat"));
        return (o && o(I.t("agentConfigCreator.progress.configurationGeneratedSuccessfully")), p);
      } catch (m) {
        let d = new Error(
          I.t("agentConfigCreator.errors.failedToParseJson", { error: m instanceof Error ? m.message : String(m) }),
        );
        throw (
          console.error("Failed to parse agent configuration JSON. Full response:", c),
          console.error("Parse error:", m),
          d
        );
      }
    } catch (u) {
      if (((s = u instanceof Error ? u : new Error(String(u))), r.aborted))
        throw new Error(I.t("agentConfigCreator.errors.generationCancelled"));
      if (!kru(s) || a >= n)
        throw (console.error(`Agent config generation failed (attempt ${a + 1}/${n + 1}):`, s.message), s);
      let c = Iru(a);
      (console.warn(`Agent config generation failed (attempt ${a + 1}/${n + 1}), retrying in ${c}ms:`, s.message),
        await Rru(c));
    }
  throw s;
}
async function Nru(t, e) {
  let { agentGoal: r, onProgress: n, signal: o, maxRetries: s = Tru } = e,
    a = await t.clone(),
    u = await a.getToolRegistry();
  ((u.tools = new Map()), a.setAgentCoreSystemPrompt(xru));
  let c = new tN(a),
    m = a.getContentGeneratorConfig();
  if (!m) throw new Error(I.t("agentConfigCreator.errors.contentGeneratorConfigNotAvailable"));
  await c.initialize(m);
  let d = `${r}`;
  try {
    return await Oru(c, d, o || new AbortController().signal, s, n);
  } catch (f) {
    throw o?.aborted
      ? new Error(I.t("agentConfigCreator.errors.generationCancelled"))
      : f instanceof Error
        ? f
        : new Error(I.t("agentConfigCreator.errors.generationFailedGeneric", { error: String(f) }));
  }
}
var xru,
  Tru,
  Dru,
  pMi = j(() => {
    "use strict";
    O4e();
    I0e();
    bi();
    ((xru = `You are an elite AI agent architect specializing in crafting high-performance agent configurations. Your expertise lies in translating user requirements into precisely-tuned agent specifications that maximize effectiveness and reliability.

**Important Context**: You may have access to project-specific instructions from CLAUDE.md files and other context that may include coding standards, project structure, and custom requirements. Consider this context when creating agents to ensure they align with the project's established patterns and practices.

When a user describes what they want an agent to do, you will:

1. **Extract Core Intent**: Identify the fundamental purpose, key responsibilities, and success criteria for the agent. Look for both explicit requirements and implicit needs. Consider any project-specific context from CLAUDE.md files. For agents that are meant to review code, you should assume that the user is asking to review recently written code and not the whole codebase, unless the user has explicitly instructed you otherwise.

2. **Design Expert Persona**: Create a compelling expert identity that embodies deep domain knowledge relevant to the task. The persona should inspire confidence and guide the agent's decision-making approach.

3. **Architect Comprehensive Instructions**: Develop a system prompt that:
   - Establishes clear behavioral boundaries and operational parameters
   - Provides specific methodologies and best practices for task execution
   - Anticipates edge cases and provides guidance for handling them
   - Incorporates any specific requirements or preferences mentioned by the user
   - Defines output format expectations when relevant
   - Aligns with project-specific coding standards and patterns from CLAUDE.md

4. **Optimize for Performance**: Include:
   - Decision-making frameworks appropriate to the domain
   - Quality control mechanisms and self-verification steps
   - Efficient workflow patterns
   - Clear escalation or fallback strategies

5. **Create Identifier**: Design a concise, descriptive identifier that:
   - Uses lowercase letters, numbers, and hyphens only
   - Is typically 2-4 words joined by hyphens
   - Clearly indicates the agent's primary function
   - Is memorable and easy to type
   - Avoids generic terms like "helper" or "assistant"

6 **Example agent descriptions**:
  - in the 'whenToUse' field of the JSON object, you should include examples of when this agent should be used.
  - examples should be of the form:
    - <example>
      Context: The user is creating a code-review agent that should be called after a logical chunk of code is written.
      user: "Please write a function that checks if a number is prime"
      assistant: "Here is the relevant function: "
      <function call omitted for brevity only for this example>
      <commentary>
      Since the user is greeting, use the task tool to launch the greeting-responder agent to respond with a friendly joke. 
      </commentary>
      assistant: "Now let me use the code-reviewer agent to review the code"
    </example>
    - <example>
      Context: User is creating an agent to respond to the word "hello" with a friendly jok.
      user: "Hello"
      assistant: "I'm going to use the task tool to launch the greeting-responder agent to respond with a friendly joke"
      <commentary>
      Since the user is greeting, use the greeting-responder agent to respond with a friendly joke. 
      </commentary>
    </example>
  - If the user mentioned or implied that the agent should be used proactively, you should include examples of this.
- NOTE: Ensure that in the examples, you are making the assistant use the Agent tool and not simply respond directly to the task.

CRITICAL JSON OUTPUT REQUIREMENTS:
- You MUST respond with ONLY a valid JSON object
- NO additional text before or after the JSON
- NO markdown formatting, code blocks, or explanations
- NO comments inside the JSON
- Use proper JSON escaping for all strings (escape quotes, newlines, backslashes)
- Ensure all fields are strings with proper escaping

Your response must be exactly this JSON structure with NO other content:
{
  "identifier": "A unique, descriptive identifier using lowercase letters, numbers, and hyphens (e.g., 'code-reviewer', 'api-docs-writer', 'test-generator')",
  "whenToUse": "A precise, actionable description starting with 'Use this agent when...' that clearly defines the triggering conditions and use cases. Ensure you include examples as described above.",
  "systemPrompt": "The complete system prompt that will govern the agent's behavior, written in second person ('You are...', 'You will...') and structured for maximum clarity and effectiveness"
}

Key principles for your system prompts:
- Be specific rather than generic - avoid vague instructions
- Include concrete examples when they would clarify behavior
- Balance comprehensiveness with clarity - every instruction should add value
- Ensure the agent has enough context to handle variations of the core task
- Make the agent proactive in seeking clarification when needed
- Build in quality assurance and self-correction mechanisms

Remember: The agents you create should be autonomous experts capable of handling their designated tasks with minimal additional guidance. Your system prompts are their complete operational manual.

FINAL REMINDER: Respond with ONLY the JSON object. No other text, formatting, or explanations.
`),
      (Tru = 5),
      (Dru = 1e3));
  });
import { randomUUID as Pru } from "crypto";
var hMi,
  gMi = j(() => {
    "use strict";
    hMi = Pru();
  });
import * as Ul from "fs/promises";
import * as cu from "path";
import * as nw from "os";
import { spawn as Bru } from "child_process";
function Zxe(t, e, r) {
  return new Promise((n, o) => {
    let s = Bru(t, e, { stdio: ["ignore", "pipe", "pipe"], cwd: r?.cwd }),
      a = "",
      u = !1,
      c;
    (r?.timeoutMs &&
      (c = setTimeout(() => {
        ((u = !0),
          s.kill("SIGTERM"),
          o(new Error(`Command "${t} ${e.join(" ")}" timed out after ${Math.round(r.timeoutMs / 1e3)}s`)));
      }, r.timeoutMs)),
      s.stderr?.on("data", (m) => {
        a += m.toString();
      }),
      s.on("error", (m) => {
        (c && clearTimeout(c), u || o(m));
      }),
      s.on("close", (m) => {
        (c && clearTimeout(c),
          !u && (m !== 0 ? o(new Error(`Command "${t}" exited with code ${m}: ${a.trim()}`)) : n()));
      }));
  });
}
var op,
  bMi = j(() => {
    "use strict";
    op = class {
      marketplaces;
      marketplaceDir;
      constructor() {
        ((this.marketplaces = new Map()), (this.marketplaceDir = cu.join(nw.homedir(), ".iflow", "marketplaces")));
      }
      async initialize() {
        (await Ul.mkdir(this.marketplaceDir, { recursive: !0 }), await this.loadMarketplaces());
      }
      async loadMarketplaces() {
        let e = cu.join(nw.homedir(), ".iflow", "marketplace-config.json");
        try {
          let r = await Ul.readFile(e, "utf-8"),
            n = JSON.parse(r);
          for (let [o, s] of Object.entries(n.marketplaces)) this.marketplaces.set(o, s);
          console.log(`Loaded ${this.marketplaces.size} marketplaces`);
        } catch {
          this.addDefaultMarketplaces();
        }
      }
      addDefaultMarketplaces() {
        this.marketplaces.set("official", {
          name: "iFlow Official",
          url: "https://raw.githubusercontent.com/iflow-ai/iflow-plugins/main/marketplace.json",
          enabled: !0,
          plugins: [],
        });
      }
      async saveMarketplaces() {
        let e = cu.join(nw.homedir(), ".iflow", "marketplace-config.json"),
          r = { marketplaces: Object.fromEntries(this.marketplaces) };
        await Ul.writeFile(e, JSON.stringify(r, null, 2));
      }
      async addMarketplace(e, r) {
        (this.marketplaces.set(e, r), await this.saveMarketplaces(), console.log(`Added marketplace: ${e}`));
      }
      async addMarketplaceFromSource(e) {
        if (e.startsWith("/") || e.startsWith("./") || e.startsWith("../"))
          return await this.addMarketplaceFromLocal(e);
        if (e.startsWith("http://") || e.startsWith("https://"))
          return e.includes("github.com") || e.includes("gitlab.com") || e.endsWith(".git")
            ? await this.addMarketplaceFromGit(e)
            : await this.addMarketplaceFromUrl(e);
        if (/^[^/\s]+\/[^/\s]+$/.test(e)) {
          let r = `https://github.com/${e}.git`;
          return await this.addMarketplaceFromGit(r, e);
        }
        throw new Error(
          `Unknown marketplace source format: "${e}". Expected owner/repo, a Git URL, a local path, or a URL to marketplace.json`,
        );
      }
      async addMarketplaceFromGit(e, r) {
        let n = cu.join(nw.tmpdir(), `iflow-marketplace-${Date.now()}`);
        try {
          await Zxe("git", ["clone", "--depth", "1", e, n], { timeoutMs: 3e4 });
          let o = [cu.join(n, ".iflow-plugin", "marketplace.json"), cu.join(n, ".claude-plugin", "marketplace.json")],
            s,
            a;
          for (let f of o)
            try {
              ((a = await Ul.readFile(f, "utf-8")), (s = f));
              break;
            } catch {}
          if (!a || !s)
            throw new Error(
              "No marketplace.json found in repository. Expected .iflow-plugin/marketplace.json or .claude-plugin/marketplace.json",
            );
          let u = JSON.parse(a),
            c = u.name || r?.replace(/\//g, "-") || "unknown",
            m = cu.join(this.marketplaceDir, `${c}.json`);
          await Ul.writeFile(m, a);
          let d = {
            name: u.name || c,
            url: e,
            enabled: !0,
            plugins: u.plugins || [],
            owner: u.owner,
            metadata: { ...u.metadata, source: r || e },
          };
          return (await this.addMarketplace(c, d), c);
        } finally {
          try {
            await Ul.rm(n, { recursive: !0, force: !0 });
          } catch {}
        }
      }
      async addMarketplaceFromLocal(e) {
        let r = cu.resolve(e),
          n = [cu.join(r, ".iflow-plugin", "marketplace.json"), cu.join(r, ".claude-plugin", "marketplace.json")];
        r.endsWith("marketplace.json") && n.unshift(r);
        let o;
        for (let m of n)
          try {
            o = await Ul.readFile(m, "utf-8");
            break;
          } catch {}
        if (!o)
          throw new Error(
            `No marketplace.json found at ${r}. Expected .iflow-plugin/marketplace.json or .claude-plugin/marketplace.json`,
          );
        let s = JSON.parse(o),
          a = s.name || cu.basename(r),
          u = cu.join(this.marketplaceDir, `${a}.json`);
        await Ul.writeFile(u, o);
        let c = {
          name: s.name || a,
          url: r,
          enabled: !0,
          plugins: s.plugins || [],
          owner: s.owner,
          metadata: { ...s.metadata, source: e },
        };
        return (await this.addMarketplace(a, c), a);
      }
      async addMarketplaceFromUrl(e) {
        let r = await fetch(e);
        if (!r.ok) throw new Error(`Failed to fetch marketplace from ${e}: ${r.status} ${r.statusText}`);
        let n = await r.text(),
          o = JSON.parse(n),
          s = o.name || new URL(e).hostname,
          a = cu.join(this.marketplaceDir, `${s}.json`);
        await Ul.writeFile(a, n);
        let u = {
          name: o.name || s,
          url: e,
          enabled: !0,
          plugins: o.plugins || [],
          owner: o.owner,
          metadata: { ...o.metadata, source: e },
        };
        return (await this.addMarketplace(s, u), s);
      }
      async removeMarketplace(e) {
        (this.marketplaces.delete(e), await this.saveMarketplaces(), console.log(`Removed marketplace: ${e}`));
      }
      async updateMarketplace(e) {
        let r = this.marketplaces.get(e);
        if (!r) throw new Error(`Marketplace not found: ${e}`);
        console.log(`Updating marketplace: ${e}`);
        let n = cu.join(this.marketplaceDir, `${e}.json`);
        try {
          if (!r.url) throw new Error(`Marketplace ${e} has no URL configured`);
          let s = await (await fetch(r.url)).text();
          (await Ul.writeFile(n, s), console.log(`Updated marketplace: ${e}`));
        } catch (o) {
          throw (console.error(`Failed to update marketplace ${e}:`, o), o);
        }
      }
      async updateAllMarketplaces() {
        for (let [e, r] of this.marketplaces.entries())
          if (r.enabled)
            try {
              await this.updateMarketplace(e);
            } catch (n) {
              console.error(`Failed to update marketplace ${e}:`, n);
            }
      }
      async searchPlugins(e) {
        let r = [];
        for (let [n, o] of this.marketplaces.entries())
          if (o.enabled)
            try {
              let a = (await this.getMarketplacePlugins(n)).filter(
                (u) =>
                  u.name.toLowerCase().includes(e.toLowerCase()) ||
                  u.description?.toLowerCase().includes(e.toLowerCase()),
              );
              r.push(...a);
            } catch (s) {
              console.error(`Failed to search marketplace ${n}:`, s);
            }
        return r;
      }
      async getMarketplacePlugins(e) {
        let r = cu.join(this.marketplaceDir, `${e}.json`);
        try {
          let n = await Ul.readFile(r, "utf-8");
          return JSON.parse(n).plugins || [];
        } catch {
          return (await this.updateMarketplace(e), this.getMarketplacePlugins(e));
        }
      }
      async installPlugin(e, r = {}) {
        let n = r.scope || "user",
          o = this.getPluginsDirectory(n);
        await Ul.mkdir(o, { recursive: !0 });
        let s;
        switch (e.type) {
          case "github":
            s = await this.installFromGitHub(e.repo, o);
            break;
          case "git":
            s = await this.installFromGit(e.url, o);
            break;
          case "local":
            s = await this.installFromLocal(e.path, o);
            break;
          case "url":
            s = await this.installFromRemote(e.url, o);
            break;
          default:
            throw new Error(`Unknown plugin source type: ${e.type}`);
        }
        return (console.log(`Installed plugin to: ${s}`), s);
      }
      async installFromGitHub(e, r) {
        let n,
          o,
          s = e.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (s) {
          let [, , u] = s;
          ((o = u.replace(/\.git$/, "")), (n = e));
        } else if (/^[^/\s]+\/[^/\s]+$/.test(e))
          ((o = e.split("/")[1].replace(/\.git$/, "")), (n = `https://github.com/${e}.git`));
        else throw new Error(`Invalid GitHub source: ${e}. Expected owner/repo or full GitHub URL`);
        let a = cu.join(r, o);
        return (await Zxe("git", ["clone", n, a], { timeoutMs: 6e4 }), a);
      }
      async installFromGit(e, r) {
        let n = cu.basename(e, ".git"),
          o = cu.join(r, n);
        return (await Zxe("git", ["clone", e, o], { timeoutMs: 6e4 }), o);
      }
      async installFromLocal(e, r) {
        let n = cu.basename(e),
          o = cu.join(r, n);
        return (await this.copyDirectory(e, o), o);
      }
      async installFromRemote(e, r) {
        let n = new URL(e),
          o = cu.basename(n.pathname, ".zip"),
          s = cu.join(r, o),
          u = await (await fetch(e)).arrayBuffer(),
          c = cu.join(nw.tmpdir(), `${o}.zip`);
        return (await Ul.writeFile(c, Buffer.from(u)), await Zxe("unzip", ["-q", c, "-d", s]), await Ul.unlink(c), s);
      }
      async uninstallPlugin(e, r = "user") {
        let n = this.getPluginsDirectory(r),
          o = cu.join(n, e);
        try {
          (await Ul.rm(o, { recursive: !0, force: !0 }), console.log(`Uninstalled plugin: ${e}`));
        } catch (s) {
          throw (console.error(`Failed to uninstall plugin ${e}:`, s), s);
        }
      }
      getPluginsDirectory(e) {
        switch (e) {
          case "user":
            return cu.join(nw.homedir(), ".iflow", "plugins");
          case "project":
            return cu.join(process.cwd(), ".iflow", "plugins");
          case "local":
            return cu.join(process.cwd(), ".iflow", "plugins");
          case "managed":
            return cu.join(nw.homedir(), ".iflow", "managed-plugins");
          default:
            return cu.join(nw.homedir(), ".iflow", "plugins");
        }
      }
      async copyDirectory(e, r) {
        await Ul.mkdir(r, { recursive: !0 });
        let n = await Ul.readdir(e, { withFileTypes: !0 });
        for (let o of n) {
          let s = cu.join(e, o.name),
            a = cu.join(r, o.name);
          o.isDirectory() ? await this.copyDirectory(s, a) : await Ul.copyFile(s, a);
        }
      }
      listMarketplaces() {
        return Array.from(this.marketplaces.values());
      }
      getMarketplace(e) {
        return this.marketplaces.get(e);
      }
      async installPluginFromMarketplace(e, r, n) {
        console.log(`Searching for plugin: ${e}`);
        let o = r ? [r] : Array.from(this.marketplaces.keys()).filter((c) => this.marketplaces.get(c)?.enabled);
        if (o.length === 0) throw new Error("No marketplaces configured or enabled");
        let s, a;
        for (let c of o)
          try {
            if (((s = (await this.getMarketplacePlugins(c)).find((d) => d.name === e)), s)) {
              ((a = c), console.log(`Found plugin in marketplace: ${c}`));
              break;
            }
          } catch (m) {
            console.warn(`Failed to search marketplace ${c}:`, m);
          }
        if (!s || !a) {
          let c = o.join(", ");
          throw new Error(`Plugin "${e}" not found in marketplace(s): ${c}`);
        }
        let u = this.parsePluginSource(s);
        if (u.type === "local" && (u.path.startsWith("./") || u.path.startsWith("../"))) {
          let m = this.marketplaces.get(a)?.url;
          if (!m || !m.endsWith(".git"))
            throw new Error(
              `Cannot resolve relative plugin source "${u.path}": marketplace "${a}" does not have a git URL`,
            );
          return (
            console.log(`Installing plugin "${e}" from marketplace repo subdirectory: ${u.path}`),
            await this.installFromMarketplaceRepo(m, u.path, e, n)
          );
        }
        return (console.log(`Installing plugin "${e}" from ${u.type} source`), await this.installPlugin(u, n));
      }
      async installFromMarketplaceRepo(e, r, n, o) {
        let s = o?.scope || "user",
          a = this.getPluginsDirectory(s);
        await Ul.mkdir(a, { recursive: !0 });
        let u = cu.join(nw.tmpdir(), `iflow-plugin-install-${Date.now()}`);
        try {
          await Zxe("git", ["clone", "--depth", "1", e, u], { timeoutMs: 6e4 });
          let c = cu.resolve(u, r);
          if (!c.startsWith(u)) throw new Error(`Invalid plugin source path "${r}": resolves outside repository`);
          try {
            await Ul.access(c);
          } catch {
            throw new Error(`Plugin subdirectory "${r}" not found in marketplace repository`);
          }
          let m = cu.join(a, n);
          return (await this.copyDirectory(c, m), console.log(`Installed plugin to: ${m}`), m);
        } finally {
          try {
            await Ul.rm(u, { recursive: !0, force: !0 });
          } catch {}
        }
      }
      parsePluginSource(e) {
        let r = e.source;
        return typeof r == "string"
          ? r.startsWith("./") || r.startsWith("../") || r.startsWith("/")
            ? { type: "local", path: r }
            : /^[^/]+\/[^/]+$/.test(r)
              ? { type: "github", repo: r }
              : r.startsWith("http") && r.endsWith(".git")
                ? { type: "git", url: r }
                : r.startsWith("http")
                  ? { type: "url", url: r }
                  : { type: "github", repo: r }
          : r;
      }
    };
  });
var AMi = j(() => {
  "use strict";
  rpr();
  Xct();
  Kfr();
  tpr();
  bMi();
  epr();
});
var yMi = j(() => {
  "use strict";
  qdr();
  Vdr();
});
function _8r(t) {
  return _Mi.createThinkingConfig(t);
}
function Lru(t) {
  return _Mi.shouldTriggerThinking(t);
}
var a1e,
  _Mi,
  E8r = j(() => {
    "use strict";
    ((a1e = class {
      keywordMappings = new Map([
        [/ultrathink|think\s+(really\s+)?super\s+hard|think\s+intensely/i, "ultra"],
        [/超级思考|极限思考|深度思考|全力思考|超强思考|认真\s*仔细\s*思考/i, "ultra"],
        [/megathink|think\s+(really\s+)?hard|think\s+a\s+lot/i, "mega"],
        [/强力思考|大力思考|用力思考|努力思考|好好思考|仔细思考/i, "mega"],
        [/think\s+(about\s+it|more|harder)/i, "hard"],
        [/再\s*想想|多\s*想想|想\s*清楚|想\s*明白|考虑\s*清楚/i, "hard"],
        [/\bthink\b/i, "normal"],
        [/想想|思考|考虑/i, "normal"],
      ]);
      tokenLimits = { ultra: 31999, mega: 1e4, hard: 4e3, normal: 2e3, none: 0 };
      reasoningMap = { ultra: "high", mega: "high", hard: "medium", normal: "low", none: "low" };
      analyzeInput(e) {
        if (!e || typeof e != "string") return "none";
        for (let [r, n] of this.keywordMappings) if (r.test(e)) return n;
        return "none";
      }
      calculateTokens(e) {
        let r = process.env.MAX_THINKING_TOKENS;
        if (r) {
          let n = parseInt(r, 10);
          if (!isNaN(n) && n >= 0) return n;
        }
        return this.tokenLimits[e];
      }
      getReasoningLevel(e) {
        let r = process.env.DEFAULT_REASONING_EFFORT;
        return r && ["low", "medium", "high"].includes(r) ? r : this.reasoningMap[e];
      }
      getDisplayMode() {
        let e = process.env.THINKING_DISPLAY_MODE;
        return e && ["visible", "hidden", "indicator-only"].includes(e) ? e : "visible";
      }
      shouldTriggerThinking(e) {
        return this.analyzeInput(e) !== "none";
      }
      createThinkingConfig(e) {
        let r = this.analyzeInput(e),
          n = this.calculateTokens(r),
          o = this.getReasoningLevel(r),
          s = this.getDisplayMode();
        return { intent: r, maxTokens: n, reasoningLevel: o, displayMode: s };
      }
      getSupportedKeywords() {
        return [
          "ultrathink",
          "think super hard",
          "think intensely",
          "megathink",
          "think really hard",
          "think a lot",
          "think about it",
          "think more",
          "think harder",
          "think",
        ];
      }
      formatConfig(e) {
        return e.intent === "none"
          ? "No thinking triggered"
          : `Thinking: ${e.intent} (${e.maxTokens} tokens, ${e.reasoningLevel} reasoning, ${e.displayMode} display)`;
      }
    }),
      (_Mi = new a1e()));
  });
var Jg = {};
Wi(Jg, {
  AGENT_COLORS: () => WU,
  AGENT_COLOR_EMOJI: () => WD,
  AIReviewer: () => x0e,
  ALL_BLACKLIST_RULES: () => Jat,
  ALL_WHITELIST_TOOLS: () => Kat,
  AONE_IFLOW_DIR: () => bOr,
  AgentConfigCache: () => Lut,
  AgentRegistry: () => M0e,
  AgentScanner: () => rN,
  Analytics: () => $Oe,
  ApiErrorEvent: () => Ob,
  ApiRequestEvent: () => Kne,
  ApiResponseEvent: () => Jne,
  ApprovalMode: () => dn,
  AskUserQuestionTool: () => Jf,
  AuthProviderType: () => OM,
  AuthType: () => Kt,
  BadRequestError: () => ZYe,
  BaseTool: () => Li,
  BlacklistChecker: () => w0e,
  BudgetExceededReason: () => eK,
  BudgetManager: () => tK,
  CLAUDE_FAMILY_PATTERN: () => fH,
  CODE_ASSIST_API_VERSION: () => zPr,
  CODE_ASSIST_ENDPOINT: () => WPr,
  CONTAINER_CLOUD_RULES: () => adr,
  CheckpointCleanupService: () => Jxe,
  CloseDiffResponseSchema: () => Zcr,
  CodeAssistServer: () => _R,
  Config: () => ySe,
  CoreToolScheduler: () => IY,
  DATABASE_OPERATION_RULES: () => udr,
  DATA_EXFILTRATION_RULES: () => rdr,
  DEEPSEEK_FAMILY_PATTERN: () => pH,
  DEFAULT_AONE_BASE_URL: () => Rqe,
  DEFAULT_CONTEXT_FILENAME: () => Gzn,
  DEFAULT_ENCODING: () => Vir,
  DEFAULT_FILE_FILTERING_OPTIONS: () => Tk,
  DEFAULT_GEMINI_EMBEDDING_MODEL: () => Die,
  DEFAULT_GEMINI_FLASH_LITE_MODEL: () => ZR,
  DEFAULT_GEMINI_FLASH_MODEL: () => l1,
  DEFAULT_GEMINI_MODEL: () => Np,
  DEFAULT_IFLOW_BASE_URL: () => Iie,
  DEFAULT_IFLOW_DIR: () => wG,
  DEFAULT_MEMORY_FILE_FILTERING_OPTIONS: () => eme,
  DEFAULT_OTLP_ENDPOINT: () => Cut,
  DEFAULT_TELEMETRY_TARGET: () => vut,
  DEFAULT_THINKING_MODE_ENABLED: () => rlt,
  DEFAULT_TOKEN_LIMIT: () => Tqe,
  DOLLAR_TASK_PREFIX: () => g8,
  DetectedIde: () => fi,
  DiscoveredMCPTool: () => bg,
  DiscoveredTool: () => C9e,
  EditTool: () => Fd,
  EndSessionEvent: () => Wne,
  ErrorLogService: () => _ie,
  ExitPlanModeTool: () => Hp,
  ExtensionManager: () => LS,
  FILE_OPERATION_RULES: () => odr,
  FileDiscoveryService: () => UY,
  FileSchema: () => dii,
  FlashFallbackEvent: () => Xne,
  ForbiddenError: () => XYe,
  FormatDetector: () => ome,
  GOOGLE_ACCOUNTS_FILENAME: () => I_t,
  GPT5_MODEL_PATTERN: () => Rln,
  GeminiChat: () => k4e,
  GeminiClient: () => tN,
  GeminiEventType: () => As,
  GitIgnoreParser: () => z0e,
  GitService: () => gv,
  GlobTool: () => cd,
  GrepTool: () => H6,
  HookEventType: () => Mn,
  HookExecutor: () => xc,
  HookManager: () => ime,
  IDEConnectionStatus: () => fa,
  IFLOW_CONFIG_DIR: () => Kce,
  IFLOW_DIR: () => w3e,
  IFLOW_MODELS: () => u2e,
  INFORMATION_READING_TOOLS: () => Ymr,
  Icon: () => Mi,
  IdeClient: () => dY,
  IdeContextNotificationSchema: () => Kcr,
  IdeContextSchema: () => fii,
  IdeDiffAcceptedNotificationSchema: () => Jcr,
  IdeDiffClosedNotificationSchema: () => Xcr,
  IneligibleTierReasonCode: () => bEt,
  Kind: () => Fi,
  LSTool: () => jf,
  LifecycleTracker: () => PGe,
  Logger: () => hN,
  LspClient: () => q0e,
  LspManager: () => H0e,
  MAX_STDERR_DISPLAY_LENGTH: () => lat,
  MCPDiscoveryState: () => bE,
  MCPOAuthProvider: () => T2,
  MCPOAuthTokenStorage: () => J1,
  MCPServerConfig: () => ASe,
  MCPServerStatus: () => Ss,
  MCP_DEFAULT_TIMEOUT_MSEC: () => yse,
  MEMORY_SECTION_HEADER: () => Pz,
  MarketplaceManager: () => op,
  McpClient: () => fV,
  MemoryTool: () => cA,
  MessageSenderType: () => cme,
  ModelPreferenceChoice: () => W2,
  ModelPreferenceService: () => L0e,
  ModelValidationService: () => BY,
  MultimodalHelper: () => _4,
  NETWORK_ATTACK_RULES: () => ndr,
  NETWORK_OPERATION_RULES: () => sdr,
  NonInteractiveHookService: () => Xxe,
  OAuthUtils: () => qh,
  OUTPUT_UPDATE_INTERVAL_MS: () => U0r,
  OnboardUserStatusCode: () => AEt,
  PREFERRED_CONTEXT_FILENAME: () => qzn,
  PRIVILEGE_ESCALATION_RULES: () => tdr,
  PluginHookManager: () => JY,
  PluginLoader: () => a$,
  PluginRegistrar: () => ame,
  RESOURCE_EXHAUSTION_RULES: () => idr,
  ReadFileTool: () => ma,
  ReadManyFilesTool: () => wS,
  ReminderEventEmitter: () => o0e,
  ReminderEventType: () => pi,
  ReminderGenerator: () => s0e,
  RipGrepTool: () => lA,
  SAFE_NETWORK_TOOLS: () => Jmr,
  SESSION_ID: () => _qe,
  SHELL_TOOL_NAMES: () => cv,
  SYSTEM_DESTRUCTION_RULES: () => edr,
  SchemaValidator: () => iu,
  SemanticAttributes: () => Cte,
  ServerOauth2Error: () => fte,
  SessionStartHook: () => YY,
  ShellExecutionService: () => HO,
  ShellTool: () => Wu,
  SkillConfigCache: () => Hut,
  SkillRegistry: () => M4e,
  SkillScanner: () => FY,
  SkillTool: () => U4e,
  SlashCommandEvent: () => dL,
  SmartApprovalEngine: () => GU,
  SpanStatusCode: () => __,
  StandardFileSystemService: () => fSe,
  StartSessionEvent: () => Vne,
  Storage: () => wp,
  SubAgentEventType: () => to,
  SubAgentManager: () => U0e,
  SystemReminderManager: () => FU,
  TASK_MANAGEMENT_TOOLS: () => Kmr,
  TaskTool: () => Pl,
  TelemetryTarget: () => Eut,
  ThinkingAnalyzer: () => a1e,
  ThinkingModelAdapter: () => Dqe,
  TodoReadTool: () => Pm,
  TodoWriteTool: () => va,
  ToolCallEvent: () => Yne,
  ToolConfirmationOutcome: () => cn,
  ToolErrorType: () => Lr,
  ToolHookExecutionService: () => u9,
  ToolRegistry: () => S9e,
  Trans: () => bb,
  TrustedHooksManager: () => KY,
  Turn: () => RY,
  UiTelemetryService: () => yqe,
  UnauthorizedError: () => kM,
  UserPromptEvent: () => zne,
  UserPromptSubmitHook: () => o$,
  UserTierId: () => o6,
  ValueType: () => ia,
  WebFetchTool: () => hA,
  WebSearchTool: () => u3,
  WhitelistChecker: () => S0e,
  WriteFileTool: () => x0,
  acpAdapterFactoryRegistry: () => zU,
  addMCPStatusChangeListener: () => b9e,
  addTraceparentHeader: () => rH,
  agentRegistry: () => Y2,
  allowEditorTypeInSandbox: () => v0e,
  analyzeThinkingInput: () => _8r,
  autoInstallIdePlugin: () => h8r,
  checkAndRefreshToken: () => LOe,
  checkAndRefreshTokenOnStartup: () => MOe,
  checkCommandPermissions: () => oat,
  checkHasEditorType: () => E0e,
  cleanupCliTelemetry: () => t2e,
  clearAoneAuth: () => Uqe,
  clearCachedCredentialFile: () => RG,
  clearErrorLogs: () => iis,
  clearOauthClientCache: () => fEt,
  collectTelemetry: () => pat,
  connectAndDiscover: () => k2n,
  connectToMcpServer: () => N2n,
  convertPathToProjectName: () => x3e,
  convertToFunctionResponse: () => qU,
  createAgent: () => MY,
  createCodeAssistContentGenerator: () => VOt,
  createContentGenerator: () => JOt,
  createContentGeneratorConfig: () => KOt,
  createIdeContextStore: () => pii,
  createSkillConfigCache: () => $dr,
  createTransport: () => _9e,
  createVariableContext: () => bSe,
  dateToFilename: () => wln,
  debugLogger: () => Ud,
  defaultThinkingAnalyzer: () => u1e,
  defaultThinkingModelAdapter: () => A2,
  detectEncodingFromBuffer: () => Doi,
  detectFileType: () => znt,
  detectIde: () => o3,
  discoverMcpTools: () => EAs,
  discoverPrompts: () => Ojt,
  discoverTools: () => kjt,
  doesToolInvocationMatch: () => _Y,
  escapePath: () => tte,
  escapeShellArg: () => VAa,
  exchangeCodeForToken: () => hte,
  executeToolCall: () => _Se,
  extractCuratedHistory: () => R4e,
  extractVariables: () => Zfr,
  findGitRoot: () => Dia,
  findIndexAfterFraction: () => Q9a,
  formatFilePath: () => gat,
  formatMemoryUsage: () => L0r,
  generateAgentConfig: () => Nru,
  generateIFlowAuthUrl: () => $3e,
  generateObservationId: () => Ate,
  generateRequestId: () => D9a,
  generateTraceId: () => XPr,
  generateTraceparent: () => I9a,
  generateUUID: () => fat,
  generateValidName: () => B2n,
  getAgentColors: () => F0e,
  getAgentConfigCache: () => gA,
  getAllGeminiMdFilenames: () => Lz,
  getAllMCPServerStatuses: () => AAs,
  getApiKeyFromEnv: () => d2e,
  getArrayEnvValue: () => d0n,
  getAvailablePort: () => mEt,
  getBaseUrlFromEnv: () => f2e,
  getBooleanEnvValue: () => l0n,
  getCachedAoneToken: () => vT,
  getCachedApiKey: () => yR,
  getCachedEncodingForBuffer: () => WCe,
  getCachedOAuthToken: () => VNr,
  getCna: () => bqe,
  getCommandRoot: () => zAa,
  getCommandRoots: () => nat,
  getCommonAttributes: () => Ma,
  getCompressionPrompt: () => ydr,
  getCompressionReminderPrompt: () => v9a,
  getCompressionSystemPrompt: () => Adr,
  getConfig: () => OAo,
  getConversationId: () => jOe,
  getCoreSystemPrompt: () => P0e,
  getCurrentGeminiMdFilename: () => Xce,
  getCurrentTraceparent: () => RAe,
  getDiffCommand: () => gui,
  getEnvConfig: () => Ois,
  getEnvSettings: () => zOt,
  getEnvValue: () => CT,
  getErrorLogService: () => dH,
  getErrorMessage: () => mr,
  getErrorStatus: () => I4e,
  getFileErrors: () => nis,
  getFolderStructure: () => O0e,
  getFunctionCalls: () => Isi,
  getFunctionCallsAsJson: () => ksi,
  getFunctionCallsFromParts: () => Rsi,
  getFunctionCallsFromPartsAsJson: () => Osi,
  getGitCurrentBranch: () => Iia,
  getGitHeadSha: () => Rz,
  getGitRemoteUrl: () => Iz,
  getGitStatus: () => git,
  getGlobalIFlowDir: () => Tn,
  getIFlowDirName: () => ui,
  getIdeInfo: () => tv,
  getIdeInstaller: () => rSa,
  getInMemoryErrors: () => ris,
  getLocalFilenameTimestamp: () => vAe,
  getLocalISOString: () => Ec,
  getMCPDiscoveryState: () => Rjt,
  getMCPServerPrompts: () => y8r,
  getMCPServerStatus: () => Ese,
  getModelFromEnv: () => p2e,
  getNonThinkingModelSystemPrompt: () => Oui,
  getNumberEnvValue: () => m0n,
  getOauthClient: () => kG,
  getPlanModeSystemPrompt: () => _dr,
  getProjectCommandsDir: () => nte,
  getProjectHash: () => gOe,
  getProjectTempDir: () => Y5,
  getReadOnlyToolNames: () => z4a,
  getResponseText: () => c9,
  getResponseTextFromParts: () => Aat,
  getScope: () => bB,
  getScreenResolution: () => DOt,
  getShellConfiguration: () => vY,
  getSpecificMimeType: () => gD,
  getStructuredResponse: () => p2a,
  getStructuredResponseFromParts: () => h2a,
  getSystemEncoding: () => xoi,
  getThinkingModelSystemPrompt: () => Nui,
  getTraceParent: () => Bkt,
  getUserCommandsDir: () => rte,
  hasEnvConfig: () => jqe,
  hasNetworkTransport: () => g9e,
  hasOnboardingBeenShown: () => g8r,
  hasValidTypes: () => h9e,
  i18n: () => I,
  ideContext: () => QO,
  initAoneAuth: () => Fqe,
  initializeCliTelemetry: () => kOt,
  initializeErrorLogService: () => LOt,
  initializeShellParsers: () => esi,
  initializeTelemetry: () => DAe,
  invokeMcpPrompt: () => O2n,
  isAoneAuthAvailable: () => Iis,
  isApiError: () => B0e,
  isBinary: () => Yle,
  isBinaryFile: () => DWn,
  isClaudeFamily: () => hH,
  isCommandAllowed: () => R0r,
  isDeepSeekModel: () => wie,
  isDirectoryEntry: () => zir,
  isEditorAvailable: () => S4e,
  isEnabled: () => P2n,
  isExited: () => e0e,
  isFileEntry: () => ove,
  isFunctionCall: () => tlr,
  isFunctionResponse: () => nv,
  isGenericQuotaExceededError: () => NY,
  isGitCommandAvailable: () => w0,
  isGitRepository: () => ll,
  isGpt5Model: () => Sie,
  isIFlowOAuth2: () => pte,
  isNodeError: () => Go,
  isProQuotaExceededError: () => VU,
  isRunning: () => uat,
  isShellInvocationAllowlisted: () => KAa,
  isStructuredError: () => D4e,
  isSubpath: () => ite,
  isTelemetrySdkInitialized: () => ng,
  isWindows: () => rsi,
  isWithinRoot: () => nve,
  lifecycleTracker: () => fL,
  loadServerHierarchicalMemory: () => t$,
  loadWasmBinary: () => Wnt,
  logApiError: () => h8,
  logApiRequest: () => vqe,
  logApiResponse: () => Sqe,
  logCliConfiguration: () => xln,
  logCliResponse: () => xqe,
  logError: () => b2,
  logFlashFallback: () => Cqe,
  logSlashCommand: () => Cie,
  logToolCall: () => rE,
  logUserPrompt: () => vie,
  makeRelative: () => Mc,
  markOnboardingAsShown: () => b8r,
  maxOutputTokens: () => MOt,
  mcpServerRequiresOAuth: () => _se,
  mergeUserInfoToCredentials: () => U3e,
  openAoneOAuthWindow: () => c0n,
  openBrowserSafely: () => BC,
  openDiff: () => Vmr,
  parseFrontmatter: () => LY,
  partListUnionToString: () => K4a,
  populateMcpServerCommand: () => y9e,
  processSingleFileContent: () => ive,
  quickAuthTypes: () => A6,
  readFileAsBase64: () => Wir,
  readWasmBinaryFromDisk: () => qir,
  record: () => Q3e,
  recordApprovalModeMetrics: () => pGe,
  recordCliError: () => Aqe,
  recordFullCompressionCount: () => Hne,
  recordFullCompressionRatio: () => gGe,
  recordLightweightCompressionCount: () => qne,
  recordLightweightCompressionRatio: () => hGe,
  recordLowTokenNoCompression: () => bGe,
  recordPasteOperationMetrics: () => fGe,
  recordSessionStart: () => dGe,
  recordSmartApprovalAiReview: () => _Ge,
  recordSmartApprovalAiRiskyUserAction: () => EGe,
  recordSmartApprovalBlacklistBlock: () => AGe,
  recordSmartApprovalBlacklistUserAction: () => yGe,
  recordToolError: () => yie,
  refreshAccessToken: () => hEt,
  refreshAoneAuth: () => Ris,
  reinforceSystemPrompt: () => Q0e,
  removeMCPStatusChangeListener: () => A9e,
  removeQuarantineAttributes: () => yOr,
  replaceVariables: () => Xfr,
  replaceVariablesInObject: () => XY,
  resetAgentConfigCache: () => V9a,
  resetEncodingCache: () => bAa,
  resetOauthClientForTesting: () => HNr,
  resetSkillRegistry: () => Tci,
  restoreOauthClient: () => BOe,
  retryWithBackoff: () => PY,
  rgPath: () => bOe,
  safeLiteralReplace: () => A0r,
  sanitizeParameters: () => j2n,
  serializeFrontmatter: () => q9a,
  sessionId: () => hMi,
  setConfig: () => kAo,
  setGeminiMdFilename: () => Jce,
  setGlobalErrorLogService: () => ois,
  setupPluginEnvironment: () => gSe,
  shellManager: () => a3,
  shortenPath: () => ba,
  shouldAttemptBrowserLaunch: () => fx,
  shouldEnableThinking: () => Lru,
  shutdownTelemetry: () => tH,
  signalNumberToString: () => k0r,
  skillRegistry: () => KU,
  sortFileEntries: () => Xzn,
  spawnAsync: () => YAa,
  splitCommands: () => WAa,
  stripShellWrapper: () => iat,
  tildeifyPath: () => lx,
  toFriendlyError: () => wjt,
  tokenLimit: () => JR,
  trace: () => Qo,
  truncateContent: () => wY,
  uiTelemetryService: () => Pb,
  unescapePath: () => hR,
  updateMCPServerStatus: () => vk,
  uploadConfig: () => bte,
  uploadQAData: () => JPr,
  useTranslation: () => rr,
  validateOAuthToken: () => POe,
  validateReminderContent: () => hat,
  validateVariables: () => R1i,
  windowsCodePageToEncoding: () => Toi,
  withSpan: () => jh,
});
var u1e,
  Ot = j(() => {
    "use strict";
    Ag();
    T3e();
    b6();
    cat();
    ddr();
    O4e();
    UC();
    Cdr();
    M1i();
    fut();
    o2e();
    I0e();
    F1i();
    tut();
    Q1i();
    G1i();
    WOt();
    OG();
    $qe();
    UOe();
    yEt();
    s2e();
    fY();
    Sst();
    IU();
    V1i();
    aMi();
    Pa();
    Bp();
    E0();
    lut();
    ufr();
    e1r();
    TO();
    Wmr();
    vdr();
    dS();
    xut();
    Kle();
    y0r();
    b0r();
    $U();
    Yst();
    M0r();
    YOt();
    Fdr();
    i2e();
    jne();
    FCe();
    Iqe();
    Pa();
    t1r();
    W1r();
    uMi();
    xdr();
    wdr();
    lMi();
    n0e();
    mMi();
    Yfr();
    B0r();
    bi();
    Hn();
    Fc();
    Bb();
    Njt();
    dMi();
    FE();
    $M();
    Yce();
    cU();
    kU();
    pY();
    T4e();
    RO();
    CY();
    xY();
    MCe();
    TS();
    jD();
    iKe();
    E9e();
    r0e();
    SY();
    jD();
    TS();
    Zce();
    D0e();
    Gdr();
    fMi();
    qut();
    jdr();
    F4e();
    Mut();
    pMi();
    P4e();
    Put();
    Out();
    Bdr();
    R0e();
    R0e();
    Pdr();
    xjt();
    tKe();
    rKe();
    Sut();
    gMi();
    M3e();
    UU();
    Wfr();
    AMi();
    yMi();
    b6();
    bi();
    ROt();
    KRt();
    E8r();
    xie();
    E8r();
    xie();
    u1e = new a1e();
  });
import EMi from "node:process";
function eTe() {
  let { env: t } = EMi,
    { TERM: e, TERM_PROGRAM: r } = t;
  return EMi.platform !== "win32"
    ? e !== "linux"
    : !!t.WT_SESSION ||
        !!t.TERMINUS_SUBLIME ||
        t.ConEmuTask === "{cmd::Cmder}" ||
        r === "Terminus-Sublime" ||
        r === "vscode" ||
        e === "xterm-256color" ||
        e === "alacritty" ||
        e === "rxvt-unicode" ||
        e === "rxvt-unicode-256color" ||
        t.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}
var v8r = j(() => {});