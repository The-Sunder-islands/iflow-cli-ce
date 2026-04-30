/**
 * @module t9n
 * @category model/google
 * @label google-genai
 * @position 935 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (t9n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var t9n = T((vm, mGt) => {
  "use strict";
  Object.defineProperty(vm, "__esModule", { value: !0 });
  vm.MissingRefError =
    vm.ValidationError =
    vm.CodeGen =
    vm.Name =
    vm.nil =
    vm.stringify =
    vm.str =
    vm._ =
    vm.KeywordCxt =
    vm.Ajv =
      void 0;
  var g6s = Y5n(),
    b6s = z8n(),
    A6s = X8n(),
    e9n = Z8n(),
    y6s = ["/properties"],
    MKe = "http://json-schema.org/draft-07/schema",
    Pse = class extends g6s.default {
      _addVocabularies() {
        (super._addVocabularies(),
          b6s.default.forEach((e) => this.addVocabulary(e)),
          this.opts.discriminator && this.addKeyword(A6s.default));
      }
      _addDefaultMetaSchema() {
        if ((super._addDefaultMetaSchema(), !this.opts.meta)) return;
        let e = this.opts.$data ? this.$dataMetaSchema(e9n, y6s) : e9n;
        (this.addMetaSchema(e, MKe, !1), (this.refs["http://json-schema.org/schema"] = MKe));
      }
      defaultMeta() {
        return (this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(MKe) ? MKe : void 0));
      }
    };
  vm.Ajv = Pse;
  mGt.exports = vm = Pse;
  mGt.exports.Ajv = Pse;
  Object.defineProperty(vm, "__esModule", { value: !0 });
  vm.default = Pse;
  var _6s = F9e();
  Object.defineProperty(vm, "KeywordCxt", {
    enumerable: !0,
    get: function () {
      return _6s.KeywordCxt;
    },
  });
  var Bse = za();
  Object.defineProperty(vm, "_", {
    enumerable: !0,
    get: function () {
      return Bse._;
    },
  });
  Object.defineProperty(vm, "str", {
    enumerable: !0,
    get: function () {
      return Bse.str;
    },
  });
  Object.defineProperty(vm, "stringify", {
    enumerable: !0,
    get: function () {
      return Bse.stringify;
    },
  });
  Object.defineProperty(vm, "nil", {
    enumerable: !0,
    get: function () {
      return Bse.nil;
    },
  });
  Object.defineProperty(vm, "Name", {
    enumerable: !0,
    get: function () {
      return Bse.Name;
    },
  });
  Object.defineProperty(vm, "CodeGen", {
    enumerable: !0,
    get: function () {
      return Bse.CodeGen;
    },
  });
  var E6s = yKe();
  Object.defineProperty(vm, "ValidationError", {
    enumerable: !0,
    get: function () {
      return E6s.default;
    },
  });
  var v6s = U9e();
  Object.defineProperty(vm, "MissingRefError", {
    enumerable: !0,
    get: function () {
      return v6s.default;
    },
  });
});
var dGt,
  C6s,
  r9n,
  iu,
  Bp = j(() => {
    "use strict";
    dGt = Se(t9n(), 1);
    ((C6s = dGt.default.default || dGt.default),
      (r9n = new C6s()),
      (iu = class {
        static validate(e, r) {
          if (!e) return null;
          if (typeof r != "object" || r === null) return "Value of params must be an object";
          let n = r9n.compile(this.toObjectSchema(e));
          return !n(r) && n.errors ? r9n.errorsText(n.errors, { dataVar: "params" }) : null;
        }
        static toObjectSchema(e) {
          let r = { ...e };
          if (
            (r.anyOf && Array.isArray(r.anyOf) && (r.anyOf = r.anyOf.map((n) => this.toObjectSchema(n))),
            r.items && (r.items = this.toObjectSchema(r.items)),
            r.properties && typeof r.properties == "object")
          ) {
            let n = {};
            for (let [o, s] of Object.entries(r.properties)) n[o] = this.toObjectSchema(s);
            r.properties = n;
          }
          return (
            r.type && (r.type = String(r.type).toLowerCase()),
            r.minItems && (r.minItems = Number(r.minItems)),
            r.minLength && (r.minLength = Number(r.minLength)),
            r
          );
        }
      }));
  });
import fGt from "fs";
import pGt from "path";
var jf,
  $M = j(() => {
    "use strict";
    Fc();
    Bb();
    Ba();
    Bp();
    Pa();
    Ag();
    bi();
    jf = class t extends Li {
      config;
      static Name = "list_directory";
      static DisplayName = "List Directory";
      static ExecutionError = class extends Error {
        type;
        constructor(e, r) {
          (super(r), (this.type = e), (this.name = "LSToolExecutionError"));
        }
      };
      constructor(e) {
        (super(
          t.Name,
          t.DisplayName,
          "Lists the names of files and subdirectories directly within a specified directory path. Can optionally ignore entries matching provided glob patterns.",
          Mi.Folder,
          Fi.Search,
          {
            properties: {
              path: {
                description: "The absolute path to the directory to list (must be absolute, not relative)",
                type: Dt.STRING,
              },
              ignore: { description: "List of glob patterns to ignore", items: { type: Dt.STRING }, type: Dt.ARRAY },
              file_filtering_options: {
                description: "Optional: Whether to respect ignore patterns from .gitignore or .iflowignore",
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
            required: ["path"],
            type: Dt.OBJECT,
          },
          !0,
          !1,
          ["ls", "Ls", "list", "List", "dir", "Dir", "directory", "Directory", "listDirectory", "ListDirectory"],
        ),
          (this.config = e));
      }
      validateToolParams(e) {
        let r = iu.validate(this.schema.parameters, e);
        if (r) return r;
        if (!pGt.isAbsolute(e.path)) return I.t("lsTool.errors.pathNotAbsolute", { path: e.path });
        let n = this.config.getWorkspaceContext();
        if (!n.isPathWithinWorkspace(e.path)) {
          let o = n.getDirectories();
          return I.t("lsTool.errors.pathNotInWorkspace", { directories: o.join(", ") });
        }
        return null;
      }
      shouldIgnore(e, r) {
        if (!r || r.length === 0) return !1;
        for (let n of r) {
          let o = n
            .replace(/[.+^${}()|[\]\\]/g, "\\$&")
            .replace(/\*/g, ".*")
            .replace(/\?/g, ".");
          if (new RegExp(`^${o}$`).test(e)) return !0;
        }
        return !1;
      }
      getDescription(e) {
        if (!e.path) return "";
        let r = Mc(e.path, this.config.getTargetDir());
        return ba(r);
      }
      errorResult(e, r, n = Lr.LS_EXECUTION_ERROR) {
        return { llmContent: e, returnDisplay: `Error: ${r}`, error: { message: e.replace(/^Error: /, ""), type: n } };
      }
      async execute(e, r) {
        let n = this.validateToolParams(e);
        if (n)
          return this.errorResult(
            `Error: ${I.t("lsTool.errors.invalidParameters", { reason: n })}`,
            I.t("lsTool.errors.failedToExecute"),
            Lr.INVALID_TOOL_PARAMS,
          );
        try {
          let o = fGt.statSync(e.path);
          if (!o)
            return this.errorResult(
              `Error: ${I.t("lsTool.errors.directoryNotFound", { path: e.path })}`,
              I.t("lsTool.errors.directoryNotFoundShort"),
              Lr.FILE_NOT_FOUND,
            );
          if (!o.isDirectory())
            return this.errorResult(
              `Error: ${I.t("lsTool.errors.pathNotDirectory", { path: e.path })}`,
              I.t("lsTool.errors.pathNotDirectoryShort"),
              Lr.PATH_IS_NOT_A_DIRECTORY,
            );
          let s = fGt.readdirSync(e.path),
            a = this.config.getFileFilteringOptions() ?? Tk,
            u = {
              respectGitIgnore: e.file_filtering_options?.respect_git_ignore ?? a.respectGitIgnore,
              respectGeminiIgnore: e.file_filtering_options?.respect_gemini_ignore ?? a.respectGeminiIgnore,
            },
            c = this.config.getFileService(),
            m = [],
            d = 0,
            f = 0;
          if (s.length === 0)
            return {
              llmContent: I.t("lsTool.messages.directoryEmpty", { path: e.path }),
              returnDisplay: I.t("lsTool.messages.directoryEmptyShort"),
            };
          for (let A of s) {
            if (this.shouldIgnore(A, e.ignore)) continue;
            let y = pGt.join(e.path, A),
              E = pGt.relative(this.config.getTargetDir(), y);
            if (u.respectGitIgnore && c.shouldGitIgnoreFile(E)) {
              d++;
              continue;
            }
            if (u.respectGeminiIgnore && c.shouldGeminiIgnoreFile(E)) {
              f++;
              continue;
            }
            try {
              let v = fGt.statSync(y),
                C = v.isDirectory();
              m.push({ name: A, path: y, isDirectory: C, size: C ? 0 : v.size, modifiedTime: v.mtime });
            } catch (v) {
              console.error(`Error accessing ${y}: ${v}`);
            }
          }
          m.sort((A, y) =>
            A.isDirectory && !y.isDirectory ? -1 : !A.isDirectory && y.isDirectory ? 1 : A.name.localeCompare(y.name),
          );
          let p = m.map((A) => `${A.isDirectory ? "[DIR] " : ""}${A.name}`).join(`
`),
            h = I.t("lsTool.messages.directoryListing", { path: e.path, content: p }),
            g = [];
          (d > 0 && g.push(I.t("lsTool.messages.gitIgnored", { count: d })),
            f > 0 && g.push(I.t("lsTool.messages.iflowIgnored", { count: f })),
            g.length > 0 &&
              (h += `

(${g.join(", ")})`));
          let b = I.t("lsTool.messages.listedItems", { count: m.length });
          return (g.length > 0 && (b += ` (${g.join(", ")})`), { llmContent: h, returnDisplay: b });
        } catch (o) {
          let s = I.t("lsTool.errors.listingFailed", { error: o instanceof Error ? o.message : String(o) });
          return this.errorResult(s, I.t("lsTool.errors.listingFailedShort"), Lr.LS_EXECUTION_ERROR);
        }
      }
    };
  });