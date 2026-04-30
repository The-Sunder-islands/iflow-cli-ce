/**
 * @module Dno
 * @category utils/events
 * @label events
 * @position 1985 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Dno) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Dno = T((WIl, Tno) => {
  "use strict";
  Tno.exports = Obu;
  var kbu = Ae("stream"),
    xno = DAt();
  function Obu(t) {
    return t ? Nbu(t) : Pbu(t);
  }
  function Nbu(t) {
    let e = new xno();
    return (
      t.setEncoding("utf8"),
      new Promise((r, n) => {
        let o,
          s = !1,
          a = !1;
        function u() {
          if (((s = !0), !o))
            try {
              r(e.finish());
            } catch (d) {
              n(d);
            }
        }
        function c(d) {
          ((a = !0), n(d));
        }
        (t.once("end", u), t.once("error", c), m());
        function m() {
          o = !0;
          let d;
          for (; (d = t.read()) !== null; )
            try {
              e.parse(d);
            } catch (f) {
              return c(f);
            }
          if (((o = !1), s)) return u();
          a || t.once("readable", m);
        }
      })
    );
  }
  function Pbu() {
    let t = new xno();
    return new kbu.Transform({
      objectMode: !0,
      transform(e, r, n) {
        try {
          t.parse(e.toString(r));
        } catch (o) {
          this.emit("error", o);
        }
        n();
      },
      flush(e) {
        try {
          this.push(t.finish());
        } catch (r) {
          this.emit("error", r);
        }
        e();
      },
    });
  }
});