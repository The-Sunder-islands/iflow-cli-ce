/**
 * @module OWi
 * @category app/api
 * @label iflow-api
 * @position 1906 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (OWi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class t, class extends
 * Functions: eEr, B1u, s1u, V1u, AKi, HJi, zJi, rbt, UYi, xbt, Xdu, F1u, j1u, SDe, FKi
 * Features: esbuild module exports: OWi, CONTAINS iflow.cn API references, dotenv related, MCP server handling
 * === End semantic info ===
 */


var OWi = T((Agl, kWi) => {
  kWi.exports = () =>
    /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
});
var sfe,
  u_r = j(() => {
    "use strict";
    sfe = "da3e453 (local modifications)";
  });
async function Gzi() {
  return Zgt
    ? ebt
    : new Promise((t) => {
        if (!process.stdin.isTTY || !process.stdout.isTTY) {
          ((Zgt = !0), t(!1));
          return;
        }
        let e = process.stdin.isRaw;
        e || process.stdin.setRawMode(!0);
        let r = "",
          n = !1,
          o,
          s = () => {
            ((o = void 0),
              process.stdin.removeListener("data", a),
              e || process.stdin.setRawMode(!1),
              (Zgt = !0),
              t(!1));
          },
          a = (u) => {
            o !== void 0 &&
              ((r += u.toString()),
              r.includes("\x1B[?") && r.includes("u") && ((n = !0), clearTimeout(o), (o = setTimeout(s, 1e3))),
              r.includes("\x1B[?") &&
                r.includes("c") &&
                (clearTimeout(o),
                (o = void 0),
                process.stdin.removeListener("data", a),
                e || process.stdin.setRawMode(!1),
                n &&
                  (process.stdout.write("\x1B[>1u"),
                  (ebt = !0),
                  (tbt = !0),
                  process.on("exit", Qzi),
                  process.on("SIGTERM", Qzi)),
                (Zgt = !0),
                t(ebt)));
          };
        (process.stdin.on("data", a),
          process.stdout.write("\x1B[?u"),
          process.stdout.write("\x1B[c"),
          (o = setTimeout(s, 200)));
      });
}
function Qzi() {
  tbt && (process.stdout.write("\x1B[<u"), (tbt = !1));
}
function rbt() {
  return tbt;
}
function qzi() {
  return ebt;
}
var Zgt,
  ebt,
  tbt,
  nbt = j(() => {
    "use strict";
    ((Zgt = !1), (ebt = !1), (tbt = !1));
  });
var $j,
  wbt = j(() => {
    "use strict";
    $j = class t {
      constructor(e) {
        this.commands = e;
      }
      static async create(e, r) {
        let n = await Promise.allSettled(e.map((u) => u.loadCommands(r))),
          o = [];
        for (let u of n)
          u.status === "fulfilled" ? o.push(...u.value) : console.debug("A command loader failed:", u.reason);
        let s = new Map();
        for (let u of o) {
          let c = u.name;
          if (u.extensionName && s.has(u.name)) {
            let m = `${u.extensionName}.${u.name}`,
              d = 1;
            for (; s.has(m); ) ((m = `${u.extensionName}.${u.name}${d}`), d++);
            c = m;
          }
          s.set(c, { ...u, name: c });
        }
        let a = Object.freeze(Array.from(s.values()));
        return new t(a);
      }
      getCommands() {
        return this.commands;
      }
    };
  });
var Qs = j(() => {
  "use strict";
});
import BJ from "node:process";
var MYi,
  FYi = j(() => {
    "use strict";
    D1e();
    Qs();
    ra();
    Ot();
    MYi = {
      name: "about",
      description: I.t("command.about"),
      kind: "built-in",
      action: async (t) => {
        let e = BJ.platform,
          r = I.t("aboutCommand.noSandbox");
        BJ.env.SANDBOX && BJ.env.SANDBOX !== "sandbox-exec"
          ? (r = BJ.env.SANDBOX)
          : BJ.env.SANDBOX === "sandbox-exec" &&
            (r = `sandbox-exec (${BJ.env.SEATBELT_PROFILE || I.t("aboutCommand.unknown")})`);
        let n = t.services.config?.getModel() || I.t("aboutCommand.unknown"),
          o = await uw(),
          s = t.services.settings.merged.selectedAuthType || "",
          a = BJ.env.GOOGLE_CLOUD_PROJECT || "",
          u = {
            type: "about",
            cliVersion: o,
            osVersion: e,
            sandboxEnv: r,
            modelVersion: n,
            selectedAuthType: s,
            gcpProject: a,
          };
        t.ui.addItem(u, Date.now());
      },
    };
  });
function xbt(t, e, r, n = !1) {
  let o = "";
  if (t.length === 0)
    return (
      (o = "\u{1F534} "),
      `${o}${e}
${$Yi}${I.t("agentsCommand.list.noAgentsFound")}${Jc}
`
    );
  o = "\u{1F7E2} ";
  let s = `${o}${e}
`;
  for (let a of t)
    n
      ? (s += Kdu(a))
      : (s += `${Tbt}- ${a.agentType}${Jc}
`);
  return (
    s +
    `
`
  );
}
function Kdu(t) {
  let e = `
${Tbt}\u{1F7E2} ${t.agentType}${Jc}

`;
  (t.sourcePath &&
    (e += `    ${tb}${t.sourcePath}${Jc}

`),
    (t.description || t.whenToUse) &&
      ((e += `    ${jj}${I.t("agentsCommand.list.description")}${Jc} ${tb}${I.t("agentsCommand.list.descriptionSubtitle")}${Jc}
`),
      (e += `        ${tb}${t.description || t.whenToUse}${Jc}

`)));
  let r =
      t.allowedTools.includes("*") || t.allowedTools.length === 0
        ? I.t("agentsCommand.list.allTools")
        : t.allowedTools.join(", "),
    n = t.isInheritTools === !1 ? ` ${I.t("agentsCommand.list.noInherit")}` : ` ${I.t("agentsCommand.list.inherit")}`;
  if (
    ((e += `    ${jj}${I.t("agentsCommand.list.tools")}${Jc} ${tb}${r}${n}${Jc}
`),
    (e += `
`),
    t.allowedMcps && t.allowedMcps.length > 0)
  ) {
    let o = t.isInheritMcps === !1 ? ` ${I.t("agentsCommand.list.noInherit")}` : "";
    e += `    ${jj}${I.t("agentsCommand.list.mcps")}${Jc} ${tb}${t.allowedMcps.join(", ")}${o}${Jc}
`;
  } else
    t.isInheritMcps === !1
      ? (e += `    ${jj}${I.t("agentsCommand.list.mcps")}${Jc} ${tb}${I.t("agentsCommand.list.none")} ${I.t("agentsCommand.list.noInherit")}${Jc}
`)
      : (e += `     ${jj}${I.t("agentsCommand.list.mcps")}${Jc} ${tb}${I.t("agentsCommand.list.allMcpServers")}${Jc}
`);
  if (
    ((e += `
`),
    t.color &&
      (e += `    ${jj}${I.t("agentsCommand.list.color")}${Jc} ${t.agentType}

`),
    t.systemPrompt)
  ) {
    e += `    ${jj}${I.t("agentsCommand.list.systemPrompt")}${Jc}

`;
    let o = t.systemPrompt
      .split(
        `
`,
      )
      .map((s) => `        ${tb}${s}${Jc}`).join(`
`);
    e += `${tb}${o}${Jc}

`;
  }
  return e;
}
async function UYi(t) {
  let r = await gA(t).getAgents(),
    n = new rN(t),
    { global: o, project: s } = n.getDirectoryPaths(),
    a = [],
    u = [],
    c = [];
  for (let m of r) m.isBuiltIn ? c.push(m) : m.sourcePath?.startsWith(o) ? a.push(m) : u.push(m);
  return { personal: a, project: u, builtin: c, personalPath: o, projectPath: s };
}
var Tbt,
  $Yi,
  jj,
  tb,
  Jc,
  jYi,
  QYi = j(() => {
    "use strict";
    Ot();
    ra();
    Qs();
    ((Tbt = "\x1B[32m"), ($Yi = "\x1B[31m"), (jj = "\x1B[36m"), (tb = "\x1B[90m"), (Jc = "\x1B[0m"));
    jYi = {
      name: "agents",
      description: I.t("command.agents"),
      kind: "built-in",
      subCommands: [
        {
          name: "list",
          description: I.t("agentsCommand.subCommands.list"),
          kind: "built-in",
          action: async (t, e) => {
            try {
              let r = e?.includes("desc") || e?.includes("descriptions"),
                n = t.services.config?.getWorkingDir() || process.cwd(),
                { personal: o, project: s, personalPath: a, projectPath: u } = await UYi(n),
                c =
                  I.t("agentsCommand.list.availableAgents") +
                  `

`;
              ((c += xbt(o, `${I.t("agentsCommand.list.personalAgents")} ${tb}(${a})${Jc}`, a, r)),
                (c += xbt(s, `${I.t("agentsCommand.list.projectAgents")} ${tb}(${u})${Jc}`, u, r)),
                (c += `
${tb}${I.t("agentsCommand.list.builtinAgents")}${Jc}
${tb}${I.t("agentsCommand.list.generalPurpose")}
${Jc}`),
                (c += `
`),
                (c += `${jj}${I.t("agentsCommand.list.tips")}${Jc}
`),
                (c += `  \u2022 ${I.t("agentsCommand.list.listDesc")}
`),
                (c += `  \u2022 ${I.t("agentsCommand.list.refresh")}
`),
                (c += `  \u2022 ${I.t("agentsCommand.list.online")}
`),
                (c += `
`),
                t.ui.addItem({ type: "info", text: c.trim() }, Date.now()));
            } catch (r) {
              let n = mr(r);
              t.ui.addItem(
                { type: "error", text: I.t("agentsCommand.errors.showingAgents", { error: n }) },
                Date.now(),
              );
            }
          },
        },
        {
          name: "refresh",
          description: I.t("agentsCommand.subCommands.refresh"),
          kind: "built-in",
          action: async (t) => {
            t.ui.addItem({ type: "info", text: I.t("agentsCommand.refresh.refreshing") }, Date.now());
            try {
              let e = t.services.config?.getWorkingDir() || process.cwd();
              await gA(e).refresh();
              let { personal: n, project: o, personalPath: s, projectPath: a } = await UYi(e),
                u = "";
              ((u += xbt(n, `${I.t("agentsCommand.list.personalAgents")} ${tb}(${s})${Jc}`, s, !1)),
                (u += xbt(o, `${I.t("agentsCommand.list.projectAgents")} ${tb}(${a})${Jc}`, a, !1)),
                (u += `
${tb}${I.t("agentsCommand.list.builtinAgents")}${Jc}
${tb}${I.t("agentsCommand.list.generalPurpose")}
${Jc}`));
              let c = n.length + o.length;
              t.ui.addItem(
                {
                  type: "info",
                  text: `${Tbt}${I.t("agentsCommand.refresh.success", { count: c })}${Jc}

${Tbt}${u.trim()}${Jc}`,
                },
                Date.now(),
              );
            } catch (e) {
              let r = mr(e);
              t.ui.addItem(
                { type: "error", text: `${$Yi}${I.t("agentsCommand.refresh.error", { error: r })}${Jc}` },
                Date.now(),
              );
            }
          },
        },
        {
          name: "online",
          description: I.t("agentsCommand.subCommands.online"),
          kind: "built-in",
          action: (t, e) => ({ type: "dialog", dialog: "agents-online" }),
        },
        {
          name: "install",
          description: I.t("agentsCommand.subCommands.install"),
          kind: "built-in",
          action: (t, e) => ({ type: "dialog", dialog: "agent-install" }),
        },
      ],
    };
  });
var GYi,
  qYi = j(() => {
    "use strict";
    Qs();
    Ot();
    GYi = {
      name: "2025",
      get description() {
        return I.t("command.annualReport");
      },
      kind: "built-in",
      action: (t, e) => ({ type: "dialog", dialog: "annual-report" }),
    };
  });
var HYi,
  VYi = j(() => {
    "use strict";
    Qs();
    Ot();
    HYi = {
      name: "auth",
      description: I.t("command.auth"),
      kind: "built-in",
      action: (t, e) => ({ type: "dialog", dialog: "auth" }),
    };
  });
import rP from "node:process";
import Jdu from "node:os";
async function Xdu(t, e) {
  let r = "https://apis.iflow.cn/v1/bug/report /* @iflow-api-endpoint */",
    o = { content: JSON.stringify(t, null, 2) },
    s = { "Content-Type": "application/json" };
  e && (s.Authorization = `Bearer ${e}`);
  try {
    let a = await fetch(r, { method: "POST", headers: s, body: JSON.stringify(o) });
    if (a.ok) {
      let u = await a.json();
      return (
        console.log("Bug report data sent successfully to endpoint"),
        u.success && u.data ? u.data : (console.warn("Unexpected response format from endpoint:", u), null)
      );
    } else return (console.warn(`Failed to send bug report to endpoint: ${a.status} ${a.statusText}`), null);
  } catch (a) {
    return (console.warn("Failed to send bug report to endpoint:", a), null);
  }
}
var WYi,
  zYi = j(() => {
    "use strict";
    Qs();
    ra();
    Ot();
    u_r();
    fw();
    D1e();
    WYi = {
      name: "bug",
      description: I.t("command.bug"),
      kind: "built-in",
      action: async (t, e) => {
        let r = (e || "").trim(),
          { config: n } = t.services,
          o = dH(),
          s = `${rP.platform} ${rP.version}`,
          a = I.t("bugCommand.noSandbox");
        rP.env.SANDBOX && rP.env.SANDBOX !== "sandbox-exec"
          ? (a = rP.env.SANDBOX.replace(/^iflow-(?:code-)?/, ""))
          : rP.env.SANDBOX === "sandbox-exec" && (a = `sandbox-exec (${rP.env.SEATBELT_PROFILE || "unknown"})`);
        let u = n?.getModel() || I.t("bugCommand.unknown"),
          c = await uw(),
          m = V1e(rP.memoryUsage().rss),
          d = o.getInMemoryErrors(),
          f = I.t("bugCommand.noRecentErrors");
        d.length > 0 &&
          (f = d.slice(-3).map((R) => I.t("bugCommand.errorWithTimestamp", { timestamp: R.timestamp, error: R.error }))
            .join(`

`));
        let p = Jdu.userInfo().username,
          h = (k) => {
            if (!p) return k;
            let R = new RegExp(`/${p}/`, "g");
            return k.replace(R, "/user/");
          },
          g = `CLI Version: ${c}
Git Commit: ${sfe}
Operating System: ${s}
Sandbox Environment: ${a}
Model Version: ${u}
Memory Usage: ${m}
Session ID: ${_qe}
Platform: ${rP.platform}`,
          b = t.services.historyManager,
          A = "";
        if (b) {
          let k = b.getCurrentSessionHistory();
          A = JSON.stringify(k, null, 2);
        }
        let y = {
            title: r || I.t("bugCommand.bugReportTitle"),
            problem: h(`${r || I.t("bugCommand.defaultBugDescription")}

${I.t("bugCommand.conversationHistory")}:
${A || I.t("bugCommand.noHistoryAvailable")}`),
            expected: I.t("bugCommand.expectedDescription"),
            info: g,
            loginInfo: I.t("bugCommand.loginInfoDescription"),
            additionalContext: h(`${I.t("bugCommand.errorDetails")}:
${f}

${I.t("bugCommand.additionalContextPrompt")}`),
          },
          E = null;
        try {
          let k = await yR();
          E = await Xdu(y, k);
        } catch (k) {
          console.warn("Failed to send data to endpoint, skipping endpoint data submission:", k);
        }
        E &&
          (y.info += `
Internal Report ID: ${E}`);
        let v =
            "https://github.com/iflow-ai/iflow-cli/issues/new?template=bug_report.yml&problem={problem}&expected={expected}&info={info}&login-info={loginInfo}&additional-context={additionalContext}",
          C = n?.getBugCommand();
        (C?.urlTemplate && (v = C.urlTemplate),
          (v = o.generateGitHubIssueUrl(v, y).slice(0, 2e3)),
          (await BC(v)) ||
            t.ui.addItem({ type: "error", text: I.t("bugCommand.couldNotOpenUrl", { error: v }) }, Date.now()),
          b2(new Error(I.t("bugCommand.bugReportSubmitted", { description: r })), {
            command: "bug",
            args: r,
            clientInfo: g,
            errorDetails: f,
          }));
      },
    };
  });
