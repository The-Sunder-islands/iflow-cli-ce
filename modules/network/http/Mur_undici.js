/**
 * @module Mur
 * @category network/http
 * @label undici
 * @position 1534 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Mur) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Mur = T((CCc, Aei) => {
  "use strict";
  var { kClients: Xz } = n0(),
    ida = zz(),
    {
      kAgent: Nur,
      kMockAgentSet: wot,
      kMockAgentGet: fei,
      kDispatches: Pur,
      kIsMockActive: xot,
      kNetConnect: Zz,
      kGetNetConnect: oda,
      kOptions: Tot,
      kFactory: Dot,
      kMockAgentRegisterCallHistory: Bur,
      kMockAgentIsCallHistoryEnabled: hCe,
      kMockAgentAddCallHistoryLog: pei,
      kMockAgentMockCallHistoryInstance: Sle,
      kMockAgentAcceptsNonStandardSearchParameters: hei,
      kMockCallHistoryAddLog: sda,
      kIgnoreTrailingSlash: gei,
    } = Jz(),
    ada = wur(),
    uda = Our(),
    { matchValue: cda, normalizeSearchParams: lda, buildAndValidateMockOptions: mda } = pCe(),
    { InvalidArgumentError: bei, UndiciError: dda } = da(),
    fda = Ove(),
    pda = dei(),
    { MockCallHistory: hda } = Dur(),
    Lur = class extends fda {
      constructor(e = {}) {
        super(e);
        let r = mda(e);
        if (
          ((this[Zz] = !0),
          (this[xot] = !0),
          (this[hCe] = r.enableCallHistory ?? !1),
          (this[hei] = r.acceptNonStandardSearchParameters ?? !1),
          (this[gei] = r.ignoreTrailingSlash ?? !1),
          e?.agent && typeof e.agent.dispatch != "function")
        )
          throw new bei("Argument opts.agent must implement Agent");
        let n = e?.agent ? e.agent : new ida(e);
        ((this[Nur] = n), (this[Xz] = n[Xz]), (this[Tot] = r), this[hCe] && this[Bur]());
      }
      get(e) {
        let r = this[gei] ? e.replace(/\/$/, "") : e,
          n = this[fei](r);
        return (n || ((n = this[Dot](r)), this[wot](r, n)), n);
      }
      dispatch(e, r) {
        (this.get(e.origin), this[pei](e));
        let n = this[hei],
          o = { ...e };
        if (n && o.path) {
          let [s, a] = o.path.split("?"),
            u = lda(a, n);
          o.path = `${s}?${u}`;
        }
        return this[Nur].dispatch(o, r);
      }
      async close() {
        (this.clearCallHistory(), await this[Nur].close(), this[Xz].clear());
      }
      deactivate() {
        this[xot] = !1;
      }
      activate() {
        this[xot] = !0;
      }
      enableNetConnect(e) {
        if (typeof e == "string" || typeof e == "function" || e instanceof RegExp)
          Array.isArray(this[Zz]) ? this[Zz].push(e) : (this[Zz] = [e]);
        else if (typeof e > "u") this[Zz] = !0;
        else throw new bei("Unsupported matcher. Must be one of String|Function|RegExp.");
      }
      disableNetConnect() {
        this[Zz] = !1;
      }
      enableCallHistory() {
        return ((this[hCe] = !0), this);
      }
      disableCallHistory() {
        return ((this[hCe] = !1), this);
      }
      getCallHistory() {
        return this[Sle];
      }
      clearCallHistory() {
        this[Sle] !== void 0 && this[Sle].clear();
      }
      get isMockActive() {
        return this[xot];
      }
      [Bur]() {
        this[Sle] === void 0 && (this[Sle] = new hda());
      }
      [pei](e) {
        this[hCe] && (this[Bur](), this[Sle][sda](e));
      }
      [wot](e, r) {
        this[Xz].set(e, { count: 0, dispatcher: r });
      }
      [Dot](e) {
        let r = Object.assign({ agent: this }, this[Tot]);
        return this[Tot] && this[Tot].connections === 1 ? new ada(e, r) : new uda(e, r);
      }
      [fei](e) {
        let r = this[Xz].get(e);
        if (r?.dispatcher) return r.dispatcher;
        if (typeof e != "string") {
          let n = this[Dot]("http://localhost:9999");
          return (this[wot](e, n), n);
        }
        for (let [n, o] of Array.from(this[Xz]))
          if (o && typeof n != "string" && cda(n, e)) {
            let s = this[Dot](e);
            return (this[wot](e, s), (s[Pur] = o.dispatcher[Pur]), s);
          }
      }
      [oda]() {
        return this[Zz];
      }
      pendingInterceptors() {
        let e = this[Xz];
        return Array.from(e.entries())
          .flatMap(([r, n]) => n.dispatcher[Pur].map((o) => ({ ...o, origin: r })))
          .filter(({ pending: r }) => r);
      }
      assertNoPendingInterceptors({ pendingInterceptorsFormatter: e = new pda() } = {}) {
        let r = this.pendingInterceptors();
        if (r.length !== 0)
          throw new dda(
            r.length === 1
              ? `1 interceptor is pending:

${e.format(r)}`.trim()
              : `${r.length} interceptors are pending:

${e.format(r)}`.trim(),
          );
      }
    };
  Aei.exports = Lur;
});