/**
 * @module FIn
 * @category utils/events
 * @label events
 * @position 1161 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (FIn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var FIn = T((MIn) => {
  var BIn = typeof TextEncoder > "u" ? null : new TextEncoder("utf-8"),
    { Buffer: LIn } = Ae("buffer");
  function LIs(t) {
    return typeof t != "string" ? t : BIn ? LIn.from(BIn.encode(t).buffer) : LIn.from(t);
  }
  MIn.stringToBuffer = LIs;
});
var $In = T((rAc, UIn) => {
  var MIs = Ae("events"),
    FIs = LXe(),
    UIs = u_e(),
    { stringToBuffer: $Is } = FIn(),
    hYt = class extends MIs.EventEmitter {
      constructor(e) {
        (super(),
          (this.options = Object.assign({ type: "nodebuffer", compression: "DEFLATE" }, e)),
          (this.zip = new FIs()),
          (this.stream = new UIs()));
      }
      append(e, r) {
        r.hasOwnProperty("base64") && r.base64
          ? this.zip.file(r.name, e, { base64: !0 })
          : (process.browser && typeof e == "string" && (e = $Is(e)), this.zip.file(r.name, e));
      }
      async finalize() {
        let e = await this.zip.generateAsync(this.options);
        (this.stream.end(e), this.emit("finish"));
      }
      read(e) {
        return this.stream.read(e);
      }
      setEncoding(e) {
        return this.stream.setEncoding(e);
      }
      pause() {
        return this.stream.pause();
      }
      resume() {
        return this.stream.resume();
      }
      isPaused() {
        return this.stream.isPaused();
      }
      pipe(e, r) {
        return this.stream.pipe(e, r);
      }
      unpipe(e) {
        return this.stream.unpipe(e);
      }
      unshift(e) {
        return this.stream.unshift(e);
      }
      wrap(e) {
        return this.stream.wrap(e);
      }
    };
  UIn.exports = { ZipWriter: hYt };
});