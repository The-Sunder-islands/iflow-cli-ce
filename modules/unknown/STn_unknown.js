/**
 * @module STn
 * @category unknown
 * @label unknown
 * @position 1115 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (STn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var STn = T((_Ze) => {
  var CTn = XWt(),
    axs = bZe();
  _Ze.parser = function (t, e, r) {
    var n = { rule: u, leftAssociative: c, rightAssociative: m },
      o = new tzt(r.map(a)),
      s = CTn.firstOf(t, e);
    function a(p) {
      return { name: p.name, rule: uxs(p.ruleBuilder.bind(null, n)) };
    }
    function u() {
      return d(o);
    }
    function c(p) {
      return d(o.untilExclusive(p));
    }
    function m(p) {
      return d(o.untilInclusive(p));
    }
    function d(p) {
      return f.bind(null, p);
    }
    function f(p, h) {
      var g = s(h);
      return g.isSuccess() ? p.apply(g) : g;
    }
    return n;
  };
  function tzt(t) {
    function e(a) {
      return new tzt(t.slice(0, n().indexOf(a)));
    }
    function r(a) {
      return new tzt(t.slice(0, n().indexOf(a) + 1));
    }
    function n() {
      return t.map(function (a) {
        return a.name;
      });
    }
    function o(a) {
      for (var u, c; ; )
        if (((u = s(a.remaining())), u.isSuccess()))
          ((c = a.source().to(u.source())), (a = axs.success(u.value()(a.value(), c), u.remaining(), c)));
        else return u.isFailure() ? a : u;
    }
    function s(a) {
      return CTn.firstOf(
        "infix",
        t.map(function (u) {
          return u.rule;
        }),
      )(a);
    }
    return { apply: o, untilExclusive: e, untilInclusive: r };
  }
  _Ze.infix = function (t, e) {
    function r(n) {
      return _Ze.infix(t, function (o) {
        var s = e(o);
        return function (a) {
          var u = s(a);
          return u.map(function (c) {
            return function (m, d) {
              return n(m, c, d);
            };
          });
        };
      });
    }
    return { name: t, ruleBuilder: e, map: r };
  };
  var uxs = function (t) {
    var e;
    return function (r) {
      return (e || (e = t()), e(r));
    };
  };
});