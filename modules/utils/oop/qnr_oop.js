/**
 * @module qnr
 * @category utils/oop
 * @label oop
 * @position 1456 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qnr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qnr = T((ryc, Oqn) => {
  Oqn.exports = XF;
  var Ant = Tce(),
    eea = qo(),
    tea = Qnr(),
    kqn = Ae("path"),
    rea = bnt();
  eea(XF, Ant);
  function XF(t) {
    var e = this;
    (e instanceof XF || e.error("DirWriter must be called as constructor.", null, !0),
      (t.type !== "Directory" || !t.Directory) &&
        e.error("Non-directory type " + t.type + " " + JSON.stringify(t), null, !0),
      Ant.call(this, t));
  }
  XF.prototype._create = function () {
    var t = this;
    tea(t._path, Ant.dirmode, function (e) {
      if (e) return t.error(e);
      ((t.ready = !0), t.emit("ready"), t._process());
    });
  };
  XF.prototype.write = function () {
    return !0;
  };
  XF.prototype.end = function () {
    ((this._ended = !0), this._process());
  };
  XF.prototype.add = function (t) {
    var e = this;
    return (
      rea(t),
      !e.ready || e._currentEntry
        ? (e._buffer.push(t), !1)
        : e._ended
          ? e.error("add after end")
          : (e._buffer.push(t), e._process(), this._buffer.length === 0)
    );
  };
  XF.prototype._process = function () {
    var t = this;
    if (t._processing) return;
    var e = t._buffer.shift();
    if (!e) {
      (t.emit("drain"), t._ended && t._finish());
      return;
    }
    ((t._processing = !0), t.emit("entry", e));
    var r = e,
      n;
    do {
      if (((n = r._path || r.path), n === t.root._path || n === t._path || (n && n.indexOf(t._path) === 0)))
        return ((t._processing = !1), e._collected && e.pipe(), t._process());
      r = r.parent;
    } while (r);
    var o = { parent: t, root: t.root || t, type: e.type, depth: t.depth + 1 };
    ((n = e._path || e.path || e.props.path),
      e.parent && (n = n.substr(e.parent._path.length + 1)),
      (o.path = kqn.join(t.path, kqn.join("/", n))),
      (o.filter = t.filter),
      Object.keys(e.props).forEach(function (c) {
        o.hasOwnProperty(c) || (o[c] = e.props[c]);
      }));
    var s = (t._currentChild = new Ant(o));
    (s.on("ready", function () {
      (e.pipe(s), e.resume());
    }),
      s.on("error", function (c) {
        s._swallowErrors ? (t.warn(c), s.emit("end"), s.emit("close")) : t.emit("error", c);
      }),
      s.on("close", u));
    var a = !1;
    function u() {
      a || ((a = !0), (t._currentChild = null), (t._processing = !1), t._process());
    }
  };
});