/**
 * @module zen
 * @category network/grpc
 * @label grpc
 * @position 503 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (zen) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var zen = T((KB) => {
  "use strict";
  Object.defineProperty(KB, "__esModule", { value: !0 });
  KB.RetryingCall = KB.MessageBufferTracker = KB.RetryThrottler = void 0;
  var LUe = La(),
    Zjo = Hre(),
    eQo = Ph(),
    tQo = g0(),
    rQo = "retrying_call",
    EDt = class {
      constructor(e, r, n) {
        ((this.maxTokens = e),
          (this.tokenRatio = r),
          n ? (this.tokens = n.tokens * (e / n.maxTokens)) : (this.tokens = e));
      }
      addCallSucceeded() {
        this.tokens = Math.min(this.tokens + this.tokenRatio, this.maxTokens);
      }
      addCallFailed() {
        this.tokens = Math.max(this.tokens - 1, 0);
      }
      canRetryCall() {
        return this.tokens > this.maxTokens / 2;
      }
    };
  KB.RetryThrottler = EDt;
  var vDt = class {
    constructor(e, r) {
      ((this.totalLimit = e), (this.limitPerCall = r), (this.totalAllocated = 0), (this.allocatedPerCall = new Map()));
    }
    allocate(e, r) {
      var n;
      let o = (n = this.allocatedPerCall.get(r)) !== null && n !== void 0 ? n : 0;
      return this.limitPerCall - o < e || this.totalLimit - this.totalAllocated < e
        ? !1
        : (this.allocatedPerCall.set(r, o + e), (this.totalAllocated += e), !0);
    }
    free(e, r) {
      var n;
      if (this.totalAllocated < e)
        throw new Error(
          `Invalid buffer allocation state: call ${r} freed ${e} > total allocated ${this.totalAllocated}`,
        );
      this.totalAllocated -= e;
      let o = (n = this.allocatedPerCall.get(r)) !== null && n !== void 0 ? n : 0;
      if (o < e) throw new Error(`Invalid buffer allocation state: call ${r} freed ${e} > allocated for call ${o}`);
      this.allocatedPerCall.set(r, o - e);
    }
    freeAll(e) {
      var r;
      let n = (r = this.allocatedPerCall.get(e)) !== null && r !== void 0 ? r : 0;
      if (this.totalAllocated < n)
        throw new Error(
          `Invalid buffer allocation state: call ${e} allocated ${n} > total allocated ${this.totalAllocated}`,
        );
      ((this.totalAllocated -= n), this.allocatedPerCall.delete(e));
    }
  };
  KB.MessageBufferTracker = vDt;
  var _Dt = "grpc-previous-rpc-attempts",
    nQo = 5,
    CDt = class {
      constructor(e, r, n, o, s, a, u, c, m) {
        var d;
        ((this.channel = e),
          (this.callConfig = r),
          (this.methodName = n),
          (this.host = o),
          (this.credentials = s),
          (this.deadline = a),
          (this.callNumber = u),
          (this.bufferTracker = c),
          (this.retryThrottler = m),
          (this.listener = null),
          (this.initialMetadata = null),
          (this.underlyingCalls = []),
          (this.writeBuffer = []),
          (this.writeBufferOffset = 0),
          (this.readStarted = !1),
          (this.transparentRetryUsed = !1),
          (this.attempts = 0),
          (this.hedgingTimer = null),
          (this.committedCallIndex = null),
          (this.initialRetryBackoffSec = 0),
          (this.nextRetryBackoffSec = 0));
        let f = (d = e.getOptions()["grpc-node.retry_max_attempts_limit"]) !== null && d !== void 0 ? d : nQo;
        if (e.getOptions()["grpc.enable_retries"] === 0) ((this.state = "NO_RETRY"), (this.maxAttempts = 1));
        else if (r.methodConfig.retryPolicy) {
          this.state = "RETRY";
          let p = r.methodConfig.retryPolicy;
          ((this.nextRetryBackoffSec = this.initialRetryBackoffSec =
            Number(p.initialBackoff.substring(0, p.initialBackoff.length - 1))),
            (this.maxAttempts = Math.min(p.maxAttempts, f)));
        } else
          r.methodConfig.hedgingPolicy
            ? ((this.state = "HEDGING"), (this.maxAttempts = Math.min(r.methodConfig.hedgingPolicy.maxAttempts, f)))
            : ((this.state = "TRANSPARENT_ONLY"), (this.maxAttempts = 1));
        this.startTime = new Date();
      }
      getDeadlineInfo() {
        if (this.underlyingCalls.length === 0) return [];
        let e = [],
          r = this.underlyingCalls[this.underlyingCalls.length - 1];
        return (
          this.underlyingCalls.length > 1 && e.push(`previous attempts: ${this.underlyingCalls.length - 1}`),
          r.startTime > this.startTime &&
            e.push(`time to current attempt start: ${(0, Zjo.formatDateDifference)(this.startTime, r.startTime)}`),
          e.push(...r.call.getDeadlineInfo()),
          e
        );
      }
      getCallNumber() {
        return this.callNumber;
      }
      trace(e) {
        tQo.trace(LUe.LogVerbosity.DEBUG, rQo, "[" + this.callNumber + "] " + e);
      }
      reportStatus(e) {
        (this.trace(
          "ended with status: code=" +
            e.code +
            ' details="' +
            e.details +
            '" start time=' +
            this.startTime.toISOString(),
        ),
          this.bufferTracker.freeAll(this.callNumber),
          (this.writeBufferOffset = this.writeBufferOffset + this.writeBuffer.length),
          (this.writeBuffer = []),
          process.nextTick(() => {
            var r;
            (r = this.listener) === null ||
              r === void 0 ||
              r.onReceiveStatus({ code: e.code, details: e.details, metadata: e.metadata });
          }));
      }
      cancelWithStatus(e, r) {
        (this.trace("cancelWithStatus code: " + e + ' details: "' + r + '"'),
          this.reportStatus({ code: e, details: r, metadata: new eQo.Metadata() }));
        for (let { call: n } of this.underlyingCalls) n.cancelWithStatus(e, r);
      }
      getPeer() {
        return this.committedCallIndex !== null
          ? this.underlyingCalls[this.committedCallIndex].call.getPeer()
          : "unknown";
      }
      getBufferEntry(e) {
        var r;
        return (r = this.writeBuffer[e - this.writeBufferOffset]) !== null && r !== void 0
          ? r
          : { entryType: "FREED", allocated: !1 };
      }
      getNextBufferIndex() {
        return this.writeBufferOffset + this.writeBuffer.length;
      }
      clearSentMessages() {
        if (this.state !== "COMMITTED") return;
        let e;
        this.underlyingCalls[this.committedCallIndex].state === "COMPLETED"
          ? (e = this.getNextBufferIndex())
          : (e = this.underlyingCalls[this.committedCallIndex].nextMessageToSend);
        for (let r = this.writeBufferOffset; r < e; r++) {
          let n = this.getBufferEntry(r);
          n.allocated && this.bufferTracker.free(n.message.message.length, this.callNumber);
        }
        ((this.writeBuffer = this.writeBuffer.slice(e - this.writeBufferOffset)), (this.writeBufferOffset = e));
      }
      commitCall(e) {
        var r, n;
        if (this.state !== "COMMITTED") {
          (this.trace("Committing call [" + this.underlyingCalls[e].call.getCallNumber() + "] at index " + e),
            (this.state = "COMMITTED"),
            (n = (r = this.callConfig).onCommitted) === null || n === void 0 || n.call(r),
            (this.committedCallIndex = e));
          for (let o = 0; o < this.underlyingCalls.length; o++)
            o !== e &&
              this.underlyingCalls[o].state !== "COMPLETED" &&
              ((this.underlyingCalls[o].state = "COMPLETED"),
              this.underlyingCalls[o].call.cancelWithStatus(
                LUe.Status.CANCELLED,
                "Discarded in favor of other hedged attempt",
              ));
          this.clearSentMessages();
        }
      }
      commitCallWithMostMessages() {
        if (this.state === "COMMITTED") return;
        let e = -1,
          r = -1;
        for (let [n, o] of this.underlyingCalls.entries())
          o.state === "ACTIVE" && o.nextMessageToSend > e && ((e = o.nextMessageToSend), (r = n));
        r === -1 ? (this.state = "TRANSPARENT_ONLY") : this.commitCall(r);
      }
      isStatusCodeInList(e, r) {
        return e.some((n) => {
          var o;
          return (
            n === r ||
            n.toString().toLowerCase() === ((o = LUe.Status[r]) === null || o === void 0 ? void 0 : o.toLowerCase())
          );
        });
      }
      getNextRetryJitter() {
        return Math.random() * (1.2 - 0.8) + 0.8;
      }
      getNextRetryBackoffMs() {
        var e;
        let r = (e = this.callConfig) === null || e === void 0 ? void 0 : e.methodConfig.retryPolicy;
        if (!r) return 0;
        let o = this.getNextRetryJitter() * this.nextRetryBackoffSec * 1e3,
          s = Number(r.maxBackoff.substring(0, r.maxBackoff.length - 1));
        return ((this.nextRetryBackoffSec = Math.min(this.nextRetryBackoffSec * r.backoffMultiplier, s)), o);
      }
      maybeRetryCall(e, r) {
        if (this.state !== "RETRY") {
          r(!1);
          return;
        }
        if (this.attempts >= this.maxAttempts) {
          r(!1);
          return;
        }
        let n;
        if (e === null) n = this.getNextRetryBackoffMs();
        else if (e < 0) {
          ((this.state = "TRANSPARENT_ONLY"), r(!1));
          return;
        } else ((n = e), (this.nextRetryBackoffSec = this.initialRetryBackoffSec));
        setTimeout(() => {
          var o, s;
          if (this.state !== "RETRY") {
            r(!1);
            return;
          }
          !(
            (s = (o = this.retryThrottler) === null || o === void 0 ? void 0 : o.canRetryCall()) !== null &&
            s !== void 0
          ) || s
            ? (r(!0), (this.attempts += 1), this.startNewAttempt())
            : (this.trace("Retry attempt denied by throttling policy"), r(!1));
        }, n);
      }
      countActiveCalls() {
        let e = 0;
        for (let r of this.underlyingCalls) r?.state === "ACTIVE" && (e += 1);
        return e;
      }
      handleProcessedStatus(e, r, n) {
        var o, s, a;
        switch (this.state) {
          case "COMMITTED":
          case "NO_RETRY":
          case "TRANSPARENT_ONLY":
            (this.commitCall(r), this.reportStatus(e));
            break;
          case "HEDGING":
            if (
              this.isStatusCodeInList(
                (o = this.callConfig.methodConfig.hedgingPolicy.nonFatalStatusCodes) !== null && o !== void 0 ? o : [],
                e.code,
              )
            ) {
              (s = this.retryThrottler) === null || s === void 0 || s.addCallFailed();
              let u;
              if (n === null) u = 0;
              else if (n < 0) {
                ((this.state = "TRANSPARENT_ONLY"), this.commitCall(r), this.reportStatus(e));
                return;
              } else u = n;
              setTimeout(() => {
                (this.maybeStartHedgingAttempt(),
                  this.countActiveCalls() === 0 && (this.commitCall(r), this.reportStatus(e)));
              }, u);
            } else (this.commitCall(r), this.reportStatus(e));
            break;
          case "RETRY":
            this.isStatusCodeInList(this.callConfig.methodConfig.retryPolicy.retryableStatusCodes, e.code)
              ? ((a = this.retryThrottler) === null || a === void 0 || a.addCallFailed(),
                this.maybeRetryCall(n, (u) => {
                  u || (this.commitCall(r), this.reportStatus(e));
                }))
              : (this.commitCall(r), this.reportStatus(e));
            break;
        }
      }
      getPushback(e) {
        let r = e.get("grpc-retry-pushback-ms");
        if (r.length === 0) return null;
        try {
          return parseInt(r[0]);
        } catch {
          return -1;
        }
      }
      handleChildStatus(e, r) {
        var n;
        if (this.underlyingCalls[r].state === "COMPLETED") return;
        if (
          (this.trace(
            "state=" +
              this.state +
              " handling status with progress " +
              e.progress +
              " from child [" +
              this.underlyingCalls[r].call.getCallNumber() +
              "] in state " +
              this.underlyingCalls[r].state,
          ),
          (this.underlyingCalls[r].state = "COMPLETED"),
          e.code === LUe.Status.OK)
        ) {
          ((n = this.retryThrottler) === null || n === void 0 || n.addCallSucceeded(),
            this.commitCall(r),
            this.reportStatus(e));
          return;
        }
        if (this.state === "NO_RETRY") {
          (this.commitCall(r), this.reportStatus(e));
          return;
        }
        if (this.state === "COMMITTED") {
          this.reportStatus(e);
          return;
        }
        let o = this.getPushback(e.metadata);
        switch (e.progress) {
          case "NOT_STARTED":
            this.startNewAttempt();
            break;
          case "REFUSED":
            this.transparentRetryUsed
              ? this.handleProcessedStatus(e, r, o)
              : ((this.transparentRetryUsed = !0), this.startNewAttempt());
            break;
          case "DROP":
            (this.commitCall(r), this.reportStatus(e));
            break;
          case "PROCESSED":
            this.handleProcessedStatus(e, r, o);
            break;
        }
      }
      maybeStartHedgingAttempt() {
        this.state === "HEDGING" &&
          this.callConfig.methodConfig.hedgingPolicy &&
          (this.attempts >= this.maxAttempts ||
            ((this.attempts += 1), this.startNewAttempt(), this.maybeStartHedgingTimer()));
      }
      maybeStartHedgingTimer() {
        var e, r, n;
        if (
          (this.hedgingTimer && clearTimeout(this.hedgingTimer),
          this.state !== "HEDGING" || !this.callConfig.methodConfig.hedgingPolicy)
        )
          return;
        let o = this.callConfig.methodConfig.hedgingPolicy;
        if (this.attempts >= this.maxAttempts) return;
        let s = (e = o.hedgingDelay) !== null && e !== void 0 ? e : "0s",
          a = Number(s.substring(0, s.length - 1));
        ((this.hedgingTimer = setTimeout(() => {
          this.maybeStartHedgingAttempt();
        }, a * 1e3)),
          (n = (r = this.hedgingTimer).unref) === null || n === void 0 || n.call(r));
      }
      startNewAttempt() {
        let e = this.channel.createLoadBalancingCall(
          this.callConfig,
          this.methodName,
          this.host,
          this.credentials,
          this.deadline,
        );
        this.trace("Created child call [" + e.getCallNumber() + "] for attempt " + this.attempts);
        let r = this.underlyingCalls.length;
        this.underlyingCalls.push({ state: "ACTIVE", call: e, nextMessageToSend: 0, startTime: new Date() });
        let n = this.attempts - 1,
          o = this.initialMetadata.clone();
        n > 0 && o.set(_Dt, `${n}`);
        let s = !1;
        (e.start(o, {
          onReceiveMetadata: (a) => {
            (this.trace("Received metadata from child [" + e.getCallNumber() + "]"),
              this.commitCall(r),
              (s = !0),
              n > 0 && a.set(_Dt, `${n}`),
              this.underlyingCalls[r].state === "ACTIVE" && this.listener.onReceiveMetadata(a));
          },
          onReceiveMessage: (a) => {
            (this.trace("Received message from child [" + e.getCallNumber() + "]"),
              this.commitCall(r),
              this.underlyingCalls[r].state === "ACTIVE" && this.listener.onReceiveMessage(a));
          },
          onReceiveStatus: (a) => {
            (this.trace("Received status from child [" + e.getCallNumber() + "]"),
              !s && n > 0 && a.metadata.set(_Dt, `${n}`),
              this.handleChildStatus(a, r));
          },
        }),
          this.sendNextChildMessage(r),
          this.readStarted && e.startRead());
      }
      start(e, r) {
        (this.trace("start called"),
          (this.listener = r),
          (this.initialMetadata = e),
          (this.attempts += 1),
          this.startNewAttempt(),
          this.maybeStartHedgingTimer());
      }
      handleChildWriteCompleted(e, r) {
        var n, o;
        ((o = (n = this.getBufferEntry(r)).callback) === null || o === void 0 || o.call(n), this.clearSentMessages());
        let s = this.underlyingCalls[e];
        ((s.nextMessageToSend += 1), this.sendNextChildMessage(e));
      }
      sendNextChildMessage(e) {
        let r = this.underlyingCalls[e];
        if (r.state === "COMPLETED") return;
        let n = r.nextMessageToSend;
        if (this.getBufferEntry(n)) {
          let o = this.getBufferEntry(n);
          switch (o.entryType) {
            case "MESSAGE":
              (r.call.sendMessageWithContext(
                {
                  callback: (a) => {
                    this.handleChildWriteCompleted(e, n);
                  },
                },
                o.message.message,
              ),
                this.getBufferEntry(n + 1).entryType === "HALF_CLOSE" &&
                  (this.trace(
                    "Sending halfClose immediately after message to child [" +
                      r.call.getCallNumber() +
                      "] - optimizing for unary/final message",
                  ),
                  (r.nextMessageToSend += 1),
                  r.call.halfClose()));
              break;
            case "HALF_CLOSE":
              ((r.nextMessageToSend += 1), r.call.halfClose());
              break;
            case "FREED":
              break;
          }
        }
      }
      sendMessageWithContext(e, r) {
        this.trace("write() called with message of length " + r.length);
        let n = { message: r, flags: e.flags },
          o = this.getNextBufferIndex(),
          s = { entryType: "MESSAGE", message: n, allocated: this.bufferTracker.allocate(r.length, this.callNumber) };
        if ((this.writeBuffer.push(s), s.allocated)) {
          process.nextTick(() => {
            var a;
            (a = e.callback) === null || a === void 0 || a.call(e);
          });
          for (let [a, u] of this.underlyingCalls.entries())
            u.state === "ACTIVE" &&
              u.nextMessageToSend === o &&
              u.call.sendMessageWithContext(
                {
                  callback: (c) => {
                    this.handleChildWriteCompleted(a, o);
                  },
                },
                r,
              );
        } else {
          if ((this.commitCallWithMostMessages(), this.committedCallIndex === null)) return;
          let a = this.underlyingCalls[this.committedCallIndex];
          ((s.callback = e.callback),
            a.state === "ACTIVE" &&
              a.nextMessageToSend === o &&
              a.call.sendMessageWithContext(
                {
                  callback: (u) => {
                    this.handleChildWriteCompleted(this.committedCallIndex, o);
                  },
                },
                r,
              ));
        }
      }
      startRead() {
        (this.trace("startRead called"), (this.readStarted = !0));
        for (let e of this.underlyingCalls) e?.state === "ACTIVE" && e.call.startRead();
      }
      halfClose() {
        this.trace("halfClose called");
        let e = this.getNextBufferIndex();
        this.writeBuffer.push({ entryType: "HALF_CLOSE", allocated: !1 });
        for (let r of this.underlyingCalls)
          r?.state === "ACTIVE" &&
            (r.nextMessageToSend === e || r.nextMessageToSend === e - 1) &&
            (this.trace(
              "Sending halfClose immediately to child [" + r.call.getCallNumber() + "] - all messages already sent",
            ),
            (r.nextMessageToSend += 1),
            r.call.halfClose());
      }
      setCredentials(e) {
        throw new Error("Method not implemented.");
      }
      getMethod() {
        return this.methodName;
      }
      getHost() {
        return this.host;
      }
      getAuthContext() {
        return this.committedCallIndex !== null
          ? this.underlyingCalls[this.committedCallIndex].call.getAuthContext()
          : null;
      }
    };
  KB.RetryingCall = CDt;
});