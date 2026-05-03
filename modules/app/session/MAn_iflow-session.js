/**
 * @module MAn
 * @category app/session
 * @label iflow-session
 * @position 868 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (MAn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends
 * Exports: _parse, spawn, sync, _enoent
 * Functions: Qbs, Zbs, UAn, Ebs, Ibs, Nbs, BAn, Cbs, tAs, f, cjt, kbs, Ek, d, pjt
 * Features: esbuild module exports: MAn, dotenv related, MCP server handling
 * === End semantic info ===
 */


var MAn = T((Orc, LAn) => {
  "use strict";
  var H$t = process.platform === "win32";
  function V$t(t, e) {
    return Object.assign(new Error(`${e} ${t.command} ENOENT`), {
      code: "ENOENT",
      errno: "ENOENT",
      syscall: `${e} ${t.command}`,
      path: t.command,
      spawnargs: t.args,
    });
  }
  function Ebs(t, e) {
    if (!H$t) return;
    let r = t.emit;
    t.emit = function (n, o) {
      if (n === "exit") {
        let s = BAn(o, e);
        if (s) return r.call(t, "error", s);
      }
      return r.apply(t, arguments);
    };
  }
  function BAn(t, e) {
    return H$t && t === 1 && !e.file ? V$t(e.original, "spawn") : null;
  }
  function vbs(t, e) {
    return H$t && t === 1 && !e.file ? V$t(e.original, "spawnSync") : null;
  }
  LAn.exports = { hookChildProcess: Ebs, verifyENOENT: BAn, verifyENOENTSync: vbs, notFoundError: V$t };
});
var $An = T((Nrc, cse) => {
  "use strict";
  var FAn = Ae("child_process"),
    W$t = PAn(),
    z$t = MAn();
  function UAn(t, e, r) {
    let n = W$t(t, e, r),
      o = FAn.spawn(n.command, n.args, n.options);
    return (z$t.hookChildProcess(o, n), o);
  }
  function Cbs(t, e, r) {
    let n = W$t(t, e, r),
      o = FAn.spawnSync(n.command, n.args, n.options);
    return ((o.error = o.error || z$t.verifyENOENTSync(o.status, n)), o);
  }
  cse.exports = UAn;
  cse.exports.spawn = UAn;
  cse.exports.sync = Cbs;
  cse.exports._parse = W$t;
  cse.exports._enoent = z$t;
});
function Sbs(t) {
  return cM.parse(JSON.parse(t));
}
function jAn(t) {
  return (
    JSON.stringify(t) +
    `
`
  );
}
var jYe,
  QAn = j(() => {
    uk();
    jYe = class {
      append(e) {
        this._buffer = this._buffer ? Buffer.concat([this._buffer, e]) : e;
      }
      readMessage() {
        if (!this._buffer) return null;
        let e = this._buffer.indexOf(`
`);
        if (e === -1) return null;
        let r = this._buffer.toString("utf8", 0, e).replace(/\r$/, "");
        return ((this._buffer = this._buffer.subarray(e + 1)), Sbs(r));
      }
      clear() {
        this._buffer = void 0;
      }
    };
  });
import QYe from "node:process";
import { PassThrough as wbs } from "node:stream";
function Tbs() {
  let t = {};
  for (let e of xbs) {
    let r = QYe.env[e];
    r !== void 0 && (r.startsWith("()") || (t[e] = r));
  }
  return t;
}
function Dbs() {
  return "type" in QYe;
}
var GAn,
  xbs,
  TM,
  Y$t = j(() => {
    GAn = Se($An(), 1);
    QAn();
    xbs =
      QYe.platform === "win32"
        ? [
            "APPDATA",
            "HOMEDRIVE",
            "HOMEPATH",
            "LOCALAPPDATA",
            "PATH",
            "PROCESSOR_ARCHITECTURE",
            "SYSTEMDRIVE",
            "SYSTEMROOT",
            "TEMP",
            "USERNAME",
            "USERPROFILE",
            "PROGRAMFILES",
          ]
        : ["HOME", "LOGNAME", "PATH", "SHELL", "TERM", "USER"];
    TM = class {
      constructor(e) {
        ((this._readBuffer = new jYe()),
          (this._stderrStream = null),
          (this._serverParams = e),
          (e.stderr === "pipe" || e.stderr === "overlapped") && (this._stderrStream = new wbs()));
      }
      async start() {
        if (this._process)
          throw new Error(
            "StdioClientTransport already started! If using Client class, note that connect() calls start() automatically.",
          );
        return new Promise((e, r) => {
          ((this._process = (0, GAn.default)(this._serverParams.command, this._serverParams.args ?? [], {
            env: { ...Tbs(), ...this._serverParams.env },
            stdio: ["pipe", "pipe", this._serverParams.stderr ?? "inherit"],
            shell: !1,
            windowsHide: QYe.platform === "win32" && Dbs(),
            cwd: this._serverParams.cwd,
          })),
            this._process.on("error", (n) => {
              (r(n), this.onerror?.(n));
            }),
            this._process.on("spawn", () => {
              e();
            }),
            this._process.on("close", (n) => {
              ((this._process = void 0), this.onclose?.());
            }),
            this._process.stdin?.on("error", (n) => {
              this.onerror?.(n);
            }),
            this._process.stdout?.on("data", (n) => {
              (this._readBuffer.append(n), this.processReadBuffer());
            }),
            this._process.stdout?.on("error", (n) => {
              this.onerror?.(n);
            }),
            this._stderrStream && this._process.stderr && this._process.stderr.pipe(this._stderrStream));
        });
      }
      get stderr() {
        return this._stderrStream ? this._stderrStream : (this._process?.stderr ?? null);
      }
      get pid() {
        return this._process?.pid ?? null;
      }
      processReadBuffer() {
        for (;;)
          try {
            let e = this._readBuffer.readMessage();
            if (e === null) break;
            this.onmessage?.(e);
          } catch (e) {
            this.onerror?.(e);
          }
      }
      async close() {
        if (this._process) {
          let e = this._process;
          this._process = void 0;
          let r = new Promise((n) => {
            e.once("close", () => {
              n();
            });
          });
          try {
            e.stdin?.end();
          } catch {}
          if ((await Promise.race([r, new Promise((n) => setTimeout(n, 2e3).unref())]), e.exitCode === null)) {
            try {
              e.kill("SIGTERM");
            } catch {}
            await Promise.race([r, new Promise((n) => setTimeout(n, 2e3).unref())]);
          }
          if (e.exitCode === null)
            try {
              e.kill("SIGKILL");
            } catch {}
        }
        this._readBuffer.clear();
      }
      send(e) {
        return new Promise((r) => {
          if (!this._process?.stdin) throw new Error("Not connected");
          let n = jAn(e);
          this._process.stdin.write(n) ? r() : this._process.stdin.once("drain", r);
        });
      }
    };
  });
function K$t(t) {}
function qYe(t) {
  if (typeof t == "function")
    throw new TypeError("`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?");
  let { onEvent: e = K$t, onError: r = K$t, onRetry: n = K$t, onComment: o } = t,
    s = "",
    a = !0,
    u,
    c = "",
    m = "";
  function d(b) {
    let A = a ? b.replace(/^\xEF\xBB\xBF/, "") : b,
      [y, E] = Ibs(`${s}${A}`);
    for (let v of y) f(v);
    ((s = E), (a = !1));
  }
  function f(b) {
    if (b === "") {
      h();
      return;
    }
    if (b.startsWith(":")) {
      o && o(b.slice(b.startsWith(": ") ? 2 : 1));
      return;
    }
    let A = b.indexOf(":");
    if (A !== -1) {
      let y = b.slice(0, A),
        E = b[A + 1] === " " ? 2 : 1,
        v = b.slice(A + E);
      p(y, v, b);
      return;
    }
    p(b, "", b);
  }
  function p(b, A, y) {
    switch (b) {
      case "event":
        m = A;
        break;
      case "data":
        c = `${c}${A}
`;
        break;
      case "id":
        u = A.includes("\0") ? void 0 : A;
        break;
      case "retry":
        /^\d+$/.test(A)
          ? n(parseInt(A, 10))
          : r(new GYe(`Invalid \`retry\` value: "${A}"`, { type: "invalid-retry", value: A, line: y }));
        break;
      default:
        r(
          new GYe(`Unknown field "${b.length > 20 ? `${b.slice(0, 20)}\u2026` : b}"`, {
            type: "unknown-field",
            field: b,
            value: A,
            line: y,
          }),
        );
        break;
    }
  }
  function h() {
    (c.length > 0 &&
      e({
        id: u,
        event: m || void 0,
        data: c.endsWith(`
`)
          ? c.slice(0, -1)
          : c,
      }),
      (u = void 0),
      (c = ""),
      (m = ""));
  }
  function g(b = {}) {
    (s && b.consume && f(s), (a = !0), (u = void 0), (c = ""), (m = ""), (s = ""));
  }
  return { feed: d, reset: g };
}
function Ibs(t) {
  let e = [],
    r = "",
    n = 0;
  for (; n < t.length; ) {
    let o = t.indexOf("\r", n),
      s = t.indexOf(
        `
`,
        n,
      ),
      a = -1;
    if (
      (o !== -1 && s !== -1
        ? (a = Math.min(o, s))
        : o !== -1
          ? o === t.length - 1
            ? (a = -1)
            : (a = o)
          : s !== -1 && (a = s),
      a === -1)
    ) {
      r = t.slice(n);
      break;
    } else {
      let u = t.slice(n, a);
      (e.push(u),
        (n = a + 1),
        t[n - 1] === "\r" &&
          t[n] ===
            `
` &&
          n++);
    }
  }
  return [e, r];
}
var GYe,
  J$t = j(() => {
    GYe = class extends Error {
      constructor(e, r) {
        (super(e),
          (this.name = "ParseError"),
          (this.type = r.type),
          (this.field = r.field),
          (this.value = r.value),
          (this.line = r.line));
      }
    };
  });
