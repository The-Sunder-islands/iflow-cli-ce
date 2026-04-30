/**
 * @module fwr
 * @category unknown
 * @label unknown
 * @position 8 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (fwr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var fwr = T((Jm) => {
  "use strict";
  function F8t(t, e) {
    var r = t.length;
    t.push(e);
    e: for (; 0 < r; ) {
      var n = (r - 1) >>> 1,
        o = t[n];
      if (0 < K7e(o, e)) ((t[n] = e), (t[r] = o), (r = n));
      else break e;
    }
  }
  function Kw(t) {
    return t.length === 0 ? null : t[0];
  }
  function X7e(t) {
    if (t.length === 0) return null;
    var e = t[0],
      r = t.pop();
    if (r !== e) {
      t[0] = r;
      e: for (var n = 0, o = t.length, s = o >>> 1; n < s; ) {
        var a = 2 * (n + 1) - 1,
          u = t[a],
          c = a + 1,
          m = t[c];
        if (0 > K7e(u, r))
          c < o && 0 > K7e(m, u) ? ((t[n] = m), (t[c] = r), (n = c)) : ((t[n] = u), (t[a] = r), (n = a));
        else if (c < o && 0 > K7e(m, r)) ((t[n] = m), (t[c] = r), (n = c));
        else break e;
      }
    }
    return e;
  }
  function K7e(t, e) {
    var r = t.sortIndex - e.sortIndex;
    return r !== 0 ? r : t.id - e.id;
  }
  Jm.unstable_now = void 0;
  typeof performance == "object" && typeof performance.now == "function"
    ? ((iwr = performance),
      (Jm.unstable_now = function () {
        return iwr.now();
      }))
    : ((B8t = Date),
      (owr = B8t.now()),
      (Jm.unstable_now = function () {
        return B8t.now() - owr;
      }));
  var iwr,
    B8t,
    owr,
    X7 = [],
    ZP = [],
    Gco = 1,
    a_ = null,
    pb = 3,
    U8t = !1,
    Che = !1,
    She = !1,
    $8t = !1,
    uwr = typeof setTimeout == "function" ? setTimeout : null,
    cwr = typeof clearTimeout == "function" ? clearTimeout : null,
    swr = typeof setImmediate < "u" ? setImmediate : null;
  function J7e(t) {
    for (var e = Kw(ZP); e !== null; ) {
      if (e.callback === null) X7e(ZP);
      else if (e.startTime <= t) (X7e(ZP), (e.sortIndex = e.expirationTime), F8t(X7, e));
      else break;
      e = Kw(ZP);
    }
  }
  function j8t(t) {
    if (((She = !1), J7e(t), !Che))
      if (Kw(X7) !== null) ((Che = !0), eee || ((eee = !0), ZZ()));
      else {
        var e = Kw(ZP);
        e !== null && Q8t(j8t, e.startTime - t);
      }
  }
  var eee = !1,
    whe = -1,
    lwr = 5,
    mwr = -1;
  function dwr() {
    return $8t ? !0 : !(Jm.unstable_now() - mwr < lwr);
  }
  function L8t() {
    if ((($8t = !1), eee)) {
      var t = Jm.unstable_now();
      mwr = t;
      var e = !0;
      try {
        e: {
          ((Che = !1), She && ((She = !1), cwr(whe), (whe = -1)), (U8t = !0));
          var r = pb;
          try {
            t: {
              for (J7e(t), a_ = Kw(X7); a_ !== null && !(a_.expirationTime > t && dwr()); ) {
                var n = a_.callback;
                if (typeof n == "function") {
                  ((a_.callback = null), (pb = a_.priorityLevel));
                  var o = n(a_.expirationTime <= t);
                  if (((t = Jm.unstable_now()), typeof o == "function")) {
                    ((a_.callback = o), J7e(t), (e = !0));
                    break t;
                  }
                  (a_ === Kw(X7) && X7e(X7), J7e(t));
                } else X7e(X7);
                a_ = Kw(X7);
              }
              if (a_ !== null) e = !0;
              else {
                var s = Kw(ZP);
                (s !== null && Q8t(j8t, s.startTime - t), (e = !1));
              }
            }
            break e;
          } finally {
            ((a_ = null), (pb = r), (U8t = !1));
          }
          e = void 0;
        }
      } finally {
        e ? ZZ() : (eee = !1);
      }
    }
  }
  var ZZ;
  typeof swr == "function"
    ? (ZZ = function () {
        swr(L8t);
      })
    : typeof MessageChannel < "u"
      ? ((M8t = new MessageChannel()),
        (awr = M8t.port2),
        (M8t.port1.onmessage = L8t),
        (ZZ = function () {
          awr.postMessage(null);
        }))
      : (ZZ = function () {
          uwr(L8t, 0);
        });
  var M8t, awr;
  function Q8t(t, e) {
    whe = uwr(function () {
      t(Jm.unstable_now());
    }, e);
  }
  Jm.unstable_IdlePriority = 5;
  Jm.unstable_ImmediatePriority = 1;
  Jm.unstable_LowPriority = 4;
  Jm.unstable_NormalPriority = 3;
  Jm.unstable_Profiling = null;
  Jm.unstable_UserBlockingPriority = 2;
  Jm.unstable_cancelCallback = function (t) {
    t.callback = null;
  };
  Jm.unstable_forceFrameRate = function (t) {
    0 > t || 125 < t
      ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
        )
      : (lwr = 0 < t ? Math.floor(1e3 / t) : 5);
  };
  Jm.unstable_getCurrentPriorityLevel = function () {
    return pb;
  };
  Jm.unstable_next = function (t) {
    switch (pb) {
      case 1:
      case 2:
      case 3:
        var e = 3;
        break;
      default:
        e = pb;
    }
    var r = pb;
    pb = e;
    try {
      return t();
    } finally {
      pb = r;
    }
  };
  Jm.unstable_requestPaint = function () {
    $8t = !0;
  };
  Jm.unstable_runWithPriority = function (t, e) {
    switch (t) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        t = 3;
    }
    var r = pb;
    pb = t;
    try {
      return e();
    } finally {
      pb = r;
    }
  };
  Jm.unstable_scheduleCallback = function (t, e, r) {
    var n = Jm.unstable_now();
    switch (
      (typeof r == "object" && r !== null ? ((r = r.delay), (r = typeof r == "number" && 0 < r ? n + r : n)) : (r = n),
      t)
    ) {
      case 1:
        var o = -1;
        break;
      case 2:
        o = 250;
        break;
      case 5:
        o = 1073741823;
        break;
      case 4:
        o = 1e4;
        break;
      default:
        o = 5e3;
    }
    return (
      (o = r + o),
      (t = { id: Gco++, callback: e, priorityLevel: t, startTime: r, expirationTime: o, sortIndex: -1 }),
      r > n
        ? ((t.sortIndex = r),
          F8t(ZP, t),
          Kw(X7) === null && t === Kw(ZP) && (She ? (cwr(whe), (whe = -1)) : (She = !0), Q8t(j8t, r - n)))
        : ((t.sortIndex = o), F8t(X7, t), Che || U8t || ((Che = !0), eee || ((eee = !0), ZZ()))),
      t
    );
  };
  Jm.unstable_shouldYield = dwr;
  Jm.unstable_wrapCallback = function (t) {
    var e = pb;
    return function () {
      var r = pb;
      pb = e;
      try {
        return t.apply(this, arguments);
      } finally {
        pb = r;
      }
    };
  };
});