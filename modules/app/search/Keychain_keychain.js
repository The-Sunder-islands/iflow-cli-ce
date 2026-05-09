var Keychain,
  keychainInit = j(() => {
    "use strict";
    var _kt = null;
    var _ktAvailable = !1;
    try {
      _kt = require("keytar");
      _ktAvailable = !0;
    } catch (e) { _ktAvailable = !1; }
    Keychain = {
      get available() { return _ktAvailable; },
      async saveApiKey(e, r) {
        if (_ktAvailable) {
          try { await _kt.setPassword("iflow-cli-ce", e, r); return; } catch (n) {}
        }
        // Fallback: store in persistence (less secure)
        if (typeof ConfigModel?.set == "function") ConfigModel.set("_key_" + e, r);
      },
      async getApiKey(e) {
        if (_ktAvailable) {
          try { var r = await _kt.getPassword("iflow-cli-ce", e); if (r) return r; } catch (n) {}
        }
        // Fallback: read from persistence
        if (typeof ConfigModel?.get == "function") return ConfigModel.get("_key_" + e);
        return null;
      },
      async deleteApiKey(e) {
        if (_ktAvailable) {
          try { await _kt.deletePassword("iflow-cli-ce", e); } catch (n) {}
        }
        if (typeof ConfigModel?.set == "function") ConfigModel.set("_key_" + e, void 0);
      },
    };
  });
