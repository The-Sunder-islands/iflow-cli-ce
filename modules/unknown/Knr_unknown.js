/**
 * @module Knr
 * @category unknown
 * @label unknown
 * @position 1461 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Knr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Knr = T((cc) => {
  cc.Abstract = mnt();
  cc.Reader = rz();
  cc.Writer = Tce();
  cc.File = { Reader: Cnr(), Writer: Vnr() };
  cc.Dir = { Reader: vnr(), Writer: qnr() };
  cc.Link = { Reader: _nr(), Writer: Hnr() };
  cc.Proxy = { Reader: wnr(), Writer: znr() };
  cc.Reader.Dir = cc.DirReader = cc.Dir.Reader;
  cc.Reader.File = cc.FileReader = cc.File.Reader;
  cc.Reader.Link = cc.LinkReader = cc.Link.Reader;
  cc.Reader.Proxy = cc.ProxyReader = cc.Proxy.Reader;
  cc.Writer.Dir = cc.DirWriter = cc.Dir.Writer;
  cc.Writer.File = cc.FileWriter = cc.File.Writer;
  cc.Writer.Link = cc.LinkWriter = cc.Link.Writer;
  cc.Writer.Proxy = cc.ProxyWriter = cc.Proxy.Writer;
  cc.collect = bnt();
});