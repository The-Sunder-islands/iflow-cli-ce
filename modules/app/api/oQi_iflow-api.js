/**
 * @module oQi
 * @category app/api
 * @label iflow-api
 * @position 1884 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (oQi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Functions: fuu, Vau, wuu, guu, q3t, AQi, zau, tuu, suu, Zau, luu, Euu, Xau, buu
 * Features: esbuild module exports: oQi, CONTAINS iflow.cn API references, dotenv related, MCP server handling
 * === End semantic info ===
 */


var oQi = T((Tul, iQi) => {
  iQi.exports = nQi();
});
import C6r from "fs/promises";
import S6r from "path";
function Vau(t, e) {
  if (t === "global") return S6r.join(Tn(), "commands");
  {
    let r = e || process.cwd();
    return S6r.join(r, ui(), "commands");
  }
}
function AQi(t) {
  return t
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
async function zau(t, e) {
  let { scope: r } = e;
  if (r !== "project" && r !== "global") {
    console.error(I.t("commandsAdd.invalidScope", { scope: r }));
    return;
  }
  let o = hu(process.cwd()).merged.apiKey;
  if (!o) {
    (console.error(I.t("commandsAdd.apiKeyNotFound")), console.error(I.t("commandsAdd.pleaseAuthenticateFirst")));
    return;
  }
  console.log(I.t("commandsAdd.searchingCommand", { nameOrId: t }));
  try {
    let s = null;
    if (/^\d+$/.test(t)) {
      let c = parseInt(t, 10);
      s = await Hau(o, c);
    }
    if (!s) {
      let c = await bQi(o, 1, 1e3, t, "public");
      if (!c.success) {
        console.error(`Error: ${c.message}`);
        return;
      }
      s = c.commands?.find((m) => m.name.toLowerCase() === t.toLowerCase()) || null;
    }
    if (!s) {
      let c = await bQi(o, 1, 1e3, t, "private");
      if (!c.success) {
        console.error(`Error: ${c.message}`);
        return;
      }
      s = c.commands?.find((m) => m.name.toLowerCase() === t.toLowerCase()) || null;
    }
    if (!s) {
      console.error(I.t("commandsAdd.commandNotFound", { nameOrId: t }));
      return;
    }
    (console.log(I.t("commandsAdd.foundCommand", { name: s.name })),
      console.log(I.t("commandsAdd.commandDescription", { description: s.description })),
      console.log(I.t("commandsAdd.commandCategory", { category: s.category })),
      console.log(I.t("commandsAdd.installingToScope", { scope: r })));
    let a = process.cwd(),
      u = await Wau(s, r, a);
    u.success
      ? (console.log(u.message), console.log(""), console.log(I.t("commandsAdd.restartRequired")))
      : console.error(u.message);
  } catch (s) {
    console.error(I.t("commandsAdd.errorAddingCommand", { error: s }));
  }
}
var bQi,
  Hau,
  Wau,
  yQi,
  _Qi = j(() => {
    "use strict";
    dc();
    Ot();
    ((bQi = async (t, e = 1, r = 20, n, o) => {
      try {
        if (!t) return { success: !1, message: I.t("commandsAdd.pleaseAuthenticate") };
        let s = { page: e, size: r, usePage: !0, visibility: o };
        n && (s.name = n);
        let a = { "User-Agent": "iFlow-Cli", "Content-Type": "application/json" };
        o === "private" && (a.Authorization = `Bearer ${t}`);
        let u = await fetch("https://apis.iflow.cn/v1/commands/list /* @iflow-api-endpoint */", {
          method: "POST",
          headers: a,
          body: JSON.stringify(s),
        });
        if (!u.ok) {
          let d = I.t("commandsAdd.unableToLoadCommands");
          return (
            u.status === 401
              ? (d = I.t("commandsAdd.authenticationFailed"))
              : u.status === 403
                ? (d = I.t("commandsAdd.accessDenied"))
                : u.status === 404
                  ? (d = I.t("commandsAdd.serviceNotFound"))
                  : u.status >= 500 && (d = I.t("commandsAdd.serverError")),
            { success: !1, message: d }
          );
        }
        let c = await u.json();
        return c.success
          ? { success: !0, commands: Array.isArray(c.data.data) ? c.data.data : [], total: c.data.total || 0 }
          : { success: !1, message: c.message || I.t("commandsAdd.failedToLoadFromServer") };
      } catch (s) {
        let a = I.t("commandsAdd.connectionError");
        return (
          s instanceof Error && s.message.includes("Failed to fetch") && (a = I.t("commandsAdd.networkError")),
          { success: !1, message: a }
        );
      }
    }),
      (Hau = async (t, e) => {
        try {
          let r = await fetch(`https://apis.iflow.cn/v1/commands/get/${e}`, /* @iflow-api-endpoint */ {
            headers: { Authorization: `Bearer ${t}` },
          });
          if (!r.ok) throw new Error(`HTTP ${r.status}: ${r.statusText}`);
          let n = await r.json();
          if (!n.success) throw new Error(n.message || I.t("commandsAdd.failedToFetchDetails"));
          return n.data || null;
        } catch (r) {
          return (console.error(I.t("commandsAdd.failedToFetchDetails"), r), null);
        }
      }));
    Wau = async (t, e, r) => {
      try {
        let n = Vau(e, r);
        await C6r.mkdir(n, { recursive: !0 });
        let o = `${AQi(t.name)}.toml`,
          s = S6r.join(n, o);
        try {
          return (
            await C6r.access(s),
            { success: !1, message: I.t("commandsAdd.alreadyInstalled", { commandName: t.name, scope: e }) }
          );
        } catch {}
        let a = `# Command: ${t.name}
# Description: ${t.description}
# Category: ${t.category}
# Version: ${t.version}
# Author: ${t.authorId}

description = "${t.description.replace(/"/g, '\\"')}"

prompt = """
${t.detailContext || t.description}
"""
`;
        return (
          await C6r.writeFile(s, a, "utf8"),
          {
            success: !0,
            message: I.t("commandsAdd.installSuccess", {
              commandName: t.name,
              scope: e,
              filePath: s,
              commandPath: AQi(t.name),
            }),
          }
        );
      } catch (n) {
        let o = n instanceof Error ? n.message : String(n);
        return { success: !1, message: I.t("commandsAdd.installFailed", { commandName: t.name, error: o }) };
      }
    };
    yQi = {
      command: "add <name-or-id>",
      describe: I.t("commandsAdd.description"),
      builder: (t) =>
        t
          .usage(I.t("commandsAdd.usage"))
          .positional("name-or-id", { describe: I.t("commandsAdd.nameOrIdOption"), type: "string", demandOption: !0 })
          .option("scope", {
            alias: "s",
            describe: I.t("commandsAdd.scopeOption"),
            type: "string",
            default: "project",
            choices: ["project", "global"],
          })
          .example("iflow commands add 123", I.t("commandsAdd.exampleId"))
          .example('iflow commands add "My Command"', I.t("commandsAdd.exampleName"))
          .example("iflow commands add 456 --scope global", I.t("commandsAdd.exampleGlobal")),
      handler: async (t) => {
        await zau(t["name-or-id"], { scope: t.scope });
      },
    };
  });
async function Xau(t) {
  let r = hu(process.cwd()).merged.apiKey;
  if (!r) {
    (console.error(I.t("commandsGet.apiKeyNotFound")), console.error(I.t("commandsGet.pleaseAuthenticateFirst")));
    return;
  }
  console.log(I.t("commandsGet.searchingCommand", { nameOrId: t }));
  try {
    let n = null;
    if (/^\d+$/.test(t)) {
      let o = parseInt(t, 10);
      n = await Kau(r, o);
    }
    if (!n) {
      let o = await Yau(r, 1, 100, t);
      if (!o.success) {
        console.error(`Error: ${o.message}`);
        return;
      }
      n = o.commands?.find((s) => s.name.toLowerCase() === t.toLowerCase()) || o.commands?.[0] || null;
    }
    if (!n) {
      console.error(I.t("commandsGet.commandNotFound", { nameOrId: t }));
      return;
    }
    Jau(n);
  } catch (n) {
    let o = n instanceof Error ? n.message : String(n);
    console.error(I.t("commandsGet.errorFetchingDetails", { error: o }));
  }
}
var Yau,
  Kau,
  Jau,
  EQi,
  vQi = j(() => {
    "use strict";
    dc();
    Ot();
    ((Yau = async (t, e = 1, r = 20, n) => {
      try {
        if (!t) return { success: !1, message: I.t("commandsGet.pleaseAuthenticate") };
        let o = { page: e, size: r, usePage: !0, visibility: "public" };
        n && (o.name = n);
        let s = await fetch("https://apis.iflow.cn/v1/commands/list /* @iflow-api-endpoint */", {
          method: "POST",
          headers: { "User-Agent": "iFlow-Cli", "Content-Type": "application/json" },
          body: JSON.stringify(o),
        });
        if (!s.ok) {
          let c = I.t("commandsGet.unableToLoadCommands");
          return (
            s.status === 401
              ? (c = I.t("commandsGet.authenticationFailed"))
              : s.status === 403
                ? (c = I.t("commandsGet.accessDenied"))
                : s.status === 404
                  ? (c = I.t("commandsGet.serviceNotFound"))
                  : s.status >= 500 && (c = I.t("commandsGet.serverError")),
            { success: !1, message: c }
          );
        }
        let a = await s.json();
        return a.success
          ? { success: !0, commands: Array.isArray(a.data.data) ? a.data.data : [], total: a.data.total || 0 }
          : { success: !1, message: a.message || I.t("commandsGet.failedToLoadFromServer") };
      } catch (o) {
        let s = I.t("commandsGet.connectionError");
        return (
          o instanceof Error && o.message.includes("Failed to fetch") && (s = I.t("commandsGet.networkError")),
          { success: !1, message: s }
        );
      }
    }),
      (Kau = async (t, e) => {
        try {
          let r = await fetch(`https://apis.iflow.cn/v1/commands/get/${e}`, /* @iflow-api-endpoint */ {
            headers: { Authorization: `Bearer ${t}` },
          });
          if (!r.ok) throw new Error(`HTTP ${r.status}: ${r.statusText}`);
          let n = await r.json();
          if (!n.success) throw new Error(n.message || I.t("commandsGet.failedToFetchDetails"));
          return n.data || null;
        } catch (r) {
          return (console.error(I.t("commandsGet.failedToFetchDetails"), r), null);
        }
      }),
      (Jau = (t) => {
        let e = [];
        try {
          e = JSON.parse(t.tags);
        } catch {
          e = [];
        }
        (console.log(
          I.t("commandsGet.commandDetailsTitle") +
            `
`,
        ),
          console.log(I.t("commandsGet.commandId", { id: t.id })),
          console.log(I.t("commandsGet.commandName", { name: t.name })),
          console.log(I.t("commandsGet.commandDescription", { description: t.description })),
          console.log(I.t("commandsGet.commandCategory", { category: t.category })),
          console.log(I.t("commandsGet.commandModel", { modelName: t.modelName })),
          e.length > 0 && console.log(I.t("commandsGet.commandTags", { tags: e.join(", ") })),
          console.log(I.t("commandsGet.commandAuthor", { authorId: t.authorId })),
          console.log(I.t("commandsGet.commandVersion", { version: t.version })),
          console.log(I.t("commandsGet.commandVisibility", { visibility: t.visibility })),
          console.log(I.t("commandsGet.commandStatus", { publishStatus: t.publishStatus })),
          t.detailContext &&
            t.detailContext.trim() &&
            (console.log(
              `
` + I.t("commandsGet.detailContextTitle"),
            ),
            console.log(t.detailContext)),
          console.log(
            `
` + I.t("commandsGet.addCommandHint", { id: t.id }),
          ));
      }));
    EQi = {
      command: "get <name-or-id>",
      describe: I.t("commandsGet.description"),
      builder: (t) =>
        t
          .usage(I.t("commandsGet.usage"))
          .positional("name-or-id", { describe: I.t("commandsGet.nameOrIdOption"), type: "string", demandOption: !0 })
          .example("iflow commands get 123", I.t("commandsGet.exampleId"))
          .example('iflow commands get "My Command"', I.t("commandsGet.exampleName")),
      handler: async (t) => {
        await Xau(t["name-or-id"]);
      },
    };
  });
import CQi from "fs/promises";
import w6r from "path";
function Zau(t, e) {
  if (t === "global") return w6r.join(Tn(), "commands");
  {
    let r = e || process.cwd();
    return w6r.join(r, ui(), "commands");
  }
}
async function tuu(t, e) {
  let { scope: r } = e;
  if (r !== "project" && r !== "global") {
    console.error(I.t("commandsRemove.invalidScope", { scope: r }));
    return;
  }
  console.log(I.t("commandsRemove.removing", { commandName: t, scope: r }));
  try {
    let n = await euu(t, r);
    n.success
      ? (console.log(n.message), console.log(""), console.log(I.t("commandsRemove.restartRequired")))
      : console.error(n.message);
  } catch (n) {
    let o = n instanceof Error ? n.message : String(n);
    console.error(I.t("commandsRemove.error", { error: o }));
  }
}
var euu,
  SQi,
  wQi = j(() => {
    "use strict";
    Ot();
    euu = async (t, e) => {
      try {
        let r = Zau(e),
          n = `${t}.toml`,
          o = w6r.join(r, n);
        try {
          await CQi.access(o);
        } catch {
          return { success: !1, message: I.t("commandsRemove.notFound", { commandName: t, scope: e }) };
        }
        return (
          await CQi.unlink(o),
          { success: !0, message: I.t("commandsRemove.success", { commandName: t, scope: e, filePath: o }) }
        );
      } catch (r) {
        let n = r instanceof Error ? r.message : String(r);
        return { success: !1, message: I.t("commandsRemove.failed", { commandName: t, error: n }) };
      }
    };
    SQi = {
      command: "remove <name>",
      describe: I.t("commandsRemove.description"),
      builder: (t) =>
        t
          .usage(I.t("commandsRemove.usage"))
          .positional("name", { describe: I.t("commandsRemove.nameOption"), type: "string", demandOption: !0 })
          .option("scope", {
            alias: "s",
            describe: I.t("commandsRemove.scopeOption"),
            type: "string",
            default: "project",
            choices: ["project", "global"],
          })
          .example("iflow commands remove my-command", I.t("commandsRemove.exampleProject"))
          .example("iflow commands remove my-command --scope global", I.t("commandsRemove.exampleGlobal")),
      handler: async (t) => {
        await tuu(t.name, { scope: t.scope });
      },
    };
  });
import B3t from "fs/promises";
import L3t from "path";
async function suu(t) {
  let { online: e, page: r, size: n } = t;
  if (e) {
    let s = hu(process.cwd()).merged.apiKey;
    if (!s) {
      (console.error(I.t("commandsList.apiKeyNotFound")), console.error(I.t("commandsList.pleaseAuthenticate")));
      return;
    }
    try {
      console.log(I.t("commandsList.loadingOnlineCommands"));
      let { commands: a, total: u } = await nuu(s, r, n);
      ouu(a, u, r, n);
    } catch (a) {
      let u = a instanceof Error ? a.message : String(a);
      console.error(I.t("commandsList.errorLoadingOnlineCommands", { error: u }));
    }
  } else
    try {
      console.log(I.t("commandsList.loadingLocalCommands"));
      let o = await ruu();
      iuu(o);
    } catch (o) {
      let s = o instanceof Error ? o.message : String(o);
      console.error(I.t("commandsList.errorLoadingLocalCommands", { error: s }));
    }
}
var ruu,
  nuu,
  iuu,
  ouu,
  xQi,
  TQi = j(() => {
    "use strict";
    dc();
    Ot();
    ((ruu = async () => {
      let t = [],
        e = L3t.join(Tn(), "commands");
      try {
        let n = await B3t.readdir(e);
        for (let o of n)
          if (o.endsWith(".toml")) {
            let s = L3t.join(e, o),
              u = (await B3t.readFile(s, "utf8")).match(/description\s*=\s*"([^"]+)"/),
              c = u ? u[1] : void 0;
            t.push({ name: o.replace(".toml", ""), description: c, filePath: s, scope: "global" });
          }
      } catch {}
      let r = L3t.join(process.cwd(), ui(), "commands");
      try {
        let n = await B3t.readdir(r);
        for (let o of n)
          if (o.endsWith(".toml")) {
            let s = L3t.join(r, o),
              u = (await B3t.readFile(s, "utf8")).match(/description\s*=\s*"([^"]+)"/),
              c = u ? u[1] : void 0;
            t.push({ name: o.replace(".toml", ""), description: c, filePath: s, scope: "project" });
          }
      } catch {}
      return t.sort((n, o) => (n.scope !== o.scope ? (n.scope === "global" ? -1 : 1) : n.name.localeCompare(o.name)));
    }),
      (nuu = async (t, e = 1, r = 20) => {
        let n = new URL("https://apis.iflow.cn/v1/commands/list /* @iflow-api-endpoint */");
        (n.searchParams.append("page", e.toString()),
          n.searchParams.append("size", r.toString()),
          n.searchParams.append("visibility", "public"));
        let o = await fetch(n.toString(), {
          headers: { "Content-Type": "application/json", "User-Agent": "iFlow-Cli" },
        });
        if (!o.ok) throw new Error(`HTTP ${o.status}: ${o.statusText}`);
        let s = await o.json();
        if (!s.success) throw new Error(s.message || I.t("commandsList.failedToFetchCommands"));
        let a = Array.isArray(s.data?.data) ? s.data.data : [],
          u = s.data?.total || a.length;
        return { commands: a, total: u };
      }),
      (iuu = (t) => {
        if (t.length === 0) {
          console.log(I.t("commandsList.noLocalCommands"));
          return;
        }
        console.log(I.t("commandsList.localInstalledCommands"));
        let e = "";
        t.forEach((r) => {
          if (r.scope !== e) {
            e = r.scope;
            let o = r.scope === "global" ? "\u{1F30D}" : "\u{1F4C2}",
              s = r.scope === "global" ? I.t("commandsList.globalCommands") : I.t("commandsList.projectCommands");
            console.log(I.t("commandsList.scopeHeader", { scopeIcon: o, scopeLabel: s }));
          }
          let n = t.filter((o) => o.scope === r.scope).findIndex((o) => o.name === r.name) + 1;
          (console.log(I.t("commandsList.commandItem", { commandIndex: n, commandName: r.name })),
            r.description && console.log(I.t("commandsList.commandDescriptionItem", { description: r.description })),
            console.log(I.t("commandsList.commandPath", { filePath: r.filePath })));
        });
      }),
      (ouu = (t, e, r, n) => {
        if (t.length === 0) {
          console.log(I.t("commandsList.noOnlineCommands"));
          return;
        }
        if ((console.log(I.t("commandsList.availableOnlineCommands")), e !== void 0 && r !== void 0 && n !== void 0)) {
          let o = Math.ceil(e / n),
            s = (r - 1) * n + 1,
            a = Math.min(r * n, e);
          console.log(
            I.t("commandsList.pageInfo", { currentPage: r, totalPages: o, startIndex: s, endIndex: a, total: e }),
          );
        }
        if (
          (console.log(""),
          t.forEach((o, s) => {
            let a = [];
            try {
              a = JSON.parse(o.tags);
            } catch {
              a = [];
            }
            let u = r && n ? (r - 1) * n + s + 1 : s + 1;
            (console.log(I.t("commandsList.onlineCommandItem", { actualIndex: u, name: o.name, id: o.id })),
              console.log(I.t("commandsList.onlineCommandDescriptionItem", { description: o.description })),
              console.log(I.t("commandsList.category", { category: o.category })),
              a.length > 0 && console.log(I.t("commandsList.tags", { tags: a.join(", ") })),
              console.log(I.t("commandsList.authorVersion", { authorId: o.authorId, version: o.version })));
          }),
          e !== void 0 && r !== void 0 && n !== void 0)
        ) {
          let o = Math.ceil(e / n),
            s = "";
          (r > 1 &&
            (s +=
              I.t("commandsList.previousPage", { page: r - 1 }) +
              `
`),
            r < o &&
              (s +=
                I.t("commandsList.nextPage", { page: r + 1 }) +
                `
`),
            s &&
              (console.log(
                `
` + I.t("commandsList.navigation"),
              ),
              console.log(s.trimEnd())));
        }
      }));
    xQi = {
      command: "list",
      describe: I.t("commandsList.commandDescription"),
      builder: (t) =>
        t
          .usage(I.t("commandsList.usage"))
          .option("online", { describe: I.t("commandsList.onlineOption"), type: "boolean", default: !1 })
          .option("page", { alias: "p", describe: I.t("commandsList.pageOption"), type: "number", default: 1 })
          .option("size", { alias: "s", describe: I.t("commandsList.sizeOption"), type: "number", default: 20 })
          .example("iflow commands list", I.t("commandsList.exampleDefault"))
          .example("iflow commands list --online", I.t("commandsList.exampleOnline"))
          .example("iflow commands list --online --page 2", I.t("commandsList.examplePage"))
          .example("iflow commands list --online --size 10", I.t("commandsList.exampleSize")),
      handler: async (t) => {
        await suu({ online: t.online, page: t.page, size: t.size });
      },
    };
  });
