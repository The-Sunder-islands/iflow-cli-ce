/**
 * @module _Hi
 * @category utils/oop
 * @label oop
 * @position 1902 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_Hi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _Hi = T((gyr, byr) => {
  (function (t, e) {
    typeof gyr == "object" && typeof byr < "u"
      ? (byr.exports = e())
      : typeof define == "function" && define.amd
        ? define(e)
        : ((t = typeof globalThis < "u" ? globalThis : t || self), (t.tinycolor = e()));
  })(gyr, function () {
    "use strict";
    function t(ce) {
      "@babel/helpers - typeof";
      return (
        (t =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (ye) {
                return typeof ye;
              }
            : function (ye) {
                return ye && typeof Symbol == "function" && ye.constructor === Symbol && ye !== Symbol.prototype
                  ? "symbol"
                  : typeof ye;
              }),
        t(ce)
      );
    }
    var e = /^\s+/,
      r = /\s+$/;
    function n(ce, ye) {
      if (((ce = ce || ""), (ye = ye || {}), ce instanceof n)) return ce;
      if (!(this instanceof n)) return new n(ce, ye);
      var Z = o(ce);
      ((this._originalInput = ce),
        (this._r = Z.r),
        (this._g = Z.g),
        (this._b = Z.b),
        (this._a = Z.a),
        (this._roundA = Math.round(100 * this._a) / 100),
        (this._format = ye.format || Z.format),
        (this._gradientType = ye.gradientType),
        this._r < 1 && (this._r = Math.round(this._r)),
        this._g < 1 && (this._g = Math.round(this._g)),
        this._b < 1 && (this._b = Math.round(this._b)),
        (this._ok = Z.ok));
    }
    ((n.prototype = {
      isDark: function () {
        return this.getBrightness() < 128;
      },
      isLight: function () {
        return !this.isDark();
      },
      isValid: function () {
        return this._ok;
      },
      getOriginalInput: function () {
        return this._originalInput;
      },
      getFormat: function () {
        return this._format;
      },
      getAlpha: function () {
        return this._a;
      },
      getBrightness: function () {
        var ye = this.toRgb();
        return (ye.r * 299 + ye.g * 587 + ye.b * 114) / 1e3;
      },
      getLuminance: function () {
        var ye = this.toRgb(),
          Z,
          oe,
          ue,
          he,
          se,
          fe;
        return (
          (Z = ye.r / 255),
          (oe = ye.g / 255),
          (ue = ye.b / 255),
          Z <= 0.03928 ? (he = Z / 12.92) : (he = Math.pow((Z + 0.055) / 1.055, 2.4)),
          oe <= 0.03928 ? (se = oe / 12.92) : (se = Math.pow((oe + 0.055) / 1.055, 2.4)),
          ue <= 0.03928 ? (fe = ue / 12.92) : (fe = Math.pow((ue + 0.055) / 1.055, 2.4)),
          0.2126 * he + 0.7152 * se + 0.0722 * fe
        );
      },
      setAlpha: function (ye) {
        return ((this._a = F(ye)), (this._roundA = Math.round(100 * this._a) / 100), this);
      },
      toHsv: function () {
        var ye = c(this._r, this._g, this._b);
        return { h: ye.h * 360, s: ye.s, v: ye.v, a: this._a };
      },
      toHsvString: function () {
        var ye = c(this._r, this._g, this._b),
          Z = Math.round(ye.h * 360),
          oe = Math.round(ye.s * 100),
          ue = Math.round(ye.v * 100);
        return this._a == 1
          ? "hsv(" + Z + ", " + oe + "%, " + ue + "%)"
          : "hsva(" + Z + ", " + oe + "%, " + ue + "%, " + this._roundA + ")";
      },
      toHsl: function () {
        var ye = a(this._r, this._g, this._b);
        return { h: ye.h * 360, s: ye.s, l: ye.l, a: this._a };
      },
      toHslString: function () {
        var ye = a(this._r, this._g, this._b),
          Z = Math.round(ye.h * 360),
          oe = Math.round(ye.s * 100),
          ue = Math.round(ye.l * 100);
        return this._a == 1
          ? "hsl(" + Z + ", " + oe + "%, " + ue + "%)"
          : "hsla(" + Z + ", " + oe + "%, " + ue + "%, " + this._roundA + ")";
      },
      toHex: function (ye) {
        return d(this._r, this._g, this._b, ye);
      },
      toHexString: function (ye) {
        return "#" + this.toHex(ye);
      },
      toHex8: function (ye) {
        return f(this._r, this._g, this._b, this._a, ye);
      },
      toHex8String: function (ye) {
        return "#" + this.toHex8(ye);
      },
      toRgb: function () {
        return { r: Math.round(this._r), g: Math.round(this._g), b: Math.round(this._b), a: this._a };
      },
      toRgbString: function () {
        return this._a == 1
          ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")"
          : "rgba(" +
              Math.round(this._r) +
              ", " +
              Math.round(this._g) +
              ", " +
              Math.round(this._b) +
              ", " +
              this._roundA +
              ")";
      },
      toPercentageRgb: function () {
        return {
          r: Math.round(B(this._r, 255) * 100) + "%",
          g: Math.round(B(this._g, 255) * 100) + "%",
          b: Math.round(B(this._b, 255) * 100) + "%",
          a: this._a,
        };
      },
      toPercentageRgbString: function () {
        return this._a == 1
          ? "rgb(" +
              Math.round(B(this._r, 255) * 100) +
              "%, " +
              Math.round(B(this._g, 255) * 100) +
              "%, " +
              Math.round(B(this._b, 255) * 100) +
              "%)"
          : "rgba(" +
              Math.round(B(this._r, 255) * 100) +
              "%, " +
              Math.round(B(this._g, 255) * 100) +
              "%, " +
              Math.round(B(this._b, 255) * 100) +
              "%, " +
              this._roundA +
              ")";
      },
      toName: function () {
        return this._a === 0 ? "transparent" : this._a < 1 ? !1 : O[d(this._r, this._g, this._b, !0)] || !1;
      },
      toFilter: function (ye) {
        var Z = "#" + p(this._r, this._g, this._b, this._a),
          oe = Z,
          ue = this._gradientType ? "GradientType = 1, " : "";
        if (ye) {
          var he = n(ye);
          oe = "#" + p(he._r, he._g, he._b, he._a);
        }
        return "progid:DXImageTransform.Microsoft.gradient(" + ue + "startColorstr=" + Z + ",endColorstr=" + oe + ")";
      },
      toString: function (ye) {
        var Z = !!ye;
        ye = ye || this._format;
        var oe = !1,
          ue = this._a < 1 && this._a >= 0,
          he =
            !Z &&
            ue &&
            (ye === "hex" || ye === "hex6" || ye === "hex3" || ye === "hex4" || ye === "hex8" || ye === "name");
        return he
          ? ye === "name" && this._a === 0
            ? this.toName()
            : this.toRgbString()
          : (ye === "rgb" && (oe = this.toRgbString()),
            ye === "prgb" && (oe = this.toPercentageRgbString()),
            (ye === "hex" || ye === "hex6") && (oe = this.toHexString()),
            ye === "hex3" && (oe = this.toHexString(!0)),
            ye === "hex4" && (oe = this.toHex8String(!0)),
            ye === "hex8" && (oe = this.toHex8String()),
            ye === "name" && (oe = this.toName()),
            ye === "hsl" && (oe = this.toHslString()),
            ye === "hsv" && (oe = this.toHsvString()),
            oe || this.toHexString());
      },
      clone: function () {
        return n(this.toString());
      },
      _applyModification: function (ye, Z) {
        var oe = ye.apply(null, [this].concat([].slice.call(Z)));
        return ((this._r = oe._r), (this._g = oe._g), (this._b = oe._b), this.setAlpha(oe._a), this);
      },
      lighten: function () {
        return this._applyModification(A, arguments);
      },
      brighten: function () {
        return this._applyModification(y, arguments);
      },
      darken: function () {
        return this._applyModification(E, arguments);
      },
      desaturate: function () {
        return this._applyModification(h, arguments);
      },
      saturate: function () {
        return this._applyModification(g, arguments);
      },
      greyscale: function () {
        return this._applyModification(b, arguments);
      },
      spin: function () {
        return this._applyModification(v, arguments);
      },
      _applyCombination: function (ye, Z) {
        return ye.apply(null, [this].concat([].slice.call(Z)));
      },
      analogous: function () {
        return this._applyCombination(R, arguments);
      },
      complement: function () {
        return this._applyCombination(C, arguments);
      },
      monochromatic: function () {
        return this._applyCombination(P, arguments);
      },
      splitcomplement: function () {
        return this._applyCombination(k, arguments);
      },
      triad: function () {
        return this._applyCombination(x, [3]);
      },
      tetrad: function () {
        return this._applyCombination(x, [4]);
      },
    }),
      (n.fromRatio = function (ce, ye) {
        if (t(ce) == "object") {
          var Z = {};
          for (var oe in ce) ce.hasOwnProperty(oe) && (oe === "a" ? (Z[oe] = ce[oe]) : (Z[oe] = U(ce[oe])));
          ce = Z;
        }
        return n(ce, ye);
      }));
    function o(ce) {
      var ye = { r: 0, g: 0, b: 0 },
        Z = 1,
        oe = null,
        ue = null,
        he = null,
        se = !1,
        fe = !1;
      return (
        typeof ce == "string" && (ce = ne(ce)),
        t(ce) == "object" &&
          (q(ce.r) && q(ce.g) && q(ce.b)
            ? ((ye = s(ce.r, ce.g, ce.b)), (se = !0), (fe = String(ce.r).substr(-1) === "%" ? "prgb" : "rgb"))
            : q(ce.h) && q(ce.s) && q(ce.v)
              ? ((oe = U(ce.s)), (ue = U(ce.v)), (ye = m(ce.h, oe, ue)), (se = !0), (fe = "hsv"))
              : q(ce.h) &&
                q(ce.s) &&
                q(ce.l) &&
                ((oe = U(ce.s)), (he = U(ce.l)), (ye = u(ce.h, oe, he)), (se = !0), (fe = "hsl")),
          ce.hasOwnProperty("a") && (Z = ce.a)),
        (Z = F(Z)),
        {
          ok: se,
          format: ce.format || fe,
          r: Math.min(255, Math.max(ye.r, 0)),
          g: Math.min(255, Math.max(ye.g, 0)),
          b: Math.min(255, Math.max(ye.b, 0)),
          a: Z,
        }
      );
    }
    function s(ce, ye, Z) {
      return { r: B(ce, 255) * 255, g: B(ye, 255) * 255, b: B(Z, 255) * 255 };
    }
    function a(ce, ye, Z) {
      ((ce = B(ce, 255)), (ye = B(ye, 255)), (Z = B(Z, 255)));
      var oe = Math.max(ce, ye, Z),
        ue = Math.min(ce, ye, Z),
        he,
        se,
        fe = (oe + ue) / 2;
      if (oe == ue) he = se = 0;
      else {
        var ge = oe - ue;
        switch (((se = fe > 0.5 ? ge / (2 - oe - ue) : ge / (oe + ue)), oe)) {
          case ce:
            he = (ye - Z) / ge + (ye < Z ? 6 : 0);
            break;
          case ye:
            he = (Z - ce) / ge + 2;
            break;
          case Z:
            he = (ce - ye) / ge + 4;
            break;
        }
        he /= 6;
      }
      return { h: he, s: se, l: fe };
    }
    function u(ce, ye, Z) {
      var oe, ue, he;
      ((ce = B(ce, 360)), (ye = B(ye, 100)), (Z = B(Z, 100)));
      function se(V, ee, Ce) {
        return (
          Ce < 0 && (Ce += 1),
          Ce > 1 && (Ce -= 1),
          Ce < 1 / 6 ? V + (ee - V) * 6 * Ce : Ce < 1 / 2 ? ee : Ce < 2 / 3 ? V + (ee - V) * (2 / 3 - Ce) * 6 : V
        );
      }
      if (ye === 0) oe = ue = he = Z;
      else {
        var fe = Z < 0.5 ? Z * (1 + ye) : Z + ye - Z * ye,
          ge = 2 * Z - fe;
        ((oe = se(ge, fe, ce + 1 / 3)), (ue = se(ge, fe, ce)), (he = se(ge, fe, ce - 1 / 3)));
      }
      return { r: oe * 255, g: ue * 255, b: he * 255 };
    }
    function c(ce, ye, Z) {
      ((ce = B(ce, 255)), (ye = B(ye, 255)), (Z = B(Z, 255)));
      var oe = Math.max(ce, ye, Z),
        ue = Math.min(ce, ye, Z),
        he,
        se,
        fe = oe,
        ge = oe - ue;
      if (((se = oe === 0 ? 0 : ge / oe), oe == ue)) he = 0;
      else {
        switch (oe) {
          case ce:
            he = (ye - Z) / ge + (ye < Z ? 6 : 0);
            break;
          case ye:
            he = (Z - ce) / ge + 2;
            break;
          case Z:
            he = (ce - ye) / ge + 4;
            break;
        }
        he /= 6;
      }
      return { h: he, s: se, v: fe };
    }
    function m(ce, ye, Z) {
      ((ce = B(ce, 360) * 6), (ye = B(ye, 100)), (Z = B(Z, 100)));
      var oe = Math.floor(ce),
        ue = ce - oe,
        he = Z * (1 - ye),
        se = Z * (1 - ue * ye),
        fe = Z * (1 - (1 - ue) * ye),
        ge = oe % 6,
        V = [Z, se, he, he, fe, Z][ge],
        ee = [fe, Z, Z, se, he, he][ge],
        Ce = [he, he, fe, Z, Z, se][ge];
      return { r: V * 255, g: ee * 255, b: Ce * 255 };
    }
    function d(ce, ye, Z, oe) {
      var ue = [H(Math.round(ce).toString(16)), H(Math.round(ye).toString(16)), H(Math.round(Z).toString(16))];
      return oe &&
        ue[0].charAt(0) == ue[0].charAt(1) &&
        ue[1].charAt(0) == ue[1].charAt(1) &&
        ue[2].charAt(0) == ue[2].charAt(1)
        ? ue[0].charAt(0) + ue[1].charAt(0) + ue[2].charAt(0)
        : ue.join("");
    }
    function f(ce, ye, Z, oe, ue) {
      var he = [
        H(Math.round(ce).toString(16)),
        H(Math.round(ye).toString(16)),
        H(Math.round(Z).toString(16)),
        H(Y(oe)),
      ];
      return ue &&
        he[0].charAt(0) == he[0].charAt(1) &&
        he[1].charAt(0) == he[1].charAt(1) &&
        he[2].charAt(0) == he[2].charAt(1) &&
        he[3].charAt(0) == he[3].charAt(1)
        ? he[0].charAt(0) + he[1].charAt(0) + he[2].charAt(0) + he[3].charAt(0)
        : he.join("");
    }
    function p(ce, ye, Z, oe) {
      var ue = [
        H(Y(oe)),
        H(Math.round(ce).toString(16)),
        H(Math.round(ye).toString(16)),
        H(Math.round(Z).toString(16)),
      ];
      return ue.join("");
    }
    ((n.equals = function (ce, ye) {
      return !ce || !ye ? !1 : n(ce).toRgbString() == n(ye).toRgbString();
    }),
      (n.random = function () {
        return n.fromRatio({ r: Math.random(), g: Math.random(), b: Math.random() });
      }));
    function h(ce, ye) {
      ye = ye === 0 ? 0 : ye || 10;
      var Z = n(ce).toHsl();
      return ((Z.s -= ye / 100), (Z.s = L(Z.s)), n(Z));
    }
    function g(ce, ye) {
      ye = ye === 0 ? 0 : ye || 10;
      var Z = n(ce).toHsl();
      return ((Z.s += ye / 100), (Z.s = L(Z.s)), n(Z));
    }
    function b(ce) {
      return n(ce).desaturate(100);
    }
    function A(ce, ye) {
      ye = ye === 0 ? 0 : ye || 10;
      var Z = n(ce).toHsl();
      return ((Z.l += ye / 100), (Z.l = L(Z.l)), n(Z));
    }
    function y(ce, ye) {
      ye = ye === 0 ? 0 : ye || 10;
      var Z = n(ce).toRgb();
      return (
        (Z.r = Math.max(0, Math.min(255, Z.r - Math.round(255 * -(ye / 100))))),
        (Z.g = Math.max(0, Math.min(255, Z.g - Math.round(255 * -(ye / 100))))),
        (Z.b = Math.max(0, Math.min(255, Z.b - Math.round(255 * -(ye / 100))))),
        n(Z)
      );
    }
    function E(ce, ye) {
      ye = ye === 0 ? 0 : ye || 10;
      var Z = n(ce).toHsl();
      return ((Z.l -= ye / 100), (Z.l = L(Z.l)), n(Z));
    }
    function v(ce, ye) {
      var Z = n(ce).toHsl(),
        oe = (Z.h + ye) % 360;
      return ((Z.h = oe < 0 ? 360 + oe : oe), n(Z));
    }
    function C(ce) {
      var ye = n(ce).toHsl();
      return ((ye.h = (ye.h + 180) % 360), n(ye));
    }
    function x(ce, ye) {
      if (isNaN(ye) || ye <= 0) throw new Error("Argument to polyad must be a positive number");
      for (var Z = n(ce).toHsl(), oe = [n(ce)], ue = 360 / ye, he = 1; he < ye; he++)
        oe.push(n({ h: (Z.h + he * ue) % 360, s: Z.s, l: Z.l }));
      return oe;
    }
    function k(ce) {
      var ye = n(ce).toHsl(),
        Z = ye.h;
      return [n(ce), n({ h: (Z + 72) % 360, s: ye.s, l: ye.l }), n({ h: (Z + 216) % 360, s: ye.s, l: ye.l })];
    }
    function R(ce, ye, Z) {
      ((ye = ye || 6), (Z = Z || 30));
      var oe = n(ce).toHsl(),
        ue = 360 / Z,
        he = [n(ce)];
      for (oe.h = (oe.h - ((ue * ye) >> 1) + 720) % 360; --ye; ) ((oe.h = (oe.h + ue) % 360), he.push(n(oe)));
      return he;
    }
    function P(ce, ye) {
      ye = ye || 6;
      for (var Z = n(ce).toHsv(), oe = Z.h, ue = Z.s, he = Z.v, se = [], fe = 1 / ye; ye--; )
        (se.push(n({ h: oe, s: ue, v: he })), (he = (he + fe) % 1));
      return se;
    }
    ((n.mix = function (ce, ye, Z) {
      Z = Z === 0 ? 0 : Z || 50;
      var oe = n(ce).toRgb(),
        ue = n(ye).toRgb(),
        he = Z / 100,
        se = {
          r: (ue.r - oe.r) * he + oe.r,
          g: (ue.g - oe.g) * he + oe.g,
          b: (ue.b - oe.b) * he + oe.b,
          a: (ue.a - oe.a) * he + oe.a,
        };
      return n(se);
    }),
      (n.readability = function (ce, ye) {
        var Z = n(ce),
          oe = n(ye);
        return (
          (Math.max(Z.getLuminance(), oe.getLuminance()) + 0.05) /
          (Math.min(Z.getLuminance(), oe.getLuminance()) + 0.05)
        );
      }),
      (n.isReadable = function (ce, ye, Z) {
        var oe = n.readability(ce, ye),
          ue,
          he;
        switch (((he = !1), (ue = de(Z)), ue.level + ue.size)) {
          case "AAsmall":
          case "AAAlarge":
            he = oe >= 4.5;
            break;
          case "AAlarge":
            he = oe >= 3;
            break;
          case "AAAsmall":
            he = oe >= 7;
            break;
        }
        return he;
      }),
      (n.mostReadable = function (ce, ye, Z) {
        var oe = null,
          ue = 0,
          he,
          se,
          fe,
          ge;
        ((Z = Z || {}), (se = Z.includeFallbackColors), (fe = Z.level), (ge = Z.size));
        for (var V = 0; V < ye.length; V++) ((he = n.readability(ce, ye[V])), he > ue && ((ue = he), (oe = n(ye[V]))));
        return n.isReadable(ce, oe, { level: fe, size: ge }) || !se
          ? oe
          : ((Z.includeFallbackColors = !1), n.mostReadable(ce, ["#fff", "#000"], Z));
      }));
    var D = (n.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32",
      }),
      O = (n.hexNames = N(D));
    function N(ce) {
      var ye = {};
      for (var Z in ce) ce.hasOwnProperty(Z) && (ye[ce[Z]] = Z);
      return ye;
    }
    function F(ce) {
      return ((ce = parseFloat(ce)), (isNaN(ce) || ce < 0 || ce > 1) && (ce = 1), ce);
    }
    function B(ce, ye) {
      Q(ce) && (ce = "100%");
      var Z = K(ce);
      return (
        (ce = Math.min(ye, Math.max(0, parseFloat(ce)))),
        Z && (ce = parseInt(ce * ye, 10) / 100),
        Math.abs(ce - ye) < 1e-6 ? 1 : (ce % ye) / parseFloat(ye)
      );
    }
    function L(ce) {
      return Math.min(1, Math.max(0, ce));
    }
    function G(ce) {
      return parseInt(ce, 16);
    }
    function Q(ce) {
      return typeof ce == "string" && ce.indexOf(".") != -1 && parseFloat(ce) === 1;
    }
    function K(ce) {
      return typeof ce == "string" && ce.indexOf("%") != -1;
    }
    function H(ce) {
      return ce.length == 1 ? "0" + ce : "" + ce;
    }
    function U(ce) {
      return (ce <= 1 && (ce = ce * 100 + "%"), ce);
    }
    function Y(ce) {
      return Math.round(parseFloat(ce) * 255).toString(16);
    }
    function X(ce) {
      return G(ce) / 255;
    }
    var J = (function () {
      var ce = "[-\\+]?\\d+%?",
        ye = "[-\\+]?\\d*\\.\\d+%?",
        Z = "(?:" + ye + ")|(?:" + ce + ")",
        oe = "[\\s|\\(]+(" + Z + ")[,|\\s]+(" + Z + ")[,|\\s]+(" + Z + ")\\s*\\)?",
        ue = "[\\s|\\(]+(" + Z + ")[,|\\s]+(" + Z + ")[,|\\s]+(" + Z + ")[,|\\s]+(" + Z + ")\\s*\\)?";
      return {
        CSS_UNIT: new RegExp(Z),
        rgb: new RegExp("rgb" + oe),
        rgba: new RegExp("rgba" + ue),
        hsl: new RegExp("hsl" + oe),
        hsla: new RegExp("hsla" + ue),
        hsv: new RegExp("hsv" + oe),
        hsva: new RegExp("hsva" + ue),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      };
    })();
    function q(ce) {
      return !!J.CSS_UNIT.exec(ce);
    }
    function ne(ce) {
      ce = ce.replace(e, "").replace(r, "").toLowerCase();
      var ye = !1;
      if (D[ce]) ((ce = D[ce]), (ye = !0));
      else if (ce == "transparent") return { r: 0, g: 0, b: 0, a: 0, format: "name" };
      var Z;
      return (Z = J.rgb.exec(ce))
        ? { r: Z[1], g: Z[2], b: Z[3] }
        : (Z = J.rgba.exec(ce))
          ? { r: Z[1], g: Z[2], b: Z[3], a: Z[4] }
          : (Z = J.hsl.exec(ce))
            ? { h: Z[1], s: Z[2], l: Z[3] }
            : (Z = J.hsla.exec(ce))
              ? { h: Z[1], s: Z[2], l: Z[3], a: Z[4] }
              : (Z = J.hsv.exec(ce))
                ? { h: Z[1], s: Z[2], v: Z[3] }
                : (Z = J.hsva.exec(ce))
                  ? { h: Z[1], s: Z[2], v: Z[3], a: Z[4] }
                  : (Z = J.hex8.exec(ce))
                    ? { r: G(Z[1]), g: G(Z[2]), b: G(Z[3]), a: X(Z[4]), format: ye ? "name" : "hex8" }
                    : (Z = J.hex6.exec(ce))
                      ? { r: G(Z[1]), g: G(Z[2]), b: G(Z[3]), format: ye ? "name" : "hex" }
                      : (Z = J.hex4.exec(ce))
                        ? {
                            r: G(Z[1] + "" + Z[1]),
                            g: G(Z[2] + "" + Z[2]),
                            b: G(Z[3] + "" + Z[3]),
                            a: X(Z[4] + "" + Z[4]),
                            format: ye ? "name" : "hex8",
                          }
                        : (Z = J.hex3.exec(ce))
                          ? {
                              r: G(Z[1] + "" + Z[1]),
                              g: G(Z[2] + "" + Z[2]),
                              b: G(Z[3] + "" + Z[3]),
                              format: ye ? "name" : "hex",
                            }
                          : !1;
    }
    function de(ce) {
      var ye, Z;
      return (
        (ce = ce || { level: "AA", size: "small" }),
        (ye = (ce.level || "AA").toUpperCase()),
        (Z = (ce.size || "small").toLowerCase()),
        ye !== "AA" && ye !== "AAA" && (ye = "AA"),
        Z !== "small" && Z !== "large" && (Z = "small"),
        { level: ye, size: Z }
      );
    }
    return n;
  });
});