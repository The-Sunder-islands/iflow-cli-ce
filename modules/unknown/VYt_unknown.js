/**
 * @module VYt
 * @category unknown
 * @label unknown
 * @position 1178 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (VYt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var VYt = T((yAc, B7n) => {
  var get = Kr(),
    HYt = CF(),
    fet = class extends get {
      constructor() {
        (super(), (this.map = { color: new HYt() }));
      }
      get tag() {
        return "stop";
      }
      render(e, r) {
        (e.openNode("stop"), e.addAttribute("position", r.position), this.map.color.render(e, r.color), e.closeNode());
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case "stop":
            return ((this.model = { position: parseFloat(e.attributes.position) }), !0);
          case "color":
            return ((this.parser = this.map.color), this.parser.parseOpen(e), !0);
          default:
            return !1;
        }
      }
      parseText() {}
      parseClose(e) {
        return this.parser
          ? (this.parser.parseClose(e) || ((this.model.color = this.parser.model), (this.parser = void 0)), !0)
          : !1;
      }
    },
    pet = class extends get {
      constructor() {
        (super(), (this.map = { fgColor: new HYt("fgColor"), bgColor: new HYt("bgColor") }));
      }
      get name() {
        return "pattern";
      }
      get tag() {
        return "patternFill";
      }
      render(e, r) {
        (e.openNode("patternFill"),
          e.addAttribute("patternType", r.pattern),
          r.fgColor && this.map.fgColor.render(e, r.fgColor),
          r.bgColor && this.map.bgColor.render(e, r.bgColor),
          e.closeNode());
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case "patternFill":
            return ((this.model = { type: "pattern", pattern: e.attributes.patternType }), !0);
          default:
            return ((this.parser = this.map[e.name]), this.parser ? (this.parser.parseOpen(e), !0) : !1);
        }
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        return this.parser
          ? (this.parser.parseClose(e) ||
              (this.parser.model && (this.model[e] = this.parser.model), (this.parser = void 0)),
            !0)
          : !1;
      }
    },
    het = class extends get {
      constructor() {
        (super(), (this.map = { stop: new fet() }));
      }
      get name() {
        return "gradient";
      }
      get tag() {
        return "gradientFill";
      }
      render(e, r) {
        switch ((e.openNode("gradientFill"), r.gradient)) {
          case "angle":
            e.addAttribute("degree", r.degree);
            break;
          case "path":
            (e.addAttribute("type", "path"),
              r.center.left &&
                (e.addAttribute("left", r.center.left),
                r.center.right === void 0 && e.addAttribute("right", r.center.left)),
              r.center.right && e.addAttribute("right", r.center.right),
              r.center.top &&
                (e.addAttribute("top", r.center.top),
                r.center.bottom === void 0 && e.addAttribute("bottom", r.center.top)),
              r.center.bottom && e.addAttribute("bottom", r.center.bottom));
            break;
          default:
            break;
        }
        let n = this.map.stop;
        (r.stops.forEach((o) => {
          n.render(e, o);
        }),
          e.closeNode());
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case "gradientFill": {
            let r = (this.model = { stops: [] });
            return (
              e.attributes.degree
                ? ((r.gradient = "angle"), (r.degree = parseInt(e.attributes.degree, 10)))
                : e.attributes.type === "path" &&
                  ((r.gradient = "path"),
                  (r.center = {
                    left: e.attributes.left ? parseFloat(e.attributes.left) : 0,
                    top: e.attributes.top ? parseFloat(e.attributes.top) : 0,
                  }),
                  e.attributes.right !== e.attributes.left &&
                    (r.center.right = e.attributes.right ? parseFloat(e.attributes.right) : 0),
                  e.attributes.bottom !== e.attributes.top &&
                    (r.center.bottom = e.attributes.bottom ? parseFloat(e.attributes.bottom) : 0)),
              !0
            );
          }
          case "stop":
            return ((this.parser = this.map.stop), this.parser.parseOpen(e), !0);
          default:
            return !1;
        }
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        return this.parser
          ? (this.parser.parseClose(e) || (this.model.stops.push(this.parser.model), (this.parser = void 0)), !0)
          : !1;
      }
    },
    AW = class t extends get {
      constructor() {
        (super(), (this.map = { patternFill: new pet(), gradientFill: new het() }));
      }
      get tag() {
        return "fill";
      }
      render(e, r) {
        switch ((e.addRollback(), e.openNode("fill"), r.type)) {
          case "pattern":
            this.map.patternFill.render(e, r);
            break;
          case "gradient":
            this.map.gradientFill.render(e, r);
            break;
          default:
            e.rollback();
            return;
        }
        (e.closeNode(), e.commit());
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case "fill":
            return ((this.model = {}), !0);
          default:
            return ((this.parser = this.map[e.name]), this.parser ? (this.parser.parseOpen(e), !0) : !1);
        }
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        return this.parser
          ? (this.parser.parseClose(e) ||
              ((this.model = this.parser.model), (this.model.type = this.parser.name), (this.parser = void 0)),
            !0)
          : !1;
      }
      validStyle(e) {
        return t.validPatternValues[e];
      }
    };
  AW.validPatternValues = [
    "none",
    "solid",
    "darkVertical",
    "darkGray",
    "mediumGray",
    "lightGray",
    "gray125",
    "gray0625",
    "darkHorizontal",
    "darkVertical",
    "darkDown",
    "darkUp",
    "darkGrid",
    "darkTrellis",
    "lightHorizontal",
    "lightVertical",
    "lightDown",
    "lightUp",
    "lightGrid",
    "lightTrellis",
    "lightGrid",
  ].reduce((t, e) => ((t[e] = !0), t), {});
  AW.StopXform = fet;
  AW.PatternFillXform = pet;
  AW.GradientFillXform = het;
  B7n.exports = AW;
});