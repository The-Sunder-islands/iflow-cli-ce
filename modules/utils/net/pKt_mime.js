/**
 * @module pKt
 * @category utils/net
 * @label mime
 * @position 1195 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pKt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pKt = T((MAc, pRn) => {
  var zRs = Ig(),
    YRs = Kr(),
    wet = class t extends YRs {
      render(e, r) {
        (e.openXml(zRs.StdDocAttributes), e.openNode("Types", t.PROPERTY_ATTRIBUTES));
        let n = {};
        ((r.media || []).forEach((s) => {
          if (s.type === "image") {
            let a = s.extension;
            n[a] || ((n[a] = !0), e.leafNode("Default", { Extension: a, ContentType: `image/${a}` }));
          }
        }),
          e.leafNode("Default", {
            Extension: "rels",
            ContentType: "application/vnd.openxmlformats-package.relationships+xml",
          }),
          e.leafNode("Default", { Extension: "xml", ContentType: "application/xml" }),
          e.leafNode("Override", {
            PartName: "/xl/workbook.xml",
            ContentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
          }),
          r.worksheets.forEach((s) => {
            let a = `/xl/worksheets/sheet${s.id}.xml`;
            e.leafNode("Override", {
              PartName: a,
              ContentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
            });
          }),
          e.leafNode("Override", {
            PartName: "/xl/theme/theme1.xml",
            ContentType: "application/vnd.openxmlformats-officedocument.theme+xml",
          }),
          e.leafNode("Override", {
            PartName: "/xl/styles.xml",
            ContentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
          }),
          r.sharedStrings &&
            r.sharedStrings.count &&
            e.leafNode("Override", {
              PartName: "/xl/sharedStrings.xml",
              ContentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
            }),
          r.tables &&
            r.tables.forEach((s) => {
              e.leafNode("Override", {
                PartName: `/xl/tables/${s.target}`,
                ContentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml",
              });
            }),
          r.drawings &&
            r.drawings.forEach((s) => {
              e.leafNode("Override", {
                PartName: `/xl/drawings/${s.name}.xml`,
                ContentType: "application/vnd.openxmlformats-officedocument.drawing+xml",
              });
            }),
          r.commentRefs &&
            (e.leafNode("Default", {
              Extension: "vml",
              ContentType: "application/vnd.openxmlformats-officedocument.vmlDrawing",
            }),
            r.commentRefs.forEach(({ commentName: s }) => {
              e.leafNode("Override", {
                PartName: `/xl/${s}.xml`,
                ContentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
              });
            })),
          e.leafNode("Override", {
            PartName: "/docProps/core.xml",
            ContentType: "application/vnd.openxmlformats-package.core-properties+xml",
          }),
          e.leafNode("Override", {
            PartName: "/docProps/app.xml",
            ContentType: "application/vnd.openxmlformats-officedocument.extended-properties+xml",
          }),
          e.closeNode());
      }
      parseOpen() {
        return !1;
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  wet.PROPERTY_ATTRIBUTES = { xmlns: "http://schemas.openxmlformats.org/package/2006/content-types" };
  pRn.exports = wet;
});