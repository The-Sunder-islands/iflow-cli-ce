/**
 * @module Mtn
 * @category utils/oop
 * @label oop
 * @position 518 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Mtn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Mtn = T((vIt) => {
  "use strict";
  Object.defineProperty(vIt, "__esModule", { value: !0 });
  vIt.setup = UGo;
  var Otn = Ae("net"),
    Ntn = pq(),
    ZUe = La(),
    yIt = Ph(),
    Ptn = VC(),
    BGo = a8(),
    Btn = d2(),
    LGo = g0(),
    MGo = "ip_resolver";
  function Ltn(t) {
    LGo.trace(ZUe.LogVerbosity.DEBUG, MGo, t);
  }
  var _It = "ipv4",
    EIt = "ipv6",
    FGo = 443,
    e$e = class {
      constructor(e, r, n) {
        var o;
        ((this.listener = r),
          (this.endpoints = []),
          (this.error = null),
          (this.hasReturnedResult = !1),
          Ltn("Resolver constructed for target " + (0, Btn.uriToString)(e)));
        let s = [];
        if (!(e.scheme === _It || e.scheme === EIt)) {
          this.error = {
            code: ZUe.Status.UNAVAILABLE,
            details: `Unrecognized scheme ${e.scheme} in IP resolver`,
            metadata: new yIt.Metadata(),
          };
          return;
        }
        let a = e.path.split(",");
        for (let u of a) {
          let c = (0, Btn.splitHostPort)(u);
          if (c === null) {
            this.error = {
              code: ZUe.Status.UNAVAILABLE,
              details: `Failed to parse ${e.scheme} address ${u}`,
              metadata: new yIt.Metadata(),
            };
            return;
          }
          if ((e.scheme === _It && !(0, Otn.isIPv4)(c.host)) || (e.scheme === EIt && !(0, Otn.isIPv6)(c.host))) {
            this.error = {
              code: ZUe.Status.UNAVAILABLE,
              details: `Failed to parse ${e.scheme} address ${u}`,
              metadata: new yIt.Metadata(),
            };
            return;
          }
          s.push({ host: c.host, port: (o = c.port) !== null && o !== void 0 ? o : FGo });
        }
        ((this.endpoints = s.map((u) => ({ addresses: [u] }))),
          Ltn("Parsed " + e.scheme + " address list " + s.map(BGo.subchannelAddressToString)));
      }
      updateResolution() {
        this.hasReturnedResult ||
          ((this.hasReturnedResult = !0),
          process.nextTick(() => {
            this.error
              ? this.listener((0, Ntn.statusOrFromError)(this.error), {}, null, "")
              : this.listener((0, Ntn.statusOrFromValue)(this.endpoints), {}, null, "");
          }));
      }
      destroy() {
        this.hasReturnedResult = !1;
      }
      static getDefaultAuthority(e) {
        return e.path.split(",")[0];
      }
    };
  function UGo() {
    ((0, Ptn.registerResolver)(_It, e$e), (0, Ptn.registerResolver)(EIt, e$e));
  }
});