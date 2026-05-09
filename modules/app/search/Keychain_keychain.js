var Keychain,
  keychainInit = j(() => {
    "use strict";
    var _kt = null;
    try { _kt = require("keytar"); } catch (e) { _kt = null; }
    if (!_kt) console.warn("[Keychain] keytar not installed. API keys stored in settings file (less secure). To fix: npm install keytar");
    function kt() { return _kt; }
    Keychain = {
      get available() { return !!_kt; },
      async saveApiKey(e, r) {
        if (!_kt) { console.warn("[Keychain] keytar not available, API key not stored."); return; }
        try { await _kt.setPassword("iflow-cli-ce", e, r); } catch (n) { console.warn("[Keychain] Save failed:", n.message); }
      },
      async getApiKey(e) {
        if (!_kt) return null;
        try { return await _kt.getPassword("iflow-cli-ce", e); } catch (n) { return null; }
      },
      async deleteApiKey(e) {
        if (!_kt) return;
        try { await _kt.deletePassword("iflow-cli-ce", e); } catch (n) {}
      },
    };
  });
