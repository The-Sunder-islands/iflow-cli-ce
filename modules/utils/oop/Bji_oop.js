/**
 * @module Bji
 * @category utils/oop
 * @label oop
 * @position 1879 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Bji) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Bji = T((tul, Pji) => {
  var Fsu = r6r(),
    Usu = n6r(),
    $su = pji(),
    R3t = Dji(),
    jsu = Ae("node:module"),
    Qsu = ["dependencies", "devDependencies", "optionalDependencies"],
    Gsu = Rji(),
    p6r = Ae("url"),
    Ej = kji(),
    Oji = (t) => t.includes("@") && t.indexOf("@") < t.lastIndexOf(".");
  Pji.exports = {
    warn: function () {},
    fixRepositoryField: function (t) {
      if ((t.repositories && (this.warn("repositories"), (t.repository = t.repositories[0])), !t.repository))
        return this.warn("missingRepository");
      typeof t.repository == "string" && (t.repository = { type: "git", url: t.repository });
      var e = t.repository.url || "";
      if (e) {
        var r = R3t.fromUrl(e);
        r && (e = t.repository.url = r.getDefaultRepresentation() === "shortcut" ? r.https() : r.toString());
      }
      e.match(/github.com\/[^/]+\/[^/]+\.git\.git$/) && this.warn("brokenGitUrl", e);
    },
    fixTypos: function (t) {
      Object.keys(Ej.topLevel).forEach(function (e) {
        Object.prototype.hasOwnProperty.call(t, e) && this.warn("typo", e, Ej.topLevel[e]);
      }, this);
    },
    fixScriptsField: function (t) {
      if (t.scripts) {
        if (typeof t.scripts != "object") {
          (this.warn("nonObjectScripts"), delete t.scripts);
          return;
        }
        Object.keys(t.scripts).forEach(function (e) {
          typeof t.scripts[e] != "string"
            ? (this.warn("nonStringScript"), delete t.scripts[e])
            : Ej.script[e] && !t.scripts[Ej.script[e]] && this.warn("typo", e, Ej.script[e], "scripts");
        }, this);
      }
    },
    fixFilesField: function (t) {
      var e = t.files;
      e && !Array.isArray(e)
        ? (this.warn("nonArrayFiles"), delete t.files)
        : t.files &&
          (t.files = t.files.filter(function (r) {
            return !r || typeof r != "string" ? (this.warn("invalidFilename", r), !1) : !0;
          }, this));
    },
    fixBinField: function (t) {
      if (t.bin && typeof t.bin == "string") {
        var e = {},
          r;
        ((r = t.name.match(/^@[^/]+[/](.*)$/)) ? (e[r[1]] = t.bin) : (e[t.name] = t.bin), (t.bin = e));
      }
    },
    fixManField: function (t) {
      t.man && typeof t.man == "string" && (t.man = [t.man]);
    },
    fixBundleDependenciesField: function (t) {
      var e = "bundledDependencies",
        r = "bundleDependencies";
      (t[e] && !t[r] && ((t[r] = t[e]), delete t[e]),
        t[r] && !Array.isArray(t[r])
          ? (this.warn("nonArrayBundleDependencies"), delete t[r])
          : t[r] &&
            (t[r] = t[r].filter(function (n) {
              return !n || typeof n != "string"
                ? (this.warn("nonStringBundleDependency", n), !1)
                : (t.dependencies || (t.dependencies = {}),
                  Object.prototype.hasOwnProperty.call(t.dependencies, n) ||
                    (this.warn("nonDependencyBundleDependency", n), (t.dependencies[n] = "*")),
                  !0);
            }, this)));
    },
    fixDependencies: function (t) {
      (Jsu(t, this.warn),
        Ysu(t, this.warn),
        this.fixBundleDependenciesField(t),
        ["dependencies", "devDependencies"].forEach(function (e) {
          if (e in t) {
            if (!t[e] || typeof t[e] != "object") {
              (this.warn("nonObjectDependencies", e), delete t[e]);
              return;
            }
            Object.keys(t[e]).forEach(function (r) {
              var n = t[e][r];
              typeof n != "string" && (this.warn("nonStringDependency", r, JSON.stringify(n)), delete t[e][r]);
              var o = R3t.fromUrl(t[e][r]);
              o && (t[e][r] = o.toString());
            }, this);
          }
        }, this));
    },
    fixModulesField: function (t) {
      t.modules && (this.warn("deprecatedModules"), delete t.modules);
    },
    fixKeywordsField: function (t) {
      (typeof t.keywords == "string" && (t.keywords = t.keywords.split(/,\s+/)),
        t.keywords && !Array.isArray(t.keywords)
          ? (delete t.keywords, this.warn("nonArrayKeywords"))
          : t.keywords &&
            (t.keywords = t.keywords.filter(function (e) {
              return typeof e != "string" || !e ? (this.warn("nonStringKeyword"), !1) : !0;
            }, this)));
    },
    fixVersionField: function (t, e) {
      var r = !e;
      if (!t.version) return ((t.version = ""), !0);
      if (!Fsu(t.version, r)) throw new Error('Invalid version: "' + t.version + '"');
      return ((t.version = Usu(t.version, r)), !0);
    },
    fixPeople: function (t) {
      (Nji(t, Wsu), Nji(t, zsu));
    },
    fixNameField: function (t, e) {
      typeof e == "boolean" ? (e = { strict: e }) : typeof e > "u" && (e = {});
      var r = e.strict;
      if (!t.name && !r) {
        t.name = "";
        return;
      }
      if (typeof t.name != "string") throw new Error("name field must be a string.");
      (r || (t.name = t.name.trim()),
        Vsu(t.name, r, e.allowLegacyCase),
        jsu.builtinModules.includes(t.name) && this.warn("conflictingName", t.name));
    },
    fixDescriptionField: function (t) {
      (t.description && typeof t.description != "string" && (this.warn("nonStringDescription"), delete t.description),
        t.readme && !t.description && (t.description = Gsu(t.readme)),
        t.description === void 0 && delete t.description,
        t.description || this.warn("missingDescription"));
    },
    fixReadmeField: function (t) {
      t.readme || (this.warn("missingReadme"), (t.readme = "ERROR: No README data found!"));
    },
    fixBugsField: function (t) {
      if (!t.bugs && t.repository && t.repository.url) {
        var e = R3t.fromUrl(t.repository.url);
        e && e.bugs() && (t.bugs = { url: e.bugs() });
      } else if (t.bugs) {
        if (typeof t.bugs == "string")
          Oji(t.bugs)
            ? (t.bugs = { email: t.bugs })
            : p6r.parse(t.bugs).protocol
              ? (t.bugs = { url: t.bugs })
              : this.warn("nonEmailUrlBugsString");
        else {
          Xsu(t.bugs, this.warn);
          var r = t.bugs;
          ((t.bugs = {}),
            r.url &&
              (typeof r.url == "string" && p6r.parse(r.url).protocol
                ? (t.bugs.url = r.url)
                : this.warn("nonUrlBugsUrlField")),
            r.email &&
              (typeof r.email == "string" && Oji(r.email)
                ? (t.bugs.email = r.email)
                : this.warn("nonEmailBugsEmailField")));
        }
        !t.bugs.email && !t.bugs.url && (delete t.bugs, this.warn("emptyNormalizedBugs"));
      }
    },
    fixHomepageField: function (t) {
      if (!t.homepage && t.repository && t.repository.url) {
        var e = R3t.fromUrl(t.repository.url);
        e && e.docs() && (t.homepage = e.docs());
      }
      if (t.homepage) {
        if (typeof t.homepage != "string") return (this.warn("nonUrlHomepage"), delete t.homepage);
        p6r.parse(t.homepage).protocol || (t.homepage = "http://" + t.homepage);
      }
    },
    fixLicenseField: function (t) {
      let e = t.license || t.licence;
      if (!e) return this.warn("missingLicense");
      if (typeof e != "string" || e.length < 1 || e.trim() === "") return this.warn("invalidLicense");
      if (!$su(e).validForNewPackages) return this.warn("invalidLicense");
    },
  };
  function qsu(t) {
    if (t.charAt(0) !== "@") return !1;
    var e = t.slice(1).split("/");
    return e.length !== 2 ? !1 : e[0] && e[1] && e[0] === encodeURIComponent(e[0]) && e[1] === encodeURIComponent(e[1]);
  }
  function Hsu(t) {
    return !t.match(/[/@\s+%:]/) && t === encodeURIComponent(t);
  }
  function Vsu(t, e, r) {
    if (
      t.charAt(0) === "." ||
      !(qsu(t) || Hsu(t)) ||
      (e && !r && t !== t.toLowerCase()) ||
      t.toLowerCase() === "node_modules" ||
      t.toLowerCase() === "favicon.ico"
    )
      throw new Error("Invalid name: " + JSON.stringify(t));
  }
  function Nji(t, e) {
    return (
      t.author && (t.author = e(t.author)),
      ["maintainers", "contributors"].forEach(function (r) {
        Array.isArray(t[r]) && (t[r] = t[r].map(e));
      }),
      t
    );
  }
  function Wsu(t) {
    if (typeof t == "string") return t;
    var e = t.name || "",
      r = t.url || t.web,
      n = r ? " (" + r + ")" : "",
      o = t.email || t.mail,
      s = o ? " <" + o + ">" : "";
    return e + s + n;
  }
  function zsu(t) {
    if (typeof t != "string") return t;
    var e = t.match(/^([^(<]+)/),
      r = t.match(/\(([^()]+)\)/),
      n = t.match(/<([^<>]+)>/),
      o = {};
    return (e && e[0].trim() && (o.name = e[0].trim()), n && (o.email = n[1]), r && (o.url = r[1]), o);
  }
  function Ysu(t) {
    var e = t.optionalDependencies;
    if (e) {
      var r = t.dependencies || {};
      (Object.keys(e).forEach(function (n) {
        r[n] = e[n];
      }),
        (t.dependencies = r));
    }
  }
  function Ksu(t, e, r) {
    if (!t) return {};
    if ((typeof t == "string" && (t = t.trim().split(/[\n\r\s\t ,]+/)), !Array.isArray(t))) return t;
    r("deprecatedArrayDependencies", e);
    var n = {};
    return (
      t
        .filter(function (o) {
          return typeof o == "string";
        })
        .forEach(function (o) {
          o = o.trim().split(/(:?[@\s><=])/);
          var s = o.shift(),
            a = o.join("");
          ((a = a.trim()), (a = a.replace(/^@/, "")), (n[s] = a));
        }),
      n
    );
  }
  function Jsu(t, e) {
    Qsu.forEach(function (r) {
      t[r] && (t[r] = Ksu(t[r], r, e));
    });
  }
  function Xsu(t, e) {
    t &&
      Object.keys(t).forEach(function (r) {
        Ej.bugs[r] && (e("typo", r, Ej.bugs[r], "bugs"), (t[Ej.bugs[r]] = t[r]), delete t[r]);
      });
  }
});