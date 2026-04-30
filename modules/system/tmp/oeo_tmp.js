/**
 * @module oeo
 * @category system/tmp
 * @label tmp
 * @position 1931 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (oeo) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var oeo = T((ieo) => {
  "use strict";
  var reo = Ae("os"),
    sP = Ae("path"),
    neo = reo.tmpdir(),
    Rpu = process.getuid ? process.getuid() : process.pid,
    kpu = () => !0,
    eeo = process.platform === "win32",
    teo = {
      editor: () => process.env.EDITOR || process.env.VISUAL || (eeo ? "notepad.exe" : "vi"),
      shell: () => (eeo ? process.env.COMSPEC || "cmd.exe" : process.env.SHELL || "/bin/bash"),
    },
    Opu = { fromString: () => process.umask() },
    Lfe = reo.homedir();
  Lfe ? (process.env.HOME = Lfe) : (Lfe = sP.resolve(neo, "npm-" + Rpu));
  var Npu = process.platform === "win32" ? "npm-cache" : ".npm",
    Ppu = (process.platform === "win32" && process.env.APPDATA) || Lfe,
    Bpu = sP.resolve(Ppu, Npu),
    rAt,
    XJ;
  Object.defineProperty(ieo, "defaults", {
    get: function () {
      return (
        rAt ||
        (process.env.PREFIX
          ? (XJ = process.env.PREFIX)
          : process.platform === "win32"
            ? (XJ = sP.dirname(process.execPath))
            : ((XJ = sP.dirname(sP.dirname(process.execPath))),
              process.env.DESTDIR && (XJ = sP.join(process.env.DESTDIR, XJ))),
        (rAt = {
          access: null,
          "allow-same-version": !1,
          "always-auth": !1,
          also: null,
          audit: !0,
          "auth-type": "legacy",
          "bin-links": !0,
          browser: null,
          ca: null,
          cafile: null,
          cache: Bpu,
          "cache-lock-stale": 6e4,
          "cache-lock-retries": 10,
          "cache-lock-wait": 1e4,
          "cache-max": 1 / 0,
          "cache-min": 10,
          cert: null,
          cidr: null,
          color: process.env.NO_COLOR == null,
          depth: 1 / 0,
          description: !0,
          dev: !1,
          "dry-run": !1,
          editor: teo.editor(),
          "engine-strict": !1,
          force: !1,
          "fetch-retries": 2,
          "fetch-retry-factor": 10,
          "fetch-retry-mintimeout": 1e4,
          "fetch-retry-maxtimeout": 6e4,
          git: "git",
          "git-tag-version": !0,
          "commit-hooks": !0,
          global: !1,
          globalconfig: sP.resolve(XJ, "etc", "npmrc"),
          "global-style": !1,
          group: process.platform === "win32" ? 0 : process.env.SUDO_GID || (process.getgid && process.getgid()),
          "ham-it-up": !1,
          heading: "npm",
          "if-present": !1,
          "ignore-prepublish": !1,
          "ignore-scripts": !1,
          "init-module": sP.resolve(Lfe, ".npm-init.js"),
          "init-author-name": "",
          "init-author-email": "",
          "init-author-url": "",
          "init-version": "1.0.0",
          "init-license": "ISC",
          json: !1,
          key: null,
          "legacy-bundling": !1,
          link: !1,
          "local-address": void 0,
          loglevel: "notice",
          logstream: process.stderr,
          "logs-max": 10,
          long: !1,
          maxsockets: 50,
          message: "%s",
          "metrics-registry": null,
          "node-options": null,
          offline: !1,
          "onload-script": !1,
          only: null,
          optional: !0,
          otp: null,
          "package-lock": !0,
          "package-lock-only": !1,
          parseable: !1,
          "prefer-offline": !1,
          "prefer-online": !1,
          prefix: XJ,
          production: !0,
          progress: !process.env.TRAVIS && !process.env.CI,
          provenance: !1,
          proxy: null,
          "https-proxy": null,
          "no-proxy": null,
          "user-agent": "npm/{npm-version} node/{node-version} {platform} {arch}",
          "read-only": !1,
          "rebuild-bundle": !0,
          registry: "https://registry.npmjs.org/",
          rollback: !0,
          save: !0,
          "save-bundle": !1,
          "save-dev": !1,
          "save-exact": !1,
          "save-optional": !1,
          "save-prefix": "^",
          "save-prod": !1,
          scope: "",
          "script-shell": null,
          "scripts-prepend-node-path": "warn-only",
          searchopts: "",
          searchexclude: null,
          searchlimit: 20,
          searchstaleness: 900,
          "send-metrics": !1,
          shell: teo.shell(),
          shrinkwrap: !0,
          "sign-git-tag": !1,
          "sso-poll-frequency": 500,
          "sso-type": "oauth",
          "strict-ssl": !0,
          tag: "latest",
          "tag-version-prefix": "v",
          timing: !1,
          tmp: neo,
          unicode: kpu(),
          "unsafe-perm":
            process.platform === "win32" ||
            process.platform === "cygwin" ||
            !(process.getuid && process.setuid && process.getgid && process.setgid) ||
            process.getuid() !== 0,
          usage: !1,
          user: process.platform === "win32" ? 0 : "nobody",
          userconfig: sP.resolve(Lfe, ".npmrc"),
          umask: process.umask ? process.umask() : Opu.fromString("022"),
          version: !1,
          versions: !1,
          viewer: process.platform === "win32" ? "browser" : "man",
          _exit: !0,
        }),
        rAt)
      );
    },
  });
});