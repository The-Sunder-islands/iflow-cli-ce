/**
 * @module sLn
 * @category utils/fs
 * @label fs
 * @position 1324 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (sLn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var sLn = T((n8c, oLn) => {
  oLn.exports = iLn;
  var eer = Ae("fs"),
    { EventEmitter: Cjs } = Ae("events"),
    { Minimatch: ZZt } = tLn(),
    { resolve: Sjs } = Ae("path");
  function wjs(t, e) {
    return new Promise((r, n) => {
      eer.readdir(t, { withFileTypes: !0 }, (o, s) => {
        if (o)
          switch (o.code) {
            case "ENOTDIR":
              e ? n(o) : r([]);
              break;
            case "ENOTSUP":
            case "ENOENT":
            case "ENAMETOOLONG":
            case "UNKNOWN":
              r([]);
              break;
            case "ELOOP":
            default:
              n(o);
              break;
          }
        else r(s);
      });
    });
  }
  function rLn(t, e) {
    return new Promise((r, n) => {
      (e ? eer.stat : eer.lstat)(t, (s, a) => {
        if (s)
          switch (s.code) {
            case "ENOENT":
              r(e ? rLn(t, !1) : null);
              break;
            default:
              r(null);
              break;
          }
        else r(a);
      });
    });
  }
  async function* nLn(t, e, r, n, o, s) {
    let a = await wjs(e + t, s);
    for (let u of a) {
      let c = u.name;
      c === void 0 && ((c = u), (n = !0));
      let m = t + "/" + c,
        d = m.slice(1),
        f = e + "/" + d,
        p = null;
      ((n || r) && (p = await rLn(f, r)),
        !p && u.name !== void 0 && (p = u),
        p === null && (p = { isDirectory: () => !1 }),
        p.isDirectory()
          ? o(d) || (yield { relative: d, absolute: f, stats: p }, yield* nLn(m, e, r, n, o, !1))
          : yield { relative: d, absolute: f, stats: p });
    }
  }
  async function* xjs(t, e, r, n) {
    yield* nLn("", t, e, r, n, !0);
  }
  function Tjs(t) {
    return {
      pattern: t.pattern,
      dot: !!t.dot,
      noglobstar: !!t.noglobstar,
      matchBase: !!t.matchBase,
      nocase: !!t.nocase,
      ignore: t.ignore,
      skip: t.skip,
      follow: !!t.follow,
      stat: !!t.stat,
      nodir: !!t.nodir,
      mark: !!t.mark,
      silent: !!t.silent,
      absolute: !!t.absolute,
    };
  }
  var Ltt = class extends Cjs {
    constructor(e, r, n) {
      if (
        (super(),
        typeof r == "function" && ((n = r), (r = null)),
        (this.options = Tjs(r || {})),
        (this.matchers = []),
        this.options.pattern)
      ) {
        let o = Array.isArray(this.options.pattern) ? this.options.pattern : [this.options.pattern];
        this.matchers = o.map(
          (s) =>
            new ZZt(s, {
              dot: this.options.dot,
              noglobstar: this.options.noglobstar,
              matchBase: this.options.matchBase,
              nocase: this.options.nocase,
            }),
        );
      }
      if (((this.ignoreMatchers = []), this.options.ignore)) {
        let o = Array.isArray(this.options.ignore) ? this.options.ignore : [this.options.ignore];
        this.ignoreMatchers = o.map((s) => new ZZt(s, { dot: !0 }));
      }
      if (((this.skipMatchers = []), this.options.skip)) {
        let o = Array.isArray(this.options.skip) ? this.options.skip : [this.options.skip];
        this.skipMatchers = o.map((s) => new ZZt(s, { dot: !0 }));
      }
      ((this.iterator = xjs(
        Sjs(e || "."),
        this.options.follow,
        this.options.stat,
        this._shouldSkipDirectory.bind(this),
      )),
        (this.paused = !1),
        (this.inactive = !1),
        (this.aborted = !1),
        n &&
          ((this._matches = []),
          this.on("match", (o) => this._matches.push(this.options.absolute ? o.absolute : o.relative)),
          this.on("error", (o) => n(o)),
          this.on("end", () => n(null, this._matches))),
        setTimeout(() => this._next(), 0));
    }
    _shouldSkipDirectory(e) {
      return this.skipMatchers.some((r) => r.match(e));
    }
    _fileMatches(e, r) {
      let n = e + (r ? "/" : "");
      return (
        (this.matchers.length === 0 || this.matchers.some((o) => o.match(n))) &&
        !this.ignoreMatchers.some((o) => o.match(n)) &&
        (!this.options.nodir || !r)
      );
    }
    _next() {
      !this.paused && !this.aborted
        ? this.iterator
            .next()
            .then((e) => {
              if (e.done) this.emit("end");
              else {
                let r = e.value.stats.isDirectory();
                if (this._fileMatches(e.value.relative, r)) {
                  let n = e.value.relative,
                    o = e.value.absolute;
                  (this.options.mark && r && ((n += "/"), (o += "/")),
                    this.options.stat
                      ? this.emit("match", { relative: n, absolute: o, stat: e.value.stats })
                      : this.emit("match", { relative: n, absolute: o }));
                }
                this._next(this.iterator);
              }
            })
            .catch((e) => {
              (this.abort(), this.emit("error", e), !e.code && !this.options.silent && console.error(e));
            })
        : (this.inactive = !0);
    }
    abort() {
      this.aborted = !0;
    }
    pause() {
      this.paused = !0;
    }
    resume() {
      ((this.paused = !1), this.inactive && ((this.inactive = !1), this._next()));
    }
  };
  function iLn(t, e, r) {
    return new Ltt(t, e, r);
  }
  iLn.ReaddirGlob = Ltt;
});