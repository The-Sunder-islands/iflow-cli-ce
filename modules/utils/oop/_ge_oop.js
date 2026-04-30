/**
 * @module _ge
 * @category utils/oop
 * @label oop
 * @position 228 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_ge) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _ge = T((Hte) => {
  "use strict";
  Object.defineProperty(Hte, "__esModule", { value: !0 });
  Hte.AttributeHashMap = Hte.HashMap = void 0;
  var IDo = qC(),
    qPe = class {
      _hash;
      _valueMap = new Map();
      _keyMap = new Map();
      constructor(e) {
        this._hash = e;
      }
      get(e, r) {
        return ((r ??= this._hash(e)), this._valueMap.get(r));
      }
      getOrDefault(e, r) {
        let n = this._hash(e);
        if (this._valueMap.has(n)) return this._valueMap.get(n);
        let o = r();
        return (this._keyMap.has(n) || this._keyMap.set(n, e), this._valueMap.set(n, o), o);
      }
      set(e, r, n) {
        ((n ??= this._hash(e)), this._keyMap.has(n) || this._keyMap.set(n, e), this._valueMap.set(n, r));
      }
      has(e, r) {
        return ((r ??= this._hash(e)), this._valueMap.has(r));
      }
      *keys() {
        let e = this._keyMap.entries(),
          r = e.next();
        for (; r.done !== !0; ) (yield [r.value[1], r.value[0]], (r = e.next()));
      }
      *entries() {
        let e = this._valueMap.entries(),
          r = e.next();
        for (; r.done !== !0; ) (yield [this._keyMap.get(r.value[0]), r.value[1], r.value[0]], (r = e.next()));
      }
      get size() {
        return this._valueMap.size;
      }
    };
  Hte.HashMap = qPe;
  var FCt = class extends qPe {
    constructor() {
      super(IDo.hashAttributes);
    }
  };
  Hte.AttributeHashMap = FCt;
});