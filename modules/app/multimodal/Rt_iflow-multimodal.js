/**
 * @module Rt
 * @category app/multimodal
 * @label iflow-multimodal
 * @position 1886 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Rt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Rt = T((Dml, QGi) => {
  "use strict";
  QGi.exports = jGi();
});
var KN,
  Y6r = j(() => {
    "use strict";
    KN = class {
      id;
      display;
      desc;
      owner;
      supportType;
      multimodal;
      internal;
      defaultConfig;
      constructor(e) {
        ((this.id = e.id),
          (this.display = e.display),
          (this.desc = e.desc),
          (this.owner = e.owner),
          (this.supportType = e.supportType),
          (this.multimodal = e.multimodal),
          (this.internal = e.internal),
          (this.defaultConfig = e.defaultConfig));
      }
    };
  });
var JN,
  K6r = j(() => {
    "use strict";
    JN = class {
      default;
      type;
      constructor(e) {
        ((this.default = e.default), (this.type = e.type));
      }
    };
  });
var PTe,
  J6r = j(() => {
    "use strict";
    PTe = class t {
      label;
      value;
      constructor(e, r) {
        ((this.label = e), (this.value = r));
      }
      static fromModelInfo(e) {
        return new t(e.display, e.id);
      }
    };
  });
var BTe,
  X6r = j(() => {
    "use strict";
    BTe = class {
      repoPath;
      securityLevel;
      constructor(e) {
        ((this.repoPath = e.repoPath), (this.securityLevel = e.securityLevel));
      }
      isC3() {
        return this.securityLevel === "C3";
      }
    };
  });
var aqi = {};
Wi(aqi, {
  convertToModelOptions: () => MTe,
  extractRepoPathFromGitUrl: () => oqi,
  fetchModels: () => LTe,
  fetchSecurityLevel: () => sqi,
  filterCliModels: () => FTe,
  filterModelsBySecurityLevel: () => UTe,
  getDefaultModel: () => $cu,
  getGitRemoteUrl: () => iqi,
  getSecurityLevelFromGit: () => xj,
  sortModelsWithQwenFirst: () => $Te,
});
import { exec as Lcu } from "child_process";
import { promisify as Mcu } from "util";
async function LTe(t) {
  try {
    let e = await fetch("https://ducky.code.alibaba-inc.com/v1/models", { headers: { Authorization: `Bearer ${t}` } });
    if (!e.ok) throw new Error(`Failed to fetch models: ${e.status} ${e.statusText}`);
    return (await e.json()).map(
      (n) =>
        new KN({
          id: n.id,
          display: n.display,
          desc: n.desc,
          owner: n.owner,
          supportType: n.supportType,
          multimodal: n.multimodal,
          internal: n.internal,
          defaultConfig: new JN(n.defaultConfig),
        }),
    );
  } catch (e) {
    return (console.error("Error fetching models:", e), Ucu());
  }
}
function Ucu() {
  return [
    new KN({
      id: "ide-whale/qwen3-coder",
      display: "Qwen3-Coder",
      desc: "Qwen3-Coder",
      owner: "",
      supportType: ["chat", "llm", "agent", "cli"],
      multimodal: !1,
      internal: !0,
      defaultConfig: new JN({ default: !0 }),
    }),
    new KN({
      id: "ide-idealab/claude4-sonnet",
      display: "Claude-4-Sonnet",
      desc: "Claude-4-Sonnet",
      owner: "",
      supportType: ["chat", "llm", "agent"],
      multimodal: !0,
      defaultConfig: new JN({}),
    }),
    new KN({
      id: "ide-whale/deepseek-v3.2-exp",
      display: "DeepSeek-V3.2-Whale",
      desc: "DeepSeek-V3.2",
      owner: "",
      supportType: ["agent", "chat", "llm", "cli"],
      multimodal: !1,
      internal: !0,
      defaultConfig: new JN({}),
    }),
    new KN({
      id: "ide-whale/kimi_k2",
      display: "Kimi-K2",
      desc: "Kimi-K2",
      owner: "",
      supportType: ["chat", "llm"],
      multimodal: !1,
      internal: !0,
      defaultConfig: new JN({}),
    }),
  ];
}
function MTe(t) {
  return t.map((e) => PTe.fromModelInfo(e));
}
async function iqi(t) {
  try {
    let e = t ? { cwd: t } : {},
      { stdout: r, stderr: n } = await Fcu("git remote get-url origin", e);
    return (n && console.error("Git command stderr:", n), r.trim());
  } catch (e) {
    return (console.error("Error getting git remote URL:", e), null);
  }
}
function oqi(t) {
  if (!t) return null;
  try {
    let e = t.trim();
    e.endsWith(".git") && (e = e.slice(0, -4));
    let r = e.match(/^git@[^:]+:(.+)$/);
    if (r) return r[1];
    let n = e.match(/^https?:\/\/[^/]+\/(.+)$/);
    return n ? n[1] : null;
  } catch (e) {
    return (console.error("Error extracting repo path from git URL:", e), null);
  }
}
async function sqi(t, e) {
  try {
    let r = `https://code.alibaba-inc.com/api/v4/projects/settings/security_level?private_token=${e}&repos=${t}`,
      n = await fetch(r);
    if (!n.ok) return (console.error(`Failed to fetch security level: ${n.status} ${n.statusText}`), null);
    let o = await n.json();
    return o.length === 0 ? null : new BTe({ repoPath: o[0].repo_path, securityLevel: o[0].security_level });
  } catch (r) {
    return (console.error("Error fetching security level:", r), null);
  }
}
function FTe(t) {
  return t.filter((e) => {
    let r = e.supportType.includes("cli"),
      n = Sie(e.id) || Sie(e.display),
      o = wie(e.id) || wie(e.display);
    return r && !n && !o;
  });
}
function UTe(t, e) {
  return !e || !e.isC3() ? t : t.filter((r) => r.internal === !0);
}
async function xj(t, e) {
  let r = await iqi(e);
  if (!r) return (console.error("Failed to get git remote URL"), null);
  let n = oqi(r);
  return n ? sqi(n, t) : (console.error("Failed to extract repo path from git URL:", r), null);
}
function $cu(t) {
  return t.find((e) => e.defaultConfig.default === !0);
}
function $Te(t) {
  return [...t].sort((e, r) => {
    let n = e.id.toLowerCase().includes("qwen3-coder") || e.display.toLowerCase().includes("qwen3-coder"),
      o = r.id.toLowerCase().includes("qwen3-coder") || r.display.toLowerCase().includes("qwen3-coder");
    return n && !o ? -1 : !n && o ? 1 : e.display.localeCompare(r.display);
  });
}
var Fcu,
  jTe = j(() => {
    "use strict";
    Ot();
    Y6r();
    K6r();
    J6r();
    X6r();
    Fcu = Mcu(Lcu);
  });
import { spawn as uqi } from "child_process";
import * as tgt from "fs/promises";
import * as cqi from "path";
import * as lqi from "os";
var mqi,
  dqi,
  fqi,
  pqi,
  $1e,
  hqi,
  bJ = j(() => {
    "use strict";
    ((mqi = (t) => t.startsWith("@") || /\s@/.test(t)),
      (dqi = (t) => {
        if (!t.startsWith("/") || t.startsWith("//") || t.startsWith("/*")) return !1;
        let e = t.substring(1);
        return e.includes("/") && !/\s+\//.test(e) ? !1 : e === "" ? !0 : !!e.match(/^([a-zA-Z0-9_-]+)/);
      }),
      (fqi = (t) => t === "/init"),
      (pqi = (t) => t.startsWith("$")),
      ($1e = async (t) => {
        let e = (n, o, s) =>
            new Promise((a, u) => {
              let c = s ? uqi(n, o, s) : uqi(n, o),
                m = "";
              (c.stderr && c.stderr.on("data", (d) => (m += d.toString())),
                c.on("error", u),
                c.on("close", (d) => {
                  if (d === 0) return a();
                  let f = m.trim();
                  u(new Error(`'${n}' exited with code ${d}${f ? `: ${f}` : ""}`));
                }),
                c.stdin
                  ? (c.stdin.on("error", u), c.stdin.write(t), c.stdin.end())
                  : u(new Error("Child process has no stdin stream to write to.")));
            }),
          r = { stdio: ["pipe", "inherit", "pipe"] };
        switch (process.platform) {
          case "win32":
            return (async () => {
              let n = cqi.join(lqi.tmpdir(), `iflow-clipboard-${Date.now()}.txt`);
              try {
                (await tgt.writeFile(n, t, "utf8"),
                  await e("powershell", [
                    "-NoProfile",
                    "-NonInteractive",
                    "-Command",
                    `Get-Content -Path '${n}' -Encoding UTF8 -Raw | Set-Clipboard`,
                  ]));
              } finally {
                try {
                  await tgt.unlink(n);
                } catch {}
              }
            })();
          case "darwin":
            return e("pbcopy", []);
          case "linux":
            try {
              await e("xclip", ["-selection", "clipboard"], r);
            } catch (n) {
              try {
                await e("xsel", ["--clipboard", "--input"], r);
              } catch (o) {
                let s = n instanceof Error && n.code === "ENOENT",
                  a = o instanceof Error && o.code === "ENOENT";
                if (s && a) throw new Error("Please ensure xclip or xsel is installed and configured.");
                let u = n instanceof Error ? n.message : String(n);
                s && (u = "xclip not found");
                let c = o instanceof Error ? o.message : String(o);
                throw (a && (c = "xsel not found"), new Error(`All copy commands failed. "${u}", "${c}". `));
              }
            }
            return;
          default:
            throw new Error(`Unsupported platform: ${process.platform}`);
        }
      }),
      (hqi = () => {
        let t;
        switch (process.platform) {
          case "darwin":
            t = "open";
            break;
          case "win32":
            t = "start";
            break;
          case "linux":
            t = "xdg-open";
            break;
          default:
            ((t = "xdg-open"),
              console.warn(`Unknown platform: ${process.platform}. Attempting to open URLs with: ${t}.`));
            break;
        }
        return t;
      }));
  });