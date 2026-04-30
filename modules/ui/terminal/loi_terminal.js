/**
 * @module loi
 * @category ui/terminal
 * @label terminal
 * @position 1602 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (loi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var loi = T((coi) => {
  (() => {
    "use strict";
    var t = {
        349: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.CircularList = void 0));
          let m = c(460),
            d = c(844);
          class f extends d.Disposable {
            constructor(h) {
              (super(),
                (this._maxLength = h),
                (this.onDeleteEmitter = this.register(new m.EventEmitter())),
                (this.onDelete = this.onDeleteEmitter.event),
                (this.onInsertEmitter = this.register(new m.EventEmitter())),
                (this.onInsert = this.onInsertEmitter.event),
                (this.onTrimEmitter = this.register(new m.EventEmitter())),
                (this.onTrim = this.onTrimEmitter.event),
                (this._array = new Array(this._maxLength)),
                (this._startIndex = 0),
                (this._length = 0));
            }
            get maxLength() {
              return this._maxLength;
            }
            set maxLength(h) {
              if (this._maxLength === h) return;
              let g = new Array(h);
              for (let b = 0; b < Math.min(h, this.length); b++) g[b] = this._array[this._getCyclicIndex(b)];
              ((this._array = g), (this._maxLength = h), (this._startIndex = 0));
            }
            get length() {
              return this._length;
            }
            set length(h) {
              if (h > this._length) for (let g = this._length; g < h; g++) this._array[g] = void 0;
              this._length = h;
            }
            get(h) {
              return this._array[this._getCyclicIndex(h)];
            }
            set(h, g) {
              this._array[this._getCyclicIndex(h)] = g;
            }
            push(h) {
              ((this._array[this._getCyclicIndex(this._length)] = h),
                this._length === this._maxLength
                  ? ((this._startIndex = ++this._startIndex % this._maxLength), this.onTrimEmitter.fire(1))
                  : this._length++);
            }
            recycle() {
              if (this._length !== this._maxLength) throw new Error("Can only recycle when the buffer is full");
              return (
                (this._startIndex = ++this._startIndex % this._maxLength),
                this.onTrimEmitter.fire(1),
                this._array[this._getCyclicIndex(this._length - 1)]
              );
            }
            get isFull() {
              return this._length === this._maxLength;
            }
            pop() {
              return this._array[this._getCyclicIndex(this._length-- - 1)];
            }
            splice(h, g, ...b) {
              if (g) {
                for (let A = h; A < this._length - g; A++)
                  this._array[this._getCyclicIndex(A)] = this._array[this._getCyclicIndex(A + g)];
                ((this._length -= g), this.onDeleteEmitter.fire({ index: h, amount: g }));
              }
              for (let A = this._length - 1; A >= h; A--)
                this._array[this._getCyclicIndex(A + b.length)] = this._array[this._getCyclicIndex(A)];
              for (let A = 0; A < b.length; A++) this._array[this._getCyclicIndex(h + A)] = b[A];
              if (
                (b.length && this.onInsertEmitter.fire({ index: h, amount: b.length }),
                this._length + b.length > this._maxLength)
              ) {
                let A = this._length + b.length - this._maxLength;
                ((this._startIndex += A), (this._length = this._maxLength), this.onTrimEmitter.fire(A));
              } else this._length += b.length;
            }
            trimStart(h) {
              (h > this._length && (h = this._length),
                (this._startIndex += h),
                (this._length -= h),
                this.onTrimEmitter.fire(h));
            }
            shiftElements(h, g, b) {
              if (!(g <= 0)) {
                if (h < 0 || h >= this._length) throw new Error("start argument out of range");
                if (h + b < 0) throw new Error("Cannot shift elements in list beyond index 0");
                if (b > 0) {
                  for (let y = g - 1; y >= 0; y--) this.set(h + y + b, this.get(h + y));
                  let A = h + g + b - this._length;
                  if (A > 0)
                    for (this._length += A; this._length > this._maxLength; )
                      (this._length--, this._startIndex++, this.onTrimEmitter.fire(1));
                } else for (let A = 0; A < g; A++) this.set(h + A + b, this.get(h + A));
              }
            }
            _getCyclicIndex(h) {
              return (this._startIndex + h) % this._maxLength;
            }
          }
          u.CircularList = f;
        },
        439: (a, u) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }),
            (u.clone = void 0),
            (u.clone = function c(m, d = 5) {
              if (typeof m != "object") return m;
              let f = Array.isArray(m) ? [] : {};
              for (let p in m) f[p] = d <= 1 ? m[p] : m[p] && c(m[p], d - 1);
              return f;
            }));
        },
        969: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.CoreTerminal = void 0));
          let m = c(844),
            d = c(585),
            f = c(348),
            p = c(866),
            h = c(744),
            g = c(302),
            b = c(83),
            A = c(460),
            y = c(753),
            E = c(480),
            v = c(994),
            C = c(282),
            x = c(435),
            k = c(981),
            R = c(660),
            P = !1;
          class D extends m.Disposable {
            get onScroll() {
              return (
                this._onScrollApi ||
                  ((this._onScrollApi = this.register(new A.EventEmitter())),
                  this._onScroll.event((N) => {
                    this._onScrollApi?.fire(N.position);
                  })),
                this._onScrollApi.event
              );
            }
            get cols() {
              return this._bufferService.cols;
            }
            get rows() {
              return this._bufferService.rows;
            }
            get buffers() {
              return this._bufferService.buffers;
            }
            get options() {
              return this.optionsService.options;
            }
            set options(N) {
              for (let F in N) this.optionsService.options[F] = N[F];
            }
            constructor(N) {
              (super(),
                (this._windowsWrappingHeuristics = this.register(new m.MutableDisposable())),
                (this._onBinary = this.register(new A.EventEmitter())),
                (this.onBinary = this._onBinary.event),
                (this._onData = this.register(new A.EventEmitter())),
                (this.onData = this._onData.event),
                (this._onLineFeed = this.register(new A.EventEmitter())),
                (this.onLineFeed = this._onLineFeed.event),
                (this._onResize = this.register(new A.EventEmitter())),
                (this.onResize = this._onResize.event),
                (this._onWriteParsed = this.register(new A.EventEmitter())),
                (this.onWriteParsed = this._onWriteParsed.event),
                (this._onScroll = this.register(new A.EventEmitter())),
                (this._instantiationService = new f.InstantiationService()),
                (this.optionsService = this.register(new g.OptionsService(N))),
                this._instantiationService.setService(d.IOptionsService, this.optionsService),
                (this._bufferService = this.register(this._instantiationService.createInstance(h.BufferService))),
                this._instantiationService.setService(d.IBufferService, this._bufferService),
                (this._logService = this.register(this._instantiationService.createInstance(p.LogService))),
                this._instantiationService.setService(d.ILogService, this._logService),
                (this.coreService = this.register(this._instantiationService.createInstance(b.CoreService))),
                this._instantiationService.setService(d.ICoreService, this.coreService),
                (this.coreMouseService = this.register(this._instantiationService.createInstance(y.CoreMouseService))),
                this._instantiationService.setService(d.ICoreMouseService, this.coreMouseService),
                (this.unicodeService = this.register(this._instantiationService.createInstance(E.UnicodeService))),
                this._instantiationService.setService(d.IUnicodeService, this.unicodeService),
                (this._charsetService = this._instantiationService.createInstance(v.CharsetService)),
                this._instantiationService.setService(d.ICharsetService, this._charsetService),
                (this._oscLinkService = this._instantiationService.createInstance(R.OscLinkService)),
                this._instantiationService.setService(d.IOscLinkService, this._oscLinkService),
                (this._inputHandler = this.register(
                  new x.InputHandler(
                    this._bufferService,
                    this._charsetService,
                    this.coreService,
                    this._logService,
                    this.optionsService,
                    this._oscLinkService,
                    this.coreMouseService,
                    this.unicodeService,
                  ),
                )),
                this.register((0, A.forwardEvent)(this._inputHandler.onLineFeed, this._onLineFeed)),
                this.register(this._inputHandler),
                this.register((0, A.forwardEvent)(this._bufferService.onResize, this._onResize)),
                this.register((0, A.forwardEvent)(this.coreService.onData, this._onData)),
                this.register((0, A.forwardEvent)(this.coreService.onBinary, this._onBinary)),
                this.register(this.coreService.onRequestScrollToBottom(() => this.scrollToBottom())),
                this.register(this.coreService.onUserInput(() => this._writeBuffer.handleUserInput())),
                this.register(
                  this.optionsService.onMultipleOptionChange(["windowsMode", "windowsPty"], () =>
                    this._handleWindowsPtyOptionChange(),
                  ),
                ),
                this.register(
                  this._bufferService.onScroll((F) => {
                    (this._onScroll.fire({ position: this._bufferService.buffer.ydisp, source: 0 }),
                      this._inputHandler.markRangeDirty(
                        this._bufferService.buffer.scrollTop,
                        this._bufferService.buffer.scrollBottom,
                      ));
                  }),
                ),
                this.register(
                  this._inputHandler.onScroll((F) => {
                    (this._onScroll.fire({ position: this._bufferService.buffer.ydisp, source: 0 }),
                      this._inputHandler.markRangeDirty(
                        this._bufferService.buffer.scrollTop,
                        this._bufferService.buffer.scrollBottom,
                      ));
                  }),
                ),
                (this._writeBuffer = this.register(new k.WriteBuffer((F, B) => this._inputHandler.parse(F, B)))),
                this.register((0, A.forwardEvent)(this._writeBuffer.onWriteParsed, this._onWriteParsed)));
            }
            write(N, F) {
              this._writeBuffer.write(N, F);
            }
            writeSync(N, F) {
              (this._logService.logLevel <= d.LogLevelEnum.WARN &&
                !P &&
                (this._logService.warn("writeSync is unreliable and will be removed soon."), (P = !0)),
                this._writeBuffer.writeSync(N, F));
            }
            input(N, F = !0) {
              this.coreService.triggerDataEvent(N, F);
            }
            resize(N, F) {
              isNaN(N) ||
                isNaN(F) ||
                ((N = Math.max(N, h.MINIMUM_COLS)),
                (F = Math.max(F, h.MINIMUM_ROWS)),
                this._bufferService.resize(N, F));
            }
            scroll(N, F = !1) {
              this._bufferService.scroll(N, F);
            }
            scrollLines(N, F, B) {
              this._bufferService.scrollLines(N, F, B);
            }
            scrollPages(N) {
              this.scrollLines(N * (this.rows - 1));
            }
            scrollToTop() {
              this.scrollLines(-this._bufferService.buffer.ydisp);
            }
            scrollToBottom() {
              this.scrollLines(this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
            }
            scrollToLine(N) {
              let F = N - this._bufferService.buffer.ydisp;
              F !== 0 && this.scrollLines(F);
            }
            registerEscHandler(N, F) {
              return this._inputHandler.registerEscHandler(N, F);
            }
            registerDcsHandler(N, F) {
              return this._inputHandler.registerDcsHandler(N, F);
            }
            registerCsiHandler(N, F) {
              return this._inputHandler.registerCsiHandler(N, F);
            }
            registerOscHandler(N, F) {
              return this._inputHandler.registerOscHandler(N, F);
            }
            _setup() {
              this._handleWindowsPtyOptionChange();
            }
            reset() {
              (this._inputHandler.reset(),
                this._bufferService.reset(),
                this._charsetService.reset(),
                this.coreService.reset(),
                this.coreMouseService.reset());
            }
            _handleWindowsPtyOptionChange() {
              let N = !1,
                F = this.optionsService.rawOptions.windowsPty;
              (F && F.buildNumber !== void 0 && F.buildNumber !== void 0
                ? (N = F.backend === "conpty" && F.buildNumber < 21376)
                : this.optionsService.rawOptions.windowsMode && (N = !0),
                N ? this._enableWindowsWrappingHeuristics() : this._windowsWrappingHeuristics.clear());
            }
            _enableWindowsWrappingHeuristics() {
              if (!this._windowsWrappingHeuristics.value) {
                let N = [];
                (N.push(this.onLineFeed(C.updateWindowsModeWrappedState.bind(null, this._bufferService))),
                  N.push(
                    this.registerCsiHandler(
                      { final: "H" },
                      () => ((0, C.updateWindowsModeWrappedState)(this._bufferService), !1),
                    ),
                  ),
                  (this._windowsWrappingHeuristics.value = (0, m.toDisposable)(() => {
                    for (let F of N) F.dispose();
                  })));
              }
            }
          }
          u.CoreTerminal = D;
        },
        460: (a, u) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }),
            (u.runAndSubscribe = u.forwardEvent = u.EventEmitter = void 0),
            (u.EventEmitter = class {
              constructor() {
                ((this._listeners = []), (this._disposed = !1));
              }
              get event() {
                return (
                  this._event ||
                    (this._event = (c) => (
                      this._listeners.push(c),
                      {
                        dispose: () => {
                          if (!this._disposed) {
                            for (let d = 0; d < this._listeners.length; d++)
                              if (this._listeners[d] === c) return void this._listeners.splice(d, 1);
                          }
                        },
                      }
                    )),
                  this._event
                );
              }
              fire(c, m) {
                let d = [];
                for (let f = 0; f < this._listeners.length; f++) d.push(this._listeners[f]);
                for (let f = 0; f < d.length; f++) d[f].call(void 0, c, m);
              }
              dispose() {
                (this.clearListeners(), (this._disposed = !0));
              }
              clearListeners() {
                this._listeners && (this._listeners.length = 0);
              }
            }),
            (u.forwardEvent = function (c, m) {
              return c((d) => m.fire(d));
            }),
            (u.runAndSubscribe = function (c, m) {
              return (m(void 0), c((d) => m(d)));
            }));
        },
        435: function (a, u, c) {
          var m =
              (this && this.__decorate) ||
              function (H, U, Y, X) {
                var J,
                  q = arguments.length,
                  ne = q < 3 ? U : X === null ? (X = Object.getOwnPropertyDescriptor(U, Y)) : X;
                if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
                  ne = Reflect.decorate(H, U, Y, X);
                else
                  for (var de = H.length - 1; de >= 0; de--)
                    (J = H[de]) && (ne = (q < 3 ? J(ne) : q > 3 ? J(U, Y, ne) : J(U, Y)) || ne);
                return (q > 3 && ne && Object.defineProperty(U, Y, ne), ne);
              },
            d =
              (this && this.__param) ||
              function (H, U) {
                return function (Y, X) {
                  U(Y, X, H);
                };
              };
          (Object.defineProperty(u, "__esModule", { value: !0 }),
            (u.InputHandler = u.WindowsOptionsReportType = void 0));
          let f = c(584),
            p = c(116),
            h = c(15),
            g = c(844),
            b = c(482),
            A = c(437),
            y = c(460),
            E = c(643),
            v = c(511),
            C = c(734),
            x = c(585),
            k = c(480),
            R = c(242),
            P = c(351),
            D = c(941),
            O = { "(": 0, ")": 1, "*": 2, "+": 3, "-": 1, ".": 2 },
            N = 131072;
          function F(H, U) {
            if (H > 24) return U.setWinLines || !1;
            switch (H) {
              case 1:
                return !!U.restoreWin;
              case 2:
                return !!U.minimizeWin;
              case 3:
                return !!U.setWinPosition;
              case 4:
                return !!U.setWinSizePixels;
              case 5:
                return !!U.raiseWin;
              case 6:
                return !!U.lowerWin;
              case 7:
                return !!U.refreshWin;
              case 8:
                return !!U.setWinSizeChars;
              case 9:
                return !!U.maximizeWin;
              case 10:
                return !!U.fullscreenWin;
              case 11:
                return !!U.getWinState;
              case 13:
                return !!U.getWinPosition;
              case 14:
                return !!U.getWinSizePixels;
              case 15:
                return !!U.getScreenSizePixels;
              case 16:
                return !!U.getCellSizePixels;
              case 18:
                return !!U.getWinSizeChars;
              case 19:
                return !!U.getScreenSizeChars;
              case 20:
                return !!U.getIconTitle;
              case 21:
                return !!U.getWinTitle;
              case 22:
                return !!U.pushTitle;
              case 23:
                return !!U.popTitle;
              case 24:
                return !!U.setWinLines;
            }
            return !1;
          }
          var B;
          (function (H) {
            ((H[(H.GET_WIN_SIZE_PIXELS = 0)] = "GET_WIN_SIZE_PIXELS"),
              (H[(H.GET_CELL_SIZE_PIXELS = 1)] = "GET_CELL_SIZE_PIXELS"));
          })(B || (u.WindowsOptionsReportType = B = {}));
          let L = 0;
          class G extends g.Disposable {
            getAttrData() {
              return this._curAttrData;
            }
            constructor(U, Y, X, J, q, ne, de, ce, ye = new h.EscapeSequenceParser()) {
              (super(),
                (this._bufferService = U),
                (this._charsetService = Y),
                (this._coreService = X),
                (this._logService = J),
                (this._optionsService = q),
                (this._oscLinkService = ne),
                (this._coreMouseService = de),
                (this._unicodeService = ce),
                (this._parser = ye),
                (this._parseBuffer = new Uint32Array(4096)),
                (this._stringDecoder = new b.StringToUtf32()),
                (this._utf8Decoder = new b.Utf8ToUtf32()),
                (this._workCell = new v.CellData()),
                (this._windowTitle = ""),
                (this._iconName = ""),
                (this._windowTitleStack = []),
                (this._iconNameStack = []),
                (this._curAttrData = A.DEFAULT_ATTR_DATA.clone()),
                (this._eraseAttrDataInternal = A.DEFAULT_ATTR_DATA.clone()),
                (this._onRequestBell = this.register(new y.EventEmitter())),
                (this.onRequestBell = this._onRequestBell.event),
                (this._onRequestRefreshRows = this.register(new y.EventEmitter())),
                (this.onRequestRefreshRows = this._onRequestRefreshRows.event),
                (this._onRequestReset = this.register(new y.EventEmitter())),
                (this.onRequestReset = this._onRequestReset.event),
                (this._onRequestSendFocus = this.register(new y.EventEmitter())),
                (this.onRequestSendFocus = this._onRequestSendFocus.event),
                (this._onRequestSyncScrollBar = this.register(new y.EventEmitter())),
                (this.onRequestSyncScrollBar = this._onRequestSyncScrollBar.event),
                (this._onRequestWindowsOptionsReport = this.register(new y.EventEmitter())),
                (this.onRequestWindowsOptionsReport = this._onRequestWindowsOptionsReport.event),
                (this._onA11yChar = this.register(new y.EventEmitter())),
                (this.onA11yChar = this._onA11yChar.event),
                (this._onA11yTab = this.register(new y.EventEmitter())),
                (this.onA11yTab = this._onA11yTab.event),
                (this._onCursorMove = this.register(new y.EventEmitter())),
                (this.onCursorMove = this._onCursorMove.event),
                (this._onLineFeed = this.register(new y.EventEmitter())),
                (this.onLineFeed = this._onLineFeed.event),
                (this._onScroll = this.register(new y.EventEmitter())),
                (this.onScroll = this._onScroll.event),
                (this._onTitleChange = this.register(new y.EventEmitter())),
                (this.onTitleChange = this._onTitleChange.event),
                (this._onColor = this.register(new y.EventEmitter())),
                (this.onColor = this._onColor.event),
                (this._parseStack = { paused: !1, cursorStartX: 0, cursorStartY: 0, decodedLength: 0, position: 0 }),
                (this._specialColors = [256, 257, 258]),
                this.register(this._parser),
                (this._dirtyRowTracker = new Q(this._bufferService)),
                (this._activeBuffer = this._bufferService.buffer),
                this.register(
                  this._bufferService.buffers.onBufferActivate((Z) => (this._activeBuffer = Z.activeBuffer)),
                ),
                this._parser.setCsiHandlerFallback((Z, oe) => {
                  this._logService.debug("Unknown CSI code: ", {
                    identifier: this._parser.identToString(Z),
                    params: oe.toArray(),
                  });
                }),
                this._parser.setEscHandlerFallback((Z) => {
                  this._logService.debug("Unknown ESC code: ", { identifier: this._parser.identToString(Z) });
                }),
                this._parser.setExecuteHandlerFallback((Z) => {
                  this._logService.debug("Unknown EXECUTE code: ", { code: Z });
                }),
                this._parser.setOscHandlerFallback((Z, oe, ue) => {
                  this._logService.debug("Unknown OSC code: ", { identifier: Z, action: oe, data: ue });
                }),
                this._parser.setDcsHandlerFallback((Z, oe, ue) => {
                  (oe === "HOOK" && (ue = ue.toArray()),
                    this._logService.debug("Unknown DCS code: ", {
                      identifier: this._parser.identToString(Z),
                      action: oe,
                      payload: ue,
                    }));
                }),
                this._parser.setPrintHandler((Z, oe, ue) => this.print(Z, oe, ue)),
                this._parser.registerCsiHandler({ final: "@" }, (Z) => this.insertChars(Z)),
                this._parser.registerCsiHandler({ intermediates: " ", final: "@" }, (Z) => this.scrollLeft(Z)),
                this._parser.registerCsiHandler({ final: "A" }, (Z) => this.cursorUp(Z)),
                this._parser.registerCsiHandler({ intermediates: " ", final: "A" }, (Z) => this.scrollRight(Z)),
                this._parser.registerCsiHandler({ final: "B" }, (Z) => this.cursorDown(Z)),
                this._parser.registerCsiHandler({ final: "C" }, (Z) => this.cursorForward(Z)),
                this._parser.registerCsiHandler({ final: "D" }, (Z) => this.cursorBackward(Z)),
                this._parser.registerCsiHandler({ final: "E" }, (Z) => this.cursorNextLine(Z)),
                this._parser.registerCsiHandler({ final: "F" }, (Z) => this.cursorPrecedingLine(Z)),
                this._parser.registerCsiHandler({ final: "G" }, (Z) => this.cursorCharAbsolute(Z)),
                this._parser.registerCsiHandler({ final: "H" }, (Z) => this.cursorPosition(Z)),
                this._parser.registerCsiHandler({ final: "I" }, (Z) => this.cursorForwardTab(Z)),
                this._parser.registerCsiHandler({ final: "J" }, (Z) => this.eraseInDisplay(Z, !1)),
                this._parser.registerCsiHandler({ prefix: "?", final: "J" }, (Z) => this.eraseInDisplay(Z, !0)),
                this._parser.registerCsiHandler({ final: "K" }, (Z) => this.eraseInLine(Z, !1)),
                this._parser.registerCsiHandler({ prefix: "?", final: "K" }, (Z) => this.eraseInLine(Z, !0)),
                this._parser.registerCsiHandler({ final: "L" }, (Z) => this.insertLines(Z)),
                this._parser.registerCsiHandler({ final: "M" }, (Z) => this.deleteLines(Z)),
                this._parser.registerCsiHandler({ final: "P" }, (Z) => this.deleteChars(Z)),
                this._parser.registerCsiHandler({ final: "S" }, (Z) => this.scrollUp(Z)),
                this._parser.registerCsiHandler({ final: "T" }, (Z) => this.scrollDown(Z)),
                this._parser.registerCsiHandler({ final: "X" }, (Z) => this.eraseChars(Z)),
                this._parser.registerCsiHandler({ final: "Z" }, (Z) => this.cursorBackwardTab(Z)),
                this._parser.registerCsiHandler({ final: "`" }, (Z) => this.charPosAbsolute(Z)),
                this._parser.registerCsiHandler({ final: "a" }, (Z) => this.hPositionRelative(Z)),
                this._parser.registerCsiHandler({ final: "b" }, (Z) => this.repeatPrecedingCharacter(Z)),
                this._parser.registerCsiHandler({ final: "c" }, (Z) => this.sendDeviceAttributesPrimary(Z)),
                this._parser.registerCsiHandler({ prefix: ">", final: "c" }, (Z) =>
                  this.sendDeviceAttributesSecondary(Z),
                ),
                this._parser.registerCsiHandler({ final: "d" }, (Z) => this.linePosAbsolute(Z)),
                this._parser.registerCsiHandler({ final: "e" }, (Z) => this.vPositionRelative(Z)),
                this._parser.registerCsiHandler({ final: "f" }, (Z) => this.hVPosition(Z)),
                this._parser.registerCsiHandler({ final: "g" }, (Z) => this.tabClear(Z)),
                this._parser.registerCsiHandler({ final: "h" }, (Z) => this.setMode(Z)),
                this._parser.registerCsiHandler({ prefix: "?", final: "h" }, (Z) => this.setModePrivate(Z)),
                this._parser.registerCsiHandler({ final: "l" }, (Z) => this.resetMode(Z)),
                this._parser.registerCsiHandler({ prefix: "?", final: "l" }, (Z) => this.resetModePrivate(Z)),
                this._parser.registerCsiHandler({ final: "m" }, (Z) => this.charAttributes(Z)),
                this._parser.registerCsiHandler({ final: "n" }, (Z) => this.deviceStatus(Z)),
                this._parser.registerCsiHandler({ prefix: "?", final: "n" }, (Z) => this.deviceStatusPrivate(Z)),
                this._parser.registerCsiHandler({ intermediates: "!", final: "p" }, (Z) => this.softReset(Z)),
                this._parser.registerCsiHandler({ intermediates: " ", final: "q" }, (Z) => this.setCursorStyle(Z)),
                this._parser.registerCsiHandler({ final: "r" }, (Z) => this.setScrollRegion(Z)),
                this._parser.registerCsiHandler({ final: "s" }, (Z) => this.saveCursor(Z)),
                this._parser.registerCsiHandler({ final: "t" }, (Z) => this.windowOptions(Z)),
                this._parser.registerCsiHandler({ final: "u" }, (Z) => this.restoreCursor(Z)),
                this._parser.registerCsiHandler({ intermediates: "'", final: "}" }, (Z) => this.insertColumns(Z)),
                this._parser.registerCsiHandler({ intermediates: "'", final: "~" }, (Z) => this.deleteColumns(Z)),
                this._parser.registerCsiHandler({ intermediates: '"', final: "q" }, (Z) => this.selectProtected(Z)),
                this._parser.registerCsiHandler({ intermediates: "$", final: "p" }, (Z) => this.requestMode(Z, !0)),
                this._parser.registerCsiHandler({ prefix: "?", intermediates: "$", final: "p" }, (Z) =>
                  this.requestMode(Z, !1),
                ),
                this._parser.setExecuteHandler(f.C0.BEL, () => this.bell()),
                this._parser.setExecuteHandler(f.C0.LF, () => this.lineFeed()),
                this._parser.setExecuteHandler(f.C0.VT, () => this.lineFeed()),
                this._parser.setExecuteHandler(f.C0.FF, () => this.lineFeed()),
                this._parser.setExecuteHandler(f.C0.CR, () => this.carriageReturn()),
                this._parser.setExecuteHandler(f.C0.BS, () => this.backspace()),
                this._parser.setExecuteHandler(f.C0.HT, () => this.tab()),
                this._parser.setExecuteHandler(f.C0.SO, () => this.shiftOut()),
                this._parser.setExecuteHandler(f.C0.SI, () => this.shiftIn()),
                this._parser.setExecuteHandler(f.C1.IND, () => this.index()),
                this._parser.setExecuteHandler(f.C1.NEL, () => this.nextLine()),
                this._parser.setExecuteHandler(f.C1.HTS, () => this.tabSet()),
                this._parser.registerOscHandler(
                  0,
                  new R.OscHandler((Z) => (this.setTitle(Z), this.setIconName(Z), !0)),
                ),
                this._parser.registerOscHandler(1, new R.OscHandler((Z) => this.setIconName(Z))),
                this._parser.registerOscHandler(2, new R.OscHandler((Z) => this.setTitle(Z))),
                this._parser.registerOscHandler(4, new R.OscHandler((Z) => this.setOrReportIndexedColor(Z))),
                this._parser.registerOscHandler(8, new R.OscHandler((Z) => this.setHyperlink(Z))),
                this._parser.registerOscHandler(10, new R.OscHandler((Z) => this.setOrReportFgColor(Z))),
                this._parser.registerOscHandler(11, new R.OscHandler((Z) => this.setOrReportBgColor(Z))),
                this._parser.registerOscHandler(12, new R.OscHandler((Z) => this.setOrReportCursorColor(Z))),
                this._parser.registerOscHandler(104, new R.OscHandler((Z) => this.restoreIndexedColor(Z))),
                this._parser.registerOscHandler(110, new R.OscHandler((Z) => this.restoreFgColor(Z))),
                this._parser.registerOscHandler(111, new R.OscHandler((Z) => this.restoreBgColor(Z))),
                this._parser.registerOscHandler(112, new R.OscHandler((Z) => this.restoreCursorColor(Z))),
                this._parser.registerEscHandler({ final: "7" }, () => this.saveCursor()),
                this._parser.registerEscHandler({ final: "8" }, () => this.restoreCursor()),
                this._parser.registerEscHandler({ final: "D" }, () => this.index()),
                this._parser.registerEscHandler({ final: "E" }, () => this.nextLine()),
                this._parser.registerEscHandler({ final: "H" }, () => this.tabSet()),
                this._parser.registerEscHandler({ final: "M" }, () => this.reverseIndex()),
                this._parser.registerEscHandler({ final: "=" }, () => this.keypadApplicationMode()),
                this._parser.registerEscHandler({ final: ">" }, () => this.keypadNumericMode()),
                this._parser.registerEscHandler({ final: "c" }, () => this.fullReset()),
                this._parser.registerEscHandler({ final: "n" }, () => this.setgLevel(2)),
                this._parser.registerEscHandler({ final: "o" }, () => this.setgLevel(3)),
                this._parser.registerEscHandler({ final: "|" }, () => this.setgLevel(3)),
                this._parser.registerEscHandler({ final: "}" }, () => this.setgLevel(2)),
                this._parser.registerEscHandler({ final: "~" }, () => this.setgLevel(1)),
                this._parser.registerEscHandler({ intermediates: "%", final: "@" }, () => this.selectDefaultCharset()),
                this._parser.registerEscHandler({ intermediates: "%", final: "G" }, () => this.selectDefaultCharset()));
              for (let Z in p.CHARSETS)
                (this._parser.registerEscHandler({ intermediates: "(", final: Z }, () => this.selectCharset("(" + Z)),
                  this._parser.registerEscHandler({ intermediates: ")", final: Z }, () => this.selectCharset(")" + Z)),
                  this._parser.registerEscHandler({ intermediates: "*", final: Z }, () => this.selectCharset("*" + Z)),
                  this._parser.registerEscHandler({ intermediates: "+", final: Z }, () => this.selectCharset("+" + Z)),
                  this._parser.registerEscHandler({ intermediates: "-", final: Z }, () => this.selectCharset("-" + Z)),
                  this._parser.registerEscHandler({ intermediates: ".", final: Z }, () => this.selectCharset("." + Z)),
                  this._parser.registerEscHandler({ intermediates: "/", final: Z }, () => this.selectCharset("/" + Z)));
              (this._parser.registerEscHandler({ intermediates: "#", final: "8" }, () => this.screenAlignmentPattern()),
                this._parser.setErrorHandler((Z) => (this._logService.error("Parsing error: ", Z), Z)),
                this._parser.registerDcsHandler(
                  { intermediates: "$", final: "q" },
                  new P.DcsHandler((Z, oe) => this.requestStatusString(Z, oe)),
                ));
            }
            _preserveStack(U, Y, X, J) {
              ((this._parseStack.paused = !0),
                (this._parseStack.cursorStartX = U),
                (this._parseStack.cursorStartY = Y),
                (this._parseStack.decodedLength = X),
                (this._parseStack.position = J));
            }
            _logSlowResolvingAsync(U) {
              this._logService.logLevel <= x.LogLevelEnum.WARN &&
                Promise.race([U, new Promise((Y, X) => setTimeout(() => X("#SLOW_TIMEOUT"), 5e3))]).catch((Y) => {
                  if (Y !== "#SLOW_TIMEOUT") throw Y;
                  console.warn("async parser handler taking longer than 5000 ms");
                });
            }
            _getCurrentLinkId() {
              return this._curAttrData.extended.urlId;
            }
            parse(U, Y) {
              let X,
                J = this._activeBuffer.x,
                q = this._activeBuffer.y,
                ne = 0,
                de = this._parseStack.paused;
              if (de) {
                if ((X = this._parser.parse(this._parseBuffer, this._parseStack.decodedLength, Y)))
                  return (this._logSlowResolvingAsync(X), X);
                ((J = this._parseStack.cursorStartX),
                  (q = this._parseStack.cursorStartY),
                  (this._parseStack.paused = !1),
                  U.length > N && (ne = this._parseStack.position + N));
              }
              if (
                (this._logService.logLevel <= x.LogLevelEnum.DEBUG &&
                  this._logService.debug(
                    "parsing data" +
                      (typeof U == "string"
                        ? ` "${U}"`
                        : ` "${Array.prototype.map.call(U, (Z) => String.fromCharCode(Z)).join("")}"`),
                    typeof U == "string" ? U.split("").map((Z) => Z.charCodeAt(0)) : U,
                  ),
                this._parseBuffer.length < U.length &&
                  this._parseBuffer.length < N &&
                  (this._parseBuffer = new Uint32Array(Math.min(U.length, N))),
                de || this._dirtyRowTracker.clearRange(),
                U.length > N)
              )
                for (let Z = ne; Z < U.length; Z += N) {
                  let oe = Z + N < U.length ? Z + N : U.length,
                    ue =
                      typeof U == "string"
                        ? this._stringDecoder.decode(U.substring(Z, oe), this._parseBuffer)
                        : this._utf8Decoder.decode(U.subarray(Z, oe), this._parseBuffer);
                  if ((X = this._parser.parse(this._parseBuffer, ue)))
                    return (this._preserveStack(J, q, ue, Z), this._logSlowResolvingAsync(X), X);
                }
              else if (!de) {
                let Z =
                  typeof U == "string"
                    ? this._stringDecoder.decode(U, this._parseBuffer)
                    : this._utf8Decoder.decode(U, this._parseBuffer);
                if ((X = this._parser.parse(this._parseBuffer, Z)))
                  return (this._preserveStack(J, q, Z, 0), this._logSlowResolvingAsync(X), X);
              }
              (this._activeBuffer.x === J && this._activeBuffer.y === q) || this._onCursorMove.fire();
              let ce =
                  this._dirtyRowTracker.end + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp),
                ye =
                  this._dirtyRowTracker.start + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
              ye < this._bufferService.rows &&
                this._onRequestRefreshRows.fire(
                  Math.min(ye, this._bufferService.rows - 1),
                  Math.min(ce, this._bufferService.rows - 1),
                );
            }
            print(U, Y, X) {
              let J,
                q,
                ne = this._charsetService.charset,
                de = this._optionsService.rawOptions.screenReaderMode,
                ce = this._bufferService.cols,
                ye = this._coreService.decPrivateModes.wraparound,
                Z = this._coreService.modes.insertMode,
                oe = this._curAttrData,
                ue = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
              (this._dirtyRowTracker.markDirty(this._activeBuffer.y),
                this._activeBuffer.x &&
                  X - Y > 0 &&
                  ue.getWidth(this._activeBuffer.x - 1) === 2 &&
                  ue.setCellFromCodepoint(this._activeBuffer.x - 1, 0, 1, oe));
              let he = this._parser.precedingJoinState;
              for (let se = Y; se < X; ++se) {
                if (((J = U[se]), J < 127 && ne)) {
                  let ee = ne[String.fromCharCode(J)];
                  ee && (J = ee.charCodeAt(0));
                }
                let fe = this._unicodeService.charProperties(J, he);
                q = k.UnicodeService.extractWidth(fe);
                let ge = k.UnicodeService.extractShouldJoin(fe),
                  V = ge ? k.UnicodeService.extractWidth(he) : 0;
                if (
                  ((he = fe),
                  de && this._onA11yChar.fire((0, b.stringFromCodePoint)(J)),
                  this._getCurrentLinkId() &&
                    this._oscLinkService.addLineToLink(
                      this._getCurrentLinkId(),
                      this._activeBuffer.ybase + this._activeBuffer.y,
                    ),
                  this._activeBuffer.x + q - V > ce)
                ) {
                  if (ye) {
                    let ee = ue,
                      Ce = this._activeBuffer.x - V;
                    for (
                      this._activeBuffer.x = V,
                        this._activeBuffer.y++,
                        this._activeBuffer.y === this._activeBuffer.scrollBottom + 1
                          ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData(), !0))
                          : (this._activeBuffer.y >= this._bufferService.rows &&
                              (this._activeBuffer.y = this._bufferService.rows - 1),
                            (this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped =
                              !0)),
                        ue = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y),
                        V > 0 && ue instanceof A.BufferLine && ue.copyCellsFrom(ee, Ce, 0, V, !1);
                      Ce < ce;
                    )
                      ee.setCellFromCodepoint(Ce++, 0, 1, oe);
                  } else if (((this._activeBuffer.x = ce - 1), q === 2)) continue;
                }
                if (ge && this._activeBuffer.x) {
                  let ee = ue.getWidth(this._activeBuffer.x - 1) ? 1 : 2;
                  ue.addCodepointToCell(this._activeBuffer.x - ee, J, q);
                  for (let Ce = q - V; --Ce >= 0; ) ue.setCellFromCodepoint(this._activeBuffer.x++, 0, 0, oe);
                } else if (
                  (Z &&
                    (ue.insertCells(this._activeBuffer.x, q - V, this._activeBuffer.getNullCell(oe)),
                    ue.getWidth(ce - 1) === 2 &&
                      ue.setCellFromCodepoint(ce - 1, E.NULL_CELL_CODE, E.NULL_CELL_WIDTH, oe)),
                  ue.setCellFromCodepoint(this._activeBuffer.x++, J, q, oe),
                  q > 0)
                )
                  for (; --q; ) ue.setCellFromCodepoint(this._activeBuffer.x++, 0, 0, oe);
              }
              ((this._parser.precedingJoinState = he),
                this._activeBuffer.x < ce &&
                  X - Y > 0 &&
                  ue.getWidth(this._activeBuffer.x) === 0 &&
                  !ue.hasContent(this._activeBuffer.x) &&
                  ue.setCellFromCodepoint(this._activeBuffer.x, 0, 1, oe),
                this._dirtyRowTracker.markDirty(this._activeBuffer.y));
            }
            registerCsiHandler(U, Y) {
              return U.final !== "t" || U.prefix || U.intermediates
                ? this._parser.registerCsiHandler(U, Y)
                : this._parser.registerCsiHandler(
                    U,
                    (X) => !F(X.params[0], this._optionsService.rawOptions.windowOptions) || Y(X),
                  );
            }
            registerDcsHandler(U, Y) {
              return this._parser.registerDcsHandler(U, new P.DcsHandler(Y));
            }
            registerEscHandler(U, Y) {
              return this._parser.registerEscHandler(U, Y);
            }
            registerOscHandler(U, Y) {
              return this._parser.registerOscHandler(U, new R.OscHandler(Y));
            }
            bell() {
              return (this._onRequestBell.fire(), !0);
            }
            lineFeed() {
              return (
                this._dirtyRowTracker.markDirty(this._activeBuffer.y),
                this._optionsService.rawOptions.convertEol && (this._activeBuffer.x = 0),
                this._activeBuffer.y++,
                this._activeBuffer.y === this._activeBuffer.scrollBottom + 1
                  ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData()))
                  : this._activeBuffer.y >= this._bufferService.rows
                    ? (this._activeBuffer.y = this._bufferService.rows - 1)
                    : (this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = !1),
                this._activeBuffer.x >= this._bufferService.cols && this._activeBuffer.x--,
                this._dirtyRowTracker.markDirty(this._activeBuffer.y),
                this._onLineFeed.fire(),
                !0
              );
            }
            carriageReturn() {
              return ((this._activeBuffer.x = 0), !0);
            }
            backspace() {
              if (!this._coreService.decPrivateModes.reverseWraparound)
                return (this._restrictCursor(), this._activeBuffer.x > 0 && this._activeBuffer.x--, !0);
              if ((this._restrictCursor(this._bufferService.cols), this._activeBuffer.x > 0)) this._activeBuffer.x--;
              else if (
                this._activeBuffer.x === 0 &&
                this._activeBuffer.y > this._activeBuffer.scrollTop &&
                this._activeBuffer.y <= this._activeBuffer.scrollBottom &&
                this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y)?.isWrapped
              ) {
                ((this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = !1),
                  this._activeBuffer.y--,
                  (this._activeBuffer.x = this._bufferService.cols - 1));
                let U = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                U.hasWidth(this._activeBuffer.x) && !U.hasContent(this._activeBuffer.x) && this._activeBuffer.x--;
              }
              return (this._restrictCursor(), !0);
            }
            tab() {
              if (this._activeBuffer.x >= this._bufferService.cols) return !0;
              let U = this._activeBuffer.x;
              return (
                (this._activeBuffer.x = this._activeBuffer.nextStop()),
                this._optionsService.rawOptions.screenReaderMode && this._onA11yTab.fire(this._activeBuffer.x - U),
                !0
              );
            }
            shiftOut() {
              return (this._charsetService.setgLevel(1), !0);
            }
            shiftIn() {
              return (this._charsetService.setgLevel(0), !0);
            }
            _restrictCursor(U = this._bufferService.cols - 1) {
              ((this._activeBuffer.x = Math.min(U, Math.max(0, this._activeBuffer.x))),
                (this._activeBuffer.y = this._coreService.decPrivateModes.origin
                  ? Math.min(
                      this._activeBuffer.scrollBottom,
                      Math.max(this._activeBuffer.scrollTop, this._activeBuffer.y),
                    )
                  : Math.min(this._bufferService.rows - 1, Math.max(0, this._activeBuffer.y))),
                this._dirtyRowTracker.markDirty(this._activeBuffer.y));
            }
            _setCursor(U, Y) {
              (this._dirtyRowTracker.markDirty(this._activeBuffer.y),
                this._coreService.decPrivateModes.origin
                  ? ((this._activeBuffer.x = U), (this._activeBuffer.y = this._activeBuffer.scrollTop + Y))
                  : ((this._activeBuffer.x = U), (this._activeBuffer.y = Y)),
                this._restrictCursor(),
                this._dirtyRowTracker.markDirty(this._activeBuffer.y));
            }
            _moveCursor(U, Y) {
              (this._restrictCursor(), this._setCursor(this._activeBuffer.x + U, this._activeBuffer.y + Y));
            }
            cursorUp(U) {
              let Y = this._activeBuffer.y - this._activeBuffer.scrollTop;
              return (
                Y >= 0 ? this._moveCursor(0, -Math.min(Y, U.params[0] || 1)) : this._moveCursor(0, -(U.params[0] || 1)),
                !0
              );
            }
            cursorDown(U) {
              let Y = this._activeBuffer.scrollBottom - this._activeBuffer.y;
              return (
                Y >= 0 ? this._moveCursor(0, Math.min(Y, U.params[0] || 1)) : this._moveCursor(0, U.params[0] || 1),
                !0
              );
            }
            cursorForward(U) {
              return (this._moveCursor(U.params[0] || 1, 0), !0);
            }
            cursorBackward(U) {
              return (this._moveCursor(-(U.params[0] || 1), 0), !0);
            }
            cursorNextLine(U) {
              return (this.cursorDown(U), (this._activeBuffer.x = 0), !0);
            }
            cursorPrecedingLine(U) {
              return (this.cursorUp(U), (this._activeBuffer.x = 0), !0);
            }
            cursorCharAbsolute(U) {
              return (this._setCursor((U.params[0] || 1) - 1, this._activeBuffer.y), !0);
            }
            cursorPosition(U) {
              return (this._setCursor(U.length >= 2 ? (U.params[1] || 1) - 1 : 0, (U.params[0] || 1) - 1), !0);
            }
            charPosAbsolute(U) {
              return (this._setCursor((U.params[0] || 1) - 1, this._activeBuffer.y), !0);
            }
            hPositionRelative(U) {
              return (this._moveCursor(U.params[0] || 1, 0), !0);
            }
            linePosAbsolute(U) {
              return (this._setCursor(this._activeBuffer.x, (U.params[0] || 1) - 1), !0);
            }
            vPositionRelative(U) {
              return (this._moveCursor(0, U.params[0] || 1), !0);
            }
            hVPosition(U) {
              return (this.cursorPosition(U), !0);
            }
            tabClear(U) {
              let Y = U.params[0];
              return (
                Y === 0
                  ? delete this._activeBuffer.tabs[this._activeBuffer.x]
                  : Y === 3 && (this._activeBuffer.tabs = {}),
                !0
              );
            }
            cursorForwardTab(U) {
              if (this._activeBuffer.x >= this._bufferService.cols) return !0;
              let Y = U.params[0] || 1;
              for (; Y--; ) this._activeBuffer.x = this._activeBuffer.nextStop();
              return !0;
            }
            cursorBackwardTab(U) {
              if (this._activeBuffer.x >= this._bufferService.cols) return !0;
              let Y = U.params[0] || 1;
              for (; Y--; ) this._activeBuffer.x = this._activeBuffer.prevStop();
              return !0;
            }
            selectProtected(U) {
              let Y = U.params[0];
              return (
                Y === 1 && (this._curAttrData.bg |= 536870912),
                (Y !== 2 && Y !== 0) || (this._curAttrData.bg &= -536870913),
                !0
              );
            }
            _eraseInBufferLine(U, Y, X, J = !1, q = !1) {
              let ne = this._activeBuffer.lines.get(this._activeBuffer.ybase + U);
              (ne.replaceCells(Y, X, this._activeBuffer.getNullCell(this._eraseAttrData()), q),
                J && (ne.isWrapped = !1));
            }
            _resetBufferLine(U, Y = !1) {
              let X = this._activeBuffer.lines.get(this._activeBuffer.ybase + U);
              X &&
                (X.fill(this._activeBuffer.getNullCell(this._eraseAttrData()), Y),
                this._bufferService.buffer.clearMarkers(this._activeBuffer.ybase + U),
                (X.isWrapped = !1));
            }
            eraseInDisplay(U, Y = !1) {
              let X;
              switch ((this._restrictCursor(this._bufferService.cols), U.params[0])) {
                case 0:
                  for (
                    X = this._activeBuffer.y,
                      this._dirtyRowTracker.markDirty(X),
                      this._eraseInBufferLine(
                        X++,
                        this._activeBuffer.x,
                        this._bufferService.cols,
                        this._activeBuffer.x === 0,
                        Y,
                      );
                    X < this._bufferService.rows;
                    X++
                  )
                    this._resetBufferLine(X, Y);
                  this._dirtyRowTracker.markDirty(X);
                  break;
                case 1:
                  for (
                    X = this._activeBuffer.y,
                      this._dirtyRowTracker.markDirty(X),
                      this._eraseInBufferLine(X, 0, this._activeBuffer.x + 1, !0, Y),
                      this._activeBuffer.x + 1 >= this._bufferService.cols &&
                        (this._activeBuffer.lines.get(X + 1).isWrapped = !1);
                    X--;
                  )
                    this._resetBufferLine(X, Y);
                  this._dirtyRowTracker.markDirty(0);
                  break;
                case 2:
                  for (X = this._bufferService.rows, this._dirtyRowTracker.markDirty(X - 1); X--; )
                    this._resetBufferLine(X, Y);
                  this._dirtyRowTracker.markDirty(0);
                  break;
                case 3:
                  let J = this._activeBuffer.lines.length - this._bufferService.rows;
                  J > 0 &&
                    (this._activeBuffer.lines.trimStart(J),
                    (this._activeBuffer.ybase = Math.max(this._activeBuffer.ybase - J, 0)),
                    (this._activeBuffer.ydisp = Math.max(this._activeBuffer.ydisp - J, 0)),
                    this._onScroll.fire(0));
              }
              return !0;
            }
            eraseInLine(U, Y = !1) {
              switch ((this._restrictCursor(this._bufferService.cols), U.params[0])) {
                case 0:
                  this._eraseInBufferLine(
                    this._activeBuffer.y,
                    this._activeBuffer.x,
                    this._bufferService.cols,
                    this._activeBuffer.x === 0,
                    Y,
                  );
                  break;
                case 1:
                  this._eraseInBufferLine(this._activeBuffer.y, 0, this._activeBuffer.x + 1, !1, Y);
                  break;
                case 2:
                  this._eraseInBufferLine(this._activeBuffer.y, 0, this._bufferService.cols, !0, Y);
              }
              return (this._dirtyRowTracker.markDirty(this._activeBuffer.y), !0);
            }
            insertLines(U) {
              this._restrictCursor();
              let Y = U.params[0] || 1;
              if (
                this._activeBuffer.y > this._activeBuffer.scrollBottom ||
                this._activeBuffer.y < this._activeBuffer.scrollTop
              )
                return !0;
              let X = this._activeBuffer.ybase + this._activeBuffer.y,
                J = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom,
                q = this._bufferService.rows - 1 + this._activeBuffer.ybase - J + 1;
              for (; Y--; )
                (this._activeBuffer.lines.splice(q - 1, 1),
                  this._activeBuffer.lines.splice(X, 0, this._activeBuffer.getBlankLine(this._eraseAttrData())));
              return (
                this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom),
                (this._activeBuffer.x = 0),
                !0
              );
            }
            deleteLines(U) {
              this._restrictCursor();
              let Y = U.params[0] || 1;
              if (
                this._activeBuffer.y > this._activeBuffer.scrollBottom ||
                this._activeBuffer.y < this._activeBuffer.scrollTop
              )
                return !0;
              let X = this._activeBuffer.ybase + this._activeBuffer.y,
                J;
              for (
                J = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom,
                  J = this._bufferService.rows - 1 + this._activeBuffer.ybase - J;
                Y--;
              )
                (this._activeBuffer.lines.splice(X, 1),
                  this._activeBuffer.lines.splice(J, 0, this._activeBuffer.getBlankLine(this._eraseAttrData())));
              return (
                this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom),
                (this._activeBuffer.x = 0),
                !0
              );
            }
            insertChars(U) {
              this._restrictCursor();
              let Y = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
              return (
                Y &&
                  (Y.insertCells(
                    this._activeBuffer.x,
                    U.params[0] || 1,
                    this._activeBuffer.getNullCell(this._eraseAttrData()),
                  ),
                  this._dirtyRowTracker.markDirty(this._activeBuffer.y)),
                !0
              );
            }
            deleteChars(U) {
              this._restrictCursor();
              let Y = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
              return (
                Y &&
                  (Y.deleteCells(
                    this._activeBuffer.x,
                    U.params[0] || 1,
                    this._activeBuffer.getNullCell(this._eraseAttrData()),
                  ),
                  this._dirtyRowTracker.markDirty(this._activeBuffer.y)),
                !0
              );
            }
            scrollUp(U) {
              let Y = U.params[0] || 1;
              for (; Y--; )
                (this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 1),
                  this._activeBuffer.lines.splice(
                    this._activeBuffer.ybase + this._activeBuffer.scrollBottom,
                    0,
                    this._activeBuffer.getBlankLine(this._eraseAttrData()),
                  ));
              return (
                this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom),
                !0
              );
            }
            scrollDown(U) {
              let Y = U.params[0] || 1;
              for (; Y--; )
                (this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 1),
                  this._activeBuffer.lines.splice(
                    this._activeBuffer.ybase + this._activeBuffer.scrollTop,
                    0,
                    this._activeBuffer.getBlankLine(A.DEFAULT_ATTR_DATA),
                  ));
              return (
                this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom),
                !0
              );
            }
            scrollLeft(U) {
              if (
                this._activeBuffer.y > this._activeBuffer.scrollBottom ||
                this._activeBuffer.y < this._activeBuffer.scrollTop
              )
                return !0;
              let Y = U.params[0] || 1;
              for (let X = this._activeBuffer.scrollTop; X <= this._activeBuffer.scrollBottom; ++X) {
                let J = this._activeBuffer.lines.get(this._activeBuffer.ybase + X);
                (J.deleteCells(0, Y, this._activeBuffer.getNullCell(this._eraseAttrData())), (J.isWrapped = !1));
              }
              return (
                this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom),
                !0
              );
            }
            scrollRight(U) {
              if (
                this._activeBuffer.y > this._activeBuffer.scrollBottom ||
                this._activeBuffer.y < this._activeBuffer.scrollTop
              )
                return !0;
              let Y = U.params[0] || 1;
              for (let X = this._activeBuffer.scrollTop; X <= this._activeBuffer.scrollBottom; ++X) {
                let J = this._activeBuffer.lines.get(this._activeBuffer.ybase + X);
                (J.insertCells(0, Y, this._activeBuffer.getNullCell(this._eraseAttrData())), (J.isWrapped = !1));
              }
              return (
                this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom),
                !0
              );
            }
            insertColumns(U) {
              if (
                this._activeBuffer.y > this._activeBuffer.scrollBottom ||
                this._activeBuffer.y < this._activeBuffer.scrollTop
              )
                return !0;
              let Y = U.params[0] || 1;
              for (let X = this._activeBuffer.scrollTop; X <= this._activeBuffer.scrollBottom; ++X) {
                let J = this._activeBuffer.lines.get(this._activeBuffer.ybase + X);
                (J.insertCells(this._activeBuffer.x, Y, this._activeBuffer.getNullCell(this._eraseAttrData())),
                  (J.isWrapped = !1));
              }
              return (
                this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom),
                !0
              );
            }
            deleteColumns(U) {
              if (
                this._activeBuffer.y > this._activeBuffer.scrollBottom ||
                this._activeBuffer.y < this._activeBuffer.scrollTop
              )
                return !0;
              let Y = U.params[0] || 1;
              for (let X = this._activeBuffer.scrollTop; X <= this._activeBuffer.scrollBottom; ++X) {
                let J = this._activeBuffer.lines.get(this._activeBuffer.ybase + X);
                (J.deleteCells(this._activeBuffer.x, Y, this._activeBuffer.getNullCell(this._eraseAttrData())),
                  (J.isWrapped = !1));
              }
              return (
                this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom),
                !0
              );
            }
            eraseChars(U) {
              this._restrictCursor();
              let Y = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
              return (
                Y &&
                  (Y.replaceCells(
                    this._activeBuffer.x,
                    this._activeBuffer.x + (U.params[0] || 1),
                    this._activeBuffer.getNullCell(this._eraseAttrData()),
                  ),
                  this._dirtyRowTracker.markDirty(this._activeBuffer.y)),
                !0
              );
            }
            repeatPrecedingCharacter(U) {
              let Y = this._parser.precedingJoinState;
              if (!Y) return !0;
              let X = U.params[0] || 1,
                J = k.UnicodeService.extractWidth(Y),
                q = this._activeBuffer.x - J,
                ne = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).getString(q),
                de = new Uint32Array(ne.length * X),
                ce = 0;
              for (let Z = 0; Z < ne.length; ) {
                let oe = ne.codePointAt(Z) || 0;
                ((de[ce++] = oe), (Z += oe > 65535 ? 2 : 1));
              }
              let ye = ce;
              for (let Z = 1; Z < X; ++Z) (de.copyWithin(ye, 0, ce), (ye += ce));
              return (this.print(de, 0, ye), !0);
            }
            sendDeviceAttributesPrimary(U) {
              return (
                U.params[0] > 0 ||
                  (this._is("xterm") || this._is("rxvt-unicode") || this._is("screen")
                    ? this._coreService.triggerDataEvent(f.C0.ESC + "[?1;2c")
                    : this._is("linux") && this._coreService.triggerDataEvent(f.C0.ESC + "[?6c")),
                !0
              );
            }
            sendDeviceAttributesSecondary(U) {
              return (
                U.params[0] > 0 ||
                  (this._is("xterm")
                    ? this._coreService.triggerDataEvent(f.C0.ESC + "[>0;276;0c")
                    : this._is("rxvt-unicode")
                      ? this._coreService.triggerDataEvent(f.C0.ESC + "[>85;95;0c")
                      : this._is("linux")
                        ? this._coreService.triggerDataEvent(U.params[0] + "c")
                        : this._is("screen") && this._coreService.triggerDataEvent(f.C0.ESC + "[>83;40003;0c")),
                !0
              );
            }
            _is(U) {
              return (this._optionsService.rawOptions.termName + "").indexOf(U) === 0;
            }
            setMode(U) {
              for (let Y = 0; Y < U.length; Y++)
                switch (U.params[Y]) {
                  case 4:
                    this._coreService.modes.insertMode = !0;
                    break;
                  case 20:
                    this._optionsService.options.convertEol = !0;
                }
              return !0;
            }
            setModePrivate(U) {
              for (let Y = 0; Y < U.length; Y++)
                switch (U.params[Y]) {
                  case 1:
                    this._coreService.decPrivateModes.applicationCursorKeys = !0;
                    break;
                  case 2:
                    (this._charsetService.setgCharset(0, p.DEFAULT_CHARSET),
                      this._charsetService.setgCharset(1, p.DEFAULT_CHARSET),
                      this._charsetService.setgCharset(2, p.DEFAULT_CHARSET),
                      this._charsetService.setgCharset(3, p.DEFAULT_CHARSET));
                    break;
                  case 3:
                    this._optionsService.rawOptions.windowOptions.setWinLines &&
                      (this._bufferService.resize(132, this._bufferService.rows), this._onRequestReset.fire());
                    break;
                  case 6:
                    ((this._coreService.decPrivateModes.origin = !0), this._setCursor(0, 0));
                    break;
                  case 7:
                    this._coreService.decPrivateModes.wraparound = !0;
                    break;
                  case 12:
                    this._optionsService.options.cursorBlink = !0;
                    break;
                  case 45:
                    this._coreService.decPrivateModes.reverseWraparound = !0;
                    break;
                  case 66:
                    (this._logService.debug("Serial port requested application keypad."),
                      (this._coreService.decPrivateModes.applicationKeypad = !0),
                      this._onRequestSyncScrollBar.fire());
                    break;
                  case 9:
                    this._coreMouseService.activeProtocol = "X10";
                    break;
                  case 1e3:
                    this._coreMouseService.activeProtocol = "VT200";
                    break;
                  case 1002:
                    this._coreMouseService.activeProtocol = "DRAG";
                    break;
                  case 1003:
                    this._coreMouseService.activeProtocol = "ANY";
                    break;
                  case 1004:
                    ((this._coreService.decPrivateModes.sendFocus = !0), this._onRequestSendFocus.fire());
                    break;
                  case 1005:
                    this._logService.debug("DECSET 1005 not supported (see #2507)");
                    break;
                  case 1006:
                    this._coreMouseService.activeEncoding = "SGR";
                    break;
                  case 1015:
                    this._logService.debug("DECSET 1015 not supported (see #2507)");
                    break;
                  case 1016:
                    this._coreMouseService.activeEncoding = "SGR_PIXELS";
                    break;
                  case 25:
                    this._coreService.isCursorHidden = !1;
                    break;
                  case 1048:
                    this.saveCursor();
                    break;
                  case 1049:
                    this.saveCursor();
                  case 47:
                  case 1047:
                    (this._bufferService.buffers.activateAltBuffer(this._eraseAttrData()),
                      (this._coreService.isCursorInitialized = !0),
                      this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1),
                      this._onRequestSyncScrollBar.fire());
                    break;
                  case 2004:
                    this._coreService.decPrivateModes.bracketedPasteMode = !0;
                }
              return !0;
            }
            resetMode(U) {
              for (let Y = 0; Y < U.length; Y++)
                switch (U.params[Y]) {
                  case 4:
                    this._coreService.modes.insertMode = !1;
                    break;
                  case 20:
                    this._optionsService.options.convertEol = !1;
                }
              return !0;
            }
            resetModePrivate(U) {
              for (let Y = 0; Y < U.length; Y++)
                switch (U.params[Y]) {
                  case 1:
                    this._coreService.decPrivateModes.applicationCursorKeys = !1;
                    break;
                  case 3:
                    this._optionsService.rawOptions.windowOptions.setWinLines &&
                      (this._bufferService.resize(80, this._bufferService.rows), this._onRequestReset.fire());
                    break;
                  case 6:
                    ((this._coreService.decPrivateModes.origin = !1), this._setCursor(0, 0));
                    break;
                  case 7:
                    this._coreService.decPrivateModes.wraparound = !1;
                    break;
                  case 12:
                    this._optionsService.options.cursorBlink = !1;
                    break;
                  case 45:
                    this._coreService.decPrivateModes.reverseWraparound = !1;
                    break;
                  case 66:
                    (this._logService.debug("Switching back to normal keypad."),
                      (this._coreService.decPrivateModes.applicationKeypad = !1),
                      this._onRequestSyncScrollBar.fire());
                    break;
                  case 9:
                  case 1e3:
                  case 1002:
                  case 1003:
                    this._coreMouseService.activeProtocol = "NONE";
                    break;
                  case 1004:
                    this._coreService.decPrivateModes.sendFocus = !1;
                    break;
                  case 1005:
                    this._logService.debug("DECRST 1005 not supported (see #2507)");
                    break;
                  case 1006:
                  case 1016:
                    this._coreMouseService.activeEncoding = "DEFAULT";
                    break;
                  case 1015:
                    this._logService.debug("DECRST 1015 not supported (see #2507)");
                    break;
                  case 25:
                    this._coreService.isCursorHidden = !0;
                    break;
                  case 1048:
                    this.restoreCursor();
                    break;
                  case 1049:
                  case 47:
                  case 1047:
                    (this._bufferService.buffers.activateNormalBuffer(),
                      U.params[Y] === 1049 && this.restoreCursor(),
                      (this._coreService.isCursorInitialized = !0),
                      this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1),
                      this._onRequestSyncScrollBar.fire());
                    break;
                  case 2004:
                    this._coreService.decPrivateModes.bracketedPasteMode = !1;
                }
              return !0;
            }
            requestMode(U, Y) {
              let X = this._coreService.decPrivateModes,
                { activeProtocol: J, activeEncoding: q } = this._coreMouseService,
                ne = this._coreService,
                { buffers: de, cols: ce } = this._bufferService,
                { active: ye, alt: Z } = de,
                oe = this._optionsService.rawOptions,
                ue = (ge) => (ge ? 1 : 2),
                he = U.params[0];
              return (
                (se = he),
                (fe = Y
                  ? he === 2
                    ? 4
                    : he === 4
                      ? ue(ne.modes.insertMode)
                      : he === 12
                        ? 3
                        : he === 20
                          ? ue(oe.convertEol)
                          : 0
                  : he === 1
                    ? ue(X.applicationCursorKeys)
                    : he === 3
                      ? oe.windowOptions.setWinLines
                        ? ce === 80
                          ? 2
                          : ce === 132
                            ? 1
                            : 0
                        : 0
                      : he === 6
                        ? ue(X.origin)
                        : he === 7
                          ? ue(X.wraparound)
                          : he === 8
                            ? 3
                            : he === 9
                              ? ue(J === "X10")
                              : he === 12
                                ? ue(oe.cursorBlink)
                                : he === 25
                                  ? ue(!ne.isCursorHidden)
                                  : he === 45
                                    ? ue(X.reverseWraparound)
                                    : he === 66
                                      ? ue(X.applicationKeypad)
                                      : he === 67
                                        ? 4
                                        : he === 1e3
                                          ? ue(J === "VT200")
                                          : he === 1002
                                            ? ue(J === "DRAG")
                                            : he === 1003
                                              ? ue(J === "ANY")
                                              : he === 1004
                                                ? ue(X.sendFocus)
                                                : he === 1005
                                                  ? 4
                                                  : he === 1006
                                                    ? ue(q === "SGR")
                                                    : he === 1015
                                                      ? 4
                                                      : he === 1016
                                                        ? ue(q === "SGR_PIXELS")
                                                        : he === 1048
                                                          ? 1
                                                          : he === 47 || he === 1047 || he === 1049
                                                            ? ue(ye === Z)
                                                            : he === 2004
                                                              ? ue(X.bracketedPasteMode)
                                                              : 0),
                ne.triggerDataEvent(`${f.C0.ESC}[${Y ? "" : "?"}${se};${fe}$y`),
                !0
              );
              var se, fe;
            }
            _updateAttrColor(U, Y, X, J, q) {
              return (
                Y === 2
                  ? ((U |= 50331648), (U &= -16777216), (U |= C.AttributeData.fromColorRGB([X, J, q])))
                  : Y === 5 && ((U &= -50331904), (U |= 33554432 | (255 & X))),
                U
              );
            }
            _extractColor(U, Y, X) {
              let J = [0, 0, -1, 0, 0, 0],
                q = 0,
                ne = 0;
              do {
                if (((J[ne + q] = U.params[Y + ne]), U.hasSubParams(Y + ne))) {
                  let de = U.getSubParams(Y + ne),
                    ce = 0;
                  do (J[1] === 5 && (q = 1), (J[ne + ce + 1 + q] = de[ce]));
                  while (++ce < de.length && ce + ne + 1 + q < J.length);
                  break;
                }
                if ((J[1] === 5 && ne + q >= 2) || (J[1] === 2 && ne + q >= 5)) break;
                J[1] && (q = 1);
              } while (++ne + Y < U.length && ne + q < J.length);
              for (let de = 2; de < J.length; ++de) J[de] === -1 && (J[de] = 0);
              switch (J[0]) {
                case 38:
                  X.fg = this._updateAttrColor(X.fg, J[1], J[3], J[4], J[5]);
                  break;
                case 48:
                  X.bg = this._updateAttrColor(X.bg, J[1], J[3], J[4], J[5]);
                  break;
                case 58:
                  ((X.extended = X.extended.clone()),
                    (X.extended.underlineColor = this._updateAttrColor(
                      X.extended.underlineColor,
                      J[1],
                      J[3],
                      J[4],
                      J[5],
                    )));
              }
              return ne;
            }
            _processUnderline(U, Y) {
              ((Y.extended = Y.extended.clone()),
                (!~U || U > 5) && (U = 1),
                (Y.extended.underlineStyle = U),
                (Y.fg |= 268435456),
                U === 0 && (Y.fg &= -268435457),
                Y.updateExtended());
            }
            _processSGR0(U) {
              ((U.fg = A.DEFAULT_ATTR_DATA.fg),
                (U.bg = A.DEFAULT_ATTR_DATA.bg),
                (U.extended = U.extended.clone()),
                (U.extended.underlineStyle = 0),
                (U.extended.underlineColor &= -67108864),
                U.updateExtended());
            }
            charAttributes(U) {
              if (U.length === 1 && U.params[0] === 0) return (this._processSGR0(this._curAttrData), !0);
              let Y = U.length,
                X,
                J = this._curAttrData;
              for (let q = 0; q < Y; q++)
                ((X = U.params[q]),
                  X >= 30 && X <= 37
                    ? ((J.fg &= -50331904), (J.fg |= 16777216 | (X - 30)))
                    : X >= 40 && X <= 47
                      ? ((J.bg &= -50331904), (J.bg |= 16777216 | (X - 40)))
                      : X >= 90 && X <= 97
                        ? ((J.fg &= -50331904), (J.fg |= 16777224 | (X - 90)))
                        : X >= 100 && X <= 107
                          ? ((J.bg &= -50331904), (J.bg |= 16777224 | (X - 100)))
                          : X === 0
                            ? this._processSGR0(J)
                            : X === 1
                              ? (J.fg |= 134217728)
                              : X === 3
                                ? (J.bg |= 67108864)
                                : X === 4
                                  ? ((J.fg |= 268435456),
                                    this._processUnderline(U.hasSubParams(q) ? U.getSubParams(q)[0] : 1, J))
                                  : X === 5
                                    ? (J.fg |= 536870912)
                                    : X === 7
                                      ? (J.fg |= 67108864)
                                      : X === 8
                                        ? (J.fg |= 1073741824)
                                        : X === 9
                                          ? (J.fg |= 2147483648)
                                          : X === 2
                                            ? (J.bg |= 134217728)
                                            : X === 21
                                              ? this._processUnderline(2, J)
                                              : X === 22
                                                ? ((J.fg &= -134217729), (J.bg &= -134217729))
                                                : X === 23
                                                  ? (J.bg &= -67108865)
                                                  : X === 24
                                                    ? ((J.fg &= -268435457), this._processUnderline(0, J))
                                                    : X === 25
                                                      ? (J.fg &= -536870913)
                                                      : X === 27
                                                        ? (J.fg &= -67108865)
                                                        : X === 28
                                                          ? (J.fg &= -1073741825)
                                                          : X === 29
                                                            ? (J.fg &= 2147483647)
                                                            : X === 39
                                                              ? ((J.fg &= -67108864),
                                                                (J.fg |= 16777215 & A.DEFAULT_ATTR_DATA.fg))
                                                              : X === 49
                                                                ? ((J.bg &= -67108864),
                                                                  (J.bg |= 16777215 & A.DEFAULT_ATTR_DATA.bg))
                                                                : X === 38 || X === 48 || X === 58
                                                                  ? (q += this._extractColor(U, q, J))
                                                                  : X === 53
                                                                    ? (J.bg |= 1073741824)
                                                                    : X === 55
                                                                      ? (J.bg &= -1073741825)
                                                                      : X === 59
                                                                        ? ((J.extended = J.extended.clone()),
                                                                          (J.extended.underlineColor = -1),
                                                                          J.updateExtended())
                                                                        : X === 100
                                                                          ? ((J.fg &= -67108864),
                                                                            (J.fg |= 16777215 & A.DEFAULT_ATTR_DATA.fg),
                                                                            (J.bg &= -67108864),
                                                                            (J.bg |= 16777215 & A.DEFAULT_ATTR_DATA.bg))
                                                                          : this._logService.debug(
                                                                              "Unknown SGR attribute: %d.",
                                                                              X,
                                                                            ));
              return !0;
            }
            deviceStatus(U) {
              switch (U.params[0]) {
                case 5:
                  this._coreService.triggerDataEvent(`${f.C0.ESC}[0n`);
                  break;
                case 6:
                  let Y = this._activeBuffer.y + 1,
                    X = this._activeBuffer.x + 1;
                  this._coreService.triggerDataEvent(`${f.C0.ESC}[${Y};${X}R`);
              }
              return !0;
            }
            deviceStatusPrivate(U) {
              if (U.params[0] === 6) {
                let Y = this._activeBuffer.y + 1,
                  X = this._activeBuffer.x + 1;
                this._coreService.triggerDataEvent(`${f.C0.ESC}[?${Y};${X}R`);
              }
              return !0;
            }
            softReset(U) {
              return (
                (this._coreService.isCursorHidden = !1),
                this._onRequestSyncScrollBar.fire(),
                (this._activeBuffer.scrollTop = 0),
                (this._activeBuffer.scrollBottom = this._bufferService.rows - 1),
                (this._curAttrData = A.DEFAULT_ATTR_DATA.clone()),
                this._coreService.reset(),
                this._charsetService.reset(),
                (this._activeBuffer.savedX = 0),
                (this._activeBuffer.savedY = this._activeBuffer.ybase),
                (this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg),
                (this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg),
                (this._activeBuffer.savedCharset = this._charsetService.charset),
                (this._coreService.decPrivateModes.origin = !1),
                !0
              );
            }
            setCursorStyle(U) {
              let Y = U.params[0] || 1;
              switch (Y) {
                case 1:
                case 2:
                  this._optionsService.options.cursorStyle = "block";
                  break;
                case 3:
                case 4:
                  this._optionsService.options.cursorStyle = "underline";
                  break;
                case 5:
                case 6:
                  this._optionsService.options.cursorStyle = "bar";
              }
              let X = Y % 2 == 1;
              return ((this._optionsService.options.cursorBlink = X), !0);
            }
            setScrollRegion(U) {
              let Y = U.params[0] || 1,
                X;
              return (
                (U.length < 2 || (X = U.params[1]) > this._bufferService.rows || X === 0) &&
                  (X = this._bufferService.rows),
                X > Y &&
                  ((this._activeBuffer.scrollTop = Y - 1),
                  (this._activeBuffer.scrollBottom = X - 1),
                  this._setCursor(0, 0)),
                !0
              );
            }
            windowOptions(U) {
              if (!F(U.params[0], this._optionsService.rawOptions.windowOptions)) return !0;
              let Y = U.length > 1 ? U.params[1] : 0;
              switch (U.params[0]) {
                case 14:
                  Y !== 2 && this._onRequestWindowsOptionsReport.fire(B.GET_WIN_SIZE_PIXELS);
                  break;
                case 16:
                  this._onRequestWindowsOptionsReport.fire(B.GET_CELL_SIZE_PIXELS);
                  break;
                case 18:
                  this._bufferService &&
                    this._coreService.triggerDataEvent(
                      `${f.C0.ESC}[8;${this._bufferService.rows};${this._bufferService.cols}t`,
                    );
                  break;
                case 22:
                  ((Y !== 0 && Y !== 2) ||
                    (this._windowTitleStack.push(this._windowTitle),
                    this._windowTitleStack.length > 10 && this._windowTitleStack.shift()),
                    (Y !== 0 && Y !== 1) ||
                      (this._iconNameStack.push(this._iconName),
                      this._iconNameStack.length > 10 && this._iconNameStack.shift()));
                  break;
                case 23:
                  ((Y !== 0 && Y !== 2) ||
                    (this._windowTitleStack.length && this.setTitle(this._windowTitleStack.pop())),
                    (Y !== 0 && Y !== 1) ||
                      (this._iconNameStack.length && this.setIconName(this._iconNameStack.pop())));
              }
              return !0;
            }
            saveCursor(U) {
              return (
                (this._activeBuffer.savedX = this._activeBuffer.x),
                (this._activeBuffer.savedY = this._activeBuffer.ybase + this._activeBuffer.y),
                (this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg),
                (this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg),
                (this._activeBuffer.savedCharset = this._charsetService.charset),
                !0
              );
            }
            restoreCursor(U) {
              return (
                (this._activeBuffer.x = this._activeBuffer.savedX || 0),
                (this._activeBuffer.y = Math.max(this._activeBuffer.savedY - this._activeBuffer.ybase, 0)),
                (this._curAttrData.fg = this._activeBuffer.savedCurAttrData.fg),
                (this._curAttrData.bg = this._activeBuffer.savedCurAttrData.bg),
                (this._charsetService.charset = this._savedCharset),
                this._activeBuffer.savedCharset && (this._charsetService.charset = this._activeBuffer.savedCharset),
                this._restrictCursor(),
                !0
              );
            }
            setTitle(U) {
              return ((this._windowTitle = U), this._onTitleChange.fire(U), !0);
            }
            setIconName(U) {
              return ((this._iconName = U), !0);
            }
            setOrReportIndexedColor(U) {
              let Y = [],
                X = U.split(";");
              for (; X.length > 1; ) {
                let J = X.shift(),
                  q = X.shift();
                if (/^\d+$/.exec(J)) {
                  let ne = parseInt(J);
                  if (K(ne))
                    if (q === "?") Y.push({ type: 0, index: ne });
                    else {
                      let de = (0, D.parseColor)(q);
                      de && Y.push({ type: 1, index: ne, color: de });
                    }
                }
              }
              return (Y.length && this._onColor.fire(Y), !0);
            }
            setHyperlink(U) {
              let Y = U.split(";");
              return !(Y.length < 2) && (Y[1] ? this._createHyperlink(Y[0], Y[1]) : !Y[0] && this._finishHyperlink());
            }
            _createHyperlink(U, Y) {
              this._getCurrentLinkId() && this._finishHyperlink();
              let X = U.split(":"),
                J,
                q = X.findIndex((ne) => ne.startsWith("id="));
              return (
                q !== -1 && (J = X[q].slice(3) || void 0),
                (this._curAttrData.extended = this._curAttrData.extended.clone()),
                (this._curAttrData.extended.urlId = this._oscLinkService.registerLink({ id: J, uri: Y })),
                this._curAttrData.updateExtended(),
                !0
              );
            }
            _finishHyperlink() {
              return (
                (this._curAttrData.extended = this._curAttrData.extended.clone()),
                (this._curAttrData.extended.urlId = 0),
                this._curAttrData.updateExtended(),
                !0
              );
            }
            _setOrReportSpecialColor(U, Y) {
              let X = U.split(";");
              for (let J = 0; J < X.length && !(Y >= this._specialColors.length); ++J, ++Y)
                if (X[J] === "?") this._onColor.fire([{ type: 0, index: this._specialColors[Y] }]);
                else {
                  let q = (0, D.parseColor)(X[J]);
                  q && this._onColor.fire([{ type: 1, index: this._specialColors[Y], color: q }]);
                }
              return !0;
            }
            setOrReportFgColor(U) {
              return this._setOrReportSpecialColor(U, 0);
            }
            setOrReportBgColor(U) {
              return this._setOrReportSpecialColor(U, 1);
            }
            setOrReportCursorColor(U) {
              return this._setOrReportSpecialColor(U, 2);
            }
            restoreIndexedColor(U) {
              if (!U) return (this._onColor.fire([{ type: 2 }]), !0);
              let Y = [],
                X = U.split(";");
              for (let J = 0; J < X.length; ++J)
                if (/^\d+$/.exec(X[J])) {
                  let q = parseInt(X[J]);
                  K(q) && Y.push({ type: 2, index: q });
                }
              return (Y.length && this._onColor.fire(Y), !0);
            }
            restoreFgColor(U) {
              return (this._onColor.fire([{ type: 2, index: 256 }]), !0);
            }
            restoreBgColor(U) {
              return (this._onColor.fire([{ type: 2, index: 257 }]), !0);
            }
            restoreCursorColor(U) {
              return (this._onColor.fire([{ type: 2, index: 258 }]), !0);
            }
            nextLine() {
              return ((this._activeBuffer.x = 0), this.index(), !0);
            }
            keypadApplicationMode() {
              return (
                this._logService.debug("Serial port requested application keypad."),
                (this._coreService.decPrivateModes.applicationKeypad = !0),
                this._onRequestSyncScrollBar.fire(),
                !0
              );
            }
            keypadNumericMode() {
              return (
                this._logService.debug("Switching back to normal keypad."),
                (this._coreService.decPrivateModes.applicationKeypad = !1),
                this._onRequestSyncScrollBar.fire(),
                !0
              );
            }
            selectDefaultCharset() {
              return (this._charsetService.setgLevel(0), this._charsetService.setgCharset(0, p.DEFAULT_CHARSET), !0);
            }
            selectCharset(U) {
              return U.length !== 2
                ? (this.selectDefaultCharset(), !0)
                : (U[0] === "/" || this._charsetService.setgCharset(O[U[0]], p.CHARSETS[U[1]] || p.DEFAULT_CHARSET),
                  !0);
            }
            index() {
              return (
                this._restrictCursor(),
                this._activeBuffer.y++,
                this._activeBuffer.y === this._activeBuffer.scrollBottom + 1
                  ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData()))
                  : this._activeBuffer.y >= this._bufferService.rows &&
                    (this._activeBuffer.y = this._bufferService.rows - 1),
                this._restrictCursor(),
                !0
              );
            }
            tabSet() {
              return ((this._activeBuffer.tabs[this._activeBuffer.x] = !0), !0);
            }
            reverseIndex() {
              if ((this._restrictCursor(), this._activeBuffer.y === this._activeBuffer.scrollTop)) {
                let U = this._activeBuffer.scrollBottom - this._activeBuffer.scrollTop;
                (this._activeBuffer.lines.shiftElements(this._activeBuffer.ybase + this._activeBuffer.y, U, 1),
                  this._activeBuffer.lines.set(
                    this._activeBuffer.ybase + this._activeBuffer.y,
                    this._activeBuffer.getBlankLine(this._eraseAttrData()),
                  ),
                  this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom));
              } else (this._activeBuffer.y--, this._restrictCursor());
              return !0;
            }
            fullReset() {
              return (this._parser.reset(), this._onRequestReset.fire(), !0);
            }
            reset() {
              ((this._curAttrData = A.DEFAULT_ATTR_DATA.clone()),
                (this._eraseAttrDataInternal = A.DEFAULT_ATTR_DATA.clone()));
            }
            _eraseAttrData() {
              return (
                (this._eraseAttrDataInternal.bg &= -67108864),
                (this._eraseAttrDataInternal.bg |= 67108863 & this._curAttrData.bg),
                this._eraseAttrDataInternal
              );
            }
            setgLevel(U) {
              return (this._charsetService.setgLevel(U), !0);
            }
            screenAlignmentPattern() {
              let U = new v.CellData();
              ((U.content = 4194373),
                (U.fg = this._curAttrData.fg),
                (U.bg = this._curAttrData.bg),
                this._setCursor(0, 0));
              for (let Y = 0; Y < this._bufferService.rows; ++Y) {
                let X = this._activeBuffer.ybase + this._activeBuffer.y + Y,
                  J = this._activeBuffer.lines.get(X);
                J && (J.fill(U), (J.isWrapped = !1));
              }
              return (this._dirtyRowTracker.markAllDirty(), this._setCursor(0, 0), !0);
            }
            requestStatusString(U, Y) {
              let X = this._bufferService.buffer,
                J = this._optionsService.rawOptions;
              return ((q) => (this._coreService.triggerDataEvent(`${f.C0.ESC}${q}${f.C0.ESC}\\`), !0))(
                U === '"q'
                  ? `P1$r${this._curAttrData.isProtected() ? 1 : 0}"q`
                  : U === '"p'
                    ? 'P1$r61;1"p'
                    : U === "r"
                      ? `P1$r${X.scrollTop + 1};${X.scrollBottom + 1}r`
                      : U === "m"
                        ? "P1$r0m"
                        : U === " q"
                          ? `P1$r${{ block: 2, underline: 4, bar: 6 }[J.cursorStyle] - (J.cursorBlink ? 1 : 0)} q`
                          : "P0$r",
              );
            }
            markRangeDirty(U, Y) {
              this._dirtyRowTracker.markRangeDirty(U, Y);
            }
          }
          u.InputHandler = G;
          let Q = class {
            constructor(H) {
              ((this._bufferService = H), this.clearRange());
            }
            clearRange() {
              ((this.start = this._bufferService.buffer.y), (this.end = this._bufferService.buffer.y));
            }
            markDirty(H) {
              H < this.start ? (this.start = H) : H > this.end && (this.end = H);
            }
            markRangeDirty(H, U) {
              (H > U && ((L = H), (H = U), (U = L)),
                H < this.start && (this.start = H),
                U > this.end && (this.end = U));
            }
            markAllDirty() {
              this.markRangeDirty(0, this._bufferService.rows - 1);
            }
          };
          function K(H) {
            return 0 <= H && H < 256;
          }
          Q = m([d(0, x.IBufferService)], Q);
        },
        844: (a, u) => {
          function c(m) {
            for (let d of m) d.dispose();
            m.length = 0;
          }
          (Object.defineProperty(u, "__esModule", { value: !0 }),
            (u.getDisposeArrayDisposable =
              u.disposeArray =
              u.toDisposable =
              u.MutableDisposable =
              u.Disposable =
                void 0),
            (u.Disposable = class {
              constructor() {
                ((this._disposables = []), (this._isDisposed = !1));
              }
              dispose() {
                this._isDisposed = !0;
                for (let m of this._disposables) m.dispose();
                this._disposables.length = 0;
              }
              register(m) {
                return (this._disposables.push(m), m);
              }
              unregister(m) {
                let d = this._disposables.indexOf(m);
                d !== -1 && this._disposables.splice(d, 1);
              }
            }),
            (u.MutableDisposable = class {
              constructor() {
                this._isDisposed = !1;
              }
              get value() {
                return this._isDisposed ? void 0 : this._value;
              }
              set value(m) {
                this._isDisposed || m === this._value || (this._value?.dispose(), (this._value = m));
              }
              clear() {
                this.value = void 0;
              }
              dispose() {
                ((this._isDisposed = !0), this._value?.dispose(), (this._value = void 0));
              }
            }),
            (u.toDisposable = function (m) {
              return { dispose: m };
            }),
            (u.disposeArray = c),
            (u.getDisposeArrayDisposable = function (m) {
              return { dispose: () => c(m) };
            }));
        },
        114: (a, u) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }),
            (u.isChromeOS =
              u.isLinux =
              u.isWindows =
              u.isIphone =
              u.isIpad =
              u.isMac =
              u.getSafariVersion =
              u.isSafari =
              u.isLegacyEdge =
              u.isFirefox =
              u.isNode =
                void 0),
            (u.isNode = typeof process < "u" && "title" in process));
          let c = u.isNode ? "node" : navigator.userAgent,
            m = u.isNode ? "node" : navigator.platform;
          ((u.isFirefox = c.includes("Firefox")),
            (u.isLegacyEdge = c.includes("Edge")),
            (u.isSafari = /^((?!chrome|android).)*safari/i.test(c)),
            (u.getSafariVersion = function () {
              if (!u.isSafari) return 0;
              let d = c.match(/Version\/(\d+)/);
              return d === null || d.length < 2 ? 0 : parseInt(d[1]);
            }),
            (u.isMac = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(m)),
            (u.isIpad = m === "iPad"),
            (u.isIphone = m === "iPhone"),
            (u.isWindows = ["Windows", "Win16", "Win32", "WinCE"].includes(m)),
            (u.isLinux = m.indexOf("Linux") >= 0),
            (u.isChromeOS = /\bCrOS\b/.test(c)));
        },
        226: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }),
            (u.DebouncedIdleTask = u.IdleTaskQueue = u.PriorityTaskQueue = void 0));
          let m = c(114);
          class d {
            constructor() {
              ((this._tasks = []), (this._i = 0));
            }
            enqueue(h) {
              (this._tasks.push(h), this._start());
            }
            flush() {
              for (; this._i < this._tasks.length; ) this._tasks[this._i]() || this._i++;
              this.clear();
            }
            clear() {
              (this._idleCallback && (this._cancelCallback(this._idleCallback), (this._idleCallback = void 0)),
                (this._i = 0),
                (this._tasks.length = 0));
            }
            _start() {
              this._idleCallback || (this._idleCallback = this._requestCallback(this._process.bind(this)));
            }
            _process(h) {
              this._idleCallback = void 0;
              let g = 0,
                b = 0,
                A = h.timeRemaining(),
                y = 0;
              for (; this._i < this._tasks.length; ) {
                if (
                  ((g = Date.now()),
                  this._tasks[this._i]() || this._i++,
                  (g = Math.max(1, Date.now() - g)),
                  (b = Math.max(g, b)),
                  (y = h.timeRemaining()),
                  1.5 * b > y)
                )
                  return (
                    A - g < -20 &&
                      console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(A - g))}ms`),
                    void this._start()
                  );
                A = y;
              }
              this.clear();
            }
          }
          class f extends d {
            _requestCallback(h) {
              return setTimeout(() => h(this._createDeadline(16)));
            }
            _cancelCallback(h) {
              clearTimeout(h);
            }
            _createDeadline(h) {
              let g = Date.now() + h;
              return { timeRemaining: () => Math.max(0, g - Date.now()) };
            }
          }
          ((u.PriorityTaskQueue = f),
            (u.IdleTaskQueue =
              !m.isNode && "requestIdleCallback" in window
                ? class extends d {
                    _requestCallback(p) {
                      return requestIdleCallback(p);
                    }
                    _cancelCallback(p) {
                      cancelIdleCallback(p);
                    }
                  }
                : f),
            (u.DebouncedIdleTask = class {
              constructor() {
                this._queue = new u.IdleTaskQueue();
              }
              set(p) {
                (this._queue.clear(), this._queue.enqueue(p));
              }
              flush() {
                this._queue.flush();
              }
            }));
        },
        282: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.updateWindowsModeWrappedState = void 0));
          let m = c(643);
          u.updateWindowsModeWrappedState = function (d) {
            let f = d.buffer.lines.get(d.buffer.ybase + d.buffer.y - 1),
              p = f?.get(d.cols - 1),
              h = d.buffer.lines.get(d.buffer.ybase + d.buffer.y);
            h &&
              p &&
              (h.isWrapped =
                p[m.CHAR_DATA_CODE_INDEX] !== m.NULL_CELL_CODE && p[m.CHAR_DATA_CODE_INDEX] !== m.WHITESPACE_CELL_CODE);
          };
        },
        734: (a, u) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.ExtendedAttrs = u.AttributeData = void 0));
          class c {
            constructor() {
              ((this.fg = 0), (this.bg = 0), (this.extended = new m()));
            }
            static toColorRGB(f) {
              return [(f >>> 16) & 255, (f >>> 8) & 255, 255 & f];
            }
            static fromColorRGB(f) {
              return ((255 & f[0]) << 16) | ((255 & f[1]) << 8) | (255 & f[2]);
            }
            clone() {
              let f = new c();
              return ((f.fg = this.fg), (f.bg = this.bg), (f.extended = this.extended.clone()), f);
            }
            isInverse() {
              return 67108864 & this.fg;
            }
            isBold() {
              return 134217728 & this.fg;
            }
            isUnderline() {
              return this.hasExtendedAttrs() && this.extended.underlineStyle !== 0 ? 1 : 268435456 & this.fg;
            }
            isBlink() {
              return 536870912 & this.fg;
            }
            isInvisible() {
              return 1073741824 & this.fg;
            }
            isItalic() {
              return 67108864 & this.bg;
            }
            isDim() {
              return 134217728 & this.bg;
            }
            isStrikethrough() {
              return 2147483648 & this.fg;
            }
            isProtected() {
              return 536870912 & this.bg;
            }
            isOverline() {
              return 1073741824 & this.bg;
            }
            getFgColorMode() {
              return 50331648 & this.fg;
            }
            getBgColorMode() {
              return 50331648 & this.bg;
            }
            isFgRGB() {
              return (50331648 & this.fg) == 50331648;
            }
            isBgRGB() {
              return (50331648 & this.bg) == 50331648;
            }
            isFgPalette() {
              return (50331648 & this.fg) == 16777216 || (50331648 & this.fg) == 33554432;
            }
            isBgPalette() {
              return (50331648 & this.bg) == 16777216 || (50331648 & this.bg) == 33554432;
            }
            isFgDefault() {
              return (50331648 & this.fg) == 0;
            }
            isBgDefault() {
              return (50331648 & this.bg) == 0;
            }
            isAttributeDefault() {
              return this.fg === 0 && this.bg === 0;
            }
            getFgColor() {
              switch (50331648 & this.fg) {
                case 16777216:
                case 33554432:
                  return 255 & this.fg;
                case 50331648:
                  return 16777215 & this.fg;
                default:
                  return -1;
              }
            }
            getBgColor() {
              switch (50331648 & this.bg) {
                case 16777216:
                case 33554432:
                  return 255 & this.bg;
                case 50331648:
                  return 16777215 & this.bg;
                default:
                  return -1;
              }
            }
            hasExtendedAttrs() {
              return 268435456 & this.bg;
            }
            updateExtended() {
              this.extended.isEmpty() ? (this.bg &= -268435457) : (this.bg |= 268435456);
            }
            getUnderlineColor() {
              if (268435456 & this.bg && ~this.extended.underlineColor)
                switch (50331648 & this.extended.underlineColor) {
                  case 16777216:
                  case 33554432:
                    return 255 & this.extended.underlineColor;
                  case 50331648:
                    return 16777215 & this.extended.underlineColor;
                  default:
                    return this.getFgColor();
                }
              return this.getFgColor();
            }
            getUnderlineColorMode() {
              return 268435456 & this.bg && ~this.extended.underlineColor
                ? 50331648 & this.extended.underlineColor
                : this.getFgColorMode();
            }
            isUnderlineColorRGB() {
              return 268435456 & this.bg && ~this.extended.underlineColor
                ? (50331648 & this.extended.underlineColor) == 50331648
                : this.isFgRGB();
            }
            isUnderlineColorPalette() {
              return 268435456 & this.bg && ~this.extended.underlineColor
                ? (50331648 & this.extended.underlineColor) == 16777216 ||
                    (50331648 & this.extended.underlineColor) == 33554432
                : this.isFgPalette();
            }
            isUnderlineColorDefault() {
              return 268435456 & this.bg && ~this.extended.underlineColor
                ? (50331648 & this.extended.underlineColor) == 0
                : this.isFgDefault();
            }
            getUnderlineStyle() {
              return 268435456 & this.fg ? (268435456 & this.bg ? this.extended.underlineStyle : 1) : 0;
            }
            getUnderlineVariantOffset() {
              return this.extended.underlineVariantOffset;
            }
          }
          u.AttributeData = c;
          class m {
            get ext() {
              return this._urlId ? (-469762049 & this._ext) | (this.underlineStyle << 26) : this._ext;
            }
            set ext(f) {
              this._ext = f;
            }
            get underlineStyle() {
              return this._urlId ? 5 : (469762048 & this._ext) >> 26;
            }
            set underlineStyle(f) {
              ((this._ext &= -469762049), (this._ext |= (f << 26) & 469762048));
            }
            get underlineColor() {
              return 67108863 & this._ext;
            }
            set underlineColor(f) {
              ((this._ext &= -67108864), (this._ext |= 67108863 & f));
            }
            get urlId() {
              return this._urlId;
            }
            set urlId(f) {
              this._urlId = f;
            }
            get underlineVariantOffset() {
              let f = (3758096384 & this._ext) >> 29;
              return f < 0 ? 4294967288 ^ f : f;
            }
            set underlineVariantOffset(f) {
              ((this._ext &= 536870911), (this._ext |= (f << 29) & 3758096384));
            }
            constructor(f = 0, p = 0) {
              ((this._ext = 0), (this._urlId = 0), (this._ext = f), (this._urlId = p));
            }
            clone() {
              return new m(this._ext, this._urlId);
            }
            isEmpty() {
              return this.underlineStyle === 0 && this._urlId === 0;
            }
          }
          u.ExtendedAttrs = m;
        },
        92: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.Buffer = u.MAX_BUFFER_SIZE = void 0));
          let m = c(349),
            d = c(226),
            f = c(734),
            p = c(437),
            h = c(634),
            g = c(511),
            b = c(643),
            A = c(863),
            y = c(116);
          ((u.MAX_BUFFER_SIZE = 4294967295),
            (u.Buffer = class {
              constructor(E, v, C) {
                ((this._hasScrollback = E),
                  (this._optionsService = v),
                  (this._bufferService = C),
                  (this.ydisp = 0),
                  (this.ybase = 0),
                  (this.y = 0),
                  (this.x = 0),
                  (this.tabs = {}),
                  (this.savedY = 0),
                  (this.savedX = 0),
                  (this.savedCurAttrData = p.DEFAULT_ATTR_DATA.clone()),
                  (this.savedCharset = y.DEFAULT_CHARSET),
                  (this.markers = []),
                  (this._nullCell = g.CellData.fromCharData([
                    0,
                    b.NULL_CELL_CHAR,
                    b.NULL_CELL_WIDTH,
                    b.NULL_CELL_CODE,
                  ])),
                  (this._whitespaceCell = g.CellData.fromCharData([
                    0,
                    b.WHITESPACE_CELL_CHAR,
                    b.WHITESPACE_CELL_WIDTH,
                    b.WHITESPACE_CELL_CODE,
                  ])),
                  (this._isClearing = !1),
                  (this._memoryCleanupQueue = new d.IdleTaskQueue()),
                  (this._memoryCleanupPosition = 0),
                  (this._cols = this._bufferService.cols),
                  (this._rows = this._bufferService.rows),
                  (this.lines = new m.CircularList(this._getCorrectBufferLength(this._rows))),
                  (this.scrollTop = 0),
                  (this.scrollBottom = this._rows - 1),
                  this.setupTabStops());
              }
              getNullCell(E) {
                return (
                  E
                    ? ((this._nullCell.fg = E.fg), (this._nullCell.bg = E.bg), (this._nullCell.extended = E.extended))
                    : ((this._nullCell.fg = 0),
                      (this._nullCell.bg = 0),
                      (this._nullCell.extended = new f.ExtendedAttrs())),
                  this._nullCell
                );
              }
              getWhitespaceCell(E) {
                return (
                  E
                    ? ((this._whitespaceCell.fg = E.fg),
                      (this._whitespaceCell.bg = E.bg),
                      (this._whitespaceCell.extended = E.extended))
                    : ((this._whitespaceCell.fg = 0),
                      (this._whitespaceCell.bg = 0),
                      (this._whitespaceCell.extended = new f.ExtendedAttrs())),
                  this._whitespaceCell
                );
              }
              getBlankLine(E, v) {
                return new p.BufferLine(this._bufferService.cols, this.getNullCell(E), v);
              }
              get hasScrollback() {
                return this._hasScrollback && this.lines.maxLength > this._rows;
              }
              get isCursorInViewport() {
                let E = this.ybase + this.y - this.ydisp;
                return E >= 0 && E < this._rows;
              }
              _getCorrectBufferLength(E) {
                if (!this._hasScrollback) return E;
                let v = E + this._optionsService.rawOptions.scrollback;
                return v > u.MAX_BUFFER_SIZE ? u.MAX_BUFFER_SIZE : v;
              }
              fillViewportRows(E) {
                if (this.lines.length === 0) {
                  E === void 0 && (E = p.DEFAULT_ATTR_DATA);
                  let v = this._rows;
                  for (; v--; ) this.lines.push(this.getBlankLine(E));
                }
              }
              clear() {
                ((this.ydisp = 0),
                  (this.ybase = 0),
                  (this.y = 0),
                  (this.x = 0),
                  (this.lines = new m.CircularList(this._getCorrectBufferLength(this._rows))),
                  (this.scrollTop = 0),
                  (this.scrollBottom = this._rows - 1),
                  this.setupTabStops());
              }
              resize(E, v) {
                let C = this.getNullCell(p.DEFAULT_ATTR_DATA),
                  x = 0,
                  k = this._getCorrectBufferLength(v);
                if ((k > this.lines.maxLength && (this.lines.maxLength = k), this.lines.length > 0)) {
                  if (this._cols < E) for (let P = 0; P < this.lines.length; P++) x += +this.lines.get(P).resize(E, C);
                  let R = 0;
                  if (this._rows < v)
                    for (let P = this._rows; P < v; P++)
                      this.lines.length < v + this.ybase &&
                        (this._optionsService.rawOptions.windowsMode ||
                        this._optionsService.rawOptions.windowsPty.backend !== void 0 ||
                        this._optionsService.rawOptions.windowsPty.buildNumber !== void 0
                          ? this.lines.push(new p.BufferLine(E, C))
                          : this.ybase > 0 && this.lines.length <= this.ybase + this.y + R + 1
                            ? (this.ybase--, R++, this.ydisp > 0 && this.ydisp--)
                            : this.lines.push(new p.BufferLine(E, C)));
                  else
                    for (let P = this._rows; P > v; P--)
                      this.lines.length > v + this.ybase &&
                        (this.lines.length > this.ybase + this.y + 1 ? this.lines.pop() : (this.ybase++, this.ydisp++));
                  if (k < this.lines.maxLength) {
                    let P = this.lines.length - k;
                    (P > 0 &&
                      (this.lines.trimStart(P),
                      (this.ybase = Math.max(this.ybase - P, 0)),
                      (this.ydisp = Math.max(this.ydisp - P, 0)),
                      (this.savedY = Math.max(this.savedY - P, 0))),
                      (this.lines.maxLength = k));
                  }
                  ((this.x = Math.min(this.x, E - 1)),
                    (this.y = Math.min(this.y, v - 1)),
                    R && (this.y += R),
                    (this.savedX = Math.min(this.savedX, E - 1)),
                    (this.scrollTop = 0));
                }
                if (((this.scrollBottom = v - 1), this._isReflowEnabled && (this._reflow(E, v), this._cols > E)))
                  for (let R = 0; R < this.lines.length; R++) x += +this.lines.get(R).resize(E, C);
                ((this._cols = E),
                  (this._rows = v),
                  this._memoryCleanupQueue.clear(),
                  x > 0.1 * this.lines.length &&
                    ((this._memoryCleanupPosition = 0),
                    this._memoryCleanupQueue.enqueue(() => this._batchedMemoryCleanup())));
              }
              _batchedMemoryCleanup() {
                let E = !0;
                this._memoryCleanupPosition >= this.lines.length && ((this._memoryCleanupPosition = 0), (E = !1));
                let v = 0;
                for (; this._memoryCleanupPosition < this.lines.length; )
                  if (((v += this.lines.get(this._memoryCleanupPosition++).cleanupMemory()), v > 100)) return !0;
                return E;
              }
              get _isReflowEnabled() {
                let E = this._optionsService.rawOptions.windowsPty;
                return E && E.buildNumber
                  ? this._hasScrollback && E.backend === "conpty" && E.buildNumber >= 21376
                  : this._hasScrollback && !this._optionsService.rawOptions.windowsMode;
              }
              _reflow(E, v) {
                this._cols !== E && (E > this._cols ? this._reflowLarger(E, v) : this._reflowSmaller(E, v));
              }
              _reflowLarger(E, v) {
                let C = (0, h.reflowLargerGetLinesToRemove)(
                  this.lines,
                  this._cols,
                  E,
                  this.ybase + this.y,
                  this.getNullCell(p.DEFAULT_ATTR_DATA),
                );
                if (C.length > 0) {
                  let x = (0, h.reflowLargerCreateNewLayout)(this.lines, C);
                  ((0, h.reflowLargerApplyNewLayout)(this.lines, x.layout),
                    this._reflowLargerAdjustViewport(E, v, x.countRemoved));
                }
              }
              _reflowLargerAdjustViewport(E, v, C) {
                let x = this.getNullCell(p.DEFAULT_ATTR_DATA),
                  k = C;
                for (; k-- > 0; )
                  this.ybase === 0
                    ? (this.y > 0 && this.y--, this.lines.length < v && this.lines.push(new p.BufferLine(E, x)))
                    : (this.ydisp === this.ybase && this.ydisp--, this.ybase--);
                this.savedY = Math.max(this.savedY - C, 0);
              }
              _reflowSmaller(E, v) {
                let C = this.getNullCell(p.DEFAULT_ATTR_DATA),
                  x = [],
                  k = 0;
                for (let R = this.lines.length - 1; R >= 0; R--) {
                  let P = this.lines.get(R);
                  if (!P || (!P.isWrapped && P.getTrimmedLength() <= E)) continue;
                  let D = [P];
                  for (; P.isWrapped && R > 0; ) ((P = this.lines.get(--R)), D.unshift(P));
                  let O = this.ybase + this.y;
                  if (O >= R && O < R + D.length) continue;
                  let N = D[D.length - 1].getTrimmedLength(),
                    F = (0, h.reflowSmallerGetNewLineLengths)(D, this._cols, E),
                    B = F.length - D.length,
                    L;
                  L =
                    this.ybase === 0 && this.y !== this.lines.length - 1
                      ? Math.max(0, this.y - this.lines.maxLength + B)
                      : Math.max(0, this.lines.length - this.lines.maxLength + B);
                  let G = [];
                  for (let X = 0; X < B; X++) {
                    let J = this.getBlankLine(p.DEFAULT_ATTR_DATA, !0);
                    G.push(J);
                  }
                  (G.length > 0 && (x.push({ start: R + D.length + k, newLines: G }), (k += G.length)), D.push(...G));
                  let Q = F.length - 1,
                    K = F[Q];
                  K === 0 && (Q--, (K = F[Q]));
                  let H = D.length - B - 1,
                    U = N;
                  for (; H >= 0; ) {
                    let X = Math.min(U, K);
                    if (D[Q] === void 0) break;
                    if (
                      (D[Q].copyCellsFrom(D[H], U - X, K - X, X, !0),
                      (K -= X),
                      K === 0 && (Q--, (K = F[Q])),
                      (U -= X),
                      U === 0)
                    ) {
                      H--;
                      let J = Math.max(H, 0);
                      U = (0, h.getWrappedLineTrimmedLength)(D, J, this._cols);
                    }
                  }
                  for (let X = 0; X < D.length; X++) F[X] < E && D[X].setCell(F[X], C);
                  let Y = B - L;
                  for (; Y-- > 0; )
                    this.ybase === 0
                      ? this.y < v - 1
                        ? (this.y++, this.lines.pop())
                        : (this.ybase++, this.ydisp++)
                      : this.ybase < Math.min(this.lines.maxLength, this.lines.length + k) - v &&
                        (this.ybase === this.ydisp && this.ydisp++, this.ybase++);
                  this.savedY = Math.min(this.savedY + B, this.ybase + v - 1);
                }
                if (x.length > 0) {
                  let R = [],
                    P = [];
                  for (let Q = 0; Q < this.lines.length; Q++) P.push(this.lines.get(Q));
                  let D = this.lines.length,
                    O = D - 1,
                    N = 0,
                    F = x[N];
                  this.lines.length = Math.min(this.lines.maxLength, this.lines.length + k);
                  let B = 0;
                  for (let Q = Math.min(this.lines.maxLength - 1, D + k - 1); Q >= 0; Q--)
                    if (F && F.start > O + B) {
                      for (let K = F.newLines.length - 1; K >= 0; K--) this.lines.set(Q--, F.newLines[K]);
                      (Q++,
                        R.push({ index: O + 1, amount: F.newLines.length }),
                        (B += F.newLines.length),
                        (F = x[++N]));
                    } else this.lines.set(Q, P[O--]);
                  let L = 0;
                  for (let Q = R.length - 1; Q >= 0; Q--)
                    ((R[Q].index += L), this.lines.onInsertEmitter.fire(R[Q]), (L += R[Q].amount));
                  let G = Math.max(0, D + k - this.lines.maxLength);
                  G > 0 && this.lines.onTrimEmitter.fire(G);
                }
              }
              translateBufferLineToString(E, v, C = 0, x) {
                let k = this.lines.get(E);
                return k ? k.translateToString(v, C, x) : "";
              }
              getWrappedRangeForLine(E) {
                let v = E,
                  C = E;
                for (; v > 0 && this.lines.get(v).isWrapped; ) v--;
                for (; C + 1 < this.lines.length && this.lines.get(C + 1).isWrapped; ) C++;
                return { first: v, last: C };
              }
              setupTabStops(E) {
                for (
                  E != null ? this.tabs[E] || (E = this.prevStop(E)) : ((this.tabs = {}), (E = 0));
                  E < this._cols;
                  E += this._optionsService.rawOptions.tabStopWidth
                )
                  this.tabs[E] = !0;
              }
              prevStop(E) {
                for (E == null && (E = this.x); !this.tabs[--E] && E > 0; );
                return E >= this._cols ? this._cols - 1 : E < 0 ? 0 : E;
              }
              nextStop(E) {
                for (E == null && (E = this.x); !this.tabs[++E] && E < this._cols; );
                return E >= this._cols ? this._cols - 1 : E < 0 ? 0 : E;
              }
              clearMarkers(E) {
                this._isClearing = !0;
                for (let v = 0; v < this.markers.length; v++)
                  this.markers[v].line === E && (this.markers[v].dispose(), this.markers.splice(v--, 1));
                this._isClearing = !1;
              }
              clearAllMarkers() {
                this._isClearing = !0;
                for (let E = 0; E < this.markers.length; E++) (this.markers[E].dispose(), this.markers.splice(E--, 1));
                this._isClearing = !1;
              }
              addMarker(E) {
                let v = new A.Marker(E);
                return (
                  this.markers.push(v),
                  v.register(
                    this.lines.onTrim((C) => {
                      ((v.line -= C), v.line < 0 && v.dispose());
                    }),
                  ),
                  v.register(
                    this.lines.onInsert((C) => {
                      v.line >= C.index && (v.line += C.amount);
                    }),
                  ),
                  v.register(
                    this.lines.onDelete((C) => {
                      (v.line >= C.index && v.line < C.index + C.amount && v.dispose(),
                        v.line > C.index && (v.line -= C.amount));
                    }),
                  ),
                  v.register(v.onDispose(() => this._removeMarker(v))),
                  v
                );
              }
              _removeMarker(E) {
                this._isClearing || this.markers.splice(this.markers.indexOf(E), 1);
              }
            }));
        },
        437: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.BufferLine = u.DEFAULT_ATTR_DATA = void 0));
          let m = c(734),
            d = c(511),
            f = c(643),
            p = c(482);
          u.DEFAULT_ATTR_DATA = Object.freeze(new m.AttributeData());
          let h = 0;
          class g {
            constructor(A, y, E = !1) {
              ((this.isWrapped = E),
                (this._combined = {}),
                (this._extendedAttrs = {}),
                (this._data = new Uint32Array(3 * A)));
              let v = y || d.CellData.fromCharData([0, f.NULL_CELL_CHAR, f.NULL_CELL_WIDTH, f.NULL_CELL_CODE]);
              for (let C = 0; C < A; ++C) this.setCell(C, v);
              this.length = A;
            }
            get(A) {
              let y = this._data[3 * A + 0],
                E = 2097151 & y;
              return [
                this._data[3 * A + 1],
                2097152 & y ? this._combined[A] : E ? (0, p.stringFromCodePoint)(E) : "",
                y >> 22,
                2097152 & y ? this._combined[A].charCodeAt(this._combined[A].length - 1) : E,
              ];
            }
            set(A, y) {
              ((this._data[3 * A + 1] = y[f.CHAR_DATA_ATTR_INDEX]),
                y[f.CHAR_DATA_CHAR_INDEX].length > 1
                  ? ((this._combined[A] = y[1]),
                    (this._data[3 * A + 0] = 2097152 | A | (y[f.CHAR_DATA_WIDTH_INDEX] << 22)))
                  : (this._data[3 * A + 0] =
                      y[f.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | (y[f.CHAR_DATA_WIDTH_INDEX] << 22)));
            }
            getWidth(A) {
              return this._data[3 * A + 0] >> 22;
            }
            hasWidth(A) {
              return 12582912 & this._data[3 * A + 0];
            }
            getFg(A) {
              return this._data[3 * A + 1];
            }
            getBg(A) {
              return this._data[3 * A + 2];
            }
            hasContent(A) {
              return 4194303 & this._data[3 * A + 0];
            }
            getCodePoint(A) {
              let y = this._data[3 * A + 0];
              return 2097152 & y ? this._combined[A].charCodeAt(this._combined[A].length - 1) : 2097151 & y;
            }
            isCombined(A) {
              return 2097152 & this._data[3 * A + 0];
            }
            getString(A) {
              let y = this._data[3 * A + 0];
              return 2097152 & y ? this._combined[A] : 2097151 & y ? (0, p.stringFromCodePoint)(2097151 & y) : "";
            }
            isProtected(A) {
              return 536870912 & this._data[3 * A + 2];
            }
            loadCell(A, y) {
              return (
                (h = 3 * A),
                (y.content = this._data[h + 0]),
                (y.fg = this._data[h + 1]),
                (y.bg = this._data[h + 2]),
                2097152 & y.content && (y.combinedData = this._combined[A]),
                268435456 & y.bg && (y.extended = this._extendedAttrs[A]),
                y
              );
            }
            setCell(A, y) {
              (2097152 & y.content && (this._combined[A] = y.combinedData),
                268435456 & y.bg && (this._extendedAttrs[A] = y.extended),
                (this._data[3 * A + 0] = y.content),
                (this._data[3 * A + 1] = y.fg),
                (this._data[3 * A + 2] = y.bg));
            }
            setCellFromCodepoint(A, y, E, v) {
              (268435456 & v.bg && (this._extendedAttrs[A] = v.extended),
                (this._data[3 * A + 0] = y | (E << 22)),
                (this._data[3 * A + 1] = v.fg),
                (this._data[3 * A + 2] = v.bg));
            }
            addCodepointToCell(A, y, E) {
              let v = this._data[3 * A + 0];
              (2097152 & v
                ? (this._combined[A] += (0, p.stringFromCodePoint)(y))
                : 2097151 & v
                  ? ((this._combined[A] = (0, p.stringFromCodePoint)(2097151 & v) + (0, p.stringFromCodePoint)(y)),
                    (v &= -2097152),
                    (v |= 2097152))
                  : (v = y | 4194304),
                E && ((v &= -12582913), (v |= E << 22)),
                (this._data[3 * A + 0] = v));
            }
            insertCells(A, y, E) {
              if (
                ((A %= this.length) && this.getWidth(A - 1) === 2 && this.setCellFromCodepoint(A - 1, 0, 1, E),
                y < this.length - A)
              ) {
                let v = new d.CellData();
                for (let C = this.length - A - y - 1; C >= 0; --C) this.setCell(A + y + C, this.loadCell(A + C, v));
                for (let C = 0; C < y; ++C) this.setCell(A + C, E);
              } else for (let v = A; v < this.length; ++v) this.setCell(v, E);
              this.getWidth(this.length - 1) === 2 && this.setCellFromCodepoint(this.length - 1, 0, 1, E);
            }
            deleteCells(A, y, E) {
              if (((A %= this.length), y < this.length - A)) {
                let v = new d.CellData();
                for (let C = 0; C < this.length - A - y; ++C) this.setCell(A + C, this.loadCell(A + y + C, v));
                for (let C = this.length - y; C < this.length; ++C) this.setCell(C, E);
              } else for (let v = A; v < this.length; ++v) this.setCell(v, E);
              (A && this.getWidth(A - 1) === 2 && this.setCellFromCodepoint(A - 1, 0, 1, E),
                this.getWidth(A) !== 0 || this.hasContent(A) || this.setCellFromCodepoint(A, 0, 1, E));
            }
            replaceCells(A, y, E, v = !1) {
              if (v)
                for (
                  A &&
                    this.getWidth(A - 1) === 2 &&
                    !this.isProtected(A - 1) &&
                    this.setCellFromCodepoint(A - 1, 0, 1, E),
                    y < this.length &&
                      this.getWidth(y - 1) === 2 &&
                      !this.isProtected(y) &&
                      this.setCellFromCodepoint(y, 0, 1, E);
                  A < y && A < this.length;
                )
                  (this.isProtected(A) || this.setCell(A, E), A++);
              else
                for (
                  A && this.getWidth(A - 1) === 2 && this.setCellFromCodepoint(A - 1, 0, 1, E),
                    y < this.length && this.getWidth(y - 1) === 2 && this.setCellFromCodepoint(y, 0, 1, E);
                  A < y && A < this.length;
                )
                  this.setCell(A++, E);
            }
            resize(A, y) {
              if (A === this.length) return 4 * this._data.length * 2 < this._data.buffer.byteLength;
              let E = 3 * A;
              if (A > this.length) {
                if (this._data.buffer.byteLength >= 4 * E) this._data = new Uint32Array(this._data.buffer, 0, E);
                else {
                  let v = new Uint32Array(E);
                  (v.set(this._data), (this._data = v));
                }
                for (let v = this.length; v < A; ++v) this.setCell(v, y);
              } else {
                this._data = this._data.subarray(0, E);
                let v = Object.keys(this._combined);
                for (let x = 0; x < v.length; x++) {
                  let k = parseInt(v[x], 10);
                  k >= A && delete this._combined[k];
                }
                let C = Object.keys(this._extendedAttrs);
                for (let x = 0; x < C.length; x++) {
                  let k = parseInt(C[x], 10);
                  k >= A && delete this._extendedAttrs[k];
                }
              }
              return ((this.length = A), 4 * E * 2 < this._data.buffer.byteLength);
            }
            cleanupMemory() {
              if (4 * this._data.length * 2 < this._data.buffer.byteLength) {
                let A = new Uint32Array(this._data.length);
                return (A.set(this._data), (this._data = A), 1);
              }
              return 0;
            }
            fill(A, y = !1) {
              if (y) for (let E = 0; E < this.length; ++E) this.isProtected(E) || this.setCell(E, A);
              else {
                ((this._combined = {}), (this._extendedAttrs = {}));
                for (let E = 0; E < this.length; ++E) this.setCell(E, A);
              }
            }
            copyFrom(A) {
              (this.length !== A.length ? (this._data = new Uint32Array(A._data)) : this._data.set(A._data),
                (this.length = A.length),
                (this._combined = {}));
              for (let y in A._combined) this._combined[y] = A._combined[y];
              this._extendedAttrs = {};
              for (let y in A._extendedAttrs) this._extendedAttrs[y] = A._extendedAttrs[y];
              this.isWrapped = A.isWrapped;
            }
            clone() {
              let A = new g(0);
              ((A._data = new Uint32Array(this._data)), (A.length = this.length));
              for (let y in this._combined) A._combined[y] = this._combined[y];
              for (let y in this._extendedAttrs) A._extendedAttrs[y] = this._extendedAttrs[y];
              return ((A.isWrapped = this.isWrapped), A);
            }
            getTrimmedLength() {
              for (let A = this.length - 1; A >= 0; --A)
                if (4194303 & this._data[3 * A + 0]) return A + (this._data[3 * A + 0] >> 22);
              return 0;
            }
            getNoBgTrimmedLength() {
              for (let A = this.length - 1; A >= 0; --A)
                if (4194303 & this._data[3 * A + 0] || 50331648 & this._data[3 * A + 2])
                  return A + (this._data[3 * A + 0] >> 22);
              return 0;
            }
            copyCellsFrom(A, y, E, v, C) {
              let x = A._data;
              if (C)
                for (let R = v - 1; R >= 0; R--) {
                  for (let P = 0; P < 3; P++) this._data[3 * (E + R) + P] = x[3 * (y + R) + P];
                  268435456 & x[3 * (y + R) + 2] && (this._extendedAttrs[E + R] = A._extendedAttrs[y + R]);
                }
              else
                for (let R = 0; R < v; R++) {
                  for (let P = 0; P < 3; P++) this._data[3 * (E + R) + P] = x[3 * (y + R) + P];
                  268435456 & x[3 * (y + R) + 2] && (this._extendedAttrs[E + R] = A._extendedAttrs[y + R]);
                }
              let k = Object.keys(A._combined);
              for (let R = 0; R < k.length; R++) {
                let P = parseInt(k[R], 10);
                P >= y && (this._combined[P - y + E] = A._combined[P]);
              }
            }
            translateToString(A, y, E, v) {
              ((y = y ?? 0),
                (E = E ?? this.length),
                A && (E = Math.min(E, this.getTrimmedLength())),
                v && (v.length = 0));
              let C = "";
              for (; y < E; ) {
                let x = this._data[3 * y + 0],
                  k = 2097151 & x,
                  R = 2097152 & x ? this._combined[y] : k ? (0, p.stringFromCodePoint)(k) : f.WHITESPACE_CELL_CHAR;
                if (((C += R), v)) for (let P = 0; P < R.length; ++P) v.push(y);
                y += x >> 22 || 1;
              }
              return (v && v.push(y), C);
            }
          }
          u.BufferLine = g;
        },
        634: (a, u) => {
          function c(m, d, f) {
            if (d === m.length - 1) return m[d].getTrimmedLength();
            let p = !m[d].hasContent(f - 1) && m[d].getWidth(f - 1) === 1,
              h = m[d + 1].getWidth(0) === 2;
            return p && h ? f - 1 : f;
          }
          (Object.defineProperty(u, "__esModule", { value: !0 }),
            (u.getWrappedLineTrimmedLength =
              u.reflowSmallerGetNewLineLengths =
              u.reflowLargerApplyNewLayout =
              u.reflowLargerCreateNewLayout =
              u.reflowLargerGetLinesToRemove =
                void 0),
            (u.reflowLargerGetLinesToRemove = function (m, d, f, p, h) {
              let g = [];
              for (let b = 0; b < m.length - 1; b++) {
                let A = b,
                  y = m.get(++A);
                if (!y.isWrapped) continue;
                let E = [m.get(b)];
                for (; A < m.length && y.isWrapped; ) (E.push(y), (y = m.get(++A)));
                if (p >= b && p < A) {
                  b += E.length - 1;
                  continue;
                }
                let v = 0,
                  C = c(E, v, d),
                  x = 1,
                  k = 0;
                for (; x < E.length; ) {
                  let P = c(E, x, d),
                    D = P - k,
                    O = f - C,
                    N = Math.min(D, O);
                  (E[v].copyCellsFrom(E[x], k, C, N, !1),
                    (C += N),
                    C === f && (v++, (C = 0)),
                    (k += N),
                    k === P && (x++, (k = 0)),
                    C === 0 &&
                      v !== 0 &&
                      E[v - 1].getWidth(f - 1) === 2 &&
                      (E[v].copyCellsFrom(E[v - 1], f - 1, C++, 1, !1), E[v - 1].setCell(f - 1, h)));
                }
                E[v].replaceCells(C, f, h);
                let R = 0;
                for (let P = E.length - 1; P > 0 && (P > v || E[P].getTrimmedLength() === 0); P--) R++;
                (R > 0 && (g.push(b + E.length - R), g.push(R)), (b += E.length - 1));
              }
              return g;
            }),
            (u.reflowLargerCreateNewLayout = function (m, d) {
              let f = [],
                p = 0,
                h = d[p],
                g = 0;
              for (let b = 0; b < m.length; b++)
                if (h === b) {
                  let A = d[++p];
                  (m.onDeleteEmitter.fire({ index: b - g, amount: A }), (b += A - 1), (g += A), (h = d[++p]));
                } else f.push(b);
              return { layout: f, countRemoved: g };
            }),
            (u.reflowLargerApplyNewLayout = function (m, d) {
              let f = [];
              for (let p = 0; p < d.length; p++) f.push(m.get(d[p]));
              for (let p = 0; p < f.length; p++) m.set(p, f[p]);
              m.length = d.length;
            }),
            (u.reflowSmallerGetNewLineLengths = function (m, d, f) {
              let p = [],
                h = m.map((y, E) => c(m, E, d)).reduce((y, E) => y + E),
                g = 0,
                b = 0,
                A = 0;
              for (; A < h; ) {
                if (h - A < f) {
                  p.push(h - A);
                  break;
                }
                g += f;
                let y = c(m, b, d);
                g > y && ((g -= y), b++);
                let E = m[b].getWidth(g - 1) === 2;
                E && g--;
                let v = E ? f - 1 : f;
                (p.push(v), (A += v));
              }
              return p;
            }),
            (u.getWrappedLineTrimmedLength = c));
        },
        295: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.BufferSet = void 0));
          let m = c(460),
            d = c(844),
            f = c(92);
          class p extends d.Disposable {
            constructor(g, b) {
              (super(),
                (this._optionsService = g),
                (this._bufferService = b),
                (this._onBufferActivate = this.register(new m.EventEmitter())),
                (this.onBufferActivate = this._onBufferActivate.event),
                this.reset(),
                this.register(
                  this._optionsService.onSpecificOptionChange("scrollback", () =>
                    this.resize(this._bufferService.cols, this._bufferService.rows),
                  ),
                ),
                this.register(this._optionsService.onSpecificOptionChange("tabStopWidth", () => this.setupTabStops())));
            }
            reset() {
              ((this._normal = new f.Buffer(!0, this._optionsService, this._bufferService)),
                this._normal.fillViewportRows(),
                (this._alt = new f.Buffer(!1, this._optionsService, this._bufferService)),
                (this._activeBuffer = this._normal),
                this._onBufferActivate.fire({ activeBuffer: this._normal, inactiveBuffer: this._alt }),
                this.setupTabStops());
            }
            get alt() {
              return this._alt;
            }
            get active() {
              return this._activeBuffer;
            }
            get normal() {
              return this._normal;
            }
            activateNormalBuffer() {
              this._activeBuffer !== this._normal &&
                ((this._normal.x = this._alt.x),
                (this._normal.y = this._alt.y),
                this._alt.clearAllMarkers(),
                this._alt.clear(),
                (this._activeBuffer = this._normal),
                this._onBufferActivate.fire({ activeBuffer: this._normal, inactiveBuffer: this._alt }));
            }
            activateAltBuffer(g) {
              this._activeBuffer !== this._alt &&
                (this._alt.fillViewportRows(g),
                (this._alt.x = this._normal.x),
                (this._alt.y = this._normal.y),
                (this._activeBuffer = this._alt),
                this._onBufferActivate.fire({ activeBuffer: this._alt, inactiveBuffer: this._normal }));
            }
            resize(g, b) {
              (this._normal.resize(g, b), this._alt.resize(g, b), this.setupTabStops(g));
            }
            setupTabStops(g) {
              (this._normal.setupTabStops(g), this._alt.setupTabStops(g));
            }
          }
          u.BufferSet = p;
        },
        511: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.CellData = void 0));
          let m = c(482),
            d = c(643),
            f = c(734);
          class p extends f.AttributeData {
            constructor() {
              (super(...arguments),
                (this.content = 0),
                (this.fg = 0),
                (this.bg = 0),
                (this.extended = new f.ExtendedAttrs()),
                (this.combinedData = ""));
            }
            static fromCharData(g) {
              let b = new p();
              return (b.setFromCharData(g), b);
            }
            isCombined() {
              return 2097152 & this.content;
            }
            getWidth() {
              return this.content >> 22;
            }
            getChars() {
              return 2097152 & this.content
                ? this.combinedData
                : 2097151 & this.content
                  ? (0, m.stringFromCodePoint)(2097151 & this.content)
                  : "";
            }
            getCode() {
              return this.isCombined()
                ? this.combinedData.charCodeAt(this.combinedData.length - 1)
                : 2097151 & this.content;
            }
            setFromCharData(g) {
              ((this.fg = g[d.CHAR_DATA_ATTR_INDEX]), (this.bg = 0));
              let b = !1;
              if (g[d.CHAR_DATA_CHAR_INDEX].length > 2) b = !0;
              else if (g[d.CHAR_DATA_CHAR_INDEX].length === 2) {
                let A = g[d.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
                if (55296 <= A && A <= 56319) {
                  let y = g[d.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
                  56320 <= y && y <= 57343
                    ? (this.content = (1024 * (A - 55296) + y - 56320 + 65536) | (g[d.CHAR_DATA_WIDTH_INDEX] << 22))
                    : (b = !0);
                } else b = !0;
              } else this.content = g[d.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | (g[d.CHAR_DATA_WIDTH_INDEX] << 22);
              b &&
                ((this.combinedData = g[d.CHAR_DATA_CHAR_INDEX]),
                (this.content = 2097152 | (g[d.CHAR_DATA_WIDTH_INDEX] << 22)));
            }
            getAsCharData() {
              return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
            }
          }
          u.CellData = p;
        },
        643: (a, u) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }),
            (u.WHITESPACE_CELL_CODE =
              u.WHITESPACE_CELL_WIDTH =
              u.WHITESPACE_CELL_CHAR =
              u.NULL_CELL_CODE =
              u.NULL_CELL_WIDTH =
              u.NULL_CELL_CHAR =
              u.CHAR_DATA_CODE_INDEX =
              u.CHAR_DATA_WIDTH_INDEX =
              u.CHAR_DATA_CHAR_INDEX =
              u.CHAR_DATA_ATTR_INDEX =
              u.DEFAULT_EXT =
              u.DEFAULT_ATTR =
              u.DEFAULT_COLOR =
                void 0),
            (u.DEFAULT_COLOR = 0),
            (u.DEFAULT_ATTR = 256 | (u.DEFAULT_COLOR << 9)),
            (u.DEFAULT_EXT = 0),
            (u.CHAR_DATA_ATTR_INDEX = 0),
            (u.CHAR_DATA_CHAR_INDEX = 1),
            (u.CHAR_DATA_WIDTH_INDEX = 2),
            (u.CHAR_DATA_CODE_INDEX = 3),
            (u.NULL_CELL_CHAR = ""),
            (u.NULL_CELL_WIDTH = 1),
            (u.NULL_CELL_CODE = 0),
            (u.WHITESPACE_CELL_CHAR = " "),
            (u.WHITESPACE_CELL_WIDTH = 1),
            (u.WHITESPACE_CELL_CODE = 32));
        },
        863: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.Marker = void 0));
          let m = c(460),
            d = c(844);
          class f {
            get id() {
              return this._id;
            }
            constructor(h) {
              ((this.line = h),
                (this.isDisposed = !1),
                (this._disposables = []),
                (this._id = f._nextId++),
                (this._onDispose = this.register(new m.EventEmitter())),
                (this.onDispose = this._onDispose.event));
            }
            dispose() {
              this.isDisposed ||
                ((this.isDisposed = !0),
                (this.line = -1),
                this._onDispose.fire(),
                (0, d.disposeArray)(this._disposables),
                (this._disposables.length = 0));
            }
            register(h) {
              return (this._disposables.push(h), h);
            }
          }
          ((u.Marker = f), (f._nextId = 1));
        },
        116: (a, u) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }),
            (u.DEFAULT_CHARSET = u.CHARSETS = void 0),
            (u.CHARSETS = {}),
            (u.DEFAULT_CHARSET = u.CHARSETS.B),
            (u.CHARSETS[0] = {
              "`": "\u25C6",
              a: "\u2592",
              b: "\u2409",
              c: "\u240C",
              d: "\u240D",
              e: "\u240A",
              f: "\xB0",
              g: "\xB1",
              h: "\u2424",
              i: "\u240B",
              j: "\u2518",
              k: "\u2510",
              l: "\u250C",
              m: "\u2514",
              n: "\u253C",
              o: "\u23BA",
              p: "\u23BB",
              q: "\u2500",
              r: "\u23BC",
              s: "\u23BD",
              t: "\u251C",
              u: "\u2524",
              v: "\u2534",
              w: "\u252C",
              x: "\u2502",
              y: "\u2264",
              z: "\u2265",
              "{": "\u03C0",
              "|": "\u2260",
              "}": "\xA3",
              "~": "\xB7",
            }),
            (u.CHARSETS.A = { "#": "\xA3" }),
            (u.CHARSETS.B = void 0),
            (u.CHARSETS[4] = {
              "#": "\xA3",
              "@": "\xBE",
              "[": "ij",
              "\\": "\xBD",
              "]": "|",
              "{": "\xA8",
              "|": "f",
              "}": "\xBC",
              "~": "\xB4",
            }),
            (u.CHARSETS.C = u.CHARSETS[5] =
              {
                "[": "\xC4",
                "\\": "\xD6",
                "]": "\xC5",
                "^": "\xDC",
                "`": "\xE9",
                "{": "\xE4",
                "|": "\xF6",
                "}": "\xE5",
                "~": "\xFC",
              }),
            (u.CHARSETS.R = {
              "#": "\xA3",
              "@": "\xE0",
              "[": "\xB0",
              "\\": "\xE7",
              "]": "\xA7",
              "{": "\xE9",
              "|": "\xF9",
              "}": "\xE8",
              "~": "\xA8",
            }),
            (u.CHARSETS.Q = {
              "@": "\xE0",
              "[": "\xE2",
              "\\": "\xE7",
              "]": "\xEA",
              "^": "\xEE",
              "`": "\xF4",
              "{": "\xE9",
              "|": "\xF9",
              "}": "\xE8",
              "~": "\xFB",
            }),
            (u.CHARSETS.K = {
              "@": "\xA7",
              "[": "\xC4",
              "\\": "\xD6",
              "]": "\xDC",
              "{": "\xE4",
              "|": "\xF6",
              "}": "\xFC",
              "~": "\xDF",
            }),
            (u.CHARSETS.Y = {
              "#": "\xA3",
              "@": "\xA7",
              "[": "\xB0",
              "\\": "\xE7",
              "]": "\xE9",
              "`": "\xF9",
              "{": "\xE0",
              "|": "\xF2",
              "}": "\xE8",
              "~": "\xEC",
            }),
            (u.CHARSETS.E = u.CHARSETS[6] =
              {
                "@": "\xC4",
                "[": "\xC6",
                "\\": "\xD8",
                "]": "\xC5",
                "^": "\xDC",
                "`": "\xE4",
                "{": "\xE6",
                "|": "\xF8",
                "}": "\xE5",
                "~": "\xFC",
              }),
            (u.CHARSETS.Z = {
              "#": "\xA3",
              "@": "\xA7",
              "[": "\xA1",
              "\\": "\xD1",
              "]": "\xBF",
              "{": "\xB0",
              "|": "\xF1",
              "}": "\xE7",
            }),
            (u.CHARSETS.H = u.CHARSETS[7] =
              {
                "@": "\xC9",
                "[": "\xC4",
                "\\": "\xD6",
                "]": "\xC5",
                "^": "\xDC",
                "`": "\xE9",
                "{": "\xE4",
                "|": "\xF6",
                "}": "\xE5",
                "~": "\xFC",
              }),
            (u.CHARSETS["="] = {
              "#": "\xF9",
              "@": "\xE0",
              "[": "\xE9",
              "\\": "\xE7",
              "]": "\xEA",
              "^": "\xEE",
              _: "\xE8",
              "`": "\xF4",
              "{": "\xE4",
              "|": "\xF6",
              "}": "\xFC",
              "~": "\xFB",
            }));
        },
        584: (a, u) => {
          var c, m, d;
          (Object.defineProperty(u, "__esModule", { value: !0 }),
            (u.C1_ESCAPED = u.C1 = u.C0 = void 0),
            (function (f) {
              ((f.NUL = "\0"),
                (f.SOH = ""),
                (f.STX = ""),
                (f.ETX = ""),
                (f.EOT = ""),
                (f.ENQ = ""),
                (f.ACK = ""),
                (f.BEL = "\x07"),
                (f.BS = "\b"),
                (f.HT = "	"),
                (f.LF = `
`),
                (f.VT = "\v"),
                (f.FF = "\f"),
                (f.CR = "\r"),
                (f.SO = ""),
                (f.SI = ""),
                (f.DLE = ""),
                (f.DC1 = ""),
                (f.DC2 = ""),
                (f.DC3 = ""),
                (f.DC4 = ""),
                (f.NAK = ""),
                (f.SYN = ""),
                (f.ETB = ""),
                (f.CAN = ""),
                (f.EM = ""),
                (f.SUB = ""),
                (f.ESC = "\x1B"),
                (f.FS = ""),
                (f.GS = ""),
                (f.RS = ""),
                (f.US = ""),
                (f.SP = " "),
                (f.DEL = "\x7F"));
            })(c || (u.C0 = c = {})),
            (function (f) {
              ((f.PAD = "\x80"),
                (f.HOP = "\x81"),
                (f.BPH = "\x82"),
                (f.NBH = "\x83"),
                (f.IND = "\x84"),
                (f.NEL = "\x85"),
                (f.SSA = "\x86"),
                (f.ESA = "\x87"),
                (f.HTS = "\x88"),
                (f.HTJ = "\x89"),
                (f.VTS = "\x8A"),
                (f.PLD = "\x8B"),
                (f.PLU = "\x8C"),
                (f.RI = "\x8D"),
                (f.SS2 = "\x8E"),
                (f.SS3 = "\x8F"),
                (f.DCS = "\x90"),
                (f.PU1 = "\x91"),
                (f.PU2 = "\x92"),
                (f.STS = "\x93"),
                (f.CCH = "\x94"),
                (f.MW = "\x95"),
                (f.SPA = "\x96"),
                (f.EPA = "\x97"),
                (f.SOS = "\x98"),
                (f.SGCI = "\x99"),
                (f.SCI = "\x9A"),
                (f.CSI = "\x9B"),
                (f.ST = "\x9C"),
                (f.OSC = "\x9D"),
                (f.PM = "\x9E"),
                (f.APC = "\x9F"));
            })(m || (u.C1 = m = {})),
            (function (f) {
              f.ST = `${c.ESC}\\`;
            })(d || (u.C1_ESCAPED = d = {})));
        },
        482: (a, u) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }),
            (u.Utf8ToUtf32 = u.StringToUtf32 = u.utf32ToString = u.stringFromCodePoint = void 0),
            (u.stringFromCodePoint = function (c) {
              return c > 65535
                ? ((c -= 65536), String.fromCharCode(55296 + (c >> 10)) + String.fromCharCode((c % 1024) + 56320))
                : String.fromCharCode(c);
            }),
            (u.utf32ToString = function (c, m = 0, d = c.length) {
              let f = "";
              for (let p = m; p < d; ++p) {
                let h = c[p];
                h > 65535
                  ? ((h -= 65536),
                    (f += String.fromCharCode(55296 + (h >> 10)) + String.fromCharCode((h % 1024) + 56320)))
                  : (f += String.fromCharCode(h));
              }
              return f;
            }),
            (u.StringToUtf32 = class {
              constructor() {
                this._interim = 0;
              }
              clear() {
                this._interim = 0;
              }
              decode(c, m) {
                let d = c.length;
                if (!d) return 0;
                let f = 0,
                  p = 0;
                if (this._interim) {
                  let h = c.charCodeAt(p++);
                  (56320 <= h && h <= 57343
                    ? (m[f++] = 1024 * (this._interim - 55296) + h - 56320 + 65536)
                    : ((m[f++] = this._interim), (m[f++] = h)),
                    (this._interim = 0));
                }
                for (let h = p; h < d; ++h) {
                  let g = c.charCodeAt(h);
                  if (55296 <= g && g <= 56319) {
                    if (++h >= d) return ((this._interim = g), f);
                    let b = c.charCodeAt(h);
                    56320 <= b && b <= 57343
                      ? (m[f++] = 1024 * (g - 55296) + b - 56320 + 65536)
                      : ((m[f++] = g), (m[f++] = b));
                  } else g !== 65279 && (m[f++] = g);
                }
                return f;
              }
            }),
            (u.Utf8ToUtf32 = class {
              constructor() {
                this.interim = new Uint8Array(3);
              }
              clear() {
                this.interim.fill(0);
              }
              decode(c, m) {
                let d = c.length;
                if (!d) return 0;
                let f,
                  p,
                  h,
                  g,
                  b = 0,
                  A = 0,
                  y = 0;
                if (this.interim[0]) {
                  let C = !1,
                    x = this.interim[0];
                  x &= (224 & x) == 192 ? 31 : (240 & x) == 224 ? 15 : 7;
                  let k,
                    R = 0;
                  for (; (k = 63 & this.interim[++R]) && R < 4; ) ((x <<= 6), (x |= k));
                  let P = (224 & this.interim[0]) == 192 ? 2 : (240 & this.interim[0]) == 224 ? 3 : 4,
                    D = P - R;
                  for (; y < D; ) {
                    if (y >= d) return 0;
                    if (((k = c[y++]), (192 & k) != 128)) {
                      (y--, (C = !0));
                      break;
                    }
                    ((this.interim[R++] = k), (x <<= 6), (x |= 63 & k));
                  }
                  (C ||
                    (P === 2
                      ? x < 128
                        ? y--
                        : (m[b++] = x)
                      : P === 3
                        ? x < 2048 || (x >= 55296 && x <= 57343) || x === 65279 || (m[b++] = x)
                        : x < 65536 || x > 1114111 || (m[b++] = x)),
                    this.interim.fill(0));
                }
                let E = d - 4,
                  v = y;
                for (; v < d; ) {
                  for (
                    ;
                    !(
                      !(v < E) ||
                      128 & (f = c[v]) ||
                      128 & (p = c[v + 1]) ||
                      128 & (h = c[v + 2]) ||
                      128 & (g = c[v + 3])
                    );
                  )
                    ((m[b++] = f), (m[b++] = p), (m[b++] = h), (m[b++] = g), (v += 4));
                  if (((f = c[v++]), f < 128)) m[b++] = f;
                  else if ((224 & f) == 192) {
                    if (v >= d) return ((this.interim[0] = f), b);
                    if (((p = c[v++]), (192 & p) != 128)) {
                      v--;
                      continue;
                    }
                    if (((A = ((31 & f) << 6) | (63 & p)), A < 128)) {
                      v--;
                      continue;
                    }
                    m[b++] = A;
                  } else if ((240 & f) == 224) {
                    if (v >= d) return ((this.interim[0] = f), b);
                    if (((p = c[v++]), (192 & p) != 128)) {
                      v--;
                      continue;
                    }
                    if (v >= d) return ((this.interim[0] = f), (this.interim[1] = p), b);
                    if (((h = c[v++]), (192 & h) != 128)) {
                      v--;
                      continue;
                    }
                    if (
                      ((A = ((15 & f) << 12) | ((63 & p) << 6) | (63 & h)),
                      A < 2048 || (A >= 55296 && A <= 57343) || A === 65279)
                    )
                      continue;
                    m[b++] = A;
                  } else if ((248 & f) == 240) {
                    if (v >= d) return ((this.interim[0] = f), b);
                    if (((p = c[v++]), (192 & p) != 128)) {
                      v--;
                      continue;
                    }
                    if (v >= d) return ((this.interim[0] = f), (this.interim[1] = p), b);
                    if (((h = c[v++]), (192 & h) != 128)) {
                      v--;
                      continue;
                    }
                    if (v >= d) return ((this.interim[0] = f), (this.interim[1] = p), (this.interim[2] = h), b);
                    if (((g = c[v++]), (192 & g) != 128)) {
                      v--;
                      continue;
                    }
                    if (
                      ((A = ((7 & f) << 18) | ((63 & p) << 12) | ((63 & h) << 6) | (63 & g)), A < 65536 || A > 1114111)
                    )
                      continue;
                    m[b++] = A;
                  }
                }
                return b;
              }
            }));
        },
        225: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.UnicodeV6 = void 0));
          let m = c(480),
            d = [
              [768, 879],
              [1155, 1158],
              [1160, 1161],
              [1425, 1469],
              [1471, 1471],
              [1473, 1474],
              [1476, 1477],
              [1479, 1479],
              [1536, 1539],
              [1552, 1557],
              [1611, 1630],
              [1648, 1648],
              [1750, 1764],
              [1767, 1768],
              [1770, 1773],
              [1807, 1807],
              [1809, 1809],
              [1840, 1866],
              [1958, 1968],
              [2027, 2035],
              [2305, 2306],
              [2364, 2364],
              [2369, 2376],
              [2381, 2381],
              [2385, 2388],
              [2402, 2403],
              [2433, 2433],
              [2492, 2492],
              [2497, 2500],
              [2509, 2509],
              [2530, 2531],
              [2561, 2562],
              [2620, 2620],
              [2625, 2626],
              [2631, 2632],
              [2635, 2637],
              [2672, 2673],
              [2689, 2690],
              [2748, 2748],
              [2753, 2757],
              [2759, 2760],
              [2765, 2765],
              [2786, 2787],
              [2817, 2817],
              [2876, 2876],
              [2879, 2879],
              [2881, 2883],
              [2893, 2893],
              [2902, 2902],
              [2946, 2946],
              [3008, 3008],
              [3021, 3021],
              [3134, 3136],
              [3142, 3144],
              [3146, 3149],
              [3157, 3158],
              [3260, 3260],
              [3263, 3263],
              [3270, 3270],
              [3276, 3277],
              [3298, 3299],
              [3393, 3395],
              [3405, 3405],
              [3530, 3530],
              [3538, 3540],
              [3542, 3542],
              [3633, 3633],
              [3636, 3642],
              [3655, 3662],
              [3761, 3761],
              [3764, 3769],
              [3771, 3772],
              [3784, 3789],
              [3864, 3865],
              [3893, 3893],
              [3895, 3895],
              [3897, 3897],
              [3953, 3966],
              [3968, 3972],
              [3974, 3975],
              [3984, 3991],
              [3993, 4028],
              [4038, 4038],
              [4141, 4144],
              [4146, 4146],
              [4150, 4151],
              [4153, 4153],
              [4184, 4185],
              [4448, 4607],
              [4959, 4959],
              [5906, 5908],
              [5938, 5940],
              [5970, 5971],
              [6002, 6003],
              [6068, 6069],
              [6071, 6077],
              [6086, 6086],
              [6089, 6099],
              [6109, 6109],
              [6155, 6157],
              [6313, 6313],
              [6432, 6434],
              [6439, 6440],
              [6450, 6450],
              [6457, 6459],
              [6679, 6680],
              [6912, 6915],
              [6964, 6964],
              [6966, 6970],
              [6972, 6972],
              [6978, 6978],
              [7019, 7027],
              [7616, 7626],
              [7678, 7679],
              [8203, 8207],
              [8234, 8238],
              [8288, 8291],
              [8298, 8303],
              [8400, 8431],
              [12330, 12335],
              [12441, 12442],
              [43014, 43014],
              [43019, 43019],
              [43045, 43046],
              [64286, 64286],
              [65024, 65039],
              [65056, 65059],
              [65279, 65279],
              [65529, 65531],
            ],
            f = [
              [68097, 68099],
              [68101, 68102],
              [68108, 68111],
              [68152, 68154],
              [68159, 68159],
              [119143, 119145],
              [119155, 119170],
              [119173, 119179],
              [119210, 119213],
              [119362, 119364],
              [917505, 917505],
              [917536, 917631],
              [917760, 917999],
            ],
            p;
          u.UnicodeV6 = class {
            constructor() {
              if (((this.version = "6"), !p)) {
                ((p = new Uint8Array(65536)),
                  p.fill(1),
                  (p[0] = 0),
                  p.fill(0, 1, 32),
                  p.fill(0, 127, 160),
                  p.fill(2, 4352, 4448),
                  (p[9001] = 2),
                  (p[9002] = 2),
                  p.fill(2, 11904, 42192),
                  (p[12351] = 1),
                  p.fill(2, 44032, 55204),
                  p.fill(2, 63744, 64256),
                  p.fill(2, 65040, 65050),
                  p.fill(2, 65072, 65136),
                  p.fill(2, 65280, 65377),
                  p.fill(2, 65504, 65511));
                for (let h = 0; h < d.length; ++h) p.fill(0, d[h][0], d[h][1] + 1);
              }
            }
            wcwidth(h) {
              return h < 32
                ? 0
                : h < 127
                  ? 1
                  : h < 65536
                    ? p[h]
                    : (function (g, b) {
                          let A,
                            y = 0,
                            E = b.length - 1;
                          if (g < b[0][0] || g > b[E][1]) return !1;
                          for (; E >= y; )
                            if (((A = (y + E) >> 1), g > b[A][1])) y = A + 1;
                            else {
                              if (!(g < b[A][0])) return !0;
                              E = A - 1;
                            }
                          return !1;
                        })(h, f)
                      ? 0
                      : (h >= 131072 && h <= 196605) || (h >= 196608 && h <= 262141)
                        ? 2
                        : 1;
            }
            charProperties(h, g) {
              let b = this.wcwidth(h),
                A = b === 0 && g !== 0;
              if (A) {
                let y = m.UnicodeService.extractWidth(g);
                y === 0 ? (A = !1) : y > b && (b = y);
              }
              return m.UnicodeService.createPropertyValue(0, b, A);
            }
          };
        },
        981: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.WriteBuffer = void 0));
          let m = c(460),
            d = c(844);
          class f extends d.Disposable {
            constructor(h) {
              (super(),
                (this._action = h),
                (this._writeBuffer = []),
                (this._callbacks = []),
                (this._pendingData = 0),
                (this._bufferOffset = 0),
                (this._isSyncWriting = !1),
                (this._syncCalls = 0),
                (this._didUserInput = !1),
                (this._onWriteParsed = this.register(new m.EventEmitter())),
                (this.onWriteParsed = this._onWriteParsed.event));
            }
            handleUserInput() {
              this._didUserInput = !0;
            }
            writeSync(h, g) {
              if (g !== void 0 && this._syncCalls > g) return void (this._syncCalls = 0);
              if (
                ((this._pendingData += h.length),
                this._writeBuffer.push(h),
                this._callbacks.push(void 0),
                this._syncCalls++,
                this._isSyncWriting)
              )
                return;
              let b;
              for (this._isSyncWriting = !0; (b = this._writeBuffer.shift()); ) {
                this._action(b);
                let A = this._callbacks.shift();
                A && A();
              }
              ((this._pendingData = 0),
                (this._bufferOffset = 2147483647),
                (this._isSyncWriting = !1),
                (this._syncCalls = 0));
            }
            write(h, g) {
              if (this._pendingData > 5e7)
                throw new Error("write data discarded, use flow control to avoid losing data");
              if (!this._writeBuffer.length) {
                if (((this._bufferOffset = 0), this._didUserInput))
                  return (
                    (this._didUserInput = !1),
                    (this._pendingData += h.length),
                    this._writeBuffer.push(h),
                    this._callbacks.push(g),
                    void this._innerWrite()
                  );
                setTimeout(() => this._innerWrite());
              }
              ((this._pendingData += h.length), this._writeBuffer.push(h), this._callbacks.push(g));
            }
            _innerWrite(h = 0, g = !0) {
              let b = h || Date.now();
              for (; this._writeBuffer.length > this._bufferOffset; ) {
                let A = this._writeBuffer[this._bufferOffset],
                  y = this._action(A, g);
                if (y) {
                  let v = (C) =>
                    Date.now() - b >= 12 ? setTimeout(() => this._innerWrite(0, C)) : this._innerWrite(b, C);
                  return void y
                    .catch(
                      (C) => (
                        queueMicrotask(() => {
                          throw C;
                        }),
                        Promise.resolve(!1)
                      ),
                    )
                    .then(v);
                }
                let E = this._callbacks[this._bufferOffset];
                if ((E && E(), this._bufferOffset++, (this._pendingData -= A.length), Date.now() - b >= 12)) break;
              }
              (this._writeBuffer.length > this._bufferOffset
                ? (this._bufferOffset > 50 &&
                    ((this._writeBuffer = this._writeBuffer.slice(this._bufferOffset)),
                    (this._callbacks = this._callbacks.slice(this._bufferOffset)),
                    (this._bufferOffset = 0)),
                  setTimeout(() => this._innerWrite()))
                : ((this._writeBuffer.length = 0),
                  (this._callbacks.length = 0),
                  (this._pendingData = 0),
                  (this._bufferOffset = 0)),
                this._onWriteParsed.fire());
            }
          }
          u.WriteBuffer = f;
        },
        941: (a, u) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.toRgbString = u.parseColor = void 0));
          let c =
              /^([\da-f])\/([\da-f])\/([\da-f])$|^([\da-f]{2})\/([\da-f]{2})\/([\da-f]{2})$|^([\da-f]{3})\/([\da-f]{3})\/([\da-f]{3})$|^([\da-f]{4})\/([\da-f]{4})\/([\da-f]{4})$/,
            m = /^[\da-f]+$/;
          function d(f, p) {
            let h = f.toString(16),
              g = h.length < 2 ? "0" + h : h;
            switch (p) {
              case 4:
                return h[0];
              case 8:
                return g;
              case 12:
                return (g + g).slice(0, 3);
              default:
                return g + g;
            }
          }
          ((u.parseColor = function (f) {
            if (!f) return;
            let p = f.toLowerCase();
            if (p.indexOf("rgb:") === 0) {
              p = p.slice(4);
              let h = c.exec(p);
              if (h) {
                let g = h[1] ? 15 : h[4] ? 255 : h[7] ? 4095 : 65535;
                return [
                  Math.round((parseInt(h[1] || h[4] || h[7] || h[10], 16) / g) * 255),
                  Math.round((parseInt(h[2] || h[5] || h[8] || h[11], 16) / g) * 255),
                  Math.round((parseInt(h[3] || h[6] || h[9] || h[12], 16) / g) * 255),
                ];
              }
            } else if (p.indexOf("#") === 0 && ((p = p.slice(1)), m.exec(p) && [3, 6, 9, 12].includes(p.length))) {
              let h = p.length / 3,
                g = [0, 0, 0];
              for (let b = 0; b < 3; ++b) {
                let A = parseInt(p.slice(h * b, h * b + h), 16);
                g[b] = h === 1 ? A << 4 : h === 2 ? A : h === 3 ? A >> 4 : A >> 8;
              }
              return g;
            }
          }),
            (u.toRgbString = function (f, p = 16) {
              let [h, g, b] = f;
              return `rgb:${d(h, p)}/${d(g, p)}/${d(b, p)}`;
            }));
        },
        770: (a, u) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.PAYLOAD_LIMIT = void 0), (u.PAYLOAD_LIMIT = 1e7));
        },
        351: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.DcsHandler = u.DcsParser = void 0));
          let m = c(482),
            d = c(742),
            f = c(770),
            p = [];
          u.DcsParser = class {
            constructor() {
              ((this._handlers = Object.create(null)),
                (this._active = p),
                (this._ident = 0),
                (this._handlerFb = () => {}),
                (this._stack = { paused: !1, loopPosition: 0, fallThrough: !1 }));
            }
            dispose() {
              ((this._handlers = Object.create(null)), (this._handlerFb = () => {}), (this._active = p));
            }
            registerHandler(g, b) {
              this._handlers[g] === void 0 && (this._handlers[g] = []);
              let A = this._handlers[g];
              return (
                A.push(b),
                {
                  dispose: () => {
                    let y = A.indexOf(b);
                    y !== -1 && A.splice(y, 1);
                  },
                }
              );
            }
            clearHandler(g) {
              this._handlers[g] && delete this._handlers[g];
            }
            setHandlerFallback(g) {
              this._handlerFb = g;
            }
            reset() {
              if (this._active.length)
                for (let g = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; g >= 0; --g)
                  this._active[g].unhook(!1);
              ((this._stack.paused = !1), (this._active = p), (this._ident = 0));
            }
            hook(g, b) {
              if ((this.reset(), (this._ident = g), (this._active = this._handlers[g] || p), this._active.length))
                for (let A = this._active.length - 1; A >= 0; A--) this._active[A].hook(b);
              else this._handlerFb(this._ident, "HOOK", b);
            }
            put(g, b, A) {
              if (this._active.length) for (let y = this._active.length - 1; y >= 0; y--) this._active[y].put(g, b, A);
              else this._handlerFb(this._ident, "PUT", (0, m.utf32ToString)(g, b, A));
            }
            unhook(g, b = !0) {
              if (this._active.length) {
                let A = !1,
                  y = this._active.length - 1,
                  E = !1;
                if (
                  (this._stack.paused &&
                    ((y = this._stack.loopPosition - 1),
                    (A = b),
                    (E = this._stack.fallThrough),
                    (this._stack.paused = !1)),
                  !E && A === !1)
                ) {
                  for (; y >= 0 && ((A = this._active[y].unhook(g)), A !== !0); y--)
                    if (A instanceof Promise)
                      return (
                        (this._stack.paused = !0),
                        (this._stack.loopPosition = y),
                        (this._stack.fallThrough = !1),
                        A
                      );
                  y--;
                }
                for (; y >= 0; y--)
                  if (((A = this._active[y].unhook(!1)), A instanceof Promise))
                    return (
                      (this._stack.paused = !0),
                      (this._stack.loopPosition = y),
                      (this._stack.fallThrough = !0),
                      A
                    );
              } else this._handlerFb(this._ident, "UNHOOK", g);
              ((this._active = p), (this._ident = 0));
            }
          };
          let h = new d.Params();
          (h.addParam(0),
            (u.DcsHandler = class {
              constructor(g) {
                ((this._handler = g), (this._data = ""), (this._params = h), (this._hitLimit = !1));
              }
              hook(g) {
                ((this._params = g.length > 1 || g.params[0] ? g.clone() : h),
                  (this._data = ""),
                  (this._hitLimit = !1));
              }
              put(g, b, A) {
                this._hitLimit ||
                  ((this._data += (0, m.utf32ToString)(g, b, A)),
                  this._data.length > f.PAYLOAD_LIMIT && ((this._data = ""), (this._hitLimit = !0)));
              }
              unhook(g) {
                let b = !1;
                if (this._hitLimit) b = !1;
                else if (g && ((b = this._handler(this._data, this._params)), b instanceof Promise))
                  return b.then((A) => ((this._params = h), (this._data = ""), (this._hitLimit = !1), A));
                return ((this._params = h), (this._data = ""), (this._hitLimit = !1), b);
              }
            }));
        },
        15: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }),
            (u.EscapeSequenceParser = u.VT500_TRANSITION_TABLE = u.TransitionTable = void 0));
          let m = c(844),
            d = c(742),
            f = c(242),
            p = c(351);
          class h {
            constructor(y) {
              this.table = new Uint8Array(y);
            }
            setDefault(y, E) {
              this.table.fill((y << 4) | E);
            }
            add(y, E, v, C) {
              this.table[(E << 8) | y] = (v << 4) | C;
            }
            addMany(y, E, v, C) {
              for (let x = 0; x < y.length; x++) this.table[(E << 8) | y[x]] = (v << 4) | C;
            }
          }
          u.TransitionTable = h;
          let g = 160;
          u.VT500_TRANSITION_TABLE = (function () {
            let A = new h(4095),
              y = Array.apply(null, Array(256)).map((R, P) => P),
              E = (R, P) => y.slice(R, P),
              v = E(32, 127),
              C = E(0, 24);
            (C.push(25), C.push.apply(C, E(28, 32)));
            let x = E(0, 14),
              k;
            for (k in (A.setDefault(1, 0), A.addMany(v, 0, 2, 0), x))
              (A.addMany([24, 26, 153, 154], k, 3, 0),
                A.addMany(E(128, 144), k, 3, 0),
                A.addMany(E(144, 152), k, 3, 0),
                A.add(156, k, 0, 0),
                A.add(27, k, 11, 1),
                A.add(157, k, 4, 8),
                A.addMany([152, 158, 159], k, 0, 7),
                A.add(155, k, 11, 3),
                A.add(144, k, 11, 9));
            return (
              A.addMany(C, 0, 3, 0),
              A.addMany(C, 1, 3, 1),
              A.add(127, 1, 0, 1),
              A.addMany(C, 8, 0, 8),
              A.addMany(C, 3, 3, 3),
              A.add(127, 3, 0, 3),
              A.addMany(C, 4, 3, 4),
              A.add(127, 4, 0, 4),
              A.addMany(C, 6, 3, 6),
              A.addMany(C, 5, 3, 5),
              A.add(127, 5, 0, 5),
              A.addMany(C, 2, 3, 2),
              A.add(127, 2, 0, 2),
              A.add(93, 1, 4, 8),
              A.addMany(v, 8, 5, 8),
              A.add(127, 8, 5, 8),
              A.addMany([156, 27, 24, 26, 7], 8, 6, 0),
              A.addMany(E(28, 32), 8, 0, 8),
              A.addMany([88, 94, 95], 1, 0, 7),
              A.addMany(v, 7, 0, 7),
              A.addMany(C, 7, 0, 7),
              A.add(156, 7, 0, 0),
              A.add(127, 7, 0, 7),
              A.add(91, 1, 11, 3),
              A.addMany(E(64, 127), 3, 7, 0),
              A.addMany(E(48, 60), 3, 8, 4),
              A.addMany([60, 61, 62, 63], 3, 9, 4),
              A.addMany(E(48, 60), 4, 8, 4),
              A.addMany(E(64, 127), 4, 7, 0),
              A.addMany([60, 61, 62, 63], 4, 0, 6),
              A.addMany(E(32, 64), 6, 0, 6),
              A.add(127, 6, 0, 6),
              A.addMany(E(64, 127), 6, 0, 0),
              A.addMany(E(32, 48), 3, 9, 5),
              A.addMany(E(32, 48), 5, 9, 5),
              A.addMany(E(48, 64), 5, 0, 6),
              A.addMany(E(64, 127), 5, 7, 0),
              A.addMany(E(32, 48), 4, 9, 5),
              A.addMany(E(32, 48), 1, 9, 2),
              A.addMany(E(32, 48), 2, 9, 2),
              A.addMany(E(48, 127), 2, 10, 0),
              A.addMany(E(48, 80), 1, 10, 0),
              A.addMany(E(81, 88), 1, 10, 0),
              A.addMany([89, 90, 92], 1, 10, 0),
              A.addMany(E(96, 127), 1, 10, 0),
              A.add(80, 1, 11, 9),
              A.addMany(C, 9, 0, 9),
              A.add(127, 9, 0, 9),
              A.addMany(E(28, 32), 9, 0, 9),
              A.addMany(E(32, 48), 9, 9, 12),
              A.addMany(E(48, 60), 9, 8, 10),
              A.addMany([60, 61, 62, 63], 9, 9, 10),
              A.addMany(C, 11, 0, 11),
              A.addMany(E(32, 128), 11, 0, 11),
              A.addMany(E(28, 32), 11, 0, 11),
              A.addMany(C, 10, 0, 10),
              A.add(127, 10, 0, 10),
              A.addMany(E(28, 32), 10, 0, 10),
              A.addMany(E(48, 60), 10, 8, 10),
              A.addMany([60, 61, 62, 63], 10, 0, 11),
              A.addMany(E(32, 48), 10, 9, 12),
              A.addMany(C, 12, 0, 12),
              A.add(127, 12, 0, 12),
              A.addMany(E(28, 32), 12, 0, 12),
              A.addMany(E(32, 48), 12, 9, 12),
              A.addMany(E(48, 64), 12, 0, 11),
              A.addMany(E(64, 127), 12, 12, 13),
              A.addMany(E(64, 127), 10, 12, 13),
              A.addMany(E(64, 127), 9, 12, 13),
              A.addMany(C, 13, 13, 13),
              A.addMany(v, 13, 13, 13),
              A.add(127, 13, 0, 13),
              A.addMany([27, 156, 24, 26], 13, 14, 0),
              A.add(g, 0, 2, 0),
              A.add(g, 8, 5, 8),
              A.add(g, 6, 0, 6),
              A.add(g, 11, 0, 11),
              A.add(g, 13, 13, 13),
              A
            );
          })();
          class b extends m.Disposable {
            constructor(y = u.VT500_TRANSITION_TABLE) {
              (super(),
                (this._transitions = y),
                (this._parseStack = { state: 0, handlers: [], handlerPos: 0, transition: 0, chunkPos: 0 }),
                (this.initialState = 0),
                (this.currentState = this.initialState),
                (this._params = new d.Params()),
                this._params.addParam(0),
                (this._collect = 0),
                (this.precedingJoinState = 0),
                (this._printHandlerFb = (E, v, C) => {}),
                (this._executeHandlerFb = (E) => {}),
                (this._csiHandlerFb = (E, v) => {}),
                (this._escHandlerFb = (E) => {}),
                (this._errorHandlerFb = (E) => E),
                (this._printHandler = this._printHandlerFb),
                (this._executeHandlers = Object.create(null)),
                (this._csiHandlers = Object.create(null)),
                (this._escHandlers = Object.create(null)),
                this.register(
                  (0, m.toDisposable)(() => {
                    ((this._csiHandlers = Object.create(null)),
                      (this._executeHandlers = Object.create(null)),
                      (this._escHandlers = Object.create(null)));
                  }),
                ),
                (this._oscParser = this.register(new f.OscParser())),
                (this._dcsParser = this.register(new p.DcsParser())),
                (this._errorHandler = this._errorHandlerFb),
                this.registerEscHandler({ final: "\\" }, () => !0));
            }
            _identifier(y, E = [64, 126]) {
              let v = 0;
              if (y.prefix) {
                if (y.prefix.length > 1) throw new Error("only one byte as prefix supported");
                if (((v = y.prefix.charCodeAt(0)), (v && 60 > v) || v > 63))
                  throw new Error("prefix must be in range 0x3c .. 0x3f");
              }
              if (y.intermediates) {
                if (y.intermediates.length > 2) throw new Error("only two bytes as intermediates are supported");
                for (let x = 0; x < y.intermediates.length; ++x) {
                  let k = y.intermediates.charCodeAt(x);
                  if (32 > k || k > 47) throw new Error("intermediate must be in range 0x20 .. 0x2f");
                  ((v <<= 8), (v |= k));
                }
              }
              if (y.final.length !== 1) throw new Error("final must be a single byte");
              let C = y.final.charCodeAt(0);
              if (E[0] > C || C > E[1]) throw new Error(`final must be in range ${E[0]} .. ${E[1]}`);
              return ((v <<= 8), (v |= C), v);
            }
            identToString(y) {
              let E = [];
              for (; y; ) (E.push(String.fromCharCode(255 & y)), (y >>= 8));
              return E.reverse().join("");
            }
            setPrintHandler(y) {
              this._printHandler = y;
            }
            clearPrintHandler() {
              this._printHandler = this._printHandlerFb;
            }
            registerEscHandler(y, E) {
              let v = this._identifier(y, [48, 126]);
              this._escHandlers[v] === void 0 && (this._escHandlers[v] = []);
              let C = this._escHandlers[v];
              return (
                C.push(E),
                {
                  dispose: () => {
                    let x = C.indexOf(E);
                    x !== -1 && C.splice(x, 1);
                  },
                }
              );
            }
            clearEscHandler(y) {
              this._escHandlers[this._identifier(y, [48, 126])] &&
                delete this._escHandlers[this._identifier(y, [48, 126])];
            }
            setEscHandlerFallback(y) {
              this._escHandlerFb = y;
            }
            setExecuteHandler(y, E) {
              this._executeHandlers[y.charCodeAt(0)] = E;
            }
            clearExecuteHandler(y) {
              this._executeHandlers[y.charCodeAt(0)] && delete this._executeHandlers[y.charCodeAt(0)];
            }
            setExecuteHandlerFallback(y) {
              this._executeHandlerFb = y;
            }
            registerCsiHandler(y, E) {
              let v = this._identifier(y);
              this._csiHandlers[v] === void 0 && (this._csiHandlers[v] = []);
              let C = this._csiHandlers[v];
              return (
                C.push(E),
                {
                  dispose: () => {
                    let x = C.indexOf(E);
                    x !== -1 && C.splice(x, 1);
                  },
                }
              );
            }
            clearCsiHandler(y) {
              this._csiHandlers[this._identifier(y)] && delete this._csiHandlers[this._identifier(y)];
            }
            setCsiHandlerFallback(y) {
              this._csiHandlerFb = y;
            }
            registerDcsHandler(y, E) {
              return this._dcsParser.registerHandler(this._identifier(y), E);
            }
            clearDcsHandler(y) {
              this._dcsParser.clearHandler(this._identifier(y));
            }
            setDcsHandlerFallback(y) {
              this._dcsParser.setHandlerFallback(y);
            }
            registerOscHandler(y, E) {
              return this._oscParser.registerHandler(y, E);
            }
            clearOscHandler(y) {
              this._oscParser.clearHandler(y);
            }
            setOscHandlerFallback(y) {
              this._oscParser.setHandlerFallback(y);
            }
            setErrorHandler(y) {
              this._errorHandler = y;
            }
            clearErrorHandler() {
              this._errorHandler = this._errorHandlerFb;
            }
            reset() {
              ((this.currentState = this.initialState),
                this._oscParser.reset(),
                this._dcsParser.reset(),
                this._params.reset(),
                this._params.addParam(0),
                (this._collect = 0),
                (this.precedingJoinState = 0),
                this._parseStack.state !== 0 && ((this._parseStack.state = 2), (this._parseStack.handlers = [])));
            }
            _preserveStack(y, E, v, C, x) {
              ((this._parseStack.state = y),
                (this._parseStack.handlers = E),
                (this._parseStack.handlerPos = v),
                (this._parseStack.transition = C),
                (this._parseStack.chunkPos = x));
            }
            parse(y, E, v) {
              let C,
                x = 0,
                k = 0,
                R = 0;
              if (this._parseStack.state)
                if (this._parseStack.state === 2) ((this._parseStack.state = 0), (R = this._parseStack.chunkPos + 1));
                else {
                  if (v === void 0 || this._parseStack.state === 1)
                    throw (
                      (this._parseStack.state = 1),
                      new Error("improper continuation due to previous async handler, giving up parsing")
                    );
                  let P = this._parseStack.handlers,
                    D = this._parseStack.handlerPos - 1;
                  switch (this._parseStack.state) {
                    case 3:
                      if (v === !1 && D > -1) {
                        for (; D >= 0 && ((C = P[D](this._params)), C !== !0); D--)
                          if (C instanceof Promise) return ((this._parseStack.handlerPos = D), C);
                      }
                      this._parseStack.handlers = [];
                      break;
                    case 4:
                      if (v === !1 && D > -1) {
                        for (; D >= 0 && ((C = P[D]()), C !== !0); D--)
                          if (C instanceof Promise) return ((this._parseStack.handlerPos = D), C);
                      }
                      this._parseStack.handlers = [];
                      break;
                    case 6:
                      if (
                        ((x = y[this._parseStack.chunkPos]), (C = this._dcsParser.unhook(x !== 24 && x !== 26, v)), C)
                      )
                        return C;
                      (x === 27 && (this._parseStack.transition |= 1),
                        this._params.reset(),
                        this._params.addParam(0),
                        (this._collect = 0));
                      break;
                    case 5:
                      if (((x = y[this._parseStack.chunkPos]), (C = this._oscParser.end(x !== 24 && x !== 26, v)), C))
                        return C;
                      (x === 27 && (this._parseStack.transition |= 1),
                        this._params.reset(),
                        this._params.addParam(0),
                        (this._collect = 0));
                  }
                  ((this._parseStack.state = 0),
                    (R = this._parseStack.chunkPos + 1),
                    (this.precedingJoinState = 0),
                    (this.currentState = 15 & this._parseStack.transition));
                }
              for (let P = R; P < E; ++P) {
                switch (
                  ((x = y[P]), (k = this._transitions.table[(this.currentState << 8) | (x < 160 ? x : g)]), k >> 4)
                ) {
                  case 2:
                    for (let B = P + 1; ; ++B) {
                      if (B >= E || (x = y[B]) < 32 || (x > 126 && x < g)) {
                        (this._printHandler(y, P, B), (P = B - 1));
                        break;
                      }
                      if (++B >= E || (x = y[B]) < 32 || (x > 126 && x < g)) {
                        (this._printHandler(y, P, B), (P = B - 1));
                        break;
                      }
                      if (++B >= E || (x = y[B]) < 32 || (x > 126 && x < g)) {
                        (this._printHandler(y, P, B), (P = B - 1));
                        break;
                      }
                      if (++B >= E || (x = y[B]) < 32 || (x > 126 && x < g)) {
                        (this._printHandler(y, P, B), (P = B - 1));
                        break;
                      }
                    }
                    break;
                  case 3:
                    (this._executeHandlers[x] ? this._executeHandlers[x]() : this._executeHandlerFb(x),
                      (this.precedingJoinState = 0));
                    break;
                  case 0:
                    break;
                  case 1:
                    if (
                      this._errorHandler({
                        position: P,
                        code: x,
                        currentState: this.currentState,
                        collect: this._collect,
                        params: this._params,
                        abort: !1,
                      }).abort
                    )
                      return;
                    break;
                  case 7:
                    let D = this._csiHandlers[(this._collect << 8) | x],
                      O = D ? D.length - 1 : -1;
                    for (; O >= 0 && ((C = D[O](this._params)), C !== !0); O--)
                      if (C instanceof Promise) return (this._preserveStack(3, D, O, k, P), C);
                    (O < 0 && this._csiHandlerFb((this._collect << 8) | x, this._params),
                      (this.precedingJoinState = 0));
                    break;
                  case 8:
                    do
                      switch (x) {
                        case 59:
                          this._params.addParam(0);
                          break;
                        case 58:
                          this._params.addSubParam(-1);
                          break;
                        default:
                          this._params.addDigit(x - 48);
                      }
                    while (++P < E && (x = y[P]) > 47 && x < 60);
                    P--;
                    break;
                  case 9:
                    ((this._collect <<= 8), (this._collect |= x));
                    break;
                  case 10:
                    let N = this._escHandlers[(this._collect << 8) | x],
                      F = N ? N.length - 1 : -1;
                    for (; F >= 0 && ((C = N[F]()), C !== !0); F--)
                      if (C instanceof Promise) return (this._preserveStack(4, N, F, k, P), C);
                    (F < 0 && this._escHandlerFb((this._collect << 8) | x), (this.precedingJoinState = 0));
                    break;
                  case 11:
                    (this._params.reset(), this._params.addParam(0), (this._collect = 0));
                    break;
                  case 12:
                    this._dcsParser.hook((this._collect << 8) | x, this._params);
                    break;
                  case 13:
                    for (let B = P + 1; ; ++B)
                      if (B >= E || (x = y[B]) === 24 || x === 26 || x === 27 || (x > 127 && x < g)) {
                        (this._dcsParser.put(y, P, B), (P = B - 1));
                        break;
                      }
                    break;
                  case 14:
                    if (((C = this._dcsParser.unhook(x !== 24 && x !== 26)), C))
                      return (this._preserveStack(6, [], 0, k, P), C);
                    (x === 27 && (k |= 1),
                      this._params.reset(),
                      this._params.addParam(0),
                      (this._collect = 0),
                      (this.precedingJoinState = 0));
                    break;
                  case 4:
                    this._oscParser.start();
                    break;
                  case 5:
                    for (let B = P + 1; ; B++)
                      if (B >= E || (x = y[B]) < 32 || (x > 127 && x < g)) {
                        (this._oscParser.put(y, P, B), (P = B - 1));
                        break;
                      }
                    break;
                  case 6:
                    if (((C = this._oscParser.end(x !== 24 && x !== 26)), C))
                      return (this._preserveStack(5, [], 0, k, P), C);
                    (x === 27 && (k |= 1),
                      this._params.reset(),
                      this._params.addParam(0),
                      (this._collect = 0),
                      (this.precedingJoinState = 0));
                }
                this.currentState = 15 & k;
              }
            }
          }
          u.EscapeSequenceParser = b;
        },
        242: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.OscHandler = u.OscParser = void 0));
          let m = c(770),
            d = c(482),
            f = [];
          ((u.OscParser = class {
            constructor() {
              ((this._state = 0),
                (this._active = f),
                (this._id = -1),
                (this._handlers = Object.create(null)),
                (this._handlerFb = () => {}),
                (this._stack = { paused: !1, loopPosition: 0, fallThrough: !1 }));
            }
            registerHandler(p, h) {
              this._handlers[p] === void 0 && (this._handlers[p] = []);
              let g = this._handlers[p];
              return (
                g.push(h),
                {
                  dispose: () => {
                    let b = g.indexOf(h);
                    b !== -1 && g.splice(b, 1);
                  },
                }
              );
            }
            clearHandler(p) {
              this._handlers[p] && delete this._handlers[p];
            }
            setHandlerFallback(p) {
              this._handlerFb = p;
            }
            dispose() {
              ((this._handlers = Object.create(null)), (this._handlerFb = () => {}), (this._active = f));
            }
            reset() {
              if (this._state === 2)
                for (let p = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; p >= 0; --p)
                  this._active[p].end(!1);
              ((this._stack.paused = !1), (this._active = f), (this._id = -1), (this._state = 0));
            }
            _start() {
              if (((this._active = this._handlers[this._id] || f), this._active.length))
                for (let p = this._active.length - 1; p >= 0; p--) this._active[p].start();
              else this._handlerFb(this._id, "START");
            }
            _put(p, h, g) {
              if (this._active.length) for (let b = this._active.length - 1; b >= 0; b--) this._active[b].put(p, h, g);
              else this._handlerFb(this._id, "PUT", (0, d.utf32ToString)(p, h, g));
            }
            start() {
              (this.reset(), (this._state = 1));
            }
            put(p, h, g) {
              if (this._state !== 3) {
                if (this._state === 1)
                  for (; h < g; ) {
                    let b = p[h++];
                    if (b === 59) {
                      ((this._state = 2), this._start());
                      break;
                    }
                    if (b < 48 || 57 < b) return void (this._state = 3);
                    (this._id === -1 && (this._id = 0), (this._id = 10 * this._id + b - 48));
                  }
                this._state === 2 && g - h > 0 && this._put(p, h, g);
              }
            }
            end(p, h = !0) {
              if (this._state !== 0) {
                if (this._state !== 3)
                  if ((this._state === 1 && this._start(), this._active.length)) {
                    let g = !1,
                      b = this._active.length - 1,
                      A = !1;
                    if (
                      (this._stack.paused &&
                        ((b = this._stack.loopPosition - 1),
                        (g = h),
                        (A = this._stack.fallThrough),
                        (this._stack.paused = !1)),
                      !A && g === !1)
                    ) {
                      for (; b >= 0 && ((g = this._active[b].end(p)), g !== !0); b--)
                        if (g instanceof Promise)
                          return (
                            (this._stack.paused = !0),
                            (this._stack.loopPosition = b),
                            (this._stack.fallThrough = !1),
                            g
                          );
                      b--;
                    }
                    for (; b >= 0; b--)
                      if (((g = this._active[b].end(!1)), g instanceof Promise))
                        return (
                          (this._stack.paused = !0),
                          (this._stack.loopPosition = b),
                          (this._stack.fallThrough = !0),
                          g
                        );
                  } else this._handlerFb(this._id, "END", p);
                ((this._active = f), (this._id = -1), (this._state = 0));
              }
            }
          }),
            (u.OscHandler = class {
              constructor(p) {
                ((this._handler = p), (this._data = ""), (this._hitLimit = !1));
              }
              start() {
                ((this._data = ""), (this._hitLimit = !1));
              }
              put(p, h, g) {
                this._hitLimit ||
                  ((this._data += (0, d.utf32ToString)(p, h, g)),
                  this._data.length > m.PAYLOAD_LIMIT && ((this._data = ""), (this._hitLimit = !0)));
              }
              end(p) {
                let h = !1;
                if (this._hitLimit) h = !1;
                else if (p && ((h = this._handler(this._data)), h instanceof Promise))
                  return h.then((g) => ((this._data = ""), (this._hitLimit = !1), g));
                return ((this._data = ""), (this._hitLimit = !1), h);
              }
            }));
        },
        742: (a, u) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.Params = void 0));
          let c = 2147483647;
          class m {
            static fromArray(f) {
              let p = new m();
              if (!f.length) return p;
              for (let h = Array.isArray(f[0]) ? 1 : 0; h < f.length; ++h) {
                let g = f[h];
                if (Array.isArray(g)) for (let b = 0; b < g.length; ++b) p.addSubParam(g[b]);
                else p.addParam(g);
              }
              return p;
            }
            constructor(f = 32, p = 32) {
              if (((this.maxLength = f), (this.maxSubParamsLength = p), p > 256))
                throw new Error("maxSubParamsLength must not be greater than 256");
              ((this.params = new Int32Array(f)),
                (this.length = 0),
                (this._subParams = new Int32Array(p)),
                (this._subParamsLength = 0),
                (this._subParamsIdx = new Uint16Array(f)),
                (this._rejectDigits = !1),
                (this._rejectSubDigits = !1),
                (this._digitIsSub = !1));
            }
            clone() {
              let f = new m(this.maxLength, this.maxSubParamsLength);
              return (
                f.params.set(this.params),
                (f.length = this.length),
                f._subParams.set(this._subParams),
                (f._subParamsLength = this._subParamsLength),
                f._subParamsIdx.set(this._subParamsIdx),
                (f._rejectDigits = this._rejectDigits),
                (f._rejectSubDigits = this._rejectSubDigits),
                (f._digitIsSub = this._digitIsSub),
                f
              );
            }
            toArray() {
              let f = [];
              for (let p = 0; p < this.length; ++p) {
                f.push(this.params[p]);
                let h = this._subParamsIdx[p] >> 8,
                  g = 255 & this._subParamsIdx[p];
                g - h > 0 && f.push(Array.prototype.slice.call(this._subParams, h, g));
              }
              return f;
            }
            reset() {
              ((this.length = 0),
                (this._subParamsLength = 0),
                (this._rejectDigits = !1),
                (this._rejectSubDigits = !1),
                (this._digitIsSub = !1));
            }
            addParam(f) {
              if (((this._digitIsSub = !1), this.length >= this.maxLength)) this._rejectDigits = !0;
              else {
                if (f < -1) throw new Error("values lesser than -1 are not allowed");
                ((this._subParamsIdx[this.length] = (this._subParamsLength << 8) | this._subParamsLength),
                  (this.params[this.length++] = f > c ? c : f));
              }
            }
            addSubParam(f) {
              if (((this._digitIsSub = !0), this.length))
                if (this._rejectDigits || this._subParamsLength >= this.maxSubParamsLength) this._rejectSubDigits = !0;
                else {
                  if (f < -1) throw new Error("values lesser than -1 are not allowed");
                  ((this._subParams[this._subParamsLength++] = f > c ? c : f), this._subParamsIdx[this.length - 1]++);
                }
            }
            hasSubParams(f) {
              return (255 & this._subParamsIdx[f]) - (this._subParamsIdx[f] >> 8) > 0;
            }
            getSubParams(f) {
              let p = this._subParamsIdx[f] >> 8,
                h = 255 & this._subParamsIdx[f];
              return h - p > 0 ? this._subParams.subarray(p, h) : null;
            }
            getSubParamsAll() {
              let f = {};
              for (let p = 0; p < this.length; ++p) {
                let h = this._subParamsIdx[p] >> 8,
                  g = 255 & this._subParamsIdx[p];
                g - h > 0 && (f[p] = this._subParams.slice(h, g));
              }
              return f;
            }
            addDigit(f) {
              let p;
              if (
                this._rejectDigits ||
                !(p = this._digitIsSub ? this._subParamsLength : this.length) ||
                (this._digitIsSub && this._rejectSubDigits)
              )
                return;
              let h = this._digitIsSub ? this._subParams : this.params,
                g = h[p - 1];
              h[p - 1] = ~g ? Math.min(10 * g + f, c) : f;
            }
          }
          u.Params = m;
        },
        741: (a, u) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }),
            (u.AddonManager = void 0),
            (u.AddonManager = class {
              constructor() {
                this._addons = [];
              }
              dispose() {
                for (let c = this._addons.length - 1; c >= 0; c--) this._addons[c].instance.dispose();
              }
              loadAddon(c, m) {
                let d = { instance: m, dispose: m.dispose, isDisposed: !1 };
                (this._addons.push(d), (m.dispose = () => this._wrappedAddonDispose(d)), m.activate(c));
              }
              _wrappedAddonDispose(c) {
                if (c.isDisposed) return;
                let m = -1;
                for (let d = 0; d < this._addons.length; d++)
                  if (this._addons[d] === c) {
                    m = d;
                    break;
                  }
                if (m === -1) throw new Error("Could not dispose an addon that has not been loaded");
                ((c.isDisposed = !0), c.dispose.apply(c.instance), this._addons.splice(m, 1));
              }
            }));
        },
        771: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.BufferApiView = void 0));
          let m = c(785),
            d = c(511);
          u.BufferApiView = class {
            constructor(f, p) {
              ((this._buffer = f), (this.type = p));
            }
            init(f) {
              return ((this._buffer = f), this);
            }
            get cursorY() {
              return this._buffer.y;
            }
            get cursorX() {
              return this._buffer.x;
            }
            get viewportY() {
              return this._buffer.ydisp;
            }
            get baseY() {
              return this._buffer.ybase;
            }
            get length() {
              return this._buffer.lines.length;
            }
            getLine(f) {
              let p = this._buffer.lines.get(f);
              if (p) return new m.BufferLineApiView(p);
            }
            getNullCell() {
              return new d.CellData();
            }
          };
        },
        785: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.BufferLineApiView = void 0));
          let m = c(511);
          u.BufferLineApiView = class {
            constructor(d) {
              this._line = d;
            }
            get isWrapped() {
              return this._line.isWrapped;
            }
            get length() {
              return this._line.length;
            }
            getCell(d, f) {
              if (!(d < 0 || d >= this._line.length))
                return f ? (this._line.loadCell(d, f), f) : this._line.loadCell(d, new m.CellData());
            }
            translateToString(d, f, p) {
              return this._line.translateToString(d, f, p);
            }
          };
        },
        285: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.BufferNamespaceApi = void 0));
          let m = c(771),
            d = c(460),
            f = c(844);
          class p extends f.Disposable {
            constructor(g) {
              (super(),
                (this._core = g),
                (this._onBufferChange = this.register(new d.EventEmitter())),
                (this.onBufferChange = this._onBufferChange.event),
                (this._normal = new m.BufferApiView(this._core.buffers.normal, "normal")),
                (this._alternate = new m.BufferApiView(this._core.buffers.alt, "alternate")),
                this._core.buffers.onBufferActivate(() => this._onBufferChange.fire(this.active)));
            }
            get active() {
              if (this._core.buffers.active === this._core.buffers.normal) return this.normal;
              if (this._core.buffers.active === this._core.buffers.alt) return this.alternate;
              throw new Error("Active buffer is neither normal nor alternate");
            }
            get normal() {
              return this._normal.init(this._core.buffers.normal);
            }
            get alternate() {
              return this._alternate.init(this._core.buffers.alt);
            }
          }
          u.BufferNamespaceApi = p;
        },
        975: (a, u) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }),
            (u.ParserApi = void 0),
            (u.ParserApi = class {
              constructor(c) {
                this._core = c;
              }
              registerCsiHandler(c, m) {
                return this._core.registerCsiHandler(c, (d) => m(d.toArray()));
              }
              addCsiHandler(c, m) {
                return this.registerCsiHandler(c, m);
              }
              registerDcsHandler(c, m) {
                return this._core.registerDcsHandler(c, (d, f) => m(d, f.toArray()));
              }
              addDcsHandler(c, m) {
                return this.registerDcsHandler(c, m);
              }
              registerEscHandler(c, m) {
                return this._core.registerEscHandler(c, m);
              }
              addEscHandler(c, m) {
                return this.registerEscHandler(c, m);
              }
              registerOscHandler(c, m) {
                return this._core.registerOscHandler(c, m);
              }
              addOscHandler(c, m) {
                return this.registerOscHandler(c, m);
              }
            }));
        },
        90: (a, u) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }),
            (u.UnicodeApi = void 0),
            (u.UnicodeApi = class {
              constructor(c) {
                this._core = c;
              }
              register(c) {
                this._core.unicodeService.register(c);
              }
              get versions() {
                return this._core.unicodeService.versions;
              }
              get activeVersion() {
                return this._core.unicodeService.activeVersion;
              }
              set activeVersion(c) {
                this._core.unicodeService.activeVersion = c;
              }
            }));
        },
        744: function (a, u, c) {
          var m =
              (this && this.__decorate) ||
              function (A, y, E, v) {
                var C,
                  x = arguments.length,
                  k = x < 3 ? y : v === null ? (v = Object.getOwnPropertyDescriptor(y, E)) : v;
                if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
                  k = Reflect.decorate(A, y, E, v);
                else
                  for (var R = A.length - 1; R >= 0; R--)
                    (C = A[R]) && (k = (x < 3 ? C(k) : x > 3 ? C(y, E, k) : C(y, E)) || k);
                return (x > 3 && k && Object.defineProperty(y, E, k), k);
              },
            d =
              (this && this.__param) ||
              function (A, y) {
                return function (E, v) {
                  y(E, v, A);
                };
              };
          (Object.defineProperty(u, "__esModule", { value: !0 }),
            (u.BufferService = u.MINIMUM_ROWS = u.MINIMUM_COLS = void 0));
          let f = c(460),
            p = c(844),
            h = c(295),
            g = c(585);
          ((u.MINIMUM_COLS = 2), (u.MINIMUM_ROWS = 1));
          let b = (u.BufferService = class extends p.Disposable {
            get buffer() {
              return this.buffers.active;
            }
            constructor(A) {
              (super(),
                (this.isUserScrolling = !1),
                (this._onResize = this.register(new f.EventEmitter())),
                (this.onResize = this._onResize.event),
                (this._onScroll = this.register(new f.EventEmitter())),
                (this.onScroll = this._onScroll.event),
                (this.cols = Math.max(A.rawOptions.cols || 0, u.MINIMUM_COLS)),
                (this.rows = Math.max(A.rawOptions.rows || 0, u.MINIMUM_ROWS)),
                (this.buffers = this.register(new h.BufferSet(A, this))));
            }
            resize(A, y) {
              ((this.cols = A), (this.rows = y), this.buffers.resize(A, y), this._onResize.fire({ cols: A, rows: y }));
            }
            reset() {
              (this.buffers.reset(), (this.isUserScrolling = !1));
            }
            scroll(A, y = !1) {
              let E = this.buffer,
                v;
              ((v = this._cachedBlankLine),
                (v && v.length === this.cols && v.getFg(0) === A.fg && v.getBg(0) === A.bg) ||
                  ((v = E.getBlankLine(A, y)), (this._cachedBlankLine = v)),
                (v.isWrapped = y));
              let C = E.ybase + E.scrollTop,
                x = E.ybase + E.scrollBottom;
              if (E.scrollTop === 0) {
                let k = E.lines.isFull;
                (x === E.lines.length - 1
                  ? k
                    ? E.lines.recycle().copyFrom(v)
                    : E.lines.push(v.clone())
                  : E.lines.splice(x + 1, 0, v.clone()),
                  k
                    ? this.isUserScrolling && (E.ydisp = Math.max(E.ydisp - 1, 0))
                    : (E.ybase++, this.isUserScrolling || E.ydisp++));
              } else {
                let k = x - C + 1;
                (E.lines.shiftElements(C + 1, k - 1, -1), E.lines.set(x, v.clone()));
              }
              (this.isUserScrolling || (E.ydisp = E.ybase), this._onScroll.fire(E.ydisp));
            }
            scrollLines(A, y, E) {
              let v = this.buffer;
              if (A < 0) {
                if (v.ydisp === 0) return;
                this.isUserScrolling = !0;
              } else A + v.ydisp >= v.ybase && (this.isUserScrolling = !1);
              let C = v.ydisp;
              ((v.ydisp = Math.max(Math.min(v.ydisp + A, v.ybase), 0)),
                C !== v.ydisp && (y || this._onScroll.fire(v.ydisp)));
            }
          });
          u.BufferService = b = m([d(0, g.IOptionsService)], b);
        },
        994: (a, u) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }),
            (u.CharsetService = void 0),
            (u.CharsetService = class {
              constructor() {
                ((this.glevel = 0), (this._charsets = []));
              }
              reset() {
                ((this.charset = void 0), (this._charsets = []), (this.glevel = 0));
              }
              setgLevel(c) {
                ((this.glevel = c), (this.charset = this._charsets[c]));
              }
              setgCharset(c, m) {
                ((this._charsets[c] = m), this.glevel === c && (this.charset = m));
              }
            }));
        },
        753: function (a, u, c) {
          var m =
              (this && this.__decorate) ||
              function (v, C, x, k) {
                var R,
                  P = arguments.length,
                  D = P < 3 ? C : k === null ? (k = Object.getOwnPropertyDescriptor(C, x)) : k;
                if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
                  D = Reflect.decorate(v, C, x, k);
                else
                  for (var O = v.length - 1; O >= 0; O--)
                    (R = v[O]) && (D = (P < 3 ? R(D) : P > 3 ? R(C, x, D) : R(C, x)) || D);
                return (P > 3 && D && Object.defineProperty(C, x, D), D);
              },
            d =
              (this && this.__param) ||
              function (v, C) {
                return function (x, k) {
                  C(x, k, v);
                };
              };
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.CoreMouseService = void 0));
          let f = c(585),
            p = c(460),
            h = c(844),
            g = {
              NONE: { events: 0, restrict: () => !1 },
              X10: {
                events: 1,
                restrict: (v) => v.button !== 4 && v.action === 1 && ((v.ctrl = !1), (v.alt = !1), (v.shift = !1), !0),
              },
              VT200: { events: 19, restrict: (v) => v.action !== 32 },
              DRAG: { events: 23, restrict: (v) => v.action !== 32 || v.button !== 3 },
              ANY: { events: 31, restrict: (v) => !0 },
            };
          function b(v, C) {
            let x = (v.ctrl ? 16 : 0) | (v.shift ? 4 : 0) | (v.alt ? 8 : 0);
            return (
              v.button === 4
                ? ((x |= 64), (x |= v.action))
                : ((x |= 3 & v.button),
                  4 & v.button && (x |= 64),
                  8 & v.button && (x |= 128),
                  v.action === 32 ? (x |= 32) : v.action !== 0 || C || (x |= 3)),
              x
            );
          }
          let A = String.fromCharCode,
            y = {
              DEFAULT: (v) => {
                let C = [b(v, !1) + 32, v.col + 32, v.row + 32];
                return C[0] > 255 || C[1] > 255 || C[2] > 255 ? "" : `\x1B[M${A(C[0])}${A(C[1])}${A(C[2])}`;
              },
              SGR: (v) => {
                let C = v.action === 0 && v.button !== 4 ? "m" : "M";
                return `\x1B[<${b(v, !0)};${v.col};${v.row}${C}`;
              },
              SGR_PIXELS: (v) => {
                let C = v.action === 0 && v.button !== 4 ? "m" : "M";
                return `\x1B[<${b(v, !0)};${v.x};${v.y}${C}`;
              },
            },
            E = (u.CoreMouseService = class extends h.Disposable {
              constructor(v, C) {
                (super(),
                  (this._bufferService = v),
                  (this._coreService = C),
                  (this._protocols = {}),
                  (this._encodings = {}),
                  (this._activeProtocol = ""),
                  (this._activeEncoding = ""),
                  (this._lastEvent = null),
                  (this._onProtocolChange = this.register(new p.EventEmitter())),
                  (this.onProtocolChange = this._onProtocolChange.event));
                for (let x of Object.keys(g)) this.addProtocol(x, g[x]);
                for (let x of Object.keys(y)) this.addEncoding(x, y[x]);
                this.reset();
              }
              addProtocol(v, C) {
                this._protocols[v] = C;
              }
              addEncoding(v, C) {
                this._encodings[v] = C;
              }
              get activeProtocol() {
                return this._activeProtocol;
              }
              get areMouseEventsActive() {
                return this._protocols[this._activeProtocol].events !== 0;
              }
              set activeProtocol(v) {
                if (!this._protocols[v]) throw new Error(`unknown protocol "${v}"`);
                ((this._activeProtocol = v), this._onProtocolChange.fire(this._protocols[v].events));
              }
              get activeEncoding() {
                return this._activeEncoding;
              }
              set activeEncoding(v) {
                if (!this._encodings[v]) throw new Error(`unknown encoding "${v}"`);
                this._activeEncoding = v;
              }
              reset() {
                ((this.activeProtocol = "NONE"), (this.activeEncoding = "DEFAULT"), (this._lastEvent = null));
              }
              triggerMouseEvent(v) {
                if (
                  v.col < 0 ||
                  v.col >= this._bufferService.cols ||
                  v.row < 0 ||
                  v.row >= this._bufferService.rows ||
                  (v.button === 4 && v.action === 32) ||
                  (v.button === 3 && v.action !== 32) ||
                  (v.button !== 4 && (v.action === 2 || v.action === 3)) ||
                  (v.col++,
                  v.row++,
                  v.action === 32 &&
                    this._lastEvent &&
                    this._equalEvents(this._lastEvent, v, this._activeEncoding === "SGR_PIXELS")) ||
                  !this._protocols[this._activeProtocol].restrict(v)
                )
                  return !1;
                let C = this._encodings[this._activeEncoding](v);
                return (
                  C &&
                    (this._activeEncoding === "DEFAULT"
                      ? this._coreService.triggerBinaryEvent(C)
                      : this._coreService.triggerDataEvent(C, !0)),
                  (this._lastEvent = v),
                  !0
                );
              }
              explainEvents(v) {
                return { down: !!(1 & v), up: !!(2 & v), drag: !!(4 & v), move: !!(8 & v), wheel: !!(16 & v) };
              }
              _equalEvents(v, C, x) {
                if (x) {
                  if (v.x !== C.x || v.y !== C.y) return !1;
                } else if (v.col !== C.col || v.row !== C.row) return !1;
                return (
                  v.button === C.button &&
                  v.action === C.action &&
                  v.ctrl === C.ctrl &&
                  v.alt === C.alt &&
                  v.shift === C.shift
                );
              }
            });
          u.CoreMouseService = E = m([d(0, f.IBufferService), d(1, f.ICoreService)], E);
        },
        83: function (a, u, c) {
          var m =
              (this && this.__decorate) ||
              function (E, v, C, x) {
                var k,
                  R = arguments.length,
                  P = R < 3 ? v : x === null ? (x = Object.getOwnPropertyDescriptor(v, C)) : x;
                if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
                  P = Reflect.decorate(E, v, C, x);
                else
                  for (var D = E.length - 1; D >= 0; D--)
                    (k = E[D]) && (P = (R < 3 ? k(P) : R > 3 ? k(v, C, P) : k(v, C)) || P);
                return (R > 3 && P && Object.defineProperty(v, C, P), P);
              },
            d =
              (this && this.__param) ||
              function (E, v) {
                return function (C, x) {
                  v(C, x, E);
                };
              };
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.CoreService = void 0));
          let f = c(439),
            p = c(460),
            h = c(844),
            g = c(585),
            b = Object.freeze({ insertMode: !1 }),
            A = Object.freeze({
              applicationCursorKeys: !1,
              applicationKeypad: !1,
              bracketedPasteMode: !1,
              origin: !1,
              reverseWraparound: !1,
              sendFocus: !1,
              wraparound: !0,
            }),
            y = (u.CoreService = class extends h.Disposable {
              constructor(E, v, C) {
                (super(),
                  (this._bufferService = E),
                  (this._logService = v),
                  (this._optionsService = C),
                  (this.isCursorInitialized = !1),
                  (this.isCursorHidden = !1),
                  (this._onData = this.register(new p.EventEmitter())),
                  (this.onData = this._onData.event),
                  (this._onUserInput = this.register(new p.EventEmitter())),
                  (this.onUserInput = this._onUserInput.event),
                  (this._onBinary = this.register(new p.EventEmitter())),
                  (this.onBinary = this._onBinary.event),
                  (this._onRequestScrollToBottom = this.register(new p.EventEmitter())),
                  (this.onRequestScrollToBottom = this._onRequestScrollToBottom.event),
                  (this.modes = (0, f.clone)(b)),
                  (this.decPrivateModes = (0, f.clone)(A)));
              }
              reset() {
                ((this.modes = (0, f.clone)(b)), (this.decPrivateModes = (0, f.clone)(A)));
              }
              triggerDataEvent(E, v = !1) {
                if (this._optionsService.rawOptions.disableStdin) return;
                let C = this._bufferService.buffer;
                (v &&
                  this._optionsService.rawOptions.scrollOnUserInput &&
                  C.ybase !== C.ydisp &&
                  this._onRequestScrollToBottom.fire(),
                  v && this._onUserInput.fire(),
                  this._logService.debug(`sending data "${E}"`, () => E.split("").map((x) => x.charCodeAt(0))),
                  this._onData.fire(E));
              }
              triggerBinaryEvent(E) {
                this._optionsService.rawOptions.disableStdin ||
                  (this._logService.debug(`sending binary "${E}"`, () => E.split("").map((v) => v.charCodeAt(0))),
                  this._onBinary.fire(E));
              }
            });
          u.CoreService = y = m([d(0, g.IBufferService), d(1, g.ILogService), d(2, g.IOptionsService)], y);
        },
        348: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }),
            (u.InstantiationService = u.ServiceCollection = void 0));
          let m = c(585),
            d = c(343);
          class f {
            constructor(...h) {
              this._entries = new Map();
              for (let [g, b] of h) this.set(g, b);
            }
            set(h, g) {
              let b = this._entries.get(h);
              return (this._entries.set(h, g), b);
            }
            forEach(h) {
              for (let [g, b] of this._entries.entries()) h(g, b);
            }
            has(h) {
              return this._entries.has(h);
            }
            get(h) {
              return this._entries.get(h);
            }
          }
          ((u.ServiceCollection = f),
            (u.InstantiationService = class {
              constructor() {
                ((this._services = new f()), this._services.set(m.IInstantiationService, this));
              }
              setService(p, h) {
                this._services.set(p, h);
              }
              getService(p) {
                return this._services.get(p);
              }
              createInstance(p, ...h) {
                let g = (0, d.getServiceDependencies)(p).sort((y, E) => y.index - E.index),
                  b = [];
                for (let y of g) {
                  let E = this._services.get(y.id);
                  if (!E) throw new Error(`[createInstance] ${p.name} depends on UNKNOWN service ${y.id}.`);
                  b.push(E);
                }
                let A = g.length > 0 ? g[0].index : h.length;
                if (h.length !== A)
                  throw new Error(
                    `[createInstance] First service dependency of ${p.name} at position ${A + 1} conflicts with ${h.length} static arguments`,
                  );
                return new p(...h, ...b);
              }
            }));
        },
        866: function (a, u, c) {
          var m =
              (this && this.__decorate) ||
              function (A, y, E, v) {
                var C,
                  x = arguments.length,
                  k = x < 3 ? y : v === null ? (v = Object.getOwnPropertyDescriptor(y, E)) : v;
                if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
                  k = Reflect.decorate(A, y, E, v);
                else
                  for (var R = A.length - 1; R >= 0; R--)
                    (C = A[R]) && (k = (x < 3 ? C(k) : x > 3 ? C(y, E, k) : C(y, E)) || k);
                return (x > 3 && k && Object.defineProperty(y, E, k), k);
              },
            d =
              (this && this.__param) ||
              function (A, y) {
                return function (E, v) {
                  y(E, v, A);
                };
              };
          (Object.defineProperty(u, "__esModule", { value: !0 }),
            (u.traceCall = u.setTraceLogger = u.LogService = void 0));
          let f = c(844),
            p = c(585),
            h = {
              trace: p.LogLevelEnum.TRACE,
              debug: p.LogLevelEnum.DEBUG,
              info: p.LogLevelEnum.INFO,
              warn: p.LogLevelEnum.WARN,
              error: p.LogLevelEnum.ERROR,
              off: p.LogLevelEnum.OFF,
            },
            g,
            b = (u.LogService = class extends f.Disposable {
              get logLevel() {
                return this._logLevel;
              }
              constructor(A) {
                (super(),
                  (this._optionsService = A),
                  (this._logLevel = p.LogLevelEnum.OFF),
                  this._updateLogLevel(),
                  this.register(this._optionsService.onSpecificOptionChange("logLevel", () => this._updateLogLevel())),
                  (g = this));
              }
              _updateLogLevel() {
                this._logLevel = h[this._optionsService.rawOptions.logLevel];
              }
              _evalLazyOptionalParams(A) {
                for (let y = 0; y < A.length; y++) typeof A[y] == "function" && (A[y] = A[y]());
              }
              _log(A, y, E) {
                (this._evalLazyOptionalParams(E),
                  A.call(console, (this._optionsService.options.logger ? "" : "xterm.js: ") + y, ...E));
              }
              trace(A, ...y) {
                this._logLevel <= p.LogLevelEnum.TRACE &&
                  this._log(
                    this._optionsService.options.logger?.trace.bind(this._optionsService.options.logger) ?? console.log,
                    A,
                    y,
                  );
              }
              debug(A, ...y) {
                this._logLevel <= p.LogLevelEnum.DEBUG &&
                  this._log(
                    this._optionsService.options.logger?.debug.bind(this._optionsService.options.logger) ?? console.log,
                    A,
                    y,
                  );
              }
              info(A, ...y) {
                this._logLevel <= p.LogLevelEnum.INFO &&
                  this._log(
                    this._optionsService.options.logger?.info.bind(this._optionsService.options.logger) ?? console.info,
                    A,
                    y,
                  );
              }
              warn(A, ...y) {
                this._logLevel <= p.LogLevelEnum.WARN &&
                  this._log(
                    this._optionsService.options.logger?.warn.bind(this._optionsService.options.logger) ?? console.warn,
                    A,
                    y,
                  );
              }
              error(A, ...y) {
                this._logLevel <= p.LogLevelEnum.ERROR &&
                  this._log(
                    this._optionsService.options.logger?.error.bind(this._optionsService.options.logger) ??
                      console.error,
                    A,
                    y,
                  );
              }
            });
          ((u.LogService = b = m([d(0, p.IOptionsService)], b)),
            (u.setTraceLogger = function (A) {
              g = A;
            }),
            (u.traceCall = function (A, y, E) {
              if (typeof E.value != "function") throw new Error("not supported");
              let v = E.value;
              E.value = function (...C) {
                if (g.logLevel !== p.LogLevelEnum.TRACE) return v.apply(this, C);
                g.trace(`GlyphRenderer#${v.name}(${C.map((k) => JSON.stringify(k)).join(", ")})`);
                let x = v.apply(this, C);
                return (g.trace(`GlyphRenderer#${v.name} return`, x), x);
              };
            }));
        },
        302: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.OptionsService = u.DEFAULT_OPTIONS = void 0));
          let m = c(460),
            d = c(844),
            f = c(114);
          u.DEFAULT_OPTIONS = {
            cols: 80,
            rows: 24,
            cursorBlink: !1,
            cursorStyle: "block",
            cursorWidth: 1,
            cursorInactiveStyle: "outline",
            customGlyphs: !0,
            drawBoldTextInBrightColors: !0,
            documentOverride: null,
            fastScrollModifier: "alt",
            fastScrollSensitivity: 5,
            fontFamily: "courier-new, courier, monospace",
            fontSize: 15,
            fontWeight: "normal",
            fontWeightBold: "bold",
            ignoreBracketedPasteMode: !1,
            lineHeight: 1,
            letterSpacing: 0,
            linkHandler: null,
            logLevel: "info",
            logger: null,
            scrollback: 1e3,
            scrollOnUserInput: !0,
            scrollSensitivity: 1,
            screenReaderMode: !1,
            smoothScrollDuration: 0,
            macOptionIsMeta: !1,
            macOptionClickForcesSelection: !1,
            minimumContrastRatio: 1,
            disableStdin: !1,
            allowProposedApi: !1,
            allowTransparency: !1,
            tabStopWidth: 8,
            theme: {},
            rescaleOverlappingGlyphs: !1,
            rightClickSelectsWord: f.isMac,
            windowOptions: {},
            windowsMode: !1,
            windowsPty: {},
            wordSeparator: " ()[]{}',\"`",
            altClickMovesCursor: !0,
            convertEol: !1,
            termName: "xterm",
            cancelEvents: !1,
            overviewRulerWidth: 0,
          };
          let p = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
          class h extends d.Disposable {
            constructor(b) {
              (super(),
                (this._onOptionChange = this.register(new m.EventEmitter())),
                (this.onOptionChange = this._onOptionChange.event));
              let A = { ...u.DEFAULT_OPTIONS };
              for (let y in b)
                if (y in A)
                  try {
                    let E = b[y];
                    A[y] = this._sanitizeAndValidateOption(y, E);
                  } catch (E) {
                    console.error(E);
                  }
              ((this.rawOptions = A),
                (this.options = { ...A }),
                this._setupOptions(),
                this.register(
                  (0, d.toDisposable)(() => {
                    ((this.rawOptions.linkHandler = null), (this.rawOptions.documentOverride = null));
                  }),
                ));
            }
            onSpecificOptionChange(b, A) {
              return this.onOptionChange((y) => {
                y === b && A(this.rawOptions[b]);
              });
            }
            onMultipleOptionChange(b, A) {
              return this.onOptionChange((y) => {
                b.indexOf(y) !== -1 && A();
              });
            }
            _setupOptions() {
              let b = (y) => {
                  if (!(y in u.DEFAULT_OPTIONS)) throw new Error(`No option with key "${y}"`);
                  return this.rawOptions[y];
                },
                A = (y, E) => {
                  if (!(y in u.DEFAULT_OPTIONS)) throw new Error(`No option with key "${y}"`);
                  ((E = this._sanitizeAndValidateOption(y, E)),
                    this.rawOptions[y] !== E && ((this.rawOptions[y] = E), this._onOptionChange.fire(y)));
                };
              for (let y in this.rawOptions) {
                let E = { get: b.bind(this, y), set: A.bind(this, y) };
                Object.defineProperty(this.options, y, E);
              }
            }
            _sanitizeAndValidateOption(b, A) {
              switch (b) {
                case "cursorStyle":
                  if (
                    (A || (A = u.DEFAULT_OPTIONS[b]),
                    !(function (y) {
                      return y === "block" || y === "underline" || y === "bar";
                    })(A))
                  )
                    throw new Error(`"${A}" is not a valid value for ${b}`);
                  break;
                case "wordSeparator":
                  A || (A = u.DEFAULT_OPTIONS[b]);
                  break;
                case "fontWeight":
                case "fontWeightBold":
                  if (typeof A == "number" && 1 <= A && A <= 1e3) break;
                  A = p.includes(A) ? A : u.DEFAULT_OPTIONS[b];
                  break;
                case "cursorWidth":
                  A = Math.floor(A);
                case "lineHeight":
                case "tabStopWidth":
                  if (A < 1) throw new Error(`${b} cannot be less than 1, value: ${A}`);
                  break;
                case "minimumContrastRatio":
                  A = Math.max(1, Math.min(21, Math.round(10 * A) / 10));
                  break;
                case "scrollback":
                  if ((A = Math.min(A, 4294967295)) < 0) throw new Error(`${b} cannot be less than 0, value: ${A}`);
                  break;
                case "fastScrollSensitivity":
                case "scrollSensitivity":
                  if (A <= 0) throw new Error(`${b} cannot be less than or equal to 0, value: ${A}`);
                  break;
                case "rows":
                case "cols":
                  if (!A && A !== 0) throw new Error(`${b} must be numeric, value: ${A}`);
                  break;
                case "windowsPty":
                  A = A ?? {};
              }
              return A;
            }
          }
          u.OptionsService = h;
        },
        660: function (a, u, c) {
          var m =
              (this && this.__decorate) ||
              function (h, g, b, A) {
                var y,
                  E = arguments.length,
                  v = E < 3 ? g : A === null ? (A = Object.getOwnPropertyDescriptor(g, b)) : A;
                if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
                  v = Reflect.decorate(h, g, b, A);
                else
                  for (var C = h.length - 1; C >= 0; C--)
                    (y = h[C]) && (v = (E < 3 ? y(v) : E > 3 ? y(g, b, v) : y(g, b)) || v);
                return (E > 3 && v && Object.defineProperty(g, b, v), v);
              },
            d =
              (this && this.__param) ||
              function (h, g) {
                return function (b, A) {
                  g(b, A, h);
                };
              };
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.OscLinkService = void 0));
          let f = c(585),
            p = (u.OscLinkService = class {
              constructor(h) {
                ((this._bufferService = h),
                  (this._nextId = 1),
                  (this._entriesWithId = new Map()),
                  (this._dataByLinkId = new Map()));
              }
              registerLink(h) {
                let g = this._bufferService.buffer;
                if (h.id === void 0) {
                  let C = g.addMarker(g.ybase + g.y),
                    x = { data: h, id: this._nextId++, lines: [C] };
                  return (C.onDispose(() => this._removeMarkerFromLink(x, C)), this._dataByLinkId.set(x.id, x), x.id);
                }
                let b = h,
                  A = this._getEntryIdKey(b),
                  y = this._entriesWithId.get(A);
                if (y) return (this.addLineToLink(y.id, g.ybase + g.y), y.id);
                let E = g.addMarker(g.ybase + g.y),
                  v = { id: this._nextId++, key: this._getEntryIdKey(b), data: b, lines: [E] };
                return (
                  E.onDispose(() => this._removeMarkerFromLink(v, E)),
                  this._entriesWithId.set(v.key, v),
                  this._dataByLinkId.set(v.id, v),
                  v.id
                );
              }
              addLineToLink(h, g) {
                let b = this._dataByLinkId.get(h);
                if (b && b.lines.every((A) => A.line !== g)) {
                  let A = this._bufferService.buffer.addMarker(g);
                  (b.lines.push(A), A.onDispose(() => this._removeMarkerFromLink(b, A)));
                }
              }
              getLinkData(h) {
                return this._dataByLinkId.get(h)?.data;
              }
              _getEntryIdKey(h) {
                return `${h.id};;${h.uri}`;
              }
              _removeMarkerFromLink(h, g) {
                let b = h.lines.indexOf(g);
                b !== -1 &&
                  (h.lines.splice(b, 1),
                  h.lines.length === 0 &&
                    (h.data.id !== void 0 && this._entriesWithId.delete(h.key), this._dataByLinkId.delete(h.id)));
              }
            });
          u.OscLinkService = p = m([d(0, f.IBufferService)], p);
        },
        343: (a, u) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }),
            (u.createDecorator = u.getServiceDependencies = u.serviceRegistry = void 0));
          let c = "di$target",
            m = "di$dependencies";
          ((u.serviceRegistry = new Map()),
            (u.getServiceDependencies = function (d) {
              return d[m] || [];
            }),
            (u.createDecorator = function (d) {
              if (u.serviceRegistry.has(d)) return u.serviceRegistry.get(d);
              let f = function (p, h, g) {
                if (arguments.length !== 3)
                  throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
                (function (b, A, y) {
                  A[c] === A ? A[m].push({ id: b, index: y }) : ((A[m] = [{ id: b, index: y }]), (A[c] = A));
                })(f, p, g);
              };
              return ((f.toString = () => d), u.serviceRegistry.set(d, f), f);
            }));
        },
        585: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }),
            (u.IDecorationService =
              u.IUnicodeService =
              u.IOscLinkService =
              u.IOptionsService =
              u.ILogService =
              u.LogLevelEnum =
              u.IInstantiationService =
              u.ICharsetService =
              u.ICoreService =
              u.ICoreMouseService =
              u.IBufferService =
                void 0));
          let m = c(343);
          var d;
          ((u.IBufferService = (0, m.createDecorator)("BufferService")),
            (u.ICoreMouseService = (0, m.createDecorator)("CoreMouseService")),
            (u.ICoreService = (0, m.createDecorator)("CoreService")),
            (u.ICharsetService = (0, m.createDecorator)("CharsetService")),
            (u.IInstantiationService = (0, m.createDecorator)("InstantiationService")),
            (function (f) {
              ((f[(f.TRACE = 0)] = "TRACE"),
                (f[(f.DEBUG = 1)] = "DEBUG"),
                (f[(f.INFO = 2)] = "INFO"),
                (f[(f.WARN = 3)] = "WARN"),
                (f[(f.ERROR = 4)] = "ERROR"),
                (f[(f.OFF = 5)] = "OFF"));
            })(d || (u.LogLevelEnum = d = {})),
            (u.ILogService = (0, m.createDecorator)("LogService")),
            (u.IOptionsService = (0, m.createDecorator)("OptionsService")),
            (u.IOscLinkService = (0, m.createDecorator)("OscLinkService")),
            (u.IUnicodeService = (0, m.createDecorator)("UnicodeService")),
            (u.IDecorationService = (0, m.createDecorator)("DecorationService")));
        },
        480: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.UnicodeService = void 0));
          let m = c(460),
            d = c(225);
          class f {
            static extractShouldJoin(h) {
              return (1 & h) != 0;
            }
            static extractWidth(h) {
              return (h >> 1) & 3;
            }
            static extractCharKind(h) {
              return h >> 3;
            }
            static createPropertyValue(h, g, b = !1) {
              return ((16777215 & h) << 3) | ((3 & g) << 1) | (b ? 1 : 0);
            }
            constructor() {
              ((this._providers = Object.create(null)),
                (this._active = ""),
                (this._onChange = new m.EventEmitter()),
                (this.onChange = this._onChange.event));
              let h = new d.UnicodeV6();
              (this.register(h), (this._active = h.version), (this._activeProvider = h));
            }
            dispose() {
              this._onChange.dispose();
            }
            get versions() {
              return Object.keys(this._providers);
            }
            get activeVersion() {
              return this._active;
            }
            set activeVersion(h) {
              if (!this._providers[h]) throw new Error(`unknown Unicode version "${h}"`);
              ((this._active = h), (this._activeProvider = this._providers[h]), this._onChange.fire(h));
            }
            register(h) {
              this._providers[h.version] = h;
            }
            wcwidth(h) {
              return this._activeProvider.wcwidth(h);
            }
            getStringCellWidth(h) {
              let g = 0,
                b = 0,
                A = h.length;
              for (let y = 0; y < A; ++y) {
                let E = h.charCodeAt(y);
                if (55296 <= E && E <= 56319) {
                  if (++y >= A) return g + this.wcwidth(E);
                  let x = h.charCodeAt(y);
                  56320 <= x && x <= 57343 ? (E = 1024 * (E - 55296) + x - 56320 + 65536) : (g += this.wcwidth(x));
                }
                let v = this.charProperties(E, b),
                  C = f.extractWidth(v);
                (f.extractShouldJoin(v) && (C -= f.extractWidth(b)), (g += C), (b = v));
              }
              return g;
            }
            charProperties(h, g) {
              return this._activeProvider.charProperties(h, g);
            }
          }
          u.UnicodeService = f;
        },
        781: (a, u, c) => {
          (Object.defineProperty(u, "__esModule", { value: !0 }), (u.Terminal = void 0));
          let m = c(437),
            d = c(969),
            f = c(460);
          class p extends d.CoreTerminal {
            constructor(g = {}) {
              (super(g),
                (this._onBell = this.register(new f.EventEmitter())),
                (this.onBell = this._onBell.event),
                (this._onCursorMove = this.register(new f.EventEmitter())),
                (this.onCursorMove = this._onCursorMove.event),
                (this._onTitleChange = this.register(new f.EventEmitter())),
                (this.onTitleChange = this._onTitleChange.event),
                (this._onA11yCharEmitter = this.register(new f.EventEmitter())),
                (this.onA11yChar = this._onA11yCharEmitter.event),
                (this._onA11yTabEmitter = this.register(new f.EventEmitter())),
                (this.onA11yTab = this._onA11yTabEmitter.event),
                this._setup(),
                this.register(this._inputHandler.onRequestBell(() => this.bell())),
                this.register(this._inputHandler.onRequestReset(() => this.reset())),
                this.register((0, f.forwardEvent)(this._inputHandler.onCursorMove, this._onCursorMove)),
                this.register((0, f.forwardEvent)(this._inputHandler.onTitleChange, this._onTitleChange)),
                this.register((0, f.forwardEvent)(this._inputHandler.onA11yChar, this._onA11yCharEmitter)),
                this.register((0, f.forwardEvent)(this._inputHandler.onA11yTab, this._onA11yTabEmitter)));
            }
            get buffer() {
              return this.buffers.active;
            }
            get markers() {
              return this.buffer.markers;
            }
            addMarker(g) {
              if (this.buffer === this.buffers.normal)
                return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + g);
            }
            bell() {
              this._onBell.fire();
            }
            input(g, b = !0) {
              this.coreService.triggerDataEvent(g, b);
            }
            resize(g, b) {
              (g === this.cols && b === this.rows) || super.resize(g, b);
            }
            clear() {
              if (this.buffer.ybase !== 0 || this.buffer.y !== 0) {
                (this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y)),
                  (this.buffer.lines.length = 1),
                  (this.buffer.ydisp = 0),
                  (this.buffer.ybase = 0),
                  (this.buffer.y = 0));
                for (let g = 1; g < this.rows; g++)
                  this.buffer.lines.push(this.buffer.getBlankLine(m.DEFAULT_ATTR_DATA));
                this._onScroll.fire({ position: this.buffer.ydisp, source: 0 });
              }
            }
            reset() {
              ((this.options.rows = this.rows), (this.options.cols = this.cols), this._setup(), super.reset());
            }
          }
          u.Terminal = p;
        },
      },
      e = {};
    function r(a) {
      var u = e[a];
      if (u !== void 0) return u.exports;
      var c = (e[a] = { exports: {} });
      return (t[a].call(c.exports, c, c.exports, r), c.exports);
    }
    var n = {};
    (() => {
      var a = n;
      (Object.defineProperty(a, "__esModule", { value: !0 }), (a.Terminal = void 0));
      let u = r(285),
        c = r(975),
        m = r(90),
        d = r(781),
        f = r(741),
        p = r(844),
        h = ["cols", "rows"];
      class g extends p.Disposable {
        constructor(A) {
          (super(),
            (this._core = this.register(new d.Terminal(A))),
            (this._addonManager = this.register(new f.AddonManager())),
            (this._publicOptions = { ...this._core.options }));
          let y = (v) => this._core.options[v],
            E = (v, C) => {
              (this._checkReadonlyOptions(v), (this._core.options[v] = C));
            };
          for (let v in this._core.options) {
            Object.defineProperty(this._publicOptions, v, {
              get: () => this._core.options[v],
              set: (x) => {
                (this._checkReadonlyOptions(v), (this._core.options[v] = x));
              },
            });
            let C = { get: y.bind(this, v), set: E.bind(this, v) };
            Object.defineProperty(this._publicOptions, v, C);
          }
        }
        _checkReadonlyOptions(A) {
          if (h.includes(A)) throw new Error(`Option "${A}" can only be set in the constructor`);
        }
        _checkProposedApi() {
          if (!this._core.optionsService.options.allowProposedApi)
            throw new Error("You must set the allowProposedApi option to true to use proposed API");
        }
        get onBell() {
          return this._core.onBell;
        }
        get onBinary() {
          return this._core.onBinary;
        }
        get onCursorMove() {
          return this._core.onCursorMove;
        }
        get onData() {
          return this._core.onData;
        }
        get onLineFeed() {
          return this._core.onLineFeed;
        }
        get onResize() {
          return this._core.onResize;
        }
        get onScroll() {
          return this._core.onScroll;
        }
        get onTitleChange() {
          return this._core.onTitleChange;
        }
        get parser() {
          return (this._checkProposedApi(), this._parser || (this._parser = new c.ParserApi(this._core)), this._parser);
        }
        get unicode() {
          return (this._checkProposedApi(), new m.UnicodeApi(this._core));
        }
        get rows() {
          return this._core.rows;
        }
        get cols() {
          return this._core.cols;
        }
        get buffer() {
          return (
            this._checkProposedApi(),
            this._buffer || (this._buffer = this.register(new u.BufferNamespaceApi(this._core))),
            this._buffer
          );
        }
        get markers() {
          return (this._checkProposedApi(), this._core.markers);
        }
        get modes() {
          let A = this._core.coreService.decPrivateModes,
            y = "none";
          switch (this._core.coreMouseService.activeProtocol) {
            case "X10":
              y = "x10";
              break;
            case "VT200":
              y = "vt200";
              break;
            case "DRAG":
              y = "drag";
              break;
            case "ANY":
              y = "any";
          }
          return {
            applicationCursorKeysMode: A.applicationCursorKeys,
            applicationKeypadMode: A.applicationKeypad,
            bracketedPasteMode: A.bracketedPasteMode,
            insertMode: this._core.coreService.modes.insertMode,
            mouseTrackingMode: y,
            originMode: A.origin,
            reverseWraparoundMode: A.reverseWraparound,
            sendFocusMode: A.sendFocus,
            wraparoundMode: A.wraparound,
          };
        }
        get options() {
          return this._publicOptions;
        }
        set options(A) {
          for (let y in A) this._publicOptions[y] = A[y];
        }
        input(A, y = !0) {
          this._core.input(A, y);
        }
        resize(A, y) {
          (this._verifyIntegers(A, y), this._core.resize(A, y));
        }
        registerMarker(A = 0) {
          return (this._checkProposedApi(), this._verifyIntegers(A), this._core.addMarker(A));
        }
        addMarker(A) {
          return this.registerMarker(A);
        }
        dispose() {
          super.dispose();
        }
        scrollLines(A) {
          (this._verifyIntegers(A), this._core.scrollLines(A));
        }
        scrollPages(A) {
          (this._verifyIntegers(A), this._core.scrollPages(A));
        }
        scrollToTop() {
          this._core.scrollToTop();
        }
        scrollToBottom() {
          this._core.scrollToBottom();
        }
        scrollToLine(A) {
          (this._verifyIntegers(A), this._core.scrollToLine(A));
        }
        clear() {
          this._core.clear();
        }
        write(A, y) {
          this._core.write(A, y);
        }
        writeln(A, y) {
          (this._core.write(A),
            this._core.write(
              `\r
`,
              y,
            ));
        }
        reset() {
          this._core.reset();
        }
        loadAddon(A) {
          this._addonManager.loadAddon(this, A);
        }
        _verifyIntegers(...A) {
          for (let y of A) if (y === 1 / 0 || isNaN(y) || y % 1 != 0) throw new Error("This API only accepts integers");
        }
      }
      a.Terminal = g;
    })();
    var o = coi;
    for (var s in n) o[s] = n[s];
    n.__esModule && Object.defineProperty(o, "__esModule", { value: !0 });
  })();
});