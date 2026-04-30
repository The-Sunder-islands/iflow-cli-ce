/**
 * @module vnr
 * @category unknown
 * @label unknown
 * @position 1445 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vnr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vnr = T(($6c, JGn) => {
  JGn.exports = fD;
  var KGn = rf(),
    bZs = qo(),
    PEe = Ae("path"),
    Enr = rz(),
    YGn = Ae("assert").ok;
  bZs(fD, Enr);
  function fD(t) {
    var e = this;
    if (!(e instanceof fD)) throw new Error("DirReader must be called as constructor.");
    if (t.type !== "Directory" || !t.Directory) throw new Error("Non-directory type " + t.type);
    ((e.entries = null),
      (e._index = -1),
      (e._paused = !1),
      (e._length = -1),
      t.sort && (this.sort = t.sort),
      Enr.call(this, t));
  }
  fD.prototype._getEntries = function () {
    var t = this;
    t._gotEntries ||
      ((t._gotEntries = !0),
      KGn.readdir(t._path, function (e, r) {
        if (e) return t.error(e);
        ((t.entries = r), t.emit("entries", r), t._paused ? t.once("resume", n) : n());
        function n() {
          ((t._length = t.entries.length),
            typeof t.sort == "function" && (t.entries = t.entries.sort(t.sort.bind(t))),
            t._read());
        }
      }));
  };
  fD.prototype._read = function () {
    var t = this;
    if (!t.entries) return t._getEntries();
    if (!(t._paused || t._currentEntry || t._aborted)) {
      if ((t._index++, t._index >= t.entries.length)) {
        t._ended || ((t._ended = !0), t.emit("end"), t.emit("close"));
        return;
      }
      var e = PEe.resolve(t._path, t.entries[t._index]);
      (YGn(e !== t._path),
        YGn(t.entries[t._index]),
        (t._currentEntry = e),
        KGn[t.props.follow ? "stat" : "lstat"](e, function (r, n) {
          if (r) return t.error(r);
          var o = t._proxy || t;
          ((n.path = e), (n.basename = PEe.basename(e)), (n.dirname = PEe.dirname(e)));
          var s = t.getChildProps.call(o, n);
          ((s.path = e), (s.basename = PEe.basename(e)), (s.dirname = PEe.dirname(e)));
          var a = Enr(s, n);
          ((t._currentEntry = a),
            a.on("pause", function (m) {
              !t._paused && !a._disowned && t.pause(m);
            }),
            a.on("resume", function (m) {
              t._paused && !a._disowned && t.resume(m);
            }),
            a.on("stat", function (m) {
              (t.emit("_entryStat", a, m),
                !a._aborted &&
                  (a._paused
                    ? a.once("resume", function () {
                        t.emit("entryStat", a, m);
                      })
                    : t.emit("entryStat", a, m)));
            }),
            a.on("ready", function m() {
              if (t._paused) return (a.pause(t), t.once("resume", m));
              a.type === "Socket" ? t.emit("socket", a) : t.emitEntry(a);
            }));
          var u = !1;
          (a.on("close", c), a.on("disown", c));
          function c() {
            u ||
              ((u = !0),
              t.emit("childEnd", a),
              t.emit("entryEnd", a),
              (t._currentEntry = null),
              t._paused || t._read());
          }
          (a.on("error", function (m) {
            a._swallowErrors ? (t.warn(m), a.emit("end"), a.emit("close")) : t.emit("error", m);
          }),
            ["child", "childEnd", "warn"].forEach(function (m) {
              a.on(m, t.emit.bind(t, m));
            }));
        }));
    }
  };
  fD.prototype.disown = function (t) {
    (t.emit("beforeDisown"),
      (t._disowned = !0),
      (t.parent = t.root = null),
      t === this._currentEntry && (this._currentEntry = null),
      t.emit("disown"));
  };
  fD.prototype.getChildProps = function () {
    return {
      depth: this.depth + 1,
      root: this.root || this,
      parent: this,
      follow: this.follow,
      filter: this.filter,
      sort: this.props.sort,
      hardlinks: this.props.hardlinks,
    };
  };
  fD.prototype.pause = function (t) {
    var e = this;
    e._paused ||
      ((t = t || e),
      (e._paused = !0),
      e._currentEntry && e._currentEntry.pause && e._currentEntry.pause(t),
      e.emit("pause", t));
  };
  fD.prototype.resume = function (t) {
    var e = this;
    e._paused &&
      ((t = t || e),
      (e._paused = !1),
      e.emit("resume", t),
      !e._paused && (e._currentEntry ? e._currentEntry.resume && e._currentEntry.resume(t) : e._read()));
  };
  fD.prototype.emitEntry = function (t) {
    (this.emit("entry", t), this.emit("child", t));
  };
});