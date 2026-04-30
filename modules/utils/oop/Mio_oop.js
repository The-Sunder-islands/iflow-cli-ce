/**
 * @module Mio
 * @category utils/oop
 * @label oop
 * @position 1989 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Mio) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Mio = T((IOl, Lio) => {
  "use strict";
  var Fy = function (t) {
    if (
      ((t = t || {}),
      (this.Promise = t.Promise || Promise),
      (this.queues = Object.create(null)),
      (this.domainReentrant = t.domainReentrant || !1),
      this.domainReentrant)
    ) {
      if (typeof process > "u" || typeof process.domain > "u")
        throw new Error(
          "Domain-reentrant locks require `process.domain` to exist. Please flip `opts.domainReentrant = false`, use a NodeJS version that still implements Domain, or install a browser polyfill.",
        );
      this.domains = Object.create(null);
    }
    ((this.timeout = t.timeout || Fy.DEFAULT_TIMEOUT),
      (this.maxOccupationTime = t.maxOccupationTime || Fy.DEFAULT_MAX_OCCUPATION_TIME),
      (this.maxExecutionTime = t.maxExecutionTime || Fy.DEFAULT_MAX_EXECUTION_TIME),
      t.maxPending === 1 / 0 || (Number.isInteger(t.maxPending) && t.maxPending >= 0)
        ? (this.maxPending = t.maxPending)
        : (this.maxPending = Fy.DEFAULT_MAX_PENDING));
  };
  Fy.DEFAULT_TIMEOUT = 0;
  Fy.DEFAULT_MAX_OCCUPATION_TIME = 0;
  Fy.DEFAULT_MAX_EXECUTION_TIME = 0;
  Fy.DEFAULT_MAX_PENDING = 1e3;
  Fy.prototype.acquire = function (t, e, r, n) {
    if (Array.isArray(t)) return this._acquireBatch(t, e, r, n);
    if (typeof e != "function") throw new Error("You must pass a function to execute");
    var o = null,
      s = null,
      a = null;
    (typeof r != "function" &&
      ((n = r),
      (r = null),
      (a = new this.Promise(function (E, v) {
        ((o = E), (s = v));
      }))),
      (n = n || {}));
    var u = !1,
      c = null,
      m = null,
      d = null,
      f = this,
      p = function (E, v, C) {
        (m && (clearTimeout(m), (m = null)),
          d && (clearTimeout(d), (d = null)),
          E &&
            (f.queues[t] && f.queues[t].length === 0 && delete f.queues[t], f.domainReentrant && delete f.domains[t]),
          u || (a ? (v ? s(v) : o(C)) : typeof r == "function" && r(v, C), (u = !0)),
          E && f.queues[t] && f.queues[t].length > 0 && f.queues[t].shift()());
      },
      h = function (E) {
        if (u) return p(E);
        (c && (clearTimeout(c), (c = null)), f.domainReentrant && E && (f.domains[t] = process.domain));
        var v = n.maxExecutionTime || f.maxExecutionTime;
        if (
          (v &&
            (d = setTimeout(function () {
              f.queues[t] && p(E, new Error("Maximum execution time is exceeded " + t));
            }, v)),
          e.length === 1)
        ) {
          var C = !1;
          try {
            e(function (x, k) {
              C || ((C = !0), p(E, x, k));
            });
          } catch (x) {
            C || ((C = !0), p(E, x));
          }
        } else
          f._promiseTry(function () {
            return e();
          }).then(
            function (x) {
              p(E, void 0, x);
            },
            function (x) {
              p(E, x);
            },
          );
      };
    f.domainReentrant && process.domain && (h = process.domain.bind(h));
    var g = n.maxPending || f.maxPending;
    if (!f.queues[t]) ((f.queues[t] = []), h(!0));
    else if (f.domainReentrant && process.domain && process.domain === f.domains[t]) h(!1);
    else if (f.queues[t].length >= g) p(!1, new Error("Too many pending tasks in queue " + t));
    else {
      var b = function () {
        h(!0);
      };
      n.skipQueue ? f.queues[t].unshift(b) : f.queues[t].push(b);
      var A = n.timeout || f.timeout;
      A &&
        (c = setTimeout(function () {
          ((c = null), p(!1, new Error("async-lock timed out in queue " + t)));
        }, A));
    }
    var y = n.maxOccupationTime || f.maxOccupationTime;
    if (
      (y &&
        (m = setTimeout(function () {
          f.queues[t] && p(!1, new Error("Maximum occupation time is exceeded in queue " + t));
        }, y)),
      a)
    )
      return a;
  };
  Fy.prototype._acquireBatch = function (t, e, r, n) {
    typeof r != "function" && ((n = r), (r = null));
    var o = this,
      s = function (u, c) {
        return function (m) {
          o.acquire(u, c, m, n);
        };
      },
      a = t.reduceRight(function (u, c) {
        return s(c, u);
      }, e);
    if (typeof r == "function") a(r);
    else
      return new this.Promise(function (u, c) {
        a.length === 1
          ? a(function (m, d) {
              m ? c(m) : u(d);
            })
          : u(a());
      });
  };
  Fy.prototype.isBusy = function (t) {
    return t ? !!this.queues[t] : Object.keys(this.queues).length > 0;
  };
  Fy.prototype._promiseTry = function (t) {
    try {
      return this.Promise.resolve(t());
    } catch (e) {
      return this.Promise.reject(e);
    }
  };
  Lio.exports = Fy;
});