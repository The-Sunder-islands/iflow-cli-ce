/**
 * @module m3e
 * @category utils/oop
 * @label oop
 * @position 70 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (m3e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var m3e = T((Po) => {
  "use strict";
  var hpo =
      (Po && Po.__createBinding) ||
      (Object.create
        ? function (t, e, r, n) {
            n === void 0 && (n = r);
            var o = Object.getOwnPropertyDescriptor(e, r);
            ((!o || ("get" in o ? !e.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return e[r];
                },
              }),
              Object.defineProperty(t, n, o));
          }
        : function (t, e, r, n) {
            (n === void 0 && (n = r), (t[n] = e[r]));
          }),
    gpo =
      (Po && Po.__exportStar) ||
      function (t, e) {
        for (var r in t) r !== "default" && !Object.prototype.hasOwnProperty.call(e, r) && hpo(e, t, r);
      };
  Object.defineProperty(Po, "__esModule", { value: !0 });
  Po.gcpResidencyCache =
    Po.METADATA_SERVER_DETECTION =
    Po.HEADERS =
    Po.HEADER_VALUE =
    Po.HEADER_NAME =
    Po.SECONDARY_HOST_ADDRESS =
    Po.HOST_ADDRESS =
    Po.BASE_PATH =
      void 0;
  Po.instance = vpo;
  Po.project = Cpo;
  Po.universe = Spo;
  Po.bulk = wpo;
  Po.isAvailable = Tpo;
  Po.resetIsAvailableCache = Dpo;
  Po.getGCPResidency = J6t;
  Po.setGCPResidency = xRr;
  Po.requestTimeout = TRr;
  var Y6t = xC(),
    bpo = dRr(),
    Apo = q6t(),
    ypo = SRr();
  Po.BASE_PATH = "/computeMetadata/v1";
  Po.HOST_ADDRESS = "http://169.254.169.254";
  Po.SECONDARY_HOST_ADDRESS = "http://metadata.google.internal.";
  Po.HEADER_NAME = "Metadata-Flavor";
  Po.HEADER_VALUE = "Google";
  Po.HEADERS = Object.freeze({ [Po.HEADER_NAME]: Po.HEADER_VALUE });
  var wRr = ypo.log("gcp metadata");
  Po.METADATA_SERVER_DETECTION = Object.freeze({
    "assume-present": "don't try to ping the metadata server, but assume it's present",
    none: "don't try to ping the metadata server, but don't try to use it either",
    "bios-only": "treat the result of a BIOS probe as canonical (don't fall back to pinging)",
    "ping-only": "skip the BIOS probe, and go straight to pinging",
  });
  function K6t(t) {
    return (
      t || (t = process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST || Po.HOST_ADDRESS),
      /^https?:\/\//.test(t) || (t = `http://${t}`),
      new URL(Po.BASE_PATH, t).href
    );
  }
  function _po(t) {
    Object.keys(t).forEach((e) => {
      switch (e) {
        case "params":
        case "property":
        case "headers":
          break;
        case "qs":
          throw new Error("'qs' is not a valid configuration option. Please use 'params' instead.");
        default:
          throw new Error(`'${e}' is not a valid configuration option.`);
      }
    });
  }
  async function l3e(t, e = {}, r = 3, n = !1) {
    let o = "",
      s = {},
      a = {};
    if (typeof t == "object") {
      let d = t;
      ((o = d.metadataKey),
        (s = d.params || s),
        (a = d.headers || a),
        (r = d.noResponseRetries || r),
        (n = d.fastFail || n));
    } else o = t;
    typeof e == "string"
      ? (o += `/${e}`)
      : (_po(e), e.property && (o += `/${e.property}`), (a = e.headers || a), (s = e.params || s));
    let u = n ? Epo : Y6t.request,
      c = {
        url: `${K6t()}/${o}`,
        headers: { ...Po.HEADERS, ...a },
        retryConfig: { noResponseRetries: r },
        params: s,
        responseType: "text",
        timeout: TRr(),
      };
    wRr.info("instance request %j", c);
    let m = await u(c);
    if ((wRr.info("instance metadata is %s", m.data), m.headers[Po.HEADER_NAME.toLowerCase()] !== Po.HEADER_VALUE))
      throw new Error(
        `Invalid response from metadata service: incorrect ${Po.HEADER_NAME} header. Expected '${Po.HEADER_VALUE}', got ${m.headers[Po.HEADER_NAME.toLowerCase()] ? `'${m.headers[Po.HEADER_NAME.toLowerCase()]}'` : "no header"}`,
      );
    if (typeof m.data == "string")
      try {
        return bpo.parse(m.data);
      } catch {}
    return m.data;
  }
  async function Epo(t) {
    var e;
    let r = {
        ...t,
        url:
          (e = t.url) === null || e === void 0 ? void 0 : e.toString().replace(K6t(), K6t(Po.SECONDARY_HOST_ADDRESS)),
      },
      n = !1,
      o = (0, Y6t.request)(t)
        .then((a) => ((n = !0), a))
        .catch((a) => {
          if (n) return s;
          throw ((n = !0), a);
        }),
      s = (0, Y6t.request)(r)
        .then((a) => ((n = !0), a))
        .catch((a) => {
          if (n) return o;
          throw ((n = !0), a);
        });
    return Promise.race([o, s]);
  }
  function vpo(t) {
    return l3e("instance", t);
  }
  function Cpo(t) {
    return l3e("project", t);
  }
  function Spo(t) {
    return l3e("universe", t);
  }
  async function wpo(t) {
    let e = {};
    return (
      await Promise.all(
        t.map((r) =>
          (async () => {
            let n = await l3e(r),
              o = r.metadataKey;
            e[o] = n;
          })(),
        ),
      ),
      e
    );
  }
  function xpo() {
    return process.env.DETECT_GCP_RETRIES ? Number(process.env.DETECT_GCP_RETRIES) : 0;
  }
  var xke;
  async function Tpo() {
    if (process.env.METADATA_SERVER_DETECTION) {
      let t = process.env.METADATA_SERVER_DETECTION.trim().toLocaleLowerCase();
      if (!(t in Po.METADATA_SERVER_DETECTION))
        throw new RangeError(
          `Unknown \`METADATA_SERVER_DETECTION\` env variable. Got \`${t}\`, but it should be \`${Object.keys(Po.METADATA_SERVER_DETECTION).join("`, `")}\`, or unset`,
        );
      switch (t) {
        case "assume-present":
          return !0;
        case "none":
          return !1;
        case "bios-only":
          return J6t();
        case "ping-only":
      }
    }
    try {
      return (
        xke === void 0 &&
          (xke = l3e("instance", void 0, xpo(), !(process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST))),
        await xke,
        !0
      );
    } catch (t) {
      let e = t;
      if (
        (process.env.DEBUG_AUTH && console.info(e),
        e.type === "request-timeout" || (e.response && e.response.status === 404))
      )
        return !1;
      if (
        !(e.response && e.response.status === 404) &&
        (!e.code ||
          !["EHOSTDOWN", "EHOSTUNREACH", "ENETUNREACH", "ENOENT", "ENOTFOUND", "ECONNREFUSED"].includes(e.code))
      ) {
        let r = "UNKNOWN";
        (e.code && (r = e.code),
          process.emitWarning(`received unexpected error = ${e.message} code = ${r}`, "MetadataLookupWarning"));
      }
      return !1;
    }
  }
  function Dpo() {
    xke = void 0;
  }
  Po.gcpResidencyCache = null;
  function J6t() {
    return (Po.gcpResidencyCache === null && xRr(), Po.gcpResidencyCache);
  }
  function xRr(t = null) {
    Po.gcpResidencyCache = t !== null ? t : (0, Apo.detectGCPResidency)();
  }
  function TRr() {
    return J6t() ? 0 : 3e3;
  }
  gpo(q6t(), Po);
});