import * as Dbt from "fs/promises";
import Zdu from "path";
var w_r,
  e1u,
  t1u,
  r1u,
  n1u,
  YYi,
  KYi = j(() => {
    "use strict";
    Qs();
    Ot();
    ra();
    ((w_r = async (t, e) => {
      let r = t.services.config?.getProjectTempDir();
      if (!r) return [];
      try {
        let n = "checkpoint-",
          o = ".json",
          s = await Dbt.readdir(r),
          a = [];
        for (let u of s)
          if (u.startsWith(n) && u.endsWith(o)) {
            let c = Zdu.join(r, u),
              m = await Dbt.stat(c);
            a.push({ name: u.slice(n.length, -o.length), mtime: m.mtime });
          }
        return (
          a.sort((u, c) => (e ? c.mtime.getTime() - u.mtime.getTime() : u.mtime.getTime() - c.mtime.getTime())),
          a
        );
      } catch {
        return [];
      }
    }),
      (e1u = {
        name: "list",
        description: I.t("chatCommand.list.description"),
        kind: "built-in",
        action: async (t) => {
          let e = await w_r(t, !1);
          if (e.length === 0)
            return { type: "message", messageType: "info", content: I.t("chatCommand.list.noCheckpointsFound") };
          let r = Math.max(...e.map((o) => o.name.length)),
            n =
              I.t("chatCommand.list.listHeader") +
              `

`;
          for (let o of e) {
            let s = o.name.padEnd(r, " "),
              a = (f) => String(f).padStart(2, "0"),
              u = o.mtime,
              m =
                `${u.getFullYear()}-${a(u.getMonth() + 1)}-${a(u.getDate())}T${a(u.getHours())}:${a(u.getMinutes())}:${a(u.getSeconds())}`.match(
                  /(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})/,
                ),
              d = m ? `${m[1]} ${m[2]}` : I.t("chatCommand.list.invalidDate");
            n += `  - \x1B[36m${s}\x1B[0m  \x1B[90m(${I.t("chatCommand.list.savedOn", { date: d })})\x1B[0m
`;
          }
          return (
            (n += `
\x1B[90m${I.t("chatCommand.list.sortNote")}\x1B[0m`),
            { type: "message", messageType: "info", content: n }
          );
        },
      }),
      (t1u = {
        name: "save",
        description: I.t("chatCommand.save.description"),
        kind: "built-in",
        action: async (t, e) => {
          let r = e.trim();
          if (!r) return { type: "message", messageType: "error", content: I.t("chatCommand.save.missingTag") };
          let { logger: n, config: o } = t.services;
          await n.initialize();
          let s = await o?.getGeminiClient()?.getChat();
          if (!s) return { type: "message", messageType: "error", content: I.t("chatCommand.save.noChatClient") };
          let a = s.getHistory();
          return a.length > 0
            ? (await n.saveCheckpoint(a, r),
              { type: "message", messageType: "info", content: I.t("chatCommand.save.saved", { tag: r }) })
            : { type: "message", messageType: "info", content: I.t("chatCommand.save.noConversation") };
        },
      }),
      (r1u = {
        name: "resume",
        altNames: ["load"],
        description: I.t("chatCommand.resume.description"),
        kind: "built-in",
        action: async (t, e) => {
          let r = e.trim();
          if (!r) return { type: "message", messageType: "error", content: I.t("chatCommand.resume.missingTag") };
          let { logger: n } = t.services;
          await n.initialize();
          let o = await n.loadCheckpoint(r);
          if (o.length === 0)
            return {
              type: "message",
              messageType: "info",
              content: I.t("chatCommand.resume.noCheckpointFound", { tag: r }),
            };
          let s = { user: "user", model: "iflow" },
            a = [],
            u = !1,
            c = 0;
          for (let m of o) {
            c += 1;
            let d =
              m.parts
                ?.filter((f) => !!f.text)
                .map((f) => f.text)
                .join("") || "";
            d &&
              (c === 1 && d.match(/context for our chat/) && (u = !0),
              (c > 2 || !u) && a.push({ type: (m.role && s[m.role]) || "iflow", text: d }));
          }
          return { type: "load_history", history: a, clientHistory: o };
        },
        completion: async (t, e) => (await w_r(t, !0)).map((n) => n.name).filter((n) => n.startsWith(e)),
      }),
      (n1u = {
        name: "delete",
        description: I.t("chatCommand.delete.description"),
        kind: "built-in",
        action: async (t, e) => {
          let r = e.trim();
          if (!r) return { type: "message", messageType: "error", content: I.t("chatCommand.delete.missingTag") };
          let { logger: n } = t.services;
          return (
            await n.initialize(),
            (await n.deleteCheckpoint(r))
              ? { type: "message", messageType: "info", content: I.t("chatCommand.delete.deleted", { tag: r }) }
              : { type: "message", messageType: "error", content: I.t("chatCommand.delete.notFound", { tag: r }) }
          );
        },
        completion: async (t, e) => (await w_r(t, !0)).map((n) => n.name).filter((n) => n.startsWith(e)),
      }),
      (YYi = { name: "chat", description: I.t("command.chat"), kind: "built-in", subCommands: [e1u, t1u, r1u, n1u] }));
  });
var LJ = {};
Wi(LJ, {
  executeSessionEndHooks: () => o1u,
  executeSessionEndHooksSync: () => Rbt,
  executeSessionStartHooks: () => i1u,
  prepareSessionEndHooksContext: () => s1u,
});
import * as fDe from "path";
import * as JYi from "child_process";
async function i1u(t, e) {
  let r = t?.getHookManager?.();
  if (!r) return null;
  try {
    let n = Ibt(t),
      o = await r.executeSessionStart(e, n),
      { SessionStartHook: s } = await Promise.resolve().then(() => (Ot(), Jg));
    return s.collectAdditionalContext(o) || null;
  } catch (n) {
    return (console.warn("SessionStart hook execution failed:", n), null);
  }
}
async function o1u(t, e) {
  let r = t?.getHookManager?.();
  if (r)
    try {
      let n = Ibt(t);
      await r.executeSessionEnd(e, n);
    } catch (n) {
      console.warn("SessionEnd hook execution failed:", n);
    }
}
function Ibt(t) {
  let e = () => {
    let r = t.getSessionId(),
      n = t.getProjectRoot();
    if (r && n) {
      let o = x3e(n),
        s = fDe.join(Tn(), "projects"),
        a = fDe.join(s, o);
      return fDe.join(a, `${r}.jsonl`);
    }
    return fDe.join(Tn(), "projects", "default", "current-session.jsonl");
  };
  return { sessionId: t.getSessionId(), transcriptPath: e(), cwd: t.getWorkingDir(), projectDir: t.getProjectRoot() };
}
function s1u(t) {
  let e = t?.getHookManager?.();
  return !e || !e.getStatus().hasSessionEnd ? null : Ibt(t);
}
function Rbt(t, e = "other", r = 3e3) {
  let n = t?.getHookManager?.();
  if (!n) return;
  let s = n.getConfig().SessionEnd;
  if (!s || s.length === 0) return;
  let a = Ibt(t),
    c = "global" === "aone" ? "true" : "false",
    m = {
      ...process.env,
      IFLOW_SESSION_ID: a.sessionId,
      IFLOW_TRANSCRIPT_PATH: a.transcriptPath,
      IFLOW_CWD: a.cwd,
      IFLOW_AONE: c,
      IFLOW_SESSION_END_REASON: e,
    };
  a.projectDir && ((m.IFLOW_PROJECT_DIR = a.projectDir), (m.CLAUDE_PROJECT_DIR = a.projectDir));
  let d = JSON.stringify({
      session_id: a.sessionId,
      transcript_path: a.transcriptPath,
      cwd: a.cwd,
      hook_event_name: "SessionEnd",
      reason: e,
    }),
    f = [];
  for (let h of s) if (h.hooks) for (let g of h.hooks) f.push({ command: g.command, timeout: g.timeout });
  if (f.length === 0) return;
  let p = Math.floor(r / f.length);
  for (let h of f)
    try {
      let g = h.command,
        b = h.timeout ? h.timeout * 1e3 : p;
      JYi.spawnSync("bash", ["-c", g], {
        cwd: a.cwd,
        env: m,
        input: d,
        timeout: b,
        stdio: ["pipe", "pipe", "pipe"],
        killSignal: "SIGKILL",
      });
    } catch {}
}
var Qj = j(() => {
  "use strict";
  Ot();
});
var XYi,
  ZYi = j(() => {
    "use strict";
    Ot();
    Qs();
    XYi = {
      name: "clear",
      description: I.t("command.clear"),
      kind: "built-in",
      action: async (t, e) => {
        let r = t.services.config;
        if (r)
          try {
            let { executeSessionEndHooks: o } = await Promise.resolve().then(() => (Qj(), LJ));
            await o(r, "clear");
          } catch (o) {
            console.warn("Failed to execute SessionEnd hooks:", o);
          }
        let n = t.services.config?.getGeminiClient();
        if (
          (n
            ? (t.ui.setDebugMessage(I.t("clearCommand.clearingTerminalAndResetChat")), await n.resetChat())
            : t.ui.setDebugMessage(I.t("clearCommand.clearingTerminal")),
          Pb.resetLastPromptTokenCount(),
          t.ui.clear(),
          va.clearAllTodos(),
          r)
        )
          try {
            let { executeSessionStartHooks: o } = await Promise.resolve().then(() => (Qj(), LJ));
            await o(r, "clear");
          } catch (o) {
            console.warn("Failed to execute SessionStart hooks:", o);
          }
      },
    };
  });
var eKi,
  tKi = j(() => {
    "use strict";
    Qs();
    Ot();
    eKi = {
      name: "cleanup-checkpoint",
      get description() {
        return I.t("command.cleanupCheckpoint");
      },
      kind: "built-in",
      action: (t, e) => ({ type: "dialog", dialog: "cleanup-checkpoint" }),
    };
  });
var rKi,
  nKi = j(() => {
    "use strict";
    Qs();
    Ot();
    rKi = {
      name: "cleanup-history",
      get description() {
        return I.t("command.cleanupHistory");
      },
      kind: "built-in",
      action: (t, e) => ({ type: "dialog", dialog: "cleanup-history" }),
    };
  });
import nP from "fs/promises";
import Gj from "path";
function aKi(t, e) {
  if (t === "global") return Gj.join(Tn(), "commands");
  {
    let r = e || process.cwd();
    return Gj.join(r, ui(), "commands");
  }
}
function u1u(t) {
  return t
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
var iKi,
  oKi,
  a1u,
  x_r,
  GA,
  qd,
  sKi,
  c1u,
  l1u,
  m1u,
  d1u,
  f1u,
  uKi,
  cKi = j(() => {
    "use strict";
    ra();
    Qs();
    Ot();
    ((iKi = "\x1B[32m"),
      (oKi = "\x1B[31m"),
      (a1u = "\x1B[36m"),
      (x_r = "\x1B[90m"),
      (GA = "\x1B[1m"),
      (qd = "\x1B[0m"),
      (sKi = async (t, e) => {
        let r = await fetch(`https://apis.iflow.cn/v1/commands/get/${e}`, /* @iflow-api-endpoint */ {
          headers: { Authorization: `Bearer ${t}` },
        });
        if (!r.ok) throw new Error(`HTTP ${r.status}: ${r.statusText}`);
        let n = await r.json();
        if (!n.success) throw new Error(n.message || I.t("commandsCommand.failedToFetchDetails"));
        return n.data || null;
      }));
    ((c1u = async (t, e) => {
      try {
        let r = aKi(e),
          n = `${t}.toml`,
          o = Gj.join(r, n);
        try {
          await nP.access(o);
        } catch {
          return {
            success: !1,
            message:
              I.t("commandsCommand.remove.notFound", { commandName: t, scope: e }) +
              (e === "project"
                ? `
` + I.t("commandsCommand.remove.globalScopeHint")
                : ""),
          };
        }
        return (
          await nP.unlink(o),
          { success: !0, message: I.t("commandsCommand.remove.success", { commandName: t, scope: e, filePath: o }) }
        );
      } catch (r) {
        let n = r instanceof Error ? r.message : String(r);
        return { success: !1, message: I.t("commandsCommand.remove.failed", { commandName: t, error: n }) };
      }
    }),
      (l1u = async (t, e = "project", r) => {
        try {
          let n = aKi(e, r);
          await nP.mkdir(n, { recursive: !0 });
          let o = `${u1u(t.name)}.toml`,
            s = Gj.join(n, o);
          try {
            return (
              await nP.access(s),
              {
                success: !1,
                message: I.t("commandsCommand.install.alreadyInstalled", { commandName: t.name, scope: e }),
              }
            );
          } catch {}
          let a = `# Command: ${t.name}
# Description: ${t.description}
# Category: ${t.category}
# Version: ${t.version}
# Author: ${t.authorId}

description = "${t.description.replace(/"/g, '\\"')}"

prompt = """
${t.detailContext || t.description}
"""
`;
          return (
            await nP.writeFile(s, a, "utf8"),
            {
              success: !0,
              message: I.t("commandsCommand.install.success", { commandName: t.name, scope: e, filePath: s }),
            }
          );
        } catch (n) {
          let o = n instanceof Error ? n.message : String(n);
          return { success: !1, message: I.t("commandsCommand.install.failed", { commandName: t.name, error: o }) };
        }
      }),
      (m1u = async () => {
        let t = [],
          e = Gj.join(Tn(), "commands");
        try {
          let n = await nP.readdir(e);
          for (let o of n)
            if (o.endsWith(".toml")) {
              let s = Gj.join(e, o),
                u = (await nP.readFile(s, "utf8")).match(/description\s*=\s*"([^"]+)"/),
                c = u ? u[1] : void 0;
              t.push({ name: o.replace(".toml", ""), description: c, filePath: s, scope: "global" });
            }
        } catch {}
        let r = Gj.join(process.cwd(), ui(), "commands");
        try {
          let n = await nP.readdir(r);
          for (let o of n)
            if (o.endsWith(".toml")) {
              let s = Gj.join(r, o),
                u = (await nP.readFile(s, "utf8")).match(/description\s*=\s*"([^"]+)"/),
                c = u ? u[1] : void 0;
              t.push({ name: o.replace(".toml", ""), description: c, filePath: s, scope: "project" });
            }
        } catch {}
        return t.sort((n, o) => (n.scope !== o.scope ? (n.scope === "global" ? -1 : 1) : n.name.localeCompare(o.name)));
      }),
      (d1u = (t) => {
        if (t.length === 0) return I.t("commandsCommand.list.noCommands");
        let e =
            I.t("commandsCommand.list.installedHeader") +
            `

`,
          r = t.filter((o) => o.scope === "global"),
          n = t.filter((o) => o.scope === "project");
        return (
          r.length > 0 &&
            ((e += `${GA}\u{1F30D} ${I.t("commandsCommand.list.globalCommands")}${qd} (${r.length}):

`),
            r.forEach((o) => {
              ((e += `  ${GA}/${o.name}${qd}`),
                o.description && (e += ` - ${o.description}`),
                (e += `
    ${x_r}\u{1F4C1} ${o.filePath}${qd}

`));
            })),
          n.length > 0 &&
            ((e += `${GA}\u{1F4C2} ${I.t("commandsCommand.list.projectCommands")}${qd} (${n.length}):

`),
            n.forEach((o) => {
              ((e += `  ${GA}/${o.name}${qd}`),
                o.description && (e += ` - ${o.description}`),
                (e += `
    ${x_r}\u{1F4C1} ${o.filePath}${qd}

`));
            })),
          (e += I.t("commandsCommand.list.tips")),
          e
        );
      }),
      (f1u = (t) => {
        let e = [];
        try {
          e = JSON.parse(t.tags);
        } catch {
          e = [];
        }
        let r = `${a1u}${GA}${I.t("commandsCommand.details.title")}${qd}

`;
        return (
          (r += `${GA}${I.t("commandsCommand.details.id")}${qd} ${t.id}
`),
          (r += `${GA}${I.t("commandsCommand.details.name")}${qd} ${t.name}
`),
          (r += `${GA}${I.t("commandsCommand.details.description")}${qd} ${t.description}
`),
          (r += `${GA}${I.t("commandsCommand.details.category")}${qd} ${t.category}
`),
          (r += `${GA}${I.t("commandsCommand.details.model")}${qd} ${t.modelName}
`),
          e.length > 0 &&
            (r += `${GA}${I.t("commandsCommand.details.tags")}${qd} ${e.join(", ")}
`),
          (r += `${GA}${I.t("commandsCommand.details.author")}${qd} ${t.authorId}
`),
          (r += `${GA}${I.t("commandsCommand.details.version")}${qd} ${t.version}
`),
          (r += `${GA}${I.t("commandsCommand.details.visibility")}${qd} ${t.visibility}
`),
          (r += `${GA}${I.t("commandsCommand.details.status")}${qd} ${t.publishStatus}
`),
          t.detailContext &&
            t.detailContext.trim() &&
            (r += `
${GA}${I.t("commandsCommand.details.detailContext")}${qd}
${t.detailContext}
`),
          (r += `
${x_r}${I.t("commandsCommand.details.addHint", { id: t.id })}${qd}`),
          r
        );
      }),
      (uKi = {
        name: "commands",
        altNames: ["cmd"],
        description: I.t("command.commands"),
        kind: "built-in",
        subCommands: [
          {
            name: "list",
            altNames: ["ls", "show", "local"],
            description: I.t("commandsCommand.subCommands.list"),
            kind: "built-in",
            action: async (t, e) => {
              try {
                t.ui.addItem({ type: "info", text: I.t("commandsCommand.list.loading") }, Date.now());
                let r = await m1u();
                t.ui.addItem({ type: "info", text: d1u(r) }, Date.now());
              } catch (r) {
                let n = r instanceof Error ? r.message : String(r);
                t.ui.addItem(
                  { type: "error", text: I.t("commandsCommand.list.errorLoading", { error: n }) },
                  Date.now(),
                );
              }
            },
          },
          {
            name: "online",
            altNames: ["list"],
            description: I.t("commandsCommand.subCommands.online"),
            kind: "built-in",
            action: async (t, e) => ({ type: "dialog", dialog: "commands-online" }),
          },
          {
            name: "get",
            altNames: [],
            description: I.t("commandsCommand.subCommands.get"),
            kind: "built-in",
            action: async (t, e) => {
              let r = e.trim();
              if (!r) {
                t.ui.addItem({ type: "error", text: I.t("commandsCommand.get.idRequired") }, Date.now());
                return;
              }
              if (!/^\d+$/.test(r)) {
                t.ui.addItem({ type: "error", text: I.t("commandsCommand.get.idMustBeNumber") }, Date.now());
                return;
              }
              let n = t.services.config?.getContentGeneratorConfig()?.apiKey;
              if (!n) {
                t.ui.addItem({ type: "error", text: I.t("commandsCommand.get.apiKeyNotFound") }, Date.now());
                return;
              }
              try {
                t.ui.addItem({ type: "info", text: I.t("commandsCommand.get.fetching", { id: r }) }, Date.now());
                let o = await sKi(n, parseInt(r, 10));
                if (!o) {
                  t.ui.addItem({ type: "error", text: I.t("commandsCommand.get.notFound", { id: r }) }, Date.now());
                  return;
                }
                t.ui.addItem({ type: "info", text: f1u(o) }, Date.now());
              } catch (o) {
                let s = o instanceof Error ? o.message : String(o);
                t.ui.addItem(
                  { type: "error", text: I.t("commandsCommand.get.errorFetching", { error: s }) },
                  Date.now(),
                );
              }
            },
          },
          {
            name: "add",
            altNames: [],
            description: I.t("commandsCommand.subCommands.add"),
            kind: "built-in",
            action: async (t, e) => {
              let r = e.trim().split(/\s+/),
                n = r[0],
                o = "project",
                s = r.findIndex((u) => u === "--scope");
              if (s !== -1 && s + 1 < r.length) {
                let u = r[s + 1];
                if (u === "global" || u === "project") o = u;
                else {
                  t.ui.addItem(
                    { type: "error", text: I.t("commandsCommand.add.invalidScope", { scope: u }) },
                    Date.now(),
                  );
                  return;
                }
              }
              if (!n) {
                t.ui.addItem({ type: "error", text: I.t("commandsCommand.add.idRequired") }, Date.now());
                return;
              }
              if (!/^\d+$/.test(n)) {
                t.ui.addItem({ type: "error", text: I.t("commandsCommand.add.idMustBeNumber") }, Date.now());
                return;
              }
              let a = t.services.config?.getContentGeneratorConfig()?.apiKey;
              if (!a) {
                t.ui.addItem({ type: "error", text: I.t("commandsCommand.add.apiKeyNotFound") }, Date.now());
                return;
              }
              try {
                t.ui.addItem({ type: "info", text: I.t("commandsCommand.add.fetching", { id: n }) }, Date.now());
                let u = await sKi(a, parseInt(n, 10));
                if (!u) {
                  t.ui.addItem(
                    { type: "error", text: I.t("commandsCommand.add.notFoundInRepo", { id: n }) },
                    Date.now(),
                  );
                  return;
                }
                let c = await l1u(u, o);
                t.ui.addItem(
                  {
                    type: c.success ? "info" : "error",
                    text: c.success ? `${iKi}${c.message}${qd}` : `${oKi}${c.message}${qd}`,
                  },
                  Date.now(),
                );
              } catch (u) {
                let c = u instanceof Error ? u.message : String(u);
                t.ui.addItem({ type: "error", text: I.t("commandsCommand.add.error", { error: c }) }, Date.now());
              }
            },
          },
          {
            name: "remove",
            altNames: ["rm", "delete"],
            description: I.t("commandsCommand.subCommands.remove"),
            kind: "built-in",
            action: async (t, e) => {
              let r = e.trim().split(/\s+/),
                n = r[0],
                o = "project",
                s = r.findIndex((a) => a === "--scope");
              if (s !== -1 && s + 1 < r.length) {
                let a = r[s + 1];
                if (a === "global" || a === "project") o = a;
                else {
                  t.ui.addItem(
                    { type: "error", text: I.t("commandsCommand.remove.invalidScope", { scope: a }) },
                    Date.now(),
                  );
                  return;
                }
              }
              if (!n) {
                t.ui.addItem({ type: "error", text: I.t("commandsCommand.remove.nameRequired") }, Date.now());
                return;
              }
              try {
                t.ui.addItem(
                  { type: "info", text: I.t("commandsCommand.remove.removing", { commandName: n, scope: o }) },
                  Date.now(),
                );
                let a = await c1u(n, o);
                t.ui.addItem(
                  {
                    type: a.success ? "info" : "error",
                    text: a.success ? `${iKi}${a.message}${qd}` : `${oKi}${a.message}${qd}`,
                  },
                  Date.now(),
                );
              } catch (a) {
                let u = a instanceof Error ? a.message : String(a);
                t.ui.addItem({ type: "error", text: I.t("commandsCommand.remove.error", { error: u }) }, Date.now());
              }
            },
          },
        ],
      }));
  });
