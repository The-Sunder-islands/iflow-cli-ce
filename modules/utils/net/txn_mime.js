/**
 * @module txn
 * @category utils/net
 * @label mime
 * @position 1084 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (txn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var txn = T((NWt) => {
  NWt.createBodyReader = hSs;
  NWt._readNumberingProperties = exn;
  var zwn = Qwn(),
    DE = (d1(), bt(m1)),
    wm = XM(),
    Zwn = jT().Result,
    Yk = jT().warning,
    pSs = ZXe(),
    Ywn = kWt(),
    Kwn = Wwn();
  function hSs(t) {
    return {
      readXmlElement: function (e) {
        return new Jwn(t).readXmlElement(e);
      },
      readXmlElements: function (e) {
        return new Jwn(t).readXmlElements(e);
      },
    };
  }
  function Jwn(t) {
    var e = [],
      r = [],
      n = [],
      o = t.relationships,
      s = t.contentTypes,
      a = t.docxFile,
      u = t.files,
      c = t.numbering,
      m = t.styles;
    function d(se) {
      var fe = se.map(f);
      return Xwn(fe);
    }
    function f(se) {
      if (se.type === "element") {
        var fe = Q[se.name];
        if (fe) return fe(se);
        if (!Object.prototype.hasOwnProperty.call(bSs, se.name)) {
          var ge = Yk("An unrecognised element was ignored: " + se.name);
          return $ye([ge]);
        }
      }
      return Vae();
    }
    function p(se) {
      return v(se).map(function (fe) {
        return {
          type: "paragraphProperties",
          styleId: fe.styleId,
          styleName: fe.name,
          alignment: se.firstOrEmpty("w:jc").attributes["w:val"],
          numbering: exn(fe.styleId, se.firstOrEmpty("w:numPr"), c),
          indent: h(se.firstOrEmpty("w:ind")),
        };
      });
    }
    function h(se) {
      return {
        start: se.attributes["w:start"] || se.attributes["w:left"],
        end: se.attributes["w:end"] || se.attributes["w:right"],
        firstLine: se.attributes["w:firstLine"],
        hanging: se.attributes["w:hanging"],
      };
    }
    function g(se) {
      return C(se).map(function (fe) {
        var ge = se.firstOrEmpty("w:sz").attributes["w:val"],
          V = /^[0-9]+$/.test(ge) ? parseInt(ge, 10) / 2 : null;
        return {
          type: "runProperties",
          styleId: fe.styleId,
          styleName: fe.name,
          verticalAlignment: se.firstOrEmpty("w:vertAlign").attributes["w:val"],
          font: se.firstOrEmpty("w:rFonts").attributes["w:ascii"],
          fontSize: V,
          isBold: A(se.first("w:b")),
          isUnderline: b(se.first("w:u")),
          isItalic: A(se.first("w:i")),
          isStrikethrough: A(se.first("w:strike")),
          isAllCaps: A(se.first("w:caps")),
          isSmallCaps: A(se.first("w:smallCaps")),
          highlight: E(se.firstOrEmpty("w:highlight").attributes["w:val"]),
        };
      });
    }
    function b(se) {
      if (se) {
        var fe = se.attributes["w:val"];
        return fe !== void 0 && fe !== "false" && fe !== "0" && fe !== "none";
      } else return !1;
    }
    function A(se) {
      if (se) {
        var fe = se.attributes["w:val"];
        return fe !== "false" && fe !== "0";
      } else return !1;
    }
    function y(se) {
      return se !== "false" && se !== "0";
    }
    function E(se) {
      return !se || se === "none" ? null : se;
    }
    function v(se) {
      return k(se, "w:pStyle", "Paragraph", m.findParagraphStyleById);
    }
    function C(se) {
      return k(se, "w:rStyle", "Run", m.findCharacterStyleById);
    }
    function x(se) {
      return k(se, "w:tblStyle", "Table", m.findTableStyleById);
    }
    function k(se, fe, ge, V) {
      var ee = [],
        Ce = se.first(fe),
        pe = null,
        be = null;
      if (Ce && ((pe = Ce.attributes["w:val"]), pe)) {
        var Ne = V(pe);
        Ne ? (be = Ne.name) : ee.push(he(ge, pe));
      }
      return rZe({ styleId: pe, name: be }, ee);
    }
    function R(se) {
      var fe = se.attributes["w:fldCharType"];
      if (fe === "begin") (e.push({ type: "begin", fldChar: se }), (r = []));
      else if (fe === "end") {
        var ge = e.pop();
        if ((ge.type === "begin" && (ge = D(ge)), ge.type === "checkbox"))
          return k6(wm.checkbox({ checked: ge.checked }));
      } else if (fe === "separate") {
        var V = e.pop(),
          ee = D(V);
        e.push(ee);
      }
      return Vae();
    }
    function P() {
      var se = DE.last(
        e.filter(function (fe) {
          return fe.type === "hyperlink";
        }),
      );
      return se ? se.options : null;
    }
    function D(se) {
      return O(r.join(""), se.type === "begin" ? se.fldChar : pSs.emptyElement);
    }
    function O(se, fe) {
      var ge = /\s*HYPERLINK "(.*)"/.exec(se);
      if (ge) return { type: "hyperlink", options: { href: ge[1] } };
      var V = /\s*HYPERLINK\s+\\l\s+"(.*)"/.exec(se);
      if (V) return { type: "hyperlink", options: { anchor: V[1] } };
      var ee = /\s*FORMCHECKBOX\s*/.exec(se);
      if (ee) {
        var Ce = fe.firstOrEmpty("w:ffData").firstOrEmpty("w:checkBox"),
          pe = Ce.first("w:checked"),
          be = pe == null ? A(Ce.first("w:default")) : A(pe);
        return { type: "checkbox", checked: be };
      }
      return { type: "unknown" };
    }
    function N(se) {
      return (r.push(se.text()), Vae());
    }
    function F(se) {
      var fe = se.attributes["w:font"],
        ge = se.attributes["w:char"],
        V = zwn.hex(fe, ge);
      return (
        V == null && /^F0..$/.test(ge) && (V = zwn.hex(fe, ge.substring(2))),
        V == null
          ? $ye([Yk("A w:sym element with an unsupported character was ignored: char " + ge + " in font " + fe)])
          : k6(new wm.Text(V.string))
      );
    }
    function B(se) {
      return function (fe) {
        var ge = fe.attributes["w:id"];
        return k6(new wm.NoteReference({ noteType: se, noteId: ge }));
      };
    }
    function L(se) {
      return k6(wm.commentReference({ commentId: se.attributes["w:id"] }));
    }
    function G(se) {
      return d(se.children);
    }
    var Q = {
      "w:p": function (se) {
        var fe = se.firstOrEmpty("w:pPr"),
          ge = !!fe.firstOrEmpty("w:rPr").first("w:del");
        if (ge)
          return (
            se.children.forEach(function (ee) {
              n.push(ee);
            }),
            Vae()
          );
        var V = se.children;
        return (
          n.length > 0 && ((V = n.concat(V)), (n = [])),
          xg
            .map(p(fe), d(V), function (ee, Ce) {
              return new wm.Paragraph(Ce, ee);
            })
            .insertExtra()
        );
      },
      "w:r": function (se) {
        return xg.map(g(se.firstOrEmpty("w:rPr")), d(se.children), function (fe, ge) {
          var V = P();
          return (V !== null && (ge = [new wm.Hyperlink(ge, V)]), new wm.Run(ge, fe));
        });
      },
      "w:fldChar": R,
      "w:instrText": N,
      "w:t": function (se) {
        return k6(new wm.Text(se.text()));
      },
      "w:tab": function (se) {
        return k6(new wm.Tab());
      },
      "w:noBreakHyphen": function () {
        return k6(new wm.Text("\u2011"));
      },
      "w:softHyphen": function (se) {
        return k6(new wm.Text("\xAD"));
      },
      "w:sym": F,
      "w:hyperlink": function (se) {
        var fe = se.attributes["r:id"],
          ge = se.attributes["w:anchor"];
        return d(se.children).map(function (V) {
          function ee(pe) {
            var be = se.attributes["w:tgtFrame"] || null;
            return new wm.Hyperlink(V, DE.extend({ targetFrame: be }, pe));
          }
          if (fe) {
            var Ce = o.findTargetByRelationshipId(fe);
            return (ge && (Ce = Kwn.replaceFragment(Ce, ge)), ee({ href: Ce }));
          } else return ge ? ee({ anchor: ge }) : V;
        });
      },
      "w:tbl": K,
      "w:tr": U,
      "w:tc": Y,
      "w:footnoteReference": B("footnote"),
      "w:endnoteReference": B("endnote"),
      "w:commentReference": L,
      "w:br": function (se) {
        var fe = se.attributes["w:type"];
        return fe == null || fe === "textWrapping"
          ? k6(wm.lineBreak)
          : fe === "page"
            ? k6(wm.pageBreak)
            : fe === "column"
              ? k6(wm.columnBreak)
              : $ye([Yk("Unsupported break type: " + fe)]);
      },
      "w:bookmarkStart": function (se) {
        var fe = se.attributes["w:name"];
        return fe === "_GoBack" ? Vae() : k6(new wm.BookmarkStart({ name: fe }));
      },
      "mc:AlternateContent": function (se) {
        return G(se.firstOrEmpty("mc:Fallback"));
      },
      "w:sdt": function (se) {
        var fe = d(se.firstOrEmpty("w:sdtContent").children);
        return fe.map(function (ge) {
          var V = se.firstOrEmpty("w:sdtPr").first("wordml:checkbox");
          if (V) {
            var ee = V.first("wordml:checked"),
              Ce = !!ee && y(ee.attributes["wordml:val"]),
              pe = wm.checkbox({ checked: Ce }),
              be = !1,
              Ne = ge.map(
                Ywn._elementsOfType(wm.types.text, function (Ge) {
                  return Ge.value.length > 0 && !be ? ((be = !0), pe) : Ge;
                }),
              );
            return be ? Ne : pe;
          } else return ge;
        });
      },
      "w:ins": G,
      "w:object": G,
      "w:smartTag": G,
      "w:drawing": G,
      "w:pict": function (se) {
        return G(se).toExtra();
      },
      "v:roundrect": G,
      "v:shape": G,
      "v:textbox": G,
      "w:txbxContent": G,
      "wp:inline": ne,
      "wp:anchor": ne,
      "v:imagedata": Z,
      "v:group": G,
      "v:rect": G,
    };
    return { readXmlElement: f, readXmlElements: d };
    function K(se) {
      var fe = H(se.firstOrEmpty("w:tblPr"));
      return d(se.children)
        .flatMap(J)
        .flatMap(function (ge) {
          return fe.map(function (V) {
            return wm.Table(ge, V);
          });
        });
    }
    function H(se) {
      return x(se).map(function (fe) {
        return { styleId: fe.styleId, styleName: fe.name };
      });
    }
    function U(se) {
      var fe = se.firstOrEmpty("w:trPr"),
        ge = !!fe.first("w:del");
      if (ge) return Vae();
      var V = !!fe.first("w:tblHeader");
      return d(se.children).map(function (ee) {
        return wm.TableRow(ee, { isHeader: V });
      });
    }
    function Y(se) {
      return d(se.children).map(function (fe) {
        var ge = se.firstOrEmpty("w:tcPr"),
          V = ge.firstOrEmpty("w:gridSpan").attributes["w:val"],
          ee = V ? parseInt(V, 10) : 1,
          Ce = wm.TableCell(fe, { colSpan: ee });
        return ((Ce._vMerge = X(ge)), Ce);
      });
    }
    function X(se) {
      var fe = se.first("w:vMerge");
      if (fe) {
        var ge = fe.attributes["w:val"];
        return ge === "continue" || !ge;
      } else return null;
    }
    function J(se) {
      var fe = DE.any(se, function (ee) {
        return ee.type !== wm.types.tableRow;
      });
      if (fe) return (q(se), rZe(se, [Yk("unexpected non-row element in table, cell merging may be incorrect")]));
      var ge = DE.any(se, function (ee) {
        return DE.any(ee.children, function (Ce) {
          return Ce.type !== wm.types.tableCell;
        });
      });
      if (ge) return (q(se), rZe(se, [Yk("unexpected non-cell element in table row, cell merging may be incorrect")]));
      var V = {};
      return (
        se.forEach(function (ee) {
          var Ce = 0;
          ee.children.forEach(function (pe) {
            (pe._vMerge && V[Ce] ? V[Ce].rowSpan++ : ((V[Ce] = pe), (pe._vMerge = !1)), (Ce += pe.colSpan));
          });
        }),
        se.forEach(function (ee) {
          ((ee.children = ee.children.filter(function (Ce) {
            return !Ce._vMerge;
          })),
            ee.children.forEach(function (Ce) {
              delete Ce._vMerge;
            }));
        }),
        k6(se)
      );
    }
    function q(se) {
      se.forEach(function (fe) {
        var ge = Ywn.getDescendantsOfType(fe, wm.types.tableCell);
        ge.forEach(function (V) {
          delete V._vMerge;
        });
      });
    }
    function ne(se) {
      var fe = se
        .getElementsByTagName("a:graphic")
        .getElementsByTagName("a:graphicData")
        .getElementsByTagName("pic:pic")
        .getElementsByTagName("pic:blipFill")
        .getElementsByTagName("a:blip");
      return Xwn(fe.map(de.bind(null, se)));
    }
    function de(se, fe) {
      var ge = se.first("wp:docPr").attributes,
        V = ce(ge.descr) ? ge.title : ge.descr,
        ee = ye(fe);
      return ee === null ? $ye([Yk("Could not find image file for a:blip element")]) : ue(ee, V);
    }
    function ce(se) {
      return se == null || /^\s*$/.test(se);
    }
    function ye(se) {
      var fe = se.attributes["r:embed"],
        ge = se.attributes["r:link"];
      if (fe) return oe(fe);
      if (ge) {
        var V = o.findTargetByRelationshipId(ge);
        return { path: V, read: u.read.bind(u, V) };
      } else return null;
    }
    function Z(se) {
      var fe = se.attributes["r:id"];
      return fe
        ? ue(oe(fe), se.attributes["o:title"])
        : $ye([Yk("A v:imagedata element without a relationship ID was ignored")]);
    }
    function oe(se) {
      var fe = Kwn.uriToZipEntryName("word", o.findTargetByRelationshipId(se));
      return { path: fe, read: a.read.bind(a, fe) };
    }
    function ue(se, fe) {
      var ge = s.findContentType(se.path),
        V = wm.Image({ readImage: se.read, altText: fe, contentType: ge }),
        ee = gSs[ge] ? [] : Yk("Image of type " + ge + " is unlikely to display in web browsers");
      return rZe(V, ee);
    }
    function he(se, fe) {
      return Yk(se + " style with ID " + fe + " was referenced but not defined in the document");
    }
  }
  function exn(t, e, r) {
    var n = e.firstOrEmpty("w:ilvl").attributes["w:val"],
      o = e.firstOrEmpty("w:numId").attributes["w:val"];
    if (n !== void 0 && o !== void 0) return r.findLevel(o, n);
    if (t != null) {
      var s = r.findLevelByParagraphStyleId(t);
      if (s != null) return s;
    }
    return o !== void 0 ? r.findLevel(o, "0") : null;
  }
  var gSs = { "image/png": !0, "image/gif": !0, "image/jpeg": !0, "image/svg+xml": !0, "image/tiff": !0 },
    bSs = {
      "office-word:wrap": !0,
      "v:shadow": !0,
      "v:shapetype": !0,
      "w:annotationRef": !0,
      "w:bookmarkEnd": !0,
      "w:sectPr": !0,
      "w:proofErr": !0,
      "w:lastRenderedPageBreak": !0,
      "w:commentRangeStart": !0,
      "w:commentRangeEnd": !0,
      "w:del": !0,
      "w:footnoteRef": !0,
      "w:endnoteRef": !0,
      "w:pPr": !0,
      "w:rPr": !0,
      "w:tblPr": !0,
      "w:tblGrid": !0,
      "w:trPr": !0,
      "w:tcPr": !0,
    };
  function $ye(t) {
    return new xg(null, null, t);
  }
  function Vae() {
    return new xg(null);
  }
  function k6(t) {
    return new xg(t);
  }
  function rZe(t, e) {
    return new xg(t, null, e);
  }
  function xg(t, e, r) {
    ((this.value = t || []),
      (this.extra = e || []),
      (this._result = new Zwn({ element: this.value, extra: e }, r)),
      (this.messages = this._result.messages));
  }
  xg.prototype.toExtra = function () {
    return new xg(null, nZe(this.extra, this.value), this.messages);
  };
  xg.prototype.insertExtra = function () {
    var t = this.extra;
    return t && t.length ? new xg(nZe(this.value, t), null, this.messages) : this;
  };
  xg.prototype.map = function (t) {
    var e = this._result.map(function (r) {
      return t(r.element);
    });
    return new xg(e.value, this.extra, e.messages);
  };
  xg.prototype.flatMap = function (t) {
    var e = this._result.flatMap(function (r) {
      return t(r.element)._result;
    });
    return new xg(e.value.element, nZe(this.extra, e.value.extra), e.messages);
  };
  xg.map = function (t, e, r) {
    return new xg(r(t.value, e.value), nZe(t.extra, e.extra), t.messages.concat(e.messages));
  };
  function Xwn(t) {
    var e = Zwn.combine(DE.pluck(t, "_result"));
    return new xg(
      DE.flatten(DE.pluck(e.value, "element")),
      DE.filter(DE.flatten(DE.pluck(e.value, "extra")), ASs),
      e.messages,
    );
  }
  function nZe(t, e) {
    return DE.flatten([t, e]);
  }
  function ASs(t) {
    return t;
  }
});