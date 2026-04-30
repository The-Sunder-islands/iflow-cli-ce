/**
 * @module dxr
 * @category network/grpc
 * @label grpc
 * @position 19 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dxr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dxr = T((fyu, mxr) => {
  "use strict";
  var { kForOnEventAttribute: Phe, kListener: b9t } = eR(),
    ixr = Symbol("kCode"),
    oxr = Symbol("kData"),
    sxr = Symbol("kError"),
    axr = Symbol("kMessage"),
    uxr = Symbol("kReason"),
    aee = Symbol("kTarget"),
    cxr = Symbol("kType"),
    lxr = Symbol("kWasClean"),
    rR = class {
      constructor(e) {
        ((this[aee] = null), (this[cxr] = e));
      }
      get target() {
        return this[aee];
      }
      get type() {
        return this[cxr];
      }
    };
  Object.defineProperty(rR.prototype, "target", { enumerable: !0 });
  Object.defineProperty(rR.prototype, "type", { enumerable: !0 });
  var sG = class extends rR {
    constructor(e, r = {}) {
      (super(e),
        (this[ixr] = r.code === void 0 ? 0 : r.code),
        (this[uxr] = r.reason === void 0 ? "" : r.reason),
        (this[lxr] = r.wasClean === void 0 ? !1 : r.wasClean));
    }
    get code() {
      return this[ixr];
    }
    get reason() {
      return this[uxr];
    }
    get wasClean() {
      return this[lxr];
    }
  };
  Object.defineProperty(sG.prototype, "code", { enumerable: !0 });
  Object.defineProperty(sG.prototype, "reason", { enumerable: !0 });
  Object.defineProperty(sG.prototype, "wasClean", { enumerable: !0 });
  var uee = class extends rR {
    constructor(e, r = {}) {
      (super(e),
        (this[sxr] = r.error === void 0 ? null : r.error),
        (this[axr] = r.message === void 0 ? "" : r.message));
    }
    get error() {
      return this[sxr];
    }
    get message() {
      return this[axr];
    }
  };
  Object.defineProperty(uee.prototype, "error", { enumerable: !0 });
  Object.defineProperty(uee.prototype, "message", { enumerable: !0 });
  var Bhe = class extends rR {
    constructor(e, r = {}) {
      (super(e), (this[oxr] = r.data === void 0 ? null : r.data));
    }
    get data() {
      return this[oxr];
    }
  };
  Object.defineProperty(Bhe.prototype, "data", { enumerable: !0 });
  var Zlo = {
    addEventListener(t, e, r = {}) {
      for (let o of this.listeners(t)) if (!r[Phe] && o[b9t] === e && !o[Phe]) return;
      let n;
      if (t === "message")
        n = function (s, a) {
          let u = new Bhe("message", { data: a ? s : s.toString() });
          ((u[aee] = this), dRe(e, this, u));
        };
      else if (t === "close")
        n = function (s, a) {
          let u = new sG("close", {
            code: s,
            reason: a.toString(),
            wasClean: this._closeFrameReceived && this._closeFrameSent,
          });
          ((u[aee] = this), dRe(e, this, u));
        };
      else if (t === "error")
        n = function (s) {
          let a = new uee("error", { error: s, message: s.message });
          ((a[aee] = this), dRe(e, this, a));
        };
      else if (t === "open")
        n = function () {
          let s = new rR("open");
          ((s[aee] = this), dRe(e, this, s));
        };
      else return;
      ((n[Phe] = !!r[Phe]), (n[b9t] = e), r.once ? this.once(t, n) : this.on(t, n));
    },
    removeEventListener(t, e) {
      for (let r of this.listeners(t))
        if (r[b9t] === e && !r[Phe]) {
          this.removeListener(t, r);
          break;
        }
    },
  };
  mxr.exports = { CloseEvent: sG, ErrorEvent: uee, Event: rR, EventTarget: Zlo, MessageEvent: Bhe };
  function dRe(t, e, r) {
    typeof t == "object" && t.handleEvent ? t.handleEvent.call(t, r) : t.call(e, r);
  }
});