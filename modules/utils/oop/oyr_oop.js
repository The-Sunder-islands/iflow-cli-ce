/**
 * @module oyr
 * @category utils/oop
 * @label oop
 * @position 1893 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (oyr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var oyr = T((jfl, Hqi) => {
  var HTe = Gqi(),
    qqi = {};
  for (let t of Object.keys(HTe)) qqi[HTe[t]] = t;
  var Gi = {
    rgb: { channels: 3, labels: "rgb" },
    hsl: { channels: 3, labels: "hsl" },
    hsv: { channels: 3, labels: "hsv" },
    hwb: { channels: 3, labels: "hwb" },
    cmyk: { channels: 4, labels: "cmyk" },
    xyz: { channels: 3, labels: "xyz" },
    lab: { channels: 3, labels: "lab" },
    lch: { channels: 3, labels: "lch" },
    hex: { channels: 1, labels: ["hex"] },
    keyword: { channels: 1, labels: ["keyword"] },
    ansi16: { channels: 1, labels: ["ansi16"] },
    ansi256: { channels: 1, labels: ["ansi256"] },
    hcg: { channels: 3, labels: ["h", "c", "g"] },
    apple: { channels: 3, labels: ["r16", "g16", "b16"] },
    gray: { channels: 1, labels: ["gray"] },
  };
  Hqi.exports = Gi;
  for (let t of Object.keys(Gi)) {
    if (!("channels" in Gi[t])) throw new Error("missing channels property: " + t);
    if (!("labels" in Gi[t])) throw new Error("missing channel labels property: " + t);
    if (Gi[t].labels.length !== Gi[t].channels) throw new Error("channel and label counts mismatch: " + t);
    let { channels: e, labels: r } = Gi[t];
    (delete Gi[t].channels,
      delete Gi[t].labels,
      Object.defineProperty(Gi[t], "channels", { value: e }),
      Object.defineProperty(Gi[t], "labels", { value: r }));
  }
  Gi.rgb.hsl = function (t) {
    let e = t[0] / 255,
      r = t[1] / 255,
      n = t[2] / 255,
      o = Math.min(e, r, n),
      s = Math.max(e, r, n),
      a = s - o,
      u,
      c;
    (s === o
      ? (u = 0)
      : e === s
        ? (u = (r - n) / a)
        : r === s
          ? (u = 2 + (n - e) / a)
          : n === s && (u = 4 + (e - r) / a),
      (u = Math.min(u * 60, 360)),
      u < 0 && (u += 360));
    let m = (o + s) / 2;
    return (s === o ? (c = 0) : m <= 0.5 ? (c = a / (s + o)) : (c = a / (2 - s - o)), [u, c * 100, m * 100]);
  };
  Gi.rgb.hsv = function (t) {
    let e,
      r,
      n,
      o,
      s,
      a = t[0] / 255,
      u = t[1] / 255,
      c = t[2] / 255,
      m = Math.max(a, u, c),
      d = m - Math.min(a, u, c),
      f = function (p) {
        return (m - p) / 6 / d + 1 / 2;
      };
    return (
      d === 0
        ? ((o = 0), (s = 0))
        : ((s = d / m),
          (e = f(a)),
          (r = f(u)),
          (n = f(c)),
          a === m ? (o = n - r) : u === m ? (o = 1 / 3 + e - n) : c === m && (o = 2 / 3 + r - e),
          o < 0 ? (o += 1) : o > 1 && (o -= 1)),
      [o * 360, s * 100, m * 100]
    );
  };
  Gi.rgb.hwb = function (t) {
    let e = t[0],
      r = t[1],
      n = t[2],
      o = Gi.rgb.hsl(t)[0],
      s = (1 / 255) * Math.min(e, Math.min(r, n));
    return ((n = 1 - (1 / 255) * Math.max(e, Math.max(r, n))), [o, s * 100, n * 100]);
  };
  Gi.rgb.cmyk = function (t) {
    let e = t[0] / 255,
      r = t[1] / 255,
      n = t[2] / 255,
      o = Math.min(1 - e, 1 - r, 1 - n),
      s = (1 - e - o) / (1 - o) || 0,
      a = (1 - r - o) / (1 - o) || 0,
      u = (1 - n - o) / (1 - o) || 0;
    return [s * 100, a * 100, u * 100, o * 100];
  };
  function zcu(t, e) {
    return (t[0] - e[0]) ** 2 + (t[1] - e[1]) ** 2 + (t[2] - e[2]) ** 2;
  }
  Gi.rgb.keyword = function (t) {
    let e = qqi[t];
    if (e) return e;
    let r = 1 / 0,
      n;
    for (let o of Object.keys(HTe)) {
      let s = HTe[o],
        a = zcu(t, s);
      a < r && ((r = a), (n = o));
    }
    return n;
  };
  Gi.keyword.rgb = function (t) {
    return HTe[t];
  };
  Gi.rgb.xyz = function (t) {
    let e = t[0] / 255,
      r = t[1] / 255,
      n = t[2] / 255;
    ((e = e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92),
      (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92),
      (n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92));
    let o = e * 0.4124 + r * 0.3576 + n * 0.1805,
      s = e * 0.2126 + r * 0.7152 + n * 0.0722,
      a = e * 0.0193 + r * 0.1192 + n * 0.9505;
    return [o * 100, s * 100, a * 100];
  };
  Gi.rgb.lab = function (t) {
    let e = Gi.rgb.xyz(t),
      r = e[0],
      n = e[1],
      o = e[2];
    ((r /= 95.047),
      (n /= 100),
      (o /= 108.883),
      (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
      (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
      (o = o > 0.008856 ? o ** (1 / 3) : 7.787 * o + 16 / 116));
    let s = 116 * n - 16,
      a = 500 * (r - n),
      u = 200 * (n - o);
    return [s, a, u];
  };
  Gi.hsl.rgb = function (t) {
    let e = t[0] / 360,
      r = t[1] / 100,
      n = t[2] / 100,
      o,
      s,
      a;
    if (r === 0) return ((a = n * 255), [a, a, a]);
    n < 0.5 ? (o = n * (1 + r)) : (o = n + r - n * r);
    let u = 2 * n - o,
      c = [0, 0, 0];
    for (let m = 0; m < 3; m++)
      ((s = e + (1 / 3) * -(m - 1)),
        s < 0 && s++,
        s > 1 && s--,
        6 * s < 1
          ? (a = u + (o - u) * 6 * s)
          : 2 * s < 1
            ? (a = o)
            : 3 * s < 2
              ? (a = u + (o - u) * (2 / 3 - s) * 6)
              : (a = u),
        (c[m] = a * 255));
    return c;
  };
  Gi.hsl.hsv = function (t) {
    let e = t[0],
      r = t[1] / 100,
      n = t[2] / 100,
      o = r,
      s = Math.max(n, 0.01);
    ((n *= 2), (r *= n <= 1 ? n : 2 - n), (o *= s <= 1 ? s : 2 - s));
    let a = (n + r) / 2,
      u = n === 0 ? (2 * o) / (s + o) : (2 * r) / (n + r);
    return [e, u * 100, a * 100];
  };
  Gi.hsv.rgb = function (t) {
    let e = t[0] / 60,
      r = t[1] / 100,
      n = t[2] / 100,
      o = Math.floor(e) % 6,
      s = e - Math.floor(e),
      a = 255 * n * (1 - r),
      u = 255 * n * (1 - r * s),
      c = 255 * n * (1 - r * (1 - s));
    switch (((n *= 255), o)) {
      case 0:
        return [n, c, a];
      case 1:
        return [u, n, a];
      case 2:
        return [a, n, c];
      case 3:
        return [a, u, n];
      case 4:
        return [c, a, n];
      case 5:
        return [n, a, u];
    }
  };
  Gi.hsv.hsl = function (t) {
    let e = t[0],
      r = t[1] / 100,
      n = t[2] / 100,
      o = Math.max(n, 0.01),
      s,
      a;
    a = (2 - r) * n;
    let u = (2 - r) * o;
    return ((s = r * o), (s /= u <= 1 ? u : 2 - u), (s = s || 0), (a /= 2), [e, s * 100, a * 100]);
  };
  Gi.hwb.rgb = function (t) {
    let e = t[0] / 360,
      r = t[1] / 100,
      n = t[2] / 100,
      o = r + n,
      s;
    o > 1 && ((r /= o), (n /= o));
    let a = Math.floor(6 * e),
      u = 1 - n;
    ((s = 6 * e - a), (a & 1) !== 0 && (s = 1 - s));
    let c = r + s * (u - r),
      m,
      d,
      f;
    switch (a) {
      default:
      case 6:
      case 0:
        ((m = u), (d = c), (f = r));
        break;
      case 1:
        ((m = c), (d = u), (f = r));
        break;
      case 2:
        ((m = r), (d = u), (f = c));
        break;
      case 3:
        ((m = r), (d = c), (f = u));
        break;
      case 4:
        ((m = c), (d = r), (f = u));
        break;
      case 5:
        ((m = u), (d = r), (f = c));
        break;
    }
    return [m * 255, d * 255, f * 255];
  };
  Gi.cmyk.rgb = function (t) {
    let e = t[0] / 100,
      r = t[1] / 100,
      n = t[2] / 100,
      o = t[3] / 100,
      s = 1 - Math.min(1, e * (1 - o) + o),
      a = 1 - Math.min(1, r * (1 - o) + o),
      u = 1 - Math.min(1, n * (1 - o) + o);
    return [s * 255, a * 255, u * 255];
  };
  Gi.xyz.rgb = function (t) {
    let e = t[0] / 100,
      r = t[1] / 100,
      n = t[2] / 100,
      o,
      s,
      a;
    return (
      (o = e * 3.2406 + r * -1.5372 + n * -0.4986),
      (s = e * -0.9689 + r * 1.8758 + n * 0.0415),
      (a = e * 0.0557 + r * -0.204 + n * 1.057),
      (o = o > 0.0031308 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92),
      (s = s > 0.0031308 ? 1.055 * s ** (1 / 2.4) - 0.055 : s * 12.92),
      (a = a > 0.0031308 ? 1.055 * a ** (1 / 2.4) - 0.055 : a * 12.92),
      (o = Math.min(Math.max(0, o), 1)),
      (s = Math.min(Math.max(0, s), 1)),
      (a = Math.min(Math.max(0, a), 1)),
      [o * 255, s * 255, a * 255]
    );
  };
  Gi.xyz.lab = function (t) {
    let e = t[0],
      r = t[1],
      n = t[2];
    ((e /= 95.047),
      (r /= 100),
      (n /= 108.883),
      (e = e > 0.008856 ? e ** (1 / 3) : 7.787 * e + 16 / 116),
      (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
      (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116));
    let o = 116 * r - 16,
      s = 500 * (e - r),
      a = 200 * (r - n);
    return [o, s, a];
  };
  Gi.lab.xyz = function (t) {
    let e = t[0],
      r = t[1],
      n = t[2],
      o,
      s,
      a;
    ((s = (e + 16) / 116), (o = r / 500 + s), (a = s - n / 200));
    let u = s ** 3,
      c = o ** 3,
      m = a ** 3;
    return (
      (s = u > 0.008856 ? u : (s - 16 / 116) / 7.787),
      (o = c > 0.008856 ? c : (o - 16 / 116) / 7.787),
      (a = m > 0.008856 ? m : (a - 16 / 116) / 7.787),
      (o *= 95.047),
      (s *= 100),
      (a *= 108.883),
      [o, s, a]
    );
  };
  Gi.lab.lch = function (t) {
    let e = t[0],
      r = t[1],
      n = t[2],
      o;
    ((o = (Math.atan2(n, r) * 360) / 2 / Math.PI), o < 0 && (o += 360));
    let a = Math.sqrt(r * r + n * n);
    return [e, a, o];
  };
  Gi.lch.lab = function (t) {
    let e = t[0],
      r = t[1],
      o = (t[2] / 360) * 2 * Math.PI,
      s = r * Math.cos(o),
      a = r * Math.sin(o);
    return [e, s, a];
  };
  Gi.rgb.ansi16 = function (t, e = null) {
    let [r, n, o] = t,
      s = e === null ? Gi.rgb.hsv(t)[2] : e;
    if (((s = Math.round(s / 50)), s === 0)) return 30;
    let a = 30 + ((Math.round(o / 255) << 2) | (Math.round(n / 255) << 1) | Math.round(r / 255));
    return (s === 2 && (a += 60), a);
  };
  Gi.hsv.ansi16 = function (t) {
    return Gi.rgb.ansi16(Gi.hsv.rgb(t), t[2]);
  };
  Gi.rgb.ansi256 = function (t) {
    let e = t[0],
      r = t[1],
      n = t[2];
    return e === r && r === n
      ? e < 8
        ? 16
        : e > 248
          ? 231
          : Math.round(((e - 8) / 247) * 24) + 232
      : 16 + 36 * Math.round((e / 255) * 5) + 6 * Math.round((r / 255) * 5) + Math.round((n / 255) * 5);
  };
  Gi.ansi16.rgb = function (t) {
    let e = t % 10;
    if (e === 0 || e === 7) return (t > 50 && (e += 3.5), (e = (e / 10.5) * 255), [e, e, e]);
    let r = (~~(t > 50) + 1) * 0.5,
      n = (e & 1) * r * 255,
      o = ((e >> 1) & 1) * r * 255,
      s = ((e >> 2) & 1) * r * 255;
    return [n, o, s];
  };
  Gi.ansi256.rgb = function (t) {
    if (t >= 232) {
      let s = (t - 232) * 10 + 8;
      return [s, s, s];
    }
    t -= 16;
    let e,
      r = (Math.floor(t / 36) / 5) * 255,
      n = (Math.floor((e = t % 36) / 6) / 5) * 255,
      o = ((e % 6) / 5) * 255;
    return [r, n, o];
  };
  Gi.rgb.hex = function (t) {
    let r = (((Math.round(t[0]) & 255) << 16) + ((Math.round(t[1]) & 255) << 8) + (Math.round(t[2]) & 255))
      .toString(16)
      .toUpperCase();
    return "000000".substring(r.length) + r;
  };
  Gi.hex.rgb = function (t) {
    let e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!e) return [0, 0, 0];
    let r = e[0];
    e[0].length === 3 &&
      (r = r
        .split("")
        .map((u) => u + u)
        .join(""));
    let n = parseInt(r, 16),
      o = (n >> 16) & 255,
      s = (n >> 8) & 255,
      a = n & 255;
    return [o, s, a];
  };
  Gi.rgb.hcg = function (t) {
    let e = t[0] / 255,
      r = t[1] / 255,
      n = t[2] / 255,
      o = Math.max(Math.max(e, r), n),
      s = Math.min(Math.min(e, r), n),
      a = o - s,
      u,
      c;
    return (
      a < 1 ? (u = s / (1 - a)) : (u = 0),
      a <= 0 ? (c = 0) : o === e ? (c = ((r - n) / a) % 6) : o === r ? (c = 2 + (n - e) / a) : (c = 4 + (e - r) / a),
      (c /= 6),
      (c %= 1),
      [c * 360, a * 100, u * 100]
    );
  };
  Gi.hsl.hcg = function (t) {
    let e = t[1] / 100,
      r = t[2] / 100,
      n = r < 0.5 ? 2 * e * r : 2 * e * (1 - r),
      o = 0;
    return (n < 1 && (o = (r - 0.5 * n) / (1 - n)), [t[0], n * 100, o * 100]);
  };
  Gi.hsv.hcg = function (t) {
    let e = t[1] / 100,
      r = t[2] / 100,
      n = e * r,
      o = 0;
    return (n < 1 && (o = (r - n) / (1 - n)), [t[0], n * 100, o * 100]);
  };
  Gi.hcg.rgb = function (t) {
    let e = t[0] / 360,
      r = t[1] / 100,
      n = t[2] / 100;
    if (r === 0) return [n * 255, n * 255, n * 255];
    let o = [0, 0, 0],
      s = (e % 1) * 6,
      a = s % 1,
      u = 1 - a,
      c = 0;
    switch (Math.floor(s)) {
      case 0:
        ((o[0] = 1), (o[1] = a), (o[2] = 0));
        break;
      case 1:
        ((o[0] = u), (o[1] = 1), (o[2] = 0));
        break;
      case 2:
        ((o[0] = 0), (o[1] = 1), (o[2] = a));
        break;
      case 3:
        ((o[0] = 0), (o[1] = u), (o[2] = 1));
        break;
      case 4:
        ((o[0] = a), (o[1] = 0), (o[2] = 1));
        break;
      default:
        ((o[0] = 1), (o[1] = 0), (o[2] = u));
    }
    return ((c = (1 - r) * n), [(r * o[0] + c) * 255, (r * o[1] + c) * 255, (r * o[2] + c) * 255]);
  };
  Gi.hcg.hsv = function (t) {
    let e = t[1] / 100,
      r = t[2] / 100,
      n = e + r * (1 - e),
      o = 0;
    return (n > 0 && (o = e / n), [t[0], o * 100, n * 100]);
  };
  Gi.hcg.hsl = function (t) {
    let e = t[1] / 100,
      n = (t[2] / 100) * (1 - e) + 0.5 * e,
      o = 0;
    return (
      n > 0 && n < 0.5 ? (o = e / (2 * n)) : n >= 0.5 && n < 1 && (o = e / (2 * (1 - n))),
      [t[0], o * 100, n * 100]
    );
  };
  Gi.hcg.hwb = function (t) {
    let e = t[1] / 100,
      r = t[2] / 100,
      n = e + r * (1 - e);
    return [t[0], (n - e) * 100, (1 - n) * 100];
  };
  Gi.hwb.hcg = function (t) {
    let e = t[1] / 100,
      n = 1 - t[2] / 100,
      o = n - e,
      s = 0;
    return (o < 1 && (s = (n - o) / (1 - o)), [t[0], o * 100, s * 100]);
  };
  Gi.apple.rgb = function (t) {
    return [(t[0] / 65535) * 255, (t[1] / 65535) * 255, (t[2] / 65535) * 255];
  };
  Gi.rgb.apple = function (t) {
    return [(t[0] / 255) * 65535, (t[1] / 255) * 65535, (t[2] / 255) * 65535];
  };
  Gi.gray.rgb = function (t) {
    return [(t[0] / 100) * 255, (t[0] / 100) * 255, (t[0] / 100) * 255];
  };
  Gi.gray.hsl = function (t) {
    return [0, 0, t[0]];
  };
  Gi.gray.hsv = Gi.gray.hsl;
  Gi.gray.hwb = function (t) {
    return [0, 100, t[0]];
  };
  Gi.gray.cmyk = function (t) {
    return [0, 0, 0, t[0]];
  };
  Gi.gray.lab = function (t) {
    return [t[0], 0, 0];
  };
  Gi.gray.hex = function (t) {
    let e = Math.round((t[0] / 100) * 255) & 255,
      n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
    return "000000".substring(n.length) + n;
  };
  Gi.rgb.gray = function (t) {
    return [((t[0] + t[1] + t[2]) / 3 / 255) * 100];
  };
});