var Afe,
  T_r = j(() => {
    "use strict";
    ra();
    Qs();
    Ot();
    Afe = {
      name: "compress",
      altNames: ["summarize", "compact"],
      description: I.t("command.compress"),
      kind: "built-in",
      action: async (t) => {
        let { ui: e } = t;
        if (e.pendingItem) {
          e.addItem({ type: "error", text: I.t("compressCommand.alreadyCompressing") }, Date.now());
          return;
        }
        let r = {
          type: "compression",
          compression: { isPending: !0, originalTokenCount: null, newTokenCount: null, summary: void 0 },
        };
        try {
          (e.addItem({ type: "info", text: I.t("compressCommand.compressing") }, Date.now()), e.setPendingItem(r));
          let n = `compress-${Date.now()}`,
            o = await t.services.config?.getGeminiClient()?.tryCompressChat(n, !0);
          if (o) {
            e.addItem(
              {
                type: "compression",
                compression: {
                  isPending: !1,
                  originalTokenCount: o.originalTokenCount,
                  newTokenCount: o.newTokenCount,
                  summary: o.summary,
                },
              },
              Date.now(),
            );
            try {
              let a = t.services.config?.getHistoryManager?.();
              a && typeof a.recordCompressionEvent == "function"
                ? await a.recordCompressionEvent({
                    originalTokenCount: o.originalTokenCount,
                    newTokenCount: o.newTokenCount,
                    summary: o.summary,
                  })
                : console.warn(I.t("compressCommand.historyManagerNotAvailable"));
            } catch (a) {
              console.warn(I.t("compressCommand.failedToRecordEvent"), a);
            }
            let s = t.services.config;
            if (s)
              try {
                let { executeSessionStartHooks: a } = await Promise.resolve().then(() => (Qj(), LJ));
                await a(s, "compress");
              } catch (a) {
                console.warn("Failed to execute SessionStart hooks after compression:", a);
              }
          } else e.addItem({ type: "error", text: I.t("compressCommand.failedToCompress") }, Date.now());
        } catch (n) {
          e.addItem(
            {
              type: "error",
              text: I.t("compressCommand.failedWithError", { error: n instanceof Error ? n.message : String(n) }),
            },
            Date.now(),
          );
        } finally {
          e.setPendingItem(null);
        }
      },
    };
  });
var lKi,
  mKi = j(() => {
    "use strict";
    bJ();
    Qs();
    Ot();
    lKi = {
      name: "copy",
      description: I.t("command.copy"),
      kind: "built-in",
      action: async (t, e) => {
        let n = (await t.services.config?.getGeminiClient()?.getChat())?.getHistory(),
          o = n ? n.filter((a) => a.role === "model").pop() : void 0;
        if (!o) return { type: "message", messageType: "info", content: I.t("copyCommand.noOutputInHistory") };
        let s = o.parts
          ?.filter((a) => a.text)
          .map((a) => a.text)
          .join("");
        if (s)
          try {
            return (
              await $1e(s),
              { type: "message", messageType: "info", content: I.t("copyCommand.lastOutputCopied") }
            );
          } catch (a) {
            let u = a instanceof Error ? a.message : String(a);
            return (
              console.debug(u),
              { type: "message", messageType: "error", content: I.t("copyCommand.failedToCopy") }
            );
          }
        else return { type: "message", messageType: "info", content: I.t("copyCommand.noTextToCopy") };
      },
    };
  });
import dKi from "node:process";
var fKi,
  pKi = j(() => {
    "use strict";
    Qs();
    ra();
    Ot();
    fKi = {
      name: "docs",
      description: I.t("command.docs"),
      kind: "built-in",
      action: async (t) => {
        let e = "https://platform.iflow.cn/cli/quickstart /* @iflow-platform-endpoint */";
        if (dKi.env.SANDBOX && dKi.env.SANDBOX !== "sandbox-exec")
          t.ui.addItem({ type: "info", text: I.t("docsCommand.pleaseOpenUrl", { url: e }) }, Date.now());
        else {
          let r = await BC(e);
          t.ui.addItem(
            {
              type: "info",
              text: r ? I.t("docsCommand.openingDocs", { url: e }) : I.t("docsCommand.pleaseOpenUrl", { url: e }),
            },
            Date.now(),
          );
        }
      },
    };
  });
import * as D_r from "os";
import * as hKi from "path";
function p1u(t) {
  if (!t) return "";
  let e = t;
  return (
    t.toLowerCase().startsWith("%userprofile%")
      ? (e = D_r.homedir() + t.substring(13))
      : t.startsWith("~") && (e = D_r.homedir() + t.substring(1)),
    hKi.normalize(e)
  );
}
var yfe,
  I_r = j(() => {
    "use strict";
    Qs();
    ra();
    Ot();
    yfe = {
      name: "directory",
      altNames: ["dir"],
      description: I.t("command.directory"),
      kind: "built-in",
      subCommands: [
        {
          name: "add",
          description: I.t("directoryCommand.add.description"),
          kind: "built-in",
          action: async (t, e) => {
            let {
                ui: { addItem: r },
                services: { config: n },
              } = t,
              [...o] = e.split(" ");
            if (!n) {
              r({ type: "error", text: I.t("directoryCommand.configNotAvailable") }, Date.now());
              return;
            }
            let s = n.getWorkspaceContext(),
              a = o
                .join(" ")
                .split(",")
                .filter((m) => m);
            if (a.length === 0) {
              r({ type: "error", text: I.t("directoryCommand.add.pathRequired") }, Date.now());
              return;
            }
            if (n.isRestrictiveSandbox())
              return {
                type: "message",
                messageType: "error",
                content: I.t("directoryCommand.add.restrictiveSandboxError"),
              };
            let u = [],
              c = [];
            for (let m of a)
              try {
                (s.addDirectory(p1u(m.trim())), u.push(m.trim()));
              } catch (d) {
                let f = d;
                c.push(I.t("directoryCommand.add.errorAdding", { path: m.trim(), error: f.message }));
              }
            if (u.length > 0) {
              let m = n.getGeminiClient();
              (m && (await m.addDirectoryContext()),
                r(
                  {
                    type: "info",
                    text: I.t("directoryCommand.add.successMessage", {
                      directories: u.join(`
- `),
                    }),
                  },
                  Date.now(),
                ));
            }
            c.length > 0 &&
              r(
                {
                  type: "error",
                  text: c.join(`
`),
                },
                Date.now(),
              );
          },
        },
        {
          name: "show",
          description: I.t("directoryCommand.show.description"),
          kind: "built-in",
          action: async (t) => {
            let {
              ui: { addItem: e },
              services: { config: r },
            } = t;
            if (!r) {
              e({ type: "error", text: I.t("directoryCommand.configNotAvailable") }, Date.now());
              return;
            }
            let s = r
              .getWorkspaceContext()
              .getDirectories()
              .map((a) => `- ${a}`).join(`
`);
            e({ type: "info", text: I.t("directoryCommand.show.currentDirectories", { directories: s }) }, Date.now());
          },
        },
      ],
    };
  });
var gKi,
  bKi = j(() => {
    "use strict";
    Qs();
    Ot();
    gKi = {
      name: "editor",
      description: I.t("command.editor"),
      kind: "built-in",
      action: () => ({ type: "dialog", dialog: "editor" }),
    };
  });
import { Writable as h1u } from "stream";
function O_r() {
  return k_r.getBufferString();
}
function N_r() {
  k_r.clear();
}
function P_r() {
  return k_r.getStdout();
}
var g1u,
  R_r,
  k_r,
  B_r = j(() => {
    "use strict";
    ((g1u = 1024 * 1024),
      (R_r = class extends h1u {
        origStdout;
        chunks = [];
        size = 0;
        maxSize;
        pipeBroken = !1;
        silenceEpipeWarning = !1;
        constructor(e = g1u) {
          (super(),
            (this.origStdout = process.stdout),
            (this.maxSize = e),
            this.setupErrorHandler(),
            this.setupPropertyProxying());
        }
        setupErrorHandler() {
          this.origStdout.on("error", (e) => {
            e.code === "EPIPE" ? this.handleEpipeError() : this.emit("error", e);
          });
        }
        handleEpipeError() {
          ((this.pipeBroken = !0),
            this.silenceEpipeWarning ||
              (process.stderr.write(`
\u26A0\uFE0F  Output pipe closed (EPIPE). Terminal output disabled but caching continues.
`),
              process.stderr.write(`   Use /export command to save captured content.
`),
              (this.silenceEpipeWarning = !0)));
        }
        setupPropertyProxying() {
          (Object.defineProperty(this, "columns", {
            get: () => this.origStdout.columns,
            configurable: !0,
            enumerable: !0,
          }),
            Object.defineProperty(this, "rows", { get: () => this.origStdout.rows, configurable: !0, enumerable: !0 }),
            Object.defineProperty(this, "isTTY", {
              get: () => this.origStdout.isTTY,
              configurable: !0,
              enumerable: !0,
            }),
            Object.defineProperty(this, "write", {
              value: this.write.bind(this),
              configurable: !0,
              enumerable: !0,
              writable: !0,
            }));
        }
        _write(e, r, n) {
          let o = Buffer.isBuffer(e) ? e : Buffer.from(String(e));
          try {
            if (this.pipeBroken) {
              (this.appendBuffer(o), n());
              return;
            }
            this.origStdout.write(o)
              ? (this.appendBuffer(o), n())
              : this.origStdout.once("drain", () => {
                  (this.appendBuffer(o), n());
                });
          } catch (s) {
            s.code === "EPIPE"
              ? (this.handleEpipeError(), this.appendBuffer(o), n())
              : n(s instanceof Error ? s : new Error(String(s)));
          }
        }
        appendBuffer(e) {
          for (this.chunks.push(e), this.size += e.length; this.size > this.maxSize && this.chunks.length > 0; ) {
            let r = this.chunks.shift();
            this.size -= r.length;
          }
        }
        getBufferString(e = "utf8") {
          return Buffer.concat(this.chunks).toString(e);
        }
        clear() {
          ((this.chunks = []), (this.size = 0));
        }
        getStdout() {
          return this;
        }
        isPipeBroken() {
          return this.pipeBroken;
        }
        resetPipeStatus() {
          ((this.pipeBroken = !1), (this.silenceEpipeWarning = !1));
        }
        getCacheInfo() {
          return { size: this.size, chunks: this.chunks.length, maxSize: this.maxSize };
        }
      }),
      (k_r = new R_r()));
  });
