/**
 * @module z0
 * @category utils/oop
 * @label oop
 * @position 980 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (z0) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var z0 = T((Yb) => {
  function kys(t) {
    return Array.isArray ? Array.isArray(t) : VJe(t) === "[object Array]";
  }
  Yb.isArray = kys;
  function Oys(t) {
    return typeof t == "boolean";
  }
  Yb.isBoolean = Oys;
  function Nys(t) {
    return t === null;
  }
  Yb.isNull = Nys;
  function Pys(t) {
    return t == null;
  }
  Yb.isNullOrUndefined = Pys;
  function Bys(t) {
    return typeof t == "number";
  }
  Yb.isNumber = Bys;
  function Lys(t) {
    return typeof t == "string";
  }
  Yb.isString = Lys;
  function Mys(t) {
    return typeof t == "symbol";
  }
  Yb.isSymbol = Mys;
  function Fys(t) {
    return t === void 0;
  }
  Yb.isUndefined = Fys;
  function Uys(t) {
    return VJe(t) === "[object RegExp]";
  }
  Yb.isRegExp = Uys;
  function $ys(t) {
    return typeof t == "object" && t !== null;
  }
  Yb.isObject = $ys;
  function jys(t) {
    return VJe(t) === "[object Date]";
  }
  Yb.isDate = jys;
  function Qys(t) {
    return VJe(t) === "[object Error]" || t instanceof Error;
  }
  Yb.isError = Qys;
  function Gys(t) {
    return typeof t == "function";
  }
  Yb.isFunction = Gys;
  function qys(t) {
    return (
      t === null ||
      typeof t == "boolean" ||
      typeof t == "number" ||
      typeof t == "string" ||
      typeof t == "symbol" ||
      typeof t > "u"
    );
  }
  Yb.isPrimitive = qys;
  Yb.isBuffer = Buffer.isBuffer;
  function VJe(t) {
    return Object.prototype.toString.call(t);
  }
});