/**
 * @module mU
 * @category network/http
 * @label undici
 * @position 1482 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mU) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mU = T((Evc, uKn) => {
  "use strict";
  var Ol = Ae("node:diagnostics_channel"),
    bsr = Ae("node:util"),
    Mz = bsr.debuglog("undici"),
    Rve = bsr.debuglog("fetch"),
    Nit = bsr.debuglog("websocket"),
    V6 = {
      beforeConnect: Ol.channel("undici:client:beforeConnect"),
      connected: Ol.channel("undici:client:connected"),
      connectError: Ol.channel("undici:client:connectError"),
      sendHeaders: Ol.channel("undici:client:sendHeaders"),
      create: Ol.channel("undici:request:create"),
      bodySent: Ol.channel("undici:request:bodySent"),
      bodyChunkSent: Ol.channel("undici:request:bodyChunkSent"),
      bodyChunkReceived: Ol.channel("undici:request:bodyChunkReceived"),
      headers: Ol.channel("undici:request:headers"),
      trailers: Ol.channel("undici:request:trailers"),
      error: Ol.channel("undici:request:error"),
      open: Ol.channel("undici:websocket:open"),
      close: Ol.channel("undici:websocket:close"),
      socketError: Ol.channel("undici:websocket:socket_error"),
      ping: Ol.channel("undici:websocket:ping"),
      pong: Ol.channel("undici:websocket:pong"),
      proxyConnected: Ol.channel("undici:proxy:connected"),
    },
    psr = !1;
  function aKn(t = Mz) {
    if (!psr) {
      if (
        V6.beforeConnect.hasSubscribers ||
        V6.connected.hasSubscribers ||
        V6.connectError.hasSubscribers ||
        V6.sendHeaders.hasSubscribers
      ) {
        psr = !0;
        return;
      }
      ((psr = !0),
        Ol.subscribe("undici:client:beforeConnect", (e) => {
          let {
            connectParams: { version: r, protocol: n, port: o, host: s },
          } = e;
          t("connecting to %s%s using %s%s", s, o ? `:${o}` : "", n, r);
        }),
        Ol.subscribe("undici:client:connected", (e) => {
          let {
            connectParams: { version: r, protocol: n, port: o, host: s },
          } = e;
          t("connected to %s%s using %s%s", s, o ? `:${o}` : "", n, r);
        }),
        Ol.subscribe("undici:client:connectError", (e) => {
          let {
            connectParams: { version: r, protocol: n, port: o, host: s },
            error: a,
          } = e;
          t("connection to %s%s using %s%s errored - %s", s, o ? `:${o}` : "", n, r, a.message);
        }),
        Ol.subscribe("undici:client:sendHeaders", (e) => {
          let {
            request: { method: r, path: n, origin: o },
          } = e;
          t("sending request to %s %s%s", r, o, n);
        }));
    }
  }
  var hsr = !1;
  function joa(t = Mz) {
    if (!hsr) {
      if (V6.headers.hasSubscribers || V6.trailers.hasSubscribers || V6.error.hasSubscribers) {
        hsr = !0;
        return;
      }
      ((hsr = !0),
        Ol.subscribe("undici:request:headers", (e) => {
          let {
            request: { method: r, path: n, origin: o },
            response: { statusCode: s },
          } = e;
          t("received response to %s %s%s - HTTP %d", r, o, n, s);
        }),
        Ol.subscribe("undici:request:trailers", (e) => {
          let {
            request: { method: r, path: n, origin: o },
          } = e;
          t("trailers received from %s %s%s", r, o, n);
        }),
        Ol.subscribe("undici:request:error", (e) => {
          let {
            request: { method: r, path: n, origin: o },
            error: s,
          } = e;
          t("request to %s %s%s errored - %s", r, o, n, s.message);
        }));
    }
  }
  var gsr = !1;
  function Qoa(t = Nit) {
    if (!gsr) {
      if (
        V6.open.hasSubscribers ||
        V6.close.hasSubscribers ||
        V6.socketError.hasSubscribers ||
        V6.ping.hasSubscribers ||
        V6.pong.hasSubscribers
      ) {
        gsr = !0;
        return;
      }
      ((gsr = !0),
        Ol.subscribe("undici:websocket:open", (e) => {
          let {
            address: { address: r, port: n },
          } = e;
          t("connection opened %s%s", r, n ? `:${n}` : "");
        }),
        Ol.subscribe("undici:websocket:close", (e) => {
          let { websocket: r, code: n, reason: o } = e;
          t("closed connection to %s - %s %s", r.url, n, o);
        }),
        Ol.subscribe("undici:websocket:socket_error", (e) => {
          t("connection errored - %s", e.message);
        }),
        Ol.subscribe("undici:websocket:ping", (e) => {
          t("ping received");
        }),
        Ol.subscribe("undici:websocket:pong", (e) => {
          t("pong received");
        }));
    }
  }
  (Mz.enabled || Rve.enabled) && (aKn(Rve.enabled ? Rve : Mz), joa(Rve.enabled ? Rve : Mz));
  Nit.enabled && (aKn(Mz.enabled ? Mz : Nit), Qoa(Nit));
  uKn.exports = { channels: V6 };
});