/**
 * @module wvn
 * @category unknown
 * @label unknown
 * @position 1013 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wvn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wvn = T((Sae) => {
  "use strict";
  var BEs = $k(),
    LEs = 4,
    nvn = 0,
    ivn = 1,
    MEs = 2;
  function Cae(t) {
    for (var e = t.length; --e >= 0; ) t[e] = 0;
  }
  var FEs = 0,
    lvn = 1,
    UEs = 2,
    $Es = 3,
    jEs = 258,
    AVt = 29,
    eye = 256,
    K6e = eye + 1 + AVt,
    vae = 30,
    yVt = 19,
    mvn = 2 * K6e + 1,
    zV = 15,
    dVt = 16,
    QEs = 7,
    _Vt = 256,
    dvn = 16,
    fvn = 17,
    pvn = 18,
    gVt = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
    dXe = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
    GEs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    hvn = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    qEs = 512,
    jk = new Array((K6e + 2) * 2);
  Cae(jk);
  var Y6e = new Array(vae * 2);
  Cae(Y6e);
  var J6e = new Array(qEs);
  Cae(J6e);
  var X6e = new Array(jEs - $Es + 1);
  Cae(X6e);
  var EVt = new Array(AVt);
  Cae(EVt);
  var fXe = new Array(vae);
  Cae(fXe);
  function fVt(t, e, r, n, o) {
    ((this.static_tree = t),
      (this.extra_bits = e),
      (this.extra_base = r),
      (this.elems = n),
      (this.max_length = o),
      (this.has_stree = t && t.length));
  }
  var gvn, bvn, Avn;
  function pVt(t, e) {
    ((this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e));
  }
  function yvn(t) {
    return t < 256 ? J6e[t] : J6e[256 + (t >>> 7)];
  }
  function Z6e(t, e) {
    ((t.pending_buf[t.pending++] = e & 255), (t.pending_buf[t.pending++] = (e >>> 8) & 255));
  }
  function $8(t, e, r) {
    t.bi_valid > dVt - r
      ? ((t.bi_buf |= (e << t.bi_valid) & 65535),
        Z6e(t, t.bi_buf),
        (t.bi_buf = e >> (dVt - t.bi_valid)),
        (t.bi_valid += r - dVt))
      : ((t.bi_buf |= (e << t.bi_valid) & 65535), (t.bi_valid += r));
  }
  function qT(t, e, r) {
    $8(t, r[e * 2], r[e * 2 + 1]);
  }
  function _vn(t, e) {
    var r = 0;
    do ((r |= t & 1), (t >>>= 1), (r <<= 1));
    while (--e > 0);
    return r >>> 1;
  }
  function HEs(t) {
    t.bi_valid === 16
      ? (Z6e(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
      : t.bi_valid >= 8 && ((t.pending_buf[t.pending++] = t.bi_buf & 255), (t.bi_buf >>= 8), (t.bi_valid -= 8));
  }
  function VEs(t, e) {
    var r = e.dyn_tree,
      n = e.max_code,
      o = e.stat_desc.static_tree,
      s = e.stat_desc.has_stree,
      a = e.stat_desc.extra_bits,
      u = e.stat_desc.extra_base,
      c = e.stat_desc.max_length,
      m,
      d,
      f,
      p,
      h,
      g,
      b = 0;
    for (p = 0; p <= zV; p++) t.bl_count[p] = 0;
    for (r[t.heap[t.heap_max] * 2 + 1] = 0, m = t.heap_max + 1; m < mvn; m++)
      ((d = t.heap[m]),
        (p = r[r[d * 2 + 1] * 2 + 1] + 1),
        p > c && ((p = c), b++),
        (r[d * 2 + 1] = p),
        !(d > n) &&
          (t.bl_count[p]++,
          (h = 0),
          d >= u && (h = a[d - u]),
          (g = r[d * 2]),
          (t.opt_len += g * (p + h)),
          s && (t.static_len += g * (o[d * 2 + 1] + h))));
    if (b !== 0) {
      do {
        for (p = c - 1; t.bl_count[p] === 0; ) p--;
        (t.bl_count[p]--, (t.bl_count[p + 1] += 2), t.bl_count[c]--, (b -= 2));
      } while (b > 0);
      for (p = c; p !== 0; p--)
        for (d = t.bl_count[p]; d !== 0; )
          ((f = t.heap[--m]),
            !(f > n) &&
              (r[f * 2 + 1] !== p && ((t.opt_len += (p - r[f * 2 + 1]) * r[f * 2]), (r[f * 2 + 1] = p)), d--));
    }
  }
  function Evn(t, e, r) {
    var n = new Array(zV + 1),
      o = 0,
      s,
      a;
    for (s = 1; s <= zV; s++) n[s] = o = (o + r[s - 1]) << 1;
    for (a = 0; a <= e; a++) {
      var u = t[a * 2 + 1];
      u !== 0 && (t[a * 2] = _vn(n[u]++, u));
    }
  }
  function WEs() {
    var t,
      e,
      r,
      n,
      o,
      s = new Array(zV + 1);
    for (r = 0, n = 0; n < AVt - 1; n++) for (EVt[n] = r, t = 0; t < 1 << gVt[n]; t++) X6e[r++] = n;
    for (X6e[r - 1] = n, o = 0, n = 0; n < 16; n++) for (fXe[n] = o, t = 0; t < 1 << dXe[n]; t++) J6e[o++] = n;
    for (o >>= 7; n < vae; n++) for (fXe[n] = o << 7, t = 0; t < 1 << (dXe[n] - 7); t++) J6e[256 + o++] = n;
    for (e = 0; e <= zV; e++) s[e] = 0;
    for (t = 0; t <= 143; ) ((jk[t * 2 + 1] = 8), t++, s[8]++);
    for (; t <= 255; ) ((jk[t * 2 + 1] = 9), t++, s[9]++);
    for (; t <= 279; ) ((jk[t * 2 + 1] = 7), t++, s[7]++);
    for (; t <= 287; ) ((jk[t * 2 + 1] = 8), t++, s[8]++);
    for (Evn(jk, K6e + 1, s), t = 0; t < vae; t++) ((Y6e[t * 2 + 1] = 5), (Y6e[t * 2] = _vn(t, 5)));
    ((gvn = new fVt(jk, gVt, eye + 1, K6e, zV)),
      (bvn = new fVt(Y6e, dXe, 0, vae, zV)),
      (Avn = new fVt(new Array(0), GEs, 0, yVt, QEs)));
  }
  function vvn(t) {
    var e;
    for (e = 0; e < K6e; e++) t.dyn_ltree[e * 2] = 0;
    for (e = 0; e < vae; e++) t.dyn_dtree[e * 2] = 0;
    for (e = 0; e < yVt; e++) t.bl_tree[e * 2] = 0;
    ((t.dyn_ltree[_Vt * 2] = 1), (t.opt_len = t.static_len = 0), (t.last_lit = t.matches = 0));
  }
  function Cvn(t) {
    (t.bi_valid > 8 ? Z6e(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
      (t.bi_buf = 0),
      (t.bi_valid = 0));
  }
  function zEs(t, e, r, n) {
    (Cvn(t), n && (Z6e(t, r), Z6e(t, ~r)), BEs.arraySet(t.pending_buf, t.window, e, r, t.pending), (t.pending += r));
  }
  function ovn(t, e, r, n) {
    var o = e * 2,
      s = r * 2;
    return t[o] < t[s] || (t[o] === t[s] && n[e] <= n[r]);
  }
  function hVt(t, e, r) {
    for (
      var n = t.heap[r], o = r << 1;
      o <= t.heap_len &&
      (o < t.heap_len && ovn(e, t.heap[o + 1], t.heap[o], t.depth) && o++, !ovn(e, n, t.heap[o], t.depth));
    )
      ((t.heap[r] = t.heap[o]), (r = o), (o <<= 1));
    t.heap[r] = n;
  }
  function svn(t, e, r) {
    var n,
      o,
      s = 0,
      a,
      u;
    if (t.last_lit !== 0)
      do
        ((n = (t.pending_buf[t.d_buf + s * 2] << 8) | t.pending_buf[t.d_buf + s * 2 + 1]),
          (o = t.pending_buf[t.l_buf + s]),
          s++,
          n === 0
            ? qT(t, o, e)
            : ((a = X6e[o]),
              qT(t, a + eye + 1, e),
              (u = gVt[a]),
              u !== 0 && ((o -= EVt[a]), $8(t, o, u)),
              n--,
              (a = yvn(n)),
              qT(t, a, r),
              (u = dXe[a]),
              u !== 0 && ((n -= fXe[a]), $8(t, n, u))));
      while (s < t.last_lit);
    qT(t, _Vt, e);
  }
  function bVt(t, e) {
    var r = e.dyn_tree,
      n = e.stat_desc.static_tree,
      o = e.stat_desc.has_stree,
      s = e.stat_desc.elems,
      a,
      u,
      c = -1,
      m;
    for (t.heap_len = 0, t.heap_max = mvn, a = 0; a < s; a++)
      r[a * 2] !== 0 ? ((t.heap[++t.heap_len] = c = a), (t.depth[a] = 0)) : (r[a * 2 + 1] = 0);
    for (; t.heap_len < 2; )
      ((m = t.heap[++t.heap_len] = c < 2 ? ++c : 0),
        (r[m * 2] = 1),
        (t.depth[m] = 0),
        t.opt_len--,
        o && (t.static_len -= n[m * 2 + 1]));
    for (e.max_code = c, a = t.heap_len >> 1; a >= 1; a--) hVt(t, r, a);
    m = s;
    do
      ((a = t.heap[1]),
        (t.heap[1] = t.heap[t.heap_len--]),
        hVt(t, r, 1),
        (u = t.heap[1]),
        (t.heap[--t.heap_max] = a),
        (t.heap[--t.heap_max] = u),
        (r[m * 2] = r[a * 2] + r[u * 2]),
        (t.depth[m] = (t.depth[a] >= t.depth[u] ? t.depth[a] : t.depth[u]) + 1),
        (r[a * 2 + 1] = r[u * 2 + 1] = m),
        (t.heap[1] = m++),
        hVt(t, r, 1));
    while (t.heap_len >= 2);
    ((t.heap[--t.heap_max] = t.heap[1]), VEs(t, e), Evn(r, c, t.bl_count));
  }
  function avn(t, e, r) {
    var n,
      o = -1,
      s,
      a = e[1],
      u = 0,
      c = 7,
      m = 4;
    for (a === 0 && ((c = 138), (m = 3)), e[(r + 1) * 2 + 1] = 65535, n = 0; n <= r; n++)
      ((s = a),
        (a = e[(n + 1) * 2 + 1]),
        !(++u < c && s === a) &&
          (u < m
            ? (t.bl_tree[s * 2] += u)
            : s !== 0
              ? (s !== o && t.bl_tree[s * 2]++, t.bl_tree[dvn * 2]++)
              : u <= 10
                ? t.bl_tree[fvn * 2]++
                : t.bl_tree[pvn * 2]++,
          (u = 0),
          (o = s),
          a === 0 ? ((c = 138), (m = 3)) : s === a ? ((c = 6), (m = 3)) : ((c = 7), (m = 4))));
  }
  function uvn(t, e, r) {
    var n,
      o = -1,
      s,
      a = e[1],
      u = 0,
      c = 7,
      m = 4;
    for (a === 0 && ((c = 138), (m = 3)), n = 0; n <= r; n++)
      if (((s = a), (a = e[(n + 1) * 2 + 1]), !(++u < c && s === a))) {
        if (u < m)
          do qT(t, s, t.bl_tree);
          while (--u !== 0);
        else
          s !== 0
            ? (s !== o && (qT(t, s, t.bl_tree), u--), qT(t, dvn, t.bl_tree), $8(t, u - 3, 2))
            : u <= 10
              ? (qT(t, fvn, t.bl_tree), $8(t, u - 3, 3))
              : (qT(t, pvn, t.bl_tree), $8(t, u - 11, 7));
        ((u = 0), (o = s), a === 0 ? ((c = 138), (m = 3)) : s === a ? ((c = 6), (m = 3)) : ((c = 7), (m = 4)));
      }
  }
  function YEs(t) {
    var e;
    for (
      avn(t, t.dyn_ltree, t.l_desc.max_code), avn(t, t.dyn_dtree, t.d_desc.max_code), bVt(t, t.bl_desc), e = yVt - 1;
      e >= 3 && t.bl_tree[hvn[e] * 2 + 1] === 0;
      e--
    );
    return ((t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e);
  }
  function KEs(t, e, r, n) {
    var o;
    for ($8(t, e - 257, 5), $8(t, r - 1, 5), $8(t, n - 4, 4), o = 0; o < n; o++) $8(t, t.bl_tree[hvn[o] * 2 + 1], 3);
    (uvn(t, t.dyn_ltree, e - 1), uvn(t, t.dyn_dtree, r - 1));
  }
  function JEs(t) {
    var e = 4093624447,
      r;
    for (r = 0; r <= 31; r++, e >>>= 1) if (e & 1 && t.dyn_ltree[r * 2] !== 0) return nvn;
    if (t.dyn_ltree[18] !== 0 || t.dyn_ltree[20] !== 0 || t.dyn_ltree[26] !== 0) return ivn;
    for (r = 32; r < eye; r++) if (t.dyn_ltree[r * 2] !== 0) return ivn;
    return nvn;
  }
  var cvn = !1;
  function XEs(t) {
    (cvn || (WEs(), (cvn = !0)),
      (t.l_desc = new pVt(t.dyn_ltree, gvn)),
      (t.d_desc = new pVt(t.dyn_dtree, bvn)),
      (t.bl_desc = new pVt(t.bl_tree, Avn)),
      (t.bi_buf = 0),
      (t.bi_valid = 0),
      vvn(t));
  }
  function Svn(t, e, r, n) {
    ($8(t, (FEs << 1) + (n ? 1 : 0), 3), zEs(t, e, r, !0));
  }
  function ZEs(t) {
    ($8(t, lvn << 1, 3), qT(t, _Vt, jk), HEs(t));
  }
  function evs(t, e, r, n) {
    var o,
      s,
      a = 0;
    (t.level > 0
      ? (t.strm.data_type === MEs && (t.strm.data_type = JEs(t)),
        bVt(t, t.l_desc),
        bVt(t, t.d_desc),
        (a = YEs(t)),
        (o = (t.opt_len + 3 + 7) >>> 3),
        (s = (t.static_len + 3 + 7) >>> 3),
        s <= o && (o = s))
      : (o = s = r + 5),
      r + 4 <= o && e !== -1
        ? Svn(t, e, r, n)
        : t.strategy === LEs || s === o
          ? ($8(t, (lvn << 1) + (n ? 1 : 0), 3), svn(t, jk, Y6e))
          : ($8(t, (UEs << 1) + (n ? 1 : 0), 3),
            KEs(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, a + 1),
            svn(t, t.dyn_ltree, t.dyn_dtree)),
      vvn(t),
      n && Cvn(t));
  }
  function tvs(t, e, r) {
    return (
      (t.pending_buf[t.d_buf + t.last_lit * 2] = (e >>> 8) & 255),
      (t.pending_buf[t.d_buf + t.last_lit * 2 + 1] = e & 255),
      (t.pending_buf[t.l_buf + t.last_lit] = r & 255),
      t.last_lit++,
      e === 0
        ? t.dyn_ltree[r * 2]++
        : (t.matches++, e--, t.dyn_ltree[(X6e[r] + eye + 1) * 2]++, t.dyn_dtree[yvn(e) * 2]++),
      t.last_lit === t.lit_bufsize - 1
    );
  }
  Sae._tr_init = XEs;
  Sae._tr_stored_block = Svn;
  Sae._tr_flush_block = evs;
  Sae._tr_tally = tvs;
  Sae._tr_align = ZEs;
});