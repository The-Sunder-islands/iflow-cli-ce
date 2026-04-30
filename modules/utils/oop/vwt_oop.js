/**
 * @module vwt
 * @category utils/oop
 * @label oop
 * @position 408 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vwt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vwt = T((eg) => {
  "use strict";
  Object.defineProperty(eg, "__esModule", { value: !0 });
  eg.massUnwrap = eg.unwrap = eg.massWrap = eg.wrap = void 0;
  var m2 = console.error.bind(console);
  function Qge(t, e, r) {
    let n = !!t[e] && Object.prototype.propertyIsEnumerable.call(t, e);
    Object.defineProperty(t, e, { configurable: !0, enumerable: n, writable: !0, value: r });
  }
  var UPo = (t, e, r) => {
    if (!t || !t[e]) {
      m2("no original function " + String(e) + " to wrap");
      return;
    }
    if (!r) {
      (m2("no wrapper function"), m2(new Error().stack));
      return;
    }
    let n = t[e];
    if (typeof n != "function" || typeof r != "function") {
      m2("original object and wrapper must be functions");
      return;
    }
    let o = r(n, e);
    return (
      Qge(o, "__original", n),
      Qge(o, "__unwrap", () => {
        t[e] === o && Qge(t, e, n);
      }),
      Qge(o, "__wrapped", !0),
      Qge(t, e, o),
      o
    );
  };
  eg.wrap = UPo;
  var $Po = (t, e, r) => {
    if (t) Array.isArray(t) || (t = [t]);
    else {
      (m2("must provide one or more modules to patch"), m2(new Error().stack));
      return;
    }
    if (!(e && Array.isArray(e))) {
      m2("must provide one or more functions to wrap on modules");
      return;
    }
    t.forEach((n) => {
      e.forEach((o) => {
        (0, eg.wrap)(n, o, r);
      });
    });
  };
  eg.massWrap = $Po;
  var jPo = (t, e) => {
    if (!t || !t[e]) {
      (m2("no function to unwrap."), m2(new Error().stack));
      return;
    }
    let r = t[e];
    if (!r.__unwrap) m2("no original to unwrap to -- has " + String(e) + " already been unwrapped?");
    else {
      r.__unwrap();
      return;
    }
  };
  eg.unwrap = jPo;
  var QPo = (t, e) => {
    if (t) Array.isArray(t) || (t = [t]);
    else {
      (m2("must provide one or more modules to patch"), m2(new Error().stack));
      return;
    }
    if (!(e && Array.isArray(e))) {
      m2("must provide one or more functions to unwrap on modules");
      return;
    }
    t.forEach((r) => {
      e.forEach((n) => {
        (0, eg.unwrap)(r, n);
      });
    });
  };
  eg.massUnwrap = QPo;
  function Gge(t) {
    t &&
      t.logger &&
      (typeof t.logger != "function" ? m2("new logger isn't a function, not replacing") : (m2 = t.logger));
  }
  eg.default = Gge;
  Gge.wrap = eg.wrap;
  Gge.massWrap = eg.massWrap;
  Gge.unwrap = eg.unwrap;
  Gge.massUnwrap = eg.massUnwrap;
});