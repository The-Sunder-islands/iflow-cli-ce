/**
 * @module BCn
 * @category unknown
 * @label unknown
 * @position 1023 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (BCn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var BCn = T((z4) => {
  "use strict";
  var R6 = $k(),
    $Vt = vVt(),
    zT = CVt(),
    Jvs = Wvn(),
    uye = eCn(),
    Xvs = 0,
    xCn = 1,
    TCn = 2,
    tCn = 4,
    Zvs = 5,
    CXe = 6,
    eW = 0,
    eCs = 1,
    tCs = 2,
    wE = -2,
    DCn = -3,
    jVt = -4,
    rCs = -5,
    rCn = 8,
    ICn = 1,
    nCn = 2,
    iCn = 3,
    oCn = 4,
    sCn = 5,
    aCn = 6,
    uCn = 7,
    cCn = 8,
    lCn = 9,
    mCn = 10,
    xXe = 11,
    Gk = 12,
    BVt = 13,
    dCn = 14,
    LVt = 15,
    fCn = 16,
    pCn = 17,
    hCn = 18,
    gCn = 19,
    SXe = 20,
    wXe = 21,
    bCn = 22,
    ACn = 23,
    yCn = 24,
    _Cn = 25,
    ECn = 26,
    MVt = 27,
    vCn = 28,
    CCn = 29,
    ad = 30,
    QVt = 31,
    nCs = 32,
    iCs = 852,
    oCs = 592,
    sCs = 15,
    aCs = sCs;
  function SCn(t) {
    return ((t >>> 24) & 255) + ((t >>> 8) & 65280) + ((t & 65280) << 8) + ((t & 255) << 24);
  }
  function uCs() {
    ((this.mode = 0),
      (this.last = !1),
      (this.wrap = 0),
      (this.havedict = !1),
      (this.flags = 0),
      (this.dmax = 0),
      (this.check = 0),
      (this.total = 0),
      (this.head = null),
      (this.wbits = 0),
      (this.wsize = 0),
      (this.whave = 0),
      (this.wnext = 0),
      (this.window = null),
      (this.hold = 0),
      (this.bits = 0),
      (this.length = 0),
      (this.offset = 0),
      (this.extra = 0),
      (this.lencode = null),
      (this.distcode = null),
      (this.lenbits = 0),
      (this.distbits = 0),
      (this.ncode = 0),
      (this.nlen = 0),
      (this.ndist = 0),
      (this.have = 0),
      (this.next = null),
      (this.lens = new R6.Buf16(320)),
      (this.work = new R6.Buf16(288)),
      (this.lendyn = null),
      (this.distdyn = null),
      (this.sane = 0),
      (this.back = 0),
      (this.was = 0));
  }
  function RCn(t) {
    var e;
    return !t || !t.state
      ? wE
      : ((e = t.state),
        (t.total_in = t.total_out = e.total = 0),
        (t.msg = ""),
        e.wrap && (t.adler = e.wrap & 1),
        (e.mode = ICn),
        (e.last = 0),
        (e.havedict = 0),
        (e.dmax = 32768),
        (e.head = null),
        (e.hold = 0),
        (e.bits = 0),
        (e.lencode = e.lendyn = new R6.Buf32(iCs)),
        (e.distcode = e.distdyn = new R6.Buf32(oCs)),
        (e.sane = 1),
        (e.back = -1),
        eW);
  }
  function kCn(t) {
    var e;
    return !t || !t.state ? wE : ((e = t.state), (e.wsize = 0), (e.whave = 0), (e.wnext = 0), RCn(t));
  }
  function OCn(t, e) {
    var r, n;
    return !t ||
      !t.state ||
      ((n = t.state), e < 0 ? ((r = 0), (e = -e)) : ((r = (e >> 4) + 1), e < 48 && (e &= 15)), e && (e < 8 || e > 15))
      ? wE
      : (n.window !== null && n.wbits !== e && (n.window = null), (n.wrap = r), (n.wbits = e), kCn(t));
  }
  function NCn(t, e) {
    var r, n;
    return t
      ? ((n = new uCs()), (t.state = n), (n.window = null), (r = OCn(t, e)), r !== eW && (t.state = null), r)
      : wE;
  }
  function cCs(t) {
    return NCn(t, aCs);
  }
  var wCn = !0,
    FVt,
    UVt;
  function lCs(t) {
    if (wCn) {
      var e;
      for (FVt = new R6.Buf32(512), UVt = new R6.Buf32(32), e = 0; e < 144; ) t.lens[e++] = 8;
      for (; e < 256; ) t.lens[e++] = 9;
      for (; e < 280; ) t.lens[e++] = 7;
      for (; e < 288; ) t.lens[e++] = 8;
      for (uye(xCn, t.lens, 0, 288, FVt, 0, t.work, { bits: 9 }), e = 0; e < 32; ) t.lens[e++] = 5;
      (uye(TCn, t.lens, 0, 32, UVt, 0, t.work, { bits: 5 }), (wCn = !1));
    }
    ((t.lencode = FVt), (t.lenbits = 9), (t.distcode = UVt), (t.distbits = 5));
  }
  function PCn(t, e, r, n) {
    var o,
      s = t.state;
    return (
      s.window === null && ((s.wsize = 1 << s.wbits), (s.wnext = 0), (s.whave = 0), (s.window = new R6.Buf8(s.wsize))),
      n >= s.wsize
        ? (R6.arraySet(s.window, e, r - s.wsize, s.wsize, 0), (s.wnext = 0), (s.whave = s.wsize))
        : ((o = s.wsize - s.wnext),
          o > n && (o = n),
          R6.arraySet(s.window, e, r - n, o, s.wnext),
          (n -= o),
          n
            ? (R6.arraySet(s.window, e, r - n, n, 0), (s.wnext = n), (s.whave = s.wsize))
            : ((s.wnext += o), s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += o))),
      0
    );
  }
  function mCs(t, e) {
    var r,
      n,
      o,
      s,
      a,
      u,
      c,
      m,
      d,
      f,
      p,
      h,
      g,
      b,
      A = 0,
      y,
      E,
      v,
      C,
      x,
      k,
      R,
      P,
      D = new R6.Buf8(4),
      O,
      N,
      F = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    if (!t || !t.state || !t.output || (!t.input && t.avail_in !== 0)) return wE;
    ((r = t.state),
      r.mode === Gk && (r.mode = BVt),
      (a = t.next_out),
      (o = t.output),
      (c = t.avail_out),
      (s = t.next_in),
      (n = t.input),
      (u = t.avail_in),
      (m = r.hold),
      (d = r.bits),
      (f = u),
      (p = c),
      (P = eW));
    e: for (;;)
      switch (r.mode) {
        case ICn:
          if (r.wrap === 0) {
            r.mode = BVt;
            break;
          }
          for (; d < 16; ) {
            if (u === 0) break e;
            (u--, (m += n[s++] << d), (d += 8));
          }
          if (r.wrap & 2 && m === 35615) {
            ((r.check = 0),
              (D[0] = m & 255),
              (D[1] = (m >>> 8) & 255),
              (r.check = zT(r.check, D, 2, 0)),
              (m = 0),
              (d = 0),
              (r.mode = nCn));
            break;
          }
          if (((r.flags = 0), r.head && (r.head.done = !1), !(r.wrap & 1) || (((m & 255) << 8) + (m >> 8)) % 31)) {
            ((t.msg = "incorrect header check"), (r.mode = ad));
            break;
          }
          if ((m & 15) !== rCn) {
            ((t.msg = "unknown compression method"), (r.mode = ad));
            break;
          }
          if (((m >>>= 4), (d -= 4), (R = (m & 15) + 8), r.wbits === 0)) r.wbits = R;
          else if (R > r.wbits) {
            ((t.msg = "invalid window size"), (r.mode = ad));
            break;
          }
          ((r.dmax = 1 << R), (t.adler = r.check = 1), (r.mode = m & 512 ? mCn : Gk), (m = 0), (d = 0));
          break;
        case nCn:
          for (; d < 16; ) {
            if (u === 0) break e;
            (u--, (m += n[s++] << d), (d += 8));
          }
          if (((r.flags = m), (r.flags & 255) !== rCn)) {
            ((t.msg = "unknown compression method"), (r.mode = ad));
            break;
          }
          if (r.flags & 57344) {
            ((t.msg = "unknown header flags set"), (r.mode = ad));
            break;
          }
          (r.head && (r.head.text = (m >> 8) & 1),
            r.flags & 512 && ((D[0] = m & 255), (D[1] = (m >>> 8) & 255), (r.check = zT(r.check, D, 2, 0))),
            (m = 0),
            (d = 0),
            (r.mode = iCn));
        case iCn:
          for (; d < 32; ) {
            if (u === 0) break e;
            (u--, (m += n[s++] << d), (d += 8));
          }
          (r.head && (r.head.time = m),
            r.flags & 512 &&
              ((D[0] = m & 255),
              (D[1] = (m >>> 8) & 255),
              (D[2] = (m >>> 16) & 255),
              (D[3] = (m >>> 24) & 255),
              (r.check = zT(r.check, D, 4, 0))),
            (m = 0),
            (d = 0),
            (r.mode = oCn));
        case oCn:
          for (; d < 16; ) {
            if (u === 0) break e;
            (u--, (m += n[s++] << d), (d += 8));
          }
          (r.head && ((r.head.xflags = m & 255), (r.head.os = m >> 8)),
            r.flags & 512 && ((D[0] = m & 255), (D[1] = (m >>> 8) & 255), (r.check = zT(r.check, D, 2, 0))),
            (m = 0),
            (d = 0),
            (r.mode = sCn));
        case sCn:
          if (r.flags & 1024) {
            for (; d < 16; ) {
              if (u === 0) break e;
              (u--, (m += n[s++] << d), (d += 8));
            }
            ((r.length = m),
              r.head && (r.head.extra_len = m),
              r.flags & 512 && ((D[0] = m & 255), (D[1] = (m >>> 8) & 255), (r.check = zT(r.check, D, 2, 0))),
              (m = 0),
              (d = 0));
          } else r.head && (r.head.extra = null);
          r.mode = aCn;
        case aCn:
          if (
            r.flags & 1024 &&
            ((h = r.length),
            h > u && (h = u),
            h &&
              (r.head &&
                ((R = r.head.extra_len - r.length),
                r.head.extra || (r.head.extra = new Array(r.head.extra_len)),
                R6.arraySet(r.head.extra, n, s, h, R)),
              r.flags & 512 && (r.check = zT(r.check, n, h, s)),
              (u -= h),
              (s += h),
              (r.length -= h)),
            r.length)
          )
            break e;
          ((r.length = 0), (r.mode = uCn));
        case uCn:
          if (r.flags & 2048) {
            if (u === 0) break e;
            h = 0;
            do ((R = n[s + h++]), r.head && R && r.length < 65536 && (r.head.name += String.fromCharCode(R)));
            while (R && h < u);
            if ((r.flags & 512 && (r.check = zT(r.check, n, h, s)), (u -= h), (s += h), R)) break e;
          } else r.head && (r.head.name = null);
          ((r.length = 0), (r.mode = cCn));
        case cCn:
          if (r.flags & 4096) {
            if (u === 0) break e;
            h = 0;
            do ((R = n[s + h++]), r.head && R && r.length < 65536 && (r.head.comment += String.fromCharCode(R)));
            while (R && h < u);
            if ((r.flags & 512 && (r.check = zT(r.check, n, h, s)), (u -= h), (s += h), R)) break e;
          } else r.head && (r.head.comment = null);
          r.mode = lCn;
        case lCn:
          if (r.flags & 512) {
            for (; d < 16; ) {
              if (u === 0) break e;
              (u--, (m += n[s++] << d), (d += 8));
            }
            if (m !== (r.check & 65535)) {
              ((t.msg = "header crc mismatch"), (r.mode = ad));
              break;
            }
            ((m = 0), (d = 0));
          }
          (r.head && ((r.head.hcrc = (r.flags >> 9) & 1), (r.head.done = !0)), (t.adler = r.check = 0), (r.mode = Gk));
          break;
        case mCn:
          for (; d < 32; ) {
            if (u === 0) break e;
            (u--, (m += n[s++] << d), (d += 8));
          }
          ((t.adler = r.check = SCn(m)), (m = 0), (d = 0), (r.mode = xXe));
        case xXe:
          if (r.havedict === 0)
            return (
              (t.next_out = a),
              (t.avail_out = c),
              (t.next_in = s),
              (t.avail_in = u),
              (r.hold = m),
              (r.bits = d),
              tCs
            );
          ((t.adler = r.check = 1), (r.mode = Gk));
        case Gk:
          if (e === Zvs || e === CXe) break e;
        case BVt:
          if (r.last) {
            ((m >>>= d & 7), (d -= d & 7), (r.mode = MVt));
            break;
          }
          for (; d < 3; ) {
            if (u === 0) break e;
            (u--, (m += n[s++] << d), (d += 8));
          }
          switch (((r.last = m & 1), (m >>>= 1), (d -= 1), m & 3)) {
            case 0:
              r.mode = dCn;
              break;
            case 1:
              if ((lCs(r), (r.mode = SXe), e === CXe)) {
                ((m >>>= 2), (d -= 2));
                break e;
              }
              break;
            case 2:
              r.mode = pCn;
              break;
            case 3:
              ((t.msg = "invalid block type"), (r.mode = ad));
          }
          ((m >>>= 2), (d -= 2));
          break;
        case dCn:
          for (m >>>= d & 7, d -= d & 7; d < 32; ) {
            if (u === 0) break e;
            (u--, (m += n[s++] << d), (d += 8));
          }
          if ((m & 65535) !== ((m >>> 16) ^ 65535)) {
            ((t.msg = "invalid stored block lengths"), (r.mode = ad));
            break;
          }
          if (((r.length = m & 65535), (m = 0), (d = 0), (r.mode = LVt), e === CXe)) break e;
        case LVt:
          r.mode = fCn;
        case fCn:
          if (((h = r.length), h)) {
            if ((h > u && (h = u), h > c && (h = c), h === 0)) break e;
            (R6.arraySet(o, n, s, h, a), (u -= h), (s += h), (c -= h), (a += h), (r.length -= h));
            break;
          }
          r.mode = Gk;
          break;
        case pCn:
          for (; d < 14; ) {
            if (u === 0) break e;
            (u--, (m += n[s++] << d), (d += 8));
          }
          if (
            ((r.nlen = (m & 31) + 257),
            (m >>>= 5),
            (d -= 5),
            (r.ndist = (m & 31) + 1),
            (m >>>= 5),
            (d -= 5),
            (r.ncode = (m & 15) + 4),
            (m >>>= 4),
            (d -= 4),
            r.nlen > 286 || r.ndist > 30)
          ) {
            ((t.msg = "too many length or distance symbols"), (r.mode = ad));
            break;
          }
          ((r.have = 0), (r.mode = hCn));
        case hCn:
          for (; r.have < r.ncode; ) {
            for (; d < 3; ) {
              if (u === 0) break e;
              (u--, (m += n[s++] << d), (d += 8));
            }
            ((r.lens[F[r.have++]] = m & 7), (m >>>= 3), (d -= 3));
          }
          for (; r.have < 19; ) r.lens[F[r.have++]] = 0;
          if (
            ((r.lencode = r.lendyn),
            (r.lenbits = 7),
            (O = { bits: r.lenbits }),
            (P = uye(Xvs, r.lens, 0, 19, r.lencode, 0, r.work, O)),
            (r.lenbits = O.bits),
            P)
          ) {
            ((t.msg = "invalid code lengths set"), (r.mode = ad));
            break;
          }
          ((r.have = 0), (r.mode = gCn));
        case gCn:
          for (; r.have < r.nlen + r.ndist; ) {
            for (
              ;
              (A = r.lencode[m & ((1 << r.lenbits) - 1)]),
                (y = A >>> 24),
                (E = (A >>> 16) & 255),
                (v = A & 65535),
                !(y <= d);
            ) {
              if (u === 0) break e;
              (u--, (m += n[s++] << d), (d += 8));
            }
            if (v < 16) ((m >>>= y), (d -= y), (r.lens[r.have++] = v));
            else {
              if (v === 16) {
                for (N = y + 2; d < N; ) {
                  if (u === 0) break e;
                  (u--, (m += n[s++] << d), (d += 8));
                }
                if (((m >>>= y), (d -= y), r.have === 0)) {
                  ((t.msg = "invalid bit length repeat"), (r.mode = ad));
                  break;
                }
                ((R = r.lens[r.have - 1]), (h = 3 + (m & 3)), (m >>>= 2), (d -= 2));
              } else if (v === 17) {
                for (N = y + 3; d < N; ) {
                  if (u === 0) break e;
                  (u--, (m += n[s++] << d), (d += 8));
                }
                ((m >>>= y), (d -= y), (R = 0), (h = 3 + (m & 7)), (m >>>= 3), (d -= 3));
              } else {
                for (N = y + 7; d < N; ) {
                  if (u === 0) break e;
                  (u--, (m += n[s++] << d), (d += 8));
                }
                ((m >>>= y), (d -= y), (R = 0), (h = 11 + (m & 127)), (m >>>= 7), (d -= 7));
              }
              if (r.have + h > r.nlen + r.ndist) {
                ((t.msg = "invalid bit length repeat"), (r.mode = ad));
                break;
              }
              for (; h--; ) r.lens[r.have++] = R;
            }
          }
          if (r.mode === ad) break;
          if (r.lens[256] === 0) {
            ((t.msg = "invalid code -- missing end-of-block"), (r.mode = ad));
            break;
          }
          if (
            ((r.lenbits = 9),
            (O = { bits: r.lenbits }),
            (P = uye(xCn, r.lens, 0, r.nlen, r.lencode, 0, r.work, O)),
            (r.lenbits = O.bits),
            P)
          ) {
            ((t.msg = "invalid literal/lengths set"), (r.mode = ad));
            break;
          }
          if (
            ((r.distbits = 6),
            (r.distcode = r.distdyn),
            (O = { bits: r.distbits }),
            (P = uye(TCn, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, O)),
            (r.distbits = O.bits),
            P)
          ) {
            ((t.msg = "invalid distances set"), (r.mode = ad));
            break;
          }
          if (((r.mode = SXe), e === CXe)) break e;
        case SXe:
          r.mode = wXe;
        case wXe:
          if (u >= 6 && c >= 258) {
            ((t.next_out = a),
              (t.avail_out = c),
              (t.next_in = s),
              (t.avail_in = u),
              (r.hold = m),
              (r.bits = d),
              Jvs(t, p),
              (a = t.next_out),
              (o = t.output),
              (c = t.avail_out),
              (s = t.next_in),
              (n = t.input),
              (u = t.avail_in),
              (m = r.hold),
              (d = r.bits),
              r.mode === Gk && (r.back = -1));
            break;
          }
          for (
            r.back = 0;
            (A = r.lencode[m & ((1 << r.lenbits) - 1)]),
              (y = A >>> 24),
              (E = (A >>> 16) & 255),
              (v = A & 65535),
              !(y <= d);
          ) {
            if (u === 0) break e;
            (u--, (m += n[s++] << d), (d += 8));
          }
          if (E && (E & 240) === 0) {
            for (
              C = y, x = E, k = v;
              (A = r.lencode[k + ((m & ((1 << (C + x)) - 1)) >> C)]),
                (y = A >>> 24),
                (E = (A >>> 16) & 255),
                (v = A & 65535),
                !(C + y <= d);
            ) {
              if (u === 0) break e;
              (u--, (m += n[s++] << d), (d += 8));
            }
            ((m >>>= C), (d -= C), (r.back += C));
          }
          if (((m >>>= y), (d -= y), (r.back += y), (r.length = v), E === 0)) {
            r.mode = ECn;
            break;
          }
          if (E & 32) {
            ((r.back = -1), (r.mode = Gk));
            break;
          }
          if (E & 64) {
            ((t.msg = "invalid literal/length code"), (r.mode = ad));
            break;
          }
          ((r.extra = E & 15), (r.mode = bCn));
        case bCn:
          if (r.extra) {
            for (N = r.extra; d < N; ) {
              if (u === 0) break e;
              (u--, (m += n[s++] << d), (d += 8));
            }
            ((r.length += m & ((1 << r.extra) - 1)), (m >>>= r.extra), (d -= r.extra), (r.back += r.extra));
          }
          ((r.was = r.length), (r.mode = ACn));
        case ACn:
          for (
            ;
            (A = r.distcode[m & ((1 << r.distbits) - 1)]),
              (y = A >>> 24),
              (E = (A >>> 16) & 255),
              (v = A & 65535),
              !(y <= d);
          ) {
            if (u === 0) break e;
            (u--, (m += n[s++] << d), (d += 8));
          }
          if ((E & 240) === 0) {
            for (
              C = y, x = E, k = v;
              (A = r.distcode[k + ((m & ((1 << (C + x)) - 1)) >> C)]),
                (y = A >>> 24),
                (E = (A >>> 16) & 255),
                (v = A & 65535),
                !(C + y <= d);
            ) {
              if (u === 0) break e;
              (u--, (m += n[s++] << d), (d += 8));
            }
            ((m >>>= C), (d -= C), (r.back += C));
          }
          if (((m >>>= y), (d -= y), (r.back += y), E & 64)) {
            ((t.msg = "invalid distance code"), (r.mode = ad));
            break;
          }
          ((r.offset = v), (r.extra = E & 15), (r.mode = yCn));
        case yCn:
          if (r.extra) {
            for (N = r.extra; d < N; ) {
              if (u === 0) break e;
              (u--, (m += n[s++] << d), (d += 8));
            }
            ((r.offset += m & ((1 << r.extra) - 1)), (m >>>= r.extra), (d -= r.extra), (r.back += r.extra));
          }
          if (r.offset > r.dmax) {
            ((t.msg = "invalid distance too far back"), (r.mode = ad));
            break;
          }
          r.mode = _Cn;
        case _Cn:
          if (c === 0) break e;
          if (((h = p - c), r.offset > h)) {
            if (((h = r.offset - h), h > r.whave && r.sane)) {
              ((t.msg = "invalid distance too far back"), (r.mode = ad));
              break;
            }
            (h > r.wnext ? ((h -= r.wnext), (g = r.wsize - h)) : (g = r.wnext - h),
              h > r.length && (h = r.length),
              (b = r.window));
          } else ((b = o), (g = a - r.offset), (h = r.length));
          (h > c && (h = c), (c -= h), (r.length -= h));
          do o[a++] = b[g++];
          while (--h);
          r.length === 0 && (r.mode = wXe);
          break;
        case ECn:
          if (c === 0) break e;
          ((o[a++] = r.length), c--, (r.mode = wXe));
          break;
        case MVt:
          if (r.wrap) {
            for (; d < 32; ) {
              if (u === 0) break e;
              (u--, (m |= n[s++] << d), (d += 8));
            }
            if (
              ((p -= c),
              (t.total_out += p),
              (r.total += p),
              p && (t.adler = r.check = r.flags ? zT(r.check, o, p, a - p) : $Vt(r.check, o, p, a - p)),
              (p = c),
              (r.flags ? m : SCn(m)) !== r.check)
            ) {
              ((t.msg = "incorrect data check"), (r.mode = ad));
              break;
            }
            ((m = 0), (d = 0));
          }
          r.mode = vCn;
        case vCn:
          if (r.wrap && r.flags) {
            for (; d < 32; ) {
              if (u === 0) break e;
              (u--, (m += n[s++] << d), (d += 8));
            }
            if (m !== (r.total & 4294967295)) {
              ((t.msg = "incorrect length check"), (r.mode = ad));
              break;
            }
            ((m = 0), (d = 0));
          }
          r.mode = CCn;
        case CCn:
          P = eCs;
          break e;
        case ad:
          P = DCn;
          break e;
        case QVt:
          return jVt;
        case nCs:
        default:
          return wE;
      }
    return (
      (t.next_out = a),
      (t.avail_out = c),
      (t.next_in = s),
      (t.avail_in = u),
      (r.hold = m),
      (r.bits = d),
      (r.wsize || (p !== t.avail_out && r.mode < ad && (r.mode < MVt || e !== tCn))) &&
      PCn(t, t.output, t.next_out, p - t.avail_out)
        ? ((r.mode = QVt), jVt)
        : ((f -= t.avail_in),
          (p -= t.avail_out),
          (t.total_in += f),
          (t.total_out += p),
          (r.total += p),
          r.wrap &&
            p &&
            (t.adler = r.check = r.flags ? zT(r.check, o, p, t.next_out - p) : $Vt(r.check, o, p, t.next_out - p)),
          (t.data_type =
            r.bits + (r.last ? 64 : 0) + (r.mode === Gk ? 128 : 0) + (r.mode === SXe || r.mode === LVt ? 256 : 0)),
          ((f === 0 && p === 0) || e === tCn) && P === eW && (P = rCs),
          P)
    );
  }
  function dCs(t) {
    if (!t || !t.state) return wE;
    var e = t.state;
    return (e.window && (e.window = null), (t.state = null), eW);
  }
  function fCs(t, e) {
    var r;
    return !t || !t.state || ((r = t.state), (r.wrap & 2) === 0) ? wE : ((r.head = e), (e.done = !1), eW);
  }
  function pCs(t, e) {
    var r = e.length,
      n,
      o,
      s;
    return !t || !t.state || ((n = t.state), n.wrap !== 0 && n.mode !== xXe)
      ? wE
      : n.mode === xXe && ((o = 1), (o = $Vt(o, e, r, 0)), o !== n.check)
        ? DCn
        : ((s = PCn(t, e, r, r)), s ? ((n.mode = QVt), jVt) : ((n.havedict = 1), eW));
  }
  z4.inflateReset = kCn;
  z4.inflateReset2 = OCn;
  z4.inflateResetKeep = RCn;
  z4.inflateInit = cCs;
  z4.inflateInit2 = NCn;
  z4.inflate = mCs;
  z4.inflateEnd = dCs;
  z4.inflateGetHeader = fCs;
  z4.inflateSetDictionary = pCs;
  z4.inflateInfo = "pako inflate (from Nodeca project)";
});