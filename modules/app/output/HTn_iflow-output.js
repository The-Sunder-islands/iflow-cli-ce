/**
 * @module HTn
 * @category app/output
 * @label iflow-output
 * @position 1124 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (HTn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var HTn = T((eS) => {
  var Wxs = (d1(), bt(m1)),
    qTn = Txn(),
    szt = Rxn(),
    zxs = rTn().DocumentConverter,
    Yxs = oTn().convertElementToRawText,
    Kxs = BTn().readStyle,
    Jxs = FTn().readOptions,
    TZe = jTn(),
    Xxs = jT().Result;
  eS.convertToHtml = Zxs;
  eS.convertToMarkdown = eTs;
  eS.convert = azt;
  eS.extractRawText = iTs;
  eS.images = WWt();
  eS.transforms = kWt();
  eS.underline = GTn();
  eS.embedStyleMap = oTs;
  eS.readEmbeddedStyleMap = tTs;
  function Zxs(t, e) {
    return azt(t, e);
  }
  function eTs(t, e) {
    var r = Object.create(e || {});
    return ((r.outputFormat = "markdown"), azt(t, r));
  }
  function azt(t, e) {
    return (
      (e = Jxs(e)),
      TZe.openZip(t)
        .tap(function (r) {
          return szt.readStyleMap(r).then(function (n) {
            e.embeddedStyleMap = n;
          });
        })
        .then(function (r) {
          return qTn
            .read(r, t, e)
            .then(function (n) {
              return n.map(e.transformDocument);
            })
            .then(function (n) {
              return rTs(n, e);
            });
        })
    );
  }
  function tTs(t) {
    return TZe.openZip(t).then(szt.readStyleMap);
  }
  function rTs(t, e) {
    var r = nTs(e.readStyleMap()),
      n = Wxs.extend({}, e, { styleMap: r.value }),
      o = new zxs(n);
    return t.flatMapThen(function (s) {
      return r.flatMapThen(function (a) {
        return o.convertToHtml(s);
      });
    });
  }
  function nTs(t) {
    return Xxs.combine((t || []).map(Kxs)).map(function (e) {
      return e.filter(function (r) {
        return !!r;
      });
    });
  }
  function iTs(t) {
    return TZe.openZip(t)
      .then(qTn.read)
      .then(function (e) {
        return e.map(Yxs);
      });
  }
  function oTs(t, e) {
    return TZe.openZip(t)
      .tap(function (r) {
        return szt.writeStyleMap(r, e);
      })
      .then(function (r) {
        return r.toArrayBuffer();
      })
      .then(function (r) {
        return {
          toArrayBuffer: function () {
            return r;
          },
          toBuffer: function () {
            return Buffer.from(r);
          },
        };
      });
  }
  eS.styleMapping = function () {
    throw new Error(
      `Use a raw string instead of mammoth.styleMapping e.g. "p[style-name='Title'] => h1" instead of mammoth.styleMapping("p[style-name='Title'] => h1")`,
    );
  };
});