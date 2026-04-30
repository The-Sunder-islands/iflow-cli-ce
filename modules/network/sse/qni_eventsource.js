/**
 * @module qni
 * @category network/sse
 * @label eventsource
 * @position 1578 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qni) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qni = T((b4c, Gni) => {
  "use strict";
  var { Transform: wga } = Ae("node:stream"),
    { isASCIINumber: jni, isValidLastEventId: Qni } = $ni(),
    jO = [239, 187, 191],
    Hcr = 10,
    Ast = 13,
    xga = 58,
    Tga = 32,
    Vcr = class extends wga {
      state;
      checkBOM = !0;
      crlfCheck = !1;
      eventEndCheck = !1;
      buffer = null;
      pos = 0;
      event = { data: void 0, event: void 0, id: void 0, retry: void 0 };
      constructor(e = {}) {
        ((e.readableObjectMode = !0),
          super(e),
          (this.state = e.eventSourceSettings || {}),
          e.push && (this.push = e.push));
      }
      _transform(e, r, n) {
        if (e.length === 0) {
          n();
          return;
        }
        if ((this.buffer ? (this.buffer = Buffer.concat([this.buffer, e])) : (this.buffer = e), this.checkBOM))
          switch (this.buffer.length) {
            case 1:
              if (this.buffer[0] === jO[0]) {
                n();
                return;
              }
              ((this.checkBOM = !1), n());
              return;
            case 2:
              if (this.buffer[0] === jO[0] && this.buffer[1] === jO[1]) {
                n();
                return;
              }
              this.checkBOM = !1;
              break;
            case 3:
              if (this.buffer[0] === jO[0] && this.buffer[1] === jO[1] && this.buffer[2] === jO[2]) {
                ((this.buffer = Buffer.alloc(0)), (this.checkBOM = !1), n());
                return;
              }
              this.checkBOM = !1;
              break;
            default:
              (this.buffer[0] === jO[0] &&
                this.buffer[1] === jO[1] &&
                this.buffer[2] === jO[2] &&
                (this.buffer = this.buffer.subarray(3)),
                (this.checkBOM = !1));
              break;
          }
        for (; this.pos < this.buffer.length; ) {
          if (this.eventEndCheck) {
            if (this.crlfCheck) {
              if (this.buffer[this.pos] === Hcr) {
                ((this.buffer = this.buffer.subarray(this.pos + 1)), (this.pos = 0), (this.crlfCheck = !1));
                continue;
              }
              this.crlfCheck = !1;
            }
            if (this.buffer[this.pos] === Hcr || this.buffer[this.pos] === Ast) {
              (this.buffer[this.pos] === Ast && (this.crlfCheck = !0),
                (this.buffer = this.buffer.subarray(this.pos + 1)),
                (this.pos = 0),
                (this.event.data !== void 0 || this.event.event || this.event.id !== void 0 || this.event.retry) &&
                  this.processEvent(this.event),
                this.clearEvent());
              continue;
            }
            this.eventEndCheck = !1;
            continue;
          }
          if (this.buffer[this.pos] === Hcr || this.buffer[this.pos] === Ast) {
            (this.buffer[this.pos] === Ast && (this.crlfCheck = !0),
              this.parseLine(this.buffer.subarray(0, this.pos), this.event),
              (this.buffer = this.buffer.subarray(this.pos + 1)),
              (this.pos = 0),
              (this.eventEndCheck = !0));
            continue;
          }
          this.pos++;
        }
        n();
      }
      parseLine(e, r) {
        if (e.length === 0) return;
        let n = e.indexOf(xga);
        if (n === 0) return;
        let o = "",
          s = "";
        if (n !== -1) {
          o = e.subarray(0, n).toString("utf8");
          let a = n + 1;
          (e[a] === Tga && ++a, (s = e.subarray(a).toString("utf8")));
        } else ((o = e.toString("utf8")), (s = ""));
        switch (o) {
          case "data":
            r[o] === void 0
              ? (r[o] = s)
              : (r[o] += `
${s}`);
            break;
          case "retry":
            jni(s) && (r[o] = s);
            break;
          case "id":
            Qni(s) && (r[o] = s);
            break;
          case "event":
            s.length > 0 && (r[o] = s);
            break;
        }
      }
      processEvent(e) {
        (e.retry && jni(e.retry) && (this.state.reconnectionTime = parseInt(e.retry, 10)),
          e.id !== void 0 && Qni(e.id) && (this.state.lastEventId = e.id),
          e.data !== void 0 &&
            this.push({
              type: e.event || "message",
              options: { data: e.data, lastEventId: this.state.lastEventId, origin: this.state.origin },
            }));
      }
      clearEvent() {
        this.event = { data: void 0, event: void 0, id: void 0, retry: void 0 };
      }
    };
  Gni.exports = { EventSourceStream: Vcr };
});