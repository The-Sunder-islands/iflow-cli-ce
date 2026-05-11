var StreamOrchestrator,
  streamOrchestratorInit = j(() => {
    "use strict";
    var _phase = "idle",
      _queue = [],
      _listeners = [];

    function notify() {
      for (var i = 0; i < _listeners.length; i++) {
        try { _listeners[i](); } catch (e) {}
      }
    }

    StreamOrchestrator = {
      get phase() { return _phase; },

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
        notify();
        return true;
      },

      finish() {
        var wasGenerating = _phase === "generating";
        _phase = "idle";
        if (wasGenerating) notify();
        return _dequeue();
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

      cancel(e) {
        _phase = "idle";
        notify();
      },

      cancelHard(e) {
        _queue = [];
        _phase = "idle";
        notify();
      },

      getSnapshot() {
        return {
          phase: _phase,
          queueLength: _queue.length,
        };
      },

      _tryDequeue() {
        while (_queue.length > 0) {
          var msg = _queue.shift();
          if (!msg) continue;
          _phase = "generating";
          notify();
          return msg;
        }
      },
    };
  });
