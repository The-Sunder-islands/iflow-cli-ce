/**
 * @module CJr
 * @category utils/oop
 * @label oop
 * @position 409 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (CJr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var CJr = T((nFe) => {
  "use strict";
  Object.defineProperty(nFe, "__esModule", { value: !0 });
  nFe.InstrumentationAbstract = void 0;
  var Cwt = (Zt(), bt(cr)),
    GPo = Xte(),
    rFe = vwt(),
    Swt = class {
      instrumentationName;
      instrumentationVersion;
      _config = {};
      _tracer;
      _meter;
      _logger;
      _diag;
      constructor(e, r, n) {
        ((this.instrumentationName = e),
          (this.instrumentationVersion = r),
          this.setConfig(n),
          (this._diag = Cwt.diag.createComponentLogger({ namespace: e })),
          (this._tracer = Cwt.trace.getTracer(e, r)),
          (this._meter = Cwt.metrics.getMeter(e, r)),
          (this._logger = GPo.logs.getLogger(e, r)),
          this._updateMetricInstruments());
      }
      _wrap = rFe.wrap;
      _unwrap = rFe.unwrap;
      _massWrap = rFe.massWrap;
      _massUnwrap = rFe.massUnwrap;
      get meter() {
        return this._meter;
      }
      setMeterProvider(e) {
        ((this._meter = e.getMeter(this.instrumentationName, this.instrumentationVersion)),
          this._updateMetricInstruments());
      }
      get logger() {
        return this._logger;
      }
      setLoggerProvider(e) {
        this._logger = e.getLogger(this.instrumentationName, this.instrumentationVersion);
      }
      getModuleDefinitions() {
        let e = this.init() ?? [];
        return Array.isArray(e) ? e : [e];
      }
      _updateMetricInstruments() {}
      getConfig() {
        return this._config;
      }
      setConfig(e) {
        this._config = { enabled: !0, ...e };
      }
      setTracerProvider(e) {
        this._tracer = e.getTracer(this.instrumentationName, this.instrumentationVersion);
      }
      get tracer() {
        return this._tracer;
      }
      _runSpanCustomizationHook(e, r, n, o) {
        if (e)
          try {
            e(n, o);
          } catch (s) {
            this._diag.error(
              "Error running span customization hook due to exception in handler",
              { triggerName: r },
              s,
            );
          }
      }
    };
  nFe.InstrumentationAbstract = Swt;
});