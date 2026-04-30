/**
 * @module jPe
 * @category utils/oop
 * @label oop
 * @position 225 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jPe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jPe = T((o1) => {
  "use strict";
  Object.defineProperty(o1, "__esModule", { value: !0 });
  o1.isObservableInstrument =
    o1.ObservableUpDownCounterInstrument =
    o1.ObservableGaugeInstrument =
    o1.ObservableCounterInstrument =
    o1.ObservableInstrument =
    o1.HistogramInstrument =
    o1.GaugeInstrument =
    o1.CounterInstrument =
    o1.UpDownCounterInstrument =
    o1.SyncInstrument =
      void 0;
  var qte = (Zt(), bt(cr)),
    xDo = Ii(),
    WG = class {
      _writableMetricStorage;
      _descriptor;
      constructor(e, r) {
        ((this._writableMetricStorage = e), (this._descriptor = r));
      }
      _record(e, r = {}, n = qte.context.active()) {
        if (typeof e != "number") {
          qte.diag.warn(`non-number value provided to metric ${this._descriptor.name}: ${e}`);
          return;
        }
        (this._descriptor.valueType === qte.ValueType.INT &&
          !Number.isInteger(e) &&
          (qte.diag.warn(
            `INT value type cannot accept a floating-point value for ${this._descriptor.name}, ignoring the fractional digits.`,
          ),
          (e = Math.trunc(e)),
          !Number.isInteger(e))) ||
          this._writableMetricStorage.record(e, r, n, (0, xDo.millisToHrTime)(Date.now()));
      }
    };
  o1.SyncInstrument = WG;
  var DCt = class extends WG {
    add(e, r, n) {
      this._record(e, r, n);
    }
  };
  o1.UpDownCounterInstrument = DCt;
  var ICt = class extends WG {
    add(e, r, n) {
      if (e < 0) {
        qte.diag.warn(`negative value provided to counter ${this._descriptor.name}: ${e}`);
        return;
      }
      this._record(e, r, n);
    }
  };
  o1.CounterInstrument = ICt;
  var RCt = class extends WG {
    record(e, r, n) {
      this._record(e, r, n);
    }
  };
  o1.GaugeInstrument = RCt;
  var kCt = class extends WG {
    record(e, r, n) {
      if (e < 0) {
        qte.diag.warn(`negative value provided to histogram ${this._descriptor.name}: ${e}`);
        return;
      }
      this._record(e, r, n);
    }
  };
  o1.HistogramInstrument = kCt;
  var zG = class {
    _observableRegistry;
    _metricStorages;
    _descriptor;
    constructor(e, r, n) {
      ((this._observableRegistry = n), (this._descriptor = e), (this._metricStorages = r));
    }
    addCallback(e) {
      this._observableRegistry.addCallback(e, this);
    }
    removeCallback(e) {
      this._observableRegistry.removeCallback(e, this);
    }
  };
  o1.ObservableInstrument = zG;
  var OCt = class extends zG {};
  o1.ObservableCounterInstrument = OCt;
  var NCt = class extends zG {};
  o1.ObservableGaugeInstrument = NCt;
  var PCt = class extends zG {};
  o1.ObservableUpDownCounterInstrument = PCt;
  function TDo(t) {
    return t instanceof zG;
  }
  o1.isObservableInstrument = TDo;
});