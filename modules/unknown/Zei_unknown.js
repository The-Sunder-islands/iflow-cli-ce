/**
 * @module Zei
 * @category unknown
 * @label unknown
 * @position 1545 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Zei) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Zei = T((BCc, Xei) => {
  "use strict";
  var { isIP: e1a } = Ae("node:net"),
    { lookup: t1a } = Ae("node:dns"),
    r1a = wle(),
    { InvalidArgumentError: eY, InformationalError: n1a } = da(),
    zur = Math.pow(2, 31) - 1,
    Yur = class {
      #e = 0;
      #t = new Map();
      constructor(e) {
        this.#e = e.maxItems;
      }
      get size() {
        return this.#t.size;
      }
      get(e) {
        return this.#t.get(e) ?? null;
      }
      set(e, r) {
        this.#t.set(e, r);
      }
      delete(e) {
        this.#t.delete(e);
      }
      full() {
        return this.size >= this.#e;
      }
    },
    Kur = class {
      #e = 0;
      #t = 0;
      dualStack = !0;
      affinity = null;
      lookup = null;
      pick = null;
      storage = null;
      constructor(e) {
        ((this.#e = e.maxTTL),
          (this.#t = e.maxItems),
          (this.dualStack = e.dualStack),
          (this.affinity = e.affinity),
          (this.lookup = e.lookup ?? this.#r),
          (this.pick = e.pick ?? this.#n),
          (this.storage = e.storage ?? new Yur(e)));
      }
      runLookup(e, r, n) {
        let o = this.storage.get(e.hostname);
        if (o == null && this.storage.full()) {
          n(null, e);
          return;
        }
        let s = {
          affinity: this.affinity,
          dualStack: this.dualStack,
          lookup: this.lookup,
          pick: this.pick,
          ...r.dns,
          maxTTL: this.#e,
          maxItems: this.#t,
        };
        if (o == null)
          this.lookup(e, s, (a, u) => {
            if (a || u == null || u.length === 0) {
              n(a ?? new n1a("No DNS entries found"));
              return;
            }
            this.setRecords(e, u);
            let c = this.storage.get(e.hostname),
              m = this.pick(e, c, s.affinity),
              d;
            (typeof m.port == "number" ? (d = `:${m.port}`) : e.port !== "" ? (d = `:${e.port}`) : (d = ""),
              n(null, new URL(`${e.protocol}//${m.family === 6 ? `[${m.address}]` : m.address}${d}`)));
          });
        else {
          let a = this.pick(e, o, s.affinity);
          if (a == null) {
            (this.storage.delete(e.hostname), this.runLookup(e, r, n));
            return;
          }
          let u;
          (typeof a.port == "number" ? (u = `:${a.port}`) : e.port !== "" ? (u = `:${e.port}`) : (u = ""),
            n(null, new URL(`${e.protocol}//${a.family === 6 ? `[${a.address}]` : a.address}${u}`)));
        }
      }
      #r(e, r, n) {
        t1a(e.hostname, { all: !0, family: this.dualStack === !1 ? this.affinity : 0, order: "ipv4first" }, (o, s) => {
          if (o) return n(o);
          let a = new Map();
          for (let u of s) a.set(`${u.address}:${u.family}`, u);
          n(null, a.values());
        });
      }
      #n(e, r, n) {
        let o = null,
          { records: s, offset: a } = r,
          u;
        if (
          (this.dualStack
            ? (n == null &&
                (a == null || a === zur ? ((r.offset = 0), (n = 4)) : (r.offset++, (n = (r.offset & 1) === 1 ? 6 : 4))),
              s[n] != null && s[n].ips.length > 0 ? (u = s[n]) : (u = s[n === 4 ? 6 : 4]))
            : (u = s[n]),
          u == null || u.ips.length === 0)
        )
          return o;
        u.offset == null || u.offset === zur ? (u.offset = 0) : u.offset++;
        let c = u.offset % u.ips.length;
        return (
          (o = u.ips[c] ?? null),
          o == null ? o : Date.now() - o.timestamp > o.ttl ? (u.ips.splice(c, 1), this.pick(e, r, n)) : o
        );
      }
      pickFamily(e, r) {
        let n = this.storage.get(e.hostname)?.records;
        if (!n) return null;
        let o = n[r];
        if (!o) return null;
        o.offset == null || o.offset === zur ? (o.offset = 0) : o.offset++;
        let s = o.offset % o.ips.length,
          a = o.ips[s] ?? null;
        return (a == null || (Date.now() - a.timestamp > a.ttl && o.ips.splice(s, 1)), a);
      }
      setRecords(e, r) {
        let n = Date.now(),
          o = { records: { 4: null, 6: null } },
          s = this.#e;
        for (let a of r) {
          ((a.timestamp = n),
            typeof a.ttl == "number"
              ? ((a.ttl = Math.min(a.ttl, this.#e)), (s = Math.min(s, a.ttl)))
              : (a.ttl = this.#e));
          let u = o.records[a.family] ?? { ips: [] };
          (u.ips.push(a), (o.records[a.family] = u));
        }
        this.storage.set(e.hostname, o, { ttl: s });
      }
      deleteRecords(e) {
        this.storage.delete(e.hostname);
      }
      getHandler(e, r) {
        return new Jur(this, e, r);
      }
    },
    Jur = class extends r1a {
      #e = null;
      #t = null;
      #r = null;
      #n = null;
      #i = null;
      #o = null;
      #u = !0;
      constructor(e, { origin: r, handler: n, dispatch: o, newOrigin: s }, a) {
        (super(n), (this.#n = r), (this.#o = s), (this.#t = { ...a }), (this.#e = e), (this.#r = o));
      }
      onResponseError(e, r) {
        switch (r.code) {
          case "ETIMEDOUT":
          case "ECONNREFUSED": {
            if (this.#e.dualStack) {
              if (!this.#u) {
                super.onResponseError(e, r);
                return;
              }
              this.#u = !1;
              let n = this.#o.hostname[0] === "[" ? 4 : 6,
                o = this.#e.pickFamily(this.#n, n);
              if (o == null) {
                super.onResponseError(e, r);
                return;
              }
              let s;
              typeof o.port == "number"
                ? (s = `:${o.port}`)
                : this.#n.port !== ""
                  ? (s = `:${this.#n.port}`)
                  : (s = "");
              let a = {
                ...this.#t,
                origin: `${this.#n.protocol}//${o.family === 6 ? `[${o.address}]` : o.address}${s}`,
              };
              this.#r(a, this);
              return;
            }
            super.onResponseError(e, r);
            break;
          }
          case "ENOTFOUND":
            (this.#e.deleteRecords(this.#n), super.onResponseError(e, r));
            break;
          default:
            super.onResponseError(e, r);
            break;
        }
      }
    };
  Xei.exports = (t) => {
    if (t?.maxTTL != null && (typeof t?.maxTTL != "number" || t?.maxTTL < 0))
      throw new eY("Invalid maxTTL. Must be a positive number");
    if (t?.maxItems != null && (typeof t?.maxItems != "number" || t?.maxItems < 1))
      throw new eY("Invalid maxItems. Must be a positive number and greater than zero");
    if (t?.affinity != null && t?.affinity !== 4 && t?.affinity !== 6)
      throw new eY("Invalid affinity. Must be either 4 or 6");
    if (t?.dualStack != null && typeof t?.dualStack != "boolean") throw new eY("Invalid dualStack. Must be a boolean");
    if (t?.lookup != null && typeof t?.lookup != "function") throw new eY("Invalid lookup. Must be a function");
    if (t?.pick != null && typeof t?.pick != "function") throw new eY("Invalid pick. Must be a function");
    if (
      t?.storage != null &&
      (typeof t?.storage?.get != "function" ||
        typeof t?.storage?.set != "function" ||
        typeof t?.storage?.full != "function" ||
        typeof t?.storage?.delete != "function")
    )
      throw new eY("Invalid storage. Must be a object with methods: { get, set, full, delete }");
    let e = t?.dualStack ?? !0,
      r;
    e ? (r = t?.affinity ?? null) : (r = t?.affinity ?? 4);
    let n = {
        maxTTL: t?.maxTTL ?? 1e4,
        lookup: t?.lookup ?? null,
        pick: t?.pick ?? null,
        dualStack: e,
        affinity: r,
        maxItems: t?.maxItems ?? 1 / 0,
        storage: t?.storage,
      },
      o = new Kur(n);
    return (s) =>
      function (u, c) {
        let m = u.origin.constructor === URL ? u.origin : new URL(u.origin);
        return e1a(m.hostname) !== 0
          ? s(u, c)
          : (o.runLookup(m, u, (d, f) => {
              if (d) return c.onResponseError(null, d);
              let p = { ...u, servername: m.hostname, origin: f.origin, headers: { host: m.host, ...u.headers } };
              s(p, o.getHandler({ origin: m, dispatch: s, handler: c, newOrigin: f }, u));
            }),
            !0);
      };
  };
});