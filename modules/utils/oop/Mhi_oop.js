/**
 * @module Mhi
 * @category utils/oop
 * @label oop
 * @position 1677 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Mhi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Mhi = T((VQc, Lhi) => {
  "use strict";
  Lhi.exports = function (t, e, r, n) {
    var o = t._async,
      s = AN().Warning,
      a = Z0(),
      u = f$(),
      c = a.canAttachTrace,
      m,
      d,
      f = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,
      p = /\((?:timers\.js):\d+:\d+\)/,
      h = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,
      g = null,
      b = null,
      A = !1,
      y,
      E = !!(a.env("BLUEBIRD_DEBUG") != 0 && (a.env("BLUEBIRD_DEBUG") || a.env("NODE_ENV") === "development")),
      v = !!(a.env("BLUEBIRD_WARNINGS") != 0 && (E || a.env("BLUEBIRD_WARNINGS"))),
      C = !!(a.env("BLUEBIRD_LONG_STACK_TRACES") != 0 && (E || a.env("BLUEBIRD_LONG_STACK_TRACES"))),
      x = a.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 && (v || !!a.env("BLUEBIRD_W_FORGOTTEN_RETURN")),
      k;
    ((function () {
      var Le = [];
      function Fe() {
        for (var He = 0; He < Le.length; ++He) Le[He]._notifyUnhandledRejection();
        je();
      }
      function je() {
        Le.length = 0;
      }
      ((k = function (He) {
        (Le.push(He), setTimeout(Fe, 1));
      }),
        u.defineProperty(t, "_unhandledRejectionCheck", { value: Fe }),
        u.defineProperty(t, "_unhandledRejectionClear", { value: je }));
    })(),
      (t.prototype.suppressUnhandledRejections = function () {
        var Le = this._target();
        Le._bitField = (Le._bitField & -1048577) | 524288;
      }),
      (t.prototype._ensurePossibleRejectionHandled = function () {
        (this._bitField & 524288) === 0 && (this._setRejectionIsUnhandled(), k(this));
      }),
      (t.prototype._notifyUnhandledRejectionIsHandled = function () {
        Ce("rejectionHandled", m, void 0, this);
      }),
      (t.prototype._setReturnedNonUndefined = function () {
        this._bitField = this._bitField | 268435456;
      }),
      (t.prototype._returnedNonUndefined = function () {
        return (this._bitField & 268435456) !== 0;
      }),
      (t.prototype._notifyUnhandledRejection = function () {
        if (this._isRejectionUnhandled()) {
          var Le = this._settledValue();
          (this._setUnhandledRejectionIsNotified(), Ce("unhandledRejection", d, Le, this));
        }
      }),
      (t.prototype._setUnhandledRejectionIsNotified = function () {
        this._bitField = this._bitField | 262144;
      }),
      (t.prototype._unsetUnhandledRejectionIsNotified = function () {
        this._bitField = this._bitField & -262145;
      }),
      (t.prototype._isUnhandledRejectionNotified = function () {
        return (this._bitField & 262144) > 0;
      }),
      (t.prototype._setRejectionIsUnhandled = function () {
        this._bitField = this._bitField | 1048576;
      }),
      (t.prototype._unsetRejectionIsUnhandled = function () {
        ((this._bitField = this._bitField & -1048577),
          this._isUnhandledRejectionNotified() &&
            (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled()));
      }),
      (t.prototype._isRejectionUnhandled = function () {
        return (this._bitField & 1048576) > 0;
      }),
      (t.prototype._warn = function (Le, Fe, je) {
        return oe(Le, Fe, je || this);
      }),
      (t.onPossiblyUnhandledRejection = function (Le) {
        var Fe = t._getContext();
        d = a.contextBind(Fe, Le);
      }),
      (t.onUnhandledRejectionHandled = function (Le) {
        var Fe = t._getContext();
        m = a.contextBind(Fe, Le);
      }));
    var R = function () {};
    ((t.longStackTraces = function () {
      if (o.haveItemsQueued() && !$e.longStackTraces)
        throw new Error(`cannot enable long stack traces after promises have been created

    See http://goo.gl/MqrFmX
`);
      if (!$e.longStackTraces && Ne()) {
        var Le = t.prototype._captureStackTrace,
          Fe = t.prototype._attachExtraTrace,
          je = t.prototype._dereferenceTrace;
        (($e.longStackTraces = !0),
          (R = function () {
            if (o.haveItemsQueued() && !$e.longStackTraces)
              throw new Error(`cannot enable long stack traces after promises have been created

    See http://goo.gl/MqrFmX
`);
            ((t.prototype._captureStackTrace = Le),
              (t.prototype._attachExtraTrace = Fe),
              (t.prototype._dereferenceTrace = je),
              e.deactivateLongStackTraces(),
              ($e.longStackTraces = !1));
          }),
          (t.prototype._captureStackTrace = ne),
          (t.prototype._attachExtraTrace = de),
          (t.prototype._dereferenceTrace = ce),
          e.activateLongStackTraces());
      }
    }),
      (t.hasLongStackTraces = function () {
        return $e.longStackTraces && Ne();
      }));
    var P = {
        unhandledrejection: {
          before: function () {
            var Le = a.global.onunhandledrejection;
            return ((a.global.onunhandledrejection = null), Le);
          },
          after: function (Le) {
            a.global.onunhandledrejection = Le;
          },
        },
        rejectionhandled: {
          before: function () {
            var Le = a.global.onrejectionhandled;
            return ((a.global.onrejectionhandled = null), Le);
          },
          after: function (Le) {
            a.global.onrejectionhandled = Le;
          },
        },
      },
      D = (function () {
        var Le = function (je, He) {
          if (je) {
            var mt;
            try {
              return ((mt = je.before()), !a.global.dispatchEvent(He));
            } finally {
              je.after(mt);
            }
          } else return !a.global.dispatchEvent(He);
        };
        try {
          if (typeof CustomEvent == "function") {
            var Fe = new CustomEvent("CustomEvent");
            return (
              a.global.dispatchEvent(Fe),
              function (je, He) {
                je = je.toLowerCase();
                var mt = { detail: He, cancelable: !0 },
                  kt = new CustomEvent(je, mt);
                return (
                  u.defineProperty(kt, "promise", { value: He.promise }),
                  u.defineProperty(kt, "reason", { value: He.reason }),
                  Le(P[je], kt)
                );
              }
            );
          } else if (typeof Event == "function") {
            var Fe = new Event("CustomEvent");
            return (
              a.global.dispatchEvent(Fe),
              function (He, mt) {
                He = He.toLowerCase();
                var kt = new Event(He, { cancelable: !0 });
                return (
                  (kt.detail = mt),
                  u.defineProperty(kt, "promise", { value: mt.promise }),
                  u.defineProperty(kt, "reason", { value: mt.reason }),
                  Le(P[He], kt)
                );
              }
            );
          } else {
            var Fe = document.createEvent("CustomEvent");
            return (
              Fe.initCustomEvent("testingtheevent", !1, !0, {}),
              a.global.dispatchEvent(Fe),
              function (He, mt) {
                He = He.toLowerCase();
                var kt = document.createEvent("CustomEvent");
                return (kt.initCustomEvent(He, !1, !0, mt), Le(P[He], kt));
              }
            );
          }
        } catch {}
        return function () {
          return !1;
        };
      })(),
      O = (function () {
        return a.isNode
          ? function () {
              return process.emit.apply(process, arguments);
            }
          : a.global
            ? function (Le) {
                var Fe = "on" + Le.toLowerCase(),
                  je = a.global[Fe];
                return je ? (je.apply(a.global, [].slice.call(arguments, 1)), !0) : !1;
              }
            : function () {
                return !1;
              };
      })();
    function N(Le, Fe) {
      return { promise: Fe };
    }
    var F = {
        promiseCreated: N,
        promiseFulfilled: N,
        promiseRejected: N,
        promiseResolved: N,
        promiseCancelled: N,
        promiseChained: function (Le, Fe, je) {
          return { promise: Fe, child: je };
        },
        warning: function (Le, Fe) {
          return { warning: Fe };
        },
        unhandledRejection: function (Le, Fe, je) {
          return { reason: Fe, promise: je };
        },
        rejectionHandled: N,
      },
      B = function (Le) {
        var Fe = !1;
        try {
          Fe = O.apply(null, arguments);
        } catch (He) {
          (o.throwLater(He), (Fe = !0));
        }
        var je = !1;
        try {
          je = D(Le, F[Le].apply(null, arguments));
        } catch (He) {
          (o.throwLater(He), (je = !0));
        }
        return je || Fe;
      };
    t.config = function (Le) {
      if (
        ((Le = Object(Le)),
        "longStackTraces" in Le &&
          (Le.longStackTraces ? t.longStackTraces() : !Le.longStackTraces && t.hasLongStackTraces() && R()),
        "warnings" in Le)
      ) {
        var Fe = Le.warnings;
        (($e.warnings = !!Fe),
          (x = $e.warnings),
          a.isObject(Fe) && "wForgottenReturn" in Fe && (x = !!Fe.wForgottenReturn));
      }
      if ("cancellation" in Le && Le.cancellation && !$e.cancellation) {
        if (o.haveItemsQueued()) throw new Error("cannot enable cancellation after promises are in use");
        ((t.prototype._clearCancellationData = U),
          (t.prototype._propagateFrom = Y),
          (t.prototype._onCancel = K),
          (t.prototype._setOnCancel = H),
          (t.prototype._attachCancellationCallback = Q),
          (t.prototype._execute = G),
          (J = Y),
          ($e.cancellation = !0));
      }
      if (
        ("monitoring" in Le &&
          (Le.monitoring && !$e.monitoring
            ? (($e.monitoring = !0), (t.prototype._fireEvent = B))
            : !Le.monitoring && $e.monitoring && (($e.monitoring = !1), (t.prototype._fireEvent = L))),
        "asyncHooks" in Le && a.nodeSupportsAsyncResource)
      ) {
        var je = $e.asyncHooks,
          He = !!Le.asyncHooks;
        je !== He && (($e.asyncHooks = He), He ? r() : n());
      }
      return t;
    };
    function L() {
      return !1;
    }
    ((t.prototype._fireEvent = L),
      (t.prototype._execute = function (Le, Fe, je) {
        try {
          Le(Fe, je);
        } catch (He) {
          return He;
        }
      }),
      (t.prototype._onCancel = function () {}),
      (t.prototype._setOnCancel = function (Le) {}),
      (t.prototype._attachCancellationCallback = function (Le) {}),
      (t.prototype._captureStackTrace = function () {}),
      (t.prototype._attachExtraTrace = function () {}),
      (t.prototype._dereferenceTrace = function () {}),
      (t.prototype._clearCancellationData = function () {}),
      (t.prototype._propagateFrom = function (Le, Fe) {}));
    function G(Le, Fe, je) {
      var He = this;
      try {
        Le(Fe, je, function (mt) {
          if (typeof mt != "function") throw new TypeError("onCancel must be a function, got: " + a.toString(mt));
          He._attachCancellationCallback(mt);
        });
      } catch (mt) {
        return mt;
      }
    }
    function Q(Le) {
      if (!this._isCancellable()) return this;
      var Fe = this._onCancel();
      Fe !== void 0 ? (a.isArray(Fe) ? Fe.push(Le) : this._setOnCancel([Fe, Le])) : this._setOnCancel(Le);
    }
    function K() {
      return this._onCancelField;
    }
    function H(Le) {
      this._onCancelField = Le;
    }
    function U() {
      ((this._cancellationParent = void 0), (this._onCancelField = void 0));
    }
    function Y(Le, Fe) {
      if ((Fe & 1) !== 0) {
        this._cancellationParent = Le;
        var je = Le._branchesRemainingToCancel;
        (je === void 0 && (je = 0), (Le._branchesRemainingToCancel = je + 1));
      }
      (Fe & 2) !== 0 && Le._isBound() && this._setBoundTo(Le._boundTo);
    }
    function X(Le, Fe) {
      (Fe & 2) !== 0 && Le._isBound() && this._setBoundTo(Le._boundTo);
    }
    var J = X;
    function q() {
      var Le = this._boundTo;
      return Le !== void 0 && Le instanceof t ? (Le.isFulfilled() ? Le.value() : void 0) : Le;
    }
    function ne() {
      this._trace = new Ie(this._peekContext());
    }
    function de(Le, Fe) {
      if (c(Le)) {
        var je = this._trace;
        if ((je !== void 0 && Fe && (je = je._parent), je !== void 0)) je.attachExtraTrace(Le);
        else if (!Le.__stackCleaned__) {
          var He = V(Le);
          (a.notEnumerableProp(
            Le,
            "stack",
            He.message +
              `
` +
              He.stack.join(`
`),
          ),
            a.notEnumerableProp(Le, "__stackCleaned__", !0));
        }
      }
    }
    function ce() {
      this._trace = void 0;
    }
    function ye(Le, Fe, je, He, mt) {
      if (Le === void 0 && Fe !== null && x) {
        if ((mt !== void 0 && mt._returnedNonUndefined()) || (He._bitField & 65535) === 0) return;
        je && (je = je + " ");
        var kt = "",
          $t = "";
        if (Fe._trace) {
          for (
            var we = Fe._trace.stack.split(`
`),
              Te = fe(we),
              Pe = Te.length - 1;
            Pe >= 0;
            --Pe
          ) {
            var tt = Te[Pe];
            if (!p.test(tt)) {
              var Je = tt.match(h);
              Je && (kt = "at " + Je[1] + ":" + Je[2] + ":" + Je[3] + " ");
              break;
            }
          }
          if (Te.length > 0) {
            for (var ze = Te[0], Pe = 0; Pe < we.length; ++Pe)
              if (we[Pe] === ze) {
                Pe > 0 &&
                  ($t =
                    `
` + we[Pe - 1]);
                break;
              }
          }
        }
        var ct =
          "a promise was created in a " +
          je +
          "handler " +
          kt +
          "but was not returned from it, see http://goo.gl/rRqMUw" +
          $t;
        He._warn(ct, !0, Fe);
      }
    }
    function Z(Le, Fe) {
      var je = Le + " is deprecated and will be removed in a future version.";
      return (Fe && (je += " Use " + Fe + " instead."), oe(je));
    }
    function oe(Le, Fe, je) {
      if ($e.warnings) {
        var He = new s(Le),
          mt;
        if (Fe) je._attachExtraTrace(He);
        else if ($e.longStackTraces && (mt = t._peekContext())) mt.attachExtraTrace(He);
        else {
          var kt = V(He);
          He.stack =
            kt.message +
            `
` +
            kt.stack.join(`
`);
        }
        B("warning", He) || ee(He, "", !0);
      }
    }
    function ue(Le, Fe) {
      for (var je = 0; je < Fe.length - 1; ++je)
        (Fe[je].push("From previous event:"),
          (Fe[je] = Fe[je].join(`
`)));
      return (
        je < Fe.length &&
          (Fe[je] = Fe[je].join(`
`)),
        Le +
          `
` +
          Fe.join(`
`)
      );
    }
    function he(Le) {
      for (var Fe = 0; Fe < Le.length; ++Fe)
        (Le[Fe].length === 0 || (Fe + 1 < Le.length && Le[Fe][0] === Le[Fe + 1][0])) && (Le.splice(Fe, 1), Fe--);
    }
    function se(Le) {
      for (var Fe = Le[0], je = 1; je < Le.length; ++je) {
        for (var He = Le[je], mt = Fe.length - 1, kt = Fe[mt], $t = -1, we = He.length - 1; we >= 0; --we)
          if (He[we] === kt) {
            $t = we;
            break;
          }
        for (var we = $t; we >= 0; --we) {
          var Te = He[we];
          if (Fe[mt] === Te) (Fe.pop(), mt--);
          else break;
        }
        Fe = He;
      }
    }
    function fe(Le) {
      for (var Fe = [], je = 0; je < Le.length; ++je) {
        var He = Le[je],
          mt = He === "    (No stack trace)" || g.test(He),
          kt = mt && Ge(He);
        mt && !kt && (A && He.charAt(0) !== " " && (He = "    " + He), Fe.push(He));
      }
      return Fe;
    }
    function ge(Le) {
      for (
        var Fe = Le.stack.replace(/\s+$/g, "").split(`
`),
          je = 0;
        je < Fe.length;
        ++je
      ) {
        var He = Fe[je];
        if (He === "    (No stack trace)" || g.test(He)) break;
      }
      return (je > 0 && Le.name != "SyntaxError" && (Fe = Fe.slice(je)), Fe);
    }
    function V(Le) {
      var Fe = Le.stack,
        je = Le.toString();
      return (
        (Fe = typeof Fe == "string" && Fe.length > 0 ? ge(Le) : ["    (No stack trace)"]),
        { message: je, stack: Le.name == "SyntaxError" ? Fe : fe(Fe) }
      );
    }
    function ee(Le, Fe, je) {
      if (typeof console < "u") {
        var He;
        if (a.isObject(Le)) {
          var mt = Le.stack;
          He = Fe + b(mt, Le);
        } else He = Fe + String(Le);
        typeof y == "function"
          ? y(He, je)
          : (typeof console.log == "function" || typeof console.log == "object") && console.log(He);
      }
    }
    function Ce(Le, Fe, je, He) {
      var mt = !1;
      try {
        typeof Fe == "function" && ((mt = !0), Le === "rejectionHandled" ? Fe(He) : Fe(je, He));
      } catch (kt) {
        o.throwLater(kt);
      }
      Le === "unhandledRejection" ? !B(Le, je, He) && !mt && ee(je, "Unhandled rejection ") : B(Le, He);
    }
    function pe(Le) {
      var Fe;
      if (typeof Le == "function") Fe = "[function " + (Le.name || "anonymous") + "]";
      else {
        Fe = Le && typeof Le.toString == "function" ? Le.toString() : a.toString(Le);
        var je = /\[object [a-zA-Z0-9$_]+\]/;
        if (je.test(Fe))
          try {
            var He = JSON.stringify(Le);
            Fe = He;
          } catch {}
        Fe.length === 0 && (Fe = "(empty array)");
      }
      return "(<" + be(Fe) + ">, no stack trace)";
    }
    function be(Le) {
      var Fe = 41;
      return Le.length < Fe ? Le : Le.substr(0, Fe - 3) + "...";
    }
    function Ne() {
      return typeof ke == "function";
    }
    var Ge = function () {
        return !1;
      },
      Ze = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
    function Ye(Le) {
      var Fe = Le.match(Ze);
      if (Fe) return { fileName: Fe[1], line: parseInt(Fe[2], 10) };
    }
    function _e(Le, Fe) {
      if (Ne()) {
        for (
          var je = (Le.stack || "").split(`
`),
            He = (Fe.stack || "").split(`
`),
            mt = -1,
            kt = -1,
            $t,
            we,
            Te = 0;
          Te < je.length;
          ++Te
        ) {
          var Pe = Ye(je[Te]);
          if (Pe) {
            (($t = Pe.fileName), (mt = Pe.line));
            break;
          }
        }
        for (var Te = 0; Te < He.length; ++Te) {
          var Pe = Ye(He[Te]);
          if (Pe) {
            ((we = Pe.fileName), (kt = Pe.line));
            break;
          }
        }
        mt < 0 ||
          kt < 0 ||
          !$t ||
          !we ||
          $t !== we ||
          mt >= kt ||
          (Ge = function (tt) {
            if (f.test(tt)) return !0;
            var Je = Ye(tt);
            return !!(Je && Je.fileName === $t && mt <= Je.line && Je.line <= kt);
          });
      }
    }
    function Ie(Le) {
      ((this._parent = Le), (this._promisesCreated = 0));
      var Fe = (this._length = 1 + (Le === void 0 ? 0 : Le._length));
      (ke(this, Ie), Fe > 32 && this.uncycle());
    }
    (a.inherits(Ie, Error),
      (e.CapturedTrace = Ie),
      (Ie.prototype.uncycle = function () {
        var Le = this._length;
        if (!(Le < 2)) {
          for (var Fe = [], je = {}, He = 0, mt = this; mt !== void 0; ++He) (Fe.push(mt), (mt = mt._parent));
          Le = this._length = He;
          for (var He = Le - 1; He >= 0; --He) {
            var kt = Fe[He].stack;
            je[kt] === void 0 && (je[kt] = He);
          }
          for (var He = 0; He < Le; ++He) {
            var $t = Fe[He].stack,
              we = je[$t];
            if (we !== void 0 && we !== He) {
              (we > 0 && ((Fe[we - 1]._parent = void 0), (Fe[we - 1]._length = 1)),
                (Fe[He]._parent = void 0),
                (Fe[He]._length = 1));
              var Te = He > 0 ? Fe[He - 1] : this;
              we < Le - 1
                ? ((Te._parent = Fe[we + 1]), Te._parent.uncycle(), (Te._length = Te._parent._length + 1))
                : ((Te._parent = void 0), (Te._length = 1));
              for (var Pe = Te._length + 1, tt = He - 2; tt >= 0; --tt) ((Fe[tt]._length = Pe), Pe++);
              return;
            }
          }
        }
      }),
      (Ie.prototype.attachExtraTrace = function (Le) {
        if (!Le.__stackCleaned__) {
          this.uncycle();
          for (var Fe = V(Le), je = Fe.message, He = [Fe.stack], mt = this; mt !== void 0; )
            (He.push(
              fe(
                mt.stack.split(`
`),
              ),
            ),
              (mt = mt._parent));
          (se(He),
            he(He),
            a.notEnumerableProp(Le, "stack", ue(je, He)),
            a.notEnumerableProp(Le, "__stackCleaned__", !0));
        }
      }));
    var ke = (function () {
      var Fe = /^\s*at\s*/,
        je = function ($t, we) {
          return typeof $t == "string" ? $t : we.name !== void 0 && we.message !== void 0 ? we.toString() : pe(we);
        };
      if (typeof Error.stackTraceLimit == "number" && typeof Error.captureStackTrace == "function") {
        ((Error.stackTraceLimit += 6), (g = Fe), (b = je));
        var He = Error.captureStackTrace;
        return (
          (Ge = function ($t) {
            return f.test($t);
          }),
          function ($t, we) {
            ((Error.stackTraceLimit += 6), He($t, we), (Error.stackTraceLimit -= 6));
          }
        );
      }
      var mt = new Error();
      if (
        typeof mt.stack == "string" &&
        mt.stack
          .split(
            `
`,
          )[0]
          .indexOf("stackDetection@") >= 0
      )
        return (
          (g = /@/),
          (b = je),
          (A = !0),
          function (we) {
            we.stack = new Error().stack;
          }
        );
      var kt;
      try {
        throw new Error();
      } catch ($t) {
        kt = "stack" in $t;
      }
      return !("stack" in mt) && kt && typeof Error.stackTraceLimit == "number"
        ? ((g = Fe),
          (b = je),
          function (we) {
            Error.stackTraceLimit += 6;
            try {
              throw new Error();
            } catch (Te) {
              we.stack = Te.stack;
            }
            Error.stackTraceLimit -= 6;
          })
        : ((b = function ($t, we) {
            return typeof $t == "string"
              ? $t
              : (typeof we == "object" || typeof we == "function") && we.name !== void 0 && we.message !== void 0
                ? we.toString()
                : pe(we);
          }),
          null);
    })([]);
    typeof console < "u" &&
      typeof console.warn < "u" &&
      ((y = function (Le) {
        console.warn(Le);
      }),
      a.isNode && process.stderr.isTTY
        ? (y = function (Le, Fe) {
            var je = Fe ? "\x1B[33m" : "\x1B[31m";
            console.warn(
              je +
                Le +
                `\x1B[0m
`,
            );
          })
        : !a.isNode &&
          typeof new Error().stack == "string" &&
          (y = function (Le, Fe) {
            console.warn("%c" + Le, Fe ? "color: darkorange" : "color: red");
          }));
    var $e = { warnings: v, longStackTraces: !1, cancellation: !1, monitoring: !1, asyncHooks: !1 };
    return (
      C && t.longStackTraces(),
      {
        asyncHooks: function () {
          return $e.asyncHooks;
        },
        longStackTraces: function () {
          return $e.longStackTraces;
        },
        warnings: function () {
          return $e.warnings;
        },
        cancellation: function () {
          return $e.cancellation;
        },
        monitoring: function () {
          return $e.monitoring;
        },
        propagateFromFunction: function () {
          return J;
        },
        boundValueFunction: function () {
          return q;
        },
        checkForgottenReturns: ye,
        setBounds: _e,
        warn: oe,
        deprecated: Z,
        CapturedTrace: Ie,
        fireDomEvent: D,
        fireGlobalEvent: O,
      }
    );
  };
});