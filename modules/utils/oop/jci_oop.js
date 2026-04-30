/**
 * @module jci
 * @category utils/oop
 * @label oop
 * @position 1617 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jci) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jci = T((ry) => {
  "use strict";
  var B6a =
    (ry && ry.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  Object.defineProperty(ry, "__esModule", { value: !0 });
  var L6a = Ae("fs"),
    M6a = B6a(Iee()),
    Y0e = M6a.default("@kwsites/file-exists");
  function F6a(t, e, r) {
    Y0e("checking %s", t);
    try {
      let n = L6a.statSync(t);
      return n.isFile() && e
        ? (Y0e("[OK] path represents a file"), !0)
        : n.isDirectory() && r
          ? (Y0e("[OK] path represents a directory"), !0)
          : (Y0e("[FAIL] path represents something other than a file or directory"), !1);
    } catch (n) {
      if (n.code === "ENOENT") return (Y0e("[FAIL] path is not accessible: %o", n), !1);
      throw (Y0e("[FATAL] %o", n), n);
    }
  }
  function U6a(t, e = ry.READABLE) {
    return F6a(t, (e & ry.FILE) > 0, (e & ry.FOLDER) > 0);
  }
  ry.exists = U6a;
  ry.FILE = 1;
  ry.FOLDER = 2;
  ry.READABLE = ry.FILE + ry.FOLDER;
});