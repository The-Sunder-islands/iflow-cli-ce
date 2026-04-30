/**
 * @module aI
 * @category utils/oop
 * @label oop
 * @position 1776 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aI) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aI = T((u5) => {
  "use strict";
  var mwe = dbr(),
    Z9i = fbr(),
    pbr = J9i(),
    wmt = Ae("path"),
    xmt = yN(),
    ede = X9i(),
    t6i = "AWS_PROFILE",
    r6i = "default",
    _Na = (t) => t.profile || process.env[t6i] || r6i,
    CK = ".",
    ENa = (t) =>
      Object.entries(t)
        .filter(([e]) => {
          let r = e.indexOf(CK);
          return r === -1 ? !1 : Object.values(xmt.IniSectionType).includes(e.substring(0, r));
        })
        .reduce(
          (e, [r, n]) => {
            let o = r.indexOf(CK),
              s = r.substring(0, o) === xmt.IniSectionType.PROFILE ? r.substring(o + 1) : r;
            return ((e[s] = n), e);
          },
          { ...(t.default && { default: t.default }) },
        ),
    vNa = "AWS_CONFIG_FILE",
    n6i = () => process.env[vNa] || wmt.join(mwe.getHomeDir(), ".aws", "config"),
    CNa = "AWS_SHARED_CREDENTIALS_FILE",
    SNa = () => process.env[CNa] || wmt.join(mwe.getHomeDir(), ".aws", "credentials"),
    wNa = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/,
    xNa = ["__proto__", "profile __proto__"],
    hbr = (t) => {
      let e = {},
        r,
        n;
      for (let o of t.split(/\r?\n/)) {
        let s = o.split(/(^|\s)[;#]/)[0].trim();
        if (s[0] === "[" && s[s.length - 1] === "]") {
          ((r = void 0), (n = void 0));
          let u = s.substring(1, s.length - 1),
            c = wNa.exec(u);
          if (c) {
            let [, m, , d] = c;
            Object.values(xmt.IniSectionType).includes(m) && (r = [m, d].join(CK));
          } else r = u;
          if (xNa.includes(u)) throw new Error(`Found invalid profile name "${u}"`);
        } else if (r) {
          let u = s.indexOf("=");
          if (![0, -1].includes(u)) {
            let [c, m] = [s.substring(0, u).trim(), s.substring(u + 1).trim()];
            if (m === "") n = c;
            else {
              (n && o.trimStart() === o && (n = void 0), (e[r] = e[r] || {}));
              let d = n ? [n, c].join(CK) : c;
              e[r][d] = m;
            }
          }
        }
      }
      return e;
    },
    e6i = () => ({}),
    i6i = async (t = {}) => {
      let { filepath: e = SNa(), configFilepath: r = n6i() } = t,
        n = mwe.getHomeDir(),
        o = "~/",
        s = e;
      e.startsWith(o) && (s = wmt.join(n, e.slice(2)));
      let a = r;
      r.startsWith(o) && (a = wmt.join(n, r.slice(2)));
      let u = await Promise.all([
        ede.readFile(a, { ignoreCache: t.ignoreCache }).then(hbr).then(ENa).catch(e6i),
        ede.readFile(s, { ignoreCache: t.ignoreCache }).then(hbr).catch(e6i),
      ]);
      return { configFile: u[0], credentialsFile: u[1] };
    },
    TNa = (t) =>
      Object.entries(t)
        .filter(([e]) => e.startsWith(xmt.IniSectionType.SSO_SESSION + CK))
        .reduce((e, [r, n]) => ({ ...e, [r.substring(r.indexOf(CK) + 1)]: n }), {}),
    DNa = () => ({}),
    INa = async (t = {}) =>
      ede
        .readFile(t.configFilepath ?? n6i())
        .then(hbr)
        .then(TNa)
        .catch(DNa),
    RNa = (...t) => {
      let e = {};
      for (let r of t) for (let [n, o] of Object.entries(r)) e[n] !== void 0 ? Object.assign(e[n], o) : (e[n] = o);
      return e;
    },
    kNa = async (t) => {
      let e = await i6i(t);
      return RNa(e.configFile, e.credentialsFile);
    },
    ONa = {
      getFileRecord() {
        return ede.fileIntercept;
      },
      interceptFile(t, e) {
        ede.fileIntercept[t] = Promise.resolve(e);
      },
      getTokenRecord() {
        return pbr.tokenIntercept;
      },
      interceptToken(t, e) {
        pbr.tokenIntercept[t] = e;
      },
    };
  Object.defineProperty(u5, "getSSOTokenFromFile", {
    enumerable: !0,
    get: function () {
      return pbr.getSSOTokenFromFile;
    },
  });
  Object.defineProperty(u5, "readFile", {
    enumerable: !0,
    get: function () {
      return ede.readFile;
    },
  });
  u5.CONFIG_PREFIX_SEPARATOR = CK;
  u5.DEFAULT_PROFILE = r6i;
  u5.ENV_PROFILE = t6i;
  u5.externalDataInterceptor = ONa;
  u5.getProfileName = _Na;
  u5.loadSharedConfigFiles = i6i;
  u5.loadSsoSessionData = INa;
  u5.parseKnownFiles = kNa;
  Object.keys(mwe).forEach(function (t) {
    t !== "default" &&
      !Object.prototype.hasOwnProperty.call(u5, t) &&
      Object.defineProperty(u5, t, {
        enumerable: !0,
        get: function () {
          return mwe[t];
        },
      });
  });
  Object.keys(Z9i).forEach(function (t) {
    t !== "default" &&
      !Object.prototype.hasOwnProperty.call(u5, t) &&
      Object.defineProperty(u5, t, {
        enumerable: !0,
        get: function () {
          return Z9i[t];
        },
      });
  });
});