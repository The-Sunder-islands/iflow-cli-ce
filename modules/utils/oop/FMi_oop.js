/**
 * @module FMi
 * @category utils/oop
 * @label oop
 * @position 1835 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (FMi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var FMi = T((Mil, MMi) => {
  "use strict";
  var k8r = Ae("fs"),
    inu = Ae("util"),
    onu = Ae("path"),
    iw,
    O8r = class {
      constructor(e) {
        ((e = e || {}),
          (this.directory = e.directory || "./locales"),
          (this.updateFiles = typeof e.updateFiles == "boolean" ? e.updateFiles : !0),
          (this.locale = e.locale || "en"),
          (this.fallbackToLanguage = typeof e.fallbackToLanguage == "boolean" ? e.fallbackToLanguage : !0),
          (this.cache = Object.create(null)),
          (this.writeQueue = []));
      }
      __(...e) {
        if (typeof arguments[0] != "string") return this._taggedLiteral(arguments[0], ...arguments);
        let r = e.shift(),
          n = function () {};
        return (
          typeof e[e.length - 1] == "function" && (n = e.pop()),
          (n = n || function () {}),
          this.cache[this.locale] || this._readLocaleFile(),
          !this.cache[this.locale][r] && this.updateFiles
            ? ((this.cache[this.locale][r] = r),
              this._enqueueWrite({ directory: this.directory, locale: this.locale, cb: n }))
            : n(),
          iw.format.apply(iw.format, [this.cache[this.locale][r] || r].concat(e))
        );
      }
      __n() {
        let e = Array.prototype.slice.call(arguments),
          r = e.shift(),
          n = e.shift(),
          o = e.shift(),
          s = function () {};
        (typeof e[e.length - 1] == "function" && (s = e.pop()), this.cache[this.locale] || this._readLocaleFile());
        let a = o === 1 ? r : n;
        (this.cache[this.locale][r] && (a = this.cache[this.locale][r][o === 1 ? "one" : "other"]),
          !this.cache[this.locale][r] && this.updateFiles
            ? ((this.cache[this.locale][r] = { one: r, other: n }),
              this._enqueueWrite({ directory: this.directory, locale: this.locale, cb: s }))
            : s());
        let u = [a];
        return (~a.indexOf("%d") && u.push(o), iw.format.apply(iw.format, u.concat(e)));
      }
      setLocale(e) {
        this.locale = e;
      }
      getLocale() {
        return this.locale;
      }
      updateLocale(e) {
        this.cache[this.locale] || this._readLocaleFile();
        for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && (this.cache[this.locale][r] = e[r]);
      }
      _taggedLiteral(e, ...r) {
        let n = "";
        return (
          e.forEach(function (o, s) {
            let a = r[s + 1];
            ((n += o), typeof a < "u" && (n += "%s"));
          }),
          this.__.apply(this, [n].concat([].slice.call(r, 1)))
        );
      }
      _enqueueWrite(e) {
        (this.writeQueue.push(e), this.writeQueue.length === 1 && this._processWriteQueue());
      }
      _processWriteQueue() {
        let e = this,
          r = this.writeQueue[0],
          n = r.directory,
          o = r.locale,
          s = r.cb,
          a = this._resolveLocaleFile(n, o),
          u = JSON.stringify(this.cache[o], null, 2);
        iw.fs.writeFile(a, u, "utf-8", function (c) {
          (e.writeQueue.shift(), e.writeQueue.length > 0 && e._processWriteQueue(), s(c));
        });
      }
      _readLocaleFile() {
        let e = {},
          r = this._resolveLocaleFile(this.directory, this.locale);
        try {
          iw.fs.readFileSync && (e = JSON.parse(iw.fs.readFileSync(r, "utf-8")));
        } catch (n) {
          if ((n instanceof SyntaxError && (n.message = "syntax error in " + r), n.code === "ENOENT")) e = {};
          else throw n;
        }
        this.cache[this.locale] = e;
      }
      _resolveLocaleFile(e, r) {
        let n = iw.resolve(e, "./", r + ".json");
        if (this.fallbackToLanguage && !this._fileExistsSync(n) && ~r.lastIndexOf("_")) {
          let o = iw.resolve(e, "./", r.split("_")[0] + ".json");
          this._fileExistsSync(o) && (n = o);
        }
        return n;
      }
      _fileExistsSync(e) {
        return iw.exists(e);
      }
    };
  function snu(t, e) {
    iw = e;
    let r = new O8r(t);
    return {
      __: r.__.bind(r),
      __n: r.__n.bind(r),
      setLocale: r.setLocale.bind(r),
      getLocale: r.getLocale.bind(r),
      updateLocale: r.updateLocale.bind(r),
      locale: r.locale,
    };
  }
  var anu = {
      fs: { readFileSync: k8r.readFileSync, writeFile: k8r.writeFile },
      format: inu.format,
      resolve: onu.resolve,
      exists: (t) => {
        try {
          return k8r.statSync(t).isFile();
        } catch {
          return !1;
        }
      },
    },
    unu = (t) => snu(t, anu);
  MMi.exports = unu;
});