/**
 * @module Bye
 * @category utils/oop
 * @label oop
 * @position 1064 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Bye) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Bye = T((iwn, own) => {
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
    ((a = zk().isObject),
      (s = B2()),
      (t = kye()),
      (r = Oye()),
      (e = Nye()),
      (n = Pye()),
      (own.exports = o =
        (function (m) {
          u(d, m);
          function d(f, p, h) {
            var g, b;
            (d.__super__.constructor.call(this, f),
              (this.name = "!DOCTYPE"),
              (this.documentObject = f),
              a(p) && ((g = p), (p = g.pubID), (h = g.sysID)),
              h == null && ((b = [p, h]), (h = b[0]), (p = b[1])),
              p != null && (this.pubID = this.stringify.dtdPubID(p)),
              h != null && (this.sysID = this.stringify.dtdSysID(h)));
          }
          return (
            (d.prototype.element = function (f, p) {
              var h;
              return ((h = new e(this, f, p)), this.children.push(h), this);
            }),
            (d.prototype.attList = function (f, p, h, g, b) {
              var A;
              return ((A = new t(this, f, p, h, g, b)), this.children.push(A), this);
            }),
            (d.prototype.entity = function (f, p) {
              var h;
              return ((h = new r(this, !1, f, p)), this.children.push(h), this);
            }),
            (d.prototype.pEntity = function (f, p) {
              var h;
              return ((h = new r(this, !0, f, p)), this.children.push(h), this);
            }),
            (d.prototype.notation = function (f, p) {
              var h;
              return ((h = new n(this, f, p)), this.children.push(h), this);
            }),
            (d.prototype.toString = function (f) {
              return this.options.writer.set(f).docType(this);
            }),
            (d.prototype.ele = function (f, p) {
              return this.element(f, p);
            }),
            (d.prototype.att = function (f, p, h, g, b) {
              return this.attList(f, p, h, g, b);
            }),
            (d.prototype.ent = function (f, p) {
              return this.entity(f, p);
            }),
            (d.prototype.pent = function (f, p) {
              return this.pEntity(f, p);
            }),
            (d.prototype.not = function (f, p) {
              return this.notation(f, p);
            }),
            (d.prototype.up = function () {
              return this.root() || this.documentObject;
            }),
            d
          );
        })(s)));
  }).call(iwn);
});