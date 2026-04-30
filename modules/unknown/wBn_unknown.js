/**
 * @module wBn
 * @category unknown
 * @label unknown
 * @position 1315 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wBn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wBn = T((UZt, $Zt) => {
  (function (t, e) {
    typeof UZt == "object" && typeof $Zt < "u"
      ? ($Zt.exports = e())
      : typeof define == "function" && define.amd
        ? define(e)
        : ((t = typeof globalThis < "u" ? globalThis : t || self).dayjs_plugin_utc = e());
  })(UZt, function () {
    "use strict";
    var t = "minute",
      e = /[+-]\d\d(?::?\d\d)?/g,
      r = /([+-]|\d\d)/g;
    return function (n, o, s) {
      var a = o.prototype;
      ((s.utc = function (h) {
        var g = { date: h, utc: !0, args: arguments };
        return new o(g);
      }),
        (a.utc = function (h) {
          var g = s(this.toDate(), { locale: this.$L, utc: !0 });
          return h ? g.add(this.utcOffset(), t) : g;
        }),
        (a.local = function () {
          return s(this.toDate(), { locale: this.$L, utc: !1 });
        }));
      var u = a.parse;
      a.parse = function (h) {
        (h.utc && (this.$u = !0), this.$utils().u(h.$offset) || (this.$offset = h.$offset), u.call(this, h));
      };
      var c = a.init;
      a.init = function () {
        if (this.$u) {
          var h = this.$d;
          ((this.$y = h.getUTCFullYear()),
            (this.$M = h.getUTCMonth()),
            (this.$D = h.getUTCDate()),
            (this.$W = h.getUTCDay()),
            (this.$H = h.getUTCHours()),
            (this.$m = h.getUTCMinutes()),
            (this.$s = h.getUTCSeconds()),
            (this.$ms = h.getUTCMilliseconds()));
        } else c.call(this);
      };
      var m = a.utcOffset;
      a.utcOffset = function (h, g) {
        var b = this.$utils().u;
        if (b(h)) return this.$u ? 0 : b(this.$offset) ? m.call(this) : this.$offset;
        if (
          typeof h == "string" &&
          ((h = (function (v) {
            v === void 0 && (v = "");
            var C = v.match(e);
            if (!C) return null;
            var x = ("" + C[0]).match(r) || ["-", 0, 0],
              k = x[0],
              R = 60 * +x[1] + +x[2];
            return R === 0 ? 0 : k === "+" ? R : -R;
          })(h)),
          h === null)
        )
          return this;
        var A = Math.abs(h) <= 16 ? 60 * h : h;
        if (A === 0) return this.utc(g);
        var y = this.clone();
        if (g) return ((y.$offset = A), (y.$u = !1), y);
        var E = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
        return (((y = this.local().add(A + E, t)).$offset = A), (y.$x.$localOffset = E), y);
      };
      var d = a.format;
      ((a.format = function (h) {
        var g = h || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return d.call(this, g);
      }),
        (a.valueOf = function () {
          var h = this.$utils().u(this.$offset)
            ? 0
            : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * h;
        }),
        (a.isUTC = function () {
          return !!this.$u;
        }),
        (a.toISOString = function () {
          return this.toDate().toISOString();
        }),
        (a.toString = function () {
          return this.toDate().toUTCString();
        }));
      var f = a.toDate;
      a.toDate = function (h) {
        return h === "s" && this.$offset ? s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : f.call(this);
      };
      var p = a.diff;
      a.diff = function (h, g, b) {
        if (h && this.$u === h.$u) return p.call(this, h, g, b);
        var A = this.local(),
          y = s(h).local();
        return p.call(A, y, g, b);
      };
    };
  });
});