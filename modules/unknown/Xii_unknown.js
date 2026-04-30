/**
 * @module Xii
 * @category unknown
 * @label unknown
 * @position 1598 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Xii) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Xii = T((gwc, Jii) => {
  "use strict";
  Jii.exports = {
    shiftjis: {
      type: "_dbcs",
      table: function () {
        return Vii();
      },
      encodeAdd: { "\xA5": 92, "\u203E": 126 },
      encodeSkipVals: [{ from: 60736, to: 63808 }],
    },
    csshiftjis: "shiftjis",
    mskanji: "shiftjis",
    sjis: "shiftjis",
    windows31j: "shiftjis",
    ms31j: "shiftjis",
    xsjis: "shiftjis",
    windows932: "shiftjis",
    ms932: "shiftjis",
    932: "shiftjis",
    cp932: "shiftjis",
    eucjp: {
      type: "_dbcs",
      table: function () {
        return Wii();
      },
      encodeAdd: { "\xA5": 92, "\u203E": 126 },
    },
    gb2312: "cp936",
    gb231280: "cp936",
    gb23121980: "cp936",
    csgb2312: "cp936",
    csiso58gb231280: "cp936",
    euccn: "cp936",
    windows936: "cp936",
    ms936: "cp936",
    936: "cp936",
    cp936: {
      type: "_dbcs",
      table: function () {
        return Ust();
      },
    },
    gbk: {
      type: "_dbcs",
      table: function () {
        return Ust().concat(Flr());
      },
    },
    xgbk: "gbk",
    isoir58: "gbk",
    gb18030: {
      type: "_dbcs",
      table: function () {
        return Ust().concat(Flr());
      },
      gb18030: function () {
        return zii();
      },
      encodeSkipVals: [128],
      encodeAdd: { "\u20AC": 41699 },
    },
    chinese: "gb18030",
    windows949: "cp949",
    ms949: "cp949",
    949: "cp949",
    cp949: {
      type: "_dbcs",
      table: function () {
        return Yii();
      },
    },
    cseuckr: "cp949",
    csksc56011987: "cp949",
    euckr: "cp949",
    isoir149: "cp949",
    korean: "cp949",
    ksc56011987: "cp949",
    ksc56011989: "cp949",
    ksc5601: "cp949",
    windows950: "cp950",
    ms950: "cp950",
    950: "cp950",
    cp950: {
      type: "_dbcs",
      table: function () {
        return Ulr();
      },
    },
    big5: "big5hkscs",
    big5hkscs: {
      type: "_dbcs",
      table: function () {
        return Ulr().concat(Kii());
      },
      encodeSkipVals: [
        36457, 36463, 36478, 36523, 36532, 36557, 36560, 36695, 36713, 36718, 36811, 36862, 36973, 36986, 37060, 37084,
        37105, 37311, 37551, 37552, 37553, 37554, 37585, 37959, 38090, 38361, 38652, 39285, 39798, 39800, 39803, 39878,
        39902, 39916, 39926, 40002, 40019, 40034, 40040, 40043, 40055, 40124, 40125, 40144, 40279, 40282, 40388, 40431,
        40443, 40617, 40687, 40701, 40800, 40907, 41079, 41180, 41183, 36812, 37576, 38468, 38637, 41636, 41637, 41639,
        41638, 41676, 41678,
      ],
    },
    cnbig5: "big5hkscs",
    csbig5: "big5hkscs",
    xxbig5: "big5hkscs",
  };
});