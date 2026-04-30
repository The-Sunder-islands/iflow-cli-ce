/**
 * @module mHt
 * @category utils/oop
 * @label oop
 * @position 972 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mHt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mHt = T((Bhc, lHt) => {
  "use strict";
  lHt.exports = function () {
    var t = function () {
        return new f(`circular promise resolution chain

    See http://goo.gl/MqrFmX
`);
      },
      e = function () {
        return new F.PromiseInspection(this._target());
      },
      r = function (Q) {
        return F.reject(new f(Q));
      };
    function n() {}
    var o = {},
      s = C0(),
      a;
    (s.isNode
      ? (a = function () {
          var Q = process.domain;
          return (Q === void 0 && (Q = null), Q);
        })
      : (a = function () {
          return null;
        }),
      s.notEnumerableProp(F, "_getDomain", a));
    var u = $V(),
      c = Ayn(),
      m = new c();
    u.defineProperty(F, "_async", { value: m });
    var d = Nk(),
      f = (F.TypeError = d.TypeError);
    F.RangeError = d.RangeError;
    var p = (F.CancellationError = d.CancellationError);
    ((F.TimeoutError = d.TimeoutError),
      (F.OperationalError = d.OperationalError),
      (F.RejectionError = d.OperationalError),
      (F.AggregateError = d.AggregateError));
    var h = function () {},
      g = {},
      b = {},
      A = Cyn()(F, h),
      y = wyn()(F, h, A, r, n),
      E = Tyn()(F),
      v = E.create,
      C = Iyn()(F, E),
      x = C.CapturedTrace,
      k = kyn()(F, A),
      R = Nyn()(b),
      P = sHt(),
      D = s.errorObj,
      O = s.tryCatch;
    function N(Q, K) {
      if (typeof K != "function") throw new f("expecting a function but got " + s.classString(K));
      if (Q.constructor !== F)
        throw new f(`the promise constructor cannot be invoked directly

    See http://goo.gl/MqrFmX
`);
    }
    function F(Q) {
      ((this._bitField = 0),
        (this._fulfillmentHandler0 = void 0),
        (this._rejectionHandler0 = void 0),
        (this._promise0 = void 0),
        (this._receiver0 = void 0),
        Q !== h && (N(this, Q), this._resolveFromExecutor(Q)),
        this._promiseCreated(),
        this._fireEvent("promiseCreated", this));
    }
    ((F.prototype.toString = function () {
      return "[object Promise]";
    }),
      (F.prototype.caught = F.prototype.catch =
        function (Q) {
          var K = arguments.length;
          if (K > 1) {
            var H = new Array(K - 1),
              U = 0,
              Y;
            for (Y = 0; Y < K - 1; ++Y) {
              var X = arguments[Y];
              if (s.isObject(X)) H[U++] = X;
              else return r("expecting an object but got A catch statement predicate " + s.classString(X));
            }
            return ((H.length = U), (Q = arguments[Y]), this.then(void 0, R(H, Q, this)));
          }
          return this.then(void 0, Q);
        }),
      (F.prototype.reflect = function () {
        return this._then(e, e, void 0, this, void 0);
      }),
      (F.prototype.then = function (Q, K) {
        if (C.warnings() && arguments.length > 0 && typeof Q != "function" && typeof K != "function") {
          var H = ".then() only accepts functions but was passed: " + s.classString(Q);
          (arguments.length > 1 && (H += ", " + s.classString(K)), this._warn(H));
        }
        return this._then(Q, K, void 0, void 0, void 0);
      }),
      (F.prototype.done = function (Q, K) {
        var H = this._then(Q, K, void 0, void 0, void 0);
        H._setIsFinal();
      }),
      (F.prototype.spread = function (Q) {
        return typeof Q != "function"
          ? r("expecting a function but got " + s.classString(Q))
          : this.all()._then(Q, void 0, void 0, g, void 0);
      }),
      (F.prototype.toJSON = function () {
        var Q = { isFulfilled: !1, isRejected: !1, fulfillmentValue: void 0, rejectionReason: void 0 };
        return (
          this.isFulfilled()
            ? ((Q.fulfillmentValue = this.value()), (Q.isFulfilled = !0))
            : this.isRejected() && ((Q.rejectionReason = this.reason()), (Q.isRejected = !0)),
          Q
        );
      }),
      (F.prototype.all = function () {
        return (
          arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"),
          new y(this).promise()
        );
      }),
      (F.prototype.error = function (Q) {
        return this.caught(s.originatesFromRejection, Q);
      }),
      (F.getNewLibraryCopy = lHt.exports),
      (F.is = function (Q) {
        return Q instanceof F;
      }),
      (F.fromNode = F.fromCallback =
        function (Q) {
          var K = new F(h);
          K._captureStackTrace();
          var H = arguments.length > 1 ? !!Object(arguments[1]).multiArgs : !1,
            U = O(Q)(P(K, H));
          return (U === D && K._rejectCallback(U.e, !0), K._isFateSealed() || K._setAsyncGuaranteed(), K);
        }),
      (F.all = function (Q) {
        return new y(Q).promise();
      }),
      (F.cast = function (Q) {
        var K = A(Q);
        return (
          K instanceof F || ((K = new F(h)), K._captureStackTrace(), K._setFulfilled(), (K._rejectionHandler0 = Q)),
          K
        );
      }),
      (F.resolve = F.fulfilled = F.cast),
      (F.reject = F.rejected =
        function (Q) {
          var K = new F(h);
          return (K._captureStackTrace(), K._rejectCallback(Q, !0), K);
        }),
      (F.setScheduler = function (Q) {
        if (typeof Q != "function") throw new f("expecting a function but got " + s.classString(Q));
        return m.setScheduler(Q);
      }),
      (F.prototype._then = function (Q, K, H, U, Y) {
        var X = Y !== void 0,
          J = X ? Y : new F(h),
          q = this._target(),
          ne = q._bitField;
        X ||
          (J._propagateFrom(this, 3),
          J._captureStackTrace(),
          U === void 0 &&
            (this._bitField & 2097152) !== 0 &&
            ((ne & 50397184) !== 0 ? (U = this._boundValue()) : (U = q === this ? void 0 : this._boundTo)),
          this._fireEvent("promiseChained", this, J));
        var de = a();
        if ((ne & 50397184) !== 0) {
          var ce,
            ye,
            Z = q._settlePromiseCtx;
          ((ne & 33554432) !== 0
            ? ((ye = q._rejectionHandler0), (ce = Q))
            : (ne & 16777216) !== 0
              ? ((ye = q._fulfillmentHandler0), (ce = K), q._unsetRejectionIsUnhandled())
              : ((Z = q._settlePromiseLateCancellationObserver),
                (ye = new p("late cancellation observer")),
                q._attachExtraTrace(ye),
                (ce = K)),
            m.invoke(Z, q, {
              handler: de === null ? ce : typeof ce == "function" && s.domainBind(de, ce),
              promise: J,
              receiver: U,
              value: ye,
            }));
        } else q._addCallbacks(Q, K, J, U, de);
        return J;
      }),
      (F.prototype._length = function () {
        return this._bitField & 65535;
      }),
      (F.prototype._isFateSealed = function () {
        return (this._bitField & 117506048) !== 0;
      }),
      (F.prototype._isFollowing = function () {
        return (this._bitField & 67108864) === 67108864;
      }),
      (F.prototype._setLength = function (Q) {
        this._bitField = (this._bitField & -65536) | (Q & 65535);
      }),
      (F.prototype._setFulfilled = function () {
        ((this._bitField = this._bitField | 33554432), this._fireEvent("promiseFulfilled", this));
      }),
      (F.prototype._setRejected = function () {
        ((this._bitField = this._bitField | 16777216), this._fireEvent("promiseRejected", this));
      }),
      (F.prototype._setFollowing = function () {
        ((this._bitField = this._bitField | 67108864), this._fireEvent("promiseResolved", this));
      }),
      (F.prototype._setIsFinal = function () {
        this._bitField = this._bitField | 4194304;
      }),
      (F.prototype._isFinal = function () {
        return (this._bitField & 4194304) > 0;
      }),
      (F.prototype._unsetCancelled = function () {
        this._bitField = this._bitField & -65537;
      }),
      (F.prototype._setCancelled = function () {
        ((this._bitField = this._bitField | 65536), this._fireEvent("promiseCancelled", this));
      }),
      (F.prototype._setWillBeCancelled = function () {
        this._bitField = this._bitField | 8388608;
      }),
      (F.prototype._setAsyncGuaranteed = function () {
        m.hasCustomScheduler() || (this._bitField = this._bitField | 134217728);
      }),
      (F.prototype._receiverAt = function (Q) {
        var K = Q === 0 ? this._receiver0 : this[Q * 4 - 4 + 3];
        if (K !== o) return K === void 0 && this._isBound() ? this._boundValue() : K;
      }),
      (F.prototype._promiseAt = function (Q) {
        return this[Q * 4 - 4 + 2];
      }),
      (F.prototype._fulfillmentHandlerAt = function (Q) {
        return this[Q * 4 - 4 + 0];
      }),
      (F.prototype._rejectionHandlerAt = function (Q) {
        return this[Q * 4 - 4 + 1];
      }),
      (F.prototype._boundValue = function () {}),
      (F.prototype._migrateCallback0 = function (Q) {
        var K = Q._bitField,
          H = Q._fulfillmentHandler0,
          U = Q._rejectionHandler0,
          Y = Q._promise0,
          X = Q._receiverAt(0);
        (X === void 0 && (X = o), this._addCallbacks(H, U, Y, X, null));
      }),
      (F.prototype._migrateCallbackAt = function (Q, K) {
        var H = Q._fulfillmentHandlerAt(K),
          U = Q._rejectionHandlerAt(K),
          Y = Q._promiseAt(K),
          X = Q._receiverAt(K);
        (X === void 0 && (X = o), this._addCallbacks(H, U, Y, X, null));
      }),
      (F.prototype._addCallbacks = function (Q, K, H, U, Y) {
        var X = this._length();
        if ((X >= 65531 && ((X = 0), this._setLength(0)), X === 0))
          ((this._promise0 = H),
            (this._receiver0 = U),
            typeof Q == "function" && (this._fulfillmentHandler0 = Y === null ? Q : s.domainBind(Y, Q)),
            typeof K == "function" && (this._rejectionHandler0 = Y === null ? K : s.domainBind(Y, K)));
        else {
          var J = X * 4 - 4;
          ((this[J + 2] = H),
            (this[J + 3] = U),
            typeof Q == "function" && (this[J + 0] = Y === null ? Q : s.domainBind(Y, Q)),
            typeof K == "function" && (this[J + 1] = Y === null ? K : s.domainBind(Y, K)));
        }
        return (this._setLength(X + 1), X);
      }),
      (F.prototype._proxy = function (Q, K) {
        this._addCallbacks(void 0, void 0, K, Q, null);
      }),
      (F.prototype._resolveCallback = function (Q, K) {
        if ((this._bitField & 117506048) === 0) {
          if (Q === this) return this._rejectCallback(t(), !1);
          var H = A(Q, this);
          if (!(H instanceof F)) return this._fulfill(Q);
          K && this._propagateFrom(H, 2);
          var U = H._target();
          if (U === this) {
            this._reject(t());
            return;
          }
          var Y = U._bitField;
          if ((Y & 50397184) === 0) {
            var X = this._length();
            X > 0 && U._migrateCallback0(this);
            for (var J = 1; J < X; ++J) U._migrateCallbackAt(this, J);
            (this._setFollowing(), this._setLength(0), this._setFollowee(U));
          } else if ((Y & 33554432) !== 0) this._fulfill(U._value());
          else if ((Y & 16777216) !== 0) this._reject(U._reason());
          else {
            var q = new p("late cancellation observer");
            (U._attachExtraTrace(q), this._reject(q));
          }
        }
      }),
      (F.prototype._rejectCallback = function (Q, K, H) {
        var U = s.ensureErrorObject(Q),
          Y = U === Q;
        if (!Y && !H && C.warnings()) {
          var X = "a promise was rejected with a non-error: " + s.classString(Q);
          this._warn(X, !0);
        }
        (this._attachExtraTrace(U, K ? Y : !1), this._reject(Q));
      }),
      (F.prototype._resolveFromExecutor = function (Q) {
        var K = this;
        (this._captureStackTrace(), this._pushContext());
        var H = !0,
          U = this._execute(
            Q,
            function (Y) {
              K._resolveCallback(Y);
            },
            function (Y) {
              K._rejectCallback(Y, H);
            },
          );
        ((H = !1), this._popContext(), U !== void 0 && K._rejectCallback(U, !0));
      }),
      (F.prototype._settlePromiseFromHandler = function (Q, K, H, U) {
        var Y = U._bitField;
        if ((Y & 65536) === 0) {
          U._pushContext();
          var X;
          K === g
            ? !H || typeof H.length != "number"
              ? ((X = D), (X.e = new f("cannot .spread() a non-array: " + s.classString(H))))
              : (X = O(Q).apply(this._boundValue(), H))
            : (X = O(Q).call(K, H));
          var J = U._popContext();
          ((Y = U._bitField),
            (Y & 65536) === 0 &&
              (X === b
                ? U._reject(H)
                : X === D
                  ? U._rejectCallback(X.e, !1)
                  : (C.checkForgottenReturns(X, J, "", U, this), U._resolveCallback(X))));
        }
      }),
      (F.prototype._target = function () {
        for (var Q = this; Q._isFollowing(); ) Q = Q._followee();
        return Q;
      }),
      (F.prototype._followee = function () {
        return this._rejectionHandler0;
      }),
      (F.prototype._setFollowee = function (Q) {
        this._rejectionHandler0 = Q;
      }),
      (F.prototype._settlePromise = function (Q, K, H, U) {
        var Y = Q instanceof F,
          X = this._bitField,
          J = (X & 134217728) !== 0;
        (X & 65536) !== 0
          ? (Y && Q._invokeInternalOnCancel(),
            H instanceof k && H.isFinallyHandler()
              ? ((H.cancelPromise = Q), O(K).call(H, U) === D && Q._reject(D.e))
              : K === e
                ? Q._fulfill(e.call(H))
                : H instanceof n
                  ? H._promiseCancelled(Q)
                  : Y || Q instanceof y
                    ? Q._cancel()
                    : H.cancel())
          : typeof K == "function"
            ? Y
              ? (J && Q._setAsyncGuaranteed(), this._settlePromiseFromHandler(K, H, U, Q))
              : K.call(H, U, Q)
            : H instanceof n
              ? H._isResolved() || ((X & 33554432) !== 0 ? H._promiseFulfilled(U, Q) : H._promiseRejected(U, Q))
              : Y && (J && Q._setAsyncGuaranteed(), (X & 33554432) !== 0 ? Q._fulfill(U) : Q._reject(U));
      }),
      (F.prototype._settlePromiseLateCancellationObserver = function (Q) {
        var K = Q.handler,
          H = Q.promise,
          U = Q.receiver,
          Y = Q.value;
        typeof K == "function"
          ? H instanceof F
            ? this._settlePromiseFromHandler(K, U, Y, H)
            : K.call(U, Y, H)
          : H instanceof F && H._reject(Y);
      }),
      (F.prototype._settlePromiseCtx = function (Q) {
        this._settlePromise(Q.promise, Q.handler, Q.receiver, Q.value);
      }),
      (F.prototype._settlePromise0 = function (Q, K, H) {
        var U = this._promise0,
          Y = this._receiverAt(0);
        ((this._promise0 = void 0), (this._receiver0 = void 0), this._settlePromise(U, Q, Y, K));
      }),
      (F.prototype._clearCallbackDataAtIndex = function (Q) {
        var K = Q * 4 - 4;
        this[K + 2] = this[K + 3] = this[K + 0] = this[K + 1] = void 0;
      }),
      (F.prototype._fulfill = function (Q) {
        var K = this._bitField;
        if (!((K & 117506048) >>> 16)) {
          if (Q === this) {
            var H = t();
            return (this._attachExtraTrace(H), this._reject(H));
          }
          (this._setFulfilled(),
            (this._rejectionHandler0 = Q),
            (K & 65535) > 0 && ((K & 134217728) !== 0 ? this._settlePromises() : m.settlePromises(this)));
        }
      }),
      (F.prototype._reject = function (Q) {
        var K = this._bitField;
        if (!((K & 117506048) >>> 16)) {
          if ((this._setRejected(), (this._fulfillmentHandler0 = Q), this._isFinal())) return m.fatalError(Q, s.isNode);
          (K & 65535) > 0 ? m.settlePromises(this) : this._ensurePossibleRejectionHandled();
        }
      }),
      (F.prototype._fulfillPromises = function (Q, K) {
        for (var H = 1; H < Q; H++) {
          var U = this._fulfillmentHandlerAt(H),
            Y = this._promiseAt(H),
            X = this._receiverAt(H);
          (this._clearCallbackDataAtIndex(H), this._settlePromise(Y, U, X, K));
        }
      }),
      (F.prototype._rejectPromises = function (Q, K) {
        for (var H = 1; H < Q; H++) {
          var U = this._rejectionHandlerAt(H),
            Y = this._promiseAt(H),
            X = this._receiverAt(H);
          (this._clearCallbackDataAtIndex(H), this._settlePromise(Y, U, X, K));
        }
      }),
      (F.prototype._settlePromises = function () {
        var Q = this._bitField,
          K = Q & 65535;
        if (K > 0) {
          if ((Q & 16842752) !== 0) {
            var H = this._fulfillmentHandler0;
            (this._settlePromise0(this._rejectionHandler0, H, Q), this._rejectPromises(K, H));
          } else {
            var U = this._rejectionHandler0;
            (this._settlePromise0(this._fulfillmentHandler0, U, Q), this._fulfillPromises(K, U));
          }
          this._setLength(0);
        }
        this._clearCancellationData();
      }),
      (F.prototype._settledValue = function () {
        var Q = this._bitField;
        if ((Q & 33554432) !== 0) return this._rejectionHandler0;
        if ((Q & 16777216) !== 0) return this._fulfillmentHandler0;
      }));
    function B(Q) {
      this.promise._resolveCallback(Q);
    }
    function L(Q) {
      this.promise._rejectCallback(Q, !1);
    }
    ((F.defer = F.pending =
      function () {
        C.deprecated("Promise.defer", "new Promise");
        var Q = new F(h);
        return { promise: Q, resolve: B, reject: L };
      }),
      s.notEnumerableProp(F, "_makeSelfResolutionError", t),
      Fyn()(F, h, A, r, C),
      $yn()(F, h, A, C),
      Qyn()(F, y, r, C),
      qyn()(F),
      Vyn()(F),
      zyn()(F, y, A, h, m, a),
      (F.Promise = F),
      (F.version = "3.4.7"),
      Kyn()(F, y, r, A, h, C),
      Xyn()(F),
      e_n()(F, r, A, v, h, C),
      r_n()(F, h, C),
      i_n()(F, r, h, A, n, C),
      s_n()(F),
      u_n()(F, h),
      l_n()(F, y, A, r),
      d_n()(F, h, A, r),
      p_n()(F, y, r, A, h, C),
      g_n()(F, y, C),
      A_n()(F, y, r),
      __n()(F, h),
      v_n()(F, h),
      S_n()(F),
      s.toFastProperties(F),
      s.toFastProperties(F.prototype));
    function G(Q) {
      var K = new F(h);
      ((K._fulfillmentHandler0 = Q), (K._rejectionHandler0 = Q), (K._promise0 = Q), (K._receiver0 = Q));
    }
    return (
      G({ a: 1 }),
      G({ b: 2 }),
      G({ c: 3 }),
      G(1),
      G(function () {}),
      G(void 0),
      G(!1),
      G(new F(h)),
      C.setBounds(c.firstLineError, s.lastLineError),
      F
    );
  };
});