function Rbs(t) {
  let e = globalThis.DOMException;
  return typeof e == "function" ? new e(t, "SyntaxError") : new SyntaxError(t);
}
function X$t(t) {
  return t instanceof Error
    ? "errors" in t && Array.isArray(t.errors)
      ? t.errors.map(X$t).join(", ")
      : "cause" in t && t.cause instanceof Error
        ? `${t}: ${X$t(t.cause)}`
        : t.message
    : `${t}`;
}
function qAn(t) {
  return {
    type: t.type,
    message: t.message,
    code: t.code,
    defaultPrevented: t.defaultPrevented,
    cancelable: t.cancelable,
    timeStamp: t.timeStamp,
  };
}
function kbs() {
  let t = "document" in globalThis ? globalThis.document : void 0;
  return t && typeof t == "object" && "baseURI" in t && typeof t.baseURI == "string" ? t.baseURI : void 0;
}
var VYe,
  VAn,
  sjt,
  nu,
  Pp,
  sd,
  yk,
  I8,
  oV,
  lse,
  HYe,
  WYe,
  J8e,
  fse,
  X8e,
  DM,
  mse,
  pse,
  dse,
  Y8e,
  M4,
  Z$t,
  ejt,
  tjt,
  HAn,
  rjt,
  njt,
  K8e,
  ijt,
  ojt,
  sV,
  WAn = j(() => {
    J$t();
    VYe = class extends Event {
      constructor(e, r) {
        var n, o;
        (super(e),
          (this.code = (n = r?.code) != null ? n : void 0),
          (this.message = (o = r?.message) != null ? o : void 0));
      }
      [Symbol.for("nodejs.util.inspect.custom")](e, r, n) {
        return n(qAn(this), r);
      }
      [Symbol.for("Deno.customInspect")](e, r) {
        return e(qAn(this), r);
      }
    };
    ((VAn = (t) => {
      throw TypeError(t);
    }),
      (sjt = (t, e, r) => e.has(t) || VAn("Cannot " + r)),
      (nu = (t, e, r) => (sjt(t, e, "read from private field"), r ? r.call(t) : e.get(t))),
      (Pp = (t, e, r) =>
        e.has(t)
          ? VAn("Cannot add the same private member more than once")
          : e instanceof WeakSet
            ? e.add(t)
            : e.set(t, r)),
      (sd = (t, e, r, n) => (sjt(t, e, "write to private field"), e.set(t, r), r)),
      (yk = (t, e, r) => (sjt(t, e, "access private method"), r)),
      (sV = class extends EventTarget {
        constructor(e, r) {
          var n, o;
          (super(),
            Pp(this, M4),
            (this.CONNECTING = 0),
            (this.OPEN = 1),
            (this.CLOSED = 2),
            Pp(this, I8),
            Pp(this, oV),
            Pp(this, lse),
            Pp(this, HYe),
            Pp(this, WYe),
            Pp(this, J8e),
            Pp(this, fse),
            Pp(this, X8e, null),
            Pp(this, DM),
            Pp(this, mse),
            Pp(this, pse, null),
            Pp(this, dse, null),
            Pp(this, Y8e, null),
            Pp(this, ejt, async (s) => {
              var a;
              nu(this, mse).reset();
              let { body: u, redirected: c, status: m, headers: d } = s;
              if (m === 204) {
                (yk(this, M4, K8e).call(this, "Server sent HTTP 204, not reconnecting", 204), this.close());
                return;
              }
              if ((c ? sd(this, lse, new URL(s.url)) : sd(this, lse, void 0), m !== 200)) {
                yk(this, M4, K8e).call(this, `Non-200 status code (${m})`, m);
                return;
              }
              if (!(d.get("content-type") || "").startsWith("text/event-stream")) {
                yk(this, M4, K8e).call(this, 'Invalid content type, expected "text/event-stream"', m);
                return;
              }
              if (nu(this, I8) === this.CLOSED) return;
              sd(this, I8, this.OPEN);
              let f = new Event("open");
              if (
                ((a = nu(this, Y8e)) == null || a.call(this, f),
                this.dispatchEvent(f),
                typeof u != "object" || !u || !("getReader" in u))
              ) {
                (yk(this, M4, K8e).call(this, "Invalid response body, expected a web ReadableStream", m), this.close());
                return;
              }
              let p = new TextDecoder(),
                h = u.getReader(),
                g = !0;
              do {
                let { done: b, value: A } = await h.read();
                (A && nu(this, mse).feed(p.decode(A, { stream: !b })),
                  b && ((g = !1), nu(this, mse).reset(), yk(this, M4, ijt).call(this)));
              } while (g);
            }),
            Pp(this, tjt, (s) => {
              (sd(this, DM, void 0),
                !(s.name === "AbortError" || s.type === "aborted") && yk(this, M4, ijt).call(this, X$t(s)));
            }),
            Pp(this, rjt, (s) => {
              typeof s.id == "string" && sd(this, X8e, s.id);
              let a = new MessageEvent(s.event || "message", {
                data: s.data,
                origin: nu(this, lse) ? nu(this, lse).origin : nu(this, oV).origin,
                lastEventId: s.id || "",
              });
              (nu(this, dse) && (!s.event || s.event === "message") && nu(this, dse).call(this, a),
                this.dispatchEvent(a));
            }),
            Pp(this, njt, (s) => {
              sd(this, J8e, s);
            }),
            Pp(this, ojt, () => {
              (sd(this, fse, void 0), nu(this, I8) === this.CONNECTING && yk(this, M4, Z$t).call(this));
            }));
          try {
            if (e instanceof URL) sd(this, oV, e);
            else if (typeof e == "string") sd(this, oV, new URL(e, kbs()));
            else throw new Error("Invalid URL");
          } catch {
            throw Rbs("An invalid or illegal string was specified");
          }
          (sd(this, mse, qYe({ onEvent: nu(this, rjt), onRetry: nu(this, njt) })),
            sd(this, I8, this.CONNECTING),
            sd(this, J8e, 3e3),
            sd(this, WYe, (n = r?.fetch) != null ? n : globalThis.fetch),
            sd(this, HYe, (o = r?.withCredentials) != null ? o : !1),
            yk(this, M4, Z$t).call(this));
        }
        get readyState() {
          return nu(this, I8);
        }
        get url() {
          return nu(this, oV).href;
        }
        get withCredentials() {
          return nu(this, HYe);
        }
        get onerror() {
          return nu(this, pse);
        }
        set onerror(e) {
          sd(this, pse, e);
        }
        get onmessage() {
          return nu(this, dse);
        }
        set onmessage(e) {
          sd(this, dse, e);
        }
        get onopen() {
          return nu(this, Y8e);
        }
        set onopen(e) {
          sd(this, Y8e, e);
        }
        addEventListener(e, r, n) {
          let o = r;
          super.addEventListener(e, o, n);
        }
        removeEventListener(e, r, n) {
          let o = r;
          super.removeEventListener(e, o, n);
        }
        close() {
          (nu(this, fse) && clearTimeout(nu(this, fse)),
            nu(this, I8) !== this.CLOSED &&
              (nu(this, DM) && nu(this, DM).abort(), sd(this, I8, this.CLOSED), sd(this, DM, void 0)));
        }
      }));
    ((I8 = new WeakMap()),
      (oV = new WeakMap()),
      (lse = new WeakMap()),
      (HYe = new WeakMap()),
      (WYe = new WeakMap()),
      (J8e = new WeakMap()),
      (fse = new WeakMap()),
      (X8e = new WeakMap()),
      (DM = new WeakMap()),
      (mse = new WeakMap()),
      (pse = new WeakMap()),
      (dse = new WeakMap()),
      (Y8e = new WeakMap()),
      (M4 = new WeakSet()),
      (Z$t = function () {
        (sd(this, I8, this.CONNECTING),
          sd(this, DM, new AbortController()),
          nu(this, WYe)(nu(this, oV), yk(this, M4, HAn).call(this))
            .then(nu(this, ejt))
            .catch(nu(this, tjt)));
      }),
      (ejt = new WeakMap()),
      (tjt = new WeakMap()),
      (HAn = function () {
        var t;
        let e = {
          mode: "cors",
          redirect: "follow",
          headers: { Accept: "text/event-stream", ...(nu(this, X8e) ? { "Last-Event-ID": nu(this, X8e) } : void 0) },
          cache: "no-store",
          signal: (t = nu(this, DM)) == null ? void 0 : t.signal,
        };
        return ("window" in globalThis && (e.credentials = this.withCredentials ? "include" : "same-origin"), e);
      }),
      (rjt = new WeakMap()),
      (njt = new WeakMap()),
      (K8e = function (t, e) {
        var r;
        nu(this, I8) !== this.CLOSED && sd(this, I8, this.CLOSED);
        let n = new VYe("error", { code: e, message: t });
        ((r = nu(this, pse)) == null || r.call(this, n), this.dispatchEvent(n));
      }),
      (ijt = function (t, e) {
        var r;
        if (nu(this, I8) === this.CLOSED) return;
        sd(this, I8, this.CONNECTING);
        let n = new VYe("error", { code: e, message: t });
        ((r = nu(this, pse)) == null || r.call(this, n),
          this.dispatchEvent(n),
          sd(this, fse, setTimeout(nu(this, ojt), nu(this, J8e))));
      }),
      (ojt = new WeakMap()),
      (sV.CONNECTING = 0),
      (sV.OPEN = 1),
      (sV.CLOSED = 2));
  });
