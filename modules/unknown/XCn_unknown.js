/**
 * @module XCn
 * @category unknown
 * @label unknown
 * @position 1031 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (XCn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var XCn = T((JCn) => {
  "use strict";
  var RCs = WVt(),
    kCs = KCn(),
    OCs = function (t, e) {
      var r = t || e,
        n = RCs[r];
      if (!n) throw new Error(r + " is not a valid compression method !");
      return n;
    };
  JCn.generateWorker = function (t, e, r) {
    var n = new kCs(e.streamFiles, r, e.platform, e.encodeFileName),
      o = 0;
    try {
      (t.forEach(function (s, a) {
        o++;
        var u = OCs(a.options.compression, e.compression),
          c = a.options.compressionOptions || e.compressionOptions || {},
          m = a.dir,
          d = a.date;
        a._compressWorker(u, c)
          .withStreamInfo("file", {
            name: s,
            dir: m,
            date: d,
            comment: a.comment || "",
            unixPermissions: a.unixPermissions,
            dosPermissions: a.dosPermissions,
          })
          .pipe(n);
      }),
        (n.entriesCount = o));
    } catch (s) {
      n.error(s);
    }
    return n;
  };
});