/**
 * @module aEr
 * @category unknown
 * @label unknown
 * @position 1907 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aEr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aEr = T((rwl, pXi) => {
  "use strict";
  var fXi = hJ(),
    Tfu = (t, e) => {
      let r = fXi(t, null, !0),
        n = fXi(e, null, !0),
        o = r.compare(n);
      if (o === 0) return null;
      let s = o > 0,
        a = s ? r : n,
        u = s ? n : r,
        c = !!a.prerelease.length;
      if (!!u.prerelease.length && !c) {
        if (!u.patch && !u.minor) return "major";
        if (u.compareMain(a) === 0) return u.minor && !u.patch ? "minor" : "patch";
      }
      let d = c ? "pre" : "";
      return r.major !== n.major
        ? d + "major"
        : r.minor !== n.minor
          ? d + "minor"
          : r.patch !== n.patch
            ? d + "patch"
            : "prerelease";
    };
  pXi.exports = Tfu;
});