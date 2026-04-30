/**
 * @module Hii
 * @category utils/encoding
 * @label encoding
 * @position 1589 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Hii) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Hii = T((qii) => {
  "use strict";
  var Blr = GO().Buffer;
  qii._dbcs = qO;
  var Gg = -1,
    Gii = -2,
    sv = -10,
    V2 = -1e3,
    Wle = new Array(256),
    jCe = -1;
  for (Mst = 0; Mst < 256; Mst++) Wle[Mst] = Gg;
  var Mst;
  function qO(t, e) {
    if (((this.encodingName = t.encodingName), !t)) throw new Error("DBCS codec is called without the data.");
    if (!t.table) throw new Error("Encoding '" + this.encodingName + "' has no data.");
    var r = t.table();
    ((this.decodeTables = []), (this.decodeTables[0] = Wle.slice(0)), (this.decodeTableSeq = []));
    for (var n = 0; n < r.length; n++) this._addDecodeChunk(r[n]);
    if (typeof t.gb18030 == "function") {
      this.gb18030 = t.gb18030();
      var o = this.decodeTables.length;
      this.decodeTables.push(Wle.slice(0));
      var s = this.decodeTables.length;
      this.decodeTables.push(Wle.slice(0));
      for (var a = this.decodeTables[0], n = 129; n <= 254; n++)
        for (var u = this.decodeTables[V2 - a[n]], c = 48; c <= 57; c++) {
          if (u[c] === Gg) u[c] = V2 - o;
          else if (u[c] > V2) throw new Error("gb18030 decode tables conflict at byte 2");
          for (var m = this.decodeTables[V2 - u[c]], d = 129; d <= 254; d++) {
            if (m[d] === Gg) m[d] = V2 - s;
            else {
              if (m[d] === V2 - s) continue;
              if (m[d] > V2) throw new Error("gb18030 decode tables conflict at byte 3");
            }
            for (var f = this.decodeTables[V2 - m[d]], p = 48; p <= 57; p++) f[p] === Gg && (f[p] = Gii);
          }
        }
    }
    ((this.defaultCharUnicode = e.defaultCharUnicode), (this.encodeTable = []), (this.encodeTableSeq = []));
    var h = {};
    if (t.encodeSkipVals)
      for (var n = 0; n < t.encodeSkipVals.length; n++) {
        var g = t.encodeSkipVals[n];
        if (typeof g == "number") h[g] = !0;
        else for (var c = g.from; c <= g.to; c++) h[c] = !0;
      }
    if ((this._fillEncodeTable(0, 0, h), t.encodeAdd))
      for (var b in t.encodeAdd)
        Object.prototype.hasOwnProperty.call(t.encodeAdd, b) && this._setEncodeChar(b.charCodeAt(0), t.encodeAdd[b]);
    ((this.defCharSB = this.encodeTable[0][e.defaultCharSingleByte.charCodeAt(0)]),
      this.defCharSB === Gg && (this.defCharSB = this.encodeTable[0]["?"]),
      this.defCharSB === Gg && (this.defCharSB = 63));
  }
  qO.prototype.encoder = Fst;
  qO.prototype.decoder = Llr;
  qO.prototype._getDecodeTrieNode = function (t) {
    for (var e = []; t > 0; t >>>= 8) e.push(t & 255);
    e.length == 0 && e.push(0);
    for (var r = this.decodeTables[0], n = e.length - 1; n > 0; n--) {
      var o = r[e[n]];
      if (o == Gg) ((r[e[n]] = V2 - this.decodeTables.length), this.decodeTables.push((r = Wle.slice(0))));
      else if (o <= V2) r = this.decodeTables[V2 - o];
      else throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + t.toString(16));
    }
    return r;
  };
  qO.prototype._addDecodeChunk = function (t) {
    var e = parseInt(t[0], 16),
      r = this._getDecodeTrieNode(e);
    e = e & 255;
    for (var n = 1; n < t.length; n++) {
      var o = t[n];
      if (typeof o == "string")
        for (var s = 0; s < o.length; ) {
          var a = o.charCodeAt(s++);
          if (55296 <= a && a < 56320) {
            var u = o.charCodeAt(s++);
            if (56320 <= u && u < 57344) r[e++] = 65536 + (a - 55296) * 1024 + (u - 56320);
            else throw new Error("Incorrect surrogate pair in " + this.encodingName + " at chunk " + t[0]);
          } else if (4080 < a && a <= 4095) {
            for (var c = 4095 - a + 2, m = [], d = 0; d < c; d++) m.push(o.charCodeAt(s++));
            ((r[e++] = sv - this.decodeTableSeq.length), this.decodeTableSeq.push(m));
          } else r[e++] = a;
        }
      else if (typeof o == "number") for (var f = r[e - 1] + 1, s = 0; s < o; s++) r[e++] = f++;
      else throw new Error("Incorrect type '" + typeof o + "' given in " + this.encodingName + " at chunk " + t[0]);
    }
    if (e > 255) throw new Error("Incorrect chunk in " + this.encodingName + " at addr " + t[0] + ": too long" + e);
  };
  qO.prototype._getEncodeBucket = function (t) {
    var e = t >> 8;
    return (this.encodeTable[e] === void 0 && (this.encodeTable[e] = Wle.slice(0)), this.encodeTable[e]);
  };
  qO.prototype._setEncodeChar = function (t, e) {
    var r = this._getEncodeBucket(t),
      n = t & 255;
    r[n] <= sv ? (this.encodeTableSeq[sv - r[n]][jCe] = e) : r[n] == Gg && (r[n] = e);
  };
  qO.prototype._setEncodeSequence = function (t, e) {
    var r = t[0],
      n = this._getEncodeBucket(r),
      o = r & 255,
      s;
    n[o] <= sv
      ? (s = this.encodeTableSeq[sv - n[o]])
      : ((s = {}),
        n[o] !== Gg && (s[jCe] = n[o]),
        (n[o] = sv - this.encodeTableSeq.length),
        this.encodeTableSeq.push(s));
    for (var a = 1; a < t.length - 1; a++) {
      var u = s[r];
      typeof u == "object" ? (s = u) : ((s = s[r] = {}), u !== void 0 && (s[jCe] = u));
    }
    ((r = t[t.length - 1]), (s[r] = e));
  };
  qO.prototype._fillEncodeTable = function (t, e, r) {
    for (var n = this.decodeTables[t], o = !1, s = {}, a = 0; a < 256; a++) {
      var u = n[a],
        c = e + a;
      if (!r[c])
        if (u >= 0) (this._setEncodeChar(u, c), (o = !0));
        else if (u <= V2) {
          var m = V2 - u;
          if (!s[m]) {
            var d = (c << 8) >>> 0;
            this._fillEncodeTable(m, d, r) ? (o = !0) : (s[m] = !0);
          }
        } else u <= sv && (this._setEncodeSequence(this.decodeTableSeq[sv - u], c), (o = !0));
    }
    return o;
  };
  function Fst(t, e) {
    ((this.leadSurrogate = -1),
      (this.seqObj = void 0),
      (this.encodeTable = e.encodeTable),
      (this.encodeTableSeq = e.encodeTableSeq),
      (this.defaultCharSingleByte = e.defCharSB),
      (this.gb18030 = e.gb18030));
  }
  Fst.prototype.write = function (t) {
    for (
      var e = Blr.alloc(t.length * (this.gb18030 ? 4 : 3)),
        r = this.leadSurrogate,
        n = this.seqObj,
        o = -1,
        s = 0,
        a = 0;
      ;
    ) {
      if (o === -1) {
        if (s == t.length) break;
        var u = t.charCodeAt(s++);
      } else {
        var u = o;
        o = -1;
      }
      if (55296 <= u && u < 57344)
        if (u < 56320)
          if (r === -1) {
            r = u;
            continue;
          } else ((r = u), (u = Gg));
        else r !== -1 ? ((u = 65536 + (r - 55296) * 1024 + (u - 56320)), (r = -1)) : (u = Gg);
      else r !== -1 && ((o = u), (u = Gg), (r = -1));
      var c = Gg;
      if (n !== void 0 && u != Gg) {
        var m = n[u];
        if (typeof m == "object") {
          n = m;
          continue;
        } else typeof m == "number" ? (c = m) : m == null && ((m = n[jCe]), m !== void 0 && ((c = m), (o = u)));
        n = void 0;
      } else if (u >= 0) {
        var d = this.encodeTable[u >> 8];
        if ((d !== void 0 && (c = d[u & 255]), c <= sv)) {
          n = this.encodeTableSeq[sv - c];
          continue;
        }
        if (c == Gg && this.gb18030) {
          var f = Mlr(this.gb18030.uChars, u);
          if (f != -1) {
            var c = this.gb18030.gbChars[f] + (u - this.gb18030.uChars[f]);
            ((e[a++] = 129 + Math.floor(c / 12600)),
              (c = c % 12600),
              (e[a++] = 48 + Math.floor(c / 1260)),
              (c = c % 1260),
              (e[a++] = 129 + Math.floor(c / 10)),
              (c = c % 10),
              (e[a++] = 48 + c));
            continue;
          }
        }
      }
      (c === Gg && (c = this.defaultCharSingleByte),
        c < 256
          ? (e[a++] = c)
          : c < 65536
            ? ((e[a++] = c >> 8), (e[a++] = c & 255))
            : c < 16777216
              ? ((e[a++] = c >> 16), (e[a++] = (c >> 8) & 255), (e[a++] = c & 255))
              : ((e[a++] = c >>> 24), (e[a++] = (c >>> 16) & 255), (e[a++] = (c >>> 8) & 255), (e[a++] = c & 255)));
    }
    return ((this.seqObj = n), (this.leadSurrogate = r), e.slice(0, a));
  };
  Fst.prototype.end = function () {
    if (!(this.leadSurrogate === -1 && this.seqObj === void 0)) {
      var t = Blr.alloc(10),
        e = 0;
      if (this.seqObj) {
        var r = this.seqObj[jCe];
        (r !== void 0 && (r < 256 ? (t[e++] = r) : ((t[e++] = r >> 8), (t[e++] = r & 255))), (this.seqObj = void 0));
      }
      return (
        this.leadSurrogate !== -1 && ((t[e++] = this.defaultCharSingleByte), (this.leadSurrogate = -1)),
        t.slice(0, e)
      );
    }
  };
  Fst.prototype.findIdx = Mlr;
  function Llr(t, e) {
    ((this.nodeIdx = 0),
      (this.prevBytes = []),
      (this.decodeTables = e.decodeTables),
      (this.decodeTableSeq = e.decodeTableSeq),
      (this.defaultCharUnicode = e.defaultCharUnicode),
      (this.gb18030 = e.gb18030));
  }
  Llr.prototype.write = function (t) {
    for (
      var e = Blr.alloc(t.length * 2),
        r = this.nodeIdx,
        n = this.prevBytes,
        o = this.prevBytes.length,
        s = -this.prevBytes.length,
        a,
        u = 0,
        c = 0;
      u < t.length;
      u++
    ) {
      var m = u >= 0 ? t[u] : n[u + o],
        a = this.decodeTables[r][m];
      if (!(a >= 0))
        if (a === Gg) ((a = this.defaultCharUnicode.charCodeAt(0)), (u = s));
        else if (a === Gii) {
          if (u >= 3) var d = (t[u - 3] - 129) * 12600 + (t[u - 2] - 48) * 1260 + (t[u - 1] - 129) * 10 + (m - 48);
          else
            var d =
              (n[u - 3 + o] - 129) * 12600 +
              ((u - 2 >= 0 ? t[u - 2] : n[u - 2 + o]) - 48) * 1260 +
              ((u - 1 >= 0 ? t[u - 1] : n[u - 1 + o]) - 129) * 10 +
              (m - 48);
          var f = Mlr(this.gb18030.gbChars, d);
          a = this.gb18030.uChars[f] + d - this.gb18030.gbChars[f];
        } else if (a <= V2) {
          r = V2 - a;
          continue;
        } else if (a <= sv) {
          for (var p = this.decodeTableSeq[sv - a], h = 0; h < p.length - 1; h++)
            ((a = p[h]), (e[c++] = a & 255), (e[c++] = a >> 8));
          a = p[p.length - 1];
        } else throw new Error("iconv-lite internal error: invalid decoding table value " + a + " at " + r + "/" + m);
      if (a >= 65536) {
        a -= 65536;
        var g = 55296 | (a >> 10);
        ((e[c++] = g & 255), (e[c++] = g >> 8), (a = 56320 | (a & 1023)));
      }
      ((e[c++] = a & 255), (e[c++] = a >> 8), (r = 0), (s = u + 1));
    }
    return (
      (this.nodeIdx = r),
      (this.prevBytes =
        s >= 0 ? Array.prototype.slice.call(t, s) : n.slice(s + o).concat(Array.prototype.slice.call(t))),
      e.slice(0, c).toString("ucs2")
    );
  };
  Llr.prototype.end = function () {
    for (var t = ""; this.prevBytes.length > 0; ) {
      t += this.defaultCharUnicode;
      var e = this.prevBytes.slice(1);
      ((this.prevBytes = []), (this.nodeIdx = 0), e.length > 0 && (t += this.write(e)));
    }
    return ((this.prevBytes = []), (this.nodeIdx = 0), t);
  };
  function Mlr(t, e) {
    if (t[0] > e) return -1;
    for (var r = 0, n = t.length; r < n - 1; ) {
      var o = r + ((n - r + 1) >> 1);
      t[o] <= e ? (r = o) : (n = o);
    }
    return r;
  }
});