/**
 * @module Iyn
 * @category utils/oop
 * @label oop
 * @position 948 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Iyn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Iyn = T((lhc, Dyn) => {
  "use strict";
  Dyn.exports = function (t, e) {
    var r = t._getDomain,
      n = t._async,
      o = Nk().Warning,
      s = C0(),
      a = s.canAttachTrace,
      u,
      c,
      m = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,
      d = /\((?:timers\.js):\d+:\d+\)/,
      f = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,
      p = null,
      h = null,
      g = !1,
      b,
      A = !!(s.env("BLUEBIRD_DEBUG") != 0 && (s.env("BLUEBIRD_DEBUG") || s.env("NODE_ENV") === "development")),
      y = !!(s.env("BLUEBIRD_WARNINGS") != 0 && (A || s.env("BLUEBIRD_WARNINGS"))),
      E = !!(s.env("BLUEBIRD_LONG_STACK_TRACES") != 0 && (A || s.env("BLUEBIRD_LONG_STACK_TRACES"))),
      v = s.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 && (y || !!s.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
    ((t.prototype.suppressUnhandledRejections = function () {
      var Ye = this._target();
      Ye._bitField = (Ye._bitField & -1048577) | 524288;
    }),
      (t.prototype._ensurePossibleRejectionHandled = function () {
        (this._bitField & 524288) === 0 &&
          (this._setRejectionIsUnhandled(), n.invokeLater(this._notifyUnhandledRejection, this, void 0));
      }),
      (t.prototype._notifyUnhandledRejectionIsHandled = function () {
        se("rejectionHandled", u, void 0, this);
      }),
      (t.prototype._setReturnedNonUndefined = function () {
        this._bitField = this._bitField | 268435456;
      }),
      (t.prototype._returnedNonUndefined = function () {
        return (this._bitField & 268435456) !== 0;
      }),
      (t.prototype._notifyUnhandledRejection = function () {
        if (this._isRejectionUnhandled()) {
          var Ye = this._settledValue();
          (this._setUnhandledRejectionIsNotified(), se("unhandledRejection", c, Ye, this));
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
      (t.prototype._warn = function (Ye, _e, Ie) {
        return ne(Ye, _e, Ie || this);
      }),
      (t.onPossiblyUnhandledRejection = function (Ye) {
        var _e = r();
        c = typeof Ye == "function" ? (_e === null ? Ye : s.domainBind(_e, Ye)) : void 0;
      }),
      (t.onUnhandledRejectionHandled = function (Ye) {
        var _e = r();
        u = typeof Ye == "function" ? (_e === null ? Ye : s.domainBind(_e, Ye)) : void 0;
      }));
    var C = function () {};
    ((t.longStackTraces = function () {
      if (n.haveItemsQueued() && !Ze.longStackTraces)
        throw new Error(`cannot enable long stack traces after promises have been created

    See http://goo.gl/MqrFmX
`);
      if (!Ze.longStackTraces && V()) {
        var Ye = t.prototype._captureStackTrace,
          _e = t.prototype._attachExtraTrace;
        ((Ze.longStackTraces = !0),
          (C = function () {
            if (n.haveItemsQueued() && !Ze.longStackTraces)
              throw new Error(`cannot enable long stack traces after promises have been created

    See http://goo.gl/MqrFmX
`);
            ((t.prototype._captureStackTrace = Ye),
              (t.prototype._attachExtraTrace = _e),
              e.deactivateLongStackTraces(),
              n.enableTrampoline(),
              (Ze.longStackTraces = !1));
          }),
          (t.prototype._captureStackTrace = Y),
          (t.prototype._attachExtraTrace = X),
          e.activateLongStackTraces(),
          n.disableTrampolineIfNecessary());
      }
    }),
      (t.hasLongStackTraces = function () {
        return Ze.longStackTraces && V();
      }));
    var x = (function () {
        try {
          if (typeof CustomEvent == "function") {
            var Ye = new CustomEvent("CustomEvent");
            return (
              s.global.dispatchEvent(Ye),
              function (_e, Ie) {
                var ke = new CustomEvent(_e.toLowerCase(), { detail: Ie, cancelable: !0 });
                return !s.global.dispatchEvent(ke);
              }
            );
          } else if (typeof Event == "function") {
            var Ye = new Event("CustomEvent");
            return (
              s.global.dispatchEvent(Ye),
              function (Ie, ke) {
                var $e = new Event(Ie.toLowerCase(), { cancelable: !0 });
                return (($e.detail = ke), !s.global.dispatchEvent($e));
              }
            );
          } else {
            var Ye = document.createEvent("CustomEvent");
            return (
              Ye.initCustomEvent("testingtheevent", !1, !0, {}),
              s.global.dispatchEvent(Ye),
              function (Ie, ke) {
                var $e = document.createEvent("CustomEvent");
                return ($e.initCustomEvent(Ie.toLowerCase(), !1, !0, ke), !s.global.dispatchEvent($e));
              }
            );
          }
        } catch {}
        return function () {
          return !1;
        };
      })(),
      k = (function () {
        return s.isNode
          ? function () {
              return process.emit.apply(process, arguments);
            }
          : s.global
            ? function (Ye) {
                var _e = "on" + Ye.toLowerCase(),
                  Ie = s.global[_e];
                return Ie ? (Ie.apply(s.global, [].slice.call(arguments, 1)), !0) : !1;
              }
            : function () {
                return !1;
              };
      })();
    function R(Ye, _e) {
      return { promise: _e };
    }
    var P = {
        promiseCreated: R,
        promiseFulfilled: R,
        promiseRejected: R,
        promiseResolved: R,
        promiseCancelled: R,
        promiseChained: function (Ye, _e, Ie) {
          return { promise: _e, child: Ie };
        },
        warning: function (Ye, _e) {
          return { warning: _e };
        },
        unhandledRejection: function (Ye, _e, Ie) {
          return { reason: _e, promise: Ie };
        },
        rejectionHandled: R,
      },
      D = function (Ye) {
        var _e = !1;
        try {
          _e = k.apply(null, arguments);
        } catch (ke) {
          (n.throwLater(ke), (_e = !0));
        }
        var Ie = !1;
        try {
          Ie = x(Ye, P[Ye].apply(null, arguments));
        } catch (ke) {
          (n.throwLater(ke), (Ie = !0));
        }
        return Ie || _e;
      };
    t.config = function (Ye) {
      if (
        ((Ye = Object(Ye)),
        "longStackTraces" in Ye &&
          (Ye.longStackTraces ? t.longStackTraces() : !Ye.longStackTraces && t.hasLongStackTraces() && C()),
        "warnings" in Ye)
      ) {
        var _e = Ye.warnings;
        ((Ze.warnings = !!_e),
          (v = Ze.warnings),
          s.isObject(_e) && "wForgottenReturn" in _e && (v = !!_e.wForgottenReturn));
      }
      if ("cancellation" in Ye && Ye.cancellation && !Ze.cancellation) {
        if (n.haveItemsQueued()) throw new Error("cannot enable cancellation after promises are in use");
        ((t.prototype._clearCancellationData = G),
          (t.prototype._propagateFrom = Q),
          (t.prototype._onCancel = B),
          (t.prototype._setOnCancel = L),
          (t.prototype._attachCancellationCallback = F),
          (t.prototype._execute = N),
          (H = Q),
          (Ze.cancellation = !0));
      }
      return (
        "monitoring" in Ye &&
          (Ye.monitoring && !Ze.monitoring
            ? ((Ze.monitoring = !0), (t.prototype._fireEvent = D))
            : !Ye.monitoring && Ze.monitoring && ((Ze.monitoring = !1), (t.prototype._fireEvent = O))),
        t
      );
    };
    function O() {
      return !1;
    }
    ((t.prototype._fireEvent = O),
      (t.prototype._execute = function (Ye, _e, Ie) {
        try {
          Ye(_e, Ie);
        } catch (ke) {
          return ke;
        }
      }),
      (t.prototype._onCancel = function () {}),
      (t.prototype._setOnCancel = function (Ye) {}),
      (t.prototype._attachCancellationCallback = function (Ye) {}),
      (t.prototype._captureStackTrace = function () {}),
      (t.prototype._attachExtraTrace = function () {}),
      (t.prototype._clearCancellationData = function () {}),
      (t.prototype._propagateFrom = function (Ye, _e) {}));
    function N(Ye, _e, Ie) {
      var ke = this;
      try {
        Ye(_e, Ie, function ($e) {
          if (typeof $e != "function") throw new TypeError("onCancel must be a function, got: " + s.toString($e));
          ke._attachCancellationCallback($e);
        });
      } catch ($e) {
        return $e;
      }
    }
    function F(Ye) {
      if (!this._isCancellable()) return this;
      var _e = this._onCancel();
      _e !== void 0 ? (s.isArray(_e) ? _e.push(Ye) : this._setOnCancel([_e, Ye])) : this._setOnCancel(Ye);
    }
    function B() {
      return this._onCancelField;
    }
    function L(Ye) {
      this._onCancelField = Ye;
    }
    function G() {
      ((this._cancellationParent = void 0), (this._onCancelField = void 0));
    }
    function Q(Ye, _e) {
      if ((_e & 1) !== 0) {
        this._cancellationParent = Ye;
        var Ie = Ye._branchesRemainingToCancel;
        (Ie === void 0 && (Ie = 0), (Ye._branchesRemainingToCancel = Ie + 1));
      }
      (_e & 2) !== 0 && Ye._isBound() && this._setBoundTo(Ye._boundTo);
    }
    function K(Ye, _e) {
      (_e & 2) !== 0 && Ye._isBound() && this._setBoundTo(Ye._boundTo);
    }
    var H = K;
    function U() {
      var Ye = this._boundTo;
      return Ye !== void 0 && Ye instanceof t ? (Ye.isFulfilled() ? Ye.value() : void 0) : Ye;
    }
    function Y() {
      this._trace = new Ne(this._peekContext());
    }
    function X(Ye, _e) {
      if (a(Ye)) {
        var Ie = this._trace;
        if ((Ie !== void 0 && _e && (Ie = Ie._parent), Ie !== void 0)) Ie.attachExtraTrace(Ye);
        else if (!Ye.__stackCleaned__) {
          var ke = ue(Ye);
          (s.notEnumerableProp(
            Ye,
            "stack",
            ke.message +
              `
` +
              ke.stack.join(`
`),
          ),
            s.notEnumerableProp(Ye, "__stackCleaned__", !0));
        }
      }
    }
    function J(Ye, _e, Ie, ke, $e) {
      if (Ye === void 0 && _e !== null && v) {
        if (($e !== void 0 && $e._returnedNonUndefined()) || (ke._bitField & 65535) === 0) return;
        Ie && (Ie = Ie + " ");
        var Le = "",
          Fe = "";
        if (_e._trace) {
          for (
            var je = _e._trace.stack.split(`
`),
              He = Z(je),
              mt = He.length - 1;
            mt >= 0;
            --mt
          ) {
            var kt = He[mt];
            if (!d.test(kt)) {
              var $t = kt.match(f);
              $t && (Le = "at " + $t[1] + ":" + $t[2] + ":" + $t[3] + " ");
              break;
            }
          }
          if (He.length > 0) {
            for (var we = He[0], mt = 0; mt < je.length; ++mt)
              if (je[mt] === we) {
                mt > 0 &&
                  (Fe =
                    `
` + je[mt - 1]);
                break;
              }
          }
        }
        var Te =
          "a promise was created in a " +
          Ie +
          "handler " +
          Le +
          "but was not returned from it, see http://goo.gl/rRqMUw" +
          Fe;
        ke._warn(Te, !0, _e);
      }
    }
    function q(Ye, _e) {
      var Ie = Ye + " is deprecated and will be removed in a future version.";
      return (_e && (Ie += " Use " + _e + " instead."), ne(Ie));
    }
    function ne(Ye, _e, Ie) {
      if (Ze.warnings) {
        var ke = new o(Ye),
          $e;
        if (_e) Ie._attachExtraTrace(ke);
        else if (Ze.longStackTraces && ($e = t._peekContext())) $e.attachExtraTrace(ke);
        else {
          var Le = ue(ke);
          ke.stack =
            Le.message +
            `
` +
            Le.stack.join(`
`);
        }
        D("warning", ke) || he(ke, "", !0);
      }
    }
    function de(Ye, _e) {
      for (var Ie = 0; Ie < _e.length - 1; ++Ie)
        (_e[Ie].push("From previous event:"),
          (_e[Ie] = _e[Ie].join(`
`)));
      return (
        Ie < _e.length &&
          (_e[Ie] = _e[Ie].join(`
`)),
        Ye +
          `
` +
          _e.join(`
`)
      );
    }
    function ce(Ye) {
      for (var _e = 0; _e < Ye.length; ++_e)
        (Ye[_e].length === 0 || (_e + 1 < Ye.length && Ye[_e][0] === Ye[_e + 1][0])) && (Ye.splice(_e, 1), _e--);
    }
    function ye(Ye) {
      for (var _e = Ye[0], Ie = 1; Ie < Ye.length; ++Ie) {
        for (var ke = Ye[Ie], $e = _e.length - 1, Le = _e[$e], Fe = -1, je = ke.length - 1; je >= 0; --je)
          if (ke[je] === Le) {
            Fe = je;
            break;
          }
        for (var je = Fe; je >= 0; --je) {
          var He = ke[je];
          if (_e[$e] === He) (_e.pop(), $e--);
          else break;
        }
        _e = ke;
      }
    }
    function Z(Ye) {
      for (var _e = [], Ie = 0; Ie < Ye.length; ++Ie) {
        var ke = Ye[Ie],
          $e = ke === "    (No stack trace)" || p.test(ke),
          Le = $e && ee(ke);
        $e && !Le && (g && ke.charAt(0) !== " " && (ke = "    " + ke), _e.push(ke));
      }
      return _e;
    }
    function oe(Ye) {
      for (
        var _e = Ye.stack.replace(/\s+$/g, "").split(`
`),
          Ie = 0;
        Ie < _e.length;
        ++Ie
      ) {
        var ke = _e[Ie];
        if (ke === "    (No stack trace)" || p.test(ke)) break;
      }
      return (Ie > 0 && Ye.name != "SyntaxError" && (_e = _e.slice(Ie)), _e);
    }
    function ue(Ye) {
      var _e = Ye.stack,
        Ie = Ye.toString();
      return (
        (_e = typeof _e == "string" && _e.length > 0 ? oe(Ye) : ["    (No stack trace)"]),
        { message: Ie, stack: Ye.name == "SyntaxError" ? _e : Z(_e) }
      );
    }
    function he(Ye, _e, Ie) {
      if (typeof console < "u") {
        var ke;
        if (s.isObject(Ye)) {
          var $e = Ye.stack;
          ke = _e + h($e, Ye);
        } else ke = _e + String(Ye);
        typeof b == "function"
          ? b(ke, Ie)
          : (typeof console.log == "function" || typeof console.log == "object") && console.log(ke);
      }
    }
    function se(Ye, _e, Ie, ke) {
      var $e = !1;
      try {
        typeof _e == "function" && (($e = !0), Ye === "rejectionHandled" ? _e(ke) : _e(Ie, ke));
      } catch (Le) {
        n.throwLater(Le);
      }
      Ye === "unhandledRejection" ? !D(Ye, Ie, ke) && !$e && he(Ie, "Unhandled rejection ") : D(Ye, ke);
    }
    function fe(Ye) {
      var _e;
      if (typeof Ye == "function") _e = "[function " + (Ye.name || "anonymous") + "]";
      else {
        _e = Ye && typeof Ye.toString == "function" ? Ye.toString() : s.toString(Ye);
        var Ie = /\[object [a-zA-Z0-9$_]+\]/;
        if (Ie.test(_e))
          try {
            var ke = JSON.stringify(Ye);
            _e = ke;
          } catch {}
        _e.length === 0 && (_e = "(empty array)");
      }
      return "(<" + ge(_e) + ">, no stack trace)";
    }
    function ge(Ye) {
      var _e = 41;
      return Ye.length < _e ? Ye : Ye.substr(0, _e - 3) + "...";
    }
    function V() {
      return typeof Ge == "function";
    }
    var ee = function () {
        return !1;
      },
      Ce = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
    function pe(Ye) {
      var _e = Ye.match(Ce);
      if (_e) return { fileName: _e[1], line: parseInt(_e[2], 10) };
    }
    function be(Ye, _e) {
      if (V()) {
        for (
          var Ie = Ye.stack.split(`
`),
            ke = _e.stack.split(`
`),
            $e = -1,
            Le = -1,
            Fe,
            je,
            He = 0;
          He < Ie.length;
          ++He
        ) {
          var mt = pe(Ie[He]);
          if (mt) {
            ((Fe = mt.fileName), ($e = mt.line));
            break;
          }
        }
        for (var He = 0; He < ke.length; ++He) {
          var mt = pe(ke[He]);
          if (mt) {
            ((je = mt.fileName), (Le = mt.line));
            break;
          }
        }
        $e < 0 ||
          Le < 0 ||
          !Fe ||
          !je ||
          Fe !== je ||
          $e >= Le ||
          (ee = function (kt) {
            if (m.test(kt)) return !0;
            var $t = pe(kt);
            return !!($t && $t.fileName === Fe && $e <= $t.line && $t.line <= Le);
          });
      }
    }
    function Ne(Ye) {
      ((this._parent = Ye), (this._promisesCreated = 0));
      var _e = (this._length = 1 + (Ye === void 0 ? 0 : Ye._length));
      (Ge(this, Ne), _e > 32 && this.uncycle());
    }
    (s.inherits(Ne, Error),
      (e.CapturedTrace = Ne),
      (Ne.prototype.uncycle = function () {
        var Ye = this._length;
        if (!(Ye < 2)) {
          for (var _e = [], Ie = {}, ke = 0, $e = this; $e !== void 0; ++ke) (_e.push($e), ($e = $e._parent));
          Ye = this._length = ke;
          for (var ke = Ye - 1; ke >= 0; --ke) {
            var Le = _e[ke].stack;
            Ie[Le] === void 0 && (Ie[Le] = ke);
          }
          for (var ke = 0; ke < Ye; ++ke) {
            var Fe = _e[ke].stack,
              je = Ie[Fe];
            if (je !== void 0 && je !== ke) {
              (je > 0 && ((_e[je - 1]._parent = void 0), (_e[je - 1]._length = 1)),
                (_e[ke]._parent = void 0),
                (_e[ke]._length = 1));
              var He = ke > 0 ? _e[ke - 1] : this;
              je < Ye - 1
                ? ((He._parent = _e[je + 1]), He._parent.uncycle(), (He._length = He._parent._length + 1))
                : ((He._parent = void 0), (He._length = 1));
              for (var mt = He._length + 1, kt = ke - 2; kt >= 0; --kt) ((_e[kt]._length = mt), mt++);
              return;
            }
          }
        }
      }),
      (Ne.prototype.attachExtraTrace = function (Ye) {
        if (!Ye.__stackCleaned__) {
          this.uncycle();
          for (var _e = ue(Ye), Ie = _e.message, ke = [_e.stack], $e = this; $e !== void 0; )
            (ke.push(
              Z(
                $e.stack.split(`
`),
              ),
            ),
              ($e = $e._parent));
          (ye(ke),
            ce(ke),
            s.notEnumerableProp(Ye, "stack", de(Ie, ke)),
            s.notEnumerableProp(Ye, "__stackCleaned__", !0));
        }
      }));
    var Ge = (function () {
      var _e = /^\s*at\s*/,
        Ie = function (Fe, je) {
          return typeof Fe == "string" ? Fe : je.name !== void 0 && je.message !== void 0 ? je.toString() : fe(je);
        };
      if (typeof Error.stackTraceLimit == "number" && typeof Error.captureStackTrace == "function") {
        ((Error.stackTraceLimit += 6), (p = _e), (h = Ie));
        var ke = Error.captureStackTrace;
        return (
          (ee = function (Fe) {
            return m.test(Fe);
          }),
          function (Fe, je) {
            ((Error.stackTraceLimit += 6), ke(Fe, je), (Error.stackTraceLimit -= 6));
          }
        );
      }
      var $e = new Error();
      if (
        typeof $e.stack == "string" &&
        $e.stack
          .split(
            `
`,
          )[0]
          .indexOf("stackDetection@") >= 0
      )
        return (
          (p = /@/),
          (h = Ie),
          (g = !0),
          function (je) {
            je.stack = new Error().stack;
          }
        );
      var Le;
      try {
        throw new Error();
      } catch (Fe) {
        Le = "stack" in Fe;
      }
      return !("stack" in $e) && Le && typeof Error.stackTraceLimit == "number"
        ? ((p = _e),
          (h = Ie),
          function (je) {
            Error.stackTraceLimit += 6;
            try {
              throw new Error();
            } catch (He) {
              je.stack = He.stack;
            }
            Error.stackTraceLimit -= 6;
          })
        : ((h = function (Fe, je) {
            return typeof Fe == "string"
              ? Fe
              : (typeof je == "object" || typeof je == "function") && je.name !== void 0 && je.message !== void 0
                ? je.toString()
                : fe(je);
          }),
          null);
    })([]);
    typeof console < "u" &&
      typeof console.warn < "u" &&
      ((b = function (Ye) {
        console.warn(Ye);
      }),
      s.isNode && process.stderr.isTTY
        ? (b = function (Ye, _e) {
            var Ie = _e ? "\x1B[33m" : "\x1B[31m";
            console.warn(
              Ie +
                Ye +
                `\x1B[0m
`,
            );
          })
        : !s.isNode &&
          typeof new Error().stack == "string" &&
          (b = function (Ye, _e) {
            console.warn("%c" + Ye, _e ? "color: darkorange" : "color: red");
          }));
    var Ze = { warnings: y, longStackTraces: !1, cancellation: !1, monitoring: !1 };
    return (
      E && t.longStackTraces(),
      {
        longStackTraces: function () {
          return Ze.longStackTraces;
        },
        warnings: function () {
          return Ze.warnings;
        },
        cancellation: function () {
          return Ze.cancellation;
        },
        monitoring: function () {
          return Ze.monitoring;
        },
        propagateFromFunction: function () {
          return H;
        },
        boundValueFunction: function () {
          return U;
        },
        checkForgottenReturns: J,
        setBounds: be,
        warn: ne,
        deprecated: q,
        CapturedTrace: Ne,
        fireDomEvent: x,
        fireGlobalEvent: k,
      }
    );
  };
});