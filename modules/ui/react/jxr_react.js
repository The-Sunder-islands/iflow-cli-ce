/**
 * @module jxr
 * @category ui/react
 * @label react
 * @position 25 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jxr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jxr = T((yRe, w9t) => {
  (function (e, r) {
    typeof yRe == "object" && typeof w9t == "object"
      ? (w9t.exports = r())
      : typeof define == "function" && define.amd
        ? define([], r)
        : typeof yRe == "object"
          ? (yRe.ReactDevToolsBackend = r())
          : (e.ReactDevToolsBackend = r());
  })(self, () =>
    (() => {
      var t = {
          786: (o, s, a) => {
            "use strict";
            var u;
            function c(X) {
              "@babel/helpers - typeof";
              return (
                typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                  ? (c = function (q) {
                      return typeof q;
                    })
                  : (c = function (q) {
                      return q && typeof Symbol == "function" && q.constructor === Symbol && q !== Symbol.prototype
                        ? "symbol"
                        : typeof q;
                    }),
                c(X)
              );
            }
            var m = a(206),
              d = a(189),
              f = Object.assign,
              p = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
              h = Symbol.for("react.context"),
              g = Symbol.for("react.memo_cache_sentinel"),
              b = Object.prototype.hasOwnProperty,
              A = [],
              y = null;
            function E() {
              if (y === null) {
                var X = new Map();
                try {
                  if (
                    (D.useContext({ _currentValue: null }),
                    D.useState(null),
                    D.useReducer(function (de) {
                      return de;
                    }, null),
                    D.useRef(null),
                    typeof D.useCacheRefresh == "function" && D.useCacheRefresh(),
                    D.useLayoutEffect(function () {}),
                    D.useInsertionEffect(function () {}),
                    D.useEffect(function () {}),
                    D.useImperativeHandle(void 0, function () {
                      return null;
                    }),
                    D.useDebugValue(null),
                    D.useCallback(function () {}),
                    D.useTransition(),
                    D.useSyncExternalStore(
                      function () {
                        return function () {};
                      },
                      function () {
                        return null;
                      },
                      function () {
                        return null;
                      },
                    ),
                    D.useDeferredValue(null),
                    D.useMemo(function () {
                      return null;
                    }),
                    D.useOptimistic(null, function (de) {
                      return de;
                    }),
                    D.useFormState(function (de) {
                      return de;
                    }, null),
                    D.useActionState(function (de) {
                      return de;
                    }, null),
                    D.useHostTransitionStatus(),
                    typeof D.useMemoCache == "function" && D.useMemoCache(0),
                    typeof D.use == "function")
                  ) {
                    (D.use({ $$typeof: h, _currentValue: null }),
                      D.use({ then: function () {}, status: "fulfilled", value: null }));
                    try {
                      D.use({ then: function () {} });
                    } catch {}
                  }
                  (D.useId(), typeof D.useEffectEvent == "function" && D.useEffectEvent(function () {}));
                } finally {
                  var J = A;
                  A = [];
                }
                for (var q = 0; q < J.length; q++) {
                  var ne = J[q];
                  X.set(ne.primitive, m.parse(ne.stackError));
                }
                y = X;
              }
              return y;
            }
            var v = null,
              C = null,
              x = null;
            function k() {
              var X = C;
              return (X !== null && (C = X.next), X);
            }
            function R(X) {
              if (v === null) return X._currentValue;
              if (x === null)
                throw Error(
                  "Context reads do not line up with context dependencies. This is a bug in React Debug Tools.",
                );
              return (b.call(x, "memoizedValue") ? ((X = x.memoizedValue), (x = x.next)) : (X = X._currentValue), X);
            }
            var P = Error(
                "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`.",
              ),
              D = {
                readContext: R,
                use: function (J) {
                  if (J !== null && c(J) === "object") {
                    if (typeof J.then == "function") {
                      switch (J.status) {
                        case "fulfilled":
                          var q = J.value;
                          return (
                            A.push({
                              displayName: null,
                              primitive: "Promise",
                              stackError: Error(),
                              value: q,
                              debugInfo: J._debugInfo === void 0 ? null : J._debugInfo,
                              dispatcherHookName: "Use",
                            }),
                            q
                          );
                        case "rejected":
                          throw J.reason;
                      }
                      throw (
                        A.push({
                          displayName: null,
                          primitive: "Unresolved",
                          stackError: Error(),
                          value: J,
                          debugInfo: J._debugInfo === void 0 ? null : J._debugInfo,
                          dispatcherHookName: "Use",
                        }),
                        P
                      );
                    }
                    if (J.$$typeof === h)
                      return (
                        (q = R(J)),
                        A.push({
                          displayName: J.displayName || "Context",
                          primitive: "Context (use)",
                          stackError: Error(),
                          value: q,
                          debugInfo: null,
                          dispatcherHookName: "Use",
                        }),
                        q
                      );
                  }
                  throw Error("An unsupported type was passed to use(): " + String(J));
                },
                useCallback: function (J) {
                  var q = k();
                  return (
                    A.push({
                      displayName: null,
                      primitive: "Callback",
                      stackError: Error(),
                      value: q !== null ? q.memoizedState[0] : J,
                      debugInfo: null,
                      dispatcherHookName: "Callback",
                    }),
                    J
                  );
                },
                useContext: function (J) {
                  var q = R(J);
                  return (
                    A.push({
                      displayName: J.displayName || null,
                      primitive: "Context",
                      stackError: Error(),
                      value: q,
                      debugInfo: null,
                      dispatcherHookName: "Context",
                    }),
                    q
                  );
                },
                useEffect: function (J) {
                  (k(),
                    A.push({
                      displayName: null,
                      primitive: "Effect",
                      stackError: Error(),
                      value: J,
                      debugInfo: null,
                      dispatcherHookName: "Effect",
                    }));
                },
                useImperativeHandle: function (J) {
                  k();
                  var q = void 0;
                  (J !== null && c(J) === "object" && (q = J.current),
                    A.push({
                      displayName: null,
                      primitive: "ImperativeHandle",
                      stackError: Error(),
                      value: q,
                      debugInfo: null,
                      dispatcherHookName: "ImperativeHandle",
                    }));
                },
                useLayoutEffect: function (J) {
                  (k(),
                    A.push({
                      displayName: null,
                      primitive: "LayoutEffect",
                      stackError: Error(),
                      value: J,
                      debugInfo: null,
                      dispatcherHookName: "LayoutEffect",
                    }));
                },
                useInsertionEffect: function (J) {
                  (k(),
                    A.push({
                      displayName: null,
                      primitive: "InsertionEffect",
                      stackError: Error(),
                      value: J,
                      debugInfo: null,
                      dispatcherHookName: "InsertionEffect",
                    }));
                },
                useMemo: function (J) {
                  var q = k();
                  return (
                    (J = q !== null ? q.memoizedState[0] : J()),
                    A.push({
                      displayName: null,
                      primitive: "Memo",
                      stackError: Error(),
                      value: J,
                      debugInfo: null,
                      dispatcherHookName: "Memo",
                    }),
                    J
                  );
                },
                useReducer: function (J, q, ne) {
                  return (
                    (J = k()),
                    (q = J !== null ? J.memoizedState : ne !== void 0 ? ne(q) : q),
                    A.push({
                      displayName: null,
                      primitive: "Reducer",
                      stackError: Error(),
                      value: q,
                      debugInfo: null,
                      dispatcherHookName: "Reducer",
                    }),
                    [q, function () {}]
                  );
                },
                useRef: function (J) {
                  var q = k();
                  return (
                    (J = q !== null ? q.memoizedState : { current: J }),
                    A.push({
                      displayName: null,
                      primitive: "Ref",
                      stackError: Error(),
                      value: J.current,
                      debugInfo: null,
                      dispatcherHookName: "Ref",
                    }),
                    J
                  );
                },
                useState: function (J) {
                  var q = k();
                  return (
                    (J = q !== null ? q.memoizedState : typeof J == "function" ? J() : J),
                    A.push({
                      displayName: null,
                      primitive: "State",
                      stackError: Error(),
                      value: J,
                      debugInfo: null,
                      dispatcherHookName: "State",
                    }),
                    [J, function () {}]
                  );
                },
                useDebugValue: function (J, q) {
                  A.push({
                    displayName: null,
                    primitive: "DebugValue",
                    stackError: Error(),
                    value: typeof q == "function" ? q(J) : J,
                    debugInfo: null,
                    dispatcherHookName: "DebugValue",
                  });
                },
                useDeferredValue: function (J) {
                  var q = k();
                  return (
                    (J = q !== null ? q.memoizedState : J),
                    A.push({
                      displayName: null,
                      primitive: "DeferredValue",
                      stackError: Error(),
                      value: J,
                      debugInfo: null,
                      dispatcherHookName: "DeferredValue",
                    }),
                    J
                  );
                },
                useTransition: function () {
                  var J = k();
                  return (
                    k(),
                    (J = J !== null ? J.memoizedState : !1),
                    A.push({
                      displayName: null,
                      primitive: "Transition",
                      stackError: Error(),
                      value: J,
                      debugInfo: null,
                      dispatcherHookName: "Transition",
                    }),
                    [J, function () {}]
                  );
                },
                useSyncExternalStore: function (J, q) {
                  return (
                    k(),
                    k(),
                    (J = q()),
                    A.push({
                      displayName: null,
                      primitive: "SyncExternalStore",
                      stackError: Error(),
                      value: J,
                      debugInfo: null,
                      dispatcherHookName: "SyncExternalStore",
                    }),
                    J
                  );
                },
                useId: function () {
                  var J = k();
                  return (
                    (J = J !== null ? J.memoizedState : ""),
                    A.push({
                      displayName: null,
                      primitive: "Id",
                      stackError: Error(),
                      value: J,
                      debugInfo: null,
                      dispatcherHookName: "Id",
                    }),
                    J
                  );
                },
                useHostTransitionStatus: function () {
                  var J = R({ _currentValue: null });
                  return (
                    A.push({
                      displayName: null,
                      primitive: "HostTransitionStatus",
                      stackError: Error(),
                      value: J,
                      debugInfo: null,
                      dispatcherHookName: "HostTransitionStatus",
                    }),
                    J
                  );
                },
                useFormState: function (J, q) {
                  var ne = k();
                  (k(), k(), (J = Error()));
                  var de = null,
                    ce = null;
                  if (ne !== null)
                    if (((q = ne.memoizedState), c(q) === "object" && q !== null && typeof q.then == "function"))
                      switch (q.status) {
                        case "fulfilled":
                          var ye = q.value;
                          de = q._debugInfo === void 0 ? null : q._debugInfo;
                          break;
                        case "rejected":
                          ce = q.reason;
                          break;
                        default:
                          ((ce = P), (de = q._debugInfo === void 0 ? null : q._debugInfo), (ye = q));
                      }
                    else ye = q;
                  else ye = q;
                  if (
                    (A.push({
                      displayName: null,
                      primitive: "FormState",
                      stackError: J,
                      value: ye,
                      debugInfo: de,
                      dispatcherHookName: "FormState",
                    }),
                    ce !== null)
                  )
                    throw ce;
                  return [ye, function () {}, !1];
                },
                useActionState: function (J, q) {
                  var ne = k();
                  (k(), k(), (J = Error()));
                  var de = null,
                    ce = null;
                  if (ne !== null)
                    if (((q = ne.memoizedState), c(q) === "object" && q !== null && typeof q.then == "function"))
                      switch (q.status) {
                        case "fulfilled":
                          var ye = q.value;
                          de = q._debugInfo === void 0 ? null : q._debugInfo;
                          break;
                        case "rejected":
                          ce = q.reason;
                          break;
                        default:
                          ((ce = P), (de = q._debugInfo === void 0 ? null : q._debugInfo), (ye = q));
                      }
                    else ye = q;
                  else ye = q;
                  if (
                    (A.push({
                      displayName: null,
                      primitive: "ActionState",
                      stackError: J,
                      value: ye,
                      debugInfo: de,
                      dispatcherHookName: "ActionState",
                    }),
                    ce !== null)
                  )
                    throw ce;
                  return [ye, function () {}, !1];
                },
                useOptimistic: function (J) {
                  var q = k();
                  return (
                    (J = q !== null ? q.memoizedState : J),
                    A.push({
                      displayName: null,
                      primitive: "Optimistic",
                      stackError: Error(),
                      value: J,
                      debugInfo: null,
                      dispatcherHookName: "Optimistic",
                    }),
                    [J, function () {}]
                  );
                },
                useMemoCache: function (J) {
                  var q = v;
                  if (q == null) return [];
                  if (((q = q.updateQueue != null ? q.updateQueue.memoCache : null), q == null)) return [];
                  var ne = q.data[q.index];
                  if (ne === void 0) {
                    ne = q.data[q.index] = Array(J);
                    for (var de = 0; de < J; de++) ne[de] = g;
                  }
                  return (q.index++, ne);
                },
                useCacheRefresh: function () {
                  var J = k();
                  return (
                    A.push({
                      displayName: null,
                      primitive: "CacheRefresh",
                      stackError: Error(),
                      value: J !== null ? J.memoizedState : function () {},
                      debugInfo: null,
                      dispatcherHookName: "CacheRefresh",
                    }),
                    function () {}
                  );
                },
                useEffectEvent: function (J) {
                  return (
                    k(),
                    A.push({
                      displayName: null,
                      primitive: "EffectEvent",
                      stackError: Error(),
                      value: J,
                      debugInfo: null,
                      dispatcherHookName: "EffectEvent",
                    }),
                    J
                  );
                },
              },
              O = {
                get: function (J, q) {
                  if (J.hasOwnProperty(q)) return J[q];
                  throw (
                    (J = Error("Missing method in Dispatcher: " + q)),
                    (J.name = "ReactDebugToolsUnsupportedHookError"),
                    J
                  );
                },
              },
              N = typeof Proxy > "u" ? D : new Proxy(D, O),
              F = 0;
            function B(X, J, q) {
              var ne = J[q].source,
                de = 0;
              e: for (; de < X.length; de++)
                if (X[de].source === ne) {
                  for (var ce = q + 1, ye = de + 1; ce < J.length && ye < X.length; ce++, ye++)
                    if (X[ye].source !== J[ce].source) continue e;
                  return de;
                }
              return -1;
            }
            function L(X, J) {
              return ((X = G(X)), J === "HostTransitionStatus" ? X === J || X === "FormStatus" : X === J);
            }
            function G(X) {
              if (!X) return "";
              var J = X.lastIndexOf("[as ");
              if (J !== -1) return G(X.slice(J + 4, -1));
              if (
                ((J = X.lastIndexOf(".")),
                (J = J === -1 ? 0 : J + 1),
                X.slice(J).startsWith("unstable_") && (J += 9),
                X.slice(J).startsWith("experimental_") && (J += 13),
                X.slice(J, J + 3) === "use")
              ) {
                if (X.length - J === 3) return "Use";
                J += 3;
              }
              return X.slice(J);
            }
            function Q(X, J) {
              for (var q = [], ne = null, de = q, ce = 0, ye = [], Z = 0; Z < J.length; Z++) {
                var oe = J[Z],
                  ue = X,
                  he = m.parse(oe.stackError);
                e: {
                  var se = he,
                    fe = B(se, ue, F);
                  if (fe !== -1) ue = fe;
                  else {
                    for (var ge = 0; ge < ue.length && 5 > ge; ge++)
                      if (((fe = B(se, ue, ge)), fe !== -1)) {
                        ((F = ge), (ue = fe));
                        break e;
                      }
                    ue = -1;
                  }
                }
                e: {
                  if (((se = he), (fe = E().get(oe.primitive)), fe !== void 0)) {
                    for (ge = 0; ge < fe.length && ge < se.length; ge++)
                      if (fe[ge].source !== se[ge].source) {
                        (ge < se.length - 1 && L(se[ge].functionName, oe.dispatcherHookName) && ge++,
                          ge < se.length - 1 && L(se[ge].functionName, oe.dispatcherHookName) && ge++,
                          (se = ge));
                        break e;
                      }
                  }
                  se = -1;
                }
                if (
                  ((he =
                    ue === -1 || se === -1 || 2 > ue - se
                      ? se === -1
                        ? [null, null]
                        : [he[se - 1], null]
                      : [he[se - 1], he.slice(se, ue - 1)]),
                  (se = he[0]),
                  (he = he[1]),
                  (ue = oe.displayName),
                  ue === null && se !== null && (ue = G(se.functionName) || G(oe.dispatcherHookName)),
                  he !== null)
                ) {
                  if (((se = 0), ne !== null)) {
                    for (
                      ;
                      se < he.length &&
                      se < ne.length &&
                      he[he.length - se - 1].source === ne[ne.length - se - 1].source;
                    )
                      se++;
                    for (ne = ne.length - 1; ne > se; ne--) de = ye.pop();
                  }
                  for (ne = he.length - se - 1; 1 <= ne; ne--)
                    ((se = []),
                      (fe = he[ne]),
                      (fe = {
                        id: null,
                        isStateEditable: !1,
                        name: G(he[ne - 1].functionName),
                        value: void 0,
                        subHooks: se,
                        debugInfo: null,
                        hookSource: {
                          lineNumber: fe.lineNumber,
                          columnNumber: fe.columnNumber,
                          functionName: fe.functionName,
                          fileName: fe.fileName,
                        },
                      }),
                      de.push(fe),
                      ye.push(de),
                      (de = se));
                  ne = he;
                }
                ((se = oe.primitive),
                  (fe = oe.debugInfo),
                  (oe = {
                    id:
                      se === "Context" ||
                      se === "Context (use)" ||
                      se === "DebugValue" ||
                      se === "Promise" ||
                      se === "Unresolved" ||
                      se === "HostTransitionStatus"
                        ? null
                        : ce++,
                    isStateEditable: se === "Reducer" || se === "State",
                    name: ue || se,
                    value: oe.value,
                    subHooks: [],
                    debugInfo: fe,
                    hookSource: null,
                  }),
                  (ue = { lineNumber: null, functionName: null, fileName: null, columnNumber: null }),
                  he &&
                    1 <= he.length &&
                    ((he = he[0]),
                    (ue.lineNumber = he.lineNumber),
                    (ue.functionName = he.functionName),
                    (ue.fileName = he.fileName),
                    (ue.columnNumber = he.columnNumber)),
                  (oe.hookSource = ue),
                  de.push(oe));
              }
              return (K(q, null), q);
            }
            function K(X, J) {
              for (var q = [], ne = 0; ne < X.length; ne++) {
                var de = X[ne];
                de.name === "DebugValue" && de.subHooks.length === 0
                  ? (X.splice(ne, 1), ne--, q.push(de))
                  : K(de.subHooks, de);
              }
              J !== null &&
                (q.length === 1
                  ? (J.value = q[0].value)
                  : 1 < q.length &&
                    (J.value = q.map(function (ce) {
                      return ce.value;
                    })));
            }
            function H(X) {
              if (X !== P) {
                if (X instanceof Error && X.name === "ReactDebugToolsUnsupportedHookError") throw X;
                var J = Error("Error rendering inspected component", { cause: X });
                throw ((J.name = "ReactDebugToolsRenderError"), (J.cause = X), J);
              }
            }
            function U(X, J, q) {
              q == null && (q = p);
              var ne = q.H;
              q.H = N;
              try {
                var de = Error();
                X(J);
              } catch (ce) {
                H(ce);
              } finally {
                ((X = A), (A = []), (q.H = ne));
              }
              return ((q = m.parse(de)), Q(q, X));
            }
            function Y(X) {
              X.forEach(function (J, q) {
                return (q._currentValue = J);
              });
            }
            ((u = U),
              (s.inspectHooksOfFiber = function (X, J) {
                if ((J == null && (J = p), X.tag !== 0 && X.tag !== 15 && X.tag !== 11))
                  throw Error("Unknown Fiber. Needs to be a function component to inspect hooks.");
                if ((E(), (C = X.memoizedState), (v = X), b.call(v, "dependencies"))) {
                  var q = v.dependencies;
                  x = q !== null ? q.firstContext : null;
                } else if (b.call(v, "dependencies_old"))
                  ((q = v.dependencies_old), (x = q !== null ? q.firstContext : null));
                else if (b.call(v, "dependencies_new"))
                  ((q = v.dependencies_new), (x = q !== null ? q.firstContext : null));
                else if (b.call(v, "contextDependencies"))
                  ((q = v.contextDependencies), (x = q !== null ? q.first : null));
                else throw Error("Unsupported React version. This is a bug in React Debug Tools.");
                q = X.type;
                var ne = X.memoizedProps;
                if (q !== X.elementType && q && q.defaultProps) {
                  ne = f({}, ne);
                  var de = q.defaultProps;
                  for (ce in de) ne[ce] === void 0 && (ne[ce] = de[ce]);
                }
                var ce = new Map();
                try {
                  if (x !== null && !b.call(x, "memoizedValue"))
                    for (de = X; de; ) {
                      if (de.tag === 10) {
                        var ye = de.type;
                        (ye._context !== void 0 && (ye = ye._context),
                          ce.has(ye) || (ce.set(ye, ye._currentValue), (ye._currentValue = de.memoizedProps.value)));
                      }
                      de = de.return;
                    }
                  if (X.tag === 11) {
                    var Z = q.render;
                    ye = ne;
                    var oe = X.ref;
                    X = J;
                    var ue = X.H;
                    X.H = N;
                    try {
                      var he = Error();
                      Z(ye, oe);
                    } catch (ge) {
                      H(ge);
                    } finally {
                      var se = A;
                      ((A = []), (X.H = ue));
                    }
                    var fe = m.parse(he);
                    return Q(fe, se);
                  }
                  return U(q, ne, J);
                } finally {
                  ((x = C = v = null), Y(ce));
                }
              }));
          },
          987: (o, s, a) => {
            "use strict";
            o.exports = a(786);
          },
          126: (o, s, a) => {
            "use strict";
            var u = a(169);
            function c(V) {
              "@babel/helpers - typeof";
              return (
                typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                  ? (c = function (Ce) {
                      return typeof Ce;
                    })
                  : (c = function (Ce) {
                      return Ce && typeof Symbol == "function" && Ce.constructor === Symbol && Ce !== Symbol.prototype
                        ? "symbol"
                        : typeof Ce;
                    }),
                c(V)
              );
            }
            var m = Symbol.for("react.transitional.element"),
              d = Symbol.for("react.portal"),
              f = Symbol.for("react.fragment"),
              p = Symbol.for("react.strict_mode"),
              h = Symbol.for("react.profiler"),
              g = Symbol.for("react.consumer"),
              b = Symbol.for("react.context"),
              A = Symbol.for("react.forward_ref"),
              y = Symbol.for("react.suspense"),
              E = Symbol.for("react.suspense_list"),
              v = Symbol.for("react.memo"),
              C = Symbol.for("react.lazy"),
              x = Symbol.for("react.activity"),
              k = Symbol.for("react.postpone"),
              R = Symbol.for("react.view_transition"),
              P = Symbol.iterator;
            function D(V) {
              return V === null || c(V) !== "object"
                ? null
                : ((V = (P && V[P]) || V["@@iterator"]), typeof V == "function" ? V : null);
            }
            var O = {
                isMounted: function () {
                  return !1;
                },
                enqueueForceUpdate: function () {},
                enqueueReplaceState: function () {},
                enqueueSetState: function () {},
              },
              N = Object.assign,
              F = {};
            function B(V, ee, Ce) {
              ((this.props = V), (this.context = ee), (this.refs = F), (this.updater = Ce || O));
            }
            ((B.prototype.isReactComponent = {}),
              (B.prototype.setState = function (V, ee) {
                if (c(V) !== "object" && typeof V != "function" && V != null)
                  throw Error(
                    "takes an object of state variables to update or a function which returns an object of state variables.",
                  );
                this.updater.enqueueSetState(this, V, ee, "setState");
              }),
              (B.prototype.forceUpdate = function (V) {
                this.updater.enqueueForceUpdate(this, V, "forceUpdate");
              }));
            function L() {}
            L.prototype = B.prototype;
            function G(V, ee, Ce) {
              ((this.props = V), (this.context = ee), (this.refs = F), (this.updater = Ce || O));
            }
            var Q = (G.prototype = new L());
            ((Q.constructor = G), N(Q, B.prototype), (Q.isPureReactComponent = !0));
            var K = Array.isArray;
            function H() {}
            var U = { H: null, A: null, T: null, S: null, G: null },
              Y = Object.prototype.hasOwnProperty;
            function X(V, ee, Ce, pe, be, Ne) {
              return ((Ce = Ne.ref), { $$typeof: m, type: V, key: ee, ref: Ce !== void 0 ? Ce : null, props: Ne });
            }
            function J(V, ee) {
              return X(V.type, ee, void 0, void 0, void 0, V.props);
            }
            function q(V) {
              return c(V) === "object" && V !== null && V.$$typeof === m;
            }
            function ne(V) {
              var ee = { "=": "=0", ":": "=2" };
              return (
                "$" +
                V.replace(/[=:]/g, function (Ce) {
                  return ee[Ce];
                })
              );
            }
            var de = /\/+/g;
            function ce(V, ee) {
              return c(V) === "object" && V !== null && V.key != null ? ne("" + V.key) : ee.toString(36);
            }
            function ye(V) {
              switch (V.status) {
                case "fulfilled":
                  return V.value;
                case "rejected":
                  throw V.reason;
                default:
                  switch (
                    (typeof V.status == "string"
                      ? V.then(H, H)
                      : ((V.status = "pending"),
                        V.then(
                          function (ee) {
                            V.status === "pending" && ((V.status = "fulfilled"), (V.value = ee));
                          },
                          function (ee) {
                            V.status === "pending" && ((V.status = "rejected"), (V.reason = ee));
                          },
                        )),
                    V.status)
                  ) {
                    case "fulfilled":
                      return V.value;
                    case "rejected":
                      throw V.reason;
                  }
              }
              throw V;
            }
            function Z(V, ee, Ce, pe, be) {
              var Ne = c(V);
              (Ne === "undefined" || Ne === "boolean") && (V = null);
              var Ge = !1;
              if (V === null) Ge = !0;
              else
                switch (Ne) {
                  case "bigint":
                  case "string":
                  case "number":
                    Ge = !0;
                    break;
                  case "object":
                    switch (V.$$typeof) {
                      case m:
                      case d:
                        Ge = !0;
                        break;
                      case C:
                        return ((Ge = V._init), Z(Ge(V._payload), ee, Ce, pe, be));
                    }
                }
              if (Ge)
                return (
                  (be = be(V)),
                  (Ge = pe === "" ? "." + ce(V, 0) : pe),
                  K(be)
                    ? ((Ce = ""),
                      Ge != null && (Ce = Ge.replace(de, "$&/") + "/"),
                      Z(be, ee, Ce, "", function (_e) {
                        return _e;
                      }))
                    : be != null &&
                      (q(be) &&
                        (be = J(
                          be,
                          Ce +
                            (be.key == null || (V && V.key === be.key) ? "" : ("" + be.key).replace(de, "$&/") + "/") +
                            Ge,
                        )),
                      ee.push(be)),
                  1
                );
              Ge = 0;
              var Ze = pe === "" ? "." : pe + ":";
              if (K(V))
                for (var Ye = 0; Ye < V.length; Ye++)
                  ((pe = V[Ye]), (Ne = Ze + ce(pe, Ye)), (Ge += Z(pe, ee, Ce, Ne, be)));
              else if (((Ye = D(V)), typeof Ye == "function"))
                for (V = Ye.call(V), Ye = 0; !(pe = V.next()).done; )
                  ((pe = pe.value), (Ne = Ze + ce(pe, Ye++)), (Ge += Z(pe, ee, Ce, Ne, be)));
              else if (Ne === "object") {
                if (typeof V.then == "function") return Z(ye(V), ee, Ce, pe, be);
                throw (
                  (ee = String(V)),
                  Error(
                    "Objects are not valid as a React child (found: " +
                      (ee === "[object Object]" ? "object with keys {" + Object.keys(V).join(", ") + "}" : ee) +
                      "). If you meant to render a collection of children, use an array instead.",
                  )
                );
              }
              return Ge;
            }
            function oe(V, ee, Ce) {
              if (V == null) return V;
              var pe = [],
                be = 0;
              return (
                Z(V, pe, "", "", function (Ne) {
                  return ee.call(Ce, Ne, be++);
                }),
                pe
              );
            }
            function ue(V) {
              if (V._status === -1) {
                var ee = V._result;
                ((ee = ee()),
                  ee.then(
                    function (Ce) {
                      (V._status === 0 || V._status === -1) && ((V._status = 1), (V._result = Ce));
                    },
                    function (Ce) {
                      (V._status === 0 || V._status === -1) && ((V._status = 2), (V._result = Ce));
                    },
                  ),
                  V._status === -1 && ((V._status = 0), (V._result = ee)));
              }
              if (V._status === 1) return V._result.default;
              throw V._result;
            }
            function he(V, ee) {
              return U.H.useOptimistic(V, ee);
            }
            var se =
              typeof reportError == "function"
                ? reportError
                : function (V) {
                    if (
                      (typeof window > "u" ? "undefined" : c(window)) === "object" &&
                      typeof window.ErrorEvent == "function"
                    ) {
                      var ee = new window.ErrorEvent("error", {
                        bubbles: !0,
                        cancelable: !0,
                        message:
                          c(V) === "object" && V !== null && typeof V.message == "string"
                            ? String(V.message)
                            : String(V),
                        error: V,
                      });
                      if (!window.dispatchEvent(ee)) return;
                    } else if ((typeof u > "u" ? "undefined" : c(u)) === "object" && typeof u.emit == "function") {
                      u.emit("uncaughtException", V);
                      return;
                    }
                    console.error(V);
                  };
            function fe(V) {
              var ee = U.T,
                Ce = {};
              ((Ce.types = ee !== null ? ee.types : null), (Ce.gesture = null), (U.T = Ce));
              try {
                var pe = V(),
                  be = U.S;
                (be !== null && be(Ce, pe),
                  c(pe) === "object" && pe !== null && typeof pe.then == "function" && pe.then(H, se));
              } catch (Ne) {
                se(Ne);
              } finally {
                (ee !== null && Ce.types !== null && (ee.types = Ce.types), (U.T = ee));
              }
            }
            function ge(V) {
              var ee = U.T;
              if (ee !== null) {
                var Ce = ee.types;
                Ce === null ? (ee.types = [V]) : Ce.indexOf(V) === -1 && Ce.push(V);
              } else fe(ge.bind(null, V));
            }
            ((s.Children = {
              map: oe,
              forEach: function (ee, Ce, pe) {
                oe(
                  ee,
                  function () {
                    Ce.apply(this, arguments);
                  },
                  pe,
                );
              },
              count: function (ee) {
                var Ce = 0;
                return (
                  oe(ee, function () {
                    Ce++;
                  }),
                  Ce
                );
              },
              toArray: function (ee) {
                return (
                  oe(ee, function (Ce) {
                    return Ce;
                  }) || []
                );
              },
              only: function (ee) {
                if (!q(ee)) throw Error("React.Children.only expected to receive a single React element child.");
                return ee;
              },
            }),
              (s.Component = B),
              (s.Fragment = f),
              (s.Profiler = h),
              (s.PureComponent = G),
              (s.StrictMode = p),
              (s.Suspense = y),
              (s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U),
              (s.__COMPILER_RUNTIME = {
                __proto__: null,
                c: function (ee) {
                  return U.H.useMemoCache(ee);
                },
              }),
              (s.cache = function (V) {
                return function () {
                  return V.apply(null, arguments);
                };
              }),
              (s.cacheSignal = function () {
                return null;
              }),
              (s.cloneElement = function (V, ee, Ce) {
                if (V == null) throw Error("The argument must be a React element, but you passed " + V + ".");
                var pe = N({}, V.props),
                  be = V.key,
                  Ne = void 0;
                if (ee != null)
                  for (Ge in (ee.ref !== void 0 && (Ne = void 0), ee.key !== void 0 && (be = "" + ee.key), ee))
                    !Y.call(ee, Ge) ||
                      Ge === "key" ||
                      Ge === "__self" ||
                      Ge === "__source" ||
                      (Ge === "ref" && ee.ref === void 0) ||
                      (pe[Ge] = ee[Ge]);
                var Ge = arguments.length - 2;
                if (Ge === 1) pe.children = Ce;
                else if (1 < Ge) {
                  for (var Ze = Array(Ge), Ye = 0; Ye < Ge; Ye++) Ze[Ye] = arguments[Ye + 2];
                  pe.children = Ze;
                }
                return X(V.type, be, void 0, void 0, Ne, pe);
              }),
              (s.createContext = function (V) {
                return (
                  (V = {
                    $$typeof: b,
                    _currentValue: V,
                    _currentValue2: V,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                  }),
                  (V.Provider = V),
                  (V.Consumer = { $$typeof: g, _context: V }),
                  V
                );
              }),
              (s.createElement = function (V, ee, Ce) {
                var pe,
                  be = {},
                  Ne = null;
                if (ee != null)
                  for (pe in (ee.key !== void 0 && (Ne = "" + ee.key), ee))
                    Y.call(ee, pe) && pe !== "key" && pe !== "__self" && pe !== "__source" && (be[pe] = ee[pe]);
                var Ge = arguments.length - 2;
                if (Ge === 1) be.children = Ce;
                else if (1 < Ge) {
                  for (var Ze = Array(Ge), Ye = 0; Ye < Ge; Ye++) Ze[Ye] = arguments[Ye + 2];
                  be.children = Ze;
                }
                if (V && V.defaultProps) for (pe in ((Ge = V.defaultProps), Ge)) be[pe] === void 0 && (be[pe] = Ge[pe]);
                return X(V, Ne, void 0, void 0, null, be);
              }),
              (s.createRef = function () {
                return { current: null };
              }),
              (s.experimental_useEffectEvent = function (V) {
                return U.H.useEffectEvent(V);
              }),
              (s.experimental_useOptimistic = function (V, ee) {
                return he(V, ee);
              }),
              (s.forwardRef = function (V) {
                return { $$typeof: A, render: V };
              }),
              (s.isValidElement = q),
              (s.lazy = function (V) {
                return { $$typeof: C, _payload: { _status: -1, _result: V }, _init: ue };
              }),
              (s.memo = function (V, ee) {
                return { $$typeof: v, type: V, compare: ee === void 0 ? null : ee };
              }),
              (s.startTransition = fe),
              (s.unstable_Activity = x),
              (s.unstable_SuspenseList = E),
              (s.unstable_ViewTransition = R),
              (s.unstable_addTransitionType = ge),
              (s.unstable_getCacheForType = function (V) {
                var ee = U.A;
                return ee ? ee.getCacheForType(V) : V();
              }),
              (s.unstable_postpone = function (V) {
                throw ((V = Error(V)), (V.$$typeof = k), V);
              }),
              (s.unstable_startGestureTransition = function (V, ee, Ce) {
                if (V == null) throw Error("A Timeline is required as the first argument to startGestureTransition.");
                var pe = U.T,
                  be = { types: null };
                ((be.gesture = V), (U.T = be));
                try {
                  ee();
                  var Ne = U.G;
                  if (Ne !== null) return Ne(be, V, Ce);
                } catch (Ge) {
                  se(Ge);
                } finally {
                  U.T = pe;
                }
                return H;
              }),
              (s.unstable_useCacheRefresh = function () {
                return U.H.useCacheRefresh();
              }),
              (s.use = function (V) {
                return U.H.use(V);
              }),
              (s.useActionState = function (V, ee, Ce) {
                return U.H.useActionState(V, ee, Ce);
              }),
              (s.useCallback = function (V, ee) {
                return U.H.useCallback(V, ee);
              }),
              (s.useContext = function (V) {
                return U.H.useContext(V);
              }),
              (s.useDebugValue = function () {}),
              (s.useDeferredValue = function (V, ee) {
                return U.H.useDeferredValue(V, ee);
              }),
              (s.useEffect = function (V, ee) {
                return U.H.useEffect(V, ee);
              }),
              (s.useId = function () {
                return U.H.useId();
              }),
              (s.useImperativeHandle = function (V, ee, Ce) {
                return U.H.useImperativeHandle(V, ee, Ce);
              }),
              (s.useInsertionEffect = function (V, ee) {
                return U.H.useInsertionEffect(V, ee);
              }),
              (s.useLayoutEffect = function (V, ee) {
                return U.H.useLayoutEffect(V, ee);
              }),
              (s.useMemo = function (V, ee) {
                return U.H.useMemo(V, ee);
              }),
              (s.useOptimistic = he),
              (s.useReducer = function (V, ee, Ce) {
                return U.H.useReducer(V, ee, Ce);
              }),
              (s.useRef = function (V) {
                return U.H.useRef(V);
              }),
              (s.useState = function (V) {
                return U.H.useState(V);
              }),
              (s.useSyncExternalStore = function (V, ee, Ce) {
                return U.H.useSyncExternalStore(V, ee, Ce);
              }),
              (s.useTransition = function () {
                return U.H.useTransition();
              }),
              (s.version = "19.2.0-experimental-5d87cd22-20250704"));
          },
          189: (o, s, a) => {
            "use strict";
            o.exports = a(126);
          },
          206: function (o, s, a) {
            var u, c, m;
            function d(f) {
              "@babel/helpers - typeof";
              return (
                typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                  ? (d = function (h) {
                      return typeof h;
                    })
                  : (d = function (h) {
                      return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype
                        ? "symbol"
                        : typeof h;
                    }),
                d(f)
              );
            }
            (function (f, p) {
              "use strict";
              ((c = [a(430)]),
                (u = p),
                (m = typeof u == "function" ? u.apply(s, c) : u),
                m !== void 0 && (o.exports = m));
            })(this, function (p) {
              "use strict";
              var h = /(^|@)\S+:\d+/,
                g = /^\s*at .*(\S+:\d+|\(native\))/m,
                b = /^(eval@)?(\[native code])?$/;
              return {
                parse: function (y) {
                  if (typeof y.stacktrace < "u" || typeof y["opera#sourceloc"] < "u") return this.parseOpera(y);
                  if (y.stack && y.stack.match(g)) return this.parseV8OrIE(y);
                  if (y.stack) return this.parseFFOrSafari(y);
                  throw new Error("Cannot parse given Error object");
                },
                extractLocation: function (y) {
                  if (y.indexOf(":") === -1) return [y];
                  var E = /(.+?)(?::(\d+))?(?::(\d+))?$/,
                    v = E.exec(y.replace(/[()]/g, ""));
                  return [v[1], v[2] || void 0, v[3] || void 0];
                },
                parseV8OrIE: function (y) {
                  var E = y.stack
                    .split(
                      `
`,
                    )
                    .filter(function (v) {
                      return !!v.match(g);
                    }, this);
                  return E.map(function (v) {
                    v.indexOf("(eval ") > -1 &&
                      (v = v.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
                    var C = v.replace(/^\s+/, "").replace(/\(eval code/g, "("),
                      x = C.match(/ (\((.+):(\d+):(\d+)\)$)/);
                    C = x ? C.replace(x[0], "") : C;
                    var k = C.split(/\s+/).slice(1),
                      R = this.extractLocation(x ? x[1] : k.pop()),
                      P = k.join(" ") || void 0,
                      D = ["eval", "<anonymous>"].indexOf(R[0]) > -1 ? void 0 : R[0];
                    return new p({ functionName: P, fileName: D, lineNumber: R[1], columnNumber: R[2], source: v });
                  }, this);
                },
                parseFFOrSafari: function (y) {
                  var E = y.stack
                    .split(
                      `
`,
                    )
                    .filter(function (v) {
                      return !v.match(b);
                    }, this);
                  return E.map(function (v) {
                    if (
                      (v.indexOf(" > eval") > -1 &&
                        (v = v.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")),
                      v.indexOf("@") === -1 && v.indexOf(":") === -1)
                    )
                      return new p({ functionName: v });
                    var C = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                      x = v.match(C),
                      k = x && x[1] ? x[1] : void 0,
                      R = this.extractLocation(v.replace(C, ""));
                    return new p({ functionName: k, fileName: R[0], lineNumber: R[1], columnNumber: R[2], source: v });
                  }, this);
                },
                parseOpera: function (y) {
                  return !y.stacktrace ||
                    (y.message.indexOf(`
`) > -1 &&
                      y.message.split(`
`).length >
                        y.stacktrace.split(`
`).length)
                    ? this.parseOpera9(y)
                    : y.stack
                      ? this.parseOpera11(y)
                      : this.parseOpera10(y);
                },
                parseOpera9: function (y) {
                  for (
                    var E = /Line (\d+).*script (?:in )?(\S+)/i,
                      v = y.message.split(`
`),
                      C = [],
                      x = 2,
                      k = v.length;
                    x < k;
                    x += 2
                  ) {
                    var R = E.exec(v[x]);
                    R && C.push(new p({ fileName: R[2], lineNumber: R[1], source: v[x] }));
                  }
                  return C;
                },
                parseOpera10: function (y) {
                  for (
                    var E = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                      v = y.stacktrace.split(`
`),
                      C = [],
                      x = 0,
                      k = v.length;
                    x < k;
                    x += 2
                  ) {
                    var R = E.exec(v[x]);
                    R &&
                      C.push(new p({ functionName: R[3] || void 0, fileName: R[2], lineNumber: R[1], source: v[x] }));
                  }
                  return C;
                },
                parseOpera11: function (y) {
                  var E = y.stack
                    .split(
                      `
`,
                    )
                    .filter(function (v) {
                      return !!v.match(h) && !v.match(/^Error created at/);
                    }, this);
                  return E.map(function (v) {
                    var C = v.split("@"),
                      x = this.extractLocation(C.pop()),
                      k = C.shift() || "",
                      R = k.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0,
                      P;
                    k.match(/\(([^)]*)\)/) && (P = k.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                    var D = P === void 0 || P === "[arguments not available]" ? void 0 : P.split(",");
                    return new p({
                      functionName: R,
                      args: D,
                      fileName: x[0],
                      lineNumber: x[1],
                      columnNumber: x[2],
                      source: v,
                    });
                  }, this);
                },
              };
            });
          },
          730: (o, s, a) => {
            "use strict";
            function u(B, L) {
              if (!(B instanceof L)) throw new TypeError("Cannot call a class as a function");
            }
            function c(B, L) {
              for (var G = 0; G < L.length; G++) {
                var Q = L[G];
                ((Q.enumerable = Q.enumerable || !1),
                  (Q.configurable = !0),
                  "value" in Q && (Q.writable = !0),
                  Object.defineProperty(B, Q.key, Q));
              }
            }
            function m(B, L, G) {
              return (L && c(B.prototype, L), G && c(B, G), B);
            }
            var d = a(695),
              f = Symbol("max"),
              p = Symbol("length"),
              h = Symbol("lengthCalculator"),
              g = Symbol("allowStale"),
              b = Symbol("maxAge"),
              A = Symbol("dispose"),
              y = Symbol("noDisposeOnSet"),
              E = Symbol("lruList"),
              v = Symbol("cache"),
              C = Symbol("updateAgeOnGet"),
              x = function () {
                return 1;
              },
              k = (function () {
                function B(L) {
                  if (
                    (u(this, B),
                    typeof L == "number" && (L = { max: L }),
                    L || (L = {}),
                    L.max && (typeof L.max != "number" || L.max < 0))
                  )
                    throw new TypeError("max must be a non-negative number");
                  var G = (this[f] = L.max || 1 / 0),
                    Q = L.length || x;
                  if (
                    ((this[h] = typeof Q != "function" ? x : Q),
                    (this[g] = L.stale || !1),
                    L.maxAge && typeof L.maxAge != "number")
                  )
                    throw new TypeError("maxAge must be a number");
                  ((this[b] = L.maxAge || 0),
                    (this[A] = L.dispose),
                    (this[y] = L.noDisposeOnSet || !1),
                    (this[C] = L.updateAgeOnGet || !1),
                    this.reset());
                }
                return m(B, [
                  {
                    key: "max",
                    get: function () {
                      return this[f];
                    },
                    set: function (G) {
                      if (typeof G != "number" || G < 0) throw new TypeError("max must be a non-negative number");
                      ((this[f] = G || 1 / 0), D(this));
                    },
                  },
                  {
                    key: "allowStale",
                    get: function () {
                      return this[g];
                    },
                    set: function (G) {
                      this[g] = !!G;
                    },
                  },
                  {
                    key: "maxAge",
                    get: function () {
                      return this[b];
                    },
                    set: function (G) {
                      if (typeof G != "number") throw new TypeError("maxAge must be a non-negative number");
                      ((this[b] = G), D(this));
                    },
                  },
                  {
                    key: "lengthCalculator",
                    get: function () {
                      return this[h];
                    },
                    set: function (G) {
                      var Q = this;
                      (typeof G != "function" && (G = x),
                        G !== this[h] &&
                          ((this[h] = G),
                          (this[p] = 0),
                          this[E].forEach(function (K) {
                            ((K.length = Q[h](K.value, K.key)), (Q[p] += K.length));
                          })),
                        D(this));
                    },
                  },
                  {
                    key: "length",
                    get: function () {
                      return this[p];
                    },
                  },
                  {
                    key: "itemCount",
                    get: function () {
                      return this[E].length;
                    },
                  },
                  {
                    key: "rforEach",
                    value: function (G, Q) {
                      Q = Q || this;
                      for (var K = this[E].tail; K !== null; ) {
                        var H = K.prev;
                        (F(this, G, K, Q), (K = H));
                      }
                    },
                  },
                  {
                    key: "forEach",
                    value: function (G, Q) {
                      Q = Q || this;
                      for (var K = this[E].head; K !== null; ) {
                        var H = K.next;
                        (F(this, G, K, Q), (K = H));
                      }
                    },
                  },
                  {
                    key: "keys",
                    value: function () {
                      return this[E].toArray().map(function (G) {
                        return G.key;
                      });
                    },
                  },
                  {
                    key: "values",
                    value: function () {
                      return this[E].toArray().map(function (G) {
                        return G.value;
                      });
                    },
                  },
                  {
                    key: "reset",
                    value: function () {
                      var G = this;
                      (this[A] &&
                        this[E] &&
                        this[E].length &&
                        this[E].forEach(function (Q) {
                          return G[A](Q.key, Q.value);
                        }),
                        (this[v] = new Map()),
                        (this[E] = new d()),
                        (this[p] = 0));
                    },
                  },
                  {
                    key: "dump",
                    value: function () {
                      var G = this;
                      return this[E].map(function (Q) {
                        return P(G, Q) ? !1 : { k: Q.key, v: Q.value, e: Q.now + (Q.maxAge || 0) };
                      })
                        .toArray()
                        .filter(function (Q) {
                          return Q;
                        });
                    },
                  },
                  {
                    key: "dumpLru",
                    value: function () {
                      return this[E];
                    },
                  },
                  {
                    key: "set",
                    value: function (G, Q, K) {
                      if (((K = K || this[b]), K && typeof K != "number"))
                        throw new TypeError("maxAge must be a number");
                      var H = K ? Date.now() : 0,
                        U = this[h](Q, G);
                      if (this[v].has(G)) {
                        if (U > this[f]) return (O(this, this[v].get(G)), !1);
                        var Y = this[v].get(G),
                          X = Y.value;
                        return (
                          this[A] && (this[y] || this[A](G, X.value)),
                          (X.now = H),
                          (X.maxAge = K),
                          (X.value = Q),
                          (this[p] += U - X.length),
                          (X.length = U),
                          this.get(G),
                          D(this),
                          !0
                        );
                      }
                      var J = new N(G, Q, U, H, K);
                      return J.length > this[f]
                        ? (this[A] && this[A](G, Q), !1)
                        : ((this[p] += J.length), this[E].unshift(J), this[v].set(G, this[E].head), D(this), !0);
                    },
                  },
                  {
                    key: "has",
                    value: function (G) {
                      if (!this[v].has(G)) return !1;
                      var Q = this[v].get(G).value;
                      return !P(this, Q);
                    },
                  },
                  {
                    key: "get",
                    value: function (G) {
                      return R(this, G, !0);
                    },
                  },
                  {
                    key: "peek",
                    value: function (G) {
                      return R(this, G, !1);
                    },
                  },
                  {
                    key: "pop",
                    value: function () {
                      var G = this[E].tail;
                      return G ? (O(this, G), G.value) : null;
                    },
                  },
                  {
                    key: "del",
                    value: function (G) {
                      O(this, this[v].get(G));
                    },
                  },
                  {
                    key: "load",
                    value: function (G) {
                      this.reset();
                      for (var Q = Date.now(), K = G.length - 1; K >= 0; K--) {
                        var H = G[K],
                          U = H.e || 0;
                        if (U === 0) this.set(H.k, H.v);
                        else {
                          var Y = U - Q;
                          Y > 0 && this.set(H.k, H.v, Y);
                        }
                      }
                    },
                  },
                  {
                    key: "prune",
                    value: function () {
                      var G = this;
                      this[v].forEach(function (Q, K) {
                        return R(G, K, !1);
                      });
                    },
                  },
                ]);
              })(),
              R = function (L, G, Q) {
                var K = L[v].get(G);
                if (K) {
                  var H = K.value;
                  if (P(L, H)) {
                    if ((O(L, K), !L[g])) return;
                  } else Q && (L[C] && (K.value.now = Date.now()), L[E].unshiftNode(K));
                  return H.value;
                }
              },
              P = function (L, G) {
                if (!G || (!G.maxAge && !L[b])) return !1;
                var Q = Date.now() - G.now;
                return G.maxAge ? Q > G.maxAge : L[b] && Q > L[b];
              },
              D = function (L) {
                if (L[p] > L[f])
                  for (var G = L[E].tail; L[p] > L[f] && G !== null; ) {
                    var Q = G.prev;
                    (O(L, G), (G = Q));
                  }
              },
              O = function (L, G) {
                if (G) {
                  var Q = G.value;
                  (L[A] && L[A](Q.key, Q.value), (L[p] -= Q.length), L[v].delete(Q.key), L[E].removeNode(G));
                }
              },
              N = m(function B(L, G, Q, K, H) {
                (u(this, B),
                  (this.key = L),
                  (this.value = G),
                  (this.length = Q),
                  (this.now = K),
                  (this.maxAge = H || 0));
              }),
              F = function (L, G, Q, K) {
                var H = Q.value;
                (P(L, H) && (O(L, Q), L[g] || (H = void 0)), H && G.call(K, H.value, H.key, L));
              };
            o.exports = k;
          },
          169: (o) => {
            var s = (o.exports = {}),
              a,
              u;
            function c() {
              throw new Error("setTimeout has not been defined");
            }
            function m() {
              throw new Error("clearTimeout has not been defined");
            }
            (function () {
              try {
                typeof setTimeout == "function" ? (a = setTimeout) : (a = c);
              } catch {
                a = c;
              }
              try {
                typeof clearTimeout == "function" ? (u = clearTimeout) : (u = m);
              } catch {
                u = m;
              }
            })();
            function d(C) {
              if (a === setTimeout) return setTimeout(C, 0);
              if ((a === c || !a) && setTimeout) return ((a = setTimeout), setTimeout(C, 0));
              try {
                return a(C, 0);
              } catch {
                try {
                  return a.call(null, C, 0);
                } catch {
                  return a.call(this, C, 0);
                }
              }
            }
            function f(C) {
              if (u === clearTimeout) return clearTimeout(C);
              if ((u === m || !u) && clearTimeout) return ((u = clearTimeout), clearTimeout(C));
              try {
                return u(C);
              } catch {
                try {
                  return u.call(null, C);
                } catch {
                  return u.call(this, C);
                }
              }
            }
            var p = [],
              h = !1,
              g,
              b = -1;
            function A() {
              !h || !g || ((h = !1), g.length ? (p = g.concat(p)) : (b = -1), p.length && y());
            }
            function y() {
              if (!h) {
                var C = d(A);
                h = !0;
                for (var x = p.length; x; ) {
                  for (g = p, p = []; ++b < x; ) g && g[b].run();
                  ((b = -1), (x = p.length));
                }
                ((g = null), (h = !1), f(C));
              }
            }
            s.nextTick = function (C) {
              var x = new Array(arguments.length - 1);
              if (arguments.length > 1) for (var k = 1; k < arguments.length; k++) x[k - 1] = arguments[k];
              (p.push(new E(C, x)), p.length === 1 && !h && d(y));
            };
            function E(C, x) {
              ((this.fun = C), (this.array = x));
            }
            ((E.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
              (s.title = "browser"),
              (s.browser = !0),
              (s.env = {}),
              (s.argv = []),
              (s.version = ""),
              (s.versions = {}));
            function v() {}
            ((s.on = v),
              (s.addListener = v),
              (s.once = v),
              (s.off = v),
              (s.removeListener = v),
              (s.removeAllListeners = v),
              (s.emit = v),
              (s.prependListener = v),
              (s.prependOnceListener = v),
              (s.listeners = function (C) {
                return [];
              }),
              (s.binding = function (C) {
                throw new Error("process.binding is not supported");
              }),
              (s.cwd = function () {
                return "/";
              }),
              (s.chdir = function (C) {
                throw new Error("process.chdir is not supported");
              }),
              (s.umask = function () {
                return 0;
              }));
          },
          430: function (o, s) {
            var a, u, c;
            function m(d) {
              "@babel/helpers - typeof";
              return (
                typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                  ? (m = function (p) {
                      return typeof p;
                    })
                  : (m = function (p) {
                      return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype
                        ? "symbol"
                        : typeof p;
                    }),
                m(d)
              );
            }
            (function (d, f) {
              "use strict";
              ((u = []), (a = f), (c = typeof a == "function" ? a.apply(s, u) : a), c !== void 0 && (o.exports = c));
            })(this, function () {
              "use strict";
              function d(k) {
                return !isNaN(parseFloat(k)) && isFinite(k);
              }
              function f(k) {
                return k.charAt(0).toUpperCase() + k.substring(1);
              }
              function p(k) {
                return function () {
                  return this[k];
                };
              }
              var h = ["isConstructor", "isEval", "isNative", "isToplevel"],
                g = ["columnNumber", "lineNumber"],
                b = ["fileName", "functionName", "source"],
                A = ["args"],
                y = h.concat(g, b, A);
              function E(k) {
                if (k) for (var R = 0; R < y.length; R++) k[y[R]] !== void 0 && this["set" + f(y[R])](k[y[R]]);
              }
              ((E.prototype = {
                getArgs: function () {
                  return this.args;
                },
                setArgs: function (R) {
                  if (Object.prototype.toString.call(R) !== "[object Array]")
                    throw new TypeError("Args must be an Array");
                  this.args = R;
                },
                getEvalOrigin: function () {
                  return this.evalOrigin;
                },
                setEvalOrigin: function (R) {
                  if (R instanceof E) this.evalOrigin = R;
                  else if (R instanceof Object) this.evalOrigin = new E(R);
                  else throw new TypeError("Eval Origin must be an Object or StackFrame");
                },
                toString: function () {
                  var R = this.getFileName() || "",
                    P = this.getLineNumber() || "",
                    D = this.getColumnNumber() || "",
                    O = this.getFunctionName() || "";
                  return this.getIsEval()
                    ? R
                      ? "[eval] (" + R + ":" + P + ":" + D + ")"
                      : "[eval]:" + P + ":" + D
                    : O
                      ? O + " (" + R + ":" + P + ":" + D + ")"
                      : R + ":" + P + ":" + D;
                },
              }),
                (E.fromString = function (R) {
                  var P = R.indexOf("("),
                    D = R.lastIndexOf(")"),
                    O = R.substring(0, P),
                    N = R.substring(P + 1, D).split(","),
                    F = R.substring(D + 1);
                  if (F.indexOf("@") === 0)
                    var B = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(F, ""),
                      L = B[1],
                      G = B[2],
                      Q = B[3];
                  return new E({
                    functionName: O,
                    args: N || void 0,
                    fileName: L,
                    lineNumber: G || void 0,
                    columnNumber: Q || void 0,
                  });
                }));
              for (var v = 0; v < h.length; v++)
                ((E.prototype["get" + f(h[v])] = p(h[v])),
                  (E.prototype["set" + f(h[v])] = (function (k) {
                    return function (R) {
                      this[k] = !!R;
                    };
                  })(h[v])));
              for (var C = 0; C < g.length; C++)
                ((E.prototype["get" + f(g[C])] = p(g[C])),
                  (E.prototype["set" + f(g[C])] = (function (k) {
                    return function (R) {
                      if (!d(R)) throw new TypeError(k + " must be a Number");
                      this[k] = Number(R);
                    };
                  })(g[C])));
              for (var x = 0; x < b.length; x++)
                ((E.prototype["get" + f(b[x])] = p(b[x])),
                  (E.prototype["set" + f(b[x])] = (function (k) {
                    return function (R) {
                      this[k] = String(R);
                    };
                  })(b[x])));
              return E;
            });
          },
          476: (o) => {
            "use strict";
            o.exports = function (s) {
              s.prototype[Symbol.iterator] = regeneratorRuntime.mark(function a() {
                var u;
                return regeneratorRuntime.wrap(
                  function (m) {
                    for (;;)
                      switch ((m.prev = m.next)) {
                        case 0:
                          u = this.head;
                        case 1:
                          if (!u) {
                            m.next = 7;
                            break;
                          }
                          return ((m.next = 4), u.value);
                        case 4:
                          ((u = u.next), (m.next = 1));
                          break;
                        case 7:
                        case "end":
                          return m.stop();
                      }
                  },
                  a,
                  this,
                );
              });
            };
          },
          695: (o, s, a) => {
            "use strict";
            ((o.exports = u), (u.Node = f), (u.create = u));
            function u(p) {
              var h = this;
              if (
                (h instanceof u || (h = new u()),
                (h.tail = null),
                (h.head = null),
                (h.length = 0),
                p && typeof p.forEach == "function")
              )
                p.forEach(function (A) {
                  h.push(A);
                });
              else if (arguments.length > 0) for (var g = 0, b = arguments.length; g < b; g++) h.push(arguments[g]);
              return h;
            }
            ((u.prototype.removeNode = function (p) {
              if (p.list !== this) throw new Error("removing node which does not belong to this list");
              var h = p.next,
                g = p.prev;
              return (
                h && (h.prev = g),
                g && (g.next = h),
                p === this.head && (this.head = h),
                p === this.tail && (this.tail = g),
                p.list.length--,
                (p.next = null),
                (p.prev = null),
                (p.list = null),
                h
              );
            }),
              (u.prototype.unshiftNode = function (p) {
                if (p !== this.head) {
                  p.list && p.list.removeNode(p);
                  var h = this.head;
                  ((p.list = this),
                    (p.next = h),
                    h && (h.prev = p),
                    (this.head = p),
                    this.tail || (this.tail = p),
                    this.length++);
                }
              }),
              (u.prototype.pushNode = function (p) {
                if (p !== this.tail) {
                  p.list && p.list.removeNode(p);
                  var h = this.tail;
                  ((p.list = this),
                    (p.prev = h),
                    h && (h.next = p),
                    (this.tail = p),
                    this.head || (this.head = p),
                    this.length++);
                }
              }),
              (u.prototype.push = function () {
                for (var p = 0, h = arguments.length; p < h; p++) m(this, arguments[p]);
                return this.length;
              }),
              (u.prototype.unshift = function () {
                for (var p = 0, h = arguments.length; p < h; p++) d(this, arguments[p]);
                return this.length;
              }),
              (u.prototype.pop = function () {
                if (this.tail) {
                  var p = this.tail.value;
                  return (
                    (this.tail = this.tail.prev),
                    this.tail ? (this.tail.next = null) : (this.head = null),
                    this.length--,
                    p
                  );
                }
              }),
              (u.prototype.shift = function () {
                if (this.head) {
                  var p = this.head.value;
                  return (
                    (this.head = this.head.next),
                    this.head ? (this.head.prev = null) : (this.tail = null),
                    this.length--,
                    p
                  );
                }
              }),
              (u.prototype.forEach = function (p, h) {
                h = h || this;
                for (var g = this.head, b = 0; g !== null; b++) (p.call(h, g.value, b, this), (g = g.next));
              }),
              (u.prototype.forEachReverse = function (p, h) {
                h = h || this;
                for (var g = this.tail, b = this.length - 1; g !== null; b--)
                  (p.call(h, g.value, b, this), (g = g.prev));
              }),
              (u.prototype.get = function (p) {
                for (var h = 0, g = this.head; g !== null && h < p; h++) g = g.next;
                if (h === p && g !== null) return g.value;
              }),
              (u.prototype.getReverse = function (p) {
                for (var h = 0, g = this.tail; g !== null && h < p; h++) g = g.prev;
                if (h === p && g !== null) return g.value;
              }),
              (u.prototype.map = function (p, h) {
                h = h || this;
                for (var g = new u(), b = this.head; b !== null; ) (g.push(p.call(h, b.value, this)), (b = b.next));
                return g;
              }),
              (u.prototype.mapReverse = function (p, h) {
                h = h || this;
                for (var g = new u(), b = this.tail; b !== null; ) (g.push(p.call(h, b.value, this)), (b = b.prev));
                return g;
              }),
              (u.prototype.reduce = function (p, h) {
                var g,
                  b = this.head;
                if (arguments.length > 1) g = h;
                else if (this.head) ((b = this.head.next), (g = this.head.value));
                else throw new TypeError("Reduce of empty list with no initial value");
                for (var A = 0; b !== null; A++) ((g = p(g, b.value, A)), (b = b.next));
                return g;
              }),
              (u.prototype.reduceReverse = function (p, h) {
                var g,
                  b = this.tail;
                if (arguments.length > 1) g = h;
                else if (this.tail) ((b = this.tail.prev), (g = this.tail.value));
                else throw new TypeError("Reduce of empty list with no initial value");
                for (var A = this.length - 1; b !== null; A--) ((g = p(g, b.value, A)), (b = b.prev));
                return g;
              }),
              (u.prototype.toArray = function () {
                for (var p = new Array(this.length), h = 0, g = this.head; g !== null; h++)
                  ((p[h] = g.value), (g = g.next));
                return p;
              }),
              (u.prototype.toArrayReverse = function () {
                for (var p = new Array(this.length), h = 0, g = this.tail; g !== null; h++)
                  ((p[h] = g.value), (g = g.prev));
                return p;
              }),
              (u.prototype.slice = function (p, h) {
                ((h = h || this.length), h < 0 && (h += this.length), (p = p || 0), p < 0 && (p += this.length));
                var g = new u();
                if (h < p || h < 0) return g;
                (p < 0 && (p = 0), h > this.length && (h = this.length));
                for (var b = 0, A = this.head; A !== null && b < p; b++) A = A.next;
                for (; A !== null && b < h; b++, A = A.next) g.push(A.value);
                return g;
              }),
              (u.prototype.sliceReverse = function (p, h) {
                ((h = h || this.length), h < 0 && (h += this.length), (p = p || 0), p < 0 && (p += this.length));
                var g = new u();
                if (h < p || h < 0) return g;
                (p < 0 && (p = 0), h > this.length && (h = this.length));
                for (var b = this.length, A = this.tail; A !== null && b > h; b--) A = A.prev;
                for (; A !== null && b > p; b--, A = A.prev) g.push(A.value);
                return g;
              }),
              (u.prototype.splice = function (p, h) {
                (p > this.length && (p = this.length - 1), p < 0 && (p = this.length + p));
                for (var g = 0, b = this.head; b !== null && g < p; g++) b = b.next;
                for (var A = [], g = 0; b && g < h; g++) (A.push(b.value), (b = this.removeNode(b)));
                (b === null && (b = this.tail), b !== this.head && b !== this.tail && (b = b.prev));
                for (var g = 2; g < arguments.length; g++) b = c(this, b, arguments[g]);
                return A;
              }),
              (u.prototype.reverse = function () {
                for (var p = this.head, h = this.tail, g = p; g !== null; g = g.prev) {
                  var b = g.prev;
                  ((g.prev = g.next), (g.next = b));
                }
                return ((this.head = h), (this.tail = p), this);
              }));
            function c(p, h, g) {
              var b = h === p.head ? new f(g, null, h, p) : new f(g, h, h.next, p);
              return (b.next === null && (p.tail = b), b.prev === null && (p.head = b), p.length++, b);
            }
            function m(p, h) {
              ((p.tail = new f(h, p.tail, null, p)), p.head || (p.head = p.tail), p.length++);
            }
            function d(p, h) {
              ((p.head = new f(h, null, p.head, p)), p.tail || (p.tail = p.head), p.length++);
            }
            function f(p, h, g, b) {
              if (!(this instanceof f)) return new f(p, h, g, b);
              ((this.list = b),
                (this.value = p),
                h ? ((h.next = this), (this.prev = h)) : (this.prev = null),
                g ? ((g.prev = this), (this.next = g)) : (this.next = null));
            }
            try {
              a(476)(u);
            } catch {}
          },
        },
        e = {};
      function r(o) {
        var s = e[o];
        if (s !== void 0) return s.exports;
        var a = (e[o] = { exports: {} });
        return (t[o].call(a.exports, a, a.exports, r), a.exports);
      }
      ((r.n = (o) => {
        var s = o && o.__esModule ? () => o.default : () => o;
        return (r.d(s, { a: s }), s);
      }),
        (r.d = (o, s) => {
          for (var a in s) r.o(s, a) && !r.o(o, a) && Object.defineProperty(o, a, { enumerable: !0, get: s[a] });
        }),
        (r.o = (o, s) => Object.prototype.hasOwnProperty.call(o, s)),
        (r.r = (o) => {
          (typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(o, "__esModule", { value: !0 }));
        }));
      var n = {};
      return (
        (() => {
          "use strict";
          (r.r(n),
            r.d(n, {
              connectToDevTools: () => B1,
              connectWithCustomMessagingProtocol: () => Xd,
              initialize: () => S7e,
            }));
          function o($, re) {
            if (!($ instanceof re)) throw new TypeError("Cannot call a class as a function");
          }
          function s($, re) {
            for (var te = 0; te < re.length; te++) {
              var le = re[te];
              ((le.enumerable = le.enumerable || !1),
                (le.configurable = !0),
                "value" in le && (le.writable = !0),
                Object.defineProperty($, le.key, le));
            }
          }
          function a($, re, te) {
            return (re && s($.prototype, re), te && s($, te), $);
          }
          function u($, re, te) {
            return (
              re in $
                ? Object.defineProperty($, re, { value: te, enumerable: !0, configurable: !0, writable: !0 })
                : ($[re] = te),
              $
            );
          }
          var c = (function () {
              function $() {
                (o(this, $), u(this, "listenersMap", new Map()));
              }
              return a($, [
                {
                  key: "addListener",
                  value: function (te, le) {
                    var Oe = this.listenersMap.get(te);
                    if (Oe === void 0) this.listenersMap.set(te, [le]);
                    else {
                      var et = Oe.indexOf(le);
                      et < 0 && Oe.push(le);
                    }
                  },
                },
                {
                  key: "emit",
                  value: function (te) {
                    var le = this.listenersMap.get(te);
                    if (le !== void 0) {
                      for (var Oe = arguments.length, et = new Array(Oe > 1 ? Oe - 1 : 0), ht = 1; ht < Oe; ht++)
                        et[ht - 1] = arguments[ht];
                      if (le.length === 1) {
                        var Ue = le[0];
                        Ue.apply(null, et);
                      } else {
                        for (var st = !1, Et = null, Pt = Array.from(le), gt = 0; gt < Pt.length; gt++) {
                          var Bt = Pt[gt];
                          try {
                            Bt.apply(null, et);
                          } catch (zt) {
                            Et === null && ((st = !0), (Et = zt));
                          }
                        }
                        if (st) throw Et;
                      }
                    }
                  },
                },
                {
                  key: "removeAllListeners",
                  value: function () {
                    this.listenersMap.clear();
                  },
                },
                {
                  key: "removeListener",
                  value: function (te, le) {
                    var Oe = this.listenersMap.get(te);
                    if (Oe !== void 0) {
                      var et = Oe.indexOf(le);
                      et >= 0 && Oe.splice(et, 1);
                    }
                  },
                },
              ]);
            })(),
            m = "fmkadmapgofadopljbjfkapdkoienihi",
            d = "dnjnjgbfilfphmojnmhliehogmojhclc",
            f = "ikiahnapldjmdmpkmfhjdjilojjhgcbf",
            p = !1,
            h = !1,
            g = 1,
            b = 2,
            A = 3,
            y = 4,
            E = 5,
            v = 6,
            C = 7,
            x = 1,
            k = 2,
            R = "React::DevTools::defaultTab",
            P = "React::DevTools::componentFilters",
            D = "React::DevTools::lastSelection",
            O = "React::DevTools::openInEditorUrl",
            N = "React::DevTools::openInEditorUrlPreset",
            F = "React::DevTools::parseHookNames",
            B = "React::DevTools::recordChangeDescriptions",
            L = "React::DevTools::recordTimeline",
            G = "React::DevTools::reloadAndProfile",
            Q = "React::DevTools::theme",
            K = "React::DevTools::traceUpdatesEnabled",
            H = "React::DevTools::supportsProfiling",
            U = 5,
            Y = "color: rgba(124, 124, 124, 0.75)",
            X = "\x1B[2;38;2;124;124;124m%s\x1B[0m",
            J = "\x1B[2;38;2;124;124;124m%s %o\x1B[0m";
          function q($) {
            "@babel/helpers - typeof";
            return (
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? (q = function (te) {
                    return typeof te;
                  })
                : (q = function (te) {
                    return te && typeof Symbol == "function" && te.constructor === Symbol && te !== Symbol.prototype
                      ? "symbol"
                      : typeof te;
                  }),
              q($)
            );
          }
          function ne($, re) {
            return oe($) || Z($, re) || ce($, re) || de();
          }
          function de() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function ce($, re) {
            if ($) {
              if (typeof $ == "string") return ye($, re);
              var te = Object.prototype.toString.call($).slice(8, -1);
              if ((te === "Object" && $.constructor && (te = $.constructor.name), te === "Map" || te === "Set"))
                return Array.from($);
              if (te === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te)) return ye($, re);
            }
          }
          function ye($, re) {
            (re == null || re > $.length) && (re = $.length);
            for (var te = 0, le = new Array(re); te < re; te++) le[te] = $[te];
            return le;
          }
          function Z($, re) {
            if (!(typeof Symbol > "u" || !(Symbol.iterator in Object($)))) {
              var te = [],
                le = !0,
                Oe = !1,
                et = void 0;
              try {
                for (
                  var ht = $[Symbol.iterator](), Ue;
                  !(le = (Ue = ht.next()).done) && (te.push(Ue.value), !(re && te.length === re));
                  le = !0
                );
              } catch (st) {
                ((Oe = !0), (et = st));
              } finally {
                try {
                  !le && ht.return != null && ht.return();
                } finally {
                  if (Oe) throw et;
                }
              }
              return te;
            }
          }
          function oe($) {
            if (Array.isArray($)) return $;
          }
          var ue = function (re, te) {
              var le = V(re),
                Oe = V(te),
                et = le.pop(),
                ht = Oe.pop(),
                Ue = Ne(le, Oe);
              return Ue !== 0 ? Ue : et && ht ? Ne(et.split("."), ht.split(".")) : et || ht ? (et ? -1 : 1) : 0;
            },
            he = function (re) {
              return typeof re == "string" && /^[v\d]/.test(re) && ge.test(re);
            },
            se = function (re, te, le) {
              Ye(le);
              var Oe = ue(re, te);
              return Ge[le].includes(Oe);
            },
            fe = function (re, te) {
              var le = te.match(/^([<>=~^]+)/),
                Oe = le ? le[1] : "=";
              if (Oe !== "^" && Oe !== "~") return se(re, te, Oe);
              var et = V(re),
                ht = ne(et, 5),
                Ue = ht[0],
                st = ht[1],
                Et = ht[2],
                Pt = ht[4],
                gt = V(te),
                Bt = ne(gt, 5),
                zt = Bt[0],
                ur = Bt[1],
                Or = Bt[2],
                Ir = Bt[4],
                In = [Ue, st, Et],
                io = [zt, ur ?? "x", Or ?? "x"];
              if (Ir && (!Pt || Ne(In, io) !== 0 || Ne(Pt.split("."), Ir.split(".")) === -1)) return !1;
              var gu =
                  io.findIndex(function (hi) {
                    return hi !== "0";
                  }) + 1,
                fn = Oe === "~" ? 2 : gu > 1 ? gu : 1;
              return !(Ne(In.slice(0, fn), io.slice(0, fn)) !== 0 || Ne(In.slice(fn), io.slice(fn)) === -1);
            },
            ge =
              /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,
            V = function (re) {
              if (typeof re != "string") throw new TypeError("Invalid argument expected string");
              var te = re.match(ge);
              if (!te) throw new Error("Invalid argument not valid semver ('".concat(re, "' received)"));
              return (te.shift(), te);
            },
            ee = function (re) {
              return re === "*" || re === "x" || re === "X";
            },
            Ce = function (re) {
              var te = parseInt(re, 10);
              return isNaN(te) ? re : te;
            },
            pe = function (re, te) {
              return q(re) !== q(te) ? [String(re), String(te)] : [re, te];
            },
            be = function (re, te) {
              if (ee(re) || ee(te)) return 0;
              var le = pe(Ce(re), Ce(te)),
                Oe = ne(le, 2),
                et = Oe[0],
                ht = Oe[1];
              return et > ht ? 1 : et < ht ? -1 : 0;
            },
            Ne = function (re, te) {
              for (var le = 0; le < Math.max(re.length, te.length); le++) {
                var Oe = be(re[le] || "0", te[le] || "0");
                if (Oe !== 0) return Oe;
              }
              return 0;
            },
            Ge = { ">": [1], ">=": [0, 1], "=": [0], "<=": [-1, 0], "<": [-1] },
            Ze = Object.keys(Ge),
            Ye = function (re) {
              if (typeof re != "string")
                throw new TypeError("Invalid operator type, expected string but got ".concat(q(re)));
              if (Ze.indexOf(re) === -1) throw new Error("Invalid operator, expected one of ".concat(Ze.join("|")));
            },
            _e = r(730),
            Ie = r.n(_e),
            ke = !0,
            $e = !0,
            Le = !1,
            Fe = !1,
            je = !1,
            He = !1,
            mt = !1,
            kt = !1,
            $t = !1,
            we = null,
            Te = null,
            Pe = null,
            tt = null,
            Je = null,
            ze = null,
            ct = null,
            pt = null,
            _t = !1,
            tr = null,
            dr = null,
            ar = null,
            Gr = null,
            Cn = !1,
            wn = !1,
            jn = !1,
            To = !1,
            Oo = null,
            Eo = !1,
            _i = null,
            Do = null,
            Io = !0,
            Ps = !1,
            Gs = !1,
            is = !0,
            qs = !1,
            Ra = 5e3,
            ka = 250,
            Vd = 5e3,
            Wd = !1,
            m0 = !1,
            lh = null,
            d0 = !0,
            sb = !1,
            YA = !0,
            mh = !0,
            KA = !1,
            dh = !0,
            fp = !0,
            h7 = !0,
            pp = !0,
            sm = !1,
            Vy = !1,
            Xc = !1,
            aC = null,
            ab = !0,
            fh = !ab && !1,
            U9 = null,
            xw = null,
            Ve = null,
            Xe = null,
            yt = 1e4;
          function wt($) {
            "@babel/helpers - typeof";
            return (
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? (wt = function (te) {
                    return typeof te;
                  })
                : (wt = function (te) {
                    return te && typeof Symbol == "function" && te.constructor === Symbol && te !== Symbol.prototype
                      ? "symbol"
                      : typeof te;
                  }),
              wt($)
            );
          }
          var Nt = Symbol.for("react.element"),
            fr = d0 ? Symbol.for("react.transitional.element") : Nt,
            kr = Symbol.for("react.portal"),
            Pr = Symbol.for("react.fragment"),
            sn = Symbol.for("react.strict_mode"),
            $r = Symbol.for("react.profiler"),
            Sn = Symbol.for("react.consumer"),
            Bi = Symbol.for("react.context"),
            os = Symbol.for("react.forward_ref"),
            Xu = Symbol.for("react.suspense"),
            Hs = Symbol.for("react.suspense_list"),
            P0 = Symbol.for("react.memo"),
            Gm = Symbol.for("react.lazy"),
            $9 = Symbol.for("react.scope"),
            ph = Symbol.for("react.activity"),
            j9 = Symbol.for("react.legacy_hidden"),
            k5 = Symbol.for("react.tracing_marker"),
            bP = Symbol.for("react.memo_cache_sentinel"),
            Tw = Symbol.for("react.postpone"),
            Wy = Symbol.for("react.view_transition"),
            JA = Symbol.iterator,
            Dw = "@@iterator";
          function Iw($) {
            if ($ === null || wt($) !== "object") return null;
            var re = (JA && $[JA]) || $[Dw];
            return typeof re == "function" ? re : null;
          }
          var EQ = Symbol.asyncIterator,
            O5 = 1,
            uC = 2,
            hh = 5,
            cC = 6,
            Q9 = 7,
            xd = 8,
            hp = 9,
            XA = 10,
            gh = 11,
            g7 = 12,
            Rw = 13,
            vQ = 14,
            ZA = 15,
            zy = 16,
            lC = 17,
            kw = 1,
            AP = 2,
            mC = 3,
            Ow = 4,
            yP = 5,
            G9 = 1,
            b7 = Array.isArray;
          let M3 = b7;
          var Nw = r(169);
          function Pw($, re) {
            var te = Object.keys($);
            if (Object.getOwnPropertySymbols) {
              var le = Object.getOwnPropertySymbols($);
              (re &&
                (le = le.filter(function (Oe) {
                  return Object.getOwnPropertyDescriptor($, Oe).enumerable;
                })),
                te.push.apply(te, le));
            }
            return te;
          }
          function it($) {
            for (var re = 1; re < arguments.length; re++) {
              var te = arguments[re] != null ? arguments[re] : {};
              re % 2
                ? Pw(Object(te), !0).forEach(function (le) {
                    Ke($, le, te[le]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties($, Object.getOwnPropertyDescriptors(te))
                  : Pw(Object(te)).forEach(function (le) {
                      Object.defineProperty($, le, Object.getOwnPropertyDescriptor(te, le));
                    });
            }
            return $;
          }
          function Ke($, re, te) {
            return (
              re in $
                ? Object.defineProperty($, re, { value: te, enumerable: !0, configurable: !0, writable: !0 })
                : ($[re] = te),
              $
            );
          }
          function nt($) {
            "@babel/helpers - typeof";
            return (
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? (nt = function (te) {
                    return typeof te;
                  })
                : (nt = function (te) {
                    return te && typeof Symbol == "function" && te.constructor === Symbol && te !== Symbol.prototype
                      ? "symbol"
                      : typeof te;
                  }),
              nt($)
            );
          }
          function St($) {
            return pr($) || ir($) || Wt($) || Ht();
          }
          function Ht() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function Wt($, re) {
            if ($) {
              if (typeof $ == "string") return wr($, re);
              var te = Object.prototype.toString.call($).slice(8, -1);
              if ((te === "Object" && $.constructor && (te = $.constructor.name), te === "Map" || te === "Set"))
                return Array.from($);
              if (te === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te)) return wr($, re);
            }
          }
          function ir($) {
            if (typeof Symbol < "u" && Symbol.iterator in Object($)) return Array.from($);
          }
          function pr($) {
            if (Array.isArray($)) return wr($);
          }
          function wr($, re) {
            (re == null || re > $.length) && (re = $.length);
            for (var te = 0, le = new Array(re); te < re; te++) le[te] = $[te];
            return le;
          }
          var ri = Object.prototype.hasOwnProperty,
            vs = new WeakMap(),
            ga = new (Ie())({ max: 1e3 }),
            Bs = Symbol.for("react.provider");
          function qm($, re) {
            return $.toString() > re.toString() ? 1 : re.toString() > $.toString() ? -1 : 0;
          }
          function bh($) {
            for (
              var re = new Set(),
                te = $,
                le = function () {
                  var et = [].concat(St(Object.keys(te)), St(Object.getOwnPropertySymbols(te))),
                    ht = Object.getOwnPropertyDescriptors(te);
                  (et.forEach(function (Ue) {
                    ht[Ue].enumerable && re.add(Ue);
                  }),
                    (te = Object.getPrototypeOf(te)));
                };
              te != null;
            )
              le();
            return re;
          }
          function e2($, re, te, le) {
            var Oe = $?.displayName;
            return Oe || "".concat(te, "(").concat(F3(re, le), ")");
          }
          function F3($) {
            var re = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Anonymous",
              te = vs.get($);
            if (te != null) return te;
            var le = re;
            return (
              typeof $.displayName == "string"
                ? (le = $.displayName)
                : typeof $.name == "string" && $.name !== "" && (le = $.name),
              vs.set($, le),
              le
            );
          }
          var Vs = 0;
          function Si() {
            return ++Vs;
          }
          function Zn($, re, te) {
            for (var le = "", Oe = re; Oe <= te; Oe++) le += String.fromCodePoint($[Oe]);
            return le;
          }
          function Pn($, re) {
            return (($ & 1023) << 10) + (re & 1023) + 65536;
          }
          function Ws($) {
            var re = ga.get($);
            if (re !== void 0) return re;
            for (var te = [], le = 0, Oe; le < $.length; )
              ((Oe = $.charCodeAt(le)),
                (Oe & 63488) === 55296 ? te.push(Pn(Oe, $.charCodeAt(++le))) : te.push(Oe),
                ++le);
            return (ga.set($, te), te);
          }
          function Bc($) {
            for (
              var re = $[0],
                te = $[1],
                le = ["operations for renderer:".concat(re, " and root:").concat(te)],
                Oe = 2,
                et = [null],
                ht = $[Oe++],
                Ue = Oe + ht;
              Oe < Ue;
            ) {
              var st = $[Oe++],
                Et = Zn($, Oe, Oe + st - 1);
              (et.push(Et), (Oe += st));
            }
            for (; Oe < $.length; ) {
              var Pt = $[Oe];
              switch (Pt) {
                case g: {
                  var gt = $[Oe + 1],
                    Bt = $[Oe + 2];
                  if (((Oe += 3), Bt === gh)) (le.push("Add new root node ".concat(gt)), Oe++, Oe++, Oe++, Oe++);
                  else {
                    var zt = $[Oe];
                    (Oe++, Oe++);
                    var ur = $[Oe],
                      Or = et[ur];
                    (Oe++,
                      Oe++,
                      le.push(
                        "Add node "
                          .concat(gt, " (")
                          .concat(Or || "null", ") as child of ")
                          .concat(zt),
                      ));
                  }
                  break;
                }
                case b: {
                  var Ir = $[Oe + 1];
                  Oe += 2;
                  for (var In = 0; In < Ir; In++) {
                    var io = $[Oe];
                    ((Oe += 1), le.push("Remove node ".concat(io)));
                  }
                  break;
                }
                case v: {
                  ((Oe += 1), le.push("Remove root ".concat(te)));
                  break;
                }
                case C: {
                  var gu = $[Oe + 1],
                    fn = $[Oe + 1];
                  ((Oe += 3), le.push("Mode ".concat(fn, " set for subtree with root ").concat(gu)));
                  break;
                }
                case A: {
                  var hi = $[Oe + 1],
                    No = $[Oe + 2];
                  Oe += 3;
                  var vo = $.slice(Oe, Oe + No);
                  ((Oe += No), le.push("Re-order node ".concat(hi, " children ").concat(vo.join(","))));
                  break;
                }
                case y:
                  Oe += 3;
                  break;
                case E:
                  var Lc = $[Oe + 1],
                    Jo = $[Oe + 2],
                    Na = $[Oe + 3];
                  ((Oe += 4), le.push("Node ".concat(Lc, " has ").concat(Jo, " errors and ").concat(Na, " warnings")));
                  break;
                default:
                  throw Error('Unsupported Bridge operation "'.concat(Pt, '"'));
              }
            }
            console.log(
              le.join(`
  `),
            );
          }
          function B0() {
            return [{ type: kw, value: Q9, isEnabled: !0 }];
          }
          function gp() {
            try {
              var $ = localStorageGetItem(LOCAL_STORAGE_COMPONENT_FILTER_PREFERENCES_KEY);
              if ($ != null) {
                var re = JSON.parse($);
                return U3(re);
              }
            } catch {}
            return B0();
          }
          function t2($) {
            localStorageSetItem(LOCAL_STORAGE_COMPONENT_FILTER_PREFERENCES_KEY, JSON.stringify(U3($)));
          }
          function U3($) {
            return Array.isArray($)
              ? $.filter(function (re) {
                  return re.type !== mC;
                })
              : $;
          }
          function ub() {
            return typeof Nw.env.EDITOR_URL == "string" ? Nw.env.EDITOR_URL : "";
          }
          function gpe() {
            try {
              var $ = localStorageGetItem(LOCAL_STORAGE_OPEN_IN_EDITOR_URL);
              if ($ != null) return JSON.parse($);
            } catch {}
            return ub();
          }
          function _P($, re) {
            if ($ === null) return { formattedDisplayName: null, hocDisplayNames: null, compiledWithForget: !1 };
            if ($.startsWith("Forget(")) {
              var te = $.slice(7, $.length - 1),
                le = _P(te, re),
                Oe = le.formattedDisplayName,
                et = le.hocDisplayNames;
              return { formattedDisplayName: Oe, hocDisplayNames: et, compiledWithForget: !0 };
            }
            var ht = null;
            switch (re) {
              case ElementTypeClass:
              case ElementTypeForwardRef:
              case ElementTypeFunction:
              case ElementTypeMemo:
              case ElementTypeVirtual:
                if ($.indexOf("(") >= 0) {
                  var Ue = $.match(/[^()]+/g);
                  Ue != null && (($ = Ue.pop()), (ht = Ue));
                }
                break;
              default:
                break;
            }
            return { formattedDisplayName: $, hocDisplayNames: ht, compiledWithForget: !1 };
          }
          function CQ($, re) {
            for (var te in $) if (!(te in re)) return !0;
            for (var le in re) if ($[le] !== re[le]) return !0;
            return !1;
          }
          function cb($, re) {
            return re.reduce(function (te, le) {
              if (te) {
                if (ri.call(te, le)) return te[le];
                if (typeof te[Symbol.iterator] == "function") return Array.from(te)[le];
              }
              return null;
            }, $);
          }
          function A7($, re) {
            var te = re.length,
              le = re[te - 1];
            if ($ != null) {
              var Oe = cb($, re.slice(0, te - 1));
              Oe && (M3(Oe) ? Oe.splice(le, 1) : delete Oe[le]);
            }
          }
          function y7($, re, te) {
            var le = re.length;
            if ($ != null) {
              var Oe = cb($, re.slice(0, le - 1));
              if (Oe) {
                var et = re[le - 1],
                  ht = te[le - 1];
                ((Oe[ht] = Oe[et]), M3(Oe) ? Oe.splice(et, 1) : delete Oe[et]);
              }
            }
          }
          function dC($, re, te) {
            var le = re.length,
              Oe = re[le - 1];
            if ($ != null) {
              var et = cb($, re.slice(0, le - 1));
              et && (et[Oe] = te);
            }
          }
          function SQ($) {
            if ("name" in $ && "message" in $)
              for (; $; ) {
                if (Object.prototype.toString.call($) === "[object Error]") return !0;
                $ = Object.getPrototypeOf($);
              }
            return !1;
          }
          function EP($) {
            if ($ === null) return "null";
            if ($ === void 0) return "undefined";
            if (typeof HTMLElement < "u" && $ instanceof HTMLElement) return "html_element";
            var re = nt($);
            switch (re) {
              case "bigint":
                return "bigint";
              case "boolean":
                return "boolean";
              case "function":
                return "function";
              case "number":
                return Number.isNaN($) ? "nan" : Number.isFinite($) ? "number" : "infinity";
              case "object":
                if ($.$$typeof === fr || $.$$typeof === Nt) return "react_element";
                if (M3($)) return "array";
                if (ArrayBuffer.isView($))
                  return ri.call($.constructor, "BYTES_PER_ELEMENT") ? "typed_array" : "data_view";
                if ($.constructor && $.constructor.name === "ArrayBuffer") return "array_buffer";
                if (typeof $[Symbol.iterator] == "function") {
                  var te = $[Symbol.iterator]();
                  if (te) return te === $ ? "opaque_iterator" : "iterator";
                } else {
                  if ($.constructor && $.constructor.name === "RegExp") return "regexp";
                  if (typeof $.then == "function") return "thenable";
                  if (SQ($)) return "error";
                  var le = Object.prototype.toString.call($);
                  if (le === "[object Date]") return "date";
                  if (le === "[object HTMLAllCollection]") return "html_all_collection";
                }
                return CP($) ? "object" : "class_instance";
              case "string":
                return "string";
              case "symbol":
                return "symbol";
              case "undefined":
                return Object.prototype.toString.call($) === "[object HTMLAllCollection]"
                  ? "html_all_collection"
                  : "undefined";
              default:
                return "unknown";
            }
          }
          function zX($) {
            if (nt($) === "object" && $ !== null) {
              var re = $.$$typeof;
              switch (re) {
                case fr:
                case Nt:
                  var te = $.type;
                  switch (te) {
                    case Pr:
                    case $r:
                    case sn:
                    case Xu:
                    case Hs:
                    case Wy:
                      return te;
                    default:
                      var le = te && te.$$typeof;
                      switch (le) {
                        case Bi:
                        case os:
                        case Gm:
                        case P0:
                          return le;
                        case Sn:
                          return le;
                        default:
                          return re;
                      }
                  }
                case kr:
                  return re;
              }
            }
          }
          function vP($) {
            var re = zX($);
            switch (re) {
              case Sn:
                return "ContextConsumer";
              case Bs:
                return "ContextProvider";
              case Bi:
                return "Context";
              case os:
                return "ForwardRef";
              case Pr:
                return "Fragment";
              case Gm:
                return "Lazy";
              case P0:
                return "Memo";
              case kr:
                return "Portal";
              case $r:
                return "Profiler";
              case sn:
                return "StrictMode";
              case Xu:
                return "Suspense";
              case Hs:
                return "SuspenseList";
              case Wy:
                return "ViewTransition";
              case k5:
                return "TracingMarker";
              default:
                var te = $.type;
                return typeof te == "string"
                  ? te
                  : typeof te == "function"
                    ? F3(te, "Anonymous")
                    : te != null
                      ? "NotImplementedInDevtools"
                      : "Element";
            }
          }
          var r2 = 50;
          function N1($) {
            var re = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : r2;
            return $.length > re ? $.slice(0, re) + "\u2026" : $;
          }
          function ss($, re) {
            if ($ != null && ri.call($, du.type)) return re ? $[du.preview_long] : $[du.preview_short];
            var te = EP($);
            switch (te) {
              case "html_element":
                return "<".concat(N1($.tagName.toLowerCase()), " />");
              case "function":
                return typeof $.name == "function" || $.name === "" ? "() => {}" : "".concat(N1($.name), "() {}");
              case "string":
                return '"'.concat($, '"');
              case "bigint":
                return N1($.toString() + "n");
              case "regexp":
                return N1($.toString());
              case "symbol":
                return N1($.toString());
              case "react_element":
                return "<".concat(N1(vP($) || "Unknown"), " />");
              case "array_buffer":
                return "ArrayBuffer(".concat($.byteLength, ")");
              case "data_view":
                return "DataView(".concat($.buffer.byteLength, ")");
              case "array":
                if (re) {
                  for (
                    var le = "", Oe = 0;
                    Oe < $.length && (Oe > 0 && (le += ", "), (le += ss($[Oe], !1)), !(le.length > r2));
                    Oe++
                  );
                  return "[".concat(N1(le), "]");
                } else {
                  var et = ri.call($, du.size) ? $[du.size] : $.length;
                  return "Array(".concat(et, ")");
                }
              case "typed_array":
                var ht = "".concat($.constructor.name, "(").concat($.length, ")");
                if (re) {
                  for (
                    var Ue = "", st = 0;
                    st < $.length && (st > 0 && (Ue += ", "), (Ue += $[st]), !(Ue.length > r2));
                    st++
                  );
                  return "".concat(ht, " [").concat(N1(Ue), "]");
                } else return ht;
              case "iterator":
                var Et = $.constructor.name;
                if (re) {
                  for (var Pt = Array.from($), gt = "", Bt = 0; Bt < Pt.length; Bt++) {
                    var zt = Pt[Bt];
                    if ((Bt > 0 && (gt += ", "), M3(zt))) {
                      var ur = ss(zt[0], !0),
                        Or = ss(zt[1], !1);
                      gt += "".concat(ur, " => ").concat(Or);
                    } else gt += ss(zt, !1);
                    if (gt.length > r2) break;
                  }
                  return "".concat(Et, "(").concat($.size, ") {").concat(N1(gt), "}");
                } else return "".concat(Et, "(").concat($.size, ")");
              case "opaque_iterator":
                return $[Symbol.toStringTag];
              case "date":
                return $.toString();
              case "class_instance":
                try {
                  var Ir = $.constructor.name;
                  if (
                    typeof Ir == "string" ||
                    ((Ir = Object.getPrototypeOf($).constructor.name), typeof Ir == "string")
                  )
                    return Ir;
                  try {
                    return N1(String($));
                  } catch {
                    return "unserializable";
                  }
                } catch {
                  return "unserializable";
                }
              case "thenable":
                var In;
                if (CP($)) In = "Thenable";
                else {
                  var io = $.constructor.name;
                  (typeof io != "string" && (io = Object.getPrototypeOf($).constructor.name),
                    typeof io == "string" ? (In = io) : (In = "Thenable"));
                }
                switch ($.status) {
                  case "pending":
                    return "pending ".concat(In);
                  case "fulfilled":
                    if (re) {
                      var gu = ss($.value, !1);
                      return "fulfilled ".concat(In, " {").concat(N1(gu), "}");
                    } else return "fulfilled ".concat(In, " {\u2026}");
                  case "rejected":
                    if (re) {
                      var fn = ss($.reason, !1);
                      return "rejected ".concat(In, " {").concat(N1(fn), "}");
                    } else return "rejected ".concat(In, " {\u2026}");
                  default:
                    return In;
                }
              case "object":
                if (re) {
                  for (var hi = Array.from(bh($)).sort(qm), No = "", vo = 0; vo < hi.length; vo++) {
                    var Lc = hi[vo];
                    if (
                      (vo > 0 && (No += ", "),
                      (No += "".concat(Lc.toString(), ": ").concat(ss($[Lc], !1))),
                      No.length > r2)
                    )
                      break;
                  }
                  return "{".concat(N1(No), "}");
                } else return "{\u2026}";
              case "error":
                return N1(String($));
              case "boolean":
              case "number":
              case "infinity":
              case "nan":
              case "null":
              case "undefined":
                return String($);
              default:
                try {
                  return N1(String($));
                } catch {
                  return "unserializable";
                }
            }
          }
          var CP = function (re) {
            var te = Object.getPrototypeOf(re);
            if (!te) return !0;
            var le = Object.getPrototypeOf(te);
            return !le;
          };
          function wQ($) {
            var re = _P($.displayName, $.type),
              te = re.formattedDisplayName,
              le = re.hocDisplayNames,
              Oe = re.compiledWithForget;
            return it(it({}, $), {}, { displayName: te, hocDisplayNames: le, compiledWithForget: Oe });
          }
          function q9($) {
            try {
              return new URL($).toString();
            } catch {
              return $;
            }
          }
          function SP() {
            var $ = !1;
            try {
              (localStorage.getItem("test"), ($ = !0));
            } catch {}
            return $ && zs();
          }
          function bIe() {
            return sessionStorageGetItem(SESSION_STORAGE_RELOAD_AND_PROFILE_KEY) === "true";
          }
          function YX() {
            return {
              recordChangeDescriptions:
                sessionStorageGetItem(SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY) === "true",
              recordTimeline: sessionStorageGetItem(SESSION_STORAGE_RECORD_TIMELINE_KEY) === "true",
            };
          }
          function N5($, re) {
            (sessionStorageSetItem(SESSION_STORAGE_RELOAD_AND_PROFILE_KEY, "true"),
              sessionStorageSetItem(SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY, $ ? "true" : "false"),
              sessionStorageSetItem(SESSION_STORAGE_RECORD_TIMELINE_KEY, re ? "true" : "false"));
          }
          function _7() {
            (sessionStorageRemoveItem(SESSION_STORAGE_RELOAD_AND_PROFILE_KEY),
              sessionStorageRemoveItem(SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY),
              sessionStorageRemoveItem(SESSION_STORAGE_RECORD_TIMELINE_KEY));
          }
          function Bw($, re) {
            var te = Object.keys($);
            if (Object.getOwnPropertySymbols) {
              var le = Object.getOwnPropertySymbols($);
              (re &&
                (le = le.filter(function (Oe) {
                  return Object.getOwnPropertyDescriptor($, Oe).enumerable;
                })),
                te.push.apply(te, le));
            }
            return te;
          }
          function xQ($) {
            for (var re = 1; re < arguments.length; re++) {
              var te = arguments[re] != null ? arguments[re] : {};
              re % 2
                ? Bw(Object(te), !0).forEach(function (le) {
                    P5($, le, te[le]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties($, Object.getOwnPropertyDescriptors(te))
                  : Bw(Object(te)).forEach(function (le) {
                      Object.defineProperty($, le, Object.getOwnPropertyDescriptor(te, le));
                    });
            }
            return $;
          }
          function P5($, re, te) {
            return (
              re in $
                ? Object.defineProperty($, re, { value: te, enumerable: !0, configurable: !0, writable: !0 })
                : ($[re] = te),
              $
            );
          }
          function Lw($) {
            "@babel/helpers - typeof";
            return (
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? (Lw = function (te) {
                    return typeof te;
                  })
                : (Lw = function (te) {
                    return te && typeof Symbol == "function" && te.constructor === Symbol && te !== Symbol.prototype
                      ? "symbol"
                      : typeof te;
                  }),
              Lw($)
            );
          }
          var du = {
              inspectable: Symbol("inspectable"),
              inspected: Symbol("inspected"),
              name: Symbol("name"),
              preview_long: Symbol("preview_long"),
              preview_short: Symbol("preview_short"),
              readonly: Symbol("readonly"),
              size: Symbol("size"),
              type: Symbol("type"),
              unserializable: Symbol("unserializable"),
            },
            Yy = 2;
          function Mw($, re, te, le, Oe) {
            le.push(Oe);
            var et = {
              inspectable: re,
              type: $,
              preview_long: ss(te, !0),
              preview_short: ss(te, !1),
              name:
                typeof te.constructor != "function" ||
                typeof te.constructor.name != "string" ||
                te.constructor.name === "Object"
                  ? ""
                  : te.constructor.name,
            };
            return (
              $ === "array" || $ === "typed_array"
                ? (et.size = te.length)
                : $ === "object" && (et.size = Object.keys(te).length),
              ($ === "iterator" || $ === "typed_array") && (et.readonly = !0),
              et
            );
          }
          function vf($, re, te, le, Oe) {
            var et = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0,
              ht = EP($),
              Ue;
            switch (ht) {
              case "html_element":
                return (
                  re.push(le),
                  { inspectable: !1, preview_short: ss($, !1), preview_long: ss($, !0), name: $.tagName, type: ht }
                );
              case "function":
                return (
                  re.push(le),
                  {
                    inspectable: !1,
                    preview_short: ss($, !1),
                    preview_long: ss($, !0),
                    name: typeof $.name == "function" || !$.name ? "function" : $.name,
                    type: ht,
                  }
                );
              case "string":
                return ((Ue = Oe(le)), Ue || $.length <= 500 ? $ : $.slice(0, 500) + "...");
              case "bigint":
                return (
                  re.push(le),
                  { inspectable: !1, preview_short: ss($, !1), preview_long: ss($, !0), name: $.toString(), type: ht }
                );
              case "symbol":
                return (
                  re.push(le),
                  { inspectable: !1, preview_short: ss($, !1), preview_long: ss($, !0), name: $.toString(), type: ht }
                );
              case "react_element":
                return (
                  re.push(le),
                  {
                    inspectable: !1,
                    preview_short: ss($, !1),
                    preview_long: ss($, !0),
                    name: vP($) || "Unknown",
                    type: ht,
                  }
                );
              case "array_buffer":
              case "data_view":
                return (
                  re.push(le),
                  {
                    inspectable: !1,
                    preview_short: ss($, !1),
                    preview_long: ss($, !0),
                    name: ht === "data_view" ? "DataView" : "ArrayBuffer",
                    size: $.byteLength,
                    type: ht,
                  }
                );
              case "array":
                if (((Ue = Oe(le)), et >= Yy && !Ue)) return Mw(ht, !0, $, re, le);
                for (var st = [], Et = 0; Et < $.length; Et++)
                  st[Et] = Fw($, Et, re, te, le.concat([Et]), Oe, Ue ? 1 : et + 1);
                return st;
              case "html_all_collection":
              case "typed_array":
              case "iterator":
                if (((Ue = Oe(le)), et >= Yy && !Ue)) return Mw(ht, !0, $, re, le);
                var Pt = {
                  unserializable: !0,
                  type: ht,
                  readonly: !0,
                  size: ht === "typed_array" ? $.length : void 0,
                  preview_short: ss($, !1),
                  preview_long: ss($, !0),
                  name:
                    typeof $.constructor != "function" ||
                    typeof $.constructor.name != "string" ||
                    $.constructor.name === "Object"
                      ? ""
                      : $.constructor.name,
                };
                return (
                  Array.from($).forEach(function (Ir, In) {
                    return (Pt[In] = vf(Ir, re, te, le.concat([In]), Oe, Ue ? 1 : et + 1));
                  }),
                  te.push(le),
                  Pt
                );
              case "opaque_iterator":
                return (
                  re.push(le),
                  {
                    inspectable: !1,
                    preview_short: ss($, !1),
                    preview_long: ss($, !0),
                    name: $[Symbol.toStringTag],
                    type: ht,
                  }
                );
              case "date":
                return (
                  re.push(le),
                  { inspectable: !1, preview_short: ss($, !1), preview_long: ss($, !0), name: $.toString(), type: ht }
                );
              case "regexp":
                return (
                  re.push(le),
                  { inspectable: !1, preview_short: ss($, !1), preview_long: ss($, !0), name: $.toString(), type: ht }
                );
              case "thenable":
                if (((Ue = Oe(le)), et >= Yy && !Ue))
                  return {
                    inspectable: $.status === "fulfilled" || $.status === "rejected",
                    preview_short: ss($, !1),
                    preview_long: ss($, !0),
                    name: $.toString(),
                    type: ht,
                  };
                switch ($.status) {
                  case "fulfilled": {
                    var gt = {
                      unserializable: !0,
                      type: ht,
                      preview_short: ss($, !1),
                      preview_long: ss($, !0),
                      name: "fulfilled Thenable",
                    };
                    return (
                      (gt.value = vf($.value, re, te, le.concat(["value"]), Oe, Ue ? 1 : et + 1)),
                      te.push(le),
                      gt
                    );
                  }
                  case "rejected": {
                    var Bt = {
                      unserializable: !0,
                      type: ht,
                      preview_short: ss($, !1),
                      preview_long: ss($, !0),
                      name: "rejected Thenable",
                    };
                    return (
                      (Bt.reason = vf($.reason, re, te, le.concat(["reason"]), Oe, Ue ? 1 : et + 1)),
                      te.push(le),
                      Bt
                    );
                  }
                  default:
                    return (
                      re.push(le),
                      {
                        inspectable: !1,
                        preview_short: ss($, !1),
                        preview_long: ss($, !0),
                        name: $.toString(),
                        type: ht,
                      }
                    );
                }
              case "object":
                if (((Ue = Oe(le)), et >= Yy && !Ue)) return Mw(ht, !0, $, re, le);
                var zt = {};
                return (
                  bh($).forEach(function (Ir) {
                    var In = Ir.toString();
                    zt[In] = Fw($, Ir, re, te, le.concat([In]), Oe, Ue ? 1 : et + 1);
                  }),
                  zt
                );
              case "class_instance": {
                if (((Ue = Oe(le)), et >= Yy && !Ue)) return Mw(ht, !0, $, re, le);
                var ur = {
                  unserializable: !0,
                  type: ht,
                  readonly: !0,
                  preview_short: ss($, !1),
                  preview_long: ss($, !0),
                  name:
                    typeof $.constructor != "function" || typeof $.constructor.name != "string"
                      ? ""
                      : $.constructor.name,
                };
                return (
                  bh($).forEach(function (Ir) {
                    var In = Ir.toString();
                    ur[In] = vf($[Ir], re, te, le.concat([In]), Oe, Ue ? 1 : et + 1);
                  }),
                  te.push(le),
                  ur
                );
              }
              case "error": {
                if (((Ue = Oe(le)), et >= Yy && !Ue)) return Mw(ht, !0, $, re, le);
                var Or = {
                  unserializable: !0,
                  type: ht,
                  readonly: !0,
                  preview_short: ss($, !1),
                  preview_long: ss($, !0),
                  name: $.name,
                };
                return (
                  (Or.message = vf($.message, re, te, le.concat(["message"]), Oe, Ue ? 1 : et + 1)),
                  (Or.stack = vf($.stack, re, te, le.concat(["stack"]), Oe, Ue ? 1 : et + 1)),
                  "cause" in $ && (Or.cause = vf($.cause, re, te, le.concat(["cause"]), Oe, Ue ? 1 : et + 1)),
                  bh($).forEach(function (Ir) {
                    var In = Ir.toString();
                    Or[In] = vf($[Ir], re, te, le.concat([In]), Oe, Ue ? 1 : et + 1);
                  }),
                  te.push(le),
                  Or
                );
              }
              case "infinity":
              case "nan":
              case "undefined":
                return (re.push(le), { type: ht });
              default:
                return $;
            }
          }
          function Fw($, re, te, le, Oe, et) {
            var ht = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 0;
            try {
              return vf($[re], te, le, Oe, et, ht);
            } catch (st) {
              var Ue = "";
              return (
                Lw(st) === "object" && st !== null && typeof st.stack == "string"
                  ? (Ue = st.stack)
                  : typeof st == "string" && (Ue = st),
                te.push(Oe),
                {
                  inspectable: !1,
                  preview_short: "[Exception]",
                  preview_long: Ue ? "[Exception: " + Ue + "]" : "[Exception]",
                  name: Ue,
                  type: "unknown",
                }
              );
            }
          }
          function jl($, re, te, le) {
            var Oe = getInObject($, te);
            if (
              (Oe != null &&
                (Oe[du.unserializable] ||
                  (delete Oe[du.inspectable],
                  delete Oe[du.inspected],
                  delete Oe[du.name],
                  delete Oe[du.preview_long],
                  delete Oe[du.preview_short],
                  delete Oe[du.readonly],
                  delete Oe[du.size],
                  delete Oe[du.type])),
              le !== null && re.unserializable.length > 0)
            ) {
              for (var et = re.unserializable[0], ht = et.length === te.length, Ue = 0; Ue < te.length; Ue++)
                if (te[Ue] !== et[Ue]) {
                  ht = !1;
                  break;
                }
              ht && KX(le, le);
            }
            setInObject($, te, le);
          }
          function AIe($, re, te) {
            return (
              re.forEach(function (le) {
                var Oe = le.length,
                  et = le[Oe - 1],
                  ht = getInObject($, le.slice(0, Oe - 1));
                if (!(!ht || !ht.hasOwnProperty(et))) {
                  var Ue = ht[et];
                  if (Ue)
                    if (Ue.type === "infinity") ht[et] = 1 / 0;
                    else if (Ue.type === "nan") ht[et] = NaN;
                    else if (Ue.type === "undefined") ht[et] = void 0;
                    else {
                      var st = {};
                      ((st[du.inspectable] = !!Ue.inspectable),
                        (st[du.inspected] = !1),
                        (st[du.name] = Ue.name),
                        (st[du.preview_long] = Ue.preview_long),
                        (st[du.preview_short] = Ue.preview_short),
                        (st[du.size] = Ue.size),
                        (st[du.readonly] = !!Ue.readonly),
                        (st[du.type] = Ue.type),
                        (ht[et] = st));
                    }
                  else return;
                }
              }),
              te.forEach(function (le) {
                var Oe = le.length,
                  et = le[Oe - 1],
                  ht = getInObject($, le.slice(0, Oe - 1));
                if (!(!ht || !ht.hasOwnProperty(et))) {
                  var Ue = ht[et],
                    st = xQ({}, Ue);
                  (KX(st, Ue), (ht[et] = st));
                }
              }),
              $
            );
          }
          function KX($, re) {
            var te;
            (Object.defineProperties(
              $,
              ((te = {}),
              P5(te, du.inspected, { configurable: !0, enumerable: !1, value: !!re.inspected }),
              P5(te, du.name, { configurable: !0, enumerable: !1, value: re.name }),
              P5(te, du.preview_long, { configurable: !0, enumerable: !1, value: re.preview_long }),
              P5(te, du.preview_short, { configurable: !0, enumerable: !1, value: re.preview_short }),
              P5(te, du.size, { configurable: !0, enumerable: !1, value: re.size }),
              P5(te, du.readonly, { configurable: !0, enumerable: !1, value: !!re.readonly }),
              P5(te, du.type, { configurable: !0, enumerable: !1, value: re.type }),
              P5(te, du.unserializable, { configurable: !0, enumerable: !1, value: !!re.unserializable }),
              te),
            ),
              delete $.inspected,
              delete $.name,
              delete $.preview_long,
              delete $.preview_short,
              delete $.size,
              delete $.readonly,
              delete $.type,
              delete $.unserializable);
          }
          var JX = Array.isArray;
          function E7($) {
            return JX($);
          }
          let Cf = E7;
          function Uw($) {
            var re = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var te = $.stack;
            return ((Error.prepareStackTrace = re), TQ(te));
          }
          function TQ($) {
            $.startsWith(`Error: react-stack-top-frame
`) && ($ = $.slice(29));
            var re = $.indexOf(`
`);
            if (
              (re !== -1 && ($ = $.slice(re + 1)),
              (re = $.indexOf("react_stack_bottom_frame")),
              re === -1 && (re = $.indexOf("react-stack-bottom-frame")),
              re !== -1 &&
                (re = $.lastIndexOf(
                  `
`,
                  re,
                )),
              re !== -1)
            )
              $ = $.slice(0, re);
            else return "";
            return $;
          }
          function $w($, re) {
            var te;
            if (typeof Symbol > "u" || $[Symbol.iterator] == null) {
              if (Array.isArray($) || (te = wP($)) || (re && $ && typeof $.length == "number")) {
                te && ($ = te);
                var le = 0,
                  Oe = function () {};
                return {
                  s: Oe,
                  n: function () {
                    return le >= $.length ? { done: !0 } : { done: !1, value: $[le++] };
                  },
                  e: function (Et) {
                    throw Et;
                  },
                  f: Oe,
                };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var et = !0,
              ht = !1,
              Ue;
            return {
              s: function () {
                te = $[Symbol.iterator]();
              },
              n: function () {
                var Et = te.next();
                return ((et = Et.done), Et);
              },
              e: function (Et) {
                ((ht = !0), (Ue = Et));
              },
              f: function () {
                try {
                  !et && te.return != null && te.return();
                } finally {
                  if (ht) throw Ue;
                }
              },
            };
          }
          function B5($, re) {
            return xP($) || DQ($, re) || wP($, re) || XX();
          }
          function XX() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function wP($, re) {
            if ($) {
              if (typeof $ == "string") return v7($, re);
              var te = Object.prototype.toString.call($).slice(8, -1);
              if ((te === "Object" && $.constructor && (te = $.constructor.name), te === "Map" || te === "Set"))
                return Array.from($);
              if (te === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te)) return v7($, re);
            }
          }
          function v7($, re) {
            (re == null || re > $.length) && (re = $.length);
            for (var te = 0, le = new Array(re); te < re; te++) le[te] = $[te];
            return le;
          }
          function DQ($, re) {
            if (!(typeof Symbol > "u" || !(Symbol.iterator in Object($)))) {
              var te = [],
                le = !0,
                Oe = !1,
                et = void 0;
              try {
                for (
                  var ht = $[Symbol.iterator](), Ue;
                  !(le = (Ue = ht.next()).done) && (te.push(Ue.value), !(re && te.length === re));
                  le = !0
                );
              } catch (st) {
                ((Oe = !0), (et = st));
              } finally {
                try {
                  !le && ht.return != null && ht.return();
                } finally {
                  if (Oe) throw et;
                }
              }
              return te;
            }
          }
          function xP($) {
            if (Array.isArray($)) return $;
          }
          function H9($) {
            "@babel/helpers - typeof";
            return (
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? (H9 = function (te) {
                    return typeof te;
                  })
                : (H9 = function (te) {
                    return te && typeof Symbol == "function" && te.constructor === Symbol && te !== Symbol.prototype
                      ? "symbol"
                      : typeof te;
                  }),
              H9($)
            );
          }
          function TP($, re) {
            var te = Object.keys($);
            if (Object.getOwnPropertySymbols) {
              var le = Object.getOwnPropertySymbols($);
              (re &&
                (le = le.filter(function (Oe) {
                  return Object.getOwnPropertyDescriptor($, Oe).enumerable;
                })),
                te.push.apply(te, le));
            }
            return te;
          }
          function C7($) {
            for (var re = 1; re < arguments.length; re++) {
              var te = arguments[re] != null ? arguments[re] : {};
              re % 2
                ? TP(Object(te), !0).forEach(function (le) {
                    bpe($, le, te[le]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties($, Object.getOwnPropertyDescriptors(te))
                  : TP(Object(te)).forEach(function (le) {
                      Object.defineProperty($, le, Object.getOwnPropertyDescriptor(te, le));
                    });
            }
            return $;
          }
          function bpe($, re, te) {
            return (
              re in $
                ? Object.defineProperty($, re, { value: te, enumerable: !0, configurable: !0, writable: !0 })
                : ($[re] = te),
              $
            );
          }
          var DP = "999.9.9";
          function IQ($) {
            return $ == null || $ === "" ? !1 : L0($, DP);
          }
          function am($, re) {
            var te = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
            if ($ !== null) {
              var le = [],
                Oe = [],
                et = vf($, le, Oe, te, re);
              return { data: et, cleaned: le, unserializable: Oe };
            } else return null;
          }
          function an($, re) {
            var te = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
              le = re[te],
              Oe = Cf($) ? $.slice() : C7({}, $);
            return (
              te + 1 === re.length ? (Cf(Oe) ? Oe.splice(le, 1) : delete Oe[le]) : (Oe[le] = an($[le], re, te + 1)),
              Oe
            );
          }
          function as($, re, te) {
            var le = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
              Oe = re[le],
              et = Cf($) ? $.slice() : C7({}, $);
            if (le + 1 === re.length) {
              var ht = te[le];
              ((et[ht] = et[Oe]), Cf(et) ? et.splice(Oe, 1) : delete et[Oe]);
            } else et[Oe] = as($[Oe], re, te, le + 1);
            return et;
          }
          function Hm($, re, te) {
            var le = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
            if (le >= re.length) return te;
            var Oe = re[le],
              et = Cf($) ? $.slice() : C7({}, $);
            return ((et[Oe] = Hm($[Oe], re, te, le + 1)), et);
          }
          function bp($) {
            var re = null,
              te = null,
              le = $.current;
            if (le != null) {
              var Oe = le.stateNode;
              Oe != null &&
                ((re = Oe.effectDuration != null ? Oe.effectDuration : null),
                (te = Oe.passiveEffectDuration != null ? Oe.passiveEffectDuration : null));
            }
            return { effectDuration: re, passiveEffectDuration: te };
          }
          function V9($) {
            if ($ === void 0) return "undefined";
            if (typeof $ == "function") return $.toString();
            var re = new Set();
            return JSON.stringify(
              $,
              function (te, le) {
                if (H9(le) === "object" && le !== null) {
                  if (re.has(le)) return;
                  re.add(le);
                }
                return typeof le == "bigint" ? le.toString() + "n" : le;
              },
              2,
            );
          }
          function zd($) {
            try {
              return String($);
            } catch (re) {
              if (H9($) === "object") return "[object Object]";
              throw re;
            }
          }
          function ZX($) {
            for (var re = arguments.length, te = new Array(re > 1 ? re - 1 : 0), le = 1; le < re; le++)
              te[le - 1] = arguments[le];
            var Oe = te.slice(),
              et = zd($);
            if (typeof $ == "string" && Oe.length) {
              var ht = /(%?)(%([jds]))/g;
              et = et.replace(ht, function (st, Et, Pt, gt) {
                var Bt = Oe.shift();
                switch (gt) {
                  case "s":
                    Bt += "";
                    break;
                  case "d":
                  case "i":
                    Bt = parseInt(Bt, 10).toString();
                    break;
                  case "f":
                    Bt = parseFloat(Bt).toString();
                    break;
                }
                return Et ? (Oe.unshift(Bt), st) : Bt;
              });
            }
            if (Oe.length) for (var Ue = 0; Ue < Oe.length; Ue++) et += " " + zd(Oe[Ue]);
            return ((et = et.replace(/%{2,2}/g, "%")), String(et));
          }
          function zs() {
            return !!(
              window.document &&
              window.document.featurePolicy &&
              window.document.featurePolicy.allowsFeature("sync-xhr")
            );
          }
          function jw() {
            var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "",
              re = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
            return ue($, re) === 1;
          }
          function L0() {
            var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "",
              re = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
            return ue($, re) > -1;
          }
          var $3 = function () {
            return window.document == null;
          };
          function Ky($) {
            if ($.indexOf(":") === -1) return null;
            var re = $.replace(/^\(+/, "").replace(/\)+$/, ""),
              te = /(at )?(.+?)(?::(\d+))?(?::(\d+))?$/.exec(re);
            if (te == null) return null;
            var le = B5(te, 5),
              Oe = le[2],
              et = le[3],
              ht = le[4];
            return { sourceURL: Oe, line: et, column: ht };
          }
          var Ape = /^\s*at .*(\S+:\d+|\(native\))/m;
          function ype($) {
            var re = $.split(`
`),
              te = $w(re),
              le;
            try {
              for (te.s(); !(le = te.n()).done; ) {
                var Oe = le.value,
                  et = Oe.trim(),
                  ht = et.match(/ (\(.+\)$)/),
                  Ue = ht ? ht[1] : et,
                  st = Ky(Ue);
                if (st != null) {
                  var Et = st.sourceURL,
                    Pt = st.line,
                    gt = Pt === void 0 ? "1" : Pt,
                    Bt = st.column,
                    zt = Bt === void 0 ? "1" : Bt;
                  return { sourceURL: Et, line: parseInt(gt, 10), column: parseInt(zt, 10) };
                }
              }
            } catch (ur) {
              te.e(ur);
            } finally {
              te.f();
            }
            return null;
          }
          function W9($) {
            var re = $.split(`
`),
              te = $w(re),
              le;
            try {
              for (te.s(); !(le = te.n()).done; ) {
                var Oe = le.value,
                  et = Oe.trim(),
                  ht = et.replace(/((.*".+"[^@]*)?[^@]*)(?:@)/, ""),
                  Ue = Ky(ht);
                if (Ue != null) {
                  var st = Ue.sourceURL,
                    Et = Ue.line,
                    Pt = Et === void 0 ? "1" : Et,
                    gt = Ue.column,
                    Bt = gt === void 0 ? "1" : gt;
                  return { sourceURL: st, line: parseInt(Pt, 10), column: parseInt(Bt, 10) };
                }
              }
            } catch (zt) {
              te.e(zt);
            } finally {
              te.f();
            }
            return null;
          }
          function eZ($) {
            return $.match(Ape) ? ype($) : W9($);
          }
          var fC = null;
          function RQ($, re) {
            for (var te = null, le = 0; le < re.length; le++) {
              var Oe = re[le],
                et = Oe.getFunctionName();
              if (et != null && (et.includes("react_stack_bottom_frame") || et.includes("react-stack-bottom-frame"))) {
                fC = te;
                break;
              } else {
                var ht = Oe.getScriptNameOrSourceURL(),
                  Ue =
                    typeof Oe.getEnclosingLineNumber == "function" ? Oe.getEnclosingLineNumber() : Oe.getLineNumber(),
                  st =
                    typeof Oe.getEnclosingColumnNumber == "function"
                      ? Oe.getEnclosingColumnNumber()
                      : Oe.getColumnNumber();
                if (!ht || !Ue || !st) continue;
                te = { sourceURL: ht, line: Ue, column: st };
              }
            }
            for (var Et = $.name || "Error", Pt = $.message || "", gt = Et + ": " + Pt, Bt = 0; Bt < re.length; Bt++)
              gt +=
                `
    at ` + re[Bt].toString();
            return gt;
          }
          function S7($) {
            fC = null;
            var re = Error.prepareStackTrace;
            Error.prepareStackTrace = RQ;
            var te;
            try {
              te = $.stack;
            } catch {
              ((Error.prepareStackTrace = void 0), (te = $.stack));
            } finally {
              Error.prepareStackTrace = re;
            }
            if (fC !== null) return fC;
            if (te == null) return null;
            var le = TQ(te);
            return eZ(le);
          }
          function IP($) {
            return Math.round($ * 1e3) / 1e3;
          }
          function yIe($, re) {
            return _pe($) || EIe($, re) || _Ie($, re) || kQ();
          }
          function kQ() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function _Ie($, re) {
            if ($) {
              if (typeof $ == "string") return OQ($, re);
              var te = Object.prototype.toString.call($).slice(8, -1);
              if ((te === "Object" && $.constructor && (te = $.constructor.name), te === "Map" || te === "Set"))
                return Array.from($);
              if (te === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te)) return OQ($, re);
            }
          }
          function OQ($, re) {
            (re == null || re > $.length) && (re = $.length);
            for (var te = 0, le = new Array(re); te < re; te++) le[te] = $[te];
            return le;
          }
          function EIe($, re) {
            if (!(typeof Symbol > "u" || !(Symbol.iterator in Object($)))) {
              var te = [],
                le = !0,
                Oe = !1,
                et = void 0;
              try {
                for (
                  var ht = $[Symbol.iterator](), Ue;
                  !(le = (Ue = ht.next()).done) && (te.push(Ue.value), !(re && te.length === re));
                  le = !0
                );
              } catch (st) {
                ((Oe = !0), (et = st));
              } finally {
                try {
                  !le && ht.return != null && ht.return();
                } finally {
                  if (Oe) throw et;
                }
              }
              return te;
            }
          }
          function _pe($) {
            if (Array.isArray($)) return $;
          }
          function tZ($) {
            return $.ownerDocument ? $.ownerDocument.defaultView : null;
          }
          function rZ($) {
            var re = tZ($);
            return re ? re.frameElement : null;
          }
          function vIe($) {
            var re = Epe($);
            return nZ([
              $.getBoundingClientRect(),
              {
                top: re.borderTop,
                left: re.borderLeft,
                bottom: re.borderBottom,
                right: re.borderRight,
                width: 0,
                height: 0,
              },
            ]);
          }
          function nZ($) {
            return $.reduce(function (re, te) {
              return re == null
                ? te
                : {
                    top: re.top + te.top,
                    left: re.left + te.left,
                    width: re.width,
                    height: re.height,
                    bottom: re.bottom + te.bottom,
                    right: re.right + te.right,
                  };
            });
          }
          function j3($, re) {
            var te = rZ($);
            if (te && te !== re) {
              for (var le = [$.getBoundingClientRect()], Oe = te, et = !1; Oe; ) {
                var ht = vIe(Oe);
                if ((le.push(ht), (Oe = rZ(Oe)), et)) break;
                Oe && tZ(Oe) === re && (et = !0);
              }
              return nZ(le);
            } else return $.getBoundingClientRect();
          }
          function Epe($) {
            var re = window.getComputedStyle($);
            return {
              borderLeft: parseInt(re.borderLeftWidth, 10),
              borderRight: parseInt(re.borderRightWidth, 10),
              borderTop: parseInt(re.borderTopWidth, 10),
              borderBottom: parseInt(re.borderBottomWidth, 10),
              marginLeft: parseInt(re.marginLeft, 10),
              marginRight: parseInt(re.marginRight, 10),
              marginTop: parseInt(re.marginTop, 10),
              marginBottom: parseInt(re.marginBottom, 10),
              paddingLeft: parseInt(re.paddingLeft, 10),
              paddingRight: parseInt(re.paddingRight, 10),
              paddingTop: parseInt(re.paddingTop, 10),
              paddingBottom: parseInt(re.paddingBottom, 10),
            };
          }
          function lb($) {
            if (!$) return { baseComponentName: "", hocNames: [] };
            for (var re = /([A-Z][a-zA-Z0-9]*?)\((.*)\)/g, te = [], le = $, Oe; (Oe = re.exec(le)) != null; )
              if (Array.isArray(Oe)) {
                var et = Oe,
                  ht = yIe(et, 3),
                  Ue = ht[1],
                  st = ht[2];
                (te.push(Ue), (le = st));
              }
            return { baseComponentName: le, hocNames: te };
          }
          function iZ($, re) {
            if (!($ instanceof re)) throw new TypeError("Cannot call a class as a function");
          }
          function vpe($, re) {
            for (var te = 0; te < re.length; te++) {
              var le = re[te];
              ((le.enumerable = le.enumerable || !1),
                (le.configurable = !0),
                "value" in le && (le.writable = !0),
                Object.defineProperty($, le.key, le));
            }
          }
          function Cpe($, re, te) {
            return (re && vpe($.prototype, re), te && vpe($, te), $);
          }
          var Q3 = Object.assign,
            CIe = (function () {
              function $(re, te) {
                (iZ(this, $),
                  (this.node = re.createElement("div")),
                  (this.border = re.createElement("div")),
                  (this.padding = re.createElement("div")),
                  (this.content = re.createElement("div")),
                  (this.border.style.borderColor = NQ.border),
                  (this.padding.style.borderColor = NQ.padding),
                  (this.content.style.backgroundColor = NQ.background),
                  Q3(this.node.style, { borderColor: NQ.margin, pointerEvents: "none", position: "fixed" }),
                  (this.node.style.zIndex = "10000000"),
                  this.node.appendChild(this.border),
                  this.border.appendChild(this.padding),
                  this.padding.appendChild(this.content),
                  te.appendChild(this.node));
              }
              return Cpe($, [
                {
                  key: "remove",
                  value: function () {
                    this.node.parentNode && this.node.parentNode.removeChild(this.node);
                  },
                },
                {
                  key: "update",
                  value: function (te, le) {
                    (oZ(le, "margin", this.node),
                      oZ(le, "border", this.border),
                      oZ(le, "padding", this.padding),
                      Q3(this.content.style, {
                        height: te.height - le.borderTop - le.borderBottom - le.paddingTop - le.paddingBottom + "px",
                        width: te.width - le.borderLeft - le.borderRight - le.paddingLeft - le.paddingRight + "px",
                      }),
                      Q3(this.node.style, { top: te.top - le.marginTop + "px", left: te.left - le.marginLeft + "px" }));
                  },
                },
              ]);
            })(),
            Spe = (function () {
              function $(re, te) {
                (iZ(this, $),
                  (this.tip = re.createElement("div")),
                  Q3(this.tip.style, {
                    display: "flex",
                    flexFlow: "row nowrap",
                    backgroundColor: "#333740",
                    borderRadius: "2px",
                    fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
                    fontWeight: "bold",
                    padding: "3px 5px",
                    pointerEvents: "none",
                    position: "fixed",
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                  }),
                  (this.nameSpan = re.createElement("span")),
                  this.tip.appendChild(this.nameSpan),
                  Q3(this.nameSpan.style, {
                    color: "#ee78e6",
                    borderRight: "1px solid #aaaaaa",
                    paddingRight: "0.5rem",
                    marginRight: "0.5rem",
                  }),
                  (this.dimSpan = re.createElement("span")),
                  this.tip.appendChild(this.dimSpan),
                  Q3(this.dimSpan.style, { color: "#d7d7d7" }),
                  (this.tip.style.zIndex = "10000000"),
                  te.appendChild(this.tip));
              }
              return Cpe($, [
                {
                  key: "remove",
                  value: function () {
                    this.tip.parentNode && this.tip.parentNode.removeChild(this.tip);
                  },
                },
                {
                  key: "updateText",
                  value: function (te, le, Oe) {
                    ((this.nameSpan.textContent = te),
                      (this.dimSpan.textContent = Math.round(le) + "px \xD7 " + Math.round(Oe) + "px"));
                  },
                },
                {
                  key: "updatePosition",
                  value: function (te, le) {
                    var Oe = this.tip.getBoundingClientRect(),
                      et = SIe(te, le, { width: Oe.width, height: Oe.height });
                    Q3(this.tip.style, et.style);
                  },
                },
              ]);
            })(),
            RP = (function () {
              function $(re) {
                iZ(this, $);
                var te = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
                this.window = te;
                var le = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
                this.tipBoundsWindow = le;
                var Oe = te.document;
                ((this.container = Oe.createElement("div")),
                  (this.container.style.zIndex = "10000000"),
                  (this.tip = new Spe(Oe, this.container)),
                  (this.rects = []),
                  (this.agent = re),
                  Oe.body.appendChild(this.container));
              }
              return Cpe($, [
                {
                  key: "remove",
                  value: function () {
                    (this.tip.remove(),
                      this.rects.forEach(function (te) {
                        te.remove();
                      }),
                      (this.rects.length = 0),
                      this.container.parentNode && this.container.parentNode.removeChild(this.container));
                  },
                },
                {
                  key: "inspect",
                  value: function (te, le) {
                    for (
                      var Oe = this,
                        et = te.filter(function (gt) {
                          return gt.nodeType === Node.ELEMENT_NODE;
                        });
                      this.rects.length > et.length;
                    ) {
                      var ht = this.rects.pop();
                      ht.remove();
                    }
                    if (et.length !== 0) {
                      for (; this.rects.length < et.length; )
                        this.rects.push(new CIe(this.window.document, this.container));
                      var Ue = {
                        top: Number.POSITIVE_INFINITY,
                        right: Number.NEGATIVE_INFINITY,
                        bottom: Number.NEGATIVE_INFINITY,
                        left: Number.POSITIVE_INFINITY,
                      };
                      if (
                        (et.forEach(function (gt, Bt) {
                          var zt = j3(gt, Oe.window),
                            ur = Epe(gt);
                          ((Ue.top = Math.min(Ue.top, zt.top - ur.marginTop)),
                            (Ue.right = Math.max(Ue.right, zt.left + zt.width + ur.marginRight)),
                            (Ue.bottom = Math.max(Ue.bottom, zt.top + zt.height + ur.marginBottom)),
                            (Ue.left = Math.min(Ue.left, zt.left - ur.marginLeft)));
                          var Or = Oe.rects[Bt];
                          Or.update(zt, ur);
                        }),
                        !le)
                      ) {
                        le = et[0].nodeName.toLowerCase();
                        var st = et[0],
                          Et = this.agent.getComponentNameForHostInstance(st);
                        Et && (le += " (in " + Et + ")");
                      }
                      this.tip.updateText(le, Ue.right - Ue.left, Ue.bottom - Ue.top);
                      var Pt = j3(this.tipBoundsWindow.document.documentElement, this.window);
                      this.tip.updatePosition(
                        { top: Ue.top, left: Ue.left, height: Ue.bottom - Ue.top, width: Ue.right - Ue.left },
                        {
                          top: Pt.top + this.tipBoundsWindow.scrollY,
                          left: Pt.left + this.tipBoundsWindow.scrollX,
                          height: this.tipBoundsWindow.innerHeight,
                          width: this.tipBoundsWindow.innerWidth,
                        },
                      );
                    }
                  },
                },
              ]);
            })();
          function SIe($, re, te) {
            var le = Math.max(te.height, 20),
              Oe = Math.max(te.width, 60),
              et = 5,
              ht;
            $.top + $.height + le <= re.top + re.height
              ? $.top + $.height < re.top + 0
                ? (ht = re.top + et)
                : (ht = $.top + $.height + et)
              : $.top - le <= re.top + re.height
                ? $.top - le - et < re.top + et
                  ? (ht = re.top + et)
                  : (ht = $.top - le - et)
                : (ht = re.top + re.height - le - et);
            var Ue = $.left + et;
            return (
              $.left < re.left && (Ue = re.left + et),
              $.left + Oe > re.left + re.width && (Ue = re.left + re.width - Oe - et),
              (ht += "px"),
              (Ue += "px"),
              { style: { top: ht, left: Ue } }
            );
          }
          function oZ($, re, te) {
            Q3(te.style, {
              borderTopWidth: $[re + "Top"] + "px",
              borderLeftWidth: $[re + "Left"] + "px",
              borderRightWidth: $[re + "Right"] + "px",
              borderBottomWidth: $[re + "Bottom"] + "px",
              borderStyle: "solid",
            });
          }
          var NQ = {
              background: "rgba(120, 170, 210, 0.7)",
              padding: "rgba(77, 200, 0, 0.3)",
              margin: "rgba(255, 155, 0, 0.3)",
              border: "rgba(255, 200, 50, 0.3)",
            },
            wIe = 2e3,
            w7 = null,
            Qw = null;
          function $2t($) {
            $.emit("hideNativeHighlight");
          }
          function j2t() {
            ((w7 = null), Qw !== null && (Qw.remove(), (Qw = null)));
          }
          function kP($) {
            return $3() ? $2t($) : j2t();
          }
          function xIe($, re) {
            re.emit("showNativeHighlight", $);
          }
          function TIe($, re, te, le) {
            (w7 !== null && clearTimeout(w7),
              Qw === null && (Qw = new RP(te)),
              Qw.inspect($, re),
              le &&
                (w7 = setTimeout(function () {
                  return kP(te);
                }, wIe)));
          }
          function x7($, re, te, le) {
            return $3() ? xIe($, te) : TIe($, re, te, le);
          }
          var T7 = new Set();
          function DIe($, re) {
            ($.addListener("clearHostInstanceHighlight", ht),
              $.addListener("highlightHostInstance", Ue),
              $.addListener("shutdown", Oe),
              $.addListener("startInspectingHost", te),
              $.addListener("stopInspectingHost", Oe));
            function te() {
              le(window);
            }
            function le(Ir) {
              Ir && typeof Ir.addEventListener == "function"
                ? (Ir.addEventListener("click", st, !0),
                  Ir.addEventListener("mousedown", Et, !0),
                  Ir.addEventListener("mouseover", Et, !0),
                  Ir.addEventListener("mouseup", Et, !0),
                  Ir.addEventListener("pointerdown", Pt, !0),
                  Ir.addEventListener("pointermove", Bt, !0),
                  Ir.addEventListener("pointerup", zt, !0))
                : re.emit("startInspectingNative");
            }
            function Oe() {
              (kP(re),
                et(window),
                T7.forEach(function (Ir) {
                  try {
                    et(Ir.contentWindow);
                  } catch {}
                }),
                (T7 = new Set()));
            }
            function et(Ir) {
              Ir && typeof Ir.removeEventListener == "function"
                ? (Ir.removeEventListener("click", st, !0),
                  Ir.removeEventListener("mousedown", Et, !0),
                  Ir.removeEventListener("mouseover", Et, !0),
                  Ir.removeEventListener("mouseup", Et, !0),
                  Ir.removeEventListener("pointerdown", Pt, !0),
                  Ir.removeEventListener("pointermove", Bt, !0),
                  Ir.removeEventListener("pointerup", zt, !0))
                : re.emit("stopInspectingNative");
            }
            function ht() {
              kP(re);
            }
            function Ue(Ir) {
              var In = Ir.displayName,
                io = Ir.hideAfterTimeout,
                gu = Ir.id,
                fn = Ir.openBuiltinElementsPanel,
                hi = Ir.rendererID,
                No = Ir.scrollIntoView,
                vo = re.rendererInterfaces[hi];
              if (vo == null) {
                (console.warn('Invalid renderer id "'.concat(hi, '" for element "').concat(gu, '"')), kP(re));
                return;
              }
              if (!vo.hasElementWithId(gu)) {
                kP(re);
                return;
              }
              var Lc = vo.findHostInstancesForElementID(gu);
              if (Lc != null && Lc[0] != null) {
                var Jo = Lc[0];
                (No &&
                  typeof Jo.scrollIntoView == "function" &&
                  Jo.scrollIntoView({ block: "nearest", inline: "nearest" }),
                  x7(Lc, In, re, io),
                  fn &&
                    ((window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$0 = Jo), $.send("syncSelectionToBuiltinElementsPanel")));
              } else kP(re);
            }
            function st(Ir) {
              (Ir.preventDefault(), Ir.stopPropagation(), Oe(), $.send("stopInspectingHost", !0));
            }
            function Et(Ir) {
              (Ir.preventDefault(), Ir.stopPropagation());
            }
            function Pt(Ir) {
              (Ir.preventDefault(), Ir.stopPropagation(), ur(Or(Ir)));
            }
            var gt = null;
            function Bt(Ir) {
              (Ir.preventDefault(), Ir.stopPropagation());
              var In = Or(Ir);
              if (gt !== In) {
                if (((gt = In), In.tagName === "IFRAME")) {
                  var io = In;
                  try {
                    if (!T7.has(io)) {
                      var gu = io.contentWindow;
                      (le(gu), T7.add(io));
                    }
                  } catch {}
                }
                (x7([In], null, re, !1), ur(In));
              }
            }
            function zt(Ir) {
              (Ir.preventDefault(), Ir.stopPropagation());
            }
            var ur = function (In) {
              var io = re.getIDForHostInstance(In);
              io !== null && $.send("selectElement", io);
            };
            function Or(Ir) {
              return Ir.composed ? Ir.composedPath()[0] : Ir.target;
            }
          }
          function wpe($) {
            return OIe($) || kIe($) || RIe($) || IIe();
          }
          function IIe() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function RIe($, re) {
            if ($) {
              if (typeof $ == "string") return D7($, re);
              var te = Object.prototype.toString.call($).slice(8, -1);
              if ((te === "Object" && $.constructor && (te = $.constructor.name), te === "Map" || te === "Set"))
                return Array.from($);
              if (te === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te)) return D7($, re);
            }
          }
          function kIe($) {
            if (typeof Symbol < "u" && Symbol.iterator in Object($)) return Array.from($);
          }
          function OIe($) {
            if (Array.isArray($)) return D7($);
          }
          function D7($, re) {
            (re == null || re > $.length) && (re = $.length);
            for (var te = 0, le = new Array(re); te < re; te++) le[te] = $[te];
            return le;
          }
          var xpe = [
              "#37afa9",
              "#63b19e",
              "#80b393",
              "#97b488",
              "#abb67d",
              "#beb771",
              "#cfb965",
              "#dfba57",
              "#efbb49",
              "#febc38",
            ],
            Yd = null;
          function Pu($, re) {
            var te = [];
            (BIe($, function (Oe) {
              var et = Oe.color,
                ht = Oe.node;
              te.push({ node: ht, color: et });
            }),
              re.emit("drawTraceUpdates", te));
            var le = NIe($);
            re.emit("drawGroupedTraceUpdatesWithNames", le);
          }
          function Tpe($) {
            Yd === null && sZ();
            var re = window.devicePixelRatio || 1,
              te = Yd;
            ((te.width = window.innerWidth * re),
              (te.height = window.innerHeight * re),
              (te.style.width = "".concat(window.innerWidth, "px")),
              (te.style.height = "".concat(window.innerHeight, "px")));
            var le = te.getContext("2d");
            (le.scale(re, re), le.clearRect(0, 0, te.width / re, te.height / re));
            var Oe = NIe($);
            if (
              (Oe.forEach(function (et) {
                (PIe(le, et), Q2t(le, et));
              }),
              Yd !== null)
            ) {
              if ($.size === 0 && Yd.matches(":popover-open")) {
                Yd.hidePopover();
                return;
              }
              (Yd.matches(":popover-open") && Yd.hidePopover(), Yd.showPopover());
            }
          }
          function NIe($) {
            var re = new Map();
            return (
              BIe($, function (te) {
                var le,
                  Oe = te.rect,
                  et = te.color,
                  ht = te.displayName,
                  Ue = te.count;
                if (Oe) {
                  var st = "".concat(Oe.left, ",").concat(Oe.top);
                  (re.has(st) || re.set(st, []),
                    (le = re.get(st)) === null ||
                      le === void 0 ||
                      le.push({ rect: Oe, color: et, displayName: ht, count: Ue }));
                }
              }),
              Array.from(re.values()).sort(function (te, le) {
                var Oe = Math.max.apply(
                    Math,
                    wpe(
                      te.map(function (ht) {
                        return ht.count;
                      }),
                    ),
                  ),
                  et = Math.max.apply(
                    Math,
                    wpe(
                      le.map(function (ht) {
                        return ht.count;
                      }),
                    ),
                  );
                return Oe - et;
              })
            );
          }
          function PIe($, re) {
            re.forEach(function (te) {
              var le = te.color,
                Oe = te.rect;
              ($.beginPath(), ($.strokeStyle = le), $.rect(Oe.left, Oe.top, Oe.width - 1, Oe.height - 1), $.stroke());
            });
          }
          function Q2t($, re) {
            var te = re
              .map(function (le) {
                var Oe = le.displayName,
                  et = le.count;
                return Oe ? "".concat(Oe).concat(et > 1 ? " x".concat(et) : "") : "";
              })
              .filter(Boolean)
              .join(", ");
            te && q2t($, re[0].rect, te, re[0].color);
          }
          function G2t($, re) {
            return $3() ? Pu($, re) : Tpe($);
          }
          function BIe($, re) {
            $.forEach(function (te, le) {
              var Oe = Math.min(xpe.length - 1, te.count - 1),
                et = xpe[Oe];
              re({
                color: et,
                node: le,
                count: te.count,
                displayName: te.displayName,
                expirationTime: te.expirationTime,
                lastMeasuredAt: te.lastMeasuredAt,
                rect: te.rect,
              });
            });
          }
          function q2t($, re, te, le) {
            var Oe = re.left,
              et = re.top;
            (($.font = "10px monospace"), ($.textBaseline = "middle"), ($.textAlign = "center"));
            var ht = 2,
              Ue = 14,
              st = $.measureText(te),
              Et = st.width + ht * 2,
              Pt = Ue,
              gt = Oe,
              Bt = et - Pt;
            (($.fillStyle = le),
              $.fillRect(gt, Bt, Et, Pt),
              ($.fillStyle = "#000000"),
              $.fillText(te, gt + Et / 2, Bt + Pt / 2));
          }
          function Dpe($) {
            $.emit("disableTraceUpdates");
          }
          function pC() {
            Yd !== null &&
              (Yd.matches(":popover-open") && Yd.hidePopover(),
              Yd.parentNode != null && Yd.parentNode.removeChild(Yd),
              (Yd = null));
          }
          function LIe($) {
            return $3() ? Dpe($) : pC();
          }
          function sZ() {
            ((Yd = window.document.createElement("canvas")),
              Yd.setAttribute("popover", "manual"),
              (Yd.style.cssText = `
    xx-background-color: red;
    xx-opacity: 0.5;
    bottom: 0;
    left: 0;
    pointer-events: none;
    position: fixed;
    right: 0;
    top: 0;
    background-color: transparent;
    outline: none;
    box-shadow: none;
    border: none;
  `));
            var $ = window.document.documentElement;
            $.insertBefore(Yd, $.firstChild);
          }
          function Jy($) {
            "@babel/helpers - typeof";
            return (
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? (Jy = function (te) {
                    return typeof te;
                  })
                : (Jy = function (te) {
                    return te && typeof Symbol == "function" && te.constructor === Symbol && te !== Symbol.prototype
                      ? "symbol"
                      : typeof te;
                  }),
              Jy($)
            );
          }
          var aZ = 250,
            MIe = 3e3,
            Ipe = 250,
            H2t = new Map([
              ["Forget", "\u2728"],
              ["Memo", "\u{1F9E0}"],
            ]),
            Rpe =
              (typeof performance > "u" ? "undefined" : Jy(performance)) === "object" &&
              typeof performance.now == "function"
                ? function () {
                    return performance.now();
                  }
                : function () {
                    return Date.now();
                  },
            I7 = new Map(),
            OP = null,
            R7 = null,
            uZ = !1,
            Xy = null;
          function Oa($) {
            ((OP = $), OP.addListener("traceUpdates", n2));
          }
          function V2t($) {
            ((uZ = $),
              uZ ||
                (I7.clear(),
                R7 !== null && (cancelAnimationFrame(R7), (R7 = null)),
                Xy !== null && (clearTimeout(Xy), (Xy = null)),
                LIe(OP)));
          }
          function n2($) {
            uZ &&
              ($.forEach(function (re) {
                var te = I7.get(re),
                  le = Rpe(),
                  Oe = te != null ? te.lastMeasuredAt : 0,
                  et = te != null ? te.rect : null;
                (et === null || Oe + Ipe < le) && ((Oe = le), (et = W2t(re)));
                var ht = OP.getComponentNameForHostInstance(re);
                if (ht) {
                  var Ue = lb(ht),
                    st = Ue.baseComponentName,
                    Et = Ue.hocNames,
                    Pt = Et.map(function (Bt) {
                      return H2t.get(Bt) || "";
                    }).join(""),
                    gt = Pt ? "".concat(Pt).concat(st) : st;
                  ht = gt;
                }
                I7.set(re, {
                  count: te != null ? te.count + 1 : 1,
                  expirationTime: te != null ? Math.min(le + MIe, te.expirationTime + aZ) : le + aZ,
                  lastMeasuredAt: Oe,
                  rect: et,
                  displayName: ht,
                });
              }),
              Xy !== null && (clearTimeout(Xy), (Xy = null)),
              R7 === null && (R7 = requestAnimationFrame(cZ)));
          }
          function cZ() {
            ((R7 = null), (Xy = null));
            var $ = Rpe(),
              re = Number.MAX_VALUE;
            (I7.forEach(function (te, le) {
              te.expirationTime < $ ? I7.delete(le) : (re = Math.min(re, te.expirationTime));
            }),
              G2t(I7, OP),
              re !== Number.MAX_VALUE && (Xy = setTimeout(cZ, re - $)));
          }
          function W2t($) {
            if (!$ || typeof $.getBoundingClientRect != "function") return null;
            var re = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
            return j3($, re);
          }
          function k7($) {
            "@babel/helpers - typeof";
            return (
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? (k7 = function (te) {
                    return typeof te;
                  })
                : (k7 = function (te) {
                    return te && typeof Symbol == "function" && te.constructor === Symbol && te !== Symbol.prototype
                      ? "symbol"
                      : typeof te;
                  }),
              k7($)
            );
          }
          function NP($) {
            return UIe($) || kpe($) || FIe($) || PP();
          }
          function PP() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function FIe($, re) {
            if ($) {
              if (typeof $ == "string") return Zy($, re);
              var te = Object.prototype.toString.call($).slice(8, -1);
              if ((te === "Object" && $.constructor && (te = $.constructor.name), te === "Map" || te === "Set"))
                return Array.from($);
              if (te === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te)) return Zy($, re);
            }
          }
          function kpe($) {
            if (typeof Symbol < "u" && Symbol.iterator in Object($)) return Array.from($);
          }
          function UIe($) {
            if (Array.isArray($)) return Zy($);
          }
          function Zy($, re) {
            (re == null || re > $.length) && (re = $.length);
            for (var te = 0, le = new Array(re); te < re; te++) le[te] = $[te];
            return le;
          }
          function Ope($, re) {
            if (!($ instanceof re)) throw new TypeError("Cannot call a class as a function");
          }
          function lZ($, re) {
            for (var te = 0; te < re.length; te++) {
              var le = re[te];
              ((le.enumerable = le.enumerable || !1),
                (le.configurable = !0),
                "value" in le && (le.writable = !0),
                Object.defineProperty($, le.key, le));
            }
          }
          function Npe($, re, te) {
            return (re && lZ($.prototype, re), te && lZ($, te), $);
          }
          function Ppe($, re, te) {
            function le() {
              if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
              if (typeof Proxy == "function") return !0;
              try {
                return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
              } catch {
                return !1;
              }
            }
            return ((re = mZ(re)), Gw($, le() ? Reflect.construct(re, te || [], mZ($).constructor) : re.apply($, te)));
          }
          function Gw($, re) {
            return re && (k7(re) === "object" || typeof re == "function") ? re : Bpe($);
          }
          function Bpe($) {
            if ($ === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return $;
          }
          function mZ($) {
            return (
              (mZ = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (te) {
                    return te.__proto__ || Object.getPrototypeOf(te);
                  }),
              mZ($)
            );
          }
          function $Ie($, re) {
            if (typeof re != "function" && re !== null)
              throw new TypeError("Super expression must either be null or a function");
            (($.prototype = Object.create(re && re.prototype, {
              constructor: { value: $, writable: !0, configurable: !0 },
            })),
              re && Lpe($, re));
          }
          function Lpe($, re) {
            return (
              (Lpe =
                Object.setPrototypeOf ||
                function (le, Oe) {
                  return ((le.__proto__ = Oe), le);
                }),
              Lpe($, re)
            );
          }
          function hC($, re, te) {
            return (
              re in $
                ? Object.defineProperty($, re, { value: te, enumerable: !0, configurable: !0, writable: !0 })
                : ($[re] = te),
              $
            );
          }
          var bo = [
              { version: 0, minNpmVersion: '"<4.11.0"', maxNpmVersion: '"<4.11.0"' },
              { version: 1, minNpmVersion: "4.13.0", maxNpmVersion: "4.21.0" },
              { version: 2, minNpmVersion: "4.22.0", maxNpmVersion: null },
            ],
            z2t = bo[bo.length - 1],
            Y2t = (function ($) {
              function re(te) {
                var le;
                return (
                  Ope(this, re),
                  (le = Ppe(this, re)),
                  hC(le, "_isShutdown", !1),
                  hC(le, "_messageQueue", []),
                  hC(le, "_scheduledFlush", !1),
                  hC(le, "_wallUnlisten", null),
                  hC(le, "_flush", function () {
                    try {
                      if (le._messageQueue.length) {
                        for (var Oe = 0; Oe < le._messageQueue.length; Oe += 2) {
                          var et;
                          (et = le._wall).send.apply(et, [le._messageQueue[Oe]].concat(NP(le._messageQueue[Oe + 1])));
                        }
                        le._messageQueue.length = 0;
                      }
                    } finally {
                      le._scheduledFlush = !1;
                    }
                  }),
                  hC(le, "overrideValueAtPath", function (Oe) {
                    var et = Oe.id,
                      ht = Oe.path,
                      Ue = Oe.rendererID,
                      st = Oe.type,
                      Et = Oe.value;
                    switch (st) {
                      case "context":
                        le.send("overrideContext", { id: et, path: ht, rendererID: Ue, wasForwarded: !0, value: Et });
                        break;
                      case "hooks":
                        le.send("overrideHookState", { id: et, path: ht, rendererID: Ue, wasForwarded: !0, value: Et });
                        break;
                      case "props":
                        le.send("overrideProps", { id: et, path: ht, rendererID: Ue, wasForwarded: !0, value: Et });
                        break;
                      case "state":
                        le.send("overrideState", { id: et, path: ht, rendererID: Ue, wasForwarded: !0, value: Et });
                        break;
                    }
                  }),
                  (le._wall = te),
                  (le._wallUnlisten =
                    te.listen(function (Oe) {
                      Oe && Oe.event && le.emit(Oe.event, Oe.payload);
                    }) || null),
                  le.addListener("overrideValueAtPath", le.overrideValueAtPath),
                  le
                );
              }
              return (
                $Ie(re, $),
                Npe(re, [
                  {
                    key: "wall",
                    get: function () {
                      return this._wall;
                    },
                  },
                  {
                    key: "send",
                    value: function (le) {
                      if (this._isShutdown) {
                        console.warn('Cannot send message "'.concat(le, '" through a Bridge that has been shutdown.'));
                        return;
                      }
                      for (var Oe = arguments.length, et = new Array(Oe > 1 ? Oe - 1 : 0), ht = 1; ht < Oe; ht++)
                        et[ht - 1] = arguments[ht];
                      (this._messageQueue.push(le, et),
                        this._scheduledFlush ||
                          ((this._scheduledFlush = !0),
                          typeof devtoolsJestTestScheduler == "function"
                            ? devtoolsJestTestScheduler(this._flush)
                            : queueMicrotask(this._flush)));
                    },
                  },
                  {
                    key: "shutdown",
                    value: function () {
                      if (this._isShutdown) {
                        console.warn("Bridge was already shutdown.");
                        return;
                      }
                      (this.emit("shutdown"),
                        this.send("shutdown"),
                        (this._isShutdown = !0),
                        (this.addListener = function () {}),
                        (this.emit = function () {}),
                        this.removeAllListeners());
                      var le = this._wallUnlisten;
                      le && le();
                      do this._flush();
                      while (this._messageQueue.length);
                    },
                  },
                ])
              );
            })(c);
          let Mpe = Y2t;
          function dZ($) {
            try {
              return localStorage.getItem($);
            } catch {
              return null;
            }
          }
          function e4r($) {
            try {
              localStorage.removeItem($);
            } catch {}
          }
          function t4r($, re) {
            try {
              return localStorage.setItem($, re);
            } catch {}
          }
          function K2t($) {
            try {
              return sessionStorage.getItem($);
            } catch {
              return null;
            }
          }
          function J2t($) {
            try {
              sessionStorage.removeItem($);
            } catch {}
          }
          function X2t($, re) {
            try {
              return sessionStorage.setItem($, re);
            } catch {}
          }
          function BP($) {
            "@babel/helpers - typeof";
            return (
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? (BP = function (te) {
                    return typeof te;
                  })
                : (BP = function (te) {
                    return te && typeof Symbol == "function" && te.constructor === Symbol && te !== Symbol.prototype
                      ? "symbol"
                      : typeof te;
                  }),
              BP($)
            );
          }
          function jIe($, re) {
            if (!($ instanceof re)) throw new TypeError("Cannot call a class as a function");
          }
          function PQ($, re) {
            for (var te = 0; te < re.length; te++) {
              var le = re[te];
              ((le.enumerable = le.enumerable || !1),
                (le.configurable = !0),
                "value" in le && (le.writable = !0),
                Object.defineProperty($, le.key, le));
            }
          }
          function QIe($, re, te) {
            return (re && PQ($.prototype, re), te && PQ($, te), $);
          }
          function Z2t($, re, te) {
            function le() {
              if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
              if (typeof Proxy == "function") return !0;
              try {
                return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
              } catch {
                return !1;
              }
            }
            return ((re = L5(re)), e5t($, le() ? Reflect.construct(re, te || [], L5($).constructor) : re.apply($, te)));
          }
          function e5t($, re) {
            return re && (BP(re) === "object" || typeof re == "function") ? re : O7($);
          }
          function O7($) {
            if ($ === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return $;
          }
          function L5($) {
            return (
              (L5 = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (te) {
                    return te.__proto__ || Object.getPrototypeOf(te);
                  }),
              L5($)
            );
          }
          function Ah($, re) {
            if (typeof re != "function" && re !== null)
              throw new TypeError("Super expression must either be null or a function");
            (($.prototype = Object.create(re && re.prototype, {
              constructor: { value: $, writable: !0, configurable: !0 },
            })),
              re && M5($, re));
          }
          function M5($, re) {
            return (
              (M5 =
                Object.setPrototypeOf ||
                function (le, Oe) {
                  return ((le.__proto__ = Oe), le);
                }),
              M5($, re)
            );
          }
          function wi($, re, te) {
            return (
              re in $
                ? Object.defineProperty($, re, { value: te, enumerable: !0, configurable: !0, writable: !0 })
                : ($[re] = te),
              $
            );
          }
          var GIe = function (re) {
              if (p) {
                for (var te, le = arguments.length, Oe = new Array(le > 1 ? le - 1 : 0), et = 1; et < le; et++)
                  Oe[et - 1] = arguments[et];
                (te = console).log.apply(
                  te,
                  ["%cAgent %c".concat(re), "color: purple; font-weight: bold;", "font-weight: bold;"].concat(Oe),
                );
              }
            },
            qIe = (function ($) {
              function re(te) {
                var le,
                  Oe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                  et = arguments.length > 2 ? arguments[2] : void 0;
                (jIe(this, re),
                  (le = Z2t(this, re)),
                  wi(le, "_isProfiling", !1),
                  wi(le, "_rendererInterfaces", {}),
                  wi(le, "_persistedSelection", null),
                  wi(le, "_persistedSelectionMatch", null),
                  wi(le, "_traceUpdatesEnabled", !1),
                  wi(le, "clearErrorsAndWarnings", function (Ue) {
                    var st = Ue.rendererID,
                      Et = le._rendererInterfaces[st];
                    Et == null ? console.warn('Invalid renderer id "'.concat(st, '"')) : Et.clearErrorsAndWarnings();
                  }),
                  wi(le, "clearErrorsForElementID", function (Ue) {
                    var st = Ue.id,
                      Et = Ue.rendererID,
                      Pt = le._rendererInterfaces[Et];
                    Pt == null ? console.warn('Invalid renderer id "'.concat(Et, '"')) : Pt.clearErrorsForElementID(st);
                  }),
                  wi(le, "clearWarningsForElementID", function (Ue) {
                    var st = Ue.id,
                      Et = Ue.rendererID,
                      Pt = le._rendererInterfaces[Et];
                    Pt == null
                      ? console.warn('Invalid renderer id "'.concat(Et, '"'))
                      : Pt.clearWarningsForElementID(st);
                  }),
                  wi(le, "copyElementPath", function (Ue) {
                    var st = Ue.id,
                      Et = Ue.path,
                      Pt = Ue.rendererID,
                      gt = le._rendererInterfaces[Pt];
                    if (gt == null) console.warn('Invalid renderer id "'.concat(Pt, '" for element "').concat(st, '"'));
                    else {
                      var Bt = gt.getSerializedElementValueByPath(st, Et);
                      Bt != null
                        ? le._bridge.send("saveToClipboard", Bt)
                        : console.warn('Unable to obtain serialized value for element "'.concat(st, '"'));
                    }
                  }),
                  wi(le, "deletePath", function (Ue) {
                    var st = Ue.hookID,
                      Et = Ue.id,
                      Pt = Ue.path,
                      gt = Ue.rendererID,
                      Bt = Ue.type,
                      zt = le._rendererInterfaces[gt];
                    zt == null
                      ? console.warn('Invalid renderer id "'.concat(gt, '" for element "').concat(Et, '"'))
                      : zt.deletePath(Bt, Et, st, Pt);
                  }),
                  wi(le, "getBackendVersion", function () {
                    var Ue = "6.1.5-5d87cd2244";
                    Ue && le._bridge.send("backendVersion", Ue);
                  }),
                  wi(le, "getBridgeProtocol", function () {
                    le._bridge.send("bridgeProtocol", z2t);
                  }),
                  wi(le, "getProfilingData", function (Ue) {
                    var st = Ue.rendererID,
                      Et = le._rendererInterfaces[st];
                    (Et == null && console.warn('Invalid renderer id "'.concat(st, '"')),
                      le._bridge.send("profilingData", Et.getProfilingData()));
                  }),
                  wi(le, "getProfilingStatus", function () {
                    le._bridge.send("profilingStatus", le._isProfiling);
                  }),
                  wi(le, "getOwnersList", function (Ue) {
                    var st = Ue.id,
                      Et = Ue.rendererID,
                      Pt = le._rendererInterfaces[Et];
                    if (Pt == null) console.warn('Invalid renderer id "'.concat(Et, '" for element "').concat(st, '"'));
                    else {
                      var gt = Pt.getOwnersList(st);
                      le._bridge.send("ownersList", { id: st, owners: gt });
                    }
                  }),
                  wi(le, "inspectElement", function (Ue) {
                    var st = Ue.forceFullData,
                      Et = Ue.id,
                      Pt = Ue.path,
                      gt = Ue.rendererID,
                      Bt = Ue.requestID,
                      zt = le._rendererInterfaces[gt];
                    zt == null
                      ? console.warn('Invalid renderer id "'.concat(gt, '" for element "').concat(Et, '"'))
                      : (le._bridge.send("inspectedElement", zt.inspectElement(Bt, Et, Pt, st)),
                        (le._persistedSelectionMatch === null || le._persistedSelectionMatch.id !== Et) &&
                          ((le._persistedSelection = null),
                          (le._persistedSelectionMatch = null),
                          zt.setTrackedPath(null),
                          (le._lastSelectedElementID = Et),
                          (le._lastSelectedRendererID = gt),
                          le._persistSelectionTimerScheduled ||
                            ((le._persistSelectionTimerScheduled = !0), setTimeout(le._persistSelection, 1e3))));
                  }),
                  wi(le, "logElementToConsole", function (Ue) {
                    var st = Ue.id,
                      Et = Ue.rendererID,
                      Pt = le._rendererInterfaces[Et];
                    Pt == null
                      ? console.warn('Invalid renderer id "'.concat(Et, '" for element "').concat(st, '"'))
                      : Pt.logElementToConsole(st);
                  }),
                  wi(le, "overrideError", function (Ue) {
                    var st = Ue.id,
                      Et = Ue.rendererID,
                      Pt = Ue.forceError,
                      gt = le._rendererInterfaces[Et];
                    gt == null
                      ? console.warn('Invalid renderer id "'.concat(Et, '" for element "').concat(st, '"'))
                      : gt.overrideError(st, Pt);
                  }),
                  wi(le, "overrideSuspense", function (Ue) {
                    var st = Ue.id,
                      Et = Ue.rendererID,
                      Pt = Ue.forceFallback,
                      gt = le._rendererInterfaces[Et];
                    gt == null
                      ? console.warn('Invalid renderer id "'.concat(Et, '" for element "').concat(st, '"'))
                      : gt.overrideSuspense(st, Pt);
                  }),
                  wi(le, "overrideValueAtPath", function (Ue) {
                    var st = Ue.hookID,
                      Et = Ue.id,
                      Pt = Ue.path,
                      gt = Ue.rendererID,
                      Bt = Ue.type,
                      zt = Ue.value,
                      ur = le._rendererInterfaces[gt];
                    ur == null
                      ? console.warn('Invalid renderer id "'.concat(gt, '" for element "').concat(Et, '"'))
                      : ur.overrideValueAtPath(Bt, Et, st, Pt, zt);
                  }),
                  wi(le, "overrideContext", function (Ue) {
                    var st = Ue.id,
                      Et = Ue.path,
                      Pt = Ue.rendererID,
                      gt = Ue.wasForwarded,
                      Bt = Ue.value;
                    gt || le.overrideValueAtPath({ id: st, path: Et, rendererID: Pt, type: "context", value: Bt });
                  }),
                  wi(le, "overrideHookState", function (Ue) {
                    var st = Ue.id,
                      Et = Ue.hookID,
                      Pt = Ue.path,
                      gt = Ue.rendererID,
                      Bt = Ue.wasForwarded,
                      zt = Ue.value;
                    Bt || le.overrideValueAtPath({ id: st, path: Pt, rendererID: gt, type: "hooks", value: zt });
                  }),
                  wi(le, "overrideProps", function (Ue) {
                    var st = Ue.id,
                      Et = Ue.path,
                      Pt = Ue.rendererID,
                      gt = Ue.wasForwarded,
                      Bt = Ue.value;
                    gt || le.overrideValueAtPath({ id: st, path: Et, rendererID: Pt, type: "props", value: Bt });
                  }),
                  wi(le, "overrideState", function (Ue) {
                    var st = Ue.id,
                      Et = Ue.path,
                      Pt = Ue.rendererID,
                      gt = Ue.wasForwarded,
                      Bt = Ue.value;
                    gt || le.overrideValueAtPath({ id: st, path: Et, rendererID: Pt, type: "state", value: Bt });
                  }),
                  wi(le, "onReloadAndProfileSupportedByHost", function () {
                    le._bridge.send("isReloadAndProfileSupportedByBackend", !0);
                  }),
                  wi(le, "reloadAndProfile", function (Ue) {
                    var st = Ue.recordChangeDescriptions,
                      Et = Ue.recordTimeline;
                    (typeof le._onReloadAndProfile == "function" && le._onReloadAndProfile(st, Et),
                      le._bridge.send("reloadAppForProfiling"));
                  }),
                  wi(le, "renamePath", function (Ue) {
                    var st = Ue.hookID,
                      Et = Ue.id,
                      Pt = Ue.newPath,
                      gt = Ue.oldPath,
                      Bt = Ue.rendererID,
                      zt = Ue.type,
                      ur = le._rendererInterfaces[Bt];
                    ur == null
                      ? console.warn('Invalid renderer id "'.concat(Bt, '" for element "').concat(Et, '"'))
                      : ur.renamePath(zt, Et, st, gt, Pt);
                  }),
                  wi(le, "setTraceUpdatesEnabled", function (Ue) {
                    ((le._traceUpdatesEnabled = Ue), V2t(Ue));
                    for (var st in le._rendererInterfaces) {
                      var Et = le._rendererInterfaces[st];
                      Et.setTraceUpdatesEnabled(Ue);
                    }
                  }),
                  wi(le, "syncSelectionFromBuiltinElementsPanel", function () {
                    var Ue = window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$0;
                    Ue != null && le.selectNode(Ue);
                  }),
                  wi(le, "shutdown", function () {
                    (le.emit("shutdown"), le._bridge.removeAllListeners(), le.removeAllListeners());
                  }),
                  wi(le, "startProfiling", function (Ue) {
                    var st = Ue.recordChangeDescriptions,
                      Et = Ue.recordTimeline;
                    le._isProfiling = !0;
                    for (var Pt in le._rendererInterfaces) {
                      var gt = le._rendererInterfaces[Pt];
                      gt.startProfiling(st, Et);
                    }
                    le._bridge.send("profilingStatus", le._isProfiling);
                  }),
                  wi(le, "stopProfiling", function () {
                    le._isProfiling = !1;
                    for (var Ue in le._rendererInterfaces) {
                      var st = le._rendererInterfaces[Ue];
                      st.stopProfiling();
                    }
                    le._bridge.send("profilingStatus", le._isProfiling);
                  }),
                  wi(le, "stopInspectingNative", function (Ue) {
                    le._bridge.send("stopInspectingHost", Ue);
                  }),
                  wi(le, "storeAsGlobal", function (Ue) {
                    var st = Ue.count,
                      Et = Ue.id,
                      Pt = Ue.path,
                      gt = Ue.rendererID,
                      Bt = le._rendererInterfaces[gt];
                    Bt == null
                      ? console.warn('Invalid renderer id "'.concat(gt, '" for element "').concat(Et, '"'))
                      : Bt.storeAsGlobal(Et, Pt, st);
                  }),
                  wi(le, "updateHookSettings", function (Ue) {
                    le.emit("updateHookSettings", Ue);
                  }),
                  wi(le, "getHookSettings", function () {
                    le.emit("getHookSettings");
                  }),
                  wi(le, "onHookSettings", function (Ue) {
                    le._bridge.send("hookSettings", Ue);
                  }),
                  wi(le, "updateComponentFilters", function (Ue) {
                    for (var st in le._rendererInterfaces) {
                      var Et = +st,
                        Pt = le._rendererInterfaces[Et];
                      if (le._lastSelectedRendererID === Et) {
                        var gt = Pt.getPathForElement(le._lastSelectedElementID);
                        gt !== null && (Pt.setTrackedPath(gt), (le._persistedSelection = { rendererID: Et, path: gt }));
                      }
                      Pt.updateComponentFilters(Ue);
                    }
                  }),
                  wi(le, "getEnvironmentNames", function () {
                    var Ue = null;
                    for (var st in le._rendererInterfaces) {
                      var Et = le._rendererInterfaces[+st],
                        Pt = Et.getEnvironmentNames();
                      if (Ue === null) Ue = Pt;
                      else for (var gt = 0; gt < Pt.length; gt++) Ue.indexOf(Pt[gt]) === -1 && Ue.push(Pt[gt]);
                    }
                    le._bridge.send("environmentNames", Ue || []);
                  }),
                  wi(le, "onTraceUpdates", function (Ue) {
                    le.emit("traceUpdates", Ue);
                  }),
                  wi(le, "onFastRefreshScheduled", function () {
                    (p && GIe("onFastRefreshScheduled"), le._bridge.send("fastRefreshScheduled"));
                  }),
                  wi(le, "onHookOperations", function (Ue) {
                    if (
                      (p && GIe("onHookOperations", "(".concat(Ue.length, ") [").concat(Ue.join(", "), "]")),
                      le._bridge.send("operations", Ue),
                      le._persistedSelection !== null)
                    ) {
                      var st = Ue[0];
                      if (le._persistedSelection.rendererID === st) {
                        var Et = le._rendererInterfaces[st];
                        if (Et == null) console.warn('Invalid renderer id "'.concat(st, '"'));
                        else {
                          var Pt = le._persistedSelectionMatch,
                            gt = Et.getBestMatchForTrackedPath();
                          le._persistedSelectionMatch = gt;
                          var Bt = Pt !== null ? Pt.id : null,
                            zt = gt !== null ? gt.id : null;
                          (Bt !== zt && zt !== null && le._bridge.send("selectElement", zt),
                            gt !== null &&
                              gt.isFullMatch &&
                              ((le._persistedSelection = null),
                              (le._persistedSelectionMatch = null),
                              Et.setTrackedPath(null)));
                        }
                      }
                    }
                  }),
                  wi(le, "getIfHasUnsupportedRendererVersion", function () {
                    le.emit("getIfHasUnsupportedRendererVersion");
                  }),
                  wi(le, "_persistSelectionTimerScheduled", !1),
                  wi(le, "_lastSelectedRendererID", -1),
                  wi(le, "_lastSelectedElementID", -1),
                  wi(le, "_persistSelection", function () {
                    le._persistSelectionTimerScheduled = !1;
                    var Ue = le._lastSelectedRendererID,
                      st = le._lastSelectedElementID,
                      Et = le._rendererInterfaces[Ue],
                      Pt = Et != null ? Et.getPathForElement(st) : null;
                    Pt !== null ? X2t(D, JSON.stringify({ rendererID: Ue, path: Pt })) : J2t(D);
                  }),
                  (le._isProfiling = Oe),
                  (le._onReloadAndProfile = et));
                var ht = K2t(D);
                return (
                  ht != null && (le._persistedSelection = JSON.parse(ht)),
                  (le._bridge = te),
                  te.addListener("clearErrorsAndWarnings", le.clearErrorsAndWarnings),
                  te.addListener("clearErrorsForElementID", le.clearErrorsForElementID),
                  te.addListener("clearWarningsForElementID", le.clearWarningsForElementID),
                  te.addListener("copyElementPath", le.copyElementPath),
                  te.addListener("deletePath", le.deletePath),
                  te.addListener("getBackendVersion", le.getBackendVersion),
                  te.addListener("getBridgeProtocol", le.getBridgeProtocol),
                  te.addListener("getProfilingData", le.getProfilingData),
                  te.addListener("getProfilingStatus", le.getProfilingStatus),
                  te.addListener("getOwnersList", le.getOwnersList),
                  te.addListener("inspectElement", le.inspectElement),
                  te.addListener("logElementToConsole", le.logElementToConsole),
                  te.addListener("overrideError", le.overrideError),
                  te.addListener("overrideSuspense", le.overrideSuspense),
                  te.addListener("overrideValueAtPath", le.overrideValueAtPath),
                  te.addListener("reloadAndProfile", le.reloadAndProfile),
                  te.addListener("renamePath", le.renamePath),
                  te.addListener("setTraceUpdatesEnabled", le.setTraceUpdatesEnabled),
                  te.addListener("startProfiling", le.startProfiling),
                  te.addListener("stopProfiling", le.stopProfiling),
                  te.addListener("storeAsGlobal", le.storeAsGlobal),
                  te.addListener("syncSelectionFromBuiltinElementsPanel", le.syncSelectionFromBuiltinElementsPanel),
                  te.addListener("shutdown", le.shutdown),
                  te.addListener("updateHookSettings", le.updateHookSettings),
                  te.addListener("getHookSettings", le.getHookSettings),
                  te.addListener("updateComponentFilters", le.updateComponentFilters),
                  te.addListener("getEnvironmentNames", le.getEnvironmentNames),
                  te.addListener("getIfHasUnsupportedRendererVersion", le.getIfHasUnsupportedRendererVersion),
                  te.addListener("overrideContext", le.overrideContext),
                  te.addListener("overrideHookState", le.overrideHookState),
                  te.addListener("overrideProps", le.overrideProps),
                  te.addListener("overrideState", le.overrideState),
                  DIe(te, le),
                  Oa(le),
                  te.send("backendInitialized"),
                  le._isProfiling && te.send("profilingStatus", !0),
                  le
                );
              }
              return (
                Ah(re, $),
                QIe(re, [
                  {
                    key: "rendererInterfaces",
                    get: function () {
                      return this._rendererInterfaces;
                    },
                  },
                  {
                    key: "getInstanceAndStyle",
                    value: function (le) {
                      var Oe = le.id,
                        et = le.rendererID,
                        ht = this._rendererInterfaces[et];
                      return ht == null
                        ? (console.warn('Invalid renderer id "'.concat(et, '"')), null)
                        : ht.getInstanceAndStyle(Oe);
                    },
                  },
                  {
                    key: "getIDForHostInstance",
                    value: function (le) {
                      if ($3() || typeof le.nodeType != "number") {
                        for (var Oe in this._rendererInterfaces) {
                          var et = this._rendererInterfaces[Oe];
                          try {
                            var ht = et.getElementIDForHostInstance(le);
                            if (ht != null) return ht;
                          } catch {}
                        }
                        return null;
                      } else {
                        var Ue = null,
                          st = null;
                        for (var Et in this._rendererInterfaces) {
                          var Pt = this._rendererInterfaces[Et],
                            gt = Pt.getNearestMountedDOMNode(le);
                          if (gt !== null) {
                            if (gt === le) {
                              ((Ue = gt), (st = Pt));
                              break;
                            }
                            (Ue === null || Ue.contains(gt)) && ((Ue = gt), (st = Pt));
                          }
                        }
                        if (st != null && Ue != null)
                          try {
                            return st.getElementIDForHostInstance(Ue);
                          } catch {}
                        return null;
                      }
                    },
                  },
                  {
                    key: "getComponentNameForHostInstance",
                    value: function (le) {
                      if ($3() || typeof le.nodeType != "number") {
                        for (var Oe in this._rendererInterfaces) {
                          var et = this._rendererInterfaces[Oe];
                          try {
                            var ht = et.getElementIDForHostInstance(le);
                            if (ht) return et.getDisplayNameForElementID(ht);
                          } catch {}
                        }
                        return null;
                      } else {
                        var Ue = null,
                          st = null;
                        for (var Et in this._rendererInterfaces) {
                          var Pt = this._rendererInterfaces[Et],
                            gt = Pt.getNearestMountedDOMNode(le);
                          if (gt !== null) {
                            if (gt === le) {
                              ((Ue = gt), (st = Pt));
                              break;
                            }
                            (Ue === null || Ue.contains(gt)) && ((Ue = gt), (st = Pt));
                          }
                        }
                        if (st != null && Ue != null)
                          try {
                            var Bt = st.getElementIDForHostInstance(Ue);
                            if (Bt) return st.getDisplayNameForElementID(Bt);
                          } catch {}
                        return null;
                      }
                    },
                  },
                  {
                    key: "selectNode",
                    value: function (le) {
                      var Oe = this.getIDForHostInstance(le);
                      Oe !== null && this._bridge.send("selectElement", Oe);
                    },
                  },
                  {
                    key: "registerRendererInterface",
                    value: function (le, Oe) {
                      ((this._rendererInterfaces[le] = Oe), Oe.setTraceUpdatesEnabled(this._traceUpdatesEnabled));
                      var et = this._persistedSelection;
                      et !== null && et.rendererID === le && Oe.setTrackedPath(et.path);
                    },
                  },
                  {
                    key: "onUnsupportedRenderer",
                    value: function () {
                      this._bridge.send("unsupportedRendererVersion");
                    },
                  },
                ])
              );
            })(c);
          function P1($, re) {
            var te = Object.keys($);
            if (Object.getOwnPropertySymbols) {
              var le = Object.getOwnPropertySymbols($);
              (re &&
                (le = le.filter(function (Oe) {
                  return Object.getOwnPropertyDescriptor($, Oe).enumerable;
                })),
                te.push.apply(te, le));
            }
            return te;
          }
          function Vm($) {
            for (var re = 1; re < arguments.length; re++) {
              var te = arguments[re] != null ? arguments[re] : {};
              re % 2
                ? P1(Object(te), !0).forEach(function (le) {
                    t5t($, le, te[le]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties($, Object.getOwnPropertyDescriptors(te))
                  : P1(Object(te)).forEach(function (le) {
                      Object.defineProperty($, le, Object.getOwnPropertyDescriptor(te, le));
                    });
            }
            return $;
          }
          function t5t($, re, te) {
            return (
              re in $
                ? Object.defineProperty($, re, { value: te, enumerable: !0, configurable: !0, writable: !0 })
                : ($[re] = te),
              $
            );
          }
          var BQ = 0,
            HIe,
            VIe,
            WIe,
            fZ,
            Fpe,
            zIe,
            Upe;
          function YIe() {}
          YIe.__reactDisabledLog = !0;
          function LP() {
            if (BQ === 0) {
              ((HIe = console.log),
                (VIe = console.info),
                (WIe = console.warn),
                (fZ = console.error),
                (Fpe = console.group),
                (zIe = console.groupCollapsed),
                (Upe = console.groupEnd));
              var $ = { configurable: !0, enumerable: !0, value: YIe, writable: !0 };
              Object.defineProperties(console, {
                info: $,
                log: $,
                warn: $,
                error: $,
                group: $,
                groupCollapsed: $,
                groupEnd: $,
              });
            }
            BQ++;
          }
          function N7() {
            if ((BQ--, BQ === 0)) {
              var $ = { configurable: !0, enumerable: !0, writable: !0 };
              Object.defineProperties(console, {
                log: Vm(Vm({}, $), {}, { value: HIe }),
                info: Vm(Vm({}, $), {}, { value: VIe }),
                warn: Vm(Vm({}, $), {}, { value: WIe }),
                error: Vm(Vm({}, $), {}, { value: fZ }),
                group: Vm(Vm({}, $), {}, { value: Fpe }),
                groupCollapsed: Vm(Vm({}, $), {}, { value: zIe }),
                groupEnd: Vm(Vm({}, $), {}, { value: Upe }),
              });
            }
            BQ < 0 && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
          }
          function r5t($, re) {
            return s5t($) || o5t($, re) || i5t($, re) || n5t();
          }
          function n5t() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function i5t($, re) {
            if ($) {
              if (typeof $ == "string") return MP($, re);
              var te = Object.prototype.toString.call($).slice(8, -1);
              if ((te === "Object" && $.constructor && (te = $.constructor.name), te === "Map" || te === "Set"))
                return Array.from($);
              if (te === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te)) return MP($, re);
            }
          }
          function MP($, re) {
            (re == null || re > $.length) && (re = $.length);
            for (var te = 0, le = new Array(re); te < re; te++) le[te] = $[te];
            return le;
          }
          function o5t($, re) {
            if (!(typeof Symbol > "u" || !(Symbol.iterator in Object($)))) {
              var te = [],
                le = !0,
                Oe = !1,
                et = void 0;
              try {
                for (
                  var ht = $[Symbol.iterator](), Ue;
                  !(le = (Ue = ht.next()).done) && (te.push(Ue.value), !(re && te.length === re));
                  le = !0
                );
              } catch (st) {
                ((Oe = !0), (et = st));
              } finally {
                try {
                  !le && ht.return != null && ht.return();
                } finally {
                  if (Oe) throw et;
                }
              }
              return te;
            }
          }
          function s5t($) {
            if (Array.isArray($)) return $;
          }
          function pZ($) {
            "@babel/helpers - typeof";
            return (
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? (pZ = function (te) {
                    return typeof te;
                  })
                : (pZ = function (te) {
                    return te && typeof Symbol == "function" && te.constructor === Symbol && te !== Symbol.prototype
                      ? "symbol"
                      : typeof te;
                  }),
              pZ($)
            );
          }
          var P7;
          function mb($) {
            if (P7 === void 0)
              try {
                throw Error();
              } catch (le) {
                var re = le.stack.trim().match(/\n( *(at )?)/);
                P7 = (re && re[1]) || "";
              }
            var te = "";
            return (
              (te = " (<anonymous>)"),
              `
` +
                P7 +
                $ +
                te
            );
          }
          function a5t($, re) {
            return mb($ + (re ? " [" + re + "]" : ""));
          }
          var $pe = !1,
            r4r;
          if (0) var n4r;
          function KIe($, re, te) {
            if (!$ || $pe) return "";
            if (0) var le;
            var Oe = Error.prepareStackTrace;
            ((Error.prepareStackTrace = void 0), ($pe = !0));
            var et = te.H;
            ((te.H = null), LP());
            try {
              var ht = {
                DetermineComponentFrameRoot: function () {
                  var fn;
                  try {
                    if (re) {
                      var hi = function () {
                        throw Error();
                      };
                      if (
                        (Object.defineProperty(hi.prototype, "props", {
                          set: function () {
                            throw Error();
                          },
                        }),
                        (typeof Reflect > "u" ? "undefined" : pZ(Reflect)) === "object" && Reflect.construct)
                      ) {
                        try {
                          Reflect.construct(hi, []);
                        } catch (vo) {
                          fn = vo;
                        }
                        Reflect.construct($, [], hi);
                      } else {
                        try {
                          hi.call();
                        } catch (vo) {
                          fn = vo;
                        }
                        $.call(hi.prototype);
                      }
                    } else {
                      try {
                        throw Error();
                      } catch (vo) {
                        fn = vo;
                      }
                      var No = $();
                      No && typeof No.catch == "function" && No.catch(function () {});
                    }
                  } catch (vo) {
                    if (vo && fn && typeof vo.stack == "string") return [vo.stack, fn.stack];
                  }
                  return [null, null];
                },
              };
              ht.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
              var Ue = Object.getOwnPropertyDescriptor(ht.DetermineComponentFrameRoot, "name");
              Ue &&
                Ue.configurable &&
                Object.defineProperty(ht.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
              var st = ht.DetermineComponentFrameRoot(),
                Et = r5t(st, 2),
                Pt = Et[0],
                gt = Et[1];
              if (Pt && gt) {
                for (
                  var Bt = Pt.split(`
`),
                    zt = gt.split(`
`),
                    ur = 0,
                    Or = 0;
                  ur < Bt.length && !Bt[ur].includes("DetermineComponentFrameRoot");
                )
                  ur++;
                for (; Or < zt.length && !zt[Or].includes("DetermineComponentFrameRoot"); ) Or++;
                if (ur === Bt.length || Or === zt.length)
                  for (ur = Bt.length - 1, Or = zt.length - 1; ur >= 1 && Or >= 0 && Bt[ur] !== zt[Or]; ) Or--;
                for (; ur >= 1 && Or >= 0; ur--, Or--)
                  if (Bt[ur] !== zt[Or]) {
                    if (ur !== 1 || Or !== 1)
                      do
                        if ((ur--, Or--, Or < 0 || Bt[ur] !== zt[Or])) {
                          var Ir =
                            `
` + Bt[ur].replace(" at new ", " at ");
                          return (
                            $.displayName &&
                              Ir.includes("<anonymous>") &&
                              (Ir = Ir.replace("<anonymous>", $.displayName)),
                            Ir
                          );
                        }
                      while (ur >= 1 && Or >= 0);
                    break;
                  }
              }
            } finally {
              (($pe = !1), (Error.prepareStackTrace = Oe), (te.H = et), N7());
            }
            var In = $ ? $.displayName || $.name : "",
              io = In ? mb(In) : "";
            return io;
          }
          function u5t($, re) {
            return KIe($, !0, re);
          }
          function JIe($, re) {
            return KIe($, !1, re);
          }
          function c5t($) {
            try {
              var re = "";
              if (!$.owner && typeof $.name == "string") return mb($.name);
              for (var te = $; te; ) {
                var le = te.debugStack;
                if (le != null)
                  ((te = te.owner),
                    te &&
                      (re +=
                        `
` + Uw(le)));
                else break;
              }
              return re;
            } catch (Oe) {
              return (
                `
Error generating stack: ` +
                Oe.message +
                `
` +
                Oe.stack
              );
            }
          }
          var B7 = new WeakMap();
          function l5t($) {
            return f5t($) || d5t($) || XIe($) || m5t();
          }
          function m5t() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function XIe($, re) {
            if ($) {
              if (typeof $ == "string") return jpe($, re);
              var te = Object.prototype.toString.call($).slice(8, -1);
              if ((te === "Object" && $.constructor && (te = $.constructor.name), te === "Map" || te === "Set"))
                return Array.from($);
              if (te === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te)) return jpe($, re);
            }
          }
          function d5t($) {
            if (typeof Symbol < "u" && Symbol.iterator in Object($)) return Array.from($);
          }
          function f5t($) {
            if (Array.isArray($)) return jpe($);
          }
          function jpe($, re) {
            (re == null || re > $.length) && (re = $.length);
            for (var te = 0, le = new Array(re); te < re; te++) le[te] = $[te];
            return le;
          }
          function p5t($) {
            return !!$.debugTask;
          }
          function h5t($, re, te, le) {
            var Oe = te.getCurrentComponentInfo;
            function et(Ue) {
              if (Oe === void 0) return null;
              var st = Oe();
              if (st === null || p5t(st)) return null;
              var Et = st.debugStack != null,
                Pt = "";
              if (Et) {
                var gt = Uw(Ue);
                (gt &&
                  (Pt +=
                    `
` + gt),
                  (Pt += c5t(st)));
              }
              return { enableOwnerStacks: Et, componentStack: Pt };
            }
            function ht(Ue, st) {
              if (Oe !== void 0) {
                var Et = Oe();
                if (Et !== null) {
                  if (
                    st.length > 3 &&
                    typeof st[0] == "string" &&
                    st[0].startsWith("%c%s%c ") &&
                    typeof st[1] == "string" &&
                    typeof st[2] == "string" &&
                    typeof st[3] == "string"
                  ) {
                    var Pt = st[0].slice(7),
                      gt = st[2].trim();
                    ((st = st.slice(4)), gt !== Et.env ? st.unshift("[" + gt + "] " + Pt) : st.unshift(Pt));
                  }
                  var Bt = ZX.apply(void 0, l5t(st)),
                    zt = B7.get(Et);
                  zt === void 0 &&
                    ((zt = { errors: new Map(), errorsCount: 0, warnings: new Map(), warningsCount: 0 }),
                    B7.set(Et, zt));
                  var ur = Ue === "error" ? zt.errors : zt.warnings,
                    Or = ur.get(Bt) || 0;
                  (ur.set(Bt, Or + 1), Ue === "error" ? zt.errorsCount++ : zt.warningsCount++);
                }
              }
            }
            return {
              cleanup: function () {},
              clearErrorsAndWarnings: function () {},
              clearErrorsForElementID: function () {},
              clearWarningsForElementID: function () {},
              getSerializedElementValueByPath: function () {},
              deletePath: function () {},
              findHostInstancesForElementID: function () {
                return null;
              },
              flushInitialOperations: function () {},
              getBestMatchForTrackedPath: function () {
                return null;
              },
              getComponentStack: et,
              getDisplayNameForElementID: function () {
                return null;
              },
              getNearestMountedDOMNode: function () {
                return null;
              },
              getElementIDForHostInstance: function () {
                return null;
              },
              getInstanceAndStyle: function () {
                return { instance: null, style: null };
              },
              getOwnersList: function () {
                return null;
              },
              getPathForElement: function () {
                return null;
              },
              getProfilingData: function () {
                throw new Error("getProfilingData not supported by this renderer");
              },
              handleCommitFiberRoot: function () {},
              handleCommitFiberUnmount: function () {},
              handlePostCommitFiberRoot: function () {},
              hasElementWithId: function () {
                return !1;
              },
              inspectElement: function (st, Et, Pt) {
                return { id: Et, responseID: st, type: "not-found" };
              },
              logElementToConsole: function () {},
              getElementAttributeByPath: function () {},
              getElementSourceFunctionById: function () {},
              onErrorOrWarning: ht,
              overrideError: function () {},
              overrideSuspense: function () {},
              overrideValueAtPath: function () {},
              renamePath: function () {},
              renderer: te,
              setTraceUpdatesEnabled: function () {},
              setTrackedPath: function () {},
              startProfiling: function () {},
              stopProfiling: function () {},
              storeAsGlobal: function () {},
              updateComponentFilters: function () {},
              getEnvironmentNames: function () {
                return [];
              },
            };
          }
          var g5t = r(987),
            hZ = 60111,
            gZ = "Symbol(react.concurrent_mode)",
            Qpe = 60110,
            LQ = "Symbol(react.context)",
            ZIe = "Symbol(react.server_context)",
            bZ = "Symbol(react.async_mode)",
            e7e = "Symbol(react.transitional.element)",
            t7e = 60103,
            i4r = "Symbol(react.element)",
            o4r = 60129,
            s4r = "Symbol(react.debug_trace_mode)",
            b5t = 60112,
            r7e = "Symbol(react.forward_ref)",
            a4r = 60107,
            u4r = "Symbol(react.fragment)",
            c4r = 60116,
            l4r = "Symbol(react.lazy)",
            A5t = 60115,
            y5t = "Symbol(react.memo)",
            m4r = 60106,
            d4r = "Symbol(react.portal)",
            n7e = 60114,
            i7e = "Symbol(react.profiler)",
            Gpe = 60109,
            qpe = "Symbol(react.provider)",
            o7e = "Symbol(react.consumer)",
            _5t = 60119,
            E5t = "Symbol(react.scope)",
            Hpe = 60108,
            Vpe = "Symbol(react.strict_mode)",
            f4r = 60113,
            p4r = "Symbol(react.suspense)",
            h4r = 60120,
            g4r = "Symbol(react.suspense_list)",
            b4r = "Symbol(react.server_context.defaultValue)",
            s7e = Symbol.for("react.memo_cache_sentinel"),
            A4r = !1,
            v5t = !1,
            y4r = !1;
          function a7e($, re) {
            return ($ === re && ($ !== 0 || 1 / $ === 1 / re)) || ($ !== $ && re !== re);
          }
          var C5t = typeof Object.is == "function" ? Object.is : a7e;
          let S5t = C5t;
          var z9 = Object.prototype.hasOwnProperty;
          let u7e = z9;
          function MQ($, re, te) {
            var le = $.HostHoistable,
              Oe = $.HostSingleton,
              et = $.HostComponent,
              ht = $.LazyComponent,
              Ue = $.SuspenseComponent,
              st = $.SuspenseListComponent,
              Et = $.FunctionComponent,
              Pt = $.IndeterminateComponent,
              gt = $.SimpleMemoComponent,
              Bt = $.ForwardRef,
              zt = $.ClassComponent,
              ur = $.ViewTransitionComponent,
              Or = $.ActivityComponent;
            switch (re.tag) {
              case le:
              case Oe:
              case et:
                return mb(re.type);
              case ht:
                return mb("Lazy");
              case Ue:
                return mb("Suspense");
              case st:
                return mb("SuspenseList");
              case ur:
                return mb("ViewTransition");
              case Or:
                return mb("Activity");
              case Et:
              case Pt:
              case gt:
                return JIe(re.type, te);
              case Bt:
                return JIe(re.type.render, te);
              case zt:
                return u5t(re.type, te);
              default:
                return "";
            }
          }
          function c7e($, re, te) {
            try {
              var le = "",
                Oe = re;
              do {
                le += MQ($, Oe, te);
                var et = Oe._debugInfo;
                if (et)
                  for (var ht = et.length - 1; ht >= 0; ht--) {
                    var Ue = et[ht];
                    typeof Ue.name == "string" && (le += a5t(Ue.name, Ue.env));
                  }
                Oe = Oe.return;
              } while (Oe);
              return le;
            } catch (st) {
              return (
                `
Error generating stack: ` +
                st.message +
                `
` +
                st.stack
              );
            }
          }
          function l7e($, re, te) {
            try {
              var le = MQ($, re, te);
              if (le !== "") return le.slice(1);
            } catch (Oe) {
              console.error(Oe);
            }
            return null;
          }
          function m7e($) {
            return !!$._debugTask;
          }
          function w5t($) {
            return $._debugStack !== void 0;
          }
          function d7e($, re, te) {
            var le = $.HostHoistable,
              Oe = $.HostSingleton,
              et = $.HostText,
              ht = $.HostComponent,
              Ue = $.SuspenseComponent,
              st = $.SuspenseListComponent,
              Et = $.ViewTransitionComponent,
              Pt = $.ActivityComponent;
            try {
              var gt = "";
              switch ((re.tag === et && (re = re.return), re.tag)) {
                case le:
                case Oe:
                case ht:
                  gt += mb(re.type);
                  break;
                case Ue:
                  gt += mb("Suspense");
                  break;
                case st:
                  gt += mb("SuspenseList");
                  break;
                case Et:
                  gt += mb("ViewTransition");
                  break;
                case Pt:
                  gt += mb("Activity");
                  break;
              }
              for (var Bt = re; Bt; )
                if (typeof Bt.tag == "number") {
                  var zt = Bt;
                  Bt = zt._debugOwner;
                  var ur = zt._debugStack;
                  Bt &&
                    ur &&
                    (typeof ur != "string" && (ur = Uw(ur)),
                    ur !== "" &&
                      (gt +=
                        `
` + ur));
                } else if (Bt.debugStack != null) {
                  var Or = Bt.debugStack;
                  ((Bt = Bt.owner),
                    Bt &&
                      Or &&
                      (gt +=
                        `
` + Uw(Or)));
                } else break;
              return gt;
            } catch (Ir) {
              return (
                `
Error generating stack: ` +
                Ir.message +
                `
` +
                Ir.stack
              );
            }
          }
          var AZ = new Map();
          function x5t($) {
            var re = new Set(),
              te = {};
            return (Wpe($, re, te), { sources: Array.from(re).sort(), resolvedStyles: te });
          }
          function Wpe($, re, te) {
            $ != null &&
              (M3($)
                ? $.forEach(function (le) {
                    le != null && (M3(le) ? Wpe(le, re, te) : f7e(le, re, te));
                  })
                : f7e($, re, te),
              (te = Object.fromEntries(Object.entries(te).sort())));
          }
          function f7e($, re, te) {
            var le = Object.keys($);
            le.forEach(function (Oe) {
              var et = $[Oe];
              if (typeof et == "string")
                if (Oe === et) re.add(Oe);
                else {
                  var ht = p7e(et);
                  ht != null && (te[Oe] = ht);
                }
              else {
                var Ue = {};
                ((te[Oe] = Ue), Wpe([et], re, Ue));
              }
            });
          }
          function p7e($) {
            if (AZ.has($)) return AZ.get($);
            for (var re = 0; re < document.styleSheets.length; re++) {
              var te = document.styleSheets[re],
                le = null;
              try {
                le = te.cssRules;
              } catch {
                continue;
              }
              for (var Oe = 0; Oe < le.length; Oe++)
                if (le[Oe] instanceof CSSStyleRule) {
                  var et = le[Oe],
                    ht = et.cssText,
                    Ue = et.selectorText,
                    st = et.style;
                  if (Ue != null && Ue.startsWith(".".concat($))) {
                    var Et = ht.match(/{ *([a-z\-]+):/);
                    if (Et !== null) {
                      var Pt = Et[1],
                        gt = st.getPropertyValue(Pt);
                      return (AZ.set($, gt), gt);
                    } else return null;
                  }
                }
            }
            return null;
          }
          var _4r = "https://github.com/facebook/react/blob/main/packages/react-devtools/CHANGELOG.md",
            Sf = "https://reactjs.org/blog/2019/08/15/new-react-devtools.html#how-do-i-get-the-old-version-back",
            T5t = "https://fburl.com/react-devtools-workplace-group",
            h7e = {
              light: {
                "--color-attribute-name": "#ef6632",
                "--color-attribute-name-not-editable": "#23272f",
                "--color-attribute-name-inverted": "rgba(255, 255, 255, 0.7)",
                "--color-attribute-value": "#1a1aa6",
                "--color-attribute-value-inverted": "#ffffff",
                "--color-attribute-editable-value": "#1a1aa6",
                "--color-background": "#ffffff",
                "--color-background-hover": "rgba(0, 136, 250, 0.1)",
                "--color-background-inactive": "#e5e5e5",
                "--color-background-invalid": "#fff0f0",
                "--color-background-selected": "#0088fa",
                "--color-button-background": "#ffffff",
                "--color-button-background-focus": "#ededed",
                "--color-button-background-hover": "rgba(0, 0, 0, 0.2)",
                "--color-button": "#5f6673",
                "--color-button-disabled": "#cfd1d5",
                "--color-button-active": "#0088fa",
                "--color-button-focus": "#23272f",
                "--color-button-hover": "#23272f",
                "--color-border": "#eeeeee",
                "--color-commit-did-not-render-fill": "#cfd1d5",
                "--color-commit-did-not-render-fill-text": "#000000",
                "--color-commit-did-not-render-pattern": "#cfd1d5",
                "--color-commit-did-not-render-pattern-text": "#333333",
                "--color-commit-gradient-0": "#37afa9",
                "--color-commit-gradient-1": "#63b19e",
                "--color-commit-gradient-2": "#80b393",
                "--color-commit-gradient-3": "#97b488",
                "--color-commit-gradient-4": "#abb67d",
                "--color-commit-gradient-5": "#beb771",
                "--color-commit-gradient-6": "#cfb965",
                "--color-commit-gradient-7": "#dfba57",
                "--color-commit-gradient-8": "#efbb49",
                "--color-commit-gradient-9": "#febc38",
                "--color-commit-gradient-text": "#000000",
                "--color-component-name": "#6a51b2",
                "--color-component-name-inverted": "#ffffff",
                "--color-component-badge-background": "#e6e6e6",
                "--color-component-badge-background-inverted": "rgba(255, 255, 255, 0.25)",
                "--color-component-badge-count": "#777d88",
                "--color-component-badge-count-inverted": "rgba(255, 255, 255, 0.7)",
                "--color-console-error-badge-text": "#ffffff",
                "--color-console-error-background": "#fff0f0",
                "--color-console-error-border": "#ffd6d6",
                "--color-console-error-icon": "#eb3941",
                "--color-console-error-text": "#fe2e31",
                "--color-console-warning-badge-text": "#000000",
                "--color-console-warning-background": "#fffbe5",
                "--color-console-warning-border": "#fff5c1",
                "--color-console-warning-icon": "#f4bd00",
                "--color-console-warning-text": "#64460c",
                "--color-context-background": "rgba(0,0,0,.9)",
                "--color-context-background-hover": "rgba(255, 255, 255, 0.1)",
                "--color-context-background-selected": "#178fb9",
                "--color-context-border": "#3d424a",
                "--color-context-text": "#ffffff",
                "--color-context-text-selected": "#ffffff",
                "--color-dim": "#777d88",
                "--color-dimmer": "#cfd1d5",
                "--color-dimmest": "#eff0f1",
                "--color-error-background": "hsl(0, 100%, 97%)",
                "--color-error-border": "hsl(0, 100%, 92%)",
                "--color-error-text": "#ff0000",
                "--color-expand-collapse-toggle": "#777d88",
                "--color-forget-badge-background": "#2683e2",
                "--color-forget-badge-background-inverted": "#1a6bbc",
                "--color-forget-text": "#fff",
                "--color-link": "#0000ff",
                "--color-modal-background": "rgba(255, 255, 255, 0.75)",
                "--color-bridge-version-npm-background": "#eff0f1",
                "--color-bridge-version-npm-text": "#000000",
                "--color-bridge-version-number": "#0088fa",
                "--color-primitive-hook-badge-background": "#e5e5e5",
                "--color-primitive-hook-badge-text": "#5f6673",
                "--color-record-active": "#fc3a4b",
                "--color-record-hover": "#3578e5",
                "--color-record-inactive": "#0088fa",
                "--color-resize-bar": "#eeeeee",
                "--color-resize-bar-active": "#dcdcdc",
                "--color-resize-bar-border": "#d1d1d1",
                "--color-resize-bar-dot": "#333333",
                "--color-timeline-internal-module": "#d1d1d1",
                "--color-timeline-internal-module-hover": "#c9c9c9",
                "--color-timeline-internal-module-text": "#444",
                "--color-timeline-native-event": "#ccc",
                "--color-timeline-native-event-hover": "#aaa",
                "--color-timeline-network-primary": "#fcf3dc",
                "--color-timeline-network-primary-hover": "#f0e7d1",
                "--color-timeline-network-secondary": "#efc457",
                "--color-timeline-network-secondary-hover": "#e3ba52",
                "--color-timeline-priority-background": "#f6f6f6",
                "--color-timeline-priority-border": "#eeeeee",
                "--color-timeline-user-timing": "#c9cacd",
                "--color-timeline-user-timing-hover": "#93959a",
                "--color-timeline-react-idle": "#d3e5f6",
                "--color-timeline-react-idle-hover": "#c3d9ef",
                "--color-timeline-react-render": "#9fc3f3",
                "--color-timeline-react-render-hover": "#83afe9",
                "--color-timeline-react-render-text": "#11365e",
                "--color-timeline-react-commit": "#c88ff0",
                "--color-timeline-react-commit-hover": "#b281d6",
                "--color-timeline-react-commit-text": "#3e2c4a",
                "--color-timeline-react-layout-effects": "#b281d6",
                "--color-timeline-react-layout-effects-hover": "#9d71bd",
                "--color-timeline-react-layout-effects-text": "#3e2c4a",
                "--color-timeline-react-passive-effects": "#b281d6",
                "--color-timeline-react-passive-effects-hover": "#9d71bd",
                "--color-timeline-react-passive-effects-text": "#3e2c4a",
                "--color-timeline-react-schedule": "#9fc3f3",
                "--color-timeline-react-schedule-hover": "#2683E2",
                "--color-timeline-react-suspense-rejected": "#f1cc14",
                "--color-timeline-react-suspense-rejected-hover": "#ffdf37",
                "--color-timeline-react-suspense-resolved": "#a6e59f",
                "--color-timeline-react-suspense-resolved-hover": "#89d281",
                "--color-timeline-react-suspense-unresolved": "#c9cacd",
                "--color-timeline-react-suspense-unresolved-hover": "#93959a",
                "--color-timeline-thrown-error": "#ee1638",
                "--color-timeline-thrown-error-hover": "#da1030",
                "--color-timeline-text-color": "#000000",
                "--color-timeline-text-dim-color": "#ccc",
                "--color-timeline-react-work-border": "#eeeeee",
                "--color-search-match": "yellow",
                "--color-search-match-current": "#f7923b",
                "--color-selected-tree-highlight-active": "rgba(0, 136, 250, 0.1)",
                "--color-selected-tree-highlight-inactive": "rgba(0, 0, 0, 0.05)",
                "--color-scroll-caret": "rgba(150, 150, 150, 0.5)",
                "--color-tab-selected-border": "#0088fa",
                "--color-text": "#000000",
                "--color-text-invalid": "#ff0000",
                "--color-text-selected": "#ffffff",
                "--color-toggle-background-invalid": "#fc3a4b",
                "--color-toggle-background-on": "#0088fa",
                "--color-toggle-background-off": "#cfd1d5",
                "--color-toggle-text": "#ffffff",
                "--color-warning-background": "#fb3655",
                "--color-warning-background-hover": "#f82042",
                "--color-warning-text-color": "#ffffff",
                "--color-warning-text-color-inverted": "#fd4d69",
                "--color-scroll-thumb": "#c2c2c2",
                "--color-scroll-track": "#fafafa",
                "--color-tooltip-background": "rgba(0, 0, 0, 0.9)",
                "--color-tooltip-text": "#ffffff",
              },
              dark: {
                "--color-attribute-name": "#9d87d2",
                "--color-attribute-name-not-editable": "#ededed",
                "--color-attribute-name-inverted": "#282828",
                "--color-attribute-value": "#cedae0",
                "--color-attribute-value-inverted": "#ffffff",
                "--color-attribute-editable-value": "yellow",
                "--color-background": "#282c34",
                "--color-background-hover": "rgba(255, 255, 255, 0.1)",
                "--color-background-inactive": "#3d424a",
                "--color-background-invalid": "#5c0000",
                "--color-background-selected": "#178fb9",
                "--color-button-background": "#282c34",
                "--color-button-background-focus": "#3d424a",
                "--color-button-background-hover": "rgba(255, 255, 255, 0.2)",
                "--color-button": "#afb3b9",
                "--color-button-active": "#61dafb",
                "--color-button-disabled": "#4f5766",
                "--color-button-focus": "#a2e9fc",
                "--color-button-hover": "#ededed",
                "--color-border": "#3d424a",
                "--color-commit-did-not-render-fill": "#777d88",
                "--color-commit-did-not-render-fill-text": "#000000",
                "--color-commit-did-not-render-pattern": "#666c77",
                "--color-commit-did-not-render-pattern-text": "#ffffff",
                "--color-commit-gradient-0": "#37afa9",
                "--color-commit-gradient-1": "#63b19e",
                "--color-commit-gradient-2": "#80b393",
                "--color-commit-gradient-3": "#97b488",
                "--color-commit-gradient-4": "#abb67d",
                "--color-commit-gradient-5": "#beb771",
                "--color-commit-gradient-6": "#cfb965",
                "--color-commit-gradient-7": "#dfba57",
                "--color-commit-gradient-8": "#efbb49",
                "--color-commit-gradient-9": "#febc38",
                "--color-commit-gradient-text": "#000000",
                "--color-component-name": "#61dafb",
                "--color-component-name-inverted": "#282828",
                "--color-component-badge-background": "#5e6167",
                "--color-component-badge-background-inverted": "#46494e",
                "--color-component-badge-count": "#8f949d",
                "--color-component-badge-count-inverted": "rgba(255, 255, 255, 0.85)",
                "--color-console-error-badge-text": "#000000",
                "--color-console-error-background": "#290000",
                "--color-console-error-border": "#5c0000",
                "--color-console-error-icon": "#eb3941",
                "--color-console-error-text": "#fc7f7f",
                "--color-console-warning-badge-text": "#000000",
                "--color-console-warning-background": "#332b00",
                "--color-console-warning-border": "#665500",
                "--color-console-warning-icon": "#f4bd00",
                "--color-console-warning-text": "#f5f2ed",
                "--color-context-background": "rgba(255,255,255,.95)",
                "--color-context-background-hover": "rgba(0, 136, 250, 0.1)",
                "--color-context-background-selected": "#0088fa",
                "--color-context-border": "#eeeeee",
                "--color-context-text": "#000000",
                "--color-context-text-selected": "#ffffff",
                "--color-dim": "#8f949d",
                "--color-dimmer": "#777d88",
                "--color-dimmest": "#4f5766",
                "--color-error-background": "#200",
                "--color-error-border": "#900",
                "--color-error-text": "#f55",
                "--color-expand-collapse-toggle": "#8f949d",
                "--color-forget-badge-background": "#2683e2",
                "--color-forget-badge-background-inverted": "#1a6bbc",
                "--color-forget-text": "#fff",
                "--color-link": "#61dafb",
                "--color-modal-background": "rgba(0, 0, 0, 0.75)",
                "--color-bridge-version-npm-background": "rgba(0, 0, 0, 0.25)",
                "--color-bridge-version-npm-text": "#ffffff",
                "--color-bridge-version-number": "yellow",
                "--color-primitive-hook-badge-background": "rgba(0, 0, 0, 0.25)",
                "--color-primitive-hook-badge-text": "rgba(255, 255, 255, 0.7)",
                "--color-record-active": "#fc3a4b",
                "--color-record-hover": "#a2e9fc",
                "--color-record-inactive": "#61dafb",
                "--color-resize-bar": "#282c34",
                "--color-resize-bar-active": "#31363f",
                "--color-resize-bar-border": "#3d424a",
                "--color-resize-bar-dot": "#cfd1d5",
                "--color-timeline-internal-module": "#303542",
                "--color-timeline-internal-module-hover": "#363b4a",
                "--color-timeline-internal-module-text": "#7f8899",
                "--color-timeline-native-event": "#b2b2b2",
                "--color-timeline-native-event-hover": "#949494",
                "--color-timeline-network-primary": "#fcf3dc",
                "--color-timeline-network-primary-hover": "#e3dbc5",
                "--color-timeline-network-secondary": "#efc457",
                "--color-timeline-network-secondary-hover": "#d6af4d",
                "--color-timeline-priority-background": "#1d2129",
                "--color-timeline-priority-border": "#282c34",
                "--color-timeline-user-timing": "#c9cacd",
                "--color-timeline-user-timing-hover": "#93959a",
                "--color-timeline-react-idle": "#3d485b",
                "--color-timeline-react-idle-hover": "#465269",
                "--color-timeline-react-render": "#2683E2",
                "--color-timeline-react-render-hover": "#1a76d4",
                "--color-timeline-react-render-text": "#11365e",
                "--color-timeline-react-commit": "#731fad",
                "--color-timeline-react-commit-hover": "#611b94",
                "--color-timeline-react-commit-text": "#e5c1ff",
                "--color-timeline-react-layout-effects": "#611b94",
                "--color-timeline-react-layout-effects-hover": "#51167a",
                "--color-timeline-react-layout-effects-text": "#e5c1ff",
                "--color-timeline-react-passive-effects": "#611b94",
                "--color-timeline-react-passive-effects-hover": "#51167a",
                "--color-timeline-react-passive-effects-text": "#e5c1ff",
                "--color-timeline-react-schedule": "#2683E2",
                "--color-timeline-react-schedule-hover": "#1a76d4",
                "--color-timeline-react-suspense-rejected": "#f1cc14",
                "--color-timeline-react-suspense-rejected-hover": "#e4c00f",
                "--color-timeline-react-suspense-resolved": "#a6e59f",
                "--color-timeline-react-suspense-resolved-hover": "#89d281",
                "--color-timeline-react-suspense-unresolved": "#c9cacd",
                "--color-timeline-react-suspense-unresolved-hover": "#93959a",
                "--color-timeline-thrown-error": "#fb3655",
                "--color-timeline-thrown-error-hover": "#f82042",
                "--color-timeline-text-color": "#282c34",
                "--color-timeline-text-dim-color": "#555b66",
                "--color-timeline-react-work-border": "#3d424a",
                "--color-search-match": "yellow",
                "--color-search-match-current": "#f7923b",
                "--color-selected-tree-highlight-active": "rgba(23, 143, 185, 0.15)",
                "--color-selected-tree-highlight-inactive": "rgba(255, 255, 255, 0.05)",
                "--color-scroll-caret": "#4f5766",
                "--color-shadow": "rgba(0, 0, 0, 0.5)",
                "--color-tab-selected-border": "#178fb9",
                "--color-text": "#ffffff",
                "--color-text-invalid": "#ff8080",
                "--color-text-selected": "#ffffff",
                "--color-toggle-background-invalid": "#fc3a4b",
                "--color-toggle-background-on": "#178fb9",
                "--color-toggle-background-off": "#777d88",
                "--color-toggle-text": "#ffffff",
                "--color-warning-background": "#ee1638",
                "--color-warning-background-hover": "#da1030",
                "--color-warning-text-color": "#ffffff",
                "--color-warning-text-color-inverted": "#ee1638",
                "--color-scroll-thumb": "#afb3b9",
                "--color-scroll-track": "#313640",
                "--color-tooltip-background": "rgba(255, 255, 255, 0.95)",
                "--color-tooltip-text": "#000000",
              },
              compact: {
                "--font-size-monospace-small": "9px",
                "--font-size-monospace-normal": "11px",
                "--font-size-monospace-large": "15px",
                "--font-size-sans-small": "10px",
                "--font-size-sans-normal": "12px",
                "--font-size-sans-large": "14px",
                "--line-height-data": "18px",
              },
              comfortable: {
                "--font-size-monospace-small": "10px",
                "--font-size-monospace-normal": "13px",
                "--font-size-monospace-large": "17px",
                "--font-size-sans-small": "12px",
                "--font-size-sans-normal": "14px",
                "--font-size-sans-large": "16px",
                "--line-height-data": "22px",
              },
            },
            D5t = parseInt(h7e.comfortable["--line-height-data"], 10),
            I5t = parseInt(h7e.compact["--line-height-data"], 10),
            L7 = 31,
            zpe = 1,
            FQ = 60;
          function M7($, re) {
            return _Z($) || yZ($, re) || R5t($, re) || i2();
          }
          function i2() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function R5t($, re) {
            if ($) {
              if (typeof $ == "string") return g7e($, re);
              var te = Object.prototype.toString.call($).slice(8, -1);
              if ((te === "Object" && $.constructor && (te = $.constructor.name), te === "Map" || te === "Set"))
                return Array.from($);
              if (te === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te)) return g7e($, re);
            }
          }
          function g7e($, re) {
            (re == null || re > $.length) && (re = $.length);
            for (var te = 0, le = new Array(re); te < re; te++) le[te] = $[te];
            return le;
          }
          function yZ($, re) {
            if (!(typeof Symbol > "u" || !(Symbol.iterator in Object($)))) {
              var te = [],
                le = !0,
                Oe = !1,
                et = void 0;
              try {
                for (
                  var ht = $[Symbol.iterator](), Ue;
                  !(le = (Ue = ht.next()).done) && (te.push(Ue.value), !(re && te.length === re));
                  le = !0
                );
              } catch (st) {
                ((Oe = !0), (et = st));
              } finally {
                try {
                  !le && ht.return != null && ht.return();
                } finally {
                  if (Oe) throw et;
                }
              }
              return te;
            }
          }
          function _Z($) {
            if (Array.isArray($)) return $;
          }
          function qw($) {
            "@babel/helpers - typeof";
            return (
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? (qw = function (te) {
                    return typeof te;
                  })
                : (qw = function (te) {
                    return te && typeof Symbol == "function" && te.constructor === Symbol && te !== Symbol.prototype
                      ? "symbol"
                      : typeof te;
                  }),
              qw($)
            );
          }
          var UQ = 10,
            FP = null,
            b7e =
              typeof performance < "u" &&
              typeof performance.mark == "function" &&
              typeof performance.clearMarks == "function",
            gc = !1;
          if (b7e) {
            var G3 = "__v3",
              Ype = {};
            Object.defineProperty(Ype, "startTime", {
              get: function () {
                return ((gc = !0), 0);
              },
              set: function () {},
            });
            try {
              performance.mark(G3, Ype);
            } catch {
            } finally {
              performance.clearMarks(G3);
            }
          }
          gc && (FP = performance);
          var k5t =
            (typeof performance > "u" ? "undefined" : qw(performance)) === "object" &&
            typeof performance.now == "function"
              ? function () {
                  return performance.now();
                }
              : function () {
                  return Date.now();
                };
          function A7e($) {
            ((FP = $), (b7e = $ !== null), (gc = $ !== null));
          }
          function O5t($) {
            var re = $.getDisplayNameForFiber,
              te = $.getIsProfiling,
              le = $.getLaneLabelMap,
              Oe = $.workTagMap,
              et = $.currentDispatcherRef,
              ht = $.reactVersion,
              Ue = 0,
              st = null,
              Et = [],
              Pt = null,
              gt = new Map(),
              Bt = !1,
              zt = !1;
            function ur() {
              var Lt = k5t();
              return Pt ? (Pt.startTime === 0 && (Pt.startTime = Lt - UQ), Lt - Pt.startTime) : 0;
            }
            function Or() {
              if (
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.getInternalModuleRanges == "function"
              ) {
                var Lt = __REACT_DEVTOOLS_GLOBAL_HOOK__.getInternalModuleRanges();
                if (Cf(Lt)) return Lt;
              }
              return null;
            }
            function Ir() {
              return Pt;
            }
            function In(Lt) {
              for (var nr = [], hr = 1, jr = 0; jr < L7; jr++) (hr & Lt && nr.push(hr), (hr *= 2));
              return nr;
            }
            var io = typeof le == "function" ? le() : null;
            function gu() {
              (fn("--react-version-".concat(ht)), fn("--profiler-version-".concat(zpe)));
              var Lt = Or();
              if (Lt)
                for (var nr = 0; nr < Lt.length; nr++) {
                  var hr = Lt[nr];
                  if (Cf(hr) && hr.length === 2) {
                    var jr = M7(Lt[nr], 2),
                      ei = jr[0],
                      Is = jr[1];
                    (fn("--react-internal-module-start-".concat(ei)), fn("--react-internal-module-stop-".concat(Is)));
                  }
                }
              if (io != null) {
                var mm = Array.from(io.values()).join(",");
                fn("--react-lane-labels-".concat(mm));
              }
            }
            function fn(Lt) {
              (FP.mark(Lt), FP.clearMarks(Lt));
            }
            function hi(Lt, nr) {
              var hr = 0;
              if (Et.length > 0) {
                var jr = Et[Et.length - 1];
                hr = jr.type === "render-idle" ? jr.depth : jr.depth + 1;
              }
              var ei = In(nr),
                Is = { type: Lt, batchUID: Ue, depth: hr, lanes: ei, timestamp: ur(), duration: 0 };
              if ((Et.push(Is), Pt)) {
                var mm = Pt,
                  Wm = mm.batchUIDToMeasuresMap,
                  Ft = mm.laneToReactMeasureMap,
                  It = Wm.get(Ue);
                (It != null ? It.push(Is) : Wm.set(Ue, [Is]),
                  ei.forEach(function (Qt) {
                    ((It = Ft.get(Qt)), It && It.push(Is));
                  }));
              }
            }
            function No(Lt) {
              var nr = ur();
              if (Et.length === 0) {
                console.error(
                  'Unexpected type "%s" completed at %sms while currentReactMeasuresStack is empty.',
                  Lt,
                  nr,
                );
                return;
              }
              var hr = Et.pop();
              (hr.type !== Lt &&
                console.error('Unexpected type "%s" completed at %sms before "%s" completed.', Lt, nr, hr.type),
                (hr.duration = nr - hr.timestamp),
                Pt && (Pt.duration = ur() + UQ));
            }
            function vo(Lt) {
              Bt && (hi("commit", Lt), (zt = !0), gc && (fn("--commit-start-".concat(Lt)), gu()));
            }
            function Lc() {
              Bt && (No("commit"), No("render-idle"), gc && fn("--commit-stop"));
            }
            function Jo(Lt) {
              if (Bt) {
                var nr = re(Lt) || "Unknown";
                ((st = { componentName: nr, duration: 0, timestamp: ur(), type: "render", warning: null }),
                  gc && fn("--component-render-start-".concat(nr)));
              }
            }
            function Na() {
              Bt &&
                (st && (Pt && Pt.componentMeasures.push(st), (st.duration = ur() - st.timestamp), (st = null)),
                gc && fn("--component-render-stop"));
            }
            function Ys(Lt) {
              if (Bt) {
                var nr = re(Lt) || "Unknown";
                ((st = { componentName: nr, duration: 0, timestamp: ur(), type: "layout-effect-mount", warning: null }),
                  gc && fn("--component-layout-effect-mount-start-".concat(nr)));
              }
            }
            function Ac() {
              Bt &&
                (st && (Pt && Pt.componentMeasures.push(st), (st.duration = ur() - st.timestamp), (st = null)),
                gc && fn("--component-layout-effect-mount-stop"));
            }
            function Ql(Lt) {
              if (Bt) {
                var nr = re(Lt) || "Unknown";
                ((st = {
                  componentName: nr,
                  duration: 0,
                  timestamp: ur(),
                  type: "layout-effect-unmount",
                  warning: null,
                }),
                  gc && fn("--component-layout-effect-unmount-start-".concat(nr)));
              }
            }
            function _h() {
              Bt &&
                (st && (Pt && Pt.componentMeasures.push(st), (st.duration = ur() - st.timestamp), (st = null)),
                gc && fn("--component-layout-effect-unmount-stop"));
            }
            function Id(Lt) {
              if (Bt) {
                var nr = re(Lt) || "Unknown";
                ((st = {
                  componentName: nr,
                  duration: 0,
                  timestamp: ur(),
                  type: "passive-effect-mount",
                  warning: null,
                }),
                  gc && fn("--component-passive-effect-mount-start-".concat(nr)));
              }
            }
            function el() {
              Bt &&
                (st && (Pt && Pt.componentMeasures.push(st), (st.duration = ur() - st.timestamp), (st = null)),
                gc && fn("--component-passive-effect-mount-stop"));
            }
            function Bu(Lt) {
              if (Bt) {
                var nr = re(Lt) || "Unknown";
                ((st = {
                  componentName: nr,
                  duration: 0,
                  timestamp: ur(),
                  type: "passive-effect-unmount",
                  warning: null,
                }),
                  gc && fn("--component-passive-effect-unmount-start-".concat(nr)));
              }
            }
            function Lu() {
              Bt &&
                (st && (Pt && Pt.componentMeasures.push(st), (st.duration = ur() - st.timestamp), (st = null)),
                gc && fn("--component-passive-effect-unmount-stop"));
            }
            function En(Lt, nr, hr) {
              if (Bt) {
                var jr = re(Lt) || "Unknown",
                  ei = Lt.alternate === null ? "mount" : "update",
                  Is = "";
                (nr !== null && qw(nr) === "object" && typeof nr.message == "string"
                  ? (Is = nr.message)
                  : typeof nr == "string" && (Is = nr),
                  Pt &&
                    Pt.thrownErrors.push({
                      componentName: jr,
                      message: Is,
                      phase: ei,
                      timestamp: ur(),
                      type: "thrown-error",
                    }),
                  gc && fn("--error-".concat(jr, "-").concat(ei, "-").concat(Is)));
              }
            }
            var hn = typeof WeakMap == "function" ? WeakMap : Map,
              Bn = new hn(),
              Qn = 0;
            function bu(Lt) {
              return (Bn.has(Lt) || Bn.set(Lt, Qn++), Bn.get(Lt));
            }
            function _p(Lt, nr, hr) {
              if (Bt) {
                var jr = Bn.has(nr) ? "resuspend" : "suspend",
                  ei = bu(nr),
                  Is = re(Lt) || "Unknown",
                  mm = Lt.alternate === null ? "mount" : "update",
                  Wm = nr.displayName || "",
                  Ft = null;
                ((Ft = {
                  componentName: Is,
                  depth: 0,
                  duration: 0,
                  id: "".concat(ei),
                  phase: mm,
                  promiseName: Wm,
                  resolution: "unresolved",
                  timestamp: ur(),
                  type: "suspense",
                  warning: null,
                }),
                  Pt && Pt.suspenseEvents.push(Ft),
                  gc &&
                    (fn(
                      "--suspense-"
                        .concat(jr, "-")
                        .concat(ei, "-")
                        .concat(Is, "-")
                        .concat(mm, "-")
                        .concat(hr, "-")
                        .concat(Wm),
                    ),
                    nr.then(
                      function () {
                        (Ft && ((Ft.duration = ur() - Ft.timestamp), (Ft.resolution = "resolved")),
                          gc && fn("--suspense-resolved-".concat(ei, "-").concat(Is)));
                      },
                      function () {
                        (Ft && ((Ft.duration = ur() - Ft.timestamp), (Ft.resolution = "rejected")),
                          gc && fn("--suspense-rejected-".concat(ei, "-").concat(Is)));
                      },
                    )));
              }
            }
            function Rd(Lt) {
              Bt && (hi("layout-effects", Lt), gc && fn("--layout-effects-start-".concat(Lt)));
            }
            function lm() {
              Bt && (No("layout-effects"), gc && fn("--layout-effects-stop"));
            }
            function kd(Lt) {
              Bt && (hi("passive-effects", Lt), gc && fn("--passive-effects-start-".concat(Lt)));
            }
            function S() {
              Bt && (No("passive-effects"), gc && fn("--passive-effects-stop"));
            }
            function w(Lt) {
              Bt &&
                (zt && ((zt = !1), Ue++),
                (Et.length === 0 || Et[Et.length - 1].type !== "render-idle") && hi("render-idle", Lt),
                hi("render", Lt),
                gc && fn("--render-start-".concat(Lt)));
            }
            function M() {
              Bt && (No("render"), gc && fn("--render-yield"));
            }
            function z() {
              Bt && (No("render"), gc && fn("--render-stop"));
            }
            function me(Lt) {
              Bt &&
                (Pt &&
                  Pt.schedulingEvents.push({ lanes: In(Lt), timestamp: ur(), type: "schedule-render", warning: null }),
                gc && fn("--schedule-render-".concat(Lt)));
            }
            function ve(Lt, nr) {
              if (Bt) {
                var hr = re(Lt) || "Unknown";
                (Pt &&
                  Pt.schedulingEvents.push({
                    componentName: hr,
                    lanes: In(nr),
                    timestamp: ur(),
                    type: "schedule-force-update",
                    warning: null,
                  }),
                  gc && fn("--schedule-forced-update-".concat(nr, "-").concat(hr)));
              }
            }
            function We(Lt) {
              for (var nr = [], hr = Lt; hr !== null; ) (nr.push(hr), (hr = hr.return));
              return nr;
            }
            function At(Lt, nr) {
              if (Bt) {
                var hr = re(Lt) || "Unknown";
                if (Pt) {
                  var jr = {
                    componentName: hr,
                    lanes: In(nr),
                    timestamp: ur(),
                    type: "schedule-state-update",
                    warning: null,
                  };
                  (gt.set(jr, We(Lt)), Pt.schedulingEvents.push(jr));
                }
                gc && fn("--schedule-state-update-".concat(nr, "-").concat(hr));
              }
            }
            function er(Lt) {
              var nr = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
              if (Bt !== Lt)
                if (((Bt = Lt), Bt)) {
                  var hr = new Map();
                  if (gc) {
                    var jr = Or();
                    if (jr)
                      for (var ei = 0; ei < jr.length; ei++) {
                        var Is = jr[ei];
                        if (Cf(Is) && Is.length === 2) {
                          var mm = M7(jr[ei], 2),
                            Wm = mm[0],
                            Ft = mm[1];
                          (fn("--react-internal-module-start-".concat(Wm)),
                            fn("--react-internal-module-stop-".concat(Ft)));
                        }
                      }
                  }
                  for (var It = new Map(), Qt = 1, Tt = 0; Tt < L7; Tt++) (It.set(Qt, []), (Qt *= 2));
                  ((Ue = 0),
                    (st = null),
                    (Et = []),
                    (gt = new Map()),
                    nr &&
                      (Pt = {
                        internalModuleSourceToRanges: hr,
                        laneToLabelMap: io || new Map(),
                        reactVersion: ht,
                        componentMeasures: [],
                        schedulingEvents: [],
                        suspenseEvents: [],
                        thrownErrors: [],
                        batchUIDToMeasuresMap: new Map(),
                        duration: 0,
                        laneToReactMeasureMap: It,
                        startTime: 0,
                        flamechart: [],
                        nativeEvents: [],
                        networkMeasures: [],
                        otherUserTimingMarks: [],
                        snapshots: [],
                        snapshotHeight: 0,
                      }),
                    (zt = !0));
                } else
                  (Pt !== null &&
                    Pt.schedulingEvents.forEach(function (qt) {
                      if (qt.type === "schedule-state-update") {
                        var Cr = gt.get(qt);
                        Cr &&
                          et != null &&
                          (qt.componentStack = Cr.reduce(function (or, zr) {
                            return or + MQ(Oe, zr, et);
                          }, ""));
                      }
                    }),
                    gt.clear());
            }
            return {
              getTimelineData: Ir,
              profilingHooks: {
                markCommitStarted: vo,
                markCommitStopped: Lc,
                markComponentRenderStarted: Jo,
                markComponentRenderStopped: Na,
                markComponentPassiveEffectMountStarted: Id,
                markComponentPassiveEffectMountStopped: el,
                markComponentPassiveEffectUnmountStarted: Bu,
                markComponentPassiveEffectUnmountStopped: Lu,
                markComponentLayoutEffectMountStarted: Ys,
                markComponentLayoutEffectMountStopped: Ac,
                markComponentLayoutEffectUnmountStarted: Ql,
                markComponentLayoutEffectUnmountStopped: _h,
                markComponentErrored: En,
                markComponentSuspended: _p,
                markLayoutEffectsStarted: Rd,
                markLayoutEffectsStopped: lm,
                markPassiveEffectsStarted: kd,
                markPassiveEffectsStopped: S,
                markRenderStarted: w,
                markRenderYielded: M,
                markRenderStopped: z,
                markRenderScheduled: me,
                markForceUpdateScheduled: ve,
                markStateUpdateScheduled: At,
              },
              toggleProfilingStatus: er,
            };
          }
          function N5t($, re) {
            if ($ == null) return {};
            var te = P5t($, re),
              le,
              Oe;
            if (Object.getOwnPropertySymbols) {
              var et = Object.getOwnPropertySymbols($);
              for (Oe = 0; Oe < et.length; Oe++)
                ((le = et[Oe]),
                  !(re.indexOf(le) >= 0) && Object.prototype.propertyIsEnumerable.call($, le) && (te[le] = $[le]));
            }
            return te;
          }
          function P5t($, re) {
            if ($ == null) return {};
            var te = {},
              le = Object.keys($),
              Oe,
              et;
            for (et = 0; et < le.length; et++) ((Oe = le[et]), !(re.indexOf(Oe) >= 0) && (te[Oe] = $[Oe]));
            return te;
          }
          function UP($, re) {
            var te = Object.keys($);
            if (Object.getOwnPropertySymbols) {
              var le = Object.getOwnPropertySymbols($);
              (re &&
                (le = le.filter(function (Oe) {
                  return Object.getOwnPropertyDescriptor($, Oe).enumerable;
                })),
                te.push.apply(te, le));
            }
            return te;
          }
          function yh($) {
            for (var re = 1; re < arguments.length; re++) {
              var te = arguments[re] != null ? arguments[re] : {};
              re % 2
                ? UP(Object(te), !0).forEach(function (le) {
                    o2($, le, te[le]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties($, Object.getOwnPropertyDescriptors(te))
                  : UP(Object(te)).forEach(function (le) {
                      Object.defineProperty($, le, Object.getOwnPropertyDescriptor(te, le));
                    });
            }
            return $;
          }
          function o2($, re, te) {
            return (
              re in $
                ? Object.defineProperty($, re, { value: te, enumerable: !0, configurable: !0, writable: !0 })
                : ($[re] = te),
              $
            );
          }
          function EZ($) {
            return y7e($) || Kpe($) || Jpe($) || B5t();
          }
          function B5t() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function Kpe($) {
            if (typeof Symbol < "u" && Symbol.iterator in Object($)) return Array.from($);
          }
          function y7e($) {
            if (Array.isArray($)) return Vw($);
          }
          function Hw($, re) {
            var te;
            if (typeof Symbol > "u" || $[Symbol.iterator] == null) {
              if (Array.isArray($) || (te = Jpe($)) || (re && $ && typeof $.length == "number")) {
                te && ($ = te);
                var le = 0,
                  Oe = function () {};
                return {
                  s: Oe,
                  n: function () {
                    return le >= $.length ? { done: !0 } : { done: !1, value: $[le++] };
                  },
                  e: function (Et) {
                    throw Et;
                  },
                  f: Oe,
                };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var et = !0,
              ht = !1,
              Ue;
            return {
              s: function () {
                te = $[Symbol.iterator]();
              },
              n: function () {
                var Et = te.next();
                return ((et = Et.done), Et);
              },
              e: function (Et) {
                ((ht = !0), (Ue = Et));
              },
              f: function () {
                try {
                  !et && te.return != null && te.return();
                } finally {
                  if (ht) throw Ue;
                }
              },
            };
          }
          function Jpe($, re) {
            if ($) {
              if (typeof $ == "string") return Vw($, re);
              var te = Object.prototype.toString.call($).slice(8, -1);
              if ((te === "Object" && $.constructor && (te = $.constructor.name), te === "Map" || te === "Set"))
                return Array.from($);
              if (te === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te)) return Vw($, re);
            }
          }
          function Vw($, re) {
            (re == null || re > $.length) && (re = $.length);
            for (var te = 0, le = new Array(re); te < re; te++) le[te] = $[te];
            return le;
          }
          function Ap($) {
            "@babel/helpers - typeof";
            return (
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? (Ap = function (te) {
                    return typeof te;
                  })
                : (Ap = function (te) {
                    return te && typeof Symbol == "function" && te.constructor === Symbol && te !== Symbol.prototype
                      ? "symbol"
                      : typeof te;
                  }),
              Ap($)
            );
          }
          var vZ = Object.prototype.toString;
          function $Q($) {
            return vZ.call($) === "[object Error]";
          }
          var vl = 0,
            f0 = 1,
            wf = 2;
          function s2($) {
            return {
              kind: vl,
              id: Si(),
              parent: null,
              firstChild: null,
              nextSibling: null,
              source: null,
              logCount: 0,
              treeBaseDuration: 0,
              data: $,
            };
          }
          function e_($) {
            return {
              kind: wf,
              id: 0,
              parent: null,
              firstChild: null,
              nextSibling: null,
              source: null,
              logCount: 0,
              treeBaseDuration: 0,
              data: $,
            };
          }
          function xf($) {
            return {
              kind: f0,
              id: Si(),
              parent: null,
              firstChild: null,
              nextSibling: null,
              source: null,
              logCount: 0,
              treeBaseDuration: 0,
              data: $,
            };
          }
          function Ww($) {
            if ($.currentDispatcherRef !== void 0) {
              var re = $.currentDispatcherRef;
              return typeof re.H > "u" && typeof re.current < "u"
                ? {
                    get H() {
                      return re.current;
                    },
                    set H(te) {
                      re.current = te;
                    },
                  }
                : re;
            }
          }
          function zw($) {
            return $.flags !== void 0 ? $.flags : $.effectTag;
          }
          var $P =
            (typeof performance > "u" ? "undefined" : Ap(performance)) === "object" &&
            typeof performance.now == "function"
              ? function () {
                  return performance.now();
                }
              : function () {
                  return Date.now();
                };
          function yp($) {
            var re = {
              ImmediatePriority: 99,
              UserBlockingPriority: 98,
              NormalPriority: 97,
              LowPriority: 96,
              IdlePriority: 95,
              NoPriority: 90,
            };
            jw($, "17.0.2") &&
              (re = {
                ImmediatePriority: 1,
                UserBlockingPriority: 2,
                NormalPriority: 3,
                LowPriority: 4,
                IdlePriority: 5,
                NoPriority: 0,
              });
            var te = 0;
            L0($, "18.0.0-alpha") ? (te = 24) : L0($, "16.9.0") ? (te = 1) : L0($, "16.3.0") && (te = 2);
            var le = null;
            jw($, "17.0.1")
              ? (le = {
                  CacheComponent: 24,
                  ClassComponent: 1,
                  ContextConsumer: 9,
                  ContextProvider: 10,
                  CoroutineComponent: -1,
                  CoroutineHandlerPhase: -1,
                  DehydratedSuspenseComponent: 18,
                  ForwardRef: 11,
                  Fragment: 7,
                  FunctionComponent: 0,
                  HostComponent: 5,
                  HostPortal: 4,
                  HostRoot: 3,
                  HostHoistable: 26,
                  HostSingleton: 27,
                  HostText: 6,
                  IncompleteClassComponent: 17,
                  IncompleteFunctionComponent: 28,
                  IndeterminateComponent: 2,
                  LazyComponent: 16,
                  LegacyHiddenComponent: 23,
                  MemoComponent: 14,
                  Mode: 8,
                  OffscreenComponent: 22,
                  Profiler: 12,
                  ScopeComponent: 21,
                  SimpleMemoComponent: 15,
                  SuspenseComponent: 13,
                  SuspenseListComponent: 19,
                  TracingMarkerComponent: 25,
                  YieldComponent: -1,
                  Throw: 29,
                  ViewTransitionComponent: 30,
                  ActivityComponent: 31,
                })
              : L0($, "17.0.0-alpha")
                ? (le = {
                    CacheComponent: -1,
                    ClassComponent: 1,
                    ContextConsumer: 9,
                    ContextProvider: 10,
                    CoroutineComponent: -1,
                    CoroutineHandlerPhase: -1,
                    DehydratedSuspenseComponent: 18,
                    ForwardRef: 11,
                    Fragment: 7,
                    FunctionComponent: 0,
                    HostComponent: 5,
                    HostPortal: 4,
                    HostRoot: 3,
                    HostHoistable: -1,
                    HostSingleton: -1,
                    HostText: 6,
                    IncompleteClassComponent: 17,
                    IncompleteFunctionComponent: -1,
                    IndeterminateComponent: 2,
                    LazyComponent: 16,
                    LegacyHiddenComponent: 24,
                    MemoComponent: 14,
                    Mode: 8,
                    OffscreenComponent: 23,
                    Profiler: 12,
                    ScopeComponent: 21,
                    SimpleMemoComponent: 15,
                    SuspenseComponent: 13,
                    SuspenseListComponent: 19,
                    TracingMarkerComponent: -1,
                    YieldComponent: -1,
                    Throw: -1,
                    ViewTransitionComponent: -1,
                    ActivityComponent: -1,
                  })
                : L0($, "16.6.0-beta.0")
                  ? (le = {
                      CacheComponent: -1,
                      ClassComponent: 1,
                      ContextConsumer: 9,
                      ContextProvider: 10,
                      CoroutineComponent: -1,
                      CoroutineHandlerPhase: -1,
                      DehydratedSuspenseComponent: 18,
                      ForwardRef: 11,
                      Fragment: 7,
                      FunctionComponent: 0,
                      HostComponent: 5,
                      HostPortal: 4,
                      HostRoot: 3,
                      HostHoistable: -1,
                      HostSingleton: -1,
                      HostText: 6,
                      IncompleteClassComponent: 17,
                      IncompleteFunctionComponent: -1,
                      IndeterminateComponent: 2,
                      LazyComponent: 16,
                      LegacyHiddenComponent: -1,
                      MemoComponent: 14,
                      Mode: 8,
                      OffscreenComponent: -1,
                      Profiler: 12,
                      ScopeComponent: -1,
                      SimpleMemoComponent: 15,
                      SuspenseComponent: 13,
                      SuspenseListComponent: 19,
                      TracingMarkerComponent: -1,
                      YieldComponent: -1,
                      Throw: -1,
                      ViewTransitionComponent: -1,
                      ActivityComponent: -1,
                    })
                  : L0($, "16.4.3-alpha")
                    ? (le = {
                        CacheComponent: -1,
                        ClassComponent: 2,
                        ContextConsumer: 11,
                        ContextProvider: 12,
                        CoroutineComponent: -1,
                        CoroutineHandlerPhase: -1,
                        DehydratedSuspenseComponent: -1,
                        ForwardRef: 13,
                        Fragment: 9,
                        FunctionComponent: 0,
                        HostComponent: 7,
                        HostPortal: 6,
                        HostRoot: 5,
                        HostHoistable: -1,
                        HostSingleton: -1,
                        HostText: 8,
                        IncompleteClassComponent: -1,
                        IncompleteFunctionComponent: -1,
                        IndeterminateComponent: 4,
                        LazyComponent: -1,
                        LegacyHiddenComponent: -1,
                        MemoComponent: -1,
                        Mode: 10,
                        OffscreenComponent: -1,
                        Profiler: 15,
                        ScopeComponent: -1,
                        SimpleMemoComponent: -1,
                        SuspenseComponent: 16,
                        SuspenseListComponent: -1,
                        TracingMarkerComponent: -1,
                        YieldComponent: -1,
                        Throw: -1,
                        ViewTransitionComponent: -1,
                        ActivityComponent: -1,
                      })
                    : (le = {
                        CacheComponent: -1,
                        ClassComponent: 2,
                        ContextConsumer: 12,
                        ContextProvider: 13,
                        CoroutineComponent: 7,
                        CoroutineHandlerPhase: 8,
                        DehydratedSuspenseComponent: -1,
                        ForwardRef: 14,
                        Fragment: 10,
                        FunctionComponent: 1,
                        HostComponent: 5,
                        HostPortal: 4,
                        HostRoot: 3,
                        HostHoistable: -1,
                        HostSingleton: -1,
                        HostText: 6,
                        IncompleteClassComponent: -1,
                        IncompleteFunctionComponent: -1,
                        IndeterminateComponent: 0,
                        LazyComponent: -1,
                        LegacyHiddenComponent: -1,
                        MemoComponent: -1,
                        Mode: 11,
                        OffscreenComponent: -1,
                        Profiler: 15,
                        ScopeComponent: -1,
                        SimpleMemoComponent: -1,
                        SuspenseComponent: 16,
                        SuspenseListComponent: -1,
                        TracingMarkerComponent: -1,
                        YieldComponent: 9,
                        Throw: -1,
                        ViewTransitionComponent: -1,
                        ActivityComponent: -1,
                      });
            function Oe(En) {
              var hn = Ap(En) === "object" && En !== null ? En.$$typeof : En;
              return Ap(hn) === "symbol" ? hn.toString() : hn;
            }
            var et = le,
              ht = et.CacheComponent,
              Ue = et.ClassComponent,
              st = et.IncompleteClassComponent,
              Et = et.IncompleteFunctionComponent,
              Pt = et.FunctionComponent,
              gt = et.IndeterminateComponent,
              Bt = et.ForwardRef,
              zt = et.HostRoot,
              ur = et.HostHoistable,
              Or = et.HostSingleton,
              Ir = et.HostComponent,
              In = et.HostPortal,
              io = et.HostText,
              gu = et.Fragment,
              fn = et.LazyComponent,
              hi = et.LegacyHiddenComponent,
              No = et.MemoComponent,
              vo = et.OffscreenComponent,
              Lc = et.Profiler,
              Jo = et.ScopeComponent,
              Na = et.SimpleMemoComponent,
              Ys = et.SuspenseComponent,
              Ac = et.SuspenseListComponent,
              Ql = et.TracingMarkerComponent,
              _h = et.Throw,
              Id = et.ViewTransitionComponent,
              el = et.ActivityComponent;
            function Bu(En) {
              var hn = Oe(En);
              switch (hn) {
                case A5t:
                case y5t:
                  return Bu(En.type);
                case b5t:
                case r7e:
                  return En.render;
                default:
                  return En;
              }
            }
            function Lu(En) {
              var hn,
                Bn,
                Qn,
                bu,
                _p,
                Rd = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                lm = En.elementType,
                kd = En.type,
                S = En.tag,
                w = kd;
              Ap(kd) === "object" && kd !== null && (w = Bu(kd));
              var M = null;
              if (
                !Rd &&
                (((hn = En.updateQueue) === null || hn === void 0 ? void 0 : hn.memoCache) != null ||
                  (Array.isArray((Bn = En.memoizedState) === null || Bn === void 0 ? void 0 : Bn.memoizedState) &&
                    !((Qn = En.memoizedState.memoizedState[0]) === null || Qn === void 0) &&
                    Qn[s7e]) ||
                  (!(
                    (bu = En.memoizedState) === null ||
                    bu === void 0 ||
                    (_p = bu.memoizedState) === null ||
                    _p === void 0
                  ) &&
                    _p[s7e]))
              ) {
                var z = Lu(En, !0);
                return z == null ? null : "Forget(".concat(z, ")");
              }
              switch (S) {
                case el:
                  return "Activity";
                case ht:
                  return "Cache";
                case Ue:
                case st:
                case Et:
                case Pt:
                case gt:
                  return F3(w);
                case Bt:
                  return e2(lm, w, "ForwardRef", "Anonymous");
                case zt:
                  var me = En.stateNode;
                  return me != null && me._debugRootType !== null ? me._debugRootType : null;
                case Ir:
                case Or:
                case ur:
                  return kd;
                case In:
                case io:
                  return null;
                case gu:
                  return "Fragment";
                case fn:
                  return "Lazy";
                case No:
                case Na:
                  return e2(lm, w, "Memo", "Anonymous");
                case Ys:
                  return "Suspense";
                case hi:
                  return "LegacyHidden";
                case vo:
                  return "Offscreen";
                case Jo:
                  return "Scope";
                case Ac:
                  return "SuspenseList";
                case Lc:
                  return "Profiler";
                case Ql:
                  return "TracingMarker";
                case Id:
                  return "ViewTransition";
                case _h:
                  return "Error";
                default:
                  var ve = Oe(kd);
                  switch (ve) {
                    case hZ:
                    case gZ:
                    case bZ:
                      return null;
                    case Gpe:
                    case qpe:
                      return (
                        (M = En.type._context || En.type.context),
                        "".concat(M.displayName || "Context", ".Provider")
                      );
                    case Qpe:
                    case LQ:
                    case ZIe:
                      return En.type._context === void 0 && En.type.Provider === En.type
                        ? ((M = En.type), "".concat(M.displayName || "Context", ".Provider"))
                        : ((M = En.type._context || En.type), "".concat(M.displayName || "Context", ".Consumer"));
                    case o7e:
                      return ((M = En.type._context), "".concat(M.displayName || "Context", ".Consumer"));
                    case Hpe:
                    case Vpe:
                      return null;
                    case n7e:
                    case i7e:
                      return "Profiler(".concat(En.memoizedProps.id, ")");
                    case _5t:
                    case E5t:
                      return "Scope";
                    default:
                      return null;
                  }
              }
            }
            return {
              getDisplayNameForFiber: Lu,
              getTypeSymbol: Oe,
              ReactPriorityLevels: re,
              ReactTypeOfWork: le,
              StrictModeBits: te,
            };
          }
          var Cl = new Set(),
            us = new Map(),
            bc = new Map(),
            Kd = new Map(),
            jP = new Map();
          function F7($) {
            if (Ap($) === "object" && $ !== null) {
              if (
                Ap($.canonical) === "object" &&
                $.canonical !== null &&
                Ap($.canonical.publicInstance) === "object" &&
                $.canonical.publicInstance !== null
              )
                return $.canonical.publicInstance;
              if (typeof $._nativeTag == "number") return $._nativeTag;
            }
            return $;
          }
          function U7($) {
            return Ap($) !== "object" || $ === null
              ? null
              : $.canonical != null && typeof $.canonical.nativeTag == "number"
                ? $.canonical.nativeTag
                : typeof $._nativeTag == "number"
                  ? $._nativeTag
                  : null;
          }
          function t_($, re) {
            var te = F7(re);
            Kd.set(te, $);
          }
          function _7e($, re) {
            var te = F7(re);
            Kd.get(te) === $ && Kd.delete(te);
          }
          function E7e($, re) {
            var te = re && re.instance;
            if (te) {
              var le = F7(te),
                Oe = jP.get(le);
              (Oe === void 0 && ((Oe = new Set()), jP.set(le, Oe), Kd.set(le, $)), Oe.add($));
            }
          }
          function v7e($, re) {
            var te = re && re.instance;
            if (te) {
              var le = F7(te),
                Oe = jP.get(le);
              if (Oe !== void 0) {
                if ((Oe.delete($), Oe.size === 0)) (jP.delete(le), Kd.delete(le));
                else if (Kd.get(le) === $) {
                  var et = Hw(Oe),
                    ht;
                  try {
                    for (et.s(); !(ht = et.n()).done; ) {
                      var Ue = ht.value;
                      Kd.set(Ue, $);
                      break;
                    }
                  } catch (st) {
                    et.e(st);
                  } finally {
                    et.f();
                  }
                }
              }
            }
          }
          function um($, re, te, le, Oe, et) {
            var ht = te.reconcilerVersion || te.version,
              Ue = yp(ht),
              st = Ue.getDisplayNameForFiber,
              Et = Ue.getTypeSymbol,
              Pt = Ue.ReactPriorityLevels,
              gt = Ue.ReactTypeOfWork,
              Bt = Ue.StrictModeBits,
              zt = gt.ActivityComponent,
              ur = gt.CacheComponent,
              Or = gt.ClassComponent,
              Ir = gt.ContextConsumer,
              In = gt.DehydratedSuspenseComponent,
              io = gt.ForwardRef,
              gu = gt.Fragment,
              fn = gt.FunctionComponent,
              hi = gt.HostRoot,
              No = gt.HostHoistable,
              vo = gt.HostSingleton,
              Lc = gt.HostPortal,
              Jo = gt.HostComponent,
              Na = gt.HostText,
              Ys = gt.IncompleteClassComponent,
              Ac = gt.IncompleteFunctionComponent,
              Ql = gt.IndeterminateComponent,
              _h = gt.LegacyHiddenComponent,
              Id = gt.MemoComponent,
              el = gt.OffscreenComponent,
              Bu = gt.SimpleMemoComponent,
              Lu = gt.SuspenseComponent,
              En = gt.SuspenseListComponent,
              hn = gt.TracingMarkerComponent,
              Bn = gt.Throw,
              Qn = gt.ViewTransitionComponent,
              bu = Pt.ImmediatePriority,
              _p = Pt.UserBlockingPriority,
              Rd = Pt.NormalPriority,
              lm = Pt.LowPriority,
              kd = Pt.IdlePriority,
              S = Pt.NoPriority,
              w = te.getLaneLabelMap,
              M = te.injectProfilingHooks,
              z = te.overrideHookState,
              me = te.overrideHookStateDeletePath,
              ve = te.overrideHookStateRenamePath,
              We = te.overrideProps,
              At = te.overridePropsDeletePath,
              er = te.overridePropsRenamePath,
              Lt = te.scheduleRefresh,
              nr = te.setErrorHandler,
              hr = te.setSuspenseHandler,
              jr = te.scheduleUpdate,
              ei = te.getCurrentFiber,
              Is = typeof nr == "function" && typeof jr == "function",
              mm = typeof hr == "function" && typeof jr == "function";
            typeof Lt == "function" &&
              (te.scheduleRefresh = function () {
                try {
                  $.emit("fastRefreshScheduled");
                } finally {
                  return Lt.apply(void 0, arguments);
                }
              });
            var Wm = null,
              Ft = null;
            if (typeof M == "function") {
              var It = O5t({
                getDisplayNameForFiber: st,
                getIsProfiling: function () {
                  return Q5;
                },
                getLaneLabelMap: w,
                currentDispatcherRef: Ww(te),
                workTagMap: gt,
                reactVersion: ht,
              });
              (M(It.profilingHooks), (Wm = It.getTimelineData), (Ft = It.toggleProfilingStatus));
            }
            var Qt = new WeakMap(),
              Tt = !1;
            function qt() {
              var Re = !1,
                Me = Hw(bc.values()),
                ot;
              try {
                for (Me.s(); !(ot = Me.n()).done; ) {
                  var rt = ot.value;
                  if (rt.kind === vl) {
                    var Ct = rt.data,
                      gr = Qt.get(Ct),
                      Wr = YQ(rt, gr);
                    Wr && ((Re = !0), ni(rt.id));
                  }
                }
              } catch (gn) {
                Me.e(gn);
              } finally {
                Me.f();
              }
              Re && zP();
            }
            function Cr() {
              var Re = Hw(bc.values()),
                Me;
              try {
                for (Re.s(); !(Me = Re.n()).done; ) {
                  var ot = Me.value;
                  if (ot.kind === vl) {
                    var rt = ot.data;
                    (Qt.delete(rt), rt.alternate && Qt.delete(rt.alternate));
                  } else B7.delete(ot.data);
                  var Ct = YQ(ot, void 0);
                  Ct && ni(ot.id);
                }
              } catch (gr) {
                Re.e(gr);
              } finally {
                Re.f();
              }
              zP();
            }
            function or(Re, Me) {
              var ot = bc.get(Re);
              if (ot !== void 0) {
                var rt;
                if (ot.kind === vl) {
                  var Ct = ot.data;
                  ((rt = Qt.get(Ct)), rt === void 0 && Ct.alternate !== null && (rt = Qt.get(Ct.alternate)));
                } else {
                  var gr = ot.data;
                  rt = B7.get(gr);
                }
                if (rt !== void 0) {
                  Me === "error"
                    ? (rt.errors.clear(), (rt.errorsCount = 0))
                    : (rt.warnings.clear(), (rt.warningsCount = 0));
                  var Wr = YQ(ot, rt);
                  Wr && (zP(), ni(ot.id));
                }
              }
            }
            function zr(Re) {
              or(Re, "error");
            }
            function Vi(Re) {
              or(Re, "warn");
            }
            function ni(Re) {
              a2 !== null && a2.id === Re && (uhe = !0);
            }
            function Au(Re) {
              if (ei == null) return null;
              var Me = ei();
              if (Me === null || m7e(Me)) return null;
              var ot = Ww(te);
              if (ot === void 0) return null;
              var rt = w5t(Me),
                Ct = "";
              if (rt) {
                var gr = Uw(Re);
                (gr &&
                  (Ct +=
                    `
` + gr),
                  (Ct += d7e(gt, Me, ot)));
              } else Ct = c7e(gt, Me, ot);
              return { enableOwnerStacks: rt, componentStack: Ct };
            }
            function Tf(Re, Me) {
              if (ei != null) {
                var ot = ei();
                if (
                  ot !== null &&
                  !(Re === "error" && (H3.get(ot) === !0 || (ot.alternate !== null && H3.get(ot.alternate) === !0)))
                ) {
                  var rt = ZX.apply(void 0, EZ(Me)),
                    Ct = Qt.get(ot);
                  (Ct === void 0 &&
                    ot.alternate !== null &&
                    ((Ct = Qt.get(ot.alternate)), Ct !== void 0 && Qt.set(ot, Ct)),
                    Ct === void 0 &&
                      ((Ct = { errors: new Map(), errorsCount: 0, warnings: new Map(), warningsCount: 0 }),
                      Qt.set(ot, Ct)));
                  var gr = Re === "error" ? Ct.errors : Ct.warnings,
                    Wr = gr.get(rt) || 0;
                  (gr.set(rt, Wr + 1), Re === "error" ? Ct.errorsCount++ : Ct.warningsCount++, (Tt = !0));
                }
              }
            }
            function dm(Re, Me, ot) {
              var rt = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
              if (p) {
                var Ct = Me.kind === f0 ? Me.data.name || "null" : Me.data.tag + ":" + (st(Me.data) || "null"),
                  gr = Me.kind === wf ? "<no id>" : Me.id,
                  Wr =
                    ot === null
                      ? ""
                      : ot.kind === f0
                        ? ot.data.name || "null"
                        : ot.data.tag + ":" + (st(ot.data) || "null"),
                  gn = ot === null || ot.kind === wf ? "<no id>" : ot.id;
                (console.groupCollapsed(
                  "[renderer] %c"
                    .concat(Re, " %c")
                    .concat(Ct, " (")
                    .concat(gr, ") %c")
                    .concat(ot ? "".concat(Wr, " (").concat(gn, ")") : "", " %c")
                    .concat(rt),
                  "color: red; font-weight: bold;",
                  "color: blue;",
                  "color: purple;",
                  "color: black;",
                ),
                  console.log(
                    new Error().stack
                      .split(
                        `
`,
                      )
                      .slice(1).join(`
`),
                  ),
                  console.groupEnd());
              }
            }
            function i_(Re) {
              var Me = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
              if (p) {
                var ot = (Re.kind !== f0 ? st(Re.data) : Re.data.name) || "";
                console.log(
                  "  ".repeat(Me) + "- " + (Re.kind === wf ? 0 : Re.id) + " (" + ot + ")",
                  "parent",
                  Re.parent === null ? " " : Re.parent.kind === wf ? 0 : Re.parent.id,
                  "next",
                  Re.nextSibling === null ? " " : Re.nextSibling.id,
                );
                for (var rt = Re.firstChild; rt !== null; ) (i_(rt, Me + 1), (rt = rt.nextSibling));
              }
            }
            var K9 = new Set(),
              w7e = new Set(),
              RZ = new Set(),
              ihe = new Set(),
              kZ = !1,
              ohe = new Set();
            function L5t(Re) {
              (RZ.clear(),
                K9.clear(),
                w7e.clear(),
                ihe.clear(),
                Re.forEach(function (Me) {
                  if (Me.isEnabled)
                    switch (Me.type) {
                      case AP:
                        Me.isValid && Me.value !== "" && K9.add(new RegExp(Me.value, "i"));
                        break;
                      case kw:
                        RZ.add(Me.value);
                        break;
                      case mC:
                        Me.isValid && Me.value !== "" && w7e.add(new RegExp(Me.value, "i"));
                        break;
                      case Ow:
                        K9.add(new RegExp("\\("));
                        break;
                      case yP:
                        ihe.add(Me.value);
                        break;
                      default:
                        console.warn('Invalid component filter type "'.concat(Me.type, '"'));
                        break;
                    }
                }));
            }
            if (window.__REACT_DEVTOOLS_COMPONENT_FILTERS__ != null) {
              var Sao = U3(window.__REACT_DEVTOOLS_COMPONENT_FILTERS__);
              L5t(Sao);
            } else L5t(B0());
            function wao(Re) {
              if (Q5) throw Error("Cannot modify filter preferences while profiling");
              ($.getFiberRoots(re).forEach(function (Me) {
                var ot = us.get(Me);
                if (ot === void 0) throw new Error("Expected the root instance to already exist when applying filters");
                ((Eh = ot), G5t(ot), us.delete(Me), zP(Me), (Eh = null));
              }),
                L5t(Re),
                FZ.clear(),
                $.getFiberRoots(re).forEach(function (Me) {
                  var ot = Me.current,
                    rt = s2(ot);
                  (us.set(Me, rt),
                    bc.set(rt.id, rt),
                    o_ !== null && (X9 = !0),
                    (Eh = rt),
                    L7e(Eh.id, Me.current),
                    LZ(Me.current, !1),
                    zP(Me),
                    (Eh = null));
                }),
                zP(),
                (Tt = !1));
            }
            function xao() {
              return Array.from(Cl);
            }
            function M5t(Re, Me) {
              if (RZ.has(hh)) return !0;
              if (K9.size > 0) {
                var ot = Re.name;
                if (ot != null) {
                  var rt = Hw(K9),
                    Ct;
                  try {
                    for (rt.s(); !(Ct = rt.n()).done; ) {
                      var gr = Ct.value;
                      if (gr.test(ot)) return !0;
                    }
                  } catch (Wr) {
                    rt.e(Wr);
                  } finally {
                    rt.f();
                  }
                }
              }
              return !!((Re.env == null || ihe.has(Re.env)) && (Me === null || ihe.has(Me)));
            }
            function x7e(Re) {
              var Me = Re.tag,
                ot = Re.type,
                rt = Re.key;
              switch (Me) {
                case In:
                  return !0;
                case Lc:
                case Na:
                case _h:
                case el:
                case Bn:
                  return !0;
                case hi:
                  return !1;
                case gu:
                  return rt === null;
                default:
                  var Ct = Et(ot);
                  switch (Ct) {
                    case hZ:
                    case gZ:
                    case bZ:
                    case Hpe:
                    case Vpe:
                      return !0;
                    default:
                      break;
                  }
              }
              var gr = OZ(Re);
              if (RZ.has(gr)) return !0;
              if (K9.size > 0) {
                var Wr = st(Re);
                if (Wr != null) {
                  var gn = Hw(K9),
                    Ln;
                  try {
                    for (gn.s(); !(Ln = gn.n()).done; ) {
                      var Di = Ln.value;
                      if (Di.test(Wr)) return !0;
                    }
                  } catch (cs) {
                    gn.e(cs);
                  } finally {
                    gn.f();
                  }
                }
              }
              if (ihe.has("Client"))
                switch (Me) {
                  case Or:
                  case Ys:
                  case Ac:
                  case fn:
                  case Ql:
                  case io:
                  case Id:
                  case Bu:
                    return !0;
                }
              return !1;
            }
            function OZ(Re) {
              var Me = Re.type,
                ot = Re.tag;
              switch (ot) {
                case zt:
                  return lC;
                case Or:
                case Ys:
                  return O5;
                case Ac:
                case fn:
                case Ql:
                  return hh;
                case io:
                  return cC;
                case hi:
                  return gh;
                case Jo:
                case No:
                case vo:
                  return Q9;
                case Lc:
                case Na:
                case gu:
                  return hp;
                case Id:
                case Bu:
                  return xd;
                case Lu:
                  return g7;
                case En:
                  return Rw;
                case hn:
                  return vQ;
                case Qn:
                  return zy;
                default:
                  var rt = Et(Me);
                  switch (rt) {
                    case hZ:
                    case gZ:
                    case bZ:
                      return hp;
                    case Gpe:
                    case qpe:
                      return uC;
                    case Qpe:
                    case LQ:
                      return uC;
                    case Hpe:
                    case Vpe:
                      return hp;
                    case n7e:
                    case i7e:
                      return XA;
                    default:
                      return hp;
                  }
              }
            }
            var Eh = null;
            function F5t(Re, Me) {
              (H3.size > 0 &&
                (H3.delete(Me), Me.alternate && H3.delete(Me.alternate), H3.size === 0 && nr != null && nr(e8t)),
                J9.size > 0 &&
                  (J9.delete(Me), Me.alternate && J9.delete(Me.alternate), J9.size === 0 && hr != null && hr(M4r)),
                Me.tag === No
                  ? v7e(Re, Me.memoizedState)
                  : (Me.tag === Jo || Me.tag === Na || Me.tag === vo) && _7e(Re, Me.stateNode));
              for (var ot = Me.child; ot !== null; ot = ot.sibling) x7e(ot) && F5t(Re, ot);
            }
            function Tao(Re, Me) {
              switch (Me.tag) {
                case Or:
                  if (Re === null)
                    return { context: null, didHooksChange: !1, isFirstMount: !0, props: null, state: null };
                  var ot = {
                    context: E4r(Re, Me),
                    didHooksChange: !1,
                    isFirstMount: !1,
                    props: U5t(Re.memoizedProps, Me.memoizedProps),
                    state: U5t(Re.memoizedState, Me.memoizedState),
                  };
                  return ot;
                case Ac:
                case fn:
                case Ql:
                case io:
                case Id:
                case Bu:
                  if (Re === null)
                    return { context: null, didHooksChange: !1, isFirstMount: !0, props: null, state: null };
                  var rt = Rao(Re.memoizedState, Me.memoizedState),
                    Ct = {
                      context: E4r(Re, Me),
                      didHooksChange: rt !== null && rt.length > 0,
                      isFirstMount: !1,
                      props: U5t(Re.memoizedProps, Me.memoizedProps),
                      state: null,
                      hooks: rt,
                    };
                  return Ct;
                default:
                  return null;
              }
            }
            function E4r(Re, Me) {
              for (
                var ot = Re.dependencies && Re.dependencies.firstContext,
                  rt = Me.dependencies && Me.dependencies.firstContext;
                ot && rt;
              ) {
                if (ot.context !== rt.context) return !1;
                if (!S5t(ot.memoizedValue, rt.memoizedValue)) return !0;
                ((ot = ot.next), (rt = rt.next));
              }
              return !1;
            }
            function Dao(Re) {
              var Me = Re.queue;
              if (!Me) return !1;
              var ot = u7e.bind(Me);
              return ot("pending") ? !0 : ot("value") && ot("getSnapshot") && typeof Me.getSnapshot == "function";
            }
            function Iao(Re, Me) {
              var ot = Re.memoizedState,
                rt = Me.memoizedState;
              return Dao(Re) ? ot !== rt : !1;
            }
            function Rao(Re, Me) {
              if (Re == null || Me == null) return null;
              for (var ot = [], rt = 0; Me !== null; )
                (Iao(Re, Me) && ot.push(rt), (Me = Me.next), (Re = Re.next), rt++);
              return ot;
            }
            function U5t(Re, Me) {
              if (Re == null || Me == null) return null;
              var ot = new Set([].concat(EZ(Object.keys(Re)), EZ(Object.keys(Me)))),
                rt = [],
                Ct = Hw(ot),
                gr;
              try {
                for (Ct.s(); !(gr = Ct.n()).done; ) {
                  var Wr = gr.value;
                  Re[Wr] !== Me[Wr] && rt.push(Wr);
                }
              } catch (gn) {
                Ct.e(gn);
              } finally {
                Ct.f();
              }
              return rt;
            }
            function $5t(Re, Me) {
              switch (Me.tag) {
                case Or:
                case fn:
                case Ir:
                case Id:
                case Bu:
                case io:
                  var ot = 1;
                  return (zw(Me) & ot) === ot;
                default:
                  return (
                    Re.memoizedProps !== Me.memoizedProps || Re.memoizedState !== Me.memoizedState || Re.ref !== Me.ref
                  );
              }
            }
            var WQ = [],
              zQ = [],
              T7e = [],
              she = new Map(),
              D7e = 0,
              NZ = null;
            function Ks(Re) {
              WQ.push(Re);
            }
            function j5t() {
              return Q5 && AC != null && AC.durations.length > 0
                ? !1
                : WQ.length === 0 && zQ.length === 0 && NZ === null;
            }
            function kao(Re) {
              j5t() || (T7e !== null ? T7e.push(Re) : $.emit("operations", Re));
            }
            function YQ(Re, Me) {
              if (Me === void 0)
                return Re.logCount === 0 ? !1 : ((Re.logCount = 0), Ks(E), Ks(Re.id), Ks(0), Ks(0), !0);
              var ot = Me.errorsCount + Me.warningsCount;
              return Re.logCount === ot
                ? !1
                : ((Re.logCount = ot), Ks(E), Ks(Re.id), Ks(Me.errorsCount), Ks(Me.warningsCount), !0);
            }
            function zP(Re) {
              if (!j5t()) {
                var Me = zQ.length + (NZ === null ? 0 : 1),
                  ot = new Array(3 + D7e + (Me > 0 ? 2 + Me : 0) + WQ.length),
                  rt = 0;
                if (
                  ((ot[rt++] = re),
                  Eh === null ? (ot[rt++] = -1) : (ot[rt++] = Eh.id),
                  (ot[rt++] = D7e),
                  she.forEach(function (Wr, gn) {
                    var Ln = Wr.encodedString,
                      Di = Ln.length;
                    ot[rt++] = Di;
                    for (var cs = 0; cs < Di; cs++) ot[rt + cs] = Ln[cs];
                    rt += Di;
                  }),
                  Me > 0)
                ) {
                  ((ot[rt++] = b), (ot[rt++] = Me));
                  for (var Ct = 0; Ct < zQ.length; Ct++) ot[rt++] = zQ[Ct];
                  NZ !== null && ((ot[rt] = NZ), rt++);
                }
                for (var gr = 0; gr < WQ.length; gr++) ot[rt + gr] = WQ[gr];
                ((rt += WQ.length), kao(ot), (WQ.length = 0), (zQ.length = 0), (NZ = null), she.clear(), (D7e = 0));
              }
            }
            function I7e(Re) {
              if (Re === null) return 0;
              var Me = she.get(Re);
              if (Me !== void 0) return Me.id;
              var ot = she.size + 1,
                rt = Ws(Re);
              return (she.set(Re, { encodedString: rt, id: ot }), (D7e += rt.length + 1), ot);
            }
            function Oao(Re, Me) {
              var ot = Re.tag === hi,
                rt;
              if (ot) {
                var Ct = us.get(Re.stateNode);
                if (Ct === void 0) throw new Error("The root should have been registered at this point");
                rt = Ct;
              } else rt = s2(Re);
              bc.set(rt.id, rt);
              var gr = rt.id;
              p && dm("recordMount()", rt, Me);
              var Wr = Re.hasOwnProperty("treeBaseDuration");
              if (ot) {
                var gn = Re.hasOwnProperty("_debugOwner"),
                  Ln = 0;
                Wr && ((Ln = x), typeof M == "function" && (Ln |= k));
                var Di = te.bundleType === 0;
                (Ks(g),
                  Ks(gr),
                  Ks(gh),
                  Ks((Re.mode & Bt) !== 0 ? 1 : 0),
                  Ks(Ln),
                  Ks(!Di && Bt !== 0 ? 1 : 0),
                  Ks(gn ? 1 : 0),
                  Q5 && MZ !== null && MZ.set(gr, n8t(Re)));
              } else {
                var cs = Re.key,
                  Mu = st(Re),
                  Gl = OZ(Re),
                  qa = R7e(Re),
                  Sl = J5t(Me, qa);
                Sl !== null &&
                  qa === Re._debugOwner &&
                  Re._debugStack != null &&
                  Sl.source === null &&
                  (Sl.source = Re._debugStack);
                var _u = Sl === null ? 0 : Sl.id,
                  L1 = Me ? (Me.kind === wf ? Me.parent.id : Me.id) : 0,
                  V3 = I7e(Mu),
                  M0 = cs === null ? null : String(cs),
                  G5 = I7e(M0);
                if ((Ks(g), Ks(gr), Ks(Gl), Ks(L1), Ks(_u), Ks(V3), Ks(G5), (Re.mode & Bt) !== 0)) {
                  for (var vp = null, u2 = Me; u2 !== null; ) {
                    if (u2.kind === vl) {
                      vp = u2.data;
                      break;
                    }
                    u2 = u2.parent;
                  }
                  (vp === null || (vp.mode & Bt) === 0) && (Ks(C), Ks(gr), Ks(G9));
                }
              }
              var zm = Qt.get(Re);
              return (
                zm === void 0 && Re.alternate !== null && (zm = Qt.get(Re.alternate)),
                YQ(rt, zm),
                Wr && T4r(rt, null),
                rt
              );
            }
            function v4r(Re, Me, ot) {
              var rt = Re.id;
              bc.set(rt, Re);
              var Ct = Re.data,
                gr = typeof Ct.key == "string" ? Ct.key : null,
                Wr = Ct.env,
                gn = Ct.name || "";
              typeof Wr == "string" && (ot !== null && (gn = ot + "(" + gn + ")"), (gn = Wr + "(" + gn + ")"));
              var Ln = ZA,
                Di = R7e(Ct),
                cs = J5t(Me, Di);
              cs !== null &&
                Di === Ct.owner &&
                Ct.debugStack != null &&
                cs.source === null &&
                (cs.source = Ct.debugStack);
              var Mu = cs === null ? 0 : cs.id,
                Gl = Me ? (Me.kind === wf ? Me.parent.id : Me.id) : 0,
                qa = I7e(gn),
                Sl = gr === null ? null : String(gr),
                _u = I7e(Sl);
              (Ks(g), Ks(rt), Ks(Ln), Ks(Gl), Ks(Mu), Ks(qa), Ks(_u));
              var L1 = B7.get(Ct);
              YQ(Re, L1);
            }
            function Nao(Re) {
              var Me = Re.data;
              (p && dm("recordUnmount()", Re, yu), YP === Re && t8t(null));
              var ot = Re.id,
                rt = Me.tag === hi;
              (rt ? (NZ = ot) : zQ.push(ot), bc.delete(Re.id), F5t(Re, Me));
            }
            var fm = null,
              Ep = null,
              yu = null;
            function ahe(Re) {
              var Me = yu;
              Me !== null &&
                ((Re.parent = Me),
                Ep === null ? ((Ep = Re), (Me.firstChild = Re)) : ((Ep.nextSibling = Re), (Ep = Re)),
                (Re.nextSibling = null));
            }
            function C4r(Re, Me) {
              (S4r(Re, Me), ahe(Re));
            }
            function S4r(Re, Me) {
              if (Re.parent === null) {
                if (fm === Re) throw new Error("Remaining children should not have items with no parent");
                if (Re.nextSibling !== null) throw new Error("A deleted instance should not have next siblings");
                return;
              }
              var ot = yu;
              if (ot === null) throw new Error("Should not have a parent if we are at the root");
              if (Re.parent !== ot)
                throw new Error("Cannot remove a node from a different parent than is being reconciled.");
              if (Me === null) {
                if (fm !== Re) throw new Error("Expected a placed child to be moved from the remaining set.");
                fm = Re.nextSibling;
              } else Me.nextSibling = Re.nextSibling;
              ((Re.nextSibling = null), (Re.parent = null));
            }
            function Q5t() {
              for (var Re = fm; Re !== null; ) (G5t(Re), (Re = fm));
            }
            function PZ(Re, Me, ot, rt, Ct) {
              var gr = duo(Re, yu),
                Wr = yu,
                gn = Ep,
                Ln = fm;
              ((yu = Re), (Ep = null), (fm = null));
              try {
                (x4r(Me, ot, rt, Ct + 1), D4r(Re));
              } finally {
                ((yu = Wr), (Ep = gn), (fm = Ln), F4r(gr));
              }
            }
            function Pao(Re) {
              YP === Re && t8t(null);
              var Me = Re.id;
              zQ.push(Me);
            }
            function w4r(Re, Me) {
              if (Re != null)
                for (var ot = Re[Me], rt = Me + 1; rt < Re.length; rt++) {
                  var Ct = Re[rt];
                  if (typeof Ct.env == "string") return ot.env !== Ct.env ? Ct.env : null;
                }
              return null;
            }
            function x4r(Re, Me, ot, rt) {
              for (var Ct = Re, gr = null, Wr = Re; Ct !== null && Ct !== Me; ) {
                var gn = 0;
                if (Ct._debugInfo)
                  for (var Ln = 0; Ln < Ct._debugInfo.length; Ln++) {
                    var Di = Ct._debugInfo[Ln];
                    if (typeof Di.name == "string") {
                      var cs = Di,
                        Mu = w4r(Ct._debugInfo, Ln);
                      if ((cs.env != null && Cl.add(cs.env), Mu !== null && Cl.add(Mu), !M5t(cs, Mu)))
                        if (gn === rt) {
                          ((gr === null || gr.data !== Di) &&
                            (gr !== null && PZ(gr, Wr, Ct, ot, rt), (gr = xf(cs)), v4r(gr, yu, Mu), ahe(gr), (Wr = Ct)),
                            gn++);
                          break;
                        } else gn++;
                    }
                  }
                (gn === rt && (gr !== null && (PZ(gr, Wr, Ct, ot, rt), (gr = null)), LZ(Ct, ot)), (Ct = Ct.sibling));
              }
              gr !== null && PZ(gr, Wr, null, ot, rt);
            }
            function BZ(Re, Me) {
              x4r(Re, null, Me, 0);
            }
            function LZ(Re, Me) {
              var ot = !x7e(Re),
                rt = null;
              ot
                ? ((rt = Oao(Re, yu)), ahe(rt), p && dm("mountFiberRecursively()", rt, yu))
                : yu !== null &&
                  yu.kind === f0 &&
                  (yu.data === Re._debugOwner &&
                    Re._debugStack != null &&
                    yu.source === null &&
                    (yu.source = Re._debugStack),
                  (rt = e_(Re)),
                  ahe(rt),
                  p && dm("mountFiberRecursively()", rt, yu));
              var Ct = r8t(Re, rt),
                gr = yu,
                Wr = Ep,
                gn = fm;
              rt !== null && ((yu = rt), (Ep = null), (fm = null));
              try {
                if (kZ && Me) {
                  var Ln = OZ(Re);
                  Ln === Q9 && (ohe.add(Re.stateNode), (Me = !1));
                }
                if (Re.tag === No) {
                  var Di = yu;
                  if (Di === null) throw new Error("Did not expect a host hoistable to be the root");
                  E7e(Di, Re.memoizedState);
                } else if (Re.tag === Jo || Re.tag === Na || Re.tag === vo) {
                  var cs = yu;
                  if (cs === null) throw new Error("Did not expect a host hoistable to be the root");
                  t_(cs, Re.stateNode);
                }
                if (Re.tag === Lu) {
                  var Mu = Re.memoizedState !== null;
                  if (Mu) {
                    var Gl = Re.child,
                      qa = Gl ? Gl.sibling : null;
                    if (qa) {
                      var Sl = qa.child;
                      Sl !== null && (r8t(qa, null), BZ(Sl, Me));
                    }
                  } else {
                    var _u = null,
                      L1 = el === -1;
                    (L1 ? (_u = Re.child) : Re.child !== null && ((_u = Re.child.child), r8t(Re.child, null)),
                      _u !== null && BZ(_u, Me));
                  }
                } else Re.child !== null && BZ(Re.child, Me);
              } finally {
                rt !== null && ((yu = gr), (Ep = Wr), (fm = gn));
              }
              F4r(Ct);
            }
            function G5t(Re) {
              p && dm("unmountInstanceRecursively()", Re, yu);
              var Me = yu,
                ot = Ep,
                rt = fm;
              ((yu = Re), (Ep = null), (fm = Re.firstChild), (Re.firstChild = null));
              try {
                Q5t();
              } finally {
                ((yu = Me), (Ep = ot), (fm = rt));
              }
              (Re.kind === vl ? Nao(Re) : Re.kind === f0 ? Pao(Re) : F5t(Re, Re.data), S4r(Re, null));
            }
            function T4r(Re, Me) {
              var ot = Re.id,
                rt = Re.data,
                Ct = rt.actualDuration,
                gr = rt.treeBaseDuration;
              if (((Re.treeBaseDuration = gr || 0), Q5)) {
                if (Me == null || gr !== Me.treeBaseDuration) {
                  var Wr = Math.floor((gr || 0) * 1e3);
                  (Ks(y), Ks(ot), Ks(Wr));
                }
                if ((Me == null || $5t(Me, rt)) && Ct != null) {
                  for (var gn = Ct, Ln = rt.child; Ln !== null; ) ((gn -= Ln.actualDuration || 0), (Ln = Ln.sibling));
                  var Di = AC;
                  if (
                    (Di.durations.push(ot, Ct, gn), (Di.maxActualDuration = Math.max(Di.maxActualDuration, Ct)), mhe)
                  ) {
                    var cs = Tao(Me, rt);
                    cs !== null && Di.changeDescriptions !== null && Di.changeDescriptions.set(ot, cs);
                  }
                }
                var Mu = Eh.data.stateNode,
                  Gl = Mu.memoizedUpdaters;
                if (Gl != null && (Gl.has(rt) || (rt.alternate !== null && Gl.has(rt.alternate)))) {
                  var qa = AC;
                  (qa.updaters === null && (qa.updaters = []), qa.updaters.push(Y5t(Re)));
                }
              }
            }
            function D4r(Re) {
              for (var Me = Re.id, ot = 0, rt = Re.firstChild; rt !== null; rt = rt.nextSibling)
                ot += rt.treeBaseDuration;
              if (Q5) {
                var Ct = Re.treeBaseDuration;
                if (ot !== Ct) {
                  var gr = Math.floor((ot || 0) * 1e3);
                  (Ks(y), Ks(Me), Ks(gr));
                }
              }
              Re.treeBaseDuration = ot;
            }
            function I4r(Re) {
              p && Re.firstChild !== null && dm("recordResetChildren()", Re.firstChild, Re);
              for (var Me = [], ot = Re.firstChild; ot !== null; ) {
                if (ot.kind === wf) for (var rt = Re.firstChild; rt !== null; rt = rt.nextSibling) Me.push(rt.id);
                else Me.push(ot.id);
                ot = ot.nextSibling;
              }
              var Ct = Me.length;
              if (!(Ct < 2)) {
                (Ks(A), Ks(Re.id), Ks(Ct));
                for (var gr = 0; gr < Me.length; gr++) Ks(Me[gr]);
              }
            }
            function q5t(Re, Me, ot, rt, Ct, gr) {
              var Wr = yu,
                gn = Ep,
                Ln = fm;
              ((yu = Re), (Ep = null), (fm = Re.firstChild), (Re.firstChild = null));
              try {
                R4r(Me, ot, rt, Ct, gr + 1) && I4r(Re);
                var Di = B7.get(Re.data);
                (YQ(Re, Di), D4r(Re));
              } finally {
                (Q5t(), (yu = Wr), (Ep = gn), (fm = Ln));
              }
            }
            function R4r(Re, Me, ot, rt, Ct) {
              for (var gr = !1, Wr = Re, gn = ot, Ln = null, Di = !1, cs = Re, Mu = ot; Wr !== null && Wr !== Me; ) {
                var Gl = 0;
                if (Wr._debugInfo)
                  for (var qa = 0; qa < Wr._debugInfo.length; qa++) {
                    var Sl = Wr._debugInfo[qa];
                    if (typeof Sl.name == "string") {
                      var _u = Sl,
                        L1 = w4r(Wr._debugInfo, qa);
                      if ((_u.env != null && Cl.add(_u.env), L1 !== null && Cl.add(L1), !M5t(_u, L1)))
                        if (Gl === Ct) {
                          if (Ln === null || Ln.data !== _u) {
                            Ln !== null && (Di ? PZ(Ln, cs, Wr, rt, Ct) : q5t(Ln, cs, Wr, Mu, rt, Ct));
                            var V3 = null,
                              M0 = fm;
                            if (_u.key != null)
                              for (M0 = fm; M0 !== null && !(M0.kind === f0 && M0.data.key === _u.key); )
                                ((V3 = M0), (M0 = M0.nextSibling));
                            if (
                              M0 !== null &&
                              M0.kind === f0 &&
                              M0.data.name === _u.name &&
                              M0.data.env === _u.env &&
                              M0.data.key === _u.key
                            )
                              ((M0.data = _u), C4r(M0, V3), (Ln = M0), (Di = !1));
                            else {
                              var G5 = xf(_u);
                              (v4r(G5, yu, L1), ahe(G5), (Ln = G5), (Di = !0), (gr = !0));
                            }
                            ((cs = Wr), (Mu = gn));
                          }
                          Gl++;
                          break;
                        } else Gl++;
                    }
                  }
                if (Gl === Ct) {
                  Ln !== null && (Di ? PZ(Ln, cs, Wr, rt, Ct) : q5t(Ln, cs, Wr, Mu, rt, Ct), (Ln = null));
                  var vp = void 0;
                  gn === Wr ? (vp = Wr) : (vp = Wr.alternate);
                  var u2 = null,
                    zm = null;
                  if (vp !== null) for (zm = fm; zm !== null && zm.data !== vp; ) ((u2 = zm), (zm = zm.nextSibling));
                  if (zm !== null) {
                    var Yw = zm;
                    (vp !== gn && (gr = !0), C4r(Yw, u2), V5t(Yw, Wr, vp, rt) && (gr = !0));
                  } else vp !== null && x7e(Wr) ? V5t(null, Wr, vp, rt) && (gr = !0) : (LZ(Wr, rt), (gr = !0));
                }
                ((Wr = Wr.sibling), !gr && gn !== null && (gn = gn.sibling));
              }
              return (
                Ln !== null && (Di ? PZ(Ln, cs, null, rt, Ct) : q5t(Ln, cs, null, Mu, rt, Ct)),
                gn !== null && (gr = !0),
                gr
              );
            }
            function H5t(Re, Me, ot) {
              return Re === null ? Me !== null : R4r(Re, null, Me, ot, 0);
            }
            function V5t(Re, Me, ot, rt) {
              if ((p && Re !== null && dm("updateFiberRecursively()", Re, yu), kZ)) {
                var Ct = OZ(Me);
                rt
                  ? Ct === Q9 && (ohe.add(Me.stateNode), (rt = !1))
                  : (Ct === hh || Ct === O5 || Ct === uC || Ct === xd || Ct === cC) && (rt = $5t(ot, Me));
              }
              var gr = yu,
                Wr = Ep,
                gn = fm;
              Re !== null &&
                ((Re.data = Me),
                a2 !== null && a2.id === Re.id && $5t(ot, Me) && (uhe = !0),
                (yu = Re),
                (Ep = null),
                (fm = Re.firstChild),
                (Re.firstChild = null));
              try {
                if (Me.tag === No && ot.memoizedState !== Me.memoizedState) {
                  var Ln = yu;
                  if (Ln === null) throw new Error("Did not expect a host hoistable to be the root");
                  (v7e(Ln, ot.memoizedState), E7e(Ln, Me.memoizedState));
                } else if ((Me.tag === Jo || Me.tag === Na || Me.tag === vo) && ot.stateNode !== Me.stateNode) {
                  var Di = yu;
                  if (Di === null) throw new Error("Did not expect a host hoistable to be the root");
                  (_7e(Di, ot.stateNode), t_(Di, Me.stateNode));
                }
                var cs = Me.tag === Lu,
                  Mu = !1,
                  Gl = cs && ot.memoizedState !== null,
                  qa = cs && Me.memoizedState !== null;
                if (Gl && qa) {
                  var Sl = Me.child,
                    _u = Sl ? Sl.sibling : null,
                    L1 = ot.child,
                    V3 = L1 ? L1.sibling : null;
                  (V3 == null && _u != null && (BZ(_u, rt), (Mu = !0)),
                    _u != null && V3 != null && H5t(_u, V3, rt) && (Mu = !0));
                } else if (Gl && !qa) {
                  var M0 = Me.child;
                  (M0 !== null && BZ(M0, rt), (Mu = !0));
                } else if (!Gl && qa) {
                  var G5 = Me.child,
                    vp = G5 ? G5.sibling : null;
                  vp != null && (BZ(vp, rt), (Mu = !0));
                } else if (Me.child !== ot.child) H5t(Me.child, ot.child, rt) && (Mu = !0);
                else if (Re !== null) {
                  if (((Re.firstChild = fm), (fm = null), kZ && rt)) {
                    var u2 = O4r(Re);
                    u2.forEach(function (UZ) {
                      ohe.add(UZ);
                    });
                  }
                } else if (H5t(Me.child, ot.child, !1))
                  throw new Error("The children should not have changed if we pass in the same set.");
                if (Re !== null) {
                  var zm = Qt.get(Re.data);
                  (zm === void 0 && Re.data.alternate && (zm = Qt.get(Re.data.alternate)), YQ(Re, zm));
                  var Yw = Me.hasOwnProperty("treeBaseDuration");
                  Yw && T4r(Re, ot);
                }
                return Mu ? (Re !== null ? (I4r(Re), !1) : !0) : !1;
              } finally {
                Re !== null && (Q5t(), (yu = gr), (Ep = Wr), (fm = gn));
              }
            }
            function Bao() {
              Q5 = !1;
            }
            function W5t(Re) {
              return Re.memoizedInteractions != null
                ? !0
                : !!(Re.current != null && Re.current.hasOwnProperty("treeBaseDuration"));
            }
            function Lao() {
              var Re = T7e;
              ((T7e = null),
                Re !== null && Re.length > 0
                  ? Re.forEach(function (Me) {
                      $.emit("operations", Me);
                    })
                  : (o_ !== null && (X9 = !0),
                    $.getFiberRoots(re).forEach(function (Me) {
                      var ot = Me.current,
                        rt = s2(ot);
                      (us.set(Me, rt),
                        bc.set(rt.id, rt),
                        (Eh = rt),
                        L7e(Eh.id, Me.current),
                        Q5 &&
                          W5t(Me) &&
                          (AC = {
                            changeDescriptions: mhe ? new Map() : null,
                            durations: [],
                            commitTime: $P() - X5t,
                            maxActualDuration: 0,
                            priorityLevel: null,
                            updaters: null,
                            effectDuration: null,
                            passiveEffectDuration: null,
                          }),
                        LZ(Me.current, !1),
                        zP(Me),
                        (Tt = !1),
                        (Eh = null));
                    })));
            }
            function Mao(Re) {}
            function Fao(Re) {
              if (Q5 && W5t(Re) && AC !== null) {
                var Me = bp(Re),
                  ot = Me.effectDuration,
                  rt = Me.passiveEffectDuration;
                ((AC.effectDuration = ot), (AC.passiveEffectDuration = rt));
              }
              Tt && qt();
            }
            function Uao(Re, Me) {
              var ot = Re.current,
                rt = null,
                Ct = us.get(Re);
              (Ct ? (rt = Ct.data) : ((Ct = s2(ot)), us.set(Re, Ct), bc.set(Ct.id, Ct)),
                (Eh = Ct),
                o_ !== null && (X9 = !0),
                kZ && ohe.clear());
              var gr = W5t(Re);
              if (
                (Q5 &&
                  gr &&
                  (AC = {
                    changeDescriptions: mhe ? new Map() : null,
                    durations: [],
                    commitTime: $P() - X5t,
                    maxActualDuration: 0,
                    priorityLevel: Me == null ? null : guo(Me),
                    updaters: null,
                    effectDuration: null,
                    passiveEffectDuration: null,
                  }),
                rt !== null)
              ) {
                var Wr =
                    rt.memoizedState != null &&
                    rt.memoizedState.element != null &&
                    rt.memoizedState.isDehydrated !== !0,
                  gn =
                    ot.memoizedState != null &&
                    ot.memoizedState.element != null &&
                    ot.memoizedState.isDehydrated !== !0;
                !Wr && gn
                  ? (L7e(Eh.id, ot), LZ(ot, !1))
                  : Wr && gn
                    ? V5t(Ct, ot, rt, !1)
                    : Wr && !gn && (G5t(Ct), fuo(Eh.id), us.delete(Re));
              } else (L7e(Eh.id, ot), LZ(ot, !1));
              if (Q5 && gr && !j5t()) {
                var Ln = dhe.get(Eh.id);
                Ln != null ? Ln.push(AC) : dhe.set(Eh.id, [AC]);
              }
              (zP(Re), (Tt = !1), kZ && $.emit("traceUpdates", ohe), (Eh = null));
            }
            function $ao(Re) {
              if (Re.tag === No) {
                var Me = Re.memoizedState;
                if (Ap(Me) === "object" && Me !== null && Me.instance != null) return Me.instance;
              }
              return null;
            }
            function k4r(Re, Me) {
              if (Re.kind !== f0) {
                var ot = Re.data;
                jao(ot, Me);
                return;
              }
              for (var rt = Re.firstChild; rt !== null; rt = rt.nextSibling) k4r(rt, Me);
            }
            function jao(Re, Me) {
              for (var ot = Re; ; ) {
                if (ot.tag === Jo || ot.tag === Na || ot.tag === vo || ot.tag === No) {
                  var rt = ot.stateNode || $ao(ot);
                  rt && Me.push(rt);
                } else if (ot.child) {
                  ((ot.child.return = ot), (ot = ot.child));
                  continue;
                }
                if (ot === Re) return;
                for (; !ot.sibling; ) {
                  if (!ot.return || ot.return === Re) return;
                  ot = ot.return;
                }
                ((ot.sibling.return = ot.return), (ot = ot.sibling));
              }
            }
            function O4r(Re) {
              var Me = [];
              return (k4r(Re, Me), Me);
            }
            function N4r(Re) {
              try {
                var Me = bc.get(Re);
                return Me === void 0
                  ? (console.warn('Could not find DevToolsInstance with id "'.concat(Re, '"')), null)
                  : O4r(Me);
              } catch {
                return null;
              }
            }
            function z5t(Re) {
              var Me = bc.get(Re);
              return Me === void 0 ? null : Me.kind === vl ? st(Me.data) : Me.data.name || "";
            }
            function Qao(Re) {
              for (var Me = Re; Me && !Kd.has(Me); ) Me = Me.parentNode;
              return Me;
            }
            function Gao(Re) {
              var Me = Kd.get(Re);
              return Me !== void 0 ? (Me.kind === wf ? Me.parent.id : Me.id) : null;
            }
            function qao(Re, Me) {
              if (che(Re)) return cb(a2, Me);
            }
            function Hao(Re) {
              var Me = bc.get(Re);
              if (Me === void 0)
                return (console.warn('Could not find DevToolsInstance with id "'.concat(Re, '"')), null);
              if (Me.kind !== vl) return null;
              var ot = Me.data,
                rt = ot.elementType,
                Ct = ot.tag,
                gr = ot.type;
              switch (Ct) {
                case Or:
                case Ys:
                case Ac:
                case Ql:
                case fn:
                  return gr;
                case io:
                  return gr.render;
                case Id:
                case Bu:
                  return rt != null && rt.type != null ? rt.type : gr;
                default:
                  return null;
              }
            }
            function Y5t(Re) {
              if (Re.kind === vl) {
                var Me = Re.data;
                return { displayName: st(Me) || "Anonymous", id: Re.id, key: Me.key, type: OZ(Me) };
              } else {
                var ot = Re.data;
                return {
                  displayName: ot.name || "Anonymous",
                  id: Re.id,
                  key: ot.key == null ? null : ot.key,
                  type: ZA,
                };
              }
            }
            function Vao(Re) {
              var Me = bc.get(Re);
              if (Me === void 0)
                return (console.warn('Could not find DevToolsInstance with id "'.concat(Re, '"')), null);
              var ot = Y5t(Me),
                rt = K5t(Me);
              return rt === null ? [ot] : (rt.unshift(ot), rt.reverse(), rt);
            }
            function K5t(Re) {
              var Me = R7e(Re.data);
              if (Me === null) return null;
              for (var ot = [], rt = Re.parent; rt !== null && Me !== null; ) {
                var Ct = J5t(rt, Me);
                if (Ct !== null) (ot.push(Y5t(Ct)), (Me = R7e(Me)), (rt = Ct.parent));
                else break;
              }
              return ot;
            }
            function R7e(Re) {
              if (Re == null) return null;
              if (typeof Re.tag == "number") {
                var Me = Re;
                Re = Me._debugOwner;
              } else {
                var ot = Re;
                Re = ot.owner;
              }
              for (; Re; )
                if (typeof Re.tag == "number") {
                  var rt = Re;
                  if (!x7e(rt)) return rt;
                  Re = rt._debugOwner;
                } else {
                  var Ct = Re;
                  if (!M5t(Ct, null)) return Ct;
                  Re = Ct.owner;
                }
              return null;
            }
            function J5t(Re, Me) {
              if (Me == null) return null;
              for (; Re !== null; ) {
                if (Re.data === Me || Re.data === Me.alternate) return Re.kind === wf ? null : Re;
                Re = Re.parent;
              }
              return null;
            }
            function Wao(Re) {
              var Me = null,
                ot = null,
                rt = bc.get(Re);
              if (rt === void 0)
                return (
                  console.warn('Could not find DevToolsInstance with id "'.concat(Re, '"')),
                  { instance: Me, style: ot }
                );
              if (rt.kind !== vl) return { instance: Me, style: ot };
              var Ct = rt.data;
              return (
                Ct !== null && ((Me = Ct.stateNode), Ct.memoizedProps !== null && (ot = Ct.memoizedProps.style)),
                { instance: Me, style: ot }
              );
            }
            function k7e(Re) {
              var Me = Re.tag,
                ot = Re.type;
              switch (Me) {
                case Or:
                case Ys:
                  var rt = Re.stateNode;
                  return (
                    typeof ot.getDerivedStateFromError == "function" ||
                    (rt !== null && typeof rt.componentDidCatch == "function")
                  );
                default:
                  return !1;
              }
            }
            function P4r(Re) {
              var Me = bc.get(Re);
              if (Me === void 0)
                return (console.warn('Could not find DevToolsInstance with id "'.concat(Re, '"')), null);
              if (Me.kind === f0) return Yao(Me);
              if (Me.kind === vl) return zao(Me);
              throw new Error("Unsupported instance kind");
            }
            function zao(Re) {
              var Me = Re.data;
              if (Me == null) return null;
              var ot = Me.stateNode,
                rt = Me.key,
                Ct = Me.memoizedProps,
                gr = Me.memoizedState,
                Wr = Me.dependencies,
                gn = Me.tag,
                Ln = Me.type,
                Di = OZ(Me),
                cs = (gn === fn || gn === Bu || gn === io) && (!!gr || !!Wr),
                Mu = !cs && gn !== ur,
                Gl = Et(Ln),
                qa = !1,
                Sl = null;
              if (
                gn === Or ||
                gn === fn ||
                gn === Ys ||
                gn === Ac ||
                gn === Ql ||
                gn === Id ||
                gn === io ||
                gn === Bu
              ) {
                if (((qa = !0), ot && ot.context != null)) {
                  var _u = Di === O5 && !(Ln.contextTypes || Ln.contextType);
                  _u || (Sl = ot.context);
                }
              } else if ((Gl === Qpe || Gl === LQ) && !(Ln._context === void 0 && Ln.Provider === Ln)) {
                var L1 = Ln._context || Ln;
                Sl = L1._currentValue || null;
                for (var V3 = Me.return; V3 !== null; ) {
                  var M0 = V3.type,
                    G5 = Et(M0);
                  if (G5 === Gpe || G5 === qpe) {
                    var vp = M0._context || M0.context;
                    if (vp === L1) {
                      Sl = V3.memoizedProps.value;
                      break;
                    }
                  }
                  V3 = V3.return;
                }
              } else if (Gl === o7e) {
                var u2 = Ln._context;
                Sl = u2._currentValue || null;
                for (var zm = Me.return; zm !== null; ) {
                  var Yw = zm.type,
                    UZ = Et(Yw);
                  if (UZ === LQ) {
                    var JQ = Yw;
                    if (JQ === u2) {
                      Sl = zm.memoizedProps.value;
                      break;
                    }
                  }
                  zm = zm.return;
                }
              }
              var fhe = !1;
              Sl !== null && ((fhe = !!Ln.contextTypes), (Sl = { value: Sl }));
              var Euo = K5t(Re),
                Q4r = null;
              if (cs) {
                var i8t = {};
                for (var o8t in console)
                  try {
                    ((i8t[o8t] = console[o8t]), (console[o8t] = function () {}));
                  } catch {}
                try {
                  Q4r = (0, g5t.inspectHooksOfFiber)(Me, Ww(te));
                } finally {
                  for (var G4r in i8t)
                    try {
                      console[G4r] = i8t[G4r];
                    } catch {}
                }
              }
              for (var q4r = null, phe = Me, H4r = !1, V4r = !1; phe.return !== null; ) {
                var W4r = phe;
                ((phe = phe.return), W4r.tag === Lu ? (V4r = !0) : k7e(W4r) && (H4r = !0));
              }
              var s8t = phe.stateNode;
              s8t != null && s8t._debugRootType !== null && (q4r = s8t._debugRootType);
              var vuo = gn === Lu && gr !== null,
                z4r = !1;
              if (k7e(Me)) {
                var Cuo = 128;
                z4r =
                  (Me.flags & Cuo) !== 0 || H3.get(Me) === !0 || (Me.alternate !== null && H3.get(Me.alternate) === !0);
              }
              var Y4r = { stylex: null };
              v5t && Ct != null && Ct.hasOwnProperty("xstyle") && (Y4r.stylex = x5t(Ct.xstyle));
              var K4r = null;
              qa && (K4r = yuo(Re));
              var $Z = Qt.get(Me);
              $Z === void 0 && Me.alternate !== null && ($Z = Qt.get(Me.alternate));
              var J4r = null;
              return (
                Di === Q9 && (J4r = U7(Me.stateNode)),
                {
                  id: Re.id,
                  canEditHooks: typeof z == "function",
                  canEditFunctionProps: typeof We == "function",
                  canEditHooksAndDeletePaths: typeof me == "function",
                  canEditHooksAndRenamePaths: typeof ve == "function",
                  canEditFunctionPropsDeletePaths: typeof At == "function",
                  canEditFunctionPropsRenamePaths: typeof er == "function",
                  canToggleError: Is && H4r,
                  isErrored: z4r,
                  canToggleSuspense:
                    mm && V4r && (!vuo || J9.has(Me) || (Me.alternate !== null && J9.has(Me.alternate))),
                  canViewSource: qa,
                  source: K4r,
                  hasLegacyContext: fhe,
                  key: rt ?? null,
                  type: Di,
                  context: Sl,
                  hooks: Q4r,
                  props: Ct,
                  state: Mu ? gr : null,
                  errors: $Z === void 0 ? [] : Array.from($Z.errors.entries()),
                  warnings: $Z === void 0 ? [] : Array.from($Z.warnings.entries()),
                  owners: Euo,
                  rootType: q4r,
                  rendererPackageName: te.rendererPackageName,
                  rendererVersion: te.version,
                  plugins: Y4r,
                  nativeTag: J4r,
                }
              );
            }
            function Yao(Re) {
              var Me = !0,
                ot = j4r(Re),
                rt = Re.data,
                Ct = typeof rt.key == "string" ? rt.key : null,
                gr = rt.props == null ? null : rt.props,
                Wr = K5t(Re),
                gn = null,
                Ln = !1,
                Di = !1,
                cs = Z5t(Re);
              if (cs !== null) {
                for (var Mu = cs; Mu.return !== null; ) {
                  var Gl = Mu;
                  ((Mu = Mu.return), Gl.tag === Lu ? (Di = !0) : k7e(Gl) && (Ln = !0));
                }
                var qa = Mu.stateNode;
                qa != null && qa._debugRootType !== null && (gn = qa._debugRootType);
              }
              var Sl = { stylex: null },
                _u = B7.get(rt);
              return {
                id: Re.id,
                canEditHooks: !1,
                canEditFunctionProps: !1,
                canEditHooksAndDeletePaths: !1,
                canEditHooksAndRenamePaths: !1,
                canEditFunctionPropsDeletePaths: !1,
                canEditFunctionPropsRenamePaths: !1,
                canToggleError: Is && Ln,
                isErrored: !1,
                canToggleSuspense: mm && Di,
                canViewSource: Me,
                source: ot,
                hasLegacyContext: !1,
                key: Ct,
                type: ZA,
                context: null,
                hooks: null,
                props: gr,
                state: null,
                errors: _u === void 0 ? [] : Array.from(_u.errors.entries()),
                warnings: _u === void 0 ? [] : Array.from(_u.warnings.entries()),
                owners: Wr,
                rootType: gn,
                rendererPackageName: te.rendererPackageName,
                rendererVersion: te.version,
                plugins: Sl,
                nativeTag: null,
              };
            }
            var a2 = null,
              uhe = !1,
              O7e = {};
            function che(Re) {
              return a2 !== null && a2.id === Re;
            }
            function Kao(Re) {
              return che(Re) && !uhe;
            }
            function Jao(Re) {
              var Me = O7e;
              Re.forEach(function (ot) {
                (Me[ot] || (Me[ot] = {}), (Me = Me[ot]));
              });
            }
            function lhe(Re, Me) {
              return function (rt) {
                switch (Me) {
                  case "hooks":
                    if (
                      rt.length === 1 ||
                      (rt[rt.length - 2] === "hookSource" && rt[rt.length - 1] === "fileName") ||
                      rt[rt.length - 1] === "subHooks" ||
                      rt[rt.length - 2] === "subHooks"
                    )
                      return !0;
                    break;
                  default:
                    break;
                }
                var Ct = Re === null ? O7e : O7e[Re];
                if (!Ct) return !1;
                for (var gr = 0; gr < rt.length; gr++) if (((Ct = Ct[rt[gr]]), !Ct)) return !1;
                return !0;
              };
            }
            function Xao(Re) {
              var Me = Re.hooks,
                ot = Re.id,
                rt = Re.props,
                Ct = bc.get(ot);
              if (Ct === void 0) {
                console.warn('Could not find DevToolsInstance with id "'.concat(ot, '"'));
                return;
              }
              if (Ct.kind === vl) {
                var gr = Ct.data,
                  Wr = gr.elementType,
                  gn = gr.stateNode,
                  Ln = gr.tag,
                  Di = gr.type;
                switch (Ln) {
                  case Or:
                  case Ys:
                  case Ql:
                    le.$r = gn;
                    break;
                  case Ac:
                  case fn:
                    le.$r = { hooks: Me, props: rt, type: Di };
                    break;
                  case io:
                    le.$r = { hooks: Me, props: rt, type: Di.render };
                    break;
                  case Id:
                  case Bu:
                    le.$r = { hooks: Me, props: rt, type: Wr != null && Wr.type != null ? Wr.type : Di };
                    break;
                  default:
                    le.$r = null;
                    break;
                }
              }
            }
            function Zao(Re, Me, ot) {
              if (che(Re)) {
                var rt = cb(a2, Me),
                  Ct = "$reactTemp".concat(ot);
                ((window[Ct] = rt), console.log(Ct), console.log(rt));
              }
            }
            function euo(Re, Me) {
              if (che(Re)) {
                var ot = cb(a2, Me);
                return V9(ot);
              }
            }
            function tuo(Re, Me, ot, rt) {
              if ((ot !== null && Jao(ot), che(Me) && !rt)) {
                if (!uhe)
                  if (ot !== null) {
                    var Ct = null;
                    return (
                      ot[0] === "hooks" && (Ct = "hooks"),
                      {
                        id: Me,
                        responseID: Re,
                        type: "hydrated-path",
                        path: ot,
                        value: am(cb(a2, ot), lhe(null, Ct), ot),
                      }
                    );
                  } else return { id: Me, responseID: Re, type: "no-change" };
              } else O7e = {};
              uhe = !1;
              try {
                a2 = P4r(Me);
              } catch (Di) {
                if (Di.name === "ReactDebugToolsRenderError") {
                  var gr = "Error rendering inspected element.",
                    Wr;
                  if (
                    (console.error(
                      gr +
                        `

`,
                      Di,
                    ),
                    Di.cause != null)
                  ) {
                    var gn = z5t(Me);
                    (console.error(
                      "React DevTools encountered an error while trying to inspect hooks. This is most likely caused by an error in current inspected component" +
                        (gn != null ? ': "'.concat(gn, '".') : ".") +
                        `
The error thrown in the component is: 

`,
                      Di.cause,
                    ),
                      Di.cause instanceof Error && ((gr = Di.cause.message || gr), (Wr = Di.cause.stack)));
                  }
                  return { type: "error", errorType: "user", id: Me, responseID: Re, message: gr, stack: Wr };
                }
                return Di.name === "ReactDebugToolsUnsupportedHookError"
                  ? {
                      type: "error",
                      errorType: "unknown-hook",
                      id: Me,
                      responseID: Re,
                      message: "Unsupported hook in the react-debug-tools package: " + Di.message,
                    }
                  : (console.error(
                      `Error inspecting element.

`,
                      Di,
                    ),
                    {
                      type: "error",
                      errorType: "uncaught",
                      id: Me,
                      responseID: Re,
                      message: Di.message,
                      stack: Di.stack,
                    });
              }
              if (a2 === null) return { id: Me, responseID: Re, type: "not-found" };
              Xao(a2);
              var Ln = yh({}, a2);
              return (
                (Ln.context = am(Ln.context, lhe("context", null))),
                (Ln.hooks = am(Ln.hooks, lhe("hooks", "hooks"))),
                (Ln.props = am(Ln.props, lhe("props", null))),
                (Ln.state = am(Ln.state, lhe("state", null))),
                { id: Me, responseID: Re, type: "full-data", value: Ln }
              );
            }
            function ruo(Re) {
              var Me = Kao(Re) ? a2 : P4r(Re);
              if (Me === null) {
                console.warn('Could not find DevToolsInstance with id "'.concat(Re, '"'));
                return;
              }
              var ot = z5t(Re),
                rt = typeof console.groupCollapsed == "function";
              (rt &&
                console.groupCollapsed(
                  "[Click to expand] %c<".concat(ot || "Component", " />"),
                  "color: var(--dom-tag-name-color); font-weight: normal;",
                ),
                Me.props !== null && console.log("Props:", Me.props),
                Me.state !== null && console.log("State:", Me.state),
                Me.hooks !== null && console.log("Hooks:", Me.hooks));
              var Ct = N4r(Re);
              (Ct !== null && console.log("Nodes:", Ct),
                (window.chrome || /firefox/i.test(navigator.userAgent)) &&
                  console.log("Right-click any value to save it as a global variable for further inspection."),
                rt && console.groupEnd());
            }
            function nuo(Re, Me, ot, rt) {
              var Ct = bc.get(Me);
              if (Ct === void 0) {
                console.warn('Could not find DevToolsInstance with id "'.concat(Me, '"'));
                return;
              }
              if (Ct.kind === vl) {
                var gr = Ct.data;
                if (gr !== null) {
                  var Wr = gr.stateNode;
                  switch (Re) {
                    case "context":
                      switch (((rt = rt.slice(1)), gr.tag)) {
                        case Or:
                          (rt.length === 0 || A7(Wr.context, rt), Wr.forceUpdate());
                          break;
                        case fn:
                          break;
                      }
                      break;
                    case "hooks":
                      typeof me == "function" && me(gr, ot, rt);
                      break;
                    case "props":
                      Wr === null
                        ? typeof At == "function" && At(gr, rt)
                        : ((gr.pendingProps = an(Wr.props, rt)), Wr.forceUpdate());
                      break;
                    case "state":
                      (A7(Wr.state, rt), Wr.forceUpdate());
                      break;
                  }
                }
              }
            }
            function iuo(Re, Me, ot, rt, Ct) {
              var gr = bc.get(Me);
              if (gr === void 0) {
                console.warn('Could not find DevToolsInstance with id "'.concat(Me, '"'));
                return;
              }
              if (gr.kind === vl) {
                var Wr = gr.data;
                if (Wr !== null) {
                  var gn = Wr.stateNode;
                  switch (Re) {
                    case "context":
                      switch (((rt = rt.slice(1)), (Ct = Ct.slice(1)), Wr.tag)) {
                        case Or:
                          (rt.length === 0 || y7(gn.context, rt, Ct), gn.forceUpdate());
                          break;
                        case fn:
                          break;
                      }
                      break;
                    case "hooks":
                      typeof ve == "function" && ve(Wr, ot, rt, Ct);
                      break;
                    case "props":
                      gn === null
                        ? typeof er == "function" && er(Wr, rt, Ct)
                        : ((Wr.pendingProps = as(gn.props, rt, Ct)), gn.forceUpdate());
                      break;
                    case "state":
                      (y7(gn.state, rt, Ct), gn.forceUpdate());
                      break;
                  }
                }
              }
            }
            function ouo(Re, Me, ot, rt, Ct) {
              var gr = bc.get(Me);
              if (gr === void 0) {
                console.warn('Could not find DevToolsInstance with id "'.concat(Me, '"'));
                return;
              }
              if (gr.kind === vl) {
                var Wr = gr.data;
                if (Wr !== null) {
                  var gn = Wr.stateNode;
                  switch (Re) {
                    case "context":
                      switch (((rt = rt.slice(1)), Wr.tag)) {
                        case Or:
                          (rt.length === 0 ? (gn.context = Ct) : dC(gn.context, rt, Ct), gn.forceUpdate());
                          break;
                        case fn:
                          break;
                      }
                      break;
                    case "hooks":
                      typeof z == "function" && z(Wr, ot, rt, Ct);
                      break;
                    case "props":
                      switch (Wr.tag) {
                        case Or:
                          ((Wr.pendingProps = Hm(gn.props, rt, Ct)), gn.forceUpdate());
                          break;
                        default:
                          typeof We == "function" && We(Wr, rt, Ct);
                          break;
                      }
                      break;
                    case "state":
                      switch (Wr.tag) {
                        case Or:
                          (dC(gn.state, rt, Ct), gn.forceUpdate());
                          break;
                      }
                      break;
                  }
                }
              }
            }
            var AC = null,
              MZ = null,
              N7e = null,
              Q5 = !1,
              X5t = 0,
              mhe = !1,
              P7e = !1,
              dhe = null;
            function suo() {
              var Re = [];
              if (dhe === null) throw Error("getProfilingData() called before any profiling data was recorded");
              dhe.forEach(function (Ln, Di) {
                var cs = [],
                  Mu = (MZ !== null && MZ.get(Di)) || "Unknown",
                  Gl = (N7e !== null && N7e.get(Di)) || [];
                (Ln.forEach(function (qa, Sl) {
                  for (
                    var _u = qa.changeDescriptions,
                      L1 = qa.durations,
                      V3 = qa.effectDuration,
                      M0 = qa.maxActualDuration,
                      G5 = qa.passiveEffectDuration,
                      vp = qa.priorityLevel,
                      u2 = qa.commitTime,
                      zm = qa.updaters,
                      Yw = [],
                      UZ = [],
                      JQ = 0;
                    JQ < L1.length;
                    JQ += 3
                  ) {
                    var fhe = L1[JQ];
                    (Yw.push([fhe, IP(L1[JQ + 1])]), UZ.push([fhe, IP(L1[JQ + 2])]));
                  }
                  cs.push({
                    changeDescriptions: _u !== null ? Array.from(_u.entries()) : null,
                    duration: IP(M0),
                    effectDuration: V3 !== null ? IP(V3) : null,
                    fiberActualDurations: Yw,
                    fiberSelfDurations: UZ,
                    passiveEffectDuration: G5 !== null ? IP(G5) : null,
                    priorityLevel: vp,
                    timestamp: u2,
                    updaters: zm,
                  });
                }),
                  Re.push({ commitData: cs, displayName: Mu, initialTreeBaseDurations: Gl, rootID: Di }));
              });
              var Me = null;
              if (typeof Wm == "function") {
                var ot = Wm();
                if (ot) {
                  var rt = ot.batchUIDToMeasuresMap,
                    Ct = ot.internalModuleSourceToRanges,
                    gr = ot.laneToLabelMap,
                    Wr = ot.laneToReactMeasureMap,
                    gn = N5t(ot, [
                      "batchUIDToMeasuresMap",
                      "internalModuleSourceToRanges",
                      "laneToLabelMap",
                      "laneToReactMeasureMap",
                    ]);
                  Me = yh(
                    yh({}, gn),
                    {},
                    {
                      batchUIDToMeasuresKeyValueArray: Array.from(rt.entries()),
                      internalModuleSourceToRanges: Array.from(Ct.entries()),
                      laneToLabelKeyValueArray: Array.from(gr.entries()),
                      laneToReactMeasureKeyValueArray: Array.from(Wr.entries()),
                    },
                  );
                }
              }
              return { dataForRoots: Re, rendererID: re, timelineData: Me };
            }
            function B4r(Re, Me) {
              Re.kind !== wf && Me.push([Re.id, Re.treeBaseDuration]);
              for (var ot = Re.firstChild; ot !== null; ot = ot.nextSibling) B4r(ot, Me);
            }
            function L4r(Re, Me) {
              Q5 ||
                ((mhe = Re),
                (P7e = Me),
                (MZ = new Map()),
                (N7e = new Map()),
                $.getFiberRoots(re).forEach(function (ot) {
                  var rt = us.get(ot);
                  if (rt === void 0)
                    throw new Error("Expected the root instance to already exist when starting profiling");
                  var Ct = rt.id;
                  MZ.set(Ct, n8t(ot.current));
                  var gr = [];
                  (B4r(rt, gr), N7e.set(Ct, gr));
                }),
                (Q5 = !0),
                (X5t = $P()),
                (dhe = new Map()),
                Ft !== null && Ft(!0, P7e));
            }
            function auo() {
              ((Q5 = !1), (mhe = !1), Ft !== null && Ft(!1, P7e), (P7e = !1));
            }
            Oe && L4r(et.recordChangeDescriptions, et.recordTimeline);
            function Z5t(Re) {
              if (Re.kind === f0) {
                for (var Me = Re; Me.kind === f0; ) {
                  if (Me.firstChild === null) return null;
                  Me = Me.firstChild;
                }
                return Me.data.return;
              } else return Re.data;
            }
            function e8t() {
              return null;
            }
            var H3 = new Map();
            function uuo(Re) {
              if (typeof nr != "function")
                throw new Error("Expected overrideError() to not get called for earlier React versions.");
              var Me = H3.get(Re);
              return Me === !1
                ? (H3.delete(Re), H3.size === 0 && nr(e8t), !1)
                : (Me === void 0 &&
                    Re.alternate !== null &&
                    ((Me = H3.get(Re.alternate)), Me === !1 && (H3.delete(Re.alternate), H3.size === 0 && nr(e8t))),
                  Me === void 0 ? !1 : Me);
            }
            function cuo(Re, Me) {
              if (typeof nr != "function" || typeof jr != "function")
                throw new Error("Expected overrideError() to not get called for earlier React versions.");
              var ot = bc.get(Re);
              if (ot !== void 0) {
                var rt = Z5t(ot);
                if (rt !== null) {
                  for (var Ct = rt; !k7e(Ct); ) {
                    if (Ct.return === null) return;
                    Ct = Ct.return;
                  }
                  (H3.set(Ct, Me), Ct.alternate !== null && H3.delete(Ct.alternate), H3.size === 1 && nr(uuo), jr(Ct));
                }
              }
            }
            function M4r() {
              return !1;
            }
            var J9 = new Set();
            function luo(Re) {
              return J9.has(Re) || (Re.alternate !== null && J9.has(Re.alternate));
            }
            function muo(Re, Me) {
              if (typeof hr != "function" || typeof jr != "function")
                throw new Error("Expected overrideSuspense() to not get called for earlier React versions.");
              var ot = bc.get(Re);
              if (ot !== void 0) {
                var rt = Z5t(ot);
                if (rt !== null) {
                  for (var Ct = rt; Ct.tag !== Lu; ) {
                    if (Ct.return === null) return;
                    Ct = Ct.return;
                  }
                  (Ct.alternate !== null && J9.delete(Ct.alternate),
                    Me ? (J9.add(Ct), J9.size === 1 && hr(luo)) : (J9.delete(Ct), J9.size === 0 && hr(M4r)),
                    jr(Ct));
                }
              }
            }
            var o_ = null,
              KQ = null,
              YP = null,
              KP = -1,
              X9 = !1;
            function t8t(Re) {
              (Re === null && ((KQ = null), (YP = null), (KP = -1), (X9 = !1)), (o_ = Re));
            }
            function r8t(Re, Me) {
              if (o_ === null || !X9) return !1;
              var ot = Re.return,
                rt = ot !== null ? ot.alternate : null;
              if (KQ === ot || (KQ === rt && rt !== null)) {
                var Ct = U4r(Re),
                  gr = o_[KP + 1];
                if (gr === void 0) throw new Error("Expected to see a frame at the next depth.");
                if (Ct.index === gr.index && Ct.key === gr.key && Ct.displayName === gr.displayName)
                  return (
                    (KQ = Re),
                    Me !== null && Me.kind === vl && (YP = Me),
                    KP++,
                    KP === o_.length - 1 ? (X9 = !1) : (X9 = !0),
                    !1
                  );
              }
              return ((KQ === null && Me === null) || (X9 = !1), !0);
            }
            function duo(Re, Me) {
              if (o_ === null || !X9) return !1;
              if (YP === Me) {
                var ot = $4r(Re),
                  rt = o_[KP + 1];
                if (rt === void 0) throw new Error("Expected to see a frame at the next depth.");
                if (ot.index === rt.index && ot.key === rt.key && ot.displayName === rt.displayName)
                  return ((KQ = null), (YP = Re), KP++, KP === o_.length - 1 ? (X9 = !1) : (X9 = !0), !1);
              }
              return (KQ !== null || (X9 = !1), !0);
            }
            function F4r(Re) {
              X9 = Re;
            }
            var B7e = new Map(),
              FZ = new Map();
            function L7e(Re, Me) {
              var ot = n8t(Me),
                rt = FZ.get(ot) || 0;
              FZ.set(ot, rt + 1);
              var Ct = "".concat(ot, ":").concat(rt);
              B7e.set(Re, Ct);
            }
            function fuo(Re) {
              var Me = B7e.get(Re);
              if (Me === void 0) throw new Error("Expected root pseudo key to be known.");
              var ot = Me.slice(0, Me.lastIndexOf(":")),
                rt = FZ.get(ot);
              if (rt === void 0) throw new Error("Expected counter to be known.");
              (rt > 1 ? FZ.set(ot, rt - 1) : FZ.delete(ot), B7e.delete(Re));
            }
            function n8t(Re) {
              for (var Me = null, ot = null, rt = Re.child, Ct = 0; Ct < 3 && rt !== null; Ct++) {
                var gr = st(rt);
                if ((gr !== null && (typeof rt.type == "function" ? (Me = gr) : ot === null && (ot = gr)), Me !== null))
                  break;
                rt = rt.child;
              }
              return Me || ot || "Anonymous";
            }
            function U4r(Re) {
              var Me = Re.key,
                ot = st(Re),
                rt = Re.index;
              switch (Re.tag) {
                case hi:
                  var Ct = us.get(Re.stateNode);
                  if (Ct === void 0) throw new Error("Expected the root instance to exist when computing a path");
                  var gr = B7e.get(Ct.id);
                  if (gr === void 0) throw new Error("Expected mounted root to have known pseudo key.");
                  ot = gr;
                  break;
                case Jo:
                  ot = Re.type;
                  break;
                default:
                  break;
              }
              return { displayName: ot, key: Me, index: rt };
            }
            function $4r(Re) {
              return { displayName: Re.data.name || "", key: Re.data.key == null ? null : Re.data.key, index: -1 };
            }
            function puo(Re) {
              var Me = bc.get(Re);
              if (Me === void 0) return null;
              for (var ot = [], rt = Me; rt.kind === f0; ) {
                if ((ot.push($4r(rt)), rt.parent === null)) return null;
                rt = rt.parent;
              }
              for (var Ct = rt.data; Ct !== null; ) (ot.push(U4r(Ct)), (Ct = Ct.return));
              return (ot.reverse(), ot);
            }
            function huo() {
              return o_ === null || YP === null ? null : { id: YP.id, isFullMatch: KP === o_.length - 1 };
            }
            var guo = function (Me) {
              if (Me == null) return "Unknown";
              switch (Me) {
                case bu:
                  return "Immediate";
                case _p:
                  return "User-Blocking";
                case Rd:
                  return "Normal";
                case lm:
                  return "Low";
                case kd:
                  return "Idle";
                case S:
                default:
                  return "Unknown";
              }
            };
            function buo(Re) {
              kZ = Re;
            }
            function Auo(Re) {
              return bc.has(Re);
            }
            function yuo(Re) {
              var Me = j4r(Re);
              if (Me !== null) return Me;
              var ot = Ww(te),
                rt = ot == null ? null : l7e(gt, Re.data, ot);
              if (rt === null) return null;
              var Ct = eZ(rt);
              return ((Re.source = Ct), Ct);
            }
            function j4r(Re) {
              var Me = Re.source;
              if (Me === null) return null;
              if (Re.kind === f0) {
                var ot = Re.data.debugLocation;
                ot != null && (Me = ot);
              }
              if ($Q(Me)) return (Re.source = S7(Me));
              if (typeof Me == "string") {
                var rt = Me.lastIndexOf(`
`),
                  Ct = rt === -1 ? Me : Me.slice(rt + 1);
                return (Re.source = eZ(Ct));
              }
              return Me;
            }
            var _uo = {};
            return yh(
              {
                cleanup: Bao,
                clearErrorsAndWarnings: Cr,
                clearErrorsForElementID: zr,
                clearWarningsForElementID: Vi,
                getSerializedElementValueByPath: euo,
                deletePath: nuo,
                findHostInstancesForElementID: N4r,
                flushInitialOperations: Lao,
                getBestMatchForTrackedPath: huo,
                getDisplayNameForElementID: z5t,
                getNearestMountedDOMNode: Qao,
                getElementIDForHostInstance: Gao,
                getInstanceAndStyle: Wao,
                getOwnersList: Vao,
                getPathForElement: puo,
                getProfilingData: suo,
                handleCommitFiberRoot: Uao,
                handleCommitFiberUnmount: Mao,
                handlePostCommitFiberRoot: Fao,
                hasElementWithId: Auo,
                inspectElement: tuo,
                logElementToConsole: ruo,
                getComponentStack: Au,
                getElementAttributeByPath: qao,
                getElementSourceFunctionById: Hao,
                onErrorOrWarning: Tf,
                overrideError: cuo,
                overrideSuspense: muo,
                overrideValueAtPath: ouo,
                renamePath: iuo,
                renderer: te,
                setTraceUpdatesEnabled: buo,
                setTrackedPath: t8t,
                startProfiling: L4r,
                stopProfiling: auo,
                storeAsGlobal: Zao,
                updateComponentFilters: wao,
                getEnvironmentNames: xao,
              },
              _uo,
            );
          }
          function CZ($, re, te) {
            var le = $[re];
            return (
              ($[re] = function (Oe) {
                return te.call(this, le, arguments);
              }),
              le
            );
          }
          function QP($, re) {
            var te = {};
            for (var le in re) te[le] = CZ($, le, re[le]);
            return te;
          }
          function SZ($, re) {
            for (var te in re) $[te] = re[te];
          }
          function F5($) {
            typeof $.forceUpdate == "function"
              ? $.forceUpdate()
              : $.updater != null &&
                typeof $.updater.enqueueForceUpdate == "function" &&
                $.updater.enqueueForceUpdate(this, function () {}, "forceUpdate");
          }
          function wZ($, re) {
            var te = Object.keys($);
            if (Object.getOwnPropertySymbols) {
              var le = Object.getOwnPropertySymbols($);
              (re &&
                (le = le.filter(function (Oe) {
                  return Object.getOwnPropertyDescriptor($, Oe).enumerable;
                })),
                te.push.apply(te, le));
            }
            return te;
          }
          function U5($) {
            for (var re = 1; re < arguments.length; re++) {
              var te = arguments[re] != null ? arguments[re] : {};
              re % 2
                ? wZ(Object(te), !0).forEach(function (le) {
                    jQ($, le, te[le]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties($, Object.getOwnPropertyDescriptors(te))
                  : wZ(Object(te)).forEach(function (le) {
                      Object.defineProperty($, le, Object.getOwnPropertyDescriptor(te, le));
                    });
            }
            return $;
          }
          function jQ($, re, te) {
            return (
              re in $
                ? Object.defineProperty($, re, { value: te, enumerable: !0, configurable: !0, writable: !0 })
                : ($[re] = te),
              $
            );
          }
          function $7($) {
            "@babel/helpers - typeof";
            return (
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? ($7 = function (te) {
                    return typeof te;
                  })
                : ($7 = function (te) {
                    return te && typeof Symbol == "function" && te.constructor === Symbol && te !== Symbol.prototype
                      ? "symbol"
                      : typeof te;
                  }),
              $7($)
            );
          }
          function r_($) {
            var re = null,
              te = null;
            if ($._currentElement != null) {
              $._currentElement.key && (te = String($._currentElement.key));
              var le = $._currentElement.type;
              typeof le == "string" ? (re = le) : typeof le == "function" && (re = F3(le));
            }
            return { displayName: re, key: te };
          }
          function q3($) {
            if ($._currentElement != null) {
              var re = $._currentElement.type;
              if (typeof re == "function") {
                var te = $.getPublicInstance();
                return te !== null ? O5 : hh;
              } else if (typeof re == "string") return Q9;
            }
            return hp;
          }
          function GP($) {
            var re = [];
            if ($7($) === "object") {
              if (!($._currentElement === null || $._currentElement === !1)) {
                if ($._renderedComponent) {
                  var te = $._renderedComponent;
                  q3(te) !== hp && re.push(te);
                } else if ($._renderedChildren) {
                  var le = $._renderedChildren;
                  for (var Oe in le) {
                    var et = le[Oe];
                    q3(et) !== hp && re.push(et);
                  }
                }
              }
            }
            return re;
          }
          function j7($, re, te, le) {
            var Oe = new Map(),
              et = new WeakMap(),
              ht = new WeakMap(),
              Ue = null,
              st,
              Et = function (qt) {
                return null;
              };
            te.ComponentTree
              ? ((Ue = function (qt) {
                  var Cr = te.ComponentTree.getClosestInstanceFromNode(qt);
                  return et.get(Cr) || null;
                }),
                (st = function (qt) {
                  var Cr = Oe.get(qt);
                  return te.ComponentTree.getNodeFromInstance(Cr);
                }),
                (Et = function (qt) {
                  var Cr = te.ComponentTree.getClosestInstanceFromNode(qt);
                  return Cr != null ? te.ComponentTree.getNodeFromInstance(Cr) : null;
                }))
              : te.Mount.getID &&
                te.Mount.getNode &&
                ((Ue = function (qt) {
                  return null;
                }),
                (st = function (qt) {
                  return null;
                }));
            function Pt(Tt) {
              var qt = Oe.get(Tt);
              return qt ? r_(qt).displayName : null;
            }
            function gt(Tt) {
              if ($7(Tt) !== "object" || Tt === null) throw new Error("Invalid internal instance: " + Tt);
              if (!et.has(Tt)) {
                var qt = Si();
                (et.set(Tt, qt), Oe.set(qt, Tt));
              }
              return et.get(Tt);
            }
            function Bt(Tt, qt) {
              if (Tt.length !== qt.length) return !1;
              for (var Cr = 0; Cr < Tt.length; Cr++) if (Tt[Cr] !== qt[Cr]) return !1;
              return !0;
            }
            var zt = [],
              ur = null;
            te.Reconciler &&
              (ur = QP(te.Reconciler, {
                mountComponent: function (qt, Cr) {
                  var or = Cr[0],
                    zr = Cr[3];
                  if (q3(or) === hp) return qt.apply(this, Cr);
                  if (zr._topLevelWrapper === void 0) return qt.apply(this, Cr);
                  var Vi = gt(or),
                    ni = zt.length > 0 ? zt[zt.length - 1] : 0;
                  (Ir(or, Vi, ni), zt.push(Vi), ht.set(or, gt(zr._topLevelWrapper)));
                  try {
                    var Au = qt.apply(this, Cr);
                    return (zt.pop(), Au);
                  } catch (dm) {
                    throw ((zt = []), dm);
                  } finally {
                    if (zt.length === 0) {
                      var Tf = ht.get(or);
                      if (Tf === void 0) throw new Error("Expected to find root ID.");
                      Na(Tf);
                    }
                  }
                },
                performUpdateIfNecessary: function (qt, Cr) {
                  var or = Cr[0];
                  if (q3(or) === hp) return qt.apply(this, Cr);
                  var zr = gt(or);
                  zt.push(zr);
                  var Vi = GP(or);
                  try {
                    var ni = qt.apply(this, Cr),
                      Au = GP(or);
                    return (Bt(Vi, Au) || In(or, zr, Au), zt.pop(), ni);
                  } catch (dm) {
                    throw ((zt = []), dm);
                  } finally {
                    if (zt.length === 0) {
                      var Tf = ht.get(or);
                      if (Tf === void 0) throw new Error("Expected to find root ID.");
                      Na(Tf);
                    }
                  }
                },
                receiveComponent: function (qt, Cr) {
                  var or = Cr[0];
                  if (q3(or) === hp) return qt.apply(this, Cr);
                  var zr = gt(or);
                  zt.push(zr);
                  var Vi = GP(or);
                  try {
                    var ni = qt.apply(this, Cr),
                      Au = GP(or);
                    return (Bt(Vi, Au) || In(or, zr, Au), zt.pop(), ni);
                  } catch (dm) {
                    throw ((zt = []), dm);
                  } finally {
                    if (zt.length === 0) {
                      var Tf = ht.get(or);
                      if (Tf === void 0) throw new Error("Expected to find root ID.");
                      Na(Tf);
                    }
                  }
                },
                unmountComponent: function (qt, Cr) {
                  var or = Cr[0];
                  if (q3(or) === hp) return qt.apply(this, Cr);
                  var zr = gt(or);
                  zt.push(zr);
                  try {
                    var Vi = qt.apply(this, Cr);
                    return (zt.pop(), io(or, zr), Vi);
                  } catch (Au) {
                    throw ((zt = []), Au);
                  } finally {
                    if (zt.length === 0) {
                      var ni = ht.get(or);
                      if (ni === void 0) throw new Error("Expected to find root ID.");
                      Na(ni);
                    }
                  }
                },
              }));
            function Or() {
              (ur !== null && (te.Component ? SZ(te.Component.Mixin, ur) : SZ(te.Reconciler, ur)), (ur = null));
            }
            function Ir(Tt, qt, Cr) {
              var or = Cr === 0;
              if (
                (p && console.log("%crecordMount()", "color: green; font-weight: bold;", qt, r_(Tt).displayName), or)
              ) {
                var zr = Tt._currentElement != null && Tt._currentElement._owner != null;
                (Ys(g), Ys(qt), Ys(gh), Ys(0), Ys(0), Ys(0), Ys(zr ? 1 : 0));
              } else {
                var Vi = q3(Tt),
                  ni = r_(Tt),
                  Au = ni.displayName,
                  Tf = ni.key,
                  dm =
                    Tt._currentElement != null && Tt._currentElement._owner != null ? gt(Tt._currentElement._owner) : 0,
                  i_ = Ac(Au),
                  K9 = Ac(Tf);
                (Ys(g), Ys(qt), Ys(Vi), Ys(Cr), Ys(dm), Ys(i_), Ys(K9));
              }
            }
            function In(Tt, qt, Cr) {
              (Ys(A), Ys(qt));
              var or = Cr.map(gt);
              Ys(or.length);
              for (var zr = 0; zr < or.length; zr++) Ys(or[zr]);
            }
            function io(Tt, qt) {
              (vo.push(qt), Oe.delete(qt));
            }
            function gu(Tt, qt, Cr) {
              p && console.group("crawlAndRecordInitialMounts() id:", Tt);
              var or = Oe.get(Tt);
              (or != null &&
                (ht.set(or, Cr),
                Ir(or, Tt, qt),
                GP(or).forEach(function (zr) {
                  return gu(gt(zr), Tt, Cr);
                })),
                p && console.groupEnd());
            }
            function fn() {
              var Tt = te.Mount._instancesByReactRootID || te.Mount._instancesByContainerID;
              for (var qt in Tt) {
                var Cr = Tt[qt],
                  or = gt(Cr);
                (gu(or, 0, or), Na(or));
              }
            }
            var hi = [],
              No = new Map(),
              vo = [],
              Lc = 0,
              Jo = null;
            function Na(Tt) {
              if (!(hi.length === 0 && vo.length === 0 && Jo === null)) {
                var qt = vo.length + (Jo === null ? 0 : 1),
                  Cr = new Array(3 + Lc + (qt > 0 ? 2 + qt : 0) + hi.length),
                  or = 0;
                if (
                  ((Cr[or++] = re),
                  (Cr[or++] = Tt),
                  (Cr[or++] = Lc),
                  No.forEach(function (ni, Au) {
                    Cr[or++] = Au.length;
                    for (var Tf = Ws(Au), dm = 0; dm < Tf.length; dm++) Cr[or + dm] = Tf[dm];
                    or += Au.length;
                  }),
                  qt > 0)
                ) {
                  ((Cr[or++] = b), (Cr[or++] = qt));
                  for (var zr = 0; zr < vo.length; zr++) Cr[or++] = vo[zr];
                  Jo !== null && ((Cr[or] = Jo), or++);
                }
                for (var Vi = 0; Vi < hi.length; Vi++) Cr[or + Vi] = hi[Vi];
                ((or += hi.length),
                  p && Bc(Cr),
                  $.emit("operations", Cr),
                  (hi.length = 0),
                  (vo = []),
                  (Jo = null),
                  No.clear(),
                  (Lc = 0));
              }
            }
            function Ys(Tt) {
              hi.push(Tt);
            }
            function Ac(Tt) {
              if (Tt === null) return 0;
              var qt = No.get(Tt);
              if (qt !== void 0) return qt;
              var Cr = No.size + 1;
              return (No.set(Tt, Cr), (Lc += Tt.length + 1), Cr);
            }
            var Ql = null,
              _h = {};
            function Id(Tt) {
              var qt = _h;
              Tt.forEach(function (Cr) {
                (qt[Cr] || (qt[Cr] = {}), (qt = qt[Cr]));
              });
            }
            function el(Tt) {
              return function (Cr) {
                var or = _h[Tt];
                if (!or) return !1;
                for (var zr = 0; zr < Cr.length; zr++) if (((or = or[Cr[zr]]), !or)) return !1;
                return !0;
              };
            }
            function Bu(Tt) {
              var qt = null,
                Cr = null,
                or = Oe.get(Tt);
              if (or != null) {
                qt = or._instance || null;
                var zr = or._currentElement;
                zr != null && zr.props != null && (Cr = zr.props.style || null);
              }
              return { instance: qt, style: Cr };
            }
            function Lu(Tt) {
              var qt = Oe.get(Tt);
              if (qt == null) {
                console.warn('Could not find instance with id "'.concat(Tt, '"'));
                return;
              }
              switch (q3(qt)) {
                case O5:
                  le.$r = qt._instance;
                  break;
                case hh:
                  var Cr = qt._currentElement;
                  if (Cr == null) {
                    console.warn('Could not find element with id "'.concat(Tt, '"'));
                    return;
                  }
                  le.$r = { props: Cr.props, type: Cr.type };
                  break;
                default:
                  le.$r = null;
                  break;
              }
            }
            function En(Tt, qt, Cr) {
              var or = Qn(Tt);
              if (or !== null) {
                var zr = cb(or, qt),
                  Vi = "$reactTemp".concat(Cr);
                ((window[Vi] = zr), console.log(Vi), console.log(zr));
              }
            }
            function hn(Tt, qt) {
              var Cr = Qn(Tt);
              if (Cr !== null) {
                var or = cb(Cr, qt);
                return V9(or);
              }
            }
            function Bn(Tt, qt, Cr, or) {
              (or || Ql !== qt) && ((Ql = qt), (_h = {}));
              var zr = Qn(qt);
              return zr === null
                ? { id: qt, responseID: Tt, type: "not-found" }
                : (Cr !== null && Id(Cr),
                  Lu(qt),
                  (zr.context = am(zr.context, el("context"))),
                  (zr.props = am(zr.props, el("props"))),
                  (zr.state = am(zr.state, el("state"))),
                  { id: qt, responseID: Tt, type: "full-data", value: zr });
            }
            function Qn(Tt) {
              var qt = Oe.get(Tt);
              if (qt == null) return null;
              var Cr = r_(qt),
                or = Cr.key,
                zr = q3(qt),
                Vi = null,
                ni = null,
                Au = null,
                Tf = null,
                dm = qt._currentElement;
              if (dm !== null) {
                Au = dm.props;
                var i_ = dm._owner;
                if (i_)
                  for (ni = []; i_ != null; )
                    (ni.push({ displayName: r_(i_).displayName || "Unknown", id: gt(i_), key: dm.key, type: q3(i_) }),
                      i_._currentElement && (i_ = i_._currentElement._owner));
              }
              var K9 = qt._instance;
              K9 != null && ((Vi = K9.context || null), (Tf = K9.state || null));
              var w7e = [],
                RZ = [];
              return {
                id: Tt,
                canEditHooks: !1,
                canEditFunctionProps: !1,
                canEditHooksAndDeletePaths: !1,
                canEditHooksAndRenamePaths: !1,
                canEditFunctionPropsDeletePaths: !1,
                canEditFunctionPropsRenamePaths: !1,
                canToggleError: !1,
                isErrored: !1,
                canToggleSuspense: !1,
                canViewSource: zr === O5 || zr === hh,
                source: null,
                hasLegacyContext: !0,
                type: zr,
                key: or ?? null,
                context: Vi,
                hooks: null,
                props: Au,
                state: Tf,
                errors: w7e,
                warnings: RZ,
                owners: ni,
                rootType: null,
                rendererPackageName: null,
                rendererVersion: null,
                plugins: { stylex: null },
                nativeTag: null,
              };
            }
            function bu(Tt) {
              var qt = Qn(Tt);
              if (qt === null) {
                console.warn('Could not find element with id "'.concat(Tt, '"'));
                return;
              }
              var Cr = Pt(Tt),
                or = typeof console.groupCollapsed == "function";
              (or &&
                console.groupCollapsed(
                  "[Click to expand] %c<".concat(Cr || "Component", " />"),
                  "color: var(--dom-tag-name-color); font-weight: normal;",
                ),
                qt.props !== null && console.log("Props:", qt.props),
                qt.state !== null && console.log("State:", qt.state),
                qt.context !== null && console.log("Context:", qt.context));
              var zr = st(Tt);
              (zr !== null && console.log("Node:", zr),
                (window.chrome || /firefox/i.test(navigator.userAgent)) &&
                  console.log("Right-click any value to save it as a global variable for further inspection."),
                or && console.groupEnd());
            }
            function _p(Tt, qt) {
              var Cr = Qn(Tt);
              if (Cr !== null) return cb(Cr, qt);
            }
            function Rd(Tt) {
              var qt = Oe.get(Tt);
              if (qt == null) return (console.warn('Could not find instance with id "'.concat(Tt, '"')), null);
              var Cr = qt._currentElement;
              return Cr == null ? (console.warn('Could not find element with id "'.concat(Tt, '"')), null) : Cr.type;
            }
            function lm(Tt, qt, Cr, or) {
              var zr = Oe.get(qt);
              if (zr != null) {
                var Vi = zr._instance;
                if (Vi != null)
                  switch (Tt) {
                    case "context":
                      (A7(Vi.context, or), F5(Vi));
                      break;
                    case "hooks":
                      throw new Error("Hooks not supported by this renderer");
                    case "props":
                      var ni = zr._currentElement;
                      ((zr._currentElement = U5(U5({}, ni), {}, { props: an(ni.props, or) })), F5(Vi));
                      break;
                    case "state":
                      (A7(Vi.state, or), F5(Vi));
                      break;
                  }
              }
            }
            function kd(Tt, qt, Cr, or, zr) {
              var Vi = Oe.get(qt);
              if (Vi != null) {
                var ni = Vi._instance;
                if (ni != null)
                  switch (Tt) {
                    case "context":
                      (y7(ni.context, or, zr), F5(ni));
                      break;
                    case "hooks":
                      throw new Error("Hooks not supported by this renderer");
                    case "props":
                      var Au = Vi._currentElement;
                      ((Vi._currentElement = U5(U5({}, Au), {}, { props: as(Au.props, or, zr) })), F5(ni));
                      break;
                    case "state":
                      (y7(ni.state, or, zr), F5(ni));
                      break;
                  }
              }
            }
            function S(Tt, qt, Cr, or, zr) {
              var Vi = Oe.get(qt);
              if (Vi != null) {
                var ni = Vi._instance;
                if (ni != null)
                  switch (Tt) {
                    case "context":
                      (dC(ni.context, or, zr), F5(ni));
                      break;
                    case "hooks":
                      throw new Error("Hooks not supported by this renderer");
                    case "props":
                      var Au = Vi._currentElement;
                      ((Vi._currentElement = U5(U5({}, Au), {}, { props: Hm(Au.props, or, zr) })), F5(ni));
                      break;
                    case "state":
                      (dC(ni.state, or, zr), F5(ni));
                      break;
                  }
              }
            }
            var w = function () {
                throw new Error("getProfilingData not supported by this renderer");
              },
              M = function () {
                throw new Error("handleCommitFiberRoot not supported by this renderer");
              },
              z = function () {
                throw new Error("handleCommitFiberUnmount not supported by this renderer");
              },
              me = function () {
                throw new Error("handlePostCommitFiberRoot not supported by this renderer");
              },
              ve = function () {
                throw new Error("overrideError not supported by this renderer");
              },
              We = function () {
                throw new Error("overrideSuspense not supported by this renderer");
              },
              At = function () {},
              er = function () {};
            function Lt() {
              return null;
            }
            function nr(Tt) {
              return null;
            }
            function hr(Tt) {}
            function jr() {
              return [];
            }
            function ei(Tt) {}
            function Is(Tt) {}
            function mm(Tt) {
              return null;
            }
            function Wm() {}
            function Ft(Tt) {}
            function It(Tt) {}
            function Qt(Tt) {
              return Oe.has(Tt);
            }
            return {
              clearErrorsAndWarnings: Wm,
              clearErrorsForElementID: Ft,
              clearWarningsForElementID: It,
              cleanup: Or,
              getSerializedElementValueByPath: hn,
              deletePath: lm,
              flushInitialOperations: fn,
              getBestMatchForTrackedPath: Lt,
              getDisplayNameForElementID: Pt,
              getNearestMountedDOMNode: Et,
              getElementIDForHostInstance: Ue,
              getInstanceAndStyle: Bu,
              findHostInstancesForElementID: function (qt) {
                var Cr = st(qt);
                return Cr == null ? null : [Cr];
              },
              getOwnersList: mm,
              getPathForElement: nr,
              getProfilingData: w,
              handleCommitFiberRoot: M,
              handleCommitFiberUnmount: z,
              handlePostCommitFiberRoot: me,
              hasElementWithId: Qt,
              inspectElement: Bn,
              logElementToConsole: bu,
              overrideError: ve,
              overrideSuspense: We,
              overrideValueAtPath: S,
              renamePath: kd,
              getElementAttributeByPath: _p,
              getElementSourceFunctionById: Rd,
              renderer: te,
              setTraceUpdatesEnabled: ei,
              setTrackedPath: Is,
              startProfiling: At,
              stopProfiling: er,
              storeAsGlobal: En,
              updateComponentFilters: hr,
              getEnvironmentNames: jr,
            };
          }
          function qP($) {
            return !IQ($);
          }
          function Xpe($, re, te, le, Oe, et) {
            if (qP(te.reconcilerVersion || te.version)) {
              var ht = $.rendererInterfaces.get(re);
              return (
                ht == null &&
                  (typeof te.getCurrentComponentInfo == "function"
                    ? (ht = h5t($, re, te, le))
                    : typeof te.findFiberByHostInstance == "function" || te.currentDispatcherRef != null
                      ? (ht = um($, re, te, le, Oe, et))
                      : te.ComponentTree && (ht = j7($, re, te, le))),
                ht
              );
            }
          }
          function xZ($) {
            return HP($) || Q7($) || Zpe($) || TZ();
          }
          function TZ() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function Q7($) {
            if (typeof Symbol < "u" && Symbol.iterator in Object($)) return Array.from($);
          }
          function HP($) {
            if (Array.isArray($)) return db($);
          }
          function G7($, re) {
            return ehe($) || VP($, re) || Zpe($, re) || q7();
          }
          function q7() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function Zpe($, re) {
            if ($) {
              if (typeof $ == "string") return db($, re);
              var te = Object.prototype.toString.call($).slice(8, -1);
              if ((te === "Object" && $.constructor && (te = $.constructor.name), te === "Map" || te === "Set"))
                return Array.from($);
              if (te === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te)) return db($, re);
            }
          }
          function db($, re) {
            (re == null || re > $.length) && (re = $.length);
            for (var te = 0, le = new Array(re); te < re; te++) le[te] = $[te];
            return le;
          }
          function VP($, re) {
            if (!(typeof Symbol > "u" || !(Symbol.iterator in Object($)))) {
              var te = [],
                le = !0,
                Oe = !1,
                et = void 0;
              try {
                for (
                  var ht = $[Symbol.iterator](), Ue;
                  !(le = (Ue = ht.next()).done) && (te.push(Ue.value), !(re && te.length === re));
                  le = !0
                );
              } catch (st) {
                ((Oe = !0), (et = st));
              } finally {
                try {
                  !le && ht.return != null && ht.return();
                } finally {
                  if (Oe) throw et;
                }
              }
              return te;
            }
          }
          function ehe($) {
            if (Array.isArray($)) return $;
          }
          function gC($) {
            for (var re = arguments.length, te = new Array(re > 1 ? re - 1 : 0), le = 1; le < re; le++)
              te[le - 1] = arguments[le];
            if (te.length === 0 || typeof $ != "string") return [$].concat(te);
            for (var Oe = te.slice(), et = "", ht = 0, Ue = 0; Ue < $.length; ++Ue) {
              var st = $[Ue];
              if (st !== "%") {
                et += st;
                continue;
              }
              var Et = $[Ue + 1];
              switch ((++Ue, Et)) {
                case "c":
                case "O":
                case "o": {
                  (++ht, (et += "%".concat(Et)));
                  break;
                }
                case "d":
                case "i": {
                  var Pt = Oe.splice(ht, 1),
                    gt = G7(Pt, 1),
                    Bt = gt[0];
                  et += parseInt(Bt, 10).toString();
                  break;
                }
                case "f": {
                  var zt = Oe.splice(ht, 1),
                    ur = G7(zt, 1),
                    Or = ur[0];
                  et += parseFloat(Or).toString();
                  break;
                }
                case "s": {
                  var Ir = Oe.splice(ht, 1),
                    In = G7(Ir, 1),
                    io = In[0];
                  et += String(io);
                  break;
                }
                default:
                  et += "%".concat(Et);
              }
            }
            return [et].concat(xZ(Oe));
          }
          function the($, re) {
            var te;
            if (typeof Symbol > "u" || $[Symbol.iterator] == null) {
              if (Array.isArray($) || (te = fb($)) || (re && $ && typeof $.length == "number")) {
                te && ($ = te);
                var le = 0,
                  Oe = function () {};
                return {
                  s: Oe,
                  n: function () {
                    return le >= $.length ? { done: !0 } : { done: !1, value: $[le++] };
                  },
                  e: function (Et) {
                    throw Et;
                  },
                  f: Oe,
                };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var et = !0,
              ht = !1,
              Ue;
            return {
              s: function () {
                te = $[Symbol.iterator]();
              },
              n: function () {
                var Et = te.next();
                return ((et = Et.done), Et);
              },
              e: function (Et) {
                ((ht = !0), (Ue = Et));
              },
              f: function () {
                try {
                  !et && te.return != null && te.return();
                } finally {
                  if (ht) throw Ue;
                }
              },
            };
          }
          function H7($) {
            return Td($) || $5($) || fb($) || DZ();
          }
          function DZ() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function fb($, re) {
            if ($) {
              if (typeof $ == "string") return Y9($, re);
              var te = Object.prototype.toString.call($).slice(8, -1);
              if ((te === "Object" && $.constructor && (te = $.constructor.name), te === "Map" || te === "Set"))
                return Array.from($);
              if (te === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te)) return Y9($, re);
            }
          }
          function $5($) {
            if (typeof Symbol < "u" && Symbol.iterator in Object($)) return Array.from($);
          }
          function Td($) {
            if (Array.isArray($)) return Y9($);
          }
          function Y9($, re) {
            (re == null || re > $.length) && (re = $.length);
            for (var te = 0, le = new Array(re); te < re; te++) le[te] = $[te];
            return le;
          }
          var Ds = /\s{4}(in|at)\s{1}/,
            Zc = /:\d+:\d+(\n|$)/;
          function Jd($) {
            return Ds.test($) || Zc.test($);
          }
          var QQ = / \(\<anonymous\>\)$|\@unknown\:0\:0$|\(|\)|\[|\]/gm;
          function WP($, re) {
            return $.replace(QQ, "") === re.replace(QQ, "");
          }
          var j5 = console,
            IZ = { recordChangeDescriptions: !1, recordTimeline: !1 };
          function GQ($, re) {
            var te = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
              le = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : IZ;
            if ($.hasOwnProperty("__REACT_DEVTOOLS_GLOBAL_HOOK__")) return null;
            function Oe(hn) {
              try {
                if (typeof hn.version == "string") return hn.bundleType > 0 ? "development" : "production";
                var Bn = Function.prototype.toString;
                if (hn.Mount && hn.Mount._renderNewRootComponent) {
                  var Qn = Bn.call(hn.Mount._renderNewRootComponent);
                  return Qn.indexOf("function") !== 0
                    ? "production"
                    : Qn.indexOf("storedMeasure") !== -1
                      ? "development"
                      : Qn.indexOf("should be a pure function") !== -1
                        ? Qn.indexOf("NODE_ENV") !== -1 || Qn.indexOf("development") !== -1 || Qn.indexOf("true") !== -1
                          ? "development"
                          : Qn.indexOf("nextElement") !== -1 || Qn.indexOf("nextComponent") !== -1
                            ? "unminified"
                            : "development"
                        : Qn.indexOf("nextElement") !== -1 || Qn.indexOf("nextComponent") !== -1
                          ? "unminified"
                          : "outdated";
                }
              } catch {}
              return "production";
            }
            function et(hn) {
              try {
                var Bn = Function.prototype.toString,
                  Qn = Bn.call(hn);
                Qn.indexOf("^_^") > -1 &&
                  ((Et = !0),
                  setTimeout(function () {
                    throw new Error(
                      "React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://react.dev/link/perf-use-production-build",
                    );
                  }));
              } catch {}
            }
            var ht = te,
              Ue = 0;
            function st(hn) {
              var Bn = ++Ue;
              Bu.set(Bn, hn);
              var Qn = Et ? "deadcode" : Oe(hn);
              En.emit("renderer", { id: Bn, renderer: hn, reactBuildType: Qn });
              var bu = Xpe(En, Bn, hn, $, ht, le);
              return (
                bu != null
                  ? (En.rendererInterfaces.set(Bn, bu), En.emit("renderer-attached", { id: Bn, rendererInterface: bu }))
                  : ((En.hasUnsupportedRendererAttached = !0), En.emit("unsupported-renderer-version")),
                Bn
              );
            }
            var Et = !1;
            function Pt(hn, Bn) {
              return (
                En.on(hn, Bn),
                function () {
                  return En.off(hn, Bn);
                }
              );
            }
            function gt(hn, Bn) {
              (el[hn] || (el[hn] = []), el[hn].push(Bn));
            }
            function Bt(hn, Bn) {
              if (el[hn]) {
                var Qn = el[hn].indexOf(Bn);
                (Qn !== -1 && el[hn].splice(Qn, 1), el[hn].length || delete el[hn]);
              }
            }
            function zt(hn, Bn) {
              el[hn] &&
                el[hn].map(function (Qn) {
                  return Qn(Bn);
                });
            }
            function ur(hn) {
              var Bn = _h;
              return (Bn[hn] || (Bn[hn] = new Set()), Bn[hn]);
            }
            function Or(hn, Bn) {
              var Qn = Id.get(hn);
              Qn?.handleCommitFiberUnmount(Bn);
            }
            function Ir(hn, Bn, Qn) {
              var bu = En.getFiberRoots(hn),
                _p = Bn.current,
                Rd = bu.has(Bn),
                lm = _p.memoizedState == null || _p.memoizedState.element == null;
              !Rd && !lm ? bu.add(Bn) : Rd && lm && bu.delete(Bn);
              var kd = Id.get(hn);
              kd?.handleCommitFiberRoot(Bn, Qn);
            }
            function In(hn, Bn) {
              var Qn = Id.get(hn);
              Qn?.handlePostCommitFiberRoot(Bn);
            }
            var io = !1;
            function gu(hn, Bn) {
              ((io = Bn), Bn ? hi() : No());
            }
            var fn = [];
            function hi() {
              if (En.settings && !(fn.length > 0))
                for (
                  var hn = ["group", "groupCollapsed", "info", "log"],
                    Bn = function () {
                      var Rd = bu[Qn],
                        lm = j5[Rd],
                        kd = function () {
                          for (var w = En.settings, M = arguments.length, z = new Array(M), me = 0; me < M; me++)
                            z[me] = arguments[me];
                          if (w == null) {
                            lm.apply(void 0, z);
                            return;
                          }
                          w.hideConsoleLogsInStrictMode || lm.apply(void 0, [X].concat(H7(gC.apply(void 0, z))));
                        };
                      ((j5[Rd] = kd),
                        fn.push(function () {
                          j5[Rd] = lm;
                        }));
                    },
                    Qn = 0,
                    bu = hn;
                  Qn < bu.length;
                  Qn++
                )
                  Bn();
            }
            function No() {
              (fn.forEach(function (hn) {
                return hn();
              }),
                (fn.length = 0));
            }
            var vo = [],
              Lc = [];
            function Jo(hn) {
              var Bn = hn.stack.split(`
`),
                Qn = Bn.length > 1 ? Bn[1] : null;
              return Qn;
            }
            function Na() {
              return Lc;
            }
            function Ys(hn) {
              var Bn = Jo(hn);
              Bn !== null && vo.push(Bn);
            }
            function Ac(hn) {
              if (vo.length > 0) {
                var Bn = vo.pop(),
                  Qn = Jo(hn);
                Qn !== null && Lc.push([Bn, Qn]);
              }
            }
            function Ql() {
              if (En.settings)
                for (
                  var hn = ["error", "trace", "warn"],
                    Bn = function () {
                      var Rd = bu[Qn],
                        lm = j5[Rd],
                        kd = function () {
                          for (var w = En.settings, M = arguments.length, z = new Array(M), me = 0; me < M; me++)
                            z[me] = arguments[me];
                          if (w == null) {
                            lm.apply(void 0, z);
                            return;
                          }
                          if (!(io && w.hideConsoleLogsInStrictMode)) {
                            var ve = !1,
                              We = !1;
                            if (w.appendComponentStack) {
                              var At = z.length > 0 ? z[z.length - 1] : null;
                              We = typeof At == "string" && Jd(At);
                            }
                            var er = w.showInlineWarningsAndErrors && (Rd === "error" || Rd === "warn"),
                              Lt = the(En.rendererInterfaces.values()),
                              nr;
                            try {
                              for (Lt.s(); !(nr = Lt.n()).done; ) {
                                var hr = nr.value,
                                  jr = hr.onErrorOrWarning,
                                  ei = hr.getComponentStack;
                                try {
                                  er && jr?.(Rd, z.slice());
                                } catch (qt) {
                                  setTimeout(function () {
                                    throw qt;
                                  }, 0);
                                }
                                try {
                                  if (w.appendComponentStack && ei != null) {
                                    var Is = Error("react-stack-top-frame"),
                                      mm = ei(Is);
                                    if (mm !== null) {
                                      var Wm = mm.enableOwnerStacks,
                                        Ft = mm.componentStack;
                                      if (Ft !== "") {
                                        var It = new Error("");
                                        if (
                                          ((It.name = Wm ? "Stack" : "Component Stack"),
                                          (It.stack = (Wm ? "Error Stack:" : "Error Component Stack:") + Ft),
                                          We)
                                        ) {
                                          if (WP(z[z.length - 1], Ft)) {
                                            var Qt = z[0];
                                            (z.length > 1 &&
                                              typeof Qt == "string" &&
                                              Qt.endsWith("%s") &&
                                              (z[0] = Qt.slice(0, Qt.length - 2)),
                                              (z[z.length - 1] = It),
                                              (ve = !0));
                                          }
                                        } else (z.push(It), (ve = !0));
                                      }
                                      break;
                                    }
                                  }
                                } catch (qt) {
                                  setTimeout(function () {
                                    throw qt;
                                  }, 0);
                                }
                              }
                            } catch (qt) {
                              Lt.e(qt);
                            } finally {
                              Lt.f();
                            }
                            if (w.breakOnConsoleErrors) debugger;
                            if (io)
                              if (0) var Tt;
                              else lm.apply(void 0, [ve ? J : X].concat(H7(gC.apply(void 0, z))));
                            else lm.apply(void 0, z);
                          }
                        };
                      j5[Rd] = kd;
                    },
                    Qn = 0,
                    bu = hn;
                  Qn < bu.length;
                  Qn++
                )
                  Bn();
            }
            var _h = {},
              Id = new Map(),
              el = {},
              Bu = new Map(),
              Lu = new Map(),
              En = {
                rendererInterfaces: Id,
                listeners: el,
                backends: Lu,
                renderers: Bu,
                hasUnsupportedRendererAttached: !1,
                emit: zt,
                getFiberRoots: ur,
                inject: st,
                on: gt,
                off: Bt,
                sub: Pt,
                supportsFiber: !0,
                supportsFlight: !0,
                checkDCE: et,
                onCommitFiberUnmount: Or,
                onCommitFiberRoot: Ir,
                onPostCommitFiberRoot: In,
                setStrictMode: gu,
                getInternalModuleRanges: Na,
                registerInternalModuleStart: Ys,
                registerInternalModuleStop: Ac,
              };
            return (
              re == null
                ? ((En.settings = {
                    appendComponentStack: !0,
                    breakOnConsoleErrors: !1,
                    showInlineWarningsAndErrors: !0,
                    hideConsoleLogsInStrictMode: !1,
                  }),
                  Ql())
                : Promise.resolve(re)
                    .then(function (hn) {
                      ((En.settings = hn), En.emit("settingsInitialized", hn), Ql());
                    })
                    .catch(function () {
                      j5.error(
                        "React DevTools failed to get Console Patching settings. Console won't be patched and some console features will not work.",
                      );
                    }),
              Object.defineProperty($, "__REACT_DEVTOOLS_GLOBAL_HOOK__", {
                configurable: !1,
                enumerable: !1,
                get: function () {
                  return En;
                },
              }),
              En
            );
          }
          function V7($, re, te, le) {
            if ($ == null) return function () {};
            function Oe(Ue, st) {
              (re.registerRendererInterface(Ue, st), st.flushInitialOperations());
            }
            var et = [
              $.sub("renderer-attached", function (Ue) {
                var st = Ue.id,
                  Et = Ue.rendererInterface;
                Oe(st, Et);
              }),
              $.sub("unsupported-renderer-version", function () {
                re.onUnsupportedRenderer();
              }),
              $.sub("fastRefreshScheduled", re.onFastRefreshScheduled),
              $.sub("operations", re.onHookOperations),
              $.sub("traceUpdates", re.onTraceUpdates),
              $.sub("settingsInitialized", re.onHookSettings),
            ];
            (re.addListener("getIfHasUnsupportedRendererVersion", function () {
              $.hasUnsupportedRendererAttached && re.onUnsupportedRenderer();
            }),
              $.rendererInterfaces.forEach(function (Ue, st) {
                Oe(st, Ue);
              }),
              $.emit("react-devtools", re),
              ($.reactDevtoolsAgent = re));
            var ht = function () {
              (et.forEach(function (st) {
                return st();
              }),
                $.rendererInterfaces.forEach(function (st) {
                  st.cleanup();
                }),
                ($.reactDevtoolsAgent = null));
            };
            return (
              re.addListener("shutdown", ht),
              re.addListener("updateHookSettings", function (Ue) {
                $.settings = Ue;
              }),
              re.addListener("getHookSettings", function () {
                $.settings != null && re.onHookSettings($.settings);
              }),
              le && re.onReloadAndProfileSupportedByHost(),
              function () {
                et.forEach(function (Ue) {
                  return Ue();
                });
              }
            );
          }
          function C7e($, re) {
            var te = !1,
              le = { bottom: 0, left: 0, right: 0, top: 0 },
              Oe = re[$];
            if (Oe != null) {
              for (var et = 0, ht = Object.keys(le); et < ht.length; et++) {
                var Ue = ht[et];
                le[Ue] = Oe;
              }
              te = !0;
            }
            var st = re[$ + "Horizontal"];
            if (st != null) ((le.left = st), (le.right = st), (te = !0));
            else {
              var Et = re[$ + "Left"];
              Et != null && ((le.left = Et), (te = !0));
              var Pt = re[$ + "Right"];
              Pt != null && ((le.right = Pt), (te = !0));
              var gt = re[$ + "End"];
              gt != null && ((le.right = gt), (te = !0));
              var Bt = re[$ + "Start"];
              Bt != null && ((le.left = Bt), (te = !0));
            }
            var zt = re[$ + "Vertical"];
            if (zt != null) ((le.bottom = zt), (le.top = zt), (te = !0));
            else {
              var ur = re[$ + "Bottom"];
              ur != null && ((le.bottom = ur), (te = !0));
              var Or = re[$ + "Top"];
              Or != null && ((le.top = Or), (te = !0));
            }
            return te ? le : null;
          }
          function n_($) {
            "@babel/helpers - typeof";
            return (
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? (n_ = function (te) {
                    return typeof te;
                  })
                : (n_ = function (te) {
                    return te && typeof Symbol == "function" && te.constructor === Symbol && te !== Symbol.prototype
                      ? "symbol"
                      : typeof te;
                  }),
              n_($)
            );
          }
          function qQ($, re, te) {
            return (
              re in $
                ? Object.defineProperty($, re, { value: te, enumerable: !0, configurable: !0, writable: !0 })
                : ($[re] = te),
              $
            );
          }
          function HQ($, re, te, le) {
            ($.addListener("NativeStyleEditor_measure", function (Oe) {
              var et = Oe.id,
                ht = Oe.rendererID;
              VQ(re, $, te, et, ht);
            }),
              $.addListener("NativeStyleEditor_renameAttribute", function (Oe) {
                var et = Oe.id,
                  ht = Oe.rendererID,
                  Ue = Oe.oldName,
                  st = Oe.newName,
                  Et = Oe.value;
                (nhe(re, et, ht, Ue, st, Et),
                  setTimeout(function () {
                    return VQ(re, $, te, et, ht);
                  }));
              }),
              $.addListener("NativeStyleEditor_setValue", function (Oe) {
                var et = Oe.id,
                  ht = Oe.rendererID,
                  Ue = Oe.name,
                  st = Oe.value;
                (bC(re, et, ht, Ue, st),
                  setTimeout(function () {
                    return VQ(re, $, te, et, ht);
                  }));
              }),
              $.send("isNativeStyleEditorSupported", { isSupported: !0, validAttributes: le }));
          }
          var rhe = { top: 0, left: 0, right: 0, bottom: 0 },
            W7 = new Map();
          function VQ($, re, te, le, Oe) {
            var et = $.getInstanceAndStyle({ id: le, rendererID: Oe });
            if (!et || !et.style) {
              re.send("NativeStyleEditor_styleAndLayout", { id: le, layout: null, style: null });
              return;
            }
            var ht = et.instance,
              Ue = et.style,
              st = te(Ue),
              Et = W7.get(le);
            if ((Et != null && (st = Object.assign({}, st, Et)), !ht || typeof ht.measure != "function")) {
              re.send("NativeStyleEditor_styleAndLayout", { id: le, layout: null, style: st || null });
              return;
            }
            ht.measure(function (Pt, gt, Bt, zt, ur, Or) {
              if (typeof Pt != "number") {
                re.send("NativeStyleEditor_styleAndLayout", { id: le, layout: null, style: st || null });
                return;
              }
              var Ir = (st != null && C7e("margin", st)) || rhe,
                In = (st != null && C7e("padding", st)) || rhe;
              re.send("NativeStyleEditor_styleAndLayout", {
                id: le,
                layout: { x: Pt, y: gt, width: Bt, height: zt, left: ur, top: Or, margin: Ir, padding: In },
                style: st || null,
              });
            });
          }
          function Dd($) {
            var re = {};
            for (var te in $) re[te] = $[te];
            return re;
          }
          function nhe($, re, te, le, Oe, et) {
            var ht,
              Ue = $.getInstanceAndStyle({ id: re, rendererID: te });
            if (!(!Ue || !Ue.style)) {
              var st = Ue.instance,
                Et = Ue.style,
                Pt = Oe ? ((ht = {}), qQ(ht, le, void 0), qQ(ht, Oe, et), ht) : qQ({}, le, void 0),
                gt;
              if (st !== null && typeof st.setNativeProps == "function") {
                var Bt = W7.get(re);
                (Bt ? Object.assign(Bt, Pt) : W7.set(re, Pt), st.setNativeProps({ style: Pt }));
              } else if (M3(Et)) {
                var zt = Et.length - 1;
                n_(Et[zt]) === "object" && !M3(Et[zt])
                  ? ((gt = Dd(Et[zt])),
                    delete gt[le],
                    Oe ? (gt[Oe] = et) : (gt[le] = void 0),
                    $.overrideValueAtPath({ type: "props", id: re, rendererID: te, path: ["style", zt], value: gt }))
                  : $.overrideValueAtPath({
                      type: "props",
                      id: re,
                      rendererID: te,
                      path: ["style"],
                      value: Et.concat([Pt]),
                    });
              } else
                n_(Et) === "object"
                  ? ((gt = Dd(Et)),
                    delete gt[le],
                    Oe ? (gt[Oe] = et) : (gt[le] = void 0),
                    $.overrideValueAtPath({ type: "props", id: re, rendererID: te, path: ["style"], value: gt }))
                  : $.overrideValueAtPath({ type: "props", id: re, rendererID: te, path: ["style"], value: [Et, Pt] });
              $.emit("hideNativeHighlight");
            }
          }
          function bC($, re, te, le, Oe) {
            var et = $.getInstanceAndStyle({ id: re, rendererID: te });
            if (!(!et || !et.style)) {
              var ht = et.instance,
                Ue = et.style,
                st = qQ({}, le, Oe);
              if (ht !== null && typeof ht.setNativeProps == "function") {
                var Et = W7.get(re);
                (Et ? Object.assign(Et, st) : W7.set(re, st), ht.setNativeProps({ style: st }));
              } else if (M3(Ue)) {
                var Pt = Ue.length - 1;
                n_(Ue[Pt]) === "object" && !M3(Ue[Pt])
                  ? $.overrideValueAtPath({ type: "props", id: re, rendererID: te, path: ["style", Pt, le], value: Oe })
                  : $.overrideValueAtPath({
                      type: "props",
                      id: re,
                      rendererID: te,
                      path: ["style"],
                      value: Ue.concat([st]),
                    });
              } else $.overrideValueAtPath({ type: "props", id: re, rendererID: te, path: ["style"], value: [Ue, st] });
              $.emit("hideNativeHighlight");
            }
          }
          var cm = B0();
          function z7($) {
            if (p) {
              for (var re, te = arguments.length, le = new Array(te > 1 ? te - 1 : 0), Oe = 1; Oe < te; Oe++)
                le[Oe - 1] = arguments[Oe];
              (re = console).log.apply(
                re,
                ["%c[core/backend] %c".concat($), "color: teal; font-weight: bold;", "font-weight: bold;"].concat(le),
              );
            }
          }
          function S7e($) {
            var re = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
              te = arguments.length > 2 ? arguments[2] : void 0;
            GQ(window, $, re, te);
          }
          function B1($) {
            var re = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (re == null) return;
            var te = $ || {},
              le = te.host,
              Oe = le === void 0 ? "localhost" : le,
              et = te.nativeStyleEditorValidAttributes,
              ht = te.useHttps,
              Ue = ht === void 0 ? !1 : ht,
              st = te.port,
              Et = st === void 0 ? 8097 : st,
              Pt = te.websocket,
              gt = te.resolveRNStyle,
              Bt = gt === void 0 ? null : gt,
              zt = te.retryConnectionDelay,
              ur = zt === void 0 ? 2e3 : zt,
              Or = te.isAppActive,
              Ir =
                Or === void 0
                  ? function () {
                      return !0;
                    }
                  : Or,
              In = te.onSettingsUpdated,
              io = te.isReloadAndProfileSupported,
              gu = io === void 0 ? SP() : io,
              fn = te.isProfiling,
              hi = te.onReloadAndProfile,
              No = te.onReloadAndProfileFlagsReset,
              vo = Ue ? "wss" : "ws",
              Lc = null;
            function Jo() {
              Lc === null &&
                (Lc = setTimeout(function () {
                  return B1($);
                }, ur));
            }
            if (!Ir()) {
              Jo();
              return;
            }
            var Na = null,
              Ys = [],
              Ac = vo + "://" + Oe + ":" + Et,
              Ql = Pt || new window.WebSocket(Ac);
            ((Ql.onclose = _h),
              (Ql.onerror = Id),
              (Ql.onmessage = el),
              (Ql.onopen = function () {
                ((Na = new Mpe({
                  listen: function (Qn) {
                    return (
                      Ys.push(Qn),
                      function () {
                        var bu = Ys.indexOf(Qn);
                        bu >= 0 && Ys.splice(bu, 1);
                      }
                    );
                  },
                  send: function (Qn, bu, _p) {
                    Ql.readyState === Ql.OPEN
                      ? (p && z7("wall.send()", Qn, bu), Ql.send(JSON.stringify({ event: Qn, payload: bu })))
                      : (p && z7("wall.send()", "Shutting down bridge because of closed WebSocket connection"),
                        Na !== null && Na.shutdown(),
                        Jo());
                  },
                })),
                  Na.addListener("updateComponentFilters", function (Bn) {
                    cm = Bn;
                  }),
                  window.__REACT_DEVTOOLS_COMPONENT_FILTERS__ == null && Na.send("overrideComponentFilters", cm));
                var Bu = new qIe(Na, fn, hi);
                if (
                  (typeof No == "function" && No(),
                  In != null && Bu.addListener("updateHookSettings", In),
                  Bu.addListener("shutdown", function () {
                    (In != null && Bu.removeListener("updateHookSettings", In), re.emit("shutdown"));
                  }),
                  V7(re, Bu, window, gu),
                  Bt != null || re.resolveRNStyle != null)
                )
                  HQ(Na, Bu, Bt || re.resolveRNStyle, et || re.nativeStyleEditorValidAttributes || null);
                else {
                  var Lu,
                    En,
                    hn = function () {
                      Na !== null && HQ(Na, Bu, Lu, En);
                    };
                  (re.hasOwnProperty("resolveRNStyle") ||
                    Object.defineProperty(re, "resolveRNStyle", {
                      enumerable: !1,
                      get: function () {
                        return Lu;
                      },
                      set: function (Qn) {
                        ((Lu = Qn), hn());
                      },
                    }),
                    re.hasOwnProperty("nativeStyleEditorValidAttributes") ||
                      Object.defineProperty(re, "nativeStyleEditorValidAttributes", {
                        enumerable: !1,
                        get: function () {
                          return En;
                        },
                        set: function (Qn) {
                          ((En = Qn), hn());
                        },
                      }));
                }
              }));
            function _h() {
              (p && z7("WebSocket.onclose"), Na !== null && Na.emit("shutdown"), Jo());
            }
            function Id() {
              (p && z7("WebSocket.onerror"), Jo());
            }
            function el(Bu) {
              var Lu;
              try {
                if (typeof Bu.data == "string") ((Lu = JSON.parse(Bu.data)), p && z7("WebSocket.onmessage", Lu));
                else throw Error();
              } catch {
                console.error("[React DevTools] Failed to parse JSON: " + Bu.data);
                return;
              }
              Ys.forEach(function (En) {
                try {
                  En(Lu);
                } catch (hn) {
                  throw (console.log("[React DevTools] Error calling listener", Lu), console.log("error:", hn), hn);
                }
              });
            }
          }
          function Xd($) {
            var re = $.onSubscribe,
              te = $.onUnsubscribe,
              le = $.onMessage,
              Oe = $.nativeStyleEditorValidAttributes,
              et = $.resolveRNStyle,
              ht = $.onSettingsUpdated,
              Ue = $.isReloadAndProfileSupported,
              st = Ue === void 0 ? SP() : Ue,
              Et = $.isProfiling,
              Pt = $.onReloadAndProfile,
              gt = $.onReloadAndProfileFlagsReset,
              Bt = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (Bt != null) {
              var zt = {
                  listen: function (fn) {
                    return (
                      re(fn),
                      function () {
                        te(fn);
                      }
                    );
                  },
                  send: function (fn, hi) {
                    le(fn, hi);
                  },
                },
                ur = new Mpe(zt);
              (ur.addListener("updateComponentFilters", function (gu) {
                cm = gu;
              }),
                window.__REACT_DEVTOOLS_COMPONENT_FILTERS__ == null && ur.send("overrideComponentFilters", cm));
              var Or = new qIe(ur, Et, Pt);
              (typeof gt == "function" && gt(),
                ht != null && Or.addListener("updateHookSettings", ht),
                Or.addListener("shutdown", function () {
                  (ht != null && Or.removeListener("updateHookSettings", ht), Bt.emit("shutdown"));
                }));
              var Ir = V7(Bt, Or, window, st),
                In = et || Bt.resolveRNStyle;
              if (In != null) {
                var io = Oe || Bt.nativeStyleEditorValidAttributes || null;
                HQ(ur, Or, In, io);
              }
              return Ir;
            }
          }
        })(),
        n
      );
    })(),
  );
});
var z0o = {};
var x9t,
  Qxr = j(() => {
    $xr();
    x9t = Se(jxr(), 1);
    x9t.default.initialize();
    x9t.default.connectToDevTools();
  });
import Y0o from "node:process";
var Hxr,
  $he,
  Vxr,
  Gxr,
  qxr,
  _Re,
  T9t,
  iR,
  D9t = j(async () => {
    ((Hxr = Se(Awr(), 1)), ($he = Se(E8t(), 1)));
    await tG();
    Vxr = Se(Yt(), 1);
    await t9t();
    await Pwr();
    if (Y0o.env.DEV === "true")
      try {
        await Promise.resolve().then(() => (Qxr(), z0o));
      } catch (t) {
        if (t.code === "ERR_MODULE_NOT_FOUND")
          console.warn(
            `
The environment variable DEV is set to true, so Ink tried to import \`react-devtools-core\`,
but this failed as it was not installed. Debugging with React Devtools requires it.

To install use this command:

$ npm install --save-dev react-devtools-core
				`.trim() +
              `
`,
          );
        else throw t;
      }
    ((Gxr = (t, e) => {
      if (t === e) return;
      if (!t) return e;
      let r = {},
        n = !1;
      for (let o of Object.keys(t)) (e ? !Object.hasOwn(e, o) : !0) && ((r[o] = void 0), (n = !0));
      if (e) for (let o of Object.keys(e)) e[o] !== t[o] && ((r[o] = e[o]), (n = !0));
      return n ? r : void 0;
    }),
      (qxr = (t) => {
        (t?.unsetMeasureFunc(), t?.freeRecursive());
      }),
      (_Re = $he.NoEventPriority),
      (iR = (0, Hxr.default)({
        getRootHostContext: () => ({ isInsideText: !1 }),
        prepareForCommit: () => null,
        preparePortalMount: () => null,
        clearContainer: () => !1,
        resetAfterCommit(t) {
          if ((typeof t.onComputeLayout == "function" && t.onComputeLayout(), t.isStaticDirty)) {
            ((t.isStaticDirty = !1), typeof t.onImmediateRender == "function" && t.onImmediateRender());
            return;
          }
          typeof t.onRender == "function" && t.onRender();
        },
        getChildHostContext(t, e) {
          let r = t.isInsideText,
            n = e === "ink-text" || e === "ink-virtual-text";
          return r === n ? t : { isInsideText: n };
        },
        shouldSetTextContent: () => !1,
        createInstance(t, e, r, n) {
          if (n.isInsideText && t === "ink-box") throw new Error("<Box> can\u2019t be nested inside <Text> component");
          let o = t === "ink-text" && n.isInsideText ? "ink-virtual-text" : t,
            s = rRe(o);
          for (let [a, u] of Object.entries(e))
            if (a !== "children") {
              if (a === "style") {
                (e9t(s, u), s.yogaNode && r9t(s.yogaNode, u));
                continue;
              }
              if (a === "internal_transform") {
                s.internal_transform = u;
                continue;
              }
              if (a === "internal_static") {
                ((T9t = r), (s.internal_static = !0), (r.isStaticDirty = !0), (r.staticNode = s));
                continue;
              }
              Z8t(s, a, u);
            }
          return s;
        },
        createTextInstance(t, e, r) {
          if (!r.isInsideText) throw new Error(`Text string "${t}" must be rendered inside <Text> component`);
          return Owr(t);
        },
        resetTextContent() {},
        hideTextInstance(t) {
          Rhe(t, "");
        },
        unhideTextInstance(t, e) {
          Rhe(t, e);
        },
        getPublicInstance: (t) => t,
        hideInstance(t) {
          t.yogaNode?.setDisplay(gi.DISPLAY_NONE);
        },
        unhideInstance(t) {
          t.yogaNode?.setDisplay(gi.DISPLAY_FLEX);
        },
        appendInitialChild: nRe,
        appendChild: nRe,
        insertBefore: X8t,
        finalizeInitialChildren() {
          return !1;
        },
        isPrimaryRenderer: !0,
        supportsMutation: !0,
        supportsPersistence: !1,
        supportsHydration: !1,
        scheduleTimeout: setTimeout,
        cancelTimeout: clearTimeout,
        noTimeout: -1,
        beforeActiveInstanceBlur() {},
        afterActiveInstanceBlur() {},
        detachDeletedInstance() {},
        getInstanceFromNode: () => null,
        prepareScopeUpdate() {},
        getInstanceFromScope: () => null,
        appendChildToContainer: nRe,
        insertInContainerBefore: X8t,
        removeChildFromContainer(t, e) {
          (Ihe(t, e), qxr(e.yogaNode));
        },
        commitUpdate(t, e, r, n) {
          T9t && t.internal_static && (T9t.isStaticDirty = !0);
          let o = Gxr(r, n),
            s = Gxr(r.style, n.style);
          if (!(!o && !s)) {
            if (o)
              for (let [a, u] of Object.entries(o)) {
                if (a === "style") {
                  e9t(t, u);
                  continue;
                }
                if (a === "internal_transform") {
                  t.internal_transform = u;
                  continue;
                }
                if (a === "internal_static") {
                  t.internal_static = !0;
                  continue;
                }
                Z8t(t, a, u);
              }
            s && t.yogaNode && r9t(t.yogaNode, s);
          }
        },
        commitTextUpdate(t, e, r) {
          Rhe(t, r);
        },
        removeChild(t, e) {
          (Ihe(t, e), qxr(e.yogaNode));
        },
        setCurrentUpdatePriority(t) {
          _Re = t;
        },
        getCurrentUpdatePriority: () => _Re,
        resolveUpdatePriority() {
          return _Re !== $he.NoEventPriority ? _Re : $he.DefaultEventPriority;
        },
        maySuspendCommit() {
          return !1;
        },
        NotPendingTransition: void 0,
        HostTransitionContext: (0, Vxr.createContext)(null),
        resetFormInstance() {},
        requestPostPaintCallback() {},
        shouldAttemptEagerTransition() {
          return !1;
        },
        trackSchedulerEvent() {},
        resolveEventType() {
          return null;
        },
        resolveEventTimeStamp() {
          return -1.1;
        },
        preloadInstance() {
          return !0;
        },
        startSuspendingCommit() {},
        suspendInstance() {},
        waitForCommitToBeReady() {
          return null;
        },
      })));
  });
function I9t(t, e = 1, r = {}) {
  let { indent: n = " ", includeEmptyLines: o = !1 } = r;
  if (typeof t != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof t}\``);
  if (typeof e != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof e}\``);
  if (e < 0) throw new RangeError(`Expected \`count\` to be at least 0, got \`${e}\``);
  if (typeof n != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof n}\``);
  if (e === 0) return t;
  let s = o ? /^/gm : /^(?!\s*$)/gm;
  return t.replace(s, n.repeat(e));
}
var Wxr = j(() => {});
var K0o,
  zxr,
  Yxr = j(async () => {
    await tG();
    ((K0o = (t) =>
      t.getComputedWidth() -
      t.getComputedPadding(gi.EDGE_LEFT) -
      t.getComputedPadding(gi.EDGE_RIGHT) -
      t.getComputedBorder(gi.EDGE_LEFT) -
      t.getComputedBorder(gi.EDGE_RIGHT)),
      (zxr = K0o));
  });