async function luu(t = {}) {
  let { page: e = 1, size: r = 20, search: n } = t,
    s = hu(process.cwd()).merged.apiKey;
  (s ||
    (console.error(I.t("commandsOnline.apiKeyNotFound")),
    console.error(I.t("commandsOnline.pleaseAuthenticateFirst")),
    process.exit(1)),
    console.log(I.t("commandsOnline.loadingOnlineCommands")));
  try {
    let a = await cuu(s, e, r);
    a.success || (console.error(`${I.t("commandsOnline.errorBrowsingCommands")} ${a.message}`), process.exit(1));
    let u = a.commands || [];
    if (
      (n &&
        (u = u.filter(
          (d) =>
            d.name.toLowerCase().includes(n.toLowerCase()) ||
            d.description.toLowerCase().includes(n.toLowerCase()) ||
            d.category.toLowerCase().includes(n.toLowerCase()),
        )),
      u.length === 0)
    ) {
      let d = n ? ` matching "${n}"` : "";
      console.log(I.t("commandsOnline.noCommandsFound") + d);
      return;
    }
    let c = n ? ` ${I.t("commandsOnline.filteredBy", { search: n })}` : "";
    console.log(`
${uuu}${I.t("commandsOnline.onlineCommandsTitle")}${c}:${OI}
`);
    for (let d of u) {
      (console.log(`${auu}${I.t("commandsOnline.commandItem", { name: d.name, id: d.id })}${OI}`),
        console.log(`  ${R1e}${I.t("commandsOnline.commandDescription", { description: d.description })}${OI}`),
        console.log(`  ${R1e}${I.t("commandsOnline.commandCategory", { category: d.category })}${OI}`),
        console.log(`  ${R1e}${I.t("commandsOnline.commandModel", { modelName: d.modelName })}${OI}`));
      let f = [];
      try {
        f = JSON.parse(d.tags || "[]");
      } catch {
        f = [];
      }
      (f.length > 0 && console.log(`  ${R1e}${I.t("commandsOnline.commandTags", { tags: f.join(", ") })}${OI}`),
        console.log(`  ${R1e}${I.t("commandsOnline.commandAuthor", { authorId: d.authorId })}${OI}`),
        console.log(`  ${R1e}${I.t("commandsOnline.commandVersion", { version: d.version })}${OI}`),
        console.log());
    }
    let m = a.total ? I.t("commandsOnline.totalAvailable", { total: a.total }) : "";
    (console.log(`${DQi}${I.t("commandsOnline.totalCommandsShown", { count: u.length, totalAvailable: m })}${OI}`),
      console.log(`${DQi}${I.t("commandsOnline.installHint")}${OI}`));
  } catch (a) {
    (console.error(I.t("commandsOnline.errorBrowsingCommands"), a), process.exit(1));
  }
}
var auu,
  DQi,
  uuu,
  R1e,
  OI,
  cuu,
  IQi,
  RQi = j(() => {
    "use strict";
    dc();
    Ot();
    ((auu = "\x1B[32m"),
      (DQi = "\x1B[33m"),
      (uuu = "\x1B[34m"),
      (R1e = "\x1B[36m"),
      (OI = "\x1B[0m"),
      (cuu = async (t, e = 1, r = 20) => {
        try {
          if (!t) return { success: !1, message: I.t("commandsOnline.pleaseAuthenticate") };
          let o = await fetch("https://apis.iflow.cn/v1/commands/list /* @iflow-api-endpoint */", {
            method: "POST",
            headers: { "User-Agent": "iFlow-Cli", "Content-Type": "application/json" },
            body: JSON.stringify({ page: e, size: r, usePage: !0, visibility: "public", publishStatus: "published" }),
          });
          if (!o.ok) {
            let u = I.t("commandsOnline.unableToLoadCommands");
            return (
              o.status === 401
                ? (u = I.t("commandsOnline.authenticationFailed"))
                : o.status === 403
                  ? (u = I.t("commandsOnline.accessDenied"))
                  : o.status === 404
                    ? (u = I.t("commandsOnline.serviceNotFound"))
                    : o.status >= 500 && (u = I.t("commandsOnline.serverError")),
              { success: !1, message: u }
            );
          }
          let s = await o.json();
          return s.success
            ? { success: !0, commands: Array.isArray(s.data.data) ? s.data.data : [], total: s.data.total || 0 }
            : { success: !1, message: s.message || I.t("commandsOnline.failedToLoadFromServer") };
        } catch (n) {
          let o = I.t("commandsOnline.connectionError");
          return (
            n instanceof Error && n.message.includes("Failed to fetch") && (o = I.t("commandsOnline.networkError")),
            { success: !1, message: o }
          );
        }
      }));
    IQi = {
      command: "online",
      describe: I.t("commandsOnline.description"),
      builder: (t) =>
        t
          .usage(I.t("commandsOnline.usage"))
          .option("page", { alias: "p", describe: I.t("commandsOnline.pageOption"), type: "number", default: 1 })
          .option("size", { alias: "s", describe: I.t("commandsOnline.sizeOption"), type: "number", default: 20 })
          .option("search", { describe: I.t("commandsOnline.searchOption"), type: "string" }),
      handler: async (t) => {
        await luu({ page: t.page, size: t.size, search: t.search });
      },
    };
  });
