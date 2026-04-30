/**
 * @module Afr
 * @category app/agent
 * @label iflow-agent
 * @position 1625 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Afr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Afr = T((cFc, bdi) => {
  "use strict";
  var hdi = pdi(),
    ACa = tSe();
  function gdi(t, e, r = !1) {
    return (
      e && (e.windows === null || e.windows === void 0) && (e = { ...e, windows: ACa.isWindows() }),
      hdi(t, e, r)
    );
  }
  Object.assign(gdi, hdi);
  bdi.exports = gdi;
});
import Rct from "node:fs";
import Adi from "node:path";
function Efr(t) {
  let e = new _fr();
  if (t.useGitignore) {
    let n = Adi.join(t.projectRoot, ".gitignore");
    Rct.existsSync(n) && e.add(Rct.readFileSync(n, "utf8"));
  }
  if (t.useGeminiignore) {
    let n = Adi.join(t.projectRoot, ".iflowignore");
    Rct.existsSync(n) && e.add(Rct.readFileSync(n, "utf8"));
  }
  let r = [".git", ...t.ignoreDirs];
  return (e.add(r.map((n) => (n.endsWith("/") ? n : `${n}/`))), e);
}
var yfr,
  ydi,
  yCa,
  _fr,
  _di = j(() => {
    "use strict";
    ((yfr = Se(Zdr(), 1)), (ydi = Se(Afr(), 1)));
    yCa = (0, ydi.default)("**/*[*.]*");
    _fr = class {
      allPatterns = [];
      dirIgnorer = (0, yfr.default)();
      fileIgnorer = (0, yfr.default)();
      add(e) {
        typeof e == "string" && (e = e.split(/\r?\n/));
        for (let r of e) {
          let n = r.trim();
          if (n === "" || n.startsWith("#")) continue;
          (this.allPatterns.push(n),
            n.endsWith("/") && !n.startsWith("!")
              ? this.dirIgnorer.add(n)
              : (this.fileIgnorer.add(n), yCa(n) || this.dirIgnorer.add(n)));
        }
        return this;
      }
      getDirectoryFilter() {
        return (e) => this.dirIgnorer.ignores(e);
      }
      getFileFilter() {
        return (e) => this.fileIgnorer.ignores(e);
      }
      getFingerprint() {
        return this.allPatterns.join(`
`);
      }
    };
  });
var kct,
  Edi = j(() => {
    "use strict";
    kct = class {
      allFiles;
      cache;
      hits = 0;
      misses = 0;
      constructor(e) {
        ((this.allFiles = e), (this.cache = new Map()));
      }
      async get(e) {
        if (this.cache.has(e)) return (this.hits++, { files: this.cache.get(e), isExactMatch: !0 });
        this.misses++;
        let n = "";
        for (let s of this.cache?.keys?.() ?? []) e.startsWith(s) && s.length > n.length && (n = s);
        return { files: n ? this.cache.get(n) : this.allFiles, isExactMatch: !1 };
      }
      set(e, r) {
        this.cache.set(e, r);
      }
    };
  });