function hse(t) {
  return t
    ? t instanceof Headers
      ? Object.fromEntries(t.entries())
      : Array.isArray(t)
        ? Object.fromEntries(t)
        : { ...t }
    : {};
}
function zYe(t = fetch, e) {
  return e
    ? async (r, n) => {
        let o = { ...e, ...n, headers: n?.headers ? { ...hse(e.headers), ...hse(n.headers) } : e.headers };
        return t(r, o);
      }
    : t;
}
var ajt = j(() => {});
async function Obs(t) {
  return (await ujt).getRandomValues(new Uint8Array(t));
}
async function Nbs(t) {
  let e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~",
    r = Math.pow(2, 8) - (Math.pow(2, 8) % e.length),
    n = "";
  for (; n.length < t; ) {
    let o = await Obs(t - n.length);
    for (let s of o) s < r && (n += e[s % e.length]);
  }
  return n;
}
async function Pbs(t) {
  return await Nbs(t);
}
async function Bbs(t) {
  let e = await (await ujt).subtle.digest("SHA-256", new TextEncoder().encode(t));
  return btoa(String.fromCharCode(...new Uint8Array(e)))
    .replace(/\//g, "_")
    .replace(/\+/g, "-")
    .replace(/=/g, "");
}
async function cjt(t) {
  if ((t || (t = 43), t < 43 || t > 128)) throw `Expected a length between 43 and 128. Received ${t}.`;
  let e = await Pbs(t),
    r = await Bbs(e);
  return { code_verifier: e, code_challenge: r };
}
var ujt,
  zAn = j(() => {
    ujt = globalThis.crypto?.webcrypto ?? globalThis.crypto ?? import("node:crypto").then((t) => t.webcrypto);
  });
var gg,
  KAn,
  ljt,
  Lbs,
  JAn,
  XAn,
  ZAn,
  YAn,
  Mbs,
  Fbs,
  e2n,
  Hrc,
  Vrc,
  mjt = j(() => {
    ALt();
    ((gg = OWe()
      .superRefine((t, e) => {
        if (!URL.canParse(t))
          return (e.addIssue({ code: gLt.custom, message: "URL must be parseable", fatal: !0 }), Vie);
      })
      .refine(
        (t) => {
          let e = new URL(t);
          return e.protocol !== "javascript:" && e.protocol !== "data:" && e.protocol !== "vbscript:";
        },
        { message: "URL cannot use javascript:, data:, or vbscript: scheme" },
      )),
      (KAn = W1({
        resource: xt().url(),
        authorization_servers: yn(gg).optional(),
        jwks_uri: xt().url().optional(),
        scopes_supported: yn(xt()).optional(),
        bearer_methods_supported: yn(xt()).optional(),
        resource_signing_alg_values_supported: yn(xt()).optional(),
        resource_name: xt().optional(),
        resource_documentation: xt().optional(),
        resource_policy_uri: xt().url().optional(),
        resource_tos_uri: xt().url().optional(),
        tls_client_certificate_bound_access_tokens: rl().optional(),
        authorization_details_types_supported: yn(xt()).optional(),
        dpop_signing_alg_values_supported: yn(xt()).optional(),
        dpop_bound_access_tokens_required: rl().optional(),
      })),
      (ljt = W1({
        issuer: xt(),
        authorization_endpoint: gg,
        token_endpoint: gg,
        registration_endpoint: gg.optional(),
        scopes_supported: yn(xt()).optional(),
        response_types_supported: yn(xt()),
        response_modes_supported: yn(xt()).optional(),
        grant_types_supported: yn(xt()).optional(),
        token_endpoint_auth_methods_supported: yn(xt()).optional(),
        token_endpoint_auth_signing_alg_values_supported: yn(xt()).optional(),
        service_documentation: gg.optional(),
        revocation_endpoint: gg.optional(),
        revocation_endpoint_auth_methods_supported: yn(xt()).optional(),
        revocation_endpoint_auth_signing_alg_values_supported: yn(xt()).optional(),
        introspection_endpoint: xt().optional(),
        introspection_endpoint_auth_methods_supported: yn(xt()).optional(),
        introspection_endpoint_auth_signing_alg_values_supported: yn(xt()).optional(),
        code_challenge_methods_supported: yn(xt()).optional(),
        client_id_metadata_document_supported: rl().optional(),
      })),
      (Lbs = W1({
        issuer: xt(),
        authorization_endpoint: gg,
        token_endpoint: gg,
        userinfo_endpoint: gg.optional(),
        jwks_uri: gg,
        registration_endpoint: gg.optional(),
        scopes_supported: yn(xt()).optional(),
        response_types_supported: yn(xt()),
        response_modes_supported: yn(xt()).optional(),
        grant_types_supported: yn(xt()).optional(),
        acr_values_supported: yn(xt()).optional(),
        subject_types_supported: yn(xt()),
        id_token_signing_alg_values_supported: yn(xt()),
        id_token_encryption_alg_values_supported: yn(xt()).optional(),
        id_token_encryption_enc_values_supported: yn(xt()).optional(),
        userinfo_signing_alg_values_supported: yn(xt()).optional(),
        userinfo_encryption_alg_values_supported: yn(xt()).optional(),
        userinfo_encryption_enc_values_supported: yn(xt()).optional(),
        request_object_signing_alg_values_supported: yn(xt()).optional(),
        request_object_encryption_alg_values_supported: yn(xt()).optional(),
        request_object_encryption_enc_values_supported: yn(xt()).optional(),
        token_endpoint_auth_methods_supported: yn(xt()).optional(),
        token_endpoint_auth_signing_alg_values_supported: yn(xt()).optional(),
        display_values_supported: yn(xt()).optional(),
        claim_types_supported: yn(xt()).optional(),
        claims_supported: yn(xt()).optional(),
        service_documentation: xt().optional(),
        claims_locales_supported: yn(xt()).optional(),
        ui_locales_supported: yn(xt()).optional(),
        claims_parameter_supported: rl().optional(),
        request_parameter_supported: rl().optional(),
        request_uri_parameter_supported: rl().optional(),
        require_request_uri_registration: rl().optional(),
        op_policy_uri: gg.optional(),
        op_tos_uri: gg.optional(),
        client_id_metadata_document_supported: rl().optional(),
      })),
      (JAn = Dn({ ...Lbs.shape, ...ljt.pick({ code_challenge_methods_supported: !0 }).shape })),
      (XAn = Dn({
        access_token: xt(),
        id_token: xt().optional(),
        token_type: xt(),
        expires_in: P5e.number().optional(),
        scope: xt().optional(),
        refresh_token: xt().optional(),
      }).strip()),
      (ZAn = Dn({ error: xt(), error_description: xt().optional(), error_uri: xt().optional() })),
      (YAn = gg.optional().or(Pi("").transform(() => {}))),
      (Mbs = Dn({
        redirect_uris: yn(gg),
        token_endpoint_auth_method: xt().optional(),
        grant_types: yn(xt()).optional(),
        response_types: yn(xt()).optional(),
        client_name: xt().optional(),
        client_uri: gg.optional(),
        logo_uri: YAn,
        scope: xt().optional(),
        contacts: yn(xt()).optional(),
        tos_uri: YAn,
        policy_uri: xt().optional(),
        jwks_uri: gg.optional(),
        jwks: YWe().optional(),
        software_id: xt().optional(),
        software_version: xt().optional(),
        software_statement: xt().optional(),
      }).strip()),
      (Fbs = Dn({
        client_id: xt(),
        client_secret: xt().optional(),
        client_id_issued_at: Cu().optional(),
        client_secret_expires_at: Cu().optional(),
      }).strip()),
      (e2n = Mbs.merge(Fbs)),
      (Hrc = Dn({ error: xt(), error_description: xt().optional() }).strip()),
      (Vrc = Dn({ token: xt(), token_type_hint: xt().optional() }).strip()));
  });
function t2n(t) {
  let e = typeof t == "string" ? new URL(t) : new URL(t.href);
  return ((e.hash = ""), e);
}
function r2n({ requestedResource: t, configuredResource: e }) {
  let r = typeof t == "string" ? new URL(t) : new URL(t.href),
    n = typeof e == "string" ? new URL(e) : new URL(e.href);
  if (r.origin !== n.origin || r.pathname.length < n.pathname.length) return !1;
  let o = r.pathname.endsWith("/") ? r.pathname : r.pathname + "/",
    s = n.pathname.endsWith("/") ? n.pathname : n.pathname + "/";
  return o.startsWith(s);
}
var n2n = j(() => {});
var K1,
  Z8e,
  aV,
  uV,
  cV,
  e9e,
  t9e,
  r9e,
  _k,
  n9e,
  i9e,
  o9e,
  s9e,
  a9e,
  u9e,
  lV,
  c9e,
  l9e,
  i2n,
  o2n = j(() => {
    ((K1 = class extends Error {
      constructor(e, r) {
        (super(e), (this.errorUri = r), (this.name = this.constructor.name));
      }
      toResponseObject() {
        let e = { error: this.errorCode, error_description: this.message };
        return (this.errorUri && (e.error_uri = this.errorUri), e);
      }
      get errorCode() {
        return this.constructor.errorCode;
      }
    }),
      (Z8e = class extends K1 {}));
    Z8e.errorCode = "invalid_request";
    aV = class extends K1 {};
    aV.errorCode = "invalid_client";
    uV = class extends K1 {};
    uV.errorCode = "invalid_grant";
    cV = class extends K1 {};
    cV.errorCode = "unauthorized_client";
    e9e = class extends K1 {};
    e9e.errorCode = "unsupported_grant_type";
    t9e = class extends K1 {};
    t9e.errorCode = "invalid_scope";
    r9e = class extends K1 {};
    r9e.errorCode = "access_denied";
    _k = class extends K1 {};
    _k.errorCode = "server_error";
    n9e = class extends K1 {};
    n9e.errorCode = "temporarily_unavailable";
    i9e = class extends K1 {};
    i9e.errorCode = "unsupported_response_type";
    o9e = class extends K1 {};
    o9e.errorCode = "unsupported_token_type";
    s9e = class extends K1 {};
    s9e.errorCode = "invalid_token";
    a9e = class extends K1 {};
    a9e.errorCode = "method_not_allowed";
    u9e = class extends K1 {};
    u9e.errorCode = "too_many_requests";
    lV = class extends K1 {};
    lV.errorCode = "invalid_client_metadata";
    c9e = class extends K1 {};
    c9e.errorCode = "insufficient_scope";
    l9e = class extends K1 {};
    l9e.errorCode = "invalid_target";
    i2n = {
      [Z8e.errorCode]: Z8e,
      [aV.errorCode]: aV,
      [uV.errorCode]: uV,
      [cV.errorCode]: cV,
      [e9e.errorCode]: e9e,
      [t9e.errorCode]: t9e,
      [r9e.errorCode]: r9e,
      [_k.errorCode]: _k,
      [n9e.errorCode]: n9e,
      [i9e.errorCode]: i9e,
      [o9e.errorCode]: o9e,
      [s9e.errorCode]: s9e,
      [a9e.errorCode]: a9e,
      [u9e.errorCode]: u9e,
      [lV.errorCode]: lV,
      [c9e.errorCode]: c9e,
      [l9e.errorCode]: l9e,
    };
  });
function Ubs(t) {
  return ["client_secret_basic", "client_secret_post", "none"].includes(t);
}
function $bs(t, e) {
  let r = t.client_secret !== void 0;
  return e.length === 0
    ? r
      ? "client_secret_post"
      : "none"
    : "token_endpoint_auth_method" in t &&
        t.token_endpoint_auth_method &&
        Ubs(t.token_endpoint_auth_method) &&
        e.includes(t.token_endpoint_auth_method)
      ? t.token_endpoint_auth_method
      : r && e.includes("client_secret_basic")
        ? "client_secret_basic"
        : r && e.includes("client_secret_post")
          ? "client_secret_post"
          : e.includes("none")
            ? "none"
            : r
              ? "client_secret_post"
              : "none";
}
function jbs(t, e, r, n) {
  let { client_id: o, client_secret: s } = e;
  switch (t) {
    case "client_secret_basic":
      Qbs(o, s, r);
      return;
    case "client_secret_post":
      Gbs(o, s, n);
      return;
    case "none":
      qbs(o, n);
      return;
    default:
      throw new Error(`Unsupported client authentication method: ${t}`);
  }
}
function Qbs(t, e, r) {
  if (!e) throw new Error("client_secret_basic authentication requires a client_secret");
  let n = btoa(`${t}:${e}`);
  r.set("Authorization", `Basic ${n}`);
}
function Gbs(t, e, r) {
  (r.set("client_id", t), e && r.set("client_secret", e));
}
function qbs(t, e) {
  e.set("client_id", t);
}
async function a2n(t) {
  let e = t instanceof Response ? t.status : void 0,
    r = t instanceof Response ? await t.text() : t;
  try {
    let n = ZAn.parse(JSON.parse(r)),
      { error: o, error_description: s, error_uri: a } = n,
      u = i2n[o] || _k;
    return new u(s || "", a);
  } catch (n) {
    let o = `${e ? `HTTP ${e}: ` : ""}Invalid OAuth error response: ${n}. Raw body: ${r}`;
    return new _k(o);
  }
}
async function Ek(t, e) {
  try {
    return await pjt(t, e);
  } catch (r) {
    if (r instanceof aV || r instanceof cV) return (await t.invalidateCredentials?.("all"), await pjt(t, e));
    if (r instanceof uV) return (await t.invalidateCredentials?.("tokens"), await pjt(t, e));
    throw r;
  }
}
async function pjt(t, { serverUrl: e, authorizationCode: r, scope: n, resourceMetadataUrl: o, fetchFn: s }) {
  let a, u;
  try {
    ((a = await Wbs(e, { resourceMetadataUrl: o }, s)),
      a.authorization_servers && a.authorization_servers.length > 0 && (u = a.authorization_servers[0]));
  } catch {}
  u || (u = new URL("/", e));
  let c = await Vbs(e, t, a),
    m = await Xbs(u, { fetchFn: s }),
    d = await Promise.resolve(t.clientInformation());
  if (!d) {
    if (r !== void 0)
      throw new Error("Existing OAuth client information is required when exchanging an authorization code");
    let A = m?.client_id_metadata_document_supported === !0,
      y = t.clientMetadataUrl;
    if (y && !Hbs(y)) throw new lV(`clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${y}`);
    if (A && y) ((d = { client_id: y }), await t.saveClientInformation?.(d));
    else {
      if (!t.saveClientInformation)
        throw new Error("OAuth client information must be saveable for dynamic registration");
      let v = await tAs(u, { metadata: m, clientMetadata: t.clientMetadata, fetchFn: s });
      (await t.saveClientInformation(v), (d = v));
    }
  }
  let f = !t.redirectUrl;
  if (r !== void 0 || f) {
    let A = await eAs(t, u, { metadata: m, resource: c, authorizationCode: r, fetchFn: s });
    return (await t.saveTokens(A), "AUTHORIZED");
  }
  let p = await t.tokens();
  if (p?.refresh_token)
    try {
      let A = await Ajt(u, {
        metadata: m,
        clientInformation: d,
        refreshToken: p.refresh_token,
        resource: c,
        addClientAuthentication: t.addClientAuthentication,
        fetchFn: s,
      });
      return (await t.saveTokens(A), "AUTHORIZED");
    } catch (A) {
      if (!(!(A instanceof K1) || A instanceof _k)) throw A;
    }
  let h = t.state ? await t.state() : void 0,
    { authorizationUrl: g, codeVerifier: b } = await Zbs(u, {
      metadata: m,
      clientInformation: d,
      state: h,
      redirectUrl: t.redirectUrl,
      scope: n || a?.scopes_supported?.join(" ") || t.clientMetadata.scope,
      resource: c,
    });
  return (await t.saveCodeVerifier(b), await t.redirectToAuthorization(g), "REDIRECT");
}
function Hbs(t) {
  if (!t) return !1;
  try {
    let e = new URL(t);
    return e.protocol === "https:" && e.pathname !== "/";
  } catch {
    return !1;
  }
}
async function Vbs(t, e, r) {
  let n = t2n(t);
  if (e.validateResourceURL) return await e.validateResourceURL(n, r?.resource);
  if (r) {
    if (!r2n({ requestedResource: n, configuredResource: r.resource }))
      throw new Error(`Protected resource ${r.resource} does not match expected ${n} (or origin)`);
    return new URL(r.resource);
  }
}
function gse(t) {
  let e = t.headers.get("WWW-Authenticate");
  if (!e) return {};
  let [r, n] = e.split(" ");
  if (r.toLowerCase() !== "bearer" || !n) return {};
  let o = hjt(t, "resource_metadata") || void 0,
    s;
  if (o)
    try {
      s = new URL(o);
    } catch {}
  let a = hjt(t, "scope") || void 0,
    u = hjt(t, "error") || void 0;
  return { resourceMetadataUrl: s, scope: a, error: u };
}
function hjt(t, e) {
  let r = t.headers.get("WWW-Authenticate");
  if (!r) return null;
  let n = new RegExp(`${e}=(?:"([^"]+)"|([^\\s,]+))`),
    o = r.match(n);
  return o ? o[1] || o[2] : null;
}
async function Wbs(t, e, r = fetch) {
  let n = await Kbs(t, "oauth-protected-resource", r, {
    protocolVersion: e?.protocolVersion,
    metadataUrl: e?.resourceMetadataUrl,
  });
  if (!n || n.status === 404)
    throw (
      await n?.body?.cancel(),
      new Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.")
    );
  if (!n.ok)
    throw (
      await n.body?.cancel(),
      new Error(`HTTP ${n.status} trying to load well-known OAuth protected resource metadata.`)
    );
  return KAn.parse(await n.json());
}
async function gjt(t, e, r = fetch) {
  try {
    return await r(t, { headers: e });
  } catch (n) {
    if (n instanceof TypeError) return e ? gjt(t, void 0, r) : void 0;
    throw n;
  }
}
function zbs(t, e = "", r = {}) {
  return (
    e.endsWith("/") && (e = e.slice(0, -1)),
    r.prependPathname ? `${e}/.well-known/${t}` : `/.well-known/${t}${e}`
  );
}
async function s2n(t, e, r = fetch) {
  return await gjt(t, { "MCP-Protocol-Version": e }, r);
}
function Ybs(t, e) {
  return !t || (t.status >= 400 && t.status < 500 && e !== "/");
}
async function Kbs(t, e, r, n) {
  let o = new URL(t),
    s = n?.protocolVersion ?? Doe,
    a;
  if (n?.metadataUrl) a = new URL(n.metadataUrl);
  else {
    let c = zbs(e, o.pathname);
    ((a = new URL(c, n?.metadataServerUrl ?? o)), (a.search = o.search));
  }
  let u = await s2n(a, s, r);
  if (!n?.metadataUrl && Ybs(u, o.pathname)) {
    let c = new URL(`/.well-known/${e}`, o);
    u = await s2n(c, s, r);
  }
  return u;
}
function Jbs(t) {
  let e = typeof t == "string" ? new URL(t) : t,
    r = e.pathname !== "/",
    n = [];
  if (!r)
    return (
      n.push({ url: new URL("/.well-known/oauth-authorization-server", e.origin), type: "oauth" }),
      n.push({ url: new URL("/.well-known/openid-configuration", e.origin), type: "oidc" }),
      n
    );
  let o = e.pathname;
  return (
    o.endsWith("/") && (o = o.slice(0, -1)),
    n.push({ url: new URL(`/.well-known/oauth-authorization-server${o}`, e.origin), type: "oauth" }),
    n.push({ url: new URL(`/.well-known/openid-configuration${o}`, e.origin), type: "oidc" }),
    n.push({ url: new URL(`${o}/.well-known/openid-configuration`, e.origin), type: "oidc" }),
    n
  );
}
async function Xbs(t, { fetchFn: e = fetch, protocolVersion: r = Doe } = {}) {
  let n = { "MCP-Protocol-Version": r, Accept: "application/json" },
    o = Jbs(t);
  for (let { url: s, type: a } of o) {
    let u = await gjt(s, n, e);
    if (u) {
      if (!u.ok) {
        if ((await u.body?.cancel(), u.status >= 400 && u.status < 500)) continue;
        throw new Error(
          `HTTP ${u.status} trying to load ${a === "oauth" ? "OAuth" : "OpenID provider"} metadata from ${s}`,
        );
      }
      return a === "oauth" ? ljt.parse(await u.json()) : JAn.parse(await u.json());
    }
  }
}
async function Zbs(t, { metadata: e, clientInformation: r, redirectUrl: n, scope: o, state: s, resource: a }) {
  let u;
  if (e) {
    if (((u = new URL(e.authorization_endpoint)), !e.response_types_supported.includes(djt)))
      throw new Error(`Incompatible auth server: does not support response type ${djt}`);
    if (e.code_challenge_methods_supported && !e.code_challenge_methods_supported.includes(fjt))
      throw new Error(`Incompatible auth server: does not support code challenge method ${fjt}`);
  } else u = new URL("/authorize", t);
  let c = await cjt(),
    m = c.code_verifier,
    d = c.code_challenge;
  return (
    u.searchParams.set("response_type", djt),
    u.searchParams.set("client_id", r.client_id),
    u.searchParams.set("code_challenge", d),
    u.searchParams.set("code_challenge_method", fjt),
    u.searchParams.set("redirect_uri", String(n)),
    s && u.searchParams.set("state", s),
    o && u.searchParams.set("scope", o),
    o?.includes("offline_access") && u.searchParams.append("prompt", "consent"),
    a && u.searchParams.set("resource", a.href),
    { authorizationUrl: u, codeVerifier: m }
  );
}
function u2n(t, e, r) {
  return new URLSearchParams({ grant_type: "authorization_code", code: t, code_verifier: e, redirect_uri: String(r) });
}
async function bjt(
  t,
  { metadata: e, tokenRequestParams: r, clientInformation: n, addClientAuthentication: o, resource: s, fetchFn: a },
) {
  let u = e?.token_endpoint ? new URL(e.token_endpoint) : new URL("/token", t),
    c = new Headers({ "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" });
  if ((s && r.set("resource", s.href), o)) await o(c, r, u, e);
  else if (n) {
    let d = e?.token_endpoint_auth_methods_supported ?? [],
      f = $bs(n, d);
    jbs(f, n, c, r);
  }
  let m = await (a ?? fetch)(u, { method: "POST", headers: c, body: r });
  if (!m.ok) throw await a2n(m);
  return XAn.parse(await m.json());
}
async function c2n(
  t,
  {
    metadata: e,
    clientInformation: r,
    authorizationCode: n,
    codeVerifier: o,
    redirectUri: s,
    resource: a,
    addClientAuthentication: u,
    fetchFn: c,
  },
) {
  let m = u2n(n, o, s);
  return bjt(t, {
    metadata: e,
    tokenRequestParams: m,
    clientInformation: r,
    addClientAuthentication: u,
    resource: a,
    fetchFn: c,
  });
}
async function Ajt(
  t,
  { metadata: e, clientInformation: r, refreshToken: n, resource: o, addClientAuthentication: s, fetchFn: a },
) {
  let u = new URLSearchParams({ grant_type: "refresh_token", refresh_token: n }),
    c = await bjt(t, {
      metadata: e,
      tokenRequestParams: u,
      clientInformation: r,
      addClientAuthentication: s,
      resource: o,
      fetchFn: a,
    });
  return { refresh_token: n, ...c };
}
async function eAs(t, e, { metadata: r, resource: n, authorizationCode: o, fetchFn: s } = {}) {
  let a = t.clientMetadata.scope,
    u;
  if ((t.prepareTokenRequest && (u = await t.prepareTokenRequest(a)), !u)) {
    if (!o) throw new Error("Either provider.prepareTokenRequest() or authorizationCode is required");
    if (!t.redirectUrl) throw new Error("redirectUrl is required for authorization_code flow");
    let m = await t.codeVerifier();
    u = u2n(o, m, t.redirectUrl);
  }
  let c = await t.clientInformation();
  return bjt(e, {
    metadata: r,
    tokenRequestParams: u,
    clientInformation: c ?? void 0,
    addClientAuthentication: t.addClientAuthentication,
    resource: n,
    fetchFn: s,
  });
}
async function tAs(t, { metadata: e, clientMetadata: r, fetchFn: n }) {
  let o;
  if (e) {
    if (!e.registration_endpoint)
      throw new Error("Incompatible auth server: does not support dynamic client registration");
    o = new URL(e.registration_endpoint);
  } else o = new URL("/register", t);
  let s = await (n ?? fetch)(o, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(r),
  });
  if (!s.ok) throw await a2n(s);
  return e2n.parse(await s.json());
}
var x2,
  djt,
  fjt,
  YYe = j(() => {
    zAn();
    uk();
    mjt();
    mjt();
    n2n();
    o2n();
    x2 = class extends Error {
      constructor(e) {
        super(e ?? "Unauthorized");
      }
    };
    ((djt = "code"), (fjt = "S256"));
  });
