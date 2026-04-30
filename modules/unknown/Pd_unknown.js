/**
 * @module Pd
 * @category unknown
 * @label unknown
 * @position 1126 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Pd) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Pd = T((ybc, zTn) => {
  var aTs = /^[A-Z]+\d+$/,
    zye = {
      _dictionary: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      _l2nFill: 0,
      _l2n: {},
      _n2l: [],
      _level(t) {
        return t <= 26 ? 1 : t <= 676 ? 2 : 3;
      },
      _fill(t) {
        let e,
          r,
          n,
          o,
          s,
          a = 1;
        if (t >= 4) throw new Error("Out of bounds. Excel supports columns from 1 to 16384");
        if (this._l2nFill < 1 && t >= 1) {
          for (; a <= 26; ) ((e = this._dictionary[a - 1]), (this._n2l[a] = e), (this._l2n[e] = a), a++);
          this._l2nFill = 1;
        }
        if (this._l2nFill < 2 && t >= 2) {
          for (a = 27; a <= 702; )
            ((r = a - 27),
              (n = r % 26),
              (o = Math.floor(r / 26)),
              (e = this._dictionary[o] + this._dictionary[n]),
              (this._n2l[a] = e),
              (this._l2n[e] = a),
              a++);
          this._l2nFill = 2;
        }
        if (this._l2nFill < 3 && t >= 3) {
          for (a = 703; a <= 16384; )
            ((r = a - 703),
              (n = r % 26),
              (o = Math.floor(r / 26) % 26),
              (s = Math.floor(r / 676)),
              (e = this._dictionary[s] + this._dictionary[o] + this._dictionary[n]),
              (this._n2l[a] = e),
              (this._l2n[e] = a),
              a++);
          this._l2nFill = 3;
        }
      },
      l2n(t) {
        if ((this._l2n[t] || this._fill(t.length), !this._l2n[t]))
          throw new Error(`Out of bounds. Invalid column letter: ${t}`);
        return this._l2n[t];
      },
      n2l(t) {
        if (t < 1 || t > 16384) throw new Error(`${t} is out of bounds. Excel supports columns from 1 to 16384`);
        return (this._n2l[t] || this._fill(this._level(t)), this._n2l[t]);
      },
      _hash: {},
      validateAddress(t) {
        if (!aTs.test(t)) throw new Error(`Invalid Address: ${t}`);
        return !0;
      },
      decodeAddress(t) {
        let e = t.length < 5 && this._hash[t];
        if (e) return e;
        let r = !1,
          n = "",
          o = 0,
          s = !1,
          a = "",
          u = 0;
        for (let m = 0, d; m < t.length; m++)
          if (((d = t.charCodeAt(m)), !s && d >= 65 && d <= 90)) ((r = !0), (n += t[m]), (o = o * 26 + d - 64));
          else if (d >= 48 && d <= 57) ((s = !0), (a += t[m]), (u = u * 10 + d - 48));
          else if (s && r && d !== 36) break;
        if (!r) o = void 0;
        else if (o > 16384) throw new Error(`Out of bounds. Invalid column letter: ${n}`);
        (s || (u = void 0), (t = n + a));
        let c = { address: t, col: o, row: u, $col$row: `$${n}$${a}` };
        return (o <= 100 && u <= 100 && ((this._hash[t] = c), (this._hash[c.$col$row] = c)), c);
      },
      getAddress(t, e) {
        if (e) {
          let r = this.n2l(e) + t;
          return this.decodeAddress(r);
        }
        return this.decodeAddress(t);
      },
      decode(t) {
        let e = t.split(":");
        if (e.length === 2) {
          let r = this.decodeAddress(e[0]),
            n = this.decodeAddress(e[1]),
            o = {
              top: Math.min(r.row, n.row),
              left: Math.min(r.col, n.col),
              bottom: Math.max(r.row, n.row),
              right: Math.max(r.col, n.col),
            };
          return (
            (o.tl = this.n2l(o.left) + o.top),
            (o.br = this.n2l(o.right) + o.bottom),
            (o.dimensions = `${o.tl}:${o.br}`),
            o
          );
        }
        return this.decodeAddress(t);
      },
      decodeEx(t) {
        let e = t.match(/(?:(?:(?:'((?:[^']|'')*)')|([^'^ !]*))!)?(.*)/),
          r = e[1] || e[2],
          n = e[3],
          o = n.split(":");
        if (o.length > 1) {
          let a = this.decodeAddress(o[0]),
            u = this.decodeAddress(o[1]),
            c = Math.min(a.row, u.row),
            m = Math.min(a.col, u.col),
            d = Math.max(a.row, u.row),
            f = Math.max(a.col, u.col);
          return (
            (a = this.n2l(m) + c),
            (u = this.n2l(f) + d),
            {
              top: c,
              left: m,
              bottom: d,
              right: f,
              sheetName: r,
              tl: { address: a, col: m, row: c, $col$row: `$${this.n2l(m)}$${c}`, sheetName: r },
              br: { address: u, col: f, row: d, $col$row: `$${this.n2l(f)}$${d}`, sheetName: r },
              dimensions: `${a}:${u}`,
            }
          );
        }
        if (n.startsWith("#")) return r ? { sheetName: r, error: n } : { error: n };
        let s = this.decodeAddress(n);
        return r ? { sheetName: r, ...s } : s;
      },
      encodeAddress(t, e) {
        return zye.n2l(e) + t;
      },
      encode() {
        switch (arguments.length) {
          case 2:
            return zye.encodeAddress(arguments[0], arguments[1]);
          case 4:
            return `${zye.encodeAddress(arguments[0], arguments[1])}:${zye.encodeAddress(arguments[2], arguments[3])}`;
          default:
            throw new Error("Can only encode with 2 or 4 arguments");
        }
      },
      inRange(t, e) {
        let [r, n, , o, s] = t,
          [a, u] = e;
        return a >= r && a <= o && u >= n && u <= s;
      },
    };
  zTn.exports = zye;
});