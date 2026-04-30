/**
 * @module WXt
 * @category utils/oop
 * @label oop
 * @position 1291 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (WXt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var WXt = T((rtt) => {
  "use strict";
  Object.defineProperty(rtt, "__esModule", { value: !0 });
  rtt.CsvFormatterStream = void 0;
  var gMs = Ae("stream"),
    bMs = gPn(),
    VXt = class extends gMs.Transform {
      constructor(e) {
        (super({ writableObjectMode: e.objectMode }),
          (this.hasWrittenBOM = !1),
          (this.formatterOptions = e),
          (this.rowFormatter = new bMs.RowFormatter(e)),
          (this.hasWrittenBOM = !e.writeBOM));
      }
      transform(e) {
        return ((this.rowFormatter.rowTransform = e), this);
      }
      _transform(e, r, n) {
        let o = !1;
        try {
          (this.hasWrittenBOM || (this.push(this.formatterOptions.BOM), (this.hasWrittenBOM = !0)),
            this.rowFormatter.format(e, (s, a) =>
              s
                ? ((o = !0), n(s))
                : (a &&
                    a.forEach((u) => {
                      this.push(Buffer.from(u, "utf8"));
                    }),
                  (o = !0),
                  n()),
            ));
        } catch (s) {
          if (o) throw s;
          n(s);
        }
      }
      _flush(e) {
        this.rowFormatter.finish((r, n) =>
          r
            ? e(r)
            : (n &&
                n.forEach((o) => {
                  this.push(Buffer.from(o, "utf8"));
                }),
              e()),
        );
      }
    };
  rtt.CsvFormatterStream = VXt;
});