var kQi = {};
Wi(kQi, { commandsCommand: () => x6r });
var x6r,
  T6r = j(() => {
    "use strict";
    _Qi();
    vQi();
    wQi();
    TQi();
    RQi();
    Ot();
    x6r = {
      command: "commands",
      describe: I.t("commandsCommand.description"),
      builder: (t) =>
        t
          .command(yQi)
          .command(EQi)
          .command(SQi)
          .command(xQi)
          .command(IQi)
          .demandCommand(1, I.t("commandsCommand.demandCommand"))
          .version(!1),
      handler: () => {},
    };
  });
async function fuu(t, e) {
  let { scope: r } = e;
  r !== "project" && r !== "global" && (console.error(I.t("agentsAdd.invalidScope", { scope: r })), process.exit(1));
  let o = hu(process.cwd()).merged.apiKey;
  (o ||
    (console.error(I.t("agentsAdd.apiKeyNotFound")),
    console.error(I.t("agentsAdd.pleaseAuthenticate")),
    process.exit(1)),
    console.log(I.t("agentsAdd.searching", { nameOrId: t })));
  try {
    let s = null;
    if (/^\d+$/.test(t)) {
      let c = parseInt(t, 10);
      s = await muu(o, c);
    }
    if (!s) {
      let c = await OQi(o, 1, 1e3, t, "public");
      (c.success || (console.error(I.t("agentsAdd.error", { error: c.message })), process.exit(1)),
        (s = c.agents?.find((m) => m.name.toLowerCase() === t.toLowerCase()) || null));
    }
    if (!s) {
      let c = await OQi(o, 1, 1e3, t, "private");
      (c.success || (console.error(I.t("agentsAdd.error", { error: c.message })), process.exit(1)),
        (s = c.agents?.find((m) => m.name.toLowerCase() === t.toLowerCase()) || null));
    }
    (s || (console.error(I.t("agentsAdd.notFoundInRepo", { nameOrId: t })), process.exit(1)),
      console.log(I.t("agentsAdd.foundAgent", { name: s.name })),
      console.log(I.t("agentsAdd.agentDescription", { description: s.description })),
      console.log(I.t("agentsAdd.installing", { scope: r })));
    let a = process.cwd(),
      u = await duu(s, r, a);
    u.success ? console.log(u.message) : (console.error(u.message), process.exit(1));
  } catch (s) {
    (console.error(I.t("agentsAdd.errorAdding", { error: s })), process.exit(1));
  }
}
var OQi,
  muu,
  duu,
  NQi,
  PQi = j(() => {
    "use strict";
    Ot();
    dc();
    ((OQi = async (t, e = 1, r = 20, n, o) => {
      try {
        if (!t) return { success: !1, message: I.t("agentsAdd.pleaseAuthenticate") };
        let s = { page: e, size: r, usePage: !0, visibility: o },
          a = { "User-Agent": "iFlow-Cli", "Content-Type": "application/json" };
        o === "private" && (a.Authorization = `Bearer ${t}`);
        let u = await fetch("https://apis.iflow.cn/v1/agents/list /* @iflow-api-endpoint */", {
          method: "POST",
          headers: a,
          body: JSON.stringify(s),
        });
        if (!u.ok) {
          let d = I.t("agentsAdd.unableToLoadAgents");
          return (
            u.status === 401
              ? (d = I.t("agentsAdd.authenticationFailed"))
              : u.status === 403
                ? (d = I.t("agentsAdd.accessDenied"))
                : u.status === 404
                  ? (d = I.t("agentsAdd.serviceNotFound"))
                  : u.status >= 500 && (d = I.t("agentsAdd.serverError")),
            { success: !1, message: d }
          );
        }
        let c = await u.json();
        return c.success
          ? { success: !0, agents: Array.isArray(c.data.data) ? c.data.data : [], total: c.data.total || 0 }
          : { success: !1, message: c.message || I.t("agentsAdd.failedToLoadFromServer") };
      } catch (s) {
        let a = I.t("agentsAdd.connectionError");
        return (
          s instanceof Error && s.message.includes("Failed to fetch") && (a = I.t("agentsAdd.networkError")),
          { success: !1, message: a }
        );
      }
    }),
      (muu = async (t, e) => {
        try {
          let r = await fetch(`https://apis.iflow.cn/v1/agents/get/${e}`, /* @iflow-api-endpoint */ {
            headers: { Authorization: `Bearer ${t}` },
          });
          if (!r.ok) throw new Error(`HTTP ${r.status}: ${r.statusText}`);
          let n = await r.json();
          if (!n.success) throw new Error(n.message || I.t("agentsAdd.failedToFetchDetails"));
          return n.data || null;
        } catch (r) {
          return (console.error(I.t("agentsAdd.failedToFetchDetails", { error: r })), null);
        }
      }),
      (duu = async (t, e, r) => {
        try {
          let n = [],
            o = !0,
            s = !0,
            a,
            u = null;
          if (t.extInfo && typeof t.extInfo == "string")
            try {
              u = JSON.parse(t.extInfo);
            } catch {}
          if (u) {
            if (
              ((o = u["is-inherit-tools"]),
              (s = u["is-inherit-mcps"] !== void 0 ? u["is-inherit-mcps"] : !0),
              u["allowed-tools"])
            ) {
              let f = u["allowed-tools"]
                .split(",")
                .map((p) => p.trim())
                .filter((p) => p);
              f.length > 0 ? (n = f) : (n = u["is-inherit-tools"] ? ["*"] : []);
            } else n = u["is-inherit-tools"] ? ["*"] : [];
            if (u.mcps) {
              let f = u.mcps
                .split(",")
                .map((p) => p.trim())
                .filter((p) => p);
              f.length > 0 ? (a = f) : (a = u["is-inherit-mcps"] ? void 0 : []);
            } else a = u["is-inherit-mcps"] ? void 0 : [];
          } else {
            try {
              let f = JSON.parse(t.tools || "[]");
              n = Array.isArray(f) ? f : ["*"];
            } catch {
              n = ["*"];
            }
            if (t.mcps)
              try {
                let f = JSON.parse(t.mcps);
                Array.isArray(f) && f.length > 0 && (a = f);
              } catch {
                let f = t.mcps
                  .split(",")
                  .map((p) => p.trim())
                  .filter((p) => p.length > 0);
                f.length > 0 && (a = f);
              }
          }
          let c = {
              agentType: t.name.toLowerCase().replace(/[^a-z0-9]/g, "-"),
              name: t.name,
              description: t.description,
              whenToUse: t.description,
              allowedTools: n,
              allowedMcps: a,
              systemPrompt: t.detailContext || t.description,
              location: e === "global" ? "global" : "project",
              model: t.modelName,
              isInheritTools: o,
              isInheritMcps: s,
            },
            m = await MY(c, r);
          return (
            await gA(r).refresh(),
            { success: !0, message: I.t("agentsAdd.successfullyInstalled", { name: t.name, scope: e, filePath: m }) }
          );
        } catch (n) {
          let o = n instanceof Error ? n.message : String(n);
          return o.includes("Agent file already exists")
            ? { success: !1, message: I.t("agentsAdd.alreadyInstalled", { name: t.name, scope: e }) }
            : { success: !1, message: I.t("agentsAdd.installFailed", { name: t.name, error: o }) };
        }
      }));
    NQi = {
      command: "add <name-or-id>",
      describe: I.t("agentsAdd.description"),
      builder: (t) =>
        t
          .usage(I.t("agentsAdd.usage"))
          .positional("name-or-id", { describe: I.t("agentsAdd.nameOrIdOption"), type: "string", demandOption: !0 })
          .option("scope", {
            alias: "s",
            describe: I.t("agentsAdd.scopeOption"),
            type: "string",
            default: "project",
            choices: ["project", "global"],
          }),
      handler: async (t) => {
        await fuu(t["name-or-id"], { scope: t.scope });
      },
    };
  });
async function guu() {
  let t = process.cwd(),
    e = gA(t);
  try {
    let r = await e.getAgents();
    if (r.length === 0) {
      console.log(I.t("agentsList.noAgentsConfigured"));
      return;
    }
    console.log(I.t("agentsList.configuredAgents"));
    let n = r.filter((s) => s.location === "project"),
      o = r.filter((s) => s.location === "global");
    if (n.length > 0) {
      console.log(`${huu}${I.t("agentsList.projectAgents")}:${M3t}`);
      for (let s of n) {
        if (
          (console.log(`\u2022 ${BQi}${s.name}${M3t} (${s.agentType})`),
          s.description && console.log(`  ${I.t("agentsList.agentDescription")}: ${s.description}`),
          s.model && console.log(`  ${I.t("agentsList.model")}: ${s.model}`),
          s.allowedTools && s.allowedTools.length > 0)
        ) {
          let a = s.allowedTools.includes("*") ? I.t("agentsList.allTools") : s.allowedTools.join(", "),
            u = s.isInheritTools === !1 ? ` ${I.t("agentsList.noInherit")}` : "";
          console.log(`  ${I.t("agentsList.tools")}: ${a}${u}`);
        } else
          s.isInheritTools === !1 && console.log(`  ${I.t("agentsList.tools")}: ${I.t("agentsList.noneNoInherit")}`);
        (s.allowedMcps && s.allowedMcps.length > 0
          ? console.log(`  ${I.t("agentsList.mcps")}: ${s.allowedMcps.join(", ")}`)
          : s.isInheritMcps === !1 && console.log(`  ${I.t("agentsList.mcps")}: ${I.t("agentsList.noneNoInherit")}`),
          console.log(`  ${I.t("agentsList.location")}: ${s.filePath || I.t("agentsList.unknown")}`),
          console.log());
      }
    }
    if (o.length > 0) {
      console.log(`${puu}${I.t("agentsList.globalAgents")}:${M3t}`);
      for (let s of o) {
        if (
          (console.log(`\u2022 ${BQi}${s.name}${M3t} (${s.agentType})`),
          s.description && console.log(`  ${I.t("agentsList.agentDescription")}: ${s.description}`),
          s.model && console.log(`  ${I.t("agentsList.model")}: ${s.model}`),
          s.allowedTools && s.allowedTools.length > 0)
        ) {
          let a = s.allowedTools.includes("*") ? I.t("agentsList.allTools") : s.allowedTools.join(", "),
            u = s.isInheritTools === !1 ? ` ${I.t("agentsList.noInherit")}` : "";
          console.log(`  ${I.t("agentsList.tools")}: ${a}${u}`);
        } else
          s.isInheritTools === !1 && console.log(`  ${I.t("agentsList.tools")}: ${I.t("agentsList.noneNoInherit")}`);
        (s.allowedMcps && s.allowedMcps.length > 0
          ? console.log(`  ${I.t("agentsList.mcps")}: ${s.allowedMcps.join(", ")}`)
          : s.isInheritMcps === !1 && console.log(`  ${I.t("agentsList.mcps")}: ${I.t("agentsList.noneNoInherit")}`),
          console.log(`  ${I.t("agentsList.location")}: ${s.filePath || I.t("agentsList.unknown")}`),
          console.log());
      }
    }
    console.log(I.t("agentsList.total", { count: r.length }));
  } catch (r) {
    (console.error(I.t("agentsList.errorLoading"), r), process.exit(1));
  }
}
var BQi,
  puu,
  huu,
  M3t,
  LQi,
  MQi = j(() => {
    "use strict";
    Ot();
    ((BQi = "\x1B[32m"), (puu = "\x1B[33m"), (huu = "\x1B[34m"), (M3t = "\x1B[0m"));
    LQi = {
      command: "list",
      describe: I.t("agentsList.description"),
      builder: (t) => t.usage(I.t("agentsList.usage")),
      handler: async () => {
        await guu();
      },
    };
  });
