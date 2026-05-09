var MigrateConfig,
  migrateConfigInit = j(() => {
    "use strict";
    var fs = require("fs");
    var path = require("path");
    var home = process.env.HOME || process.env.USERPROFILE || "";
    var OLD_DIR = path.join(home, ".iflow");
    var OLD_SETTINGS = path.join(OLD_DIR, "settings.json");
    MigrateConfig = {
      status: null, // null=no action, "done"=migrated, "iflow"=old iflow login, "error"=failed
      needsMigration() {
        try { return fs.existsSync(OLD_SETTINGS) && !fs.existsSync(ConfigModel.filePath()); } catch (e) { return !1; }
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
            console.log("  iFlow CLI 原版已停运。请自行准备 API Key 以继续使用。");
            console.log("  Use /language zh-CN for Chinese interface.");
            console.log("");
            return "iflow";
          }
          var nu = ConfigModel.translate(old, !0);
          ConfigModel.save(nu);
          this.status = "done";
          console.log("");
          console.log("  Configuration migrated from ~/.iflow to ~/.iflow-ce");
          console.log("  API keys securely stored in system keychain.");
          console.log("");
          return "done";
        } catch (e) {
          this.status = "error";
          console.warn("  Config migration failed:", e.message);
          return "error";
        }
      },
    };
  });
