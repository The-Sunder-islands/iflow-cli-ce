/**
 * @module BUn
 * @category utils/fs
 * @label fs
 * @position 1373 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (BUn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var BUn = T((i9c, PUn) => {
  var Ptr = Ae("fs"),
    OUn = sLn(),
    kUn = uLn(),
    Otr = Ae("path"),
    cD = tEe(),
    bzs = Ae("util").inherits,
    h1 = RUn(),
    NUn = Dg().Transform,
    Ntr = process.platform === "win32",
    Sc = function (t, e) {
      if (!(this instanceof Sc)) return new Sc(t, e);
      (typeof t != "string" && ((e = t), (t = "zip")),
        (e = this.options = cD.defaults(e, { highWaterMark: 1024 * 1024, statConcurrency: 4 })),
        NUn.call(this, e),
        (this._format = !1),
        (this._module = !1),
        (this._pending = 0),
        (this._pointer = 0),
        (this._entriesCount = 0),
        (this._entriesProcessedCount = 0),
        (this._fsEntriesTotalBytes = 0),
        (this._fsEntriesProcessedBytes = 0),
        (this._queue = kUn.queue(this._onQueueTask.bind(this), 1)),
        this._queue.drain(this._onQueueDrain.bind(this)),
        (this._statQueue = kUn.queue(this._onStatQueueTask.bind(this), e.statConcurrency)),
        this._statQueue.drain(this._onQueueDrain.bind(this)),
        (this._state = { aborted: !1, finalize: !1, finalizing: !1, finalized: !1, modulePiped: !1 }),
        (this._streams = []));
    };
  bzs(Sc, NUn);
  Sc.prototype._abort = function () {
    ((this._state.aborted = !0), this._queue.kill(), this._statQueue.kill(), this._queue.idle() && this._shutdown());
  };
  Sc.prototype._append = function (t, e) {
    e = e || {};
    var r = { source: null, filepath: t };
    (e.name || (e.name = t),
      (e.sourcePath = t),
      (r.data = e),
      this._entriesCount++,
      e.stats && e.stats instanceof Ptr.Stats
        ? ((r = this._updateQueueTaskWithStats(r, e.stats)),
          r && (e.stats.size && (this._fsEntriesTotalBytes += e.stats.size), this._queue.push(r)))
        : this._statQueue.push(r));
  };
  Sc.prototype._finalize = function () {
    this._state.finalizing ||
      this._state.finalized ||
      this._state.aborted ||
      ((this._state.finalizing = !0),
      this._moduleFinalize(),
      (this._state.finalizing = !1),
      (this._state.finalized = !0));
  };
  Sc.prototype._maybeFinalize = function () {
    return this._state.finalizing || this._state.finalized || this._state.aborted
      ? !1
      : this._state.finalize && this._pending === 0 && this._queue.idle() && this._statQueue.idle()
        ? (this._finalize(), !0)
        : !1;
  };
  Sc.prototype._moduleAppend = function (t, e, r) {
    if (this._state.aborted) {
      r();
      return;
    }
    this._module.append(
      t,
      e,
      function (n) {
        if (((this._task = null), this._state.aborted)) {
          this._shutdown();
          return;
        }
        if (n) {
          (this.emit("error", n), setImmediate(r));
          return;
        }
        (this.emit("entry", e),
          this._entriesProcessedCount++,
          e.stats && e.stats.size && (this._fsEntriesProcessedBytes += e.stats.size),
          this.emit("progress", {
            entries: { total: this._entriesCount, processed: this._entriesProcessedCount },
            fs: { totalBytes: this._fsEntriesTotalBytes, processedBytes: this._fsEntriesProcessedBytes },
          }),
          setImmediate(r));
      }.bind(this),
    );
  };
  Sc.prototype._moduleFinalize = function () {
    typeof this._module.finalize == "function"
      ? this._module.finalize()
      : typeof this._module.end == "function"
        ? this._module.end()
        : this.emit("error", new h1("NOENDMETHOD"));
  };
  Sc.prototype._modulePipe = function () {
    (this._module.on("error", this._onModuleError.bind(this)), this._module.pipe(this), (this._state.modulePiped = !0));
  };
  Sc.prototype._moduleSupports = function (t) {
    return !this._module.supports || !this._module.supports[t] ? !1 : this._module.supports[t];
  };
  Sc.prototype._moduleUnpipe = function () {
    (this._module.unpipe(this), (this._state.modulePiped = !1));
  };
  Sc.prototype._normalizeEntryData = function (t, e) {
    ((t = cD.defaults(t, {
      type: "file",
      name: null,
      date: null,
      mode: null,
      prefix: null,
      sourcePath: null,
      stats: !1,
    })),
      e && t.stats === !1 && (t.stats = e));
    var r = t.type === "directory";
    return (
      t.name &&
        (typeof t.prefix == "string" && t.prefix !== "" && ((t.name = t.prefix + "/" + t.name), (t.prefix = null)),
        (t.name = cD.sanitizePath(t.name)),
        t.type !== "symlink" && t.name.slice(-1) === "/" ? ((r = !0), (t.type = "directory")) : r && (t.name += "/")),
      typeof t.mode == "number"
        ? Ntr
          ? (t.mode &= 511)
          : (t.mode &= 4095)
        : t.stats && t.mode === null
          ? (Ntr ? (t.mode = t.stats.mode & 511) : (t.mode = t.stats.mode & 4095), Ntr && r && (t.mode = 493))
          : t.mode === null && (t.mode = r ? 493 : 420),
      t.stats && t.date === null ? (t.date = t.stats.mtime) : (t.date = cD.dateify(t.date)),
      t
    );
  };
  Sc.prototype._onModuleError = function (t) {
    this.emit("error", t);
  };
  Sc.prototype._onQueueDrain = function () {
    this._state.finalizing ||
      this._state.finalized ||
      this._state.aborted ||
      (this._state.finalize && this._pending === 0 && this._queue.idle() && this._statQueue.idle() && this._finalize());
  };
  Sc.prototype._onQueueTask = function (t, e) {
    var r = () => {
      (t.data.callback && t.data.callback(), e());
    };
    if (this._state.finalizing || this._state.finalized || this._state.aborted) {
      r();
      return;
    }
    ((this._task = t), this._moduleAppend(t.source, t.data, r));
  };
  Sc.prototype._onStatQueueTask = function (t, e) {
    if (this._state.finalizing || this._state.finalized || this._state.aborted) {
      e();
      return;
    }
    Ptr.lstat(
      t.filepath,
      function (r, n) {
        if (this._state.aborted) {
          setImmediate(e);
          return;
        }
        if (r) {
          (this._entriesCount--, this.emit("warning", r), setImmediate(e));
          return;
        }
        ((t = this._updateQueueTaskWithStats(t, n)),
          t && (n.size && (this._fsEntriesTotalBytes += n.size), this._queue.push(t)),
          setImmediate(e));
      }.bind(this),
    );
  };
  Sc.prototype._shutdown = function () {
    (this._moduleUnpipe(), this.end());
  };
  Sc.prototype._transform = function (t, e, r) {
    (t && (this._pointer += t.length), r(null, t));
  };
  Sc.prototype._updateQueueTaskWithStats = function (t, e) {
    if (e.isFile())
      ((t.data.type = "file"), (t.data.sourceType = "stream"), (t.source = cD.lazyReadStream(t.filepath)));
    else if (e.isDirectory() && this._moduleSupports("directory"))
      ((t.data.name = cD.trailingSlashIt(t.data.name)),
        (t.data.type = "directory"),
        (t.data.sourcePath = cD.trailingSlashIt(t.filepath)),
        (t.data.sourceType = "buffer"),
        (t.source = Buffer.concat([])));
    else if (e.isSymbolicLink() && this._moduleSupports("symlink")) {
      var r = Ptr.readlinkSync(t.filepath),
        n = Otr.dirname(t.filepath);
      ((t.data.type = "symlink"),
        (t.data.linkname = Otr.relative(n, Otr.resolve(n, r))),
        (t.data.sourceType = "buffer"),
        (t.source = Buffer.concat([])));
    } else
      return (
        e.isDirectory()
          ? this.emit("warning", new h1("DIRECTORYNOTSUPPORTED", t.data))
          : e.isSymbolicLink()
            ? this.emit("warning", new h1("SYMLINKNOTSUPPORTED", t.data))
            : this.emit("warning", new h1("ENTRYNOTSUPPORTED", t.data)),
        null
      );
    return ((t.data = this._normalizeEntryData(t.data, e)), t);
  };
  Sc.prototype.abort = function () {
    return this._state.aborted || this._state.finalized ? this : (this._abort(), this);
  };
  Sc.prototype.append = function (t, e) {
    if (this._state.finalize || this._state.aborted) return (this.emit("error", new h1("QUEUECLOSED")), this);
    if (((e = this._normalizeEntryData(e)), typeof e.name != "string" || e.name.length === 0))
      return (this.emit("error", new h1("ENTRYNAMEREQUIRED")), this);
    if (e.type === "directory" && !this._moduleSupports("directory"))
      return (this.emit("error", new h1("DIRECTORYNOTSUPPORTED", { name: e.name })), this);
    if (((t = cD.normalizeInputSource(t)), Buffer.isBuffer(t))) e.sourceType = "buffer";
    else if (cD.isStream(t)) e.sourceType = "stream";
    else return (this.emit("error", new h1("INPUTSTEAMBUFFERREQUIRED", { name: e.name })), this);
    return (this._entriesCount++, this._queue.push({ data: e, source: t }), this);
  };
  Sc.prototype.directory = function (t, e, r) {
    if (this._state.finalize || this._state.aborted) return (this.emit("error", new h1("QUEUECLOSED")), this);
    if (typeof t != "string" || t.length === 0) return (this.emit("error", new h1("DIRECTORYDIRPATHREQUIRED")), this);
    (this._pending++, e === !1 ? (e = "") : typeof e != "string" && (e = t));
    var n = !1;
    typeof r == "function" ? ((n = r), (r = {})) : typeof r != "object" && (r = {});
    var o = { stat: !0, dot: !0 };
    function s() {
      (this._pending--, this._maybeFinalize());
    }
    function a(m) {
      this.emit("error", m);
    }
    function u(m) {
      c.pause();
      var d = !1,
        f = Object.assign({}, r);
      ((f.name = m.relative), (f.prefix = e), (f.stats = m.stat), (f.callback = c.resume.bind(c)));
      try {
        if (n) {
          if (((f = n(f)), f === !1)) d = !0;
          else if (typeof f != "object") throw new h1("DIRECTORYFUNCTIONINVALIDDATA", { dirpath: t });
        }
      } catch (p) {
        this.emit("error", p);
        return;
      }
      if (d) {
        c.resume();
        return;
      }
      this._append(m.absolute, f);
    }
    var c = OUn(t, o);
    return (c.on("error", a.bind(this)), c.on("match", u.bind(this)), c.on("end", s.bind(this)), this);
  };
  Sc.prototype.file = function (t, e) {
    return this._state.finalize || this._state.aborted
      ? (this.emit("error", new h1("QUEUECLOSED")), this)
      : typeof t != "string" || t.length === 0
        ? (this.emit("error", new h1("FILEFILEPATHREQUIRED")), this)
        : (this._append(t, e), this);
  };
  Sc.prototype.glob = function (t, e, r) {
    (this._pending++, (e = cD.defaults(e, { stat: !0, pattern: t })));
    function n() {
      (this._pending--, this._maybeFinalize());
    }
    function o(u) {
      this.emit("error", u);
    }
    function s(u) {
      a.pause();
      var c = Object.assign({}, r);
      ((c.callback = a.resume.bind(a)), (c.stats = u.stat), (c.name = u.relative), this._append(u.absolute, c));
    }
    var a = OUn(e.cwd || ".", e);
    return (a.on("error", o.bind(this)), a.on("match", s.bind(this)), a.on("end", n.bind(this)), this);
  };
  Sc.prototype.finalize = function () {
    if (this._state.aborted) {
      var t = new h1("ABORTED");
      return (this.emit("error", t), Promise.reject(t));
    }
    if (this._state.finalize) {
      var e = new h1("FINALIZING");
      return (this.emit("error", e), Promise.reject(e));
    }
    ((this._state.finalize = !0),
      this._pending === 0 && this._queue.idle() && this._statQueue.idle() && this._finalize());
    var r = this;
    return new Promise(function (n, o) {
      var s;
      (r._module.on("end", function () {
        s || n();
      }),
        r._module.on("error", function (a) {
          ((s = !0), o(a));
        }));
    });
  };
  Sc.prototype.setFormat = function (t) {
    return this._format ? (this.emit("error", new h1("FORMATSET")), this) : ((this._format = t), this);
  };
  Sc.prototype.setModule = function (t) {
    return this._state.aborted
      ? (this.emit("error", new h1("ABORTED")), this)
      : this._state.module
        ? (this.emit("error", new h1("MODULESET")), this)
        : ((this._module = t), this._modulePipe(), this);
  };
  Sc.prototype.symlink = function (t, e, r) {
    if (this._state.finalize || this._state.aborted) return (this.emit("error", new h1("QUEUECLOSED")), this);
    if (typeof t != "string" || t.length === 0) return (this.emit("error", new h1("SYMLINKFILEPATHREQUIRED")), this);
    if (typeof e != "string" || e.length === 0)
      return (this.emit("error", new h1("SYMLINKTARGETREQUIRED", { filepath: t })), this);
    if (!this._moduleSupports("symlink"))
      return (this.emit("error", new h1("SYMLINKNOTSUPPORTED", { filepath: t })), this);
    var n = {};
    return (
      (n.type = "symlink"),
      (n.name = t.replace(/\\/g, "/")),
      (n.linkname = e.replace(/\\/g, "/")),
      (n.sourceType = "buffer"),
      typeof r == "number" && (n.mode = r),
      this._entriesCount++,
      this._queue.push({ data: n, source: Buffer.concat([]) }),
      this
    );
  };
  Sc.prototype.pointer = function () {
    return this._pointer;
  };
  Sc.prototype.use = function (t) {
    return (this._streams.push(t), this);
  };
  PUn.exports = Sc;
});