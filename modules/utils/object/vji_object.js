/**
 * @module vji
 * @category utils/object
 * @label object
 * @position 1873 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vji) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vji = T((Yal, Eji) => {
  "use strict";
  var kc = (...t) => (t.every((e) => e) ? t.join("") : ""),
    sp = (t) => (t ? encodeURIComponent(t) : ""),
    _ji = (t) =>
      t
        .toLowerCase()
        .replace(/^\W+|\/|\W+$/g, "")
        .replace(/\W+/g, "-"),
    xsu = {
      sshtemplate: ({ domain: t, user: e, project: r, committish: n }) => `git@${t}:${e}/${r}.git${kc("#", n)}`,
      sshurltemplate: ({ domain: t, user: e, project: r, committish: n }) =>
        `git+ssh://git@${t}/${e}/${r}.git${kc("#", n)}`,
      edittemplate: ({ domain: t, user: e, project: r, committish: n, editpath: o, path: s }) =>
        `https://${t}/${e}/${r}${kc("/", o, "/", sp(n || "HEAD"), "/", s)}`,
      browsetemplate: ({ domain: t, user: e, project: r, committish: n, treepath: o }) =>
        `https://${t}/${e}/${r}${kc("/", o, "/", sp(n))}`,
      browsetreetemplate: ({
        domain: t,
        user: e,
        project: r,
        committish: n,
        treepath: o,
        path: s,
        fragment: a,
        hashformat: u,
      }) => `https://${t}/${e}/${r}/${o}/${sp(n || "HEAD")}/${s}${kc("#", u(a || ""))}`,
      browseblobtemplate: ({
        domain: t,
        user: e,
        project: r,
        committish: n,
        blobpath: o,
        path: s,
        fragment: a,
        hashformat: u,
      }) => `https://${t}/${e}/${r}/${o}/${sp(n || "HEAD")}/${s}${kc("#", u(a || ""))}`,
      docstemplate: ({ domain: t, user: e, project: r, treepath: n, committish: o }) =>
        `https://${t}/${e}/${r}${kc("/", n, "/", sp(o))}#readme`,
      httpstemplate: ({ auth: t, domain: e, user: r, project: n, committish: o }) =>
        `git+https://${kc(t, "@")}${e}/${r}/${n}.git${kc("#", o)}`,
      filetemplate: ({ domain: t, user: e, project: r, committish: n, path: o }) =>
        `https://${t}/${e}/${r}/raw/${sp(n || "HEAD")}/${o}`,
      shortcuttemplate: ({ type: t, user: e, project: r, committish: n }) => `${t}:${e}/${r}${kc("#", n)}`,
      pathtemplate: ({ user: t, project: e, committish: r }) => `${t}/${e}${kc("#", r)}`,
      bugstemplate: ({ domain: t, user: e, project: r }) => `https://${t}/${e}/${r}/issues`,
      hashformat: _ji,
    },
    _j = {};
  _j.github = {
    protocols: ["git:", "http:", "git+ssh:", "git+https:", "ssh:", "https:"],
    domain: "github.com",
    treepath: "tree",
    blobpath: "blob",
    editpath: "edit",
    filetemplate: ({ auth: t, user: e, project: r, committish: n, path: o }) =>
      `https://${kc(t, "@")}raw.githubusercontent.com/${e}/${r}/${sp(n || "HEAD")}/${o}`,
    gittemplate: ({ auth: t, domain: e, user: r, project: n, committish: o }) =>
      `git://${kc(t, "@")}${e}/${r}/${n}.git${kc("#", o)}`,
    tarballtemplate: ({ domain: t, user: e, project: r, committish: n }) =>
      `https://codeload.${t}/${e}/${r}/tar.gz/${sp(n || "HEAD")}`,
    extract: (t) => {
      let [, e, r, n, o] = t.pathname.split("/", 5);
      if (
        !(n && n !== "tree") &&
        (n || (o = t.hash.slice(1)), r && r.endsWith(".git") && (r = r.slice(0, -4)), !(!e || !r))
      )
        return { user: e, project: r, committish: o };
    },
  };
  _j.bitbucket = {
    protocols: ["git+ssh:", "git+https:", "ssh:", "https:"],
    domain: "bitbucket.org",
    treepath: "src",
    blobpath: "src",
    editpath: "?mode=edit",
    edittemplate: ({ domain: t, user: e, project: r, committish: n, treepath: o, path: s, editpath: a }) =>
      `https://${t}/${e}/${r}${kc("/", o, "/", sp(n || "HEAD"), "/", s, a)}`,
    tarballtemplate: ({ domain: t, user: e, project: r, committish: n }) =>
      `https://${t}/${e}/${r}/get/${sp(n || "HEAD")}.tar.gz`,
    extract: (t) => {
      let [, e, r, n] = t.pathname.split("/", 4);
      if (!["get"].includes(n) && (r && r.endsWith(".git") && (r = r.slice(0, -4)), !(!e || !r)))
        return { user: e, project: r, committish: t.hash.slice(1) };
    },
  };
  _j.gitlab = {
    protocols: ["git+ssh:", "git+https:", "ssh:", "https:"],
    domain: "gitlab.com",
    treepath: "tree",
    blobpath: "tree",
    editpath: "-/edit",
    httpstemplate: ({ auth: t, domain: e, user: r, project: n, committish: o }) =>
      `git+https://${kc(t, "@")}${e}/${r}/${n}.git${kc("#", o)}`,
    tarballtemplate: ({ domain: t, user: e, project: r, committish: n }) =>
      `https://${t}/${e}/${r}/repository/archive.tar.gz?ref=${sp(n || "HEAD")}`,
    extract: (t) => {
      let e = t.pathname.slice(1);
      if (e.includes("/-/") || e.includes("/archive.tar.gz")) return;
      let r = e.split("/"),
        n = r.pop();
      n.endsWith(".git") && (n = n.slice(0, -4));
      let o = r.join("/");
      if (!(!o || !n)) return { user: o, project: n, committish: t.hash.slice(1) };
    },
  };
  _j.gist = {
    protocols: ["git:", "git+ssh:", "git+https:", "ssh:", "https:"],
    domain: "gist.github.com",
    editpath: "edit",
    sshtemplate: ({ domain: t, project: e, committish: r }) => `git@${t}:${e}.git${kc("#", r)}`,
    sshurltemplate: ({ domain: t, project: e, committish: r }) => `git+ssh://git@${t}/${e}.git${kc("#", r)}`,
    edittemplate: ({ domain: t, user: e, project: r, committish: n, editpath: o }) =>
      `https://${t}/${e}/${r}${kc("/", sp(n))}/${o}`,
    browsetemplate: ({ domain: t, project: e, committish: r }) => `https://${t}/${e}${kc("/", sp(r))}`,
    browsetreetemplate: ({ domain: t, project: e, committish: r, path: n, hashformat: o }) =>
      `https://${t}/${e}${kc("/", sp(r))}${kc("#", o(n))}`,
    browseblobtemplate: ({ domain: t, project: e, committish: r, path: n, hashformat: o }) =>
      `https://${t}/${e}${kc("/", sp(r))}${kc("#", o(n))}`,
    docstemplate: ({ domain: t, project: e, committish: r }) => `https://${t}/${e}${kc("/", sp(r))}`,
    httpstemplate: ({ domain: t, project: e, committish: r }) => `git+https://${t}/${e}.git${kc("#", r)}`,
    filetemplate: ({ user: t, project: e, committish: r, path: n }) =>
      `https://gist.githubusercontent.com/${t}/${e}/raw${kc("/", sp(r))}/${n}`,
    shortcuttemplate: ({ type: t, project: e, committish: r }) => `${t}:${e}${kc("#", r)}`,
    pathtemplate: ({ project: t, committish: e }) => `${t}${kc("#", e)}`,
    bugstemplate: ({ domain: t, project: e }) => `https://${t}/${e}`,
    gittemplate: ({ domain: t, project: e, committish: r }) => `git://${t}/${e}.git${kc("#", r)}`,
    tarballtemplate: ({ project: t, committish: e }) =>
      `https://codeload.github.com/gist/${t}/tar.gz/${sp(e || "HEAD")}`,
    extract: (t) => {
      let [, e, r, n] = t.pathname.split("/", 4);
      if (n !== "raw") {
        if (!r) {
          if (!e) return;
          ((r = e), (e = null));
        }
        return (r.endsWith(".git") && (r = r.slice(0, -4)), { user: e, project: r, committish: t.hash.slice(1) });
      }
    },
    hashformat: function (t) {
      return t && "file-" + _ji(t);
    },
  };
  _j.sourcehut = {
    protocols: ["git+ssh:", "https:"],
    domain: "git.sr.ht",
    treepath: "tree",
    blobpath: "tree",
    filetemplate: ({ domain: t, user: e, project: r, committish: n, path: o }) =>
      `https://${t}/${e}/${r}/blob/${sp(n) || "HEAD"}/${o}`,
    httpstemplate: ({ domain: t, user: e, project: r, committish: n }) => `https://${t}/${e}/${r}.git${kc("#", n)}`,
    tarballtemplate: ({ domain: t, user: e, project: r, committish: n }) =>
      `https://${t}/${e}/${r}/archive/${sp(n) || "HEAD"}.tar.gz`,
    bugstemplate: () => null,
    extract: (t) => {
      let [, e, r, n] = t.pathname.split("/", 4);
      if (!["archive"].includes(n) && (r && r.endsWith(".git") && (r = r.slice(0, -4)), !(!e || !r)))
        return { user: e, project: r, committish: t.hash.slice(1) };
    },
  };
  for (let [t, e] of Object.entries(_j)) _j[t] = Object.assign({}, xsu, e);
  Eji.exports = _j;
});