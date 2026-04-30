/**
 * @module rTn
 * @category app/output
 * @label iflow-output
 * @position 1104 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (rTn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var rTn = T((KWt) => {
  var pF = (d1(), bt(m1)),
    Zxn = Pk(),
    gZe = XM(),
    IE = qye(),
    YWt = jT(),
    Yws = WWt(),
    Du = Hye(),
    Kws = Xxn();
  KWt.DocumentConverter = Jws;
  function Jws(t) {
    return {
      convertToHtml: function (e) {
        var r = pF.indexBy(e.type === gZe.types.document ? e.comments : [], "commentId"),
          n = new Xws(t, r);
        return n.convertToHtml(e);
      },
    };
  }
  function Xws(t, e) {
    var r = 1,
      n = [],
      o = [];
    t = pF.extend({ ignoreEmptyParagraphs: !0 }, t);
    var s = t.idPrefix === void 0 ? "" : t.idPrefix,
      a = t.ignoreEmptyParagraphs,
      u = IE.topLevelElement("p"),
      c = t.styleMap || [];
    function m(H) {
      var U = [],
        Y = f(H, U, {}),
        X = [];
      tTn(Y, function (q) {
        q.type === "deferred" && X.push(q);
      });
      var J = {};
      return Zxn.mapSeries(X, function (q) {
        return q.value().then(function (ne) {
          J[q.id] = ne;
        });
      }).then(function () {
        function q(de) {
          return zWt(de, function (ce) {
            return ce.type === "deferred"
              ? J[ce.id]
              : ce.children
                ? [pF.extend({}, ce, { children: q(ce.children) })]
                : [ce];
          });
        }
        var ne = Kws.writer({ prettyPrint: t.prettyPrint, outputFormat: t.outputFormat });
        return (Du.write(ne, Du.simplify(q(Y))), new YWt.Result(ne.asString(), U));
      });
    }
    function d(H, U, Y) {
      return zWt(H, function (X) {
        return f(X, U, Y);
      });
    }
    function f(H, U, Y) {
      if (!Y) throw new Error("options not set");
      var X = K[H.type];
      return X ? X(H, U, Y) : [];
    }
    function p(H, U, Y) {
      return h(H, U).wrap(function () {
        var X = d(H.children, U, Y);
        return a ? X : [Du.forceWrite].concat(X);
      });
    }
    function h(H, U) {
      var Y = y(H);
      return Y ? Y.to : (H.styleId && U.push(eTn("paragraph", H)), u);
    }
    function g(H, U, Y) {
      var X = function () {
          return d(H.children, U, Y);
        },
        J = [];
      if (H.highlight !== null) {
        var q = A({ type: "highlight", color: H.highlight });
        q && J.push(q);
      }
      (H.isSmallCaps && J.push(b("smallCaps")),
        H.isAllCaps && J.push(b("allCaps")),
        H.isStrikethrough && J.push(b("strikethrough", "s")),
        H.isUnderline && J.push(b("underline")),
        H.verticalAlignment === gZe.verticalAlignment.subscript && J.push(IE.element("sub", {}, { fresh: !1 })),
        H.verticalAlignment === gZe.verticalAlignment.superscript && J.push(IE.element("sup", {}, { fresh: !1 })),
        H.isItalic && J.push(b("italic", "em")),
        H.isBold && J.push(b("bold", "strong")));
      var ne = IE.empty,
        de = y(H);
      return (
        de ? (ne = de.to) : H.styleId && U.push(eTn("run", H)),
        J.push(ne),
        J.forEach(function (ce) {
          X = ce.wrap.bind(ce, X);
        }),
        X()
      );
    }
    function b(H, U) {
      var Y = A({ type: H });
      return Y || (U ? IE.element(U, {}, { fresh: !1 }) : IE.empty);
    }
    function A(H, U) {
      var Y = y(H);
      return Y ? Y.to : U;
    }
    function y(H) {
      for (var U = 0; U < c.length; U++) if (c[U].from.matches(H)) return c[U];
    }
    function E(H) {
      return function (U, Y) {
        return Zxn.attempt(function () {
          return H(U, Y);
        }).caught(function (X) {
          return (Y.push(YWt.error(X)), []);
        });
      };
    }
    function v(H) {
      return x(H.noteType, H.noteId);
    }
    function C(H) {
      return k(H.noteType, H.noteId);
    }
    function x(H, U) {
      return R(H + "-" + U);
    }
    function k(H, U) {
      return R(H + "-ref-" + U);
    }
    function R(H) {
      return s + H;
    }
    var P = IE.elements([IE.element("table", {}, { fresh: !0 })]);
    function D(H, U, Y) {
      return A(H, P).wrap(function () {
        return O(H, U, Y);
      });
    }
    function O(H, U, Y) {
      var X = pF.findIndex(H.children, function (de) {
        return !de.type === gZe.types.tableRow || !de.isHeader;
      });
      X === -1 && (X = H.children.length);
      var J;
      if (X === 0) J = d(H.children, U, pF.extend({}, Y, { isTableHeader: !1 }));
      else {
        var q = d(H.children.slice(0, X), U, pF.extend({}, Y, { isTableHeader: !0 })),
          ne = d(H.children.slice(X), U, pF.extend({}, Y, { isTableHeader: !1 }));
        J = [Du.freshElement("thead", {}, q), Du.freshElement("tbody", {}, ne)];
      }
      return [Du.forceWrite].concat(J);
    }
    function N(H, U, Y) {
      var X = d(H.children, U, Y);
      return [Du.freshElement("tr", {}, [Du.forceWrite].concat(X))];
    }
    function F(H, U, Y) {
      var X = Y.isTableHeader ? "th" : "td",
        J = d(H.children, U, Y),
        q = {};
      return (
        H.colSpan !== 1 && (q.colspan = H.colSpan.toString()),
        H.rowSpan !== 1 && (q.rowspan = H.rowSpan.toString()),
        [Du.freshElement(X, q, [Du.forceWrite].concat(J))]
      );
    }
    function B(H, U, Y) {
      return A(H, IE.ignore).wrap(function () {
        var X = e[H.commentId],
          J = o.length + 1,
          q = "[" + txs(X) + J + "]";
        return (
          o.push({ label: q, comment: X }),
          [Du.freshElement("a", { href: "#" + x("comment", H.commentId), id: k("comment", H.commentId) }, [Du.text(q)])]
        );
      });
    }
    function L(H, U, Y) {
      var X = H.label,
        J = H.comment,
        q = d(J.body, U, Y).concat([
          Du.nonFreshElement("p", {}, [
            Du.text(" "),
            Du.freshElement("a", { href: "#" + k("comment", J.commentId) }, [Du.text("\u2191")]),
          ]),
        ]);
      return [
        Du.freshElement("dt", { id: x("comment", J.commentId) }, [Du.text("Comment " + X)]),
        Du.freshElement("dd", {}, q),
      ];
    }
    function G(H, U, Y) {
      return Q(H).wrap(function () {
        return [];
      });
    }
    function Q(H) {
      var U = y(H);
      return U ? U.to : H.breakType === "line" ? IE.topLevelElement("br") : IE.empty;
    }
    var K = {
      document: function (H, U, Y) {
        var X = d(H.children, U, Y),
          J = n.map(function (ne) {
            return H.notes.resolve(ne);
          }),
          q = d(J, U, Y);
        return X.concat([
          Du.freshElement("ol", {}, q),
          Du.freshElement(
            "dl",
            {},
            zWt(o, function (ne) {
              return L(ne, U, Y);
            }),
          ),
        ]);
      },
      paragraph: p,
      run: g,
      text: function (H, U, Y) {
        return [Du.text(H.value)];
      },
      tab: function (H, U, Y) {
        return [Du.text("	")];
      },
      hyperlink: function (H, U, Y) {
        var X = H.anchor ? "#" + R(H.anchor) : H.href,
          J = { href: X };
        H.targetFrame != null && (J.target = H.targetFrame);
        var q = d(H.children, U, Y);
        return [Du.nonFreshElement("a", J, q)];
      },
      checkbox: function (H) {
        var U = { type: "checkbox" };
        return (H.checked && (U.checked = "checked"), [Du.freshElement("input", U)]);
      },
      bookmarkStart: function (H, U, Y) {
        var X = Du.freshElement("a", { id: R(H.name) }, [Du.forceWrite]);
        return [X];
      },
      noteReference: function (H, U, Y) {
        n.push(H);
        var X = Du.freshElement("a", { href: "#" + v(H), id: C(H) }, [Du.text("[" + r++ + "]")]);
        return [Du.freshElement("sup", {}, [X])];
      },
      note: function (H, U, Y) {
        var X = d(H.body, U, Y),
          J = Du.elementWithTag(IE.element("p", {}, { fresh: !1 }), [
            Du.text(" "),
            Du.freshElement("a", { href: "#" + C(H) }, [Du.text("\u2191")]),
          ]),
          q = X.concat([J]);
        return Du.freshElement("li", { id: v(H) }, q);
      },
      commentReference: B,
      comment: L,
      image: exs(E(t.convertImage || Yws.dataUri)),
      table: D,
      tableRow: N,
      tableCell: F,
      break: G,
    };
    return { convertToHtml: m };
  }
  var Zws = 1;
  function exs(t) {
    return function (e, r, n) {
      return [
        {
          type: "deferred",
          id: Zws++,
          value: function () {
            return t(e, r, n);
          },
        },
      ];
    };
  }
  function eTn(t, e) {
    return YWt.warning("Unrecognised " + t + " style: '" + e.styleName + "' (Style ID: " + e.styleId + ")");
  }
  function zWt(t, e) {
    return pF.flatten(t.map(e), !0);
  }
  function tTn(t, e) {
    t.forEach(function (r) {
      (e(r), r.children && tTn(r.children, e));
    });
  }
  var txs = (KWt.commentAuthorLabel = function (e) {
    return e.authorInitials || "";
  });
});