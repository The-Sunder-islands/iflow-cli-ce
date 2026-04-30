/**
 * @module THi
 * @category utils/oop
 * @label oop
 * @position 1903 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (THi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var THi = T((Kfl, xHi) => {
  var WTe = _Hi(),
    SHi = { r: 256, g: 256, b: 256, a: 1 },
    wHi = { h: 360, s: 1, v: 1, a: 1 };
  function _yr(t, e, r) {
    let n = {};
    for (let o in t) t.hasOwnProperty(o) && (n[o] = r === 0 ? 0 : (e[o] - t[o]) / r);
    return n;
  }
  function Eyr(t, e, r, n) {
    let o = {};
    for (let s in e)
      e.hasOwnProperty(s) &&
        ((o[s] = t[s] * r + e[s]), (o[s] = o[s] < 0 ? o[s] + n[s] : n[s] !== 1 ? o[s] % n[s] : o[s]));
    return o;
  }
  function Ayr(t, e, r) {
    let n = t.color.toRgb(),
      o = e.color.toRgb(),
      s = _yr(n, o, r),
      a = [t.color];
    for (let u = 1; u < r; u++) {
      let c = Eyr(s, n, u, SHi);
      a.push(WTe(c));
    }
    return a;
  }
  function EHi(t, e, r, n) {
    let o = t.color.toHsv(),
      s = e.color.toHsv();
    if (o.s === 0 || s.s === 0) return Ayr(t, e, r);
    let a;
    if (typeof n == "boolean") a = n;
    else {
      let d = (o.h < s.h && s.h - o.h < 180) || (o.h > s.h && o.h - s.h > 180);
      a = (n === "long" && d) || (n === "short" && !d);
    }
    let u = _yr(o, s, r),
      c = [t.color],
      m;
    ((o.h <= s.h && !a) || (o.h >= s.h && a) ? (m = s.h - o.h) : a ? (m = 360 - s.h + o.h) : (m = 360 - o.h + s.h),
      (u.h = (Math.pow(-1, a ? 1 : 0) * Math.abs(m)) / r));
    for (let d = 1; d < r; d++) {
      let f = Eyr(u, o, d, wHi);
      c.push(WTe(f));
    }
    return c;
  }
  function vHi(t, e) {
    let r = t.length;
    if (((e = parseInt(e, 10)), isNaN(e) || e < 2)) throw new Error("Invalid number of steps (< 2)");
    if (e < r) throw new Error("Number of steps cannot be inferior to number of stops");
    let n = [];
    for (let s = 1; s < r; s++) {
      let a = (e - 1) * (t[s].pos - t[s - 1].pos);
      n.push(Math.max(1, Math.round(a)));
    }
    let o = 1;
    for (let s = r - 1; s--; ) o += n[s];
    for (; o !== e; )
      if (o < e) {
        let s = Math.min.apply(null, n);
        (n[n.indexOf(s)]++, o++);
      } else {
        let s = Math.max.apply(null, n);
        (n[n.indexOf(s)]--, o--);
      }
    return n;
  }
  function CHi(t, e, r, n) {
    if (e < 0 || e > 1) throw new Error("Position must be between 0 and 1");
    let o, s;
    for (let c = 0, m = t.length; c < m - 1; c++)
      if (e >= t[c].pos && e < t[c + 1].pos) {
        ((o = t[c]), (s = t[c + 1]));
        break;
      }
    o || (o = s = t[t.length - 1]);
    let a = _yr(o.color[r](), s.color[r](), (s.pos - o.pos) * 100),
      u = Eyr(a, o.color[r](), (e - o.pos) * 100, n);
    return WTe(u);
  }
  var yyr = class t {
    constructor(e) {
      if (e.length < 2) throw new Error("Invalid number of stops (< 2)");
      let r = e[0].pos !== void 0,
        n = e.length,
        o = -1,
        s = !1;
      ((this.stops = e.map((a, u) => {
        let c = a.pos !== void 0;
        if (r ^ c) throw new Error("Cannot mix positionned and not posionned color stops");
        if (c) {
          let m = a.color !== void 0;
          if (!m && (s || u === 0 || u === n - 1)) throw new Error("Cannot define two consecutive position-only stops");
          if (((s = !m), (a = { color: m ? WTe(a.color) : null, colorLess: !m, pos: a.pos }), a.pos < 0 || a.pos > 1))
            throw new Error("Color stops positions must be between 0 and 1");
          if (a.pos < o) throw new Error("Color stops positions are not ordered");
          o = a.pos;
        } else a = { color: WTe(a.color !== void 0 ? a.color : a), pos: u / (n - 1) };
        return a;
      })),
        this.stops[0].pos !== 0 && (this.stops.unshift({ color: this.stops[0].color, pos: 0 }), n++),
        this.stops[n - 1].pos !== 1 && this.stops.push({ color: this.stops[n - 1].color, pos: 1 }));
    }
    reverse() {
      let e = [];
      return (
        this.stops.forEach(function (r) {
          e.push({ color: r.color, pos: 1 - r.pos });
        }),
        new t(e.reverse())
      );
    }
    loop() {
      let e = [],
        r = [];
      return (
        this.stops.forEach((n) => {
          e.push({ color: n.color, pos: n.pos / 2 });
        }),
        this.stops.slice(0, -1).forEach((n) => {
          r.push({ color: n.color, pos: 1 - n.pos / 2 });
        }),
        new t(e.concat(r.reverse()))
      );
    }
    rgb(e) {
      let r = vHi(this.stops, e),
        n = [];
      this.stops.forEach((o, s) => {
        o.colorLess && (o.color = Ayr(this.stops[s - 1], this.stops[s + 1], 2)[1]);
      });
      for (let o = 0, s = this.stops.length; o < s - 1; o++) {
        let a = Ayr(this.stops[o], this.stops[o + 1], r[o]);
        n.splice(n.length, 0, ...a);
      }
      return (n.push(this.stops[this.stops.length - 1].color), n);
    }
    hsv(e, r) {
      let n = vHi(this.stops, e),
        o = [];
      this.stops.forEach((s, a) => {
        s.colorLess && (s.color = EHi(this.stops[a - 1], this.stops[a + 1], 2, r)[1]);
      });
      for (let s = 0, a = this.stops.length; s < a - 1; s++) {
        let u = EHi(this.stops[s], this.stops[s + 1], n[s], r);
        o.splice(o.length, 0, ...u);
      }
      return (o.push(this.stops[this.stops.length - 1].color), o);
    }
    css(e, r) {
      ((e = e || "linear"), (r = r || (e === "linear" ? "to right" : "ellipse at center")));
      let n = e + "-gradient(" + r;
      return (
        this.stops.forEach(function (o) {
          n += ", " + (o.colorLess ? "" : o.color.toRgbString() + " ") + o.pos * 100 + "%";
        }),
        (n += ")"),
        n
      );
    }
    rgbAt(e) {
      return CHi(this.stops, e, "toRgb", SHi);
    }
    hsvAt(e) {
      return CHi(this.stops, e, "toHsv", wHi);
    }
  };
  xHi.exports = function (t) {
    if (arguments.length === 1) {
      if (!Array.isArray(arguments[0])) throw new Error('"stops" is not an array');
      t = arguments[0];
    } else t = Array.prototype.slice.call(arguments);
    return new yyr(t);
  };
});