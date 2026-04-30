/**
 * @module d_e
 * @category browser/jsdom
 * @label jsdom
 * @position 1168 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (d_e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var d_e = T((cAc, v7n) => {
  var { SaxesParser: Q7s } = E7n(),
    { PassThrough: G7s } = Dg(),
    { bufferToString: q7s } = bYt();
  v7n.exports = async function* (t) {
    t.pipe && !t[Symbol.asyncIterator] && (t = t.pipe(new G7s()));
    let e = new Q7s(),
      r;
    e.on("error", (o) => {
      r = o;
    });
    let n = [];
    (e.on("opentag", (o) => n.push({ eventType: "opentag", value: o })),
      e.on("text", (o) => n.push({ eventType: "text", value: o })),
      e.on("closetag", (o) => n.push({ eventType: "closetag", value: o })));
    for await (let o of t) {
      if ((e.write(q7s(o)), r)) throw r;
      (yield n, (n = []));
    }
  };
});