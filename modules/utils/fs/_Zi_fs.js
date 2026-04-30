/**
 * @module _Zi
 * @category utils/fs
 * @label fs
 * @position 1916 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_Zi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _Zi = T((Zwl, yZi) => {
  var Vj = Ae("constants"),
    Wfu = process.cwd,
    Wbt = null,
    zfu = process.env.GRACEFUL_FS_PLATFORM || process.platform;
  process.cwd = function () {
    return (Wbt || (Wbt = Wfu.call(process)), Wbt);
  };
  try {
    process.cwd();
  } catch {}
  typeof process.chdir == "function" &&
    ((CEr = process.chdir),
    (process.chdir = function (t) {
      ((Wbt = null), CEr.call(process, t));
    }),
    Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, CEr));
  var CEr;
  yZi.exports = Yfu;
  function Yfu(t) {
    (Vj.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && e(t),
      t.lutimes || r(t),
      (t.chown = s(t.chown)),
      (t.fchown = s(t.fchown)),
      (t.lchown = s(t.lchown)),
      (t.chmod = n(t.chmod)),
      (t.fchmod = n(t.fchmod)),
      (t.lchmod = n(t.lchmod)),
      (t.chownSync = a(t.chownSync)),
      (t.fchownSync = a(t.fchownSync)),
      (t.lchownSync = a(t.lchownSync)),
      (t.chmodSync = o(t.chmodSync)),
      (t.fchmodSync = o(t.fchmodSync)),
      (t.lchmodSync = o(t.lchmodSync)),
      (t.stat = u(t.stat)),
      (t.fstat = u(t.fstat)),
      (t.lstat = u(t.lstat)),
      (t.statSync = c(t.statSync)),
      (t.fstatSync = c(t.fstatSync)),
      (t.lstatSync = c(t.lstatSync)),
      t.chmod &&
        !t.lchmod &&
        ((t.lchmod = function (d, f, p) {
          p && process.nextTick(p);
        }),
        (t.lchmodSync = function () {})),
      t.chown &&
        !t.lchown &&
        ((t.lchown = function (d, f, p, h) {
          h && process.nextTick(h);
        }),
        (t.lchownSync = function () {})),
      zfu === "win32" &&
        (t.rename =
          typeof t.rename != "function"
            ? t.rename
            : (function (d) {
                function f(p, h, g) {
                  var b = Date.now(),
                    A = 0;
                  d(p, h, function y(E) {
                    if (E && (E.code === "EACCES" || E.code === "EPERM") && Date.now() - b < 6e4) {
                      (setTimeout(function () {
                        t.stat(h, function (v, C) {
                          v && v.code === "ENOENT" ? d(p, h, y) : g(E);
                        });
                      }, A),
                        A < 100 && (A += 10));
                      return;
                    }
                    g && g(E);
                  });
                }
                return (Object.setPrototypeOf && Object.setPrototypeOf(f, d), f);
              })(t.rename)),
      (t.read =
        typeof t.read != "function"
          ? t.read
          : (function (d) {
              function f(p, h, g, b, A, y) {
                var E;
                if (y && typeof y == "function") {
                  var v = 0;
                  E = function (C, x, k) {
                    if (C && C.code === "EAGAIN" && v < 10) return (v++, d.call(t, p, h, g, b, A, E));
                    y.apply(this, arguments);
                  };
                }
                return d.call(t, p, h, g, b, A, E);
              }
              return (Object.setPrototypeOf && Object.setPrototypeOf(f, d), f);
            })(t.read)),
      (t.readSync =
        typeof t.readSync != "function"
          ? t.readSync
          : (function (d) {
              return function (f, p, h, g, b) {
                for (var A = 0; ; )
                  try {
                    return d.call(t, f, p, h, g, b);
                  } catch (y) {
                    if (y.code === "EAGAIN" && A < 10) {
                      A++;
                      continue;
                    }
                    throw y;
                  }
              };
            })(t.readSync)));
    function e(d) {
      ((d.lchmod = function (f, p, h) {
        d.open(f, Vj.O_WRONLY | Vj.O_SYMLINK, p, function (g, b) {
          if (g) {
            h && h(g);
            return;
          }
          d.fchmod(b, p, function (A) {
            d.close(b, function (y) {
              h && h(A || y);
            });
          });
        });
      }),
        (d.lchmodSync = function (f, p) {
          var h = d.openSync(f, Vj.O_WRONLY | Vj.O_SYMLINK, p),
            g = !0,
            b;
          try {
            ((b = d.fchmodSync(h, p)), (g = !1));
          } finally {
            if (g)
              try {
                d.closeSync(h);
              } catch {}
            else d.closeSync(h);
          }
          return b;
        }));
    }
    function r(d) {
      Vj.hasOwnProperty("O_SYMLINK") && d.futimes
        ? ((d.lutimes = function (f, p, h, g) {
            d.open(f, Vj.O_SYMLINK, function (b, A) {
              if (b) {
                g && g(b);
                return;
              }
              d.futimes(A, p, h, function (y) {
                d.close(A, function (E) {
                  g && g(y || E);
                });
              });
            });
          }),
          (d.lutimesSync = function (f, p, h) {
            var g = d.openSync(f, Vj.O_SYMLINK),
              b,
              A = !0;
            try {
              ((b = d.futimesSync(g, p, h)), (A = !1));
            } finally {
              if (A)
                try {
                  d.closeSync(g);
                } catch {}
              else d.closeSync(g);
            }
            return b;
          }))
        : d.futimes &&
          ((d.lutimes = function (f, p, h, g) {
            g && process.nextTick(g);
          }),
          (d.lutimesSync = function () {}));
    }
    function n(d) {
      return (
        d &&
        function (f, p, h) {
          return d.call(t, f, p, function (g) {
            (m(g) && (g = null), h && h.apply(this, arguments));
          });
        }
      );
    }
    function o(d) {
      return (
        d &&
        function (f, p) {
          try {
            return d.call(t, f, p);
          } catch (h) {
            if (!m(h)) throw h;
          }
        }
      );
    }
    function s(d) {
      return (
        d &&
        function (f, p, h, g) {
          return d.call(t, f, p, h, function (b) {
            (m(b) && (b = null), g && g.apply(this, arguments));
          });
        }
      );
    }
    function a(d) {
      return (
        d &&
        function (f, p, h) {
          try {
            return d.call(t, f, p, h);
          } catch (g) {
            if (!m(g)) throw g;
          }
        }
      );
    }
    function u(d) {
      return (
        d &&
        function (f, p, h) {
          typeof p == "function" && ((h = p), (p = null));
          function g(b, A) {
            (A && (A.uid < 0 && (A.uid += 4294967296), A.gid < 0 && (A.gid += 4294967296)),
              h && h.apply(this, arguments));
          }
          return p ? d.call(t, f, p, g) : d.call(t, f, g);
        }
      );
    }
    function c(d) {
      return (
        d &&
        function (f, p) {
          var h = p ? d.call(t, f, p) : d.call(t, f);
          return (h && (h.uid < 0 && (h.uid += 4294967296), h.gid < 0 && (h.gid += 4294967296)), h);
        }
      );
    }
    function m(d) {
      if (!d || d.code === "ENOSYS") return !0;
      var f = !process.getuid || process.getuid() !== 0;
      return !!(f && (d.code === "EINVAL" || d.code === "EPERM"));
    }
  }
});