var yjt,
  bse,
  l2n = j(() => {
    WAn();
    ajt();
    uk();
    YYe();
    ((yjt = class extends Error {
      constructor(e, r, n) {
        (super(`SSE error: ${r}`), (this.code = e), (this.event = n));
      }
    }),
      (bse = class {
        constructor(e, r) {
          ((this._url = e),
            (this._resourceMetadataUrl = void 0),
            (this._scope = void 0),
            (this._eventSourceInit = r?.eventSourceInit),
            (this._requestInit = r?.requestInit),
            (this._authProvider = r?.authProvider),
            (this._fetch = r?.fetch),
            (this._fetchWithInit = zYe(r?.fetch, r?.requestInit)));
        }
        async _authThenStart() {
          if (!this._authProvider) throw new x2("No auth provider");
          let e;
          try {
            e = await Ek(this._authProvider, {
              serverUrl: this._url,
              resourceMetadataUrl: this._resourceMetadataUrl,
              scope: this._scope,
              fetchFn: this._fetchWithInit,
            });
          } catch (r) {
            throw (this.onerror?.(r), r);
          }
          if (e !== "AUTHORIZED") throw new x2();
          return await this._startOrAuth();
        }
        async _commonHeaders() {
          let e = {};
          if (this._authProvider) {
            let n = await this._authProvider.tokens();
            n && (e.Authorization = `Bearer ${n.access_token}`);
          }
          this._protocolVersion && (e["mcp-protocol-version"] = this._protocolVersion);
          let r = hse(this._requestInit?.headers);
          return new Headers({ ...e, ...r });
        }
        _startOrAuth() {
          let e = this?._eventSourceInit?.fetch ?? this._fetch ?? fetch;
          return new Promise((r, n) => {
            ((this._eventSource = new sV(this._url.href, {
              ...this._eventSourceInit,
              fetch: async (o, s) => {
                let a = await this._commonHeaders();
                a.set("Accept", "text/event-stream");
                let u = await e(o, { ...s, headers: a });
                if (u.status === 401 && u.headers.has("www-authenticate")) {
                  let { resourceMetadataUrl: c, scope: m } = gse(u);
                  ((this._resourceMetadataUrl = c), (this._scope = m));
                }
                return u;
              },
            })),
              (this._abortController = new AbortController()),
              (this._eventSource.onerror = (o) => {
                if (o.code === 401 && this._authProvider) {
                  this._authThenStart().then(r, n);
                  return;
                }
                let s = new yjt(o.code, o.message, o);
                (n(s), this.onerror?.(s));
              }),
              (this._eventSource.onopen = () => {}),
              this._eventSource.addEventListener("endpoint", (o) => {
                let s = o;
                try {
                  if (((this._endpoint = new URL(s.data, this._url)), this._endpoint.origin !== this._url.origin))
                    throw new Error(`Endpoint origin does not match connection origin: ${this._endpoint.origin}`);
                } catch (a) {
                  (n(a), this.onerror?.(a), this.close());
                  return;
                }
                r();
              }),
              (this._eventSource.onmessage = (o) => {
                let s = o,
                  a;
                try {
                  a = cM.parse(JSON.parse(s.data));
                } catch (u) {
                  this.onerror?.(u);
                  return;
                }
                this.onmessage?.(a);
              }));
          });
        }
        async start() {
          if (this._eventSource)
            throw new Error(
              "SSEClientTransport already started! If using Client class, note that connect() calls start() automatically.",
            );
          return await this._startOrAuth();
        }
        async finishAuth(e) {
          if (!this._authProvider) throw new x2("No auth provider");
          if (
            (await Ek(this._authProvider, {
              serverUrl: this._url,
              authorizationCode: e,
              resourceMetadataUrl: this._resourceMetadataUrl,
              scope: this._scope,
              fetchFn: this._fetchWithInit,
            })) !== "AUTHORIZED"
          )
            throw new x2("Failed to authorize");
        }
        async close() {
          (this._abortController?.abort(), this._eventSource?.close(), this.onclose?.());
        }
        async send(e) {
          if (!this._endpoint) throw new Error("Not connected");
          try {
            let r = await this._commonHeaders();
            r.set("content-type", "application/json");
            let n = {
                ...this._requestInit,
                method: "POST",
                headers: r,
                body: JSON.stringify(e),
                signal: this._abortController?.signal,
              },
              o = await (this._fetch ?? fetch)(this._endpoint, n);
            if (!o.ok) {
              let s = await o.text().catch(() => null);
              if (o.status === 401 && this._authProvider) {
                let { resourceMetadataUrl: a, scope: u } = gse(o);
                if (
                  ((this._resourceMetadataUrl = a),
                  (this._scope = u),
                  (await Ek(this._authProvider, {
                    serverUrl: this._url,
                    resourceMetadataUrl: this._resourceMetadataUrl,
                    scope: this._scope,
                    fetchFn: this._fetchWithInit,
                  })) !== "AUTHORIZED")
                )
                  throw new x2();
                return this.send(e);
              }
              throw new Error(`Error POSTing to endpoint (HTTP ${o.status}): ${s}`);
            }
            await o.body?.cancel();
          } catch (r) {
            throw (this.onerror?.(r), r);
          }
        }
        setProtocolVersion(e) {
          this._protocolVersion = e;
        }
      }));
  });
