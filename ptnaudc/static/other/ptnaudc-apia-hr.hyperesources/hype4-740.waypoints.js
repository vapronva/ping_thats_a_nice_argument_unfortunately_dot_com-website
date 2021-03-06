(function () {
    (function () {
        function b(f) {
            if (!f) throw Error("No options passed to Waypoint constructor");
            if (!f.element) throw Error("No element option passed to Waypoint constructor");
            if (!f.handler) throw Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + d;
            this.options = b.Adapter.extend({}, b.defaults, f);
            this.element = this.options.element;
            this.adapter = new b.Adapter(this.element);
            this.callback = f.handler;
            this.axis = this.options.horizontal ? "horizontal" : "vertical";
            this.enabled = this.options.enabled;
            this.triggerPoint = null;
            this.group = b.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            });
            this.context = b.Context.findOrCreateByElement(this.options.context);
            b.offsetAliases[this.options.offset] && (this.options.offset = b.offsetAliases[this.options.offset]);
            this.group.add(this);
            this.context.add(this);
            a[this.key] = this;
            d += 1
        }
        var d = 0,
            a = {};
        b.prototype.queueTrigger = function (a) {
            this.group.queueTrigger(this, a)
        };
        b.prototype.trigger = function (a) {
            this.enabled && this.callback && this.callback.apply(this, a)
        };
        b.prototype.destroy =
            function () {
                this.context.remove(this);
                this.group.remove(this);
                delete a[this.key]
            };
        b.prototype.disable = function () {
            this.enabled = !1;
            return this
        };
        b.prototype.enable = function () {
            this.context.refresh();
            this.enabled = !0;
            return this
        };
        b.prototype.next = function () {
            return this.group.next(this)
        };
        b.prototype.previous = function () {
            return this.group.previous(this)
        };
        b.invokeAll = function (b) {
            var e = [],
                c;
            for (c in a) e.push(a[c]);
            c = 0;
            for (var n = e.length; c < n; c++) e[c][b]()
        };
        b.destroyAll = function () {
            b.invokeAll("destroy")
        };
        b.disableAll =
            function () {
                b.invokeAll("disable")
            };
        b.enableAll = function () {
            b.invokeAll("enable")
        };
        b.refreshAll = function () {
            b.Context.refreshAll()
        };
        b.viewportHeight = function () {
            return window.innerHeight || document.documentElement.clientHeight
        };
        b.viewportWidth = function () {
            return document.documentElement.clientWidth
        };
        b.adapters = [];
        b.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        };
        b.offsetAliases = {
            "bottom-in-view": function () {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function () {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        };
        window.HYPE_w_740 = b
    })();
    (function () {
        function b(a) {
            window.setTimeout(a, 1E3 / 60)
        }

        function d(n) {
            this.element = n;
            this.Adapter = e.Adapter;
            this.adapter = new this.Adapter(n);
            this.key = "waypoint-context-" + a;
            this.didResize = this.didScroll = !1;
            this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            };
            this.waypoints = {
                vertical: {},
                horizontal: {}
            };
            n.waypointContextKey = this.key;
            f[n.waypointContextKey] = this;
            a += 1;
            this.createThrottledScrollHandler();
            this.createThrottledResizeHandler()
        }
        var a = 0,
            f = {},
            e = window.HYPE_w_740,
            c = window.onload;
        d.prototype.add = function (a) {
            this.waypoints[a.options.horizontal ? "horizontal" : "vertical"][a.key] = a;
            this.refresh()
        };
        d.prototype.checkEmpty = function () {
            var a = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                c = this.Adapter.isEmptyObject(this.waypoints.vertical);
            a && c && (this.adapter.off(".waypoints"), delete f[this.key])
        };
        d.prototype.createThrottledResizeHandler = function () {
            function a() {
                c.handleResize();
                c.didResize = !1
            }
            var c = this;
            this.adapter.on("resize.waypoints", function () {
                c.didResize || (c.didResize = !0, e.requestAnimationFrame(a))
            })
        };
        d.prototype.createThrottledScrollHandler = function () {
            function a() {
                c.handleScroll();
                c.didScroll = !1
            }
            var c = this;
            this.adapter.on("scroll.waypoints", function () {
                if (!c.didScroll || e.isTouch) c.didScroll = !0, e.requestAnimationFrame(a)
            })
        };
        d.prototype.handleResize = function () {
            e.Context.refreshAll()
        };
        d.prototype.handleScroll = function () {
            var a = {},
                c = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                },
                b;
            for (b in c) {
                var f = c[b],
                    e = f.newScroll > f.oldScroll ? f.forward : f.backward,
                    d;
                for (d in this.waypoints[b]) {
                    var h = this.waypoints[b][d],
                        k = f.oldScroll < h.triggerPoint,
                        m = f.newScroll >= h.triggerPoint,
                        p = !k && !m;
                    if (k && m || p) h.queueTrigger(e), a[h.group.id] = h.group
                }
            }
            for (var s in a) a[s].flushTriggers();
            this.oldScroll = {
                x: c.horizontal.newScroll,
                y: c.vertical.newScroll
            }
        };
        d.prototype.innerHeight = function () {
            return this.element == this.element.window ? e.viewportHeight() :
                this.adapter.innerHeight()
        };
        d.prototype.remove = function (a) {
            delete this.waypoints[a.axis][a.key];
            this.checkEmpty()
        };
        d.prototype.innerWidth = function () {
            return this.element == this.element.window ? e.viewportWidth() : this.adapter.innerWidth()
        };
        d.prototype.destroy = function () {
            var a = [],
                c;
            for (c in this.waypoints)
                for (var b in this.waypoints[c]) a.push(this.waypoints[c][b]);
            c = 0;
            for (b = a.length; c < b; c++) a[c].destroy()
        };
        d.prototype.refresh = function () {
            var a = this.element == this.element.window,
                c = a ? void 0 : this.adapter.offset(),
                b = {};
            this.handleScroll();
            var a = {
                    horizontal: {
                        contextOffset: a ? 0 : c.left,
                        contextScroll: a ? 0 : this.oldScroll.x,
                        contextDimension: this.innerWidth(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: a ? 0 : c.top,
                        contextScroll: a ? 0 : this.oldScroll.y,
                        contextDimension: this.innerHeight(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                },
                f;
            for (f in a) {
                var c = a[f],
                    d;
                for (d in this.waypoints[f]) {
                    var g = this.waypoints[f][d],
                        h = g.options.offset,
                        k = g.triggerPoint,
                        m = 0,
                        p = null == k;
                    g.element !== g.element.window && (m = g.adapter.offset()[c.offsetProp]);
                    "function" === typeof h ? h = h.apply(g) : "string" === typeof h && (h = parseFloat(h), -1 < g.options.offset.indexOf("%") && (h = Math.ceil(c.contextDimension * h / 100)));
                    g.triggerPoint = m + (c.contextScroll - c.contextOffset) - h;
                    k = k < c.oldScroll;
                    m = g.triggerPoint >= c.oldScroll;
                    h = k && m;
                    k = !k && !m;
                    !p && h ? (g.queueTrigger(c.backward), b[g.group.id] = g.group) : !p && k ? (g.queueTrigger(c.forward), b[g.group.id] = g.group) : p && c.oldScroll >= g.triggerPoint && (g.queueTrigger(c.forward),
                        b[g.group.id] = g.group)
                }
            }
            e.requestAnimationFrame(function () {
                for (var a in b) b[a].flushTriggers()
            });
            return this
        };
        d.findOrCreateByElement = function (a) {
            return d.findByElement(a) || new d(a)
        };
        d.refreshAll = function () {
            for (var a in f) f[a].refresh()
        };
        d.findByElement = function (a) {
            return f[a.waypointContextKey]
        };
        window.onload = function () {
            c && c();
            d.refreshAll()
        };
        e.requestAnimationFrame = function (a) {
            (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || b).call(window, a)
        };
        e.Context = d
    })();
    (function () {
        function b(a, b) {
            return a.triggerPoint - b.triggerPoint
        }

        function d(a, b) {
            return b.triggerPoint - a.triggerPoint
        }

        function a(a) {
            this.name = a.name;
            this.axis = a.axis;
            this.id = this.name + "-" + this.axis;
            this.waypoints = [];
            this.clearTriggerQueues();
            f[this.axis][this.name] = this
        }
        var f = {
                vertical: {},
                horizontal: {}
            },
            e = window.HYPE_w_740;
        a.prototype.add = function (a) {
            this.waypoints.push(a)
        };
        a.prototype.clearTriggerQueues = function () {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        };
        a.prototype.flushTriggers = function () {
            for (var a in this.triggerQueues) {
                var f =
                    this.triggerQueues[a];
                f.sort("up" === a || "left" === a ? d : b);
                for (var e = 0, q = f.length; e < q; e += 1) {
                    var r = f[e];
                    (r.options.continuous || e === f.length - 1) && r.trigger([a])
                }
            }
            this.clearTriggerQueues()
        };
        a.prototype.next = function (a) {
            this.waypoints.sort(b);
            a = e.Adapter.inArray(a, this.waypoints);
            return a === this.waypoints.length - 1 ? null : this.waypoints[a + 1]
        };
        a.prototype.previous = function (a) {
            this.waypoints.sort(b);
            return (a = e.Adapter.inArray(a, this.waypoints)) ? this.waypoints[a - 1] : null
        };
        a.prototype.queueTrigger = function (a, b) {
            this.triggerQueues[b].push(a)
        };
        a.prototype.remove = function (a) {
            a = e.Adapter.inArray(a, this.waypoints); - 1 < a && this.waypoints.splice(a, 1)
        };
        a.prototype.first = function () {
            return this.waypoints[0]
        };
        a.prototype.last = function () {
            return this.waypoints[this.waypoints.length - 1]
        };
        a.findOrCreate = function (b) {
            return f[b.axis][b.name] || new a(b)
        };
        e.Group = a
    })();
    (function () {
        function b(a) {
            this.element = a;
            this.handlers = {}
        }
        var d = window.HYPE_w_740;
        b.prototype.innerHeight = function () {
            var a = 0;
            this.element === this.element.window ? a = this.element.innerHeight : (a = this.element.clientHeight, this.element.getBoundingClientRect && (a = this.element.getBoundingClientRect(), a = a.bottom - a.top));
            return a
        };
        b.prototype.innerWidth = function () {
            var a = 0;
            this.element === this.element.window ? a = this.element.innerWidth : (a = this.element.clientWidth, this.element.getBoundingClientRect && (a = this.element.getBoundingClientRect(),
                a = a.right - a.left));
            return a
        };
        b.prototype.off = function (a, b) {
            function e(a, b, c) {
                for (var f = 0, e = b.length - 1; f < e; f++) {
                    var d = b[f];
                    c && c !== d || a.removeEventListener(d)
                }
            }
            var c = a.split("."),
                d = c[0],
                c = c[1],
                l = this.element;
            if (c && this.handlers[c] && d) e(l, this.handlers[c][d], b), this.handlers[c][d] = [];
            else if (d)
                for (var q in this.handlers) e(l, this.handlers[q][d] || [], b), this.handlers[q][d] = [];
            else if (c && this.handlers[c]) {
                for (var r in this.handlers[c]) e(l, this.handlers[c][r], b);
                this.handlers[c] = {}
            }
        };
        b.prototype.offset = function () {
            if (!this.element.ownerDocument) return null;
            var a = this.element.ownerDocument.documentElement,
                b = this.element.ownerDocument === this.element.ownerDocument.window ? this.element.ownerDocument : this.element.ownerDocument.defaultView,
                e = {
                    top: 0,
                    left: 0
                };
            this.element.getBoundingClientRect && (e = this.element.getBoundingClientRect());
            return {
                top: e.top + b.pageYOffset - a.clientTop,
                left: e.left + b.pageXOffset - a.clientLeft
            }
        };
        b.prototype.on = function (a, b) {
            var e = a.split("."),
                c = e[0],
                e = e[1] || "__default",
                e = this.handlers[e] = this.handlers[e] || {};
            (e[c] = e[c] || []).push(b);
            this.element.addEventListener(c,
                b)
        };
        b.prototype.outerHeight = function (a) {
            var b = this.innerHeight();
            a && this.element !== this.element.window && (a = window.getComputedStyle(this.element), b += parseInt(a.marginTop, 10), b += parseInt(a.marginBottom, 10));
            return b
        };
        b.prototype.outerWidth = function (a) {
            var b = this.innerWidth();
            a && this.element !== this.element.window && (a = window.getComputedStyle(this.element), b += parseInt(a.marginLeft, 10), b += parseInt(a.marginRight, 10));
            return b
        };
        b.prototype.scrollLeft = function () {
            var a = this.element === this.element.window ? this.element :
                this.element.defaultView;
            return a ? a.pageXOffset : this.element.scrollLeft
        };
        b.prototype.scrollTop = function () {
            var a = this.element === this.element.window ? this.element : this.element.defaultView;
            return a ? a.pageYOffset : this.element.scrollTop
        };
        b.extend = function () {
            for (var a = Array.prototype.slice.call(arguments), b = 1, e = a.length; b < e; b++) {
                var c = a[0],
                    d = a[b];
                if ("object" === typeof c && "object" === typeof d) {
                    var l = void 0;
                    for (l in d) d.hasOwnProperty(l) && (c[l] = d[l])
                }
            }
            return a[0]
        };
        b.inArray = function (a, b, d) {
            return null == b ? -1 :
                b.indexOf(a, d)
        };
        b.isEmptyObject = function (a) {
            for (var b in a) return !1;
            return !0
        };
        d.adapters.push({
            name: "noframework",
            Adapter: b
        });
        d.Adapter = b
    })();
    (function () {
        function b() {}

        function d(b) {
            this.options = a.Adapter.extend({}, d.defaults, b);
            this.axis = this.options.horizontal ? "horizontal" : "vertical";
            this.waypoints = [];
            this.createWaypoints()
        }
        var a = window.HYPE_w_740;
        d.prototype.createWaypoints = function () {
            for (var a = this, b = {
                    vertical: [{
                            down: "enter",
                            up: "noop",
                            offset: function () {
                                return this.context.innerHeight() - a.options.elementOffset
                            }
                        }, {
                            down: "noop",
                            up: "exit",
                            offset: function () {
                                return this.context.innerHeight()
                            }
                        }, {
                            down: "exit",
                            up: "noop",
                            offset: function () {
                                return -this.adapter.outerHeight()
                            }
                        },
                        {
                            down: "noop",
                            up: "enter",
                            offset: function () {
                                return -this.adapter.outerHeight() + a.options.elementOffset
                            }
                        }
                    ]
                }, c = 0, d = b[this.axis].length; c < d; c++) this.createWaypoint(b[this.axis][c])
        };
        d.prototype.createWaypoint = function (b) {
            var d = this;
            this.waypoints.push(new a({
                element: this.options.element,
                handler: function (a) {
                    return function (b) {
                        d.options[a[b]].call(this, b);
                        d.options.triggerOnce && this.destroy()
                    }
                }(b),
                offset: b.offset,
                horizontal: this.options.horizontal
            }))
        };
        d.prototype.destroy = function () {
            for (var a = 0, b = this.waypoints.length; a <
                b; a++) this.waypoints[a].destroy();
            this.waypoints = []
        };
        d.defaults = {
            enter: b,
            entered: b,
            exit: b,
            exited: b,
            noop: b
        };
        a.hypeS = d
    })();
    (function () {
        var b = [];
        null != window.HYPE_wdtl_740 && (b = window.HYPE_wdtl_740.slice(0));
        window.HYPE_wdtl_740 = null;
        for (var d = 0; d < b.length; d++) b[d]()
    })();
})();