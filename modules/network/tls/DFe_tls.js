/**
 * @module DFe
 * @category network/tls
 * @label tls
 * @position 439 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (DFe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var DFe = T((TFe) => {
  "use strict";
  Object.defineProperty(TFe, "__esModule", { value: !0 });
  TFe.ChildLoadBalancerHandler = void 0;
  var $Lo = UB(),
    jLo = f2(),
    QLo = "child_load_balancer_helper",
    fxt = class {
      constructor(e) {
        ((this.channelControlHelper = e),
          (this.currentChild = null),
          (this.pendingChild = null),
          (this.latestConfig = null),
          (this.ChildPolicyHelper = class {
            constructor(r) {
              ((this.parent = r), (this.child = null));
            }
            createSubchannel(r, n) {
              return this.parent.channelControlHelper.createSubchannel(r, n);
            }
            updateState(r, n, o) {
              var s;
              if (this.calledByPendingChild()) {
                if (r === jLo.ConnectivityState.CONNECTING) return;
                ((s = this.parent.currentChild) === null || s === void 0 || s.destroy(),
                  (this.parent.currentChild = this.parent.pendingChild),
                  (this.parent.pendingChild = null));
              } else if (!this.calledByCurrentChild()) return;
              this.parent.channelControlHelper.updateState(r, n, o);
            }
            requestReresolution() {
              var r;
              let n = (r = this.parent.pendingChild) !== null && r !== void 0 ? r : this.parent.currentChild;
              this.child === n && this.parent.channelControlHelper.requestReresolution();
            }
            setChild(r) {
              this.child = r;
            }
            addChannelzChild(r) {
              this.parent.channelControlHelper.addChannelzChild(r);
            }
            removeChannelzChild(r) {
              this.parent.channelControlHelper.removeChannelzChild(r);
            }
            calledByPendingChild() {
              return this.child === this.parent.pendingChild;
            }
            calledByCurrentChild() {
              return this.child === this.parent.currentChild;
            }
          }));
      }
      configUpdateRequiresNewPolicyInstance(e, r) {
        return e.getLoadBalancerName() !== r.getLoadBalancerName();
      }
      updateAddressList(e, r, n, o) {
        let s;
        if (
          this.currentChild === null ||
          this.latestConfig === null ||
          this.configUpdateRequiresNewPolicyInstance(this.latestConfig, r)
        ) {
          let a = new this.ChildPolicyHelper(this),
            u = (0, $Lo.createLoadBalancer)(r, a);
          (a.setChild(u),
            this.currentChild === null
              ? ((this.currentChild = u), (s = this.currentChild))
              : (this.pendingChild && this.pendingChild.destroy(), (this.pendingChild = u), (s = this.pendingChild)));
        } else this.pendingChild === null ? (s = this.currentChild) : (s = this.pendingChild);
        return ((this.latestConfig = r), s.updateAddressList(e, r, n, o));
      }
      exitIdle() {
        this.currentChild && (this.currentChild.exitIdle(), this.pendingChild && this.pendingChild.exitIdle());
      }
      resetBackoff() {
        this.currentChild && (this.currentChild.resetBackoff(), this.pendingChild && this.pendingChild.resetBackoff());
      }
      destroy() {
        (this.currentChild && (this.currentChild.destroy(), (this.currentChild = null)),
          this.pendingChild && (this.pendingChild.destroy(), (this.pendingChild = null)));
      }
      getTypeName() {
        return QLo;
      }
    };
  TFe.ChildLoadBalancerHandler = fxt;
});