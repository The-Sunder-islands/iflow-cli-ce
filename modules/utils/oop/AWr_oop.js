/**
 * @module AWr
 * @category utils/oop
 * @label oop
 * @position 245 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (AWr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var AWr = T((sBe) => {
  "use strict";
  Object.defineProperty(sBe, "__esModule", { value: !0 });
  sBe.View = void 0;
  var dIo = nBe(),
    gWr = ZPe(),
    fIo = pWr(),
    pIo = hWr(),
    bWr = fge();
  function hIo(t) {
    return (
      t.instrumentName == null &&
      t.instrumentType == null &&
      t.instrumentUnit == null &&
      t.meterName == null &&
      t.meterVersion == null &&
      t.meterSchemaUrl == null
    );
  }
  function gIo(t) {
    if (hIo(t)) throw new Error("Cannot create view with no selector arguments supplied");
    if (t.name != null && (t?.instrumentName == null || dIo.PatternPredicate.hasWildcard(t.instrumentName)))
      throw new Error(
        "Views with a specified name must be declared with an instrument selector that selects at most one instrument per meter.",
      );
  }
  var c4t = class {
    name;
    description;
    aggregation;
    attributesProcessor;
    instrumentSelector;
    meterSelector;
    aggregationCardinalityLimit;
    constructor(e) {
      (gIo(e),
        e.attributesProcessors != null
          ? (this.attributesProcessor = (0, gWr.createMultiAttributesProcessor)(e.attributesProcessors))
          : (this.attributesProcessor = (0, gWr.createNoopAttributesProcessor)()),
        (this.name = e.name),
        (this.description = e.description),
        (this.aggregation = (0, bWr.toAggregation)(e.aggregation ?? { type: bWr.AggregationType.DEFAULT })),
        (this.instrumentSelector = new fIo.InstrumentSelector({
          name: e.instrumentName,
          type: e.instrumentType,
          unit: e.instrumentUnit,
        })),
        (this.meterSelector = new pIo.MeterSelector({
          name: e.meterName,
          version: e.meterVersion,
          schemaUrl: e.meterSchemaUrl,
        })),
        (this.aggregationCardinalityLimit = e.aggregationCardinalityLimit));
    }
  };
  sBe.View = c4t;
});