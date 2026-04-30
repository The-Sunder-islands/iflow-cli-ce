/**
 * @module Tye
 * @category utils/oop
 * @label oop
 * @position 1056 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Tye) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Tye = T((QSn, GSn) => {
  (function () {
    var t,
      e,
      r,
      n,
      o,
      s,
      a,
      u = function (m, d) {
        for (var f in d) c.call(d, f) && (m[f] = d[f]);
        function p() {
          this.constructor = m;
        }
        return ((p.prototype = d.prototype), (m.prototype = new p()), (m.__super__ = d.prototype), m);
      },
      c = {}.hasOwnProperty;
    ((a = zk()),
      (s = a.isObject),
      (o = a.isFunction),
      (n = a.getValue),
      (r = B2()),
      (t = vWt()),
      (GSn.exports = e =
        (function (m) {
          u(d, m);
          function d(f, p, h) {
            if ((d.__super__.constructor.call(this, f), p == null))
              throw new Error("Missing element name. " + this.debugInfo());
            ((this.name = this.stringify.eleName(p)),
              (this.attributes = {}),
              h != null && this.attribute(h),
              f.isDocument && ((this.isRoot = !0), (this.documentObject = f), (f.rootObject = this)));
          }
          return (
            (d.prototype.clone = function () {
              var f, p, h, g;
              ((h = Object.create(this)),
                h.isRoot && (h.documentObject = null),
                (h.attributes = {}),
                (g = this.attributes));
              for (p in g) c.call(g, p) && ((f = g[p]), (h.attributes[p] = f.clone()));
              return (
                (h.children = []),
                this.children.forEach(function (b) {
                  var A;
                  return ((A = b.clone()), (A.parent = h), h.children.push(A));
                }),
                h
              );
            }),
            (d.prototype.attribute = function (f, p) {
              var h, g;
              if ((f != null && (f = n(f)), s(f))) for (h in f) c.call(f, h) && ((g = f[h]), this.attribute(h, g));
              else
                (o(p) && (p = p.apply()),
                  (!this.options.skipNullAttributes || p != null) && (this.attributes[f] = new t(this, f, p)));
              return this;
            }),
            (d.prototype.removeAttribute = function (f) {
              var p, h, g;
              if (f == null) throw new Error("Missing attribute name. " + this.debugInfo());
              if (((f = n(f)), Array.isArray(f)))
                for (h = 0, g = f.length; h < g; h++) ((p = f[h]), delete this.attributes[p]);
              else delete this.attributes[f];
              return this;
            }),
            (d.prototype.toString = function (f) {
              return this.options.writer.set(f).element(this);
            }),
            (d.prototype.att = function (f, p) {
              return this.attribute(f, p);
            }),
            (d.prototype.a = function (f, p) {
              return this.attribute(f, p);
            }),
            d
          );
        })(r)));
  }).call(QSn);
});