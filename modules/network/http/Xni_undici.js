/**
 * @module Xni
 * @category network/http
 * @label undici
 * @position 1579 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Xni) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Xni = T((A4c, Jni) => {
  "use strict";
  var { pipeline: Dga } = Ae("node:stream"),
    { fetching: Iga } = wCe(),
    { makeRequest: Rga } = Rle(),
    { webidl: H2 } = jg(),
    { EventSourceStream: kga } = qni(),
    { parseMIMEType: Oga } = HE(),
    { createFastMessageEvent: Nga } = sst(),
    { isNetworkError: Hni } = CCe(),
    { kEnumerableProperty: lY } = ks(),
    { environmentSettingsObject: Vni } = z6(),
    Wni = !1,
    zni = 3e3,
    kCe = 0,
    Yni = 1,
    OCe = 2,
    Pga = "anonymous",
    Bga = "use-credentials",
    $le = class t extends EventTarget {
      #e = { open: null, error: null, message: null };
      #t;
      #r = !1;
      #n = kCe;
      #i = null;
      #o = null;
      #u;
      #a;
      constructor(e, r = {}) {
        (super(), H2.util.markAsUncloneable(this));
        let n = "EventSource constructor";
        (H2.argumentLengthCheck(arguments, 1, n),
          Wni ||
            ((Wni = !0),
            process.emitWarning("EventSource is experimental, expect them to change at any time.", {
              code: "UNDICI-ES",
            })),
          (e = H2.converters.USVString(e)),
          (r = H2.converters.EventSourceInitDict(r, n, "eventSourceInitDict")),
          (this.#u = r.node.dispatcher || r.dispatcher),
          (this.#a = { lastEventId: "", reconnectionTime: r.node.reconnectionTime }));
        let o = Vni,
          s;
        try {
          ((s = new URL(e, o.settingsObject.baseUrl)), (this.#a.origin = s.origin));
        } catch (c) {
          throw new DOMException(c, "SyntaxError");
        }
        this.#t = s.href;
        let a = Pga;
        r.withCredentials === !0 && ((a = Bga), (this.#r = !0));
        let u = {
          redirect: "follow",
          keepalive: !0,
          mode: "cors",
          credentials: a === "anonymous" ? "same-origin" : "omit",
          referrer: "no-referrer",
        };
        ((u.client = Vni.settingsObject),
          (u.headersList = [["accept", { name: "accept", value: "text/event-stream" }]]),
          (u.cache = "no-store"),
          (u.initiator = "other"),
          (u.urlList = [new URL(this.#t)]),
          (this.#i = Rga(u)),
          this.#s());
      }
      get readyState() {
        return this.#n;
      }
      get url() {
        return this.#t;
      }
      get withCredentials() {
        return this.#r;
      }
      #s() {
        if (this.#n === OCe) return;
        this.#n = kCe;
        let e = { request: this.#i, dispatcher: this.#u },
          r = (n) => {
            if (!Hni(n)) return this.#l();
          };
        ((e.processResponseEndOfBody = r),
          (e.processResponse = (n) => {
            if (Hni(n))
              if (n.aborted) {
                (this.close(), this.dispatchEvent(new Event("error")));
                return;
              } else {
                this.#l();
                return;
              }
            let o = n.headersList.get("content-type", !0),
              s = o !== null ? Oga(o) : "failure",
              a = s !== "failure" && s.essence === "text/event-stream";
            if (n.status !== 200 || a === !1) {
              (this.close(), this.dispatchEvent(new Event("error")));
              return;
            }
            ((this.#n = Yni),
              this.dispatchEvent(new Event("open")),
              (this.#a.origin = n.urlList[n.urlList.length - 1].origin));
            let u = new kga({
              eventSourceSettings: this.#a,
              push: (c) => {
                this.dispatchEvent(Nga(c.type, c.options));
              },
            });
            Dga(n.body.stream, u, (c) => {
              c?.aborted === !1 && (this.close(), this.dispatchEvent(new Event("error")));
            });
          }),
          (this.#o = Iga(e)));
      }
      #l() {
        this.#n !== OCe &&
          ((this.#n = kCe),
          this.dispatchEvent(new Event("error")),
          setTimeout(() => {
            this.#n === kCe &&
              (this.#a.lastEventId.length && this.#i.headersList.set("last-event-id", this.#a.lastEventId, !0),
              this.#s());
          }, this.#a.reconnectionTime)?.unref());
      }
      close() {
        (H2.brandCheck(this, t), this.#n !== OCe && ((this.#n = OCe), this.#o.abort(), (this.#i = null)));
      }
      get onopen() {
        return this.#e.open;
      }
      set onopen(e) {
        this.#e.open && this.removeEventListener("open", this.#e.open);
        let r = H2.converters.EventHandlerNonNull(e);
        r !== null ? (this.addEventListener("open", r), (this.#e.open = e)) : (this.#e.open = null);
      }
      get onmessage() {
        return this.#e.message;
      }
      set onmessage(e) {
        this.#e.message && this.removeEventListener("message", this.#e.message);
        let r = H2.converters.EventHandlerNonNull(e);
        r !== null ? (this.addEventListener("message", r), (this.#e.message = e)) : (this.#e.message = null);
      }
      get onerror() {
        return this.#e.error;
      }
      set onerror(e) {
        this.#e.error && this.removeEventListener("error", this.#e.error);
        let r = H2.converters.EventHandlerNonNull(e);
        r !== null ? (this.addEventListener("error", r), (this.#e.error = e)) : (this.#e.error = null);
      }
    },
    Kni = {
      CONNECTING: { __proto__: null, configurable: !1, enumerable: !0, value: kCe, writable: !1 },
      OPEN: { __proto__: null, configurable: !1, enumerable: !0, value: Yni, writable: !1 },
      CLOSED: { __proto__: null, configurable: !1, enumerable: !0, value: OCe, writable: !1 },
    };
  Object.defineProperties($le, Kni);
  Object.defineProperties($le.prototype, Kni);
  Object.defineProperties($le.prototype, {
    close: lY,
    onerror: lY,
    onmessage: lY,
    onopen: lY,
    readyState: lY,
    url: lY,
    withCredentials: lY,
  });
  H2.converters.EventSourceInitDict = H2.dictionaryConverter([
    { key: "withCredentials", converter: H2.converters.boolean, defaultValue: () => !1 },
    { key: "dispatcher", converter: H2.converters.any },
    {
      key: "node",
      converter: H2.dictionaryConverter([
        { key: "reconnectionTime", converter: H2.converters["unsigned long"], defaultValue: () => zni },
        { key: "dispatcher", converter: H2.converters.any },
      ]),
      defaultValue: () => ({}),
    },
  ]);
  Jni.exports = { EventSource: $le, defaultReconnectionTime: zni };
});