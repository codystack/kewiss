! function() {
    "use strict";
    
    var e, t;
    ! function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t()
    }(void 0, (function() {
        const e = new Map,
            t = {
                set(t, n, i) {
                    e.has(t) || e.set(t, new Map);
                    const s = e.get(t);
                    s.has(n) || 0 === s.size ? s.set(n, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
                },
                get: (t, n) => e.has(t) && e.get(t).get(n) || null,
                remove(t, n) {
                    if (!e.has(t)) return;
                    const i = e.get(t);
                    i.delete(n), 0 === i.size && e.delete(t)
                }
            },
            n = "transitionend",
            i = e => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, ((e, t) => `#${CSS.escape(t)}`))), e),
            s = e => {
                e.dispatchEvent(new Event(n))
            },
            o = e => !(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
            r = e => o(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? document.querySelector(i(e)) : null,
            a = e => {
                if (!o(e) || 0 === e.getClientRects().length) return !1;
                const t = "visible" === getComputedStyle(e).getPropertyValue("visibility"),
                    n = e.closest("details:not([open])");
                if (!n) return t;
                if (n !== e) {
                    const t = e.closest("summary");
                    if (t && t.parentNode !== n) return !1;
                    if (null === t) return !1
                }
                return t
            },
            l = e => !e || e.nodeType !== Node.ELEMENT_NODE || (!!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled"))),
            c = e => {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof e.getRootNode) {
                    const t = e.getRootNode();
                    return t instanceof ShadowRoot ? t : null
                }
                return e instanceof ShadowRoot ? e : e.parentNode ? c(e.parentNode) : null
            },
            d = () => {},
            u = e => {
                e.offsetHeight
            },
            h = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
            f = [],
            p = () => "rtl" === document.documentElement.dir,
            m = e => {
                var t;
                t = () => {
                    const t = h();
                    if (t) {
                        const n = e.NAME,
                            i = t.fn[n];
                        t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = i, e.jQueryInterface)
                    }
                }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", (() => {
                    for (const e of f) e()
                })), f.push(t)) : t()
            },
            g = (e, t = [], n = e) => "function" == typeof e ? e(...t) : n,
            _ = (e, t, i = !0) => {
                if (!i) return void g(e);
                const o = (e => {
                    if (!e) return 0;
                    let {
                        transitionDuration: t,
                        transitionDelay: n
                    } = window.getComputedStyle(e);
                    const i = Number.parseFloat(t),
                        s = Number.parseFloat(n);
                    return i || s ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(n))) : 0
                })(t) + 5;
                let r = !1;
                const a = ({
                    target: i
                }) => {
                    i === t && (r = !0, t.removeEventListener(n, a), g(e))
                };
                t.addEventListener(n, a), setTimeout((() => {
                    r || s(t)
                }), o)
            },
            b = (e, t, n, i) => {
                const s = e.length;
                let o = e.indexOf(t);
                return -1 === o ? !n && i ? e[s - 1] : e[0] : (o += n ? 1 : -1, i && (o = (o + s) % s), e[Math.max(0, Math.min(o, s - 1))])
            },
            v = /[^.]*(?=\..*)\.|.*/,
            y = /\..*/,
            w = /::\d+$/,
            A = {};
        let E = 1;
        const S = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            },
            T = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

        function C(e, t) {
            return t && `${t}::${E++}` || e.uidEvent || E++
        }

        function O(e) {
            const t = C(e);
            return e.uidEvent = t, A[t] = A[t] || {}, A[t]
        }

        function x(e, t, n = null) {
            return Object.values(e).find((e => e.callable === t && e.delegationSelector === n))
        }

        function L(e, t, n) {
            const i = "string" == typeof t,
                s = i ? n : t || n;
            let o = M(e);
            return T.has(o) || (o = e), [i, s, o]
        }

        function k(e, t, n, i, s) {
            if ("string" != typeof t || !e) return;
            let [o, r, a] = L(t, n, i);
            if (t in S) {
                const e = e => function(t) {
                    if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t)
                };
                r = e(r)
            }
            const l = O(e),
                c = l[a] || (l[a] = {}),
                d = x(c, r, o ? n : null);
            if (d) return void(d.oneOff = d.oneOff && s);
            const u = C(r, t.replace(v, "")),
                h = o ? function(e, t, n) {
                    return function i(s) {
                        const o = e.querySelectorAll(t);
                        for (let {
                                target: r
                            } = s; r && r !== this; r = r.parentNode)
                            for (const a of o)
                                if (a === r) return N(s, {
                                    delegateTarget: r
                                }), i.oneOff && $.off(e, s.type, t, n), n.apply(r, [s])
                    }
                }(e, n, r) : function(e, t) {
                    return function n(i) {
                        return N(i, {
                            delegateTarget: e
                        }), n.oneOff && $.off(e, i.type, t), t.apply(e, [i])
                    }
                }(e, r);
            h.delegationSelector = o ? n : null, h.callable = r, h.oneOff = s, h.uidEvent = u, c[u] = h, e.addEventListener(a, h, o)
        }

        function D(e, t, n, i, s) {
            const o = x(t[n], i, s);
            o && (e.removeEventListener(n, o, Boolean(s)), delete t[n][o.uidEvent])
        }

        function I(e, t, n, i) {
            const s = t[n] || {};
            for (const [o, r] of Object.entries(s)) o.includes(i) && D(e, t, n, r.callable, r.delegationSelector)
        }

        function M(e) {
            return e = e.replace(y, ""), S[e] || e
        }
        const $ = {
            on(e, t, n, i) {
                k(e, t, n, i, !1)
            },
            one(e, t, n, i) {
                k(e, t, n, i, !0)
            },
            off(e, t, n, i) {
                if ("string" != typeof t || !e) return;
                const [s, o, r] = L(t, n, i), a = r !== t, l = O(e), c = l[r] || {}, d = t.startsWith(".");
                if (void 0 === o) {
                    if (d)
                        for (const n of Object.keys(l)) I(e, l, n, t.slice(1));
                    for (const [n, i] of Object.entries(c)) {
                        const s = n.replace(w, "");
                        a && !t.includes(s) || D(e, l, r, i.callable, i.delegationSelector)
                    }
                } else {
                    if (!Object.keys(c).length) return;
                    D(e, l, r, o, s ? n : null)
                }
            },
            trigger(e, t, n) {
                if ("string" != typeof t || !e) return null;
                const i = h();
                let s = null,
                    o = !0,
                    r = !0,
                    a = !1;
                t !== M(t) && i && (s = i.Event(t, n), i(e).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
                const l = N(new Event(t, {
                    bubbles: o,
                    cancelable: !0
                }), n);
                return a && l.preventDefault(), r && e.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l
            }
        };

        function N(e, t = {}) {
            for (const [n, i] of Object.entries(t)) try {
                e[n] = i
            } catch (t) {
                Object.defineProperty(e, n, {
                    configurable: !0,
                    get: () => i
                })
            }
            return e
        }

        function P(e) {
            if ("true" === e) return !0;
            if ("false" === e) return !1;
            if (e === Number(e).toString()) return Number(e);
            if ("" === e || "null" === e) return null;
            if ("string" != typeof e) return e;
            try {
                return JSON.parse(decodeURIComponent(e))
            } catch (t) {
                return e
            }
        }

        function j(e) {
            return e.replace(/[A-Z]/g, (e => `-${e.toLowerCase()}`))
        }
        const q = {
            setDataAttribute(e, t, n) {
                e.setAttribute(`data-bs-${j(t)}`, n)
            },
            removeDataAttribute(e, t) {
                e.removeAttribute(`data-bs-${j(t)}`)
            },
            getDataAttributes(e) {
                if (!e) return {};
                const t = {},
                    n = Object.keys(e.dataset).filter((e => e.startsWith("bs") && !e.startsWith("bsConfig")));
                for (const i of n) {
                    let n = i.replace(/^bs/, "");
                    n = n.charAt(0).toLowerCase() + n.slice(1, n.length), t[n] = P(e.dataset[i])
                }
                return t
            },
            getDataAttribute: (e, t) => P(e.getAttribute(`data-bs-${j(t)}`))
        };
        class F {
            static get Default() {
                return {}
            }
            static get DefaultType() {
                return {}
            }
            static get NAME() {
                throw new Error('You have to implement the static method "NAME", for each component!')
            }
            _getConfig(e) {
                return e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
            }
            _configAfterMerge(e) {
                return e
            }
            _mergeConfigObj(e, t) {
                const n = o(t) ? q.getDataAttribute(t, "config") : {};
                return { ...this.constructor.Default,
                    ..."object" == typeof n ? n : {},
                    ...o(t) ? q.getDataAttributes(t) : {},
                    ..."object" == typeof e ? e : {}
                }
            }
            _typeCheckConfig(e, t = this.constructor.DefaultType) {
                for (const [i, s] of Object.entries(t)) {
                    const t = e[i],
                        r = o(t) ? "element" : null == (n = t) ? `${n}` : Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(s).test(r)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${s}".`)
                }
                var n
            }
        }
        class H extends F {
            constructor(e, n) {
                super(), (e = r(e)) && (this._element = e, this._config = this._getConfig(n), t.set(this._element, this.constructor.DATA_KEY, this))
            }
            dispose() {
                t.remove(this._element, this.constructor.DATA_KEY), $.off(this._element, this.constructor.EVENT_KEY);
                for (const e of Object.getOwnPropertyNames(this)) this[e] = null
            }
            _queueCallback(e, t, n = !0) {
                _(e, t, n)
            }
            _getConfig(e) {
                return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
            }
            static getInstance(e) {
                return t.get(r(e), this.DATA_KEY)
            }
            static getOrCreateInstance(e, t = {}) {
                return this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
            }
            static get VERSION() {
                return "5.3.2"
            }
            static get DATA_KEY() {
                return `bs.${this.NAME}`
            }
            static get EVENT_KEY() {
                return `.${this.DATA_KEY}`
            }
            static eventName(e) {
                return `${e}${this.EVENT_KEY}`
            }
        }
        const z = e => {
                let t = e.getAttribute("data-bs-target");
                if (!t || "#" === t) {
                    let n = e.getAttribute("href");
                    if (!n || !n.includes("#") && !n.startsWith(".")) return null;
                    n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && "#" !== n ? i(n.trim()) : null
                }
                return t
            },
            B = {
                find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)),
                findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
                children: (e, t) => [].concat(...e.children).filter((e => e.matches(t))),
                parents(e, t) {
                    const n = [];
                    let i = e.parentNode.closest(t);
                    for (; i;) n.push(i), i = i.parentNode.closest(t);
                    return n
                },
                prev(e, t) {
                    let n = e.previousElementSibling;
                    for (; n;) {
                        if (n.matches(t)) return [n];
                        n = n.previousElementSibling
                    }
                    return []
                },
                next(e, t) {
                    let n = e.nextElementSibling;
                    for (; n;) {
                        if (n.matches(t)) return [n];
                        n = n.nextElementSibling
                    }
                    return []
                },
                focusableChildren(e) {
                    const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e => `${e}:not([tabindex^="-"])`)).join(",");
                    return this.find(t, e).filter((e => !l(e) && a(e)))
                },
                getSelectorFromElement(e) {
                    const t = z(e);
                    return t && B.findOne(t) ? t : null
                },
                getElementFromSelector(e) {
                    const t = z(e);
                    return t ? B.findOne(t) : null
                },
                getMultipleElementsFromSelector(e) {
                    const t = z(e);
                    return t ? B.find(t) : []
                }
            },
            R = (e, t = "hide") => {
                const n = `click.dismiss${e.EVENT_KEY}`,
                    i = e.NAME;
                $.on(document, n, `[data-bs-dismiss="${i}"]`, (function(n) {
                    if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), l(this)) return;
                    const s = B.getElementFromSelector(this) || this.closest(`.${i}`);
                    e.getOrCreateInstance(s)[t]()
                }))
            },
            W = ".bs.alert",
            V = `close${W}`,
            U = `closed${W}`;
        class Q extends H {
            static get NAME() {
                return "alert"
            }
            close() {
                if ($.trigger(this._element, V).defaultPrevented) return;
                this._element.classList.remove("show");
                const e = this._element.classList.contains("fade");
                this._queueCallback((() => this._destroyElement()), this._element, e)
            }
            _destroyElement() {
                this._element.remove(), $.trigger(this._element, U), this.dispose()
            }
            static jQueryInterface(e) {
                return this.each((function() {
                    const t = Q.getOrCreateInstance(this);
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                        t[e](this)
                    }
                }))
            }
        }
        R(Q, "close"), m(Q);
        const K = '[data-bs-toggle="button"]';
        class Y extends H {
            static get NAME() {
                return "button"
            }
            toggle() {
                this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
            }
            static jQueryInterface(e) {
                return this.each((function() {
                    const t = Y.getOrCreateInstance(this);
                    "toggle" === e && t[e]()
                }))
            }
        }
        $.on(document, "click.bs.button.data-api", K, (e => {
            e.preventDefault();
            const t = e.target.closest(K);
            Y.getOrCreateInstance(t).toggle()
        })), m(Y);
        const X = ".bs.swipe",
            J = `touchstart${X}`,
            Z = `touchmove${X}`,
            G = `touchend${X}`,
            ee = `pointerdown${X}`,
            te = `pointerup${X}`,
            ne = {
                endCallback: null,
                leftCallback: null,
                rightCallback: null
            },
            ie = {
                endCallback: "(function|null)",
                leftCallback: "(function|null)",
                rightCallback: "(function|null)"
            };
        class se extends F {
            constructor(e, t) {
                super(), this._element = e, e && se.isSupported() && (this._config = this._getConfig(t), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents())
            }
            static get Default() {
                return ne
            }
            static get DefaultType() {
                return ie
            }
            static get NAME() {
                return "swipe"
            }
            dispose() {
                $.off(this._element, X)
            }
            _start(e) {
                this._supportPointerEvents ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX) : this._deltaX = e.touches[0].clientX
            }
            _end(e) {
                this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback)
            }
            _move(e) {
                this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX
            }
            _handleSwipe() {
                const e = Math.abs(this._deltaX);
                if (e <= 40) return;
                const t = e / this._deltaX;
                this._deltaX = 0, t && g(t > 0 ? this._config.rightCallback : this._config.leftCallback)
            }
            _initEvents() {
                this._supportPointerEvents ? ($.on(this._element, ee, (e => this._start(e))), $.on(this._element, te, (e => this._end(e))), this._element.classList.add("pointer-event")) : ($.on(this._element, J, (e => this._start(e))), $.on(this._element, Z, (e => this._move(e))), $.on(this._element, G, (e => this._end(e))))
            }
            _eventIsPointerPenTouch(e) {
                return this._supportPointerEvents && ("pen" === e.pointerType || "touch" === e.pointerType)
            }
            static isSupported() {
                return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
            }
        }
        const oe = ".bs.carousel",
            re = ".data-api",
            ae = "next",
            le = "prev",
            ce = "left",
            de = "right",
            ue = `slide${oe}`,
            he = `slid${oe}`,
            fe = `keydown${oe}`,
            pe = `mouseenter${oe}`,
            me = `mouseleave${oe}`,
            ge = `dragstart${oe}`,
            _e = `load${oe}${re}`,
            be = `click${oe}${re}`,
            ve = "carousel",
            ye = "active",
            we = ".active",
            Ae = ".carousel-item",
            Ee = we + Ae,
            Se = {
                ArrowLeft: de,
                ArrowRight: ce
            },
            Te = {
                interval: 5e3,
                keyboard: !0,
                pause: "hover",
                ride: !1,
                touch: !0,
                wrap: !0
            },
            Ce = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                pause: "(string|boolean)",
                ride: "(boolean|string)",
                touch: "boolean",
                wrap: "boolean"
            };
        class Oe extends H {
            constructor(e, t) {
                super(e, t), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = B.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === ve && this.cycle()
            }
            static get Default() {
                return Te
            }
            static get DefaultType() {
                return Ce
            }
            static get NAME() {
                return "carousel"
            }
            next() {
                this._slide(ae)
            }
            nextWhenVisible() {
                !document.hidden && a(this._element) && this.next()
            }
            prev() {
                this._slide(le)
            }
            pause() {
                this._isSliding && s(this._element), this._clearInterval()
            }
            cycle() {
                this._clearInterval(), this._updateInterval(), this._interval = setInterval((() => this.nextWhenVisible()), this._config.interval)
            }
            _maybeEnableCycle() {
                this._config.ride && (this._isSliding ? $.one(this._element, he, (() => this.cycle())) : this.cycle())
            }
            to(e) {
                const t = this._getItems();
                if (e > t.length - 1 || e < 0) return;
                if (this._isSliding) return void $.one(this._element, he, (() => this.to(e)));
                const n = this._getItemIndex(this._getActive());
                if (n === e) return;
                const i = e > n ? ae : le;
                this._slide(i, t[e])
            }
            dispose() {
                this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
            }
            _configAfterMerge(e) {
                return e.defaultInterval = e.interval, e
            }
            _addEventListeners() {
                this._config.keyboard && $.on(this._element, fe, (e => this._keydown(e))), "hover" === this._config.pause && ($.on(this._element, pe, (() => this.pause())), $.on(this._element, me, (() => this._maybeEnableCycle()))), this._config.touch && se.isSupported() && this._addTouchEventListeners()
            }
            _addTouchEventListeners() {
                for (const e of B.find(".carousel-item img", this._element)) $.on(e, ge, (e => e.preventDefault()));
                const e = {
                    leftCallback: () => this._slide(this._directionToOrder(ce)),
                    rightCallback: () => this._slide(this._directionToOrder(de)),
                    endCallback: () => {
                        "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((() => this._maybeEnableCycle()), 500 + this._config.interval))
                    }
                };
                this._swipeHelper = new se(this._element, e)
            }
            _keydown(e) {
                if (/input|textarea/i.test(e.target.tagName)) return;
                const t = Se[e.key];
                t && (e.preventDefault(), this._slide(this._directionToOrder(t)))
            }
            _getItemIndex(e) {
                return this._getItems().indexOf(e)
            }
            _setActiveIndicatorElement(e) {
                if (!this._indicatorsElement) return;
                const t = B.findOne(we, this._indicatorsElement);
                t.classList.remove(ye), t.removeAttribute("aria-current");
                const n = B.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
                n && (n.classList.add(ye), n.setAttribute("aria-current", "true"))
            }
            _updateInterval() {
                const e = this._activeElement || this._getActive();
                if (!e) return;
                const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
                this._config.interval = t || this._config.defaultInterval
            }
            _slide(e, t = null) {
                if (this._isSliding) return;
                const n = this._getActive(),
                    i = e === ae,
                    s = t || b(this._getItems(), n, i, this._config.wrap);
                if (s === n) return;
                const o = this._getItemIndex(s),
                    r = t => $.trigger(this._element, t, {
                        relatedTarget: s,
                        direction: this._orderToDirection(e),
                        from: this._getItemIndex(n),
                        to: o
                    });
                if (r(ue).defaultPrevented) return;
                if (!n || !s) return;
                const a = Boolean(this._interval);
                this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
                const l = i ? "carousel-item-start" : "carousel-item-end",
                    c = i ? "carousel-item-next" : "carousel-item-prev";
                s.classList.add(c), u(s), n.classList.add(l), s.classList.add(l);
                this._queueCallback((() => {
                    s.classList.remove(l, c), s.classList.add(ye), n.classList.remove(ye, c, l), this._isSliding = !1, r(he)
                }), n, this._isAnimated()), a && this.cycle()
            }
            _isAnimated() {
                return this._element.classList.contains("slide")
            }
            _getActive() {
                return B.findOne(Ee, this._element)
            }
            _getItems() {
                return B.find(Ae, this._element)
            }
            _clearInterval() {
                this._interval && (clearInterval(this._interval), this._interval = null)
            }
            _directionToOrder(e) {
                return p() ? e === ce ? le : ae : e === ce ? ae : le
            }
            _orderToDirection(e) {
                return p() ? e === le ? ce : de : e === le ? de : ce
            }
            static jQueryInterface(e) {
                return this.each((function() {
                    const t = Oe.getOrCreateInstance(this, e);
                    if ("number" != typeof e) {
                        if ("string" == typeof e) {
                            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                            t[e]()
                        }
                    } else t.to(e)
                }))
            }
        }
        $.on(document, be, "[data-bs-slide], [data-bs-slide-to]", (function(e) {
            const t = B.getElementFromSelector(this);
            if (!t || !t.classList.contains(ve)) return;
            e.preventDefault();
            const n = Oe.getOrCreateInstance(t),
                i = this.getAttribute("data-bs-slide-to");
            return i ? (n.to(i), void n._maybeEnableCycle()) : "next" === q.getDataAttribute(this, "slide") ? (n.next(), void n._maybeEnableCycle()) : (n.prev(), void n._maybeEnableCycle())
        })), $.on(window, _e, (() => {
            const e = B.find('[data-bs-ride="carousel"]');
            for (const t of e) Oe.getOrCreateInstance(t)
        })), m(Oe);
        const xe = ".bs.collapse",
            Le = `show${xe}`,
            ke = `shown${xe}`,
            De = `hide${xe}`,
            Ie = `hidden${xe}`,
            Me = `click${xe}.data-api`,
            $e = "show",
            Ne = "collapse",
            Pe = "collapsing",
            je = `:scope .${Ne} .${Ne}`,
            qe = '[data-bs-toggle="collapse"]',
            Fe = {
                parent: null,
                toggle: !0
            },
            He = {
                parent: "(null|element)",
                toggle: "boolean"
            };
        class ze extends H {
            constructor(e, t) {
                super(e, t), this._isTransitioning = !1, this._triggerArray = [];
                const n = B.find(qe);
                for (const e of n) {
                    const t = B.getSelectorFromElement(e),
                        n = B.find(t).filter((e => e === this._element));
                    null !== t && n.length && this._triggerArray.push(e)
                }
                this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
            }
            static get Default() {
                return Fe
            }
            static get DefaultType() {
                return He
            }
            static get NAME() {
                return "collapse"
            }
            toggle() {
                this._isShown() ? this.hide() : this.show()
            }
            show() {
                if (this._isTransitioning || this._isShown()) return;
                let e = [];
                if (this._config.parent && (e = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((e => e !== this._element)).map((e => ze.getOrCreateInstance(e, {
                        toggle: !1
                    })))), e.length && e[0]._isTransitioning) return;
                if ($.trigger(this._element, Le).defaultPrevented) return;
                for (const t of e) t.hide();
                const t = this._getDimension();
                this._element.classList.remove(Ne), this._element.classList.add(Pe), this._element.style[t] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
                const n = `scroll${t[0].toUpperCase()+t.slice(1)}`;
                this._queueCallback((() => {
                    this._isTransitioning = !1, this._element.classList.remove(Pe), this._element.classList.add(Ne, $e), this._element.style[t] = "", $.trigger(this._element, ke)
                }), this._element, !0), this._element.style[t] = `${this._element[n]}px`
            }
            hide() {
                if (this._isTransitioning || !this._isShown()) return;
                if ($.trigger(this._element, De).defaultPrevented) return;
                const e = this._getDimension();
                this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, u(this._element), this._element.classList.add(Pe), this._element.classList.remove(Ne, $e);
                for (const e of this._triggerArray) {
                    const t = B.getElementFromSelector(e);
                    t && !this._isShown(t) && this._addAriaAndCollapsedClass([e], !1)
                }
                this._isTransitioning = !0;
                this._element.style[e] = "", this._queueCallback((() => {
                    this._isTransitioning = !1, this._element.classList.remove(Pe), this._element.classList.add(Ne), $.trigger(this._element, Ie)
                }), this._element, !0)
            }
            _isShown(e = this._element) {
                return e.classList.contains($e)
            }
            _configAfterMerge(e) {
                return e.toggle = Boolean(e.toggle), e.parent = r(e.parent), e
            }
            _getDimension() {
                return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
            }
            _initializeChildren() {
                if (!this._config.parent) return;
                const e = this._getFirstLevelChildren(qe);
                for (const t of e) {
                    const e = B.getElementFromSelector(t);
                    e && this._addAriaAndCollapsedClass([t], this._isShown(e))
                }
            }
            _getFirstLevelChildren(e) {
                const t = B.find(je, this._config.parent);
                return B.find(e, this._config.parent).filter((e => !t.includes(e)))
            }
            _addAriaAndCollapsedClass(e, t) {
                if (e.length)
                    for (const n of e) n.classList.toggle("collapsed", !t), n.setAttribute("aria-expanded", t)
            }
            static jQueryInterface(e) {
                const t = {};
                return "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1), this.each((function() {
                    const n = ze.getOrCreateInstance(this, t);
                    if ("string" == typeof e) {
                        if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                        n[e]()
                    }
                }))
            }
        }
        $.on(document, Me, qe, (function(e) {
            ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
            for (const e of B.getMultipleElementsFromSelector(this)) ze.getOrCreateInstance(e, {
                toggle: !1
            }).toggle()
        })), m(ze);
        var Be = "top",
            Re = "bottom",
            We = "right",
            Ve = "left",
            Ue = "auto",
            Qe = [Be, Re, We, Ve],
            Ke = "start",
            Ye = "end",
            Xe = "clippingParents",
            Je = "viewport",
            Ze = "popper",
            Ge = "reference",
            et = Qe.reduce((function(e, t) {
                return e.concat([t + "-" + Ke, t + "-" + Ye])
            }), []),
            tt = [].concat(Qe, [Ue]).reduce((function(e, t) {
                return e.concat([t, t + "-" + Ke, t + "-" + Ye])
            }), []),
            nt = "beforeRead",
            it = "read",
            st = "afterRead",
            ot = "beforeMain",
            rt = "main",
            at = "afterMain",
            lt = "beforeWrite",
            ct = "write",
            dt = "afterWrite",
            ut = [nt, it, st, ot, rt, at, lt, ct, dt];

        function ht(e) {
            return e ? (e.nodeName || "").toLowerCase() : null
        }

        function ft(e) {
            if (null == e) return window;
            if ("[object Window]" !== e.toString()) {
                var t = e.ownerDocument;
                return t && t.defaultView || window
            }
            return e
        }

        function pt(e) {
            return e instanceof ft(e).Element || e instanceof Element
        }

        function mt(e) {
            return e instanceof ft(e).HTMLElement || e instanceof HTMLElement
        }

        function gt(e) {
            return "undefined" != typeof ShadowRoot && (e instanceof ft(e).ShadowRoot || e instanceof ShadowRoot)
        }
        const _t = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function(e) {
                var t = e.state;
                Object.keys(t.elements).forEach((function(e) {
                    var n = t.styles[e] || {},
                        i = t.attributes[e] || {},
                        s = t.elements[e];
                    mt(s) && ht(s) && (Object.assign(s.style, n), Object.keys(i).forEach((function(e) {
                        var t = i[e];
                        !1 === t ? s.removeAttribute(e) : s.setAttribute(e, !0 === t ? "" : t)
                    })))
                }))
            },
            effect: function(e) {
                var t = e.state,
                    n = {
                        popper: {
                            position: t.options.strategy,
                            left: "0",
                            top: "0",
                            margin: "0"
                        },
                        arrow: {
                            position: "absolute"
                        },
                        reference: {}
                    };
                return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                    function() {
                        Object.keys(t.elements).forEach((function(e) {
                            var i = t.elements[e],
                                s = t.attributes[e] || {},
                                o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                                    return e[t] = "", e
                                }), {});
                            mt(i) && ht(i) && (Object.assign(i.style, o), Object.keys(s).forEach((function(e) {
                                i.removeAttribute(e)
                            })))
                        }))
                    }
            },
            requires: ["computeStyles"]
        };

        function bt(e) {
            return e.split("-")[0]
        }
        var vt = Math.max,
            yt = Math.min,
            wt = Math.round;

        function At() {
            var e = navigator.userAgentData;
            return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function(e) {
                return e.brand + "/" + e.version
            })).join(" ") : navigator.userAgent
        }

        function Et() {
            return !/^((?!chrome|android).)*safari/i.test(At())
        }

        function St(e, t, n) {
            void 0 === t && (t = !1), void 0 === n && (n = !1);
            var i = e.getBoundingClientRect(),
                s = 1,
                o = 1;
            t && mt(e) && (s = e.offsetWidth > 0 && wt(i.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && wt(i.height) / e.offsetHeight || 1);
            var r = (pt(e) ? ft(e) : window).visualViewport,
                a = !Et() && n,
                l = (i.left + (a && r ? r.offsetLeft : 0)) / s,
                c = (i.top + (a && r ? r.offsetTop : 0)) / o,
                d = i.width / s,
                u = i.height / o;
            return {
                width: d,
                height: u,
                top: c,
                right: l + d,
                bottom: c + u,
                left: l,
                x: l,
                y: c
            }
        }

        function Tt(e) {
            var t = St(e),
                n = e.offsetWidth,
                i = e.offsetHeight;
            return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
                x: e.offsetLeft,
                y: e.offsetTop,
                width: n,
                height: i
            }
        }

        function Ct(e, t) {
            var n = t.getRootNode && t.getRootNode();
            if (e.contains(t)) return !0;
            if (n && gt(n)) {
                var i = t;
                do {
                    if (i && e.isSameNode(i)) return !0;
                    i = i.parentNode || i.host
                } while (i)
            }
            return !1
        }

        function Ot(e) {
            return ft(e).getComputedStyle(e)
        }

        function xt(e) {
            return ["table", "td", "th"].indexOf(ht(e)) >= 0
        }

        function Lt(e) {
            return ((pt(e) ? e.ownerDocument : e.document) || window.document).documentElement
        }

        function kt(e) {
            return "html" === ht(e) ? e : e.assignedSlot || e.parentNode || (gt(e) ? e.host : null) || Lt(e)
        }

        function Dt(e) {
            return mt(e) && "fixed" !== Ot(e).position ? e.offsetParent : null
        }

        function It(e) {
            for (var t = ft(e), n = Dt(e); n && xt(n) && "static" === Ot(n).position;) n = Dt(n);
            return n && ("html" === ht(n) || "body" === ht(n) && "static" === Ot(n).position) ? t : n || function(e) {
                var t = /firefox/i.test(At());
                if (/Trident/i.test(At()) && mt(e) && "fixed" === Ot(e).position) return null;
                var n = kt(e);
                for (gt(n) && (n = n.host); mt(n) && ["html", "body"].indexOf(ht(n)) < 0;) {
                    var i = Ot(n);
                    if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || t && "filter" === i.willChange || t && i.filter && "none" !== i.filter) return n;
                    n = n.parentNode
                }
                return null
            }(e) || t
        }

        function Mt(e) {
            return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
        }

        function $t(e, t, n) {
            return vt(e, yt(t, n))
        }

        function Nt(e) {
            return Object.assign({}, {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }, e)
        }

        function Pt(e, t) {
            return t.reduce((function(t, n) {
                return t[n] = e, t
            }), {})
        }
        const jt = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t, n = e.state,
                    i = e.name,
                    s = e.options,
                    o = n.elements.arrow,
                    r = n.modifiersData.popperOffsets,
                    a = bt(n.placement),
                    l = Mt(a),
                    c = [Ve, We].indexOf(a) >= 0 ? "height" : "width";
                if (o && r) {
                    var d = function(e, t) {
                            return Nt("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                                placement: t.placement
                            })) : e) ? e : Pt(e, Qe))
                        }(s.padding, n),
                        u = Tt(o),
                        h = "y" === l ? Be : Ve,
                        f = "y" === l ? Re : We,
                        p = n.rects.reference[c] + n.rects.reference[l] - r[l] - n.rects.popper[c],
                        m = r[l] - n.rects.reference[l],
                        g = It(o),
                        _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                        b = p / 2 - m / 2,
                        v = d[h],
                        y = _ - u[c] - d[f],
                        w = _ / 2 - u[c] / 2 + b,
                        A = $t(v, w, y),
                        E = l;
                    n.modifiersData[i] = ((t = {})[E] = A, t.centerOffset = A - w, t)
                }
            },
            effect: function(e) {
                var t = e.state,
                    n = e.options.element,
                    i = void 0 === n ? "[data-popper-arrow]" : n;
                null != i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && Ct(t.elements.popper, i) && (t.elements.arrow = i)
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        };

        function qt(e) {
            return e.split("-")[1]
        }
        var Ft = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };

        function Ht(e) {
            var t, n = e.popper,
                i = e.popperRect,
                s = e.placement,
                o = e.variation,
                r = e.offsets,
                a = e.position,
                l = e.gpuAcceleration,
                c = e.adaptive,
                d = e.roundOffsets,
                u = e.isFixed,
                h = r.x,
                f = void 0 === h ? 0 : h,
                p = r.y,
                m = void 0 === p ? 0 : p,
                g = "function" == typeof d ? d({
                    x: f,
                    y: m
                }) : {
                    x: f,
                    y: m
                };
            f = g.x, m = g.y;
            var _ = r.hasOwnProperty("x"),
                b = r.hasOwnProperty("y"),
                v = Ve,
                y = Be,
                w = window;
            if (c) {
                var A = It(n),
                    E = "clientHeight",
                    S = "clientWidth";
                if (A === ft(n) && "static" !== Ot(A = Lt(n)).position && "absolute" === a && (E = "scrollHeight", S = "scrollWidth"), s === Be || (s === Ve || s === We) && o === Ye) y = Re, m -= (u && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - i.height, m *= l ? 1 : -1;
                if (s === Ve || (s === Be || s === Re) && o === Ye) v = We, f -= (u && A === w && w.visualViewport ? w.visualViewport.width : A[S]) - i.width, f *= l ? 1 : -1
            }
            var T, C = Object.assign({
                    position: a
                }, c && Ft),
                O = !0 === d ? function(e, t) {
                    var n = e.x,
                        i = e.y,
                        s = t.devicePixelRatio || 1;
                    return {
                        x: wt(n * s) / s || 0,
                        y: wt(i * s) / s || 0
                    }
                }({
                    x: f,
                    y: m
                }, ft(n)) : {
                    x: f,
                    y: m
                };
            return f = O.x, m = O.y, l ? Object.assign({}, C, ((T = {})[y] = b ? "0" : "", T[v] = _ ? "0" : "", T.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", T)) : Object.assign({}, C, ((t = {})[y] = b ? m + "px" : "", t[v] = _ ? f + "px" : "", t.transform = "", t))
        }
        const zt = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function(e) {
                var t = e.state,
                    n = e.options,
                    i = n.gpuAcceleration,
                    s = void 0 === i || i,
                    o = n.adaptive,
                    r = void 0 === o || o,
                    a = n.roundOffsets,
                    l = void 0 === a || a,
                    c = {
                        placement: bt(t.placement),
                        variation: qt(t.placement),
                        popper: t.elements.popper,
                        popperRect: t.rects.popper,
                        gpuAcceleration: s,
                        isFixed: "fixed" === t.options.strategy
                    };
                null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Ht(Object.assign({}, c, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: r,
                    roundOffsets: l
                })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ht(Object.assign({}, c, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l
                })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-placement": t.placement
                })
            },
            data: {}
        };
        var Bt = {
            passive: !0
        };
        const Rt = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function() {},
            effect: function(e) {
                var t = e.state,
                    n = e.instance,
                    i = e.options,
                    s = i.scroll,
                    o = void 0 === s || s,
                    r = i.resize,
                    a = void 0 === r || r,
                    l = ft(t.elements.popper),
                    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                return o && c.forEach((function(e) {
                        e.addEventListener("scroll", n.update, Bt)
                    })), a && l.addEventListener("resize", n.update, Bt),
                    function() {
                        o && c.forEach((function(e) {
                            e.removeEventListener("scroll", n.update, Bt)
                        })), a && l.removeEventListener("resize", n.update, Bt)
                    }
            },
            data: {}
        };
        var Wt = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };

        function Vt(e) {
            return e.replace(/left|right|bottom|top/g, (function(e) {
                return Wt[e]
            }))
        }
        var Ut = {
            start: "end",
            end: "start"
        };

        function Qt(e) {
            return e.replace(/start|end/g, (function(e) {
                return Ut[e]
            }))
        }

        function Kt(e) {
            var t = ft(e);
            return {
                scrollLeft: t.pageXOffset,
                scrollTop: t.pageYOffset
            }
        }

        function Yt(e) {
            return St(Lt(e)).left + Kt(e).scrollLeft
        }

        function Xt(e) {
            var t = Ot(e),
                n = t.overflow,
                i = t.overflowX,
                s = t.overflowY;
            return /auto|scroll|overlay|hidden/.test(n + s + i)
        }

        function Jt(e) {
            return ["html", "body", "#document"].indexOf(ht(e)) >= 0 ? e.ownerDocument.body : mt(e) && Xt(e) ? e : Jt(kt(e))
        }

        function Zt(e, t) {
            var n;
            void 0 === t && (t = []);
            var i = Jt(e),
                s = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
                o = ft(i),
                r = s ? [o].concat(o.visualViewport || [], Xt(i) ? i : []) : i,
                a = t.concat(r);
            return s ? a : a.concat(Zt(kt(r)))
        }

        function Gt(e) {
            return Object.assign({}, e, {
                left: e.x,
                top: e.y,
                right: e.x + e.width,
                bottom: e.y + e.height
            })
        }

        function en(e, t, n) {
            return t === Je ? Gt(function(e, t) {
                var n = ft(e),
                    i = Lt(e),
                    s = n.visualViewport,
                    o = i.clientWidth,
                    r = i.clientHeight,
                    a = 0,
                    l = 0;
                if (s) {
                    o = s.width, r = s.height;
                    var c = Et();
                    (c || !c && "fixed" === t) && (a = s.offsetLeft, l = s.offsetTop)
                }
                return {
                    width: o,
                    height: r,
                    x: a + Yt(e),
                    y: l
                }
            }(e, n)) : pt(t) ? function(e, t) {
                var n = St(e, !1, "fixed" === t);
                return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
            }(t, n) : Gt(function(e) {
                var t, n = Lt(e),
                    i = Kt(e),
                    s = null == (t = e.ownerDocument) ? void 0 : t.body,
                    o = vt(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                    r = vt(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                    a = -i.scrollLeft + Yt(e),
                    l = -i.scrollTop;
                return "rtl" === Ot(s || n).direction && (a += vt(n.clientWidth, s ? s.clientWidth : 0) - o), {
                    width: o,
                    height: r,
                    x: a,
                    y: l
                }
            }(Lt(e)))
        }

        function tn(e, t, n, i) {
            var s = "clippingParents" === t ? function(e) {
                    var t = Zt(kt(e)),
                        n = ["absolute", "fixed"].indexOf(Ot(e).position) >= 0 && mt(e) ? It(e) : e;
                    return pt(n) ? t.filter((function(e) {
                        return pt(e) && Ct(e, n) && "body" !== ht(e)
                    })) : []
                }(e) : [].concat(t),
                o = [].concat(s, [n]),
                r = o[0],
                a = o.reduce((function(t, n) {
                    var s = en(e, n, i);
                    return t.top = vt(s.top, t.top), t.right = yt(s.right, t.right), t.bottom = yt(s.bottom, t.bottom), t.left = vt(s.left, t.left), t
                }), en(e, r, i));
            return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
        }

        function nn(e) {
            var t, n = e.reference,
                i = e.element,
                s = e.placement,
                o = s ? bt(s) : null,
                r = s ? qt(s) : null,
                a = n.x + n.width / 2 - i.width / 2,
                l = n.y + n.height / 2 - i.height / 2;
            switch (o) {
                case Be:
                    t = {
                        x: a,
                        y: n.y - i.height
                    };
                    break;
                case Re:
                    t = {
                        x: a,
                        y: n.y + n.height
                    };
                    break;
                case We:
                    t = {
                        x: n.x + n.width,
                        y: l
                    };
                    break;
                case Ve:
                    t = {
                        x: n.x - i.width,
                        y: l
                    };
                    break;
                default:
                    t = {
                        x: n.x,
                        y: n.y
                    }
            }
            var c = o ? Mt(o) : null;
            if (null != c) {
                var d = "y" === c ? "height" : "width";
                switch (r) {
                    case Ke:
                        t[c] = t[c] - (n[d] / 2 - i[d] / 2);
                        break;
                    case Ye:
                        t[c] = t[c] + (n[d] / 2 - i[d] / 2)
                }
            }
            return t
        }

        function sn(e, t) {
            void 0 === t && (t = {});
            var n = t,
                i = n.placement,
                s = void 0 === i ? e.placement : i,
                o = n.strategy,
                r = void 0 === o ? e.strategy : o,
                a = n.boundary,
                l = void 0 === a ? Xe : a,
                c = n.rootBoundary,
                d = void 0 === c ? Je : c,
                u = n.elementContext,
                h = void 0 === u ? Ze : u,
                f = n.altBoundary,
                p = void 0 !== f && f,
                m = n.padding,
                g = void 0 === m ? 0 : m,
                _ = Nt("number" != typeof g ? g : Pt(g, Qe)),
                b = h === Ze ? Ge : Ze,
                v = e.rects.popper,
                y = e.elements[p ? b : h],
                w = tn(pt(y) ? y : y.contextElement || Lt(e.elements.popper), l, d, r),
                A = St(e.elements.reference),
                E = nn({
                    reference: A,
                    element: v,
                    strategy: "absolute",
                    placement: s
                }),
                S = Gt(Object.assign({}, v, E)),
                T = h === Ze ? S : A,
                C = {
                    top: w.top - T.top + _.top,
                    bottom: T.bottom - w.bottom + _.bottom,
                    left: w.left - T.left + _.left,
                    right: T.right - w.right + _.right
                },
                O = e.modifiersData.offset;
            if (h === Ze && O) {
                var x = O[s];
                Object.keys(C).forEach((function(e) {
                    var t = [We, Re].indexOf(e) >= 0 ? 1 : -1,
                        n = [Be, Re].indexOf(e) >= 0 ? "y" : "x";
                    C[e] += x[n] * t
                }))
            }
            return C
        }

        function on(e, t) {
            void 0 === t && (t = {});
            var n = t,
                i = n.placement,
                s = n.boundary,
                o = n.rootBoundary,
                r = n.padding,
                a = n.flipVariations,
                l = n.allowedAutoPlacements,
                c = void 0 === l ? tt : l,
                d = qt(i),
                u = d ? a ? et : et.filter((function(e) {
                    return qt(e) === d
                })) : Qe,
                h = u.filter((function(e) {
                    return c.indexOf(e) >= 0
                }));
            0 === h.length && (h = u);
            var f = h.reduce((function(t, n) {
                return t[n] = sn(e, {
                    placement: n,
                    boundary: s,
                    rootBoundary: o,
                    padding: r
                })[bt(n)], t
            }), {});
            return Object.keys(f).sort((function(e, t) {
                return f[e] - f[t]
            }))
        }
        const rn = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t = e.state,
                    n = e.options,
                    i = e.name;
                if (!t.modifiersData[i]._skip) {
                    for (var s = n.mainAxis, o = void 0 === s || s, r = n.altAxis, a = void 0 === r || r, l = n.fallbackPlacements, c = n.padding, d = n.boundary, u = n.rootBoundary, h = n.altBoundary, f = n.flipVariations, p = void 0 === f || f, m = n.allowedAutoPlacements, g = t.options.placement, _ = bt(g), b = l || (_ === g || !p ? [Vt(g)] : function(e) {
                            if (bt(e) === Ue) return [];
                            var t = Vt(e);
                            return [Qt(e), t, Qt(t)]
                        }(g)), v = [g].concat(b).reduce((function(e, n) {
                            return e.concat(bt(n) === Ue ? on(t, {
                                placement: n,
                                boundary: d,
                                rootBoundary: u,
                                padding: c,
                                flipVariations: p,
                                allowedAutoPlacements: m
                            }) : n)
                        }), []), y = t.rects.reference, w = t.rects.popper, A = new Map, E = !0, S = v[0], T = 0; T < v.length; T++) {
                        var C = v[T],
                            O = bt(C),
                            x = qt(C) === Ke,
                            L = [Be, Re].indexOf(O) >= 0,
                            k = L ? "width" : "height",
                            D = sn(t, {
                                placement: C,
                                boundary: d,
                                rootBoundary: u,
                                altBoundary: h,
                                padding: c
                            }),
                            I = L ? x ? We : Ve : x ? Re : Be;
                        y[k] > w[k] && (I = Vt(I));
                        var M = Vt(I),
                            $ = [];
                        if (o && $.push(D[O] <= 0), a && $.push(D[I] <= 0, D[M] <= 0), $.every((function(e) {
                                return e
                            }))) {
                            S = C, E = !1;
                            break
                        }
                        A.set(C, $)
                    }
                    if (E)
                        for (var N = function(e) {
                                var t = v.find((function(t) {
                                    var n = A.get(t);
                                    if (n) return n.slice(0, e).every((function(e) {
                                        return e
                                    }))
                                }));
                                if (t) return S = t, "break"
                            }, P = p ? 3 : 1; P > 0; P--) {
                            if ("break" === N(P)) break
                        }
                    t.placement !== S && (t.modifiersData[i]._skip = !0, t.placement = S, t.reset = !0)
                }
            },
            requiresIfExists: ["offset"],
            data: {
                _skip: !1
            }
        };

        function an(e, t, n) {
            return void 0 === n && (n = {
                x: 0,
                y: 0
            }), {
                top: e.top - t.height - n.y,
                right: e.right - t.width + n.x,
                bottom: e.bottom - t.height + n.y,
                left: e.left - t.width - n.x
            }
        }

        function ln(e) {
            return [Be, We, Re, Ve].some((function(t) {
                return e[t] >= 0
            }))
        }
        const cn = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function(e) {
                var t = e.state,
                    n = e.name,
                    i = t.rects.reference,
                    s = t.rects.popper,
                    o = t.modifiersData.preventOverflow,
                    r = sn(t, {
                        elementContext: "reference"
                    }),
                    a = sn(t, {
                        altBoundary: !0
                    }),
                    l = an(r, i),
                    c = an(a, s, o),
                    d = ln(l),
                    u = ln(c);
                t.modifiersData[n] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: c,
                    isReferenceHidden: d,
                    hasPopperEscaped: u
                }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-reference-hidden": d,
                    "data-popper-escaped": u
                })
            }
        };
        const dn = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function(e) {
                var t = e.state,
                    n = e.options,
                    i = e.name,
                    s = n.offset,
                    o = void 0 === s ? [0, 0] : s,
                    r = tt.reduce((function(e, n) {
                        return e[n] = function(e, t, n) {
                            var i = bt(e),
                                s = [Ve, Be].indexOf(i) >= 0 ? -1 : 1,
                                o = "function" == typeof n ? n(Object.assign({}, t, {
                                    placement: e
                                })) : n,
                                r = o[0],
                                a = o[1];
                            return r = r || 0, a = (a || 0) * s, [Ve, We].indexOf(i) >= 0 ? {
                                x: a,
                                y: r
                            } : {
                                x: r,
                                y: a
                            }
                        }(n, t.rects, o), e
                    }), {}),
                    a = r[t.placement],
                    l = a.x,
                    c = a.y;
                null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[i] = r
            }
        };
        const un = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function(e) {
                var t = e.state,
                    n = e.name;
                t.modifiersData[n] = nn({
                    reference: t.rects.reference,
                    element: t.rects.popper,
                    strategy: "absolute",
                    placement: t.placement
                })
            },
            data: {}
        };
        const hn = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t = e.state,
                    n = e.options,
                    i = e.name,
                    s = n.mainAxis,
                    o = void 0 === s || s,
                    r = n.altAxis,
                    a = void 0 !== r && r,
                    l = n.boundary,
                    c = n.rootBoundary,
                    d = n.altBoundary,
                    u = n.padding,
                    h = n.tether,
                    f = void 0 === h || h,
                    p = n.tetherOffset,
                    m = void 0 === p ? 0 : p,
                    g = sn(t, {
                        boundary: l,
                        rootBoundary: c,
                        padding: u,
                        altBoundary: d
                    }),
                    _ = bt(t.placement),
                    b = qt(t.placement),
                    v = !b,
                    y = Mt(_),
                    w = "x" === y ? "y" : "x",
                    A = t.modifiersData.popperOffsets,
                    E = t.rects.reference,
                    S = t.rects.popper,
                    T = "function" == typeof m ? m(Object.assign({}, t.rects, {
                        placement: t.placement
                    })) : m,
                    C = "number" == typeof T ? {
                        mainAxis: T,
                        altAxis: T
                    } : Object.assign({
                        mainAxis: 0,
                        altAxis: 0
                    }, T),
                    O = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                    x = {
                        x: 0,
                        y: 0
                    };
                if (A) {
                    if (o) {
                        var L, k = "y" === y ? Be : Ve,
                            D = "y" === y ? Re : We,
                            I = "y" === y ? "height" : "width",
                            M = A[y],
                            $ = M + g[k],
                            N = M - g[D],
                            P = f ? -S[I] / 2 : 0,
                            j = b === Ke ? E[I] : S[I],
                            q = b === Ke ? -S[I] : -E[I],
                            F = t.elements.arrow,
                            H = f && F ? Tt(F) : {
                                width: 0,
                                height: 0
                            },
                            z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            },
                            B = z[k],
                            R = z[D],
                            W = $t(0, E[I], H[I]),
                            V = v ? E[I] / 2 - P - W - B - C.mainAxis : j - W - B - C.mainAxis,
                            U = v ? -E[I] / 2 + P + W + R + C.mainAxis : q + W + R + C.mainAxis,
                            Q = t.elements.arrow && It(t.elements.arrow),
                            K = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0,
                            Y = null != (L = null == O ? void 0 : O[y]) ? L : 0,
                            X = M + U - Y,
                            J = $t(f ? yt($, M + V - Y - K) : $, M, f ? vt(N, X) : N);
                        A[y] = J, x[y] = J - M
                    }
                    if (a) {
                        var Z, G = "x" === y ? Be : Ve,
                            ee = "x" === y ? Re : We,
                            te = A[w],
                            ne = "y" === w ? "height" : "width",
                            ie = te + g[G],
                            se = te - g[ee],
                            oe = -1 !== [Be, Ve].indexOf(_),
                            re = null != (Z = null == O ? void 0 : O[w]) ? Z : 0,
                            ae = oe ? ie : te - E[ne] - S[ne] - re + C.altAxis,
                            le = oe ? te + E[ne] + S[ne] - re - C.altAxis : se,
                            ce = f && oe ? function(e, t, n) {
                                var i = $t(e, t, n);
                                return i > n ? n : i
                            }(ae, te, le) : $t(f ? ae : ie, te, f ? le : se);
                        A[w] = ce, x[w] = ce - te
                    }
                    t.modifiersData[i] = x
                }
            },
            requiresIfExists: ["offset"]
        };

        function fn(e, t, n) {
            void 0 === n && (n = !1);
            var i, s, o = mt(t),
                r = mt(t) && function(e) {
                    var t = e.getBoundingClientRect(),
                        n = wt(t.width) / e.offsetWidth || 1,
                        i = wt(t.height) / e.offsetHeight || 1;
                    return 1 !== n || 1 !== i
                }(t),
                a = Lt(t),
                l = St(e, r, n),
                c = {
                    scrollLeft: 0,
                    scrollTop: 0
                },
                d = {
                    x: 0,
                    y: 0
                };
            return (o || !o && !n) && (("body" !== ht(t) || Xt(a)) && (c = (i = t) !== ft(i) && mt(i) ? {
                scrollLeft: (s = i).scrollLeft,
                scrollTop: s.scrollTop
            } : Kt(i)), mt(t) ? ((d = St(t, !0)).x += t.clientLeft, d.y += t.clientTop) : a && (d.x = Yt(a))), {
                x: l.left + c.scrollLeft - d.x,
                y: l.top + c.scrollTop - d.y,
                width: l.width,
                height: l.height
            }
        }

        function pn(e) {
            var t = new Map,
                n = new Set,
                i = [];

            function s(e) {
                n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                    if (!n.has(e)) {
                        var i = t.get(e);
                        i && s(i)
                    }
                })), i.push(e)
            }
            return e.forEach((function(e) {
                t.set(e.name, e)
            })), e.forEach((function(e) {
                n.has(e.name) || s(e)
            })), i
        }
        var mn = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };

        function gn() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return !t.some((function(e) {
                return !(e && "function" == typeof e.getBoundingClientRect)
            }))
        }

        function _n(e) {
            void 0 === e && (e = {});
            var t = e,
                n = t.defaultModifiers,
                i = void 0 === n ? [] : n,
                s = t.defaultOptions,
                o = void 0 === s ? mn : s;
            return function(e, t, n) {
                void 0 === n && (n = o);
                var s, r, a = {
                        placement: "bottom",
                        orderedModifiers: [],
                        options: Object.assign({}, mn, o),
                        modifiersData: {},
                        elements: {
                            reference: e,
                            popper: t
                        },
                        attributes: {},
                        styles: {}
                    },
                    l = [],
                    c = !1,
                    d = {
                        state: a,
                        setOptions: function(n) {
                            var s = "function" == typeof n ? n(a.options) : n;
                            u(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
                                reference: pt(e) ? Zt(e) : e.contextElement ? Zt(e.contextElement) : [],
                                popper: Zt(t)
                            };
                            var r, c, h = function(e) {
                                var t = pn(e);
                                return ut.reduce((function(e, n) {
                                    return e.concat(t.filter((function(e) {
                                        return e.phase === n
                                    })))
                                }), [])
                            }((r = [].concat(i, a.options.modifiers), c = r.reduce((function(e, t) {
                                var n = e[t.name];
                                return e[t.name] = n ? Object.assign({}, n, t, {
                                    options: Object.assign({}, n.options, t.options),
                                    data: Object.assign({}, n.data, t.data)
                                }) : t, e
                            }), {}), Object.keys(c).map((function(e) {
                                return c[e]
                            }))));
                            return a.orderedModifiers = h.filter((function(e) {
                                return e.enabled
                            })), a.orderedModifiers.forEach((function(e) {
                                var t = e.name,
                                    n = e.options,
                                    i = void 0 === n ? {} : n,
                                    s = e.effect;
                                if ("function" == typeof s) {
                                    var o = s({
                                            state: a,
                                            name: t,
                                            instance: d,
                                            options: i
                                        }),
                                        r = function() {};
                                    l.push(o || r)
                                }
                            })), d.update()
                        },
                        forceUpdate: function() {
                            if (!c) {
                                var e = a.elements,
                                    t = e.reference,
                                    n = e.popper;
                                if (gn(t, n)) {
                                    a.rects = {
                                        reference: fn(t, It(n), "fixed" === a.options.strategy),
                                        popper: Tt(n)
                                    }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(e) {
                                        return a.modifiersData[e.name] = Object.assign({}, e.data)
                                    }));
                                    for (var i = 0; i < a.orderedModifiers.length; i++)
                                        if (!0 !== a.reset) {
                                            var s = a.orderedModifiers[i],
                                                o = s.fn,
                                                r = s.options,
                                                l = void 0 === r ? {} : r,
                                                u = s.name;
                                            "function" == typeof o && (a = o({
                                                state: a,
                                                options: l,
                                                name: u,
                                                instance: d
                                            }) || a)
                                        } else a.reset = !1, i = -1
                                }
                            }
                        },
                        update: (s = function() {
                            return new Promise((function(e) {
                                d.forceUpdate(), e(a)
                            }))
                        }, function() {
                            return r || (r = new Promise((function(e) {
                                Promise.resolve().then((function() {
                                    r = void 0, e(s())
                                }))
                            }))), r
                        }),
                        destroy: function() {
                            u(), c = !0
                        }
                    };
                if (!gn(e, t)) return d;

                function u() {
                    l.forEach((function(e) {
                        return e()
                    })), l = []
                }
                return d.setOptions(n).then((function(e) {
                    !c && n.onFirstUpdate && n.onFirstUpdate(e)
                })), d
            }
        }
        var bn = _n(),
            vn = _n({
                defaultModifiers: [Rt, un, zt, _t]
            }),
            yn = _n({
                defaultModifiers: [Rt, un, zt, _t, dn, rn, hn, jt, cn]
            });
        const wn = Object.freeze(Object.defineProperty({
                __proto__: null,
                afterMain: at,
                afterRead: st,
                afterWrite: dt,
                applyStyles: _t,
                arrow: jt,
                auto: Ue,
                basePlacements: Qe,
                beforeMain: ot,
                beforeRead: nt,
                beforeWrite: lt,
                bottom: Re,
                clippingParents: Xe,
                computeStyles: zt,
                createPopper: yn,
                createPopperBase: bn,
                createPopperLite: vn,
                detectOverflow: sn,
                end: Ye,
                eventListeners: Rt,
                flip: rn,
                hide: cn,
                left: Ve,
                main: rt,
                modifierPhases: ut,
                offset: dn,
                placements: tt,
                popper: Ze,
                popperGenerator: _n,
                popperOffsets: un,
                preventOverflow: hn,
                read: it,
                reference: Ge,
                right: We,
                start: Ke,
                top: Be,
                variationPlacements: et,
                viewport: Je,
                write: ct
            }, Symbol.toStringTag, {
                value: "Module"
            })),
            An = "dropdown",
            En = ".bs.dropdown",
            Sn = ".data-api",
            Tn = "ArrowUp",
            Cn = "ArrowDown",
            On = `hide${En}`,
            xn = `hidden${En}`,
            Ln = `show${En}`,
            kn = `shown${En}`,
            Dn = `click${En}${Sn}`,
            In = `keydown${En}${Sn}`,
            Mn = `keyup${En}${Sn}`,
            $n = "show",
            Nn = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
            Pn = `${Nn}.${$n}`,
            jn = ".dropdown-menu",
            qn = p() ? "top-end" : "top-start",
            Fn = p() ? "top-start" : "top-end",
            Hn = p() ? "bottom-end" : "bottom-start",
            zn = p() ? "bottom-start" : "bottom-end",
            Bn = p() ? "left-start" : "right-start",
            Rn = p() ? "right-start" : "left-start",
            Wn = {
                autoClose: !0,
                boundary: "clippingParents",
                display: "dynamic",
                offset: [0, 2],
                popperConfig: null,
                reference: "toggle"
            },
            Vn = {
                autoClose: "(boolean|string)",
                boundary: "(string|element)",
                display: "string",
                offset: "(array|string|function)",
                popperConfig: "(null|object|function)",
                reference: "(string|element|object)"
            };
        class Un extends H {
            constructor(e, t) {
                super(e, t), this._popper = null, this._parent = this._element.parentNode, this._menu = B.next(this._element, jn)[0] || B.prev(this._element, jn)[0] || B.findOne(jn, this._parent), this._inNavbar = this._detectNavbar()
            }
            static get Default() {
                return Wn
            }
            static get DefaultType() {
                return Vn
            }
            static get NAME() {
                return An
            }
            toggle() {
                return this._isShown() ? this.hide() : this.show()
            }
            show() {
                if (l(this._element) || this._isShown()) return;
                const e = {
                    relatedTarget: this._element
                };
                if (!$.trigger(this._element, Ln, e).defaultPrevented) {
                    if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
                        for (const e of [].concat(...document.body.children)) $.on(e, "mouseover", d);
                    this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add($n), this._element.classList.add($n), $.trigger(this._element, kn, e)
                }
            }
            hide() {
                if (l(this._element) || !this._isShown()) return;
                const e = {
                    relatedTarget: this._element
                };
                this._completeHide(e)
            }
            dispose() {
                this._popper && this._popper.destroy(), super.dispose()
            }
            update() {
                this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
            }
            _completeHide(e) {
                if (!$.trigger(this._element, On, e).defaultPrevented) {
                    if ("ontouchstart" in document.documentElement)
                        for (const e of [].concat(...document.body.children)) $.off(e, "mouseover", d);
                    this._popper && this._popper.destroy(), this._menu.classList.remove($n), this._element.classList.remove($n), this._element.setAttribute("aria-expanded", "false"), q.removeDataAttribute(this._menu, "popper"), $.trigger(this._element, xn, e)
                }
            }
            _getConfig(e) {
                if ("object" == typeof(e = super._getConfig(e)).reference && !o(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw new TypeError(`${An.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
                return e
            }
            _createPopper() {
                if (void 0 === wn) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                let e = this._element;
                "parent" === this._config.reference ? e = this._parent : o(this._config.reference) ? e = r(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
                const t = this._getPopperConfig();
                this._popper = yn(e, this._menu, t)
            }
            _isShown() {
                return this._menu.classList.contains($n)
            }
            _getPlacement() {
                const e = this._parent;
                if (e.classList.contains("dropend")) return Bn;
                if (e.classList.contains("dropstart")) return Rn;
                if (e.classList.contains("dropup-center")) return "top";
                if (e.classList.contains("dropdown-center")) return "bottom";
                const t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                return e.classList.contains("dropup") ? t ? Fn : qn : t ? zn : Hn
            }
            _detectNavbar() {
                return null !== this._element.closest(".navbar")
            }
            _getOffset() {
                const {
                    offset: e
                } = this._config;
                return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e
            }
            _getPopperConfig() {
                const e = {
                    placement: this._getPlacement(),
                    modifiers: [{
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    }, {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }]
                };
                return (this._inNavbar || "static" === this._config.display) && (q.setDataAttribute(this._menu, "popper", "static"), e.modifiers = [{
                    name: "applyStyles",
                    enabled: !1
                }]), { ...e,
                    ...g(this._config.popperConfig, [e])
                }
            }
            _selectMenuItem({
                key: e,
                target: t
            }) {
                const n = B.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((e => a(e)));
                n.length && b(n, t, e === Cn, !n.includes(t)).focus()
            }
            static jQueryInterface(e) {
                return this.each((function() {
                    const t = Un.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                        t[e]()
                    }
                }))
            }
            static clearMenus(e) {
                if (2 === e.button || "keyup" === e.type && "Tab" !== e.key) return;
                const t = B.find(Pn);
                for (const n of t) {
                    const t = Un.getInstance(n);
                    if (!t || !1 === t._config.autoClose) continue;
                    const i = e.composedPath(),
                        s = i.includes(t._menu);
                    if (i.includes(t._element) || "inside" === t._config.autoClose && !s || "outside" === t._config.autoClose && s) continue;
                    if (t._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                    const o = {
                        relatedTarget: t._element
                    };
                    "click" === e.type && (o.clickEvent = e), t._completeHide(o)
                }
            }
            static dataApiKeydownHandler(e) {
                const t = /input|textarea/i.test(e.target.tagName),
                    n = "Escape" === e.key,
                    i = [Tn, Cn].includes(e.key);
                if (!i && !n) return;
                if (t && !n) return;
                e.preventDefault();
                const s = this.matches(Nn) ? this : B.prev(this, Nn)[0] || B.next(this, Nn)[0] || B.findOne(Nn, e.delegateTarget.parentNode),
                    o = Un.getOrCreateInstance(s);
                if (i) return e.stopPropagation(), o.show(), void o._selectMenuItem(e);
                o._isShown() && (e.stopPropagation(), o.hide(), s.focus())
            }
        }
        $.on(document, In, Nn, Un.dataApiKeydownHandler), $.on(document, In, jn, Un.dataApiKeydownHandler), $.on(document, Dn, Un.clearMenus), $.on(document, Mn, Un.clearMenus), $.on(document, Dn, Nn, (function(e) {
            e.preventDefault(), Un.getOrCreateInstance(this).toggle()
        })), m(Un);
        const Qn = "backdrop",
            Kn = "show",
            Yn = `mousedown.bs.${Qn}`,
            Xn = {
                className: "modal-backdrop",
                clickCallback: null,
                isAnimated: !1,
                isVisible: !0,
                rootElement: "body"
            },
            Jn = {
                className: "string",
                clickCallback: "(function|null)",
                isAnimated: "boolean",
                isVisible: "boolean",
                rootElement: "(element|string)"
            };
        class Zn extends F {
            constructor(e) {
                super(), this._config = this._getConfig(e), this._isAppended = !1, this._element = null
            }
            static get Default() {
                return Xn
            }
            static get DefaultType() {
                return Jn
            }
            static get NAME() {
                return Qn
            }
            show(e) {
                if (!this._config.isVisible) return void g(e);
                this._append();
                const t = this._getElement();
                this._config.isAnimated && u(t), t.classList.add(Kn), this._emulateAnimation((() => {
                    g(e)
                }))
            }
            hide(e) {
                this._config.isVisible ? (this._getElement().classList.remove(Kn), this._emulateAnimation((() => {
                    this.dispose(), g(e)
                }))) : g(e)
            }
            dispose() {
                this._isAppended && ($.off(this._element, Yn), this._element.remove(), this._isAppended = !1)
            }
            _getElement() {
                if (!this._element) {
                    const e = document.createElement("div");
                    e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e
                }
                return this._element
            }
            _configAfterMerge(e) {
                return e.rootElement = r(e.rootElement), e
            }
            _append() {
                if (this._isAppended) return;
                const e = this._getElement();
                this._config.rootElement.append(e), $.on(e, Yn, (() => {
                    g(this._config.clickCallback)
                })), this._isAppended = !0
            }
            _emulateAnimation(e) {
                _(e, this._getElement(), this._config.isAnimated)
            }
        }
        const Gn = ".bs.focustrap",
            ei = `focusin${Gn}`,
            ti = `keydown.tab${Gn}`,
            ni = "backward",
            ii = {
                autofocus: !0,
                trapElement: null
            },
            si = {
                autofocus: "boolean",
                trapElement: "element"
            };
        class oi extends F {
            constructor(e) {
                super(), this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null
            }
            static get Default() {
                return ii
            }
            static get DefaultType() {
                return si
            }
            static get NAME() {
                return "focustrap"
            }
            activate() {
                this._isActive || (this._config.autofocus && this._config.trapElement.focus(), $.off(document, Gn), $.on(document, ei, (e => this._handleFocusin(e))), $.on(document, ti, (e => this._handleKeydown(e))), this._isActive = !0)
            }
            deactivate() {
                this._isActive && (this._isActive = !1, $.off(document, Gn))
            }
            _handleFocusin(e) {
                const {
                    trapElement: t
                } = this._config;
                if (e.target === document || e.target === t || t.contains(e.target)) return;
                const n = B.focusableChildren(t);
                0 === n.length ? t.focus() : this._lastTabNavDirection === ni ? n[n.length - 1].focus() : n[0].focus()
            }
            _handleKeydown(e) {
                "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? ni : "forward")
            }
        }
        const ri = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            ai = ".sticky-top",
            li = "padding-right",
            ci = "margin-right";
        class di {
            constructor() {
                this._element = document.body
            }
            getWidth() {
                const e = document.documentElement.clientWidth;
                return Math.abs(window.innerWidth - e)
            }
            hide() {
                const e = this.getWidth();
                this._disableOverFlow(), this._setElementAttributes(this._element, li, (t => t + e)), this._setElementAttributes(ri, li, (t => t + e)), this._setElementAttributes(ai, ci, (t => t - e))
            }
            reset() {
                this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, li), this._resetElementAttributes(ri, li), this._resetElementAttributes(ai, ci)
            }
            isOverflowing() {
                return this.getWidth() > 0
            }
            _disableOverFlow() {
                this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
            }
            _setElementAttributes(e, t, n) {
                const i = this.getWidth();
                this._applyManipulationCallback(e, (e => {
                    if (e !== this._element && window.innerWidth > e.clientWidth + i) return;
                    this._saveInitialAttribute(e, t);
                    const s = window.getComputedStyle(e).getPropertyValue(t);
                    e.style.setProperty(t, `${n(Number.parseFloat(s))}px`)
                }))
            }
            _saveInitialAttribute(e, t) {
                const n = e.style.getPropertyValue(t);
                n && q.setDataAttribute(e, t, n)
            }
            _resetElementAttributes(e, t) {
                this._applyManipulationCallback(e, (e => {
                    const n = q.getDataAttribute(e, t);
                    null !== n ? (q.removeDataAttribute(e, t), e.style.setProperty(t, n)) : e.style.removeProperty(t)
                }))
            }
            _applyManipulationCallback(e, t) {
                if (o(e)) t(e);
                else
                    for (const n of B.find(e, this._element)) t(n)
            }
        }
        const ui = ".bs.modal",
            hi = `hide${ui}`,
            fi = `hidePrevented${ui}`,
            pi = `hidden${ui}`,
            mi = `show${ui}`,
            gi = `shown${ui}`,
            _i = `resize${ui}`,
            bi = `click.dismiss${ui}`,
            vi = `mousedown.dismiss${ui}`,
            yi = `keydown.dismiss${ui}`,
            wi = `click${ui}.data-api`,
            Ai = "modal-open",
            Ei = "show",
            Si = "modal-static",
            Ti = {
                backdrop: !0,
                focus: !0,
                keyboard: !0
            },
            Ci = {
                backdrop: "(boolean|string)",
                focus: "boolean",
                keyboard: "boolean"
            };
        class Oi extends H {
            constructor(e, t) {
                super(e, t), this._dialog = B.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new di, this._addEventListeners()
            }
            static get Default() {
                return Ti
            }
            static get DefaultType() {
                return Ci
            }
            static get NAME() {
                return "modal"
            }
            toggle(e) {
                return this._isShown ? this.hide() : this.show(e)
            }
            show(e) {
                if (this._isShown || this._isTransitioning) return;
                $.trigger(this._element, mi, {
                    relatedTarget: e
                }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Ai), this._adjustDialog(), this._backdrop.show((() => this._showElement(e))))
            }
            hide() {
                if (!this._isShown || this._isTransitioning) return;
                $.trigger(this._element, hi).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Ei), this._queueCallback((() => this._hideModal()), this._element, this._isAnimated()))
            }
            dispose() {
                $.off(window, ui), $.off(this._dialog, ui), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
            }
            handleUpdate() {
                this._adjustDialog()
            }
            _initializeBackDrop() {
                return new Zn({
                    isVisible: Boolean(this._config.backdrop),
                    isAnimated: this._isAnimated()
                })
            }
            _initializeFocusTrap() {
                return new oi({
                    trapElement: this._element
                })
            }
            _showElement(e) {
                document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
                const t = B.findOne(".modal-body", this._dialog);
                t && (t.scrollTop = 0), u(this._element), this._element.classList.add(Ei);
                this._queueCallback((() => {
                    this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, $.trigger(this._element, gi, {
                        relatedTarget: e
                    })
                }), this._dialog, this._isAnimated())
            }
            _addEventListeners() {
                $.on(this._element, yi, (e => {
                    "Escape" === e.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition())
                })), $.on(window, _i, (() => {
                    this._isShown && !this._isTransitioning && this._adjustDialog()
                })), $.on(this._element, vi, (e => {
                    $.one(this._element, bi, (t => {
                        this._element === e.target && this._element === t.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
                    }))
                }))
            }
            _hideModal() {
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                    document.body.classList.remove(Ai), this._resetAdjustments(), this._scrollBar.reset(), $.trigger(this._element, pi)
                }))
            }
            _isAnimated() {
                return this._element.classList.contains("fade")
            }
            _triggerBackdropTransition() {
                if ($.trigger(this._element, fi).defaultPrevented) return;
                const e = this._element.scrollHeight > document.documentElement.clientHeight,
                    t = this._element.style.overflowY;
                "hidden" === t || this._element.classList.contains(Si) || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(Si), this._queueCallback((() => {
                    this._element.classList.remove(Si), this._queueCallback((() => {
                        this._element.style.overflowY = t
                    }), this._dialog)
                }), this._dialog), this._element.focus())
            }
            _adjustDialog() {
                const e = this._element.scrollHeight > document.documentElement.clientHeight,
                    t = this._scrollBar.getWidth(),
                    n = t > 0;
                if (n && !e) {
                    const e = p() ? "paddingLeft" : "paddingRight";
                    this._element.style[e] = `${t}px`
                }
                if (!n && e) {
                    const e = p() ? "paddingRight" : "paddingLeft";
                    this._element.style[e] = `${t}px`
                }
            }
            _resetAdjustments() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }
            static jQueryInterface(e, t) {
                return this.each((function() {
                    const n = Oi.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                        n[e](t)
                    }
                }))
            }
        }
        $.on(document, wi, '[data-bs-toggle="modal"]', (function(e) {
            const t = B.getElementFromSelector(this);
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(), $.one(t, mi, (e => {
                e.defaultPrevented || $.one(t, pi, (() => {
                    a(this) && this.focus()
                }))
            }));
            const n = B.findOne(".modal.show");
            n && Oi.getInstance(n).hide();
            Oi.getOrCreateInstance(t).toggle(this)
        })), R(Oi), m(Oi);
        const xi = ".bs.offcanvas",
            Li = ".data-api",
            ki = `load${xi}${Li}`,
            Di = "show",
            Ii = "showing",
            Mi = "hiding",
            $i = ".offcanvas.show",
            Ni = `show${xi}`,
            Pi = `shown${xi}`,
            ji = `hide${xi}`,
            qi = `hidePrevented${xi}`,
            Fi = `hidden${xi}`,
            Hi = `resize${xi}`,
            zi = `click${xi}${Li}`,
            Bi = `keydown.dismiss${xi}`,
            Ri = {
                backdrop: !0,
                keyboard: !0,
                scroll: !1
            },
            Wi = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                scroll: "boolean"
            };
        class Vi extends H {
            constructor(e, t) {
                super(e, t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
            }
            static get Default() {
                return Ri
            }
            static get DefaultType() {
                return Wi
            }
            static get NAME() {
                return "offcanvas"
            }
            toggle(e) {
                return this._isShown ? this.hide() : this.show(e)
            }
            show(e) {
                if (this._isShown) return;
                if ($.trigger(this._element, Ni, {
                        relatedTarget: e
                    }).defaultPrevented) return;
                this._isShown = !0, this._backdrop.show(), this._config.scroll || (new di).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Ii);
                this._queueCallback((() => {
                    this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Di), this._element.classList.remove(Ii), $.trigger(this._element, Pi, {
                        relatedTarget: e
                    })
                }), this._element, !0)
            }
            hide() {
                if (!this._isShown) return;
                if ($.trigger(this._element, ji).defaultPrevented) return;
                this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Mi), this._backdrop.hide();
                this._queueCallback((() => {
                    this._element.classList.remove(Di, Mi), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new di).reset(), $.trigger(this._element, Fi)
                }), this._element, !0)
            }
            dispose() {
                this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
            }
            _initializeBackDrop() {
                const e = Boolean(this._config.backdrop);
                return new Zn({
                    className: "offcanvas-backdrop",
                    isVisible: e,
                    isAnimated: !0,
                    rootElement: this._element.parentNode,
                    clickCallback: e ? () => {
                        "static" !== this._config.backdrop ? this.hide() : $.trigger(this._element, qi)
                    } : null
                })
            }
            _initializeFocusTrap() {
                return new oi({
                    trapElement: this._element
                })
            }
            _addEventListeners() {
                $.on(this._element, Bi, (e => {
                    "Escape" === e.key && (this._config.keyboard ? this.hide() : $.trigger(this._element, qi))
                }))
            }
            static jQueryInterface(e) {
                return this.each((function() {
                    const t = Vi.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                        t[e](this)
                    }
                }))
            }
        }
        $.on(document, zi, '[data-bs-toggle="offcanvas"]', (function(e) {
            const t = B.getElementFromSelector(this);
            if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), l(this)) return;
            $.one(t, Fi, (() => {
                a(this) && this.focus()
            }));
            const n = B.findOne($i);
            n && n !== t && Vi.getInstance(n).hide();
            Vi.getOrCreateInstance(t).toggle(this)
        })), $.on(window, ki, (() => {
            for (const e of B.find($i)) Vi.getOrCreateInstance(e).show()
        })), $.on(window, Hi, (() => {
            for (const e of B.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(e).position && Vi.getOrCreateInstance(e).hide()
        })), R(Vi), m(Vi);
        const Ui = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            Qi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
            Ki = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
            Yi = (e, t) => {
                const n = e.nodeName.toLowerCase();
                return t.includes(n) ? !Qi.has(n) || Boolean(Ki.test(e.nodeValue)) : t.filter((e => e instanceof RegExp)).some((e => e.test(n)))
            };
        const Xi = {
                allowList: Ui,
                content: {},
                extraClass: "",
                html: !1,
                sanitize: !0,
                sanitizeFn: null,
                template: "<div></div>"
            },
            Ji = {
                allowList: "object",
                content: "object",
                extraClass: "(string|function)",
                html: "boolean",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                template: "string"
            },
            Zi = {
                entry: "(string|element|function|null)",
                selector: "(string|element)"
            };
        class Gi extends F {
            constructor(e) {
                super(), this._config = this._getConfig(e)
            }
            static get Default() {
                return Xi
            }
            static get DefaultType() {
                return Ji
            }
            static get NAME() {
                return "TemplateFactory"
            }
            getContent() {
                return Object.values(this._config.content).map((e => this._resolvePossibleFunction(e))).filter(Boolean)
            }
            hasContent() {
                return this.getContent().length > 0
            }
            changeContent(e) {
                return this._checkContent(e), this._config.content = { ...this._config.content,
                    ...e
                }, this
            }
            toHtml() {
                const e = document.createElement("div");
                e.innerHTML = this._maybeSanitize(this._config.template);
                for (const [t, n] of Object.entries(this._config.content)) this._setContent(e, n, t);
                const t = e.children[0],
                    n = this._resolvePossibleFunction(this._config.extraClass);
                return n && t.classList.add(...n.split(" ")), t
            }
            _typeCheckConfig(e) {
                super._typeCheckConfig(e), this._checkContent(e.content)
            }
            _checkContent(e) {
                for (const [t, n] of Object.entries(e)) super._typeCheckConfig({
                    selector: t,
                    entry: n
                }, Zi)
            }
            _setContent(e, t, n) {
                const i = B.findOne(n, e);
                i && ((t = this._resolvePossibleFunction(t)) ? o(t) ? this._putElementInTemplate(r(t), i) : this._config.html ? i.innerHTML = this._maybeSanitize(t) : i.textContent = t : i.remove())
            }
            _maybeSanitize(e) {
                return this._config.sanitize ? function(e, t, n) {
                    if (!e.length) return e;
                    if (n && "function" == typeof n) return n(e);
                    const i = (new window.DOMParser).parseFromString(e, "text/html"),
                        s = [].concat(...i.body.querySelectorAll("*"));
                    for (const e of s) {
                        const n = e.nodeName.toLowerCase();
                        if (!Object.keys(t).includes(n)) {
                            e.remove();
                            continue
                        }
                        const i = [].concat(...e.attributes),
                            s = [].concat(t["*"] || [], t[n] || []);
                        for (const t of i) Yi(t, s) || e.removeAttribute(t.nodeName)
                    }
                    return i.body.innerHTML
                }(e, this._config.allowList, this._config.sanitizeFn) : e
            }
            _resolvePossibleFunction(e) {
                return g(e, [this])
            }
            _putElementInTemplate(e, t) {
                if (this._config.html) return t.innerHTML = "", void t.append(e);
                t.textContent = e.textContent
            }
        }
        const es = new Set(["sanitize", "allowList", "sanitizeFn"]),
            ts = "fade",
            ns = "show",
            is = ".modal",
            ss = "hide.bs.modal",
            os = "hover",
            rs = "focus",
            as = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: p() ? "left" : "right",
                BOTTOM: "bottom",
                LEFT: p() ? "right" : "left"
            },
            ls = {
                allowList: Ui,
                animation: !0,
                boundary: "clippingParents",
                container: !1,
                customClass: "",
                delay: 0,
                fallbackPlacements: ["top", "right", "bottom", "left"],
                html: !1,
                offset: [0, 6],
                placement: "top",
                popperConfig: null,
                sanitize: !0,
                sanitizeFn: null,
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                title: "",
                trigger: "hover focus"
            },
            cs = {
                allowList: "object",
                animation: "boolean",
                boundary: "(string|element)",
                container: "(string|element|boolean)",
                customClass: "(string|function)",
                delay: "(number|object)",
                fallbackPlacements: "array",
                html: "boolean",
                offset: "(array|string|function)",
                placement: "(string|function)",
                popperConfig: "(null|object|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                selector: "(string|boolean)",
                template: "string",
                title: "(string|element|function)",
                trigger: "string"
            };
        class ds extends H {
            constructor(e, t) {
                if (void 0 === wn) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                super(e, t), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle()
            }
            static get Default() {
                return ls
            }
            static get DefaultType() {
                return cs
            }
            static get NAME() {
                return "tooltip"
            }
            enable() {
                this._isEnabled = !0
            }
            disable() {
                this._isEnabled = !1
            }
            toggleEnabled() {
                this._isEnabled = !this._isEnabled
            }
            toggle() {
                this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter())
            }
            dispose() {
                clearTimeout(this._timeout), $.off(this._element.closest(is), ss, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose()
            }
            show() {
                if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                if (!this._isWithContent() || !this._isEnabled) return;
                const e = $.trigger(this._element, this.constructor.eventName("show")),
                    t = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
                if (e.defaultPrevented || !t) return;
                this._disposePopper();
                const n = this._getTipElement();
                this._element.setAttribute("aria-describedby", n.getAttribute("id"));
                const {
                    container: i
                } = this._config;
                if (this._element.ownerDocument.documentElement.contains(this.tip) || (i.append(n), $.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(n), n.classList.add(ns), "ontouchstart" in document.documentElement)
                    for (const e of [].concat(...document.body.children)) $.on(e, "mouseover", d);
                this._queueCallback((() => {
                    $.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1
                }), this.tip, this._isAnimated())
            }
            hide() {
                if (!this._isShown()) return;
                if ($.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) return;
                if (this._getTipElement().classList.remove(ns), "ontouchstart" in document.documentElement)
                    for (const e of [].concat(...document.body.children)) $.off(e, "mouseover", d);
                this._activeTrigger.click = !1, this._activeTrigger[rs] = !1, this._activeTrigger[os] = !1, this._isHovered = null;
                this._queueCallback((() => {
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), $.trigger(this._element, this.constructor.eventName("hidden")))
                }), this.tip, this._isAnimated())
            }
            update() {
                this._popper && this._popper.update()
            }
            _isWithContent() {
                return Boolean(this._getTitle())
            }
            _getTipElement() {
                return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
            }
            _createTipElement(e) {
                const t = this._getTemplateFactory(e).toHtml();
                if (!t) return null;
                t.classList.remove(ts, ns), t.classList.add(`bs-${this.constructor.NAME}-auto`);
                const n = (e => {
                    do {
                        e += Math.floor(1e6 * Math.random())
                    } while (document.getElementById(e));
                    return e
                })(this.constructor.NAME).toString();
                return t.setAttribute("id", n), this._isAnimated() && t.classList.add(ts), t
            }
            setContent(e) {
                this._newContent = e, this._isShown() && (this._disposePopper(), this.show())
            }
            _getTemplateFactory(e) {
                return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new Gi({ ...this._config,
                    content: e,
                    extraClass: this._resolvePossibleFunction(this._config.customClass)
                }), this._templateFactory
            }
            _getContentForTemplate() {
                return {
                    ".tooltip-inner": this._getTitle()
                }
            }
            _getTitle() {
                return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
            }
            _initializeOnDelegatedTarget(e) {
                return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
            }
            _isAnimated() {
                return this._config.animation || this.tip && this.tip.classList.contains(ts)
            }
            _isShown() {
                return this.tip && this.tip.classList.contains(ns)
            }
            _createPopper(e) {
                const t = g(this._config.placement, [this, e, this._element]),
                    n = as[t.toUpperCase()];
                return yn(this._element, e, this._getPopperConfig(n))
            }
            _getOffset() {
                const {
                    offset: e
                } = this._config;
                return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e
            }
            _resolvePossibleFunction(e) {
                return g(e, [this._element])
            }
            _getPopperConfig(e) {
                const t = {
                    placement: e,
                    modifiers: [{
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    }, {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }, {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    }, {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    }, {
                        name: "preSetPlacement",
                        enabled: !0,
                        phase: "beforeMain",
                        fn: e => {
                            this._getTipElement().setAttribute("data-popper-placement", e.state.placement)
                        }
                    }]
                };
                return { ...t,
                    ...g(this._config.popperConfig, [t])
                }
            }
            _setListeners() {
                const e = this._config.trigger.split(" ");
                for (const t of e)
                    if ("click" === t) $.on(this._element, this.constructor.eventName("click"), this._config.selector, (e => {
                        this._initializeOnDelegatedTarget(e).toggle()
                    }));
                    else if ("manual" !== t) {
                    const e = t === os ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                        n = t === os ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                    $.on(this._element, e, this._config.selector, (e => {
                        const t = this._initializeOnDelegatedTarget(e);
                        t._activeTrigger["focusin" === e.type ? rs : os] = !0, t._enter()
                    })), $.on(this._element, n, this._config.selector, (e => {
                        const t = this._initializeOnDelegatedTarget(e);
                        t._activeTrigger["focusout" === e.type ? rs : os] = t._element.contains(e.relatedTarget), t._leave()
                    }))
                }
                this._hideModalHandler = () => {
                    this._element && this.hide()
                }, $.on(this._element.closest(is), ss, this._hideModalHandler)
            }
            _fixTitle() {
                const e = this._element.getAttribute("title");
                e && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e), this._element.setAttribute("data-bs-original-title", e), this._element.removeAttribute("title"))
            }
            _enter() {
                this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout((() => {
                    this._isHovered && this.show()
                }), this._config.delay.show))
            }
            _leave() {
                this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout((() => {
                    this._isHovered || this.hide()
                }), this._config.delay.hide))
            }
            _setTimeout(e, t) {
                clearTimeout(this._timeout), this._timeout = setTimeout(e, t)
            }
            _isWithActiveTrigger() {
                return Object.values(this._activeTrigger).includes(!0)
            }
            _getConfig(e) {
                const t = q.getDataAttributes(this._element);
                for (const e of Object.keys(t)) es.has(e) && delete t[e];
                return e = { ...t,
                    ..."object" == typeof e && e ? e : {}
                }, e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
            }
            _configAfterMerge(e) {
                return e.container = !1 === e.container ? document.body : r(e.container), "number" == typeof e.delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), e
            }
            _getDelegateConfig() {
                const e = {};
                for (const [t, n] of Object.entries(this._config)) this.constructor.Default[t] !== n && (e[t] = n);
                return e.selector = !1, e.trigger = "manual", e
            }
            _disposePopper() {
                this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null)
            }
            static jQueryInterface(e) {
                return this.each((function() {
                    const t = ds.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                        t[e]()
                    }
                }))
            }
        }
        m(ds);
        const us = { ...ds.Default,
                content: "",
                offset: [0, 8],
                placement: "right",
                template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                trigger: "click"
            },
            hs = { ...ds.DefaultType,
                content: "(null|string|element|function)"
            };
        class fs extends ds {
            static get Default() {
                return us
            }
            static get DefaultType() {
                return hs
            }
            static get NAME() {
                return "popover"
            }
            _isWithContent() {
                return this._getTitle() || this._getContent()
            }
            _getContentForTemplate() {
                return {
                    ".popover-header": this._getTitle(),
                    ".popover-body": this._getContent()
                }
            }
            _getContent() {
                return this._resolvePossibleFunction(this._config.content)
            }
            static jQueryInterface(e) {
                return this.each((function() {
                    const t = fs.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                        t[e]()
                    }
                }))
            }
        }
        m(fs);
        const ps = ".bs.scrollspy",
            ms = `activate${ps}`,
            gs = `click${ps}`,
            _s = `load${ps}.data-api`,
            bs = "active",
            vs = "[href]",
            ys = ".nav-link",
            ws = `${ys}, .nav-item > ${ys}, .list-group-item`,
            As = {
                offset: null,
                rootMargin: "0px 0px -25%",
                smoothScroll: !1,
                target: null,
                threshold: [.1, .5, 1]
            },
            Es = {
                offset: "(number|null)",
                rootMargin: "string",
                smoothScroll: "boolean",
                target: "element",
                threshold: "array"
            };
        class Ss extends H {
            constructor(e, t) {
                super(e, t), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                    visibleEntryTop: 0,
                    parentScrollTop: 0
                }, this.refresh()
            }
            static get Default() {
                return As
            }
            static get DefaultType() {
                return Es
            }
            static get NAME() {
                return "scrollspy"
            }
            refresh() {
                this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
                for (const e of this._observableSections.values()) this._observer.observe(e)
            }
            dispose() {
                this._observer.disconnect(), super.dispose()
            }
            _configAfterMerge(e) {
                return e.target = r(e.target) || document.body, e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin, "string" == typeof e.threshold && (e.threshold = e.threshold.split(",").map((e => Number.parseFloat(e)))), e
            }
            _maybeEnableSmoothScroll() {
                this._config.smoothScroll && ($.off(this._config.target, gs), $.on(this._config.target, gs, vs, (e => {
                    const t = this._observableSections.get(e.target.hash);
                    if (t) {
                        e.preventDefault();
                        const n = this._rootElement || window,
                            i = t.offsetTop - this._element.offsetTop;
                        if (n.scrollTo) return void n.scrollTo({
                            top: i,
                            behavior: "smooth"
                        });
                        n.scrollTop = i
                    }
                })))
            }
            _getNewObserver() {
                const e = {
                    root: this._rootElement,
                    threshold: this._config.threshold,
                    rootMargin: this._config.rootMargin
                };
                return new IntersectionObserver((e => this._observerCallback(e)), e)
            }
            _observerCallback(e) {
                const t = e => this._targetLinks.get(`#${e.target.id}`),
                    n = e => {
                        this._previousScrollData.visibleEntryTop = e.target.offsetTop, this._process(t(e))
                    },
                    i = (this._rootElement || document.documentElement).scrollTop,
                    s = i >= this._previousScrollData.parentScrollTop;
                this._previousScrollData.parentScrollTop = i;
                for (const o of e) {
                    if (!o.isIntersecting) {
                        this._activeTarget = null, this._clearActiveClass(t(o));
                        continue
                    }
                    const e = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                    if (s && e) {
                        if (n(o), !i) return
                    } else s || e || n(o)
                }
            }
            _initializeTargetsAndObservables() {
                this._targetLinks = new Map, this._observableSections = new Map;
                const e = B.find(vs, this._config.target);
                for (const t of e) {
                    if (!t.hash || l(t)) continue;
                    const e = B.findOne(decodeURI(t.hash), this._element);
                    a(e) && (this._targetLinks.set(decodeURI(t.hash), t), this._observableSections.set(t.hash, e))
                }
            }
            _process(e) {
                this._activeTarget !== e && (this._clearActiveClass(this._config.target), this._activeTarget = e, e.classList.add(bs), this._activateParents(e), $.trigger(this._element, ms, {
                    relatedTarget: e
                }))
            }
            _activateParents(e) {
                if (e.classList.contains("dropdown-item")) B.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(bs);
                else
                    for (const t of B.parents(e, ".nav, .list-group"))
                        for (const e of B.prev(t, ws)) e.classList.add(bs)
            }
            _clearActiveClass(e) {
                e.classList.remove(bs);
                const t = B.find(`${vs}.${bs}`, e);
                for (const e of t) e.classList.remove(bs)
            }
            static jQueryInterface(e) {
                return this.each((function() {
                    const t = Ss.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                        t[e]()
                    }
                }))
            }
        }
        $.on(window, _s, (() => {
            for (const e of B.find('[data-bs-spy="scroll"]')) Ss.getOrCreateInstance(e)
        })), m(Ss);
        const Ts = ".bs.tab",
            Cs = `hide${Ts}`,
            Os = `hidden${Ts}`,
            xs = `show${Ts}`,
            Ls = `shown${Ts}`,
            ks = `click${Ts}`,
            Ds = `keydown${Ts}`,
            Is = `load${Ts}`,
            Ms = "ArrowLeft",
            $s = "ArrowRight",
            Ns = "ArrowUp",
            Ps = "ArrowDown",
            js = "Home",
            qs = "End",
            Fs = "active",
            Hs = "fade",
            zs = "show",
            Bs = ".dropdown-toggle",
            Rs = `:not(${Bs})`,
            Ws = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
            Vs = `${`.nav-link${Rs}, .list-group-item${Rs}, [role="tab"]${Rs}`}, ${Ws}`,
            Us = `.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;
        class Qs extends H {
            constructor(e) {
                super(e), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), $.on(this._element, Ds, (e => this._keydown(e))))
            }
            static get NAME() {
                return "tab"
            }
            show() {
                const e = this._element;
                if (this._elemIsActive(e)) return;
                const t = this._getActiveElem(),
                    n = t ? $.trigger(t, Cs, {
                        relatedTarget: e
                    }) : null;
                $.trigger(e, xs, {
                    relatedTarget: t
                }).defaultPrevented || n && n.defaultPrevented || (this._deactivate(t, e), this._activate(e, t))
            }
            _activate(e, t) {
                if (!e) return;
                e.classList.add(Fs), this._activate(B.getElementFromSelector(e));
                this._queueCallback((() => {
                    "tab" === e.getAttribute("role") ? (e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), $.trigger(e, Ls, {
                        relatedTarget: t
                    })) : e.classList.add(zs)
                }), e, e.classList.contains(Hs))
            }
            _deactivate(e, t) {
                if (!e) return;
                e.classList.remove(Fs), e.blur(), this._deactivate(B.getElementFromSelector(e));
                this._queueCallback((() => {
                    "tab" === e.getAttribute("role") ? (e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), $.trigger(e, Os, {
                        relatedTarget: t
                    })) : e.classList.remove(zs)
                }), e, e.classList.contains(Hs))
            }
            _keydown(e) {
                if (![Ms, $s, Ns, Ps, js, qs].includes(e.key)) return;
                e.stopPropagation(), e.preventDefault();
                const t = this._getChildren().filter((e => !l(e)));
                let n;
                if ([js, qs].includes(e.key)) n = t[e.key === js ? 0 : t.length - 1];
                else {
                    const i = [$s, Ps].includes(e.key);
                    n = b(t, e.target, i, !0)
                }
                n && (n.focus({
                    preventScroll: !0
                }), Qs.getOrCreateInstance(n).show())
            }
            _getChildren() {
                return B.find(Vs, this._parent)
            }
            _getActiveElem() {
                return this._getChildren().find((e => this._elemIsActive(e))) || null
            }
            _setInitialAttributes(e, t) {
                this._setAttributeIfNotExists(e, "role", "tablist");
                for (const e of t) this._setInitialAttributesOnChild(e)
            }
            _setInitialAttributesOnChild(e) {
                e = this._getInnerElement(e);
                const t = this._elemIsActive(e),
                    n = this._getOuterElement(e);
                e.setAttribute("aria-selected", t), n !== e && this._setAttributeIfNotExists(n, "role", "presentation"), t || e.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(e, "role", "tab"), this._setInitialAttributesOnTargetPanel(e)
            }
            _setInitialAttributesOnTargetPanel(e) {
                const t = B.getElementFromSelector(e);
                t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `${e.id}`))
            }
            _toggleDropDown(e, t) {
                const n = this._getOuterElement(e);
                if (!n.classList.contains("dropdown")) return;
                const i = (e, i) => {
                    const s = B.findOne(e, n);
                    s && s.classList.toggle(i, t)
                };
                i(Bs, Fs), i(".dropdown-menu", zs), n.setAttribute("aria-expanded", t)
            }
            _setAttributeIfNotExists(e, t, n) {
                e.hasAttribute(t) || e.setAttribute(t, n)
            }
            _elemIsActive(e) {
                return e.classList.contains(Fs)
            }
            _getInnerElement(e) {
                return e.matches(Vs) ? e : B.findOne(Vs, e)
            }
            _getOuterElement(e) {
                return e.closest(".nav-item, .list-group-item") || e
            }
            static jQueryInterface(e) {
                return this.each((function() {
                    const t = Qs.getOrCreateInstance(this);
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                        t[e]()
                    }
                }))
            }
        }
        $.on(document, ks, Ws, (function(e) {
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(), l(this) || Qs.getOrCreateInstance(this).show()
        })), $.on(window, Is, (() => {
            for (const e of B.find(Us)) Qs.getOrCreateInstance(e)
        })), m(Qs);
        const Ks = ".bs.toast",
            Ys = `mouseover${Ks}`,
            Xs = `mouseout${Ks}`,
            Js = `focusin${Ks}`,
            Zs = `focusout${Ks}`,
            Gs = `hide${Ks}`,
            eo = `hidden${Ks}`,
            to = `show${Ks}`,
            no = `shown${Ks}`,
            io = "hide",
            so = "show",
            oo = "showing",
            ro = {
                animation: "boolean",
                autohide: "boolean",
                delay: "number"
            },
            ao = {
                animation: !0,
                autohide: !0,
                delay: 5e3
            };
        class lo extends H {
            constructor(e, t) {
                super(e, t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
            }
            static get Default() {
                return ao
            }
            static get DefaultType() {
                return ro
            }
            static get NAME() {
                return "toast"
            }
            show() {
                if ($.trigger(this._element, to).defaultPrevented) return;
                this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                this._element.classList.remove(io), u(this._element), this._element.classList.add(so, oo), this._queueCallback((() => {
                    this._element.classList.remove(oo), $.trigger(this._element, no), this._maybeScheduleHide()
                }), this._element, this._config.animation)
            }
            hide() {
                if (!this.isShown()) return;
                if ($.trigger(this._element, Gs).defaultPrevented) return;
                this._element.classList.add(oo), this._queueCallback((() => {
                    this._element.classList.add(io), this._element.classList.remove(oo, so), $.trigger(this._element, eo)
                }), this._element, this._config.animation)
            }
            dispose() {
                this._clearTimeout(), this.isShown() && this._element.classList.remove(so), super.dispose()
            }
            isShown() {
                return this._element.classList.contains(so)
            }
            _maybeScheduleHide() {
                this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                    this.hide()
                }), this._config.delay)))
            }
            _onInteraction(e, t) {
                switch (e.type) {
                    case "mouseover":
                    case "mouseout":
                        this._hasMouseInteraction = t;
                        break;
                    case "focusin":
                    case "focusout":
                        this._hasKeyboardInteraction = t
                }
                if (t) return void this._clearTimeout();
                const n = e.relatedTarget;
                this._element === n || this._element.contains(n) || this._maybeScheduleHide()
            }
            _setListeners() {
                $.on(this._element, Ys, (e => this._onInteraction(e, !0))), $.on(this._element, Xs, (e => this._onInteraction(e, !1))), $.on(this._element, Js, (e => this._onInteraction(e, !0))), $.on(this._element, Zs, (e => this._onInteraction(e, !1)))
            }
            _clearTimeout() {
                clearTimeout(this._timeout), this._timeout = null
            }
            static jQueryInterface(e) {
                return this.each((function() {
                    const t = lo.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                        t[e](this)
                    }
                }))
            }
        }
        R(lo), m(lo);
        return {
            Alert: Q,
            Button: Y,
            Carousel: Oe,
            Collapse: ze,
            Dropdown: Un,
            Modal: Oi,
            Offcanvas: Vi,
            Popover: fs,
            ScrollSpy: Ss,
            Tab: Qs,
            Toast: lo,
            Tooltip: ds
        }
    })),
    /*!
     * smooth-scroll v16.1.3
     * Animate scrolling to anchor links
     * (c) 2020 Chris Ferdinandi
     * MIT License
     * http://github.com/cferdinandi/smooth-scroll
     */
    window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
            var t, n = (this.document || this.ownerDocument).querySelectorAll(e),
                i = this;
            do {
                for (t = n.length; --t >= 0 && n.item(t) !== i;);
            } while (t < 0 && (i = i.parentElement));
            return i
        }),
        function() {
            if ("function" == typeof window.CustomEvent) return !1;

            function e(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
            }
            e.prototype = window.Event.prototype, window.CustomEvent = e
        }(),
        function() {
            for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
                var i = (new Date).getTime(),
                    s = Math.max(0, 16 - (i - e)),
                    o = window.setTimeout((function() {
                        t(i + s)
                    }), s);
                return e = i + s, o
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                clearTimeout(e)
            })
        }(), e = "undefined" != typeof global ? global : "undefined" != typeof window ? window : void 0, t = function(e) {
            var t = {
                    ignore: "[data-scroll-ignore]",
                    header: null,
                    topOnEmptyHash: !0,
                    speed: 500,
                    speedAsDuration: !1,
                    durationMax: null,
                    durationMin: null,
                    clip: !0,
                    offset: 0,
                    easing: "easeInOutCubic",
                    customEasing: null,
                    updateURL: !0,
                    popstate: !0,
                    emitEvents: !0
                },
                n = function() {
                    var e = {};
                    return Array.prototype.forEach.call(arguments, (function(t) {
                        for (var n in t) {
                            if (!t.hasOwnProperty(n)) return;
                            e[n] = t[n]
                        }
                    })), e
                },
                i = function(e) {
                    "#" === e.charAt(0) && (e = e.substr(1));
                    for (var t, n = String(e), i = n.length, s = -1, o = "", r = n.charCodeAt(0); ++s < i;) {
                        if (0 === (t = n.charCodeAt(s))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                        o += t >= 1 && t <= 31 || 127 == t || 0 === s && t >= 48 && t <= 57 || 1 === s && t >= 48 && t <= 57 && 45 === r ? "\\" + t.toString(16) + " " : t >= 128 || 45 === t || 95 === t || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 ? n.charAt(s) : "\\" + n.charAt(s)
                    }
                    return "#" + o
                },
                s = function() {
                    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
                },
                o = function(t) {
                    return t ? (n = t, parseInt(e.getComputedStyle(n).height, 10) + t.offsetTop) : 0;
                    var n
                },
                r = function(t, n, i) {
                    0 === t && document.body.focus(), i || (t.focus(), document.activeElement !== t && (t.setAttribute("tabindex", "-1"), t.focus(), t.style.outline = "none"), e.scrollTo(0, n))
                },
                a = function(t, n, i, s) {
                    if (n.emitEvents && "function" == typeof e.CustomEvent) {
                        var o = new CustomEvent(t, {
                            bubbles: !0,
                            detail: {
                                anchor: i,
                                toggle: s
                            }
                        });
                        document.dispatchEvent(o)
                    }
                };
            return function(l, c) {
                var d, u, h, f, p = {
                        cancelScroll: function(e) {
                            cancelAnimationFrame(f), f = null, e || a("scrollCancel", d)
                        },
                        animateScroll: function(i, l, c) {
                            p.cancelScroll();
                            var u = n(d || t, c || {}),
                                m = "[object Number]" === Object.prototype.toString.call(i),
                                g = m || !i.tagName ? null : i;
                            if (m || g) {
                                var _ = e.pageYOffset;
                                u.header && !h && (h = document.querySelector(u.header));
                                var b, v, y, w = o(h),
                                    A = m ? i : function(t, n, i, o) {
                                        var r = 0;
                                        if (t.offsetParent)
                                            do {
                                                r += t.offsetTop, t = t.offsetParent
                                            } while (t);
                                        return r = Math.max(r - n - i, 0), o && (r = Math.min(r, s() - e.innerHeight)), r
                                    }(g, w, parseInt("function" == typeof u.offset ? u.offset(i, l) : u.offset, 10), u.clip),
                                    E = A - _,
                                    S = s(),
                                    T = 0,
                                    C = function(e, t) {
                                        var n = t.speedAsDuration ? t.speed : Math.abs(e / 1e3 * t.speed);
                                        return t.durationMax && n > t.durationMax ? t.durationMax : t.durationMin && n < t.durationMin ? t.durationMin : parseInt(n, 10)
                                    }(E, u),
                                    O = function(t) {
                                        b || (b = t), T += t - b, y = _ + E * function(e, t) {
                                                var n;
                                                return "easeInQuad" === e.easing && (n = t * t), "easeOutQuad" === e.easing && (n = t * (2 - t)), "easeInOutQuad" === e.easing && (n = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1), "easeInCubic" === e.easing && (n = t * t * t), "easeOutCubic" === e.easing && (n = --t * t * t + 1), "easeInOutCubic" === e.easing && (n = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e.easing && (n = t * t * t * t), "easeOutQuart" === e.easing && (n = 1 - --t * t * t * t), "easeInOutQuart" === e.easing && (n = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e.easing && (n = t * t * t * t * t), "easeOutQuint" === e.easing && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e.easing && (n = t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), e.customEasing && (n = e.customEasing(t)), n || t
                                            }(u, v = (v = 0 === C ? 0 : T / C) > 1 ? 1 : v), e.scrollTo(0, Math.floor(y)),
                                            function(t, n) {
                                                var s = e.pageYOffset;
                                                if (t == n || s == n || (_ < n && e.innerHeight + s) >= S) return p.cancelScroll(!0), r(i, n, m), a("scrollStop", u, i, l), b = null, f = null, !0
                                            }(y, A) || (f = e.requestAnimationFrame(O), b = t)
                                    };
                                0 === e.pageYOffset && e.scrollTo(0, 0),
                                    function(e, t, n) {
                                        t || history.pushState && n.updateURL && history.pushState({
                                            smoothScroll: JSON.stringify(n),
                                            anchor: e.id
                                        }, document.title, e === document.documentElement ? "#top" : "#" + e.id)
                                    }(i, m, u), "matchMedia" in e && e.matchMedia("(prefers-reduced-motion)").matches ? r(i, Math.floor(A), !1) : (a("scrollStart", u, i, l), p.cancelScroll(!0), e.requestAnimationFrame(O))
                            }
                        }
                    },
                    m = function(t) {
                        if (!t.defaultPrevented && !(0 !== t.button || t.metaKey || t.ctrlKey || t.shiftKey) && "closest" in t.target && (u = t.target.closest(l)) && "a" === u.tagName.toLowerCase() && !t.target.closest(d.ignore) && u.hostname === e.location.hostname && u.pathname === e.location.pathname && /#/.test(u.href)) {
                            var n, s;
                            try {
                                n = i(decodeURIComponent(u.hash))
                            } catch (e) {
                                n = i(u.hash)
                            }
                            if ("#" === n) {
                                if (!d.topOnEmptyHash) return;
                                s = document.documentElement
                            } else s = document.querySelector(n);
                            (s = s || "#top" !== n ? s : document.documentElement) && (t.preventDefault(), function(t) {
                                if (history.replaceState && t.updateURL && !history.state) {
                                    var n = e.location.hash;
                                    n = n || "", history.replaceState({
                                        smoothScroll: JSON.stringify(t),
                                        anchor: n || e.pageYOffset
                                    }, document.title, n || e.location.href)
                                }
                            }(d), p.animateScroll(s, u))
                        }
                    },
                    g = function(e) {
                        if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(d)) {
                            var t = history.state.anchor;
                            "string" == typeof t && t && !(t = document.querySelector(i(history.state.anchor))) || p.animateScroll(t, null, {
                                updateURL: !1
                            })
                        }
                    };
                return p.destroy = function() {
                        d && (document.removeEventListener("click", m, !1), e.removeEventListener("popstate", g, !1), p.cancelScroll(), d = null, u = null, h = null, f = null)
                    },
                    function() {
                        if (!("querySelector" in document && "addEventListener" in e && "requestAnimationFrame" in e && "closest" in e.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                        p.destroy(), d = n(t, c || {}), h = d.header ? document.querySelector(d.header) : null, document.addEventListener("click", m, !1), d.updateURL && d.popstate && e.addEventListener("popstate", g, !1)
                    }(), p
            }
        }, "function" == typeof define && define.amd ? define([], (function() {
            return t(e)
        })) : "object" == typeof exports ? module.exports = t(e) : e.SmoothScroll = t(e), (() => {
            const e = document.querySelector(".navbar.fixed-top");
            if (null == e) return;
            const t = e.classList,
                n = e => {
                    e.currentTarget.pageYOffset > 20 ? t.add("navbar-stuck") : t.remove("navbar-stuck")
                };
            window.addEventListener("load", (e => {
                n(e)
            })), window.addEventListener("scroll", (e => {
                n(e)
            }))
        })(), null !== document.querySelector("[data-aos]") && AOS.init(), new SmoothScroll("[data-scroll]", {
            speed: 800,
            speedAsDuration: !0,
            offset: (e, t) => t.dataset.scrollOffset || 20,
            header: "[data-scroll-header]",
            updateURL: !1
        }), (() => {
            const e = document.querySelector(".btn-scroll-top");
            if (null == e) return;
            const t = parseInt(450, 10),
                n = e.querySelector("svg circle"),
                i = n.getTotalLength();
            n.style.strokeDasharray = i, n.style.strokeDashoffset = i;
            window.addEventListener("scroll", (s => {
                s.currentTarget.pageYOffset > t ? e.classList.add("show") : e.classList.remove("show"), (() => {
                    const e = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight),
                        t = i * e;
                    n.style.strokeDashoffset = i - t
                })()
            }))
        })(), (() => {
            const e = document.querySelectorAll(".masonry-grid");
            let t;
            if (null !== e)
                for (let n = 0; n < e.length; n++) {
                    t = new Shuffle(e[n], {
                        itemSelector: ".masonry-grid-item",
                        sizer: ".masonry-grid-item"
                    }), imagesLoaded(e[n]).on("progress", (() => {
                        t.layout()
                    }));
                    const i = e[n].closest(".masonry-filterable");
                    if (null === i) return;
                    const s = i.querySelectorAll(".masonry-filters [data-group]");
                    for (let e = 0; e < s.length; e++) s[e].addEventListener("click", (function(e) {
                        const n = i.querySelector(".masonry-filters .active"),
                            s = this.dataset.group;
                        null !== n && n.classList.remove("active"), this.classList.add("active"), t.filter(s), e.preventDefault()
                    }))
                }
        })(), (() => {
            const e = document.querySelectorAll(".password-toggle");
            for (let t = 0; t < e.length; t++) {
                const n = e[t].querySelector(".form-control");
                e[t].querySelector(".password-toggle-btn").addEventListener("click", (e => {
                    "checkbox" === e.target.type && (e.target.checked ? n.type = "text" : n.type = "password")
                }), !1)
            }
        })(), (() => {
            const e = document.querySelectorAll(".interactive-map");
            if (0 !== e.length)
                for (let t = 0; t < e.length; t++) {
                    const n = e[t].dataset.mapOptions;
                    let i;
                    if (n && "" !== n) {
                        const s = JSON.parse(n),
                            o = s.mapLayer || "https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=BO4zZpr0fIIoydRTOLSx",
                            r = s.center ? s.center : [0, 0],
                            a = s.zoom || 1,
                            l = !1 !== s.scrollWheelZoom,
                            c = s.markers;
                        if (i = L.map(e[t], {
                                scrollWheelZoom: l
                            }).setView(r, a), L.tileLayer(o, {
                                tileSize: 512,
                                zoomOffset: -1,
                                minZoom: 1,
                                attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
                                crossOrigin: !0
                            }).addTo(i), c)
                            for (let e = 0; e < c.length; e++) {
                                const t = c[e].iconUrl,
                                    n = c[e].shadowUrl,
                                    s = L.icon({
                                        iconUrl: t || "assets/img/map/marker-icon.png",
                                        iconSize: [30, 43],
                                        iconAnchor: [14, 43],
                                        shadowUrl: n || "assets/img/map/marker-shadow.png",
                                        shadowSize: [41, 41],
                                        shadowAnchor: [13, 41],
                                        popupAnchor: [1, -40]
                                    }),
                                    o = c[e].popup,
                                    r = L.marker(c[e].position, {
                                        icon: s
                                    }).addTo(i);
                                o && r.bindPopup(o)
                            }
                    } else i = L.map(e[t]).setView([0, 0], 1), L.tileLayer("https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=BO4zZpr0fIIoydRTOLSx", {
                        tileSize: 512,
                        zoomOffset: -1,
                        minZoom: 1,
                        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
                        crossOrigin: !0
                    }).addTo(i)
                }
        })(), (() => {
            const e = document.querySelectorAll(".parallax");
            for (let t = 0; t < e.length; t++) new Parallax(e[t])
        })(), ((e, t, n) => {
            for (let i = 0; i < e.length; i++) t.call(n, i, e[i])
        })(document.querySelectorAll(".swiper"), ((e, t) => {
            let n;
            if (null != t.dataset.swiperOptions && (n = JSON.parse(t.dataset.swiperOptions)), n.thumbnails) {
                let e = n.thumbnails.images;
                n = Object.assign({}, n, {
                    pagination: {
                        el: n.thumbnails.el,
                        clickable: !0,
                        bulletActiveClass: "active",
                        renderBullet: (t, n) => `<li class='swiper-thumbnail ${n}'>\n              <img src='${e[t]}' alt='Thumbnail'>\n            </li>`
                    }
                })
            }
            const i = new Swiper(t, n);
            if (n.controlledSlider) {
                const e = document.querySelector(n.controlledSlider);
                let t;
                null != e.dataset.swiperOptions && (t = JSON.parse(e.dataset.swiperOptions));
                const s = new Swiper(e, t);
                i.controller.control = s
            }
            n.bindedContent && i.on("activeIndexChange", (e => {
                const t = document.querySelector(e.slides[e.activeIndex].dataset.swiperBinded);
                document.querySelector(e.slides[e.previousIndex].dataset.swiperBinded).classList.remove("active"), t.classList.add("active")
            }))
        })), (() => {
            const e = document.querySelectorAll(".gallery");
            if (e.length)
                for (let t = 0; t < e.length; t++) {
                    const n = !!e[t].dataset.thumbnails,
                        i = !!e[t].dataset.video,
                        s = [...[lgZoom, lgFullscreen], ...i ? [lgVideo] : [], ...n ? [lgThumbnail] : []];
                    lightGallery(e[t], {
                        selector: ".gallery-item",
                        plugins: s,
                        licenseKey: "D4194FDD-48924833-A54AECA3-D6F8E646",
                        download: !1,
                        autoplayVideoOnSlide: !0,
                        zoomFromOrigin: !1,
                        youtubePlayerParams: {
                            modestbranding: 1,
                            showinfo: 0,
                            rel: 0
                        },
                        vimeoPlayerParams: {
                            byline: 0,
                            portrait: 0,
                            color: "6366f1"
                        }
                    })
                }
        })(), (() => {
            const e = document.querySelectorAll("[data-chart]");
            if (0 !== e.length)
                for (let t = 0; t < e.length; t++) {
                    const n = JSON.parse(e[t].dataset.chart);
                    new Chart(e[t], n)
                }
        })(), (() => {
            let e = document.querySelectorAll(".range-slider");
            for (let t = 0; t < e.length; t++) {
                let n = e[t].querySelector(".range-slider-ui"),
                    i = e[t].querySelector(".range-slider-value-min"),
                    s = e[t].querySelector(".range-slider-value-max"),
                    o = {
                        dataStartMin: parseInt(e[t].dataset.startMin, 10),
                        dataStartMax: parseInt(e[t].dataset.startMax, 10),
                        dataMin: parseInt(e[t].dataset.min, 10),
                        dataMax: parseInt(e[t].dataset.max, 10),
                        dataStep: parseInt(e[t].dataset.step, 10),
                        dataPips: e[t].dataset.pips,
                        dataTooltips: !e[t].dataset.tooltips || "true" === e[t].dataset.tooltips,
                        dataTooltipPrefix: e[t].dataset.tooltipPrefix || "",
                        dataTooltipSuffix: e[t].dataset.tooltipSuffix || ""
                    },
                    r = o.dataStartMax ? [o.dataStartMin, o.dataStartMax] : [o.dataStartMin],
                    a = !!o.dataStartMax || "lower";
                noUiSlider.create(n, {
                    start: r,
                    connect: a,
                    step: o.dataStep,
                    pips: !!o.dataPips && {
                        mode: "count",
                        values: 5
                    },
                    tooltips: o.dataTooltips,
                    range: {
                        min: o.dataMin,
                        max: o.dataMax
                    },
                    format: {
                        to: function(e) {
                            return o.dataTooltipPrefix + parseInt(e, 10) + o.dataTooltipSuffix
                        },
                        from: function(e) {
                            return Number(e)
                        }
                    }
                }), n.noUiSlider.on("update", ((e, t) => {
                    let n = e[t];
                    n = n.replace(/\D/g, ""), t ? s && (s.value = Math.round(n)) : i && (i.value = Math.round(n))
                })), i && i.addEventListener("change", (function() {
                    n.noUiSlider.set([this.value, null])
                })), s && s.addEventListener("change", (function() {
                    n.noUiSlider.set([null, this.value])
                }))
            }
        })(), (() => {
            const e = document.querySelectorAll(".date-picker");
            if (0 !== e.length)
                for (let t = 0; t < e.length; t++) {
                    const n = {
                        disableMobile: "true"
                    };
                    let i;
                    null != e[t].dataset.datepickerOptions && (i = JSON.parse(e[t].dataset.datepickerOptions));
                    const s = { ...n,
                        ...e[t].classList.contains("date-range") ? {
                            plugins: [new rangePlugin({
                                input: e[t].dataset.linkedInput
                            })]
                        } : "{}",
                        ...i
                    };
                    flatpickr(e[t], s)
                }
        })(), ((e, t, n) => {
            for (let i = 0; i < e.length; i++) t.call(n, i, e[i])
        })(document.querySelectorAll(".calendar"), ((e, t) => {
            let n;
            null != t.dataset.calendarOptions && (n = JSON.parse(t.dataset.calendarOptions));
            let i = {
                themeSystem: "bootstrap5",
                ...n
            };
            new FullCalendar.Calendar(t, i).render()
        })), window.addEventListener("load", (() => {
            const e = document.getElementsByClassName("needs-validation");
            Array.prototype.filter.call(e, (e => {
                e.addEventListener("submit", (t => {
                    !1 === e.checkValidity() && (t.preventDefault(), t.stopPropagation()), e.classList.add("was-validated")
                }), !1)
            }))
        }), !1), (() => {
            const e = document.querySelectorAll("[data-format]");
            if (0 !== e.length)
                for (let t = 0; t < e.length; t++) {
                    let n, i = e[t],
                        s = i.parentNode.querySelector(".credit-card-icon");
                    null != i.dataset.format && (n = JSON.parse(i.dataset.format)), s ? new Cleave(i, { ...n,
                        onCreditCardTypeChanged: e => {
                            s.className = "credit-card-icon " + e
                        }
                    }) : new Cleave(i, n)
                }
        })(), (() => {
            const e = document.querySelectorAll("[data-binded-label]");
            for (let t = 0; t < e.length; t++) e[t].addEventListener("change", (function() {
                const e = this.dataset.bindedLabel;
                try {
                    document.getElementById(e).textContent = this.value
                } catch (e) {
                    (e.message = "Cannot set property 'textContent' of null") && console.error("Make sure the [data-binded-label] matches with the id of the target element you want to change text of!")
                }
            }))
        })(), (() => {
            const e = document.querySelectorAll("[data-binded-content]"),
                t = e => {
                    const t = document.querySelector(e);
                    (e => {
                        let t = [],
                            n = e.parentNode.firstChild;
                        for (; n;) 1 === n.nodeType && n !== e && t.push(n), n = n.nextSibling;
                        return t
                    })(t).map((e => {
                        e.classList.remove("active")
                    })), t.classList.add("active")
                };
            for (let n = 0; n < e.length; n++) e[n].addEventListener("click", (e => {
                t(e.currentTarget.dataset.bindedContent)
            }))
        })(), (() => {
            const e = document.querySelectorAll(".count-input");
            for (let t = 0; t < e.length; t++) {
                const n = e[t],
                    i = n.querySelector("[data-increment]"),
                    s = n.querySelector("[data-decrement]"),
                    o = n.querySelector(".form-control"),
                    r = () => {
                        o.value++
                    },
                    a = () => {
                        o.value > 0 && o.value--
                    };
                i.addEventListener("click", r), s.addEventListener("click", a)
            }
        })(), (() => {
            const e = document.querySelectorAll("[data-focus-on-open]");
            if (null !== e)
                for (let t = 0; t < e.length; t++) {
                    const n = JSON.parse(e[t].dataset.focusOnOpen);
                    document.querySelector(n[1]).addEventListener(`shown.bs.${n[0]}`, (() => {
                        e[t].focus()
                    }))
                }
        })(), [...document.querySelectorAll('[data-bs-toggle="tooltip"]')].map((e => new bootstrap.Tooltip(e, {
            trigger: "hover"
        }))), [...document.querySelectorAll('[data-bs-toggle="popover"]')].map((e => new bootstrap.Popover(e))), [].slice.call(document.querySelectorAll(".toast")).map((e => new bootstrap.Toast(e))), (() => {
            const e = document.querySelectorAll('[data-bs-toggle="video"]');
            if (e.length)
                for (let t = 0; t < e.length; t++) lightGallery(e[t], {
                    selector: "this",
                    plugins: [lgVideo],
                    licenseKey: "D4194FDD-48924833-A54AECA3-D6F8E646",
                    download: !1,
                    youtubePlayerParams: {
                        modestbranding: 1,
                        showinfo: 0,
                        rel: 0
                    },
                    vimeoPlayerParams: {
                        byline: 0,
                        portrait: 0,
                        color: "6366f1"
                    }
                })
        })(), (() => {
            const e = document.querySelectorAll(".price-switch-wrapper");
            if (e.length <= 0) return;
            const t = (e, t) => {
                    for (let n = 0; n < e.length; n++) t[n].classList.add("d-none"), e[n].classList.remove("d-none")
                },
                n = (e, t) => {
                    for (let n = 0; n < e.length; n++) e[n].classList.add("d-none"), t[n].classList.remove("d-none")
                };
            for (let i = 0; i < e.length; i++) {
                e[i].querySelector('[data-bs-toggle="price"]').addEventListener("change", (e => {
                    const i = e.currentTarget.querySelector("[data-monthly-switch]"),
                        s = e.currentTarget.querySelector("[data-annual-switch]"),
                        o = e.currentTarget.closest(".price-switch-wrapper").querySelectorAll("[data-monthly-price]"),
                        r = e.currentTarget.closest(".price-switch-wrapper").querySelectorAll("[data-annual-price]");
                    1 == i.checked && t(o, r), 1 == s.checked && n(o, r)
                }))
            }
        })(), (() => {
            const e = document.querySelectorAll('[data-bs-toggle="checkbox"]');
            if (0 !== e.length)
                for (let t = 0; t < e.length; t++) e[t].addEventListener("click", (e => {
                    e.preventDefault();
                    let t = document.querySelector(e.target.dataset.bsTarget),
                        n = t.querySelectorAll('input[type="checkbox"]');
                    if (t.classList.toggle("all-checked"), t.classList.contains("all-checked"))
                        for (let e = 0; e < n.length; e++) n[e].checked = !0;
                    else
                        for (let e = 0; e < n.length; e++) n[e].checked = !1
                }))
        })(), (() => {
            const e = document.querySelectorAll(".countdown");
            if (0 !== e.length)
                for (let t = 0; t < e.length; t++) {
                    const n = e[t].dataset.countdownDate;
                    timezz(e[t], {
                        date: n
                    })
                }
        })(), (() => {
            const e = document.querySelectorAll(".subscription-form");
            if (null === e) return;
            for (let n = 0; n < e.length; n++) {
                const i = e[n].querySelector('button[type="submit"]'),
                    s = i.innerHTML,
                    o = e[n].querySelector(".form-control"),
                    r = e[n].querySelector(".subscription-form-antispam"),
                    a = e[n].querySelector(".subscription-status");
                e[n].addEventListener("submit", (function(e) {
                    e && e.preventDefault(), "" === r.value && t(this, i, o, s, a)
                }))
            }
            const t = (e, t, n, i, s) => {
                t.innerHTML = "Sending...";
                const o = e.action.replace("/post?", "/post-json?"),
                    r = "&" + n.name + "=" + encodeURIComponent(n.value),
                    a = document.createElement("script");
                a.src = o + "&c=callback" + r, document.body.appendChild(a);
                const l = "callback";
                window[l] = e => {
                    delete window[l], document.body.removeChild(a), t.innerHTML = i, "success" == e.result ? (n.classList.remove("is-invalid"), n.classList.add("is-valid"), s.classList.remove("status-error"), s.classList.add("status-success"), s.innerHTML = e.msg, setTimeout((() => {
                        n.classList.remove("is-valid"), s.innerHTML = "", s.classList.remove("status-success")
                    }), 6e3)) : (n.classList.remove("is-valid"), n.classList.add("is-invalid"), s.classList.remove("status-success"), s.classList.add("status-error"), s.innerHTML = e.msg.substring(4), setTimeout((() => {
                        n.classList.remove("is-invalid"), s.innerHTML = "", s.classList.remove("status-error")
                    }), 6e3))
                }
            }
        })()
}();
//# sourceMappingURL=theme.min.js.map