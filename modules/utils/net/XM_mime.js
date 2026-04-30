/**
 * @module XM
 * @category utils/net
 * @label mime
 * @position 974 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (XM) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var XM = T((nl) => {
  var ays = (d1(), bt(m1)),
    Cg = (nl.types = {
      document: "document",
      paragraph: "paragraph",
      run: "run",
      text: "text",
      tab: "tab",
      checkbox: "checkbox",
      hyperlink: "hyperlink",
      noteReference: "noteReference",
      image: "image",
      note: "note",
      commentReference: "commentReference",
      comment: "comment",
      table: "table",
      tableRow: "tableRow",
      tableCell: "tableCell",
      break: "break",
      bookmarkStart: "bookmarkStart",
    });
  function uys(t, e) {
    return (
      (e = e || {}),
      { type: Cg.document, children: t, notes: e.notes || new qJe({}), comments: e.comments || [] }
    );
  }
  function cys(t, e) {
    e = e || {};
    var r = e.indent || {};
    return {
      type: Cg.paragraph,
      children: t,
      styleId: e.styleId || null,
      styleName: e.styleName || null,
      numbering: e.numbering || null,
      alignment: e.alignment || null,
      indent: {
        start: r.start || null,
        end: r.end || null,
        firstLine: r.firstLine || null,
        hanging: r.hanging || null,
      },
    };
  }
  function lys(t, e) {
    return (
      (e = e || {}),
      {
        type: Cg.run,
        children: t,
        styleId: e.styleId || null,
        styleName: e.styleName || null,
        isBold: !!e.isBold,
        isUnderline: !!e.isUnderline,
        isItalic: !!e.isItalic,
        isStrikethrough: !!e.isStrikethrough,
        isAllCaps: !!e.isAllCaps,
        isSmallCaps: !!e.isSmallCaps,
        verticalAlignment: e.verticalAlignment || w_n.baseline,
        font: e.font || null,
        fontSize: e.fontSize || null,
        highlight: e.highlight || null,
      }
    );
  }
  var w_n = { baseline: "baseline", superscript: "superscript", subscript: "subscript" };
  function mys(t) {
    return { type: Cg.text, value: t };
  }
  function dys() {
    return { type: Cg.tab };
  }
  function fys(t) {
    return { type: Cg.checkbox, checked: t.checked };
  }
  function pys(t, e) {
    return { type: Cg.hyperlink, children: t, href: e.href, anchor: e.anchor, targetFrame: e.targetFrame };
  }
  function hys(t) {
    return { type: Cg.noteReference, noteType: t.noteType, noteId: t.noteId };
  }
  function qJe(t) {
    this._notes = ays.indexBy(t, function (e) {
      return x_n(e.noteType, e.noteId);
    });
  }
  qJe.prototype.resolve = function (t) {
    return this.findNoteByKey(x_n(t.noteType, t.noteId));
  };
  qJe.prototype.findNoteByKey = function (t) {
    return this._notes[t] || null;
  };
  function gys(t) {
    return { type: Cg.note, noteType: t.noteType, noteId: t.noteId, body: t.body };
  }
  function bys(t) {
    return { type: Cg.commentReference, commentId: t.commentId };
  }
  function Ays(t) {
    return {
      type: Cg.comment,
      commentId: t.commentId,
      body: t.body,
      authorName: t.authorName,
      authorInitials: t.authorInitials,
    };
  }
  function x_n(t, e) {
    return t + "-" + e;
  }
  function yys(t) {
    return {
      type: Cg.image,
      read: function (e) {
        return e
          ? t.readImage(e)
          : t.readImage().then(function (r) {
              return Buffer.from(r);
            });
      },
      readAsArrayBuffer: function () {
        return t.readImage();
      },
      readAsBase64String: function () {
        return t.readImage("base64");
      },
      readAsBuffer: function () {
        return t.readImage().then(function (e) {
          return Buffer.from(e);
        });
      },
      altText: t.altText,
      contentType: t.contentType,
    };
  }
  function _ys(t, e) {
    return ((e = e || {}), { type: Cg.table, children: t, styleId: e.styleId || null, styleName: e.styleName || null });
  }
  function Eys(t, e) {
    return ((e = e || {}), { type: Cg.tableRow, children: t, isHeader: e.isHeader || !1 });
  }
  function vys(t, e) {
    return (
      (e = e || {}),
      {
        type: Cg.tableCell,
        children: t,
        colSpan: e.colSpan == null ? 1 : e.colSpan,
        rowSpan: e.rowSpan == null ? 1 : e.rowSpan,
      }
    );
  }
  function dHt(t) {
    return { type: Cg.break, breakType: t };
  }
  function Cys(t) {
    return { type: Cg.bookmarkStart, name: t.name };
  }
  nl.document = nl.Document = uys;
  nl.paragraph = nl.Paragraph = cys;
  nl.run = nl.Run = lys;
  nl.text = nl.Text = mys;
  nl.tab = nl.Tab = dys;
  nl.checkbox = nl.Checkbox = fys;
  nl.Hyperlink = pys;
  nl.noteReference = nl.NoteReference = hys;
  nl.Notes = qJe;
  nl.Note = gys;
  nl.commentReference = bys;
  nl.comment = Ays;
  nl.Image = yys;
  nl.Table = _ys;
  nl.TableRow = Eys;
  nl.TableCell = vys;
  nl.lineBreak = dHt("line");
  nl.pageBreak = dHt("page");
  nl.columnBreak = dHt("column");
  nl.BookmarkStart = Cys;
  nl.verticalAlignment = w_n;
});