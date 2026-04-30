/**
 * @module uI
 * @category utils/cache
 * @label cache
 * @position 1777 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (uI) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var uI = T((a6i) => {
  "use strict";
  var dwe = vA(),
    o6i = aI();
  function s6i(t) {
    try {
      let e = new Set(Array.from(t.match(/([A-Z_]){3,}/g) ?? []));
      return (e.delete("CONFIG"), e.delete("CONFIG_PREFIX_SEPARATOR"), e.delete("ENV"), [...e].join(", "));
    } catch {
      return t;
    }
  }
  var NNa = (t, e) => async () => {
      try {
        let r = t(process.env, e);
        if (r === void 0) throw new Error();
        return r;
      } catch (r) {
        throw new dwe.CredentialsProviderError(r.message || `Not found in ENV: ${s6i(t.toString())}`, {
          logger: e?.logger,
        });
      }
    },
    PNa =
      (t, { preferredFile: e = "config", ...r } = {}) =>
      async () => {
        let n = o6i.getProfileName(r),
          { configFile: o, credentialsFile: s } = await o6i.loadSharedConfigFiles(r),
          a = s[n] || {},
          u = o[n] || {},
          c = e === "config" ? { ...a, ...u } : { ...u, ...a };
        try {
          let d = t(c, e === "config" ? o : s);
          if (d === void 0) throw new Error();
          return d;
        } catch (m) {
          throw new dwe.CredentialsProviderError(
            m.message || `Not found in config files w/ profile [${n}]: ${s6i(t.toString())}`,
            { logger: r.logger },
          );
        }
      },
    BNa = (t) => typeof t == "function",
    LNa = (t) => (BNa(t) ? async () => await t() : dwe.fromStatic(t)),
    MNa = ({ environmentVariableSelector: t, configFileSelector: e, default: r }, n = {}) => {
      let { signingName: o, logger: s } = n,
        a = { signingName: o, logger: s };
      return dwe.memoize(dwe.chain(NNa(t, a), PNa(e, n), LNa(r)));
    };
  a6i.loadConfig = MNa;
});