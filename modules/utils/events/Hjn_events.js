/**
 * @module Hjn
 * @category utils/events
 * @label events
 * @position 1404 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Hjn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Hjn = T((r6c, qjn) => {
  var RKs = Gjn(),
    kKs = Ae("events").EventEmitter;
  qjn.exports = mce;
  function mce(t) {
    var e = mce.saw(t, {}),
      r = t.call(e.handlers, e);
    return (r !== void 0 && (e.handlers = r), e.record(), e.chain());
  }
  mce.light = function (e) {
    var r = mce.saw(e, {}),
      n = e.call(r.handlers, r);
    return (n !== void 0 && (r.handlers = n), r.chain());
  };
  mce.saw = function (t, e) {
    var r = new kKs();
    return (
      (r.handlers = e),
      (r.actions = []),
      (r.chain = function () {
        var n = RKs(r.handlers).map(function (o) {
          if (this.isRoot) return o;
          var s = this.path;
          typeof o == "function" &&
            this.update(function () {
              return (r.actions.push({ path: s, args: [].slice.call(arguments) }), n);
            });
        });
        return (
          process.nextTick(function () {
            (r.emit("begin"), r.next());
          }),
          n
        );
      }),
      (r.pop = function () {
        return r.actions.shift();
      }),
      (r.next = function () {
        var n = r.pop();
        if (!n) r.emit("end");
        else if (!n.trap) {
          var o = r.handlers;
          (n.path.forEach(function (s) {
            o = o[s];
          }),
            o.apply(r.handlers, n.args));
        }
      }),
      (r.nest = function (n) {
        var o = [].slice.call(arguments, 1),
          s = !0;
        if (typeof n == "boolean") {
          var s = n;
          n = o.shift();
        }
        var a = mce.saw(t, {}),
          u = t.call(a.handlers, a);
        (u !== void 0 && (a.handlers = u),
          typeof r.step < "u" && a.record(),
          n.apply(a.chain(), o),
          s !== !1 && a.on("end", r.next));
      }),
      (r.record = function () {
        OKs(r);
      }),
      ["trap", "down", "jump"].forEach(function (n) {
        r[n] = function () {
          throw new Error(
            "To use the trap, down and jump features, please call record() first to start recording actions.",
          );
        };
      }),
      r
    );
  };
  function OKs(t) {
    ((t.step = 0),
      (t.pop = function () {
        return t.actions[t.step++];
      }),
      (t.trap = function (e, r) {
        var n = Array.isArray(e) ? e : [e];
        t.actions.push({ path: n, step: t.step, cb: r, trap: !0 });
      }),
      (t.down = function (e) {
        var r = (Array.isArray(e) ? e : [e]).join("/"),
          n = t.actions
            .slice(t.step)
            .map(function (s) {
              return s.trap && s.step <= t.step ? !1 : s.path.join("/") == r;
            })
            .indexOf(!0);
        n >= 0 ? (t.step += n) : (t.step = t.actions.length);
        var o = t.actions[t.step - 1];
        o && o.trap ? ((t.step = o.step), o.cb()) : t.next();
      }),
      (t.jump = function (e) {
        ((t.step = e), t.next());
      }));
  }
});