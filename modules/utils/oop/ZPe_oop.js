/**
 * @module ZPe
 * @category utils/oop
 * @label oop
 * @position 238 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ZPe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ZPe = T((Tx) => {
  "use strict";
  Object.defineProperty(Tx, "__esModule", { value: !0 });
  Tx.createDenyListAttributesProcessor =
    Tx.createAllowListAttributesProcessor =
    Tx.createMultiAttributesProcessor =
    Tx.createNoopAttributesProcessor =
      void 0;
  var JCt = class {
      process(e, r) {
        return e;
      }
    },
    XCt = class {
      _processors;
      constructor(e) {
        this._processors = e;
      }
      process(e, r) {
        let n = e;
        for (let o of this._processors) n = o.process(n, r);
        return n;
      }
    },
    ZCt = class {
      _allowedAttributeNames;
      constructor(e) {
        this._allowedAttributeNames = e;
      }
      process(e, r) {
        let n = {};
        return (
          Object.keys(e)
            .filter((o) => this._allowedAttributeNames.includes(o))
            .forEach((o) => (n[o] = e[o])),
          n
        );
      }
    },
    e4t = class {
      _deniedAttributeNames;
      constructor(e) {
        this._deniedAttributeNames = e;
      }
      process(e, r) {
        let n = {};
        return (
          Object.keys(e)
            .filter((o) => !this._deniedAttributeNames.includes(o))
            .forEach((o) => (n[o] = e[o])),
          n
        );
      }
    };
  function VDo() {
    return KDo;
  }
  Tx.createNoopAttributesProcessor = VDo;
  function WDo(t) {
    return new XCt(t);
  }
  Tx.createMultiAttributesProcessor = WDo;
  function zDo(t) {
    return new ZCt(t);
  }
  Tx.createAllowListAttributesProcessor = zDo;
  function YDo(t) {
    return new e4t(t);
  }
  Tx.createDenyListAttributesProcessor = YDo;
  var KDo = new JCt();
});