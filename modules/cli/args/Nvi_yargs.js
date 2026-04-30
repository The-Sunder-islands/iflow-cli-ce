/**
 * @module Nvi
 * @category cli/args
 * @label yargs
 * @position 1806 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Nvi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Nvi = T((pdt) => {
  "use strict";
  Object.defineProperty(pdt, "__esModule", { value: !0 });
  pdt.ruleSet = void 0;
  var Ivi = "required",
    Iv = "fn",
    Rv = "argv",
    Ade = "ref",
    yvi = !0,
    _vi = "isSet",
    Gwe = "booleanEquals",
    gde = "error",
    bde = "endpoint",
    FN = "tree",
    $Ar = "PartitionResult",
    jAr = "getAttr",
    Evi = { [Ivi]: !1, type: "string" },
    vvi = { [Ivi]: !0, default: !1, type: "boolean" },
    Cvi = { [Ade]: "Endpoint" },
    Rvi = { [Iv]: Gwe, [Rv]: [{ [Ade]: "UseFIPS" }, !0] },
    kvi = { [Iv]: Gwe, [Rv]: [{ [Ade]: "UseDualStack" }, !0] },
    Dv = {},
    Svi = { [Iv]: jAr, [Rv]: [{ [Ade]: $Ar }, "supportsFIPS"] },
    Ovi = { [Ade]: $Ar },
    wvi = { [Iv]: Gwe, [Rv]: [!0, { [Iv]: jAr, [Rv]: [Ovi, "supportsDualStack"] }] },
    xvi = [Rvi],
    Tvi = [kvi],
    Dvi = [{ [Ade]: "Region" }],
    OMa = {
      version: "1.0",
      parameters: { Region: Evi, UseDualStack: vvi, UseFIPS: vvi, Endpoint: Evi },
      rules: [
        {
          conditions: [{ [Iv]: _vi, [Rv]: [Cvi] }],
          rules: [
            { conditions: xvi, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: gde },
            {
              conditions: Tvi,
              error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
              type: gde,
            },
            { endpoint: { url: Cvi, properties: Dv, headers: Dv }, type: bde },
          ],
          type: FN,
        },
        {
          conditions: [{ [Iv]: _vi, [Rv]: Dvi }],
          rules: [
            {
              conditions: [{ [Iv]: "aws.partition", [Rv]: Dvi, assign: $Ar }],
              rules: [
                {
                  conditions: [Rvi, kvi],
                  rules: [
                    {
                      conditions: [{ [Iv]: Gwe, [Rv]: [yvi, Svi] }, wvi],
                      rules: [
                        {
                          endpoint: {
                            url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                            properties: Dv,
                            headers: Dv,
                          },
                          type: bde,
                        },
                      ],
                      type: FN,
                    },
                    {
                      error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                      type: gde,
                    },
                  ],
                  type: FN,
                },
                {
                  conditions: xvi,
                  rules: [
                    {
                      conditions: [{ [Iv]: Gwe, [Rv]: [Svi, yvi] }],
                      rules: [
                        {
                          conditions: [
                            { [Iv]: "stringEquals", [Rv]: [{ [Iv]: jAr, [Rv]: [Ovi, "name"] }, "aws-us-gov"] },
                          ],
                          endpoint: { url: "https://portal.sso.{Region}.amazonaws.com", properties: Dv, headers: Dv },
                          type: bde,
                        },
                        {
                          endpoint: {
                            url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}",
                            properties: Dv,
                            headers: Dv,
                          },
                          type: bde,
                        },
                      ],
                      type: FN,
                    },
                    { error: "FIPS is enabled but this partition does not support FIPS", type: gde },
                  ],
                  type: FN,
                },
                {
                  conditions: Tvi,
                  rules: [
                    {
                      conditions: [wvi],
                      rules: [
                        {
                          endpoint: {
                            url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}",
                            properties: Dv,
                            headers: Dv,
                          },
                          type: bde,
                        },
                      ],
                      type: FN,
                    },
                    { error: "DualStack is enabled but this partition does not support DualStack", type: gde },
                  ],
                  type: FN,
                },
                {
                  endpoint: {
                    url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}",
                    properties: Dv,
                    headers: Dv,
                  },
                  type: bde,
                },
              ],
              type: FN,
            },
          ],
          type: FN,
        },
        { error: "Invalid Configuration: Missing Region", type: gde },
      ],
    };
  pdt.ruleSet = OMa;
});