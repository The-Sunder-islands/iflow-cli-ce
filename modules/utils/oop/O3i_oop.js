/**
 * @module O3i
 * @category utils/oop
 * @label oop
 * @position 1701 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (O3i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var O3i = T((bGc, Fpr) => {
  "use strict";
  Fpr.exports = function () {
    var t = function () {
        return new E(`circular promise resolution chain

    See http://goo.gl/MqrFmX
`);
      },
      e = function () {
        return new U.PromiseInspection(this._target());
      },
      r = function (q) {
        return U.reject(new E(q));
      };
    function n() {}
    var o = {},
      s = Z0();
    s.setReflectHandler(e);
    var a = function () {
        var q = process.domain;
        return q === void 0 ? null : q;
      },
      u = function () {
        return null;
      },
      c = function () {
        return { domain: a(), async: null };
      },
      m = s.isNode && s.nodeSupportsAsyncResource ? Ae("async_hooks").AsyncResource : null,
      d = function () {
        return { domain: a(), async: new m("Bluebird::Promise") };
      },
      f = s.isNode ? c : u;
    s.notEnumerableProp(U, "_getContext", f);
    var p = function () {
        ((f = d), s.notEnumerableProp(U, "_getContext", d));
      },
      h = function () {
        ((f = c), s.notEnumerableProp(U, "_getContext", c));
      },
      g = f$(),
      b = xhi(),
      A = new b();
    g.defineProperty(U, "_async", { value: A });
    var y = AN(),
      E = (U.TypeError = y.TypeError);
    U.RangeError = y.RangeError;
    var v = (U.CancellationError = y.CancellationError);
    ((U.TimeoutError = y.TimeoutError),
      (U.OperationalError = y.OperationalError),
      (U.RejectionError = y.OperationalError),
      (U.AggregateError = y.AggregateError));
    var C = function () {},
      x = {},
      k = {},
      R = khi()(U, C),
      P = Nhi()(U, C, R, r, n),
      D = Bhi()(U),
      O = D.create,
      N = Mhi()(U, D, p, h),
      F = N.CapturedTrace,
      B = $hi()(U, R, k),
      L = Npr()(k),
      G = Ppr(),
      Q = s.errorObj,
      K = s.tryCatch;
    function H(q, ne) {
      if (q == null || q.constructor !== U)
        throw new E(`the promise constructor cannot be invoked directly

    See http://goo.gl/MqrFmX
`);
      if (typeof ne != "function") throw new E("expecting a function but got " + s.classString(ne));
    }
    function U(q) {
      (q !== C && H(this, q),
        (this._bitField = 0),
        (this._fulfillmentHandler0 = void 0),
        (this._rejectionHandler0 = void 0),
        (this._promise0 = void 0),
        (this._receiver0 = void 0),
        this._resolveFromExecutor(q),
        this._promiseCreated(),
        this._fireEvent("promiseCreated", this));
    }
    ((U.prototype.toString = function () {
      return "[object Promise]";
    }),
      (U.prototype.caught = U.prototype.catch =
        function (q) {
          var ne = arguments.length;
          if (ne > 1) {
            var de = new Array(ne - 1),
              ce = 0,
              ye;
            for (ye = 0; ye < ne - 1; ++ye) {
              var Z = arguments[ye];
              if (s.isObject(Z)) de[ce++] = Z;
              else return r("Catch statement predicate: expecting an object but got " + s.classString(Z));
            }
            if (((de.length = ce), (q = arguments[ye]), typeof q != "function"))
              throw new E("The last argument to .catch() must be a function, got " + s.toString(q));
            return this.then(void 0, L(de, q, this));
          }
          return this.then(void 0, q);
        }),
      (U.prototype.reflect = function () {
        return this._then(e, e, void 0, this, void 0);
      }),
      (U.prototype.then = function (q, ne) {
        if (N.warnings() && arguments.length > 0 && typeof q != "function" && typeof ne != "function") {
          var de = ".then() only accepts functions but was passed: " + s.classString(q);
          (arguments.length > 1 && (de += ", " + s.classString(ne)), this._warn(de));
        }
        return this._then(q, ne, void 0, void 0, void 0);
      }),
      (U.prototype.done = function (q, ne) {
        var de = this._then(q, ne, void 0, void 0, void 0);
        de._setIsFinal();
      }),
      (U.prototype.spread = function (q) {
        return typeof q != "function"
          ? r("expecting a function but got " + s.classString(q))
          : this.all()._then(q, void 0, void 0, x, void 0);
      }),
      (U.prototype.toJSON = function () {
        var q = { isFulfilled: !1, isRejected: !1, fulfillmentValue: void 0, rejectionReason: void 0 };
        return (
          this.isFulfilled()
            ? ((q.fulfillmentValue = this.value()), (q.isFulfilled = !0))
            : this.isRejected() && ((q.rejectionReason = this.reason()), (q.isRejected = !0)),
          q
        );
      }),
      (U.prototype.all = function () {
        return (
          arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"),
          new P(this).promise()
        );
      }),
      (U.prototype.error = function (q) {
        return this.caught(s.originatesFromRejection, q);
      }),
      (U.getNewLibraryCopy = Fpr.exports),
      (U.is = function (q) {
        return q instanceof U;
      }),
      (U.fromNode = U.fromCallback =
        function (q) {
          var ne = new U(C);
          ne._captureStackTrace();
          var de = arguments.length > 1 ? !!Object(arguments[1]).multiArgs : !1,
            ce = K(q)(G(ne, de));
          return (ce === Q && ne._rejectCallback(ce.e, !0), ne._isFateSealed() || ne._setAsyncGuaranteed(), ne);
        }),
      (U.all = function (q) {
        return new P(q).promise();
      }),
      (U.cast = function (q) {
        var ne = R(q);
        return (
          ne instanceof U ||
            ((ne = new U(C)), ne._captureStackTrace(), ne._setFulfilled(), (ne._rejectionHandler0 = q)),
          ne
        );
      }),
      (U.resolve = U.fulfilled = U.cast),
      (U.reject = U.rejected =
        function (q) {
          var ne = new U(C);
          return (ne._captureStackTrace(), ne._rejectCallback(q, !0), ne);
        }),
      (U.setScheduler = function (q) {
        if (typeof q != "function") throw new E("expecting a function but got " + s.classString(q));
        return A.setScheduler(q);
      }),
      (U.prototype._then = function (q, ne, de, ce, ye) {
        var Z = ye !== void 0,
          oe = Z ? ye : new U(C),
          ue = this._target(),
          he = ue._bitField;
        Z ||
          (oe._propagateFrom(this, 3),
          oe._captureStackTrace(),
          ce === void 0 &&
            (this._bitField & 2097152) !== 0 &&
            ((he & 50397184) !== 0 ? (ce = this._boundValue()) : (ce = ue === this ? void 0 : this._boundTo)),
          this._fireEvent("promiseChained", this, oe));
        var se = f();
        if ((he & 50397184) !== 0) {
          var fe,
            ge,
            V = ue._settlePromiseCtx;
          ((he & 33554432) !== 0
            ? ((ge = ue._rejectionHandler0), (fe = q))
            : (he & 16777216) !== 0
              ? ((ge = ue._fulfillmentHandler0), (fe = ne), ue._unsetRejectionIsUnhandled())
              : ((V = ue._settlePromiseLateCancellationObserver),
                (ge = new v("late cancellation observer")),
                ue._attachExtraTrace(ge),
                (fe = ne)),
            A.invoke(V, ue, { handler: s.contextBind(se, fe), promise: oe, receiver: ce, value: ge }));
        } else ue._addCallbacks(q, ne, oe, ce, se);
        return oe;
      }),
      (U.prototype._length = function () {
        return this._bitField & 65535;
      }),
      (U.prototype._isFateSealed = function () {
        return (this._bitField & 117506048) !== 0;
      }),
      (U.prototype._isFollowing = function () {
        return (this._bitField & 67108864) === 67108864;
      }),
      (U.prototype._setLength = function (q) {
        this._bitField = (this._bitField & -65536) | (q & 65535);
      }),
      (U.prototype._setFulfilled = function () {
        ((this._bitField = this._bitField | 33554432), this._fireEvent("promiseFulfilled", this));
      }),
      (U.prototype._setRejected = function () {
        ((this._bitField = this._bitField | 16777216), this._fireEvent("promiseRejected", this));
      }),
      (U.prototype._setFollowing = function () {
        ((this._bitField = this._bitField | 67108864), this._fireEvent("promiseResolved", this));
      }),
      (U.prototype._setIsFinal = function () {
        this._bitField = this._bitField | 4194304;
      }),
      (U.prototype._isFinal = function () {
        return (this._bitField & 4194304) > 0;
      }),
      (U.prototype._unsetCancelled = function () {
        this._bitField = this._bitField & -65537;
      }),
      (U.prototype._setCancelled = function () {
        ((this._bitField = this._bitField | 65536), this._fireEvent("promiseCancelled", this));
      }),
      (U.prototype._setWillBeCancelled = function () {
        this._bitField = this._bitField | 8388608;
      }),
      (U.prototype._setAsyncGuaranteed = function () {
        if (!A.hasCustomScheduler()) {
          var q = this._bitField;
          this._bitField = q | (((q & 536870912) >> 2) ^ 134217728);
        }
      }),
      (U.prototype._setNoAsyncGuarantee = function () {
        this._bitField = (this._bitField | 536870912) & -134217729;
      }),
      (U.prototype._receiverAt = function (q) {
        var ne = q === 0 ? this._receiver0 : this[q * 4 - 4 + 3];
        if (ne !== o) return ne === void 0 && this._isBound() ? this._boundValue() : ne;
      }),
      (U.prototype._promiseAt = function (q) {
        return this[q * 4 - 4 + 2];
      }),
      (U.prototype._fulfillmentHandlerAt = function (q) {
        return this[q * 4 - 4 + 0];
      }),
      (U.prototype._rejectionHandlerAt = function (q) {
        return this[q * 4 - 4 + 1];
      }),
      (U.prototype._boundValue = function () {}),
      (U.prototype._migrateCallback0 = function (q) {
        var ne = q._bitField,
          de = q._fulfillmentHandler0,
          ce = q._rejectionHandler0,
          ye = q._promise0,
          Z = q._receiverAt(0);
        (Z === void 0 && (Z = o), this._addCallbacks(de, ce, ye, Z, null));
      }),
      (U.prototype._migrateCallbackAt = function (q, ne) {
        var de = q._fulfillmentHandlerAt(ne),
          ce = q._rejectionHandlerAt(ne),
          ye = q._promiseAt(ne),
          Z = q._receiverAt(ne);
        (Z === void 0 && (Z = o), this._addCallbacks(de, ce, ye, Z, null));
      }),
      (U.prototype._addCallbacks = function (q, ne, de, ce, ye) {
        var Z = this._length();
        if ((Z >= 65531 && ((Z = 0), this._setLength(0)), Z === 0))
          ((this._promise0 = de),
            (this._receiver0 = ce),
            typeof q == "function" && (this._fulfillmentHandler0 = s.contextBind(ye, q)),
            typeof ne == "function" && (this._rejectionHandler0 = s.contextBind(ye, ne)));
        else {
          var oe = Z * 4 - 4;
          ((this[oe + 2] = de),
            (this[oe + 3] = ce),
            typeof q == "function" && (this[oe + 0] = s.contextBind(ye, q)),
            typeof ne == "function" && (this[oe + 1] = s.contextBind(ye, ne)));
        }
        return (this._setLength(Z + 1), Z);
      }),
      (U.prototype._proxy = function (q, ne) {
        this._addCallbacks(void 0, void 0, ne, q, null);
      }),
      (U.prototype._resolveCallback = function (q, ne) {
        if ((this._bitField & 117506048) === 0) {
          if (q === this) return this._rejectCallback(t(), !1);
          var de = R(q, this);
          if (!(de instanceof U)) return this._fulfill(q);
          ne && this._propagateFrom(de, 2);
          var ce = de._target();
          if (ce === this) {
            this._reject(t());
            return;
          }
          var ye = ce._bitField;
          if ((ye & 50397184) === 0) {
            var Z = this._length();
            Z > 0 && ce._migrateCallback0(this);
            for (var oe = 1; oe < Z; ++oe) ce._migrateCallbackAt(this, oe);
            (this._setFollowing(), this._setLength(0), this._setFollowee(de));
          } else if ((ye & 33554432) !== 0) this._fulfill(ce._value());
          else if ((ye & 16777216) !== 0) this._reject(ce._reason());
          else {
            var ue = new v("late cancellation observer");
            (ce._attachExtraTrace(ue), this._reject(ue));
          }
        }
      }),
      (U.prototype._rejectCallback = function (q, ne, de) {
        var ce = s.ensureErrorObject(q),
          ye = ce === q;
        if (!ye && !de && N.warnings()) {
          var Z = "a promise was rejected with a non-error: " + s.classString(q);
          this._warn(Z, !0);
        }
        (this._attachExtraTrace(ce, ne ? ye : !1), this._reject(q));
      }),
      (U.prototype._resolveFromExecutor = function (q) {
        if (q !== C) {
          var ne = this;
          (this._captureStackTrace(), this._pushContext());
          var de = !0,
            ce = this._execute(
              q,
              function (ye) {
                ne._resolveCallback(ye);
              },
              function (ye) {
                ne._rejectCallback(ye, de);
              },
            );
          ((de = !1), this._popContext(), ce !== void 0 && ne._rejectCallback(ce, !0));
        }
      }),
      (U.prototype._settlePromiseFromHandler = function (q, ne, de, ce) {
        var ye = ce._bitField;
        if ((ye & 65536) === 0) {
          ce._pushContext();
          var Z;
          ne === x
            ? !de || typeof de.length != "number"
              ? ((Z = Q), (Z.e = new E("cannot .spread() a non-array: " + s.classString(de))))
              : (Z = K(q).apply(this._boundValue(), de))
            : (Z = K(q).call(ne, de));
          var oe = ce._popContext();
          ((ye = ce._bitField),
            (ye & 65536) === 0 &&
              (Z === k
                ? ce._reject(de)
                : Z === Q
                  ? ce._rejectCallback(Z.e, !1)
                  : (N.checkForgottenReturns(Z, oe, "", ce, this), ce._resolveCallback(Z))));
        }
      }),
      (U.prototype._target = function () {
        for (var q = this; q._isFollowing(); ) q = q._followee();
        return q;
      }),
      (U.prototype._followee = function () {
        return this._rejectionHandler0;
      }),
      (U.prototype._setFollowee = function (q) {
        this._rejectionHandler0 = q;
      }),
      (U.prototype._settlePromise = function (q, ne, de, ce) {
        var ye = q instanceof U,
          Z = this._bitField,
          oe = (Z & 134217728) !== 0;
        (Z & 65536) !== 0
          ? (ye && q._invokeInternalOnCancel(),
            de instanceof B && de.isFinallyHandler()
              ? ((de.cancelPromise = q), K(ne).call(de, ce) === Q && q._reject(Q.e))
              : ne === e
                ? q._fulfill(e.call(de))
                : de instanceof n
                  ? de._promiseCancelled(q)
                  : ye || q instanceof P
                    ? q._cancel()
                    : de.cancel())
          : typeof ne == "function"
            ? ye
              ? (oe && q._setAsyncGuaranteed(), this._settlePromiseFromHandler(ne, de, ce, q))
              : ne.call(de, ce, q)
            : de instanceof n
              ? de._isResolved() || ((Z & 33554432) !== 0 ? de._promiseFulfilled(ce, q) : de._promiseRejected(ce, q))
              : ye && (oe && q._setAsyncGuaranteed(), (Z & 33554432) !== 0 ? q._fulfill(ce) : q._reject(ce));
      }),
      (U.prototype._settlePromiseLateCancellationObserver = function (q) {
        var ne = q.handler,
          de = q.promise,
          ce = q.receiver,
          ye = q.value;
        typeof ne == "function"
          ? de instanceof U
            ? this._settlePromiseFromHandler(ne, ce, ye, de)
            : ne.call(ce, ye, de)
          : de instanceof U && de._reject(ye);
      }),
      (U.prototype._settlePromiseCtx = function (q) {
        this._settlePromise(q.promise, q.handler, q.receiver, q.value);
      }),
      (U.prototype._settlePromise0 = function (q, ne, de) {
        var ce = this._promise0,
          ye = this._receiverAt(0);
        ((this._promise0 = void 0), (this._receiver0 = void 0), this._settlePromise(ce, q, ye, ne));
      }),
      (U.prototype._clearCallbackDataAtIndex = function (q) {
        var ne = q * 4 - 4;
        this[ne + 2] = this[ne + 3] = this[ne + 0] = this[ne + 1] = void 0;
      }),
      (U.prototype._fulfill = function (q) {
        var ne = this._bitField;
        if (!((ne & 117506048) >>> 16)) {
          if (q === this) {
            var de = t();
            return (this._attachExtraTrace(de), this._reject(de));
          }
          (this._setFulfilled(),
            (this._rejectionHandler0 = q),
            (ne & 65535) > 0 &&
              ((ne & 134217728) !== 0 ? this._settlePromises() : A.settlePromises(this), this._dereferenceTrace()));
        }
      }),
      (U.prototype._reject = function (q) {
        var ne = this._bitField;
        if (!((ne & 117506048) >>> 16)) {
          if ((this._setRejected(), (this._fulfillmentHandler0 = q), this._isFinal())) return A.fatalError(q, s.isNode);
          (ne & 65535) > 0 ? A.settlePromises(this) : this._ensurePossibleRejectionHandled();
        }
      }),
      (U.prototype._fulfillPromises = function (q, ne) {
        for (var de = 1; de < q; de++) {
          var ce = this._fulfillmentHandlerAt(de),
            ye = this._promiseAt(de),
            Z = this._receiverAt(de);
          (this._clearCallbackDataAtIndex(de), this._settlePromise(ye, ce, Z, ne));
        }
      }),
      (U.prototype._rejectPromises = function (q, ne) {
        for (var de = 1; de < q; de++) {
          var ce = this._rejectionHandlerAt(de),
            ye = this._promiseAt(de),
            Z = this._receiverAt(de);
          (this._clearCallbackDataAtIndex(de), this._settlePromise(ye, ce, Z, ne));
        }
      }),
      (U.prototype._settlePromises = function () {
        var q = this._bitField,
          ne = q & 65535;
        if (ne > 0) {
          if ((q & 16842752) !== 0) {
            var de = this._fulfillmentHandler0;
            (this._settlePromise0(this._rejectionHandler0, de, q), this._rejectPromises(ne, de));
          } else {
            var ce = this._rejectionHandler0;
            (this._settlePromise0(this._fulfillmentHandler0, ce, q), this._fulfillPromises(ne, ce));
          }
          this._setLength(0);
        }
        this._clearCancellationData();
      }),
      (U.prototype._settledValue = function () {
        var q = this._bitField;
        if ((q & 33554432) !== 0) return this._rejectionHandler0;
        if ((q & 16777216) !== 0) return this._fulfillmentHandler0;
      }),
      typeof Symbol < "u" &&
        Symbol.toStringTag &&
        g.defineProperty(U.prototype, Symbol.toStringTag, {
          get: function () {
            return "Object";
          },
        }));
    function Y(q) {
      this.promise._resolveCallback(q);
    }
    function X(q) {
      this.promise._rejectCallback(q, !1);
    }
    ((U.defer = U.pending =
      function () {
        N.deprecated("Promise.defer", "new Promise");
        var q = new U(C);
        return { promise: q, resolve: Y, reject: X };
      }),
      s.notEnumerableProp(U, "_makeSelfResolutionError", t),
      Hhi()(U, C, R, r, N),
      Whi()(U, C, R, N),
      Yhi()(U, P, r, N),
      Jhi()(U),
      Zhi()(U),
      t3i()(U, P, R, C, A),
      (U.Promise = U),
      (U.version = "3.7.2"),
      n3i()(U),
      o3i()(U, r, C, R, n, N),
      a3i()(U, P, r, R, C, N),
      c3i()(U),
      m3i()(U, C),
      f3i()(U, P, R, r),
      h3i()(U, C, R, r),
      b3i()(U, P, r, R, C, N),
      y3i()(U, P, N),
      E3i()(U, P, r),
      C3i()(U, C, N),
      w3i()(U, r, R, O, C, N),
      T3i()(U),
      I3i()(U, C),
      k3i()(U, C),
      s.toFastProperties(U),
      s.toFastProperties(U.prototype));
    function J(q) {
      var ne = new U(C);
      ((ne._fulfillmentHandler0 = q), (ne._rejectionHandler0 = q), (ne._promise0 = q), (ne._receiver0 = q));
    }
    return (
      J({ a: 1 }),
      J({ b: 2 }),
      J({ c: 3 }),
      J(1),
      J(function () {}),
      J(void 0),
      J(!1),
      J(new U(C)),
      N.setBounds(b.firstLineError, s.lastLineError),
      U
    );
  };
});