var ConfigModel,
  configModelInit = j(() => {
    "use strict";
    var fs = require("fs");
    var path = require("path");
    var home = process.env.HOME || process.env.USERPROFILE || "";
    var CONFIG_DIR = path.join(home, ".iflow-ce");
    var CONFIG_PATH = path.join(CONFIG_DIR, "settings.json");
    function dir() { return CONFIG_DIR; }
    function filePath() { return CONFIG_PATH; }
    function ensureDir() { try { fs.mkdirSync(CONFIG_DIR, { recursive: !0 }); } catch (e) {} }
    // Legacy field map: old_key → { target, hasDefault, defaultVal, isSecret, migrate }
    var LEGACY_FIELDS = {
      cna:                  { target: "cna" },
      bootAnimationShown:   { target: "bootAnimationShown" },
      selectedAuthType:     { target: "selectedAuthType" },
      modelName:            { target: "modelName" },
      baseUrl:              { target: "baseUrl" },
      apiKey:               { target: "apiKey", isSecret: !0 },
      language:             { target: "language" },
      hasViewedAnnualReport:{ target: "hasViewedAnnualReport" },
      searchApiKey:         { target: "searchApiKey", isSecret: !0 },
    };
    var KNOWN_DEFAULTS = {
      renderer: "lightpanda",
      bootAnimationShown: !1,
      hasViewedAnnualReport: {},
    };
    ConfigModel = {
      dir,
      filePath,
      ensureDir,
      detectLegacy() {
        var oldPath = path.join(home, ".iflow", "settings.json");
        var newPath = CONFIG_PATH;
        if (fs.existsSync(newPath)) return null;
        if (!fs.existsSync(oldPath)) return null;
        try { return JSON.parse(fs.readFileSync(oldPath, "utf8")); } catch { return null; }
      },
      hasLegacy() { return !!this.detectLegacy(); },
      /**
       * @param {object} old - 原版 settings.json 的解析结果
       * @param {boolean} migrateSecrets - 是否迁移 apiKey 到 keytar
       * @returns {object} 迁移后的新配置对象
       */
      translate(old, migrateSecrets) {
        var result = {};
        for (var oldKey in old) {
          var def = LEGACY_FIELDS[oldKey];
          if (!def) continue;
          var val = old[oldKey];
          if (val === void 0 || val === null) continue;
          if (def.isSecret) {
            if (migrateSecrets && val && typeof Keychain?.saveApiKey == "function") {
              var auth = old.selectedAuthType || "default";
              Keychain.saveApiKey(auth, String(val)).catch(function () {});
            }
            continue;
          }
          result[def.target] = val;
        }
        // Apply defaults for new fields
        for (var key in KNOWN_DEFAULTS) {
          if (result[key] === void 0) result[key] = KNOWN_DEFAULTS[key];
        }
        return result;
      },
      save(config) {
        ensureDir();
        var existing = {};
        try { existing = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8")); } catch (e) {}
        var merged = {};
        for (var key in existing) merged[key] = existing[key];
        for (var key in config) merged[key] = config[key];
        fs.writeFileSync(CONFIG_PATH, JSON.stringify(merged, null, 2) + "\n");
      },
      load() {
        try { return JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8")) || {}; } catch { return {}; }
      },
    };
  });
