/**
 * @module Wjn
 * @category utils/oop
 * @label oop
 * @position 1405 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Wjn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Wjn = T((n6c, Vjn) => {
  Vjn.exports = F2;
  function F2(t) {
    if (!(this instanceof F2)) return new F2(t);
    ((this.buffers = t || []),
      (this.length = this.buffers.reduce(function (e, r) {
        return e + r.length;
      }, 0)));
  }
  F2.prototype.push = function () {
    for (var t = 0; t < arguments.length; t++)
      if (!Buffer.isBuffer(arguments[t])) throw new TypeError("Tried to push a non-buffer");
    for (var t = 0; t < arguments.length; t++) {
      var e = arguments[t];
      (this.buffers.push(e), (this.length += e.length));
    }
    return this.length;
  };
  F2.prototype.unshift = function () {
    for (var t = 0; t < arguments.length; t++)
      if (!Buffer.isBuffer(arguments[t])) throw new TypeError("Tried to unshift a non-buffer");
    for (var t = 0; t < arguments.length; t++) {
      var e = arguments[t];
      (this.buffers.unshift(e), (this.length += e.length));
    }
    return this.length;
  };
  F2.prototype.copy = function (t, e, r, n) {
    return this.slice(r, n).copy(t, e, 0, n - r);
  };
  F2.prototype.splice = function (t, e) {
    var r = this.buffers,
      n = t >= 0 ? t : this.length - t,
      o = [].slice.call(arguments, 2);
    e === void 0 ? (e = this.length - n) : e > this.length - n && (e = this.length - n);
    for (var t = 0; t < o.length; t++) this.length += o[t].length;
    for (var s = new F2(), a = 0, u = 0, c = 0; c < r.length && u + r[c].length < n; c++) u += r[c].length;
    if (n - u > 0) {
      var m = n - u;
      if (m + e < r[c].length) {
        s.push(r[c].slice(m, m + e));
        for (var d = r[c], f = new Buffer(m), t = 0; t < m; t++) f[t] = d[t];
        for (var p = new Buffer(d.length - m - e), t = m + e; t < d.length; t++) p[t - e - m] = d[t];
        if (o.length > 0) {
          var h = o.slice();
          (h.unshift(f), h.push(p), r.splice.apply(r, [c, 1].concat(h)), (c += h.length), (o = []));
        } else (r.splice(c, 1, f, p), (c += 2));
      } else (s.push(r[c].slice(m)), (r[c] = r[c].slice(0, m)), c++);
    }
    for (o.length > 0 && (r.splice.apply(r, [c, 0].concat(o)), (c += o.length)); s.length < e; ) {
      var g = r[c],
        b = g.length,
        A = Math.min(b, e - s.length);
      A === b ? (s.push(g), r.splice(c, 1)) : (s.push(g.slice(0, A)), (r[c] = r[c].slice(A)));
    }
    return ((this.length -= s.length), s);
  };
  F2.prototype.slice = function (t, e) {
    var r = this.buffers;
    (e === void 0 && (e = this.length), t === void 0 && (t = 0), e > this.length && (e = this.length));
    for (var n = 0, o = 0; o < r.length && n + r[o].length <= t; o++) n += r[o].length;
    for (var s = new Buffer(e - t), a = 0, u = o; a < e - t && u < r.length; u++) {
      var c = r[u].length,
        m = a === 0 ? t - n : 0,
        d = a + c >= e - t ? Math.min(m + (e - t) - a, c) : c;
      (r[u].copy(s, a, m, d), (a += d - m));
    }
    return s;
  };
  F2.prototype.pos = function (t) {
    if (t < 0 || t >= this.length) throw new Error("oob");
    for (var e = t, r = 0, n = null; ; ) {
      if (((n = this.buffers[r]), e < n.length)) return { buf: r, offset: e };
      ((e -= n.length), r++);
    }
  };
  F2.prototype.get = function (e) {
    var r = this.pos(e);
    return this.buffers[r.buf].get(r.offset);
  };
  F2.prototype.set = function (e, r) {
    var n = this.pos(e);
    return this.buffers[n.buf].set(n.offset, r);
  };
  F2.prototype.indexOf = function (t, e) {
    if (typeof t == "string") t = new Buffer(t);
    else if (!(t instanceof Buffer)) throw new Error("Invalid type for a search string");
    if (!t.length) return 0;
    if (!this.length) return -1;
    var r = 0,
      n = 0,
      o = 0,
      s,
      a = 0;
    if (e) {
      var u = this.pos(e);
      ((r = u.buf), (n = u.offset), (a = e));
    }
    for (;;) {
      for (; n >= this.buffers[r].length; ) if (((n = 0), r++, r >= this.buffers.length)) return -1;
      var c = this.buffers[r][n];
      if (c == t[o]) {
        if ((o == 0 && (s = { i: r, j: n, pos: a }), o++, o == t.length)) return s.pos;
      } else o != 0 && ((r = s.i), (n = s.j), (a = s.pos), (o = 0));
      (n++, a++);
    }
  };
  F2.prototype.toBuffer = function () {
    return this.slice();
  };
  F2.prototype.toString = function (t, e, r) {
    return this.slice(e, r).toString(t);
  };
});