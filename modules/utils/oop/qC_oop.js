/**
 * @module qC
 * @category utils/oop
 * @label oop
 * @position 177 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qC) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qC = T((od) => {
  "use strict";
  Object.defineProperty(od, "__esModule", { value: !0 });
  od.equalsCaseInsensitive =
    od.binarySearchUB =
    od.setEquals =
    od.FlatMap =
    od.isPromiseAllSettledRejectionResult =
    od.PromiseAllSettled =
    od.callWithTimeout =
    od.TimeoutError =
    od.instrumentationScopeId =
    od.hashAttributes =
    od.isNotNullish =
      void 0;
  function Bxo(t) {
    return t != null;
  }
  od.isNotNullish = Bxo;
  function Lxo(t) {
    let e = Object.keys(t);
    return e.length === 0 ? "" : ((e = e.sort()), JSON.stringify(e.map((r) => [r, t[r]])));
  }
  od.hashAttributes = Lxo;
  function Mxo(t) {
    return `${t.name}:${t.version ?? ""}:${t.schemaUrl ?? ""}`;
  }
  od.instrumentationScopeId = Mxo;
  var JNe = class t extends Error {
    constructor(e) {
      (super(e), Object.setPrototypeOf(this, t.prototype));
    }
  };
  od.TimeoutError = JNe;
  function Fxo(t, e) {
    let r,
      n = new Promise(function (s, a) {
        r = setTimeout(function () {
          a(new JNe("Operation timed out."));
        }, e);
      });
    return Promise.race([t, n]).then(
      (o) => (clearTimeout(r), o),
      (o) => {
        throw (clearTimeout(r), o);
      },
    );
  }
  od.callWithTimeout = Fxo;
  async function Uxo(t) {
    return Promise.all(
      t.map(async (e) => {
        try {
          return { status: "fulfilled", value: await e };
        } catch (r) {
          return { status: "rejected", reason: r };
        }
      }),
    );
  }
  od.PromiseAllSettled = Uxo;
  function $xo(t) {
    return t.status === "rejected";
  }
  od.isPromiseAllSettledRejectionResult = $xo;
  function jxo(t, e) {
    let r = [];
    return (
      t.forEach((n) => {
        r.push(...e(n));
      }),
      r
    );
  }
  od.FlatMap = jxo;
  function Qxo(t, e) {
    if (t.size !== e.size) return !1;
    for (let r of t) if (!e.has(r)) return !1;
    return !0;
  }
  od.setEquals = Qxo;
  function Gxo(t, e) {
    let r = 0,
      n = t.length - 1,
      o = t.length;
    for (; n >= r; ) {
      let s = r + Math.trunc((n - r) / 2);
      t[s] < e ? (r = s + 1) : ((o = s), (n = s - 1));
    }
    return o;
  }
  od.binarySearchUB = Gxo;
  function qxo(t, e) {
    return t.toLowerCase() === e.toLowerCase();
  }
  od.equalsCaseInsensitive = qxo;
});