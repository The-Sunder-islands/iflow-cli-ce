/**
 * @module zfi
 * @category unknown
 * @label unknown
 * @position 1647 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (zfi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var zfi = T((gQc, Wfi) => {
  "use strict";
  var hwa = d3().fromPromise,
    Gfi = e5(),
    qfi = Ae("path"),
    Hfi = FS(),
    Vfi = RSe(),
    jfi = hwa(async function (e) {
      let r;
      try {
        r = await Gfi.readdir(e);
      } catch {
        return Hfi.mkdirs(e);
      }
      return Promise.all(r.map((n) => Vfi.remove(qfi.join(e, n))));
    });
  function Qfi(t) {
    let e;
    try {
      e = Gfi.readdirSync(t);
    } catch {
      return Hfi.mkdirsSync(t);
    }
    e.forEach((r) => {
      ((r = qfi.join(t, r)), Vfi.removeSync(r));
    });
  }
  Wfi.exports = { emptyDirSync: Qfi, emptydirSync: Qfi, emptyDir: jfi, emptydir: jfi };
});