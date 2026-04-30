/**
 * @module aeo
 * @category utils/oop
 * @label oop
 * @position 1932 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aeo) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aeo = T((gxl, BEr) => {
  "use strict";
  var ZJ = Ae("path"),
    Lpu = ZZi(),
    seo = oeo();
  BEr.exports = (t, e, r) => {
    let n = new Lpu(Object.assign({}, seo.defaults, r), e);
    n.add(Object.assign({}, t), "cli");
    let o = [],
      s = !1;
    if (Ae.resolve.paths) {
      let m = Ae.resolve.paths("npm"),
        d;
      try {
        d = Ae.resolve("npm", { paths: m.slice(-1) });
      } catch {
        s = !0;
      }
      d && o.push(n.addFile(ZJ.resolve(ZJ.dirname(d), "..", "npmrc"), "builtin"));
    }
    (n.addEnv(), n.loadPrefix());
    let a = ZJ.resolve(n.localPrefix, ".npmrc"),
      u = n.get("userconfig");
    if (
      (!n.get("global") && a !== u ? o.push(n.addFile(a, "project")) : n.add({}, "project"),
      n.get("workspace-prefix") && n.get("workspace-prefix") !== a)
    ) {
      let m = ZJ.resolve(n.get("workspace-prefix"), ".npmrc");
      o.push(n.addFile(m, "workspace"));
    }
    if ((o.push(n.addFile(n.get("userconfig"), "user")), n.get("prefix"))) {
      let m = ZJ.resolve(n.get("prefix"), "etc");
      ((n.root.globalconfig = ZJ.resolve(m, "npmrc")), (n.root.globalignorefile = ZJ.resolve(m, "npmignore")));
    }
    (o.push(n.addFile(n.get("globalconfig"), "global")), n.loadUser());
    let c = n.get("cafile");
    return (c && n.loadCAFile(c), { config: n, warnings: o.filter(Boolean), failedToLoadBuiltInConfig: s });
  };
  Object.defineProperty(BEr.exports, "defaults", {
    get() {
      return seo.defaults;
    },
    enumerable: !0,
  });
});