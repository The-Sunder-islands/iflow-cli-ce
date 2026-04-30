/**
 * @module nnn
 * @category unknown
 * @label unknown
 * @position 562 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (nnn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var nnn = T((K$e) => {
  "use strict";
  Object.defineProperty(K$e, "__esModule", { value: !0 });
  K$e.B3Propagator = void 0;
  var xVo = Ii(),
    TVo = enn(),
    DVo = rnn(),
    IVo = Xbe(),
    RVo = l7t(),
    m7t = class {
      _b3MultiPropagator = new TVo.B3MultiPropagator();
      _b3SinglePropagator = new DVo.B3SinglePropagator();
      _inject;
      _fields;
      constructor(e = {}) {
        e.injectEncoding === RVo.B3InjectEncoding.MULTI_HEADER
          ? ((this._inject = this._b3MultiPropagator.inject), (this._fields = this._b3MultiPropagator.fields()))
          : ((this._inject = this._b3SinglePropagator.inject), (this._fields = this._b3SinglePropagator.fields()));
      }
      inject(e, r, n) {
        (0, xVo.isTracingSuppressed)(e) || this._inject(e, r, n);
      }
      extract(e, r, n) {
        let o = n.get(r, IVo.B3_CONTEXT_HEADER);
        return (Array.isArray(o) ? o[0] : o)
          ? this._b3SinglePropagator.extract(e, r, n)
          : this._b3MultiPropagator.extract(e, r, n);
      }
      fields() {
        return this._fields;
      }
    };
  K$e.B3Propagator = m7t;
});