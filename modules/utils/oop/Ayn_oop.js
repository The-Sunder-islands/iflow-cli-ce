/**
 * @module Ayn
 * @category utils/oop
 * @label oop
 * @position 943 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ayn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ayn = T((ohc, rHt) => {
  "use strict";
  var gyn;
  try {
    throw new Error();
  } catch (t) {
    gyn = t;
  }
  var W6s = cyn(),
    dyn = myn(),
    byn = C0();
  function zh() {
    ((this._customScheduler = !1),
      (this._isTickUsed = !1),
      (this._lateQueue = new dyn(16)),
      (this._normalQueue = new dyn(16)),
      (this._haveDrainedQueues = !1),
      (this._trampolineEnabled = !0));
    var t = this;
    ((this.drainQueues = function () {
      t._drainQueues();
    }),
      (this._schedule = W6s));
  }
  zh.prototype.setScheduler = function (t) {
    var e = this._schedule;
    return ((this._schedule = t), (this._customScheduler = !0), e);
  };
  zh.prototype.hasCustomScheduler = function () {
    return this._customScheduler;
  };
  zh.prototype.enableTrampoline = function () {
    this._trampolineEnabled = !0;
  };
  zh.prototype.disableTrampolineIfNecessary = function () {
    byn.hasDevTools && (this._trampolineEnabled = !1);
  };
  zh.prototype.haveItemsQueued = function () {
    return this._isTickUsed || this._haveDrainedQueues;
  };
  zh.prototype.fatalError = function (t, e) {
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
  zh.prototype.throwLater = function (t, e) {
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
  function fyn(t, e, r) {
    (this._lateQueue.push(t, e, r), this._queueTick());
  }
  function pyn(t, e, r) {
    (this._normalQueue.push(t, e, r), this._queueTick());
  }
  function hyn(t) {
    (this._normalQueue._pushOne(t), this._queueTick());
  }
  byn.hasDevTools
    ? ((zh.prototype.invokeLater = function (t, e, r) {
        this._trampolineEnabled
          ? fyn.call(this, t, e, r)
          : this._schedule(function () {
              setTimeout(function () {
                t.call(e, r);
              }, 100);
            });
      }),
      (zh.prototype.invoke = function (t, e, r) {
        this._trampolineEnabled
          ? pyn.call(this, t, e, r)
          : this._schedule(function () {
              t.call(e, r);
            });
      }),
      (zh.prototype.settlePromises = function (t) {
        this._trampolineEnabled
          ? hyn.call(this, t)
          : this._schedule(function () {
              t._settlePromises();
            });
      }))
    : ((zh.prototype.invokeLater = fyn), (zh.prototype.invoke = pyn), (zh.prototype.settlePromises = hyn));
  zh.prototype._drainQueue = function (t) {
    for (; t.length() > 0; ) {
      var e = t.shift();
      if (typeof e != "function") {
        e._settlePromises();
        continue;
      }
      var r = t.shift(),
        n = t.shift();
      e.call(r, n);
    }
  };
  zh.prototype._drainQueues = function () {
    (this._drainQueue(this._normalQueue),
      this._reset(),
      (this._haveDrainedQueues = !0),
      this._drainQueue(this._lateQueue));
  };
  zh.prototype._queueTick = function () {
    this._isTickUsed || ((this._isTickUsed = !0), this._schedule(this.drainQueues));
  };
  zh.prototype._reset = function () {
    this._isTickUsed = !1;
  };
  rHt.exports = zh;
  rHt.exports.firstLineError = gyn;
});