import { createRequire as _Ca } from "module";
import { basename as ECa, dirname as Cfr, normalize as vCa, relative as CCa, resolve as SCa, sep as Sdi } from "path";
import * as wCa from "fs";
function xCa(t) {
  let e = vCa(t);
  return (e.length > 1 && e[e.length - 1] === Sdi && (e = e.substring(0, e.length - 1)), e);
}
function wdi(t, e) {
  return t.replace(TCa, e);
}
function ICa(t) {
  return t === "/" || DCa.test(t);
}
function vfr(t, e) {
  let { resolvePaths: r, normalizePath: n, pathSeparator: o } = e,
    s = (process.platform === "win32" && t.includes("/")) || t.startsWith(".");
  if ((r && (t = SCa(t)), (n || s) && (t = xCa(t)), t === ".")) return "";
  let a = t[t.length - 1] !== o;
  return wdi(a ? t + o : t, o);
}
function xdi(t, e) {
  return e + t;
}
function RCa(t, e) {
  return function (r, n) {
    return n.startsWith(t) ? n.slice(t.length) + r : wdi(CCa(t, n), e.pathSeparator) + e.pathSeparator + r;
  };
}
function kCa(t) {
  return t;
}
function OCa(t, e, r) {
  return e + t + r;
}
function NCa(t, e) {
  let { relativePaths: r, includeBasePath: n } = e;
  return r && t ? RCa(t, e) : n ? xdi : kCa;
}
function PCa(t) {
  return function (e, r) {
    r.push(e.substring(t.length) || ".");
  };
}
function BCa(t) {
  return function (e, r, n) {
    let o = e.substring(t.length) || ".";
    n.every((s) => s(o, !0)) && r.push(o);
  };
}
function UCa(t, e) {
  let { includeDirs: r, filters: n, relativePaths: o } = e;
  return r ? (o ? (n && n.length ? BCa(t) : PCa(t)) : n && n.length ? MCa : LCa) : FCa;
}
function HCa(t) {
  let { excludeFiles: e, filters: r, onlyCounts: n } = t;
  return e ? qCa : r && r.length ? (n ? $Ca : jCa) : n ? QCa : GCa;
}
function zCa(t) {
  return t.group ? WCa : VCa;
}
function JCa(t) {
  return t.group ? YCa : KCa;
}
function e4a(t, e) {
  return !t.resolveSymlinks || t.excludeSymlinks ? null : e ? ZCa : XCa;
}
function Tdi(t, e, r) {
  if (r.options.useRealPaths) return t4a(e, r);
  let n = Cfr(t),
    o = 1;
  for (; n !== r.root && o < 2; ) {
    let s = r.symlinks.get(n);
    !!s && (s === e || s.startsWith(e) || e.startsWith(s)) ? o++ : (n = Cfr(n));
  }
  return (r.symlinks.set(t, e), o > 1);
}
function t4a(t, e) {
  return e.visited.includes(t + e.options.pathSeparator);
}
function Oct(t, e, r, n) {
  e(t && !n ? t : null, r);
}
function l4a(t, e) {
  let { onlyCounts: r, group: n, maxFiles: o } = t;
  return r ? (e ? r4a : s4a) : n ? (e ? n4a : c4a) : o ? (e ? o4a : u4a) : e ? i4a : a4a;
}
function f4a(t) {
  return t ? d4a : m4a;
}
function b4a(t, e) {
  return new Promise((r, n) => {
    Rdi(t, e, (o, s) => {
      if (o) return n(o);
      r(s);
    });
  });
}
function Rdi(t, e, r) {
  new Idi(t, e, r).start();
}
function A4a(t, e) {
  return new Idi(t, e).start();
}
var vdi,
  TCa,
  DCa,
  LCa,
  MCa,
  FCa,
  $Ca,
  jCa,
  QCa,
  GCa,
  qCa,
  VCa,
  WCa,
  YCa,
  KCa,
  XCa,
  ZCa,
  r4a,
  n4a,
  i4a,
  o4a,
  s4a,
  a4a,
  u4a,
  c4a,
  Ddi,
  m4a,
  d4a,
  p4a,
  h4a,
  g4a,
  Idi,
  Cdi,
  kdi,
  Odi,
  Ndi = j(() => {
    vdi = _Ca(import.meta.url);
    TCa = /[\\/]/g;
    DCa = /^[a-z]:[\\/]$/i;
    ((LCa = (t, e) => {
      e.push(t || ".");
    }),
      (MCa = (t, e, r) => {
        let n = t || ".";
        r.every((o) => o(n, !0)) && e.push(n);
      }),
      (FCa = () => {}));
    (($Ca = (t, e, r, n) => {
      n.every((o) => o(t, !1)) && r.files++;
    }),
      (jCa = (t, e, r, n) => {
        n.every((o) => o(t, !1)) && e.push(t);
      }),
      (QCa = (t, e, r, n) => {
        r.files++;
      }),
      (GCa = (t, e) => {
        e.push(t);
      }),
      (qCa = () => {}));
    ((VCa = (t) => t), (WCa = () => [""].slice(0, 0)));
    ((YCa = (t, e, r) => {
      t.push({ directory: e, files: r, dir: e });
    }),
      (KCa = () => {}));
    ((XCa = function (t, e, r) {
      let {
        queue: n,
        fs: o,
        options: { suppressErrors: s },
      } = e;
      (n.enqueue(),
        o.realpath(t, (a, u) => {
          if (a) return n.dequeue(s ? null : a, e);
          o.stat(u, (c, m) => {
            if (c) return n.dequeue(s ? null : c, e);
            if (m.isDirectory() && Tdi(t, u, e)) return n.dequeue(null, e);
            (r(m, u), n.dequeue(null, e));
          });
        }));
    }),
      (ZCa = function (t, e, r) {
        let {
          queue: n,
          fs: o,
          options: { suppressErrors: s },
        } = e;
        n.enqueue();
        try {
          let a = o.realpathSync(t),
            u = o.statSync(a);
          if (u.isDirectory() && Tdi(t, a, e)) return;
          r(u, a);
        } catch (a) {
          if (!s) throw a;
        }
      }));
    ((r4a = (t) => t.counts),
      (n4a = (t) => t.groups),
      (i4a = (t) => t.paths),
      (o4a = (t) => t.paths.slice(0, t.options.maxFiles)),
      (s4a = (t, e, r) => (Oct(e, r, t.counts, t.options.suppressErrors), null)),
      (a4a = (t, e, r) => (Oct(e, r, t.paths, t.options.suppressErrors), null)),
      (u4a = (t, e, r) => (Oct(e, r, t.paths.slice(0, t.options.maxFiles), t.options.suppressErrors), null)),
      (c4a = (t, e, r) => (Oct(e, r, t.groups, t.options.suppressErrors), null)));
    ((Ddi = { withFileTypes: !0 }),
      (m4a = (t, e, r, n, o) => {
        if ((t.queue.enqueue(), n < 0)) return t.queue.dequeue(null, t);
        let { fs: s } = t;
        (t.visited.push(e),
          t.counts.directories++,
          s.readdir(e || ".", Ddi, (a, u = []) => {
            (o(u, r, n), t.queue.dequeue(t.options.suppressErrors ? null : a, t));
          }));
      }),
      (d4a = (t, e, r, n, o) => {
        let { fs: s } = t;
        if (n < 0) return;
        (t.visited.push(e), t.counts.directories++);
        let a = [];
        try {
          a = s.readdirSync(e || ".", Ddi);
        } catch (u) {
          if (!t.options.suppressErrors) throw u;
        }
        o(a, r, n);
      }));
    ((p4a = class {
      count = 0;
      constructor(t) {
        this.onQueueEmpty = t;
      }
      enqueue() {
        return (this.count++, this.count);
      }
      dequeue(t, e) {
        this.onQueueEmpty &&
          (--this.count <= 0 || t) &&
          (this.onQueueEmpty(t, e), t && (e.controller.abort(), (this.onQueueEmpty = void 0)));
      }
    }),
      (h4a = class {
        _files = 0;
        _directories = 0;
        set files(t) {
          this._files = t;
        }
        get files() {
          return this._files;
        }
        set directories(t) {
          this._directories = t;
        }
        get directories() {
          return this._directories;
        }
        get dirs() {
          return this._directories;
        }
      }),
      (g4a = class {
        aborted = !1;
        abort() {
          this.aborted = !0;
        }
      }),
      (Idi = class {
        root;
        isSynchronous;
        state;
        joinPath;
        pushDirectory;
        pushFile;
        getArray;
        groupFiles;
        resolveSymlink;
        walkDirectory;
        callbackInvoker;
        constructor(t, e, r) {
          ((this.isSynchronous = !r),
            (this.callbackInvoker = l4a(e, this.isSynchronous)),
            (this.root = vfr(t, e)),
            (this.state = {
              root: ICa(this.root) ? this.root : this.root.slice(0, -1),
              paths: [""].slice(0, 0),
              groups: [],
              counts: new h4a(),
              options: e,
              queue: new p4a((n, o) => this.callbackInvoker(o, n, r)),
              symlinks: new Map(),
              visited: [""].slice(0, 0),
              controller: new g4a(),
              fs: e.fs || wCa,
            }),
            (this.joinPath = NCa(this.root, e)),
            (this.pushDirectory = UCa(this.root, e)),
            (this.pushFile = HCa(e)),
            (this.getArray = zCa(e)),
            (this.groupFiles = JCa(e)),
            (this.resolveSymlink = e4a(e, this.isSynchronous)),
            (this.walkDirectory = f4a(this.isSynchronous)));
        }
        start() {
          return (
            this.pushDirectory(this.root, this.state.paths, this.state.options.filters),
            this.walkDirectory(this.state, this.root, this.root, this.state.options.maxDepth, this.walk),
            this.isSynchronous ? this.callbackInvoker(this.state, null) : null
          );
        }
        walk = (t, e, r) => {
          let {
            paths: n,
            options: {
              filters: o,
              resolveSymlinks: s,
              excludeSymlinks: a,
              exclude: u,
              maxFiles: c,
              signal: m,
              useRealPaths: d,
              pathSeparator: f,
            },
            controller: p,
          } = this.state;
          if (p.aborted || (m && m.aborted) || (c && n.length > c)) return;
          let h = this.getArray(this.state.paths);
          for (let g = 0; g < t.length; ++g) {
            let b = t[g];
            if (b.isFile() || (b.isSymbolicLink() && !s && !a)) {
              let A = this.joinPath(b.name, e);
              this.pushFile(A, h, this.state.counts, o);
            } else if (b.isDirectory()) {
              let A = OCa(b.name, e, this.state.options.pathSeparator);
              if (u && u(b.name, A)) continue;
              (this.pushDirectory(A, n, o), this.walkDirectory(this.state, A, A, r - 1, this.walk));
            } else if (this.resolveSymlink && b.isSymbolicLink()) {
              let A = xdi(b.name, e);
              this.resolveSymlink(A, this.state, (y, E) => {
                if (y.isDirectory()) {
                  if (((E = vfr(E, this.state.options)), u && u(b.name, d ? E : A + f))) return;
                  this.walkDirectory(this.state, E, d ? E : A + f, r - 1, this.walk);
                } else {
                  E = d ? E : A;
                  let v = ECa(E),
                    C = vfr(Cfr(E), this.state.options);
                  ((E = this.joinPath(v, C)), this.pushFile(E, h, this.state.counts, o));
                }
              });
            }
          }
          this.groupFiles(this.state.groups, e, h);
        };
      }));
    ((Cdi = class {
      constructor(t, e) {
        ((this.root = t), (this.options = e));
      }
      withPromise() {
        return b4a(this.root, this.options);
      }
      withCallback(t) {
        Rdi(this.root, this.options, t);
      }
      sync() {
        return A4a(this.root, this.options);
      }
    }),
      (kdi = null));
    try {
      (vdi.resolve("picomatch"), (kdi = vdi("picomatch")));
    } catch {}
    Odi = class {
      globCache = {};
      options = { maxDepth: 1 / 0, suppressErrors: !0, pathSeparator: Sdi, filters: [] };
      globFunction;
      constructor(t) {
        ((this.options = { ...this.options, ...t }), (this.globFunction = this.options.globFunction));
      }
      group() {
        return ((this.options.group = !0), this);
      }
      withPathSeparator(t) {
        return ((this.options.pathSeparator = t), this);
      }
      withBasePath() {
        return ((this.options.includeBasePath = !0), this);
      }
      withRelativePaths() {
        return ((this.options.relativePaths = !0), this);
      }
      withDirs() {
        return ((this.options.includeDirs = !0), this);
      }
      withMaxDepth(t) {
        return ((this.options.maxDepth = t), this);
      }
      withMaxFiles(t) {
        return ((this.options.maxFiles = t), this);
      }
      withFullPaths() {
        return ((this.options.resolvePaths = !0), (this.options.includeBasePath = !0), this);
      }
      withErrors() {
        return ((this.options.suppressErrors = !1), this);
      }
      withSymlinks({ resolvePaths: t = !0 } = {}) {
        return ((this.options.resolveSymlinks = !0), (this.options.useRealPaths = t), this.withFullPaths());
      }
      withAbortSignal(t) {
        return ((this.options.signal = t), this);
      }
      normalize() {
        return ((this.options.normalizePath = !0), this);
      }
      filter(t) {
        return (this.options.filters.push(t), this);
      }
      onlyDirs() {
        return ((this.options.excludeFiles = !0), (this.options.includeDirs = !0), this);
      }
      exclude(t) {
        return ((this.options.exclude = t), this);
      }
      onlyCounts() {
        return ((this.options.onlyCounts = !0), this);
      }
      crawl(t) {
        return new Cdi(t || ".", this.options);
      }
      withGlobFunction(t) {
        return ((this.globFunction = t), this);
      }
      crawlWithOptions(t, e) {
        return ((this.options = { ...this.options, ...e }), new Cdi(t || ".", this.options));
      }
      glob(...t) {
        return this.globFunction ? this.globWithOptions(t) : this.globWithOptions(t, { dot: !0 });
      }
      globWithOptions(t, ...e) {
        let r = this.globFunction || kdi;
        if (!r) throw new Error("Please specify a glob function to use glob matching.");
        var n = this.globCache[t.join("\0")];
        return (
          n || ((n = r(t, ...e)), (this.globCache[t.join("\0")] = n)),
          this.options.filters.push((o) => n(o)),
          this
        );
      }
    };
  });
