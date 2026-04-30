/**
 * @module ZZi
 * @category utils/oop
 * @label oop
 * @position 1930 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ZZi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ZZi = T((pxl, XZi) => {
  "use strict";
  var { readCAFileSync: xpu } = kZi(),
    JZi = Ae("fs"),
    OEr = Ae("path"),
    { ConfigChain: Tpu } = QZi(),
    Dpu = qZi(),
    NEr = WZi(),
    PEr = class extends Tpu {
      constructor(e, r) {
        (super(e), (this.root = e), (this._parseField = NEr.parseField.bind(null, r || KZi())));
      }
      add(e, r) {
        try {
          for (let [n, o] of Object.entries(e)) {
            let s = NEr.parseKey(n);
            (s !== n && delete e[n], (e[s] = this._parseField(o, s)));
          }
        } catch (n) {
          throw n;
        }
        return super.add(e, r);
      }
      addFile(e, r) {
        r = r || e;
        let n = { __source__: r };
        ((this.sources[r] = { path: e, type: "ini" }), this.push(n), this._await());
        try {
          let o = JZi.readFileSync(e, "utf8");
          this.addString(o, e, "ini", n);
        } catch (o) {
          if (o.code === "ENOENT") this.add({}, n);
          else if (o.code !== "EISDIR") return `Issue while reading "${e}". ${o.message}`;
        }
      }
      addEnv(e) {
        e = e || process.env;
        let r = {};
        return (
          Object.keys(e)
            .filter((n) => /^npm_config_/i.test(n))
            .forEach((n) => {
              if (!e[n]) return;
              let o = Dpu(n.substr(11)),
                s = e[n];
              r[o] = Ipu(o, s);
            }),
          super.addEnv("", r, "env")
        );
      }
      loadPrefix() {
        let e = this.list[0];
        (Object.defineProperty(this, "prefix", {
          enumerable: !0,
          set: (n) => {
            let o = this.get("global");
            this[o ? "globalPrefix" : "localPrefix"] = n;
          },
          get: () => (this.get("global") ? this.globalPrefix : this.localPrefix),
        }),
          Object.defineProperty(this, "globalPrefix", {
            enumerable: !0,
            set: (n) => {
              this.set("prefix", n);
            },
            get: () => OEr.resolve(this.get("prefix")),
          }));
        let r;
        if (
          (Object.defineProperty(this, "localPrefix", {
            enumerable: !0,
            set: (n) => {
              r = n;
            },
            get: () => r,
          }),
          Object.prototype.hasOwnProperty.call(e, "prefix"))
        )
          r = OEr.resolve(e.prefix);
        else
          try {
            r = NEr.findPrefix(process.cwd());
          } catch (n) {
            throw n;
          }
        return r;
      }
      loadCAFile(e) {
        if (!e) return;
        let r = xpu(e);
        r && this.set("ca", r);
      }
      loadUser() {
        let e = this.root;
        if (this.get("global")) return;
        if (process.env.SUDO_UID) {
          e.user = Number(process.env.SUDO_UID);
          return;
        }
        let r = OEr.resolve(this.get("prefix"));
        try {
          let n = JZi.statSync(r);
          e.user = n.uid;
        } catch (n) {
          if (n.code === "ENOENT") return;
          throw n;
        }
      }
    };
  function Ipu(t, e) {
    function r(n) {
      return n.indexOf(`

`)
        ? n.split(`

`)
        : n.split(",");
    }
    switch (t) {
      case "hoist-pattern":
      case "public-hoist-pattern":
        return r(e);
    }
    return e;
  }
  XZi.exports = PEr;
});