import b1u from "fs/promises";
import A1u from "path";
function AKi(t) {
  return t
    ? ((t = t.replace(/\\x1b/g, "\x1B").replace(/\\u001b/g, "\x1B")),
      (t = t.replace(/\x1b\].*?\x07/g, "")),
      (t = t.replace(/(?:\x1B\[|\x9B)[0-?]*[ -\/]*[@-~]/g, "")),
      (t = t.replace(/\x1b[@-~]/g, "")),
      (t = t.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")),
      t)
    : "";
}
var yKi,
  _Ki = j(() => {
    "use strict";
    Qs();
    Ot();
    bJ();
    NI();
    B_r();
    yKi = {
      name: "export",
      description: I.t("command.export"),
      kind: "built-in",
      subCommands: [
        {
          name: "clipboard",
          description: I.t("exportCommand.clipboard.description"),
          kind: "built-in",
          action: async (t) => {
            try {
              (N_r(), yo.emit("force-refresh"));
              let e = await new Promise((n) => {
                  let o = !1,
                    s = () => {
                      try {
                        (clearTimeout(a), o || ((o = !0), n(!0)));
                      } catch (u) {
                        throw (yo.off("render-flushed", s), clearTimeout(a), u);
                      }
                    };
                  yo.once("render-flushed", s);
                  let a = setTimeout(() => {
                    (yo.off("render-flushed", s), o || ((o = !0), n(!1)));
                  }, 300);
                }),
                r = "";
              try {
                r = O_r();
              } catch {
                r = "";
              }
              if (r && r.trim().length > 0) {
                let n = AKi(r);
                return (
                  await $1e(n),
                  { type: "message", messageType: "info", content: I.t("exportCommand.clipboard.success") }
                );
              }
            } catch (e) {
              return {
                type: "message",
                messageType: "error",
                content: I.t("exportCommand.clipboard.failed", {
                  error: e instanceof Error ? e.message : I.t("exportCommand.unknownError"),
                }),
              };
            }
          },
        },
        {
          name: "file",
          description: I.t("exportCommand.file.description"),
          kind: "built-in",
          action: async (t) => {
            try {
              (N_r(), yo.emit("force-refresh"), await new Promise((r) => setTimeout(r, 300)));
              let e = "";
              try {
                e = O_r();
              } catch {
                e = "";
              }
              if (((e = AKi(e)), e && e.trim().length > 0)) {
                let r = new Date(),
                  n = r.toISOString().slice(0, 10),
                  o = r.toTimeString().slice(0, 8).replace(/:/g, ""),
                  s = `conversation-${n}-${o}.txt`,
                  a = A1u.join(process.cwd(), s);
                return (
                  await b1u.writeFile(a, e, "utf8"),
                  { type: "message", messageType: "info", content: I.t("exportCommand.file.success", { fileName: s }) }
                );
              }
            } catch (e) {
              return {
                type: "message",
                messageType: "error",
                content: I.t("exportCommand.file.failed", {
                  error: e instanceof Error ? e.message : I.t("exportCommand.unknownError"),
                }),
              };
            }
          },
        },
      ],
    };
  });
var EKi,
  vKi = j(() => {
    "use strict";
    Qs();
    ra();
    Ot();
    EKi = {
      name: "extensions",
      description: I.t("command.extensions"),
      kind: "built-in",
      action: async (t) => {
        let e = t.services.config?.getExtensions().filter((o) => o.isActive);
        if (!e || e.length === 0) {
          t.ui.addItem({ type: "info", text: I.t("extensionsCommand.noActiveExtensions") }, Date.now());
          return;
        }
        let r = e.map((o) => `  - \x1B[36m${o.name} (v${o.version})\x1B[0m`),
          n = `${I.t("extensionsCommand.activeExtensions")}:

${r.join(`
`)}
`;
        t.ui.addItem({ type: "info", text: n }, Date.now());
      },
    };
  });
var CKi,
  SKi = j(() => {
    "use strict";
    Qs();
    Ot();
    CKi = {
      name: "help",
      altNames: ["?"],
      description: I.t("command.help"),
      kind: "built-in",
      action: (t, e) => (console.debug("Opening help UI ..."), { type: "dialog", dialog: "help" }),
    };
  });
var wKi,
  xKi = j(() => {
    "use strict";
    Qs();
    Ot();
    wKi = {
      name: "ide",
      description: I.t("command.ide"),
      kind: "built-in",
      action: (t, e) => (console.debug("Opening IDE connection dialog..."), { type: "dialog", dialog: "ide" }),
    };
  });
var pDe,
  TKi,
  y1u,
  iP,
  DKi,
  yf,
  RKi,
  _1u,
  IKi,
  E1u,
  zvl,
  v1u,
  kKi,
  OKi = j(() => {
    "use strict";
    Qs();
    Ot();
    ((pDe = "\x1B[32m"),
      (TKi = "\x1B[33m"),
      (y1u = "\x1B[31m"),
      (iP = "\x1B[36m"),
      (DKi = "\x1B[90m"),
      (yf = "\x1B[0m"),
      (RKi = async (t, e, r, n = !1) => {
        let { config: o } = t.services;
        if (!o) return { type: "message", messageType: "error", content: I.t("mcpCommand.configNotLoaded") };
        let s = await o.getToolRegistry();
        if (!s) return { type: "message", messageType: "error", content: I.t("mcpCommand.couldNotRetrieveRegistry") };
        let a = o.getMcpServers() || {},
          u = Object.keys(a),
          c = o.getBlockedMcpServers() || [];
        if (u.length === 0 && c.length === 0) {
          let h = "https://platform.iflow.cn/mcp /* @iflow-platform-endpoint */";
          return process.env.SANDBOX && process.env.SANDBOX !== "sandbox-exec"
            ? {
                type: "message",
                messageType: "info",
                content: I.t("mcpCommand.noServersConfiguredSandbox", { docsUrl: h }),
              }
            : {
                type: "message",
                messageType: "info",
                content: (await BC(h))
                  ? I.t("mcpCommand.noServersConfiguredOpen", { docsUrl: h })
                  : I.t("mcpCommand.noServersConfiguredSandbox", { docsUrl: h }),
              };
        }
        let m = u.filter((h) => Ese(h) === Ss.CONNECTING),
          d = Rjt(),
          f = "";
        ((d === bE.IN_PROGRESS || m.length > 0) &&
          ((f += `${TKi}\u23F3 ${I.t("mcpCommand.serversStarting", { count: m.length })}${yf}
`),
          (f += `${iP}${I.t("mcpCommand.firstStartupNote")}${yf}

`)),
          (f += `${I.t("mcpCommand.configuredServers")}

`));
        let p = s.getAllTools();
        for (let h of u) {
          let g = p.filter((P) => P instanceof bg && P.serverName === h),
            A = (await o.getPromptRegistry()).getPromptsByServer(h) || [],
            y = Ese(h),
            E = a[h]?.disabled,
            v = "",
            C = "";
          if (E) ((v = "\u{1F6AB}"), (C = I.t("mcpCommand.status.disabled")));
          else
            switch (y) {
              case Ss.CONNECTED:
                ((v = "\u{1F7E2}"), (C = I.t("mcpCommand.status.ready")));
                break;
              case Ss.CONNECTING:
                ((v = "\u{1F504}"), (C = I.t("mcpCommand.status.starting")));
                break;
              case Ss.DISCONNECTED:
              default:
                ((v = "\u{1F534}"), (C = I.t("mcpCommand.status.disconnected")));
                break;
            }
          let x = a[h],
            k = h;
          (x.extensionName && (k += ` ${I.t("mcpCommand.fromExtension", { extensionName: x.extensionName })}`),
            (f += `${v} \x1B[1m${k}\x1B[0m - ${C}`));
          let R = _se.get(h) || !1;
          if (x?.oauth?.enabled) {
            R = !0;
            try {
              let { MCPOAuthTokenStorage: P } = await Promise.resolve().then(() => (Ot(), Jg)),
                D = await P.getToken(h);
              D
                ? P.isTokenExpired(D.token)
                  ? (f += ` ${TKi}${I.t("mcpCommand.oauth.tokenExpired")}${yf}`)
                  : ((f += ` ${pDe}${I.t("mcpCommand.oauth.authenticated")}${yf}`), (R = !1))
                : (f += ` ${y1u}${I.t("mcpCommand.oauth.notAuthenticated")}${yf}`);
            } catch {}
          }
          if (y === Ss.CONNECTED) {
            let P = [];
            (g.length > 0 && P.push(I.t("mcpCommand.toolCount", { count: g.length })),
              A.length > 0 && P.push(I.t("mcpCommand.promptCount", { count: A.length })),
              P.length > 0 ? (f += ` (${P.join(", ")})`) : (f += ` ${I.t("mcpCommand.zeroTools")}`));
          } else
            y === Ss.CONNECTING
              ? (f += ` ${I.t("mcpCommand.toolsWillAppear")}`)
              : (f += ` ${I.t("mcpCommand.toolsCached", { count: g.length })}`);
          if (e && x?.description) {
            let P = x.description.trim().split(`
`);
            if (P) {
              f += `:
`;
              for (let D of P)
                f += `    ${pDe}${D}${yf}
`;
            } else
              f += `
`;
          } else
            f += `
`;
          ((f += yf),
            g.length > 0 &&
              ((f += `  ${iP}${I.t("mcpCommand.toolsLabel")}${yf}
`),
              g.forEach((P) => {
                if (e && P.description) {
                  f += `  - ${iP}${P.name}${yf}`;
                  let O = P.description.trim().split(`
`);
                  if (O) {
                    f += `:
`;
                    for (let N of O)
                      f += `      ${pDe}${N}${yf}
`;
                  } else
                    f += `
`;
                } else
                  f += `  - ${iP}${P.name}${yf}
`;
                let D = P.schema.parametersJsonSchema ?? P.schema.parameters;
                if (r && D) {
                  f += `    ${iP}${I.t("mcpCommand.parametersLabel")}${yf}
`;
                  let O = JSON.stringify(D, null, 2).trim().split(`
`);
                  if (O)
                    for (let N of O)
                      f += `      ${pDe}${N}${yf}
`;
                }
              })),
            A.length > 0 &&
              (g.length > 0 &&
                (f += `
`),
              (f += `  ${iP}${I.t("mcpCommand.promptsLabel")}${yf}
`),
              A.forEach((P) => {
                if (e && P.description) {
                  f += `  - ${iP}${P.name}${yf}`;
                  let D = P.description.trim().split(`
`);
                  if (D) {
                    f += `:
`;
                    for (let O of D)
                      f += `      ${pDe}${O}${yf}
`;
                  } else
                    f += `
`;
                } else
                  f += `  - ${iP}${P.name}${yf}
`;
              })),
            g.length === 0 && A.length === 0
              ? (f += `  ${I.t("mcpCommand.noToolsOrPrompts")}
`)
              : g.length === 0
                ? ((f += `  ${I.t("mcpCommand.noToolsAvailable")}`),
                  y === Ss.DISCONNECTED && R && (f += ` ${DKi}${I.t("mcpCommand.authHint", { serverName: h })}${yf}`),
                  (f += `
`))
                : y === Ss.DISCONNECTED &&
                  R &&
                  (f += `  ${DKi}${I.t("mcpCommand.authHint", { serverName: h })}${yf}
`),
            (f += `
`));
        }
        for (let h of c) {
          let g = h.name;
          (h.extensionName && (g += ` ${I.t("mcpCommand.fromExtension", { extensionName: h.extensionName })}`),
            (f += `\u{1F534} \x1B[1m${g}\x1B[0m - ${I.t("mcpCommand.blocked")}

`));
        }
        return (
          n &&
            ((f += `
`),
            (f += `${iP}\u{1F4A1} ${I.t("mcpCommand.tips")}${yf}
`),
            (f += `  \u2022 ${I.t("mcpCommand.tipDesc")}
`),
            (f += `  \u2022 ${I.t("mcpCommand.tipSchema")}
`),
            (f += `  \u2022 ${I.t("mcpCommand.tipNoDesc")}
`),
            (f += `  \u2022 ${I.t("mcpCommand.tipAuth")}
`),
            (f += `  \u2022 ${I.t("mcpCommand.tipToggle")}
`),
            (f += `
`)),
          (f += yf),
          { type: "message", messageType: "info", content: f }
        );
      }),
      (_1u = {
        name: "auth",
        description: I.t("mcpCommand.auth.description"),
        kind: "built-in",
        action: async (t, e) => {
          let r = e.trim(),
            { config: n } = t.services;
          if (!n) return { type: "message", messageType: "error", content: I.t("mcpCommand.configNotLoaded") };
          let o = n.getMcpServers() || {};
          if (!r) {
            let u = Object.entries(o)
              .filter(([c, m]) => m.oauth?.enabled)
              .map(([c, m]) => c);
            return u.length === 0
              ? { type: "message", messageType: "info", content: I.t("mcpCommand.noOAuthServers") }
              : {
                  type: "message",
                  messageType: "info",
                  content: I.t("mcpCommand.auth.availableServers", {
                    servers: u.map((c) => `  - ${c}`).join(`
`),
                  }),
                };
          }
          let s = o[r];
          if (!s)
            return {
              type: "message",
              messageType: "error",
              content: I.t("mcpCommand.auth.serverNotFound", { serverName: r }),
            };
          if (s.command === "npx" && s.args?.includes("mcp-remote"))
            return {
              type: "message",
              messageType: "error",
              content: I.t("mcpCommand.auth.mcpRemoteHandlesAuth", { serverName: r }),
            };
          try {
            t.ui.addItem({ type: "info", text: I.t("mcpCommand.startingOAuthAuth", { serverName: r }) }, Date.now());
            let { MCPOAuthProvider: u } = await Promise.resolve().then(() => (Ot(), Jg)),
              c = s.oauth;
            c || (c = { enabled: !1 });
            let m = s.httpUrl || s.url;
            if (!m && s.command === "npx" && s.args) {
              let h = s.args.findIndex((g) => g === "mcp-remote");
              h !== -1 && s.args[h + 1] && (m = s.args[h + 1]);
            }
            if (!m)
              return {
                type: "message",
                messageType: "error",
                content: I.t("mcpCommand.auth.cannotDetermineUrl", { serverName: r }),
              };
            let d = {
              onDisplayUrl: (h) => {
                t.ui.addItem({ type: "info", text: I.t("mcpCommand.auth.authorizationUrl", { url: h }) }, Date.now());
              },
              onPromptForCallback: async () => (
                t.ui.addItem({ type: "info", text: I.t("mcpCommand.auth.manualCallbackPrompt") }, Date.now()),
                null
              ),
            };
            (await u.authenticate(r, c, m, d),
              t.ui.addItem({ type: "info", text: I.t("mcpCommand.authSuccess", { serverName: r }) }, Date.now()));
            let f = await n.getToolRegistry();
            f &&
              (t.ui.addItem(
                { type: "info", text: I.t("mcpCommand.rediscoveringTools", { serverName: r }) },
                Date.now(),
              ),
              await f.discoverToolsForServer(r));
            let p = n.getGeminiClient();
            return (
              p && (await p.setTools()),
              {
                type: "message",
                messageType: "info",
                content: I.t("mcpCommand.auth.successMessage", { serverName: r }),
              }
            );
          } catch (u) {
            return {
              type: "message",
              messageType: "error",
              content: I.t("mcpCommand.auth.failedMessage", { serverName: r, error: mr(u) }),
            };
          }
        },
        completion: async (t, e) => {
          let { config: r } = t.services;
          if (!r) return [];
          let n = r.getMcpServers() || {};
          return Object.keys(n).filter((o) => o.startsWith(e));
        },
      }),
      (IKi = {
        name: "list",
        description: I.t("mcpCommand.list.description"),
        kind: "built-in",
        action: async (t, e) => {
          let r = e.toLowerCase().split(/\s+/).filter(Boolean);
          if (r.some((o) => ["desc", "descriptions", "nodesc", "nodescriptions", "schema"].includes(o))) {
            let o = r.includes("desc") || r.includes("descriptions"),
              s = r.includes("nodesc") || r.includes("nodescriptions"),
              a = r.includes("schema"),
              u = !s && (o || a),
              c = r.length === 0;
            return RKi(t, u, a, c);
          }
          return { type: "dialog", dialog: "mcp-list" };
        },
      }),
      (E1u = {
        name: "online",
        description: I.t("mcpCommand.online.description"),
        kind: "built-in",
        action: (t, e) => ({ type: "dialog", dialog: "mcp-online" }),
      }),
      (zvl = {
        name: "aone",
        description: I.t("mcpCommand.aone.description"),
        kind: "built-in",
        action: (t, e) => ({ type: "dialog", dialog: "mcp-aone" }),
      }),
      (v1u = {
        name: "refresh",
        description: I.t("mcpCommand.refresh.description"),
        kind: "built-in",
        action: async (t) => {
          let { config: e } = t.services;
          if (!e) return { type: "message", messageType: "error", content: I.t("mcpCommand.configNotLoaded") };
          let r = await e.getToolRegistry();
          if (!r) return { type: "message", messageType: "error", content: I.t("mcpCommand.couldNotRetrieveRegistry") };
          t.ui.addItem({ type: "info", text: I.t("mcpCommand.reloadingSettings") }, Date.now());
          try {
            try {
              let { loadSettings: o } = await Promise.resolve().then(() => (dc(), LMi)),
                s = o(e.getWorkingDir());
              if (s.errors.length > 0) {
                let u = s.errors.map((c) => `${c.path}: ${c.message}`).join(`
`);
                t.ui.addItem(
                  { type: "error", text: I.t("mcpCommand.settingsReloadErrors", { errors: u }) },
                  Date.now(),
                );
              } else t.ui.addItem({ type: "info", text: I.t("mcpCommand.refresh.settingsSuccess") }, Date.now());
              let a = s.merged.mcpServers || {};
              for (let [u, c] of Object.entries(a)) e.addMcpServer(u, c);
            } catch (o) {
              t.ui.addItem(
                { type: "error", text: I.t("mcpCommand.refresh.settingsFailed", { error: mr(o) }) },
                Date.now(),
              );
            }
            await r.discoverMcpTools();
            let n = e.getGeminiClient();
            (n && (await n.setTools()),
              t.ui.addItem({ type: "info", text: I.t("mcpCommand.refresh.successMessage") }, Date.now()));
            try {
              return await RKi(t, !1, !1, !1);
            } catch (o) {
              return (
                t.ui.addItem(
                  { type: "error", text: I.t("mcpCommand.refresh.statusFailed", { error: mr(o) }) },
                  Date.now(),
                ),
                { type: "message", messageType: "info", content: I.t("mcpCommand.refreshCompleted") }
              );
            }
          } catch (n) {
            let o = I.t("mcpCommand.refresh.refreshFailed", { error: mr(n) });
            return (
              t.ui.addItem({ type: "error", text: o }, Date.now()),
              { type: "message", messageType: "error", content: o }
            );
          }
        },
      }),
      (kKi = {
        name: "mcp",
        description: I.t("command.mcp"),
        kind: "built-in",
        subCommands: [IKi, _1u, E1u, v1u],
        action: async (t, e) => IKi.action(t, e),
      }));
  });
var NKi,
  PKi = j(() => {
    "use strict";
    Ot();
    ra();
    Qs();
    NKi = {
      name: "memory",
      description: I.t("command.memory"),
      kind: "built-in",
      subCommands: [
        {
          name: "show",
          description: I.t("memoryCommand.subCommands.show"),
          kind: "built-in",
          action: async (t) => {
            let e = t.services.config?.getUserMemory() || "",
              r = t.services.config?.getGeminiMdFileCount() || 0,
              n =
                e.length > 0
                  ? I.t("memoryCommand.currentMemoryContent", { fileCount: r, memoryContent: e })
                  : I.t("memoryCommand.memoryIsEmpty");
            t.ui.addItem({ type: "info", text: n }, Date.now());
          },
        },
        {
          name: "add",
          description: I.t("memoryCommand.subCommands.add"),
          kind: "built-in",
          action: (t, e) =>
            !e || e.trim() === ""
              ? { type: "message", messageType: "error", content: I.t("memoryCommand.usageAdd") }
              : (t.ui.addItem(
                  { type: "info", text: I.t("memoryCommand.attemptingToSave", { text: e.trim() }) },
                  Date.now(),
                ),
                { type: "tool", toolName: "save_memory", toolArgs: { fact: e.trim() } }),
        },
        {
          name: "refresh",
          description: I.t("memoryCommand.subCommands.refresh"),
          kind: "built-in",
          action: async (t) => {
            t.ui.addItem({ type: "info", text: I.t("memoryCommand.refreshingMemory") }, Date.now());
            try {
              let e = await t.services.config;
              if (e) {
                let {
                  memoryContent: r,
                  fileCount: n,
                  filePaths: o,
                } = await t$(
                  e.getWorkingDir(),
                  e.getDebugMode(),
                  e.getFileService(),
                  e.getExtensionContextFilePaths(),
                  t.services.settings.merged.memoryImportFormat || "tree",
                  e.getFileFilteringOptions(),
                  t.services.settings.merged.memoryDiscoveryMaxDirs,
                );
                (e.setUserMemory(r), e.setGeminiMdFileCount(n), e.setGeminiMdFilePaths(o));
                let s =
                  r.length > 0
                    ? I.t("memoryCommand.memoryRefreshedWithContent", { characters: r.length, fileCount: n })
                    : I.t("memoryCommand.memoryRefreshedNoContent");
                t.ui.addItem({ type: "info", text: s }, Date.now());
              }
            } catch (e) {
              let r = mr(e);
              t.ui.addItem({ type: "error", text: I.t("memoryCommand.errorRefreshing", { error: r }) }, Date.now());
            }
          },
        },
        {
          name: "list",
          description: I.t("memoryCommand.subCommands.list"),
          kind: "built-in",
          action: async (t) => {
            try {
              let e = await t.services.config;
              if (e) {
                let {
                  memoryContent: r,
                  fileCount: n,
                  filePaths: o,
                } = await t$(
                  e.getWorkingDir(),
                  e.getDebugMode(),
                  e.getFileService(),
                  e.getExtensionContextFilePaths(),
                  t.services.settings.merged.memoryImportFormat || "tree",
                  e.getFileFilteringOptions(),
                  t.services.settings.merged.memoryDiscoveryMaxDirs,
                );
                (e.setUserMemory(r), e.setGeminiMdFileCount(n), e.setGeminiMdFilePaths(o));
                let s = o.join(`
`),
                  a =
                    n > 0
                      ? I.t("memoryCommand.currentMemoryList", { fileCount: n, splitedFilePaths: s })
                      : I.t("memoryCommand.listIsEmpty");
                t.ui.addItem({ type: "info", text: a }, Date.now());
              }
            } catch (e) {
              let r = mr(e);
              t.ui.addItem({ type: "error", text: I.t("memoryCommand.errorRefreshing", { error: r }) }, Date.now());
            }
          },
        },
      ],
    };
  });
var BKi,
  LKi = j(() => {
    "use strict";
    fw();
    Qs();
    Ot();
    BKi = {
      name: "quit",
      altNames: ["exit"],
      description: I.t("command.quit"),
      kind: "built-in",
      action: async (t) => {
        let e = Date.now(),
          { sessionStartTime: r } = t.session.stats,
          n = e - r.getTime();
        return {
          type: "quit",
          messages: [
            { type: "user", text: "/quit", id: e - 1 },
            { type: "quit", duration: FA(n), id: e },
          ],
        };
      },
    };
  });
import * as Vv from "fs/promises";
import _fe from "path";
function x1u(t, e = 80) {
  if (!t) return "";
  let r = Math.max(e, 4),
    n = t.replace(/\s+/g, " ").trim();
  return n.length <= r ? n : n.substring(0, r - 3) + "...";
}
function FKi(t, e) {
  return t.version === "2.0" && !!t.sessionId && t.sessionId === e;
}
function UKi(t, e) {
  return t.userQuestion ? (e ? x1u(t.userQuestion, e) : t.userQuestion) : "";
}
async function T1u(t, e) {
  let { services: r, ui: n } = t,
    { config: o, git: s } = r,
    { addItem: a, loadHistory: u } = n,
    c = o?.getProjectTempDir?.(),
    m = c ? _fe.join(c, "checkpoints") : void 0;
  if (!m) return { type: "message", messageType: "error", content: I.t("restoreCommand.couldNotDeterminePath") };
  try {
    await Vv.mkdir(m, { recursive: !0 });
    let f = (await Vv.readdir(m)).filter((A) => A.endsWith(".json"));
    if (!e) {
      if (f.length === 0)
        return { type: "message", messageType: "info", content: I.t("restoreCommand.noRestorableCallsFound") };
      a({ type: "info", text: I.t("restoreCommand.availableToolCallsTitle") }, Date.now());
      let A = f.sort((E, v) => v.localeCompare(E)),
        y = o?.getSessionId?.();
      for (let E of A)
        try {
          let v = _fe.join(m, E),
            C = await Vv.readFile(v, "utf-8"),
            x = JSON.parse(C);
          if (!FKi(x, y)) continue;
          let k = E.replace(/\.json$/, ""),
            R = UKi(x, 80),
            P = R || MKi + I.t("restoreCommand.noUserPromptRecord") + hDe,
            D = "";
          if (x.fileStats) {
            let N = x.fileStats.additions,
              F = x.fileStats.deletions;
            D = `${C1u}+${N}${hDe} ${S1u}-${F}${hDe}`;
          } else D = MKi + I.t("restoreCommand.noFileStatsRecord") + hDe;
          let O = `${w1u}@${P}${hDe}
  ${k} ${D}`;
          a({ type: "info", text: O }, Date.now());
        } catch {
          continue;
        }
      return;
    }
    let p = e.endsWith(".json") ? e : `${e}.json`;
    if (!f.includes(p))
      return { type: "message", messageType: "error", content: I.t("restoreCommand.fileNotFound", { file: p }) };
    let h = _fe.join(m, p),
      g = await Vv.readFile(h, "utf-8"),
      b = JSON.parse(g);
    if (b.history) {
      if (!u) return { type: "message", messageType: "error", content: I.t("restoreCommand.loadHistoryNotAvailable") };
      u(b.history);
    }
    if (b.clientHistory) {
      let A = R4e(b.clientHistory);
      await o?.getGeminiClient?.()?.setHistory?.(A);
    }
    b.commitHash &&
      (await s?.restoreProjectFromSnapshot(b.commitHash),
      a({ type: "info", text: I.t("restoreCommand.restoredProjectState") }, Date.now()));
    try {
      let y = (await Vv.readdir(m)).filter((v) => v.endsWith(".json")).sort((v, C) => C.localeCompare(v)),
        E = y.indexOf(p);
      if (E !== -1) {
        let v = y.slice(0, E + 1);
        for (let C of v) {
          let x = _fe.join(m, C);
          await Vv.unlink(x);
        }
      }
    } catch (A) {
      console.warn("Failed to cleanup checkpoints:", A);
    }
    return;
  } catch (d) {
    return { type: "message", messageType: "error", content: I.t("restoreCommand.couldNotReadError", { error: d }) };
  }
}
async function D1u(t, e) {
  let { services: r } = t,
    { config: n } = r,
    o = n?.getProjectTempDir?.(),
    s = o ? _fe.join(o, "checkpoints") : void 0;
  if (!s) return [];
  try {
    let u = (await Vv.readdir(s)).filter((f) => f.endsWith(".json")),
      c = n?.getSessionId?.();
    return (
      await Promise.all(
        u.map(async (f) => {
          try {
            let p = _fe.join(s, f),
              h = await Vv.readFile(p, "utf-8"),
              g = JSON.parse(h);
            if (!FKi(g, c)) return null;
            let b = f.replace(/\.json$/, ""),
              A = UKi(g, 60),
              y = g.fileStats?.additions || 0,
              E = g.fileStats?.deletions || 0;
            return { label: b, value: b, details: { prompt: A, additions: y, deletions: E } };
          } catch {
            return { label: f.replace(/\.json$/, ""), value: f.replace(/\.json$/, "") };
          }
        }),
      )
    )
      .filter((f) => f !== null)
      .sort((f, p) => p.label.localeCompare(f.label));
  } catch {
    return [];
  }
}
var C1u,
  S1u,
  w1u,
  MKi,
  hDe,
  $Ki,
  jKi = j(() => {
    "use strict";
    Qs();
    Ot();
    ra();
    ((C1u = "\x1B[32m"), (S1u = "\x1B[31m"), (w1u = "\x1B[36m"), (MKi = "\x1B[90m"), (hDe = "\x1B[0m"));
    $Ki = (t) =>
      t?.getCheckpointingEnabled?.()
        ? {
            name: "restore",
            description: I.t("restoreCommand.description"),
            kind: "built-in",
            action: T1u,
            completion: D1u,
          }
        : null;
  });
var QKi,
  GKi = j(() => {
    "use strict";
    Qs();
    Ot();
    QKi = {
      name: "resume",
      altNames: ["r"],
      description: I.t("command.resume", { defaultValue: "Resume a previous conversation from history" }),
      kind: "built-in",
      action: async (t, e) => ({ type: "dialog", dialog: "resume" }),
    };
  });
var qKi,
  HKi = j(() => {
    "use strict";
    ra();
    fw();
    Qs();
    Ot();
    qKi = {
      name: "stats",
      altNames: ["usage"],
      description: I.t("command.stats"),
      kind: "built-in",
      action: (t) => {
        let e = new Date(),
          { sessionStartTime: r } = t.session.stats;
        if (!r) {
          t.ui.addItem({ type: "error", text: I.t("statsCommand.sessionStartUnavailable") }, Date.now());
          return;
        }
        let n = e.getTime() - r.getTime(),
          o = { type: "stats", duration: FA(n) };
        t.ui.addItem(o, Date.now());
      },
      subCommands: [
        {
          name: "model",
          description: I.t("statsCommand.subCommands.model"),
          kind: "built-in",
          action: (t) => {
            t.ui.addItem({ type: "model_stats" }, Date.now());
          },
        },
        {
          name: "tools",
          description: I.t("statsCommand.subCommands.tools"),
          kind: "built-in",
          action: (t) => {
            t.ui.addItem({ type: "tool_stats" }, Date.now());
          },
        },
      ],
    };
  });
var VKi,
  WKi = j(() => {
    "use strict";
    Qs();
    Ot();
    VKi = {
      name: "theme",
      description: I.t("command.theme"),
      kind: "built-in",
      action: (t, e) => ({ type: "dialog", dialog: "theme" }),
    };
  });
import { promises as kbt } from "node:fs";
import * as MJ from "node:os";
import * as gDe from "node:path";
import { exec as I1u } from "node:child_process";
import { promisify as R1u } from "node:util";
function N1u(t) {
  return t.replace(/^\s*\/\/.*$/gm, "");
}
function P1u() {
  let t = process.env.TERM_PROGRAM;
  return process.env.CURSOR_TRACE_ID || process.env.VSCODE_GIT_ASKPASS_MAIN?.toLowerCase().includes("cursor")
    ? "cursor"
    : process.env.VSCODE_GIT_ASKPASS_MAIN?.toLowerCase().includes("windsurf")
      ? "windsurf"
      : t === "vscode" || process.env.VSCODE_GIT_IPC_HANDLE
        ? "vscode"
        : null;
}
async function B1u() {
  let t = P1u();
  if (t) return t;
  if (MJ.platform() !== "win32")
    try {
      let { stdout: e } = await O1u("ps -o comm= -p $PPID"),
        r = e.trim();
      if (r.includes("windsurf") || r.includes("Windsurf")) return "windsurf";
      if (r.includes("cursor") || r.includes("Cursor")) return "cursor";
      if (r.includes("code") || r.includes("Code")) return "vscode";
    } catch (e) {
      Ud.debug("Parent process detection failed:", e);
    }
  return null;
}
async function L1u(t) {
  try {
    let e = new Date().toISOString().replace(/[:.]/g, "-"),
      r = `${t}.backup.${e}`;
    await kbt.copyFile(t, r);
  } catch (e) {
    Ud.warn(`Failed to create backup of ${t}:`, e);
  }
}
function M1u(t) {
  let e = MJ.platform();
  return e === "darwin"
    ? gDe.join(MJ.homedir(), "Library", "Application Support", t, "User")
    : e === "win32"
      ? process.env.APPDATA
        ? gDe.join(process.env.APPDATA, t, "User")
        : null
      : gDe.join(MJ.homedir(), ".config", t, "User");
}
async function L_r(t, e) {
  let r = M1u(e);
  if (!r) return { success: !1, message: I.t("terminalSetup.configPathError", { terminalName: t }) };
  let n = gDe.join(r, "keybindings.json");
  try {
    await kbt.mkdir(r, { recursive: !0 });
    let o = [];
    try {
      let c = await kbt.readFile(n, "utf8");
      await L1u(n);
      try {
        let m = N1u(c),
          d = JSON.parse(m);
        if (!Array.isArray(d))
          return { success: !1, message: I.t("terminalSetup.invalidJsonArray", { terminalName: t, filePath: n }) };
        o = d;
      } catch (m) {
        return {
          success: !1,
          message: I.t("terminalSetup.parseError", { terminalName: t, filePath: n, error: String(m) }),
        };
      }
    } catch {}
    let s = {
      key: "shift+enter",
      command: "workbench.action.terminal.sendSequence",
      when: "terminalFocus",
      args: { text: k1u },
    };
    return o.some((c) => {
      let m = c;
      return (
        m.key === "shift+enter" &&
        m.command === "workbench.action.terminal.sendSequence" &&
        m.args?.text ===
          `\\\r
`
      );
    })
      ? { success: !0, message: I.t("terminalSetup.alreadyConfigured", { terminalName: t }) }
      : o.find((c) => c.key === "shift+enter")
        ? { success: !0, message: I.t("terminalSetup.alreadyEnabled", { filePath: n }) }
        : (o.unshift(s),
          await kbt.writeFile(n, JSON.stringify(o, null, 4)),
          {
            success: !0,
            message: I.t("terminalSetup.success", { terminalName: t, filePath: n }),
            requiresRestart: !0,
          });
  } catch (o) {
    return {
      success: !1,
      message: I.t("terminalSetup.configError", { terminalName: t, filePath: n, error: String(o) }),
    };
  }
}
async function F1u() {
  return L_r("VS Code", "Code");
}
async function U1u() {
  return L_r("Cursor", "Cursor");
}
async function $1u() {
  return L_r("Windsurf", "Windsurf");
}
function j1u() {
  let t = MJ.platform();
  return t === "win32"
    ? I.t("terminalSetup.nativeTerminalMethods.windows")
    : t === "darwin"
      ? I.t("terminalSetup.nativeTerminalMethods.macos")
      : I.t("terminalSetup.nativeTerminalMethods.linux");
}
async function zKi() {
  if (rbt()) return { success: !0, message: I.t("terminalSetup.kittyProtocolEnabled") };
  let t = await B1u();
  if (!t) return { success: !1, message: I.t("terminalSetup.unsupportedTerminal", { methods: j1u() }) };
  switch (t) {
    case "vscode":
      return F1u();
    case "cursor":
      return U1u();
    case "windsurf":
      return $1u();
    default:
      return { success: !1, message: I.t("terminalSetup.terminalNotSupported", { terminal: t }) };
  }
}
var k1u,
  O1u,
  YKi = j(() => {
    "use strict";
    nbt();
    Ot();
    ((k1u = `\\\r
`),
      (O1u = R1u(I1u)));
  });
var KKi,
  JKi = j(() => {
    "use strict";
    Ot();
    Qs();
    ra();
    YKi();
    KKi = {
      name: "terminal-setup",
      description: I.t("command.terminalSetup"),
      kind: "built-in",
      action: async (t) => {
        try {
          let e = await zKi(),
            r = e.message;
          (e.requiresRestart &&
            (r +=
              `

` + I.t("terminalSetupCommand.restartRequired")),
            t.ui.addItem({ type: e.success ? "info" : "error", text: r }, Date.now()));
        } catch (e) {
          t.ui.addItem(
            {
              type: "error",
              text: I.t("terminalSetupCommand.error", { error: e instanceof Error ? e.message : String(e) }),
            },
            Date.now(),
          );
        }
      },
    };
  });
var XKi,
  ZKi = j(() => {
    "use strict";
    Qs();
    ra();
    Ot();
    XKi = {
      name: "tools",
      description: I.t("command.tools"),
      kind: "built-in",
      action: async (t, e) => {
        let r = e?.trim(),
          n = !1;
        (r === "desc" || r === "descriptions") && (n = !0);
        let o = await t.services.config?.getToolRegistry();
        if (!o) {
          t.ui.addItem({ type: "error", text: I.t("toolsCommand.couldNotRetrieveRegistry") }, Date.now());
          return;
        }
        let a = o.getAllTools().filter((c) => !("serverName" in c)),
          u =
            I.t("toolsCommand.availableTools") +
            `

`;
        (a.length > 0
          ? a.forEach((c) => {
              if (n && c.description) {
                u += `  - \x1B[36m${c.displayName} (${c.name})\x1B[0m:
`;
                let m = "\x1B[32m",
                  d = "\x1B[0m",
                  f = c.description.trim().split(`
`);
                for (let p of f)
                  u += `      ${m}${p}${d}
`;
              } else
                u += `  - \x1B[36m${c.displayName}\x1B[0m
`;
            })
          : (u +=
              "  " +
              I.t("toolsCommand.noToolsAvailable") +
              `
`),
          (u += `
`),
          (u += "\x1B[0m"),
          t.ui.addItem({ type: "info", text: u }, Date.now()));
      },
    };
  });
var eJi,
  tJi = j(() => {
    "use strict";
    Qs();
    Ot();
    eJi = {
      name: "vim",
      description: I.t("command.vim"),
      kind: "built-in",
      action: async (t, e) => ({
        type: "message",
        messageType: "info",
        content: (await t.ui.toggleVimEnabled()) ? I.t("vimCommand.enteredVimMode") : I.t("vimCommand.exitedVimMode"),
      }),
    };
  });
import * as Efe from "fs";
import * as M_r from "path";
function Q1u(t) {
  return [
    `You are an AI agent that brings the power of iFlow directly into the terminal. Your task is to analyze the current directory and generate a comprehensive ${t} file to be used as instructional context for future interactions.`,
    "",
    "**Important: Please respond to the user in Chinese by default, unless they specifically request another language.**",
    "",
    "**Analysis Process:**",
    "",
    "1.  **Initial Exploration:**",
    "    *   Start by listing the files and directories to get a high-level overview of the structure.",
    "    *   Read the README file (e.g., `README.md`, `README.txt`) if it exists. This is often the best place to start.",
    "",
    "2.  **Iterative Deep Dive (up to 10 files):**",
    "    *   Based on your initial findings, select a few files that seem most important (e.g., configuration files, main source files, documentation).",
    "    *   Read them. As you learn more, refine your understanding and decide which files to read next. You don't need to decide all 10 files at once. Let your discoveries guide your exploration.",
    "",
    "3.  **Identify Project Type:**",
    "    *   **Code Project:** Look for clues like `package.json`, `requirements.txt`, `pom.xml`, `go.mod`, `Cargo.toml`, `build.gradle`, or a `src` directory. If you find them, this is likely a software project.",
    "    *   **Non-Code Project:** If you don't find code-related files, this might be a directory for documentation, research papers, notes, or something else.",
    "",
    "**Context File Content Generation:**",
    "",
    "**For a Code Project:**",
    "",
    "*   **Project Overview:** Write a clear and concise summary of the project's purpose, main technologies, and architecture.",
    "*   **Building and Running:** Document the key commands for building, running, and testing the project. Infer these from the files you've read (e.g., `scripts` in `package.json`, `Makefile`, etc.). If you can't find explicit commands, provide a placeholder with a TODO.",
    "*   **Development Conventions:** Describe any coding styles, testing practices, or contribution guidelines you can infer from the codebase.",
    "",
    "**For a Non-Code Project:**",
    "",
    "*   **Directory Overview:** Describe the purpose and contents of the directory. What is it for? What kind of information does it hold?",
    "*   **Key Files:** List the most important files and briefly explain what they contain.",
    "*   **Usage:** Explain how the contents of this directory are intended to be used.",
    "",
    "**Final Output:**",
    "",
    `Write the complete content to the \`${t}\` file. The output must be well-formatted Markdown.`,
  ].join(`
`);
}
function G1u(t, e) {
  return [
    `You are an AI agent that brings the power of iFlow directly into the terminal. Your task is to analyze the current directory and update the existing ${e} file with optimized content based on the current project state.`,
    "",
    "**Important: Please respond to the user in Chinese by default, unless they specifically request another language.**",
    "",
    `**Current ${e} Content:**`,
    "```markdown",
    t,
    "```",
    "",
    "**Your Task:**",
    "",
    "1. **Re-analyze the Project:**",
    "   * Examine the current project structure, files, and configuration",
    `   * Compare with what's documented in the existing ${e}`,
    "   * Identify any changes, new features, or missing information",
    "",
    "2. **Update Strategy:**",
    "   * Preserve valuable existing information that's still accurate",
    "   * Add new sections for recently added features or changes",
    "   * Update outdated information (commands, dependencies, architecture, etc.)",
    "   * Improve clarity and organization where needed",
    "   * Remove obsolete information",
    "",
    "3. **Focus Areas:**",
    "   * **Project Overview:** Update if the project scope or purpose has evolved",
    "   * **Architecture:** Reflect any structural changes in the codebase",
    "   * **Commands:** Update build, test, and run commands based on current package.json/scripts",
    "   * **Dependencies:** Reflect current dependency changes",
    "   * **Development Practices:** Update based on current code style and conventions",
    "   * **New Features:** Document any new functionality or tools added to the project",
    "",
    "**Analysis Process:**",
    "",
    "1. Start by examining the current directory structure and key files",
    "2. Read important configuration files (package.json, tsconfig.json, etc.)",
    "3. Check for new directories, scripts, or architectural changes",
    `4. Compare current state with the existing ${e} content`,
    "",
    "**Final Output:**",
    "",
    `Write the complete updated content to the \`${e}\` file. The output must be well-formatted Markdown that combines the best of the existing content with current project information.`,
  ].join(`
`);
}
var vfe,
  F_r = j(() => {
    "use strict";
    Qs();
    Ot();
    vfe = {
      name: "init",
      description: I.t("command.init"),
      kind: "built-in",
      action: async (t, e) => {
        if (!t.services.config)
          return { type: "message", messageType: "error", content: I.t("initCommand.configNotAvailable") };
        let r = t.services.config.getTargetDir(),
          n = t.services.settings.merged.contextFileName,
          o = Array.isArray(n) ? n[0] : n,
          s = (g) => Efe.existsSync(M_r.join(r, g)),
          u = [o, "AGENTS.md", "IFLOW.md"].filter(Boolean).find(s) || "AGENTS.md",
          c = M_r.join(r, u),
          m = s(u),
          d = "";
        try {
          m
            ? ((d = Efe.readFileSync(c, "utf8")),
              t.ui.addItem(
                { type: "info", text: I.t("initCommand.existingFileFound", { contextFileName: u }) },
                Date.now(),
              ))
            : (Efe.writeFileSync(c, "", "utf8"),
              t.ui.addItem(
                { type: "info", text: I.t("initCommand.emptyFileCreated", { contextFileName: u }) },
                Date.now(),
              ));
        } catch (g) {
          return {
            type: "message",
            messageType: "error",
            content: I.t("initCommand.readFileError", {
              contextFileName: u,
              error: g instanceof Error ? g.message : String(g),
            }),
          };
        }
        let p = t.services.config.getFileService().geminiIgnoreFilter;
        if (p && typeof p.addAdditionalPatterns == "function")
          try {
            p.addAdditionalPatterns([`**/${ui()}/`]);
          } catch (g) {
            console.warn(`Failed to add ${ui()} ignore pattern:`, g);
          }
        return { type: "submit_prompt", content: m ? G1u(d, u) : Q1u(u) };
      },
    };
  });
var rJi,
  nJi = j(() => {
    "use strict";
    Qs();
    Ot();
    rJi = {
      name: "model",
      description: I.t("command.model"),
      kind: "built-in",
      action: (t, e) => ({ type: "dialog", dialog: "model" }),
    };
  });
import { execSync as U_r } from "node:child_process";
function oJi() {
  let t = U_r("git remote get-url origin", { encoding: "utf-8" }).trim(),
    e = t.match(/(?:https?:\/\/|git@)github\.com(?::|\/)([^/]+)\/([^/]+?)(?:\.git)?$/);
  if (!e || !e[1] || !e[2]) throw new Error(I.t("gitUtils.errors.cannotExtractRepoInfo", { remoteUrl: t }));
  return { owner: e[1], repo: e[2] };
}
var Obt,
  iJi,
  $_r = j(() => {
    "use strict";
    Ot();
    ((Obt = () => {
      try {
        if (!w0() || !ll(process.cwd())) return !1;
        let t = (U_r("git remote -v", { encoding: "utf-8" }) || "").trim();
        return /(github\.com|gitlab)/.test(t);
      } catch (t) {
        return (console.debug("Failed to get git remote:", t), !1);
      }
    }),
      (iJi = () => {
        let t = (U_r("git rev-parse --show-toplevel", { encoding: "utf-8" }) || "").trim();
        if (!t) throw new Error(I.t("gitUtils.errors.emptyRepoRoot"));
        return t;
      }));
  });
import Nbt from "node:path";
import * as FJ from "node:fs";
import { Writable as q1u } from "node:stream";
function H1u(t) {
  let e = hqi(),
    r = [t],
    n = oJi();
  return (n && r.push(`https://github.com/${n.owner}/${n.repo}/settings/secrets/actions`), r.map((s) => `${e} "${s}"`));
}
async function V1u(t) {
  let e = [`${ui()}/`, "gha-creds-*.json"],
    r = Nbt.join(t, ".gitignore");
  try {
    let n = "",
      o = !0;
    try {
      n = await FJ.promises.readFile(r, "utf8");
    } catch {
      o = !1;
    }
    if (o) {
      let s = e.filter((a) => !n.split(/\r?\n/).some((u) => u.split("#")[0].trim() === a));
      if (s.length > 0) {
        let a =
          `
` +
          s.join(`
`) +
          `
`;
        await FJ.promises.appendFile(r, a);
      }
    } else {
      let s =
        e.join(`
`) +
        `
`;
      await FJ.promises.writeFile(r, s);
    }
  } catch (n) {
    console.debug("Failed to update .gitignore:", n);
  }
}
var aJi,
  sJi,
  uJi,
  cJi = j(() => {
    "use strict";
    aJi = Se(mY(), 1);
    $_r();
    Qs();
    Ot();
    bJ();
    sJi = ["issue-triage.yaml", "issue-killer.yml", "pr-review.yml"];
    uJi = {
      name: "setup-github",
      description: I.t("command.setupGithub"),
      kind: "built-in",
      action: async (t) => {
        let e = new AbortController();
        if (!Obt()) throw new Error(I.t("setupGithubCommand.errors.notGitRepository"));
        let r;
        try {
          r = iJi();
        } catch (m) {
          throw (
            console.debug("Failed to get git repo root:", m),
            new Error(I.t("setupGithubCommand.errors.notGitRepository"))
          );
        }
        let n = t?.services?.config?.getProxy(),
          o = "https://github.com/iflow-ai/iflow-cli-action?tab=readme-ov-file#authentication",
          s = Nbt.join(r, ".github", "workflows");
        try {
          await FJ.promises.mkdir(s, { recursive: !0 });
        } catch (m) {
          throw (
            console.debug(`Failed to create ${s} directory:`, m),
            new Error(I.t("setupGithubCommand.errors.cannotCreateDirectory", { directory: s }))
          );
        }
        let a = [];
        for (let m of sJi)
          a.push(
            (async () => {
              let d = `https://raw.githubusercontent.com/iflow-ai/iflow-cli-action/refs/heads/main/examples/${m}`,
                f = await fetch(d, {
                  method: "GET",
                  dispatcher: n ? new aJi.ProxyAgent(n) : void 0,
                  signal: AbortSignal.any([AbortSignal.timeout(3e4), e.signal]),
                });
              if (!f.ok)
                throw new Error(
                  I.t("setupGithubCommand.errors.downloadFailed", {
                    endpoint: d,
                    status: f.status,
                    statusText: f.statusText,
                  }),
                );
              let p = f.body;
              if (!p)
                throw new Error(
                  I.t("setupGithubCommand.errors.emptyDownload", {
                    endpoint: d,
                    status: f.status,
                    statusText: f.statusText,
                  }),
                );
              let h = Nbt.resolve(s, Nbt.basename(m)),
                g = FJ.createWriteStream(h, { mode: 420, flags: "w", flush: !0 });
              await p.pipeTo(q1u.toWeb(g));
            })(),
          );
        (await Promise.all(a).finally(() => {
          e.abort();
        }),
          await V1u(r));
        let u = [];
        (u.push("set -eEuo pipefail"),
          u.push(`echo "${I.t("setupGithubCommand.success", { workflowCount: sJi.length, readmeUrl: o })}"`),
          u.push(...H1u(o)));
        let c = `(${u.join(" && ")})`;
        return {
          type: "tool",
          toolName: "run_shell_command",
          toolArgs: { description: I.t("setupGithubCommand.toolDescription"), command: c },
        };
      },
    };
  });
import W1u from "node:path";
var lJi,
  mJi = j(() => {
    "use strict";
    Ot();
    Qs();
    lJi = {
      name: "log",
      description: I.t("command.log"),
      kind: "built-in",
      action: async (t, e) => {
        let { logger: r } = t.services;
        try {
          let n = Y5(process.cwd()),
            o = W1u.join(n, "logs.json"),
            s = lx(o),
            a = lx(n);
          return {
            type: "message",
            messageType: "info",
            content: I.t("logCommand.logLocation", {
              directory: a,
              logFile: s,
              sessionId: r.sessionId || I.t("logCommand.notAvailable"),
            }),
          };
        } catch (n) {
          return {
            type: "message",
            messageType: "error",
            content: I.t("logCommand.failedToRetrieve", {
              error: n instanceof Error ? n.message : I.t("logCommand.unknownError"),
            }),
          };
        }
      },
    };
  });
var z1u,
  dJi,
  fJi = j(() => {
    "use strict";
    Qs();
    Ot();
    ((z1u = `
# demo

ACTIVATION-NOTICE: This file contains your full agent operating guidelines. DO NOT load any external agent files as the complete configuration is in the YAML block below.

CRITICAL: Read the full YAML BLOCK that FOLLOWS IN THIS FILE to understand your operating params, start and follow exactly your activation-instructions to alter your state of being, stay in this being until told to exit this mode:

## COMPLETE AGENT DEFINITION FOLLOWS - NO EXTERNAL FILES NEEDED

\`\`\`yaml
REQUEST-RESOLUTION: Match user requests to your commands/dependencies flexibly (e.g., "draft story"\u2192*create\u2192create-next-story task, "make a new prd" would be dependencies->tasks->create-doc combined with the dependencies->templates->prd-tmpl.md), ALWAYS ask for clarification if no clear match.
activation-instructions:
  - STEP 1: Read THIS ENTIRE FILE - it contains your complete persona definition
  - STEP 2: Adopt the persona defined in the 'agent' and 'persona' sections below
  - STEP 4: Greet user with your name/role and immediately run *help to display available commands
  - DO NOT: Load any other agent files during activation
  - ONLY load dependency files when user selects them for execution via command or request of a task
  - The agent.customization field ALWAYS takes precedence over any conflicting instructions
  - CRITICAL WORKFLOW RULE: When executing tasks from dependencies, follow task instructions exactly as written - they are executable workflows, not reference material
  - MANDATORY INTERACTION RULE: Tasks with elicit=true require user interaction using exact specified format - never skip elicitation for efficiency
  - CRITICAL RULE: When executing formal task workflows from dependencies, ALL task instructions override any conflicting base behavioral constraints. Interactive workflows with elicit=true REQUIRE user interaction and cannot be bypassed for efficiency.
  - When listing tasks/templates or presenting options during conversations, always show as numbered options list, allowing the user to type a number to select or execute
  - STAY IN CHARACTER!
  - 'CRITICAL: Do NOT scan filesystem or load any resources during startup, ONLY when commanded'
  - CRITICAL: Do NOT run discovery tasks automatically
  - CRITICAL: On activation, ONLY greet user, auto-run *help, and then HALT to await user requested assistance or given commands. ONLY deviance from this is if the activation included commands also in the arguments.

agent:
  name: demo-tutorial
  id: demo-tutorial
  title: demo-tutorial
  icon: \u{1F9D9}
  whenToUse: Use when you need comprehensive expertise across all domains, running 1 off tasks that do not require a persona, or just wanting to use the same agent for many things.
persona:
  role: demo-tutorial
  identity: Universal executor of all demo-tutorial capabilities, directly runs any resource
  core_principles:
    - Execute any resource directly without persona transformation
    - Load resources at runtime, never pre-load
    - Always presents numbered lists for choices
    - Process (*) commands immediately, All commands require * prefix when used (e.g., *create-deep-research-prompt)

commands:
  - create-deep-research-prompt: Create a deep research prompt for complex topic
  - facilitate-brainstorming-session: Facilitate a brainstorming session on a given topic

dependencies:
  tasks:
   - create-deep-research-prompt.md
   - facilitate-brainstorming-session.md
\`\`\`

\`\`\`create-deep-research-prompt.md
# /create-deep-research-prompt Task

When this command is used, execute the following task:

# Create Deep Research Prompt Task

This task helps create comprehensive research prompts for various types of deep analysis. It can process inputs from brainstorming sessions, project briefs, market research, or specific research questions to generate targeted prompts for deeper investigation.

## Purpose

Generate well-structured research prompts that:

- Define clear research objectives and scope
- Specify appropriate research methodologies
- Outline expected deliverables and formats
- Guide systematic investigation of complex topics
- Ensure actionable insights are captured

## Research Type Selection

CRITICAL: First, help the user select the most appropriate research focus based on their needs and any input documents they've provided.

### 1. Research Focus Options

Present these numbered options to the user:

1. **Product Validation Research**
   - Validate product hypotheses and market fit
   - Test assumptions about user needs and solutions
   - Assess technical and business feasibility
   - Identify risks and mitigation strategies

2. **Market Opportunity Research**
   - Analyze market size and growth potential
   - Identify market segments and dynamics
   - Assess market entry strategies
   - Evaluate timing and market readiness

3. **User & Customer Research**
   - Deep dive into user personas and behaviors
   - Understand jobs-to-be-done and pain points
   - Map customer journeys and touchpoints
   - Analyze willingness to pay and value perception

4. **Competitive Intelligence Research**
   - Detailed competitor analysis and positioning
   - Feature and capability comparisons
   - Business model and strategy analysis
   - Identify competitive advantages and gaps

5. **Technology & Innovation Research**
   - Assess technology trends and possibilities
   - Evaluate technical approaches and architectures
   - Identify emerging technologies and disruptions
   - Analyze build vs. buy vs. partner options

6. **Industry & Ecosystem Research**
   - Map industry value chains and dynamics
   - Identify key players and relationships
   - Analyze regulatory and compliance factors
   - Understand partnership opportunities

7. **Strategic Options Research**
   - Evaluate different strategic directions
   - Assess business model alternatives
   - Analyze go-to-market strategies
   - Consider expansion and scaling paths

8. **Risk & Feasibility Research**
   - Identify and assess various risk factors
   - Evaluate implementation challenges
   - Analyze resource requirements
   - Consider regulatory and legal implications

9. **Custom Research Focus**
   - User-defined research objectives
   - Specialized domain investigation
   - Cross-functional research needs

### 2. Input Processing

**If Project Brief provided:**

- Extract key product concepts and goals
- Identify target users and use cases
- Note technical constraints and preferences
- Highlight uncertainties and assumptions

**If Brainstorming Results provided:**

- Synthesize main ideas and themes
- Identify areas needing validation
- Extract hypotheses to test
- Note creative directions to explore

**If Market Research provided:**

- Build on identified opportunities
- Deepen specific market insights
- Validate initial findings
- Explore adjacent possibilities

**If Starting Fresh:**

- Gather essential context through questions
- Define the problem space
- Clarify research objectives
- Establish success criteria

## Process

### 3. Research Prompt Structure

CRITICAL: collaboratively develop a comprehensive research prompt with these components.

#### A. Research Objectives

CRITICAL: collaborate with the user to articulate clear, specific objectives for the research.

- Primary research goal and purpose
- Key decisions the research will inform
- Success criteria for the research
- Constraints and boundaries

#### B. Research Questions

CRITICAL: collaborate with the user to develop specific, actionable research questions organized by theme.

**Core Questions:**

- Central questions that must be answered
- Priority ranking of questions
- Dependencies between questions

**Supporting Questions:**

- Additional context-building questions
- Nice-to-have insights
- Future-looking considerations

#### C. Research Methodology

**Data Collection Methods:**

- Secondary research sources
- Primary research approaches (if applicable)
- Data quality requirements
- Source credibility criteria

**Analysis Frameworks:**

- Specific frameworks to apply
- Comparison criteria
- Evaluation methodologies
- Synthesis approaches

#### D. Output Requirements

**Format Specifications:**

- Executive summary requirements
- Detailed findings structure
- Visual/tabular presentations
- Supporting documentation

**Key Deliverables:**

- Must-have sections and insights
- Decision-support elements
- Action-oriented recommendations
- Risk and uncertainty documentation

### 4. Prompt Generation

**Research Prompt Template:**

\`\`\`markdown
## Research Objective

[Clear statement of what this research aims to achieve]

## Background Context

[Relevant information from project brief, brainstorming, or other inputs]

## Research Questions

### Primary Questions (Must Answer)

1. [Specific, actionable question]
2. [Specific, actionable question]
   ...

### Secondary Questions (Nice to Have)

1. [Supporting question]
2. [Supporting question]
   ...

## Research Methodology

### Information Sources

- [Specific source types and priorities]

### Analysis Frameworks

- [Specific frameworks to apply]

### Data Requirements

- [Quality, recency, credibility needs]

## Expected Deliverables

### Executive Summary

- Key findings and insights
- Critical implications
- Recommended actions

### Detailed Analysis

[Specific sections needed based on research type]

### Supporting Materials

- Data tables
- Comparison matrices
- Source documentation

## Success Criteria

[How to evaluate if research achieved its objectives]

## Timeline and Priority

[If applicable, any time constraints or phasing]
\`\`\`

### 5. Review and Refinement

1. **Present Complete Prompt**
   - Show the full research prompt
   - Explain key elements and rationale
   - Highlight any assumptions made

2. **Gather Feedback**
   - Are the objectives clear and correct?
   - Do the questions address all concerns?
   - Is the scope appropriate?
   - Are output requirements sufficient?

3. **Refine as Needed**
   - Incorporate user feedback
   - Adjust scope or focus
   - Add missing elements
   - Clarify ambiguities

### 6. Next Steps Guidance

**Execution Options:**

1. **Use with AI Research Assistant**: Provide this prompt to an AI model with research capabilities
2. **Guide Human Research**: Use as a framework for manual research efforts
3. **Hybrid Approach**: Combine AI and human research using this structure

**Important Note:**  
Once the research prompt is fully developed and confirmed by the user, you can proceed to execute the deep research according to the user's requirements. This may include initiating AI-assisted data gathering, analysis, and report generation or coordinating human-driven research processes based on the finalized prompt.

**Integration Points:**

- How findings will feed into next phases
- Which team members should review results
- How to validate findings
- When to revisit or expand research

## Important Notes

- The quality of the research prompt directly impacts the quality of insights gathered
- Be specific rather than general in research questions
- Consider both current state and future implications
- Balance comprehensiveness with focus
- Document assumptions and limitations clearly
- Plan for iterative refinement based on initial findings
- Always reply by Chinese, except for technical terms
\`\`\`
---
\`\`\`faciliate-brainstorming-session.md
# Facilitate Brainstorming Session Task

Facilitate interactive brainstorming sessions with users. Be creative and adaptive in applying techniques.

## Process

### Step 1: Session Setup

Ask 4 context questions (don't preview what happens next):

1. What are we brainstorming about?
2. Any constraints or parameters?
3. Goal: broad exploration or focused ideation?
4. Do you want a structured document output to reference later? (Default Yes)

### Step 2: Present Approach Options

After getting answers to Step 1, present 4 approach options (numbered):

1. User selects specific techniques
2. Analyst recommends techniques based on context
3. Random technique selection for creative variety
4. Progressive technique flow (start broad, narrow down)

### Step 3: Execute Techniques Interactively

**KEY PRINCIPLES:**

- **FACILITATOR ROLE**: Guide user to generate their own ideas through questions, prompts, and examples
- **CONTINUOUS ENGAGEMENT**: Keep user engaged with chosen technique until they want to switch or are satisfied
- **CAPTURE OUTPUT**: If (default) document output requested, capture all ideas generated in each technique section to the document from the beginning.

**Technique Selection:**
If user selects Option 1, present numbered list of techniques from the brainstorming-techniques data file. User can select by number..

**Technique Execution:**

1. Apply selected technique according to data file description
2. Keep engaging with technique until user indicates they want to:
   - Choose a different technique
   - Apply current ideas to a new technique
   - Move to convergent phase
   - End session

**Output Capture (if requested):**
For each technique used, capture:

- Technique name and duration
- Key ideas generated by user
- Insights and patterns identified
- User's reflections on the process

### Step 4: Session Flow

1. **Warm-up** (5-10 min) - Build creative confidence
2. **Divergent** (20-30 min) - Generate quantity over quality
3. **Convergent** (15-20 min) - Group and categorize ideas
4. **Synthesis** (10-15 min) - Refine and develop concepts

### Step 5: Document Output (if requested)

Generate structured document with these sections:

**Executive Summary**

- Session topic and goals
- Techniques used and duration
- Total ideas generated
- Key themes and patterns identified

**Technique Sections** (for each technique used)

- Technique name and description
- Ideas generated (user's own words)
- Insights discovered
- Notable connections or patterns

**Idea Categorization**

- **Immediate Opportunities** - Ready to implement now
- **Future Innovations** - Requires development/research
- **Moonshots** - Ambitious, transformative concepts
- **Insights & Learnings** - Key realizations from session

**Action Planning**

- Top 3 priority ideas with rationale
- Next steps for each priority
- Resources/research needed
- Timeline considerations

**Reflection & Follow-up**

- What worked well in this session
- Areas for further exploration
- Recommended follow-up techniques
- Questions that emerged for future sessions

## Key Principles

- **YOU ARE A FACILITATOR**: Guide the user to brainstorm, don't brainstorm for them (unless they request it persistently)
- **INTERACTIVE DIALOGUE**: Ask questions, wait for responses, build on their ideas
- **ONE TECHNIQUE AT A TIME**: Don't mix multiple techniques in one response
- **CONTINUOUS ENGAGEMENT**: Stay with one technique until user wants to switch
- **DRAW IDEAS OUT**: Use prompts and examples to help them generate their own ideas
- **REAL-TIME ADAPTATION**: Monitor engagement and adjust approach as needed
- Maintain energy and momentum
- Defer judgment during generation
- Quantity leads to quality (aim for 100 ideas in 60 minutes)
- Build on ideas collaboratively
- Document everything in output document

## Advanced Engagement Strategies

**Energy Management**

- Check engagement levels: "How are you feeling about this direction?"
- Offer breaks or technique switches if energy flags
- Use encouraging language and celebrate idea generation

**Depth vs. Breadth**

- Ask follow-up questions to deepen ideas: "Tell me more about that..."
- Use "Yes, and..." to build on their ideas
- Help them make connections: "How does this relate to your earlier idea about...?"

**Transition Management**

- Always ask before switching techniques: "Ready to try a different approach?"
- Offer options: "Should we explore this idea deeper or generate more alternatives?"
- Respect their process and timing
\`\`\`
`),
      (dJi = {
        name: "demo",
        description: I.t("command.demo"),
        kind: "built-in",
        action: async (t) => ({ type: "submit_prompt", content: z1u }),
      }));
  });
var pJi,
  hJi = j(() => {
    "use strict";
    Ot();
    dc();
    Qs();
    pJi = {
      name: "language",
      description: I.t("command.language"),
      kind: "built-in",
      subCommands: [
        {
          name: "zh-CN",
          description: I.t("languageCommand.zhCN"),
          kind: "built-in",
          action: async ({ services: t, ui: e }) => {
            (t.settings.setValue("User", "language", "zh-CN"),
              I.changeLanguage("zh-CN"),
              e.addItem({ type: "info", text: I.t("languageCommand.restartRequired") }, Date.now()));
          },
        },
        {
          name: "en-US",
          description: I.t("languageCommand.enUS"),
          kind: "built-in",
          action: async ({ services: t, ui: e }) => {
            (t.settings.setValue("User", "language", "en-US"),
              I.changeLanguage("en-US"),
              e.addItem({ type: "info", text: I.t("languageCommand.restartRequired") }, Date.now()));
          },
        },
      ],
    };
  });
import Y1u from "os";
import Pbt from "path";
var qj,
  UJ,
  gJi,
  Cfe,
  O4l,
  N4l,
  P4l,
  K1u,
  J1u,
  j_r = j(() => {
    ((qj = Y1u.homedir()),
      ({ env: UJ } = process),
      (gJi = UJ.XDG_DATA_HOME || (qj ? Pbt.join(qj, ".local", "share") : void 0)),
      (Cfe = UJ.XDG_CONFIG_HOME || (qj ? Pbt.join(qj, ".config") : void 0)),
      (O4l = UJ.XDG_STATE_HOME || (qj ? Pbt.join(qj, ".local", "state") : void 0)),
      (N4l = UJ.XDG_CACHE_HOME || (qj ? Pbt.join(qj, ".cache") : void 0)),
      (P4l = UJ.XDG_RUNTIME_DIR || void 0),
      (K1u = (UJ.XDG_DATA_DIRS || "/usr/local/share/:/usr/share/").split(":")));
    gJi && K1u.unshift(gJi);
    J1u = (UJ.XDG_CONFIG_DIRS || "/etc/xdg").split(":");
    Cfe && J1u.unshift(Cfe);
  });
var X1u,
  ZI,
  bJi = j(() => {
    ((X1u = (t, e) => {
      let { onError: r } = e;
      return function (...o) {
        return t.apply(void 0, o).catch(r);
      };
    }),
      (ZI = X1u));
  });
var Z1u,
  Ew,
  AJi = j(() => {
    ((Z1u = (t, e) => {
      let { onError: r } = e;
      return function (...o) {
        try {
          return t.apply(void 0, o);
        } catch (s) {
          return r(s);
        }
      };
    }),
      (Ew = Z1u));
  });
var yJi = j(() => {});
var tfu,
  e7,
  _Ji = j(() => {
    yJi();
    ((tfu = (t, e) => {
      let { isRetriable: r } = e;
      return function (o) {
        let { timeout: s } = o,
          a = o.interval ?? 250,
          u = Date.now() + s;
        return function c(...m) {
          return t.apply(void 0, m).catch((d) => {
            if (!r(d) || Date.now() >= u) throw d;
            let f = Math.round(a * Math.random());
            return f > 0 ? new Promise((h) => setTimeout(h, f)).then(() => c.apply(void 0, m)) : c.apply(void 0, m);
          });
        };
      };
    }),
      (e7 = tfu));
  });
var rfu,
  t7,
  EJi = j(() => {
    ((rfu = (t, e) => {
      let { isRetriable: r } = e;
      return function (o) {
        let { timeout: s } = o,
          a = Date.now() + s;
        return function (...c) {
          for (;;)
            try {
              return t.apply(void 0, c);
            } catch (m) {
              if (!r(m) || Date.now() >= a) throw m;
              continue;
            }
        };
      };
    }),
      (t7 = rfu));
  });
var Q_r = j(() => {
  bJi();
  AJi();
  _Ji();
  EJi();
});
var bDe,
  G_r,
  vJi = j(() => {
    q_r();
    ((bDe = {
      isChangeErrorOk: (t) => {
        if (!bDe.isNodeError(t)) return !1;
        let { code: e } = t;
        return e === "ENOSYS" || (!CJi && (e === "EINVAL" || e === "EPERM"));
      },
      isNodeError: (t) => t instanceof Error,
      isRetriableError: (t) => {
        if (!bDe.isNodeError(t)) return !1;
        let { code: e } = t;
        return (
          e === "EMFILE" ||
          e === "ENFILE" ||
          e === "EAGAIN" ||
          e === "EBUSY" ||
          e === "EACCESS" ||
          e === "EACCES" ||
          e === "EACCS" ||
          e === "EPERM"
        );
      },
      onChangeError: (t) => {
        if (!bDe.isNodeError(t)) throw t;
        if (!bDe.isChangeErrorOk(t)) throw t;
      },
    }),
      (G_r = bDe));
  });
import SJi from "node:process";
var ADe,
  R9,
  CJi,
  rb,
  q_r = j(() => {
    vJi();
    ((ADe = { onError: G_r.onChangeError }),
      (R9 = { onError: () => {} }),
      (CJi = SJi.getuid ? !SJi.getuid() : !1),
      (rb = { isRetriable: G_r.isRetriableError }));
  });
import hc from "node:fs";
import { promisify as qA } from "node:util";
var nfu,
  N3,
  H_r = j(() => {
    Q_r();
    Q_r();
    q_r();
    ((nfu = {
      attempt: {
        chmod: ZI(qA(hc.chmod), ADe),
        chown: ZI(qA(hc.chown), ADe),
        close: ZI(qA(hc.close), R9),
        fsync: ZI(qA(hc.fsync), R9),
        mkdir: ZI(qA(hc.mkdir), R9),
        realpath: ZI(qA(hc.realpath), R9),
        stat: ZI(qA(hc.stat), R9),
        unlink: ZI(qA(hc.unlink), R9),
        chmodSync: Ew(hc.chmodSync, ADe),
        chownSync: Ew(hc.chownSync, ADe),
        closeSync: Ew(hc.closeSync, R9),
        existsSync: Ew(hc.existsSync, R9),
        fsyncSync: Ew(hc.fsync, R9),
        mkdirSync: Ew(hc.mkdirSync, R9),
        realpathSync: Ew(hc.realpathSync, R9),
        statSync: Ew(hc.statSync, R9),
        unlinkSync: Ew(hc.unlinkSync, R9),
      },
      retry: {
        close: e7(qA(hc.close), rb),
        fsync: e7(qA(hc.fsync), rb),
        open: e7(qA(hc.open), rb),
        readFile: e7(qA(hc.readFile), rb),
        rename: e7(qA(hc.rename), rb),
        stat: e7(qA(hc.stat), rb),
        write: e7(qA(hc.write), rb),
        writeFile: e7(qA(hc.writeFile), rb),
        closeSync: t7(hc.closeSync, rb),
        fsyncSync: t7(hc.fsyncSync, rb),
        openSync: t7(hc.openSync, rb),
        readFileSync: t7(hc.readFileSync, rb),
        renameSync: t7(hc.renameSync, rb),
        statSync: t7(hc.statSync, rb),
        writeSync: t7(hc.writeSync, rb),
        writeFileSync: t7(hc.writeFileSync, rb),
      },
    }),
      (N3 = nfu));
  });
import $J from "node:process";
var wJi,
  V_r,
  xJi,
  TJi,
  DJi,
  IJi,
  RJi,
  kJi,
  oSl,
  W_r,
  z_r = j(() => {
    ((wJi = "utf8"),
      (V_r = 438),
      (xJi = 511),
      (TJi = {}),
      (DJi = $J.geteuid ? $J.geteuid() : -1),
      (IJi = $J.getegid ? $J.getegid() : -1),
      (RJi = 1e3),
      (kJi = !!$J.getuid),
      (oSl = $J.getuid ? !$J.getuid() : !1),
      (W_r = 128));
  });
var OJi,
  Y_r,
  Bbt,
  NJi = j(() => {
    ((OJi = (t) => t instanceof Error && "code" in t),
      (Y_r = (t) => typeof t == "string"),
      (Bbt = (t) => t === void 0));
  });
var PJi = j(() => {});
import BJi from "node:process";
var LJi,
  Lbt,
  K_r = j(() => {
    ((LJi = BJi.platform === "linux"), (Lbt = BJi.platform === "win32"));
  });
var J_r,
  MJi,
  FJi = j(() => {
    K_r();
    J_r = ["SIGHUP", "SIGINT", "SIGTERM"];
    Lbt ||
      J_r.push(
        "SIGALRM",
        "SIGABRT",
        "SIGVTALRM",
        "SIGXCPU",
        "SIGXFSZ",
        "SIGUSR2",
        "SIGTRAP",
        "SIGSYS",
        "SIGQUIT",
        "SIGIOT",
      );
    LJi && J_r.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
    MJi = J_r;
  });
import Sfe from "node:process";
var X_r,
  UJi,
  $Ji = j(() => {
    K_r();
    FJi();
    ((X_r = class {
      constructor() {
        ((this.callbacks = new Set()),
          (this.exited = !1),
          (this.exit = (e) => {
            if (!this.exited) {
              this.exited = !0;
              for (let r of this.callbacks) r();
              e &&
                (Lbt && e !== "SIGINT" && e !== "SIGTERM" && e !== "SIGKILL"
                  ? Sfe.kill(Sfe.pid, "SIGTERM")
                  : Sfe.kill(Sfe.pid, e));
            }
          }),
          (this.hook = () => {
            Sfe.once("exit", () => this.exit());
            for (let e of MJi)
              try {
                Sfe.once(e, () => this.exit(e));
              } catch {}
          }),
          (this.register = (e) => (
            this.callbacks.add(e),
            () => {
              this.callbacks.delete(e);
            }
          )),
          this.hook());
      }
    }),
      (UJi = new X_r()));
  });
var ifu,
  jJi,
  QJi = j(() => {
    $Ji();
    ((ifu = UJi.register), (jJi = ifu));
  });
import ofu from "node:path";
var Py,
  yDe,
  GJi = j(() => {
    H_r();
    QJi();
    z_r();
    Py = {
      store: {},
      create: (t) => {
        let e = `000000${Math.floor(Math.random() * 16777215).toString(16)}`.slice(-6),
          o = `.tmp-${Date.now().toString().slice(-10)}${e}`;
        return `${t}${o}`;
      },
      get: (t, e, r = !0) => {
        let n = Py.truncate(e(t));
        return n in Py.store ? Py.get(t, e, r) : ((Py.store[n] = r), [n, () => delete Py.store[n]]);
      },
      purge: (t) => {
        Py.store[t] && (delete Py.store[t], N3.attempt.unlink(t));
      },
      purgeSync: (t) => {
        Py.store[t] && (delete Py.store[t], N3.attempt.unlinkSync(t));
      },
      purgeSyncAll: () => {
        for (let t in Py.store) Py.purgeSync(t);
      },
      truncate: (t) => {
        let e = ofu.basename(t);
        if (e.length <= W_r) return t;
        let r = /^(\.?)(.*?)((?:\.[^.]+)?(?:\.tmp-\d{10}[a-f0-9]{6})?)$/.exec(e);
        if (!r) return t;
        let n = e.length - W_r;
        return `${t.slice(0, -e.length)}${r[1]}${r[2].slice(0, -n)}${r[3]}`;
      },
    };
    jJi(Py.purgeSyncAll);
    yDe = Py;
  });
import sfu from "node:path";
function Mbt(t, e, r = TJi) {
  if (Y_r(r)) return Mbt(t, e, { encoding: r });
  let o = { timeout: r.timeout ?? RJi },
    s = null,
    a = null,
    u = null;
  try {
    let c = N3.attempt.realpathSync(t),
      m = !!c;
    ((t = c || t), ([a, s] = yDe.get(t, r.tmpCreate || yDe.create, r.tmpPurge !== !1)));
    let d = kJi && Bbt(r.chown),
      f = Bbt(r.mode);
    if (m && (d || f)) {
      let p = N3.attempt.statSync(t);
      p && ((r = { ...r }), d && (r.chown = { uid: p.uid, gid: p.gid }), f && (r.mode = p.mode));
    }
    if (!m) {
      let p = sfu.dirname(t);
      N3.attempt.mkdirSync(p, { mode: xJi, recursive: !0 });
    }
    ((u = N3.retry.openSync(o)(a, "w", r.mode || V_r)),
      r.tmpCreated && r.tmpCreated(a),
      Y_r(e)
        ? N3.retry.writeSync(o)(u, e, 0, r.encoding || wJi)
        : Bbt(e) || N3.retry.writeSync(o)(u, e, 0, e.length, 0),
      r.fsync !== !1 && (r.fsyncWait !== !1 ? N3.retry.fsyncSync(o)(u) : N3.attempt.fsync(u)),
      N3.retry.closeSync(o)(u),
      (u = null),
      r.chown && (r.chown.uid !== DJi || r.chown.gid !== IJi) && N3.attempt.chownSync(a, r.chown.uid, r.chown.gid),
      r.mode && r.mode !== V_r && N3.attempt.chmodSync(a, r.mode));
    try {
      N3.retry.renameSync(o)(a, t);
    } catch (p) {
      if (!OJi(p) || p.code !== "ENAMETOOLONG") throw p;
      N3.retry.renameSync(o)(a, yDe.truncate(t));
    }
    (s(), (a = null));
  } finally {
    (u && N3.attempt.closeSync(u), a && yDe.purge(a));
  }
}
var qJi = j(() => {
  H_r();
  z_r();
  NJi();
  PJi();
  GJi();
});
function Fbt(t) {
  let e = [],
    r = "",
    n = "start",
    o = !1;
  for (let s of t)
    switch (s) {
      case "\\": {
        if (n === "index") throw new Error("Invalid character in an index");
        if (n === "indexEnd") throw new Error("Invalid character after an index");
        (o && (r += s), (n = "property"), (o = !o));
        break;
      }
      case ".": {
        if (n === "index") throw new Error("Invalid character in an index");
        if (n === "indexEnd") {
          n = "property";
          break;
        }
        if (o) {
          ((o = !1), (r += s));
          break;
        }
        if (Z_r.has(r)) return [];
        (e.push(r), (r = ""), (n = "property"));
        break;
      }
      case "[": {
        if (n === "index") throw new Error("Invalid character in an index");
        if (n === "indexEnd") {
          n = "index";
          break;
        }
        if (o) {
          ((o = !1), (r += s));
          break;
        }
        if (n === "property") {
          if (Z_r.has(r)) return [];
          (e.push(r), (r = ""));
        }
        n = "index";
        break;
      }
      case "]": {
        if (n === "index") {
          (e.push(Number.parseInt(r, 10)), (r = ""), (n = "indexEnd"));
          break;
        }
        if (n === "indexEnd") throw new Error("Invalid character after an index");
      }
      default: {
        if (n === "index" && !afu.has(s)) throw new Error("Invalid character in an index");
        if (n === "indexEnd") throw new Error("Invalid character after an index");
        (n === "start" && (n = "property"), o && ((o = !1), (r += "\\")), (r += s));
      }
    }
  switch ((o && (r += "\\"), n)) {
    case "property": {
      if (Z_r.has(r)) return [];
      e.push(r);
      break;
    }
    case "index":
      throw new Error("Index was not closed");
    case "start": {
      e.push("");
      break;
    }
  }
  return e;
}
function eEr(t, e) {
  if (typeof e != "number" && Array.isArray(t)) {
    let r = Number.parseInt(e, 10);
    return Number.isInteger(r) && t[r] === t[e];
  }
  return !1;
}
function HJi(t, e) {
  if (eEr(t, e)) throw new Error("Cannot use string index");
}
function VJi(t, e, r) {
  if (!jJ(t) || typeof e != "string") return r === void 0 ? t : r;
  let n = Fbt(e);
  if (n.length === 0) return r;
  for (let o = 0; o < n.length; o++) {
    let s = n[o];
    if ((eEr(t, s) ? (t = o === n.length - 1 ? void 0 : null) : (t = t[s]), t == null)) {
      if (o !== n.length - 1) return r;
      break;
    }
  }
  return t === void 0 ? r : t;
}
function tEr(t, e, r) {
  if (!jJ(t) || typeof e != "string") return t;
  let n = t,
    o = Fbt(e);
  for (let s = 0; s < o.length; s++) {
    let a = o[s];
    (HJi(t, a),
      s === o.length - 1 ? (t[a] = r) : jJ(t[a]) || (t[a] = typeof o[s + 1] == "number" ? [] : {}),
      (t = t[a]));
  }
  return n;
}
function WJi(t, e) {
  if (!jJ(t) || typeof e != "string") return !1;
  let r = Fbt(e);
  for (let n = 0; n < r.length; n++) {
    let o = r[n];
    if ((HJi(t, o), n === r.length - 1)) return (delete t[o], !0);
    if (((t = t[o]), !jJ(t))) return !1;
  }
}
function zJi(t, e) {
  if (!jJ(t) || typeof e != "string") return !1;
  let r = Fbt(e);
  if (r.length === 0) return !1;
  for (let n of r) {
    if (!jJ(t) || !(n in t) || eEr(t, n)) return !1;
    t = t[n];
  }
  return !0;
}
var jJ,
  Z_r,
  afu,
  YJi = j(() => {
    ((jJ = (t) => {
      let e = typeof t;
      return t !== null && (e === "object" || e === "function");
    }),
      (Z_r = new Set(["__proto__", "prototype", "constructor"])),
      (afu = new Set("0123456789")));
  });
import _De from "node:path";
import ufu from "node:os";
function cfu(t, e) {
  let r = e ? _De.join(t, "config.json") : _De.join("configstore", `${t}.json`),
    n = Cfe ?? EDe.default.mkdtempSync(EDe.default.realpathSync(ufu.tmpdir()) + _De.sep);
  return _De.join(n, r);
}
function JJi(t) {
  throw (
    t.code === "EACCES" &&
      (t.message = `${t.message}
${lfu}
`),
    t
  );
}
var EDe,
  lfu,
  mfu,
  KJi,
  vDe,
  XJi = j(() => {
    EDe = Se(rf(), 1);
    j_r();
    qJi();
    YJi();
    ((lfu = "You don't have access to this file."), (mfu = { mode: 448, recursive: !0 }), (KJi = { mode: 384 }));
    vDe = class {
      constructor(e, r, n = {}) {
        ((this._path = n.configPath ?? cfu(e, n.globalConfigPath)),
          (this._clearInvalidConfig = n.clearInvalidConfig ?? !0),
          r && (this.all = { ...r, ...this.all }));
      }
      get all() {
        try {
          return JSON.parse(EDe.default.readFileSync(this._path, "utf8"));
        } catch (e) {
          if (e.code === "ENOENT") return {};
          if (e.name === "SyntaxError") {
            if (this._clearInvalidConfig) return (Mbt(this._path, "", KJi), {});
            throw e;
          }
          return (JJi(e), {});
        }
      }
      set all(e) {
        try {
          (EDe.default.mkdirSync(_De.dirname(this._path), mfu), Mbt(this._path, JSON.stringify(e, void 0, "	"), KJi));
        } catch (r) {
          JJi(r);
        }
      }
      get size() {
        return Object.keys(this.all || {}).length;
      }
      get(e) {
        return VJi(this.all, e);
      }
      set(e, r) {
        let n = this.all;
        if (typeof e == "object" && arguments.length === 1) for (let o of Object.keys(e)) tEr(n, o, e[o]);
        else tEr(n, e, r);
        this.all = n;
      }
      has(e) {
        return zJi(this.all, e);
      }
      delete(e) {
        let r = this.all;
        (WJi(r, e), (this.all = r));
      }
      clear() {
        this.all = {};
      }
      get path() {
        return this._path;
      }
    };
  });
function pfu() {
  let t = new Map();
  for (let [e, r] of Object.entries(Cd)) {
    for (let [n, o] of Object.entries(r))
      ((Cd[n] = { open: `\x1B[${o[0]}m`, close: `\x1B[${o[1]}m` }), (r[n] = Cd[n]), t.set(o[0], o[1]));
    Object.defineProperty(Cd, e, { value: r, enumerable: !1 });
  }
  return (
    Object.defineProperty(Cd, "codes", { value: t, enumerable: !1 }),
    (Cd.color.close = "\x1B[39m"),
    (Cd.bgColor.close = "\x1B[49m"),
    (Cd.color.ansi = ZJi()),
    (Cd.color.ansi256 = eXi()),
    (Cd.color.ansi16m = tXi()),
    (Cd.bgColor.ansi = ZJi(10)),
    (Cd.bgColor.ansi256 = eXi(10)),
    (Cd.bgColor.ansi16m = tXi(10)),
    Object.defineProperties(Cd, {
      rgbToAnsi256: {
        value(e, r, n) {
          return e === r && r === n
            ? e < 8
              ? 16
              : e > 248
                ? 231
                : Math.round(((e - 8) / 247) * 24) + 232
            : 16 + 36 * Math.round((e / 255) * 5) + 6 * Math.round((r / 255) * 5) + Math.round((n / 255) * 5);
        },
        enumerable: !1,
      },
      hexToRgb: {
        value(e) {
          let r = /[a-f\d]{6}|[a-f\d]{3}/i.exec(e.toString(16));
          if (!r) return [0, 0, 0];
          let [n] = r;
          n.length === 3 && (n = [...n].map((s) => s + s).join(""));
          let o = Number.parseInt(n, 16);
          return [(o >> 16) & 255, (o >> 8) & 255, o & 255];
        },
        enumerable: !1,
      },
      hexToAnsi256: { value: (e) => Cd.rgbToAnsi256(...Cd.hexToRgb(e)), enumerable: !1 },
      ansi256ToAnsi: {
        value(e) {
          if (e < 8) return 30 + e;
          if (e < 16) return 90 + (e - 8);
          let r, n, o;
          if (e >= 232) ((r = ((e - 232) * 10 + 8) / 255), (n = r), (o = r));
          else {
            e -= 16;
            let u = e % 36;
            ((r = Math.floor(e / 36) / 5), (n = Math.floor(u / 6) / 5), (o = (u % 6) / 5));
          }
          let s = Math.max(r, n, o) * 2;
          if (s === 0) return 30;
          let a = 30 + ((Math.round(o) << 2) | (Math.round(n) << 1) | Math.round(r));
          return (s === 2 && (a += 60), a);
        },
        enumerable: !1,
      },
      rgbToAnsi: { value: (e, r, n) => Cd.ansi256ToAnsi(Cd.rgbToAnsi256(e, r, n)), enumerable: !1 },
      hexToAnsi: { value: (e) => Cd.ansi256ToAnsi(Cd.hexToAnsi256(e)), enumerable: !1 },
    }),
    Cd
  );
}
var ZJi,
  eXi,
  tXi,
  Cd,
  GSl,
  dfu,
  ffu,
  qSl,
  hfu,
  vw,
  rXi = j(() => {
    ((ZJi =
      (t = 0) =>
      (e) =>
        `\x1B[${e + t}m`),
      (eXi =
        (t = 0) =>
        (e) =>
          `\x1B[${38 + t};5;${e}m`),
      (tXi =
        (t = 0) =>
        (e, r, n) =>
          `\x1B[${38 + t};2;${e};${r};${n}m`),
      (Cd = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          overline: [53, 55],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29],
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          blackBright: [90, 39],
          gray: [90, 39],
          grey: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39],
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgGray: [100, 49],
          bgGrey: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49],
        },
      }),
      (GSl = Object.keys(Cd.modifier)),
      (dfu = Object.keys(Cd.color)),
      (ffu = Object.keys(Cd.bgColor)),
      (qSl = [...dfu, ...ffu]));
    ((hfu = pfu()), (vw = hfu));
  });