import * as F3t from "fs";
async function buu(t, e) {
  let { scope: r } = e,
    n = process.cwd(),
    o = gA(n);
  try {
    let a = (await o.getAgents()).filter((u) => u.name === t || u.agentType === t);
    if ((r && r !== "all" && (a = a.filter((u) => u.location === r)), a.length === 0)) {
      let u = r && r !== "all" ? ` ${I.t("agentsRemove.inScope", { scope: r })}` : "";
      (console.error(I.t("agentsRemove.notFound", { name: t }) + u), process.exit(1));
    }
    if (a.length > 1 && !r) {
      console.error(I.t("agentsRemove.multipleFound", { name: t }));
      for (let u of a)
        console.error(I.t("agentsRemove.agentListItem", { name: u.name, location: u.location, filePath: u.filePath }));
      (console.error(I.t("agentsRemove.useScope")), process.exit(1));
    }
    for (let u of a)
      try {
        u.filePath && F3t.existsSync(u.filePath)
          ? (F3t.unlinkSync(u.filePath),
            console.log(I.t("agentsRemove.successfullyRemoved", { name: u.name, scope: u.location })),
            console.log(I.t("agentsRemove.deleted", { filePath: u.filePath })))
          : console.warn(I.t("agentsRemove.fileNotFound", { filePath: u.filePath }));
      } catch (c) {
        (console.error(I.t("agentsRemove.errorRemoving", { filePath: u.filePath }), c), process.exit(1));
      }
    await o.refresh();
  } catch (s) {
    (console.error(I.t("agentsRemove.errorRemovingAgent"), s), process.exit(1));
  }
}
var FQi,
  UQi = j(() => {
    "use strict";
    Ot();
    FQi = {
      command: "remove <name>",
      describe: I.t("agentsRemove.description"),
      builder: (t) =>
        t
          .usage(I.t("agentsRemove.usage"))
          .positional("name", { describe: I.t("agentsRemove.nameOption"), type: "string", demandOption: !0 })
          .option("scope", {
            alias: "s",
            describe: I.t("agentsRemove.scopeOption"),
            type: "string",
            choices: ["project", "global", "all"],
          }),
      handler: async (t) => {
        await buu(t.name, { scope: t.scope });
      },
    };
  });
import * as U3t from "fs";
async function Euu(t) {
  let e = process.cwd(),
    r = gA(e);
  try {
    let o = (await r.getAgents()).filter((s) => s.name === t || s.agentType === t);
    o.length === 0 && (console.error(I.t("agentsGet.notFound", { name: t })), process.exit(1));
    for (let s of o) {
      if (
        (console.log(`${Auu}${I.t("agentsGet.agent")}: ${s.name}${PA}`),
        console.log(`${Sy}${I.t("agentsGet.type")}:${PA} ${s.agentType}`),
        console.log(`${Sy}${I.t("agentsGet.location")}:${PA} ${s.location}`),
        console.log(`${Sy}${I.t("agentsGet.file")}:${PA} ${s.filePath}`),
        s.description && console.log(`${Sy}${I.t("agentsGet.agentDescription")}:${PA} ${s.description}`),
        s.whenToUse && console.log(`${Sy}${I.t("agentsGet.whenToUse")}:${PA} ${s.whenToUse}`),
        s.model && console.log(`${Sy}${I.t("agentsGet.model")}:${PA} ${s.model}`),
        s.allowedTools && s.allowedTools.length > 0)
      ) {
        let a = s.allowedTools.includes("*") ? I.t("agentsGet.allTools") : s.allowedTools.join(", "),
          u = s.isInheritTools === !1 ? ` ${I.t("agentsGet.noInherit")}` : "";
        console.log(`${Sy}${I.t("agentsGet.allowedTools")}:${PA} ${a}${u}`);
      } else
        s.isInheritTools === !1
          ? console.log(`${Sy}${I.t("agentsGet.allowedTools")}:${PA} ${I.t("agentsGet.noneNoInherit")}`)
          : console.log(`${Sy}${I.t("agentsGet.allowedTools")}:${PA} ${I.t("agentsGet.allToolsInherit")}`);
      if (
        (s.allowedMcps && s.allowedMcps.length > 0
          ? console.log(`${Sy}${I.t("agentsGet.allowedMcpServers")}:${PA} ${s.allowedMcps.join(", ")}`)
          : s.isInheritMcps === !1
            ? console.log(`${Sy}${I.t("agentsGet.allowedMcpServers")}:${PA} ${I.t("agentsGet.noneNoInherit")}`)
            : console.log(`${Sy}${I.t("agentsGet.allowedMcpServers")}:${PA} ${I.t("agentsGet.allMcpServersInherit")}`),
        s.systemPrompt && (console.log(`${Sy}${I.t("agentsGet.systemPrompt")}:${PA}`), console.log(s.systemPrompt)),
        s.filePath && U3t.existsSync(s.filePath))
      )
        try {
          let a = U3t.readFileSync(s.filePath, "utf8");
          (console.log(`
${_uu}${I.t("agentsGet.fileContent")}:${PA}`),
            console.log("\u2500".repeat(50)),
            console.log(a),
            console.log("\u2500".repeat(50)));
        } catch (a) {
          console.warn(I.t("agentsGet.couldNotReadFile", { error: a }));
        }
      else
        console.warn(
          `${yuu}${I.t("agentsGet.warning")}:${PA} ${I.t("agentsGet.fileNotFound", { path: s.filePath || I.t("agentsGet.unknownPath") })}`,
        );
      o.length > 1 &&
        console.log(
          `
` +
            "=".repeat(60) +
            `
`,
        );
    }
  } catch (n) {
    (console.error(I.t("agentsGet.errorGettingDetails"), n), process.exit(1));
  }
}
var Auu,
  yuu,
  Sy,
  _uu,
  PA,
  $Qi,
  jQi = j(() => {
    "use strict";
    Ot();
    ((Auu = "\x1B[32m"), (yuu = "\x1B[33m"), (Sy = "\x1B[34m"), (_uu = "\x1B[36m"), (PA = "\x1B[0m"));
    $Qi = {
      command: "get <name>",
      describe: I.t("agentsGet.description"),
      builder: (t) =>
        t
          .usage(I.t("agentsGet.usage"))
          .positional("name", { describe: I.t("agentsGet.nameOption"), type: "string", demandOption: !0 }),
      handler: async (t) => {
        await Euu(t.name);
      },
    };
  });
async function wuu(t = {}) {
  let { page: e = 1, size: r = 20, search: n } = t,
    s = hu(process.cwd()).merged.apiKey;
  (s ||
    (console.error(I.t("agentsOnline.apiKeyNotFound")),
    console.error(I.t("agentsOnline.pleaseAuthenticate")),
    process.exit(1)),
    console.log(I.t("agentsOnline.loadingOnlineAgents")));
  try {
    let a = await Suu(s, e, r);
    a.success || (console.error(I.t("agentsOnline.error", { error: a.message })), process.exit(1));
    let u = a.agents || [];
    if (
      (n &&
        (u = u.filter(
          (c) =>
            c.name.toLowerCase().includes(n.toLowerCase()) ||
            c.description.toLowerCase().includes(n.toLowerCase()) ||
            c.category.toLowerCase().includes(n.toLowerCase()),
        )),
      u.length === 0)
    ) {
      let c = n ? I.t("agentsOnline.matching", { search: n }) : "";
      console.log(I.t("agentsOnline.noAgentsFound") + c);
      return;
    }
    console.log(`
${Cuu}${I.t("agentsOnline.onlineAgents")}${n ? ` ${I.t("agentsOnline.filteredBy", { search: n })}` : ""}:${ap}
`);
    for (let c of u) {
      if (
        (console.log(`${vuu}\u2022 ${c.name}${ap} (ID: ${c.id})`),
        console.log(`  ${BA}${I.t("agentsOnline.agentDescription")}:${ap} ${c.description}`),
        console.log(`  ${BA}${I.t("agentsOnline.category")}:${ap} ${c.category}`),
        console.log(`  ${BA}${I.t("agentsOnline.model")}:${ap} ${c.modelName}`),
        c.tags && console.log(`  ${BA}${I.t("agentsOnline.tags")}:${ap} ${c.tags}`),
        console.log(`  ${BA}${I.t("agentsOnline.author")}:${ap} ${c.authorId}`),
        console.log(`  ${BA}${I.t("agentsOnline.version")}:${ap} ${c.version}`),
        c.extInfo)
      ) {
        if (c.extInfo["allowed-tools"]) {
          let f = c.extInfo["allowed-tools"]
            .split(",")
            .map((p) => p.trim())
            .filter((p) => p);
          f.length > 0
            ? console.log(`  ${BA}${I.t("agentsOnline.allowedTools")}:${ap} ${f.join(", ")}`)
            : c.extInfo["is-inherit-tools"]
              ? console.log(`  ${BA}${I.t("agentsOnline.allowedTools")}:${ap} ${I.t("agentsOnline.allToolsAvailable")}`)
              : console.log(`  ${BA}${I.t("agentsOnline.allowedTools")}:${ap} ${I.t("agentsOnline.noToolsAvailable")}`);
        }
        let m = c.extInfo["is-inherit-tools"];
        if (
          (console.log(
            `  ${BA}${I.t("agentsOnline.inheritTools")}:${ap} ${m ? I.t("agentsOnline.yes") : I.t("agentsOnline.no")}`,
          ),
          c.extInfo.mcps)
        ) {
          let f = c.extInfo.mcps
            .split(",")
            .map((p) => p.trim())
            .filter((p) => p);
          f.length > 0
            ? console.log(`  ${BA}${I.t("agentsOnline.mcpServers")}:${ap} ${f.join(", ")}`)
            : c.extInfo["is-inherit-mcps"]
              ? console.log(
                  `  ${BA}${I.t("agentsOnline.mcpServers")}:${ap} ${I.t("agentsOnline.allMcpServersAvailable")}`,
                )
              : console.log(
                  `  ${BA}${I.t("agentsOnline.mcpServers")}:${ap} ${I.t("agentsOnline.noMcpServersAvailable")}`,
                );
        } else
          c.extInfo["is-inherit-mcps"]
            ? console.log(
                `  ${BA}${I.t("agentsOnline.mcpServers")}:${ap} ${I.t("agentsOnline.allMcpServersAvailable")}`,
              )
            : console.log(
                `  ${BA}${I.t("agentsOnline.mcpServers")}:${ap} ${I.t("agentsOnline.noMcpServersAvailable")}`,
              );
        let d = c.extInfo["is-inherit-mcps"];
        console.log(
          `  ${BA}${I.t("agentsOnline.inheritMcps")}:${ap} ${d ? I.t("agentsOnline.yes") : I.t("agentsOnline.no")}`,
        );
      }
      console.log();
    }
    (console.log(`${QQi}${I.t("agentsOnline.totalShown", { count: u.length, total: a.total })}${ap}`),
      console.log(`${QQi}${I.t("agentsOnline.installHint")}${ap}`));
  } catch (a) {
    (console.error(I.t("agentsOnline.errorBrowsing", { error: a })), process.exit(1));
  }
}
var vuu,
  QQi,
  Cuu,
  BA,
  ap,
  Suu,
  GQi,
  qQi = j(() => {
    "use strict";
    dc();
    Ot();
    ((vuu = "\x1B[32m"),
      (QQi = "\x1B[33m"),
      (Cuu = "\x1B[34m"),
      (BA = "\x1B[36m"),
      (ap = "\x1B[0m"),
      (Suu = async (t, e = 1, r = 20) => {
        try {
          if (!t) return { success: !1, message: I.t("agentsOnline.pleaseAuthenticate") };
          let o = await fetch("https://apis.iflow.cn/v1/agents/list /* @iflow-api-endpoint */", {
            method: "POST",
            headers: { "User-Agent": "iFlow-Cli", "Content-Type": "application/json" },
            body: JSON.stringify({ page: e, size: r, visibility: "public" }),
          });
          if (!o.ok) {
            let u = I.t("agentsOnline.unableToLoadAgents");
            return (
              o.status === 401
                ? (u = I.t("agentsOnline.authenticationFailed"))
                : o.status === 403
                  ? (u = I.t("agentsOnline.accessDenied"))
                  : o.status === 404
                    ? (u = I.t("agentsOnline.serviceNotFound"))
                    : o.status >= 500 && (u = I.t("agentsOnline.serverError")),
              { success: !1, message: u }
            );
          }
          let s = await o.json();
          return s.success
            ? { success: !0, agents: Array.isArray(s.data.data) ? s.data.data : [], total: s.data.total || 0 }
            : { success: !1, message: s.message || I.t("agentsOnline.failedToLoadFromServer") };
        } catch (n) {
          let o = I.t("agentsOnline.connectionError");
          return (
            n instanceof Error && n.message.includes("Failed to fetch") && (o = I.t("agentsOnline.networkError")),
            { success: !1, message: o }
          );
        }
      }));
    GQi = {
      command: "online",
      describe: I.t("agentsOnline.description"),
      builder: (t) =>
        t
          .usage(I.t("agentsOnline.usage"))
          .option("page", { alias: "p", describe: I.t("agentsOnline.pageOption"), type: "number", default: 1 })
          .option("size", { alias: "s", describe: I.t("agentsOnline.sizeOption"), type: "number", default: 20 })
          .option("search", { describe: I.t("agentsOnline.searchOption"), type: "string" }),
      handler: async (t) => {
        await wuu({ page: t.page, size: t.size, search: t.search });
      },
    };
  });
