/**
 * @module NA
 * @category unknown
 * @label unknown
 * @position 1863 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (NA) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var NA = T((Nal, q$i) => {
  "use strict";
  var v3t = wTe(),
    { MAX_LENGTH: G$i, MAX_SAFE_INTEGER: C3t } = xTe(),
    { safeRe: S3t, t: w3t } = w1e(),
    tsu = E3t(),
    { compareIdentifiers: e6r } = Z9r(),
    t6r = class t {
      constructor(e, r) {
        if (((r = tsu(r)), e instanceof t)) {
          if (e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease) return e;
          e = e.version;
        } else if (typeof e != "string")
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
        if (e.length > G$i) throw new TypeError(`version is longer than ${G$i} characters`);
        (v3t("SemVer", e, r),
          (this.options = r),
          (this.loose = !!r.loose),
          (this.includePrerelease = !!r.includePrerelease));
        let n = e.trim().match(r.loose ? S3t[w3t.LOOSE] : S3t[w3t.FULL]);
        if (!n) throw new TypeError(`Invalid Version: ${e}`);
        if (
          ((this.raw = e),
          (this.major = +n[1]),
          (this.minor = +n[2]),
          (this.patch = +n[3]),
          this.major > C3t || this.major < 0)
        )
          throw new TypeError("Invalid major version");
        if (this.minor > C3t || this.minor < 0) throw new TypeError("Invalid minor version");
        if (this.patch > C3t || this.patch < 0) throw new TypeError("Invalid patch version");
        (n[4]
          ? (this.prerelease = n[4].split(".").map((o) => {
              if (/^[0-9]+$/.test(o)) {
                let s = +o;
                if (s >= 0 && s < C3t) return s;
              }
              return o;
            }))
          : (this.prerelease = []),
          (this.build = n[5] ? n[5].split(".") : []),
          this.format());
      }
      format() {
        return (
          (this.version = `${this.major}.${this.minor}.${this.patch}`),
          this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`),
          this.version
        );
      }
      toString() {
        return this.version;
      }
      compare(e) {
        if ((v3t("SemVer.compare", this.version, this.options, e), !(e instanceof t))) {
          if (typeof e == "string" && e === this.version) return 0;
          e = new t(e, this.options);
        }
        return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
      }
      compareMain(e) {
        return (
          e instanceof t || (e = new t(e, this.options)),
          this.major < e.major
            ? -1
            : this.major > e.major
              ? 1
              : this.minor < e.minor
                ? -1
                : this.minor > e.minor
                  ? 1
                  : this.patch < e.patch
                    ? -1
                    : this.patch > e.patch
                      ? 1
                      : 0
        );
      }
      comparePre(e) {
        if ((e instanceof t || (e = new t(e, this.options)), this.prerelease.length && !e.prerelease.length)) return -1;
        if (!this.prerelease.length && e.prerelease.length) return 1;
        if (!this.prerelease.length && !e.prerelease.length) return 0;
        let r = 0;
        do {
          let n = this.prerelease[r],
            o = e.prerelease[r];
          if ((v3t("prerelease compare", r, n, o), n === void 0 && o === void 0)) return 0;
          if (o === void 0) return 1;
          if (n === void 0) return -1;
          if (n === o) continue;
          return e6r(n, o);
        } while (++r);
      }
      compareBuild(e) {
        e instanceof t || (e = new t(e, this.options));
        let r = 0;
        do {
          let n = this.build[r],
            o = e.build[r];
          if ((v3t("build compare", r, n, o), n === void 0 && o === void 0)) return 0;
          if (o === void 0) return 1;
          if (n === void 0) return -1;
          if (n === o) continue;
          return e6r(n, o);
        } while (++r);
      }
      inc(e, r, n) {
        if (e.startsWith("pre")) {
          if (!r && n === !1) throw new Error("invalid increment argument: identifier is empty");
          if (r) {
            let o = `-${r}`.match(this.options.loose ? S3t[w3t.PRERELEASELOOSE] : S3t[w3t.PRERELEASE]);
            if (!o || o[1] !== r) throw new Error(`invalid identifier: ${r}`);
          }
        }
        switch (e) {
          case "premajor":
            ((this.prerelease.length = 0), (this.patch = 0), (this.minor = 0), this.major++, this.inc("pre", r, n));
            break;
          case "preminor":
            ((this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc("pre", r, n));
            break;
          case "prepatch":
            ((this.prerelease.length = 0), this.inc("patch", r, n), this.inc("pre", r, n));
            break;
          case "prerelease":
            (this.prerelease.length === 0 && this.inc("patch", r, n), this.inc("pre", r, n));
            break;
          case "release":
            if (this.prerelease.length === 0) throw new Error(`version ${this.raw} is not a prerelease`);
            this.prerelease.length = 0;
            break;
          case "major":
            ((this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++,
              (this.minor = 0),
              (this.patch = 0),
              (this.prerelease = []));
            break;
          case "minor":
            ((this.patch !== 0 || this.prerelease.length === 0) && this.minor++,
              (this.patch = 0),
              (this.prerelease = []));
            break;
          case "patch":
            (this.prerelease.length === 0 && this.patch++, (this.prerelease = []));
            break;
          case "pre": {
            let o = Number(n) ? 1 : 0;
            if (this.prerelease.length === 0) this.prerelease = [o];
            else {
              let s = this.prerelease.length;
              for (; --s >= 0; ) typeof this.prerelease[s] == "number" && (this.prerelease[s]++, (s = -2));
              if (s === -1) {
                if (r === this.prerelease.join(".") && n === !1)
                  throw new Error("invalid increment argument: identifier already exists");
                this.prerelease.push(o);
              }
            }
            if (r) {
              let s = [r, o];
              (n === !1 && (s = [r]),
                e6r(this.prerelease[0], r) === 0
                  ? isNaN(this.prerelease[1]) && (this.prerelease = s)
                  : (this.prerelease = s));
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${e}`);
        }
        return ((this.raw = this.format()), this.build.length && (this.raw += `+${this.build.join(".")}`), this);
      }
    };
  q$i.exports = t6r;
});