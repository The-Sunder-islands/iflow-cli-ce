/**
 * @module n3i
 * @category utils/oop
 * @label oop
 * @position 1686 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (n3i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var n3i = T((rGc, r3i) => {
  "use strict";
  var Bpr = Object.create;
  Bpr && ((Lpr = Bpr(null)), (Mpr = Bpr(null)), (Lpr[" size"] = Mpr[" size"] = 0));
  var Lpr, Mpr;
  r3i.exports = function (t) {
    var e = Z0(),
      r = e.canEvaluate,
      n = e.isIdentifier,
      o,
      s,
      a = function (h) {
        return new Function(
          "ensureMethod",
          `                                    
        return function(obj) {                                               
            'use strict'                                                     
            var len = this.length;                                           
            ensureMethod(obj, 'methodName');                                 
            switch(len) {                                                    
                case 1: return obj.methodName(this[0]);                      
                case 2: return obj.methodName(this[0], this[1]);             
                case 3: return obj.methodName(this[0], this[1], this[2]);    
                case 0: return obj.methodName();                             
                default:                                                     
                    return obj.methodName.apply(obj, this);                  
            }                                                                
        };                                                                   
        `.replace(/methodName/g, h),
        )(m);
      },
      u = function (h) {
        return new Function(
          "obj",
          `                                             
        'use strict';                                                        
        return obj.propertyName;                                             
        `.replace("propertyName", h),
        );
      },
      c = function (h, g, b) {
        var A = b[h];
        if (typeof A != "function") {
          if (!n(h)) return null;
          if (((A = g(h)), (b[h] = A), b[" size"]++, b[" size"] > 512)) {
            for (var y = Object.keys(b), E = 0; E < 256; ++E) delete b[y[E]];
            b[" size"] = y.length - 256;
          }
        }
        return A;
      };
    ((o = function (h) {
      return c(h, a, Lpr);
    }),
      (s = function (h) {
        return c(h, u, Mpr);
      }));
    function m(h, g) {
      var b;
      if ((h != null && (b = h[g]), typeof b != "function")) {
        var A = "Object " + e.classString(h) + " has no method '" + e.toString(g) + "'";
        throw new t.TypeError(A);
      }
      return b;
    }
    function d(h) {
      var g = this.pop(),
        b = m(h, g);
      return b.apply(h, this);
    }
    t.prototype.call = function (h) {
      for (var g = arguments.length, b = new Array(Math.max(g - 1, 0)), A = 1; A < g; ++A) b[A - 1] = arguments[A];
      if (r) {
        var y = o(h);
        if (y !== null) return this._then(y, void 0, void 0, b, void 0);
      }
      return (b.push(h), this._then(d, void 0, void 0, b, void 0));
    };
    function f(h) {
      return h[this];
    }
    function p(h) {
      var g = +this;
      return (g < 0 && (g = Math.max(0, g + h.length)), h[g]);
    }
    t.prototype.get = function (h) {
      var g = typeof h == "number",
        b;
      if (g) b = p;
      else if (r) {
        var A = s(h);
        b = A !== null ? A : f;
      } else b = f;
      return this._then(b, void 0, void 0, h, void 0);
    };
  };
});