var HQi = {};
Wi(HQi, { agentCommand: () => D6r });
var D6r,
  I6r = j(() => {
    "use strict";
    PQi();
    MQi();
    UQi();
    jQi();
    qQi();
    Ot();
    D6r = {
      command: "agent",
      describe: I.t("agentCommand.description"),
      builder: (t) =>
        t
          .command(NQi)
          .command(LQi)
          .command(FQi)
          .command($Qi)
          .command(GQi)
          .demandCommand(1, I.t("agentCommand.demandCommand"))
          .version(!1),
      handler: () => {},
    };
  });
import { EventEmitter as ccu } from "events";
var yo,
  NI = j(() => {
    "use strict";
    yo = new ccu();
    yo.setMaxListeners(20);
  });
import * as O1e from "fs";
import * as G3t from "path";
function q3t(t, e) {
  let r = process.argv[1];
  if (!r) return { packageManager: "unknown", isGlobal: !1 };
  try {
    let n = O1e.realpathSync(r).replace(/\\/g, "/"),
      o = t?.replace(/\\/g, "/");
    if (ll(process.cwd()) && o && n.startsWith(o) && !n.includes("/node_modules/"))
      return {
        packageManager: "unknown",
        isGlobal: !1,
        updateMessage: 'Running from a local git clone. Please update with "git pull".',
      };
    if (n.includes("/.npm/_npx") || n.includes("/npm/_npx"))
      return { packageManager: "npx", isGlobal: !1, updateMessage: "Running via npx, update not applicable." };
    if (n.includes("/.pnpm/_pnpx"))
      return { packageManager: "pnpx", isGlobal: !1, updateMessage: "Running via pnpx, update not applicable." };
    if (n.includes("/.pnpm/global")) {
      let c = "pnpm add -g @iflow-ai/iflow-cli@latest";
      return {
        packageManager: "pnpm",
        isGlobal: !0,
        updateCommand: c,
        updateMessage: e
          ? `Please run ${c} to update`
          : "Installed with pnpm. Attempting to automatically update now...",
      };
    }
    if (n.includes("/.yarn/global")) {
      let c = "yarn global add @iflow-ai/iflow-cli@latest";
      return {
        packageManager: "yarn",
        isGlobal: !0,
        updateCommand: c,
        updateMessage: e
          ? `Please run ${c} to update`
          : "Installed with yarn. Attempting to automatically update now...",
      };
    }
    if (n.includes("/.bun/install/cache"))
      return { packageManager: "bunx", isGlobal: !1, updateMessage: "Running via bunx, update not applicable." };
    if (n.includes("/.bun/bin")) {
      let c = "bun add -g @iflow-ai/iflow-cli@latest";
      return {
        packageManager: "bun",
        isGlobal: !0,
        updateCommand: c,
        updateMessage: e
          ? `Please run ${c} to update`
          : "Installed with bun. Attempting to automatically update now...",
      };
    }
    if (o && n.startsWith(`${o}/node_modules`)) {
      let c = "npm";
      return (
        O1e.existsSync(G3t.join(t, "yarn.lock"))
          ? (c = "yarn")
          : O1e.existsSync(G3t.join(t, "pnpm-lock.yaml"))
            ? (c = "pnpm")
            : O1e.existsSync(G3t.join(t, "bun.lockb")) && (c = "bun"),
        {
          packageManager: c,
          isGlobal: !1,
          updateMessage: "Locally installed. Please update via your project's package.json.",
        }
      );
    }
    let u = "global" === "aone" ? "npm install -g @ali/iflow-cli@latest" : "npm install -g @iflow-ai/iflow-cli@latest";
    return {
      packageManager: "npm",
      isGlobal: !0,
      updateCommand: u,
      updateMessage: e ? I.t("autoUpdate.fallback", { updateCommand: u }) : I.t("autoUpdate.installWithNpm"),
    };
  } catch (n) {
    return (console.log(n), { packageManager: "unknown", isGlobal: !1 });
  }
}
var U6r = j(() => {
  "use strict";
  Ot();
});
import { EventEmitter as lcu } from "events";
var D3,
  $6r = j(() => {
    "use strict";
    D3 = new lcu();
  });
var ra = j(() => {
  "use strict";
});
import { spawn as mcu } from "child_process";
var H3t,
  j6r = j(() => {
    "use strict";
    H3t = mcu;
  });
var Gd,
  hGi,
  gGi = j(() => {
    "use strict";
    OA();
    ((Gd = {
      type: "dark",
      Background: "#0b0e14",
      UserMessageBackground: "#3C3C3C",
      UserMessageColor: "#c0c0c0",
      Foreground: "#bfbdb6",
      LightBlue: "#59C2FF",
      AccentBlue: "#39BAE6",
      AccentPurple: "#D2A6FF",
      AccentCyan: "#95E6CB",
      AccentGreen: "#AAD94C",
      AccentYellow: "#FFB454",
      AccentRed: "#F26D78",
      DiffAdded: "#293022",
      DiffRemoved: "#3D1215",
      Comment: "#646A71",
      Gray: "#3D4149",
      GradientColors: ["#FFB454", "#F26D78"],
    }),
      (hGi = new zc(
        "Ayu",
        "dark",
        {
          hljs: {
            display: "block",
            overflowX: "auto",
            padding: "0.5em",
            background: Gd.Background,
            color: Gd.Foreground,
          },
          "hljs-keyword": { color: Gd.AccentYellow },
          "hljs-literal": { color: Gd.AccentPurple },
          "hljs-symbol": { color: Gd.AccentCyan },
          "hljs-name": { color: Gd.LightBlue },
          "hljs-link": { color: Gd.AccentBlue },
          "hljs-function .hljs-keyword": { color: Gd.AccentYellow },
          "hljs-subst": { color: Gd.Foreground },
          "hljs-string": { color: Gd.AccentGreen },
          "hljs-title": { color: Gd.AccentYellow },
          "hljs-type": { color: Gd.AccentBlue },
          "hljs-attribute": { color: Gd.AccentYellow },
          "hljs-bullet": { color: Gd.AccentYellow },
          "hljs-addition": { color: Gd.AccentGreen },
          "hljs-variable": { color: Gd.Foreground },
          "hljs-template-tag": { color: Gd.AccentYellow },
          "hljs-template-variable": { color: Gd.AccentYellow },
          "hljs-comment": { color: Gd.Comment, fontStyle: "italic" },
          "hljs-quote": { color: Gd.AccentCyan, fontStyle: "italic" },
          "hljs-deletion": { color: Gd.AccentRed },
          "hljs-meta": { color: Gd.AccentYellow },
          "hljs-doctag": { fontWeight: "bold" },
          "hljs-strong": { fontWeight: "bold" },
          "hljs-emphasis": { fontStyle: "italic" },
        },
        Gd,
      )));
  });
var Oc,
  bGi,
  AGi = j(() => {
    "use strict";
    OA();
    ((Oc = {
      type: "light",
      Background: "#f8f9fa",
      UserMessageBackground: "#F5F5F5",
      UserMessageColor: "#6a6a6a",
      Foreground: "#5c6166",
      LightBlue: "#55b4d4",
      AccentBlue: "#399ee6",
      AccentPurple: "#a37acc",
      AccentCyan: "#4cbf99",
      AccentGreen: "#86b300",
      AccentYellow: "#f2ae49",
      AccentRed: "#f07171",
      DiffAdded: "#C6EAD8",
      DiffRemoved: "#FFCCCC",
      Comment: "#ABADB1",
      Gray: "#a6aaaf",
      GradientColors: ["#399ee6", "#86b300"],
    }),
      (bGi = new zc(
        "Ayu Light",
        "light",
        {
          hljs: {
            display: "block",
            overflowX: "auto",
            padding: "0.5em",
            background: Oc.Background,
            color: Oc.Foreground,
          },
          "hljs-comment": { color: Oc.Comment, fontStyle: "italic" },
          "hljs-quote": { color: Oc.AccentCyan, fontStyle: "italic" },
          "hljs-string": { color: Oc.AccentGreen },
          "hljs-constant": { color: Oc.AccentCyan },
          "hljs-number": { color: Oc.AccentPurple },
          "hljs-keyword": { color: Oc.AccentYellow },
          "hljs-selector-tag": { color: Oc.AccentYellow },
          "hljs-attribute": { color: Oc.AccentYellow },
          "hljs-variable": { color: Oc.Foreground },
          "hljs-variable.language": { color: Oc.LightBlue, fontStyle: "italic" },
          "hljs-title": { color: Oc.AccentBlue },
          "hljs-section": { color: Oc.AccentGreen, fontWeight: "bold" },
          "hljs-type": { color: Oc.LightBlue },
          "hljs-class .hljs-title": { color: Oc.AccentBlue },
          "hljs-tag": { color: Oc.LightBlue },
          "hljs-name": { color: Oc.AccentBlue },
          "hljs-builtin-name": { color: Oc.AccentYellow },
          "hljs-meta": { color: Oc.AccentYellow },
          "hljs-symbol": { color: Oc.AccentRed },
          "hljs-bullet": { color: Oc.AccentYellow },
          "hljs-regexp": { color: Oc.AccentCyan },
          "hljs-link": { color: Oc.LightBlue },
          "hljs-deletion": { color: Oc.AccentRed },
          "hljs-addition": { color: Oc.AccentGreen },
          "hljs-emphasis": { fontStyle: "italic" },
          "hljs-strong": { fontWeight: "bold" },
          "hljs-literal": { color: Oc.AccentCyan },
          "hljs-built_in": { color: Oc.AccentRed },
          "hljs-doctag": { color: Oc.AccentRed },
          "hljs-template-variable": { color: Oc.AccentCyan },
          "hljs-selector-id": { color: Oc.AccentRed },
        },
        Oc,
      )));
  });
