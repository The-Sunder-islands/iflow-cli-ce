/**
 * @module sst
 * @category utils/oop
 * @label oop
 * @position 1567 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (sst) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var sst = T((o4c, Zri) => {
  "use strict";
  var { webidl: so } = jg(),
    { kEnumerableProperty: i9 } = ks(),
    { kConstruct: Xri } = n0(),
    Nle = class t extends Event {
      #e;
      constructor(e, r = {}) {
        if (e === Xri) {
          (super(arguments[1], arguments[2]), so.util.markAsUncloneable(this));
          return;
        }
        let n = "MessageEvent constructor";
        (so.argumentLengthCheck(arguments, 1, n),
          (e = so.converters.DOMString(e, n, "type")),
          (r = so.converters.MessageEventInit(r, n, "eventInitDict")),
          super(e, r),
          (this.#e = r),
          so.util.markAsUncloneable(this));
      }
      get data() {
        return (so.brandCheck(this, t), this.#e.data);
      }
      get origin() {
        return (so.brandCheck(this, t), this.#e.origin);
      }
      get lastEventId() {
        return (so.brandCheck(this, t), this.#e.lastEventId);
      }
      get source() {
        return (so.brandCheck(this, t), this.#e.source);
      }
      get ports() {
        return (so.brandCheck(this, t), Object.isFrozen(this.#e.ports) || Object.freeze(this.#e.ports), this.#e.ports);
      }
      initMessageEvent(e, r = !1, n = !1, o = null, s = "", a = "", u = null, c = []) {
        return (
          so.brandCheck(this, t),
          so.argumentLengthCheck(arguments, 1, "MessageEvent.initMessageEvent"),
          new t(e, { bubbles: r, cancelable: n, data: o, origin: s, lastEventId: a, source: u, ports: c })
        );
      }
      static createFastMessageEvent(e, r) {
        let n = new t(Xri, e, r);
        return (
          (n.#e = r),
          (n.#e.data ??= null),
          (n.#e.origin ??= ""),
          (n.#e.lastEventId ??= ""),
          (n.#e.source ??= null),
          (n.#e.ports ??= []),
          n
        );
      }
    },
    { createFastMessageEvent: $ha } = Nle;
  delete Nle.createFastMessageEvent;
  var ist = class t extends Event {
      #e;
      constructor(e, r = {}) {
        let n = "CloseEvent constructor";
        (so.argumentLengthCheck(arguments, 1, n),
          (e = so.converters.DOMString(e, n, "type")),
          (r = so.converters.CloseEventInit(r)),
          super(e, r),
          (this.#e = r),
          so.util.markAsUncloneable(this));
      }
      get wasClean() {
        return (so.brandCheck(this, t), this.#e.wasClean);
      }
      get code() {
        return (so.brandCheck(this, t), this.#e.code);
      }
      get reason() {
        return (so.brandCheck(this, t), this.#e.reason);
      }
    },
    ost = class t extends Event {
      #e;
      constructor(e, r) {
        let n = "ErrorEvent constructor";
        (so.argumentLengthCheck(arguments, 1, n),
          super(e, r),
          so.util.markAsUncloneable(this),
          (e = so.converters.DOMString(e, n, "type")),
          (r = so.converters.ErrorEventInit(r ?? {})),
          (this.#e = r));
      }
      get message() {
        return (so.brandCheck(this, t), this.#e.message);
      }
      get filename() {
        return (so.brandCheck(this, t), this.#e.filename);
      }
      get lineno() {
        return (so.brandCheck(this, t), this.#e.lineno);
      }
      get colno() {
        return (so.brandCheck(this, t), this.#e.colno);
      }
      get error() {
        return (so.brandCheck(this, t), this.#e.error);
      }
    };
  Object.defineProperties(Nle.prototype, {
    [Symbol.toStringTag]: { value: "MessageEvent", configurable: !0 },
    data: i9,
    origin: i9,
    lastEventId: i9,
    source: i9,
    ports: i9,
    initMessageEvent: i9,
  });
  Object.defineProperties(ist.prototype, {
    [Symbol.toStringTag]: { value: "CloseEvent", configurable: !0 },
    reason: i9,
    code: i9,
    wasClean: i9,
  });
  Object.defineProperties(ost.prototype, {
    [Symbol.toStringTag]: { value: "ErrorEvent", configurable: !0 },
    message: i9,
    filename: i9,
    lineno: i9,
    colno: i9,
    error: i9,
  });
  so.converters.MessagePort = so.interfaceConverter(so.is.MessagePort, "MessagePort");
  so.converters["sequence<MessagePort>"] = so.sequenceConverter(so.converters.MessagePort);
  var Dcr = [
    { key: "bubbles", converter: so.converters.boolean, defaultValue: () => !1 },
    { key: "cancelable", converter: so.converters.boolean, defaultValue: () => !1 },
    { key: "composed", converter: so.converters.boolean, defaultValue: () => !1 },
  ];
  so.converters.MessageEventInit = so.dictionaryConverter([
    ...Dcr,
    { key: "data", converter: so.converters.any, defaultValue: () => null },
    { key: "origin", converter: so.converters.USVString, defaultValue: () => "" },
    { key: "lastEventId", converter: so.converters.DOMString, defaultValue: () => "" },
    { key: "source", converter: so.nullableConverter(so.converters.MessagePort), defaultValue: () => null },
    { key: "ports", converter: so.converters["sequence<MessagePort>"], defaultValue: () => [] },
  ]);
  so.converters.CloseEventInit = so.dictionaryConverter([
    ...Dcr,
    { key: "wasClean", converter: so.converters.boolean, defaultValue: () => !1 },
    { key: "code", converter: so.converters["unsigned short"], defaultValue: () => 0 },
    { key: "reason", converter: so.converters.USVString, defaultValue: () => "" },
  ]);
  so.converters.ErrorEventInit = so.dictionaryConverter([
    ...Dcr,
    { key: "message", converter: so.converters.DOMString, defaultValue: () => "" },
    { key: "filename", converter: so.converters.USVString, defaultValue: () => "" },
    { key: "lineno", converter: so.converters["unsigned long"], defaultValue: () => 0 },
    { key: "colno", converter: so.converters["unsigned long"], defaultValue: () => 0 },
    { key: "error", converter: so.converters.any },
  ]);
  Zri.exports = { MessageEvent: Nle, CloseEvent: ist, ErrorEvent: ost, createFastMessageEvent: $ha };
});