/**
 * @module rWr
 * @category utils/oop
 * @label oop
 * @position 233 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (rWr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var rWr = T((YPe) => {
  "use strict";
  Object.defineProperty(YPe, "__esModule", { value: !0 });
  YPe.MetricStorageRegistry = void 0;
  var $Do = yge(),
    tWr = (Zt(), bt(cr)),
    zPe = eWr(),
    HCt = class t {
      _sharedRegistry = new Map();
      _perCollectorRegistry = new Map();
      static create() {
        return new t();
      }
      getStorages(e) {
        let r = [];
        for (let o of this._sharedRegistry.values()) r = r.concat(o);
        let n = this._perCollectorRegistry.get(e);
        if (n != null) for (let o of n.values()) r = r.concat(o);
        return r;
      }
      register(e) {
        this._registerStorage(e, this._sharedRegistry);
      }
      registerForCollector(e, r) {
        let n = this._perCollectorRegistry.get(e);
        (n == null && ((n = new Map()), this._perCollectorRegistry.set(e, n)), this._registerStorage(r, n));
      }
      findOrUpdateCompatibleStorage(e) {
        let r = this._sharedRegistry.get(e.name);
        return r === void 0 ? null : this._findOrUpdateCompatibleStorage(e, r);
      }
      findOrUpdateCompatibleCollectorStorage(e, r) {
        let n = this._perCollectorRegistry.get(e);
        if (n === void 0) return null;
        let o = n.get(r.name);
        return o === void 0 ? null : this._findOrUpdateCompatibleStorage(r, o);
      }
      _registerStorage(e, r) {
        let n = e.getInstrumentDescriptor(),
          o = r.get(n.name);
        if (o === void 0) {
          r.set(n.name, [e]);
          return;
        }
        o.push(e);
      }
      _findOrUpdateCompatibleStorage(e, r) {
        let n = null;
        for (let o of r) {
          let s = o.getInstrumentDescriptor();
          (0, $Do.isDescriptorCompatibleWith)(s, e)
            ? (s.description !== e.description &&
                (e.description.length > s.description.length && o.updateDescription(e.description),
                tWr.diag.warn(
                  "A view or instrument with the name ",
                  e.name,
                  ` has already been registered, but has a different description and is incompatible with another registered view.
`,
                  `Details:
`,
                  (0, zPe.getIncompatibilityDetails)(s, e),
                  `The longer description will be used.
To resolve the conflict:`,
                  (0, zPe.getConflictResolutionRecipe)(s, e),
                )),
              (n = o))
            : tWr.diag.warn(
                "A view or instrument with the name ",
                e.name,
                ` has already been registered and is incompatible with another registered view.
`,
                `Details:
`,
                (0, zPe.getIncompatibilityDetails)(s, e),
                `To resolve the conflict:
`,
                (0, zPe.getConflictResolutionRecipe)(s, e),
              );
        }
        return n;
      }
    };
  YPe.MetricStorageRegistry = HCt;
});