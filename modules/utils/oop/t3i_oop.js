/**
 * @module t3i
 * @category utils/oop
 * @label oop
 * @position 1685 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (t3i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var t3i = T((tGc, e3i) => {
  "use strict";
  e3i.exports = function (t, e, r, n, o) {
    var s = Z0(),
      a = s.canEvaluate,
      u = s.tryCatch,
      c = s.errorObj,
      m;
    if (a) {
      for (
        var d = function (y) {
            return new Function(
              "value",
              "holder",
              `                             
            'use strict';                                                    
            holder.pIndex = value;                                           
            holder.checkFulfillment(this);                                   
            `.replace(/Index/g, y),
            );
          },
          f = function (y) {
            return new Function(
              "promise",
              "holder",
              `                           
            'use strict';                                                    
            holder.pIndex = promise;                                         
            `.replace(/Index/g, y),
            );
          },
          p = function (y) {
            for (var E = new Array(y), v = 0; v < E.length; ++v) E[v] = "this.p" + (v + 1);
            var C = E.join(" = ") + " = null;",
              x =
                `var promise;
` +
                E.map(function (D) {
                  return (
                    `                                                         
                promise = ` +
                    D +
                    `;                                      
                if (promise instanceof Promise) {                            
                    promise.cancel();                                        
                }                                                            
            `
                  );
                }).join(`
`),
              k = E.join(", "),
              R = "Holder$" + y,
              P = `return function(tryCatch, errorObj, Promise, async) {    
            'use strict';                                                    
            function [TheName](fn) {                                         
                [TheProperties]                                              
                this.fn = fn;                                                
                this.asyncNeeded = true;                                     
                this.now = 0;                                                
            }                                                                
                                                                             
            [TheName].prototype._callFunction = function(promise) {          
                promise._pushContext();                                      
                var ret = tryCatch(this.fn)([ThePassedArguments]);           
                promise._popContext();                                       
                if (ret === errorObj) {                                      
                    promise._rejectCallback(ret.e, false);                   
                } else {                                                     
                    promise._resolveCallback(ret);                           
                }                                                            
            };                                                               
                                                                             
            [TheName].prototype.checkFulfillment = function(promise) {       
                var now = ++this.now;                                        
                if (now === [TheTotal]) {                                    
                    if (this.asyncNeeded) {                                  
                        async.invoke(this._callFunction, this, promise);     
                    } else {                                                 
                        this._callFunction(promise);                         
                    }                                                        
                                                                             
                }                                                            
            };                                                               
                                                                             
            [TheName].prototype._resultCancelled = function() {              
                [CancellationCode]                                           
            };                                                               
                                                                             
            return [TheName];                                                
        }(tryCatch, errorObj, Promise, async);                               
        `;
            return (
              (P = P.replace(/\[TheName\]/g, R)
                .replace(/\[TheTotal\]/g, y)
                .replace(/\[ThePassedArguments\]/g, k)
                .replace(/\[TheProperties\]/g, C)
                .replace(/\[CancellationCode\]/g, x)),
              new Function("tryCatch", "errorObj", "Promise", "async", P)(u, c, t, o)
            );
          },
          h = [],
          g = [],
          b = [],
          A = 0;
        A < 8;
        ++A
      )
        (h.push(p(A + 1)), g.push(d(A + 1)), b.push(f(A + 1)));
      m = function (y) {
        this._reject(y);
      };
    }
    t.join = function () {
      var y = arguments.length - 1,
        E;
      if (y > 0 && typeof arguments[y] == "function" && ((E = arguments[y]), y <= 8 && a)) {
        var B = new t(n);
        B._captureStackTrace();
        for (var v = h[y - 1], C = new v(E), x = g, k = 0; k < y; ++k) {
          var R = r(arguments[k], B);
          if (R instanceof t) {
            R = R._target();
            var P = R._bitField;
            (P & 50397184) === 0
              ? (R._then(x[k], m, void 0, B, C), b[k](R, C), (C.asyncNeeded = !1))
              : (P & 33554432) !== 0
                ? x[k].call(B, R._value(), C)
                : (P & 16777216) !== 0
                  ? B._reject(R._reason())
                  : B._cancel();
          } else x[k].call(B, R, C);
        }
        if (!B._isFateSealed()) {
          if (C.asyncNeeded) {
            var D = t._getContext();
            C.fn = s.contextBind(D, C.fn);
          }
          (B._setAsyncGuaranteed(), B._setOnCancel(C));
        }
        return B;
      }
      for (var O = arguments.length, N = new Array(O), F = 0; F < O; ++F) N[F] = arguments[F];
      E && N.pop();
      var B = new e(N).promise();
      return E !== void 0 ? B.spread(E) : B;
    };
  };
});