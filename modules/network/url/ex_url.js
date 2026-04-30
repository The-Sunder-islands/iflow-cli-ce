/**
 * @module ex
 * @category network/url
 * @label url
 * @position 38 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ex) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ex = T((hCu, t6) => {
  "use strict";
  var Eee = Ae("punycode"),
    gIr = hIr(),
    _Ir = { ftp: 21, file: null, gopher: 70, http: 80, https: 443, ws: 80, wss: 443 },
    tu = Symbol("failure");
  function bIr(t) {
    return Eee.ucs2.decode(t).length;
  }
  function AIr(t, e) {
    let r = t[e];
    return isNaN(r) ? void 0 : String.fromCodePoint(r);
  }
  function Khe(t) {
    return t >= 48 && t <= 57;
  }
  function Jhe(t) {
    return (t >= 65 && t <= 90) || (t >= 97 && t <= 122);
  }
  function Fdo(t) {
    return Jhe(t) || Khe(t);
  }
  function vC(t) {
    return Khe(t) || (t >= 65 && t <= 70) || (t >= 97 && t <= 102);
  }
  function yIr(t) {
    return t === "." || t.toLowerCase() === "%2e";
  }
  function Udo(t) {
    return ((t = t.toLowerCase()), t === ".." || t === "%2e." || t === ".%2e" || t === "%2e%2e");
  }
  function $do(t, e) {
    return Jhe(t) && (e === 58 || e === 124);
  }
  function EIr(t) {
    return t.length === 2 && Jhe(t.codePointAt(0)) && (t[1] === ":" || t[1] === "|");
  }
  function jdo(t) {
    return t.length === 2 && Jhe(t.codePointAt(0)) && t[1] === ":";
  }
  function Qdo(t) {
    return t.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/) !== -1;
  }
  function Gdo(t) {
    return t.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/) !== -1;
  }
  function d6t(t) {
    return _Ir[t] !== void 0;
  }
  function Cp(t) {
    return d6t(t.scheme);
  }
  function qdo(t) {
    return _Ir[t];
  }
  function vIr(t) {
    let e = t.toString(16).toUpperCase();
    return (e.length === 1 && (e = "0" + e), "%" + e);
  }
  function Hdo(t) {
    let e = new Buffer(t),
      r = "";
    for (let n = 0; n < e.length; ++n) r += vIr(e[n]);
    return r;
  }
  function Vdo(t) {
    let e = new Buffer(t),
      r = [];
    for (let n = 0; n < e.length; ++n)
      e[n] !== 37
        ? r.push(e[n])
        : e[n] === 37 && vC(e[n + 1]) && vC(e[n + 2])
          ? (r.push(parseInt(e.slice(n + 1, n + 3).toString(), 16)), (n += 2))
          : r.push(e[n]);
    return new Buffer(r).toString();
  }
  function rke(t) {
    return t <= 31 || t > 126;
  }
  var Wdo = new Set([32, 34, 35, 60, 62, 63, 96, 123, 125]);
  function CIr(t) {
    return rke(t) || Wdo.has(t);
  }
  var zdo = new Set([47, 58, 59, 61, 64, 91, 92, 93, 94, 124]);
  function p6t(t) {
    return CIr(t) || zdo.has(t);
  }
  function dG(t, e) {
    let r = String.fromCodePoint(t);
    return e(t) ? Hdo(r) : r;
  }
  function Ydo(t) {
    let e = 10;
    return (
      t.length >= 2 && t.charAt(0) === "0" && t.charAt(1).toLowerCase() === "x"
        ? ((t = t.substring(2)), (e = 16))
        : t.length >= 2 && t.charAt(0) === "0" && ((t = t.substring(1)), (e = 8)),
      t === "" ? 0 : (e === 10 ? /[^0-9]/ : e === 16 ? /[^0-9A-Fa-f]/ : /[^0-7]/).test(t) ? tu : parseInt(t, e)
    );
  }
  function Kdo(t) {
    let e = t.split(".");
    if ((e[e.length - 1] === "" && e.length > 1 && e.pop(), e.length > 4)) return t;
    let r = [];
    for (let s of e) {
      if (s === "") return t;
      let a = Ydo(s);
      if (a === tu) return t;
      r.push(a);
    }
    for (let s = 0; s < r.length - 1; ++s) if (r[s] > 255) return tu;
    if (r[r.length - 1] >= Math.pow(256, 5 - r.length)) return tu;
    let n = r.pop(),
      o = 0;
    for (let s of r) ((n += s * Math.pow(256, 3 - o)), ++o);
    return n;
  }
  function Jdo(t) {
    let e = "",
      r = t;
    for (let n = 1; n <= 4; ++n) ((e = String(r % 256) + e), n !== 4 && (e = "." + e), (r = Math.floor(r / 256)));
    return e;
  }
  function Xdo(t) {
    let e = [0, 0, 0, 0, 0, 0, 0, 0],
      r = 0,
      n = null,
      o = 0;
    if (((t = Eee.ucs2.decode(t)), t[o] === 58)) {
      if (t[o + 1] !== 58) return tu;
      ((o += 2), ++r, (n = r));
    }
    for (; o < t.length; ) {
      if (r === 8) return tu;
      if (t[o] === 58) {
        if (n !== null) return tu;
        (++o, ++r, (n = r));
        continue;
      }
      let s = 0,
        a = 0;
      for (; a < 4 && vC(t[o]); ) ((s = s * 16 + parseInt(AIr(t, o), 16)), ++o, ++a);
      if (t[o] === 46) {
        if (a === 0 || ((o -= a), r > 6)) return tu;
        let u = 0;
        for (; t[o] !== void 0; ) {
          let c = null;
          if (u > 0)
            if (t[o] === 46 && u < 4) ++o;
            else return tu;
          if (!Khe(t[o])) return tu;
          for (; Khe(t[o]); ) {
            let m = parseInt(AIr(t, o));
            if (c === null) c = m;
            else {
              if (c === 0) return tu;
              c = c * 10 + m;
            }
            if (c > 255) return tu;
            ++o;
          }
          ((e[r] = e[r] * 256 + c), ++u, (u === 2 || u === 4) && ++r);
        }
        if (u !== 4) return tu;
        break;
      } else if (t[o] === 58) {
        if ((++o, t[o] === void 0)) return tu;
      } else if (t[o] !== void 0) return tu;
      ((e[r] = s), ++r);
    }
    if (n !== null) {
      let s = r - n;
      for (r = 7; r !== 0 && s > 0; ) {
        let a = e[n + s - 1];
        ((e[n + s - 1] = e[r]), (e[r] = a), --r, --s);
      }
    } else if (n === null && r !== 8) return tu;
    return e;
  }
  function Zdo(t) {
    let e = "",
      n = t1o(t).idx,
      o = !1;
    for (let s = 0; s <= 7; ++s)
      if (!(o && t[s] === 0)) {
        if ((o && (o = !1), n === s)) {
          ((e += s === 0 ? "::" : ":"), (o = !0));
          continue;
        }
        ((e += t[s].toString(16)), s !== 7 && (e += ":"));
      }
    return e;
  }
  function f6t(t, e) {
    if (t[0] === "[") return t[t.length - 1] !== "]" ? tu : Xdo(t.substring(1, t.length - 1));
    if (!e) return e1o(t);
    let r = Vdo(t),
      n = gIr.toASCII(r, !1, gIr.PROCESSING_OPTIONS.NONTRANSITIONAL, !1);
    if (n === null || Qdo(n)) return tu;
    let o = Kdo(n);
    return typeof o == "number" || o === tu ? o : n;
  }
  function e1o(t) {
    if (Gdo(t)) return tu;
    let e = "",
      r = Eee.ucs2.decode(t);
    for (let n = 0; n < r.length; ++n) e += dG(r[n], rke);
    return e;
  }
  function t1o(t) {
    let e = null,
      r = 1,
      n = null,
      o = 0;
    for (let s = 0; s < t.length; ++s)
      t[s] !== 0 ? (o > r && ((e = n), (r = o)), (n = null), (o = 0)) : (n === null && (n = s), ++o);
    return (o > r && ((e = n), (r = o)), { idx: e, len: r });
  }
  function h6t(t) {
    return typeof t == "number" ? Jdo(t) : t instanceof Array ? "[" + Zdo(t) + "]" : t;
  }
  function r1o(t) {
    return t.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "");
  }
  function n1o(t) {
    return t.replace(/\u0009|\u000A|\u000D/g, "");
  }
  function SIr(t) {
    let e = t.path;
    e.length !== 0 && ((t.scheme === "file" && e.length === 1 && o1o(e[0])) || e.pop());
  }
  function wIr(t) {
    return t.username !== "" || t.password !== "";
  }
  function i1o(t) {
    return t.host === null || t.host === "" || t.cannotBeABaseURL || t.scheme === "file";
  }
  function o1o(t) {
    return /^[A-Za-z]:$/.test(t);
  }
  function t1(t, e, r, n, o) {
    if (
      ((this.pointer = 0),
      (this.input = t),
      (this.base = e || null),
      (this.encodingOverride = r || "utf-8"),
      (this.stateOverride = o),
      (this.url = n),
      (this.failure = !1),
      (this.parseError = !1),
      !this.url)
    ) {
      this.url = {
        scheme: "",
        username: "",
        password: "",
        host: null,
        port: null,
        path: [],
        query: null,
        fragment: null,
        cannotBeABaseURL: !1,
      };
      let a = r1o(this.input);
      (a !== this.input && (this.parseError = !0), (this.input = a));
    }
    let s = n1o(this.input);
    for (
      s !== this.input && (this.parseError = !0),
        this.input = s,
        this.state = o || "scheme start",
        this.buffer = "",
        this.atFlag = !1,
        this.arrFlag = !1,
        this.passwordTokenSeenFlag = !1,
        this.input = Eee.ucs2.decode(this.input);
      this.pointer <= this.input.length;
      ++this.pointer
    ) {
      let a = this.input[this.pointer],
        u = isNaN(a) ? void 0 : String.fromCodePoint(a),
        c = this["parse " + this.state](a, u);
      if (c) {
        if (c === tu) {
          this.failure = !0;
          break;
        }
      } else break;
    }
  }
  t1.prototype["parse scheme start"] = function (e, r) {
    if (Jhe(e)) ((this.buffer += r.toLowerCase()), (this.state = "scheme"));
    else if (!this.stateOverride) ((this.state = "no scheme"), --this.pointer);
    else return ((this.parseError = !0), tu);
    return !0;
  };
  t1.prototype["parse scheme"] = function (e, r) {
    if (Fdo(e) || e === 43 || e === 45 || e === 46) this.buffer += r.toLowerCase();
    else if (e === 58) {
      if (
        (this.stateOverride &&
          ((Cp(this.url) && !d6t(this.buffer)) ||
            (!Cp(this.url) && d6t(this.buffer)) ||
            ((wIr(this.url) || this.url.port !== null) && this.buffer === "file") ||
            (this.url.scheme === "file" && (this.url.host === "" || this.url.host === null)))) ||
        ((this.url.scheme = this.buffer), (this.buffer = ""), this.stateOverride)
      )
        return !1;
      this.url.scheme === "file"
        ? ((this.input[this.pointer + 1] !== 47 || this.input[this.pointer + 2] !== 47) && (this.parseError = !0),
          (this.state = "file"))
        : Cp(this.url) && this.base !== null && this.base.scheme === this.url.scheme
          ? (this.state = "special relative or authority")
          : Cp(this.url)
            ? (this.state = "special authority slashes")
            : this.input[this.pointer + 1] === 47
              ? ((this.state = "path or authority"), ++this.pointer)
              : ((this.url.cannotBeABaseURL = !0), this.url.path.push(""), (this.state = "cannot-be-a-base-URL path"));
    } else if (!this.stateOverride) ((this.buffer = ""), (this.state = "no scheme"), (this.pointer = -1));
    else return ((this.parseError = !0), tu);
    return !0;
  };
  t1.prototype["parse no scheme"] = function (e) {
    return this.base === null || (this.base.cannotBeABaseURL && e !== 35)
      ? tu
      : (this.base.cannotBeABaseURL && e === 35
          ? ((this.url.scheme = this.base.scheme),
            (this.url.path = this.base.path.slice()),
            (this.url.query = this.base.query),
            (this.url.fragment = ""),
            (this.url.cannotBeABaseURL = !0),
            (this.state = "fragment"))
          : this.base.scheme === "file"
            ? ((this.state = "file"), --this.pointer)
            : ((this.state = "relative"), --this.pointer),
        !0);
  };
  t1.prototype["parse special relative or authority"] = function (e) {
    return (
      e === 47 && this.input[this.pointer + 1] === 47
        ? ((this.state = "special authority ignore slashes"), ++this.pointer)
        : ((this.parseError = !0), (this.state = "relative"), --this.pointer),
      !0
    );
  };
  t1.prototype["parse path or authority"] = function (e) {
    return (e === 47 ? (this.state = "authority") : ((this.state = "path"), --this.pointer), !0);
  };
  t1.prototype["parse relative"] = function (e) {
    return (
      (this.url.scheme = this.base.scheme),
      isNaN(e)
        ? ((this.url.username = this.base.username),
          (this.url.password = this.base.password),
          (this.url.host = this.base.host),
          (this.url.port = this.base.port),
          (this.url.path = this.base.path.slice()),
          (this.url.query = this.base.query))
        : e === 47
          ? (this.state = "relative slash")
          : e === 63
            ? ((this.url.username = this.base.username),
              (this.url.password = this.base.password),
              (this.url.host = this.base.host),
              (this.url.port = this.base.port),
              (this.url.path = this.base.path.slice()),
              (this.url.query = ""),
              (this.state = "query"))
            : e === 35
              ? ((this.url.username = this.base.username),
                (this.url.password = this.base.password),
                (this.url.host = this.base.host),
                (this.url.port = this.base.port),
                (this.url.path = this.base.path.slice()),
                (this.url.query = this.base.query),
                (this.url.fragment = ""),
                (this.state = "fragment"))
              : Cp(this.url) && e === 92
                ? ((this.parseError = !0), (this.state = "relative slash"))
                : ((this.url.username = this.base.username),
                  (this.url.password = this.base.password),
                  (this.url.host = this.base.host),
                  (this.url.port = this.base.port),
                  (this.url.path = this.base.path.slice(0, this.base.path.length - 1)),
                  (this.state = "path"),
                  --this.pointer),
      !0
    );
  };
  t1.prototype["parse relative slash"] = function (e) {
    return (
      Cp(this.url) && (e === 47 || e === 92)
        ? (e === 92 && (this.parseError = !0), (this.state = "special authority ignore slashes"))
        : e === 47
          ? (this.state = "authority")
          : ((this.url.username = this.base.username),
            (this.url.password = this.base.password),
            (this.url.host = this.base.host),
            (this.url.port = this.base.port),
            (this.state = "path"),
            --this.pointer),
      !0
    );
  };
  t1.prototype["parse special authority slashes"] = function (e) {
    return (
      e === 47 && this.input[this.pointer + 1] === 47
        ? ((this.state = "special authority ignore slashes"), ++this.pointer)
        : ((this.parseError = !0), (this.state = "special authority ignore slashes"), --this.pointer),
      !0
    );
  };
  t1.prototype["parse special authority ignore slashes"] = function (e) {
    return (e !== 47 && e !== 92 ? ((this.state = "authority"), --this.pointer) : (this.parseError = !0), !0);
  };
  t1.prototype["parse authority"] = function (e, r) {
    if (e === 64) {
      ((this.parseError = !0), this.atFlag && (this.buffer = "%40" + this.buffer), (this.atFlag = !0));
      let n = bIr(this.buffer);
      for (let o = 0; o < n; ++o) {
        let s = this.buffer.codePointAt(o);
        if (s === 58 && !this.passwordTokenSeenFlag) {
          this.passwordTokenSeenFlag = !0;
          continue;
        }
        let a = dG(s, p6t);
        this.passwordTokenSeenFlag ? (this.url.password += a) : (this.url.username += a);
      }
      this.buffer = "";
    } else if (isNaN(e) || e === 47 || e === 63 || e === 35 || (Cp(this.url) && e === 92)) {
      if (this.atFlag && this.buffer === "") return ((this.parseError = !0), tu);
      ((this.pointer -= bIr(this.buffer) + 1), (this.buffer = ""), (this.state = "host"));
    } else this.buffer += r;
    return !0;
  };
  t1.prototype["parse hostname"] = t1.prototype["parse host"] = function (e, r) {
    if (this.stateOverride && this.url.scheme === "file") (--this.pointer, (this.state = "file host"));
    else if (e === 58 && !this.arrFlag) {
      if (this.buffer === "") return ((this.parseError = !0), tu);
      let n = f6t(this.buffer, Cp(this.url));
      if (n === tu) return tu;
      if (((this.url.host = n), (this.buffer = ""), (this.state = "port"), this.stateOverride === "hostname"))
        return !1;
    } else if (isNaN(e) || e === 47 || e === 63 || e === 35 || (Cp(this.url) && e === 92)) {
      if ((--this.pointer, Cp(this.url) && this.buffer === "")) return ((this.parseError = !0), tu);
      if (this.stateOverride && this.buffer === "" && (wIr(this.url) || this.url.port !== null))
        return ((this.parseError = !0), !1);
      let n = f6t(this.buffer, Cp(this.url));
      if (n === tu) return tu;
      if (((this.url.host = n), (this.buffer = ""), (this.state = "path start"), this.stateOverride)) return !1;
    } else (e === 91 ? (this.arrFlag = !0) : e === 93 && (this.arrFlag = !1), (this.buffer += r));
    return !0;
  };
  t1.prototype["parse port"] = function (e, r) {
    if (Khe(e)) this.buffer += r;
    else if (isNaN(e) || e === 47 || e === 63 || e === 35 || (Cp(this.url) && e === 92) || this.stateOverride) {
      if (this.buffer !== "") {
        let n = parseInt(this.buffer);
        if (n > Math.pow(2, 16) - 1) return ((this.parseError = !0), tu);
        ((this.url.port = n === qdo(this.url.scheme) ? null : n), (this.buffer = ""));
      }
      if (this.stateOverride) return !1;
      ((this.state = "path start"), --this.pointer);
    } else return ((this.parseError = !0), tu);
    return !0;
  };
  var s1o = new Set([47, 92, 63, 35]);
  t1.prototype["parse file"] = function (e) {
    return (
      (this.url.scheme = "file"),
      e === 47 || e === 92
        ? (e === 92 && (this.parseError = !0), (this.state = "file slash"))
        : this.base !== null && this.base.scheme === "file"
          ? isNaN(e)
            ? ((this.url.host = this.base.host),
              (this.url.path = this.base.path.slice()),
              (this.url.query = this.base.query))
            : e === 63
              ? ((this.url.host = this.base.host),
                (this.url.path = this.base.path.slice()),
                (this.url.query = ""),
                (this.state = "query"))
              : e === 35
                ? ((this.url.host = this.base.host),
                  (this.url.path = this.base.path.slice()),
                  (this.url.query = this.base.query),
                  (this.url.fragment = ""),
                  (this.state = "fragment"))
                : (this.input.length - this.pointer - 1 === 0 ||
                  !$do(e, this.input[this.pointer + 1]) ||
                  (this.input.length - this.pointer - 1 >= 2 && !s1o.has(this.input[this.pointer + 2]))
                    ? ((this.url.host = this.base.host), (this.url.path = this.base.path.slice()), SIr(this.url))
                    : (this.parseError = !0),
                  (this.state = "path"),
                  --this.pointer)
          : ((this.state = "path"), --this.pointer),
      !0
    );
  };
  t1.prototype["parse file slash"] = function (e) {
    return (
      e === 47 || e === 92
        ? (e === 92 && (this.parseError = !0), (this.state = "file host"))
        : (this.base !== null &&
            this.base.scheme === "file" &&
            (jdo(this.base.path[0]) ? this.url.path.push(this.base.path[0]) : (this.url.host = this.base.host)),
          (this.state = "path"),
          --this.pointer),
      !0
    );
  };
  t1.prototype["parse file host"] = function (e, r) {
    if (isNaN(e) || e === 47 || e === 92 || e === 63 || e === 35)
      if ((--this.pointer, !this.stateOverride && EIr(this.buffer))) ((this.parseError = !0), (this.state = "path"));
      else if (this.buffer === "") {
        if (((this.url.host = ""), this.stateOverride)) return !1;
        this.state = "path start";
      } else {
        let n = f6t(this.buffer, Cp(this.url));
        if (n === tu) return tu;
        if ((n === "localhost" && (n = ""), (this.url.host = n), this.stateOverride)) return !1;
        ((this.buffer = ""), (this.state = "path start"));
      }
    else this.buffer += r;
    return !0;
  };
  t1.prototype["parse path start"] = function (e) {
    return (
      Cp(this.url)
        ? (e === 92 && (this.parseError = !0), (this.state = "path"), e !== 47 && e !== 92 && --this.pointer)
        : !this.stateOverride && e === 63
          ? ((this.url.query = ""), (this.state = "query"))
          : !this.stateOverride && e === 35
            ? ((this.url.fragment = ""), (this.state = "fragment"))
            : e !== void 0 && ((this.state = "path"), e !== 47 && --this.pointer),
      !0
    );
  };
  t1.prototype["parse path"] = function (e) {
    if (isNaN(e) || e === 47 || (Cp(this.url) && e === 92) || (!this.stateOverride && (e === 63 || e === 35))) {
      if (
        (Cp(this.url) && e === 92 && (this.parseError = !0),
        Udo(this.buffer)
          ? (SIr(this.url), e !== 47 && !(Cp(this.url) && e === 92) && this.url.path.push(""))
          : yIr(this.buffer) && e !== 47 && !(Cp(this.url) && e === 92)
            ? this.url.path.push("")
            : yIr(this.buffer) ||
              (this.url.scheme === "file" &&
                this.url.path.length === 0 &&
                EIr(this.buffer) &&
                (this.url.host !== "" && this.url.host !== null && ((this.parseError = !0), (this.url.host = "")),
                (this.buffer = this.buffer[0] + ":")),
              this.url.path.push(this.buffer)),
        (this.buffer = ""),
        this.url.scheme === "file" && (e === void 0 || e === 63 || e === 35))
      )
        for (; this.url.path.length > 1 && this.url.path[0] === ""; ) ((this.parseError = !0), this.url.path.shift());
      (e === 63 && ((this.url.query = ""), (this.state = "query")),
        e === 35 && ((this.url.fragment = ""), (this.state = "fragment")));
    } else
      (e === 37 && (!vC(this.input[this.pointer + 1]) || !vC(this.input[this.pointer + 2])) && (this.parseError = !0),
        (this.buffer += dG(e, CIr)));
    return !0;
  };
  t1.prototype["parse cannot-be-a-base-URL path"] = function (e) {
    return (
      e === 63
        ? ((this.url.query = ""), (this.state = "query"))
        : e === 35
          ? ((this.url.fragment = ""), (this.state = "fragment"))
          : (!isNaN(e) && e !== 37 && (this.parseError = !0),
            e === 37 &&
              (!vC(this.input[this.pointer + 1]) || !vC(this.input[this.pointer + 2])) &&
              (this.parseError = !0),
            isNaN(e) || (this.url.path[0] = this.url.path[0] + dG(e, rke))),
      !0
    );
  };
  t1.prototype["parse query"] = function (e, r) {
    if (isNaN(e) || (!this.stateOverride && e === 35)) {
      (!Cp(this.url) || this.url.scheme === "ws" || this.url.scheme === "wss") && (this.encodingOverride = "utf-8");
      let n = new Buffer(this.buffer);
      for (let o = 0; o < n.length; ++o)
        n[o] < 33 || n[o] > 126 || n[o] === 34 || n[o] === 35 || n[o] === 60 || n[o] === 62
          ? (this.url.query += vIr(n[o]))
          : (this.url.query += String.fromCodePoint(n[o]));
      ((this.buffer = ""), e === 35 && ((this.url.fragment = ""), (this.state = "fragment")));
    } else
      (e === 37 && (!vC(this.input[this.pointer + 1]) || !vC(this.input[this.pointer + 2])) && (this.parseError = !0),
        (this.buffer += r));
    return !0;
  };
  t1.prototype["parse fragment"] = function (e) {
    return (
      isNaN(e) ||
        (e === 0
          ? (this.parseError = !0)
          : (e === 37 &&
              (!vC(this.input[this.pointer + 1]) || !vC(this.input[this.pointer + 2])) &&
              (this.parseError = !0),
            (this.url.fragment += dG(e, rke)))),
      !0
    );
  };
  function a1o(t, e) {
    let r = t.scheme + ":";
    if (
      (t.host !== null
        ? ((r += "//"),
          (t.username !== "" || t.password !== "") &&
            ((r += t.username), t.password !== "" && (r += ":" + t.password), (r += "@")),
          (r += h6t(t.host)),
          t.port !== null && (r += ":" + t.port))
        : t.host === null && t.scheme === "file" && (r += "//"),
      t.cannotBeABaseURL)
    )
      r += t.path[0];
    else for (let n of t.path) r += "/" + n;
    return (t.query !== null && (r += "?" + t.query), !e && t.fragment !== null && (r += "#" + t.fragment), r);
  }
  function u1o(t) {
    let e = t.scheme + "://";
    return ((e += h6t(t.host)), t.port !== null && (e += ":" + t.port), e);
  }
  t6.exports.serializeURL = a1o;
  t6.exports.serializeURLOrigin = function (t) {
    switch (t.scheme) {
      case "blob":
        try {
          return t6.exports.serializeURLOrigin(t6.exports.parseURL(t.path[0]));
        } catch {
          return "null";
        }
      case "ftp":
      case "gopher":
      case "http":
      case "https":
      case "ws":
      case "wss":
        return u1o({ scheme: t.scheme, host: t.host, port: t.port });
      case "file":
        return "file://";
      default:
        return "null";
    }
  };
  t6.exports.basicURLParse = function (t, e) {
    e === void 0 && (e = {});
    let r = new t1(t, e.baseURL, e.encodingOverride, e.url, e.stateOverride);
    return r.failure ? "failure" : r.url;
  };
  t6.exports.setTheUsername = function (t, e) {
    t.username = "";
    let r = Eee.ucs2.decode(e);
    for (let n = 0; n < r.length; ++n) t.username += dG(r[n], p6t);
  };
  t6.exports.setThePassword = function (t, e) {
    t.password = "";
    let r = Eee.ucs2.decode(e);
    for (let n = 0; n < r.length; ++n) t.password += dG(r[n], p6t);
  };
  t6.exports.serializeHost = h6t;
  t6.exports.cannotHaveAUsernamePasswordPort = i1o;
  t6.exports.serializeInteger = function (t) {
    return String(t);
  };
  t6.exports.parseURL = function (t, e) {
    return (
      e === void 0 && (e = {}),
      t6.exports.basicURLParse(t, { baseURL: e.baseURL, encodingOverride: e.encodingOverride })
    );
  };
});