/**
 * @module Xqn
 * @category utils/oop
 * @label oop
 * @position 1463 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Xqn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Xqn = T((cyc, _nt) => {
  var jp = (function (t) {
    "use strict";
    var e = 1e7,
      r = 7,
      n = 9007199254740992,
      o = p(n),
      s = "0123456789abcdefghijklmnopqrstuvwxyz",
      a = typeof BigInt == "function";
    function u(_e, Ie, ke, $e) {
      return typeof _e > "u" ? u[0] : typeof Ie < "u" ? (+Ie == 10 && !ke ? Ze(_e) : V(_e, Ie, ke, $e)) : Ze(_e);
    }
    function c(_e, Ie) {
      ((this.value = _e), (this.sign = Ie), (this.isSmall = !1));
    }
    c.prototype = Object.create(u.prototype);
    function m(_e) {
      ((this.value = _e), (this.sign = _e < 0), (this.isSmall = !0));
    }
    m.prototype = Object.create(u.prototype);
    function d(_e) {
      this.value = _e;
    }
    d.prototype = Object.create(u.prototype);
    function f(_e) {
      return -n < _e && _e < n;
    }
    function p(_e) {
      return _e < 1e7
        ? [_e]
        : _e < 1e14
          ? [_e % 1e7, Math.floor(_e / 1e7)]
          : [_e % 1e7, Math.floor(_e / 1e7) % 1e7, Math.floor(_e / 1e14)];
    }
    function h(_e) {
      g(_e);
      var Ie = _e.length;
      if (Ie < 4 && H(_e, o) < 0)
        switch (Ie) {
          case 0:
            return 0;
          case 1:
            return _e[0];
          case 2:
            return _e[0] + _e[1] * e;
          default:
            return _e[0] + (_e[1] + _e[2] * e) * e;
        }
      return _e;
    }
    function g(_e) {
      for (var Ie = _e.length; _e[--Ie] === 0; );
      _e.length = Ie + 1;
    }
    function b(_e) {
      for (var Ie = new Array(_e), ke = -1; ++ke < _e; ) Ie[ke] = 0;
      return Ie;
    }
    function A(_e) {
      return _e > 0 ? Math.floor(_e) : Math.ceil(_e);
    }
    function y(_e, Ie) {
      var ke = _e.length,
        $e = Ie.length,
        Le = new Array(ke),
        Fe = 0,
        je = e,
        He,
        mt;
      for (mt = 0; mt < $e; mt++) ((He = _e[mt] + Ie[mt] + Fe), (Fe = He >= je ? 1 : 0), (Le[mt] = He - Fe * je));
      for (; mt < ke; ) ((He = _e[mt] + Fe), (Fe = He === je ? 1 : 0), (Le[mt++] = He - Fe * je));
      return (Fe > 0 && Le.push(Fe), Le);
    }
    function E(_e, Ie) {
      return _e.length >= Ie.length ? y(_e, Ie) : y(Ie, _e);
    }
    function v(_e, Ie) {
      var ke = _e.length,
        $e = new Array(ke),
        Le = e,
        Fe,
        je;
      for (je = 0; je < ke; je++)
        ((Fe = _e[je] - Le + Ie), (Ie = Math.floor(Fe / Le)), ($e[je] = Fe - Ie * Le), (Ie += 1));
      for (; Ie > 0; ) (($e[je++] = Ie % Le), (Ie = Math.floor(Ie / Le)));
      return $e;
    }
    ((c.prototype.add = function (_e) {
      var Ie = Ze(_e);
      if (this.sign !== Ie.sign) return this.subtract(Ie.negate());
      var ke = this.value,
        $e = Ie.value;
      return Ie.isSmall ? new c(v(ke, Math.abs($e)), this.sign) : new c(E(ke, $e), this.sign);
    }),
      (c.prototype.plus = c.prototype.add),
      (m.prototype.add = function (_e) {
        var Ie = Ze(_e),
          ke = this.value;
        if (ke < 0 !== Ie.sign) return this.subtract(Ie.negate());
        var $e = Ie.value;
        if (Ie.isSmall) {
          if (f(ke + $e)) return new m(ke + $e);
          $e = p(Math.abs($e));
        }
        return new c(v($e, Math.abs(ke)), ke < 0);
      }),
      (m.prototype.plus = m.prototype.add),
      (d.prototype.add = function (_e) {
        return new d(this.value + Ze(_e).value);
      }),
      (d.prototype.plus = d.prototype.add));
    function C(_e, Ie) {
      var ke = _e.length,
        $e = Ie.length,
        Le = new Array(ke),
        Fe = 0,
        je = e,
        He,
        mt;
      for (He = 0; He < $e; He++)
        ((mt = _e[He] - Fe - Ie[He]), mt < 0 ? ((mt += je), (Fe = 1)) : (Fe = 0), (Le[He] = mt));
      for (He = $e; He < ke; He++) {
        if (((mt = _e[He] - Fe), mt < 0)) mt += je;
        else {
          Le[He++] = mt;
          break;
        }
        Le[He] = mt;
      }
      for (; He < ke; He++) Le[He] = _e[He];
      return (g(Le), Le);
    }
    function x(_e, Ie, ke) {
      var $e;
      return (
        H(_e, Ie) >= 0 ? ($e = C(_e, Ie)) : (($e = C(Ie, _e)), (ke = !ke)),
        ($e = h($e)),
        typeof $e == "number" ? (ke && ($e = -$e), new m($e)) : new c($e, ke)
      );
    }
    function k(_e, Ie, ke) {
      var $e = _e.length,
        Le = new Array($e),
        Fe = -Ie,
        je = e,
        He,
        mt;
      for (He = 0; He < $e; He++)
        ((mt = _e[He] + Fe), (Fe = Math.floor(mt / je)), (mt %= je), (Le[He] = mt < 0 ? mt + je : mt));
      return ((Le = h(Le)), typeof Le == "number" ? (ke && (Le = -Le), new m(Le)) : new c(Le, ke));
    }
    ((c.prototype.subtract = function (_e) {
      var Ie = Ze(_e);
      if (this.sign !== Ie.sign) return this.add(Ie.negate());
      var ke = this.value,
        $e = Ie.value;
      return Ie.isSmall ? k(ke, Math.abs($e), this.sign) : x(ke, $e, this.sign);
    }),
      (c.prototype.minus = c.prototype.subtract),
      (m.prototype.subtract = function (_e) {
        var Ie = Ze(_e),
          ke = this.value;
        if (ke < 0 !== Ie.sign) return this.add(Ie.negate());
        var $e = Ie.value;
        return Ie.isSmall ? new m(ke - $e) : k($e, Math.abs(ke), ke >= 0);
      }),
      (m.prototype.minus = m.prototype.subtract),
      (d.prototype.subtract = function (_e) {
        return new d(this.value - Ze(_e).value);
      }),
      (d.prototype.minus = d.prototype.subtract),
      (c.prototype.negate = function () {
        return new c(this.value, !this.sign);
      }),
      (m.prototype.negate = function () {
        var _e = this.sign,
          Ie = new m(-this.value);
        return ((Ie.sign = !_e), Ie);
      }),
      (d.prototype.negate = function () {
        return new d(-this.value);
      }),
      (c.prototype.abs = function () {
        return new c(this.value, !1);
      }),
      (m.prototype.abs = function () {
        return new m(Math.abs(this.value));
      }),
      (d.prototype.abs = function () {
        return new d(this.value >= 0 ? this.value : -this.value);
      }));
    function R(_e, Ie) {
      var ke = _e.length,
        $e = Ie.length,
        Le = ke + $e,
        Fe = b(Le),
        je = e,
        He,
        mt,
        kt,
        $t,
        we;
      for (kt = 0; kt < ke; ++kt) {
        $t = _e[kt];
        for (var Te = 0; Te < $e; ++Te)
          ((we = Ie[Te]),
            (He = $t * we + Fe[kt + Te]),
            (mt = Math.floor(He / je)),
            (Fe[kt + Te] = He - mt * je),
            (Fe[kt + Te + 1] += mt));
      }
      return (g(Fe), Fe);
    }
    function P(_e, Ie) {
      var ke = _e.length,
        $e = new Array(ke),
        Le = e,
        Fe = 0,
        je,
        He;
      for (He = 0; He < ke; He++) ((je = _e[He] * Ie + Fe), (Fe = Math.floor(je / Le)), ($e[He] = je - Fe * Le));
      for (; Fe > 0; ) (($e[He++] = Fe % Le), (Fe = Math.floor(Fe / Le)));
      return $e;
    }
    function D(_e, Ie) {
      for (var ke = []; Ie-- > 0; ) ke.push(0);
      return ke.concat(_e);
    }
    function O(_e, Ie) {
      var ke = Math.max(_e.length, Ie.length);
      if (ke <= 30) return R(_e, Ie);
      ke = Math.ceil(ke / 2);
      var $e = _e.slice(ke),
        Le = _e.slice(0, ke),
        Fe = Ie.slice(ke),
        je = Ie.slice(0, ke),
        He = O(Le, je),
        mt = O($e, Fe),
        kt = O(E(Le, $e), E(je, Fe)),
        $t = E(E(He, D(C(C(kt, He), mt), ke)), D(mt, 2 * ke));
      return (g($t), $t);
    }
    function N(_e, Ie) {
      return -0.012 * _e - 0.012 * Ie + 15e-6 * _e * Ie > 0;
    }
    ((c.prototype.multiply = function (_e) {
      var Ie = Ze(_e),
        ke = this.value,
        $e = Ie.value,
        Le = this.sign !== Ie.sign,
        Fe;
      if (Ie.isSmall) {
        if ($e === 0) return u[0];
        if ($e === 1) return this;
        if ($e === -1) return this.negate();
        if (((Fe = Math.abs($e)), Fe < e)) return new c(P(ke, Fe), Le);
        $e = p(Fe);
      }
      return N(ke.length, $e.length) ? new c(O(ke, $e), Le) : new c(R(ke, $e), Le);
    }),
      (c.prototype.times = c.prototype.multiply));
    function F(_e, Ie, ke) {
      return _e < e ? new c(P(Ie, _e), ke) : new c(R(Ie, p(_e)), ke);
    }
    ((m.prototype._multiplyBySmall = function (_e) {
      return f(_e.value * this.value)
        ? new m(_e.value * this.value)
        : F(Math.abs(_e.value), p(Math.abs(this.value)), this.sign !== _e.sign);
    }),
      (c.prototype._multiplyBySmall = function (_e) {
        return _e.value === 0
          ? u[0]
          : _e.value === 1
            ? this
            : _e.value === -1
              ? this.negate()
              : F(Math.abs(_e.value), this.value, this.sign !== _e.sign);
      }),
      (m.prototype.multiply = function (_e) {
        return Ze(_e)._multiplyBySmall(this);
      }),
      (m.prototype.times = m.prototype.multiply),
      (d.prototype.multiply = function (_e) {
        return new d(this.value * Ze(_e).value);
      }),
      (d.prototype.times = d.prototype.multiply));
    function B(_e) {
      var Ie = _e.length,
        ke = b(Ie + Ie),
        $e = e,
        Le,
        Fe,
        je,
        He,
        mt;
      for (je = 0; je < Ie; je++) {
        ((He = _e[je]), (Fe = 0 - He * He));
        for (var kt = je; kt < Ie; kt++)
          ((mt = _e[kt]),
            (Le = 2 * (He * mt) + ke[je + kt] + Fe),
            (Fe = Math.floor(Le / $e)),
            (ke[je + kt] = Le - Fe * $e));
        ke[je + Ie] = Fe;
      }
      return (g(ke), ke);
    }
    ((c.prototype.square = function () {
      return new c(B(this.value), !1);
    }),
      (m.prototype.square = function () {
        var _e = this.value * this.value;
        return f(_e) ? new m(_e) : new c(B(p(Math.abs(this.value))), !1);
      }),
      (d.prototype.square = function (_e) {
        return new d(this.value * this.value);
      }));
    function L(_e, Ie) {
      var ke = _e.length,
        $e = Ie.length,
        Le = e,
        Fe = b(Ie.length),
        je = Ie[$e - 1],
        He = Math.ceil(Le / (2 * je)),
        mt = P(_e, He),
        kt = P(Ie, He),
        $t,
        we,
        Te,
        Pe,
        tt,
        Je,
        ze;
      for (mt.length <= ke && mt.push(0), kt.push(0), je = kt[$e - 1], we = ke - $e; we >= 0; we--) {
        for (
          $t = Le - 1,
            mt[we + $e] !== je && ($t = Math.floor((mt[we + $e] * Le + mt[we + $e - 1]) / je)),
            Te = 0,
            Pe = 0,
            Je = kt.length,
            tt = 0;
          tt < Je;
          tt++
        )
          ((Te += $t * kt[tt]),
            (ze = Math.floor(Te / Le)),
            (Pe += mt[we + tt] - (Te - ze * Le)),
            (Te = ze),
            Pe < 0 ? ((mt[we + tt] = Pe + Le), (Pe = -1)) : ((mt[we + tt] = Pe), (Pe = 0)));
        for (; Pe !== 0; ) {
          for ($t -= 1, Te = 0, tt = 0; tt < Je; tt++)
            ((Te += mt[we + tt] - Le + kt[tt]),
              Te < 0 ? ((mt[we + tt] = Te + Le), (Te = 0)) : ((mt[we + tt] = Te), (Te = 1)));
          Pe += Te;
        }
        Fe[we] = $t;
      }
      return ((mt = Q(mt, He)[0]), [h(Fe), h(mt)]);
    }
    function G(_e, Ie) {
      for (var ke = _e.length, $e = Ie.length, Le = [], Fe = [], je = e, He, mt, kt, $t, we; ke; ) {
        if ((Fe.unshift(_e[--ke]), g(Fe), H(Fe, Ie) < 0)) {
          Le.push(0);
          continue;
        }
        ((mt = Fe.length),
          (kt = Fe[mt - 1] * je + Fe[mt - 2]),
          ($t = Ie[$e - 1] * je + Ie[$e - 2]),
          mt > $e && (kt = (kt + 1) * je),
          (He = Math.ceil(kt / $t)));
        do {
          if (((we = P(Ie, He)), H(we, Fe) <= 0)) break;
          He--;
        } while (He);
        (Le.push(He), (Fe = C(Fe, we)));
      }
      return (Le.reverse(), [h(Le), h(Fe)]);
    }
    function Q(_e, Ie) {
      var ke = _e.length,
        $e = b(ke),
        Le = e,
        Fe,
        je,
        He,
        mt;
      for (He = 0, Fe = ke - 1; Fe >= 0; --Fe)
        ((mt = He * Le + _e[Fe]), (je = A(mt / Ie)), (He = mt - je * Ie), ($e[Fe] = je | 0));
      return [$e, He | 0];
    }
    function K(_e, Ie) {
      var ke,
        $e = Ze(Ie);
      if (a) return [new d(_e.value / $e.value), new d(_e.value % $e.value)];
      var Le = _e.value,
        Fe = $e.value,
        je;
      if (Fe === 0) throw new Error("Cannot divide by zero");
      if (_e.isSmall) return $e.isSmall ? [new m(A(Le / Fe)), new m(Le % Fe)] : [u[0], _e];
      if ($e.isSmall) {
        if (Fe === 1) return [_e, u[0]];
        if (Fe == -1) return [_e.negate(), u[0]];
        var He = Math.abs(Fe);
        if (He < e) {
          ((ke = Q(Le, He)), (je = h(ke[0])));
          var mt = ke[1];
          return (
            _e.sign && (mt = -mt),
            typeof je == "number"
              ? (_e.sign !== $e.sign && (je = -je), [new m(je), new m(mt)])
              : [new c(je, _e.sign !== $e.sign), new m(mt)]
          );
        }
        Fe = p(He);
      }
      var kt = H(Le, Fe);
      if (kt === -1) return [u[0], _e];
      if (kt === 0) return [u[_e.sign === $e.sign ? 1 : -1], u[0]];
      (Le.length + Fe.length <= 200 ? (ke = L(Le, Fe)) : (ke = G(Le, Fe)), (je = ke[0]));
      var $t = _e.sign !== $e.sign,
        we = ke[1],
        Te = _e.sign;
      return (
        typeof je == "number" ? ($t && (je = -je), (je = new m(je))) : (je = new c(je, $t)),
        typeof we == "number" ? (Te && (we = -we), (we = new m(we))) : (we = new c(we, Te)),
        [je, we]
      );
    }
    ((c.prototype.divmod = function (_e) {
      var Ie = K(this, _e);
      return { quotient: Ie[0], remainder: Ie[1] };
    }),
      (d.prototype.divmod = m.prototype.divmod = c.prototype.divmod),
      (c.prototype.divide = function (_e) {
        return K(this, _e)[0];
      }),
      (d.prototype.over = d.prototype.divide =
        function (_e) {
          return new d(this.value / Ze(_e).value);
        }),
      (m.prototype.over = m.prototype.divide = c.prototype.over = c.prototype.divide),
      (c.prototype.mod = function (_e) {
        return K(this, _e)[1];
      }),
      (d.prototype.mod = d.prototype.remainder =
        function (_e) {
          return new d(this.value % Ze(_e).value);
        }),
      (m.prototype.remainder = m.prototype.mod = c.prototype.remainder = c.prototype.mod),
      (c.prototype.pow = function (_e) {
        var Ie = Ze(_e),
          ke = this.value,
          $e = Ie.value,
          Le,
          Fe,
          je;
        if ($e === 0) return u[1];
        if (ke === 0) return u[0];
        if (ke === 1) return u[1];
        if (ke === -1) return Ie.isEven() ? u[1] : u[-1];
        if (Ie.sign) return u[0];
        if (!Ie.isSmall) throw new Error("The exponent " + Ie.toString() + " is too large.");
        if (this.isSmall && f((Le = Math.pow(ke, $e)))) return new m(A(Le));
        for (Fe = this, je = u[1]; $e & !0 && ((je = je.times(Fe)), --$e), $e !== 0; ) (($e /= 2), (Fe = Fe.square()));
        return je;
      }),
      (m.prototype.pow = c.prototype.pow),
      (d.prototype.pow = function (_e) {
        var Ie = Ze(_e),
          ke = this.value,
          $e = Ie.value,
          Le = BigInt(0),
          Fe = BigInt(1),
          je = BigInt(2);
        if ($e === Le) return u[1];
        if (ke === Le) return u[0];
        if (ke === Fe) return u[1];
        if (ke === BigInt(-1)) return Ie.isEven() ? u[1] : u[-1];
        if (Ie.isNegative()) return new d(Le);
        for (var He = this, mt = u[1]; ($e & Fe) === Fe && ((mt = mt.times(He)), --$e), $e !== Le; )
          (($e /= je), (He = He.square()));
        return mt;
      }),
      (c.prototype.modPow = function (_e, Ie) {
        if (((_e = Ze(_e)), (Ie = Ze(Ie)), Ie.isZero())) throw new Error("Cannot take modPow with modulus 0");
        var ke = u[1],
          $e = this.mod(Ie);
        for (_e.isNegative() && ((_e = _e.multiply(u[-1])), ($e = $e.modInv(Ie))); _e.isPositive(); ) {
          if ($e.isZero()) return u[0];
          (_e.isOdd() && (ke = ke.multiply($e).mod(Ie)), (_e = _e.divide(2)), ($e = $e.square().mod(Ie)));
        }
        return ke;
      }),
      (d.prototype.modPow = m.prototype.modPow = c.prototype.modPow));
    function H(_e, Ie) {
      if (_e.length !== Ie.length) return _e.length > Ie.length ? 1 : -1;
      for (var ke = _e.length - 1; ke >= 0; ke--) if (_e[ke] !== Ie[ke]) return _e[ke] > Ie[ke] ? 1 : -1;
      return 0;
    }
    ((c.prototype.compareAbs = function (_e) {
      var Ie = Ze(_e),
        ke = this.value,
        $e = Ie.value;
      return Ie.isSmall ? 1 : H(ke, $e);
    }),
      (m.prototype.compareAbs = function (_e) {
        var Ie = Ze(_e),
          ke = Math.abs(this.value),
          $e = Ie.value;
        return Ie.isSmall ? (($e = Math.abs($e)), ke === $e ? 0 : ke > $e ? 1 : -1) : -1;
      }),
      (d.prototype.compareAbs = function (_e) {
        var Ie = this.value,
          ke = Ze(_e).value;
        return ((Ie = Ie >= 0 ? Ie : -Ie), (ke = ke >= 0 ? ke : -ke), Ie === ke ? 0 : Ie > ke ? 1 : -1);
      }),
      (c.prototype.compare = function (_e) {
        if (_e === 1 / 0) return -1;
        if (_e === -1 / 0) return 1;
        var Ie = Ze(_e),
          ke = this.value,
          $e = Ie.value;
        return this.sign !== Ie.sign
          ? Ie.sign
            ? 1
            : -1
          : Ie.isSmall
            ? this.sign
              ? -1
              : 1
            : H(ke, $e) * (this.sign ? -1 : 1);
      }),
      (c.prototype.compareTo = c.prototype.compare),
      (m.prototype.compare = function (_e) {
        if (_e === 1 / 0) return -1;
        if (_e === -1 / 0) return 1;
        var Ie = Ze(_e),
          ke = this.value,
          $e = Ie.value;
        return Ie.isSmall
          ? ke == $e
            ? 0
            : ke > $e
              ? 1
              : -1
          : ke < 0 !== Ie.sign
            ? ke < 0
              ? -1
              : 1
            : ke < 0
              ? 1
              : -1;
      }),
      (m.prototype.compareTo = m.prototype.compare),
      (d.prototype.compare = function (_e) {
        if (_e === 1 / 0) return -1;
        if (_e === -1 / 0) return 1;
        var Ie = this.value,
          ke = Ze(_e).value;
        return Ie === ke ? 0 : Ie > ke ? 1 : -1;
      }),
      (d.prototype.compareTo = d.prototype.compare),
      (c.prototype.equals = function (_e) {
        return this.compare(_e) === 0;
      }),
      (d.prototype.eq = d.prototype.equals = m.prototype.eq = m.prototype.equals = c.prototype.eq = c.prototype.equals),
      (c.prototype.notEquals = function (_e) {
        return this.compare(_e) !== 0;
      }),
      (d.prototype.neq =
        d.prototype.notEquals =
        m.prototype.neq =
        m.prototype.notEquals =
        c.prototype.neq =
          c.prototype.notEquals),
      (c.prototype.greater = function (_e) {
        return this.compare(_e) > 0;
      }),
      (d.prototype.gt =
        d.prototype.greater =
        m.prototype.gt =
        m.prototype.greater =
        c.prototype.gt =
          c.prototype.greater),
      (c.prototype.lesser = function (_e) {
        return this.compare(_e) < 0;
      }),
      (d.prototype.lt = d.prototype.lesser = m.prototype.lt = m.prototype.lesser = c.prototype.lt = c.prototype.lesser),
      (c.prototype.greaterOrEquals = function (_e) {
        return this.compare(_e) >= 0;
      }),
      (d.prototype.geq =
        d.prototype.greaterOrEquals =
        m.prototype.geq =
        m.prototype.greaterOrEquals =
        c.prototype.geq =
          c.prototype.greaterOrEquals),
      (c.prototype.lesserOrEquals = function (_e) {
        return this.compare(_e) <= 0;
      }),
      (d.prototype.leq =
        d.prototype.lesserOrEquals =
        m.prototype.leq =
        m.prototype.lesserOrEquals =
        c.prototype.leq =
          c.prototype.lesserOrEquals),
      (c.prototype.isEven = function () {
        return (this.value[0] & 1) === 0;
      }),
      (m.prototype.isEven = function () {
        return (this.value & 1) === 0;
      }),
      (d.prototype.isEven = function () {
        return (this.value & BigInt(1)) === BigInt(0);
      }),
      (c.prototype.isOdd = function () {
        return (this.value[0] & 1) === 1;
      }),
      (m.prototype.isOdd = function () {
        return (this.value & 1) === 1;
      }),
      (d.prototype.isOdd = function () {
        return (this.value & BigInt(1)) === BigInt(1);
      }),
      (c.prototype.isPositive = function () {
        return !this.sign;
      }),
      (m.prototype.isPositive = function () {
        return this.value > 0;
      }),
      (d.prototype.isPositive = m.prototype.isPositive),
      (c.prototype.isNegative = function () {
        return this.sign;
      }),
      (m.prototype.isNegative = function () {
        return this.value < 0;
      }),
      (d.prototype.isNegative = m.prototype.isNegative),
      (c.prototype.isUnit = function () {
        return !1;
      }),
      (m.prototype.isUnit = function () {
        return Math.abs(this.value) === 1;
      }),
      (d.prototype.isUnit = function () {
        return this.abs().value === BigInt(1);
      }),
      (c.prototype.isZero = function () {
        return !1;
      }),
      (m.prototype.isZero = function () {
        return this.value === 0;
      }),
      (d.prototype.isZero = function () {
        return this.value === BigInt(0);
      }),
      (c.prototype.isDivisibleBy = function (_e) {
        var Ie = Ze(_e);
        return Ie.isZero() ? !1 : Ie.isUnit() ? !0 : Ie.compareAbs(2) === 0 ? this.isEven() : this.mod(Ie).isZero();
      }),
      (d.prototype.isDivisibleBy = m.prototype.isDivisibleBy = c.prototype.isDivisibleBy));
    function U(_e) {
      var Ie = _e.abs();
      if (Ie.isUnit()) return !1;
      if (Ie.equals(2) || Ie.equals(3) || Ie.equals(5)) return !0;
      if (Ie.isEven() || Ie.isDivisibleBy(3) || Ie.isDivisibleBy(5)) return !1;
      if (Ie.lesser(49)) return !0;
    }
    function Y(_e, Ie) {
      for (var ke = _e.prev(), $e = ke, Le = 0, Fe, je, He, mt; $e.isEven(); ) (($e = $e.divide(2)), Le++);
      e: for (He = 0; He < Ie.length; He++)
        if (!_e.lesser(Ie[He]) && ((mt = jp(Ie[He]).modPow($e, _e)), !(mt.isUnit() || mt.equals(ke)))) {
          for (Fe = Le - 1; Fe != 0; Fe--) {
            if (((mt = mt.square().mod(_e)), mt.isUnit())) return !1;
            if (mt.equals(ke)) continue e;
          }
          return !1;
        }
      return !0;
    }
    ((c.prototype.isPrime = function (_e) {
      var Ie = U(this);
      if (Ie !== t) return Ie;
      var ke = this.abs(),
        $e = ke.bitLength();
      if ($e <= 64) return Y(ke, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      for (
        var Le = Math.log(2) * $e.toJSNumber(), Fe = Math.ceil(_e === !0 ? 2 * Math.pow(Le, 2) : Le), je = [], He = 0;
        He < Fe;
        He++
      )
        je.push(jp(He + 2));
      return Y(ke, je);
    }),
      (d.prototype.isPrime = m.prototype.isPrime = c.prototype.isPrime),
      (c.prototype.isProbablePrime = function (_e, Ie) {
        var ke = U(this);
        if (ke !== t) return ke;
        for (var $e = this.abs(), Le = _e === t ? 5 : _e, Fe = [], je = 0; je < Le; je++)
          Fe.push(jp.randBetween(2, $e.minus(2), Ie));
        return Y($e, Fe);
      }),
      (d.prototype.isProbablePrime = m.prototype.isProbablePrime = c.prototype.isProbablePrime),
      (c.prototype.modInv = function (_e) {
        for (var Ie = jp.zero, ke = jp.one, $e = Ze(_e), Le = this.abs(), Fe, je, He; !Le.isZero(); )
          ((Fe = $e.divide(Le)),
            (je = Ie),
            (He = $e),
            (Ie = ke),
            ($e = Le),
            (ke = je.subtract(Fe.multiply(ke))),
            (Le = He.subtract(Fe.multiply(Le))));
        if (!$e.isUnit()) throw new Error(this.toString() + " and " + _e.toString() + " are not co-prime");
        return (Ie.compare(0) === -1 && (Ie = Ie.add(_e)), this.isNegative() ? Ie.negate() : Ie);
      }),
      (d.prototype.modInv = m.prototype.modInv = c.prototype.modInv),
      (c.prototype.next = function () {
        var _e = this.value;
        return this.sign ? k(_e, 1, this.sign) : new c(v(_e, 1), this.sign);
      }),
      (m.prototype.next = function () {
        var _e = this.value;
        return _e + 1 < n ? new m(_e + 1) : new c(o, !1);
      }),
      (d.prototype.next = function () {
        return new d(this.value + BigInt(1));
      }),
      (c.prototype.prev = function () {
        var _e = this.value;
        return this.sign ? new c(v(_e, 1), !0) : k(_e, 1, this.sign);
      }),
      (m.prototype.prev = function () {
        var _e = this.value;
        return _e - 1 > -n ? new m(_e - 1) : new c(o, !0);
      }),
      (d.prototype.prev = function () {
        return new d(this.value - BigInt(1));
      }));
    for (var X = [1]; 2 * X[X.length - 1] <= e; ) X.push(2 * X[X.length - 1]);
    var J = X.length,
      q = X[J - 1];
    function ne(_e) {
      return Math.abs(_e) <= e;
    }
    ((c.prototype.shiftLeft = function (_e) {
      var Ie = Ze(_e).toJSNumber();
      if (!ne(Ie)) throw new Error(String(Ie) + " is too large for shifting.");
      if (Ie < 0) return this.shiftRight(-Ie);
      var ke = this;
      if (ke.isZero()) return ke;
      for (; Ie >= J; ) ((ke = ke.multiply(q)), (Ie -= J - 1));
      return ke.multiply(X[Ie]);
    }),
      (d.prototype.shiftLeft = m.prototype.shiftLeft = c.prototype.shiftLeft),
      (c.prototype.shiftRight = function (_e) {
        var Ie,
          ke = Ze(_e).toJSNumber();
        if (!ne(ke)) throw new Error(String(ke) + " is too large for shifting.");
        if (ke < 0) return this.shiftLeft(-ke);
        for (var $e = this; ke >= J; ) {
          if ($e.isZero() || ($e.isNegative() && $e.isUnit())) return $e;
          ((Ie = K($e, q)), ($e = Ie[1].isNegative() ? Ie[0].prev() : Ie[0]), (ke -= J - 1));
        }
        return ((Ie = K($e, X[ke])), Ie[1].isNegative() ? Ie[0].prev() : Ie[0]);
      }),
      (d.prototype.shiftRight = m.prototype.shiftRight = c.prototype.shiftRight));
    function de(_e, Ie, ke) {
      Ie = Ze(Ie);
      for (
        var $e = _e.isNegative(),
          Le = Ie.isNegative(),
          Fe = $e ? _e.not() : _e,
          je = Le ? Ie.not() : Ie,
          He = 0,
          mt = 0,
          kt = null,
          $t = null,
          we = [];
        !Fe.isZero() || !je.isZero();
      )
        ((kt = K(Fe, q)),
          (He = kt[1].toJSNumber()),
          $e && (He = q - 1 - He),
          ($t = K(je, q)),
          (mt = $t[1].toJSNumber()),
          Le && (mt = q - 1 - mt),
          (Fe = kt[0]),
          (je = $t[0]),
          we.push(ke(He, mt)));
      for (var Te = ke($e ? 1 : 0, Le ? 1 : 0) !== 0 ? jp(-1) : jp(0), Pe = we.length - 1; Pe >= 0; Pe -= 1)
        Te = Te.multiply(q).add(jp(we[Pe]));
      return Te;
    }
    ((c.prototype.not = function () {
      return this.negate().prev();
    }),
      (d.prototype.not = m.prototype.not = c.prototype.not),
      (c.prototype.and = function (_e) {
        return de(this, _e, function (Ie, ke) {
          return Ie & ke;
        });
      }),
      (d.prototype.and = m.prototype.and = c.prototype.and),
      (c.prototype.or = function (_e) {
        return de(this, _e, function (Ie, ke) {
          return Ie | ke;
        });
      }),
      (d.prototype.or = m.prototype.or = c.prototype.or),
      (c.prototype.xor = function (_e) {
        return de(this, _e, function (Ie, ke) {
          return Ie ^ ke;
        });
      }),
      (d.prototype.xor = m.prototype.xor = c.prototype.xor));
    var ce = 1 << 30,
      ye = ((e & -e) * (e & -e)) | ce;
    function Z(_e) {
      var Ie = _e.value,
        ke = typeof Ie == "number" ? Ie | ce : typeof Ie == "bigint" ? Ie | BigInt(ce) : (Ie[0] + Ie[1] * e) | ye;
      return ke & -ke;
    }
    function oe(_e, Ie) {
      if (Ie.compareTo(_e) <= 0) {
        var ke = oe(_e, Ie.square(Ie)),
          $e = ke.p,
          Le = ke.e,
          Fe = $e.multiply(Ie);
        return Fe.compareTo(_e) <= 0 ? { p: Fe, e: Le * 2 + 1 } : { p: $e, e: Le * 2 };
      }
      return { p: jp(1), e: 0 };
    }
    ((c.prototype.bitLength = function () {
      var _e = this;
      return (
        _e.compareTo(jp(0)) < 0 && (_e = _e.negate().subtract(jp(1))),
        _e.compareTo(jp(0)) === 0 ? jp(0) : jp(oe(_e, jp(2)).e).add(jp(1))
      );
    }),
      (d.prototype.bitLength = m.prototype.bitLength = c.prototype.bitLength));
    function ue(_e, Ie) {
      return ((_e = Ze(_e)), (Ie = Ze(Ie)), _e.greater(Ie) ? _e : Ie);
    }
    function he(_e, Ie) {
      return ((_e = Ze(_e)), (Ie = Ze(Ie)), _e.lesser(Ie) ? _e : Ie);
    }
    function se(_e, Ie) {
      if (((_e = Ze(_e).abs()), (Ie = Ze(Ie).abs()), _e.equals(Ie))) return _e;
      if (_e.isZero()) return Ie;
      if (Ie.isZero()) return _e;
      for (var ke = u[1], $e, Le; _e.isEven() && Ie.isEven(); )
        (($e = he(Z(_e), Z(Ie))), (_e = _e.divide($e)), (Ie = Ie.divide($e)), (ke = ke.multiply($e)));
      for (; _e.isEven(); ) _e = _e.divide(Z(_e));
      do {
        for (; Ie.isEven(); ) Ie = Ie.divide(Z(Ie));
        (_e.greater(Ie) && ((Le = Ie), (Ie = _e), (_e = Le)), (Ie = Ie.subtract(_e)));
      } while (!Ie.isZero());
      return ke.isUnit() ? _e : _e.multiply(ke);
    }
    function fe(_e, Ie) {
      return ((_e = Ze(_e).abs()), (Ie = Ze(Ie).abs()), _e.divide(se(_e, Ie)).multiply(Ie));
    }
    function ge(_e, Ie, ke) {
      ((_e = Ze(_e)), (Ie = Ze(Ie)));
      var $e = ke || Math.random,
        Le = he(_e, Ie),
        Fe = ue(_e, Ie),
        je = Fe.subtract(Le).add(1);
      if (je.isSmall) return Le.add(Math.floor($e() * je));
      for (var He = pe(je, e).value, mt = [], kt = !0, $t = 0; $t < He.length; $t++) {
        var we = kt ? He[$t] + ($t + 1 < He.length ? He[$t + 1] / e : 0) : e,
          Te = A($e() * we);
        (mt.push(Te), Te < He[$t] && (kt = !1));
      }
      return Le.add(u.fromArray(mt, e, !1));
    }
    var V = function (_e, Ie, ke, $e) {
      ((ke = ke || s), (_e = String(_e)), $e || ((_e = _e.toLowerCase()), (ke = ke.toLowerCase())));
      var Le = _e.length,
        Fe,
        je = Math.abs(Ie),
        He = {};
      for (Fe = 0; Fe < ke.length; Fe++) He[ke[Fe]] = Fe;
      for (Fe = 0; Fe < Le; Fe++) {
        var mt = _e[Fe];
        if (mt !== "-" && mt in He && He[mt] >= je) {
          if (mt === "1" && je === 1) continue;
          throw new Error(mt + " is not a valid digit in base " + Ie + ".");
        }
      }
      Ie = Ze(Ie);
      var kt = [],
        $t = _e[0] === "-";
      for (Fe = $t ? 1 : 0; Fe < _e.length; Fe++) {
        var mt = _e[Fe];
        if (mt in He) kt.push(Ze(He[mt]));
        else if (mt === "<") {
          var we = Fe;
          do Fe++;
          while (_e[Fe] !== ">" && Fe < _e.length);
          kt.push(Ze(_e.slice(we + 1, Fe)));
        } else throw new Error(mt + " is not a valid character");
      }
      return ee(kt, Ie, $t);
    };
    function ee(_e, Ie, ke) {
      var $e = u[0],
        Le = u[1],
        Fe;
      for (Fe = _e.length - 1; Fe >= 0; Fe--) (($e = $e.add(_e[Fe].times(Le))), (Le = Le.times(Ie)));
      return ke ? $e.negate() : $e;
    }
    function Ce(_e, Ie) {
      return ((Ie = Ie || s), _e < Ie.length ? Ie[_e] : "<" + _e + ">");
    }
    function pe(_e, Ie) {
      if (((Ie = jp(Ie)), Ie.isZero())) {
        if (_e.isZero()) return { value: [0], isNegative: !1 };
        throw new Error("Cannot convert nonzero numbers to base 0.");
      }
      if (Ie.equals(-1)) {
        if (_e.isZero()) return { value: [0], isNegative: !1 };
        if (_e.isNegative())
          return {
            value: [].concat.apply([], Array.apply(null, Array(-_e.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
            isNegative: !1,
          };
        var ke = Array.apply(null, Array(_e.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
        return (ke.unshift([1]), { value: [].concat.apply([], ke), isNegative: !1 });
      }
      var $e = !1;
      if ((_e.isNegative() && Ie.isPositive() && (($e = !0), (_e = _e.abs())), Ie.isUnit()))
        return _e.isZero()
          ? { value: [0], isNegative: !1 }
          : { value: Array.apply(null, Array(_e.toJSNumber())).map(Number.prototype.valueOf, 1), isNegative: $e };
      for (var Le = [], Fe = _e, je; Fe.isNegative() || Fe.compareAbs(Ie) >= 0; ) {
        ((je = Fe.divmod(Ie)), (Fe = je.quotient));
        var He = je.remainder;
        (He.isNegative() && ((He = Ie.minus(He).abs()), (Fe = Fe.next())), Le.push(He.toJSNumber()));
      }
      return (Le.push(Fe.toJSNumber()), { value: Le.reverse(), isNegative: $e });
    }
    function be(_e, Ie, ke) {
      var $e = pe(_e, Ie);
      return (
        ($e.isNegative ? "-" : "") +
        $e.value
          .map(function (Le) {
            return Ce(Le, ke);
          })
          .join("")
      );
    }
    ((c.prototype.toArray = function (_e) {
      return pe(this, _e);
    }),
      (m.prototype.toArray = function (_e) {
        return pe(this, _e);
      }),
      (d.prototype.toArray = function (_e) {
        return pe(this, _e);
      }),
      (c.prototype.toString = function (_e, Ie) {
        if ((_e === t && (_e = 10), _e !== 10 || Ie)) return be(this, _e, Ie);
        for (var ke = this.value, $e = ke.length, Le = String(ke[--$e]), Fe = "0000000", je; --$e >= 0; )
          ((je = String(ke[$e])), (Le += Fe.slice(je.length) + je));
        var He = this.sign ? "-" : "";
        return He + Le;
      }),
      (m.prototype.toString = function (_e, Ie) {
        return (_e === t && (_e = 10), _e != 10 || Ie ? be(this, _e, Ie) : String(this.value));
      }),
      (d.prototype.toString = m.prototype.toString),
      (d.prototype.toJSON =
        c.prototype.toJSON =
        m.prototype.toJSON =
          function () {
            return this.toString();
          }),
      (c.prototype.valueOf = function () {
        return parseInt(this.toString(), 10);
      }),
      (c.prototype.toJSNumber = c.prototype.valueOf),
      (m.prototype.valueOf = function () {
        return this.value;
      }),
      (m.prototype.toJSNumber = m.prototype.valueOf),
      (d.prototype.valueOf = d.prototype.toJSNumber =
        function () {
          return parseInt(this.toString(), 10);
        }));
    function Ne(_e) {
      if (f(+_e)) {
        var Ie = +_e;
        if (Ie === A(Ie)) return a ? new d(BigInt(Ie)) : new m(Ie);
        throw new Error("Invalid integer: " + _e);
      }
      var ke = _e[0] === "-";
      ke && (_e = _e.slice(1));
      var $e = _e.split(/e/i);
      if ($e.length > 2) throw new Error("Invalid integer: " + $e.join("e"));
      if ($e.length === 2) {
        var Le = $e[1];
        if ((Le[0] === "+" && (Le = Le.slice(1)), (Le = +Le), Le !== A(Le) || !f(Le)))
          throw new Error("Invalid integer: " + Le + " is not a valid exponent.");
        var Fe = $e[0],
          je = Fe.indexOf(".");
        if ((je >= 0 && ((Le -= Fe.length - je - 1), (Fe = Fe.slice(0, je) + Fe.slice(je + 1))), Le < 0))
          throw new Error("Cannot include negative exponent part for integers");
        ((Fe += new Array(Le + 1).join("0")), (_e = Fe));
      }
      var He = /^([0-9][0-9]*)$/.test(_e);
      if (!He) throw new Error("Invalid integer: " + _e);
      if (a) return new d(BigInt(ke ? "-" + _e : _e));
      for (var mt = [], kt = _e.length, $t = r, we = kt - $t; kt > 0; )
        (mt.push(+_e.slice(we, kt)), (we -= $t), we < 0 && (we = 0), (kt -= $t));
      return (g(mt), new c(mt, ke));
    }
    function Ge(_e) {
      if (a) return new d(BigInt(_e));
      if (f(_e)) {
        if (_e !== A(_e)) throw new Error(_e + " is not an integer.");
        return new m(_e);
      }
      return Ne(_e.toString());
    }
    function Ze(_e) {
      return typeof _e == "number" ? Ge(_e) : typeof _e == "string" ? Ne(_e) : typeof _e == "bigint" ? new d(_e) : _e;
    }
    for (var Ye = 0; Ye < 1e3; Ye++) ((u[Ye] = Ze(Ye)), Ye > 0 && (u[-Ye] = Ze(-Ye)));
    return (
      (u.one = u[1]),
      (u.zero = u[0]),
      (u.minusOne = u[-1]),
      (u.max = ue),
      (u.min = he),
      (u.gcd = se),
      (u.lcm = fe),
      (u.isInstance = function (_e) {
        return _e instanceof c || _e instanceof m || _e instanceof d;
      }),
      (u.randBetween = ge),
      (u.fromArray = function (_e, Ie, ke) {
        return ee(_e.map(Ze), Ze(Ie || 10), ke);
      }),
      u
    );
  })();
  typeof _nt < "u" && _nt.hasOwnProperty("exports") && (_nt.exports = jp);
  typeof define == "function" &&
    define.amd &&
    define(function () {
      return jp;
    });
});