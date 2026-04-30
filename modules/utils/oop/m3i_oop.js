/**
 * @module m3i
 * @category utils/oop
 * @label oop
 * @position 1690 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (m3i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var m3i = T((sGc, l3i) => {
  "use strict";
  l3i.exports = function (t, e) {
    var r = {},
      n = Z0(),
      o = Ppr(),
      s = n.withAppended,
      a = n.maybeWrapAsError,
      u = n.canEvaluate,
      c = AN().TypeError,
      m = "Async",
      d = { __isPromisified__: !0 },
      f = ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"],
      p = new RegExp("^(?:" + f.join("|") + ")$"),
      h = function (B) {
        return n.isIdentifier(B) && B.charAt(0) !== "_" && B !== "constructor";
      };
    function g(B) {
      return !p.test(B);
    }
    function b(B) {
      try {
        return B.__isPromisified__ === !0;
      } catch {
        return !1;
      }
    }
    function A(B, L, G) {
      var Q = n.getDataPropertyOrDefault(B, L + G, d);
      return Q ? b(Q) : !1;
    }
    function y(B, L, G) {
      for (var Q = 0; Q < B.length; Q += 2) {
        var K = B[Q];
        if (G.test(K)) {
          for (var H = K.replace(G, ""), U = 0; U < B.length; U += 2)
            if (B[U] === H)
              throw new c(
                `Cannot promisify an API that has normal methods with '%s'-suffix

    See http://goo.gl/MqrFmX
`.replace("%s", L),
              );
        }
      }
    }
    function E(B, L, G, Q) {
      for (var K = n.inheritedDataKeys(B), H = [], U = 0; U < K.length; ++U) {
        var Y = K[U],
          X = B[Y],
          J = Q === h ? !0 : h(Y, X, B);
        typeof X == "function" && !b(X) && !A(B, Y, L) && Q(Y, X, B, J) && H.push(Y, X);
      }
      return (y(H, L, G), H);
    }
    var v = function (B) {
        return B.replace(/([$])/, "\\$");
      },
      C,
      x = function (B) {
        for (var L = [B], G = Math.max(0, B - 1 - 3), Q = B - 1; Q >= G; --Q) L.push(Q);
        for (var Q = B + 1; Q <= 3; ++Q) L.push(Q);
        return L;
      },
      k = function (B) {
        return n.filledRange(B, "_arg", "");
      },
      R = function (B) {
        return n.filledRange(Math.max(B, 3), "_arg", "");
      },
      P = function (B) {
        return typeof B.length == "number" ? Math.max(Math.min(B.length, 1024), 0) : 0;
      };
    C = function (B, L, G, Q, K, H) {
      var U = Math.max(0, P(Q) - 1),
        Y = x(U),
        X = typeof B == "string" || L === r;
      function J(ce) {
        var ye = k(ce).join(", "),
          Z = ce > 0 ? ", " : "",
          oe;
        return (
          X
            ? (oe = `ret = callback.call(this, {{args}}, nodeback); break;
`)
            : (oe =
                L === void 0
                  ? `ret = callback({{args}}, nodeback); break;
`
                  : `ret = callback.call(receiver, {{args}}, nodeback); break;
`),
          oe.replace("{{args}}", ye).replace(", ", Z)
        );
      }
      function q() {
        for (var ce = "", ye = 0; ye < Y.length; ++ye) ce += "case " + Y[ye] + ":" + J(Y[ye]);
        return (
          (ce += `                                                             
        default:                                                             
            var args = new Array(len + 1);                                   
            var i = 0;                                                       
            for (var i = 0; i < len; ++i) {                                  
               args[i] = arguments[i];                                       
            }                                                                
            args[i] = nodeback;                                              
            [CodeForCall]                                                    
            break;                                                           
        `.replace(
            "[CodeForCall]",
            X
              ? `ret = callback.apply(this, args);
`
              : `ret = callback.apply(receiver, args);
`,
          )),
          ce
        );
      }
      var ne = typeof B == "string" ? "this != null ? this['" + B + "'] : fn" : "fn",
        de =
          `'use strict';                                                
        var ret = function (Parameters) {                                    
            'use strict';                                                    
            var len = arguments.length;                                      
            var promise = new Promise(INTERNAL);                             
            promise._captureStackTrace();                                    
            var nodeback = nodebackForPromise(promise, ` +
          H +
          `);   
            var ret;                                                         
            var callback = tryCatch([GetFunctionCode]);                      
            switch(len) {                                                    
                [CodeForSwitchCase]                                          
            }                                                                
            if (ret === errorObj) {                                          
                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);
            }                                                                
            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     
            return promise;                                                  
        };                                                                   
        notEnumerableProp(ret, '__isPromisified__', true);                   
        return ret;                                                          
    `
            .replace("[CodeForSwitchCase]", q())
            .replace("[GetFunctionCode]", ne);
      return (
        (de = de.replace("Parameters", R(U))),
        new Function(
          "Promise",
          "fn",
          "receiver",
          "withAppended",
          "maybeWrapAsError",
          "nodebackForPromise",
          "tryCatch",
          "errorObj",
          "notEnumerableProp",
          "INTERNAL",
          de,
        )(t, Q, L, s, a, o, n.tryCatch, n.errorObj, n.notEnumerableProp, e)
      );
    };
    function D(B, L, G, Q, K, H) {
      var U = (function () {
          return this;
        })(),
        Y = B;
      typeof Y == "string" && (B = Q);
      function X() {
        var J = L;
        L === r && (J = this);
        var q = new t(e);
        q._captureStackTrace();
        var ne = typeof Y == "string" && this !== U ? this[Y] : B,
          de = o(q, H);
        try {
          ne.apply(J, s(arguments, de));
        } catch (ce) {
          q._rejectCallback(a(ce), !0, !0);
        }
        return (q._isFateSealed() || q._setAsyncGuaranteed(), q);
      }
      return (n.notEnumerableProp(X, "__isPromisified__", !0), X);
    }
    var O = u ? C : D;
    function N(B, L, G, Q, K) {
      for (var H = new RegExp(v(L) + "$"), U = E(B, L, H, G), Y = 0, X = U.length; Y < X; Y += 2) {
        var J = U[Y],
          q = U[Y + 1],
          ne = J + L;
        if (Q === O) B[ne] = O(J, r, J, q, L, K);
        else {
          var de = Q(q, function () {
            return O(J, r, J, q, L, K);
          });
          (n.notEnumerableProp(de, "__isPromisified__", !0), (B[ne] = de));
        }
      }
      return (n.toFastProperties(B), B);
    }
    function F(B, L, G) {
      return O(B, L, void 0, B, null, G);
    }
    ((t.promisify = function (B, L) {
      if (typeof B != "function") throw new c("expecting a function but got " + n.classString(B));
      if (b(B)) return B;
      L = Object(L);
      var G = L.context === void 0 ? r : L.context,
        Q = !!L.multiArgs,
        K = F(B, G, Q);
      return (n.copyDescriptors(B, K, g), K);
    }),
      (t.promisifyAll = function (B, L) {
        if (typeof B != "function" && typeof B != "object")
          throw new c(`the target of promisifyAll must be an object or a function

    See http://goo.gl/MqrFmX
`);
        L = Object(L);
        var G = !!L.multiArgs,
          Q = L.suffix;
        typeof Q != "string" && (Q = m);
        var K = L.filter;
        typeof K != "function" && (K = h);
        var H = L.promisifier;
        if ((typeof H != "function" && (H = O), !n.isIdentifier(Q)))
          throw new RangeError(`suffix must be a valid identifier

    See http://goo.gl/MqrFmX
`);
        for (var U = n.inheritedDataKeys(B), Y = 0; Y < U.length; ++Y) {
          var X = B[U[Y]];
          U[Y] !== "constructor" && n.isClass(X) && (N(X.prototype, Q, K, H, G), N(X, Q, K, H, G));
        }
        return N(B, Q, K, H, G);
      }));
  };
});