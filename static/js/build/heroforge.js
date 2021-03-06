! function (e) {
  function a(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      exports: {},
      id: r,
      loaded: !1
    };
    return e[r].call(o.exports, o, o.exports, a), o.loaded = !0, o.exports
  }
  var t = {};
  return a.m = e, a.c = t, a.p = "static/js/build/", a(0)
}([function (e, a, t) {
  "use strict";

  function r(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var o = t(3),
    n = r(o),
    s = t(1),
    i = r(s),
    l = t(2),
    c = r(l),
    d = {};
  d.skeleton = {
    human: ["hand_familiar", "hand_fist", "hand_open", "hand_book", "hand_pistol", "hand_fireball", "hand_lantern", "hand_main", "hand_shield", "hand_rifle", "hand_orb", "jaw_underbite", "hair_cape", "hand_ratStand", "hand_pseudodragon", "hand_casting", "hand_summon", "sideItem_skirt", "hand_harp", "hand_bow"]
  }, d.slotGroups = {
    allGroup: ["face", "body", "ears", "hair", "beard", "horns", "wingsL", "tail", "helm", "mask", "chest", "shouldersL", "wrist", "glovesL", "back", "legs", "feetR", "itemR", "itemL", "sideL", "mount", "familiarR", "expression", "shape", "terrain", "label", "eyeL", "teeth", "shouldersR", "glovesR", "sideR", "feetL", "base", "eyebrows", "torso", "label", "familiarBase", "product", "wingsR", "familiarL", "itemD", "baseItem", "eyeR", "supportL", "supportR", "resolution", "stance", "tagNumber", "tag", "material", "scale", "twoHanded", "bodyUpper", "bodyLower", "toggleGroup"],
    characterGroup: ["face", "body", "ears", "hair", "beard", "horns", "wingsL", "tail", "helm", "mask", "chest", "shouldersL", "wrist", "glovesL", "back", "legs", "feetR", "itemR", "itemL", "sideL", "familiarR", "eyeL", "teeth", "shouldersR", "glovesR", "sideR", "feetL", "eyebrows", "torso", "wingsR", "familiarL", "itemD", "eyeR", "supportL", "supportR", "twoHanded", "bodyUpper", "bodyLower"],
    headGroup: ["face", "eyeR", "eyeL", "ears", "hair", "beard", "head", "eyebrows", "teeth"]
  }, d.slots = {
    eyebrows: {
      guaranteedFormOverride: !0
    },
    bodyUpper: {
      additionalMaps: ["normalMap2"],
      groundOffset: .026,
      required: !0
    },
    bodyLower: {
      additionalMaps: ["normalMap2"],
      groundOffset: .026,
      required: !0
    },
    face: {
      required: !0
    },
    eyeR: {
      required: !0
    },
    eyeL: {
      required: !0
    },
    mount: {
      bounds: [2, 0, 2, 2, 4.7, 2]
    },
    base: {
      groundOffset: -.22
    },
    material: {
      required: !0
    },
    scale: {
      required: !0
    },
    label: {
      allowMirror: !1
    },
    tagNumber: {
      allowMirror: !1
    }
  }, d.characterRotation = {
    x: 0,
    y: 2.05,
    z: 0
  }, d.sliders = n.default.sliders, d.projectName = "HeroForge", d.projectLabel = "Hero Forge", window.editorLayoutFunction = i.default.editorLayout, d.hideBackgroundForScreenshots = !0, d.materialSims = c.default.getSims, d.defaultFilter = "all", d.showEditor = !0, d.showModal = !0, d.showSaves = !0, d.cameras = {
    default: {
      position: [5.171456336975098, 1.7597931623458862, -2.2975525856018066],
      rotation: [-3.041924008640317, 1.1666797002818199, 3.049905440851841, "XYZ"],
      target: [-.03629984586379363, 1.5381865337936858, -.08148598507517447]
    },
    mount: {
      position: [7.815384864807129, 1.389518141746521, 2.480351448059082],
      rotation: [.3095619788523651, 1.208695456640952, -.2906347419610845, "XYZ"],
      target: [-.1685520473121323, 2.310857791814972, -.400233889598574]
    }
  }, d.addonKeywords = {
    fantasy: ["all"],
    western: ["all"],
    scifi: ["all"],
    modern: ["all"],
    asian: ["all"]
  }, console.info("Hero Forge Build ", "2017-05-18T01:34:51.376Z"), window.HeroForgeEntry = function () {
    CK.Settings.init(d), CKUI.main()
  }, window.HeroForgeForgeEntry = function () {
    CK.Settings.init(d), Forge.init()
  }
}, function (e, a, t) {
  "use strict";

  function r(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(a, "__esModule", {
    value: !0
  });
  var o = t(4),
    n = r(o),
    s = CKUI.Hooks,
    i = s.slider,
    l = s.sliderGroup,
    c = s.parts,
    d = s.linkedParts,
    m = s.configs,
    u = s.paints,
    p = s.scheme,
    h = s.decals,
    f = (s.linkedDecals, s.filter),
    g = s.jsx,
    b = s.labeler,
    y = s.slotFilter,
    C = ["body", "face", "ears", "eyebrows", "beard", "eyes", "hair"],
    v = ["chest", "legs"],
    w = function () {
      return [{
        label: "Genres",
        components: f(["All", "Fantasy", "Western", "Sci-Fi", "Modern", "East-Asian", "New"], ["all", "fantasy", "western", "scifi", "modern", "asian", "new"])
      }, m("Race", "racegenders", {
        columns: 2
      }), {
        label: "Head",
        subCategories: [{
          label: "Face",
          components: [i("Face Softness", "faceSoftness"), c("Face")]
        }, {
          label: "Expression",
          components: [m("Preset Expressions", "expression", {
            showSelected: !1
          }), l("Expressions", 1.5, [["Smile", "xprsn_smile"], ["Cocky", "xprsn_cocky"], ["Snarl", "xprsn_snarl"], ["Confused", "xprsn_confused"]]), i("AAAARRRGGGGHH!!!", "jaw")]
        }, c("Ears"), c("Hair"), c("Beard"), c("Eyebrows"), d("Eyes", "eye"), c("Teeth"), c("Horns")]
      }, {
        label: "Body",
        subCategories: [c("Torso", "bodyUpper"), c("Legs", "bodyLower"), {
          label: "Measurements",
          components: [i("Height"), i("Weight"), i("Build"), i("Muscularity"), i("Bust"), i("Waist"), i("Curves"), i("Booty")]
        }, d("Wings", "wings", {
          flip: !0
        }), c("Tail")]
      }, {
        label: "Clothing",
        subCategories: [m("Outfits", "armorSets"), c("Headwear", "helm"), c("Face", "mask"), d("Shoulders", "shoulders"), c("Chest"), d("Gloves", "gloves"), c("Legs"), d("Feet", "feet")]
      }, {
        label: "Items",
        subCategories: [{
          label: "Handheld",
          components: [y("itemR", {
            All: "all",
            "Hand Poses": "handpose",
            "Long Blades": "sword",
            "Short Blades": "shortblade",
            "Blunt Weapons": "blunt",
            Axes: "axe",
            Polearms: "polearm",
            Shields: "shield",
            Staffs: "staff",
            Bows: "bow",
            Crossbows: "crossbow",
            Pistols: "pistol",
            "Long Guns": "rifle",
            "Chain Weapons": "chain",
            "Spell Effects": "spell",
            Instruments: "instrument",
            "Light Sources": "light",
            Animals: "familiar",
            Miscellaneous: "miscellaneous"
          }), (0, n.default)()],
          onClose: function () {
            CK.Options.clearSlotFilter("itemR")
          },
          onClear: void 0 !== CK.activeCharacter.characterData.parts.itemR || void 0 !== CK.activeCharacter.characterData.parts.itemL ? function () {
            CK.clearSlots(["itemR", "itemL"])
          } : void 0
        }, d("Side", "side", {
          unlinked: !0
        }), c("Back")]
      }, {
        label: "Base",
        subCategories: [c("Base", "base", {
          columns: 3
        }), c("Items", "baseItem"), {
          label: "Label",
          components: [b("label"), c("Label")],
          onOpen: function () {},
          onClose: function () {}
        }]
      }, {
        label: "Mount",
        subCategories: [{
          label: "Mount",
          components: [function () {
            var e = void 0 == CK.activeCharacter.characterData.parts.mount,
              a = !e && void 0 !== CK.activeCharacter.characterData.parts.toggleGroup && 2017 == CK.activeCharacter.characterData.parts.toggleGroup;
            return {
              label: "Mirror",
              type: "parts",
              pinned: !0,
              options: [new CKUI.Hooks.MenuOption({
                label: "Riderless",
                thumb: "/static/img/riderless.png",
                description: "Toggle the rider on and off",
                thumbSize: [64, 64],
                selected: a,
                grayedOut: e,
                onClick: function () {
                  e || (a ? CK.clearSlot("toggleGroup") : CK.change({
                    parts: {
                      toggleGroup: 2017
                    }
                  }, void 0, !1))
                }
              })]
            }
          }, c("Mount", "mount")]
        }]
      }, {
        label: "Pose",
        subCategories: [{
          label: "Pose",
          components: [function () {
            return {
              label: "Mirror",
              type: "parts",
              pinned: !0,
              options: [new CKUI.Hooks.MenuOption({
                thumb: "/static/img/mirror.png",
                thumbSize: [80, 53],
                selected: CK.activeCharacter.characterData.mirroredPose,
                onClick: function () {
                  CK.mirror()
                }
              })]
            }
          }, m("Pose", "pose", {
            showSelected: !0
          })]
        }]
      }, function () {
        if (CK.Settings.color) return {
          label: "Paints",
          subCategories: [{
            label: "Head & Body",
            components: [p("Color Scheme", C, "race"), u("Skin", C, "skin"), u("Hair", C, "hair"), h("Eye R Decals", "general", "eyeR", 0), h("Eye L Decals", "general", "eyeL", 0)]
          }, {
            label: "Clothing",
            components: [p("Color Scheme", v, "clothing"), h("Chest Decal 1", "general", "chest", 0), h("Chest Decal 2", "general", "chest", 1), h("Item R Decal 2", "general", "itemR", 0), u("Cloth", v, "cloth"), u("Metal", v, "metal"), u("Leather", v, "leather")]
          }]
        }
      }, {
        label: "Material",
        subCategories: [{
          label: "Material",
          components: [g("scale-label", function () {
            var e = CK.Options.parts[CK.activeCharacter.characterData.parts.scale],
              a = void 0 !== e ? e.displayname : "";
            return React.createElement("h4", null, "Size: ", a)
          }), c("Size", "scale", {
            label: !0,
            labelType: "labelOnly"
          }), g("material-label", function () {
            var e = CK.Options.parts[CK.activeCharacter.characterData.parts.material],
              a = void 0 !== e ? e.displayname : "";
            return React.createElement("h4", null, "Material: ", a)
          }), c("Material", "material", {
            label: !0,
            labelType: "labelOnly"
          }), g("clickForMore", function () {
            if (CK.isSlotFull("scale") && CK.isSlotFull("material")) {
              var e = CK.Options.parts[CK.activeCharacter.characterData.parts.scale],
                a = CK.Options.parts[CK.activeCharacter.characterData.parts.material],
                t = CK.Options.productsBySlug[a.name + "_" + e.name];
              return React.createElement("div", {
                id: "materialScale-wrapper",
                class: "non-accordion",
                key: "material-scale-panel"
              }, React.createElement("div", {
                id: "material-wrapper",
                class: "subsection"
              }, React.createElement("div", {
                class: "subsection-content"
              }, React.createElement("hr", null), React.createElement("p", {
                class: "description"
              }, React.createElement("span", {
                id: "scale-desc",
                dangerouslySetInnerHTML: {
                  __html: e.description
                }
              }), " ", React.createElement("span", {
                id: "material-desc",
                dangerouslySetInnerHTML: {
                  __html: a.description
                }
              })), React.createElement("p", {
                id: "materials-learn-more"
              }, React.createElement("a", {
                href: "/Materials/",
                target: "_blank"
              }, "Learn more about our materials")), React.createElement("p", {
                class: "display-none",
                id: "product-preview"
              }, React.createElement("img", {
                src: "/static/img/photos/" + t.display_image
              })))))
            }
            return React.createElement("p", {
              class: "description"
            }, React.createElement("span", {
              id: "scale-desc"
            }, "Please select a size and material"))
          })]
        }],
        onOpen: function () {
          CK.enableMaterialSim()
        },
        onClose: function () {
          CK.disableMaterialSim()
        }
      }]
    };
  a.default = {
    editorLayout: w
  }
}, function (e, a) {
  "use strict";

  function t() {
    return CK.Settings.physicalShader ? {
      default: {
        diffuse: new THREE.Color(.73, .73, .73),
        roughness: .65,
        metalness: 0,
        color: !0,
        envMapIntensity: 1,
        occlusionStrength: .8,
        occlusionColor: new THREE.Color(0, 0, 0)
      },
      color: {
        diffuse: new THREE.Color(.73, .73, .73),
        roughness: .65,
        metalness: 0,
        color: !0
      },
      strong: {
        diffuse: new THREE.Color(.93, .93, .93),
        roughness: .9,
        metalness: 0,
        color: !1
      },
      ultra: {
        diffuse: new THREE.Color(.8, .8, .8),
        roughness: .3,
        metalness: 0,
        color: !1
      },
      bronze: {
        diffuse: new THREE.Color(.79, .56, .2),
        roughness: .1,
        metalness: 1,
        envMapIntensity: 1.36,
        occlusionStrength: .8,
        occlusionColor: new THREE.Color(.2, .1, 0),
        color: !1
      },
      steel: {
        diffuse: new THREE.Color(109 / 255, 90 / 255, 64 / 255),
        roughness: .5,
        metalness: 1,
        color: !1
      },
      gray: {
        diffuse: new THREE.Color(.26, .29, .29),
        roughness: .3,
        metalness: 0,
        color: !1
      },
      digital: {
        diffuse: new THREE.Color(.73, .73, .73),
        roughness: .65,
        metalness: 0,
        color: !0
      }
    } : {
      default: {
        diffuse: new THREE.Color(.73, .73, .73),
        shininess: .1,
        specular: new THREE.Color(.1, .1, .1),
        reflectivity: 0,
        color: !0
      },
      color: {
        diffuse: new THREE.Color(.73, .73, .73),
        shininess: .1,
        specular: new THREE.Color(.1, .1, .1),
        reflectivity: 0,
        color: !0
      },
      strong: {
        diffuse: new THREE.Color(218 / 255, 218 / 255, 209 / 255),
        shininess: .01,
        specular: new THREE.Color(.01, .01, .01),
        reflectivity: 0,
        color: !1
      },
      ultra: {
        diffuse: new THREE.Color(.8, .8, .8),
        shininess: .5,
        specular: new THREE.Color(.1, .1, .1),
        reflectivity: 0,
        color: !1
      },
      bronze: {
        diffuse: new THREE.Color(.94, .7, .3),
        shininess: .5,
        specular: new THREE.Color(1.2, 1, .7),
        reflectivity: 1,
        color: !1
      },
      steel: {
        diffuse: new THREE.Color(139 / 255, 120 / 255, 84 / 255),
        shininess: .2,
        specular: new THREE.Color(.6, .6, .6),
        reflectivity: .3,
        color: !1
      },
      gray: {
        diffuse: new THREE.Color(.36, .39, .39),
        shininess: .1,
        specular: new THREE.Color(.3, .3, .3),
        reflectivity: 0,
        color: !1
      },
      digital: {
        diffuse: new THREE.Color(.73, .73, .73),
        shininess: .1,
        specular: new THREE.Color(.1, .1, .1),
        reflectivity: 0,
        color: !1
      }
    }
  }
  Object.defineProperty(a, "__esModule", {
    value: !0
  }), a.default = {
    getSims: t
  }
}, function (e, a) {
  "use strict";
  Object.defineProperty(a, "__esModule", {
    value: !0
  });
  var t = {};
  t.height = {
    val: .5,
    targets: [{
      name: "heightDef",
      type: "joint",
      start: 0,
      end: .75,
      min: 0,
      max: .5
    }, {
      name: "heightDef",
      type: "joint",
      start: .76,
      end: 1,
      min: .51,
      max: 1
    }]
  }, t.weight = {
    val: 0,
    targets: [{
      name: "bulkUpperDef",
      type: "joint",
      start: 0,
      end: 1,
      min: 0,
      max: 1
    }, {
      name: "bulkLowerDef",
      type: "joint",
      start: 0,
      end: 1,
      min: 0,
      max: 1
    }, {
      name: "bulkTorsoDef",
      type: "joint",
      start: 0,
      end: 1,
      min: 0,
      max: 1
    }]
  }, t.build = {
    val: 0,
    targets: [{
      name: "shoulderWidthDef",
      type: "joint",
      start: 0,
      end: 1,
      min: 0,
      max: 1
    }]
  }, t.muscularity = {
    val: 0,
    targets: [{
      name: "muscularityDef",
      type: "joint",
      start: 0,
      end: 1,
      min: 0,
      max: 1
    }, {
      name: "muscularity",
      type: "morph",
      slot: "bodyUpper",
      start: .5,
      end: 1,
      min: 0,
      max: 1
    }, {
      name: "muscularity",
      type: "morph",
      slot: "bodyLower",
      start: .5,
      end: 1,
      min: 0,
      max: 1
    }, {
      name: "normal2Blend",
      type: "shader",
      slot: "bodyUpper",
      start: .5,
      end: 1,
      min: 0,
      max: 1
    }, {
      name: "normal2Blend",
      type: "shader",
      slot: "bodyLower",
      start: .5,
      end: 1,
      min: 0,
      max: 1
    }]
  }, t.bust = {
    val: .5,
    targets: [{
      name: "chestDef",
      type: "joint",
      start: 0,
      end: 1,
      min: 0,
      max: .9
    }]
  }, t.waist = {
    val: .75,
    targets: [{
      name: "waistDef",
      type: "joint",
      start: 0,
      end: 1,
      min: 0,
      max: 1
    }]
  }, t.curves = {
    val: .3,
    targets: [{
      name: "curvesDef",
      type: "joint",
      start: 0,
      end: 1,
      min: 0,
      max: 1
    }]
  }, t.booty = {
    val: 0,
    targets: [{
      name: "bootyDef",
      type: "joint",
      start: 0,
      end: 1,
      min: 0,
      max: .9
    }]
  }, t.faceSoftness = {
    val: .5,
    targets: [{
      name: "male",
      type: "morph",
      slot: "eyebrows",
      start: 0,
      end: .5,
      min: 1,
      max: 0
    }, {
      name: "male",
      type: "morph",
      slot: "face",
      start: 0,
      end: .5,
      min: 1,
      max: 0
    }, {
      name: "female",
      type: "morph",
      slot: "eyebrows",
      start: .5,
      end: 1,
      min: 0,
      max: 1
    }, {
      name: "female",
      type: "morph",
      slot: "face",
      start: .5,
      end: 1,
      min: 0,
      max: 1
    }]
  }, t.jaw = {
    val: 0,
    targets: [{
      name: "jawDef",
      type: "joint",
      start: 0,
      end: 1,
      min: 0,
      max: .8
    }]
  }, t.xprsn_smile = {
    val: 0,
    targets: [{
      name: "xprsn_smile",
      type: "morph",
      slot: "face",
      start: 0,
      end: 1,
      min: 0,
      max: 1
    }, {
      name: "xprsn_smile",
      type: "morph",
      slot: "eyebrows",
      start: 0,
      end: 1,
      min: 0,
      max: 1
    }, {
      name: "xprsn_smile",
      type: "morph",
      slot: "beard",
      start: 0,
      end: 1,
      min: 0,
      max: 1
    }]
  }, t.xprsn_cocky = {
    val: 0,
    targets: [{
      name: "xprsn_cocky",
      type: "morph",
      slot: "face",
      start: 0,
      end: 1,
      min: 0,
      max: 1
    }, {
      name: "xprsn_cocky",
      type: "morph",
      slot: "eyebrows",
      start: 0,
      end: 1,
      min: 0,
      max: 1
    }, {
      name: "xprsn_cocky",
      type: "morph",
      slot: "beard",
      start: 0,
      end: 1,
      min: 0,
      max: 1
    }]
  }, t.xprsn_snarl = {
    val: 0,
    targets: [{
      name: "xprsn_snarl",
      type: "morph",
      slot: "face",
      start: 0,
      end: 1,
      min: 0,
      max: 1
    }, {
      name: "xprsn_snarl",
      type: "morph",
      slot: "eyebrows",
      start: 0,
      end: 1,
      min: 0,
      max: 1
    }, {
      name: "xprsn_snarl",
      type: "morph",
      slot: "beard",
      start: 0,
      end: 1,
      min: 0,
      max: 1
    }]
  }, t.xprsn_confused = {
    val: 0,
    targets: [{
      name: "xprsn_confused",
      type: "morph",
      slot: "face",
      start: 0,
      end: 1,
      min: 0,
      max: 1
    }, {
      name: "xprsn_confused",
      type: "morph",
      slot: "eyebrows",
      start: 0,
      end: 1,
      min: 0,
      max: 1
    }, {
      name: "xprsn_confused",
      type: "morph",
      slot: "beard",
      start: 0,
      end: 1,
      min: 0,
      max: 1
    }]
  }, a.default = {
    sliders: t
  }
}, function (e, a) {
  "use strict";

  function t(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[a] = t, e
  }

  function r() {
    var e = c.parts("Handheld", "itemR", {}, !1),
      a = c.parts("Handheld", "itemR", {}, !0),
      r = o(),
      d = CK.activeCharacter.characterData,
      m = d.mirroredPose ? [a.options, e.options] : [e.options, a.options],
      u = "mount" in d.parts && "CLEAR" != CK.Options.getPart(d.parts.mount).name,
      p = [],
      h = function (a) {
        var o = e.options[a].originalData,
          d = m[0][a],
          h = m[1][a],
          f = i(o);
        if (r && (d.onClick = function () {
            var e;
            CK.change({
              parts: (e = {}, t(e, d.originalData.slot, d.originalData.id), t(e, h.originalData.slot, void 0), e),
              pose: l()
            }, void 0, !1)
          }, h.onClick = function () {
            var e;
            CK.change({
              parts: (e = {}, t(e, h.originalData.slot, h.originalData.id), t(e, d.originalData.slot, void 0), e),
              pose: l()
            }, void 0, !1)
          }), void 0 === f) p.push(d, new c.MenuOption({
          thumb: "/static/img/twoHandedBlank_icon.png",
          thumbSize: [30, 30]
        }), h);
        else {
          var g = f && (d.selected || h.selected) && (void 0 === CK.activeCharacter.characterData.parts.itemR || void 0 === CK.activeCharacter.characterData.parts.itemL);
          g && (d.selected = !1, h.selected = !1);
          var b = u ? void 0 : g ? function () {
              s()
            } : function () {
              n(o)
            },
            y = new c.MenuOption({
              thumb: "/static/img/twoHanded_icon.png",
              label: u ? "Not available while mounted. " : h.label + " with Two Handed Pose",
              description: u ? "Two handed not available while on mounted. " + h.description : h.description,
              onClick: b,
              selected: g,
              thumbSize: [30, 30],
              grayedOut: u
            });
          p.push(d, y, h)
        }
      };
    for (var f in e.options) h(f);
    return {
      label: "Handheld",
      type: "parts",
      options: p,
      columns: 3
    }
  }

  function o() {
    var e = CK.activeCharacter.characterData.pose;
    for (var a in d)
      for (var t in d[a])
        if (d[a][t] == e) return !0;
    return !1
  }

  function n(e) {
    var a = CK.activeCharacter.characterData.pose;
    m = a;
    for (var t in e.keywords)
      if (t in d) {
        var r = d[t],
          o = !1;
        for (var n in r) r[n] == a && (o = !0);
        o || (a = r[0]);
        break
      }
    CK.change({
      parts: {
        itemR: e.id,
        itemL: void 0
      },
      pose: a
    }, void 0, !1)
  }

  function s() {
    CK.change({
      pose: l(),
      parts: {
        itemR: void 0,
        itemL: void 0
      }
    }, void 0, !1)
  }

  function i(e) {
    var a = void 0;
    for (var t in e.keywords)
      if (t in d) {
        var r = d[t];
        for (var o in r)
          if (r[o] == CK.activeCharacter.characterData.pose) return !0;
        a = !1
      }
    return a
  }

  function l() {
    return void 0 === m || m > 24 ? 17 : m
  }
  Object.defineProperty(a, "__esModule", {
    value: !0
  }), a.default = r;
  var c = CKUI.Hooks,
    d = {
      swordD: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
      staffD: [30, 31, 32, 33, 34, 35],
      guitarD: [52, 53, 54],
      bow: [49, 50, 51],
      rifleD: [55, 59]
    },
    m = void 0
}]);
//# sourceMappingURL=maps/heroforge.js.map