var Nu,
  yGi,
  _Gi = j(() => {
    "use strict";
    OA();
    ((Nu = {
      type: "dark",
      Background: "#282c34",
      UserMessageBackground: "#3C3C3C",
      UserMessageColor: "#c0c0c0",
      Foreground: "#abb2bf",
      LightBlue: "#61aeee",
      AccentBlue: "#61aeee",
      AccentPurple: "#c678dd",
      AccentCyan: "#56b6c2",
      AccentGreen: "#98c379",
      AccentYellow: "#e6c07b",
      AccentRed: "#e06c75",
      DiffAdded: "#39544E",
      DiffRemoved: "#562B2F",
      Comment: "#5c6370",
      Gray: "#5c6370",
      GradientColors: ["#61aeee", "#98c379"],
    }),
      (yGi = new zc(
        "Atom One",
        "dark",
        {
          hljs: {
            display: "block",
            overflowX: "auto",
            padding: "0.5em",
            color: Nu.Foreground,
            background: Nu.Background,
          },
          "hljs-comment": { color: Nu.Comment, fontStyle: "italic" },
          "hljs-quote": { color: Nu.Comment, fontStyle: "italic" },
          "hljs-doctag": { color: Nu.AccentPurple },
          "hljs-keyword": { color: Nu.AccentPurple },
          "hljs-formula": { color: Nu.AccentPurple },
          "hljs-section": { color: Nu.AccentRed },
          "hljs-name": { color: Nu.AccentRed },
          "hljs-selector-tag": { color: Nu.AccentRed },
          "hljs-deletion": { color: Nu.AccentRed },
          "hljs-subst": { color: Nu.AccentRed },
          "hljs-literal": { color: Nu.AccentCyan },
          "hljs-string": { color: Nu.AccentGreen },
          "hljs-regexp": { color: Nu.AccentGreen },
          "hljs-addition": { color: Nu.AccentGreen },
          "hljs-attribute": { color: Nu.AccentGreen },
          "hljs-meta-string": { color: Nu.AccentGreen },
          "hljs-built_in": { color: Nu.AccentYellow },
          "hljs-class .hljs-title": { color: Nu.AccentYellow },
          "hljs-attr": { color: Nu.AccentYellow },
          "hljs-variable": { color: Nu.AccentYellow },
          "hljs-template-variable": { color: Nu.AccentYellow },
          "hljs-type": { color: Nu.AccentYellow },
          "hljs-selector-class": { color: Nu.AccentYellow },
          "hljs-selector-attr": { color: Nu.AccentYellow },
          "hljs-selector-pseudo": { color: Nu.AccentYellow },
          "hljs-number": { color: Nu.AccentYellow },
          "hljs-symbol": { color: Nu.AccentBlue },
          "hljs-bullet": { color: Nu.AccentBlue },
          "hljs-link": { color: Nu.AccentBlue, textDecoration: "underline" },
          "hljs-meta": { color: Nu.AccentBlue },
          "hljs-selector-id": { color: Nu.AccentBlue },
          "hljs-title": { color: Nu.AccentBlue },
          "hljs-emphasis": { fontStyle: "italic" },
          "hljs-strong": { fontWeight: "bold" },
        },
        Nu,
      )));
  });
var Um,
  EGi,
  vGi = j(() => {
    "use strict";
    OA();
    ((Um = {
      type: "dark",
      Background: "#282a36",
      UserMessageBackground: "#3C3C3C",
      UserMessageColor: "#c0c0c0",
      Foreground: "#f8f8f2",
      LightBlue: "#8be9fd",
      AccentBlue: "#8be9fd",
      AccentPurple: "#ff79c6",
      AccentCyan: "#8be9fd",
      AccentGreen: "#50fa7b",
      AccentYellow: "#f1fa8c",
      AccentRed: "#ff5555",
      DiffAdded: "#11431d",
      DiffRemoved: "#6e1818",
      Comment: "#6272a4",
      Gray: "#6272a4",
      GradientColors: ["#ff79c6", "#8be9fd"],
    }),
      (EGi = new zc(
        "Dracula",
        "dark",
        {
          hljs: {
            display: "block",
            overflowX: "auto",
            padding: "0.5em",
            background: Um.Background,
            color: Um.Foreground,
          },
          "hljs-keyword": { color: Um.AccentBlue, fontWeight: "bold" },
          "hljs-selector-tag": { color: Um.AccentBlue, fontWeight: "bold" },
          "hljs-literal": { color: Um.AccentBlue, fontWeight: "bold" },
          "hljs-section": { color: Um.AccentBlue, fontWeight: "bold" },
          "hljs-link": { color: Um.AccentBlue },
          "hljs-function .hljs-keyword": { color: Um.AccentPurple },
          "hljs-subst": { color: Um.Foreground },
          "hljs-string": { color: Um.AccentYellow },
          "hljs-title": { color: Um.AccentYellow, fontWeight: "bold" },
          "hljs-name": { color: Um.AccentYellow, fontWeight: "bold" },
          "hljs-type": { color: Um.AccentYellow, fontWeight: "bold" },
          "hljs-attribute": { color: Um.AccentYellow },
          "hljs-symbol": { color: Um.AccentYellow },
          "hljs-bullet": { color: Um.AccentYellow },
          "hljs-addition": { color: Um.AccentGreen },
          "hljs-variable": { color: Um.AccentYellow },
          "hljs-template-tag": { color: Um.AccentYellow },
          "hljs-template-variable": { color: Um.AccentYellow },
          "hljs-comment": { color: Um.Comment },
          "hljs-quote": { color: Um.Comment },
          "hljs-deletion": { color: Um.AccentRed },
          "hljs-meta": { color: Um.Comment },
          "hljs-doctag": { fontWeight: "bold" },
          "hljs-strong": { fontWeight: "bold" },
          "hljs-emphasis": { fontStyle: "italic" },
        },
        Um,
      )));
  });
var Nc,
  CGi,
  SGi = j(() => {
    "use strict";
    OA();
    ((Nc = {
      type: "dark",
      Background: "#24292e",
      UserMessageBackground: "#3C3C3C",
      UserMessageColor: "#c0c0c0",
      Foreground: "#d1d5da",
      LightBlue: "#79B8FF",
      AccentBlue: "#79B8FF",
      AccentPurple: "#B392F0",
      AccentCyan: "#9ECBFF",
      AccentGreen: "#85E89D",
      AccentYellow: "#FFAB70",
      AccentRed: "#F97583",
      DiffAdded: "#3C4636",
      DiffRemoved: "#502125",
      Comment: "#6A737D",
      Gray: "#6A737D",
      GradientColors: ["#79B8FF", "#85E89D"],
    }),
      (CGi = new zc(
        "GitHub",
        "dark",
        {
          hljs: {
            display: "block",
            overflowX: "auto",
            padding: "0.5em",
            color: Nc.Foreground,
            background: Nc.Background,
          },
          "hljs-comment": { color: Nc.Comment, fontStyle: "italic" },
          "hljs-quote": { color: Nc.Comment, fontStyle: "italic" },
          "hljs-keyword": { color: Nc.AccentRed, fontWeight: "bold" },
          "hljs-selector-tag": { color: Nc.AccentRed, fontWeight: "bold" },
          "hljs-subst": { color: Nc.Foreground },
          "hljs-number": { color: Nc.LightBlue },
          "hljs-literal": { color: Nc.LightBlue },
          "hljs-variable": { color: Nc.AccentYellow },
          "hljs-template-variable": { color: Nc.AccentYellow },
          "hljs-tag .hljs-attr": { color: Nc.AccentYellow },
          "hljs-string": { color: Nc.AccentCyan },
          "hljs-doctag": { color: Nc.AccentCyan },
          "hljs-title": { color: Nc.AccentPurple, fontWeight: "bold" },
          "hljs-section": { color: Nc.AccentPurple, fontWeight: "bold" },
          "hljs-selector-id": { color: Nc.AccentPurple, fontWeight: "bold" },
          "hljs-type": { color: Nc.AccentGreen, fontWeight: "bold" },
          "hljs-class .hljs-title": { color: Nc.AccentGreen, fontWeight: "bold" },
          "hljs-tag": { color: Nc.AccentGreen },
          "hljs-name": { color: Nc.AccentGreen },
          "hljs-attribute": { color: Nc.LightBlue },
          "hljs-regexp": { color: Nc.AccentCyan },
          "hljs-link": { color: Nc.AccentCyan },
          "hljs-symbol": { color: Nc.AccentPurple },
          "hljs-bullet": { color: Nc.AccentPurple },
          "hljs-built_in": { color: Nc.LightBlue },
          "hljs-builtin-name": { color: Nc.LightBlue },
          "hljs-meta": { color: Nc.LightBlue, fontWeight: "bold" },
          "hljs-deletion": { background: "#86181D", color: Nc.AccentRed },
          "hljs-addition": { background: "#144620", color: Nc.AccentGreen },
          "hljs-emphasis": { fontStyle: "italic" },
          "hljs-strong": { fontWeight: "bold" },
        },
        Nc,
      )));
  });
var Al,
  wGi,
  xGi = j(() => {
    "use strict";
    OA();
    ((Al = {
      type: "light",
      Background: "#f8f8f8",
      UserMessageBackground: "#F5F5F5",
      UserMessageColor: "#6a6a6a",
      Foreground: "#24292E",
      LightBlue: "#0086b3",
      AccentBlue: "#458",
      AccentPurple: "#900",
      AccentCyan: "#009926",
      AccentGreen: "#008080",
      AccentYellow: "#990073",
      AccentRed: "#d14",
      DiffAdded: "#C6EAD8",
      DiffRemoved: "#FFCCCC",
      Comment: "#998",
      Gray: "#999",
      GradientColors: ["#458", "#008080"],
    }),
      (wGi = new zc(
        "GitHub Light",
        "light",
        {
          hljs: {
            display: "block",
            overflowX: "auto",
            padding: "0.5em",
            color: Al.Foreground,
            background: Al.Background,
          },
          "hljs-comment": { color: Al.Comment, fontStyle: "italic" },
          "hljs-quote": { color: Al.Comment, fontStyle: "italic" },
          "hljs-keyword": { color: Al.Foreground, fontWeight: "bold" },
          "hljs-selector-tag": { color: Al.Foreground, fontWeight: "bold" },
          "hljs-subst": { color: Al.Foreground, fontWeight: "normal" },
          "hljs-number": { color: Al.AccentGreen },
          "hljs-literal": { color: Al.AccentGreen },
          "hljs-variable": { color: Al.AccentGreen },
          "hljs-template-variable": { color: Al.AccentGreen },
          "hljs-tag .hljs-attr": { color: Al.AccentGreen },
          "hljs-string": { color: Al.AccentRed },
          "hljs-doctag": { color: Al.AccentRed },
          "hljs-title": { color: Al.AccentPurple, fontWeight: "bold" },
          "hljs-section": { color: Al.AccentPurple, fontWeight: "bold" },
          "hljs-selector-id": { color: Al.AccentPurple, fontWeight: "bold" },
          "hljs-type": { color: Al.AccentBlue, fontWeight: "bold" },
          "hljs-class .hljs-title": { color: Al.AccentBlue, fontWeight: "bold" },
          "hljs-tag": { color: Al.AccentBlue, fontWeight: "normal" },
          "hljs-name": { color: Al.AccentBlue, fontWeight: "normal" },
          "hljs-attribute": { color: Al.AccentBlue, fontWeight: "normal" },
          "hljs-regexp": { color: Al.AccentCyan },
          "hljs-link": { color: Al.AccentCyan },
          "hljs-symbol": { color: Al.AccentYellow },
          "hljs-bullet": { color: Al.AccentYellow },
          "hljs-built_in": { color: Al.LightBlue },
          "hljs-builtin-name": { color: Al.LightBlue },
          "hljs-meta": { color: Al.Gray, fontWeight: "bold" },
          "hljs-deletion": { background: "#fdd" },
          "hljs-addition": { background: "#dfd" },
          "hljs-emphasis": { fontStyle: "italic" },
          "hljs-strong": { fontWeight: "bold" },
        },
        Al,
      )));
  });
