/**
 * @module heo
 * @category utils/config
 * @label config
 * @position 1933 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (heo) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var heo = T((Axl, peo) => {
  var ueo = aeo(),
    ceo = ":_authToken",
    leo = ":_auth",
    meo = ":username",
    deo = ":_password";
  peo.exports = function () {
    let e, r;
    (arguments.length >= 2
      ? ((e = arguments[0]), (r = Object.assign({}, arguments[1])))
      : typeof arguments[0] == "string"
        ? (e = arguments[0])
        : (r = Object.assign({}, arguments[0])),
      (r = r || {}));
    let n = r.npmrc;
    return (
      (r.npmrc = (r.npmrc ? { config: { get: (o) => n[o] } } : ueo()).config),
      (e = e || r.npmrc.get("registry") || ueo.defaults.registry),
      feo(e, r) || Fpu(r.npmrc)
    );
  };
  function Mpu(t, e) {
    let r = new URL(e, new URL(t.startsWith("//") ? `./${t}` : t, "resolve://"));
    if (r.protocol === "resolve:") {
      let { pathname: n, search: o, hash: s } = r;
      return n + o + s;
    }
    return r.toString();
  }
  function feo(t, e) {
    let r = t instanceof URL ? t : new URL(t.startsWith("//") ? `http:${t}` : t),
      n;
    for (; n !== "/" && r.pathname !== n; ) {
      n = r.pathname || "/";
      let o = "//" + r.host + n.replace(/\/$/, ""),
        s = $pu(o, e.npmrc);
      if (s) return s;
      if (!e.recursive) return /\/$/.test(t) ? void 0 : feo(new URL("./", r), e);
      r.pathname = Mpu(Upu(n), "..") || "/";
    }
  }
  function Fpu(t) {
    return t.get("_auth") ? { token: nAt(t.get("_auth")), type: "Basic" } : void 0;
  }
  function Upu(t) {
    return t[t.length - 1] === "/" ? t : t + "/";
  }
  function $pu(t, e) {
    let r = jpu(e.get(t + ceo) || e.get(t + "/" + ceo));
    if (r) return r;
    let n = e.get(t + meo) || e.get(t + "/" + meo),
      o = e.get(t + deo) || e.get(t + "/" + deo),
      s = Qpu(n, o);
    if (s) return s;
    let a = Gpu(e.get(t + leo) || e.get(t + "/" + leo));
    if (a) return a;
  }
  function nAt(t) {
    return t.replace(/^\$\{?([^}]*)\}?$/, function (e, r) {
      return process.env[r];
    });
  }
  function jpu(t) {
    return t ? { token: nAt(t), type: "Bearer" } : void 0;
  }
  function Qpu(t, e) {
    if (!t || !e) return;
    let r = Buffer.from(nAt(e), "base64").toString("utf8");
    return { token: Buffer.from(t + ":" + r, "utf8").toString("base64"), type: "Basic", password: r, username: t };
  }
  function Gpu(t) {
    return t ? { token: nAt(t), type: "Basic" } : void 0;
  }
});