var KYe,
  m2n = j(() => {
    J$t();
    KYe = class extends TransformStream {
      constructor({ onError: e, onRetry: r, onComment: n } = {}) {
        let o;
        super({
          start(s) {
            o = qYe({
              onEvent: (a) => {
                s.enqueue(a);
              },
              onError(a) {
                e === "terminate" ? s.error(a) : typeof e == "function" && e(a);
              },
              onRetry: r,
              onComment: n,
            });
          },
          transform(s) {
            o.feed(s);
          },
        });
      }
    };
  });
var rAs,
  IM,
  RM,
  _jt = j(() => {
    ajt();
    uk();
    YYe();
    m2n();
    ((rAs = {
      initialReconnectionDelay: 1e3,
      maxReconnectionDelay: 3e4,
      reconnectionDelayGrowFactor: 1.5,
      maxRetries: 2,
    }),
      (IM = class extends Error {
        constructor(e, r) {
          (super(`Streamable HTTP error: ${r}`), (this.code = e));
        }
      }),
      (RM = class {
        constructor(e, r) {
          ((this._hasCompletedAuthFlow = !1),
            (this._url = e),
            (this._resourceMetadataUrl = void 0),
            (this._scope = void 0),
            (this._requestInit = r?.requestInit),
            (this._authProvider = r?.authProvider),
            (this._fetch = r?.fetch),
            (this._fetchWithInit = zYe(r?.fetch, r?.requestInit)),
            (this._sessionId = r?.sessionId),
            (this._reconnectionOptions = r?.reconnectionOptions ?? rAs));
        }
        async _authThenStart() {
          if (!this._authProvider) throw new x2("No auth provider");
          let e;
          try {
            e = await Ek(this._authProvider, {
              serverUrl: this._url,
              resourceMetadataUrl: this._resourceMetadataUrl,
              scope: this._scope,
              fetchFn: this._fetchWithInit,
            });
          } catch (r) {
            throw (this.onerror?.(r), r);
          }
          if (e !== "AUTHORIZED") throw new x2();
          return await this._startOrAuthSse({ resumptionToken: void 0 });
        }
        async _commonHeaders() {
          let e = {};
          if (this._authProvider) {
            let n = await this._authProvider.tokens();
            n && (e.Authorization = `Bearer ${n.access_token}`);
          }
          (this._sessionId && (e["mcp-session-id"] = this._sessionId),
            this._protocolVersion && (e["mcp-protocol-version"] = this._protocolVersion));
          let r = hse(this._requestInit?.headers);
          return new Headers({ ...e, ...r });
        }
        async _startOrAuthSse(e) {
          let { resumptionToken: r } = e;
          try {
            let n = await this._commonHeaders();
            (n.set("Accept", "text/event-stream"), r && n.set("last-event-id", r));
            let o = await (this._fetch ?? fetch)(this._url, {
              method: "GET",
              headers: n,
              signal: this._abortController?.signal,
            });
            if (!o.ok) {
              if ((await o.body?.cancel(), o.status === 401 && this._authProvider)) return await this._authThenStart();
              if (o.status === 405) return;
              throw new IM(o.status, `Failed to open SSE stream: ${o.statusText}`);
            }
            this._handleSseStream(o.body, e, !0);
          } catch (n) {
            throw (this.onerror?.(n), n);
          }
        }
        _getNextReconnectionDelay(e) {
          if (this._serverRetryMs !== void 0) return this._serverRetryMs;
          let r = this._reconnectionOptions.initialReconnectionDelay,
            n = this._reconnectionOptions.reconnectionDelayGrowFactor,
            o = this._reconnectionOptions.maxReconnectionDelay;
          return Math.min(r * Math.pow(n, e), o);
        }
        _scheduleReconnection(e, r = 0) {
          let n = this._reconnectionOptions.maxRetries;
          if (r >= n) {
            this.onerror?.(new Error(`Maximum reconnection attempts (${n}) exceeded.`));
            return;
          }
          let o = this._getNextReconnectionDelay(r);
          this._reconnectionTimeout = setTimeout(() => {
            this._startOrAuthSse(e).catch((s) => {
              (this.onerror?.(
                new Error(`Failed to reconnect SSE stream: ${s instanceof Error ? s.message : String(s)}`),
              ),
                this._scheduleReconnection(e, r + 1));
            });
          }, o);
        }
        _handleSseStream(e, r, n) {
          if (!e) return;
          let { onresumptiontoken: o, replayMessageId: s } = r,
            a,
            u = !1,
            c = !1;
          (async () => {
            try {
              let d = e
                .pipeThrough(new TextDecoderStream())
                .pipeThrough(
                  new KYe({
                    onRetry: (h) => {
                      this._serverRetryMs = h;
                    },
                  }),
                )
                .getReader();
              for (;;) {
                let { value: h, done: g } = await d.read();
                if (g) break;
                if ((h.id && ((a = h.id), (u = !0), o?.(h.id)), !!h.data && (!h.event || h.event === "message")))
                  try {
                    let b = cM.parse(JSON.parse(h.data));
                    (BH(b) && ((c = !0), s !== void 0 && (b.id = s)), this.onmessage?.(b));
                  } catch (b) {
                    this.onerror?.(b);
                  }
              }
              (n || u) &&
                !c &&
                this._abortController &&
                !this._abortController.signal.aborted &&
                this._scheduleReconnection({ resumptionToken: a, onresumptiontoken: o, replayMessageId: s }, 0);
            } catch (d) {
              if (
                (this.onerror?.(new Error(`SSE stream disconnected: ${d}`)),
                (n || u) && !c && this._abortController && !this._abortController.signal.aborted)
              )
                try {
                  this._scheduleReconnection({ resumptionToken: a, onresumptiontoken: o, replayMessageId: s }, 0);
                } catch (h) {
                  this.onerror?.(new Error(`Failed to reconnect: ${h instanceof Error ? h.message : String(h)}`));
                }
            }
          })();
        }
        async start() {
          if (this._abortController)
            throw new Error(
              "StreamableHTTPClientTransport already started! If using Client class, note that connect() calls start() automatically.",
            );
          this._abortController = new AbortController();
        }
        async finishAuth(e) {
          if (!this._authProvider) throw new x2("No auth provider");
          if (
            (await Ek(this._authProvider, {
              serverUrl: this._url,
              authorizationCode: e,
              resourceMetadataUrl: this._resourceMetadataUrl,
              scope: this._scope,
              fetchFn: this._fetchWithInit,
            })) !== "AUTHORIZED"
          )
            throw new x2("Failed to authorize");
        }
        async close() {
          (this._reconnectionTimeout && (clearTimeout(this._reconnectionTimeout), (this._reconnectionTimeout = void 0)),
            this._abortController?.abort(),
            this.onclose?.());
        }
        async send(e, r) {
          try {
            let { resumptionToken: n, onresumptiontoken: o } = r || {};
            if (n) {
              this._startOrAuthSse({ resumptionToken: n, replayMessageId: M5e(e) ? e.id : void 0 }).catch((p) =>
                this.onerror?.(p),
              );
              return;
            }
            let s = await this._commonHeaders();
            (s.set("content-type", "application/json"), s.set("accept", "application/json, text/event-stream"));
            let a = {
                ...this._requestInit,
                method: "POST",
                headers: s,
                body: JSON.stringify(e),
                signal: this._abortController?.signal,
              },
              u = await (this._fetch ?? fetch)(this._url, a),
              c = u.headers.get("mcp-session-id");
            if ((c && (this._sessionId = c), !u.ok)) {
              let p = await u.text().catch(() => null);
              if (u.status === 401 && this._authProvider) {
                if (this._hasCompletedAuthFlow)
                  throw new IM(401, "Server returned 401 after successful authentication");
                let { resourceMetadataUrl: h, scope: g } = gse(u);
                if (
                  ((this._resourceMetadataUrl = h),
                  (this._scope = g),
                  (await Ek(this._authProvider, {
                    serverUrl: this._url,
                    resourceMetadataUrl: this._resourceMetadataUrl,
                    scope: this._scope,
                    fetchFn: this._fetchWithInit,
                  })) !== "AUTHORIZED")
                )
                  throw new x2();
                return ((this._hasCompletedAuthFlow = !0), this.send(e));
              }
              if (u.status === 403 && this._authProvider) {
                let { resourceMetadataUrl: h, scope: g, error: b } = gse(u);
                if (b === "insufficient_scope") {
                  let A = u.headers.get("WWW-Authenticate");
                  if (this._lastUpscopingHeader === A) throw new IM(403, "Server returned 403 after trying upscoping");
                  if (
                    (g && (this._scope = g),
                    h && (this._resourceMetadataUrl = h),
                    (this._lastUpscopingHeader = A ?? void 0),
                    (await Ek(this._authProvider, {
                      serverUrl: this._url,
                      resourceMetadataUrl: this._resourceMetadataUrl,
                      scope: this._scope,
                      fetchFn: this._fetch,
                    })) !== "AUTHORIZED")
                  )
                    throw new x2();
                  return this.send(e);
                }
              }
              throw new IM(u.status, `Error POSTing to endpoint: ${p}`);
            }
            if (((this._hasCompletedAuthFlow = !1), (this._lastUpscopingHeader = void 0), u.status === 202)) {
              (await u.body?.cancel(),
                kfn(e) && this._startOrAuthSse({ resumptionToken: void 0 }).catch((p) => this.onerror?.(p)));
              return;
            }
            let d =
                (Array.isArray(e) ? e : [e]).filter((p) => "method" in p && "id" in p && p.id !== void 0).length > 0,
              f = u.headers.get("content-type");
            if (d)
              if (f?.includes("text/event-stream")) this._handleSseStream(u.body, { onresumptiontoken: o }, !1);
              else if (f?.includes("application/json")) {
                let p = await u.json(),
                  h = Array.isArray(p) ? p.map((g) => cM.parse(g)) : [cM.parse(p)];
                for (let g of h) this.onmessage?.(g);
              } else throw (await u.body?.cancel(), new IM(-1, `Unexpected content type: ${f}`));
            else await u.body?.cancel();
          } catch (n) {
            throw (this.onerror?.(n), n);
          }
        }
        get sessionId() {
          return this._sessionId;
        }
        async terminateSession() {
          if (this._sessionId)
            try {
              let e = await this._commonHeaders(),
                r = { ...this._requestInit, method: "DELETE", headers: e, signal: this._abortController?.signal },
                n = await (this._fetch ?? fetch)(this._url, r);
              if ((await n.body?.cancel(), !n.ok && n.status !== 405))
                throw new IM(n.status, `Failed to terminate session: ${n.statusText}`);
              this._sessionId = void 0;
            } catch (e) {
              throw (this.onerror?.(e), e);
            }
        }
        setProtocolVersion(e) {
          this._protocolVersion = e;
        }
        get protocolVersion() {
          return this._protocolVersion;
        }
        async resumeStream(e, r) {
          await this._startOrAuthSse({ resumptionToken: e, onresumptiontoken: r?.onresumptiontoken });
        }
      }));
  });
