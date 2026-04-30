/**
 * @module XWt
 * @category unknown
 * @label unknown
 * @position 1112 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (XWt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var XWt = T(($c) => {
  var yZe = (d1(), bt(m1)),
    gTn = mTn(),
    RE = bZe(),
    bTn = JWt(),
    ixs = hTn();
  $c.token = function (t, e) {
    var r = e !== void 0;
    return function (n) {
      var o = n.head();
      if (o && o.name === t && (!r || o.value === e)) return RE.success(o.value, n.tail(), o.source);
      var s = yTn({ name: t, value: e });
      return _Tn(n, s);
    };
  };
  $c.tokenOfType = function (t) {
    return $c.token(t);
  };
  $c.firstOf = function (t, e) {
    return (
      yZe.isArray(e) || (e = Array.prototype.slice.call(arguments, 1)),
      function (r) {
        return (
          ixs
            .fromArray(e)
            .map(function (n) {
              return n(r);
            })
            .filter(function (n) {
              return n.isSuccess() || n.isError();
            })
            .first() || _Tn(r, t)
        );
      }
    );
  };
  $c.then = function (t, e) {
    return function (r) {
      var n = t(r);
      return (n.map || console.log(n), n.map(e));
    };
  };
  $c.sequence = function () {
    var t = Array.prototype.slice.call(arguments, 0),
      e = function (n) {
        var o = yZe.foldl(
            t,
            function (a, u) {
              var c = a.result,
                m = a.hasCut;
              if (!c.isSuccess()) return { result: c, hasCut: m };
              var d = u(c.remaining());
              if (d.isCut()) return { result: c, hasCut: !0 };
              if (d.isSuccess()) {
                var f;
                u.isCaptured ? (f = c.value().withValue(u, d.value())) : (f = c.value());
                var p = d.remaining(),
                  h = n.to(p);
                return { result: RE.success(f, p, h), hasCut: m };
              } else return m ? { result: RE.error(d.errors(), d.remaining()), hasCut: m } : { result: d, hasCut: m };
            },
            { result: RE.success(new Wye(), n), hasCut: !1 },
          ).result,
          s = n.to(o.remaining());
        return o.map(function (a) {
          return a.withValue($c.sequence.source, s);
        });
      };
    ((e.head = function () {
      var n = yZe.find(t, r);
      return $c.then(e, $c.sequence.extract(n));
    }),
      (e.map = function (n) {
        return $c.then(e, function (o) {
          return n.apply(this, o.toArray());
        });
      }));
    function r(n) {
      return n.isCaptured;
    }
    return e;
  };
  var Wye = function (t, e) {
    ((this._values = t || {}), (this._valuesArray = e || []));
  };
  Wye.prototype.withValue = function (t, e) {
    if (t.captureName && t.captureName in this._values)
      throw new Error('Cannot add second value for capture "' + t.captureName + '"');
    var r = yZe.clone(this._values);
    r[t.captureName] = e;
    var n = this._valuesArray.concat([e]);
    return new Wye(r, n);
  };
  Wye.prototype.get = function (t) {
    if (t.captureName in this._values) return this._values[t.captureName];
    throw new Error('No value for capture "' + t.captureName + '"');
  };
  Wye.prototype.toArray = function () {
    return this._valuesArray;
  };
  $c.sequence.capture = function (t, e) {
    var r = function () {
      return t.apply(this, arguments);
    };
    return ((r.captureName = e), (r.isCaptured = !0), r);
  };
  $c.sequence.extract = function (t) {
    return function (e) {
      return e.get(t);
    };
  };
  $c.sequence.applyValues = function (t) {
    var e = Array.prototype.slice.call(arguments, 1);
    return function (r) {
      var n = e.map(function (o) {
        return r.get(o);
      });
      return t.apply(this, n);
    };
  };
  $c.sequence.source = { captureName: "\u2603source\u2603" };
  $c.sequence.cut = function () {
    return function (t) {
      return RE.cut(t);
    };
  };
  $c.optional = function (t) {
    return function (e) {
      var r = t(e);
      return r.isSuccess() ? r.map(gTn.some) : r.isFailure() ? RE.success(gTn.none, e) : r;
    };
  };
  $c.zeroOrMoreWithSeparator = function (t, e) {
    return ATn(t, e, !1);
  };
  $c.oneOrMoreWithSeparator = function (t, e) {
    return ATn(t, e, !0);
  };
  var oxs = ($c.zeroOrMore = function (t) {
    return function (e) {
      for (var r = [], n; (n = t(e)) && n.isSuccess(); ) ((e = n.remaining()), r.push(n.value()));
      return n.isError() ? n : RE.success(r, e);
    };
  });
  $c.oneOrMore = function (t) {
    return $c.oneOrMoreWithSeparator(t, sxs);
  };
  function sxs(t) {
    return RE.success(null, t);
  }
  var ATn = function (t, e, r) {
    return function (n) {
      var o = t(n);
      if (o.isSuccess()) {
        var s = $c.sequence.capture(t, "main"),
          a = oxs($c.then($c.sequence(e, s), $c.sequence.extract(s))),
          u = a(o.remaining());
        return RE.success([o.value()].concat(u.value()), u.remaining());
      } else return r || o.isError() ? o : RE.success([], n);
    };
  };
  $c.leftAssociative = function (t, e, r) {
    var n;
    (r ? (n = [{ func: r, rule: e }]) : (n = e),
      (n = n.map(function (s) {
        return $c.then(s.rule, function (a) {
          return function (u, c) {
            return s.func(u, a, c);
          };
        });
      })));
    var o = $c.firstOf.apply(null, ["rules"].concat(n));
    return function (s) {
      var a = s,
        u = t(s);
      if (!u.isSuccess()) return u;
      for (var c = o(u.remaining()); c.isSuccess(); ) {
        var m = c.remaining(),
          d = a.to(c.remaining()),
          f = c.value();
        ((u = RE.success(f(u.value(), d), m, d)), (c = o(u.remaining())));
      }
      return c.isError() ? c : u;
    };
  };
  $c.leftAssociative.firstOf = function () {
    return Array.prototype.slice.call(arguments, 0);
  };
  $c.nonConsuming = function (t) {
    return function (e) {
      return t(e).changeRemaining(e);
    };
  };
  var yTn = function (t) {
    return t.value ? t.name + ' "' + t.value + '"' : t.name;
  };
  function _Tn(t, e) {
    var r,
      n = t.head();
    return (
      n
        ? (r = bTn.error({ expected: e, actual: yTn(n), location: n.source }))
        : (r = bTn.error({ expected: e, actual: "end of tokens" })),
      RE.failure([r], t)
    );
  }
});