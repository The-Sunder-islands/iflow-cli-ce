/**
 * @module xti
 * @category network/http
 * @label undici
 * @position 1554 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xti) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xti = T((qCc, wti) => {
  "use strict";
  var nfa = Ae("node:diagnostics_channel"),
    Sti = ks(),
    ifa = Cti(),
    { normalizeHeaders: ofa, makeCacheKey: sfa, makeDeduplicationKey: afa } = xle(),
    Oot = nfa.channel("undici:request:pending-requests");
  wti.exports = (t = {}) => {
    let { methods: e = ["GET"], skipHeaderNames: r = [], excludeHeaderNames: n = [] } = t;
    if (typeof t != "object" || t === null)
      throw new TypeError(`expected type of opts to be an Object, got ${t === null ? "null" : typeof t}`);
    if (!Array.isArray(e)) throw new TypeError(`expected opts.methods to be an array, got ${typeof e}`);
    for (let c of e)
      if (!Sti.safeHTTPMethods.includes(c))
        throw new TypeError(`expected opts.methods to only contain safe HTTP methods, got ${c}`);
    if (!Array.isArray(r)) throw new TypeError(`expected opts.skipHeaderNames to be an array, got ${typeof r}`);
    if (!Array.isArray(n)) throw new TypeError(`expected opts.excludeHeaderNames to be an array, got ${typeof n}`);
    let o = new Set(r.map((c) => c.toLowerCase())),
      s = new Set(n.map((c) => c.toLowerCase())),
      a = Sti.safeHTTPMethods.filter((c) => e.includes(c) === !1),
      u = new Map();
    return (c) => (m, d) => {
      if (!m.origin || a.includes(m.method)) return c(m, d);
      if (((m = { ...m, headers: ofa(m) }), o.size > 0)) {
        for (let b of Object.keys(m.headers)) if (o.has(b.toLowerCase())) return c(m, d);
      }
      let f = sfa(m),
        p = afa(f, s),
        h = u.get(p);
      if (h) return (h.addWaitingHandler(d), !0);
      let g = new ifa(d, () => {
        (u.delete(p), Oot.hasSubscribers && Oot.publish({ size: u.size, key: p, type: "removed" }));
      });
      return (u.set(p, g), Oot.hasSubscribers && Oot.publish({ size: u.size, key: p, type: "added" }), c(m, g));
    };
  };
});