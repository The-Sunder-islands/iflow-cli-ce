/**
 * @module YHt
 * @category utils/oop
 * @label oop
 * @position 999 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (YHt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var YHt = T((REn) => {
  (function (t, e) {
    "use strict";
    if (t.setImmediate) return;
    var r = 1,
      n = {},
      o = !1,
      s = t.document,
      a;
    function u(E) {
      typeof E != "function" && (E = new Function("" + E));
      for (var v = new Array(arguments.length - 1), C = 0; C < v.length; C++) v[C] = arguments[C + 1];
      var x = { callback: E, args: v };
      return ((n[r] = x), a(r), r++);
    }
    function c(E) {
      delete n[E];
    }
    function m(E) {
      var v = E.callback,
        C = E.args;
      switch (C.length) {
        case 0:
          v();
          break;
        case 1:
          v(C[0]);
          break;
        case 2:
          v(C[0], C[1]);
          break;
        case 3:
          v(C[0], C[1], C[2]);
          break;
        default:
          v.apply(e, C);
          break;
      }
    }
    function d(E) {
      if (o) setTimeout(d, 0, E);
      else {
        var v = n[E];
        if (v) {
          o = !0;
          try {
            m(v);
          } finally {
            (c(E), (o = !1));
          }
        }
      }
    }
    function f() {
      a = function (E) {
        process.nextTick(function () {
          d(E);
        });
      };
    }
    function p() {
      if (t.postMessage && !t.importScripts) {
        var E = !0,
          v = t.onmessage;
        return (
          (t.onmessage = function () {
            E = !1;
          }),
          t.postMessage("", "*"),
          (t.onmessage = v),
          E
        );
      }
    }
    function h() {
      var E = "setImmediate$" + Math.random() + "$",
        v = function (C) {
          C.source === t && typeof C.data == "string" && C.data.indexOf(E) === 0 && d(+C.data.slice(E.length));
        };
      (t.addEventListener ? t.addEventListener("message", v, !1) : t.attachEvent("onmessage", v),
        (a = function (C) {
          t.postMessage(E + C, "*");
        }));
    }
    function g() {
      var E = new MessageChannel();
      ((E.port1.onmessage = function (v) {
        var C = v.data;
        d(C);
      }),
        (a = function (v) {
          E.port2.postMessage(v);
        }));
    }
    function b() {
      var E = s.documentElement;
      a = function (v) {
        var C = s.createElement("script");
        ((C.onreadystatechange = function () {
          (d(v), (C.onreadystatechange = null), E.removeChild(C), (C = null));
        }),
          E.appendChild(C));
      };
    }
    function A() {
      a = function (E) {
        setTimeout(d, 0, E);
      };
    }
    var y = Object.getPrototypeOf && Object.getPrototypeOf(t);
    ((y = y && y.setTimeout ? y : t),
      {}.toString.call(t.process) === "[object process]"
        ? f()
        : p()
          ? h()
          : t.MessageChannel
            ? g()
            : s && "onreadystatechange" in s.createElement("script")
              ? b()
              : A(),
      (y.setImmediate = u),
      (y.clearImmediate = c));
  })(typeof self > "u" ? (typeof global > "u" ? REn : global) : self);
});