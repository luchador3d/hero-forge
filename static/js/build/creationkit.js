! function(e) {
    function t(r) { if (i[r]) return i[r].exports; var n = i[r] = { exports: {}, id: r, loaded: !1 }; return e[r].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports } var i = {}; return t.m = e, t.c = i, t.p = "static/js/build/", t(0) }([function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t.default = e, t }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function s(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function o(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var l = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        u = i(62),
        h = (n(u), i(30)),
        c = r(h),
        d = i(31),
        f = r(d),
        p = i(1),
        v = r(p),
        g = i(4),
        m = r(g),
        y = i(5),
        b = r(y),
        _ = i(23),
        w = r(_),
        k = i(41),
        S = r(k),
        E = i(2),
        M = r(E),
        C = i(8),
        T = r(C),
        P = i(7),
        x = r(P),
        O = i(3),
        R = r(O),
        D = i(39),
        j = r(D),
        A = i(9),
        I = r(A),
        U = i(11),
        L = r(U),
        B = i(15),
        F = r(B),
        H = i(61),
        N = r(H),
        V = i(42),
        z = r(V),
        G = i(27),
        K = r(G),
        q = i(51),
        W = r(q),
        J = i(26),
        X = r(J),
        Y = i(14),
        Q = r(Y),
        Z = i(10),
        ee = r(Z),
        te = i(25),
        ie = r(te),
        re = i(24),
        ne = r(re),
        ae = i(29),
        se = r(ae),
        oe = !1,
        le = function(e) {
            function t() { return a(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)) } return o(t, e), l(t, null, [{ key: "checkCompatibility", value: function() { return w.default.init(), w.default.specs } }, { key: "main", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                        i = this,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {};
                    v.default.initialized || console.error("Settings not initialized! Please call CK.Settings.init() before CK.main() "), this.loaded = !1; try { this.init() } catch (e) { return n("Error during initialization"), void b.default.exception("Initializing", e) } setTimeout(function() { i.loaded || b.default.exception("Timeout") }, 2e5), M.default.on("loadingProgress", e), M.default.on("exception", n), this.initData(function() { i.initCharacter(e, r, n), t() }, n) } }, { key: "initCharacter", value: function(e, t, i) { var r = this;
                    this.loadInitialCharacter(function() { M.default.off("loadingProgress", e), M.default.off("exception", i), r.loaded = !0, t(), N.default.init(), "specs" in w.default && ne.default.variables.report && b.default.sendGraphicsReport(), b.default.initTimeOnPage(), L.default.clear() }) } }, { key: "init", value: function() { R.default.init(), M.default.init(), L.default.init(), I.default.init(), T.default.init(), x.default.init(), j.default.init(), F.default.init(), this.initDisplay() } }, { key: "initData", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                    m.default.init(function() { void 0 !== e && e(), S.default.init() }, t), $(document).ready(function() { document.getElementById("character-canvas").appendChild(CK.domElement) }) } }]), t }(oe ? f.default : c.default);
    t.default = le, console.info("Creation Kit Build ", "2017-05-18T01:02:35.080Z"), window.CK = le, CK.Options = m.default, CK.Events = M.default, CK.Resources = T.default, CK.Paths = x.default, CK.Settings = v.default, CK.GameLoop = R.default, CK.ColorManager = j.default, CK.Materials = I.default, CK.User = F.default, CK.UserConfigs = N.default, CK.Reporting = b.default, CK.DebugRender = z.default, CK.Debug = S.default, CK.ColorMaterial = K.default, CK.EffectComposer = W.default, CK.EffectPass = X.default, CK.ClientSpecs = w.default, CK.SolidMaterial = Q.default, CK.MixerMesh = ee.default, CK.MixerBufferGeometry = ie.default, CK.Quadrant = se.default }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(24),
        o = r(s),
        l = function() {
            function e() { n(this, e) } return a(e, null, [{ key: "init", value: function(e) { o.default.init(), void 0 === e && console.error("Project settings undefined, using defaults"), this._initDefaults(), this._initUrlVariables(), this._initProjectSettings(e || {}), this._initUrlVariables(), this._defaultPartSettings = { guaranteedFormOverride: !1, additionalMaps: [], groundOffset: 0, bounds: void 0, allowMirror: !0 }, "undefined" != typeof ART_VERSION && ART_VERSION.indexOf("}") == -1 ? this.artVersionNumber = ART_VERSION : (console.error("Server has not set artVersionNumber"), this.artVersionNumber = 9999), this.initialized = !0 } }, { key: "_initDefaults", value: function() { this.debug = !1, this.color = !1, this.useJsonMeshFormat = !1, this.rez = "loRez", this.forge = !1, this.texturePath = "/static/herobundles/", this.thumbnailPath = "/static/herobundles/", this.meshBundlePath = "/static/herobundles/", this.freeCamera = !1, this.smokeTest = !1, this.normalMaps = !0, this.morphNormals = !1, this.thumbFormat = "png", this.compareHighLowMode = !1, this.forging = !1, this.physicalShader = !1, this.storeMeshes = !1, this.cached = !1, this.showMainMenu = !0, this.maxPolarAngle = void 0, this.minPolarAngle = void 0, this.cameraPosition = void 0, this.fixedCamera = !1, this.dragRotateMesh = !1, this.autoOpenSubMenu = !1, this.globalScale = 1, this.hasMainSkeleton = !0, this.remote = !1, this.hideDebug = !1, this.cameraOffset = !0, this.cameras = { default: { position: [0, 4.5, 1.9999], rotation: [-.9827, 0, 0], target: [0, 1.5, 0] } }, this.extraLoaders = {}, this.debugTestMesh = !1, this.showJoints = !1, this.lighting = "highContrast", this.productSlugParts = ["material", "scale"], this.userSettings = { occlusion: !0, morphids: !0, shadows: !0 }, this.morphids = !0, this.shadows = !0, this.fadeInNormals = !1, this.hideBackgroundForScreenshots = !1, this.hideBackgroundForThumbnails = !0, this.thumbnailSize = [300, 300], this.thumbnailHighAA = !1, this.thumbTransparency = !0, this.useEnvironmentMapInShader = !0, this.skeleton = {}, this.slots = {}, this.sliders = {}, this.editorLayout = {}, this.slotGroups = {}, this.projectName = "TestProject", this.projectLabel = "Test Project", this.googleAnalyticsId = "", this.prefix = "hf", this.bounds = [-2, -0, -2, 2, 3, 2], this.characterRotation = { x: 0, y: 0, z: 0 }, this.blankInitialConfig = !1, this.materialSims = { default: { diffuse: new THREE.Color(.73, .73, .73), roughness: .6, metalness: 0 } }, this.displacementScale = .1, this.addonKeywords = {}, this.forgeUsesHiRez = !0, this.defaultMenuItem = "Race", this.defaultFilter = "all", this.voxelCanvas = !1, this.configEditorMode = !1, this.configEditorSaveMeshes = !0, this.configEditorSaveColor = !1, this.configEditorSavePoseMode = !1, this.configEditorSaveDecals = !1, this.editorAccordionMode = !0, this.showPhotoBooth = !1, this.showEditor = !0, this.showModal = !0, this.showSaves = !0, this.groundPlane = !0, this.bloom = !1, this.occlusion = !1, this.text = { mobileNotSupported: "Mobile devices not supported yet.", browserMinimumRequirements: "Your browser currently does not meet the minimum requirements.", webgDisabled: "It appears 3D grahics (WebGL) are disabled on your device.", graphicsNotSupported: "Sorry, your graphics device is not supported yet.", loadingFailed: "Critical Miss!", somethingWentWrong: "Something went wrong!" }, this.showLoadingFailureSolutions = !0, this.showLoadingScreen = !0, this.requirements = {}, this.dataPath = "/hf_data/data.json", this.forgeDataPath = this.dataPath } }, { key: "getSlotSetting", value: function(e, t) { return e in this.slots && t in this.slots[e] ? this.slots[e][t] : t in this._defaultPartSettings ? this._defaultPartSettings[t] : void console.warn("Setting", t, "is not recognized") } }, { key: "_initProjectSettings", value: function(e) { for (var t in e) t in this ? (this[t] = e[t], "function" == typeof this[t] && (this[t] = this[t]())) : console.warn("Unrecoganized variable " + t + " found in project settings ") } }, { key: "_initUrlVariables", value: function() { for (var t in o.default.variables) t in e.userSettings && void 0 != this[t] && (this[t] = o.default.variables[t]) } }]), e }();
    t.default = l }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(3),
        o = r(s),
        l = function() {
            function e() { n(this, e) } return a(e, null, [{ key: "init", value: function() { var e = this;
                    this.triggers = {}, this.bucketedTriggers = {}, this.timedCallbacks = {}; var t = function(t) { e.bucketedTriggers[t] = [], o.default.register(function() { for (var i in e.bucketedTriggers[t]) e.bucketedTriggers[t][i]();
                            e.bucketedTriggers[t].length > 0 && (e.bucketedTriggers[t] = []) }, t) }; for (var i in o.default.buckets) t(i) } }, { key: "next", value: function(e, t) { this.on(e, t, 1) } }, { key: "on", value: function(e, t) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
                    e in this.triggers || (this.triggers[e] = []), this.triggers[e].push({ callback: t, count: i }) } }, { key: "remove", value: function(e) { delete this.triggers[e] } }, { key: "off", value: function(e, t) { if (e in this.triggers) { for (var i in this.triggers[e]) this.triggers[e][i] == t && this.triggers[e].splice(i, 1);
                        0 == this.triggers[e].length && delete this.triggers[e] } } }, { key: "emit", value: function(e, t) { var i = this,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0; if (e in this.triggers)
                        for (var n = function(n) { var s = i.triggers[e][n];
                                s.count--, void 0 === r ? s.callback(t) : i.bucketedTriggers[r].push(function() { return s.callback(t) }), 0 == s.count && i.triggers[e].splice(n--, 1), a = n }, a = 0; a < this.triggers[e].length; a++) n(a) } }]), e }();
    t.default = l }, function(e, t) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        n = function() {
            function e() { i(this, e) } return r(e, null, [{ key: "init", value: function() { this.buckets = { start: [], animation: [], postAnimation: [], render: [], preRender: [], postRender: [], end: [], postStart: [] }, this.paused = !0 } }, { key: "register", value: function(e, t) { this.buckets[t].push(e) } }, { key: "unregister", value: function(e, t) { for (var i in this.buckets[t])
                        if (this.buckets[t][i] == e) return void this.buckets[t].splice(i, 1) } }, { key: "_gameLoop", value: function() { var e = this; if (!this.paused) { for (var t in this.buckets.start) this.buckets.start[t](); for (var i in this.buckets.postStart) this.buckets.postStart[i](); if (this._needUpdateAnimations) { for (var r in this.buckets.animation) this.buckets.animation[r](); for (var n in this.buckets.postAnimation) this.buckets.postAnimation[n]();
                            this._needUpdateAnimations = !1 } if (this._needUpdateRender) { for (var a in this.buckets.preRender) this.buckets.preRender[a](); for (var s in this.buckets.render) this.buckets.render[s](); for (var o in this.buckets.postRender) this.buckets.postRender[o]();
                            this._needUpdateRender = !1 } for (var l in this.buckets.end) this.buckets.end[l]();
                        requestAnimationFrame(function() { e._gameLoop() }) } } }, { key: "start", value: function() { this.paused && (this.paused = !1, this._gameLoop()) } }, { key: "pause", value: function() { this.paused = !0 } }, { key: "requestAnimationRefresh", value: function() { this._needUpdateAnimations = !0, this.requestRenderRefresh() } }, { key: "requestRenderRefresh", value: function() { this._needUpdateRender = !0 } }]), e }();
    t.default = n }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(36),
        o = r(s),
        l = i(13),
        u = r(l),
        h = i(1),
        c = r(h),
        d = i(5),
        f = r(d),
        p = i(7),
        v = r(p),
        g = i(2),
        m = r(g),
        y = i(8),
        b = r(y),
        _ = i(20),
        w = r(_),
        k = i(15),
        S = r(k),
        E = function() {
            function e() { n(this, e) } return a(e, null, [{ key: "init", value: function(e, t) { var i = this;
                    this.loaded = !1, this.filtered = {}, delete localStorage[c.default.projectLabel + "_options"]; var r = [v.default.dataURL],
                        n = ["json"];
                    c.default.color && (r.push(v.default.paintPotImage), n.push("image")), b.default.getResources(r, n).then(function(r) { return i.tryProcessData(r, e, t) }) } }, { key: "tryProcessData", value: function(t, i, r) { void 0 === t[0] || void 0 === t[1] && c.default.color ? r("Could not load initial resources") : (e.processRawData(t[0]), c.default.color && e.processPaintImage(t[1]), this.loaded = !0, m.default.emit("optionsLoaded"), i()) } }, { key: "processPaintImage", value: function(e) { var t = document.createElement("canvas");
                    t.width = e.width, t.height = e.height; var i = t.getContext("2d");
                    i.drawImage(e, 0, 0); var r = i.getImageData(0, 0, t.width, t.height).data;
                    this.paintsByKey = {}; for (var n in this.paint) { var a = this.paint[n];
                        a.id = Number(n), a.gradient = (new w.default).fromArray(r, 8 * (a.id - 1) * 4); for (var s in a.keywords) s in this.paintsByKey || (this.paintsByKey[s] = []), this.paintsByKey[s].push(a) } } }, { key: "getPaint", value: function(e) { var t = this.paint[e]; return void 0 !== t ? t : void f.default.exception("Could not find paint id " + e) } }, { key: "processRawData", value: function(t) { for (var i in S.default.permissions) c.default.addonKeywords[i] = ["default"];
                    c.default.debug && console.info("Raw Options Data:", t), e.slots = t.slots, e.slotsById = e.processSlotsById(t.slots), e.parts = this.processParts(t.parts), e.products = t.products, e.decals = this.processDecals(t.decals), e.decalsBySlot = this._getBySlot(e.decals), e.mods = [], e.configs = t.configs, e.paint = t.paint, e._addonKeywords(e.parts); for (var r in this.configs) e._addonKeywords(e.configs[r]);
                    e._sortProductsBySlug(), e._sortPaintByKeyword(), e.partsBySlot = this._getBySlot(e.parts, !1), e._sortByKeywords(), this.slotFilters = {}, this.excludeSlotFilters = {}, this.applyFilter(c.default.defaultFilter), e.finished = !0 } }, { key: "processSlotsById", value: function(e) { var t = {}; for (var i in e) { var r = e[i];
                        t[r.slot_id] = r } return t } }, { key: "processDecals", value: function(e) { var t = {}; for (var i in e) t[i] = new u.default(e[i]); return t } }, { key: "processParts", value: function(e) { var t = {}; for (var i in e) void 0 !== e[i].link && e[i].slot.endsWith("L") && (e[i].keywords = e[e[i].link].keywords), t[i] = new o.default(e[i]); return t } }, { key: "_addonKeywords", value: function(e) { for (var t in e) { var i = e[t]; if ("keywords" in i)
                            for (var r in i.keywords)
                                if (r in c.default.addonKeywords)
                                    for (var n in c.default.addonKeywords[r]) { var a = c.default.addonKeywords[r][n];
                                        a in i.keywords || (i.keywords[a] = {}) } } } }, { key: "_getBySlot", value: function(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = {}; for (var r in e) e[r].slot in i || (i[e[r].slot] = []), i[e[r].slot].push(e[r]); if (t)
                        for (var n in i) this.sortItems(i[n]); return i } }, { key: "sortItems", value: function(e) { e.sort(function(e, t) { return e.display_order < t.display_order ? -1 : 1 }) } }, { key: "_sortProductsBySlug", value: function() { this.productsBySlug = {}; for (var t in e.products.price) { var i = e.products.price[t];
                        this.productsBySlug[i.slug] = i } } }, { key: "_sortPaintByKeyword", value: function() { e.paintsBykeyword = {}; for (var t in e.paint) { var i = e.paint[t];
                        i.id = t; for (var r in i.keywords) r in e.paintsBykeyword || (e.paintsBykeyword[r] = []), e.paintsBykeyword[r].push(i) } } }, { key: "getArchetype", value: function(t) { return "archetype" in e.configs && t in e.configs.archetype ? e.configs.archetype[t] : void console.warn("Archetype " + t + " not found!") } }, { key: "getPart", value: function(t) { return "string" == typeof t ? new o.default(this._getExternalPart(t)) : t in e.parts ? e.parts[t] : void f.default.exception("Failed to find part id " + t) } }, { key: "getRawPart", value: function(e) { return e in this.parts ? this.parts[e] : void f.default.exception("Could not find part id " + e) } }, { key: "getSlot", value: function(t) { var i = e.slots[t]; return void 0 === i && console.error(t + " not found in slots!"), i } }, { key: "getDecal", value: function(t) { var i = e.decals[t]; return void 0 === i && console.error("Decal" + t + " not found!"), i } }, { key: "getSlotFromId", value: function(t) { return t in e.parts ? e.parts[t].slot : void f.default.exception("Failed to find slot for part id " + t) } }, { key: "getPartBySlotAndName", value: function(e, t) { if (e in this.partsBySlot) { var i = this.partsBySlot[e]; for (var r in i) { var n = i[r]; if (n.name == t) return n } } } }, { key: "getMirroredDecal", value: function(e) { if (e in this.decals) { var t = this.decals[e],
                            i = t.slot; if (t.slot.endsWith("R")) i = i.substring(0, i.length - 1) + "L";
                        else { if (!t.slot.endsWith("L")) return t;
                            i = i.substring(0, i.length - 1) + "R" } return this.getDecalBySlotAndName(i, t.name) } } }, { key: "getDecalBySlotAndName", value: function(e, t) { return this._getBySlotAndName(e, t, this.decalsBySlot) } }, { key: "getRawPartBySlotAndName", value: function(e, t) { return this._getBySlotAndName(e, t, this.partsBySlot) } }, { key: "_getBySlotAndName", value: function(e, t, i) { if (e in i) { var r = i[e]; for (var n in r) { var a = r[n]; if (a.name == t) return a } } } }, { key: "getGiftCards", value: function() { return e.products.giftcard } }, { key: "_sortByKeywords", value: function() { this.configsByKey = {}; for (var e in this.configs) this.configsByKey[e] = this._groupByKeyword(this.configs[e]);
                    this.partsByKey = {}; for (var t in this.partsBySlot) this.partsByKey[t] = this._groupByKeyword(this.partsBySlot[t]) } }, { key: "_groupByKeyword", value: function(e) { var t = {},
                        i = void 0; for (var r in e)
                        if (i = e[r], "keywords" in i)
                            for (var n in i.keywords) n in t || (t[n] = []), t[n].push(i); return t } }, { key: "applyFilter", value: function(e) { e != this.filter && (this.filter = e, this.cacheAllFilters()) } }, { key: "cacheAllFilters", value: function() { this.filtered = {}; for (var e in { parts: void 0, configs: void 0 })
                        for (var t in this.slots) this._getFiltered(t, e) } }, { key: "applySlotFilter", value: function(e, t, i) { "string" == typeof t && (t = [t]), "string" == typeof i && (i = [i]), delete this.filtered[e], void 0 !== i && 0 != i.length ? this.excludeSlotFilters[e] = i : delete this.excludeSlotFilters[e], void 0 !== t && 0 != t.length ? this.slotFilters[e] = t : delete this.slotFilters[e] } }, { key: "clearSlotFilter", value: function(e) { delete this.filtered[e], delete this.slotFilters[e], delete this.excludeSlotFilters[e] } }, { key: "clearAllSlotFilters", value: function() { for (var e in this.slotFilters) delete this.filtered[e];
                    this.slotFilters = {}, this.excludeSlotFilters = {} } }, { key: "partExistsWithAllKeywords", value: function(e, t) { var i = this.partsByKey[e],
                        r = i[t[0]]; for (var n in r) { for (var a = r[n], s = !0, o = 1; o < t.length; o++)
                            if (!(t[o] in i) || i[t[o]].indexOf(a) == -1) { s = !1; break }
                        if (s) return !0 } return !1 } }, { key: "searchNounSlot", value: function(e, t, i) { var r = this;
                    delete this.filtered[e], $.ajax({ type: "GET", url: "/search_images/", data: t, success: function(t) { r._processReturnedNouns(t, e), i() }, error: function(e, t, i) { console.log(t, i) } }) } }, { key: "_processReturnedNouns", value: function(e, t) { c.default.debug && console.info("Search results:", e); for (var i = [], r = 0, n = e.length; r < n; r++) { var a = e[r].image;
                        i.push(this._getExternalPart(Object.keys(a)[0])) } this.filtered[t] = i } }, { key: "_getExternalPart", value: function(e) { return new o.default({ slot: "nouns", type: "voxels", name: "noun_" + e, id: e, mesh: 1 }) } }, { key: "_getFiltered", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "parts"; if (void 0 === this.filtered) return []; if (e in this.filtered) return this.filtered[e]; var i = "parts" == t ? this.partsByKey : this.configsByKey,
                        r = []; if (!(e in i)) return []; var n = i[e]; "default" in n && (r = r.concat(n.default)), this.filter in n && (r = r.concat(n[this.filter])); var a = [],
                        s = e in this.slotFilters ? this.slotFilters[e] : [],
                        o = e in this.excludeSlotFilters ? this.excludeSlotFilters[e] : []; if (0 != s.length || 0 != o.length) { var l = void 0,
                            u = void 0; for (var h in r) l = r[h], u = l.keywords, void 0 !== u && this.match(s, u) && !this.match(o, u) && a.push(l) } else a = r; return a.sort(function(e, t) { return e.display_order < t.display_order ? -1 : 1 }), this.filtered[e] = a, a } }, { key: "match", value: function(e, t) { for (var i in e)
                        if (e[i] in t) return !0; return !1 } }, { key: "getFilteredParts", value: function(e) { return this._getFiltered(e, "parts") } }, { key: "getFilteredConfigs", value: function(e) { return this._getFiltered(e, "configs") } }, { key: "getConfigsByKey", value: function(e, t) { return this.configsByKey[e][t] } }, { key: "getAttr", value: function(e, t) { return "keywords" in e && this.filter in e.keywords && t in e.keywords[this.filter] ? e.keywords[this.filter][t] : e[t] } }]), e }();
    t.default = E }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(2),
        o = r(s),
        l = i(23),
        u = r(l),
        h = function() {
            function e() { n(this, e) } return a(e, null, [{ key: "initTimeOnPage", value: function() { var e = this;
                    this.minutes = 0, this.activeMinutes = 0, this.previousActiveMinute = 0, CK.Events.on("characterChanged", function() { e.userStillActive() }), setInterval(function() { return e.minutes++ }, 6e4) } }, { key: "userStillActive", value: function() { this.previousActiveMinute != this.minutes && (this.previousActiveMinute = this.minutes, this.activeMinutes++, ga("send", "event", "TimeOnPage", this.activeMinutes, this.activeMinutes - 1 + "-" + this.activeMinutes + "minutes", { nonInteraction: 1 })) } }, { key: "spec", value: function(e, t, i) { ga("send", "event", "specs", e, t, i, { nonInteraction: !0 }) } }, { key: "event", value: function(e, t, i, r) { ga("send", "event", e, t, i, r) } }, { key: "exception", value: function(e, t) { void 0 != t && (e += ":" + t.toString()), ga("send", "event", "error", t, e), console.error(e, t), o.default.initialized && o.default.emit("exception", e) } }, { key: "sendGraphicsReport", value: function() { var e = u.default.specs,
                        t = encodeURIComponent(CK.renderThumbnail());
                    $.ajax({ type: "POST", url: "/graphics_report/", data: JSON.stringify(JSON.stringify({ specs: e, screenshot: t, user: USER_EMAIL })) }) } }]), e }();
    t.default = h, "ga" in window || (window.ga = function() { }) }, function(e, t) { e.exports = THREE }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(1),
        o = r(s),
        l = function() {
            function e() { n(this, e) } return a(e, null, [{ key: "init", value: function() { e.textures = "/static/textures/", e.dataURL = o.default.dataPath, o.default.debug && console.info("Data url:", e.dataURL), e.prefix = o.default.prefix, e.artVersion = "?version=" + o.default.artVersionNumber, e.mainSkeleton = o.default.meshBundlePath + "skeleton/" + e.prefix + "_human_" + o.default.rez + "_body.ckb", e.jointSliders = o.default.meshBundlePath + "skeleton/" + e.prefix + "_skeleton_loRez_sliders.ckb", e.paintPotImage = e.textures + "paint-grid.png", e.clearPaintThumb = e.textures + "clear-paint.png" } }, { key: "getPartPaths", value: function(t) { var i = t.slot,
                        r = "" == t.nameAffix ? "" : "_" + t.nameAffix,
                        n = {},
                        a = o.default.meshBundlePath + i + "/" + e.prefix + "_" + i + "_" + o.default.rez + "_",
                        s = o.default.texturePath + i + "/" + e.prefix + "_" + i + "_loRez_",
                        l = "ckb"; if ("text" == t.type ? l = "typeface.js" : "voxels" == t.type ? l = "png" : "font" == t.type && (l = "ttf"), t.useMesh && ("string" == typeof t.id ? n.mesh = "/cache/" + t.id.slice(0, 3) + "/" + t.id.slice(3, 6) + "/" + t.id.slice(6, 8) + "/" + t.id + ".png" : void 0 != t.displayFilename && "" != t.displayFilename && "text" == t.type ? n.mesh = o.default.meshBundlePath + t.displayFilename : n.mesh = a + t.name + r + "." + l), 1 == t.normalMap ? void 0 != t.normalFilename && "" != t.normalFilename ? n.normal = s + t.normalFilename + "_nrml.jpg" + e.artVersion : "itemD" == i ? n.normal = o.default.texturePath + "itemR/" + e.prefix + "_itemR_loRez_" + t.name + "_nrml.jpg" + e.artVersion : n.normal = s + t.name + "_nrml.jpg" + e.artVersion : n.normal = void 0, i in o.default.slots && void 0 != o.default.slots[i].additionalMaps)
                        for (var u in o.default.slots[i].additionalMaps) { var h = o.default.slots[i].additionalMaps[u];
                            n[h] = a + t.name + "_" + h + ".jpg" }
                    return n } }, { key: "getPartThumb", value: function(t) { return t.id > 1e6 ? "https://d30y9cdsu7xlg0.cloudfront.net/png/" + (t.id - 1e6) + "-84.png" : "CLEAR" == t.name ? "static/img/clear_thumb.png" : o.default.thumbnailPath + t.slot + "/" + e.prefix + "_" + t.slot + "_hiRez_" + t.name + "_thumb.png" + e.artVersion } }, { key: "getNoun", value: function(e) { return "/cache/" + e.slice(0, 3) + "/" + e.slice(3, 6) + "/" + e.slice(6, 8) + "/" + e + ".noun" } }, { key: "getImageUpload", value: function(e) { return "userupload/" + e } }, { key: "getNounIdFromPath", value: function(e) { var t = e.substring(e.lastIndexOf("/") + 1); return t.split(".")[0].split("-")[0] } }, { key: "getConfigThumb", value: function(t) { return o.default.thumbnailPath + "config/" + e.prefix + "_config_hiRez_" + t + "_thumb.png" + e.artVersion } }, { key: "getEnvCubePaths", value: function(t) { var i = e.textures + "cube/skybox/"; return [i + t + "-px.jpg", i + t + "-nx.jpg", i + t + "-py.jpg", i + t + "-ny.jpg", i + t + "-pz.jpg", i + t + "-nz.jpg"] } }, { key: "getEnvMap", value: function() { var t = e.textures + "cube/skybox/"; return [t + "env-px.png", t + "env-nx.png", t + "env-py.png", t + "env-ny.png", t + "env-pz.png", t + "env-nz.png"] } }, { key: "getPoseThumbnailPath", value: function(t) { return o.default.thumbnailPath + "/skeleton/" + e.prefix + "_skeleton_hiRez_" + t + "_thumb.png" + e.artVersion } }, { key: "getDecalBasePath", value: function(e, t) { var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]; return i ? o.default.meshBundlePath + e + "/" + o.default.prefix + "_" + e + "_" + o.default.rez + "_" + t + ".jpg" : o.default.meshBundlePath + "decals/" + e + "/" + o.default.prefix + "_" + e + "_" + o.default.rez + "_" + t + ".png" } }, { key: "getDecalThumb", value: function(t, i) { return o.default.texturePath + "decals/" + t + "/" + o.default.prefix + "_" + t + "_hiRez_" + i + "_thumb.png" + e.artVersion } }, { key: "getDecalLayer", value: function(e, t) { return e + "_" + t + ".png" } }, { key: "getDecalTexture", value: function(e) { return e + ".png" } }, { key: "shortenBundlePath", value: function(e) { return e.replace(o.default.meshBundlePath, "../") } }]), e }();
    t.default = l }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t.default = e, t }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var s = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        o = i(6),
        l = n(o),
        u = i(2),
        h = r(u),
        c = i(28),
        d = r(c),
        f = i(1),
        p = r(f),
        v = i(57),
        g = r(v),
        m = i(58),
        y = r(m),
        b = i(59),
        _ = r(b),
        w = i(60),
        k = (r(w), function() {
            function e() { a(this, e) } return s(e, null, [{ key: "init", value: function() { this.loaders = {}, this.loaders.ckb = new d.default, this.loaders.png = new l.TextureLoader, this.loaders.jpg = this.loaders.png, this.loaders.json = _.default, this.loaders.image = y.default, this.loaders.js = new l.FontLoader, this.loaders.ttf = g.default; for (var e in p.default.extraLoaders) this.loaders[e] = p.default.extraLoaders[e];
                    this.resources = {}, this._owners = {}, this._usages = {}, this.version = "?version=" + p.default.artVersionNumber } }, { key: "addResource", value: function(e, t) { console.warn("Add resource only half implemented"), this.resources[e] = t } }, { key: "addLoader", value: function(e, t) { this.loaders[e] = t } }, { key: "getResources", value: function(e, t) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
                        r = []; for (var n in e) r.push(this.getResource(e[n], void 0 === t ? void 0 : t[n], i)); return Promise.all(r) } }, { key: "status", value: function(e) { if (!(e in this.resources)) return this.RESOURCE_STATUS.unrequested; var t = this.resources[e]; return void 0 === t ? this.RESOURCE_STATUS.failed : "string" != typeof t && "then" in t ? this.RESOURCE_STATUS.requested : this.RESOURCE_STATUS.loaded } }, { key: "getNow", value: function(e) { var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, this.resources[e]); return this.status(e) == this.RESOURCE_STATUS.loaded ? t : void console.error("Resource not loaded - ", e) } }, { key: "getResource", value: function(e) { var t = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
                        n = void 0; return e in this.resources ? n = Promise.resolve(this.resources[e]) : (void 0 === i && (i = e.includes("request_image=") ? "noun" : e.split("?")[0].split(".").pop()), i in this.loaders || console.error("Unrecognized resource type", i), n = new Promise(function(n, a) { t.loaders[i].load(e + t.version, function(e) { n(e) }, void 0, function(t) { console.error(r, "Failed to load:", e, t), n(void 0) }) }), this.resources[e] = n, n.then(function(i) { t.resources[e] = i })), this.register(r, e), h.default.emit("resourcesChanged", void 0), n } }, { key: "register", value: function(e, t) { e in this._owners || (this._owners[e] = {}), t in this._usages || (this._usages[t] = {}), this._owners[e][t] = void 0, this._usages[t][e] = void 0 } }, { key: "unregister", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        i = {}; for (var r in t) i[t[r]] = void 0; if (e in this._owners) { var n = this._owners[e]; for (var a in n)
                            if (!(a in i) && (delete this._usages[a][e], delete this._owners[e][a], 0 == Object.keys(this._usages[a]).length && (delete this._usages[a], void 0 !== this.resources[a]))) { if ("string" != typeof this.resources[a] && !("then" in this.resources[a])) { var s = this.resources[a]; "dispose" in s && s.dispose() } delete this.resources[a] }
                        0 == Object.keys(this._owners[e]).length && delete this._owners[e] } } }]), e }());
    t.default = k, k.RESOURCE_STATUS = { unrequested: 0, requested: 1, loaded: 2, failed: 3 } }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t.default = e, t }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var s = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        o = i(6),
        l = n(o),
        u = i(1),
        h = r(u),
        c = i(14),
        d = r(c),
        f = i(27),
        p = r(f),
        v = function() {
            function e() { a(this, e) } return s(e, null, [{ key: "init", value: function() { this.defaultTextures = { grey: this.makeSolidTexture([.5, .5, .5, 1]), black: this.makeSolidTexture([0, 0, 0, 1]), white: this.makeSolidTexture([1, 1, 1, 1]), default: this.makeSolidTexture([.73, .73, .73, 1]), transparent: this.makeSolidTexture([0, 0, 0, 0]), normal: this.makeSolidTexture([.5, .5, 1, 1]), normalMap2: this.makeSolidTexture([.5, .5, 1, 1]), blue: this.makeSolidTexture([.1, .2, .8]) }, this.reflectionCube = null, this.materialVisualizationMode = "", this.defaultMaps = { normalMap: this.defaultNormalTexture, normalMap2: this.defaultNormalTexture } } }, { key: "makeMaterial", value: function(e, t) { return h.default.color ? new p.default(e, t) : new d.default(e, t) } }, { key: "updateReflectionCube", value: function(e) { this.reflectionCube = e; for (var t in CK.activeCharacter.characterDisplay.meshes) { var i = CK.activeCharacter.characterDisplay.meshes[t].material;
                        i.envMap != this.reflectionCube && (i.envMap = this.reflectionCube) } } }, { key: "makeSolidTexture", value: function(e, t) { void 0 == t && (t = [1, 1]); for (var i = new Float32Array(4 * t[0] * t[1]), r = 0; r < t[0] * t[1]; r++)
                        for (var n = 0; n < 4; n++) i[4 * r + n] = e[n]; var a = new l.DataTexture(i, 1, 1, l.RGBAFormat, l.FloatType); return a.needsUpdate = !0, a.shared = !0, a } }]), e }();
    t.default = v }, function(e, t) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        n = function() {
            function e() { i(this, e) } return r(e, null, [{ key: "makeMesh", value: function(e, t) { var i = e.skinned ? new THREE.SkinnedMesh(void 0, t, !0) : new THREE.Mesh(e, t); return i.geometry = e, i.castShadow = !0, i.receiveShadow = !0, i.frustumCulled = !1, i.name = e.name, i.morphTargetInfluences = e.morphTargetInfluences, i.morphTargetDictionary = e.morphTargetDictionary, i } }]), e }();
    t.default = n
}, function(e, t) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        n = 20,
        a = function() {
            function e() { i(this, e) } return r(e, null, [{ key: "init", value: function() { this.queue = [], this.currentIndex = 0 } }, { key: "doAction", value: function(e, t) { this.queue = this.queue.slice(0, this.currentIndex); var i = new s(e, t);
                    i.doAction(), this.queue.push(i), this.queue.length > n && (this.queue = this.queue.slice(this.queue.length - n, this.queue.length)), this.currentIndex = this.queue.length } }, { key: "undo", value: function() { this.currentIndex > 0 && (this.currentIndex -= 1, this.queue[this.currentIndex].undoAction()) } }, { key: "redo", value: function() { this.currentIndex < this.queue.length && (this.queue[this.currentIndex].doAction(), this.currentIndex += 1) } }, { key: "clear", value: function() { this.init() } }]), e }();
    t.default = a; var s = function() {
        function e(t, r) { i(this, e), this.doFunction = t, this.undoFunction = r } return r(e, [{ key: "doAction", value: function() { this.doFunction() } }, { key: "undoAction", value: function() { this.undoFunction() } }]), e }() }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t.default = e, t }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function s(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function o(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var l = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        u = function e(t, i, r) { null === t && (t = Function.prototype); var n = Object.getOwnPropertyDescriptor(t, i); if (void 0 === n) { var a = Object.getPrototypeOf(t); return null === a ? void 0 : e(a, i, r) } if ("value" in n) return n.value; var s = n.get; if (void 0 !== s) return s.call(r) },
        h = i(6),
        c = n(h),
        d = i(3),
        f = r(d),
        p = i(32),
        v = r(p),
        g = function(e) {
            function t() { a(this, t); var e = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); return e.bones = [], e.firstEmptyJointIndex = 0, e.addons = {}, e.poses = {}, e.threeObj = new c.Object3D, e.boneTextureWidth = 64, e.boneTextureHeight = 64, e.useVertexTexture = !0, e.boneMatrices = new Float32Array(e.boneTextureWidth * e.boneTextureHeight * 4), e.boneTexture = new c.DataTexture(e.boneMatrices, e.boneTextureWidth, e.boneTextureHeight, c.RGBAFormat, c.FloatType), e.poseOverrides = {}, e.poseSliderOverrides = {}, e.namedPoses = {}, e.activeNamedPoses = {}, e.namedPoseOverrideJoints = {}, e.sliders = {}, e.pose = 0, e.needsJointInversesRefresh = !1, e.needsPoseRefresh = !1, f.default.register(function() { e._refreshAnimations() }, "animation"), e } return o(t, e), l(t, [{ key: "changePose", value: function(e) { void 0 === e && (console.error("Trying to set pose index to undefined!"), e = 0), this.pose != e && (this.pose = e, this._requestPoseRefresh()) } }, { key: "activatePose", value: function(e) { if (!(e in this.activeNamedPoses) && e in this.namedPoses) { this.activeNamedPoses[e] = void 0; var t = this.namedPoses[e]; for (var i in t) this.namedPoseOverrideJoints[i] = t[i];
                        this._requestPoseRefresh() } } }, { key: "deactivatePose", value: function(e) { if (e in this.activeNamedPoses) { delete this.activeNamedPoses[e]; var t = this.namedPoses[e]; for (var i in t) delete this.namedPoseOverrideJoints[i];
                        this._requestPoseRefresh() } } }, { key: "_requestJointInversesRefresh", value: function() { this.needsJointInversesRefresh = !0 } }, { key: "_requestPoseRefresh", value: function() { this.needsPoseRefresh = !0 } }, { key: "_refreshPose", value: function(e) { for (var t, i, r, n, a, s = this.poseOverrides, o = this.poseSliderOverrides, l = this.namedPoseOverrideJoints, u = 0, h = this.bones.length; u < h; u++) t = this.bones[u], void 0 !== t && (a = t.name, i = 0 == e ? t.poses : l[a] || s[a] || t.poses, n = void 0 !== i.frameMapping ? i.frameMapping[e] || 0 : e, t.position.fromArray(i.pos, 3 * n >= i.pos.length ? 0 : 3 * n), t.quaternion.fromArray(i.rot, 4 * n >= i.rot.length ? 0 : 4 * n), t.scale.fromArray(i.scl, 3 * n >= i.scl.length ? 0 : 3 * n), 0 != e && a in o && (r = o[a], t.position.add(r.pos).sub((new c.Vector3).fromArray(t.poses.pos)), t.quaternion.set(t.quaternion.x + r.rot.x - t.poses.rot[0], t.quaternion.y + r.rot.y - t.poses.rot[1], t.quaternion.z + r.rot.z - t.poses.rot[2], t.quaternion.w + r.rot.w - t.poses.rot[3]), t.scale.add(r.scl).sub((new c.Vector3).fromArray(t.poses.scl)))) } }, { key: "_refreshAnimations", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; if (this.needsJointInversesRefresh || e) { var t = this.threeObj.parent;
                        null != t && t.remove(this.threeObj); var i = this.threeObj.snapBones;
                        this.threeObj.snapBones = void 0; var r = this.threeObj.position.clone();
                        this.threeObj.position.set(0, 0, 0), this._refreshPose(0), this.threeObj.updateMatrixWorld(!0), this.calculateInverses(), this.threeObj.position.copy(r), null != t && t.add(this.threeObj), this.needsPoseRefresh = !0, this.threeObj.snapBones = i }(this.needsPoseRefresh || e) && this._refreshPose(this.pose), this.needsJointInversesRefresh = !1, this.needsPoseRefresh = !1, this.needsUpdate = !0 } }, { key: "addPoses", value: function(e, t) { void 0 === t && console.error("Slot is undefined in addPoses!", e), t in this.poses && (console.error("Poses from slot", t, "already exist. How are they getting added twice?"), this.removePoses(t)); var i = [],
                        r = [],
                        n = []; for (var a in e) { var s = e[a]; if ("override" == a) { for (var o in s) this.poseOverrides[o] = s[o], i.push(o);
                            this._requestPoseRefresh() } else if (a.startsWith("slider_")) { var l = a.split("_")[1];
                            this.sliders[l] = { value: .5, jointAnims: s }, r.push(l), this._requestPoseRefresh() } else this.namedPoses[a] = e[a], n.push(a) } this.poses[t] = { poseOverrideJoints: i, namedPoses: n, sliders: r } } }, { key: "removePoses", value: function(e) { if (e in this.poses) { for (var t = this.poses[e].poseOverrideJoints, i = 0, r = t.length; i < r; i++) delete this.poseOverrides[t[i]];
                        t.length && this._requestPoseRefresh(); for (var n = this.poses[e].sliders, a = 0, s = n.length; a < s; a++) delete this.sliders[n[a]], console.warn("Have not implemented removing poseOverrideSliders yet! Do so now.. since something is getting removed that has sliders!");
                        n.length && this._requestPoseRefresh(); var o = this.poses[e].namedPoses; for (var l in o) this.deactivatePose(l), delete this.namedPoses[l], this._requestPoseRefresh();
                        delete this.poses[e] } } }, { key: "getSlider", value: function(e) { return e in this.sliders ? this.sliders[e].value : void console.warn("Slider", e, "does not exist!") } }, { key: "setSlider", value: function(e, i) { if (e in this.sliders) { var r = this.sliders[e]; if (i != r.value) { var n = void 0,
                                a = r.jointAnims;
                            r.value = i; for (var s in a) n = a[s], this.poseSliderOverrides[s] = { pos: (new c.Vector3).fromArray(t._lerpVec3Anim(n.pos, 2 * i)), rot: t._slerpQuatAnim(n.rot, 2 * i), scl: (new c.Vector3).fromArray(t._lerpVec3Anim(n.scl, 2 * i)) };
                            this._requestPoseRefresh() } } else console.warn("Setting missing slider", e, "to", i) } }, { key: "applyIk", value: function(e, t, i, r) { var n = this; if (t && e && e.length) { var a = e.map(function(e) { return n.threeObj.getObjectByName(e ? e.trim() : "") }).filter(function(e) { return void 0 !== e }),
                            s = this.threeObj.getObjectByName(t) || CK.scene.getObjectByName(t); if (s && a.length > 0) { var o = new v.default(s, a, i, r);
                            o.solveBoneTransforms() } } } }, { key: "add", value: function(e, t) { void 0 === t && console.error("Slot is undefined in add mesh!", e); var i = e.geometry; "poses" in i && this.addPoses(i.poses, t), "mixerBones" in i && i.mixerBones.length && (this.addSkel(i.mixerBones, t), i.skinned && (this._remapJointIndices(i.attributes.skinIndex.array, t), "ckbAdditionalSkinIndex" in i && i.ckbAdditionalSkinIndex.length > 0 && this._remapJointIndices(i.ckbAdditionalSkinIndex, t))), i.skinned && (e.bind(this, new c.Matrix4), this.threeObj.add(e)) } }, { key: "remove", value: function(e) { this.removeSkel(e), this.removePoses(e) } }, { key: "addSkel", value: function(e, t) { t in this.addons && (console.error("Slot", t, "already full. How did we end up adding another skeleton to it?", e), this.removeSkel(t)); for (var i = this.bones, r = i.length, n = e.length, a = [], s = this.firstEmptyJointIndex, o = 0; o < n; s++) s >= r ? (i.push(e[o++]), a.push(s)) : void 0 == i[s] && (i[s] = e[o++], a.push(s)), o == n - 1 && (this.firstEmptyJointIndex = s + 1); for (var l, u, h = 0; h < n; h++) l = e[h], l.skin = this, u = l.parentId, u >= 500 && (u = a[u - 500]), u == -1 ? this.threeObj.add(l) : null !== u && void 0 !== i[u] ? i[u].add(l) : console.error("Invalid bone parent id", u, "of", l, "for skeleton", this, "with bones", i);
                    this.addons[t] = { bones: e, slot: t, boneRemap: a }, n && this._requestJointInversesRefresh() } }, { key: "removeSkel", value: function(e) { if (e in this.addons) { var t = this.addons[e].boneRemap;
                        t.length && this.firstEmptyJointIndex > t[0] && (this.firstEmptyJointIndex = t[0]); for (var i, r, n = 0, a = t.length; n < a; n++) i = t[n], r = this.bones[i], r.parent.remove(r), this.bones[i] = void 0;
                        delete this.addons[e] } } }, { key: "_remapJointIndices", value: function(e, t) { if (t in this.addons)
                        for (var i = this.addons[t].boneRemap, r = 0, n = e.length; r < n; r++) e[r] >= 500 && (e[r] = i[e[r] - 500]) } }, { key: "update", value: function() { this.needsUpdate && (u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "update", this).call(this), this.needsUpdate = !1) } }], [{ key: "_lerpVec3Anim", value: function(e, i) { if (3 == e.length) return e.slice(0); var r = Math.floor(i),
                        n = 3 * r,
                        a = i - r; if (n >= e.length - 3) return e.slice(e.length - 3); for (var s = [], o = 0; o < 3; o++) s.push(t._lerp(e[n + o], e[n + 3 + o], a)); return s } }, { key: "_slerpQuatAnim", value: function(e, t) { if (4 == e.length) return (new c.Quaternion).fromArray(e.slice(0)); var i = Math.floor(t),
                        r = 4 * Math.floor(t),
                        n = t - i; if (r >= e.length - 4) return (new c.Quaternion).fromArray(e.slice(e.length - 4)); var a = (new c.Quaternion).fromArray(e.slice(r)),
                        s = (new c.Quaternion).fromArray(e.slice(r + 4)); return a.slerp(s, n) } }, { key: "_lerp", value: function(e, t, i) { return e + (t - e) * i } }]), t }(c.Skeleton);
    t.default = g }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function s(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var o = i(7),
        l = r(o),
        u = i(19),
        h = r(u),
        c = function(e) {
            function t(e) { n(this, t); var i = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                i.texturePath = l.default.getDecalBasePath(i.slot, i.name, e.baseLayer), i.baseLayer = e.baseLayer; var r = e.layersArray || (e.layers ? e.layers.split(",") : []);
                i.layerTypes = [], i.layerMappings = [], i.layerTypeCounts = { solid: 0, depth: 0, gradient: 0, color: 0, normal: 0, overlay: 0, base: 0, baseGradient: 0 }; for (var s, o = 0; o < r.length; o++) s = r[o].split("_"), i.layerMappings.push(s[0]), i.layerTypes.push(s[1]), i.layerTypeCounts[s[1]]++; return i.packedTextureCount = Math.ceil((i.layerTypeCounts.solid + i.layerTypeCounts.depth + i.layerTypeCounts.gradient + i.layerTypeCounts.normal + 2 * i.layerTypeCounts.overlay + i.layerTypeCounts.base + i.layerTypeCounts.baseGradient) / 4), i.textureCount = i.packedTextureCount + i.layerTypeCounts.color, i.displace = !!e.displace, i.uvwh = null != e.u ? new THREE.Vector4(e.u, e.v, e.w, e.h) : void 0, i._getMods(), Object.freeze(i), i } return s(t, e), t }(h.default);
    t.default = c }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function s(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var o = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        l = i(1),
        u = r(l),
        h = i(8),
        c = r(h),
        d = i(3),
        f = r(d),
        p = i(9),
        v = r(p),
        g = function(e) {
            function t() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                n(this, t); var s = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                s.part = i; var o = s._getUniforms();
                s.background = "bg" == i.slot, s.background ? (s.origFragmentShader = "ck_meshbasic_frag", s.origVertexShader = "ck_meshbasic_vert") : u.default.physicalShader ? (s.origFragmentShader = "ck_meshphysical_frag", s.origVertexShader = "ck_meshphysical_vert") : (s.origFragmentShader = "ck_meshphong_frag", s.origVertexShader = "ck_meshphong_vert"), s.name = "Material" + s.id; var l = !!e.skinned,
                    h = "morphAttributes" in e && "position" in e.morphAttributes,
                    d = u.default.forge && "morphAttributes" in e && "normal" in e.morphAttributes && i.blendNormals,
                    f = void 0 !== i.paths && void 0 !== i.paths.normal && u.default.normalMaps && !s.background,
                    p = void 0 !== i.slot && i.slot in u.default.slots && "additionalMaps" in u.default.slots[i.slot] && u.default.slots[i.slot].additionalMaps.indexOf("normalMap2") != -1 && f; if (s.hasVertexColors = void 0 !== e.attributes && void 0 !== e.attributes.color && u.default.morphids, s.hasUvs = void 0 !== e.attributes && void 0 !== e.attributes.uv, s._properties = { fragmentShader: THREE.ShaderChunk[s.origFragmentShader], vertexShader: THREE.ShaderChunk[s.origVertexShader], uniforms: o, lights: !0, fog: !1, skinning: l, morphTargets: h, morphNormals: d, defines: { USE_NORMALMAP: f, USE_NORMALMAP2: p, ENVMAP_TYPE_CUBE: !0, ENVMAP_MODE_REFRACTION: !1, ENVMAP_MODE_REFLECTION: !0, ENVMAP_BLENDING_MULTIPLY: !0, USE_COLOR_ID_CULL: !1, USE_COLOR_ID_MORPH: !1, USE_COLOR: s.hasVertexColors, USE_ENVMAP: u.default.useEnvironmentMapInShader, USE_UVS: s.hasUvs }, extensions: { derivatives: f, shaderTextureLOD: !0 } }, f && (o.normalMap.value = v.default.defaultTextures.normal, c.default.getResource(i.paths.normal, "png", s.name).then(function(e) { s._normalsLoaded(e) })), i.slot in u.default.slots && f && void 0 != u.default.slots[i.slot].additionalMaps) { var g = function(e) { var t = u.default.slots[i.slot].additionalMaps[e];
                        t in v.default.defaultTextures && (o[t].value = v.default.defaultTextures[t]), c.default.getResource(i.paths[t], "png", s.name).then(function(e) { s._mapLoaded(t, e) }) }; for (var m in u.default.slots[i.slot].additionalMaps) g(m) } return s.useNormalMap = f, r && s._init(), s.uniforms.envMap.value = v.default.defaultTextures.grey, s } return s(t, e), o(t, [{ key: "setHideIds", value: function(e) { if (this.hasVertexColors) { var t = "vertexColorIdHides" in this.uniforms;
                        void 0 === e ? t && (this.defines.USE_COLOR_ID_CULL = !1, delete this.uniforms.vertexColorIdHides, this.needsUpdate = !0) : t ? this.uniforms.vertexColorIdHides.value = e : (this.defines.USE_COLOR_ID_CULL = !0, this.uniforms.vertexColorIdHides = { type: "iv1", value: e }, this.needsUpdate = !0) } } }, { key: "getMorphDepthMaterial", value: function() { void 0 === t._morphDepthMaterial && (t._morphDepthMaterial = new THREE.ShaderMaterial({ defines: { USE_SHADOWMAP: "", DEPTH_PACKING: THREE.RGBADepthPacking, USE_COLOR_ID_MORPH: !0, USE_COLOR: !0 }, uniforms: THREE.UniformsUtils.clone(THREE.ShaderLib.depth.uniforms), vertexShader: THREE.ShaderLib.depth.vertexShader, fragmentShader: THREE.ShaderLib.depth.fragmentShader, morphTargets: !0, skinning: !0, clipping: !0 })); var e = t._morphDepthMaterial.clone(); return e.uniforms.vertexColorIdMorphs = { type: "iv1", value: this.uniforms.vertexColorIdMorphs.value }, e } }, { key: "setMorphIds", value: function(e) { if (this.hasVertexColors) { var t = "vertexColorIdMorphs" in this.uniforms;
                        void 0 === e ? t && (this.defines.USE_COLOR_ID_MORPH = !1, delete this.uniforms.vertexColorIdMorphs, this.needsUpdate = !0) : t ? this.uniforms.vertexColorIdMorphs.value = e : (this.defines.USE_COLOR_ID_MORPH = !0, this.uniforms.vertexColorIdMorphs = { type: "iv1", value: e }, this.needsUpdate = !0) } } }, { key: "dispose", value: function() { c.default.unregister(this.name) } }, { key: "_init", value: function() { this.setValues(this._properties), delete this._properties, this.setMaterialProperties("default") } }, { key: "_mapLoaded", value: function(e, t) { this.uniforms[e].value = t, this.needsUpdate = !0, f.default.requestRenderRefresh() } }, { key: "_normalsLoaded", value: function(e) { var t = this; if (this.uniforms.normalMap.value = e, u.default.fadeInNormals) { this.uniforms.normalScale = new THREE.Vector2(0, 0); var i = setInterval(function() { t.uniforms.normalScale.x < 1 ? (t.uniforms.normalScale.x += .2, t.uniforms.normalScale.y += .2) : (t.uniforms.normalScale.x = 1, t.uniforms.normalScale.y = 1, clearInterval(i)), f.default.requestRenderRefresh() }, 33) } else this.uniforms.normalScale.value = new THREE.Vector2(1, 1);
                    this.needsUpdate = !0, f.default.requestRenderRefresh() } }, { key: "_getUniforms", value: function() { var e = THREE.UniformsUtils.clone(THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.normalmap, THREE.UniformsLib.roughnessmap, THREE.UniformsLib.metalnessmap, THREE.UniformsLib.lights, { normalMap2: { type: "t", value: null }, normal2Blend: { type: "1f", value: 0 } }])); return u.default.physicalShader ? (e.roughness = { type: "1f", value: .5 }, e.metalness = { type: "1f", value: 0 }, e.envMapIntensity = { type: "1f", value: 1 }) : (e.specular = { type: "c", value: new THREE.Color(30, 30, 3) }, e.shininess = { type: "1f", value: 120 }), e } }, { key: "_getProperties", value: function() {} }, { key: "setMaterialProperties", value: function(e) { var t = "default"; if (e in u.default.materialSims ? t = e : e.split("_")[0] in u.default.materialSims ? t = e.split("_")[0] : "" != e && console.error("Material sim name", e, "not found in material sim settings. Using default instead."), this.productVisSettings != t) { this.productVisSettings = t; var i = Object.assign({}, u.default.materialSims.default, u.default.materialSims[t]); for (var r in i) this[r] = i[r] } this.uniforms.envMap.value = v.default.reflectionCube } }, { key: "setOcclusion", value: function(e, t) { this.hasUvs && (this.defines.USE_OCCLUSION ? this.uniforms.uvPosScl.value = e : (this.defines.USE_OCCLUSION = !0, this.uniforms.occlusionMap = { type: "t", value: t }, this.uniforms.uvPosScl = { type: "v3", value: e }, this.uniforms.occlusionProgress = { type: "f", value: 0 }, this.uniforms.occlusionStrength = { type: "f", value: 1 }, this.uniforms.occlusionColor = { type: "v3", value: new THREE.Vector3(0, 0, 0) }, this.uniforms.occlusionMultiplier = { type: "f", value: 1 }, this.needsUpdate = !0)) } }, { key: "occlusionColor", set: function(e) { void 0 == this.uniforms.occlusionColor ? console.warn("occlusion not on yet. Turn it on for defaults to work") : this.uniforms.occlusionColor.value = e } }, { key: "envMap", set: function(e) { this.uniforms.envMap.value = e } }, { key: "normalScale", set: function(e) { this.uniforms.normalScale.value = e } }, { key: "diffuse", set: function(e) { this.uniforms.diffuse.value = e } }, { key: "normal2Blend", set: function(e) { this.uniforms.normal2Blend.value = e } }, { key: "envMapIntensity", set: function(e) { this.uniforms.envMapIntensity.value = e } }, { key: "color", set: function(e) {} }, { key: "metalness", set: function(e) { this.uniforms.metalness.value = e }, get: function() { return this.uniforms.metalness.value } }, { key: "roughness", set: function(e) { this.uniforms.roughness.value = e }, get: function() { return this.uniforms.roughness ? this.uniforms.roughness.value : void 0 } }, { key: "reflectivity", set: function(e) { this.uniforms.reflectivity.value = e }, get: function() { return this.uniforms.reflectivity.value } }, { key: "specular", set: function(e) { this.uniforms.specular.value = e } }, { key: "shininess", set: function(e) { this.uniforms.shininess.value = 100 * e }, get: function() { return this.uniforms.shininess ? this.uniforms.shininess.value / 100 : void 0 } }]), t }(THREE.ShaderMaterial);
    t.default = g }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(1),
        o = r(s),
        l = function() {
            function e() { n(this, e) } return a(e, null, [{ key: "init", value: function() { if (this.loggedIn = "LOGGED_IN" in window && "True" == LOGGED_IN && !!LOGGED_IN || o.default.forge, $.ajaxSetup({ beforeSend: function(e, t) { /^(GET|HEAD|OPTIONS|TRACE)$/.test(t.type) || this.crossDomain || e.setRequestHeader("X-CSRFToken", $.cookie("csrftoken")) } }), this.permissions = {}, window.USER_PERMISSIONS && "" != window.USER_PERMISSIONS && window.USER_PERMISSIONS.length)
                        for (var e in window.USER_PERMISSIONS) this.permissions[window.USER_PERMISSIONS[e]] = !0 } }, { key: "logIn", value: function() { return !!this.loggedIn || (CK.cacheCharacter(), window.location.href = "/accounts/login/", !1) } }, { key: "logOut", value: function() { window.location.href = "/accounts/logout/" } }, { key: "isLoggedIn", value: function() { return this.loggedIn } }]), e }();
    t.default = l }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t, i) { return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var s = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        o = i(4),
        l = r(o),
        u = i(17),
        h = r(u),
        c = i(11),
        d = r(c),
        f = i(2),
        p = r(f),
        v = i(3),
        g = r(v),
        m = i(1),
        y = (r(m), i(5)),
        b = r(y),
        _ = function() {
            function e() { a(this, e) } return s(e, null, [{ key: "initDisplay", value: function() { this.characters = [], this.characters.push(new h.default), this.activeCharacterID = 0 } }, { key: "_start", value: function() { d.default.clear(), g.default.start(), this._registerEvents() } }, { key: "_registerEvents", value: function() { var e = this;
                    window.addEventListener("keydown", function(t) { e._keydown(t) }), window.addEventListener("resize", function() { e._resize() }, !1) } }, { key: "_resize", value: function() {} }, { key: "loadInitialCharacter", value: function(e) { var t = "",
                        i = {}; if (void 0 != window.LOAD_CONFIG && "{{ onLoadConfig }}" != window.LOAD_CONFIG && "" != window.LOAD_CONFIG) i = JSON.parse(window.LOAD_CONFIG), t = "load_config config_id" in i ? i.config_id : " unknown id";
                    else if ("cachedConfig" in sessionStorage) i = JSON.parse(sessionStorage.cachedConfig), delete sessionStorage.cachedConfig, t = "sessionStorage";
                    else if (this.blankInitialConfig) i = {}, t = "";
                    else { var r = Math.random() > .5 ? 1 : 0;
                        i = l.default.getArchetype(r), t = "ArchetypeId " + r } void 0 !== i && Object.keys(i).length <= 1 && (window.alert("Character could not be loaded. Loading default instead."), i = l.default.getArchetype(Math.random() > .5 ? 1 : 0), t = "Revert to default "); try { this.change(i, e) } catch (e) { b.default.exception("Loading Character " + t, e) } } }, { key: "cacheCharacter", value: function() { sessionStorage.cachedConfig = JSON.stringify(this.activeCharacter.characterData) } }, { key: "downloadScreenshot", value: function() { console.log("Download Screenshot not implemented yet") } }, { key: "renderThumbnail", value: function() { console.log("Render thumbnail not implemented yet") } }, { key: "loadDefaultCharacter", value: function() { this.activeCharacter.change(l.default.getArchetype(Math.random() > .5 ? 1 : 0)), CK.activeCharacter.name = "" } }, { key: "isSlotFull", value: function(e) { var t = this.activeCharacter; if (void 0 !== t && e in t.characterData) return e in t.characterData.parts } }, { key: "change", value: function(e, t) { var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    this.activeCharacter.change(e, i), void 0 !== t && p.default.next("CharacterFinishedChanging", t) } }, { key: "mirror", value: function() { this.activeCharacter.change({ mirroredPose: !this.activeCharacter.characterData.mirroredPose }) } }, { key: "setPart", value: function(e, t) { this.activeCharacter.change({ parts: n({}, e, t) }) } }, { key: "clearSlot", value: function(e) { this.activeCharacter.change({ parts: n({}, e, void 0) }) } }, { key: "clearSlots", value: function(e) { var t = {}; for (var i in e) t[e[i]] = void 0;
                    this.activeCharacter.change({ parts: t }) } }, { key: "getPose", value: function() { return this.activeCharacter.characterData.pose } }, { key: "setPose", value: function(e) { this.activeCharacter.change({ pose: e }) } }, { key: "setLabel", value: function(e, t) { this.activeCharacter.change({ labels: n({}, e, t) }) } }, { key: "getLabel", value: function(e) { var t = this.activeCharacter.characterData.getPart(e); return void 0 !== t && ("text" == t.type || "font" == t.type) || e in l.default.slots && "voxels" == l.default.slots[e].type ? this.activeCharacter.characterData.labels[e] || "" : void 0 } }, { key: "previewSlider", value: function(e, t) { this.activeCharacter.previewSlider(e, t) } }, { key: "setSlider", value: function(e, t) { this.activeCharacter.change({ sliders: n({}, e, t) }) } }, { key: "removeDecal", value: function(e) { this.activeCharacter.change({ decals: n({}, e, void 0) }) } }, { key: "addDecal", value: function(e, t) { this.activeCharacter.change({ decals: n({}, e, t) }, void 0, !1) } }, { key: "getSlider", value: function(e) { return this.activeCharacter.getSlider(e) } }, { key: "undo", value: function() { d.default.undo() } }, { key: "redo", value: function() { d.default.redo() } }, { key: "changeBackground", value: function(e) { console.log("Change background not implemented yet") } }, { key: "domElement", get: function() { console.log("Dom element not implemented yet") } }, { key: "activeCharacter", get: function() { return void 0 === this.characters ? void 0 : this.characters[this.activeCharacterID] } }]), e }();
    t.default = _ }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(33),
        o = r(s),
        l = i(35),
        u = r(l),
        h = i(34),
        c = r(h),
        d = i(11),
        f = r(d),
        p = i(2),
        v = r(p),
        g = i(3),
        m = r(g),
        y = i(1),
        b = r(y),
        _ = function() {
            function e() { var t = this;
                n(this, e), this.characterData = new o.default, this.characterDisplayData = new u.default, this.characterDisplay = new c.default, this.displaySettings = { showMaterialSim: !1, displayPaintSchemes: {} }, this.threeObj = this.characterDisplay.threeObj, this.characterChangedCallback = void 0, this._needsUpdating = !1, this._targetDisplay = void 0, m.default.register(function() { return t._update() }, "start") } return a(e, [{ key: "change", value: function() { var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = this.stateAtPreviousChange;
                    f.default.doAction(function() { e.changeData(t, i) }, function() { e.changeData(r, !0) }) } }, { key: "changeData", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    t && (this.characterData = new o.default, void 0 !== e.parts && (delete e.parts.scale, delete e.parts.material)), this.characterData.change(e), this.stateAtPreviousChange = this.characterData.clone(), this.refresh(), v.default.emit("characterChanged", this), void 0 != this.characterChangedCallback && this.characterChangedCallback() } }, { key: "setCharacterChangedCallback", value: function(e) { this.characterChangedCallback = e } }, { key: "previewSlider", value: function(e, t) { var i = {},
                        r = {},
                        n = {};
                    u.default.applySlider(e, t, i, r, n, this.characterDisplayData.sliderMods), this.characterDisplayData._reposeMods(), this.characterDisplay.previewSliders(i, r, n), this.characterData.sliders[e] = t } }, { key: "getSlider", value: function(e) { return this.characterData.sliders[e] } }, { key: "enableMaterialSim", value: function() { this.displaySettings.showMaterialSim = !0, this.refresh() } }, { key: "disableMaterialSim", value: function() { this.displaySettings.showMaterialSim = !1, this.refresh() } }, { key: "requestDisplay", value: function(e, t) { void 0 !== this._targetDisplay && console.log("requesting display before previous finished"), this._targetDisplay = { data: new o.default(e), callback: t, triggered: !1 }, this.refresh() } }, { key: "_requestDisplaySuccesfull", value: function() { var e = this._targetDisplay.callback;
                    this._targetDisplay = void 0, e(), this.refresh() } }, { key: "_update", value: function() { var e = this;
                    this._needsUpdating && (this._needsUpdating = !1, void 0 != this._targetDisplay ? this._targetDisplay.triggered || (this._targetDisplay.triggered = !0, this.characterDisplayData.change(this._targetDisplay.data, this.displaySettings), this.characterDisplay.change(this.characterDisplayData, void 0, function() { e._requestDisplaySuccesfull() })) : (this.characterDisplayData.change(this.characterData, this.displaySettings), this.characterDisplay.change(this.characterDisplayData)), b.default.debug && (console.info("Character Data:", this.characterData), console.info("Character Display Data:", this.characterDisplayData))) } }, { key: "refresh", value: function() { this._needsUpdating = !0 } }, { key: "name", set: function(e) { this.characterData.meta.character_name != e && (this.characterData.meta.character_name = e, v.default.emit("characterNameChanged", this)) }, get: function() { return "character_name" in this.characterData.meta ? this.characterData.meta.character_name : "" } }]), e }();
    t.default = _ }, function(e, t, i) {
    "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 });
    var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(1),
        o = r(s),
        l = function() {
            function e() { n(this, e) }
            return a(e, [{ key: "get", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                    this.parts = t, this.decals = i, this.pose = r, this.decalSlots = n; var a = []; for (var s in this.parts) this._collectMods(a, this.parts[s], e); for (var o in this.decals) { var l = this.decals[o]; for (var u in l) this._collectMods(a, l[u].decal, e) } return a } }, { key: "_collectMods", value: function(e, t, i) { if (void 0 !== t && "mods" in t && i in t.mods) { var r = t.mods[i]; for (var n in r) { var a = r[n];
                            this._conditionMet(a, t) && e.push(a) } } } }, { key: "_conditionMet", value: function(e, t) { var i = e.part_keys; if (void 0 !== i && "" != i) { i = i.split(","); for (var r in i)
                            if (!(i[r] in t.keywords)) return !1 } var n = e.keys; if (void 0 !== n && "" != n) { var a = this.parts[e.target0]; if (void 0 === a || !("keywords" in a)) return !1;
                        n = n.split(","); for (var s in n)
                            if (!(n[s] in a.keywords)) return !1 } return this._conditionTrue(e) } }, {
                key: "_conditionTrue",
                value: function(e) {
                    var t = e.condition;
                    if (t) {
                        if ("empty" == t) return !(e.condition_target in this.parts && "CLEAR" != this.parts[e.condition_target].name);
                        if ("full" == t) return e.condition_target in this.parts || e.condition_target in this.decalSlots;
                        if ("haskey" == t.toLowerCase()) {
                            var i = this.parts[e.condition_target] || this.decalSlots[e.condition_target];
                            return i && "keywords" in i && e.condition_value in i.keywords
                        }
                        if ("notkey" == t.toLocaleLowerCase()) { var r = this.parts[e.condition_target] || this.decalSlots[e.condition_target]; return !(r && "keywords" in r && e.condition_value in r.keywords) }
                        if ("rez" == t) return o.default.rez == e.condition_value;
                        if ("multi" == t) { for (var n in e.conditions)
                                if (console.log("testing condition", e.conditions[n]), !this._conditionTrue(e.conditions[n])) return !1; return !0 }
                        if ("pose" == t) { var a = this.pose.toString(); if (e.condition_value == a) return !0; var s = e.condition_value.split(","); for (var l in s)
                                if (s[l] == a) return !0; return !1 }
                        return console.warn("Unrecognized mod condition", t), !1
                    }
                    return !0
                }
            }]), e
        }();
    t.default = l
}, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(4),
        o = r(s),
        l = i(1),
        u = r(l),
        h = { excludePoses: void 0, limitPoses: void 0, hideId: void 0, morphId: void 0, pose: void 0 },
        c = { hide: void 0 },
        d = function() {
            function e(t) { n(this, e), Object.assign(this, t), this._originalData = t, this.keywords = t.keywords || {}, this.side = void 0 !== this.slot ? this.slot.endsWith("R") ? "R" : this.slot.endsWith("L") ? "L" : "" : "" } return a(e, [{ key: "_getMods", value: function() { var e = this._originalData.mods || {},
                        t = this.slot in o.default.slots ? o.default.slots[this.slot].mods || {} : {};
                    this.mods = Object.assign({}, e, t); for (var i in this.mods)
                        for (var r in this.mods[i]) { var n = this.mods[i][r];
                            n.target0 = n.target0 || this.slot, i in h && "string" == typeof n.value0 && (n.value0 = n.value0.split(",")), i in c && "string" == typeof n.target0 && (n.target0 = u.default.slotGroups[n.target0] || n.target0.split(",")) } } }]), e }();
    t.default = d }, function(e, t) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        n = function() {
            function e(t) { if (i(this, e), void 0 !== t) { this.gradientValues = t.slice(0), 1 == this.gradientValues.length && (this.gradientValues = e.getGradientFromColor(this.gradientValues[0])); for (var r = 0; r < this.gradientValues.length; r++) 3 == this.gradientValues[r].length && this.gradientValues[r].push(255), 4 != this.gradientValues[r].length && console.error("Incorrect gradient values ", this.gradientValues);
                    this.gradientThumbnail = void 0, this.gradientThumbnailNeedsUpdating = !0 } } return r(e, [{ key: "fromArray", value: function(e, t) { this.gradientValues = []; for (var i = 0; i < 5; i++) this.gradientValues.push([e[t + 4 * i], e[t + 4 * i + 1], e[t + 4 * i + 2], e[t + 4 * i + 3]]); return this } }, { key: "equals", value: function(e) { for (var t in this.gradientValues) { var i = this.gradientValues[t],
                            r = e.gradientValues[t]; for (var n in i)
                            if (i[n] != r[n]) return !1 } return !0 } }, { key: "setGradientValue", value: function(e, t) { this.gradientThumbnailNeedsUpdating = !0, 3 == t.length && t.push(255), 4 != t.length && console.error("Invalid color ", t), this.gradientValues[e] = t } }, { key: "getData", value: function(e) { for (var t = [], i = 0; i < 4; i++) t.push(this.gradientValues[e][i] / 255); return t } }, { key: "getVec4Array", value: function() { for (var e = [], t = 0; t < 5; t++) e.push((new THREE.Vector4).fromArray(this.gradientValues[t]).divideScalar(255)); return e } }, { key: "getSolidColor", value: function() { return this.gradientValues[2] } }, { key: "getFormattedJson", value: function() { for (var e = "[", t = 0; t < this.gradientValues.length; t++) e += "[" + this.gradientValues[t].slice(0, 3).toString() + "]" + (t != this.gradientValues.length - 1 ? "," : ""); return e += "]" } }, { key: "getGradientThumbnail", value: function() { if (void 0 != this.gradientThumbnail && !this.gradientThumbnailNeedsUpdating) return this.gradientThumbnail;
                    e.thumbImageLoaded || console.error("call to getGradientThumbnail before thumbnail mask image is loaded"); var t = this,
                        i = document.createElement("canvas");
                    i.height = 32, i.width = 32; for (var r = i.getContext("2d"), n = 0; n < 5; n++) { var a = document.createElement("canvas");
                        a.width = 32, a.height = 32; var s = a.getContext("2d");
                        s.drawImage(e.thumbImage, -32 * n, 0), s.globalCompositeOperation = "source-in", s.fillStyle = "rgba(" + t.gradientValues[n].toString() + ")", s.rect(0, 0, 32, 32), s.fill(); var o = new Image;
                        o.src = a.toDataURL(), r.globalCompositeOperation = "source-over", r.drawImage(o, 0, 0) } return this.gradientThumbnail = i.toDataURL(), this.gradientThumbnailNeedsUpdating = !1, this.gradientThumbnail } }], [{ key: "getGradientFromColor", value: function(e) { var t = [Math.round(.2 * e[0]), Math.round(.2 * e[1]), Math.round(.2 * e[2]), 255],
                        i = [Math.round((t[0] + e[0]) / 2), Math.round((t[1] + e[1]) / 2), Math.round((t[2] + e[2]) / 2), 255],
                        r = [Math.round(1.8 * e[0]), Math.round(1.8 * e[1]), Math.round(1.8 * e[2]), 255],
                        n = [Math.round((r[0] + e[0]) / 2), Math.round((r[1] + e[1]) / 2), Math.round((r[2] + e[2]) / 2), 255]; return [t, i, e, n, r] } }, { key: "getSolidDataGradient", value: function(t) { for (var i = new Float32Array(4 * this.totalGradientPixelCount), r = 0; r < this.idCount; r++) e.changeColorsInDataGradient(i, r, [t, t, t, t, t, t]); return i } }, { key: "changeColorsInDataGradient", value: function(t, i, r) { for (var n = 0; n < this.gradientValueCount; n++) e.changePixelInDataGradient(t, n, i, r[n]); return t } }, { key: "changePixelInDataGradient", value: function(e, t, i, r) { for (var n = 0; n < 4; n++) e[4 * (i * this.gradientValueCount + t) + n] = r[n]; return e } }]), e }();
    t.default = n, n.gradientValueCount = 5, n.idCount = 16, n.totalGradientPixelCount = n.gradientValueCount * n.idCount, n.thumbImage = new Image, n.thumbImage.src = "/static/img/paintthumb.png", n.thumbImageLoaded = !1, n.thumbImage.onload = function() { n.thumbImageLoaded = !0 } }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(20),
        o = (r(s), i(40)),
        l = (r(o), i(4)),
        u = r(l),
        h = { default: { primary: 2, secondary: 4, skin: 30, default: 6 } },
        c = function() {
            function e() { n(this, e), this.paints = {}, this.thumbnail = void 0, this.thumbnailNeedsUpdating = !0 } return a(e, [{ key: "equals", value: function(e) { if (Object.keys(e.paints).length != Object.keys(this.paints).length) return !1; for (var t in e.paints)
                        if (!e.paints[t].equals(this.paints[t])) return !1; return !0 } }, { key: "getPaintByMapping", value: function(e) { if (e in this.paints) return this.paints[e]; if (e in h.default) { var t = u.default.getPaint(h.default[e]) || u.default.getPaint(h.default.primary); return t.gradient } return u.default.getPaint(h.default.primary).gradient } }, { key: "getSingleColorByMapping", value: function(e) { return this.getPaintByMapping(e).getSolidColor() } }, { key: "getVec4ArrayByMapping", value: function(e) { return this.getPaintByMapping(e).getVec4Array() } }, { key: "addLayer", value: function(e) { for (var t in e.paints) this.paints[t] = e.paints[t] } }, { key: "setPaint", value: function(e, t) { this.thumbnailNeedsUpdating = !0, this.paints[e] = u.default.getPaint(t).gradient } }, { key: "setUniquePaint", value: function(e, t) { this.thumbnailNeedsUpdating = !0, this.paints[e] = t } }, { key: "getGradientTexture", value: function(t, i) { if (void 0 != t) { for (var r = t.textureSize, n = [], a = 0; a < r; a++) n.push(this.getPaintByMapping(t.getMapping(a))); for (var s = new Float32Array(8 * r * 4), o = 0; o < 5; o++)
                            for (var l = 0; l < r; l++) { var u = n[l].getData(o);
                                e.setPixelOfImageData(s, o, l, u) }
                        for (var h = 0, c = 7, d = 0; d < r; d++)
                            for (var f = 0; f < 4; f++) { var p = 1;
                                void 0 != i && i.length > h && (p = i[h]), e.setComponentOfImageData(s, c, d, f, p), h += 1 }
                        return e.makeTextureFromData(s, 8, r) } } }, { key: "getThumbnail", value: function(e) { if (void 0 != this.thumbnail && !this.thumbnailNeedsUpdating) return this.thumbnail; var t = document.createElement("canvas"),
                        i = t.getContext("2d");
                    t.height = 32, t.width = 32, i.globalCompositeOperation = "source-over"; var r = 0; for (var n in this.paints) { var a = this.paints[n],
                            s = new Image;
                        s.src = a.getGradientThumbnail(), i.drawImage(s, 7 * r, 7 * r, 16, 16), r++ } return this.thumbnail = t.toDataURL(), this.thumbnailNeedsUpdating = !1, this.thumbnail } }], [{ key: "getPaintSchemesInCategory", value: function(t) { var i = []; for (var r in e.presetPaintSchemesByName) e.presetPaintSchemesByName[r].category == t && i.push(e.presetPaintSchemesByName[r]); return i } }, { key: "setPixelOfImageData", value: function(e, t, i, r) { for (var n = 0; n < 4; n++) e[4 * (8 * i + t) + n] = r[n] } }, { key: "setComponentOfImageData", value: function(e, t, i, r, n) { e[4 * (8 * i + t) + r] = n } }, { key: "makeTextureFromData", value: function(e, t, i) { var r = new THREE.DataTexture(e, t, i, THREE.RGBAFormat, THREE.FloatType); return r.minFilter = THREE.LinearFilter, r.magFilter = THREE.LinearFilter, r.generateMipmaps = !1, r.flipY = !1, r.needsUpdate = !0, r } }]), e }();
    t.default = c, c.presetPaintSchemesByName = {} }, function(e, t) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        n = function() {
            function e(t, r) { i(this, e), this._surface = t || [0], this._dominance = r || [4], this.idCount = this._surface.length, this.textureSize = 16; for (var n = 2; n <= 16; n *= 2)
                    if (this.idCount <= n) { this.textureSize = n; break } } return r(e, [{ key: "getMapping", value: function(t) { var i = this._dominance[t]; return i <= 3 ? e.paintSurface[this._surface[t]] : e.paintDominance[i] } }, { key: "getAllMappings", value: function() { for (var e = {}, t = 0; t < this.idCount; t++) { var i = this.getMapping(t);
                        void 0 != i && (e[i] = void 0) } return e } }]), e }();
    t.default = n, n.paintSurface = ["blank", "default", "cloth", "metal", "skin", "bone", "glass", "leather", "hair", "glowing", "paint", "wood", "gem", "stone", "plastic", "silk"], n.paintDominance = ["blank", "default", "default B", "default C", "primary", "secondary", "tertiary", "primary B", "secondary B", "tertiary B", "primary C", "quaternary", "quinary", "part A", "part B", "part C"] }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(5),
        o = r(s),
        l = i(1),
        u = r(l),
        h = { MAX_VERTEX_ATTRIBS: 16, MAX_FRAGMENT_UNIFORM_VECTORS: 64, MAX_TEXTURE_SIZE: 1024, MAX_VERTEX_TEXTURE_IMAGE_UNITS: 4, MAX_TEXTURE_IMAGE_UNITS: 4, OES_texture_float: void 0 },
        c = function() {
            function e() { n(this, e) } return a(e, null, [{ key: "init", value: function() { this.specs = { rendering: "", failedSpecs: {}, renderingSpecs: {}, platform: navigator.platform, userAgent: navigator.userAgent, mobile: this._getMobile(), screen: {}, browser: this._getBrowser() }, this._getScreen(), this._getWebGl(), "supported" != this.specs.rendering && console.log("Questionable rendering support:", this.specs.rendering, this.failedSpecs), o.default.spec("renderingSupport", this.specs.rendering) } }, { key: "_getMobile", value: function() { var e = !1; return function(t, i) {
                        (/(android|bb\d+|meego).+mobile|avantgo|bada|android|ipad|playbook|silk\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0) }(navigator.userAgent || navigator.vendor || window.opera), e } }, { key: "_getWebGl", value: function() { if (this.specs.webglParameters = void 0, !window.WebGLRenderingContext) return void(this.specs.rendering = "noWebGlBrowser"); var e = document.createElement("canvas"),
                        t = void 0; try { t = e.getContext("webgl") || e.getContext("experimental-webgl") } catch (e) { return void(this.specs.rendering = "noWebGlGraphics") } if (null === t || void 0 === t) return void(this.specs.rendering = "webglDisabled");
                    this.specs.rendering = "supported"; var i = this._getWebGlParameters(t);
                    Object.assign(h, u.default.requirements); for (var r in h) void 0 == h[r] ? r in i || (this.specs.rendering = "requirementsNotMet", this.specs.failedSpecs[r] = !1) : i[r] < h[r] && (this.specs.rendering = "requirementsNotMet", this.specs.failedSpecs[r] = i[r]);
                    this.specs.renderingSpecs = i } }, { key: "_getWebGlParameters", value: function(e) { var t = ["VENDOR", "VERSION", "RENDERER", "SHADING_LANGUAGE_VERSION", "RED_BITS", "GREEN_BITS", "BLUE_BITS", "ALPHA_BITS", "DEPTH_BITS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_VARYING_VECTORS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_FRAGMENT_UNIFORM_VECTORS", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_SIZE", "MAX_TEXTURE_IMAGE_UNITS", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_RENDERBUFFER_SIZE", "MAX_VIEWPORT_DIMS", "ALIASED_LINE_WIDTH_RANGE", "ALIASED_POINT_SIZE_RANGE"],
                        i = {}; for (var r in t) { var n = t[r];
                        i[n] = e.getParameter(e[n]) } var a = ["ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_float", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_frag_depth", "EXT_sRGB", "EXT_shader_texture_lod", "EXT_texture_filter_anisotropic", "OES_element_index_uint", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear", "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_atc", "WEBGL_compressed_texture_es3", "WEBGL_compressed_texture_etc1", "WEBGL_compressed_texture_pvrtc", "WEBGL_compressed_texture_s3tc", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders", "WEBGL_depth_texture", "WEBGL_draw_buffers", "WEBGL_lose_context"]; for (var s in a) { var o = a[s];
                        i[o] = !!e.getExtension(o) } var l = e.getExtension("WEBGL_debug_renderer_info"); return null != l && (i.UNMASKED_RENDERER_WEBGL = e.getParameter(l.UNMASKED_RENDERER_WEBGL), i.UNMASKED_VENDOR_WEBGL = e.getParameter(l.UNMASKED_VENDOR_WEBGL)), i } }, { key: "_getScreen", value: function() { this.specs.screen = { screen: { width: screen.width, height: screen.height }, window: { width: $(window).width(), height: $(window).height() } } } }, { key: "_getBrowser", value: function() { try { var e, t = navigator.userAgent,
                            i = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; return /trident/i.test(i[1]) ? (e = /\brv[ :]+(\d+)/g.exec(t) || [], { name: "IE", version: e[1] || "" }) : "Chrome" === i[1] && (e = t.match(/\bOPR|Edge\/(\d+)/), null != e) ? { name: "Opera", version: e[1] } : (i = i[2] ? [i[1], i[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && i.splice(1, 1, e[1]), { name: i[0], version: i[1] }) } catch (e) { return { name: "unknown", version: 0, compatible: "unknown" } } } }, { key: "_checkCompatible", value: function() {} }]), e }();
    t.default = c }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(2),
        o = (r(s), function() {
            function e() { n(this, e) } return a(e, null, [{ key: "init", value: function() { this.initURLVariables() } }, { key: "getCharacterURLString", value: function(e) { var t = []; for (var i in e.parts) 0 != e.parts[i] && t.push(e.parts[i]); var r = []; for (var n in e.sliders) 0 != e.sliders[n] && r.push(e.sliders[n]); return t.join(",") + "&" + r.join(",") + "&" + e.pose } }, { key: "addCharacterToURL", value: function(e) { var t = URLData.getCharacterURLString(e);
                    window.history.replaceState({}, "foo", "/index.html?" + t) } }, { key: "initURLVariables", value: function() { var e = window.location.search.substring(1).split("&");
                    this.variables = {}; for (var t in e) { var i = e[t].split("="),
                            r = i[0],
                            n = !(i.length > 1) || i[1]; "false" == n ? n = !1 : "true" == n && (n = !0), this.variables[r] = n } } }]), e }());
    t.default = o }, function(e, t) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function r(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function n(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = function(e) {
            function t() { return i(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)) } return n(t, e), a(t, [{ key: "mergeVertices", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8; if (this.index)
                        for (var t = {}, i = this.index.array, r = this.attributes.position.array, n = 0; n < i.length / 3; n++)
                            for (var a = 0; a < 3; a++) { var s = 3 * n + a,
                                    o = i[s],
                                    l = r[3 * o].toFixed(e) + "," + r[3 * o + 1].toFixed(e) + "," + r[3 * o + 2].toFixed(e);
                                l in t && i[3 * n + (a + 1) % 3] != o && i[3 * n + (a + 2) % 3] != o ? i[s] = t[l] : t[l] = i[s] } else console.warn("Can not merge non indexed geometry") } }, { key: "convertToIndexed", value: function() { if (this.index) console.warn("Mesh is already indexed");
                    else { for (var e = this.attributes.position.array.length / 3, t = new Uint32Array(e), i = 0; i < e; i++) t[i] = i;
                        this.setIndex(new THREE.BufferAttribute(t, 1)) } } }, { key: "copyWithSharing", value: function() { if ("mixerBones" in this && void 0 !== this.ckbTotalInfluences) { var e = new THREE.BufferGeometry;
                        e.ckbTotalInfluences = this.ckbTotalInfluences, e.ckbAdditionalSkinIndex = new this.ckbAdditionalSkinIndex.constructor(this.ckbAdditionalSkinIndex), e.ckbAdditionalSkinWeight = new this.ckbAdditionalSkinIndex.constructor(this.ckbAdditionalSkinWeight), e.filePath = this.filePath, e.name = this.name, e.mainSkeleton = this.mainSkeleton, e.skinned = this.skinned, e.index = this.index, e.paintMapping = this.paintMapping; for (var t, i = this.attributes, r = e.attributes, n = ["position", "normal", "uv", "uv2", "skinWeight", "skinIndex", "color"], a = 0, s = n.length; a < s; a++) t = n[a], t in i && (r[t] = i[t]);
                        e.morphAttributes = this.morphAttributes, e.morphTargetInfluences = this.morphTargetInfluences, e.morphTargetDictionary = this.morphTargetDictionary, this.morphTargets && (e.morphTargets = this.morphTargets), e.poses = this.poses; for (var o, l, u = this.mixerBones, h = [], c = 0, d = u.length; c < d; c++) o = u[c], l = new THREE.Bone, l.position.copy(o.position), l.quaternion.copy(o.quaternion), l.scale.copy(o.scale), l.poses = o.poses, l.parentId = o.parentId, l.name = o.name, h.push(l); return e.mixerBones = h, "skinIndex" in this && (e.skinIndex = (new THREE.BufferAttribute).copy(this.skinIndex)), e } return this } }]), t }(THREE.BufferGeometry);
    t.default = s }, function(e, t) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        n = function() {
            function e() { var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                i(this, e), this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.uniforms = {}, t && (this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1), this.scene = new THREE.Scene, this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), null), this.scene.add(this.quad)) } return r(e, [{ key: "render", value: function(e, t, i, r, n) {} }, { key: "setMaterial", value: function(e) { this.quad.material = e, this.uniforms = e.uniforms, this.material = this.quad.material } }]), e }();
    t.default = n }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function s(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var o = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        l = i(14),
        u = r(l),
        h = i(8),
        c = r(h),
        d = i(1),
        f = r(d),
        p = i(13),
        v = (r(p), function(e) {
            function t(e, i) { n(this, t); var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i, !1));
                r.layers = {}; var s = r._properties.uniforms; return s.displacementScale = { type: "f", value: .1 }, r._properties.defines.USE_CK_COLOR = !0, r.uv2 = "uv2" in e.attributes, r.wrapDecal = "bg" == i.slot, r.textureSize = 512, r.bakeDepth = !1, r.hasDepth = !1, r.color = !0, r.paintScheme = void 0, r._init(), r } return s(t, e), o(t, [{ key: "applyPaintScheme", value: function(e) { console.log("applying paint scheme", e), this.paintScheme = e } }, { key: "setDecal", value: function(e, t, i) { arguments.length > 3 && void 0 !== arguments[3] && arguments[3]; if (void 0 != t.uvwh) { var r = void 0 === i ? t.uvwh : new THREE.Vector4(t.uvwh.x + i.x, t.uvwh.y + i.y, t.uvwh.z, t.uvwh.w);
                        this.uniforms["uvLayerOffset_" + e] = { type: "v4", value: r } } if (!(e in this.layers && this.layers[e].texturePath == t.texturePath)) { this.layers[e] = t; var n = c.default.getNow(t.texturePath);
                        void 0 !== n && this.wrapDecal && (n.wrapS = THREE.RepeatWrapping, n.wrapT = THREE.RepeatWrapping), this.uniforms["packedMap_" + e] = { type: "t", value: n }, this.requestRebuild() } } }, { key: "setLayerColorUniform", value: function(e, t, i) { var r = this.getColorUniformName(e, t),
                        n = this.uniforms[r];
                    void 0 !== n ? ("v4" == n.type && (i = i[2]), n.value = i, this.needsUpdate = !0) : console.error("Failed to find uniform", r, "in", this.uniforms) } }, { key: "getColorUniformName", value: function(e, t) { return "ckUserColor_" + e + "_" + t + "_color" } }, { key: "requestRebuild", value: function() { this.needsRebuild = !0 } }, { key: "rebuildShaderCodeIfNeeded", value: function() { this.needsRebuild && (this._formLayerGLSL(), this.needsRebuild = !1) } }, { key: "_formLayerGLSL", value: function() { var e = this,
                        t = [],
                        i = [],
                        r = [],
                        n = [],
                        a = function(e) { t.push(e) },
                        s = function(e) { i.push(e) },
                        o = function(e) { r.push(e) },
                        l = function(e) { n.push(e) },
                        u = !1,
                        h = !1; for (var c in this.layers)
                        if (this.layers[c].layerTypeCounts.depth > 0 && this.layers[c].displace) { u = !0; break }
                    this.hasDepth = u; for (var d in this.layers)
                        if (this.layers[d].layerTypeCounts.normal > 0) { h = !0; break }
                    for (var p in this.uniforms) p.startsWith("ckUserColor_") && delete this.uniforms[p]; if (!(Object.keys(this.layers).length > 0)) return this.defines.USE_LAYERS = !1, this.fragmentShader = THREE.ShaderChunk[this.origFragmentShader], this.vertexShader = THREE.ShaderChunk[this.origVertexShader], void(this.extensions.derivatives = this.useNormalMap);
                    this.defines.USE_LAYERS = !0, s("vec2 layerUvs"), s("vec4 layerColor"), u && (l("vec2 layerUvs"), l("vec4 layerColor")), this.extensions.derivatives = !0, s("vec3 normalAccumulation = vec3(0.0,0.0,1.0)"), (u || h) && s("vec3 layerNormal = vec3(0.0,0.0,1.0)"), u && (l("float heightAccumulation = 0.0"), this.bakeDepth && s("float heightAccumulation = 0.0")); var v = {},
                        g = {},
                        m = function(t) { var i = e.layers[t],
                                r = e.uv2 && !i.baseLayer ? "vUv2" : "vUv",
                                n = i.packedTextureCount + i.layerTypeCounts.color,
                                h = 1 / n; if (void 0 !== i.uvwh) { var c = "uvLayerOffset_" + t;
                                a("uniform vec4 " + c), s("layerUvs = vec2( " + r + ".x / " + c + ".z - " + c + ".x / " + c + ".z , " + r + ".y / " + c + ".w - " + c + ".y /" + c + ".w )"), u && (o("uniform vec4 " + c), l("layerUvs = vec2( " + r + ".x / " + c + ".z - " + c + ".x / " + c + ".z , " + r + ".y / " + c + ".w - " + c + ".y /" + c + ".w )")) } else s("layerUvs = " + r); var d = i.baseLayer ? "if(layerUvs.x > 0.0 && layerUvs.x < 1.0 && layerUvs.y > 0.0 && layerUvs.y < 1.0 ){" : "if(layerUvs.x > 0.03 && layerUvs.x < 0.97 && layerUvs.y > 0.03 && layerUvs.y < 0.97 ){";
                            s(d), u && l(d); var p = "packedMap_" + t;
                            a("uniform sampler2D " + p), u && o("uniform sampler2D " + p); for (var m = [], y = 0; y < n; y++) { var b = p + "_" + y,
                                    _ = "vec4 " + b + " = texture2D( " + p + ", vec2(layerUvs.x / float(" + n + ") + float(" + h * y + "),layerUvs.y) )";
                                s(_), u && l(_), m.push(b) } for (var w = 0, k = 0, S = function() { var e = i.layerTypeCounts.color + Math.floor(w / 4),
                                        t = m[e] + "[" + w % 4 + "]"; return w += 1, t }, E = function(t) { var r = e.getColorUniformName(i.layerMappings[t], i.slot); return v[r] = void 0, r }, M = function(t) { var r = e.getColorUniformName(i.layerMappings[t], i.slot); return g[r] = void 0, r }, C = 0, T = i.layerTypes.length; C < T; C++) { var P = i.layerTypes[C],
                                    x = (i.displace || f.default.forge) && "depth" == P; "base" == P ? (s("diffuseColor = vec4( mapGradient(" + M(C) + "," + m[0] + ".r).rgb, 1.0 )"), k++) : "overlay" == P ? s("diffuseColor = vec4( blendOverlay(diffuseColor.rgb, " + E(C) + ".rgb, " + S() + "), 1.0)") : x || "normal" == P ? (e.bake ? (S(), S()) : (s("layerNormal = vec3( " + S() + "* 2.0 - 1.0, " + S() + " * 2.0 - 1.0, 0.0 )"), s("layerNormal = vec3( layerNormal.x, layerNormal.y, 1.0- pow(layerNormal.x, 2.0) - pow(layerNormal.y, 2.0) )"), s("normalAccumulation = NormalBlend_UnpackedRNM( normalAccumulation, layerNormal )")), x && (e.bake ? e.bakeDepth ? s("heightAccumulation += " + S() + " - 0.5") : S() : l("heightAccumulation += " + S() + " - 0.5"))) : ("baseGradient" == P ? (s("vec4 gradientResult = mapGradient(" + M(C) + "," + m[0] + ".r)"), k++, s("layerColor.a = " + S() + "* gradientResult.a"), s("layerColor.rgb = gradientResult.rgb;")) : "solid" == P ? (s("layerColor.a = " + S() + "*" + E(C) + ".a"), s("layerColor.rgb = " + E(C) + ".rgb")) : "gradient" == P ? (s("layerColor.r = " + S()), s("layerColor.a = " + S()), s("layerColor.rgb = " + E(C) + ".rgb")) : "color" == P ? (s("layerColor = " + m[k]), k++) : console.log("unknown sub type layer", P), s("diffuseColor = vec4( mix( diffuseColor.rgb, layerColor.rgb, layerColor.a ), 1.0)")) } s("}"), u && l("}") }; for (var y in this.layers) m(y); for (var b in v) a("uniform vec4 " + b), this.uniforms[b] = { type: "v4", value: new THREE.Vector4(0, .5, .2, 1) }; for (var _ in g) a("uniform vec4 " + _ + "[5]"), this.uniforms[_] = { type: "v4v", value: [new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 0, 0), new THREE.Vector3(.5, .5, 0), new THREE.Vector3(0, 0, 0)] };
                    this.bakeDepth ? s(u ? "diffuseColor = vec4( heightAccumulation + 0.5, heightAccumulation + 0.5, heightAccumulation + 0.5, diffuseColor.a )" : "diffuseColor = vec4( 0.5, 0.5, 0.5, diffuseColor.a )") : u && (o("uniform float displacementScale"), l("transformed += normal * heightAccumulation * displacementScale")), i.push(""), t.push(""), n.push(""), r.push(""), u ? this.vertexShader = THREE.ShaderChunk[this.origVertexShader].replace("#include <ck_layer_vertex>", n.join(";\n")).replace("#include <ck_layer_pars_vertex>", r.join(";\n")) : this.vertexShader = THREE.ShaderChunk[this.origVertexShader], this.fragmentShader = THREE.ShaderChunk[this.origFragmentShader].replace("#include <ck_layer_fragment>", i.join(";\n")).replace("#include <ck_layer_pars_fragment>", t.join(";\n")), this.needsUpdate = !0 } }, { key: "clearDecals", value: function() { for (var e in this.layers) this.removeDecal(e) } }, { key: "removeDecal", value: function(e) { if (e in this.layers) { this.layers[e];
                        delete this.layers[e]; var t = "packedMap_" + e;
                        this.uniforms[t].value.dispose(), delete this.uniforms[t], this.requestRebuild(), this.needsUpdate = !0 } } }, { key: "setBake", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    e ? (this.origFragmentShader = "ck_meshbasic_frag", this.origVertexShader = "ck_meshbasic_vert", this.vertexShader = THREE.ShaderChunk.ck_meshbasic_vert, this.fragmentShader = THREE.ShaderChunk.ck_meshbasic_frag, this.bake = !0, this.bakeDepth = t, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this._formLayerGLSL(), this.part.slot.endsWith("L") && (this.side = THREE.BackSide)) : console.warn("Set bake false not implemented yet") } }, { key: "displacementScale", set: function(e) { this.uniforms.displacementScale.value = e } }, { key: "hasDecals", get: function() { return Object.keys(this.layers).length > 0 } }, { key: "color", set: function(e) { this.defines.USE_CK_COLOR != e && (this.defines.USE_CK_COLOR = e, this.needsUpdate = !0) } }]), t }(u.default));
    t.default = v }, function(e, t, i) {
    "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 });
    var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(56),
        o = r(s),
        l = i(8),
        u = r(l),
        h = i(12),
        c = r(h),
        d = i(10),
        f = r(d),
        p = i(25),
        v = r(p),
        g = i(5),
        m = r(g),
        y = Math.pow(2, 8) - 1,
        b = Math.pow(2, 16) - 1,
        _ = 1,
        w = function() {
            function e() { n(this, e) }
            return a(e, [{ key: "load", value: function(e, t, i, r) { var n = this,
                        a = new XMLHttpRequest;
                    a.open("GET", e, !0), a.responseType = "arraybuffer", a.success = t, a.failure = r, a.onload = function(i) { a.response && "OK" == a.statusText ? t(n.process(a.response, e)) : r && r(i) }, a.send(null) } }, { key: "process", value: function(e, t) { this.debugMarkerIterator = 0; try { this.reader = new o.default(e) } catch (e) { m.default.exception("Failed to load ckb for " + t) } this.geometry = new v.default; var i = t.split("/");
                    this.geometry.filePath = t, this.geometry.name = i[i.length - 1].split(".")[0], this._settings(), this._indices(), this._points(), this._normals(), this._uvs(), this._vertexColors(), this._blends(), this._weights(), this._parent(), this._poses(), this._paintMapping(); var r = this.geometry; return delete this.geometry, delete this.reader, r } }, { key: "_settings", value: function() { Math.floor(this.reader.version) != Math.floor(_) && console.warn(".ckb mesh file version mismatch, loader is", this.loaderVersion, "while .ckb is", this.reader.version); for (var e = ["mesh", "normals", "uv1", "uv2", "blendTargets", "blendNormals", "weights", "animations", "jointScales", "addon", "paintMapping", "singleParent", "frameMappings", "indices32bit", "originalIndices", "vertexColors"], t = {}, i = 0, r = e.length; i < r; i++) t[e[i]] = this.reader.getBit();
                    this.options = t, this.geometry.mainSkeleton = !this.options.addon && this.options.weights } }, {
                key: "_indices",
                value: function() {
                    if (this.options.mesh) {
                        var e = Math.round(this.reader.getFloat()),
                            t = this.options.indices32bit ? this.reader.getUint32Array(e) : this.reader.getInt16Array(e);
                        if (this.geometry.setIndex(new THREE.BufferAttribute(t, 1)), this.options.originalIndices) { var i = this.options.indices32bit ? this.reader.getUint32Array(e) : this.reader.getInt16Array(e);
                            this.geometry.originalIndices = new THREE.BufferAttribute(i, 1) }
                    }
                }
            }, { key: "_points", value: function() { if (this.options.mesh) { var e = this.options.indices32bit ? this.reader.getFloat() : this.reader.getInt16();
                        this.vertCount = e, this.geometry.hasGeo = !0; for (var t = [], i = 0; i < 6; i++) t.push(this.reader.getFloat()); for (var r = [t[3] - t[0], t[4] - t[1], t[5] - t[2]], n = new Float32Array(3 * e), a = 0, s = this.reader.i16, o = this.reader.dataView, l = 0; l < e; l++, s += 6) n[a++] = o.getUint16(s, !0) / b * r[0] + t[0], n[a++] = o.getUint16(s + 2, !0) / b * r[1] + t[1], n[a++] = o.getUint16(s + 4, !0) / b * r[2] + t[2];
                        this.reader.i16 += 6 * e, this.positions = n, this.geometry.addAttribute("position", new THREE.BufferAttribute(n, 3)) } } }, { key: "_normals", value: function() { if (!this.options.normals) return void(this.options.mesh && this.geometry.computeVertexNormals()); var e = this.vertCount; if (0 != e) { for (var t = new Float32Array(3 * e), i = 0, r = 0; r < e; r++) t[i] = this.reader.getInt8() / y * 2 - 1, t[i + 1] = this.reader.getInt8() / y * 2 - 1, t[i + 2] = (-1 + 2 * this.reader.getBit()) * (1 - Math.pow(t[i], 2) - Math.pow(t[i + 1], 2)), i += 3;
                        this.geometry.addAttribute("normal", new THREE.BufferAttribute(t, 3)) } } }, { key: "_uvs", value: function() { if (this.options.uv1) { var e = this.vertCount,
                            t = this.options.uv2 ? ["uv", "uv2"] : ["uv"]; for (var i in t) { for (var r = t[i], n = [], a = 0; a < 4; a++) n.push(this.reader.getFloat()); for (var s = [n[2] - n[0], n[3] - n[1]], o = new Float32Array(2 * e), l = 0, u = 0; u < e; u++) o[l++] = this.reader.getInt16() / b * s[0] + n[0], o[l++] = this.reader.getInt16() / b * s[1] + n[1];
                            this.geometry.addAttribute(r, new THREE.BufferAttribute(o, 2)) } } } }, { key: "_vertexColors", value: function() { if (this.options.vertexColors)
                        for (var e = this.reader.getInt8(), t = 0; t < e; t++) { var i = (this.reader.getString(), this.reader.getInt8Array(this.vertCount)),
                                r = new Float32Array(3 * this.vertCount); for (var n in i) r[3 * n] = r[3 * n + 1] = r[3 * n + 2] = i[n] / 255;
                            this.geometry.addAttribute("color", new THREE.BufferAttribute(r, 3)) } } }, { key: "_blends", value: function() { if (this.options.blendTargets) { var e = this.reader.getInt8(),
                            t = this.vertCount; if (0 != e) { var i = this.positions,
                                r = [],
                                n = [];
                            this.geometry.morphTargetDictionary = {}, this.geometry.morphTargetInfluences = []; for (var a = 0; a < e; a++) { var s = this.reader.getString();
                                this.geometry.morphTargetDictionary[s] = a, this.geometry.morphTargetInfluences.push(0); for (var o = [], l = 0; l < 6; l++) o.push(this.reader.getFloat()); for (var u = [o[3] - o[0], o[4] - o[1], o[5] - o[2]], h = new Float32Array(3 * t), c = 0, d = 0; d < t; d++, c += 3) h[c] = i[c] + this.reader.getInt8() / y * u[0] + o[0], h[c + 1] = i[c + 1] + this.reader.getInt8() / y * u[1] + o[1], h[c + 2] = i[c + 2] + this.reader.getInt8() / y * u[2] + o[2]; if (r.push(new THREE.BufferAttribute(h, 3)), this.options.blendNormals) { for (var f = new Float32Array(3 * t), p = 0, v = 0; p < t; p++) f[v] = this.reader.getInt8() / y * 2 - 1, f[v + 1] = this.reader.getInt8() / y * 2 - 1, f[v + 2] = (-1 + 2 * this.reader.getBit()) * (1 - Math.pow(f[v], 2) - Math.pow(f[v + 1], 2)), v += 3;
                                    n.push(new THREE.BufferAttribute(f, 3)) } } this.geometry.morphAttributes.position = r, this.options.blendNormals && (this.geometry.morphAttributes.normal = n) } } } }, { key: "_weights", value: function() { if (this.geometry.skinned = this.options.weights, this.options.weights) { var e = this.reader.getInt8();
                        this.geometry.ckbTotalInfluences = e; for (var t, i = this.vertCount, r = Math.max(0, e - 4), n = this.reader.i16, a = this.reader.dataView, s = new Float32Array(4 * i), o = new Float32Array(i * r), l = 0, u = e < 4 ? 4 : e; l < u; l++)
                            if (e > l)
                                if (l < 4)
                                    for (t = 0; t < i; t++) s[4 * t + l] = a.getUint16(n + 2 * (t * e + l), !0);
                                else
                                    for (t = 0; t < i; t++) o[t * r + (l - 4)] = a.getUint16(n + 2 * (t * e + l), !0);
                        else
                            for (t = 0; t < i; t++) s[4 * t + l] = 0;
                        this.geometry.addAttribute("skinIndex", new THREE.BufferAttribute(s, 4)), this.geometry.ckbAdditionalSkinIndex = o, this.reader.i16 = this.reader.i16 + e * i * 2, n = this.reader.i16; for (var h, c = new Float32Array(4 * i), d = new Float32Array(i * r), f = 0, p = e < 4 ? 4 : e; f < p; f++)
                            if (e > f)
                                if (f < 4)
                                    for (h = 0; h < i; h++) c[4 * h + f] = a.getUint16(n + 2 * (h * e + f), !0) / b;
                                else
                                    for (h = 0; h < i; h++) d[h * r + (f - 4)] = a.getUint16(n + 2 * (h * e + f), !0) / b;
                        else
                            for (h = 0; h < i; h++) c[4 * h + f] = 0;
                        this.geometry.addAttribute("skinWeight", new THREE.BufferAttribute(c, 4)), this.geometry.ckbAdditionalSkinWeight = d, this.reader.i16 = this.reader.i16 + e * i * 2 } } }, { key: "_parent", value: function() { if (this.options.singleParent) { for (var e = (this.reader.getString(), this.reader.getInt16()), t = this.vertCount, i = new Float32Array(4 * t), r = new Float32Array(4 * t), n = 0, a = 4 * t; n < a; n++) i[n] = n % 4 == 0 ? e : 0, r[n] = n % 4 == 0 ? 1 : 0;
                        this.geometry.addAttribute("skinIndex", new THREE.BufferAttribute(i, 4)), this.geometry.addAttribute("skinWeight", new THREE.BufferAttribute(r, 4)), this.geometry.ckbTotalInfluences = 1, this.geometry.skinned = !0, this.geometry.ckbAdditionalSkinWeight = [], this.geometry.ckbAdditionalSkinIndex = [] } } }, { key: "_poses", value: function() { var e = this; if (this.options.animations) { var t = this.reader,
                            i = t.getInt8(),
                            r = void 0; if (this.options.frameMappings) { var n = this.reader.getInt16(),
                                a = this.reader.getInt16Array(n); if (a.length) { r = {}; for (var s = 0; s < a.length; s++) r[a[s]] = s } } for (var o = {}, l = [], u = this.reader.getFloat(), h = this.options.jointScales, c = h ? this.reader.getFloat() : 1, d = void 0, f = void 0, p = void 0, v = void 0, g = void 0, m = function() { return { pos: t.getBit() ? t.getPositionArray(1, u) : t.getPositionArray(v, u), rot: t.getBit() ? t.getQuaternionArray(1) : t.getQuaternionArray(v), scl: h ? t.getBit() ? t.getScaleArray(1, c) : t.getScaleArray(v, c) : [1, 1, 1], frameMapping: e.options.frameMappings ? r : void 0 } }, y = 0; y < i; y++)
                            if (d = t.getString(), f = t.getInt16(), v = t.getInt16(), "main" == d)
                                for (var b, _, w, k = 0; k < f; k++) b = t.getInt16(), w = new THREE.Bone, w.name = t.getString(), 5e3 == b ? (w.parentId = -1, this.geometry.mainSkeleton = !0) : w.parentId = b, _ = m(), w.position.fromArray(_.pos), w.quaternion.fromArray(_.rot), w.scale.fromArray(_.scl), w.poses = _, l.push(w);
                            else { for (g = {}, p = 0; p < f; p++) g[t.getString()] = m();
                                o[d] = g }
                        this.geometry.mixerBones = l, this.geometry.poses = o } } }, { key: "_paintMapping", value: function() { if (this.geometry.paintMapping = void 0, this.options.paintMapping) { var e = this.reader.getInt8();
                        this.geometry.paintMapping = { surface: this.reader.getInt8Array(e), dominance: this.reader.getInt8Array(e) } } } }, { key: "_checkDebugMarker", value: function() { 99 != this.reader.getInt8() && console.error("Failed Int8 marker " + this.debugMarkerIterator), 9999 != this.reader.getInt16() && console.error("Failed int16 marker " + this.debugMarkerIterator); var e = this.reader.getFloat();
                    (e < 9.98 || e > 10) && console.error("Failed float marker " + this.debugMarkerIterator, e), "999" != this.reader.getString() && console.error("Failed string marker " + this.debugMarkerIterator), 1 == this.reader.getBit() && 0 == this.reader.getBit() && 1 == this.reader.getBit() || console.error("Failed bit marker " + this.debugMarkerIterator), this.debugMarkerIterator++ } }], [{ key: "debugAddToScene", value: function() { var t = new e;
                    t.load("/static/herobundles/test.ckb", function(e) { var t = new THREE.MeshStandardMaterial({ color: new THREE.Color(.6, .73, .73), roughness: .65, metalness: 0, map: u.default.loaders.jpg.load("/static/textures/grid.jpg"), morphTargets: !0, skinning: !0 }),
                            i = f.default.makeMesh(e, t),
                            r = new c.default;
                        r.add(i, "testSlot"), console.log("test mesh", i), i.hasGeo && CK.scene.add(i), CK.scene.add(r.threeObj), CK.scene.updateMatrixWorld(), window.nextPose = function() { r.changePose(r.pose + 1) }, window.prevPose = function() { r.changePose(r.pose - 1) }, window.setSlider = function(e, t) { r.setSlider(e, t) } }, void 0, function(e) { console.log("failed!", e) }) } }]), e
        }();
    t.default = w
}, function(e, t) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        n = function() {
            function e(t, r) { i(this, e), this.size = r, this.location = t, this.branches = {}, this.filled = !1 } return r(e, [{ key: "add", value: function(t) { return this.branches[t[0] + 2 * t[1]] = new e([this.location[0] + this.size / 2 * t[0], this.location[1] + this.size / 2 * t[1]], this.size / 2) } }, { key: "get", value: function(e) { return this.branches[e[0] + 2 * e[1]] } }, { key: "fillNextEmptySlot", value: function(e) { if (!this.filled) { if (this.isEmpty() && this.size == e) return this.filled = !0, this; if (e < this.size)
                            for (var t = 0; t < 2; t++)
                                for (var i = 0; i < 2; i++) { var r = this.get([t, i]);
                                    void 0 === r && (r = this.add([t, i])); var n = r.fillNextEmptySlot(e); if (void 0 !== n) return n } } } }, { key: "isEmpty", value: function() { if (this.filled) return !1; for (var e = 0; e < 4; e++)
                        if (e in this.branches) return !1; return !0 } }]), e }();
    t.default = n }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function s(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var o = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        l = function e(t, i, r) { null === t && (t = Function.prototype); var n = Object.getOwnPropertyDescriptor(t, i); if (void 0 === n) { var a = Object.getPrototypeOf(t); return null === a ? void 0 : e(a, i, r) } if ("value" in n) return n.value; var s = n.get; if (void 0 !== s) return s.call(r) },
        u = i(4),
        h = (r(u), i(11)),
        c = r(h),
        d = i(52),
        f = r(d),
        p = i(48),
        v = r(p),
        g = i(45),
        m = r(g),
        y = i(1),
        b = r(y),
        _ = i(17),
        w = (r(_), i(3)),
        k = r(w),
        S = i(5),
        E = (r(S), i(28)),
        M = (r(E), i(2)),
        C = (r(M), i(10)),
        T = (r(C), i(16)),
        P = r(T),
        x = i(49),
        O = r(x),
        R = function(e) {
            function t() { return n(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)) } return s(t, e), o(t, null, [{ key: "initDisplay", value: function() { l(t.__proto__ || Object.getPrototypeOf(t), "initDisplay", this).call(this), this.scene = new THREE.Scene, this.scene.autoUpdate = !1, this.environment = new m.default, this.scene.add(this.environment.threeObj), this.globalTransform = new THREE.Object3D, this.globalTransform.scale.set(b.default.globalScale, b.default.globalScale, b.default.globalScale), this.scene.add(this.globalTransform), this.globalTransform.add(this.activeCharacter.threeObj), this.canvas = document.getElementById("character-canvas"), this.renderer = new f.default(this.canvas.offsetWidth, this.canvas.offsetHeight), this.orbitCamera = new v.default(this.canvas.offsetWidth, this.canvas.offsetHeight, this.renderer, this._cameraMoved), this.rotateMesh = b.default.dragRotateMesh ? new O.default(this.globalTransform, this.renderer.renderer.domElement) : void 0, this.renderer.setSceneAndCamera(this.scene, this.orbitCamera.camera), this.targets = [], this.debugManipulatorSpace = "local", this.resetCharacterRotation(), this._start() } }, { key: "_registerEvents", value: function() { var e = this;
                    l(t.__proto__ || Object.getPrototypeOf(t), "_registerEvents", this).call(this), k.default.register(function() { e._updateScene() }, "animation"), k.default.register(function() { e.renderer.render() }, "render") } }, { key: "changeBackground", value: function(e) { this.environment.changeBackground(e) } }, { key: "resetCharacterRotation", value: function() { this.activeCharacter.characterDisplay.threeObj.rotation.y = b.default.characterRotation.y, this.activeCharacter.characterDisplay.threeObj.rotation.x = b.default.characterRotation.x, this.activeCharacter.characterDisplay.threeObj.rotation.z = b.default.characterRotation.z, this.activeCharacter.characterDisplay.threeObj.updateMatrixWorld() } }, { key: "enableMaterialSim", value: function() { this.activeCharacter.enableMaterialSim(), this.environment.showScaleVisualizer() } }, { key: "disableMaterialSim", value: function() { this.activeCharacter.disableMaterialSim(), this.environment.hideScaleVisualizer() } }, { key: "_keydown", value: function(e) { e.ctrlKey && (90 == e.keyCode ? c.default.undo() : 89 == e.keyCode && c.default.redo()), "37" == e.keyCode ? this.characters[0].threeObj.rotation.y -= Math.PI / 90 : "39" == e.keyCode && (this.characters[0].threeObj.rotation.y += Math.PI / 90), k.default.requestAnimationRefresh() } }, { key: "_updateScene", value: function() { this.scene.skeletonNeedsUpdate = !0, this.scene.updateMatrixWorld() } }, { key: "_resize", value: function() { this.renderer.resize(document.getElementById("character-canvas").offsetWidth, document.getElementById("character-canvas").offsetHeight), this.orbitCamera.resize(document.getElementById("character-canvas").offsetWidth, document.getElementById("character-canvas").offsetHeight), k.default.requestRenderRefresh() } }, { key: "_cameraMoved", value: function() { k.default.requestRenderRefresh() } }, { key: "setCharacterChangedCallback", value: function(e) { for (var t in this.characters) this.characters[t].setCharacterChangedCallback(e) } }, { key: "downloadScreenshot", value: function() { CK.orbitCamera.setOffset(0), b.default.hideBackgroundForScreenshots && (CK.environment.visible = !1); var e = CK.renderer.getScreenshot(b.default.hideBackgroundForScreenshots); if (b.default.hideBackgroundForScreenshots && (CK.environment.visible = !0), CK.orbitCamera.setOffset(), void 0 != e) { var t = document.createElement("a");
                        t.href = e, t.download = b.default.projectName + "Screenshot.png", document.body.appendChild(t), t.click(), document.body.removeChild(t) } k.default.requestAnimationRefresh() } }, { key: "requestThumbnail", value: function(e, t) { this.activeCharacter.requestDisplay(e, function() { var e = CK.renderThumbnail();
                        t(e) }) } }, { key: "renderThumbnail", value: function() { var e = CK.activeCharacter.characterDisplay.threeObj.rotation.y;
                    CK.resetCharacterRotation(); var t = b.default.thumbnailSize[0],
                        i = b.default.thumbnailSize[1],
                        r = new THREE.PerspectiveCamera(45, t / i, 2, 100),
                        n = b.default.cameras[this.orbitCamera.settingsName] || b.default.cameras.default;
                    r.position.fromArray(n.position), r.rotation.fromArray(n.rotation), r.updateProjectionMatrix(); var a = CK.activeCharacter.characterDisplay.meshes.bg;
                    b.default.hideBackgroundForThumbnails && (CK.environment.visible = !1, void 0 !== a && (a.visible = !1)); var s = CK.renderer.renderToImage(t, i, r); return b.default.hideBackgroundForThumbnails && (CK.environment.visible = !0, void 0 !== a && (a.visible = !0)), CK.activeCharacter.characterDisplay.threeObj.rotation.y = e, k.default.requestAnimationRefresh(), s } }, { key: "getScreenPosition", value: function(e) { var t = (new THREE.Vector3).copy(e);
                    t.project(this.orbitCamera.camera); var i = .5 * this.renderer.renderer.context.canvas.width,
                        r = .5 * this.renderer.renderer.context.canvas.height; return t.x = t.x * i + i, t.y = -(t.y * r) + r, { x: t.x, y: t.y } } }, { key: "debugLocateObject3d", value: function(e, t) { var i = this;
                    void 0 === t && (t = e.getWorldPosition()); var r = "__xform__" + e.name,
                        n = this.scene.getObjectByName(r);
                    void 0 == n && (n = new THREE.TransformControls(CK.orbitCamera.camera, CK.domElement), n.name = r, n.setSize(.2), n.setSpace(this.debugManipulatorSpace), n.addEventListener("change", function() { i.scene.updateMatrixWorld(!0), CK.GameLoop.requestAnimationRefresh() }), window.addEventListener("keydown", function(e) { "87" == e.keyCode ? n.setMode("translate") : "69" == e.keyCode ? n.setMode("rotate") : "82" == e.keyCode && n.setMode("scale") }), this.scene.add(n), n.attach(e)), n.position.copy(t), n.update() } }, { key: "addTarget", value: function(e) { var t = { mesh: new THREE.Mesh(new THREE.SphereBufferGeometry(.07), new THREE.MeshStandardMaterial({ color: 16777215, wireframe: !0 })), control: new THREE.TransformControls(this.orbitCamera.camera, this.renderer.renderer.domElement), character: this.activeCharacter };
                    this.scene.add(t.mesh), t.mesh.position.copy(e), t.position = t.mesh.position, t.control.addEventListener("change", function() { console.log("updateSolver"), t.character.characterDisplay.skeleton.blorkTarget = t.mesh, k.default.requestAnimationRefresh() }), t.control.attach(t.mesh), t.control.setSize(.75), this.scene.add(t.control), this.targets.push(t) } }, { key: "toggleDebugManipulatorSpace", value: function() { this.debugManipulatorSpace = "local" == this.debugManipulatorSpace ? "world" : "local"; var e = !0,
                        t = !1,
                        i = void 0; try { for (var r, n = this.scene.children[Symbol.iterator](); !(e = (r = n.next()).done); e = !0) { var a = r.value;
                            a instanceof THREE.TransformControls && a.setSpace(this.debugManipulatorSpace) } } catch (e) { t = !0, i = e } finally { try {!e && n.return && n.return() } finally { if (t) throw i } } k.default.requestAnimationRefresh() } }, { key: "updateDebugManipulators", value: function() { var e = !0,
                        t = !1,
                        i = void 0; try { for (var r, n = this.scene.children[Symbol.iterator](); !(e = (r = n.next()).done); e = !0) { var a = r.value;
                            a instanceof THREE.TransformControls && a.update() } } catch (e) { t = !0, i = e } finally { try {!e && n.return && n.return() } finally { if (t) throw i } } k.default.requestAnimationRefresh() } }, { key: "domElement", get: function() { return this.renderer.renderer.domElement } }]), t }(P.default);
    t.default = R }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function s(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var o = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        l = i(16),
        u = r(l),
        h = function(e) {
            function t() { return n(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)) } return s(t, e), o(t, null, [{ key: "domElement", get: function() { return document.createElement("div") } }]), t }(u.default);
    t.default = h }, function(e, t, i) { "use strict";

    function r(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t.default = e, t }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { var i = [],
                    r = !0,
                    n = !1,
                    a = void 0; try { for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done) && (i.push(s.value), !t || i.length !== t); r = !0); } catch (e) { n = !0, a = e } finally { try {!r && o.return && o.return() } finally { if (n) throw a } } return i } return function(t, i) { if (Array.isArray(t)) return t; if (Symbol.iterator in Object(t)) return e(t, i); throw new TypeError("Invalid attempt to destructure non-iterable instance") } }(),
        s = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        o = i(6),
        l = r(o),
        u = function() {
            function e(t, i, r, a) { if (n(this, e), void 0 === t || void 0 === t.position) throw new Error("You must provide a target to the IK solver"); if (void 0 === i || i.length < 2) throw new Error("The IK solver needs a bone chain with at least two bones");
                this.target = t, this.boneChain = i, this.boneLengths = [], this.bonePositions = []; var s = 0;
                this.tolerance = 1e-6, this.ikRotation = void 0 === r || r, this.debug = !!a; var o = new l.Vector3;
                o.setFromMatrixPosition(this.boneChain[0].matrixWorld), this.bonePositions.push((new l.Vector3).copy(o)); for (var u = 1, h = i.length; u < h; u++) { o.setFromMatrixPosition(this.boneChain[u].matrixWorld), this.bonePositions.push((new l.Vector3).copy(o)); var c = this.bonePositions[u - 1].distanceTo(this.bonePositions[u]);
                    this.boneLengths.push(c), s += c } this.chainLengthSquared = s * s } return s(e, [{ key: "solveBoneTransforms", value: function() { this._solveBonePositions(), this._setBoneTransforms() } }, { key: "_solveBonePositions", value: function() { var e = 0,
                        t = 0,
                        i = 0,
                        r = 0,
                        n = -1,
                        a = 0,
                        s = (new l.Vector3).setFromMatrixPosition(this.target.matrixWorld); for (e = 0, t = this.boneChain.length; e < t; ++e) this.bonePositions[e].setFromMatrixPosition(this.boneChain[e].matrixWorld); var o = (new l.Vector3).copy(this.bonePositions[0]); if (o.distanceToSquared(s) > this.chainLengthSquared)
                        for (e = 0, t = this.boneLengths.length; e < t; ++e) i = this.bonePositions[e].distanceTo(s), r = this.boneLengths[e] / i, this.bonePositions[e + 1].lerpVectors(this.bonePositions[e], s, r);
                    else { var u = this.bonePositions[this.boneChain.length - 1]; for (a = 0; a < 10 && (n = u.distanceToSquared(s), !(n <= this.tolerance)); ++a) { for (u.copy(s), e = this.boneChain.length - 2; e >= 0; --e) i = this.bonePositions[e].distanceTo(this.bonePositions[e + 1]), r = this.boneLengths[e] / i, this.bonePositions[e].lerp(this.bonePositions[e + 1], 1 - r); for (this.bonePositions[0].copy(o), e = 0, t = this.boneChain.length - 1; e < t; ++e) i = this.bonePositions[e].distanceTo(this.bonePositions[e + 1]), r = this.boneLengths[e] / i, this.bonePositions[e + 1].lerp(this.bonePositions[e], 1 - r) } this.debug && console.log("solved bone positions in " + a + " iteration " + n.toFixed(6)) } } }, { key: "_setBoneTransforms", value: function() { var e = 0,
                        t = 0,
                        i = new l.Matrix4,
                        r = new l.Matrix4,
                        n = new l.Vector3,
                        s = new l.Vector3,
                        o = new l.Vector3,
                        u = new l.Quaternion,
                        h = (new l.Matrix4).copy(this.boneChain[this.boneChain.length - 1].matrixWorld); for (e = 0, t = this.boneChain.length; e < t; ++e) { var c = this.boneChain[e];
                        i.getInverse(c.parent.matrixWorld), c.position.copy(this.bonePositions[e]).applyMatrix4(i), this.ikRotation && (e < t - 1 ? (r.compose(c.position, c.quaternion, c.scale), n.copy(this.boneChain[e + 1].position).applyMatrix4(r), s.subVectors(n, c.position).normalize(), o.subVectors(this.bonePositions[e + 1], this.bonePositions[e]), o.transformDirection(i).normalize(), u.setFromUnitVectors(s, o), c.quaternion.multiply(u)) : (h.multiplyMatrices(i, h), c.rotation.setFromRotationMatrix(h))), c.updateMatrixWorld(), this.debug && CK.debugLocateObject3d(c, this.bonePositions[e]) } for (this.boneChain[0].updateMatrixWorld(!0), e = 0, t = this.boneChain.length; e < t; ++e)
                        if (e < t - 1) { var d = this.boneChain[e],
                                f = this.boneChain[e + 1],
                                p = f.position.clone(),
                                v = p.length(); for (var g in d.children) { var m = d.children[g]; if (m != f) { var y = m.position.length();
                                    m.position.copy(p), m.position.multiplyScalar(y / v) } } }
                    if (this.boneChain[0].updateMatrixWorld(!0), this.debug) { console.log("----------------------------------------------------------"); var b = new l.Vector3; for (e = 0, t = this.boneChain.length; e < t; e++) { b.setFromMatrixPosition(this.boneChain[e].matrixWorld); var _ = e == this.boneChain.length - 1 ? [0, 0] : [this.bonePositions[e].distanceTo(this.bonePositions[e + 1]), this.boneLengths[e]],
                                w = a(_, 2),
                                k = w[0],
                                S = w[1];
                            console.log(this.boneChain[e].name), console.log("\tlen " + k.toFixed(3) + "/" + S.toFixed(3)), console.log("\tpos " + this.bonePositions[e].str() + "/" + b.str()) } console.log(this.target.name + " TARGET"), b.setFromMatrixPosition(this.target.matrixWorld), console.log("\tpos " + b.str()), console.log("###########################################################") } } }]), e }();
    t.default = u }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(2),
        o = r(s),
        l = i(5),
        u = (r(l), i(4)),
        h = r(u),
        c = i(1),
        d = r(c),
        f = i(7),
        p = (r(f), i(18)),
        v = r(p),
        g = 1,
        m = function() {
            function e(t) { n(this, e), this._mods = new v.default, this.parts = {}, this.partOffsets = {}, this.labels = {}, this.decals = {}, this.sliders = {}, this.pose = 0, this.camera = void 0, this.meta = { character_name: "", config_name: "" }, this.physical = "", this.scale = "", this.material = "", this.mirroredPose = void 0, this.version = void 0, this.name = "", this.paints = {}, this.fields = [], void 0 != t && this.change(t), this.disableMenus = {} } return a(e, [{ key: "change", value: function(e) { if (void 0 === e) return void console.error("Undefined character data change!"); if (this.fields = e.fields || [], this.version = e.version || this.version, this.camera = e.camera, "parts" in e) { for (var t in e.parts)
                            if (e.parts[t] in h.default.parts && "CLEAR" == h.default.parts[e.parts[t]].name) { var i = h.default.getPart(e.parts[t]); if (void 0 !== i && "remove" in i.mods)
                                    for (var r in i.mods.remove) { var n = i.mods.remove[r];
                                        delete e.parts[n.target0], delete this.parts[n.target0] } }
                        for (var a in e.parts) e.parts[a] in h.default.parts && "CLEAR" == h.default.parts[e.parts[a]].name ? d.default.configEditorMode ? this.parts[a] = e.parts[a] : delete this.parts[a] : void 0 == e.parts[a] ? delete this.parts[a] : this.parts[a] = e.parts[a] } this.partOffsets = e.partOffsets, this.partObjects = {}; for (var s in this.parts) this.partObjects[s] = h.default.getPart(this.parts[s]); var l = this._getMods("filter"); for (var u in l) h.default.applySlotFilter(l[u].target0, l[u].value0); var c = this._getMods("disableMenu");
                    this.disableMenus = {}; for (var f in c) { var p = c[f];
                        this.disableMenus[p.target0] = p.value0 } if ("hf" == d.default.prefix) { if ("scale" in this.parts) { var v = h.default.getPart(this.parts.scale); if (void 0 == v) delete this.parts.scale;
                            else if ("mount" in this.parts) { if (!v.name.endsWith("_mount")) { var g = h.default.getPartBySlotAndName("scale", v.name + "_mount");
                                    void 0 !== g ? this.parts.scale = g.id : (delete this.parts.scale, console.warn("could not find scale part", v.name + "_mount")) } } else if (v.name.endsWith("_mount")) { console.log("removing mount"); var m = h.default.getPartBySlotAndName("scale", v.name.slice(0, -6));
                                void 0 === m ? console.error("Something went wrong. Non mounted scale for ", v, "not found") : this.parts.scale = m.id } } void 0 !== this.parts.body && (16 == this.parts.body ? (this.parts.bodyUpper = 1963, this.parts.bodyLower = 1960) : 621 == this.parts.body ? (this.parts.bodyUpper = 1962, this.parts.bodyLower = 1961) : console.error("Unrecognized body part!", this.parts.body), delete this.parts.body) } if ("sliders" in e)
                        for (var y in e.sliders)
                            if (void 0 != y && null != y) { var b = e.sliders[y];
                                isNaN(b) || b < 0 || b > 1 || null === b || void 0 === b ? console.warn("Attempted to set " + y + " to invalid value " + b) : this.sliders[y] = b }
                    if ("meta" in e && (void 0 !== e.meta.character_name && "" != e.meta.character_name && (this.meta.character_name = e.meta.character_name), void 0 !== e.meta.config_name && (this.meta.config_name = e.meta.config_name), void 0 !== e.meta.config_description && (this.meta.config_description = e.meta.config_description), o.default.emit("characterNameChanged", this)), this.pose = e.pose || this.pose, this.physical = e.physical || this.physical, "scale" in e && (this.scale = e.scale), "parts" in e && "scale" in e.parts && (this.scale = h.default.parts[e.parts.scale].name), "material" in e && (this.material = e.material), "mirroredPose" in e && void 0 !== e.mirroredPose && (this.mirroredPose = e.mirroredPose), "paints" in e)
                        for (var _ in e.paints) { var w = e.paints[_]; if (void 0 == w) delete this.paints[_];
                            else if (_ in this.paints)
                                for (var k in w) this.paints[_][k] = w[k];
                            else this.paints[_] = w }
                    if ("decals" in e) { var S = e.decals; for (var E in S) { var M = S[E];
                            void 0 == M ? delete this.decals[E] : this.decals[E] = M } } if ("labels" in e)
                        for (var C in e.labels) this.labels[C] = e.labels[C];
                    this.origin = e.origin } }, { key: "_getMods", value: function(e) { return this._mods.get(e, this.partObjects, {}, this.pose, {}) } }, { key: "getPart", value: function(e) { var t = this.parts[e]; if (void 0 !== t) return h.default.parts[t] } }, { key: "clone", value: function() { return JSON.parse(JSON.stringify(this.getJson())) } }, { key: "getJson", value: function() { var e = {}; for (var t in this.parts) { var i = h.default.getRawPart(this.parts[t]);
                        ("CLEAR" != i.name || d.default.configEditorMode) && (e[t] = this.parts[t]) } var r = {}; for (var n in this.paints) { var a = h.default.getSlot(n),
                            s = a.decal_target || n;
                        s in e && (r[n] = this.paints[n]) } var o = { parts: e, labels: this.labels, sliders: this.sliders, pose: this.pose, displayPose: CK.activeCharacter.characterDisplayData.pose, meta: this.meta, physical: this.physical, scale: this.scale, material: this.material, decals: this.decals, paints: r, artVersion: d.default.artVersionNumber, mirroredPose: this.mirroredPose, version: g }; return d.default.configEditorMode && (d.default.configEditorSavePoseMode || delete o.pose, void 0 === this.mirroredPose && delete o.mirroredPose, d.default.configEditorSaveMeshes || delete o.parts, d.default.configEditorSaveColor || delete o.paints, d.default.configEditorSaveDecals || delete o.decals, delete o.character_name), o } }, { key: "matchesConfig", value: function(e) { if ("pose" in e && e.pose != this.pose) return !1; if ("parts" in e)
                        for (var t in e.parts)
                            if (!(t in this.parts) || this.parts[t] != e.parts[t]) return !1; var i = e.paints; if (void 0 !== i)
                        for (var r in i) { if (!(r in this.paints)) return !1; var n = i[r]; for (var a in n)
                                if (!(a in this.paints[r]) || this.paints[r][a] != e.paints[r][a]) return !1 }
                    return !0 } }]), e }();
    t.default = m }, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireWildcard(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t.default = e, t }

    function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e } }

    function _toConsumableArray(e) { if (Array.isArray(e)) { for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t]; return i } return Array.from(e) }

    function _classCallCheck(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(exports, "__esModule", { value: !0 });
    var _createClass = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        _Materials = __webpack_require__(9),
        _Materials2 = _interopRequireDefault(_Materials),
        _Resources = __webpack_require__(8),
        _Resources2 = _interopRequireDefault(_Resources),
        _three = __webpack_require__(6),
        THREE = _interopRequireWildcard(_three),
        _Settings = __webpack_require__(1),
        _Settings2 = _interopRequireDefault(_Settings),
        _GameLoop = __webpack_require__(3),
        _GameLoop2 = _interopRequireDefault(_GameLoop),
        _Events = __webpack_require__(2),
        _Events2 = _interopRequireDefault(_Events),
        _Reporting = __webpack_require__(5),
        _Reporting2 = _interopRequireDefault(_Reporting),
        _MixerSkeleton = __webpack_require__(12),
        _MixerSkeleton2 = _interopRequireDefault(_MixerSkeleton),
        _MixerMesh = __webpack_require__(10),
        _MixerMesh2 = _interopRequireDefault(_MixerMesh),
        _Paths = __webpack_require__(7),
        _Paths2 = _interopRequireDefault(_Paths),
        _VoxelDisplay = __webpack_require__(37),
        _VoxelDisplay2 = _interopRequireDefault(_VoxelDisplay),
        CharacterDisplay = function() {
            function CharacterDisplay() { var e = this;
                _classCallCheck(this, CharacterDisplay), this.targets = [], this.skeleton = new _MixerSkeleton2.default, this.skeleton.name = "MixerSkeleton", this.enableIk = !0, this.enableIkRotation = !0, this.enableIkDebug = !1, this.meshes = {}, this.storedMeshes = {}, this.fonts = {}, this.threeObj = new THREE.Object3D, this.threeObj.add(this.skeleton.threeObj), this.updateFailed = !1, this.finishedApplyingUpdates = !1, this.finishedCallback = void 0, this.needsIKUpdate = !1, this.needApplyModAttributes = !1, this.needsUpdate = !1, this.resourceRequestId = 0, this.resourcesReady = !1, void 0 === CharacterDisplay.count && (CharacterDisplay.count = 0), this.id = "Character" + CharacterDisplay.count++, this.threeObj.name = this.id, _Settings2.default.hasMainSkeleton && _Resources2.default.getResource(_Paths2.default.mainSkeleton).then(function(t) { e._skeletonLoaded(t) }), _Settings2.default.voxelCanvas && (this.voxelDisplay = new _VoxelDisplay2.default, this.threeObj.add(this.voxelDisplay.threeObj)), this.camera = "default", _GameLoop2.default.register(function() { e._tryUpdate() }, "postStart"), _GameLoop2.default.register(function() { e._postAnimation() }, "postAnimation"), _GameLoop2.default.register(function() { e._preRender() }, "preRender") }
            return _createClass(CharacterDisplay, [{ key: "change", value: function(e, t, i) { var r = this;
                    this.resourcesReady = !1, void 0 !== this.finishedCallback && console.warn("Did not call previous finishedCallback"), this.finishedCallback = i; var n = CharacterDisplay._getResources(e),
                        a = ++this.resourceRequestId;
                    _Resources2.default.getResources(n, void 0, this.id).then(function() { r._loaded(a, e, n) }) } }, { key: "_loaded", value: function(e, t, i) { e == this.resourceRequestId && (this.resources = i, this.resourcesReady = !0, this.needsUpdate = !0, this.characterDisplayData = t) } }, {
                key: "_skeletonLoaded",
                value: function(e) {
                    return void 0 === e ? void this._exception("Failed to load skeleton!") : (this.skeleton.addSkel(e.mixerBones, "skeleton"), void this.skeleton.addPoses(e.poses, "skeleton"))
                }
            }, { key: "_tryUpdate", value: function() { this.resourcesReady && this.needsUpdate && (this.skeleton.bones.length || !_Settings2.default.hasMainSkeleton) && (this.needsUpdate = !1, this._update()) } }, { key: "_update", value: function() { this._removeOldParts(), this._attachParts(), this._updateLabels(), this._applyPartParents(), this._applyBlendShapes(), this._updateHideIds(), this._mirrorPose(), this._applyMaterialSims(), this._applyShaderSliders(), this._removeDecals(), this._applyDecals(), this._applyDecalColors(), this._applyNamedPoses(), this._applyNewPose(), this._applyJointWeights(), this._applySnaps(), this._updateGround(), this._updateCamera(), this._updateVoxels(), this._finish() } }, { key: "_removeOldParts", value: function() { for (var e in this.meshes) e in this.characterDisplayData.parts || this._removeSlot(e); for (var t in this.characterDisplayData.parts) { var i = this.characterDisplayData.parts[t];
                        t in this.meshes && this.meshes[t].part.paths.mesh != i.paths.mesh && this._removeSlot(t) } } }, { key: "_removeSlot", value: function(e) { var t = this.meshes[e],
                        i = t.material,
                        r = t.geometry; return i.dispose(), delete this.meshes[e], t.parent.remove(t), r.mainSkeleton ? "skeleton" in t && this.threeObj.remove(t.skeleton.threeObj) : r.skinned ? this.skeleton.remove(e) : this.threeObj.remove(t), delete this.meshes[e], _Settings2.default.storeMeshes ? void(this.storedMeshes[t.geometry.filePath] = t) : void _Resources2.default.unregister(this.id, this.resources) } }, { key: "_attachParts", value: function() { for (var e in this.characterDisplayData.parts) { var t = this.characterDisplayData.parts[e]; if (!(e in this.meshes) || this.meshes[e].part.paths.mesh != t.paths.mesh) { var i = _Resources2.default.getNow(t.paths.mesh);
                            void 0 !== i ? this._attachPart(i, t) : this._exception("Missing part!" + t.name) } } } }, { key: "_attachPart", value: function(e, t) { if (_Settings2.default.storeMeshes && t.paths.mesh in this.storedMeshes) { if ("font" == t.type) { var i = this.storedMeshes[t.paths.mesh];
                            this.skeleton.add(i, t.slot), this.meshes[t.slot] = i } } else { if (void 0 == e) return void this._exception("Failed to load " + t.name + " in slot " + t.slot); if ("texture" == t.type) return; if (!(t.slot in this.characterDisplayData.parts) || t.paths.mesh != this.characterDisplayData.parts[t.slot].paths.mesh) return void console.warn("ignoring part", t, " because it is already loaded. How did this happen?"); "text" == t.type ? this._attachMesh(this._getTextGeo(e, t), t) : "font" == t.type ? this.fonts[t.slot] = e : this._attachMesh(e, t) } } }, { key: "_attachMesh", value: function(e, t) { "copyWithSharing" in e && (e = e.copyWithSharing()); var i = _Materials2.default.makeMaterial(e, t);
                    e.name = t.slot; var r = _MixerMesh2.default.makeMesh(e, i); if (e.mainSkeleton) { var n = new _MixerSkeleton2.default;
                        n.add(r, t.slot), this.threeObj.add(n.threeObj) } else e.skinned && this.skeleton.add(r, t.slot);
                    t.slot in this.meshes && console.error("Mesh part in slot", t.slot, " was not deleted properly"), r.part = t, this.meshes[t.slot] = r } }, { key: "_updateLabels", value: function() { for (var e in this.characterDisplayData.labels)
                        if (e in this.meshes) { var t = this.meshes[e],
                                i = t.geometry,
                                r = e in this.characterDisplayData.labels ? this.characterDisplayData.labels[e] : "No Name"; "TextGeometry" == i.type && i.text != r && (t.geometry = this._getTextGeo(i.font, t.part)) } } }, { key: "_getTextGeo", value: function(e, t) { var i = this.characterDisplayData.labels[t.slot] || "Your Text >",
                        r = new THREE.TextGeometry(i, { font: e, size: .23, height: .1, curveSegments: 6, bevelEnabled: !1 }); return r.center(), r.text = i, r.font = e, r } }, { key: "_mirrorPose", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0; if (this.characterDisplayData.mirrorPose && void 0 === e || void 0 !== e && e) { this.threeObj.scale.x = -1; for (var t in this.meshes) _Settings2.default.getSlotSetting(t, "allowMirror") && this.meshes[t].material.side != THREE.BackSide && (this.meshes[t].material.side = THREE.BackSide, this.meshes[t].material.needsUpdate = !0) } else { this.threeObj.scale.x = 1; for (var i in this.meshes) this.meshes[i].material.side != THREE.FrontSide && (this.meshes[i].material.side = THREE.FrontSide, this.meshes[i].material.needsUpdate = !0) } } }, { key: "_applyPartAnimationOverride", value: function(e, t) { this.skeleton.applyOverride(e, t) && this._rebuildParts() } }, { key: "previewSliders", value: function(e, t, i) { for (var r in t) this._applyBlendSlider(r, t[r]); for (var n in e) this._applyJointWeight(n, e[n]); for (var a in i) this._applyShaderSlider(a, i[a]);
                    this.needsIKUpdate = !0, this.needApplyModAttributes = !0, this.skeleton._requestPoseRefresh(), _GameLoop2.default.requestRenderRefresh(), _GameLoop2.default.requestAnimationRefresh() } }, { key: "_applyJointWeights", value: function() { for (var e in this.characterDisplayData.jointWeights) this.skeleton.setSlider(e, this.characterDisplayData.jointWeights[e]) } }, { key: "_applyJointWeight", value: function(e, t) { this.skeleton.setSlider(e, t) } }, { key: "_applyShaderSliders", value: function() { for (var e in this.characterDisplayData.shaderParams) this._applyShaderSlider(e, this.characterDisplayData.shaderParams[e]) } }, { key: "_removeDecals", value: function() { if (_Settings2.default.color) { var e = this.characterDisplayData.decals; for (var t in this.meshes) { var i = this.meshes[t].material; if (i.hasDecals)
                                if (t in e)
                                    for (var r in i.layers) r in e[t] || i.removeDecal(r);
                                else i.clearDecals() } } } }, { key: "_applyDecals", value: function() { if (_Settings2.default.color) { var e = this.characterDisplayData.decals; for (var t in e) { var i = e[t]; for (var r in i) { var n = i[r];
                                this.meshes[t].material.setDecal(r, n.decal, this.characterDisplayData.decalOffsets[n.slot]) } } for (var a in this.meshes) this.meshes[a].material.rebuildShaderCodeIfNeeded() } } }, { key: "_applyDecalColors", value: function() { if (_Settings2.default.color) { var e = this.characterDisplayData.decals; for (var t in e) { var i = e[t]; for (var r in i) { var n = i[r].decal,
                                    a = i[r].colors; for (var s in a) { var o = a[s];
                                    this.meshes[t].material.setLayerColorUniform(s, n.slot, o) } } } } } }, { key: "_applyMaterialSims", value: function() { for (var e in this.meshes) this.meshes[e].material.setMaterialProperties(this.characterDisplayData.materialSim);
                    _Settings2.default.voxelCanvas && this.voxelDisplay.updateMaterial(this.characterDisplayData.materialSim) } }, { key: "_applyShaderSlider", value: function(e, t) { var i = e.split(":"),
                        r = i[0],
                        n = i[1]; if (r in this.meshes) { var a = this.meshes[r];
                        n in a.material.uniforms && a.material.uniforms[n].value != t && (a.material.uniforms[n].value = t, a.material.needsUpdate = !0) } } }, { key: "_updateHideIds", value: function() { var e = this.characterDisplayData.hideByIdMods,
                        t = this.characterDisplayData.morphByIdMods; for (var i in this.meshes) { var r = this.meshes[i];
                        r.material.hasVertexColors && (r.material.setHideIds(i in e ? e[i] : void 0), i in t && "morphTargetInfluences" in r && r.morphTargetInfluences.length > 0 ? (r.morphTargetInfluences[0] = 1, r.material.setMorphIds(t[i]), r.customDepthMaterial = r.material.getMorphDepthMaterial()) : (r.material.setMorphIds(void 0), delete r.customDepthMaterial)) } } }, { key: "_applyBlendShapes", value: function() { for (var e in this.meshes) { var t = this.meshes[e]; for (var i in t.morphTargetDictionary) { var r = t.morphTargetDictionary[i];
                            e in this.characterDisplayData.blendForms && i in this.characterDisplayData.blendForms[e] ? t.morphTargetInfluences[r] != this.characterDisplayData.blendForms[e][i] && (t.morphTargetInfluences[r] = this.characterDisplayData.blendForms[e][i]) : t.morphTargetInfluences[r] > 0 && (t.morphTargetInfluences[r] = 0) } } } }, { key: "_applyBlendSlider", value: function(e, t) { for (var i in t)
                        if (e in this.meshes) { var r = this.meshes[e]; if (void 0 != r.morphTargetDictionary && i in r.morphTargetDictionary) { var n = r.morphTargetDictionary[i];
                                r.morphTargetInfluences[n] = t[i] } else console.warn("failed to find expected blend shape ", i, " in slot ", e) } } }, { key: "_applyNamedPoses", value: function() { var e = this.characterDisplayData.namedPoses; for (var t in this.skeleton.activeNamedPoses) t in e || this.skeleton.deactivatePose(t); for (var i in e) this.skeleton.activatePose(i) } }, { key: "_applyNewPose", value: function() { this.skeleton.changePose(this.characterDisplayData.pose); for (var e in this.meshes) { var t = this.meshes[e];
                        t.geometry.skinned && t.geometry.mainSkeleton && t.skeleton.changePose(this.characterDisplayData.pose) } } }, { key: "_applySnaps", value: function() { var e = !1; for (var t in this.characterDisplayData.snaps) { var i = this.characterDisplayData.snaps[t]; if (i.endsWith("_jnt") && t.endsWith("_jnt")) { var r = this.threeObj.getObjectByName(t),
                                n = this.threeObj.getObjectByName(i);
                            r && n ? (e = !0, this.skeleton.threeObj.snapBones = { from: r, to: n }) : this._exception("Failed to snap slot" + t + "to" + i + "because one or more joints were not found") } } e || void 0 == this.skeleton.threeObj.snapBones || (this.skeleton.threeObj.snapBones = void 0, this.skeleton.threeObj.position.set(0, 0, 0)) } }, { key: "_getParent", value: function(e, t) { if (t in this.characterDisplayData.snaps) { var i = this.characterDisplayData.snaps[t]; if (i in this.meshes) return this.meshes[i]; var r = this.threeObj.getObjectByName(i, !0); return r ? r : (console.warn("Could not find object to snap to", r), this.threeObj) } return e.geometry.mainSkeleton && void 0 !== e.skeleton ? e.skeleton.threeObj : e.geometry.skinned ? this.skeleton.threeObj : this.threeObj } }, { key: "_applyPartParents", value: function() { for (var e in this.meshes) { var t = this.meshes[e],
                            i = this._getParent(t, e);
                        t.parent != i && i.add(t) } } }, { key: "_applyModAttributes", value: function _applyModAttributes() { this.skeleton.threeObj.position.set(0, 0, 0); for (var slot in this.meshes) { var mesh = this.meshes[slot];
                        mesh.position.set(0, 0, 0), this.characterDisplayData.mirrorPose && !_Settings2.default.getSlotSetting(slot, "allowMirror") ? mesh.scale.set(-1, 1, 1) : mesh.scale.set(1, 1, 1), mesh.rotation.set(0, 0, 0) } for (var attribute in this.characterDisplayData.attributeChanges) { var values = this.characterDisplayData.attributeChanges[attribute]; try { var attrValue = eval("this." + attribute); if (void 0 != attrValue)
                                for (var i in values) { var value = values[i]; try { eval("this." + attribute + value) } catch (e) {} } } catch (e) {} } for (var _slot4 in this.characterDisplayData.partOffsets) _slot4 in this.meshes && this.meshes[_slot4].position.add(new(Function.prototype.bind.apply(THREE.Vector3, [null].concat(_toConsumableArray(this.characterDisplayData.partOffsets[_slot4]))))) } }, { key: "_updateCamera", value: function() { var e = this.characterDisplayData.cameraMod || "default";
                    this.camera != e && (CK.orbitCamera.setFromName(e), this.camera = e) } }, { key: "_updateGround", value: function() { var e = 0; for (var t in this.meshes) e += _Settings2.default.getSlotSetting(t, "groundOffset");
                    e != this._groundOffset && (_Events2.default.emit("characterGroundChanged", e), this._groundOffset = e) } }, { key: "_updateVoxels", value: function() { _Settings2.default.voxelCanvas && this.voxelDisplay.update(this.characterDisplayData) } }, { key: "_finish", value: function() { this.skeleton._requestPoseRefresh(), _GameLoop2.default.requestAnimationRefresh(), this.finishedApplyingUpdates = !0 } }, { key: "_postAnimation", value: function() {
                    (this.finishedApplyingUpdates || this.needApplyModAttributes) && (this._applyModAttributes(), this._applyPositionSnaps(), this._applyReposeMods()), (this.finishedApplyingUpdates || this.needsIKUpdate) && this._applyIk(), (this.finishedApplyingUpdates || this.needsIKUpdate || this.needApplyModAttributes) && (this._calculateAutoJoints(), this.threeObj.updateMatrixWorld(!0)), this.finishedApplyingUpdates && (_Settings2.default.voxelCanvas && this.voxelDisplay.render(), _Events2.default.emit("CharacterFinishedChanging", this), void 0 != this.finishedCallback && this.resourcesReady && !this.needsUpdate && (this.finishedCallback(), this.finishedCallback = void 0), this.updateFailed && (_Events2.default.emit("CharacterFailedChange", this), this.updateFailed = !1)), this.needsIKUpdate = !1, this.needApplyModAttributes = !1, this.finishedApplyingUpdates = !1 } }, { key: "_calculateAutoJoints", value: function _calculateAutoJoints() { var autoJoints = this.characterDisplayData.autoJoints; for (var i in autoJoints) { var autoJointMod = autoJoints[i],
                            target0 = this.threeObj.getObjectByName(autoJointMod.target0),
                            target1 = this.threeObj.getObjectByName(autoJointMod.target1),
                            sliders = this.characterDisplayData.data.sliders;
                        eval(autoJointMod.value0) } } }, { key: "_applyReposeMods", value: function() { var e = this.characterDisplayData.reposes; for (var t in e) { var i = this.threeObj.getObjectByName(t);
                        void 0 !== i && (void 0 !== e[t].pos && i.position.fromArray(e[t].pos), void 0 !== e[t].rot && i.quaternion.fromArray(e[t].rot), void 0 !== e[t].scl && i.scale.fromArray(e[t].scl)) } } }, { key: "_applyPositionSnaps", value: function() { for (var e in this.characterDisplayData.positionSnaps) { var t = this.characterDisplayData.positionSnaps[e],
                            i = this.threeObj.getObjectByName(e),
                            r = this.threeObj.getObjectByName(t); if (i && r) { var n = i.parent;
                            r.parent.updateMatrixWorld(), THREE.SceneUtils.detach(i, n, CK.scene), i.position.copy((new THREE.Vector3).setFromMatrixPosition(r.matrixWorld)), i.updateMatrixWorld(), THREE.SceneUtils.attach(i, CK.scene, n), i.parent.updateMatrixWorld() } } } }, { key: "_applyIk", value: function() { if (this.characterDisplayData.ikChains.length > 0 && this.enableIk) { this.threeObj.updateMatrixWorld(!0); for (var e in this.characterDisplayData.ikChains) { var t = this.characterDisplayData.ikChains[e];
                            this.skeleton.applyIk(t.chain, t.target, this.enableIkRotation, this.enableIkDebug) } } } }, { key: "_preRender", value: function() { "bg" in this.meshes && (CK.orbitCamera.camera.updateMatrixWorld(), this.meshes.bg.matrixWorld.copy(CK.orbitCamera.camera.matrixWorld)) } }, { key: "_exception", value: function(e) { this.updateFailed = !0, _Reporting2.default.exception(e) } }, { key: "getMeshes", value: function() { return _Settings2.default.voxelCanvas ? Object.assign({}, this.meshes, this.voxelDisplay.getMeshesBySlot()) : this.meshes } }, { key: "toggleIk", value: function() { this.enableIk = !this.enableIk, this.enableIkDebug = !0, this.needsIKUpdate = !0, this.skeleton._requestPoseRefresh(), CK.updateDebugManipulators() } }, { key: "toggleIkRotation", value: function() { this.enableIkRotation = !this.enableIkRotation, this.needsIKUpdate = !0, this.skeleton._requestPoseRefresh(), CK.updateDebugManipulators() } }], [{ key: "_getResources", value: function(e) { var t = []; if (void 0 !== e) { var i = e.parts,
                            r = e.decals,
                            n = void 0; for (var a in i)
                            if (n = i[a], t.push(n.paths.mesh), _Settings2.default.color && a in r) { var s = r[a]; for (var o in s) void 0 !== s[o].decal && t.push(s[o].decal.texturePath) }
                        return _Settings2.default.voxelCanvas && (t = t.concat(_VoxelDisplay2.default.resourcesUsed(e))), t } } }]), CharacterDisplay
        }();
    exports.default = CharacterDisplay
}, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(4),
        o = r(s),
        l = i(1),
        u = r(l),
        h = i(21),
        c = r(h),
        d = i(38),
        f = r(d),
        p = i(12),
        v = r(p),
        g = i(18),
        m = r(g),
        y = function() {
            function e() { n(this, e), this._mods = new m.default, this.init() } return a(e, [{ key: "init", value: function() { this.parts = {}, this.paintSchemes = {}, this.blendForms = {}, this.jointWeights = {}, this.labels = {}, this.shaderParams = {}, this.snaps = {}, this.pose = 0, this.materialSim = "", this.attributeChanges = {}, this.mirrorPose = !1, this.fields = [], this.decalOffsets = {}, this.namedPoses = {}, this.positionSnaps = {}, this.ikChains = [], this.activeMods = [], this.autoJoints = [], this.hideByIdMods = [], this.morphByIdMods = {} } }, { key: "change", value: function(e, t) { this.data = e, this.settings = t, this.init(), this._changeData(), this._gatherParts(), this._gatherDecals(), this._voxels(), this._applyMissingParts(), this._applyProductPart(), this._applyRezPart(), this._applySupportPart(), this._applyTagParts(), this._poseLimitMods(), this._applyPosePart(), this._slotSwapMods(), this._hideMods(), this._formMods(), this._hideIdMods(), this._morphIdMods(), this._snapMods(), this._positionSnapMods(), this._changeMods(), this._poseMods(), this._ikMods(), this._decalOffsetMods(), this._sliderDefMods(), this._cameraMods(), this._reposeMods(), this._autoJointMods(), this._applySliders(), this._removeEmpty(), this._applyPartDefaultLayers(), this._gatherPaints() } }, { key: "_changeData", value: function(e) { this.labels = this.data.labels || {}, this.version = this.data.version, this.physical = this.data.physical || "", this.mirrorPose = this.data.mirroredPose || !1, this.pose = Math.abs(this.data.pose), this.partOffsets = this.data.partOffsets } }, { key: "_gatherParts", value: function() { if (this.parts = {}, "parts" in this.data)
                        for (var e in this.data.parts) { var t = this.data.parts[e],
                                i = o.default.getPart(t);
                            void 0 !== i ? "CLEAR" != i.name && (this.parts[e] = i) : console.error("Failed to find part id", t, "in slot", e) } } }, { key: "_gatherDecals", value: function() { if (this.decals = {}, this.decalSlots = {}, "decals" in this.data) { var e = this.data.decals; for (var t in e) { var i = o.default.getSlot(t),
                                r = i.decal_target || t; if (r in this.parts) { var n = i.decal_layer + 1 || 1;
                                r in this.decals || (this.decals[r] = {}); var a = o.default.getDecal(e[t]);
                                this.decals[r][n] = { decal: a, slot: t, colors: {} }, this.decalSlots[t] = a } } } } }, { key: "_applyPartDefaultLayers", value: function() { if (u.default.color)
                        for (var e in this.parts) void 0 !== this.parts[e].decal && (e in this.decals || (this.decals[e] = {}), this.decals[e][0] = { decal: this.parts[e].decal, slot: e, colors: {} }) } }, { key: "_gatherPaints", value: function() { var e = Object.assign({}, this.parts, this.decalSlots); for (var t in e) { var i = new c.default,
                            r = this.data.paints; if (t in r)
                            for (var n in r[t]) i.setPaint(n, r[t][n]);
                        t in this.settings.displayPaintSchemes && i.addLayer(this.settings.displayPaintSchemes[t]), this.paintSchemes[t] = i } for (var a in this.decals)
                        for (var s in this.decals[a]) { var o = this.decals[a][s],
                                l = o.decal; if (void 0 !== l) { var u = o.slot; for (var h in l.layerTypes) { var d = l.layerTypes[h]; if ("solid" == d || "gradient" == d || "overlay" == d || "base" == d || "baseGradient" == d) { var f = l.layerMappings[h];
                                        o.colors[f] = this.paintSchemes[u].getVec4ArrayByMapping(f) } } } } } }, { key: "_applySliders", value: function() { for (var t in this.data.sliders) t in u.default.sliders ? e.applySlider(t, this.data.sliders[t], this.jointWeights, this.blendForms, this.shaderParams, this.sliderMods) : console.warn("Slider ", t, " not recognized.") } }, { key: "_applyMissingParts", value: function() { "HeroForge" == u.default.projectName && "face" in this.parts && ("eyes" in this.parts && delete this.parts.eyes, "eyeR" in this.parts && "eyeL" in this.parts || ("face" in this.parts && "robot" == this.parts.face.name ? (console.warn("Adding robot eyes because they are missing for some reason (probably old cart item)"), this.parts.eyeR = o.default.getPart(1517), this.parts.eyeL = o.default.getPart(1518)) : (console.warn("Adding human eyes because they are missing for some reason (probably old cart item)"), this.parts.eyeR = o.default.getPart(1512), this.parts.eyeL = o.default.getPart(177)))) } }, { key: "_applyProductPart", value: function() { if ("" == this.physical || "loRez" == u.default.rez) { var e = []; for (var t in u.default.productSlugParts) { var i = u.default.productSlugParts[t]; if (!(i in this.parts)) return;
                            e.push(this.parts[i].name) } this.physical = e.join("_") } else
                        for (var r in u.default.productSlugParts) { var n = u.default.productSlugParts[r],
                                a = o.default.partsBySlot[n]; for (var s in a)
                                if (0 == r ? this.physical.startsWith(a[s].name) : r == u.default.productSlugParts.length - 1 ? this.physical.endsWith(a[s].name) : this.physical.includes(a[s].name)) { this.parts[n] = o.default.getPart(a[s].id); break } }
                    var l = o.default.getPartBySlotAndName("product", this.physical);
                    void 0 !== l ? this.parts.product = l : console.warn("Could not find product part ", this.physical), this.materialSim = this.settings.showMaterialSim ? this.physical : "" } }, { key: "_applyPosePart", value: function() { var e = o.default.getPartBySlotAndName("stance", "pose" + this.pose);
                    void 0 != e && (this.parts.stance = e) } }, { key: "_applyRezPart", value: function() { var e = o.default.getPartBySlotAndName("resolution", u.default.rez);
                    void 0 != e && (this.parts.resolution = e) } }, { key: "_applyTagParts", value: function() { if ("hiRez" == u.default.rez && !u.default.compareHighLowMode) { var e = o.default.getPartBySlotAndName("tagNumber", "tagNumber"),
                            t = o.default.getPartBySlotAndName("tag", "tagAttach");
                        e && t && (this.parts.tagNumber = e, this.parts.tag = t) } } }, { key: "_applySupportPart", value: function() { if ("hiRez" == u.default.rez) { var e = ["supportR", "supportL", "support"]; for (var t in e) { var i = e[t],
                                r = o.default.getPartBySlotAndName(i, "footprint");
                            void 0 != r && (this.parts[i] = r) } } } }, { key: "_removeEmpty", value: function() { for (var e in this.parts) this.parts[e].useMesh || delete this.parts[e]; if ("hiRez" == u.default.rez)
                        for (var t in this.parts) "text" != this.parts[t].type || void 0 != this.labels[t] && "" != this.labels[t] || delete this.parts[t] } }, { key: "_getMods", value: function(e) { var t = this._mods.get(e, this.parts, this.decals, this.pose, this.decalSlots); return this.activeMods.concat(t), t } }, { key: "_voxels", value: function() { var e = []; for (var t in this.data.fields) { var i = this.data.fields[t],
                            r = []; for (var n in i.layers) r.push(new f.default(i.layers[n]));
                        e.push({ resolution: i.resolution, voxelSize: i.voxelSize, layers: r, parent: i.parent, position: i.position, cloneField: i.cloneField }) } this.fields = e } }, { key: "_slotSwapMods", value: function() { var e = this._getMods("slotSwap"); for (var t in e) { var i = e[t],
                            r = this.parts[i.target0]; if (void 0 !== r) { var n = o.default.getPartBySlotAndName(i.value0, this.parts[i.target0].name);
                            void 0 !== n && (this.parts[n.slot] = n, delete this.parts[i.target0]) } } } }, { key: "_hideMods", value: function() { var e = this._getMods("hide"); for (var t in e) { var i = e[t]; for (var r in i.target0) delete this.parts[i.target0[r]], delete this.decals[i.target0[r]] } } }, { key: "_poseMods", value: function() { var e = this._getMods("pose"); for (var t in e) { var i = e[t]; for (var r in i.value0) this.namedPoses[i.value0[r]] = void 0 } } }, { key: "_ikMods", value: function() { var e = this._getMods("ik"); for (var t in e) this.ikChains.push({ chain: e[t].target0.split(","), target: e[t].target1 }) } }, { key: "_decalOffsetMods", value: function() { var e = this._getMods("decalOffset"); for (var t in e) { var i = e[t];
                        this.decalOffsets[i.target0] = new THREE.Vector2(Number(i.value0), Number(i.value1)) } } }, { key: "_formMods", value: function() { var e = this._getMods("form"); for (var t in e) { var i = e[t];
                        this._applyFormToSlot(i.target0, i.value0) || (i.target0 in this.blendForms || (this.blendForms[i.target0] = {}), this.blendForms[i.target0][i.value0] = .9999) } } }, { key: "_hideIdMods", value: function() { var e = this._getMods("hideId");
                    this.hideByIdMods = this._getIds(e) } }, { key: "_morphIdMods", value: function() { var e = this._getMods("morphId");
                    this.morphByIdMods = this._getIds(e) } }, { key: "_getIds", value: function(e) { var t = {}; for (var i in e) { var r = e[i]; if (r.target0 in this.parts) { var n = t[r.target0]; if (void 0 === n) { n = []; for (var a = 0; a < 32; a++) n.push(1);
                                t[r.target0] = n } for (var s in r.value0) { var o = parseInt(r.value0[s]);
                                isNaN(o) && console.error("Invalid morph/hide index in mod values", s, r.value0), n[o] = 0 } } } return t } }, { key: "_applyFormToSlot", value: function(e, t) { if (!(e in this.parts)) return !1; if (e in u.default.slots && u.default.slots[e].guaranteedFormOverride) this.parts[e] = this.parts[e].cloneFromOriginal(t);
                    else { var i = this.parts[e].name + "_" + t,
                            r = o.default.getPartBySlotAndName(e, i); if (void 0 === r) return !1;
                        this.parts[e] = r } return !0 } }, { key: "_snapMods", value: function() { var e = this._getMods("snap"); for (var t in e) { var i = e[t],
                            r = i.target0,
                            n = i.target1;
                        (r.endsWith("_jnt") || r in this.parts) && (this.snaps[r] = n) } } }, { key: "_positionSnapMods", value: function() { var e = this._getMods("positionSnap"); for (var t in e) { var i = e[t];
                        this.positionSnaps[i.target0] = i.target1 } } }, { key: "_changeMods", value: function() { var e = this._getMods("change"); for (var t in e) { var i = e[t];
                        i.target0 in this.attributeChanges || (this.attributeChanges[i.target0] = []), this.attributeChanges[i.target0].push(i.value0) } } }, { key: "_poseLimitMods", value: function() { var e = this._getMods("limitPoses"),
                        t = this._getMods("excludePoses"),
                        i = []; for (var r in e)
                        for (var n in e[r].value0) i.push(e[r].value0[n]); var a = []; for (var s in t)
                        for (var l in t[s].value0) a.push(t[s].value0[l]); if (0 != e.length || 0 != t.length) { o.default.applySlotFilter("pose", i, a); var u = o.default.getFilteredConfigs("pose"); if (0 == u.length) return void console.error("Can not limit pose. No configs of type pose found with key", o.default.slotFilters.pose, " and not", o.default.excludeSlotFilters.pose); for (var h in u)
                            if (this.pose == u[h].pose) return;
                        this.pose = u[0].pose } } }, { key: "_sliderDefMods", value: function() { this.sliderMods = {}; var e = this._getMods("sliderDef"); for (var t in e) { var i = e[t];
                        this.sliderMods[i.target0] = this.sliderMods[i.target0] || {}, this.sliderMods[i.target0][i.target1] = parseFloat(i.value0) } } }, { key: "_cameraMods", value: function() { this.cameraMod = this.data.camera; var e = this._getMods("camera");
                    e.length > 1 && console.error("More than one camera mod found! Not supported yet", e), 1 == e.length && (this.cameraMod = e[0].value0) } }, { key: "_reposeMods", value: function() { this.reposes = {}; var e = this._getMods("repose"); for (var t in e) { var i = e[t].mod_data; for (var r in i) this.reposes[r] = i[r] } var n = this._getMods("sliderRepose"); for (var a in n) { var s = n[a],
                            o = s.mod_data,
                            l = s.value0; if (l in this.data.sliders) { var u = this.data.sliders[l]; for (var h in o) this.reposes[h] = {}, void 0 !== o[h].pos && (this.reposes[h].pos = v.default._lerpVec3Anim(o[h].pos, 2 * u)), void 0 !== o[h].rot && (this.reposes[h].rot = v.default._slerpQuatAnim(o[h].rot, 2 * u).toArray()), void 0 !== o[h].scl && (this.reposes[h].scl = v.default._lerpVec3Anim(o[h].scl, 2 * u)) } } } }, { key: "_autoJointMods", value: function() { this.autoJoints = this._getMods("autoJoint") } }], [{ key: "applySlider", value: function(e, t, i, r, n, a) {
                    function s(e, t, i, r, n) { return r + (n - r) * ((e - t) / (i - t)) }

                    function o(e, t, i) { return Math.min(Math.max(e, t), i) } var l = u.default.sliders[e]; if (void 0 == l) return void console.error("Could not find slider", e, "in Settings.sliders"); for (var h in l.targets) { var c = l.targets[h];
                        c.name in a && (c = Object.assign({}, c, a[c.name])); var d = 0; for (var f in l.targets) l.targets[f].name == c.name && l.targets[f].slot == c.slot && d++; if (t >= c.start && t <= c.end || d < 2) { var p = c.min < c.max ? c.min : c.max,
                                v = c.min < c.max ? c.max : c.min,
                                g = s(t, c.start, c.end, c.min, c.max),
                                m = o(g, p, v); "joint" == c.type ? i[c.name] = m : "morph" == c.type ? (c.slot in r || (r[c.slot] = {}), r[c.slot][c.name] = m) : "shader" == c.type ? n[c.slot + ":" + c.name] = m : console.error("Unrecognized slider target type ", c.type) } } } }]), e }();
    t.default = y }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function s(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var o = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        l = i(7),
        u = r(l),
        h = i(4),
        c = (r(h), i(1)),
        d = r(c),
        f = i(22),
        p = r(f),
        v = i(19),
        g = r(v),
        m = i(13),
        y = r(m),
        b = function(e) {
            function t(e) { var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                n(this, t); var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); if (r.normalFilename = e.normalFilename || "", r.displayFilename = e.displayFilename || "", r.type = e.type || "", r.normalMap = !!e.normalMap, r.blendNormals = !!e.blendNormals, r.useMesh = !!e.mesh, void 0 !== r.surfaces && void 0 !== r.dominance) { r.surfaces = JSON.parse(e.surfaces), r.dominance = JSON.parse(e.dominance); var s = new p.default(r.surfaces, r.dominance); if (r.paintSchemeMappings = s.getAllMappings(), d.default.color) { var o = ["mask_color"]; for (var l in r.surfaces) { var u = s.getMapping(l);
                            o.push(u + (0 == l ? "_base" : "_baseGradient")) } r.decal = new y.default({ slot: r.slot, name: r.name, layersArray: o, baseLayer: !0, id: -1 }) } } return r.nameAffix = i, r._getMods(), r.setPaths(), Object.freeze(r), r } return s(t, e), o(t, [{ key: "setPaths", value: function() { this.paths = u.default.getPartPaths(this) } }, { key: "cloneFromOriginal", value: function(e) { return new t(this._originalData, e) } }]), t }(g.default);
    t.default = b }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e) { if (Array.isArray(e)) { for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t]; return i } return Array.from(e) }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var s = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        o = i(9),
        l = r(o),
        u = i(10),
        h = r(u),
        c = i(8),
        d = r(c),
        f = function() {
            function e() { a(this, e), this.defaultVoxelSize = .025, this.defaultResolution = [220, 100, 220], this.fields = [], this.threeObj = new THREE.Object3D, this.threeObj.name = "voxelDisplay", this.meshes = [], this.clonedMeshes = [], this.material = l.default.makeMaterial() } return s(e, [{ key: "getMeshesBySlot", value: function() { var e = {}; for (var t in this.meshes) e["voxelDisplay" + t] = this.meshes[t]; return e } }, { key: "addField", value: function() {} }, { key: "removeField", value: function() {} }, { key: "update", value: function(e) { var t = e.fields,
                        i = [],
                        r = []; for (var n in t) { var a = t[n];
                        void 0 === a.cloneField ? i.push(a) : r.push(a) } for (var s in i) { var o = i[s],
                            l = o.resolution || this.defaultResolution,
                            u = o.voxelSize || this.defaultVoxelSize,
                            c = void 0; if (s in this.meshes) this.meshes[s].geometry.resetSize(l, u), c = this.meshes[s];
                        else { var d = new PK.VoxelCanvas(l, !1, !1, u);
                            c = h.default.makeMesh(d, this.material), this.threeObj.add(c), this.meshes.push(c) } this.updateLayers(c.geometry, o.layers), o.mesh = c } for (var f in this.clonedMeshes) this.clonedMeshes[f].parent.remove(this.clonedMeshes[f]), delete this.clonedMeshes[f];
                    this.conedMeshes = []; for (var p in r) { var v = r[p],
                            g = h.default.makeMesh(t[v.cloneField].mesh.geometry, this.material);
                        this.threeObj.add(g), this.clonedMeshes.push(g), v.mesh = g } for (var m in t) { var y = t[m],
                            b = y.mesh; if (b.visible = !0, void 0 === y.parent) this.threeObj.add(b);
                        else { var _ = CK.activeCharacter.characterDisplay.threeObj.getObjectByName(y.parent);
                            void 0 !== _ ? _.add(b) : console.warn("Could not find", y.parent) } b.position.fromArray(y.position || [0, 0, 0]), b.updateMatrixWorld() } for (var w = i.length; w < this.meshes.length; w++) this.meshes[w].parent && this.meshes[w].parent.remove(this.meshes[w]), this.meshes[w].visible = !1 } }, { key: "updateLayers", value: function(e, t) { for (var i in t) { var r = t[i],
                            a = void 0; if ("image" == r.artType ? a = d.default.getNow(r.imagePath) : "text" == r.artType && (a = PK.TextToImage.getImage(r.label, r.font, r.fontVersion)), void 0 !== a && (a = a.filter(r.filters)), "flat" == r.drawForm)
                            if ("shape" == r.artType) "box" == r.shape ? a = e.drawRectangle.apply(e, n(r.args)) : "circle" == r.shape ? a = e.drawCylinder.apply(e, n(r.args)) : "ellipse" == r.shape && (a = e.drawEllipse.apply(e, n(r.args)));
                            else { var s = r.position || [0, 15, 0];
                                e.drawImage(a, s[0], s[1], s[2], void 0, void 0, r.depth, 1, "cutout" == r.operation) } else "ring" == r.drawForm && e.drawImageRing.apply(e, [a].concat(n(r.args))) } } }, { key: "posVoxelToObject", value: function(e, t, i) { var r = this.defaultVoxelSize;
                    new THREE.Vector3(e * r, t * r, i * r); return [e * r, t * r, i * r] } }, { key: "updateMaterial", value: function(e) { for (var t in this.meshes) this.meshes[t].material.setMaterialProperties(e) } }, { key: "render", value: function() { for (var e in this.meshes) this.meshes[e].geometry.render() } }], [{ key: "resourcesUsed", value: function(e) { var t = []; for (var i in e.fields)
                        for (var r in e.fields[i].layers) { var n = e.fields[i].layers[r];
                            void 0 !== n.imagePath && t.push(n.imagePath), void 0 !== n.font && t.push(n.font.path) }
                    return t } }]), e }();
    t.default = f }, function(e, t, i) {
    "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 });
    var a = i(7),
        s = r(a),
        o = function e(t) {
            n(this, e), this.artType = t.artType || "image", this.id = t.id, this.operation = t.operation || "add", this.artSource = t.artSource, this.imagePath = void 0 !== this.id ? void 0 === this.artSource || "noun" == this.artSource ? s.default.getNoun(this.id) : s.default.getImageUpload(this.id) : void 0, this.position = t.position || [0, 0, 0],
                this.size = t.size || [200, 60, 200], this.label = t.label, this.font = VOXELFONTS.getFont(t.fontid), this.fontVersion = t.fontVersion || "default", this.shape = t.shape || "box", this.drawForm = t.drawForm || "flat", this.bounds = t.bounds, this.filters = void 0 !== t.filter ? [t.filter] : t.filters || [];
            for (var i in this.filters) { var r = this.filters[i]; "string" == typeof r && (this.filters[i] = [r]) } this.depth = t.depth, this.args = t.args || []
        };
    t.default = o
}, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(21),
        o = r(s),
        l = i(22),
        u = (r(l), i(4)),
        h = r(u),
        c = function() {
            function e() { n(this, e) } return a(e, null, [{ key: "init", value: function() {} }, { key: "getPaintPotThumbnailsForSlots", value: function(e) { var t = {},
                        i = CK.activeCharacter.characterData.parts,
                        r = CK.activeCharacter.characterData.decals; for (var n in e) { var a = e[n]; if (a in i) { var s = h.default.getPart(i[a]); if (void 0 !== s.surfaces) { var o = s.paintSchemeMappings; for (var l in o) t[l] = t[l] || this.getPaintPotThumbnailsForGroup(l) } } if (a in r) { var u = h.default.getDecal(r[a]),
                                c = h.default.getSlot(a),
                                d = c.decal_target; if (d in i)
                                for (var f in u.layerMappings) { var p = u.layerMappings[f];
                                    t[p] = t[p] || this.getPaintPotThumbnailsForGroup(p) } } } return t } }, { key: "getPaintPotThumbnailsForGroup", value: function(e) { e in h.default.paintsByKey || (e = "default"); var t = {}; for (var i in h.default.paintsByKey[e]) t[i] = h.default.paintsByKey[e][i]; return t } }, { key: "getColorScheme", value: function(e) { for (var t = [], i = o.default.getPaintSchemesInCategory(e), r = 0; r < i.length; r++) t.push(i[r].name); return t } }, { key: "applyColorOnSlots", value: function(e, t, i) { var r = {}; for (var n in t) { var a = t[n];
                        r[a] = {}, r[a][i] = e } CK.activeCharacter.change({ paints: r }) } }, { key: "applyColorSchemeOnSlots", value: function(e, t) { var i = o.default.presetPaintSchemesByName[e],
                        r = new o.default("");
                    r.addLayer(i); var n = {}; for (var a in t) { var s = t[a];
                        n[s] = r } CK.activeCharacter.change({ paints: n }) } }]), e }();
    t.default = c }, function(e, t) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        n = function() {
            function e() { i(this, e) } return r(e, null, [{ key: "changeHue", value: function(t, i) { var r = e.rgbToHSL(e.rgbToHex(t[0], t[1], t[2])); return r.h += i, r.h > 360 ? r.h -= 360 : r.h < 0 && (r.h += 360), e.hslToRGB(r) } }, { key: "getHue", value: function(t, i, r) { return e.rgbToHSL(e.rgbToHex(t, i, r)).h } }, { key: "rgbToHSL", value: function(e) { e = e.replace(/^\s*#|\s*$/g, ""), 3 == e.length && (e = e.replace(/(.)/g, "$1$1")); var t = parseInt(e.substr(0, 2), 16) / 255,
                        i = parseInt(e.substr(2, 2), 16) / 255,
                        r = parseInt(e.substr(4, 2), 16) / 255,
                        n = Math.max(t, i, r),
                        a = Math.min(t, i, r),
                        s = n - a,
                        o = (n + a) / 2,
                        l = 0,
                        u = 0; return l = 0 == s ? 0 : n == t ? 60 * ((i - r) / s % 6) : n == i ? 60 * ((r - t) / s + 2) : 60 * ((t - i) / s + 4), u = 0 == s ? 0 : s / (1 - Math.abs(2 * o - 1)), { h: l, s: u, l: o } } }, { key: "hslToRGB", value: function(t) { var i = t.h,
                        r = t.s,
                        n = t.l,
                        a = (1 - Math.abs(2 * n - 1)) * r,
                        s = a * (1 - Math.abs(i / 60 % 2 - 1)),
                        o = n - a / 2,
                        l = void 0,
                        u = void 0,
                        h = void 0; return i < 60 ? (l = a, u = s, h = 0) : i < 120 ? (l = s, u = a, h = 0) : i < 180 ? (l = 0, u = a, h = s) : i < 240 ? (l = 0, u = s, h = a) : i < 300 ? (l = s, u = 0, h = a) : (l = a, u = 0, h = s), l = e.normalize_rgb_value(l, o), u = e.normalize_rgb_value(u, o), h = e.normalize_rgb_value(h, o), [l, u, h] } }, { key: "normalize_rgb_value", value: function(e, t) { return e = Math.floor(255 * (e + t)), e < 0 && (e = 0), e } }, { key: "rgbToHex", value: function(e, t, i) { return "#" + ((1 << 24) + (e << 16) + (t << 8) + i).toString(16).slice(1) } }]), e }();
    t.default = n }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(1),
        o = (r(s), i(43)),
        l = (r(o), function() {
            function e() { n(this, e) } return a(e, null, [{ key: "init", value: function() {} }, { key: "makeCube", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new THREE.Vector3(1, 1, 1),
                        i = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1), new THREE.MeshNormalMaterial);
                    i.position.copy(e), i.scale.copy(t), CK.scene.add(i) } }, { key: "openCanvas", value: function(e) { var t = e.toDataURL("image/png", 1),
                        i = document.createElement("a");
                    i.href = t, document.body.appendChild(i), i.click(), document.body.removeChild(i) } }, { key: "manipulate", value: function(e) { var t = this;
                    void 0 === this.transformControls && ! function() { var e = new THREE.TransformControls(CK.orbitCamera.camera, CK.domElement);
                        e.setSize(.5), CK.scene.add(e), e.update(), e.setMode("rotate"), e.setSpace("local"), e.updateMatrixWorld(), e.addEventListener("change", function() { CK.scene.updateMatrixWorld(!0), CK.GameLoop.requestAnimationRefresh() }), t.transformControls = e, window.addEventListener("keydown", function(t) { switch (t.keyCode) {
                                case 81:
                                    e.setSpace("local" === e.space ? "world" : "local"); break;
                                case 17:
                                    e.setTranslationSnap(100), e.setRotationSnap(THREE.Math.degToRad(15)); break;
                                case 87:
                                    e.setMode("translate"); break;
                                case 69:
                                    e.setMode("rotate"); break;
                                case 82:
                                    e.setMode("scale"); break;
                                case 187:
                                case 107:
                                    e.setSize(e.size + .1); break;
                                case 189:
                                case 109:
                                    e.setSize(Math.max(e.size - .1, .1)); break;
                                case 86:
                                    e.detach() } }) }(); var i = CK.scene.getObjectByName(e); return void 0 !== i ? (this.transformControls.attach(i), CK.scene.updateMatrixWorld(!0), CK.GameLoop.requestAnimationRefresh()) : console.warn("Could not find", e, "in order to manipulate it"), this.manipObject = i, this.transformControls } }, { key: "displayImage", value: function(e, t) { document.documentElement.appendChild(e), void 0 !== t && document.documentElement.appendChild(document.createTextNode(t)) } }, { key: "displaySampler2D", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = document.createElement("canvas");
                    i.width = 12 * e.width, i.height = 12 * e.height; var r = i.getContext("2d");
                    r.font = "9px Ariel", r.fillStyle = "#000000"; for (var n = 0; n < e.width; n++)
                        for (var a = 0; a < e.height; a++) 0 === e.getPixel(n, a, t) || r.fillText(e.getPixel(n, a, t), 12 * n, 12 * a);
                    this.displayImage(i) } }, { key: "showJoints", value: function() { var e = function() { window.debugSkeletonHelper.update(), t.threeObj.updateMatrixWorld(!0), window.debugSkeletonHelper.updateMatrixWorld(!0), window.debugSkeletonHelper.update() },
                        t = CK.activeCharacter.characterDisplay; if (void 0 !== window.debugSkeletonHelper) window.debugSkeletonHelper.visible = !window.debugSkeletonHelper.visible;
                    else { var i = t.skeleton.threeObj;
                        window.debugSkeletonHelper = new THREE.SkeletonHelper(i), CK.scene.add(window.debugSkeletonHelper), CK.GameLoop.register(e, "postAnimation"), e() } } }]), e }());
    t.default = l }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t.default = e, t }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var s = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        o = i(6),
        l = n(o),
        u = i(9),
        h = r(u),
        c = function() {
            function e() { a(this, e) } return s(e, null, [{ key: "showTexture", value: function(e) { var t = this.getDisplayPlane();
                    t.material.map = e, t.material.needsUpdate = !0 } }, { key: "showMaterial", value: function(e) { var t = this.getDisplayPlane();
                    t.material = e, t.material.needsUpdate = !0 } }, { key: "getDisplayPlane", value: function() { if (!CK.scene.getObjectByName("displayPlane")) { var e = new l.PlaneBufferGeometry(1, 1),
                            t = new l.MeshBasicMaterial({ color: new l.Color(1, 1, 1), map: h.default.defaultMaps.blue });
                        e.attributes.uv2 = e.attributes.uv; var i = new l.Mesh(e, t);
                        i.position.y = 2, i.position.x = 1, i.position.z = 1.5, i.rotation.y = 1.5708, i.name = "displayPlane", CK.scene.add(i), CK.scene.updateMatrixWorld() } return CK.scene.getObjectByName("displayPlane") } }]), e }();
    t.default = c }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(4),
        o = r(s),
        l = i(2),
        u = r(l),
        h = function() {
            function e() { n(this, e), this.i = 0, this.errors = [], this.partIds = Object.keys(o.default.parts), this.lastPartLoaded = void 0 } return a(e, [{ key: "start", value: function() { console.log("======== Lighting Up A Fat One ========"), this.nextPart() } }, { key: "nextPart", value: function() { var e = this; if (this.i >= this.partIds.length) console.log("======== Finished Smoking! ========");
                    else { var t = o.default.parts[this.partIds[this.i]]; if (this.i++, void 0 == t) this.nextPart();
                        else { console.log(t.id + " " + t.slot + " " + t.name); try { this.lastPartLoaded = t, CK.setPart(t.slot, t.id) } catch (e) { console.log(e), this.errors.push([t.slot, t.name, JSON.stringify(e)]) } u.default.next("CharacterFinishedChanging", function(t) { return setTimeout(function(t) { return e.nextPart(t) }, 40) }), CK.activeCharacter.characterDisplay.registerFinishedLoadingCallback() } } } }, { key: "logError", value: function(e, t, i) {} }]), e }();
    t.default = h }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(9),
        o = r(s),
        l = i(7),
        u = r(l),
        h = i(3),
        c = r(h),
        d = i(1),
        f = r(d),
        p = function() {
            function e() { n(this, e), this.environment = "", this.reflecitonCube = void 0, this.prevRevlectionCube = void 0, this.fadeIntervalId = void 0, this.mesh = void 0, this.threeObj = new THREE.Object3D, this.threeObj.name = "background", this.cubeTextureLoader = new THREE.CubeTextureLoader } return a(e, [{ key: "change", value: function(e) { var t = this; return "all" == e || "new" == e || this.environment == e ? void("" == this.environment && (this.environment = "fantasy")) : (this.environment = e, void 0 != this.reflecitonCube && (this.prevRevlectionCube = this.reflecitonCube), this.fadeIntervalId && clearInterval(this.fadeIntervalId), void this.cubeTextureLoader.load(u.default.getEnvCubePaths(e), function(e) { t.reflecitonCube = e, t.reflecitonCube.format = THREE.RGBFormat, t.loaded(), f.default.occlusion ? t.cubeTextureLoader.load(u.default.getEnvMap(), function(e) { t.envMap = e, t.envMap.format = THREE.RGBAFormat, o.default.updateReflectionCube(t.envMap) }) : o.default.updateReflectionCube(t.reflecitonCube) })) } }, { key: "loaded", value: function() { this.fadeIntervalId && clearInterval(this.fadeIntervalId), this.mesh && this.threeObj.remove(this.mesh); var e = THREE.ShaderLib.cubeFader;
                    e.uniforms.tCube2.value = this.reflecitonCube, void 0 != this.prevRevlectionCube ? (e.uniforms.tCube.value = this.prevRevlectionCube, e.uniforms.fadeValue.value = 0) : (e.uniforms.tCube.value = this.reflecitonCube, e.uniforms.fadeValue.value = 1); var t = new THREE.ShaderMaterial({ fragmentShader: e.fragmentShader, vertexShader: e.vertexShader, uniforms: e.uniforms, depthWrite: !1, side: THREE.BackSide });
                    this.mesh = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100, 7, 7, 7), t), this.mesh.name = "skyMesh", this.threeObj.add(this.mesh); var i = this.fadeIntervalId = setInterval(function() { e.uniforms.fadeValue.value < 1 ? (e.uniforms.fadeValue.value = e.uniforms.fadeValue.value + .05, c.default.requestRenderRefresh()) : (e.uniforms.fadeValue.value = 1, clearInterval(i)) }, 33) } }, { key: "visible", get: function() { return void 0 != this.mesh && this.mesh.visible }, set: function(e) { void 0 != this.mesh && (this.mesh.visible = !1) } }]), e }();
    t.default = p }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t.default = e, t }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var s = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        o = i(6),
        l = n(o),
        u = i(44),
        h = r(u),
        c = i(46),
        d = r(c),
        f = i(47),
        p = r(f),
        v = i(50),
        g = r(v),
        m = i(3),
        y = r(m),
        b = i(2),
        _ = r(b),
        w = i(1),
        k = r(w),
        S = function() {
            function e() { var t = this;
                a(this, e), this.threeObj = new l.Object3D, this.threeObj.name = "environment", this.groundGroup = new l.Object3D, this.groundGroup.name = "groundGroup", this.threeObj.add(this.groundGroup), this.background = new h.default, this.background.change("fantasy"), this.ground = new d.default, this.lighting = new p.default, this.scalevisualizer = new g.default, k.default.groundPlane && this.groundGroup.add(this.ground.threeObj), this.threeObj.add(this.lighting.threeObj), this.threeObj.add(this.background.threeObj), this.groundGroup.add(this.scalevisualizer.threeObj), _.default.on("characterGroundChanged", function(e) { return t.repositionGround(e) }) } return s(e, [{ key: "showScaleVisualizer", value: function() { this.scalevisualizer.show() } }, { key: "hideScaleVisualizer", value: function() { this.scalevisualizer.hide() } }, { key: "changeBackground", value: function(e) { this.background.change(e) } }, { key: "repositionGround", value: function(e) { this.groundGroup.position.y = e, y.default.requestAnimationRefresh() } }, { key: "visible", set: function(e) { this.background.threeObj.visible = e, this.ground.threeObj.visible = e }, get: function() { return this.background.threeObj.visible } }]), e }();
    t.default = S }, function(e, t, i) { "use strict";

    function r(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t.default = e, t }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(6),
        s = r(a),
        o = function e() { n(this, e); var t = s.ShaderLib.shadowPlane,
                i = new s.ShaderMaterial({ fragmentShader: t.fragmentShader, vertexShader: t.vertexShader, uniforms: t.uniforms, lights: !0, fog: !1, transparent: !0 });
            i.uniforms.diffuse.value = new s.Color(.3, .3, .3); var r = new s.PlaneGeometry(15, 15);
            this.threeObj = new s.Mesh(r, i), this.threeObj.position.y = -.03, this.threeObj.rotation.x = -Math.PI / 2, this.threeObj.receiveShadow = !0, this.threeObj.castShadow = !1, this.threeObj.name = "groundMesh" };
    t.default = o }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(1),
        o = r(s),
        l = function() {
            function e() { n(this, e), this.threeObj = new THREE.Object3D, this.threeObj.name = "lighting", "diffuse" == o.default.lighting ? this._diffuse() : "shiny" == o.default.lighting ? this._shiny() : this._highContrast() } return a(e, [{ key: "_diffuse", value: function() { var e = new THREE.HemisphereLight(new THREE.Color(1.1, 1.1, 1.1), new THREE.Color(.33, .33, .33), 1);
                    this.threeObj.add(e); var t = new THREE.DirectionalLight(new THREE.Color(.44, .44, .43), 1);
                    t.position.set(9, 6, 2), t.target.position.set(0, 2, 0), t.castShadow = !0, t.shadow.camera.near = 9, t.shadow.camera.far = 19, t.shadow.camera.left = -4.1, t.shadow.camera.right = 3, t.shadow.camera.top = 3, t.shadow.camera.bottom = -3, t.shadow.bias = -.007, t.shadow.mapSize = new THREE.Vector2(256, 256), window.light1 = t, this.threeObj.add(t) } }, { key: "_highContrast", value: function() { var e = new THREE.Color(.64, .64, .63),
                        t = new THREE.Color(.09, .09, .09),
                        i = new THREE.Color(.65, .65, .68),
                        r = new THREE.DirectionalLight(e, 1);
                    r.layers.set(0), r.position.set(9, 10, 2), r.target.position.set(0, 2, 0), r.castShadow = o.default.shadows, r.shadow.camera.near = 9, r.shadow.camera.far = 19, r.shadow.camera.left = -4.1, r.shadow.camera.right = 3, r.shadow.camera.top = 3, r.shadow.camera.bottom = -3, r.shadow.bias = -.007, r.shadow.mapSize = new THREE.Vector2(512, 512), r.name = "sunlight", this.sunlight = r, this.hemisphere = new THREE.HemisphereLight(i, t, 1), this.threeObj.add(this.sunlight), this.threeObj.add(this.hemisphere) } }, { key: "_shiny", value: function() { var e = new THREE.Color(.64, .64, .63),
                        t = new THREE.Color(.09, .09, .09),
                        i = new THREE.Color(.65, .65, .68),
                        r = new THREE.DirectionalLight(e, 1);
                    r.name = "Sunlight", r.position.set(9, 10, 2), r.target.position.set(0, 2, 0), r.castShadow = !0, r.shadow.camera.near = 9, r.shadow.camera.far = 19, r.shadow.camera.left = -4.1, r.shadow.camera.right = 3, r.shadow.camera.top = 3, r.shadow.camera.bottom = -3, r.shadow.bias = -.007, r.shadow.mapSize = new THREE.Vector2(512, 512); var n = new THREE.DirectionalLight(e, .4);
                    n.name = "Sunlight 2", n.position.set(-4, 5, -2), n.target.position.set(0, 0, 0); var a = new THREE.HemisphereLight(i, t, 1);
                    a.name = "Hemisphere Light Main", this.threeObj.add(r), this.threeObj.add(n), this.threeObj.add(a) } }]), e }();
    t.default = l }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(1),
        o = r(s),
        l = i(2),
        u = (r(l), i(3)),
        h = r(u),
        c = function() {
            function e(t, i, r, a) { n(this, e), this.camera = new THREE.PerspectiveCamera(45, t / i, 2, 100), this.resize(t, i), this.controls = new THREE.OrbitControls(this.camera, r.renderer.domElement), this.controls.enabled = !o.default.fixedCamera, this.controls.damping = .2, this.controls.addEventListener("change", a), this.controls.minPolarAngle = .01, this.controls.pushMinRadius = 4, this.controls.pushMaxRadius = 8, this.controls.pushUpMin = 0, this.controls.pushUpMax = 1, this.controls.trackMinRadius = 4, this.controls.trackMaxRadius = 8, this.settingsName = "default", this.setFromName(this.settingsName), o.default.freeCamera || o.default.debug ? (this.controls.trackLeftMax = 1, this.controls.trackLeftMin = .5) : (this.controls.trackLeftMax = -.5, this.controls.trackLeftMin = -1.5, this.controls.minDistance = 4, this.controls.maxDistance = 9, this.controls.maxPolarAngle = o.default.maxPolarAngle || .52 * Math.PI, this.controls.minPolarAngle = o.default.minPolarAngle || 0, this.controls.enableZoom = !0, this.controls.enablePan = !1), this.controls.update() } return a(e, [{ key: "toObj", value: function() { return this.camera.updateMatrixWorld(!0), this.camera.updateProjectionMatrix(!0), this.camera.lookAt(this.controls.target), this.camera.updateMatrixWorld(!0), this.camera.updateProjectionMatrix(!0), JSON.stringify({ position: this.camera.getWorldPosition().toArray(), rotation: this.camera.getWorldRotation().toArray(), target: this.controls.target.toArray() }) } }, { key: "fromObj", value: function(e) { this.camera.position.fromArray(e.position), this.camera.rotation.fromArray(e.rotation), this.controls.target.fromArray(e.target), this.camera.updateMatrixWorld(!0), this.camera.updateProjectionMatrix(!0), h.default.requestRenderRefresh() } }, { key: "setFromName", value: function(e) { this.settingsName = e, e in o.default.cameras || console.warn("Could not find camera", e); var t = o.default.cameras[e] || o.default.cameras.default;
                    this.fromObj(t) } }, { key: "resize", value: function(e, t) { this.camera.aspect = e / t, this.setOffset() } }, { key: "setOffset", value: function(e) { o.default.cameraOffset && (void 0 === e ? this.camera.filmOffset = 4.5 * this.camera.aspect : this.camera.filmOffset = e, this.camera.updateProjectionMatrix(!0), this.camera.updateMatrixWorld(!0)) } }]), e }();
    t.default = c }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(3),
        o = r(s),
        l = function() {
            function e(t, i) { var r = this;
                n(this, e), this.object = t, this.domElement = i || document, this.offset = new THREE.Vector3, this.enable = !0, this.mouseStart = new THREE.Vector2, this.mouseEnd = new THREE.Vector2, this.mouseDelta = new THREE.Vector2, this.rotating = !1, this.domElement.addEventListener("mousedown", function(e) { return r.onMouseDown(e) }, !1) } return a(e, [{ key: "onMouseDown", value: function(e) { var t = this;
                    this.enable && !this.rotating && (e.preventDefault(), this.rotating = !0, this.mouseStart.set(e.clientX, e.clientY), document.addEventListener("mousemove", function(e) { return t.onMouseMove(e) }, !1), document.addEventListener("mouseup", function(e) { return t.onMouseUp(e) }, !1)) } }, { key: "onMouseMove", value: function(e) { this.rotating && (e.preventDefault(), this.mouseEnd.set(e.clientX, e.clientY), this.mouseDelta.subVectors(this.mouseEnd, this.mouseStart), this.update(), this.mouseStart.set(e.clientX, e.clientY)) } }, { key: "onMouseUp", value: function(e) { var t = this;
                    this.rotating && (e.preventDefault(), document.removeEventListener("mousemove", function(e) { return t.onMouseMove(e) }, !1), document.removeEventListener("mouseup", function(e) { return t.onMouseUp(e) }, !1), this.rotating = !1) } }, { key: "update", value: function() { this.object.rotation.y += this.mouseDelta.x / 60, o.default.requestAnimationRefresh() } }]), e }();
    t.default = l }, function(e, t, i) { "use strict";

    function r(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t.default = e, t }

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var s = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        o = i(9),
        l = n(o),
        u = i(6),
        h = r(u),
        c = i(3),
        d = n(c),
        f = i(2),
        p = n(f),
        v = i(8),
        g = n(v),
        m = function() {
            function e(t) { var i = this;
                a(this, e), this.scene = t, this.scaleVisualizerObject = "", this.colorMap = void 0, this.normalMap = l.default.defaultNormalTexture, this.geo = void 0, this.loadRequest = !1, this.loaded = !1, this.visible = !1, this.loader = new h.JSONLoader, this.mesh = void 0, this.scale = "28mm", this.gridmesh = void 0, this.gridmeshVisible = !1, this.threeObj = new h.Object3D, this.threeObj.name = "scaleVisualizer", p.default.on("characterChanged", function(e) { return i.changeScale(e.characterData.scale) }) } return s(e, [{ key: "show", value: function() { this.loadIfNeeded(), this.visible = !0, this.refresh() } }, { key: "hide", value: function() { this.visible = !1, this.refresh() } }, { key: "changeScale", value: function(e) { void 0 != e && "" != e && e != this.scale && (this.scale = e.split("_")[0], this.refresh()) } }, { key: "refresh", value: function() { this.loaded && (this.mesh.visible = this.visible, "28mm" == this.scale ? (this.mesh.scale.set(1, 1, 1), this.mesh.position.z = 3) : "3inch" == this.scale ? (this.mesh.scale.set(.5, .5, .5), this.mesh.position.z = 2) : "6inch" == this.scale ? (this.mesh.scale.set(.25, .25, .25), this.mesh.position.z = 1.8) : console.error("unrecognized scale", this.scale), d.default.requestAnimationRefresh()) } }, { key: "loadIfNeeded", value: function() { var e = this;
                    this.loadRequest || (this.colorMap = g.default.loaders.png.load("/static/textures/d20-color.png", function() { e.checkReady() }), this.normalMap = g.default.loaders.png.load("/static/textures/d20-normal.png", function() { e.checkReady() }), this.loader.load("/static/js/meshes/d20.js", function(t) { e.geo = t, e.checkReady() })) } }, { key: "checkReady", value: function() { if (!this.loaded && void 0 != this.colorMap && void 0 != this.normalMap && void 0 != this.geo && void 0 != this.colorMap.image && void 0 != this.normalMap.image) { this.loaded = !0; var e = new h.MeshPhongMaterial({ specular: 1118481, shininess: 100, normalMap: this.normalMap, map: this.colorMap });
                        this.mesh = new h.Mesh(this.geo, e), this.mesh.name = "d20", this.mesh.castShadow = !0, this.mesh.receiveShadow = !0, this.mesh.rotation.y = Math.PI, this.threeObj.add(this.mesh), this.refresh() } } }, { key: "showGrid", value: function() { if (this.gridmeshVisible = !0, void 0 == this.gridMesh) { var e = this;
                        this.loader.load("/static/js/meshes/grid.js", function(t) { e.loadGridMesh(t) }) } else this.gridMesh.visible = !0 } }, { key: "hideGrid", value: function() { this.gridmeshVisible = !1, this.refreshGridMesh() } }, { key: "loadGridMesh", value: function(e) { var t = h.ImageUtils.loadTexture("/static/textures/grid-scale-color.png", void 0, CK.refreshRender),
                        i = new h.MeshPhongMaterial({ map: t });
                    this.gridMesh = new h.Mesh(e, i), this.gridMesh.position.y = -.03, this.gridMesh.name = "gridMesh", this.gridMesh.castShadow = !1, this.gridMesh.receiveShadow = !0, this.gridMesh.rotation.y = .45916121961, this.gridMesh.scale.set(0, 0, 0), this.scene.add(this.gridMesh), this.refreshGridMesh() } }, { key: "refreshGridMesh", value: function() { this.gridMesh.visible = this.gridmeshVisible, "28mm" == this.scale ? (this.gridMesh.scale.set(1, 1, 1), this.gridMesh.position.z = .5507, this.gridMesh.position.x = 1.6321) : "3inch" == scale ? (this.gridMesh.scale.set(.5, .5, .5), this.gridMesh.position.z = 0, this.gridMesh.position.x = 0) : "6inch" == scale && (this.gridMesh.scale.set(.25, .25, .25), this.gridMesh.position.z = 0, this.gridMesh.position.x = 0); var e = "base" in CK.partsBySlot,
                        t = "feetL" in CK.partsBySlot && "feetR" in CK.partsBySlot,
                        i = -.0047;
                    e && (i -= .16), t && (i -= .0263), this.gridMesh.position.y = i, this.scene.updateMatrixWorld(), CK.refreshRender() } }]), e }();
    t.default = m }, function(e, t) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        n = function() {
            function e(t, r) { i(this, e), this.renderer = t, void 0 === r && (r = new THREE.WebGLRenderTarget(t.getSize().width, t.getSize().height, { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBAFormat, stencilBuffer: !1 })), this.renderTarget2 = r, this.renderTarget1 = r.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.passes = [] } return r(e, [{ key: "swapBuffers", value: function() { var e = this.readBuffer;
                    this.readBuffer = this.writeBuffer, this.writeBuffer = e } }, { key: "addPass", value: function(e) { this.passes.push(e) } }, { key: "insertPass", value: function(e, t) { this.passes.splice(t, 0, e) } }, { key: "render", value: function(e) { this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2; for (var t, i = 0, r = this.passes.length; i < r; i++) t = this.passes[i], t.enabled && (t.render(this.renderer, this.writeBuffer, this.readBuffer, e, !1), t.needsSwap && i != r - 1 && this.swapBuffers()) } }, { key: "setSize", value: function(e, t) { this.renderTarget1.setSize(e, t), this.renderTarget2.setSize(e, t) } }]), e }();
    t.default = n;
    ({ uniforms: { tDiffuse: { type: "t", value: null }, opacity: { type: "f", value: 1 } }, vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"), fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "gl_FragColor = opacity * texel;", "}"].join("\n") }) }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(3),
        o = r(s),
        l = i(1),
        u = r(l),
        h = i(5),
        c = r(h),
        d = i(54),
        f = r(d),
        p = function() {
            function e(t, i) { n(this, e); try { this.renderer = new THREE.WebGLRenderer({ antialias: !0, alpha: !0 }), this.renderer.setClearColor(0, 0), this.renderer.autoClear = !0, this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = THREE.PCFSoftShadowMap, this.renderer.shadowMap.cullFace = THREE.CullFaceBack, this.renderer.shadowMap.soft = !0, this.resize(t, i), u.default.occlusion && (this.occlusion = new f.default) } catch (e) { c.default.exception("Failed to create THREE.WebGLRenderer", e) } } return a(e, [{ key: "setSceneAndCamera", value: function(e, t) { if (this.scene = e, this.camera = t, u.default.bloom) { this.renderScene = new THREE.RenderPass(e, t), this.composer = new THREE.EffectComposer(this.renderer), this.composer.setSize(window.innerWidth, window.innerHeight), this.composer.addPass(this.renderScene), this.effectFXAA = new THREE.ShaderPass(THREE.FXAAShader), this.effectFXAA.uniforms.resolution.value.set(1 / window.innerWidth, 1 / window.innerHeight), this.composer.addPass(this.effectFXAA), this.bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), .15, .3, .8), this.composer.addPass(this.bloomPass); var i = new THREE.ShaderPass(THREE.CopyShader);
                        i.renderToScreen = !0, this.composer.addPass(i) } } }, { key: "resize", value: function(e, t) { this.width = e, this.height = t, this.renderer.setSize(this.width, this.height), o.default.requestRenderRefresh() } }, { key: "render", value: function() { u.default.bloom ? this.composer.render() : this.renderer.render(this.scene, this.camera) } }, { key: "getScreenshot", value: function(e) { try { return this.render(), this.renderer.domElement.toDataURL("image/png", 1) } catch (e) { console.error(e), window.alert("Browser does not support taking screenshots.") } } }, { key: "renderToImage", value: function(e, t, i) { e *= u.default.thumbnailHighAA ? 4 : 2, t *= u.default.thumbnailHighAA ? 4 : 2, (t > 2048 || e > 2048) && console.warn("Image size ", e / 4, "x", t / 4, " is a bit large for resize AA method"); var r = new THREE.WebGLRenderTarget(e, t, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter, format: u.default.thumbTransparency ? THREE.RGBAFormat : THREE.RGBFormat });
                    this.renderer.setClearColor(new THREE.Color(6908265), u.default.thumbTransparency ? 0 : 1), this.renderer.clearTarget(r, !0, !0, !0); var n = CK.activeCharacter.characterDisplay.meshes.bg;
                    void 0 !== n && (i.updateMatrixWorld(), n.matrixWorld.copy(i.matrixWorld)), this.renderer.render(this.scene, i, r, !1); var a = new Uint8Array(4 * e * t),
                        s = this.renderer.getContext();
                    s.readPixels(0, 0, e, t, s.RGBA, s.UNSIGNED_BYTE, a); var o = document.createElement("canvas");
                    o.width = e, o.height = t; var l = o.getContext("2d"),
                        h = l.createImageData(o.width, o.height);
                    h.data.set(a), l.putImageData(h, 0, 0); var c = document.createElement("canvas");
                    c.width = e / 2, c.height = t / 2; var d = c.getContext("2d");
                    d.scale(1, -1), d.drawImage(o, 0, 0, c.width, -c.height); var f = c; if (u.default.thumbnailHighAA) { var p = document.createElement("canvas");
                        p.width = e / 4, p.height = t / 4; var v = p.getContext("2d");
                        v.drawImage(c, 0, 0, p.width, p.height), f = p } return f.toDataURL("image/" + u.default.thumbFormat, .9) } }]), e }();
    t.default = p }, function(e, t) {
    "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function r(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function n(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = function(e) {
            function t() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                    o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                i(this, t); var l = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
                    u = THREE.UniformsUtils.clone(THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.lights])); return u.uvPosScl = { type: "v3", value: void 0 }, u.occlusionSubsurface = { type: "f", value: 0 }, l._properties = { fragmentShader: THREE.ShaderChunk.ck_shadow_frag, vertexShader: THREE.ShaderChunk.ck_shadow_vert, uniforms: u, lights: !0, fog: !1, skinning: e, morphTargets: n, morphNormals: !1, transparent: !0, depthWrite: !1, blending: THREE.AdditiveBlending, defines: { USE_COLOR_ID_CULL: !1, USE_COLOR_ID_MORPH: !1, USE_COLOR: a, USE_UVS: !0, USE_OCCLUSION: !0, OCCLUSION_PASSES: s } }, o && (l.side = THREE.BackSide), l.setValues(l._properties), l } return n(t, e), a(t, null, [{ key: "initVariants", value: function(e) { this.unskinned = new t(!1, !1, !1, e), this.skinned = new t(!0, !1, !1, e), this.skinnedMorphed = new t(!0, !0, !1, e), this.skinnedFlipped = new t(!0, !1, !1, e, !0), this.skinnedMorphedFlipped = new t(!0, !0, !1, e, !0), this.skinnedMorphedColorcull = new t(!0, !0, !0, e) } }, { key: "getVariant", value: function(e, t, i) { void 0 === this.unskinned && this.initVariants(t); var r = !!e.skinned,
                        n = "morphAttributes" in e && "position" in e.morphAttributes,
                        a = void 0 !== e.attributes && void 0 !== e.attributes.color,
                        s = void 0; return s = a ? this.skinnedMorphedColorcull.clone() : n && i ? this.skinnedMorphedFlipped.clone() : n ? this.skinnedMorphed.clone() : i ? this.skinnedFlipped.clone() : r ? this.skinned.clone() : this.unskinned.clone(), i && (s.ckFlipFaceWindingInShadows = !0), s.uniforms.uvPosScl = { type: "v3", value: void 0 }, s } }]), t }(THREE.ShaderMaterial);
    t.default = s
}, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(53),
        o = r(s),
        l = i(2),
        u = r(l),
        h = i(3),
        c = r(h),
        d = i(4),
        f = r(d),
        p = i(29),
        v = r(p),
        g = i(55),
        m = r(g),
        y = function() {
            function e() { var t = this;
                n(this, e), this.size = 512, this.shadowlights = 4, this.lightShadowSize = 256, this.samples = 30, this.vSamples = 4, this.shadowLightDistance = 15, this.renderTarget = new THREE.WebGLRenderTarget(this.size, this.size, { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat }), this.finalTarget = new THREE.WebGLRenderTarget(this.size, this.size, { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat }), this.dilator = new m.default(this.size, this.size), this.camera = new THREE.PerspectiveCamera(45, 1, .5, 2), this.camera.layers.set(1), this.lights = []; for (var i = 0; i < this.shadowlights; i++) { var r = new THREE.DirectionalLight(new THREE.Color(1, 1, 1), 1);
                    r.layers.set(1), r.position.set(0, 57, 0), r.target.position.set(0, 2, 0), r.castShadow = !0, r.shadow.camera.near = 8, r.shadow.camera.far = 22, r.shadow.camera.left = -6, r.shadow.camera.right = 6, r.shadow.camera.top = 6, r.shadow.camera.bottom = -6, r.shadow.bias = -.005, r.shadow.mapSize = new THREE.Vector2(this.lightShadowSize, this.lightShadowSize), CK.scene.add(r), this.lights.push(r) } for (var a = 0, s = 0; s < this.vSamples; s++) { var o = .5 * Math.PI * s / (this.vSamples - 1),
                        l = new THREE.Vector3(0, this.shadowLightDistance, 0).applyEuler(new THREE.Euler(o, 0, 0, "XYZ"));
                    a += 2 * l.z * Math.PI } var h = a / this.samples;
                this.samplePositions = []; for (var d = 0; d < this.vSamples; d++)
                    for (var f = .5 * Math.PI * d / (this.vSamples - 1), p = new THREE.Vector3(0, this.shadowLightDistance, 0).applyEuler(new THREE.Euler(f, 0, 0, "XYZ")), v = 2 * p.z * Math.PI, g = Math.floor(v / h), y = 2 * Math.PI / g, b = 0; b < g; b++) p.applyEuler(new THREE.Euler(0, y, 0, "XYZ")), this.samplePositions.push(p.clone()); for (var _ = this.samplePositions.length; _; _--) { var w = Math.floor(Math.random() * _),
                        k = [this.samplePositions[w], this.samplePositions[_ - 1]];
                    this.samplePositions[_ - 1] = k[0], this.samplePositions[w] = k[1] } this.passes = Math.floor(this.samplePositions.length / this.shadowlights), this.needsRefresh = !0, u.default.on("CharacterFinishedChanging", function() { t.needsRefresh = !0 }), c.default.register(function() { t.render() }, "preRender"), c.default.register(function() { t.iteration < t.passes && c.default.requestRenderRefresh() }, "end") } return a(e, [{ key: "refresh", value: function() { if (void 0 === this.uvPosScaleBySlot) { this.orderedSlots = {}; for (var e in f.default.slots) { var t = f.default.slots[e].bake_size;
                            void 0 !== t && "" != t && null !== t && (t in this.orderedSlots || (this.orderedSlots[t] = []), this.orderedSlots[t].push(e)) } this.uvPosScaleBySlot = {}; for (var i = 4096, r = new v.default([0, 0], i), n = i; n > 2; n /= 2)
                            if (n in this.orderedSlots)
                                for (var a in this.orderedSlots[n]) { var s = this.orderedSlots[n][a],
                                        l = r.fillNextEmptySlot(n);
                                    void 0 !== l ? this.uvPosScaleBySlot[s] = new THREE.Vector3(l.location[0], l.location[1], l.size).multiplyScalar(1 / i) : console.error("Ambient Occlusion textures wont fit into atlas of size: ", i, "!", s) } } CK.renderer.renderer.setClearColor(new THREE.Color(0, 0, 0), 1), CK.renderer.renderer.clearTarget(this.renderTarget, !0, !0, !0), this.meshes = []; var u = CK.activeCharacter.characterDisplay.getMeshes(); for (var h in u)
                        if (h in this.uvPosScaleBySlot) { var c = u[h];
                            this.meshes.push(c); var d = this.uvPosScaleBySlot[h];
                            void 0 === c.shadowMaterial && (c.layers.enable(1), c.shadowMaterial = o.default.getVariant(c.geometry, this.samples, "L" == c.part.side)), c.material.setOcclusion(d, this.finalTarget.texture), c.shadowMaterial.uniforms.uvPosScl.value = d } else console.warn("No AO for slot ", h, " because no place for it was found ");
                    this.iteration = 0, this.needsRefresh = !1 } }, { key: "render", value: function() { if (void 0 !== f.default.slots && (this.needsRefresh && this.refresh(), this.iteration < this.passes)) { for (var e = 0; e < this.shadowlights; e++) this.lights[e].position.copy(this.samplePositions[this.iteration * this.shadowlights + e].clone().add(new THREE.Vector3(0, 2, 0))), this.lights[e].target.position.set(0, 2, 0), this.lights[e].updateMatrixWorld(!0), this.lights[e].shadow.camera.updateProjectionMatrix(!0); for (var t in this.meshes) { var i = this.meshes[t];
                            i.prevMaterial = i.material, i.material = i.shadowMaterial } CK.renderer.renderer.autoClear = !1, CK.renderer.renderer.render(CK.scene, this.camera, this.renderTarget, !1), this.dilator.render(CK.renderer.renderer, this.finalTarget, this.renderTarget), CK.renderer.renderer.autoClear = !0; for (var r in this.meshes) { var n = this.meshes[r];
                            n.material = n.prevMaterial, "occlusionProgress" in n.material.uniforms && (n.material.uniforms.occlusionProgress.value = this.iteration / this.passes) } this.iteration++ } } }, { key: "putRenderTargetIntoHTML", value: function() { var e = new Uint8Array(4 * this.size * this.size),
                        t = CK.renderer.renderer.getContext();
                    t.readPixels(0, 0, this.size, this.size, t.RGBA, t.UNSIGNED_BYTE, e); var i = document.createElement("canvas");
                    i.width = this.size, i.height = this.size; var r = i.getContext("2d"),
                        n = r.createImageData(i.width, i.height);
                    n.data.set(e), r.putImageData(n, 0, 0), CK.Debug.displayImage(i) } }, { key: "occlusionSubsurface", get: function() { return void 0 !== this.meshes ? this.meshes[0].shadowMaterial.uniforms.occlusionSubsurface.value : 0 }, set: function(e) { if (void 0 !== this.meshes)
                        for (var t in this.meshes) this.meshes[t].shadowMaterial.uniforms.occlusionSubsurface.value = e } }]), e }();
    t.default = y }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function s(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var o = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        l = i(26),
        u = r(l),
        h = function(e) {
            function t(e, i) { n(this, t); var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); return r.setMaterial(new THREE.ShaderMaterial({ uniforms: { readTexture: { type: "t", value: null } }, vertexShader: "\n\n                    varying vec2 vUv;\n\n                    void main() {\n\n                    vUv = uv;\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n                    } \n\n                ", fragmentShader: "\n\n                    uniform sampler2D readTexture;\n                    \n                    float px = " + 1 / e + ";\n                    float py = " + 1 / i + ";\n\n                    varying vec2 vUv;\n\n                    void main() { //very simple. Takes the surrounding pixels and applies them to this pixel\n                    \n                        vec4 p = texture2D( readTexture, vUv );\n                        \n                        if( p.b < 0.001 ){ //make sure this is an empty pixel.\n                        \n                            vec4 d0 = texture2D( readTexture, vUv + vec2(-px, -py) );\n                            vec4 d1 = texture2D( readTexture, vUv + vec2(-px, 0.0) );\n                            vec4 d2 = texture2D( readTexture, vUv + vec2(0.0, -py) );\n                            vec4 d3 = texture2D( readTexture, vUv + vec2(0.0, py) );\n                            vec4 d4 = texture2D( readTexture, vUv + vec2(px, 0.0) );\n                            vec4 d5 = texture2D( readTexture, vUv + vec2(px, py) );\n                            vec4 d6 = texture2D( readTexture, vUv + vec2(px, -py) );\n                            vec4 d7 = texture2D( readTexture, vUv + vec2(-px, py) );\n                        \n                            float surrounding = d0.b + d1.b + d2.b + d3.b + d4.b + d5.b + d6.b + d7.b; //will = 8.0 if no occlusion surrounding it.\n                            \n                            if( surrounding > 0.001 ){ //there's at least something around this pixel.\n\n                                float occlusion = \n                                \n                                gl_FragColor.b = 1.0;\n                                \n                                gl_FragColor.r = ( d0.r * d0.b + d1.r * d1.b + d2.r * d2.b + d3.r * d3.b + d4.r * d4.b + d5.r * d5.b + d6.r * d6.b + d7.r * d7.b ) / surrounding; //the color contribution of the surrounding pixels\n                                gl_FragColor.g = ( d0.g * d0.b + d1.g * d1.b + d2.g * d2.b + d3.g * d3.b + d4.g * d4.b + d5.g * d5.b + d6.g * d6.b + d7.g * d7.b ) / surrounding; //the color contribution of the surrounding pixels\n                                gl_FragColor.a = 1.0;\n                            } else {\n                                gl_FragColor = p;\n                                gl_FragColor.r = 0.5;\n                                gl_FragColor.g = 0.5;\n                            }\n                        } else {\n                            gl_FragColor = p;\n                        }\n                    }\n                " })), r } return s(t, e), o(t, [{ key: "render", value: function(e, t, i) { this.uniforms.readTexture.value = i.texture, e.render(this.scene, this.camera, t, !0) } }]), t }(u.default);
    t.default = h }, function(e, t) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        n = (Math.pow(2, 8) - 1, Math.pow(2, 16) - 1),
        a = (Math.pow(2, 16) - 2) / 2,
        s = function() {
            function e(t) { i(this, e), this.buffer = t, this.dataView = new DataView(t), this.version = this.dataView.getFloat32(0, !0), this._getStartPoints(), this._getBits() } return r(e, [{ key: "_getStartPoints", value: function() { this.count32 = this.dataView.getFloat32(4, !0), this.count16 = this.dataView.getFloat32(8, !0), this.count8 = this.dataView.getFloat32(12, !0), this.count1 = this.dataView.getFloat32(16, !0), this.i32 = 20, this.i16 = this.i32 + 4 * this.count32, this.i8 = this.i16 + 2 * this.count16, this.i1 = this.i8 + this.count8, this.bi = 0 } }, { key: "_getBits", value: function() { for (var e, t, i = [], r = Math.ceil(this.count1 / 8), n = r + this.i1, a = this.i1, s = this.dataView; a < n; a++)
                        for (e = s.getUint8(a), t = 0; t < 8; t++) i.push(0 == (e & 1 << t) ? 0 : 1);
                    this.bits = i } }, { key: "getBit", value: function() { return this.bits[this.bi++] } }, { key: "getFloat", value: function() { return this.i32 += 4, this.dataView.getFloat32(this.i32 - 4, !0) } }, { key: "getFloatArray", value: function(e) { var t = new Float32Array(this.buffer, this.i32, e); return this.i32 += 4 * e, t } }, { key: "getUint32Array", value: function(e) { for (var t = new Uint32Array(e), i = 0; i < e; i++) t[i] = Math.round(this.dataView.getFloat32(this.i32, !0)), this.i32 += 4; return t } }, { key: "getQuaternionArray", value: function(e) { e *= 4; for (var t = this.dataView, i = new Float32Array(e), r = 0; r < e; r++) i[r] = t.getUint16(this.i16, !0) / n * 2 - 1, this.i16 += 2; return i } }, { key: "getPositionArray", value: function(e, t) { for (var i, r = this.dataView, n = new Float32Array(3 * e), s = 0; s < e; s++)
                        for (i = 0; i < 3; i++) n[3 * s + i] = (r.getUint16(this.i16, !0) - a) / a * t, this.i16 += 2; return n } }, { key: "getScaleArray", value: function(e, t) { for (var i, r = this.dataView, a = new Float32Array(3 * e), s = 0; s < e; s++)
                        for (i = 0; i < 3; i++) a[3 * s + i] = r.getUint16(this.i16, !0) / n * t, this.i16 += 2; return a } }, { key: "getInt16", value: function() { return this.i16 += 2, this.dataView.getUint16(this.i16 - 2, !0) } }, { key: "getInt16Array", value: function(e) { var t = new Uint16Array(this.buffer, this.i16, e); return this.i16 = this.i16 + 2 * e, t } }, { key: "getInt8", value: function() { return this.dataView.getUint8(this.i8++, !0) } }, { key: "getInt8Array", value: function(e) { var t = new Uint8Array(this.buffer, this.i8, e); return this.i8 += e, t } }, { key: "getString", value: function() { for (var e = this.getInt8(), t = [], i = 0; i < e; i++) t.push(String.fromCharCode(this.dataView.getUint8(this.i8++))); return t.join("") } }]), e }();
    t.default = s }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(65),
        o = r(s),
        l = function() {
            function e() { n(this, e) } return a(e, null, [{ key: "load", value: function(e, t, i, r) { var n = e.substring(e.lastIndexOf("/") + 1).split(".")[0].replace(/_/g, "-");
                    $("head").prepend('<style type="text/css">\n\n    @font-face {\n            font-family: ' + n + ";\n            src: url( " + e + ') format("truetype");\n        }\n        p.customfont {\n            font-family: ' + n + ", Verdana, Tahoma;\n        }\n\n        </style>"); var a = new o.default(n, { weight: 400 });
                    a.load().then(function() { t(n) }).catch(r) } }]), e }();
    t.default = l }, function(e, t) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        n = function() {
            function e() { i(this, e) } return r(e, null, [{ key: "load", value: function(e, t, i, r) { var n = new Image;
                    n.onload = function() { return t(n) }, n.onerror = function(e) { return r(e) }, n.src = e } }]), e }();
    t.default = n }, function(e, t) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        n = function() {
            function e() { i(this, e) } return r(e, null, [{ key: "load", value: function(e, t, i, r) { $.ajax({ type: "GET", url: e, data: {}, dataType: "json", success: t, error: r }) } }]), e }();
    t.default = n }, function(e, t) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        n = function() {
            function e() { i(this, e) } return r(e, null, [{ key: "load", value: function(e, t, i, r) { $.ajax({ type: "GET", url: e, dataType: "text", success: function(e) { var i = new Image;
                            i.src = e, t(new THREE.Texture(i)) }, error: r }) } }]), e }();
    t.default = n }, function(e, t, i) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var i = 0; i < t.length; i++) { var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, i, r) { return i && e(t.prototype, i), r && e(t, r), t } }(),
        s = i(4),
        o = r(s),
        l = i(5),
        u = r(l),
        h = i(15),
        c = r(h),
        d = i(1),
        f = r(d),
        p = i(2),
        v = r(p),
        g = function() {
            function e() { n(this, e) } return a(e, null, [{ key: "init", value: function() { this.configs = void 0, this.loading = !1, this.getSavedConfigs(function() { v.default.emit("characterNameChanged") }) } }, { key: "getSavedConfigs", value: function(e) { var t = this; if (c.default.loggedIn) return void 0 != this.configs ? this.configs : void(this.loading || (this.loading = !0, $.ajax({ type: "GET", url: "/all_user_config/", dataType: "json", success: function(i) { void 0 === i.length && (console.error("Invalid returned user config object. Expecting an array."), i = []), t.loading = !1, t.configs = t._processConfigData(i), void 0 != e && e() }, error: function(e, i, r) { t.loading = !1, u.default.exception("Retrieving all_user_config", r) } }))) } }, { key: "_processConfigData", value: function(e) { for (var t in e) { var i = e[t],
                            r = {},
                            n = i.parts; for (var a in n) { var s = n[a],
                                l = o.default.getSlotFromId(s);
                            void 0 != l ? r[l] = s : console.error("Missing part in user config ", t, "part", s) } i.parts = r } return e } }, { key: "saveAndRequireLogin", value: function(e, t, i) { if (c.default.logIn()) { var r = !1; if (this.configs && this.configs.length)
                            for (var n = 0; n < this.configs.length; n++)
                                if (this.configs[n] && this.configs[n].meta.character_name == e.name) { r = !0; break }
                        if (r) { var a = confirm('"' + e.name + '" will be overwritten with these changes. Continue?');
                            a ? this.saveOrShare(e, t, i) : t() } else this.saveOrShare(e, t, i) } } }, { key: "saveOrShare", value: function(e) { var t = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
                    this.packageSaveCharacter(e, function(e) { var n = c.default.loggedIn ? function(e) { t._addConfig(e), i(e) } : i;
                        t._postSaveOrShare(e, n, r), delete e.meta.snapshot }) } }, { key: "packageSaveCharacter", value: function(e, t, i) { var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]; if ("" == e.name.replace(/\s/g, "")) { var n = 0; if (c.default.loggedIn && void 0 !== this.configs)
                            for (var a = 0; a < this.configs.length; a++) { var s = this.configs[a];
                                void 0 !== s && void 0 !== s.meta && void 0 !== s.meta.character_name && s.meta.character_name.indexOf("Unnamed Hero") != -1 && n++ } n > 0 ? e.name = "Unnamed Hero " + (n + 1) : e.name = "Unnamed Hero" } var o = e.characterData.getJson();
                    CK.requestThumbnail(e.characterData, function(e) { o.meta.snapshot = r ? encodeURIComponent(e) : e, t(o) }) } }, { key: "_addConfig", value: function(e) { for (var t in this.configs)
                        if ("meta" in this.configs[t] && "meta" in e && "character_name" in this.configs[t].meta && this.configs[t].meta.character_name.toLowerCase() == e.meta.character_name.toLowerCase()) return void(this.configs[t] = e);
                    this.configs.push(e) } }, { key: "_postSaveOrShare", value: function(e, t, i) { $.ajax({ type: "POST", url: f.default.configEditorMode ? "/save_config/" : c.default.loggedIn ? "/save_user_config/" : "/save_share/", data: JSON.stringify(e), success: function(e, i, r) { e[0].success || console.error("Somethign went wrong with post request", e), void 0 != t && t(e[1]) }, error: function(e, t, r) { u.default.exception("FailedToSave", r), void 0 != i && i() } }) } }, { key: "remove", value: function(e) { var t = this.configs[e].config_id;
                    delete this.configs[e], $.ajax({ type: "POST", url: "/remove_user_config/", data: { user_config_id: t }, success: function() { console.log("config_id " + t + " deleted") }, error: function(e, t, i) { console.log("delete character error"), console.log(t), console.log(i) } }) } }, { key: "share", value: function(e, t, i) { var r = function(e) { t(e && void 0 !== e.config_id ? location.origin + (c.default.loggedIn ? "/load_config=" : "/load_share=") + e.config_id : "Share failed.") };
                    this.saveOrShare(e, r, i) } }]), e }();
    t.default = g }, function(e, t, i) { "use strict";
    i(63), i(67), String.prototype.endsWith || (String.prototype.endsWith = function(e, t) { var i = this.toString();
        ("number" != typeof t || !isFinite(t) || Math.floor(t) !== t || t > i.length) && (t = i.length), t -= e.length; var r = i.indexOf(e, t); return r !== -1 && r === t }), String.prototype.startsWith || (String.prototype.startsWith = function(e, t) { return t = t || 0, this.substr(t, e.length) === e }), String.prototype.includes || (String.prototype.includes = function(e, t) { return "number" != typeof t && (t = 0), !(t + e.length > this.length) && this.indexOf(e, t) !== -1 }), Array.prototype.binaryIndexOf || Object.defineProperty(Array.prototype, "binaryIndexOf", { enumerable: !1, get: function(e) { for (var t, i, r, n = 0, a = this.length - 1; n <= a;)
                if (r = t = (n + a) / 2 | 0, i = this[t], i < e) n = t + 1;
                else { if (!(i > e)) return t;
                    a = t - 1 }
            return ~a } }) }, function(e, t, i) { "use strict";
    e.exports = i(64).polyfill() }, function(e, t, i) {
    (function(t, r) {! function(t, i) { e.exports = i() }(this, function() { "use strict";

            function e(e) { return "function" == typeof e || "object" == typeof e && null !== e }

            function n(e) { return "function" == typeof e }

            function a(e) { X = e }

            function s(e) { Y = e }

            function o() { return function() { return t.nextTick(d) } }

            function l() { return "undefined" != typeof J ? function() { J(d) } : c() }

            function u() { var e = 0,
                    t = new Z(d),
                    i = document.createTextNode(""); return t.observe(i, { characterData: !0 }),
                    function() { i.data = e = ++e % 2 } }

            function h() { var e = new MessageChannel; return e.port1.onmessage = d,
                    function() { return e.port2.postMessage(0) } }

            function c() { var e = setTimeout; return function() { return e(d, 1) } }

            function d() { for (var e = 0; e < W; e += 2) { var t = ie[e],
                        i = ie[e + 1];
                    t(i), ie[e] = void 0, ie[e + 1] = void 0 } W = 0 }

            function f() { try { var e = i(68); return J = e.runOnLoop || e.runOnContext, l() } catch (e) { return c() } }

            function p(e, t) { var i = arguments,
                    r = this,
                    n = new this.constructor(g);
                void 0 === n[ne] && I(n); var a = r._state; return a ? ! function() { var e = i[a - 1];
                    Y(function() { return D(a, n, e, r._result) }) }() : P(r, n, e, t), n }

            function v(e) { var t = this; if (e && "object" == typeof e && e.constructor === t) return e; var i = new t(g); return E(i, e), i }

            function g() {}

            function m() { return new TypeError("You cannot resolve a promise with itself") }

            function y() { return new TypeError("A promises callback cannot return that same promise.") }

            function b(e) { try { return e.then } catch (e) { return le.error = e, le } }

            function _(e, t, i, r) { try { e.call(t, i, r) } catch (e) { return e } }

            function w(e, t, i) { Y(function(e) { var r = !1,
                        n = _(i, t, function(i) { r || (r = !0, t !== i ? E(e, i) : C(e, i)) }, function(t) { r || (r = !0, T(e, t)) }, "Settle: " + (e._label || " unknown promise"));!r && n && (r = !0, T(e, n)) }, e) }

            function k(e, t) { t._state === se ? C(e, t._result) : t._state === oe ? T(e, t._result) : P(t, void 0, function(t) { return E(e, t) }, function(t) { return T(e, t) }) }

            function S(e, t, i) { t.constructor === e.constructor && i === p && t.constructor.resolve === v ? k(e, t) : i === le ? T(e, le.error) : void 0 === i ? C(e, t) : n(i) ? w(e, t, i) : C(e, t) }

            function E(t, i) { t === i ? T(t, m()) : e(i) ? S(t, i, b(i)) : C(t, i) }

            function M(e) { e._onerror && e._onerror(e._result), x(e) }

            function C(e, t) { e._state === ae && (e._result = t, e._state = se, 0 !== e._subscribers.length && Y(x, e)) }

            function T(e, t) { e._state === ae && (e._state = oe, e._result = t, Y(M, e)) }

            function P(e, t, i, r) { var n = e._subscribers,
                    a = n.length;
                e._onerror = null, n[a] = t, n[a + se] = i, n[a + oe] = r, 0 === a && e._state && Y(x, e) }

            function x(e) { var t = e._subscribers,
                    i = e._state; if (0 !== t.length) { for (var r = void 0, n = void 0, a = e._result, s = 0; s < t.length; s += 3) r = t[s], n = t[s + i], r ? D(i, r, n, a) : n(a);
                    e._subscribers.length = 0 } }

            function O() { this.error = null }

            function R(e, t) { try { return e(t) } catch (e) { return ue.error = e, ue } }

            function D(e, t, i, r) { var a = n(i),
                    s = void 0,
                    o = void 0,
                    l = void 0,
                    u = void 0; if (a) { if (s = R(i, r), s === ue ? (u = !0, o = s.error, s = null) : l = !0, t === s) return void T(t, y()) } else s = r, l = !0;
                t._state !== ae || (a && l ? E(t, s) : u ? T(t, o) : e === se ? C(t, s) : e === oe && T(t, s)) }

            function j(e, t) { try { t(function(t) { E(e, t) }, function(t) { T(e, t) }) } catch (t) { T(e, t) } }

            function A() { return he++ }

            function I(e) { e[ne] = he++, e._state = void 0, e._result = void 0, e._subscribers = [] }

            function U(e, t) { this._instanceConstructor = e, this.promise = new e(g), this.promise[ne] || I(this.promise), q(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? C(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && C(this.promise, this._result))) : T(this.promise, L()) }

            function L() { return new Error("Array Methods must be provided an Array") }

            function B(e) { return new U(this, e).promise }

            function F(e) { var t = this; return new t(q(e) ? function(i, r) { for (var n = e.length, a = 0; a < n; a++) t.resolve(e[a]).then(i, r) } : function(e, t) { return t(new TypeError("You must pass an array to race.")) }) }

            function H(e) { var t = this,
                    i = new t(g); return T(i, e), i }

            function N() { throw new TypeError("You must pass a resolver function as the first argument to the promise constructor") }

            function V() { throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.") }

            function z(e) { this[ne] = A(), this._result = this._state = void 0, this._subscribers = [], g !== e && ("function" != typeof e && N(), this instanceof z ? j(this, e) : V()) }

            function G() { var e = void 0; if ("undefined" != typeof r) e = r;
                else if ("undefined" != typeof self) e = self;
                else try { e = Function("return this")() } catch (e) { throw new Error("polyfill failed because global object is unavailable in this environment") }
                var t = e.Promise; if (t) { var i = null; try { i = Object.prototype.toString.call(t.resolve()) } catch (e) {} if ("[object Promise]" === i && !t.cast) return } e.Promise = z } var K = void 0;
            K = Array.isArray ? Array.isArray : function(e) { return "[object Array]" === Object.prototype.toString.call(e) }; var q = K,
                W = 0,
                J = void 0,
                X = void 0,
                Y = function(e, t) { ie[W] = e, ie[W + 1] = t, W += 2, 2 === W && (X ? X(d) : re()) },
                $ = "undefined" != typeof window ? window : void 0,
                Q = $ || {},
                Z = Q.MutationObserver || Q.WebKitMutationObserver,
                ee = "undefined" == typeof self && "undefined" != typeof t && "[object process]" === {}.toString.call(t),
                te = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                ie = new Array(1e3),
                re = void 0;
            re = ee ? o() : Z ? u() : te ? h() : void 0 === $ ? f() : c(); var ne = Math.random().toString(36).substring(16),
                ae = void 0,
                se = 1,
                oe = 2,
                le = new O,
                ue = new O,
                he = 0; return U.prototype._enumerate = function() { for (var e = this.length, t = this._input, i = 0; this._state === ae && i < e; i++) this._eachEntry(t[i], i) }, U.prototype._eachEntry = function(e, t) { var i = this._instanceConstructor,
                    r = i.resolve; if (r === v) { var n = b(e); if (n === p && e._state !== ae) this._settledAt(e._state, t, e._result);
                    else if ("function" != typeof n) this._remaining--, this._result[t] = e;
                    else if (i === z) { var a = new i(g);
                        S(a, e, n), this._willSettleAt(a, t) } else this._willSettleAt(new i(function(t) { return t(e) }), t) } else this._willSettleAt(r(e), t) }, U.prototype._settledAt = function(e, t, i) { var r = this.promise;
                r._state === ae && (this._remaining--, e === oe ? T(r, i) : this._result[t] = i), 0 === this._remaining && C(r, this._result) }, U.prototype._willSettleAt = function(e, t) { var i = this;
                P(e, void 0, function(e) { return i._settledAt(se, t, e) }, function(e) { return i._settledAt(oe, t, e) }) }, z.all = B, z.race = F, z.resolve = v, z.reject = H, z._setScheduler = a, z._setAsap = s, z._asap = Y, z.prototype = { constructor: z, then: p, catch: function(e) { return this.then(null, e) } }, z.polyfill = G, z.Promise = z, z }) }).call(t, i(66), function() { return this }()) }, function(e, t, i) {
    ! function() {
        function t(e, t) { document.addEventListener ? e.addEventListener("scroll", t, !1) : e.attachEvent("scroll", t) }

        function i(e) { document.body ? e() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function t() { document.removeEventListener("DOMContentLoaded", t), e() }) : document.attachEvent("onreadystatechange", function t() { "interactive" != document.readyState && "complete" != document.readyState || (document.detachEvent("onreadystatechange", t), e()) }) }

        function r(e) { this.a = document.createElement("div"), this.a.setAttribute("aria-hidden", "true"), this.a.appendChild(document.createTextNode(e)), this.b = document.createElement("span"), this.c = document.createElement("span"), this.h = document.createElement("span"), this.f = document.createElement("span"), this.g = -1, this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c) }

        function n(e, t) { e.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:" + t + ";" }

        function a(e) { var t = e.a.offsetWidth,
                i = t + 100; return e.f.style.width = i + "px", e.c.scrollLeft = i, e.b.scrollLeft = e.b.scrollWidth + 100, e.g !== t && (e.g = t, !0) }

        function s(e, i) {
            function r() { var e = n;
                a(e) && e.a.parentNode && i(e.g) } var n = e;
            t(e.b, r), t(e.c, r), a(e) }

        function o(e, t) { var i = t || {};
            this.family = e, this.style = i.style || "normal", this.weight = i.weight || "normal", this.stretch = i.stretch || "normal" }

        function l() { if (null === d) { var e = document.createElement("div"); try { e.style.font = "condensed 100px sans-serif" } catch (e) {} d = "" !== e.style.font } return d }

        function u(e, t) { return [e.style, e.weight, l() ? e.stretch : "", "100px", t].join(" ") }
        var h = null,
            c = null,
            d = null,
            f = null;
        o.prototype.load = function(e, t) {
            var a = this,
                o = e || "BESbswy",
                l = 0,
                d = t || 3e3,
                p = (new Date).getTime();
            return new Promise(function(e, t) {
                var v;
                if (null === f && (f = !!document.fonts), (v = f) && (null === c && (c = /OS X.*Version\/10\..*Safari/.test(navigator.userAgent) && /Apple/.test(navigator.vendor)), v = !c), v) { v = new Promise(function(e, t) {
                        function i() {
                            (new Date).getTime() - p >= d ? t() : document.fonts.load(u(a, '"' + a.family + '"'), o).then(function(t) { 1 <= t.length ? e() : setTimeout(i, 25) }, function() { t() }) } i() }); var g = new Promise(function(e, t) { l = setTimeout(t, d) });
                    Promise.race([g, v]).then(function() { clearTimeout(l), e(a) }, function() { t(a) }) } else i(function() {
                    function i() { var t;
                        (t = -1 != m && -1 != y || -1 != m && -1 != b || -1 != y && -1 != b) && ((t = m != y && m != b && y != b) || (null === h && (t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), h = !!t && (536 > parseInt(t[1], 10) || 536 === parseInt(t[1], 10) && 11 >= parseInt(t[2], 10))), t = h && (m == _ && y == _ && b == _ || m == w && y == w && b == w || m == k && y == k && b == k)), t = !t), t && (S.parentNode && S.parentNode.removeChild(S), clearTimeout(l), e(a)) }

                    function c() {
                        if ((new Date).getTime() - p >= d) S.parentNode && S.parentNode.removeChild(S),
                            t(a);
                        else { var e = document.hidden;!0 !== e && void 0 !== e || (m = f.a.offsetWidth, y = v.a.offsetWidth, b = g.a.offsetWidth, i()), l = setTimeout(c, 50) }
                    }
                    var f = new r(o),
                        v = new r(o),
                        g = new r(o),
                        m = -1,
                        y = -1,
                        b = -1,
                        _ = -1,
                        w = -1,
                        k = -1,
                        S = document.createElement("div");
                    S.dir = "ltr", n(f, u(a, "sans-serif")), n(v, u(a, "serif")), n(g, u(a, "monospace")), S.appendChild(f.a), S.appendChild(v.a), S.appendChild(g.a), document.body.appendChild(S), _ = f.a.offsetWidth, w = v.a.offsetWidth, k = g.a.offsetWidth, c(), s(f, function(e) { m = e, i() }), n(f, u(a, '"' + a.family + '",sans-serif')), s(v, function(e) { y = e, i() }), n(v, u(a, '"' + a.family + '",serif')), s(g, function(e) { b = e, i() }), n(g, u(a, '"' + a.family + '",monospace'))
                })
            })
        }, e.exports = o
    }()
}, function(e, t) {
    function i() { throw new Error("setTimeout has not been defined") }

    function r() { throw new Error("clearTimeout has not been defined") }

    function n(e) { if (h === setTimeout) return setTimeout(e, 0); if ((h === i || !h) && setTimeout) return h = setTimeout, setTimeout(e, 0); try { return h(e, 0) } catch (t) { try { return h.call(null, e, 0) } catch (t) { return h.call(this, e, 0) } } }

    function a(e) { if (c === clearTimeout) return clearTimeout(e); if ((c === r || !c) && clearTimeout) return c = clearTimeout, clearTimeout(e); try { return c(e) } catch (t) { try { return c.call(null, e) } catch (t) { return c.call(this, e) } } }

    function s() { v && f && (v = !1, f.length ? p = f.concat(p) : g = -1, p.length && o()) }

    function o() { if (!v) { var e = n(s);
            v = !0; for (var t = p.length; t;) { for (f = p, p = []; ++g < t;) f && f[g].run();
                g = -1, t = p.length } f = null, v = !1, a(e) } }

    function l(e, t) { this.fun = e, this.array = t }

    function u() {} var h, c, d = e.exports = {};! function() { try { h = "function" == typeof setTimeout ? setTimeout : i } catch (e) { h = i } try { c = "function" == typeof clearTimeout ? clearTimeout : r } catch (e) { c = r } }(); var f, p = [],
        v = !1,
        g = -1;
    d.nextTick = function(e) { var t = new Array(arguments.length - 1); if (arguments.length > 1)
            for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        p.push(new l(e, t)), 1 !== p.length || v || n(o) }, l.prototype.run = function() { this.fun.apply(null, this.array) }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = u, d.addListener = u, d.once = u, d.off = u, d.removeListener = u, d.removeAllListeners = u, d.emit = u, d.binding = function(e) { throw new Error("process.binding is not supported") }, d.cwd = function() { return "/" }, d.chdir = function(e) { throw new Error("process.chdir is not supported") }, d.umask = function() { return 0 } }, function(e, t) { "use strict"; var i = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
    i.forEach(function(e) { e.prototype.slice || (e.prototype.slice = function(e, t) { var i, r = this.length,
                n = e || 0;
            n = n >= 0 ? n : Math.max(0, r + n), t = t || r; var a = "number" == typeof t ? Math.min(t, r) : r;
            t < 0 && (a = r + t), i = a - n, i <= 0 && (i = 0); for (var s = this.constructor, o = new s(i), l = 0; l < i; l++) o[l] = this[n + l]; return o }) }) }, function(e, t) {}]);