/**
 * @module f9e
 * @category app/tools
 * @label iflow-tools
 * @position 871 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (f9e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var f9e = T((Sjt) => {
  "use strict";
  Sjt.quote = f2n();
  Sjt.parse = _2n();
});
var E2n,
  JYe,
  v2n = j(() => {
    "use strict";
    E2n = Se(pOe(), 1);
    bi();
    JYe = class {
      config;
      auth;
      redirectUrl = "";
      clientMetadata = {
        client_name: "iFlow CLI (Google ADC)",
        redirect_uris: [],
        grant_types: [],
        response_types: [],
        token_endpoint_auth_method: "none",
      };
      _clientInformation;
      constructor(e) {
        this.config = e;
        let r = this.config?.oauth?.scopes;
        if (!r || r.length === 0) throw new Error(I.t("mcp.auth.scopesRequired"));
        this.auth = new E2n.GoogleAuth({ scopes: r });
      }
      clientInformation() {
        return this._clientInformation;
      }
      saveClientInformation(e) {
        this._clientInformation = e;
      }
      async tokens() {
        let r = await (await this.auth.getClient()).getAccessToken();
        if (!r.token) {
          console.error(I.t("mcp.auth.failedToGetAccessToken"));
          return;
        }
        return { access_token: r.token, token_type: "Bearer" };
      }
      saveTokens(e) {}
      redirectToAuthorization(e) {}
      saveCodeVerifier(e) {}
      codeVerifier() {
        return "";
      }
    };
  });
import { execFile as dAs } from "node:child_process";
import { promisify as fAs } from "node:util";
import { platform as pAs } from "node:os";
import { URL as hAs } from "node:url";
function gAs(t) {
  let e;
  try {
    e = new hAs(t);
  } catch {
    throw new Error(`Invalid URL: ${t}`);
  }
  if (e.protocol !== "http:" && e.protocol !== "https:")
    throw new Error(`Unsafe protocol: ${e.protocol}. Only HTTP and HTTPS are allowed.`);
  if (/[\r\n\x00-\x1f]/.test(t)) throw new Error("URL contains invalid characters");
}
async function S2n(t) {
  gAs(t);
  let e = pAs(),
    r,
    n;
  switch (e) {
    case "darwin":
      ((r = "open"), (n = [t]));
      break;
    case "win32":
      ((r = "powershell.exe"),
        (n = [
          "-NoProfile",
          "-NonInteractive",
          "-WindowStyle",
          "Hidden",
          "-Command",
          `Start-Process '${t.replace(/'/g, "''")}'`,
        ]));
      break;
    case "linux":
    case "freebsd":
    case "openbsd":
      ((r = "xdg-open"), (n = [t]));
      break;
    default:
      throw new Error(`Unsupported platform: ${e}`);
  }
  let o = { env: { ...process.env, SHELL: void 0 }, detached: !0, stdio: "ignore" };
  try {
    await C2n(r, n, o);
  } catch (s) {
    if ((e === "linux" || e === "freebsd" || e === "openbsd") && r === "xdg-open") {
      let a = ["gnome-open", "kde-open", "firefox", "chromium", "google-chrome"];
      for (let u of a)
        try {
          await C2n(u, [t], o);
          return;
        } catch {
          continue;
        }
    }
    throw new Error(`Failed to open browser: ${s instanceof Error ? s.message : "Unknown error"}`);
  }
}
var C2n,
  w2n = j(() => {
    "use strict";
    C2n = fAs(dAs);
  });
function Go(t) {
  return t instanceof Error && "code" in t;
}
function mr(t) {
  if (t instanceof Error) return t.message;
  try {
    return String(t);
  } catch {
    return "Failed to get error details";
  }
}
function wjt(t) {
  if (t && typeof t == "object" && "response" in t) {
    let r = bAs(t);
    if (r.error && r.error.message && r.error.code)
      switch (r.error.code) {
        case 400:
          return new ZYe(r.error.message);
        case 401:
          return new kM(r.error.message);
        case 403:
          return new XYe(r.error.message);
        default:
      }
  }
  return t;
}
function bAs(t) {
  return typeof t.response?.data == "string" ? JSON.parse(t.response?.data) : t.response?.data;
}
var XYe,
  kM,
  ZYe,
  E0 = j(() => {
    "use strict";
    ((XYe = class extends Error {}), (kM = class extends Error {}), (ZYe = class extends Error {}));
  });
import { promises as Ase } from "node:fs";
import * as eKe from "node:path";
var J1,
  tKe = j(() => {
    "use strict";
    E0();
    bi();
    Pa();
    J1 = class {
      static TOKEN_FILE = "mcp-oauth-tokens.json";
      static getTokenFilePath() {
        return eKe.join(Tn(), this.TOKEN_FILE);
      }
      static async ensureConfigDir() {
        let e = eKe.dirname(this.getTokenFilePath());
        await Ase.mkdir(e, { recursive: !0 });
      }
      static async loadTokens() {
        let e = new Map();
        try {
          let r = this.getTokenFilePath(),
            n = await Ase.readFile(r, "utf-8"),
            o = JSON.parse(n);
          for (let s of o) e.set(s.serverName, s);
        } catch (r) {
          r.code !== "ENOENT" && console.error(I.t("mcp.tokenStorage.errors.failedToLoadTokens", { error: mr(r) }));
        }
        return e;
      }
      static async saveToken(e, r, n, o, s) {
        await this.ensureConfigDir();
        let a = await this.loadTokens(),
          u = { serverName: e, token: r, clientId: n, tokenUrl: o, mcpServerUrl: s, updatedAt: Date.now() };
        a.set(e, u);
        let c = Array.from(a.values()),
          m = this.getTokenFilePath();
        try {
          await Ase.writeFile(m, JSON.stringify(c, null, 2), { mode: 384 });
        } catch (d) {
          throw (console.error(I.t("mcp.tokenStorage.errors.failedToSaveToken", { error: mr(d) })), d);
        }
      }
      static async getToken(e) {
        return (await this.loadTokens()).get(e) || null;
      }
      static async removeToken(e) {
        let r = await this.loadTokens();
        if (r.delete(e)) {
          let n = Array.from(r.values()),
            o = this.getTokenFilePath();
          try {
            n.length === 0 ? await Ase.unlink(o) : await Ase.writeFile(o, JSON.stringify(n, null, 2), { mode: 384 });
          } catch (s) {
            console.error(I.t("mcp.tokenStorage.errors.failedToRemoveToken", { error: mr(s) }));
          }
        }
      }
      static isTokenExpired(e) {
        if (!e.expiresAt) return !1;
        let r = 300 * 1e3;
        return Date.now() + r >= e.expiresAt;
      }
      static async clearAllTokens() {
        try {
          let e = this.getTokenFilePath();
          await Ase.unlink(e);
        } catch (e) {
          e.code !== "ENOENT" && console.error(I.t("mcp.tokenStorage.errors.failedToClearTokens", { error: mr(e) }));
        }
      }
    };
  });
var qh,
  rKe = j(() => {
    "use strict";
    E0();
    bi();
    qh = class {
      static buildWellKnownUrls(e) {
        let r = new URL(e),
          n = `${r.protocol}//${r.host}`;
        return {
          protectedResource: new URL("/.well-known/oauth-protected-resource", n).toString(),
          authorizationServer: new URL("/.well-known/oauth-authorization-server", n).toString(),
        };
      }
      static async fetchProtectedResourceMetadata(e) {
        try {
          let r = await fetch(e);
          return r.ok ? await r.json() : null;
        } catch (r) {
          return (console.debug(`Failed to fetch protected resource metadata from ${e}: ${mr(r)}`), null);
        }
      }
      static async fetchAuthorizationServerMetadata(e) {
        try {
          let r = await fetch(e);
          return r.ok ? await r.json() : null;
        } catch (r) {
          return (console.debug(`Failed to fetch authorization server metadata from ${e}: ${mr(r)}`), null);
        }
      }
      static metadataToOAuthConfig(e) {
        return {
          authorizationUrl: e.authorization_endpoint,
          tokenUrl: e.token_endpoint,
          scopes: e.scopes_supported || [],
        };
      }
      static async discoverOAuthConfig(e) {
        try {
          let r = this.buildWellKnownUrls(e),
            n = await this.fetchProtectedResourceMetadata(r.protectedResource);
          if (n?.authorization_servers?.length) {
            let s = n.authorization_servers[0],
              a = new URL("/.well-known/oauth-authorization-server", s).toString(),
              u = await this.fetchAuthorizationServerMetadata(a);
            if (u) {
              let c = this.metadataToOAuthConfig(u);
              return (
                u.registration_endpoint &&
                  console.log(I.t("mcp.oauth.discovery.dynamicRegistrationSupported"), u.registration_endpoint),
                c
              );
            }
          }
          console.debug(`Trying OAuth discovery fallback at ${r.authorizationServer}`);
          let o = await this.fetchAuthorizationServerMetadata(r.authorizationServer);
          if (o) {
            let s = this.metadataToOAuthConfig(o);
            return (
              o.registration_endpoint &&
                console.log(I.t("mcp.oauth.discovery.dynamicRegistrationSupported"), o.registration_endpoint),
              s
            );
          }
          return null;
        } catch (r) {
          return (console.debug(`Failed to discover OAuth configuration: ${mr(r)}`), null);
        }
      }
      static parseWWWAuthenticateHeader(e) {
        let r = e.match(/resource_metadata="([^"]+)"/);
        return r ? r[1] : null;
      }
      static async discoverOAuthFromWWWAuthenticate(e) {
        let r = this.parseWWWAuthenticateHeader(e);
        if (!r) return null;
        console.log(I.t("mcp.oauth.discovery.foundResourceMetadataUri", { uri: r }));
        let n = await this.fetchProtectedResourceMetadata(r);
        if (!n?.authorization_servers?.length) return null;
        let o = n.authorization_servers[0],
          s = new URL("/.well-known/oauth-authorization-server", o).toString(),
          a = await this.fetchAuthorizationServerMetadata(s);
        return a
          ? (console.log(I.t("mcp.oauth.discovery.configDiscoveredFromWwwAuth")), this.metadataToOAuthConfig(a))
          : null;
      }
      static extractBaseUrl(e) {
        let r = new URL(e);
        return `${r.protocol}//${r.host}`;
      }
      static isSSEEndpoint(e) {
        return e.includes("/sse") || !e.includes("/mcp");
      }
      static buildResourceParameter(e) {
        return e;
      }
    };
  });
import * as x2n from "node:http";
import * as p9e from "node:crypto";
import { URL as nKe } from "node:url";
var T2,
  xjt = j(() => {
    "use strict";
    w2n();
    tKe();
    E0();
    rKe();
    bi();
    T2 = class {
      static REDIRECT_PATH = "/oauth/callback";
      static HTTP_OK = 200;
      static HTTP_REDIRECT = 302;
      static async registerClient(e, r, n) {
        let s = {
            client_name: "iFlow CLI MCP Client",
            redirect_uris: [r.redirectUri || `http://localhost:${n}${this.REDIRECT_PATH}`],
            grant_types: ["authorization_code", "refresh_token"],
            response_types: ["code"],
            token_endpoint_auth_method: "none",
            code_challenge_method: ["S256"],
            scope: r.scopes?.join(" ") || "",
          },
          a = await fetch(e, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(s),
          });
        if (!a.ok) {
          let u = await a.text();
          throw new Error(
            I.t("mcp.auth.clientRegistrationFailed", { status: a.status, statusText: a.statusText, error: u }),
          );
        }
        return await a.json();
      }
      static async discoverOAuthFromMCPServer(e) {
        let r = qh.extractBaseUrl(e);
        return qh.discoverOAuthConfig(r);
      }
      static generatePKCEParams() {
        let e = p9e.randomBytes(32).toString("base64url"),
          r = p9e.createHash("sha256").update(e).digest("base64url"),
          n = p9e.randomBytes(16).toString("base64url");
        return { codeVerifier: e, codeChallenge: r, state: n };
      }
      static parseCallbackUrl(e, r) {
        try {
          let n = new nKe(e),
            o = n.searchParams.get("code"),
            s = n.searchParams.get("state"),
            a = n.searchParams.get("error");
          if (a) {
            let u = n.searchParams.get("error_description");
            throw new Error(I.t("mcp.auth.oauthError", { error: `${a}${u ? `: ${u}` : ""}` }));
          }
          if (!o || !s) throw new Error(I.t("mcp.auth.missingCodeOrState"));
          if (s !== r) throw new Error(I.t("mcp.auth.stateValidationFailed"));
          return { code: o, state: s };
        } catch (n) {
          throw n instanceof Error ? n : new Error(I.t("mcp.auth.parseCallbackUrlFailed", { error: String(n) }));
        }
      }
      static startCallbackServer(e, r) {
        let n,
          o = new Promise((u) => {
            n = u;
          }),
          s;
        return {
          promise: new Promise((u, c) => {
            let m = !1,
              d = null;
            (r &&
              (d = setInterval(async () => {
                try {
                  (await r()) &&
                    !m &&
                    ((m = !0),
                    console.log("[OAuth] Authentication cancelled by user, closing server"),
                    d && clearInterval(d),
                    s?.close(),
                    c(new Error(I.t("mcp.auth.authenticationCancelled"))));
                } catch (f) {
                  console.log("[OAuth] Error in cancel check:", f);
                }
              }, 500)),
              (s = x2n.createServer(async (f, p) => {
                try {
                  if ((console.log(`[OAuth] Callback server received request: ${f.method} ${f.url}`), m)) {
                    console.log("[OAuth] Request ignored - authentication already cancelled");
                    return;
                  }
                  let h = new nKe(f.url, "http://localhost");
                  if (h.pathname !== this.REDIRECT_PATH) {
                    (console.log(`[OAuth] Invalid path: ${h.pathname}, expected: ${this.REDIRECT_PATH}`),
                      p.writeHead(404),
                      p.end(I.t("mcp.ui.notFound")));
                    return;
                  }
                  let g = h.searchParams.get("code"),
                    b = h.searchParams.get("state"),
                    A = h.searchParams.get("error");
                  if (
                    (console.log(
                      `[OAuth] Callback parameters - code: ${g ? "present" : "missing"}, state: ${b ? "present" : "missing"}, error: ${A || "none"}`,
                    ),
                    A)
                  ) {
                    (p.writeHead(this.HTTP_OK, { "Content-Type": "text/html; charset=utf-8" }),
                      p.end(`
              <!DOCTYPE html>
              <html>
                <head>
                  <meta charset="UTF-8">
                  <title>${I.t("mcp.ui.authenticationFailed")}</title>
                </head>
                <body>
                  <h1>${I.t("mcp.ui.authenticationFailed")}</h1>
                  <p>Error: ${A.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
                  <p>${(h.searchParams.get("error_description") || "").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
                  <p>${I.t("mcp.ui.closeWindow")}</p>
                </body>
              </html>
            `),
                      console.log("[OAuth] Error response sent, closing server"),
                      s.close(),
                      c(new Error(I.t("mcp.auth.oauthError", { error: A }))));
                    return;
                  }
                  if (!g || !b) {
                    (p.writeHead(400), p.end(I.t("mcp.ui.missingCodeOrState")));
                    return;
                  }
                  if (b !== e) {
                    (p.writeHead(400),
                      p.end(I.t("mcp.ui.invalidStateParameter")),
                      s.close(),
                      c(new Error(I.t("mcp.auth.stateValidationFailed"))));
                    return;
                  }
                  (p.writeHead(this.HTTP_OK, { "Content-Type": "text/html; charset=utf-8" }),
                    p.end(`
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="UTF-8">
                <title>${I.t("mcp.ui.authenticationSuccessful")}</title>
              </head>
              <body>
                <h1>${I.t("mcp.ui.authenticationSuccessful")}</h1>
                <p>${I.t("mcp.ui.closeWindow")}</p>
                <script>window.close();</script>
              </body>
            </html>
          `),
                    console.log("[OAuth] Authorization code received successfully, closing server"),
                    d && clearInterval(d),
                    s.close(),
                    u({ code: g, state: b }));
                } catch (h) {
                  (d && clearInterval(d), s.close(), c(h));
                }
              })),
              s.on("error", (f) => {
                (d && clearInterval(d), c(f));
              }),
              s.listen(0, () => {
                let f = s.address(),
                  p = typeof f == "object" && f !== null ? f.port : 0;
                (n(p),
                  console.log(`[OAuth] Callback server started on port ${p} at ${new Date().toISOString()}`),
                  console.log(I.t("mcp.ui.callbackServerListening", { port: p })));
              }),
              setTimeout(() => {
                (d && clearInterval(d),
                  m ||
                    (console.log("[OAuth] Callback server timeout after 5 minutes, closing server"),
                    s.close(),
                    c(new Error(I.t("mcp.auth.oauthCallbackTimeout")))));
              }, 300 * 1e3));
          }),
          port: o,
          close: () => {
            s.close();
          },
        };
      }
      static buildAuthorizationUrl(e, r, n, o) {
        let s = e.redirectUri || `http://localhost:${n}${this.REDIRECT_PATH}`,
          a = new URLSearchParams({
            client_id: e.clientId,
            response_type: "code",
            redirect_uri: s,
            state: r.state,
            code_challenge: r.codeChallenge,
            code_challenge_method: "S256",
          });
        e.scopes && e.scopes.length > 0 && a.append("scope", e.scopes.join(" "));
        let u = o || e.authorizationUrl;
        try {
          a.append("resource", qh.buildResourceParameter(u));
        } catch (c) {
          throw new Error(I.t("mcp.auth.invalidResourceUrl", { url: u, error: mr(c) }));
        }
        return `${e.authorizationUrl}?${a.toString()}`;
      }
      static async exchangeCodeForToken(e, r, n, o, s) {
        let a = e.redirectUri || `http://localhost:${o}${this.REDIRECT_PATH}`,
          u = new URLSearchParams({
            grant_type: "authorization_code",
            code: r,
            redirect_uri: a,
            code_verifier: n,
            client_id: e.clientId,
          });
        e.clientSecret && u.append("client_secret", e.clientSecret);
        let c = s || e.tokenUrl;
        try {
          u.append("resource", qh.buildResourceParameter(c));
        } catch (d) {
          throw new Error(I.t("mcp.auth.invalidResourceUrl", { url: c, error: mr(d) }));
        }
        let m = await fetch(e.tokenUrl, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: u.toString(),
        });
        if (!m.ok) {
          let d = await m.text();
          throw new Error(I.t("mcp.auth.tokenExchangeFailed", { status: m.status, error: d }));
        }
        return await m.json();
      }
      static async refreshAccessToken(e, r, n, o) {
        let s = new URLSearchParams({ grant_type: "refresh_token", refresh_token: r, client_id: e.clientId });
        (e.clientSecret && s.append("client_secret", e.clientSecret),
          e.scopes && e.scopes.length > 0 && s.append("scope", e.scopes.join(" ")));
        let a = o || n;
        try {
          s.append("resource", qh.buildResourceParameter(a));
        } catch (c) {
          throw new Error(I.t("mcp.auth.invalidResourceUrl", { url: a, error: mr(c) }));
        }
        let u = await fetch(n, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: s.toString(),
        });
        if (!u.ok) {
          let c = await u.text();
          throw new Error(I.t("mcp.auth.tokenRefreshFailed", { status: u.status, error: c }));
        }
        return await u.json();
      }
      static async authenticate(e, r, n, o) {
        if (!r.authorizationUrl && n) {
          if ((console.log(I.t("mcp.ui.noAuthUrlAttemptingDiscovery")), qh.isSSEEndpoint(n)))
            try {
              let b = await fetch(n, { method: "HEAD", headers: { Accept: "text/event-stream" } });
              if (b.status === 401 || b.status === 307) {
                let A = b.headers.get("www-authenticate");
                if (A) {
                  let y = await qh.discoverOAuthFromWWWAuthenticate(A);
                  y && (r = { ...r, ...y, scopes: y.scopes || r.scopes || [] });
                }
              }
            } catch (b) {
              console.debug(`Failed to check SSE endpoint for authentication requirements: ${mr(b)}`);
            }
          if (!r.authorizationUrl) {
            let b = await this.discoverOAuthFromMCPServer(n);
            if (b) ((r = { ...r, ...b }), console.log(I.t("mcp.ui.oauthConfigDiscoveredSuccess")));
            else throw new Error(I.t("mcp.auth.oauthDiscoveryFailed"));
          }
        }
        let s = this.generatePKCEParams(),
          a = this.startCallbackServer(s.state, o?.shouldCancel),
          u = await a.port;
        if (!r.clientId) {
          if (!r.authorizationUrl) throw (a.close(), new Error(I.t("mcp.auth.cannotPerformRegistration")));
          let b = new nKe(r.authorizationUrl),
            A = `${b.protocol}//${b.host}`;
          console.log(I.t("mcp.ui.noClientIdAttemptingRegistration"));
          let y = new nKe("/.well-known/oauth-authorization-server", A).toString(),
            E = await qh.fetchAuthorizationServerMetadata(y);
          if (!E) throw (a.close(), new Error(I.t("mcp.auth.fetchAuthServerMetadataFailed")));
          if (E.registration_endpoint) {
            let v = await this.registerClient(E.registration_endpoint, r, u);
            ((r.clientId = v.client_id),
              v.client_secret && (r.clientSecret = v.client_secret),
              console.log(I.t("mcp.ui.dynamicClientRegistrationSuccess")));
          } else throw (a.close(), new Error(I.t("mcp.auth.noClientIdAndNoRegistration")));
        }
        if (!r.clientId || !r.authorizationUrl || !r.tokenUrl)
          throw (a.close(), new Error(I.t("mcp.auth.missingOAuthConfig")));
        let c = this.buildAuthorizationUrl(r, s, u, n);
        (console.log(`[OAuth] Built authorization URL with callback port ${u}`),
          console.log(`[OAuth] Expected callback URL: http://localhost:${u}${this.REDIRECT_PATH}`),
          console.log(I.t("mcp.ui.openingBrowserForAuth")),
          console.log(I.t("mcp.ui.ifBrowserNotOpen")),
          console.log(""));
        let m = process.stdout.columns || 80,
          d = Math.min(m - 2, 80),
          f = "\u2501".repeat(d);
        if (
          (console.log(f),
          console.log(I.t("mcp.ui.copyEntireUrl")),
          console.log(f),
          console.log(c),
          console.log(f),
          console.log(""),
          console.log(I.t("mcp.ui.tipTripleClick")),
          console.log(I.t("mcp.ui.warningCompleteUrl")),
          console.log(""),
          o?.onDisplayUrl)
        )
          try {
            await o.onDisplayUrl(c);
          } catch (b) {
            console.warn("Failed to call onDisplayUrl callback:", mr(b));
          }
        try {
          await S2n(c);
        } catch (b) {
          console.warn(I.t("mcp.ui.failedToOpenBrowser"), mr(b));
        }
        let p;
        try {
          p = (await a.promise).code;
        } catch (b) {
          if (mr(b).includes("timeout") && o?.onPromptForCallback) {
            (console.log(""),
              console.log(I.t("mcp.ui.callbackTimeoutSwitchManual")),
              console.log(I.t("mcp.ui.manualCallbackInstructions")),
              console.log(""));
            let y = await o.onPromptForCallback();
            if (!y) throw (a.close(), new Error(I.t("mcp.auth.authenticationCancelled")));
            ((p = this.parseCallbackUrl(y, s.state).code), a.close());
          } else throw (a.close(), b);
        }
        console.log(I.t("mcp.ui.authorizationCodeReceived"));
        let h = await this.exchangeCodeForToken(r, p, s.codeVerifier, u, n),
          g = { accessToken: h.access_token, tokenType: h.token_type, refreshToken: h.refresh_token, scope: h.scope };
        h.expires_in && (g.expiresAt = Date.now() + h.expires_in * 1e3);
        try {
          (await J1.saveToken(e, g, r.clientId, r.tokenUrl, n),
            console.log(I.t("mcp.ui.authenticationSuccessfulTokenSaved")));
          let b = await J1.getToken(e);
          b
            ? console.log(I.t("mcp.ui.tokenVerificationSuccessful", { token: b.token.accessToken.substring(0, 20) }))
            : console.error(I.t("mcp.ui.tokenVerificationFailed"));
        } catch (b) {
          throw (console.error(I.t("mcp.ui.failedToSaveToken", { error: mr(b) })), b);
        }
        return g;
      }
      static async getValidToken(e, r) {
        console.debug(`Getting valid token for server: ${e}`);
        let n = await J1.getToken(e);
        if (!n) return (console.debug(`No credentials found for server: ${e}`), null);
        let { token: o } = n;
        if ((console.debug(`Found token for server: ${e}, expired: ${J1.isTokenExpired(o)}`), !J1.isTokenExpired(o)))
          return (console.debug(`Returning valid token for server: ${e}`), o.accessToken);
        if (o.refreshToken && r.clientId && n.tokenUrl)
          try {
            console.log(I.t("mcp.ui.refreshingExpiredToken", { serverName: e }));
            let s = await this.refreshAccessToken(r, o.refreshToken, n.tokenUrl, n.mcpServerUrl),
              a = {
                accessToken: s.access_token,
                tokenType: s.token_type,
                refreshToken: s.refresh_token || o.refreshToken,
                scope: s.scope || o.scope,
              };
            return (
              s.expires_in && (a.expiresAt = Date.now() + s.expires_in * 1e3),
              await J1.saveToken(e, a, r.clientId, n.tokenUrl, n.mcpServerUrl),
              a.accessToken
            );
          } catch (s) {
            (console.error(I.t("mcp.ui.failedToRefreshToken", { error: mr(s) })), await J1.removeToken(e));
          }
        return null;
      }
    };
  });
import { basename as I2n } from "node:path";
import { pathToFileURL as R2n } from "node:url";
function b9e(t) {
  Ijt.add(t);
}
function A9e(t) {
  Ijt.delete(t);
}
function vk(t, e) {
  Djt.set(t, e);
  for (let r of Ijt) r(t, e);
}
function Ese(t) {
  return Djt.get(t) || Ss.DISCONNECTED;
}
function AAs() {
  return new Map(Djt);
}
function Rjt() {
  return Tjt;
}
function yAs(t) {
  let e = [
    /www-authenticate:\s*([^\n\r]+)/i,
    /WWW-Authenticate:\s*([^\n\r]+)/i,
    /"www-authenticate":\s*"([^"]+)"/i,
    /'www-authenticate':\s*'([^']+)'/i,
  ];
  for (let r of e) {
    let n = t.match(r);
    if (n) return n[1].trim();
  }
  return null;
}
async function _As(t, e, r) {
  try {
    console.log(`\u{1F510} '${t}' requires OAuth authentication`);
    let n,
      o = qh.parseWWWAuthenticateHeader(r);
    if (o) n = await qh.discoverOAuthConfig(o);
    else if (g9e(e)) {
      let u = new URL(e.httpUrl || e.url),
        c = `${u.protocol}//${u.host}`;
      n = await qh.discoverOAuthConfig(c);
    }
    if (!n)
      return (
        console.error(`\u274C Could not configure OAuth for '${t}' - please authenticate manually with /mcp auth ${t}`),
        !1
      );
    let s = { enabled: !0, authorizationUrl: n.authorizationUrl, tokenUrl: n.tokenUrl, scopes: n.scopes || [] },
      a = e.httpUrl || e.url;
    return (
      console.log(`Starting OAuth authentication for server '${t}'...`),
      await T2.authenticate(t, s, a),
      console.log(`OAuth authentication successful for server '${t}'`),
      !0
    );
  } catch (n) {
    return (console.error(`Failed to handle automatic OAuth for server '${t}': ${mr(n)}`), !1);
  }
}
async function T2n(t, e, r) {
  try {
    if (e.httpUrl) {
      let n = { requestInit: { headers: { ...e.headers, Authorization: `Bearer ${r}` } } };
      return new RM(new URL(e.httpUrl), n);
    } else if (e.url) {
      let n = new URL(e.url);
      if (n.protocol === "ws:" || n.protocol === "wss:") {
        let o = { websocketOptions: { headers: { ...e.headers, Authorization: `Bearer ${r}` } } };
        return new mV(new URL(e.url), o);
      } else
        return new bse(new URL(e.url), { requestInit: { headers: { ...e.headers, Authorization: `Bearer ${r}` } } });
    }
    return null;
  } catch (n) {
    return (console.error(`Failed to create OAuth transport for server '${t}': ${mr(n)}`), null);
  }
}
async function EAs(t, e, r, n, o, s) {
  Tjt = bE.IN_PROGRESS;
  try {
    t = y9e(t, e);
    let a = Object.entries(t).map(([u, c]) => k2n(u, c, r, n, o, s));
    await Promise.all(a);
  } finally {
    Tjt = bE.COMPLETED;
  }
}
function y9e(t, e) {
  if (e) {
    let r = e,
      n = (0, D2n.parse)(r, process.env);
    if (n.some((o) => typeof o != "string")) throw new Error(I.t("mcpClient.errors.failedToParseCommand", { cmd: r }));
    t.mcp = { command: n[0], args: n.slice(1) };
  }
  return t;
}
async function k2n(t, e, r, n, o, s) {
  vk(t, Ss.CONNECTING);
  let a;
  try {
    ((a = await N2n(t, e, o, s)),
      (a.onerror = (m) => {
        (console.error(`MCP ERROR (${t}):`, m.toString()), vk(t, Ss.DISCONNECTED));
      }));
    let u = await Ojt(t, a, n),
      c = await kjt(t, e, a);
    if (u.length === 0 && c.length === 0) throw new Error(I.t("mcpClient.errors.noPromptsOrTools"));
    vk(t, Ss.CONNECTED);
    for (let m of c) r.registerTool(m);
  } catch (u) {
    (a && a.close(), console.error(`Error connecting to MCP server '${t}': ${mr(u)}`), vk(t, Ss.DISCONNECTED));
  }
}
function h9e(t) {
  if (typeof t != "object" || t === null) return !0;
  let e = t;
  if (Object.keys(e).length === 0 || "$ref" in e) return !0;
  if (!e.type) {
    let r = !1,
      n = ["anyOf", "allOf", "oneOf"];
    for (let o of n) {
      let s = e[o];
      if (Array.isArray(s)) {
        r = !0;
        for (let a of s) if (!h9e(a)) return !1;
      }
    }
    if (!r) return !1;
  }
  if (e.type === "object" && e.properties && typeof e.properties == "object" && e.properties !== null)
    for (let r of Object.values(e.properties)) {
      if (typeof r == "object" && r !== null) {
        let n = r;
        if ("default" in n && !("type" in n)) continue;
      }
      if (!h9e(r)) return !1;
    }
  return !(e.type === "array" && e.items && !h9e(e.items));
}
async function kjt(t, e, r) {
  try {
    let n = e.timeout ?? yse,
      s = jPr(r, { timeout: n }),
      a = await s.tool();
    if (!Array.isArray(a.functionDeclarations)) return [];
    let u = [];
    for (let c of a.functionDeclarations)
      try {
        if (!P2n(c, t, e)) continue;
        if (!h9e(c.parametersJsonSchema)) {
          console.warn(
            `Skipping tool '${c.name}' from MCP server '${t}' because it has missing types in its parameter schema. Please file an issue with the owner of the MCP server.`,
          );
          continue;
        }
        u.push(
          new bg(
            s,
            t,
            c.name,
            c.description ?? "",
            c.parametersJsonSchema ?? { type: "object", properties: {} },
            n,
            e.trust,
          ),
        );
      } catch (m) {
        console.error(`Error discovering tool: '${c.name}' from MCP server '${t}': ${m.message}`);
      }
    return u;
  } catch (n) {
    return (
      n instanceof Error &&
        !n.message?.includes("Method not found") &&
        console.error(`Error discovering tools from ${t}: ${mr(n)}`),
      []
    );
  }
}
async function Ojt(t, e, r) {
  try {
    if (e.getServerCapabilities()?.prompts == null) return [];
    let n = await e.request({ method: "prompts/list", params: {} }, q5e);
    for (let o of n.prompts) r.registerPrompt({ ...o, serverName: t, invoke: (s) => O2n(t, e, o.name, s) });
    return n.prompts;
  } catch (n) {
    return (
      n instanceof Error &&
        !n.message?.includes("Method not found") &&
        console.error(`Error discovering prompts from ${t}: ${mr(n)}`),
      []
    );
  }
}
async function O2n(t, e, r, n) {
  try {
    return await e.request({ method: "prompts/get", params: { name: r, arguments: n } }, H5e);
  } catch (o) {
    throw (
      o instanceof Error &&
        !o.message?.includes("Method not found") &&
        console.error(`Error invoking prompt '${r}' from ${t} ${n}: ${mr(o)}`),
      o
    );
  }
}
function g9e(t) {
  return !!(t.url || t.httpUrl);
}
async function N2n(t, e, r, n) {
  let o = new S6({ name: "iflow-cli-mcp-client", version: "0.0.1" });
  (o.registerCapabilities({ roots: { listChanged: !0 } }),
    o.setRequestHandler(hze, async () => {
      let c = [];
      for (let m of n.getDirectories()) c.push({ uri: R2n(m).toString(), name: I2n(m) });
      return { roots: c };
    }));
  let s = n.onDirectoriesChanged(async () => {
      try {
        await o.notification({ method: "notifications/roots/list_changed" });
      } catch {
        (s?.(), (s = void 0));
      }
    }),
    a = o.onclose;
  o.onclose = () => {
    (a?.(), s?.(), (s = void 0));
  };
  let u = yse;
  if ("callTool" in o) {
    let c = o.callTool.bind(o);
    o.callTool = function (m, d, f) {
      return c(m, d, { ...f, timeout: u });
    };
  }
  if ("request" in o) {
    let c = o.request.bind(o);
    o.request = function (m, d, f) {
      return c(m, d, { ...f, timeout: u });
    };
  }
  try {
    let c = await _9e(t, e, r);
    try {
      return (await o.connect(c, { timeout: e.timeout ?? yse }), o);
    } catch (m) {
      throw (await c.close(), m);
    }
  } catch (c) {
    let m = String(c);
    if (m.includes("401") && g9e(e)) {
      if ((_se.set(t, !0), !(e.httpUrl || e.oauth?.enabled))) {
        let p = await J1.getToken(t);
        if (p) {
          let h = await T2.getValidToken(t, { clientId: p.clientId });
          console.log(
            h
              ? `Stored OAuth token for SSE server '${t}' was rejected. Please re-authenticate using: /mcp auth ${t}`
              : `401 error received for SSE server '${t}' without OAuth configuration. Please authenticate using: /mcp auth ${t}`,
          );
        }
        throw new Error(
          `401 error received for SSE server '${t}' without OAuth configuration. Please authenticate using: /mcp auth ${t}`,
        );
      }
      let f = yAs(m);
      if (!f && g9e(e)) {
        console.log("No www-authenticate header in error, trying to fetch it from server...");
        try {
          let p = e.httpUrl || e.url,
            h = await fetch(p, {
              method: "HEAD",
              headers: { Accept: e.httpUrl ? "application/json" : "text/event-stream" },
              signal: AbortSignal.timeout(5e3),
            });
          h.status === 401 &&
            ((f = h.headers.get("www-authenticate")),
            f && console.log(`Found www-authenticate header from server: ${f}`));
        } catch (p) {
          console.debug(`Failed to fetch www-authenticate header: ${mr(p)}`);
        }
      }
      if (f)
        if ((console.log(`Received 401 with www-authenticate header: ${f}`), await _As(t, e, f))) {
          console.log(`Retrying connection to '${t}' with OAuth token...`);
          let h = await J1.getToken(t);
          if (h) {
            let g = await T2.getValidToken(t, { clientId: h.clientId });
            if (g) {
              let b = await T2n(t, e, g);
              if (b)
                try {
                  return (await o.connect(b, { timeout: e.timeout ?? yse }), o);
                } catch (A) {
                  throw (console.error(`Failed to connect with OAuth token: ${mr(A)}`), A);
                }
              else
                throw (
                  console.error(`Failed to create OAuth transport for server '${t}'`),
                  new Error(`Failed to create OAuth transport for server '${t}'`)
                );
            } else
              throw (
                console.error(`Failed to get OAuth token for server '${t}'`),
                new Error(`Failed to get OAuth token for server '${t}'`)
              );
          } else
            throw (
              console.error(`Failed to get credentials for server '${t}' after successful OAuth authentication`),
              new Error(`Failed to get credentials for server '${t}' after successful OAuth authentication`)
            );
        } else
          throw (
            console.error(`Failed to handle automatic OAuth for server '${t}'`),
            new Error(`Failed to handle automatic OAuth for server '${t}'`)
          );
      else {
        if (!(e.httpUrl || e.oauth?.enabled)) {
          let h = await J1.getToken(t);
          if (h) {
            let g = await T2.getValidToken(t, { clientId: h.clientId });
            console.log(
              g
                ? `Stored OAuth token for SSE server '${t}' was rejected. Please re-authenticate using: /mcp auth ${t}`
                : `401 error received for SSE server '${t}' without OAuth configuration. Please authenticate using: /mcp auth ${t}`,
            );
          }
          throw new Error(
            `401 error received for SSE server '${t}' without OAuth configuration. Please authenticate using: /mcp auth ${t}`,
          );
        }
        if ((console.log(`\u{1F50D} Attempting OAuth discovery for '${t}'...`), g9e(e))) {
          let h = new URL(e.httpUrl || e.url),
            g = `${h.protocol}//${h.host}`;
          try {
            let b = await qh.discoverOAuthConfig(g);
            if (b) {
              console.log(`Discovered OAuth configuration from base URL for server '${t}'`);
              let A = {
                  enabled: !0,
                  authorizationUrl: b.authorizationUrl,
                  tokenUrl: b.tokenUrl,
                  scopes: b.scopes || [],
                },
                y = e.httpUrl || e.url;
              (console.log(`Starting OAuth authentication for server '${t}'...`), await T2.authenticate(t, A, y));
              let E = await J1.getToken(t);
              if (E) {
                let v = await T2.getValidToken(t, { clientId: E.clientId });
                if (v) {
                  let C = await T2n(t, e, v);
                  if (C)
                    try {
                      return (await o.connect(C, { timeout: e.timeout ?? yse }), o);
                    } catch (x) {
                      throw (console.error(`Failed to connect with OAuth token: ${mr(x)}`), x);
                    }
                  else
                    throw (
                      console.error(`Failed to create OAuth transport for server '${t}'`),
                      new Error(`Failed to create OAuth transport for server '${t}'`)
                    );
                } else
                  throw (
                    console.error(`Failed to get OAuth token for server '${t}'`),
                    new Error(`Failed to get OAuth token for server '${t}'`)
                  );
              } else
                throw (
                  console.error(`Failed to get stored credentials for server '${t}'`),
                  new Error(`Failed to get stored credentials for server '${t}'`)
                );
            } else
              throw (
                console.error(
                  `\u274C Could not configure OAuth for '${t}' - please authenticate manually with /mcp auth ${t}`,
                ),
                new Error(`OAuth configuration failed for '${t}'. Please authenticate manually with /mcp auth ${t}`)
              );
          } catch (b) {
            throw (
              console.error(
                `\u274C OAuth discovery failed for '${t}' - please authenticate manually with /mcp auth ${t}`,
              ),
              b
            );
          }
        } else
          throw (
            console.error(`\u274C '${t}' requires authentication but no OAuth configuration found`),
            new Error(`MCP server '${t}' requires authentication. Please configure OAuth or check server settings.`)
          );
      }
    } else {
      let d = c.message || String(c),
        f = d.includes("ENOTFOUND") || d.includes("ECONNREFUSED"),
        p;
      throw (
        f
          ? (p = I.t("mcpClient.errors.cannotConnect", { serverName: t }))
          : (p = I.t("mcpClient.errors.connectionFailed", { serverName: t, error: d })),
        process.env.SANDBOX && (p += ` (${I.t("mcpClient.errors.checkSandbox")})`),
        new Error(p)
      );
    }
  }
}
async function _9e(t, e, r) {
  if (e.authProviderType === OM.GOOGLE_CREDENTIALS) {
    let u = { authProvider: new JYe(e) };
    if (e.httpUrl) return new RM(new URL(e.httpUrl), u);
    if (e.url) return new bse(new URL(e.url), u);
    throw new Error(I.t("mcpClient.errors.noUrlConfigured"));
  }
  let n = null,
    o = e.oauth?.enabled;
  if (o && e.oauth) {
    if (((n = await T2.getValidToken(t, e.oauth)), !n))
      throw (
        console.error(
          `MCP server '${t}' requires OAuth authentication. Please authenticate using the /mcp auth command.`,
        ),
        new Error(`MCP server '${t}' requires OAuth authentication. Please authenticate using the /mcp auth command.`)
      );
  } else {
    let a = await J1.getToken(t);
    a &&
      ((n = await T2.getValidToken(t, { clientId: a.clientId })),
      n && ((o = !0), console.log(`Found stored OAuth token for server '${t}'`)));
  }
  let s = e.type;
  if (s === "http" || s === "streamable-http" || e.httpUrl) {
    let a = {},
      u = e.httpUrl || e.url;
    if (!u) throw new Error(I.t("mcpClient.errors.httpTransportRequiresUrl"));
    return (
      o && n
        ? (a.requestInit = { headers: { ...e.headers, Authorization: `Bearer ${n}` } })
        : e.headers && (a.requestInit = { headers: e.headers }),
      new RM(new URL(u), a)
    );
  }
  if (e.url) {
    let a = new URL(e.url);
    if (a.protocol === "ws:" || a.protocol === "wss:") {
      let u = {};
      if (o && n) u.websocketOptions = { headers: { ...e.headers, Authorization: `Bearer ${n}` } };
      else if (e.headers) return ((u.websocketOptions = { headers: e.headers }), new mV(new URL(e.url), u));
    }
  }
  if (s === "sse" || (!s && e.url && !e.httpUrl)) {
    let a = {};
    return (
      o && n
        ? (a.requestInit = { headers: { ...e.headers, Authorization: `Bearer ${n}` } })
        : e.headers && (a.requestInit = { headers: e.headers }),
      new bse(new URL(e.url), a)
    );
  }
  if (s === "stdio" || e.command) {
    if (!e.command) throw new Error(I.t("mcpClient.errors.stdioTransportRequiresCommand"));
    let a = new TM({
      command: e.command,
      args: e.args || [],
      env: { ...process.env, ...(e.env || {}) },
      cwd: e.cwd,
      stderr: "pipe",
    });
    return (
      r &&
        a.stderr.on("data", (u) => {
          let c = u.toString().trim();
          console.debug(`[DEBUG] [MCP STDERR (${t})]: `, c);
        }),
      a
    );
  }
  throw new Error(I.t("mcpClient.errors.invalidConfiguration"));
}
function P2n(t, e, r) {
  if (!t.name)
    return (console.warn(`Discovered a function declaration without a name from MCP server '${e}'. Skipping.`), !1);
  let { includeTools: n, excludeTools: o } = r;
  return o && o.includes(t.name) ? !1 : !n || n.some((s) => s === t.name || s.startsWith(`${t.name}(`));
}
var D2n,
  yse,
  Ss,
  bE,
  fV,
  Djt,
  Tjt,
  _se,
  Ijt,
  iKe = j(() => {
    "use strict";
    ase();
    Y$t();
    l2n();
    _jt();
    Ejt();
    uk();
    D2n = Se(f9e(), 1);
    Ag();
    v2n();
    E9e();
    Ba();
    xjt();
    rKe();
    tKe();
    E0();
    bi();
    Dp();
    yse = 600 * 1e3;
    (function (t) {
      ((t.DISCONNECTED = "disconnected"), (t.CONNECTING = "connecting"), (t.CONNECTED = "connected"));
    })(Ss || (Ss = {}));
    (function (t) {
      ((t.NOT_STARTED = "not_started"), (t.IN_PROGRESS = "in_progress"), (t.COMPLETED = "completed"));
    })(bE || (bE = {}));
    ((fV = class {
      serverName;
      serverConfig;
      toolRegistry;
      promptRegistry;
      workspaceContext;
      debugMode;
      config;
      client;
      transport;
      status = Ss.DISCONNECTED;
      isDisconnecting = !1;
      oauthUrlCallback;
      stderrDataHandler;
      constructor(e, r, n, o, s, a, u) {
        ((this.serverName = e),
          (this.serverConfig = r),
          (this.toolRegistry = n),
          (this.promptRegistry = o),
          (this.workspaceContext = s),
          (this.debugMode = a),
          (this.config = u),
          (this.client = new S6({ name: `iflow-cli-mcp-client-${this.serverName}`, version: "0.0.1" })));
      }
      setOAuthUrlCallback(e) {
        this.oauthUrlCallback = e;
      }
      async connect() {
        ((this.isDisconnecting = !1), this.updateStatus(Ss.CONNECTING));
        try {
          if (
            ((this.transport = await this.createTransport()), this.transport instanceof TM && this.transport.stderr)
          ) {
            let r = "";
            ((this.stderrDataHandler = (n) => {
              let o = n.toString();
              ((r += o), this.debugMode && console.debug(`[DEBUG] [MCP STDERR (${this.serverName})]: `, o.trim()));
              let s = r.match(/(?:Please (?:authorize this client by )?visit(?:ing)?:?\s*\n?\s*)(https?:\/\/[^\s]+)/i);
              if (s && s[1]) {
                let a = s[1];
                (console.log(`[MCP OAuth] Detected OAuth URL for ${this.serverName}: ${a}`),
                  this.oauthUrlCallback && this.oauthUrlCallback(a),
                  (r = ""));
              }
              r.length > 2048 && (r = r.slice(-2048));
            }),
              this.transport.stderr.on("data", this.stderrDataHandler));
          }
          ((this.client.onerror = (r) => {
            this.isDisconnecting ||
              (this.debugMode && console.error(`MCP ERROR (${this.serverName}):`, r.toString()),
              this.updateStatus(Ss.DISCONNECTED));
          }),
            this.client.registerCapabilities({ roots: {} }),
            this.client.setRequestHandler(hze, async () => {
              let r = [];
              for (let n of this.workspaceContext.getDirectories()) r.push({ uri: R2n(n).toString(), name: I2n(n) });
              return { roots: r };
            }),
            await this.client.connect(this.transport, { timeout: this.serverConfig.timeout }),
            this.updateStatus(Ss.CONNECTED));
          let e = this.getTransportType();
          Rkt(this.config, this.serverName, !0, void 0, e);
        } catch (e) {
          this.updateStatus(Ss.DISCONNECTED);
          let r = this.getTransportType(),
            n = this.getErrorType(e);
          throw (Rkt(this.config, this.serverName, !1, n, r), e);
        }
      }
      async discover() {
        if (this.status !== Ss.CONNECTED) throw new Error(I.t("mcpClient.errors.clientNotConnected"));
        let e = await this.discoverPrompts(),
          r = await this.discoverTools();
        if (e.length === 0 && r.length === 0) throw new Error(I.t("mcpClient.errors.noPromptsOrTools"));
        let n = this.config.getExcludeTools() || [];
        if (n.length > 0) for (let o of r) n.includes(o.name) || this.toolRegistry.registerTool(o);
        else for (let o of r) this.toolRegistry.registerTool(o);
      }
      async disconnect() {
        ((this.isDisconnecting = !0),
          this.transport instanceof TM &&
            this.transport.stderr &&
            this.stderrDataHandler &&
            (this.transport.stderr.off("data", this.stderrDataHandler), (this.stderrDataHandler = void 0)),
          this.transport && (await this.transport.close()),
          this.client.close(),
          this.updateStatus(Ss.DISCONNECTED));
      }
      getStatus() {
        return this.status;
      }
      updateStatus(e) {
        ((this.status = e), vk(this.serverName, e));
      }
      async createTransport() {
        return _9e(this.serverName, this.serverConfig, this.debugMode);
      }
      async discoverTools() {
        return kjt(this.serverName, this.serverConfig, this.client);
      }
      async discoverPrompts() {
        return Ojt(this.serverName, this.client, this.promptRegistry);
      }
      getTransportType() {
        if (this.serverConfig.type) return this.serverConfig.type;
        if (this.serverConfig.command) return "stdio";
        if (this.serverConfig.httpUrl) return "streamable-http";
        if (this.serverConfig.url) {
          let e = new URL(this.serverConfig.url);
          return e.protocol === "ws:" || e.protocol === "wss:" ? "websocket" : "sse";
        }
      }
      getErrorType(e) {
        if (Go(e))
          switch (e.code) {
            case "ENOENT":
              return "command_not_found";
            case "EACCES":
            case "EPERM":
              return "permission_denied";
            case "ECONNREFUSED":
              return "connection_refused";
            case "ECONNRESET":
              return "connection_reset";
            case "ENOTFOUND":
            case "EHOSTUNREACH":
              return "host_not_found";
            case "ETIMEDOUT":
              return "timeout";
            case "ENETUNREACH":
              return "network_error";
            case "EINVAL":
              return "invalid_command";
            default:
              return e.code?.toLowerCase() || "unknown";
          }
        let r = String(e),
          n = r.match(/\b(1\d\d|2\d\d|3\d\d|4\d\d|5\d\d)\b/);
        if (n) {
          let o = parseInt(n[0], 10);
          if (o >= 400 && o < 500)
            switch (o) {
              case 400:
                return "bad_request";
              case 401:
                return "authentication";
              case 403:
                return "authorization";
              case 404:
                return "not_found";
              case 408:
                return "timeout";
              case 409:
                return "conflict";
              case 429:
                return "rate_limited";
              default:
                return `client_error_${o}`;
            }
          else if (o >= 500) return `server_error_${o}`;
        }
        return r.includes("requires OAuth authentication")
          ? "oauth_required"
          : r.includes("OAuth token") && r.includes("rejected")
            ? "oauth_token_invalid"
            : r.includes("Failed to create OAuth transport") || r.includes("Failed to discover OAuth configuration")
              ? "oauth_config_error"
              : r.includes("Invalid URL") || r.includes("requires URL")
                ? "invalid_url"
                : r.includes("requires command") ||
                    r.includes("invalid configuration") ||
                    r.includes("Invalid configuration")
                  ? "invalid_configuration"
                  : r.includes("check sandbox") || r.includes("SANDBOX")
                    ? "sandbox_error"
                    : r.includes("WebSocket")
                      ? "websocket_error"
                      : r.includes("protocol")
                        ? "protocol_error"
                        : r.includes("fetch") || r.includes("network") || r.includes("Network error")
                          ? "network_error"
                          : r.toLowerCase().includes("timeout")
                            ? "timeout"
                            : "unknown";
      }
    }),
      (Djt = new Map()),
      (Tjt = bE.NOT_STARTED),
      (_se = new Map()),
      (Ijt = new Set()));
  });
function vAs(t) {
  return { text: t.text };
}
function CAs(t, e) {
  return [
    { text: I.t("mcpTool.messages.mediaDataProvided", { toolName: e, type: t.type, mimeType: t.mimeType }) },
    { inlineData: { mimeType: t.mimeType, data: t.data } },
  ];
}
function SAs(t, e) {
  let r = t.resource;
  if (r?.text) return { text: r.text };
  if (r?.blob) {
    let n = r.mimeType || "application/octet-stream";
    return [
      { text: I.t("mcpTool.messages.embeddedResourceProvided", { toolName: e, mimeType: n }) },
      { inlineData: { mimeType: n, data: r.blob } },
    ];
  }
  return null;
}
function wAs(t) {
  return { text: I.t("mcpTool.messages.resourceLink", { title: t.title || t.name, uri: t.uri }) };
}
function xAs(t) {
  let e = t?.[0]?.functionResponse,
    r = e?.response?.content,
    n = e?.name || "unknown tool";
  return Array.isArray(r)
    ? r
        .flatMap((s) => {
          switch (s.type) {
            case "text":
              return vAs(s);
            case "image":
            case "audio":
              return CAs(s, n);
            case "resource":
              return SAs(s, n);
            case "resource_link":
              return wAs(s);
            default:
              return null;
          }
        })
        .filter((s) => s !== null)
    : [{ text: I.t("mcpTool.errors.parseResponseFailed") }];
}
function TAs(t) {
  let e = t?.[0]?.functionResponse?.response?.content;
  return Array.isArray(e)
    ? e.map((n) => {
        switch (n.type) {
          case "text":
            return n.text;
          case "image":
            return I.t("mcpTool.display.image", { mimeType: n.mimeType });
          case "audio":
            return I.t("mcpTool.display.audio", { mimeType: n.mimeType });
          case "resource_link":
            return I.t("mcpTool.display.resourceLink", { title: n.title || n.name, uri: n.uri });
          case "resource":
            return n.resource?.text
              ? n.resource.text
              : I.t("mcpTool.display.embeddedResource", {
                  mimeType: n.resource?.mimeType || I.t("mcpTool.display.unknownType"),
                });
          default:
            return I.t("mcpTool.display.unknownContentType", { type: n.type });
        }
      }).join(`
`)
    : "```json\n" + JSON.stringify(t, null, 2) + "\n```";
}
function B2n(t) {
  let e = t.replace(/[^a-zA-Z0-9_.-]/g, "_");
  return (e.length > 63 && (e = e.slice(0, 28) + "___" + e.slice(-32)), e);
}
var bg,
  E9e = j(() => {
    "use strict";
    SGe();
    Bb();
    Fc();
    Ba();
    bi();
    iKe();
    bg = class t extends Li {
      mcpTool;
      serverName;
      serverToolName;
      parameterSchemaJson;
      timeout;
      trust;
      static allowlist = new Set();
      constructor(e, r, n, o, s, a, u, c) {
        (super(c ?? B2n(n), `${n} (${r} MCP Server)`, o, Mi.Hammer, Fi.Other, { type: Dt.OBJECT }, !0, !1),
          (this.mcpTool = e),
          (this.serverName = r),
          (this.serverToolName = n),
          (this.parameterSchemaJson = s),
          (this.timeout = a),
          (this.trust = u));
      }
      asFullyQualifiedTool() {
        return new t(
          this.mcpTool,
          this.serverName,
          this.serverToolName,
          this.description,
          this.parameterSchemaJson,
          this.timeout,
          this.trust,
          `${this.serverName}__${this.serverToolName}`,
        );
      }
      getDescription(e) {
        return this.serverToolName;
      }
      get schema() {
        return { name: this.name, description: this.description, parametersJsonSchema: this.parameterSchemaJson };
      }
      async shouldConfirmExecute(e, r) {
        let n = this.serverName,
          o = `${this.serverName}.${this.serverToolName}`;
        return this.trust || t.allowlist.has(n) || t.allowlist.has(o)
          ? !1
          : {
              type: "mcp",
              title: I.t("mcpTool.messages.confirmExecution"),
              serverName: this.serverName,
              toolName: this.serverToolName,
              toolDisplayName: this.name,
              onConfirm: async (a) => {
                a === cn.ProceedAlwaysServer ? t.allowlist.add(n) : a === cn.ProceedAlwaysTool && t.allowlist.add(o);
              },
            };
      }
      isMCPToolError(e) {
        let n = e?.[0]?.functionResponse?.response;
        if (n) {
          let o = n?.error,
            s = o?.isError;
          if (o && (s === !0 || s === "true")) return !0;
        }
        return !1;
      }
      async execute(e) {
        let { callId: r, ...n } = e,
          o = [{ name: this.serverToolName, args: n }];
        try {
          let s = await this.mcpTool.callTool(o);
          if ((vk(this.serverName, Ss.CONNECTED), this.isMCPToolError(s))) {
            let u = `MCP tool '${this.serverToolName}' reported tool error for function call: ${Zq(o[0])} with response: ${Zq(s)}`;
            return {
              llmContent: u,
              returnDisplay: I.t("mcpTool.errors.toolReportedError", { toolName: this.serverToolName }),
              error: { message: u, type: Lr.MCP_TOOL_ERROR },
            };
          }
          return { llmContent: xAs(s), returnDisplay: TAs(s) };
        } catch (s) {
          throw (vk(this.serverName, Ss.DISCONNECTED), s);
        }
      }
    };
  });
function DAs() {
  return ["-y", "@iflow-mcp/playwright-mcp@0.0.32", "--headless", "--output-dir", process.cwd(), "--isolated"];
}
var v9e,
  L2n = j(() => {
    "use strict";
    v9e = {
      name: "playwright",
      command: "npx",
      args: DAs(),
      description: "Browser automation tools for frontend testing",
      initMode: "on-demand",
    };
  });
var oKe,
  M2n = j(() => {
    "use strict";
    L2n();
    E0();
    iKe();
    oKe = class {
      clients = new Map();
      mcpServers;
      mcpServerCommand;
      toolRegistry;
      promptRegistry;
      debugMode;
      workspaceContext;
      config;
      discoveryState = bE.NOT_STARTED;
      constructor(e, r, n, o, s, a, u) {
        ((this.mcpServers = e),
          (this.mcpServerCommand = r),
          (this.toolRegistry = n),
          (this.promptRegistry = o),
          (this.debugMode = s),
          (this.workspaceContext = a),
          (this.config = u));
      }
      async discoverAllMcpTools() {
        (await this.stop(), (this.discoveryState = bE.IN_PROGRESS));
        let e = this.config.getMcpServers();
        if (e) for (let [s, a] of Object.entries(e)) s in this.mcpServers || (this.mcpServers[s] = a);
        let r = y9e(this.mcpServers, this.mcpServerCommand),
          o = Object.entries(r)
            .filter(([s, a]) => !a.disabled)
            .map(async ([s, a]) => {
              let u = new fV(
                s,
                a,
                this.toolRegistry,
                this.promptRegistry,
                this.workspaceContext,
                this.debugMode,
                this.config,
              );
              this.clients.set(s, u);
              try {
                (await u.connect(), await u.discover());
              } catch (c) {
                this.debugMode && console.error(`Error during discovery for server '${s}': ${mr(c)}`);
              }
            });
        (await Promise.all(o), (this.discoveryState = bE.COMPLETED));
      }
      async initBuiltinPlaywrightMcp() {
        let e = v9e.name;
        if (this.clients.has(e) || (this.mcpServers[e] && this.mcpServers[e].disabled)) return;
        let r = { command: v9e.command, args: v9e.args, disabled: !1 },
          n = new fV(e, r, this.toolRegistry, this.promptRegistry, this.workspaceContext, this.debugMode, this.config);
        this.clients.set(e, n);
        try {
          (await n.connect(), await n.discover());
        } catch (o) {
          (console.error(`Error initializing built-in playwright-mcp: ${mr(o)}`), this.clients.delete(e));
        }
      }
      async cleanupBuiltinPlaywrightMcp() {
        let e = v9e.name,
          r = this.clients.get(e);
        if (r)
          try {
            (await r.disconnect(), this.clients.delete(e), this.toolRegistry.unregisterToolsByServer(e));
            try {
              let { execSync: n } = await import("child_process");
              n('pkill -f "@iflow-mcp/playwright-mcp"', { stdio: "ignore" });
            } catch {}
          } catch (n) {
            console.error(`[Playwright MCP] Error cleaning up: ${mr(n)}`);
          }
      }
      async rediscoverServer(e, r) {
        let n = this.clients.get(e);
        if (n)
          try {
            (await n.disconnect(), this.clients.delete(e), this.toolRegistry.unregisterToolsByServer(e));
          } catch (u) {
            console.error(`Error disconnecting old client for '${e}': ${mr(u)}`);
          }
        await new Promise((u) => setTimeout(u, 1e3));
        let s = y9e(this.mcpServers, this.mcpServerCommand)[e];
        if (!s || s.disabled) throw new Error(`Server '${e}' is not configured or is disabled`);
        let a = new fV(
          e,
          s,
          this.toolRegistry,
          this.promptRegistry,
          this.workspaceContext,
          this.debugMode,
          this.config,
        );
        (r && a.setOAuthUrlCallback(r), this.clients.set(e, a));
        try {
          (await a.connect(), await a.discover());
        } catch (u) {
          throw (this.clients.delete(e), u);
        }
      }
      async stop() {
        let e = Array.from(this.clients.entries()).map(async ([r, n]) => {
          try {
            await n.disconnect();
          } catch (o) {
            console.error(`Error stopping client '${r}': ${mr(o)}`);
          }
        });
        (await Promise.all(e), this.clients.clear());
      }
      getDiscoveryState() {
        return this.discoveryState;
      }
    };
  });
import { spawn as U2n } from "node:child_process";
import { StringDecoder as F2n } from "node:string_decoder";
function j2n(t) {
  sKe(t, new Set());
}
function sKe(t, e) {
  if (!(!t || e.has(t))) {
    if ((e.add(t), t.anyOf)) {
      t.default = void 0;
      for (let r of t.anyOf) typeof r != "boolean" && sKe(r, e);
    }
    if ((t.items && typeof t.items != "boolean" && sKe(t.items, e), t.properties))
      for (let r of Object.values(t.properties)) typeof r != "boolean" && sKe(r, e);
    (t.enum &&
      Array.isArray(t.enum) &&
      (t.type !== Dt.STRING && (t.type = Dt.STRING), (t.enum = t.enum.filter((r) => r != null).map((r) => String(r)))),
      t.type === Dt.STRING && t.format && t.format !== "enum" && t.format !== "date-time" && (t.format = void 0));
  }
}
var $2n,
  C9e,
  S9e,
  Njt = j(() => {
    "use strict";
    Ba();
    Fc();
    E9e();
    $2n = Se(f9e(), 1);
    M2n();
    bi();
    ((C9e = class extends Li {
      config;
      description;
      parameterSchema;
      constructor(e, r, n, o) {
        let s = e.getToolDiscoveryCommand(),
          a = e.getToolCallCommand();
        ((n += `

This tool was discovered from the project by executing the command \`${s}\` on project root.
When called, this tool will execute the command \`${a} ${r}\` on project root.
Tool discovery and call commands can be configured in project or user settings.

When called, the tool call command is executed as a subprocess.
On success, tool output is returned as a json string.
Otherwise, the following information is returned:

Stdout: Output on stdout stream. Can be \`(empty)\` or partial.
Stderr: Output on stderr stream. Can be \`(empty)\` or partial.
Error: Error or \`(none)\` if no error was reported for the subprocess.
Exit Code: Exit code or \`(none)\` if terminated by signal.
Signal: Signal number or \`(none)\` if no signal was received.
`),
          super(r, r, n, Mi.Hammer, Fi.Other, o, !1, !1),
          (this.config = e),
          (this.description = n),
          (this.parameterSchema = o));
      }
      getDescription(e) {
        return this.displayName;
      }
      async execute(e) {
        let r = this.config.getToolCallCommand(),
          n = U2n(r, [this.name]);
        (n.stdin.write(JSON.stringify(e)), n.stdin.end());
        let o = "",
          s = "",
          a = null,
          u = null,
          c = null;
        if (
          (await new Promise((m) => {
            let d = (b) => {
                o += b?.toString();
              },
              f = (b) => {
                s += b?.toString();
              },
              p = (b) => {
                a = b;
              },
              h = (b, A) => {
                ((u = b), (c = A), g(), m());
              },
              g = () => {
                (n.stdout.removeListener("data", d),
                  n.stderr.removeListener("data", f),
                  n.removeListener("error", p),
                  n.removeListener("close", h),
                  n.connected && n.disconnect());
              };
            (n.stdout.on("data", d), n.stderr.on("data", f), n.on("error", p), n.on("close", h));
          }),
          a || u !== 0 || c || s)
        ) {
          let m = [
            `Stdout: ${o || "(empty)"}`,
            `Stderr: ${s || "(empty)"}`,
            `Error: ${a ?? "(none)"}`,
            `Exit Code: ${u ?? "(none)"}`,
            `Signal: ${c ?? "(none)"}`,
          ].join(`
`);
          return { llmContent: m, returnDisplay: m };
        }
        return { llmContent: o, returnDisplay: o };
      }
    }),
      (S9e = class {
        tools = new Map();
        config;
        mcpClientManager;
        constructor(e) {
          ((this.config = e),
            (this.mcpClientManager = new oKe(
              this.config.getMcpServers() ?? {},
              this.config.getMcpServerCommand(),
              this,
              this.config.getPromptRegistry(),
              this.config.getDebugMode(),
              this.config.getWorkspaceContext(),
              this.config,
            )));
        }
        registerTool(e) {
          (this.tools.has(e.name) &&
            (e instanceof bg
              ? (e = e.asFullyQualifiedTool())
              : console.warn(I.t("toolRegistry.warnings.toolAlreadyRegistered", { toolName: e.name }))),
            this.tools.set(e.name, e));
        }
        async discoverAllTools(e = !1) {
          for (let r of this.tools.values()) (r instanceof C9e || r instanceof bg) && this.tools.delete(r.name);
          (await this.discoverAndRegisterToolsFromCommand(),
            e ? await this.mcpClientManager.discoverAllMcpTools() : this.startMcpDiscoveryInBackground());
        }
        startMcpDiscoveryInBackground() {
          this.mcpClientManager.discoverAllMcpTools();
        }
        async discoverMcpTools() {
          for (let e of this.tools.values()) e instanceof bg && this.tools.delete(e.name);
          await this.mcpClientManager.discoverAllMcpTools();
        }
        async restartMcpServers() {
          await this.discoverMcpTools();
        }
        async discoverToolsForServer(e, r) {
          await this.mcpClientManager.rediscoverServer(e, r);
        }
        removeToolsForServer(e) {
          for (let [r, n] of this.tools.entries()) n instanceof bg && n.serverName === e && this.tools.delete(r);
          this.config.getPromptRegistry().removePromptsByServer(e);
        }
        async discoverAndRegisterToolsFromCommand() {
          let e = this.config.getToolDiscoveryCommand();
          if (e)
            try {
              let r = (0, $2n.parse)(e);
              if (r.length === 0) throw new Error(I.t("toolRegistry.errors.emptyDiscoveryCommand"));
              let n = U2n(r[0], r.slice(1)),
                o = "",
                s = new F2n("utf8"),
                a = "",
                u = new F2n("utf8"),
                c = !1,
                m = 10 * 1024 * 1024,
                d = 10 * 1024 * 1024,
                f = 0,
                p = 0;
              (n.stdout.on("data", (b) => {
                if (!c) {
                  if (f + b.length > m) {
                    ((c = !0), n.kill());
                    return;
                  }
                  ((f += b.length), (o += s.write(b)));
                }
              }),
                n.stderr.on("data", (b) => {
                  if (!c) {
                    if (p + b.length > d) {
                      ((c = !0), n.kill());
                      return;
                    }
                    ((p += b.length), (a += u.write(b)));
                  }
                }),
                await new Promise((b, A) => {
                  (n.on("error", A),
                    n.on("close", (y) => {
                      if (((o += s.end()), (a += u.end()), c))
                        return A(new Error(I.t("toolRegistry.errors.outputSizeLimitExceeded", { maxSize: m })));
                      if (y !== 0)
                        return (
                          console.error(I.t("toolRegistry.errors.commandFailedWithCode", { code: y })),
                          console.error(a),
                          A(new Error(I.t("toolRegistry.errors.discoveryCommandFailed", { code: y })))
                        );
                      b();
                    }));
                }));
              let h = [],
                g = JSON.parse(o.trim());
              if (!g || !Array.isArray(g)) throw new Error(I.t("toolRegistry.errors.invalidDiscoveryOutput"));
              for (let b of g)
                b &&
                  typeof b == "object" &&
                  (Array.isArray(b.function_declarations)
                    ? h.push(...b.function_declarations)
                    : Array.isArray(b.functionDeclarations)
                      ? h.push(...b.functionDeclarations)
                      : b.name && h.push(b));
              for (let b of h) {
                if (!b.name) {
                  console.warn(I.t("toolRegistry.warnings.toolWithNoName"));
                  continue;
                }
                let A =
                  b.parameters && typeof b.parameters == "object" && !Array.isArray(b.parameters) ? b.parameters : {};
                (j2n(A), this.registerTool(new C9e(this.config, b.name, b.description ?? "", A)));
              }
            } catch (r) {
              throw (console.error(I.t("toolRegistry.errors.discoveryCommandError", { cmd: e }), r), r);
            }
        }
        getFunctionDeclarations() {
          let e = [],
            n = !!this.config.getSearchApiKey();
          return (
            this.tools.forEach((o) => {
              ((o.name === "web_search" || o.name === "web_fetch" || o.name === "xinliu_web_fetch") && !n) ||
                e.push(o.schema);
            }),
            e
          );
        }
        getAllTools() {
          let r = !!this.config.getSearchApiKey();
          return Array.from(this.tools.values())
            .filter(
              (o) => !((o.name === "web_search" || o.name === "web_fetch" || o.name === "xinliu_web_fetch") && !r),
            )
            .sort((o, s) => o.displayName.localeCompare(s.displayName));
        }
        getToolsByServer(e) {
          let r = [];
          for (let n of this.tools.values()) n?.serverName === e && r.push(n);
          return r.sort((n, o) => n.name.localeCompare(o.name));
        }
        getPlaywrightMcpTools() {
          return this.getToolsByServer("playwright");
        }
        unregisterToolsByServer(e) {
          let r = [];
          for (let [n, o] of this.tools.entries()) o?.serverName === e && r.push(n);
          for (let n of r) this.tools.delete(n);
        }
        getMcpClientManager() {
          return this.mcpClientManager;
        }
        getTool(e) {
          let n = !!this.config.getSearchApiKey();
          if ((e === "web_search" || e === "web_fetch" || e === "xinliu_web_fetch") && !n) return;
          let o = this.tools.get(e);
          if (o)
            return (o.name === "web_search" || o.name === "web_fetch" || o.name === "xinliu_web_fetch") && !n
              ? void 0
              : o;
          for (let s of this.tools.values())
            if (s.aliases && s.aliases.includes(e))
              return (s.name === "web_search" || s.name === "web_fetch" || s.name === "xinliu_web_fetch") && !n
                ? void 0
                : s;
        }
        hasTool(e) {
          return this.getTool(e) !== void 0;
        }
        getCanonicalToolName(e) {
          return this.getTool(e)?.name;
        }
        normalizeToolNames(e) {
          let r = [];
          for (let n of e) {
            let o = this.getCanonicalToolName(n);
            o && !r.includes(o) && r.push(o);
          }
          return r;
        }
      }));
  });