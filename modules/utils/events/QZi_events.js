/**
 * @module QZi
 * @category utils/events
 * @label events
 * @position 1924 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (QZi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var QZi = T((oP, jZi) => {
  var UZi = PZi(),
    kDe = Ae("path"),
    Xbt = Ae("fs"),
    DEr = FZi(),
    IEr = Ae("events").EventEmitter,
    cpu = Ae("url"),
    lpu = Ae("http"),
    oP = (jZi.exports = function () {
      for (var t = [].slice.call(arguments), e = new HA(); t.length; ) {
        var r = t.shift();
        r && e.push(typeof r == "string" ? dpu(r) : r);
      }
      return e;
    }),
    axl = (oP.find = function () {
      var t = kDe.join.apply(null, [].slice.call(arguments));
      function e(r, n) {
        var o = kDe.join(r, n);
        try {
          return (Xbt.statSync(o), o);
        } catch {
          if (kDe.dirname(r) !== r) return e(kDe.dirname(r), n);
        }
      }
      return e(__dirname, t);
    }),
    mpu = (oP.parse = function (t, e, r) {
      if (((t = "" + t), r))
        if (r === "json")
          if (this.emit)
            try {
              return JSON.parse(t);
            } catch (n) {
              this.emit("error", n);
            }
          else return JSON.parse(t);
        else return DEr.parse(t);
      else
        try {
          return JSON.parse(t);
        } catch {
          return DEr.parse(t);
        }
    }),
    dpu = (oP.json = function () {
      var t = [].slice.call(arguments).filter(function (n) {
          return n != null;
        }),
        e = kDe.join.apply(null, t),
        r;
      try {
        r = Xbt.readFileSync(e, "utf-8");
      } catch {
        return;
      }
      return mpu(r, e, "json");
    }),
    uxl = (oP.env = function (t, e) {
      e = e || process.env;
      var r = {},
        n = t.length;
      for (var o in e) o.indexOf(t) === 0 && (r[o.substring(n)] = e[o]);
      return r;
    });
  oP.ConfigChain = HA;
  function HA() {
    (IEr.apply(this), UZi.apply(this, arguments), (this._awaiting = 0), (this._saving = 0), (this.sources = {}));
  }
  var $Zi = { constructor: { value: HA } };
  Object.keys(IEr.prototype).forEach(function (t) {
    $Zi[t] = Object.getOwnPropertyDescriptor(IEr.prototype, t);
  });
  HA.prototype = Object.create(UZi.prototype, $Zi);
  HA.prototype.del = function (t, e) {
    if (e) {
      var r = this.sources[e];
      if (((r = r && r.data), !r)) return this.emit("error", new Error("not found " + e));
      delete r[t];
    } else for (var n = 0, o = this.list.length; n < o; n++) delete this.list[n][t];
    return this;
  };
  HA.prototype.set = function (t, e, r) {
    var n;
    if (r) {
      if (((n = this.sources[r]), (n = n && n.data), !n)) return this.emit("error", new Error("not found " + r));
    } else if (((n = this.list[0]), !n)) return this.emit("error", new Error("cannot set, no confs!"));
    return ((n[t] = e), this);
  };
  HA.prototype.get = function (t, e) {
    return e
      ? ((e = this.sources[e]), e && (e = e.data), e && Object.hasOwnProperty.call(e, t) ? e[t] : void 0)
      : this.list[0][t];
  };
  HA.prototype.save = function (t, s, r) {
    typeof s == "function" && ((r = s), (s = null));
    var n = this.sources[t];
    if (!n || !(n.path || n.source) || !n.data) return this.emit("error", new Error("bad save target: " + t));
    if (n.source) {
      var o = n.prefix || "";
      return (
        Object.keys(n.data).forEach(function (u) {
          n.source[o + u] = n.data[u];
        }),
        this
      );
    }
    var s = s || n.type,
      a = n.data;
    return (
      n.type === "json" ? (a = JSON.stringify(a)) : (a = DEr.stringify(a)),
      this._saving++,
      Xbt.writeFile(
        n.path,
        a,
        "utf8",
        function (u) {
          if ((this._saving--, u)) return r ? r(u) : this.emit("error", u);
          this._saving === 0 && (r && r(), this.emit("save"));
        }.bind(this),
      ),
      this
    );
  };
  HA.prototype.addFile = function (t, e, r) {
    r = r || t;
    var n = { __source__: r };
    return (
      (this.sources[r] = { path: t, type: e }),
      this.push(n),
      this._await(),
      Xbt.readFile(
        t,
        "utf8",
        function (o, s) {
          (o && this.emit("error", o), this.addString(s, t, e, n));
        }.bind(this),
      ),
      this
    );
  };
  HA.prototype.addEnv = function (t, e, r) {
    r = r || "env";
    var n = oP.env(t, e);
    return ((this.sources[r] = { data: n, source: e, prefix: t }), this.add(n, r));
  };
  HA.prototype.addUrl = function (t, e, r) {
    this._await();
    var n = cpu.format(t);
    r = r || n;
    var o = { __source__: r };
    return (
      (this.sources[r] = { href: n, type: e }),
      this.push(o),
      lpu
        .request(
          t,
          function (s) {
            var a = [],
              u = s.headers["content-type"];
            (e ||
              ((e =
                u.indexOf("json") !== -1
                  ? "json"
                  : u.indexOf("ini") !== -1
                    ? "ini"
                    : n.match(/\.json$/)
                      ? "json"
                      : n.match(/\.ini$/)
                        ? "ini"
                        : null),
              (o.type = e)),
              s
                .on("data", a.push.bind(a))
                .on(
                  "end",
                  function () {
                    this.addString(Buffer.concat(a), n, e, o);
                  }.bind(this),
                )
                .on("error", this.emit.bind(this, "error")));
          }.bind(this),
        )
        .on("error", this.emit.bind(this, "error"))
        .end(),
      this
    );
  };
  HA.prototype.addString = function (t, e, r, n) {
    return ((t = this.parse(t, e, r)), this.add(t, n), this);
  };
  HA.prototype.add = function (t, e) {
    if (e && typeof e == "object") {
      var r = this.list.indexOf(e);
      if (r === -1) return this.emit("error", new Error("bad marker"));
      (this.splice(r, 1, t),
        (e = e.__source__),
        (this.sources[e] = this.sources[e] || {}),
        (this.sources[e].data = t),
        this._resolve());
    } else
      (typeof e == "string" && ((this.sources[e] = this.sources[e] || {}), (this.sources[e].data = t)),
        this._await(),
        this.push(t),
        process.nextTick(this._resolve.bind(this)));
    return this;
  };
  HA.prototype.parse = oP.parse;
  HA.prototype._await = function () {
    this._awaiting++;
  };
  HA.prototype._resolve = function () {
    (this._awaiting--, this._awaiting === 0 && this.emit("load", this));
  };
});