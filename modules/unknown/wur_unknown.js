/**
 * @module wur
 * @category unknown
 * @label unknown
 * @position 1530 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wur) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wur = T((ACc, nei) => {
  "use strict";
  var { promisify: Uma } = Ae("node:util"),
    $ma = EU(),
    { buildMockDispatch: jma } = pCe(),
    {
      kDispatches: vur,
      kMockAgent: JZn,
      kClose: XZn,
      kOriginalClose: ZZn,
      kOrigin: eei,
      kOriginalDispatch: Qma,
      kConnected: Cur,
      kIgnoreTrailingSlash: tei,
    } = Jz(),
    { MockInterceptor: Gma } = Eur(),
    rei = n0(),
    { InvalidArgumentError: qma } = da(),
    Sur = class extends $ma {
      constructor(e, r) {
        if (!r || !r.agent || typeof r.agent.dispatch != "function")
          throw new qma("Argument opts.agent must implement Agent");
        (super(e, r),
          (this[JZn] = r.agent),
          (this[eei] = e),
          (this[tei] = r.ignoreTrailingSlash ?? !1),
          (this[vur] = []),
          (this[Cur] = 1),
          (this[Qma] = this.dispatch),
          (this[ZZn] = this.close.bind(this)),
          (this.dispatch = jma.call(this)),
          (this.close = this[XZn]));
      }
      get [rei.kConnected]() {
        return this[Cur];
      }
      intercept(e) {
        return new Gma(e && { ignoreTrailingSlash: this[tei], ...e }, this[vur]);
      }
      cleanMocks() {
        this[vur] = [];
      }
      async [XZn]() {
        (await Uma(this[ZZn])(), (this[Cur] = 0), this[JZn][rei.kClients].delete(this[eei]));
      }
    };
  nei.exports = Sur;
});