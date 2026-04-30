/**
 * @module Vbe
 * @category network/grpc
 * @label grpc
 * @position 523 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Vbe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Vbe = T((Gn) => {
  "use strict";
  Object.defineProperty(Gn, "__esModule", { value: !0 });
  Gn.experimental =
    Gn.ServerMetricRecorder =
    Gn.ServerInterceptingCall =
    Gn.ResponderBuilder =
    Gn.ServerListenerBuilder =
    Gn.addAdminServicesToServer =
    Gn.getChannelzHandlers =
    Gn.getChannelzServiceDefinition =
    Gn.InterceptorConfigurationError =
    Gn.InterceptingCall =
    Gn.RequesterBuilder =
    Gn.ListenerBuilder =
    Gn.StatusBuilder =
    Gn.getClientChannel =
    Gn.ServerCredentials =
    Gn.Server =
    Gn.setLogVerbosity =
    Gn.setLogger =
    Gn.load =
    Gn.loadObject =
    Gn.CallCredentials =
    Gn.ChannelCredentials =
    Gn.waitForClientReady =
    Gn.closeClient =
    Gn.Channel =
    Gn.makeGenericClientConstructor =
    Gn.makeClientConstructor =
    Gn.loadPackageDefinition =
    Gn.Client =
    Gn.compressionAlgorithms =
    Gn.propagate =
    Gn.connectivityState =
    Gn.status =
    Gn.logVerbosity =
    Gn.Metadata =
    Gn.credentials =
      void 0;
  var c$e = bFe();
  Object.defineProperty(Gn, "CallCredentials", {
    enumerable: !0,
    get: function () {
      return c$e.CallCredentials;
    },
  });
  var pqo = jxt();
  Object.defineProperty(Gn, "Channel", {
    enumerable: !0,
    get: function () {
      return pqo.ChannelImplementation;
    },
  });
  var hqo = QTt();
  Object.defineProperty(Gn, "compressionAlgorithms", {
    enumerable: !0,
    get: function () {
      return hqo.CompressionAlgorithms;
    },
  });
  var gqo = f2();
  Object.defineProperty(Gn, "connectivityState", {
    enumerable: !0,
    get: function () {
      return gqo.ConnectivityState;
    },
  });
  var l$e = Ire();
  Object.defineProperty(Gn, "ChannelCredentials", {
    enumerable: !0,
    get: function () {
      return l$e.ChannelCredentials;
    },
  });
  var Jtn = $xt();
  Object.defineProperty(Gn, "Client", {
    enumerable: !0,
    get: function () {
      return Jtn.Client;
    },
  });
  var FIt = La();
  Object.defineProperty(Gn, "logVerbosity", {
    enumerable: !0,
    get: function () {
      return FIt.LogVerbosity;
    },
  });
  Object.defineProperty(Gn, "status", {
    enumerable: !0,
    get: function () {
      return FIt.Status;
    },
  });
  Object.defineProperty(Gn, "propagate", {
    enumerable: !0,
    get: function () {
      return FIt.Propagate;
    },
  });
  var Xtn = g0(),
    UIt = FFe();
  Object.defineProperty(Gn, "loadPackageDefinition", {
    enumerable: !0,
    get: function () {
      return UIt.loadPackageDefinition;
    },
  });
  Object.defineProperty(Gn, "makeClientConstructor", {
    enumerable: !0,
    get: function () {
      return UIt.makeClientConstructor;
    },
  });
  Object.defineProperty(Gn, "makeGenericClientConstructor", {
    enumerable: !0,
    get: function () {
      return UIt.makeClientConstructor;
    },
  });
  var bqo = Ph();
  Object.defineProperty(Gn, "Metadata", {
    enumerable: !0,
    get: function () {
      return bqo.Metadata;
    },
  });
  var Aqo = Atn();
  Object.defineProperty(Gn, "Server", {
    enumerable: !0,
    get: function () {
      return Aqo.Server;
    },
  });
  var yqo = QUe();
  Object.defineProperty(Gn, "ServerCredentials", {
    enumerable: !0,
    get: function () {
      return yqo.ServerCredentials;
    },
  });
  var _qo = ytn();
  Object.defineProperty(Gn, "StatusBuilder", {
    enumerable: !0,
    get: function () {
      return _qo.StatusBuilder;
    },
  });
  Gn.credentials = {
    combineChannelCredentials: (t, ...e) => e.reduce((r, n) => r.compose(n), t),
    combineCallCredentials: (t, ...e) => e.reduce((r, n) => r.compose(n), t),
    createInsecure: l$e.ChannelCredentials.createInsecure,
    createSsl: l$e.ChannelCredentials.createSsl,
    createFromSecureContext: l$e.ChannelCredentials.createFromSecureContext,
    createFromMetadataGenerator: c$e.CallCredentials.createFromMetadataGenerator,
    createFromGoogleCredential: c$e.CallCredentials.createFromGoogleCredential,
    createEmpty: c$e.CallCredentials.createEmpty,
  };
  var Eqo = (t) => t.close();
  Gn.closeClient = Eqo;
  var vqo = (t, e, r) => t.waitForReady(e, r);
  Gn.waitForClientReady = vqo;
  var Cqo = (t, e) => {
    throw new Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead");
  };
  Gn.loadObject = Cqo;
  var Sqo = (t, e, r) => {
    throw new Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead");
  };
  Gn.load = Sqo;
  var wqo = (t) => {
    Xtn.setLogger(t);
  };
  Gn.setLogger = wqo;
  var xqo = (t) => {
    Xtn.setLoggerVerbosity(t);
  };
  Gn.setLogVerbosity = xqo;
  var Tqo = (t) => Jtn.Client.prototype.getChannel.call(t);
  Gn.getClientChannel = Tqo;
  var m$e = Mxt();
  Object.defineProperty(Gn, "ListenerBuilder", {
    enumerable: !0,
    get: function () {
      return m$e.ListenerBuilder;
    },
  });
  Object.defineProperty(Gn, "RequesterBuilder", {
    enumerable: !0,
    get: function () {
      return m$e.RequesterBuilder;
    },
  });
  Object.defineProperty(Gn, "InterceptingCall", {
    enumerable: !0,
    get: function () {
      return m$e.InterceptingCall;
    },
  });
  Object.defineProperty(Gn, "InterceptorConfigurationError", {
    enumerable: !0,
    get: function () {
      return m$e.InterceptorConfigurationError;
    },
  });
  var Ztn = zB();
  Object.defineProperty(Gn, "getChannelzServiceDefinition", {
    enumerable: !0,
    get: function () {
      return Ztn.getChannelzServiceDefinition;
    },
  });
  Object.defineProperty(Gn, "getChannelzHandlers", {
    enumerable: !0,
    get: function () {
      return Ztn.getChannelzHandlers;
    },
  });
  var Dqo = NFe();
  Object.defineProperty(Gn, "addAdminServicesToServer", {
    enumerable: !0,
    get: function () {
      return Dqo.addAdminServicesToServer;
    },
  });
  var $It = iIt();
  Object.defineProperty(Gn, "ServerListenerBuilder", {
    enumerable: !0,
    get: function () {
      return $It.ServerListenerBuilder;
    },
  });
  Object.defineProperty(Gn, "ResponderBuilder", {
    enumerable: !0,
    get: function () {
      return $It.ResponderBuilder;
    },
  });
  Object.defineProperty(Gn, "ServerInterceptingCall", {
    enumerable: !0,
    get: function () {
      return $It.ServerInterceptingCall;
    },
  });
  var Iqo = qUe();
  Object.defineProperty(Gn, "ServerMetricRecorder", {
    enumerable: !0,
    get: function () {
      return Iqo.ServerMetricRecorder;
    },
  });
  var Rqo = gIt();
  Gn.experimental = Rqo;
  var kqo = aDt(),
    Oqo = ktn(),
    Nqo = Mtn(),
    Pqo = Fbe(),
    Bqo = jtn(),
    Lqo = qtn(),
    Mqo = Ktn(),
    Fqo = zB();
  (kqo.setup(), Oqo.setup(), Nqo.setup(), Pqo.setup(), Bqo.setup(), Lqo.setup(), Mqo.setup(), Fqo.setup());
});