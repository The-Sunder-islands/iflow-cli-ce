var Keychain,
  keychainInit = j(() => {
    "use strict";
    var _kt = null;
    try { _kt = require("keytar"); } catch (e) { _kt = null; }
    var _isTermux = typeof process !== "undefined" && process.env?.HOME?.includes("com.termux");
    function kt() { return _kt; }
    Keychain = {
      get available() { return !!_kt || _isTermux; },
      async saveApiKey(e, r) {
        if (_kt) { try { await _kt.setPassword("iflow-cli-ce", e, r); return; } catch (n) {} }
        if (_isTermux && typeof ConfigModel?.set == "function") { ConfigModel.set("_key_" + e, r); return; }
      },
      async getApiKey(e) {
        if (_kt) { try { var r = await _kt.getPassword("iflow-cli-ce", e); if (r) return r; } catch (n) {} }
        if (_isTermux && typeof ConfigModel?.get == "function") { return ConfigModel.get("_key_" + e); }
        return null;
      },
      async deleteApiKey(e) {
        if (_kt) { try { await _kt.deletePassword("iflow-cli-ce", e); } catch (n) {} }
        if (_isTermux && typeof ConfigModel?.set == "function") { ConfigModel.set("_key_" + e, void 0); }
      },
    };
  });
