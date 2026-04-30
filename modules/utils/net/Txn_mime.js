/**
 * @module Txn
 * @category utils/net
 * @label mime
 * @position 1094 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Txn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Txn = T((UWt) => {
  UWt.read = ZSs;
  UWt._findPartPaths = wxn;
  var WSs = Pk(),
    zSs = XM(),
    FWt = jT().Result,
    lZe = iWt(),
    Sxn = Fwn().readXmlFromZipFile,
    YSs = txn().createBodyReader,
    KSs = nxn().DocumentXmlReader,
    zae = ixn(),
    yxn = sxn(),
    _xn = axn(),
    Exn = cxn(),
    vxn = mxn(),
    JSs = fxn(),
    XSs = Axn().Files;
  function ZSs(t, e, r) {
    ((e = e || {}), (r = r || {}));
    var n = new XSs({ externalFileAccess: r.externalFileAccess, relativeToFile: e.path });
    return WSs.props({ contentTypes: tws(t), partPaths: wxn(t), docxFile: t, files: n })
      .also(function (o) {
        return { styles: nws(t, o.partPaths.styles) };
      })
      .also(function (o) {
        return { numbering: rws(t, o.partPaths.numbering, o.styles) };
      })
      .also(function (o) {
        return {
          footnotes: cZe(o.partPaths.footnotes, o, function (s, a) {
            return a ? vxn.createFootnotesReader(s)(a) : new FWt([]);
          }),
          endnotes: cZe(o.partPaths.endnotes, o, function (s, a) {
            return a ? vxn.createEndnotesReader(s)(a) : new FWt([]);
          }),
          comments: cZe(o.partPaths.comments, o, function (s, a) {
            return a ? JSs.createCommentsReader(s)(a) : new FWt([]);
          }),
        };
      })
      .also(function (o) {
        return {
          notes: o.footnotes.flatMap(function (s) {
            return o.endnotes.map(function (a) {
              return new zSs.Notes(s.concat(a));
            });
          }),
        };
      })
      .then(function (o) {
        return cZe(o.partPaths.mainDocument, o, function (s, a) {
          return o.notes.flatMap(function (u) {
            return o.comments.flatMap(function (c) {
              var m = new KSs({ bodyReader: s, notes: u, comments: c });
              return m.convertXmlToDocument(a);
            });
          });
        });
      });
  }
  function wxn(t) {
    return iws(t).then(function (e) {
      var r = Cxn({
        docxFile: t,
        relationships: e,
        relationshipType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
        basePath: "",
        fallbackPath: "word/document.xml",
      });
      if (!t.exists(r)) throw new Error("Could not find main document part. Are you sure this is a valid .docx file?");
      return Yae({ filename: xxn(r), readElement: zae.readRelationships, defaultValue: zae.defaultValue })(t).then(
        function (n) {
          function o(s) {
            return Cxn({
              docxFile: t,
              relationships: n,
              relationshipType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/" + s,
              basePath: lZe.splitPath(r).dirname,
              fallbackPath: "word/" + s + ".xml",
            });
          }
          return {
            mainDocument: r,
            comments: o("comments"),
            endnotes: o("endnotes"),
            footnotes: o("footnotes"),
            numbering: o("numbering"),
            styles: o("styles"),
          };
        },
      );
    });
  }
  function Cxn(t) {
    var e = t.docxFile,
      r = t.relationships,
      n = t.relationshipType,
      o = t.basePath,
      s = t.fallbackPath,
      a = r.findTargetsByType(n),
      u = a.map(function (m) {
        return ews(lZe.joinPath(o, m), "/");
      }),
      c = u.filter(function (m) {
        return e.exists(m);
      });
    return c.length === 0 ? s : c[0];
  }
  function ews(t, e) {
    return t.substring(0, e.length) === e ? t.substring(e.length) : t;
  }
  function Yae(t) {
    return function (e) {
      return Sxn(e, t.filename).then(function (r) {
        return r ? t.readElement(r) : t.defaultValue;
      });
    };
  }
  function cZe(t, e, r) {
    var n = Yae({ filename: xxn(t), readElement: zae.readRelationships, defaultValue: zae.defaultValue });
    return n(e.docxFile).then(function (o) {
      var s = new YSs({
        relationships: o,
        contentTypes: e.contentTypes,
        docxFile: e.docxFile,
        numbering: e.numbering,
        styles: e.styles,
        files: e.files,
      });
      return Sxn(e.docxFile, t).then(function (a) {
        return r(s, a);
      });
    });
  }
  function xxn(t) {
    var e = lZe.splitPath(t);
    return lZe.joinPath(e.dirname, "_rels", e.basename + ".rels");
  }
  var tws = Yae({
    filename: "[Content_Types].xml",
    readElement: yxn.readContentTypesFromXml,
    defaultValue: yxn.defaultContentTypes,
  });
  function rws(t, e, r) {
    return Yae({
      filename: e,
      readElement: function (n) {
        return _xn.readNumberingXml(n, { styles: r });
      },
      defaultValue: _xn.defaultNumbering,
    })(t);
  }
  function nws(t, e) {
    return Yae({ filename: e, readElement: Exn.readStylesXml, defaultValue: Exn.defaultStyles })(t);
  }
  var iws = Yae({ filename: "_rels/.rels", readElement: zae.readRelationships, defaultValue: zae.defaultValue });
});