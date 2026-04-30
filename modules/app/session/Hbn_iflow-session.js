/**
 * @module Hbn
 * @category app/session
 * @label iflow-session
 * @position 856 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Hbn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Hbn = T((z8e, qbn) => {
  "use strict";
  Object.defineProperty(z8e, "__esModule", { value: !0 });
  var sse = x3n(),
    zgs = jbn(),
    F$t = _a(),
    Qbn = new F$t.Name("fullFormats"),
    Ygs = new F$t.Name("fastFormats"),
    U$t = (t, e = { keywords: !0 }) => {
      if (Array.isArray(e)) return (Gbn(t, e, sse.fullFormats, Qbn), t);
      let [r, n] = e.mode === "fast" ? [sse.fastFormats, Ygs] : [sse.fullFormats, Qbn],
        o = e.formats || sse.formatNames;
      return (Gbn(t, o, r, n), e.keywords && (0, zgs.default)(t), t);
    };
  U$t.get = (t, e = "full") => {
    let n = (e === "fast" ? sse.fastFormats : sse.fullFormats)[t];
    if (!n) throw new Error(`Unknown format "${t}"`);
    return n;
  };
  function Gbn(t, e, r, n) {
    var o, s;
    ((o = (s = t.opts.code).formats) !== null && o !== void 0) ||
      (s.formats = (0, F$t._)`require("ajv-formats/dist/formats").${n}`);
    for (let a of e) t.addFormat(a, r[a]);
  }
  qbn.exports = z8e = U$t;
  Object.defineProperty(z8e, "__esModule", { value: !0 });
  z8e.default = U$t;
});
function Kgs() {
  let t = new Vbn.default({ strict: !1, validateFormats: !0, validateSchema: !1, allErrors: !0 });
  return ((0, Wbn.default)(t), t);
}
var Vbn,
  Wbn,
  MYe,
  zbn = j(() => {
    ((Vbn = Se(A3n(), 1)), (Wbn = Se(Hbn(), 1)));
    MYe = class {
      constructor(e) {
        this._ajv = e ?? Kgs();
      }
      getValidator(e) {
        let r =
          "$id" in e && typeof e.$id == "string"
            ? (this._ajv.getSchema(e.$id) ?? this._ajv.compile(e))
            : this._ajv.compile(e);
        return (n) =>
          r(n)
            ? { valid: !0, data: n, errorMessage: void 0 }
            : { valid: !1, data: void 0, errorMessage: this._ajv.errorsText(r.errors) };
      }
    };
  });
var FYe,
  Ybn = j(() => {
    uk();
    FYe = class {
      constructor(e) {
        this._client = e;
      }
      async *callToolStream(e, r = Roe, n) {
        let o = this._client,
          s = { ...n, task: n?.task ?? (o.isToolTask(e.name) ? {} : void 0) },
          a = o.requestStream({ method: "tools/call", params: e }, r, s),
          u = o.getToolOutputValidator(e.name);
        for await (let c of a) {
          if (c.type === "result" && u) {
            let m = c.result;
            if (!m.structuredContent && !m.isError) {
              yield {
                type: "error",
                error: new So(
                  ms.InvalidRequest,
                  `Tool ${e.name} has an output schema but did not return structured content`,
                ),
              };
              return;
            }
            if (m.structuredContent)
              try {
                let d = u(m.structuredContent);
                if (!d.valid) {
                  yield {
                    type: "error",
                    error: new So(
                      ms.InvalidParams,
                      `Structured content does not match the tool's output schema: ${d.errorMessage}`,
                    ),
                  };
                  return;
                }
              } catch (d) {
                if (d instanceof So) {
                  yield { type: "error", error: d };
                  return;
                }
                yield {
                  type: "error",
                  error: new So(
                    ms.InvalidParams,
                    `Failed to validate structured content: ${d instanceof Error ? d.message : String(d)}`,
                  ),
                };
                return;
              }
          }
          yield c;
        }
      }
      async getTask(e, r) {
        return this._client.getTask({ taskId: e }, r);
      }
      async getTaskResult(e, r, n) {
        return this._client.getTaskResult({ taskId: e }, r, n);
      }
      async listTasks(e, r) {
        return this._client.listTasks(e ? { cursor: e } : void 0, r);
      }
      async cancelTask(e, r) {
        return this._client.cancelTask({ taskId: e }, r);
      }
      requestStream(e, r, n) {
        return this._client.requestStream(e, r, n);
      }
    };
  });
function Kbn(t, e, r) {
  if (!t) throw new Error(`${r} does not support task creation (required for ${e})`);
  switch (e) {
    case "tools/call":
      if (!t.tools?.call) throw new Error(`${r} does not support task creation for tools/call (required for ${e})`);
      break;
    default:
      break;
  }
}
function Jbn(t, e, r) {
  if (!t) throw new Error(`${r} does not support task creation (required for ${e})`);
  switch (e) {
    case "sampling/createMessage":
      if (!t.sampling?.createMessage)
        throw new Error(`${r} does not support task creation for sampling/createMessage (required for ${e})`);
      break;
    case "elicitation/create":
      if (!t.elicitation?.create)
        throw new Error(`${r} does not support task creation for elicitation/create (required for ${e})`);
      break;
    default:
      break;
  }
}
var Xbn = j(() => {});
function UYe(t, e) {
  if (!(!t || e === null || typeof e != "object")) {
    if (t.type === "object" && t.properties && typeof t.properties == "object") {
      let r = e,
        n = t.properties;
      for (let o of Object.keys(n)) {
        let s = n[o];
        (r[o] === void 0 && Object.prototype.hasOwnProperty.call(s, "default") && (r[o] = s.default),
          r[o] !== void 0 && UYe(s, r[o]));
      }
    }
    if (Array.isArray(t.anyOf)) for (let r of t.anyOf) typeof r != "boolean" && UYe(r, e);
    if (Array.isArray(t.oneOf)) for (let r of t.oneOf) typeof r != "boolean" && UYe(r, e);
  }
}
function Jgs(t) {
  if (!t) return { supportsFormMode: !1, supportsUrlMode: !1 };
  let e = t.form !== void 0,
    r = t.url !== void 0;
  return { supportsFormMode: e || (!e && !r), supportsUrlMode: r };
}
var S6,
  ase = j(() => {
    Vfn();
    uk();
    zbn();
    vWe();
    Ybn();
    Xbn();
    S6 = class extends vze {
      constructor(e, r) {
        (super(r),
          (this._clientInfo = e),
          (this._cachedToolOutputValidators = new Map()),
          (this._cachedKnownTaskTools = new Set()),
          (this._cachedRequiredTaskTools = new Set()),
          (this._listChangedDebounceTimers = new Map()),
          (this._capabilities = r?.capabilities ?? {}),
          (this._jsonSchemaValidator = r?.jsonSchemaValidator ?? new MYe()),
          r?.listChanged && (this._pendingListChangedConfig = r.listChanged));
      }
      _setupListChangedHandlers(e) {
        (e.tools &&
          this._serverCapabilities?.tools?.listChanged &&
          this._setupListChangedHandler("tools", LLt, e.tools, async () => (await this.listTools()).tools),
          e.prompts &&
            this._serverCapabilities?.prompts?.listChanged &&
            this._setupListChangedHandler("prompts", PLt, e.prompts, async () => (await this.listPrompts()).prompts),
          e.resources &&
            this._serverCapabilities?.resources?.listChanged &&
            this._setupListChangedHandler(
              "resources",
              ILt,
              e.resources,
              async () => (await this.listResources()).resources,
            ));
      }
      get experimental() {
        return (this._experimental || (this._experimental = { tasks: new FYe(this) }), this._experimental);
      }
      registerCapabilities(e) {
        if (this.transport) throw new Error("Cannot register capabilities after connecting to transport");
        this._capabilities = Hfn(this._capabilities, e);
      }
      setRequestHandler(e, r) {
        let o = EWe(e)?.method;
        if (!o) throw new Error("Schema is missing a method literal");
        let s;
        if (Aoe(o)) {
          let u = o;
          s = u._zod?.def?.value ?? u.value;
        } else {
          let u = o;
          s = u._def?.value ?? u.value;
        }
        if (typeof s != "string") throw new Error("Schema method literal must be a string");
        let a = s;
        if (a === "elicitation/create") {
          let u = async (c, m) => {
            let d = T4(ULt, c);
            if (!d.success) {
              let E = d.error instanceof Error ? d.error.message : String(d.error);
              throw new So(ms.InvalidParams, `Invalid elicitation request: ${E}`);
            }
            let { params: f } = d.data;
            f.mode = f.mode ?? "form";
            let { supportsFormMode: p, supportsUrlMode: h } = Jgs(this._capabilities.elicitation);
            if (f.mode === "form" && !p)
              throw new So(ms.InvalidParams, "Client does not support form-mode elicitation requests");
            if (f.mode === "url" && !h)
              throw new So(ms.InvalidParams, "Client does not support URL-mode elicitation requests");
            let g = await Promise.resolve(r(c, m));
            if (f.task) {
              let E = T4(MH, g);
              if (!E.success) {
                let v = E.error instanceof Error ? E.error.message : String(E.error);
                throw new So(ms.InvalidParams, `Invalid task creation result: ${v}`);
              }
              return E.data;
            }
            let b = T4($Lt, g);
            if (!b.success) {
              let E = b.error instanceof Error ? b.error.message : String(b.error);
              throw new So(ms.InvalidParams, `Invalid elicitation result: ${E}`);
            }
            let A = b.data,
              y = f.mode === "form" ? f.requestedSchema : void 0;
            if (
              f.mode === "form" &&
              A.action === "accept" &&
              A.content &&
              y &&
              this._capabilities.elicitation?.form?.applyDefaults
            )
              try {
                UYe(y, A.content);
              } catch {}
            return A;
          };
          return super.setRequestHandler(e, u);
        }
        if (a === "sampling/createMessage") {
          let u = async (c, m) => {
            let d = T4(MLt, c);
            if (!d.success) {
              let g = d.error instanceof Error ? d.error.message : String(d.error);
              throw new So(ms.InvalidParams, `Invalid sampling request: ${g}`);
            }
            let { params: f } = d.data,
              p = await Promise.resolve(r(c, m));
            if (f.task) {
              let g = T4(MH, p);
              if (!g.success) {
                let b = g.error instanceof Error ? g.error.message : String(g.error);
                throw new So(ms.InvalidParams, `Invalid task creation result: ${b}`);
              }
              return g.data;
            }
            let h = T4(FLt, p);
            if (!h.success) {
              let g = h.error instanceof Error ? h.error.message : String(h.error);
              throw new So(ms.InvalidParams, `Invalid sampling result: ${g}`);
            }
            return h.data;
          };
          return super.setRequestHandler(e, u);
        }
        return super.setRequestHandler(e, r);
      }
      assertCapability(e, r) {
        if (!this._serverCapabilities?.[e]) throw new Error(`Server does not support ${e} (required for ${r})`);
      }
      async connect(e, r) {
        if ((await super.connect(e), e.sessionId === void 0))
          try {
            let n = await this.request(
              {
                method: "initialize",
                params: { protocolVersion: Doe, capabilities: this._capabilities, clientInfo: this._clientInfo },
              },
              CLt,
              r,
            );
            if (n === void 0) throw new Error(`Server sent invalid initialize result: ${n}`);
            if (!Efn.includes(n.protocolVersion))
              throw new Error(`Server's protocol version is not supported: ${n.protocolVersion}`);
            ((this._serverCapabilities = n.capabilities),
              (this._serverVersion = n.serverInfo),
              e.setProtocolVersion && e.setProtocolVersion(n.protocolVersion),
              (this._instructions = n.instructions),
              await this.notification({ method: "notifications/initialized" }),
              this._pendingListChangedConfig &&
                (this._setupListChangedHandlers(this._pendingListChangedConfig),
                (this._pendingListChangedConfig = void 0)));
          } catch (n) {
            throw (this.close(), n);
          }
      }
      getServerCapabilities() {
        return this._serverCapabilities;
      }
      getServerVersion() {
        return this._serverVersion;
      }
      getInstructions() {
        return this._instructions;
      }
      assertCapabilityForMethod(e) {
        switch (e) {
          case "logging/setLevel":
            if (!this._serverCapabilities?.logging)
              throw new Error(`Server does not support logging (required for ${e})`);
            break;
          case "prompts/get":
          case "prompts/list":
            if (!this._serverCapabilities?.prompts)
              throw new Error(`Server does not support prompts (required for ${e})`);
            break;
          case "resources/list":
          case "resources/templates/list":
          case "resources/read":
          case "resources/subscribe":
          case "resources/unsubscribe":
            if (!this._serverCapabilities?.resources)
              throw new Error(`Server does not support resources (required for ${e})`);
            if (e === "resources/subscribe" && !this._serverCapabilities.resources.subscribe)
              throw new Error(`Server does not support resource subscriptions (required for ${e})`);
            break;
          case "tools/call":
          case "tools/list":
            if (!this._serverCapabilities?.tools) throw new Error(`Server does not support tools (required for ${e})`);
            break;
          case "completion/complete":
            if (!this._serverCapabilities?.completions)
              throw new Error(`Server does not support completions (required for ${e})`);
            break;
          case "initialize":
            break;
          case "ping":
            break;
        }
      }
      assertNotificationCapability(e) {
        switch (e) {
          case "notifications/roots/list_changed":
            if (!this._capabilities.roots?.listChanged)
              throw new Error(`Client does not support roots list changed notifications (required for ${e})`);
            break;
          case "notifications/initialized":
            break;
          case "notifications/cancelled":
            break;
          case "notifications/progress":
            break;
        }
      }
      assertRequestHandlerCapability(e) {
        if (this._capabilities)
          switch (e) {
            case "sampling/createMessage":
              if (!this._capabilities.sampling)
                throw new Error(`Client does not support sampling capability (required for ${e})`);
              break;
            case "elicitation/create":
              if (!this._capabilities.elicitation)
                throw new Error(`Client does not support elicitation capability (required for ${e})`);
              break;
            case "roots/list":
              if (!this._capabilities.roots)
                throw new Error(`Client does not support roots capability (required for ${e})`);
              break;
            case "tasks/get":
            case "tasks/list":
            case "tasks/result":
            case "tasks/cancel":
              if (!this._capabilities.tasks)
                throw new Error(`Client does not support tasks capability (required for ${e})`);
              break;
            case "ping":
              break;
          }
      }
      assertTaskCapability(e) {
        Kbn(this._serverCapabilities?.tasks?.requests, e, "Server");
      }
      assertTaskHandlerCapability(e) {
        this._capabilities && Jbn(this._capabilities.tasks?.requests, e, "Client");
      }
      async ping(e) {
        return this.request({ method: "ping" }, LH, e);
      }
      async complete(e, r) {
        return this.request({ method: "completion/complete", params: e }, jLt, r);
      }
      async setLoggingLevel(e, r) {
        return this.request({ method: "logging/setLevel", params: { level: e } }, LH, r);
      }
      async getPrompt(e, r) {
        return this.request({ method: "prompts/get", params: e }, H5e, r);
      }
      async listPrompts(e, r) {
        return this.request({ method: "prompts/list", params: e }, q5e, r);
      }
      async listResources(e, r) {
        return this.request({ method: "resources/list", params: e }, wLt, r);
      }
      async listResourceTemplates(e, r) {
        return this.request({ method: "resources/templates/list", params: e }, xLt, r);
      }
      async readResource(e, r) {
        return this.request({ method: "resources/read", params: e }, DLt, r);
      }
      async subscribeResource(e, r) {
        return this.request({ method: "resources/subscribe", params: e }, LH, r);
      }
      async unsubscribeResource(e, r) {
        return this.request({ method: "resources/unsubscribe", params: e }, LH, r);
      }
      async callTool(e, r = Roe, n) {
        if (this.isToolTaskRequired(e.name))
          throw new So(
            ms.InvalidRequest,
            `Tool "${e.name}" requires task-based execution. Use client.experimental.tasks.callToolStream() instead.`,
          );
        let o = await this.request({ method: "tools/call", params: e }, r, n),
          s = this.getToolOutputValidator(e.name);
        if (s) {
          if (!o.structuredContent && !o.isError)
            throw new So(
              ms.InvalidRequest,
              `Tool ${e.name} has an output schema but did not return structured content`,
            );
          if (o.structuredContent)
            try {
              let a = s(o.structuredContent);
              if (!a.valid)
                throw new So(
                  ms.InvalidParams,
                  `Structured content does not match the tool's output schema: ${a.errorMessage}`,
                );
            } catch (a) {
              throw a instanceof So
                ? a
                : new So(
                    ms.InvalidParams,
                    `Failed to validate structured content: ${a instanceof Error ? a.message : String(a)}`,
                  );
            }
        }
        return o;
      }
      isToolTask(e) {
        return this._serverCapabilities?.tasks?.requests?.tools?.call ? this._cachedKnownTaskTools.has(e) : !1;
      }
      isToolTaskRequired(e) {
        return this._cachedRequiredTaskTools.has(e);
      }
      cacheToolMetadata(e) {
        (this._cachedToolOutputValidators.clear(),
          this._cachedKnownTaskTools.clear(),
          this._cachedRequiredTaskTools.clear());
        for (let r of e) {
          if (r.outputSchema) {
            let o = this._jsonSchemaValidator.getValidator(r.outputSchema);
            this._cachedToolOutputValidators.set(r.name, o);
          }
          let n = r.execution?.taskSupport;
          ((n === "required" || n === "optional") && this._cachedKnownTaskTools.add(r.name),
            n === "required" && this._cachedRequiredTaskTools.add(r.name));
        }
      }
      getToolOutputValidator(e) {
        return this._cachedToolOutputValidators.get(e);
      }
      async listTools(e, r) {
        let n = await this.request({ method: "tools/list", params: e }, BLt, r);
        return (this.cacheToolMetadata(n.tools), n);
      }
      _setupListChangedHandler(e, r, n, o) {
        let s = Ffn.safeParse(n);
        if (!s.success) throw new Error(`Invalid ${e} listChanged options: ${s.error.message}`);
        if (typeof n.onChanged != "function")
          throw new Error(`Invalid ${e} listChanged options: onChanged must be a function`);
        let { autoRefresh: a, debounceMs: u } = s.data,
          { onChanged: c } = n,
          m = async () => {
            if (!a) {
              c(null, null);
              return;
            }
            try {
              let f = await o();
              c(null, f);
            } catch (f) {
              let p = f instanceof Error ? f : new Error(String(f));
              c(p, null);
            }
          },
          d = () => {
            if (u) {
              let f = this._listChangedDebounceTimers.get(e);
              f && clearTimeout(f);
              let p = setTimeout(m, u);
              this._listChangedDebounceTimers.set(e, p);
            } else m();
          };
        this.setNotificationHandler(r, d);
      }
      async sendRootsListChanged() {
        return this.notification({ method: "notifications/roots/list_changed" });
      }
    };
  });