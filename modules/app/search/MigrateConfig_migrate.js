var MigrateConfig,
  migrateConfigInit = j(() => {
    "use strict";
    var fs = require("fs");
    var path = require("path");
    var home = process.env.HOME || process.env.USERPROFILE || "";
    var OLD_DIR = path.join(home, ".iflow");
    var OLD_SETTINGS = path.join(OLD_DIR, "settings.json");
    var NEW_FILE = Persistence ? Persistence.filePath() : path.join(home, ".iflow-ce", "settings.json");
    MigrateConfig = {
      status: null,
      needsMigration() {
        try { return fs.existsSync(OLD_SETTINGS) && !fs.existsSync(NEW_FILE); } catch (e) { return !1; }
      },
      run() {
        if (this.status) return this.status;
        if (!this.needsMigration()) { this.status = null; return null; }
        try {
          var old = JSON.parse(fs.readFileSync(OLD_SETTINGS, "utf8"));
          var authType = (old.selectedAuthType || "").toLowerCase();
          var isIFlow = authType.includes("iflow") || authType.includes("aone") || authType === "cloud-shell";
          if (isIFlow) {
            this.status = "iflow";
            console.log("");
            console.log("  Detected original iFlow CLI configuration (iFlow login).");
            console.log("  iFlow platform has been shut down, please bring your own API key.");
            console.log("");
            return "iflow";
          }
          if (typeof ConfigModel?.migrate == "function") {
            ConfigModel.migrate(old);
            this.status = "done";
            console.log("");
            console.log("  Configuration migrated from ~/.iflow to ~/.iflow-ce");
            console.log("  API keys securely stored in system keychain.");
            console.log("  You can safely delete ~/.iflow.");
            console.log("");
            return "done";
          }
          this.status = "error";
          return "error";
        } catch (e) {
          this.status = "error";
          console.warn("  Config migration failed:", e.message);
          return "error";
        }
      },
    };
  });
