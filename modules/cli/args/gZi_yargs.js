/**
 * @module gZi
 * @category cli/args
 * @label yargs
 * @position 1915 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (gZi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var gZi = T((Jwl, hZi) => {
  var IDe = rZi(),
    Ofe = Ae("path").join,
    Vfu = uZi(),
    fZi = "/etc",
    pZi = process.platform === "win32",
    RDe = pZi ? process.env.USERPROFILE : process.env.HOME;
  hZi.exports = function (t, e, r, n) {
    if (typeof t != "string") throw new Error("rc(name): name *must* be string");
    (r || (r = dZi()(process.argv.slice(2))),
      (e = (typeof e == "string" ? IDe.json(e) : e) || {}),
      (n = n || IDe.parse));
    var o = IDe.env(t + "_"),
      s = [e],
      a = [];
    function u(c) {
      if (!(a.indexOf(c) >= 0)) {
        var m = IDe.file(c);
        m && (s.push(n(m)), a.push(c));
      }
    }
    return (
      pZi || [Ofe(fZi, t, "config"), Ofe(fZi, t + "rc")].forEach(u),
      RDe &&
        [
          Ofe(RDe, ".config", t, "config"),
          Ofe(RDe, ".config", t),
          Ofe(RDe, "." + t, "config"),
          Ofe(RDe, "." + t + "rc"),
        ].forEach(u),
      u(IDe.find("." + t + "rc")),
      o.config && u(o.config),
      r.config && u(r.config),
      Vfu.apply(null, s.concat([o, r, a.length ? { configs: a, config: a[a.length - 1] } : void 0]))
    );
  };
});
function vEr(t) {
  let e = (0, bZi.default)("npm", { registry: "https://registry.npmjs.org/" }),
    r = e[`${t}:registry`] || e.config_registry || e.registry;
  return r.slice(-1) === "/" ? r : `${r}/`;
}
var bZi,
  AZi = j(() => {
    bZi = Se(gZi(), 1);
  });