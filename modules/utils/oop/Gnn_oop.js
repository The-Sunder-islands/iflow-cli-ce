/**
 * @module Gnn
 * @category utils/oop
 * @label oop
 * @position 586 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Gnn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Gnn = T((dje) => {
  "use strict";
  Object.defineProperty(dje, "__esModule", { value: !0 });
  dje.CompositePropagator = void 0;
  var Qnn = (Zt(), bt(cr)),
    D7t = class {
      _propagators;
      _fields;
      constructor(e = {}) {
        ((this._propagators = e.propagators ?? []),
          (this._fields = Array.from(
            new Set(
              this._propagators
                .map((r) => (typeof r.fields == "function" ? r.fields() : []))
                .reduce((r, n) => r.concat(n), []),
            ),
          )));
      }
      inject(e, r, n) {
        for (let o of this._propagators)
          try {
            o.inject(e, r, n);
          } catch (s) {
            Qnn.diag.warn(`Failed to inject with ${o.constructor.name}. Err: ${s.message}`);
          }
      }
      extract(e, r, n) {
        return this._propagators.reduce((o, s) => {
          try {
            return s.extract(o, r, n);
          } catch (a) {
            Qnn.diag.warn(`Failed to extract with ${s.constructor.name}. Err: ${a.message}`);
          }
          return o;
        }, e);
      }
      fields() {
        return this._fields.slice();
      }
    };
  dje.CompositePropagator = D7t;
});