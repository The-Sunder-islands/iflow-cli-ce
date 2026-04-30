/**
 * @module NDe
 * @category utils/versioning
 * @label versioning
 * @position 1953 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (NDe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var NDe = T((Fxl, rto) => {
  "use strict";
  var PDe = Symbol("SemVer ANY"),
    qEr = class t {
      static get ANY() {
        return PDe;
      }
      constructor(e, r) {
        if (((r = Jeo(r)), e instanceof t)) {
          if (e.loose === !!r.loose) return e;
          e = e.value;
        }
        ((e = e.trim().split(/\s+/).join(" ")),
          GEr("comparator", e, r),
          (this.options = r),
          (this.loose = !!r.loose),
          this.parse(e),
          this.semver === PDe ? (this.value = "") : (this.value = this.operator + this.semver.version),
          GEr("comp", this));
      }
      parse(e) {
        let r = this.options.loose ? Xeo[Zeo.COMPARATORLOOSE] : Xeo[Zeo.COMPARATOR],
          n = e.match(r);
        if (!n) throw new TypeError(`Invalid comparator: ${e}`);
        ((this.operator = n[1] !== void 0 ? n[1] : ""),
          this.operator === "=" && (this.operator = ""),
          n[2] ? (this.semver = new eto(n[2], this.options.loose)) : (this.semver = PDe));
      }
      toString() {
        return this.value;
      }
      test(e) {
        if ((GEr("Comparator.test", e, this.options.loose), this.semver === PDe || e === PDe)) return !0;
        if (typeof e == "string")
          try {
            e = new eto(e, this.options);
          } catch {
            return !1;
          }
        return QEr(e, this.operator, this.semver, this.options);
      }
      intersects(e, r) {
        if (!(e instanceof t)) throw new TypeError("a Comparator is required");
        return this.operator === ""
          ? this.value === ""
            ? !0
            : new tto(e.value, r).test(this.value)
          : e.operator === ""
            ? e.value === ""
              ? !0
              : new tto(this.value, r).test(e.semver)
            : ((r = Jeo(r)),
              (r.includePrerelease && (this.value === "<0.0.0-0" || e.value === "<0.0.0-0")) ||
              (!r.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0")))
                ? !1
                : !!(
                    (this.operator.startsWith(">") && e.operator.startsWith(">")) ||
                    (this.operator.startsWith("<") && e.operator.startsWith("<")) ||
                    (this.semver.version === e.semver.version &&
                      this.operator.includes("=") &&
                      e.operator.includes("=")) ||
                    (QEr(this.semver, "<", e.semver, r) &&
                      this.operator.startsWith(">") &&
                      e.operator.startsWith("<")) ||
                    (QEr(this.semver, ">", e.semver, r) && this.operator.startsWith("<") && e.operator.startsWith(">"))
                  ));
      }
    };
  rto.exports = qEr;
  var Jeo = E3t(),
    { safeRe: Xeo, t: Zeo } = w1e(),
    QEr = FEr(),
    GEr = wTe(),
    eto = NA(),
    tto = Yv();
});