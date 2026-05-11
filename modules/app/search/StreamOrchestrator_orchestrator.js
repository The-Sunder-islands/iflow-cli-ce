var StreamOrchestrator,
  streamOrchestratorInit = j(() => {
    "use strict";
    var _phase = "idle",
      _queue = [],
      _listeners = [],
      _buffer = "",
      _parts = [],
      _history = [],
      _thinking = null,
      _msgIdCounter = 0;

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
        if (wasGenerating) notify();
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

      appendHistory(e) {
        var msg = { ...e, id: nextId() };
        _history.push(msg);
        notify();
        return msg;
      },

      getHistory() { return _history.slice(); },

      replaceHistory(e) {
        _history = Array.isArray(e) ? e.map(function(m) { return { ...m, id: nextId() }; }) : [];
        notify();
      },

      updateHistory(e, r) {
        for (var i = 0; i < _history.length; i++) {
          if (_history[i].id === e) {
            var updater = typeof r == "function" ? r(_history[i]) : r;
            _history[i] = { ..._history[i], ...updater };
            notify();
            return;
          }
        }
      },

      clearHistory() {
        _history = [];
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
