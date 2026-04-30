/**
 * @module BTn
 * @category unknown
 * @label unknown
 * @position 1120 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (BTn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var BTn = T((SZe) => {
  var Cxs = (d1(), bt(m1)),
    Qr = nzt(),
    Zb = DTn(),
    vZe = qye(),
    Sxs = kTn().tokenise,
    izt = jT();
  SZe.readHtmlPath = Dxs;
  SZe.readDocumentMatcher = Txs;
  SZe.readStyle = wxs;
  function wxs(t) {
    return ozt(Lxs, t);
  }
  function xxs() {
    return Qr.rules
      .sequence(
        Qr.rules.sequence.capture(OTn()),
        Qr.rules.tokenOfType("whitespace"),
        Qr.rules.tokenOfType("arrow"),
        Qr.rules.sequence.capture(
          Qr.rules.optional(
            Qr.rules.sequence(Qr.rules.tokenOfType("whitespace"), Qr.rules.sequence.capture(NTn())).head(),
          ),
        ),
        Qr.rules.tokenOfType("end"),
      )
      .map(function (t, e) {
        return { from: t, to: e.valueOrElse(vZe.empty) };
      });
  }
  function Txs(t) {
    return ozt(OTn(), t);
  }
  function OTn() {
    var t = Qr.rules.sequence,
      e = function (k, R) {
        return Qr.rules.then(Qr.rules.token("identifier", k), function () {
          return R;
        });
      },
      r = e("p", Zb.paragraph),
      n = e("r", Zb.run),
      o = Qr.rules.firstOf("p or r or table", r, n),
      s = Qr.rules
        .sequence(Qr.rules.tokenOfType("dot"), Qr.rules.sequence.cut(), Qr.rules.sequence.capture(CZe))
        .map(function (k) {
          return { styleId: k };
        }),
      a = Qr.rules.firstOf(
        "style name matcher",
        Qr.rules.then(
          Qr.rules
            .sequence(Qr.rules.tokenOfType("equals"), Qr.rules.sequence.cut(), Qr.rules.sequence.capture(Zae))
            .head(),
          function (k) {
            return { styleName: Zb.equalTo(k) };
          },
        ),
        Qr.rules.then(
          Qr.rules
            .sequence(Qr.rules.tokenOfType("startsWith"), Qr.rules.sequence.cut(), Qr.rules.sequence.capture(Zae))
            .head(),
          function (k) {
            return { styleName: Zb.startsWith(k) };
          },
        ),
      ),
      u = Qr.rules
        .sequence(
          Qr.rules.tokenOfType("open-square-bracket"),
          Qr.rules.sequence.cut(),
          Qr.rules.token("identifier", "style-name"),
          Qr.rules.sequence.capture(a),
          Qr.rules.tokenOfType("close-square-bracket"),
        )
        .head(),
      c = Qr.rules.firstOf("list type", e("ordered-list", { isOrdered: !0 }), e("unordered-list", { isOrdered: !1 })),
      m = t(
        Qr.rules.tokenOfType("colon"),
        t.capture(c),
        t.cut(),
        Qr.rules.tokenOfType("open-paren"),
        t.capture(Ixs),
        Qr.rules.tokenOfType("close-paren"),
      ).map(function (k, R) {
        return { list: { isOrdered: k.isOrdered, levelIndex: R - 1 } };
      });
    function d(k) {
      var R = Qr.rules.firstOf.apply(Qr.rules.firstOf, ["matcher suffix"].concat(k)),
        P = Qr.rules.zeroOrMore(R);
      return Qr.rules.then(P, function (D) {
        var O = {};
        return (
          D.forEach(function (N) {
            Cxs.extend(O, N);
          }),
          O
        );
      });
    }
    var f = t(t.capture(o), t.capture(d([s, u, m]))).map(function (k, R) {
        return k(R);
      }),
      p = t(Qr.rules.token("identifier", "table"), t.capture(d([s, u]))).map(function (k) {
        return Zb.table(k);
      }),
      h = e("b", Zb.bold),
      g = e("i", Zb.italic),
      b = e("u", Zb.underline),
      A = e("strike", Zb.strikethrough),
      y = e("all-caps", Zb.allCaps),
      E = e("small-caps", Zb.smallCaps),
      v = t(
        Qr.rules.token("identifier", "highlight"),
        Qr.rules.sequence.capture(
          Qr.rules.optional(
            Qr.rules
              .sequence(
                Qr.rules.tokenOfType("open-square-bracket"),
                Qr.rules.sequence.cut(),
                Qr.rules.token("identifier", "color"),
                Qr.rules.tokenOfType("equals"),
                Qr.rules.sequence.capture(Zae),
                Qr.rules.tokenOfType("close-square-bracket"),
              )
              .head(),
          ),
        ),
      ).map(function (k) {
        return Zb.highlight({ color: k.valueOrElse(void 0) });
      }),
      C = e("comment-reference", Zb.commentReference),
      x = t(
        Qr.rules.token("identifier", "br"),
        t.cut(),
        Qr.rules.tokenOfType("open-square-bracket"),
        Qr.rules.token("identifier", "type"),
        Qr.rules.tokenOfType("equals"),
        t.capture(Zae),
        Qr.rules.tokenOfType("close-square-bracket"),
      ).map(function (k) {
        switch (k) {
          case "line":
            return Zb.lineBreak;
          case "page":
            return Zb.pageBreak;
          case "column":
            return Zb.columnBreak;
          default:
        }
      });
    return Qr.rules.firstOf("element type", f, p, h, g, b, A, y, E, v, C, x);
  }
  function Dxs(t) {
    return ozt(NTn(), t);
  }
  function NTn() {
    var t = Qr.rules.sequence.capture,
      e = Qr.rules.tokenOfType("whitespace"),
      r = Qr.rules.then(
        Qr.rules.optional(Qr.rules.sequence(Qr.rules.tokenOfType("colon"), Qr.rules.token("identifier", "fresh"))),
        function (a) {
          return a
            .map(function () {
              return !0;
            })
            .valueOrElse(!1);
        },
      ),
      n = Qr.rules.then(
        Qr.rules.optional(
          Qr.rules
            .sequence(
              Qr.rules.tokenOfType("colon"),
              Qr.rules.token("identifier", "separator"),
              Qr.rules.tokenOfType("open-paren"),
              t(Zae),
              Qr.rules.tokenOfType("close-paren"),
            )
            .head(),
        ),
        function (a) {
          return a.valueOrElse("");
        },
      ),
      o = Qr.rules.oneOrMoreWithSeparator(CZe, Qr.rules.tokenOfType("choice")),
      s = Qr.rules.sequence(t(o), t(Qr.rules.zeroOrMore(Nxs)), t(r), t(n)).map(function (a, u, c, m) {
        var d = {},
          f = {};
        return (
          u.forEach(function (p) {
            p.append && d[p.name] ? (d[p.name] += " " + p.value) : (d[p.name] = p.value);
          }),
          c && (f.fresh = !0),
          m && (f.separator = m),
          vZe.element(a, d, f)
        );
      });
    return Qr.rules.firstOf(
      "html path",
      Qr.rules.then(Qr.rules.tokenOfType("bang"), function () {
        return vZe.ignore;
      }),
      Qr.rules.then(
        Qr.rules.zeroOrMoreWithSeparator(s, Qr.rules.sequence(e, Qr.rules.tokenOfType("gt"), e)),
        vZe.elements,
      ),
    );
  }
  var CZe = Qr.rules.then(Qr.rules.tokenOfType("identifier"), PTn),
    Ixs = Qr.rules.tokenOfType("integer"),
    Zae = Qr.rules.then(Qr.rules.tokenOfType("string"), PTn),
    Rxs = {
      n: `
`,
      r: "\r",
      t: "	",
    };
  function PTn(t) {
    return t.replace(/\\(.)/g, function (e, r) {
      return Rxs[r] || r;
    });
  }
  var kxs = Qr.rules
      .sequence(
        Qr.rules.tokenOfType("open-square-bracket"),
        Qr.rules.sequence.cut(),
        Qr.rules.sequence.capture(CZe),
        Qr.rules.tokenOfType("equals"),
        Qr.rules.sequence.capture(Zae),
        Qr.rules.tokenOfType("close-square-bracket"),
      )
      .map(function (t, e) {
        return { name: t, value: e, append: !1 };
      }),
    Oxs = Qr.rules
      .sequence(Qr.rules.tokenOfType("dot"), Qr.rules.sequence.cut(), Qr.rules.sequence.capture(CZe))
      .map(function (t) {
        return { name: "class", value: t, append: !0 };
      }),
    Nxs = Qr.rules.firstOf("attribute or class", kxs, Oxs);
  function ozt(t, e) {
    var r = Sxs(e),
      n = Qr.Parser(),
      o = n.parseTokens(t, r);
    return o.isSuccess() ? izt.success(o.value()) : new izt.Result(null, [izt.warning(Pxs(e, o))]);
  }
  function Pxs(t, e) {
    return (
      "Did not understand this style mapping, so ignored it: " +
      t +
      `
` +
      e.errors().map(Bxs).join(`
`)
    );
  }
  function Bxs(t) {
    return "Error was at character number " + t.characterNumber() + ": Expected " + t.expected + " but got " + t.actual;
  }
  var Lxs = xxs();
});