!function() {
    "use strict";
    var i, n = function() {
        return (n = Object.assign || function(e) {
            for (var n, t = 1, o = arguments.length; t < o; t++)
                for (var i in n = arguments[t])
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            return e
        }
        ).apply(this, arguments)
    };
    function a(e, r, l, s) {
        return new (l = l || Promise)(function(t, n) {
            function o(e) {
                try {
                    a(s.next(e))
                } catch (e) {
                    n(e)
                }
            }
            function i(e) {
                try {
                    a(s.throw(e))
                } catch (e) {
                    n(e)
                }
            }
            function a(e) {
                var n;
                e.done ? t(e.value) : ((n = e.value)instanceof l ? n : new l(function(e) {
                    e(n)
                }
                )).then(o, i)
            }
            a((s = s.apply(e, r || [])).next())
        }
        )
    }
    function r(t, o) {
        var i, a, r, l = {
            label: 0,
            sent: function() {
                if (1 & r[0])
                    throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        }, e = {
            next: n(0),
            throw: n(1),
            return: n(2)
        };
        return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
            return this
        }
        ),
        e;
        function n(n) {
            return function(e) {
                return function(n) {
                    if (i)
                        throw new TypeError("Generator is already executing.");
                    for (; l; )
                        try {
                            if (i = 1,
                            a && (r = 2 & n[0] ? a.return : n[0] ? a.throw || ((r = a.return) && r.call(a),
                            0) : a.next) && !(r = r.call(a, n[1])).done)
                                return r;
                            switch (a = 0,
                            r && (n = [2 & n[0], r.value]),
                            n[0]) {
                            case 0:
                            case 1:
                                r = n;
                                break;
                            case 4:
                                return l.label++,
                                {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                l.label++,
                                a = n[1],
                                n = [0];
                                continue;
                            case 7:
                                n = l.ops.pop(),
                                l.trys.pop();
                                continue;
                            default:
                                if (!(r = 0 < (r = l.trys).length && r[r.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    l = 0;
                                    continue
                                }
                                if (3 === n[0] && (!r || n[1] > r[0] && n[1] < r[3])) {
                                    l.label = n[1];
                                    break
                                }
                                if (6 === n[0] && l.label < r[1]) {
                                    l.label = r[1],
                                    r = n;
                                    break
                                }
                                if (r && l.label < r[2]) {
                                    l.label = r[2],
                                    l.ops.push(n);
                                    break
                                }
                                r[2] && l.ops.pop(),
                                l.trys.pop();
                                continue
                            }
                            n = o.call(t, l)
                        } catch (e) {
                            n = [6, e],
                            a = 0
                        } finally {
                            i = r = 0
                        }
                    if (5 & n[0])
                        throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }([n, e])
            }
        }
    }
    function l(e) {
        i = n({
            primaryColor: "#FFFFFF",
            backgroundColor: "#000000",
            fontFamily: "Teko",
            preview: !1,
            metricsEnabled: !1,
            metricsUrl: "https://blmtech-prod.drft.workers.dev"
        }, e)
    }
    function o(e, n) {
        for (var t = 0; t < n.length; t++) {
            var o = n[t];
            o.enumerable = o.enumerable || !1,
            o.configurable = !0,
            "value"in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
    }
    function x(e) {
        return function(e) {
            if (Array.isArray(e))
                return s(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }(e) || function(e, n) {
            if (!e)
                return;
            if ("string" == typeof e)
                return s(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t)
                return Array.from(t);
            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return s(e, n)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function s(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, o = new Array(n); t < n; t++)
            o[t] = e[t];
        return o
    }
    var c, d, u, t = (c = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'],
    d = function() {
        function E(e) {
            var n = e.targetModal
              , t = e.triggers
              , o = void 0 === t ? [] : t
              , i = e.onShow
              , a = void 0 === i ? function() {}
            : i
              , r = e.onClose
              , l = void 0 === r ? function() {}
            : r
              , s = e.openTrigger
              , c = void 0 === s ? "data-micromodal-trigger" : s
              , d = e.closeTrigger
              , u = void 0 === d ? "data-micromodal-close" : d
              , m = e.openClass
              , f = void 0 === m ? "is-open" : m
              , p = e.disableScroll
              , h = void 0 !== p && p
              , v = e.disableFocus
              , g = void 0 !== v && v
              , b = e.awaitCloseAnimation
              , y = void 0 !== b && b
              , w = e.awaitOpenAnimation
              , _ = void 0 !== w && w
              , k = e.debugMode
              , C = void 0 !== k && k;
            !function(e, n) {
                if (!(e instanceof n))
                    throw new TypeError("Cannot call a class as a function")
            }(this, E),
            this.modal = document.getElementById(n),
            this.config = {
                debugMode: C,
                disableScroll: h,
                openTrigger: c,
                closeTrigger: u,
                openClass: f,
                onShow: a,
                onClose: l,
                awaitCloseAnimation: y,
                awaitOpenAnimation: _,
                disableFocus: g
            },
            0 < o.length && this.registerTriggers.apply(this, x(o)),
            this.onClick = this.onClick.bind(this),
            this.onKeydown = this.onKeydown.bind(this)
        }
        var e, n, t;
        return e = E,
        (n = [{
            key: "registerTriggers",
            value: function() {
                for (var n = this, e = arguments.length, t = new Array(e), o = 0; o < e; o++)
                    t[o] = arguments[o];
                t.filter(Boolean).forEach(function(e) {
                    e.addEventListener("click", function(e) {
                        return n.showModal(e)
                    })
                })
            }
        }, {
            key: "showModal",
            value: function(e) {
                var n = this
                  , t = 0 < arguments.length && void 0 !== e ? e : null;
                this.activeElement = document.activeElement,
                this.modal.setAttribute("aria-hidden", "false"),
                this.modal.classList.add(this.config.openClass),
                this.scrollBehaviour("disable"),
                this.addEventListeners(),
                this.config.awaitOpenAnimation ? this.modal.addEventListener("animationend", function e() {
                    n.modal.removeEventListener("animationend", e, !1),
                    n.setFocusToFirstNode()
                }, !1) : this.setFocusToFirstNode(),
                this.config.onShow(this.modal, this.activeElement, t)
            }
        }, {
            key: "closeModal",
            value: function(e) {
                var n, t = 0 < arguments.length && void 0 !== e ? e : null, o = this.modal;
                this.modal.setAttribute("aria-hidden", "true"),
                this.removeEventListeners(),
                this.scrollBehaviour("enable"),
                this.activeElement && this.activeElement.focus && this.activeElement.focus(),
                this.config.onClose(this.modal, this.activeElement, t),
                this.config.awaitCloseAnimation ? (n = this.config.openClass,
                this.modal.addEventListener("animationend", function e() {
                    o.classList.remove(n),
                    o.removeEventListener("animationend", e, !1)
                }, !1)) : o.classList.remove(this.config.openClass)
            }
        }, {
            key: "closeModalById",
            value: function(e) {
                this.modal = document.getElementById(e),
                this.modal && this.closeModal()
            }
        }, {
            key: "scrollBehaviour",
            value: function(e) {
                if (this.config.disableScroll) {
                    var n = document.querySelector("body");
                    switch (e) {
                    case "enable":
                        Object.assign(n.style, {
                            overflow: ""
                        });
                        break;
                    case "disable":
                        Object.assign(n.style, {
                            overflow: "hidden"
                        })
                    }
                }
            }
        }, {
            key: "addEventListeners",
            value: function() {
                this.modal.addEventListener("touchstart", this.onClick),
                this.modal.addEventListener("click", this.onClick),
                document.addEventListener("keydown", this.onKeydown)
            }
        }, {
            key: "removeEventListeners",
            value: function() {
                this.modal.removeEventListener("touchstart", this.onClick),
                this.modal.removeEventListener("click", this.onClick),
                document.removeEventListener("keydown", this.onKeydown)
            }
        }, {
            key: "onClick",
            value: function(e) {
                e.target.hasAttribute(this.config.closeTrigger) && this.closeModal(e)
            }
        }, {
            key: "onKeydown",
            value: function(e) {
                27 === e.keyCode && this.closeModal(e),
                9 === e.keyCode && this.retainFocus(e)
            }
        }, {
            key: "getFocusableNodes",
            value: function() {
                var e = this.modal.querySelectorAll(c);
                return Array.apply(void 0, x(e))
            }
        }, {
            key: "setFocusToFirstNode",
            value: function() {
                var e, n, t = this;
                this.config.disableFocus || 0 !== (e = this.getFocusableNodes()).length && (0 < (n = e.filter(function(e) {
                    return !e.hasAttribute(t.config.closeTrigger)
                })).length && n[0].focus(),
                0 === n.length && e[0].focus())
            }
        }, {
            key: "retainFocus",
            value: function(e) {
                var n, t = this.getFocusableNodes();
                0 !== t.length && (t = t.filter(function(e) {
                    return null !== e.offsetParent
                }),
                this.modal.contains(document.activeElement) ? (n = t.indexOf(document.activeElement),
                e.shiftKey && 0 === n && (t[t.length - 1].focus(),
                e.preventDefault()),
                !e.shiftKey && 0 < t.length && n === t.length - 1 && (t[0].focus(),
                e.preventDefault())) : t[0].focus())
            }
        }]) && o(e.prototype, n),
        t && o(e, t),
        E
    }(),
    u = null,
    {
        init: function(e) {
            var n, t, o, i = Object.assign({}, {
                openTrigger: "data-micromodal-trigger"
            }, e), a = x(document.querySelectorAll("[".concat(i.openTrigger, "]"))), r = (n = a,
            t = i.openTrigger,
            o = [],
            n.forEach(function(e) {
                var n = e.attributes[t].value;
                void 0 === o[n] && (o[n] = []),
                o[n].push(e)
            }),
            o);
            if (!0 !== i.debugMode || !1 !== f(a, r))
                for (var l in r) {
                    var s = r[l];
                    i.targetModal = l,
                    i.triggers = x(s),
                    u = new d(i)
                }
        },
        show: function(e, n) {
            var t = n || {};
            t.targetModal = e,
            !0 === t.debugMode && !1 === m(e) || (u && u.removeEventListeners(),
            (u = new d(t)).showModal())
        },
        close: function(e) {
            e ? u.closeModalById(e) : u.closeModal()
        }
    });
    function m(e) {
        if (!document.getElementById(e))
            return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."),
            console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(e, '"></div>')),
            !1
    }
    function f(e, n) {
        if (!function(e) {
            if (e.length <= 0)
                console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."),
                console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>')
        }(e),
        !n)
            return !0;
        for (var t in n)
            m(t);
        return !0
    }
    window.MicroModal = t;
    var p = '<div id="blm-modal" class="modal micromodal-slide" aria-hidden="true">\n    <div class="modal__overlay" tabindex="-1" data-micromodal-close>\n      <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">\n        <div class="modal__header">\n          <div class="modal__title__black">\n            <span>B</span>\n            <span>L</span>\n            <span>A</span>\n            <span>C</span>\n            <span>K</span>\n          </div>\n          <div class="modal__title__lives">\n            <span>L</span>\n            <span>I</span>\n            <span>V</span>\n            <span>E</span>\n            <span>S</span>\n          </div>\n          <div class="modal__title__matter">\n            <span>M</span>\n            <span>A</span>\n            <span>T</span>\n            <span>T</span>\n            <span>E</span>\n            <span>R</span>\n          </div>\n        </div>\n        <div class="modal__content" data-micromodal-close aria-label="Close this dialog window">\n            Continue to {{name}}\n        </div>\n      </div>\n    </div>\n  </div>';
    function h(e) {
        return document.createRange().createContextualFragment((n = e,
        p.replace("{{name}}", n.name)));
        var n
    }
    var v = "blm-modal"
      , g = '\n    #blm-modal {\n      display: none;\n    }\n    #blm-modal.is-open {\n      display: block;\n    }\n    #blm-modal {\n      position: absolute;\n      z-index: 2147483638;\n      top: 0;\n      right: 0;\n      left: 0;\n      bottom: 0;\n      font-family: \'{{fontFamily}}\', sans-serif;\n      color: {{primaryColor}};\n      font-weight: bold;\n      overflow: hidden;\n    }\n    #blm-modal > .modal__overlay {\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: {{backgroundColor}};\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    #blm-modal > .modal__overlay .modal__container .modal__header .modal__title__black {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      font-weight: bold;\n      font-size: 104px;\n      line-height: 1;\n    }\n     #blm-modal > .modal__overlay .modal__container .modal__header .modal__title__lives {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      font-weight: 600;\n      font-size: 140px;\n      line-height: 201px;\n    }\n     #blm-modal > .modal__overlay .modal__container .modal__header .modal__title__matter {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      font-weight: 600;\n      font-size: 90px;\n      line-height: 1;\n    }\n    #blm-modal > .modal__close {\n      background: transparent;\n      border: 0;\n    }\n    #blm-modal > .modal__header #blm-modal.modal__close:before { content: "\\2715"; }\n    #blm-modal > .modal__overlay .modal__container .modal__content {\n      margin-top: 3rem;\n      margin-bottom: 2rem;\n      min-width: 362px;\n      height: 70px;\n      border: 1px solid #FFFFFF;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: #fff;\n      font-size: 24px;\n      padding-left: 5px;\n      padding-right: 5px;\n      cursor: pointer;\n    }\n    @keyframes mmfadeIn {\n    from { opacity: 0; }\n      to { opacity: 1; }\n    }  \n    @keyframes mmfadeOut {\n        from { opacity: 1; }\n          to { opacity: 0; }\n    }\n    #blm-modal[aria-hidden="false"] .modal__overlay {\n      animation: mmfadeIn 1s cubic-bezier(0.0, 0.0, 0.2, 1);\n    }       \n    #blm-modal[aria-hidden="true"] .modal__overlay {\n      animation: mmfadeOut 1s cubic-bezier(0.0, 0.0, 0.2, 1);\n    }\n';
    function b(e) {
        var n = document.createElement("style");
        n.setAttribute("type", "text/css");
        var t, o = (t = e,
        g.replace("{{fontFamily}}", t.fontFamily).replace("{{backgroundColor}}", t.backgroundColor).replace("{{primaryColor}}", t.primaryColor));
        return n.appendChild(document.createTextNode(o)),
        n
    }
    var y = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function e(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    var w, _, k = e((function(e) {
        var o = y && y.__assign || function() {
            return (o = Object.assign || function(e) {
                for (var n, t = 1, o = arguments.length; t < o; t++)
                    for (var i in n = arguments[t])
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        function a(e, n) {
            if (!n)
                return "";
            var t = "; " + e;
            return !0 === n ? t : t + "=" + n
        }
        function i(e, n, t) {
            return encodeURIComponent(e).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/\(/g, "%28").replace(/\)/g, "%29") + "=" + encodeURIComponent(n).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) + ("number" == typeof (o = t).expires && ((i = new Date).setMilliseconds(i.getMilliseconds() + 864e5 * o.expires),
            o.expires = i),
            a("Expires", o.expires ? o.expires.toUTCString() : "") + a("Domain", o.domain) + a("Path", o.path) + a("Secure", o.secure) + a("SameSite", o.sameSite));
            var o, i
        }
        function n(e) {
            for (var n = {}, t = e ? e.split("; ") : [], o = /(%[\dA-F]{2})+/gi, i = 0; i < t.length; i++) {
                var a = t[i].split("=")
                  , r = a.slice(1).join("=");
                '"' === r.charAt(0) && (r = r.slice(1, -1));
                try {
                    n[a[0].replace(o, decodeURIComponent)] = r.replace(o, decodeURIComponent)
                } catch (e) {}
            }
            return n
        }
        function t() {
            return n(document.cookie)
        }
        function r(e, n, t) {
            document.cookie = i(e, n, o({
                path: "/"
            }, t))
        }
        e.__esModule = !0,
        e.encode = i,
        e.parse = n,
        e.getAll = t,
        e.get = function(e) {
            return t()[e]
        }
        ,
        e.set = r,
        e.remove = function(e, n) {
            r(e, "", o(o({}, n), {
                expires: -1
            }))
        }
    }((_ = {
        path: w,
        exports: {},
        require: function(e, n) {
            return function() {
                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
            }(null == n && _.path)
        }
    },
    _.exports)),
    _.exports));
    var C = "BLM_MODAL_SHOWN";
    function E() {
        var e = h(i)
          , n = b(i);
        document.head.appendChild(n),
        document.body.appendChild(e),
        i.preview ? document.getElementById(v).classList.add("is-open") : (t.init(),
        t.show(v),
        k.set(C, "true"))
    }
