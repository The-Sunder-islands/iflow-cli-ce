/**
 * @module kei
 * @category network/http
 * @label undici
 * @position 1536 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kei) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kei = T((wCc, Rei) => {
  "use strict";
  var { writeFile: Cda, readFile: Sda, mkdir: wda } = Ae("node:fs/promises"),
    { dirname: xda, resolve: Cei } = Ae("node:path"),
    { setTimeout: Tda, clearTimeout: Sei } = Ae("node:timers"),
    { InvalidArgumentError: wei, UndiciError: Dda } = da(),
    { hashId: Ida, isUrlExcludedFactory: Rda, normalizeHeaders: xei, createHeaderFilters: Tei } = Fur();
  function gCe(t, e, r = {}) {
    let n = new URL(t.path, t.origin),
      o = t._normalizedHeaders || xei(t.headers);
    return (
      t._normalizedHeaders || (t._normalizedHeaders = o),
      {
        method: t.method || "GET",
        url: r.matchQuery !== !1 ? n.toString() : `${n.origin}${n.pathname}`,
        headers: Dei(o, e, r),
        body: r.matchBody !== !1 && t.body ? String(t.body) : "",
      }
    );
  }
  function Dei(t, e, r = {}) {
    if (!t || typeof t != "object") return {};
    let { caseSensitive: n = !1 } = r,
      o = {},
      { ignore: s, exclude: a, match: u } = e;
    for (let [c, m] of Object.entries(t)) {
      let d = n ? c : c.toLowerCase();
      a.has(d) || s.has(d) || (u.size !== 0 && !u.has(d)) || (o[d] = m);
    }
    return o;
  }
  function Iei(t, e, r = {}) {
    if (!t || typeof t != "object") return {};
    let { caseSensitive: n = !1 } = r,
      o = {},
      { exclude: s } = e;
    for (let [a, u] of Object.entries(t)) {
      let c = n ? a : a.toLowerCase();
      s.has(c) || (o[c] = u);
    }
    return o;
  }
  function bCe(t) {
    let e = [t.method, t.url];
    if (t.headers && typeof t.headers == "object") {
      let n = Object.keys(t.headers).sort();
      for (let o of n) {
        let s = Array.isArray(t.headers[o]) ? t.headers[o] : [t.headers[o]];
        e.push(o);
        for (let a of s.sort()) e.push(String(a));
      }
    }
    e.push(t.body);
    let r = e.join("|");
    return Ida(r);
  }
  var Uur = class {
    #e;
    #t;
    #r = new Map();
    #n;
    #i = 1 / 0;
    #o = !1;
    #u;
    constructor(e = {}) {
      ((this.#n = e.snapshotPath),
        (this.#i = e.maxSnapshots || 1 / 0),
        (this.#o = e.autoFlush || !1),
        (this.flushInterval = e.flushInterval || 3e4),
        (this._flushTimer = null),
        (this.matchOptions = {
          matchHeaders: e.matchHeaders || [],
          ignoreHeaders: e.ignoreHeaders || [],
          excludeHeaders: e.excludeHeaders || [],
          matchBody: e.matchBody !== !1,
          matchQuery: e.matchQuery !== !1,
          caseSensitive: e.caseSensitive || !1,
        }),
        (this.#u = Tei(this.matchOptions)),
        (this.shouldRecord = e.shouldRecord || (() => !0)),
        (this.shouldPlayback = e.shouldPlayback || (() => !0)),
        (this.#t = Rda(e.excludeUrls)),
        this.#o && this.#n && this.#a());
    }
    async record(e, r) {
      if (!this.shouldRecord(e) || this.isUrlExcluded(e)) return;
      let n = gCe(e, this.#u, this.matchOptions),
        o = bCe(n),
        s = xei(r.headers),
        a = {
          statusCode: r.statusCode,
          headers: Iei(s, this.#u, this.matchOptions),
          body: Buffer.isBuffer(r.body)
            ? r.body.toString("base64")
            : Buffer.from(String(r.body || "")).toString("base64"),
          trailers: r.trailers,
        };
      if (this.#r.size >= this.#i && !this.#r.has(o)) {
        let c = this.#r.keys().next().value;
        this.#r.delete(c);
      }
      let u = this.#r.get(o);
      (u && u.responses
        ? (u.responses.push(a), (u.timestamp = new Date().toISOString()))
        : this.#r.set(o, { request: n, responses: [a], callCount: 0, timestamp: new Date().toISOString() }),
        this.#o && this.#n && this.#l());
    }
    isUrlExcluded(e) {
      let r = new URL(e.path, e.origin).toString();
      return this.#t(r);
    }
    findSnapshot(e) {
      if (!this.shouldPlayback(e) || this.isUrlExcluded(e)) return;
      let r = gCe(e, this.#u, this.matchOptions),
        n = bCe(r),
        o = this.#r.get(n);
      if (!o) return;
      let s = o.callCount || 0,
        a = Math.min(s, o.responses.length - 1);
      return ((o.callCount = s + 1), { ...o, response: o.responses[a] });
    }
    async loadSnapshots(e) {
      let r = e || this.#n;
      if (!r) throw new wei("Snapshot path is required");
      try {
        let n = await Sda(Cei(r), "utf8"),
          o = JSON.parse(n);
        if (Array.isArray(o)) {
          this.#r.clear();
          for (let { hash: s, snapshot: a } of o) this.#r.set(s, a);
        } else this.#r = new Map(Object.entries(o));
      } catch (n) {
        if (n.code === "ENOENT") this.#r.clear();
        else throw new Dda(`Failed to load snapshots from ${r}`, { cause: n });
      }
    }
    async saveSnapshots(e) {
      let r = e || this.#n;
      if (!r) throw new wei("Snapshot path is required");
      let n = Cei(r);
      await wda(xda(n), { recursive: !0 });
      let o = Array.from(this.#r.entries()).map(([s, a]) => ({ hash: s, snapshot: a }));
      await Cda(n, JSON.stringify(o, null, 2), { flush: !0 });
    }
    clear() {
      this.#r.clear();
    }
    getSnapshots() {
      return Array.from(this.#r.values());
    }
    size() {
      return this.#r.size;
    }
    resetCallCounts() {
      for (let e of this.#r.values()) e.callCount = 0;
    }
    deleteSnapshot(e) {
      let r = gCe(e, this.#u, this.matchOptions),
        n = bCe(r);
      return this.#r.delete(n);
    }
    getSnapshotInfo(e) {
      let r = gCe(e, this.#u, this.matchOptions),
        n = bCe(r),
        o = this.#r.get(n);
      return o
        ? {
            hash: n,
            request: o.request,
            responseCount: o.responses ? o.responses.length : o.response ? 1 : 0,
            callCount: o.callCount || 0,
            timestamp: o.timestamp,
          }
        : null;
    }
    replaceSnapshots(e) {
      if ((this.#r.clear(), Array.isArray(e))) for (let { hash: r, snapshot: n } of e) this.#r.set(r, n);
      else e && typeof e == "object" && (this.#r = new Map(Object.entries(e)));
    }
    #a() {
      return this.#l();
    }
    #s() {
      this.#e && (Sei(this.#e), this.saveSnapshots().catch(() => {}), (this.#e = null));
    }
    #l() {
      this.#e = Tda(() => {
        (this.saveSnapshots().catch(() => {}), this.#o ? this.#e?.refresh() : (this.#e = null));
      }, 1e3);
    }
    destroy() {
      (this.#s(), this.#e && (Sei(this.#e), (this.#e = null)));
    }
    async close() {
      (this.#n && this.#r.size !== 0 && (await this.saveSnapshots()), this.destroy());
    }
  };
  Rei.exports = {
    SnapshotRecorder: Uur,
    formatRequestKey: gCe,
    createRequestHash: bCe,
    filterHeadersForMatching: Dei,
    filterHeadersForStorage: Iei,
    createHeaderFilters: Tei,
  };
});