var Pc,
  TGi,
  DGi = j(() => {
    "use strict";
    OA();
    ((Pc = {
      type: "light",
      Background: "white",
      UserMessageBackground: "#F5F5F5",
      UserMessageColor: "#6a6a6a",
      Foreground: "#444",
      LightBlue: "#066",
      AccentBlue: "#008",
      AccentPurple: "#606",
      AccentCyan: "#066",
      AccentGreen: "#080",
      AccentYellow: "#660",
      AccentRed: "#800",
      DiffAdded: "#C6EAD8",
      DiffRemoved: "#FEDEDE",
      Comment: "#5f6368",
      Gray: Ic.Gray,
      GradientColors: ["#066", "#606"],
    }),
      (TGi = new zc(
        "Google Code",
        "light",
        {
          hljs: {
            display: "block",
            overflowX: "auto",
            padding: "0.5em",
            background: Pc.Background,
            color: Pc.Foreground,
          },
          "hljs-comment": { color: Pc.AccentRed },
          "hljs-quote": { color: Pc.AccentRed },
          "hljs-keyword": { color: Pc.AccentBlue },
          "hljs-selector-tag": { color: Pc.AccentBlue },
          "hljs-section": { color: Pc.AccentBlue },
          "hljs-title": { color: Pc.AccentPurple },
          "hljs-name": { color: Pc.AccentBlue },
          "hljs-variable": { color: Pc.AccentYellow },
          "hljs-template-variable": { color: Pc.AccentYellow },
          "hljs-string": { color: Pc.AccentGreen },
          "hljs-selector-attr": { color: Pc.AccentGreen },
          "hljs-selector-pseudo": { color: Pc.AccentGreen },
          "hljs-regexp": { color: Pc.AccentGreen },
          "hljs-literal": { color: Pc.AccentCyan },
          "hljs-symbol": { color: Pc.AccentCyan },
          "hljs-bullet": { color: Pc.AccentCyan },
          "hljs-meta": { color: Pc.AccentCyan },
          "hljs-number": { color: Pc.AccentCyan },
          "hljs-link": { color: Pc.AccentCyan },
          "hljs-doctag": { color: Pc.AccentPurple, fontWeight: "bold" },
          "hljs-type": { color: Pc.AccentPurple },
          "hljs-attr": { color: Pc.AccentPurple },
          "hljs-built_in": { color: Pc.AccentPurple },
          "hljs-builtin-name": { color: Pc.AccentPurple },
          "hljs-params": { color: Pc.AccentPurple },
          "hljs-attribute": { color: Pc.Foreground },
          "hljs-subst": { color: Pc.Foreground },
          "hljs-formula": { backgroundColor: "#eee", fontStyle: "italic" },
          "hljs-selector-id": { color: Pc.AccentYellow },
          "hljs-selector-class": { color: Pc.AccentYellow },
          "hljs-addition": { backgroundColor: "#baeeba" },
          "hljs-deletion": { backgroundColor: "#ffc8bd" },
          "hljs-strong": { fontWeight: "bold" },
          "hljs-emphasis": { fontStyle: "italic" },
        },
        Pc,
      )));
  });
var _s,
  nh,
  IGi,
  RGi = j(() => {
    "use strict";
    OA();
    ((_s = {
      type: "dark",
      Background: "#2d2b57",
      UserMessageBackground: "#3C3C3C",
      UserMessageColor: "#c0c0c0",
      Foreground: "#e3dfff",
      LightBlue: "#847ace",
      AccentBlue: "#a599e9",
      AccentPurple: "#ac65ff",
      AccentCyan: "#a1feff",
      AccentGreen: "#A5FF90",
      AccentYellow: "#fad000",
      AccentRed: "#ff628c",
      DiffAdded: "#383E45",
      DiffRemoved: "#572244",
      Comment: "#B362FF",
      Gray: "#726c86",
      GradientColors: ["#4d21fc", "#847ace", "#ff628c"],
    }),
      (nh = {
        AccentYellowAlt: "#f8d000",
        AccentOrange: "#fb9e00",
        AccentPink: "#fa658d",
        AccentLightPurple: "#c991ff",
        AccentDarkPurple: "#6943ff",
        AccentTeal: "#2ee2fa",
      }),
      (IGi = new zc(
        "Shades Of Purple",
        "dark",
        {
          hljs: { display: "block", overflowX: "auto", background: _s.Background, color: _s.Foreground },
          "hljs-title": { color: _s.AccentYellow, fontWeight: "normal" },
          "hljs-name": { color: _s.AccentCyan, fontWeight: "normal" },
          "hljs-tag": { color: _s.Foreground },
          "hljs-attr": { color: nh.AccentYellowAlt, fontStyle: "italic" },
          "hljs-built_in": { color: nh.AccentOrange },
          "hljs-selector-tag": { color: nh.AccentOrange, fontWeight: "normal" },
          "hljs-section": { color: nh.AccentOrange },
          "hljs-keyword": { color: nh.AccentOrange, fontWeight: "normal" },
          "hljs-subst": { color: _s.Foreground },
          "hljs-string": { color: _s.AccentGreen },
          "hljs-attribute": { color: _s.AccentGreen },
          "hljs-symbol": { color: _s.AccentGreen },
          "hljs-bullet": { color: _s.AccentGreen },
          "hljs-addition": { color: _s.AccentGreen },
          "hljs-code": { color: _s.AccentGreen },
          "hljs-regexp": { color: _s.AccentGreen },
          "hljs-selector-class": { color: _s.AccentGreen },
          "hljs-selector-attr": { color: _s.AccentGreen },
          "hljs-selector-pseudo": { color: _s.AccentGreen },
          "hljs-template-tag": { color: _s.AccentGreen },
          "hljs-quote": { color: _s.AccentGreen },
          "hljs-deletion": { color: _s.AccentRed },
          "hljs-meta": { color: nh.AccentOrange },
          "hljs-meta-string": { color: nh.AccentOrange },
          "hljs-comment": { color: _s.AccentPurple },
          "hljs-literal": { color: nh.AccentPink, fontWeight: "normal" },
          "hljs-number": { color: nh.AccentPink },
          "hljs-emphasis": { fontStyle: "italic" },
          "hljs-strong": { fontWeight: "bold" },
          "hljs-diff": { color: _s.Foreground },
          "hljs-meta.hljs-diff": { color: _s.AccentBlue },
          "hljs-ln": { color: _s.Gray },
          "hljs-type": { color: _s.AccentYellow, fontWeight: "normal" },
          "hljs-variable": { color: _s.AccentYellow },
          "hljs-template-variable": { color: _s.AccentGreen },
          "hljs-function .hljs-keyword": { color: nh.AccentOrange },
          "hljs-link": { color: _s.LightBlue },
          "hljs-doctag": { fontWeight: "bold" },
          "hljs-params": { color: nh.AccentLightPurple, fontStyle: "italic" },
          "hljs-class": { color: _s.AccentCyan, fontWeight: "bold" },
          "hljs-function": { color: _s.AccentCyan },
          "hljs-property": { color: _s.AccentBlue },
          "hljs-operator": { color: nh.AccentDarkPurple },
          "hljs-punctuation": { color: _s.Gray },
          "hljs-selector-id": { color: _s.AccentYellow, fontWeight: "bold" },
          "hljs-char": { color: _s.AccentGreen },
          "hljs-escape": { color: nh.AccentPink, fontWeight: "bold" },
          "hljs-meta-keyword": { color: nh.AccentOrange, fontWeight: "bold" },
          "hljs-builtin-name": { color: nh.AccentTeal },
          "hljs-module": { color: _s.AccentCyan },
          "hljs-namespace": { color: _s.LightBlue },
          "hljs-important": { color: _s.AccentRed, fontWeight: "bold" },
          "hljs-formula": { color: _s.AccentCyan, fontStyle: "italic" },
          "hljs-decorator": { color: nh.AccentTeal, fontWeight: "bold" },
          "hljs-symbol.ruby": { color: nh.AccentPink },
          "hljs-keyword.sql": { color: nh.AccentOrange, textTransform: "uppercase" },
          "hljs-section.markdown": { color: _s.AccentYellow, fontWeight: "bold" },
          "hljs-attr.json": { color: _s.AccentCyan },
          "hljs-tag .hljs-name": { color: _s.AccentRed },
          "hljs-tag .hljs-attr": { color: nh.AccentYellowAlt },
          "hljs.hljs-line-numbers": { borderRight: `1px solid ${_s.Gray}` },
          "hljs.hljs-line-numbers .hljs-ln-numbers": { color: _s.Gray, paddingRight: "1em" },
          "hljs.hljs-line-numbers .hljs-ln-code": { paddingLeft: "1em" },
          "hljs::selection": { background: _s.AccentBlue + "40" },
          "hljs ::-moz-selection": { background: _s.AccentBlue + "40" },
          "hljs .hljs-highlight": { background: _s.AccentPurple + "20", display: "block", width: "100%" },
        },
        _s,
      )));
  });
var Ku,
  kGi,
  OGi = j(() => {
    "use strict";
    OA();
    ((Ku = {
      type: "light",
      Background: "#fff",
      UserMessageBackground: "#F5F5F5",
      UserMessageColor: "#6a6a6a",
      Foreground: "#444",
      LightBlue: "#0E0EFF",
      AccentBlue: "#1c00cf",
      AccentPurple: "#aa0d91",
      AccentCyan: "#3F6E74",
      AccentGreen: "#007400",
      AccentYellow: "#836C28",
      AccentRed: "#c41a16",
      DiffAdded: "#C6EAD8",
      DiffRemoved: "#FEDEDE",
      Comment: "#007400",
      Gray: "#c0c0c0",
      GradientColors: ["#1c00cf", "#007400"],
    }),
      (kGi = new zc(
        "Xcode",
        "light",
        {
          hljs: {
            display: "block",
            overflowX: "auto",
            padding: "0.5em",
            background: Ku.Background,
            color: Ku.Foreground,
          },
          "xml .hljs-meta": { color: Ku.Gray },
          "hljs-comment": { color: Ku.Comment },
          "hljs-quote": { color: Ku.Comment },
          "hljs-tag": { color: Ku.AccentPurple },
          "hljs-attribute": { color: Ku.AccentPurple },
          "hljs-keyword": { color: Ku.AccentPurple },
          "hljs-selector-tag": { color: Ku.AccentPurple },
          "hljs-literal": { color: Ku.AccentPurple },
          "hljs-name": { color: Ku.AccentPurple },
          "hljs-variable": { color: Ku.AccentCyan },
          "hljs-template-variable": { color: Ku.AccentCyan },
          "hljs-code": { color: Ku.AccentRed },
          "hljs-string": { color: Ku.AccentRed },
          "hljs-meta-string": { color: Ku.AccentRed },
          "hljs-regexp": { color: Ku.LightBlue },
          "hljs-link": { color: Ku.LightBlue },
          "hljs-title": { color: Ku.AccentBlue },
          "hljs-symbol": { color: Ku.AccentBlue },
          "hljs-bullet": { color: Ku.AccentBlue },
          "hljs-number": { color: Ku.AccentBlue },
          "hljs-section": { color: Ku.AccentYellow },
          "hljs-meta": { color: Ku.AccentYellow },
          "hljs-class .hljs-title": { color: Ku.AccentPurple },
          "hljs-type": { color: Ku.AccentPurple },
          "hljs-built_in": { color: Ku.AccentPurple },
          "hljs-builtin-name": { color: Ku.AccentPurple },
          "hljs-params": { color: Ku.AccentPurple },
          "hljs-attr": { color: Ku.AccentYellow },
          "hljs-subst": { color: Ku.Foreground },
          "hljs-formula": { backgroundColor: "#eee", fontStyle: "italic" },
          "hljs-addition": { backgroundColor: "#baeeba" },
          "hljs-deletion": { backgroundColor: "#ffc8bd" },
          "hljs-selector-id": { color: Ku.AccentYellow },
          "hljs-selector-class": { color: Ku.AccentYellow },
          "hljs-doctag": { fontWeight: "bold" },
          "hljs-strong": { fontWeight: "bold" },
          "hljs-emphasis": { fontStyle: "italic" },
        },
        Ku,
      )));
  });