import { readFile as nAs } from "node:fs/promises";
var m9e,
  d9e,
  mV,
  Ejt = j(() => {
    "use strict";
    Uhe();
    YYe();
    bi();
    (function (t) {
      ((t.CLI_CONNECT = "cli_connect"),
        (t.PING = "ping"),
        (t.GET_ACTIVE_FILE = "get_active_file"),
        (t.GET_FILE_CONTENT = "get_file_content"),
        (t.GET_SELECTED_TEXT = "get_selected_text"),
        (t.SHOW_DIFF = "show_diff"));
    })(m9e || (m9e = {}));
    ((d9e = class extends Error {
      code;
      constructor(e, r) {
        (super(r), (this.code = e));
      }
    }),
      (mV = class {
        _websocket;
        _url;
        _authProvider;
        _websocketOptions;
        _WebSocket;
        _protocolVersion;
        _isClosed = !1;
        _specialIds = new Set();
        onclose;
        onerror;
        onmessage;
        sessionId;
        constructor(e, r) {
          ((this._url = e),
            (this._authProvider = r?.authProvider),
            (this._websocketOptions = r?.websocketOptions),
            (this._WebSocket = r?.WebSocket || cG.default));
        }
        async start() {
          if (this._isClosed) throw new Error(I.t("websocketClient.errors.transportClosed"));
          let e = null;
          if (this._authProvider)
            try {
              let o = await this._authProvider.tokens();
              o?.access_token && (e = o.access_token);
            } catch (o) {
              try {
                let s = await this._authProvider.clientInformation();
                if (s) {
                  let a = await this._authProvider.tokens();
                  if (a?.refresh_token) {
                    let u = await Ajt(this._url, {
                      clientInformation: s,
                      refreshToken: a.refresh_token,
                      addClientAuthentication: this._authProvider.addClientAuthentication,
                    });
                    (await this._authProvider.saveTokens(u), u?.access_token && (e = u.access_token));
                  }
                }
              } catch {
                if (this._authProvider.redirectToAuthorization) {
                  let s = this._authProvider.redirectUrl;
                  throw s
                    ? (await this._authProvider.redirectToAuthorization(typeof s == "string" ? new URL(s) : s),
                      new Error(I.t("websocketClient.errors.unauthorizedOAuth")))
                    : new Error("Redirect URL is required for authorization");
                }
                throw o;
              }
            }
          let r = { ...this._websocketOptions?.headers };
          (e && (r.Authorization = `Bearer ${e}`),
            this._protocolVersion && (r["MCP-Protocol-Version"] = this._protocolVersion));
          let n = new URL(this._url.toString());
          return (
            n.protocol === "http:" ? (n.protocol = "ws:") : n.protocol === "https:" && (n.protocol = "wss:"),
            new Promise((o, s) => {
              try {
                let a = { headers: r };
                ((this._websocket = new this._WebSocket(n.toString(), a)),
                  this._websocket.on("open", () => {
                    o();
                  }),
                  this._websocket.on("error", (u) => {
                    let c = u.code !== void 0 ? u.code : void 0;
                    s(new d9e(c, `WebSocket error: ${u.message}`));
                  }),
                  this._websocket.on("message", async (u) => {
                    try {
                      let c = u.toString(),
                        m = JSON.parse(c);
                      if (this._specialIds.has(Number(m.id)) || m.type === "welcome") return;
                      this.onmessage?.(await this._transformResponse(m));
                    } catch (c) {
                      this.onerror?.(
                        new Error(`Failed to parse WebSocket message: ${c instanceof Error ? c.message : String(c)}`),
                      );
                    }
                  }),
                  this._websocket.on("close", () => {
                    this._isClosed || ((this._isClosed = !0), this.onclose?.());
                  }));
              } catch (a) {
                s(new d9e(void 0, `Failed to create WebSocket: ${a}`));
              }
            })
          );
        }
        async finishAuth(e) {
          if (!this._authProvider) throw new Error(I.t("websocketClient.errors.noAuthProvider"));
          try {
            let r = await this._authProvider.clientInformation();
            if (r) {
              let n = this._authProvider.redirectUrl;
              if (!n) throw new Error("Redirect URL is required for authorization");
              let o = typeof n == "string" ? n : n.toString(),
                s = await c2n(this._url, {
                  clientInformation: r,
                  authorizationCode: e,
                  codeVerifier: await this._authProvider.codeVerifier(),
                  redirectUri: o,
                  addClientAuthentication: this._authProvider.addClientAuthentication,
                });
              await this._authProvider.saveTokens(s);
            } else throw new Error(I.t("websocketClient.errors.clientInfoNotAvailable"));
          } catch (r) {
            throw new Error(`Failed to exchange authorization code for access token: ${r}`);
          }
        }
        async close() {
          ((this._isClosed = !0),
            this._websocket && this._websocket.readyState === cG.default.OPEN
              ? this._websocket.close()
              : this.onclose?.());
        }
        async send(e) {
          if (this._isClosed) throw new Error(I.t("websocketClient.errors.transportClosed"));
          if (!this._websocket) throw new Error(I.t("websocketClient.errors.transportNotStarted"));
          if (this._websocket.readyState !== cG.default.OPEN)
            throw new Error(I.t("websocketClient.errors.websocketNotOpen"));
          try {
            if (e.method === "notifications/initialized") return;
            let r = await this._transformRequest(e),
              n = JSON.stringify(r);
            this._websocket.send(n);
          } catch (r) {
            throw new d9e(void 0, `Failed to send message: ${r instanceof Error ? r.message : String(r)}`);
          }
        }
        async _transformRequest(e) {
          if (e.method === "initialize")
            return {
              type: m9e.CLI_CONNECT,
              id: e.id,
              timestamp: Date.now(),
              payload: {
                clientInfo: { version: "0.5.19", platform: process.platform, workingDirectory: process.cwd() },
              },
            };
          if (e.method === "tools/call" && e.params?.name === "openDiff") {
            let { arguments: r } = e.params || {},
              { filePath: n, newContent: o } = r || {};
            return {
              type: m9e.SHOW_DIFF,
              id: e.id,
              timestamp: Date.now(),
              payload: { filePath: n, originalText: await nAs(n, "utf8"), modifiedText: o },
            };
          }
          return e;
        }
        async _transformResponse(e) {
          if (e.type === "connection_ack")
            return {
              jsonrpc: "2.0",
              id: e.id,
              result: {
                protocolVersion: "2024-11-05",
                capabilities: { logging: {}, prompts: {}, resources: {}, tools: {} },
                serverInfo: { name: "JetBrains Plugin Server", title: "JetBrains Plugin Server", version: "1.0.0" },
              },
            };
          if (e.type === "selection_changed") {
            let r = await this._getSelectedText();
            return {
              jsonrpc: "2.0",
              method: "ide/contextUpdate",
              params: {
                workspaceState: {
                  openFiles: [{ path: e.payload.fileName, timestamp: Date.now(), isActive: !0, selectedText: r }],
                },
              },
            };
          }
          return e.type === "active_file_changed"
            ? {
                jsonrpc: "2.0",
                method: "ide/contextUpdate",
                params: {
                  workspaceState: { openFiles: [{ path: e.payload.fileName, timestamp: Date.now(), isActive: !0 }] },
                },
              }
            : e;
        }
        async _getSelectedText() {
          if (!this._websocket) return "";
          let e = performance.now();
          return (
            this._specialIds.add(e),
            this._websocket.send(JSON.stringify({ type: m9e.GET_SELECTED_TEXT, id: e, timestamp: Date.now() })),
            new Promise((r, n) => {
              this._websocket.once("message", (o) => {
                try {
                  let s = JSON.parse(o.toString());
                  Number(s.id) === e &&
                    (this._specialIds.delete(e), s.payload.success ? r(s.payload.data.text) : n(s.payload.error));
                } catch {
                  r("");
                }
              });
            })
          );
        }
        setProtocolVersion(e) {
          this._protocolVersion = e;
        }
      }));
  });