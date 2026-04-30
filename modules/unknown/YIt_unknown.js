/**
 * @module YIt
 * @category unknown
 * @label unknown
 * @position 540 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (YIt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var YIt = T((R$e) => {
  "use strict";
  Object.defineProperty(R$e, "__esModule", { value: !0 });
  R$e.PrometheusSerializer = void 0;
  var RHo = (Zt(), bt(cr)),
    Oq = Dx(),
    Trn = Ii();
  function I$e(t) {
    return t.replace(/\\/g, "\\\\").replace(/\n/g, "\\n");
  }
  function Drn(t = "") {
    return (typeof t != "string" && (t = JSON.stringify(t)), I$e(t).replace(/"/g, '\\"'));
  }
  var kHo = /[^a-z0-9_]/gi,
    OHo = /_{2,}/g;
  function WIt(t) {
    return t.replace(kHo, "_").replace(OHo, "_");
  }
  function VIt(t, e) {
    return (
      !t.endsWith("_total") && e.dataPointType === Oq.DataPointType.SUM && e.isMonotonic && (t = t + "_total"),
      t
    );
  }
  function NHo(t) {
    return t === 1 / 0 ? "+Inf" : t === -1 / 0 ? "-Inf" : `${t}`;
  }
  function PHo(t) {
    switch (t.dataPointType) {
      case Oq.DataPointType.SUM:
        return t.isMonotonic ? "counter" : "gauge";
      case Oq.DataPointType.GAUGE:
        return "gauge";
      case Oq.DataPointType.HISTOGRAM:
        return "histogram";
      default:
        return "untyped";
    }
  }
  function D$e(t, e, r, n, o) {
    let s = !1,
      a = "";
    for (let [u, c] of Object.entries(e)) {
      let m = WIt(u);
      ((s = !0), (a += `${a.length > 0 ? "," : ""}${m}="${Drn(c)}"`));
    }
    if (o)
      for (let [u, c] of Object.entries(o)) {
        let m = WIt(u);
        ((s = !0), (a += `${a.length > 0 ? "," : ""}${m}="${Drn(c)}"`));
      }
    return (
      s && (t += `{${a}}`),
      `${t} ${NHo(r)}${n !== void 0 ? " " + String(n) : ""}
`
    );
  }
  var BHo = "# no registered metrics",
    zIt = class {
      _prefix;
      _appendTimestamp;
      _additionalAttributes;
      _withResourceConstantLabels;
      constructor(e, r = !1, n) {
        (e && (this._prefix = e + "_"), (this._appendTimestamp = r), (this._withResourceConstantLabels = n));
      }
      serialize(e) {
        let r = "";
        this._additionalAttributes = this._filterResourceConstantLabels(
          e.resource.attributes,
          this._withResourceConstantLabels,
        );
        for (let n of e.scopeMetrics) r += this._serializeScopeMetrics(n);
        return (r === "" && (r += BHo), this._serializeResource(e.resource) + r);
      }
      _filterResourceConstantLabels(e, r) {
        if (r) {
          let n = {};
          for (let [o, s] of Object.entries(e)) o.match(r) && (n[o] = s);
          return n;
        }
      }
      _serializeScopeMetrics(e) {
        let r = "";
        for (let n of e.metrics)
          r +=
            this._serializeMetricData(n) +
            `
`;
        return r;
      }
      _serializeMetricData(e) {
        let r = WIt(I$e(e.descriptor.name));
        this._prefix && (r = `${this._prefix}${r}`);
        let n = e.dataPointType;
        r = VIt(r, e);
        let o = `# HELP ${r} ${I$e(e.descriptor.description || "description missing")}`,
          s = e.descriptor.unit
            ? `
# UNIT ${r} ${I$e(e.descriptor.unit)}`
            : "",
          a = `# TYPE ${r} ${PHo(e)}`,
          u = "";
        switch (n) {
          case Oq.DataPointType.SUM:
          case Oq.DataPointType.GAUGE: {
            u = e.dataPoints.map((c) => this._serializeSingularDataPoint(r, e, c)).join("");
            break;
          }
          case Oq.DataPointType.HISTOGRAM: {
            u = e.dataPoints.map((c) => this._serializeHistogramDataPoint(r, e, c)).join("");
            break;
          }
          default:
            RHo.diag.error(`Unrecognizable DataPointType: ${n} for metric "${r}"`);
        }
        return `${o}${s}
${a}
${u}`.trim();
      }
      _serializeSingularDataPoint(e, r, n) {
        let o = "";
        e = VIt(e, r);
        let { value: s, attributes: a } = n,
          u = (0, Trn.hrTimeToMilliseconds)(n.endTime);
        return ((o += D$e(e, a, s, this._appendTimestamp ? u : void 0, this._additionalAttributes)), o);
      }
      _serializeHistogramDataPoint(e, r, n) {
        let o = "";
        e = VIt(e, r);
        let s = n.attributes,
          a = n.value,
          u = (0, Trn.hrTimeToMilliseconds)(n.endTime);
        for (let f of ["count", "sum"]) {
          let p = a[f];
          p != null && (o += D$e(e + "_" + f, s, p, this._appendTimestamp ? u : void 0, this._additionalAttributes));
        }
        let c = 0,
          m = a.buckets.counts.entries(),
          d = !1;
        for (let [f, p] of m) {
          c += p;
          let h = a.buckets.boundaries[f];
          if (h === void 0 && d) break;
          (h === 1 / 0 && (d = !0),
            (o += D$e(
              e + "_bucket",
              s,
              c,
              this._appendTimestamp ? u : void 0,
              Object.assign({}, this._additionalAttributes ?? {}, {
                le: h === void 0 || h === 1 / 0 ? "+Inf" : String(h),
              }),
            )));
        }
        return o;
      }
      _serializeResource(e) {
        let r = "target_info",
          n = `# HELP ${r} Target metadata`,
          o = `# TYPE ${r} gauge`,
          s = D$e(r, e.attributes, 1).trim();
        return `${n}
${o}
${s}
`;
      }
    };
  R$e.PrometheusSerializer = zIt;
});