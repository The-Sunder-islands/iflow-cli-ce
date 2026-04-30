/**
 * @module cSr
 * @category ui/react
 * @label react
 * @position 1 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (cSr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var cSr = T((Ls) => {
  "use strict";
  var c8t = Symbol.for("react.transitional.element"),
    Ruo = Symbol.for("react.portal"),
    kuo = Symbol.for("react.fragment"),
    Ouo = Symbol.for("react.strict_mode"),
    Nuo = Symbol.for("react.profiler"),
    Puo = Symbol.for("react.consumer"),
    Buo = Symbol.for("react.context"),
    Luo = Symbol.for("react.forward_ref"),
    Muo = Symbol.for("react.suspense"),
    Fuo = Symbol.for("react.memo"),
    nSr = Symbol.for("react.lazy"),
    Uuo = Symbol.for("react.activity"),
    Z4r = Symbol.iterator;
  function $uo(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (Z4r && t[Z4r]) || t["@@iterator"]), typeof t == "function" ? t : null);
  }
  var iSr = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    oSr = Object.assign,
    sSr = {};
  function QZ(t, e, r) {
    ((this.props = t), (this.context = e), (this.refs = sSr), (this.updater = r || iSr));
  }
  QZ.prototype.isReactComponent = {};
  QZ.prototype.setState = function (t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables.",
      );
    this.updater.enqueueSetState(this, t, e, "setState");
  };
  QZ.prototype.forceUpdate = function (t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function aSr() {}
  aSr.prototype = QZ.prototype;
  function l8t(t, e, r) {
    ((this.props = t), (this.context = e), (this.refs = sSr), (this.updater = r || iSr));
  }
  var m8t = (l8t.prototype = new aSr());
  m8t.constructor = l8t;
  oSr(m8t, QZ.prototype);
  m8t.isPureReactComponent = !0;
  var eSr = Array.isArray;
  function u8t() {}
  var pm = { H: null, A: null, T: null, S: null },
    uSr = Object.prototype.hasOwnProperty;
  function d8t(t, e, r) {
    var n = r.ref;
    return { $$typeof: c8t, type: t, key: e, ref: n !== void 0 ? n : null, props: r };
  }
  function juo(t, e) {
    return d8t(t.type, e, t.props);
  }
  function f8t(t) {
    return typeof t == "object" && t !== null && t.$$typeof === c8t;
  }
  function Quo(t) {
    var e = { "=": "=0", ":": "=2" };
    return (
      "$" +
      t.replace(/[=:]/g, function (r) {
        return e[r];
      })
    );
  }
  var tSr = /\/+/g;
  function a8t(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? Quo("" + t.key) : e.toString(36);
  }
  function Guo(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (
          (typeof t.status == "string"
            ? t.then(u8t, u8t)
            : ((t.status = "pending"),
              t.then(
                function (e) {
                  t.status === "pending" && ((t.status = "fulfilled"), (t.value = e));
                },
                function (e) {
                  t.status === "pending" && ((t.status = "rejected"), (t.reason = e));
                },
              )),
          t.status)
        ) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw t.reason;
        }
    }
    throw t;
  }
  function jZ(t, e, r, n, o) {
    var s = typeof t;
    (s === "undefined" || s === "boolean") && (t = null);
    var a = !1;
    if (t === null) a = !0;
    else
      switch (s) {
        case "bigint":
        case "string":
        case "number":
          a = !0;
          break;
        case "object":
          switch (t.$$typeof) {
            case c8t:
            case Ruo:
              a = !0;
              break;
            case nSr:
              return ((a = t._init), jZ(a(t._payload), e, r, n, o));
          }
      }
    if (a)
      return (
        (o = o(t)),
        (a = n === "" ? "." + a8t(t, 0) : n),
        eSr(o)
          ? ((r = ""),
            a != null && (r = a.replace(tSr, "$&/") + "/"),
            jZ(o, e, r, "", function (m) {
              return m;
            }))
          : o != null &&
            (f8t(o) &&
              (o = juo(
                o,
                r + (o.key == null || (t && t.key === o.key) ? "" : ("" + o.key).replace(tSr, "$&/") + "/") + a,
              )),
            e.push(o)),
        1
      );
    a = 0;
    var u = n === "" ? "." : n + ":";
    if (eSr(t)) for (var c = 0; c < t.length; c++) ((n = t[c]), (s = u + a8t(n, c)), (a += jZ(n, e, r, s, o)));
    else if (((c = $uo(t)), typeof c == "function"))
      for (t = c.call(t), c = 0; !(n = t.next()).done; )
        ((n = n.value), (s = u + a8t(n, c++)), (a += jZ(n, e, r, s, o)));
    else if (s === "object") {
      if (typeof t.then == "function") return jZ(Guo(t), e, r, n, o);
      throw (
        (e = String(t)),
        Error(
          "Objects are not valid as a React child (found: " +
            (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return a;
  }
  function U7e(t, e, r) {
    if (t == null) return t;
    var n = [],
      o = 0;
    return (
      jZ(t, n, "", "", function (s) {
        return e.call(r, s, o++);
      }),
      n
    );
  }
  function quo(t) {
    if (t._status === -1) {
      var e = t._result;
      ((e = e()),
        e.then(
          function (r) {
            (t._status === 0 || t._status === -1) && ((t._status = 1), (t._result = r));
          },
          function (r) {
            (t._status === 0 || t._status === -1) && ((t._status = 2), (t._result = r));
          },
        ),
        t._status === -1 && ((t._status = 0), (t._result = e)));
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var rSr =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    Huo = {
      map: U7e,
      forEach: function (t, e, r) {
        U7e(
          t,
          function () {
            e.apply(this, arguments);
          },
          r,
        );
      },
      count: function (t) {
        var e = 0;
        return (
          U7e(t, function () {
            e++;
          }),
          e
        );
      },
      toArray: function (t) {
        return (
          U7e(t, function (e) {
            return e;
          }) || []
        );
      },
      only: function (t) {
        if (!f8t(t)) throw Error("React.Children.only expected to receive a single React element child.");
        return t;
      },
    };
  Ls.Activity = Uuo;
  Ls.Children = Huo;
  Ls.Component = QZ;
  Ls.Fragment = kuo;
  Ls.Profiler = Nuo;
  Ls.PureComponent = l8t;
  Ls.StrictMode = Ouo;
  Ls.Suspense = Muo;
  Ls.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = pm;
  Ls.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function (t) {
      return pm.H.useMemoCache(t);
    },
  };
  Ls.cache = function (t) {
    return function () {
      return t.apply(null, arguments);
    };
  };
  Ls.cacheSignal = function () {
    return null;
  };
  Ls.cloneElement = function (t, e, r) {
    if (t == null) throw Error("The argument must be a React element, but you passed " + t + ".");
    var n = oSr({}, t.props),
      o = t.key;
    if (e != null)
      for (s in (e.key !== void 0 && (o = "" + e.key), e))
        !uSr.call(e, s) ||
          s === "key" ||
          s === "__self" ||
          s === "__source" ||
          (s === "ref" && e.ref === void 0) ||
          (n[s] = e[s]);
    var s = arguments.length - 2;
    if (s === 1) n.children = r;
    else if (1 < s) {
      for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
      n.children = a;
    }
    return d8t(t.type, o, n);
  };
  Ls.createContext = function (t) {
    return (
      (t = { $$typeof: Buo, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null }),
      (t.Provider = t),
      (t.Consumer = { $$typeof: Puo, _context: t }),
      t
    );
  };
  Ls.createElement = function (t, e, r) {
    var n,
      o = {},
      s = null;
    if (e != null)
      for (n in (e.key !== void 0 && (s = "" + e.key), e))
        uSr.call(e, n) && n !== "key" && n !== "__self" && n !== "__source" && (o[n] = e[n]);
    var a = arguments.length - 2;
    if (a === 1) o.children = r;
    else if (1 < a) {
      for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
      o.children = u;
    }
    if (t && t.defaultProps) for (n in ((a = t.defaultProps), a)) o[n] === void 0 && (o[n] = a[n]);
    return d8t(t, s, o);
  };
  Ls.createRef = function () {
    return { current: null };
  };
  Ls.forwardRef = function (t) {
    return { $$typeof: Luo, render: t };
  };
  Ls.isValidElement = f8t;
  Ls.lazy = function (t) {
    return { $$typeof: nSr, _payload: { _status: -1, _result: t }, _init: quo };
  };
  Ls.memo = function (t, e) {
    return { $$typeof: Fuo, type: t, compare: e === void 0 ? null : e };
  };
  Ls.startTransition = function (t) {
    var e = pm.T,
      r = {};
    pm.T = r;
    try {
      var n = t(),
        o = pm.S;
      (o !== null && o(r, n), typeof n == "object" && n !== null && typeof n.then == "function" && n.then(u8t, rSr));
    } catch (s) {
      rSr(s);
    } finally {
      (e !== null && r.types !== null && (e.types = r.types), (pm.T = e));
    }
  };
  Ls.unstable_useCacheRefresh = function () {
    return pm.H.useCacheRefresh();
  };
  Ls.use = function (t) {
    return pm.H.use(t);
  };
  Ls.useActionState = function (t, e, r) {
    return pm.H.useActionState(t, e, r);
  };
  Ls.useCallback = function (t, e) {
    return pm.H.useCallback(t, e);
  };
  Ls.useContext = function (t) {
    return pm.H.useContext(t);
  };
  Ls.useDebugValue = function () {};
  Ls.useDeferredValue = function (t, e) {
    return pm.H.useDeferredValue(t, e);
  };
  Ls.useEffect = function (t, e) {
    return pm.H.useEffect(t, e);
  };
  Ls.useEffectEvent = function (t) {
    return pm.H.useEffectEvent(t);
  };
  Ls.useId = function () {
    return pm.H.useId();
  };
  Ls.useImperativeHandle = function (t, e, r) {
    return pm.H.useImperativeHandle(t, e, r);
  };
  Ls.useInsertionEffect = function (t, e) {
    return pm.H.useInsertionEffect(t, e);
  };
  Ls.useLayoutEffect = function (t, e) {
    return pm.H.useLayoutEffect(t, e);
  };
  Ls.useMemo = function (t, e) {
    return pm.H.useMemo(t, e);
  };
  Ls.useOptimistic = function (t, e) {
    return pm.H.useOptimistic(t, e);
  };
  Ls.useReducer = function (t, e, r) {
    return pm.H.useReducer(t, e, r);
  };
  Ls.useRef = function (t) {
    return pm.H.useRef(t);
  };
  Ls.useState = function (t) {
    return pm.H.useState(t);
  };
  Ls.useSyncExternalStore = function (t, e, r) {
    return pm.H.useSyncExternalStore(t, e, r);
  };
  Ls.useTransition = function () {
    return pm.H.useTransition();
  };
  Ls.version = "19.2.3";
});