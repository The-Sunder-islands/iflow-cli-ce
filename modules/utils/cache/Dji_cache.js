/**
 * @module Dji
 * @category utils/cache
 * @label cache
 * @position 1876 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Dji) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Dji = T((Xal, Tji) => {
  "use strict";
  var { LRUCache: Osu } = yji(),
    Nsu = vji(),
    Psu = xji(),
    Bsu = d6r(),
    f6r = new Osu({ max: 1e3 }),
    I3t = class t {
      constructor(e, r, n, o, s, a, u = {}) {
        Object.assign(this, t.#e[e], { type: e, user: r, auth: n, project: o, committish: s, default: a, opts: u });
      }
      static #e = { byShortcut: {}, byDomain: {} };
      static #t = {
        "git+ssh:": { name: "sshurl" },
        "ssh:": { name: "sshurl" },
        "git+https:": { name: "https", auth: !0 },
        "git:": { auth: !0 },
        "http:": { auth: !0 },
        "https:": { auth: !0 },
        "git+http:": { auth: !0 },
      };
      static addHost(e, r) {
        ((t.#e[e] = r), (t.#e.byDomain[r.domain] = e), (t.#e.byShortcut[`${e}:`] = e), (t.#t[`${e}:`] = { name: e }));
      }
      static fromUrl(e, r) {
        if (typeof e != "string") return;
        let n = e + JSON.stringify(r || {});
        if (!f6r.has(n)) {
          let o = Psu(e, r, { gitHosts: t.#e, protocols: t.#t });
          f6r.set(n, o ? new t(...o) : void 0);
        }
        return f6r.get(n);
      }
      static parseUrl(e) {
        return Bsu(e);
      }
      #r(e, r) {
        if (typeof e != "function") return null;
        let n = { ...this, ...this.opts, ...r };
        (n.path || (n.path = ""),
          n.path.startsWith("/") && (n.path = n.path.slice(1)),
          n.noCommittish && (n.committish = null));
        let o = e(n);
        return n.noGitPlus && o.startsWith("git+") ? o.slice(4) : o;
      }
      hash() {
        return this.committish ? `#${this.committish}` : "";
      }
      ssh(e) {
        return this.#r(this.sshtemplate, e);
      }
      sshurl(e) {
        return this.#r(this.sshurltemplate, e);
      }
      browse(e, ...r) {
        return typeof e != "string"
          ? this.#r(this.browsetemplate, e)
          : typeof r[0] != "string"
            ? this.#r(this.browsetreetemplate, { ...r[0], path: e })
            : this.#r(this.browsetreetemplate, { ...r[1], fragment: r[0], path: e });
      }
      browseFile(e, ...r) {
        return typeof r[0] != "string"
          ? this.#r(this.browseblobtemplate, { ...r[0], path: e })
          : this.#r(this.browseblobtemplate, { ...r[1], fragment: r[0], path: e });
      }
      docs(e) {
        return this.#r(this.docstemplate, e);
      }
      bugs(e) {
        return this.#r(this.bugstemplate, e);
      }
      https(e) {
        return this.#r(this.httpstemplate, e);
      }
      git(e) {
        return this.#r(this.gittemplate, e);
      }
      shortcut(e) {
        return this.#r(this.shortcuttemplate, e);
      }
      path(e) {
        return this.#r(this.pathtemplate, e);
      }
      tarball(e) {
        return this.#r(this.tarballtemplate, { ...e, noCommittish: !1 });
      }
      file(e, r) {
        return this.#r(this.filetemplate, { ...r, path: e });
      }
      edit(e, r) {
        return this.#r(this.edittemplate, { ...r, path: e });
      }
      getDefaultRepresentation() {
        return this.default;
      }
      toString(e) {
        return this.default && typeof this[this.default] == "function" ? this[this.default](e) : this.sshurl(e);
      }
    };
  for (let [t, e] of Object.entries(Nsu)) I3t.addHost(t, e);
  Tji.exports = I3t;
});