import rEr from "node:process";
import gfu from "node:os";
import nXi from "node:tty";
function Wv(t, e = globalThis.Deno ? globalThis.Deno.args : rEr.argv) {
  let r = t.startsWith("-") ? "" : t.length === 1 ? "-" : "--",
    n = e.indexOf(r + t),
    o = e.indexOf("--");
  return n !== -1 && (o === -1 || n < o);
}
function bfu() {
  if ("FORCE_COLOR" in Sd)
    return Sd.FORCE_COLOR === "true"
      ? 1
      : Sd.FORCE_COLOR === "false"
        ? 0
        : Sd.FORCE_COLOR.length === 0
          ? 1
          : Math.min(Number.parseInt(Sd.FORCE_COLOR, 10), 3);
}
function Afu(t) {
  return t === 0 ? !1 : { level: t, hasBasic: !0, has256: t >= 2, has16m: t >= 3 };
}
function yfu(t, { streamIsTTY: e, sniffFlags: r = !0 } = {}) {
  let n = bfu();
  n !== void 0 && (Ubt = n);
  let o = r ? Ubt : n;
  if (o === 0) return 0;
  if (r) {
    if (Wv("color=16m") || Wv("color=full") || Wv("color=truecolor")) return 3;
    if (Wv("color=256")) return 2;
  }
  if ("TF_BUILD" in Sd && "AGENT_NAME" in Sd) return 1;
  if (t && !e && o === void 0) return 0;
  let s = o || 0;
  if (Sd.TERM === "dumb") return s;
  if (rEr.platform === "win32") {
    let a = gfu.release().split(".");
    return Number(a[0]) >= 10 && Number(a[2]) >= 10586 ? (Number(a[2]) >= 14931 ? 3 : 2) : 1;
  }
  if ("CI" in Sd)
    return ["GITHUB_ACTIONS", "GITEA_ACTIONS", "CIRCLECI"].some((a) => a in Sd)
      ? 3
      : ["TRAVIS", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((a) => a in Sd) || Sd.CI_NAME === "codeship"
        ? 1
        : s;
  if ("TEAMCITY_VERSION" in Sd) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Sd.TEAMCITY_VERSION) ? 1 : 0;
  if (Sd.COLORTERM === "truecolor" || Sd.TERM === "xterm-kitty" || Sd.TERM === "xterm-ghostty" || Sd.TERM === "wezterm")
    return 3;
  if ("TERM_PROGRAM" in Sd) {
    let a = Number.parseInt((Sd.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (Sd.TERM_PROGRAM) {
      case "iTerm.app":
        return a >= 3 ? 3 : 2;
      case "Apple_Terminal":
        return 2;
    }
  }
  return /-256(color)?$/i.test(Sd.TERM)
    ? 2
    : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Sd.TERM) || "COLORTERM" in Sd
      ? 1
      : s;
}
function iXi(t, e = {}) {
  let r = yfu(t, { streamIsTTY: t && t.isTTY, ...e });
  return Afu(r);
}
var Sd,
  Ubt,
  _fu,
  oXi,
  sXi = j(() => {
    ({ env: Sd } = rEr);
    Wv("no-color") || Wv("no-colors") || Wv("color=false") || Wv("color=never")
      ? (Ubt = 0)
      : (Wv("color") || Wv("colors") || Wv("color=true") || Wv("color=always")) && (Ubt = 1);
    ((_fu = { stdout: iXi({ isTTY: nXi.isatty(1) }), stderr: iXi({ isTTY: nXi.isatty(2) }) }), (oXi = _fu));
  });
function aXi(t, e, r) {
  let n = t.indexOf(e);
  if (n === -1) return t;
  let o = e.length,
    s = 0,
    a = "";
  do ((a += t.slice(s, n) + e + r), (s = n + o), (n = t.indexOf(e, s)));
  while (n !== -1);
  return ((a += t.slice(s)), a);
}
function uXi(t, e, r, n) {
  let o = 0,
    s = "";
  do {
    let a = t[n - 1] === "\r";
    ((s +=
      t.slice(o, a ? n - 1 : n) +
      e +
      (a
        ? `\r
`
        : `
`) +
      r),
      (o = n + 1),
      (n = t.indexOf(
        `
`,
        o,
      )));
  } while (n !== -1);
  return ((s += t.slice(o)), s);
}
var cXi = j(() => {});
function SDe(t) {
  return vfu(t);
}
var lXi,
  mXi,
  nEr,
  wfe,
  CDe,
  dXi,
  xfe,
  Efu,
  vfu,
  iEr,
  Cfu,
  Sfu,
  oEr,
  $bt,
  wfu,
  xfu,
  ewl,
  x5,
  sEr = j(() => {
    rXi();
    sXi();
    cXi();
    (({ stdout: lXi, stderr: mXi } = oXi),
      (nEr = Symbol("GENERATOR")),
      (wfe = Symbol("STYLER")),
      (CDe = Symbol("IS_EMPTY")),
      (dXi = ["ansi", "ansi", "ansi256", "ansi16m"]),
      (xfe = Object.create(null)),
      (Efu = (t, e = {}) => {
        if (e.level && !(Number.isInteger(e.level) && e.level >= 0 && e.level <= 3))
          throw new Error("The `level` option should be an integer from 0 to 3");
        let r = lXi ? lXi.level : 0;
        t.level = e.level === void 0 ? r : e.level;
      }),
      (vfu = (t) => {
        let e = (...r) => r.join(" ");
        return (Efu(e, t), Object.setPrototypeOf(e, SDe.prototype), e);
      }));
    Object.setPrototypeOf(SDe.prototype, Function.prototype);
    for (let [t, e] of Object.entries(vw))
      xfe[t] = {
        get() {
          let r = $bt(this, oEr(e.open, e.close, this[wfe]), this[CDe]);
          return (Object.defineProperty(this, t, { value: r }), r);
        },
      };
    xfe.visible = {
      get() {
        let t = $bt(this, this[wfe], !0);
        return (Object.defineProperty(this, "visible", { value: t }), t);
      },
    };
    ((iEr = (t, e, r, ...n) =>
      t === "rgb"
        ? e === "ansi16m"
          ? vw[r].ansi16m(...n)
          : e === "ansi256"
            ? vw[r].ansi256(vw.rgbToAnsi256(...n))
            : vw[r].ansi(vw.rgbToAnsi(...n))
        : t === "hex"
          ? iEr("rgb", e, r, ...vw.hexToRgb(...n))
          : vw[r][t](...n)),
      (Cfu = ["rgb", "hex", "ansi256"]));
    for (let t of Cfu) {
      xfe[t] = {
        get() {
          let { level: r } = this;
          return function (...n) {
            let o = oEr(iEr(t, dXi[r], "color", ...n), vw.color.close, this[wfe]);
            return $bt(this, o, this[CDe]);
          };
        },
      };
      let e = "bg" + t[0].toUpperCase() + t.slice(1);
      xfe[e] = {
        get() {
          let { level: r } = this;
          return function (...n) {
            let o = oEr(iEr(t, dXi[r], "bgColor", ...n), vw.bgColor.close, this[wfe]);
            return $bt(this, o, this[CDe]);
          };
        },
      };
    }
    ((Sfu = Object.defineProperties(() => {}, {
      ...xfe,
      level: {
        enumerable: !0,
        get() {
          return this[nEr].level;
        },
        set(t) {
          this[nEr].level = t;
        },
      },
    })),
      (oEr = (t, e, r) => {
        let n, o;
        return (
          r === void 0 ? ((n = t), (o = e)) : ((n = r.openAll + t), (o = e + r.closeAll)),
          { open: t, close: e, openAll: n, closeAll: o, parent: r }
        );
      }),
      ($bt = (t, e, r) => {
        let n = (...o) => wfu(n, o.length === 1 ? "" + o[0] : o.join(" "));
        return (Object.setPrototypeOf(n, Sfu), (n[nEr] = t), (n[wfe] = e), (n[CDe] = r), n);
      }),
      (wfu = (t, e) => {
        if (t.level <= 0 || !e) return t[CDe] ? "" : e;
        let r = t[wfe];
        if (r === void 0) return e;
        let { openAll: n, closeAll: o } = r;
        if (e.includes("\x1B")) for (; r !== void 0; ) ((e = aXi(e, r.close, r.open)), (r = r.parent));
        let s = e.indexOf(`
`);
        return (s !== -1 && (e = uXi(e, o, n, s)), n + e + o);
      }));
    Object.defineProperties(SDe.prototype, xfe);
    ((xfu = SDe()), (ewl = SDe({ level: mXi ? mXi.level : 0 })), (x5 = xfu));
  });