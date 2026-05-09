var Persistence,
  persistenceInit = j(() => {
    "use strict";
    var fs = require("fs");
    var path = require("path");
    var home = process.env.HOME || process.env.USERPROFILE || "";
    var CONFIG_DIR = path.join(home, ".iflow-ce");
    var CONFIG_PATH = path.join(CONFIG_DIR, "settings.json");
    Persistence = {
      dir() { return CONFIG_DIR; },
      filePath() { return CONFIG_PATH; },
      ensureDir() { try { fs.mkdirSync(CONFIG_DIR, { recursive: !0 }); } catch (e) {} },
      read() {
        try { return JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8")); } catch { return {}; }
      },
      write(e) {
        this.ensureDir();
        var n = {};
        try { n = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8")); } catch (n) {}
        for (var o in e) n[o] = e[o];
        fs.writeFileSync(CONFIG_PATH, JSON.stringify(n, null, 2) + "\n");
      },
      deleteKey(e) {
        var n = this.read();
        delete n[e];
        this.ensureDir();
        fs.writeFileSync(CONFIG_PATH, JSON.stringify(n, null, 2) + "\n");
      },
      hasLegacy() {
        var e = path.join(home, ".iflow", "settings.json");
        return fs.existsSync(e) && !fs.existsSync(CONFIG_PATH);
      },
      readLegacy() {
        var e = path.join(home, ".iflow", "settings.json");
        try { return JSON.parse(fs.readFileSync(e, "utf8")); } catch { return null; }
      },
      keytarSave(e, r) {
        if (typeof Keychain?.saveApiKey != "function") return;
        Keychain.saveApiKey(e, r).catch(function () {});
      },
      keytarGet(e) {
        if (typeof Keychain?.getApiKey != "function") return null;
        try { return Keychain.getApiKey(e); } catch { return null; }
      },
    };
  });