import y4a from "node:crypto";
var Sfr,
  Nct,
  wfr,
  Pdi,
  Bdi,
  Ldi = j(() => {
    "use strict";
    ((Sfr = new Map()),
      (Nct = new Map()),
      (wfr = (t, e, r) => {
        let n = y4a.createHash("sha256");
        return (n.update(t), n.update(e), r !== void 0 && n.update(String(r)), n.digest("hex"));
      }),
      (Pdi = (t) => Sfr.get(t)),
      (Bdi = (t, e, r) => {
        (Nct.has(t) && clearTimeout(Nct.get(t)), Sfr.set(t, e));
        let n = setTimeout(() => {
          (Sfr.delete(t), Nct.delete(t));
        }, r);
        Nct.set(t, n);
      }));
  });
import nSe from "node:path";
function Mdi(t) {
  return t.split(nSe.sep).join(nSe.posix.sep);
}
async function xfr(t) {
  if (t.cache) {
    let a = wfr(t.crawlDirectory, t.ignore.getFingerprint(), t.maxDepth),
      u = Pdi(a);
    if (u) return u;
  }
  let e = Mdi(t.cwd),
    r = Mdi(t.crawlDirectory),
    n;
  try {
    let a = t.ignore.getDirectoryFilter(),
      u = new Odi()
        .withRelativePaths()
        .withDirs()
        .withPathSeparator("/")
        .exclude((c, m) => {
          let d = nSe.posix.relative(r, m);
          return a(`${d}/`);
        });
    (t.maxDepth !== void 0 && u.withMaxDepth(t.maxDepth), (n = await u.crawl(t.crawlDirectory).withPromise()));
  } catch {
    return [];
  }
  let o = nSe.posix.relative(e, r),
    s = n.map((a) => nSe.posix.join(o, a));
  if (t.cache) {
    let a = wfr(t.crawlDirectory, t.ignore.getFingerprint(), t.maxDepth);
    Bdi(a, s, t.cacheTtl * 1e3);
  }
  return s;
}
var Fdi = j(() => {
  "use strict";
  Ndi();
  Ldi();
});
function cSe(t) {
  if (t < 192 || t > 8580) return t;
  let e = kfr[t];
  return e !== void 0 ? e.codePointAt(0) : t;
}
function r$(t, e) {
  return t > e ? t : e;
}
function rme(t, e, r) {
  return r ? t : e - t - 1;
}
function Dfr(t) {
  return t ? new Set() : null;
}
function iSe(t, e, r) {
  if (e !== null && e.i16.length > t + r) {
    let n = e.i16.subarray(t, t + r);
    return [t + r, n];
  }
  return [t, new Int16Array(r)];
}
function Udi(t, e, r) {
  if (e !== null && e.i32.length > t + r) {
    let n = e.i32.subarray(t, t + r);
    return [t + r, n];
  }
  return [t, new Int32Array(r)];
}
function Vdi(t) {
  return t >= Qdi && t <= Gdi ? 1 : t >= oSe && t <= sSe ? 2 : t >= v4a && t <= C4a ? 4 : 0;
}
function Wdi(t) {
  let e = String.fromCodePoint(t);
  return e !== e.toUpperCase()
    ? 1
    : e !== e.toLowerCase()
      ? 2
      : e.match(/\p{Number}/gu) !== null
        ? 4
        : e.match(/\p{Letter}/gu) !== null
          ? 3
          : 0;
}
function Bct(t) {
  return t <= nme ? Vdi(t) : Wdi(t);
}
function Ofr(t, e) {
  return t === 0 && e !== 0 ? WY : (t === 1 && e === 2) || (t !== 4 && e === 4) ? w4a : e === 0 ? S4a : 0;
}
function x4a(t, e) {
  return e === 0 ? WY : Ofr(Bct(t[e - 1]), Bct(t[e]));
}
function T4a(t, e, r, n) {
  let o = t.slice(n),
    s = o.indexOf(r);
  if (s === 0) return n;
  if (!e && r >= Qdi && r <= Gdi) {
    s > 0 && (o = o.slice(0, s));
    let a = o.indexOf(r - 32);
    a >= 0 && (s = a);
  }
  return s < 0 ? -1 : n + s;
}
function $di(t) {
  for (let e of t) if (e >= 128) return !1;
  return !0;
}
function Nfr(t, e, r) {
  if (!$di(t)) return 0;
  if (!$di(e)) return -1;
  let n = 0,
    o = 0;
  for (let s = 0; s < e.length; s++) {
    if (((o = T4a(t, r, e[s], o)), o < 0)) return -1;
    (s === 0 && o > 0 && (n = o - 1), o++);
  }
  return n;
}
function zdi(t, e, r, n, o, s, a) {
  let u = 0,
    c = 0,
    m = !1,
    d = 0,
    f = 0,
    p = Dfr(a),
    h = 0;
  o > 0 && (h = Bct(r[o - 1]));
  for (let g = o; g < s; g++) {
    let b = r[g],
      A = Bct(b);
    if (
      (t || (b >= oSe && b <= sSe ? (b += 32) : b > nme && (b = String.fromCodePoint(b).toLowerCase().codePointAt(0))),
      e && (b = cSe(b)),
      b === n[u])
    ) {
      (a && p !== null && p.add(g), (c += aSe));
      let y = Ofr(h, A);
      (d === 0 ? (f = y) : (y === WY && (f = y), (y = r$(r$(y, f), qdi))),
        u === 0 ? (c += y * Hdi) : (c += y),
        (m = !1),
        d++,
        u++);
    } else (m ? (c += uSe) : (c += Pct), (m = !0), (d = 0), (f = 0));
    h = A;
  }
  return [c, p];
}
function O4a(t, e) {
  return { i16: new Int16Array(t), i32: new Int32Array(e) };
}
function Jdi(t, e) {
  let r = Object.keys(t)
      .map((o) => parseInt(o, 10))
      .sort((o, s) => s - o),
    n = [];
  for (let o of r) if (((n = n.concat(t[o])), n.length >= e)) break;
  return n;
}
function Xdi(t, e, r) {
  return (n) => {
    let o = this.runesList[n];
    if (e.length > o.length) return;
    let [s, a] = this.algoFn(r, this.opts.normalize, this.opts.forward, o, e, !0, N4a);
    if (s.start === -1) return;
    if (this.opts.fuzzy === !1) {
      a = new Set();
      for (let c = s.start; c < s.end; ++c) a.add(c);
    }
    let u = this.opts.sort ? s.score : 0;
    (t[u] === void 0 && (t[u] = []), t[u].push({ item: this.items[n], ...s, positions: a ?? new Set() }));
  };
}
function P4a(t) {
  let { queryRunes: e, caseSensitive: r } = Kdi(t, this.opts.casing, this.opts.normalize),
    n = {},
    o = Xdi.bind(this)(n, e, r);
  for (let s = 0, a = this.runesList.length; s < a; ++s) o(s);
  return Jdi(n, this.opts.limit);
}
function L4a(t, e, r, n) {
  return new Promise((o, s) => {
    let u = 0,
      c = Math.min(1e3, e),
      m = () => {
        if (t.cancelled) return s("search cancelled");
        for (; u < c; ++u) r(u);
        c < e ? ((c = Math.min(c + 1e3, e)), B4a ? setImmediate(m) : setTimeout(m)) : o(n());
      };
    m();
  });
}
function M4a(t, e) {
  let { queryRunes: r, caseSensitive: n } = Kdi(t, this.opts.casing, this.opts.normalize),
    o = {};
  return L4a(e, this.runesList.length, Xdi.bind(this)(o, r, n), () => Jdi(o, this.opts.limit));
}
function $4a(t, e) {
  if (e.sort) {
    let { selector: r } = e;
    t.sort((n, o) => {
      if (n.score === o.score)
        for (let s of e.tiebreakers) {
          let a = s(n, o, r);
          if (a !== 0) return a;
        }
      return 0;
    });
  }
  return (Number.isFinite(e.limit) && t.splice(e.limit), t);
}
var kfr,
  Tfr,
  jdi,
  E4a,
  nme,
  oSe,
  sSe,
  Qdi,
  Gdi,
  v4a,
  C4a,
  aSe,
  Pct,
  uSe,
  WY,
  S4a,
  w4a,
  qdi,
  Hdi,
  D4a,
  Ydi,
  I4a,
  R4a,
  k4a,
  N4a,
  Kdi,
  B4a,
  Pfr,
  Ifr,
  TFc,
  F4a,
  Rfr,
  U4a,
  Lct,
  Zdi = j(() => {
    kfr = {
      216: "O",
      223: "s",
      248: "o",
      273: "d",
      295: "h",
      305: "i",
      320: "l",
      322: "l",
      359: "t",
      383: "s",
      384: "b",
      385: "B",
      387: "b",
      390: "O",
      392: "c",
      393: "D",
      394: "D",
      396: "d",
      398: "E",
      400: "E",
      402: "f",
      403: "G",
      407: "I",
      409: "k",
      410: "l",
      412: "M",
      413: "N",
      414: "n",
      415: "O",
      421: "p",
      427: "t",
      429: "t",
      430: "T",
      434: "V",
      436: "y",
      438: "z",
      477: "e",
      485: "g",
      544: "N",
      545: "d",
      549: "z",
      564: "l",
      565: "n",
      566: "t",
      567: "j",
      570: "A",
      571: "C",
      572: "c",
      573: "L",
      574: "T",
      575: "s",
      576: "z",
      579: "B",
      580: "U",
      581: "V",
      582: "E",
      583: "e",
      584: "J",
      585: "j",
      586: "Q",
      587: "q",
      588: "R",
      589: "r",
      590: "Y",
      591: "y",
      592: "a",
      593: "a",
      595: "b",
      596: "o",
      597: "c",
      598: "d",
      599: "d",
      600: "e",
      603: "e",
      604: "e",
      605: "e",
      606: "e",
      607: "j",
      608: "g",
      609: "g",
      610: "G",
      613: "h",
      614: "h",
      616: "i",
      618: "I",
      619: "l",
      620: "l",
      621: "l",
      623: "m",
      624: "m",
      625: "m",
      626: "n",
      627: "n",
      628: "N",
      629: "o",
      633: "r",
      634: "r",
      635: "r",
      636: "r",
      637: "r",
      638: "r",
      639: "r",
      640: "R",
      641: "R",
      642: "s",
      647: "t",
      648: "t",
      649: "u",
      651: "v",
      652: "v",
      653: "w",
      654: "y",
      655: "Y",
      656: "z",
      657: "z",
      663: "c",
      665: "B",
      666: "e",
      667: "G",
      668: "H",
      669: "j",
      670: "k",
      671: "L",
      672: "q",
      686: "h",
      867: "a",
      868: "e",
      869: "i",
      870: "o",
      871: "u",
      872: "c",
      873: "d",
      874: "h",
      875: "m",
      876: "r",
      877: "t",
      878: "v",
      879: "x",
      7424: "A",
      7427: "B",
      7428: "C",
      7429: "D",
      7431: "E",
      7432: "e",
      7433: "i",
      7434: "J",
      7435: "K",
      7436: "L",
      7437: "M",
      7438: "N",
      7439: "O",
      7440: "O",
      7441: "o",
      7442: "o",
      7443: "o",
      7446: "o",
      7447: "o",
      7448: "P",
      7449: "R",
      7450: "R",
      7451: "T",
      7452: "U",
      7453: "u",
      7454: "u",
      7455: "m",
      7456: "V",
      7457: "W",
      7458: "Z",
      7522: "i",
      7523: "r",
      7524: "u",
      7525: "v",
      7834: "a",
      7835: "s",
      8305: "i",
      8341: "h",
      8342: "k",
      8343: "l",
      8344: "m",
      8345: "n",
      8346: "p",
      8347: "s",
      8348: "t",
      8580: "c",
    };
    for (let t = "\u0300".codePointAt(0); t <= "\u036F".codePointAt(0); ++t) {
      let e = String.fromCodePoint(t);
      for (let r of "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz") {
        let o = (r + e).normalize().codePointAt(0);
        o > 126 && (kfr[o] = r);
      }
    }
    Tfr = { a: [7844, 7863], e: [7870, 7879], o: [7888, 7907], u: [7912, 7921] };
    for (let t of Object.keys(Tfr)) {
      let e = t.toUpperCase();
      for (let r = Tfr[t][0]; r <= Tfr[t][1]; ++r) kfr[r] = r % 2 === 0 ? e : t;
    }
    ((jdi = (t) => t.split("").map((e) => e.codePointAt(0))),
      (E4a = new Set(
        ` \f
\r	\v\xA0\u1680\u2028\u2029\u202F\u205F\u3000\uFEFF`
          .split("")
          .map((t) => t.codePointAt(0)),
      )));
    for (let t = "\u2000".codePointAt(0); t <= "\u200A".codePointAt(0); t++) E4a.add(t);
    ((nme = "\x7F".codePointAt(0)),
      (oSe = "A".codePointAt(0)),
      (sSe = "Z".codePointAt(0)),
      (Qdi = "a".codePointAt(0)),
      (Gdi = "z".codePointAt(0)),
      (v4a = "0".codePointAt(0)),
      (C4a = "9".codePointAt(0)));
    ((aSe = 16),
      (Pct = -3),
      (uSe = -1),
      (WY = aSe / 2),
      (S4a = aSe / 2),
      (w4a = WY + uSe),
      (qdi = -(Pct + uSe)),
      (Hdi = 2));
    D4a = (t, e, r, n, o, s, a) => {
      let u = o.length;
      if (u === 0) return [{ start: 0, end: 0, score: 0 }, Dfr(s)];
      let c = n.length;
      if (a !== null && c * u > a.i16.length) return Ydi(t, e, r, n, o, s);
      let m = Nfr(n, o, t);
      if (m < 0) return [{ start: -1, end: -1, score: 0 }, null];
      let d = 0,
        f = 0,
        p = null,
        h = null,
        g = null,
        b = null;
      (([d, p] = iSe(d, a, c)), ([d, h] = iSe(d, a, c)), ([d, g] = iSe(d, a, c)), ([f, b] = Udi(f, a, u)));
      let [, A] = Udi(f, a, c);
      for (let J = 0; J < A.length; J++) A[J] = n[J];
      let y = 0,
        E = 0,
        v = 0,
        C = 0,
        x = o[0],
        k = o[0],
        R = 0,
        P = 0,
        D = !1,
        O = A.subarray(m),
        N = p.subarray(m).subarray(0, O.length),
        F = h.subarray(m).subarray(0, O.length),
        B = g.subarray(m).subarray(0, O.length);
      for (let [J, q] of O.entries()) {
        let ne = null;
        (q <= nme
          ? ((ne = Vdi(q)), !t && ne === 2 && (q += 32))
          : ((ne = Wdi(q)),
            !t && ne === 2 && (q = String.fromCodePoint(q).toLowerCase().codePointAt(0)),
            e && (q = cSe(q))),
          (O[J] = q));
        let de = Ofr(P, ne);
        if (
          ((B[J] = de),
          (P = ne),
          q === k && (v < u && ((b[v] = m + J), v++, (k = o[Math.min(v, u - 1)])), (C = m + J)),
          q === x)
        ) {
          let ce = aSe + de * Hdi;
          if (
            ((N[J] = ce),
            (F[J] = 1),
            u === 1 && ((r && ce > y) || (!r && ce >= y)) && ((y = ce), (E = m + J), r && de === WY))
          )
            break;
          D = !1;
        } else (D ? (N[J] = r$(R + uSe, 0)) : (N[J] = r$(R + Pct, 0)), (F[J] = 0), (D = !0));
        R = N[J];
      }
      if (v !== u) return [{ start: -1, end: -1, score: 0 }, null];
      if (u === 1) {
        let J = { start: E, end: E + 1, score: y };
        if (!s) return [J, null];
        let q = new Set();
        return (q.add(E), [J, q]);
      }
      let L = b[0],
        G = C - L + 1,
        Q = null;
      [d, Q] = iSe(d, a, G * u);
      {
        let J = p.subarray(L, C + 1);
        for (let [q, ne] of J.entries()) Q[q] = ne;
      }
      let [, K] = iSe(d, a, G * u);
      {
        let J = h.subarray(L, C + 1);
        for (let [q, ne] of J.entries()) K[q] = ne;
      }
      let H = b.subarray(1),
        U = o.slice(1).slice(0, H.length);
      for (let [J, q] of H.entries()) {
        let ne = !1,
          de = U[J],
          ce = J + 1,
          ye = ce * G,
          Z = A.subarray(q, C + 1),
          oe = g.subarray(q).subarray(0, Z.length),
          ue = K.subarray(ye + q - L).subarray(0, Z.length),
          he = K.subarray(ye + q - L - 1 - G).subarray(0, Z.length),
          se = Q.subarray(ye + q - L).subarray(0, Z.length),
          fe = Q.subarray(ye + q - L - 1 - G).subarray(0, Z.length),
          ge = Q.subarray(ye + q - L - 1).subarray(0, Z.length);
        ge[0] = 0;
        for (let [V, ee] of Z.entries()) {
          let Ce = V + q,
            pe = 0,
            be = 0,
            Ne = 0;
          if ((ne ? (be = ge[V] + uSe) : (be = ge[V] + Pct), de === ee)) {
            pe = fe[V] + aSe;
            let Ze = oe[V];
            ((Ne = he[V] + 1),
              Ze === WY ? (Ne = 1) : Ne > 1 && (Ze = r$(Ze, r$(qdi, g[Ce - Ne + 1]))),
              pe + Ze < be ? ((pe += oe[V]), (Ne = 0)) : (pe += Ze));
          }
          ((ue[V] = Ne), (ne = pe < be));
          let Ge = r$(r$(pe, be), 0);
          (ce === u - 1 && ((r && Ge > y) || (!r && Ge >= y)) && ((y = Ge), (E = Ce)), (se[V] = Ge));
        }
      }
      let Y = Dfr(s),
        X = L;
      if (s && Y !== null) {
        let J = u - 1;
        X = E;
        let q = !0;
        for (;;) {
          let ne = J * G,
            de = X - L,
            ce = Q[ne + de],
            ye = 0,
            Z = 0;
          if (
            (J > 0 && X >= b[J] && (ye = Q[ne - G + de - 1]),
            X > b[J] && (Z = Q[ne + de - 1]),
            ce > ye && (ce > Z || (ce === Z && q)))
          ) {
            if ((Y.add(X), J === 0)) break;
            J--;
          }
          ((q = K[ne + de] > 1 || (ne + G + de + 1 < K.length && K[ne + G + de + 1] > 0)), X--);
        }
      }
      return [{ start: X, end: E + 1, score: y }, Y];
    };
    ((Ydi = (t, e, r, n, o, s, a) => {
      if (o.length === 0) return [{ start: 0, end: 0, score: 0 }, null];
      if (Nfr(n, o, t) < 0) return [{ start: -1, end: -1, score: 0 }, null];
      let u = 0,
        c = -1,
        m = -1,
        d = n.length,
        f = o.length;
      for (let p = 0; p < d; p++) {
        let h = n[rme(p, d, r)];
        (t ||
          (h >= oSe && h <= sSe ? (h += 32) : h > nme && (h = String.fromCodePoint(h).toLowerCase().codePointAt(0))),
          e && (h = cSe(h)));
        let g = o[rme(u, f, r)];
        if (h === g && (c < 0 && (c = p), u++, u === f)) {
          m = p + 1;
          break;
        }
      }
      if (c >= 0 && m >= 0) {
        u--;
        for (let g = m - 1; g >= c; g--) {
          let b = rme(g, d, r),
            A = n[b];
          t ||
            (A >= oSe && A <= sSe ? (A += 32) : A > nme && (A = String.fromCodePoint(A).toLowerCase().codePointAt(0)));
          let y = rme(u, f, r),
            E = o[y];
          if (A === E && (u--, u < 0)) {
            c = g;
            break;
          }
        }
        if (!r) {
          let g = c;
          ((c = d - m), (m = d - g));
        }
        let [p, h] = zdi(t, e, n, o, c, m, s);
        return [{ start: c, end: m, score: p }, h];
      }
      return [{ start: -1, end: -1, score: 0 }, null];
    }),
      (I4a = (t, e, r, n, o, s, a) => {
        if (o.length === 0) return [{ start: 0, end: 0, score: 0 }, null];
        let u = n.length,
          c = o.length;
        if (u < c) return [{ start: -1, end: -1, score: 0 }, null];
        if (Nfr(n, o, t) < 0) return [{ start: -1, end: -1, score: 0 }, null];
        let m = 0,
          d = -1,
          f = 0,
          p = -1;
        for (let h = 0; h < u; h++) {
          let g = rme(h, u, r),
            b = n[g];
          (t ||
            (b >= oSe && b <= sSe ? (b += 32) : b > nme && (b = String.fromCodePoint(b).toLowerCase().codePointAt(0))),
            e && (b = cSe(b)));
          let A = rme(m, c, r);
          if (o[A] === b) {
            if ((A === 0 && (f = x4a(n, g)), m++, m === c)) {
              if ((f > p && ((d = h), (p = f)), f === WY)) break;
              ((h -= m - 1), (m = 0), (f = 0));
            }
          } else ((h -= m), (m = 0), (f = 0));
        }
        if (d >= 0) {
          let h = 0,
            g = 0;
          r ? ((h = d - c + 1), (g = d + 1)) : ((h = u - (d + 1)), (g = u - (d - c + 1)));
          let [b] = zdi(t, e, n, o, h, g, !1);
          return [{ start: h, end: g, score: b }, null];
        }
        return [{ start: -1, end: -1, score: 0 }, null];
      }),
      (R4a = 100 * 1024),
      (k4a = 2048));
    ((N4a = O4a(R4a, k4a)),
      (Kdi = (t, e, r) => {
        let n = !1;
        switch (e) {
          case "smart-case":
            t.toLowerCase() !== t && (n = !0);
            break;
          case "case-sensitive":
            n = !0;
            break;
          case "case-insensitive":
            ((t = t.toLowerCase()), (n = !1));
            break;
        }
        let o = jdi(t);
        return (r && (o = o.map(cSe)), { queryRunes: o, caseSensitive: n });
      }));
    B4a = typeof Ae < "u" && typeof window > "u";
    ((Pfr = {
      limit: 1 / 0,
      selector: (t) => t,
      casing: "smart-case",
      normalize: !0,
      fuzzy: "v2",
      tiebreakers: [],
      sort: !0,
      forward: !0,
    }),
      (Ifr = class {
        constructor(e, ...r) {
          switch (
            ((this.opts = { ...Pfr, ...r[0] }),
            (this.items = e),
            (this.runesList = e.map((n) => jdi(this.opts.selector(n).normalize()))),
            (this.algoFn = I4a),
            this.opts.fuzzy)
          ) {
            case "v2":
              this.algoFn = D4a;
              break;
            case "v1":
              this.algoFn = Ydi;
              break;
          }
        }
      }),
      (TFc = { ...Pfr, match: P4a }),
      (F4a = { ...Pfr, match: M4a }),
      (Rfr = class extends Ifr {
        constructor(e, ...r) {
          (super(e, ...r), (this.opts = { ...F4a, ...r[0] }), (this.token = { cancelled: !1 }));
        }
        async find(e) {
          if (
            ((this.token.cancelled = !0), (this.token = { cancelled: !1 }), e.length === 0 || this.items.length === 0)
          )
            return this.items.slice(0, this.opts.limit).map(U4a);
          e = e.normalize();
          let r = await this.opts.match.bind(this)(e, this.token);
          return $4a(r, this.opts);
        }
      }),
      (U4a = (t) => ({ item: t, start: -1, end: -1, score: 0, positions: new Set() })));
    Lct = class {
      constructor(e, ...r) {
        ((this.finder = new Rfr(e, ...r)), (this.find = this.finder.find.bind(this.finder)));
      }
    };
  });
