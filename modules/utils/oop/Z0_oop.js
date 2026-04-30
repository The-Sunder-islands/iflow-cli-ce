/**
 * @module Z0
 * @category utils/oop
 * @label oop
 * @position 1669 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Z0) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Z0 = T((exports, module) => {
  "use strict";
  var es5 = f$(),
    canEvaluate = typeof navigator > "u",
    errorObj = { e: {} },
    tryCatchTarget,
    globalObject =
      typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : exports !== void 0
              ? exports
              : null;
  function tryCatcher() {
    try {
      var t = tryCatchTarget;
      return ((tryCatchTarget = null), t.apply(this, arguments));
    } catch (e) {
      return ((errorObj.e = e), errorObj);
    }
  }
  function tryCatch(t) {
    return ((tryCatchTarget = t), tryCatcher);
  }
  var inherits = function (t, e) {
    var r = {}.hasOwnProperty;
    function n() {
      ((this.constructor = t), (this.constructor$ = e));
      for (var o in e.prototype)
        r.call(e.prototype, o) && o.charAt(o.length - 1) !== "$" && (this[o + "$"] = e.prototype[o]);
    }
    return ((n.prototype = e.prototype), (t.prototype = new n()), t.prototype);
  };
  function isPrimitive(t) {
    return t == null || t === !0 || t === !1 || typeof t == "string" || typeof t == "number";
  }
  function isObject(t) {
    return typeof t == "function" || (typeof t == "object" && t !== null);
  }
  function maybeWrapAsError(t) {
    return isPrimitive(t) ? new Error(safeToString(t)) : t;
  }
  function withAppended(t, e) {
    var r = t.length,
      n = new Array(r + 1),
      o;
    for (o = 0; o < r; ++o) n[o] = t[o];
    return ((n[o] = e), n);
  }
  function getDataPropertyOrDefault(t, e, r) {
    if (es5.isES5) {
      var n = Object.getOwnPropertyDescriptor(t, e);
      if (n != null) return n.get == null && n.set == null ? n.value : r;
    } else return {}.hasOwnProperty.call(t, e) ? t[e] : void 0;
  }
  function notEnumerableProp(t, e, r) {
    if (isPrimitive(t)) return t;
    var n = { value: r, configurable: !0, enumerable: !1, writable: !0 };
    return (es5.defineProperty(t, e, n), t);
  }
  function thrower(t) {
    throw t;
  }
  var inheritedDataKeys = (function () {
      var t = [Array.prototype, Object.prototype, Function.prototype],
        e = function (o) {
          for (var s = 0; s < t.length; ++s) if (t[s] === o) return !0;
          return !1;
        };
      if (es5.isES5) {
        var r = Object.getOwnPropertyNames;
        return function (o) {
          for (var s = [], a = Object.create(null); o != null && !e(o); ) {
            var u;
            try {
              u = r(o);
            } catch {
              return s;
            }
            for (var c = 0; c < u.length; ++c) {
              var m = u[c];
              if (!a[m]) {
                a[m] = !0;
                var d = Object.getOwnPropertyDescriptor(o, m);
                d != null && d.get == null && d.set == null && s.push(m);
              }
            }
            o = es5.getPrototypeOf(o);
          }
          return s;
        };
      } else {
        var n = {}.hasOwnProperty;
        return function (o) {
          if (e(o)) return [];
          var s = [];
          e: for (var a in o)
            if (n.call(o, a)) s.push(a);
            else {
              for (var u = 0; u < t.length; ++u) if (n.call(t[u], a)) continue e;
              s.push(a);
            }
          return s;
        };
      }
    })(),
    thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
  function isClass(t) {
    try {
      if (typeof t == "function") {
        var e = es5.names(t.prototype),
          r = es5.isES5 && e.length > 1,
          n = e.length > 0 && !(e.length === 1 && e[0] === "constructor"),
          o = thisAssignmentPattern.test(t + "") && es5.names(t).length > 0;
        if (r || n || o) return !0;
      }
      return !1;
    } catch {
      return !1;
    }
  }
  function toFastProperties(obj) {
    function FakeConstructor() {}
    FakeConstructor.prototype = obj;
    var receiver = new FakeConstructor();
    function ic() {
      return typeof receiver.foo;
    }
    return (ic(), ic(), obj);
    eval(obj);
  }
  var rident = /^[a-z$_][a-z$_0-9]*$/i;
  function isIdentifier(t) {
    return rident.test(t);
  }
  function filledRange(t, e, r) {
    for (var n = new Array(t), o = 0; o < t; ++o) n[o] = e + o + r;
    return n;
  }
  function safeToString(t) {
    try {
      return t + "";
    } catch {
      return "[no string representation]";
    }
  }
  function isError(t) {
    return (
      t instanceof Error ||
      (t !== null && typeof t == "object" && typeof t.message == "string" && typeof t.name == "string")
    );
  }
  function markAsOriginatingFromRejection(t) {
    try {
      notEnumerableProp(t, "isOperational", !0);
    } catch {}
  }
  function originatesFromRejection(t) {
    return t == null ? !1 : t instanceof Error.__BluebirdErrorTypes__.OperationalError || t.isOperational === !0;
  }
  function canAttachTrace(t) {
    return isError(t) && es5.propertyIsWritable(t, "stack");
  }
  var ensureErrorObject = (function () {
    return "stack" in new Error()
      ? function (t) {
          return canAttachTrace(t) ? t : new Error(safeToString(t));
        }
      : function (t) {
          if (canAttachTrace(t)) return t;
          try {
            throw new Error(safeToString(t));
          } catch (e) {
            return e;
          }
        };
  })();
  function classString(t) {
    return {}.toString.call(t);
  }
  function copyDescriptors(t, e, r) {
    for (var n = es5.names(t), o = 0; o < n.length; ++o) {
      var s = n[o];
      if (r(s))
        try {
          es5.defineProperty(e, s, es5.getDescriptor(t, s));
        } catch {}
    }
  }
  var asArray = function (t) {
    return es5.isArray(t) ? t : null;
  };
  typeof Symbol < "u" &&
    Symbol.iterator &&
    ((ArrayFrom =
      typeof Array.from == "function"
        ? function (t) {
            return Array.from(t);
          }
        : function (t) {
            for (var e = [], r = t[Symbol.iterator](), n; !(n = r.next()).done; ) e.push(n.value);
            return e;
          }),
    (asArray = function (t) {
      return es5.isArray(t) ? t : t != null && typeof t[Symbol.iterator] == "function" ? ArrayFrom(t) : null;
    }));
  var ArrayFrom,
    isNode = typeof process < "u" && classString(process).toLowerCase() === "[object process]",
    hasEnvVariables = typeof process < "u" && typeof process.env < "u";
  function env(t) {
    return hasEnvVariables ? process.env[t] : void 0;
  }
  function getNativePromise() {
    if (typeof Promise == "function")
      try {
        var t = new Promise(function () {});
        if (classString(t) === "[object Promise]") return Promise;
      } catch {}
  }
  var reflectHandler;
  function contextBind(t, e) {
    if (t === null || typeof e != "function" || e === reflectHandler) return e;
    t.domain !== null && (e = t.domain.bind(e));
    var r = t.async;
    if (r !== null) {
      var n = e;
      e = function () {
        for (var o = arguments.length + 2, s = new Array(o), a = 2; a < o; ++a) s[a] = arguments[a - 2];
        return ((s[0] = n), (s[1] = this), r.runInAsyncScope.apply(r, s));
      };
    }
    return e;
  }
  var ret = {
    setReflectHandler: function (t) {
      reflectHandler = t;
    },
    isClass,
    isIdentifier,
    inheritedDataKeys,
    getDataPropertyOrDefault,
    thrower,
    isArray: es5.isArray,
    asArray,
    notEnumerableProp,
    isPrimitive,
    isObject,
    isError,
    canEvaluate,
    errorObj,
    tryCatch,
    inherits,
    withAppended,
    maybeWrapAsError,
    toFastProperties,
    filledRange,
    toString: safeToString,
    canAttachTrace,
    ensureErrorObject,
    originatesFromRejection,
    markAsOriginatingFromRejection,
    classString,
    copyDescriptors,
    isNode,
    hasEnvVariables,
    env,
    global: globalObject,
    getNativePromise,
    contextBind,
  };
  ret.isRecentNode =
    ret.isNode &&
    (function () {
      var t;
      return (
        process.versions && process.versions.node
          ? (t = process.versions.node.split(".").map(Number))
          : process.version && (t = process.version.split(".").map(Number)),
        (t[0] === 0 && t[1] > 10) || t[0] > 0
      );
    })();
  ret.nodeSupportsAsyncResource =
    ret.isNode &&
    (function () {
      var t = !1;
      try {
        var e = Ae("async_hooks").AsyncResource;
        t = typeof e.prototype.runInAsyncScope == "function";
      } catch {
        t = !1;
      }
      return t;
    })();
  ret.isNode && ret.toFastProperties(process);
  try {
    throw new Error();
  } catch (t) {
    ret.lastLineError = t;
  }
  module.exports = ret;
});