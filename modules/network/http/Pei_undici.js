/**
 * @module Pei
 * @category network/http
 * @label undici
 * @position 1537 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Pei) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Pei = T((xCc, Nei) => {
  "use strict";
  var kda = zz(),
    Oda = Mur(),
    { SnapshotRecorder: Nda } = kei(),
    Pda = kve(),
    { InvalidArgumentError: Bda, UndiciError: Lda } = da(),
    { validateSnapshotMode: Mda } = Fur(),
    r9 = Symbol("kSnapshotRecorder"),
    kD = Symbol("kSnapshotMode"),
    ACe = Symbol("kSnapshotPath"),
    $ur = Symbol("kSnapshotLoaded"),
    Iot = Symbol("kRealAgent"),
    Oei = !1,
    jur = class extends Oda {
      constructor(e = {}) {
        Oei ||
          (process.emitWarning("SnapshotAgent is experimental and subject to change", "ExperimentalWarning"),
          (Oei = !0));
        let { mode: r = "record", snapshotPath: n = null, ...o } = e;
        if ((super(o), Mda(r), (r === "playback" || r === "update") && !n))
          throw new Bda(`snapshotPath is required when mode is '${r}'`);
        ((this[kD] = r),
          (this[ACe] = n),
          (this[r9] = new Nda({
            snapshotPath: this[ACe],
            mode: this[kD],
            maxSnapshots: e.maxSnapshots,
            autoFlush: e.autoFlush,
            flushInterval: e.flushInterval,
            matchHeaders: e.matchHeaders,
            ignoreHeaders: e.ignoreHeaders,
            excludeHeaders: e.excludeHeaders,
            matchBody: e.matchBody,
            matchQuery: e.matchQuery,
            caseSensitive: e.caseSensitive,
            shouldRecord: e.shouldRecord,
            shouldPlayback: e.shouldPlayback,
            excludeUrls: e.excludeUrls,
          })),
          (this[$ur] = !1),
          (this[kD] === "record" ||
            this[kD] === "update" ||
            (this[kD] === "playback" && e.excludeUrls && e.excludeUrls.length > 0)) &&
            (this[Iot] = new kda(e)),
          (this[kD] === "playback" || this[kD] === "update") && this[ACe] && this.loadSnapshots().catch(() => {}));
      }
      dispatch(e, r) {
        r = Pda.wrap(r);
        let n = this[kD];
        if (this[r9].isUrlExcluded(e)) return this[Iot].dispatch(e, r);
        if (n === "playback" || n === "update") {
          if (!this[$ur]) return this.#e(e, r);
          let o = this[r9].findSnapshot(e);
          if (o) return this.#r(o, r);
          if (n === "update") return this.#t(e, r);
          {
            let s = new Lda(`No snapshot found for ${e.method || "GET"} ${e.path}`);
            if (r.onError) {
              r.onError(s);
              return;
            }
            throw s;
          }
        } else if (n === "record") return this.#t(e, r);
      }
      async #e(e, r) {
        return (await this.loadSnapshots(), this.dispatch(e, r));
      }
      #t(e, r) {
        let n = { statusCode: null, headers: {}, trailers: {}, body: [] },
          o = this,
          s = {
            onRequestStart(u, c) {
              return r.onRequestStart(u, { ...c, history: this.history });
            },
            onRequestUpgrade(u, c, m, d) {
              return r.onRequestUpgrade(u, c, m, d);
            },
            onResponseStart(u, c, m, d) {
              return ((n.statusCode = c), (n.headers = m), r.onResponseStart(u, c, m, d));
            },
            onResponseData(u, c) {
              return (n.body.push(c), r.onResponseData(u, c));
            },
            onResponseEnd(u, c) {
              n.trailers = c;
              let m = Buffer.concat(n.body);
              o[r9]
                .record(e, { statusCode: n.statusCode, headers: n.headers, body: m, trailers: n.trailers })
                .then(() => r.onResponseEnd(u, c))
                .catch((d) => r.onResponseError(u, d));
            },
          };
        return this[Iot].dispatch(e, s);
      }
      #r(e, r) {
        try {
          let { response: n } = e,
            o = {
              pause() {},
              resume() {},
              abort(a) {
                ((this.aborted = !0), (this.reason = a));
              },
              aborted: !1,
              paused: !1,
            };
          (r.onRequestStart(o), r.onResponseStart(o, n.statusCode, n.headers));
          let s = Buffer.from(n.body, "base64");
          (r.onResponseData(o, s), r.onResponseEnd(o, n.trailers));
        } catch (n) {
          r.onError?.(n);
        }
      }
      async loadSnapshots(e) {
        (await this[r9].loadSnapshots(e || this[ACe]), (this[$ur] = !0), this[kD] === "playback" && this.#n());
      }
      async saveSnapshots(e) {
        return this[r9].saveSnapshots(e || this[ACe]);
      }
      #n() {
        for (let e of this[r9].getSnapshots()) {
          let { request: r, responses: n, response: o } = e,
            s = new URL(r.url),
            a = this.get(s.origin),
            u = n ? n[0] : o;
          u &&
            a
              .intercept({ path: s.pathname + s.search, method: r.method, headers: r.headers, body: r.body })
              .reply(u.statusCode, u.body, { headers: u.headers, trailers: u.trailers })
              .persist();
        }
      }
      getRecorder() {
        return this[r9];
      }
      getMode() {
        return this[kD];
      }
      clearSnapshots() {
        this[r9].clear();
      }
      resetCallCounts() {
        this[r9].resetCallCounts();
      }
      deleteSnapshot(e) {
        return this[r9].deleteSnapshot(e);
      }
      getSnapshotInfo(e) {
        return this[r9].getSnapshotInfo(e);
      }
      replaceSnapshots(e) {
        this[r9].replaceSnapshots(e);
      }
      async close() {
        (await this[r9].close(), await this[Iot]?.close(), await super.close());
      }
    };
  Nei.exports = jur;
});