/**
 * @module o3i
 * @category utils/oop
 * @label oop
 * @position 1687 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (o3i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var o3i = T((nGc, i3i) => {
  "use strict";
  i3i.exports = function (t, e, r, n, o, s) {
    var a = AN(),
      u = a.TypeError,
      c = Z0(),
      m = c.errorObj,
      d = c.tryCatch,
      f = [];
    function p(g, b, A) {
      for (var y = 0; y < b.length; ++y) {
        A._pushContext();
        var E = d(b[y])(g);
        if ((A._popContext(), E === m)) {
          A._pushContext();
          var v = t.reject(m.e);
          return (A._popContext(), v);
        }
        var C = n(E, A);
        if (C instanceof t) return C;
      }
      return null;
    }
    function h(g, b, A, y) {
      if (s.cancellation()) {
        var E = new t(r),
          v = (this._finallyPromise = new t(r));
        ((this._promise = E.lastly(function () {
          return v;
        })),
          E._captureStackTrace(),
          E._setOnCancel(this));
      } else {
        var C = (this._promise = new t(r));
        C._captureStackTrace();
      }
      ((this._stack = y),
        (this._generatorFunction = g),
        (this._receiver = b),
        (this._generator = void 0),
        (this._yieldHandlers = typeof A == "function" ? [A].concat(f) : f),
        (this._yieldedPromise = null),
        (this._cancellationPhase = !1));
    }
    (c.inherits(h, o),
      (h.prototype._isResolved = function () {
        return this._promise === null;
      }),
      (h.prototype._cleanup = function () {
        ((this._promise = this._generator = null),
          s.cancellation() &&
            this._finallyPromise !== null &&
            (this._finallyPromise._fulfill(), (this._finallyPromise = null)));
      }),
      (h.prototype._promiseCancelled = function () {
        if (!this._isResolved()) {
          var g = typeof this._generator.return < "u",
            b;
          if (g)
            (this._promise._pushContext(),
              (b = d(this._generator.return).call(this._generator, void 0)),
              this._promise._popContext());
          else {
            var A = new t.CancellationError("generator .return() sentinel");
            ((t.coroutine.returnSentinel = A),
              this._promise._attachExtraTrace(A),
              this._promise._pushContext(),
              (b = d(this._generator.throw).call(this._generator, A)),
              this._promise._popContext());
          }
          ((this._cancellationPhase = !0), (this._yieldedPromise = null), this._continue(b));
        }
      }),
      (h.prototype._promiseFulfilled = function (g) {
        ((this._yieldedPromise = null), this._promise._pushContext());
        var b = d(this._generator.next).call(this._generator, g);
        (this._promise._popContext(), this._continue(b));
      }),
      (h.prototype._promiseRejected = function (g) {
        ((this._yieldedPromise = null), this._promise._attachExtraTrace(g), this._promise._pushContext());
        var b = d(this._generator.throw).call(this._generator, g);
        (this._promise._popContext(), this._continue(b));
      }),
      (h.prototype._resultCancelled = function () {
        if (this._yieldedPromise instanceof t) {
          var g = this._yieldedPromise;
          ((this._yieldedPromise = null), g.cancel());
        }
      }),
      (h.prototype.promise = function () {
        return this._promise;
      }),
      (h.prototype._run = function () {
        ((this._generator = this._generatorFunction.call(this._receiver)),
          (this._receiver = this._generatorFunction = void 0),
          this._promiseFulfilled(void 0));
      }),
      (h.prototype._continue = function (g) {
        var b = this._promise;
        if (g === m) return (this._cleanup(), this._cancellationPhase ? b.cancel() : b._rejectCallback(g.e, !1));
        var A = g.value;
        if (g.done === !0) return (this._cleanup(), this._cancellationPhase ? b.cancel() : b._resolveCallback(A));
        var y = n(A, this._promise);
        if (!(y instanceof t) && ((y = p(y, this._yieldHandlers, this._promise)), y === null)) {
          this._promiseRejected(
            new u(
              `A value %s was yielded that could not be treated as a promise

    See http://goo.gl/MqrFmX

`.replace("%s", String(A)) +
                `From coroutine:
` +
                this._stack
                  .split(
                    `
`,
                  )
                  .slice(1, -7).join(`
`),
            ),
          );
          return;
        }
        y = y._target();
        var E = y._bitField;
        (E & 50397184) === 0
          ? ((this._yieldedPromise = y), y._proxy(this, null))
          : (E & 33554432) !== 0
            ? t._async.invoke(this._promiseFulfilled, this, y._value())
            : (E & 16777216) !== 0
              ? t._async.invoke(this._promiseRejected, this, y._reason())
              : this._promiseCancelled();
      }),
      (t.coroutine = function (g, b) {
        if (typeof g != "function")
          throw new u(`generatorFunction must be a function

    See http://goo.gl/MqrFmX
`);
        var A = Object(b).yieldHandler,
          y = h,
          E = new Error().stack;
        return function () {
          var v = g.apply(this, arguments),
            C = new y(void 0, void 0, A, E),
            x = C.promise();
          return ((C._generator = v), C._promiseFulfilled(void 0), x);
        };
      }),
      (t.coroutine.addYieldHandler = function (g) {
        if (typeof g != "function") throw new u("expecting a function but got " + c.classString(g));
        f.push(g);
      }),
      (t.spawn = function (g) {
        if ((s.deprecated("Promise.spawn()", "Promise.coroutine()"), typeof g != "function"))
          return e(`generatorFunction must be a function

    See http://goo.gl/MqrFmX
`);
        var b = new h(g, this),
          A = b.promise();
        return (b._run(t.spawn), A);
      }));
  };
});