/**
 * @module Mvn
 * @category unknown
 * @label unknown
 * @position 1017 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Mvn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Mvn = T((WT) => {
  "use strict";
  var P2 = $k(),
    CE = wvn(),
    Ovn = vVt(),
    nF = CVt(),
    svs = pXe(),
    XV = 0,
    avs = 1,
    uvs = 3,
    uF = 4,
    Ivn = 5,
    VT = 0,
    Rvn = 1,
    SE = -2,
    cvs = -3,
    SVt = -5,
    lvs = -1,
    mvs = 1,
    hXe = 2,
    dvs = 3,
    fvs = 4,
    pvs = 0,
    hvs = 2,
    yXe = 8,
    gvs = 9,
    bvs = 15,
    Avs = 8,
    yvs = 29,
    _vs = 256,
    xVt = _vs + 1 + yvs,
    Evs = 30,
    vvs = 19,
    Cvs = 2 * xVt + 1,
    Svs = 15,
    Tu = 3,
    sF = 258,
    W4 = sF + Tu + 1,
    wvs = 32,
    _Xe = 42,
    TVt = 69,
    gXe = 73,
    bXe = 91,
    AXe = 103,
    YV = 113,
    rye = 666,
    Lp = 1,
    nye = 2,
    KV = 3,
    Tae = 4,
    xvs = 3;
  function aF(t, e) {
    return ((t.msg = svs[e]), e);
  }
  function kvn(t) {
    return (t << 1) - (t > 4 ? 9 : 0);
  }
  function oF(t) {
    for (var e = t.length; --e >= 0; ) t[e] = 0;
  }
  function iF(t) {
    var e = t.state,
      r = e.pending;
    (r > t.avail_out && (r = t.avail_out),
      r !== 0 &&
        (P2.arraySet(t.output, e.pending_buf, e.pending_out, r, t.next_out),
        (t.next_out += r),
        (e.pending_out += r),
        (t.total_out += r),
        (t.avail_out -= r),
        (e.pending -= r),
        e.pending === 0 && (e.pending_out = 0)));
  }
  function wg(t, e) {
    (CE._tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e),
      (t.block_start = t.strstart),
      iF(t.strm));
  }
  function vc(t, e) {
    t.pending_buf[t.pending++] = e;
  }
  function tye(t, e) {
    ((t.pending_buf[t.pending++] = (e >>> 8) & 255), (t.pending_buf[t.pending++] = e & 255));
  }
  function Tvs(t, e, r, n) {
    var o = t.avail_in;
    return (
      o > n && (o = n),
      o === 0
        ? 0
        : ((t.avail_in -= o),
          P2.arraySet(e, t.input, t.next_in, o, r),
          t.state.wrap === 1
            ? (t.adler = Ovn(t.adler, e, o, r))
            : t.state.wrap === 2 && (t.adler = nF(t.adler, e, o, r)),
          (t.next_in += o),
          (t.total_in += o),
          o)
    );
  }
  function Nvn(t, e) {
    var r = t.max_chain_length,
      n = t.strstart,
      o,
      s,
      a = t.prev_length,
      u = t.nice_match,
      c = t.strstart > t.w_size - W4 ? t.strstart - (t.w_size - W4) : 0,
      m = t.window,
      d = t.w_mask,
      f = t.prev,
      p = t.strstart + sF,
      h = m[n + a - 1],
      g = m[n + a];
    (t.prev_length >= t.good_match && (r >>= 2), u > t.lookahead && (u = t.lookahead));
    do
      if (((o = e), !(m[o + a] !== g || m[o + a - 1] !== h || m[o] !== m[n] || m[++o] !== m[n + 1]))) {
        ((n += 2), o++);
        do;
        while (
          m[++n] === m[++o] &&
          m[++n] === m[++o] &&
          m[++n] === m[++o] &&
          m[++n] === m[++o] &&
          m[++n] === m[++o] &&
          m[++n] === m[++o] &&
          m[++n] === m[++o] &&
          m[++n] === m[++o] &&
          n < p
        );
        if (((s = sF - (p - n)), (n = p - sF), s > a)) {
          if (((t.match_start = e), (a = s), s >= u)) break;
          ((h = m[n + a - 1]), (g = m[n + a]));
        }
      }
    while ((e = f[e & d]) > c && --r !== 0);
    return a <= t.lookahead ? a : t.lookahead;
  }
  function JV(t) {
    var e = t.w_size,
      r,
      n,
      o,
      s,
      a;
    do {
      if (((s = t.window_size - t.lookahead - t.strstart), t.strstart >= e + (e - W4))) {
        (P2.arraySet(t.window, t.window, e, e, 0),
          (t.match_start -= e),
          (t.strstart -= e),
          (t.block_start -= e),
          (n = t.hash_size),
          (r = n));
        do ((o = t.head[--r]), (t.head[r] = o >= e ? o - e : 0));
        while (--n);
        ((n = e), (r = n));
        do ((o = t.prev[--r]), (t.prev[r] = o >= e ? o - e : 0));
        while (--n);
        s += e;
      }
      if (t.strm.avail_in === 0) break;
      if (((n = Tvs(t.strm, t.window, t.strstart + t.lookahead, s)), (t.lookahead += n), t.lookahead + t.insert >= Tu))
        for (
          a = t.strstart - t.insert,
            t.ins_h = t.window[a],
            t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[a + 1]) & t.hash_mask;
          t.insert &&
          ((t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[a + Tu - 1]) & t.hash_mask),
          (t.prev[a & t.w_mask] = t.head[t.ins_h]),
          (t.head[t.ins_h] = a),
          a++,
          t.insert--,
          !(t.lookahead + t.insert < Tu));
        );
    } while (t.lookahead < W4 && t.strm.avail_in !== 0);
  }
  function Dvs(t, e) {
    var r = 65535;
    for (r > t.pending_buf_size - 5 && (r = t.pending_buf_size - 5); ; ) {
      if (t.lookahead <= 1) {
        if ((JV(t), t.lookahead === 0 && e === XV)) return Lp;
        if (t.lookahead === 0) break;
      }
      ((t.strstart += t.lookahead), (t.lookahead = 0));
      var n = t.block_start + r;
      if (
        ((t.strstart === 0 || t.strstart >= n) &&
          ((t.lookahead = t.strstart - n), (t.strstart = n), wg(t, !1), t.strm.avail_out === 0)) ||
        (t.strstart - t.block_start >= t.w_size - W4 && (wg(t, !1), t.strm.avail_out === 0))
      )
        return Lp;
    }
    return (
      (t.insert = 0),
      e === uF
        ? (wg(t, !0), t.strm.avail_out === 0 ? KV : Tae)
        : (t.strstart > t.block_start && (wg(t, !1), t.strm.avail_out === 0), Lp)
    );
  }
  function wVt(t, e) {
    for (var r, n; ; ) {
      if (t.lookahead < W4) {
        if ((JV(t), t.lookahead < W4 && e === XV)) return Lp;
        if (t.lookahead === 0) break;
      }
      if (
        ((r = 0),
        t.lookahead >= Tu &&
          ((t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + Tu - 1]) & t.hash_mask),
          (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
          (t.head[t.ins_h] = t.strstart)),
        r !== 0 && t.strstart - r <= t.w_size - W4 && (t.match_length = Nvn(t, r)),
        t.match_length >= Tu)
      )
        if (
          ((n = CE._tr_tally(t, t.strstart - t.match_start, t.match_length - Tu)),
          (t.lookahead -= t.match_length),
          t.match_length <= t.max_lazy_match && t.lookahead >= Tu)
        ) {
          t.match_length--;
          do
            (t.strstart++,
              (t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + Tu - 1]) & t.hash_mask),
              (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = t.strstart));
          while (--t.match_length !== 0);
          t.strstart++;
        } else
          ((t.strstart += t.match_length),
            (t.match_length = 0),
            (t.ins_h = t.window[t.strstart]),
            (t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 1]) & t.hash_mask));
      else ((n = CE._tr_tally(t, 0, t.window[t.strstart])), t.lookahead--, t.strstart++);
      if (n && (wg(t, !1), t.strm.avail_out === 0)) return Lp;
    }
    return (
      (t.insert = t.strstart < Tu - 1 ? t.strstart : Tu - 1),
      e === uF
        ? (wg(t, !0), t.strm.avail_out === 0 ? KV : Tae)
        : t.last_lit && (wg(t, !1), t.strm.avail_out === 0)
          ? Lp
          : nye
    );
  }
  function wae(t, e) {
    for (var r, n, o; ; ) {
      if (t.lookahead < W4) {
        if ((JV(t), t.lookahead < W4 && e === XV)) return Lp;
        if (t.lookahead === 0) break;
      }
      if (
        ((r = 0),
        t.lookahead >= Tu &&
          ((t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + Tu - 1]) & t.hash_mask),
          (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
          (t.head[t.ins_h] = t.strstart)),
        (t.prev_length = t.match_length),
        (t.prev_match = t.match_start),
        (t.match_length = Tu - 1),
        r !== 0 &&
          t.prev_length < t.max_lazy_match &&
          t.strstart - r <= t.w_size - W4 &&
          ((t.match_length = Nvn(t, r)),
          t.match_length <= 5 &&
            (t.strategy === mvs || (t.match_length === Tu && t.strstart - t.match_start > 4096)) &&
            (t.match_length = Tu - 1)),
        t.prev_length >= Tu && t.match_length <= t.prev_length)
      ) {
        ((o = t.strstart + t.lookahead - Tu),
          (n = CE._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - Tu)),
          (t.lookahead -= t.prev_length - 1),
          (t.prev_length -= 2));
        do
          ++t.strstart <= o &&
            ((t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + Tu - 1]) & t.hash_mask),
            (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
            (t.head[t.ins_h] = t.strstart));
        while (--t.prev_length !== 0);
        if (
          ((t.match_available = 0), (t.match_length = Tu - 1), t.strstart++, n && (wg(t, !1), t.strm.avail_out === 0))
        )
          return Lp;
      } else if (t.match_available) {
        if (
          ((n = CE._tr_tally(t, 0, t.window[t.strstart - 1])),
          n && wg(t, !1),
          t.strstart++,
          t.lookahead--,
          t.strm.avail_out === 0)
        )
          return Lp;
      } else ((t.match_available = 1), t.strstart++, t.lookahead--);
    }
    return (
      t.match_available && ((n = CE._tr_tally(t, 0, t.window[t.strstart - 1])), (t.match_available = 0)),
      (t.insert = t.strstart < Tu - 1 ? t.strstart : Tu - 1),
      e === uF
        ? (wg(t, !0), t.strm.avail_out === 0 ? KV : Tae)
        : t.last_lit && (wg(t, !1), t.strm.avail_out === 0)
          ? Lp
          : nye
    );
  }
  function Ivs(t, e) {
    for (var r, n, o, s, a = t.window; ; ) {
      if (t.lookahead <= sF) {
        if ((JV(t), t.lookahead <= sF && e === XV)) return Lp;
        if (t.lookahead === 0) break;
      }
      if (
        ((t.match_length = 0),
        t.lookahead >= Tu &&
          t.strstart > 0 &&
          ((o = t.strstart - 1), (n = a[o]), n === a[++o] && n === a[++o] && n === a[++o]))
      ) {
        s = t.strstart + sF;
        do;
        while (
          n === a[++o] &&
          n === a[++o] &&
          n === a[++o] &&
          n === a[++o] &&
          n === a[++o] &&
          n === a[++o] &&
          n === a[++o] &&
          n === a[++o] &&
          o < s
        );
        ((t.match_length = sF - (s - o)), t.match_length > t.lookahead && (t.match_length = t.lookahead));
      }
      if (
        (t.match_length >= Tu
          ? ((r = CE._tr_tally(t, 1, t.match_length - Tu)),
            (t.lookahead -= t.match_length),
            (t.strstart += t.match_length),
            (t.match_length = 0))
          : ((r = CE._tr_tally(t, 0, t.window[t.strstart])), t.lookahead--, t.strstart++),
        r && (wg(t, !1), t.strm.avail_out === 0))
      )
        return Lp;
    }
    return (
      (t.insert = 0),
      e === uF
        ? (wg(t, !0), t.strm.avail_out === 0 ? KV : Tae)
        : t.last_lit && (wg(t, !1), t.strm.avail_out === 0)
          ? Lp
          : nye
    );
  }
  function Rvs(t, e) {
    for (var r; ; ) {
      if (t.lookahead === 0 && (JV(t), t.lookahead === 0)) {
        if (e === XV) return Lp;
        break;
      }
      if (
        ((t.match_length = 0),
        (r = CE._tr_tally(t, 0, t.window[t.strstart])),
        t.lookahead--,
        t.strstart++,
        r && (wg(t, !1), t.strm.avail_out === 0))
      )
        return Lp;
    }
    return (
      (t.insert = 0),
      e === uF
        ? (wg(t, !0), t.strm.avail_out === 0 ? KV : Tae)
        : t.last_lit && (wg(t, !1), t.strm.avail_out === 0)
          ? Lp
          : nye
    );
  }
  function HT(t, e, r, n, o) {
    ((this.good_length = t), (this.max_lazy = e), (this.nice_length = r), (this.max_chain = n), (this.func = o));
  }
  var xae;
  xae = [
    new HT(0, 0, 0, 0, Dvs),
    new HT(4, 4, 8, 4, wVt),
    new HT(4, 5, 16, 8, wVt),
    new HT(4, 6, 32, 32, wVt),
    new HT(4, 4, 16, 16, wae),
    new HT(8, 16, 32, 32, wae),
    new HT(8, 16, 128, 128, wae),
    new HT(8, 32, 128, 256, wae),
    new HT(32, 128, 258, 1024, wae),
    new HT(32, 258, 258, 4096, wae),
  ];
  function kvs(t) {
    ((t.window_size = 2 * t.w_size),
      oF(t.head),
      (t.max_lazy_match = xae[t.level].max_lazy),
      (t.good_match = xae[t.level].good_length),
      (t.nice_match = xae[t.level].nice_length),
      (t.max_chain_length = xae[t.level].max_chain),
      (t.strstart = 0),
      (t.block_start = 0),
      (t.lookahead = 0),
      (t.insert = 0),
      (t.match_length = t.prev_length = Tu - 1),
      (t.match_available = 0),
      (t.ins_h = 0));
  }
  function Ovs() {
    ((this.strm = null),
      (this.status = 0),
      (this.pending_buf = null),
      (this.pending_buf_size = 0),
      (this.pending_out = 0),
      (this.pending = 0),
      (this.wrap = 0),
      (this.gzhead = null),
      (this.gzindex = 0),
      (this.method = yXe),
      (this.last_flush = -1),
      (this.w_size = 0),
      (this.w_bits = 0),
      (this.w_mask = 0),
      (this.window = null),
      (this.window_size = 0),
      (this.prev = null),
      (this.head = null),
      (this.ins_h = 0),
      (this.hash_size = 0),
      (this.hash_bits = 0),
      (this.hash_mask = 0),
      (this.hash_shift = 0),
      (this.block_start = 0),
      (this.match_length = 0),
      (this.prev_match = 0),
      (this.match_available = 0),
      (this.strstart = 0),
      (this.match_start = 0),
      (this.lookahead = 0),
      (this.prev_length = 0),
      (this.max_chain_length = 0),
      (this.max_lazy_match = 0),
      (this.level = 0),
      (this.strategy = 0),
      (this.good_match = 0),
      (this.nice_match = 0),
      (this.dyn_ltree = new P2.Buf16(Cvs * 2)),
      (this.dyn_dtree = new P2.Buf16((2 * Evs + 1) * 2)),
      (this.bl_tree = new P2.Buf16((2 * vvs + 1) * 2)),
      oF(this.dyn_ltree),
      oF(this.dyn_dtree),
      oF(this.bl_tree),
      (this.l_desc = null),
      (this.d_desc = null),
      (this.bl_desc = null),
      (this.bl_count = new P2.Buf16(Svs + 1)),
      (this.heap = new P2.Buf16(2 * xVt + 1)),
      oF(this.heap),
      (this.heap_len = 0),
      (this.heap_max = 0),
      (this.depth = new P2.Buf16(2 * xVt + 1)),
      oF(this.depth),
      (this.l_buf = 0),
      (this.lit_bufsize = 0),
      (this.last_lit = 0),
      (this.d_buf = 0),
      (this.opt_len = 0),
      (this.static_len = 0),
      (this.matches = 0),
      (this.insert = 0),
      (this.bi_buf = 0),
      (this.bi_valid = 0));
  }
  function Pvn(t) {
    var e;
    return !t || !t.state
      ? aF(t, SE)
      : ((t.total_in = t.total_out = 0),
        (t.data_type = hvs),
        (e = t.state),
        (e.pending = 0),
        (e.pending_out = 0),
        e.wrap < 0 && (e.wrap = -e.wrap),
        (e.status = e.wrap ? _Xe : YV),
        (t.adler = e.wrap === 2 ? 0 : 1),
        (e.last_flush = XV),
        CE._tr_init(e),
        VT);
  }
  function Bvn(t) {
    var e = Pvn(t);
    return (e === VT && kvs(t.state), e);
  }
  function Nvs(t, e) {
    return !t || !t.state || t.state.wrap !== 2 ? SE : ((t.state.gzhead = e), VT);
  }
  function Lvn(t, e, r, n, o, s) {
    if (!t) return SE;
    var a = 1;
    if (
      (e === lvs && (e = 6),
      n < 0 ? ((a = 0), (n = -n)) : n > 15 && ((a = 2), (n -= 16)),
      o < 1 || o > gvs || r !== yXe || n < 8 || n > 15 || e < 0 || e > 9 || s < 0 || s > fvs)
    )
      return aF(t, SE);
    n === 8 && (n = 9);
    var u = new Ovs();
    return (
      (t.state = u),
      (u.strm = t),
      (u.wrap = a),
      (u.gzhead = null),
      (u.w_bits = n),
      (u.w_size = 1 << u.w_bits),
      (u.w_mask = u.w_size - 1),
      (u.hash_bits = o + 7),
      (u.hash_size = 1 << u.hash_bits),
      (u.hash_mask = u.hash_size - 1),
      (u.hash_shift = ~~((u.hash_bits + Tu - 1) / Tu)),
      (u.window = new P2.Buf8(u.w_size * 2)),
      (u.head = new P2.Buf16(u.hash_size)),
      (u.prev = new P2.Buf16(u.w_size)),
      (u.lit_bufsize = 1 << (o + 6)),
      (u.pending_buf_size = u.lit_bufsize * 4),
      (u.pending_buf = new P2.Buf8(u.pending_buf_size)),
      (u.d_buf = 1 * u.lit_bufsize),
      (u.l_buf = 3 * u.lit_bufsize),
      (u.level = e),
      (u.strategy = s),
      (u.method = r),
      Bvn(t)
    );
  }
  function Pvs(t, e) {
    return Lvn(t, e, yXe, bvs, Avs, pvs);
  }
  function Bvs(t, e) {
    var r, n, o, s;
    if (!t || !t.state || e > Ivn || e < 0) return t ? aF(t, SE) : SE;
    if (((n = t.state), !t.output || (!t.input && t.avail_in !== 0) || (n.status === rye && e !== uF)))
      return aF(t, t.avail_out === 0 ? SVt : SE);
    if (((n.strm = t), (r = n.last_flush), (n.last_flush = e), n.status === _Xe))
      if (n.wrap === 2)
        ((t.adler = 0),
          vc(n, 31),
          vc(n, 139),
          vc(n, 8),
          n.gzhead
            ? (vc(
                n,
                (n.gzhead.text ? 1 : 0) +
                  (n.gzhead.hcrc ? 2 : 0) +
                  (n.gzhead.extra ? 4 : 0) +
                  (n.gzhead.name ? 8 : 0) +
                  (n.gzhead.comment ? 16 : 0),
              ),
              vc(n, n.gzhead.time & 255),
              vc(n, (n.gzhead.time >> 8) & 255),
              vc(n, (n.gzhead.time >> 16) & 255),
              vc(n, (n.gzhead.time >> 24) & 255),
              vc(n, n.level === 9 ? 2 : n.strategy >= hXe || n.level < 2 ? 4 : 0),
              vc(n, n.gzhead.os & 255),
              n.gzhead.extra &&
                n.gzhead.extra.length &&
                (vc(n, n.gzhead.extra.length & 255), vc(n, (n.gzhead.extra.length >> 8) & 255)),
              n.gzhead.hcrc && (t.adler = nF(t.adler, n.pending_buf, n.pending, 0)),
              (n.gzindex = 0),
              (n.status = TVt))
            : (vc(n, 0),
              vc(n, 0),
              vc(n, 0),
              vc(n, 0),
              vc(n, 0),
              vc(n, n.level === 9 ? 2 : n.strategy >= hXe || n.level < 2 ? 4 : 0),
              vc(n, xvs),
              (n.status = YV)));
      else {
        var a = (yXe + ((n.w_bits - 8) << 4)) << 8,
          u = -1;
        (n.strategy >= hXe || n.level < 2 ? (u = 0) : n.level < 6 ? (u = 1) : n.level === 6 ? (u = 2) : (u = 3),
          (a |= u << 6),
          n.strstart !== 0 && (a |= wvs),
          (a += 31 - (a % 31)),
          (n.status = YV),
          tye(n, a),
          n.strstart !== 0 && (tye(n, t.adler >>> 16), tye(n, t.adler & 65535)),
          (t.adler = 1));
      }
    if (n.status === TVt)
      if (n.gzhead.extra) {
        for (
          o = n.pending;
          n.gzindex < (n.gzhead.extra.length & 65535) &&
          !(
            n.pending === n.pending_buf_size &&
            (n.gzhead.hcrc && n.pending > o && (t.adler = nF(t.adler, n.pending_buf, n.pending - o, o)),
            iF(t),
            (o = n.pending),
            n.pending === n.pending_buf_size)
          );
        )
          (vc(n, n.gzhead.extra[n.gzindex] & 255), n.gzindex++);
        (n.gzhead.hcrc && n.pending > o && (t.adler = nF(t.adler, n.pending_buf, n.pending - o, o)),
          n.gzindex === n.gzhead.extra.length && ((n.gzindex = 0), (n.status = gXe)));
      } else n.status = gXe;
    if (n.status === gXe)
      if (n.gzhead.name) {
        o = n.pending;
        do {
          if (
            n.pending === n.pending_buf_size &&
            (n.gzhead.hcrc && n.pending > o && (t.adler = nF(t.adler, n.pending_buf, n.pending - o, o)),
            iF(t),
            (o = n.pending),
            n.pending === n.pending_buf_size)
          ) {
            s = 1;
            break;
          }
          (n.gzindex < n.gzhead.name.length ? (s = n.gzhead.name.charCodeAt(n.gzindex++) & 255) : (s = 0), vc(n, s));
        } while (s !== 0);
        (n.gzhead.hcrc && n.pending > o && (t.adler = nF(t.adler, n.pending_buf, n.pending - o, o)),
          s === 0 && ((n.gzindex = 0), (n.status = bXe)));
      } else n.status = bXe;
    if (n.status === bXe)
      if (n.gzhead.comment) {
        o = n.pending;
        do {
          if (
            n.pending === n.pending_buf_size &&
            (n.gzhead.hcrc && n.pending > o && (t.adler = nF(t.adler, n.pending_buf, n.pending - o, o)),
            iF(t),
            (o = n.pending),
            n.pending === n.pending_buf_size)
          ) {
            s = 1;
            break;
          }
          (n.gzindex < n.gzhead.comment.length ? (s = n.gzhead.comment.charCodeAt(n.gzindex++) & 255) : (s = 0),
            vc(n, s));
        } while (s !== 0);
        (n.gzhead.hcrc && n.pending > o && (t.adler = nF(t.adler, n.pending_buf, n.pending - o, o)),
          s === 0 && (n.status = AXe));
      } else n.status = AXe;
    if (
      (n.status === AXe &&
        (n.gzhead.hcrc
          ? (n.pending + 2 > n.pending_buf_size && iF(t),
            n.pending + 2 <= n.pending_buf_size &&
              (vc(n, t.adler & 255), vc(n, (t.adler >> 8) & 255), (t.adler = 0), (n.status = YV)))
          : (n.status = YV)),
      n.pending !== 0)
    ) {
      if ((iF(t), t.avail_out === 0)) return ((n.last_flush = -1), VT);
    } else if (t.avail_in === 0 && kvn(e) <= kvn(r) && e !== uF) return aF(t, SVt);
    if (n.status === rye && t.avail_in !== 0) return aF(t, SVt);
    if (t.avail_in !== 0 || n.lookahead !== 0 || (e !== XV && n.status !== rye)) {
      var c = n.strategy === hXe ? Rvs(n, e) : n.strategy === dvs ? Ivs(n, e) : xae[n.level].func(n, e);
      if (((c === KV || c === Tae) && (n.status = rye), c === Lp || c === KV))
        return (t.avail_out === 0 && (n.last_flush = -1), VT);
      if (
        c === nye &&
        (e === avs
          ? CE._tr_align(n)
          : e !== Ivn &&
            (CE._tr_stored_block(n, 0, 0, !1),
            e === uvs && (oF(n.head), n.lookahead === 0 && ((n.strstart = 0), (n.block_start = 0), (n.insert = 0)))),
        iF(t),
        t.avail_out === 0)
      )
        return ((n.last_flush = -1), VT);
    }
    return e !== uF
      ? VT
      : n.wrap <= 0
        ? Rvn
        : (n.wrap === 2
            ? (vc(n, t.adler & 255),
              vc(n, (t.adler >> 8) & 255),
              vc(n, (t.adler >> 16) & 255),
              vc(n, (t.adler >> 24) & 255),
              vc(n, t.total_in & 255),
              vc(n, (t.total_in >> 8) & 255),
              vc(n, (t.total_in >> 16) & 255),
              vc(n, (t.total_in >> 24) & 255))
            : (tye(n, t.adler >>> 16), tye(n, t.adler & 65535)),
          iF(t),
          n.wrap > 0 && (n.wrap = -n.wrap),
          n.pending !== 0 ? VT : Rvn);
  }
  function Lvs(t) {
    var e;
    return !t || !t.state
      ? SE
      : ((e = t.state.status),
        e !== _Xe && e !== TVt && e !== gXe && e !== bXe && e !== AXe && e !== YV && e !== rye
          ? aF(t, SE)
          : ((t.state = null), e === YV ? aF(t, cvs) : VT));
  }
  function Mvs(t, e) {
    var r = e.length,
      n,
      o,
      s,
      a,
      u,
      c,
      m,
      d;
    if (!t || !t.state || ((n = t.state), (a = n.wrap), a === 2 || (a === 1 && n.status !== _Xe) || n.lookahead))
      return SE;
    for (
      a === 1 && (t.adler = Ovn(t.adler, e, r, 0)),
        n.wrap = 0,
        r >= n.w_size &&
          (a === 0 && (oF(n.head), (n.strstart = 0), (n.block_start = 0), (n.insert = 0)),
          (d = new P2.Buf8(n.w_size)),
          P2.arraySet(d, e, r - n.w_size, n.w_size, 0),
          (e = d),
          (r = n.w_size)),
        u = t.avail_in,
        c = t.next_in,
        m = t.input,
        t.avail_in = r,
        t.next_in = 0,
        t.input = e,
        JV(n);
      n.lookahead >= Tu;
    ) {
      ((o = n.strstart), (s = n.lookahead - (Tu - 1)));
      do
        ((n.ins_h = ((n.ins_h << n.hash_shift) ^ n.window[o + Tu - 1]) & n.hash_mask),
          (n.prev[o & n.w_mask] = n.head[n.ins_h]),
          (n.head[n.ins_h] = o),
          o++);
      while (--s);
      ((n.strstart = o), (n.lookahead = Tu - 1), JV(n));
    }
    return (
      (n.strstart += n.lookahead),
      (n.block_start = n.strstart),
      (n.insert = n.lookahead),
      (n.lookahead = 0),
      (n.match_length = n.prev_length = Tu - 1),
      (n.match_available = 0),
      (t.next_in = c),
      (t.input = m),
      (t.avail_in = u),
      (n.wrap = a),
      VT
    );
  }
  WT.deflateInit = Pvs;
  WT.deflateInit2 = Lvn;
  WT.deflateReset = Bvn;
  WT.deflateResetKeep = Pvn;
  WT.deflateSetHeader = Nvs;
  WT.deflate = Bvs;
  WT.deflateEnd = Lvs;
  WT.deflateSetDictionary = Mvs;
  WT.deflateInfo = "pako deflate (from Nodeca project)";
});