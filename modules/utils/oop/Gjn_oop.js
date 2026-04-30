/**
 * @module Gjn
 * @category utils/oop
 * @label oop
 * @position 1403 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Gjn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Gjn = T((t6c, Qjn) => {
  Qjn.exports = iA;
  function iA(t) {
    if (!(this instanceof iA)) return new iA(t);
    this.value = t;
  }
  iA.prototype.get = function (t) {
    for (var e = this.value, r = 0; r < t.length; r++) {
      var n = t[r];
      if (!Object.hasOwnProperty.call(e, n)) {
        e = void 0;
        break;
      }
      e = e[n];
    }
    return e;
  };
  iA.prototype.set = function (t, e) {
    for (var r = this.value, n = 0; n < t.length - 1; n++) {
      var o = t[n];
      (Object.hasOwnProperty.call(r, o) || (r[o] = {}), (r = r[o]));
    }
    return ((r[t[n]] = e), e);
  };
  iA.prototype.map = function (t) {
    return $jn(this.value, t, !0);
  };
  iA.prototype.forEach = function (t) {
    return ((this.value = $jn(this.value, t, !1)), this.value);
  };
  iA.prototype.reduce = function (t, e) {
    var r = arguments.length === 1,
      n = r ? this.value : e;
    return (
      this.forEach(function (o) {
        (!this.isRoot || !r) && (n = t.call(this, n, o));
      }),
      n
    );
  };
  iA.prototype.deepEqual = function (t) {
    if (arguments.length !== 1) throw new Error("deepEqual requires exactly one object to compare against");
    var e = !0,
      r = t;
    return (
      this.forEach(function (n) {
        var o = function () {
          e = !1;
        }.bind(this);
        if (!this.isRoot) {
          if (typeof r != "object") return o();
          r = r[this.key];
        }
        var s = r;
        this.post(function () {
          r = s;
        });
        var a = function (f) {
          return Object.prototype.toString.call(f);
        };
        if (this.circular) iA(t).get(this.circular.path) !== s && o();
        else if (typeof s != typeof n) o();
        else if (s === null || n === null || s === void 0 || n === void 0) s !== n && o();
        else if (s.__proto__ !== n.__proto__) o();
        else if (s !== n) {
          if (typeof s == "function") s instanceof RegExp ? s.toString() != n.toString() && o() : s !== n && o();
          else if (typeof s == "object")
            if (a(n) === "[object Arguments]" || a(s) === "[object Arguments]") a(s) !== a(n) && o();
            else if (s instanceof Date || n instanceof Date)
              (!(s instanceof Date) || !(n instanceof Date) || s.getTime() !== n.getTime()) && o();
            else {
              var u = Object.keys(s),
                c = Object.keys(n);
              if (u.length !== c.length) return o();
              for (var m = 0; m < u.length; m++) {
                var d = u[m];
                Object.hasOwnProperty.call(n, d) || o();
              }
            }
        }
      }),
      e
    );
  };
  iA.prototype.paths = function () {
    var t = [];
    return (
      this.forEach(function (e) {
        t.push(this.path);
      }),
      t
    );
  };
  iA.prototype.nodes = function () {
    var t = [];
    return (
      this.forEach(function (e) {
        t.push(this.node);
      }),
      t
    );
  };
  iA.prototype.clone = function () {
    var t = [],
      e = [];
    return (function r(n) {
      for (var o = 0; o < t.length; o++) if (t[o] === n) return e[o];
      if (typeof n == "object" && n !== null) {
        var s = jjn(n);
        return (
          t.push(n),
          e.push(s),
          Object.keys(n).forEach(function (a) {
            s[a] = r(n[a]);
          }),
          t.pop(),
          e.pop(),
          s
        );
      } else return n;
    })(this.value);
  };
  function $jn(t, e, r) {
    var n = [],
      o = [],
      s = !0;
    return (function a(u) {
      var c = r ? jjn(u) : u,
        m = {},
        d = {
          node: c,
          node_: u,
          path: [].concat(n),
          parent: o.slice(-1)[0],
          key: n.slice(-1)[0],
          isRoot: n.length === 0,
          level: n.length,
          circular: null,
          update: function (g) {
            (d.isRoot || (d.parent.node[d.key] = g), (d.node = g));
          },
          delete: function () {
            delete d.parent.node[d.key];
          },
          remove: function () {
            Array.isArray(d.parent.node) ? d.parent.node.splice(d.key, 1) : delete d.parent.node[d.key];
          },
          before: function (g) {
            m.before = g;
          },
          after: function (g) {
            m.after = g;
          },
          pre: function (g) {
            m.pre = g;
          },
          post: function (g) {
            m.post = g;
          },
          stop: function () {
            s = !1;
          },
        };
      if (!s) return d;
      if (typeof c == "object" && c !== null) {
        d.isLeaf = Object.keys(c).length == 0;
        for (var f = 0; f < o.length; f++)
          if (o[f].node_ === u) {
            d.circular = o[f];
            break;
          }
      } else d.isLeaf = !0;
      ((d.notLeaf = !d.isLeaf), (d.notRoot = !d.isRoot));
      var p = e.call(d, d.node);
      if (
        (p !== void 0 && d.update && d.update(p),
        m.before && m.before.call(d, d.node),
        typeof d.node == "object" && d.node !== null && !d.circular)
      ) {
        o.push(d);
        var h = Object.keys(d.node);
        (h.forEach(function (g, b) {
          (n.push(g), m.pre && m.pre.call(d, d.node[g], g));
          var A = a(d.node[g]);
          (r && Object.hasOwnProperty.call(d.node, g) && (d.node[g] = A.node),
            (A.isLast = b == h.length - 1),
            (A.isFirst = b == 0),
            m.post && m.post.call(d, A),
            n.pop());
        }),
          o.pop());
      }
      return (m.after && m.after.call(d, d.node), d);
    })(t).node;
  }
  Object.keys(iA.prototype).forEach(function (t) {
    iA[t] = function (e) {
      var r = [].slice.call(arguments, 1),
        n = iA(e);
      return n[t].apply(n, r);
    };
  });
  function jjn(t) {
    if (typeof t == "object" && t !== null) {
      var e;
      return (
        Array.isArray(t)
          ? (e = [])
          : t instanceof Date
            ? (e = new Date(t))
            : t instanceof Boolean
              ? (e = new Boolean(t))
              : t instanceof Number
                ? (e = new Number(t))
                : t instanceof String
                  ? (e = new String(t))
                  : (e = Object.create(Object.getPrototypeOf(t))),
        Object.keys(t).forEach(function (r) {
          e[r] = t[r];
        }),
        e
      );
    } else return t;
  }
});