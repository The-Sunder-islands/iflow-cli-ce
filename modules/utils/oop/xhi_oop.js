/**
 * @module xhi
 * @category utils/oop
 * @label oop
 * @position 1672 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xhi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xhi = T((jQc, Ipr) => {
  "use strict";
  var whi;
  try {
    throw new Error();
  } catch (t) {
    whi = t;
  }
  var Nxa = _hi(),
    Chi = vhi();
  function yv() {
    ((this._customScheduler = !1),
      (this._isTickUsed = !1),
      (this._lateQueue = new Chi(16)),
      (this._normalQueue = new Chi(16)),
      (this._haveDrainedQueues = !1));
    var t = this;
    ((this.drainQueues = function () {
      t._drainQueues();
    }),
      (this._schedule = Nxa));
  }
  yv.prototype.setScheduler = function (t) {
    var e = this._schedule;
    return ((this._schedule = t), (this._customScheduler = !0), e);
  };
  yv.prototype.hasCustomScheduler = function () {
    return this._customScheduler;
  };
  yv.prototype.haveItemsQueued = function () {
    return this._isTickUsed || this._haveDrainedQueues;
  };
  yv.prototype.fatalError = function (t, e) {
    e
      ? (process.stderr.write(
          "Fatal " +
            (t instanceof Error ? t.stack : t) +
            `
`,
        ),
        process.exit(2))
      : this.throwLater(t);
  };
  yv.prototype.throwLater = function (t, e) {
    if (
      (arguments.length === 1 &&
        ((e = t),
        (t = function () {
          throw e;
        })),
      typeof setTimeout < "u")
    )
      setTimeout(function () {
        t(e);
      }, 0);
    else
      try {
        this._schedule(function () {
          t(e);
        });
      } catch {
        throw new Error(`No async scheduler available

    See http://goo.gl/MqrFmX
`);
      }
  };
  function Pxa(t, e, r) {
    (this._lateQueue.push(t, e, r), this._queueTick());
  }
  function Bxa(t, e, r) {
    (this._normalQueue.push(t, e, r), this._queueTick());
  }
  function Lxa(t) {
    (this._normalQueue._pushOne(t), this._queueTick());
  }
  yv.prototype.invokeLater = Pxa;
  yv.prototype.invoke = Bxa;
  yv.prototype.settlePromises = Lxa;
  function Shi(t) {
    for (; t.length() > 0; ) Mxa(t);
  }
  function Mxa(t) {
    var e = t.shift();
    if (typeof e != "function") e._settlePromises();
    else {
      var r = t.shift(),
        n = t.shift();
      e.call(r, n);
    }
  }
  yv.prototype._drainQueues = function () {
    (Shi(this._normalQueue), this._reset(), (this._haveDrainedQueues = !0), Shi(this._lateQueue));
  };
  yv.prototype._queueTick = function () {
    this._isTickUsed || ((this._isTickUsed = !0), this._schedule(this.drainQueues));
  };
  yv.prototype._reset = function () {
    this._isTickUsed = !1;
  };
  Ipr.exports = yv;
  Ipr.exports.firstLineError = whi;
});