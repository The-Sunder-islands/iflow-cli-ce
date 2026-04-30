/**
 * @module Yun
 * @category protocol/acp
 * @label acp
 * @position 709 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Yun) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Yun = T((yL) => {
  "use strict";
  var g4 = Ae("os"),
    h2 = Ae("child_process").exec,
    YGe = Ae("child_process").execSync,
    zGe = Ae("fs"),
    ln = Ff(),
    AL = process.platform,
    cie = AL === "linux" || AL === "android",
    KGe = AL === "darwin",
    JGe = AL === "win32",
    XGe = AL === "freebsd",
    ZGe = AL === "openbsd",
    eqe = AL === "netbsd",
    tqe = AL === "sunos",
    uie = 0,
    ru = {
      user: 0,
      nice: 0,
      system: 0,
      idle: 0,
      irq: 0,
      steal: 0,
      guest: 0,
      load: 0,
      tick: 0,
      ms: 0,
      currentLoad: 0,
      currentLoadUser: 0,
      currentLoadSystem: 0,
      currentLoadNice: 0,
      currentLoadIdle: 0,
      currentLoadIrq: 0,
      currentLoadSteal: 0,
      currentLoadGuest: 0,
      rawCurrentLoad: 0,
      rawCurrentLoadUser: 0,
      rawCurrentLoadSystem: 0,
      rawCurrentLoadNice: 0,
      rawCurrentLoadIdle: 0,
      rawCurrentLoadIrq: 0,
      rawCurrentLoadSteal: 0,
      rawCurrentLoadGuest: 0,
    },
    xr = [],
    Kkt = 0,
    Jkt = {
      8346: "1.8",
      8347: "1.9",
      8350: "2.0",
      8354: "2.2",
      "8356|SE": "2.4",
      8356: "2.3",
      8360: "2.5",
      2372: "2.1",
      2373: "2.1",
      2374: "2.2",
      2376: "2.3",
      2377: "2.3",
      2378: "2.4",
      2379: "2.4",
      2380: "2.5",
      2381: "2.5",
      2382: "2.6",
      2384: "2.7",
      2386: "2.8",
      2387: "2.8",
      2389: "2.9",
      2393: "3.1",
      8374: "2.2",
      8376: "2.3",
      8378: "2.4",
      8379: "2.4",
      8380: "2.5",
      8381: "2.5",
      8382: "2.6",
      8384: "2.7",
      8386: "2.8",
      8387: "2.8",
      8389: "2.9",
      8393: "3.1",
      "2419EE": "1.8",
      "2423HE": "2.0",
      "2425HE": "2.1",
      2427: "2.2",
      2431: "2.4",
      2435: "2.6",
      "2439SE": "2.8",
      "8425HE": "2.1",
      8431: "2.4",
      8435: "2.6",
      "8439SE": "2.8",
      4122: "2.2",
      4130: "2.6",
      "4162EE": "1.7",
      "4164EE": "1.8",
      "4170HE": "2.1",
      "4174HE": "2.3",
      "4176HE": "2.4",
      4180: "2.6",
      4184: "2.8",
      "6124HE": "1.8",
      "6128HE": "2.0",
      "6132HE": "2.2",
      6128: "2.0",
      6134: "2.3",
      6136: "2.4",
      6140: "2.6",
      "6164HE": "1.7",
      "6166HE": "1.8",
      6168: "1.9",
      6172: "2.1",
      6174: "2.2",
      6176: "2.3",
      "6176SE": "2.3",
      "6180SE": "2.5",
      3250: "2.5",
      3260: "2.7",
      3280: "2.4",
      4226: "2.7",
      4228: "2.8",
      4230: "2.9",
      4234: "3.1",
      4238: "3.3",
      4240: "3.4",
      4256: "1.6",
      4274: "2.5",
      4276: "2.6",
      4280: "2.8",
      4284: "3.0",
      6204: "3.3",
      6212: "2.6",
      6220: "3.0",
      6234: "2.4",
      6238: "2.6",
      "6262HE": "1.6",
      6272: "2.1",
      6274: "2.2",
      6276: "2.3",
      6278: "2.4",
      "6282SE": "2.6",
      "6284SE": "2.7",
      6308: "3.5",
      6320: "2.8",
      6328: "3.2",
      "6338P": "2.3",
      6344: "2.6",
      6348: "2.8",
      6366: "1.8",
      "6370P": "2.0",
      6376: "2.3",
      6378: "2.4",
      6380: "2.5",
      6386: "2.8",
      "FX|4100": "3.6",
      "FX|4120": "3.9",
      "FX|4130": "3.8",
      "FX|4150": "3.8",
      "FX|4170": "4.2",
      "FX|6100": "3.3",
      "FX|6120": "3.6",
      "FX|6130": "3.6",
      "FX|6200": "3.8",
      "FX|8100": "2.8",
      "FX|8120": "3.1",
      "FX|8140": "3.2",
      "FX|8150": "3.6",
      "FX|8170": "3.9",
      "FX|4300": "3.8",
      "FX|4320": "4.0",
      "FX|4350": "4.2",
      "FX|6300": "3.5",
      "FX|6350": "3.9",
      "FX|8300": "3.3",
      "FX|8310": "3.4",
      "FX|8320": "3.5",
      "FX|8350": "4.0",
      "FX|8370": "4.0",
      "FX|9370": "4.4",
      "FX|9590": "4.7",
      "FX|8320E": "3.2",
      "FX|8370E": "3.3",
      1200: "3.1",
      "Pro 1200": "3.1",
      "1300X": "3.5",
      "Pro 1300": "3.5",
      1400: "3.2",
      "1500X": "3.5",
      "Pro 1500": "3.5",
      1600: "3.2",
      "1600X": "3.6",
      "Pro 1600": "3.2",
      1700: "3.0",
      "Pro 1700": "3.0",
      "1700X": "3.4",
      "Pro 1700X": "3.4",
      "1800X": "3.6",
      "1900X": "3.8",
      1920: "3.2",
      "1920X": "3.5",
      "1950X": "3.4",
      "200GE": "3.2",
      "Pro 200GE": "3.2",
      "220GE": "3.4",
      "240GE": "3.5",
      "3000G": "3.5",
      "300GE": "3.4",
      "3050GE": "3.4",
      "2200G": "3.5",
      "Pro 2200G": "3.5",
      "2200GE": "3.2",
      "Pro 2200GE": "3.2",
      "2400G": "3.6",
      "Pro 2400G": "3.6",
      "2400GE": "3.2",
      "Pro 2400GE": "3.2",
      "Pro 200U": "2.3",
      "300U": "2.4",
      "2200U": "2.5",
      "3200U": "2.6",
      "2300U": "2.0",
      "Pro 2300U": "2.0",
      "2500U": "2.0",
      "Pro 2500U": "2.2",
      "2600H": "3.2",
      "2700U": "2.0",
      "Pro 2700U": "2.2",
      "2800H": "3.3",
      7351: "2.4",
      "7351P": "2.4",
      7401: "2.0",
      "7401P": "2.0",
      "7551P": "2.0",
      7551: "2.0",
      7251: "2.1",
      7261: "2.5",
      7281: "2.1",
      7301: "2.2",
      7371: "3.1",
      7451: "2.3",
      7501: "2.0",
      7571: "2.2",
      7601: "2.2",
      V1500B: "2.2",
      V1780B: "3.35",
      V1202B: "2.3",
      V1404I: "2.0",
      V1605B: "2.0",
      V1756B: "3.25",
      V1807B: "3.35",
      3101: "2.1",
      3151: "2.7",
      3201: "1.5",
      3251: "2.5",
      3255: "2.5",
      3301: "2.0",
      3351: "1.9",
      3401: "1.85",
      3451: "2.15",
      "1200|AF": "3.1",
      "2300X": "3.5",
      "2500X": "3.6",
      2600: "3.4",
      "2600E": "3.1",
      "1600|AF": "3.2",
      "2600X": "3.6",
      2700: "3.2",
      "2700E": "2.8",
      "Pro 2700": "3.2",
      "2700X": "3.7",
      "Pro 2700X": "3.6",
      "2920X": "3.5",
      "2950X": "3.5",
      "2970WX": "3.0",
      "2990WX": "3.0",
      "Pro 300GE": "3.4",
      "Pro 3125GE": "3.4",
      "3150G": "3.5",
      "Pro 3150G": "3.5",
      "3150GE": "3.3",
      "Pro 3150GE": "3.3",
      "3200G": "3.6",
      "Pro 3200G": "3.6",
      "3200GE": "3.3",
      "Pro 3200GE": "3.3",
      "3350G": "3.6",
      "Pro 3350G": "3.6",
      "3350GE": "3.3",
      "Pro 3350GE": "3.3",
      "3400G": "3.7",
      "Pro 3400G": "3.7",
      "3400GE": "3.3",
      "Pro 3400GE": "3.3",
      "3300U": "2.1",
      "PRO 3300U": "2.1",
      "3450U": "2.1",
      "3500U": "2.1",
      "PRO 3500U": "2.1",
      "3500C": "2.1",
      "3550H": "2.1",
      "3580U": "2.1",
      "3700U": "2.3",
      "PRO 3700U": "2.3",
      "3700C": "2.3",
      "3750H": "2.3",
      "3780U": "2.3",
      3100: "3.6",
      "3300X": "3.8",
      3500: "3.6",
      "3500X": "3.6",
      3600: "3.6",
      "Pro 3600": "3.6",
      "3600X": "3.8",
      "3600XT": "3.8",
      "Pro 3700": "3.6",
      "3700X": "3.6",
      "3800X": "3.9",
      "3800XT": "3.9",
      3900: "3.1",
      "Pro 3900": "3.1",
      "3900X": "3.8",
      "3900XT": "3.8",
      "3950X": "3.5",
      "3960X": "3.8",
      "3970X": "3.7",
      "3990X": "2.9",
      "3945WX": "4.0",
      "3955WX": "3.9",
      "3975WX": "3.5",
      "3995WX": "2.7",
      "4300GE": "3.5",
      "Pro 4300GE": "3.5",
      "4300G": "3.8",
      "Pro 4300G": "3.8",
      "4600GE": "3.3",
      "Pro 4650GE": "3.3",
      "4600G": "3.7",
      "Pro 4650G": "3.7",
      "4700GE": "3.1",
      "Pro 4750GE": "3.1",
      "4700G": "3.6",
      "Pro 4750G": "3.6",
      "4300U": "2.7",
      "4450U": "2.5",
      "Pro 4450U": "2.5",
      "4500U": "2.3",
      "4600U": "2.1",
      "PRO 4650U": "2.1",
      "4680U": "2.1",
      "4600HS": "3.0",
      "4600H": "3.0",
      "4700U": "2.0",
      "PRO 4750U": "1.7",
      "4800U": "1.8",
      "4800HS": "2.9",
      "4800H": "2.9",
      "4900HS": "3.0",
      "4900H": "3.3",
      "5300U": "2.6",
      "5500U": "2.1",
      "5700U": "1.8",
      "7232P": "3.1",
      "7302P": "3.0",
      "7402P": "2.8",
      "7502P": "2.5",
      "7702P": "2.0",
      7252: "3.1",
      7262: "3.2",
      7272: "2.9",
      7282: "2.8",
      7302: "3.0",
      7352: "2.3",
      7402: "2.8",
      7452: "2.35",
      7502: "2.5",
      7532: "2.4",
      7542: "2.9",
      7552: "2.2",
      7642: "2.3",
      7662: "2.0",
      7702: "2.0",
      7742: "2.25",
      "7H12": "2.6",
      "7F32": "3.7",
      "7F52": "3.5",
      "7F72": "3.2",
      "7773X": "2.2",
      7763: "2.45",
      7713: "2.0",
      "7713P": "2.0",
      7663: "2.0",
      7643: "2.3",
      "7573X": "2.8",
      "75F3": "2.95",
      7543: "2.8",
      "7543P": "2.8",
      7513: "2.6",
      "7473X": "2.8",
      7453: "2.75",
      "74F3": "3.2",
      7443: "2.85",
      "7443P": "2.85",
      7413: "2.65",
      "7373X": "3.05",
      "73F3": "3.5",
      7343: "3.2",
      7313: "3.0",
      "7313P": "3.0",
      "72F3": "3.7",
      "5600X": "3.7",
      "5800X": "3.8",
      "5900X": "3.7",
      "5950X": "3.4",
      "5945WX": "4.1",
      "5955WX": "4.0",
      "5965WX": "3.8",
      "5975WX": "3.6",
      "5995WX": "2.7",
      "7960X": "4.2",
      "7970X": "4.0",
      "7980X": "3.2",
      "7965WX": "4.2",
      "7975WX": "4.0",
      "7985WX": "3.2",
      "7995WX": "2.5",
      9754: "2.25",
      "9754S": "2.25",
      9734: "2.2",
      "9684X": "2.55",
      "9384X": "3.1",
      "9184X": "3.55",
      "9654P": "2.4",
      9654: "2.4",
      9634: "2.25",
      "9554P": "3.1",
      9554: "3.1",
      9534: "2.45",
      "9474F": "3.6",
      "9454P": "2.75",
      9454: "2.75",
      "9374F": "3.85",
      "9354P": "3.25",
      9354: "3.25",
      9334: "2.7",
      "9274F": "4.05",
      9254: "2.9",
      9224: "2.5",
      "9174F": "4.1",
      9124: "3.0",
      "4124P": "3.8",
      "4244P": "3.8",
      "4344P": "3.8",
      "4364P": "4.5",
      "4464P": "3.7",
      "4484PX": "4.4",
      "4564P": "4.5",
      "4584PX": "4.2",
      "8024P": "2.4",
      "8024PN": "2.05",
      "8124P": "2.45",
      "8124PN": "2.0",
      "8224P": "2.55",
      "8224PN": "2.0",
      "8324P": "2.65",
      "8324PN": "2.05",
      "8434P": "2.5",
      "8434PN": "2.0",
      "8534P": "2.3",
      "8534PN": "2.0",
      9115: "2.6",
      9135: "3.65",
      "9175F": "4.2",
      9255: "3.25",
      "9275F": "4.1",
      9335: "3.0",
      "9355P": "3.55",
      9355: "3.55",
      "9375F": "3.8",
      9365: "3.4",
      "9455P": "3.15",
      9455: "3.15",
      "9475F": "3.65",
      9535: "2.4",
      "9555P": "3.2",
      9555: "3.2",
      "9575F": "3.3",
      9565: "3.15",
      "9655P": "2.5",
      9655: "2.5",
      9755: "2.7",
      "4245P": "3.9",
      "4345P": "3.8",
      "4465P": "3.4",
      "4545P": "3.0",
      "4565P": "4.3",
      "4585PX": "4.3",
      "5900XT": "3.3",
      5900: "3.0",
      5945: "3.0",
      "5800X3D": "3.4",
      "5800XT": "3.8",
      5800: "3.4",
      "5700X3D": "3.0",
      "5700X": "3.4",
      5845: "3.4",
      "5600X3D": "3.3",
      "5600XT": "3.7",
      "5600T": "3.5",
      5600: "3.5",
      "5600F": "3.0",
      5645: "3.7",
      "5500X3D": "3.0",
      "5980HX": "3.3",
      "5980HS": "3.0",
      "5900HX": "3.3",
      "5900HS": "3.0",
      "5800H": "3.2",
      "5800HS": "2.8",
      "5800U": "1.9",
      "5600H": "3.3",
      "5600HS": "3.0",
      "5600U": "2.3",
      "5560U": "2.3",
      "5400U": "2.7",
      "5825U": "2.0",
      "5625U": "2.3",
      "5425U": "2.7",
      "5125C": "3.0",
      "7730U": "2.0",
      "7530U": "2.0",
      "7430U": "2.3",
      "7330U": "2.3",
      7203: "2.8",
      7303: "2.4",
      "7663P": "2.0",
      "6980HX": "3.3",
      "6980HS": "3.3",
      "6900HX": "3.3",
      "6900HS": "3.3",
      "6800H": "3.2",
      "6800HS": "3.2",
      "6800U": "2.7",
      "6600H": "3.3",
      "6600HS": "3.3",
      "6600U": "2.9",
      "7735HS": "3.2",
      "7735H": "3.2",
      "7736U": "2.7",
      "7735U": "2.7",
      "7435HS": "3.1",
      "7435H": "3.1",
      "7535HS": "3.3",
      "7535H": "3.3",
      "7535U": "2.9",
      "7235HS": "3.2",
      "7235H": "3.2",
      "7335U": "3.0",
      270: "4.0",
      260: "3.8",
      250: "3.3",
      240: "4.3",
      230: "3.5",
      220: "3.0",
      210: "2.8",
      "8945HS": "4.0",
      "8845HS": "3.8",
      "8840HS": "3.3",
      "8840U": "3.3",
      "8645HS": "4.3",
      "8640HS": "3.5",
      "8640U": "3.5",
      "8540U": "3.0",
      "8440U": "2.8",
      "9950X3D": "4.3",
      "9950X": "4.3",
      "9900X3D": "4.4",
      "9900X": "4.4",
      "9800X3D": "4.7",
      "9700X": "3.8",
      "9700F": "3.8",
      "9600X": "3.9",
      9600: "3.8",
      "9500F": "3.8",
      "9995WX": "2.5",
      "9985WX": "3.2",
      "9975WX": "4.0",
      "9965WX": "4.2",
      "9955WX": "4.5",
      "9945WX": "4.7",
      "9980X": "3.2",
      "9970X": "4.0",
      "9960X": "4.2",
      "PRO HX375": "2.0",
      HX375: "2.0",
      "PRO HX370": "2.0",
      HX370: "2.0",
      365: "2.0",
      "PRO 360": "2.0",
      350: "2.0",
      "PRO 350": "2.0",
      340: "2.0",
      "PRO 340": "2.0",
      330: "2.0",
      395: "3.0",
      "PRO 395": "3.0",
      390: "3.2",
      "PRO 390": "3.2",
      385: "3.6",
      "PRO 385": "3.6",
      "PRO 380": "3.6",
      "9955HX3D": "2.3",
      "9955HX": "2.5",
      "9850HX": "3.0",
      9015: "3.6",
      9965: "2.25",
      9845: "2.1",
      9825: "2.2",
      9745: "2.4",
      9645: "2.3",
    },
    qun = {
      1: "Other",
      2: "Unknown",
      3: "Daughter Board",
      4: "ZIF Socket",
      5: "Replacement/Piggy Back",
      6: "None",
      7: "LIF Socket",
      8: "Slot 1",
      9: "Slot 2",
      10: "370 Pin Socket",
      11: "Slot A",
      12: "Slot M",
      13: "423",
      14: "A (Socket 462)",
      15: "478",
      16: "754",
      17: "940",
      18: "939",
      19: "mPGA604",
      20: "LGA771",
      21: "LGA775",
      22: "S1",
      23: "AM2",
      24: "F (1207)",
      25: "LGA1366",
      26: "G34",
      27: "AM3",
      28: "C32",
      29: "LGA1156",
      30: "LGA1567",
      31: "PGA988A",
      32: "BGA1288",
      33: "rPGA988B",
      34: "BGA1023",
      35: "BGA1224",
      36: "LGA1155",
      37: "LGA1356",
      38: "LGA2011",
      39: "FS1",
      40: "FS2",
      41: "FM1",
      42: "FM2",
      43: "LGA2011-3",
      44: "LGA1356-3",
      45: "LGA1150",
      46: "BGA1168",
      47: "BGA1234",
      48: "BGA1364",
      49: "AM4",
      50: "LGA1151",
      51: "BGA1356",
      52: "BGA1440",
      53: "BGA1515",
      54: "LGA3647-1",
      55: "SP3",
      56: "SP3r2",
      57: "LGA2066",
      58: "BGA1392",
      59: "BGA1510",
      60: "BGA1528",
      61: "LGA4189",
      62: "LGA1200",
      63: "LGA4677",
      64: "LGA1700",
      65: "BGA1744",
      66: "BGA1781",
      67: "BGA1211",
      68: "BGA2422",
      69: "LGA1211",
      70: "LGA2422",
      71: "LGA5773",
      72: "BGA5773",
      73: "AM5",
      74: "SP5",
      75: "SP6",
      76: "BGA883",
      77: "BGA1190",
      78: "BGA4129",
      79: "LGA4710",
      80: "LGA7529",
      81: "BGA1964",
      82: "BGA1792",
      83: "BGA2049",
      84: "BGA2551",
      85: "LGA1851",
      86: "BGA2114",
      87: "BGA2833",
    },
    Hun = {
      LGA1150:
        "i7-5775C i3-4340 i3-4170 G3250 i3-4160T i3-4160 E3-1231 G3258 G3240 i7-4790S i7-4790K i7-4790 i5-4690K i5-4690 i5-4590T i5-4590S i5-4590 i5-4460 i3-4360 i3-4150 G1820 G3420 G3220 i7-4771 i5-4440 i3-4330 i3-4130T i3-4130 E3-1230 i7-4770S i7-4770K i7-4770 i5-4670K i5-4670 i5-4570T i5-4570S i5-4570 i5-4430",
      LGA1151:
        "i9-9900KS E-2288G E-2224 G5420 i9-9900T i9-9900 i7-9700T i7-9700F i7-9700E i7-9700 i5-9600 i5-9500T i5-9500F i5-9500 i5-9400T i3-9350K i3-9300 i3-9100T i3-9100F i3-9100 G4930 i9-9900KF i7-9700KF i5-9600KF i5-9400F i5-9400 i3-9350KF i9-9900K i7-9700K i5-9600K G5500 G5400 i7-8700T i7-8086K i5-8600 i5-8500T i5-8500 i5-8400T i3-8300 i3-8100T G4900 i7-8700K i7-8700 i5-8600K i5-8400 i3-8350K i3-8100 E3-1270 G4600 G4560 i7-7700T i7-7700K i7-7700 i5-7600K i5-7600 i5-7500T i5-7500 i5-7400 i3-7350K i3-7300 i3-7100T i3-7100 G3930 G3900 G4400 i7-6700T i7-6700K i7-6700 i5-6600K i5-6600 i5-6500T i5-6500 i5-6400T i5-6400 i3-6300 i3-6100T i3-6100 E3-1270 E3-1270 T4500 T4400",
      1155: "G440 G460 G465 G470 G530T G540T G550T G1610T G1620T G530 G540 G1610 G550 G1620 G555 G1630 i3-2100T i3-2120T i3-3220T i3-3240T i3-3250T i3-2100 i3-2105 i3-2102 i3-3210 i3-3220 i3-2125 i3-2120 i3-3225 i3-2130 i3-3245 i3-3240 i3-3250 i5-3570T i5-2500T i5-2400S i5-2405S i5-2390T i5-3330S i5-2500S i5-3335S i5-2300 i5-3450S i5-3340S i5-3470S i5-3475S i5-3470T i5-2310 i5-3550S i5-2320 i5-3330 i5-3350P i5-3450 i5-2400 i5-3340 i5-3570S i5-2380P i5-2450P i5-3470 i5-2500K i5-3550 i5-2500 i5-3570 i5-3570K i5-2550K i7-3770T i7-2600S i7-3770S i7-2600K i7-2600 i7-3770 i7-3770K i7-2700K G620T G630T G640T G2020T G645T G2100T G2030T G622 G860T G620 G632 G2120T G630 G640 G2010 G840 G2020 G850 G645 G2030 G860 G2120 G870 G2130 G2140 E3-1220L E3-1220L E3-1260L E3-1265L E3-1220 E3-1225 E3-1220 E3-1235 E3-1225 E3-1230 E3-1230 E3-1240 E3-1245 E3-1270 E3-1275 E3-1240 E3-1245 E3-1270 E3-1280 E3-1275 E3-1290 E3-1280 E3-1290",
    };
  function Ies(t) {
    let e = "";
    for (let r in Hun)
      Hun[r].split(" ").forEach((o) => {
        t.indexOf(o) >= 0 && (e = r);
      });
    return e;
  }
  function WGe(t) {
    let e = t;
    return (
      (t = t.toLowerCase()),
      t.indexOf("intel") >= 0 && (e = "Intel"),
      t.indexOf("amd") >= 0 && (e = "AMD"),
      t.indexOf("qemu") >= 0 && (e = "QEMU"),
      t.indexOf("hygon") >= 0 && (e = "Hygon"),
      t.indexOf("centaur") >= 0 && (e = "WinChip/Via"),
      t.indexOf("vmware") >= 0 && (e = "VMware"),
      t.indexOf("Xen") >= 0 && (e = "Xen Hypervisor"),
      t.indexOf("tcg") >= 0 && (e = "QEMU"),
      t.indexOf("apple") >= 0 && (e = "Apple"),
      t.indexOf("sifive") >= 0 && (e = "SiFive"),
      t.indexOf("thead") >= 0 && (e = "T-Head"),
      t.indexOf("andestech") >= 0 && (e = "Andes Technology"),
      e
    );
  }
  function VGe(t) {
    ((t.brand = t.brand
      .replace(/\(R\)+/g, "\xAE")
      .replace(/\s+/g, " ")
      .trim()),
      (t.brand = t.brand
        .replace(/\(TM\)+/g, "\u2122")
        .replace(/\s+/g, " ")
        .trim()),
      (t.brand = t.brand
        .replace(/\(C\)+/g, "\xA9")
        .replace(/\s+/g, " ")
        .trim()),
      (t.brand = t.brand.replace(/CPU+/g, "").replace(/\s+/g, " ").trim()),
      (t.manufacturer = WGe(t.brand)));
    let e = t.brand.split(" ");
    return (e.shift(), (t.brand = e.join(" ")), t);
  }
  function Xkt(t) {
    let e = "0";
    for (let r in Jkt)
      if ({}.hasOwnProperty.call(Jkt, r)) {
        let n = r.split("|"),
          o = 0;
        (n.forEach((s) => {
          t.indexOf(s) > -1 && o++;
        }),
          o === n.length && (e = Jkt[r]));
      }
    return parseFloat(e);
  }
  function Res() {
    return new Promise((t) => {
      process.nextTick(() => {
        let e = "unknown",
          r = {
            manufacturer: e,
            brand: e,
            vendor: "",
            family: "",
            model: "",
            stepping: "",
            revision: "",
            voltage: "",
            speed: 0,
            speedMin: 0,
            speedMax: 0,
            governor: "",
            cores: ln.cores(),
            physicalCores: ln.cores(),
            performanceCores: ln.cores(),
            efficiencyCores: 0,
            processors: 1,
            socket: "",
            flags: "",
            virtualization: !1,
            cache: {},
          };
        Vun().then((n) => {
          if (
            ((r.flags = n),
            (r.virtualization = n.indexOf("vmx") > -1 || n.indexOf("svm") > -1),
            KGe &&
              h2(
                "sysctl machdep.cpu hw.cpufrequency_max hw.cpufrequency_min hw.packages hw.physicalcpu_max hw.ncpu hw.tbfrequency hw.cpufamily hw.cpusubfamily",
                (o, s) => {
                  let a = s.toString().split(`
`),
                    c = ln.getValue(a, "machdep.cpu.brand_string").split("@");
                  r.brand = c[0].trim();
                  let m = c[1] ? c[1].trim() : "0";
                  r.speed = parseFloat(m.replace(/GHz+/g, ""));
                  let d = ln.getValue(a, "hw.tbfrequency") / 1e9;
                  ((d = d < 0.1 ? d * 100 : d),
                    (r.speed = r.speed === 0 ? d : r.speed),
                    (uie = r.speed),
                    (r = VGe(r)),
                    (r.speedMin = ln.getValue(a, "hw.cpufrequency_min")
                      ? ln.getValue(a, "hw.cpufrequency_min") / 1e9
                      : r.speed),
                    (r.speedMax = ln.getValue(a, "hw.cpufrequency_max")
                      ? ln.getValue(a, "hw.cpufrequency_max") / 1e9
                      : r.speed),
                    (r.vendor = ln.getValue(a, "machdep.cpu.vendor") || "Apple"),
                    (r.family = ln.getValue(a, "machdep.cpu.family") || ln.getValue(a, "hw.cpufamily")),
                    (r.model = ln.getValue(a, "machdep.cpu.model")),
                    (r.stepping = ln.getValue(a, "machdep.cpu.stepping") || ln.getValue(a, "hw.cpusubfamily")),
                    (r.virtualization = !0));
                  let f = ln.getValue(a, "hw.packages"),
                    p = ln.getValue(a, "hw.physicalcpu_max"),
                    h = ln.getValue(a, "hw.ncpu");
                  if (g4.arch() === "arm64") {
                    r.socket = "SOC";
                    try {
                      let g = YGe("ioreg -c IOPlatformDevice -d 3 -r | grep cluster-type").toString().split(`
`),
                        b = g.filter((y) => y.indexOf('"E"') >= 0).length,
                        A = g.filter((y) => y.indexOf('"P"') >= 0).length;
                      ((r.efficiencyCores = b), (r.performanceCores = A));
                    } catch {
                      ln.noop();
                    }
                  }
                  (f && (r.processors = parseInt(f, 10) || 1),
                    p && h && ((r.cores = parseInt(h) || ln.cores()), (r.physicalCores = parseInt(p) || ln.cores())),
                    Wun().then((g) => {
                      ((r.cache = g), t(r));
                    }));
                },
              ),
            cie)
          ) {
            let o = "",
              s = [];
            (g4.cpus()[0] && g4.cpus()[0].model && (o = g4.cpus()[0].model),
              h2(
                'export LC_ALL=C; lscpu; echo -n "Governor: "; cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor 2>/dev/null; echo; unset LC_ALL',
                (a, u) => {
                  (a ||
                    (s = u.toString().split(`
`)),
                    (o = ln.getValue(s, "model name") || o),
                    (o = ln.getValue(s, "bios model name") || o),
                    (o = ln.cleanString(o)));
                  let c = o.split("@");
                  if (
                    ((r.brand = c[0].trim()),
                    r.brand.indexOf("Unknown") >= 0 && (r.brand = r.brand.split("Unknown")[0].trim()),
                    (r.speed = c[1] ? parseFloat(c[1].trim()) : 0),
                    r.speed === 0 &&
                      (r.brand.indexOf("AMD") > -1 || r.brand.toLowerCase().indexOf("ryzen") > -1) &&
                      (r.speed = Xkt(r.brand)),
                    r.speed === 0)
                  ) {
                    let b = Zkt();
                    b.avg !== 0 && (r.speed = b.avg);
                  }
                  ((uie = r.speed),
                    (r.speedMin = Math.round(parseFloat(ln.getValue(s, "cpu min mhz").replace(/,/g, ".")) / 10) / 100),
                    (r.speedMax = Math.round(parseFloat(ln.getValue(s, "cpu max mhz").replace(/,/g, ".")) / 10) / 100),
                    (r = VGe(r)),
                    (r.vendor = WGe(ln.getValue(s, "vendor id"))),
                    (r.family = ln.getValue(s, "cpu family")),
                    (r.model = ln.getValue(s, "model:")),
                    (r.stepping = ln.getValue(s, "stepping")),
                    (r.revision = ln.getValue(s, "cpu revision")),
                    (r.cache.l1d = ln.getValue(s, "l1d cache")),
                    r.cache.l1d &&
                      (r.cache.l1d =
                        parseInt(r.cache.l1d) *
                        (r.cache.l1d.indexOf("M") !== -1 ? 1024 * 1024 : r.cache.l1d.indexOf("K") !== -1 ? 1024 : 1)),
                    (r.cache.l1i = ln.getValue(s, "l1i cache")),
                    r.cache.l1i &&
                      (r.cache.l1i =
                        parseInt(r.cache.l1i) *
                        (r.cache.l1i.indexOf("M") !== -1 ? 1024 * 1024 : r.cache.l1i.indexOf("K") !== -1 ? 1024 : 1)),
                    (r.cache.l2 = ln.getValue(s, "l2 cache")),
                    r.cache.l2 &&
                      (r.cache.l2 =
                        parseInt(r.cache.l2) *
                        (r.cache.l2.indexOf("M") !== -1 ? 1024 * 1024 : r.cache.l2.indexOf("K") !== -1 ? 1024 : 1)),
                    (r.cache.l3 = ln.getValue(s, "l3 cache")),
                    r.cache.l3 &&
                      (r.cache.l3 =
                        parseInt(r.cache.l3) *
                        (r.cache.l3.indexOf("M") !== -1 ? 1024 * 1024 : r.cache.l3.indexOf("K") !== -1 ? 1024 : 1)));
                  let m = ln.getValue(s, "thread(s) per core") || "1",
                    d = ln.getValue(s, "socket(s)") || "1",
                    f = parseInt(m, 10),
                    p = parseInt(d, 10) || 1,
                    h = parseInt(ln.getValue(s, "core(s) per socket"), 10);
                  if (
                    ((r.physicalCores = h ? h * p : r.cores / f),
                    (r.performanceCores = f > 1 ? r.cores - r.physicalCores : r.cores),
                    (r.efficiencyCores = f > 1 ? r.cores - f * r.performanceCores : 0),
                    (r.processors = p),
                    (r.governor = ln.getValue(s, "governor") || ""),
                    r.vendor === "ARM" && ln.isRaspberry())
                  ) {
                    let b = ln.decodePiCpuinfo();
                    ((r.family = r.manufacturer),
                      (r.manufacturer = b.manufacturer),
                      (r.brand = b.processor),
                      (r.revision = b.revisionCode),
                      (r.socket = "SOC"));
                  }
                  if (ln.getValue(s, "architecture") === "riscv64") {
                    let b = zGe.readFileSync("/proc/cpuinfo").toString().split(`
`),
                      A = ln.getValue(b, "uarch") || "";
                    if (A.indexOf(",") > -1) {
                      let y = A.split(",");
                      ((r.manufacturer = WGe(y[0])), (r.brand = y[1]));
                    }
                  }
                  let g = [];
                  h2(
                    'export LC_ALL=C; dmidecode \u2013t 4 2>/dev/null | grep "Upgrade: Socket"; unset LC_ALL',
                    (b, A) => {
                      ((g = A.toString().split(`
`)),
                        g &&
                          g.length &&
                          (r.socket = ln.getValue(g, "Upgrade").replace("Socket", "").trim() || r.socket),
                        t(r));
                    },
                  );
                },
              ));
          }
          if (XGe || ZGe || eqe) {
            let o = "",
              s = [];
            (g4.cpus()[0] && g4.cpus()[0].model && (o = g4.cpus()[0].model),
              h2("export LC_ALL=C; dmidecode -t 4; dmidecode -t 7 unset LC_ALL", (a, u) => {
                let c = [];
                if (!a) {
                  let h = u.toString().split("# dmidecode"),
                    g = h.length > 1 ? h[1] : "";
                  ((c = h.length > 2 ? h[2].split("Cache Information") : []),
                    (s = g.split(`
`)));
                }
                if (
                  ((r.brand = o.split("@")[0].trim()),
                  (r.speed = o.split("@")[1] ? parseFloat(o.split("@")[1].trim()) : 0),
                  r.speed === 0 &&
                    (r.brand.indexOf("AMD") > -1 || r.brand.toLowerCase().indexOf("ryzen") > -1) &&
                    (r.speed = Xkt(r.brand)),
                  r.speed === 0)
                ) {
                  let h = Zkt();
                  h.avg !== 0 && (r.speed = h.avg);
                }
                ((uie = r.speed),
                  (r.speedMin = r.speed),
                  (r.speedMax = Math.round(parseFloat(ln.getValue(s, "max speed").replace(/Mhz/g, "")) / 10) / 100),
                  (r = VGe(r)),
                  (r.vendor = WGe(ln.getValue(s, "manufacturer"))));
                let m = ln.getValue(s, "signature");
                m = m.split(",");
                for (let h = 0; h < m.length; h++) m[h] = m[h].trim();
                ((r.family = ln.getValue(m, "Family", " ", !0)),
                  (r.model = ln.getValue(m, "Model", " ", !0)),
                  (r.stepping = ln.getValue(m, "Stepping", " ", !0)),
                  (r.revision = ""));
                let d = parseFloat(ln.getValue(s, "voltage"));
                r.voltage = isNaN(d) ? "" : d.toFixed(2);
                for (let h = 0; h < c.length; h++) {
                  s = c[h].split(`
`);
                  let g = ln.getValue(s, "Socket Designation").toLowerCase().replace(" ", "-").split("-");
                  g = g.length ? g[0] : "";
                  let b = ln.getValue(s, "Installed Size").split(" "),
                    A = parseInt(b[0], 10),
                    y = b.length > 1 ? b[1] : "kb";
                  ((A = A * (y === "kb" ? 1024 : y === "mb" ? 1024 * 1024 : y === "gb" ? 1024 * 1024 * 1024 : 1)),
                    g && (g === "l1" ? ((r.cache[g + "d"] = A / 2), (r.cache[g + "i"] = A / 2)) : (r.cache[g] = A)));
                }
                r.socket = ln.getValue(s, "Upgrade").replace("Socket", "").trim();
                let f = ln.getValue(s, "thread count").trim(),
                  p = ln.getValue(s, "core count").trim();
                (p && f && ((r.cores = parseInt(f, 10)), (r.physicalCores = parseInt(p, 10))), t(r));
              }));
          }
          if ((tqe && t(r), JGe))
            try {
              let o = [];
              (o.push(
                ln.powerShell(
                  "Get-CimInstance Win32_processor | select Name, Revision, L2CacheSize, L3CacheSize, Manufacturer, MaxClockSpeed, Description, UpgradeMethod, Caption, NumberOfLogicalProcessors, NumberOfCores | fl",
                ),
              ),
                o.push(ln.powerShell("Get-CimInstance Win32_CacheMemory | select CacheType,InstalledSize,Level | fl")),
                o.push(ln.powerShell("(Get-CimInstance Win32_ComputerSystem).HypervisorPresent")),
                Promise.all(o).then((s) => {
                  let a = s[0].split(`\r
`),
                    u = ln.getValue(a, "name", ":") || "";
                  (u.indexOf("@") >= 0
                    ? ((r.brand = u.split("@")[0].trim()),
                      (r.speed = u.split("@")[1] ? parseFloat(u.split("@")[1].trim()) : 0),
                      (uie = r.speed))
                    : ((r.brand = u.trim()), (r.speed = 0)),
                    (r = VGe(r)),
                    (r.revision = ln.getValue(a, "revision", ":")),
                    (r.vendor = ln.getValue(a, "manufacturer", ":")),
                    (r.speedMax =
                      Math.round(parseFloat(ln.getValue(a, "maxclockspeed", ":").replace(/,/g, ".")) / 10) / 100),
                    r.speed === 0 &&
                      (r.brand.indexOf("AMD") > -1 || r.brand.toLowerCase().indexOf("ryzen") > -1) &&
                      (r.speed = Xkt(r.brand)),
                    r.speed === 0 && (r.speed = r.speedMax),
                    (r.speedMin = r.speed));
                  let c = ln.getValue(a, "description", ":").split(" ");
                  for (let b = 0; b < c.length; b++)
                    (c[b].toLowerCase().startsWith("family") && b + 1 < c.length && c[b + 1] && (r.family = c[b + 1]),
                      c[b].toLowerCase().startsWith("model") && b + 1 < c.length && c[b + 1] && (r.model = c[b + 1]),
                      c[b].toLowerCase().startsWith("stepping") &&
                        b + 1 < c.length &&
                        c[b + 1] &&
                        (r.stepping = c[b + 1]));
                  let m = ln.getValue(a, "UpgradeMethod", ":");
                  qun[m] && (r.socket = qun[m]);
                  let d = Ies(u);
                  d && (r.socket = d);
                  let f = ln.countLines(a, "Caption"),
                    p = ln.getValue(a, "NumberOfLogicalProcessors", ":"),
                    h = ln.getValue(a, "NumberOfCores", ":");
                  (f && (r.processors = parseInt(f) || 1),
                    h && p && ((r.cores = parseInt(p) || ln.cores()), (r.physicalCores = parseInt(h) || ln.cores())),
                    f > 1 && ((r.cores = r.cores * f), (r.physicalCores = r.physicalCores * f)),
                    (r.cache = zun(s[0], s[1])));
                  let g = s[2] ? s[2].toString().toLowerCase() : "";
                  ((r.virtualization = g.indexOf("true") !== -1), t(r));
                }));
            } catch {
              t(r);
            }
        });
      });
    });
  }
  function kes(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        Res().then((r) => {
          (t && t(r), e(r));
        });
      });
    });
  }
  yL.cpu = kes;
  function Zkt() {
    let t = g4.cpus(),
      e = 999999999,
      r = 0,
      n = 0,
      o = [],
      s = [];
    if (t && t.length && Object.prototype.hasOwnProperty.call(t[0], "speed"))
      for (let a in t) s.push(t[a].speed > 100 ? (t[a].speed + 1) / 1e3 : t[a].speed / 10);
    else if (cie)
      try {
        let a = YGe('cat /proc/cpuinfo | grep "cpu MHz" | cut -d " " -f 3', ln.execOptsLinux)
          .toString()
          .split(
            `
`,
          )
          .filter((u) => u.length > 0);
        for (let u in a) s.push(Math.floor(parseInt(a[u], 10) / 10) / 100);
      } catch {
        ln.noop();
      }
    if (s && s.length)
      try {
        for (let a in s)
          ((n = n + s[a]), s[a] > r && (r = s[a]), s[a] < e && (e = s[a]), o.push(parseFloat(s[a].toFixed(2))));
        return (
          (n = n / s.length),
          { min: parseFloat(e.toFixed(2)), max: parseFloat(r.toFixed(2)), avg: parseFloat(n.toFixed(2)), cores: o }
        );
      } catch {
        return { min: 0, max: 0, avg: 0, cores: o };
      }
    else return { min: 0, max: 0, avg: 0, cores: o };
  }
  function Oes(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = Zkt();
        if (r.avg === 0 && uie !== 0) {
          let n = parseFloat(uie);
          r = { min: n, max: n, avg: n, cores: [] };
        }
        (t && t(r), e(r));
      });
    });
  }
  yL.cpuCurrentSpeed = Oes;
  function Nes(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = { main: null, cores: [], max: null, socket: [], chipset: null };
        if (cie) {
          try {
            let s = YGe(
              'cat /sys/class/thermal/thermal_zone*/type  2>/dev/null; echo "-----"; cat /sys/class/thermal/thermal_zone*/temp 2>/dev/null;',
              ln.execOptsLinux,
            ).toString().split(`-----
`);
            if (s.length === 2) {
              let a = s[0].split(`
`),
                u = s[1].split(`
`);
              for (let c = 0; c < a.length; c++) {
                let m = a[c].trim();
                (m.startsWith("acpi") && u[c] && r.socket.push(Math.round(parseInt(u[c], 10) / 100) / 10),
                  m.startsWith("pch") && u[c] && (r.chipset = Math.round(parseInt(u[c], 10) / 100) / 10));
              }
            }
          } catch {
            ln.noop();
          }
          let n =
            'for mon in /sys/class/hwmon/hwmon*; do for label in "$mon"/temp*_label; do if [ -f $label ]; then value=${label%_*}_input; echo $(cat "$label")___$(cat "$value"); fi; done; done;';
          try {
            h2(n, (o, s) => {
              s = s.toString();
              let a = s.toLowerCase().indexOf("tdie");
              a !== -1 && (s = s.substring(a));
              let u = s.split(`
`),
                c = 0;
              if (
                (u.forEach((m) => {
                  let d = m.split("___"),
                    f = d[0],
                    p = d.length > 1 && d[1] ? d[1] : "0";
                  (p && f && f.toLowerCase() === "tctl" && (c = r.main = Math.round(parseInt(p, 10) / 100) / 10),
                    p && (f === void 0 || (f && f.toLowerCase().startsWith("core")))
                      ? r.cores.push(Math.round(parseInt(p, 10) / 100) / 10)
                      : p &&
                        f &&
                        r.main === null &&
                        (f.toLowerCase().indexOf("package") >= 0 ||
                          f.toLowerCase().indexOf("physical") >= 0 ||
                          f.toLowerCase() === "tccd1") &&
                        (r.main = Math.round(parseInt(p, 10) / 100) / 10));
                }),
                c && r.main === null && (r.main = c),
                r.cores.length > 0)
              ) {
                r.main === null && (r.main = Math.round(r.cores.reduce((d, f) => d + f, 0) / r.cores.length));
                let m = Math.max.apply(Math, r.cores);
                r.max = m > r.main ? m : r.main;
              }
              if (r.main !== null) {
                (r.max === null && (r.max = r.main), t && t(r), e(r));
                return;
              }
              h2("sensors", (m, d) => {
                if (!m) {
                  let f = d.toString().split(`
`),
                    p = null,
                    h = !0,
                    g = "";
                  if (
                    (f.forEach((b) => {
                      b.trim() === ""
                        ? (h = !0)
                        : h &&
                          (b.trim().toLowerCase().startsWith("acpi") && (g = "acpi"),
                          b.trim().toLowerCase().startsWith("pch") && (g = "pch"),
                          b.trim().toLowerCase().startsWith("core") && (g = "core"),
                          b.trim().toLowerCase().startsWith("k10temp") && (g = "coreAMD"),
                          (h = !1));
                      let A = /[+-]([^°]*)/g,
                        y = b.match(A),
                        E = b.split(":")[0].toUpperCase();
                      (g === "acpi"
                        ? E.indexOf("TEMP") !== -1 && r.socket.push(parseFloat(y))
                        : g === "pch" && E.indexOf("TEMP") !== -1 && !r.chipset && (r.chipset = parseFloat(y)),
                        (E.indexOf("PHYSICAL") !== -1 ||
                          E.indexOf("PACKAGE") !== -1 ||
                          (g === "coreAMD" && E.indexOf("TDIE") !== -1) ||
                          E.indexOf("TEMP") !== -1) &&
                          (r.main = parseFloat(y)),
                        E.indexOf("CORE ") !== -1 && r.cores.push(parseFloat(y)),
                        E.indexOf("TDIE") !== -1 && p === null && (p = parseFloat(y)));
                    }),
                    r.cores.length > 0)
                  ) {
                    r.main = Math.round(r.cores.reduce((A, y) => A + y, 0) / r.cores.length);
                    let b = Math.max.apply(Math, r.cores);
                    r.max = b > r.main ? b : r.main;
                  } else r.main === null && p !== null && ((r.main = p), (r.max = p));
                  if ((r.main !== null && r.max === null && (r.max = r.main), r.main !== null || r.max !== null)) {
                    (t && t(r), e(r));
                    return;
                  }
                }
                zGe.stat("/sys/class/thermal/thermal_zone0/temp", (f) => {
                  f === null
                    ? zGe.readFile("/sys/class/thermal/thermal_zone0/temp", (p, h) => {
                        if (!p) {
                          let g = h.toString().split(`
`);
                          g.length > 0 && ((r.main = parseFloat(g[0]) / 1e3), (r.max = r.main));
                        }
                        (t && t(r), e(r));
                      })
                    : h2("/opt/vc/bin/vcgencmd measure_temp", (p, h) => {
                        if (!p) {
                          let g = h.toString().split(`
`);
                          g.length > 0 &&
                            g[0].indexOf("=") &&
                            ((r.main = parseFloat(g[0].split("=")[1])), (r.max = r.main));
                        }
                        (t && t(r), e(r));
                      });
                });
              });
            });
          } catch {
            (t && t(r), e(r));
          }
        }
        if (
          ((XGe || ZGe || eqe) &&
            h2("sysctl dev.cpu | grep temp", (n, o) => {
              if (!n) {
                let s = o.toString().split(`
`),
                  a = 0;
                (s.forEach((u) => {
                  let c = u.split(":");
                  if (c.length > 1) {
                    let m = parseFloat(c[1].replace(",", "."));
                    (m > r.max && (r.max = m), (a = a + m), r.cores.push(m));
                  }
                }),
                  r.cores.length && (r.main = Math.round((a / r.cores.length) * 100) / 100));
              }
              (t && t(r), e(r));
            }),
          KGe)
        ) {
          try {
            if (
              ((r = Ae("osx-temperature-sensor").cpuTemperature()),
              r.main && (r.main = Math.round(r.main * 100) / 100),
              r.max && (r.max = Math.round(r.max * 100) / 100),
              r && r.cores && r.cores.length)
            )
              for (let o = 0; o < r.cores.length; o++) r.cores[o] = Math.round(r.cores[o] * 100) / 100;
          } catch {
            ln.noop();
          }
          try {
            let o = Ae("macos-temperature-sensor").temperature();
            if (
              (o.cpu && ((r.main = Math.round(o.cpu * 100) / 100), (r.max = r.main)),
              o.soc && (r.chipset = Math.round(o.soc * 100) / 100),
              o && o.cpuDieTemps.length)
            )
              for (let s of o.cpuDieTemps) r.cores.push(Math.round(s * 100) / 100);
          } catch {
            ln.noop();
          }
          (t && t(r), e(r));
        }
        if ((tqe && (t && t(r), e(r)), JGe))
          try {
            ln.powerShell(
              'Get-CimInstance MSAcpi_ThermalZoneTemperature -Namespace "root/wmi" | Select CurrentTemperature',
            ).then((n, o) => {
              if (!o) {
                let s = 0;
                (n
                  .split(
                    `\r
`,
                  )
                  .filter((u) => u.trim() !== "")
                  .filter((u, c) => c > 0)
                  .forEach((u) => {
                    let c = (parseInt(u, 10) - 2732) / 10;
                    isNaN(c) || ((s = s + c), c > r.max && (r.max = c), r.cores.push(c));
                  }),
                  r.cores.length && (r.main = s / r.cores.length));
              }
              (t && t(r), e(r));
            });
          } catch {
            (t && t(r), e(r));
          }
      });
    });
  }
  yL.cpuTemperature = Nes;
  function Vun(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = "";
        if (JGe)
          try {
            h2(
              'reg query "HKEY_LOCAL_MACHINE\\HARDWARE\\DESCRIPTION\\System\\CentralProcessor\\0" /v FeatureSet',
              ln.execOptsWin,
              (n, o) => {
                if (!n) {
                  let s = o.split("0x").pop().trim(),
                    a = parseInt(s, 16).toString(2),
                    u = "0".repeat(32 - a.length) + a,
                    c = [
                      "fpu",
                      "vme",
                      "de",
                      "pse",
                      "tsc",
                      "msr",
                      "pae",
                      "mce",
                      "cx8",
                      "apic",
                      "",
                      "sep",
                      "mtrr",
                      "pge",
                      "mca",
                      "cmov",
                      "pat",
                      "pse-36",
                      "psn",
                      "clfsh",
                      "",
                      "ds",
                      "acpi",
                      "mmx",
                      "fxsr",
                      "sse",
                      "sse2",
                      "ss",
                      "htt",
                      "tm",
                      "ia64",
                      "pbe",
                    ];
                  for (let m = 0; m < c.length; m++) u[m] === "1" && c[m] !== "" && (r += " " + c[m]);
                  r = r.trim().toLowerCase();
                }
                (t && t(r), e(r));
              },
            );
          } catch {
            (t && t(r), e(r));
          }
        if (cie)
          try {
            h2("export LC_ALL=C; lscpu; unset LC_ALL", (n, o) => {
              (n ||
                o
                  .toString()
                  .split(
                    `
`,
                  )
                  .forEach((a) => {
                    a.split(":")[0].toUpperCase().indexOf("FLAGS") !== -1 && (r = a.split(":")[1].trim().toLowerCase());
                  }),
                r
                  ? (t && t(r), e(r))
                  : zGe.readFile("/proc/cpuinfo", (s, a) => {
                      if (!s) {
                        let u = a.toString().split(`
`);
                        r = ln.getValue(u, "features", ":", !0).toLowerCase();
                      }
                      (t && t(r), e(r));
                    }));
            });
          } catch {
            (t && t(r), e(r));
          }
        ((XGe || ZGe || eqe) &&
          h2("export LC_ALL=C; dmidecode -t 4 2>/dev/null; unset LC_ALL", (n, o) => {
            let s = [];
            if (!n) {
              let a = o.toString().split("	Flags:");
              (a.length > 1
                ? a[1].split("	Version:")[0].split(`
`)
                : []
              ).forEach((c) => {
                let m = (c.indexOf("(") ? c.split("(")[0].toLowerCase() : "").trim().replace(/\t/g, "");
                m && s.push(m);
              });
            }
            ((r = s.join(" ").trim().toLowerCase()), t && t(r), e(r));
          }),
          KGe &&
            h2("sysctl machdep.cpu.features", (n, o) => {
              if (!n) {
                let s = o.toString().split(`
`);
                s.length > 0 &&
                  s[0].indexOf("machdep.cpu.features:") !== -1 &&
                  (r = s[0].split(":")[1].trim().toLowerCase());
              }
              (t && t(r), e(r));
            }),
          tqe && (t && t(r), e(r)));
      });
    });
  }
  yL.cpuFlags = Vun;
  function Wun(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = { l1d: null, l1i: null, l2: null, l3: null };
        if (cie)
          try {
            h2("export LC_ALL=C; lscpu; unset LC_ALL", (n, o) => {
              (n ||
                o
                  .toString()
                  .split(
                    `
`,
                  )
                  .forEach((a) => {
                    let u = a.split(":");
                    (u[0].toUpperCase().indexOf("L1D CACHE") !== -1 &&
                      (r.l1d =
                        parseInt(u[1].trim()) *
                        (u[1].indexOf("M") !== -1 ? 1024 * 1024 : u[1].indexOf("K") !== -1 ? 1024 : 1)),
                      u[0].toUpperCase().indexOf("L1I CACHE") !== -1 &&
                        (r.l1i =
                          parseInt(u[1].trim()) *
                          (u[1].indexOf("M") !== -1 ? 1024 * 1024 : u[1].indexOf("K") !== -1 ? 1024 : 1)),
                      u[0].toUpperCase().indexOf("L2 CACHE") !== -1 &&
                        (r.l2 =
                          parseInt(u[1].trim()) *
                          (u[1].indexOf("M") !== -1 ? 1024 * 1024 : u[1].indexOf("K") !== -1 ? 1024 : 1)),
                      u[0].toUpperCase().indexOf("L3 CACHE") !== -1 &&
                        (r.l3 =
                          parseInt(u[1].trim()) *
                          (u[1].indexOf("M") !== -1 ? 1024 * 1024 : u[1].indexOf("K") !== -1 ? 1024 : 1)));
                  }),
                t && t(r),
                e(r));
            });
          } catch {
            (t && t(r), e(r));
          }
        if (
          ((XGe || ZGe || eqe) &&
            h2("export LC_ALL=C; dmidecode -t 7 2>/dev/null; unset LC_ALL", (n, o) => {
              let s = [];
              n || ((s = o.toString().split("Cache Information")), s.shift());
              for (let a = 0; a < s.length; a++) {
                let u = s[a].split(`
`),
                  c = ln.getValue(u, "Socket Designation").toLowerCase().replace(" ", "-").split("-");
                c = c.length ? c[0] : "";
                let m = ln.getValue(u, "Installed Size").split(" "),
                  d = parseInt(m[0], 10),
                  f = m.length > 1 ? m[1] : "kb";
                ((d = d * (f === "kb" ? 1024 : f === "mb" ? 1024 * 1024 : f === "gb" ? 1024 * 1024 * 1024 : 1)),
                  c && (c === "l1" ? ((r.cache[c + "d"] = d / 2), (r.cache[c + "i"] = d / 2)) : (r.cache[c] = d)));
              }
              (t && t(r), e(r));
            }),
          KGe &&
            h2("sysctl hw.l1icachesize hw.l1dcachesize hw.l2cachesize hw.l3cachesize", (n, o) => {
              (n ||
                o
                  .toString()
                  .split(
                    `
`,
                  )
                  .forEach((a) => {
                    let u = a.split(":");
                    (u[0].toLowerCase().indexOf("hw.l1icachesize") !== -1 &&
                      (r.l1d = parseInt(u[1].trim()) * (u[1].indexOf("K") !== -1 ? 1024 : 1)),
                      u[0].toLowerCase().indexOf("hw.l1dcachesize") !== -1 &&
                        (r.l1i = parseInt(u[1].trim()) * (u[1].indexOf("K") !== -1 ? 1024 : 1)),
                      u[0].toLowerCase().indexOf("hw.l2cachesize") !== -1 &&
                        (r.l2 = parseInt(u[1].trim()) * (u[1].indexOf("K") !== -1 ? 1024 : 1)),
                      u[0].toLowerCase().indexOf("hw.l3cachesize") !== -1 &&
                        (r.l3 = parseInt(u[1].trim()) * (u[1].indexOf("K") !== -1 ? 1024 : 1)));
                  }),
                t && t(r),
                e(r));
            }),
          tqe && (t && t(r), e(r)),
          JGe)
        )
          try {
            let n = [];
            (n.push(ln.powerShell("Get-CimInstance Win32_processor | select L2CacheSize, L3CacheSize | fl")),
              n.push(ln.powerShell("Get-CimInstance Win32_CacheMemory | select CacheType,InstalledSize,Level | fl")),
              Promise.all(n).then((o) => {
                ((r = zun(o[0], o[1])), t && t(r), e(r));
              }));
          } catch {
            (t && t(r), e(r));
          }
      });
    });
  }
  function zun(t, e) {
    let r = { l1d: null, l1i: null, l2: null, l3: null },
      n = t.split(`\r
`);
    ((r.l1d = 0),
      (r.l1i = 0),
      (r.l2 = ln.getValue(n, "l2cachesize", ":")),
      (r.l3 = ln.getValue(n, "l3cachesize", ":")),
      r.l2 ? (r.l2 = parseInt(r.l2, 10) * 1024) : (r.l2 = 0),
      r.l3 ? (r.l3 = parseInt(r.l3, 10) * 1024) : (r.l3 = 0));
    let o = e.split(/\n\s*\n/),
      s = 0,
      a = 0,
      u = 0;
    return (
      o.forEach((c) => {
        let m = c.split(`\r
`),
          d = ln.getValue(m, "CacheType"),
          f = ln.getValue(m, "Level"),
          p = ln.getValue(m, "InstalledSize");
        (f === "3" && d === "3" && (r.l1i = r.l1i + parseInt(p, 10) * 1024),
          f === "3" && d === "4" && (r.l1d = r.l1d + parseInt(p, 10) * 1024),
          f === "3" && d === "5" && ((s = parseInt(p, 10) / 2), (a = parseInt(p, 10) / 2)),
          f === "4" && d === "5" && (u = u + parseInt(p, 10) * 1024));
      }),
      !r.l1i && !r.l1d && ((r.l1i = s), (r.l1d = a)),
      u && (r.l2 = u),
      r
    );
  }
  yL.cpuCache = Wun;
  function Pes() {
    return new Promise((t) => {
      process.nextTick(() => {
        let e = g4.loadavg().map((s) => s / ln.cores()),
          r = parseFloat(Math.max.apply(Math, e).toFixed(2)),
          n = {};
        if (Date.now() - ru.ms >= 200) {
          ru.ms = Date.now();
          let s = g4.cpus().map((y) => ((y.times.steal = 0), (y.times.guest = 0), y)),
            a = 0,
            u = 0,
            c = 0,
            m = 0,
            d = 0,
            f = 0,
            p = 0,
            h = [];
          if (((Kkt = s && s.length ? s.length : 0), cie))
            try {
              let y = YGe("cat /proc/stat 2>/dev/null | grep cpu", ln.execOptsLinux).toString().split(`
`);
              if (y.length > 1 && (y.shift(), y.length === s.length))
                for (let E = 0; E < y.length; E++) {
                  let v = y[E].split(" ");
                  if (v.length >= 10) {
                    let C = parseFloat(v[8]) || 0,
                      x = parseFloat(v[9]) || 0;
                    ((s[E].times.steal = C), (s[E].times.guest = x));
                  }
                }
            } catch {
              ln.noop();
            }
          for (let y = 0; y < Kkt; y++) {
            let E = s[y].times;
            ((a += E.user),
              (u += E.sys),
              (c += E.nice),
              (d += E.idle),
              (m += E.irq),
              (f += E.steal || 0),
              (p += E.guest || 0));
            let v = xr && xr[y] && xr[y].totalTick ? xr[y].totalTick : 0,
              C = xr && xr[y] && xr[y].totalLoad ? xr[y].totalLoad : 0,
              x = xr && xr[y] && xr[y].user ? xr[y].user : 0,
              k = xr && xr[y] && xr[y].sys ? xr[y].sys : 0,
              R = xr && xr[y] && xr[y].nice ? xr[y].nice : 0,
              P = xr && xr[y] && xr[y].idle ? xr[y].idle : 0,
              D = xr && xr[y] && xr[y].irq ? xr[y].irq : 0,
              O = xr && xr[y] && xr[y].steal ? xr[y].steal : 0,
              N = xr && xr[y] && xr[y].guest ? xr[y].guest : 0;
            ((xr[y] = E),
              (xr[y].totalTick =
                xr[y].user + xr[y].sys + xr[y].nice + xr[y].irq + xr[y].steal + xr[y].guest + xr[y].idle),
              (xr[y].totalLoad = xr[y].user + xr[y].sys + xr[y].nice + xr[y].irq + xr[y].steal + xr[y].guest),
              (xr[y].currentTick = xr[y].totalTick - v),
              (xr[y].load = xr[y].totalLoad - C),
              (xr[y].loadUser = xr[y].user - x),
              (xr[y].loadSystem = xr[y].sys - k),
              (xr[y].loadNice = xr[y].nice - R),
              (xr[y].loadIdle = xr[y].idle - P),
              (xr[y].loadIrq = xr[y].irq - D),
              (xr[y].loadSteal = xr[y].steal - O),
              (xr[y].loadGuest = xr[y].guest - N),
              (h[y] = {}),
              (h[y].load = (xr[y].load / xr[y].currentTick) * 100),
              (h[y].loadUser = (xr[y].loadUser / xr[y].currentTick) * 100),
              (h[y].loadSystem = (xr[y].loadSystem / xr[y].currentTick) * 100),
              (h[y].loadNice = (xr[y].loadNice / xr[y].currentTick) * 100),
              (h[y].loadIdle = (xr[y].loadIdle / xr[y].currentTick) * 100),
              (h[y].loadIrq = (xr[y].loadIrq / xr[y].currentTick) * 100),
              (h[y].loadSteal = (xr[y].loadSteal / xr[y].currentTick) * 100),
              (h[y].loadGuest = (xr[y].loadGuest / xr[y].currentTick) * 100),
              (h[y].rawLoad = xr[y].load),
              (h[y].rawLoadUser = xr[y].loadUser),
              (h[y].rawLoadSystem = xr[y].loadSystem),
              (h[y].rawLoadNice = xr[y].loadNice),
              (h[y].rawLoadIdle = xr[y].loadIdle),
              (h[y].rawLoadIrq = xr[y].loadIrq),
              (h[y].rawLoadSteal = xr[y].loadSteal),
              (h[y].rawLoadGuest = xr[y].loadGuest));
          }
          let g = a + u + c + m + f + p + d,
            b = a + u + c + m + f + p,
            A = g - ru.tick;
          ((n = {
            avgLoad: r,
            currentLoad: ((b - ru.load) / A) * 100,
            currentLoadUser: ((a - ru.user) / A) * 100,
            currentLoadSystem: ((u - ru.system) / A) * 100,
            currentLoadNice: ((c - ru.nice) / A) * 100,
            currentLoadIdle: ((d - ru.idle) / A) * 100,
            currentLoadIrq: ((m - ru.irq) / A) * 100,
            currentLoadSteal: ((f - ru.steal) / A) * 100,
            currentLoadGuest: ((p - ru.guest) / A) * 100,
            rawCurrentLoad: b - ru.load,
            rawCurrentLoadUser: a - ru.user,
            rawCurrentLoadSystem: u - ru.system,
            rawCurrentLoadNice: c - ru.nice,
            rawCurrentLoadIdle: d - ru.idle,
            rawCurrentLoadIrq: m - ru.irq,
            rawCurrentLoadSteal: f - ru.steal,
            rawCurrentLoadGuest: p - ru.guest,
            cpus: h,
          }),
            (ru = {
              user: a,
              nice: c,
              system: u,
              idle: d,
              irq: m,
              steal: f,
              guest: p,
              tick: g,
              load: b,
              ms: ru.ms,
              currentLoad: n.currentLoad,
              currentLoadUser: n.currentLoadUser,
              currentLoadSystem: n.currentLoadSystem,
              currentLoadNice: n.currentLoadNice,
              currentLoadIdle: n.currentLoadIdle,
              currentLoadIrq: n.currentLoadIrq,
              currentLoadSteal: n.currentLoadSteal,
              currentLoadGuest: n.currentLoadGuest,
              rawCurrentLoad: n.rawCurrentLoad,
              rawCurrentLoadUser: n.rawCurrentLoadUser,
              rawCurrentLoadSystem: n.rawCurrentLoadSystem,
              rawCurrentLoadNice: n.rawCurrentLoadNice,
              rawCurrentLoadIdle: n.rawCurrentLoadIdle,
              rawCurrentLoadIrq: n.rawCurrentLoadIrq,
              rawCurrentLoadSteal: n.rawCurrentLoadSteal,
              rawCurrentLoadGuest: n.rawCurrentLoadGuest,
            }));
        } else {
          let s = [];
          for (let a = 0; a < Kkt; a++)
            ((s[a] = {}),
              (s[a].load = (xr[a].load / xr[a].currentTick) * 100),
              (s[a].loadUser = (xr[a].loadUser / xr[a].currentTick) * 100),
              (s[a].loadSystem = (xr[a].loadSystem / xr[a].currentTick) * 100),
              (s[a].loadNice = (xr[a].loadNice / xr[a].currentTick) * 100),
              (s[a].loadIdle = (xr[a].loadIdle / xr[a].currentTick) * 100),
              (s[a].loadIrq = (xr[a].loadIrq / xr[a].currentTick) * 100),
              (s[a].rawLoad = xr[a].load),
              (s[a].rawLoadUser = xr[a].loadUser),
              (s[a].rawLoadSystem = xr[a].loadSystem),
              (s[a].rawLoadNice = xr[a].loadNice),
              (s[a].rawLoadIdle = xr[a].loadIdle),
              (s[a].rawLoadIrq = xr[a].loadIrq),
              (s[a].rawLoadSteal = xr[a].loadSteal),
              (s[a].rawLoadGuest = xr[a].loadGuest));
          n = {
            avgLoad: r,
            currentLoad: ru.currentLoad,
            currentLoadUser: ru.currentLoadUser,
            currentLoadSystem: ru.currentLoadSystem,
            currentLoadNice: ru.currentLoadNice,
            currentLoadIdle: ru.currentLoadIdle,
            currentLoadIrq: ru.currentLoadIrq,
            currentLoadSteal: ru.currentLoadSteal,
            currentLoadGuest: ru.currentLoadGuest,
            rawCurrentLoad: ru.rawCurrentLoad,
            rawCurrentLoadUser: ru.rawCurrentLoadUser,
            rawCurrentLoadSystem: ru.rawCurrentLoadSystem,
            rawCurrentLoadNice: ru.rawCurrentLoadNice,
            rawCurrentLoadIdle: ru.rawCurrentLoadIdle,
            rawCurrentLoadIrq: ru.rawCurrentLoadIrq,
            rawCurrentLoadSteal: ru.rawCurrentLoadSteal,
            rawCurrentLoadGuest: ru.rawCurrentLoadGuest,
            cpus: s,
          };
        }
        t(n);
      });
    });
  }
  function Bes(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        Pes().then((r) => {
          (t && t(r), e(r));
        });
      });
    });
  }
  yL.currentLoad = Bes;
  function Les() {
    return new Promise((t) => {
      process.nextTick(() => {
        let e = g4.cpus(),
          r = 0,
          n = 0,
          o = 0,
          s = 0,
          a = 0,
          u = 0;
        if (e && e.length) {
          for (let m = 0, d = e.length; m < d; m++) {
            let f = e[m].times;
            ((r += f.user), (n += f.sys), (o += f.nice), (s += f.irq), (a += f.idle));
          }
          let c = a + s + o + n + r;
          u = ((c - a) / c) * 100;
        }
        t(u);
      });
    });
  }
  function Mes(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        Les().then((r) => {
          (t && t(r), e(r));
        });
      });
    });
  }
  yL.fullLoad = Mes;
});