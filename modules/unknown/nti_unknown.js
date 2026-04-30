/**
 * @module nti
 * @category unknown
 * @label unknown
 * @position 1547 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (nti) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var nti = T((MCc, rti) => {
  "use strict";
  function g1a(t) {
    switch (t[3]) {
      case ",":
        return b1a(t);
      case " ":
        return A1a(t);
      default:
        return y1a(t);
    }
  }
  function b1a(t) {
    if (
      t.length !== 29 ||
      t[4] !== " " ||
      t[7] !== " " ||
      t[11] !== " " ||
      t[16] !== " " ||
      t[19] !== ":" ||
      t[22] !== ":" ||
      t[25] !== " " ||
      t[26] !== "G" ||
      t[27] !== "M" ||
      t[28] !== "T"
    )
      return;
    let e = -1;
    if (t[0] === "S" && t[1] === "u" && t[2] === "n") e = 0;
    else if (t[0] === "M" && t[1] === "o" && t[2] === "n") e = 1;
    else if (t[0] === "T" && t[1] === "u" && t[2] === "e") e = 2;
    else if (t[0] === "W" && t[1] === "e" && t[2] === "d") e = 3;
    else if (t[0] === "T" && t[1] === "h" && t[2] === "u") e = 4;
    else if (t[0] === "F" && t[1] === "r" && t[2] === "i") e = 5;
    else if (t[0] === "S" && t[1] === "a" && t[2] === "t") e = 6;
    else return;
    let r = 0;
    if (t[5] === "0") {
      let h = t.charCodeAt(6);
      if (h < 49 || h > 57) return;
      r = h - 48;
    } else {
      let h = t.charCodeAt(5);
      if (h < 49 || h > 51) return;
      let g = t.charCodeAt(6);
      if (g < 48 || g > 57) return;
      r = (h - 48) * 10 + (g - 48);
    }
    let n = -1;
    if (t[8] === "J" && t[9] === "a" && t[10] === "n") n = 0;
    else if (t[8] === "F" && t[9] === "e" && t[10] === "b") n = 1;
    else if (t[8] === "M" && t[9] === "a")
      if (t[10] === "r") n = 2;
      else if (t[10] === "y") n = 4;
      else return;
    else if (t[8] === "J")
      if (t[9] === "a" && t[10] === "n") n = 0;
      else if (t[9] === "u")
        if (t[10] === "n") n = 5;
        else if (t[10] === "l") n = 6;
        else return;
      else return;
    else if (t[8] === "A")
      if (t[9] === "p" && t[10] === "r") n = 3;
      else if (t[9] === "u" && t[10] === "g") n = 7;
      else return;
    else if (t[8] === "S" && t[9] === "e" && t[10] === "p") n = 8;
    else if (t[8] === "O" && t[9] === "c" && t[10] === "t") n = 9;
    else if (t[8] === "N" && t[9] === "o" && t[10] === "v") n = 10;
    else if (t[8] === "D" && t[9] === "e" && t[10] === "c") n = 11;
    else return;
    let o = t.charCodeAt(12);
    if (o < 48 || o > 57) return;
    let s = t.charCodeAt(13);
    if (s < 48 || s > 57) return;
    let a = t.charCodeAt(14);
    if (a < 48 || a > 57) return;
    let u = t.charCodeAt(15);
    if (u < 48 || u > 57) return;
    let c = (o - 48) * 1e3 + (s - 48) * 100 + (a - 48) * 10 + (u - 48),
      m = 0;
    if (t[17] === "0") {
      let h = t.charCodeAt(18);
      if (h < 48 || h > 57) return;
      m = h - 48;
    } else {
      let h = t.charCodeAt(17);
      if (h < 48 || h > 50) return;
      let g = t.charCodeAt(18);
      if (g < 48 || g > 57 || (h === 50 && g > 51)) return;
      m = (h - 48) * 10 + (g - 48);
    }
    let d = 0;
    if (t[20] === "0") {
      let h = t.charCodeAt(21);
      if (h < 48 || h > 57) return;
      d = h - 48;
    } else {
      let h = t.charCodeAt(20);
      if (h < 48 || h > 53) return;
      let g = t.charCodeAt(21);
      if (g < 48 || g > 57) return;
      d = (h - 48) * 10 + (g - 48);
    }
    let f = 0;
    if (t[23] === "0") {
      let h = t.charCodeAt(24);
      if (h < 48 || h > 57) return;
      f = h - 48;
    } else {
      let h = t.charCodeAt(23);
      if (h < 48 || h > 53) return;
      let g = t.charCodeAt(24);
      if (g < 48 || g > 57) return;
      f = (h - 48) * 10 + (g - 48);
    }
    let p = new Date(Date.UTC(c, n, r, m, d, f));
    return p.getUTCDay() === e ? p : void 0;
  }
  function A1a(t) {
    if (t.length !== 24 || t[7] !== " " || t[10] !== " " || t[19] !== " ") return;
    let e = -1;
    if (t[0] === "S" && t[1] === "u" && t[2] === "n") e = 0;
    else if (t[0] === "M" && t[1] === "o" && t[2] === "n") e = 1;
    else if (t[0] === "T" && t[1] === "u" && t[2] === "e") e = 2;
    else if (t[0] === "W" && t[1] === "e" && t[2] === "d") e = 3;
    else if (t[0] === "T" && t[1] === "h" && t[2] === "u") e = 4;
    else if (t[0] === "F" && t[1] === "r" && t[2] === "i") e = 5;
    else if (t[0] === "S" && t[1] === "a" && t[2] === "t") e = 6;
    else return;
    let r = -1;
    if (t[4] === "J" && t[5] === "a" && t[6] === "n") r = 0;
    else if (t[4] === "F" && t[5] === "e" && t[6] === "b") r = 1;
    else if (t[4] === "M" && t[5] === "a")
      if (t[6] === "r") r = 2;
      else if (t[6] === "y") r = 4;
      else return;
    else if (t[4] === "J")
      if (t[5] === "a" && t[6] === "n") r = 0;
      else if (t[5] === "u")
        if (t[6] === "n") r = 5;
        else if (t[6] === "l") r = 6;
        else return;
      else return;
    else if (t[4] === "A")
      if (t[5] === "p" && t[6] === "r") r = 3;
      else if (t[5] === "u" && t[6] === "g") r = 7;
      else return;
    else if (t[4] === "S" && t[5] === "e" && t[6] === "p") r = 8;
    else if (t[4] === "O" && t[5] === "c" && t[6] === "t") r = 9;
    else if (t[4] === "N" && t[5] === "o" && t[6] === "v") r = 10;
    else if (t[4] === "D" && t[5] === "e" && t[6] === "c") r = 11;
    else return;
    let n = 0;
    if (t[8] === " ") {
      let h = t.charCodeAt(9);
      if (h < 49 || h > 57) return;
      n = h - 48;
    } else {
      let h = t.charCodeAt(8);
      if (h < 49 || h > 51) return;
      let g = t.charCodeAt(9);
      if (g < 48 || g > 57) return;
      n = (h - 48) * 10 + (g - 48);
    }
    let o = 0;
    if (t[11] === "0") {
      let h = t.charCodeAt(12);
      if (h < 48 || h > 57) return;
      o = h - 48;
    } else {
      let h = t.charCodeAt(11);
      if (h < 48 || h > 50) return;
      let g = t.charCodeAt(12);
      if (g < 48 || g > 57 || (h === 50 && g > 51)) return;
      o = (h - 48) * 10 + (g - 48);
    }
    let s = 0;
    if (t[14] === "0") {
      let h = t.charCodeAt(15);
      if (h < 48 || h > 57) return;
      s = h - 48;
    } else {
      let h = t.charCodeAt(14);
      if (h < 48 || h > 53) return;
      let g = t.charCodeAt(15);
      if (g < 48 || g > 57) return;
      s = (h - 48) * 10 + (g - 48);
    }
    let a = 0;
    if (t[17] === "0") {
      let h = t.charCodeAt(18);
      if (h < 48 || h > 57) return;
      a = h - 48;
    } else {
      let h = t.charCodeAt(17);
      if (h < 48 || h > 53) return;
      let g = t.charCodeAt(18);
      if (g < 48 || g > 57) return;
      a = (h - 48) * 10 + (g - 48);
    }
    let u = t.charCodeAt(20);
    if (u < 48 || u > 57) return;
    let c = t.charCodeAt(21);
    if (c < 48 || c > 57) return;
    let m = t.charCodeAt(22);
    if (m < 48 || m > 57) return;
    let d = t.charCodeAt(23);
    if (d < 48 || d > 57) return;
    let f = (u - 48) * 1e3 + (c - 48) * 100 + (m - 48) * 10 + (d - 48),
      p = new Date(Date.UTC(f, r, n, o, s, a));
    return p.getUTCDay() === e ? p : void 0;
  }
  function y1a(t) {
    let e = -1,
      r = -1;
    if (t[0] === "S")
      t[1] === "u" && t[2] === "n" && t[3] === "d" && t[4] === "a" && t[5] === "y"
        ? ((r = 0), (e = 6))
        : t[1] === "a" &&
          t[2] === "t" &&
          t[3] === "u" &&
          t[4] === "r" &&
          t[5] === "d" &&
          t[6] === "a" &&
          t[7] === "y" &&
          ((r = 6), (e = 8));
    else if (t[0] === "M" && t[1] === "o" && t[2] === "n" && t[3] === "d" && t[4] === "a" && t[5] === "y")
      ((r = 1), (e = 6));
    else if (t[0] === "T")
      t[1] === "u" && t[2] === "e" && t[3] === "s" && t[4] === "d" && t[5] === "a" && t[6] === "y"
        ? ((r = 2), (e = 7))
        : t[1] === "h" &&
          t[2] === "u" &&
          t[3] === "r" &&
          t[4] === "s" &&
          t[5] === "d" &&
          t[6] === "a" &&
          t[7] === "y" &&
          ((r = 4), (e = 8));
    else if (
      t[0] === "W" &&
      t[1] === "e" &&
      t[2] === "d" &&
      t[3] === "n" &&
      t[4] === "e" &&
      t[5] === "s" &&
      t[6] === "d" &&
      t[7] === "a" &&
      t[8] === "y"
    )
      ((r = 3), (e = 9));
    else if (t[0] === "F" && t[1] === "r" && t[2] === "i" && t[3] === "d" && t[4] === "a" && t[5] === "y")
      ((r = 5), (e = 6));
    else return;
    if (
      t[e] !== "," ||
      t.length - e - 1 !== 23 ||
      t[e + 1] !== " " ||
      t[e + 4] !== "-" ||
      t[e + 8] !== "-" ||
      t[e + 11] !== " " ||
      t[e + 14] !== ":" ||
      t[e + 17] !== ":" ||
      t[e + 20] !== " " ||
      t[e + 21] !== "G" ||
      t[e + 22] !== "M" ||
      t[e + 23] !== "T"
    )
      return;
    let n = 0;
    if (t[e + 2] === "0") {
      let p = t.charCodeAt(e + 3);
      if (p < 49 || p > 57) return;
      n = p - 48;
    } else {
      let p = t.charCodeAt(e + 2);
      if (p < 49 || p > 51) return;
      let h = t.charCodeAt(e + 3);
      if (h < 48 || h > 57) return;
      n = (p - 48) * 10 + (h - 48);
    }
    let o = -1;
    if (t[e + 5] === "J" && t[e + 6] === "a" && t[e + 7] === "n") o = 0;
    else if (t[e + 5] === "F" && t[e + 6] === "e" && t[e + 7] === "b") o = 1;
    else if (t[e + 5] === "M" && t[e + 6] === "a" && t[e + 7] === "r") o = 2;
    else if (t[e + 5] === "A" && t[e + 6] === "p" && t[e + 7] === "r") o = 3;
    else if (t[e + 5] === "M" && t[e + 6] === "a" && t[e + 7] === "y") o = 4;
    else if (t[e + 5] === "J" && t[e + 6] === "u" && t[e + 7] === "n") o = 5;
    else if (t[e + 5] === "J" && t[e + 6] === "u" && t[e + 7] === "l") o = 6;
    else if (t[e + 5] === "A" && t[e + 6] === "u" && t[e + 7] === "g") o = 7;
    else if (t[e + 5] === "S" && t[e + 6] === "e" && t[e + 7] === "p") o = 8;
    else if (t[e + 5] === "O" && t[e + 6] === "c" && t[e + 7] === "t") o = 9;
    else if (t[e + 5] === "N" && t[e + 6] === "o" && t[e + 7] === "v") o = 10;
    else if (t[e + 5] === "D" && t[e + 6] === "e" && t[e + 7] === "c") o = 11;
    else return;
    let s = t.charCodeAt(e + 9);
    if (s < 48 || s > 57) return;
    let a = t.charCodeAt(e + 10);
    if (a < 48 || a > 57) return;
    let u = (s - 48) * 10 + (a - 48);
    u += u < 70 ? 2e3 : 1900;
    let c = 0;
    if (t[e + 12] === "0") {
      let p = t.charCodeAt(e + 13);
      if (p < 48 || p > 57) return;
      c = p - 48;
    } else {
      let p = t.charCodeAt(e + 12);
      if (p < 48 || p > 50) return;
      let h = t.charCodeAt(e + 13);
      if (h < 48 || h > 57 || (p === 50 && h > 51)) return;
      c = (p - 48) * 10 + (h - 48);
    }
    let m = 0;
    if (t[e + 15] === "0") {
      let p = t.charCodeAt(e + 16);
      if (p < 48 || p > 57) return;
      m = p - 48;
    } else {
      let p = t.charCodeAt(e + 15);
      if (p < 48 || p > 53) return;
      let h = t.charCodeAt(e + 16);
      if (h < 48 || h > 57) return;
      m = (p - 48) * 10 + (h - 48);
    }
    let d = 0;
    if (t[e + 18] === "0") {
      let p = t.charCodeAt(e + 19);
      if (p < 48 || p > 57) return;
      d = p - 48;
    } else {
      let p = t.charCodeAt(e + 18);
      if (p < 48 || p > 53) return;
      let h = t.charCodeAt(e + 19);
      if (h < 48 || h > 57) return;
      d = (p - 48) * 10 + (h - 48);
    }
    let f = new Date(Date.UTC(u, o, n, c, m, d));
    return f.getUTCDay() === r ? f : void 0;
  }
  rti.exports = { parseHttpDate: g1a };
});