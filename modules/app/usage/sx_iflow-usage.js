/**
 * @module sx
 * @category app/usage
 * @label iflow-usage
 * @position 82 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (sx) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var sx = T((RC) => {
  "use strict";
  Object.defineProperty(RC, "__esModule", { value: !0 });
  RC.AuthClient = RC.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = RC.DEFAULT_UNIVERSE = void 0;
  var nho = Ae("events"),
    VRr = xC(),
    WRr = f3e(),
    iho = mB();
  RC.DEFAULT_UNIVERSE = "googleapis.com";
  RC.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = 300 * 1e3;
  var lyt = class extends nho.EventEmitter {
    constructor(e = {}) {
      var r, n, o, s, a;
      (super(),
        (this.credentials = {}),
        (this.eagerRefreshThresholdMillis = RC.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS),
        (this.forceRefreshOnFailure = !1),
        (this.universeDomain = RC.DEFAULT_UNIVERSE));
      let u = (0, iho.originalOrCamelOptions)(e);
      ((this.apiKey = e.apiKey),
        (this.projectId = (r = u.get("project_id")) !== null && r !== void 0 ? r : null),
        (this.quotaProjectId = u.get("quota_project_id")),
        (this.credentials = (n = u.get("credentials")) !== null && n !== void 0 ? n : {}),
        (this.universeDomain = (o = u.get("universe_domain")) !== null && o !== void 0 ? o : RC.DEFAULT_UNIVERSE),
        (this.transporter = (s = e.transporter) !== null && s !== void 0 ? s : new WRr.DefaultTransporter()),
        e.transporterOptions && (this.transporter.defaults = e.transporterOptions),
        e.eagerRefreshThresholdMillis && (this.eagerRefreshThresholdMillis = e.eagerRefreshThresholdMillis),
        (this.forceRefreshOnFailure = (a = e.forceRefreshOnFailure) !== null && a !== void 0 ? a : !1));
    }
    get gaxios() {
      return this.transporter instanceof VRr.Gaxios
        ? this.transporter
        : this.transporter instanceof WRr.DefaultTransporter
          ? this.transporter.instance
          : "instance" in this.transporter && this.transporter.instance instanceof VRr.Gaxios
            ? this.transporter.instance
            : null;
    }
    setCredentials(e) {
      this.credentials = e;
    }
    addSharedMetadataHeaders(e) {
      return (!e["x-goog-user-project"] && this.quotaProjectId && (e["x-goog-user-project"] = this.quotaProjectId), e);
    }
    static get RETRY_CONFIG() {
      return { retry: !0, retryConfig: { httpMethodsToRetry: ["GET", "PUT", "POST", "HEAD", "OPTIONS", "DELETE"] } };
    }
  };
  RC.AuthClient = lyt;
});