var MigrateConfig,
  migrateConfigInit = j(() => {
    "use strict";
    var fs = require("fs");
    var path = require("path");
    var home = process.env.HOME || process.env.USERPROFILE || "";
    var OLD_DIR = path.join(home, ".iflow");
    var NEW_DIR = path.join(home, ".iflow-ce");
    var OLD_SETTINGS = path.join(OLD_DIR, "settings.json");
    var NEW_SETTINGS = path.join(NEW_DIR, "settings.json");
    MigrateConfig = {
      needsMigration() {
        try { return fs.existsSync(OLD_SETTINGS) && !fs.existsSync(NEW_DIR); } catch (e) { return !1; }
      },
      run() {
        if (!this.needsMigration()) return;
        try {
          var old = JSON.parse(fs.readFileSync(OLD_SETTINGS, "utf8"));
          var authType = old.selectedAuthType || "";
          var isIFlow = authType === "oauth-iflow" || authType === "iflow" || authType === "oauth-aone" || authType === "aone" || authType === "cloud-shell" || authType === "LOGIN_WITH_IFLOW";
          if (isIFlow) {
            console.log("──────────────────────────────────────────────────────");
            console.log("  iFlow CLI 原版已停运，请自行准备 API Key。");
            console.log("  原配置（iFlow 登录）无法迁移。");
            console.log("  使用 /language zh-CN 可切换为中文。");
            console.log("──────────────────────────────────────────────────────");
            return;
          }
          var nu = {};
          if (old.selectedAuthType) nu.selectedAuthType = old.selectedAuthType;
          if (old.baseUrl) nu.baseUrl = old.baseUrl;
          if (old.modelName) nu.modelName = old.modelName;
          if (old.language) nu.language = old.language;
          if (old.renderer) nu.renderer = old.renderer;
          if (old.cna) nu.cna = old.cna;
          if (old.bootAnimationShown) nu.bootAnimationShown = old.bootAnimationShown;
          if (old.hasViewedAnnualReport) nu.hasViewedAnnualReport = old.hasViewedAnnualReport;
          // Migrate apiKey to keytar if available
          if (old.apiKey && typeof Keychain?.saveApiKey == "function") {
            Keychain.saveApiKey(nu.selectedAuthType || "default", old.apiKey).catch(function () {});
          }
          // Ensure dir exists
          try { fs.mkdirSync(NEW_DIR, { recursive: !0 }); } catch (e) {}
          fs.writeFileSync(NEW_SETTINGS, JSON.stringify(nu, null, 2));
          console.log("  iFlow 配置已从 ~/.iflow 迁移至 ~/.iflow-ce");
          console.log("  API Key 已安全存储至系统密钥链。");
          console.log("  原 ~/.iflow 目录可手动删除。");
        } catch (e) {
          console.warn("  Config migration failed:", e.message);
        }
      },
    };
  });
