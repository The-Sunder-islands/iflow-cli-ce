/**
 * @module gIt
 * @category network/tls
 * @label tls
 * @position 516 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (gIt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var gIt = T((Yn) => {
  "use strict";
  Object.defineProperty(Yn, "__esModule", { value: !0 });
  Yn.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX =
    Yn.createCertificateProviderChannelCredentials =
    Yn.FileWatcherCertificateProvider =
    Yn.createCertificateProviderServerCredentials =
    Yn.createServerCredentialsWithInterceptors =
    Yn.BaseSubchannelWrapper =
    Yn.registerAdminService =
    Yn.FilterStackFactory =
    Yn.BaseFilter =
    Yn.statusOrFromError =
    Yn.statusOrFromValue =
    Yn.PickResultType =
    Yn.QueuePicker =
    Yn.UnavailablePicker =
    Yn.ChildLoadBalancerHandler =
    Yn.EndpointMap =
    Yn.endpointHasAddress =
    Yn.endpointToString =
    Yn.subchannelAddressToString =
    Yn.LeafLoadBalancer =
    Yn.isLoadBalancerNameRegistered =
    Yn.parseLoadBalancingConfig =
    Yn.selectLbConfigFromList =
    Yn.registerLoadBalancerType =
    Yn.createChildChannelControlHelper =
    Yn.BackoffTimeout =
    Yn.parseDuration =
    Yn.durationToMs =
    Yn.splitHostPort =
    Yn.uriToString =
    Yn.CHANNEL_ARGS_CONFIG_SELECTOR_KEY =
    Yn.createResolver =
    Yn.registerResolver =
    Yn.log =
    Yn.trace =
      void 0;
  var xtn = g0();
  Object.defineProperty(Yn, "trace", {
    enumerable: !0,
    get: function () {
      return xtn.trace;
    },
  });
  Object.defineProperty(Yn, "log", {
    enumerable: !0,
    get: function () {
      return xtn.log;
    },
  });
  var pIt = VC();
  Object.defineProperty(Yn, "registerResolver", {
    enumerable: !0,
    get: function () {
      return pIt.registerResolver;
    },
  });
  Object.defineProperty(Yn, "createResolver", {
    enumerable: !0,
    get: function () {
      return pIt.createResolver;
    },
  });
  Object.defineProperty(Yn, "CHANNEL_ARGS_CONFIG_SELECTOR_KEY", {
    enumerable: !0,
    get: function () {
      return pIt.CHANNEL_ARGS_CONFIG_SELECTOR_KEY;
    },
  });
  var Ttn = d2();
  Object.defineProperty(Yn, "uriToString", {
    enumerable: !0,
    get: function () {
      return Ttn.uriToString;
    },
  });
  Object.defineProperty(Yn, "splitHostPort", {
    enumerable: !0,
    get: function () {
      return Ttn.splitHostPort;
    },
  });
  var Dtn = Pbe();
  Object.defineProperty(Yn, "durationToMs", {
    enumerable: !0,
    get: function () {
      return Dtn.durationToMs;
    },
  });
  Object.defineProperty(Yn, "parseDuration", {
    enumerable: !0,
    get: function () {
      return Dtn.parseDuration;
    },
  });
  var vGo = Rre();
  Object.defineProperty(Yn, "BackoffTimeout", {
    enumerable: !0,
    get: function () {
      return vGo.BackoffTimeout;
    },
  });
  var Ube = UB();
  Object.defineProperty(Yn, "createChildChannelControlHelper", {
    enumerable: !0,
    get: function () {
      return Ube.createChildChannelControlHelper;
    },
  });
  Object.defineProperty(Yn, "registerLoadBalancerType", {
    enumerable: !0,
    get: function () {
      return Ube.registerLoadBalancerType;
    },
  });
  Object.defineProperty(Yn, "selectLbConfigFromList", {
    enumerable: !0,
    get: function () {
      return Ube.selectLbConfigFromList;
    },
  });
  Object.defineProperty(Yn, "parseLoadBalancingConfig", {
    enumerable: !0,
    get: function () {
      return Ube.parseLoadBalancingConfig;
    },
  });
  Object.defineProperty(Yn, "isLoadBalancerNameRegistered", {
    enumerable: !0,
    get: function () {
      return Ube.isLoadBalancerNameRegistered;
    },
  });
  var CGo = Fbe();
  Object.defineProperty(Yn, "LeafLoadBalancer", {
    enumerable: !0,
    get: function () {
      return CGo.LeafLoadBalancer;
    },
  });
  var XUe = a8();
  Object.defineProperty(Yn, "subchannelAddressToString", {
    enumerable: !0,
    get: function () {
      return XUe.subchannelAddressToString;
    },
  });
  Object.defineProperty(Yn, "endpointToString", {
    enumerable: !0,
    get: function () {
      return XUe.endpointToString;
    },
  });
  Object.defineProperty(Yn, "endpointHasAddress", {
    enumerable: !0,
    get: function () {
      return XUe.endpointHasAddress;
    },
  });
  Object.defineProperty(Yn, "EndpointMap", {
    enumerable: !0,
    get: function () {
      return XUe.EndpointMap;
    },
  });
  var SGo = DFe();
  Object.defineProperty(Yn, "ChildLoadBalancerHandler", {
    enumerable: !0,
    get: function () {
      return SGo.ChildLoadBalancerHandler;
    },
  });
  var hIt = IR();
  Object.defineProperty(Yn, "UnavailablePicker", {
    enumerable: !0,
    get: function () {
      return hIt.UnavailablePicker;
    },
  });
  Object.defineProperty(Yn, "QueuePicker", {
    enumerable: !0,
    get: function () {
      return hIt.QueuePicker;
    },
  });
  Object.defineProperty(Yn, "PickResultType", {
    enumerable: !0,
    get: function () {
      return hIt.PickResultType;
    },
  });
  var Itn = pq();
  Object.defineProperty(Yn, "statusOrFromValue", {
    enumerable: !0,
    get: function () {
      return Itn.statusOrFromValue;
    },
  });
  Object.defineProperty(Yn, "statusOrFromError", {
    enumerable: !0,
    get: function () {
      return Itn.statusOrFromError;
    },
  });
  var wGo = qTt();
  Object.defineProperty(Yn, "BaseFilter", {
    enumerable: !0,
    get: function () {
      return wGo.BaseFilter;
    },
  });
  var xGo = EUe();
  Object.defineProperty(Yn, "FilterStackFactory", {
    enumerable: !0,
    get: function () {
      return xGo.FilterStackFactory;
    },
  });
  var TGo = NFe();
  Object.defineProperty(Yn, "registerAdminService", {
    enumerable: !0,
    get: function () {
      return TGo.registerAdminService;
    },
  });
  var DGo = Obe();
  Object.defineProperty(Yn, "BaseSubchannelWrapper", {
    enumerable: !0,
    get: function () {
      return DGo.BaseSubchannelWrapper;
    },
  });
  var Rtn = QUe();
  Object.defineProperty(Yn, "createServerCredentialsWithInterceptors", {
    enumerable: !0,
    get: function () {
      return Rtn.createServerCredentialsWithInterceptors;
    },
  });
  Object.defineProperty(Yn, "createCertificateProviderServerCredentials", {
    enumerable: !0,
    get: function () {
      return Rtn.createCertificateProviderServerCredentials;
    },
  });
  var IGo = wtn();
  Object.defineProperty(Yn, "FileWatcherCertificateProvider", {
    enumerable: !0,
    get: function () {
      return IGo.FileWatcherCertificateProvider;
    },
  });
  var RGo = Ire();
  Object.defineProperty(Yn, "createCertificateProviderChannelCredentials", {
    enumerable: !0,
    get: function () {
      return RGo.createCertificateProviderChannelCredentials;
    },
  });
  var kGo = ODt();
  Object.defineProperty(Yn, "SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX", {
    enumerable: !0,
    get: function () {
      return kGo.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX;
    },
  });
});