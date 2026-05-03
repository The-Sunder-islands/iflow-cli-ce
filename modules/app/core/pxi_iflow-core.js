/**
 * @module pxi
 * @category app/core
 * @label iflow-core
 * @position 1824 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pxi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class extends
 * Features: esbuild module exports: pxi
 * === End semantic info ===
 */


var pxi = T((Q2r) => {
  "use strict";
  var Jja = Ae("fs"),
    Xja = ep(),
    Zja = Ae("stream"),
    R1t = class extends Zja.Writable {
      hash;
      constructor(e, r) {
        (super(r), (this.hash = e));
      }
      _write(e, r, n) {
        try {
          this.hash.update(Xja.toUint8Array(e));
        } catch (o) {
          return n(o);
        }
        n();
      }
    },
    eQa = (t, e) =>
      new Promise((r, n) => {
        if (!tQa(e)) {
          n(new Error("Unable to calculate hash for non-file streams."));
          return;
        }
        let o = Jja.createReadStream(e.path, { start: e.start, end: e.end }),
          s = new t(),
          a = new R1t(s);
        (o.pipe(a),
          o.on("error", (u) => {
            (a.end(), n(u));
          }),
          a.on("error", n),
          a.on("finish", function () {
            s.digest().then(r).catch(n);
          }));
      }),
    tQa = (t) => typeof t.path == "string",
    rQa = (t, e) => {
      if (e.readableFlowing !== null) throw new Error("Unable to calculate hash for flowing readable stream");
      let r = new t(),
        n = new R1t(r);
      return (
        e.pipe(n),
        new Promise((o, s) => {
          (e.on("error", (a) => {
            (n.end(), s(a));
          }),
            n.on("error", s),
            n.on("finish", () => {
              r.digest().then(o).catch(s);
            }));
        })
      );
    };
  Q2r.fileStreamHasher = eQa;
  Q2r.readableStreamHasher = rQa;
});