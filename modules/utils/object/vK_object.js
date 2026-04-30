/**
 * @module vK
 * @category utils/object
 * @label object
 * @position 1768 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vK) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vK = T((Xme) => {
  "use strict";
  var IOa = (EA(), bt(hK)),
    ROa = EK(),
    kOa = Tc(),
    sI = (Wp(), bt(iI)),
    P9i = void 0;
  function OOa(t) {
    return t === void 0 ? !0 : typeof t == "string" && t.length <= 50;
  }
  function NOa(t) {
    let e = IOa.normalizeProvider(t.userAgentAppId ?? P9i),
      { customUserAgent: r } = t;
    return Object.assign(t, {
      customUserAgent: typeof r == "string" ? [[r]] : r,
      userAgentAppId: async () => {
        let n = await e();
        if (!OOa(n)) {
          let o = t.logger?.constructor?.name === "NoOpLogger" || !t.logger ? console : t.logger;
          typeof n != "string"
            ? o?.warn("userAgentAppId must be a string or undefined.")
            : n.length > 50 && o?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
        }
        return n;
      },
    });
  }
  var POa = /\d{12}\.ddb/;
  async function BOa(t, e, r) {
    if (
      (r.request?.headers?.["smithy-protocol"] === "rpc-v2-cbor" && sI.setFeature(t, "PROTOCOL_RPC_V2_CBOR", "M"),
      typeof e.retryStrategy == "function")
    ) {
      let s = await e.retryStrategy();
      typeof s.acquireInitialRetryToken == "function"
        ? s.constructor?.name?.includes("Adaptive")
          ? sI.setFeature(t, "RETRY_MODE_ADAPTIVE", "F")
          : sI.setFeature(t, "RETRY_MODE_STANDARD", "E")
        : sI.setFeature(t, "RETRY_MODE_LEGACY", "D");
    }
    if (typeof e.accountIdEndpointMode == "function") {
      let s = t.endpointV2;
      switch (
        (String(s?.url?.hostname).match(POa) && sI.setFeature(t, "ACCOUNT_ID_ENDPOINT", "O"),
        await e.accountIdEndpointMode?.())
      ) {
        case "disabled":
          sI.setFeature(t, "ACCOUNT_ID_MODE_DISABLED", "Q");
          break;
        case "preferred":
          sI.setFeature(t, "ACCOUNT_ID_MODE_PREFERRED", "P");
          break;
        case "required":
          sI.setFeature(t, "ACCOUNT_ID_MODE_REQUIRED", "R");
          break;
      }
    }
    let o = t.__smithy_context?.selectedHttpAuthScheme?.identity;
    if (o?.$source) {
      let s = o;
      s.accountId && sI.setFeature(t, "RESOLVED_ACCOUNT_ID", "T");
      for (let [a, u] of Object.entries(s.$source ?? {})) sI.setFeature(t, a, u);
    }
  }
  var k9i = "user-agent",
    cbr = "x-amz-user-agent",
    O9i = " ",
    lbr = "/",
    LOa = /[^!$%&'*+\-.^_`|~\w]/g,
    MOa = /[^!$%&'*+\-.^_`|~\w#]/g,
    N9i = "-",
    FOa = 1024;
  function UOa(t) {
    let e = "";
    for (let r in t) {
      let n = t[r];
      if (e.length + n.length + 1 <= FOa) {
        e.length ? (e += "," + n) : (e += n);
        continue;
      }
      break;
    }
    return e;
  }
  var B9i = (t) => (e, r) => async (n) => {
      let { request: o } = n;
      if (!kOa.HttpRequest.isInstance(o)) return e(n);
      let { headers: s } = o,
        a = r?.userAgent?.map(_mt) || [],
        u = (await t.defaultUserAgentProvider()).map(_mt);
      await BOa(r, t, n);
      let c = r;
      u.push(`m/${UOa(Object.assign({}, r.__smithy_context?.features, c.__aws_sdk_context?.features))}`);
      let m = t?.customUserAgent?.map(_mt) || [],
        d = await t.userAgentAppId();
      d && u.push(_mt(["app", `${d}`]));
      let f = ROa.getUserAgentPrefix(),
        p = (f ? [f] : []).concat([...u, ...a, ...m]).join(O9i),
        h = [...u.filter((g) => g.startsWith("aws-sdk-")), ...m].join(O9i);
      return (
        t.runtime !== "browser" ? (h && (s[cbr] = s[cbr] ? `${s[k9i]} ${h}` : h), (s[k9i] = p)) : (s[cbr] = p),
        e({ ...n, request: o })
      );
    },
    _mt = (t) => {
      let e = t[0]
          .split(lbr)
          .map((a) => a.replace(LOa, N9i))
          .join(lbr),
        r = t[1]?.replace(MOa, N9i),
        n = e.indexOf(lbr),
        o = e.substring(0, n),
        s = e.substring(n + 1);
      return (
        o === "api" && (s = s.toLowerCase()),
        [o, s, r]
          .filter((a) => a && a.length > 0)
          .reduce((a, u, c) => {
            switch (c) {
              case 0:
                return u;
              case 1:
                return `${a}/${u}`;
              default:
                return `${a}#${u}`;
            }
          }, "")
      );
    },
    L9i = {
      name: "getUserAgentMiddleware",
      step: "build",
      priority: "low",
      tags: ["SET_USER_AGENT", "USER_AGENT"],
      override: !0,
    },
    $Oa = (t) => ({
      applyToStack: (e) => {
        e.add(B9i(t), L9i);
      },
    });
  Xme.DEFAULT_UA_APP_ID = P9i;
  Xme.getUserAgentMiddlewareOptions = L9i;
  Xme.getUserAgentPlugin = $Oa;
  Xme.resolveUserAgentConfig = NOa;
  Xme.userAgentMiddleware = B9i;
});