import e1i from "node:path";
async function r1i(t, e, r) {
  let n = (0, t1i.default)(e, { dot: !0, contains: !0, nocase: !0 }),
    o = [];
  for (let [s, a] of t.entries()) {
    if (s % 1e3 === 0 && (await new Promise((u) => setImmediate(u)), r?.aborted)) throw new Mct();
    n(a) && o.push(a);
  }
  return (
    o.sort((s, a) => {
      let u = s.endsWith("/"),
        c = a.endsWith("/");
      return u && !c ? -1 : !u && c ? 1 : s < a ? -1 : s > a ? 1 : 0;
    }),
    o
  );
}
var t1i,
  Mct,
  Bfr,
  Lfr,
  Fct,
  n1i = j(() => {
    "use strict";
    t1i = Se(Afr(), 1);
    _di();
    Edi();
    Fdi();
    Zdi();
    Pa();
    Mct = class extends Error {
      constructor(e = "Search aborted") {
        (super(e), (this.name = "AbortError"));
      }
    };
    ((Bfr = class {
      options;
      ignore;
      resultCache;
      allFiles = [];
      fzf;
      constructor(e) {
        this.options = e;
      }
      async initialize() {
        ((this.ignore = Efr(this.options)),
          (this.allFiles = await xfr({
            crawlDirectory: this.options.projectRoot,
            cwd: this.options.projectRoot,
            ignore: this.ignore,
            cache: this.options.cache,
            cacheTtl: this.options.cacheTtl,
            maxDepth: this.options.maxDepth,
          })),
          this.buildResultCache());
      }
      async search(e, r = {}) {
        if (!this.resultCache || (!this.fzf && !this.options.disableFuzzySearch) || !this.ignore)
          throw new Error("Engine not initialized. Call initialize() first.");
        e = hR(e) || "*";
        let n,
          { files: o, isExactMatch: s } = await this.resultCache.get(e);
        if (s) n = o;
        else {
          let c = !0;
          (e.includes("*") || !this.fzf
            ? (n = await r1i(o, e, r.signal))
            : (n = await this.fzf
                .find(e)
                .then((m) => m.map((d) => d.item))
                .catch(() => ((c = !1), []))),
            c && this.resultCache.set(e, n));
        }
        let a = this.ignore.getFileFilter(),
          u = [];
        for (let [c, m] of n.entries()) {
          if (c % 1e3 === 0 && (await new Promise((d) => setImmediate(d)), r.signal?.aborted)) throw new Mct();
          if (u.length >= (r.maxResults ?? 1 / 0)) break;
          m !== "." && (a(m) || u.push(m));
        }
        return u;
      }
      buildResultCache() {
        ((this.resultCache = new kct(this.allFiles)),
          this.options.disableFuzzySearch ||
            (this.fzf = new Lct(this.allFiles, { fuzzy: this.allFiles.length > 2e4 ? "v1" : "v2" })));
      }
    }),
      (Lfr = class {
        options;
        ignore;
        constructor(e) {
          this.options = e;
        }
        async initialize() {
          this.ignore = Efr(this.options);
        }
        async search(e, r = {}) {
          if (!this.ignore) throw new Error("Engine not initialized. Call initialize() first.");
          e = e || "*";
          let n = e.endsWith("/") ? e : e1i.dirname(e),
            o = await xfr({
              crawlDirectory: e1i.join(this.options.projectRoot, n),
              cwd: this.options.projectRoot,
              maxDepth: 0,
              ignore: this.ignore,
              cache: this.options.cache,
              cacheTtl: this.options.cacheTtl,
            }),
            s = await r1i(o, e, r.signal),
            a = this.ignore.getFileFilter(),
            u = [];
          for (let c of s) {
            if (u.length >= (r.maxResults ?? 1 / 0)) break;
            c !== "." && (a(c) || u.push(c));
          }
          return u;
        }
      }),
      (Fct = class {
        static create(e) {
          return e.enableRecursiveFileSearch ? new Bfr(e) : new Lfr(e);
        }
      }));
  });
var Mn,
  sy = j(() => {
    "use strict";
    (function (t) {
      ((t.PreToolUse = "PreToolUse"),
        (t.PostToolUse = "PostToolUse"),
        (t.Stop = "Stop"),
        (t.SubagentStop = "SubagentStop"),
        (t.SetUpEnvironment = "SetUpEnvironment"),
        (t.SessionStart = "SessionStart"),
        (t.SessionEnd = "SessionEnd"),
        (t.UserPromptSubmit = "UserPromptSubmit"),
        (t.Notification = "Notification"));
    })(Mn || (Mn = {}));
  });