/**
 * @module hXr
 * @category network/grpc
 * @label grpc
 * @position 441 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (hXr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var hXr = T((ebe) => {
  "use strict";
  Object.defineProperty(ebe, "__esModule", { value: !0 });
  ebe.recognizedOptions = void 0;
  ebe.channelOptionsEqual = rMo;
  ebe.recognizedOptions = {
    "grpc.ssl_target_name_override": !0,
    "grpc.primary_user_agent": !0,
    "grpc.secondary_user_agent": !0,
    "grpc.default_authority": !0,
    "grpc.keepalive_time_ms": !0,
    "grpc.keepalive_timeout_ms": !0,
    "grpc.keepalive_permit_without_calls": !0,
    "grpc.service_config": !0,
    "grpc.max_concurrent_streams": !0,
    "grpc.initial_reconnect_backoff_ms": !0,
    "grpc.max_reconnect_backoff_ms": !0,
    "grpc.use_local_subchannel_pool": !0,
    "grpc.max_send_message_length": !0,
    "grpc.max_receive_message_length": !0,
    "grpc.enable_http_proxy": !0,
    "grpc.enable_channelz": !0,
    "grpc.dns_min_time_between_resolutions_ms": !0,
    "grpc.enable_retries": !0,
    "grpc.per_rpc_retry_buffer_size": !0,
    "grpc.retry_buffer_size": !0,
    "grpc.max_connection_age_ms": !0,
    "grpc.max_connection_age_grace_ms": !0,
    "grpc-node.max_session_memory": !0,
    "grpc.service_config_disable_resolution": !0,
    "grpc.client_idle_timeout_ms": !0,
    "grpc-node.tls_enable_trace": !0,
    "grpc.lb.ring_hash.ring_size_cap": !0,
    "grpc-node.retry_max_attempts_limit": !0,
    "grpc-node.flow_control_window": !0,
    "grpc.server_call_metric_recording": !0,
  };
  function rMo(t, e) {
    let r = Object.keys(t).sort(),
      n = Object.keys(e).sort();
    if (r.length !== n.length) return !1;
    for (let o = 0; o < r.length; o += 1) if (r[o] !== n[o] || t[r[o]] !== e[n[o]]) return !1;
    return !0;
  }
});