/**
 * @module h8i
 * @category unknown
 * @label unknown
 * @position 1753 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (h8i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var h8i = T((Fgr) => {
  "use strict";
  var RRa = () => {
      let e = new Array(8);
      for (let r = 0; r < 8; r++) {
        let n = new Array(512);
        for (let o = 0; o < 256; o++) {
          let s = BigInt(o);
          for (let a = 0; a < 8 * (r + 1); a++) s & 1n ? (s = (s >> 1n) ^ 0x9a6c9329ac4bc9b5n) : (s = s >> 1n);
          ((n[o * 2] = Number((s >> 32n) & 0xffffffffn)), (n[o * 2 + 1] = Number(s & 0xffffffffn)));
        }
        e[r] = new Uint32Array(n);
      }
      return e;
    },
    Igr,
    owe,
    Rgr,
    kgr,
    Ogr,
    Ngr,
    Pgr,
    Bgr,
    Lgr,
    kRa = () => {
      Igr || ((Igr = RRa()), ([owe, Rgr, kgr, Ogr, Ngr, Pgr, Bgr, Lgr] = Igr));
    },
    Mgr = class {
      c1 = 0;
      c2 = 0;
      constructor() {
        (kRa(), this.reset());
      }
      update(e) {
        let r = e.length,
          n = 0,
          o = this.c1,
          s = this.c2;
        for (; n + 8 <= r; ) {
          let a = ((s ^ e[n++]) & 255) << 1,
            u = (((s >>> 8) ^ e[n++]) & 255) << 1,
            c = (((s >>> 16) ^ e[n++]) & 255) << 1,
            m = (((s >>> 24) ^ e[n++]) & 255) << 1,
            d = ((o ^ e[n++]) & 255) << 1,
            f = (((o >>> 8) ^ e[n++]) & 255) << 1,
            p = (((o >>> 16) ^ e[n++]) & 255) << 1,
            h = (((o >>> 24) ^ e[n++]) & 255) << 1;
          ((o = Lgr[a] ^ Bgr[u] ^ Pgr[c] ^ Ngr[m] ^ Ogr[d] ^ kgr[f] ^ Rgr[p] ^ owe[h]),
            (s =
              Lgr[a + 1] ^ Bgr[u + 1] ^ Pgr[c + 1] ^ Ngr[m + 1] ^ Ogr[d + 1] ^ kgr[f + 1] ^ Rgr[p + 1] ^ owe[h + 1]));
        }
        for (; n < r; ) {
          let a = ((s ^ e[n]) & 255) << 1;
          ((s = ((s >>> 8) | ((o & 255) << 24)) >>> 0), (o = (o >>> 8) ^ owe[a]), (s ^= owe[a + 1]), n++);
        }
        ((this.c1 = o), (this.c2 = s));
      }
      async digest() {
        let e = this.c1 ^ 4294967295,
          r = this.c2 ^ 4294967295;
        return new Uint8Array([
          e >>> 24,
          (e >>> 16) & 255,
          (e >>> 8) & 255,
          e & 255,
          r >>> 24,
          (r >>> 16) & 255,
          (r >>> 8) & 255,
          r & 255,
        ]);
      }
      reset() {
        ((this.c1 = 4294967295), (this.c2 = 4294967295));
      }
    },
    ORa = { CrtCrc64Nvme: null };
  Fgr.Crc64Nvme = Mgr;
  Fgr.crc64NvmeCrtContainer = ORa;
});