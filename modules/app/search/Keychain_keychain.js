var Keychain,
  keychainInit = j(() => {
    "use strict";
    const SERVICE = "iflow-cli-ce";
    var _kt = null;
    async function kt() {
      if (!_kt) _kt = require("keytar");
      return _kt;
    }
    Keychain = {
      async saveApiKey(e, r) {
        try { let n = await kt(); await n.setPassword(SERVICE, e, r); } catch (n) { console.warn("[Keychain] Save failed:", n.message); }
      },
      async getApiKey(e) {
        try { let n = await kt(); return await n.getPassword(SERVICE, e); } catch (n) { console.warn("[Keychain] Get failed:", n.message); return null; }
      },
      async deleteApiKey(e) {
        try { let n = await kt(); await n.deletePassword(SERVICE, e); } catch (n) { console.warn("[Keychain] Delete failed:", n.message); }
      },
    };
  });
