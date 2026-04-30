/**
 * @module qUe
 * @category network/grpc
 * @label grpc
 * @position 510 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qUe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qUe = T((f6) => {
  "use strict";
  Object.defineProperty(f6, "__esModule", { value: !0 });
  f6.OrcaOobMetricsSubchannelWrapper =
    f6.GRPC_METRICS_HEADER =
    f6.ServerMetricRecorder =
    f6.PerRequestMetricRecorder =
      void 0;
  f6.createOrcaClient = ttn;
  f6.createMetricsReader = $Qo;
  var PQo = FFe(),
    VDt = Pbe(),
    BQo = Ire(),
    LQo = Obe(),
    Xen = La(),
    MQo = Rre(),
    FQo = f2(),
    Zen = null;
  function GUe() {
    if (Zen) return Zen;
    let t = NTt().loadSync,
      e = t("xds/service/orca/v3/orca.proto", {
        keepCase: !0,
        longs: String,
        enums: String,
        defaults: !0,
        oneofs: !0,
        includeDirs: [`${__dirname}/../../proto/xds`, `${__dirname}/../../proto/protoc-gen-validate`],
      });
    return (0, PQo.loadPackageDefinition)(e);
  }
  var WDt = class {
    constructor() {
      this.message = {};
    }
    recordRequestCostMetric(e, r) {
      (this.message.request_cost || (this.message.request_cost = {}), (this.message.request_cost[e] = r));
    }
    recordUtilizationMetric(e, r) {
      (this.message.utilization || (this.message.utilization = {}), (this.message.utilization[e] = r));
    }
    recordNamedMetric(e, r) {
      (this.message.named_metrics || (this.message.named_metrics = {}), (this.message.named_metrics[e] = r));
    }
    recordCPUUtilizationMetric(e) {
      this.message.cpu_utilization = e;
    }
    recordMemoryUtilizationMetric(e) {
      this.message.mem_utilization = e;
    }
    recordApplicationUtilizationMetric(e) {
      this.message.application_utilization = e;
    }
    recordQpsMetric(e) {
      this.message.rps_fractional = e;
    }
    recordEpsMetric(e) {
      this.message.eps = e;
    }
    serialize() {
      return GUe().xds.data.orca.v3.OrcaLoadReport.serialize(this.message);
    }
  };
  f6.PerRequestMetricRecorder = WDt;
  var UQo = 3e4,
    zDt = class {
      constructor() {
        ((this.message = {}),
          (this.serviceImplementation = {
            StreamCoreMetrics: (e) => {
              let r = e.request.report_interval
                  ? (0, VDt.durationToMs)((0, VDt.durationMessageToDuration)(e.request.report_interval))
                  : UQo,
                n = setInterval(() => {
                  e.write(this.message);
                }, r);
              e.on("cancelled", () => {
                clearInterval(n);
              });
            },
          }));
      }
      putUtilizationMetric(e, r) {
        (this.message.utilization || (this.message.utilization = {}), (this.message.utilization[e] = r));
      }
      setAllUtilizationMetrics(e) {
        this.message.utilization = Object.assign({}, e);
      }
      deleteUtilizationMetric(e) {
        var r;
        (r = this.message.utilization) === null || r === void 0 || delete r[e];
      }
      setCpuUtilizationMetric(e) {
        this.message.cpu_utilization = e;
      }
      deleteCpuUtilizationMetric() {
        delete this.message.cpu_utilization;
      }
      setApplicationUtilizationMetric(e) {
        this.message.application_utilization = e;
      }
      deleteApplicationUtilizationMetric() {
        delete this.message.application_utilization;
      }
      setQpsMetric(e) {
        this.message.rps_fractional = e;
      }
      deleteQpsMetric() {
        delete this.message.rps_fractional;
      }
      setEpsMetric(e) {
        this.message.eps = e;
      }
      deleteEpsMetric() {
        delete this.message.eps;
      }
      addToServer(e) {
        let r = GUe().xds.service.orca.v3.OpenRcaService.service;
        e.addService(r, this.serviceImplementation);
      }
    };
  f6.ServerMetricRecorder = zDt;
  function ttn(t) {
    let e = GUe().xds.service.orca.v3.OpenRcaService;
    return new e("unused", BQo.ChannelCredentials.createInsecure(), { channelOverride: t });
  }
  f6.GRPC_METRICS_HEADER = "endpoint-load-metrics-bin";
  var etn = "grpc_orca_load_report";
  function $Qo(t, e) {
    return (r, n, o) => {
      let s = o.getOpaque(etn);
      if (s) t(s);
      else {
        let a = o.get(f6.GRPC_METRICS_HEADER);
        a.length > 0 && ((s = GUe().xds.data.orca.v3.OrcaLoadReport.deserialize(a[0])), t(s), o.setOpaque(etn, s));
      }
      e && e(r, n, o);
    };
  }
  var rtn = "orca_oob_metrics",
    YDt = class {
      constructor(e, r) {
        ((this.metricsListener = e), (this.intervalMs = r), (this.dataProducer = null));
      }
      setSubchannel(e) {
        let r = e.getOrCreateDataProducer(rtn, jQo);
        ((this.dataProducer = r), r.addDataWatcher(this));
      }
      destroy() {
        var e;
        (e = this.dataProducer) === null || e === void 0 || e.removeDataWatcher(this);
      }
      getInterval() {
        return this.intervalMs;
      }
      onMetricsUpdate(e) {
        this.metricsListener(e);
      }
    },
    KDt = class {
      constructor(e) {
        ((this.subchannel = e),
          (this.dataWatchers = new Set()),
          (this.orcaSupported = !0),
          (this.metricsCall = null),
          (this.currentInterval = 1 / 0),
          (this.backoffTimer = new MQo.BackoffTimeout(() => this.updateMetricsSubscription())),
          (this.subchannelStateListener = () => this.updateMetricsSubscription()));
        let r = e.getChannel();
        ((this.client = ttn(r)), e.addConnectivityStateListener(this.subchannelStateListener));
      }
      addDataWatcher(e) {
        (this.dataWatchers.add(e), this.updateMetricsSubscription());
      }
      removeDataWatcher(e) {
        var r;
        (this.dataWatchers.delete(e),
          this.dataWatchers.size === 0
            ? (this.subchannel.removeDataProducer(rtn),
              (r = this.metricsCall) === null || r === void 0 || r.cancel(),
              (this.metricsCall = null),
              this.client.close(),
              this.subchannel.removeConnectivityStateListener(this.subchannelStateListener))
            : this.updateMetricsSubscription());
      }
      updateMetricsSubscription() {
        var e;
        if (
          this.dataWatchers.size === 0 ||
          !this.orcaSupported ||
          this.subchannel.getConnectivityState() !== FQo.ConnectivityState.READY
        )
          return;
        let r = Math.min(...Array.from(this.dataWatchers).map((n) => n.getInterval()));
        if (!this.metricsCall || r !== this.currentInterval) {
          ((e = this.metricsCall) === null || e === void 0 || e.cancel(), (this.currentInterval = r));
          let n = this.client.streamCoreMetrics({ report_interval: (0, VDt.msToDuration)(r) });
          ((this.metricsCall = n),
            n.on("data", (o) => {
              this.dataWatchers.forEach((s) => {
                s.onMetricsUpdate(o);
              });
            }),
            n.on("error", (o) => {
              if (((this.metricsCall = null), o.code === Xen.Status.UNIMPLEMENTED)) {
                this.orcaSupported = !1;
                return;
              }
              o.code !== Xen.Status.CANCELLED && this.backoffTimer.runOnce();
            }));
        }
      }
    },
    JDt = class extends LQo.BaseSubchannelWrapper {
      constructor(e, r, n) {
        (super(e), this.addDataWatcher(new YDt(r, n)));
      }
      getWrappedSubchannel() {
        return this.child;
      }
    };
  f6.OrcaOobMetricsSubchannelWrapper = JDt;
  function jQo(t) {
    return new KDt(t);
  }
});