/**
 * @module wyt
 * @category utils/crypto
 * @label crypto
 * @position 90 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wyt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wyt = T((X4u, ukr) => {
  var $ee = EG().Buffer,
    y_ = Ae("crypto"),
    tkr = syt(),
    ekr = Ae("util"),
    who = `"%s" is not a valid algorithm.
  Supported algorithms are:
  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".`,
    b3e = "secret must be a string or buffer",
    Uee = "key must be a string or a buffer",
    xho = "key must be a string, a buffer or an object",
    Cyt = typeof y_.createPublicKey == "function";
  Cyt && ((Uee += " or a KeyObject"), (b3e += "or a KeyObject"));
  function rkr(t) {
    if (
      !$ee.isBuffer(t) &&
      typeof t != "string" &&
      (!Cyt ||
        typeof t != "object" ||
        typeof t.type != "string" ||
        typeof t.asymmetricKeyType != "string" ||
        typeof t.export != "function")
    )
      throw kC(Uee);
  }
  function nkr(t) {
    if (!$ee.isBuffer(t) && typeof t != "string" && typeof t != "object") throw kC(xho);
  }
  function Tho(t) {
    if (!$ee.isBuffer(t)) {
      if (typeof t == "string") return t;
      if (!Cyt || typeof t != "object" || t.type !== "secret" || typeof t.export != "function") throw kC(b3e);
    }
  }
  function Syt(t) {
    return t.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function ikr(t) {
    t = t.toString();
    var e = 4 - (t.length % 4);
    if (e !== 4) for (var r = 0; r < e; ++r) t += "=";
    return t.replace(/\-/g, "+").replace(/_/g, "/");
  }
  function kC(t) {
    var e = [].slice.call(arguments, 1),
      r = ekr.format.bind(ekr, t).apply(null, e);
    return new TypeError(r);
  }
  function Dho(t) {
    return $ee.isBuffer(t) || typeof t == "string";
  }
  function A3e(t) {
    return (Dho(t) || (t = JSON.stringify(t)), t);
  }
  function okr(t) {
    return function (r, n) {
      (Tho(n), (r = A3e(r)));
      var o = y_.createHmac("sha" + t, n),
        s = (o.update(r), o.digest("base64"));
      return Syt(s);
    };
  }
  var vyt,
    Iho =
      "timingSafeEqual" in y_
        ? function (e, r) {
            return e.byteLength !== r.byteLength ? !1 : y_.timingSafeEqual(e, r);
          }
        : function (e, r) {
            return (vyt || (vyt = ZRr()), vyt(e, r));
          };
  function Rho(t) {
    return function (r, n, o) {
      var s = okr(t)(r, o);
      return Iho($ee.from(n), $ee.from(s));
    };
  }
  function skr(t) {
    return function (r, n) {
      (nkr(n), (r = A3e(r)));
      var o = y_.createSign("RSA-SHA" + t),
        s = (o.update(r), o.sign(n, "base64"));
      return Syt(s);
    };
  }
  function akr(t) {
    return function (r, n, o) {
      (rkr(o), (r = A3e(r)), (n = ikr(n)));
      var s = y_.createVerify("RSA-SHA" + t);
      return (s.update(r), s.verify(o, n, "base64"));
    };
  }
  function kho(t) {
    return function (r, n) {
      (nkr(n), (r = A3e(r)));
      var o = y_.createSign("RSA-SHA" + t),
        s =
          (o.update(r),
          o.sign(
            { key: n, padding: y_.constants.RSA_PKCS1_PSS_PADDING, saltLength: y_.constants.RSA_PSS_SALTLEN_DIGEST },
            "base64",
          ));
      return Syt(s);
    };
  }
  function Oho(t) {
    return function (r, n, o) {
      (rkr(o), (r = A3e(r)), (n = ikr(n)));
      var s = y_.createVerify("RSA-SHA" + t);
      return (
        s.update(r),
        s.verify(
          { key: o, padding: y_.constants.RSA_PKCS1_PSS_PADDING, saltLength: y_.constants.RSA_PSS_SALTLEN_DIGEST },
          n,
          "base64",
        )
      );
    };
  }
  function Nho(t) {
    var e = skr(t);
    return function () {
      var n = e.apply(null, arguments);
      return ((n = tkr.derToJose(n, "ES" + t)), n);
    };
  }
  function Pho(t) {
    var e = akr(t);
    return function (n, o, s) {
      o = tkr.joseToDer(o, "ES" + t).toString("base64");
      var a = e(n, o, s);
      return a;
    };
  }
  function Bho() {
    return function () {
      return "";
    };
  }
  function Lho() {
    return function (e, r) {
      return r === "";
    };
  }
  ukr.exports = function (e) {
    var r = { hs: okr, rs: skr, ps: kho, es: Nho, none: Bho },
      n = { hs: Rho, rs: akr, ps: Oho, es: Pho, none: Lho },
      o = e.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
    if (!o) throw kC(who, e);
    var s = (o[1] || o[3]).toLowerCase(),
      a = o[2];
    return { sign: r[s](a), verify: n[s](a) };
  };
});