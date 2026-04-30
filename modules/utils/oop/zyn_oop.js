/**
 * @module zyn
 * @category utils/oop
 * @label oop
 * @position 956 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (zyn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var zyn = T((yhc, Wyn) => {
  "use strict";
  Wyn.exports = function (t, e, r, n, o, s) {
    var a = C0(),
      u = a.canEvaluate,
      c = a.tryCatch,
      m = a.errorObj,
      d;
    if (u) {
      for (
        var f = function (E) {
            return new Function(
              "value",
              "holder",
              `                             
            'use strict';                                                    
            holder.pIndex = value;                                           
            holder.checkFulfillment(this);                                   
            `.replace(/Index/g, E),
            );
          },
          p = function (E) {
            return new Function(
              "promise",
              "holder",
              `                           
            'use strict';                                                    
            holder.pIndex = promise;                                         
            `.replace(/Index/g, E),
            );
          },
          h = function (E) {
            for (var v = new Array(E), C = 0; C < v.length; ++C) v[C] = "this.p" + (C + 1);
            var x = v.join(" = ") + " = null;",
              k =
                `var promise;
` +
                v.map(function (O) {
                  return (
                    `                                                         
                promise = ` +
                    O +
                    `;                                      
                if (promise instanceof Promise) {                            
                    promise.cancel();                                        
                }                                                            
            `
                  );
                }).join(`
`),
              R = v.join(", "),
              P = "Holder$" + E,
              D = `return function(tryCatch, errorObj, Promise, async) {    
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
              (D = D.replace(/\[TheName\]/g, P)
                .replace(/\[TheTotal\]/g, E)
                .replace(/\[ThePassedArguments\]/g, R)
                .replace(/\[TheProperties\]/g, x)
                .replace(/\[CancellationCode\]/g, k)),
              new Function("tryCatch", "errorObj", "Promise", "async", D)(c, m, t, o)
            );
          },
          g = [],
          b = [],
          A = [],
          y = 0;
        y < 8;
        ++y
      )
        (g.push(h(y + 1)), b.push(f(y + 1)), A.push(p(y + 1)));
      d = function (E) {
        this._reject(E);
      };
    }
    t.join = function () {
      var E = arguments.length - 1,
        v;
      if (E > 0 && typeof arguments[E] == "function" && ((v = arguments[E]), E <= 8 && u)) {
        var L = new t(n);
        L._captureStackTrace();
        for (var C = g[E - 1], x = new C(v), k = b, R = 0; R < E; ++R) {
          var P = r(arguments[R], L);
          if (P instanceof t) {
            P = P._target();
            var D = P._bitField;
            (D & 50397184) === 0
              ? (P._then(k[R], d, void 0, L, x), A[R](P, x), (x.asyncNeeded = !1))
              : (D & 33554432) !== 0
                ? k[R].call(L, P._value(), x)
                : (D & 16777216) !== 0
                  ? L._reject(P._reason())
                  : L._cancel();
          } else k[R].call(L, P, x);
        }
        if (!L._isFateSealed()) {
          if (x.asyncNeeded) {
            var O = s();
            O !== null && (x.fn = a.domainBind(O, x.fn));
          }
          (L._setAsyncGuaranteed(), L._setOnCancel(x));
        }
        return L;
      }
      for (var N = arguments.length, F = new Array(N), B = 0; B < N; ++B) F[B] = arguments[B];
      v && F.pop();
      var L = new e(F).promise();
      return v !== void 0 ? L.spread(v) : L;
    };
  };
});