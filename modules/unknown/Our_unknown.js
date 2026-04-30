/**
 * @module Our
 * @category unknown
 * @label unknown
 * @position 1532 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Our) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Our = T((_Cc, lei) => {
  "use strict";
  var { promisify: zma } = Ae("node:util"),
    Yma = ple(),
    { buildMockDispatch: Kma } = pCe(),
    {
      kDispatches: Iur,
      kMockAgent: iei,
      kClose: oei,
      kOriginalClose: sei,
      kOrigin: aei,
      kOriginalDispatch: Jma,
      kConnected: Rur,
      kIgnoreTrailingSlash: uei,
    } = Jz(),
    { MockInterceptor: Xma } = Eur(),
    cei = n0(),
    { InvalidArgumentError: Zma } = da(),
    kur = class extends Yma {
      constructor(e, r) {
        if (!r || !r.agent || typeof r.agent.dispatch != "function")
          throw new Zma("Argument opts.agent must implement Agent");
        (super(e, r),
          (this[iei] = r.agent),
          (this[aei] = e),
          (this[uei] = r.ignoreTrailingSlash ?? !1),
          (this[Iur] = []),
          (this[Rur] = 1),
          (this[Jma] = this.dispatch),
          (this[sei] = this.close.bind(this)),
          (this.dispatch = Kma.call(this)),
          (this.close = this[oei]));
      }
      get [cei.kConnected]() {
        return this[Rur];
      }
      intercept(e) {
        return new Xma(e && { ignoreTrailingSlash: this[uei], ...e }, this[Iur]);
      }
      cleanMocks() {
        this[Iur] = [];
      }
      async [oei]() {
        (await zma(this[sei])(), (this[Rur] = 0), this[iei][cei.kClients].delete(this[aei]));
      }
    };
  lei.exports = kur;
});