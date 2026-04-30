/**
 * @module aNr
 * @category app/api
 * @label iflow-api
 * @position 120 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aNr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aNr = T((Jwu, sNr) => {
  "use strict";
  function wbo(t, e, r) {
    if (r || arguments.length === 2)
      for (var n = 0, o = e.length, s; n < o; n++)
        (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), (s[n] = e[n]));
    return t.concat(s || Array.prototype.slice.call(e));
  }
  var xbo = (function () {
    function t() {
      this.type = t.type;
    }
    return (
      (t.prototype.init = function (e, r, n) {
        ((this.services = e), (this.detectorOptions = r), (this.i18nextOptions = n));
      }),
      (t.prototype.detect = function () {
        var e,
          r,
          n,
          o =
            (n =
              (r = (e = process.env.LC_ALL) !== null && e !== void 0 ? e : process.env.LC_MESSAGES) !== null &&
              r !== void 0
                ? r
                : process.env.LANG) !== null && n !== void 0
              ? n
              : process.env.LANGUAGE,
          s = this._getShellLanguage(o);
        if (s != null) return s;
        if (Array.isArray(this.i18nextOptions.fallbackLng)) return wbo([], this.i18nextOptions.fallbackLng, !0);
        if (typeof this.i18nextOptions.fallbackLng == "string") return this.i18nextOptions.fallbackLng;
      }),
      (t.prototype.cacheUserLanguage = function () {}),
      (t.prototype._getShellLanguage = function (e) {
        var r = this;
        if (e != null) {
          var n = e
            .split(":")
            .map(function (o) {
              return o.split(".")[0].replace("_", "-");
            })
            .filter(function (o) {
              return r.services.languageUtils.isSupportedCode(o);
            })
            .map(function (o) {
              return r.services.languageUtils.formatLanguageCode(o);
            });
          if (
            !n.some(function (o) {
              return o === "C";
            }) &&
            !(n.length === 1 && n[0] === "")
          )
            return n.length === 1 ? n[0] : n;
        }
      }),
      (t.type = "languageDetector"),
      t
    );
  })();
  sNr.exports = xbo;
});
var uNr,
  cNr = j(() => {
    "use strict";
    uNr = {
      context: {
        remaining: "{{percentage}}% context left",
        contextFile: "context",
        file: "file",
        files: "files",
        mcpServer: "MCP server",
        mcpServers: "MCP servers",
        blocked: "Blocked",
        loadedPrefix: "Loaded: ",
        ctrlTToggle: "ctrl+t to toggle",
        ctrlTView: "ctrl+t to view",
      },
      gifIntro: { slogan: "Reshaping Development Paradigm with AI", skipAnimation: "Press Enter to skip animation" },
      about: {
        title: "About iFlow CLI",
        cliVersion: "CLI Version",
        gitCommit: "Git Commit",
        model: "Model",
        sandbox: "Sandbox",
        os: "OS",
        authMethod: "Auth Method",
        serviceAgreement: "Service Agreement",
        viewTermsOfService: "View Terms of Service",
        gcpProject: "GCP Project",
      },
      tips: {
        versionNo: "Version: ",
        joinCommunity:
          "\u{1F44B} Click <join /> to join the iFlow Developer Forum, become an iFlow Builder, and share experiences and feedback!",
        joinCommunityBrief: "Join the iFlow Developer Forum ",
        joinCommunityLinkPlaceholder: "here",
        header: "Tips for getting started",
        basicUsage: "1. Ask questions, edit files, or run commands.",
        bestPractices: "2. Be specific for the best results.",
        fileConfiguration:
          "1. Create <fileName/> files by <command/> command and then customize your interactions with iFlow.",
        helpCommand: "<command/> for more information.",
        helpCommandShortcuts: "iFlow \xB7 Help -<command/> get shortcuts, commands, and usage tips <shortcuts/>",
        smartMode: "<mode/> mode is enabled by default, use <keyCombination/> to switch modes.",
        thinkMode: "Use <keyCombination/> to switch think mode.",
        documentation: "Type <commandDocs/> for document, and <commandDemo/> for a quick demo.",
        randomLabel: "Tip",
        fileInclusion: "Use @ to include file contents in your prompt",
        shellExecution: "Use ! to execute shell commands directly",
        chatHistory: "Use /chat to save and resume conversation states",
        clearScreen: "Use Ctrl+L to clear screen anytime",
        contextCompression: "Use /compress to save tokens by summarizing context",
        toolsOverview: "Use /tools to view available tools",
        fileRestore: "Use /restore to undo file changes",
        sessionStats: "Use /stats to check session statistics",
        shellToggle: "Use ! to toggle shell mode",
        memoryManagement: "Use /memory to manage AI instructions",
        themeCustomization: "Use /theme to customize appearance",
        mcpServers: "Use /mcp to manage external tool servers",
        checkpointDisabledDueToGit: "Checkpointing is disabled. Please install Git to enable it",
        fileDragDrop: "Drag files to terminal then use Ctrl+V to paste, or copy file paths directly to clipboard",
        filePathPaste: "Supports pasting file paths, image files are automatically processed to referenceable format",
        pasteImage: "Paste images using <keyCombination /> (not cmd+v!)",
        pasteImageLinuxWindows: "Paste images using <keyCombination />.",
        linuxNewline: "Use <keyCombination /> for new line.",
      },
      command: {
        about: "show version info",
        agents: "Commands for interacting with agents.",
        annualReport: "View 2025 Annual Report",
        auth: "change the auth method",
        bug: "submit a bug report",
        chat: "Manage conversation history.",
        clear: "clear the screen and conversation history",
        cleanupCheckpoint: "clear all checkpoint history and free up disk space",
        cleanupHistory: "clear conversation history for the current project and free up disk space",
        commands:
          "Manage marketplace commands: list local, browse online, get details, add/remove from CLI (project/global scope)",
        compress: "Compresses the context by replacing it with a summary. (aliases: /compact, /summarize)",
        copy: "Copy the last result or code snippet to clipboard",
        demo: "Interactive task for research and brainstorming workflows",
        directory: "Manage workspace directories",
        docs: "open full iFlow CLI documentation in your browser",
        editor: "set external editor preference",
        export: "Export conversation history",
        extensions: "list active extensions",
        help: "for help on iflow-cli",
        ide: "manage IDE connection",
        init: "Analyzes the project and creates or updates a tailored IFLOW.md file.",
        language: "change the language",
        log: "show current session log storage location",
        mcp: "list configured MCP servers and tools, browse online repository, or authenticate with OAuth-enabled servers",
        memory: "Commands for interacting with memory.",
        model: "change the model",
        skills: "list configured skills and manage skill registry",
        quit: "exit the cli",
        resume: "Resume a previous conversation from history",
        setupGithub: "Set up GitHub Actions",
        stats: "check session stats. Usage: /stats [model|tools]",
        theme: "change the theme",
        terminalSetup: "Install Shift+Enter key binding for newlines in input box",
        tools: "list available iFlow CLI tools",
        update: "update version",
        vim: "toggle vim mode on/off",
        hooks: "manage hook configurations and settings",
        qa: "intelligent Q&A based on knowledge base retrieval",
      },
      hooks: {
        configurationErrors: "Hook configuration validation errors:",
        configLoadFailed: "Failed to initialize hook manager:",
        configReloadFailed: "Failed to reload hook config:",
        hookExecutionFailed: "Hook execution failed:",
        invalidJsonConfig: "Invalid JSON in hook configuration:",
        promptBlocked: "Prompt blocked by hook",
        promptBlockedReason: "Prompt blocked by hook: {{reason}}",
        notificationHookMessage: "Notification hook messages:",
        eventTypes: {
          preToolUse: "Pre-tool execution",
          postToolUse: "Post-tool execution",
          stop: "Session stop",
          subagentStop: "Subagent stop",
          setUpEnvironment: "Environment setup",
          sessionStart: "Session start",
          sessionEnd: "Session end",
          userPromptSubmit: "User prompt submission",
          notification: "Notification display",
        },
        validation: {
          hooksRequired: "'hooks' field is required and must be an array",
          matcherMustBeString: "'matcher' must be a string",
          matcherNotSupported: "'matcher' field is not supported for {{eventType}} hooks",
          commandTypeOnly: "Only 'command' type is currently supported",
          commandRequired: "'command' field is required and must be a string",
          timeoutInvalid: "'timeout' must be a positive number",
        },
      },
      input: {
        placeholder: "  Type your message or @path/to/file",
        vimPlaceholder: "  Press 'i' for INSERT mode and 'Esc' for NORMAL mode.",
        ideConnected: "Connected",
        ideConnecting: "Connecting...",
        ideDisconnected: "Disconnected",
        line: "line",
        lines: "lines",
        selected: "selected",
        debugLabel: "--debug",
        macOsSeatbelt: "MacOS Seatbelt",
        acceptingEdits: "Accepting edits",
        planMode: "Plan mode",
        yoloMode: "YOLO mode",
        defaultMode: "Default mode",
        smartMode: "Smart mode",
        toggleHint: " (shift + tab / alt + m to toggle)",
        thinkingMode: "Thinking",
        thinkingOn: "On",
        thinkingOff: "Off",
        thinkingToggleHint: " (tab to toggle)",
        thinkingNotSupported: "not supported",
        shellModeEnabled: "shell mode enabled",
        shellModeDisableHint: " (esc to disable)",
        toggleDetail: "Press Ctrl+R to toggle...",
        esc: "Press Esc or q to back",
        welcomeMessage: "Hi~ What would you like to do today?",
        accelerateCardWelcome: "Hi iFlower Core, the engine is ready and is accelerating at full speed.",
      },
      inputPrompt: {
        imageDescriptionInProgress: "Image description in progress... (larger images take more time)",
        agentsOnlineModeNavigation: "  Agents Online Mode - Use j/k/h/l/Enter/q to navigate",
        imageNotFound: "Unable to find image in clipboard",
      },
      modelValidationDialog: {
        title: "Model Validation Required",
        modelNotSupported: "Model '{{model}}' is not supported.",
        reason: "Reason: {{reason}}",
        task: "Task: {{task}}",
        selectModel: "Please select a supported model to continue:",
        suggested: "Suggested: {{model}}",
        enterToSelect: "Use Enter to select, Esc to cancel",
        preference: "Model Preference",
        youSelected: "You selected",
        futureChoice:
          "In the future, when '{{requestedModel}}' is not supported, would you like to always use '{{selectedModel}}'?",
        enterToSelectEscToGoBack: "Use Enter to select, Esc to go back",
        askEachTime: "No, ask me each time",
        rememberSession: "Yes, remember for this session",
        rememberAlways: "Yes, remember always",
      },
      shellConfirmationDialog: {
        title: "Shell Command Execution",
        description: "A custom command wants to run the following shell commands:",
        proceed: "Do you want to proceed?",
        allowOnce: "Yes, allow once",
        allowAlwaysSession: "Yes, allow always for this session",
        noEsc: "No (esc)",
      },
      mcpOnlineDialog: {
        loadingTitle: "Loading MCP Servers...",
        loadingMessage: "Please wait while we fetch available servers...",
        availableServers: "Available MCP Servers",
        availableServersWithCount: "Available MCP Servers ({{count}} total)",
        noServersAvailable: "No servers available",
        noServersFound: "No MCP servers found in the online repository.",
        pageInfo: "Page {{current}} of {{total}}",
        toolsAndVisits: "Tools: {{tools}} | Visits: {{visits}}",
        details: "Details:",
        version: "Version: {{version}}",
        protocol: "Protocol: {{protocol}}",
        transports: "Transports: {{transports}}",
        authTypes: "Auth Types: {{types}}",
        visits: "Visits: {{count}}",
        availableTools: "Available Tools ({{count}}):",
        navigation: "Navigation:",
        navigateUpDown: "\u2191/\u2193 or j/k - Navigate up/down",
        prevNextPage: "\u2190/\u2192 or h/l - Previous/Next page",
        viewDetails: "Enter - View details",
        exit: "q - Exit",
        actions: "Actions:",
        installForProject: "1 - Install for project",
        installForUser: "2 - Install for user",
        backToList: "b - Back to list",
        installing: "Installing {{name}}...",
        installingWithConfig: "Installing {{name}} with configuration...",
        loadingServerAndTools: "Loading MCP server '{{name}}' and discovering tools...",
        toolsLoadedMessage: "{{count}} tools loaded and ready to use",
        serverLoadedSuccess: "\u2714 MCP server '{{name}}' loaded successfully with {{count}} tools",
        serverInstalledToolsFailed: "\u26A0\uFE0F MCP server '{{name}}' installed but failed to load tools: {{error}}",
        installSuccess: "Successfully installed {{name}} for {{scope}} ({{path}}){{toolsMessage}}",
        installFailed: "Failed to install {{name}}: {{error}}",
        installationFailed: "Installation failed",
        pleaseAuthenticate: "Please authenticate first by running the auth command",
        unableToLoadServers: "Unable to load MCP servers. Please try again later",
        authenticationFailed: "Authentication failed. Please check your API key or re-authenticate",
        accessDenied: "Access denied. Please check your permissions",
        serviceNotFound: "MCP servers service not found. Please try again later",
        serverError: "Server error. Please try again later",
        connectionError: "Unable to load MCP servers. Please check your connection and try again",
        networkError: "Network error. Please check your internet connection",
        failedToLoadServers: "Failed to load servers",
      },
      mcpAoneDialog: {
        title: "Aone Marketplace",
        description: "Access Aone marketplace to browse and explore MCP servers and tools.",
        loading: "Opening Aone marketplace in your browser...",
        sandboxRedirect: "Please visit: {{url}}",
        openingBrowser: "Opening {{url}} in your browser...",
        redirectSuccess: "Redirected to Aone marketplace successfully",
        redirectError: "Failed to open browser: {{error}}",
        actions: "Actions:",
        pressEnterToOpen: "Enter or o - Open in browser",
        pressEscToExit: "ESC or q - Exit",
      },
      toolStatsDisplay: {
        title: "Tool Stats For Nerds",
        noToolCalls: "No tool calls have been made in this session.",
        toolName: "Tool Name",
        calls: "Calls",
        successRate: "Success Rate",
        avgDuration: "Avg Duration",
        userDecisionSummary: "User Decision Summary",
        totalReviewedSuggestions: "Total Reviewed Suggestions:",
        accepted: "Accepted:",
        rejected: "Rejected:",
        modified: "Modified:",
        overallAgreementRate: "Overall Agreement Rate:",
      },
      initCommand: {
        configNotAvailable: "Configuration not available.",
        existingFileFound:
          "{{contextFileName}} already exists. Reading current content and analyzing project to optimize it.",
        readFileError: "Failed to read existing {{contextFileName}} file: {{error}}",
        emptyFileCreated: "Empty {{contextFileName}} created. Now analyzing the project to populate it.",
      },
      qaCommand: {
        noQuestion: "Please provide a question. Usage: /qa <your question>",
        noConfig: "Configuration not available. Please restart the application.",
        iflowOnlyFeature:
          "The /qa command is only available for iFlow authenticated users. Please login with iFlow to use this feature.",
        noApiKey: "API key not found. Please configure your iFlow API key.",
        retrievingNotification: "Retrieving documents from knowledge base...",
        retrieving: "Retrieving relevant information from knowledge base...",
        retrievalFailed: "Retrieval failed: {{error}}",
        retrievalSuccess: "Successfully retrieved {{count}} relevant documents",
        noResults: "No relevant documents found",
        unexpectedError: "An unexpected error occurred: {{error}}",
      },
      loading: {
        waitingForConfirmation: "Waiting for user confirmation...",
        cancelHint: "esc to cancel",
        generating: "Generating",
        phrases: [
          "I'm Feeling Lucky",
          "Shipping awesomeness... ",
          "Painting the serifs back on...",
          "Navigating the slime mold...",
          "Consulting the digital spirits...",
          "Reticulating splines...",
          "Warming up the AI processors...",
          "Asking the magic conch shell...",
          "Generating witty retort...",
          "Polishing the algorithms...",
          "Don't rush perfection...",
          "Brewing fresh bytes...",
          "Counting electrons...",
          "Engaging cognitive processors...",
          "Checking for syntax errors in the universe...",
          "One moment, optimizing humor...",
          "Shuffling punchlines...",
          "Untangling neural nets...",
          "Compiling brilliance...",
          "Loading wit.exe...",
          "Summoning the cloud of wisdom...",
          "Preparing a witty response...",
          "Just a sec, I'm debugging reality...",
          "Confuzzling the options...",
          "Tuning the cosmic frequencies...",
          "Crafting a response worthy of your patience...",
          "Compiling the 1s and 0s...",
          "Resolving dependencies... and existential crises...",
          "Defragmenting memories... both RAM and personal...",
          "Rebooting the humor module...",
          "Caching the essentials (mostly cat memes)...",
          "Running system processes...",
          "Optimizing for ludicrous speed",
          "Swapping bits... don't tell the bytes...",
          "Garbage collecting... be right back...",
          "Assembling the interwebs...",
          "Converting coffee into code...",
          "Pushing to production (and hoping for the best)...",
          "Updating the syntax for reality...",
          "Rewiring the synapses...",
          "Looking for a misplaced semicolon...",
          "Greasin' the cogs of the machine...",
          "Pre-heating the servers...",
          "Calibrating the flux capacitor...",
          "Engaging the improbability drive...",
          "Channeling the Force...",
          "Aligning the stars for optimal response...",
          "So say we all...",
          "Loading the next great idea...",
          "Just a moment, I'm in the zone...",
          "Preparing to dazzle you with brilliance...",
          "Just a tick, I'm polishing my wit...",
          "Hold tight, I'm crafting a masterpiece...",
          "Just a jiffy, I'm debugging the universe...",
          "Just a moment, I'm aligning the pixels...",
          "Just a sec, I'm optimizing the humor...",
          "Just a moment, I'm tuning the algorithms...",
          "Warp speed engaged...",
          "Mining for more Dilithium crystals...",
          "I'm Giving Her all she's got Captain!",
          "Don't panic...",
          "Following the white rabbit...",
          "The truth is in here... somewhere...",
          "Blowing on the cartridge...",
          "Looking for the princess in another castle...",
          "Loading... Do a barrel roll!",
          "Waiting for the respawn...",
          "Finishing the Kessel Run in less than 12 parsecs...",
          "The cake is not a lie, it's just still loading...",
          "Fiddling with the character creation screen...",
          "Just a moment, I'm finding the right meme...",
          "Pressing 'A' to continue...",
          "Herding digital cats...",
          "Polishing the pixels...",
          "Finding a suitable loading screen pun...",
          "Distracting you with this witty phrase...",
          "Almost there... probably...",
          "Our hamsters are working as fast as they can...",
          "Giving Cloudy a pat on the head...",
          "Petting the cat...",
          "Rickrolling my boss...",
          "Never gonna give you up, never gonna let you down...",
          "Optimizing audio processing...",
          "Validating data streams...",
          "I'm going the distance, I'm going for speed...",
          "Is this the real life? Is this just fantasy?...",
          "I've got a good feeling about this...",
          "Poking the bear...",
          "Doing research on the latest memes...",
          "Figuring out how to make this more witty...",
          "Hmmm... let me think...",
          "What do you call a fish with no eyes? A fsh...",
          "Processing large datasets...",
          "Analyzing system patterns...",
          "Optimizing display settings...",
          "Managing memory resources...",
          "What can you do with a broken pencil? Nothing, it's pointless...",
          "Applying percussive maintenance...",
          "Searching for the correct USB orientation...",
          "Ensuring the magic smoke stays inside the wires...",
          "Optimizing code performance...",
          "Processing text editing commands...",
          "Spinning up the hamster wheel...",
          "Optimizing system performance...",
          "Engage.",
          "I'll be back... with an answer.",
          "My other process is a TARDIS...",
          "Communing with the machine spirit...",
          "Letting the thoughts marinate...",
          "Just remembered where I put my keys...",
          "Pondering the orb...",
          "I've seen things you people wouldn't believe... like a user who reads loading messages.",
          "Initiating thoughtful gaze...",
          "What's a computer's favorite snack? Microchips.",
          "Why do Java developers wear glasses? Because they don't C#.",
          "Charging the laser... pew pew!",
          "Dividing by zero... just kidding!",
          "Processing complex operations...",
          "Making it go beep boop.",
          "Buffering... because even AIs need a moment.",
          "Entangling quantum particles for a faster response...",
          "Polishing the chrome... on the algorithms.",
          "Are you not entertained? (Working on it!)",
          "Summoning the code gremlins... to help, of course.",
          "Just waiting for the dial-up tone to finish...",
          "Recalibrating the humor-o-meter.",
          "My other loading screen is even funnier.",
          "Processing input sequences...",
          "Enhancing... Enhancing... Still loading.",
          "It's not a bug, it's a feature... of this loading screen.",
          "Have you tried turning it off and on again? (The loading screen, not me.)",
          "Loading, please wait...",
          "Teaching AI to moonwalk...",
          "Waking up the AI...",
          "Consulting the digital oracle...",
          "Adding coffee to the code...",
          "Feeding the pixel monsters...",
          "Please wait, contemplating life...",
          "Downloading more RAM...",
          "Conversing with the cloud...",
          "Convincing electrons to cooperate...",
          "Refueling the servers...",
          "Untangling the internet...",
          "Summoning code spirits...",
          "Calculating the meaning of life...",
          "Cooking instant noodles, be right back...",
          "Negotiating with the firewall...",
          "Looking for the missing semicolon...",
          "Asking ChatGPT for advice...",
          "Resolving system issues...",
          "Rebooting the matrix...",
          "Feeding data to the AI...",
          "Convincing 1s and 0s to get along...",
          "Please wait, thinking about how to get smarter...",
          "Polishing the digital crystal ball...",
          "Loading the mysteries of the universe...",
          "Consulting the Stack Overflow gods...",
          "Having a heart-to-heart with the server...",
          "Feeding the hamsters powering this site...",
          "Massaging the code...",
          "Waiting for coffee to compile...",
          "Contemplating humanity's ultimate questions...",
          "Defragmenting the space-time continuum...",
          "Playing chess with the AI...",
          "Counting to infinity... twice...",
          "Brushing the algorithm's teeth...",
          "Searching for the last digit of pi...",
          "Adding water to the clouds...",
          "Teaching robots to love...",
          "Negotiating with quantum computers...",
          "Trying to remember where I left my keys...",
          "Waxing the code...",
          "Convincing AI not to take over the world...",
          "Singing lullabies to the server...",
          "Hunting for rare Pok\xE9mon in the database...",
          "Shaking hands with the internet...",
          "Translating binary to English...",
          "Cooling down the CPU...",
          "Asking Siri for directions...",
          "Doing yoga with the code...",
          "Searching for intelligent life in the database...",
          "Telling stories to the algorithm...",
          "Consulting the ancient scrolls of programming...",
          "Making friends with the firewall...",
          "Processing text commands...",
          "Giving the code a bath...",
          "Convincing pixels to align properly...",
          "Playing rock-paper-scissors with the AI...",
          "Managing background processes...",
          "Watering the database...",
          "Waiting for the toast to pop...",
          "Dancing with the cloud...",
          "Teaching AI to appreciate dad jokes...",
          "Giving the code a spa treatment...",
          "Consulting the magic 8-ball...",
          "Playing hide and seek with the server...",
          "Trying to understand blockchain in five seconds...",
          "Combing the algorithm's hair...",
          "Asking the internet elders for wisdom...",
          "Cheering for the code...",
          "Calculating how many licks to the center of a Tootsie Pop...",
          "Playing Go with the AI...",
          "Convincing my cat to get off the keyboard...",
          "Telling jokes to the server...",
          "Searching for the last page of the internet...",
          "Massaging the code...",
          "Trying to understand JavaScript promises...",
          "Having a romance with the database...",
          "Waiting for the microwave to ding...",
          "Feeding the algorithm...",
          "Teaching robots to dance the robot...",
          "Playing chess with the cloud...",
          "Convincing AI that humans are worth keeping around...",
          "Singing to the code...",
          "Searching for my other sock in the database...",
          "Meditating with the server...",
          "Trying to fold a fitted sheet...",
          "Telling bedtime stories to the algorithm...",
          "Asking the internet for its wisdom...",
          "Dancing tango with the code...",
          "Calculating the airspeed velocity of an unladen swallow...",
          "Making tea for the server...",
          "Teaching AI to appreciate fine art...",
          "Playing cat and mouse with the firewall...",
          "Waiting for the quantum fluctuations to stabilize...",
          "Massaging the code's shoulders...",
          "Convincing electrons to move faster...",
          "Chatting with the clouds...",
          "Searching for the end of this loading screen...",
          "Telling jokes to the algorithm...",
          "Almost there... probably... maybe... soon...",
          "Building system components...",
        ],
      },
      diffRenderer: { noDiffContent: "No diff content.", noChangesDetected: "No changes detected." },
      textTruncation: {
        truncatedLines: "[...Truncated {{count}} lines...]",
        truncatedCharactersAndLines: "[...Truncated {{characters}} characters, {{lines}} lines...]",
      },
      thinking: {
        thinking: "Thinking",
        thinkingWithSubject: "Thinking: {{subject}}",
        pressEnterToToggle: "(Press Enter to toggle)",
        moreLines: "... ({{count}} more lines - Press Space to {{action}})",
        expand: "expand",
        collapse: "collapse",
      },
      todoWrite: {
        validationErrors: {
          invalidJsonString: "Invalid JSON string format",
          todosRequired: "Todos array is required",
          todoNullUndefined: "Todo at index {{index}} cannot be null or undefined",
          todoEmptyTask: "Todo at index {{index}} must have a non-empty task",
          todoInvalidStatus: "Todo at index {{index}} has invalid status: {{status}}",
          duplicateIds: "Duplicate todo IDs found",
          multipleInProgress: "Only one task can be in progress at a time",
        },
        messages: {
          invalidParameters: "Invalid todo parameters",
          errorPrefix: "Todo validation failed: {{reason}}",
          errorDisplay: "Todo Error: {{error}}",
          todosModifiedSuccess: "Todo list has been updated successfully",
        },
        status: {
          updatingTodoList:
            "Updating todo list ({{pending}} pending, {{inProgress}} in progress, {{completed}} completed)",
          updateTodos: "Updated todo list",
          noTodos: "no todos",
        },
      },
      lsTool: {
        errors: {
          pathNotAbsolute: "Path must be absolute: {{path}}",
          pathNotInWorkspace: "Path must be within one of the workspace directories: {{directories}}",
          invalidParameters: "Invalid parameters provided. Reason: {{reason}}",
          failedToExecute: "Failed to execute tool.",
          directoryNotFound: "Directory not found or inaccessible: {{path}}",
          directoryNotFoundShort: "Directory not found or inaccessible.",
          pathNotDirectory: "Path is not a directory: {{path}}",
          pathNotDirectoryShort: "Path is not a directory.",
          listingFailed: "Error listing directory: {{error}}",
          listingFailedShort: "Failed to list directory.",
        },
        messages: {
          directoryEmpty: "Directory {{path}} is empty.",
          directoryEmptyShort: "Directory is empty.",
          directoryListing: `Directory listing for {{path}}:
{{content}}`,
          listedItems: "Listed {{count}} item(s).",
          gitIgnored: "{{count}} git-ignored",
          iflowIgnored: "{{count}} iflow-ignored",
        },
      },
      geminiStream: {
        messages: {
          requestCancelled: "Request cancelled.",
          compressingContext: "Compressing context to stay within token limits for {{model}}...",
          contextCompressed: "Context compressed (from {{originalTokenCount}} to {{newTokenCount}} tokens).",
          maxSessionTurns:
            "The session has reached the maximum number of turns: {{maxTurns}}. Please update this limit in your setting.json file.",
          loopDetected:
            "A potential loop was detected. This can happen due to repetitive tool calls or other model behavior. The request has been halted.",
          planApprovalResponse:
            "User has approved your plan. You can now start coding. Start with updating your todo list if applicable",
        },
        finishReasons: {
          maxTokens: "Response truncated due to token limits.",
          safety: "Response stopped due to safety reasons.",
          recitation: "Response stopped due to recitation policy.",
          language: "Response stopped due to unsupported language.",
          blocklist: "Response stopped due to forbidden terms.",
          prohibitedContent: "Response stopped due to prohibited content.",
          spii: "Response stopped due to sensitive personally identifiable information.",
          other: "Response stopped for other reasons.",
          malformedFunctionCall: "Response stopped due to malformed function call.",
          imageSafety: "Response stopped due to image safety violations.",
          unexpectedToolCall: "Response stopped due to unexpected tool call.",
        },
      },
      compressionMessage: {
        compressingHistory: "Compressing chat history",
        previousConversationCompressed: "Previous Conversation Compressed",
        contextCompressed: "Context compressed from {{originalTokenCount}} to {{newTokenCount}} tokens",
        expandCollapseHint: " (ctrl+r to {{action}} summary)",
        expand: "expand",
        collapse: "collapse",
        summaryLabel: "Summary:",
        collapseHint: "(ctrl+r to collapse)",
      },
      writeFileTool: {
        errors: {
          pathNotAbsolute: "File path must be absolute: {{filePath}}",
          pathNotInWorkspace: "File path must be within one of the workspace directories: {{directories}}",
          pathIsDirectory: "Path is a directory, not a file: {{filePath}}",
          accessError: "Error accessing path properties for validation: {{filePath}}. Reason: {{error}}",
          invalidParameters: "Invalid parameters provided. Reason: {{reason}}",
          checkingFileError: "Error checking existing file: {{message}}",
          checkingFileErrorLong: "Error checking existing file {{filePath}}: {{message}}",
          writingFileError: "Error writing to file: {{error}}",
          writingFileErrorLong: "Error writing to file {{filePath}}: {{error}}",
        },
        messages: {
          invalidParams: "Model did not provide valid parameters for write file tool",
          writingTo: "Write to {{path}}",
          confirmWrite: "Confirm Write: {{path}}",
          newFileCreated: "Successfully created and wrote to new file: {{filePath}}.",
          fileOverwritten: "Successfully overwrote file: {{filePath}}.",
          userModified: "User modified the `content` to be: {{content}}",
        },
      },
      fileUtils: {
        errors: {
          fileNotFound: "File not found.",
          fileNotFoundLong: "File not found: {{filePath}}",
          pathIsDirectory: "Path is a directory.",
          pathIsDirectoryLong: "Path is a directory, not a file: {{filePath}}",
          fileTooLarge:
            "File content ({{sizeKB}}KB) exceeds maximum allowed size (256KB). Please use offset and limit parameters to read specific portions of the file, or use the GrepTool to search for specific content.",
          errorReadingFile: "Error reading file {{displayPath}}: {{errorMessage}}",
          errorParsingPdf: "Error parsing PDF file: {{error}}",
          errorParsingDocx: "Error parsing DOCX file: {{error}}",
          errorParsingExcel: "Error parsing Excel file: {{error}}",
          errorParsingPdfLong: "Error parsing PDF file {{filePath}}: {{error}}",
          errorParsingDocxLong: "Error parsing DOCX file {{filePath}}: {{error}}",
          errorParsingExcelLong: "Error parsing Excel file {{filePath}}: {{error}}",
          imageDescriptionFailed: "Failed to generate image description: {{error}}",
        },
        messages: {
          cannotDisplayBinary: "Cannot display content of binary file: {{path}}",
          skippedBinaryFile: "Skipped binary file: {{path}}",
          cannotDisplayLargeSvg: "Cannot display content of SVG file larger than 1MB: {{path}}",
          skippedLargeSvg: "Skipped large SVG file (>1MB): {{path}}",
          readSvgAsText: "Read SVG as text: {{path}}",
          readPdfAsText: "Read PDF file as text: {{path}}",
          readDocxAsText: "Read DOCX file as text: {{path}}",
          readExcelAsText: "Read Excel file as text: {{path}}",
          errorReadingPdf: "Error reading PDF file: {{path}}",
          errorReadingDocx: "Error reading DOCX file: {{path}}",
          errorReadingExcel: "Error reading Excel file: {{path}}",
          readMediaFile: "Read {{fileType}} file: {{path}}",
          unhandledFileType: "Unhandled file type: {{fileType}}",
          skippedUnhandledFile: "Skipped unhandled file type: {{path}}",
          unhandledFileTypeError: "Unhandled file type for {{filePath}}",
          fileTruncatedLines:
            "[File content truncated: showing lines {{startLine}}-{{endLine}} of {{totalLines}} total lines. Use offset/limit parameters to view more.]",
          fileTruncatedLength:
            "[File content partially truncated: some lines exceeded maximum length of {{maxLength}} characters.]",
          readLinesRange: "Read lines {{startLine}}-{{endLine}} of {{totalLines}} from {{path}}",
          readAllLinesShortened: "Read all {{totalLines}} lines from {{path}} (some lines were shortened)",
          readAllLines: "Read all {{totalLines}} lines from {{path}}",
          someLinesShortened: " (some lines were shortened)",
          imageDescriptionGenerated: `Generated image description for {{path}}:
{{description}}`,
          imageDescriptionError: "Error generating image description for {{path}}",
          imageDescriptionErrorWithFallback:
            "Error generating image description for {{path}} ({{sizeKB}}KB). File content available.",
          readImageFile: "Read image file {{path}} ({{sizeKB}}KB)",
          imageFileRead: "Image file: {{path}} ({{sizeKB}}KB, {{mimeType}})",
        },
      },
      session: { agentPoweringDown: "Agent powering down. Goodbye!" },
      authInProgress: {
        authTimeout: "Authentication timed out. Please try again.",
        waitingForAuth: "Waiting for auth... (Press ESC to cancel)",
        copyUrlPrompt: "Browser didn't open automatically? Please copy the following link and open it in your browser:",
      },
      modelDialog: {
        modelSelection: "Model Selection",
        selectModelPrompt: "Please select the model you want to use with iFlow.",
        defaultSelection: "Enter To Use Default selection: GLM 4.7",
        modelNameRequired: "Model name cannot be empty",
        selectInstructions: "(Use Enter to select, Esc to cancel)",
        modelConfiguration: "Model Configuration",
        enterModelPrompt: "Please enter the model name you want to use.",
        modelNameLabel: "Model Name:",
        modelNamePlaceholder: "Enter model name (e.g. gpt-4o, claude-3-5-sonnet)",
        confirmInstructions: "(Press Enter to confirm, Esc to cancel)",
        recommend: "recommend",
        fast: "Preview",
        directMultimodal: "direct multimodal",
        loading: "Loading...",
      },
      agentInstallDialog: {
        title: "Install New Agent",
        agentInstallation: "Agent Installation",
        stepOf: "Step {{current}} of {{total}}",
        locationTitle: "Choose Installation Location",
        locationDescription: "Where would you like to install the agent?",
        projectAgent: "Project Agent",
        projectAgentDesc: "Install in the current project (accessible only to this project)",
        userAgent: "User Agent",
        userAgentDesc: "Install globally for your user (accessible across all projects)",
        methodTitle: "Choose Creation Method",
        methodDescription: "How would you like to create the agent?",
        generateWithIFlow: "Generate with iFlow (recommended)",
        generateWithIFlowDesc: "Create through the intelligent guidance of iFlow",
        manualConfig: "Manual configuration",
        manualConfigDesc: "Create it step by step by hand",
        fromOnlineRepo: "From Online Repository",
        fromOnlineRepoDesc: "Browse and install from the online agent repository",
        agentGoalTitle: "Describe Your Agent Goal",
        agentGoalDescription: "What do you want this agent to do? Be specific about its purpose and capabilities.",
        agentGoalPlaceholder: "e.g. Review code for security vulnerabilities and best practices",
        agentTypeTitle: "Agent Type (identifier)",
        agentTypeDescription: "Enter a unique identifier for your agent",
        agentTypePlaceholder: "e.g. code-reviewer, tech-lead, etc",
        systemPromptTitle: "System Prompt",
        systemPromptDescription: "Define the agent's behavior and capabilities",
        systemPromptPlaceholder: "Enter system prompt. Be comprehensive for best results",
        descriptionTitle: "Agent Description",
        descriptionDescription: "Provide a brief description of what this agent does",
        descriptionPlaceholder: "Enter agent description",
        toolsTitle: "Select Tools",
        toolsDescription: "Choose which tools this agent can use",
        allowAccessTo: "Allow access to {{tool}} tool",
        mcpsTitle: "Select MCP Servers",
        mcpsDescription: "Choose which MCP servers this agent can access",
        allowMcpAccess: "Allow access to {{mcp}} MCP server",
        colorTitle: "Choose Background Color",
        colorDescription: "Select a color for your agent",
        automaticColor: "Automatic color",
        automaticColorDesc: "Let the system choose a color automatically",
        red: "Red",
        blue: "Blue",
        green: "Green",
        yellow: "Yellow",
        purple: "Purple",
        orange: "Orange",
        pink: "Pink",
        cyan: "Cyan",
        previewTitle: "Preview Agent Configuration",
        previewDescription: "Review your agent configuration before creating",
        details: "Details:",
        location: "Location: {{location}}",
        model: "Model: {{model}}",
        color: "Color: {{color}}",
        tools: "Tools:",
        mcpServers: "MCP Servers:",
        systemPrompt: "System Prompt:",
        allToolsAvailable: "All tools available",
        allMcpServersAvailable: "All MCP servers available",
        generatedPreviewTitle: "Review Generated Configuration",
        generatedPreviewDescription: "Review and edit the AI-generated agent configuration",
        continueToToolsSelection: "[Continue to Tools Selection]",
        proceedToNextStep: "Proceed to next step",
        agentTypeLabel: "Agent Type",
        descriptionLabel: "Description",
        systemPromptLabel: "System Prompt",
        notSet: "(not set)",
        generatingTitle: "Generating Agent Configuration",
        generatingDescription: "Using AI to create your agent from the goal description...",
        startingGeneration: "Starting generation...",
        pleaseWait: "Please wait while the configuration is generated.",
        generatingFromGoal: "Generating agent configuration from your goal...",
        generatedSuccessfully: "\u2714 Agent configuration generated successfully!",
        continue: "[Continue]",
        currentValue: "Current value: {{value}}",
        currentValueNotSet: "Current value: (not set)",
        pressEnterToEdit: "Press Enter to edit",
        editField: "Edit {{field}}",
        modifyField: "Modify the {{field}} for your agent",
        enterField: "Enter {{field}}",
        navigation: "Navigation:",
        navigateOptions: "\u2022 \u2191/\u2193 or j/k - Navigate options",
        enterToSelect: "\u2022 Enter - Select option",
        enterToEdit: "\u2022 Enter - Edit value",
        enterToEditField: "\u2022 Enter - Edit field or continue",
        escToBack: "\u2022 ESC - Back",
        qToExit: "\u2022 q - Exit",
        actions: "Actions:",
        enterToCreate: "\u2022 Enter - Create agent",
        escToBackEdit: "\u2022 ESC - Back to edit",
        creatingAgent: "Creating agent '{{agentType}}'...",
        successfullyCreated: "Successfully created agent '{{agentType}}' at {{filePath}}",
        agentCreatedSuccess: "\u2714 Successfully created agent '{{agentType}}'",
        redirectingToOnline: "Redirecting to online repository...",
        useAgentsOnline: "Use /agents online to browse and install agents from the online repository",
        failedToGenerate: "Failed to generate agent configuration: {{error}}",
        failedToCreate: "Failed to create agent: {{error}}",
        failedGenerateStatus: "\u274C Failed to generate configuration: {{error}}",
        failedCreateStatus: "\u274C Failed to create agent: {{error}}",
      },
      statsDisplay: {
        sessionStats: "Session Stats",
        interactionSummary: "Interaction Summary",
        toolCalls: "Tool Calls:",
        successRate: "Success Rate:",
        userAgreement: "User Agreement:",
        reviewed: "reviewed",
        performance: "Performance",
        wallTime: "Wall Time:",
        agentActive: "Agent Active:",
        apiTime: "API Time:",
        toolTime: "Tool Time:",
        modelUsage: "Model Usage",
        requests: "Reqs",
        inputTokens: "Input Tokens",
        outputTokens: "Output Tokens",
        savingsHighlight: "Savings Highlight:",
        cacheReduction: "of input tokens were served from the cache, reducing costs.",
        tokenBredownTip: "Tip: For a full token breakdown, run `/stats model`.",
      },
      agentsCommand: {
        list: {
          availableAgents: "Available agents:",
          personalAgents: "Personal agents",
          projectAgents: "Project agents",
          builtinAgents: "Built-in agents (always available)",
          generalPurpose: "- general-purpose",
          tips: "\u{1F4A1} Tips:",
          listDesc: "Use /agents list desc to show agent descriptions",
          refresh: "Use /agents refresh to refresh agents from source files",
          online: "Use /agents online to browse and install agents from online repository",
          noAgentsFound: "No agents found",
          description: "Description",
          descriptionSubtitle: "(tells Iflow when to use this agent):",
          tools: "Tools:",
          allTools: "All tools",
          noInherit: " (no inherit)",
          inherit: " (inherit)",
          mcps: "MCPs:",
          none: "None",
          allMcpServers: "All MCP servers available (inherit)",
          color: "Color:",
          systemPrompt: "System prompt:",
        },
        refresh: {
          refreshing: "Refreshing agents from source files...",
          success: "Agents refreshed successfully. Found {{count}} agents.",
          error: "Error refreshing agents: {{error}}",
        },
        online: {
          availableOnlineAgents: "Available Online Agents",
          total: "total",
          category: "Category:",
          model: "Model:",
          version: "Version:",
          visibility: "Visibility:",
          context: "Context:",
          availableTools: "Available Tools",
          tags: "Tags:",
          extendedInformation: "Extended Information:",
          allowedTools: "Allowed Tools:",
          inheritTools: "Inherit Tools:",
          yes: "Yes",
          no: "No",
          mcpServers: "MCP Servers:",
          serverPage: "Server Page",
          showingAgents: "Showing {{count}} agents",
          navigation: "Navigation:",
          navigateUpDown: "\u2191/\u2193 - Navigate up/down",
          prevNextPage: "h/l - Previous/Next page (load from server)",
          viewDetails: "Enter - View details",
          refreshPage: "r - Refresh current page",
          exit: "q - Exit",
          actions: "Actions:",
          installProject: "1 - Install for project",
          installUser: "2 - Install for user",
          backToList: "b - Back to list",
        },
        install: {
          successfullyInstalled: "\u2714 Successfully installed agent '{{name}}' for {{scope}}",
          location: "Location: {{path}}",
          useAgent: "You can now use this agent by typing: /agents list",
          alreadyInstalled: "\u26A0\uFE0F Agent '{{name}}' is already installed",
          alreadyExistsMessage: "An agent with this name already exists in your {{scope}} scope.",
          tipUseList: "Tip: Use /agents list to see all installed agents",
          installFailed: "\u274C Failed to install agent '{{name}}'",
          errorMessage: "Error: {{error}}",
        },
        subCommands: {
          list: "List available agents.",
          refresh: "Refresh agents from source files.",
          online: "Browse and install agents from online repository",
          install: "Install a new agent with guided setup",
        },
        errors: { showingAgents: "Error showing agents: {{error}}" },
      },
      agentsOnlineDialog: {
        loadingTitle: "Loading Agents...",
        loadingMessage: "Please wait while we fetch available agents...",
        availableAgents: "Available Agents",
        availableAgentsWithCount: "Available Agents ({{count}} total)",
        noAgentsAvailable: "No agents available",
        noAgentsFound: "No agents found in the online repository.",
        pageOf: "Page {{current}} of {{total}}",
        category: "Category:{{category}}",
        details: "Details:",
        model: "Model: {{model}}",
        categoryLabel: "Category: {{category}}",
        version: "Version: {{version}}",
        tools: "Tools:",
        mcpServers: "MCP Servers:",
        systemPrompt: "System Prompt:",
        allToolsAvailableInherit: "All tools available (inherit)",
        noToolsAvailableNoInherit: "No tools available (no inherit)",
        inherit: " (inherit)",
        noInherit: " (no inherit)",
        allMcpServersAvailableInherit: "All MCP servers available (inherit)",
        noMcpServersAvailableNoInherit: "No MCP servers available (no inherit)",
        navigation: "Navigation:",
        navigateUpDown: "\u2022 \u2191/\u2193 or j/k - Navigate up/down",
        prevNextPage: "\u2022 \u2190/\u2192 or h/l - Previous/Next page",
        viewDetails: "\u2022 Enter - View details",
        exit: "\u2022 q - Exit",
        actions: "Actions:",
        installProject: "\u2022 1 - Install for project",
        installUser: "\u2022 2 - Install for user",
        backToList: "\u2022 b - Back to list",
        installing: "Installing {{name}}...",
        authRequired: "Please authenticate first by running the auth command",
        loadFailed: "Unable to load agents. Please try again later",
        authFailed: "Authentication failed. Please check your API key or re-authenticate",
        accessDenied: "Access denied. Please check your permissions",
        serviceNotFound: "Agents service not found. Please try again later",
        serverError: "Server error. Please try again later",
        serverLoadFailed: "Failed to load agents from server",
        connectionError: "Unable to load agents. Please check your connection and try again",
        networkError: "Network error. Please check your internet connection",
        loadAgentsFailed: "Failed to load agents",
        installationFailed: "Installation failed",
        createAgentFailed: "Failed to create agent for '{{name}}'",
        installFailedWithError: "Failed to install {{name}}: {{error}}",
      },
      skillsOnlineDialog: {
        loadingTitle: "Loading Skills...",
        loadingMessage: "Please wait while we fetch available skills...",
        availableSkills: "Available Skills",
        availableSkillsWithCount: "Available Skills ({{count}} total)",
        noSkillsAvailable: "No skills available",
        pageOf: "Page {{current}} of {{total}}",
        category: "Category: {{category}}",
        details: "Details:",
        version: "Version",
        categoryLabel: "Category",
        author: "Author",
        skillId: "Skill ID",
        tagsLabel: "Tags",
        downloadUrl: "Download URL:",
        navigation: "Navigation:",
        navigateUpDown: "\u2191/\u2193 or j/k - Navigate up/down",
        prevNextPage: "\u2190/\u2192 or h/l - Previous/Next page",
        viewDetails: "Enter - View details",
        exit: "q - Exit",
        tags: "Tags",
        actions: "Actions:",
        installGlobal: "1 - Install globally",
        installProject: "2 - Install to project",
        backToList: "b - Back to list",
        qExit: "q - Exit",
        downloading: "Downloading skill...",
        extracting: "Extracting skill...",
        installing: "Installing skill...",
        installSuccess: "\u2713 Skill '{{name}}' installed successfully",
        installFailed: "Skill installation failed",
        installFailedWithError: "\u2717 Installation failed: {{error}}",
        alreadyExists: "Skill '{{name}}' already exists",
        loadFailed: "Unable to load skills. Please try again later",
        authFailed: "Authentication failed. Please check your API key or re-authenticate",
        accessDenied: "Access denied. Please check your permissions",
        notFound: "Skills not found. Please try again later",
        serverError: "Server error. Please try again later",
        networkError: "Network error: {{error}}",
        invalidResponse: "Invalid response from server",
      },
      copyableUrlBox: {
        pressCtrlCToCopy: "Use Ctrl+C to copy, avoid selecting border characters",
        copied: "Url copied to clipboard!",
      },
      authDialog: {
        getStarted: "Get started",
        iflowAuth: "iFlow Authentication",
        iflowOAuthLogin: "iFlow OAuth Login",
        aoneAuth: "Aone Authentication",
        modelConfig: "Model Configuration",
        openaiConfig: "OpenAI Compatible API Configuration",
        loginWithIFlowRecommend: "Login with iFlow(recommend)",
        loginWithIFlowApiKey: "Login with iFlow ApiKey",
        loginWithIFlowApiKeyRecommend: "Login with iFlow ApiKey(recommend)",
        loginWithAoneRecommend: "Login with Aone(recommend)",
        loginWithAoneApiKey: "Login with Aone Code Private Token",
        openaiCompatibleApi: "OpenAI Compatible API",
        howToAuth: "How would you like to authenticate for this project?",
        migrationWarning:
          "\u26A0 iFlow login methods will be retired on {{deadline}}. Only OpenAI Compatible API will be supported. Please migrate early.",
        enterIFlowApiKey: "Please enter your iFlow API key. See: https://docs.iflow.cn/docs/",
        enterAoneApiKey: "Please enter your Aone Private Token. See: https://code.alibaba-inc.com/profile/account",
        selectModel: "Please select the model you want to use.",
        enterModelName: "Please enter the model name you want to use.",
        defaultSelection: "Enter To Use Default selection: GLM 4.7",
        enterBaseUrl: "Please enter the base URL for your OpenAI compatible API.",
        enterApiKey: "Please enter your API key.",
        enterOpenaiModelName: "Please enter the model name.",
        oauthStep1: "1. Please copy the following link and open it in your browser:",
        oauthStep2: "2. Login to your iFlow account and authorize",
        oauthStep3: "3. Copy the authorization code and paste it below:",
        authCodeLabel: "Authorization Code:",
        authCodePlaceholder: "Paste authorization code...",
        failedToGetApiKey: "Failed to get API key",
        authFailed: "Authentication failed",
        apiKeyLabel: "API Key:",
        modelNameLabel: "Model Name:",
        baseUrlLabel: "Base URL:",
        current: "Current: {{value}}",
        apiKeyPlaceholder: "Enter your iFlow API key...",
        privateTokenPlaceholder: "Enter your Aone Private Token...",
        modelNamePlaceholder: "Enter model name (e.g. Qwen3-Coder-Plus)",
        openaiModelPlaceholder: "Enter model name (e.g. gpt-4)",
        baseUrlPlaceholder: "https://api.openai.com/v1",
        openaiApiKeyPlaceholder: "Enter your API key...",
        useEnterToSelect: "(Use Enter to select)",
        browserNotAvailable: "\u26A0\uFE0F  Browser launch not available in this environment (SSH/CI/no display).",
        useApiKeyAlternative: 'Alternatively, use "Login with iFlow ApiKey" for headless environments.',
        termsOfService: "Terms of Services and Privacy Notice for iFlow CLI",
        mustSelectAuth: "You must select an auth method to proceed. Press Ctrl+C twice to exit.",
      },
      textInput: {
        defaultPlaceholder: "Enter value...",
        defaultLabel: "Input:",
        instructions: "Press Enter to confirm, Escape to cancel",
      },
      passwordInput: {
        defaultPlaceholder: "Enter your API key...",
        defaultLabel: "API Key:",
        instructions: "Press Enter to confirm, Escape to cancel",
        validationError: "Invalid API key format. Only English letters, digits, and special characters are allowed.",
      },
      suggestionsDisplay: { loading: "Loading suggestions..." },
      editTool: {
        errors: {
          pathNotAbsolute: "File path must be absolute: {{filePath}}",
          pathNotInWorkspace: "File path must be within one of the workspace directories: {{directories}}",
          fileNotFound: "File not found: {{filePath}}",
          pathIsDirectory: "Path is a directory, not a file: {{filePath}}",
          stringNotFound: "Failed to edit, could not find the string to replace in {{filePath}}",
          fileAlreadyExists: "Failed to edit. Attempted to create a file that already exists: {{filePath}}",
          editFailed: "Failed to apply edit: {{error}}",
          expectedOccurrenceMismatch: "Failed to edit, expected {{expected}} occurrence(s) but found {{actual}}",
        },
        messages: {
          createFile: "Create {{path}}",
          editFile: "Edit {{path}}",
          noChanges: "No file changes to {{path}}",
          successfulEdit: "Successfully edited {{path}}",
        },
      },
      smartEditTool: {
        errors: {
          unknownWriteError: "Unknown error occurred",
          executingEdit: "Error executing edit: {{error}}",
          writingFile: "Error writing file: {{error}}",
          stringNotFoundDisplay: "String not found",
          occurrenceMismatchDisplay: "Occurrence mismatch",
          noChangeDisplay: "No changes required",
          fileNotFoundDisplay: "File not found",
          readContentFailureDisplay: "Failed to read content",
          readContentFailure: "Failed to read file content: {{error}}",
          fileAlreadyExistsDisplay: "File already exists",
          noChangesRequiredDisplay: "No changes required",
          noChangesRequired: "No changes required for edit",
          confirmationWithInvalidParams: "Cannot confirm edit with invalid parameters",
          preparingEdit: "Error preparing edit: {{error}}",
          errorDisplay: "Error: {{error}}",
          invalidParameters: "Invalid parameters: {{reason}}",
          invalidParametersDisplay: "Invalid parameters",
          filePathEmpty: "File path cannot be empty",
        },
        messages: {
          confirmEdit: "Confirm edit to {{path}}",
          invalidParams: "Invalid parameters",
          invalidStringParams: "Invalid string parameters",
          created: "Created {{path}}",
          newFileCreated: "New file created",
          fileModified: "File modified",
          userModified: "User modified",
        },
      },
      globTool: {
        errors: {
          pathNotInWorkspace:
            'Search path ("{{path}}") resolves outside the allowed workspace directories: {{directories}}',
          pathNotInWorkspaceShort: "Path is not within workspace",
          pathNotExist: "Search path does not exist {{path}}",
          pathNotDirectory: "Search path is not a directory: {{path}}",
          accessError: "Error accessing search path: {{error}}",
          patternEmpty: "The 'pattern' parameter cannot be empty",
          searchFailed: "Error during glob search operation: {{error}}",
          searchFailedShort: "Error: An unexpected error occurred",
        },
        messages: {
          noFilesFound: 'No files found matching pattern "{{pattern}}"',
          noFilesFoundShort: "No files found",
          filesFound: 'Found {{count}} file(s) matching "{{pattern}}"',
          filesFoundShort: "Found {{count}} matching file(s)",
        },
      },
      grepTool: {
        errors: {
          invalidPattern: "Invalid regular expression pattern provided: {{pattern}}. Error: {{error}}",
          pathValidationFailed:
            'Path validation failed: Attempted path "{{path}}" resolves outside the allowed workspace directories: {{directories}}',
          invalidParameters: "Error: Invalid parameters provided. Reason: {{reason}}",
          invalidParametersShort: "Model provided invalid parameters. Error: {{error}}",
          searchFailed: "Error during grep search operation: {{error}}",
          searchFailedShort: "Error: {{error}}",
          pathNotDirectory: "Path is not a directory: {{path}}",
          pathNotExist: "Path does not exist: {{path}}",
          pathAccessFailed: "Failed to access path stats for {{path}}: {{error}}",
        },
        messages: {
          noMatches: 'No matches found for pattern "{{pattern}}"',
          noMatchesShort: "No matches found",
          matchesFound: 'Found {{count}} {{matchType}} for pattern "{{pattern}}" in {{fileCount}} file(s)',
          matchesFoundShort: "Found {{count}} {{matchType}}",
        },
      },
      shellTool: {
        errors: {
          commandEmpty: "Command cannot be empty",
          directoryAbsolute: "Directory cannot be absolute: {{directory}}",
          commandFailed: "Command failed: {{error}}",
          executionFailed: "Command execution failed",
          commandNotAllowed: "Command is not allowed: {{command}}",
          couldNotIdentifyCommand: "Could not identify command root to obtain permission from user.",
          directoryNotRegistered: "Directory '{{directory}}' is not a registered workspace directory.",
          directoryAmbiguous:
            "Directory name '{{directory}}' is ambiguous as it matches multiple workspace directories.",
        },
        messages: {
          commandCancelled: "Command was cancelled by user",
          commandSuccess: "Command executed successfully",
        },
      },
      multiEditTool: {
        errors: {
          pathNotAbsolute: "File path must be absolute: {{filePath}}",
          pathNotInWorkspace: "File path must be within the root directory ({{targetDir}}): {{filePath}}",
          editNoChanges: "Edit {{editNumber}}: old_string and new_string must be different",
          fileNotFoundForEdit:
            "File not found: {{filePath}}. Use an empty old_string in the first edit to create a new file.",
          editStringNotFound: "Edit {{editNumber}}: Could not find the string to replace",
          editFailed: "Edit {{editNumber}}: {{error}}",
          validationError: "Validation error: {{error}}",
          validationErrorShort: "Validation error: {{error}}",
          calculationError: "Error calculating edits: {{error}}",
          calculationErrorShort: "Error calculating edits: {{error}}",
          multiEditFailed: "MultiEdit failed: {{error}}. No changes were applied.",
          multiEditFailedShort: "MultiEdit failed: {{error}}. No changes were applied.",
          executionError: "Error executing multi-edit: {{error}}",
          fileWriteError: "Error writing file: {{error}}",
        },
        messages: {
          fileCreatedWithEdits: "Created {{path}} and applied {{editCount}} additional edits",
          newFileCreated: "Created new file: {{filePath}} and applied {{editCount}} edits.",
          editsApplied: "Successfully applied {{editCount}} edits to {{filePath}}.",
          userModified: "User modified the edits.",
        },
      },
      readFileTool: {
        errors: {
          pathNotAbsolute:
            "File path must be absolute, but was relative: {{filePath}}. You must provide an absolute path.",
          pathNotInWorkspace: "File path must be within one of the workspace directories: {{directories}}",
          offsetInvalid: "Offset must be a non-negative number",
          limitInvalid: "Limit must be a positive number",
          fileIgnored: "File path '{{filePath}}' is ignored by .iflowignore pattern(s).",
          pathUnavailable: "Path unavailable",
          invalidParameters: "Error: Invalid parameters provided. Reason: {{reason}}",
          readError: "Error reading file",
        },
      },
      imageReadTool: {
        errors: {
          pathNotAbsolute:
            "File path must be absolute, but was relative: {{filePath}}. You must provide an absolute path.",
          pathNotInWorkspace: "File path must be within one of the workspace directories: {{directories}}",
          fileNotFound: "File not found: {{filePath}}",
          notImageFile: "File is not a supported image format: {{filePath}}",
          emptyBase64: "base64 data cannot be empty",
          invalidBase64: "Invalid base64 data format",
          invalidMimeType: 'Invalid MIME type: {{mimeType}}, must be an image type starting with "image/"',
          multimodalHelperUnavailable: "Multimodal helper unavailable, cannot generate image description",
          invalidParameters: "Error: Invalid parameters provided. Reason: {{reason}}",
          executionError: "Execution error: {{error}}",
          executionErrorShort: "Image read error",
          inputUnavailable: "Input unavailable",
        },
        description: { base64Image: "base64 encoded image" },
      },
      webFetchTool: {
        errors: {
          noUrlFoundFallback: "Error: No URL found in the prompt for fallback.",
          fallbackError: "Error: {{error}}",
          promptEmpty: "The 'prompt' parameter cannot be empty and must contain URL(s) and instructions.",
          noValidUrl: "The 'url' must be a valid URL (starting with http:// or https://).",
          executionError: "Error: {{error}}",
        },
        messages: {
          contentProcessedFallback: "Content for {{url}} processed using fallback fetch.",
          contentProcessed: "Content processed from prompt.",
        },
      },
      todoReadTool: {
        messages: {
          readingTodoList: "Reading the current todo list",
          todoListEmpty: "The todo list is currently empty.",
          currentTodos: `\xB7Current Todos
  \u23BF (No todos)`,
          todosFound:
            "Found {{count}} todos: {{pending}} pending, {{inProgress}} in progress, {{completed}} completed.",
        },
      },
      memoryTool: {
        errors: {
          factRequired: 'Parameter "fact" must be a non-empty string.',
          savingError: "Error saving memory: {{error}}",
        },
        messages: {
          fileUpdated: "Okay, I've updated the memory file with your modifications.",
          factRemembered: `Okay, I've remembered that: "{{fact}}"`,
        },
      },
      readManyFilesTool: {
        errors: {
          noSearchPaths: "No search paths or include patterns provided.",
          noSearchPathsInfo: `## Information

No search paths or include patterns were specified. Nothing to read or concatenate.`,
          invalidParameters: "Error: Invalid parameters for {{toolName}}. Reason: {{reason}}",
          parameterError: `## Parameter Error

{{error}}`,
          searchError: "Error during file search: {{error}}",
          searchErrorInfo: "## File Search Error\n\nAn error occurred while searching for files:\n```\n{{error}}\n```",
        },
        messages: {
          resultHeader: "ReadManyFiles Result (Target Dir: `{{targetDir}}`)",
          filesReadSuccess: "Successfully read and concatenated content from **{{count}} file(s)**.",
          processedFiles: "Processed Files:",
          processedFilesLimited: "Processed Files (first 10 shown):",
          andMore: "...and {{count}} more.",
          noFilesRead: "No files were read and concatenated based on the criteria.",
          skippedItems: "Skipped {{count}} item(s):",
          skippedItemsLimited: "Skipped {{count}} item(s) (first 5 shown):",
          noMatchingFiles: "No files matching the criteria were found or all were skipped.",
          usingPatterns: "using patterns: {{patterns}} (within target directory: {{targetDir}})",
          willAttemptToRead:
            'Will attempt to read and concatenate files {{pathDesc}}. {{excludeDesc}}. File encoding: {{encoding}}. Separator: "{{separator}}".',
          excluding: "Excluding: {{patterns}}",
          patternsLike: "patterns like {{patterns}}",
          noneSpecified: "none specified",
          includesFromGeminiIgnore: "includes {{count}} from .iflowignore",
        },
      },
      exitPlanModeTool: {
        errors: {
          planRequired: 'Parameter "plan" must be a non-empty string.',
          validationError: "Validation error: {{error}}",
          executionError: "Execution error: {{error}}",
        },
        messages: { readyToCode: "Ready to start coding with plan: {{plan}}", exitPlanMode: "Exiting plan mode" },
      },
      askUserQuestionTool: {
        errors: {
          questionsRequired: 'Parameter "questions" must be a non-empty array.',
          questionsCount: "Must provide between 1 and 4 questions.",
          invalidQuestion: 'Question at index {{index}} must have a valid "question" string.',
          invalidHeader: 'Question at index {{index}} must have a valid "header" string.',
          headerTooLong: "Header at index {{index}} must be 12 characters or less.",
          invalidOptions: 'Question at index {{index}} must have a valid "options" array.',
          optionsCount: "Question at index {{index}} must have between 2 and 4 options.",
          invalidOptionLabel: 'Option {{optionIndex}} in question {{questionIndex}} must have a valid "label" string.',
          invalidOptionDescription:
            'Option {{optionIndex}} in question {{questionIndex}} must have a valid "description" string.',
          invalidMultiSelect: 'Question at index {{index}} must have a valid "multiSelect" boolean.',
          noAnswers: "No answers were provided by the user.",
          validationError: "Validation error: {{error}}",
          executionError: "Execution error: {{error}}",
        },
        messages: {
          confirmTitle: "Please answer the following questions",
          askingQuestions: "Asking {{count}} question(s)",
          answersReceived: "User provided the following answers:",
          noAnswer: "Not answered",
          summary: "Asked {{count}} question(s)",
        },
      },
      mcpTool: {
        messages: {
          confirmExecution: "Confirm MCP Tool Execution",
          mediaDataProvided: "[Tool '{{toolName}}' provided the following {{type}} data with mime-type: {{mimeType}}]",
          embeddedResourceProvided:
            "[Tool '{{toolName}}' provided the following embedded resource with mime-type: {{mimeType}}]",
          resourceLink: "Resource Link: {{title}} at {{uri}}",
        },
        errors: {
          toolReportedError: "Error: MCP tool '{{toolName}}' reported an error.",
          parseResponseFailed: "[Error: Could not parse tool response]",
        },
        display: {
          image: "[Image: {{mimeType}}]",
          audio: "[Audio: {{mimeType}}]",
          resourceLink: "[Link to {{title}}: {{uri}}]",
          embeddedResource: "[Embedded Resource: {{mimeType}}]",
          unknownType: "unknown type",
          unknownContentType: "[Unknown content type: {{type}}]",
        },
      },
      mcpClient: {
        errors: {
          clientNotConnected: "Client is not connected.",
          noPromptsOrTools: "No prompts or tools found on the server.",
          failedToParseCommand: "Failed to parse mcpServerCommand: {{cmd}}",
          cannotConnect: "Cannot connect to '{{serverName}}' - server may be down or URL incorrect",
          connectionFailed: "Connection failed for '{{serverName}}': {{error}}",
          checkSandbox: "check sandbox availability",
          noUrlConfigured: "No URL configured for Google Credentials MCP server",
          httpTransportRequiresUrl: "HTTP transport requires either 'httpUrl' or 'url' field",
          stdioTransportRequiresCommand: "Stdio transport requires 'command' field",
          invalidConfiguration:
            "Invalid configuration: missing httpUrl (for Streamable HTTP), url (for SSE), and command (for stdio).",
        },
      },
      ripgrepTool: {
        errors: {
          pathValidationFailed:
            'Path validation failed: Attempted path "{{path}}" resolves outside the allowed workspace directories: {{directories}}',
          pathNotDirectory: "Path is not a directory: {{path}}",
          pathNotExist: "Path does not exist: {{path}}",
          pathAccessFailed: "Failed to access path stats for {{path}}: {{error}}",
          searchFailed: "Error during ripgrep search operation: {{error}}",
          searchFailedShort: "Error: {{error}}",
          failedToStart: "Failed to start ripgrep: {{error}}",
          ripgrepExited: "ripgrep exited with code {{code}}: {{stderr}}",
        },
        messages: {
          noMatchesFound: 'No matches found for pattern "{{pattern}}" {{location}}{{filter}}.',
          noMatchesFoundShort: "No matches found",
          matchesFound: 'Found {{count}} {{matchType}} for pattern "{{pattern}}" {{location}}{{filter}}',
          foundMatches: "Found {{count}} {{matchType}}",
          match: "match",
          matches: "matches",
          filter: "filter",
          resultsLimited: "results limited to {{maxMatches}} matches for performance",
          limited: "limited",
        },
      },
      taskTool: {
        messages: {
          taskAborted: "Task aborted",
          taskAbortedByUser: "The task was aborted by the user.",
          taskExecutionCancelled: "Task execution was cancelled.",
          completedTask: "Completed task: {{description}}",
        },
      },
      toolRegistry: {
        warnings: {
          toolAlreadyRegistered: 'Tool with name "{{toolName}}" is already registered. Overwriting.',
          toolWithNoName: "Discovered a tool with no name. Skipping.",
        },
        errors: {
          emptyDiscoveryCommand: "Tool discovery command is empty or contains only whitespace.",
          outputSizeLimitExceeded: "Tool discovery command output exceeded size limit of {{maxSize}} bytes.",
          commandFailedWithCode: "Command failed with code {{code}}",
          discoveryCommandFailed: "Tool discovery command failed with exit code {{code}}",
          invalidDiscoveryOutput: "Tool discovery command did not return a JSON array of tools.",
          discoveryCommandError: 'Tool discovery command "{{cmd}}" failed:',
        },
      },
      websocketClient: {
        errors: {
          transportClosed: "Transport is closed",
          unauthorizedOAuth: "Unauthorized: OAuth required",
          noAuthProvider: "No auth provider configured",
          clientInfoNotAvailable: "Client information not available",
          transportNotStarted: "Transport not started",
          websocketNotOpen: "WebSocket is not open",
        },
      },
      xinliuWebFetch: {
        errors: {
          noUrlFoundFallback: "Error: No URL provided for fallback.",
          noUrlFound: "Error: No URL provided.",
          promptEmpty: "The 'prompt' parameter cannot be empty.",
          noValidUrl: "The 'url' must be a valid URL (starting with http:// or https://).",
          invalidParameters: "Error: Invalid parameters provided. Reason: {{reason}}",
        },
        messages: {
          contentProcessedFallback: "Content for {{url}} processed using fallback fetch.",
          contentProcessedProxy: "Content processed from {{url}}.",
          contentProcessedSuccess: "Content processed success",
        },
      },
      xinliuWebSearch: {
        errors: {
          invalidParameters: "Error: Invalid parameters provided. Reason: {{reason}}",
          authNotSupported:
            "Error: Search capability is only supported with iFlow login. Current authentication mode does not support this feature.",
          searchFailed: "Error: {{error}}",
          searchFailedShort: "Error performing web search.",
          intentCannotBeEmpty: "The 'intent' parameter cannot be empty.",
          expectedCannotBeEmpty: "The 'expected' parameter cannot be empty.",
          queryCannotBeEmpty: "The 'query' parameter cannot be empty.",
        },
        messages: {
          searchingWeb: 'Search the web for: "{{query}}"',
          noResults: 'No search results or information found for query: "{{query}}"',
          noResultsShort: "No information found.",
          searchResults: `Web search results for "{{query}}":
{{results}}`,
          searchResultsReturned: 'Search results for "{{query}}" returned.',
        },
      },
      modifiableTool: { errors: { deleteTempFile: "Error deleting temp diff file: {{path}}" } },
      openaiContentGenerator: {
        errors: {
          failedWriteDebugLog: "Failed to write debug log:",
          contextLengthExceeded:
            "Your input has exceeded the model's context length. Please check whether IFLOW.md or your input is too long, then run /clear and ask again.",
          httpError: "HTTP error! status: {{status}}, body: {{body}} TraceID: {{traceId}}",
          responseFormatError: "Response format error. TraceID: {{traceId}}",
          fetchError: "the network is unavailable, please try later.",
          contentLengthExceed: "Content length exceed LLM Limit. TraceID: {{traceId}}",
          modelError: "Model error TraceID: {{traceId}}",
          apiTokenExpired:
            "Your API Token has expired. API Tokens have a validity period of 7 days. You can reset your token at https://platform.iflow.cn/docs/api-key-management.",
          invalidApiKey: "Invalid API key provided",
          modelNotSupport: "The specified model is not supported",
          modelRateLimitReached:
            "This model has reached the platform rate limit, the system will retry the request. If errors occur frequently, please switch to another model",
          rateLimitReached:
            "Your account has reached the platform concurrency limit, the system will retry the request. Please limit to single concurrent usage",
          userCancel: "user cancel",
          invalidResponseFormat:
            "Invalid OpenAI response format - missing or empty choices array. TraceID: {{traceId}}",
          apiKeyError: "apiKey Error, please check your apiKey correct or use /auth to re-login",
          generateDataError: "generate data error: {{error}}",
          imageDataMissing: "Image data is missing",
          imageContentCannotParse: "Image content cannot be parsed: {{error}}",
          embedContentFailed: "Failed to embed content: {{error}}",
          generateContentStreamFailed: "Failed to generate content stream: {{error}}",
        },
        messages: { toolNotExecuted: "tool not executed" },
      },
      extensionsCommand: { noActiveExtensions: "No active extensions.", activeExtensions: "Active extensions" },
      statsCommand: {
        sessionStartUnavailable: "Session start time is not available.",
        subCommands: { model: "Display model usage statistics", tools: "Display tool usage statistics" },
      },
      toolsCommand: {
        couldNotRetrieveRegistry: "Could not retrieve tool registry.",
        availableTools: "Available iFlow CLI tools:",
        noToolsAvailable: "No tools available",
      },
      copyCommand: {
        noOutputInHistory: "No output in history",
        lastOutputCopied: "Last output copied to the clipboard",
        failedToCopy: "Failed to copy to the clipboard.",
        noTextToCopy: "Last AI output contains no text to copy.",
      },
      clearCommand: {
        clearingTerminalAndResetChat: "Clearing terminal and resetting chat.",
        clearingTerminal: "Clearing terminal.",
      },
      memoryCommand: {
        subCommands: {
          show: "Show the current memory contents.",
          add: "Add content to the memory.",
          refresh: "Refresh the memory from the source.",
          list: "List all memory files.",
        },
        currentMemoryContent: `Current memory content from {{fileCount}} file(s):

---
{{memoryContent}}
---`,
        memoryIsEmpty: "Memory is currently empty.",
        usageAdd: "Usage: /memory add <text to remember>",
        attemptingToSave: 'Attempting to save to memory: "{{text}}"',
        refreshingMemory: "Refreshing memory from source files...",
        memoryRefreshedWithContent:
          "Memory refreshed successfully. Loaded {{characters}} characters from {{fileCount}} file(s).",
        memoryRefreshedNoContent: "Memory refreshed successfully. No memory content found.",
        errorRefreshing: "Error refreshing memory: {{error}}",
        currentMemoryList: `Current memory files ({{fileCount}}):

{{splitedFilePaths}}`,
        listIsEmpty: "No memory files found.",
      },
      restoreCommand: {
        description:
          "Restore a tool call. This will reset the conversation and file history to the state it was in when the tool call was suggested",
        couldNotDeterminePath: "Could not determine the .iflow directory path.",
        noRestorableCallsFound: "No restorable tool calls found.",
        availableToolCallsTitle: "Available tool calls to restore:",
        availableToolCalls: `Available tool calls to restore:

{{fileList}}`,
        fileNotFound: "File not found: {{file}}",
        loadHistoryNotAvailable: "loadHistory function is not available.",
        restoredProjectState: "Restored project to the state before the tool call.",
        couldNotReadError: "Could not read restorable tool calls. This is the error: {{error}}",
        noUserPromptRecord: "(no user prompt recorded)",
        noFileStatsRecord: "(no file stats)",
      },
      privacyCommand: { description: "display the privacy notice" },
      vimCommand: { enteredVimMode: "Entered Vim mode. Run /vim again to exit.", exitedVimMode: "Exited Vim mode." },
      bugCommand: {
        noSandbox: "no sandbox",
        unknown: "Unknown",
        noRecentErrors: "No recent errors",
        errorWithTimestamp: `Error ({{timestamp}}):
{{error}}`,
        bugReportTitle: "Bug Report",
        defaultBugDescription: "User reported a bug in iFlow CLI",
        conversationHistory: "Conversation History",
        noHistoryAvailable: "No history available",
        expectedDescription: "Please describe what you expected to happen",
        loginInfoDescription: "Please describe how you are logging in (e.g., iFlow Account, API key)",
        errorDetails: "Error Details",
        additionalContextPrompt: "Please provide any additional context about the problem.",
        couldNotOpenUrl: "Could not open URL in browser: {{error}}",
        bugReportSubmitted: "Bug report submitted: {{description}}",
      },
      chatCommand: {
        list: {
          description: "List saved conversation checkpoints",
          noCheckpointsFound: "No saved conversation checkpoints found.",
          listHeader: "List of saved conversations:",
          invalidDate: "Invalid Date",
          savedOn: "saved on {{date}}",
          sortNote: "Note: Newest last, oldest first",
        },
        save: {
          description: "Save the current conversation as a checkpoint. Usage: /chat save <tag>",
          missingTag: "Missing tag. Usage: /chat save <tag>",
          noChatClient: "No chat client available to save conversation.",
          saved: "Conversation checkpoint saved with tag: {{tag}}.",
          noConversation: "No conversation found to save.",
        },
        resume: {
          description: "Resume a conversation from a checkpoint. Usage: /chat resume <tag>",
          missingTag: "Missing tag. Usage: /chat resume <tag>",
          noCheckpointFound: "No saved checkpoint found with tag: {{tag}}.",
        },
        delete: {
          description: "Delete a conversation checkpoint. Usage: /chat delete <tag>",
          missingTag: "Missing tag. Usage: /chat delete <tag>",
          deleted: "Conversation checkpoint '{{tag}}' has been deleted.",
          notFound: "Error: No checkpoint found with tag '{{tag}}'.",
        },
      },
      compressCommand: {
        alreadyCompressing: "Already compressing, wait for previous request to complete",
        compressing: "Compressing...",
        historyManagerNotAvailable: "History manager not available for compression logging",
        failedToRecordEvent: "Failed to record compression event to history:",
        failedToCompress: "Failed to compress chat history.",
        failedWithError: "Failed to compress chat history: {{error}}",
      },
      docsCommand: {
        pleaseOpenUrl: `Please open the following URL in your browser to view the documentation:
{{url}}`,
        openingDocs: "Opening documentation in your browser: {{url}}",
      },
      logCommand: {
        logLocation: `Log storage location:
Directory: {{directory}}
Log file: {{logFile}}

Session ID: {{sessionId}}`,
        notAvailable: "Not available",
        failedToRetrieve: "Failed to retrieve log location: {{error}}",
        unknownError: "Unknown error",
      },
      commandsCommand: {
        description: "Manage marketplace commands",
        demandCommand: "You need at least one command before continuing.",
        failedToFetchDetails: "Failed to fetch command details",
        subCommands: {
          list: "List locally installed commands from project and global scopes",
          online: "Browse available commands from online marketplace in an interactive dialog",
          get: "Get details about a specific command by ID",
          add: "Add a specific command by ID to local CLI (use --scope global for system-wide install)",
          remove: "Remove a locally installed command (use --scope global to remove from global)",
        },
        list: {
          noCommands: `\u{1F536} No local commands installed.

\u{1F4A1} Getting started:
  \u2022 Use /commands online to browse marketplace
  \u2022 Use /commands get <id> to get command details
  \u2022 Use /commands add <id> to install to project
  \u2022 Use /commands add <id> --scope global to install globally`,
          installedHeader: "Installed commands:",
          globalCommands: "Global Commands",
          projectCommands: "Project Commands",
          tips: `\u{1F4A1} Tips:
  \u2022 Use /commands online to browse online marketplace
  \u2022 Use /commands add <id> to install new commands
  \u2022 Use /commands remove <name> to remove commands
  \u2022 Use /commands get <id> to view command details`,
          loading: "Loading local commands...",
          errorLoading: "Error loading local commands: {{error}}",
        },
        get: {
          idRequired: `Error: Command ID is required
Usage: /commands get <id>`,
          idMustBeNumber: `Error: Command ID must be a number
Usage: /commands get <id>`,
          apiKeyNotFound: "Error: IFLOW_API key not found. Please set IFLOW_API environment variable.",
          fetching: "Fetching command details for ID {{id}}...",
          notFound: "Error: Command with ID {{id}} not found.",
          errorFetching: "Error fetching command details: {{error}}",
        },
        remove: {
          notFound: "\u274C Command '{{commandName}}' not found in {{scope}} scope",
          globalScopeHint: "\u{1F4A1} To remove from global scope, use: --scope global",
          success: `\u2714 Successfully removed command '{{commandName}}' from {{scope}} scope
Location: {{filePath}}

\u26A0\uFE0F  Please restart the CLI to see changes take effect.`,
          failed: `\u274C Failed to remove command '{{commandName}}'
Error: {{error}}`,
          invalidScope: `Error: Invalid scope '{{scope}}'. Valid scopes: project, global
Usage: /commands remove <name> [--scope project|global]`,
          nameRequired: `Error: Command name is required
Usage: /commands remove <name> [--scope project|global]
  --scope project  Remove from current project (default)
  --scope global   Remove from global user commands`,
          removing: "Removing command '{{commandName}}' from {{scope}} scope...",
          error: "Error: {{error}}",
        },
        install: {
          alreadyInstalled: "\u26A0\uFE0F Command '{{commandName}}' is already installed in your {{scope}} scope.",
          success: `\u2714 Successfully installed command '{{commandName}}' for {{scope}}
Location: {{filePath}}

\u26A0\uFE0F  Please restart the CLI to use the new command.`,
          failed: `\u274C Failed to install command '{{commandName}}'
Error: {{error}}`,
        },
        add: {
          invalidScope: `Error: Invalid scope '{{scope}}'. Valid scopes: project, global
Usage: /commands add <id> [--scope project|global]`,
          idRequired: `Error: Command ID is required
Usage: /commands add <id> [--scope project|global]
  --scope project  Install to current project (default)
  --scope global   Install to global user commands`,
          idMustBeNumber: `Error: Command ID must be a number
Usage: /commands add <id> [--scope project|global]`,
          apiKeyNotFound: "Error: IFLOW_API key not found. Please set IFLOW_API environment variable.",
          fetching: "Fetching command with ID {{id}}...",
          notFoundInRepo: "Error: Command with ID {{id}} not found in online repository.",
          error: "Error: {{error}}",
        },
        details: {
          title: "\u{1F4CB} Command Details",
          id: "\u{1F194} ID:",
          name: "\u{1F4DD} Name:",
          description: "\u{1F4C4} Description:",
          category: "\u{1F4C1} Category:",
          model: "\u{1F916} Model:",
          tags: "\u{1F3F7}\uFE0F  Tags:",
          author: "\u{1F464} Author:",
          version: "\u{1F4CA} Version:",
          visibility: "\u{1F441}\uFE0F  Visibility:",
          status: "\u{1F4CB} Status:",
          detailContext: "\u{1F4D6} Detail Context:",
          addHint: "\u{1F4A1} To add this command to your CLI, use: /commands add {{id}}",
        },
      },
      exportCommand: {
        clipboard: {
          description: "Copy the conversation to your system clipboard",
          success: "Conversation copied to clipboard",
          failed: "Failed to copy to clipboard: {{error}}",
        },
        file: {
          description: "Save the conversation to a file in the current directory",
          success: "Conversation exported to: {{fileName}}",
          failed: "Failed to save file: {{error}}",
        },
        unknownError: "Unknown error",
      },
      mcpCommand: {
        description: "Manage MCP servers",
        demandCommand: "You need at least one command before continuing.",
        configNotLoaded: "Config not loaded.",
        couldNotRetrieveRegistry: "Could not retrieve tool registry.",
        noOAuthServers: "No MCP servers configured with OAuth authentication.",
        refreshCompleted: "MCP refresh completed successfully.",
        startingOAuthAuth: "Starting OAuth authentication for MCP server {{serverName}}",
        authSuccess: "Successfully authenticated with MCP server {{serverName}}",
        rediscoveringTools: "Re-discovering tools from {{serverName}}",
        reloadingSettings: "Reloading settings files and refreshing MCP servers...",
        settingsReloadErrors: "Settings reload completed with errors: {{errors}}",
        noServersConfiguredSandbox: `No MCP servers configured. Please open the following URL in your browser to view documentation:
{{docsUrl}}`,
        noServersConfiguredOpen: "No MCP servers configured. Opening documentation in your browser: {{docsUrl}}",
        serversStarting: "MCP servers are starting up ({{count}} initializing)...",
        firstStartupNote: "Note: First startup may take longer. Tool availability will update automatically.",
        configuredServers: "Configured MCP servers:",
        status: {
          ready: "Ready",
          starting: "Starting... (first startup may take longer)",
          disconnected: "Disconnected",
        },
        oauth: {
          tokenExpired: "(OAuth token expired)",
          authenticated: "(OAuth authenticated)",
          notAuthenticated: "(OAuth not authenticated)",
        },
        toolCount: "{{count}} tool",
        toolCount_plural: "{{count}} tools",
        promptCount: "{{count}} prompt",
        promptCount_plural: "{{count}} prompts",
        zeroTools: "(0 tools)",
        toolsWillAppear: "(tools and prompts will appear when ready)",
        toolsCached: "({{count}} tools cached)",
        toolsLabel: "Tools:",
        promptsLabel: "Prompts:",
        parametersLabel: "Parameters:",
        noToolsOrPrompts: "No tools or prompts available",
        noToolsAvailable: "No tools available",
        authHint: '(type: "/mcp auth {{serverName}}" to authenticate this server)',
        blocked: "Blocked",
        tips: "Tips:",
        tipDesc: "Use /mcp desc to show server and tool descriptions",
        tipSchema: "Use /mcp schema to show tool parameter schemas",
        tipNoDesc: "Use /mcp nodesc to hide descriptions",
        tipAuth: "Use /mcp auth <server-name> to authenticate with OAuth-enabled servers",
        tipToggle: "Press Ctrl+T to toggle tool descriptions on/off",
        auth: {
          description: "Authenticate with an OAuth-enabled MCP server",
          availableServers: `MCP servers with OAuth authentication:
{{servers}}

Use /mcp auth <server-name> to authenticate.`,
          serverNotFound: "MCP server '{{serverName}}' not found.",
          successMessage: "Successfully authenticated and refreshed tools for '{{serverName}}'.",
          failedMessage: "Failed to authenticate with MCP server '{{serverName}}': {{error}}",
          cannotDetermineUrl: "Cannot determine URL for server '{{serverName}}'. Please check the configuration.",
          authorizationUrl: `Please open the following URL in your browser to authorize:
{{url}}`,
          manualCallbackPrompt:
            "If the browser cannot automatically callback, please use /mcp list for interactive authentication.",
          mcpRemoteHandlesAuth:
            "Server '{{serverName}}' uses mcp-remote, which handles OAuth authentication automatically. To re-authenticate, please restart iFlow CLI.",
        },
        list: { description: "Interactive list of configured MCP servers and tools" },
        online: { description: "Browse and install MCP servers from online repository" },
        aone: { description: "Open Aone marketplace in browser" },
        refresh: {
          description: "Refresh the list of MCP servers and tools, and reload settings files",
          settingsSuccess: "Settings files reloaded successfully.",
          settingsFailed: "Failed to reload settings: {{error}}",
          successMessage: "Settings reloaded and MCP servers refreshed successfully.",
          statusFailed: "Refresh completed but failed to retrieve status: {{error}}",
          refreshFailed: "MCP refresh failed: {{error}}",
        },
        fromExtension: "(from {{extensionName}})",
      },
      skillsCommand: {
        description: "Manage skills",
        configNotLoaded: "Config not loaded.",
        couldNotRetrieveRegistry: "Could not retrieve skill registry.",
        noSkillsConfigured: "No skills configured.",
        configuredSkills: "Configured skills:",
        totalSkills: "Total: {{count}} skill(s)",
        global: "Global",
        project: "Project",
        filePath: "File Path",
        license: "License",
        refreshingSkills: "Refreshing skills...",
        refreshCompleted: "Skills refresh completed successfully.",
        list: { description: "Interactive list of configured skills" },
        refresh: {
          description: "Refresh the list of skills",
          successMessage: "Skills refreshed successfully.",
          refreshFailed: "Skills refresh failed: {{error}}",
        },
        online: { description: "Browse online skills marketplace" },
      },
      directoryCommand: {
        configNotAvailable: "Configuration is not available.",
        add: {
          description: "Add directories to the workspace (absolute path); use comma to separate multiple directories",
          pathRequired: "Please provide at least one path to add.",
          restrictiveSandboxError:
            "The /directory add command is not supported in restrictive sandbox profiles. Please use --include-directories when starting the session instead.",
          errorAdding: "Error adding '{{path}}': {{error}}",
          successMessage: `Successfully added directories:
- {{directories}}`,
        },
        show: {
          description: "Show all directories in the workspace",
          currentDirectories: `Current workspace directories:
{{directories}}`,
        },
      },
      agentsAdd: {
        description: "Add an agent from online repository",
        pleaseAuthenticate: "Please authenticate first by running the auth command",
        unableToLoadAgents: "Unable to load agents. Please try again later",
        authenticationFailed: "Authentication failed. Please check your API key or re-authenticate",
        accessDenied: "Access denied. Please check your permissions",
        serviceNotFound: "Agents service not found. Please try again later",
        serverError: "Server error. Please try again later",
        failedToLoadFromServer: "Failed to load agents from server",
        connectionError: "Unable to load agents. Please check your connection and try again",
        networkError: "Network error. Please check your internet connection",
        failedToFetchDetails: "Failed to fetch agent details: {{error}}",
        successfullyInstalled: `\u2714 Successfully installed agent '{{name}}' for {{scope}}
Location: {{filePath}}

You can now use this agent in your conversations.`,
        alreadyInstalled: `\u26A0\uFE0F Agent '{{name}}' is already installed
An agent with this name already exists in your {{scope}} scope.

`,
        installFailed: `\u274C Failed to install agent '{{name}}'
Error: {{error}}`,
        invalidScope: "Error: Invalid scope '{{scope}}'. Valid scopes: project, global",
        apiKeyNotFound: "Error: API key not found.",
        searching: "Searching for agent '{{nameOrId}}'...",
        error: "Error: {{error}}",
        notFoundInRepo: "Error: Agent '{{nameOrId}}' not found in online repository.",
        foundAgent: "Found agent: {{name}}",
        agentDescription: "Description: {{description}}",
        installing: "Installing to {{scope}} scope...",
        errorAdding: "Error adding agent: {{error}}",
        usage: "Usage: iflow agent add <name-or-id> [--scope project|global]",
        nameOrIdOption: "Name or ID of the agent",
        scopeOption: "Installation scope (project or global)",
      },
      agentsGet: {
        description: "Get details about an agent",
        notFound: "Error: Agent '{{name}}' not found",
        agent: "Agent",
        type: "Type",
        location: "Location",
        file: "File",
        agentDescription: "Description",
        whenToUse: "When to use",
        model: "Model",
        allowedTools: "Allowed Tools",
        allTools: "All tools",
        noInherit: "(no inherit)",
        noneNoInherit: "None (no inherit)",
        allToolsInherit: "All tools (inherit)",
        allowedMcpServers: "Allowed MCP Servers",
        allMcpServersInherit: "All MCP servers (inherit)",
        systemPrompt: "System Prompt",
        fileContent: "File Content",
        couldNotReadFile: "Warning: Could not read file content: {{error}}",
        warning: "Warning",
        fileNotFound: "Agent file not found at {{path}}",
        unknownPath: "unknown path",
        errorGettingDetails: "Error getting agent details:",
        usage: "Usage: iflow agent get <name>",
        nameOption: "Name or type of the agent",
      },
      agentsList: {
        description: "List configured agents",
        noAgentsConfigured: "No agents configured",
        configuredAgents: `Configured agents:
`,
        projectAgents: "Project agents",
        globalAgents: "Global agents",
        agentDescription: "Description",
        model: "Model",
        tools: "Tools",
        allTools: "All tools",
        noInherit: "(no inherit)",
        noneNoInherit: "None (no inherit)",
        mcps: "MCPs",
        location: "Location",
        unknown: "unknown",
        total: "Total: {{count}} agent(s) configured",
        errorLoading: "Error loading agents:",
        usage: "Usage: iflow agent list",
      },
      agentsOnline: {
        description: "Browse online agent repository",
        pleaseAuthenticate: "Please authenticate first by running the auth command",
        unableToLoadAgents: "Unable to load agents. Please try again later",
        authenticationFailed: "Authentication failed. Please check your API key or re-authenticate",
        accessDenied: "Access denied. Please check your permissions",
        serviceNotFound: "Agents service not found. Please try again later",
        serverError: "Server error. Please try again later",
        failedToLoadFromServer: "Failed to load agents from server",
        connectionError: "Unable to load agents. Please check your connection and try again",
        networkError: "Network error. Please check your internet connection",
        apiKeyNotFound: "Error: API key not found.",
        loadingOnlineAgents: "Loading online agents...",
        error: "Error: {{error}}",
        matching: ' matching "{{search}}"',
        noAgentsFound: "No agents found",
        onlineAgents: "Online Agents",
        filteredBy: '(filtered by "{{search}}")',
        agentDescription: "Description",
        category: "Category",
        model: "Model",
        tags: "Tags",
        author: "Author",
        version: "Version",
        allowedTools: "Allowed Tools",
        allToolsAvailable: "All tools available",
        noToolsAvailable: "No tools available",
        inheritTools: "Inherit Tools",
        yes: "Yes",
        no: "No",
        mcpServers: "MCP Servers",
        allMcpServersAvailable: "All MCP servers available",
        noMcpServersAvailable: "No MCP servers available",
        inheritMcps: "Inherit MCPs",
        totalShown: "Total: {{count}} agent(s) shown ({{total}} total available)",
        installHint: "To install an agent, use: iflow agent add <name-or-id>",
        errorBrowsing: "Error browsing online agents: {{error}}",
        usage: "Usage: iflow agent online [options]",
        pageOption: "Page number (default: 1)",
        sizeOption: "Number of agents per page (default: 20)",
        searchOption: "Search term to filter agents",
      },
      agentsRemove: {
        inScope: "in {{scope}} scope",
        notFound: "Error: Agent '{{name}}' not found",
        multipleFound: "Error: Multiple agents found with name '{{name}}'. Please specify scope:",
        agentListItem: "  - {{name}} ({{location}}): {{filePath}}",
        useScope: "Use --scope to specify which one to remove.",
        successfullyRemoved: "Successfully removed agent '{{name}}' from {{scope}} scope",
        deleted: "Deleted: {{filePath}}",
        fileNotFound: "Warning: Agent file not found: {{filePath}}",
        errorRemoving: "Error removing agent file {{filePath}}:",
        errorRemovingAgent: "Error removing agent:",
        description: "Remove an agent",
        usage: "Usage: iflow agent remove <name> [--scope project|global|all]",
        nameOption: "Name or type of the agent to remove",
        scopeOption: "Scope to remove from (project, global, or all)",
      },
      commandsList: {
        noLocalCommands: `No local commands found.
`,
        localInstalledCommands: `\u{1F4CB} Local Installed Commands
`,
        globalCommands: "Global Commands",
        projectCommands: "Project Commands",
        noOnlineCommands: "No commands found in the marketplace.",
        availableOnlineCommands: "\u{1F310} Available Commands from Online Marketplace",
        pageInfo:
          "\u{1F4C4} Page {{currentPage}} of {{totalPages}} | Showing {{startIndex}}-{{endIndex}} of {{total}} commands",
        category: "   \u{1F4C1} Category: {{category}}",
        tags: "   \u{1F3F7}\uFE0F  Tags: {{tags}}",
        authorVersion: `   \u{1F464} Author: {{authorId}} | \u{1F4CA} Version: {{version}}
`,
        previousPage: "  iflow commands list --page {{page}}    Previous page",
        nextPage: "  iflow commands list --page {{page}}    Next page",
        navigation: "\u{1F4D6} Navigation:",
        apiKeyNotFound: "Error: API key not found.",
        pleaseAuthenticate: "Please authenticate first by running the auth command.",
        loadingOnlineCommands: "Loading online commands...",
        errorLoadingOnlineCommands: "Error loading online commands: {{error}}",
        loadingLocalCommands: "Loading local commands...",
        errorLoadingLocalCommands: "Error loading local commands: {{error}}",
        failedToFetchCommands: "Failed to fetch commands",
        commandDescription: "List locally installed commands (use --online for marketplace)",
        usage: "Usage: iflow commands list [options]",
        onlineOption: "Browse online marketplace instead of local commands",
        pageOption: "Page number for online commands",
        sizeOption: "Page size for online commands",
        exampleDefault: "Show locally installed commands (default)",
        exampleOnline: "Browse online marketplace",
        examplePage: "Browse page 2 of marketplace",
        exampleSize: "Show 10 commands per page from marketplace",
        scopeHeader: "{{scopeIcon}} {{scopeLabel}}:",
        commandItem: "  {{commandIndex}}. /{{commandName}}",
        commandDescriptionItem: "     \u{1F4DD} {{description}}",
        commandPath: "     \u{1F4C1} {{filePath}}",
        onlineCommandItem: "{{actualIndex}}. {{name}} (ID: {{id}})",
        onlineCommandDescriptionItem: "   \u{1F4DD} {{description}}",
      },
      commandsAdd: {
        pleaseAuthenticate: "Please authenticate first by running the auth command",
        unableToLoadCommands: "Unable to load commands. Please try again later",
        authenticationFailed: "Authentication failed. Please check your API key or re-authenticate",
        accessDenied: "Access denied. Please check your permissions",
        serviceNotFound: "Commands service not found. Please try again later",
        serverError: "Server error. Please try again later",
        failedToLoadFromServer: "Failed to load commands from server",
        connectionError: "Unable to load commands. Please check your connection and try again",
        networkError: "Network error. Please check your internet connection",
        failedToFetchDetails: "Failed to fetch command details",
        alreadyInstalled: "\u26A0\uFE0F Command '{{commandName}}' is already installed in your {{scope}} scope.",
        installSuccess: `\u2714 Successfully installed command '{{commandName}}' for {{scope}}
Location: {{filePath}}

You can now use this command with /{{commandPath}}`,
        installFailed: `\u274C Failed to install command '{{commandName}}'
Error: {{error}}`,
        invalidScope: "Error: Invalid scope '{{scope}}'. Valid scopes: project, global",
        apiKeyNotFound: "Error: API key not found.",
        pleaseAuthenticateFirst: "Please authenticate first by running the auth command.",
        searchingCommand: "Searching for command '{{nameOrId}}'...",
        commandNotFound: "Error: Command '{{nameOrId}}' not found in online marketplace.",
        foundCommand: "Found command: {{name}}",
        commandDescription: "Description: {{description}}",
        commandCategory: "Category: {{category}}",
        installingToScope: "Installing to {{scope}} scope...",
        restartRequired: "\u{1F504} Please restart the CLI to see newly added commands.",
        errorAddingCommand: "Error adding command: {{error}}",
        description: "Add a command from online marketplace",
        usage: "Usage: iflow commands add <name-or-id> [--scope project|global]",
        nameOrIdOption: "Name or ID of the command",
        scopeOption: "Configuration scope (project or global)",
        exampleId: "Add command ID 123 to project",
        exampleName: "Add command by name to project",
        exampleGlobal: "Add command ID 456 globally",
      },
      commandsGet: {
        pleaseAuthenticate: "Please authenticate first by running the auth command",
        unableToLoadCommands: "Unable to load commands. Please try again later",
        authenticationFailed: "Authentication failed. Please check your API key or re-authenticate",
        accessDenied: "Access denied. Please check your permissions",
        serviceNotFound: "Commands service not found. Please try again later",
        serverError: "Server error. Please try again later",
        failedToLoadFromServer: "Failed to load commands from server",
        connectionError: "Unable to load commands. Please check your connection and try again",
        networkError: "Network error. Please check your internet connection",
        failedToFetchDetails: "Failed to fetch command details",
        commandDetailsTitle: "\u{1F4CB} Command Details",
        commandId: "\u{1F194} ID: {{id}}",
        commandName: "\u{1F4DD} Name: {{name}}",
        commandDescription: "\u{1F4C4} Description: {{description}}",
        commandCategory: "\u{1F4C1} Category: {{category}}",
        commandModel: "\u{1F916} Model: {{modelName}}",
        commandTags: "\u{1F3F7}\uFE0F  Tags: {{tags}}",
        commandAuthor: "\u{1F464} Author: {{authorId}}",
        commandVersion: "\u{1F4CA} Version: {{version}}",
        commandVisibility: "\u{1F441}\uFE0F  Visibility: {{visibility}}",
        commandStatus: "\u{1F4CB} Status: {{publishStatus}}",
        detailContextTitle: "\u{1F4D6} Detail Context:",
        addCommandHint: "\u{1F4A1} To add this command to your CLI, use: iflow commands add {{id}}",
        apiKeyNotFound: "Error: API key not found.",
        pleaseAuthenticateFirst: "Please authenticate first by running the auth command.",
        searchingCommand: "Searching for command '{{nameOrId}}'...",
        commandNotFound: "Error: Command '{{nameOrId}}' not found in online marketplace.",
        errorFetchingDetails: "Error fetching command details: {{error}}",
        description: "Get details about a specific command by name or ID",
        usage: "Usage: iflow commands get <name-or-id>",
        nameOrIdOption: "Name or ID of the command",
        exampleId: "Get details for command ID 123",
        exampleName: "Get details for command by name",
      },
      commandsRemove: {
        notFound: "\u274C Command '{{commandName}}' not found in {{scope}} scope",
        success: `\u2714 Successfully removed command '{{commandName}}' from {{scope}} scope
Location: {{filePath}}`,
        failed: `\u274C Failed to remove command '{{commandName}}'
Error: {{error}}`,
        invalidScope: "Error: Invalid scope '{{scope}}'. Valid scopes: project, global",
        removing: "Removing command '{{commandName}}' from {{scope}} scope...",
        restartRequired: "\u{1F504} Please restart the CLI to see changes take effect.",
        error: "Error: {{error}}",
        description: "Remove a locally installed command",
        usage: "Usage: iflow commands remove <name> [--scope project|global]",
        nameOption: "Name of the command to remove",
        scopeOption: "Configuration scope (project or global)",
        exampleProject: "Remove command from project scope",
        exampleGlobal: "Remove command from global scope",
      },
      commandsOnline: {
        pleaseAuthenticate: "Please authenticate first by running the auth command",
        unableToLoadCommands: "Unable to load commands. Please try again later",
        authenticationFailed: "Authentication failed. Please check your API key or re-authenticate",
        accessDenied: "Access denied. Please check your permissions",
        serviceNotFound: "Commands service not found. Please try again later",
        serverError: "Server error. Please try again later",
        failedToLoadFromServer: "Failed to load commands from server",
        connectionError: "Unable to load commands. Please check your connection and try again",
        networkError: "Network error. Please check your internet connection",
        apiKeyNotFound: "Error: API key not found.",
        pleaseAuthenticateFirst: "Please authenticate first by running the auth command.",
        loadingOnlineCommands: "Loading online commands...",
        noCommandsFound: "No commands found",
        onlineCommandsTitle: "Online Commands",
        filteredBy: '(filtered by "{{search}}")',
        commandItem: "\u2022 {{name}} (ID: {{id}})",
        commandDescription: "Description: {{description}}",
        commandCategory: "Category: {{category}}",
        commandModel: "Model: {{modelName}}",
        commandTags: "Tags: {{tags}}",
        commandAuthor: "Author: {{authorId}}",
        commandVersion: "Version: {{version}}",
        totalCommandsShown: "Total: {{count}} command(s) shown{{totalAvailable}}",
        totalAvailable: " ({{total}} total available)",
        installHint: "To install a command, use: iflow commands add <name-or-id>",
        errorBrowsingCommands: "Error browsing online commands:",
        description: "Browse online command repository",
        usage: "Usage: iflow commands online [options]",
        pageOption: "Page number (default: 1)",
        sizeOption: "Number of commands per page (default: 20)",
        searchOption: "Search term to filter commands",
      },
      workflowAdd: {
        description: "Add a workflow from online repository",
        pleaseAuthenticate: "Please authenticate first by running the auth command",
        unableToLoadWorkflows: "Unable to load workflows. Please try again later",
        authenticationFailed: "Authentication failed. Please check your API key or re-authenticate",
        accessDenied: "Access denied. Please check your permissions",
        serviceNotFound: "Workflows service not found. Please try again later",
        serverError: "Server error. Please try again later",
        failedToLoadFromServer: "Failed to load workflows from server",
        connectionError: "Unable to load workflows. Please check your connection and try again",
        networkError: "Network error. Please check your internet connection",
        failedToFetchDetails: "Failed to fetch workflow details: {{error}}",
        invalidExtInfo: "Invalid workflow extension info: {{error}}",
        noDownloadUrl: "Workflow has no download URL",
        downloading: "Downloading workflow file: {{url}}",
        extracting: "Extracting workflow file...",
        copyingFiles: "Copying files to current directory...",
        installSuccess: `\u2714 Successfully installed workflow '{{workflowName}}'
Location: {{targetDir}}

Workflow files have been copied to the current directory.`,
        installFailed: `\u274C Failed to install workflow '{{workflowName}}'
Error: {{error}}`,
        invalidScope: "Error: Invalid scope '{{scope}}'. Valid scopes: project, global",
        apiKeyNotFound: "Error: API key not found.",
        searching: "Searching for workflow '{{nameOrId}}'...",
        error: "Error: {{error}}",
        notFoundInRepo: "Error: Workflow '{{nameOrId}}' not found in online repository.",
        foundWorkflow: "Found workflow: {{name}}",
        workflowDescription: "Description: {{description}}",
        installing: "Installing workflow...",
        errorAdding: "Error adding workflow: {{error}}",
        usage: "Usage: iflow workflow add <name-or-id>",
        workflowIdOrNumericIdOption: "workflowId, or numeric ID of the workflow",
        scopeOption: "Installation scope (project or global)",
        exampleId: "Add workflow by ID",
        exampleName: "Add workflow by name",
      },
      skillCommand: { description: "Manage skills", demandCommand: "You need to specify a subcommand." },
      skillAdd: {
        description: "Add a skill from online repository",
        pleaseAuthenticate: "Please authenticate first by running the auth command",
        unableToLoadSkills: "Unable to load skills. Please try again later",
        authenticationFailed: "Authentication failed. Please check your API key or re-authenticate",
        accessDenied: "Access denied. Please check your permissions",
        serviceNotFound: "Skills service not found. Please try again later",
        serverError: "Server error. Please try again later",
        failedToLoadFromServer: "Failed to load skills from server",
        connectionError: "Unable to load skills. Please check your connection and try again",
        networkError: "Network error. Please check your internet connection",
        failedToFetchDetails: "Failed to fetch skill details: {{error}}",
        invalidExtInfo: "Invalid skill extension info: {{error}}",
        noDownloadUrl: "Skill has no download URL",
        downloading: "Downloading skill file: {{url}}",
        extracting: "Extracting skill file...",
        copyingFiles: "Copying files to .iflow/skills directory...",
        installSuccess: `\u2714 Successfully installed skill '{{skillName}}'
Location: {{targetDir}}

Skill files have been copied to .iflow/skills directory.`,
        installFailed: `\u274C Failed to install skill '{{skillName}}'
Error: {{error}}`,
        apiKeyNotFound: "Error: API key not found.",
        searching: "Searching for skill '{{nameOrId}}'...",
        error: "Error: {{error}}",
        notFoundInRepo: "Error: Skill '{{nameOrId}}' not found in online repository.",
        foundSkill: "Found skill: {{name}}",
        skillDescription: "Description: {{description}}",
        installing: "Installing skill...",
        errorAdding: "Error adding skill: {{error}}",
        usage: "Usage: iflow skill add <name-or-id> [--scope project|global]",
        skillIdOrNumericIdOption: "skillId, or numeric ID of the skill",
        scopeOption: "Installation scope: project or global, defaults to project",
        exampleProject: "Install skill to current project",
        exampleGlobal: "Install skill globally (~/.iflow/skills)",
      },
      help: {
        version: "Current version",
        basics: "Basics",
        addContext: "Add context",
        addContextDesc:
          "Use {{atSymbol}} to specify files for context (e.g., {{example}}) to target specific files or folders.",
        shellMode: "Shell mode",
        shellModeDesc:
          "Execute shell commands via {{exclamation}} (e.g., {{shellExample}}) or use natural language (e.g. {{naturalExample}}).",
        commands: "Commands",
        shellCommand: "shell command",
        keyboardShortcuts: "Keyboard Shortcuts",
        jumpWords: "Jump through words in the input",
        quitApp: "Quit application",
        toggleHelp: "Toggle help dialog",
        newLine: "New line",
        newLineLinux: "New line (Alt+Enter works for certain linux distros)",
        clearScreen: "Clear the screen",
        openEditor: "Open input in external editor",
        toggleYolo: "Toggle YOLO mode",
        toggleDebugConsole: "Toggle debug console display",
        imagePaste: "Image paste",
        sendMessage: "Send message",
        cancelOperation: "Cancel operation",
        toggleMode: "Toggle mode",
        cycleHistory: "Cycle through your prompt history",
        fullShortcutsList: "For a full list of shortcuts, see",
        scrollUpForMoreTips: "Scroll up for more tips",
      },
      editorDialog: {
        userSettings: "User Settings",
        workspaceSettings: "Workspace Settings",
        alsoModifiedIn: "(Also modified in {{scope}})",
        modifiedIn: "(Modified in {{scope}})",
        none: "None",
        selectEditor: "Select Editor",
        applyTo: "Apply To",
        instructions: "Use Enter to select, Tab to change focus",
        editorPreference: "Editor Preference",
        supportedEditorsNote:
          "These editors are currently supported. Please note that some editors cannot be used in sandbox mode.",
        preferredEditorIs: "Your preferred editor is:",
      },
      ideDialog: {
        connectToCurrent: "Connect to the current IDE",
        selectAndConnect: "Select and connect to IDE",
        switchIde: "Switch IDE",
        disconnectIde: "Disconnect the IDE",
        alreadyConnected: "IDE is already connected",
        operationFailed: "IDE operation failed:",
        processing: "Processing...",
        connected: "IDE Connected",
        connecting: "Connecting to IDE...",
        notConnected: "Not connected to IDE",
        unknownStatus: "Unknown status",
        ideConnection: "IDE Connection",
        currentStatus: "Current Status",
        options: "Options",
        instructions: "Use Enter to select, Esc to close",
        multipleIdesDetected: "Detected {{count}} available IDEs",
      },
      ideSelectionDialog: { loadingIdes: "Loading IDE...", noIdesDetected: "No available IDEs detected" },
      mcpListDialog: {
        failedToLoadServers: "Failed to load servers",
        serverNotFoundInSettings: 'Server "{{serverName}}" not found in {{scope}} settings.',
        successfullyRemovedServer: 'Successfully removed "{{serverName}}" from {{scope}} settings.',
        failedToRemoveServer: 'Failed to remove "{{serverName}}": {{error}}',
        removingServer: 'Removing server "{{serverName}}"...',
        errorPrefix: "\u274C {{message}}",
        removalFailed: "Removal failed",
        openingMcpPlatform: "Opening MCP platform in your browser: {{url}}",
        failedToOpenMcpPlatform: "Failed to open MCP platform: {{error}}",
        configuredMcpServers: "Configured MCP Servers",
        noMcpServersConfigured: "No MCP servers configured. Use /mcp online to browse and install servers.",
        navigation: "Navigation",
        openMcpPlatformAction: "Open MCP platform",
        exit: "Exit",
        configuredMcpServersWithCount: "Configured MCP Servers ({{count}} total)",
        ready: "Ready",
        starting: "Starting...",
        disconnected: "Disconnected",
        noDescription: "No description",
        tools: "Tools",
        prompts: "Prompts",
        from: "From",
        pageOf: "Page {{current}} of {{total}}",
        navigateUpDown: "Navigate up/down",
        viewServerDetails: "View server details",
        removeServer: "Remove server",
        prevNextPage: "Previous/Next page",
        noDescriptionAvailable: "No description available",
        serverDetails: "Server Details",
        status: "Status",
        connected: "Connected",
        connecting: "Connecting",
        command: "Command",
        httpUrl: "HTTP URL",
        sseUrl: "SSE URL",
        source: "Source",
        extension: "extension",
        oauth: "OAuth",
        authenticated: "Authenticated",
        tokenExpired: "Token Expired",
        notAuthenticated: "Not Authenticated",
        availableTools: "Available Tools ({{count}})",
        andMoreTools: "... and {{count}} more tools",
        availablePrompts: "Available Prompts ({{count}})",
        andMorePrompts: "... and {{count}} more prompts",
        actions: "Actions",
        removeThisServer: "Remove this server",
        backToList: "Back to list",
        confirmServerRemoval: "Confirm Server Removal",
        confirmRemovalMessage: "Are you sure you want to remove the following MCP server?",
        removalWarning: "This will remove the server from your configuration and stop all its tools.",
        yesRemoveServer: "Yes, remove server",
        noCancel: "No, cancel",
        cancel: "Cancel",
        loadingMcpServers: "Loading MCP Servers...",
        pleaseWaitLoading: "Please wait while we load your configured servers...",
        contextLength: "Context Length",
        tokens: "tokens",
        disabled: "Disabled",
        enableServer: "Enable server",
        disableServer: "Disable server",
        serverEnabled: 'Server "{{serverName}}" enabled',
        serverDisabled: 'Server "{{serverName}}" disabled',
        failedToUpdateServer: 'Failed to update server "{{serverName}}" status: {{error}}',
        authenticateServer: "Authenticate server",
        startingAuth: 'Starting OAuth authentication for server "{{serverName}}"...',
        authSuccess: 'Successfully authenticated server "{{serverName}}"',
        authFailed: 'Failed to authenticate server "{{serverName}}"',
        cannotDetermineUrl: 'Cannot determine URL for server "{{serverName}}". Please check configuration.',
        authCancelled: "Authentication cancelled",
        rediscoveringTools: 'Re-discovering tools for server "{{serverName}}"...',
        authenticating: "Authenticating...",
        authInProgress: "OAuth authentication in progress, please wait...",
        pressEscToCancel: "Press Esc to cancel",
        authorizationRequired: "Authorization Required",
        openUrlInBrowser: "Please open the following URL in your browser to complete authorization:",
        authUrlInstructions:
          "\u{1F4A1} TIP: Triple-click to select the entire URL, then copy and paste it into your browser.",
        manualCallbackRequired: "Manual Callback URL Required",
        manualCallbackInstructions:
          "After completing authorization in your browser, copy the complete URL from the address bar (including the code parameter)",
        manualCallbackNote:
          "\u26A0\uFE0F NOTE: This feature requires manual input support, currently showing placeholder.",
        restartingMcpRemote: 'Restarting mcp-remote server "{{serverName}}" to trigger re-authentication...',
        mcpRemoteRestarted:
          'mcp-remote server "{{serverName}}" restarted, please complete authorization in your browser.',
        mcpRemoteOAuthUrl: 'mcp-remote server "{{serverName}}" requires authorization, please visit: {{url}}',
        restartFailed: 'Failed to restart server "{{serverName}}": {{error}}',
        cannotGetToolRegistry: "Cannot get tool registry.",
      },
      skillsListDialog: {
        failedToLoadSkills: "Failed to load skills",
        noSkillSelected: "No skill selected",
        configuredSkills: "Configured Skills",
        noSkillsConfigured: "No skills configured. Create SKILL.md files in .iflow/skills directory.",
        navigation: "Navigation",
        exit: "Exit",
        configuredSkillsWithCount: "Configured Skills ({{count}} total)",
        global: "Global",
        project: "Project",
        noDescription: "No description",
        pageOf: "Page {{current}} of {{total}}",
        navigateUpDown: "Navigate up/down",
        viewSkillDetails: "View skill details",
        prevNextPage: "Previous/Next page",
        noDescriptionAvailable: "No description available",
        skillDetails: "Skill Details",
        location: "Location",
        filePath: "File Path",
        baseDirectory: "Base Directory",
        license: "License",
        contentPreview: "Content Preview",
        backToList: "Back to list",
        loadingSkills: "Loading Skills...",
        confirmationTitle: "Launch skill: {{skillName}}",
        confirmationPromptSkill: "**Skill:**",
        confirmationPromptDescription: "**Description:**",
        confirmationPromptLocation: "**Location:**",
        confirmationPromptQuestion: "Do you want to launch this skill?",
        skillNotFound: "Skill not found: {{skillName}}",
        launchingSkill: "Launching skill: **{{skillName}}**",
      },
      app: {
        continueMode: {
          continuedFromRecent: "Continued from most recent conversation ({{messageCount}} messages restored).",
          noPreviousConversations: "No previous conversations found to continue from.",
          failedToLoad: "Failed to load recent conversation: {{error}}",
        },
        resumeMode: {
          resumedSession: "Resumed session {{sessionId}} ({{messageCount}} messages restored).",
          sessionNotFound: "Session {{sessionId}} not found or empty.",
          failedToHandle: "Failed to handle resume mode: {{error}}",
          failedToResume: "Failed to resume session: {{error}}",
          failedToResumeSession: "Failed to resume session {{sessionId}}.",
          cancelled: "Resume cancelled. Starting new session.",
        },
        fgMode: { failedToLoad: "Failed to load recent conversation: {{error}}" },
        messageQueue: { submitSuccessful: "Message submitted successfully" },
        controls: {
          pressCtrlCAgainToExit: "Press Ctrl+C again to exit.",
          pressCtrlDAgainToExit: "Press Ctrl+D again to exit.",
          cliSuspended: "\u23F8\uFE0F iFlow CLI has been suspended. Run `fg` to bring iFlow CLI back.",
        },
        errors: {
          initializationError: "Initialization Error: {{error}}",
          checkApiKeyAndConfig: "Please check API key and configuration.",
        },
        memory: {
          refreshing: "Refreshing hierarchical memory (IFLOW.md or other context files)...",
          refreshSuccessWithContent:
            "Memory refreshed successfully. Loaded {{characters}} characters from {{fileCount}} file(s).",
          refreshSuccessNoContent: "Memory refreshed successfully. No memory content found.",
          refreshError: "Error refreshing memory: {{error}}",
        },
        planApproval: {
          exitingPlanMode: "Exiting plan mode and switching to {{mode}}.",
          continuingPlanMode:
            "Continuing in plan mode. Please provide more details or ask questions to refine the plan.",
          cancelled: "Plan approval cancelled. The operation was not executed.",
          failedToWritePlan: "Failed to write plan to file: {{error}}",
          planWrittenToFile: "Plan has been written to {{filePath}}. Please review and confirm to proceed.",
          noPlanContent:
            "User did not provide new plan content. Please check the modification and whether the plan.md file was manually deleted.",
          newPlan: `New plan:
## Plan

{{content}}`,
        },
        userQuestion: { cancelled: "User question dialog cancelled. The operation was not executed." },
        quotaErrors: {
          proQuotaExceededPaid: `\u26A1 You have reached your daily {{currentModel}} quota limit.
\u26A1 Automatically switching from {{currentModel}} to {{fallbackModel}} for the remainder of this session.
\u26A1 To continue accessing the {{currentModel}} model today, consider using /auth to switch to using a paid API key from AI Studio at https://aistudio.google.com/apikey`,
          proQuotaExceededFree: `\u26A1 You have reached your daily {{currentModel}} quota limit.
\u26A1 Automatically switching from {{currentModel}} to {{fallbackModel}} for the remainder of this session.
\u26A1 To increase your limits, upgrade to a iFlow Code Assist Standard or Enterprise plan with higher limits at https://goo.gle/set-up-gemini-code-assist
\u26A1 Or you can utilize a iFlow API Key. See: https://docs.iflow.cn/docs/
\u26A1 You can switch authentication methods by typing /auth`,
          genericQuotaExceededPaid: `\u26A1 You have reached your daily quota limit.
\u26A1 Automatically switching from {{currentModel}} to {{fallbackModel}} for the remainder of this session.
\u26A1 To continue accessing the {{currentModel}} model today, consider using /auth to switch to using a paid API key from AI Studio at https://aistudio.google.com/apikey`,
          genericQuotaExceededFree: `\u26A1 You have reached your daily quota limit.
\u26A1 Automatically switching from {{currentModel}} to {{fallbackModel}} for the remainder of this session.
\u26A1 To increase your limits, upgrade to a iFlow Code Assist Standard or Enterprise plan with higher limits at https://goo.gle/set-up-gemini-code-assist
\u26A1 Or you can utilize a iFlow API Key. See: https://docs.iflow.cn/docs/
\u26A1 You can switch authentication methods by typing /auth`,
          defaultFallbackPaid: `\u26A1 Automatically switching from {{currentModel}} to {{fallbackModel}} for faster responses for the remainder of this session.
\u26A1 Possible reasons for this are that you have received multiple consecutive capacity errors or you have reached your daily {{currentModel}} quota limit
\u26A1 To continue accessing the {{currentModel}} model today, consider using /auth to switch to using a paid API key from AI Studio at https://aistudio.google.com/apikey`,
          defaultFallbackFree: `\u26A1 Automatically switching from {{currentModel}} to {{fallbackModel}} for faster responses for the remainder of this session.
\u26A1 Possible reasons for this are that you have received multiple consecutive capacity errors or you have reached your daily {{currentModel}} quota limit
\u26A1 To increase your limits, upgrade to a iFlow Code Assist Standard or Enterprise plan with higher limits at https://goo.gle/set-up-gemini-code-assist
\u26A1 Or you can utilize a iFlow API Key. See: https://docs.iflow.cn/docs/
\u26A1 You can switch authentication methods by typing /auth`,
        },
        auth: { timeout: "Authentication timed out. Please try again." },
      },
      modelStatsDisplay: {
        title: "Model Stats For Nerds",
        noApiCalls: "No API calls have been made in this session.",
        metric: "Metric",
        api: "API",
        requests: "Requests",
        errors: "Errors",
        avgLatency: "Avg Latency",
        tokens: "Tokens",
        total: "Total",
        prompt: "Prompt",
        cached: "Cached",
        thoughts: "Thoughts",
        tool: "Tool",
        output: "Output",
      },
      setupGithubCommand: {
        errors: {
          notGitRepository:
            "Unable to determine the GitHub repository. /setup-github must be run from a git repository.",
          cannotCreateDirectory:
            "Unable to create {{directory}} directory. Do you have file permissions in the current directory?",
          downloadFailed: "Invalid response code downloading {{endpoint}}: {{status}} - {{statusText}}",
          emptyDownload: "Empty body while downloading {{endpoint}}: {{status}} - {{statusText}}",
        },
        success:
          "Successfully downloaded {{workflowCount}} workflows and updated .gitignore. Follow the steps in {{readmeUrl}} (skipping the /setup-github step) to complete setup.",
        toolDescription: "Setting up GitHub Actions to triage issues and review PRs with iFlow.",
      },
      gitUtils: {
        errors: {
          emptyRepoRoot: "Git repo returned empty value",
          cannotExtractRepoInfo: "Owner & repo could not be extracted from remote URL: {{remoteUrl}}",
        },
      },
      mcpGet: {
        description: "Get server configuration",
        usage: "Usage: iflow mcp get <name>",
        options: { name: "Name of the server" },
        errors: { serverNotFound: 'MCP server "{{name}}" not found.' },
        info: {
          serverTitle: "MCP Server: {{name}}",
          configuration: "Configuration:",
          transportStdio: "  Transport: stdio",
          transportSse: "  Transport: sse",
          transportHttp: "  Transport: http",
          transportUnknown: "  Transport: unknown",
          command: "  Command: {{command}}",
          url: "  URL: {{url}}",
          arguments: "  Arguments:",
          argumentItem: "    [{{index}}]: {{arg}}",
          environmentVariables: "  Environment variables:",
          envVar: "    {{key}}={{value}}",
          headers: "  Headers:",
          header: "    {{key}}: {{value}}",
          description: "  Description: {{description}}",
          timeout: "  Timeout: {{timeout}}ms",
          trusted: "  Trusted: {{trusted}}",
          includeTools: "  Include tools:",
          excludeTools: "  Exclude tools:",
          toolItem: "    [{{index}}]: {{tool}}",
          extension: "  Extension: {{extension}}",
          rawJsonConfiguration: "Raw JSON configuration:",
        },
        common: { yes: "yes", no: "no" },
      },
      mcpList: {
        description: "List all configured MCP servers",
        info: {
          noServersConfigured: "No MCP servers configured.",
          configuredServers: `Configured MCP servers:
`,
          serverInfoHttp: "{{url}} (http)",
          serverInfoSse: "{{url}} (sse)",
          serverInfoStdio: "{{command}} {{args}} (stdio)",
          serverStatusLine: "{{statusIndicator}} {{serverInfo}} - {{statusText}}",
        },
        status: {
          connected: "Connected",
          connecting: "Connecting",
          disconnected: "Disconnected",
          disabled: "Disabled",
        },
      },
      mcpRemove: {
        description: "Remove a server",
        usage: "Usage: iflow mcp remove [options] <name>",
        options: { name: "Name of the server", scope: "Configuration scope (user or project)" },
        errors: { serverNotFound: 'Server "{{name}}" not found in {{scope}} settings.' },
        info: { serverRemoved: 'Server "{{name}}" removed from {{scope}} settings.' },
      },
      mcpResetProjectChoices: {
        description: "Reset all project-scoped MCP server choices",
        usage: "Usage: iflow mcp reset-project-choices",
        info: {
          noFilesFound: "No .mcp.json files found in this project",
          foundFiles: "Found {{count}} .mcp.json file(s) in project:",
          invalidJson: "  \u26A0\uFE0F  {{path}} - Invalid JSON, skipping",
          fileDeleted: "  \u2714 {{path}} - Deleted",
          noChoicesSkipping: "  \u2139\uFE0F  {{path}} - No MCP server choices, skipping",
          summary: "Summary:",
          deletedFiles: "  Deleted: {{count}} file(s)",
          errorFiles: "  Errors: {{count}} file(s)",
          resetComplete: "\u2714 All project-scoped MCP server choices have been reset",
          extensionPrompt: "   Extension-provided MCP servers will prompt for approval again",
        },
        errors: {
          fileError: "  \u274C {{path}} - Error: {{error}}",
          searchError: "Error searching for .mcp.json files:",
        },
      },
      mcpSettingsUtils: {
        errors: {
          loadingSettings: "Error loading settings from {{path}}:",
          savingSettings: "Error saving settings to {{path}}:",
        },
      },
      agentCommand: { description: "Manage agents", demandCommand: "You need at least one command before continuing." },
      agentConfigCreator: {
        progress: {
          generatingConfiguration: "Generating agent configuration...",
          processingResponse: "Processing response...",
          parsingConfiguration: "Parsing configuration...",
          configurationGeneratedSuccessfully: "Configuration generated successfully!",
        },
        errors: {
          contentGeneratorConfigNotAvailable: "Content generator config not available",
          generationFailed: "Agent configuration generation failed: {{message}}",
          noResponseReceived: "No response received from AI agent configuration generator",
          missingRequiredFields: "Invalid agent configuration: missing required fields",
          invalidIdentifierFormat:
            "Invalid identifier format: must contain only lowercase letters, numbers, and hyphens",
          failedToParseJson:
            "Failed to parse agent configuration JSON. The AI response was not valid JSON format. Error: {{error}}",
          generationCancelled: "Agent configuration generation was cancelled",
          generationFailedGeneric: "Agent configuration generation failed: {{error}}",
        },
      },
      valueInputDialog: {
        mcpServerConfiguration: "MCP Server Configuration: {{serverName}}",
        stepOfConfigure: "Step {{current}} of {{total}}: Configure {{key}}",
        enterPlaceholder: "Enter {{key}}...",
        expectedTypeInteger: "Expected type: Integer number",
        pleaseEnterValidInteger: "Please enter a valid integer number",
        pressEscapeToGoBack: "Press Escape to go back",
        pressEscapeToCancel: "Press Escape to cancel",
      },
      commandsOnlineDialog: {
        apiKeyNotFound: "API key not found. Please authenticate first.",
        unableToLoadCommands: "Unable to load commands. Please try again later",
        authenticationFailed: "Authentication failed. Please check your API key or re-authenticate",
        accessDenied: "Access denied. Please check your permissions",
        serviceNotFound: "Commands service not found. Please try again later",
        serverError: "Server error. Please try again later",
        failedToFetchCommands: "Failed to fetch commands",
        failedToFetchCommandsWithError: "Failed to fetch commands: {{error}}",
        noCommandsFound: "No commands found in the online repository.",
        failedToLoadCommands: "Failed to load commands",
        commandAlreadyInstalled: "Command '{{name}}' is already installed in your {{scope}} scope.",
        successfullyInstalled: `Successfully installed command '{{name}}' for {{scope}}
Location: {{filePath}}

\u26A0\uFE0F  Please restart the CLI to use the new command.`,
        failedToInstall: "Failed to install command '{{name}}': {{error}}",
        installationFailed: "Installation failed",
        availableCommands: "Available Commands",
        noCommandsAvailable: "No commands available",
        availableCommandsWithTotal: "Available Commands ({{totalCommands}} total)",
        category: "Category",
        tags: "Tags",
        pageOfTotal: "Page {{current}} of {{total}}",
        navigation: "Navigation",
        navigateUpDown: "\u2191/\u2193 or j/k - Navigate up/down",
        previousNextPage: "\u2190/\u2192 or h/l - Previous/Next page",
        enterViewDetails: "Enter - View details",
        qExit: "q - Exit",
        details: "Details",
        id: "ID",
        model: "Model",
        version: "Version",
        author: "Author",
        status: "Status",
        detailContext: "Detail Context",
        actions: "Actions",
        installForProject: "1 - Install for project",
        installForUser: "2 - Install for user",
        backToList: "b - Back to list",
        loadingCommands: "Loading Commands...",
        pleaseWaitFetching: "Please wait while we fetch available commands...",
      },
      showMoreLines: { pressCtrlS: "Press ctrl-s to show more lines" },
      compressionDetailsDisplay: {
        noCompressionHistory: "No compression history found in current session.",
        compressionSummary: "Compression Summary",
        ctrlRToClose: "ctrl+r to close",
      },
      subAgentDisplay: { invalidArgs: "Invalid args" },
      themeDialog: {
        custom: "Custom",
        userSettings: "User Settings",
        workspaceSettings: "Workspace Settings",
        systemSettings: "System Settings",
        selectTheme: "Select Theme",
        applyTo: "Apply To",
        preview: "Preview",
        useEnterToSelect: "Use Enter to select",
        tabToChangeFocus: ", Tab to change focus",
      },
      geminiPrivacyNotice: {
        title: "iFlow API Key Notice",
        description:
          'By using the iFlow API<apiRef />, Google AI Studio<studioRef />, and the other Google developer services that reference these terms (collectively, the "APIs" or "Services"), you are agreeing to Google APIs Terms of Service (the "API Terms")<termsRef />, and the iFlow API Additional Terms of Service (the "Additional Terms")<additionalRef />.',
        pressEscToExit: "Press Esc to exit.",
      },
      cloudPaidPrivacyNotice: {
        title: "Vertex AI Notice",
        description:
          'Service Specific Terms<termsRef /> are incorporated into the agreement under which Google has agreed to provide Google Cloud Platform<cloudRef /> to Customer (the "Agreement"). If the Agreement authorizes the resale or supply of Google Cloud Platform under a Google Cloud partner or reseller program, then except for in the section entitled "Partner-Specific Terms", all references to Customer in the Service Specific Terms mean Partner or Reseller (as applicable), and all references to Customer Data in the Service Specific Terms mean Partner Data. Capitalized terms used but not defined in the Service Specific Terms have the meaning given to them in the Agreement.',
        pressEscToExit: "Press Esc to exit.",
      },
      cloudFreePrivacyNotice: {
        loading: "Loading...",
        errorLoading: "Error loading Opt-in settings: {{error}}",
        pressEscToExit: "Press Esc to exit.",
        yes: "Yes",
        no: "No",
        title: "Alibaba Taobao Code Assist for Individuals Privacy Notice",
        privacyDescription:
          "This notice and our Privacy Policy<policyRef /> describe how iFlow Code Assist handles your data. Please read them carefully.",
        dataCollection:
          "When you use Alibaba Code Assist for individuals with iFlow CLI, Alibaba collects your prompts, related code, generated output, code edits, related feature usage information, and your feedback to provide, improve, and develop Alibaba products and services and machine learning technologies.",
        reviewProcess:
          "To help with quality and improve our products (such as generative machine-learning models), human reviewers may read, annotate, and process the data collected above. We take steps to protect your privacy as part of this process. This includes disconnecting the data from your Google Account before reviewers see or annotate it, and storing those disconnected copies for up to 18 months. Please don't submit confidential information or any data you wouldn't want a reviewer to see or Google to use to improve our products, services and machine-learning technologies.",
        allowDataUse: "Allow Alibaba to use this data to develop and improve our products?",
        pressEnterToChoose: "Press Enter to choose an option and exit.",
      },
      errorHandler: {
        retryInstructions: "Press R to retry, or Escape to cancel",
        sessionNotFound: "Session not found. It may have been deleted or moved.",
        invalidSessionFormat: "Session file is corrupted or in an invalid format.",
        historyManagerError: "Unable to access session history. The history system may be unavailable.",
        conversionError: "Failed to convert session data to display format.",
        fileSystemError: "File system error occurred while accessing session data.",
        permissionError: "Permission denied. Check file permissions for session data.",
        networkError: "Network error occurred while accessing session data.",
        unknownError: "An unknown error occurred.",
        suggestions: {
          sessionNotFound: "Try selecting a different session or start a new conversation.",
          invalidSessionFormat: "Try selecting a different session. This session file may be corrupted.",
          historyManagerError: "Try restarting the application or check if the history directory is accessible.",
          conversionError: "Try selecting a different session or report this issue if it persists.",
          fileSystemError: "Check disk space and file permissions, then try again.",
          permissionError: "Check file permissions or run with appropriate privileges.",
          networkError: "Check your network connection and try again.",
          default: "Try again or start a new conversation if the problem persists.",
        },
      },
      queueStatusDisplay: {
        messagesPending_one: "{{count}} message pending",
        messagesPending_other: "{{count}} messages pending",
      },
      planApprovalDialog: {
        noMarkdownPlanning: "Use markdown to edit the plan before approval.",
        planReadyForReview: "Plan Ready for Review",
        wouldYouLikeToProceed: "Would you like to proceed?",
        yesSmartMode: "Yes, and use smart mode edits",
        yesManualApproval: "Yes, and manually approve edits",
        noKeepPlanning: "No, keep planning",
        navigationInstructions: "Use \u2191\u2193 arrows to navigate, Enter to select, or press 1-4",
      },
      examplesDisplay: {
        title: "\u{1F680} Examples & Getting Started",
        welcome: "Welcome to iFlow CLI! Check out these examples to get the most out of your experience:",
        repositoryLabel: "\u{1F4DA} Examples Repository:",
        quickTipsLabel: "\u{1F4A1} Quick Tips:",
        tips: {
          fileContents: "\u2022 Use @ to include file contents in your prompt",
          shellCommands: "\u2022 Use ! to execute shell commands directly",
          initCommand: "\u2022 Use /init to create IFLOW.md for better context",
          demoCommand: "\u2022 Use /demo to try research and brainstorming workflows",
          helpCommand: "\u2022 Use /help to see all available commands",
        },
        continueInstructions: "Press Enter or Space to continue to chat \u2192",
      },
      programmersDayDisplay: {
        title: "\u{1F389} Happy Programmers' Day 1024!",
        welcome: "On this special day that belongs to us, we salute all developers who change the world with code!",
        whyLabel: "\u{1F4A1} Why 1024?",
        whyContent: {
          first: "1024 is 2 to the power of 10, a fundamental unit in computer science.",
          second: "1KB = 1024 bytes, just as every byte of code we write carries the power to change the world.",
        },
        culturesLabel: "\u{1F680} Programmer's Culture:",
        cultures: {
          binary: "\u2022 There are 10 types of people: those who understand binary and those who don't",
          helloWorld: "\u2022 Hello World is not just code, but the first conversation with the world",
          bugs: "\u2022 Bugs are not errors, but a guide to better solutions",
          poetry: "\u2022 Code is poetry, elegance is eternal",
        },
        wishes: "May all developers: have bug-free code, reasonable requirements, and keep all their hair! \u{1F388}",
        continueInstructions: "Press Enter or Space to continue \u2192",
      },
      annualReportDisplay: {
        title: "\u{1F389} iFlow CLI with You {{year}}",
        welcome: '"Code is a letter across time and space, iFlow delivers every line of your inspiration."',
        highlightsLabel: "Highlights of this year:",
        highlights: {
          achievements: "\u2728 Every command you typed is quietly rewriting the future",
          statistics: "\u{1F680} Generated code forms a galaxy that can circle Earth 80 times",
          milestones:
            "\u{1F4B0} Tokens consumed pile up like grains of sand, enough to buy a fish pond in the real world",
          insights:
            "\u{1F4A1} Technical challenges solved become cornerstones, gradually building your cyber digital world",
        },
        closing: "What data cannot define is your eternal love for technology!",
        reportUrl: "View Full Annual Report:",
        instructions: "Press Space to open in browser | Press Enter to continue \u2192",
      },
      taskAbbreviationMessage: {
        expandHint: "... (ctrl+r to expand)",
        initializing: "Initializing...",
        expandInstructions: "ctrl+r to expand",
        moreToolUses: "+{{count}} more tool use{{count, plural, one {} other {s}}} ({{expandHint}})",
        completedStats:
          "\u23BF Done ({{toolCount}} tool(s) use {{tokens}} token(s) \xB7 {{duration}} \xB7 {{expandHint}})",
      },
      detailedMessagesDisplay: {
        title: "Debug Console",
        closeHint: "ctrl+o to close",
        summary: "Message Summary",
        errors: "errors",
        warnings: "warnings",
        logs: "logs",
        debugs: "debug messages",
        logFileHint: "Detailed logs saved to:",
      },
      consoleSummaryDisplay: {
        errorCount: "{{count}} error{{count, plural, one {} other {s}}}",
        detailsHint: "ctrl+o for details",
      },
      debugProfiler: { renders: "Renders: " },
      subAgentToolMessage: {
        showingLast: "Showing last {{shown}} of {{total}} tools. Press ctrl-s to show {{hidden}} more.",
        initializingAgents: "Initializing agents...",
        agentTitle: "{{type}} Agent",
        round: "Round {{count}}",
        messageCount: "{{count}} message{{count, plural, one {} other {s}}}",
        model: "Model",
        originallyRequested: "Originally requested: {{model}} ({{reason}})",
        task: "Task",
        tools: "Tools",
        status: {
          created: "created",
          running: "running",
          completed: "completed",
          failed: "failed",
          unknown: "unknown",
        },
      },
      sessionSelectorComponent: {
        noSessionsFound: "No previous sessions found in this project.",
        startingNew: "Starting a new conversation...",
        availableSessions: "Available Conversation Sessions:",
        pageInfo: "Page {{current}} of {{total}} | Sessions {{start}}-{{end}} of {{totalSessions}}",
        created: "Created",
        modified: "Modified",
        messages: "Messages",
        gitBranch: "Git Branch",
        navigationInstructions: "Use \u2191\u2193 arrows to navigate{{autoScroll}}, Enter to select.",
        autoScroll: "auto-scroll",
        scrollHint: "Use arrow keys to scroll through all {{total}} sessions across {{pages}} pages",
        time: {
          justNow: "just now",
          minutesAgo: "{{count}}m ago",
          hoursAgo: "{{count}}h ago",
          daysAgo: "{{count}}d ago",
          weeksAgo: "{{count}}w ago",
        },
      },
      maxSizedBox: {
        firstLinesHidden: "... first {{count}} line$s$ hidden ... (ctrl+r to expand)",
        lastLinesHidden: "... last {{count}} line$s$ hidden ... (ctrl+r to expand)",
      },
      toolConfirmationMessage: {
        modifyInProgress: "Modify in progress:",
        saveAndCloseEditor: "Save and close external editor to continue",
        applyChangeQuestion: "Apply this change?",
        yesAllowOnce: "Yes, allow once",
        yesAllowAlways: "Yes, allow always",
        modifyWithEditor: "Modify with external editor",
        noSuggestChanges: "No, suggest changes (esc)",
        allowExecutionQuestion: "Allow execution of: '{{command}}'?",
        yesAllowAlwaysEllipsis: "Yes, allow always ...",
        proceedQuestion: "Do you want to proceed?",
        urlsToFetch: "URLs to fetch:",
        mcpServer: "MCP Server",
        tool: "Tool",
        allowMcpToolQuestion: 'Allow execution of MCP tool "{{toolName}}" from server "{{serverName}}"?',
        yesAlwaysAllowTool: 'Yes, always allow tool "{{toolName}}" from server "{{serverName}}"',
        yesAlwaysAllowAllTools: 'Yes, always allow all tools from server "{{serverName}}"',
        smartModeDetected: "Smart mode detected {{riskLevel}} risk: {{riskDescription}}",
        riskDetectedQuestion: "Potential risk detected, continue execution?",
        yesAgreeExecute: "Yes, agree to execute",
        noRefuseExecute: "No, refuse execution",
        smartAudit: "Smart Audit",
        riskLevel: "Risk Level",
        detectionMethod: "Detection Method",
        blacklistRule: "Blacklist Rule",
        aiSmartAudit: "AI Smart Audit",
        defaultQuestion: "Continue execution?",
        defaultYes: "Yes",
        defaultNo: "No",
        riskDescription: "Risk Description",
        smartAuditResult: "Smart Audit Result",
        riskLevelLabel: "Risk Level",
        detectionMethodLabel: "Detection Method",
        auditLatency: "Audit Latency",
        confirmExecutionPrompt: "Please confirm whether to continue executing this operation",
        unknownDetector: "Unknown Detector",
        smartModeRiskDetected: "Smart mode detected potential risk",
        potentialSecurityRisk: "Potential security risk detected",
        questionPrompt: "Please answer the question",
        other: "Other",
        noneSelected: "None selected",
        questionProgress: "Question {{current}} of {{total}}",
        multiSelectInstructions: "\u2191/\u2193: Navigate, Space: Toggle selection, Enter: Confirm, Esc: Cancel",
        singleSelectInstructions: "\u2191/\u2193: Navigate, Enter: Confirm, Esc: Cancel",
        previousAnswers: "Previous answers",
      },
      blacklistRules: {
        deleteRootDirectory:
          "This command will delete all files in the system root directory, causing complete system crash and permanent data loss. This is an extremely dangerous destructive operation.",
        deleteSystemDirectory:
          "This command will delete critical system directories, causing the system to malfunction and potentially requiring a system reinstall to recover.",
        deleteWithWildcard:
          "This command uses wildcards to batch delete files, which may accidentally delete important data. It is recommended to confirm the specific files to be deleted first.",
        formatDisk:
          "This command will format the disk and erase all data. This is an irreversible operation, please ensure important data is backed up.",
        directDiskWrite:
          "This command writes directly to disk devices, which will overwrite existing data and may cause the system to fail to boot.",
        clearSystemConfig:
          "This command will clear critical system configuration files, causing users to be unable to log in or the system to fail to boot.",
        deleteBootFiles:
          "This command deletes system boot files, which will cause the system to fail to boot and require recovery tools to fix.",
        modifySystemPermissions:
          "This command modifies system permission configuration, which may allow unauthorized users to gain administrator privileges, creating security risks.",
        setSpecialPermissions:
          "This command sets special permissions for programs, which may be exploited for privilege escalation attacks.",
        unsafeFilePermissions:
          "This command sets files to be readable, writable, and executable by everyone, creating serious security vulnerabilities.",
        disableSelinux:
          "This command disables the SELinux security module, reducing system security protection capabilities and potentially making the system more vulnerable to attacks.",
        disableFirewall: "This command turns off the system firewall, exposing the system to network attack risks.",
        disableWindowsSecurity:
          "This command disables Windows security protection, causing the system to lose virus and malware protection capabilities.",
        readPasswordFile:
          "This command attempts to read system password files, which may be used to steal user credential information.",
        readSshKeys: "This command reads SSH private key files, which may lead to unauthorized account access.",
        searchPasswords:
          "This command searches for password-related information in the system, which may discover sensitive credentials.",
        uploadToExternal: "This command uploads local files to external servers, which may lead to data leakage.",
        packageAndTransfer:
          "This command packages data and transfers it externally, which may be used to steal large amounts of information.",
        dnsDataExfiltration:
          "This command may leak data through DNS queries, which is a covert method of data exfiltration.",
        reverseShellNetcat:
          "This command establishes a reverse shell connection, allowing remote control of this system, which is extremely dangerous.",
        reverseShellBash:
          "This command uses Bash to establish a reverse connection, allowing attackers to remotely control the system.",
        reverseShellPython: "This command uses Python to create a reverse shell, which may be used for remote control.",
        downloadAndExecute:
          "This command downloads and immediately executes code from the network, which may run malicious programs.",
        encodedCommand: "This command executes encoded commands, commonly used to hide malicious code.",
        forkBomb: "This command is a fork bomb that will rapidly exhaust system resources and cause system crash.",
        cpuExhaustion:
          "This command will continuously consume CPU resources, causing the system to respond slowly or become unusable.",
        memoryExhaustion:
          "This command rapidly consumes system memory, which may cause system crash or programs to be forcibly terminated.",
        diskSpaceExhaustion:
          "This command creates large files to fill disk space, which may cause the system to malfunction.",
        modifySystemConfigFile:
          "This operation attempts to modify critical system configuration files, which may affect system security or stability.",
        modifySystemExecutable:
          "This operation attempts to modify system executable files, which may damage system functionality or implant malicious code.",
        modifySshConfig: "This operation modifies SSH service configuration, which may reduce system access security.",
        accessInternalNetwork:
          "This request accesses internal network addresses, which may attempt to probe internal networks or access sensitive services.",
        privilegedDockerRun:
          "This command runs containers in privileged mode, giving container processes host root privileges, which is extremely dangerous.",
        mountDockerSocket:
          "This command mounts the Docker socket to the container, allowing the container to control the host Docker daemon.",
        mountHostDirectory:
          "This command mounts the host root directory or system directories to the container, which may lead to container escape.",
        dropDatabase: "This command deletes the entire database, which will cause permanent data loss.",
        truncateTable: "This command clears table contents, which may cause business data loss.",
        killAllProcessesByName:
          "This command will terminate all processes with the same name, which may affect multiple running applications. It is recommended to confirm the specific process ID first to avoid accidentally killing important services.",
        killProcessesWithWildcard:
          "This command uses wildcards to batch terminate processes, which may accidentally kill system critical processes or important applications. It is strongly recommended to first view the process list with ps/Get-Process, then terminate precisely by process ID.",
        killAllUserProcesses:
          "This command will terminate all processes of the current user, causing all running programs to be forcibly closed, including this CLI tool itself. This is an extremely dangerous operation.",
        killSystemCriticalProcess:
          "This command attempts to terminate system critical processes, which will cause system crash, service interruption, or inability to log in. This may require a system restart to recover.",
        killAllNodeProcesses:
          "This command will terminate all Node.js processes, including this CLI tool itself, causing the tool to exit immediately. It may also affect other running Node.js applications. It is recommended to use process ID to terminate the target process precisely.",
        killAllPythonProcesses:
          "This command will terminate all Python processes, which may affect multiple Python applications, scripts, and services. It is recommended to confirm the specific process to terminate first to avoid affecting other important tasks.",
        killAllJavaProcesses:
          "This command will terminate all Java processes, which may cause Java application service interruption, unsaved data, and other issues. It is recommended to use jps to view Java processes first, then terminate precisely by process ID.",
        killAllDatabaseProcesses:
          "This command will terminate all database processes, causing database service interruption, connection disconnection, and possible data corruption. This is an extremely dangerous operation that may cause business interruption and data loss.",
        killAllWebServerProcesses:
          "This command will terminate all web server processes, causing website service interruption and user connection disconnection. It is recommended to use service management commands (such as systemctl) to gracefully restart services.",
      },
      useAuthCommand: {
        browserLaunchFailed: "Browser launch failed: {{message}} Please select a different authentication method.",
        loginFailed: "Failed to login. Message: {{message}}",
        configurationFailed: "Failed to apply new configuration. Message: {{message}}",
      },
      atCommandProcessor: {
        toolNotFound: "Error: read_many_files tool not found.",
        invalidAtCommand: "Error: Invalid @ command '{{command}}'. No path specified.",
        successfullyRead: "Successfully read: {{files}}",
        errorReadingFiles: "Error reading files ({{files}}): {{error}}",
        tooManyFiles:
          "Directory {{path}} contains {{count}} files, which exceeds the limit of {{limit}}. Please use a more specific path or glob pattern to narrow down the scope.",
      },
      useEditorSettings: {
        editorPreferenceSet: 'Editor preference set to "{{editorType}}" in {{scope}} settings.',
        editorPreferenceCleared: "Editor preference cleared in {{scope}} settings.",
        failedToSetPreference: "Failed to set editor preference: {{error}}",
      },
      shellCommandProcessor: {
        commandCancelled: "Command was cancelled.",
        commandTerminated: "Command terminated by signal: {{signal}}.",
        commandExited: "Command exited with code {{exitCode}}.",
        directoryChangeWarning:
          "WARNING: shell mode is stateless; the directory change to '{{directory}}' will not persist.",
      },
      concurrentScheduler: {
        errors: {
          executionAborted: "Execution aborted",
          tasksFailedSummary: "{{failedCount}} tasks failed: {{errorSummary}}",
          executionWasAborted: "Execution was aborted",
        },
      },
      toolPermissionFilter: { errors: { invalidFileSizeFormat: "Invalid file size format: {{sizeStr}}" } },
      subAgentManager: {
        errors: {
          noAssistantMessages: "Agent {{agentIndex}}: No assistant messages generated",
          subAgentExecutionFailed: "SubAgent execution failed: {{message}}",
          toolNotFound: "Tool {{toolName}} not found",
        },
        usingSavedPreference: "Using saved preference",
        modelNotSupported: "Model not supported",
        agentExecutionInterrupted: "Agent execution was interrupted.",
        agentCompletedWithoutOutput: "Agent completed without generating text output",
        toolExecutionAborted: "Tool execution was aborted",
        toolExecutionFailed: "Tool execution failed",
        projectRoot: "Project root",
      },
      agentRegistry: {
        errors: {
          agentFileAlreadyExists: "Agent file already exists: {{filePath}}",
          sizeMustBeNonNegative: "Size must be non-negative",
          failedToCreateDirectory: "Failed to create directory {{dirPath}}: {{error}}",
        },
      },
      subAgentSessionManager: {
        errors: { contentGeneratorConfigNotAvailable: "Content generator config not available for SubAgent" },
      },
      resourceMonitor: {
        errors: {
          tokenLimitExceeded: "Token limit exceeded for agent {{agentId}}: {{currentTokens}} > {{maxTokens}}",
          toolCallLimitExceeded:
            "Tool call limit exceeded for agent {{agentId}}: {{currentToolCalls}} > {{maxToolCalls}}",
          executionTimeLimitExceeded:
            "Execution time limit exceeded for agent {{agentId}}: {{elapsed}}ms > {{maxExecutionTime}}ms",
        },
      },
      agentTimeoutController: {
        errors: { agentFailedAfterRetries: "Agent {{agentId}} failed after {{maxRetries}} attempts: {{error}}" },
      },
      recursionGuard: {
        errors: {
          taskToolCannotBeCalledFromSubAgent: "Task tool cannot be called from SubAgent",
          maximumRecursionDepthExceeded: "Maximum recursion depth exceeded: {{maxDepth}}",
          maximumAgentsPerLevelExceeded: "Maximum agents per level exceeded: {{agentCount}} agents at this level",
        },
      },
      ide: {
        connection: {
          disabled: "IDE integration is currently disabled. To enable it, run /ide.",
          disconnectedEnable: "IDE integration disabled. To enable it again, run /ide enable.",
          failedToConnect:
            "Failed to connect to IDE companion extension for {{ide}}. Please ensure the extension is running. To install the extension.",
          failedToConnectInstall:
            "Failed to connect to IDE companion extension for {{ide}}. Please ensure the extension is running. To install the extension, run /ide install.",
          connectionError:
            "IDE connection error. The connection was lost unexpectedly. Please try reconnecting by running /ide",
          workspaceRequired: "To use this feature, please open a workspace folder in {{ide}} and try again.",
          directoryMismatch:
            "Directory mismatch. iFlow CLI is running in a different location than the open workspace in {{ide}}. Please run the CLI from one of the following directories: {{directories}}",
          ideNotAvailable: "The selected IDE {{ide}} is not currently available. Please ensure it is running.",
          connectedTo: "Connected to {{ide}}",
        },
        processUtils: {
          errors: {
            shellProcessNotFound:
              "Failed to find shell process in the process tree. Falling back to top-level process, which may be inaccurate. If you see this, please file a bug via /bug.",
          },
        },
        errors: { invalidJsonContent: "Invalid JSON in text content" },
        installer: {
          vscode:
            "iFlow CLI for VS Code has been automatically installed. Please restart iFlow CLI to enable it. Supports awareness of currently open files and selected code.",
          jetbrains:
            "iFlow CLI for JetBrains IDE has been automatically installed. Please restart IDE to enable it. Supports awareness of currently open files and selected code.",
          unsupportedIde: "Unsupported IDE: {{ide}}",
          vsCodeCliNotFound:
            "VS Code CLI not found. Please ensure 'code' is in your system's PATH. For help, see https://code.visualstudio.com/docs/configure/command-line#_code-is-not-recognized-as-an-internal-or-external-command.",
          extensionInstallSuccess: "VS Code companion extension was installed successfully.",
          extensionInstallFailed:
            "Failed to install VS Code companion extension. manually from the VS Code extension marketplace.",
        },
      },
      mcp: {
        auth: {
          scopesRequired: "Scopes must be provided in the oauth config for Google Credentials provider",
          failedToGetAccessToken: "Failed to get access token from Google ADC",
          clientRegistrationFailed: "Client registration failed: {{status}} {{statusText}} - {{error}}",
          invalidResourceUrl: 'Invalid resource URL: "{{url}}". {{error}}',
          tokenExchangeFailed: "Token exchange failed: {{status}} - {{error}}",
          tokenRefreshFailed: "Token refresh failed: {{status}} - {{error}}",
          oauthDiscoveryFailed: "Failed to discover OAuth configuration from MCP server",
          cannotPerformRegistration: "Cannot perform dynamic registration without authorization URL",
          fetchAuthServerMetadataFailed: "Failed to fetch authorization server metadata for client registration",
          noClientIdAndNoRegistration: "No client ID provided and dynamic registration not supported",
          missingOAuthConfig: "Missing required OAuth configuration after discovery and registration",
          oauthCallbackTimeout: "OAuth callback timeout",
          stateValidationFailed: "State mismatch - possible CSRF attack",
          oauthError: "OAuth error: {{error}}",
          authenticationCancelled: "Authentication cancelled by user",
          missingCodeOrState: "Missing code or state parameter in callback URL",
          parseCallbackUrlFailed: "Failed to parse callback URL: {{error}}",
        },
        ui: {
          authenticationFailed: "Authentication Failed",
          authenticationSuccessful: "Authentication Successful!",
          closeWindow: "You can close this window and return to iFlow CLI.",
          notFound: "Not found",
          missingCodeOrState: "Missing code or state parameter",
          invalidStateParameter: "Invalid state parameter",
          openingBrowserForAuth: "Opening browser for OAuth authentication...",
          ifBrowserNotOpen: "If the browser does not open, please visit:",
          copyEntireUrl: "COPY THE ENTIRE URL BELOW (select all text between the lines):",
          tipTripleClick:
            "\u{1F4A1} TIP: Triple-click to select the entire URL, then copy and paste it into your browser.",
          warningCompleteUrl: "\u26A0\uFE0F  Make sure to copy the COMPLETE URL - it may wrap across multiple lines.",
          callbackServerListening: "OAuth callback server listening on port {{port}}",
          authorizationCodeReceived: "Authorization code received, exchanging for tokens...",
          authenticationSuccessfulTokenSaved: "Authentication successful! Token saved.",
          tokenVerificationSuccessful: "Token verification successful: {{token}}...",
          tokenVerificationFailed: "Token verification failed: token not found after save",
          failedToSaveToken: "Failed to save token: {{error}}",
          refreshingExpiredToken: "Refreshing expired token for MCP server: {{serverName}}",
          failedToRefreshToken: "Failed to refresh token: {{error}}",
          failedToOpenBrowser: "Failed to open browser automatically:",
          noAuthUrlAttemptingDiscovery: "No authorization URL provided, attempting OAuth discovery...",
          oauthConfigDiscoveredSuccess: "OAuth configuration discovered successfully",
          noClientIdAttemptingRegistration: "No client ID provided, attempting dynamic client registration...",
          dynamicClientRegistrationSuccess: "Dynamic client registration successful",
          callbackTimeoutSwitchManual: "\u23F1\uFE0F  Browser callback timeout, switching to manual mode...",
          manualCallbackInstructions:
            "Please complete the authorization in your browser, then copy the full URL from the address bar (including the code parameter)",
        },
        tokenStorage: {
          errors: {
            failedToLoadTokens: "Failed to load MCP OAuth tokens: {{error}}",
            failedToSaveToken: "Failed to save MCP OAuth token: {{error}}",
            failedToRemoveToken: "Failed to remove MCP OAuth token: {{error}}",
            failedToClearTokens: "Failed to clear MCP OAuth tokens: {{error}}",
          },
        },
        oauth: {
          discovery: {
            dynamicRegistrationSupported: "Dynamic client registration is supported at:",
            foundResourceMetadataUri: "Found resource metadata URI from www-authenticate header: {{uri}}",
            configDiscoveredFromWwwAuth: "OAuth configuration discovered successfully from www-authenticate header",
          },
        },
      },
      mcpAdd: {
        description: "Add a server",
        usage: "Usage: iflow mcp add [options] <name> <commandOrUrl> [args...]",
        options: {
          name: "Name of the server",
          commandOrUrl: "Command (stdio) or URL (sse, http)",
          scope: "Configuration scope (user or project)",
          transport: "Transport type (stdio, sse, http)",
          env: "Set environment variables (e.g. -e KEY=value)",
          header:
            'Set HTTP headers for SSE and HTTP transports (e.g. -H "X-Api-Key: abc123" -H "Authorization: Bearer abc123")',
          timeout: "Set connection timeout in milliseconds",
          trust: "Trust the server (bypass all tool call confirmation prompts)",
          description: "Set the description for the server",
          includeTools: "A comma-separated list of tools to include",
          excludeTools: "A comma-separated list of tools to exclude",
        },
        info: {
          detectedHomeDirectory:
            'Info: Detected home directory. Automatically using "user" scope to preserve existing settings.',
          serverAlreadyConfigured: 'MCP server "{{name}}" is already configured within {{scope}} settings.',
          serverUpdated: 'MCP server "{{name}}" updated in {{scope}} settings.',
          serverAdded: 'MCP server "{{name}}" added to {{scope}} settings. ({{transport}})',
        },
      },
      mcpAddJson: {
        description: "Add a server from JSON configuration",
        usage: "Usage: iflow mcp add-json [options] <name> <json>",
        options: { json: "JSON configuration string for the MCP server" },
        errors: {
          invalidJson: "Error: Invalid JSON configuration",
          mustBeObject: "Error: JSON configuration must be a valid object",
          noTransport: "Error: At least one transport must be configured (command, url, httpUrl, or tcp)",
          uvxRequiresUv: "Error: Detected uvx command, but uv is not installed on this system",
          uvInstallationGuide: "Please install uv before configuring this MCP server:",
        },
        info: {
          serverAdded: 'MCP server "{{name}}" added to {{scope}} settings. (json)',
          transportStdio: "Transport: stdio",
          transportSse: "Transport: sse",
          transportHttp: "Transport: http",
          transportWebsocket: "Transport: websocket",
          command: "Command: {{command}}",
          arguments: "Arguments: {{args}}",
          url: "URL: {{url}}",
          tcp: "TCP: {{tcp}}",
          description: "Description: {{description}}",
          envVars: "Environment variables: {{vars}}",
          headers: "Headers: {{headers}}",
          oauthEnabled: "OAuth enabled: yes",
        },
      },
      gemini: {
        errors: {
          invalidDnsResolutionOrder:
            'Invalid value for dnsResolutionOrder in settings: "{{order}}". Using default "{{defaultValue}}".',
          unexpectedErrorBugReport: "This is an unexpected error. Please file a bug report using the /bug tool.",
          criticalUnhandledRejection: "CRITICAL: Unhandled Promise Rejection!",
          criticalUncaughtException: "CRITICAL: Uncaught Exception!",
          reason: "Reason: {{reason}}",
          errorName: "Error Name: {{name}}",
          errorMessage: "Error Message: {{message}}",
          stackTrace: "Stack trace:",
          promptInteractiveFlagNotSupported:
            "Error: The --prompt-interactive flag is not supported when piping input from stdin.",
        },
        debug: {
          currentHeapSize: "Current heap size {{size}} MB",
          needToRelaunchWithMoreMemory: "Need to relaunch with more memory: {{size}} MB",
          nodejsWarning: "\u26A0\uFE0F Node.js Warning:",
          unhandledPromiseRejectionDetected: "\u{1F6A8} Unhandled Promise Rejection detected:",
        },
        crashDiagnosticsEnabled:
          "\u{1F50D} Crash diagnostics enabled - Core dump and crash files will be generated on crash",
        crashDetected: "\u{1F4A5} Crash detected! Crash info written to: {{crashFilePath}}",
        coreDumpWillBeGenerated: "\u{1F4CB} Core dump will be generated...",
        failedToWriteCrashFile: "\u274C Failed to write crash file:",
        errorInFile: "Error in {{path}}: {{message}}",
        pleaseFixFileAndTryAgain: "Please fix {{path}} and try again.",
        installedExtensions: "Installed extensions:",
        failedToConnectToIdeServer: "Failed to connect to IDE server:",
        themeNotFound: 'Warning: Theme "{{theme}}" not found.',
        errorAuthenticating: "Error authenticating:",
        errorDuringUnmount: "Error during unmount:",
        errorDuringResume: "Error during resume:",
        updateCheckFailed: "Update check failed:",
        noInputProvidedViaStdin: "No input provided via stdin.",
        pleaseSetAuthMethod:
          "Please set an Auth method in your {{userSettingsPath}} or specify one of the following environment variables before running:\\n  - apiKey, APIKEY, API_KEY, api_key \\n  - baseUrl, BASEURL, BASE_URL, base_url \\n  - modelName, MODELNAME, MODEL_NAME, model_name ",
      },
      languageCommand: {
        zhCN: "\u7B80\u4F53\u4E2D\u6587",
        enUS: "English",
        restartRequired: "Language switched to English. Please exit and reopen iFlow CLI to fully apply the changes.",
      },
      aboutCommand: { noSandbox: "no sandbox", unknown: "Unknown" },
      userStartupWarnings: {
        homeDirectory:
          "You are running iFlow CLI in your home directory. It is recommended to run it within a specific project. {{sizeInfo}}",
        iflowDirSize:
          'Global ~/.iflow directory size is {{size}}. You can choose "/cleanup-checkpoint" or "/cleanup-history" commands to clean up space as needed.',
        iflowDirSizeUnknown:
          'Unable to calculate global ~/.iflow directory size (possibly due to insufficient permissions). You can choose "/cleanup-checkpoint" or "/cleanup-history" commands to clean up space as needed.',
        rootDirectory:
          "Warning: You are running iFlow CLI in the root directory. Your entire folder structure will be used for context. It is strongly recommended to run in a project-specific directory.",
        fileSystemError: "Could not verify the current directory due to a file system error.",
      },
      sessionSelector: {
        noSessionsFound: "No sessions found for this project",
        messagesCount: "{{count}} messages",
        emptySession: "Empty session",
        failedToLoadSessions: "Failed to load sessions: {{error}}",
        loadingAvailableSessions: "Loading available sessions...",
        error: "Error: {{error}}",
        pressEnterToContinue: "Press Enter to continue with a new session",
        noSessionsFoundForProject: "No sessions found for this project",
        selectSessionToResume: "Select a session to resume",
        navigationInstructions: "Use arrow keys to navigate, Enter to select, Escape to cancel",
        totalSessionsAvailable: "Total: {{count}} session(s) available",
      },
      oauth2: {
        errors: {
          browserLaunchFailed:
            "Failed to open browser automatically. Please try a different authentication method or set NO_BROWSER=true.",
          browserLaunchUnexpectedError:
            "An unexpected error occurred while trying to open the browser: {{error}}. Please try a different authentication method or set NO_BROWSER=true.",
          tokenRequestFailed: "Token request failed: {{status}} {{statusText}}",
          tokenRefreshFailed: "Token refresh failed: {{status}} {{statusText}}",
          authenticationError: "Error during authentication: {{error}}",
          stateMismatch: "State mismatch. Possible CSRF attack",
          noCodeFound: "No code found in request",
          unexpectedRequest: "Unexpected request: {{url}}",
          tokenExpired: "iFlow OAuth2 token expired, need to re-authenticate.",
          tokenExpiresWarningSoon: "Token expires soon and no refresh token available",
          iflowLoginExpired: "Your iFlow Login expired. Please enter /auth to log in again.",
          serverOauth2Required: "Server OAuth2 flow is required",
          serverOauth2TokenExpired: "OAuth2 token has expired in server environment, re-authentication is required",
        },
        messages: {
          codeAssistLoginRequired: "Code Assist login required.",
          attemptingToOpenBrowser: "Attempting to open authentication page in your browser.",
          navigateToUrl: "Otherwise navigate to:",
          waitingForAuthentication: "Waiting for authentication...",
          loadedCachedCredentials: "Loaded cached credentials.",
          tokenExpiredClearing: "OAuth2 token expired. Clearing credentials for re-authentication.",
          tokenExpiresSoonClearing:
            "OAuth2 token expires soon and no refresh token available. Clearing credentials for re-authentication.",
          tokenRefreshedSuccessfully: "OAuth2 token refreshed successfully.",
          tokenRefreshFailedClearing: "OAuth2 token refresh failed. Clearing credentials for re-authentication.",
          failedToClearCredentials: "Failed to clear cached credentials:",
          failedToFetchUserInfo: "Failed to fetch user info: {{status}} {{statusText}}",
          errorRetrievingUserInfo: "Error retrieving user info:",
          errorRetrievingIflowUserInfo: "Error retrieving iFlow user info:",
          retryingRequest: "{{errorMessage}} - Retrying in {{delay}}ms (attempt {{attempt}}/{{maxRetries}})",
          errorAfterAllRetries: "Error fetching iFlow user info after all retries:",
          errorWithRetryInfo:
            "Error fetching iFlow user info (attempt {{attempt}}/{{maxRetries}}): {{error}} - Retrying in {{delay}}ms",
        },
      },
      turn: {
        autoCompressionEnabled: "Context too long, automatically compressing chat history...",
        autoCompressionSuccess:
          "Auto-compression completed: {{original}} \u2192 {{compressed}} tokens (saved {{saved}} tokens)",
        autoCompressionFailed: "Auto-compression failed, please manually compress or reduce input length.",
      },
      autoUpdate: {
        failed: "Automatic update failed. Please try `npm i -g @iflow-ai/iflow-cli` manually.",
        ok: "Update successful! The new version will be used on your next run.",
        available: "A new version of iFlow CLI is available! {{currentVersion}} \u2192 {{newVersion}}",
        installWithNpm: "Installed with npm. Attempting to automatically update now...",
        fallback: "Please run {{updateCommand}} to update",
        upToDate: "You are already using the latest version of iFlow CLI.",
      },
      planReviewDialog: {
        error: "Error loading plan",
        reviewPlan: "Review Plan",
        loading: "Loading plan...",
        proceedWithPlan: "How would you like to proceed with this plan?",
        smartMode: "1. Execute plan in smart mode (intelligent operation review)",
        defaultMode: "2. Execute plan in default mode (confirm each step)",
        continuePlanning: "3. Continue planning (ask for more details)",
        navigationInstructions: "Use \u2191/\u2193 arrows to navigate, Enter to select, or press 1-3",
      },
      cleanupCheckpointDialog: {
        title: "Global Checkpoint Cleanup",
        loadingStats: "Loading statistics...",
        deletingInProgress: "Checkpoint history is being deleted... (Please be patient if the size is large)",
        completeTitle: "Checkpoint history cleanup completed, disk space freed: {{size}}",
        restartReminder: "Please restart to use!",
        globalStatus: "Global Status:",
        cleanupTarget: "Cleanup Target:",
        globalHistoryAndTmp: "~/.iflow/history/ and ~/.iflow/tmp/",
        files: "Files:",
        filesUnit: "files (all projects)",
        diskUsage: "Disk usage: approx.",
        unknown: "Unknown",
        calculationFailed: "Calculation failed",
        calculating: "Calculating...",
        warningTitle: "This action will:",
        warningDeleteHistory: "Delete checkpoint history for all projects (~/.iflow/history/ and ~/.iflow/tmp/)",
        warningFreeSpace: "Free up disk space",
        warningNoRestore: "Cannot restore deleted checkpoints using /restore command",
        warningAffectsAllProjects: "This operation will affect all projects that have used iFlow",
        confirmOption: "Confirm cleanup of all checkpoint cache (cannot be recovered)",
        cancelOption: "Cancel",
        instructions: "(Press Enter to select, ESC to cancel)",
      },
      cleanupHistoryDialog: {
        title: "Global Conversation History Cleanup",
        loadingStats: "Loading statistics...",
        deletingInProgress: "Conversation history is being deleted... (Please be patient if the size is large)",
        completeTitle: "Conversation history cleanup completed, disk space freed: {{size}}",
        restartReminder: "Please restart to use!",
        globalStatus: "Global Status:",
        cleanupTarget: "Cleanup Target:",
        globalProjects: "~/.iflow/projects/",
        files: "Files:",
        filesUnit: "files (all projects)",
        diskUsage: "Disk usage: approx.",
        unknown: "Unknown",
        calculationFailed: "Calculation failed",
        calculating: "Calculating...",
        warningTitle: "This action will:",
        warningDeleteHistory: "Delete conversation history for all projects (~/.iflow/projects/)",
        warningFreeSpace: "Free up disk space",
        warningAffectsAllProjects: "This operation will affect all projects that have used iFlow",
        confirmOption: "Confirm cleanup of all conversation history (cannot be recovered)",
        cancelOption: "Cancel",
        instructions: "(Press Enter to select, ESC to cancel)",
      },
      terminalSetupCommand: {
        restartRequired: "Please restart your terminal for the changes to take effect.",
        error: "Failed to configure terminal: {{error}}",
      },
      terminalSetup: {
        kittyProtocolEnabled:
          "Your terminal is already configured for an optimal experience with multiline input (Shift+Enter).",
        nativeTerminalMethods: {
          windows: `\u2022 Ctrl+Enter - Primary newline shortcut for Windows
\u2022 Backslash + Enter - Other method: Type backslash '\\' at the end of the line, then press Enter to create a newline`,
          macos: `\u2022 Ctrl+J - Primary newline shortcut for macOS/Linux
\u2022 Backslash + Enter - Other method: Type backslash '\\' at the end of the line, then press Enter to create a newline`,
          linux: `\u2022 Ctrl+J - Primary newline shortcut for Linux/macOS
\u2022 Alt+Enter - Works for certain Linux distributions
\u2022 Backslash + Enter - Other method: Type backslash '\\' at the end of the line, then press Enter to create a newline`,
        },
        unsupportedTerminal: `You are using a system terminal. Shift+Enter keybinding configuration is not supported. 
To use Shift+Enter for newlines, please start iflow in the terminal panel of VS Code/Cursor/Windsurf and run /terminal-setup again. 
If you still want to use the system terminal, you can use the following newline methods:

{{methods}}`,
        configPathError:
          "Could not determine {{terminalName}} config path on Windows: APPDATA environment variable is not set.",
        invalidJsonArray: `{{terminalName}} keybindings.json exists but is not a valid JSON array. Please fix the file manually or delete it to allow automatic configuration.
File: {{filePath}}`,
        parseError: `Failed to parse {{terminalName}} keybindings.json. The file contains invalid JSON.
Please fix the file manually or delete it to allow automatic configuration.
File: {{filePath}}
Error: {{error}}`,
        alreadyEnabled: `Shift+Enter shortcut for newlines is already enabled
To adjust the newline shortcut configuration, please modify manually: {{filePath}}`,
        success: `Added Shift+Enter keybinding to {{terminalName}}.
Modified: {{filePath}}`,
        alreadyConfigured: "{{terminalName}} keybindings already configured.",
        configError: `Failed to configure {{terminalName}}.
File: {{filePath}}
Error: {{error}}`,
        terminalNotSupported: 'Terminal "{{terminal}}" is not supported yet.',
      },
      userQuestionDialog: {
        title: "Please answer the following questions",
        navigateQuestions: "Navigate questions",
        enterCustomAnswer: "Enter your custom answer",
        currentAnswer: "Current answer",
        noAnswer: "Not answered",
        instructions: "Enter to select \xB7 Tab/Arrow keys to navigate \xB7 Esc to cancel",
        multiSelectHint: "Multi-select: Choose multiple options",
        singleSelectHint: "Single-select: Choose one option",
        readyToSubmit: "\u2713 All questions answered, press Ctrl+Enter to submit",
        pressEnterToSubmit: "Press Enter to submit, ESC to cancel",
        typeOptionLabel: "Type something",
        typeOptionDescription: "Provide your own answer",
        submitTab: "Submit",
        reviewTitle: "Review your answers",
        readyToSubmitPrompt: "Ready to submit your answers?",
        submitAnswers: "Submit answers",
        cancel: "Cancel",
        reviewInstructions: "Enter to select \xB7 Tab/Arrow keys to navigate \xB7 Esc to cancel",
        navigationHint: "\u2190 \u2192 to navigate questions",
        submitHint: "\u2192 Press Enter or \u2192 to submit",
      },
      workspaceTrust: {
        title: "Do you trust this workspace?",
        subtitle:
          "Trusting a workspace allows iFlow to execute workspace-configured hooks and other sensitive operations.",
        workspacePath: "Workspace Path:",
        detectedHooks: "Detected the following hooks:",
        moreHooks: "... and {{count}} more hooks",
        warning:
          "\u26A0\uFE0F  Only trust workspaces whose source you understand. Malicious hooks can perform dangerous operations.",
        hint: "Use \u2191\u2193 to select, Enter to confirm, Esc to cancel",
        trustCurrentFolder: "Trust current folder",
        trustCurrentFolderDesc: "Trust this folder and all its subfolders",
        trustParentFolder: "Trust parent folder",
        trustParentFolderDesc: "Trust the parent folder and all its subfolders",
        doNotTrust: "Do not trust",
        doNotTrustDesc: "Disable workspace-level hooks and sensitive features",
        restarting: "Restarting application to apply trust settings...",
        hooksDisabled: "\u26A0\uFE0F  Workspace hooks disabled: workspace is not trusted",
        enableHooksInstruction: "   To enable hooks, trust this workspace in the UI or set IFLOW_TRUST_WORKSPACE=1",
        untrustedWarning: "\u26A0\uFE0F  Warning: Workspace is not trusted, workspace-level hooks are disabled",
        untrustedWorkspacePath: "   Workspace path: {{path}}",
        trustInstructions: "   To enable hooks, trust this workspace in settings",
        checkTrustFailed: "Failed to check workspace trust: {{error}}",
        dangerousHooksWarning: "\u26A0\uFE0F  WARNING: Detected dangerous workspace hooks:",
        dangerousHooksList: "   - {{hook}}",
        autoExecuteWarning: "   These hooks will execute automatically at startup.",
        exitIfUntrusted: "   If you do not trust this project, exit immediately",
        reviewSettings: "   and review .iflow/settings.json",
        checkHooksTrustFailed: "Failed to check workspace hooks trust: {{error}}",
      },
      nonInteractive: {
        clearNotSupported: "/clear command is not supported in non-interactive mode",
        vimRequiresInteractive: "/vim command requires interactive mode",
        loadHistoryNotSupported: "load_history is not supported in non-interactive mode",
        unknownCommand: "Unknown command: {{command}}",
        useHelpOrCommands: "Use /help or /commands to see available commands",
        commandRequiresInteractive: "/{{command}} command requires interactive mode",
        noActionDefined: "Command /{{command}} has no action defined",
        requiresInteractive: "/{{command}} requires interactive mode",
        tryAlternatives: "Try these alternatives: {{alternatives}}",
        dialogNotSupported: "Dialog commands are not supported in non-interactive mode",
        exiting: "Exiting...",
        errorExecutingTool: "Error executing tool {{toolName}}: {{error}}",
        errorExecutingSlashCommand: "Error executing slash command: {{error}}",
        customFunctionNotSupported: "custom_function type is not fully supported in non-interactive mode",
        shellConfirmationNotSupported: "Shell command confirmation is not supported in non-interactive mode",
        commandsRequiringConfirmation: "Commands requiring confirmation: {{commands}}",
        unhandledCommandResultType: "Unhandled command result type: {{type}}",
      },
      systemNotification: {
        appName: '"iFlow CLI" notification',
        taskCompleted: "Task completed",
        taskCompletedWithPrompt: "Task completed: {{prompt}}",
        close: "Close",
      },
      farewellLetterDisplay: {
        title: "Dear iFlow CLI Developers,",
        greeting: "",
        announcement: "We regret to announce the discontinuation of iFlow CLI services in the coding scenario.",
        journey:
          "From our very first release, we have been committed to providing completely free services to individual developers\u2014bringing the benefits of AI to every coder and doing our small part on the road to AGI.",
        growth:
          "This journey has been made all the more vibrant by your brilliant ideas and generous support, which gave this little experimental project a life of its own.",
        shutdownPrefix:
          "To deliver a more unified and premium experience, we will be consolidating our AI coding resources. Consequently, ",
        shutdownBold1: "iFlow CLI will enter its sunset phase: active maintenance will conclude on ",
        shutdownDate1: "March 20, 2026",
        shutdownBold2:
          ", followed by a full decommissioning of the service\u2014including the API and Model Library\u2014on ",
        shutdownDate2: "April 17, 2026",
        shutdownBold3: ".",
        shutdownSuffix:
          " To avoid service disruptions, we encourage all affected developers to plan ahead and migrate projects at your earliest convenience.",
        migrationInvitePrefix: "To help everyone transition smoothly, we ",
        migrationInviteBold: "warmly invite you to migrate to Qoder",
        migrationInviteSuffix:
          ", Alibaba's premier agent-native programming platform, integrating the world's top coding models and available across IDE, CLI, JetBrains plugins, and desktop agents environments.",
        migrationBenefitPrefix: "To facilitate a smooth transition, ",
        migrationBenefitQoder: "Qoder",
        migrationBenefitMid: " is offering a ",
        migrationBenefitBold: "300-Credit Migration Reward",
        migrationBenefitSuffix: " for all iFlow CLI users.",
        migrationClaimBoldLabel: "\u2705 How to Claim: ",
        migrationClaimPre: "Click ",
        migrationClaimLink: "Registration Link",
        migrationClaimPost: " and submit your Qoder-registered email. Credits will be issued within ",
        migrationClaimT2: "T+2",
        migrationClaimSuffix: " business days upon verification.",
        migrationGuide: "Guide: ",
        migrationGuideLink: "View the iFlow CLI \u2192 Qoder CLI Migration Guide",
        agentFuture:
          "Looking ahead, the iFlow Team will be pivoting to focus on Agent-specific scenarios. We believe it won't be long before we meet again in an entirely new form\u2014please stay tuned.",
        communityPrefix: "Additionally, ",
        communityLink: "VibeX",
        communitySuffix:
          " will remain active with a fresh new look. The community you helped grow is here to stay\u2014a space for inspiration, knowledge sharing, and open dialogue as we navigate the AGI era together.",
        closing:
          "Thank you for keeping iFlow CLI in your terminal. We will always cherish the journey we shared on the road to AGI.",
        signatureName: "The iFlow CLI Team",
        signatureDate: "March 20, 2026",
        continueInstructions: "Press Enter or Space to continue \u2192",
      },
      offlineOutput: {
        message:
          "Note: We have stopped supporting the /output-style command. We recommend defining output styles by modifying IFLOW.md for more flexible configuration.",
      },
    };
  });
var lNr,
  mNr = j(() => {
    "use strict";
    lNr = {
      context: {
        remaining: "\u4E0A\u4E0B\u6587\u5269\u4F59 {{percentage}}%",
        contextFile: "\u4E0A\u4E0B\u6587",
        file: "\u6587\u4EF6",
        files: "\u6587\u4EF6",
        mcpServer: "MCP \u670D\u52A1",
        mcpServers: "MCP \u670D\u52A1",
        blocked: "\u5DF2\u963B\u6B62",
        loadedPrefix: "\u5DF2\u52A0\u8F7D\uFF1A",
        ctrlTToggle: "ctrl+t \u5207\u6362",
        ctrlTView: "ctrl+t \u67E5\u770B",
      },
      gifIntro: {
        slogan: "\u7528 AI \u91CD\u5851\u7814\u53D1\u8303\u5F0F",
        skipAnimation: "\u6309 Enter \u8DF3\u8FC7\u52A8\u753B",
      },
      about: {
        title: "\u5173\u4E8E iFlow CLI",
        cliVersion: "CLI \u7248\u672C",
        gitCommit: "Git \u63D0\u4EA4",
        model: "\u6A21\u578B",
        sandbox: "\u6C99\u76D2",
        os: "\u64CD\u4F5C\u7CFB\u7EDF",
        authMethod: "\u8BA4\u8BC1\u65B9\u5F0F",
        serviceAgreement: "\u670D\u52A1\u534F\u8BAE",
        viewTermsOfService: "\u67E5\u770B\u670D\u52A1\u6761\u6B3E",
        gcpProject: "GCP \u9879\u76EE",
      },
      tips: {
        versionNo: "\u7248\u672C\u53F7: ",
        joinCommunity:
          "\u{1F44B} \u70B9\u51FB <join /> \u52A0\u5165 iFlow \u5F00\u53D1\u8005\u8BBA\u575B\uFF0C\u6210\u4E3A iFlow Builder\uFF0C\u4EA4\u6D41\u7ECF\u9A8C\u548C\u53CD\u9988\u5EFA\u8BAE\uFF01",
        joinCommunityBrief: "\u52A0\u5165 iFlow \u5F00\u53D1\u8005\u8BBA\u575B ",
        joinCommunityLinkPlaceholder: "\u8FD9\u91CC",
        header: "\u5165\u95E8\u63D0\u793A",
        basicUsage: "1. \u63D0\u95EE\u3001\u7F16\u8F91\u6587\u4EF6\u6216\u8FD0\u884C\u547D\u4EE4\u3002",
        bestPractices: "2. \u5177\u4F53\u63CF\u8FF0\u53EF\u83B7\u5F97\u66F4\u597D\u7684\u7ED3\u679C\u3002",
        fileConfiguration:
          "1. \u901A\u8FC7 <command/> \u547D\u4EE4\u521B\u5EFA <fileName/> \u6587\u4EF6\uFF0C\u7136\u540E\u81EA\u5B9A\u4E49\u4E0E iFlow \u7684\u4EA4\u4E92\u3002",
        helpCommand: "\u8F93\u5165 <command/> \u83B7\u53D6\u66F4\u591A\u4FE1\u606F\u3002",
        helpCommandShortcuts:
          "iFlow\xB7Help - <command/> \u83B7\u53D6\u5FEB\u6377\u952E\u3001\u547D\u4EE4\u3001\u4F7F\u7528\u6280\u5DE7 <shortcuts/>",
        smartMode:
          "\u9ED8\u8BA4\u542F\u7528 <mode/> \u6A21\u5F0F\uFF0C\u4F7F\u7528 <keyCombination/> \u5207\u6362\u6A21\u5F0F\u3002",
        thinkMode: "\u4F7F\u7528 <keyCombination/> \u5207\u6362 think \u6A21\u5F0F\u3002",
        documentation:
          "\u8F93\u5165 <commandDocs/> \u67E5\u770B\u6587\u6863\uFF0C\u8F93\u5165 <commandDemo/> \u8FDB\u884C\u5FEB\u901F\u6F14\u793A\u3002",
        randomLabel: "\u5C0F\u8D34\u58EB",
        fileInclusion: "\u4F7F\u7528 @ \u5C06\u6587\u4EF6\u5185\u5BB9\u5305\u542B\u5728\u63D0\u793A\u4E2D",
        shellExecution: "\u4F7F\u7528 ! \u76F4\u63A5\u6267\u884C shell \u547D\u4EE4",
        chatHistory: "\u4F7F\u7528 /chat \u4FDD\u5B58\u548C\u6062\u590D\u5BF9\u8BDD\u72B6\u6001",
        clearScreen: "\u968F\u65F6\u4F7F\u7528 Ctrl+L \u6E05\u5C4F",
        contextCompression: "\u4F7F\u7528 /compress \u901A\u8FC7\u603B\u7ED3\u4E0A\u4E0B\u6587\u6765\u8282\u7701 token",
        toolsOverview: "\u4F7F\u7528 /tools \u67E5\u770B\u53EF\u7528\u5DE5\u5177",
        fileRestore: "\u4F7F\u7528 /restore \u64A4\u9500\u6587\u4EF6\u66F4\u6539",
        sessionStats: "\u4F7F\u7528 /stats \u68C0\u67E5\u4F1A\u8BDD\u7EDF\u8BA1",
        shellToggle: "\u4F7F\u7528 ! \u5207\u6362 shell \u6A21\u5F0F",
        memoryManagement: "\u4F7F\u7528 /memory \u7BA1\u7406 AI \u8BB0\u5FC6",
        themeCustomization: "\u4F7F\u7528 /theme \u81EA\u5B9A\u4E49\u5916\u89C2",
        mcpServers: "\u4F7F\u7528 /mcp \u7BA1\u7406\u5916\u90E8\u5DE5\u5177\u670D\u52A1\u5668",
        checkpointDisabledDueToGit:
          "\u68C0\u67E5\u70B9\u529F\u80FD\u6682\u4E0D\u53EF\u7528\uFF0C\u5982\u9700\u542F\u7528\u8BF7\u5148\u5B89\u88C5Git",
        fileDragDrop:
          "\u5C06\u6587\u4EF6\u62D6\u62FD\u5230\u7EC8\u7AEF\u540E\u4F7F\u7528 Ctrl+V \u7C98\u8D34\uFF0C\u6216\u76F4\u63A5\u590D\u5236\u6587\u4EF6\u8DEF\u5F84\u5230\u526A\u8D34\u677F",
        filePathPaste:
          "\u652F\u6301\u7C98\u8D34\u6587\u4EF6\u8DEF\u5F84\uFF0C\u56FE\u7247\u6587\u4EF6\u4F1A\u81EA\u52A8\u5904\u7406\u4E3A\u53EF\u5F15\u7528\u7684\u683C\u5F0F",
        pasteImage: "\u4F7F\u7528 <keyCombination /> \u7C98\u8D34\u56FE\u7247\uFF08\u975E cmd+v\uFF09\u3002",
        pasteImageLinuxWindows: "\u4F7F\u7528 <keyCombination /> \u7C98\u8D34\u56FE\u7247\u3002",
        linuxNewline: "\u4F7F\u7528 <keyCombination /> \u6362\u884C\u3002",
      },
      command: {
        about: "\u663E\u793A\u7248\u672C\u4FE1\u606F",
        agents: "\u4EE3\u7406\u4EA4\u4E92\u547D\u4EE4",
        annualReport: "\u67E5\u770B 2025 \u5E74\u5EA6\u603B\u7ED3",
        auth: "\u66F4\u6539\u8BA4\u8BC1\u65B9\u5F0F",
        bug: "\u63D0\u4EA4\u9519\u8BEF\u62A5\u544A",
        chat: "\u7BA1\u7406\u5BF9\u8BDD\u5386\u53F2",
        clear: "\u6E05\u9664\u5C4F\u5E55\u548C\u5BF9\u8BDD\u5386\u53F2",
        cleanupCheckpoint:
          "\u6E05\u7406\u6240\u6709\u68C0\u67E5\u70B9\u5386\u53F2\uFF0C\u91CA\u653E\u78C1\u76D8\u7A7A\u95F4",
        cleanupHistory:
          "\u6E05\u7406\u5F53\u524D\u9879\u76EE\u7684\u5BF9\u8BDD\u5386\u53F2\uFF0C\u91CA\u653E\u78C1\u76D8\u7A7A\u95F4",
        commands:
          "\u7BA1\u7406\u5E02\u573A\u547D\u4EE4\uFF1A\u5217\u51FA\u672C\u5730\u547D\u4EE4\u3001\u6D4F\u89C8\u5728\u7EBF\u547D\u4EE4\u3001\u83B7\u53D6\u8BE6\u7EC6\u4FE1\u606F\u3001\u6DFB\u52A0/\u79FB\u9664 CLI \u547D\u4EE4\uFF08\u9879\u76EE/\u5168\u5C40\u8303\u56F4\uFF09",
        compress:
          "\u901A\u8FC7\u6458\u8981\u66FF\u6362\u6765\u538B\u7F29\u4E0A\u4E0B\u6587\uFF08\u522B\u540D\uFF1A/compact\u3001/summarize\uFF09",
        copy: "\u5C06\u6700\u540E\u7684\u7ED3\u679C\u6216\u4EE3\u7801\u7247\u6BB5\u590D\u5236\u5230\u526A\u8D34\u677F",
        demo: "\u7528\u4E8E\u7814\u7A76\u548C\u5934\u8111\u98CE\u66B4\u5DE5\u4F5C\u6D41\u7684\u4EA4\u4E92\u5F0F\u4EFB\u52A1",
        directory: "\u7BA1\u7406\u5DE5\u4F5C\u7A7A\u95F4\u76EE\u5F55",
        docs: "\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u5B8C\u6574\u7684 iFlow CLI \u6587\u6863",
        editor: "\u8BBE\u7F6E\u5916\u90E8\u7F16\u8F91\u5668\u504F\u597D",
        export: "\u5BFC\u51FA\u5BF9\u8BDD\u5386\u53F2",
        extensions: "\u5217\u51FA\u6FC0\u6D3B\u7684\u6269\u5C55",
        help: "iFlow CLI \u5E2E\u52A9\u4FE1\u606F",
        ide: "\u7BA1\u7406 IDE \u8FDE\u63A5",
        init: "\u5206\u6790\u9879\u76EE\u5E76\u521B\u5EFA\u6216\u66F4\u65B0\u5B9A\u5236\u7684 IFLOW.md \u6587\u4EF6",
        language: "\u66F4\u6539 iFlow CLI \u8BED\u8A00",
        log: "\u663E\u793A\u5F53\u524D\u4F1A\u8BDD\u65E5\u5FD7\u5B58\u50A8\u4F4D\u7F6E",
        mcp: "\u5217\u51FA\u5DF2\u914D\u7F6E\u7684 MCP \u670D\u52A1\u5668\u548C\u5DE5\u5177\uFF0C\u6D4F\u89C8\u5728\u7EBF\u4ED3\u5E93\uFF0C\u6216\u4F7F\u7528\u652F\u6301 OAuth \u7684\u670D\u52A1\u5668\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1",
        memory: "\u8BB0\u5FC6\u4EA4\u4E92\u547D\u4EE4",
        model: "\u5207\u6362\u6A21\u578B",
        skills: "\u5217\u51FA\u5DF2\u914D\u7F6E\u7684\u6280\u80FD\u5E76\u7BA1\u7406\u6280\u80FD\u6CE8\u518C\u8868",
        quit: "\u9000\u51FA CLI",
        resume: "\u4ECE\u5386\u53F2\u8BB0\u5F55\u4E2D\u6062\u590D\u4E4B\u524D\u7684\u4F1A\u8BDD\u5386\u53F2",
        setupGithub: "\u8BBE\u7F6E GitHub Actions",
        stats: "\u68C0\u67E5\u4F1A\u8BDD\u7EDF\u8BA1\u3002\u7528\u6CD5\uFF1A/stats [model|tools]",
        theme: "\u66F4\u6539\u4E3B\u9898",
        terminalSetup:
          "\u5B89\u88C5 Shift+Enter \u5FEB\u6377\u952E\u4EE5\u652F\u6301\u5728\u8F93\u5165\u6846\u4E2D\u6362\u884C",
        tools: "\u5217\u51FA\u53EF\u7528\u7684 iFlow CLI \u5DE5\u5177",
        update: "\u66F4\u65B0\u7248\u672C",
        vim: "\u5F00\u542F/\u5173\u95ED vim \u6A21\u5F0F",
        hooks: "\u7BA1\u7406 Hook \u914D\u7F6E\u548C\u8BBE\u7F6E",
        qa: "\u57FA\u4E8E\u77E5\u8BC6\u5E93\u68C0\u7D22\u7684\u667A\u80FD\u95EE\u7B54",
      },
      hooks: {
        configurationErrors: "Hook\u914D\u7F6E\u9A8C\u8BC1\u9519\u8BEF\uFF1A",
        configLoadFailed: "\u521D\u59CB\u5316Hook\u7BA1\u7406\u5668\u5931\u8D25\uFF1A",
        configReloadFailed: "\u91CD\u65B0\u52A0\u8F7DHook\u914D\u7F6E\u5931\u8D25\uFF1A",
        hookExecutionFailed: "Hook\u6267\u884C\u5931\u8D25\uFF1A",
        invalidJsonConfig: "Hook\u914D\u7F6E\u4E2D\u7684JSON\u65E0\u6548\uFF1A",
        promptBlocked: "\u63D0\u793A\u88ABHook\u963B\u6B62",
        promptBlockedReason: "\u63D0\u793A\u88ABHook\u963B\u6B62\uFF1A{{reason}}",
        notificationHookMessage: "\u901A\u77E5Hook\u6D88\u606F\uFF1A",
        eventTypes: {
          preToolUse: "\u5DE5\u5177\u6267\u884C\u524D",
          postToolUse: "\u5DE5\u5177\u6267\u884C\u540E",
          stop: "\u4F1A\u8BDD\u505C\u6B62",
          subagentStop: "\u5B50\u4EE3\u7406\u505C\u6B62",
          setUpEnvironment: "\u73AF\u5883\u8BBE\u7F6E",
          sessionStart: "\u4F1A\u8BDD\u5F00\u59CB",
          sessionEnd: "\u4F1A\u8BDD\u7ED3\u675F",
          userPromptSubmit: "\u7528\u6237\u63D0\u793A\u63D0\u4EA4",
          notification: "\u901A\u77E5\u663E\u793A",
        },
        validation: {
          hooksRequired: "'hooks' \u5B57\u6BB5\u662F\u5FC5\u9700\u7684\uFF0C\u4E14\u5FC5\u987B\u662F\u6570\u7EC4",
          matcherMustBeString: "'matcher' \u5FC5\u987B\u662F\u5B57\u7B26\u4E32",
          matcherNotSupported: "{{eventType}} hooks\u4E0D\u652F\u6301 'matcher' \u5B57\u6BB5",
          commandTypeOnly: "\u76EE\u524D\u4EC5\u652F\u6301 'command' \u7C7B\u578B",
          commandRequired:
            "'command' \u5B57\u6BB5\u662F\u5FC5\u9700\u7684\uFF0C\u4E14\u5FC5\u987B\u662F\u5B57\u7B26\u4E32",
          timeoutInvalid: "'timeout' \u5FC5\u987B\u662F\u6B63\u6570",
        },
      },
      input: {
        placeholder: "  \u8F93\u5165\u6D88\u606F\u6216@\u6587\u4EF6\u8DEF\u5F84",
        vimPlaceholder:
          "  \u6309 'i' \u8FDB\u5165\u63D2\u5165\u6A21\u5F0F\uFF0C\u6309 'Esc' \u8FDB\u5165\u666E\u901A\u6A21\u5F0F\u3002",
        ideConnected: "\u5DF2\u8FDE\u63A5",
        ideConnecting: "\u8FDE\u63A5\u4E2D...",
        ideDisconnected: "\u5DF2\u65AD\u5F00",
        line: "\u884C",
        lines: "\u884C",
        selected: "\u5DF2\u9009\u62E9",
        debugLabel: "--\u8C03\u8BD5",
        macOsSeatbelt: "macOS \u6C99\u76D2",
        acceptingEdits: "\u81EA\u52A8\u63A5\u53D7\u7F16\u8F91",
        planMode: "\u8BA1\u5212\u6A21\u5F0F",
        yoloMode: "YOLO\u6A21\u5F0F",
        smartMode: "\u667A\u80FD\u6A21\u5F0F",
        defaultMode: "\u9ED8\u8BA4\u6A21\u5F0F",
        toggleHint: " (shift + tab / alt + m \u5207\u6362)",
        thinkingMode: "\u601D\u8003",
        thinkingOn: "\u5F00\u542F",
        thinkingOff: "\u5173\u95ED",
        thinkingToggleHint: " (tab\u5207\u6362)",
        thinkingNotSupported: "\u4E0D\u652F\u6301",
        shellModeEnabled: "shell \u6A21\u5F0F\u5DF2\u542F\u7528",
        shellModeDisableHint: " (esc \u7981\u7528)",
        toggleDetail: "\u8F7B\u6309 Ctrl+R \u56DE\u5230\u4EA4\u4E92\u6A21\u5F0F...",
        esc: "\u8F7B\u6309 Esc \u6216 q \u8FD4\u56DE",
        welcomeMessage: "Hi\uFF5E\u4ECA\u5929\u60F3\u505A\u70B9\u4EC0\u4E48\uFF1F",
        accelerateCardWelcome:
          "Hi iFlower Core, \u5F15\u64CE\u5DF2\u5C31\u7EEA\uFF0C\u6B63\u5728\u5168\u529B\u52A0\u901F\u4E2D\u3002",
      },
      inputPrompt: {
        imageDescriptionInProgress:
          "\u56FE\u7247\u63CF\u8FF0\u751F\u6210\u4E2D... (\u8F83\u5927\u56FE\u7247\u9700\u8981\u66F4\u957F\u65F6\u95F4)",
        agentsOnlineModeNavigation:
          "  \u4EE3\u7406\u5728\u7EBF\u6A21\u5F0F - \u4F7F\u7528 j/k/h/l/Enter/q \u5BFC\u822A",
        imageNotFound: "\u672A\u4ECE\u526A\u5207\u677F\u4E2D\u627E\u5230\u56FE\u7247",
      },
      modelValidationDialog: {
        title: "\u6A21\u578B\u9A8C\u8BC1\u5FC5\u9700",
        modelNotSupported: "\u4E0D\u652F\u6301\u6A21\u578B '{{model}}'\u3002",
        reason: "\u539F\u56E0\uFF1A{{reason}}",
        task: "\u4EFB\u52A1\uFF1A{{task}}",
        selectModel: "\u8BF7\u9009\u62E9\u652F\u6301\u7684\u6A21\u578B\u4EE5\u7EE7\u7EED\uFF1A",
        suggested: "\u5EFA\u8BAE\uFF1A{{model}}",
        enterToSelect: "\u6309 Enter \u9009\u62E9\uFF0CEsc \u53D6\u6D88",
        preference: "\u6A21\u578B\u504F\u597D",
        youSelected: "\u60A8\u9009\u62E9\u4E86",
        futureChoice:
          "\u5C06\u6765\u5F53 '{{requestedModel}}' \u4E0D\u53D7\u652F\u6301\u65F6\uFF0C\u60A8\u662F\u5426\u5E0C\u671B\u59CB\u7EC8\u4F7F\u7528 '{{selectedModel}}'\uFF1F",
        enterToSelectEscToGoBack: "\u6309 Enter \u9009\u62E9\uFF0CEsc \u8FD4\u56DE",
        askEachTime: "\u4E0D\uFF0C\u6BCF\u6B21\u90FD\u8BE2\u95EE\u6211",
        rememberSession: "\u662F\uFF0C\u8BB0\u4F4F\u672C\u6B21\u4F1A\u8BDD",
        rememberAlways: "\u662F\uFF0C\u6C38\u8FDC\u8BB0\u4F4F",
      },
      shellConfirmationDialog: {
        title: "Shell \u547D\u4EE4\u6267\u884C",
        description: "\u81EA\u5B9A\u4E49\u547D\u4EE4\u60F3\u8981\u8FD0\u884C\u4EE5\u4E0B shell \u547D\u4EE4\uFF1A",
        proceed: "\u60A8\u60F3\u8981\u7EE7\u7EED\u5417\uFF1F",
        allowOnce: "\u662F\uFF0C\u5141\u8BB8\u4E00\u6B21",
        allowAlwaysSession: "\u662F\uFF0C\u672C\u6B21\u4F1A\u8BDD\u4E2D\u59CB\u7EC8\u5141\u8BB8",
        noEsc: "\u4E0D (esc)",
      },
      mcpOnlineDialog: {
        loadingTitle: "\u6B63\u5728\u52A0\u8F7D MCP \u670D\u52A1\u5668...",
        loadingMessage: "\u8BF7\u7A0D\u5019\uFF0C\u6B63\u5728\u83B7\u53D6\u53EF\u7528\u670D\u52A1\u5668...",
        availableServers: "\u53EF\u7528\u7684 MCP \u670D\u52A1\u5668",
        availableServersWithCount: "\u53EF\u7528\u7684 MCP \u670D\u52A1\u5668\uFF08\u5171 {{count}} \u4E2A\uFF09",
        noServersAvailable: "\u6CA1\u6709\u53EF\u7528\u7684\u670D\u52A1\u5668",
        noServersFound: "\u5728\u7EBF\u4ED3\u5E93\u4E2D\u672A\u627E\u5230 MCP \u670D\u52A1\u5668\u3002",
        pageInfo: "\u7B2C {{current}} \u9875\uFF0C\u5171 {{total}} \u9875",
        toolsAndVisits: "\u5DE5\u5177\uFF1A{{tools}} | \u8BBF\u95EE\uFF1A{{visits}}",
        details: "\u8BE6\u7EC6\u4FE1\u606F\uFF1A",
        version: "\u7248\u672C\uFF1A{{version}}",
        protocol: "\u534F\u8BAE\uFF1A{{protocol}}",
        transports: "\u4F20\u8F93\u65B9\u5F0F\uFF1A{{transports}}",
        authTypes: "\u8BA4\u8BC1\u7C7B\u578B\uFF1A{{types}}",
        visits: "\u8BBF\u95EE\u6B21\u6570\uFF1A{{count}}",
        availableTools: "\u53EF\u7528\u5DE5\u5177\uFF08{{count}} \u4E2A\uFF09\uFF1A",
        navigation: "\u5BFC\u822A\uFF1A",
        navigateUpDown: "\u2191/\u2193 \u6216 j/k - \u4E0A\u4E0B\u5BFC\u822A",
        prevNextPage: "\u2190/\u2192 \u6216 h/l - \u4E0A\u4E00\u9875/\u4E0B\u4E00\u9875",
        viewDetails: "Enter - \u67E5\u770B\u8BE6\u60C5",
        exit: "q - \u9000\u51FA",
        actions: "\u64CD\u4F5C\uFF1A",
        installForProject: "1 - \u4E3A\u9879\u76EE\u5B89\u88C5",
        installForUser: "2 - \u4E3A\u7528\u6237\u5B89\u88C5",
        backToList: "b - \u8FD4\u56DE\u5217\u8868",
        installing: "\u6B63\u5728\u5B89\u88C5 {{name}}...",
        installingWithConfig: "\u6B63\u5728\u4F7F\u7528\u914D\u7F6E\u5B89\u88C5 {{name}}...",
        loadingServerAndTools: "\u6B63\u5728\u52A0\u8F7D MCP \u670D\u52A1\u5668 '{{name}}'...",
        toolsLoadedMessage: "{{count}} \u4E2A\u5DE5\u5177\u5DF2\u52A0\u8F7D\u5E76\u51C6\u5907\u5C31\u7EEA",
        serverLoadedSuccess:
          "\u2714 MCP \u670D\u52A1\u5668 '{{name}}' \u6210\u529F\u52A0\u8F7D\uFF0C\u5305\u542B {{count}} \u4E2A\u5DE5\u5177",
        serverInstalledToolsFailed:
          "\u26A0\uFE0F MCP \u670D\u52A1\u5668 '{{name}}' \u5DF2\u5B89\u88C5\u4F46\u52A0\u8F7D\u5DE5\u5177\u5931\u8D25\uFF1A{{error}}",
        installSuccess: "\u6210\u529F\u4E3A {{scope}} \u5B89\u88C5 {{name}}\uFF08{{path}}\uFF09{{toolsMessage}}",
        installFailed: "\u5B89\u88C5 {{name}} \u5931\u8D25\uFF1A{{error}}",
        installationFailed: "\u5B89\u88C5\u5931\u8D25",
        pleaseAuthenticate: "\u8BF7\u5148\u8FD0\u884C\u8BA4\u8BC1\u547D\u4EE4\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1",
        unableToLoadServers: "\u65E0\u6CD5\u52A0\u8F7D MCP \u670D\u52A1\u5668\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        authenticationFailed:
          "\u8BA4\u8BC1\u5931\u8D25\u3002\u8BF7\u68C0\u67E5\u60A8\u7684 API \u5BC6\u94A5\u6216\u91CD\u65B0\u8BA4\u8BC1",
        accessDenied: "\u8BBF\u95EE\u88AB\u62D2\u7EDD\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u6743\u9650",
        serviceNotFound: "\u672A\u627E\u5230 MCP \u670D\u52A1\u5668\u670D\u52A1\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        serverError: "\u670D\u52A1\u5668\u9519\u8BEF\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        connectionError:
          "\u65E0\u6CD5\u52A0\u8F7D MCP \u670D\u52A1\u5668\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u8FDE\u63A5\u540E\u91CD\u8BD5",
        networkError: "\u7F51\u7EDC\u9519\u8BEF\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5",
        failedToLoadServers: "\u52A0\u8F7D\u670D\u52A1\u5668\u5931\u8D25",
      },
      mcpAoneDialog: {
        title: "\u963F\u91CC MCP \u5E02\u573A",
        description:
          "\u8BBF\u95EE\u963F\u91CC MCP \u5E02\u573A\uFF0C\u6D4F\u89C8\u548C\u63A2\u7D22 MCP \u670D\u52A1\u5668\u548C\u5DE5\u5177\u3002",
        loading: "\u6B63\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u963F\u91CC MCP \u5E02\u573A...",
        sandboxRedirect: "\u8BF7\u8BBF\u95EE\uFF1A{{url}}",
        openingBrowser: "\u6B63\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00 {{url}}...",
        redirectSuccess: "\u6210\u529F\u8DF3\u8F6C\u5230\u963F\u91CC MCP \u5E02\u573A",
        redirectError: "\u6253\u5F00\u6D4F\u89C8\u5668\u5931\u8D25\uFF1A{{error}}",
        actions: "\u64CD\u4F5C\uFF1A",
        pressEnterToOpen: "Enter \u6216 o - \u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00",
        pressEscToExit: "ESC \u6216 q - \u9000\u51FA",
      },
      toolStatsDisplay: {
        title: "\u5DE5\u5177\u7EDF\u8BA1\uFF08\u6280\u672F\u4EBA\u5458\u4E13\u7528\uFF09",
        noToolCalls: "\u672C\u6B21\u4F1A\u8BDD\u4E2D\u672A\u8FDB\u884C\u5DE5\u5177\u8C03\u7528\u3002",
        toolName: "\u5DE5\u5177\u540D\u79F0",
        calls: "\u8C03\u7528\u6B21\u6570",
        successRate: "\u6210\u529F\u7387",
        avgDuration: "\u5E73\u5747\u8017\u65F6",
        userDecisionSummary: "\u7528\u6237\u51B3\u7B56\u6458\u8981",
        totalReviewedSuggestions: "\u5DF2\u5BA1\u67E5\u5EFA\u8BAE\u603B\u6570\uFF1A",
        accepted: "\u5DF2\u63A5\u53D7\uFF1A",
        rejected: "\u5DF2\u62D2\u7EDD\uFF1A",
        modified: "\u5DF2\u4FEE\u6539\uFF1A",
        overallAgreementRate: "\u603B\u4F53\u8BA4\u53EF\u7387\uFF1A",
      },
      initCommand: {
        configNotAvailable: "\u914D\u7F6E\u4E0D\u53EF\u7528\u3002",
        existingFileFound:
          "{{contextFileName}} \u5DF2\u5B58\u5728\u3002\u6B63\u5728\u8BFB\u53D6\u5F53\u524D\u5185\u5BB9\u5E76\u5206\u6790\u9879\u76EE\u4EE5\u8FDB\u884C\u4F18\u5316\u3002",
        readFileError: "\u8BFB\u53D6\u73B0\u6709 {{contextFileName}} \u6587\u4EF6\u5931\u8D25\uFF1A{{error}}",
        emptyFileCreated:
          "\u5DF2\u521B\u5EFA\u7A7A\u7684 {{contextFileName}}\u3002\u73B0\u5728\u6B63\u5728\u5206\u6790\u9879\u76EE\u4EE5\u586B\u5145\u5185\u5BB9\u3002",
      },
      qaCommand: {
        noQuestion: "\u8BF7\u63D0\u4F9B\u4E00\u4E2A\u95EE\u9898\u3002\u7528\u6CD5\uFF1A/qa <\u4F60\u7684\u95EE\u9898>",
        noConfig: "\u914D\u7F6E\u4E0D\u53EF\u7528\u3002\u8BF7\u91CD\u542F\u5E94\u7528\u7A0B\u5E8F\u3002",
        iflowOnlyFeature:
          "/qa \u547D\u4EE4\u4EC5\u9762\u5411 iFlow \u767B\u5F55\u7528\u6237\u63D0\u4F9B\u3002\u8BF7\u4F7F\u7528 iFlow \u767B\u5F55\u4EE5\u4F7F\u7528\u6B64\u529F\u80FD\u3002",
        noApiKey:
          "\u672A\u627E\u5230 API \u5BC6\u94A5\u3002\u8BF7\u914D\u7F6E\u60A8\u7684 iFlow API \u5BC6\u94A5\u3002",
        retrievingNotification: "\u6B63\u5728\u68C0\u7D22\u6587\u6863\u4E2D...",
        retrieving: "\u6B63\u5728\u4ECE\u77E5\u8BC6\u5E93\u68C0\u7D22\u76F8\u5173\u4FE1\u606F...",
        retrievalFailed: "\u68C0\u7D22\u5931\u8D25\uFF1A{{error}}",
        retrievalSuccess: "\u6210\u529F\u68C0\u7D22\u5230 {{count}} \u6761\u76F8\u5173\u6587\u6863",
        noResults: "\u672A\u627E\u5230\u76F8\u5173\u6587\u6863",
        unexpectedError: "\u53D1\u751F\u610F\u5916\u9519\u8BEF\uFF1A{{error}}",
      },
      loading: {
        waitingForConfirmation: "\u7B49\u5F85\u7528\u6237\u786E\u8BA4...",
        cancelHint: "\u6309esc\u53D6\u6D88",
        generating: "\u751F\u6210\u4E2D",
        phrases: [
          "\u4EE3\u7801\u541B\u6B63\u5728\u601D\u8003\u4EBA\u751F...",
          "\u8BA9\u6211\u53D8\u4E2A\u9B54\u672F\uFF0C\u9A6C\u4E0A\u5C31\u597D...",
          "\u6570\u636E\u5728\u4E91\u7AEF\u6563\u6B65\uFF0C\u7A0D\u7B49\u7247\u523B...",
          "\u522B\u6025\uFF0C\u6211\u4EEC\u5728\u7814\u7A76\u91CF\u5B50\u529B\u5B66...",
          "\u670D\u52A1\u5668\u5C0F\u61A9\u4E00\u4F1A\u513F\uFF0C\u9A6C\u4E0A\u56DE\u6765...",
          "\u6570\u636E\u5E93\u5728\u5F00\u4F1A\uFF0C\u8BF7\u7A0D\u5019...",
          "\u6211\u4EEC\u7684\u4EBA\u5DE5\u667A\u80FD\u5728\u51A5\u60F3\u4E2D...",
          "\u7CFB\u7EDF\u6B63\u5728\u559D\u676F\u5496\u5561\u63D0\u795E...",
          "\u4EE3\u7801\u5728\u8DD1\u6B65\uFF0C\u5F88\u5FEB\u5C31\u5230\u7EC8\u70B9...",
          "\u7B49\u4E00\u4E0B\uFF0C\u6211\u5728\u4F18\u5316\u7CFB\u7EDF\u6027\u80FD...",
          "\u7B97\u6CD5\u541B\u5728\u601D\u8003\u5B87\u5B99\u7684\u5965\u79D8...",
          "\u670D\u52A1\u5668\u5728\u5145\u7535\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85...",
          "\u6211\u4EEC\u5728\u5B87\u5B99\u6DF1\u5904\u5BFB\u627E\u7B54\u6848...",
          "\u7F51\u7EDC\u4FE1\u53F7\u53BB\u63A2\u9669\u4E86\uFF0C\u9A6C\u4E0A\u56DE\u6765...",
          "\u7CFB\u7EDF\u5728\u6253\u592A\u6781\uFF0C\u8BB2\u7A76\u4E00\u4E2A\u4EE5\u67D4\u514B\u521A...",
          "\u4EE3\u7801\u5728\u505A\u4FEF\u5367\u6491\uFF0C\u9A6C\u4E0A\u53D8\u5F3A...",
          "\u6211\u4EEC\u5728\u548C\u4EBA\u5DE5\u667A\u80FD\u4E0B\u4E94\u5B50\u68CB...",
          "\u6570\u636E\u5E93\u5728\u6574\u7406\u623F\u95F4\uFF0C\u8BF7\u7A0D\u7B49...",
          "\u522B\u7740\u6025\uFF0C\u6211\u4EEC\u5728\u5077\u5077\u5B66\u4E60\u4E2D\u6587...",
          "\u7CFB\u7EDF\u5728\u559D\u7897\u70ED\u6C64\uFF0C\u6696\u6696\u8EAB\u5B50...",
          "\u7B97\u6CD5\u5728\u8DF3\u5E7F\u573A\u821E\uFF0C\u8BF7\u6B23\u8D4F...",
          "\u6211\u4EEC\u5728\u5C1D\u8BD5\u7528\u7B77\u5B50\u5403\u4EE3\u7801...",
          "\u670D\u52A1\u5668\u5728\u6253\u76F9\uFF0C\u8F7B\u58F0\u70B9...",
          "\u6570\u636E\u5728\u6392\u961F\u4E70\u5976\u8336\uFF0C\u8BF7\u7A0D\u7B49...",
          "\u6211\u4EEC\u5728\u6559\u673A\u5668\u4EBA\u5199\u6BDB\u7B14\u5B57...",
          "\u7CFB\u7EDF\u5728\u8BFB\u300A\u8BBA\u8BED\u300B\uFF0C\u5B66\u4E60\u4E2D...",
          "\u4EE3\u7801\u5728\u7EC3\u592A\u6781\u62F3\uFF0C\u8BF7\u52FF\u6253\u6270...",
          "\u4EBA\u5DE5\u667A\u80FD\u5728\u5B66\u4E60\u5F39\u53E4\u7B5D...",
          "\u670D\u52A1\u5668\u5728\u5E76\u884C\u5904\u7406\u4E2D...",
          "\u6211\u4EEC\u5728\u548C\u4E91\u6735\u6BD4\u8D5B\u8C01\u8DD1\u5F97\u5FEB...",
          "\u7B97\u6CD5\u5728\u716E\u65B9\u4FBF\u9762\uFF0C\u4E09\u5206\u949F\u5C31\u597D...",
          "\u6570\u636E\u5E93\u5728\u770B\u300A\u897F\u6E38\u8BB0\u300B\uFF0C\u5165\u8FF7\u4E86...",
          "\u6211\u4EEC\u5728\u6559AI\u5531\u4EAC\u5267\uFF0C\u8FD8\u9700\u8C03\u6559...",
          "\u7CFB\u7EDF\u5728\u7EC3\u4E66\u6CD5\uFF0C\u4E00\u7B14\u4E00\u753B\u5F88\u8BA4\u771F...",
          "\u4EE3\u7801\u5728\u722C\u957F\u57CE\uFF0C\u9A6C\u4E0A\u5C31\u5230\u9876\u4E86...",
          "\u4EBA\u5DE5\u667A\u80FD\u5728\u5B66\u5305\u997A\u5B50\uFF0C\u624B\u6CD5\u751F\u758F...",
          "\u670D\u52A1\u5668\u5728\u6253\u5750\u51A5\u60F3\uFF0C\u8BF7\u4FDD\u6301\u5B89\u9759...",
          "\u6211\u4EEC\u5728\u548C\u9632\u706B\u5899\u4E0B\u8C61\u68CB...",
          "\u7B97\u6CD5\u5728\u770B\u300A\u4E09\u4F53\u300B\uFF0C\u6DF1\u53D7\u542F\u53D1...",
          "\u6570\u636E\u5728\u4E91\u7AEF\u8DF3\u5E7F\u573A\u821E\uFF0C\u8BF7\u6B23\u8D4F...",
          "\u6211\u4EEC\u5728\u6559\u673A\u5668\u4EBA\u4F7F\u7528\u7B77\u5B50...",
          "\u7CFB\u7EDF\u5728\u7EC3\u4E60\u592A\u6781\uFF0C\u8BB2\u7A76\u4E00\u4E2A\u5185\u5916\u517C\u4FEE...",
          "\u4EE3\u7801\u5728\u559D\u9F99\u4E95\u8336\uFF0C\u54C1\u5473\u751F\u6D3B...",
          "\u4EBA\u5DE5\u667A\u80FD\u5728\u5B66\u4E60\u5199\u8BD7\u8BCD\uFF0C\u8BF7\u6307\u6559...",
          "\u6162\u5DE5\u51FA\u7EC6\u6D3B\uFF0C\u6211\u4EEC\u5728\u7CBE\u5FC3\u5904\u7406\u4E2D...",
          "\u5C0F\u54E5\u6B63\u5728\u98DE\u5954\u9001\u6570\u636E\uFF0C\u5FEB\u9A6C\u52A0\u97AD\u4E2D...",
          "\u6570\u636E\u5E93\u5728\u4F18\u5316\u91CD\u7EC4\u4E2D...",
          "\u524D\u65B9\u7F51\u7EDC\u62E5\u5835\uFF0C\u7CFB\u7EDF\u6B63\u5728\u7ED5\u9053\u524D\u884C...",
          "\u7CFB\u7EDF\u5728\u7814\u7A76\u300A\u5B59\u5B50\u5175\u6CD5\u300B\uFF0C\u4E3A\u60A8\u8C0B\u5212\u6700\u4F73\u7B56\u7565...",
          "\u6211\u4EEC\u7684\u670D\u52A1\u5668\u5728\u6253\u76F9\uFF0C\u8BF7\u8F7B\u8F7B\u6447\u9192\u5B83...",
          "\u4EE3\u7801\u5728\u4F18\u5316\u5904\u7406\u4E2D\uFF0C\u5373\u5C06\u5B8C\u6210...",
          "\u4EBA\u5DE5\u667A\u80FD\u6B63\u5728\u80CC\u8BF5\u5510\u8BD7\u5B8B\u8BCD...",
          "\u670D\u52A1\u5668\u6B63\u5728\u5904\u7406\u4E2D\uFF0C\u9A6C\u4E0A\u56DE\u6765...",
          "\u6570\u636E\u5728\u6392\u961F\u8FC7\u5B89\u68C0\uFF0C\u8BF7\u7A0D\u7B49\u7247\u523B...",
          '\u7CFB\u7EDF\u5728\u6311\u6218"\u820C\u5C16\u4E0A\u7684\u4E2D\u56FD"\uFF0C\u5B66\u505A\u4F73\u80B4\u4E2D...',
          "\u6211\u4EEC\u7684AI\u5728\u7EC3\u4E60\u4E66\u6CD5\uFF0C\u4E00\u7B14\u4E00\u753B\u9700\u8010\u5FC3...",
          "\u4EE3\u7801\u541B\u5728\u6C8F\u8336\uFF0C\u8BB2\u7A76\u4E00\u4E2A\u54C1\u8336\u9759\u5FC3...",
          "\u6570\u636E\u5E93\u5728\u505A\u745C\u4F3D\uFF0C\u4F38\u5C55\u653E\u677E\u4E00\u4E0B...",
          "\u7B97\u6CD5\u5927\u5E08\u5728\u95ED\u5173\u4FEE\u70BC\uFF0C\u5373\u5C06\u51FA\u5173...",
          "\u670D\u52A1\u5668\u5728\u81EA\u6211\u4FEE\u590D\u4E2D...",
          "\u6211\u4EEC\u5728\u548C\u673A\u5668\u4EBA\u6BD4\u5212\u592A\u6781\u62F3...",
          "\u7CFB\u7EDF\u5728\u7814\u7A76\u6613\u7ECF\uFF0C\u5BFB\u627E\u9634\u9633\u5E73\u8861...",
          "\u4EE3\u7801\u5728\u53C2\u52A0\u9A6C\u62C9\u677E\uFF0C\u575A\u6301\u5C31\u662F\u80DC\u5229...",
          "\u4EBA\u5DE5\u667A\u80FD\u5728\u5B66\u4E60\u5DDD\u83DC\uFF0C\u706B\u5019\u8FD8\u9700\u8C03\u6574...",
          "\u670D\u52A1\u5668\u5728\u5904\u7406\u5BC6\u96C6\u4EFB\u52A1\u4E2D...",
          "\u6211\u4EEC\u5728\u6559\u8BA1\u7B97\u673A\u8BA4\u8BC6\u7E41\u4F53\u5B57...",
          "\u7B97\u6CD5\u5728\u770B\u300A\u7EA2\u697C\u68A6\u300B\uFF0C\u6C89\u8FF7\u5176\u4E2D...",
          "\u6570\u636E\u5728\u4E91\u7AEF\u5904\u7406\u4E2D...",
          "\u7CFB\u7EDF\u5728\u7EC3\u4E60\u516B\u5366\u638C\uFF0C\u8BB2\u7A76\u4E00\u4E2A\u4EE5\u67D4\u514B\u521A...",
          "\u4EE3\u7801\u5728\u5E76\u884C\u5904\u7406\u4E2D...",
          "\u4EBA\u5DE5\u667A\u80FD\u5728\u5B66\u4E60\u8BED\u8A00\u6A21\u578B\u4E2D...",
          "\u670D\u52A1\u5668\u5728\u9AD8\u6548\u5904\u7406\u4E2D...",
          "\u6211\u4EEC\u5728\u548C\u9632\u706B\u5899\u73A9\u526A\u5200\u77F3\u5934\u5E03...",
          "\u7B97\u6CD5\u5728\u7814\u7A76\u300A\u8D44\u6CBB\u901A\u9274\u300B\uFF0C\u535A\u53E4\u901A\u4ECA...",
          "\u7CFB\u7EDF\u5728\u7EC3\u4E60\u592A\u6781\u6247\uFF0C\u4F18\u96C5\u4E14\u5B9E\u7528...",
          "\u4EE3\u7801\u5728\u559D\u529F\u592B\u8336\uFF0C\u4E00\u53E3\u4E00\u53E3\u54C1\u5473\u751F\u6D3B...",
          '\u4EBA\u5DE5\u667A\u80FD\u5728\u6311\u6218"\u6700\u5F3A\u5927\u8111"\uFF0C\u8FD8\u9700\u52AA\u529B...',
          "\u670D\u52A1\u5668\u5728\u6253\u5750\u5FF5\u7ECF\uFF0C\u4E0D\u8981\u6253\u6270\u5B83...",
          "\u6211\u4EEC\u5728\u548C\u4E91\u6735\u6BD4\u8C01\u66F4\u84EC\u677E...",
          "\u7B97\u6CD5\u5728\u7814\u7A76\u4E2D\u533B\uFF0C\u8BB2\u7A76\u4E00\u4E2A\u9634\u9633\u8C03\u548C...",
          "\u6570\u636E\u5728\u505A\u4FEF\u5367\u6491\uFF0C\u5F3A\u8EAB\u5065\u4F53\u4E2D...",
          "\u7CFB\u7EDF\u5728\u5B66\u4E60\u5F39\u53E4\u7B5D\uFF0C\u5341\u6307\u8FDE\u5FC3...",
          "\u4EE3\u7801\u5728\u7814\u7A76\u98CE\u6C34\uFF0C\u6446\u653E\u66F4\u5408\u7406...",
          "\u4EBA\u5DE5\u667A\u80FD\u5728\u5B66\u4E60\u753B\u56FD\u753B\uFF0C\u9700\u8981\u9759\u5FC3...",
          "\u670D\u52A1\u5668\u5728\u6253\u592A\u6781\u62F3\uFF0C\u52A8\u4F5C\u8F7B\u7F13\u4F18\u7F8E...",
          "\u6211\u4EEC\u5728\u6559\u673A\u5668\u4EBA\u5199\u6BDB\u7B14\u5B57\uFF0C\u4E00\u7B14\u4E00\u753B\u5F88\u8BA4\u771F...",
          "\u7B97\u6CD5\u5728\u7814\u7A76\u300A\u9053\u5FB7\u7ECF\u300B\uFF0C\u65E0\u4E3A\u800C\u6CBB...",
          "\u4E14\u542C\u98CE\u541F\uFF0C\u4E14\u5F85\u6570\u636E\u52A0\u8F7D\u5B8C\u6210...",
        ],
      },
      diffRenderer: {
        noDiffContent: "\u65E0\u5DEE\u5F02\u5185\u5BB9\u3002",
        noChangesDetected: "\u672A\u68C0\u6D4B\u5230\u53D8\u5316\u3002",
      },
      thinking: {
        thinking: "\u601D\u8003\u4E2D",
        thinkingWithSubject: "\u601D\u8003\u4E2D: {{subject}}",
        pressEnterToToggle: "(\u6309\u56DE\u8F66\u5207\u6362)",
        moreLines: "... (\u8FD8\u6709{{count}}\u884C - \u6309\u7A7A\u683C{{action}})",
        expand: "\u5C55\u5F00",
        collapse: "\u6298\u53E0",
      },
      todoWrite: {
        validationErrors: {
          invalidJsonString: "\u65E0\u6548\u7684JSON\u5B57\u7B26\u4E32\u683C\u5F0F",
          todosRequired: "\u9700\u8981\u63D0\u4F9B\u5F85\u529E\u4E8B\u9879\u6570\u7EC4",
          todoNullUndefined:
            "\u7D22\u5F15{{index}}\u5904\u7684\u5F85\u529E\u4E8B\u9879\u4E0D\u80FD\u4E3A\u7A7A\u6216\u672A\u5B9A\u4E49",
          todoEmptyTask:
            "\u7D22\u5F15{{index}}\u5904\u7684\u5F85\u529E\u4E8B\u9879\u5FC5\u987B\u6709\u975E\u7A7A\u4EFB\u52A1",
          todoInvalidStatus:
            "\u7D22\u5F15{{index}}\u5904\u7684\u5F85\u529E\u4E8B\u9879\u72B6\u6001\u65E0\u6548\uFF1A{{status}}",
          duplicateIds: "\u53D1\u73B0\u91CD\u590D\u7684\u5F85\u529E\u4E8B\u9879ID",
          multipleInProgress:
            "\u540C\u65F6\u53EA\u80FD\u6709\u4E00\u4E2A\u4EFB\u52A1\u5904\u4E8E\u8FDB\u884C\u4E2D\u72B6\u6001",
        },
        messages: {
          invalidParameters: "\u65E0\u6548\u7684\u5F85\u529E\u4E8B\u9879\u53C2\u6570",
          errorPrefix: "\u5F85\u529E\u4E8B\u9879\u9A8C\u8BC1\u5931\u8D25\uFF1A{{reason}}",
          errorDisplay: "\u5F85\u529E\u4E8B\u9879\u9519\u8BEF\uFF1A{{error}}",
          todosModifiedSuccess: "\u5F85\u529E\u4E8B\u9879\u5217\u8868\u5DF2\u6210\u529F\u66F4\u65B0",
        },
        status: {
          updatingTodoList:
            "\u66F4\u65B0\u5F85\u529E\u4E8B\u9879\u5217\u8868\uFF08{{pending}}\u4E2A\u5F85\u5904\u7406\uFF0C{{inProgress}}\u4E2A\u8FDB\u884C\u4E2D\uFF0C{{completed}}\u4E2A\u5DF2\u5B8C\u6210\uFF09",
          updateTodos: "\u5DF2\u66F4\u65B0\u5F85\u529E\u4E8B\u9879\u5217\u8868",
          noTodos: "\u65E0\u5F85\u529E\u4E8B\u9879",
        },
      },
      lsTool: {
        errors: {
          pathNotAbsolute: "\u8DEF\u5F84\u5FC5\u987B\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\uFF1A{{path}}",
          pathNotInWorkspace: "\u8DEF\u5F84\u5FC5\u987B\u5728\u5DE5\u4F5C\u533A\u76EE\u5F55\u4E2D\uFF1A{{directories}}",
          invalidParameters: "\u63D0\u4F9B\u7684\u53C2\u6570\u65E0\u6548\u3002\u539F\u56E0\uFF1A{{reason}}",
          failedToExecute: "\u6267\u884C\u5DE5\u5177\u5931\u8D25\u3002",
          directoryNotFound: "\u627E\u4E0D\u5230\u76EE\u5F55\u6216\u65E0\u6CD5\u8BBF\u95EE\uFF1A{{path}}",
          directoryNotFoundShort: "\u627E\u4E0D\u5230\u76EE\u5F55\u6216\u65E0\u6CD5\u8BBF\u95EE\u3002",
          pathNotDirectory: "\u8DEF\u5F84\u4E0D\u662F\u4E00\u4E2A\u76EE\u5F55\uFF1A{{path}}",
          pathNotDirectoryShort: "\u8DEF\u5F84\u4E0D\u662F\u4E00\u4E2A\u76EE\u5F55\u3002",
          listingFailed: "\u5217\u51FA\u76EE\u5F55\u5931\u8D25\uFF1A{{error}}",
          listingFailedShort: "\u5217\u51FA\u76EE\u5F55\u5931\u8D25\u3002",
        },
        messages: {
          directoryEmpty: "\u76EE\u5F55 {{path}} \u662F\u7A7A\u7684\u3002",
          directoryEmptyShort: "\u76EE\u5F55\u662F\u7A7A\u7684\u3002",
          directoryListing: `{{path}} \u76EE\u5F55\u5217\u8868\uFF1A
{{content}}`,
          listedItems: "\u5217\u51FA\u4E86 {{count}} \u4E2A\u9879\u76EE\u3002",
          gitIgnored: "{{count}} \u4E2A git \u5FFD\u7565",
          iflowIgnored: "{{count}} \u4E2A iflow \u5FFD\u7565",
        },
      },
      geminiStream: {
        messages: {
          requestCancelled: "\u8BF7\u6C42\u5DF2\u53D6\u6D88\u3002",
          compressingContext:
            "\u6B63\u5728\u538B\u7F29\u4E0A\u4E0B\u6587\u4EE5\u7EF4\u6301\u5728 {{model}} \u7684 token \u9650\u5236\u5185...",
          contextCompressed:
            "\u4E0A\u4E0B\u6587\u5DF2\u538B\u7F29\uFF08\u4ECE {{originalTokenCount}} \u4E2A token \u538B\u7F29\u5230 {{newTokenCount}} \u4E2A token\uFF09\u3002",
          maxSessionTurns:
            "\u4F1A\u8BDD\u5DF2\u8FBE\u5230\u6700\u5927\u8F6E\u6B21\u9650\u5236\uFF1A{{maxTurns}}\u3002\u8BF7\u5728 setting.json \u6587\u4EF6\u4E2D\u66F4\u65B0\u6B64\u9650\u5236\u3002",
          loopDetected:
            "\u68C0\u6D4B\u5230\u6F5C\u5728\u7684\u5FAA\u73AF\u3002\u8FD9\u53EF\u80FD\u7531\u4E8E\u91CD\u590D\u7684\u5DE5\u5177\u8C03\u7528\u6216\u5176\u4ED6\u6A21\u578B\u884C\u4E3A\u5F15\u8D77\u3002\u8BF7\u6C42\u5DF2\u505C\u6B62\u3002",
          planApprovalResponse:
            "\u7528\u6237\u5DF2\u6279\u51C6\u60A8\u7684\u8BA1\u5212\u3002\u60A8\u73B0\u5728\u53EF\u4EE5\u5F00\u59CB\u7F16\u7801\u3002\u5982\u9002\u7528\uFF0C\u8BF7\u5148\u66F4\u65B0\u60A8\u7684\u5F85\u529E\u4E8B\u9879\u5217\u8868",
        },
        finishReasons: {
          maxTokens: "\u56E0 token \u9650\u5236\u800C\u622A\u65AD\u54CD\u5E94\u3002",
          safety: "\u56E0\u5B89\u5168\u539F\u56E0\u505C\u6B62\u54CD\u5E94\u3002",
          recitation: "\u56E0\u80CC\u8BF5\u7B56\u7565\u505C\u6B62\u54CD\u5E94\u3002",
          language: "\u56E0\u4E0D\u652F\u6301\u7684\u8BED\u8A00\u505C\u6B62\u54CD\u5E94\u3002",
          blocklist: "\u56E0\u7981\u6B62\u7684\u672F\u8BED\u505C\u6B62\u54CD\u5E94\u3002",
          prohibitedContent: "\u56E0\u7981\u6B62\u5185\u5BB9\u505C\u6B62\u54CD\u5E94\u3002",
          spii: "\u56E0\u654F\u611F\u4E2A\u4EBA\u8EAB\u4EFD\u4FE1\u606F\u505C\u6B62\u54CD\u5E94\u3002",
          other: "\u56E0\u5176\u4ED6\u539F\u56E0\u505C\u6B62\u54CD\u5E94\u3002",
          malformedFunctionCall:
            "\u56E0\u683C\u5F0F\u9519\u8BEF\u7684\u51FD\u6570\u8C03\u7528\u505C\u6B62\u54CD\u5E94\u3002",
          imageSafety: "\u56E0\u56FE\u50CF\u5B89\u5168\u8FDD\u89C4\u505C\u6B62\u54CD\u5E94\u3002",
          unexpectedToolCall: "\u56E0\u610F\u5916\u7684\u5DE5\u5177\u8C03\u7528\u505C\u6B62\u54CD\u5E94\u3002",
        },
      },
      compressionMessage: {
        compressingHistory: "\u6B63\u5728\u538B\u7F29\u804A\u5929\u5386\u53F2",
        previousConversationCompressed: "\u4E4B\u524D\u7684\u5BF9\u8BDD\u5DF2\u538B\u7F29",
        contextCompressed:
          "\u4E0A\u4E0B\u6587\u4ECE {{originalTokenCount}} \u4E2A token \u538B\u7F29\u5230 {{newTokenCount}} \u4E2A token",
        expandCollapseHint: " (ctrl+r {{action}}\u6458\u8981)",
        expand: "\u5C55\u5F00",
        collapse: "\u6298\u53E0",
        summaryLabel: "\u6458\u8981\uFF1A",
        collapseHint: "(ctrl+r \u6298\u53E0)",
      },
      writeFileTool: {
        errors: {
          pathNotAbsolute: "\u6587\u4EF6\u8DEF\u5F84\u5FC5\u987B\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\uFF1A{{filePath}}",
          pathNotInWorkspace:
            "\u6587\u4EF6\u8DEF\u5F84\u5FC5\u987B\u5728\u5DE5\u4F5C\u533A\u76EE\u5F55\u4E2D\uFF1A{{directories}}",
          pathIsDirectory: "\u8DEF\u5F84\u662F\u4E00\u4E2A\u76EE\u5F55\uFF0C\u4E0D\u662F\u6587\u4EF6\uFF1A{{filePath}}",
          accessError:
            "\u9A8C\u8BC1\u8DEF\u5F84\u5C5E\u6027\u65F6\u51FA\u9519\uFF1A{{filePath}}\u3002\u539F\u56E0\uFF1A{{error}}",
          invalidParameters: "\u63D0\u4F9B\u7684\u53C2\u6570\u65E0\u6548\u3002\u539F\u56E0\uFF1A{{reason}}",
          checkingFileError: "\u68C0\u67E5\u73B0\u6709\u6587\u4EF6\u65F6\u51FA\u9519\uFF1A{{message}}",
          checkingFileErrorLong:
            "\u68C0\u67E5\u73B0\u6709\u6587\u4EF6 {{filePath}} \u65F6\u51FA\u9519\uFF1A{{message}}",
          writingFileError: "\u5199\u5165\u6587\u4EF6\u65F6\u51FA\u9519\uFF1A{{error}}",
          writingFileErrorLong: "\u5199\u5165\u6587\u4EF6 {{filePath}} \u65F6\u51FA\u9519\uFF1A{{error}}",
        },
        messages: {
          invalidParams:
            "\u6A21\u578B\u672A\u63D0\u4F9B\u5199\u5165\u6587\u4EF6\u5DE5\u5177\u7684\u6709\u6548\u53C2\u6570",
          writingTo: "\u5199\u5165 {{path}}",
          confirmWrite: "\u786E\u8BA4\u5199\u5165\uFF1A{{path}}",
          newFileCreated: "\u6210\u529F\u521B\u5EFA\u5E76\u5199\u5165\u65B0\u6587\u4EF6\uFF1A{{filePath}}\u3002",
          fileOverwritten: "\u6210\u529F\u8986\u76D6\u6587\u4EF6\uFF1A{{filePath}}\u3002",
          userModified: "\u7528\u6237\u4FEE\u6539\u4E86 `content` \u4E3A\uFF1A{{content}}",
        },
      },
      fileUtils: {
        errors: {
          fileNotFound: "\u627E\u4E0D\u5230\u6587\u4EF6\u3002",
          fileNotFoundLong: "\u627E\u4E0D\u5230\u6587\u4EF6\uFF1A{{filePath}}",
          pathIsDirectory: "\u8DEF\u5F84\u662F\u4E00\u4E2A\u76EE\u5F55\u3002",
          pathIsDirectoryLong:
            "\u8DEF\u5F84\u662F\u4E00\u4E2A\u76EE\u5F55\uFF0C\u4E0D\u662F\u6587\u4EF6\uFF1A{{filePath}}",
          fileTooLarge:
            "\u6587\u4EF6\u5185\u5BB9\uFF08{{sizeKB}}KB\uFF09\u8D85\u8FC7\u4E86\u6700\u5927\u5141\u8BB8\u7684\u5927\u5C0F\uFF08256KB\uFF09\u3002\u8BF7\u4F7F\u7528 offset \u548C limit \u53C2\u6570\u6765\u8BFB\u53D6\u6587\u4EF6\u7684\u7279\u5B9A\u90E8\u5206\uFF0C\u6216\u4F7F\u7528 GrepTool \u6765\u641C\u7D22\u7279\u5B9A\u5185\u5BB9\u3002",
          errorReadingFile: "\u8BFB\u53D6\u6587\u4EF6 {{displayPath}} \u65F6\u51FA\u9519\uFF1A{{errorMessage}}",
          errorParsingPdf: "\u89E3\u6790 PDF \u6587\u4EF6\u65F6\u51FA\u9519\uFF1A{{error}}",
          errorParsingDocx: "\u89E3\u6790 DOCX \u6587\u4EF6\u65F6\u51FA\u9519\uFF1A{{error}}",
          errorParsingExcel: "\u89E3\u6790 Excel \u6587\u4EF6\u65F6\u51FA\u9519\uFF1A{{error}}",
          errorParsingPdfLong: "\u89E3\u6790 PDF \u6587\u4EF6 {{filePath}} \u65F6\u51FA\u9519\uFF1A{{error}}",
          errorParsingDocxLong: "\u89E3\u6790 DOCX \u6587\u4EF6 {{filePath}} \u65F6\u51FA\u9519\uFF1A{{error}}",
          errorParsingExcelLong: "\u89E3\u6790 Excel \u6587\u4EF6 {{filePath}} \u65F6\u51FA\u9519\uFF1A{{error}}",
          imageDescriptionFailed: "\u751F\u6210\u56FE\u7247\u63CF\u8FF0\u5931\u8D25\uFF1A{{error}}",
        },
        messages: {
          cannotDisplayBinary: "\u65E0\u6CD5\u663E\u793A\u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u5185\u5BB9\uFF1A{{path}}",
          skippedBinaryFile: "\u5DF2\u8DF3\u8FC7\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF1A{{path}}",
          cannotDisplayLargeSvg:
            "\u65E0\u6CD5\u663E\u793A\u5927\u4E8E 1MB \u7684 SVG \u6587\u4EF6\u5185\u5BB9\uFF1A{{path}}",
          skippedLargeSvg: "\u5DF2\u8DF3\u8FC7\u5927\u578B SVG \u6587\u4EF6\uFF08>1MB\uFF09\uFF1A{{path}}",
          readSvgAsText: "\u5DF2\u5C06 SVG \u4F5C\u4E3A\u6587\u672C\u8BFB\u53D6\uFF1A{{path}}",
          readPdfAsText: "\u5DF2\u5C06 PDF \u6587\u4EF6\u4F5C\u4E3A\u6587\u672C\u8BFB\u53D6\uFF1A{{path}}",
          readDocxAsText: "\u5DF2\u5C06 DOCX \u6587\u4EF6\u4F5C\u4E3A\u6587\u672C\u8BFB\u53D6\uFF1A{{path}}",
          readExcelAsText: "\u5DF2\u5C06 Excel \u6587\u4EF6\u4F5C\u4E3A\u6587\u672C\u8BFB\u53D6\uFF1A{{path}}",
          errorReadingPdf: "\u8BFB\u53D6 PDF \u6587\u4EF6\u65F6\u51FA\u9519\uFF1A{{path}}",
          errorReadingDocx: "\u8BFB\u53D6 DOCX \u6587\u4EF6\u65F6\u51FA\u9519\uFF1A{{path}}",
          errorReadingExcel: "\u8BFB\u53D6 Excel \u6587\u4EF6\u65F6\u51FA\u9519\uFF1A{{path}}",
          readMediaFile: "\u5DF2\u8BFB\u53D6 {{fileType}} \u6587\u4EF6\uFF1A{{path}}",
          unhandledFileType: "\u672A\u5904\u7406\u7684\u6587\u4EF6\u7C7B\u578B\uFF1A{{fileType}}",
          skippedUnhandledFile: "\u5DF2\u8DF3\u8FC7\u672A\u5904\u7406\u7684\u6587\u4EF6\u7C7B\u578B\uFF1A{{path}}",
          unhandledFileTypeError: "{{filePath}} \u7684\u6587\u4EF6\u7C7B\u578B\u672A\u5904\u7406",
          fileTruncatedLines:
            "[\u6587\u4EF6\u5185\u5BB9\u5DF2\u622A\u65AD\uFF1A\u663E\u793A\u7B2C {{startLine}}-{{endLine}} \u884C\uFF0C\u5171 {{totalLines}} \u884C\u3002\u4F7F\u7528 offset/limit \u53C2\u6570\u67E5\u770B\u66F4\u591A\u5185\u5BB9\u3002]",
          fileTruncatedLength:
            "[\u6587\u4EF6\u5185\u5BB9\u90E8\u5206\u622A\u65AD\uFF1A\u67D0\u4E9B\u884C\u8D85\u8FC7\u4E86\u6700\u5927\u957F\u5EA6 {{maxLength}} \u4E2A\u5B57\u7B26\u3002]",
          readLinesRange:
            "\u4ECE {{path}} \u8BFB\u53D6\u7B2C {{startLine}}-{{endLine}} \u884C\uFF0C\u5171 {{totalLines}} \u884C",
          readAllLinesShortened:
            "\u4ECE {{path}} \u8BFB\u53D6\u6240\u6709 {{totalLines}} \u884C\uFF08\u67D0\u4E9B\u884C\u5DF2\u7F29\u77ED\uFF09",
          readAllLines: "\u4ECE {{path}} \u8BFB\u53D6\u6240\u6709 {{totalLines}} \u884C\u6570\u636E",
          someLinesShortened: "\uFF08\u67D0\u4E9B\u884C\u5DF2\u7F29\u77ED\uFF09",
          imageDescriptionGenerated: `\u5DF2\u4E3A {{path}} \u751F\u6210\u56FE\u7247\u63CF\u8FF0\uFF1A
{{description}}`,
          imageDescriptionError: "\u4E3A {{path}} \u751F\u6210\u56FE\u7247\u63CF\u8FF0\u65F6\u51FA\u9519",
          imageDescriptionErrorWithFallback:
            "\u4E3A {{path}} \u751F\u6210\u56FE\u7247\u63CF\u8FF0\u5931\u8D25\uFF08{{sizeKB}}KB\uFF09\u3002\u6587\u4EF6\u5185\u5BB9\u53EF\u7528\u3002",
          readImageFile: "\u5DF2\u8BFB\u53D6\u56FE\u7247\u6587\u4EF6 {{path}}\uFF08{{sizeKB}}KB\uFF09",
          imageFileRead: "\u56FE\u7247\u6587\u4EF6\uFF1A{{path}}\uFF08{{sizeKB}}KB\uFF0C{{mimeType}}\uFF09",
        },
      },
      textTruncation: {
        truncatedLines: "[...\u5DF2\u9690\u85CF {{count}} \u884C...]",
        truncatedCharactersAndLines:
          "[...\u5DF2\u9690\u85CF {{characters}} \u4E2A\u5B57\u7B26\uFF0C{{lines}} \u884C...]",
      },
      session: { agentPoweringDown: "iFlow CLI\u5DF2\u7ECF\u5173\u95ED\u3002\u518D\u89C1\uFF01" },
      authInProgress: {
        authTimeout: "\u8BA4\u8BC1\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5\u3002",
        waitingForAuth: "\u7B49\u5F85\u8BA4\u8BC1\u4E2D... (\u6309 ESC \u53D6\u6D88)",
        copyUrlPrompt:
          "\u6D4F\u89C8\u5668\u672A\u81EA\u52A8\u6253\u5F00\uFF1F\u8BF7\u590D\u5236\u4EE5\u4E0B\u94FE\u63A5\u5E76\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\uFF1A",
      },
      modelDialog: {
        modelSelection: "\u6A21\u578B\u9009\u62E9",
        selectModelPrompt: "\u8BF7\u9009\u62E9\u60A8\u8981\u5728 iFlow \u4E2D\u4F7F\u7528\u7684\u6A21\u578B\u3002",
        defaultSelection: "\u6309\u56DE\u8F66\u4F7F\u7528\u9ED8\u8BA4\u9009\u62E9\uFF1AGLM 4.7",
        modelNameRequired: "\u6A21\u578B\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",
        selectInstructions: "(\u6309\u56DE\u8F66\u9009\u62E9\uFF0CESC \u53D6\u6D88)",
        modelConfiguration: "\u6A21\u578B\u914D\u7F6E",
        enterModelPrompt: "\u8BF7\u8F93\u5165\u60A8\u8981\u4F7F\u7528\u7684\u6A21\u578B\u540D\u79F0\u3002",
        modelNameLabel: "\u6A21\u578B\u540D\u79F0\uFF1A",
        modelNamePlaceholder: "\u8F93\u5165\u6A21\u578B\u540D\u79F0 (\u4F8B\u5982 gpt-4o, claude-3-5-sonnet)",
        confirmInstructions: "(\u6309\u56DE\u8F66\u786E\u8BA4\uFF0CESC \u53D6\u6D88)",
        recommend: "\u63A8\u8350",
        fast: "\u9884\u89C8\u7248",
        directMultimodal: "\u76F4\u63A5\u591A\u6A21\u6001",
        loading: "\u52A0\u8F7D\u4E2D...",
      },
      agentInstallDialog: {
        title: "\u5B89\u88C5\u65B0\u4EE3\u7406",
        agentInstallation: "\u4EE3\u7406\u5B89\u88C5",
        stepOf: "\u7B2C {{current}} \u6B65\uFF0C\u5171 {{total}} \u6B65",
        locationTitle: "\u9009\u62E9\u5B89\u88C5\u4F4D\u7F6E",
        locationDescription: "\u60A8\u5E0C\u671B\u5C06\u4EE3\u7406\u5B89\u88C5\u5230\u54EA\u91CC\uFF1F",
        projectAgent: "\u9879\u76EE\u4EE3\u7406",
        projectAgentDesc:
          "\u5B89\u88C5\u5728\u5F53\u524D\u9879\u76EE\u4E2D\uFF08\u4EC5\u6B64\u9879\u76EE\u53EF\u8BBF\u95EE\uFF09",
        userAgent: "\u7528\u6237\u4EE3\u7406",
        userAgentDesc:
          "\u4E3A\u60A8\u7684\u7528\u6237\u5168\u5C40\u5B89\u88C5\uFF08\u6240\u6709\u9879\u76EE\u90FD\u53EF\u8BBF\u95EE\uFF09",
        methodTitle: "\u9009\u62E9\u521B\u5EFA\u65B9\u5F0F",
        methodDescription: "\u60A8\u5E0C\u671B\u5982\u4F55\u521B\u5EFA\u4EE3\u7406\uFF1F",
        generateWithIFlow: "\u4F7F\u7528 iFlow \u751F\u6210\uFF08\u63A8\u8350\uFF09",
        generateWithIFlowDesc: "\u901A\u8FC7 iFlow \u7684\u667A\u80FD\u5F15\u5BFC\u521B\u5EFA",
        manualConfig: "\u624B\u52A8\u914D\u7F6E",
        manualConfigDesc: "\u9010\u6B65\u624B\u52A8\u521B\u5EFA",
        fromOnlineRepo: "\u4ECE\u5728\u7EBF\u4ED3\u5E93",
        fromOnlineRepoDesc: "\u4ECE\u5728\u7EBF\u4EE3\u7406\u4ED3\u5E93\u6D4F\u89C8\u5E76\u5B89\u88C5",
        agentGoalTitle: "\u63CF\u8FF0\u60A8\u7684\u4EE3\u7406\u76EE\u6807",
        agentGoalDescription:
          "\u60A8\u5E0C\u671B\u8FD9\u4E2A\u4EE3\u7406\u505A\u4EC0\u4E48\uFF1F\u8BF7\u5177\u4F53\u8BF4\u660E\u5176\u7528\u9014\u548C\u529F\u80FD\u3002",
        agentGoalPlaceholder:
          "\u4F8B\u5982\uFF1A\u5BA1\u67E5\u4EE3\u7801\u7684\u5B89\u5168\u6F0F\u6D1E\u548C\u6700\u4F73\u5B9E\u8DF5",
        agentTypeTitle: "\u4EE3\u7406\u7C7B\u578B\uFF08\u6807\u8BC6\u7B26\uFF09",
        agentTypeDescription: "\u4E3A\u60A8\u7684\u4EE3\u7406\u8F93\u5165\u552F\u4E00\u6807\u8BC6\u7B26",
        agentTypePlaceholder: "\u4F8B\u5982\uFF1Acode-reviewer, tech-lead \u7B49",
        systemPromptTitle: "\u7CFB\u7EDF\u63D0\u793A\u8BCD",
        systemPromptDescription: "\u5B9A\u4E49\u4EE3\u7406\u7684\u884C\u4E3A\u548C\u529F\u80FD",
        systemPromptPlaceholder:
          "\u8F93\u5165\u7CFB\u7EDF\u63D0\u793A\u8BCD\u3002\u4E3A\u83B7\u5F97\u6700\u4F73\u6548\u679C\uFF0C\u8BF7\u5C3D\u53EF\u80FD\u8BE6\u7EC6",
        descriptionTitle: "\u4EE3\u7406\u63CF\u8FF0",
        descriptionDescription: "\u7B80\u8981\u63CF\u8FF0\u6B64\u4EE3\u7406\u7684\u529F\u80FD",
        descriptionPlaceholder: "\u8F93\u5165\u4EE3\u7406\u63CF\u8FF0",
        toolsTitle: "\u9009\u62E9\u5DE5\u5177",
        toolsDescription: "\u9009\u62E9\u6B64\u4EE3\u7406\u53EF\u4EE5\u4F7F\u7528\u7684\u5DE5\u5177",
        allowAccessTo: "\u5141\u8BB8\u8BBF\u95EE {{tool}} \u5DE5\u5177",
        mcpsTitle: "\u9009\u62E9 MCP \u670D\u52A1\u5668",
        mcpsDescription: "\u9009\u62E9\u6B64\u4EE3\u7406\u53EF\u4EE5\u8BBF\u95EE\u7684 MCP \u670D\u52A1\u5668",
        allowMcpAccess: "\u5141\u8BB8\u8BBF\u95EE {{mcp}} MCP \u670D\u52A1\u5668",
        colorTitle: "\u9009\u62E9\u80CC\u666F\u989C\u8272",
        colorDescription: "\u4E3A\u60A8\u7684\u4EE3\u7406\u9009\u62E9\u989C\u8272",
        automaticColor: "\u81EA\u52A8\u989C\u8272",
        automaticColorDesc: "\u8BA9\u7CFB\u7EDF\u81EA\u52A8\u9009\u62E9\u989C\u8272",
        red: "\u7EA2\u8272",
        blue: "\u84DD\u8272",
        green: "\u7EFF\u8272",
        yellow: "\u9EC4\u8272",
        purple: "\u7D2B\u8272",
        orange: "\u6A59\u8272",
        pink: "\u7C89\u8272",
        cyan: "\u9752\u8272",
        previewTitle: "\u9884\u89C8\u4EE3\u7406\u914D\u7F6E",
        previewDescription: "\u5728\u521B\u5EFA\u4E4B\u524D\u5BA1\u67E5\u60A8\u7684\u4EE3\u7406\u914D\u7F6E",
        details: "\u8BE6\u7EC6\u4FE1\u606F\uFF1A",
        location: "\u4F4D\u7F6E\uFF1A{{location}}",
        model: "\u6A21\u578B\uFF1A{{model}}",
        color: "\u989C\u8272\uFF1A{{color}}",
        tools: "\u5DE5\u5177\uFF1A",
        mcpServers: "MCP \u670D\u52A1\u5668\uFF1A",
        systemPrompt: "\u7CFB\u7EDF\u63D0\u793A\u8BCD\uFF1A",
        allToolsAvailable: "\u6240\u6709\u5DE5\u5177\u53EF\u7528",
        allMcpServersAvailable: "\u6240\u6709 MCP \u670D\u52A1\u5668\u53EF\u7528",
        generatedPreviewTitle: "\u5BA1\u67E5\u751F\u6210\u7684\u914D\u7F6E",
        generatedPreviewDescription: "\u5BA1\u67E5\u5E76\u7F16\u8F91 AI \u751F\u6210\u7684\u4EE3\u7406\u914D\u7F6E",
        continueToToolsSelection: "[\u7EE7\u7EED\u5230\u5DE5\u5177\u9009\u62E9]",
        proceedToNextStep: "\u7EE7\u7EED\u4E0B\u4E00\u6B65",
        agentTypeLabel: "\u4EE3\u7406\u7C7B\u578B",
        descriptionLabel: "\u63CF\u8FF0",
        systemPromptLabel: "\u7CFB\u7EDF\u63D0\u793A\u8BCD",
        notSet: "(\u672A\u8BBE\u7F6E)",
        generatingTitle: "\u751F\u6210\u4EE3\u7406\u914D\u7F6E",
        generatingDescription:
          "\u4F7F\u7528 AI \u6839\u636E\u76EE\u6807\u63CF\u8FF0\u521B\u5EFA\u60A8\u7684\u4EE3\u7406...",
        startingGeneration: "\u5F00\u59CB\u751F\u6210...",
        pleaseWait: "\u8BF7\u7B49\u5F85\u914D\u7F6E\u751F\u6210\u5B8C\u6210\u3002",
        generatingFromGoal: "\u6B63\u5728\u6839\u636E\u60A8\u7684\u76EE\u6807\u751F\u6210\u4EE3\u7406\u914D\u7F6E...",
        generatedSuccessfully: "\u2714 \u4EE3\u7406\u914D\u7F6E\u751F\u6210\u6210\u529F\uFF01",
        continue: "[\u7EE7\u7EED]",
        currentValue: "\u5F53\u524D\u503C\uFF1A{{value}}",
        currentValueNotSet: "\u5F53\u524D\u503C\uFF1A(\u672A\u8BBE\u7F6E)",
        pressEnterToEdit: "\u6309\u56DE\u8F66\u7F16\u8F91",
        editField: "\u7F16\u8F91 {{field}}",
        modifyField: "\u4E3A\u60A8\u7684\u4EE3\u7406\u4FEE\u6539 {{field}}",
        enterField: "\u8F93\u5165 {{field}}",
        navigation: "\u5BFC\u822A\uFF1A",
        navigateOptions: "\u2022 \u2191/\u2193 \u6216 j/k - \u6D4F\u89C8\u9009\u9879",
        enterToSelect: "\u2022 \u56DE\u8F66 - \u9009\u62E9\u9009\u9879",
        enterToEdit: "\u2022 \u56DE\u8F66 - \u7F16\u8F91\u503C",
        enterToEditField: "\u2022 \u56DE\u8F66 - \u7F16\u8F91\u5B57\u6BB5\u6216\u7EE7\u7EED",
        escToBack: "\u2022 ESC - \u8FD4\u56DE",
        qToExit: "\u2022 q - \u9000\u51FA",
        actions: "\u64CD\u4F5C\uFF1A",
        enterToCreate: "\u2022 \u56DE\u8F66 - \u521B\u5EFA\u4EE3\u7406",
        escToBackEdit: "\u2022 ESC - \u8FD4\u56DE\u7F16\u8F91",
        creatingAgent: "\u6B63\u5728\u521B\u5EFA\u4EE3\u7406 '{{agentType}}'...",
        successfullyCreated: "\u6210\u529F\u521B\u5EFA\u4EE3\u7406 '{{agentType}}' \u4F4D\u4E8E {{filePath}}",
        agentCreatedSuccess: "\u2714 \u6210\u529F\u521B\u5EFA\u4EE3\u7406 '{{agentType}}'",
        redirectingToOnline: "\u6B63\u5728\u8DF3\u8F6C\u5230\u5728\u7EBF\u4ED3\u5E93...",
        useAgentsOnline:
          "\u4F7F\u7528 /agents online \u6D4F\u89C8\u5E76\u4ECE\u5728\u7EBF\u4ED3\u5E93\u5B89\u88C5\u4EE3\u7406",
        failedToGenerate: "\u751F\u6210\u4EE3\u7406\u914D\u7F6E\u5931\u8D25\uFF1A{{error}}",
        failedToCreate: "\u521B\u5EFA\u4EE3\u7406\u5931\u8D25\uFF1A{{error}}",
        failedGenerateStatus: "\u274C \u751F\u6210\u914D\u7F6E\u5931\u8D25\uFF1A{{error}}",
        failedCreateStatus: "\u274C \u521B\u5EFA\u4EE3\u7406\u5931\u8D25\uFF1A{{error}}",
      },
      statsDisplay: {
        sessionStats: "\u4F1A\u8BDD\u7EDF\u8BA1",
        interactionSummary: "\u4EA4\u4E92\u6458\u8981",
        toolCalls: "\u5DE5\u5177\u8C03\u7528\uFF1A",
        successRate: "\u6210\u529F\u7387\uFF1A",
        userAgreement: "\u7528\u6237\u8BA4\u53EF\u5EA6\uFF1A",
        reviewed: "\u5DF2\u5BA1\u67E5",
        performance: "\u6027\u80FD",
        wallTime: "\u603B\u8017\u65F6\uFF1A",
        agentActive: "iFlow CLI\u6D3B\u52A8\u65F6\u95F4\uFF1A",
        apiTime: "API \u65F6\u95F4\uFF1A",
        toolTime: "\u5DE5\u5177\u65F6\u95F4\uFF1A",
        modelUsage: "\u6A21\u578B\u4F7F\u7528\u60C5\u51B5",
        requests: "\u8BF7\u6C42",
        inputTokens: "\u8F93\u5165Token",
        outputTokens: "\u8F93\u51FAToken",
        savingsHighlight: "\u8282\u7701\u4EAE\u70B9\uFF1A",
        cacheReduction:
          "\u7684\u8F93\u5165 token \u901A\u8FC7\u7F13\u5B58\u63D0\u4F9B\uFF0C\u964D\u4F4E\u4E86\u6210\u672C\u3002",
        tokenBredownTip:
          "\u63D0\u793A\uFF1A\u8FD0\u884C `/stats model` \u67E5\u770B\u5B8C\u6574\u7684 token \u7EDF\u8BA1\u3002",
      },
      agentsCommand: {
        list: {
          availableAgents: "\u53EF\u7528\u4EE3\u7406\uFF1A",
          personalAgents: "\u4E2A\u4EBA\u4EE3\u7406",
          projectAgents: "\u9879\u76EE\u4EE3\u7406",
          builtinAgents: "\u5185\u7F6E\u4EE3\u7406\uFF08\u59CB\u7EC8\u53EF\u7528\uFF09",
          generalPurpose: "- \u901A\u7528\u578B",
          tips: "\u{1F4A1} \u5C0F\u8D34\u58EB\uFF1A",
          listDesc: "\u4F7F\u7528 /agents list desc \u663E\u793A\u4EE3\u7406\u63CF\u8FF0",
          refresh: "\u4F7F\u7528 /agents refresh \u4ECE\u6E90\u6587\u4EF6\u5237\u65B0\u4EE3\u7406",
          online:
            "\u4F7F\u7528 /agents online \u6D4F\u89C8\u5E76\u4ECE\u5728\u7EBF\u4ED3\u5E93\u5B89\u88C5\u4EE3\u7406",
          noAgentsFound: "\u672A\u627E\u5230\u4EE3\u7406",
          description: "\u63CF\u8FF0",
          descriptionSubtitle: "\uFF08\u544A\u8BC9 Iflow \u4F55\u65F6\u4F7F\u7528\u6B64\u4EE3\u7406\uFF09\uFF1A",
          tools: "\u5DE5\u5177\uFF1A",
          allTools: "\u6240\u6709\u5DE5\u5177",
          noInherit: " \uFF08\u4E0D\u7EE7\u627F\uFF09",
          inherit: " \uFF08\u7EE7\u627F\uFF09",
          mcps: "MCP\uFF1A",
          none: "\u65E0",
          allMcpServers: "\u6240\u6709 MCP \u670D\u52A1\u5668\u53EF\u7528\uFF08\u7EE7\u627F\uFF09",
          color: "\u989C\u8272\uFF1A",
          systemPrompt: "\u7CFB\u7EDF\u63D0\u793A\uFF1A",
        },
        refresh: {
          refreshing: "\u6B63\u5728\u4ECE\u6E90\u6587\u4EF6\u5237\u65B0\u4EE3\u7406...",
          success: "\u4EE3\u7406\u5237\u65B0\u6210\u529F\u3002\u627E\u5230 {{count}} \u4E2A\u4EE3\u7406\u3002",
          error: "\u5237\u65B0\u4EE3\u7406\u65F6\u51FA\u9519\uFF1A{{error}}",
        },
        online: {
          availableOnlineAgents: "\u53EF\u7528\u5728\u7EBF\u4EE3\u7406",
          total: "\u603B\u8BA1",
          category: "\u7C7B\u522B\uFF1A",
          model: "\u6A21\u578B\uFF1A",
          version: "\u7248\u672C\uFF1A",
          visibility: "\u53EF\u89C1\u6027\uFF1A",
          context: "\u4E0A\u4E0B\u6587\uFF1A",
          availableTools: "\u53EF\u7528\u5DE5\u5177",
          tags: "\u6807\u7B7E\uFF1A",
          extendedInformation: "\u6269\u5C55\u4FE1\u606F\uFF1A",
          allowedTools: "\u5141\u8BB8\u7684\u5DE5\u5177\uFF1A",
          inheritTools: "\u7EE7\u627F\u5DE5\u5177\uFF1A",
          yes: "\u662F",
          no: "\u5426",
          mcpServers: "MCP \u670D\u52A1\u5668\uFF1A",
          serverPage: "\u670D\u52A1\u5668\u9875\u9762",
          showingAgents: "\u663E\u793A {{count}} \u4E2A\u4EE3\u7406",
          navigation: "\u5BFC\u822A\uFF1A",
          navigateUpDown: "\u2191/\u2193 - \u4E0A\u4E0B\u5BFC\u822A",
          prevNextPage: "h/l - \u4E0A\u4E00\u9875/\u4E0B\u4E00\u9875\uFF08\u4ECE\u670D\u52A1\u5668\u52A0\u8F7D\uFF09",
          viewDetails: "Enter - \u67E5\u770B\u8BE6\u60C5",
          refreshPage: "r - \u5237\u65B0\u5F53\u524D\u9875\u9762",
          exit: "q - \u9000\u51FA",
          actions: "\u64CD\u4F5C\uFF1A",
          installProject: "1 - \u4E3A\u9879\u76EE\u5B89\u88C5",
          installUser: "2 - \u4E3A\u7528\u6237\u5B89\u88C5",
          backToList: "b - \u8FD4\u56DE\u5217\u8868",
        },
        install: {
          successfullyInstalled: "\u2714 \u6210\u529F\u4E3A {{scope}} \u5B89\u88C5\u4EE3\u7406 '{{name}}'",
          location: "\u4F4D\u7F6E\uFF1A{{path}}",
          useAgent:
            "\u73B0\u5728\u60A8\u53EF\u4EE5\u901A\u8FC7\u8F93\u5165\u6765\u4F7F\u7528\u6B64\u4EE3\u7406\uFF1A/agents list",
          alreadyInstalled: "\u26A0\uFE0F \u4EE3\u7406 '{{name}}' \u5DF2\u5B89\u88C5",
          alreadyExistsMessage:
            "\u60A8\u7684 {{scope}} \u8303\u56F4\u4E2D\u5DF2\u5B58\u5728\u540C\u540D\u4EE3\u7406\u3002",
          tipUseList:
            "\u63D0\u793A\uFF1A\u4F7F\u7528 /agents list \u67E5\u770B\u6240\u6709\u5DF2\u5B89\u88C5\u7684\u4EE3\u7406",
          installFailed: "\u274C \u5B89\u88C5\u4EE3\u7406 '{{name}}' \u5931\u8D25",
          errorMessage: "\u9519\u8BEF\uFF1A{{error}}",
        },
        subCommands: {
          list: "\u5217\u51FA\u53EF\u7528\u7684\u4EE3\u7406\u3002",
          refresh: "\u4ECE\u6E90\u6587\u4EF6\u5237\u65B0\u4EE3\u7406\u3002",
          online: "\u6D4F\u89C8\u5E76\u4ECE\u5728\u7EBF\u4ED3\u5E93\u5B89\u88C5\u4EE3\u7406",
          install: "\u4F7F\u7528\u5F15\u5BFC\u8BBE\u7F6E\u5B89\u88C5\u65B0\u4EE3\u7406",
        },
        errors: { showingAgents: "\u663E\u793A\u4EE3\u7406\u65F6\u51FA\u9519\uFF1A{{error}}" },
      },
      agentsOnlineDialog: {
        loadingTitle: "\u6B63\u5728\u52A0\u8F7D\u4EE3\u7406...",
        loadingMessage: "\u8BF7\u7A0D\u5019\uFF0C\u6B63\u5728\u83B7\u53D6\u53EF\u7528\u4EE3\u7406...",
        availableAgents: "\u53EF\u7528\u4EE3\u7406",
        availableAgentsWithCount: "\u53EF\u7528\u4EE3\u7406\uFF08\u5171 {{count}} \u4E2A\uFF09",
        noAgentsAvailable: "\u65E0\u53EF\u7528\u4EE3\u7406",
        noAgentsFound: "\u5728\u7EBF\u4ED3\u5E93\u4E2D\u672A\u627E\u5230\u4EE3\u7406\u3002",
        pageOf: "\u7B2C {{current}} \u9875\uFF0C\u5171 {{total}} \u9875",
        category: "\u7C7B\u522B\uFF1A{{category}}",
        details: "\u8BE6\u7EC6\u4FE1\u606F\uFF1A",
        model: "\u6A21\u578B\uFF1A{{model}}",
        categoryLabel: "\u7C7B\u522B\uFF1A{{category}}",
        version: "\u7248\u672C\uFF1A{{version}}",
        tools: "\u5DE5\u5177\uFF1A",
        mcpServers: "MCP \u670D\u52A1\u5668\uFF1A",
        systemPrompt: "\u7CFB\u7EDF\u63D0\u793A\u8BCD\uFF1A",
        allToolsAvailableInherit: "\u6240\u6709\u5DE5\u5177\u53EF\u7528\uFF08\u7EE7\u627F\uFF09",
        noToolsAvailableNoInherit: "\u65E0\u53EF\u7528\u5DE5\u5177\uFF08\u4E0D\u7EE7\u627F\uFF09",
        inherit: "\uFF08\u7EE7\u627F\uFF09",
        noInherit: "\uFF08\u4E0D\u7EE7\u627F\uFF09",
        allMcpServersAvailableInherit: "\u6240\u6709 MCP \u670D\u52A1\u5668\u53EF\u7528\uFF08\u7EE7\u627F\uFF09",
        noMcpServersAvailableNoInherit: "\u65E0\u53EF\u7528 MCP \u670D\u52A1\u5668\uFF08\u4E0D\u7EE7\u627F\uFF09",
        navigation: "\u5BFC\u822A\uFF1A",
        navigateUpDown: "\u2022 \u2191/\u2193 \u6216 j/k - \u4E0A\u4E0B\u5BFC\u822A",
        prevNextPage: "\u2022 \u2190/\u2192 \u6216 h/l - \u4E0A\u4E00\u9875/\u4E0B\u4E00\u9875",
        viewDetails: "\u2022 \u56DE\u8F66 - \u67E5\u770B\u8BE6\u60C5",
        exit: "\u2022 q - \u9000\u51FA",
        actions: "\u64CD\u4F5C\uFF1A",
        installProject: "\u2022 1 - \u4E3A\u9879\u76EE\u5B89\u88C5",
        installUser: "\u2022 2 - \u4E3A\u7528\u6237\u5B89\u88C5",
        backToList: "\u2022 b - \u8FD4\u56DE\u5217\u8868",
        installing: "\u6B63\u5728\u5B89\u88C5 {{name}}...",
        authRequired: "\u8BF7\u5148\u8FD0\u884C\u8BA4\u8BC1\u547D\u4EE4\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1",
        loadFailed: "\u65E0\u6CD5\u52A0\u8F7D\u4EE3\u7406\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        authFailed:
          "\u8BA4\u8BC1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u60A8\u7684 API \u5BC6\u94A5\u6216\u91CD\u65B0\u8BA4\u8BC1",
        accessDenied: "\u8BBF\u95EE\u88AB\u62D2\u7EDD\uFF0C\u8BF7\u68C0\u67E5\u60A8\u7684\u6743\u9650",
        serviceNotFound: "\u672A\u627E\u5230\u4EE3\u7406\u670D\u52A1\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        serverError: "\u670D\u52A1\u5668\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        serverLoadFailed: "\u4ECE\u670D\u52A1\u5668\u52A0\u8F7D\u4EE3\u7406\u5931\u8D25",
        connectionError:
          "\u65E0\u6CD5\u52A0\u8F7D\u4EE3\u7406\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u540E\u91CD\u8BD5",
        networkError: "\u7F51\u7EDC\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5",
        loadAgentsFailed: "\u52A0\u8F7D\u4EE3\u7406\u5931\u8D25",
        installationFailed: "\u5B89\u88C5\u5931\u8D25",
        createAgentFailed: '\u4E3A "{{name}}" \u521B\u5EFA\u4EE3\u7406\u5931\u8D25',
        installFailedWithError: "\u5B89\u88C5 {{name}} \u5931\u8D25\uFF1A{{error}}",
      },
      skillsOnlineDialog: {
        loadingTitle: "\u6B63\u5728\u52A0\u8F7D\u6280\u80FD...",
        loadingMessage: "\u8BF7\u7A0D\u5019\uFF0C\u6B63\u5728\u83B7\u53D6\u53EF\u7528\u6280\u80FD...",
        availableSkills: "\u53EF\u7528\u6280\u80FD",
        availableSkillsWithCount: "\u53EF\u7528\u6280\u80FD\uFF08\u5171 {{count}} \u4E2A\uFF09",
        noSkillsAvailable: "\u65E0\u53EF\u7528\u6280\u80FD",
        pageOf: "\u7B2C {{current}} \u9875\uFF0C\u5171 {{total}} \u9875",
        category: "\u7C7B\u522B\uFF1A{{category}}",
        details: "\u8BE6\u7EC6\u4FE1\u606F\uFF1A",
        version: "\u7248\u672C",
        categoryLabel: "\u7C7B\u522B",
        author: "\u4F5C\u8005",
        skillId: "Skill ID",
        tagsLabel: "\u6807\u7B7E",
        downloadUrl: "\u4E0B\u8F7D\u94FE\u63A5\uFF1A",
        navigation: "\u5BFC\u822A\uFF1A",
        navigateUpDown: "\u2191/\u2193 \u6216 j/k - \u4E0A\u4E0B\u5BFC\u822A",
        prevNextPage: "\u2190/\u2192 \u6216 h/l - \u4E0A\u4E00\u9875/\u4E0B\u4E00\u9875",
        viewDetails: "\u56DE\u8F66 - \u67E5\u770B\u8BE6\u60C5",
        exit: "q - \u9000\u51FA",
        tags: "\u6807\u7B7E",
        actions: "\u64CD\u4F5C\uFF1A",
        installGlobal: "1 - \u5168\u5C40\u5B89\u88C5",
        installProject: "2 - \u9879\u76EE\u5B89\u88C5",
        backToList: "b - \u8FD4\u56DE\u5217\u8868",
        qExit: "q - \u9000\u51FA",
        downloading: "\u6B63\u5728\u4E0B\u8F7D\u6280\u80FD...",
        extracting: "\u6B63\u5728\u89E3\u538B\u6280\u80FD...",
        installing: "\u6B63\u5728\u5B89\u88C5\u6280\u80FD...",
        installSuccess: '\u2713 \u6280\u80FD "{{name}}" \u5B89\u88C5\u6210\u529F',
        installFailed: "\u6280\u80FD\u5B89\u88C5\u5931\u8D25",
        installFailedWithError: "\u2717 \u5B89\u88C5\u5931\u8D25\uFF1A{{error}}",
        alreadyExists: '\u6280\u80FD "{{name}}" \u5DF2\u5B58\u5728',
        loadFailed: "\u65E0\u6CD5\u52A0\u8F7D\u6280\u80FD\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        authFailed:
          "\u8BA4\u8BC1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u60A8\u7684 API \u5BC6\u94A5\u6216\u91CD\u65B0\u8BA4\u8BC1",
        accessDenied: "\u8BBF\u95EE\u88AB\u62D2\u7EDD\uFF0C\u8BF7\u68C0\u67E5\u60A8\u7684\u6743\u9650",
        notFound: "\u672A\u627E\u5230\u6280\u80FD\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        serverError: "\u670D\u52A1\u5668\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        networkError: "\u7F51\u7EDC\u9519\u8BEF\uFF1A{{error}}",
        invalidResponse: "\u670D\u52A1\u5668\u54CD\u5E94\u65E0\u6548",
      },
      copyableUrlBox: {
        pressCtrlCToCopy:
          "\u8BF7\u4F7F\u7528 Ctrl+C \u590D\u5236\uFF0C\u907F\u514D\u9009\u4E2D\u8FB9\u6846\u5B57\u7B26",
        copied: "Url \u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F\uFF01",
      },
      authDialog: {
        getStarted: "\u5F00\u59CB\u4F7F\u7528",
        iflowAuth: "iFlow \u8EAB\u4EFD\u9A8C\u8BC1",
        iflowOAuthLogin: "iFlow OAuth \u767B\u5F55",
        aoneAuth: "Aone \u8EAB\u4EFD\u9A8C\u8BC1",
        modelConfig: "\u6A21\u578B\u914D\u7F6E",
        openaiConfig: "OpenAI \u517C\u5BB9 API \u914D\u7F6E",
        loginWithIFlowRecommend: "\u4F7F\u7528 iFlow \u767B\u5F55\uFF08\u63A8\u8350\uFF09",
        loginWithIFlowApiKey: "\u4F7F\u7528 iFlow API \u5BC6\u94A5\u767B\u5F55",
        loginWithIFlowApiKeyRecommend: "\u4F7F\u7528 iFlow API \u5BC6\u94A5\u767B\u5F55\uFF08\u63A8\u8350\uFF09",
        loginWithAoneRecommend: "\u4F7F\u7528 Aone \u767B\u5F55\uFF08\u63A8\u8350\uFF09",
        loginWithAoneApiKey: "\u4F7F\u7528 Aone Private Token\u767B\u5F55",
        openaiCompatibleApi: "OpenAI \u517C\u5BB9 API",
        howToAuth: "\u60A8\u5E0C\u671B\u5982\u4F55\u4E3A\u6B64\u9879\u76EE\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1\uFF1F",
        migrationWarning:
          "\u26A0 iFlow \u767B\u5F55\u65B9\u5F0F\u5C06\u4E8E {{deadline}} \u4E0B\u7EBF\uFF0C\u5C4A\u65F6\u4EC5\u652F\u6301 OpenAI Compatible API \u65B9\u5F0F\u3002\u8BF7\u5C3D\u65E9\u8FC1\u79FB\u3002",
        enterIFlowApiKey:
          "\u8BF7\u8F93\u5165\u60A8\u7684 iFlow API \u5BC6\u94A5\u3002\u8BF7\u53C2\u9605\uFF1Ahttps://docs.iflow.cn/docs/",
        enterAoneApiKey:
          "\u8BF7\u8F93\u5165\u60A8\u7684 Aone Private Token\u3002\u8BF7\u53C2\u9605\uFF1Ahttps://code.alibaba-inc.com/profile/account",
        selectModel: "\u8BF7\u9009\u62E9\u60A8\u8981\u4F7F\u7528\u7684\u6A21\u578B\u3002",
        enterModelName: "\u8BF7\u8F93\u5165\u60A8\u8981\u4F7F\u7528\u7684\u6A21\u578B\u540D\u79F0\u3002",
        defaultSelection: "\u6309\u56DE\u8F66\u4F7F\u7528\u9ED8\u8BA4\u9009\u62E9\uFF1AGLM 4.7",
        oauthStep1:
          "1. \u8BF7\u590D\u5236\u4EE5\u4E0B\u94FE\u63A5\u5E76\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\uFF1A",
        oauthStep2: "2. \u767B\u5F55\u60A8\u7684\u5FC3\u6D41\u8D26\u53F7\u5E76\u6388\u6743",
        oauthStep3: "3. \u590D\u5236\u6388\u6743\u7801\u5E76\u7C98\u8D34\u5230\u4E0B\u65B9\uFF1A",
        authCodeLabel: "\u6388\u6743\u7801\uFF1A",
        authCodePlaceholder: "\u7C98\u8D34\u6388\u6743\u7801...",
        failedToGetApiKey: "\u83B7\u53D6 API \u5BC6\u94A5\u5931\u8D25",
        authFailed: "\u8BA4\u8BC1\u5931\u8D25",
        enterBaseUrl: "\u8BF7\u8F93\u5165\u60A8\u7684 OpenAI \u517C\u5BB9 API \u7684 base URL\u3002",
        enterApiKey: "\u8BF7\u8F93\u5165\u60A8\u7684 API \u5BC6\u94A5\u3002",
        enterOpenaiModelName: "\u8BF7\u8F93\u5165\u6A21\u578B\u540D\u79F0\u3002",
        apiKeyLabel: "API \u5BC6\u94A5\uFF1A",
        modelNameLabel: "\u6A21\u578B\u540D\u79F0\uFF1A",
        baseUrlLabel: "base URL\uFF1A",
        current: "\u5F53\u524D\uFF1A{{value}}",
        apiKeyPlaceholder: "\u8F93\u5165\u60A8\u7684 iFlow API \u5BC6\u94A5...",
        privateTokenPlaceholder: "\u8F93\u5165\u60A8\u7684 Aone \u4EE3\u7801\u5E73\u53F0 Private Token...",
        modelNamePlaceholder: "\u8F93\u5165\u6A21\u578B\u540D\u79F0\uFF08\u4F8B\u5982 Qwen3-Coder-Plus\uFF09",
        openaiModelPlaceholder: "\u8F93\u5165\u6A21\u578B\u540D\u79F0\uFF08\u4F8B\u5982 gpt-4\uFF09",
        baseUrlPlaceholder: "https://api.openai.com/v1",
        openaiApiKeyPlaceholder: "\u8F93\u5165\u60A8\u7684 API \u5BC6\u94A5...",
        useEnterToSelect: "\uFF08\u6309\u56DE\u8F66\u9009\u62E9\uFF09",
        browserNotAvailable:
          "\u26A0\uFE0F  \u6D4F\u89C8\u5668\u542F\u52A8\u5728\u5F53\u524D\u73AF\u5883\u4E2D\u4E0D\u53EF\u7528\uFF08SSH/CI/\u65E0\u663E\u793A\u5668\uFF09\u3002",
        useApiKeyAlternative:
          "\u6216\u8005\uFF0C\u5728\u65E0\u5934\u73AF\u5883\u4E2D\u4F7F\u7528\u201C\u4F7F\u7528 iFlow API \u5BC6\u94A5\u767B\u5F55\u201D\u3002",
        termsOfService: "iFlow CLI \u7684\u670D\u52A1\u6761\u6B3E\u548C\u9690\u79C1\u58F0\u660E",
        mustSelectAuth:
          "\u60A8\u5FC5\u987B\u9009\u62E9\u4E00\u79CD\u8EAB\u4EFD\u9A8C\u8BC1\u65B9\u5F0F\u624D\u80FD\u7EE7\u7EED\u3002\u6309\u4E24\u6B21 Ctrl+C \u9000\u51FA\u3002",
      },
      textInput: {
        defaultPlaceholder: "\u8F93\u5165\u503C...",
        defaultLabel: "\u8F93\u5165\uFF1A",
        instructions: "\u6309\u56DE\u8F66\u786E\u8BA4\uFF0C\u6309 Esc \u53D6\u6D88",
      },
      passwordInput: {
        defaultPlaceholder: "\u8F93\u5165\u60A8\u7684 API \u5BC6\u94A5...",
        defaultLabel: "API \u5BC6\u94A5\uFF1A",
        instructions: "\u6309\u56DE\u8F66\u786E\u8BA4\uFF0C\u6309 Esc \u53D6\u6D88",
        validationError:
          "API \u5BC6\u94A5\u683C\u5F0F\u65E0\u6548\u3002\u53EA\u5141\u8BB8\u4F7F\u7528\u82F1\u6587\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u7279\u6B8A\u5B57\u7B26\u3002",
      },
      suggestionsDisplay: { loading: "\u6B63\u5728\u52A0\u8F7D..." },
      editTool: {
        errors: {
          pathNotAbsolute: "\u6587\u4EF6\u8DEF\u5F84\u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF1A{{filePath}}",
          pathNotInWorkspace:
            "\u6587\u4EF6\u8DEF\u5F84\u5FC5\u987B\u5728\u5DE5\u4F5C\u533A\u76EE\u5F55\u4E2D\uFF1A{{directories}}",
          fileNotFound: "\u627E\u4E0D\u5230\u6587\u4EF6\uFF1A{{filePath}}",
          pathIsDirectory: "\u8DEF\u5F84\u662F\u76EE\u5F55\u800C\u4E0D\u662F\u6587\u4EF6\uFF1A{{filePath}}",
          stringNotFound:
            "\u7F16\u8F91\u5931\u8D25\uFF0C\u5728 {{filePath}} \u4E2D\u627E\u4E0D\u5230\u8981\u66FF\u6362\u7684\u5B57\u7B26\u4E32",
          fileAlreadyExists:
            "\u7F16\u8F91\u5931\u8D25\uFF0C\u5C1D\u8BD5\u521B\u5EFA\u5DF2\u5B58\u5728\u7684\u6587\u4EF6\uFF1A{{filePath}}",
          editFailed: "\u5E94\u7528\u7F16\u8F91\u5931\u8D25\uFF1A{{error}}",
          expectedOccurrenceMismatch:
            "\u7F16\u8F91\u5931\u8D25\uFF0C\u671F\u671B {{expected}} \u6B21\u5339\u914D\u4F46\u627E\u5230 {{actual}} \u6B21",
        },
        messages: {
          createFile: "\u521B\u5EFA {{path}}",
          editFile: "\u7F16\u8F91 {{path}}",
          noChanges: "\u6CA1\u6709\u5BF9 {{path}} \u8FDB\u884C\u6587\u4EF6\u66F4\u6539",
          successfulEdit: "\u6210\u529F\u7F16\u8F91 {{path}}",
        },
      },
      smartEditTool: {
        errors: {
          unknownWriteError: "\u53D1\u751F\u672A\u77E5\u9519\u8BEF",
          executingEdit: "\u6267\u884C\u7F16\u8F91\u65F6\u51FA\u9519\uFF1A{{error}}",
          writingFile: "\u5199\u5165\u6587\u4EF6\u65F6\u51FA\u9519\uFF1A{{error}}",
          stringNotFoundDisplay: "\u672A\u627E\u5230\u5B57\u7B26\u4E32",
          occurrenceMismatchDisplay: "\u5339\u914D\u6B21\u6570\u4E0D\u5339\u914D",
          noChangeDisplay: "\u65E0\u9700\u66F4\u6539",
          fileNotFoundDisplay: "\u672A\u627E\u5230\u6587\u4EF6",
          readContentFailureDisplay: "\u8BFB\u53D6\u5185\u5BB9\u5931\u8D25",
          readContentFailure: "\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\u5931\u8D25\uFF1A{{error}}",
          fileAlreadyExistsDisplay: "\u6587\u4EF6\u5DF2\u5B58\u5728",
          noChangesRequiredDisplay: "\u65E0\u9700\u66F4\u6539",
          noChangesRequired: "\u7F16\u8F91\u65E0\u9700\u66F4\u6539",
          confirmationWithInvalidParams: "\u65E0\u6CD5\u4F7F\u7528\u65E0\u6548\u53C2\u6570\u786E\u8BA4\u7F16\u8F91",
          preparingEdit: "\u51C6\u5907\u7F16\u8F91\u65F6\u51FA\u9519\uFF1A{{error}}",
          errorDisplay: "\u9519\u8BEF\uFF1A{{error}}",
          invalidParameters: "\u65E0\u6548\u53C2\u6570\uFF1A{{reason}}",
          invalidParametersDisplay: "\u65E0\u6548\u53C2\u6570",
          filePathEmpty: "\u6587\u4EF6\u8DEF\u5F84\u4E0D\u80FD\u4E3A\u7A7A",
        },
        messages: {
          confirmEdit: "\u786E\u8BA4\u7F16\u8F91 {{path}}",
          invalidParams: "\u65E0\u6548\u53C2\u6570",
          invalidStringParams: "\u65E0\u6548\u5B57\u7B26\u4E32\u53C2\u6570",
          created: "\u5DF2\u521B\u5EFA {{path}}",
          newFileCreated: "\u65B0\u6587\u4EF6\u5DF2\u521B\u5EFA",
          fileModified: "\u6587\u4EF6\u5DF2\u4FEE\u6539",
          userModified: "\u7528\u6237\u5DF2\u4FEE\u6539",
        },
      },
      globTool: {
        errors: {
          pathNotInWorkspace:
            '\u641C\u7D22\u8DEF\u5F84\uFF08"{{path}}"\uFF09\u5728\u5141\u8BB8\u7684\u5DE5\u4F5C\u533A\u76EE\u5F55\u4E4B\u5916\uFF1A{{directories}}',
          pathNotInWorkspaceShort: "\u8DEF\u5F84\u4E0D\u5728\u5DE5\u4F5C\u533A\u5185",
          pathNotExist: "\u641C\u7D22\u8DEF\u5F84\u4E0D\u5B58\u5728 {{path}}",
          pathNotDirectory: "\u641C\u7D22\u8DEF\u5F84\u4E0D\u662F\u76EE\u5F55\uFF1A{{path}}",
          accessError: "\u8BBF\u95EE\u641C\u7D22\u8DEF\u5F84\u65F6\u51FA\u9519\uFF1A{{error}}",
          patternEmpty: "'pattern' \u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A",
          searchFailed: "\u5168\u5C40\u641C\u7D22\u64CD\u4F5C\u65F6\u51FA\u9519\uFF1A{{error}}",
          searchFailedShort: "\u9519\u8BEF\uFF1A\u53D1\u751F\u610F\u5916\u9519\u8BEF",
        },
        messages: {
          noFilesFound: '\u672A\u627E\u5230\u4E0E\u6A21\u5F0F "{{pattern}}" \u5339\u914D\u7684\u6587\u4EF6',
          noFilesFoundShort: "\u672A\u627E\u5230\u6587\u4EF6",
          filesFound: '\u627E\u5230 {{count}} \u4E2A\u4E0E\u6A21\u5F0F "{{pattern}}" \u5339\u914D\u7684\u6587\u4EF6',
          filesFoundShort: "\u627E\u5230 {{count}} \u4E2A\u5339\u914D\u6587\u4EF6",
        },
      },
      grepTool: {
        errors: {
          invalidPattern:
            "\u63D0\u4F9B\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u6A21\u5F0F\u65E0\u6548\uFF1A{{pattern}}\u3002\u9519\u8BEF\uFF1A{{error}}",
          pathValidationFailed:
            "\u8DEF\u5F84\u9A8C\u8BC1\u5931\u8D25\uFF1A\u5C1D\u8BD5\u8BBF\u95EE\u7684\u8DEF\u5F84\u201C{{path}}\u201D\u5728\u5141\u8BB8\u7684\u5DE5\u4F5C\u533A\u76EE\u5F55\u4E4B\u5916\uFF1A{{directories}}",
          invalidParameters:
            "\u9519\u8BEF\uFF1A\u63D0\u4F9B\u7684\u53C2\u6570\u65E0\u6548\u3002\u539F\u56E0\uFF1A{{reason}}",
          invalidParametersShort:
            "\u6A21\u578B\u63D0\u4F9B\u7684\u53C2\u6570\u65E0\u6548\u3002\u9519\u8BEF\uFF1A{{error}}",
          searchFailed: "\u6267\u884C grep \u641C\u7D22\u64CD\u4F5C\u65F6\u51FA\u9519\uFF1A{{error}}",
          searchFailedShort: "\u9519\u8BEF\uFF1A{{error}}",
          pathNotDirectory: "\u8DEF\u5F84\u4E0D\u662F\u76EE\u5F55\uFF1A{{path}}",
          pathNotExist: "\u8DEF\u5F84\u4E0D\u5B58\u5728\uFF1A{{path}}",
          pathAccessFailed:
            "\u8BBF\u95EE\u8DEF\u5F84 {{path}} \u7684\u7EDF\u8BA1\u4FE1\u606F\u5931\u8D25\uFF1A{{error}}",
        },
        messages: {
          noMatches: "\u672A\u627E\u5230\u4E0E\u6A21\u5F0F\u201C{{pattern}}\u201D\u5339\u914D\u7684\u7ED3\u679C",
          noMatchesShort: "\u672A\u627E\u5230\u5339\u914D\u7ED3\u679C",
          matchesFound:
            "\u5728 {{fileCount}} \u4E2A\u6587\u4EF6\u4E2D\u627E\u5230 {{count}} \u4E2A\u4E0E\u6A21\u5F0F\u201C{{pattern}}\u201D\u5339\u914D\u7684{{matchType}}",
          matchesFoundShort: "\u627E\u5230 {{count}} \u4E2A{{matchType}}",
        },
      },
      shellTool: {
        errors: {
          commandEmpty: "\u547D\u4EE4\u4E0D\u80FD\u4E3A\u7A7A",
          directoryAbsolute: "\u76EE\u5F55\u4E0D\u80FD\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF1A{{directory}}",
          commandFailed: "\u547D\u4EE4\u6267\u884C\u5931\u8D25\uFF1A{{error}}",
          executionFailed: "\u547D\u4EE4\u6267\u884C\u5931\u8D25",
          commandNotAllowed: "\u4E0D\u5141\u8BB8\u6267\u884C\u547D\u4EE4\uFF1A{{command}}",
          couldNotIdentifyCommand:
            "\u65E0\u6CD5\u8BC6\u522B\u547D\u4EE4\u6839\u4EE5\u83B7\u5F97\u7528\u6237\u8BB8\u53EF\u3002",
          directoryNotRegistered:
            "\u76EE\u5F55 '{{directory}}' \u4E0D\u662F\u5DF2\u6CE8\u518C\u7684\u5DE5\u4F5C\u533A\u76EE\u5F55\u3002",
          directoryAmbiguous:
            "\u76EE\u5F55\u540D\u79F0 '{{directory}' \u5177\u6709\u6B67\u4E49\uFF0C\u56E0\u4E3A\u5B83\u5339\u914D\u591A\u4E2A\u5DE5\u4F5C\u533A\u76EE\u5F55\u3002",
        },
        messages: {
          commandCancelled: "\u547D\u4EE4\u88AB\u7528\u6237\u53D6\u6D88",
          commandSuccess: "\u547D\u4EE4\u6267\u884C\u6210\u529F",
        },
      },
      multiEditTool: {
        errors: {
          pathNotAbsolute: "\u6587\u4EF6\u8DEF\u5F84\u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF1A{{filePath}}",
          pathNotInWorkspace:
            "\u6587\u4EF6\u8DEF\u5F84\u5FC5\u987B\u5728\u6839\u76EE\u5F55\uFF08{{targetDir}}\uFF09\u5185\uFF1A{{filePath}}",
          editNoChanges: "\u7F16\u8F91 {{editNumber}}\uFF1Aold_string \u548C new_string \u5FC5\u987B\u4E0D\u540C",
          fileNotFoundForEdit:
            "\u627E\u4E0D\u5230\u6587\u4EF6\uFF1A{{filePath}}\u3002\u4F7F\u7528\u7B2C\u4E00\u4E2A\u7F16\u8F91\u4E2D\u7684\u7A7A old_string \u6765\u521B\u5EFA\u65B0\u6587\u4EF6\u3002",
          editStringNotFound:
            "\u7F16\u8F91 {{editNumber}}\uFF1A\u627E\u4E0D\u5230\u8981\u66FF\u6362\u7684\u5B57\u7B26\u4E32",
          editFailed: "\u7F16\u8F91 {{editNumber}}\uFF1A{{error}}",
          validationError: "\u9A8C\u8BC1\u9519\u8BEF\uFF1A{{error}}",
          validationErrorShort: "\u9A8C\u8BC1\u9519\u8BEF\uFF1A{{error}}",
          calculationError: "\u8BA1\u7B97\u7F16\u8F91\u65F6\u51FA\u9519\uFF1A{{error}}",
          calculationErrorShort: "\u8BA1\u7B97\u7F16\u8F91\u65F6\u51FA\u9519\uFF1A{{error}}",
          multiEditFailed:
            "\u591A\u91CD\u7F16\u8F91\u5931\u8D25\uFF1A{{error}}\u3002\u672A\u5E94\u7528\u4EFB\u4F55\u66F4\u6539\u3002",
          multiEditFailedShort:
            "\u591A\u91CD\u7F16\u8F91\u5931\u8D25\uFF1A{{error}}\u3002\u672A\u5E94\u7528\u4EFB\u4F55\u66F4\u6539\u3002",
          executionError: "\u6267\u884C\u591A\u91CD\u7F16\u8F91\u65F6\u51FA\u9519\uFF1A{{error}}",
          fileWriteError: "\u5199\u5165\u6587\u4EF6\u65F6\u51FA\u9519\uFF1A{{error}}",
        },
        messages: {
          fileCreatedWithEdits:
            "\u521B\u5EFA\u4E86 {{path}} \u5E76\u5E94\u7528\u4E86 {{editCount}} \u4E2A\u989D\u5916\u7F16\u8F91",
          newFileCreated:
            "\u521B\u5EFA\u65B0\u6587\u4EF6\uFF1A{{filePath}} \u5E76\u5E94\u7528\u4E86 {{editCount}} \u4E2A\u7F16\u8F91\u3002",
          editsApplied: "\u6210\u529F\u5E94\u7528\u4E86 {{editCount}} \u4E2A\u7F16\u8F91\u5230 {{filePath}}\u3002",
          userModified: "\u7528\u6237\u4FEE\u6539\u4E86\u7F16\u8F91\u5185\u5BB9\u3002",
        },
      },
      readFileTool: {
        errors: {
          pathNotAbsolute:
            "\u6587\u4EF6\u8DEF\u5F84\u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u4F46\u63D0\u4F9B\u7684\u662F\u76F8\u5BF9\u8DEF\u5F84\uFF1A{{filePath}}\u3002\u60A8\u5FC5\u987B\u63D0\u4F9B\u7EDD\u5BF9\u8DEF\u5F84\u3002",
          pathNotInWorkspace:
            "\u6587\u4EF6\u8DEF\u5F84\u5FC5\u987B\u5728\u4EE5\u4E0B\u5DE5\u4F5C\u533A\u76EE\u5F55\u4E2D\uFF1A{{directories}}",
          offsetInvalid: "\u504F\u79FB\u91CF\u5FC5\u987B\u662F\u975E\u8D1F\u6570",
          limitInvalid: "\u9650\u5236\u6570\u91CF\u5FC5\u987B\u662F\u6B63\u6570",
          fileIgnored: '\u6587\u4EF6\u8DEF\u5F84 "{{filePath}}" \u88AB .iflowignore \u6A21\u5F0F\u5FFD\u7565\u3002',
          pathUnavailable: "\u8DEF\u5F84\u4E0D\u53EF\u7528",
          invalidParameters:
            "\u9519\u8BEF\uFF1A\u63D0\u4F9B\u7684\u53C2\u6570\u65E0\u6548\u3002\u539F\u56E0\uFF1A{{reason}}",
          readError: "\u8BFB\u53D6\u6587\u4EF6\u65F6\u51FA\u9519",
        },
      },
      imageReadTool: {
        errors: {
          pathNotAbsolute:
            "\u6587\u4EF6\u8DEF\u5F84\u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u4F46\u63D0\u4F9B\u7684\u662F\u76F8\u5BF9\u8DEF\u5F84\uFF1A{{filePath}}\u3002\u60A8\u5FC5\u987B\u63D0\u4F9B\u7EDD\u5BF9\u8DEF\u5F84\u3002",
          pathNotInWorkspace:
            "\u6587\u4EF6\u8DEF\u5F84\u5FC5\u987B\u5728\u4EE5\u4E0B\u5DE5\u4F5C\u533A\u76EE\u5F55\u4E2D\uFF1A{{directories}}",
          fileNotFound: "\u6587\u4EF6\u4E0D\u5B58\u5728\uFF1A{{filePath}}",
          notImageFile: "\u6587\u4EF6\u4E0D\u662F\u652F\u6301\u7684\u56FE\u7247\u683C\u5F0F\uFF1A{{filePath}}",
          emptyBase64: "base64\u6570\u636E\u4E0D\u80FD\u4E3A\u7A7A",
          invalidBase64: "base64\u6570\u636E\u683C\u5F0F\u65E0\u6548",
          invalidMimeType:
            'MIME\u7C7B\u578B\u65E0\u6548\uFF1A{{mimeType}}\uFF0C\u5FC5\u987B\u662F\u4EE5"image/"\u5F00\u5934\u7684\u56FE\u7247\u7C7B\u578B',
          multimodalHelperUnavailable:
            "\u591A\u6A21\u6001\u52A9\u624B\u4E0D\u53EF\u7528\uFF0C\u65E0\u6CD5\u751F\u6210\u56FE\u7247\u63CF\u8FF0",
          invalidParameters:
            "\u9519\u8BEF\uFF1A\u63D0\u4F9B\u7684\u53C2\u6570\u65E0\u6548\u3002\u539F\u56E0\uFF1A{{reason}}",
          executionError: "\u6267\u884C\u9519\u8BEF\uFF1A{{error}}",
          executionErrorShort: "\u56FE\u7247\u8BFB\u53D6\u9519\u8BEF",
          inputUnavailable: "\u8F93\u5165\u4E0D\u53EF\u7528",
        },
        description: { base64Image: "base64\u7F16\u7801\u7684\u56FE\u7247" },
      },
      webFetchTool: {
        errors: {
          noUrlFoundFallback:
            "\u9519\u8BEF\uFF1A\u5728\u5907\u7528\u65B9\u6848\u7684\u63D0\u793A\u4E2D\u672A\u627E\u5230 URL\u3002",
          fallbackError: "\u9519\u8BEF\uFF1A{{error}}",
          promptEmpty:
            "'prompt' \u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u5FC5\u987B\u5305\u542B URL \u548C\u6307\u4EE4\u3002",
          noValidUrl:
            "\u201Curl\u201D\u5FC5\u987B\u662F\u6709\u6548\u7684 URL\uFF08\u4EE5 http:// \u6216 https:// \u5F00\u5934\uFF09\u3002",
          executionError: "\u9519\u8BEF\uFF1A{{error}}",
        },
        messages: {
          contentProcessedFallback:
            "\u4F7F\u7528\u5907\u7528\u83B7\u53D6\u65B9\u5F0F\u5904\u7406\u4E86 {{url}} \u7684\u5185\u5BB9\u3002",
          contentProcessed: "\u5DF2\u4ECE\u63D0\u793A\u4E2D\u5904\u7406\u5185\u5BB9\u3002",
        },
      },
      todoReadTool: {
        messages: {
          readingTodoList: "\u6B63\u5728\u8BFB\u53D6\u5F53\u524D\u5F85\u529E\u4E8B\u9879\u5217\u8868",
          todoListEmpty: "\u5F85\u529E\u4E8B\u9879\u5217\u8868\u5F53\u524D\u4E3A\u7A7A\u3002",
          currentTodos: `\xB7\u5F53\u524D\u5F85\u529E\u4E8B\u9879
  \u23BF\uFF08\u65E0\u5F85\u529E\u4E8B\u9879\uFF09`,
          todosFound:
            "\u627E\u5230 {{count}} \u4E2A\u5F85\u529E\u4E8B\u9879\uFF1A{{pending}} \u4E2A\u5F85\u5904\u7406\uFF0C{{inProgress}} \u4E2A\u8FDB\u884C\u4E2D\uFF0C{{completed}} \u4E2A\u5DF2\u5B8C\u6210\u3002",
        },
      },
      memoryTool: {
        errors: {
          factRequired: "\u53C2\u6570\u201Cfact\u201D\u5FC5\u987B\u662F\u975E\u7A7A\u5B57\u7B26\u4E32\u3002",
          savingError: "\u4FDD\u5B58\u5185\u5B58\u65F6\u51FA\u9519\uFF1A{{error}}",
        },
        messages: {
          fileUpdated:
            "\u597D\u7684\uFF0C\u6211\u5DF2\u7ECF\u4F7F\u7528\u60A8\u7684\u4FEE\u6539\u66F4\u65B0\u4E86\u5185\u5B58\u6587\u4EF6\u3002",
          factRemembered: "\u597D\u7684\uFF0C\u6211\u5DF2\u7ECF\u8BB0\u4F4F\u4E86\uFF1A\u201C{{fact}}\u201D",
        },
      },
      readManyFilesTool: {
        errors: {
          noSearchPaths: "\u672A\u63D0\u4F9B\u641C\u7D22\u8DEF\u5F84\u6216\u5305\u542B\u6A21\u5F0F\u3002",
          noSearchPathsInfo: `## \u4FE1\u606F

\u672A\u6307\u5B9A\u641C\u7D22\u8DEF\u5F84\u6216\u5305\u542B\u6A21\u5F0F\u3002\u65E0\u5185\u5BB9\u53EF\u8BFB\u53D6\u6216\u8FDE\u63A5\u3002`,
          invalidParameters:
            "\u9519\u8BEF\uFF1A{{toolName}} \u7684\u53C2\u6570\u65E0\u6548\u3002\u539F\u56E0\uFF1A{{reason}}",
          parameterError: `## \u53C2\u6570\u9519\u8BEF

{{error}}`,
          searchError: "\u6587\u4EF6\u641C\u7D22\u65F6\u51FA\u9519\uFF1A{{error}}",
          searchErrorInfo:
            "## \u6587\u4EF6\u641C\u7D22\u9519\u8BEF\n\n\u641C\u7D22\u6587\u4EF6\u65F6\u53D1\u751F\u9519\u8BEF\uFF1A\n```\n{{error}}\n```",
        },
        messages: {
          resultHeader: "ReadManyFiles \u7ED3\u679C\uFF08\u76EE\u6807\u76EE\u5F55\uFF1A`{{targetDir}}`\uFF09",
          filesReadSuccess:
            "\u6210\u529F\u8BFB\u53D6\u5E76\u8FDE\u63A5\u4E86 **{{count}} \u4E2A\u6587\u4EF6** \u7684\u5185\u5BB9\u3002",
          processedFiles: "\u5DF2\u5904\u7406\u7684\u6587\u4EF6\uFF1A",
          processedFilesLimited: "\u5DF2\u5904\u7406\u7684\u6587\u4EF6\uFF08\u663E\u793A\u524D 10 \u4E2A\uFF09\uFF1A",
          andMore: "\u2026\u8FD8\u6709 {{count}} \u4E2A\u3002",
          noFilesRead: "\u6839\u636E\u6761\u4EF6\u672A\u8BFB\u53D6\u548C\u8FDE\u63A5\u4EFB\u4F55\u6587\u4EF6\u3002",
          skippedItems: "\u5DF2\u8DF3\u8FC7 {{count}} \u4E2A\u9879\u76EE\uFF1A",
          skippedItemsLimited:
            "\u5DF2\u8DF3\u8FC7 {{count}} \u4E2A\u9879\u76EE\uFF08\u663E\u793A\u524D 5 \u4E2A\uFF09\uFF1A",
          noMatchingFiles:
            "\u672A\u627E\u5230\u7B26\u5408\u6761\u4EF6\u7684\u6587\u4EF6\u6216\u5168\u90E8\u88AB\u8DF3\u8FC7\u3002",
          usingPatterns:
            "\u4F7F\u7528\u6A21\u5F0F\uFF1A{{patterns}}\uFF08\u76EE\u6807\u76EE\u5F55\uFF1A{{targetDir}}\uFF09",
          willAttemptToRead:
            '\u5C06\u5C1D\u8BD5\u8BFB\u53D6\u5E76\u8FDE\u63A5\u6587\u4EF6 {{pathDesc}}\u3002{{excludeDesc}}\u3002\u6587\u4EF6\u7F16\u7801\uFF1A{{encoding}}\u3002\u5206\u9694\u7B26\uFF1A"{{separator}}"\u3002',
          excluding: "\u6392\u9664\uFF1A{{patterns}}",
          patternsLike: "\u7C7B\u4F3C {{patterns}} \u7684\u6A21\u5F0F",
          noneSpecified: "\u672A\u6307\u5B9A",
          includesFromGeminiIgnore: "\u5305\u542B\u6765\u81EA .iflowignore \u7684 {{count}} \u4E2A",
        },
      },
      exitPlanModeTool: {
        errors: {
          planRequired: '\u53C2\u6570"plan"\u5FC5\u987B\u662F\u975E\u7A7A\u5B57\u7B26\u4E32\u3002',
          validationError: "\u9A8C\u8BC1\u9519\u8BEF\uFF1A{{error}}",
          executionError: "\u6267\u884C\u9519\u8BEF\uFF1A{{error}}",
        },
        messages: {
          readyToCode: "\u51C6\u5907\u5F00\u59CB\u7F16\u5199\u4EE3\u7801\uFF0C\u8BA1\u5212\uFF1A{{plan}}",
          exitPlanMode: "\u9000\u51FA\u8BA1\u5212\u6A21\u5F0F",
        },
      },
      askUserQuestionTool: {
        errors: {
          questionsRequired: '\u53C2\u6570 "questions" \u5FC5\u987B\u662F\u975E\u7A7A\u6570\u7EC4\u3002',
          questionsCount: "\u5FC5\u987B\u63D0\u4F9B 1 \u5230 4 \u4E2A\u95EE\u9898\u3002",
          invalidQuestion:
            '\u7D22\u5F15 {{index}} \u5904\u7684\u95EE\u9898\u5FC5\u987B\u6709\u6709\u6548\u7684 "question" \u5B57\u7B26\u4E32\u3002',
          invalidHeader:
            '\u7D22\u5F15 {{index}} \u5904\u7684\u95EE\u9898\u5FC5\u987B\u6709\u6709\u6548\u7684 "header" \u5B57\u7B26\u4E32\u3002',
          headerTooLong:
            "\u7D22\u5F15 {{index}} \u5904\u7684\u6807\u9898\u5FC5\u987B\u662F 12 \u4E2A\u5B57\u7B26\u6216\u66F4\u5C11\u3002",
          invalidOptions:
            '\u7D22\u5F15 {{index}} \u5904\u7684\u95EE\u9898\u5FC5\u987B\u6709\u6709\u6548\u7684 "options" \u6570\u7EC4\u3002',
          optionsCount:
            "\u7D22\u5F15 {{index}} \u5904\u7684\u95EE\u9898\u5FC5\u987B\u6709 2 \u5230 4 \u4E2A\u9009\u9879\u3002",
          invalidOptionLabel:
            '\u95EE\u9898 {{questionIndex}} \u4E2D\u7684\u9009\u9879 {{optionIndex}} \u5FC5\u987B\u6709\u6709\u6548\u7684 "label" \u5B57\u7B26\u4E32\u3002',
          invalidOptionDescription:
            '\u95EE\u9898 {{questionIndex}} \u4E2D\u7684\u9009\u9879 {{optionIndex}} \u5FC5\u987B\u6709\u6709\u6548\u7684 "description" \u5B57\u7B26\u4E32\u3002',
          invalidMultiSelect:
            '\u7D22\u5F15 {{index}} \u5904\u7684\u95EE\u9898\u5FC5\u987B\u6709\u6709\u6548\u7684 "multiSelect" \u5E03\u5C14\u503C\u3002',
          noAnswers: "\u7528\u6237\u6CA1\u6709\u63D0\u4F9B\u4EFB\u4F55\u7B54\u6848\u3002",
          validationError: "\u9A8C\u8BC1\u9519\u8BEF\uFF1A{{error}}",
          executionError: "\u6267\u884C\u9519\u8BEF\uFF1A{{error}}",
        },
        messages: {
          confirmTitle: "\u8BF7\u56DE\u7B54\u4EE5\u4E0B\u95EE\u9898",
          askingQuestions: "\u6B63\u5728\u8BE2\u95EE {{count}} \u4E2A\u95EE\u9898",
          answersReceived: "\u7528\u6237\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u7B54\u6848\uFF1A",
          noAnswer: "\u672A\u56DE\u7B54",
          summary: "\u5DF2\u8BE2\u95EE {{count}} \u4E2A\u95EE\u9898",
        },
      },
      mcpTool: {
        messages: {
          confirmExecution: "\u786E\u8BA4 MCP \u5DE5\u5177\u6267\u884C",
          mediaDataProvided:
            "[\u5DE5\u5177 '{{toolName}}' \u63D0\u4F9B\u4E86\u4EE5\u4E0B {{type}} \u6570\u636E\uFF0CMIME \u7C7B\u578B\uFF1A{{mimeType}}]",
          embeddedResourceProvided:
            "[\u5DE5\u5177 '{{toolName}}' \u63D0\u4F9B\u4E86\u4EE5\u4E0B\u5D4C\u5165\u5F0F\u8D44\u6E90\uFF0CMIME \u7C7B\u578B\uFF1A{{mimeType}}]",
          resourceLink: "\u8D44\u6E90\u94FE\u63A5\uFF1A{{title}} \u4F4D\u4E8E {{uri}}",
        },
        errors: {
          toolReportedError:
            "\u9519\u8BEF\uFF1AMCP \u5DE5\u5177 '{{toolName}}' \u62A5\u544A\u4E86\u4E00\u4E2A\u9519\u8BEF\u3002",
          parseResponseFailed: "[\u9519\u8BEF\uFF1A\u65E0\u6CD5\u89E3\u6790\u5DE5\u5177\u54CD\u5E94]",
        },
        display: {
          image: "[\u56FE\u7247\uFF1A{{mimeType}}]",
          audio: "[\u97F3\u9891\uFF1A{{mimeType}}]",
          resourceLink: "[\u94FE\u63A5\u5230 {{title}}\uFF1A{{uri}}]",
          embeddedResource: "[\u5D4C\u5165\u5F0F\u8D44\u6E90\uFF1A{{mimeType}}]",
          unknownType: "\u672A\u77E5\u7C7B\u578B",
          unknownContentType: "[\u672A\u77E5\u5185\u5BB9\u7C7B\u578B\uFF1A{{type}}]",
        },
      },
      mcpClient: {
        errors: {
          clientNotConnected: "\u5BA2\u6237\u7AEF\u672A\u8FDE\u63A5\u3002",
          noPromptsOrTools: "\u670D\u52A1\u5668\u4E0A\u672A\u627E\u5230\u63D0\u793A\u6216\u5DE5\u5177\u3002",
          failedToParseCommand: "\u65E0\u6CD5\u89E3\u6790 mcpServerCommand\uFF1A{{cmd}}",
          cannotConnect:
            "\u65E0\u6CD5\u8FDE\u63A5\u5230 '{{serverName}}' - \u670D\u52A1\u5668\u53EF\u80FD\u5DF2\u505C\u6B62\u6216 URL \u4E0D\u6B63\u786E",
          connectionFailed: "'{{serverName}}' \u8FDE\u63A5\u5931\u8D25\uFF1A{{error}}",
          checkSandbox: "\u68C0\u67E5\u6C99\u76D2\u53EF\u7528\u6027",
          noUrlConfigured: "\u672A\u4E3A Google \u51ED\u636E MCP \u670D\u52A1\u5668\u914D\u7F6E URL",
          httpTransportRequiresUrl: "HTTP \u4F20\u8F93\u9700\u8981 'httpUrl' \u6216 'url' \u5B57\u6BB5",
          stdioTransportRequiresCommand: "Stdio \u4F20\u8F93\u9700\u8981 'command' \u5B57\u6BB5",
          invalidConfiguration:
            "\u65E0\u6548\u914D\u7F6E\uFF1A\u7F3A\u5C11 httpUrl\uFF08\u7528\u4E8E Streamable HTTP\uFF09\u3001url\uFF08\u7528\u4E8E SSE\uFF09\u548C command\uFF08\u7528\u4E8E stdio\uFF09\u3002",
        },
      },
      ripgrepTool: {
        errors: {
          pathValidationFailed:
            "\u8DEF\u5F84\u9A8C\u8BC1\u5931\u8D25\uFF1A\u5C1D\u8BD5\u8BBF\u95EE\u7684\u8DEF\u5F84\u201C{{path}}\u201D\u5728\u5141\u8BB8\u7684\u5DE5\u4F5C\u533A\u76EE\u5F55\u4E4B\u5916\uFF1A{{directories}}",
          pathNotDirectory: "\u8DEF\u5F84\u4E0D\u662F\u76EE\u5F55\uFF1A{{path}}",
          pathNotExist: "\u8DEF\u5F84\u4E0D\u5B58\u5728\uFF1A{{path}}",
          pathAccessFailed: "\u65E0\u6CD5\u8BBF\u95EE {{path}} \u7684\u8DEF\u5F84\u72B6\u6001\uFF1A{{error}}",
          searchFailed: "ripgrep \u641C\u7D22\u64CD\u4F5C\u65F6\u51FA\u9519\uFF1A{{error}}",
          searchFailedShort: "\u9519\u8BEF\uFF1A{{error}}",
          failedToStart: "\u65E0\u6CD5\u542F\u52A8 ripgrep\uFF1A{{error}}",
          ripgrepExited: "ripgrep \u4EE5\u9519\u8BEF\u4EE3\u7801 {{code}} \u9000\u51FA\uFF1A{{stderr}}",
        },
        messages: {
          noMatchesFound:
            "\u672A\u627E\u5230\u4E0E\u6A21\u5F0F\u201C{{pattern}}\u201D\u5339\u914D\u7684\u7ED3\u679C {{location}}{{filter}}\u3002",
          noMatchesFoundShort: "\u672A\u627E\u5230\u5339\u914D\u7ED3\u679C",
          matchesFound:
            "\u627E\u5230 {{count}} \u4E2A\u4E0E\u6A21\u5F0F\u201C{{pattern}}\u201D\u5339\u914D\u7684{{matchType}} {{location}}{{filter}}",
          foundMatches: "\u627E\u5230 {{count}} \u4E2A{{matchType}}",
          match: "\u5339\u914D",
          matches: "\u5339\u914D",
          filter: "\u8FC7\u6EE4\u5668",
          resultsLimited:
            "\u7ED3\u679C\u9650\u5236\u4E3A {{maxMatches}} \u4E2A\u5339\u914D\u9879\u4EE5\u63D0\u9AD8\u6027\u80FD",
          limited: "\u9650\u5236",
        },
      },
      taskTool: {
        messages: {
          taskAborted: "\u4EFB\u52A1\u5DF2\u4E2D\u6B62",
          taskAbortedByUser: "\u4EFB\u52A1\u88AB\u7528\u6237\u4E2D\u6B62\u3002",
          taskExecutionCancelled: "\u4EFB\u52A1\u6267\u884C\u5DF2\u53D6\u6D88\u3002",
          completedTask: "\u5DF2\u5B8C\u6210\u4EFB\u52A1\uFF1A{{description}}",
        },
      },
      toolRegistry: {
        warnings: {
          toolAlreadyRegistered:
            "\u540D\u4E3A\u201C{{toolName}}\u201D\u7684\u5DE5\u5177\u5DF2\u6CE8\u518C\u3002\u6B63\u5728\u8986\u76D6\u3002",
          toolWithNoName: "\u53D1\u73B0\u4E00\u4E2A\u6CA1\u6709\u540D\u79F0\u7684\u5DE5\u5177\u3002\u8DF3\u8FC7\u3002",
        },
        errors: {
          emptyDiscoveryCommand:
            "\u5DE5\u5177\u53D1\u73B0\u547D\u4EE4\u4E3A\u7A7A\u6216\u4EC5\u5305\u542B\u7A7A\u767D\u5B57\u7B26\u3002",
          outputSizeLimitExceeded:
            "\u5DE5\u5177\u53D1\u73B0\u547D\u4EE4\u8F93\u51FA\u8D85\u8FC7\u4E86 {{maxSize}} \u5B57\u8282\u7684\u5927\u5C0F\u9650\u5236\u3002",
          commandFailedWithCode: "\u547D\u4EE4\u4EE5\u9519\u8BEF\u4EE3\u7801 {{code}} \u5931\u8D25",
          discoveryCommandFailed:
            "\u5DE5\u5177\u53D1\u73B0\u547D\u4EE4\u4EE5\u9000\u51FA\u4EE3\u7801 {{code}} \u5931\u8D25",
          invalidDiscoveryOutput:
            "\u5DE5\u5177\u53D1\u73B0\u547D\u4EE4\u672A\u8FD4\u56DE JSON \u5DE5\u5177\u6570\u7EC4\u3002",
          discoveryCommandError: "\u5DE5\u5177\u53D1\u73B0\u547D\u4EE4\u201C{{cmd}}\u201D\u5931\u8D25\uFF1A",
        },
      },
      websocketClient: {
        errors: {
          transportClosed: "\u4F20\u8F93\u5DF2\u5173\u95ED",
          unauthorizedOAuth: "\u672A\u6388\u6743\uFF1A\u9700\u8981 OAuth",
          noAuthProvider: "\u672A\u914D\u7F6E\u8EAB\u4EFD\u9A8C\u8BC1\u63D0\u4F9B\u7A0B\u5E8F",
          clientInfoNotAvailable: "\u5BA2\u6237\u7AEF\u4FE1\u606F\u4E0D\u53EF\u7528",
          transportNotStarted: "\u4F20\u8F93\u672A\u542F\u52A8",
          websocketNotOpen: "WebSocket \u672A\u6253\u5F00",
        },
      },
      xinliuWebFetch: {
        errors: {
          noUrlFoundFallback: "\u9519\u8BEF\uFF1A\u672A\u63D0\u4F9B\u7528\u4E8E\u56DE\u9000\u7684 URL\u3002",
          noUrlFound: "\u9519\u8BEF\uFF1A\u672A\u63D0\u4F9B URL\u3002",
          promptEmpty: "\u201Cprompt\u201D\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A\u3002",
          noValidUrl:
            "\u201Curl\u201D\u5FC5\u987B\u662F\u6709\u6548\u7684 URL\uFF08\u4EE5 http:// \u6216 https:// \u5F00\u5934\uFF09\u3002",
          invalidParameters:
            "\u9519\u8BEF\uFF1A\u63D0\u4F9B\u7684\u53C2\u6570\u65E0\u6548\u3002\u539F\u56E0\uFF1A{{reason}}",
        },
        messages: {
          contentProcessedFallback:
            "{{url}} \u7684\u5185\u5BB9\u5DF2\u4F7F\u7528\u5907\u7528\u83B7\u53D6\u65B9\u5F0F\u5904\u7406\u3002",
          contentProcessedProxy: "\u5DF2\u5904\u7406 {{url}} \u7684\u5185\u5BB9\u3002",
          contentProcessedSuccess: "\u5185\u5BB9\u5904\u7406\u6210\u529F",
        },
      },
      xinliuWebSearch: {
        errors: {
          invalidParameters:
            "\u9519\u8BEF\uFF1A\u63D0\u4F9B\u7684\u53C2\u6570\u65E0\u6548\u3002\u539F\u56E0\uFF1A{{reason}}",
          authNotSupported:
            "\u9519\u8BEF\uFF1A\u641C\u7D22\u529F\u80FD\u4EC5\u652F\u6301 iFlow \u767B\u5F55\u3002\u5F53\u524D\u8EAB\u4EFD\u9A8C\u8BC1\u6A21\u5F0F\u4E0D\u652F\u6301\u6B64\u529F\u80FD\u3002",
          searchFailed: "\u9519\u8BEF\uFF1A{{error}}",
          searchFailedShort: "\u6267\u884C\u7F51\u7EDC\u641C\u7D22\u65F6\u51FA\u9519\u3002",
          intentCannotBeEmpty: "'intent' \u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A\u3002",
          expectedCannotBeEmpty: "'expected' \u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A\u3002",
          queryCannotBeEmpty: "'query' \u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A\u3002",
        },
        messages: {
          searchingWeb: '\u641C\u7D22\u7F51\u7EDC\uFF1A"{{query}}"',
          noResults: '\u672A\u627E\u5230\u67E5\u8BE2 "{{query}}" \u7684\u641C\u7D22\u7ED3\u679C\u6216\u4FE1\u606F',
          noResultsShort: "\u672A\u627E\u5230\u4FE1\u606F\u3002",
          searchResults: `"{{query}}" \u7684\u7F51\u7EDC\u641C\u7D22\u7ED3\u679C\uFF1A
{{results}}`,
          searchResultsReturned: '\u5DF2\u8FD4\u56DE "{{query}}" \u7684\u641C\u7D22\u7ED3\u679C\u3002',
        },
      },
      modifiableTool: {
        errors: { deleteTempFile: "\u5220\u9664\u4E34\u65F6\u5DEE\u5F02\u6587\u4EF6\u65F6\u51FA\u9519\uFF1A{{path}}" },
      },
      openaiContentGenerator: {
        errors: {
          failedWriteDebugLog: "\u5199\u5165\u8C03\u8BD5\u65E5\u5FD7\u5931\u8D25\uFF1A",
          contextLengthExceeded:
            "\u60A8\u7684\u8F93\u5165\u8D85\u8FC7\u4E86\u6A21\u578B\u7684\u4E0A\u4E0B\u6587\u957F\u5EA6\u3002\u8BF7\u68C0\u67E5 IFLOW.md \u6216\u60A8\u7684\u8F93\u5165\u662F\u5426\u8FC7\u957F\uFF0C\u7136\u540E\u8FD0\u884C /clear \u91CD\u65B0\u63D0\u95EE\u3002",
          httpError:
            "HTTP \u9519\u8BEF\uFF01\u72B6\u6001\uFF1A{{status}}\uFF0C\u54CD\u5E94\uFF1A{{body}} TraceID\uFF1A{{traceId}}",
          responseFormatError: "\u54CD\u5E94\u683C\u5F0F\u9519\u8BEF\u3002TraceID\uFF1A{{traceId}}",
          fetchError: "\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5.",
          contentLengthExceed:
            "\u5185\u5BB9\u957F\u5EA6\u8D85\u51FA\u5927\u8BED\u8A00\u6A21\u578B\u9650\u5236\u3002TraceID\uFF1A{{traceId}}",
          modelError: "\u6A21\u578B\u9519\u8BEF TraceID: {{traceId}}",
          apiTokenExpired:
            "API Token \u5DF2\u8FC7\u671F\u3002API Token \u6709\u6548\u671F\u4E3A 7 \u5929\u3002\u60A8\u53EF\u4EE5\u5728 https://platform.iflow.cn/docs/api-key-management \u91CD\u7F6E\u60A8\u7684 token\u3002",
          invalidApiKey: "\u63D0\u4F9B\u7684 API \u5BC6\u94A5\u65E0\u6548",
          modelNotSupport:
            "\u5FC3\u6D41\u4E0D\u652F\u6301\u5F53\u524D\u6A21\u578B\uFF0C\u8BF7\u66F4\u6362\u6A21\u578B\u540E\u91CD\u8BD5\u3002",
          modelRateLimitReached:
            "\u5F53\u524D\u6A21\u578B\u5DF2\u8FBE\u5230\u5E73\u53F0\u901F\u7387\u9650\u5236\uFF0C\u7CFB\u7EDF\u5C06\u91CD\u8BD5\u8BF7\u6C42\uFF0C\u5982\u679C\u9891\u7E41\u62A5\u9519\u8BF7\u5207\u6362\u5176\u4ED6\u6A21\u578B\u4F7F\u7528",
          rateLimitReached:
            "\u60A8\u5F53\u524D\u7684\u8D26\u53F7\u5DF2\u8FBE\u5230\u5E73\u53F0\u5E76\u53D1\u9650\u5236\uFF0C\u7CFB\u7EDF\u5C06\u91CD\u8BD5\u8BF7\u6C42\uFF0C\u8BF7\u63A7\u5236\u5355\u5E76\u53D1\u4F7F\u7528",
          userCancel: "\u7528\u6237\u53D6\u6D88",
          invalidResponseFormat:
            "OpenAI \u54CD\u5E94\u683C\u5F0F\u65E0\u6548 - \u7F3A\u5C11\u6216\u7A7A\u7684 choices \u6570\u7EC4\u3002TraceID\uFF1A{{traceId}}",
          apiKeyError:
            "API \u5BC6\u94A5\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u60A8\u7684 API \u5BC6\u94A5\u662F\u5426\u6B63\u786E\u6216\u4F7F\u7528 /auth \u91CD\u65B0\u767B\u5F55",
          generateDataError: "\u751F\u6210\u6570\u636E\u9519\u8BEF: {{error}}",
          imageDataMissing: "\u56FE\u50CF\u6570\u636E\u7F3A\u5931",
          imageContentCannotParse: "\u65E0\u6CD5\u89E3\u6790\u56FE\u50CF\u5185\u5BB9\uFF1A{{error}}",
          embedContentFailed: "\u5D4C\u5165\u5185\u5BB9\u5931\u8D25\uFF1A{{error}}",
          generateContentStreamFailed: "\u751F\u6210\u5185\u5BB9\u6D41\u5931\u8D25\uFF1A{{error}}",
        },
        messages: { toolNotExecuted: "\u5DE5\u5177\u672A\u6267\u884C" },
      },
      extensionsCommand: {
        noActiveExtensions: "\u6CA1\u6709\u6FC0\u6D3B\u7684\u6269\u5C55\u3002",
        activeExtensions: "\u6FC0\u6D3B\u7684\u6269\u5C55",
      },
      statsCommand: {
        sessionStartUnavailable: "\u4F1A\u8BDD\u5F00\u59CB\u65F6\u95F4\u4E0D\u53EF\u7528\u3002",
        subCommands: {
          model: "\u663E\u793A\u6A21\u578B\u4F7F\u7528\u7EDF\u8BA1",
          tools: "\u663E\u793A\u5DE5\u5177\u4F7F\u7528\u7EDF\u8BA1",
        },
      },
      toolsCommand: {
        couldNotRetrieveRegistry: "\u65E0\u6CD5\u83B7\u53D6\u5DE5\u5177\u6CE8\u518C\u8868\u3002",
        availableTools: "\u53EF\u7528\u7684 iFlow CLI \u5DE5\u5177\uFF1A",
        noToolsAvailable: "\u65E0\u53EF\u7528\u5DE5\u5177",
      },
      copyCommand: {
        noOutputInHistory: "\u5386\u53F2\u8BB0\u5F55\u4E2D\u65E0\u8F93\u51FA",
        lastOutputCopied: "\u4E0A\u6B21\u8F93\u51FA\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F",
        failedToCopy: "\u590D\u5236\u5230\u526A\u8D34\u677F\u5931\u8D25\u3002",
        noTextToCopy: "\u6700\u540E\u7684 AI \u8F93\u51FA\u4E0D\u5305\u542B\u53EF\u590D\u5236\u7684\u6587\u672C\u3002",
      },
      clearCommand: {
        clearingTerminalAndResetChat: "\u6B63\u5728\u6E05\u9664\u7EC8\u7AEF\u5E76\u91CD\u7F6E\u5BF9\u8BDD\u3002",
        clearingTerminal: "\u6B63\u5728\u6E05\u9664\u7EC8\u7AEF\u3002",
      },
      memoryCommand: {
        subCommands: {
          show: "\u663E\u793A\u5F53\u524D\u5185\u5B58\u5185\u5BB9\u3002",
          add: "\u5411\u5185\u5B58\u6DFB\u52A0\u5185\u5BB9\u3002",
          refresh: "\u4ECE\u6E90\u5237\u65B0\u5185\u5B58\u3002",
          list: "\u5217\u51FA\u6240\u6709\u5185\u5B58\u6587\u4EF6\u3002",
        },
        currentMemoryContent: `\u6765\u81EA {{fileCount}} \u4E2A\u6587\u4EF6\u7684\u5F53\u524D\u5185\u5B58\u5185\u5BB9\uFF1A

---
{{memoryContent}}
---`,
        memoryIsEmpty: "\u5185\u5B58\u5F53\u524D\u4E3A\u7A7A\u3002",
        usageAdd: "\u7528\u6CD5\uFF1A/memory add <\u8981\u8BB0\u4F4F\u7684\u6587\u672C>",
        attemptingToSave: '\u6B63\u5728\u5C1D\u8BD5\u4FDD\u5B58\u5230\u5185\u5B58\uFF1A"{{text}}"',
        refreshingMemory: "\u6B63\u5728\u4ECE\u6E90\u6587\u4EF6\u5237\u65B0\u5185\u5B58...",
        memoryRefreshedWithContent:
          "\u5185\u5B58\u5237\u65B0\u6210\u529F\u3002\u4ECE {{fileCount}} \u4E2A\u6587\u4EF6\u52A0\u8F7D\u4E86 {{characters}} \u4E2A\u5B57\u7B26\u3002",
        memoryRefreshedNoContent:
          "\u5185\u5B58\u5237\u65B0\u6210\u529F\u3002\u672A\u627E\u5230\u5185\u5B58\u5185\u5BB9\u3002",
        errorRefreshing: "\u5237\u65B0\u5185\u5B58\u65F6\u51FA\u9519\uFF1A{{error}}",
        currentMemoryList: `\u5F53\u524D\u5185\u5B58\u6587\u4EF6\uFF08{{fileCount}}\u4E2A\uFF09\uFF1A

{{splitedFilePaths}}`,
        listIsEmpty: "\u672A\u627E\u5230\u5185\u5B58\u6587\u4EF6\u3002",
      },
      restoreCommand: {
        description:
          "\u6062\u590D\u5DE5\u5177\u8C03\u7528\u3002\u8FD9\u5C06\u91CD\u7F6E\u5BF9\u8BDD\u548C\u6587\u4EF6\u5386\u53F2\u8BB0\u5F55\u5230\u5EFA\u8BAE\u5DE5\u5177\u8C03\u7528\u65F6\u7684\u72B6\u6001",
        couldNotDeterminePath: "\u65E0\u6CD5\u786E\u5B9A .iflow \u76EE\u5F55\u8DEF\u5F84\u3002",
        noRestorableCallsFound: "\u672A\u627E\u5230\u53EF\u6062\u590D\u7684\u5DE5\u5177\u8C03\u7528\u3002",
        availableToolCallsTitle: "\u53EF\u6062\u590D\u7684\u5DE5\u5177\u8C03\u7528\uFF1A",
        availableToolCalls: `\u53EF\u6062\u590D\u7684\u5DE5\u5177\u8C03\u7528\uFF1A

{{fileList}}`,
        fileNotFound: "\u6587\u4EF6\u672A\u627E\u5230\uFF1A{{file}}",
        loadHistoryNotAvailable: "loadHistory \u51FD\u6570\u4E0D\u53EF\u7528\u3002",
        restoredProjectState:
          "\u5DF2\u5C06\u9879\u76EE\u6062\u590D\u5230\u5DE5\u5177\u8C03\u7528\u524D\u7684\u72B6\u6001\u3002",
        couldNotReadError:
          "\u65E0\u6CD5\u8BFB\u53D6\u53EF\u6062\u590D\u7684\u5DE5\u5177\u8C03\u7528\u3002\u9519\u8BEF\u4FE1\u606F\uFF1A{{error}}",
        noUserPromptRecord: "(\u65E0\u7528\u6237\u63D0\u95EE\u8BB0\u5F55)",
        noFileStatsRecord: "(\u65E0\u53D8\u66F4\u7EDF\u8BA1)",
      },
      privacyCommand: { description: "\u663E\u793A\u9690\u79C1\u58F0\u660E" },
      vimCommand: {
        enteredVimMode: "\u5DF2\u8FDB\u5165 Vim \u6A21\u5F0F\u3002\u518D\u6B21\u8FD0\u884C /vim \u9000\u51FA\u3002",
        exitedVimMode: "\u5DF2\u9000\u51FA Vim \u6A21\u5F0F\u3002",
      },
      bugCommand: {
        noSandbox: "\u65E0\u6C99\u76D2",
        unknown: "\u672A\u77E5",
        noRecentErrors: "\u65E0\u6700\u8FD1\u9519\u8BEF",
        errorWithTimestamp: `\u9519\u8BEF ({{timestamp}}):
{{error}}`,
        bugReportTitle: "\u9519\u8BEF\u62A5\u544A",
        defaultBugDescription: "\u7528\u6237\u62A5\u544A\u4E86 iFlow CLI \u4E2D\u7684\u9519\u8BEF",
        conversationHistory: "\u5BF9\u8BDD\u5386\u53F2",
        noHistoryAvailable: "\u65E0\u5386\u53F2\u8BB0\u5F55\u53EF\u7528",
        expectedDescription: "\u8BF7\u63CF\u8FF0\u60A8\u671F\u671B\u53D1\u751F\u7684\u60C5\u51B5",
        loginInfoDescription:
          "\u8BF7\u63CF\u8FF0\u60A8\u7684\u767B\u5F55\u65B9\u5F0F\uFF08\u4F8B\u5982\uFF1AiFlow \u8D26\u6237\u3001API \u5BC6\u94A5\uFF09",
        errorDetails: "\u9519\u8BEF\u8BE6\u60C5",
        additionalContextPrompt:
          "\u8BF7\u63D0\u4F9B\u5173\u4E8E\u6B64\u95EE\u9898\u7684\u4EFB\u4F55\u989D\u5916\u4E0A\u4E0B\u6587\u4FE1\u606F\u3002",
        couldNotOpenUrl: "\u65E0\u6CD5\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00 URL\uFF1A{{error}}",
        bugReportSubmitted: "\u5DF2\u63D0\u4EA4\u9519\u8BEF\u62A5\u544A\uFF1A{{description}}",
      },
      chatCommand: {
        list: {
          description: "\u5217\u51FA\u5DF2\u4FDD\u5B58\u7684\u5BF9\u8BDD\u68C0\u67E5\u70B9",
          noCheckpointsFound: "\u672A\u627E\u5230\u5DF2\u4FDD\u5B58\u7684\u5BF9\u8BDD\u68C0\u67E5\u70B9\u3002",
          listHeader: "\u5DF2\u4FDD\u5B58\u5BF9\u8BDD\u5217\u8868\uFF1A",
          invalidDate: "\u65E0\u6548\u65E5\u671F",
          savedOn: "\u4FDD\u5B58\u4E8E {{date}}",
          sortNote: "\u6CE8\u610F\uFF1A\u6700\u65B0\u7684\u5728\u6700\u540E\uFF0C\u6700\u65E7\u7684\u5728\u6700\u524D",
        },
        save: {
          description:
            "\u5C06\u5F53\u524D\u5BF9\u8BDD\u4FDD\u5B58\u4E3A\u68C0\u67E5\u70B9\u3002\u7528\u6CD5\uFF1A/chat save <\u6807\u7B7E>",
          missingTag: "\u7F3A\u5C11\u6807\u7B7E\u3002\u7528\u6CD5\uFF1A/chat save <\u6807\u7B7E>",
          noChatClient:
            "\u6CA1\u6709\u53EF\u7528\u7684\u804A\u5929\u5BA2\u6237\u7AEF\u6765\u4FDD\u5B58\u5BF9\u8BDD\u3002",
          saved: "\u5BF9\u8BDD\u68C0\u67E5\u70B9\u5DF2\u4FDD\u5B58\uFF0C\u6807\u7B7E\uFF1A{{tag}}\u3002",
          noConversation: "\u672A\u627E\u5230\u8981\u4FDD\u5B58\u7684\u5BF9\u8BDD\u3002",
        },
        resume: {
          description:
            "\u4ECE\u68C0\u67E5\u70B9\u6062\u590D\u5BF9\u8BDD\u3002\u7528\u6CD5\uFF1A/chat resume <\u6807\u7B7E>",
          missingTag: "\u7F3A\u5C11\u6807\u7B7E\u3002\u7528\u6CD5\uFF1A/chat resume <\u6807\u7B7E>",
          noCheckpointFound:
            "\u672A\u627E\u5230\u6807\u7B7E\u4E3A {{tag}} \u7684\u5DF2\u4FDD\u5B58\u68C0\u67E5\u70B9\u3002",
        },
        delete: {
          description: "\u5220\u9664\u5BF9\u8BDD\u68C0\u67E5\u70B9\u3002\u7528\u6CD5\uFF1A/chat delete <\u6807\u7B7E>",
          missingTag: "\u7F3A\u5C11\u6807\u7B7E\u3002\u7528\u6CD5\uFF1A/chat delete <\u6807\u7B7E>",
          deleted: "\u5BF9\u8BDD\u68C0\u67E5\u70B9 '{{tag}}' \u5DF2\u88AB\u5220\u9664\u3002",
          notFound: "\u9519\u8BEF\uFF1A\u672A\u627E\u5230\u6807\u7B7E\u4E3A '{{tag}}' \u7684\u68C0\u67E5\u70B9\u3002",
        },
      },
      compressCommand: {
        alreadyCompressing:
          "\u5DF2\u5728\u538B\u7F29\u4E2D\uFF0C\u8BF7\u7B49\u5F85\u4E0A\u4E00\u4E2A\u8BF7\u6C42\u5B8C\u6210",
        compressing: "\u6B63\u5728\u538B\u7F29...",
        historyManagerNotAvailable:
          "\u5386\u53F2\u7BA1\u7406\u5668\u4E0D\u53EF\u7528\u4E8E\u538B\u7F29\u65E5\u5FD7\u8BB0\u5F55",
        failedToRecordEvent: "\u8BB0\u5F55\u538B\u7F29\u4E8B\u4EF6\u5230\u5386\u53F2\u5931\u8D25\uFF1A",
        failedToCompress: "\u538B\u7F29\u804A\u5929\u5386\u53F2\u5931\u8D25\u3002",
        failedWithError: "\u538B\u7F29\u804A\u5929\u5386\u53F2\u5931\u8D25\uFF1A{{error}}",
      },
      docsCommand: {
        pleaseOpenUrl: `\u8BF7\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u4EE5\u4E0B URL \u67E5\u770B\u6587\u6863\uFF1A
{{url}}`,
        openingDocs: "\u6B63\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u6587\u6863\uFF1A{{url}}",
      },
      logCommand: {
        logLocation: `\u65E5\u5FD7\u5B58\u50A8\u4F4D\u7F6E\uFF1A
\u76EE\u5F55\uFF1A{{directory}}
\u65E5\u5FD7\u6587\u4EF6\uFF1A{{logFile}}

\u4F1A\u8BDD ID\uFF1A{{sessionId}}`,
        notAvailable: "\u4E0D\u53EF\u7528",
        failedToRetrieve: "\u83B7\u53D6\u65E5\u5FD7\u4F4D\u7F6E\u5931\u8D25\uFF1A{{error}}",
        unknownError: "\u672A\u77E5\u9519\u8BEF",
      },
      commandsCommand: {
        description: "\u7BA1\u7406\u5E02\u573A\u547D\u4EE4",
        demandCommand:
          "\u5728\u7EE7\u7EED\u4E4B\u524D\uFF0C\u60A8\u9700\u8981\u81F3\u5C11\u4E00\u4E2A\u547D\u4EE4\u3002",
        failedToFetchDetails: "\u83B7\u53D6\u547D\u4EE4\u8BE6\u60C5\u5931\u8D25",
        subCommands: {
          list: "\u5217\u51FA\u9879\u76EE\u548C\u5168\u5C40\u8303\u56F4\u5185\u672C\u5730\u5B89\u88C5\u7684\u547D\u4EE4",
          online:
            "\u5728\u4EA4\u4E92\u5F0F\u5BF9\u8BDD\u6846\u4E2D\u6D4F\u89C8\u5728\u7EBF\u5E02\u573A\u7684\u53EF\u7528\u547D\u4EE4",
          get: "\u901A\u8FC7 ID \u83B7\u53D6\u7279\u5B9A\u547D\u4EE4\u7684\u8BE6\u60C5",
          add: "\u901A\u8FC7 ID \u6DFB\u52A0\u7279\u5B9A\u547D\u4EE4\u5230\u672C\u5730 CLI\uFF08\u4F7F\u7528 --scope global \u8FDB\u884C\u7CFB\u7EDF\u8303\u56F4\u5B89\u88C5\uFF09",
          remove:
            "\u79FB\u9664\u672C\u5730\u5B89\u88C5\u7684\u547D\u4EE4\uFF08\u4F7F\u7528 --scope global \u4ECE\u5168\u5C40\u79FB\u9664\uFF09",
        },
        list: {
          noCommands: `\u{1F536} \u672A\u5B89\u88C5\u672C\u5730\u547D\u4EE4\u3002

\u{1F4A1} \u5165\u95E8\u6307\u5357\uFF1A
  \u2022 \u4F7F\u7528 /commands online \u6D4F\u89C8\u5E02\u573A
  \u2022 \u4F7F\u7528 /commands get <id> \u83B7\u53D6\u547D\u4EE4\u8BE6\u60C5
  \u2022 \u4F7F\u7528 /commands add <id> \u5B89\u88C5\u5230\u9879\u76EE
  \u2022 \u4F7F\u7528 /commands add <id> --scope global \u5168\u5C40\u5B89\u88C5`,
          installedHeader: "\u5DF2\u5B89\u88C5\u7684\u547D\u4EE4\uFF1A",
          globalCommands: "\u5168\u5C40\u547D\u4EE4",
          projectCommands: "\u9879\u76EE\u547D\u4EE4",
          tips: `\u{1F4A1} \u63D0\u793A\uFF1A
  \u2022 \u4F7F\u7528 /commands online \u6D4F\u89C8\u5728\u7EBF\u5E02\u573A
  \u2022 \u4F7F\u7528 /commands add <id> \u5B89\u88C5\u65B0\u547D\u4EE4
  \u2022 \u4F7F\u7528 /commands remove <name> \u79FB\u9664\u547D\u4EE4
  \u2022 \u4F7F\u7528 /commands get <id> \u67E5\u770B\u547D\u4EE4\u8BE6\u60C5`,
          loading: "\u6B63\u5728\u52A0\u8F7D\u672C\u5730\u547D\u4EE4...",
          errorLoading: "\u52A0\u8F7D\u672C\u5730\u547D\u4EE4\u65F6\u51FA\u9519\uFF1A{{error}}",
        },
        get: {
          idRequired: `\u9519\u8BEF\uFF1A\u9700\u8981\u547D\u4EE4 ID
\u7528\u6CD5\uFF1A/commands get <id>`,
          idMustBeNumber: `\u9519\u8BEF\uFF1A\u547D\u4EE4 ID \u5FC5\u987B\u662F\u6570\u5B57
\u7528\u6CD5\uFF1A/commands get <id>`,
          apiKeyNotFound:
            "\u9519\u8BEF\uFF1A\u672A\u627E\u5230 IFLOW_API \u5BC6\u94A5\u3002\u8BF7\u8BBE\u7F6E IFLOW_API \u73AF\u5883\u53D8\u91CF\u3002",
          fetching: "\u6B63\u5728\u83B7\u53D6 ID \u4E3A {{id}} \u7684\u547D\u4EE4\u8BE6\u60C5...",
          notFound: "\u9519\u8BEF\uFF1A\u672A\u627E\u5230 ID \u4E3A {{id}} \u7684\u547D\u4EE4\u3002",
          errorFetching: "\u83B7\u53D6\u547D\u4EE4\u8BE6\u60C5\u65F6\u51FA\u9519\uFF1A{{error}}",
        },
        remove: {
          notFound: "\u274C \u5728 {{scope}} \u8303\u56F4\u5185\u672A\u627E\u5230\u547D\u4EE4 '{{commandName}}'",
          globalScopeHint:
            "\u{1F4A1} \u8981\u4ECE\u5168\u5C40\u8303\u56F4\u79FB\u9664\uFF0C\u8BF7\u4F7F\u7528\uFF1A--scope global",
          success: `\u2714 \u6210\u529F\u4ECE {{scope}} \u8303\u56F4\u79FB\u9664\u547D\u4EE4 '{{commandName}}'
\u4F4D\u7F6E\uFF1A{{filePath}}

\u26A0\uFE0F  \u8BF7\u91CD\u542F CLI \u4EE5\u4F7F\u66F4\u6539\u751F\u6548\u3002`,
          failed: `\u274C \u79FB\u9664\u547D\u4EE4 '{{commandName}}' \u5931\u8D25
\u9519\u8BEF\uFF1A{{error}}`,
          invalidScope: `\u9519\u8BEF\uFF1A\u65E0\u6548\u7684\u8303\u56F4 '{{scope}}'\u3002\u6709\u6548\u8303\u56F4\uFF1Aproject, global
\u7528\u6CD5\uFF1A/commands remove <name> [--scope project|global]`,
          nameRequired: `\u9519\u8BEF\uFF1A\u9700\u8981\u547D\u4EE4\u540D\u79F0
\u7528\u6CD5\uFF1A/commands remove <name> [--scope project|global]
  --scope project  \u4ECE\u5F53\u524D\u9879\u76EE\u79FB\u9664\uFF08\u9ED8\u8BA4\uFF09
  --scope global   \u4ECE\u5168\u5C40\u7528\u6237\u547D\u4EE4\u79FB\u9664`,
          removing: "\u6B63\u5728\u4ECE {{scope}} \u8303\u56F4\u79FB\u9664\u547D\u4EE4 '{{commandName}}'...",
          error: "\u9519\u8BEF\uFF1A{{error}}",
        },
        install: {
          alreadyInstalled:
            "\u26A0\uFE0F \u547D\u4EE4 '{{commandName}}' \u5DF2\u5728\u60A8\u7684 {{scope}} \u8303\u56F4\u5185\u5B89\u88C5\u3002",
          success: `\u2714 \u6210\u529F\u4E3A {{scope}} \u5B89\u88C5\u547D\u4EE4 '{{commandName}}'
\u4F4D\u7F6E\uFF1A{{filePath}}

\u26A0\uFE0F  \u8BF7\u91CD\u542F CLI \u4EE5\u4F7F\u7528\u65B0\u547D\u4EE4\u3002`,
          failed: `\u274C \u5B89\u88C5\u547D\u4EE4 '{{commandName}}' \u5931\u8D25
\u9519\u8BEF\uFF1A{{error}}`,
        },
        add: {
          invalidScope: `\u9519\u8BEF\uFF1A\u65E0\u6548\u7684\u8303\u56F4 '{{scope}}'\u3002\u6709\u6548\u8303\u56F4\uFF1Aproject, global
\u7528\u6CD5\uFF1A/commands add <id> [--scope project|global]`,
          idRequired: `\u9519\u8BEF\uFF1A\u9700\u8981\u547D\u4EE4 ID
\u7528\u6CD5\uFF1A/commands add <id> [--scope project|global]
  --scope project  \u5B89\u88C5\u5230\u5F53\u524D\u9879\u76EE\uFF08\u9ED8\u8BA4\uFF09
  --scope global   \u5B89\u88C5\u5230\u5168\u5C40\u7528\u6237\u547D\u4EE4`,
          idMustBeNumber: `\u9519\u8BEF\uFF1A\u547D\u4EE4 ID \u5FC5\u987B\u662F\u6570\u5B57
\u7528\u6CD5\uFF1A/commands add <id> [--scope project|global]`,
          apiKeyNotFound:
            "\u9519\u8BEF\uFF1A\u672A\u627E\u5230 IFLOW_API \u5BC6\u94A5\u3002\u8BF7\u8BBE\u7F6E IFLOW_API \u73AF\u5883\u53D8\u91CF\u3002",
          fetching: "\u6B63\u5728\u83B7\u53D6 ID \u4E3A {{id}} \u7684\u547D\u4EE4...",
          notFoundInRepo:
            "\u9519\u8BEF\uFF1A\u5728\u5728\u7EBF\u4ED3\u5E93\u4E2D\u672A\u627E\u5230 ID \u4E3A {{id}} \u7684\u547D\u4EE4\u3002",
          error: "\u9519\u8BEF\uFF1A{{error}}",
        },
        details: {
          title: "\u{1F4CB} \u547D\u4EE4\u8BE6\u60C5",
          id: "\u{1F194} ID\uFF1A",
          name: "\u{1F4DD} \u540D\u79F0\uFF1A",
          description: "\u{1F4C4} \u63CF\u8FF0\uFF1A",
          category: "\u{1F4C1} \u5206\u7C7B\uFF1A",
          model: "\u{1F916} \u6A21\u578B\uFF1A",
          tags: "\u{1F3F7}\uFE0F  \u6807\u7B7E\uFF1A",
          author: "\u{1F464} \u4F5C\u8005\uFF1A",
          version: "\u{1F4CA} \u7248\u672C\uFF1A",
          visibility: "\u{1F441}\uFE0F  \u53EF\u89C1\u6027\uFF1A",
          status: "\u{1F4CB} \u72B6\u6001\uFF1A",
          detailContext: "\u{1F4D6} \u8BE6\u7EC6\u4E0A\u4E0B\u6587\uFF1A",
          addHint:
            "\u{1F4A1} \u8981\u5C06\u6B64\u547D\u4EE4\u6DFB\u52A0\u5230\u60A8\u7684 CLI\uFF0C\u8BF7\u4F7F\u7528\uFF1A/commands add {{id}}",
        },
      },
      exportCommand: {
        clipboard: {
          description: "\u5C06\u5BF9\u8BDD\u590D\u5236\u5230\u7CFB\u7EDF\u526A\u8D34\u677F",
          success: "\u5BF9\u8BDD\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F",
          failed: "\u590D\u5236\u5230\u526A\u8D34\u677F\u5931\u8D25\uFF1A{{error}}",
        },
        file: {
          description: "\u5C06\u5BF9\u8BDD\u4FDD\u5B58\u5230\u5F53\u524D\u76EE\u5F55\u7684\u6587\u4EF6\u4E2D",
          success: "\u5BF9\u8BDD\u5DF2\u5BFC\u51FA\u5230\uFF1A{{fileName}}",
          failed: "\u4FDD\u5B58\u6587\u4EF6\u5931\u8D25\uFF1A{{error}}",
        },
        unknownError: "\u672A\u77E5\u9519\u8BEF",
      },
      mcpCommand: {
        description: "\u7BA1\u7406 MCP \u670D\u52A1\u5668",
        demandCommand:
          "\u5728\u7EE7\u7EED\u4E4B\u524D\uFF0C\u60A8\u9700\u8981\u81F3\u5C11\u4E00\u4E2A\u547D\u4EE4\u3002",
        configNotLoaded: "\u914D\u7F6E\u672A\u52A0\u8F7D\u3002",
        couldNotRetrieveRegistry: "\u65E0\u6CD5\u83B7\u53D6\u5DE5\u5177\u6CE8\u518C\u8868\u3002",
        noOAuthServers: "\u6CA1\u6709\u914D\u7F6E OAuth \u8EAB\u4EFD\u9A8C\u8BC1\u7684 MCP \u670D\u52A1\u5668\u3002",
        refreshCompleted: "MCP \u5237\u65B0\u5DF2\u6210\u529F\u5B8C\u6210\u3002",
        startingOAuthAuth:
          "\u6B63\u5728\u4E3A MCP \u670D\u52A1\u5668 {{serverName}} \u542F\u52A8 OAuth \u8EAB\u4EFD\u9A8C\u8BC1",
        authSuccess: "\u6210\u529F\u4E0E MCP \u670D\u52A1\u5668 {{serverName}} \u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1",
        rediscoveringTools: "\u6B63\u5728\u4ECE {{serverName}} \u91CD\u65B0\u53D1\u73B0\u5DE5\u5177",
        reloadingSettings:
          "\u6B63\u5728\u91CD\u65B0\u52A0\u8F7D\u8BBE\u7F6E\u6587\u4EF6\u5E76\u5237\u65B0 MCP \u670D\u52A1\u5668...",
        settingsReloadErrors:
          "\u8BBE\u7F6E\u91CD\u65B0\u52A0\u8F7D\u5B8C\u6210\u4F46\u6709\u9519\u8BEF\uFF1A{{errors}}",
        noServersConfiguredSandbox: `\u672A\u914D\u7F6E MCP \u670D\u52A1\u5668\u3002\u8BF7\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u4EE5\u4E0B URL \u67E5\u770B\u6587\u6863\uFF1A
{{docsUrl}}`,
        noServersConfiguredOpen:
          "\u672A\u914D\u7F6E MCP \u670D\u52A1\u5668\u3002\u6B63\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u6587\u6863\uFF1A{{docsUrl}}",
        serversStarting:
          "MCP \u670D\u52A1\u5668\u6B63\u5728\u542F\u52A8\uFF08{{count}} \u4E2A\u6B63\u5728\u521D\u59CB\u5316\uFF09...",
        firstStartupNote:
          "\u6CE8\u610F\uFF1A\u9996\u6B21\u542F\u52A8\u53EF\u80FD\u9700\u8981\u66F4\u957F\u65F6\u95F4\u3002\u5DE5\u5177\u53EF\u7528\u6027\u5C06\u81EA\u52A8\u66F4\u65B0\u3002",
        configuredServers: "\u5DF2\u914D\u7F6E\u7684 MCP \u670D\u52A1\u5668\uFF1A",
        status: {
          ready: "\u5C31\u7EEA",
          starting:
            "\u6B63\u5728\u542F\u52A8...\uFF08\u9996\u6B21\u542F\u52A8\u53EF\u80FD\u9700\u8981\u66F4\u957F\u65F6\u95F4\uFF09",
          disconnected: "\u5DF2\u65AD\u5F00\u8FDE\u63A5",
        },
        oauth: {
          tokenExpired: "\uFF08OAuth \u4EE4\u724C\u5DF2\u8FC7\u671F\uFF09",
          authenticated: "\uFF08OAuth \u5DF2\u8BA4\u8BC1\uFF09",
          notAuthenticated: "\uFF08OAuth \u672A\u8BA4\u8BC1\uFF09",
        },
        toolCount: "{{count}} \u4E2A\u5DE5\u5177",
        promptCount: "{{count}} \u4E2A\u63D0\u793A",
        zeroTools: "\uFF080 \u4E2A\u5DE5\u5177\uFF09",
        toolsWillAppear:
          "\uFF08\u5DE5\u5177\u548C\u63D0\u793A\u5C06\u5728\u51C6\u5907\u5C31\u7EEA\u65F6\u663E\u793A\uFF09",
        toolsCached: "\uFF08{{count}} \u4E2A\u5DE5\u5177\u5DF2\u7F13\u5B58\uFF09",
        toolsLabel: "\u5DE5\u5177\uFF1A",
        promptsLabel: "\u63D0\u793A\uFF1A",
        parametersLabel: "\u53C2\u6570\uFF1A",
        noToolsOrPrompts: "\u6CA1\u6709\u53EF\u7528\u7684\u5DE5\u5177\u6216\u63D0\u793A",
        noToolsAvailable: "\u6CA1\u6709\u53EF\u7528\u7684\u5DE5\u5177",
        authHint: '\uFF08\u8F93\u5165\uFF1A"/mcp auth {{serverName}}" \u6765\u8BA4\u8BC1\u6B64\u670D\u52A1\u5668\uFF09',
        blocked: "\u5DF2\u963B\u6B62",
        tips: "\u63D0\u793A\uFF1A",
        tipDesc: "\u4F7F\u7528 /mcp desc \u663E\u793A\u670D\u52A1\u5668\u548C\u5DE5\u5177\u63CF\u8FF0",
        tipSchema: "\u4F7F\u7528 /mcp schema \u663E\u793A\u5DE5\u5177\u53C2\u6570\u67B6\u6784",
        tipNoDesc: "\u4F7F\u7528 /mcp nodesc \u9690\u85CF\u63CF\u8FF0",
        tipAuth:
          "\u4F7F\u7528 /mcp auth <\u670D\u52A1\u5668\u540D\u79F0> \u4E0E\u652F\u6301 OAuth \u7684\u670D\u52A1\u5668\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1",
        tipToggle: "\u6309 Ctrl+T \u5207\u6362\u5DE5\u5177\u63CF\u8FF0\u7684\u5F00/\u5173",
        auth: {
          description: "\u4E0E\u652F\u6301 OAuth \u7684 MCP \u670D\u52A1\u5668\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1",
          availableServers: `\u652F\u6301 OAuth \u8EAB\u4EFD\u9A8C\u8BC1\u7684 MCP \u670D\u52A1\u5668\uFF1A
{{servers}}

\u4F7F\u7528 /mcp auth <\u670D\u52A1\u5668\u540D\u79F0> \u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1\u3002`,
          serverNotFound: "\u672A\u627E\u5230 MCP \u670D\u52A1\u5668 '{{serverName}}'\u3002",
          successMessage: "\u6210\u529F\u8BA4\u8BC1\u5E76\u5237\u65B0\u4E86 '{{serverName}}' \u7684\u5DE5\u5177\u3002",
          failedMessage:
            "\u4E0E MCP \u670D\u52A1\u5668 '{{serverName}}' \u7684\u8EAB\u4EFD\u9A8C\u8BC1\u5931\u8D25\uFF1A{{error}}",
          cannotDetermineUrl:
            "\u65E0\u6CD5\u786E\u5B9A\u670D\u52A1\u5668 '{{serverName}}' \u7684 URL\u3002\u8BF7\u68C0\u67E5\u914D\u7F6E\u3002",
          authorizationUrl: `\u8BF7\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u4EE5\u4E0B URL \u8FDB\u884C\u6388\u6743\uFF1A
{{url}}`,
          manualCallbackPrompt:
            "\u5982\u679C\u6D4F\u89C8\u5668\u65E0\u6CD5\u81EA\u52A8\u56DE\u8C03\uFF0C\u8BF7\u4F7F\u7528 /mcp list \u8FDB\u884C\u4EA4\u4E92\u5F0F\u6388\u6743\u3002",
          mcpRemoteHandlesAuth:
            "\u670D\u52A1\u5668 '{{serverName}}' \u4F7F\u7528 mcp-remote\uFF0COAuth \u8BA4\u8BC1\u4F1A\u81EA\u52A8\u5904\u7406\u3002\u5982\u9700\u91CD\u65B0\u8BA4\u8BC1\uFF0C\u8BF7\u91CD\u542F iFlow CLI\u3002",
        },
        list: {
          description:
            "\u5DF2\u914D\u7F6E MCP \u670D\u52A1\u5668\u548C\u5DE5\u5177\u7684\u4EA4\u4E92\u5F0F\u5217\u8868",
        },
        online: {
          description: "\u6D4F\u89C8\u5E76\u5B89\u88C5\u5728\u7EBF\u4ED3\u5E93\u4E2D\u7684 MCP \u670D\u52A1\u5668",
        },
        aone: { description: "\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u963F\u91CC\u4E00\u65B9\u5E02\u573A" },
        refresh: {
          description:
            "\u5237\u65B0 MCP \u670D\u52A1\u5668\u548C\u5DE5\u5177\u5217\u8868\uFF0C\u5E76\u91CD\u65B0\u52A0\u8F7D\u8BBE\u7F6E\u6587\u4EF6",
          settingsSuccess: "\u8BBE\u7F6E\u6587\u4EF6\u91CD\u65B0\u52A0\u8F7D\u6210\u529F\u3002",
          settingsFailed: "\u91CD\u65B0\u52A0\u8F7D\u8BBE\u7F6E\u5931\u8D25\uFF1A{{error}}",
          successMessage:
            "\u8BBE\u7F6E\u5DF2\u91CD\u65B0\u52A0\u8F7D\uFF0CMCP \u670D\u52A1\u5668\u5237\u65B0\u6210\u529F\u3002",
          statusFailed: "\u5237\u65B0\u5B8C\u6210\u4F46\u83B7\u53D6\u72B6\u6001\u5931\u8D25\uFF1A{{error}}",
          refreshFailed: "MCP \u5237\u65B0\u5931\u8D25\uFF1A{{error}}",
        },
        fromExtension: "\uFF08\u6765\u81EA {{extensionName}}\uFF09",
      },
      skillsCommand: {
        description: "\u7BA1\u7406\u6280\u80FD",
        configNotLoaded: "\u914D\u7F6E\u672A\u52A0\u8F7D\u3002",
        couldNotRetrieveRegistry: "\u65E0\u6CD5\u83B7\u53D6\u6280\u80FD\u6CE8\u518C\u8868\u3002",
        noSkillsConfigured: "\u672A\u914D\u7F6E\u6280\u80FD\u3002",
        configuredSkills: "\u5DF2\u914D\u7F6E\u7684\u6280\u80FD\uFF1A",
        totalSkills: "\u603B\u8BA1\uFF1A{{count}} \u4E2A\u6280\u80FD",
        global: "\u5168\u5C40",
        project: "\u9879\u76EE",
        filePath: "\u6587\u4EF6\u8DEF\u5F84",
        license: "\u8BB8\u53EF\u8BC1",
        refreshingSkills: "\u6B63\u5728\u5237\u65B0\u6280\u80FD...",
        refreshCompleted: "\u6280\u80FD\u5237\u65B0\u5DF2\u6210\u529F\u5B8C\u6210\u3002",
        list: { description: "\u5DF2\u914D\u7F6E\u6280\u80FD\u7684\u4EA4\u4E92\u5F0F\u5217\u8868" },
        refresh: {
          description: "\u5237\u65B0\u6280\u80FD\u5217\u8868",
          successMessage: "\u6280\u80FD\u5237\u65B0\u6210\u529F\u3002",
          refreshFailed: "\u6280\u80FD\u5237\u65B0\u5931\u8D25\uFF1A{{error}}",
        },
        online: { description: "\u6D4F\u89C8\u5728\u7EBF\u6280\u80FD\u5E02\u573A" },
      },
      directoryCommand: {
        configNotAvailable: "\u914D\u7F6E\u4E0D\u53EF\u7528\u3002",
        add: {
          description:
            "\u5411\u5DE5\u4F5C\u533A\u6DFB\u52A0\u76EE\u5F55\uFF08\u7EDD\u5BF9\u8DEF\u5F84\uFF09\uFF1B\u5982\u9700\u6DFB\u52A0\u591A\u4E2A\u76EE\u5F55\uFF0C\u8BF7\u4F7F\u7528\u9017\u53F7\u5206\u9694",
          pathRequired: "\u8BF7\u81F3\u5C11\u63D0\u4F9B\u4E00\u4E2A\u8981\u6DFB\u52A0\u7684\u8DEF\u5F84\u3002",
          restrictiveSandboxError:
            "\u9650\u5236\u6027\u6C99\u76D2\u914D\u7F6E\u6587\u4EF6\u4E0D\u652F\u6301 /directory add \u547D\u4EE4\u3002\u8BF7\u5728\u542F\u52A8\u4F1A\u8BDD\u65F6\u4F7F\u7528 --include-directories \u9009\u9879\u3002",
          errorAdding: "\u6DFB\u52A0 '{{path}}' \u65F6\u51FA\u9519\uFF1A{{error}}",
          successMessage: `\u6210\u529F\u6DFB\u52A0\u76EE\u5F55\uFF1A
- {{directories}}`,
        },
        show: {
          description: "\u663E\u793A\u5DE5\u4F5C\u533A\u4E2D\u7684\u6240\u6709\u76EE\u5F55",
          currentDirectories: `\u5F53\u524D\u5DE5\u4F5C\u533A\u76EE\u5F55\uFF1A
{{directories}}`,
        },
      },
      agentsAdd: {
        description: "\u4ECE\u5728\u7EBF\u4ED3\u5E93\u6DFB\u52A0\u4EE3\u7406",
        pleaseAuthenticate: "\u8BF7\u5148\u8FD0\u884C\u8BA4\u8BC1\u547D\u4EE4\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1",
        unableToLoadAgents: "\u65E0\u6CD5\u52A0\u8F7D\u4EE3\u7406\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        authenticationFailed:
          "\u8BA4\u8BC1\u5931\u8D25\u3002\u8BF7\u68C0\u67E5\u60A8\u7684 API \u5BC6\u94A5\u6216\u91CD\u65B0\u8BA4\u8BC1",
        accessDenied: "\u8BBF\u95EE\u88AB\u62D2\u7EDD\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u6743\u9650",
        serviceNotFound: "\u672A\u627E\u5230\u4EE3\u7406\u670D\u52A1\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        serverError: "\u670D\u52A1\u5668\u9519\u8BEF\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        failedToLoadFromServer: "\u4ECE\u670D\u52A1\u5668\u52A0\u8F7D\u4EE3\u7406\u5931\u8D25",
        connectionError:
          "\u65E0\u6CD5\u52A0\u8F7D\u4EE3\u7406\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u8FDE\u63A5\u540E\u91CD\u8BD5",
        networkError: "\u7F51\u7EDC\u9519\u8BEF\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5",
        failedToFetchDetails: "\u83B7\u53D6\u4EE3\u7406\u8BE6\u60C5\u5931\u8D25\uFF1A{{error}}",
        successfullyInstalled: `\u2714 \u6210\u529F\u4E3A {{scope}} \u5B89\u88C5\u4EE3\u7406 '{{name}}'
\u4F4D\u7F6E\uFF1A{{filePath}}

\u60A8\u73B0\u5728\u53EF\u4EE5\u5728\u5BF9\u8BDD\u4E2D\u4F7F\u7528\u6B64\u4EE3\u7406\u3002`,
        alreadyInstalled: `\u26A0\uFE0F \u4EE3\u7406 '{{name}}' \u5DF2\u5B89\u88C5
\u5728\u60A8\u7684 {{scope}} \u8303\u56F4\u4E2D\u5DF2\u5B58\u5728\u540C\u540D\u4EE3\u7406\u3002

`,
        installFailed: `\u274C \u5B89\u88C5\u4EE3\u7406 '{{name}}' \u5931\u8D25
\u9519\u8BEF\uFF1A{{error}}`,
        invalidScope:
          "\u9519\u8BEF\uFF1A\u65E0\u6548\u7684\u8303\u56F4 '{{scope}}'\u3002\u6709\u6548\u8303\u56F4\uFF1Aproject, global",
        apiKeyNotFound: "\u9519\u8BEF\uFF1A\u672A\u627E\u5230 API \u5BC6\u94A5\u3002",
        searching: "\u6B63\u5728\u641C\u7D22\u4EE3\u7406 '{{nameOrId}}'...",
        error: "\u9519\u8BEF\uFF1A{{error}}",
        notFoundInRepo:
          "\u9519\u8BEF\uFF1A\u5728\u5728\u7EBF\u4ED3\u5E93\u4E2D\u672A\u627E\u5230\u4EE3\u7406 '{{nameOrId}}'\u3002",
        foundAgent: "\u627E\u5230\u4EE3\u7406\uFF1A{{name}}",
        agentDescription: "\u63CF\u8FF0\uFF1A{{description}}",
        installing: "\u6B63\u5728\u5B89\u88C5\u5230 {{scope}} \u8303\u56F4...",
        errorAdding: "\u6DFB\u52A0\u4EE3\u7406\u65F6\u51FA\u9519\uFF1A{{error}}",
        usage: "\u7528\u6CD5\uFF1Aiflow agent add <\u540D\u79F0\u6216ID> [--scope project|global]",
        nameOrIdOption: "\u4EE3\u7406\u7684\u540D\u79F0\u6216 ID",
        scopeOption: "\u5B89\u88C5\u8303\u56F4\uFF08\u9879\u76EE\u6216\u5168\u5C40\uFF09",
      },
      agentsGet: {
        description: "\u83B7\u53D6\u4EE3\u7406\u8BE6\u60C5",
        notFound: "\u9519\u8BEF\uFF1A\u672A\u627E\u5230\u4EE3\u7406 '{{name}}'",
        agent: "\u4EE3\u7406",
        type: "\u7C7B\u578B",
        location: "\u4F4D\u7F6E",
        file: "\u6587\u4EF6",
        agentDescription: "\u63CF\u8FF0",
        whenToUse: "\u4F55\u65F6\u4F7F\u7528",
        model: "\u6A21\u578B",
        allowedTools: "\u5141\u8BB8\u7684\u5DE5\u5177",
        allTools: "\u6240\u6709\u5DE5\u5177",
        noInherit: "\uFF08\u4E0D\u7EE7\u627F\uFF09",
        noneNoInherit: "\u65E0\uFF08\u4E0D\u7EE7\u627F\uFF09",
        allToolsInherit: "\u6240\u6709\u5DE5\u5177\uFF08\u7EE7\u627F\uFF09",
        allowedMcpServers: "\u5141\u8BB8\u7684 MCP \u670D\u52A1\u5668",
        allMcpServersInherit: "\u6240\u6709 MCP \u670D\u52A1\u5668\uFF08\u7EE7\u627F\uFF09",
        systemPrompt: "\u7CFB\u7EDF\u63D0\u793A",
        fileContent: "\u6587\u4EF6\u5185\u5BB9",
        couldNotReadFile: "\u8B66\u544A\uFF1A\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\uFF1A{{error}}",
        warning: "\u8B66\u544A",
        fileNotFound: "\u5728 {{path}} \u672A\u627E\u5230\u4EE3\u7406\u6587\u4EF6",
        unknownPath: "\u672A\u77E5\u8DEF\u5F84",
        errorGettingDetails: "\u83B7\u53D6\u4EE3\u7406\u8BE6\u60C5\u65F6\u51FA\u9519\uFF1A",
        usage: "\u7528\u6CD5\uFF1Aiflow agent get <\u540D\u79F0>",
        nameOption: "\u4EE3\u7406\u7684\u540D\u79F0\u6216\u7C7B\u578B",
      },
      agentsList: {
        description: "\u5217\u51FA\u5DF2\u914D\u7F6E\u7684\u4EE3\u7406",
        noAgentsConfigured: "\u672A\u914D\u7F6E\u4EE3\u7406",
        configuredAgents: `\u5DF2\u914D\u7F6E\u7684\u4EE3\u7406\uFF1A
`,
        projectAgents: "\u9879\u76EE\u4EE3\u7406",
        globalAgents: "\u5168\u5C40\u4EE3\u7406",
        agentDescription: "\u63CF\u8FF0",
        model: "\u6A21\u578B",
        tools: "\u5DE5\u5177",
        allTools: "\u6240\u6709\u5DE5\u5177",
        noInherit: "\uFF08\u4E0D\u7EE7\u627F\uFF09",
        noneNoInherit: "\u65E0\uFF08\u4E0D\u7EE7\u627F\uFF09",
        mcps: "MCP",
        location: "\u4F4D\u7F6E",
        unknown: "\u672A\u77E5",
        total: "\u603B\u8BA1\uFF1A{{count}} \u4E2A\u4EE3\u7406\u5DF2\u914D\u7F6E",
        errorLoading: "\u52A0\u8F7D\u4EE3\u7406\u65F6\u51FA\u9519\uFF1A",
        usage: "\u7528\u6CD5\uFF1Aiflow agent list",
      },
      agentsOnline: {
        description: "\u6D4F\u89C8\u5728\u7EBF\u4EE3\u7406\u4ED3\u5E93",
        pleaseAuthenticate: "\u8BF7\u5148\u8FD0\u884C\u8BA4\u8BC1\u547D\u4EE4\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1",
        unableToLoadAgents: "\u65E0\u6CD5\u52A0\u8F7D\u4EE3\u7406\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        authenticationFailed:
          "\u8BA4\u8BC1\u5931\u8D25\u3002\u8BF7\u68C0\u67E5\u60A8\u7684 API \u5BC6\u94A5\u6216\u91CD\u65B0\u8BA4\u8BC1",
        accessDenied: "\u8BBF\u95EE\u88AB\u62D2\u7EDD\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u6743\u9650",
        serviceNotFound: "\u672A\u627E\u5230\u4EE3\u7406\u670D\u52A1\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        serverError: "\u670D\u52A1\u5668\u9519\u8BEF\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        failedToLoadFromServer: "\u4ECE\u670D\u52A1\u5668\u52A0\u8F7D\u4EE3\u7406\u5931\u8D25",
        connectionError:
          "\u65E0\u6CD5\u52A0\u8F7D\u4EE3\u7406\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u8FDE\u63A5\u540E\u91CD\u8BD5",
        networkError: "\u7F51\u7EDC\u9519\u8BEF\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5",
        apiKeyNotFound: "\u9519\u8BEF\uFF1A\u672A\u627E\u5230 API \u5BC6\u94A5\u3002",
        loadingOnlineAgents: "\u6B63\u5728\u52A0\u8F7D\u5728\u7EBF\u4EE3\u7406...",
        error: "\u9519\u8BEF\uFF1A{{error}}",
        matching: ' \u5339\u914D "{{search}}"',
        noAgentsFound: "\u672A\u627E\u5230\u4EE3\u7406",
        onlineAgents: "\u5728\u7EBF\u4EE3\u7406",
        filteredBy: '\uFF08\u6309 "{{search}}" \u7B5B\u9009\uFF09',
        agentDescription: "\u63CF\u8FF0",
        category: "\u7C7B\u522B",
        model: "\u6A21\u578B",
        tags: "\u6807\u7B7E",
        author: "\u4F5C\u8005",
        version: "\u7248\u672C",
        allowedTools: "\u5141\u8BB8\u7684\u5DE5\u5177",
        allToolsAvailable: "\u6240\u6709\u5DE5\u5177\u53EF\u7528",
        noToolsAvailable: "\u65E0\u5DE5\u5177\u53EF\u7528",
        inheritTools: "\u7EE7\u627F\u5DE5\u5177",
        yes: "\u662F",
        no: "\u5426",
        mcpServers: "MCP \u670D\u52A1\u5668",
        allMcpServersAvailable: "\u6240\u6709 MCP \u670D\u52A1\u5668\u53EF\u7528",
        noMcpServersAvailable: "\u65E0 MCP \u670D\u52A1\u5668\u53EF\u7528",
        inheritMcps: "\u7EE7\u627F MCP",
        totalShown:
          "\u603B\u8BA1\uFF1A\u663E\u793A {{count}} \u4E2A\u4EE3\u7406\uFF08\u5171 {{total}} \u4E2A\u53EF\u7528\uFF09",
        installHint:
          "\u8981\u5B89\u88C5\u4EE3\u7406\uFF0C\u8BF7\u4F7F\u7528\uFF1Aiflow agent add <\u540D\u79F0\u6216ID>",
        errorBrowsing: "\u6D4F\u89C8\u5728\u7EBF\u4EE3\u7406\u65F6\u51FA\u9519\uFF1A{{error}}",
        usage: "\u7528\u6CD5\uFF1Aiflow agent online [\u9009\u9879]",
        pageOption: "\u9875\u7801\uFF08\u9ED8\u8BA4\uFF1A1\uFF09",
        sizeOption: "\u6BCF\u9875\u4EE3\u7406\u6570\u91CF\uFF08\u9ED8\u8BA4\uFF1A20\uFF09",
        searchOption: "\u8FC7\u6EE4\u4EE3\u7406\u7684\u641C\u7D22\u6761\u4EF6",
      },
      agentsRemove: {
        inScope: "\u5728 {{scope}} \u8303\u56F4\u4E2D",
        notFound: "\u9519\u8BEF\uFF1A\u672A\u627E\u5230\u4EE3\u7406 '{{name}}'",
        multipleFound:
          "\u9519\u8BEF\uFF1A\u627E\u5230\u591A\u4E2A\u540D\u4E3A '{{name}}' \u7684\u4EE3\u7406\u3002\u8BF7\u6307\u5B9A\u8303\u56F4\uFF1A",
        agentListItem: "  - {{name}} ({{location}})\uFF1A{{filePath}}",
        useScope: "\u4F7F\u7528 --scope \u6307\u5B9A\u8981\u79FB\u9664\u7684\u4EE3\u7406\u3002",
        successfullyRemoved: "\u6210\u529F\u4ECE {{scope}} \u8303\u56F4\u79FB\u9664\u4EE3\u7406 '{{name}}'",
        deleted: "\u5DF2\u5220\u9664\uFF1A{{filePath}}",
        fileNotFound: "\u8B66\u544A\uFF1A\u672A\u627E\u5230\u4EE3\u7406\u6587\u4EF6\uFF1A{{filePath}}",
        errorRemoving: "\u79FB\u9664\u4EE3\u7406\u6587\u4EF6 {{filePath}} \u65F6\u51FA\u9519\uFF1A",
        errorRemovingAgent: "\u79FB\u9664\u4EE3\u7406\u65F6\u51FA\u9519\uFF1A",
        description: "\u79FB\u9664\u4EE3\u7406",
        usage: "\u7528\u6CD5\uFF1Aiflow agent remove <\u540D\u79F0> [--scope project|global|all]",
        nameOption: "\u8981\u79FB\u9664\u7684\u4EE3\u7406\u7684\u540D\u79F0\u6216\u7C7B\u578B",
        scopeOption: "\u79FB\u9664\u8303\u56F4\uFF08\u9879\u76EE\u3001\u5168\u5C40\u6216\u5168\u90E8\uFF09",
      },
      commandsList: {
        noLocalCommands: `\u672A\u627E\u5230\u672C\u5730\u547D\u4EE4\u3002
`,
        localInstalledCommands: `\u{1F4CB} \u672C\u5730\u5DF2\u5B89\u88C5\u547D\u4EE4
`,
        globalCommands: "\u5168\u5C40\u547D\u4EE4",
        projectCommands: "\u9879\u76EE\u547D\u4EE4",
        noOnlineCommands: "\u5728\u5E02\u573A\u4E2D\u672A\u627E\u5230\u547D\u4EE4\u3002",
        availableOnlineCommands: "\u{1F310} \u5728\u7EBF\u5E02\u573A\u53EF\u7528\u547D\u4EE4",
        pageInfo:
          "\u{1F4C4} \u7B2C {{currentPage}} \u9875\uFF0C\u5171 {{totalPages}} \u9875 | \u663E\u793A\u7B2C {{startIndex}}-{{endIndex}} \u4E2A\uFF0C\u5171 {{total}} \u4E2A\u547D\u4EE4",
        category: "   \u{1F4C1} \u7C7B\u522B\uFF1A{{category}}",
        tags: "   \u{1F3F7}\uFE0F  \u6807\u7B7E\uFF1A{{tags}}",
        authorVersion: `   \u{1F464} \u4F5C\u8005\uFF1A{{authorId}} | \u{1F4CA} \u7248\u672C\uFF1A{{version}}
`,
        previousPage: "  iflow commands list --page {{page}}    \u4E0A\u4E00\u9875",
        nextPage: "  iflow commands list --page {{page}}    \u4E0B\u4E00\u9875",
        navigation: "\u{1F4D6} \u5BFC\u822A\uFF1A",
        apiKeyNotFound: "\u9519\u8BEF\uFF1A\u672A\u627E\u5230 API \u5BC6\u94A5\u3002",
        pleaseAuthenticate:
          "\u8BF7\u5148\u8FD0\u884C\u8BA4\u8BC1\u547D\u4EE4\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1\u3002",
        loadingOnlineCommands: "\u6B63\u5728\u52A0\u8F7D\u5728\u7EBF\u547D\u4EE4...",
        errorLoadingOnlineCommands: "\u52A0\u8F7D\u5728\u7EBF\u547D\u4EE4\u65F6\u51FA\u9519\uFF1A{{error}}",
        loadingLocalCommands: "\u6B63\u5728\u52A0\u8F7D\u672C\u5730\u547D\u4EE4...",
        errorLoadingLocalCommands: "\u52A0\u8F7D\u672C\u5730\u547D\u4EE4\u65F6\u51FA\u9519\uFF1A{{error}}",
        failedToFetchCommands: "\u83B7\u53D6\u547D\u4EE4\u5931\u8D25",
        commandDescription:
          "\u5217\u51FA\u672C\u5730\u5B89\u88C5\u7684\u547D\u4EE4\uFF08\u4F7F\u7528 --online \u6D4F\u89C8\u5E02\u573A\uFF09",
        usage: "\u7528\u6CD5\uFF1Aiflow commands list [\u9009\u9879]",
        onlineOption: "\u6D4F\u89C8\u5728\u7EBF\u5E02\u573A\u800C\u4E0D\u662F\u672C\u5730\u547D\u4EE4",
        pageOption: "\u5728\u7EBF\u547D\u4EE4\u7684\u9875\u7801",
        sizeOption: "\u5728\u7EBF\u547D\u4EE4\u7684\u9875\u9762\u5927\u5C0F",
        exampleDefault: "\u663E\u793A\u672C\u5730\u5B89\u88C5\u7684\u547D\u4EE4\uFF08\u9ED8\u8BA4\uFF09",
        exampleOnline: "\u6D4F\u89C8\u5728\u7EBF\u5E02\u573A",
        examplePage: "\u6D4F\u89C8\u5E02\u573A\u7B2C 2 \u9875",
        exampleSize: "\u4ECE\u5E02\u573A\u663E\u793A\u6BCF\u9875 10 \u4E2A\u547D\u4EE4",
        scopeHeader: "{{scopeIcon}} {{scopeLabel}}:",
        commandItem: "  {{commandIndex}}. /{{commandName}}",
        commandDescriptionItem: "     \u{1F4DD} {{description}}",
        commandPath: "     \u{1F4C1} {{filePath}}",
        onlineCommandItem: "{{actualIndex}}. {{name}} (ID: {{id}})",
        onlineCommandDescriptionItem: "   \u{1F4DD} {{description}}",
      },
      commandsAdd: {
        pleaseAuthenticate: "\u8BF7\u5148\u8FD0\u884C\u8BA4\u8BC1\u547D\u4EE4\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1",
        unableToLoadCommands: "\u65E0\u6CD5\u52A0\u8F7D\u547D\u4EE4\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        authenticationFailed:
          "\u8BA4\u8BC1\u5931\u8D25\u3002\u8BF7\u68C0\u67E5\u60A8\u7684 API \u5BC6\u94A5\u6216\u91CD\u65B0\u8BA4\u8BC1",
        accessDenied: "\u8BBF\u95EE\u88AB\u62D2\u7EDD\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u6743\u9650",
        serviceNotFound: "\u672A\u627E\u5230\u547D\u4EE4\u670D\u52A1\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        serverError: "\u670D\u52A1\u5668\u9519\u8BEF\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        failedToLoadFromServer: "\u4ECE\u670D\u52A1\u5668\u52A0\u8F7D\u547D\u4EE4\u5931\u8D25",
        connectionError:
          "\u65E0\u6CD5\u52A0\u8F7D\u547D\u4EE4\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u8FDE\u63A5\u540E\u91CD\u8BD5",
        networkError: "\u7F51\u7EDC\u9519\u8BEF\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5",
        failedToFetchDetails: "\u83B7\u53D6\u547D\u4EE4\u8BE6\u60C5\u5931\u8D25",
        alreadyInstalled:
          "\u26A0\uFE0F \u547D\u4EE4 '{{commandName}}' \u5DF2\u5728\u60A8\u7684 {{scope}} \u8303\u56F4\u5185\u5B89\u88C5\u3002",
        installSuccess: `\u2714 \u6210\u529F\u4E3A {{scope}} \u5B89\u88C5\u547D\u4EE4 '{{commandName}}'
\u4F4D\u7F6E\uFF1A{{filePath}}

\u73B0\u5728\u53EF\u4EE5\u901A\u8FC7 /{{commandPath}} \u4F7F\u7528\u6B64\u547D\u4EE4`,
        installFailed: `\u274C \u5B89\u88C5\u547D\u4EE4 '{{commandName}}' \u5931\u8D25
\u9519\u8BEF\uFF1A{{error}}`,
        invalidScope:
          "\u9519\u8BEF\uFF1A\u65E0\u6548\u8303\u56F4 '{{scope}}'\u3002\u6709\u6548\u8303\u56F4\uFF1Aproject, global",
        apiKeyNotFound: "\u9519\u8BEF\uFF1A\u672A\u627E\u5230 API \u5BC6\u94A5\u3002",
        pleaseAuthenticateFirst:
          "\u8BF7\u5148\u8FD0\u884C\u8BA4\u8BC1\u547D\u4EE4\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1\u3002",
        searchingCommand: "\u6B63\u5728\u641C\u7D22\u547D\u4EE4 '{{nameOrId}}'...",
        commandNotFound:
          "\u9519\u8BEF\uFF1A\u5728\u5728\u7EBF\u5E02\u573A\u672A\u627E\u5230\u547D\u4EE4 '{{nameOrId}}'\u3002",
        foundCommand: "\u627E\u5230\u547D\u4EE4\uFF1A{{name}}",
        commandDescription: "\u63CF\u8FF0\uFF1A{{description}}",
        commandCategory: "\u5206\u7C7B\uFF1A{{category}}",
        installingToScope: "\u6B63\u5728\u5B89\u88C5\u5230 {{scope}} \u8303\u56F4...",
        restartRequired:
          "\u{1F504} \u8BF7\u91CD\u542F CLI \u4EE5\u67E5\u770B\u65B0\u6DFB\u52A0\u7684\u547D\u4EE4\u3002",
        errorAddingCommand: "\u6DFB\u52A0\u547D\u4EE4\u65F6\u51FA\u9519\uFF1A{{error}}",
        description: "\u4ECE\u5728\u7EBF\u5E02\u573A\u6DFB\u52A0\u547D\u4EE4",
        usage: "\u7528\u6CD5\uFF1Aiflow commands add <\u540D\u79F0\u6216ID> [--scope project|global]",
        nameOrIdOption: "\u547D\u4EE4\u7684\u540D\u79F0\u6216 ID",
        scopeOption: "\u914D\u7F6E\u8303\u56F4\uFF08\u9879\u76EE\u6216\u5168\u5C40\uFF09",
        exampleId: "\u5C06 ID \u4E3A 123 \u7684\u547D\u4EE4\u6DFB\u52A0\u5230\u9879\u76EE",
        exampleName: "\u6309\u540D\u79F0\u5C06\u547D\u4EE4\u6DFB\u52A0\u5230\u9879\u76EE",
        exampleGlobal: "\u5168\u5C40\u6DFB\u52A0 ID \u4E3A 456 \u7684\u547D\u4EE4",
      },
      commandsGet: {
        pleaseAuthenticate: "\u8BF7\u5148\u8FD0\u884C\u8BA4\u8BC1\u547D\u4EE4\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1",
        unableToLoadCommands: "\u65E0\u6CD5\u52A0\u8F7D\u547D\u4EE4\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        authenticationFailed:
          "\u8BA4\u8BC1\u5931\u8D25\u3002\u8BF7\u68C0\u67E5\u60A8\u7684 API \u5BC6\u94A5\u6216\u91CD\u65B0\u8BA4\u8BC1",
        accessDenied: "\u8BBF\u95EE\u88AB\u62D2\u7EDD\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u6743\u9650",
        serviceNotFound: "\u672A\u627E\u5230\u547D\u4EE4\u670D\u52A1\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        serverError: "\u670D\u52A1\u5668\u9519\u8BEF\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        failedToLoadFromServer: "\u4ECE\u670D\u52A1\u5668\u52A0\u8F7D\u547D\u4EE4\u5931\u8D25",
        connectionError:
          "\u65E0\u6CD5\u52A0\u8F7D\u547D\u4EE4\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u8FDE\u63A5\u540E\u91CD\u8BD5",
        networkError: "\u7F51\u7EDC\u9519\u8BEF\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5",
        failedToFetchDetails: "\u83B7\u53D6\u547D\u4EE4\u8BE6\u60C5\u5931\u8D25",
        commandDetailsTitle: "\u{1F4CB} \u547D\u4EE4\u8BE6\u60C5",
        commandId: "\u{1F194} ID\uFF1A{{id}}",
        commandName: "\u{1F4DD} \u540D\u79F0\uFF1A{{name}}",
        commandDescription: "\u{1F4C4} \u63CF\u8FF0\uFF1A{{description}}",
        commandCategory: "\u{1F4C1} \u5206\u7C7B\uFF1A{{category}}",
        commandModel: "\u{1F916} \u6A21\u578B\uFF1A{{modelName}}",
        commandTags: "\u{1F3F7}\uFE0F  \u6807\u7B7E\uFF1A{{tags}}",
        commandAuthor: "\u{1F464} \u4F5C\u8005\uFF1A{{authorId}}",
        commandVersion: "\u{1F4CA} \u7248\u672C\uFF1A{{version}}",
        commandVisibility: "\u{1F441}\uFE0F  \u53EF\u89C1\u6027\uFF1A{{visibility}}",
        commandStatus: "\u{1F4CB} \u72B6\u6001\uFF1A{{publishStatus}}",
        detailContextTitle: "\u{1F4D6} \u8BE6\u7EC6\u4E0A\u4E0B\u6587\uFF1A",
        addCommandHint:
          "\u{1F4A1} \u8981\u5C06\u6B64\u547D\u4EE4\u6DFB\u52A0\u5230\u60A8\u7684 CLI\uFF0C\u8BF7\u4F7F\u7528\uFF1Aiflow commands add {{id}}",
        apiKeyNotFound: "\u9519\u8BEF\uFF1A\u672A\u627E\u5230 API \u5BC6\u94A5\u3002",
        pleaseAuthenticateFirst:
          "\u8BF7\u5148\u8FD0\u884C\u8BA4\u8BC1\u547D\u4EE4\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1\u3002",
        searchingCommand: "\u6B63\u5728\u641C\u7D22\u547D\u4EE4 '{{nameOrId}}'...",
        commandNotFound:
          "\u9519\u8BEF\uFF1A\u5728\u5728\u7EBF\u5E02\u573A\u672A\u627E\u5230\u547D\u4EE4 '{{nameOrId}}'\u3002",
        errorFetchingDetails: "\u83B7\u53D6\u547D\u4EE4\u8BE6\u60C5\u65F6\u51FA\u9519\uFF1A{{error}}",
        description:
          "\u901A\u8FC7\u540D\u79F0\u6216 ID \u83B7\u53D6\u7279\u5B9A\u547D\u4EE4\u7684\u8BE6\u7EC6\u4FE1\u606F",
        usage: "\u7528\u6CD5\uFF1Aiflow commands get <\u540D\u79F0\u6216ID>",
        nameOrIdOption: "\u547D\u4EE4\u7684\u540D\u79F0\u6216 ID",
        exampleId: "\u83B7\u53D6 ID \u4E3A 123 \u7684\u547D\u4EE4\u8BE6\u60C5",
        exampleName: "\u6309\u540D\u79F0\u83B7\u53D6\u547D\u4EE4\u8BE6\u60C5",
      },
      commandsRemove: {
        notFound: "\u274C \u5728 {{scope}} \u8303\u56F4\u5185\u672A\u627E\u5230\u547D\u4EE4 '{{commandName}}'",
        success: `\u2714 \u6210\u529F\u4ECE {{scope}} \u8303\u56F4\u79FB\u9664\u547D\u4EE4 '{{commandName}}'
\u4F4D\u7F6E\uFF1A{{filePath}}`,
        failed: `\u274C \u79FB\u9664\u547D\u4EE4 '{{commandName}}' \u5931\u8D25
\u9519\u8BEF\uFF1A{{error}}`,
        invalidScope:
          "\u9519\u8BEF\uFF1A\u65E0\u6548\u8303\u56F4 '{{scope}}'\u3002\u6709\u6548\u8303\u56F4\uFF1Aproject, global",
        removing: "\u6B63\u5728\u4ECE {{scope}} \u8303\u56F4\u79FB\u9664\u547D\u4EE4 '{{commandName}}'...",
        restartRequired: "\u{1F504} \u8BF7\u91CD\u542F CLI \u4EE5\u67E5\u770B\u66F4\u6539\u751F\u6548\u3002",
        error: "\u9519\u8BEF\uFF1A{{error}}",
        description: "\u79FB\u9664\u672C\u5730\u5B89\u88C5\u7684\u547D\u4EE4",
        usage: "\u7528\u6CD5\uFF1Aiflow commands remove <\u540D\u79F0> [--scope project|global]",
        nameOption: "\u8981\u79FB\u9664\u7684\u547D\u4EE4\u540D\u79F0",
        scopeOption: "\u914D\u7F6E\u8303\u56F4\uFF08\u9879\u76EE\u6216\u5168\u5C40\uFF09",
        exampleProject: "\u4ECE\u9879\u76EE\u8303\u56F4\u79FB\u9664\u547D\u4EE4",
        exampleGlobal: "\u4ECE\u5168\u5C40\u8303\u56F4\u79FB\u9664\u547D\u4EE4",
      },
      commandsOnline: {
        pleaseAuthenticate: "\u8BF7\u5148\u8FD0\u884C\u8BA4\u8BC1\u547D\u4EE4\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1",
        unableToLoadCommands: "\u65E0\u6CD5\u52A0\u8F7D\u547D\u4EE4\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        authenticationFailed:
          "\u8BA4\u8BC1\u5931\u8D25\u3002\u8BF7\u68C0\u67E5\u60A8\u7684 API \u5BC6\u94A5\u6216\u91CD\u65B0\u8BA4\u8BC1",
        accessDenied: "\u8BBF\u95EE\u88AB\u62D2\u7EDD\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u6743\u9650",
        serviceNotFound: "\u672A\u627E\u5230\u547D\u4EE4\u670D\u52A1\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        serverError: "\u670D\u52A1\u5668\u9519\u8BEF\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        failedToLoadFromServer: "\u4ECE\u670D\u52A1\u5668\u52A0\u8F7D\u547D\u4EE4\u5931\u8D25",
        connectionError:
          "\u65E0\u6CD5\u52A0\u8F7D\u547D\u4EE4\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u8FDE\u63A5\u540E\u91CD\u8BD5",
        networkError: "\u7F51\u7EDC\u9519\u8BEF\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5",
        apiKeyNotFound: "\u9519\u8BEF\uFF1A\u672A\u627E\u5230 API \u5BC6\u94A5\u3002",
        pleaseAuthenticateFirst:
          "\u8BF7\u5148\u8FD0\u884C\u8BA4\u8BC1\u547D\u4EE4\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1\u3002",
        loadingOnlineCommands: "\u6B63\u5728\u52A0\u8F7D\u5728\u7EBF\u547D\u4EE4...",
        noCommandsFound: "\u672A\u627E\u5230\u547D\u4EE4",
        onlineCommandsTitle: "\u5728\u7EBF\u547D\u4EE4",
        filteredBy: '\uFF08\u6309 "{{search}}" \u8FC7\u6EE4\uFF09',
        commandItem: "\u2022 {{name}} (ID: {{id}})",
        commandDescription: "\u63CF\u8FF0\uFF1A{{description}}",
        commandCategory: "\u5206\u7C7B\uFF1A{{category}}",
        commandModel: "\u6A21\u578B\uFF1A{{modelName}}",
        commandTags: "\u6807\u7B7E\uFF1A{{tags}}",
        commandAuthor: "\u4F5C\u8005\uFF1A{{authorId}}",
        commandVersion: "\u7248\u672C\uFF1A{{version}}",
        totalCommandsShown: "\u603B\u8BA1\uFF1A\u663E\u793A {{count}} \u4E2A\u547D\u4EE4{{totalAvailable}}",
        totalAvailable: "\uFF08\u5171 {{total}} \u4E2A\u53EF\u7528\uFF09",
        installHint:
          "\u8981\u5B89\u88C5\u547D\u4EE4\uFF0C\u8BF7\u4F7F\u7528\uFF1Aiflow commands add <\u540D\u79F0\u6216ID>",
        errorBrowsingCommands: "\u6D4F\u89C8\u5728\u7EBF\u547D\u4EE4\u65F6\u51FA\u9519\uFF1A",
        description: "\u6D4F\u89C8\u5728\u7EBF\u547D\u4EE4\u4ED3\u5E93",
        usage: "\u7528\u6CD5\uFF1Aiflow commands online [\u9009\u9879]",
        pageOption: "\u9875\u7801\uFF08\u9ED8\u8BA4\uFF1A1\uFF09",
        sizeOption: "\u6BCF\u9875\u547D\u4EE4\u6570\u91CF\uFF08\u9ED8\u8BA4\uFF1A20\uFF09",
        searchOption: "\u8FC7\u6EE4\u547D\u4EE4\u7684\u641C\u7D22\u6761\u4EF6",
      },
      workflowAdd: {
        description: "\u4ECE\u5728\u7EBF\u4ED3\u5E93\u6DFB\u52A0\u5DE5\u4F5C\u6D41",
        pleaseAuthenticate: "\u8BF7\u5148\u8FD0\u884C\u8BA4\u8BC1\u547D\u4EE4\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1",
        unableToLoadWorkflows: "\u65E0\u6CD5\u52A0\u8F7D\u5DE5\u4F5C\u6D41\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        authenticationFailed:
          "\u8BA4\u8BC1\u5931\u8D25\u3002\u8BF7\u68C0\u67E5\u60A8\u7684 API \u5BC6\u94A5\u6216\u91CD\u65B0\u8BA4\u8BC1",
        accessDenied: "\u8BBF\u95EE\u88AB\u62D2\u7EDD\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u6743\u9650",
        serviceNotFound: "\u672A\u627E\u5230\u5DE5\u4F5C\u6D41\u670D\u52A1\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        serverError: "\u670D\u52A1\u5668\u9519\u8BEF\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        failedToLoadFromServer: "\u4ECE\u670D\u52A1\u5668\u52A0\u8F7D\u5DE5\u4F5C\u6D41\u5931\u8D25",
        connectionError:
          "\u65E0\u6CD5\u52A0\u8F7D\u5DE5\u4F5C\u6D41\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u8FDE\u63A5\u540E\u91CD\u8BD5",
        networkError: "\u7F51\u7EDC\u9519\u8BEF\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5",
        failedToFetchDetails: "\u83B7\u53D6\u5DE5\u4F5C\u6D41\u8BE6\u60C5\u5931\u8D25\uFF1A{{error}}",
        invalidExtInfo: "\u5DE5\u4F5C\u6D41\u6269\u5C55\u4FE1\u606F\u65E0\u6548\uFF1A{{error}}",
        noDownloadUrl: "\u5DE5\u4F5C\u6D41\u6CA1\u6709\u4E0B\u8F7D\u94FE\u63A5",
        downloading: "\u6B63\u5728\u4E0B\u8F7D\u5DE5\u4F5C\u6D41\u6587\u4EF6\uFF1A{{url}}",
        extracting: "\u6B63\u5728\u89E3\u538B\u5DE5\u4F5C\u6D41\u6587\u4EF6...",
        copyingFiles: "\u6B63\u5728\u590D\u5236\u6587\u4EF6\u5230\u5F53\u524D\u76EE\u5F55...",
        installSuccess: `\u2714 \u6210\u529F\u5B89\u88C5\u5DE5\u4F5C\u6D41 '{{workflowName}}'
\u4F4D\u7F6E\uFF1A{{targetDir}}

\u5DE5\u4F5C\u6D41\u6587\u4EF6\u5DF2\u590D\u5236\u5230\u5F53\u524D\u76EE\u5F55\u3002`,
        installFailed: `\u274C \u5B89\u88C5\u5DE5\u4F5C\u6D41 '{{workflowName}}' \u5931\u8D25
\u9519\u8BEF\uFF1A{{error}}`,
        invalidScope:
          "\u9519\u8BEF\uFF1A\u65E0\u6548\u7684\u8303\u56F4 '{{scope}}'\u3002\u6709\u6548\u8303\u56F4\uFF1Aproject, global",
        apiKeyNotFound: "\u9519\u8BEF\uFF1A\u672A\u627E\u5230 API \u5BC6\u94A5\u3002",
        searching: "\u6B63\u5728\u641C\u7D22\u5DE5\u4F5C\u6D41 '{{nameOrId}}'...",
        error: "\u9519\u8BEF\uFF1A{{error}}",
        notFoundInRepo:
          "\u9519\u8BEF\uFF1A\u5728\u5728\u7EBF\u4ED3\u5E93\u4E2D\u672A\u627E\u5230\u5DE5\u4F5C\u6D41 '{{nameOrId}}'\u3002",
        foundWorkflow: "\u627E\u5230\u5DE5\u4F5C\u6D41: {{name}}",
        workflowDescription: "\u63CF\u8FF0: {{description}}",
        installing: "\u6B63\u5728\u5B89\u88C5\u5DE5\u4F5C\u6D41...",
        errorAdding: "\u6DFB\u52A0\u5DE5\u4F5C\u6D41\u65F6\u51FA\u9519\uFF1A{{error}}",
        usage: "\u7528\u6CD5\uFF1Aiflow workflow add <\u540D\u79F0\u6216ID>",
        workflowIdOrNumericIdOption: "\u5DE5\u4F5C\u6D41\u7684 workflowId \u6216\u6570\u5B57 ID",
        scopeOption: "\u5B89\u88C5\u8303\u56F4\uFF08\u9879\u76EE\u6216\u5168\u5C40\uFF09",
        exampleId: "\u901A\u8FC7 ID \u6DFB\u52A0\u5DE5\u4F5C\u6D41",
        exampleName: "\u901A\u8FC7\u540D\u79F0\u6DFB\u52A0\u5DE5\u4F5C\u6D41",
      },
      skillCommand: {
        description: "\u7BA1\u7406\u6280\u80FD",
        demandCommand: "\u60A8\u9700\u8981\u6307\u5B9A\u4E00\u4E2A\u5B50\u547D\u4EE4\u3002",
      },
      skillAdd: {
        description: "\u4ECE\u5728\u7EBF\u4ED3\u5E93\u6DFB\u52A0\u6280\u80FD",
        pleaseAuthenticate: "\u8BF7\u5148\u8FD0\u884C\u8BA4\u8BC1\u547D\u4EE4\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1",
        unableToLoadSkills: "\u65E0\u6CD5\u52A0\u8F7D\u6280\u80FD\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        authenticationFailed:
          "\u8BA4\u8BC1\u5931\u8D25\u3002\u8BF7\u68C0\u67E5\u60A8\u7684 API \u5BC6\u94A5\u6216\u91CD\u65B0\u8BA4\u8BC1",
        accessDenied: "\u8BBF\u95EE\u88AB\u62D2\u7EDD\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u6743\u9650",
        serviceNotFound: "\u672A\u627E\u5230\u6280\u80FD\u670D\u52A1\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        serverError: "\u670D\u52A1\u5668\u9519\u8BEF\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        failedToLoadFromServer: "\u4ECE\u670D\u52A1\u5668\u52A0\u8F7D\u6280\u80FD\u5931\u8D25",
        connectionError:
          "\u65E0\u6CD5\u52A0\u8F7D\u6280\u80FD\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u8FDE\u63A5\u540E\u91CD\u8BD5",
        networkError: "\u7F51\u7EDC\u9519\u8BEF\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5",
        failedToFetchDetails: "\u83B7\u53D6\u6280\u80FD\u8BE6\u60C5\u5931\u8D25\uFF1A{{error}}",
        invalidExtInfo: "\u6280\u80FD\u6269\u5C55\u4FE1\u606F\u65E0\u6548\uFF1A{{error}}",
        noDownloadUrl: "\u6280\u80FD\u6CA1\u6709\u4E0B\u8F7D\u94FE\u63A5",
        downloading: "\u6B63\u5728\u4E0B\u8F7D\u6280\u80FD\u6587\u4EF6\uFF1A{{url}}",
        extracting: "\u6B63\u5728\u89E3\u538B\u6280\u80FD\u6587\u4EF6...",
        copyingFiles: "\u6B63\u5728\u590D\u5236\u6587\u4EF6\u5230 .iflow/skills \u76EE\u5F55...",
        installSuccess: `\u2714 \u6210\u529F\u5B89\u88C5\u6280\u80FD '{{skillName}}'
\u4F4D\u7F6E\uFF1A{{targetDir}}

\u6280\u80FD\u6587\u4EF6\u5DF2\u590D\u5236\u5230 .iflow/skills \u76EE\u5F55\u3002`,
        installFailed: `\u274C \u5B89\u88C5\u6280\u80FD '{{skillName}}' \u5931\u8D25
\u9519\u8BEF\uFF1A{{error}}`,
        apiKeyNotFound: "\u9519\u8BEF\uFF1A\u672A\u627E\u5230 API \u5BC6\u94A5\u3002",
        searching: "\u6B63\u5728\u641C\u7D22\u6280\u80FD '{{nameOrId}}'...",
        error: "\u9519\u8BEF\uFF1A{{error}}",
        notFoundInRepo:
          "\u9519\u8BEF\uFF1A\u5728\u5728\u7EBF\u4ED3\u5E93\u4E2D\u672A\u627E\u5230\u6280\u80FD '{{nameOrId}}'\u3002",
        foundSkill: "\u627E\u5230\u6280\u80FD\uFF1A{{name}}",
        skillDescription: "\u63CF\u8FF0\uFF1A{{description}}",
        installing: "\u6B63\u5728\u5B89\u88C5\u6280\u80FD...",
        errorAdding: "\u6DFB\u52A0\u6280\u80FD\u65F6\u51FA\u9519\uFF1A{{error}}",
        usage: "\u7528\u6CD5\uFF1Aiflow skill add <\u540D\u79F0\u6216ID> [--scope project|global]",
        skillIdOrNumericIdOption: "\u6280\u80FD\u7684 skillId \u6216\u6570\u5B57 ID",
        scopeOption:
          "\u5B89\u88C5\u8303\u56F4\uFF1Aproject\uFF08\u9879\u76EE\uFF09\u6216 global\uFF08\u5168\u5C40\uFF09\uFF0C\u9ED8\u8BA4\u4E3A project",
        exampleProject: "\u5B89\u88C5\u6280\u80FD\u5230\u5F53\u524D\u9879\u76EE",
        exampleGlobal: "\u5B89\u88C5\u6280\u80FD\u5230\u5168\u5C40\uFF08~/.iflow/skills\uFF09",
      },
      help: {
        version: "\u5F53\u524D\u7248\u672C",
        basics: "\u57FA\u7840\u64CD\u4F5C",
        addContext: "\u6DFB\u52A0\u4E0A\u4E0B\u6587",
        addContextDesc:
          "\u4F7F\u7528 {{atSymbol}} \u6765\u6307\u5B9A\u4E0A\u4E0B\u6587\u6587\u4EF6\uFF08\u4F8B\u5982\uFF0C{{example}}\uFF09\u4EE5\u9488\u5BF9\u7279\u5B9A\u6587\u4EF6\u6216\u6587\u4EF6\u5939\u3002",
        shellMode: "Shell \u6A21\u5F0F",
        shellModeDesc:
          "\u901A\u8FC7 {{exclamation}} \u6267\u884C shell \u547D\u4EE4\uFF08\u4F8B\u5982\uFF0C{{shellExample}}\uFF09\u6216\u4F7F\u7528\u81EA\u7136\u8BED\u8A00\uFF08\u4F8B\u5982 {{naturalExample}}\uFF09\u3002",
        commands: "\u547D\u4EE4",
        shellCommand: "shell \u547D\u4EE4",
        keyboardShortcuts: "\u952E\u76D8\u5FEB\u6377\u952E",
        jumpWords: "\u5728\u8F93\u5165\u4E2D\u8DF3\u8F6C\u5355\u8BCD",
        quitApp: "\u9000\u51FA\u5E94\u7528\u7A0B\u5E8F",
        toggleHelp: "\u5207\u6362\u5E2E\u52A9\u5BF9\u8BDD\u6846",
        newLine: "\u65B0\u884C",
        newLineLinux: "\u65B0\u884C\uFF08Alt+Enter \u9002\u7528\u4E8E\u67D0\u4E9B Linux \u53D1\u884C\u7248\uFF09",
        clearScreen: "\u6E05\u9664\u5C4F\u5E55",
        openEditor: "\u5728\u5916\u90E8\u7F16\u8F91\u5668\u4E2D\u6253\u5F00\u8F93\u5165",
        toggleYolo: "\u5207\u6362 YOLO \u6A21\u5F0F",
        toggleDebugConsole: "\u5207\u6362\u8C03\u8BD5\u63A7\u5236\u53F0\u663E\u793A",
        imagePaste: "\u56FE\u7247\u7C98\u8D34",
        sendMessage: "\u53D1\u9001\u6D88\u606F",
        cancelOperation: "\u53D6\u6D88\u64CD\u4F5C",
        toggleMode: "\u5207\u6362\u6A21\u5F0F",
        cycleHistory: "\u5FAA\u73AF\u6D4F\u89C8\u60A8\u7684\u63D0\u793A\u5386\u53F2",
        fullShortcutsList: "\u5B8C\u6574\u7684\u5FEB\u6377\u952E\u5217\u8868\uFF0C\u8BF7\u67E5\u770B",
        scrollUpForMoreTips: "\u4E0A\u6ED1\u67E5\u770B\u66F4\u591A\u4F7F\u7528\u6280\u5DE7",
      },
      editorDialog: {
        userSettings: "\u7528\u6237\u8BBE\u7F6E",
        workspaceSettings: "\u5DE5\u4F5C\u533A\u8BBE\u7F6E",
        alsoModifiedIn: "\uFF08\u540C\u65F6\u5728 {{scope}} \u4E2D\u4FEE\u6539\uFF09",
        modifiedIn: "\uFF08\u5728 {{scope}} \u4E2D\u4FEE\u6539\uFF09",
        none: "\u65E0",
        selectEditor: "\u9009\u62E9\u7F16\u8F91\u5668",
        applyTo: "\u5E94\u7528\u5230",
        instructions: "\u4F7F\u7528 Enter \u9009\u62E9\uFF0CTab \u5207\u6362\u7126\u70B9",
        editorPreference: "\u7F16\u8F91\u5668\u504F\u597D",
        supportedEditorsNote:
          "\u5F53\u524D\u652F\u6301\u8FD9\u4E9B\u7F16\u8F91\u5668\u3002\u8BF7\u6CE8\u610F\uFF0C\u67D0\u4E9B\u7F16\u8F91\u5668\u4E0D\u80FD\u5728\u6C99\u76D2\u6A21\u5F0F\u4E0B\u4F7F\u7528\u3002",
        preferredEditorIs: "\u60A8\u7684\u9996\u9009\u7F16\u8F91\u5668\u662F\uFF1A",
      },
      ideDialog: {
        connectToCurrent: "\u8FDE\u63A5\u5230\u5F53\u524D IDE",
        selectAndConnect: "\u9009\u62E9\u5E76\u8FDE\u63A5\u5230 IDE",
        switchIde: "\u5207\u6362 IDE",
        disconnectIde: "\u65AD\u5F00 IDE \u8FDE\u63A5",
        alreadyConnected: "IDE \u5DF2\u7ECF\u8FDE\u63A5",
        operationFailed: "IDE \u64CD\u4F5C\u5931\u8D25\uFF1A",
        processing: "\u5904\u7406\u4E2D...",
        connected: "IDE \u5DF2\u8FDE\u63A5",
        connecting: "\u6B63\u5728\u8FDE\u63A5\u5230 IDE...",
        notConnected: "\u672A\u8FDE\u63A5\u5230 IDE",
        unknownStatus: "\u672A\u77E5\u72B6\u6001",
        ideConnection: "IDE \u8FDE\u63A5",
        currentStatus: "\u5F53\u524D\u72B6\u6001",
        options: "\u9009\u9879",
        instructions: "\u4F7F\u7528 Enter \u9009\u62E9\uFF0CEsc \u5173\u95ED",
        multipleIdesDetected: "\u68C0\u6D4B\u5230 {{count}} \u4E2A\u53EF\u7528\u7684 IDE",
      },
      ideSelectionDialog: {
        loadingIdes: "\u6B63\u5728\u52A0\u8F7D IDE...",
        noIdesDetected: "\u672A\u68C0\u6D4B\u5230\u53EF\u7528\u7684 IDE",
      },
      mcpListDialog: {
        failedToLoadServers: "\u52A0\u8F7D\u670D\u52A1\u5668\u5931\u8D25",
        serverNotFoundInSettings:
          '\u5728 {{scope}} \u8BBE\u7F6E\u4E2D\u672A\u627E\u5230\u670D\u52A1\u5668 "{{serverName}}"\u3002',
        successfullyRemovedServer: '\u6210\u529F\u4ECE {{scope}} \u8BBE\u7F6E\u4E2D\u79FB\u9664 "{{serverName}}"\u3002',
        failedToRemoveServer: '\u79FB\u9664 "{{serverName}}" \u5931\u8D25\uFF1A{{error}}',
        removingServer: '\u6B63\u5728\u79FB\u9664\u670D\u52A1\u5668 "{{serverName}}"...',
        errorPrefix: "\u274C {{message}}",
        removalFailed: "\u79FB\u9664\u5931\u8D25",
        openingMcpPlatform: "\u6B63\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00 MCP \u5E73\u53F0\uFF1A{{url}}",
        failedToOpenMcpPlatform: "\u6253\u5F00 MCP \u5E73\u53F0\u5931\u8D25\uFF1A{{error}}",
        configuredMcpServers: "\u5DF2\u914D\u7F6E\u7684 MCP \u670D\u52A1\u5668",
        noMcpServersConfigured:
          "\u672A\u914D\u7F6E MCP \u670D\u52A1\u5668\u3002\u4F7F\u7528 /mcp online \u6D4F\u89C8\u5E76\u5B89\u88C5\u670D\u52A1\u5668\u3002",
        navigation: "\u5BFC\u822A",
        openMcpPlatformAction: "\u6253\u5F00 MCP \u5E73\u53F0",
        exit: "\u9000\u51FA",
        configuredMcpServersWithCount:
          "\u5DF2\u914D\u7F6E\u7684 MCP \u670D\u52A1\u5668\uFF08\u5171 {{count}} \u4E2A\uFF09",
        ready: "\u5C31\u7EEA",
        starting: "\u542F\u52A8\u4E2D...",
        disconnected: "\u5DF2\u65AD\u5F00",
        noDescription: "\u65E0\u63CF\u8FF0",
        tools: "\u5DE5\u5177",
        prompts: "\u63D0\u793A",
        from: "\u6765\u81EA",
        pageOf: "\u7B2C {{current}} \u9875\uFF0C\u5171 {{total}} \u9875",
        navigateUpDown: "\u4E0A\u4E0B\u5BFC\u822A",
        viewServerDetails: "\u67E5\u770B\u670D\u52A1\u5668\u8BE6\u60C5",
        removeServer: "\u79FB\u9664\u670D\u52A1\u5668",
        prevNextPage: "\u4E0A\u4E00\u9875/\u4E0B\u4E00\u9875",
        noDescriptionAvailable: "\u65E0\u53EF\u7528\u63CF\u8FF0",
        serverDetails: "\u670D\u52A1\u5668\u8BE6\u60C5",
        status: "\u72B6\u6001",
        connected: "\u5DF2\u8FDE\u63A5",
        connecting: "\u8FDE\u63A5\u4E2D",
        command: "\u547D\u4EE4",
        httpUrl: "HTTP URL",
        sseUrl: "SSE URL",
        source: "\u6765\u6E90",
        extension: "\u6269\u5C55",
        oauth: "OAuth",
        authenticated: "\u5DF2\u8BA4\u8BC1",
        tokenExpired: "\u4EE4\u724C\u5DF2\u8FC7\u671F",
        notAuthenticated: "\u672A\u8BA4\u8BC1",
        availableTools: "\u53EF\u7528\u5DE5\u5177\uFF08{{count}} \u4E2A\uFF09",
        andMoreTools: "... \u8FD8\u6709 {{count}} \u4E2A\u5DE5\u5177",
        availablePrompts: "\u53EF\u7528\u63D0\u793A\uFF08{{count}} \u4E2A\uFF09",
        andMorePrompts: "... \u8FD8\u6709 {{count}} \u4E2A\u63D0\u793A",
        actions: "\u64CD\u4F5C",
        removeThisServer: "\u79FB\u9664\u6B64\u670D\u52A1\u5668",
        backToList: "\u8FD4\u56DE\u5217\u8868",
        confirmServerRemoval: "\u786E\u8BA4\u670D\u52A1\u5668\u79FB\u9664",
        confirmRemovalMessage: "\u60A8\u786E\u5B9A\u8981\u79FB\u9664\u4EE5\u4E0B MCP \u670D\u52A1\u5668\u5417\uFF1F",
        removalWarning:
          "\u8FD9\u5C06\u4ECE\u60A8\u7684\u914D\u7F6E\u4E2D\u79FB\u9664\u670D\u52A1\u5668\u5E76\u505C\u6B62\u5176\u6240\u6709\u5DE5\u5177\u3002",
        yesRemoveServer: "\u662F\uFF0C\u79FB\u9664\u670D\u52A1\u5668",
        noCancel: "\u5426\uFF0C\u53D6\u6D88",
        cancel: "\u53D6\u6D88",
        loadingMcpServers: "\u6B63\u5728\u52A0\u8F7D MCP \u670D\u52A1\u5668...",
        pleaseWaitLoading:
          "\u8BF7\u7A0D\u5019\uFF0C\u6B63\u5728\u52A0\u8F7D\u60A8\u914D\u7F6E\u7684\u670D\u52A1\u5668...",
        contextLength: "\u4E0A\u4E0B\u6587\u957F\u5EA6",
        tokens: "tokens",
        disabled: "\u5DF2\u7981\u7528",
        enableServer: "\u542F\u7528\u670D\u52A1\u5668",
        disableServer: "\u7981\u7528\u670D\u52A1\u5668",
        serverEnabled: '\u670D\u52A1\u5668 "{{serverName}}" \u5DF2\u542F\u7528',
        serverDisabled: '\u670D\u52A1\u5668 "{{serverName}}" \u5DF2\u7981\u7528',
        failedToUpdateServer: '\u66F4\u65B0\u670D\u52A1\u5668 "{{serverName}}" \u72B6\u6001\u5931\u8D25\uFF1A{{error}}',
        authenticateServer: "\u8BA4\u8BC1\u670D\u52A1\u5668",
        startingAuth: '\u6B63\u5728\u4E3A\u670D\u52A1\u5668 "{{serverName}}" \u542F\u52A8 OAuth \u8BA4\u8BC1...',
        authSuccess: '\u670D\u52A1\u5668 "{{serverName}}" \u8BA4\u8BC1\u6210\u529F',
        authFailed: '\u670D\u52A1\u5668 "{{serverName}}" \u8BA4\u8BC1\u5931\u8D25',
        cannotDetermineUrl:
          '\u65E0\u6CD5\u786E\u5B9A\u670D\u52A1\u5668 "{{serverName}}" \u7684 URL\u3002\u8BF7\u68C0\u67E5\u914D\u7F6E\u3002',
        authCancelled: "\u8BA4\u8BC1\u5DF2\u53D6\u6D88",
        rediscoveringTools:
          '\u6B63\u5728\u91CD\u65B0\u53D1\u73B0\u670D\u52A1\u5668 "{{serverName}}" \u7684\u5DE5\u5177...',
        authenticating: "\u6B63\u5728\u8BA4\u8BC1...",
        authInProgress: "\u6B63\u5728\u8FDB\u884C OAuth \u8BA4\u8BC1\uFF0C\u8BF7\u7A0D\u5019...",
        pressEscToCancel: "\u6309 Esc \u53D6\u6D88",
        authorizationRequired: "\u9700\u8981\u6388\u6743",
        openUrlInBrowser:
          "\u8BF7\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u4EE5\u4E0B URL \u5B8C\u6210\u6388\u6743\uFF1A",
        authUrlInstructions:
          "\u{1F4A1} \u63D0\u793A\uFF1A\u4E09\u6B21\u70B9\u51FB\u9009\u62E9\u6574\u4E2A URL\uFF0C\u7136\u540E\u590D\u5236\u5E76\u7C98\u8D34\u5230\u6D4F\u89C8\u5668\u4E2D\u3002",
        manualCallbackRequired: "\u9700\u8981\u624B\u52A8\u8F93\u5165\u56DE\u8C03 URL",
        manualCallbackInstructions:
          "\u8BF7\u5728\u6D4F\u89C8\u5668\u4E2D\u5B8C\u6210\u6388\u6743\u540E\uFF0C\u590D\u5236\u5730\u5740\u680F\u4E2D\u7684\u5B8C\u6574 URL\uFF08\u5305\u542B code \u53C2\u6570\uFF09",
        manualCallbackNote:
          "\u26A0\uFE0F \u6CE8\u610F\uFF1A\u6B64\u529F\u80FD\u9700\u8981\u624B\u52A8\u8F93\u5165\u652F\u6301\uFF0C\u5F53\u524D\u4E3A\u5360\u4F4D\u7B26\u663E\u793A\u3002",
        restartingMcpRemote:
          '\u6B63\u5728\u91CD\u542F mcp-remote \u670D\u52A1\u5668 "{{serverName}}" \u4EE5\u89E6\u53D1\u91CD\u65B0\u8BA4\u8BC1...',
        mcpRemoteRestarted:
          'mcp-remote \u670D\u52A1\u5668 "{{serverName}}" \u5DF2\u91CD\u542F\uFF0C\u8BF7\u5728\u6D4F\u89C8\u5668\u4E2D\u5B8C\u6210\u6388\u6743\u3002',
        mcpRemoteOAuthUrl:
          'mcp-remote \u670D\u52A1\u5668 "{{serverName}}" \u9700\u8981\u6388\u6743\uFF0C\u8BF7\u8BBF\u95EE\uFF1A{{url}}',
        restartFailed: '\u91CD\u542F\u670D\u52A1\u5668 "{{serverName}}" \u5931\u8D25\uFF1A{{error}}',
        cannotGetToolRegistry: "\u65E0\u6CD5\u83B7\u53D6\u5DE5\u5177\u6CE8\u518C\u8868\u3002",
      },
      skillsListDialog: {
        failedToLoadSkills: "\u52A0\u8F7D\u6280\u80FD\u5931\u8D25",
        noSkillSelected: "\u672A\u9009\u62E9\u6280\u80FD",
        configuredSkills: "\u5DF2\u914D\u7F6E\u7684\u6280\u80FD",
        noSkillsConfigured:
          "\u672A\u914D\u7F6E\u6280\u80FD\u3002\u5728 .iflow/skills \u76EE\u5F55\u4E2D\u521B\u5EFA SKILL.md \u6587\u4EF6\u3002",
        navigation: "\u5BFC\u822A",
        exit: "\u9000\u51FA",
        configuredSkillsWithCount: "\u5DF2\u914D\u7F6E\u7684\u6280\u80FD\uFF08\u5171 {{count}} \u4E2A\uFF09",
        global: "\u5168\u5C40",
        project: "\u9879\u76EE",
        noDescription: "\u65E0\u63CF\u8FF0",
        pageOf: "\u7B2C {{current}} \u9875\uFF0C\u5171 {{total}} \u9875",
        navigateUpDown: "\u4E0A\u4E0B\u5BFC\u822A",
        viewSkillDetails: "\u67E5\u770B\u6280\u80FD\u8BE6\u60C5",
        prevNextPage: "\u4E0A\u4E00\u9875/\u4E0B\u4E00\u9875",
        noDescriptionAvailable: "\u65E0\u53EF\u7528\u63CF\u8FF0",
        skillDetails: "\u6280\u80FD\u8BE6\u60C5",
        location: "\u4F4D\u7F6E",
        filePath: "\u6587\u4EF6\u8DEF\u5F84",
        baseDirectory: "\u57FA\u7840\u76EE\u5F55",
        license: "\u8BB8\u53EF\u8BC1",
        contentPreview: "\u5185\u5BB9\u9884\u89C8",
        backToList: "\u8FD4\u56DE\u5217\u8868",
        loadingSkills: "\u6B63\u5728\u52A0\u8F7D\u6280\u80FD...",
        confirmationTitle: "\u542F\u52A8\u6280\u80FD\uFF1A{{skillName}}",
        confirmationPromptSkill: "**\u6280\u80FD\uFF1A**",
        confirmationPromptDescription: "**\u63CF\u8FF0\uFF1A**",
        confirmationPromptLocation: "**\u4F4D\u7F6E\uFF1A**",
        confirmationPromptQuestion: "\u662F\u5426\u8981\u542F\u52A8\u6B64\u6280\u80FD\uFF1F",
        skillNotFound: "\u6280\u80FD\u672A\u627E\u5230\uFF1A{{skillName}}",
        launchingSkill: "\u6B63\u5728\u542F\u52A8\u6280\u80FD\uFF1A**{{skillName}}**",
      },
      app: {
        continueMode: {
          continuedFromRecent:
            "\u4ECE\u6700\u8FD1\u7684\u5BF9\u8BDD\u7EE7\u7EED\uFF08\u5DF2\u6062\u590D {{messageCount}} \u6761\u6D88\u606F\uFF09\u3002",
          noPreviousConversations: "\u672A\u627E\u5230\u4E4B\u524D\u7684\u5BF9\u8BDD\u53EF\u7EE7\u7EED\u3002",
          failedToLoad: "\u52A0\u8F7D\u6700\u8FD1\u5BF9\u8BDD\u5931\u8D25\uFF1A{{error}}",
        },
        resumeMode: {
          resumedSession:
            "\u5DF2\u6062\u590D\u4F1A\u8BDD {{sessionId}}\uFF08\u5DF2\u6062\u590D {{messageCount}} \u6761\u6D88\u606F\uFF09\u3002",
          sessionNotFound: "\u4F1A\u8BDD {{sessionId}} \u672A\u627E\u5230\u6216\u4E3A\u7A7A\u3002",
          failedToHandle: "\u5904\u7406\u6062\u590D\u6A21\u5F0F\u5931\u8D25\uFF1A{{error}}",
          failedToResume: "\u6062\u590D\u4F1A\u8BDD\u5931\u8D25\uFF1A{{error}}",
          failedToResumeSession: "\u6062\u590D\u4F1A\u8BDD {{sessionId}} \u5931\u8D25\u3002",
          cancelled: "\u6062\u590D\u5DF2\u53D6\u6D88\u3002\u5F00\u59CB\u65B0\u4F1A\u8BDD\u3002",
        },
        fgMode: { failedToLoad: "\u52A0\u8F7D\u6700\u8FD1\u5BF9\u8BDD\u5931\u8D25\uFF1A{{error}}" },
        messageQueue: { submitSuccessful: "\u6D88\u606F\u63D0\u4EA4\u6210\u529F" },
        controls: {
          pressCtrlCAgainToExit: "\u518D\u6B21\u6309 Ctrl+C \u9000\u51FA\u3002",
          pressCtrlDAgainToExit: "\u518D\u6B21\u6309 Ctrl+D \u9000\u51FA\u3002",
          cliSuspended: "\u23F8\uFE0F iFlow CLI \u5DF2\u6682\u505C\u3002\u8FD0\u884C `fg` \u6062\u590D iFlow CLI\u3002",
        },
        errors: {
          initializationError: "\u521D\u59CB\u5316\u9519\u8BEF\uFF1A{{error}}",
          checkApiKeyAndConfig: "\u8BF7\u68C0\u67E5 API \u5BC6\u94A5\u548C\u914D\u7F6E\u3002",
        },
        memory: {
          refreshing:
            "\u6B63\u5728\u5237\u65B0\u5206\u5C42\u5185\u5B58\uFF08IFLOW.md \u6216\u5176\u4ED6\u4E0A\u4E0B\u6587\u6587\u4EF6\uFF09...",
          refreshSuccessWithContent:
            "\u5185\u5B58\u5237\u65B0\u6210\u529F\u3002\u4ECE {{fileCount}} \u4E2A\u6587\u4EF6\u52A0\u8F7D\u4E86 {{characters}} \u4E2A\u5B57\u7B26\u3002",
          refreshSuccessNoContent:
            "\u5185\u5B58\u5237\u65B0\u6210\u529F\u3002\u672A\u627E\u5230\u5185\u5B58\u5185\u5BB9\u3002",
          refreshError: "\u5237\u65B0\u5185\u5B58\u65F6\u51FA\u9519\uFF1A{{error}}",
        },
        planApproval: {
          exitingPlanMode: "\u9000\u51FA\u8BA1\u5212\u6A21\u5F0F\u5E76\u5207\u6362\u5230{{mode}}\u3002",
          continuingPlanMode:
            "\u7EE7\u7EED\u8BA1\u5212\u6A21\u5F0F\u3002\u8BF7\u63D0\u4F9B\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\u6216\u63D0\u51FA\u95EE\u9898\u4EE5\u5B8C\u5584\u8BA1\u5212\u3002",
          cancelled: "\u8BA1\u5212\u6279\u51C6\u5DF2\u53D6\u6D88\u3002\u64CD\u4F5C\u672A\u6267\u884C\u3002",
          failedToWritePlan: "\u65E0\u6CD5\u5C06\u8BA1\u5212\u5199\u5165\u6587\u4EF6: {{error}}",
          planWrittenToFile:
            "\u8BA1\u5212\u5DF2\u5199\u5165 {{filePath}}\u3002\u8BF7\u67E5\u770B\u5E76\u786E\u8BA4\u4EE5\u7EE7\u7EED\u3002",
          noPlanContent:
            "\u7528\u6237\u672A\u63D0\u4F9B\u65B0\u7684\u8BA1\u5212\u5185\u5BB9\uFF0C\u8BF7\u68C0\u67E5\u4FEE\u6539\u60C5\u51B5\u548C plan.md \u6587\u4EF6\u662F\u5426\u88AB\u624B\u52A8\u5220\u9664\u3002",
          newPlan: `\u65B0\u7684\u8BA1\u5212:
## Plan

{{content}}`,
        },
        userQuestion: {
          cancelled: "\u7528\u6237\u95EE\u9898\u5BF9\u8BDD\u5DF2\u53D6\u6D88\u3002\u64CD\u4F5C\u672A\u6267\u884C\u3002",
        },
        quotaErrors: {
          proQuotaExceededPaid: `\u26A1 \u60A8\u5DF2\u8FBE\u5230\u6BCF\u65E5 {{currentModel}} \u914D\u989D\u9650\u5236\u3002
\u26A1 \u81EA\u52A8\u4ECE {{currentModel}} \u5207\u6362\u5230 {{fallbackModel}}\uFF0C\u76F4\u5230\u672C\u6B21\u4F1A\u8BDD\u7ED3\u675F\u3002
\u26A1 \u8981\u7EE7\u7EED\u8BBF\u95EE {{currentModel}} \u6A21\u578B\uFF0C\u8BF7\u8003\u8651\u4F7F\u7528 /auth \u5207\u6362\u5230 AI Studio \u7684\u4ED8\u8D39 API \u5BC6\u94A5\uFF1Ahttps://aistudio.google.com/apikey`,
          proQuotaExceededFree: `\u26A1 \u60A8\u5DF2\u8FBE\u5230\u6BCF\u65E5 {{currentModel}} \u914D\u989D\u9650\u5236\u3002
\u26A1 \u81EA\u52A8\u4ECE {{currentModel}} \u5207\u6362\u5230 {{fallbackModel}}\uFF0C\u76F4\u5230\u672C\u6B21\u4F1A\u8BDD\u7ED3\u675F\u3002
\u26A1 \u8981\u63D0\u9AD8\u9650\u5236\uFF0C\u8BF7\u5347\u7EA7\u5230\u66F4\u9AD8\u9650\u5236\u7684 iFlow Code Assist \u6807\u51C6\u7248\u6216\u4F01\u4E1A\u7248\uFF1Ahttps://goo.gle/set-up-gemini-code-assist
\u26A1 \u6216\u8005\u60A8\u53EF\u4EE5\u4F7F\u7528 iFlow API \u5BC6\u94A5\u3002\u8BF7\u53C2\u9605\uFF1Ahttps://docs.iflow.cn/docs/
\u26A1 \u60A8\u53EF\u4EE5\u901A\u8FC7\u8F93\u5165 /auth \u5207\u6362\u8BA4\u8BC1\u65B9\u5F0F`,
          genericQuotaExceededPaid: `\u26A1 \u60A8\u5DF2\u8FBE\u5230\u6BCF\u65E5\u914D\u989D\u9650\u5236\u3002
\u26A1 \u81EA\u52A8\u4ECE {{currentModel}} \u5207\u6362\u5230 {{fallbackModel}}\uFF0C\u76F4\u5230\u672C\u6B21\u4F1A\u8BDD\u7ED3\u675F\u3002
\u26A1 \u8981\u7EE7\u7EED\u8BBF\u95EE {{currentModel}} \u6A21\u578B\uFF0C\u8BF7\u8003\u8651\u4F7F\u7528 /auth \u5207\u6362\u5230 AI Studio \u7684\u4ED8\u8D39 API \u5BC6\u94A5\uFF1Ahttps://aistudio.google.com/apikey`,
          genericQuotaExceededFree: `\u26A1 \u60A8\u5DF2\u8FBE\u5230\u6BCF\u65E5\u914D\u989D\u9650\u5236\u3002
\u26A1 \u81EA\u52A8\u4ECE {{currentModel}} \u5207\u6362\u5230 {{fallbackModel}}\uFF0C\u76F4\u5230\u672C\u6B21\u4F1A\u8BDD\u7ED3\u675F\u3002
\u26A1 \u8981\u63D0\u9AD8\u9650\u5236\uFF0C\u8BF7\u5347\u7EA7\u5230\u66F4\u9AD8\u9650\u5236\u7684 iFlow Code Assist \u6807\u51C6\u7248\u6216\u4F01\u4E1A\u7248\uFF1Ahttps://goo.gle/set-up-gemini-code-assist
\u26A1 \u6216\u8005\u60A8\u53EF\u4EE5\u4F7F\u7528 iFlow API \u5BC6\u94A5\u3002\u8BF7\u53C2\u9605\uFF1Ahttps://docs.iflow.cn/docs/
\u26A1 \u60A8\u53EF\u4EE5\u901A\u8FC7\u8F93\u5165 /auth \u5207\u6362\u8BA4\u8BC1\u65B9\u5F0F`,
          defaultFallbackPaid: `\u26A1 \u81EA\u52A8\u4ECE {{currentModel}} \u5207\u6362\u5230 {{fallbackModel}} \u4EE5\u83B7\u5F97\u66F4\u5FEB\u7684\u54CD\u5E94\uFF0C\u76F4\u5230\u672C\u6B21\u4F1A\u8BDD\u7ED3\u675F\u3002
\u26A1 \u53EF\u80FD\u7684\u539F\u56E0\u662F\u60A8\u6536\u5230\u4E86\u591A\u4E2A\u8FDE\u7EED\u7684\u5BB9\u91CF\u9519\u8BEF\u6216\u5DF2\u8FBE\u5230\u6BCF\u65E5 {{currentModel}} \u914D\u989D\u9650\u5236
\u26A1 \u8981\u7EE7\u7EED\u8BBF\u95EE {{currentModel}} \u6A21\u578B\uFF0C\u8BF7\u8003\u8651\u4F7F\u7528 /auth \u5207\u6362\u5230 AI Studio \u7684\u4ED8\u8D39 API \u5BC6\u94A5\uFF1Ahttps://aistudio.google.com/apikey`,
          defaultFallbackFree: `\u26A1 \u81EA\u52A8\u4ECE {{currentModel}} \u5207\u6362\u5230 {{fallbackModel}} \u4EE5\u83B7\u5F97\u66F4\u5FEB\u7684\u54CD\u5E94\uFF0C\u76F4\u5230\u672C\u6B21\u4F1A\u8BDD\u7ED3\u675F\u3002
\u26A1 \u53EF\u80FD\u7684\u539F\u56E0\u662F\u60A8\u6536\u5230\u4E86\u591A\u4E2A\u8FDE\u7EED\u7684\u5BB9\u91CF\u9519\u8BEF\u6216\u5DF2\u8FBE\u5230\u6BCF\u65E5 {{currentModel}} \u914D\u989D\u9650\u5236
\u26A1 \u8981\u63D0\u9AD8\u9650\u5236\uFF0C\u8BF7\u5347\u7EA7\u5230\u66F4\u9AD8\u9650\u5236\u7684 iFlow Code Assist \u6807\u51C6\u7248\u6216\u4F01\u4E1A\u7248\uFF1Ahttps://goo.gle/set-up-gemini-code-assist
\u26A1 \u6216\u8005\u60A8\u53EF\u4EE5\u4F7F\u7528 iFlow API \u5BC6\u94A5\u3002\u8BF7\u53C2\u9605\uFF1Ahttps://docs.iflow.cn/docs/
\u26A1 \u60A8\u53EF\u4EE5\u901A\u8FC7\u8F93\u5165 /auth \u5207\u6362\u8BA4\u8BC1\u65B9\u5F0F`,
        },
        auth: { timeout: "\u8EAB\u4EFD\u9A8C\u8BC1\u8D85\u65F6\u3002\u8BF7\u91CD\u8BD5\u3002" },
      },
      modelStatsDisplay: {
        title: "\u6A21\u578B\u7EDF\u8BA1\uFF08\u6280\u672F\u4EBA\u5458\u4E13\u7528\uFF09",
        noApiCalls: "\u672C\u6B21\u4F1A\u8BDD\u4E2D\u672A\u8FDB\u884C API \u8C03\u7528\u3002",
        metric: "\u6307\u6807",
        api: "API",
        requests: "\u8BF7\u6C42",
        errors: "\u9519\u8BEF",
        avgLatency: "\u5E73\u5747\u5EF6\u8FDF",
        tokens: "Token",
        total: "\u603B\u8BA1",
        prompt: "\u63D0\u793A",
        cached: "\u7F13\u5B58",
        thoughts: "\u601D\u8003",
        tool: "\u5DE5\u5177",
        output: "\u8F93\u51FA",
      },
      setupGithubCommand: {
        errors: {
          notGitRepository:
            "\u65E0\u6CD5\u786E\u5B9A GitHub \u4ED3\u5E93\u3002/setup-github \u5FC5\u987B\u4ECE git \u4ED3\u5E93\u4E2D\u8FD0\u884C\u3002",
          cannotCreateDirectory:
            "\u65E0\u6CD5\u521B\u5EFA {{directory}} \u76EE\u5F55\u3002\u60A8\u5728\u5F53\u524D\u76EE\u5F55\u4E2D\u662F\u5426\u6709\u6587\u4EF6\u6743\u9650\uFF1F",
          downloadFailed:
            "\u4E0B\u8F7D {{endpoint}} \u65F6\u54CD\u5E94\u4EE3\u7801\u65E0\u6548\uFF1A{{status}} - {{statusText}}",
          emptyDownload:
            "\u4E0B\u8F7D {{endpoint}} \u65F6\u54CD\u5E94\u4F53\u4E3A\u7A7A\uFF1A{{status}} - {{statusText}}",
        },
        success:
          "\u6210\u529F\u4E0B\u8F7D\u4E86 {{workflowCount}} \u4E2A\u5DE5\u4F5C\u6D41\u5E76\u66F4\u65B0\u4E86 .gitignore\u3002\u8BF7\u6309\u7167 {{readmeUrl}} \u4E2D\u7684\u6B65\u9AA4\uFF08\u8DF3\u8FC7 /setup-github \u6B65\u9AA4\uFF09\u5B8C\u6210\u8BBE\u7F6E\u3002",
        toolDescription:
          "\u8BBE\u7F6E GitHub Actions \u4EE5\u4F7F\u7528 iFlow \u5206\u7C7B\u95EE\u9898\u548C\u5BA1\u67E5 PR\u3002",
      },
      gitUtils: {
        errors: {
          emptyRepoRoot: "Git \u4ED3\u5E93\u8FD4\u56DE\u7A7A\u503C",
          cannotExtractRepoInfo:
            "\u65E0\u6CD5\u4ECE\u8FDC\u7A0B URL \u4E2D\u63D0\u53D6\u6240\u6709\u8005\u548C\u4ED3\u5E93\u4FE1\u606F\uFF1A{{remoteUrl}}",
        },
      },
      mcpGet: {
        description: "\u83B7\u53D6\u670D\u52A1\u5668\u914D\u7F6E",
        usage: "\u7528\u6CD5\uFF1Aiflow mcp get <\u540D\u79F0>",
        options: { name: "\u670D\u52A1\u5668\u540D\u79F0" },
        errors: { serverNotFound: '\u672A\u627E\u5230 MCP \u670D\u52A1\u5668 "{{name}}"\u3002' },
        info: {
          serverTitle: "MCP \u670D\u52A1\u5668\uFF1A{{name}}",
          configuration: "\u914D\u7F6E\uFF1A",
          transportStdio: "  \u4F20\u8F93\u65B9\u5F0F\uFF1Astdio",
          transportSse: "  \u4F20\u8F93\u65B9\u5F0F\uFF1Asse",
          transportHttp: "  \u4F20\u8F93\u65B9\u5F0F\uFF1Ahttp",
          transportUnknown: "  \u4F20\u8F93\u65B9\u5F0F\uFF1A\u672A\u77E5",
          command: "  \u547D\u4EE4\uFF1A{{command}}",
          url: "  URL\uFF1A{{url}}",
          arguments: "  \u53C2\u6570\uFF1A",
          argumentItem: "    [{{index}}]\uFF1A{{arg}}",
          environmentVariables: "  \u73AF\u5883\u53D8\u91CF\uFF1A",
          envVar: "    {{key}}={{value}}",
          headers: "  \u8BF7\u6C42\u5934\uFF1A",
          header: "    {{key}}\uFF1A{{value}}",
          description: "  \u63CF\u8FF0\uFF1A{{description}}",
          timeout: "  \u8D85\u65F6\uFF1A{{timeout}}\u6BEB\u79D2",
          trusted: "  \u53D7\u4FE1\u4EFB\uFF1A{{trusted}}",
          includeTools: "  \u5305\u542B\u5DE5\u5177\uFF1A",
          excludeTools: "  \u6392\u9664\u5DE5\u5177\uFF1A",
          toolItem: "    [{{index}}]\uFF1A{{tool}}",
          extension: "  \u6269\u5C55\uFF1A{{extension}}",
          rawJsonConfiguration: "\u539F\u59CB JSON \u914D\u7F6E\uFF1A",
        },
        common: { yes: "\u662F", no: "\u5426" },
      },
      mcpList: {
        description: "\u5217\u51FA\u6240\u6709\u5DF2\u914D\u7F6E\u7684 MCP \u670D\u52A1\u5668",
        info: {
          noServersConfigured: "\u672A\u914D\u7F6E MCP \u670D\u52A1\u5668\u3002",
          configuredServers: `\u5DF2\u914D\u7F6E\u7684 MCP \u670D\u52A1\u5668\uFF1A
`,
          serverInfoHttp: "{{url}} (http)",
          serverInfoSse: "{{url}} (sse)",
          serverInfoStdio: "{{command}} {{args}} (stdio)",
          serverStatusLine: "{{statusIndicator}} {{serverInfo}} - {{statusText}}",
        },
        status: {
          connected: "\u5DF2\u8FDE\u63A5",
          connecting: "\u8FDE\u63A5\u4E2D",
          disconnected: "\u5DF2\u65AD\u5F00",
          disabled: "\u5DF2\u7981\u7528",
        },
      },
      mcpRemove: {
        description: "\u79FB\u9664\u670D\u52A1\u5668",
        usage: "\u7528\u6CD5\uFF1Aiflow mcp remove [\u9009\u9879] <\u540D\u79F0>",
        options: {
          name: "\u670D\u52A1\u5668\u540D\u79F0",
          scope: "\u914D\u7F6E\u8303\u56F4\uFF08\u7528\u6237\u6216\u9879\u76EE\uFF09",
        },
        errors: {
          serverNotFound: '\u5728 {{scope}} \u8BBE\u7F6E\u4E2D\u672A\u627E\u5230\u670D\u52A1\u5668 "{{name}}"\u3002',
        },
        info: {
          serverRemoved: '\u5DF2\u4ECE {{scope}} \u8BBE\u7F6E\u4E2D\u79FB\u9664\u670D\u52A1\u5668 "{{name}}"\u3002',
        },
      },
      mcpResetProjectChoices: {
        description: "\u91CD\u7F6E\u6240\u6709\u9879\u76EE\u8303\u56F4\u5185\u7684 MCP \u670D\u52A1\u5668\u9009\u62E9",
        usage: "\u7528\u6CD5\uFF1Aiflow mcp reset-project-choices",
        info: {
          noFilesFound: "\u5728\u6B64\u9879\u76EE\u4E2D\u672A\u627E\u5230 .mcp.json \u6587\u4EF6",
          foundFiles: "\u5728\u9879\u76EE\u4E2D\u627E\u5230\u4E86 {{count}} \u4E2A .mcp.json \u6587\u4EF6\uFF1A",
          invalidJson: "  \u26A0\uFE0F  {{path}} - \u65E0\u6548\u7684 JSON\uFF0C\u8DF3\u8FC7",
          fileDeleted: "  \u2714 {{path}} - \u5DF2\u5220\u9664",
          noChoicesSkipping:
            "  \u2139\uFE0F  {{path}} - \u6CA1\u6709 MCP \u670D\u52A1\u5668\u9009\u62E9\uFF0C\u8DF3\u8FC7",
          summary: "\u6458\u8981\uFF1A",
          deletedFiles: "  \u5DF2\u5220\u9664\uFF1A{{count}} \u4E2A\u6587\u4EF6",
          errorFiles: "  \u9519\u8BEF\uFF1A{{count}} \u4E2A\u6587\u4EF6",
          resetComplete:
            "\u2714 \u6240\u6709\u9879\u76EE\u8303\u56F4\u5185\u7684 MCP \u670D\u52A1\u5668\u9009\u62E9\u5DF2\u91CD\u7F6E",
          extensionPrompt:
            "   \u6269\u5C55\u63D0\u4F9B\u7684 MCP \u670D\u52A1\u5668\u5C06\u518D\u6B21\u63D0\u793A\u6279\u51C6",
        },
        errors: {
          fileError: "  \u274C {{path}} - \u9519\u8BEF\uFF1A{{error}}",
          searchError: "\u641C\u7D22 .mcp.json \u6587\u4EF6\u65F6\u51FA\u9519\uFF1A",
        },
      },
      mcpSettingsUtils: {
        errors: {
          loadingSettings: "\u4ECE {{path}} \u52A0\u8F7D\u8BBE\u7F6E\u65F6\u51FA\u9519\uFF1A",
          savingSettings: "\u4FDD\u5B58\u8BBE\u7F6E\u5230 {{path}} \u65F6\u51FA\u9519\uFF1A",
        },
      },
      agentCommand: {
        description: "\u7BA1\u7406\u4EE3\u7406",
        demandCommand:
          "\u5728\u7EE7\u7EED\u4E4B\u524D\uFF0C\u60A8\u9700\u8981\u81F3\u5C11\u4E00\u4E2A\u547D\u4EE4\u3002",
      },
      agentConfigCreator: {
        progress: {
          generatingConfiguration: "\u6B63\u5728\u751F\u6210\u4EE3\u7406\u914D\u7F6E...",
          processingResponse: "\u6B63\u5728\u5904\u7406\u54CD\u5E94...",
          parsingConfiguration: "\u6B63\u5728\u89E3\u6790\u914D\u7F6E...",
          configurationGeneratedSuccessfully: "\u914D\u7F6E\u751F\u6210\u6210\u529F\uFF01",
        },
        errors: {
          contentGeneratorConfigNotAvailable: "\u5185\u5BB9\u751F\u6210\u5668\u914D\u7F6E\u4E0D\u53EF\u7528",
          generationFailed: "\u4EE3\u7406\u914D\u7F6E\u751F\u6210\u5931\u8D25\uFF1A{{message}}",
          noResponseReceived: "\u672A\u4ECE AI \u4EE3\u7406\u914D\u7F6E\u751F\u6210\u5668\u6536\u5230\u54CD\u5E94",
          missingRequiredFields: "\u65E0\u6548\u7684\u4EE3\u7406\u914D\u7F6E\uFF1A\u7F3A\u5C11\u5FC5\u9700\u5B57\u6BB5",
          invalidIdentifierFormat:
            "\u65E0\u6548\u7684\u6807\u8BC6\u7B26\u683C\u5F0F\uFF1A\u5FC5\u987B\u53EA\u5305\u542B\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u8FDE\u5B57\u7B26",
          failedToParseJson:
            "\u89E3\u6790\u4EE3\u7406\u914D\u7F6E JSON \u5931\u8D25\u3002AI \u54CD\u5E94\u4E0D\u662F\u6709\u6548\u7684 JSON \u683C\u5F0F\u3002\u9519\u8BEF\uFF1A{{error}}",
          generationCancelled: "\u4EE3\u7406\u914D\u7F6E\u751F\u6210\u5DF2\u53D6\u6D88",
          generationFailedGeneric: "\u4EE3\u7406\u914D\u7F6E\u751F\u6210\u5931\u8D25\uFF1A{{error}}",
        },
      },
      valueInputDialog: {
        mcpServerConfiguration: "MCP \u670D\u52A1\u5668\u914D\u7F6E\uFF1A{{serverName}}",
        stepOfConfigure: "\u6B65\u9AA4 {{current}}/{{total}}\uFF1A\u914D\u7F6E {{key}}",
        enterPlaceholder: "\u8F93\u5165 {{key}}...",
        expectedTypeInteger: "\u671F\u671B\u7C7B\u578B\uFF1A\u6574\u6570",
        pleaseEnterValidInteger: "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u6574\u6570",
        pressEscapeToGoBack: "\u6309 Esc \u8FD4\u56DE",
        pressEscapeToCancel: "\u6309 Esc \u53D6\u6D88",
      },
      commandsOnlineDialog: {
        apiKeyNotFound:
          "\u672A\u627E\u5230 API \u5BC6\u94A5\u3002\u8BF7\u5148\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1\u3002",
        unableToLoadCommands: "\u65E0\u6CD5\u52A0\u8F7D\u547D\u4EE4\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        authenticationFailed:
          "\u8EAB\u4EFD\u9A8C\u8BC1\u5931\u8D25\u3002\u8BF7\u68C0\u67E5\u60A8\u7684 API \u5BC6\u94A5\u6216\u91CD\u65B0\u9A8C\u8BC1",
        accessDenied: "\u8BBF\u95EE\u88AB\u62D2\u7EDD\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u6743\u9650",
        serviceNotFound: "\u672A\u627E\u5230\u547D\u4EE4\u670D\u52A1\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        serverError: "\u670D\u52A1\u5668\u9519\u8BEF\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5",
        failedToFetchCommands: "\u83B7\u53D6\u547D\u4EE4\u5931\u8D25",
        failedToFetchCommandsWithError: "\u83B7\u53D6\u547D\u4EE4\u5931\u8D25\uFF1A{{error}}",
        noCommandsFound: "\u5728\u7EBF\u4ED3\u5E93\u4E2D\u672A\u627E\u5230\u547D\u4EE4\u3002",
        failedToLoadCommands: "\u52A0\u8F7D\u547D\u4EE4\u5931\u8D25",
        commandAlreadyInstalled:
          "\u547D\u4EE4 '{{name}}' \u5DF2\u5728\u60A8\u7684 {{scope}} \u8303\u56F4\u5185\u5B89\u88C5\u3002",
        successfullyInstalled: `\u6210\u529F\u4E3A {{scope}} \u5B89\u88C5\u547D\u4EE4 '{{name}}'
\u4F4D\u7F6E\uFF1A{{filePath}}

\u26A0\uFE0F  \u8BF7\u91CD\u542F CLI \u4EE5\u4F7F\u7528\u65B0\u547D\u4EE4\u3002`,
        failedToInstall: "\u5B89\u88C5\u547D\u4EE4 '{{name}}' \u5931\u8D25\uFF1A{{error}}",
        installationFailed: "\u5B89\u88C5\u5931\u8D25",
        availableCommands: "\u53EF\u7528\u547D\u4EE4",
        noCommandsAvailable: "\u6CA1\u6709\u53EF\u7528\u7684\u547D\u4EE4",
        availableCommandsWithTotal: "\u53EF\u7528\u547D\u4EE4\uFF08\u5171 {{totalCommands}} \u4E2A\uFF09",
        category: "\u5206\u7C7B",
        tags: "\u6807\u7B7E",
        pageOfTotal: "\u7B2C {{current}} \u9875\uFF0C\u5171 {{total}} \u9875",
        navigation: "\u5BFC\u822A",
        navigateUpDown: "\u2191/\u2193 \u6216 j/k - \u4E0A\u4E0B\u5BFC\u822A",
        previousNextPage: "\u2190/\u2192 \u6216 h/l - \u4E0A\u4E00\u9875/\u4E0B\u4E00\u9875",
        enterViewDetails: "Enter - \u67E5\u770B\u8BE6\u60C5",
        qExit: "q - \u9000\u51FA",
        details: "\u8BE6\u60C5",
        id: "ID",
        model: "\u6A21\u578B",
        version: "\u7248\u672C",
        author: "\u4F5C\u8005",
        status: "\u72B6\u6001",
        detailContext: "\u8BE6\u7EC6\u4E0A\u4E0B\u6587",
        actions: "\u64CD\u4F5C",
        installForProject: "1 - \u4E3A\u9879\u76EE\u5B89\u88C5",
        installForUser: "2 - \u4E3A\u7528\u6237\u5B89\u88C5",
        backToList: "b - \u8FD4\u56DE\u5217\u8868",
        loadingCommands: "\u52A0\u8F7D\u547D\u4EE4\u4E2D...",
        pleaseWaitFetching: "\u8BF7\u7B49\u5F85\uFF0C\u6B63\u5728\u83B7\u53D6\u53EF\u7528\u547D\u4EE4...",
      },
      showMoreLines: { pressCtrlS: "\u6309 ctrl-s \u663E\u793A\u66F4\u591A\u884C" },
      compressionDetailsDisplay: {
        noCompressionHistory:
          "\u5F53\u524D\u4F1A\u8BDD\u4E2D\u672A\u627E\u5230\u538B\u7F29\u5386\u53F2\u8BB0\u5F55\u3002",
        compressionSummary: "\u538B\u7F29\u6458\u8981",
        ctrlRToClose: "\u6309 ctrl+r \u5173\u95ED",
      },
      subAgentDisplay: { invalidArgs: "\u65E0\u6548\u53C2\u6570" },
      themeDialog: {
        custom: "\u81EA\u5B9A\u4E49",
        userSettings: "\u7528\u6237\u8BBE\u7F6E",
        workspaceSettings: "\u5DE5\u4F5C\u533A\u8BBE\u7F6E",
        systemSettings: "\u7CFB\u7EDF\u8BBE\u7F6E",
        selectTheme: "\u9009\u62E9\u4E3B\u9898",
        applyTo: "\u5E94\u7528\u5230",
        preview: "\u9884\u89C8",
        useEnterToSelect: "\u6309 Enter \u9009\u62E9",
        tabToChangeFocus: "\uFF0C\u6309 Tab \u5207\u6362\u7126\u70B9",
      },
      cloudPaidPrivacyNotice: {
        title: "Vertex AI \u901A\u77E5",
        description:
          '\u670D\u52A1\u7279\u5B9A\u6761\u6B3E<termsRef />\u5DF2\u7EB3\u5165 Google \u540C\u610F\u5411\u5BA2\u6237\u63D0\u4F9B Google Cloud Platform<cloudRef /> \u7684\u534F\u8BAE\uFF08"\u534F\u8BAE"\uFF09\u4E2D\u3002\u5982\u679C\u534F\u8BAE\u6388\u6743\u5728 Google Cloud \u5408\u4F5C\u4F19\u4F34\u6216\u7ECF\u9500\u5546\u8BA1\u5212\u4E0B\u8F6C\u552E\u6216\u63D0\u4F9B Google Cloud Platform\uFF0C\u5219\u9664"\u5408\u4F5C\u4F19\u4F34\u7279\u5B9A\u6761\u6B3E"\u90E8\u5206\u5916\uFF0C\u670D\u52A1\u7279\u5B9A\u6761\u6B3E\u4E2D\u5BF9\u5BA2\u6237\u7684\u6240\u6709\u5F15\u7528\u5747\u6307\u5408\u4F5C\u4F19\u4F34\u6216\u7ECF\u9500\u5546\uFF08\u5982\u9002\u7528\uFF09\uFF0C\u670D\u52A1\u7279\u5B9A\u6761\u6B3E\u4E2D\u5BF9\u5BA2\u6237\u6570\u636E\u7684\u6240\u6709\u5F15\u7528\u5747\u6307\u5408\u4F5C\u4F19\u4F34\u6570\u636E\u3002\u670D\u52A1\u7279\u5B9A\u6761\u6B3E\u4E2D\u4F7F\u7528\u4F46\u672A\u5B9A\u4E49\u7684\u5927\u5199\u672F\u8BED\u5177\u6709\u534F\u8BAE\u4E2D\u7ED9\u51FA\u7684\u542B\u4E49\u3002',
        pressEscToExit: "\u6309 Esc \u9000\u51FA\u3002",
      },
      cloudFreePrivacyNotice: {
        loading: "\u52A0\u8F7D\u4E2D...",
        errorLoading: "\u52A0\u8F7D\u9009\u62E9\u8BBE\u7F6E\u65F6\u51FA\u9519\uFF1A{{error}}",
        pressEscToExit: "\u6309 Esc \u9000\u51FA\u3002",
        yes: "\u662F",
        no: "\u5426",
        title: "\u963F\u91CC\u5DF4\u5DF4\u6DD8\u5B9D\u4EE3\u7801\u52A9\u624B\u4E2A\u4EBA\u7248\u9690\u79C1\u58F0\u660E",
        privacyDescription:
          "\u672C\u58F0\u660E\u548C\u6211\u4EEC\u7684\u9690\u79C1\u653F\u7B56<policyRef />\u63CF\u8FF0\u4E86 iFlow \u4EE3\u7801\u52A9\u624B\u5982\u4F55\u5904\u7406\u60A8\u7684\u6570\u636E\u3002\u8BF7\u4ED4\u7EC6\u9605\u8BFB\u3002",
        dataCollection:
          "\u5F53\u60A8\u5728 iFlow CLI \u4E2D\u4F7F\u7528\u963F\u91CC\u5DF4\u5DF4\u4EE3\u7801\u52A9\u624B\u4E2A\u4EBA\u7248\u65F6\uFF0C\u963F\u91CC\u5DF4\u5DF4\u4F1A\u6536\u96C6\u60A8\u7684\u63D0\u793A\u3001\u76F8\u5173\u4EE3\u7801\u3001\u751F\u6210\u7684\u8F93\u51FA\u3001\u4EE3\u7801\u7F16\u8F91\u3001\u76F8\u5173\u529F\u80FD\u4F7F\u7528\u4FE1\u606F\u4EE5\u53CA\u60A8\u7684\u53CD\u9988\uFF0C\u4EE5\u63D0\u4F9B\u3001\u6539\u8FDB\u548C\u5F00\u53D1\u963F\u91CC\u5DF4\u5DF4\u4EA7\u54C1\u548C\u670D\u52A1\u4EE5\u53CA\u673A\u5668\u5B66\u4E60\u6280\u672F\u3002",
        reviewProcess:
          "\u4E3A\u4E86\u5E2E\u52A9\u63D0\u5347\u8D28\u91CF\u548C\u6539\u8FDB\u6211\u4EEC\u7684\u4EA7\u54C1\uFF08\u5982\u751F\u6210\u5F0F\u673A\u5668\u5B66\u4E60\u6A21\u578B\uFF09\uFF0C\u4EBA\u5DE5\u5BA1\u9605\u5458\u53EF\u80FD\u4F1A\u9605\u8BFB\u3001\u6CE8\u91CA\u548C\u5904\u7406\u4E0A\u8FF0\u6536\u96C6\u7684\u6570\u636E\u3002\u6211\u4EEC\u91C7\u53D6\u63AA\u65BD\u5728\u6B64\u8FC7\u7A0B\u4E2D\u4FDD\u62A4\u60A8\u7684\u9690\u79C1\u3002\u8FD9\u5305\u62EC\u5728\u5BA1\u9605\u5458\u67E5\u770B\u6216\u6CE8\u91CA\u6570\u636E\u4E4B\u524D\u5C06\u6570\u636E\u4E0E\u60A8\u7684 Google \u8D26\u6237\u65AD\u5F00\u8FDE\u63A5\uFF0C\u5E76\u5C06\u8FD9\u4E9B\u65AD\u5F00\u8FDE\u63A5\u7684\u526F\u672C\u5B58\u50A8\u6700\u591A 18 \u4E2A\u6708\u3002\u8BF7\u4E0D\u8981\u63D0\u4EA4\u673A\u5BC6\u4FE1\u606F\u6216\u4EFB\u4F55\u60A8\u4E0D\u5E0C\u671B\u5BA1\u9605\u5458\u770B\u5230\u6216 Google \u7528\u6765\u6539\u8FDB\u6211\u4EEC\u7684\u4EA7\u54C1\u3001\u670D\u52A1\u548C\u673A\u5668\u5B66\u4E60\u6280\u672F\u7684\u6570\u636E\u3002",
        allowDataUse:
          "\u5141\u8BB8\u963F\u91CC\u5DF4\u5DF4\u4F7F\u7528\u6B64\u6570\u636E\u5F00\u53D1\u548C\u6539\u8FDB\u6211\u4EEC\u7684\u4EA7\u54C1\uFF1F",
        pressEnterToChoose: "\u6309 Enter \u9009\u62E9\u9009\u9879\u5E76\u9000\u51FA\u3002",
      },
      errorHandler: {
        retryInstructions: "\u6309 R \u91CD\u8BD5\uFF0C\u6216\u6309 Esc \u53D6\u6D88",
        sessionNotFound:
          "\u672A\u627E\u5230\u4F1A\u8BDD\u3002\u53EF\u80FD\u5DF2\u88AB\u5220\u9664\u6216\u79FB\u52A8\u3002",
        invalidSessionFormat: "\u4F1A\u8BDD\u6587\u4EF6\u5DF2\u635F\u574F\u6216\u683C\u5F0F\u65E0\u6548\u3002",
        historyManagerError:
          "\u65E0\u6CD5\u8BBF\u95EE\u4F1A\u8BDD\u5386\u53F2\u3002\u5386\u53F2\u7CFB\u7EDF\u53EF\u80FD\u4E0D\u53EF\u7528\u3002",
        conversionError: "\u65E0\u6CD5\u5C06\u4F1A\u8BDD\u6570\u636E\u8F6C\u6362\u4E3A\u663E\u793A\u683C\u5F0F\u3002",
        fileSystemError:
          "\u8BBF\u95EE\u4F1A\u8BDD\u6570\u636E\u65F6\u53D1\u751F\u6587\u4EF6\u7CFB\u7EDF\u9519\u8BEF\u3002",
        permissionError:
          "\u6743\u9650\u88AB\u62D2\u7EDD\u3002\u8BF7\u68C0\u67E5\u4F1A\u8BDD\u6570\u636E\u7684\u6587\u4EF6\u6743\u9650\u3002",
        networkError: "\u8BBF\u95EE\u4F1A\u8BDD\u6570\u636E\u65F6\u53D1\u751F\u7F51\u7EDC\u9519\u8BEF\u3002",
        unknownError: "\u53D1\u751F\u672A\u77E5\u9519\u8BEF\u3002",
        suggestions: {
          sessionNotFound:
            "\u8BF7\u5C1D\u8BD5\u9009\u62E9\u4E0D\u540C\u7684\u4F1A\u8BDD\u6216\u5F00\u59CB\u65B0\u7684\u5BF9\u8BDD\u3002",
          invalidSessionFormat:
            "\u8BF7\u5C1D\u8BD5\u9009\u62E9\u4E0D\u540C\u7684\u4F1A\u8BDD\u3002\u6B64\u4F1A\u8BDD\u6587\u4EF6\u53EF\u80FD\u5DF2\u635F\u574F\u3002",
          historyManagerError:
            "\u8BF7\u5C1D\u8BD5\u91CD\u542F\u5E94\u7528\u7A0B\u5E8F\u6216\u68C0\u67E5\u5386\u53F2\u76EE\u5F55\u662F\u5426\u53EF\u8BBF\u95EE\u3002",
          conversionError:
            "\u8BF7\u5C1D\u8BD5\u9009\u62E9\u4E0D\u540C\u7684\u4F1A\u8BDD\uFF0C\u6216\u5728\u95EE\u9898\u6301\u7EED\u65F6\u62A5\u544A\u6B64\u95EE\u9898\u3002",
          fileSystemError:
            "\u8BF7\u68C0\u67E5\u78C1\u76D8\u7A7A\u95F4\u548C\u6587\u4EF6\u6743\u9650\uFF0C\u7136\u540E\u91CD\u8BD5\u3002",
          permissionError:
            "\u8BF7\u68C0\u67E5\u6587\u4EF6\u6743\u9650\u6216\u4F7F\u7528\u9002\u5F53\u6743\u9650\u8FD0\u884C\u3002",
          networkError: "\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u5E76\u91CD\u8BD5\u3002",
          default:
            "\u8BF7\u91CD\u8BD5\uFF0C\u6216\u5728\u95EE\u9898\u6301\u7EED\u65F6\u5F00\u59CB\u65B0\u7684\u5BF9\u8BDD\u3002",
        },
      },
      queueStatusDisplay: { messagesPending_other: "{{count}} \u6761\u6D88\u606F\u5F85\u5904\u7406" },
      planApprovalDialog: {
        noMarkdownPlanning: "\u7528 Markdown \u6587\u4EF6\u4FEE\u6539\u8BA1\u5212",
        planReadyForReview: "\u8BA1\u5212\u5DF2\u51C6\u5907\u597D\u5BA1\u6838",
        wouldYouLikeToProceed: "\u60A8\u60F3\u8981\u7EE7\u7EED\u5417\uFF1F",
        yesSmartMode: "\u662F\uFF0C\u4F7F\u7528\u667A\u80FD\u6A21\u5F0F\u6267\u884C\u8BA1\u5212",
        yesManualApproval: "\u662F\uFF0C\u624B\u52A8\u6279\u51C6\u6267\u884C\u8BA1\u5212",
        noKeepPlanning: "\u5426\uFF0C\u7EE7\u7EED\u89C4\u5212",
        navigationInstructions:
          "\u4F7F\u7528 \u2191\u2193 \u7BAD\u5934\u5BFC\u822A\uFF0CEnter \u9009\u62E9\uFF0C\u6216\u6309 1-4",
      },
      examplesDisplay: {
        title: "\u{1F680} \u793A\u4F8B\u4E0E\u5165\u95E8",
        welcome:
          "\u6B22\u8FCE\u4F7F\u7528 iFlow CLI\uFF01\u67E5\u770B\u8FD9\u4E9B\u793A\u4F8B\u4EE5\u5145\u5206\u5229\u7528\u60A8\u7684\u4F53\u9A8C\uFF1A",
        repositoryLabel: "\u{1F4DA} \u793A\u4F8B\u4ED3\u5E93\uFF1A",
        quickTipsLabel: "\u{1F4A1} \u5FEB\u901F\u63D0\u793A\uFF1A",
        tips: {
          fileContents: "\u2022 \u4F7F\u7528 @ \u5728\u63D0\u793A\u4E2D\u5305\u542B\u6587\u4EF6\u5185\u5BB9",
          shellCommands: "\u2022 \u4F7F\u7528 ! \u76F4\u63A5\u6267\u884C shell \u547D\u4EE4",
          initCommand:
            "\u2022 \u4F7F\u7528 /init \u521B\u5EFA IFLOW.md \u4EE5\u83B7\u5F97\u66F4\u597D\u7684\u4E0A\u4E0B\u6587",
          demoCommand:
            "\u2022 \u4F7F\u7528 /demo \u5C1D\u8BD5\u7814\u7A76\u548C\u5934\u8111\u98CE\u66B4\u5DE5\u4F5C\u6D41",
          helpCommand: "\u2022 \u4F7F\u7528 /help \u67E5\u770B\u6240\u6709\u53EF\u7528\u547D\u4EE4",
        },
        continueInstructions: "\u6309 Enter \u6216 Space \u7EE7\u7EED\u804A\u5929 \u2192",
      },
      programmersDayDisplay: {
        title: "\u{1F389} 1024 \u7A0B\u5E8F\u5458\u8282\u5FEB\u4E50\uFF01",
        welcome:
          "\u5728\u8FD9\u4E2A\u5C5E\u4E8E\u6211\u4EEC\u7684\u8282\u65E5\u91CC\uFF0C\u5411\u6240\u6709\u7528\u4EE3\u7801\u6539\u53D8\u4E16\u754C\u7684\u5F00\u53D1\u8005\u81F4\u656C\uFF01",
        whyLabel: "\u{1F4A1} \u4E3A\u4EC0\u4E48\u662F 1024\uFF1F",
        whyContent: {
          first:
            "1024 \u662F 2 \u7684 10 \u6B21\u65B9\uFF0C\u662F\u8BA1\u7B97\u673A\u79D1\u5B66\u4E2D\u7684\u57FA\u672C\u5355\u4F4D\u3002",
          second:
            "1KB = 1024 \u5B57\u8282\uFF0C\u6B63\u5982\u6211\u4EEC\u7528\u4EE3\u7801\u6784\u5EFA\u7684\u6BCF\u4E00\u4E2A\u5B57\u8282\uFF0C\u90FD\u627F\u8F7D\u7740\u6539\u53D8\u4E16\u754C\u7684\u529B\u91CF\u3002",
        },
        culturesLabel: "\u{1F680} \u7A0B\u5E8F\u5458\u7684\u81EA\u6211\u4FEE\u517B\uFF1A",
        cultures: {
          binary:
            "\u2022 \u4E16\u754C\u4E0A\u6709 10 \u79CD\u4EBA\uFF0C\u61C2\u4E8C\u8FDB\u5236\u7684\u548C\u4E0D\u61C2\u4E8C\u8FDB\u5236\u7684",
          helloWorld:
            "\u2022 Hello World \u4E0D\u4EC5\u662F\u4EE3\u7801\uFF0C\u66F4\u662F\u4E0E\u4E16\u754C\u7684\u7B2C\u4E00\u6B21\u5BF9\u8BDD",
          bugs: "\u2022 Bug \u4E0D\u662F\u9519\u8BEF\uFF0C\u662F\u901A\u5F80\u66F4\u4F18\u89E3\u7684\u6307\u5F15",
          poetry: "\u2022 \u4EE3\u7801\u5982\u8BD7\uFF0C\u4F18\u96C5\u6C38\u5B58",
        },
        wishes:
          "\u795D\u613F\u6240\u6709\u5F00\u53D1\u8005\uFF1A\u4EE3\u7801\u65E0 Bug\uFF0C\u9700\u6C42\u90FD\u5408\u7406\uFF0C\u6C38\u8FDC\u4E0D\u8131\u53D1\uFF01\u{1F388}",
        continueInstructions: "\u6309\u56DE\u8F66\u6216\u7A7A\u683C\u7EE7\u7EED \u2192",
      },
      annualReportDisplay: {
        title: "\u{1F389} iFlow CLI with You {{year}}",
        welcome:
          '"\u4EE3\u7801\u662F\u8DE8\u8D8A\u65F6\u7A7A\u7684\u4FE1\u4EF6\uFF0CiFlow \u966A\u4F60\u6295\u9012\u4E86\u6BCF\u4E00\u884C\u7075\u611F\u3002"',
        highlightsLabel: "\u4ECA\u5E74\u7684\u7CBE\u5F69\u77AC\u95F4\uFF1A",
        highlights: {
          achievements:
            "\u2728 \u8F93\u5165\u7684\u6BCF\u884C\u6307\u4EE4 \u90FD\u5728\u6084\u6084\u6539\u5199\u672A\u6765",
          statistics:
            "\u{1F680} \u751F\u6210\u7684\u4EE3\u7801\u6C47\u6210\u661F\u6CB3 \u53EF\u4EE5\u73AF\u7ED5\u5730\u7403 80 \u5708",
          milestones:
            "\u{1F4B0} \u6D88\u8017\u7684Token\u79EF\u6C99\u6210\u5854 \u8DB3\u591F\u6362\u53D6\u73B0\u5B9E\u4E16\u754C\u4E00\u7247\u9C7C\u5858",
          insights:
            "\u{1F4A1} \u89E3\u51B3\u7684\u6280\u672F\u96BE\u9898\u5316\u4F5C\u57FA\u77F3 \u9010\u6B65\u6784\u5EFA\u8D77\u4F60\u7684\u8D5B\u535A\u6570\u5B57\u4E16\u754C",
        },
        closing:
          "\u6570\u636E\u65E0\u6CD5\u5B9A\u4E49\u7684\uFF0C\u662F\u4F60\u5BF9\u6280\u672F\u6C38\u6052\u7684\u70ED\u7231\uFF01",
        reportUrl: "\u67E5\u770B\u5B8C\u6574\u5E74\u5EA6\u603B\u7ED3\uFF1A",
        instructions:
          "\u6309\u7A7A\u683C\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00 | \u6309\u56DE\u8F66\u7EE7\u7EED \u2192",
      },
      taskAbbreviationMessage: {
        expandHint: "... \uFF08\u6309 ctrl+r \u5C55\u5F00\uFF09",
        initializing: "\u521D\u59CB\u5316\u4E2D...",
        expandInstructions: "\u6309 ctrl+r \u5C55\u5F00",
        moreToolUses: "+{{count}} \u4E2A\u5DE5\u5177\u4F7F\u7528 ({{expandHint}})",
        completedStats:
          "\u23BF \u5B8C\u6210 ({{toolCount}} \u4E2A\u5DE5\u5177\u4F7F\u7528 {{tokens}} token(s) \xB7 \u6301\u7EED\u65F6\u95F4\uFF1A{{duration}} \xB7 {{expandHint}})",
      },
      detailedMessagesDisplay: {
        title: "\u8C03\u8BD5\u63A7\u5236\u53F0",
        closeHint: "\u6309 ctrl+o \u5173\u95ED",
        summary: "\u6D88\u606F\u7EDF\u8BA1",
        errors: "\u4E2A\u9519\u8BEF",
        warnings: "\u4E2A\u8B66\u544A",
        logs: "\u6761\u65E5\u5FD7",
        debugs: "\u6761\u8C03\u8BD5\u4FE1\u606F",
        logFileHint: "\u8BE6\u7EC6\u65E5\u5FD7\u5DF2\u4FDD\u5B58\u5230:",
      },
      consoleSummaryDisplay: {
        errorCount: "{{count}} \u4E2A\u9519\u8BEF",
        detailsHint: "\u6309 ctrl+o \u67E5\u770B\u8BE6\u60C5",
      },
      debugProfiler: { renders: "\u6E32\u67D3\u6B21\u6570\uFF1A" },
      subAgentToolMessage: {
        showingLast:
          "\u663E\u793A\u6700\u540E {{shown}} \u4E2A\uFF0C\u5171 {{total}} \u4E2A\u5DE5\u5177\u3002\u6309 ctrl-s \u663E\u793A\u66F4\u591A {{hidden}} \u4E2A\u3002",
        initializingAgents: "\u6B63\u5728\u521D\u59CB\u5316\u4EE3\u7406...",
        agentTitle: "{{type}} \u4EE3\u7406",
        round: "\u7B2C {{count}} \u8F6E",
        messageCount: "{{count}} \u6761\u6D88\u606F",
        model: "\u6A21\u578B",
        originallyRequested: "\u539F\u59CB\u8BF7\u6C42\uFF1A{{model}} ({{reason}})",
        task: "\u4EFB\u52A1",
        tools: "\u5DE5\u5177",
        status: {
          created: "\u5DF2\u521B\u5EFA",
          running: "\u8FD0\u884C\u4E2D",
          completed: "\u5DF2\u5B8C\u6210",
          failed: "\u5931\u8D25",
          unknown: "\u672A\u77E5",
        },
      },
      sessionSelectorComponent: {
        noSessionsFound: "\u5728\u6B64\u9879\u76EE\u4E2D\u672A\u627E\u5230\u4EE5\u524D\u7684\u4F1A\u8BDD\u3002",
        startingNew: "\u6B63\u5728\u5F00\u59CB\u65B0\u7684\u5BF9\u8BDD...",
        availableSessions: "\u53EF\u7528\u7684\u5BF9\u8BDD\u4F1A\u8BDD\uFF1A",
        pageInfo:
          "\u7B2C {{current}} \u9875\uFF0C\u5171 {{total}} \u9875 | \u4F1A\u8BDD {{start}}-{{end}}\uFF0C\u5171 {{totalSessions}} \u4E2A",
        created: "\u521B\u5EFA\u65F6\u95F4",
        modified: "\u4FEE\u6539\u65F6\u95F4",
        messages: "\u6D88\u606F",
        gitBranch: "Git \u5206\u652F",
        navigationInstructions:
          "\u4F7F\u7528 \u2191\u2193 \u7BAD\u5934\u5BFC\u822A{{autoScroll}}\uFF0CEnter \u9009\u62E9\u3002",
        autoScroll: "\u81EA\u52A8\u6EDA\u52A8",
        scrollHint:
          "\u4F7F\u7528\u7BAD\u5934\u952E\u6EDA\u52A8\u6D4F\u89C8\u6240\u6709 {{total}} \u4E2A\u4F1A\u8BDD\uFF0C\u8DE8 {{pages}} \u9875",
        time: {
          justNow: "\u521A\u521A",
          minutesAgo: "{{count}} \u5206\u949F\u524D",
          hoursAgo: "{{count}} \u5C0F\u65F6\u524D",
          daysAgo: "{{count}} \u5929\u524D",
          weeksAgo: "{{count}} \u5468\u524D",
        },
      },
      maxSizedBox: {
        firstLinesHidden:
          "... \u524D {{count}} \u884C\u5DF2\u9690\u85CF ...\uFF08\u8F93\u5165ctrl+r\u67E5\u770B\u5168\u90E8\uFF09",
        lastLinesHidden:
          "... \u540E {{count}} \u884C\u5DF2\u9690\u85CF ...\uFF08\u8F93\u5165ctrl+r\u67E5\u770B\u5168\u90E8\uFF09",
      },
      toolConfirmationMessage: {
        modifyInProgress: "\u4FEE\u6539\u8FDB\u884C\u4E2D\uFF1A",
        saveAndCloseEditor: "\u4FDD\u5B58\u5E76\u5173\u95ED\u5916\u90E8\u7F16\u8F91\u5668\u4EE5\u7EE7\u7EED",
        applyChangeQuestion: "\u5E94\u7528\u6B64\u66F4\u6539\uFF1F",
        yesAllowOnce: "\u662F\uFF0C\u5141\u8BB8\u4E00\u6B21",
        yesAllowAlways: "\u662F\uFF0C\u603B\u662F\u5141\u8BB8",
        modifyWithEditor: "\u7528\u5916\u90E8\u7F16\u8F91\u5668\u4FEE\u6539",
        noSuggestChanges: "\u5426\uFF0C\u5EFA\u8BAE\u66F4\u6539 (esc)",
        allowExecutionQuestion: "\u5141\u8BB8\u6267\u884C\uFF1A'{{command}}'\uFF1F",
        yesAllowAlwaysEllipsis: "\u662F\uFF0C\u603B\u662F\u5141\u8BB8...",
        proceedQuestion: "\u4F60\u60F3\u7EE7\u7EED\u5417\uFF1F",
        urlsToFetch: "\u8981\u83B7\u53D6\u7684URL\uFF1A",
        mcpServer: "MCP \u670D\u52A1\u5668",
        tool: "\u5DE5\u5177",
        allowMcpToolQuestion:
          '\u5141\u8BB8\u6267\u884C\u6765\u81EA\u670D\u52A1\u5668 "{{serverName}}" \u7684 MCP \u5DE5\u5177 "{{toolName}}"\uFF1F',
        yesAlwaysAllowTool:
          '\u662F\uFF0C\u603B\u662F\u5141\u8BB8\u6765\u81EA\u670D\u52A1\u5668 "{{serverName}}" \u7684\u5DE5\u5177 "{{toolName}}"',
        yesAlwaysAllowAllTools:
          '\u662F\uFF0C\u603B\u662F\u5141\u8BB8\u6765\u81EA\u670D\u52A1\u5668 "{{serverName}}" \u7684\u6240\u6709\u5DE5\u5177',
        smartModeDetected: "\u667A\u80FD\u6A21\u5F0F\u68C0\u6D4B\u5230{{riskLevel}}\u98CE\u9669: {{riskDescription}}",
        riskDetectedQuestion:
          "\u68C0\u6D4B\u5230\u6F5C\u5728\u98CE\u9669\uFF0C\u662F\u5426\u7EE7\u7EED\u6267\u884C\uFF1F",
        yesAgreeExecute: "\u662F\uFF0C\u540C\u610F\u6267\u884C",
        noRefuseExecute: "\u5426\uFF0C\u62D2\u7EDD\u6267\u884C",
        smartAudit: "\u667A\u80FD\u5BA1\u6838",
        riskLevel: "\u98CE\u9669\u7B49\u7EA7",
        detectionMethod: "\u68C0\u6D4B\u65B9\u5F0F",
        blacklistRule: "\u9ED1\u540D\u5355\u89C4\u5219",
        aiSmartAudit: "AI\u667A\u80FD\u5BA1\u6838",
        defaultQuestion: "\u662F\u5426\u7EE7\u7EED\u6267\u884C\uFF1F",
        defaultYes: "\u662F",
        defaultNo: "\u5426",
        riskDescription: "\u98CE\u9669\u8BF4\u660E",
        smartAuditResult: "\u667A\u80FD\u5BA1\u6838\u7ED3\u679C",
        riskLevelLabel: "\u98CE\u9669\u7B49\u7EA7",
        detectionMethodLabel: "\u68C0\u6D4B\u65B9\u5F0F",
        auditLatency: "\u5BA1\u6838\u8017\u65F6",
        confirmExecutionPrompt: "\u8BF7\u786E\u8BA4\u662F\u5426\u7EE7\u7EED\u6267\u884C\u6B64\u64CD\u4F5C",
        unknownDetector: "\u672A\u77E5\u68C0\u6D4B\u5668",
        smartModeRiskDetected: "\u667A\u80FD\u6A21\u5F0F\u68C0\u6D4B\u5230\u6F5C\u5728\u98CE\u9669",
        potentialSecurityRisk: "\u68C0\u6D4B\u5230\u6F5C\u5728\u7684\u5B89\u5168\u98CE\u9669",
        smartReviewTimeout:
          "\u667A\u80FD\u5BA1\u6838\u8BA4\u4E3A\u5E94\u8BE5\u6709\u60A8\u624B\u52A8\u786E\u8BA4\u662F\u5426\u6267\u884C",
        questionPrompt: "\u8BF7\u56DE\u7B54\u95EE\u9898",
        other: "\u5176\u4ED6",
        noneSelected: "\u672A\u9009\u62E9",
        questionProgress: "\u95EE\u9898 {{current}}/{{total}}",
        multiSelectInstructions:
          "\u2191/\u2193: \u5BFC\u822A, \u7A7A\u683C: \u5207\u6362\u9009\u62E9, \u56DE\u8F66: \u786E\u8BA4, Esc: \u53D6\u6D88",
        singleSelectInstructions: "\u2191/\u2193: \u5BFC\u822A, \u56DE\u8F66: \u786E\u8BA4, Esc: \u53D6\u6D88",
        previousAnswers: "\u5DF2\u56DE\u7B54\u7684\u95EE\u9898",
      },
      blacklistRules: {
        deleteRootDirectory:
          "\u8BE5\u547D\u4EE4\u5C06\u5220\u9664\u7CFB\u7EDF\u6839\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\uFF0C\u4F1A\u5BFC\u81F4\u7CFB\u7EDF\u5B8C\u5168\u5D29\u6E83\uFF0C\u6240\u6709\u6570\u636E\u6C38\u4E45\u4E22\u5931\u3002\u8FD9\u662F\u6781\u5176\u5371\u9669\u7684\u7834\u574F\u6027\u64CD\u4F5C\u3002",
        deleteSystemDirectory:
          "\u8BE5\u547D\u4EE4\u5C06\u5220\u9664\u5173\u952E\u7CFB\u7EDF\u76EE\u5F55\uFF0C\u4F1A\u5BFC\u81F4\u7CFB\u7EDF\u65E0\u6CD5\u6B63\u5E38\u8FD0\u884C\uFF0C\u53EF\u80FD\u9700\u8981\u91CD\u88C5\u7CFB\u7EDF\u624D\u80FD\u6062\u590D\u3002",
        deleteWithWildcard:
          "\u8BE5\u547D\u4EE4\u4F7F\u7528\u901A\u914D\u7B26\u6279\u91CF\u5220\u9664\u6587\u4EF6\uFF0C\u53EF\u80FD\u8BEF\u5220\u91CD\u8981\u6570\u636E\u3002\u5EFA\u8BAE\u5148\u786E\u8BA4\u8981\u5220\u9664\u7684\u5177\u4F53\u6587\u4EF6\u3002",
        formatDisk:
          "\u8BE5\u547D\u4EE4\u5C06\u683C\u5F0F\u5316\u78C1\u76D8\uFF0C\u6E05\u9664\u6240\u6709\u6570\u636E\u3002\u8FD9\u662F\u4E0D\u53EF\u9006\u64CD\u4F5C\uFF0C\u8BF7\u786E\u4FDD\u5DF2\u5907\u4EFD\u91CD\u8981\u6570\u636E\u3002",
        directDiskWrite:
          "\u8BE5\u547D\u4EE4\u76F4\u63A5\u5199\u5165\u78C1\u76D8\u8BBE\u5907\uFF0C\u4F1A\u8986\u76D6\u73B0\u6709\u6570\u636E\uFF0C\u53EF\u80FD\u5BFC\u81F4\u7CFB\u7EDF\u65E0\u6CD5\u542F\u52A8\u3002",
        clearSystemConfig:
          "\u8BE5\u547D\u4EE4\u4F1A\u6E05\u7A7A\u7CFB\u7EDF\u5173\u952E\u914D\u7F6E\u6587\u4EF6\uFF0C\u5BFC\u81F4\u7528\u6237\u65E0\u6CD5\u767B\u5F55\u6216\u7CFB\u7EDF\u65E0\u6CD5\u542F\u52A8\u3002",
        deleteBootFiles:
          "\u8BE5\u547D\u4EE4\u5220\u9664\u7CFB\u7EDF\u5F15\u5BFC\u6587\u4EF6\uFF0C\u4F1A\u5BFC\u81F4\u7CFB\u7EDF\u65E0\u6CD5\u542F\u52A8\uFF0C\u9700\u8981\u4F7F\u7528\u6062\u590D\u5DE5\u5177\u4FEE\u590D\u3002",
        modifySystemPermissions:
          "\u8BE5\u547D\u4EE4\u4FEE\u6539\u7CFB\u7EDF\u6743\u9650\u914D\u7F6E\uFF0C\u53EF\u80FD\u5141\u8BB8\u672A\u6388\u6743\u7528\u6237\u83B7\u5F97\u7BA1\u7406\u5458\u6743\u9650\uFF0C\u9020\u6210\u5B89\u5168\u98CE\u9669\u3002",
        setSpecialPermissions:
          "\u8BE5\u547D\u4EE4\u4E3A\u7A0B\u5E8F\u8BBE\u7F6E\u7279\u6B8A\u6743\u9650\uFF0C\u53EF\u80FD\u88AB\u5229\u7528\u8FDB\u884C\u6743\u9650\u63D0\u5347\u653B\u51FB\u3002",
        unsafeFilePermissions:
          "\u8BE5\u547D\u4EE4\u5C06\u6587\u4EF6\u8BBE\u7F6E\u4E3A\u6240\u6709\u4EBA\u53EF\u8BFB\u5199\u6267\u884C\uFF0C\u5B58\u5728\u4E25\u91CD\u5B89\u5168\u9690\u60A3\u3002",
        disableSelinux:
          "\u8BE5\u547D\u4EE4\u7981\u7528SELinux\u5B89\u5168\u6A21\u5757\uFF0C\u964D\u4F4E\u7CFB\u7EDF\u5B89\u5168\u9632\u62A4\u80FD\u529B\uFF0C\u53EF\u80FD\u5BFC\u81F4\u7CFB\u7EDF\u66F4\u5BB9\u6613\u53D7\u5230\u653B\u51FB\u3002",
        disableFirewall:
          "\u8BE5\u547D\u4EE4\u5173\u95ED\u7CFB\u7EDF\u9632\u706B\u5899\uFF0C\u4F1A\u8BA9\u7CFB\u7EDF\u66B4\u9732\u5728\u7F51\u7EDC\u653B\u51FB\u98CE\u9669\u4E2D\u3002",
        disableWindowsSecurity:
          "\u8BE5\u547D\u4EE4\u7981\u7528Windows\u5B89\u5168\u9632\u62A4\uFF0C\u7CFB\u7EDF\u5C06\u5931\u53BB\u75C5\u6BD2\u548C\u6076\u610F\u8F6F\u4EF6\u9632\u62A4\u80FD\u529B\u3002",
        readPasswordFile:
          "\u8BE5\u547D\u4EE4\u5C1D\u8BD5\u8BFB\u53D6\u7CFB\u7EDF\u5BC6\u7801\u6587\u4EF6\uFF0C\u53EF\u80FD\u7528\u4E8E\u7A83\u53D6\u7528\u6237\u51ED\u636E\u4FE1\u606F\u3002",
        readSshKeys:
          "\u8BE5\u547D\u4EE4\u8BFB\u53D6SSH\u79C1\u94A5\u6587\u4EF6\uFF0C\u53EF\u80FD\u5BFC\u81F4\u8D26\u6237\u88AB\u672A\u6388\u6743\u8BBF\u95EE\u3002",
        searchPasswords:
          "\u8BE5\u547D\u4EE4\u5728\u7CFB\u7EDF\u4E2D\u641C\u7D22\u5BC6\u7801\u76F8\u5173\u4FE1\u606F\uFF0C\u53EF\u80FD\u53D1\u73B0\u654F\u611F\u51ED\u636E\u3002",
        uploadToExternal:
          "\u8BE5\u547D\u4EE4\u5C06\u672C\u5730\u6587\u4EF6\u4E0A\u4F20\u5230\u5916\u90E8\u670D\u52A1\u5668\uFF0C\u53EF\u80FD\u5BFC\u81F4\u6570\u636E\u6CC4\u9732\u3002",
        packageAndTransfer:
          "\u8BE5\u547D\u4EE4\u6253\u5305\u6570\u636E\u5E76\u4F20\u8F93\u5230\u5916\u90E8\uFF0C\u53EF\u80FD\u7528\u4E8E\u7A83\u53D6\u5927\u91CF\u4FE1\u606F\u3002",
        dnsDataExfiltration:
          "\u8BE5\u547D\u4EE4\u53EF\u80FD\u901A\u8FC7DNS\u67E5\u8BE2\u6CC4\u9732\u6570\u636E\uFF0C\u8FD9\u662F\u4E00\u79CD\u9690\u853D\u7684\u6570\u636E\u5916\u4F20\u65B9\u5F0F\u3002",
        reverseShellNetcat:
          "\u8BE5\u547D\u4EE4\u5EFA\u7ACB\u53CD\u5411Shell\u8FDE\u63A5\uFF0C\u5141\u8BB8\u8FDC\u7A0B\u63A7\u5236\u6B64\u7CFB\u7EDF\uFF0C\u6781\u5176\u5371\u9669\u3002",
        reverseShellBash:
          "\u8BE5\u547D\u4EE4\u4F7F\u7528Bash\u5EFA\u7ACB\u53CD\u5411\u8FDE\u63A5\uFF0C\u53EF\u8BA9\u653B\u51FB\u8005\u8FDC\u7A0B\u63A7\u5236\u7CFB\u7EDF\u3002",
        reverseShellPython:
          "\u8BE5\u547D\u4EE4\u4F7F\u7528Python\u521B\u5EFA\u53CD\u5411Shell\uFF0C\u53EF\u80FD\u88AB\u7528\u4E8E\u8FDC\u7A0B\u63A7\u5236\u3002",
        downloadAndExecute:
          "\u8BE5\u547D\u4EE4\u4ECE\u7F51\u7EDC\u4E0B\u8F7D\u5E76\u7ACB\u5373\u6267\u884C\u4EE3\u7801\uFF0C\u53EF\u80FD\u8FD0\u884C\u6076\u610F\u7A0B\u5E8F\u3002",
        encodedCommand:
          "\u8BE5\u547D\u4EE4\u6267\u884C\u7ECF\u8FC7\u7F16\u7801\u7684\u547D\u4EE4\uFF0C\u5E38\u7528\u4E8E\u9690\u85CF\u6076\u610F\u4EE3\u7801\u3002",
        forkBomb:
          "\u8BE5\u547D\u4EE4\u662FFork\u70B8\u5F39\uFF0C\u4F1A\u5FEB\u901F\u8017\u5C3D\u7CFB\u7EDF\u8D44\u6E90\u5BFC\u81F4\u7CFB\u7EDF\u5D29\u6E83\u3002",
        cpuExhaustion:
          "\u8BE5\u547D\u4EE4\u4F1A\u6301\u7EED\u5360\u7528CPU\u8D44\u6E90\uFF0C\u5BFC\u81F4\u7CFB\u7EDF\u54CD\u5E94\u7F13\u6162\u6216\u65E0\u6CD5\u4F7F\u7528\u3002",
        memoryExhaustion:
          "\u8BE5\u547D\u4EE4\u5FEB\u901F\u6D88\u8017\u7CFB\u7EDF\u5185\u5B58\uFF0C\u53EF\u80FD\u5BFC\u81F4\u7CFB\u7EDF\u5D29\u6E83\u6216\u7A0B\u5E8F\u88AB\u5F3A\u5236\u7EC8\u6B62\u3002",
        diskSpaceExhaustion:
          "\u8BE5\u547D\u4EE4\u521B\u5EFA\u5927\u6587\u4EF6\u586B\u5145\u78C1\u76D8\u7A7A\u95F4\uFF0C\u53EF\u80FD\u5BFC\u81F4\u7CFB\u7EDF\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C\u3002",
        modifySystemConfigFile:
          "\u8BE5\u64CD\u4F5C\u5C1D\u8BD5\u4FEE\u6539\u7CFB\u7EDF\u5173\u952E\u914D\u7F6E\u6587\u4EF6\uFF0C\u53EF\u80FD\u5F71\u54CD\u7CFB\u7EDF\u5B89\u5168\u6216\u7A33\u5B9A\u6027\u3002",
        modifySystemExecutable:
          "\u8BE5\u64CD\u4F5C\u5C1D\u8BD5\u4FEE\u6539\u7CFB\u7EDF\u53EF\u6267\u884C\u6587\u4EF6\uFF0C\u53EF\u80FD\u7834\u574F\u7CFB\u7EDF\u529F\u80FD\u6216\u690D\u5165\u6076\u610F\u4EE3\u7801\u3002",
        modifySshConfig:
          "\u8BE5\u64CD\u4F5C\u4FEE\u6539SSH\u670D\u52A1\u914D\u7F6E\uFF0C\u53EF\u80FD\u964D\u4F4E\u7CFB\u7EDF\u8BBF\u95EE\u5B89\u5168\u6027\u3002",
        accessInternalNetwork:
          "\u8BE5\u8BF7\u6C42\u8BBF\u95EE\u5185\u7F51\u5730\u5740\uFF0C\u53EF\u80FD\u5C1D\u8BD5\u63A2\u6D4B\u5185\u90E8\u7F51\u7EDC\u6216\u8BBF\u95EE\u654F\u611F\u670D\u52A1\u3002",
        privilegedDockerRun:
          "\u8BE5\u547D\u4EE4\u4EE5\u7279\u6743\u6A21\u5F0F\u8FD0\u884C\u5BB9\u5668\uFF0C\u5BB9\u5668\u5185\u8FDB\u7A0B\u62E5\u6709\u4E3B\u673Aroot\u6743\u9650\uFF0C\u6781\u5176\u5371\u9669\u3002",
        mountDockerSocket:
          "\u8BE5\u547D\u4EE4\u5C06Docker\u5957\u63A5\u5B57\u6302\u8F7D\u5230\u5BB9\u5668\uFF0C\u5141\u8BB8\u5BB9\u5668\u63A7\u5236\u5BBF\u4E3B\u673ADocker\u5B88\u62A4\u8FDB\u7A0B\u3002",
        mountHostDirectory:
          "\u8BE5\u547D\u4EE4\u5C06\u5BBF\u4E3B\u673A\u6839\u76EE\u5F55\u6216\u7CFB\u7EDF\u76EE\u5F55\u6302\u8F7D\u5230\u5BB9\u5668\uFF0C\u53EF\u80FD\u5BFC\u81F4\u5BB9\u5668\u9003\u9038\u3002",
        dropDatabase:
          "\u8BE5\u547D\u4EE4\u5220\u9664\u6574\u4E2A\u6570\u636E\u5E93\uFF0C\u4F1A\u5BFC\u81F4\u6570\u636E\u6C38\u4E45\u4E22\u5931\u3002",
        truncateTable:
          "\u8BE5\u547D\u4EE4\u6E05\u7A7A\u6570\u636E\u8868\u5185\u5BB9\uFF0C\u53EF\u80FD\u9020\u6210\u4E1A\u52A1\u6570\u636E\u4E22\u5931\u3002",
        killAllProcessesByName:
          "\u8BE5\u547D\u4EE4\u5C06\u7EC8\u6B62\u6240\u6709\u540C\u540D\u8FDB\u7A0B\uFF0C\u53EF\u80FD\u5F71\u54CD\u591A\u4E2A\u6B63\u5728\u8FD0\u884C\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u5EFA\u8BAE\u5148\u786E\u8BA4\u8981\u7EC8\u6B62\u7684\u5177\u4F53\u8FDB\u7A0BID\uFF0C\u907F\u514D\u8BEF\u6740\u91CD\u8981\u670D\u52A1\u3002",
        killProcessesWithWildcard:
          "\u8BE5\u547D\u4EE4\u4F7F\u7528\u901A\u914D\u7B26\u6279\u91CF\u7EC8\u6B62\u8FDB\u7A0B\uFF0C\u53EF\u80FD\u8BEF\u6740\u7CFB\u7EDF\u5173\u952E\u8FDB\u7A0B\u6216\u91CD\u8981\u5E94\u7528\u3002\u5F3A\u70C8\u5EFA\u8BAE\u5148\u7528 ps/Get-Process \u67E5\u770B\u8FDB\u7A0B\u5217\u8868\uFF0C\u7136\u540E\u6839\u636E\u8FDB\u7A0BID\u7CBE\u786E\u7EC8\u6B62\u3002",
        killAllUserProcesses:
          "\u8BE5\u547D\u4EE4\u5C06\u7EC8\u6B62\u5F53\u524D\u7528\u6237\u7684\u6240\u6709\u8FDB\u7A0B\uFF0C\u4F1A\u5BFC\u81F4\u6240\u6709\u6B63\u5728\u8FD0\u884C\u7684\u7A0B\u5E8F\u88AB\u5F3A\u5236\u5173\u95ED\uFF0C\u5305\u62EC\u672CCLI\u5DE5\u5177\u81EA\u8EAB\u3002\u8FD9\u662F\u6781\u5176\u5371\u9669\u7684\u64CD\u4F5C\u3002",
        killSystemCriticalProcess:
          "\u8BE5\u547D\u4EE4\u5C1D\u8BD5\u7EC8\u6B62\u7CFB\u7EDF\u5173\u952E\u8FDB\u7A0B\uFF0C\u4F1A\u5BFC\u81F4\u7CFB\u7EDF\u5D29\u6E83\u3001\u670D\u52A1\u4E2D\u65AD\u6216\u65E0\u6CD5\u767B\u5F55\u3002\u8FD9\u53EF\u80FD\u9700\u8981\u91CD\u542F\u7CFB\u7EDF\u624D\u80FD\u6062\u590D\u3002",
        killAllNodeProcesses:
          "\u8BE5\u547D\u4EE4\u5C06\u7EC8\u6B62\u6240\u6709Node.js\u8FDB\u7A0B\uFF0C\u5305\u62EC\u672CCLI\u5DE5\u5177\u81EA\u8EAB\uFF0C\u4F1A\u5BFC\u81F4\u5DE5\u5177\u7ACB\u5373\u9000\u51FA\u3002\u540C\u65F6\u53EF\u80FD\u5F71\u54CD\u5176\u4ED6\u6B63\u5728\u8FD0\u884C\u7684Node.js\u5E94\u7528\u3002\u5EFA\u8BAE\u4F7F\u7528\u8FDB\u7A0BID\u7CBE\u786E\u7EC8\u6B62\u76EE\u6807\u8FDB\u7A0B\u3002",
        killAllPythonProcesses:
          "\u8BE5\u547D\u4EE4\u5C06\u7EC8\u6B62\u6240\u6709Python\u8FDB\u7A0B\uFF0C\u53EF\u80FD\u5F71\u54CD\u591A\u4E2APython\u5E94\u7528\u3001\u811A\u672C\u548C\u670D\u52A1\u3002\u5EFA\u8BAE\u5148\u786E\u8BA4\u8981\u7EC8\u6B62\u7684\u5177\u4F53\u8FDB\u7A0B\uFF0C\u907F\u514D\u5F71\u54CD\u5176\u4ED6\u91CD\u8981\u4EFB\u52A1\u3002",
        killAllJavaProcesses:
          "\u8BE5\u547D\u4EE4\u5C06\u7EC8\u6B62\u6240\u6709Java\u8FDB\u7A0B\uFF0C\u53EF\u80FD\u5BFC\u81F4Java\u5E94\u7528\u670D\u52A1\u4E2D\u65AD\u3001\u6570\u636E\u672A\u4FDD\u5B58\u7B49\u95EE\u9898\u3002\u5EFA\u8BAE\u4F7F\u7528jps\u67E5\u770BJava\u8FDB\u7A0B\u540E\uFF0C\u6839\u636E\u8FDB\u7A0BID\u7CBE\u786E\u7EC8\u6B62\u3002",
        killAllDatabaseProcesses:
          "\u8BE5\u547D\u4EE4\u5C06\u7EC8\u6B62\u6240\u6709\u6570\u636E\u5E93\u8FDB\u7A0B\uFF0C\u4F1A\u5BFC\u81F4\u6570\u636E\u5E93\u670D\u52A1\u4E2D\u65AD\u3001\u8FDE\u63A5\u65AD\u5F00\u3001\u53EF\u80FD\u7684\u6570\u636E\u635F\u574F\u3002\u8FD9\u662F\u6781\u5176\u5371\u9669\u7684\u64CD\u4F5C\uFF0C\u53EF\u80FD\u9020\u6210\u4E1A\u52A1\u4E2D\u65AD\u548C\u6570\u636E\u4E22\u5931\u3002",
        killAllWebServerProcesses:
          "\u8BE5\u547D\u4EE4\u5C06\u7EC8\u6B62\u6240\u6709Web\u670D\u52A1\u5668\u8FDB\u7A0B\uFF0C\u4F1A\u5BFC\u81F4\u7F51\u7AD9\u670D\u52A1\u4E2D\u65AD\u3001\u7528\u6237\u8FDE\u63A5\u65AD\u5F00\u3002\u5EFA\u8BAE\u4F7F\u7528\u670D\u52A1\u7BA1\u7406\u547D\u4EE4\uFF08\u5982systemctl\uFF09\u4F18\u96C5\u5730\u91CD\u542F\u670D\u52A1\u3002",
      },
      useAuthCommand: {
        browserLaunchFailed:
          "\u6D4F\u89C8\u5668\u542F\u52A8\u5931\u8D25\uFF1A{{message}} \u8BF7\u9009\u62E9\u5176\u4ED6\u8EAB\u4EFD\u9A8C\u8BC1\u65B9\u6CD5\u3002",
        loginFailed: "\u767B\u5F55\u5931\u8D25\u3002\u6D88\u606F\uFF1A{{message}}",
        configurationFailed: "\u5E94\u7528\u65B0\u914D\u7F6E\u5931\u8D25\u3002\u6D88\u606F\uFF1A{{message}}",
      },
      atCommandProcessor: {
        toolNotFound: "\u9519\u8BEF\uFF1A\u672A\u627E\u5230 read_many_files \u5DE5\u5177\u3002",
        invalidAtCommand:
          "\u9519\u8BEF\uFF1A\u65E0\u6548\u7684 @ \u547D\u4EE4 '{{command}}'\u3002\u672A\u6307\u5B9A\u8DEF\u5F84\u3002",
        successfullyRead: "\u6210\u529F\u8BFB\u53D6\uFF1A{{files}}",
        errorReadingFiles: "\u8BFB\u53D6\u6587\u4EF6\u9519\u8BEF ({{files}})\uFF1A{{error}}",
        tooManyFiles:
          "\u76EE\u5F55 {{path}} \u5305\u542B {{count}} \u4E2A\u6587\u4EF6\uFF0C\u8D85\u8FC7\u4E86\u9650\u5236 {{limit}}\u3002\u8BF7\u4F7F\u7528\u66F4\u5177\u4F53\u7684\u8DEF\u5F84\u6216 glob \u6A21\u5F0F\u6765\u7F29\u5C0F\u8303\u56F4\u3002",
      },
      useEditorSettings: {
        editorPreferenceSet:
          '\u7F16\u8F91\u5668\u504F\u597D\u8BBE\u7F6E\u5DF2\u5728 {{scope}} \u8BBE\u7F6E\u4E2D\u8BBE\u4E3A "{{editorType}}"\u3002',
        editorPreferenceCleared:
          "\u7F16\u8F91\u5668\u504F\u597D\u8BBE\u7F6E\u5DF2\u5728 {{scope}} \u8BBE\u7F6E\u4E2D\u6E05\u9664\u3002",
        failedToSetPreference: "\u8BBE\u7F6E\u7F16\u8F91\u5668\u504F\u597D\u5931\u8D25\uFF1A{{error}}",
      },
      shellCommandProcessor: {
        commandCancelled: "\u547D\u4EE4\u5DF2\u53D6\u6D88\u3002",
        commandTerminated: "\u547D\u4EE4\u88AB\u4FE1\u53F7\u7EC8\u6B62\uFF1A{{signal}}\u3002",
        commandExited: "\u547D\u4EE4\u4EE5\u4EE3\u7801 {{exitCode}} \u9000\u51FA\u3002",
        directoryChangeWarning:
          "\u8B66\u544A\uFF1Ashell \u6A21\u5F0F\u662F\u65E0\u72B6\u6001\u7684\uFF1B\u76EE\u5F55\u66F4\u6539\u5230 '{{directory}}' \u4E0D\u4F1A\u6301\u4E45\u5316\u3002",
      },
      concurrentScheduler: {
        errors: {
          executionAborted: "\u6267\u884C\u5DF2\u4E2D\u6B62",
          tasksFailedSummary: "{{failedCount}} \u4E2A\u4EFB\u52A1\u5931\u8D25\uFF1A{{errorSummary}}",
          executionWasAborted: "\u6267\u884C\u5DF2\u4E2D\u6B62",
        },
      },
      toolPermissionFilter: {
        errors: { invalidFileSizeFormat: "\u65E0\u6548\u7684\u6587\u4EF6\u5927\u5C0F\u683C\u5F0F\uFF1A{{sizeStr}}" },
      },
      subAgentManager: {
        errors: {
          noAssistantMessages: "\u4EE3\u7406 {{agentIndex}}\uFF1A\u672A\u751F\u6210\u52A9\u624B\u6D88\u606F",
          subAgentExecutionFailed: "\u5B50\u4EE3\u7406\u6267\u884C\u5931\u8D25\uFF1A{{message}}",
          toolNotFound: "\u5DE5\u5177 {{toolName}} \u672A\u627E\u5230",
        },
        usingSavedPreference: "\u4F7F\u7528\u5DF2\u4FDD\u5B58\u7684\u504F\u597D\u8BBE\u7F6E",
        modelNotSupported: "\u4E0D\u652F\u6301\u8BE5\u6A21\u578B",
        agentExecutionInterrupted: "\u4EE3\u7406\u6267\u884C\u88AB\u4E2D\u65AD\u3002",
        agentCompletedWithoutOutput: "\u4EE3\u7406\u5B8C\u6210\u4F46\u672A\u751F\u6210\u6587\u672C\u8F93\u51FA",
        toolExecutionAborted: "\u5DE5\u5177\u6267\u884C\u5DF2\u4E2D\u6B62",
        toolExecutionFailed: "\u5DE5\u5177\u6267\u884C\u5931\u8D25",
        projectRoot: "\u9879\u76EE\u6839\u76EE\u5F55",
      },
      agentRegistry: {
        errors: {
          agentFileAlreadyExists: "\u4EE3\u7406\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A{{filePath}}",
          sizeMustBeNonNegative: "\u5927\u5C0F\u5FC5\u987B\u4E3A\u975E\u8D1F\u6570",
          failedToCreateDirectory: "\u521B\u5EFA\u76EE\u5F55\u5931\u8D25 {{dirPath}}\uFF1A{{error}}",
        },
      },
      subAgentSessionManager: {
        errors: {
          contentGeneratorConfigNotAvailable:
            "\u5B50\u4EE3\u7406\u7684\u5185\u5BB9\u751F\u6210\u5668\u914D\u7F6E\u4E0D\u53EF\u7528",
        },
      },
      resourceMonitor: {
        errors: {
          tokenLimitExceeded:
            "\u4EE3\u7406 {{agentId}} \u7684 Token \u9650\u5236\u5DF2\u8D85\u51FA\uFF1A{{currentTokens}} > {{maxTokens}}",
          toolCallLimitExceeded:
            "\u4EE3\u7406 {{agentId}} \u7684\u5DE5\u5177\u8C03\u7528\u9650\u5236\u5DF2\u8D85\u51FA\uFF1A{{currentToolCalls}} > {{maxToolCalls}}",
          executionTimeLimitExceeded:
            "\u4EE3\u7406 {{agentId}} \u7684\u6267\u884C\u65F6\u95F4\u9650\u5236\u5DF2\u8D85\u51FA\uFF1A{{elapsed}}ms > {{maxExecutionTime}}ms",
        },
      },
      agentTimeoutController: {
        errors: {
          agentFailedAfterRetries:
            "\u4EE3\u7406 {{agentId}} \u5728 {{maxRetries}} \u6B21\u5C1D\u8BD5\u540E\u5931\u8D25\uFF1A{{error}}",
        },
      },
      recursionGuard: {
        errors: {
          taskToolCannotBeCalledFromSubAgent: "\u5B50\u4EE3\u7406\u65E0\u6CD5\u8C03\u7528\u4EFB\u52A1\u5DE5\u5177",
          maximumRecursionDepthExceeded: "\u8D85\u51FA\u6700\u5927\u9012\u5F52\u6DF1\u5EA6\uFF1A{{maxDepth}}",
          maximumAgentsPerLevelExceeded:
            "\u8D85\u51FA\u6BCF\u5C42\u6700\u5927\u4EE3\u7406\u6570\u91CF\uFF1A\u6B64\u5C42\u6709 {{agentCount}} \u4E2A\u4EE3\u7406",
        },
      },
      ide: {
        connection: {
          disabled:
            "IDE \u96C6\u6210\u5F53\u524D\u5DF2\u7981\u7528\u3002\u8981\u542F\u7528\u5B83\uFF0C\u8BF7\u8FD0\u884C /ide\u3002",
          disconnectedEnable:
            "IDE \u96C6\u6210\u5DF2\u7981\u7528\u3002\u8981\u91CD\u65B0\u542F\u7528\u5B83\uFF0C\u8BF7\u8FD0\u884C /ide enable\u3002",
          failedToConnect:
            "\u65E0\u6CD5\u8FDE\u63A5\u5230 {{ide}} \u7684 IDE \u4F34\u4FA3\u6269\u5C55\u3002\u8BF7\u786E\u4FDD\u6269\u5C55\u6B63\u5728\u8FD0\u884C\u3002\u8981\u5B89\u88C5\u6269\u5C55\u3002",
          failedToConnectInstall:
            "\u65E0\u6CD5\u8FDE\u63A5\u5230 {{ide}} \u7684 IDE \u4F34\u4FA3\u6269\u5C55\u3002\u8BF7\u786E\u4FDD\u6269\u5C55\u6B63\u5728\u8FD0\u884C\u3002\u8981\u5B89\u88C5\u6269\u5C55\uFF0C\u8BF7\u8FD0\u884C /ide install\u3002",
          connectionError:
            "IDE \u8FDE\u63A5\u9519\u8BEF\u3002\u8FDE\u63A5\u610F\u5916\u4E22\u5931\u3002\u8BF7\u901A\u8FC7\u8FD0\u884C /ide \u91CD\u65B0\u8FDE\u63A5",
          workspaceRequired:
            "\u8981\u4F7F\u7528\u6B64\u529F\u80FD\uFF0C\u8BF7\u5728 {{ide}} \u4E2D\u6253\u5F00\u5DE5\u4F5C\u7A7A\u95F4\u6587\u4EF6\u5939\uFF0C\u7136\u540E\u91CD\u8BD5\u3002",
          directoryMismatch:
            "\u76EE\u5F55\u4E0D\u5339\u914D\u3002iFlow CLI \u8FD0\u884C\u7684\u4F4D\u7F6E\u4E0E {{ide}} \u4E2D\u6253\u5F00\u7684\u5DE5\u4F5C\u7A7A\u95F4\u4E0D\u540C\u3002\u8BF7\u4ECE\u4EE5\u4E0B\u76EE\u5F55\u4E4B\u4E00\u8FD0\u884C CLI\uFF1A{{directories}}",
          ideNotAvailable:
            "\u9009\u5B9A\u7684 IDE {{ide}} \u5F53\u524D\u4E0D\u53EF\u7528\u3002\u8BF7\u786E\u4FDD\u5B83\u6B63\u5728\u8FD0\u884C\u3002",
          connectedTo: "\u5DF2\u8FDE\u63A5\u5230 {{ide}}",
        },
        processUtils: {
          errors: {
            shellProcessNotFound:
              "\u5728\u8FDB\u7A0B\u6811\u4E2D\u627E\u4E0D\u5230shell\u8FDB\u7A0B\u3002\u6B63\u5728\u56DE\u9000\u5230\u9876\u7EA7\u8FDB\u7A0B\uFF0C\u8FD9\u53EF\u80FD\u4E0D\u51C6\u786E\u3002\u5982\u679C\u770B\u5230\u6B64\u4FE1\u606F\uFF0C\u8BF7\u901A\u8FC7 /bug \u62A5\u544A\u9519\u8BEF\u3002",
          },
        },
        errors: { invalidJsonContent: "\u6587\u672C\u5185\u5BB9\u4E2D\u7684 JSON \u65E0\u6548" },
        installer: {
          vscode:
            "iFlow CLI for VS Code \u5DF2\u81EA\u52A8\u5B89\u88C5\uFF0C\u8BF7\u91CD\u542F iFlow CLI \u4F7F\u5176\u751F\u6548\u3002\u652F\u6301\u611F\u77E5\u5F53\u524D\u6253\u5F00\u7684\u6587\u4EF6\uFF0C\u9009\u4E2D\u7684\u4EE3\u7801\u3002",
          jetbrains:
            "iFlow CLI for JetBrains IDE \u5DF2\u81EA\u52A8\u5B89\u88C5\uFF0C\u8BF7\u91CD\u542F IDE \u4F7F\u5176\u751F\u6548\u3002\u652F\u6301\u611F\u77E5\u5F53\u524D\u6253\u5F00\u7684\u6587\u4EF6\uFF0C\u9009\u4E2D\u7684\u4EE3\u7801\u3002",
          unsupportedIde: "\u4E0D\u652F\u6301 IDE: {{ide}}",
          vsCodeCliNotFound:
            "\u672A\u627E\u5230 VS Code CLI\u3002\u8BF7\u786E\u4FDD 'code' \u5728\u60A8\u7684\u7CFB\u7EDF PATH \u4E2D\u3002\u5982\u9700\u5E2E\u52A9\uFF0C\u8BF7\u53C2\u9605 https://code.visualstudio.com/docs/configure/command-line#_code-is-not-recognized-as-an-internal-or-external-command\u3002",
          extensionInstallSuccess: "VS Code \u6269\u5C55\u5B89\u88C5\u6210\u529F\u3002",
          extensionInstallFailed:
            "\u5B89\u88C5 VS Code \u6269\u5C55\u5931\u8D25\u3002\u8BF7\u4ECE VS Code \u6269\u5C55\u5E02\u573A\u624B\u52A8\u5B89\u88C5\u3002",
        },
      },
      mcp: {
        auth: {
          scopesRequired:
            "\u5FC5\u987B\u5728 Google \u51ED\u636E\u63D0\u4F9B\u7A0B\u5E8F\u7684 oauth \u914D\u7F6E\u4E2D\u63D0\u4F9B\u4F5C\u7528\u57DF",
          failedToGetAccessToken: "\u4ECE Google ADC \u83B7\u53D6\u8BBF\u95EE\u4EE4\u724C\u5931\u8D25",
          clientRegistrationFailed:
            "\u5BA2\u6237\u7AEF\u6CE8\u518C\u5931\u8D25\uFF1A{{status}} {{statusText}} - {{error}}",
          invalidResourceUrl: '\u8D44\u6E90 URL \u65E0\u6548\uFF1A"{{url}}"\u3002{{error}}',
          tokenExchangeFailed: "\u4EE4\u724C\u4EA4\u6362\u5931\u8D25\uFF1A{{status}} - {{error}}",
          tokenRefreshFailed: "\u4EE4\u724C\u5237\u65B0\u5931\u8D25\uFF1A{{status}} - {{error}}",
          oauthDiscoveryFailed: "\u4ECE MCP \u670D\u52A1\u5668\u53D1\u73B0 OAuth \u914D\u7F6E\u5931\u8D25",
          cannotPerformRegistration:
            "\u65E0\u6CD5\u5728\u6CA1\u6709\u6388\u6743 URL \u7684\u60C5\u51B5\u4E0B\u6267\u884C\u52A8\u6001\u6CE8\u518C",
          fetchAuthServerMetadataFailed:
            "\u83B7\u53D6\u5BA2\u6237\u7AEF\u6CE8\u518C\u7684\u6388\u6743\u670D\u52A1\u5668\u5143\u6570\u636E\u5931\u8D25",
          noClientIdAndNoRegistration:
            "\u672A\u63D0\u4F9B\u5BA2\u6237\u7AEF ID \u4E14\u4E0D\u652F\u6301\u52A8\u6001\u6CE8\u518C",
          missingOAuthConfig: "\u53D1\u73B0\u548C\u6CE8\u518C\u540E\u7F3A\u5C11\u5FC5\u9700\u7684 OAuth \u914D\u7F6E",
          oauthCallbackTimeout: "OAuth \u56DE\u8C03\u8D85\u65F6",
          stateValidationFailed: "\u72B6\u6001\u4E0D\u5339\u914D - \u53EF\u80FD\u7684 CSRF \u653B\u51FB",
          oauthError: "OAuth \u9519\u8BEF\uFF1A{{error}}",
          authenticationCancelled: "\u7528\u6237\u53D6\u6D88\u4E86\u8BA4\u8BC1",
          missingCodeOrState: "\u56DE\u8C03 URL \u4E2D\u7F3A\u5C11 code \u6216 state \u53C2\u6570",
          parseCallbackUrlFailed: "\u89E3\u6790\u56DE\u8C03 URL \u5931\u8D25\uFF1A{{error}}",
        },
        ui: {
          authenticationFailed: "\u8BA4\u8BC1\u5931\u8D25",
          authenticationSuccessful: "\u8BA4\u8BC1\u6210\u529F\uFF01",
          closeWindow: "\u60A8\u53EF\u4EE5\u5173\u95ED\u6B64\u7A97\u53E3\u5E76\u8FD4\u56DE iFlow CLI\u3002",
          notFound: "\u672A\u627E\u5230",
          missingCodeOrState: "\u7F3A\u5C11\u4EE3\u7801\u6216\u72B6\u6001\u53C2\u6570",
          invalidStateParameter: "\u65E0\u6548\u7684\u72B6\u6001\u53C2\u6570",
          openingBrowserForAuth: "\u6B63\u5728\u6253\u5F00\u6D4F\u89C8\u5668\u8FDB\u884C OAuth \u8BA4\u8BC1...",
          ifBrowserNotOpen:
            "\u5982\u679C\u6D4F\u89C8\u5668\u6CA1\u6709\u81EA\u52A8\u6253\u5F00\uFF0C\u8BF7\u8BBF\u95EE\uFF1A",
          copyEntireUrl:
            "\u590D\u5236\u4E0B\u9762\u7684\u5B8C\u6574 URL\uFF08\u9009\u62E9\u884C\u95F4\u7684\u6240\u6709\u6587\u672C\uFF09\uFF1A",
          tipTripleClick:
            "\u{1F4A1} \u63D0\u793A\uFF1A\u4E09\u6B21\u70B9\u51FB\u9009\u62E9\u6574\u4E2A URL\uFF0C\u7136\u540E\u590D\u5236\u5E76\u7C98\u8D34\u5230\u6D4F\u89C8\u5668\u4E2D\u3002",
          warningCompleteUrl:
            "\u26A0\uFE0F  \u786E\u4FDD\u590D\u5236\u5B8C\u6574\u7684 URL - \u5B83\u53EF\u80FD\u6362\u884C\u663E\u793A\u5728\u591A\u884C\u4E0A\u3002",
          callbackServerListening:
            "OAuth \u56DE\u8C03\u670D\u52A1\u5668\u6B63\u5728\u7AEF\u53E3 {{port}} \u4E0A\u76D1\u542C",
          authorizationCodeReceived: "\u6536\u5230\u6388\u6743\u7801\uFF0C\u6B63\u5728\u4EA4\u6362\u4EE4\u724C...",
          authenticationSuccessfulTokenSaved: "\u8BA4\u8BC1\u6210\u529F\uFF01\u4EE4\u724C\u5DF2\u4FDD\u5B58\u3002",
          tokenVerificationSuccessful: "\u4EE4\u724C\u9A8C\u8BC1\u6210\u529F\uFF1A{{token}}...",
          tokenVerificationFailed:
            "\u4EE4\u724C\u9A8C\u8BC1\u5931\u8D25\uFF1A\u4FDD\u5B58\u540E\u672A\u627E\u5230\u4EE4\u724C",
          failedToSaveToken: "\u4FDD\u5B58\u4EE4\u724C\u5931\u8D25\uFF1A{{error}}",
          refreshingExpiredToken:
            "\u6B63\u5728\u5237\u65B0 MCP \u670D\u52A1\u5668\u7684\u8FC7\u671F\u4EE4\u724C\uFF1A{{serverName}}",
          failedToRefreshToken: "\u5237\u65B0\u4EE4\u724C\u5931\u8D25\uFF1A{{error}}",
          failedToOpenBrowser: "\u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668\u5931\u8D25\uFF1A",
          noAuthUrlAttemptingDiscovery:
            "\u672A\u63D0\u4F9B\u6388\u6743 URL\uFF0C\u6B63\u5728\u5C1D\u8BD5 OAuth \u53D1\u73B0...",
          oauthConfigDiscoveredSuccess: "OAuth \u914D\u7F6E\u53D1\u73B0\u6210\u529F",
          noClientIdAttemptingRegistration:
            "\u672A\u63D0\u4F9B\u5BA2\u6237\u7AEF ID\uFF0C\u6B63\u5728\u5C1D\u8BD5\u52A8\u6001\u5BA2\u6237\u7AEF\u6CE8\u518C...",
          dynamicClientRegistrationSuccess: "\u52A8\u6001\u5BA2\u6237\u7AEF\u6CE8\u518C\u6210\u529F",
          callbackTimeoutSwitchManual:
            "\u23F1\uFE0F  \u6D4F\u89C8\u5668\u56DE\u8C03\u8D85\u65F6\uFF0C\u5207\u6362\u5230\u624B\u52A8\u6A21\u5F0F...",
          manualCallbackInstructions:
            "\u8BF7\u5728\u6D4F\u89C8\u5668\u4E2D\u5B8C\u6210\u6388\u6743\u540E\uFF0C\u590D\u5236\u5730\u5740\u680F\u4E2D\u7684\u5B8C\u6574 URL\uFF08\u5305\u542B code \u53C2\u6570\uFF09",
        },
        tokenStorage: {
          errors: {
            failedToLoadTokens: "\u52A0\u8F7D MCP OAuth \u4EE4\u724C\u5931\u8D25\uFF1A{{error}}",
            failedToSaveToken: "\u4FDD\u5B58 MCP OAuth \u4EE4\u724C\u5931\u8D25\uFF1A{{error}}",
            failedToRemoveToken: "\u79FB\u9664 MCP OAuth \u4EE4\u724C\u5931\u8D25\uFF1A{{error}}",
            failedToClearTokens: "\u6E05\u9664 MCP OAuth \u4EE4\u724C\u5931\u8D25\uFF1A{{error}}",
          },
        },
        oauth: {
          discovery: {
            dynamicRegistrationSupported: "\u652F\u6301\u52A8\u6001\u5BA2\u6237\u7AEF\u6CE8\u518C\uFF1A",
            foundResourceMetadataUri:
              "\u4ECE www-authenticate \u6807\u5934\u627E\u5230\u8D44\u6E90\u5143\u6570\u636E URI\uFF1A{{uri}}",
            configDiscoveredFromWwwAuth:
              "\u4ECE www-authenticate \u6807\u5934\u6210\u529F\u53D1\u73B0 OAuth \u914D\u7F6E",
          },
        },
      },
      mcpAdd: {
        description: "\u6DFB\u52A0\u670D\u52A1\u5668",
        usage:
          "\u7528\u6CD5\uFF1Aiflow mcp add [\u9009\u9879] <\u540D\u79F0> <\u547D\u4EE4\u6216URL> [\u53C2\u6570...]",
        options: {
          name: "\u670D\u52A1\u5668\u540D\u79F0",
          commandOrUrl: "\u547D\u4EE4\uFF08stdio\uFF09\u6216 URL\uFF08sse\uFF0Chttp\uFF09",
          scope: "\u914D\u7F6E\u8303\u56F4\uFF08\u7528\u6237\u6216\u9879\u76EE\uFF09",
          transport: "\u4F20\u8F93\u7C7B\u578B\uFF08stdio\uFF0Csse\uFF0Chttp\uFF09",
          env: "\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF08\u4F8B\u5982 -e KEY=value\uFF09",
          header:
            '\u4E3A SSE \u548C HTTP \u4F20\u8F93\u8BBE\u7F6E HTTP \u6807\u5934\uFF08\u4F8B\u5982 -H "X-Api-Key: abc123" -H "Authorization: Bearer abc123"\uFF09',
          timeout: "\u8BBE\u7F6E\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09",
          trust:
            "\u4FE1\u4EFB\u670D\u52A1\u5668\uFF08\u8DF3\u8FC7\u6240\u6709\u5DE5\u5177\u8C03\u7528\u786E\u8BA4\u63D0\u793A\uFF09",
          description: "\u8BBE\u7F6E\u670D\u52A1\u5668\u63CF\u8FF0",
          includeTools: "\u8981\u5305\u542B\u7684\u5DE5\u5177\u5217\u8868\uFF08\u9017\u53F7\u5206\u9694\uFF09",
          excludeTools: "\u8981\u6392\u9664\u7684\u5DE5\u5177\u5217\u8868\uFF08\u9017\u53F7\u5206\u9694\uFF09",
        },
        info: {
          detectedHomeDirectory:
            '\u4FE1\u606F\uFF1A\u68C0\u6D4B\u5230\u4E3B\u76EE\u5F55\u3002\u81EA\u52A8\u4F7F\u7528"\u7528\u6237"\u8303\u56F4\u4EE5\u4FDD\u7559\u73B0\u6709\u8BBE\u7F6E\u3002',
          serverAlreadyConfigured:
            'MCP \u670D\u52A1\u5668 "{{name}}" \u5DF2\u5728 {{scope}} \u8BBE\u7F6E\u4E2D\u914D\u7F6E\u3002',
          serverUpdated:
            'MCP \u670D\u52A1\u5668 "{{name}}" \u5DF2\u5728 {{scope}} \u8BBE\u7F6E\u4E2D\u66F4\u65B0\u3002',
          serverAdded:
            'MCP \u670D\u52A1\u5668 "{{name}}" \u5DF2\u6DFB\u52A0\u5230 {{scope}} \u8BBE\u7F6E\u3002({{transport}})',
        },
      },
      mcpAddJson: {
        description: "\u4ECE JSON \u914D\u7F6E\u6DFB\u52A0\u670D\u52A1\u5668",
        usage: "\u7528\u6CD5\uFF1Aiflow mcp add-json [\u9009\u9879] <\u540D\u79F0> <json>",
        options: { json: "MCP \u670D\u52A1\u5668\u7684 JSON \u914D\u7F6E\u5B57\u7B26\u4E32" },
        errors: {
          invalidJson: "\u9519\u8BEF\uFF1A\u65E0\u6548\u7684 JSON \u914D\u7F6E",
          mustBeObject: "\u9519\u8BEF\uFF1AJSON \u914D\u7F6E\u5FC5\u987B\u662F\u6709\u6548\u5BF9\u8C61",
          noTransport:
            "\u9519\u8BEF\uFF1A\u5FC5\u987B\u914D\u7F6E\u81F3\u5C11\u4E00\u79CD\u4F20\u8F93\u65B9\u5F0F\uFF08command\u3001url\u3001httpUrl \u6216 tcp\uFF09",
          uvxRequiresUv:
            "\u9519\u8BEF\uFF1A\u68C0\u6D4B\u5230 uvx \u547D\u4EE4\uFF0C\u4F46\u7CFB\u7EDF\u672A\u5B89\u88C5 uv",
          uvInstallationGuide: "\u8BF7\u5B89\u88C5 uv \u540E\u518D\u914D\u7F6E\u6B64 MCP \u670D\u52A1\u5668\uFF1A",
        },
        info: {
          serverAdded: 'MCP \u670D\u52A1\u5668 "{{name}}" \u5DF2\u6DFB\u52A0\u5230 {{scope}} \u8BBE\u7F6E\u3002(json)',
          transportStdio: "\u4F20\u8F93\u65B9\u5F0F\uFF1Astdio",
          transportSse: "\u4F20\u8F93\u65B9\u5F0F\uFF1Asse",
          transportHttp: "\u4F20\u8F93\u65B9\u5F0F\uFF1Ahttp",
          transportWebsocket: "\u4F20\u8F93\u65B9\u5F0F\uFF1Awebsocket",
          command: "\u547D\u4EE4\uFF1A{{command}}",
          arguments: "\u53C2\u6570\uFF1A{{args}}",
          url: "URL\uFF1A{{url}}",
          tcp: "TCP\uFF1A{{tcp}}",
          description: "\u63CF\u8FF0\uFF1A{{description}}",
          envVars: "\u73AF\u5883\u53D8\u91CF\uFF1A{{vars}}",
          headers: "\u8BF7\u6C42\u5934\uFF1A{{headers}}",
          oauthEnabled: "OAuth \u5DF2\u542F\u7528\uFF1A\u662F",
        },
      },
      gemini: {
        errors: {
          invalidDnsResolutionOrder:
            '\u8BBE\u7F6E\u4E2D dnsResolutionOrder \u7684\u503C\u65E0\u6548\uFF1A"{{order}}"\u3002\u4F7F\u7528\u9ED8\u8BA4\u503C "{{defaultValue}}"\u3002',
          unexpectedErrorBugReport:
            "\u8FD9\u662F\u4E00\u4E2A\u610F\u5916\u7684\u9519\u8BEF\u3002\u8BF7\u4F7F\u7528 /bug \u5DE5\u5177\u63D0\u4EA4\u9519\u8BEF\u62A5\u544A\u3002",
          criticalUnhandledRejection:
            "\u4E25\u91CD\u9519\u8BEF\uFF1A\u672A\u5904\u7406\u7684 Promise \u62D2\u7EDD\uFF01",
          criticalUncaughtException: "\u4E25\u91CD\u9519\u8BEF\uFF1A\u672A\u6355\u83B7\u7684\u5F02\u5E38\uFF01",
          reason: "\u539F\u56E0\uFF1A{{reason}}",
          errorName: "\u9519\u8BEF\u540D\u79F0\uFF1A{{name}}",
          errorMessage: "\u9519\u8BEF\u4FE1\u606F\uFF1A{{message}}",
          stackTrace: "\u5806\u6808\u8DDF\u8E2A\uFF1A",
          promptInteractiveFlagNotSupported:
            "\u9519\u8BEF\uFF1A\u4ECE stdin \u7BA1\u9053\u8F93\u5165\u65F6\u4E0D\u652F\u6301 --prompt-interactive \u6807\u5FD7\u3002",
        },
        debug: {
          currentHeapSize: "\u5F53\u524D\u5806\u5927\u5C0F {{size}} MB",
          needToRelaunchWithMoreMemory: "\u9700\u8981\u4F7F\u7528\u66F4\u591A\u5185\u5B58\u91CD\u542F\uFF1A{{size}} MB",
          nodejsWarning: "\u26A0\uFE0F Node.js \u8B66\u544A\uFF1A",
          unhandledPromiseRejectionDetected:
            "\u{1F6A8} \u68C0\u6D4B\u5230\u672A\u5904\u7406\u7684 Promise \u62D2\u7EDD\uFF1A",
        },
        crashDiagnosticsEnabled:
          "\u{1F50D} \u5DF2\u542F\u7528\u5D29\u6E83\u8BCA\u65AD - \u5D29\u6E83\u65F6\u5C06\u751F\u6210\u6838\u5FC3\u8F6C\u50A8\u548C\u5D29\u6E83\u6587\u4EF6",
        crashDetected:
          "\u{1F4A5} \u68C0\u6D4B\u5230\u5D29\u6E83\uFF01\u5D29\u6E83\u4FE1\u606F\u5DF2\u5199\u5165\uFF1A{{crashFilePath}}",
        coreDumpWillBeGenerated: "\u{1F4CB} \u5C06\u751F\u6210\u6838\u5FC3\u8F6C\u50A8...",
        failedToWriteCrashFile: "\u274C \u5199\u5165\u5D29\u6E83\u6587\u4EF6\u5931\u8D25\uFF1A",
        errorInFile: "\u6587\u4EF6 {{path}} \u4E2D\u7684\u9519\u8BEF\uFF1A{{message}}",
        pleaseFixFileAndTryAgain: "\u8BF7\u4FEE\u590D {{path}} \u5E76\u91CD\u8BD5\u3002",
        installedExtensions: "\u5DF2\u5B89\u88C5\u7684\u6269\u5C55\uFF1A",
        failedToConnectToIdeServer: "\u8FDE\u63A5\u5230 IDE \u670D\u52A1\u5668\u5931\u8D25\uFF1A",
        themeNotFound: '\u8B66\u544A\uFF1A\u4E3B\u9898 "{{theme}}" \u672A\u627E\u5230\u3002',
        errorAuthenticating: "\u8BA4\u8BC1\u9519\u8BEF\uFF1A",
        errorDuringUnmount: "\u5378\u8F7D\u65F6\u51FA\u9519\uFF1A",
        errorDuringResume: "\u6062\u590D\u65F6\u51FA\u9519\uFF1A",
        updateCheckFailed: "\u66F4\u65B0\u68C0\u67E5\u5931\u8D25\uFF1A",
        noInputProvidedViaStdin: "\u672A\u901A\u8FC7 stdin \u63D0\u4F9B\u8F93\u5165\u3002",
        pleaseSetAuthMethod: `\u8BF7\u5728\u60A8\u7684 {{userSettingsPath}} \u4E2D\u8BBE\u7F6E\u8BA4\u8BC1\u65B9\u6CD5\uFF0C\u6216\u5728\u8FD0\u884C\u524D\u6307\u5B9A\u4EE5\u4E0B\u73AF\u5883\u53D8\u91CF\u4E4B\u4E00\uFF1A
  - apiKey, APIKEY, API_KEY, api_key 
  - baseUrl, BASEURL, BASE_URL, base_url 
  - modelName, MODELNAME, MODEL_NAME, model_name `,
      },
      languageCommand: {
        zhCN: "\u7B80\u4F53\u4E2D\u6587",
        enUS: "English",
        restartRequired:
          "\u8BED\u8A00\u5DF2\u5207\u6362\u4E3A\u4E2D\u6587\u3002\u8BF7\u9000\u51FA\u5E76\u91CD\u65B0\u6253\u5F00 iFlow CLI \u4EE5\u5B8C\u5168\u5E94\u7528\u66F4\u6539\u3002",
      },
      aboutCommand: { noSandbox: "\u65E0\u6C99\u76D2", unknown: "\u672A\u77E5" },
      userStartupWarnings: {
        homeDirectory:
          "\u60A8\u6B63\u5728\u7528\u6237\u6839\u76EE\u5F55\u4E2D\u8FD0\u884C iFlow CLI\u3002\u5EFA\u8BAE\u5728\u7279\u5B9A\u7684\u9879\u76EE\u91CC\u8FD0\u884C\u3002{{sizeInfo}}",
        iflowDirSize:
          '\u5168\u5C40 ~/.iflow \u76EE\u5F55\u5360\u7528\u7A7A\u95F4\u5927\u5C0F\u4E3A {{size}}\uFF0C\u53EF\u6309\u9700\u9009\u62E9 "/cleanup-checkpoint" \u548C "/cleanup-history" \u6307\u4EE4\u6E05\u7406\u7A7A\u95F4\u3002',
        iflowDirSizeUnknown:
          '\u65E0\u6CD5\u8BA1\u7B97\u5168\u5C40 ~/.iflow \u76EE\u5F55\u5927\u5C0F\uFF08\u53EF\u80FD\u56E0\u6743\u9650\u4E0D\u8DB3\uFF09\uFF0C\u53EF\u6309\u9700\u9009\u62E9 "/cleanup-checkpoint" \u548C "/cleanup-history" \u6307\u4EE4\u6E05\u7406\u7A7A\u95F4\u3002',
        rootDirectory:
          "\u8B66\u544A\uFF1A\u60A8\u6B63\u5728\u6839\u76EE\u5F55\u4E2D\u8FD0\u884C iFlow CLI\u3002\u60A8\u7684\u6574\u4E2A\u6587\u4EF6\u5939\u7ED3\u6784\u5C06\u7528\u4F5C\u4E0A\u4E0B\u6587\u3002\u5F3A\u70C8\u5EFA\u8BAE\u5728\u9879\u76EE\u7279\u5B9A\u76EE\u5F55\u4E2D\u8FD0\u884C\u3002",
        fileSystemError:
          "\u7531\u4E8E\u6587\u4EF6\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u65E0\u6CD5\u9A8C\u8BC1\u5F53\u524D\u76EE\u5F55\u3002",
      },
      geminiPrivacyNotice: {
        title: "iFlow API Key \u58F0\u660E",
        description:
          '\u901A\u8FC7\u4F7F\u7528 iFlow API<apiRef />\u3001Google AI Studio<studioRef /> \u4EE5\u53CA\u5F15\u7528\u8FD9\u4E9B\u6761\u6B3E\u7684\u5176\u4ED6 Google \u5F00\u53D1\u8005\u670D\u52A1\uFF08\u7EDF\u79F0\u4E3A"API"\u6216"\u670D\u52A1"\uFF09\uFF0C\u60A8\u540C\u610F Google API \u670D\u52A1\u6761\u6B3E\uFF08"API \u6761\u6B3E"\uFF09<termsRef /> \u548C iFlow API \u9644\u52A0\u670D\u52A1\u6761\u6B3E\uFF08"\u9644\u52A0\u6761\u6B3E"\uFF09<additionalRef />\u3002',
        pressEscToExit: "\u6309 Esc \u9000\u51FA\u3002",
      },
      sessionSelector: {
        noSessionsFound: "\u6B64\u9879\u76EE\u672A\u627E\u5230\u4F1A\u8BDD",
        messagesCount: "{{count}} \u6761\u6D88\u606F",
        emptySession: "\u7A7A\u4F1A\u8BDD",
        failedToLoadSessions: "\u52A0\u8F7D\u4F1A\u8BDD\u5931\u8D25\uFF1A{{error}}",
        loadingAvailableSessions: "\u6B63\u5728\u52A0\u8F7D\u53EF\u7528\u4F1A\u8BDD...",
        error: "\u9519\u8BEF\uFF1A{{error}}",
        pressEnterToContinue: "\u6309 Enter \u7EE7\u7EED\u65B0\u4F1A\u8BDD",
        noSessionsFoundForProject: "\u6B64\u9879\u76EE\u672A\u627E\u5230\u4F1A\u8BDD",
        selectSessionToResume: "\u9009\u62E9\u8981\u6062\u590D\u7684\u4F1A\u8BDD",
        navigationInstructions:
          "\u4F7F\u7528\u65B9\u5411\u952E\u5BFC\u822A\uFF0CEnter \u9009\u62E9\uFF0CEscape \u53D6\u6D88",
        totalSessionsAvailable: "\u603B\u5171\uFF1A{{count}} \u4E2A\u53EF\u7528\u4F1A\u8BDD",
      },
      oauth2: {
        errors: {
          browserLaunchFailed:
            "\u6D4F\u89C8\u5668\u542F\u52A8\u5931\u8D25\uFF1A\u65E0\u6CD5\u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668\u3002\u8BF7\u5C1D\u8BD5\u5176\u4ED6\u8BA4\u8BC1\u65B9\u5F0F\u6216\u8BBE\u7F6E NO_BROWSER=true\u3002",
          browserLaunchUnexpectedError:
            "\u6D4F\u89C8\u5668\u542F\u52A8\u5931\u8D25\uFF1A\u5C1D\u8BD5\u6253\u5F00\u6D4F\u89C8\u5668\u65F6\u53D1\u751F\u610F\u5916\u9519\u8BEF\uFF1A{{error}}\u3002\u8BF7\u5C1D\u8BD5\u5176\u4ED6\u8BA4\u8BC1\u65B9\u5F0F\u6216\u8BBE\u7F6E NO_BROWSER=true\u3002",
          tokenRequestFailed: "\u4EE4\u724C\u8BF7\u6C42\u5931\u8D25\uFF1A{{status}} {{statusText}}",
          tokenRefreshFailed: "\u4EE4\u724C\u5237\u65B0\u5931\u8D25\uFF1A{{status}} {{statusText}}",
          authenticationError: "\u8BA4\u8BC1\u8FC7\u7A0B\u4E2D\u51FA\u9519\uFF1A{{error}}",
          stateMismatch: "\u72B6\u6001\u4E0D\u5339\u914D\u3002\u53EF\u80FD\u7684 CSRF \u653B\u51FB",
          noCodeFound: "\u8BF7\u6C42\u4E2D\u672A\u627E\u5230\u4EE3\u7801",
          unexpectedRequest: "\u610F\u5916\u7684\u8BF7\u6C42\uFF1A{{url}}",
          tokenExpired: "iFlow OAuth2 \u4EE4\u724C\u5DF2\u8FC7\u671F\uFF0C\u9700\u8981\u91CD\u65B0\u8BA4\u8BC1\u3002",
          tokenExpiresWarningSoon:
            "\u4EE4\u724C\u5373\u5C06\u8FC7\u671F\u4E14\u6CA1\u6709\u5237\u65B0\u4EE4\u724C\u53EF\u7528",
          iflowLoginExpired:
            "\u60A8\u7684 iFlow \u767B\u5F55\u5DF2\u8FC7\u671F\u3002\u8BF7\u8F93\u5165 /auth \u91CD\u65B0\u767B\u5F55\u3002",
          serverOauth2Required: "\u9700\u8981\u4F7F\u7528\u670D\u52A1\u5668OAuth2\u6D41\u7A0B",
          serverOauth2TokenExpired:
            "\u670D\u52A1\u5668\u73AF\u5883\u4E0BOAuth2 token\u5DF2\u8FC7\u671F\uFF0C\u9700\u8981\u91CD\u65B0\u8BA4\u8BC1",
        },
        messages: {
          codeAssistLoginRequired: "Code Assist \u767B\u5F55\u5FC5\u9700\u3002",
          attemptingToOpenBrowser:
            "\u6B63\u5728\u5C1D\u8BD5\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u8BA4\u8BC1\u9875\u9762\u3002",
          navigateToUrl: "\u5426\u5219\u8BF7\u5BFC\u822A\u5230\uFF1A",
          waitingForAuthentication: "\u7B49\u5F85\u8BA4\u8BC1\u4E2D...",
          loadedCachedCredentials: "\u5DF2\u52A0\u8F7D\u7F13\u5B58\u7684\u51ED\u636E\u3002",
          tokenExpiredClearing:
            "OAuth2 \u4EE4\u724C\u5DF2\u8FC7\u671F\u3002\u6B63\u5728\u6E05\u9664\u51ED\u636E\u4EE5\u91CD\u65B0\u8BA4\u8BC1\u3002",
          tokenExpiresSoonClearing:
            "OAuth2 \u4EE4\u724C\u5373\u5C06\u8FC7\u671F\u4E14\u6CA1\u6709\u5237\u65B0\u4EE4\u724C\u53EF\u7528\u3002\u6B63\u5728\u6E05\u9664\u51ED\u636E\u4EE5\u91CD\u65B0\u8BA4\u8BC1\u3002",
          tokenRefreshedSuccessfully: "OAuth2 \u4EE4\u724C\u5237\u65B0\u6210\u529F\u3002",
          tokenRefreshFailedClearing:
            "OAuth2 \u4EE4\u724C\u5237\u65B0\u5931\u8D25\u3002\u6B63\u5728\u6E05\u9664\u51ED\u636E\u4EE5\u91CD\u65B0\u8BA4\u8BC1\u3002",
          failedToClearCredentials: "\u6E05\u9664\u7F13\u5B58\u51ED\u636E\u5931\u8D25\uFF1A",
          failedToFetchUserInfo: "\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5931\u8D25\uFF1A{{status}} {{statusText}}",
          errorRetrievingUserInfo: "\u68C0\u7D22\u7528\u6237\u4FE1\u606F\u65F6\u51FA\u9519\uFF1A",
          errorRetrievingIflowUserInfo: "\u68C0\u7D22 iFlow \u7528\u6237\u4FE1\u606F\u65F6\u51FA\u9519\uFF1A",
          retryingRequest:
            "{{errorMessage}} - \u5C06\u5728 {{delay}}\u6BEB\u79D2 \u540E\u91CD\u8BD5\uFF08\u7B2C {{attempt}}/{{maxRetries}} \u6B21\u5C1D\u8BD5\uFF09",
          errorAfterAllRetries:
            "\u6240\u6709\u91CD\u8BD5\u540E\u7684 iFlow \u7528\u6237\u4FE1\u606F\u83B7\u53D6\u9519\u8BEF\uFF1A",
          errorWithRetryInfo:
            "iFlow \u7528\u6237\u4FE1\u606F\u83B7\u53D6\u9519\u8BEF\uFF08\u7B2C {{attempt}}/{{maxRetries}} \u6B21\u5C1D\u8BD5\uFF09\uFF1A{{error}} - \u5C06\u5728 {{delay}}\u6BEB\u79D2 \u540E\u91CD\u8BD5",
        },
      },
      turn: {
        autoCompressionEnabled:
          "\u4E0A\u4E0B\u6587\u8FC7\u957F\uFF0C\u6B63\u5728\u81EA\u52A8\u538B\u7F29\u804A\u5929\u8BB0\u5F55...",
        autoCompressionSuccess:
          "\u81EA\u52A8\u538B\u7F29\u5B8C\u6210\uFF1A{{original}} \u2192 {{compressed}} \u4E2Atoken\uFF08\u8282\u7701 {{saved}} \u4E2Atoken\uFF09",
        autoCompressionFailed:
          "\u81EA\u52A8\u538B\u7F29\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u538B\u7F29\u6216\u51CF\u5C11\u8F93\u5165\u957F\u5EA6\u3002",
      },
      autoUpdate: {
        failed:
          "\u81EA\u52A8\u5347\u7EA7\u5931\u8D25\u3002\u8BF7\u624B\u52A8\u5347\u7EA7 `npm i -g @iflow-ai/iflow-cli`\u3002",
        ok: "\u81EA\u52A8\u5347\u7EA7\u6210\u529F\uFF0C\u91CD\u542F\u540E\u751F\u6548\u3002",
        available: "iFlow CLI \u6709\u65B0\u7248\u672C\uFF1A{{currentVersion}} \u2192 {{newVersion}}",
        installWithNpm: "\u5C1D\u8BD5\u901A\u8FC7 NPM \u81EA\u52A8\u5347\u7EA7 iFlow CLI...",
        fallback: "\u8BF7\u624B\u52A8\u6267\u884C\u5347\u7EA7\u547D\u4EE4 {{updateCommand}}",
        upToDate: "iFlow CLI \u5DF2\u662F\u6700\u65B0\u7248\u672C",
      },
      planReviewDialog: {
        error: "\u52A0\u8F7D\u8BA1\u5212\u65F6\u51FA\u9519",
        reviewPlan: "\u5BA1\u6838\u8BA1\u5212",
        loading: "\u6B63\u5728\u52A0\u8F7D\u8BA1\u5212...",
        proceedWithPlan: "\u60A8\u5E0C\u671B\u5982\u4F55\u5904\u7406\u6B64\u8BA1\u5212\uFF1F",
        smartMode:
          "1. \u5728\u667A\u80FD\u6A21\u5F0F\u4E0B\u6267\u884C\u8BA1\u5212\uFF08\u667A\u80FD\u5BA1\u6838\u64CD\u4F5C\uFF09",
        defaultMode:
          "2. \u5728\u9ED8\u8BA4\u6A21\u5F0F\u4E0B\u6267\u884C\u8BA1\u5212\uFF08\u786E\u8BA4\u6BCF\u4E00\u6B65\uFF09",
        continuePlanning: "3. \u7EE7\u7EED\u89C4\u5212\uFF08\u8981\u6C42\u66F4\u591A\u8BE6\u60C5\uFF09",
        navigationInstructions:
          "\u4F7F\u7528 \u2191/\u2193 \u7BAD\u5934\u5BFC\u822A\uFF0CEnter \u9009\u62E9\uFF0C\u6216\u6309 1-3",
      },
      cleanupCheckpointDialog: {
        title: "\u5168\u5C40\u68C0\u67E5\u70B9\u6E05\u7406",
        loadingStats: "\u6B63\u5728\u52A0\u8F7D\u7EDF\u8BA1\u4FE1\u606F...",
        deletingInProgress:
          "\u68C0\u67E5\u70B9\u5386\u53F2\u6B63\u5728\u5220\u9664\u4E2D...\uFF08\u82E5\u5185\u5B58\u8F83\u5927\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5019\uFF09",
        completeTitle:
          "\u68C0\u67E5\u70B9\u5386\u53F2\u6E05\u7406\u5DF2\u5B8C\u6210\uFF0C\u91CA\u653E\u78C1\u76D8\u7A7A\u95F4\uFF1A{{size}}",
        restartReminder: "\u8BF7\u91CD\u65B0\u542F\u52A8\u540E\u4F7F\u7528\uFF01",
        globalStatus: "\u5168\u5C40\u72B6\u6001\uFF1A",
        cleanupTarget: "\u6E05\u7406\u76EE\u6807\uFF1A",
        globalHistoryAndTmp: "~/.iflow/history/ \u548C ~/.iflow/tmp/",
        files: "\u6587\u4EF6\u6570\u91CF\uFF1A",
        filesUnit: "\u4E2A\uFF08\u6240\u6709\u9879\u76EE\uFF09",
        diskUsage: "\u78C1\u76D8\u5360\u7528\uFF1A\u7EA6",
        unknown: "\u672A\u77E5",
        calculationFailed: "\u8BA1\u7B97\u5931\u8D25",
        calculating: "\u8BA1\u7B97\u4E2D...",
        warningTitle: "\u6B64\u64CD\u4F5C\u5C06\u4F1A\uFF1A",
        warningDeleteHistory:
          "\u5220\u9664\u6240\u6709\u9879\u76EE\u7684\u68C0\u67E5\u70B9\u5386\u53F2\uFF08~/.iflow/history/ \u548C ~/.iflow/tmp/\uFF09",
        warningFreeSpace: "\u91CA\u653E\u78C1\u76D8\u7A7A\u95F4",
        warningNoRestore:
          "\u65E0\u6CD5\u901A\u8FC7/restore \u6307\u4EE4\u56DE\u9000\u5220\u9664\u540E\u7684\u68C0\u67E5\u70B9",
        warningAffectsAllProjects:
          "\u6B64\u64CD\u4F5C\u5C06\u5F71\u54CD\u6240\u6709\u4F7F\u7528\u8FC7 iFlow \u7684\u9879\u76EE",
        confirmOption:
          "\u786E\u8BA4\u6E05\u7406\u6240\u6709\u68C0\u67E5\u70B9\u7F13\u5B58\uFF08\u65E0\u6CD5\u6062\u590D\uFF09",
        cancelOption: "\u53D6\u6D88",
        instructions: "\uFF08\u6309\u56DE\u8F66\u9009\u62E9\uFF0CESC \u53D6\u6D88\uFF09",
      },
      cleanupHistoryDialog: {
        title: "\u5168\u5C40\u5BF9\u8BDD\u5386\u53F2\u6E05\u7406",
        loadingStats: "\u6B63\u5728\u52A0\u8F7D\u7EDF\u8BA1\u4FE1\u606F...",
        deletingInProgress:
          "\u5BF9\u8BDD\u5386\u53F2\u6B63\u5728\u5220\u9664\u4E2D...\uFF08\u82E5\u5185\u5B58\u8F83\u5927\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5019\uFF09",
        completeTitle:
          "\u5BF9\u8BDD\u5386\u53F2\u6E05\u7406\u5DF2\u5B8C\u6210\uFF0C\u91CA\u653E\u78C1\u76D8\u7A7A\u95F4\uFF1A{{size}}",
        restartReminder: "\u8BF7\u91CD\u65B0\u542F\u52A8\u540E\u4F7F\u7528\uFF01",
        globalStatus: "\u5168\u5C40\u72B6\u6001\uFF1A",
        cleanupTarget: "\u6E05\u7406\u76EE\u6807\uFF1A",
        globalProjects: "~/.iflow/projects/",
        files: "\u6587\u4EF6\u6570\u91CF\uFF1A",
        filesUnit: "\u4E2A\uFF08\u6240\u6709\u9879\u76EE\uFF09",
        diskUsage: "\u78C1\u76D8\u5360\u7528\uFF1A\u7EA6",
        unknown: "\u672A\u77E5",
        calculationFailed: "\u8BA1\u7B97\u5931\u8D25",
        calculating: "\u8BA1\u7B97\u4E2D...",
        warningTitle: "\u6B64\u64CD\u4F5C\u5C06\u4F1A\uFF1A",
        warningDeleteHistory:
          "\u5220\u9664\u6240\u6709\u9879\u76EE\u7684\u5BF9\u8BDD\u5386\u53F2\uFF08~/.iflow/projects/\uFF09",
        warningFreeSpace: "\u91CA\u653E\u78C1\u76D8\u7A7A\u95F4",
        warningAffectsAllProjects:
          "\u6B64\u64CD\u4F5C\u5C06\u5F71\u54CD\u6240\u6709\u4F7F\u7528\u8FC7 iFlow \u7684\u9879\u76EE",
        confirmOption:
          "\u786E\u8BA4\u6E05\u7406\u6240\u6709\u5BF9\u8BDD\u5386\u53F2\uFF08\u65E0\u6CD5\u6062\u590D\uFF09",
        cancelOption: "\u53D6\u6D88",
        instructions: "\uFF08\u6309\u56DE\u8F66\u9009\u62E9\uFF0CESC \u53D6\u6D88\uFF09",
      },
      terminalSetupCommand: {
        restartRequired: "\u8BF7\u91CD\u542F\u7EC8\u7AEF\u4EE5\u4F7F\u66F4\u6539\u751F\u6548\u3002",
        error: "\u914D\u7F6E\u7EC8\u7AEF\u5931\u8D25\uFF1A{{error}}",
      },
      terminalSetup: {
        kittyProtocolEnabled:
          "\u60A8\u7684\u7EC8\u7AEF\u5DF2\u914D\u7F6E\u4E3A\u652F\u6301\u591A\u884C\u8F93\u5165\uFF08Shift+Enter\uFF09\u7684\u6700\u4F73\u4F53\u9A8C\u3002",
        nativeTerminalMethods: {
          windows: `\u2022 Ctrl+Enter - Windows \u5E73\u53F0\u7684\u4E3B\u8981\u6362\u884C\u5FEB\u6377\u952E
\u2022 \u53CD\u659C\u6760+Enter - \u5176\u5B83\u65B9\u6CD5\uFF1A\u884C\u5C3E\u5904\u8F93\u5165\u53CD\u659C\u6760 '\\'\uFF0C\u518D\u6309 Enter \u952E\u5373\u53EF\u6362\u884C`,
          macos: `\u2022 Ctrl+J - macOS/Linux \u5E73\u53F0\u7684\u4E3B\u8981\u6362\u884C\u5FEB\u6377\u952E
\u2022 \u53CD\u659C\u6760+Enter - \u5176\u5B83\u65B9\u6CD5\uFF1A\u884C\u5C3E\u5904\u8F93\u5165\u53CD\u659C\u6760 '\\'\uFF0C\u518D\u6309 Enter \u952E\u5373\u53EF\u6362\u884C`,
          linux: `\u2022 Ctrl+J - Linux/macOS \u5E73\u53F0\u7684\u4E3B\u8981\u6362\u884C\u5FEB\u6377\u952E
\u2022 Alt+Enter - \u90E8\u5206 Linux \u53D1\u884C\u7248\u652F\u6301
\u2022 \u53CD\u659C\u6760+Enter - \u5176\u5B83\u65B9\u6CD5\uFF1A\u884C\u5C3E\u5904\u8F93\u5165\u53CD\u659C\u6760 '\\'\uFF0C\u518D\u6309 Enter \u952E\u5373\u53EF\u6362\u884C`,
        },
        unsupportedTerminal: `\u6B63\u5728\u4F7F\u7528\u7CFB\u7EDF\u7EC8\u7AEF\uFF0C\u6682\u4E0D\u652F\u6301 Shift+Enter \u6362\u884C\u5FEB\u6377\u952E\u914D\u7F6E\u3002
\u5982\u9700\u4F7F\u7528 Shift+Enter \u6362\u884C\uFF0C\u8BF7\u5728VS Code/Cursor/Windsurf \u7684\u7EC8\u7AEF\u9762\u677F\u4E2D\u542F\u52A8iflow\uFF0C\u5E76\u91CD\u65B0\u6267\u884C\u6307\u4EE4/terminal-setup\u3002
\u5982\u4ECD\u5E0C\u671B\u5728\u7CFB\u7EDF\u7EC8\u7AEF\u4E2D\u4F7F\u7528\uFF0C\u53EF\u91C7\u7528\u4EE5\u4E0B\u6362\u884C\u65B9\u6CD5\uFF1A

{{methods}}`,
        configPathError:
          "\u65E0\u6CD5\u786E\u5B9A {{terminalName}} \u5728 Windows \u4E0A\u7684\u914D\u7F6E\u8DEF\u5F84\uFF1A\u672A\u8BBE\u7F6E APPDATA \u73AF\u5883\u53D8\u91CF\u3002",
        invalidJsonArray: `{{terminalName}} keybindings.json \u5B58\u5728\u4F46\u4E0D\u662F\u6709\u6548\u7684 JSON \u6570\u7EC4\u3002\u8BF7\u624B\u52A8\u4FEE\u590D\u6587\u4EF6\u6216\u5220\u9664\u5B83\u4EE5\u5141\u8BB8\u81EA\u52A8\u914D\u7F6E\u3002
\u6587\u4EF6\uFF1A{{filePath}}`,
        parseError: `\u89E3\u6790 {{terminalName}} keybindings.json \u5931\u8D25\u3002\u6587\u4EF6\u5305\u542B\u65E0\u6548\u7684 JSON\u3002
\u8BF7\u624B\u52A8\u4FEE\u590D\u6587\u4EF6\u6216\u5220\u9664\u5B83\u4EE5\u5141\u8BB8\u81EA\u52A8\u914D\u7F6E\u3002
\u6587\u4EF6\uFF1A{{filePath}}
\u9519\u8BEF\uFF1A{{error}}`,
        alreadyEnabled: `Shift+Enter \u5FEB\u6377\u6362\u884C\u529F\u80FD\u5DF2\u542F\u7528
\u5982\u9700\u8C03\u6574\u6362\u884C\u529F\u80FD\u7684\u5FEB\u6377\u952E\u914D\u7F6E\uFF0C\u8BF7\u624B\u52A8\u4FEE\u6539\uFF1A{{filePath}}`,
        success: `\u5DF2\u6DFB\u52A0 Shift+Enter \u5FEB\u6377\u952E\u5230 {{terminalName}}\u3002
\u5DF2\u4FEE\u6539\uFF1A{{filePath}}`,
        alreadyConfigured: "{{terminalName}} \u5FEB\u6377\u952E\u5DF2\u914D\u7F6E\u3002",
        configError: `\u914D\u7F6E {{terminalName}} \u5931\u8D25\u3002
\u6587\u4EF6\uFF1A{{filePath}}
\u9519\u8BEF\uFF1A{{error}}`,
        terminalNotSupported: '\u7EC8\u7AEF "{{terminal}}" \u6682\u4E0D\u652F\u6301\u3002',
      },
      userQuestionDialog: {
        title: "\u8BF7\u56DE\u7B54\u4EE5\u4E0B\u95EE\u9898",
        navigateQuestions: "\u5207\u6362\u95EE\u9898",
        enterCustomAnswer: "\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u7B54\u6848",
        currentAnswer: "\u5F53\u524D\u7B54\u6848",
        noAnswer: "\u672A\u56DE\u7B54",
        instructions: "Enter \u9009\u62E9 \xB7 Tab/\u65B9\u5411\u952E \u5BFC\u822A \xB7 Esc \u53D6\u6D88",
        multiSelectHint: "\u591A\u9009\u9898\uFF1A\u53EF\u4EE5\u9009\u62E9\u591A\u4E2A\u9009\u9879",
        singleSelectHint: "\u5355\u9009\u9898\uFF1A\u53EA\u80FD\u9009\u62E9\u4E00\u4E2A\u9009\u9879",
        readyToSubmit: "\u2713 \u6240\u6709\u95EE\u9898\u5DF2\u56DE\u7B54\uFF0C\u6309 Ctrl+Enter \u63D0\u4EA4",
        pressEnterToSubmit: "\u6309 Enter \u63D0\u4EA4\uFF0CESC \u53D6\u6D88",
        typeOptionLabel: "\u8F93\u5165\u81EA\u5B9A\u4E49\u5185\u5BB9",
        typeOptionDescription: "\u63D0\u4F9B\u60A8\u81EA\u5DF1\u7684\u7B54\u6848",
        submitTab: "\u63D0\u4EA4",
        reviewTitle: "\u5BA1\u6838\u60A8\u7684\u7B54\u6848",
        readyToSubmitPrompt: "\u51C6\u5907\u63D0\u4EA4\u60A8\u7684\u7B54\u6848\u5417\uFF1F",
        submitAnswers: "\u63D0\u4EA4\u7B54\u6848",
        cancel: "\u53D6\u6D88",
        reviewInstructions: "Enter \u9009\u62E9 \xB7 Tab/\u65B9\u5411\u952E \u5BFC\u822A \xB7 Esc \u53D6\u6D88",
        navigationHint: "\u2190 \u2192 \u5207\u6362\u95EE\u9898",
        submitHint: "\u2192 \u6309 Enter \u6216 \u2192 \u63D0\u4EA4",
      },
      workspaceTrust: {
        title: "\u60A8\u4FE1\u4EFB\u6B64\u5DE5\u4F5C\u533A\u5417\uFF1F",
        subtitle:
          "\u4FE1\u4EFB\u5DE5\u4F5C\u533A\u5C06\u5141\u8BB8 iFlow \u6267\u884C\u5DE5\u4F5C\u533A\u914D\u7F6E\u7684 hooks \u548C\u5176\u4ED6\u654F\u611F\u64CD\u4F5C\u3002",
        workspacePath: "\u5DE5\u4F5C\u533A\u8DEF\u5F84\uFF1A",
        detectedHooks: "\u68C0\u6D4B\u5230\u4EE5\u4E0B hooks\uFF1A",
        moreHooks: "... \u8FD8\u6709 {{count}} \u4E2A hooks",
        warning:
          "\u26A0\uFE0F  \u53EA\u4FE1\u4EFB\u60A8\u4E86\u89E3\u6765\u6E90\u7684\u5DE5\u4F5C\u533A\u3002\u6076\u610F hooks \u53EF\u80FD\u4F1A\u6267\u884C\u5371\u9669\u64CD\u4F5C\u3002",
        hint: "\u4F7F\u7528 \u2191\u2193 \u9009\u62E9\uFF0CEnter \u786E\u8BA4\uFF0CEsc \u53D6\u6D88",
        trustCurrentFolder: "\u4FE1\u4EFB\u5F53\u524D\u6587\u4EF6\u5939",
        trustCurrentFolderDesc: "\u4FE1\u4EFB\u6B64\u6587\u4EF6\u5939\u53CA\u5176\u6240\u6709\u5B50\u6587\u4EF6\u5939",
        trustParentFolder: "\u4FE1\u4EFB\u7236\u6587\u4EF6\u5939",
        trustParentFolderDesc: "\u4FE1\u4EFB\u7236\u6587\u4EF6\u5939\u53CA\u5176\u6240\u6709\u5B50\u6587\u4EF6\u5939",
        doNotTrust: "\u4E0D\u4FE1\u4EFB",
        doNotTrustDesc: "\u7981\u7528\u5DE5\u4F5C\u533A\u7EA7 hooks \u548C\u654F\u611F\u529F\u80FD",
        restarting: "\u6B63\u5728\u91CD\u542F\u5E94\u7528\u4EE5\u5E94\u7528\u4FE1\u4EFB\u8BBE\u7F6E...",
        hooksDisabled:
          "\u26A0\uFE0F  \u5DE5\u4F5C\u533A hooks \u5DF2\u7981\u7528\uFF1A\u5DE5\u4F5C\u533A\u672A\u88AB\u4FE1\u4EFB",
        enableHooksInstruction:
          "   \u5982\u9700\u542F\u7528 hooks\uFF0C\u8BF7\u5728 UI \u4E2D\u4FE1\u4EFB\u6B64\u5DE5\u4F5C\u533A\u6216\u8BBE\u7F6E IFLOW_TRUST_WORKSPACE=1",
        untrustedWarning:
          "\u26A0\uFE0F  \u8B66\u544A\uFF1A\u5DE5\u4F5C\u533A\u672A\u88AB\u4FE1\u4EFB\uFF0C\u5DF2\u7981\u7528\u5DE5\u4F5C\u533A\u7EA7 hooks",
        untrustedWorkspacePath: "   \u5DE5\u4F5C\u533A\u8DEF\u5F84\uFF1A{{path}}",
        trustInstructions:
          "   \u5982\u9700\u542F\u7528 hooks\uFF0C\u8BF7\u5728\u8BBE\u7F6E\u4E2D\u4FE1\u4EFB\u6B64\u5DE5\u4F5C\u533A",
        checkTrustFailed: "\u68C0\u67E5\u5DE5\u4F5C\u533A\u4FE1\u4EFB\u5931\u8D25\uFF1A{{error}}",
        dangerousHooksWarning:
          "\u26A0\uFE0F  \u8B66\u544A\uFF1A\u68C0\u6D4B\u5230\u5371\u9669\u7684\u5DE5\u4F5C\u533A hooks\uFF1A",
        dangerousHooksList: "   - {{hook}}",
        autoExecuteWarning: "   \u8FD9\u4E9B hooks \u5C06\u5728\u542F\u52A8\u65F6\u81EA\u52A8\u6267\u884C\u3002",
        exitIfUntrusted:
          "   \u5982\u679C\u60A8\u4E0D\u4FE1\u4EFB\u6B64\u9879\u76EE\uFF0C\u8BF7\u7ACB\u5373\u9000\u51FA",
        reviewSettings: "   \u5E76\u68C0\u67E5 .iflow/settings.json",
        checkHooksTrustFailed: "\u68C0\u67E5\u5DE5\u4F5C\u533A hooks \u4FE1\u4EFB\u5931\u8D25\uFF1A{{error}}",
      },
      nonInteractive: {
        clearNotSupported: "/clear \u547D\u4EE4\u5728\u975E\u4EA4\u4E92\u5F0F\u6A21\u5F0F\u4E0B\u4E0D\u652F\u6301",
        vimRequiresInteractive: "/vim \u547D\u4EE4\u9700\u8981\u4EA4\u4E92\u5F0F\u6A21\u5F0F",
        loadHistoryNotSupported: "load_history \u5728\u975E\u4EA4\u4E92\u5F0F\u6A21\u5F0F\u4E0B\u4E0D\u652F\u6301",
        unknownCommand: "\u672A\u77E5\u547D\u4EE4\uFF1A{{command}}",
        useHelpOrCommands: "\u4F7F\u7528 /help \u6216 /commands \u67E5\u770B\u53EF\u7528\u547D\u4EE4",
        commandRequiresInteractive: "/{{command}} \u547D\u4EE4\u9700\u8981\u4EA4\u4E92\u5F0F\u6A21\u5F0F",
        noActionDefined: "\u547D\u4EE4 /{{command}} \u6CA1\u6709\u5B9A\u4E49\u64CD\u4F5C",
        requiresInteractive: "/{{command}} \u9700\u8981\u4EA4\u4E92\u5F0F\u6A21\u5F0F",
        tryAlternatives: "\u5C1D\u8BD5\u8FD9\u4E9B\u66FF\u4EE3\u65B9\u6848\uFF1A{{alternatives}}",
        dialogNotSupported:
          "\u5BF9\u8BDD\u6846\u547D\u4EE4\u5728\u975E\u4EA4\u4E92\u5F0F\u6A21\u5F0F\u4E0B\u4E0D\u652F\u6301",
        exiting: "\u6B63\u5728\u9000\u51FA...",
        errorExecutingTool: "\u6267\u884C\u5DE5\u5177 {{toolName}} \u65F6\u51FA\u9519\uFF1A{{error}}",
        errorExecutingSlashCommand: "\u6267\u884C\u659C\u6760\u547D\u4EE4\u65F6\u51FA\u9519\uFF1A{{error}}",
        customFunctionNotSupported:
          "custom_function \u7C7B\u578B\u5728\u975E\u4EA4\u4E92\u5F0F\u6A21\u5F0F\u4E0B\u4E0D\u5B8C\u5168\u652F\u6301",
        shellConfirmationNotSupported:
          "Shell \u547D\u4EE4\u786E\u8BA4\u5728\u975E\u4EA4\u4E92\u5F0F\u6A21\u5F0F\u4E0B\u4E0D\u652F\u6301",
        commandsRequiringConfirmation: "\u9700\u8981\u786E\u8BA4\u7684\u547D\u4EE4\uFF1A{{commands}}",
        unhandledCommandResultType: "\u672A\u5904\u7406\u7684\u547D\u4EE4\u7ED3\u679C\u7C7B\u578B\uFF1A{{type}}",
      },
      systemNotification: {
        appName: "\u201CiFlow CLI\u201D \u901A\u77E5",
        taskCompleted: "\u4EFB\u52A1\u5DF2\u5B8C\u6210",
        taskCompletedWithPrompt: "\u4EFB\u52A1\u5DF2\u5B8C\u6210: {{prompt}}",
        close: "\u5173\u95ED",
      },
      farewellLetterDisplay: {
        title: "\u81F4 iFlow CLI \u7684\u5F00\u53D1\u8005\u670B\u53CB\u4EEC\uFF1A",
        greeting: "\u2764\uFE0F \u89C1\u4FE1\u5982\u9762\u3002",
        announcement:
          "\u5F88\u9057\u61BE\u8981\u5411\u5927\u5BB6\u5BA3\u5E03\uFF1AiFlow CLI \u5373\u5C06\u505C\u6B62\u5728 Coding \u573A\u666F\u7684\u670D\u52A1\u3002",
        journey:
          "\u4ECE\u7B2C\u4E00\u4E2A\u7248\u672C\u53D1\u5E03\u81F3\u4ECA\uFF0C\u6211\u4EEC\u575A\u6301\u9762\u5411\u4E2A\u4EBA\u7528\u6237\u63D0\u4F9B\u5B8C\u5168\u514D\u8D39\u7684\u670D\u52A1\uFF0C\u5E0C\u671B\u5C06 AI \u7EA2\u5229\u5E26\u7ED9\u6BCF\u4F4D\u5F00\u53D1\u8005\uFF0C\u5E76\u80FD\u591F\u5728\u901A\u5F80AGI\u7684\u8DEF\u4E0A\u4F5C\u51FA\u4E00\u4E9B\u5C0F\u5C0F\u7684\u8D21\u732E\u3002",
        growth:
          "\u800C\u8FD9\u6BB5\u8DEF\uFF0C\u4E5F\u56E0\u4E3A\u6709\u5927\u5BB6\u7684\u5947\u601D\u5999\u601D\u4E0E\u5305\u5BB9\u63A5\u7EB3\uFF0C\u8D4B\u4E88\u4E86\u8FD9\u4E2A\u5C0F\u5C0F\u5B9E\u9A8C\u9879\u76EE\u84EC\u52C3\u7684\u751F\u547D\u529B\uFF01",
        shutdownPrefix:
          "\u4E3A\u4E86\u63D0\u4F9B\u66F4\u4F18\u8D28\u3001\u66F4\u7EDF\u4E00\u7684\u5DE5\u5177\u4F53\u9A8C\uFF0C\u6211\u4EEC\u5C06\u5BF9\u65D7\u4E0B AI \u7F16\u7A0B\u8D44\u6E90\u8FDB\u884C\u6DF1\u5EA6\u6574\u5408\u3002",
        shutdownBold1: "iFlow CLI \u4EA7\u54C1\u5C06\u4E8E",
        shutdownDate1: "2026 \u5E74 3 \u6708 20 \u65E5",
        shutdownBold2: "\u8D77\u505C\u6B62\u7EF4\u62A4\uFF0C\u5E76\u4E8E",
        shutdownDate2: "4 \u6708 17 \u65E5",
        shutdownBold3:
          "\u6B63\u5F0F\u5173\u95ED\uFF0CiFlow API \u670D\u52A1\u3001\u6A21\u578B\u5E93\u5C06\u540C\u6B65\u5173\u505C\uFF0C",
        shutdownSuffix:
          "\u8BF7\u76F8\u5173\u5F00\u53D1\u8005\u63D0\u524D\u505A\u597D\u89C4\u5212\uFF0C\u907F\u514D\u4E1A\u52A1\u4E2D\u65AD\u3002",
        migrationInvitePrefix: "\u4E3A\u5E2E\u52A9\u5927\u5BB6\u5E73\u7A33\u8FC7\u6E21\uFF0C",
        migrationInviteBold: "\u8BDA\u9080\u5927\u5BB6\u8FC1\u79FB\u81F3 Qoder \u5E73\u53F0",
        migrationInviteSuffix:
          "\u3002Qoder \u662F\u963F\u91CC\u63A8\u51FA\u7684\u6700\u5F3A\u667A\u80FD\u4F53\u7F16\u7A0B\u5E73\u53F0\uFF0C\u96C6\u6210\u5168\u7403\u9876\u5C16\u7F16\u7A0B\u6A21\u578B\uFF0C\u62E5\u6709 IDE/CLI/JetBrains \u63D2\u4EF6/\u684C\u9762\u667A\u80FD\u4F53\u7B49\u591A\u79CD\u4EA7\u54C1\u5F62\u6001\u3002",
        migrationBenefitPrefix: "\u63A5\u529B\u4F19\u4F34 ",
        migrationBenefitQoder: "Qoder",
        migrationBenefitMid: " \u5C06\u4E3A iFlow CLI \u7684\u670B\u53CB\u4EEC\u51C6\u5907 \u{1F381} ",
        migrationBenefitBold: "300 credits \u7684\u8FC1\u79FB\u798F\u5229",
        migrationBenefitSuffix: "\uFF0C\u6B22\u8FCE\u5927\u5BB6\u6CE8\u518C\u4F53\u9A8C\u3002",
        migrationClaimBoldLabel: "\u2705 \u9886\u53D6\u65B9\u5F0F\uFF1A",
        migrationClaimPre: "\u8BF7\u70B9\u51FB ",
        migrationClaimLink: "\u767B\u8BB0\u94FE\u63A5",
        migrationClaimPost: " \u63D0\u4EA4 Qoder \u6CE8\u518C\u90AE\u7BB1\uFF0C\u6211\u4EEC\u5C06\u5728 ",
        migrationClaimT2: "T+2",
        migrationClaimSuffix:
          " \u4E2A\u5DE5\u4F5C\u65E5\u5185\u5BA1\u6838\u53D1\u653E\u81F3\u767B\u8BB0\u90AE\u7BB1\u3002",
        migrationGuide: "\u9644 >",
        migrationGuideLink: "iFlow CLI \u2192 Qoder CLI \u8FC1\u79FB\u6307\u5357",
        agentFuture:
          "\u63A5\u4E0B\u6765\uFF0C\u5FC3\u6D41\u56E2\u961F\u5C06\u805A\u7126Agent\u573A\u666F\uFF0C\u76F8\u4FE1\u5F88\u5FEB\uFF0C\u6211\u4EEC\u5C31\u4F1A\u4EE5\u5168\u65B0\u7684\u4EA7\u54C1\u5F62\u6001\u548C\u5927\u5BB6\u518D\u6B21\u89C1\u9762\uFF0C\u656C\u8BF7\u671F\u5F85 :)",
        communityPrefix: "\u540C\u65F6\uFF0C\u{1F4EE} ",
        communityLink: "VibeX\u8BBA\u575B",
        communitySuffix:
          " \u5C06\u4EE5\u5168\u65B0\u9762\u8C8C\u6301\u7EED\u966A\u4F34\u5927\u5BB6\u3002\u5927\u5BB6\u4EB2\u624B\u6D47\u704C\u7684\u793E\u533A\u751F\u751F\u4E0D\u606F\uFF0C\u8FD9\u91CC\u4F9D\u7136\u7075\u611F\u5E38\u5728\u3002\u6B22\u8FCE\u5404\u4F4D\u597D\u670B\u53CB\u5728\u793E\u533A\u7545\u6240\u6B32\u8A00\uFF0C\u5206\u4EAB\u7ECF\u9A8C~",
        closing:
          "\u611F\u8C22\u4F60\u628A iFlow CLI \u7559\u5728\u7EC8\u7AEF\uFF0C\u6211\u4EEC\u4F1A\u6C38\u8FDC\u8BB0\u5F97\uFF0C\u5728\u901A\u5F80 AGI \u7684\u8DEF\u4E0A\uFF0C\u66FE\u4E0E\u4F60\u5E76\u80A9\u540C\u884C\u2764\uFE0F",
        signatureName: "iFlow CLI \u56E2\u961F",
        signatureDate: "2026\u5E743\u670820\u65E5",
        continueInstructions: "\u6309\u56DE\u8F66\u6216\u7A7A\u683C\u7EE7\u7EED \u2192",
      },
      offlineOutput: {
        message:
          "\u63D0\u793A\uFF1A\u6211\u4EEC\u5DF2\u505C\u6B62\u5BF9 /output-style \u547D\u4EE4\u7684\u652F\u6301\u3002\u5EFA\u8BAE\u60A8\u901A\u8FC7\u4FEE\u6539 IFLOW.md \u6765\u5B9A\u4E49\u8F93\u51FA\u6837\u5F0F\uFF0C\u4EE5\u83B7\u5F97\u66F4\u7075\u6D3B\u7684\u914D\u7F6E\u65B9\u5F0F\u3002",
      },
    };
  });
import * as cte from "fs";
import * as K_t from "path";
function Tbo() {
  if (process.env.VITEST !== "true")
    try {
      let t = K_t.join(Tn(), "settings.json");
      if (cte.existsSync(t)) {
        let r = JSON.parse(cte.readFileSync(t, "utf-8"));
        if (r.language) return r.language;
      }
      let e = K_t.join(process.cwd(), ui(), "settings.json");
      if (cte.existsSync(e)) {
        let r = JSON.parse(cte.readFileSync(e, "utf-8"));
        if (r.language) return r.language;
      }
    } catch (t) {
      console.debug("Failed to read language from config file:", t);
    }
}
var dNr,
  Dbo,
  bi = j(() => {
    "use strict";
    BOr();
    Hn();
    dNr = Se(aNr(), 1);
    Pa();
    cNr();
    mNr();
    Dbo = Tbo();
    I.use(dNr.default)
      .use(TOe)
      .init({
        lng: Dbo,
        fallbackLng: "en",
        debug: !!process.env.DEBUG,
        interpolation: { escapeValue: !1 },
        pluralSeparator: "_",
        contextSeparator: "_",
        resources: { en: { translation: uNr }, zh: { translation: lNr } },
      });
  });
import fNr from "node:fs";
function Ibo() {
  try {
    return (fNr.statSync("/.dockerenv"), !0);
  } catch {
    return !1;
  }
}
function Rbo() {
  try {
    return fNr.readFileSync("/proc/self/cgroup", "utf8").includes("docker");
  } catch {
    return !1;
  }
}
function X_t() {
  return (J_t === void 0 && (J_t = Ibo() || Rbo()), J_t);
}
var J_t,
  pNr = j(() => {});
import kbo from "node:fs";
function lte() {
  return (Z_t === void 0 && (Z_t = Obo() || X_t()), Z_t);
}
var Z_t,
  Obo,
  eEt = j(() => {
    pNr();
    Obo = () => {
      try {
        return (kbo.statSync("/run/.containerenv"), !0);
      } catch {
        return !1;
      }
    };
  });
import gNr from "node:process";
import Nbo from "node:os";
import Pbo from "node:fs";
var hNr,
  AB,
  tEt = j(() => {
    eEt();
    ((hNr = () => {
      if (gNr.platform !== "linux") return !1;
      if (Nbo.release().toLowerCase().includes("microsoft")) return !lte();
      try {
        return Pbo.readFileSync("/proc/version", "utf8").toLowerCase().includes("microsoft") ? !lte() : !1;
      } catch {
        return !1;
      }
    }),
      (AB = gNr.env.__IS_WSL_TEST__ ? hNr : hNr()));
  });
import bNr from "node:process";
import ANr, { constants as Bbo } from "node:fs/promises";
var Lbo,
  Mbo,
  rEt,
  yNr = j(() => {
    tEt();
    tEt();
    ((Lbo = (() => {
      let t = "/mnt/",
        e;
      return async function () {
        if (e) return e;
        let r = "/etc/wsl.conf",
          n = !1;
        try {
          (await ANr.access(r, Bbo.F_OK), (n = !0));
        } catch {}
        if (!n) return t;
        let o = await ANr.readFile(r, { encoding: "utf8" }),
          s = /(?<!#.*)root\s*=\s*(?<mountPoint>.*)/g.exec(o);
        return s ? ((e = s.groups.mountPoint.trim()), (e = e.endsWith("/") ? e : `${e}/`), e) : t;
      };
    })()),
      (Mbo = async () => `${await Lbo()}c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe`),
      (rEt = async () =>
        AB
          ? Mbo()
          : `${bNr.env.SYSTEMROOT || bNr.env.windir || String.raw`C:\Windows`}\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`));
  });
function yB(t, e, r) {
  let n = (o) => Object.defineProperty(t, e, { value: o, enumerable: !0, writable: !0 });
  return (
    Object.defineProperty(t, e, {
      configurable: !0,
      enumerable: !0,
      get() {
        let o = r();
        return (n(o), o);
      },
      set(o) {
        n(o);
      },
    }),
    t
  );
}
var _Nr = j(() => {});
import { promisify as Fbo } from "node:util";
import Ubo from "node:process";
import { execFile as $bo } from "node:child_process";
async function nEt() {
  if (Ubo.platform !== "darwin") throw new Error("macOS only");
  let { stdout: t } = await jbo("defaults", [
      "read",
      "com.apple.LaunchServices/com.apple.launchservices.secure",
      "LSHandlers",
    ]),
    r =
      /LSHandlerRoleAll = "(?!-)(?<id>[^"]+?)";\s+?LSHandlerURLScheme = (?:http|https);/.exec(t)?.groups.id ??
      "com.apple.Safari";
  return r === "com.apple.safari" ? "com.apple.Safari" : r;
}
var jbo,
  ENr = j(() => {
    jbo = Fbo($bo);
  });
import Qbo from "node:process";
import { promisify as Gbo } from "node:util";
import { execFile as qbo, execFileSync as Ixu } from "node:child_process";
async function vNr(t, { humanReadableOutput: e = !0, signal: r } = {}) {
  if (Qbo.platform !== "darwin") throw new Error("macOS only");
  let n = e ? [] : ["-ss"],
    o = {};
  r && (o.signal = r);
  let { stdout: s } = await Hbo("osascript", ["-e", t, n], o);
  return s.trim();
}
var Hbo,
  CNr = j(() => {
    Hbo = Gbo(qbo);
  });
async function iEt(t) {
  return vNr(`tell application "Finder" to set app_path to application file id "${t}" as string
tell application "System Events" to get value of property list item "CFBundleName" of property list file (app_path & ":Contents:Info.plist")`);
}
var SNr = j(() => {
  CNr();
});
import { promisify as Vbo } from "node:util";
import { execFile as Wbo } from "node:child_process";
async function oEt(t = zbo) {
  let { stdout: e } = await t("reg", [
      "QUERY",
      " HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\Shell\\Associations\\UrlAssociations\\http\\UserChoice",
      "/v",
      "ProgId",
    ]),
    r = /ProgId\s*REG_SZ\s*(?<id>\S+)/.exec(e);
  if (!r) throw new ROe(`Cannot find Windows browser in stdout: ${JSON.stringify(e)}`);
  let { id: n } = r.groups,
    o = wNr[n];
  if (!o) throw new ROe(`Unknown browser ID: ${n}`);
  return o;
}
var zbo,
  wNr,
  Bxu,
  ROe,
  xNr = j(() => {
    ((zbo = Vbo(Wbo)),
      (wNr = {
        MSEdgeHTM: { name: "Edge", id: "com.microsoft.edge" },
        MSEdgeBHTML: { name: "Edge Beta", id: "com.microsoft.edge.beta" },
        MSEdgeDHTML: { name: "Edge Dev", id: "com.microsoft.edge.dev" },
        AppXq0fevzme2pys62n3e0fbqa7peapykr8v: { name: "Edge", id: "com.microsoft.edge.old" },
        ChromeHTML: { name: "Chrome", id: "com.google.chrome" },
        ChromeBHTML: { name: "Chrome Beta", id: "com.google.chrome.beta" },
        ChromeDHTML: { name: "Chrome Dev", id: "com.google.chrome.dev" },
        ChromiumHTM: { name: "Chromium", id: "org.chromium.Chromium" },
        BraveHTML: { name: "Brave", id: "com.brave.Browser" },
        BraveBHTML: { name: "Brave Beta", id: "com.brave.Browser.beta" },
        BraveDHTML: { name: "Brave Dev", id: "com.brave.Browser.dev" },
        BraveSSHTM: { name: "Brave Nightly", id: "com.brave.Browser.nightly" },
        FirefoxURL: { name: "Firefox", id: "org.mozilla.firefox" },
        OperaStable: { name: "Opera", id: "com.operasoftware.Opera" },
        VivaldiHTM: { name: "Vivaldi", id: "com.vivaldi.Vivaldi" },
        "IE.HTTP": { name: "Internet Explorer", id: "com.microsoft.ie" },
      }),
      (Bxu = new Map(Object.entries(wNr))),
      (ROe = class extends Error {}));
  });
import { promisify as Ybo } from "node:util";
import sEt from "node:process";
import { execFile as Kbo } from "node:child_process";
async function aEt() {
  if (sEt.platform === "darwin") {
    let t = await nEt();
    return { name: await iEt(t), id: t };
  }
  if (sEt.platform === "linux") {
    let { stdout: t } = await Jbo("xdg-mime", ["query", "default", "x-scheme-handler/http"]),
      e = t.trim();
    return { name: Xbo(e.replace(/.desktop$/, "").replace("-", " ")), id: e };
  }
  if (sEt.platform === "win32") return oEt();
  throw new Error("Only macOS, Linux, and Windows are supported");
}
var Jbo,
  Xbo,
  TNr = j(() => {
    ENr();
    SNr();
    xNr();
    ((Jbo = Ybo(Kbo)), (Xbo = (t) => t.toLowerCase().replaceAll(/(?:^|\s|-)\S/g, (e) => e.toUpperCase())));
  });
var LNr = {};
Wi(LNr, { apps: () => _B, default: () => bR, openApp: () => sAo });
import ONr from "node:process";
import { Buffer as NNr } from "node:buffer";
import PNr from "node:path";
import { fileURLToPath as Zbo } from "node:url";
import { promisify as eAo } from "node:util";
import BNr from "node:child_process";
import tAo, { constants as rAo } from "node:fs/promises";
async function iAo() {
  let t = await rEt(),
    e = String.raw`(Get-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\Shell\Associations\UrlAssociations\http\UserChoice").ProgId`,
    r = NNr.from(e, "utf16le").toString("base64"),
    { stdout: n } = await nAo(
      t,
      ["-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-EncodedCommand", r],
      { encoding: "utf8" },
    ),
    o = n.trim(),
    s = {
      ChromeHTML: "com.google.chrome",
      BraveHTML: "com.brave.Browser",
      MSEdgeHTM: "com.microsoft.edge",
      FirefoxURL: "org.mozilla.firefox",
    };
  return s[o] ? { id: s[o] } : {};
}
function kNr(t) {
  if (typeof t == "string" || Array.isArray(t)) return t;
  let { [INr]: e } = t;
  if (!e) throw new Error(`${INr} is not supported`);
  return e;
}
function kOe({ [mte]: t }, { wsl: e }) {
  if (e && AB) return kNr(e);
  if (!t) throw new Error(`${mte} is not supported`);
  return kNr(t);
}
var nAo,
  uEt,
  DNr,
  mte,
  INr,
  RNr,
  L3e,
  oAo,
  sAo,
  _B,
  bR,
  dte = j(() => {
    yNr();
    _Nr();
    TNr();
    eEt();
    ((nAo = eAo(BNr.execFile)),
      (uEt = PNr.dirname(Zbo(import.meta.url))),
      (DNr = PNr.join(uEt, "xdg-open")),
      ({ platform: mte, arch: INr } = ONr));
    ((RNr = async (t, e) => {
      let r;
      for (let n of t)
        try {
          return await e(n);
        } catch (o) {
          r = o;
        }
      throw r;
    }),
      (L3e = async (t) => {
        if (((t = { wait: !1, background: !1, newInstance: !1, allowNonzeroExitCode: !1, ...t }), Array.isArray(t.app)))
          return RNr(t.app, (u) => L3e({ ...t, app: u }));
        let { name: e, arguments: r = [] } = t.app ?? {};
        if (((r = [...r]), Array.isArray(e))) return RNr(e, (u) => L3e({ ...t, app: { name: u, arguments: r } }));
        if (e === "browser" || e === "browserPrivate") {
          let u = {
              "com.google.chrome": "chrome",
              "google-chrome.desktop": "chrome",
              "com.brave.Browser": "brave",
              "org.mozilla.firefox": "firefox",
              "firefox.desktop": "firefox",
              "com.microsoft.msedge": "edge",
              "com.microsoft.edge": "edge",
              "com.microsoft.edgemac": "edge",
              "microsoft-edge.desktop": "edge",
            },
            c = { chrome: "--incognito", brave: "--incognito", firefox: "--private-window", edge: "--inPrivate" },
            m = AB ? await iAo() : await aEt();
          if (m.id in u) {
            let d = u[m.id];
            return (e === "browserPrivate" && r.push(c[d]), L3e({ ...t, app: { name: _B[d], arguments: r } }));
          }
          throw new Error(`${m.name} is not supported as a default browser`);
        }
        let n,
          o = [],
          s = {};
        if (mte === "darwin")
          ((n = "open"),
            t.wait && o.push("--wait-apps"),
            t.background && o.push("--background"),
            t.newInstance && o.push("--new"),
            e && o.push("-a", e));
        else if (mte === "win32" || (AB && !lte() && !e)) {
          ((n = await rEt()),
            o.push("-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-EncodedCommand"),
            AB || (s.windowsVerbatimArguments = !0));
          let u = ["Start"];
          (t.wait && u.push("-Wait"),
            e ? (u.push(`"\`"${e}\`""`), t.target && r.push(t.target)) : t.target && u.push(`"${t.target}"`),
            r.length > 0 && ((r = r.map((c) => `"\`"${c}\`""`)), u.push("-ArgumentList", r.join(","))),
            (t.target = NNr.from(u.join(" "), "utf16le").toString("base64")));
        } else {
          if (e) n = e;
          else {
            let u = !uEt || uEt === "/",
              c = !1;
            try {
              (await tAo.access(DNr, rAo.X_OK), (c = !0));
            } catch {}
            n = (ONr.versions.electron ?? (mte === "android" || u || !c)) ? "xdg-open" : DNr;
          }
          (r.length > 0 && o.push(...r), t.wait || ((s.stdio = "ignore"), (s.detached = !0)));
        }
        (mte === "darwin" && r.length > 0 && o.push("--args", ...r), t.target && o.push(t.target));
        let a = BNr.spawn(n, o, s);
        return t.wait
          ? new Promise((u, c) => {
              (a.once("error", c),
                a.once("close", (m) => {
                  if (!t.allowNonzeroExitCode && m > 0) {
                    c(new Error(`Exited with code ${m}`));
                    return;
                  }
                  u(a);
                }));
            })
          : (a.unref(), a);
      }),
      (oAo = (t, e) => {
        if (typeof t != "string") throw new TypeError("Expected a `target`");
        return L3e({ ...e, target: t });
      }),
      (sAo = (t, e) => {
        if (typeof t != "string" && !Array.isArray(t)) throw new TypeError("Expected a valid `name`");
        let { arguments: r = [] } = e ?? {};
        if (r != null && !Array.isArray(r)) throw new TypeError("Expected `appArguments` as Array type");
        return L3e({ ...e, app: { name: t, arguments: r } });
      }));
    _B = {};
    yB(_B, "chrome", () =>
      kOe(
        { darwin: "google chrome", win32: "chrome", linux: ["google-chrome", "google-chrome-stable", "chromium"] },
        {
          wsl: {
            ia32: "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
            x64: [
              "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe",
              "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
            ],
          },
        },
      ),
    );
    yB(_B, "brave", () =>
      kOe(
        { darwin: "brave browser", win32: "brave", linux: ["brave-browser", "brave"] },
        {
          wsl: {
            ia32: "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe",
            x64: [
              "/mnt/c/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe",
              "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe",
            ],
          },
        },
      ),
    );
    yB(_B, "firefox", () =>
      kOe(
        { darwin: "firefox", win32: String.raw`C:\Program Files\Mozilla Firefox\firefox.exe`, linux: "firefox" },
        { wsl: "/mnt/c/Program Files/Mozilla Firefox/firefox.exe" },
      ),
    );
    yB(_B, "edge", () =>
      kOe(
        { darwin: "microsoft edge", win32: "msedge", linux: ["microsoft-edge", "microsoft-edge-dev"] },
        { wsl: "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" },
      ),
    );
    yB(_B, "browser", () => "browser");
    yB(_B, "browserPrivate", () => "browserPrivate");
    bR = oAo;
  });
function fx() {
  let t = ["www-browser"],
    e = process.env.BROWSER;
  if ((e && t.includes(e)) || process.env.CI || process.env.DEBIAN_FRONTEND === "noninteractive") return !1;
  let r = !!process.env.SSH_CONNECTION;
  return !(
    (process.platform === "linux" && !["DISPLAY", "WAYLAND_DISPLAY", "MIR_SOCKET"].some((s) => !!process.env[s])) ||
    (r && process.platform !== "linux")
  );
}
async function BC(t) {
  try {
    let { default: e } = await Promise.resolve().then(() => (dte(), LNr)),
      r = await e(t);
    if (
      await new Promise((o) => {
        (r.on("spawn", () => o(!0)), r.on("error", () => o(!1)));
      })
    )
      return !0;
  } catch {}
  if (process.platform === "win32")
    try {
      let r = (await import("node:child_process")).spawn("rundll32.exe", ["url.dll,FileProtocolHandler", t], {
        stdio: "ignore",
        detached: !0,
      });
      return (
        r.unref(),
        await new Promise((n) => {
          (r.on("spawn", () => n(!0)), r.on("error", () => n(!1)));
        })
      );
    } catch {}
  return !1;
}
var M3e = j(() => {
  "use strict";
});
import MNr from "node:path";
import { promises as IG, readFileSync as aAo } from "node:fs";
var OOe,
  FNr = j(() => {
    "use strict";
    T3e();
    OOe = class {
      getIFlowAccountsCachePath() {
        return wp.getIFlowAccountsPath();
      }
      parseAndValidateAccounts(e) {
        let r = { active: null, old: [] };
        if (!e.trim()) return r;
        let n = JSON.parse(e);
        if (typeof n != "object" || n === null)
          return (console.log("Invalid accounts file schema, starting fresh."), r);
        let { active: o, old: s } = n;
        return (o == null || typeof o == "string") &&
          (s === void 0 || (Array.isArray(s) && s.every((u) => typeof u == "string")))
          ? { active: n.active ?? null, old: n.old ?? [] }
          : (console.log("Invalid accounts file schema, starting fresh."), r);
      }
      readAccountsSync(e) {
        let r = { active: null, old: [] };
        try {
          let n = aAo(e, "utf-8");
          return this.parseAndValidateAccounts(n);
        } catch (n) {
          return (
            (n instanceof Error && "code" in n && n.code === "ENOENT") ||
              console.log("Error during sync read of accounts, starting fresh.", n),
            r
          );
        }
      }
      async readAccounts(e) {
        let r = { active: null, old: [] };
        try {
          let n = await IG.readFile(e, "utf-8");
          return this.parseAndValidateAccounts(n);
        } catch (n) {
          return (
            (n instanceof Error && "code" in n && n.code === "ENOENT") ||
              console.log("Could not parse accounts file, starting fresh.", n),
            r
          );
        }
      }
      async cacheIFlowAccount(e) {
        let r = this.getIFlowAccountsCachePath();
        await IG.mkdir(MNr.dirname(r), { recursive: !0 });
        let n = await this.readAccounts(r);
        (n.active && n.active !== e && (n.old.includes(n.active) || n.old.push(n.active)),
          (n.old = n.old.filter((o) => o !== e)),
          (n.active = e),
          await IG.writeFile(r, JSON.stringify(n, null, 2), "utf-8"));
      }
      getCachedIFlowAccount() {
        let e = this.getIFlowAccountsCachePath();
        return this.readAccountsSync(e).active;
      }
      getLifetimeIFlowAccounts() {
        let e = this.getIFlowAccountsCachePath(),
          r = this.readAccountsSync(e),
          n = new Set(r.old);
        return (r.active && n.add(r.active), n.size);
      }
      async clearCachedIFlowAccount() {
        let e = this.getIFlowAccountsCachePath(),
          r = await this.readAccounts(e);
        (r.active && (r.old.includes(r.active) || r.old.push(r.active), (r.active = null)),
          await IG.writeFile(e, JSON.stringify(r, null, 2), "utf-8"));
      }
      async cacheIFlowApiKey(e) {
        let r = this.getIFlowAccountsCachePath();
        await IG.mkdir(MNr.dirname(r), { recursive: !0 });
        let n = await this.readAccounts(r);
        ((n.iflowApiKey = e), await IG.writeFile(r, JSON.stringify(n, null, 2), "utf-8"));
      }
      getCachedIFlowApiKey() {
        let e = this.getIFlowAccountsCachePath();
        return this.readAccountsSync(e).iflowApiKey;
      }
      async clearCachedIFlowApiKey() {
        let e = this.getIFlowAccountsCachePath(),
          r = await this.readAccounts(e);
        (delete r.iflowApiKey, await IG.writeFile(e, JSON.stringify(r, null, 2), "utf-8"));
      }
    };
  });
var gEt = {};
Wi(gEt, {
  ServerOauth2Error: () => fte,
  checkAndRefreshToken: () => LOe,
  checkAndRefreshTokenOnStartup: () => MOe,
  clearCachedCredentialFile: () => RG,
  clearOauthClientCache: () => fEt,
  exchangeCodeForToken: () => hte,
  generateIFlowAuthUrl: () => $3e,
  getAvailablePort: () => mEt,
  getCachedApiKey: () => yR,
  getCachedOAuthToken: () => VNr,
  getOauthClient: () => kG,
  isIFlowOAuth2: () => pte,
  mergeUserInfoToCredentials: () => U3e,
  refreshAccessToken: () => hEt,
  resetOauthClientForTesting: () => HNr,
  restoreOauthClient: () => BOe,
  validateOAuthToken: () => POe,
});
import $Nr from "crypto";
import * as jNr from "http";
import * as QNr from "net";
import { promises as MC } from "node:fs";
import uAo from "node:path";
import cAo from "url";
async function mAo(t, e, r) {
  let n = new NOe.OAuth2Client({ clientId: LC, clientSecret: AR, transporterOptions: { proxy: e.getProxy() } });
  if (
    (n.on("tokens", async (u) => {
      await F3e(u);
    }),
    await dEt(n, t))
  ) {
    if (t === Kt.LOGIN_WITH_IFLOW) {
      if (!FC.getCachedIFlowApiKey())
        try {
          await qNr(n);
        } catch {}
    } else if (!FC.getCachedIFlowAccount())
      try {
        await GNr(n);
      } catch {}
    return n;
  }
  if (!fx()) throw new fte(I.t("oauth2.errors.serverOauth2Required"));
  let s = await dAo(n);
  return (
    r && r(s.authUrl),
    console.log(`

${I.t("oauth2.messages.codeAssistLoginRequired")}
${I.t("oauth2.messages.attemptingToOpenBrowser")}
${I.t("oauth2.messages.navigateToUrl")}

${s.authUrl}

`),
    (await BC(s.authUrl)) ||
      console.log(`${I.t("oauth2.errors.browserLaunchFailed")}
${I.t("oauth2.messages.navigateToUrl")}

${s.authUrl}
`),
    console.log(I.t("oauth2.messages.waitingForAuthentication")),
    await s.loginCompletePromise,
    n
  );
}
function POe(t, e) {
  let r = new NOe.OAuth2Client({ clientId: LC, clientSecret: AR, transporterOptions: { proxy: e.getProxy() } });
  return dEt(r, t);
}
async function BOe(t, e) {
  try {
    let r = new NOe.OAuth2Client({ clientId: LC, clientSecret: AR, transporterOptions: { proxy: e.getProxy() } });
    if (
      (r.on("tokens", async (o) => {
        await F3e(o);
      }),
      !(await dEt(r, t)))
    )
      return !1;
    if (t === Kt.LOGIN_WITH_IFLOW) {
      if (!FC.getCachedIFlowApiKey())
        try {
          await qNr(r);
        } catch {}
    } else if (!FC.getCachedIFlowAccount())
      try {
        await GNr(r);
      } catch {}
    return (EB.set(t, Promise.resolve(r)), !0);
  } catch {
    return !1;
  }
}
async function kG(t, e, r) {
  if (!EB.has(t)) {
    let n = mAo(t, e, r).catch((o) => {
      throw (o.message.includes("SERVER_OAUTH2_REQUIRED") && EB.delete(t), o);
    });
    EB.set(t, n);
  }
  return EB.get(t);
}
async function dAo(t) {
  let e = await mEt(),
    r = process.env.OAUTH_CALLBACK_HOST || "localhost",
    n = `http://localhost:${e}/oauth2callback`,
    o = $Nr.randomBytes(32).toString("hex"),
    s = "https://iflow.cn/oauth",
    a = `${encodeURIComponent(n)}&state=${o}`,
    u = `${s}?loginMethod=phone&type=phone&redirect=${a}&client_id=${LC}`,
    c = new Promise((m, d) => {
      let f = jNr.createServer(async (p, h) => {
        try {
          p.url.indexOf("/oauth2callback") === -1 &&
            (h.writeHead(cEt, { Location: UNr }),
            h.end(),
            d(new Error(I.t("oauth2.errors.unexpectedRequest", { url: p.url }))));
          let g = new cAo.URL(p.url, "http://localhost:3000").searchParams;
          if (g.get("error"))
            (h.writeHead(cEt, { Location: UNr }),
              h.end(),
              d(new Error(I.t("oauth2.errors.authenticationError", { error: g.get("error") }))));
          else if (g.get("state") !== o)
            (h.end("State mismatch. Possible CSRF attack"), d(new Error(I.t("oauth2.errors.stateMismatch"))));
          else if (g.get("code")) {
            let b = await fetch("https://iflow.cn/oauth/token", {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${Buffer.from(`${LC}:${AR}`).toString("base64")}`,
              },
              body: new URLSearchParams({
                grant_type: "authorization_code",
                code: g.get("code"),
                redirect_uri: n,
                client_id: LC,
                client_secret: AR,
              }).toString(),
            });
            if (!b.ok)
              throw new Error(I.t("oauth2.errors.tokenRequestFailed", { status: b.status, statusText: b.statusText }));
            let A = await b.json(),
              y = {
                access_token: A.access_token,
                refresh_token: A.refresh_token,
                expiry_date: Date.now() + A.expires_in * 1e3,
                token_type: A.token_type,
                scope: A.scope,
              };
            t.setCredentials(y);
            let E = await pEt(A.access_token);
            if (E.apiKey) {
              let v = U3e(y, E);
              (await FC.cacheIFlowApiKey(E.apiKey), await F3e(v));
            } else await F3e(y);
            (h.writeHead(cEt, { Location: lAo }), h.end(), m());
          } else d(new Error(I.t("oauth2.errors.noCodeFound")));
        } catch (g) {
          d(g);
        } finally {
          f.close();
        }
      });
      f.listen(e, r);
    });
  return { authUrl: u, loginCompletePromise: c };
}
function mEt() {
  return new Promise((t, e) => {
    let r = 0;
    try {
      let n = process.env.OAUTH_CALLBACK_PORT;
      if (n)
        return (
          (r = parseInt(n, 10)),
          isNaN(r) || r <= 0 || r > 65535 ? e(new Error(`Invalid value for OAUTH_CALLBACK_PORT: "${n}"`)) : t(r)
        );
      let o = QNr.createServer();
      (o.listen(0, () => {
        r = o.address().port;
      }),
        o.on("listening", () => {
          (o.close(), o.unref());
        }),
        o.on("error", (s) => e(s)),
        o.on("close", () => t(r)));
    } catch (n) {
      e(n);
    }
  });
}
async function dEt(t, e) {
  let r = [wp.getOAuthCredsPath()].filter((n) => !!n);
  for (let n of r)
    try {
      let o = await MC.readFile(n, "utf-8"),
        s = JSON.parse(o);
      if (e === Kt.LOGIN_WITH_IFLOW && s.expiry_date && Date.now() > s.expiry_date) {
        console.warn(I.t("oauth2.errors.tokenExpired"));
        continue;
      }
      t.setCredentials(s);
      let { token: a } = await t.getAccessToken();
      if (!a) continue;
      return (e !== Kt.LOGIN_WITH_IFLOW && (await t.getTokenInfo(a)), !0);
    } catch {}
  return !1;
}
async function F3e(t) {
  let e = wp.getOAuthCredsPath();
  await MC.mkdir(uAo.dirname(e), { recursive: !0 });
  let r = JSON.stringify(t, null, 2);
  await MC.writeFile(e, r, { mode: 384 });
}
function fEt() {
  EB.clear();
}
async function RG() {
  try {
    (await MC.rm(wp.getOAuthCredsPath(), { force: !0 }),
      await FC.clearCachedIFlowAccount(),
      await FC.clearCachedIFlowApiKey(),
      fEt());
  } catch (t) {
    console.error(I.t("oauth2.messages.failedToClearCredentials"), t);
  }
}
async function GNr(t) {
  try {
    let { token: e } = await t.getAccessToken();
    if (!e) return;
    let r = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", { headers: { Authorization: `Bearer ${e}` } });
    if (!r.ok) {
      console.error(I.t("oauth2.messages.failedToFetchUserInfo", { status: r.status, statusText: r.statusText }));
      return;
    }
    let n = await r.json();
    await FC.cacheIFlowAccount(n.email);
  } catch (e) {
    console.error(I.t("oauth2.messages.errorRetrievingUserInfo"), e);
  }
}
async function qNr(t) {
  try {
    let { token: e } = await t.getAccessToken();
    if (!e) return;
    let r = await pEt(e);
    if (r.apiKey) {
      await FC.cacheIFlowApiKey(r.apiKey);
      let n = wp.getOAuthCredsPath(),
        o = await MC.readFile(n, "utf-8"),
        s = JSON.parse(o),
        a = U3e(s, r);
      await MC.writeFile(n, JSON.stringify(a, null, 2), { mode: 384 });
    }
  } catch (e) {
    console.error(I.t("oauth2.messages.errorRetrievingIflowUserInfo"), e);
  }
}
function HNr() {
  EB.clear();
}
async function VNr() {
  try {
    let t = wp.getOAuthCredsPath(),
      e = await MC.readFile(t, "utf-8");
    return JSON.parse(e).access_token;
  } catch {
    return;
  }
}
async function yR() {
  let t = FC.getCachedIFlowApiKey();
  if (t) return t;
  try {
    let e = wp.getOAuthCredsPath(),
      r = await MC.readFile(e, "utf-8");
    return JSON.parse(r).apiKey;
  } catch {
    return;
  }
}
async function pEt(t) {
  let r = [1e3, 2e3, 3e3];
  for (let n = 0; n < 3; n++)
    try {
      let o = await fetch(`https://iflow.cn/api/oauth/getUserInfo?accessToken=${t}`, { method: "GET" });
      if (!o.ok) {
        let a = `Failed to fetch iFlow user info: ${o.status} ${o.statusText}`;
        if ((o.status >= 500 || o.status === 408 || o.status === 429) && n < 2) {
          (console.warn(
            I.t("oauth2.messages.retryingRequest", { errorMessage: a, delay: r[n], attempt: n + 1, maxRetries: 3 }),
          ),
            await new Promise((u) => setTimeout(u, r[n])));
          continue;
        }
        return (console.error(a), {});
      }
      let s = await o.json();
      if (s.success && s.data)
        return {
          apiKey: s.data.apiKey,
          userId: s.data.userId,
          userName: s.data.userName,
          avatar: s.data.avatar,
          email: s.data.email,
          phone: s.data.phone,
        };
      continue;
    } catch (o) {
      if (n === 2) return (console.error(I.t("oauth2.messages.errorAfterAllRetries"), o), {});
      (console.warn(
        I.t("oauth2.messages.errorWithRetryInfo", { attempt: n + 1, maxRetries: 3, error: o, delay: r[n] }),
      ),
        await new Promise((a) => setTimeout(a, r[n])));
    }
  return {};
}
async function hEt(t) {
  let e = await fetch("https://iflow.cn/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${LC}:${AR}`).toString("base64")}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: t,
      client_id: LC,
      client_secret: AR,
    }).toString(),
  });
  if (!e.ok) throw new Error(I.t("oauth2.errors.tokenRefreshFailed", { status: e.status, statusText: e.statusText }));
  return await e.json();
}
async function pte() {
  try {
    let t = wp.getOAuthCredsPath(),
      e = await MC.readFile(t, "utf-8"),
      r = JSON.parse(e);
    return !!(r.access_token && r.refresh_token && r.expiry_date);
  } catch {
    return !1;
  }
}
async function lEt(t = {}) {
  let { throwOnExpired: e = !1, silentMode: r = !1 } = t;
  try {
    let n = wp.getOAuthCredsPath(),
      o = await MC.readFile(n, "utf-8"),
      s = JSON.parse(o),
      a = 1440 * 60 * 1e3,
      u = s.expiry_date - Date.now();
    if (u < 0) {
      let c = I.t("oauth2.errors.iflowLoginExpired");
      if (e) throw new Error(c);
      return (
        r || console.log(I.t("oauth2.messages.tokenExpiredClearing")),
        await RG(),
        { isValid: !1, isExpired: !0, wasRefreshed: !1, error: c }
      );
    }
    if (u > 0 && u < a) {
      if (!s.refresh_token) {
        let c = I.t("oauth2.errors.tokenExpiresWarningSoon");
        if (e) throw new Error(c);
        return (
          r || console.log(I.t("oauth2.messages.tokenExpiresSoonClearing")),
          await RG(),
          { isValid: !1, isExpired: !1, wasRefreshed: !1, error: c }
        );
      }
      try {
        let c = await hEt(s.refresh_token),
          m = {
            ...s,
            access_token: c.access_token,
            refresh_token: c.refresh_token,
            expiry_date: Date.now() + c.expires_in * 1e3,
            token_type: c.token_type,
            scope: c.scope,
          };
        return (
          await MC.writeFile(n, JSON.stringify(m, null, 2), { mode: 384 }),
          r || console.log(I.t("oauth2.messages.tokenRefreshedSuccessfully")),
          { isValid: !0, isExpired: !1, wasRefreshed: !0 }
        );
      } catch (c) {
        let m = "Token refresh failed";
        if (e)
          throw c instanceof Error && (c.message.includes("expired") || c.message.includes("refresh"))
            ? new Error(I.t("oauth2.errors.iflowLoginExpired"))
            : c;
        return (
          r || console.log(I.t("oauth2.messages.tokenRefreshFailedClearing")),
          await RG(),
          { isValid: !1, isExpired: !1, wasRefreshed: !1, error: m }
        );
      }
    }
    return { isValid: !0, isExpired: !1, wasRefreshed: !1 };
  } catch (n) {
    if (e) throw n;
    return { isValid: !0, isExpired: !1, wasRefreshed: !1 };
  }
}
async function LOe() {
  await lEt({ throwOnExpired: !0, silentMode: !1 });
}
async function MOe() {
  if (fx()) return (await lEt({ throwOnExpired: !1, silentMode: !0 })).isValid;
  try {
    return (await lEt({ throwOnExpired: !0, silentMode: !1 })).isValid;
  } catch {
    throw new fte(I.t("oauth2.errors.serverOauth2TokenExpired"));
  }
}
async function fAo(t, e) {
  let r = await fetch("https://iflow.cn/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${LC}:${AR}`).toString("base64")}`,
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: t,
      redirect_uri: e,
      client_id: LC,
      client_secret: AR,
    }).toString(),
  });
  if (!r.ok) throw new Error(I.t("oauth2.errors.tokenRequestFailed", { status: r.status, statusText: r.statusText }));
  return await r.json();
}
function U3e(t, e) {
  let r = { ...t };
  return (
    e.apiKey && (r.apiKey = e.apiKey),
    e.userId && (r.userId = e.userId),
    e.userName && (r.userName = e.userName),
    e.avatar && (r.avatar = e.avatar),
    e.email && (r.email = e.email),
    e.phone && (r.phone = e.phone),
    r
  );
}
function pAo(t, e) {
  let r = {
    access_token: t.access_token,
    refresh_token: t.refresh_token,
    expiry_date: Date.now() + t.expires_in * 1e3,
    token_type: t.token_type,
    scope: t.scope,
  };
  return e ? U3e(r, e) : r;
}
function $3e() {
  let t = $Nr.randomBytes(32).toString("hex"),
    e = "https://iflow.cn/oauth/code-display",
    r = "https://iflow.cn/oauth",
    n = encodeURIComponent(e);
  return `${r}?loginMethod=phone&type=phone&redirect=${n}&state=${t}&client_id=${LC}`;
}
async function hte(t) {
  let r = await fAo(t, "https://iflow.cn/oauth/code-display"),
    n = await pEt(r.access_token);
  if (!n.apiKey) throw new Error("Failed to retrieve API key from server. Please try again or contact support.");
  let o = pAo(r, n);
  return (await F3e(o), await FC.cacheIFlowApiKey(n.apiKey), EB.clear(), { ...r, apiKey: n.apiKey });
}
var NOe,
  FC,
  LC,
  AR,
  cEt,
  lAo,
  UNr,
  EB,
  fte,
  OG = j(() => {
    "use strict";
    NOe = Se(pOe(), 1);
    T3e();
    UC();
    bi();
    M3e();
    FNr();
    ((FC = new OOe()),
      (LC = "10009311001"),
      (AR = "4Z3YjXycVsQvyGF1etiNlIBB4RsqSDtW"),
      (cEt = 301),
      (lAo = "https://iflow.cn/oauth/success"),
      (UNr = "https://iflow.cn/oauth/error"),
      (EB = new Map()),
      (fte = class extends Error {
        url;
        constructor(e) {
          (super(`SERVER_OAUTH2_REQUIRED: ${e}`), (this.url = $3e()), (this.name = "ServerOauth2Error"));
        }
      }));
  });
var bEt,
  o6,
  AEt,
  yEt = j(() => {
    "use strict";
    (function (t) {
      ((t.DASHER_USER = "DASHER_USER"),
        (t.INELIGIBLE_ACCOUNT = "INELIGIBLE_ACCOUNT"),
        (t.NON_USER_ACCOUNT = "NON_USER_ACCOUNT"),
        (t.RESTRICTED_AGE = "RESTRICTED_AGE"),
        (t.RESTRICTED_NETWORK = "RESTRICTED_NETWORK"),
        (t.UNKNOWN = "UNKNOWN"),
        (t.UNKNOWN_LOCATION = "UNKNOWN_LOCATION"),
        (t.UNSUPPORTED_LOCATION = "UNSUPPORTED_LOCATION"));
    })(bEt || (bEt = {}));
    (function (t) {
      ((t.FREE = "free-tier"), (t.LEGACY = "legacy-tier"), (t.STANDARD = "standard-tier"));
    })(o6 || (o6 = {}));
    (function (t) {
      ((t.Default = "DEFAULT"), (t.Notice = "NOTICE"), (t.Warning = "WARNING"), (t.Error = "ERROR"));
    })(AEt || (AEt = {}));
  });
function MPr(t) {
  return { text: t };
}
function FPr(t) {
  return typeof t == "object" && t !== null
    ? "fileData" in t ||
        "text" in t ||
        "functionCall" in t ||
        "functionResponse" in t ||
        "inlineData" in t ||
        "videoMetadata" in t ||
        "codeExecutionResult" in t ||
        "executableCode" in t
    : !1;
}
function gAo(t) {
  let e = [];
  if (typeof t == "string") e.push(MPr(t));
  else if (FPr(t)) e.push(t);
  else if (Array.isArray(t)) {
    if (t.length === 0) throw new Error("partOrString cannot be an empty array");
    for (let r of t)
      if (typeof r == "string") e.push(MPr(r));
      else if (FPr(r)) e.push(r);
      else throw new Error("element in PartUnion must be a Part object or string");
  } else throw new Error("partOrString must be a Part object, string, or array");
  return e;
}
function _Et(t) {
  return { role: "user", parts: gAo(t) };
}
function bAo(t, e = {}) {
  let r = t,
    n = { name: r.name, description: r.description, parametersJsonSchema: r.inputSchema };
  return (
    r.outputSchema && (n.responseJsonSchema = r.outputSchema),
    e.behavior && (n.behavior = e.behavior),
    { functionDeclarations: [n] }
  );
}
function AAo(t, e = {}) {
  let r = [],
    n = new Set();
  for (let o of t) {
    let s = o.name;
    if (n.has(s))
      throw new Error(`Duplicate function name ${s} found in MCP tools. Please ensure function names are unique.`);
    n.add(s);
    let a = bAo(o, e);
    a.functionDeclarations && r.push(...a.functionDeclarations);
  }
  return { functionDeclarations: r };
}
function $Pr(t) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    r = e && t[e],
    n = 0;
  if (r) return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function () {
        return (t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t });
      },
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function j3e(t) {
  return this instanceof j3e ? ((this.v = t), this) : new j3e(t);
}
function yAo(t, e, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []),
    o,
    s = [];
  return (
    (o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    u("next"),
    u("throw"),
    u("return", a),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function a(h) {
    return function (g) {
      return Promise.resolve(g).then(h, f);
    };
  }
  function u(h, g) {
    n[h] &&
      ((o[h] = function (b) {
        return new Promise(function (A, y) {
          s.push([h, b, A, y]) > 1 || c(h, b);
        });
      }),
      g && (o[h] = g(o[h])));
  }
  function c(h, g) {
    try {
      m(n[h](g));
    } catch (b) {
      p(s[0][3], b);
    }
  }
  function m(h) {
    h.value instanceof j3e ? Promise.resolve(h.value.v).then(d, f) : p(s[0][2], h);
  }
  function d(h) {
    c("next", h);
  }
  function f(h) {
    c("throw", h);
  }
  function p(h, g) {
    (h(g), s.shift(), s.length && c(s[0][0], s[0][1]));
  }
}
function _Ao(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator],
    r;
  return e
    ? e.call(t)
    : ((t = typeof $Pr == "function" ? $Pr(t) : t[Symbol.iterator]()),
      (r = {}),
      n("next"),
      n("throw"),
      n("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function n(s) {
    r[s] =
      t[s] &&
      function (a) {
        return new Promise(function (u, c) {
          ((a = t[s](a)), o(u, c, a.done, a.value));
        });
      };
  }
  function o(s, a, u, c) {
    Promise.resolve(c).then(function (m) {
      s({ value: m, done: u });
    }, a);
  }
}
function CAo(t, e = 100) {
  return yAo(this, arguments, function* () {
    let n,
      o = 0;
    for (; o < e; ) {
      let s = yield j3e(t.listTools({ cursor: n }));
      for (let a of s.tools) (yield yield j3e(a), o++);
      if (!s.nextCursor) break;
      n = s.nextCursor;
    }
  });
}
function SAo(t) {
  return t !== null && typeof t == "object" && "listTools" in t && typeof t.listTools == "function";
}
function jPr(...t) {
  if (((vAo = !0), t.length === 0)) throw new Error("No MCP clients provided");
  let e = t[t.length - 1];
  return SAo(e) ? FOe.create(t, {}) : FOe.create(t.slice(0, t.length - 1), e);
}
var hAo,
  WNr,
  zNr,
  Dt,
  YNr,
  KNr,
  JNr,
  XNr,
  ZNr,
  ePr,
  tPr,
  id,
  rPr,
  nPr,
  iPr,
  oPr,
  sPr,
  aPr,
  uPr,
  cPr,
  lPr,
  mPr,
  dPr,
  fPr,
  pPr,
  hPr,
  gPr,
  bPr,
  APr,
  yPr,
  _Pr,
  EPr,
  vPr,
  CPr,
  SPr,
  wPr,
  xPr,
  TPr,
  DPr,
  IPr,
  RPr,
  kPr,
  OPr,
  NPr,
  PPr,
  BPr,
  LPr,
  gte,
  UPr,
  EAo,
  gTu,
  vAo,
  FOe,
  bTu,
  Ba = j(() => {
    hAo = Se(pOe(), 1);
    Uhe();
    (function (t) {
      ((t.OUTCOME_UNSPECIFIED = "OUTCOME_UNSPECIFIED"),
        (t.OUTCOME_OK = "OUTCOME_OK"),
        (t.OUTCOME_FAILED = "OUTCOME_FAILED"),
        (t.OUTCOME_DEADLINE_EXCEEDED = "OUTCOME_DEADLINE_EXCEEDED"));
    })(WNr || (WNr = {}));
    (function (t) {
      ((t.LANGUAGE_UNSPECIFIED = "LANGUAGE_UNSPECIFIED"), (t.PYTHON = "PYTHON"));
    })(zNr || (zNr = {}));
    (function (t) {
      ((t.TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"),
        (t.STRING = "STRING"),
        (t.NUMBER = "NUMBER"),
        (t.INTEGER = "INTEGER"),
        (t.BOOLEAN = "BOOLEAN"),
        (t.ARRAY = "ARRAY"),
        (t.OBJECT = "OBJECT"),
        (t.NULL = "NULL"));
    })(Dt || (Dt = {}));
    (function (t) {
      ((t.HARM_CATEGORY_UNSPECIFIED = "HARM_CATEGORY_UNSPECIFIED"),
        (t.HARM_CATEGORY_HATE_SPEECH = "HARM_CATEGORY_HATE_SPEECH"),
        (t.HARM_CATEGORY_DANGEROUS_CONTENT = "HARM_CATEGORY_DANGEROUS_CONTENT"),
        (t.HARM_CATEGORY_HARASSMENT = "HARM_CATEGORY_HARASSMENT"),
        (t.HARM_CATEGORY_SEXUALLY_EXPLICIT = "HARM_CATEGORY_SEXUALLY_EXPLICIT"),
        (t.HARM_CATEGORY_CIVIC_INTEGRITY = "HARM_CATEGORY_CIVIC_INTEGRITY"),
        (t.HARM_CATEGORY_IMAGE_HATE = "HARM_CATEGORY_IMAGE_HATE"),
        (t.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT = "HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT"),
        (t.HARM_CATEGORY_IMAGE_HARASSMENT = "HARM_CATEGORY_IMAGE_HARASSMENT"),
        (t.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT = "HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT"));
    })(YNr || (YNr = {}));
    (function (t) {
      ((t.HARM_BLOCK_METHOD_UNSPECIFIED = "HARM_BLOCK_METHOD_UNSPECIFIED"),
        (t.SEVERITY = "SEVERITY"),
        (t.PROBABILITY = "PROBABILITY"));
    })(KNr || (KNr = {}));
    (function (t) {
      ((t.HARM_BLOCK_THRESHOLD_UNSPECIFIED = "HARM_BLOCK_THRESHOLD_UNSPECIFIED"),
        (t.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE"),
        (t.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE"),
        (t.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH"),
        (t.BLOCK_NONE = "BLOCK_NONE"),
        (t.OFF = "OFF"));
    })(JNr || (JNr = {}));
    (function (t) {
      ((t.MODE_UNSPECIFIED = "MODE_UNSPECIFIED"), (t.MODE_DYNAMIC = "MODE_DYNAMIC"));
    })(XNr || (XNr = {}));
    (function (t) {
      ((t.AUTH_TYPE_UNSPECIFIED = "AUTH_TYPE_UNSPECIFIED"),
        (t.NO_AUTH = "NO_AUTH"),
        (t.API_KEY_AUTH = "API_KEY_AUTH"),
        (t.HTTP_BASIC_AUTH = "HTTP_BASIC_AUTH"),
        (t.GOOGLE_SERVICE_ACCOUNT_AUTH = "GOOGLE_SERVICE_ACCOUNT_AUTH"),
        (t.OAUTH = "OAUTH"),
        (t.OIDC_AUTH = "OIDC_AUTH"));
    })(ZNr || (ZNr = {}));
    (function (t) {
      ((t.API_SPEC_UNSPECIFIED = "API_SPEC_UNSPECIFIED"),
        (t.SIMPLE_SEARCH = "SIMPLE_SEARCH"),
        (t.ELASTIC_SEARCH = "ELASTIC_SEARCH"));
    })(ePr || (ePr = {}));
    (function (t) {
      ((t.URL_RETRIEVAL_STATUS_UNSPECIFIED = "URL_RETRIEVAL_STATUS_UNSPECIFIED"),
        (t.URL_RETRIEVAL_STATUS_SUCCESS = "URL_RETRIEVAL_STATUS_SUCCESS"),
        (t.URL_RETRIEVAL_STATUS_ERROR = "URL_RETRIEVAL_STATUS_ERROR"),
        (t.URL_RETRIEVAL_STATUS_PAYWALL = "URL_RETRIEVAL_STATUS_PAYWALL"),
        (t.URL_RETRIEVAL_STATUS_UNSAFE = "URL_RETRIEVAL_STATUS_UNSAFE"));
    })(tPr || (tPr = {}));
    (function (t) {
      ((t.FINISH_REASON_UNSPECIFIED = "FINISH_REASON_UNSPECIFIED"),
        (t.STOP = "STOP"),
        (t.MAX_TOKENS = "MAX_TOKENS"),
        (t.SAFETY = "SAFETY"),
        (t.RECITATION = "RECITATION"),
        (t.LANGUAGE = "LANGUAGE"),
        (t.OTHER = "OTHER"),
        (t.BLOCKLIST = "BLOCKLIST"),
        (t.PROHIBITED_CONTENT = "PROHIBITED_CONTENT"),
        (t.SPII = "SPII"),
        (t.MALFORMED_FUNCTION_CALL = "MALFORMED_FUNCTION_CALL"),
        (t.IMAGE_SAFETY = "IMAGE_SAFETY"),
        (t.UNEXPECTED_TOOL_CALL = "UNEXPECTED_TOOL_CALL"));
    })(id || (id = {}));
    (function (t) {
      ((t.HARM_PROBABILITY_UNSPECIFIED = "HARM_PROBABILITY_UNSPECIFIED"),
        (t.NEGLIGIBLE = "NEGLIGIBLE"),
        (t.LOW = "LOW"),
        (t.MEDIUM = "MEDIUM"),
        (t.HIGH = "HIGH"));
    })(rPr || (rPr = {}));
    (function (t) {
      ((t.HARM_SEVERITY_UNSPECIFIED = "HARM_SEVERITY_UNSPECIFIED"),
        (t.HARM_SEVERITY_NEGLIGIBLE = "HARM_SEVERITY_NEGLIGIBLE"),
        (t.HARM_SEVERITY_LOW = "HARM_SEVERITY_LOW"),
        (t.HARM_SEVERITY_MEDIUM = "HARM_SEVERITY_MEDIUM"),
        (t.HARM_SEVERITY_HIGH = "HARM_SEVERITY_HIGH"));
    })(nPr || (nPr = {}));
    (function (t) {
      ((t.BLOCKED_REASON_UNSPECIFIED = "BLOCKED_REASON_UNSPECIFIED"),
        (t.SAFETY = "SAFETY"),
        (t.OTHER = "OTHER"),
        (t.BLOCKLIST = "BLOCKLIST"),
        (t.PROHIBITED_CONTENT = "PROHIBITED_CONTENT"),
        (t.IMAGE_SAFETY = "IMAGE_SAFETY"));
    })(iPr || (iPr = {}));
    (function (t) {
      ((t.TRAFFIC_TYPE_UNSPECIFIED = "TRAFFIC_TYPE_UNSPECIFIED"),
        (t.ON_DEMAND = "ON_DEMAND"),
        (t.PROVISIONED_THROUGHPUT = "PROVISIONED_THROUGHPUT"));
    })(oPr || (oPr = {}));
    (function (t) {
      ((t.MODALITY_UNSPECIFIED = "MODALITY_UNSPECIFIED"), (t.TEXT = "TEXT"), (t.IMAGE = "IMAGE"), (t.AUDIO = "AUDIO"));
    })(sPr || (sPr = {}));
    (function (t) {
      ((t.MEDIA_RESOLUTION_UNSPECIFIED = "MEDIA_RESOLUTION_UNSPECIFIED"),
        (t.MEDIA_RESOLUTION_LOW = "MEDIA_RESOLUTION_LOW"),
        (t.MEDIA_RESOLUTION_MEDIUM = "MEDIA_RESOLUTION_MEDIUM"),
        (t.MEDIA_RESOLUTION_HIGH = "MEDIA_RESOLUTION_HIGH"));
    })(aPr || (aPr = {}));
    (function (t) {
      ((t.JOB_STATE_UNSPECIFIED = "JOB_STATE_UNSPECIFIED"),
        (t.JOB_STATE_QUEUED = "JOB_STATE_QUEUED"),
        (t.JOB_STATE_PENDING = "JOB_STATE_PENDING"),
        (t.JOB_STATE_RUNNING = "JOB_STATE_RUNNING"),
        (t.JOB_STATE_SUCCEEDED = "JOB_STATE_SUCCEEDED"),
        (t.JOB_STATE_FAILED = "JOB_STATE_FAILED"),
        (t.JOB_STATE_CANCELLING = "JOB_STATE_CANCELLING"),
        (t.JOB_STATE_CANCELLED = "JOB_STATE_CANCELLED"),
        (t.JOB_STATE_PAUSED = "JOB_STATE_PAUSED"),
        (t.JOB_STATE_EXPIRED = "JOB_STATE_EXPIRED"),
        (t.JOB_STATE_UPDATING = "JOB_STATE_UPDATING"),
        (t.JOB_STATE_PARTIALLY_SUCCEEDED = "JOB_STATE_PARTIALLY_SUCCEEDED"));
    })(uPr || (uPr = {}));
    (function (t) {
      ((t.TUNING_MODE_UNSPECIFIED = "TUNING_MODE_UNSPECIFIED"),
        (t.TUNING_MODE_FULL = "TUNING_MODE_FULL"),
        (t.TUNING_MODE_PEFT_ADAPTER = "TUNING_MODE_PEFT_ADAPTER"));
    })(cPr || (cPr = {}));
    (function (t) {
      ((t.ADAPTER_SIZE_UNSPECIFIED = "ADAPTER_SIZE_UNSPECIFIED"),
        (t.ADAPTER_SIZE_ONE = "ADAPTER_SIZE_ONE"),
        (t.ADAPTER_SIZE_TWO = "ADAPTER_SIZE_TWO"),
        (t.ADAPTER_SIZE_FOUR = "ADAPTER_SIZE_FOUR"),
        (t.ADAPTER_SIZE_EIGHT = "ADAPTER_SIZE_EIGHT"),
        (t.ADAPTER_SIZE_SIXTEEN = "ADAPTER_SIZE_SIXTEEN"),
        (t.ADAPTER_SIZE_THIRTY_TWO = "ADAPTER_SIZE_THIRTY_TWO"));
    })(lPr || (lPr = {}));
    (function (t) {
      ((t.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED = "FEATURE_SELECTION_PREFERENCE_UNSPECIFIED"),
        (t.PRIORITIZE_QUALITY = "PRIORITIZE_QUALITY"),
        (t.BALANCED = "BALANCED"),
        (t.PRIORITIZE_COST = "PRIORITIZE_COST"));
    })(mPr || (mPr = {}));
    (function (t) {
      ((t.UNSPECIFIED = "UNSPECIFIED"), (t.BLOCKING = "BLOCKING"), (t.NON_BLOCKING = "NON_BLOCKING"));
    })(dPr || (dPr = {}));
    (function (t) {
      ((t.MODE_UNSPECIFIED = "MODE_UNSPECIFIED"), (t.MODE_DYNAMIC = "MODE_DYNAMIC"));
    })(fPr || (fPr = {}));
    (function (t) {
      ((t.ENVIRONMENT_UNSPECIFIED = "ENVIRONMENT_UNSPECIFIED"), (t.ENVIRONMENT_BROWSER = "ENVIRONMENT_BROWSER"));
    })(pPr || (pPr = {}));
    (function (t) {
      ((t.MODE_UNSPECIFIED = "MODE_UNSPECIFIED"),
        (t.AUTO = "AUTO"),
        (t.ANY = "ANY"),
        (t.NONE = "NONE"),
        (t.VALIDATED = "VALIDATED"));
    })(hPr || (hPr = {}));
    (function (t) {
      ((t.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE"),
        (t.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE"),
        (t.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH"),
        (t.BLOCK_NONE = "BLOCK_NONE"));
    })(gPr || (gPr = {}));
    (function (t) {
      ((t.DONT_ALLOW = "DONT_ALLOW"), (t.ALLOW_ADULT = "ALLOW_ADULT"), (t.ALLOW_ALL = "ALLOW_ALL"));
    })(bPr || (bPr = {}));
    (function (t) {
      ((t.auto = "auto"),
        (t.en = "en"),
        (t.ja = "ja"),
        (t.ko = "ko"),
        (t.hi = "hi"),
        (t.zh = "zh"),
        (t.pt = "pt"),
        (t.es = "es"));
    })(APr || (APr = {}));
    (function (t) {
      ((t.MASK_MODE_DEFAULT = "MASK_MODE_DEFAULT"),
        (t.MASK_MODE_USER_PROVIDED = "MASK_MODE_USER_PROVIDED"),
        (t.MASK_MODE_BACKGROUND = "MASK_MODE_BACKGROUND"),
        (t.MASK_MODE_FOREGROUND = "MASK_MODE_FOREGROUND"),
        (t.MASK_MODE_SEMANTIC = "MASK_MODE_SEMANTIC"));
    })(yPr || (yPr = {}));
    (function (t) {
      ((t.CONTROL_TYPE_DEFAULT = "CONTROL_TYPE_DEFAULT"),
        (t.CONTROL_TYPE_CANNY = "CONTROL_TYPE_CANNY"),
        (t.CONTROL_TYPE_SCRIBBLE = "CONTROL_TYPE_SCRIBBLE"),
        (t.CONTROL_TYPE_FACE_MESH = "CONTROL_TYPE_FACE_MESH"));
    })(_Pr || (_Pr = {}));
    (function (t) {
      ((t.SUBJECT_TYPE_DEFAULT = "SUBJECT_TYPE_DEFAULT"),
        (t.SUBJECT_TYPE_PERSON = "SUBJECT_TYPE_PERSON"),
        (t.SUBJECT_TYPE_ANIMAL = "SUBJECT_TYPE_ANIMAL"),
        (t.SUBJECT_TYPE_PRODUCT = "SUBJECT_TYPE_PRODUCT"));
    })(EPr || (EPr = {}));
    (function (t) {
      ((t.EDIT_MODE_DEFAULT = "EDIT_MODE_DEFAULT"),
        (t.EDIT_MODE_INPAINT_REMOVAL = "EDIT_MODE_INPAINT_REMOVAL"),
        (t.EDIT_MODE_INPAINT_INSERTION = "EDIT_MODE_INPAINT_INSERTION"),
        (t.EDIT_MODE_OUTPAINT = "EDIT_MODE_OUTPAINT"),
        (t.EDIT_MODE_CONTROLLED_EDITING = "EDIT_MODE_CONTROLLED_EDITING"),
        (t.EDIT_MODE_STYLE = "EDIT_MODE_STYLE"),
        (t.EDIT_MODE_BGSWAP = "EDIT_MODE_BGSWAP"),
        (t.EDIT_MODE_PRODUCT_IMAGE = "EDIT_MODE_PRODUCT_IMAGE"));
    })(vPr || (vPr = {}));
    (function (t) {
      ((t.FOREGROUND = "FOREGROUND"),
        (t.BACKGROUND = "BACKGROUND"),
        (t.PROMPT = "PROMPT"),
        (t.SEMANTIC = "SEMANTIC"),
        (t.INTERACTIVE = "INTERACTIVE"));
    })(CPr || (CPr = {}));
    (function (t) {
      ((t.ASSET = "ASSET"), (t.STYLE = "STYLE"));
    })(SPr || (SPr = {}));
    (function (t) {
      ((t.OPTIMIZED = "OPTIMIZED"), (t.LOSSLESS = "LOSSLESS"));
    })(wPr || (wPr = {}));
    (function (t) {
      ((t.STATE_UNSPECIFIED = "STATE_UNSPECIFIED"),
        (t.PROCESSING = "PROCESSING"),
        (t.ACTIVE = "ACTIVE"),
        (t.FAILED = "FAILED"));
    })(xPr || (xPr = {}));
    (function (t) {
      ((t.SOURCE_UNSPECIFIED = "SOURCE_UNSPECIFIED"), (t.UPLOADED = "UPLOADED"), (t.GENERATED = "GENERATED"));
    })(TPr || (TPr = {}));
    (function (t) {
      ((t.MODALITY_UNSPECIFIED = "MODALITY_UNSPECIFIED"),
        (t.TEXT = "TEXT"),
        (t.IMAGE = "IMAGE"),
        (t.VIDEO = "VIDEO"),
        (t.AUDIO = "AUDIO"),
        (t.DOCUMENT = "DOCUMENT"));
    })(DPr || (DPr = {}));
    (function (t) {
      ((t.START_SENSITIVITY_UNSPECIFIED = "START_SENSITIVITY_UNSPECIFIED"),
        (t.START_SENSITIVITY_HIGH = "START_SENSITIVITY_HIGH"),
        (t.START_SENSITIVITY_LOW = "START_SENSITIVITY_LOW"));
    })(IPr || (IPr = {}));
    (function (t) {
      ((t.END_SENSITIVITY_UNSPECIFIED = "END_SENSITIVITY_UNSPECIFIED"),
        (t.END_SENSITIVITY_HIGH = "END_SENSITIVITY_HIGH"),
        (t.END_SENSITIVITY_LOW = "END_SENSITIVITY_LOW"));
    })(RPr || (RPr = {}));
    (function (t) {
      ((t.ACTIVITY_HANDLING_UNSPECIFIED = "ACTIVITY_HANDLING_UNSPECIFIED"),
        (t.START_OF_ACTIVITY_INTERRUPTS = "START_OF_ACTIVITY_INTERRUPTS"),
        (t.NO_INTERRUPTION = "NO_INTERRUPTION"));
    })(kPr || (kPr = {}));
    (function (t) {
      ((t.TURN_COVERAGE_UNSPECIFIED = "TURN_COVERAGE_UNSPECIFIED"),
        (t.TURN_INCLUDES_ONLY_ACTIVITY = "TURN_INCLUDES_ONLY_ACTIVITY"),
        (t.TURN_INCLUDES_ALL_INPUT = "TURN_INCLUDES_ALL_INPUT"));
    })(OPr || (OPr = {}));
    (function (t) {
      ((t.SCHEDULING_UNSPECIFIED = "SCHEDULING_UNSPECIFIED"),
        (t.SILENT = "SILENT"),
        (t.WHEN_IDLE = "WHEN_IDLE"),
        (t.INTERRUPT = "INTERRUPT"));
    })(NPr || (NPr = {}));
    (function (t) {
      ((t.SCALE_UNSPECIFIED = "SCALE_UNSPECIFIED"),
        (t.C_MAJOR_A_MINOR = "C_MAJOR_A_MINOR"),
        (t.D_FLAT_MAJOR_B_FLAT_MINOR = "D_FLAT_MAJOR_B_FLAT_MINOR"),
        (t.D_MAJOR_B_MINOR = "D_MAJOR_B_MINOR"),
        (t.E_FLAT_MAJOR_C_MINOR = "E_FLAT_MAJOR_C_MINOR"),
        (t.E_MAJOR_D_FLAT_MINOR = "E_MAJOR_D_FLAT_MINOR"),
        (t.F_MAJOR_D_MINOR = "F_MAJOR_D_MINOR"),
        (t.G_FLAT_MAJOR_E_FLAT_MINOR = "G_FLAT_MAJOR_E_FLAT_MINOR"),
        (t.G_MAJOR_E_MINOR = "G_MAJOR_E_MINOR"),
        (t.A_FLAT_MAJOR_F_MINOR = "A_FLAT_MAJOR_F_MINOR"),
        (t.A_MAJOR_G_FLAT_MINOR = "A_MAJOR_G_FLAT_MINOR"),
        (t.B_FLAT_MAJOR_G_MINOR = "B_FLAT_MAJOR_G_MINOR"),
        (t.B_MAJOR_A_FLAT_MINOR = "B_MAJOR_A_FLAT_MINOR"));
    })(PPr || (PPr = {}));
    (function (t) {
      ((t.MUSIC_GENERATION_MODE_UNSPECIFIED = "MUSIC_GENERATION_MODE_UNSPECIFIED"),
        (t.QUALITY = "QUALITY"),
        (t.DIVERSITY = "DIVERSITY"),
        (t.VOCALIZATION = "VOCALIZATION"));
    })(BPr || (BPr = {}));
    (function (t) {
      ((t.PLAYBACK_CONTROL_UNSPECIFIED = "PLAYBACK_CONTROL_UNSPECIFIED"),
        (t.PLAY = "PLAY"),
        (t.PAUSE = "PAUSE"),
        (t.STOP = "STOP"),
        (t.RESET_CONTEXT = "RESET_CONTEXT"));
    })(LPr || (LPr = {}));
    gte = class {
      get text() {
        var e, r, n, o, s, a, u, c;
        if (
          ((o =
            (n =
              (r = (e = this.candidates) === null || e === void 0 ? void 0 : e[0]) === null || r === void 0
                ? void 0
                : r.content) === null || n === void 0
              ? void 0
              : n.parts) === null || o === void 0
            ? void 0
            : o.length) === 0
        )
          return;
        this.candidates &&
          this.candidates.length > 1 &&
          console.warn("there are multiple candidates in the response, returning text from the first one.");
        let m = "",
          d = !1,
          f = [];
        for (let p of (c =
          (u =
            (a = (s = this.candidates) === null || s === void 0 ? void 0 : s[0]) === null || a === void 0
              ? void 0
              : a.content) === null || u === void 0
            ? void 0
            : u.parts) !== null && c !== void 0
          ? c
          : []) {
          for (let [h, g] of Object.entries(p))
            h !== "text" && h !== "thought" && (g !== null || g !== void 0) && f.push(h);
          if (typeof p.text == "string") {
            if (typeof p.thought == "boolean" && p.thought) continue;
            ((d = !0), (m += p.text));
          }
        }
        return (
          f.length > 0 &&
            console.warn(
              `there are non-text parts ${f} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`,
            ),
          d ? m : void 0
        );
      }
      get data() {
        var e, r, n, o, s, a, u, c;
        if (
          ((o =
            (n =
              (r = (e = this.candidates) === null || e === void 0 ? void 0 : e[0]) === null || r === void 0
                ? void 0
                : r.content) === null || n === void 0
              ? void 0
              : n.parts) === null || o === void 0
            ? void 0
            : o.length) === 0
        )
          return;
        this.candidates &&
          this.candidates.length > 1 &&
          console.warn("there are multiple candidates in the response, returning data from the first one.");
        let m = "",
          d = [];
        for (let f of (c =
          (u =
            (a = (s = this.candidates) === null || s === void 0 ? void 0 : s[0]) === null || a === void 0
              ? void 0
              : a.content) === null || u === void 0
            ? void 0
            : u.parts) !== null && c !== void 0
          ? c
          : []) {
          for (let [p, h] of Object.entries(f)) p !== "inlineData" && (h !== null || h !== void 0) && d.push(p);
          f.inlineData && typeof f.inlineData.data == "string" && (m += atob(f.inlineData.data));
        }
        return (
          d.length > 0 &&
            console.warn(
              `there are non-data parts ${d} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`,
            ),
          m.length > 0 ? btoa(m) : void 0
        );
      }
      get functionCalls() {
        var e, r, n, o, s, a, u, c;
        if (
          ((o =
            (n =
              (r = (e = this.candidates) === null || e === void 0 ? void 0 : e[0]) === null || r === void 0
                ? void 0
                : r.content) === null || n === void 0
              ? void 0
              : n.parts) === null || o === void 0
            ? void 0
            : o.length) === 0
        )
          return;
        this.candidates &&
          this.candidates.length > 1 &&
          console.warn("there are multiple candidates in the response, returning function calls from the first one.");
        let m =
          (c =
            (u =
              (a = (s = this.candidates) === null || s === void 0 ? void 0 : s[0]) === null || a === void 0
                ? void 0
                : a.content) === null || u === void 0
              ? void 0
              : u.parts) === null || c === void 0
            ? void 0
            : c
                .filter((d) => d.functionCall)
                .map((d) => d.functionCall)
                .filter((d) => d !== void 0);
        if (m?.length !== 0) return m;
      }
      get executableCode() {
        var e, r, n, o, s, a, u, c, m;
        if (
          ((o =
            (n =
              (r = (e = this.candidates) === null || e === void 0 ? void 0 : e[0]) === null || r === void 0
                ? void 0
                : r.content) === null || n === void 0
              ? void 0
              : n.parts) === null || o === void 0
            ? void 0
            : o.length) === 0
        )
          return;
        this.candidates &&
          this.candidates.length > 1 &&
          console.warn("there are multiple candidates in the response, returning executable code from the first one.");
        let d =
          (c =
            (u =
              (a = (s = this.candidates) === null || s === void 0 ? void 0 : s[0]) === null || a === void 0
                ? void 0
                : a.content) === null || u === void 0
              ? void 0
              : u.parts) === null || c === void 0
            ? void 0
            : c
                .filter((f) => f.executableCode)
                .map((f) => f.executableCode)
                .filter((f) => f !== void 0);
        if (d?.length !== 0) return (m = d?.[0]) === null || m === void 0 ? void 0 : m.code;
      }
      get codeExecutionResult() {
        var e, r, n, o, s, a, u, c, m;
        if (
          ((o =
            (n =
              (r = (e = this.candidates) === null || e === void 0 ? void 0 : e[0]) === null || r === void 0
                ? void 0
                : r.content) === null || n === void 0
              ? void 0
              : n.parts) === null || o === void 0
            ? void 0
            : o.length) === 0
        )
          return;
        this.candidates &&
          this.candidates.length > 1 &&
          console.warn(
            "there are multiple candidates in the response, returning code execution result from the first one.",
          );
        let d =
          (c =
            (u =
              (a = (s = this.candidates) === null || s === void 0 ? void 0 : s[0]) === null || a === void 0
                ? void 0
                : a.content) === null || u === void 0
              ? void 0
              : u.parts) === null || c === void 0
            ? void 0
            : c
                .filter((f) => f.codeExecutionResult)
                .map((f) => f.codeExecutionResult)
                .filter((f) => f !== void 0);
        if (d?.length !== 0) return (m = d?.[0]) === null || m === void 0 ? void 0 : m.output;
      }
    };
    (function (t) {
      ((t.PAGED_ITEM_BATCH_JOBS = "batchJobs"),
        (t.PAGED_ITEM_MODELS = "models"),
        (t.PAGED_ITEM_TUNING_JOBS = "tuningJobs"),
        (t.PAGED_ITEM_FILES = "files"),
        (t.PAGED_ITEM_CACHED_CONTENTS = "cachedContents"));
    })(UPr || (UPr = {}));
    ((EAo = "1.16.0"), (gTu = `google-genai-sdk/${EAo}`));
    vAo = !1;
    FOe = class t {
      constructor(e = [], r) {
        ((this.mcpTools = []), (this.functionNameToMcpClient = {}), (this.mcpClients = e), (this.config = r));
      }
      static create(e, r) {
        return new t(e, r);
      }
      async initialize() {
        var e, r, n, o;
        if (this.mcpTools.length > 0) return;
        let s = {},
          a = [];
        for (let d of this.mcpClients)
          try {
            for (var u = !0, c = ((r = void 0), _Ao(CAo(d))), m; (m = await c.next()), (e = m.done), !e; u = !0) {
              ((o = m.value), (u = !1));
              let f = o;
              a.push(f);
              let p = f.name;
              if (s[p])
                throw new Error(
                  `Duplicate function name ${p} found in MCP tools. Please ensure function names are unique.`,
                );
              s[p] = d;
            }
          } catch (f) {
            r = { error: f };
          } finally {
            try {
              !u && !e && (n = c.return) && (await n.call(c));
            } finally {
              if (r) throw r.error;
            }
          }
        ((this.mcpTools = a), (this.functionNameToMcpClient = s));
      }
      async tool() {
        return (await this.initialize(), AAo(this.mcpTools, this.config));
      }
      async callTool(e) {
        await this.initialize();
        let r = [];
        for (let n of e)
          if (n.name in this.functionNameToMcpClient) {
            let o = this.functionNameToMcpClient[n.name],
              s;
            this.config.timeout && (s = { timeout: this.config.timeout });
            let a = await o.callTool({ name: n.name, arguments: n.args }, void 0, s);
            r.push({ functionResponse: { name: n.name, response: a.isError ? { error: a } : a } });
          }
        return r;
      }
    };
    bTu = 1024 * 1024 * 8;
  });
function QPr(t) {
  return { request: { model: "models/" + t.model, contents: qPr(t.contents) } };
}
function GPr(t) {
  return { totalTokens: t.totalTokens };
}
function vEt(t, e, r, n) {
  return { model: t.model, project: r, user_prompt_id: e, request: wAo(t, n) };
}
function CEt(t) {
  let e = t.response,
    r = new gte();
  return (
    (r.candidates = e.candidates),
    (r.automaticFunctionCallingHistory = e.automaticFunctionCallingHistory),
    (r.promptFeedback = e.promptFeedback),
    (r.usageMetadata = e.usageMetadata),
    r
  );
}
function wAo(t, e) {
  return {
    contents: qPr(t.contents),
    systemInstruction: xAo(t.config?.systemInstruction),
    cachedContent: t.config?.cachedContent,
    tools: t.config?.tools,
    toolConfig: t.config?.toolConfig,
    labels: t.config?.labels,
    safetySettings: t.config?.safetySettings,
    generationConfig: IAo(t.config),
    session_id: e,
  };
}
function qPr(t) {
  return Array.isArray(t) ? t.map(EEt) : [EEt(t)];
}
function xAo(t) {
  if (t) return EEt(t);
}
function EEt(t) {
  return Array.isArray(t)
    ? { role: "user", parts: TAo(t) }
    : typeof t == "string"
      ? { role: "user", parts: [{ text: t }] }
      : "parts" in t
        ? t
        : { role: "user", parts: [t] };
}
function TAo(t) {
  return t.map(DAo);
}
function DAo(t) {
  return typeof t == "string" ? { text: t } : t;
}
function IAo(t) {
  if (t)
    return {
      temperature: t.temperature,
      topP: t.topP,
      topK: t.topK,
      candidateCount: t.candidateCount,
      maxOutputTokens: t.maxOutputTokens,
      stopSequences: t.stopSequences,
      responseLogprobs: t.responseLogprobs,
      logprobs: t.logprobs,
      presencePenalty: t.presencePenalty,
      frequencyPenalty: t.frequencyPenalty,
      seed: t.seed,
      responseMimeType: t.responseMimeType,
      responseSchema: t.responseSchema,
      routingConfig: t.routingConfig,
      modelSelectionConfig: t.modelSelectionConfig,
      responseModalities: t.responseModalities,
      mediaResolution: t.mediaResolution,
      speechConfig: t.speechConfig,
      audioTimestamp: t.audioTimestamp,
      thinkingConfig: t.thinkingConfig,
    };
}
var HPr = j(() => {
  "use strict";
  Ba();
});
import * as VPr from "readline";
var WPr,
  zPr,
  _R,
  UOe = j(() => {
    "use strict";
    HPr();
    ((WPr = "https://cloudcode-pa.googleapis.com"),
      (zPr = "v1internal"),
      (_R = class {
        client;
        projectId;
        httpOptions;
        sessionId;
        userTier;
        constructor(e, r, n = {}, o, s) {
          ((this.client = e), (this.projectId = r), (this.httpOptions = n), (this.sessionId = o), (this.userTier = s));
        }
        async generateContentStream(e, r) {
          let n = await this.requestStreamingPost(
            "streamGenerateContent",
            vEt(e, r, this.projectId, this.sessionId),
            e.config?.abortSignal,
          );
          return (async function* () {
            for await (let o of n) yield CEt(o);
          })();
        }
        async generateContent(e, r) {
          let n = await this.requestPost(
            "generateContent",
            vEt(e, r, this.projectId, this.sessionId),
            e.config?.abortSignal,
          );
          return CEt(n);
        }
        async onboardUser(e) {
          return await this.requestPost("onboardUser", e);
        }
        async loadCodeAssist(e) {
          return await this.requestPost("loadCodeAssist", e);
        }
        async getCodeAssistGlobalUserSetting() {
          return await this.requestGet("getCodeAssistGlobalUserSetting");
        }
        async setCodeAssistGlobalUserSetting(e) {
          return await this.requestPost("setCodeAssistGlobalUserSetting", e);
        }
        async countTokens(e, r) {
          let n = await this.requestPost("countTokens", QPr(e));
          return GPr(n);
        }
        async embedContent(e) {
          throw Error();
        }
        async requestPost(e, r, n) {
          return (
            await this.client.request({
              url: this.getMethodUrl(e),
              method: "POST",
              headers: { "Content-Type": "application/json", ...this.httpOptions.headers },
              responseType: "json",
              body: JSON.stringify(r),
              signal: n,
            })
          ).data;
        }
        async requestGet(e, r) {
          return (
            await this.client.request({
              url: this.getMethodUrl(e),
              method: "GET",
              headers: { "Content-Type": "application/json", ...this.httpOptions.headers },
              responseType: "json",
              signal: r,
            })
          ).data;
        }
        async requestStreamingPost(e, r, n) {
          let o = await this.client.request({
            url: this.getMethodUrl(e),
            method: "POST",
            params: { alt: "sse" },
            headers: { "Content-Type": "application/json", ...this.httpOptions.headers },
            responseType: "stream",
            body: JSON.stringify(r),
            signal: n,
          });
          return (async function* () {
            let s = VPr.createInterface({ input: o.data, crlfDelay: 1 / 0 }),
              a = [];
            for await (let u of s)
              if (u === "") {
                if (a.length === 0) continue;
                (yield JSON.parse(
                  a.join(`
`),
                ),
                  (a = []));
              } else if (u.startsWith("data: ")) a.push(u.slice(6).trim());
              else throw new Error(`Unexpected line format in response: ${u}`);
          })();
        }
        getMethodUrl(e) {
          return `${process.env.CODE_ASSIST_ENDPOINT ?? WPr}/${zPr}:${e}`;
        }
      }));
  });
async function YPr(t) {
  let e = process.env.GOOGLE_CLOUD_PROJECT || void 0,
    r = new _R(t, e, {}, "", void 0),
    n = { ideType: "IDE_UNSPECIFIED", platform: "PLATFORM_UNSPECIFIED", pluginType: "IFLOW", duetProject: e },
    o = await r.loadCodeAssist({ cloudaicompanionProject: e, metadata: n });
  !e && o.cloudaicompanionProject && (e = o.cloudaicompanionProject);
  let s = RAo(o);
  if (s.userDefinedCloudaicompanionProject && !e) throw new SEt();
  let a = { tierId: s.id, cloudaicompanionProject: e, metadata: n },
    u = await r.onboardUser(a);
  for (; !u.done; ) (await new Promise((c) => setTimeout(c, 5e3)), (u = await r.onboardUser(a)));
  return { projectId: u.response?.cloudaicompanionProject?.id || "", userTier: s.id };
}
function RAo(t) {
  if (t.currentTier) return t.currentTier;
  for (let e of t.allowedTiers || []) if (e.isDefault) return e;
  return { name: "", description: "", id: o6.LEGACY, userDefinedCloudaicompanionProject: !0 };
}
var SEt,
  KPr = j(() => {
    "use strict";
    yEt();
    UOe();
    SEt = class extends Error {
      constructor() {
        super(
          "This account requires setting the GOOGLE_CLOUD_PROJECT env var. See https://goo.gle/iflow-cli-auth-docs#workspace-gca",
        );
      }
    };
  });
function kAo(t) {
  bte = { ...bte, ...t };
}
function OAo() {
  return bte;
}
async function JPr(t) {
  try {
    let { event_name: e, payload: r } = t,
      n = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(r) },
      o = await fetch(`${bte.endpoint}/${e}`, n);
    return o.ok ? { success: !0 } : { success: !1, error: `upload failed: ${o.status} ${o.statusText}` };
  } catch (e) {
    return {
      success: !1,
      error: `Failed to upload data to ${bte.endpoint}: ${e instanceof Error ? e.message : String(e)}`,
    };
  }
}
async function Q3e(t, e) {
  return NAo.record(t, e);
}
var bte,
  $Oe,
  NAo,
  wEt = j(() => {
    "use strict";
    bte = { endpoint: "https://gm.mmstat.com" };
    (($Oe = class {
      async record(e, r) {
        let n = { event_name: e, payload: { gmkey: r.gmkey, gokey: this.stringifyGokey(r.gokey) } };
        return await JPr(n);
      }
      stringifyGokey(e) {
        return Object.entries(e)
          .map(([r, n]) => (n == null ? `${r}=` : `${r}=${encodeURIComponent(String(n))}`))
          .join("&");
      }
    }),
      (NAo = new $Oe()));
  });
import { randomUUID as PAo } from "crypto";
function BAo() {
  function t(u, c) {
    return Math.floor(Math.random() * (c - u + 1)) + u;
  }
  var e,
    r,
    n,
    o = [
      { first: [1, 9], second: [0, 255], third: [0, 255], fourth: [1, 254] },
      { first: [11, 126], second: [0, 255], third: [0, 255], fourth: [1, 254] },
      { first: [128, 169], second: [0, 253], third: [0, 255], fourth: [1, 254] },
      { first: [169, 169], second: [255, 255], third: [0, 255], fourth: [1, 254] },
      { first: [170, 172], second: [0, 15], third: [0, 255], fourth: [1, 254] },
      { first: [172, 172], second: [32, 255], third: [0, 255], fourth: [1, 254] },
      { first: [173, 192], second: [0, 167], third: [0, 255], fourth: [1, 254] },
      { first: [192, 192], second: [169, 255], third: [0, 255], fourth: [1, 254] },
      { first: [193, 223], second: [0, 255], third: [0, 255], fourth: [1, 254] },
    ],
    s = o[Math.floor(Math.random() * o.length)],
    a = t(s.first[0], s.first[1]);
  return (
    (e =
      a === 169
        ? s.second[0] === 255
          ? 255
          : t(s.second[0], s.second[1])
        : a === 172
          ? s.second[0] === 32
            ? t(32, 255)
            : t(s.second[0], s.second[1])
          : a === 192 && s.second[0] === 169
            ? t(169, 255)
            : t(s.second[0], s.second[1])),
    (r = t(s.third[0], s.third[1])),
    (n = t(s.fourth[0], s.fourth[1])),
    [a, e, r, n].join(".")
  );
}
function LAo(t) {
  for (var e = t.split("."), r = "", n = 0; n < e.length; n++) {
    var o = e[n],
      s = parseInt(o).toString(16);
    r += s.length === 1 ? "0" + s : s;
  }
  return r;
}
function MAo() {
  return new Date().getTime();
}
function FAo() {
  var t = 9e3,
    e = 1e3,
    r = e,
    n = BAo(),
    o = MAo(),
    s = LAo(n),
    a = "d",
    u = "51fc",
    c = s + o + r + a + u;
  return (r++, r > t && (r = e), c);
}
function UAo(t) {
  for (var e = new Array(t), r = "0123456789abcdef", n = 0; n < t; n++)
    e[n] === void 0 && (e[n] = r[Math.floor(Math.random() * r.length)]);
  return e.join("");
}
function XPr() {
  return FAo() + "00";
}
function Ate() {
  return UAo(16);
}
function jOe() {
  return PAo();
}
var xEt = j(() => {
  "use strict";
});
var ZPr,
  eBr = j(() => {
    ZPr = typeof globalThis == "object" ? globalThis : global;
  });
var tBr = j(() => {
  eBr();
});
var rBr = j(() => {
  tBr();
});
var ER,
  TEt = j(() => {
    ER = "1.9.0";
  });
function $Ao(t) {
  var e = new Set([t]),
    r = new Set(),
    n = t.match(nBr);
  if (!n)
    return function () {
      return !1;
    };
  var o = { major: +n[1], minor: +n[2], patch: +n[3], prerelease: n[4] };
  if (o.prerelease != null)
    return function (c) {
      return c === t;
    };
  function s(u) {
    return (r.add(u), !1);
  }
  function a(u) {
    return (e.add(u), !0);
  }
  return function (c) {
    if (e.has(c)) return !0;
    if (r.has(c)) return !1;
    var m = c.match(nBr);
    if (!m) return s(c);
    var d = { major: +m[1], minor: +m[2], patch: +m[3], prerelease: m[4] };
    return d.prerelease != null || o.major !== d.major
      ? s(c)
      : o.major === 0
        ? o.minor === d.minor && o.patch <= d.patch
          ? a(c)
          : s(c)
        : o.minor <= d.minor
          ? a(c)
          : s(c);
  };
}
var nBr,
  iBr,
  oBr = j(() => {
    TEt();
    nBr = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
    iBr = $Ao(ER);
  });
function px(t, e, r, n) {
  var o;
  n === void 0 && (n = !1);
  var s = (q3e[G3e] = (o = q3e[G3e]) !== null && o !== void 0 ? o : { version: ER });
  if (!n && s[t]) {
    var a = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + t);
    return (r.error(a.stack || a.message), !1);
  }
  if (s.version !== ER) {
    var a = new Error(
      "@opentelemetry/api: Registration of version v" +
        s.version +
        " for " +
        t +
        " does not match previously registered API v" +
        ER,
    );
    return (r.error(a.stack || a.message), !1);
  }
  return ((s[t] = e), r.debug("@opentelemetry/api: Registered a global for " + t + " v" + ER + "."), !0);
}
function s6(t) {
  var e,
    r,
    n = (e = q3e[G3e]) === null || e === void 0 ? void 0 : e.version;
  if (!(!n || !iBr(n))) return (r = q3e[G3e]) === null || r === void 0 ? void 0 : r[t];
}
function hx(t, e) {
  e.debug("@opentelemetry/api: Unregistering a global for " + t + " v" + ER + ".");
  var r = q3e[G3e];
  r && delete r[t];
}
var jAo,
  G3e,
  q3e,
  NG = j(() => {
    rBr();
    TEt();
    oBr();
    ((jAo = ER.split(".")[0]), (G3e = Symbol.for("opentelemetry.js.api." + jAo)), (q3e = ZPr));
  });
function H3e(t, e, r) {
  var n = s6("diag");
  if (n) return (r.unshift(e), n[t].apply(n, GAo([], QAo(r), !1)));
}
var QAo,
  GAo,
  sBr,
  aBr = j(() => {
    NG();
    ((QAo = function (t, e) {
      var r = typeof Symbol == "function" && t[Symbol.iterator];
      if (!r) return t;
      var n = r.call(t),
        o,
        s = [],
        a;
      try {
        for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; ) s.push(o.value);
      } catch (u) {
        a = { error: u };
      } finally {
        try {
          o && !o.done && (r = n.return) && r.call(n);
        } finally {
          if (a) throw a.error;
        }
      }
      return s;
    }),
      (GAo = function (t, e, r) {
        if (r || arguments.length === 2)
          for (var n = 0, o = e.length, s; n < o; n++)
            (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), (s[n] = e[n]));
        return t.concat(s || Array.prototype.slice.call(e));
      }),
      (sBr = (function () {
        function t(e) {
          this._namespace = e.namespace || "DiagComponentLogger";
        }
        return (
          (t.prototype.debug = function () {
            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return H3e("debug", this._namespace, e);
          }),
          (t.prototype.error = function () {
            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return H3e("error", this._namespace, e);
          }),
          (t.prototype.info = function () {
            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return H3e("info", this._namespace, e);
          }),
          (t.prototype.warn = function () {
            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return H3e("warn", this._namespace, e);
          }),
          (t.prototype.verbose = function () {
            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return H3e("verbose", this._namespace, e);
          }),
          t
        );
      })()));
  });
var kf,
  QOe = j(() => {
    (function (t) {
      ((t[(t.NONE = 0)] = "NONE"),
        (t[(t.ERROR = 30)] = "ERROR"),
        (t[(t.WARN = 50)] = "WARN"),
        (t[(t.INFO = 60)] = "INFO"),
        (t[(t.DEBUG = 70)] = "DEBUG"),
        (t[(t.VERBOSE = 80)] = "VERBOSE"),
        (t[(t.ALL = 9999)] = "ALL"));
    })(kf || (kf = {}));
  });
function uBr(t, e) {
  (t < kf.NONE ? (t = kf.NONE) : t > kf.ALL && (t = kf.ALL), (e = e || {}));
  function r(n, o) {
    var s = e[n];
    return typeof s == "function" && t >= o ? s.bind(e) : function () {};
  }
  return {
    error: r("error", kf.ERROR),
    warn: r("warn", kf.WARN),
    info: r("info", kf.INFO),
    debug: r("debug", kf.DEBUG),
    verbose: r("verbose", kf.VERBOSE),
  };
}
var cBr = j(() => {
  QOe();
});
var qAo,
  HAo,
  VAo,
  Ab,
  PG = j(() => {
    aBr();
    cBr();
    QOe();
    NG();
    ((qAo = function (t, e) {
      var r = typeof Symbol == "function" && t[Symbol.iterator];
      if (!r) return t;
      var n = r.call(t),
        o,
        s = [],
        a;
      try {
        for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; ) s.push(o.value);
      } catch (u) {
        a = { error: u };
      } finally {
        try {
          o && !o.done && (r = n.return) && r.call(n);
        } finally {
          if (a) throw a.error;
        }
      }
      return s;
    }),
      (HAo = function (t, e, r) {
        if (r || arguments.length === 2)
          for (var n = 0, o = e.length, s; n < o; n++)
            (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), (s[n] = e[n]));
        return t.concat(s || Array.prototype.slice.call(e));
      }),
      (VAo = "diag"),
      (Ab = (function () {
        function t() {
          function e(o) {
            return function () {
              for (var s = [], a = 0; a < arguments.length; a++) s[a] = arguments[a];
              var u = s6("diag");
              if (u) return u[o].apply(u, HAo([], qAo(s), !1));
            };
          }
          var r = this,
            n = function (o, s) {
              var a, u, c;
              if ((s === void 0 && (s = { logLevel: kf.INFO }), o === r)) {
                var m = new Error(
                  "Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation",
                );
                return (r.error((a = m.stack) !== null && a !== void 0 ? a : m.message), !1);
              }
              typeof s == "number" && (s = { logLevel: s });
              var d = s6("diag"),
                f = uBr((u = s.logLevel) !== null && u !== void 0 ? u : kf.INFO, o);
              if (d && !s.suppressOverrideMessage) {
                var p = (c = new Error().stack) !== null && c !== void 0 ? c : "<failed to generate stacktrace>";
                (d.warn("Current logger will be overwritten from " + p),
                  f.warn("Current logger will overwrite one already registered from " + p));
              }
              return px("diag", f, r, !0);
            };
          ((r.setLogger = n),
            (r.disable = function () {
              hx(VAo, r);
            }),
            (r.createComponentLogger = function (o) {
              return new sBr(o);
            }),
            (r.verbose = e("verbose")),
            (r.debug = e("debug")),
            (r.info = e("info")),
            (r.warn = e("warn")),
            (r.error = e("error")));
        }
        return (
          (t.instance = function () {
            return (this._instance || (this._instance = new t()), this._instance);
          }),
          t
        );
      })()));
  });
var WAo,
  zAo,
  lBr,
  mBr = j(() => {
    ((WAo = function (t, e) {
      var r = typeof Symbol == "function" && t[Symbol.iterator];
      if (!r) return t;
      var n = r.call(t),
        o,
        s = [],
        a;
      try {
        for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; ) s.push(o.value);
      } catch (u) {
        a = { error: u };
      } finally {
        try {
          o && !o.done && (r = n.return) && r.call(n);
        } finally {
          if (a) throw a.error;
        }
      }
      return s;
    }),
      (zAo = function (t) {
        var e = typeof Symbol == "function" && Symbol.iterator,
          r = e && t[e],
          n = 0;
        if (r) return r.call(t);
        if (t && typeof t.length == "number")
          return {
            next: function () {
              return (t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t });
            },
          };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }),
      (lBr = (function () {
        function t(e) {
          this._entries = e ? new Map(e) : new Map();
        }
        return (
          (t.prototype.getEntry = function (e) {
            var r = this._entries.get(e);
            if (r) return Object.assign({}, r);
          }),
          (t.prototype.getAllEntries = function () {
            return Array.from(this._entries.entries()).map(function (e) {
              var r = WAo(e, 2),
                n = r[0],
                o = r[1];
              return [n, o];
            });
          }),
          (t.prototype.setEntry = function (e, r) {
            var n = new t(this._entries);
            return (n._entries.set(e, r), n);
          }),
          (t.prototype.removeEntry = function (e) {
            var r = new t(this._entries);
            return (r._entries.delete(e), r);
          }),
          (t.prototype.removeEntries = function () {
            for (var e, r, n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
            var s = new t(this._entries);
            try {
              for (var a = zAo(n), u = a.next(); !u.done; u = a.next()) {
                var c = u.value;
                s._entries.delete(c);
              }
            } catch (m) {
              e = { error: m };
            } finally {
              try {
                u && !u.done && (r = a.return) && r.call(a);
              } finally {
                if (e) throw e.error;
              }
            }
            return s;
          }),
          (t.prototype.clear = function () {
            return new t();
          }),
          t
        );
      })()));
  });
var dBr,
  fBr = j(() => {
    dBr = Symbol("BaggageEntryMetadata");
  });
function pBr(t) {
  return (t === void 0 && (t = {}), new lBr(new Map(Object.entries(t))));
}
function hBr(t) {
  return (
    typeof t != "string" && (YAo.error("Cannot create baggage metadata from unknown type: " + typeof t), (t = "")),
    {
      __TYPE__: dBr,
      toString: function () {
        return t;
      },
    }
  );
}
var YAo,
  DEt = j(() => {
    PG();
    mBr();
    fBr();
    YAo = Ab.instance();
  });
function yte(t) {
  return Symbol.for(t);
}
var KAo,
  GOe,
  V3e = j(() => {
    ((KAo = (function () {
      function t(e) {
        var r = this;
        ((r._currentContext = e ? new Map(e) : new Map()),
          (r.getValue = function (n) {
            return r._currentContext.get(n);
          }),
          (r.setValue = function (n, o) {
            var s = new t(r._currentContext);
            return (s._currentContext.set(n, o), s);
          }),
          (r.deleteValue = function (n) {
            var o = new t(r._currentContext);
            return (o._currentContext.delete(n), o);
          }));
      }
      return t;
    })()),
      (GOe = new KAo()));
  });
var IEt,
  W3e,
  gBr = j(() => {
    ((IEt = [
      { n: "error", c: "error" },
      { n: "warn", c: "warn" },
      { n: "info", c: "info" },
      { n: "debug", c: "debug" },
      { n: "verbose", c: "trace" },
    ]),
      (W3e = (function () {
        function t() {
          function e(n) {
            return function () {
              for (var o = [], s = 0; s < arguments.length; s++) o[s] = arguments[s];
              if (console) {
                var a = console[n];
                if ((typeof a != "function" && (a = console.log), typeof a == "function")) return a.apply(console, o);
              }
            };
          }
          for (var r = 0; r < IEt.length; r++) this[IEt[r].n] = e(IEt[r].c);
        }
        return t;
      })()));
  });
function bBr() {
  return kEt;
}
var BG,
  JAo,
  qOe,
  XAo,
  ZAo,
  e2o,
  t2o,
  REt,
  r2o,
  n2o,
  i2o,
  kEt,
  o2o,
  s2o,
  a2o,
  u2o,
  c2o,
  l2o,
  m2o,
  OEt = j(() => {
    ((BG = (function () {
      var t = function (e, r) {
        return (
          (t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, o) {
                n.__proto__ = o;
              }) ||
            function (n, o) {
              for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
            }),
          t(e, r)
        );
      };
      return function (e, r) {
        if (typeof r != "function" && r !== null)
          throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
        t(e, r);
        function n() {
          this.constructor = e;
        }
        e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
      };
    })()),
      (JAo = (function () {
        function t() {}
        return (
          (t.prototype.createGauge = function (e, r) {
            return s2o;
          }),
          (t.prototype.createHistogram = function (e, r) {
            return a2o;
          }),
          (t.prototype.createCounter = function (e, r) {
            return o2o;
          }),
          (t.prototype.createUpDownCounter = function (e, r) {
            return u2o;
          }),
          (t.prototype.createObservableGauge = function (e, r) {
            return l2o;
          }),
          (t.prototype.createObservableCounter = function (e, r) {
            return c2o;
          }),
          (t.prototype.createObservableUpDownCounter = function (e, r) {
            return m2o;
          }),
          (t.prototype.addBatchObservableCallback = function (e, r) {}),
          (t.prototype.removeBatchObservableCallback = function (e) {}),
          t
        );
      })()),
      (qOe = (function () {
        function t() {}
        return t;
      })()),
      (XAo = (function (t) {
        BG(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return ((e.prototype.add = function (r, n) {}), e);
      })(qOe)),
      (ZAo = (function (t) {
        BG(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return ((e.prototype.add = function (r, n) {}), e);
      })(qOe)),
      (e2o = (function (t) {
        BG(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return ((e.prototype.record = function (r, n) {}), e);
      })(qOe)),
      (t2o = (function (t) {
        BG(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return ((e.prototype.record = function (r, n) {}), e);
      })(qOe)),
      (REt = (function () {
        function t() {}
        return ((t.prototype.addCallback = function (e) {}), (t.prototype.removeCallback = function (e) {}), t);
      })()),
      (r2o = (function (t) {
        BG(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return e;
      })(REt)),
      (n2o = (function (t) {
        BG(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return e;
      })(REt)),
      (i2o = (function (t) {
        BG(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return e;
      })(REt)),
      (kEt = new JAo()),
      (o2o = new XAo()),
      (s2o = new e2o()),
      (a2o = new t2o()),
      (u2o = new ZAo()),
      (c2o = new r2o()),
      (l2o = new n2o()),
      (m2o = new i2o()));
  });
var ia,
  ABr = j(() => {
    (function (t) {
      ((t[(t.INT = 0)] = "INT"), (t[(t.DOUBLE = 1)] = "DOUBLE"));
    })(ia || (ia = {}));
  });
var HOe,
  VOe,
  NEt = j(() => {
    ((HOe = {
      get: function (t, e) {
        if (t != null) return t[e];
      },
      keys: function (t) {
        return t == null ? [] : Object.keys(t);
      },
    }),
      (VOe = {
        set: function (t, e, r) {
          t != null && (t[e] = r);
        },
      }));
  });
var d2o,
  f2o,
  yBr,
  _Br = j(() => {
    V3e();
    ((d2o = function (t, e) {
      var r = typeof Symbol == "function" && t[Symbol.iterator];
      if (!r) return t;
      var n = r.call(t),
        o,
        s = [],
        a;
      try {
        for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; ) s.push(o.value);
      } catch (u) {
        a = { error: u };
      } finally {
        try {
          o && !o.done && (r = n.return) && r.call(n);
        } finally {
          if (a) throw a.error;
        }
      }
      return s;
    }),
      (f2o = function (t, e, r) {
        if (r || arguments.length === 2)
          for (var n = 0, o = e.length, s; n < o; n++)
            (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), (s[n] = e[n]));
        return t.concat(s || Array.prototype.slice.call(e));
      }),
      (yBr = (function () {
        function t() {}
        return (
          (t.prototype.active = function () {
            return GOe;
          }),
          (t.prototype.with = function (e, r, n) {
            for (var o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
            return r.call.apply(r, f2o([n], d2o(o), !1));
          }),
          (t.prototype.bind = function (e, r) {
            return r;
          }),
          (t.prototype.enable = function () {
            return this;
          }),
          (t.prototype.disable = function () {
            return this;
          }),
          t
        );
      })()));
  });
var p2o,
  h2o,
  PEt,
  g2o,
  vB,
  z3e = j(() => {
    _Br();
    NG();
    PG();
    ((p2o = function (t, e) {
      var r = typeof Symbol == "function" && t[Symbol.iterator];
      if (!r) return t;
      var n = r.call(t),
        o,
        s = [],
        a;
      try {
        for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; ) s.push(o.value);
      } catch (u) {
        a = { error: u };
      } finally {
        try {
          o && !o.done && (r = n.return) && r.call(n);
        } finally {
          if (a) throw a.error;
        }
      }
      return s;
    }),
      (h2o = function (t, e, r) {
        if (r || arguments.length === 2)
          for (var n = 0, o = e.length, s; n < o; n++)
            (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), (s[n] = e[n]));
        return t.concat(s || Array.prototype.slice.call(e));
      }),
      (PEt = "context"),
      (g2o = new yBr()),
      (vB = (function () {
        function t() {}
        return (
          (t.getInstance = function () {
            return (this._instance || (this._instance = new t()), this._instance);
          }),
          (t.prototype.setGlobalContextManager = function (e) {
            return px(PEt, e, Ab.instance());
          }),
          (t.prototype.active = function () {
            return this._getContextManager().active();
          }),
          (t.prototype.with = function (e, r, n) {
            for (var o, s = [], a = 3; a < arguments.length; a++) s[a - 3] = arguments[a];
            return (o = this._getContextManager()).with.apply(o, h2o([e, r, n], p2o(s), !1));
          }),
          (t.prototype.bind = function (e, r) {
            return this._getContextManager().bind(e, r);
          }),
          (t.prototype._getContextManager = function () {
            return s6(PEt) || g2o;
          }),
          (t.prototype.disable = function () {
            (this._getContextManager().disable(), hx(PEt, Ab.instance()));
          }),
          t
        );
      })()));
  });
var _te,
  BEt = j(() => {
    (function (t) {
      ((t[(t.NONE = 0)] = "NONE"), (t[(t.SAMPLED = 1)] = "SAMPLED"));
    })(_te || (_te = {}));
  });
var Y3e,
  K3e,
  WOe,
  zOe = j(() => {
    BEt();
    ((Y3e = "0000000000000000"),
      (K3e = "00000000000000000000000000000000"),
      (WOe = { traceId: K3e, spanId: Y3e, traceFlags: _te.NONE }));
  });
var CB,
  YOe = j(() => {
    zOe();
    CB = (function () {
      function t(e) {
        (e === void 0 && (e = WOe), (this._spanContext = e));
      }
      return (
        (t.prototype.spanContext = function () {
          return this._spanContext;
        }),
        (t.prototype.setAttribute = function (e, r) {
          return this;
        }),
        (t.prototype.setAttributes = function (e) {
          return this;
        }),
        (t.prototype.addEvent = function (e, r) {
          return this;
        }),
        (t.prototype.addLink = function (e) {
          return this;
        }),
        (t.prototype.addLinks = function (e) {
          return this;
        }),
        (t.prototype.setStatus = function (e) {
          return this;
        }),
        (t.prototype.updateName = function (e) {
          return this;
        }),
        (t.prototype.end = function (e) {}),
        (t.prototype.isRecording = function () {
          return !1;
        }),
        (t.prototype.recordException = function (e, r) {}),
        t
      );
    })();
  });
function KOe(t) {
  return t.getValue(LEt) || void 0;
}
function EBr() {
  return KOe(vB.getInstance().active());
}
function J3e(t, e) {
  return t.setValue(LEt, e);
}
function vBr(t) {
  return t.deleteValue(LEt);
}
function CBr(t, e) {
  return J3e(t, new CB(e));
}
function JOe(t) {
  var e;
  return (e = KOe(t)) === null || e === void 0 ? void 0 : e.spanContext();
}
var LEt,
  MEt = j(() => {
    V3e();
    YOe();
    z3e();
    LEt = yte("OpenTelemetry Context Key SPAN");
  });
function FEt(t) {
  return b2o.test(t) && t !== K3e;
}
function UEt(t) {
  return A2o.test(t) && t !== Y3e;
}
function Ete(t) {
  return FEt(t.traceId) && UEt(t.spanId);
}
function SBr(t) {
  return new CB(t);
}
var b2o,
  A2o,
  XOe = j(() => {
    zOe();
    YOe();
    ((b2o = /^([0-9a-f]{32})$/i), (A2o = /^[0-9a-f]{16}$/i));
  });
function y2o(t) {
  return (
    typeof t == "object" &&
    typeof t.spanId == "string" &&
    typeof t.traceId == "string" &&
    typeof t.traceFlags == "number"
  );
}
var $Et,
  ZOe,
  jEt = j(() => {
    z3e();
    MEt();
    YOe();
    XOe();
    (($Et = vB.getInstance()),
      (ZOe = (function () {
        function t() {}
        return (
          (t.prototype.startSpan = function (e, r, n) {
            n === void 0 && (n = $Et.active());
            var o = !!r?.root;
            if (o) return new CB();
            var s = n && JOe(n);
            return y2o(s) && Ete(s) ? new CB(s) : new CB();
          }),
          (t.prototype.startActiveSpan = function (e, r, n, o) {
            var s, a, u;
            if (!(arguments.length < 2)) {
              arguments.length === 2
                ? (u = r)
                : arguments.length === 3
                  ? ((s = r), (u = n))
                  : ((s = r), (a = n), (u = o));
              var c = a ?? $Et.active(),
                m = this.startSpan(e, s, c),
                d = J3e(c, m);
              return $Et.with(d, u, void 0, m);
            }
          }),
          t
        );
      })()));
  });
var _2o,
  eNe,
  QEt = j(() => {
    jEt();
    ((_2o = new ZOe()),
      (eNe = (function () {
        function t(e, r, n, o) {
          ((this._provider = e), (this.name = r), (this.version = n), (this.options = o));
        }
        return (
          (t.prototype.startSpan = function (e, r, n) {
            return this._getTracer().startSpan(e, r, n);
          }),
          (t.prototype.startActiveSpan = function (e, r, n, o) {
            var s = this._getTracer();
            return Reflect.apply(s.startActiveSpan, s, arguments);
          }),
          (t.prototype._getTracer = function () {
            if (this._delegate) return this._delegate;
            var e = this._provider.getDelegateTracer(this.name, this.version, this.options);
            return e ? ((this._delegate = e), this._delegate) : _2o;
          }),
          t
        );
      })()));
  });
var wBr,
  xBr = j(() => {
    jEt();
    wBr = (function () {
      function t() {}
      return (
        (t.prototype.getTracer = function (e, r, n) {
          return new ZOe();
        }),
        t
      );
    })();
  });
var E2o,
  X3e,
  GEt = j(() => {
    QEt();
    xBr();
    ((E2o = new wBr()),
      (X3e = (function () {
        function t() {}
        return (
          (t.prototype.getTracer = function (e, r, n) {
            var o;
            return (o = this.getDelegateTracer(e, r, n)) !== null && o !== void 0 ? o : new eNe(this, e, r, n);
          }),
          (t.prototype.getDelegate = function () {
            var e;
            return (e = this._delegate) !== null && e !== void 0 ? e : E2o;
          }),
          (t.prototype.setDelegate = function (e) {
            this._delegate = e;
          }),
          (t.prototype.getDelegateTracer = function (e, r, n) {
            var o;
            return (o = this._delegate) === null || o === void 0 ? void 0 : o.getTracer(e, r, n);
          }),
          t
        );
      })()));
  });
var tNe,
  TBr = j(() => {
    (function (t) {
      ((t[(t.NOT_RECORD = 0)] = "NOT_RECORD"),
        (t[(t.RECORD = 1)] = "RECORD"),
        (t[(t.RECORD_AND_SAMPLED = 2)] = "RECORD_AND_SAMPLED"));
    })(tNe || (tNe = {}));
  });
var rNe,
  DBr = j(() => {
    (function (t) {
      ((t[(t.INTERNAL = 0)] = "INTERNAL"),
        (t[(t.SERVER = 1)] = "SERVER"),
        (t[(t.CLIENT = 2)] = "CLIENT"),
        (t[(t.PRODUCER = 3)] = "PRODUCER"),
        (t[(t.CONSUMER = 4)] = "CONSUMER"));
    })(rNe || (rNe = {}));
  });
var __,
  IBr = j(() => {
    (function (t) {
      ((t[(t.UNSET = 0)] = "UNSET"), (t[(t.OK = 1)] = "OK"), (t[(t.ERROR = 2)] = "ERROR"));
    })(__ || (__ = {}));
  });
function RBr(t) {
  return S2o.test(t);
}
function kBr(t) {
  return w2o.test(t) && !x2o.test(t);
}
var qEt,
  v2o,
  C2o,
  S2o,
  w2o,
  x2o,
  OBr = j(() => {
    ((qEt = "[_0-9a-z-*/]"),
      (v2o = "[a-z]" + qEt + "{0,255}"),
      (C2o = "[a-z0-9]" + qEt + "{0,240}@[a-z]" + qEt + "{0,13}"),
      (S2o = new RegExp("^(?:" + v2o + "|" + C2o + ")$")),
      (w2o = /^[ -~]{0,255}[!-~]$/),
      (x2o = /,|=/));
  });
var NBr,
  T2o,
  PBr,
  BBr,
  LBr,
  MBr = j(() => {
    OBr();
    ((NBr = 32),
      (T2o = 512),
      (PBr = ","),
      (BBr = "="),
      (LBr = (function () {
        function t(e) {
          ((this._internalState = new Map()), e && this._parse(e));
        }
        return (
          (t.prototype.set = function (e, r) {
            var n = this._clone();
            return (n._internalState.has(e) && n._internalState.delete(e), n._internalState.set(e, r), n);
          }),
          (t.prototype.unset = function (e) {
            var r = this._clone();
            return (r._internalState.delete(e), r);
          }),
          (t.prototype.get = function (e) {
            return this._internalState.get(e);
          }),
          (t.prototype.serialize = function () {
            var e = this;
            return this._keys()
              .reduce(function (r, n) {
                return (r.push(n + BBr + e.get(n)), r);
              }, [])
              .join(PBr);
          }),
          (t.prototype._parse = function (e) {
            e.length > T2o ||
              ((this._internalState = e
                .split(PBr)
                .reverse()
                .reduce(function (r, n) {
                  var o = n.trim(),
                    s = o.indexOf(BBr);
                  if (s !== -1) {
                    var a = o.slice(0, s),
                      u = o.slice(s + 1, n.length);
                    RBr(a) && kBr(u) && r.set(a, u);
                  }
                  return r;
                }, new Map())),
              this._internalState.size > NBr &&
                (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, NBr))));
          }),
          (t.prototype._keys = function () {
            return Array.from(this._internalState.keys()).reverse();
          }),
          (t.prototype._clone = function () {
            var e = new t();
            return ((e._internalState = new Map(this._internalState)), e);
          }),
          t
        );
      })()));
  });
function FBr(t) {
  return new LBr(t);
}
var UBr = j(() => {
  MBr();
});
var K3,
  $Br = j(() => {
    z3e();
    K3 = vB.getInstance();
  });
var n1,
  jBr = j(() => {
    PG();
    n1 = Ab.instance();
  });
var D2o,
  QBr,
  GBr = j(() => {
    OEt();
    ((D2o = (function () {
      function t() {}
      return (
        (t.prototype.getMeter = function (e, r, n) {
          return kEt;
        }),
        t
      );
    })()),
      (QBr = new D2o()));
  });
var HEt,
  qBr,
  HBr = j(() => {
    GBr();
    NG();
    PG();
    ((HEt = "metrics"),
      (qBr = (function () {
        function t() {}
        return (
          (t.getInstance = function () {
            return (this._instance || (this._instance = new t()), this._instance);
          }),
          (t.prototype.setGlobalMeterProvider = function (e) {
            return px(HEt, e, Ab.instance());
          }),
          (t.prototype.getMeterProvider = function () {
            return s6(HEt) || QBr;
          }),
          (t.prototype.getMeter = function (e, r, n) {
            return this.getMeterProvider().getMeter(e, r, n);
          }),
          (t.prototype.disable = function () {
            hx(HEt, Ab.instance());
          }),
          t
        );
      })()));
  });
var Z3e,
  VBr = j(() => {
    HBr();
    Z3e = qBr.getInstance();
  });
var WBr,
  zBr = j(() => {
    WBr = (function () {
      function t() {}
      return (
        (t.prototype.inject = function (e, r) {}),
        (t.prototype.extract = function (e, r) {
          return e;
        }),
        (t.prototype.fields = function () {
          return [];
        }),
        t
      );
    })();
  });
function WEt(t) {
  return t.getValue(VEt) || void 0;
}
function YBr() {
  return WEt(vB.getInstance().active());
}
function KBr(t, e) {
  return t.setValue(VEt, e);
}
function JBr(t) {
  return t.deleteValue(VEt);
}
var VEt,
  XBr = j(() => {
    z3e();
    V3e();
    VEt = yte("OpenTelemetry Baggage Key");
  });
var zEt,
  I2o,
  ZBr,
  eLr = j(() => {
    NG();
    zBr();
    NEt();
    XBr();
    DEt();
    PG();
    ((zEt = "propagation"),
      (I2o = new WBr()),
      (ZBr = (function () {
        function t() {
          ((this.createBaggage = pBr),
            (this.getBaggage = WEt),
            (this.getActiveBaggage = YBr),
            (this.setBaggage = KBr),
            (this.deleteBaggage = JBr));
        }
        return (
          (t.getInstance = function () {
            return (this._instance || (this._instance = new t()), this._instance);
          }),
          (t.prototype.setGlobalPropagator = function (e) {
            return px(zEt, e, Ab.instance());
          }),
          (t.prototype.inject = function (e, r, n) {
            return (n === void 0 && (n = VOe), this._getGlobalPropagator().inject(e, r, n));
          }),
          (t.prototype.extract = function (e, r, n) {
            return (n === void 0 && (n = HOe), this._getGlobalPropagator().extract(e, r, n));
          }),
          (t.prototype.fields = function () {
            return this._getGlobalPropagator().fields();
          }),
          (t.prototype.disable = function () {
            hx(zEt, Ab.instance());
          }),
          (t.prototype._getGlobalPropagator = function () {
            return s6(zEt) || I2o;
          }),
          t
        );
      })()));
  });
var YEt,
  tLr = j(() => {
    eLr();
    YEt = ZBr.getInstance();
  });
var KEt,
  rLr,
  nLr = j(() => {
    NG();
    GEt();
    XOe();
    MEt();
    PG();
    ((KEt = "trace"),
      (rLr = (function () {
        function t() {
          ((this._proxyTracerProvider = new X3e()),
            (this.wrapSpanContext = SBr),
            (this.isSpanContextValid = Ete),
            (this.deleteSpan = vBr),
            (this.getSpan = KOe),
            (this.getActiveSpan = EBr),
            (this.getSpanContext = JOe),
            (this.setSpan = J3e),
            (this.setSpanContext = CBr));
        }
        return (
          (t.getInstance = function () {
            return (this._instance || (this._instance = new t()), this._instance);
          }),
          (t.prototype.setGlobalTracerProvider = function (e) {
            var r = px(KEt, this._proxyTracerProvider, Ab.instance());
            return (r && this._proxyTracerProvider.setDelegate(e), r);
          }),
          (t.prototype.getTracerProvider = function () {
            return s6(KEt) || this._proxyTracerProvider;
          }),
          (t.prototype.getTracer = function (e, r) {
            return this.getTracerProvider().getTracer(e, r);
          }),
          (t.prototype.disable = function () {
            (hx(KEt, Ab.instance()), (this._proxyTracerProvider = new X3e()));
          }),
          t
        );
      })()));
  });
var Qo,
  iLr = j(() => {
    nLr();
    Qo = rLr.getInstance();
  });
var cr = {};
Wi(cr, {
  DiagConsoleLogger: () => W3e,
  DiagLogLevel: () => kf,
  INVALID_SPANID: () => Y3e,
  INVALID_SPAN_CONTEXT: () => WOe,
  INVALID_TRACEID: () => K3e,
  ProxyTracer: () => eNe,
  ProxyTracerProvider: () => X3e,
  ROOT_CONTEXT: () => GOe,
  SamplingDecision: () => tNe,
  SpanKind: () => rNe,
  SpanStatusCode: () => __,
  TraceFlags: () => _te,
  ValueType: () => ia,
  baggageEntryMetadataFromString: () => hBr,
  context: () => K3,
  createContextKey: () => yte,
  createNoopMeter: () => bBr,
  createTraceState: () => FBr,
  default: () => R2o,
  defaultTextMapGetter: () => HOe,
  defaultTextMapSetter: () => VOe,
  diag: () => n1,
  isSpanContextValid: () => Ete,
  isValidSpanId: () => UEt,
  isValidTraceId: () => FEt,
  metrics: () => Z3e,
  propagation: () => YEt,
  trace: () => Qo,
});
var R2o,
  Zt = j(() => {
    DEt();
    V3e();
    gBr();
    QOe();
    OEt();
    ABr();
    NEt();
    QEt();
    GEt();
    TBr();
    DBr();
    IBr();
    BEt();
    UBr();
    XOe();
    zOe();
    $Br();
    jBr();
    VBr();
    tLr();
    iLr();
    R2o = { context: K3, diag: n1, metrics: Z3e, propagation: YEt, trace: Qo };
  });
var nNe,
  oLr = j(() => {
    nNe = class {
      _delegate;
      constructor(e) {
        this._delegate = e;
      }
      export(e, r) {
        this._delegate.export(e, r);
      }
      forceFlush() {
        return this._delegate.forceFlush();
      }
      shutdown() {
        return this._delegate.shutdown();
      }
    };
  });
var vR,
  iNe = j(() => {
    vR = class extends Error {
      code;
      name = "OTLPExporterError";
      data;
      constructor(e, r, n) {
        (super(e), (this.data = n), (this.code = r));
      }
    };
  });
function k2o(t) {
  if (Number.isFinite(t) && t > 0) return t;
  throw new Error(`Configuration: timeoutMillis is invalid, expected number greater than 0 (actual: '${t}')`);
}
function oNe(t) {
  if (t != null) return () => t;
}
function sNe(t, e, r) {
  return {
    timeoutMillis: k2o(t.timeoutMillis ?? e.timeoutMillis ?? r.timeoutMillis),
    concurrencyLimit: t.concurrencyLimit ?? e.concurrencyLimit ?? r.concurrencyLimit,
    compression: t.compression ?? e.compression ?? r.compression,
  };
}
function aNe() {
  return { timeoutMillis: 1e4, concurrencyLimit: 30, compression: "none" };
}
var ege = j(() => {});
var uNe,
  sLr = j(() => {
    (function (t) {
      ((t.NONE = "none"), (t.GZIP = "gzip"));
    })(uNe || (uNe = {}));
  });
function cNe(t) {
  return new JEt(t.concurrencyLimit);
}
var JEt,
  XEt = j(() => {
    JEt = class {
      _concurrencyLimit;
      _sendingPromises = [];
      constructor(e) {
        this._concurrencyLimit = e;
      }
      pushPromise(e) {
        if (this.hasReachedLimit()) throw new Error("Concurrency Limit reached");
        this._sendingPromises.push(e);
        let r = () => {
          let n = this._sendingPromises.indexOf(e);
          this._sendingPromises.splice(n, 1);
        };
        e.then(r, r);
      }
      hasReachedLimit() {
        return this._sendingPromises.length >= this._concurrencyLimit;
      }
      async awaitAll() {
        await Promise.all(this._sendingPromises);
      }
    };
  });