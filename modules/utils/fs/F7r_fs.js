/**
 * @module F7r
 * @category utils/fs
 * @label fs
 * @position 57 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (F7r) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var F7r = T((r6) => {
  "use strict";
  var L7r =
      (r6 && r6.__createBinding) ||
      (Object.create
        ? function (t, e, r, n) {
            n === void 0 && (n = r);
            var o = Object.getOwnPropertyDescriptor(e, r);
            ((!o || ("get" in o ? !e.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return e[r];
                },
              }),
              Object.defineProperty(t, n, o));
          }
        : function (t, e, r, n) {
            (n === void 0 && (n = r), (t[n] = e[r]));
          }),
    vfo =
      (r6 && r6.__setModuleDefault) ||
      (Object.create
        ? function (t, e) {
            Object.defineProperty(t, "default", { enumerable: !0, value: e });
          }
        : function (t, e) {
            t.default = e;
          }),
    M7r =
      (r6 && r6.__importStar) ||
      function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (t != null) for (var r in t) r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && L7r(e, t, r);
        return (vfo(e, t), e);
      },
    Cfo =
      (r6 && r6.__exportStar) ||
      function (t, e) {
        for (var r in t) r !== "default" && !Object.prototype.hasOwnProperty.call(e, r) && L7r(e, t, r);
      };
  Object.defineProperty(r6, "__esModule", { value: !0 });
  r6.Agent = void 0;
  var Sfo = M7r(Ae("net")),
    B7r = M7r(Ae("http")),
    wfo = Ae("https");
  Cfo(P7r(), r6);
  var nx = Symbol("AgentBaseInternalState"),
    j6t = class extends B7r.Agent {
      constructor(e) {
        (super(e), (this[nx] = {}));
      }
      isSecureEndpoint(e) {
        if (e) {
          if (typeof e.secureEndpoint == "boolean") return e.secureEndpoint;
          if (typeof e.protocol == "string") return e.protocol === "https:";
        }
        let { stack: r } = new Error();
        return typeof r != "string"
          ? !1
          : r
              .split(
                `
`,
              )
              .some((n) => n.indexOf("(https.js:") !== -1 || n.indexOf("node:https:") !== -1);
      }
      incrementSockets(e) {
        if (this.maxSockets === 1 / 0 && this.maxTotalSockets === 1 / 0) return null;
        this.sockets[e] || (this.sockets[e] = []);
        let r = new Sfo.Socket({ writable: !1 });
        return (this.sockets[e].push(r), this.totalSocketCount++, r);
      }
      decrementSockets(e, r) {
        if (!this.sockets[e] || r === null) return;
        let n = this.sockets[e],
          o = n.indexOf(r);
        o !== -1 && (n.splice(o, 1), this.totalSocketCount--, n.length === 0 && delete this.sockets[e]);
      }
      getName(e) {
        return this.isSecureEndpoint(e) ? wfo.Agent.prototype.getName.call(this, e) : super.getName(e);
      }
      createSocket(e, r, n) {
        let o = { ...r, secureEndpoint: this.isSecureEndpoint(r) },
          s = this.getName(o),
          a = this.incrementSockets(s);
        Promise.resolve()
          .then(() => this.connect(e, o))
          .then(
            (u) => {
              if ((this.decrementSockets(s, a), u instanceof B7r.Agent))
                try {
                  return u.addRequest(e, o);
                } catch (c) {
                  return n(c);
                }
              ((this[nx].currentSocket = u), super.createSocket(e, r, n));
            },
            (u) => {
              (this.decrementSockets(s, a), n(u));
            },
          );
      }
      createConnection() {
        let e = this[nx].currentSocket;
        if (((this[nx].currentSocket = void 0), !e))
          throw new Error("No socket was returned in the `connect()` function");
        return e;
      }
      get defaultPort() {
        return this[nx].defaultPort ?? (this.protocol === "https:" ? 443 : 80);
      }
      set defaultPort(e) {
        this[nx] && (this[nx].defaultPort = e);
      }
      get protocol() {
        return this[nx].protocol ?? (this.isSecureEndpoint() ? "https:" : "http:");
      }
      set protocol(e) {
        this[nx] && (this[nx].protocol = e);
      }
    };
  r6.Agent = j6t;
});