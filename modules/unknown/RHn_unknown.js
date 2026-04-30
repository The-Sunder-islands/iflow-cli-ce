/**
 * @module RHn
 * @category unknown
 * @label unknown
 * @position 1470 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (RHn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var RHn = T((gyc, IHn) => {
  IHn.exports = async function* (e) {
    let r = [];
    e.on("data", (u) => r.push(u));
    let n,
      o = new Promise((u) => (n = u)),
      s = !1;
    e.on("end", () => {
      ((s = !0), n());
    });
    let a = !1;
    for (
      e.on("error", (u) => {
        ((a = u), n());
      });
      !s || r.length > 0;
    )
      if ((r.length === 0 ? (e.resume(), await Promise.race([dta(e, "data"), o])) : (e.pause(), yield r.shift()), a))
        throw a;
    n();
  };
  function dta(t, e) {
    return new Promise((r) => {
      let n = !1,
        o = () => {
          n || ((n = !0), t.removeListener(e, o), r());
        };
      t.addListener(e, o);
    });
  }
});