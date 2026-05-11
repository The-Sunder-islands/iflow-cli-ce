var StreamOrchestrator,
  streamOrchestratorInit = j(() => {
    "use strict";
    var _phase = "idle",
      _queue = [],
      _listeners = [],
      _buffer = "",
      _parts = [],
      _history = [],
      _historySnapshot = [],
      _items = [],
      _itemsSnapshot = [],
      _thinking = null,
      _msgIdCounter = 0,
      _tick = 0;

    function notify() {
      for (var i = 0; i < _listeners.length; i++) {
        try { _listeners[i](); } catch (e) {}
      }
    }

    function nextId() {
      return ++_msgIdCounter;
    }

    StreamOrchestrator = {
      get phase() { return _phase; },
      get buffer() { return _buffer; },
      get thinking() { return _thinking; },
      get tick() { return _tick; },

      subscribe(e) {
        _listeners.push(e);
        return function () {
          var idx = _listeners.indexOf(e);
          if (idx >= 0) _listeners.splice(idx, 1);
        };
      },

      ingest(msg) {
        if (msg == null) return false;
        if (_phase !== "idle") {
          _queue.push(msg);
          return false;
        }
        _phase = "generating";
        this.clearBuffer();
        notify();
        return true;
      },

      finish() {
        var wasGenerating = _phase === "generating";
        _phase = "idle";
        if (wasGenerating) { _tick++; notify(); }
        return this._dequeue();
      },

      _dequeue() {
        while (_queue.length > 0) {
          var msg = _queue.shift();
          if (msg) return msg;
        }
        return null;
      },

      setPhase(e) {
        _phase = e;
        notify();
      },

      cancel() {
        _phase = "idle";
        _buffer = "";
        _parts = [];
        _thinking = null;
        notify();
      },

      cancelHard() {
        _queue = [];
        _phase = "idle";
        _buffer = "";
        _parts = [];
        _thinking = null;
        notify();
      },

      getItems() { return _itemsSnapshot; },

      dispatch(e) {
        e.id = nextId();
        _items.push(e);
        _itemsSnapshot = _items.slice();
        notify();
      },

      updateLastItem(e) {
        if (_items.length === 0) return;
        var i = _items.length - 1;
        _items[i] = { ..._items[i], ...e };
        _itemsSnapshot = _items.slice();
        notify();
      },

      streamChunk(e) {
        var lastContentIdx = -1;
        for (var i = _items.length - 1; i >= 0; i--) {
          if (_items[i].type === "content") { lastContentIdx = i; break; }
        }
        if (lastContentIdx >= 0) {
          var existing = _items[lastContentIdx];
          _items[lastContentIdx] = { ...existing, text: (existing.text || "") + e };
        } else {
          _items.push({ id: nextId(), type: "content", text: e });
        }
        _itemsSnapshot = _items.slice();
        notify();
      },

      appendHistory(e) {
        var msg = { ...e, id: nextId() };
        _history.push(msg);
        _historySnapshot = _history.slice();
        notify();
        return msg;
      },

      getHistory() { console.warn("DEPRECATED: getHistory -> use getItems instead"); return _historySnapshot; },

      replaceHistory(e) {
        console.warn("DEPRECATED: replaceHistory -> use dispatch/clearItems instead");
        _history = Array.isArray(e) ? e.map(function(m) { return { ...m, id: nextId() }; }) : [];
        _historySnapshot = _history.slice();
        notify();
      },

      updateHistory(e, r) {
        console.warn("DEPRECATED: updateHistory -> use updateLastItem instead");
        for (var i = 0; i < _history.length; i++) {
          if (_history[i].id === e) {
            var updater = typeof r == "function" ? r(_history[i]) : r;
            _history[i] = { ..._history[i], ...updater };
            _historySnapshot = _history.slice();
            notify();
            return;
          }
        }
      },

      clearItems() {
        _items = [];
        _itemsSnapshot = [];
        notify();
      },

      clearHistory() {
        console.warn("DEPRECATED: clearHistory -> use clearItems instead");
        _history = [];
        _historySnapshot = [];
        notify();
      },

      getBuffer() { return _buffer; },

      clearBuffer() {
        _buffer = "";
        _parts = [];
        _thinking = null;
      },

      _consumeChunk(chunk) {
        _buffer += chunk;
        notify();
        return _buffer;
      },

      getSnapshot() {
        return {
          phase: _phase,
          queueLength: _queue.length,
          buffer: _buffer,
          thinking: _thinking,
          historyLength: _history.length,
        };
      },
    };
  });
