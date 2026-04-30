/**
 * @module cst
 * @category network/ws
 * @label websocket
 * @position 1571 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (cst) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var cst = T((c4c, fni) => {
  "use strict";
  var { uid: g3a, states: kcr, sentCloseFrameState: Ocr, emptyBuffer: uni, opcodes: b3a } = TU(),
    {
      parseExtensions: A3a,
      isClosed: y3a,
      isClosing: _3a,
      isEstablished: mni,
      isConnecting: E3a,
      validateCloseCodeAndReason: v3a,
    } = aY(),
    { makeRequest: C3a } = Rle(),
    { fetching: S3a } = wCe(),
    { Headers: w3a, getHeadersList: x3a } = tY(),
    { getDecodeSplit: T3a } = z6(),
    { WebsocketFrameSend: D3a } = Lle(),
    I3a = Ae("node:assert"),
    { runtimeFeatures: R3a } = PO(),
    cni = R3a.has("crypto") ? Ae("node:crypto") : null,
    lni = !1;
  function k3a(t, e, r, n, o) {
    let s = t;
    s.protocol = t.protocol === "ws:" ? "http:" : "https:";
    let a = C3a({
      urlList: [s],
      client: r,
      serviceWorkers: "none",
      referrer: "no-referrer",
      mode: "websocket",
      credentials: "include",
      cache: "no-store",
      redirect: "error",
    });
    if (o.headers) {
      let d = x3a(new w3a(o.headers));
      a.headersList = d;
    }
    let u = cni.randomBytes(16).toString("base64");
    (a.headersList.append("sec-websocket-key", u, !0), a.headersList.append("sec-websocket-version", "13", !0));
    for (let d of e) a.headersList.append("sec-websocket-protocol", d, !0);
    return (
      a.headersList.append("sec-websocket-extensions", "permessage-deflate; client_max_window_bits", !0),
      S3a({
        request: a,
        useParallelQueue: !0,
        dispatcher: o.dispatcher,
        processResponse(d) {
          if (d.type === "error" || d.status !== 101) {
            if (d.socket?.session == null) {
              PD(n, 1002, "Received network error or non-101 status code.", d.error);
              return;
            }
            if (d.status !== 200) {
              PD(n, 1002, "Received network error or non-200 status code.", d.error);
              return;
            }
          }
          if (
            (lni === !1 &&
              d.socket?.session != null &&
              (process.emitWarning(
                "WebSocket over HTTP2 is experimental, and subject to change.",
                "ExperimentalWarning",
              ),
              (lni = !0)),
            e.length !== 0 && !d.headersList.get("Sec-WebSocket-Protocol"))
          ) {
            PD(n, 1002, "Server did not respond with sent protocols.");
            return;
          }
          if (d.socket.session == null && d.headersList.get("Upgrade")?.toLowerCase() !== "websocket") {
            PD(n, 1002, 'Server did not set Upgrade header to "websocket".');
            return;
          }
          if (d.socket.session == null && d.headersList.get("Connection")?.toLowerCase() !== "upgrade") {
            PD(n, 1002, 'Server did not set Connection header to "upgrade".');
            return;
          }
          let f = d.headersList.get("Sec-WebSocket-Accept"),
            p = cni.hash("sha1", u + g3a, "base64");
          if (f !== p) {
            PD(n, 1002, "Incorrect hash received in Sec-WebSocket-Accept header.");
            return;
          }
          let h = d.headersList.get("Sec-WebSocket-Extensions"),
            g;
          if (h !== null && ((g = A3a(h)), !g.has("permessage-deflate"))) {
            PD(n, 1002, "Sec-WebSocket-Extensions header does not match.");
            return;
          }
          let b = d.headersList.get("Sec-WebSocket-Protocol");
          if (b !== null && !T3a("sec-websocket-protocol", a.headersList).includes(b)) {
            PD(n, 1002, "Protocol was not set in the opening handshake.");
            return;
          }
          (d.socket.on("data", n.onSocketData),
            d.socket.on("close", n.onSocketClose),
            d.socket.on("error", n.onSocketError),
            (n.wasEverConnected = !0),
            n.onConnectionEstablished(d, g));
        },
      })
    );
  }
  function dni(t, e, r, n = !1) {
    if (((e ??= null), (r ??= ""), n && v3a(e, r), !(y3a(t.readyState) || _3a(t.readyState))))
      if (!mni(t.readyState)) (PD(t), (t.readyState = kcr.CLOSING));
      else if (!t.closeState.has(Ocr.SENT) && !t.closeState.has(Ocr.RECEIVED)) {
        let o = new D3a();
        (r.length !== 0 && e === null && (e = 1e3),
          I3a(e === null || Number.isInteger(e)),
          e === null && r.length === 0
            ? (o.frameData = uni)
            : e !== null && r === null
              ? ((o.frameData = Buffer.allocUnsafe(2)), o.frameData.writeUInt16BE(e, 0))
              : e !== null && r !== null
                ? ((o.frameData = Buffer.allocUnsafe(2 + Buffer.byteLength(r))),
                  o.frameData.writeUInt16BE(e, 0),
                  o.frameData.write(r, 2, "utf-8"))
                : (o.frameData = uni),
          t.socket.write(o.createFrame(b3a.CLOSE)),
          t.closeState.add(Ocr.SENT),
          (t.readyState = kcr.CLOSING));
      } else t.readyState = kcr.CLOSING;
  }
  function PD(t, e, r, n) {
    (mni(t.readyState) && dni(t, e, r, !1),
      t.controller.abort(),
      E3a(t.readyState) ? t.onSocketClose() : t.socket?.destroyed === !1 && t.socket.destroy());
  }
  fni.exports = { establishWebSocketConnection: k3a, failWebsocketConnection: PD, closeWebSocketConnection: dni };
});