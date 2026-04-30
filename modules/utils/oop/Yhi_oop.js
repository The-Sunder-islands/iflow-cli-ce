/**
 * @module Yhi
 * @category utils/oop
 * @label oop
 * @position 1682 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Yhi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Yhi = T((XQc, zhi) => {
  "use strict";
  zhi.exports = function (t, e, r, n) {
    var o = Z0(),
      s = o.tryCatch,
      a = o.errorObj,
      u = t._async;
    ((t.prototype.break = t.prototype.cancel =
      function () {
        if (!n.cancellation()) return this._warn("cancellation is disabled");
        for (var c = this, m = c; c._isCancellable(); ) {
          if (!c._cancelBy(m)) {
            m._isFollowing() ? m._followee().cancel() : m._cancelBranched();
            break;
          }
          var d = c._cancellationParent;
          if (d == null || !d._isCancellable()) {
            c._isFollowing() ? c._followee().cancel() : c._cancelBranched();
            break;
          } else (c._isFollowing() && c._followee().cancel(), c._setWillBeCancelled(), (m = c), (c = d));
        }
      }),
      (t.prototype._branchHasCancelled = function () {
        this._branchesRemainingToCancel--;
      }),
      (t.prototype._enoughBranchesHaveCancelled = function () {
        return this._branchesRemainingToCancel === void 0 || this._branchesRemainingToCancel <= 0;
      }),
      (t.prototype._cancelBy = function (c) {
        return c === this
          ? ((this._branchesRemainingToCancel = 0), this._invokeOnCancel(), !0)
          : (this._branchHasCancelled(), this._enoughBranchesHaveCancelled() ? (this._invokeOnCancel(), !0) : !1);
      }),
      (t.prototype._cancelBranched = function () {
        this._enoughBranchesHaveCancelled() && this._cancel();
      }),
      (t.prototype._cancel = function () {
        this._isCancellable() && (this._setCancelled(), u.invoke(this._cancelPromises, this, void 0));
      }),
      (t.prototype._cancelPromises = function () {
        this._length() > 0 && this._settlePromises();
      }),
      (t.prototype._unsetOnCancel = function () {
        this._onCancelField = void 0;
      }),
      (t.prototype._isCancellable = function () {
        return this.isPending() && !this._isCancelled();
      }),
      (t.prototype.isCancellable = function () {
        return this.isPending() && !this.isCancelled();
      }),
      (t.prototype._doInvokeOnCancel = function (c, m) {
        if (o.isArray(c)) for (var d = 0; d < c.length; ++d) this._doInvokeOnCancel(c[d], m);
        else if (c !== void 0)
          if (typeof c == "function") {
            if (!m) {
              var f = s(c).call(this._boundValue());
              f === a && (this._attachExtraTrace(f.e), u.throwLater(f.e));
            }
          } else c._resultCancelled(this);
      }),
      (t.prototype._invokeOnCancel = function () {
        var c = this._onCancel();
        (this._unsetOnCancel(), u.invoke(this._doInvokeOnCancel, this, c));
      }),
      (t.prototype._invokeInternalOnCancel = function () {
        this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel());
      }),
      (t.prototype._resultCancelled = function () {
        this.cancel();
      }));
  };
});