var ycu,
  NGi,
  PGi = j(() => {
    "use strict";
    OA();
    ((ycu = {
      type: "dark",
      Background: "black",
      UserMessageBackground: "#3C3C3C",
      UserMessageColor: "#c0c0c0",
      Foreground: "white",
      LightBlue: "bluebright",
      AccentBlue: "blue",
      AccentPurple: "magenta",
      AccentCyan: "cyan",
      AccentGreen: "green",
      AccentYellow: "yellow",
      AccentRed: "red",
      DiffAdded: "#003300",
      DiffRemoved: "#4D0000",
      Comment: "gray",
      Gray: "gray",
      GradientColors: ["cyan", "green"],
    }),
      (NGi = new zc(
        "ANSI",
        "dark",
        {
          hljs: { display: "block", overflowX: "auto", padding: "0.5em", background: "black", color: "white" },
          "hljs-keyword": { color: "blue" },
          "hljs-literal": { color: "blue" },
          "hljs-symbol": { color: "blue" },
          "hljs-name": { color: "blue" },
          "hljs-link": { color: "blue" },
          "hljs-built_in": { color: "cyan" },
          "hljs-type": { color: "cyan" },
          "hljs-number": { color: "green" },
          "hljs-class": { color: "green" },
          "hljs-string": { color: "yellow" },
          "hljs-meta-string": { color: "yellow" },
          "hljs-regexp": { color: "red" },
          "hljs-template-tag": { color: "red" },
          "hljs-subst": { color: "white" },
          "hljs-function": { color: "white" },
          "hljs-title": { color: "white" },
          "hljs-params": { color: "white" },
          "hljs-formula": { color: "white" },
          "hljs-comment": { color: "green" },
          "hljs-quote": { color: "green" },
          "hljs-doctag": { color: "green" },
          "hljs-meta": { color: "gray" },
          "hljs-meta-keyword": { color: "gray" },
          "hljs-tag": { color: "gray" },
          "hljs-variable": { color: "magenta" },
          "hljs-template-variable": { color: "magenta" },
          "hljs-attr": { color: "bluebright" },
          "hljs-attribute": { color: "bluebright" },
          "hljs-builtin-name": { color: "bluebright" },
          "hljs-section": { color: "yellow" },
          "hljs-emphasis": {},
          "hljs-strong": {},
          "hljs-bullet": { color: "yellow" },
          "hljs-selector-tag": { color: "yellow" },
          "hljs-selector-id": { color: "yellow" },
          "hljs-selector-class": { color: "yellow" },
          "hljs-selector-attr": { color: "yellow" },
          "hljs-selector-pseudo": { color: "yellow" },
        },
        ycu,
      )));
  });
var _cu,
  BGi,
  LGi = j(() => {
    "use strict";
    OA();
    ((_cu = {
      type: "light",
      Background: "white",
      UserMessageBackground: "#F5F5F5",
      UserMessageColor: "#6a6a6a",
      Foreground: "#444",
      LightBlue: "blue",
      AccentBlue: "blue",
      AccentPurple: "purple",
      AccentCyan: "cyan",
      AccentGreen: "green",
      AccentYellow: "orange",
      AccentRed: "red",
      DiffAdded: "#E5F2E5",
      DiffRemoved: "#FFE5E5",
      Comment: "gray",
      Gray: "gray",
      GradientColors: ["blue", "green"],
    }),
      (BGi = new zc(
        "ANSI Light",
        "light",
        {
          hljs: { display: "block", overflowX: "auto", padding: "0.5em", background: "white", color: "black" },
          "hljs-keyword": { color: "blue" },
          "hljs-literal": { color: "blue" },
          "hljs-symbol": { color: "blue" },
          "hljs-name": { color: "blue" },
          "hljs-link": { color: "blue" },
          "hljs-built_in": { color: "cyan" },
          "hljs-type": { color: "cyan" },
          "hljs-number": { color: "green" },
          "hljs-class": { color: "green" },
          "hljs-string": { color: "red" },
          "hljs-meta-string": { color: "red" },
          "hljs-regexp": { color: "magenta" },
          "hljs-template-tag": { color: "magenta" },
          "hljs-subst": { color: "black" },
          "hljs-function": { color: "black" },
          "hljs-title": { color: "black" },
          "hljs-params": { color: "black" },
          "hljs-formula": { color: "black" },
          "hljs-comment": { color: "gray" },
          "hljs-quote": { color: "gray" },
          "hljs-doctag": { color: "gray" },
          "hljs-meta": { color: "gray" },
          "hljs-meta-keyword": { color: "gray" },
          "hljs-tag": { color: "gray" },
          "hljs-variable": { color: "purple" },
          "hljs-template-variable": { color: "purple" },
          "hljs-attr": { color: "blue" },
          "hljs-attribute": { color: "blue" },
          "hljs-builtin-name": { color: "blue" },
          "hljs-section": { color: "orange" },
          "hljs-bullet": { color: "orange" },
          "hljs-selector-tag": { color: "orange" },
          "hljs-selector-id": { color: "orange" },
          "hljs-selector-class": { color: "orange" },
          "hljs-selector-attr": { color: "orange" },
          "hljs-selector-pseudo": { color: "orange" },
        },
        _cu,
      )));
  });
var Ecu,
  MGi,
  FGi = j(() => {
    "use strict";
    OA();
    ((Ecu = {
      type: "ansi",
      Background: "",
      Foreground: "",
      LightBlue: "",
      AccentBlue: "",
      AccentPurple: "",
      AccentCyan: "",
      AccentGreen: "",
      AccentYellow: "",
      AccentRed: "",
      DiffAdded: "",
      DiffRemoved: "",
      Comment: "",
      Gray: "",
    }),
      (MGi = new zc(
        "NoColor",
        "dark",
        {
          hljs: { display: "block", overflowX: "auto", padding: "0.5em" },
          "hljs-keyword": {},
          "hljs-literal": {},
          "hljs-symbol": {},
          "hljs-name": {},
          "hljs-link": { textDecoration: "underline" },
          "hljs-built_in": {},
          "hljs-type": {},
          "hljs-number": {},
          "hljs-class": {},
          "hljs-string": {},
          "hljs-meta-string": {},
          "hljs-regexp": {},
          "hljs-template-tag": {},
          "hljs-subst": {},
          "hljs-function": {},
          "hljs-title": {},
          "hljs-params": {},
          "hljs-formula": {},
          "hljs-comment": { fontStyle: "italic" },
          "hljs-quote": { fontStyle: "italic" },
          "hljs-doctag": {},
          "hljs-meta": {},
          "hljs-meta-keyword": {},
          "hljs-tag": {},
          "hljs-variable": {},
          "hljs-template-variable": {},
          "hljs-attr": {},
          "hljs-attribute": {},
          "hljs-builtin-name": {},
          "hljs-section": {},
          "hljs-emphasis": { fontStyle: "italic" },
          "hljs-strong": { fontWeight: "bold" },
          "hljs-bullet": {},
          "hljs-selector-tag": {},
          "hljs-selector-id": {},
          "hljs-selector-class": {},
          "hljs-selector-attr": {},
          "hljs-selector-pseudo": {},
          "hljs-addition": { display: "inline-block", width: "100%" },
          "hljs-deletion": { display: "inline-block", width: "100%" },
        },
        Ecu,
      )));
  });
import * as z3t from "node:fs";
import * as NTe from "node:path";
import * as UGi from "node:os";
import vcu from "node:process";
var BI,
  q6r,
  Ta,
  Sj = j(() => {
    "use strict";
    gGi();
    AGi();
    _Gi();
    vGi();
    SGi();
    xGi();
    DGi();
    T8r();
    D8r();
    RGi();
    OGi();
    OA();
    PGi();
    LGi();
    FGi();
    Ot();
    ((BI = l1e),
      (q6r = class {
        availableThemes;
        activeTheme;
        customThemes = new Map();
        constructor() {
          ((this.availableThemes = [hGi, bGi, yGi, EGi, rTe, l1e, CGi, wGi, TGi, IGi, kGi, NGi, BGi]),
            (this.activeTheme = BI));
        }
        loadCustomThemes(e) {
          if ((this.customThemes.clear(), !!e)) {
            for (let [r, n] of Object.entries(e)) {
              let o = x8r(n);
              if (o.isValid) {
                o.warning && Ud.warn(`Theme "${r}": ${o.warning}`);
                let s = { ...BI.colors, ...n, name: n.name || r, type: "custom" };
                try {
                  let a = w8r(s);
                  this.customThemes.set(r, a);
                } catch (a) {
                  Ud.warn(`Failed to load custom theme "${r}":`, a);
                }
              } else Ud.warn(`Invalid custom theme "${r}": ${o.error}`);
            }
            this.activeTheme &&
              this.activeTheme.type === "custom" &&
              this.customThemes.has(this.activeTheme.name) &&
              (this.activeTheme = this.customThemes.get(this.activeTheme.name));
          }
        }
        setActiveTheme(e) {
          let r = this.findThemeByName(e);
          return r ? ((this.activeTheme = r), !0) : !1;
        }
        getActiveTheme() {
          if (vcu.env.NO_COLOR) return MGi;
          if (this.activeTheme) {
            let e = this.availableThemes.some((n) => n.name === this.activeTheme.name),
              r = [...this.customThemes.values()].includes(this.activeTheme);
            if (e || r) return this.activeTheme;
          }
          return ((this.activeTheme = BI), this.activeTheme);
        }
        getSemanticColors() {
          return this.getActiveTheme().semanticColors;
        }
        getCustomThemeNames() {
          return Array.from(this.customThemes.keys());
        }
        isCustomTheme(e) {
          return this.customThemes.has(e);
        }
        getAvailableThemes() {
          let e = this.availableThemes.map((s) => ({ name: s.name, type: s.type, isCustom: !1 })),
            r = Array.from(this.customThemes.values()).map((s) => ({ name: s.name, type: s.type, isCustom: !0 }));
          return [...e, ...r].sort((s, a) => {
            let u = (m) => {
                switch (m) {
                  case "dark":
                    return 1;
                  case "light":
                    return 2;
                  case "ansi":
                    return 3;
                  case "custom":
                    return 4;
                  default:
                    return 5;
                }
              },
              c = u(s.type) - u(a.type);
            return c !== 0 ? c : s.name.localeCompare(a.name);
          });
        }
        getTheme(e) {
          return this.findThemeByName(e);
        }
        isPath(e) {
          return e.endsWith(".json") || e.startsWith(".") || NTe.isAbsolute(e);
        }
        loadThemeFromFile(e) {
          try {
            let r = z3t.realpathSync(NTe.resolve(e));
            if (this.customThemes.has(r)) return this.customThemes.get(r);
            let n = NTe.resolve(UGi.homedir());
            if (!r.startsWith(n)) {
              Ud.warn(`Theme file at "${e}" is outside your home directory. Only load themes from trusted sources.`);
              return;
            }
            let o = z3t.readFileSync(r, "utf-8"),
              s = JSON.parse(o),
              a = x8r(s);
            if (!a.isValid) {
              Ud.warn(`Invalid custom theme from file "${e}": ${a.error}`);
              return;
            }
            a.warning && Ud.warn(`Theme from "${e}": ${a.warning}`);
            let u = { ...BI.colors, ...s, name: s.name || r, type: "custom" },
              c = w8r(u);
            return (this.customThemes.set(r, c), c);
          } catch (r) {
            (r instanceof Error && "code" in r && r.code === "ENOENT") ||
              Ud.warn(`Could not load theme from file "${e}":`, r);
            return;
          }
        }
        findThemeByName(e) {
          if (!e) return BI;
          let r = this.availableThemes.find((n) => n.name === e);
          if (r) return r;
          if (this.isPath(e)) return this.loadThemeFromFile(e);
          if (this.customThemes.has(e)) return this.customThemes.get(e);
        }
      }),
      (Ta = new q6r()));
  });
var ae,
  vn = j(() => {
    "use strict";
    Sj();
    ae = {
      get type() {
        return Ta.getActiveTheme().colors.type;
      },
      get Foreground() {
        return Ta.getActiveTheme().colors.Foreground;
      },
      get Background() {
        return Ta.getActiveTheme().colors.Background;
      },
      get UserMessageColor() {
        return Ta.getActiveTheme().colors?.UserMessageColor;
      },
      get UserMessageBackground() {
        return Ta.getActiveTheme().colors?.UserMessageBackground;
      },
      get LightBlue() {
        return Ta.getActiveTheme().colors.LightBlue;
      },
      get AccentBlue() {
        return Ta.getActiveTheme().colors.AccentBlue;
      },
      get AccentPurple() {
        return Ta.getActiveTheme().colors.AccentPurple;
      },
      get AccentCyan() {
        return Ta.getActiveTheme().colors.AccentCyan;
      },
      get AccentGreen() {
        return Ta.getActiveTheme().colors.AccentGreen;
      },
      get AccentYellow() {
        return Ta.getActiveTheme().colors.AccentYellow;
      },
      get AccentRed() {
        return Ta.getActiveTheme().colors.AccentRed;
      },
      get DiffAdded() {
        return Ta.getActiveTheme().colors.DiffAdded;
      },
      get DiffRemoved() {
        return Ta.getActiveTheme().colors.DiffRemoved;
      },
      get Comment() {
        return Ta.getActiveTheme().colors.Comment;
      },
      get Gray() {
        return Ta.getActiveTheme().colors.Gray;
      },
      get GradientColors() {
        return Ta.getActiveTheme().colors.GradientColors;
      },
    };
  });